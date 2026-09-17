// ============================================================
// HYELEARNER: FOUNDATION — ROUTER
// Built by Hyesent.dev
// ============================================================

import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { LoadingScreen } from './components/LoadingScreen'
import { useAuth } from './hooks'

import Login from './pages/auth'
import { Register, ForgotPassword } from './pages/auth'
import Home from './pages/Home'
import Dashboard from './pages/dashboard'
import { HyeTutorPage, HyeTutorChatPage } from './pages/hyetutor'
import DailyTutorPage from './pages/hyetutor/DailyTutorPage'
import { CBTPracticePage, ResultsPage, TopicModePage } from './pages/learn-pages'
import { LessonsPage } from './pages/lesson-pages'
import { HeatmapPage, WeaknessFinderPage, GamificationPage, LeaderboardsPage } from './pages/engage-pages'
import { MistakeBookPage, RevisionPlannerPage, DuoBattlePage } from './pages/extend-pages'
import {
  ParentDashboardPage, CourseFinderPage, CutoffTrackerPage,
  BookmarksPage, SettingsPage, ProfilePage, OfflinePage,
  EditProfilePage,
} from './pages/extra-pages'
import { StudyPlanPage } from './pages/study-plan'
import { AnalyticsPage } from './pages/analytics'
import { MockExamsPage } from './pages/mock-exams'
import SocialPage from './pages/social/SocialPage'
import { DictionaryPage } from './pages/dictionary'
import { FormulaExplorerPage } from './pages/formulapage'
import { AdminPage } from './pages/AdminPage'
import FeedbackContributionsPage from './pages/FeedbackContributionsPage'

// NEW
import Landing from './pages/Landing'
import { Slideshow } from './Slideshow'
import { ParentSlideshow } from './pages/parent/ParentSlideshow'
import ParentLogin from './pages/parent/ParentLogin'
import ParentDashboard from './pages/parent/ParentDashboard'
import Help from './pages/help/Help'

// ── SHOWCASE ─────────────────────────────────────────────
import { PreviewProvider } from './pages/showcase/PreviewContext'
import { ShowcaseLayout } from './pages/showcase/ShowcaseLayout'
import { ShowcaseShell } from './pages/showcase/ShowcaseShell'

// ============================================================
// ROUTE WRAPPERS
// ============================================================

function LandingOrRedirect() {
  const { user, loading } = useAuth()

  if (loading) return <LoadingScreen />

  const parentCode =
    typeof window !== 'undefined'
      ? localStorage.getItem('hyelearner_parent_code')
      : null
  if (parentCode) {
    return <Navigate to="/parent/dashboard" replace />
  }

  if (user) {
    return <Navigate to="/home" replace />
  }

  return <Landing />
}

function StudentSlideshowRoute() {
  if (typeof window !== 'undefined') {
    const seen = localStorage.getItem('hyelearner_slideshow_seen') === 'true'
    if (seen) return <Navigate to="/login" replace />
  }

  return (
    <Slideshow
      onComplete={() => {
        localStorage.setItem('hyelearner_slideshow_seen', 'true')
        window.location.replace('/login')
      }}
    />
  )
}

function ParentSlideshowRoute() {
  if (typeof window !== 'undefined') {
    const seen = localStorage.getItem('hyelearner_parent_slideshow_seen') === 'true'
    if (seen) return <Navigate to="/parent/login" replace />
  }

  return (
    <ParentSlideshow
      onComplete={() => {
        localStorage.setItem('hyelearner_parent_slideshow_seen', 'true')
        window.location.replace('/parent/login')
      }}
    />
  )
}

// ============================================================
// ROUTER
// ============================================================
export default function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LandingOrRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* HELP — public */}
        <Route path="/help" element={<Help />} />

        {/* ── SHOWCASE — public, no auth, no protection ── */}
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

        {/* ONBOARDING */}
        <Route path="/slideshow/student" element={<StudentSlideshowRoute />} />
        <Route path="/slideshow/parent" element={<ParentSlideshowRoute />} />

        {/* PARENT */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />

        {/* PROTECTED — student shell */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/hyetutor" element={<HyeTutorPage />} />
          <Route path="/hyetutor/chat" element={<HyeTutorChatPage />} />
          <Route path="/daily-tutor/history" element={<DailyTutorPage />} />

          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/practice" element={<CBTPracticePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/topic-mode" element={<TopicModePage />} />

          <Route path="/heatmap" element={<HeatmapPage />} />
          <Route path="/weakness" element={<WeaknessFinderPage />} />
          <Route path="/gamification" element={<GamificationPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />

          <Route path="/mistake-book" element={<MistakeBookPage />} />
          <Route path="/revision-planner" element={<RevisionPlannerPage />} />
          <Route path="/duo-battle" element={<DuoBattlePage />} />

          <Route path="/parent" element={<ParentDashboardPage />} />
          <Route path="/course-finder" element={<CourseFinderPage />} />
          <Route path="/cutoff-tracker" element={<CutoffTrackerPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/offline" element={<OfflinePage />} />

          <Route path="/study-plan" element={<StudyPlanPage />} />

          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/mock-exams" element={<MockExamsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/social/chat" element={<SocialPage />} />
          <Route path="/feedback" element={<FeedbackContributionsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/formulas" element={<FormulaExplorerPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
