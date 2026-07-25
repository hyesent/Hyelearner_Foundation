// ============================================================
// HYELEARNER: HYETUTOR HOOK
// Manages HyeTutor data, caching, and AI interactions
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react'
import { useAuth } from '../../../hooks'
import { storage } from '../../../storage'
import { ai } from '../../../services'

// ============================================================
// CONSTANTS
// ============================================================

const CACHE_KEY_PREFIX = 'hyetutor'

// ============================================================
// TIMEZONE HELPERS
// ============================================================

const getTodayInUserTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return new Date().toLocaleDateString('en-CA', { timeZone: tz })
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

const getCacheKey = (userId) => {
  const today = getTodayInUserTimezone()
  return `${CACHE_KEY_PREFIX}_${userId || 'anonymous'}_${today}`
}

// ============================================================
// HOOK
// ============================================================

export function useHyeTutor() {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)
  const [isStale, setIsStale] = useState(false)
  
  // ✅ Use ref to prevent infinite loops
  const isInitialized = useRef(false)
  const isAnalyzing = useRef(false)

  // ============================================================
  // BUNDLE DATA
  // ============================================================

  const bundleData = useCallback(() => {
    if (!user) {
      return { error: 'No user authenticated' }
    }

    const mastery = storage.getMastery()
    const sessions = storage.getSessions()
    const mistakes = storage.getMistakes()
    const gamification = storage.getGamification()
    const planner = storage.getPlanner()

    const today = getTodayInUserTimezone()
    const todaySessions = sessions.filter(s => {
      const sessionDate = new Date(s.createdAt || s.date).toISOString().split('T')[0]
      return sessionDate === today
    })

    const todayMistakes = mistakes.filter(m => {
      const mistakeDate = new Date(m.createdAt).toISOString().split('T')[0]
      return mistakeDate === today
    })

    const weakTopics = {}
    mistakes.forEach(m => {
      const topic = m.topic || 'General'
      if (!weakTopics[topic]) weakTopics[topic] = { count: 0, accuracy: 0, subject: m.subject || 'General' }
      weakTopics[topic].count++
    })

    const now = new Date()
    const thirtyDaysAgo = new Date(now)
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const recentSessions = sessions.filter(s => 
      new Date(s.createdAt || s.date) > thirtyDaysAgo
    )

    const studyDays = recentSessions.reduce((days, s) => {
      const date = new Date(s.createdAt || s.date).toISOString().split('T')[0]
      if (!days.includes(date)) days.push(date)
      return days
    }, [])

    const dayBreakdown = {
      Monday: 0, Tuesday: 0, Wednesday: 0,
      Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0
    }
    recentSessions.forEach(s => {
      const day = new Date(s.createdAt || s.date).toLocaleDateString('en-US', { weekday: 'long' })
      if (dayBreakdown.hasOwnProperty(day)) dayBreakdown[day]++
    })

    const sessionTimes = recentSessions.map(s => 
      new Date(s.createdAt || s.date).toLocaleTimeString('en-US', { hour: '2-digit' })
    )

    return {
      user_id: user?.id,
      date: today,
      exam_date: planner?.examDate || null,
      difficulty_preference: planner?.difficulty || 'balanced',
      data: {
        study_plan: planner || {},
        mastery: mastery || {},
        sessions: todaySessions,
        mistakes: todayMistakes,
        gamification: gamification || { xp: 0, level: 1, streak: 0, badges: [] },
        weak_topics: Object.entries(weakTopics).map(([topic, data]) => ({
          topic,
          subject: data.subject || 'General',
          accuracy: data.accuracy || 50,
          priority: data.count > 3 ? 'high' : 'medium',
          mistake_count: data.count
        })).slice(0, 5),
        consistency: {
          study_days: studyDays.length,
          missed_days: Math.max(0, 30 - studyDays.length),
          total_days: 30,
          avg_sessions_per_day: Number((recentSessions.length / 30).toFixed(1)),
          day_breakdown: dayBreakdown,
          session_times: sessionTimes
        },
        preferences: {
          study_style: planner?.study_style || 'active',
          target_score: planner?.target_score || '350+',
          hours_per_week: planner?.hours_per_week || 15,
          study_hours_start: '08:00',
          study_hours_end: '22:00'
        },
        profile: {
          name: user?.firstName || user?.username,
          school: user?.school || '',
          exam: user?.exam || 'JAMB',
          country: user?.country || 'Nigeria',
          subjects: user?.subjects || ['Mathematics', 'English']
        },
        revision_planner: {
          tasks: [],
          tasks_completed_today: 0,
          tasks_total_today: 0,
          time_studied_today: 0,
          streak: gamification?.streak || 0
        }
      }
    }
  }, [user])

  // ============================================================
  // LOAD FROM CACHE
  // ============================================================

  const loadFromCache = useCallback(() => {
    try {
      const cacheKey = getCacheKey(user?.id)
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        const { data, date } = JSON.parse(cached)
        const today = getTodayInUserTimezone()
        if (date === today) {
          setData(data)
          setIsStale(false)
          return true
        } else {
          localStorage.removeItem(cacheKey)
          return false
        }
      }
    } catch (e) {
      console.error('Failed to load cache:', e)
    }
    return false
  }, [user?.id])

  // ============================================================
  // SAVE TO CACHE
  // ============================================================

  const saveToCache = useCallback((response) => {
    try {
      const today = getTodayInUserTimezone()
      const cacheKey = getCacheKey(user?.id)
      localStorage.setItem(cacheKey, JSON.stringify({ 
        data: response, 
        date: today,
        timestamp: new Date().toISOString()
      }))
      setIsStale(false)
    } catch (e) {
      console.error('Failed to save cache:', e)
    }
  }, [user?.id])

  // ============================================================
  // ANALYZE - STABLE VERSION
  // ============================================================

  const analyze = useCallback(async (force = false) => {
    // ✅ Prevent concurrent analysis
    if (isAnalyzing.current) {
      console.log('⏳ Analysis already in progress, skipping...')
      return data
    }

    isAnalyzing.current = true

    try {
      const today = getTodayInUserTimezone()
      const cacheKey = getCacheKey(user?.id)
      
      // Check cache first (unless force)
      if (!force) {
        try {
          const cached = localStorage.getItem(cacheKey)
          if (cached) {
            const { data: cachedData, date } = JSON.parse(cached)
            if (date === today && cachedData) {
              setData(cachedData)
              setIsStale(false)
              setLoading(false)
              return cachedData
            }
          }
        } catch (e) {}
      }

      setRefreshing(true)
      setError(null)
      setIsStale(false)

      const bundled = bundleData()
      
      if (!bundled || bundled.error) {
        setError(bundled?.error || 'No user data available')
        setLoading(false)
        return null
      }

      // ✅ Check if AI service is available
      let response
      try {
        response = await ai.hyetutor.analyze(bundled)
      } catch (apiError) {
        console.error('API Error:', apiError)
        // ✅ Fallback to cached data if available
        const cached = loadFromCache()
        if (cached) {
          setIsStale(true)
          return data
        }
        // ✅ If no cache, throw
        throw apiError
      }
      
      const enrichedResponse = {
        ...response,
        examDays: response.examDays || 52,
        missions: response.missions || [],
        totalXpReward: response.totalXpReward || 0,
        timeBudget: response.timeBudget || { total: 0, completed: 0, remaining: 0 },
        weeklyGoal: response.weeklyGoal || { total: 0, completed: 0, percentage: 0 },
        nextSession: response.nextSession || null,
        performance: response.performance || {
          examReadiness: 0,
          confidence: 0,
          consistency: 0,
          focus: 0,
          burnoutRisk: 'Low'
        },
        insights: response.insights || [],
        habits: response.habits || [],
        momentum: response.momentum || {
          hours: 0,
          average: 0,
          bestDay: 'N/A',
          longestSession: '0h 0m',
          missedDays: 0,
          streak: 0,
          weeklyData: []
        }
      }

      setData(enrichedResponse)
      saveToCache(enrichedResponse)
      return enrichedResponse

    } catch (err) {
      console.error('HyeTutor analysis failed:', err)
      setError(err.message || 'Failed to analyze data')
      
      const cached = loadFromCache()
      if (cached) {
        setIsStale(true)
        return data
      }
      
      return null
    } finally {
      setRefreshing(false)
      setLoading(false)
      isAnalyzing.current = false
    }
  }, [bundleData, data, loadFromCache, saveToCache, user?.id])

  // ============================================================
  // CHAT
  // ============================================================

  const askQuestion = useCallback(async (question) => {
    if (!question || !question.trim()) {
      return 'Please ask a valid question.'
    }

    try {
      const context = bundleData()
      const response = await ai.hyetutor.chat(question, context)
      return response.answer || response.message || "I'm analyzing your data..."
    } catch (err) {
      console.error('Chat error:', err)
      return "I'm having trouble right now. Please try again."
    }
  }, [bundleData])

  // ============================================================
  // COMPLETE MISSION
  // ============================================================

  const completeMission = useCallback(async (missionId) => {
    if (!missionId) return null

    try {
      const response = await ai.hyetutor.completeMission(missionId)
      
      if (data?.missions) {
        const updatedMissions = data.missions.map(m => 
          m.id === missionId ? { ...m, completed: true } : m
        )
        const updatedData = { ...data, missions: updatedMissions }
        setData(updatedData)
        saveToCache(updatedData)
      }
      
      return response
    } catch (err) {
      console.error('Failed to complete mission:', err)
      return null
    }
  }, [data, saveToCache])

  // ============================================================
  // SUBMIT REFLECTION
  // ============================================================

  const submitReflection = useCallback(async (reflection) => {
    if (!reflection || !reflection.trim()) {
      return { error: 'Reflection cannot be empty' }
    }

    try {
      const response = await ai.hyetutor.reflection({ 
        reflection, 
        user_id: user?.id,
        date: getTodayInUserTimezone()
      })
      
      const cacheKey = getCacheKey(user?.id)
      localStorage.removeItem(cacheKey)
      
      return response
    } catch (err) {
      console.error('Failed to submit reflection:', err)
      return { error: err.message || 'Failed to submit reflection' }
    }
  }, [user?.id])

  // ============================================================
  // LISTEN FOR STORAGE EVENTS (Tab sync)
  // ============================================================

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'hyetutor_invalidate') {
        analyze(true)
      }
      if (event.key && event.key.startsWith('hyetutor_')) {
        const today = getTodayInUserTimezone()
        try {
          const cached = localStorage.getItem(event.key)
          if (cached) {
            const { data: cachedData, date } = JSON.parse(cached)
            if (date === today && event.key === getCacheKey(user?.id)) {
              setData(cachedData)
              setIsStale(false)
            }
          }
        } catch (e) {}
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [analyze, user?.id])

  // ============================================================
  // INITIAL LOAD - FIXED (Runs once)
  // ============================================================

  useEffect(() => {
    // ✅ Prevent running twice
    if (isInitialized.current) return
    isInitialized.current = true

    const init = async () => {
      setLoading(true)
      try {
        const cached = loadFromCache()
        if (!cached) {
          await analyze()
        }
      } catch (err) {
        console.error('Init error:', err)
        setError(err.message || 'Failed to initialize')
      } finally {
        setLoading(false)
      }
    }

    init()

    // ✅ Cleanup
    return () => {
      isInitialized.current = false
    }
  }, []) // ✅ EMPTY ARRAY = RUNS ONCE

  // ============================================================
  // RETURN
  // ============================================================

  return {
    data,
    loading,
    refreshing,
    error,
    isStale,
    analyze,
    askQuestion,
    completeMission,
    submitReflection,
    refresh: () => analyze(true),
    hasData: !!data,
    hasError: !!error,
    isReady: !loading && !!data,
  }
}