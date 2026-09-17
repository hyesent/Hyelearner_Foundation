// ============================================================
// HYELEARNER: FOUNDATION — SHOWCASE SHELL
// Local router for the entire showcase. No react-router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'

import ShowcaseHome              from './ShowcaseHome'
import ShowcaseDashboard         from './ShowcaseDashboard'
import ShowcaseHyeTutor          from './ShowcaseHyeTutor'
import ShowcaseSocial            from './ShowcaseSocial'
import { ShowcaseStudyPlan }     from './ShowcaseStudyPlan'
import { ShowcaseMockExams }     from './ShowcaseMockExams'
import { ShowcaseLessons }       from './ShowcaseLessons'
import { ShowcaseCBTPractice, ShowcaseResults, ShowcaseTopicMode } from './ShowcaseLearn'
import { ShowcaseFormulaExplorer } from './ShowcaseFormulaExplorer'
import { ShowcaseDictionary }    from './ShowcaseDictionary'
import { ShowcaseAnalytics }     from './ShowcaseAnalytics'
import { ShowcaseFeedback }      from './ShowcaseFeedback'
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
    // ── Shell tabs (Home / Study / Duel inside Home) ───────
    case 'home':
      return <ShowcaseHome onNavigate={setPage} initialTab="home" />
    case 'study':
      return <ShowcaseHome onNavigate={setPage} initialTab="study" />
    case 'duel':
      return <ShowcaseHome onNavigate={setPage} initialTab="duel" />

    // ── Dashboard ──────────────────────────────────────────
    case 'dashboard':
      return <ShowcaseDashboard onNavigate={setPage} />

    // ── HyeTutor ───────────────────────────────────────────
    case 'hyetutor':
      return <ShowcaseHyeTutor onNavigate={setPage} />

    // ── Study ──────────────────────────────────────────────
    case 'lessons':         return <ShowcaseLessons         onNavigate={setPage} />
    case 'practice':
    case 'cbtPractice':     return <ShowcaseCBTPractice     onNavigate={setPage} />
    case 'results':         return <ShowcaseResults         onNavigate={setPage} />
    case 'topicMode':       return <ShowcaseTopicMode       onNavigate={setPage} />
    case 'mockExams':       return <ShowcaseMockExams       onNavigate={setPage} />
    case 'studyPlan':       return <ShowcaseStudyPlan       onNavigate={setPage} />
    case 'revisionPlanner': return <ShowcaseRevisionPlanner onNavigate={setPage} />
    case 'mistakeBook':     return <ShowcaseMistakeBook     onNavigate={setPage} />
    case 'formulas':        return <ShowcaseFormulaExplorer onNavigate={setPage} />
    case 'dictionary':      return <ShowcaseDictionary      onNavigate={setPage} />

    // ── Insights ───────────────────────────────────────────
    case 'analytics':       return <ShowcaseAnalytics       onNavigate={setPage} />
    case 'heatmap':         return <ShowcaseHeatmap         onNavigate={setPage} />
    case 'weakness':        return <ShowcaseWeaknessFinder  onNavigate={setPage} />

    // ── Social / Duel ──────────────────────────────────────
    case 'duoBattle':       return <ShowcaseDuoBattle       onNavigate={setPage} />
    case 'leaderboards':    return <ShowcaseLeaderboards    onNavigate={setPage} />
    case 'gamification':    return <ShowcaseGamification    onNavigate={setPage} />
    case 'social':          return <ShowcaseSocial          onNavigate={setPage} />

    // ── Career ─────────────────────────────────────────────
    case 'courseFinder':    return <ShowcaseCourseFinder    onNavigate={setPage} />
    case 'cutoffTracker':   return <ShowcaseCutoffTracker   onNavigate={setPage} />

    // ── Account ────────────────────────────────────────────
    case 'bookmarks':       return <ShowcaseBookmarks       onNavigate={setPage} />
    case 'settings':        return <ShowcaseSettings        onNavigate={setPage} />
    case 'profile':         return <ShowcaseProfile         onNavigate={setPage} />
    case 'editProfile':     return <ShowcaseEditProfile     onNavigate={setPage} />
    case 'parent':          return <ShowcaseParentDashboard onNavigate={setPage} />
    case 'offline':         return <ShowcaseOffline         onNavigate={setPage} />
    case 'feedback':        return <ShowcaseFeedback        onNavigate={setPage} />

    // ── Fallback ───────────────────────────────────────────
    default:
      return <ShowcaseHome onNavigate={setPage} initialTab="home" />
  }
}
