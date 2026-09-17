// ============================================================
// HYELEARNER: FOUNDATION — SHOWCASE SHELL
// Local router for the entire showcase. No react-router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'

import ShowcaseHome              from './ShowcaseHome'
import ShowcaseDashboard         from './ShowcaseDashboard'
import { ShowcaseStudyPlan }     from './ShowcaseStudyPlan'
import { ShowcaseMockExams }     from './ShowcaseMockExams'
import { ShowcaseLessons }       from './ShowcaseLessons'
import { ShowcaseCBTPractice, ShowcaseResults, ShowcaseTopicMode } from './ShowcaseLearn'
import { ShowcaseFormulaExplorer } from './ShowcaseFormulaExplorer'
import { ShowcaseDictionary }    from './ShowcaseDictionary'
import { ShowcaseAnalytics }     from './ShowcaseAnalytics'
import {
  ShowcaseParentDashboard,
  ShowcaseCourseFinder,
  ShowcaseCutoffTracker,
  ShowcaseBookmarks,
  ShowcaseSettings,
  ShowcaseProfile,
  ShowcaseEditProfile,
  ShowcaseOffline,
} from './ShowcaseExtra'
import {
  ShowcaseMistakeBook,
  ShowcaseRevisionPlanner,
  ShowcaseDuoBattle,
} from './ShowcaseExtend'
import {
  ShowcaseHeatmap,
  ShowcaseWeaknessFinder,
  ShowcaseGamification,
  ShowcaseLeaderboards,
} from './ShowcaseEngage'

export function ShowcaseShell({ initialPage = 'home' }) {
  const [page, setPage] = useState(initialPage)

  switch (page) {
    // ── Shell tabs ─────────────────────────────────────────
    case 'home':
      return <ShowcaseHome onNavigate={setPage} initialTab="home" />
    case 'study':
      return <ShowcaseHome onNavigate={setPage} initialTab="study" />
    case 'duel':
      return <ShowcaseHome onNavigate={setPage} initialTab="duel" />

    // ── Dashboard ──────────────────────────────────────────
    case 'dashboard':
      return <ShowcaseDashboard onNavigate={setPage} />

    // ── Study ──────────────────────────────────────────────
    case 'lessons':      return <ShowcaseLessons        onNavigate={setPage} />
    case 'practice':
    case 'cbtPractice':  return <ShowcaseCBTPractice    onNavigate={setPage} />
    case 'results':      return <ShowcaseResults        onNavigate={setPage} />
    case 'topicMode':    return <ShowcaseTopicMode      onNavigate={setPage} />
    case 'mockExams':    return <ShowcaseMockExams      onNavigate={setPage} />
    case 'studyPlan':    return <ShowcaseStudyPlan      onNavigate={setPage} />
    case 'revisionPlanner': return <ShowcaseRevisionPlanner onNavigate={setPage} />
    case 'mistakeBook':  return <ShowcaseMistakeBook    onNavigate={setPage} />
    case 'formulas':     return <ShowcaseFormulaExplorer onNavigate={setPage} />
    case 'dictionary':   return <ShowcaseDictionary     onNavigate={setPage} />

    // ── Insights ───────────────────────────────────────────
    case 'analytics':    return <ShowcaseAnalytics      onNavigate={setPage} />
    case 'heatmap':      return <ShowcaseHeatmap        onNavigate={setPage} />
    case 'weakness':     return <ShowcaseWeaknessFinder onNavigate={setPage} />

    // ── Social / Duel ──────────────────────────────────────
    case 'duoBattle':    return <ShowcaseDuoBattle      onNavigate={setPage} />
    case 'leaderboards': return <ShowcaseLeaderboards   onNavigate={setPage} />
    case 'gamification': return <ShowcaseGamification   onNavigate={setPage} />
    case 'social':       return <ShowcaseSocialFallback onNavigate={setPage} />

    // ── Career ─────────────────────────────────────────────
    case 'courseFinder':  return <ShowcaseCourseFinder   onNavigate={setPage} />
    case 'cutoffTracker': return <ShowcaseCutoffTracker  onNavigate={setPage} />

    // ── Account ────────────────────────────────────────────
    case 'bookmarks':    return <ShowcaseBookmarks      onNavigate={setPage} />
    case 'settings':     return <ShowcaseSettings       onNavigate={setPage} />
    case 'profile':      return <ShowcaseProfile        onNavigate={setPage} />
    case 'editProfile':  return <ShowcaseEditProfile    onNavigate={setPage} />
    case 'parent':       return <ShowcaseParentDashboard onNavigate={setPage} />
    case 'offline':      return <ShowcaseOffline        onNavigate={setPage} />

    // ── Fallback ───────────────────────────────────────────
    default:
      return <ShowcaseHome onNavigate={setPage} initialTab="home" />
  }
}

// ── Fallback used when a page hasn't been built yet ────────
function ShowcaseSocialFallback({ onNavigate }) {
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <span style={{ fontSize: 24 }}>👥</span>
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Social Hub</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Coming soon</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
            ← Back
          </button>
        </div>
        <div className="empty-card">
          <div className="icon">🚧</div>
          <div className="title">Social Hub is not built yet</div>
          <div className="desc">This showcase page hasn't been replicated. Check back later.</div>
          <div className="action">
            <button className="btn btn-primary" onClick={() => onNavigate?.('dashboard')}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
