// ============================================================
// HYELEARNER: FOUNDATION — CONTEXT
// Auth, Theme, Notification Contexts
// Built by Hyesent.dev
// ============================================================

import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import { auth as authService } from './services'
import { storage } from './storage'

// ============================================================
// AUTH CONTEXT
// ============================================================

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))

  // Load user on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token')
      console.log('🟣 [AUTH-1] AuthProvider mounted, loading user...')
      console.log('🟣 [AUTH-1] Token in localStorage:', token ? '✅ Present' : '❌ Missing')
      
      if (!token) {
        console.log('🟣 [AUTH-2] No token, setting loading=false')
        setLoading(false)
        return
      }

      try {
        console.log('🟣 [AUTH-3] Calling authService.getMe()...')
        const response = await authService.getMe()
        console.log('🟣 [AUTH-4] getMe response:', response)
        
        // ✅ Handle both response formats
        let userData = null
        if (response && response.user) {
          userData = response.user
        } else if (response && response.id) {
          userData = response
        }
        
        setUser(userData)
        setToken(token)
        console.log('🟣 [AUTH-5] User set from token:', userData)
      } catch (err) {
        console.error('🟣 [AUTH-ERROR] Failed to load user:', err)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
        setToken(null)
      } finally {
        setLoading(false)
        console.log('🟣 [AUTH-6] AuthProvider loading complete')
      }
    }

    loadUser()
  }, [])

  // ✅ FIXED: Login — uses user from response directly
  const login = useCallback(async (email, password) => {
    console.log('🟢 [LOGIN-1] AuthContext.login called')
    console.log('🟢 [LOGIN-1] Email:', email)
    
    setLoading(true)
    setError(null)
    
    try {
      console.log('🟢 [LOGIN-2] Calling authService.login()...')
      const response = await authService.login(email, password)
      console.log('🟢 [LOGIN-3] authService.login response:', response)
      
      // ✅ Get the token
      const token = response.access_token || response.token
      console.log('🟢 [LOGIN-4] Token extracted:', token ? '✅ Present' : '❌ Missing')
      
      // ✅ User is in the response!
      const user = response.user
      console.log('🟢 [LOGIN-5] User from login response:', user)
      
      if (!user) {
        console.error('🟢 [LOGIN-ERROR] No user in response!')
        throw new Error('Login response missing user data')
      }
      
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      console.log('🟢 [LOGIN-6] Token and user stored in localStorage')
      
      setUser(user)
      setToken(token)
      console.log('🟢 [LOGIN-7] User set in state:', user)
      
      storage.updateStreak()
      
      return { user, token }
    } catch (err) {
      console.error('🟢 [LOGIN-ERROR] AuthContext.login error:', err)
      setError(err.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
      console.log('🟢 [LOGIN-8] AuthContext.login complete')
    }
  }, [])

  // Register
  const register = useCallback(async (data) => {
    console.log('🟢 [REGISTER-1] AuthContext.register called')
    console.log('🟢 [REGISTER-1] Email:', data.email)
    
    setLoading(true)
    setError(null)
    
    try {
      console.log('🟢 [REGISTER-2] Calling authService.register()...')
      const response = await authService.register(data)
      console.log('🟢 [REGISTER-3] authService.register response:', response)
      
      const token = response.access_token || response.token
      console.log('🟢 [REGISTER-4] Token extracted:', token ? '✅ Present' : '❌ Missing')
      
      const user = response.user
      console.log('🟢 [REGISTER-5] User from register response:', user)
      
      if (!user) {
        console.error('🟢 [REGISTER-ERROR] No user in response!')
        throw new Error('Registration response missing user data')
      }
      
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      console.log('🟢 [REGISTER-6] Token and user stored in localStorage')
      
      setUser(user)
      setToken(token)
      console.log('🟢 [REGISTER-7] User set in state:', user)
      
      return { user, token }
    } catch (err) {
      console.error('🟢 [REGISTER-ERROR] AuthContext.register error:', err)
      setError(err.message || 'Registration failed')
      throw err
    } finally {
      setLoading(false)
      console.log('🟢 [REGISTER-8] AuthContext.register complete')
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
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUser(null)
      setToken(null)
      setLoading(false)
      console.log('🟢 [LOGOUT] Logout complete')
    }
  }, [])

  // Forgot Password
  const forgotPassword = useCallback(async (email) => {
    console.log('🟡 [FORGOT-1] AuthContext.forgotPassword called')
    console.log('🟡 [FORGOT-1] Email:', email)
    
    setLoading(true)
    setError(null)
    try {
      const response = await authService.forgotPassword(email)
      console.log('🟡 [FORGOT-2] Reset link sent')
      return response
    } catch (err) {
      console.error('🟡 [FORGOT-ERROR] Failed:', err)
      setError(err.message || 'Failed to send reset link')
      throw err
    } finally {
      setLoading(false)
      console.log('🟡 [FORGOT-3] Complete')
    }
  }, [])

  // Reset Password
  const resetPassword = useCallback(async (token, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.resetPassword(token, password)
      return response
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
        localStorage.setItem('user', JSON.stringify(response.user))
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
      const response = await authService.updatePassword(data)
      return response
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
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  const setDarkMode = useCallback(() => {
    setTheme('dark')
  }, [])

  const setLightMode = useCallback(() => {
    setTheme('light')
  }, [])

  const isDark = theme === 'dark'

  const value = {
    theme,
    isDark,
    toggleTheme,
    setDarkMode,
    setLightMode,
  }

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

  // Load notifications from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_notifications')
    if (saved) {
      setNotifications(JSON.parse(saved))
    }
  }, [])

  // Save notifications to localStorage
  useEffect(() => {
    localStorage.setItem('hyelearner_notifications', JSON.stringify(notifications))
  }, [notifications])

  // Add a notification
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: `notif_${Date.now()}`,
      read: false,
      createdAt: new Date().toISOString(),
      ...notification,
    }
    setNotifications(prev => [newNotification, ...prev])
    return newNotification
  }, [])

  // Mark notification as read
  const markRead = useCallback((id) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    )
  }, [])

  // Mark all as read
  const markAllRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    )
  }, [])

  // Remove notification
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  // Show toast
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = `toast_${Date.now()}`
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, duration)
  }, [])

  // Remove toast
  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  // Success toast shortcut
  const success = useCallback((message, duration) => {
    showToast(message, 'success', duration)
  }, [showToast])

  // Error toast shortcut
  const error = useCallback((message, duration) => {
    showToast(message, 'error', duration)
  }, [showToast])

  // Warning toast shortcut
  const warning = useCallback((message, duration) => {
    showToast(message, 'warning', duration)
  }, [showToast])

  // Info toast shortcut
  const info = useCallback((message, duration) => {
    showToast(message, 'info', duration)
  }, [showToast])

  const unreadCount = notifications.filter(n => !n.read).length

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
}