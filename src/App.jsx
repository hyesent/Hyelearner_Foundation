// ============================================================
// HYELEARNER: FOUNDATION — ROOT APP
// Built by Hyesent.dev
// ============================================================

import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers'
import Router from './Router'
import { StudyReminder } from './components/studyReminder'
import { LoadingScreen } from './components/LoadingScreen'
import { AIUsageOrb } from './components/AIUsageOrb'

export default function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Suspense fallback={<LoadingScreen />}>
          <Router />
        </Suspense>
        <StudyReminder />
        <AIUsageOrb />
      </Providers>
    </BrowserRouter>
  )
}
