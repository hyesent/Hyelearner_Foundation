// ============================================================
// HYELEARNER: FOUNDATION — PROTECTED ROUTE (ENHANCED)
// Handles both authentication AND subscription-based access
// Free users: Only access to /practice (CBT), /settings, /profile, /revision-planner, /lessons
// Paid users: Full access to all routes
// Built by Hyesent.dev
// ============================================================

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth, usePing, useSubscription } from './hooks'

export default function ProtectedRoute() {
  const { user, loading } = useAuth()
  const { isSubscribed, loading: subLoading } = useSubscription()
  const location = useLocation()

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

  // --- Auth + Subscription loading check ---
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
  if (!isSubscribed && !isFreeRoute) {
    return <Navigate to="/practice" replace />
  }

  return <Outlet />
}
