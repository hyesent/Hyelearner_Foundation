import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import { LoadingScreen } from './components/LoadingScreen'

// SHOWCASE
import { PreviewProvider } from './pages/showcase/PreviewContext'
import { ShowcaseLayout } from './pages/showcase/ShowcaseLayout'

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
              <ShowcaseLayout pageName="Hyelearner">
                <div style={{ padding: 40 }}>
                  ShowcaseLayout loaded
                </div>
              </ShowcaseLayout>
            </PreviewProvider>
          }
        />

      </Routes>
    </Suspense>
  )
}
