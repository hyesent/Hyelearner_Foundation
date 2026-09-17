// ============================================================
// HYELEARNER: DAILY TUTOR — CARD
// Entry card on HyeTutor page
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { BookOpen, PlayCircle, CheckCircle2, Clock, ChevronRight, Sparkles, Lock, Loader2 } from 'lucide-react'

const CACHE_KEY = 'hyelearner_daily_tutor_v1'
const STUDY_PLAN_KEY = 'hyelearner_study_plan_v2'

const getTodayKey = () => new Date().toISOString().split('T')[0]

const readTodaySession = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed?.sessions?.[getTodayKey()] || null
  } catch { return null }
}

const readTodayPlanTopic = () => {
  try {
    const raw = localStorage.getItem(STUDY_PLAN_KEY)
    if (!raw) return null
    const plan = JSON.parse(raw)
    const schedule = plan?.plan?.weekly_schedule || []
    const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const entry = schedule.find((d) => d.day?.toLowerCase() === todayName.toLowerCase())
    if (!entry || !entry.topics?.length) return null
    return entry.topics[0]
  } catch { return null }
}

export function DailyTutorCard({ onOpen }) {
  const [session, setSession] = useState(null)
  const [planTopic, setPlanTopic] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = () => {
      setSession(readTodaySession())
      setPlanTopic(readTodayPlanTopic())
      setLoading(false)
    }
    load()

    const onStorage = (e) => {
      if (e.key === CACHE_KEY || e.key === STUDY_PLAN_KEY) load()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const cardStyle = { padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-border)', transition: 'all var(--transition)' }

  const headerRow = (
    <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
      <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
      <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Daily</span>
      <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Tutor</span>
      <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}><Sparkles size={12} /> Personalized</span>
    </div>
  )

  if (loading) {
    return (
      <section className="card" style={{ ...cardStyle, cursor: 'default' }}>
        {headerRow}
        <div className="flex-center" style={{ padding: 'var(--space-3)' }}>
          <Loader2 size={18} style={{ color: 'var(--color-text-muted)', animation: 'spin 1s linear infinite' }} />
        </div>
      </section>
    )
  }

  // No plan
  if (!planTopic && !session) {
    return (
      <section className="card card-hover" style={cardStyle} onClick={() => onOpen?.({ needsPlan: true })}>
        {headerRow}
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Lock size={14} style={{ color: 'var(--color-text-muted)' }} /> Set up a Study Plan first
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>
              Daily Tutor follows your plan and teaches you one topic a day
            </div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
        </div>
      </section>
    )
  }

  // Pending
  if (planTopic && !session) {
    return (
      <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-primary)', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)' }} onClick={() => onOpen?.({ action: 'start' })}>
        {headerRow}
        <div style={{ marginBottom: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: 4 }}>TODAY'S TOPIC</div>
          <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>{planTopic.topic}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>
            {planTopic.subject}{planTopic.hours ? ` · ~${Math.round(planTopic.hours * 60)} min` : ''}
          </div>
        </div>
        <button className="btn btn-primary flex-center" style={{ width: '100%' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'start' }) }}>
          <PlayCircle size={16} /> Start Today's Lesson
        </button>
      </section>
    )
  }

  // In progress
  if (session && session.status === 'in_progress') {
    const stepLabel =
      session.currentStep === 'lesson' ? 'Lesson in progress' :
      session.currentStep === 'quiz' ? 'Quiz in progress' :
      session.currentStep === 'result' ? 'Result ready' :
      session.currentStep === 'reflection' ? 'Reflection pending' : 'In progress'

    return (
      <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-warning)' }} onClick={() => onOpen?.({ action: 'resume' })}>
        {headerRow}
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-warning)', marginBottom: 4 }}>
              ⏸ {stepLabel.toUpperCase()}
            </div>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)' }}>{session.topic}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>{session.subject}</div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
        </div>
        <button className="btn btn-warning flex-center" style={{ width: '100%' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'resume' }) }}>
          <PlayCircle size={16} /> Continue
        </button>
      </section>
    )
  }

  // Completed
  if (session && session.status === 'completed') {
    const accuracy = session.result?.accuracy ?? null
    const passed = accuracy !== null && accuracy >= 70

    return (
      <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-success)' }} onClick={() => onOpen?.({ action: 'review' })}>
        {headerRow}
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 4 }}>
              <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
              <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-success)' }}>DAY COMPLETE</span>
              {accuracy !== null && (
                <span className={`badge ${passed ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)' }}>{accuracy}%</span>
              )}
            </div>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)' }}>{session.topic}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <span>{session.subject}</span>
              {session.result?.xpEarned ? (
                <>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-border)' }} />
                  <span>+{session.result.xpEarned} XP</span>
                </>
              ) : null}
              {session.reflection?.feeling ? (
                <>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-border)' }} />
                  <span>{session.reflection.feeling === 'clear' ? '😄' : session.reflection.feeling === 'okay' ? '😐' : '😕'} {session.reflection.feeling}</span>
                </>
              ) : null}
            </div>
          </div>
          <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
        </div>
        <button className="btn btn-outline flex-center" style={{ width: '100%', marginTop: 'var(--space-3)' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'review' }) }}>
          <Clock size={16} /> Review Today's Lesson
        </button>
      </section>
    )
  }

  return null
}
