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
// STUDY PLAN → EXAM DAYS HELPERS
// ============================================================

const getStudyPlanExamDate = () => {
  try {
    const raw = localStorage.getItem('hyelearner_study_plan_v2')
    if (!raw) return null
    const plan = JSON.parse(raw)
    return (
      plan?.exam_date ||
      plan?.exam_info?.exam_date ||
      plan?.plan?.exam_date ||
      null
    )
  } catch {
    return null
  }
}

const calculateDaysRemaining = (dateStr) => {
  if (!dateStr) return null
  const target = new Date(dateStr)
  if (isNaN(target.getTime())) return null
  const now = new Date()
  const diff = target - now
  if (diff <= 0) return 0
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

const getExamDaysFromStudyPlan = () => {
  const studyPlanDate = getStudyPlanExamDate()
  if (studyPlanDate) {
    const days = calculateDaysRemaining(studyPlanDate)
    if (days !== null) return days
  }
  try {
    const planner = storage.getPlanner()
    if (planner?.examDate) {
      const days = calculateDaysRemaining(planner.examDate)
      if (days !== null) return days
    }
  } catch {}
  return null
}

// ============================================================
// PERFORMANCE METRICS — computed from real Daily Tutor data
// readiness = adherence × 0.4 + quizAvg × 0.4 + streak × 0.2
// ============================================================

const computePerformanceMetrics = () => {
  try {
    const sessions = storage.getSessions() || []
    const gamification = storage.getGamification() || {}
    const streak = gamification.streak || 0

    // ---- Daily Tutor sessions ----
    const dailySessions = sessions.filter(
      (s) => s.mode === 'daily_tutor' && s.status === 'completed'
    )

    const quizAccuracies = dailySessions
      .map((s) => s.accuracy)
      .filter((a) => typeof a === 'number' && a > 0)

    const quizAvg =
      quizAccuracies.length > 0
        ? quizAccuracies.reduce((a, b) => a + b, 0) / quizAccuracies.length
        : 0

    // ---- Reflections ----
    let reflectionsClear = 0
    let reflectionsTotal = 0
    try {
      const raw = localStorage.getItem('hyelearner_daily_tutor_v1')
      const cache = raw ? JSON.parse(raw) : null
      const entries = Object.values(cache?.sessions || {})
      entries.forEach((s) => {
        if (s.reflection?.feeling) {
          reflectionsTotal++
          if (s.reflection.feeling === 'clear') reflectionsClear++
        }
      })
    } catch {}
    const confidencePct =
      reflectionsTotal > 0 ? (reflectionsClear / reflectionsTotal) * 100 : 0

    // ---- Adherence ----
    const daysElapsed = dailySessions.length > 0 ? dailySessions.length : 1
    const adherence =
      daysElapsed > 0
        ? Math.min(100, Math.round((dailySessions.length / daysElapsed) * 100))
        : 0

    const streakConsistency = Math.min(100, streak * 10)

    // ---- Final numbers ----
    const readiness = Math.round(
      adherence * 0.4 + quizAvg * 0.4 + streakConsistency * 0.2
    )

    const confidence =
      reflectionsTotal >= 3 ? Math.round(confidencePct) : Math.round(quizAvg)

    const consistency = Math.round(adherence * 0.6 + streakConsistency * 0.4)

    const focus = Math.round(quizAvg)

    return {
      examReadiness: readiness,
      confidence,
      consistency,
      focus,
      hasData: dailySessions.length > 0 || reflectionsTotal > 0,
    }
  } catch (e) {
    console.error('computePerformanceMetrics error:', e)
    return {
      examReadiness: 0,
      confidence: 0,
      consistency: 0,
      focus: 0,
      hasData: false,
    }
  }
}

// ============================================================
// WEEKLY MOMENTUM — computed from real session data
// ============================================================

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const computeWeeklyMomentum = () => {
  try {
    const sessions = storage.getSessions() || []

    // ---- Last 7 days window ----
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 6)

    // ---- Completed sessions in the window ----
    const weekSessions = sessions.filter((s) => {
      if (s.status !== 'completed') return false
      const ts = new Date(s.completedAt || s.createdAt || s.date)
      if (isNaN(ts.getTime())) return false
      return ts >= sevenDaysAgo && ts <= new Date()
    })

    // ---- Hours per session (fallback: 5 min) ----
    const sessionHours = (s) => {
      const seconds = Number(s.timeTaken) || 0
      if (seconds > 0) return seconds / 3600
      return 5 / 60
    }

    // ---- Total hours ----
    const totalHours = weekSessions.reduce(
      (sum, s) => sum + sessionHours(s),
      0
    )

    // ---- Hours per weekday ----
    const hoursByDay = DAYS_OF_WEEK.reduce((acc, day) => {
      acc[day] = 0
      return acc
    }, {})

    weekSessions.forEach((s) => {
      const ts = new Date(s.completedAt || s.createdAt || s.date)
      const day = ts.toLocaleDateString('en-US', { weekday: 'long' })
      if (hoursByDay[day] != null) {
        hoursByDay[day] += sessionHours(s)
      }
    })

    const weeklyData = DAYS_OF_WEEK.map((day) => ({
      day,
      hours: Math.round(hoursByDay[day] * 10) / 10,
    }))

    // ---- Best day ----
    const best = weeklyData.reduce(
      (acc, d) => (d.hours > acc.hours ? d : acc),
      { day: 'N/A', hours: 0 }
    )
    const bestDay = best.hours > 0 ? best.day : 'N/A'

    // ---- Longest session ----
    const longestSeconds = weekSessions.reduce(
      (max, s) => Math.max(max, Number(s.timeTaken) || 0),
      0
    )
    const lh = Math.floor(longestSeconds / 3600)
    const lm = Math.floor((longestSeconds % 3600) / 60)
    const longestSession = longestSeconds > 0 ? `${lh}h ${lm}m` : '0h 0m'

    // ---- Missed days ----
    const activeDays = weeklyData.filter((d) => d.hours > 0).length
    const missedDays = 7 - activeDays

    // ---- Average per day ----
    const average = Math.round((totalHours / 7) * 10) / 10

    // ---- Streak (backwards from today) ----
    let streak = 0
    for (let i = 0; i < 30; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() - i)
      const hasSession = sessions.some((s) => {
        if (s.status !== 'completed') return false
        const ts = new Date(s.completedAt || s.createdAt || s.date)
        return (
          ts.getFullYear() === d.getFullYear() &&
          ts.getMonth() === d.getMonth() &&
          ts.getDate() === d.getDate()
        )
      })
      if (hasSession) streak++
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
  } catch (e) {
    console.error('computeWeeklyMomentum error:', e)
    return {
      hours: 0,
      average: 0,
      bestDay: 'N/A',
      longestSession: '0h 0m',
      missedDays: 7,
      streak: 0,
      weeklyData: DAYS_OF_WEEK.map((day) => ({ day, hours: 0 })),
    }
  }
}

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
    const todaySessions = sessions.filter((s) => {
      const sessionDate = new Date(s.createdAt || s.date)
        .toISOString()
        .split('T')[0]
      return sessionDate === today
    })

    const todayMistakes = mistakes.filter((m) => {
      const mistakeDate = new Date(m.createdAt).toISOString().split('T')[0]
      return mistakeDate === today
    })

    const weakTopics = {}
    mistakes.forEach((m) => {
      const topic = m.topic || 'General'
      if (!weakTopics[topic])
        weakTopics[topic] = {
          count: 0,
          accuracy: 0,
          subject: m.subject || 'General',
        }
      weakTopics[topic].count++
    })

    const now = new Date()
    const thirtyDaysAgo = new Date(now)
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const recentSessions = sessions.filter(
      (s) => new Date(s.createdAt || s.date) > thirtyDaysAgo
    )

    const studyDays = recentSessions.reduce((days, s) => {
      const date = new Date(s.createdAt || s.date).toISOString().split('T')[0]
      if (!days.includes(date)) days.push(date)
      return days
    }, [])

    const dayBreakdown = {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
      Sunday: 0,
    }
    recentSessions.forEach((s) => {
      const day = new Date(s.createdAt || s.date).toLocaleDateString('en-US', {
        weekday: 'long',
      })
      if (dayBreakdown.hasOwnProperty(day)) dayBreakdown[day]++
    })

    const sessionTimes = recentSessions.map((s) =>
      new Date(s.createdAt || s.date).toLocaleTimeString('en-US', {
        hour: '2-digit',
      })
    )

    return {
      user_id: user?.id,
      date: today,
      exam_date: getStudyPlanExamDate() || planner?.examDate || null,
      difficulty_preference: planner?.difficulty || 'balanced',
      data: {
        study_plan: planner || {},
        mastery: mastery || {},
        sessions: todaySessions,
        mistakes: todayMistakes,
        gamification: gamification || {
          xp: 0,
          level: 1,
          streak: 0,
          badges: [],
        },
        weak_topics: Object.entries(weakTopics)
          .map(([topic, data]) => ({
            topic,
            subject: data.subject || 'General',
            accuracy: data.accuracy || 50,
            priority: data.count > 3 ? 'high' : 'medium',
            mistake_count: data.count,
          }))
          .slice(0, 5),
        consistency: {
          study_days: studyDays.length,
          missed_days: Math.max(0, 30 - studyDays.length),
          total_days: 30,
          avg_sessions_per_day: Number(
            (recentSessions.length / 30).toFixed(1)
          ),
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
        revision_planner: {
          tasks: [],
          tasks_completed_today: 0,
          tasks_total_today: 0,
          time_studied_today: 0,
          streak: gamification?.streak || 0,
        },
      },
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
          const freshExamDays = getExamDaysFromStudyPlan()
          const merged = { ...data, examDays: freshExamDays }
          setData(merged)
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

  const saveToCache = useCallback(
    (response) => {
      try {
        const today = getTodayInUserTimezone()
        const cacheKey = getCacheKey(user?.id)
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            data: response,
            date: today,
            timestamp: new Date().toISOString(),
          })
        )
        setIsStale(false)
      } catch (e) {
        console.error('Failed to save cache:', e)
      }
    },
    [user?.id]
  )

  // ============================================================
  // ANALYZE
  // ============================================================

  const analyze = useCallback(
    async (force = false) => {
      if (isAnalyzing.current) {
        console.log('⏳ Analysis already in progress, skipping...')
        return data
      }

      isAnalyzing.current = true

      try {
        const today = getTodayInUserTimezone()
        const cacheKey = getCacheKey(user?.id)

        // Cache check
        if (!force) {
          try {
            const cached = localStorage.getItem(cacheKey)
            if (cached) {
              const { data: cachedData, date } = JSON.parse(cached)
              if (date === today && cachedData) {
                const freshExamDays = getExamDaysFromStudyPlan()
                const merged = { ...cachedData, examDays: freshExamDays }
                setData(merged)
                setIsStale(false)
                setLoading(false)
                return merged
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

        let response
        try {
          response = await ai.hyetutor.analyze(bundled)
        } catch (apiError) {
          console.error('API Error:', apiError)
          const cached = loadFromCache()
          if (cached) {
            setIsStale(true)
            return data
          }
          throw apiError
        }

        const authoritativeExamDays = getExamDaysFromStudyPlan()

        // ⭐ Real performance + momentum from local storage
        const computed = computePerformanceMetrics()
        const momentum = computeWeeklyMomentum()

        const enrichedResponse = {
          ...response,
          examDays: authoritativeExamDays,

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
          timeBudget: response.timeBudget || {
            total: 0,
            completed: 0,
            remaining: 0,
          },
          weeklyGoal: response.weeklyGoal || {
            total: 0,
            completed: 0,
            percentage: 0,
          },
          nextSession: response.nextSession || null,
          insights: response.insights || [],
          habits: response.habits || [],
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
    },
    [bundleData, data, loadFromCache, saveToCache, user?.id]
  )

  // ============================================================
  // CHAT
  // ============================================================

  const askQuestion = useCallback(
    async (question) => {
      if (!question || !question.trim()) {
        return 'Please ask a valid question.'
      }

      try {
        const context = bundleData()
        const response = await ai.hyetutor.chat(question, context)
        return (
          response.answer || response.message || "I'm analyzing your data..."
        )
      } catch (err) {
        console.error('Chat error:', err)
        return "I'm having trouble right now. Please try again."
      }
    },
    [bundleData]
  )

  // ============================================================
  // COMPLETE MISSION
  // ============================================================

  const completeMission = useCallback(
    async (missionId) => {
      if (!missionId) return null

      try {
        const response = await ai.hyetutor.completeMission(missionId)

        if (data?.missions) {
          const updatedMissions = data.missions.map((m) =>
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
    },
    [data, saveToCache]
  )

  // ============================================================
  // SUBMIT REFLECTION (old HyeTutor-level reflection)
  // ============================================================

  const submitReflection = useCallback(
    async (reflection) => {
      if (!reflection || !reflection.trim()) {
        return { error: 'Reflection cannot be empty' }
      }

      try {
        const response = await ai.hyetutor.reflection({
          reflection,
          user_id: user?.id,
          date: getTodayInUserTimezone(),
        })

        const cacheKey = getCacheKey(user?.id)
        localStorage.removeItem(cacheKey)

        return response
      } catch (err) {
        console.error('Failed to submit reflection:', err)
        return { error: err.message || 'Failed to submit reflection' }
      }
    },
    [user?.id]
  )

  // ============================================================
  // STORAGE LISTENER
  // ============================================================

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'hyetutor_invalidate') {
        analyze(true)
      }
      if (event.key === 'hyelearner_study_plan_v2') {
        analyze(true)
      }
      if (event.key === 'hyelearner_daily_tutor_v1') {
        analyze(true)
      }
      if (event.key && event.key.startsWith('hyetutor_')) {
        const today = getTodayInUserTimezone()
        try {
          const cached = localStorage.getItem(event.key)
          if (cached) {
            const { data: cachedData, date } = JSON.parse(cached)
            if (date === today && event.key === getCacheKey(user?.id)) {
              const freshExamDays = getExamDaysFromStudyPlan()
              setData({ ...cachedData, examDays: freshExamDays })
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
  // INITIAL LOAD
  // ============================================================

  useEffect(() => {
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

    return () => {
      isInitialized.current = false
    }
  }, [])

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
