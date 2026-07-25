// ============================================================
// HYELEARNER: FOUNDATION — ROUTER
// Built by Hyesent.dev
// ============================================================

import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { LoadingScreen } from './components/LoadingScreen'

// ===== AUTH PAGES =====
import Login from './pages/auth'
import { Register, ForgotPassword } from './pages/auth'

// ===== DASHBOARD =====
import Dashboard from './pages/dashboard'

// ===== HYETUTOR =====
import { HyeTutorPage } from './pages/hyetutor'

// ===== LEARN PAGES =====
import { 
  CBTPracticePage, 
  ResultsPage, 
  TopicModePage 
} from './pages/learn-pages'

// ===== LESSON PAGES (NEW) =====
import { LessonsPage } from './pages/lesson-pages'

// ===== ENGAGE PAGES =====
import { 
  HeatmapPage, 
  WeaknessFinderPage, 
  GamificationPage, 
  LeaderboardsPage 
} from './pages/engage-pages'

// ===== EXTEND PAGES =====
import { 
  MistakeBookPage, 
  RevisionPlannerPage, 
  DuoBattlePage 
} from './pages/extend-pages'

// ===== EXTRA PAGES =====
import { 
  ParentDashboardPage, 
  CourseFinderPage, 
  CutoffTrackerPage, 
  BookmarksPage, 
  SettingsPage, 
  ProfilePage, 
  OfflinePage 
} from './pages/extra-pages'

// ===== STUDY PLAN PAGE =====
import { StudyPlanPage } from './pages/study-plan'

// ===== ANALYTICS PAGE =====
import { AnalyticsPage } from './pages/analytics'

// ===== MOCK EXAMS PAGE =====
import { MockExamsPage } from './pages/mock-exams'

// ===== SOCIAL PAGE =====
import SocialPage from './pages/social/SocialPage'

// ===== NEW PAGES =====
import { DictionaryPage } from './pages/dictionary'
import { FormulaExplorerPage } from './pages/formulapage'
import{ AdminPage } from './pages/AdminPage'
import FeedbackContributionsPage from './pages/FeedbackContributionsPage'

export default function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ===== PROTECTED ROUTES ===== */}
        <Route element={<ProtectedRoute />}>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* HyeTutor */}
          <Route path="/hyetutor" element={<HyeTutorPage />} />

          {/* Learn */}
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/practice" element={<CBTPracticePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/topic-mode" element={<TopicModePage />} />

          {/* Engage */}
          <Route path="/heatmap" element={<HeatmapPage />} />
          <Route path="/weakness" element={<WeaknessFinderPage />} />
          <Route path="/gamification" element={<GamificationPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />

          {/* Extend */}
          <Route path="/mistake-book" element={<MistakeBookPage />} />
          <Route path="/revision-planner" element={<RevisionPlannerPage />} />
          <Route path="/duo-battle" element={<DuoBattlePage />} />

          {/* Extra */}
          <Route path="/parent" element={<ParentDashboardPage />} />
          <Route path="/course-finder" element={<CourseFinderPage />} />
          <Route path="/cutoff-tracker" element={<CutoffTrackerPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/offline" element={<OfflinePage />} />

          {/* Study Plan */}
          <Route path="/study-plan" element={<StudyPlanPage />} />

          {/* Analytics */}
          <Route path="/analytics" element={<AnalyticsPage />} />

          {/* Mock Exams */}
          <Route path="/mock-exams" element={<MockExamsPage />} />

          {/* Social */}
          <Route path="/social" element={<SocialPage />} />
          <Route path="/social/chat" element={<SocialPage />} />

          {/* ✅ NEW ROUTES */}
          <Route path="/feedback" element={<FeedbackContributionsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/formulas" element={<FormulaExplorerPage />} />
        </Route>

        {/* ===== 404 ===== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}