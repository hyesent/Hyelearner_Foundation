// ============================================================
// HYELEARNER: FOUNDATION — ENGAGE PAGES (SHOWCASE / PREVIEW)
// Heatmap, Weakness Finder, Gamification, Leaderboards.
// Static + preview-aware. Navigation is local — no router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  Flame, Brain, Gamepad2, Trophy, ArrowLeft, Sparkles, Award,
  Medal, AlertCircle, CheckCircle2, Loader2, Zap, Crown, RefreshCw,
  BookOpen, UserPlus, Clock, Cpu, Lock,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const SUBJECTS = {
  mathematics: { label: 'Mathematics',      topics: ['Quadratic Equations', 'Trigonometry', 'Algebra', 'Logarithms', 'Probability'] },
  physics:     { label: 'Physics',          topics: ["Newton's Laws", 'Work & Energy', 'Waves', 'Electricity'] },
  chemistry:   { label: 'Chemistry',        topics: ['Atomic Structure', 'Organic Chemistry', 'Acids & Bases'] },
  english:     { label: 'English Language', topics: ['Comprehension', 'Synonyms & Antonyms', 'Essay'] },
  biology:     { label: 'Biology',          topics: ['Cell Division', 'Genetics', 'Ecology'] },
}

// Mastery map — keyed by topic name, exactly like storage.getMastery()
const MASTERY = {
  'Quadratic Equations': 92,
  'Trigonometry': 41,
  'Algebra': 78,
  'Logarithms': 55,
  'Probability': 63,
  "Newton's Laws": 88,
  'Work & Energy': 79,
  'Waves': 42,
  'Electricity': 51,
  'Atomic Structure': 76,
  'Organic Chemistry': 22,
  'Acids & Bases': 44,
  'Comprehension': 35,
  'Synonyms & Antonyms': 90,
  'Essay': 67,
  'Cell Division': 81,
  'Genetics': 48,
  'Ecology': 68,
}

// Weakness finder — static result set
const WEAK_TOPICS = [
  { topic: 'Organic Chemistry', accuracy: 22, priority: 'High',   mistakeCount: 5, attempts: 8,  source: 'snapshot', recommendations: 'Focus on hydrocarbon naming and functional group identification.' },
  { topic: 'Comprehension',     accuracy: 35, priority: 'High',   mistakeCount: 4, attempts: 10, source: 'snapshot', recommendations: 'Practice slow reading and question paraphrasing.' },
  { topic: 'Trigonometry',      accuracy: 41, priority: 'High',   mistakeCount: 3, attempts: 7,  source: 'snapshot', recommendations: 'Memorise the unit-circle values and identities.' },
  { topic: 'Waves',             accuracy: 42, priority: 'Medium', mistakeCount: 2, attempts: 6,  source: 'local' },
  { topic: 'Acids & Bases',     accuracy: 44, priority: 'Medium', mistakeCount: 2, attempts: 5,  source: 'local' },
  { topic: 'Genetics',          accuracy: 48, priority: 'Medium', mistakeCount: 1, attempts: 4,  source: 'local' },
  { topic: 'Electricity',       accuracy: 51, priority: 'Low',    mistakeCount: 1, attempts: 6,  source: 'local' },
]

const AI_ANALYSIS = {
  summary: 'Your weakest areas are concentrated in Chemistry and English. Organic Chemistry and Comprehension together account for over 40% of your recent mistakes — focusing here will give the biggest score jump before your exam.',
  weakTopics: [
    { topic: 'Organic Chemistry', accuracy: 22, priority: 'High', recommendations: 'Start with IUPAC naming, then move to reaction mechanisms.' },
    { topic: 'Comprehension',     accuracy: 35, priority: 'High', recommendations: 'Read one long passage a day and summarise in 3 sentences.' },
    { topic: 'Trigonometry',      accuracy: 41, priority: 'High', recommendations: 'Drill the unit circle for 10 minutes each morning.' },
  ],
  generatedAt: new Date().toISOString(),
}

// Gamification
const GAMIFICATION = {
  xp: 2340,
  level: 4,
  streak: 12,
  badges: ['first_steps', 'week_warrior', 'century_club'],
}

const XP_TABLE = [0, 500, 1200, 2000, 3000, 4500, 6500, 9000, 12000, 16000]

const BADGE_DEFINITIONS = [
  { id: 'first_steps',  icon: '🌱', label: 'First Steps',   description: 'Complete your first practice' },
  { id: 'week_warrior', icon: '🔥', label: 'Week Warrior',  description: '7-day streak' },
  { id: 'century_club', icon: '💯', label: 'Century Club',  description: '100 questions answered' },
  { id: 'perfectionist',icon: '🎯', label: 'Perfectionist', description: '100% on any quiz' },
  { id: 'night_owl',    icon: '🌙', label: 'Night Owl',     description: 'Study after 10 pm' },
  { id: 'early_bird',   icon: '🌅', label: 'Early Bird',    description: 'Study before 7 am' },
  { id: 'marathoner',   icon: '🏃', label: 'Marathoner',    description: '2-hour study session' },
  { id: 'scholar',      icon: '🎓', label: 'Scholar',       description: 'Complete 10 lessons' },
]

// Leaderboard
const LEADERBOARD = [
  { user_id: 'u1', rank: 1, name: 'Tunde Adeyemi',   username: 'tunde',    school: 'King\'s College, Lagos',   xp: 18750, level: 12 },
  { user_id: 'u2', rank: 2, name: 'Chinaza Okafor',  username: 'chinaza',  school: 'FGGC, Onitsha',            xp: 16420, level: 11 },
  { user_id: 'u3', rank: 3, name: 'Bola Adekunle',   username: 'bola',     school: 'Loyola Jesuit, Abuja',     xp: 14980, level: 10 },
  { user_id: 'u4', rank: 4, name: 'Ada Obi',         username: 'adaobi',   school: 'FGC, Lagos',               xp: 12850, level: 9  },
  { user_id: 'u5', rank: 5, name: 'Emeka Nwosu',     username: 'emeka',    school: 'Government College, Umuahia', xp: 11200, level: 8 },
  { user_id: 'u6', rank: 6, name: 'Fatima Yusuf',    username: 'fatima',   school: 'Queens College, Lagos',    xp: 10340, level: 8 },
  { user_id: 'u7', rank: 7, name: 'Ifeanyi Chukwu',  username: 'ifeanyi',  school: 'Nigerian Military School', xp: 9870,  level: 7 },
  { user_id: 'u8', rank: 8, name: 'Zainab Ahmed',    username: 'zainab',   school: 'Federal Government College', xp: 9120, level: 7 },
]

const getStatusColor = (v) => v >= 80 ? 'var(--color-success)' : v >= 50 ? 'var(--color-warning)' : v > 0 ? 'var(--color-danger)' : 'var(--color-border)'
const getStatusText  = (v) => v >= 80 ? 'var(--color-success)' : v >= 50 ? 'var(--color-warning)' : v > 0 ? 'var(--color-danger)' : 'var(--color-text-muted)'
const getStatusLabel = (v) => v >= 80 ? 'Strong' : v >= 50 ? 'Average' : v > 0 ? 'Weak' : 'Not studied'

// ============================================================
// 1. HEATMAP
// ============================================================
export function ShowcaseHeatmap({ onNavigate }) {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const allTopics = Object.keys(MASTERY)

  const strongCount    = allTopics.filter((t) => MASTERY[t] >= 80).length
  const avgCount       = allTopics.filter((t) => MASTERY[t] >= 50 && MASTERY[t] < 80).length
  const weakCount      = allTopics.filter((t) => MASTERY[t] > 0 && MASTERY[t] < 50).length
  const notStudiedCount = SUBJECTS ? Object.values(SUBJECTS).flatMap((s) => s.topics).filter((t) => !MASTERY[t]).length : 0

  const subjectKeys = Object.keys(SUBJECTS)

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Flame size={20} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Heatmap</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Topic mastery overview</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          {[
            { label: 'Strong',       count: strongCount,     color: 'var(--color-success)' },
            { label: 'Average',      count: avgCount,        color: 'var(--color-warning)' },
            { label: 'Weak',         count: weakCount,       color: 'var(--color-danger)'  },
            { label: 'Not Studied',  count: notStudiedCount, color: 'var(--color-text-muted)' },
          ].map((item) => (
            <div key={item.label} className="stat-card text-center">
              <div className="h2" style={{ color: item.color, margin: 0 }}>{item.count}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          <button onClick={() => setSelectedSubject(null)} className={`btn ${selectedSubject === null ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)' }}>
            All Subjects
          </button>
          {subjectKeys.map((s) => (
            <button key={s} onClick={() => setSelectedSubject(s)} className={`btn ${selectedSubject === s ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)' }}>
              {SUBJECTS[s].label}
            </button>
          ))}
        </div>

        <div className="stack" style={{ gap: 'var(--space-4)' }}>
          {subjectKeys
            .filter((s) => selectedSubject === null || s === selectedSubject)
            .map((subject) => {
              const topics = SUBJECTS[subject].topics
              return (
                <div key={subject} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                  <div className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', borderBottom: '1px solid var(--color-border)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{SUBJECTS[subject].label}</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{topics.length} topics</span>
                  </div>
                  <div>
                    {topics.map((topic) => {
                      const value = MASTERY[topic] || 0
                      return (
                        <div key={topic} className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border-light)' }}>
                          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text)' }}>{topic}</span>
                          <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
                            <div className="progress" style={{ width: 96 }}>
                              <div className="progress-fill" style={{ width: `${value}%`, background: getStatusColor(value) }} />
                            </div>
                            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, width: 48, textAlign: 'right', color: getStatusText(value) }}>{value}%</span>
                            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: 80, textAlign: 'right' }}>{getStatusLabel(value)}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </div>

        <div className="card" style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)' }}>
            <span style={{ fontWeight: 500, color: 'var(--color-text-secondary)' }}>Legend</span>
            {[
              { color: 'var(--color-success)', label: 'Strong (80-100%)' },
              { color: 'var(--color-warning)', label: 'Average (50-79%)' },
              { color: 'var(--color-danger)',  label: 'Weak (0-49%)' },
              { color: 'var(--color-border)',  label: 'Not studied' },
            ].map((item) => (
              <span key={item.label} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 2. WEAKNESS FINDER
// ============================================================
export function ShowcaseWeaknessFinder({ onNavigate }) {
  const [showAI, setShowAI] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)

  const aiCallsRemaining = 4
  const aiLimitReached = false
  const alreadyDoneToday = true
  const todaySnapshot = { generatedAt: new Date().toISOString() }

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 600)
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-danger-light)' }}>
              <Brain size={20} style={{ color: 'var(--color-danger)' }} />
            </div>
            <div>
              <h1 className="h2">Weakness Finder</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>AI-powered analysis</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button onClick={handleRefresh} disabled={refreshing} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw size={16} />
            </button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        <div style={{
          padding: 'var(--space-3) var(--space-4)',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--color-success-light)',
          border: '1px solid var(--color-success)',
          marginBottom: 'var(--space-4)',
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        }}>
          <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>Daily weakness check complete</div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
              Checked at {new Date(todaySnapshot.generatedAt).toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu size={16} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              AI Calls Remaining: <strong>{aiCallsRemaining}</strong> / 5
            </span>
          </div>
          {aiLimitReached && <span className="badge badge-danger">Limit Reached</span>}
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle size={20} /><span>{error}</span>
            </div>
          </div>
        )}

        <div className="grid-2" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-danger)' }}>{WEAK_TOPICS.length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Weak Topics</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{Math.round(WEAK_TOPICS.reduce((a, t) => a + t.accuracy, 0) / WEAK_TOPICS.length)}%</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Avg Accuracy</div></div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button
            onClick={() => setShowAI((v) => !v)}
            className="btn btn-primary"
            style={{ fontSize: 'var(--font-size-sm)' }}
          >
            <CheckCircle2 size={16} /> {showAI ? 'Hide AI Insights' : '✓ Checked today — view'}
          </button>
        </div>

        {showAI && (
          <div className="card" style={{ marginBottom: 'var(--space-6)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
              <Sparkles size={20} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>AI Insights</span>
              <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>Powered by AI</span>
            </div>

            <div style={{ marginBottom: 'var(--space-3)' }}>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{AI_ANALYSIS.summary}</p>
            </div>

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {AI_ANALYSIS.weakTopics.map((item, idx) => (
                <div key={idx} className="card" style={{ background: 'var(--color-surface)' }}>
                  <div className="flex-between">
                    <div>
                      <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>{item.topic}</div>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginTop: 'var(--space-1)' }}>
                        <span className="badge badge-danger">{item.accuracy}%</span>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Priority: {item.priority}</span>
                      </div>
                    </div>
                  </div>
                  {item.recommendations && (
                    <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                      💡 {item.recommendations}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-3)' }}>
              Generated: {new Date(AI_ANALYSIS.generatedAt).toLocaleString()}
            </div>
          </div>
        )}

        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          {WEAK_TOPICS.map((item) => (
            <div key={item.topic} className="card card-hover">
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                    {item.topic}
                    {item.source && (
                      <span style={{ fontSize: 10, marginLeft: 8, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {item.source}
                      </span>
                    )}
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 2, flexWrap: 'wrap' }}>
                    <span className={`badge ${item.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>{item.priority} Priority</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {item.mistakeCount} mistakes • {item.attempts} attempts
                    </span>
                  </div>
                  <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    {(item.recommendations ? [item.recommendations] : [`Practice ${item.topic} daily.`]).map((rec, i) => (
                      <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--color-primary)' }}>•</span><span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flexShrink: 0, marginLeft: 'var(--space-4)' }}>
                  <div className="h2" style={{ color: item.accuracy < 30 ? 'var(--color-danger)' : 'var(--color-warning)', margin: 0 }}>{item.accuracy}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card text-center" style={{
          marginTop: 'var(--space-6)', padding: 'var(--space-6)',
          background: 'var(--color-primary-light)', border: '2px dashed var(--color-primary)',
        }}>
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
            <BookOpen size={48} style={{ color: 'var(--color-primary)' }} />
            <h3 className="h3" style={{ color: 'var(--color-text)' }}>Ready to improve?</h3>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', maxWidth: 400, margin: '0 auto' }}>
              Go to the <strong>Dashboard</strong> and practice your weak subjects. Focus on the topics listed above to boost your mastery.
            </p>
            <ViewOnly tooltip="Sign up to go to dashboard">
              <button className="btn btn-primary btn-lg flex-center" onClick={() => onNavigate?.('dashboard')} style={{ marginTop: 'var(--space-2)' }}>
                <ArrowLeft size={16} /> Go to Dashboard
              </button>
            </ViewOnly>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 3. GAMIFICATION
// ============================================================
export function ShowcaseGamification({ onNavigate }) {
  const xpForNextLevel = XP_TABLE[GAMIFICATION.level - 1] || XP_TABLE[0]
  const progress = Math.min((GAMIFICATION.xp / xpForNextLevel) * 100, 100)

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
              <Gamepad2 size={20} style={{ color: 'var(--color-secondary)' }} />
            </div>
            <div>
              <h1 className="h2">Gamification</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Progress & achievements</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="card text-center" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="h1" style={{ color: 'var(--color-primary)' }}>{GAMIFICATION.xp.toLocaleString()}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
            <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>Level {GAMIFICATION.level}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>{GAMIFICATION.xp} / {xpForNextLevel} XP</span>
          </div>
          <div className="progress" style={{ marginTop: 'var(--space-1)' }}>
            <div className="progress-fill progress-fill-primary" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', textAlign: 'right' }}>
            {Math.round(progress)}% to Level {GAMIFICATION.level + 1}
          </div>
        </div>

        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: 'var(--color-warning-light)' }}>
              <Zap size={20} style={{ color: 'var(--color-warning)' }} />
            </div>
            <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>Daily Streak</span>
          </div>
          <span className="h2" style={{ color: 'var(--color-warning)' }}>{GAMIFICATION.streak}</span>
        </div>

        <div className="card">
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Award size={20} style={{ color: 'var(--color-primary)' }} />
              <h2 className="h3" style={{ margin: 0 }}>Badges</h2>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              {GAMIFICATION.badges.length} / {BADGE_DEFINITIONS.length}
            </span>
          </div>
          <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
            {BADGE_DEFINITIONS.map((badge) => {
              const unlocked = GAMIFICATION.badges.includes(badge.id)
              return (
                <div key={badge.id} className={`card text-center ${unlocked ? 'success-card' : ''}`} style={{ padding: 'var(--space-3)', opacity: unlocked ? 1 : 0.5 }}>
                  <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-1)' }}>{unlocked ? badge.icon : '🔒'}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 500, color: 'var(--color-text)' }}>{badge.label}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{badge.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 4. LEADERBOARDS
// ============================================================
export function ShowcaseLeaderboards({ onNavigate }) {
  const [filter, setFilter] = useState('global')
  const [selectedUser, setSelectedUser] = useState(null)
  const [statusLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)

  // demo statuses — cycling through the four cases
  const userStatusMap = {
    u1: { isFriend: true },
    u2: { outgoingRequestId: 'req_out_2' },
    u3: { incomingRequestId: 'req_in_3' },
    u4: { /* none — can add friend */ },
    u5: { isFriend: true },
    u6: { outgoingRequestId: 'req_out_6' },
    u7: { incomingRequestId: 'req_in_7' },
    u8: { /* none */ },
  }

  const openUser = (userId) => {
    if (!userId) return
    setSelectedUser(userId)
  }

  const closeUserModal = () => setSelectedUser(null)

  const sendFriendRequest = () => { setActionLoading(true); setTimeout(() => setActionLoading(false), 400) }
  const acceptIncoming = () => { setActionLoading(true); setTimeout(() => setActionLoading(false), 400) }
  const rejectIncoming = () => { setActionLoading(true); setTimeout(() => setActionLoading(false), 400) }

  const selectedInfo = selectedUser ? LEADERBOARD.find((u) => u.user_id === selectedUser) : null
  const userStatus = selectedUser ? { user: selectedInfo, ...(userStatusMap[selectedUser] || {}) } : null

  const getMedal = (rank) => {
    if (rank === 1) return <Crown size={20} style={{ color: 'var(--color-warning)' }} />
    if (rank === 2) return <Medal size={20} style={{ color: 'var(--color-text-muted)' }} />
    if (rank === 3) return <Medal size={20} style={{ color: 'var(--color-warning)' }} />
    return <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-muted)' }}>#{rank}</span>
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <Trophy size={20} style={{ color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2">Leaderboards</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Top performers</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          {['global', 'school', 'friends'].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`btn ${filter === f ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)', textTransform: 'capitalize' }}>
              {f}
            </button>
          ))}
        </div>

        <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
          <div className="grid" style={{
            gridTemplateColumns: '1fr 3fr 1fr 1fr', gap: 'var(--space-2)',
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--color-background)',
            borderBottom: '1px solid var(--color-border)',
            fontSize: 'var(--font-size-sm)', fontWeight: 500,
            color: 'var(--color-text-secondary)',
          }}>
            <div>Rank</div>
            <div>Name</div>
            <div style={{ textAlign: 'right' }}>XP</div>
            <div style={{ textAlign: 'right' }}>Level</div>
          </div>

          {LEADERBOARD.map((item) => (
            <ViewOnly key={item.user_id} tooltip="Sign up to view profiles">
              <button
                onClick={() => openUser(item.user_id)}
                className="grid"
                style={{
                  gridTemplateColumns: '1fr 3fr 1fr 1fr', gap: 'var(--space-2)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderBottom: '1px solid var(--color-border-light)',
                  alignItems: 'center', cursor: 'pointer',
                  background: 'transparent', border: 'none',
                  width: '100%', textAlign: 'left',
                }}
              >
                <div className="flex" style={{ alignItems: 'center', gap: 'var(--space-1)' }}>{getMedal(item.rank)}</div>
                <div>
                  <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>{item.name}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{item.school}</div>
                </div>
                <div style={{ textAlign: 'right', fontWeight: 700, color: 'var(--color-primary)' }}>{item.xp.toLocaleString()}</div>
                <div style={{ textAlign: 'right', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Lv.{item.level}</div>
              </button>
            </ViewOnly>
          ))}
        </div>

        <div className="card flex-between" style={{ marginTop: 'var(--space-4)' }}>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Total Players</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: 600, color: 'var(--color-text)' }}>{LEADERBOARD.length}</span>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Top XP</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: 600, color: 'var(--color-primary)' }}>{LEADERBOARD[0].xp.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {selectedUser && userStatus?.user && (
        <div className="modal-overlay" onClick={closeUserModal} style={{ zIndex: 200 }}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 360, width: '100%', padding: 'var(--space-5)' }}>
            {statusLoading ? (
              <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
                <Loader2 className="animate-spin" size={24} />
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                  <div className="flex-center" style={{
                    width: 64, height: 64, margin: '0 auto var(--space-3)',
                    borderRadius: '50%', background: 'var(--color-primary-light)',
                    fontWeight: 700, fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)',
                  }}>
                    {userStatus.user.name[0]}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>{userStatus.user.name}</div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>@{userStatus.user.username}</div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)', marginTop: 2 }}>{userStatus.user.school}</div>
                  <div className="flex" style={{ justifyContent: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                    <span className="badge badge-primary">{userStatus.user.xp.toLocaleString()} XP</span>
                    <span className="badge badge-muted">Lv.{userStatus.user.level}</span>
                  </div>
                </div>

                {userStatus.isFriend ? (
                  <button className="btn btn-outline flex-center" style={{ width: '100%' }} disabled>
                    <CheckCircle2 size={16} /> Friends
                  </button>
                ) : userStatus.outgoingRequestId ? (
                  <button className="btn btn-ghost flex-center" style={{ width: '100%' }} disabled>
                    <Clock size={16} /> Request sent
                  </button>
                ) : userStatus.incomingRequestId ? (
                  <div className="flex" style={{ gap: 'var(--space-2)' }}>
                    <ViewOnly tooltip="Sign up to accept">
                      <button className="btn btn-primary" style={{ flex: 1 }} onClick={acceptIncoming} disabled={actionLoading}>
                        {actionLoading ? <Loader2 size={14} className="animate-spin" /> : 'Accept'}
                      </button>
                    </ViewOnly>
                    <ViewOnly tooltip="Sign up to reject">
                      <button className="btn btn-outline" style={{ flex: 1 }} onClick={rejectIncoming} disabled={actionLoading}>Reject</button>
                    </ViewOnly>
                  </div>
                ) : (
                  <ViewOnly tooltip="Sign up to add friend">
                    <button className="btn btn-primary flex-center" style={{ width: '100%' }} onClick={sendFriendRequest} disabled={actionLoading}>
                      {actionLoading ? <Loader2 size={16} className="animate-spin" /> : <><UserPlus size={16} /> Add Friend</>}
                    </button>
                  </ViewOnly>
                )}

                <button className="btn btn-ghost" style={{ width: '100%', marginTop: 'var(--space-2)' }} onClick={closeUserModal}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
