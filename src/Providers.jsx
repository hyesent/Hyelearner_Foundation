// ============================================================
// HYELEARNER: FOUNDATION — PROVIDERS
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { AuthProvider } from './context'
import { ThemeProvider } from './context'
import { NotificationProvider } from './context'
import { LoadingScreen } from './components/LoadingScreen'

export function Providers({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize app — load any essential data here
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}