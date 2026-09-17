// ============================================================
// HYELEARNER: DAILY TUTOR — HISTORY LIST
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { BookOpen, CheckCircle2, ChevronRight, Loader2, Calendar } from 'lucide-react'

const CACHE_KEY = 'hyelearner_daily_tutor_v1'

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return { sessions: {} }
    const parsed = JSON.parse(raw)
    if (!parsed.sessions) parsed.sessions = {}
    return parsed
  } catch {
    return { sessions: {} }
  }
}

const getWeekday = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' })
  } catch { return '' }
}

const getMonthDay = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  } catch { return dateStr }
}

export function DailyTutorHistory({ onSelect, limit = 60 }) {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cache = readCache()
    const list = Object.values(cache.sessions || {})
      .filter((s) => s.status === 'completed')
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
    setSessions(list)
    setLoading(false)
  }, [limit])

  if (loading) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-8)' }}>
        <Loader2 size={24} style={{ color: 'var(--color-primary)', animation: 'spin 1s linear infinite' }} />
      </div>
    )
  }

  if (sessions.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
        <Calendar size={40} style={{ margin: '0 auto var(--space-3)', color: 'var(--color-text-muted)', opacity: 0.5 }} />
        <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)' }}>No lessons yet</p>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 4 }}>
          Complete a Daily Tutor lesson to see it here.
        </p>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {sessions.map((s) => {
        const accuracy = s.result?.accuracy ?? null
        const passed = accuracy !== null && accuracy >= 70
        return (
          <button
            key={s.date}
            onClick={() => onSelect?.(s.date)}
            className="card card-hover"
            style={{ padding: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', cursor: 'pointer', background: 'var(--color-surface)' }}
          >
            <div className="flex-center" style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: passed ? 'var(--color-success-light)' : 'var(--color-warning-light)', flexShrink: 0 }}>
              <BookOpen size={20} style={{ color: passed ? 'var(--color-success)' : 'var(--color-warning)' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {getMonthDay(s.date)} · {getWeekday(s.date)}
                </span>
                {accuracy !== null && (
                  <span className={`badge ${passed ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
                    <CheckCircle2 size={10} /> {accuracy}%
                  </span>
                )}
              </div>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {s.topic}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                {s.subject}
              </div>
            </div>
            <ChevronRight size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          </button>
        )
      })}
    </div>
  )
}
