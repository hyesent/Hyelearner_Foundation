// ============================================================
// HYELEARNER: FOUNDATION — CUSTOM HOOKS
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { AuthContext, ThemeContext, NotificationContext } from './context'
import { storage } from './storage'
import { userStats } from './services'
import { 
  calculateScore, 
  calculateXP, 
  getLevel,
  calculateMastery,
  checkBadgeUnlock,
  shuffleArray,
  trackAIUsage as trackAI,
  getAIUsageStats,
  isAILimitReached
} from './utils'
import { BADGE_DEFINITIONS, AI_LIMITS } from './constants'

// ============================================================
// useAuth — Authentication hook
// ============================================================
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// ============================================================
// useTheme — Theme hook
// ============================================================
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// ============================================================
// useNotifications — Notification hook
// ============================================================
export function useNotifications() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

// ============================================================
// useAI — AI Usage hook (NEW)
// Tracks and manages AI usage limits
// ============================================================
export function useAI() {
  const [usage, setUsage] = useState({ daily: 0, monthly: 0 })
  const [loading, setLoading] = useState(true)
  const [limitReached, setLimitReached] = useState(false)

  // Load usage on mount
  useEffect(() => {
    loadUsage()
    
    // Listen for updates from other tabs/components
    const handleUpdate = () => {
      loadUsage()
    }
    window.addEventListener('ai:usage-updated', handleUpdate)
    
    return () => {
      window.removeEventListener('ai:usage-updated', handleUpdate)
    }
  }, [])

  const loadUsage = () => {
    const stats = getAIUsageStats()
    setUsage({ daily: stats.daily, monthly: stats.monthly })
    setLimitReached(stats.limitReached)
    setLoading(false)
  }

  const trackUsage = () => {
    const result = trackAI()
    setUsage({ daily: result.daily, monthly: result.monthly })
    setLimitReached(result.limitReached)
    return result
  }

  const checkLimit = () => {
    return isAILimitReached()
  }

  const getRemaining = () => {
    const stats = getAIUsageStats()
    return stats.remaining
  }

  return {
    usage,
    loading,
    limitReached,
    trackUsage,
    checkLimit,
    getRemaining,
    refresh: loadUsage,
  }
}

// ============================================================
// useProgress — CENTRAL PROGRESS HOOK (ONE BRAIN)
// All features call this to update XP, Streak, Sessions, Results, Mistakes, Mastery
// ============================================================
export function useProgress() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const updateProgress = useCallback((data) => {
    // data = { 
    //   type: 'practice' | 'topic_mode' | 'mock_exam' | 'lesson',
    //   subject: string,
    //   topic: string (optional),
    //   questions: array,
    //   answers: object,
    //   timeTaken: number (seconds),
    //   mode: string
    // }

    setLoading(true)
    setError(null)

    try {
      // 1. UPDATE STREAK
      storage.updateStreak()

      // 2. CALCULATE SCORE & XP
      const scoreData = calculateScore(data.questions, data.answers)
      const xp = calculateXP(scoreData, Math.floor((data.timeTaken || 0) / 10))

      // 3. ADD XP
      const gamification = storage.addXP(xp)

      // 4. ADD SESSION
      storage.addSession({
        id: `session_${Date.now()}`,
        subject: data.subject,
        topic: data.topic || 'All Topics',
        totalQuestions: data.questions.length,
        questions: data.questions,
        answers: data.answers,
        score: scoreData.score,
        total: scoreData.total,
        correct: scoreData.correct,
        wrong: scoreData.wrong,
        skipped: scoreData.skipped,
        accuracy: scoreData.accuracy,
        xpEarned: xp,
        timeTaken: data.timeTaken || 0,
        mode: data.mode || data.type || 'Practice',
        status: 'completed',
        completedAt: new Date().toISOString(),
        startedAt: new Date(Date.now() - (data.timeTaken || 0) * 1000).toISOString(),
      })

      // 5. ADD RESULT
      storage.addResult({
        sessionId: `session_${Date.now()}`,
        subject: data.subject,
        score: scoreData.score,
        total: scoreData.total,
        accuracy: scoreData.accuracy,
        date: new Date().toISOString(),
        mode: data.mode || data.type || 'Practice',
        xpEarned: xp,
      })

      // 6. TRACK MISTAKES
      const mistakes = []
      data.questions.forEach((q) => {
        const userAnswer = data.answers[q.id]
        if (userAnswer && userAnswer !== q.answer) {
          const mistake = {
            questionId: q.id,
            userAnswer: userAnswer,
            correctAnswer: q.answer,
            question: q.question,
            options: q.options,
            topic: q.topic || 'General',
            subject: data.subject,
            explanation: q.explanation || '',
            wrongExplanations: q.wrongExplanations || null,
            createdAt: new Date().toISOString(),
          }
          storage.addMistake(mistake)
          mistakes.push(mistake)
        }
      })

      // 7. UPDATE MASTERY (per topic)
      const topicAccuracy = {}
      data.questions.forEach((q) => {
        const topic = q.topic || 'General'
        if (!topicAccuracy[topic]) {
          topicAccuracy[topic] = { correct: 0, total: 0 }
        }
        topicAccuracy[topic].total++
        if (data.answers[q.id] === q.answer) {
          topicAccuracy[topic].correct++
        }
      })
      Object.entries(topicAccuracy).forEach(([topic, stats]) => {
        const accuracy = calculateMastery(stats.correct, stats.total)
        storage.updateMastery(topic, accuracy, data.subject)
      })

      // 8. CHECK BADGES
      const currentGamification = storage.getGamification()
      BADGE_DEFINITIONS.forEach((badge) => {
        if (checkBadgeUnlock(badge.id, currentGamification)) {
          storage.addBadge(badge.id)
        }
      })

      // 9. UPDATE STUDY PLAN (if it exists)
      const planner = storage.getPlanner()
      if (planner) {
        const today = new Date().toISOString().split('T')[0]
        if (!planner.progress) planner.progress = {}
        if (!planner.progress[today]) {
          planner.progress[today] = { 
            completed: 0, 
            total: 0,
            sessions: 0,
            xp: 0,
            topics: []
          }
        }
        planner.progress[today].completed += scoreData.correct
        planner.progress[today].total += scoreData.total
        planner.progress[today].sessions += 1
        planner.progress[today].xp += xp
        if (data.topic && !planner.progress[today].topics.includes(data.topic)) {
          planner.progress[today].topics.push(data.topic)
        }
        storage.savePlanner(planner)
      }

      // 10. UPDATE ANALYTICS (via storage)
      // Analytics reads from storage directly, so data is already there

      // 11. UPDATE HEATMAP (via mastery)
      // Heatmap reads from storage directly, so data is already there

      // ✅ 12. SAVE DAILY STATS TO BACKEND (Fire and forget)
      const today = new Date().toISOString().split('T')[0]
      const cachedStats = JSON.parse(localStorage.getItem('hyelearner_daily_stats') || '{}')
      
      if (cachedStats.date === today) {
        const updatedStats = {
          xp: (cachedStats.xp || 0) + xp,
          level: gamification.level || 1,
          streak: gamification.streak || 0,
          accuracy: scoreData.accuracy,
          sessions: (cachedStats.sessions || 0) + 1,
          totalQuestions: (cachedStats.totalQuestions || 0) + data.questions.length,
          correct: (cachedStats.correct || 0) + scoreData.correct,
          wrong: (cachedStats.wrong || 0) + scoreData.wrong,
          studyTime: (cachedStats.studyTime || 0) + Math.floor((data.timeTaken || 0) / 60)
        }
        
        // Recalculate accuracy
        const total = updatedStats.totalQuestions
        updatedStats.accuracy = total > 0 ? Math.round((updatedStats.correct / total) * 100) : 0
        
        // Save to cache
        localStorage.setItem('hyelearner_daily_stats', JSON.stringify({
          ...updatedStats,
          date: today
        }))
        
        // ✅ Save to backend (fire and forget)
        userStats.save(updatedStats).catch(err => {
          console.error('Failed to save stats to backend:', err)
        })
      }

      // 13. RETURN RESULTS
      const result = {
        scoreData,
        xp,
        gamification,
        mistakes,
        topicAccuracy,
      }

      return result
    } catch (err) {
      console.error('useProgress error:', err)
      setError(err.message || 'Failed to update progress')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    updateProgress,
    loading,
    error,
  }
}

// ============================================================
// useCBT — CBT Practice hook
// ============================================================
export function useCBT() {
  const [loading, setLoading] = useState(false)
  const [currentSession, setCurrentSession] = useState(null)
  const [error, setError] = useState(null)

  const startSession = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const session = {
        id: `session_${Date.now()}`,
        ...data,
        startedAt: new Date().toISOString(),
      }
      setCurrentSession(session)
      const sessions = storage.getSessions()
      sessions.push(session)
      storage.saveSessions(sessions)
      return session
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const submitSession = useCallback(async (sessionId, answers) => {
    setLoading(true)
    setError(null)
    try {
      const sessions = storage.getSessions()
      const session = sessions.find(s => s.id === sessionId)
      if (!session) throw new Error('Session not found')

      const score = calculateScore(session.questions || [], answers)
      const xp = calculateXP(score)

      session.answers = answers
      session.score = score.score
      session.total = score.total
      session.correct = score.correct
      session.wrong = score.wrong
      session.skipped = score.skipped
      session.accuracy = score.accuracy
      session.completedAt = new Date().toISOString()

      const updatedSessions = sessions.map(s => 
        s.id === sessionId ? session : s
      )
      storage.saveSessions(updatedSessions)

      const gamification = storage.getGamification()
      gamification.xp += xp
      gamification.level = getLevel(gamification.xp)
      storage.saveGamification(gamification)

      const results = storage.getResults()
      results.push({
        sessionId,
        subject: session.subject,
        score: score.score,
        total: score.total,
        accuracy: score.accuracy,
        date: new Date().toISOString(),
        mode: session.mode || 'practice',
      })
      storage.saveResults(results)

      session.questions.forEach(q => {
        if (answers[q.id] && answers[q.id] !== q.answer) {
          const mistakes = storage.getMistakes()
          mistakes.push({
            questionId: q.id,
            userAnswer: answers[q.id],
            correctAnswer: q.answer,
            question: q.question,
            topic: q.topic || 'General',
            subject: session.subject,
            createdAt: new Date().toISOString(),
          })
          storage.saveMistakes(mistakes)
        }
      })

      setCurrentSession(session)
      return { session, score, xp }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getSessions = useCallback(() => {
    return storage.getSessions()
  }, [])

  const getSession = useCallback((id) => {
    const sessions = storage.getSessions()
    return sessions.find(s => s.id === id) || null
  }, [])

  return {
    loading,
    error,
    currentSession,
    startSession,
    submitSession,
    getSessions,
    getSession,
  }
}

// ============================================================
// useTimer — Timer hook
// ============================================================
export function useTimer(initialTime = 600, onComplete = null) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const start = useCallback(() => {
    if (time <= 0) {
      setTime(initialTime)
    }
    setIsRunning(true)
    setIsPaused(false)
  }, [initialTime, time])

  const pause = useCallback(() => {
    setIsPaused(true)
    setIsRunning(false)
  }, [])

  const resume = useCallback(() => {
    setIsRunning(true)
    setIsPaused(false)
  }, [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setIsPaused(false)
    setTime(initialTime)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [initialTime])

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current)
            setIsRunning(false)
            if (onComplete) onComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning, time, onComplete])

  const formatTime = useCallback(() => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [time])

  return {
    time,
    isRunning,
    isPaused,
    start,
    pause,
    resume,
    reset,
    formatTime,
    setTime,
  }
}

// ============================================================
// useOffline — Offline detection hook
// ============================================================
export function useOffline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [lastSync, setLastSync] = useState(null)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const sync = useCallback(async () => {
    setLastSync(new Date())
    return { success: true }
  }, [])

  return {
    isOnline,
    isOffline: !isOnline,
    lastSync,
    sync,
  }
}

// ============================================================
// useSearch — Search hook
// ============================================================
export function useSearch(items, searchFields = ['name', 'title']) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(items)

  useEffect(() => {
    if (!query.trim()) {
      setResults(items)
      return
    }

    const lowerQuery = query.toLowerCase()
    const filtered = items.filter(item => {
      return searchFields.some(field => {
        const value = item[field]
        if (!value) return false
        return value.toString().toLowerCase().includes(lowerQuery)
      })
    })
    setResults(filtered)
  }, [query, items, searchFields])

  return {
    query,
    setQuery,
    results,
  }
}

// ============================================================
// useLocalStorage — LocalStorage hook
// ============================================================
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading localStorage key:', key, error)
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error setting localStorage key:', key, error)
    }
  }, [key, storedValue])

  const remove = useCallback(() => {
    localStorage.removeItem(key)
    setStoredValue(null)
  }, [key])

  return [storedValue, setValue, remove]
}

// ============================================================
// useDebounce — Debounce hook
// ============================================================
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// ============================================================
// usePrevious — Previous value hook
// ============================================================
export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

// ============================================================
// usePing — Keep backend alive, ping every 5 minutes
// ============================================================
export function usePing(options = {}) {
  const {
    onLoad = true,
    interval = 5 * 60 * 1000,
    withAuth = true,
    onSuccess = null,
    onError = null,
    enabled = true,
    onlyWhenVisible = true,
    logPings = false,
  } = options

  const [status, setStatus] = useState(null)
  const [lastPing, setLastPing] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isTabVisible, setIsTabVisible] = useState(true)
  const intervalRef = useRef(null)

  const getPingService = useCallback(async () => {
    const { ping } = await import('./services')
    return withAuth ? ping.pingAuth : ping.ping
  }, [withAuth])

  const doPing = useCallback(async () => {
    if (!enabled) return
    if (onlyWhenVisible && !isTabVisible) return
    if (isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const pingFn = await getPingService()
      const result = await pingFn()
      setStatus(result)
      setLastPing(new Date())

      if (logPings) {
        if (result.user_id || result.username) {
          console.log(`[Ping] ${result.username || 'User'} (${result.user_id || 'unknown'}) — ${new Date().toLocaleTimeString()}`)
        } else {
          console.log(`[Ping] Backend healthy — ${new Date().toLocaleTimeString()}`)
        }
      }

      if (onSuccess) onSuccess(result)
      return result
    } catch (err) {
      console.error('[Ping] Failed:', err)
      setError(err.message || 'Ping failed')
      if (onError) onError(err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [enabled, isTabVisible, isLoading, getPingService, onSuccess, onError, logPings])

  useEffect(() => {
    if (!enabled || !onLoad) return
    const timer = setTimeout(() => {
      doPing()
    }, 1500)
    return () => clearTimeout(timer)
  }, [enabled, onLoad, doPing])

  useEffect(() => {
    if (!enabled || !interval || interval <= 0) return

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (!onlyWhenVisible || isTabVisible) {
      intervalRef.current = setInterval(() => {
        doPing()
      }, interval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [enabled, interval, isTabVisible, onlyWhenVisible, doPing])

  useEffect(() => {
    const handleVisibilityChange = () => {
      const visible = document.visibilityState === 'visible'
      setIsTabVisible(visible)

      if (visible) {
        const timeSinceLastPing = lastPing ? Date.now() - lastPing.getTime() : Infinity
        if (timeSinceLastPing > interval * 0.8) {
          doPing()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [lastPing, interval, doPing])

  const refresh = useCallback(async () => {
    return await doPing()
  }, [doPing])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  return {
    status,
    lastPing,
    isLoading,
    error,
    refresh,
    isOnline: status?.status === 'ok' || status?.status === 'healthy',
    isTabVisible,
    userId: status?.user_id || null,
    username: status?.username || null,
  }
}

// ============================================================
// useUserStats — Hybrid stats hook (NEW)
// Caches stats in localStorage + syncs with backend
// ============================================================
const STATS_CACHE_KEY = 'hyelearner_daily_stats'

export function useUserStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  const getToday = () => new Date().toISOString().split('T')[0]

  // Load stats from cache or backend
  const loadStats = useCallback(async (forceRefresh = false) => {
    setLoading(true)
    setError(null)

    try {
      const today = getToday()
      
      // Check cache first (unless force refresh)
      if (!forceRefresh) {
        const cached = localStorage.getItem(STATS_CACHE_KEY)
        if (cached) {
          const data = JSON.parse(cached)
          if (data.date === today) {
            setStats(data)
            setLoading(false)
            return data
          }
        }
      }

      // Fetch from backend
      const result = await userStats.getToday()
      
      // Save to cache
      localStorage.setItem(STATS_CACHE_KEY, JSON.stringify({
        ...result,
        date: today,
        cachedAt: new Date().toISOString()
      }))
      
      setStats(result)
      return result

    } catch (err) {
      console.error('Failed to load stats:', err)
      setError(err.message)
      
      // Fallback to localStorage
      const gamification = storage.getGamification()
      const sessions = storage.getSessions()
      
      const fallbackStats = {
        xp: gamification.xp || 0,
        level: gamification.level || 1,
        streak: gamification.streak || 0,
        accuracy: 0,
        sessions: sessions.filter(s => s.status === 'completed').length,
        totalQuestions: 0,
        correct: 0,
        wrong: 0,
        studyTime: 0,
        date: getToday(),
        fromCache: true
      }
      
      setStats(fallbackStats)
      return fallbackStats
      
    } finally {
      setLoading(false)
    }
  }, [])

  // Save stats to backend
  const saveStats = useCallback(async (statsData) => {
    if (saving) return
    
    setSaving(true)
    setError(null)
    
    try {
      const result = await userStats.save(statsData)
      
      // Update cache
      const today = getToday()
      localStorage.setItem(STATS_CACHE_KEY, JSON.stringify({
        ...statsData,
        date: today,
        cachedAt: new Date().toISOString()
      }))
      
      return result
      
    } catch (err) {
      console.error('Failed to save stats:', err)
      setError(err.message)
      return null
      
    } finally {
      setSaving(false)
    }
  }, [saving])

  // Get today's quick progress
  const getTodayProgress = useCallback(async () => {
    try {
      const result = await userStats.getTodayProgress()
      return result
    } catch (err) {
      console.error('Failed to get today progress:', err)
      return null
    }
  }, [])

  // Get weekly stats
  const getWeekly = useCallback(async () => {
    try {
      const result = await userStats.getWeekly()
      return result
    } catch (err) {
      console.error('Failed to get weekly stats:', err)
      return null
    }
  }, [])

  // Get range stats
  const getRange = useCallback(async (days = 7) => {
    try {
      const result = await userStats.getRange(days)
      return result
    } catch (err) {
      console.error('Failed to get range stats:', err)
      return null
    }
  }, [])

  // Refresh stats (force fetch from backend)
  const refresh = useCallback(() => {
    return loadStats(true)
  }, [loadStats])

  // Auto-save on interval and cleanup
  useEffect(() => {
    if (!stats || stats.fromCache) return
    
    // Save on interval (every 5 minutes)
    const saveInterval = setInterval(() => {
      saveStats(stats)
    }, 300000)
    
    // Save on page unload
    const handleBeforeUnload = () => {
      if (stats) {
        saveStats(stats)
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      clearInterval(saveInterval)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      if (stats) {
        saveStats(stats)
      }
    }
  }, [stats, saveStats])

  return {
    stats,
    loading,
    error,
    saving,
    loadStats,
    saveStats,
    getTodayProgress,
    getWeekly,
    getRange,
    refresh,
    isReady: !loading && !!stats
  }
}
