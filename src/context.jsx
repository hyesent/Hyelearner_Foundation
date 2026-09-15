// ============================================================
// HYELEARNER: FOUNDATION — CONTEXT
// Auth, Theme, Notification, Subscription Contexts
// Built by Hyesent.dev
// ============================================================

import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import { auth as authService, subscriptions } from './services'
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
  const raw =
    localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)
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

  // clear the other store so we don't have stale data
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
  // ✅ Rehydrate immediately from storage so no flash of null
  const [user, setUser] = useState(() => getStoredUser())
  const [token, setToken] = useState(() => getStoredToken())
  // ✅ If we have a token, don't show loading skeleton — we already have user
  const [loading, setLoading] = useState(() => !getStoredToken())
  const [error, setError] = useState(null)

  // Load user on mount — validate token with backend, but DON'T wipe on network errors
  useEffect(() => {
    const loadUser = async () => {
      const storedToken = getStoredToken()
      console.log('🟣 [AUTH-1] AuthProvider mounted, loading user...')
      console.log('🟣 [AUTH-1] Token:', storedToken ? '✅ Present' : '❌ Missing')

      if (!storedToken) {
        setLoading(false)
        return
      }

      try {
        console.log('🟣 [AUTH-3] Calling authService.getMe()...')
        const response = await authService.getMe()
        console.log('🟣 [AUTH-4] getMe response:', response)

        let userData = null
        if (response && response.user) userData = response.user
        else if (response && response.id) userData = response

        if (userData) {
          setUser(userData)
          // refresh stored user in whichever store has the token
          const target = localStorage.getItem(TOKEN_KEY)
            ? localStorage
            : sessionStorage
          target.setItem(USER_KEY, JSON.stringify(userData))
        }
        setToken(storedToken)
      } catch (err) {
        console.error('🟣 [AUTH-ERROR] getMe failed:', err)

        // ✅ Only clear session if token is definitely invalid (401 / 403)
        const status = err?.response?.status || err?.status
        const isAuthError = status === 401 || status === 403

        if (isAuthError) {
          console.warn('🟣 [AUTH] Token invalid — clearing session')
          clearSession()
          setUser(null)
          setToken(null)
        } else {
          // Network / server error → KEEP user logged in with cached data
          console.warn('🟣 [AUTH] Network/backend error — keeping cached session')
          const cachedUser = getStoredUser()
          if (cachedUser) setUser(cachedUser)
          setToken(storedToken)
        }
      } finally {
        setLoading(false)
        console.log('🟣 [AUTH-6] AuthProvider loading complete')
      }
    }

    loadUser()
  }, [])

  // ✅ Login — accepts remember flag from the login form
  const login = useCallback(async (email, password, remember = true) => {
    console.log('🟢 [LOGIN-1] AuthContext.login called')
    console.log('🟢 [LOGIN-1] Email:', email, '| Remember:', remember)

    setLoading(true)
    setError(null)

    try {
      const response = await authService.login(email, password)
      console.log('🟢 [LOGIN-3] authService.login response:', response)

      const newToken = response.access_token || response.token
      const newUser = response.user

      if (!newToken) throw new Error('Login response missing token')
      if (!newUser) throw new Error('Login response missing user data')

      // ✅ Persist to localStorage or sessionStorage based on remember
      persistSession(newToken, newUser, remember)
      console.log('🟢 [LOGIN-6] Session stored in', remember ? 'localStorage' : 'sessionStorage')

      setUser(newUser)
      setToken(newToken)

      storage.updateStreak()

      return { user: newUser, token: newToken }
    } catch (err) {
      console.error('🟢 [LOGIN-ERROR]', err)
      setError(err.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Register — always remembers (new user)
  const register = useCallback(async (data) => {
    console.log('🟢 [REGISTER-1] AuthContext.register called')

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
      console.error('🟢 [REGISTER-ERROR]', err)
      setError(err.message || 'Registration failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Logout
  const logout = useCallback(async () => {
    console.log('🟢 [LOGOUT] Logging out...')
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
      console.log('🟢 [LOGOUT] Logout complete')
    }
  }, [])

  // Forgot Password
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

  // Reset Password
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

  // Update Profile
  const updateProfile = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.updateProfile(data)
      if (response.user) {
        setUser(response.user)
        // update whichever store has the session
        const target = localStorage.getItem(TOKEN_KEY)
          ? localStorage
          : sessionStorage
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

  // Update Password
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
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

// ============================================================
// SUBSCRIPTION CONTEXT — SINGLE SOURCE OF TRUTH
// ============================================================

const SubscriptionContext = createContext(null)

const SUB_CACHE_KEY = 'hyelearner_subscription_cache'

export function SubscriptionProvider({ children }) {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState(() => {
    // ✅ Rehydrate from cache immediately so paid users don't flash free
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
      // cache the result
      try {
        localStorage.setItem(SUB_CACHE_KEY, JSON.stringify(status))
      } catch {}
    } catch (error) {
      console.error('Failed to load subscription:', error)
      // ✅ On failure, keep whatever we have (cached or previous) — don't downgrade
      setSubscription((prev) => {
        if (prev) return prev
        return { isActive: false, tier: 'free', plan: 'Free' }
      })
    } finally {
      setLoading(false)
    }
  }, [])

  // Re-run when user changes
  useEffect(() => {
    if (!user) {
      setSubscription({ isActive: false, tier: 'free', plan: 'Free' })
      localStorage.removeItem(SUB_CACHE_KEY)
      setLoading(false)
      return
    }
    refreshSubscription()
  }, [user?.id, refreshSubscription])

  // Periodic refresh (every 4 hours)
  useEffect(() => {
    if (!user) return
    const interval = setInterval(() => {
      refreshSubscription()
    }, 4 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [user?.id, refreshSubscription])

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORE_ID_KEY) {
        refreshSubscription()
      }
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
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider')
  }
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
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
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
    localStorage.setItem(
      'hyelearner_notifications',
      JSON.stringify(notifications),
    )
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
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    )
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

  const success = useCallback(
    (message, duration) => showToast(message, 'success', duration),
    [showToast],
  )
  const error = useCallback(
    (message, duration) => showToast(message, 'error', duration),
    [showToast],
  )
  const warning = useCallback(
    (message, duration) => showToast(message, 'warning', duration),
    [showToast],
  )
  const info = useCallback(
    (message, duration) => showToast(message, 'info', duration),
    [showToast],
  )

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
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider')
  }
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
}
