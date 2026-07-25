// ============================================================
// HYELEARNER: FOUNDATION — PROTECTED ROUTE (ENHANCED)
// Handles both authentication AND subscription-based access
// Free users: Only access to /practice (CBT), /settings, /profile, /revision-planner, /lessons
// Paid users: Full access to all routes
// Built by Hyesent.dev
// ============================================================

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth, usePing } from './hooks'
import { subscriptions } from './services'
import { useState, useEffect } from 'react'

export default function ProtectedRoute() {
  const { user, loading, token } = useAuth()
  const location = useLocation()

  // --- Subscription state ---
  const [subLoading, setSubLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)

  // --- Global ping — every 5 minutes when authenticated ---
  const { isOnline, lastPing, username } = usePing({
    onLoad: true,
    interval: 5 * 60 * 1000,
    withAuth: true,
    enabled: !!user && !loading && !subLoading,
    onlyWhenVisible: true,
    logPings: import.meta.env.DEV,
    onError: (err) => {
      console.warn('[Ping] Backend unreachable:', err.message)
    },
  })

  // Load subscription status
  useEffect(() => {
    const loadSubscription = async () => {
      const storedToken = localStorage.getItem('token')
      if (!storedToken) {
        setIsActive(false)
        setSubLoading(false)
        return
      }

      try {
        const status = await subscriptions.status()
        setIsActive(status.isActive || false)
      } catch (error) {
        console.error('Failed to load subscription status:', error)
        setIsActive(false)
      } finally {
        setSubLoading(false)
      }
    }
    loadSubscription()
  }, [token])

  // --- Auth check — return null so Suspense handles loading ---
  if (loading || subLoading) {
    return null
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // --- Subscription-based route restriction ---
  const currentPath = location.pathname

  // FREE users can access these routes:
  const FREE_ONLY_ROUTES = [
    '/practice',
    '/settings',
    '/profile',
    '/revision-planner',
    '/lessons',
  ]

  const isFreeRoute = FREE_ONLY_ROUTES.some(route => 
    currentPath === route || currentPath.startsWith(route + '/')
  )

  // If user is NOT paid AND trying to access a restricted route → redirect to practice
  if (!isActive && !isFreeRoute) {
    return <Navigate to="/practice" replace />
  }

  return <Outlet />
}