import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import { LoadingScreen } from './components/LoadingScreen'

// SHOWCASE
import { PreviewProvider } from './pages/showcase/PreviewContext'
import { ShowcaseLayout } from './pages/showcase/ShowcaseLayout'
import { ShowcaseShell } from './pages/showcase/ShowcaseShell'

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
                <ShowcaseShell />
              </ShowcaseLayout>
            </PreviewProvider>
          }
        />

      </Routes>
    </Suspense>
  )
}
