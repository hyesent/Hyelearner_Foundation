// ============================================================
// HYELEARNER: FOUNDATION — ANALYTICS (SHOWCASE / PREVIEW)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, BarChart3, TrendingUp, Zap, Target, Flame, Calendar,
  Download, RefreshCw, CheckCircle2, XCircle, AlertCircle, BookOpen,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const STATS = {
  totalSessions: 47,
  totalQuestions: 620,
  correct: 484,
  wrong: 136,
  accuracy: 78,
  studyTime: 940, // minutes
  xp: 2340,
  level: 4,
  streak: 12,
  topicsMastered: 6,
  weakTopics: 3,
  mistakes: 18,
  dailyActivity: [
    { date: '2026-04-24', count: 2 },
    { date: '2026-04-25', count: 3 },
    { date: '2026-04-26', count: 1 },
    { date: '2026-04-27', count: 4 },
    { date: '2026-04-28', count: 2 },
    { date: '2026-04-29', count: 5 },
    { date: '2026-04-30', count: 3 },
  ],
  weeklyActivity: [
    { label: 'Week 1', count: 9  },
    { label: 'Week 2', count: 14 },
    { label: 'Week 3', count: 11 },
    { label: 'Week 4', count: 13 },
  ],
  subjectProgress: [
    { subject: 'Mathematics',      accuracy: 84, total: 180, correct: 151 },
    { subject: 'Physics',          accuracy: 72, total: 140, correct: 101 },
    { subject: 'Chemistry',        accuracy: 55, total: 120, correct: 66  },
    { subject: 'English Language', accuracy: 78, total: 110, correct: 86  },
    { subject: 'Biology',          accuracy: 68, total: 70,  correct: 48  },
  ],
}

const formatTime = (minutes) => {
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${h}m ${mins}m`.replace('hm', 'h')
}

// ============================================================
// MAIN
// ============================================================
export function ShowcaseAnalytics({ onNavigate }) {
  const [refreshing, setRefreshing] = useState(false)
  const stats = STATS

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 500)
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Analytics</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your study performance overview</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw size={16} />
            </button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        {/* Primary stats */}
        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)' }}>{stats.totalSessions}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Sessions</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: stats.accuracy >= 70 ? 'var(--color-success)' : stats.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
              {stats.accuracy}%
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-warning)' }}>{formatTime(stats.studyTime)}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Study Time</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)' }}>{stats.xp.toLocaleString()}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div>
          </div>
        </div>

        {/* Secondary stats */}
        <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Questions</div>
            <div className="h3" style={{ margin: 0 }}>{stats.totalQuestions}</div>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', fontSize: 'var(--font-size-sm)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                <CheckCircle2 size={14} style={{ display: 'inline' }} /> {stats.correct}
              </span>
              <span style={{ color: 'var(--color-danger)' }}>
                <XCircle size={14} style={{ display: 'inline' }} /> {stats.wrong}
              </span>
            </div>
          </div>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Mastery</div>
            <div className="h3" style={{ margin: 0 }}>{stats.topicsMastered}</div>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', fontSize: 'var(--font-size-sm)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                <CheckCircle2 size={14} style={{ display: 'inline' }} /> Mastered
              </span>
              <span style={{ color: 'var(--color-danger)' }}>
                <AlertCircle size={14} style={{ display: 'inline' }} /> {stats.weakTopics} Weak
              </span>
            </div>
          </div>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Streak</div>
            <div className="h3" style={{ margin: 0, color: 'var(--color-warning)' }}>
              <Flame size={20} style={{ display: 'inline' }} /> {stats.streak}
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              <BookOpen size={14} style={{ display: 'inline' }} /> Mistakes: {stats.mistakes}
            </div>
          </div>
        </div>

        {/* Daily Activity */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: 600 }}>Daily Activity (Last 7 Days)</span>
            </div>
          </div>
          {stats.dailyActivity.some((d) => d.count > 0) ? (
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'space-between', alignItems: 'flex-end', height: 120 }}>
              {stats.dailyActivity.map((day, i) => {
                const max = Math.max(1, ...stats.dailyActivity.map((d) => d.count))
                const height = (day.count / max) * 100
                return (
                  <div key={i} className="flex-col" style={{ alignItems: 'center', flex: 1 }}>
                    <div className="flex-center" style={{
                      width: '100%',
                      height: `${Math.max(10, height)}px`,
                      background: 'var(--color-primary)',
                      borderRadius: 'var(--radius-sm)',
                      minHeight: 10,
                    }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'white', fontWeight: 'bold' }}>{day.count}</span>
                    </div>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                      {day.date.slice(5)}
                    </span>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No activity data yet. Start practicing!</p>
          )}
        </div>

        {/* Weekly Activity */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <TrendingUp size={20} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: 600 }}>Weekly Activity</span>
            </div>
          </div>
          {stats.weeklyActivity.some((w) => w.count > 0) ? (
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'space-between' }}>
              {stats.weeklyActivity.map((week, i) => (
                <div key={i} className="stat-card" style={{ flex: 1, textAlign: 'center', padding: 'var(--space-2)' }}>
                  <div className="h3" style={{ margin: 0, color: 'var(--color-primary)' }}>{week.count}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{week.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No weekly data yet.</p>
          )}
        </div>

        {/* Subject Progress */}
        <div className="card">
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Target size={20} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: 600 }}>Subject Progress</span>
            </div>
          </div>
          {stats.subjectProgress.length > 0 ? (
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {stats.subjectProgress.map((sub, i) => (
                <div key={i}>
                  <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'var(--color-text)' }}>{sub.subject}</span>
                    <span style={{ color: sub.accuracy >= 70 ? 'var(--color-success)' : sub.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                      {sub.accuracy}% ({sub.total} Qs)
                    </span>
                  </div>
                  <div className="progress">
                    <div className={`progress-fill ${sub.accuracy >= 70 ? 'progress-fill-success' : sub.accuracy >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`} style={{ width: `${sub.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No subject data yet. Complete some practice sessions.</p>
          )}
        </div>

        {/* Export */}
        <div style={{ marginTop: 'var(--space-6)' }}>
          <ViewOnly tooltip="Sign up to export your report">
            <button className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
              <Download size={16} /> Export Report (PDF)
            </button>
          </ViewOnly>
        </div>
      </div>
    </div>
  )
}
