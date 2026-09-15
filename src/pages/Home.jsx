// ============================================================
// HYELEARNER: FOUNDATION — HOME
// 3 tabs: Home / Study / Duel
// Center nav button → /dashboard
// Social nav button → /social
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { userStats } from '../services'
import { SUBJECTS } from '../constants'
import {
  RefreshCw,
  User,
  Zap,
  Flame,
  PenTool,
  Target,
  Send,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Calendar,
  Timer,
  PlayCircle,
  StopCircle,
  CheckCircle2,
  Clock,
  ChevronRight,
  BookOpen,
  Languages,
  FunctionSquare,
  Award,
  BarChart3,
  BookMarked,
  FileText,
  Swords,
  Trophy,
  Gamepad2,
  Brain,
} from 'lucide-react'

// ============================================================
// WORD OF THE DAY DATA + HELPER
// ============================================================
const WORD_OF_THE_DAY_DATA = [
  { word: 'Ephemeral', definition: 'Lasting for a very short time.', example: 'The ephemeral beauty of a sunset.' },
  { word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', example: 'Smartphones have become ubiquitous.' },
  { word: 'Perseverance', definition: 'Persistence in doing something despite difficulty.', example: 'Her perseverance paid off with success.' },
  { word: 'Resilience', definition: 'The capacity to recover quickly from difficulties.', example: 'The resilience of the community was inspiring.' },
  { word: 'Ambiguous', definition: 'Open to more than one interpretation.', example: 'The ending of the movie was ambiguous.' },
  { word: 'Paradigm', definition: 'A typical example or pattern of something.', example: 'The internet changed the paradigm of communication.' },
  { word: 'Synergy', definition: 'The interaction of elements that produces a greater effect than the sum of their individual effects.', example: 'The team worked in synergy to solve the problem.' },
  { word: 'Empathy', definition: 'The ability to understand and share the feelings of another.', example: 'She showed great empathy towards her friend.' },
  { word: 'Phenomenon', definition: 'A fact or situation that is observed to exist or happen.', example: 'The aurora borealis is a natural phenomenon.' },
  { word: 'Trepidation', definition: 'A feeling of fear or anxiety about something that may happen.', example: 'He approached the exam with trepidation.' },
  { word: 'Altruism', definition: 'The belief in or practice of selfless concern for the well-being of others.', example: 'His altruism inspired others to help.' },
  { word: 'Ethereal', definition: 'Extremely delicate and light in a way that seems not of this world.', example: 'The ethereal music filled the room.' },
  { word: 'Prolific', definition: 'Producing much fruit or foliage or many offspring.', example: 'She was a prolific writer.' },
  { word: 'Surreal', definition: 'Having the qualities of surrealism; bizarre.', example: 'The experience was almost surreal.' },
  { word: 'Mellifluous', definition: 'Sweet or musical; pleasant to hear.', example: 'Her mellifluous voice captivated the audience.' },
  { word: 'Benevolent', definition: 'Well-meaning and kindly.', example: 'A benevolent smile spread across his face.' },
  { word: 'Capricious', definition: 'Given to sudden and unaccountable changes of mood or behavior.', example: 'The capricious weather made planning difficult.' },
  { word: 'Clandestine', definition: 'Kept secret or done secretively.', example: 'They had a clandestine meeting.' },
  { word: 'Exquisite', definition: 'Extremely beautiful and, typically, delicate.', example: 'The exquisite craftsmanship was evident.' },
  { word: 'Formidable', definition: 'Inspiring fear or respect through being impressively large, powerful, intense, or capable.', example: 'He was a formidable opponent.' },
]

const getWordOfTheDay = () => {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
  return WORD_OF_THE_DAY_DATA[dayOfYear % WORD_OF_THE_DAY_DATA.length]
}

// ============================================================
// STUDY FEATURES (Study tab) — horizontal cards
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
// DUEL FEATURES (Duel tab) — horizontal cards
// ============================================================
const DUEL_CARDS = [
  { id: 'duo-battle', icon: Swords, title: 'Duo Battle', desc: 'Challenge friends', color: 'var(--color-warning)' },
  { id: 'leaderboards', icon: Trophy, title: 'Leaderboards', desc: 'Compete', color: 'var(--color-warning)' },
  { id: 'gamification', icon: Gamepad2, title: 'Gamification', desc: 'Earn badges', color: 'var(--color-secondary)' },
]

// ============================================================
// ICON BG MAP
// ============================================================
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
// MAIN HOME
// ============================================================
export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('home')
  const [refreshing, setRefreshing] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

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
    <div
      className="has-bottom-nav"
      style={{ background: 'var(--color-background)', minHeight: '100vh' }}
    >
      <div
        className="container"
        style={{
          paddingTop: 'var(--space-4)',
          paddingBottom: 'var(--space-4)',
          maxWidth: '48rem',
        }}
      >
        {/* ================= HEADER (Home tab only) ================= */}
        {activeTab === 'home' && (
          <header
            className="flex-between"
            style={{ marginBottom: 'var(--space-5)' }}
          >
            <div
              className="flex"
              style={{ gap: 'var(--space-3)', alignItems: 'center' }}
            >
              <div
                className="flex-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  flexShrink: 0,
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                }}
              >
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                  }}
                >
                  Welcome
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                  }}
                >
                  {firstName}
                </div>
              </div>
            </div>

            <div
              className="flex"
              style={{ gap: 'var(--space-2)', alignItems: 'center' }}
            >
              <button
                onClick={handleRefresh}
                className="btn btn-ghost"
                style={{ padding: 'var(--space-2)' }}
                aria-label="Refresh"
              >
                <RefreshCw
                  size={18}
                  style={{
                    animation: refreshing
                      ? 'spin 0.8s linear infinite'
                      : 'none',
                  }}
                />
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="flex-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label="Profile"
              >
                <User size={20} />
              </button>
            </div>
          </header>
        )}

        {/* ============ CENTERED TITLE (Study / Duel) ============ */}
        {activeTab !== 'home' && (
          <h1
            className="text-center"
            style={{
              marginBottom: 'var(--space-5)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-text)',
            }}
          >
            {activeTab === 'study' ? 'STUDY' : 'DUEL'}
          </h1>
        )}

        {/* ================= TAB CONTENT ================= */}
        <main>
          {activeTab === 'home' && (
            <HomeTab
              key={refreshKey}
              navigate={navigate}
              refreshing={refreshing}
            />
          )}
          {activeTab === 'study' && <StudyTab navigate={navigate} />}
          {activeTab === 'duel' && <DuelTab navigate={navigate} />}
        </main>
      </div>

      {/* ================= BOTTOM NAV ================= */}
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
      <QuickStats />
      <HyeTutorChatCard navigate={navigate} />
      <WordOfTheDayCard navigate={navigate} />
      <StudyPlanCard navigate={navigate} refreshing={refreshing} />
      <RevisionPlannerCard navigate={navigate} refreshing={refreshing} />
    </div>
  )
}

// ============================================================
// 1. QUICK STATS — grouped 2x2 card
// ============================================================
function QuickStats() {
  const [stats, setStats] = useState({
    xp: 0,
    level: 1,
    streak: 0,
    accuracy: 0,
    sessions: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const response = await userStats.getToday()
        if (response && response.xp !== undefined) {
          setStats({
            xp: response.xp || 0,
            level: response.level || 1,
            streak: response.streak || 0,
            accuracy: response.accuracy || 0,
            sessions: response.sessions || 0,
          })
          setLoading(false)
          return
        }
      } catch (e) {
        // fall through to localStorage
      }

      try {
        const gamification = storage.getGamification()
        const sessions = storage.getSessions()
        let totalQuestions = 0
        let correct = 0
        let completedSessions = 0
        sessions.forEach((s) => {
          if (s.status === 'completed') {
            completedSessions++
            totalQuestions += s.totalQuestions || s.total || 0
            correct += s.correctAnswers || s.correct || 0
          }
        })
        const accuracy =
          totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
        setStats({
          xp: gamification.xp || 0,
          level: gamification.level || 1,
          streak: gamification.streak || 0,
          accuracy,
          sessions: completedSessions,
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const statsConfig = [
    {
      key: 'xp',
      icon: Zap,
      label: 'Total XP',
      value: stats.xp.toLocaleString(),
      color: 'var(--color-primary)',
      bg: 'var(--color-primary-light)',
    },
    {
      key: 'streak',
      icon: Flame,
      label: 'Streak',
      value: stats.streak,
      color: 'var(--color-warning)',
      bg: 'var(--color-warning-light)',
    },
    {
      key: 'sessions',
      icon: PenTool,
      label: 'Sessions',
      value: stats.sessions,
      color: 'var(--color-success)',
      bg: 'var(--color-success-light)',
    },
    {
      key: 'accuracy',
      icon: Target,
      label: 'Accuracy',
      value: `${stats.accuracy}%`,
      color:
        stats.accuracy >= 70
          ? 'var(--color-success)'
          : stats.accuracy >= 40
            ? 'var(--color-warning)'
            : 'var(--color-danger)',
      bg:
        stats.accuracy >= 70
          ? 'var(--color-success-light)'
          : stats.accuracy >= 40
            ? 'var(--color-warning-light)'
            : 'var(--color-danger-light)',
    },
  ]

  return (
    <section className="card" style={{ padding: 'var(--space-5)' }}>
      <div
        style={{
          fontSize: 'var(--font-size-xs)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-4)',
        }}
      >
        QUICK STATS
      </div>

      {loading ? (
        <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
          <div className="spinner spinner-sm"></div>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
          }}
        >
          {statsConfig.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.key}
                className="flex-between"
                style={{ alignItems: 'flex-start', gap: 'var(--space-2)' }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-muted)',
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                <div
                  className="flex-center"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 'var(--radius-lg)',
                    background: s.bg,
                    color: s.color,
                    flexShrink: 0,
                  }}
                >
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

  const launch = useCallback(
    (message) => {
      if (!message.trim()) return
      navigate('/hyetutor/chat', { state: { initialMessage: message.trim() } })
    },
    [navigate],
  )

  return (
    <section className="card" style={{ padding: 'var(--space-5)' }}>
      <div
        className="flex"
        style={{
          gap: 'var(--space-2)',
          alignItems: 'center',
          marginBottom: 'var(--space-3)',
        }}
      >
        <MessageSquare
          size={18}
          style={{ color: 'var(--color-primary)' }}
        />
        <span
          style={{
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text)',
          }}
        >
          HyeTutor
        </span>
        <span
          style={{
            fontWeight: 600,
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text)',
          }}
        >
          Chat
        </span>
        <span
          className="badge badge-primary"
          style={{ fontSize: 'var(--font-size-xs)' }}
        >
          <Sparkles size={12} /> AI Coach
        </span>
      </div>

      {/* Input bar */}
      <div className="flex" style={{ gap: 'var(--space-2)' }}>
        <input
          type="text"
          className="input"
          placeholder="Ask HyeTutor anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              launch(input)
            }
          }}
          style={{ flex: 1 }}
        />
        <button
          onClick={() => launch(input)}
          disabled={!input.trim()}
          className="btn btn-primary"
          style={{ padding: 'var(--space-2) var(--space-3)' }}
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </div>

      {/* Suggestion pills */}
      <div
        className="flex"
        style={{
          gap: 'var(--space-2)',
          flexWrap: 'wrap',
          marginTop: 'var(--space-3)',
        }}
      >
        {suggestions.map((q) => (
          <button
            key={q}
            onClick={() => launch(q)}
            style={{
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition)',
            }}
          >
            💡 {q}
          </button>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// 3. WORD OF THE DAY CARD
// ============================================================
function WordOfTheDayCard({ navigate }) {
  const word = getWordOfTheDay()

  return (
    <section
      className="card card-hover"
      onClick={() => navigate('/dictionary')}
      style={{
        padding: 'var(--space-5)',
        cursor: 'pointer',
        background:
          'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)',
        border: '1px solid var(--color-primary)',
      }}
    >
      <div
        className="flex"
        style={{
          gap: 'var(--space-2)',
          alignItems: 'center',
          marginBottom: 'var(--space-3)',
        }}
      >
        <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--color-primary)',
          }}
        >
          WORD OF THE DAY
        </span>
      </div>

      <div
        className="flex-between"
        style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              color: 'var(--color-text)',
            }}
          >
            {word.word}
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-1)',
            }}
          >
            {word.definition}
          </div>
          {word.example && (
            <div
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                fontStyle: 'italic',
                marginTop: 'var(--space-2)',
              }}
            >
              "{word.example}"
            </div>
          )}
        </div>
        <ChevronRight
          size={20}
          style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
        />
      </div>
    </section>
  )
}

// ============================================================
// 4. STUDY PLAN CARD — countdown + today's schedule only
// ============================================================
function StudyPlanCard({ navigate, refreshing }) {
  const [plan, setPlan] = useState(null)
  const [now, setNow] = useState(() => new Date())

  // Load saved plan
  useEffect(() => {
    try {
      const raw = localStorage.getItem('hyelearner_study_plan_v2')
      if (raw) {
        const data = JSON.parse(raw)
        setPlan(data)
      } else {
        setPlan(null)
      }
    } catch (e) {
      setPlan(null)
    }
  }, [refreshing])

  // Live countdown tick
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const examDate =
    plan?.exam_date ||
    plan?.exam_info?.exam_date ||
    plan?.plan?.exam_date ||
    null

  const countdown = (() => {
    if (!examDate) return null
    const target = new Date(examDate)
    const diff = target - now
    if (diff <= 0) return { over: true }
    return {
      over: false,
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  })()

  // Today's day from weekly schedule
  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' })
  const todayEntry = plan?.plan?.weekly_schedule?.find(
    (d) => d.day?.toLowerCase() === todayName.toLowerCase(),
  )

  const examType =
    plan?.exam_info?.exam_type?.toUpperCase() ||
    plan?.exam_type?.toUpperCase() ||
    null

  // Empty state
  if (!plan) {
    return (
      <section
        className="card card-hover"
        onClick={() => navigate('/study-plan')}
        style={{ padding: 'var(--space-5)', cursor: 'pointer' }}
      >
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            alignItems: 'center',
            marginBottom: 'var(--space-3)',
          }}
        >
          <Calendar size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
            }}
          >
            STUDY PLAN
          </span>
        </div>
        <div
          className="flex-between"
          style={{ alignItems: 'center', gap: 'var(--space-3)' }}
        >
          <div>
            <div
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              Set up your Study Plan
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                marginTop: 2,
              }}
            >
              Get an AI-personalized plan for your exam
            </div>
          </div>
          <ChevronRight
            size={20}
            style={{ color: 'var(--color-text-muted)' }}
          />
        </div>
      </section>
    )
  }

  // Populated state
  return (
    <section
      className="card card-hover"
      onClick={() => navigate('/study-plan')}
      style={{
        padding: 'var(--space-5)',
        cursor: 'pointer',
        border: '1px solid var(--color-primary)',
      }}
    >
      <div
        className="flex-between"
        style={{
          alignItems: 'center',
          marginBottom: 'var(--space-3)',
        }}
      >
        <div
          className="flex"
          style={{ gap: 'var(--space-2)', alignItems: 'center' }}
        >
          <Calendar size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            STUDY PLAN
          </span>
        </div>
        {examType && (
          <span
            className="badge badge-primary"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            {examType}
          </span>
        )}
      </div>

      {/* Countdown */}
      {countdown && (
        <div
          style={{
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-3)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {countdown.over ? (
            <div
              className="flex"
              style={{
                gap: 'var(--space-2)',
                alignItems: 'center',
                color: 'var(--color-danger)',
              }}
            >
              <StopCircle size={20} />
              <span style={{ fontWeight: 700 }}>Exam Day! 🎯</span>
            </div>
          ) : (
            <div
              className="flex"
              style={{
                gap: 'var(--space-3)',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                className="flex"
                style={{ gap: 'var(--space-2)', alignItems: 'center' }}
              >
                <Timer size={18} style={{ color: 'var(--color-primary)' }} />
                <span
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  Exam in
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-primary)',
                }}
              >
                {countdown.d}d {String(countdown.h).padStart(2, '0')}h{' '}
                {String(countdown.m).padStart(2, '0')}m{' '}
                {String(countdown.s).padStart(2, '0')}s
              </div>
            </div>
          )}
        </div>
      )}

      {/* Today's schedule */}
      {todayEntry ? (
        <div>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-2)',
            }}
          >
            TODAY — {todayName}
          </div>
          {todayEntry.focus && (
            <div
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-1)',
              }}
            >
              {todayEntry.focus}
            </div>
          )}
          <div className="stack" style={{ gap: 'var(--space-1)' }}>
            {(todayEntry.topics || []).slice(0, 4).map((t, i) => (
              <div
                key={i}
                className="flex-between"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                <span style={{ color: 'var(--color-text-secondary)' }}>
                  {t.subject} — {t.topic}
                </span>
                <span
                  style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--font-size-xs)',
                  }}
                >
                  {t.hours}h
                </span>
              </div>
            ))}
            {(todayEntry.topics || []).length > 4 && (
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-muted)',
                }}
              >
                +{todayEntry.topics.length - 4} more
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          No tasks scheduled for today
        </div>
      )}
    </section>
  )
}

// ============================================================
// 5. REVISION PLANNER CARD — auto-cycling carousel of ALL tasks
// ============================================================
function RevisionPlannerCard({ navigate, refreshing }) {
  const [tasks, setTasks] = useState([])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  // Load tasks
  useEffect(() => {
    try {
      const raw = localStorage.getItem('hyelearner_revision_planner_v2')
      if (raw) {
        const data = JSON.parse(raw)
        setTasks(Array.isArray(data.tasks) ? data.tasks : [])
      } else {
        setTasks([])
      }
      setIndex(0)
    } catch (e) {
      setTasks([])
    }
  }, [refreshing])

  // Auto-advance
  useEffect(() => {
    if (paused || tasks.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % tasks.length)
    }, 4500)
    return () => clearInterval(id)
  }, [paused, tasks.length])

  // Swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }
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

  // Empty state
  if (tasks.length === 0) {
    return (
      <section
        className="card card-hover"
        onClick={() => navigate('/revision-planner')}
        style={{ padding: 'var(--space-5)', cursor: 'pointer' }}
      >
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            alignItems: 'center',
            marginBottom: 'var(--space-3)',
          }}
        >
          <FileText size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
            }}
          >
            REVISION PLANNER
          </span>
        </div>
        <div
          className="flex-between"
          style={{ alignItems: 'center', gap: 'var(--space-3)' }}
        >
          <div>
            <div
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              Plan your revision
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                marginTop: 2,
              }}
            >
              Add tasks and track your daily study
            </div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)' }} />
        </div>
      </section>
    )
  }

  const task = tasks[index]
  const priorityColor =
    task.priority === 'high'
      ? 'var(--color-danger)'
      : task.priority === 'medium'
        ? 'var(--color-warning)'
        : 'var(--color-success)'
  const priorityDot =
    task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'

  return (
    <section
      className="card card-hover"
      onClick={() => navigate('/revision-planner')}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        padding: 'var(--space-5)',
        cursor: 'pointer',
        border: '1px solid var(--color-primary)',
      }}
    >
      <div
        className="flex-between"
        style={{ alignItems: 'center', marginBottom: 'var(--space-3)' }}
      >
        <div
          className="flex"
          style={{ gap: 'var(--space-2)', alignItems: 'center' }}
        >
          <FileText size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            REVISION PLANNER
          </span>
        </div>
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-muted)',
          }}
        >
          {index + 1} / {tasks.length}
        </span>
      </div>

      {/* Task slide */}
      <div key={task.id || index} className="animate-fade">
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            alignItems: 'center',
            marginBottom: 'var(--space-1)',
          }}
        >
          {task.completed ? (
            <CheckCircle2
              size={16}
              style={{ color: 'var(--color-success)' }}
            />
          ) : (
            <PlayCircle
              size={16}
              style={{ color: 'var(--color-warning)' }}
            />
          )}
          <span
            style={{
              fontWeight: task.completed ? 400 : 600,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed
                ? 'var(--color-text-muted)'
                : 'var(--color-text)',
              fontSize: 'var(--font-size-base)',
            }}
          >
            {task.title}
          </span>
        </div>
        <div
          className="flex"
          style={{
            gap: 'var(--space-3)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-muted)',
            flexWrap: 'wrap',
          }}
        >
          <span>{task.subject || 'General'}</span>
          {task.estimatedTime && (
            <span className="flex" style={{ gap: 4, alignItems: 'center' }}>
              <Clock size={12} /> {task.estimatedTime}m
            </span>
          )}
          {task.priority && (
            <span style={{ color: priorityColor }}>
              {priorityDot} {task.priority}
            </span>
          )}
        </div>
      </div>

      {/* Dots */}
      {tasks.length > 1 && (
        <div
          className="flex-center"
          style={{ gap: 4, marginTop: 'var(--space-3)', flexWrap: 'wrap' }}
        >
          {tasks.slice(0, 12).map((_, i) => (
            <span
              key={i}
              style={{
                width: i === index ? 16 : 6,
                height: 6,
                borderRadius: 3,
                background:
                  i === index
                    ? 'var(--color-primary)'
                    : 'var(--color-border)',
                transition: 'all var(--transition)',
              }}
            />
          ))}
          {tasks.length > 12 && (
            <span
              style={{
                fontSize: 10,
                color: 'var(--color-text-muted)',
                marginLeft: 4,
              }}
            >
              +{tasks.length - 12}
            </span>
          )}
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
      {/* Tools — 2 tiles side by side */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-3)',
        }}
      >
        <ToolTile
          icon={FunctionSquare}
          title="Formulas"
          onClick={() => navigate('/formulas')}
        />
        <ToolTile
          icon={Languages}
          title="Dictionary"
          onClick={() => navigate('/dictionary')}
        />
      </div>

      {/* Horizontal cards */}
      {STUDY_CARDS.map((c) => (
        <HorizontalCard
          key={c.id}
          icon={c.icon}
          title={c.title}
          desc={c.desc}
          color={c.color}
          onClick={() => navigate(`/${c.id}`)}
        />
      ))}
    </div>
  )
}

// ============================================================
// DUEL TAB
// ============================================================
function DuelTab({ navigate }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-3)' }}>
      {DUEL_CARDS.map((c) => (
        <HorizontalCard
          key={c.id}
          icon={c.icon}
          title={c.title}
          desc={c.desc}
          color={c.color}
          onClick={() => navigate(`/${c.id}`)}
        />
      ))}
    </div>
  )
}

// ============================================================
// SHARED: Tool Tile (top of Study)
// ============================================================
function ToolTile({ icon: Icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="card card-hover"
      style={{
        padding: 'var(--space-4)',
        textAlign: 'center',
        cursor: 'pointer',
        background: 'var(--color-surface)',
      }}
    >
      <div
        className="flex-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          margin: '0 auto var(--space-2)',
        }}
      >
        <Icon size={20} />
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text)',
        }}
      >
        {title}
      </div>
    </button>
  )
}

// ============================================================
// SHARED: Horizontal Card (Study + Duel lists)
// ============================================================
function HorizontalCard({ icon: Icon, title, desc, color, onClick }) {
  const bg = getBgForColor(color)
  return (
    <button
      onClick={onClick}
      className="card card-hover"
      style={{
        padding: 'var(--space-4)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        textAlign: 'left',
        background: 'var(--color-surface)',
      }}
    >
      <div
        className="flex-center"
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-lg)',
          background: bg,
          color,
          flexShrink: 0,
        }}
      >
        <Icon size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          {desc}
        </div>
      </div>
      <ChevronRight
        size={18}
        style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
      />
    </button>
  )
}

// ============================================================
// BOTTOM NAV — inlined into Home
// ============================================================
function BottomNav({ activeTab, onTabChange }) {
  const navigate = useNavigate()

  const Tab = ({ id, label, icon: Icon }) => {
    const isActive = activeTab === id
    return (
      <button
        className={`bottom-nav-tab ${isActive ? 'active' : ''}`}
        onClick={() => onTabChange(id)}
      >
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

          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/social')}
            aria-label="Social"
          >
            <User size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Social</span>
          </button>

          <Tab id="duel" label="Duel" icon={Swords} />
        </div>

        <button
          className="bottom-nav-center"
          onClick={() => navigate('/dashboard')}
          aria-label="Dashboard"
        >
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

// Inline mini-icons for nav
function HomeIcon(props) {
  return (
    <svg
      width={props.size || 22}
      height={props.size || 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  )
}
function StudyIcon(props) {
  return (
    <svg
      width={props.size || 22}
      height={props.size || 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z" />
      <path d="M4 20a3 3 0 0 1 3-3h11" />
      <polygon points="10,9 10,15 15,12" fill="currentColor" stroke="none" />
    </svg>
  )
}
