// ============================================================
// HYELEARNER: HYETUTOR HOOK
// Reads from localStorage (hydrate fills it from backend)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react'
import { useAuth } from '../../../hooks'
import { storage } from '../../../storage'
import { ai } from '../../../services'

const CACHE_KEY_PREFIX = 'hyetutor'

const getStudyPlanExamDate = () => {
  try {
    const raw = localStorage.getItem('hyelearner_study_plan_v2')
    if (!raw) return null
    const plan = JSON.parse(raw)
    return plan?.exam_date || plan?.exam_info?.exam_date || plan?.plan?.exam_date || null
  } catch { return null }
}

const calculateDaysRemaining = (dateStr) => {
  if (!dateStr) return null
  const target = new Date(dateStr)
  if (isNaN(target.getTime())) return null
  const diff = target - new Date()
  if (diff <= 0) return 0
  return Math.ceil(diff / 86400000)
}

const getExamDaysFromStudyPlan = () => {
  const d = getStudyPlanExamDate()
  if (!d) return null
  return calculateDaysRemaining(d)
}

const computePerformanceMetrics = () => {
  try {
    const sessions = storage.getSessions() || []
    const gamification = storage.getGamification() || {}
    const streak = gamification.streak || 0

    const dailySessions = sessions.filter(
      (s) => s.mode === 'daily_tutor' && s.status === 'completed'
    )
    const quizAccuracies = dailySessions
      .map((s) => s.accuracy)
      .filter((a) => typeof a === 'number' && a > 0)
    const quizAvg = quizAccuracies.length
      ? quizAccuracies.reduce((a, b) => a + b, 0) / quizAccuracies.length
      : 0

    let reflectionsClear = 0
    let reflectionsTotal = 0
    try {
      const raw = localStorage.getItem('hyelearner_daily_tutor_v1')
      const cache = raw ? JSON.parse(raw) : null
      Object.values(cache?.sessions || {}).forEach((s) => {
        if (s.reflection?.feeling) {
          reflectionsTotal++
          if (s.reflection.feeling === 'clear') reflectionsClear++
        }
      })
    } catch {}
    const confidencePct = reflectionsTotal ? (reflectionsClear / reflectionsTotal) * 100 : 0

    const daysElapsed = dailySessions.length > 0 ? dailySessions.length : 1
    const adherence = Math.min(100, Math.round((dailySessions.length / daysElapsed) * 100))
    const streakConsistency = Math.min(100, streak * 10)

    const readiness = Math.round(adherence * 0.4 + quizAvg * 0.4 + streakConsistency * 0.2)
    const confidence = reflectionsTotal >= 3 ? Math.round(confidencePct) : Math.round(quizAvg)
    const consistency = Math.round(adherence * 0.6 + streakConsistency * 0.4)
    const focus = Math.round(quizAvg)

    return { examReadiness: readiness, confidence, consistency, focus }
  } catch {
    return { examReadiness: 0, confidence: 0, consistency: 0, focus: 0 }
  }
}

const DAYS_OF_WEEK = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const computeWeeklyMomentum = () => {
  try {
    const sessions = storage.getSessions() || []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 6)

    const weekSessions = sessions.filter((s) => {
      if (s.status !== 'completed') return false
      const ts = new Date(s.completedAt || s.createdAt || s.date)
      if (isNaN(ts.getTime())) return false
      return ts >= sevenDaysAgo && ts <= new Date()
    })

    const sessionHours = (s) => {
      const sec = Number(s.timeTaken) || 0
      return sec > 0 ? sec / 3600 : 5 / 60
    }

    const totalHours = weekSessions.reduce((sum, s) => sum + sessionHours(s), 0)

    const hoursByDay = DAYS_OF_WEEK.reduce((acc, day) => { acc[day] = 0; return acc }, {})
    weekSessions.forEach((s) => {
      const ts = new Date(s.completedAt || s.createdAt || s.date)
      const day = ts.toLocaleDateString('en-US', { weekday: 'long' })
      if (hoursByDay[day] != null) hoursByDay[day] += sessionHours(s)
    })

    const weeklyData = DAYS_OF_WEEK.map((day) => ({
      day,
      hours: Math.round(hoursByDay[day] * 10) / 10,
    }))

    const best = weeklyData.reduce((a, d) => (d.hours > a.hours ? d : a), { day: 'N/A', hours: 0 })
    const bestDay = best.hours > 0 ? best.day : 'N/A'

    const longestSeconds = weekSessions.reduce((max, s) => Math.max(max, Number(s.timeTaken) || 0), 0)
    const lh = Math.floor(longestSeconds / 3600)
    const lm = Math.floor((longestSeconds % 3600) / 60)
    const longestSession = longestSeconds > 0 ? `${lh}h ${lm}m` : '0h 0m'

    const activeDays = weeklyData.filter((d) => d.hours > 0).length
    const missedDays = 7 - activeDays
    const average = Math.round((totalHours / 7) * 10) / 10

    let streak = 0
    for (let i = 0; i < 30; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() - i)
      const has = sessions.some((s) => {
        if (s.status !== 'completed') return false
        const ts = new Date(s.completedAt || s.createdAt || s.date)
        return ts.getFullYear() === d.getFullYear() &&
               ts.getMonth() === d.getMonth() &&
               ts.getDate() === d.getDate()
      })
      if (has) streak++
      else break
    }

    return {
      hours: Math.round(totalHours * 10) / 10,
      average,
      bestDay,
      longestSession,
      missedDays,
      streak,
      weeklyData,
    }
  } catch {
    return {
      hours: 0, average: 0, bestDay: 'N/A', longestSession: '0h 0m',
      missedDays: 7, streak: 0,
      weeklyData: DAYS_OF_WEEK.map((day) => ({ day, hours: 0 })),
    }
  }
}

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

export function useHyeTutor() {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)
  const [isStale, setIsStale] = useState(false)

  const isInitialized = useRef(false)
  const isAnalyzing = useRef(false)

  const bundleData = useCallback(() => {
    if (!user) return { error: 'No user authenticated' }

    const mastery = storage.getMastery()
    const sessions = storage.getSessions()
    const mistakes = storage.getMistakes()
    const gamification = storage.getGamification()
    const planner = storage.getPlanner()

    const today = getTodayInUserTimezone()
    const todaySessions = sessions.filter((s) => {
      const d = new Date(s.createdAt || s.date).toISOString().split('T')[0]
      return d === today
    })
    const todayMistakes = mistakes.filter((m) => {
      const d = new Date(m.createdAt).toISOString().split('T')[0]
      return d === today
    })

    const weakTopics = {}
    mistakes.forEach((m) => {
      const topic = m.topic || 'General'
      if (!weakTopics[topic]) weakTopics[topic] = { count: 0, accuracy: 0, subject: m.subject || 'General' }
      weakTopics[topic].count++
    })

    const now = new Date()
    const thirtyDaysAgo = new Date(now)
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const recentSessions = sessions.filter((s) => new Date(s.createdAt || s.date) > thirtyDaysAgo)

    const studyDays = recentSessions.reduce((days, s) => {
      const date = new Date(s.createdAt || s.date).toISOString().split('T')[0]
      if (!days.includes(date)) days.push(date)
      return days
    }, [])

    const dayBreakdown = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 }
    recentSessions.forEach((s) => {
      const day = new Date(s.createdAt || s.date).toLocaleDateString('en-US', { weekday: 'long' })
      if (dayBreakdown.hasOwnProperty(day)) dayBreakdown[day]++
    })

    const sessionTimes = recentSessions.map((s) =>
      new Date(s.createdAt || s.date).toLocaleTimeString('en-US', { hour: '2-digit' })
    )

    return {
      user_id: String(user.id),
      date: today,
      exam_date: getStudyPlanExamDate() || planner?.examDate || null,
      difficulty_preference: planner?.difficulty || 'balanced',
      data: {
        study_plan: planner || {},
        mastery: mastery || {},
        sessions: todaySessions,
        mistakes: todayMistakes,
        gamification: gamification || { xp: 0, level: 1, streak: 0, badges: [] },
        weak_topics: Object.entries(weakTopics).map(([topic, d]) => ({
          topic,
          subject: d.subject || 'General',
          accuracy: d.accuracy || 50,
          priority: d.count > 3 ? 'high' : 'medium',
          mistake_count: d.count,
        })).slice(0, 5),
        consistency: {
          study_days: studyDays.length,
          missed_days: Math.max(0, 30 - studyDays.length),
          total_days: 30,
          avg_sessions_per_day: Number((recentSessions.length / 30).toFixed(1)),
          day_breakdown: dayBreakdown,
          session_times: sessionTimes,
        },
        preferences: {
          study_style: planner?.study_style || 'active',
          target_score: planner?.target_score || '350+',
          hours_per_week: planner?.hours_per_week || 15,
          study_hours_start: '08:00',
          study_hours_end: '22:00',
        },
        profile: {
          name: user?.firstName || user?.username,
          school: user?.school || '',
          exam: user?.exam || 'JAMB',
          country: user?.country || 'Nigeria',
          subjects: user?.subjects || ['Mathematics', 'English'],
        },
        revision_planner: { tasks: [], tasks_completed_today: 0, tasks_total_today: 0, time_studied_today: 0, streak: gamification?.streak || 0 },
      },
    }
  }, [user])

  const loadFromCache = useCallback(() => {
    try {
      const cacheKey = getCacheKey(user?.id)
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        const { data, date } = JSON.parse(cached)
        const today = getTodayInUserTimezone()
        if (date === today) {
          const merged = { ...data, examDays: getExamDaysFromStudyPlan() }
          setData(merged)
          setIsStale(false)
          return true
        } else {
          localStorage.removeItem(cacheKey)
          return false
        }
      }
    } catch (e) { console.error('Failed to load cache:', e) }
    return false
  }, [user?.id])

  const saveToCache = useCallback((response) => {
    try {
      const today = getTodayInUserTimezone()
      const cacheKey = getCacheKey(user?.id)
      localStorage.setItem(cacheKey, JSON.stringify({
        data: response,
        date: today,
        timestamp: new Date().toISOString(),
      }))
      setIsStale(false)
    } catch (e) { console.error('Failed to save cache:', e) }
  }, [user?.id])

  const analyze = useCallback(async (force = false) => {
    if (isAnalyzing.current) return data
    isAnalyzing.current = true

    try {
      const today = getTodayInUserTimezone()
      const cacheKey = getCacheKey(user?.id)

      if (!force) {
        try {
          const cached = localStorage.getItem(cacheKey)
          if (cached) {
            const { data: cachedData, date } = JSON.parse(cached)
            if (date === today && cachedData) {
              const merged = { ...cachedData, examDays: getExamDaysFromStudyPlan() }
              setData(merged)
              setIsStale(false)
              setLoading(false)
              return merged
            }
          }
        } catch {}
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

      let response
      try {
        response = await ai.hyetutor.analyze(bundled)
      } catch (apiError) {
        console.error('API Error:', apiError)
        const cached = loadFromCache()
        if (cached) { setIsStale(true); return data }
        throw apiError
      }

      const computed = computePerformanceMetrics()
      const momentum = computeWeeklyMomentum()

      const enriched = {
        ...response,
        examDays: getExamDaysFromStudyPlan(),
        performance: {
          examReadiness: computed.examReadiness,
          confidence: computed.confidence,
          consistency: computed.consistency,
          focus: computed.focus,
          burnoutRisk: response.performance?.burnoutRisk || 'Low',
        },
        momentum,
        missions: response.missions || [],
        totalXpReward: response.totalXpReward || 0,
        timeBudget: response.timeBudget || { total: 0, completed: 0, remaining: 0 },
        weeklyGoal: response.weeklyGoal || { total: 0, completed: 0, percentage: 0 },
        nextSession: response.nextSession || null,
        insights: response.insights || [],
        habits: response.habits || [],
      }

      setData(enriched)
      saveToCache(enriched)
      return enriched
    } catch (err) {
      console.error('HyeTutor analysis failed:', err)
      setError(err.message || 'Failed to analyze data')
      const cached = loadFromCache()
      if (cached) { setIsStale(true); return data }
      return null
    } finally {
      setRefreshing(false)
      setLoading(false)
      isAnalyzing.current = false
    }
  }, [bundleData, data, loadFromCache, saveToCache, user?.id])

  const askQuestion = useCallback(async (question) => {
    if (!question || !question.trim()) return 'Please ask a valid question.'
    try {
      const context = bundleData()
      const response = await ai.hyetutor.chat(question, context)
      return response.answer || response.message || "I'm analyzing your data..."
    } catch (err) {
      console.error('Chat error:', err)
      return "I'm having trouble right now. Please try again."
    }
  }, [bundleData])

  const completeMission = useCallback(async (missionId) => {
    if (!missionId) return null
    try {
      const response = await ai.hyetutor.completeMission(missionId)
      if (data?.missions) {
        const updated = data.missions.map((m) =>
          m.id === missionId ? { ...m, completed: true } : m
        )
        const updatedData = { ...data, missions: updated }
        setData(updatedData)
        saveToCache(updatedData)
      }
      return response
    } catch (err) {
      console.error('Failed to complete mission:', err)
      return null
    }
  }, [data, saveToCache])

  const submitReflection = useCallback(async (reflection) => {
    if (!reflection || !reflection.trim()) return { error: 'Reflection cannot be empty' }
    try {
      const response = await ai.hyetutor.reflection({
        reflection,
        user_id: String(user?.id),
        date: getTodayInUserTimezone(),
      })
      const cacheKey = getCacheKey(user?.id)
      localStorage.removeItem(cacheKey)
      return response
    } catch (err) {
      console.error('Failed to submit reflection:', err)
      return { error: err.message || 'Failed to submit reflection' }
    }
  }, [user?.id])

  useEffect(() => {
    const onHydrate = () => analyze(false)
    window.addEventListener('hydration:done', onHydrate)
    window.addEventListener('storage', (e) => {
      if (e.key === 'hyetutor_invalidate') analyze(true)
      if (e.key === 'hyelearner_study_plan_v2') analyze(true)
      if (e.key === 'hyelearner_daily_tutor_v1') analyze(true)
    })
    return () => {
      window.removeEventListener('hydration:done', onHydrate)
    }
  }, [analyze])

  useEffect(() => {
    if (isInitialized.current) return
    isInitialized.current = true
    const init = async () => {
      setLoading(true)
      try {
        const cached = loadFromCache()
        if (!cached) await analyze()
      } catch (err) {
        console.error('Init error:', err)
        setError(err.message || 'Failed to initialize')
      } finally {
        setLoading(false)
      }
    }
    init()
    return () => { isInitialized.current = false }
  }, [])

  return {
    data, loading, refreshing, error, isStale,
    analyze, askQuestion, completeMission, submitReflection,
    refresh: () => analyze(true),
    hasData: !!data, hasError: !!error, isReady: !loading && !!data,
  }
}
