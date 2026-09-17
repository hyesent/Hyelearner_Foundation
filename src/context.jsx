// ============================================================
// HYELEARNER: FOUNDATION — CONTEXT
// Auth, Theme, Notification, Subscription, Hydration Contexts
// Built by Hyesent.dev
// ============================================================

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react'
import { auth as authService, subscriptions, user as userService } from './services'
import { storage } from './storage'

// ============================================================
// STORAGE HELPERS — remember-me aware
// ============================================================

const TOKEN_KEY = 'token'
const REFRESH_KEY = 'refresh_token'
const USER_KEY = 'user'
const STORE_ID_KEY = 'hyespace-store-id'

const getStoredToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)

const getStoredUser = () => {
  const raw = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const persistSession = (token, user, remember = true) => {
  const target = remember ? localStorage : sessionStorage
  const other = remember ? sessionStorage : localStorage
  other.removeItem(TOKEN_KEY)
  other.removeItem(REFRESH_KEY)
  other.removeItem(USER_KEY)
  target.setItem(TOKEN_KEY, token)
  target.setItem(USER_KEY, JSON.stringify(user))
}

const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_KEY)
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(STORE_ID_KEY)
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(REFRESH_KEY)
  sessionStorage.removeItem(USER_KEY)
}

// ============================================================
// AUTH CONTEXT
// ============================================================

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser())
  const [token, setToken] = useState(() => getStoredToken())
  const [loading, setLoading] = useState(() => !getStoredToken())
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = getStoredToken()
      console.log('🟣 [AUTH-1] AuthProvider mounted')
      console.log('🟣 [AUTH-1] Token:', storedToken ? '✅ Present' : '❌ Missing')

      if (!storedToken) {
        setLoading(false)
        return
      }

      try {
        const response = await authService.getMe()
        let userData = null
        if (response && response.user) userData = response.user
        else if (response && response.id) userData = response

        if (userData) {
          setUser(userData)
          const target = localStorage.getItem(TOKEN_KEY) ? localStorage : sessionStorage
          target.setItem(USER_KEY, JSON.stringify(userData))
        }
        setToken(storedToken)
      } catch (err) {
        console.error('🟣 [AUTH-ERROR] getMe failed:', err)
        const status = err?.response?.status || err?.status
        const isAuthError = status === 401 || status === 403

        if (isAuthError) {
          clearSession()
          setUser(null)
          setToken(null)
        } else {
          const cachedUser = getStoredUser()
          if (cachedUser) setUser(cachedUser)
          setToken(storedToken)
        }
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = useCallback(async (email, password, remember = true) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.login(email, password)
      const newToken = response.access_token || response.token
      const newUser = response.user

      if (!newToken) throw new Error('Login response missing token')
      if (!newUser) throw new Error('Login response missing user data')

      persistSession(newToken, newUser, remember)
      setUser(newUser)
      setToken(newToken)
      storage.updateStreak()
      return { user: newUser, token: newToken }
    } catch (err) {
      setError(err.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.register(data)
      const newToken = response.access_token || response.token
      const newUser = response.user
      if (!newToken) throw new Error('Registration response missing token')
      if (!newUser) throw new Error('Registration response missing user data')

      persistSession(newToken, newUser, true)
      setUser(newUser)
      setToken(newToken)
      return { user: newUser, token: newToken }
    } catch (err) {
      setError(err.message || 'Registration failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setLoading(true)
    try {
      await authService.logout()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      clearSession()
      setUser(null)
      setToken(null)
      setLoading(false)
    }
  }, [])

  const forgotPassword = useCallback(async (email) => {
    setLoading(true)
    setError(null)
    try {
      return await authService.forgotPassword(email)
    } catch (err) {
      setError(err.message || 'Failed to send reset link')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const resetPassword = useCallback(async (resetToken, password) => {
    setLoading(true)
    setError(null)
    try {
      return await authService.resetPassword(resetToken, password)
    } catch (err) {
      setError(err.message || 'Failed to reset password')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const updateProfile = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.updateProfile(data)
      if (response.user) {
        setUser(response.user)
        const target = localStorage.getItem(TOKEN_KEY) ? localStorage : sessionStorage
        target.setItem(USER_KEY, JSON.stringify(response.user))
      }
      return response
    } catch (err) {
      setError(err.message || 'Failed to update profile')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const updatePassword = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      return await authService.updatePassword(data)
    } catch (err) {
      setError(err.message || 'Failed to update password')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    updatePassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

// ============================================================
// HYDRATION CONTEXT — sync backend → localStorage
// ============================================================

const HydrationContext = createContext(null)

const computeLevelFromXp = (xp) => {
  if (xp < 1000) return Math.floor(xp / 100) + 1
  return 10 + Math.floor((xp - 1000) / 200)
}

export function HydrationProvider({ children }) {
  const { user, token } = useAuth()
  const [hydration, setHydration] = useState(null)
  const [isHydrating, setIsHydrating] = useState(false)
  const [error, setError] = useState(null)

  const applyHydration = useCallback((res) => {
    if (!res) return

    // ─── Backend-authoritative (overwrite local) ───
    if (res.user) {
      const target = localStorage.getItem('token') ? localStorage : sessionStorage
      target.setItem('user', JSON.stringify(res.user))
    }

    if (res.ai_usage) {
      localStorage.setItem('hyelearner_ai_usage', JSON.stringify({
        date: new Date().toISOString().split('T')[0],
        count: res.ai_usage.used || 0,
        limit: res.ai_usage.limit || 10,
        resetAt: res.ai_usage.reset_at || null,
      }))
    }

    if (res.study_plan) {
      localStorage.setItem('hyelearner_study_plan_v2', JSON.stringify(res.study_plan))
    } else {
      localStorage.removeItem('hyelearner_study_plan_v2')
    }

    if (res.daily_tutor_today) {
      const today = new Date().toISOString().split('T')[0]
      const existing = JSON.parse(localStorage.getItem('hyelearner_daily_tutor_v1') || '{"sessions":{}}')
      existing.sessions = existing.sessions || {}
      existing.sessions[today] = res.daily_tutor_today
      localStorage.setItem('hyelearner_daily_tutor_v1', JSON.stringify(existing))
    }

    if (res.hyetutor_cache) {
      const today = new Date().toISOString().split('T')[0]
      const key = `hyetutor_${res.user?.id || user?.id || 'anonymous'}_${today}`
      localStorage.setItem(key, JSON.stringify({
        data: res.hyetutor_cache,
        date: today,
        timestamp: new Date().toISOString(),
      }))
    }

    // ─── Merge (max / union) ───
    if (res.gamification) {
      const localGam = JSON.parse(localStorage.getItem('hyelearner_gamification') || '{}')
      const backendXp = res.gamification.xp || 0
      const localXp = localGam.xp || 0
      const mergedXp = Math.max(backendXp, localXp)
      const mergedTotalXp = Math.max(res.gamification.total_xp || 0, localGam.totalXP || 0, mergedXp)

      localStorage.setItem('hyelearner_gamification', JSON.stringify({
        ...localGam,
        xp: mergedXp,
        totalXP: mergedTotalXp,
        level: computeLevelFromXp(mergedXp),
        streak: res.gamification.streak ?? localGam.streak ?? 0,
        badges: res.gamification.badges || localGam.badges || [],
      }))
    }

    if (Array.isArray(res.favorites)) {
      const localFavs = JSON.parse(localStorage.getItem('dictionary_favorites') || '[]')
      const merged = Array.from(new Set([...localFavs, ...res.favorites]))
      localStorage.setItem('dictionary_favorites', JSON.stringify(merged))
    }

    // ─── Weakness snapshot (authoritative, replaces local) ───
    if (res.weakness_today) {
      localStorage.setItem('hyelearner_weakness_today', JSON.stringify({
        weakTopics: res.weakness_today.weakTopics || [],
        summary: res.weakness_today.summary || '',
        generatedAt: res.weakness_today.generatedAt || null,
      }))
    } else {
      localStorage.removeItem('hyelearner_weakness_today')
    }

    setHydration(res)

    // Notify the rest of the app that localStorage has fresh data
    window.dispatchEvent(new Event('hydration:done'))
  }, [user?.id])

  const hydrate = useCallback(async () => {
    if (!token) {
      setHydration(null)
      return null
    }
    setIsHydrating(true)
    setError(null)
    try {
      const res = await userService.hydrate()
      applyHydration(res)
      return res
    } catch (err) {
      console.error('❌ Hydration failed:', err)
      setError(err.message || 'Failed to load data')
      return null
    } finally {
      setIsHydrating(false)
    }
  }, [token, applyHydration])

  useEffect(() => {
    if (token && user) hydrate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user?.id])

  const value = {
    hydration,
    isHydrating,
    error,
    hydrate,
    refreshHydration: hydrate,

    // Convenience reads
    aiUsage: hydration?.ai_usage || null,
    studyPlan: hydration?.study_plan || null,
    dailyTutorToday: hydration?.daily_tutor_today || null,
    dailyTutorRecent: hydration?.daily_tutor_recent || [],
    hyetutorCache: hydration?.hyetutor_cache || null,
    gamification: hydration?.gamification || null,
    mistakesCount: hydration?.mistakes_count || 0,
    favorites: hydration?.favorites || [],
    weaknessToday: hydration?.weakness_today || null,
  }

  return (
    <HydrationContext.Provider value={value}>
      {children}
    </HydrationContext.Provider>
  )
}

export const useHydration = () => {
  const context = useContext(HydrationContext)
  if (!context) throw new Error('useHydration must be used within HydrationProvider')
  return context
}

// ============================================================
// SUBSCRIPTION CONTEXT
// ============================================================

const SubscriptionContext = createContext(null)
const SUB_CACHE_KEY = 'hyelearner_subscription_cache'

export function SubscriptionProvider({ children }) {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState(() => {
    try {
      const cached = localStorage.getItem(SUB_CACHE_KEY)
      if (cached) return JSON.parse(cached)
    } catch {}
    return null
  })
  const [loading, setLoading] = useState(true)

  const refreshSubscription = useCallback(async () => {
    setLoading(true)
    try {
      const status = await subscriptions.status()
      setSubscription(status)
      try {
        localStorage.setItem(SUB_CACHE_KEY, JSON.stringify(status))
      } catch {}
    } catch (error) {
      console.error('Failed to load subscription:', error)
      setSubscription((prev) => prev || { isActive: false, tier: 'free', plan: 'Free' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!user) {
      setSubscription({ isActive: false, tier: 'free', plan: 'Free' })
      localStorage.removeItem(SUB_CACHE_KEY)
      setLoading(false)
      return
    }
    refreshSubscription()
  }, [user?.id, refreshSubscription])

  useEffect(() => {
    if (!user) return
    const interval = setInterval(() => {
      refreshSubscription()
    }, 4 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [user?.id, refreshSubscription])

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORE_ID_KEY) refreshSubscription()
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [refreshSubscription])

  const value = {
    subscription,
    isSubscribed: subscription?.isActive || false,
    loading,
    refreshSubscription,
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export const useSubscription = () => {
  const context = useContext(SubscriptionContext)
  if (!context) throw new Error('useSubscription must be used within SubscriptionProvider')
  return context
}

// ============================================================
// THEME CONTEXT
// ============================================================

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('hyelearner_theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('hyelearner_theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const setDarkMode = useCallback(() => setTheme('dark'), [])
  const setLightMode = useCallback(() => setTheme('light'), [])

  const isDark = theme === 'dark'

  const value = { theme, isDark, toggleTheme, setDarkMode, setLightMode }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

// ============================================================
// NOTIFICATION CONTEXT
// ============================================================

const NotificationContext = createContext(null)

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_notifications')
    if (saved) {
      try {
        setNotifications(JSON.parse(saved))
      } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('hyelearner_notifications', JSON.stringify(notifications))
  }, [notifications])

  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: `notif_${Date.now()}`,
      read: false,
      createdAt: new Date().toISOString(),
      ...notification,
    }
    setNotifications((prev) => [newNotification, ...prev])
    return newNotification
  }, [])

  const markRead = useCallback((id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }, [])

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const clearAll = useCallback(() => setNotifications([]), [])

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = `toast_${Date.now()}`
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duration)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const success = useCallback((message, duration) => showToast(message, 'success', duration), [showToast])
  const error = useCallback((message, duration) => showToast(message, 'error', duration), [showToast])
  const warning = useCallback((message, duration) => showToast(message, 'warning', duration), [showToast])
  const info = useCallback((message, duration) => showToast(message, 'info', duration), [showToast])

  const unreadCount = notifications.filter((n) => !n.read).length

  const value = {
    notifications,
    toasts,
    unreadCount,
    addNotification,
    markRead,
    markAllRead,
    removeNotification,
    clearAll,
    showToast,
    removeToast,
    success,
    error,
    warning,
    info,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotifications must be used within NotificationProvider')
  return context
}

// ============================================================
// EXPORT ALL CONTEXTS
// ============================================================

export {
  AuthContext,
  ThemeContext,
  NotificationContext,
  SubscriptionContext,
  HydrationContext,
}
