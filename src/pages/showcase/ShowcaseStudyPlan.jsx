// ============================================================
// HYELEARNER: FOUNDATION — STUDY PLAN (SHOWCASE / PREVIEW)
// Static replica of StudyPlanPage. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, Calendar, Trash2, Sparkles, Target, Clock,
  CheckCircle2, Download, RefreshCw, Cpu, Brain,
  Award, BookOpen, TrendingUp, BarChart3, Lightbulb, Trophy, Crown,
  FileText, PlayCircle, StopCircle, Timer, Star,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const PLAN = {
  exam_date: '2026-06-15',
  exam_info: { exam_type: 'jamb', exam_date: '2026-06-15' },
  plan: {
    exam_info: { exam_type: 'jamb', exam_date: '2026-06-15' },
    summary: {
      days_remaining: 45,
      total_hours: 90,
      total_topics: 28,
      target_score: '300+',
      weak_areas: ['Organic Chemistry', 'Trigonometry', 'Comprehension'],
    },
    subject_breakdown: {
      Mathematics: { topics: new Array(8), hours_per_week: 6, weak_count: 1, priority: 'High',   weak_topics: ['Trigonometry'] },
      Physics:     { topics: new Array(6), hours_per_week: 5, weak_count: 0, priority: 'Normal' },
      Chemistry:   { topics: new Array(5), hours_per_week: 4, weak_count: 1, priority: 'High',   weak_topics: ['Organic Chemistry'] },
      English:     { topics: new Array(5), hours_per_week: 4, weak_count: 1, priority: 'Normal', weak_topics: ['Comprehension'] },
      Biology:     { topics: new Array(4), hours_per_week: 3, weak_count: 0, priority: 'Low' },
    },
    weekly_schedule: [
      { day: 'Monday',    total_hours: 2.5, focus: 'Algebra & Mechanics',    topics: [
        { subject: 'Mathematics', topic: 'Quadratic Equations', hours: 1.5 },
        { subject: 'Physics',     topic: "Newton's Laws",       hours: 1.0 },
      ]},
      { day: 'Tuesday',   total_hours: 2.0, focus: 'Chemistry fundamentals', topics: [
        { subject: 'Chemistry', topic: 'Atomic Structure',    hours: 1.0 },
        { subject: 'English',   topic: 'Argumentative Essay', hours: 1.0 },
      ]},
      { day: 'Wednesday', total_hours: 2.5, focus: 'Biology & Comprehension', topics: [
        { subject: 'Biology', topic: 'Cell Division', hours: 1.5 },
        { subject: 'English', topic: 'Comprehension', hours: 1.0 },
      ]},
      { day: 'Thursday',  total_hours: 2.0, focus: 'Physics intensive', topics: [
        { subject: 'Physics', topic: 'Work, Energy & Power', hours: 2.0 },
      ]},
      { day: 'Friday',    total_hours: 2.5, focus: 'Math & Chemistry', topics: [
        { subject: 'Mathematics', topic: 'Trigonometry',      hours: 1.5 },
        { subject: 'Chemistry',   topic: 'Organic Chemistry', hours: 1.0 },
      ]},
      { day: 'Saturday',  total_hours: 3.0, focus: 'Practice tests', topics: [
        { subject: 'Mathematics', topic: 'Mock Test 1', hours: 1.5 },
        { subject: 'Physics',     topic: 'Mock Test 1', hours: 1.5 },
      ]},
      { day: 'Sunday',    total_hours: 1.0, focus: 'Review', topics: [
        { subject: 'English', topic: 'Vocabulary Review', hours: 1.0 },
      ]},
    ],
    topic_priorities: [
      { subject: 'Chemistry',   topic: 'Organic Chemistry', priority: 'High' },
      { subject: 'Mathematics', topic: 'Trigonometry',      priority: 'High' },
      { subject: 'English',     topic: 'Comprehension',     priority: 'High' },
      { subject: 'Physics',     topic: 'Projectile Motion', priority: 'Medium' },
      { subject: 'Mathematics', topic: 'Logarithms',        priority: 'Medium' },
      { subject: 'Biology',     topic: 'Genetics',          priority: 'Medium' },
      { subject: 'English',     topic: 'Synonyms',          priority: 'Low' },
      { subject: 'Physics',     topic: 'Waves',             priority: 'Low' },
    ],
    recommendations: [
      'Spend 30 extra minutes daily on Organic Chemistry — your weakest area.',
      'Take at least two full mock tests per week to build exam stamina.',
      'Review your Trigonometry flashcards every morning for 10 minutes.',
    ],
    milestones: [
      { day: 11, percentage: 25,  target: '25% of topics mastered', reward: '🌱 Foundation Set',  icon: '🌱' },
      { day: 23, percentage: 50,  target: '50% of topics mastered', reward: '📈 Halfway Hero',    icon: '📈' },
      { day: 34, percentage: 75,  target: '75% of topics mastered', reward: '🎯 Almost There',    icon: '🎯' },
      { day: 45, percentage: 100, target: 'All topics mastered',    reward: '🏆 JAMB Ready',      icon: '🏆' },
    ],
  },
}

const AI_LIMITS = { daily: 5 }

// ============================================================
// COUNTDOWN
// ============================================================
function CountdownTimer({ targetDate }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = new Date(`${targetDate}T00:00:00`).getTime()
  const remaining = Math.max(0, target - now)

  if (remaining <= 0) {
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
// DAILY TUTOR CTA
// ============================================================
function DailyTutorCTA({ onNavigate }) {
  const todayTopic = { subject: 'Mathematics', topic: 'Quadratic Equations', hours: 1.5 }

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
              {todayTopic.subject} · ~{Math.round(todayTopic.hours * 60)} min
            </div>
          </div>
        </div>
        <ViewOnly tooltip="Sign up to start Daily Tutor">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => onNavigate?.('dailyTutor')}
            style={{ flexShrink: 0, padding: 'var(--space-3) var(--space-6)', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
          >
            <PlayCircle size={18} /> Start Daily Tutor
          </button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ============================================================
// PLAN VIEW
// ============================================================
function PlanView() {
  const plan = PLAN
  const planData = PLAN.plan

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
        <ViewOnly tooltip="Sign up to regenerate your plan">
          <button className="btn btn-outline flex-1 flex-center">
            <RefreshCw size={16} /> Regenerate
          </button>
        </ViewOnly>
        <ViewOnly tooltip="Sign up to export your plan">
          <button className="btn btn-primary flex-1 flex-center">
            <Download size={16} /> Export PDF
          </button>
        </ViewOnly>
      </div>
    </>
  )
}

// ============================================================
// PROGRESS VIEW — static
// ============================================================
function ProgressView() {
  const progressData = {
    readiness: 62,
    adherence: 68,
    quizAvg: 74,
    confidencePct: 55,
    reflectionsTotal: 11,
    dailyTutorCount: 15,
    overallCompletion: 46,
    completed: 13,
    inProgress: 5,
    notStarted: 10,
    weakTopics: 3,
    subjectBreakdown: {
      Mathematics: { total: 8, completed: 4, inProgress: 2, notStarted: 2 },
      Physics:     { total: 6, completed: 3, inProgress: 1, notStarted: 2 },
      Chemistry:   { total: 5, completed: 1, inProgress: 1, notStarted: 3 },
      English:     { total: 5, completed: 3, inProgress: 1, notStarted: 1 },
      Biology:     { total: 4, completed: 2, inProgress: 0, notStarted: 2 },
    },
    weeklyProgress: [
      { day: 'Monday',    completed: 2, total: 2, percentage: 100, topics: [
        { subject: 'Mathematics', topic: 'Quadratic Equations', status: 'completed',   mastery: 82 },
        { subject: 'Physics',     topic: "Newton's Laws",       status: 'completed',   mastery: 88 },
      ]},
      { day: 'Tuesday',   completed: 1, total: 2, percentage: 50, topics: [
        { subject: 'Chemistry', topic: 'Atomic Structure',    status: 'completed',   mastery: 76 },
        { subject: 'English',   topic: 'Argumentative Essay', status: 'in-progress', mastery: 40 },
      ]},
      { day: 'Wednesday', completed: 1, total: 2, percentage: 50, topics: [
        { subject: 'Biology', topic: 'Cell Division', status: 'completed',   mastery: 81 },
        { subject: 'English', topic: 'Comprehension', status: 'in-progress', mastery: 35 },
      ]},
      { day: 'Thursday',  completed: 1, total: 1, percentage: 100, topics: [
        { subject: 'Physics', topic: 'Work, Energy & Power', status: 'completed', mastery: 79 },
      ]},
      { day: 'Friday',    completed: 0, total: 2, percentage: 0, topics: [
        { subject: 'Mathematics', topic: 'Trigonometry',      status: 'not-started', mastery: 0 },
        { subject: 'Chemistry',   topic: 'Organic Chemistry', status: 'not-started', mastery: 0 },
      ]},
    ],
    topicPriorities: [
      { subject: 'Chemistry',   topic: 'Organic Chemistry', priority: 'High',   mastery: 22, sessions: 2 },
      { subject: 'Mathematics', topic: 'Trigonometry',      priority: 'High',   mastery: 28, sessions: 1 },
      { subject: 'English',     topic: 'Comprehension',     priority: 'High',   mastery: 35, sessions: 3 },
      { subject: 'Physics',     topic: 'Projectile Motion', priority: 'Medium', mastery: 48, sessions: 2 },
      { subject: 'Mathematics', topic: 'Logarithms',        priority: 'Medium', mastery: 55, sessions: 4 },
      { subject: 'Biology',     topic: 'Genetics',          priority: 'Medium', mastery: 62, sessions: 3 },
      { subject: 'English',     topic: 'Synonyms',          priority: 'Low',    mastery: 84, sessions: 5 },
      { subject: 'Physics',     topic: 'Waves',             priority: 'Low',    mastery: 91, sessions: 4 },
    ],
    milestones: [
      { day: 11, percentage: 25,  target: '25% of topics mastered', reward: '✅ Achieved!', icon: '🏆' },
      { day: 23, percentage: 50,  target: '50% of topics mastered', reward: '4% to go',    icon: '🎯' },
      { day: 34, percentage: 75,  target: '75% of topics mastered', reward: '29% to go',   icon: '🎯' },
      { day: 45, percentage: 100, target: 'All topics mastered',    reward: '54% to go',   icon: '🎯' },
    ],
    recommendations: [
      'Focus on these weak topics: Organic Chemistry, Trigonometry, Comprehension',
      'Increase your study hours to catch up on the plan',
      'You have 5 topics in progress. Complete them to boost your mastery!',
      "Great job! You've mastered 13 topics. Keep going!",
    ],
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':   return <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
      case 'in-progress': return <PlayCircle   size={16} style={{ color: 'var(--color-warning)' }} />
      default:            return <Clock        size={16} style={{ color: 'var(--color-text-muted)' }} />
    }
  }
  const getStatusLabel = (status) =>
    status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Not Started'

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
// MAIN SHOWCASE — Study Plan
// ============================================================
export default function ShowcaseStudyPlan({ onNavigate }) {
  const [viewMode, setViewMode] = useState('plan')

  const examDate = PLAN.exam_date
  const aiCallsRemaining = 4

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
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your personalized study plan</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
          <CountdownTimer targetDate={examDate} />
        </div>

        <DailyTutorCTA onNavigate={onNavigate} />

        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu size={16} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              AI Calls Remaining: <strong>{aiCallsRemaining}</strong> / {AI_LIMITS.daily}
            </span>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button onClick={() => setViewMode('plan')} className={`btn ${viewMode === 'plan' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}><FileText size={16} /> Plan</button>
          <button onClick={() => setViewMode('progress')} className={`btn ${viewMode === 'progress' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}><TrendingUp size={16} /> Progress</button>
          <ViewOnly tooltip="Sign up to reset your plan">
            <button className="btn btn-danger" style={{ background: 'var(--color-danger)', color: 'white' }}><Trash2 size={16} /></button>
          </ViewOnly>
        </div>

        {viewMode === 'plan' ? <PlanView /> : <ProgressView />}
      </div>
    </div>
  )
}
