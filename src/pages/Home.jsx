// ============================================================
// HYELEARNER: FOUNDATION — HOME
// 3 tabs: Home / Study / Duel
// Duel tab now has stats hero, invites, quick actions, recent matches
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { userStats, social, duels as duelsService } from '../services'
import { SUBJECTS } from '../constants'
import { WORD_OF_THE_DAY_DATA } from '../data/words'
import {
  RefreshCw, User, Zap, Flame, PenTool, Target, Send, MessageSquare,
  Sparkles, Calendar, Timer, PlayCircle, StopCircle, CheckCircle2,
  Clock, ChevronRight, BookOpen, Languages, FunctionSquare, Award,
  BarChart3, BookMarked, FileText, Swords, Trophy, Gamepad2, Brain,
  X, Loader2, Check, Globe, UserPlus,
} from 'lucide-react'

// ============================================================
// WORD OF THE DAY
// ============================================================
const getWordOfTheDay = () => {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
  const year = today.getFullYear()
  const index = (dayOfYear + year * 31) % (WORD_OF_THE_DAY_DATA?.length || 1)
  return WORD_OF_THE_DAY_DATA?.[index] || null
}

// ============================================================
// STUDY CARDS
// ============================================================
const STUDY_CARDS = [
  { id: 'lessons', icon: BookOpen, title: 'Lessons', desc: 'Learn new concepts', color: 'var(--color-primary)' },
  { id: 'practice', icon: PenTool, title: 'Practice', desc: 'Test your knowledge', color: 'var(--color-success)' },
  { id: 'topic-mode', icon: Target, title: 'Topic Mode', desc: 'Master one topic', color: 'var(--color-secondary)' },
  { id: 'mock-exams', icon: Award, title: 'Mock Exams', desc: 'Full exam simulation', color: 'var(--color-primary)' },
  { id: 'results', icon: BarChart3, title: 'Results', desc: 'View your progress', color: 'var(--color-info)' },
  { id: 'analytics', icon: BarChart3, title: 'Analytics', desc: 'View your stats', color: 'var(--color-primary)' },
  { id: 'mistake-book', icon: BookMarked, title: 'Mistake Book', desc: 'Review errors', color: 'var(--color-danger)' },
  { id: 'study-plan', icon: FileText, title: 'Study Plan', desc: 'AI-generated plan', color: 'var(--color-primary)' },
]

// ============================================================
// DUEL COMPACT TILES (below the hero)
// ============================================================
const DUEL_TILES = [
  { id: 'duo-battle', icon: Swords, title: 'Duo Battle', color: 'var(--color-warning)' },
  { id: 'leaderboards', icon: Trophy, title: 'Leaderboard', color: 'var(--color-warning)' },
  { id: 'gamification', icon: Gamepad2, title: 'Badges', color: 'var(--color-secondary)' },
]

const getBgForColor = (color) => {
  const map = {
    'var(--color-primary)': 'var(--color-primary-light)',
    'var(--color-success)': 'var(--color-success-light)',
    'var(--color-secondary)': 'var(--color-secondary-light)',
    'var(--color-info)': 'var(--color-info-light)',
    'var(--color-danger)': 'var(--color-danger-light)',
    'var(--color-warning)': 'var(--color-warning-light)',
  }
  return map[color] || 'var(--color-primary-light)'
}

// ============================================================
// SUBJECT LABELS HELPER
// ============================================================
const getSubjectLabels = () => {
  try {
    if (!SUBJECTS) return []
    return Object.keys(SUBJECTS).map((key) => {
      const val = SUBJECTS[key]
      return {
        key,
        label: typeof val === 'string' ? val : (val?.label || key),
      }
    })
  } catch {
    return []
  }
}

// ============================================================
// MAIN HOME
// ============================================================
export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState(() => location.state?.tab || 'home')
  const [refreshing, setRefreshing] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab)
      navigate(location.pathname, { replace: true, state: {} })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state?.tab])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  const handleRefresh = () => {
    setRefreshing(true)
    setRefreshKey((k) => k + 1)
    setTimeout(() => setRefreshing(false), 800)
  }

  const firstName = user?.firstName || user?.username || 'Learner'

  return (
    <div className="has-bottom-nav" style={{ background: 'var(--color-background)', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)', maxWidth: '48rem' }}>
        {/* Header */}
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
                  <RefreshCw size={18} style={{ animation: refreshing ? 'spin 0.8s linear infinite' : 'none' }} />
                </button>
                <button onClick={() => navigate('/profile')} className="flex-center" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', border: 'none', cursor: 'pointer' }} aria-label="Profile">
                  <User size={20} />
                </button>
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
          {activeTab === 'home' && <HomeTab key={refreshKey} navigate={navigate} refreshing={refreshing} />}
          {activeTab === 'study' && <StudyTab navigate={navigate} />}
          {activeTab === 'duel' && <DuelTab key={refreshKey} navigate={navigate} refreshing={refreshing} />}
        </main>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

// ============================================================
// HOME TAB
// ============================================================
function HomeTab({ navigate, refreshing }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-4)' }}>
      <QuickStats refreshing={refreshing} />
      <HyeTutorChatCard navigate={navigate} />
      <WordOfTheDayCard navigate={navigate} />
      <StudyPlanCard navigate={navigate} refreshing={refreshing} />
      <RevisionPlannerCard navigate={navigate} refreshing={refreshing} />
    </div>
  )
}

// ============================================================
// 1. QUICK STATS — 2×2 grid
// ============================================================
function QuickStats({ refreshing }) {
  const [gam, setGam] = useState({ xp: 0, level: 1, streak: 0 })
  const [daily, setDaily] = useState({ accuracy: 0, sessions: 0, studyTime: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = () => {
      try {
        const rawGam = localStorage.getItem('hyelearner_gamification')
        setGam(rawGam ? JSON.parse(rawGam) : { xp: 0, level: 1, streak: 0 })
      } catch {
        setGam({ xp: 0, level: 1, streak: 0 })
      }

      try {
        const rawDaily = localStorage.getItem('hyelearner_daily_stats')
        const parsed = rawDaily ? JSON.parse(rawDaily) : null
        const today = new Date().toISOString().split('T')[0]
        if (parsed && parsed.date === today) {
          setDaily({
            accuracy: parsed.accuracy || 0,
            sessions: parsed.sessions || 0,
            studyTime: parsed.studyTime || 0,
          })
        } else {
          setDaily({ accuracy: 0, sessions: 0, studyTime: 0 })
        }
      } catch {
        setDaily({ accuracy: 0, sessions: 0, studyTime: 0 })
      }

      setLoading(false)
    }

    load()
    window.addEventListener('hydration:done', load)
    window.addEventListener('storage', load)
    return () => {
      window.removeEventListener('hydration:done', load)
      window.removeEventListener('storage', load)
    }
  }, [refreshing])

  const statsConfig = [
    { key: 'xp', icon: Zap, label: 'Total XP', value: (gam.xp || 0).toLocaleString(), color: 'var(--color-primary)', bg: 'var(--color-primary-light)' },
    { key: 'streak', icon: Flame, label: 'Streak', value: gam.streak || 0, color: 'var(--color-warning)', bg: 'var(--color-warning-light)' },
    { key: 'sessions', icon: PenTool, label: 'Sessions', value: daily.sessions || 0, color: 'var(--color-success)', bg: 'var(--color-success-light)' },
    {
      key: 'accuracy', icon: Target, label: 'Accuracy', value: `${daily.accuracy || 0}%`,
      color: (daily.accuracy || 0) >= 70 ? 'var(--color-success)' : (daily.accuracy || 0) >= 40 ? 'var(--color-warning)' : 'var(--color-danger)',
      bg: (daily.accuracy || 0) >= 70 ? 'var(--color-success-light)' : (daily.accuracy || 0) >= 40 ? 'var(--color-warning-light)' : 'var(--color-danger-light)',
    },
  ]

  return (
    <section className="card" style={{ padding: 'var(--space-4)' }}>
      <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>QUICK STATS</div>
      {loading ? (
        <div className="flex-center" style={{ padding: 'var(--space-4)' }}><div className="spinner spinner-sm"></div></div>
      ) : (
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
      )}
    </section>
  )
}

// ============================================================
// 2. HYETUTOR CHAT CARD
// ============================================================
function HyeTutorChatCard({ navigate }) {
  const [input, setInput] = useState('')
  const suggestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock today?',
    'What should I focus on this week?',
  ]

  const launch = useCallback((message) => {
    if (!message.trim()) return
    navigate('/hyetutor/chat', { state: { initialMessage: message.trim() } })
  }, [navigate])

  return (
    <section className="card" style={{ padding: 'var(--space-5)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>HyeTutor</span>
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>Chat</span>
        <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}><Sparkles size={12} /> AI Coach</span>
      </div>

      <div className="flex" style={{ gap: 'var(--space-2)' }}>
        <input type="text" className="input" placeholder="Ask HyeTutor anything..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); launch(input) } }} style={{ flex: 1 }} />
        <button onClick={() => launch(input)} disabled={!input.trim()} className="btn btn-primary" style={{ padding: 'var(--space-2) var(--space-3)' }} aria-label="Send">
          <Send size={18} />
        </button>
      </div>

      <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
        {suggestions.map((q) => (
          <button key={q} onClick={() => launch(q)} style={{ padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', cursor: 'pointer', transition: 'all var(--transition)' }}>
            💡 {q}
          </button>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// 3. WORD OF THE DAY
// ============================================================
function WordOfTheDayCard({ navigate }) {
  const word = getWordOfTheDay()
  if (!word) return null

  return (
    <section className="card card-hover" onClick={() => navigate('/dictionary')} style={{ padding: 'var(--space-5)', cursor: 'pointer', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)', border: '1px solid var(--color-primary)' }}>
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
  )
}

// ============================================================
// 4. STUDY PLAN CARD
// ============================================================
function StudyPlanCard({ navigate, refreshing }) {
  const [plan, setPlan] = useState(null)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    try {
      const raw = localStorage.getItem('hyelearner_study_plan_v2')
      setPlan(raw ? JSON.parse(raw) : null)
    } catch { setPlan(null) }
  }, [refreshing])

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const examDate = plan?.exam_date || plan?.exam_info?.exam_date || plan?.plan?.exam_date || null

  const countdown = (() => {
    if (!examDate) return null
    const target = new Date(`${examDate}T00:00:00`)
    const diff = target - now
    if (diff <= 0) return { over: true }
    return { over: false, d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) }
  })()

  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' })
  const todayEntry = plan?.plan?.weekly_schedule?.find((d) => d.day?.toLowerCase() === todayName.toLowerCase())
  const examType = plan?.exam_info?.exam_type?.toUpperCase() || plan?.exam_type?.toUpperCase() || null

  if (!plan) {
    return (
      <section className="card card-hover" onClick={() => navigate('/study-plan')} style={{ padding: 'var(--space-5)', cursor: 'pointer' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <Calendar size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>STUDY PLAN</span>
        </div>
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)' }}>Set up your Study Plan</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>Get an AI-personalized plan for your exam</div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)' }} />
        </div>
      </section>
    )
  }

  return (
    <section className="card card-hover" onClick={() => navigate('/study-plan')} style={{ padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-primary)' }}>
      <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Calendar size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>STUDY PLAN</span>
        </div>
        {examType && <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>{examType}</span>}
      </div>

      {countdown && (
        <div style={{ background: 'var(--color-background)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
          {countdown.over ? (
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-danger)' }}>
              <StopCircle size={20} />
              <span style={{ fontWeight: 700 }}>Exam Day! 🎯</span>
            </div>
          ) : (
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Timer size={18} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Exam in</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)' }}>
                {countdown.d}d {String(countdown.h).padStart(2, '0')}h {String(countdown.m).padStart(2, '0')}m {String(countdown.s).padStart(2, '0')}s
              </div>
            </div>
          )}
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
            {(todayEntry.topics || []).length > 4 && (
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>+{todayEntry.topics.length - 4} more</div>
            )}
          </div>
        </div>
      ) : (
        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>No tasks scheduled for today</div>
      )}
    </section>
  )
}

// ============================================================
// 5. REVISION PLANNER CARD
// ============================================================
function RevisionPlannerCard({ navigate, refreshing }) {
  const [tasks, setTasks] = useState([])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('hyelearner_revision_planner_v2')
      if (raw) {
        const data = JSON.parse(raw)
        setTasks(Array.isArray(data.tasks) ? data.tasks : [])
      } else setTasks([])
      setIndex(0)
    } catch { setTasks([]) }
  }, [refreshing])

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

  if (tasks.length === 0) {
    return (
      <section className="card card-hover" onClick={() => navigate('/revision-planner')} style={{ padding: 'var(--space-5)', cursor: 'pointer' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <FileText size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>REVISION PLANNER</span>
        </div>
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)' }}>Plan your revision</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>Add tasks and track your daily study</div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)' }} />
        </div>
      </section>
    )
  }

  const task = tasks[index]
  const priorityColor = task.priority === 'high' ? 'var(--color-danger)' : task.priority === 'medium' ? 'var(--color-warning)' : 'var(--color-success)'
  const priorityDot = task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'

  return (
    <section className="card card-hover" onClick={() => navigate('/revision-planner')} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-primary)' }}>
      <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <FileText size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>REVISION PLANNER</span>
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{index + 1} / {tasks.length}</span>
      </div>

      <div key={task.id || index} className="animate-fade">
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
          {task.completed ? <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> : <PlayCircle size={16} style={{ color: 'var(--color-warning)' }} />}
          <span style={{ fontWeight: task.completed ? 400 : 600, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--color-text-muted)' : 'var(--color-text)', fontSize: 'var(--font-size-base)' }}>
            {task.title}
          </span>
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
          <span>{task.subject || 'General'}</span>
          {task.estimatedTime && <span className="flex" style={{ gap: 4, alignItems: 'center' }}><Clock size={12} /> {task.estimatedTime}m</span>}
          {task.priority && <span style={{ color: priorityColor }}>{priorityDot} {task.priority}</span>}
        </div>
      </div>

      {tasks.length > 1 && (
        <div className="flex-center" style={{ gap: 4, marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
          {tasks.slice(0, 12).map((_, i) => (
            <span key={i} style={{ width: i === index ? 16 : 6, height: 6, borderRadius: 3, background: i === index ? 'var(--color-primary)' : 'var(--color-border)', transition: 'all var(--transition)' }} />
          ))}
          {tasks.length > 12 && <span style={{ fontSize: 10, color: 'var(--color-text-muted)', marginLeft: 4 }}>+{tasks.length - 12}</span>}
        </div>
      )}
    </section>
  )
}

// ============================================================
// STUDY TAB
// ============================================================
function StudyTab({ navigate }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
        <ToolTile icon={FunctionSquare} title="Formulas" onClick={() => navigate('/formulas')} />
        <ToolTile icon={Languages} title="Dictionary" onClick={() => navigate('/dictionary')} />
      </div>
      {STUDY_CARDS.map((c) => (
        <HorizontalCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} color={c.color} onClick={() => navigate(`/${c.id}`)} />
      ))}
    </div>
  )
}

// ============================================================
// DUEL TAB — full lobby
// ============================================================
function DuelTab({ navigate, refreshing }) {
  const [showInvite, setShowInvite] = useState(false)

  return (
    <div className="stack" style={{ gap: 'var(--space-3)' }}>
      <DuelStatsHero refreshing={refreshing} />

      <DuelInvitesStrip refreshing={refreshing} />

      <DuelQuickActions
        onChallenge={() => setShowInvite(true)}
        onPublic={() => navigate('/duo-battle')}
      />

      <DuelTiles navigate={navigate} />

      <DuelRecentMatches refreshing={refreshing} />

      {showInvite && (
        <DuelInviteModal onClose={() => setShowInvite(false)} />
      )}
    </div>
  )
}

// ============================================================
// DUEL — Stats Hero
// ============================================================
function DuelStatsHero({ refreshing }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      try {
        const res = await duelsService.getStats()
        if (!cancelled) setStats(res || null)
      } catch (err) {
        console.error('Failed to load duel stats:', err)
        if (!cancelled) setStats(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [refreshing])

  if (loading) {
    return (
      <section className="card" style={{ padding: 'var(--space-5)' }}>
        <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
          <div className="spinner spinner-sm" />
        </div>
      </section>
    )
  }

  const total = stats?.total_duels || 0
  const wins = stats?.wins || 0
  const losses = stats?.losses || 0
  const draws = stats?.draws || 0
  const winRate = stats?.win_rate ?? (total > 0 ? Math.round((wins / total) * 100) : 0)
  const streak = stats?.streak || 0
  const longest = stats?.longest_streak || 0

  const rateColor =
    winRate >= 60 ? 'var(--color-success)' :
    winRate >= 40 ? 'var(--color-warning)' :
    'var(--color-danger)'

  return (
    <section
      className="card"
      style={{
        padding: 'var(--space-5)',
        background: 'linear-gradient(135deg, var(--color-warning-light) 0%, var(--color-surface) 100%)',
        border: '1px solid var(--color-warning)',
      }}
    >
      <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Swords size={18} style={{ color: 'var(--color-warning)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-warning)' }}>
            DUEL ARENA
          </span>
        </div>
        {streak > 0 && (
          <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>
            🔥 {streak} win{streak === 1 ? '' : 's'} in a row
          </span>
        )}
      </div>

      <div className="flex-between" style={{ alignItems: 'flex-end', marginBottom: 'var(--space-3)', gap: 'var(--space-3)' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 2 }}>
            WIN RATE
          </div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: rateColor, lineHeight: 1 }}>
            {winRate}%
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 4 }}>
            {wins}W · {losses}L · {draws}D · {total} total
          </div>
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Best streak</div>
          <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>
            {longest}
          </div>
        </div>
      </div>

      {total > 0 && (
        <div style={{
          display: 'flex',
          height: 8,
          borderRadius: 4,
          overflow: 'hidden',
          background: 'var(--color-border)',
        }}>
          <div style={{ flex: wins || 0.001, background: 'var(--color-success)' }} />
          <div style={{ flex: draws || 0.001, background: 'var(--color-warning)' }} />
          <div style={{ flex: losses || 0.001, background: 'var(--color-danger)' }} />
        </div>
      )}
    </section>
  )
}

// ============================================================
// DUEL — Pending Invites Strip
// ============================================================
function DuelInvitesStrip({ refreshing }) {
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await social.getDuelInvites()
      setInvites(res?.data?.invites || [])
    } catch (err) {
      console.error('Failed to load duel invites:', err)
      setInvites([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load, refreshing])

  const respond = async (inviteId, accept) => {
    setProcessing(inviteId)
    try {
      await social.respondDuelInvite(inviteId, accept)
      await load()
    } catch (err) {
      console.error('Failed to respond to duel invite:', err)
    } finally {
      setProcessing(null)
    }
  }

  if (loading) return null
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
          <div
            key={inv.id}
            className="flex-between"
            style={{
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-3)',
              background: 'var(--color-background)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                {inv.fromUser?.username || 'Someone'}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {inv.subject}{inv.topic ? ` · ${inv.topic}` : ''} · {inv.questionCount || 10}q
              </div>
            </div>

            <div className="flex" style={{ gap: 6, flexShrink: 0 }}>
              <button
                onClick={() => respond(inv.id, true)}
                disabled={processing === inv.id}
                className="btn btn-success"
                style={{ padding: '6px 10px', fontSize: 'var(--font-size-xs)' }}
              >
                {processing === inv.id ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                Accept
              </button>
              <button
                onClick={() => respond(inv.id, false)}
                disabled={processing === inv.id}
                className="btn btn-ghost"
                style={{ padding: '6px 10px', fontSize: 'var(--font-size-xs)' }}
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
        {invites.length > 3 && (
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            +{invites.length - 3} more
          </div>
        )}
      </div>
    </section>
  )
}

// ============================================================
// DUEL — Quick Actions (2 buttons)
// ============================================================
function DuelQuickActions({ onChallenge, onPublic }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
      <button
        onClick={onChallenge}
        className="card card-hover"
        style={{
          padding: 'var(--space-4)',
          cursor: 'pointer',
          textAlign: 'left',
          border: '1px solid var(--color-primary)',
          background: 'var(--color-primary-light)',
        }}
      >
        <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary)', color: 'white', marginBottom: 'var(--space-2)' }}>
          <Swords size={20} />
        </div>
        <div style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
          Challenge a Friend
        </div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
          Send an invite
        </div>
      </button>

      <button
        onClick={onPublic}
        className="card card-hover"
        style={{
          padding: 'var(--space-4)',
          cursor: 'pointer',
          textAlign: 'left',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
        }}
      >
        <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-warning-light)', color: 'var(--color-warning)', marginBottom: 'var(--space-2)' }}>
          <Globe size={20} />
        </div>
        <div style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
          Public Match
        </div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
          Play with anyone
        </div>
      </button>
    </div>
  )
}

// ============================================================
// DUEL — Compact Tiles (3)
// ============================================================
function DuelTiles({ navigate }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)' }}>
      {DUEL_TILES.map((t) => {
        const Icon = t.icon
        const bg = getBgForColor(t.color)
        return (
          <button
            key={t.id}
            onClick={() => navigate(`/${t.id}`)}
            className="card card-hover"
            style={{
              padding: 'var(--space-3)',
              cursor: 'pointer',
              textAlign: 'center',
              background: 'var(--color-surface)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <div className="flex-center" style={{ width: 36, height: 36, borderRadius: 'var(--radius-lg)', background: bg, color: t.color }}>
              <Icon size={18} />
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text)' }}>
              {t.title}
            </div>
          </button>
        )
      })}
    </div>
  )
}

// ============================================================
// DUEL — Recent Matches
// ============================================================
function DuelRecentMatches({ refreshing }) {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      try {
        const res = await duelsService.history()
        const list = Array.isArray(res) ? res : (res?.data || [])
        if (!cancelled) setMatches(list.slice(0, 5))
      } catch (err) {
        console.error('Failed to load duel history:', err)
        if (!cancelled) setMatches([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [refreshing])

  if (loading) return null
  if (matches.length === 0) return null

  const getResultStyle = (r) => {
    if (r === 'Win') return { color: 'var(--color-success)', bg: 'var(--color-success-light)' }
    if (r === 'Loss') return { color: 'var(--color-danger)', bg: 'var(--color-danger-light)' }
    return { color: 'var(--color-warning)', bg: 'var(--color-warning-light)' }
  }

  return (
    <section className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Clock size={16} style={{ color: 'var(--color-text-muted)' }} />
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
          RECENT MATCHES
        </span>
      </div>

      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {matches.map((m) => {
          const style = getResultStyle(m.result)
          const opponentName = m.opponent || m.challenger || 'Unknown'
          return (
            <div
              key={m.id}
              className="flex-between"
              style={{ alignItems: 'center', gap: 'var(--space-2)' }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                  vs {opponentName}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {m.subject || 'Duel'} · {m.challenger_score ?? 0}–{m.opponent_score ?? 0}
                </div>
              </div>
              <span
                className="badge"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  background: style.bg,
                  color: style.color,
                  flexShrink: 0,
                }}
              >
                {m.result || 'Draw'}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================
// DUEL — Invite Modal (friend picker + composer)
// ============================================================
function DuelInviteModal({ onClose }) {
  const [friends, setFriends] = useState([])
  const [loadingFriends, setLoadingFriends] = useState(true)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(10)
  const [timeLimit, setTimeLimit] = useState(300)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [sent, setSent] = useState(false)

  const subjects = getSubjectLabels()

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoadingFriends(true)
      try {
        const res = await social.getFriends()
        if (!cancelled) setFriends(res?.data?.friends || [])
      } catch (err) {
        console.error('Failed to load friends:', err)
        if (!cancelled) setFriends([])
      } finally {
        if (!cancelled) setLoadingFriends(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const canSend = !!selectedFriend && !!subject && !sending

  const handleSend = async () => {
    if (!canSend) return
    setSending(true)
    setError(null)
    try {
      await social.inviteDuel(
        selectedFriend.id,
        subject,
        topic || null,
        questionCount,
        timeLimit,
      )
      setSent(true)
      setTimeout(() => onClose(), 1400)
    } catch (err) {
      console.error('Failed to send duel invite:', err)
      setError(err?.message || 'Failed to send invite')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 200 }}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '440px',
          width: '100%',
          padding: 'var(--space-5)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div className="flex-between" style={{ alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Swords size={18} style={{ color: 'var(--color-warning)' }} />
            <span style={{ fontWeight: 700, fontSize: 'var(--font-size-base)' }}>Challenge a Friend</span>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 6 }} aria-label="Close">
            <X size={18} />
          </button>
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
            {/* Friend picker */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                PICK OPPONENT
              </div>
              {loadingFriends ? (
                <div className="flex-center" style={{ padding: 'var(--space-3)' }}>
                  <Loader2 size={18} className="animate-spin" />
                </div>
              ) : friends.length === 0 ? (
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', padding: 'var(--space-2)' }}>
                  No friends yet. Add a friend first.
                </div>
              ) : (
                <div
                  className="stack"
                  style={{
                    gap: 6,
                    maxHeight: 180,
                    overflowY: 'auto',
                    padding: 2,
                  }}
                >
                  {friends.map((f) => {
                    const active = selectedFriend?.id === f.id
                    return (
                      <button
                        key={f.id}
                        onClick={() => setSelectedFriend(f)}
                        className="flex"
                        style={{
                          gap: 'var(--space-2)',
                          alignItems: 'center',
                          padding: 'var(--space-2) var(--space-3)',
                          borderRadius: 'var(--radius-lg)',
                          border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                          background: active ? 'var(--color-primary-light)' : 'var(--color-surface)',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div className="flex-center" style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: 'var(--color-primary-light)',
                          color: 'var(--color-primary)',
                          fontWeight: 700,
                          fontSize: 'var(--font-size-sm)',
                          flexShrink: 0,
                          overflow: 'hidden',
                        }}>
                          {f.avatar ? (
                            <img src={f.avatar} alt={f.username} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            (f.username?.[0] || '?').toUpperCase()
                          )}
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                            {f.firstName ? `${f.firstName} ${f.lastName || ''}`.trim() : f.username}
                          </div>
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                            @{f.username}
                          </div>
                        </div>
                        {active && <Check size={16} style={{ color: 'var(--color-primary)' }} />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Subject */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                SUBJECT
              </div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {subjects.length === 0 ? (
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    No subjects configured
                  </div>
                ) : (
                  subjects.map((s) => {
                    const active = subject === s.label
                    return (
                      <button
                        key={s.key}
                        onClick={() => setSubject(s.label)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-full)',
                          border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                          background: active ? 'var(--color-primary-light)' : 'var(--color-surface)',
                          color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: active ? 600 : 400,
                          cursor: 'pointer',
                        }}
                      >
                        {s.label}
                      </button>
                    )
                  })
                )}
              </div>
            </div>

            {/* Topic */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                TOPIC (OPTIONAL)
              </div>
              <input
                type="text"
                className="input"
                placeholder="e.g. Quadratic Equations"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            {/* Question count */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                QUESTIONS
              </div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {[5, 10, 15, 20].map((n) => {
                  const active = questionCount === n
                  return (
                    <button
                      key={n}
                      onClick={() => setQuestionCount(n)}
                      style={{
                        minWidth: 48,
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                        background: active ? 'var(--color-primary-light)' : 'var(--color-surface)',
                        color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: active ? 600 : 400,
                        cursor: 'pointer',
                      }}
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time limit */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                TIME LIMIT
              </div>
              <div className="flex" style={{ gap: 6, flexWrap: 'wrap' }}>
                {[
                  { s: 60, label: '1 min' },
                  { s: 180, label: '3 min' },
                  { s: 300, label: '5 min' },
                  { s: 600, label: '10 min' },
                ].map((opt) => {
                  const active = timeLimit === opt.s
                  return (
                    <button
                      key={opt.s}
                      onClick={() => setTimeLimit(opt.s)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                        background: active ? 'var(--color-primary-light)' : 'var(--color-surface)',
                        color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: active ? 600 : 400,
                        cursor: 'pointer',
                      }}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {error && (
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-danger)', marginBottom: 'var(--space-3)' }}>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSend}
              disabled={!canSend}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3)' }}
            >
              {sending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Invite
                </>
              )}
            </button>
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
    <button onClick={onClick} className="card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center', cursor: 'pointer', background: 'var(--color-surface)' }}>
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
    <button onClick={onClick} className="card card-hover" style={{ padding: 'var(--space-4)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', background: 'var(--color-surface)' }}>
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

// ============================================================
// BOTTOM NAV
// ============================================================
function BottomNav({ activeTab, onTabChange }) {
  const navigate = useNavigate()

  const Tab = ({ id, label, icon: Icon }) => {
    const isActive = activeTab === id
    return (
      <button className={`bottom-nav-tab ${isActive ? 'active' : ''}`} onClick={() => onTabChange(id)}>
        <Icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
        <span className="bottom-nav-tab-label">{label}</span>
      </button>
    )
  }

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-inner">
        <div className="bottom-nav-bar" aria-hidden="true" />
        <div className="bottom-nav-center-glow" aria-hidden="true" />

        <div className="bottom-nav-tabs">
          <Tab id="home" label="Home" icon={HomeIcon} />
          <Tab id="study" label="Study" icon={StudyIcon} />
          <div className="bottom-nav-center-slot" />
          <button className="bottom-nav-tab" onClick={() => navigate('/social')} aria-label="Social">
            <User size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Social</span>
          </button>
          <Tab id="duel" label="Duel" icon={Swords} />
        </div>

        <button className="bottom-nav-center" onClick={() => navigate('/dashboard')} aria-label="Dashboard">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

function HomeIcon(props) {
  return (
    <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  )
}
function StudyIcon(props) {
  return (
    <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z" />
      <path d="M4 20a3 3 0 0 1 3-3h11" />
      <polygon points="10,9 10,15 15,12" fill="currentColor" stroke="none" />
    </svg>
  )
}
