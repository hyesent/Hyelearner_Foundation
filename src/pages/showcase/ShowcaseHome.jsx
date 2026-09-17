// ============================================================
// HYELEARNER: FOUNDATION — HOME (SHOWCASE / PREVIEW)
// 3 tabs: Home / Study / Duel. Static + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react'
import { ViewOnly } from './ViewOnly'
import { ShowcaseBottomNav } from './ShowcaseBottomNav'
import { ShowcaseAIUsageOrb } from './ShowcaseAIUsageOrb'
import {
  RefreshCw, User, Zap, Flame, PenTool, Target, Send, MessageSquare,
  Sparkles, Calendar, Timer, PlayCircle, StopCircle, CheckCircle2,
  Clock, ChevronRight, BookOpen, Languages, FunctionSquare, Award,
  BarChart3, BookMarked, FileText, Swords, Trophy, Gamepad2, Brain,
  X, Loader2, Check, Globe,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const STUDENT = { firstName: 'Ada', username: 'adaobi' }

const QUICK_STATS = {
  gam: { xp: 2340, level: 4, streak: 12 },
  daily: { accuracy: 78, sessions: 4, studyTime: 55 },
}

const WORD_OF_THE_DAY = {
  word: 'Ubiquitous',
  definition: 'Present, appearing, or found everywhere.',
  example: 'Smartphones have become ubiquitous in modern life.',
}

const STUDY_PLAN = {
  exam_date: '2026-06-15',
  exam_info: { exam_type: 'jamb', exam_date: '2026-06-15' },
  plan: {
    exam_date: '2026-06-15',
    weekly_schedule: [
      { day: 'Monday',    focus: 'Algebra & Mechanics',    topics: [
        { subject: 'Mathematics', topic: 'Quadratic Equations', hours: 1.5 },
        { subject: 'Physics',     topic: "Newton's Laws",       hours: 1.0 },
      ]},
      { day: 'Tuesday',   focus: 'Chemistry fundamentals', topics: [
        { subject: 'Chemistry', topic: 'Atomic Structure',    hours: 1.0 },
        { subject: 'English',   topic: 'Argumentative Essay', hours: 1.0 },
      ]},
      { day: 'Wednesday', focus: 'Biology & Comprehension', topics: [
        { subject: 'Biology', topic: 'Cell Division', hours: 1.5 },
        { subject: 'English', topic: 'Comprehension', hours: 1.0 },
      ]},
      { day: 'Thursday',  focus: 'Physics intensive',      topics: [
        { subject: 'Physics', topic: 'Work, Energy & Power', hours: 2.0 },
      ]},
      { day: 'Friday',    focus: 'Math & Chemistry',       topics: [
        { subject: 'Mathematics', topic: 'Trigonometry',      hours: 1.5 },
        { subject: 'Chemistry',   topic: 'Organic Chemistry', hours: 1.0 },
      ]},
      { day: 'Saturday',  focus: 'Practice tests',         topics: [
        { subject: 'Mathematics', topic: 'Mock Test 1', hours: 1.5 },
        { subject: 'Physics',     topic: 'Mock Test 1', hours: 1.5 },
      ]},
      { day: 'Sunday',    focus: 'Review',                 topics: [
        { subject: 'English', topic: 'Vocabulary Review', hours: 1.0 },
      ]},
    ],
  },
}

const REVISION_TASKS = [
  { id: 'k1', title: 'Revise Physics formulas',         subject: 'Physics',     priority: 'high',   estimatedTime: 30, completed: true  },
  { id: 'k2', title: 'Practice 20 Algebra questions',   subject: 'Mathematics', priority: 'high',   estimatedTime: 45, completed: false },
  { id: 'k3', title: 'Review Organic Chemistry notes',  subject: 'Chemistry',   priority: 'medium', estimatedTime: 25, completed: false },
  { id: 'k4', title: 'Read Chapter 4 of Biology',       subject: 'Biology',     priority: 'low',    estimatedTime: 20, completed: false },
]

const STUDY_CARDS = [
  { id: 'lessons',     icon: BookOpen,       title: 'Lessons',      desc: 'Learn new concepts',   color: 'var(--color-primary)' },
  { id: 'practice',    icon: PenTool,        title: 'Practice',     desc: 'Test your knowledge',  color: 'var(--color-success)' },
  { id: 'topicMode',   icon: Target,         title: 'Topic Mode',   desc: 'Master one topic',     color: 'var(--color-secondary)' },
  { id: 'mockExams',   icon: Award,          title: 'Mock Exams',   desc: 'Full exam simulation', color: 'var(--color-primary)' },
  { id: 'results',     icon: BarChart3,      title: 'Results',      desc: 'View your progress',   color: 'var(--color-info)' },
  { id: 'analytics',   icon: BarChart3,      title: 'Analytics',    desc: 'View your stats',      color: 'var(--color-primary)' },
  { id: 'mistakeBook', icon: BookMarked,     title: 'Mistake Book', desc: 'Review errors',        color: 'var(--color-danger)' },
  { id: 'studyPlan',   icon: FileText,       title: 'Study Plan',   desc: 'AI-generated plan',    color: 'var(--color-primary)' },
]

const DUEL_TILES = [
  { id: 'duoBattle',    icon: Swords,   title: 'Duo Battle',  color: 'var(--color-warning)' },
  { id: 'leaderboards', icon: Trophy,   title: 'Leaderboard', color: 'var(--color-warning)' },
  { id: 'gamification', icon: Gamepad2, title: 'Badges',      color: 'var(--color-secondary)' },
]

const DUEL_STATS = {
  total_duels: 23,
  wins: 14,
  losses: 7,
  draws: 2,
  win_rate: 61,
  streak: 3,
  longest_streak: 6,
}

const DUEL_INVITES = [
  { id: 'inv1', fromUser: { username: 'tunde' },   subject: 'Mathematics', topic: 'Trigonometry', questionCount: 10 },
  { id: 'inv2', fromUser: { username: 'chinaza' }, subject: 'Physics',     topic: 'Mechanics',    questionCount: 5 },
]

const DUEL_RECENT = [
  { id: 'm1', opponent: 'tunde',   subject: 'Mathematics', challenger_score: 8, opponent_score: 6, result: 'Win'  },
  { id: 'm2', opponent: 'chinaza', subject: 'Physics',     challenger_score: 5, opponent_score: 7, result: 'Loss' },
  { id: 'm3', opponent: 'bola',    subject: 'Chemistry',   challenger_score: 6, opponent_score: 6, result: 'Draw' },
  { id: 'm4', opponent: 'fatima',  subject: 'English',     challenger_score: 9, opponent_score: 4, result: 'Win'  },
  { id: 'm5', opponent: 'emeka',   subject: 'Biology',     challenger_score: 7, opponent_score: 3, result: 'Win'  },
]

const FRIENDS = [
  { id: 'f1', username: 'tunde',   firstName: 'Tunde',   lastName: 'Adeyemi' },
  { id: 'f2', username: 'chinaza', firstName: 'Chinaza', lastName: 'Okafor'  },
  { id: 'f3', username: 'bola',    firstName: 'Bola',    lastName: 'Adekunle'},
  { id: 'f4', username: 'fatima',  firstName: 'Fatima',  lastName: 'Yusuf'   },
]

const SUBJECT_LABELS = [
  { key: 'mathematics', label: 'Mathematics' },
  { key: 'english',     label: 'English Language' },
  { key: 'physics',     label: 'Physics' },
  { key: 'chemistry',   label: 'Chemistry' },
  { key: 'biology',     label: 'Biology' },
]

const getBgForColor = (color) => {
  const map = {
    'var(--color-primary)':   'var(--color-primary-light)',
    'var(--color-success)':   'var(--color-success-light)',
    'var(--color-secondary)': 'var(--color-secondary-light)',
    'var(--color-info)':      'var(--color-info-light)',
    'var(--color-danger)':    'var(--color-danger-light)',
    'var(--color-warning)':   'var(--color-warning-light)',
  }
  return map[color] || 'var(--color-primary-light)'
}

// ============================================================
// MAIN HOME
// ============================================================
export default function ShowcaseHome({ onNavigate, initialTab = 'home' }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [refreshing, setRefreshing] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => { setActiveTab(initialTab) }, [initialTab])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  const handleRefresh = () => {
    setRefreshing(true)
    setRefreshKey((k) => k + 1)
    setTimeout(() => setRefreshing(false), 800)
  }

  const firstName = STUDENT.firstName

  return (
    <div className="has-bottom-nav" style={{ background: 'var(--color-background)', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)', maxWidth: '48rem' }}>
        {activeTab === 'home' && (
          <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            <div className="flex-between">
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-primary-light)', flexShrink: 0, color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>
                  {firstName.charAt(0).toUpperCase()}
                </div>
                <div style={{ lineHeight: 1.15 }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>Welcome</div>
                  <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>{firstName}</div>
                </div>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-2)' }} aria-label="Refresh">
                  <RefreshCw size={18} />
                </button>
                <ViewOnly tooltip="Sign up to view your profile">
                  <button className="flex-center" onClick={() => onNavigate?.('profile')} style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', border: 'none', cursor: 'pointer' }} aria-label="Profile">
                    <User size={20} />
                  </button>
                </ViewOnly>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'home' && (
          <h1 className="text-center" style={{ marginBottom: 'var(--space-5)', fontSize: 'var(--font-size-2xl)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text)' }}>
            {activeTab === 'study' ? 'STUDY' : 'DUEL'}
          </h1>
        )}

        <main>
          {activeTab === 'home'  && <HomeTab  key={refreshKey} onNavigate={onNavigate} refreshing={refreshing} />}
          {activeTab === 'study' && <StudyTab onNavigate={onNavigate} />}
          {activeTab === 'duel'  && <DuelTab  key={refreshKey} onNavigate={onNavigate} refreshing={refreshing} />}
        </main>
      </div>

      <ShowcaseBottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onNavigate={onNavigate}
      />
      <ShowcaseAIUsageOrb onNavigate={onNavigate} />
    </div>
  )
}

// ============================================================
// HOME TAB
// ============================================================
function HomeTab({ onNavigate, refreshing }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-4)' }}>
      <QuickStats refreshing={refreshing} />
      <HyeTutorChatCard onNavigate={onNavigate} />
      <WordOfTheDayCard onNavigate={onNavigate} />
      <StudyPlanCard onNavigate={onNavigate} refreshing={refreshing} />
      <RevisionPlannerCard onNavigate={onNavigate} refreshing={refreshing} />
    </div>
  )
}

// ============================================================
// 1. QUICK STATS
// ============================================================
function QuickStats() {
  const gam = QUICK_STATS.gam
  const daily = QUICK_STATS.daily

  const statsConfig = [
    { key: 'xp',       icon: Zap,     label: 'Total XP', value: (gam.xp || 0).toLocaleString(), color: 'var(--color-primary)', bg: 'var(--color-primary-light)' },
    { key: 'streak',   icon: Flame,   label: 'Streak',   value: gam.streak || 0,                 color: 'var(--color-warning)', bg: 'var(--color-warning-light)' },
    { key: 'sessions', icon: PenTool, label: 'Sessions', value: daily.sessions || 0,             color: 'var(--color-success)', bg: 'var(--color-success-light)' },
    {
      key: 'accuracy', icon: Target, label: 'Accuracy', value: `${daily.accuracy || 0}%`,
      color: (daily.accuracy || 0) >= 70 ? 'var(--color-success)' : (daily.accuracy || 0) >= 40 ? 'var(--color-warning)' : 'var(--color-danger)',
      bg:    (daily.accuracy || 0) >= 70 ? 'var(--color-success-light)' : (daily.accuracy || 0) >= 40 ? 'var(--color-warning-light)' : 'var(--color-danger-light)',
    },
  ]

  return (
    <section className="card" style={{ padding: 'var(--space-4)' }}>
      <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>QUICK STATS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
        {statsConfig.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.key} className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-2)', padding: 'var(--space-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', background: 'var(--color-surface)' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{s.label}</div>
              </div>
              <div className="flex-center" style={{ width: 34, height: 34, borderRadius: 'var(--radius-lg)', background: s.bg, color: s.color, flexShrink: 0 }}>
                <Icon size={16} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================
// 2. HYETUTOR CHAT CARD
// ============================================================
function HyeTutorChatCard({ onNavigate }) {
  const [input, setInput] = useState('')
  const suggestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock today?',
    'What should I focus on this week?',
  ]

  const launch = useCallback(() => {
    if (!input.trim()) return
    onNavigate?.('hyetutor')
  }, [input, onNavigate])

  return (
    <section className="card" style={{ padding: 'var(--space-5)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>HyeTutor</span>
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>Chat</span>
        <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}><Sparkles size={12} /> AI Coach</span>
      </div>

      <div className="flex" style={{ gap: 'var(--space-2)' }}>
        <input
          type="text" className="input" placeholder="Ask HyeTutor anything..."
          value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); launch() } }}
          style={{ flex: 1 }}
        />
        <ViewOnly tooltip="Sign up to chat with HyeTutor">
          <button onClick={launch} disabled={!input.trim()} className="btn btn-primary" style={{ padding: 'var(--space-2) var(--space-3)' }} aria-label="Send">
            <Send size={18} />
          </button>
        </ViewOnly>
      </div>

      <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
        {suggestions.map((q) => (
          <ViewOnly key={q} tooltip="Sign up to ask HyeTutor">
            <button onClick={() => onNavigate?.('hyetutor')} style={{ padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
              💡 {q}
            </button>
          </ViewOnly>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// 3. WORD OF THE DAY
// ============================================================
function WordOfTheDayCard({ onNavigate }) {
  const word = WORD_OF_THE_DAY

  return (
    <ViewOnly tooltip="Sign up to open the dictionary">
      <section className="card card-hover" onClick={() => onNavigate?.('dictionary')} style={{ padding: 'var(--space-5)', cursor: 'pointer', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)', border: '1px solid var(--color-primary)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>WORD OF THE DAY</span>
        </div>
        <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text)' }}>{word.word}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{word.definition}</div>
            {word.example && (
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-2)' }}>"{word.example}"</div>
            )}
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
        </div>
      </section>
    </ViewOnly>
  )
}

// ============================================================
// 4. STUDY PLAN CARD
// ============================================================
function StudyPlanCard({ onNavigate }) {
  const [now, setNow] = useState(() => new Date())
  const plan = STUDY_PLAN

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const examDate = plan?.exam_date
  const countdown = (() => {
    if (!examDate) return null
    const target = new Date(`${examDate}T00:00:00`)
    const diff = target - now
    if (diff <= 0) return { over: true }
    return { over: false, d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) }
  })()

  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' })
  const todayEntry = plan?.plan?.weekly_schedule?.find((d) => d.day?.toLowerCase() === todayName.toLowerCase())
  const examType = plan?.exam_info?.exam_type?.toUpperCase()

  return (
    <ViewOnly tooltip="Sign up to open your study plan">
      <section className="card card-hover" onClick={() => onNavigate?.('studyPlan')} style={{ padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-primary)' }}>
        <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Calendar size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>STUDY PLAN</span>
          </div>
          {examType && <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>{examType}</span>}
        </div>

        {countdown && !countdown.over && (
          <div style={{ background: 'var(--color-background)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Timer size={18} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Exam in</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)' }}>
                {countdown.d}d {String(countdown.h).padStart(2, '0')}h {String(countdown.m).padStart(2, '0')}m {String(countdown.s).padStart(2, '0')}s
              </div>
            </div>
          </div>
        )}

        {countdown && countdown.over && (
          <div style={{ background: 'var(--color-background)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-danger)' }}>
              <StopCircle size={20} /><span style={{ fontWeight: 700 }}>Exam Day! 🎯</span>
            </div>
          </div>
        )}

        {todayEntry ? (
          <div>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>TODAY — {todayName}</div>
            {todayEntry.focus && <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{todayEntry.focus}</div>}
            <div className="stack" style={{ gap: 'var(--space-1)' }}>
              {(todayEntry.topics || []).slice(0, 4).map((t, i) => (
                <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{t.subject} — {t.topic}</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>{t.hours}h</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>No tasks scheduled for today</div>
        )}
      </section>
    </ViewOnly>
  )
}

// ============================================================
// 5. REVISION PLANNER CARD (carousel)
// ============================================================
function RevisionPlannerCard({ onNavigate }) {
  const [tasks] = useState(REVISION_TASKS)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    if (paused || tasks.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % tasks.length), 4500)
    return () => clearInterval(id)
  }, [paused, tasks.length])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setPaused(true) }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      if (dx < 0) setIndex((i) => (i + 1) % tasks.length)
      else setIndex((i) => (i - 1 + tasks.length) % tasks.length)
    }
    touchStartX.current = null
    setTimeout(() => setPaused(false), 3000)
  }

  if (tasks.length === 0) return null

  const task = tasks[index]
  const priorityColor = task.priority === 'high' ? 'var(--color-danger)' : task.priority === 'medium' ? 'var(--color-warning)' : 'var(--color-success)'
  const priorityDot = task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'

  return (
    <ViewOnly tooltip="Sign up to open your planner">
      <section className="card card-hover" onClick={() => onNavigate?.('revisionPlanner')} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-primary)' }}>
        <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <FileText size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>REVISION PLANNER</span>
          </div>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{index + 1} / {tasks.length}</span>
        </div>

        <div key={task.id}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
            {task.completed ? <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> : <PlayCircle size={16} style={{ color: 'var(--color-warning)' }} />}
            <span style={{ fontWeight: task.completed ? 400 : 600, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--color-text-muted)' : 'var(--color-text)', fontSize: 'var(--font-size-base)' }}>
              {task.title}
            </span>
          </div>
          <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
            <span>{task.subject}</span>
            {task.estimatedTime && <span className="flex" style={{ gap: 4, alignItems: 'center' }}><Clock size={12} /> {task.estimatedTime}m</span>}
            {task.priority && <span style={{ color: priorityColor }}>{priorityDot} {task.priority}</span>}
          </div>
        </div>

        {tasks.length > 1 && (
          <div className="flex-center" style={{ gap: 4, marginTop: 'var(--space-3)' }}>
            {tasks.map((_, i) => (
              <span key={i} style={{ width: i === index ? 16 : 6, height: 6, borderRadius: 3, background: i === index ? 'var(--color-primary)' : 'var(--color-border)', transition: 'all var(--transition)' }} />
            ))}
          </div>
        )}
      </section>
    </ViewOnly>
  )
}

// ============================================================
// STUDY TAB
// ============================================================
function StudyTab({ onNavigate }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
        <ViewOnly tooltip="Sign up to open Formulas">
          <ToolTile icon={FunctionSquare} title="Formulas" onClick={() => onNavigate?.('formulas')} />
        </ViewOnly>
        <ViewOnly tooltip="Sign up to open Dictionary">
          <ToolTile icon={Languages} title="Dictionary" onClick={() => onNavigate?.('dictionary')} />
        </ViewOnly>
      </div>
      {STUDY_CARDS.map((c) => (
        <ViewOnly key={c.id} tooltip={`Sign up to open ${c.title}`}>
          <HorizontalCard icon={c.icon} title={c.title} desc={c.desc} color={c.color} onClick={() => onNavigate?.(c.id)} />
        </ViewOnly>
      ))}
    </div>
  )
}

// ============================================================
// DUEL TAB
// ============================================================
function DuelTab({ onNavigate }) {
  const [showInvite, setShowInvite] = useState(false)

  return (
    <div className="stack" style={{ gap: 'var(--space-3)' }}>
      <DuelStatsHero />
      <DuelInvitesStrip />
      <DuelQuickActions
        onChallenge={() => setShowInvite(true)}
        onPublic={() => onNavigate?.('duoBattle')}
      />
      <DuelTiles onNavigate={onNavigate} />
      <DuelRecentMatches />

      {showInvite && <DuelInviteModal onClose={() => setShowInvite(false)} />}
    </div>
  )
}

function DuelStatsHero() {
  const stats = DUEL_STATS
  const { total_duels: total, wins, losses, draws, win_rate: winRate, streak, longest_streak: longest } = stats

  const rateColor = winRate >= 60 ? 'var(--color-success)' : winRate >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'

  return (
    <section className="card" style={{ padding: 'var(--space-5)', background: 'linear-gradient(135deg, var(--color-warning-light) 0%, var(--color-surface) 100%)', border: '1px solid var(--color-warning)' }}>
      <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Swords size={18} style={{ color: 'var(--color-warning)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-warning)' }}>DUEL ARENA</span>
        </div>
        {streak > 0 && (
          <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>
            🔥 {streak} win{streak === 1 ? '' : 's'} in a row
          </span>
        )}
      </div>

      <div className="flex-between" style={{ alignItems: 'flex-end', marginBottom: 'var(--space-3)', gap: 'var(--space-3)' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 2 }}>WIN RATE</div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: rateColor, lineHeight: 1 }}>{winRate}%</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 4 }}>
            {wins}W · {losses}L · {draws}D · {total} total
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Best streak</div>
          <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>{longest}</div>
        </div>
      </div>

      {total > 0 && (
        <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', background: 'var(--color-border)' }}>
          <div style={{ flex: wins || 0.001, background: 'var(--color-success)' }} />
          <div style={{ flex: draws || 0.001, background: 'var(--color-warning)' }} />
          <div style={{ flex: losses || 0.001, background: 'var(--color-danger)' }} />
        </div>
      )}
    </section>
  )
}

function DuelInvitesStrip() {
  const invites = DUEL_INVITES
  if (invites.length === 0) return null

  return (
    <section className="card" style={{ padding: 'var(--space-4)', border: '1px solid var(--color-primary)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Swords size={16} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-primary)' }}>
          {invites.length} pending invite{invites.length === 1 ? '' : 's'}
        </span>
      </div>

      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {invites.slice(0, 3).map((inv) => (
          <div key={inv.id} className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>{inv.fromUser.username}</div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {inv.subject}{inv.topic ? ` · ${inv.topic}` : ''} · {inv.questionCount}q
              </div>
            </div>
            <div className="flex" style={{ gap: 6, flexShrink: 0 }}>
              <ViewOnly tooltip="Sign up to accept">
                <button className="btn btn-success" style={{ padding: '6px 10px', fontSize: 'var(--font-size-xs)' }}>
                  <Check size={14} /> Accept
                </button>
              </ViewOnly>
              <ViewOnly tooltip="Sign up to decline">
                <button className="btn btn-ghost" style={{ padding: '6px 10px', fontSize: 'var(--font-size-xs)' }}>
                  <X size={14} />
                </button>
              </ViewOnly>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DuelQuickActions({ onChallenge, onPublic }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
      <ViewOnly tooltip="Sign up to challenge a friend">
        <button onClick={onChallenge} className="card card-hover" style={{ padding: 'var(--space-4)', cursor: 'pointer', textAlign: 'left', border: '1px solid var(--color-primary)', background: 'var(--color-primary-light)', width: '100%' }}>
          <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary)', color: 'white', marginBottom: 'var(--space-2)' }}>
            <Swords size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Challenge a Friend</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>Send an invite</div>
        </button>
      </ViewOnly>

      <ViewOnly tooltip="Sign up to play a public match">
        <button onClick={onPublic} className="card card-hover" style={{ padding: 'var(--space-4)', cursor: 'pointer', textAlign: 'left', border: '1px solid var(--color-border)', background: 'var(--color-surface)', width: '100%' }}>
          <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-warning-light)', color: 'var(--color-warning)', marginBottom: 'var(--space-2)' }}>
            <Globe size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Public Match</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>Play with anyone</div>
        </button>
      </ViewOnly>
    </div>
  )
}

function DuelTiles({ onNavigate }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)' }}>
      {DUEL_TILES.map((t) => {
        const Icon = t.icon
        const bg = getBgForColor(t.color)
        return (
          <ViewOnly key={t.id} tooltip={`Sign up to open ${t.title}`}>
            <button onClick={() => onNavigate?.(t.id)} className="card card-hover" style={{ padding: 'var(--space-3)', cursor: 'pointer', textAlign: 'center', background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: '100%' }}>
              <div className="flex-center" style={{ width: 36, height: 36, borderRadius: 'var(--radius-lg)', background: bg, color: t.color }}>
                <Icon size={18} />
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text)' }}>{t.title}</div>
            </button>
          </ViewOnly>
        )
      })}
    </div>
  )
}

function DuelRecentMatches() {
  const matches = DUEL_RECENT
  if (matches.length === 0) return null

  const getResultStyle = (r) =>
    r === 'Win'  ? { color: 'var(--color-success)', bg: 'var(--color-success-light)' } :
    r === 'Loss' ? { color: 'var(--color-danger)',  bg: 'var(--color-danger-light)'  } :
                   { color: 'var(--color-warning)', bg: 'var(--color-warning-light)' }

  return (
    <section className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Clock size={16} style={{ color: 'var(--color-text-muted)' }} />
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>RECENT MATCHES</span>
      </div>

      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {matches.map((m) => {
          const style = getResultStyle(m.result)
          return (
            <div key={m.id} className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-2)' }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>vs {m.opponent}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {m.subject} · {m.challenger_score}–{m.opponent_score}
                </div>
              </div>
              <span className="badge" style={{ fontSize: 'var(--font-size-xs)', background: style.bg, color: style.color, flexShrink: 0 }}>
                {m.result}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================
// DUEL INVITE MODAL
// ============================================================
function DuelInviteModal({ onClose }) {
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(10)
  const [timeLimit, setTimeLimit] = useState(300)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const canSend = !!selectedFriend && !!subject && !sending

  const handleSend = () => {
    if (!canSend) return
    setSending(true)
    setTimeout(() => {
      setSent(true)
      setSending(false)
      setTimeout(onClose, 1400)
    }, 500)
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 200 }}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440, width: '100%', padding: 'var(--space-5)', maxHeight: '90vh', overflowY: 'auto' }}>
        <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Swords size={18} style={{ color: 'var(--color-warning)' }} />
            <span style={{ fontWeight: 700, fontSize: 'var(--font-size-base)' }}>Challenge a Friend</span>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 6 }} aria-label="Close"><X size={18} /></button>
        </div>

        {sent ? (
          <div style={{ padding: 'var(--space-4) 0', textAlign: 'center' }}>
            <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-success-light)', margin: '0 auto var(--space-3)' }}>
              <Check size={32} style={{ color: 'var(--color-success)' }} />
            </div>
            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Invite sent!</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 4 }}>
              Waiting for {selectedFriend?.username} to accept…
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>PICK OPPONENT</div>
              <div className="stack" style={{ gap: 6, maxHeight: 180, overflowY: 'auto', padding: 2 }}>
                {FRIENDS.map((f) => {
                  const active = selectedFriend?.id === f.id
                  return (
                    <button key={f.id} onClick={() => setSelectedFriend(f)} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-lg)', border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)', background: active ? 'var(--color-primary-light)' : 'var(--color-surface)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                      <div className="flex-center" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--font-size-sm)', flexShrink: 0 }}>
                        {f.username[0].toUpperCase()}
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>{f.firstName} {f.lastName}</div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>@{f.username}</div>
                      </div>
                      {active && <Check size={16} style={{ color: 'var(--color-primary)' }} />}
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>SUBJECT</div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {SUBJECT_LABELS.map((s) => {
                  const active = subject === s.label
                  return (
                    <button key={s.key} onClick={() => setSubject(s.label)} style={{ padding: '6px 12px', borderRadius: 'var(--radius-full)', border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)', background: active ? 'var(--color-primary-light)' : 'var(--color-surface)', color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', fontWeight: active ? 600 : 400, cursor: 'pointer' }}>
                      {s.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>TOPIC (OPTIONAL)</div>
              <input type="text" className="input" placeholder="e.g. Quadratic Equations" value={topic} onChange={(e) => setTopic(e.target.value)} style={{ width: '100%' }} />
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>QUESTIONS</div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {[5, 10, 15, 20].map((n) => {
                  const active = questionCount === n
                  return (
                    <button key={n} onClick={() => setQuestionCount(n)} style={{ minWidth: 48, padding: '6px 12px', borderRadius: 'var(--radius-full)', border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)', background: active ? 'var(--color-primary-light)' : 'var(--color-surface)', color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', fontWeight: active ? 600 : 400, cursor: 'pointer' }}>
                      {n}
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>TIME LIMIT</div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {[
                  { s: 60,  label: '1 min' },
                  { s: 180, label: '3 min' },
                  { s: 300, label: '5 min' },
                  { s: 600, label: '10 min' },
                ].map((opt) => {
                  const active = timeLimit === opt.s
                  return (
                    <button key={opt.s} onClick={() => setTimeLimit(opt.s)} style={{ padding: '6px 12px', borderRadius: 'var(--radius-full)', border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)', background: active ? 'var(--color-primary-light)' : 'var(--color-surface)', color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', fontWeight: active ? 600 : 400, cursor: 'pointer' }}>
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <ViewOnly tooltip="Sign up to send duel invites">
              <button onClick={handleSend} disabled={!canSend} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                {sending ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send Invite</>}
              </button>
            </ViewOnly>
          </>
        )}
      </div>
    </div>
  )
}

// ============================================================
// SHARED
// ============================================================
function ToolTile({ icon: Icon, title, onClick }) {
  return (
    <button onClick={onClick} className="card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center', cursor: 'pointer', background: 'var(--color-surface)', width: '100%' }}>
      <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary-light)', color: 'var(--color-primary)', margin: '0 auto var(--space-2)' }}>
        <Icon size={20} />
      </div>
      <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{title}</div>
    </button>
  )
}

function HorizontalCard({ icon: Icon, title, desc, color, onClick }) {
  const bg = getBgForColor(color)
  return (
    <button onClick={onClick} className="card card-hover" style={{ padding: 'var(--space-4)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', background: 'var(--color-surface)', width: '100%' }}>
      <div className="flex-center" style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: bg, color, flexShrink: 0 }}>
        <Icon size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>{title}</div>
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{desc}</div>
      </div>
      <ChevronRight size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
    </button>
  )
}
