// ============================================================
// HYELEARNER: FOUNDATION — ROOT APP
// Built by Hyesent.dev
// ============================================================

import { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers'
import Router from './Router'
import { StudyReminder } from './components/studyReminder'
import { LoadingScreen } from './components/LoadingScreen'

// ============================================================
// LAZY LOAD SLIDESHOW (for onboarding/welcome)
// ============================================================

const Slideshow = lazy(() => import('./Slideshow'))

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showSlideshow, setShowSlideshow] = useState(() => {
    // Check if user has seen slideshow before
    return localStorage.getItem('hyelearner_slideshow_seen') !== 'true'
  })

  // ============================================================
  // APP INITIALIZATION
  // ============================================================

  useEffect(() => {
    // Check data version and migrate if needed
    const checkDataVersion = async () => {
      try {
        const { storage } = await import('./storage')
        const result = storage.checkDataVersion()
        if (result.migrated) {
          console.log(`📦 Data migrated from ${result.from} to ${result.to}`)
        }
      } catch (error) {
        console.error('Failed to check data version:', error)
      }
    }

    // Preload critical assets
    const preloadAssets = () => {
      // Preload fonts, critical images, etc.
    }

    const init = async () => {
      await checkDataVersion()
      preloadAssets()
      
      // Show loading screen briefly
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
      
      return () => clearTimeout(timer)
    }

    init()
  }, [])

  // ============================================================
  // HANDLE SLIDESHOW COMPLETE
  // ============================================================

  const handleSlideshowComplete = () => {
    localStorage.setItem('hyelearner_slideshow_seen', 'true')
    setShowSlideshow(false)
  }

  // ============================================================
  // RENDER
  // ============================================================

  if (loading) {
    return <LoadingScreen />
  }

  // Show slideshow for new users
  if (showSlideshow) {
    return (
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Slideshow onComplete={handleSlideshowComplete} />
        </Suspense>
      </BrowserRouter>
    )
  }

  // Main app
  return (
    <BrowserRouter>
      <Providers>
        <Suspense fallback={<LoadingScreen />}>
          <Router />
        </Suspense>
        <StudyReminder />
      </Providers>
    </BrowserRouter>
  )
}