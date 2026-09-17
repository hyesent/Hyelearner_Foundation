// ============================================================
// HYELEARNER: FOUNDATION — ROUTER (WITH DAILY TUTOR HISTORY)
// Built by Hyesent.dev
// ============================================================

import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { LoadingScreen } from './components/LoadingScreen'

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

export default function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* PROTECTED */}
        <Route element={<ProtectedRoute />}>
          {/* Home shell */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* HyeTutor */}
          <Route path="/hyetutor" element={<HyeTutorPage />} />
          <Route path="/hyetutor/chat" element={<HyeTutorChatPage />} />
          <Route path="/daily-tutor/history" element={<DailyTutorPage />} />

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
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/offline" element={<OfflinePage />} />

          {/* Study Plan */}
          <Route path="/study-plan" element={<StudyPlanPage />} />

          {/* Other */}
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/mock-exams" element={<MockExamsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/social/chat" element={<SocialPage />} />
          <Route path="/feedback" element={<FeedbackContributionsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/formulas" element={<FormulaExplorerPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
