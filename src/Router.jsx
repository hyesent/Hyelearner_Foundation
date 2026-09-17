import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import { LoadingScreen } from './components/LoadingScreen'

// SHOWCASE
import { PreviewProvider } from './pages/showcase/PreviewContext'

// ============================================================
// ROUTER
// ============================================================
export default function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/showcase"
          element={
            <PreviewProvider>
              <div style={{ padding: 40 }}>
                PreviewProvider loaded
              </div>
            </PreviewProvider>
          }
        />

      </Routes>
    </Suspense>
  )
}
