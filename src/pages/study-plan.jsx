// ============================================================
// HYELEARNER: FOUNDATION — STUDY PLAN (V5 — DB-backed)
// Auto-countdown + Daily Tutor CTA + real readiness math
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useProgress } from '../hooks'
import { useHydration } from '../context'
import { storage } from '../storage'
import { ai, subscriptions, studyPlan as studyPlanService } from '../services'
import { SUBJECTS, AI_LIMITS } from '../constants'
import { trackAIUsage } from '../utils'
import { LoadingScreen } from '../components/LoadingScreen'
import { DailyTutorModal } from './hyetutor/components'
import jsPDF from 'jspdf'
import {
  ArrowLeft, Calendar, Trash2, Loader2, Sparkles, Target, Clock,
  CheckCircle2, AlertCircle, Zap, Download, RefreshCw, Cpu, Brain,
  Award, BookOpen, TrendingUp, BarChart3, Lightbulb, Trophy, Crown,
  Lock, FileText, PlayCircle, StopCircle, Timer, Star,
} from 'lucide-react'

// ============================================================
// COUNTDOWN — drift-free (computes from target date every tick)
// ============================================================
function CountdownTimer({ targetDate, onEnd }) {
  const [now, setNow] = useState(() => Date.now())
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = new Date(`${targetDate}T00:00:00`).getTime()
  const remaining = Math.max(0, target - now)

  useEffect(() => {
    if (remaining <= 0 && !ended) {
      setEnded(true)
      if (onEnd) onEnd()
    }
  }, [remaining, ended, onEnd])

  if (ended || remaining <= 0) {
    return (
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-danger)' }}>
        <StopCircle size={20} />
        <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>Exam Day! 🎯</span>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>— Plan Complete</span>
      </div>
    )
  }

  const days = Math.floor(remaining / 86400000)
  const hours = Math.floor((remaining % 86400000) / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  return (
    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
      <Timer size={20} style={{ color: 'var(--color-primary)' }} />
      <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>{days}d</span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>{String(hours).padStart(2, '0')}h</span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>{String(minutes).padStart(2, '0')}m</span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)' }}>{String(seconds).padStart(2, '0')}s</span>
      </div>
      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>remaining</span>
    </div>
  )
}

// ============================================================
// DAILY TUTOR CTA — inline
// ============================================================
function DailyTutorCTA({ onOpen, plan }) {
  const [session, setSession] = useState(null)
  const [todayTopic, setTodayTopic] = useState(null)

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem('hyelearner_daily_tutor_v1')
        const today = new Date().toISOString().split('T')[0]
        const cached = raw ? JSON.parse(raw) : null
        setSession(cached?.sessions?.[today] || null)

        const schedule = plan?.plan?.weekly_schedule || []
        const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
        const entry = schedule.find((d) => d.day?.toLowerCase() === todayName.toLowerCase())
        setTodayTopic(entry?.topics?.[0] || null)
      } catch { setSession(null); setTodayTopic(null) }
    }
    load()
    const onStorage = (e) => { if (e.key === 'hyelearner_daily_tutor_v1') load() }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [plan])

  if (!todayTopic) return null

  const isCompleted = session?.status === 'completed'
  const isInProgress = session?.status === 'in_progress'
  const accuracy = session?.result?.accuracy ?? null

  if (isCompleted) {
    return (
      <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--color-success)', background: 'var(--color-success-light)' }}>
        <div className="flex-between" style={{ gap: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', minWidth: 0 }}>
            <div className="flex-center" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-surface)', flexShrink: 0 }}>
              <CheckCircle2 size={22} style={{ color: 'var(--color-success)' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-success)', marginBottom: 2 }}>✅ DAY COMPLETE</div>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>{session.topic}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>
                {session.subject}{accuracy !== null && ` · ${accuracy}% on quiz`}
              </div>
            </div>
          </div>
          <button onClick={() => onOpen()} className="btn btn-outline" style={{ flexShrink: 0 }}>Review</button>
        </div>
      </div>
    )
  }

  if (isInProgress) {
    const stepLabel =
      session.currentStep === 'lesson' ? 'Lesson in progress' :
      session.currentStep === 'quiz' ? 'Quiz in progress' :
      session.currentStep === 'result' ? 'Result ready' :
      session.currentStep === 'reflection' ? 'Almost done' : 'In progress'

    return (
      <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--color-warning)', background: 'linear-gradient(135deg, var(--color-warning-light) 0%, var(--color-surface) 100%)' }}>
        <div className="flex-between" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', minWidth: 0, flex: 1 }}>
            <div className="flex-center" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-surface)', flexShrink: 0 }}>
              <PlayCircle size={22} style={{ color: 'var(--color-warning)' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-warning)', marginBottom: 2 }}>⏸ {stepLabel.toUpperCase()}</div>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>{session.topic}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>{session.subject}</div>
            </div>
          </div>
          <button onClick={() => onOpen()} className="btn btn-warning" style={{ flexShrink: 0 }}>
            <PlayCircle size={16} /> Continue
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-5)', border: '2px solid var(--color-primary)', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)' }}>
      <div className="flex-between" style={{ gap: 'var(--space-4)', flexWrap: 'wrap' }}>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flex: 1, minWidth: 220 }}>
          <div className="flex-center" style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', flexShrink: 0 }}>
            <BookOpen size={24} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: 4 }}>📚 TODAY'S LESSON</div>
            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>{todayTopic.topic}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>
              {todayTopic.subject}{todayTopic.hours ? ` · ~${Math.round(todayTopic.hours * 60)} min` : ''}
            </div>
          </div>
        </div>
        <button onClick={() => onOpen()} className="btn btn-primary btn-lg" style={{ flexShrink: 0, padding: 'var(--space-3) var(--space-6)', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}>
          <PlayCircle size={18} /> Start Daily Tutor
        </button>
      </div>
    </div>
  )
}

// ============================================================
// PLAN VIEW
// ============================================================
function PlanView({ planData, plan, onExportPDF, onRegenerate, exporting, generating }) {
  return (
    <>
      {(plan?.exam_info || planData?.summary) && (
        <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)' }}>
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            {plan?.exam_info?.exam_type && (
              <div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Exam</div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>{plan.exam_info.exam_type.toUpperCase()}</div>
              </div>
            )}
            {planData?.summary?.weak_areas?.length > 0 && (
              <div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Weak Areas</div>
                <div className="flex" style={{ gap: 'var(--space-1)', flexWrap: 'wrap' }}>
                  {planData.summary.weak_areas.map((area, i) => (
                    <span key={i} className="badge badge-danger" style={{ fontSize: 'var(--font-size-xs)' }}>{area}</span>
                  ))}
                </div>
              </div>
            )}
            {planData?.summary?.target_score && (
              <div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Target</div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-primary)' }}>{planData.summary.target_score}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {planData?.subject_breakdown && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <BarChart3 size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Subject Breakdown</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {Object.entries(planData.subject_breakdown).map(([subject, data]) => (
              <div key={subject} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>{subject}</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{data.topics?.length || 0} topics • {data.hours_per_week}h/week</div>
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    {data.weak_count > 0 && <span className="badge badge-danger" style={{ fontSize: 'var(--font-size-xs)' }}>{data.weak_count} weak</span>}
                    <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>Priority: {data.priority || 'Normal'}</span>
                  </div>
                </div>
                {data.weak_topics?.length > 0 && (
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-danger)', marginTop: 'var(--space-1)' }}>
                    Focus: {data.recommended_focus || data.weak_topics.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {planData?.weekly_schedule && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Calendar size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Weekly Schedule</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {planData.weekly_schedule.slice(0, 7).map((day, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>{day.day}</div>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{day.total_hours}h</span>
                </div>
                {day.focus && <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Focus: {day.focus}</div>}
                <div className="stack" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-2)' }}>
                  {day.topics.map((topic, i) => (
                    <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-xs)' }}>
                      <span>{topic.subject} — {topic.topic}</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>{topic.hours}h</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {planData?.topic_priorities?.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Target size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Topic Priorities</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-2)', maxHeight: 200, overflowY: 'auto' }}>
            {planData.topic_priorities.slice(0, 10).map((topic, i) => (
              <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)' }}>
                <div>
                  <span style={{ color: 'var(--color-text)' }}>{topic.subject}</span>
                  <span style={{ color: 'var(--color-text-muted)' }}> — {topic.topic}</span>
                </div>
                <span className={`badge ${topic.priority === 'High' ? 'badge-danger' : topic.priority === 'Medium' ? 'badge-warning' : 'badge-success'}`} style={{ fontSize: 'var(--font-size-xs)' }}>{topic.priority}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {planData?.recommendations?.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Lightbulb size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Recommendations</span>
          </div>
          <ul className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {planData.recommendations.map((rec, i) => (
              <li key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)' }}>•</span>{rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {planData?.milestones?.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <Trophy size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Milestones</span>
          </div>
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            {planData.milestones.map((milestone, i) => (
              <div key={i} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', textAlign: 'center' }}>
                <div>
                  {milestone.icon === '🌱' ? <Sparkles size={32} style={{ color: 'var(--color-success)', margin: '0 auto' }} /> :
                   milestone.icon === '📈' ? <TrendingUp size={32} style={{ color: 'var(--color-primary)', margin: '0 auto' }} /> :
                   milestone.icon === '🎯' ? <Target size={32} style={{ color: 'var(--color-warning)', margin: '0 auto' }} /> :
                   milestone.icon === '🏆' ? <Trophy size={32} style={{ color: 'var(--color-warning)', margin: '0 auto' }} /> :
                   <Star size={32} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />}
                </div>
                <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>Day {milestone.day}: {milestone.percentage}%</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{milestone.target}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', marginTop: 'var(--space-1)' }}>
                  <Award size={14} style={{ display: 'inline', marginRight: 'var(--space-1)' }} />{milestone.reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <button onClick={onRegenerate} disabled={generating} className="btn btn-outline flex-1 flex-center">
          <RefreshCw size={16} /> Regenerate
        </button>
        <button onClick={onExportPDF} disabled={exporting} className="btn btn-primary flex-1 flex-center">
          {exporting ? <><Loader2 className="animate-spin" size={16} /> Exporting...</> : <><Download size={16} /> Export PDF</>}
        </button>
      </div>
    </>
  )
}

// ============================================================
// PROGRESS VIEW
// ============================================================
function ProgressView({ planData, plan }) {
  const [progressData, setProgressData] = useState(null)
  const [loading, setLoading] = useState(true)

  const calculateProgress = () => {
    if (!planData) return
    setLoading(true)

    const mastery = storage.getMastery()
    const sessions = storage.getSessions()

    const dailyTutorSessions = sessions.filter((s) => s.mode === 'daily_tutor')
    const completedDailySessions = dailyTutorSessions.filter((s) => s.status === 'completed')

    const quizAccuracies = completedDailySessions.map((s) => s.accuracy).filter((a) => typeof a === 'number' && a > 0)
    const quizAvg = quizAccuracies.length > 0 ? Math.round(quizAccuracies.reduce((a, b) => a + b, 0) / quizAccuracies.length) : 0

    let reflectionsClear = 0
    let reflectionsTotal = 0
    try {
      const raw = localStorage.getItem('hyelearner_daily_tutor_v1')
      const cache = raw ? JSON.parse(raw) : null
      Object.values(cache?.sessions || {}).forEach((s) => {
        if (s.reflection?.feeling) {
          reflectionsTotal++
          if (s.reflection.feeling === 'clear') reflectionsClear++
        }
      })
    } catch {}
    const confidencePct = reflectionsTotal > 0 ? Math.round((reflectionsClear / reflectionsTotal) * 100) : 0

    let daysElapsed = 1
    if (plan?.exam_date) {
      const examDays = planData?.summary?.days_remaining || 0
      const totalPlanDays = examDays + completedDailySessions.length
      daysElapsed = Math.max(1, totalPlanDays - examDays)
    }
    const adherence = daysElapsed > 0 ? Math.min(100, Math.round((completedDailySessions.length / daysElapsed) * 100)) : 0

    const gamification = storage.getGamification() || {}
    const streak = gamification.streak || 0
    const streakConsistency = Math.min(100, streak * 10)

    const readiness = Math.round(adherence * 0.4 + quizAvg * 0.4 + streakConsistency * 0.2)

    const allTopics = []
    if (planData.weekly_schedule) {
      planData.weekly_schedule.forEach((day) => {
        day.topics.forEach((topic) => {
          if (!allTopics.find((t) => t.topic === topic.topic && t.subject === topic.subject)) {
            allTopics.push({ topic: topic.topic, subject: topic.subject, hours: topic.hours || 0 })
          }
        })
      })
    }

    const topicProgress = allTopics.map((t) => {
      const masteryKey = Object.keys(mastery).find((key) => key.toLowerCase().includes(t.topic.toLowerCase()) || t.topic.toLowerCase().includes(key.toLowerCase()))
      const masteryData = masteryKey ? mastery[masteryKey] : null
      const topicSessions = sessions.filter((s) => {
        if (s.topic && s.topic.toLowerCase().includes(t.topic.toLowerCase())) return true
        if (s.questions) return s.questions.some((q) => q.topic && q.topic.toLowerCase().includes(t.topic.toLowerCase()))
        return false
      })
      const accuracy = masteryData?.accuracy || 0
      const status = accuracy >= 80 ? 'completed' : accuracy > 0 ? 'in-progress' : 'not-started'
      return { ...t, mastery: accuracy, sessions: topicSessions.length, status }
    })

    const total = topicProgress.length
    const completed = topicProgress.filter((t) => t.status === 'completed').length
    const inProgress = topicProgress.filter((t) => t.status === 'in-progress').length
    const notStarted = topicProgress.filter((t) => t.status === 'not-started').length
    const overallCompletion = total > 0 ? Math.round((completed / total) * 100) : 0

    const subjectBreakdown = {}
    topicProgress.forEach((t) => {
      if (!subjectBreakdown[t.subject]) subjectBreakdown[t.subject] = { total: 0, completed: 0, inProgress: 0, notStarted: 0, topics: [] }
      subjectBreakdown[t.subject].total++
      if (t.status === 'completed') subjectBreakdown[t.subject].completed++
      else if (t.status === 'in-progress') subjectBreakdown[t.subject].inProgress++
      else subjectBreakdown[t.subject].notStarted++
      subjectBreakdown[t.subject].topics.push(t)
    })

    const weeklyProgress = []
    if (planData.weekly_schedule) {
      planData.weekly_schedule.slice(0, 7).forEach((day) => {
        const weekTopics = day.topics.map((t) => {
          const found = topicProgress.find((p) => p.topic === t.topic && p.subject === t.subject)
          return found || { ...t, status: 'not-started', mastery: 0, sessions: 0 }
        })
        const weekCompleted = weekTopics.filter((t) => t.status === 'completed').length
        weeklyProgress.push({ day: day.day, topics: weekTopics, completed: weekCompleted, total: weekTopics.length, percentage: weekTopics.length > 0 ? Math.round((weekCompleted / weekTopics.length) * 100) : 0 })
      })
    }

    const topicPriorities = topicProgress.map((t) => ({ ...t, priority: t.mastery < 30 ? 'High' : t.mastery < 50 ? 'Medium' : 'Low' })).sort((a, b) => a.mastery - b.mastery)

    const milestones = []
    const totalDays = planData.summary?.days_remaining || 30
    const milestoneDays = [Math.floor(totalDays * 0.25), Math.floor(totalDays * 0.5), Math.floor(totalDays * 0.75), totalDays]
    const milestoneTargets = [25, 50, 75, 100]
    milestoneDays.forEach((day, idx) => {
      if (day > 0 && day <= totalDays) {
        const targetPercentage = milestoneTargets[idx]
        const isAchieved = overallCompletion >= targetPercentage
        milestones.push({ day, percentage: targetPercentage, target: `${targetPercentage}% of topics mastered`, reward: isAchieved ? '✅ Achieved!' : `${targetPercentage - overallCompletion}% to go`, icon: isAchieved ? '🏆' : '🎯' })
      }
    })

    const weakTopics = topicProgress.filter((t) => t.mastery < 50)
    const recommendations = []
    if (weakTopics.length > 0) recommendations.push(`Focus on these weak topics: ${weakTopics.map((t) => t.topic).join(', ')}`)
    if (adherence < 50 && completedDailySessions.length >= 2) recommendations.push("You're behind on Daily Tutor sessions. Try to complete one lesson per day.")
    if (confidencePct > 0 && confidencePct < 40 && reflectionsTotal >= 3) recommendations.push('Your recent reflections suggest the material feels confusing. Slow down and revisit fundamentals.')
    if (overallCompletion < 30) recommendations.push('Increase your study hours to catch up on the plan')
    if (inProgress > 0) recommendations.push(`You have ${inProgress} topics in progress. Complete them to boost your mastery!`)
    if (completed > 0) recommendations.push(`Great job! You've mastered ${completed} topics. Keep going!`)

    setProgressData({
      topicProgress, total, completed, inProgress, notStarted, overallCompletion,
      weeklyProgress, subjectBreakdown, topicPriorities, milestones, recommendations,
      weakTopics: weakTopics.length,
      totalHours: topicProgress.reduce((sum, t) => sum + t.hours, 0),
      sessionsCompleted: sessions.filter((s) => s.status === 'completed').length,
      totalXP: gamification.totalXP || gamification.xp || 0,
      adherence, quizAvg, confidencePct, readiness,
      dailyTutorCount: completedDailySessions.length, reflectionsTotal,
    })
    setLoading(false)
  }

  useEffect(() => { calculateProgress() }, [planData])
  useEffect(() => {
    const interval = setInterval(() => calculateProgress(), 30000)
    return () => clearInterval(interval)
  }, [planData])

  if (loading || !progressData) {
    return <div className="flex-center" style={{ padding: 'var(--space-8)' }}><div className="spinner spinner-sm"></div></div>
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
      case 'in-progress': return <PlayCircle size={16} style={{ color: 'var(--color-warning)' }} />
      default: return <Clock size={16} style={{ color: 'var(--color-text-muted)' }} />
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      default: return 'Not Started'
    }
  }

  const readinessColor = progressData.readiness >= 70 ? 'var(--color-success)' : progressData.readiness >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'
  const adherenceColor = progressData.adherence >= 70 ? 'var(--color-success)' : progressData.adherence >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'

  return (
    <>
      <div className="card" style={{ marginBottom: 'var(--space-5)', padding: 'var(--space-5)', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)', border: '1px solid var(--color-primary)' }}>
        <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: 4 }}>EXAM READINESS</div>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: readinessColor, lineHeight: 1 }}>{progressData.readiness}%</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 6 }}>
              Adherence {progressData.adherence}% · Quiz avg {progressData.quizAvg}%
            </div>
          </div>
          <div className="flex-center" style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--color-surface)' }}>
            <TrendingUp size={32} style={{ color: readinessColor }} />
          </div>
        </div>
        <div className="progress" style={{ height: 8, marginTop: 'var(--space-3)' }}>
          <div className={`progress-fill ${progressData.readiness >= 70 ? 'progress-fill-success' : progressData.readiness >= 40 ? 'progress-fill-warning' : 'progress-fill-danger'}`} style={{ width: `${progressData.readiness}%` }} />
        </div>
      </div>

      <div className="grid-3" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: adherenceColor }}>{progressData.adherence}%</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>On Schedule</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{progressData.dailyTutorCount} lessons done</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: progressData.quizAvg >= 70 ? 'var(--color-success)' : progressData.quizAvg >= 40 ? 'var(--color-warning)' : 'var(--color-danger)' }}>{progressData.quizAvg}%</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Quiz Average</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>across all lessons</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: progressData.confidencePct >= 70 ? 'var(--color-success)' : progressData.confidencePct >= 40 ? 'var(--color-warning)' : 'var(--color-danger)' }}>{progressData.confidencePct}%</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Confidence</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{progressData.reflectionsTotal} reflections</div>
        </div>
      </div>

      <div className="grid-4" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{progressData.overallCompletion}%</div><div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Overall Progress</div></div>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{progressData.completed}</div><div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Completed</div></div>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{progressData.inProgress}</div><div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>In Progress</div></div>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-text-muted)' }}>{progressData.notStarted}</div><div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Not Started</div></div>
      </div>

      {Object.keys(progressData.subjectBreakdown).length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <BarChart3 size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Subject Progress</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {Object.entries(progressData.subjectBreakdown).map(([subject, data]) => {
              const subjectProgress = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0
              return (
                <div key={subject} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                  <div className="flex-between">
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>{subject}</div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{data.completed}/{data.total} completed • {data.inProgress} in progress • {data.notStarted} not started</div>
                    </div>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>{subjectProgress}%</span>
                  </div>
                  <div className="progress" style={{ marginTop: 'var(--space-1)' }}>
                    <div className={`progress-fill ${subjectProgress >= 80 ? 'progress-fill-success' : subjectProgress >= 50 ? 'progress-fill-warning' : 'progress-fill-primary'}`} style={{ width: `${subjectProgress}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {progressData.weeklyProgress.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Calendar size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Weekly Progress</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {progressData.weeklyProgress.map((week, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>{week.day}</div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{week.completed}/{week.total} done</span>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>{week.percentage}%</span>
                  </div>
                </div>
                <div className="progress" style={{ marginBottom: 'var(--space-2)' }}>
                  <div className={`progress-fill ${week.percentage >= 80 ? 'progress-fill-success' : week.percentage >= 50 ? 'progress-fill-warning' : 'progress-fill-primary'}`} style={{ width: `${week.percentage}%` }} />
                </div>
                <div className="stack" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-1)' }}>
                  {week.topics.map((topic, i) => (
                    <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-xs)' }}>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                        {getStatusIcon(topic.status)}
                        <span style={{ color: topic.status === 'completed' ? 'var(--color-success)' : 'var(--color-text)' }}>{topic.subject} — {topic.topic}</span>
                        {topic.mastery > 0 && <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{topic.mastery}%</span>}
                      </div>
                      <span style={{ color: 'var(--color-text-muted)' }}>{getStatusLabel(topic.status)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {progressData.topicPriorities.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Target size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Topic Mastery</span>
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{progressData.weakTopics} weak</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-2)', maxHeight: 300, overflowY: 'auto' }}>
            {progressData.topicPriorities.map((topic, i) => (
              <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)', borderLeft: `3px solid ${topic.mastery >= 80 ? 'var(--color-success)' : topic.mastery >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'}` }}>
                <div>
                  <span style={{ color: 'var(--color-text)' }}>{topic.subject}</span>
                  <span style={{ color: 'var(--color-text-muted)' }}> — {topic.topic}</span>
                  {topic.mastery < 50 && <span style={{ color: 'var(--color-danger)', marginLeft: 'var(--space-1)' }}>⚠️</span>}
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: topic.mastery >= 80 ? 'var(--color-success)' : topic.mastery >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>{topic.mastery}%</span>
                  <span className={`badge ${topic.priority === 'High' ? 'badge-danger' : topic.priority === 'Medium' ? 'badge-warning' : 'badge-success'}`} style={{ fontSize: 'var(--font-size-xs)' }}>{topic.priority}</span>
                  <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{topic.sessions} sessions</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {progressData.milestones.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <Trophy size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Milestones</span>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>{progressData.milestones.filter((m) => m.reward.includes('✅')).length} achieved</span>
          </div>
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            {progressData.milestones.map((milestone, i) => {
              const isAchieved = milestone.reward.includes('✅')
              return (
                <div key={i} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: isAchieved ? 'var(--color-success-light)' : 'var(--color-background)', textAlign: 'center', border: isAchieved ? '1px solid var(--color-success)' : '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: 'var(--font-size-3xl)' }}>{isAchieved ? '🏆' : '🎯'}</div>
                  <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>Day {milestone.day}: {milestone.percentage}%</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{milestone.target}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: isAchieved ? 'var(--color-success)' : 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                    {isAchieved ? '✅ Completed!' : `Progress: ${progressData.overallCompletion}%`}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {progressData.recommendations.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Lightbulb size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 500 }}>Recommendations</span>
          </div>
          <ul className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {progressData.recommendations.map((rec, i) => (
              <li key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)' }}>•</span>{rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

// ============================================================
// MAIN STUDY PLAN PAGE
// ============================================================
export function StudyPlanPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { updateProgress } = useProgress()
  const { studyPlan: hydratedPlan, refreshHydration } = useHydration()

  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [plan, setPlan] = useState(null)
  const [planData, setPlanData] = useState(null)
  const [error, setError] = useState(null)
  const [hasPlan, setHasPlan] = useState(false)
  const [viewMode, setViewMode] = useState('plan')
  const [aiLimitReached, setAiLimitReached] = useState(false)
  const [aiCallsRemaining, setAiCallsRemaining] = useState(AI_LIMITS.daily)
  const [exporting, setExporting] = useState(false)
  const [planEnded, setPlanEnded] = useState(false)
  const [showDailyTutor, setShowDailyTutor] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

  const [formData, setFormData] = useState({
    goal: '', subjects: [], hours_per_week: '', days_until_exam: '',
    target_score: '', study_style: '', exam_type: '', exam_date: '',
  })

  const subjectOptions = Object.keys(SUBJECTS).map((key) => ({ key, label: SUBJECTS[key].label, icon: SUBJECTS[key].icon }))

  const studyStyles = [
    { value: 'active', label: 'Active Learning' },
    { value: 'visual', label: 'Visual Learning' },
    { value: 'reading', label: 'Reading/Writing' },
    { value: 'balanced', label: 'Balanced' },
  ]

  const examTypes = [
    { value: 'jamb', label: 'JAMB' }, { value: 'waec', label: 'WAEC' },
    { value: 'neco', label: 'NECO' }, { value: 'ssce', label: 'SSCE' },
    { value: 'pre-university', label: 'Pre-University' },
  ]

  const getDefaultExamDate = (examType) => {
    const now = new Date()
    const year = now.getFullYear()
    if (examType === 'jamb') return `${year}-06-15`
    if (examType === 'waec') return `${year}-06-30`
    if (examType === 'neco') return `${year}-07-31`
    if (examType === 'ssce') return `${year}-12-15`
    if (examType === 'pre-university') return `${year}-09-01`
    const d = new Date(now); d.setDate(now.getDate() + 90)
    return d.toISOString().split('T')[0]
  }

  const calculateDaysRemaining = (date) => {
    if (!date) return 0
    return Math.max(0, Math.ceil((new Date(date) - new Date()) / 86400000))
  }

  useEffect(() => {
    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch { setSubscription({ isActive: false }) }
      finally { setSubLoading(false) }
    }
    loadSubscription()
  }, [])

  // Load plan from hydration
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem('hyelearner_ai_usage')
    if (saved) {
      const usage = JSON.parse(saved)
      if (usage.date === today) {
        const remaining = AI_LIMITS.daily - (usage.count || 0)
        setAiCallsRemaining(Math.max(0, remaining))
        setAiLimitReached(remaining <= 0)
      }
    }

    if (hydratedPlan) {
      setPlan(hydratedPlan)
      setPlanData(hydratedPlan.plan || hydratedPlan)
      setHasPlan(true)
      const savedExamDate = hydratedPlan.exam_date || hydratedPlan.exam_info?.exam_date
      if (savedExamDate) {
        const daysLeft = calculateDaysRemaining(savedExamDate)
        if (daysLeft <= 0) setPlanEnded(true)
        setFormData((prev) => ({ ...prev, exam_date: savedExamDate, exam_type: hydratedPlan.exam_info?.exam_type || prev.exam_type }))
      }
    } else {
      setPlan(null); setPlanData(null); setHasPlan(false)
    }
    setLoading(false)
  }, [hydratedPlan, user])

  const toggleSubject = (key) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(key) ? prev.subjects.filter((s) => s !== key) : [...prev.subjects, key],
    }))
  }

  const generatePlan = async () => {
    if (formData.subjects.length === 0) return alert('Please select at least one subject.')
    if (!formData.goal.trim()) return alert('Please enter your study goal.')
    if (!formData.exam_date) return alert('Please select your exam date.')
    if (aiLimitReached) return setError('AI limit reached. Please try again tomorrow.')

    setGenerating(true); setError(null)
    try {
      const subjectLabels = formData.subjects.map((key) => SUBJECTS[key]?.label || key)
      const result = await ai.studyPlanV2({
        goal: formData.goal, subjects: subjectLabels,
        hours_per_week: parseInt(formData.hours_per_week) || 15,
        days_until_exam: calculateDaysRemaining(formData.exam_date),
        target_score: formData.target_score || '300+',
        study_style: formData.study_style || 'active',
        exam_type: formData.exam_type || 'jamb',
        exam_date: formData.exam_date,
      })
      trackAIUsage()
      let totalTopics = 0
      if (result.plan?.weekly_schedule) result.plan.weekly_schedule.forEach((d) => { totalTopics += d.topics.length })
      if (result.plan?.summary) result.plan.summary.total_topics = totalTopics

      const planWithDate = {
        ...result,
        exam_date: formData.exam_date,
        exam_info: { ...(result.exam_info || {}), exam_type: formData.exam_type || 'jamb', exam_date: formData.exam_date },
        plan: { ...result.plan, exam_date: formData.exam_date },
      }
      setPlan(planWithDate); setPlanData(planWithDate.plan); setHasPlan(true); setPlanEnded(false)
      localStorage.setItem('hyelearner_study_plan_v2', JSON.stringify(planWithDate))
      if (refreshHydration) refreshHydration().catch(() => {})
    } catch (err) {
      setError(err.message || 'Failed to generate study plan. Please try again.')
    } finally { setGenerating(false) }
  }

  const handleExportPDF = () => {
    if (!planData) return alert('No study plan to export.')
    setExporting(true)
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const pw = doc.internal.pageSize.width
      const ph = doc.internal.pageSize.height
      const m = 20
      let y = m
      const check = (need) => { if (y + need > ph - m) { doc.addPage(); y = m } }

      doc.setFontSize(20); doc.setTextColor(79, 70, 229)
      doc.text('Hyelearner — Study Plan', pw / 2, y, { align: 'center' }); y += 10
      doc.setFontSize(10); doc.setTextColor(100, 100, 100)
      const dateStr = new Date().toISOString().slice(0, 10)
      doc.text(`Generated: ${dateStr}`, pw / 2, y, { align: 'center' }); y += 8
      doc.text(`Exam: ${(plan?.exam_info?.exam_type || formData.exam_type || 'JAMB').toUpperCase()}`, pw / 2, y, { align: 'center' }); y += 8
      doc.text(`Target: ${planData?.summary?.target_score || formData.target_score || '-'}`, pw / 2, y, { align: 'center' }); y += 10
      doc.setDrawColor(200); doc.line(m, y, pw - m, y); y += 8

      if (planData?.summary) {
        doc.setFontSize(12); doc.setTextColor(50)
        doc.text(`Days Remaining: ${planData.summary.days_remaining || 0}`, m, y); y += 7
        doc.text(`Total Hours: ${planData.summary.total_hours || 0}`, m, y); y += 7
        doc.text(`Total Topics: ${planData.summary.total_topics || 0}`, m, y); y += 10
      }

      if (planData?.weekly_schedule) {
        check(30); doc.setFontSize(14); doc.setTextColor(0)
        doc.text('Weekly Schedule', m, y); y += 7
        doc.setFontSize(9); doc.setTextColor(80)
        planData.weekly_schedule.slice(0, 7).forEach((day) => {
          check(20)
          const topics = day.topics.map((t) => `${t.subject} — ${t.topic} (${t.hours}h)`).join(', ')
          doc.text(`• ${day.day}: ${topics}`, m + 2, y); y += 6
        })
      }

      doc.setFontSize(8); doc.setTextColor(150)
      doc.text('Generated by Hyelearner', pw / 2, ph - 10, { align: 'center' })
      doc.save(`study-plan-${dateStr}.pdf`)
    } catch (e) {
      console.error(e); alert('Failed to export PDF.')
    } finally { setExporting(false) }
  }

  const handleReset = async () => {
    if (!confirm('Are you sure you want to reset your study plan?')) return
    try { await studyPlanService.reset() } catch {}
    localStorage.removeItem('hyelearner_study_plan_v2')
    setPlan(null); setPlanData(null); setHasPlan(false); setPlanEnded(false)
    if (refreshHydration) refreshHydration().catch(() => {})
  }

  const handleDailyTutorOpen = () => setShowDailyTutor(true)
  const isFreeUser = !subscription?.isActive

  if (loading || subLoading) return <LoadingScreen />

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div><h1 className="h2">Study Plan</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>AI-generated plan</p></div>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}><ArrowLeft size={16} /> Back</button>
          </div>
          <div className="card text-center" style={{ padding: 'var(--space-12)', maxWidth: 480, margin: '0 auto' }}>
            <div className="flex-center" style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--color-danger-light)', margin: '0 auto var(--space-6)' }}>
              <Lock size={40} style={{ color: 'var(--color-danger)' }} />
            </div>
            <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Study Plan is for Subscribers</h2>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>Upgrade to Foundation to unlock this feature.</p>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center' }}>
              <button onClick={() => navigate('/practice')} className="btn btn-outline flex-center"><Target size={16} /> Practice</button>
              <button onClick={() => navigate('/settings')} className="btn btn-primary flex-center"><Crown size={16} /> Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const examDate = plan?.exam_date || planData?.exam_date || plan?.exam_info?.exam_date || formData.exam_date || null

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Study Plan</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {hasPlan ? (planEnded ? 'Plan Complete! 🎯' : 'Your personalized study plan') : 'Generate your study plan'}
              </p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}><ArrowLeft size={16} /> Back</button>
        </div>

        {examDate && !planEnded && (
          <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
            <CountdownTimer targetDate={examDate} onEnd={() => setPlanEnded(true)} />
          </div>
        )}

        {hasPlan && !planEnded && <DailyTutorCTA onOpen={handleDailyTutorOpen} plan={plan} />}

        {hasPlan && planEnded && (
          <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-success-light)', border: '2px solid var(--color-success)', textAlign: 'center', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
              <Trophy size={24} style={{ color: 'var(--color-success)' }} />
              <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-success)' }}>🎉 Plan Complete!</span>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>You've successfully completed your study plan. Great job! 🚀</p>
          </div>
        )}

        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu size={16} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              AI Calls Remaining: <strong>{aiCallsRemaining}</strong> / {AI_LIMITS.daily}
            </span>
          </div>
          {aiLimitReached && <span className="badge badge-danger">Limit Reached</span>}
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><AlertCircle size={16} /><span>{error}</span></div></div>}

        {!hasPlan ? (
          <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); generatePlan() }} className="stack" style={{ gap: 'var(--space-5)' }}>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                Fill in your details to generate a personalized study plan.
              </p>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Target size={16} style={{ color: 'var(--color-primary)' }} /> Exam Type</label>
                <select className="select" value={formData.exam_type} onChange={(e) => { const newExam = e.target.value; setFormData((p) => ({ ...p, exam_type: newExam, exam_date: getDefaultExamDate(newExam) })) }}>
                  <option value="">Select exam type</option>
                  {examTypes.map((exam) => <option key={exam.value} value={exam.value}>{exam.label}</option>)}
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Calendar size={16} style={{ color: 'var(--color-primary)' }} /> Exam Date</label>
                <input type="date" className="input" value={formData.exam_date} onChange={(e) => setFormData((p) => ({ ...p, exam_date: e.target.value }))} required />
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Target size={16} style={{ color: 'var(--color-primary)' }} /> Your Goal</label>
                <input type="text" className="input" placeholder="e.g., Pass JAMB with 300+" value={formData.goal} onChange={(e) => setFormData((p) => ({ ...p, goal: e.target.value }))} required />
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Subjects ({formData.subjects.length} selected)</label>
                <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {subjectOptions.map((subject) => (
                    <button key={subject.key} type="button" onClick={() => toggleSubject(subject.key)} className={`btn ${formData.subjects.includes(subject.key) ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                      {subject.icon} {subject.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Clock size={16} style={{ color: 'var(--color-primary)' }} /> Hours/Week</label>
                <select className="select" value={formData.hours_per_week} onChange={(e) => setFormData((p) => ({ ...p, hours_per_week: e.target.value }))}>
                  <option value="">Select hours</option>
                  {[5, 10, 15, 20, 25, 30, 35, 40].map((h) => <option key={h} value={h}>{h} hours</option>)}
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Award size={16} style={{ color: 'var(--color-primary)' }} /> Target Score</label>
                <select className="select" value={formData.target_score} onChange={(e) => setFormData((p) => ({ ...p, target_score: e.target.value }))}>
                  <option value="">Select target score</option>
                  {['200+', '250+', '300+', '350+', '400+'].map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Brain size={16} style={{ color: 'var(--color-primary)' }} /> Study Style</label>
                <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {studyStyles.map((style) => (
                    <button key={style.value} type="button" onClick={() => setFormData((p) => ({ ...p, study_style: style.value }))} className={`btn ${formData.study_style === style.value ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)' }}>
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={generating || formData.subjects.length === 0 || !formData.exam_date || !formData.goal.trim()} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                {generating ? <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }} /> Generating...</> : <><Sparkles size={16} /> Generate Study Plan</>}
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <button onClick={() => setViewMode('plan')} className={`btn ${viewMode === 'plan' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}><FileText size={16} /> Plan</button>
              <button onClick={() => setViewMode('progress')} className={`btn ${viewMode === 'progress' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }} disabled={planEnded}><TrendingUp size={16} /> Progress</button>
              <button onClick={handleReset} className="btn btn-danger" style={{ background: 'var(--color-danger)', color: 'white' }}><Trash2 size={16} /></button>
            </div>

            {viewMode === 'plan' ? (
              <PlanView planData={planData} plan={plan} onExportPDF={handleExportPDF} onRegenerate={generatePlan} exporting={exporting} generating={generating} />
            ) : (
              <ProgressView planData={planData} plan={plan} />
            )}
          </>
        )}
      </div>

      <DailyTutorModal isOpen={showDailyTutor} onClose={() => setShowDailyTutor(false)} />
    </div>
  )
}
