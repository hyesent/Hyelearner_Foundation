// ============================================================
// HYELEARNER: HYETUTOR — SHOWCASE / PREVIEW
// Single-file replica of the HyeTutor feature.
// Inlines: MissionHero, PerformanceCenter, WeeklyMomentum,
// HyeTutorChat, AIHabits, QuickActions, ReflectionModal,
// DailyTutorCard, DailyTutorFlow, DailyTutorHistory,
// DailyTutorModal, HyeTutorPage, HyeTutorChatPage, DailyTutorPage.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, ArrowRight, Brain, Sparkles, RefreshCw, MessageSquare,
  X, Zap, Target, Award, Flame, TrendingUp, AlertCircle, CheckCircle2,
  BarChart3, PenTool, BookOpen, BookMarked, Clock, Check, Send,
  Loader2, Lightbulb, Eye, Volume2, Square, ChevronRight, Calendar,
  Info, Maximize2,
} from 'lucide-react'

// ============================================================
// MOCK DATA — replaces useHyeTutor / useDailyTutor / auth / hydration
// ============================================================
const AI_USAGE = { used: 3, limit: 10 }

const HYETUTOR_DATA = {
  examDays: 45,
  totalXpReward: 120,
  missions: [
    { id: 'm1', text: 'Complete Daily Tutor lesson', reason: 'You missed yesterday', priority: 'critical', estimatedTime: 25, completed: false },
    { id: 'm2', text: 'Practice 20 Algebra questions', reason: 'Weak topic detected', priority: 'high', estimatedTime: 45, completed: true },
    { id: 'm3', text: 'Review Organic Chemistry notes', reason: 'Below 50% mastery', priority: 'medium', estimatedTime: 25, completed: false },
    { id: 'm4', text: 'Read Chapter 4 of Biology', reason: 'Scheduled for today', priority: 'low', estimatedTime: 20, completed: false },
  ],
  timeBudget: { total: 2.75, completed: 1.33, remaining: 1.42 },
  weeklyGoal: { total: 24, completed: 18, percentage: 75 },
  nextSession: { time: '7:00 PM', subject: 'Mathematics', topic: 'Quadratic Equations', duration: 45, difficulty: 'Medium', reason: 'Your weakest topic this week' },
  performance: { examReadiness: 62, confidence: 55, consistency: 78, focus: 71, burnoutRisk: 'Low' },
  momentum: {
    hours: 12,
    average: '1.7h',
    bestDay: 'Wed',
    longestSession: '1h 45m',
    missedDays: 1,
    streak: 5,
    weeklyData: [
      { day: 'Monday', hours: 1.5 },
      { day: 'Tuesday', hours: 2.0 },
      { day: 'Wednesday', hours: 3.0 },
      { day: 'Thursday', hours: 0.5 },
      { day: 'Friday', hours: 2.5 },
      { day: 'Saturday', hours: 1.5 },
      { day: 'Sunday', hours: 1.0 },
    ],
  },
  habits: [
    { icon: 'clock', text: 'You study best between 6-8 PM', detail: '82% of your sessions happen in this window' },
    { icon: 'trending', text: 'Your accuracy improves 12% after 20 minutes', detail: 'Longer sessions lead to better results' },
    { icon: 'lightbulb', text: 'You avoid Physics on weekends', detail: 'Consider spreading practice more evenly' },
  ],
  insights: [
    { message: 'Your Chemistry accuracy dropped 8% this week. Consider revising Organic Chemistry.' },
    { message: "You're 2 sessions away from a new streak record. Keep going!" },
    { message: 'Your best performance is on Wednesday afternoons.' },
  ],
}

// Daily Tutor session — one demo session spanning all 5 steps
const DAILY_TUTOR_SESSION = {
  date: new Date().toISOString().split('T')[0],
  status: 'in_progress',
  currentStep: 'lesson',
  subject: 'Mathematics',
  topic: 'Quadratic Equations',
  lesson: {
    title: 'Quadratic Equations — Deep Dive',
    difficulty: 'medium',
    estimated_minutes: 25,
    sections: [
      { heading: 'What is a quadratic equation?', body: 'A quadratic equation is any equation of the form ax² + bx + c = 0, where a ≠ 0.\n\nThe constants a, b, and c determine the shape and position of the parabola.' },
      { heading: 'Three methods to solve', body: '1. Factorisation — rewrite as (x + p)(x + q) = 0.\n\n2. Completing the square — rewrite as (x + p)² = q.\n\n3. Quadratic formula — x = (−b ± √(b² − 4ac)) / 2a.' },
      { heading: 'The discriminant', body: 'The discriminant b² − 4ac tells you how many real roots exist.\n\nIf b² − 4ac > 0: two distinct real roots.\nIf b² − 4ac = 0: one real root (repeated).\nIf b² − 4ac < 0: no real roots.' },
    ],
    key_points: [
      'Always check that a ≠ 0 first',
      'Factorisation is fastest when roots are integers',
      'The discriminant tells you about the nature of the roots',
    ],
  },
  quiz: {
    questions: [
      { id: 'q1', question: 'Solve for x: x² − 5x + 6 = 0', options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = 0 or x = 5'], difficulty: 'easy' },
      { id: 'q2', question: 'What is the discriminant of x² + 2x + 5 = 0?', options: ['−16', '4', '24', '0'], difficulty: 'medium' },
      { id: 'q3', question: 'How many real roots does x² + 4 = 0 have?', options: ['Two', 'One', 'None', 'Infinite'], difficulty: 'medium' },
    ],
  },
}

const DEMO_HISTORY = [
  { date: '2026-04-29', subject: 'Mathematics', topic: 'Trigonometry Basics', result: { accuracy: 82, xpEarned: 140 }, reflection: { feeling: 'clear' } },
  { date: '2026-04-28', subject: 'Physics',     topic: "Newton's Laws",       result: { accuracy: 74, xpEarned: 120 }, reflection: { feeling: 'okay' } },
  { date: '2026-04-27', subject: 'Chemistry',   topic: 'Organic Chemistry',   result: { accuracy: 58, xpEarned: 90 },  reflection: { feeling: 'confusing' } },
  { date: '2026-04-26', subject: 'Biology',     topic: 'Cell Division',       result: { accuracy: 88, xpEarned: 160 }, reflection: { feeling: 'clear' } },
  { date: '2026-04-25', subject: 'English',     topic: 'Comprehension',       result: { accuracy: 71, xpEarned: 110 }, reflection: { feeling: 'okay' } },
]

// ============================================================
// MAIN
// ============================================================
export default function ShowcaseHyeTutor({ onNavigate }) {
  const [view, setView] = useState('page')       // 'page' | 'chat' | 'dailyHistory'
  const [showReflection, setShowReflection] = useState(false)
  const [reflectionSubmitting, setReflectionSubmitting] = useState(false)
  const [reflectionSuccess, setReflectionSuccess] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)
  const [showDailyTutor, setShowDailyTutor] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const data = HYETUTOR_DATA

  const handleAsk = async (question) => {
    // Demo reply — deterministic
    return {
      answer: `Based on your recent sessions, here's my take on "${question}":\n\nYour accuracy this week is 74% and trending upward. Focus on Organic Chemistry and Trigonometry — those are your two weakest areas. Aim for 20 minutes of focused practice on each, three times this week.`,
    }
  }

  const handleMissionToggle = (id) => {
    // visual-only in showcase
  }

  const handleReflectionSubmit = (reflection) => {
    setReflectionSubmitting(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setReflectionSubmitting(false)
        setReflectionSuccess(true)
        setTimeout(() => {
          setShowReflection(false)
          setReflectionSuccess(false)
        }, 2000)
        resolve({ ok: true })
      }, 600)
    })
  }

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 800)
  }

  const aiUsed = AI_USAGE.used
  const aiLimit = AI_USAGE.limit

  // ============================================================
  // View routing (internal, no router)
  // ============================================================
  if (view === 'chat') {
    return <HyeTutorChatPage onNavigate={onNavigate} onBack={() => setView('page')} onAsk={handleAsk} />
  }
  if (view === 'dailyHistory') {
    return <DailyTutorPage onNavigate={onNavigate} onBack={() => setView('page')} onSelectSession={() => setShowDailyTutor(true)} />
  }

  // ============================================================
  // HyeTutor page (main)
  // ============================================================
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Brain size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <h1 className="h2" style={{ margin: 0 }}>HyeTutor</h1>
                <Sparkles size={18} style={{ color: 'var(--color-warning)' }} />
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Your personal AI coach • {data.examDays} days until exam
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className={`badge ${aiUsed >= aiLimit ? 'badge-danger' : aiUsed >= aiLimit - 2 ? 'badge-warning' : 'badge-muted'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
              <Zap size={12} /> {aiUsed}/{aiLimit} AI
            </span>
            <ViewOnly tooltip="Sign up to reflect">
              <button onClick={() => setShowReflection(true)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                <MessageSquare size={16} /> Reflect
              </button>
            </ViewOnly>
            <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} disabled={refreshing}>
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
            </button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        {/* Mission Hero */}
        <MissionHero
          missions={data.missions}
          timeBudget={data.timeBudget}
          xpReward={data.totalXpReward}
          weeklyGoal={data.weeklyGoal}
          nextSession={data.nextSession}
          onMissionToggle={handleMissionToggle}
          onStartSession={() => onNavigate?.('practice')}
        />

        {/* Performance Center */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <PerformanceCenter metrics={data.performance} />
        </div>

        {/* Two-column grid */}
        <div className="grid-2" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <WeeklyMomentum data={data.momentum} />
            <AIHabits habits={data.habits} />
          </div>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <DailyTutorCard
              onOpen={({ needsPlan }) => {
                if (needsPlan) onNavigate?.('studyPlan')
                else setShowDailyTutor(true)
              }}
              hasPlan
              sessionState="in_progress"
            />
            <HyeTutorChat
              insights={data.insights}
              onAsk={handleAsk}
              loading={false}
              mode="embedded"
              onExpand={() => setShowChatModal(true)}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <QuickActions onNavigate={onNavigate} />
        </div>

        {/* Reflection Modal */}
        <ReflectionModal
          isOpen={showReflection}
          onClose={() => setShowReflection(false)}
          onSubmit={handleReflectionSubmit}
          submitting={reflectionSubmitting}
          success={reflectionSuccess}
        />

        {/* Daily Tutor Modal */}
        <DailyTutorModal isOpen={showDailyTutor} onClose={() => setShowDailyTutor(false)} />

        {/* Chat Modal (full mode) */}
        {showChatModal && (
          <div className="modal-overlay" onClick={() => setShowChatModal(false)} style={{ zIndex: 200 }}>
            <div onClick={(e) => e.stopPropagation()} className="modal" style={{ maxWidth: 640, width: '100%', padding: 0, maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Brain size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>HyeTutor</span>
                  <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Chat</span>
                </div>
                <button onClick={() => setShowChatModal(false)} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
                <div style={{ flex: 1, minHeight: 0 }}>
                  <HyeTutorChat insights={data.insights} onAsk={handleAsk} loading={false} mode="full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// MISSION HERO
// ============================================================
function MissionHero({
  missions = [],
  timeBudget = { total: 0, completed: 0, remaining: 0 },
  xpReward = 0,
  weeklyGoal = { total: 0, completed: 0, percentage: 0 },
  nextSession = null,
  onMissionToggle = null,
  onStartSession = null,
}) {
  const [localMissions, setLocalMissions] = useState(missions)

  useEffect(() => { setLocalMissions(missions) }, [missions])

  const completed = localMissions.filter((m) => m.completed).length
  const total = localMissions.length
  const progress = total > 0 ? (completed / total) * 100 : 0

  const getPriorityColor = (p) =>
    p === 'critical' ? 'var(--color-danger)'
    : p === 'high' ? 'var(--color-warning)'
    : p === 'medium' ? 'var(--color-primary)'
    : 'var(--color-success)'

  const getPriorityLabel = (p) =>
    p === 'critical' ? 'CRITICAL'
    : p === 'high' ? 'HIGH'
    : p === 'medium' ? 'MEDIUM'
    : 'LOW'

  return (
    <div className="card" style={{ padding: 'var(--space-6)', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)', border: '2px solid var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.05 }} />

      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)', position: 'relative', zIndex: 1 }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Target size={24} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>Today's Mission</span>
          <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>{completed}/{total} done</span>
          {progress > 0 && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>• {Math.round(progress)}%</span>}
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Award size={18} style={{ color: 'var(--color-warning)' }} />
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-warning)' }}>+{xpReward} XP</span>
        </div>
      </div>

      {/* Next Session */}
      {nextSession && (
        <ViewOnly tooltip="Sign up to start this session">
          <div className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-primary)', marginBottom: 'var(--space-4)', cursor: 'pointer', position: 'relative', zIndex: 1 }} onClick={() => onStartSession?.(nextSession)}>
            <div className="flex-between" style={{ alignItems: 'center' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <div className="flex-center" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                    ▶ Next Session: {nextSession.time}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    {nextSession.subject} — {nextSession.topic} • {nextSession.duration} mins • {nextSession.difficulty}
                  </div>
                  {nextSession.reason && (
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>💡 {nextSession.reason}</div>
                  )}
                </div>
              </div>
              <ChevronRight size={20} style={{ color: 'var(--color-primary)' }} />
            </div>
          </div>
        </ViewOnly>
      )}

      {/* Missions */}
      <div className="stack" style={{ gap: 'var(--space-2)', position: 'relative', zIndex: 1 }}>
        {localMissions.map((mission, i) => (
          <ViewOnly key={i} tooltip="Sign up to track missions">
            <div className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: mission.completed ? 'var(--color-success-light)' : 'var(--color-surface)', border: `2px solid ${mission.completed ? 'var(--color-success)' : getPriorityColor(mission.priority)}`, opacity: mission.completed ? 0.8 : 1, cursor: mission.completed ? 'default' : 'pointer' }}
              onClick={() => { if (!mission.completed) { setLocalMissions((prev) => prev.map((m) => m.id === mission.id ? { ...m, completed: true } : m)); onMissionToggle?.(mission.id) } }}
            >
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', flex: 1 }}>
                  <button style={{ width: 24, height: 24, borderRadius: 'var(--radius)', border: `2px solid ${mission.completed ? 'var(--color-success)' : 'var(--color-border)'}`, background: mission.completed ? 'var(--color-success)' : 'transparent', color: mission.completed ? 'white' : 'transparent', cursor: mission.completed ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    {mission.completed && <CheckCircle2 size={14} />}
                  </button>
                  <div>
                    <div style={{ fontWeight: mission.completed ? 400 : 600, textDecoration: mission.completed ? 'line-through' : 'none', color: mission.completed ? 'var(--color-text-muted)' : 'var(--color-text)', fontSize: 'var(--font-size-sm)' }}>
                      {mission.text}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                      💡 {mission.reason}
                    </div>
                  </div>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexShrink: 0 }}>
                  <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: `${getPriorityColor(mission.priority)}15` }}>
                    {mission.priority === 'critical' || mission.priority === 'high'
                      ? <AlertCircle size={14} style={{ color: getPriorityColor(mission.priority) }} />
                      : mission.priority === 'medium'
                        ? <Zap size={14} style={{ color: getPriorityColor(mission.priority) }} />
                        : <Check size={14} style={{ color: getPriorityColor(mission.priority) }} />}
                    <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: getPriorityColor(mission.priority) }}>{getPriorityLabel(mission.priority)}</span>
                  </div>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{mission.estimatedTime || 30}m</span>
                  {mission.completed && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>✅</span>}
                </div>
              </div>
            </div>
          </ViewOnly>
        ))}
      </div>

      {/* Footer */}
      <div className="flex-between" style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)', position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <div className="flex" style={{ gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Clock size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
              <strong>{timeBudget.completed}h</strong> / {timeBudget.total}h done
            </span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>({timeBudget.remaining}h left)</span>
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Weekly Goal: {weeklyGoal.completed}/{weeklyGoal.total}h</div>
          <div className="progress" style={{ width: 80, height: 6 }}>
            <div className="progress-fill progress-fill-primary" style={{ width: `${weeklyGoal.percentage}%` }} />
          </div>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>{weeklyGoal.percentage}%</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// PERFORMANCE CENTER
// ============================================================
function PerformanceCenter({ metrics }) {
  const m = metrics || {}
  const cards = [
    { key: 'exam_readiness', icon: Target, label: 'Exam Readiness', value: m.examReadiness ?? 0, color: 'var(--color-primary)', description: 'Based on daily tutor adherence and quiz average' },
    { key: 'confidence', icon: Award, label: 'Confidence', value: m.confidence ?? 0, color: 'var(--color-success)', description: 'Based on your recent reflections' },
    { key: 'consistency', icon: Flame, label: 'Consistency', value: m.consistency ?? 0, color: 'var(--color-warning)', description: 'How often you show up' },
    { key: 'focus', icon: TrendingUp, label: 'Focus Score', value: m.focus ?? 0, color: 'var(--color-secondary)', description: 'Average session quality' },
    {
      key: 'burnout', icon: AlertCircle, label: 'Burnout Risk', value: m.burnoutRisk || 'Low',
      color: (m.burnoutRisk || 'Low') === 'Low' ? 'var(--color-success)' : 'var(--color-danger)',
      isStatus: true,
      description: (m.burnoutRisk || 'Low') === 'Low' ? 'Study load is healthy' : 'Study load is high',
    },
  ]

  const hasAnyData = cards.some((c) => !c.isStatus && typeof c.value === 'number' && c.value > 0)

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <BarChart3 size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Performance Center</span>
        <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Live</span>
      </div>

      {!hasAnyData ? (
        <div className="text-center" style={{ padding: 'var(--space-8) var(--space-4)', color: 'var(--color-text-muted)' }}>
          <Target size={32} style={{ margin: '0 auto var(--space-3)', opacity: 0.5 }} />
          <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>No performance data yet</p>
          <p style={{ fontSize: 'var(--font-size-xs)', marginTop: 4 }}>Complete a Daily Tutor lesson to unlock these metrics.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-3)' }}>
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.key} className="stat-card text-center" style={{ padding: 'var(--space-3)' }}>
                <div className="flex-center" style={{ width: 40, height: 40, borderRadius: '50%', background: `${card.color}20`, margin: '0 auto var(--space-2)' }}>
                  <Icon size={20} style={{ color: card.color }} />
                </div>
                <div className="h2" style={{ color: card.color, fontSize: 'var(--font-size-2xl)', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-1)' }}>
                  {card.isStatus ? (
                    <>
                      {card.value === 'Low'
                        ? <CheckCircle2 size={20} style={{ color: 'var(--color-success)' }} />
                        : <AlertCircle size={20} style={{ color: 'var(--color-warning)' }} />}
                      {card.value}
                    </>
                  ) : `${card.value}%`}
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{card.label}</div>
                {!card.isStatus && (
                  <div className="progress" style={{ marginTop: 'var(--space-1)', height: 4 }}>
                    <div className="progress-fill" style={{ width: `${card.value}%`, background: card.color }} />
                  </div>
                )}
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', opacity: 0.7 }}>{card.description}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ============================================================
// WEEKLY MOMENTUM
// ============================================================
function WeeklyMomentum({ data }) {
  const { hours = 0, average = 0, bestDay = 'N/A', longestSession = '0h 0m', missedDays = 0, streak = 0, weeklyData = [] } = data || {}
  const hasData = weeklyData.length > 0 && weeklyData.some((d) => d.hours > 0)
  const maxHours = Math.max(...weeklyData.map((d) => d.hours), 1)

  return (
    <div className="card" style={{ padding: 'var(--space-4)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <TrendingUp size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Weekly Momentum</span>
        {streak > 0 && (
          <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>
            <Flame size={12} /> {streak}-day streak
          </span>
        )}
      </div>

      {!hasData ? (
        <div className="text-center" style={{ padding: 'var(--space-8) var(--space-4)', color: 'var(--color-text-muted)' }}>
          <Clock size={32} style={{ margin: '0 auto var(--space-3)', opacity: 0.5 }} />
          <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>No study data yet</p>
          <p style={{ fontSize: 'var(--font-size-xs)', marginTop: 4 }}>Complete a session this week to see your momentum.</p>
        </div>
      ) : (
        <>
          <div className="grid-4" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
              <div className="h2" style={{ color: 'var(--color-primary)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{hours}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Study Hours</div>
            </div>
            <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
              <div className="h2" style={{ color: 'var(--color-primary)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{average}/day</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Average</div>
            </div>
            <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
              <div className="h2" style={{ color: 'var(--color-success)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{bestDay}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Best Day</div>
            </div>
            <div className="stat-card text-center" style={{ padding: 'var(--space-2)' }}>
              <div className="h2" style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 'var(--font-size-xl)' }}>{missedDays}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Missed Days</div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-2)' }}>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Hours per day</div>
            {weeklyData.map((day, i) => {
              const percentage = (day.hours / maxHours) * 100
              const isToday = day.day === new Date().toLocaleDateString('en-US', { weekday: 'long' })
              return (
                <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: isToday ? 700 : 400, color: isToday ? 'var(--color-primary)' : 'var(--color-text-muted)', width: 36 }}>
                    {day.day.slice(0, 3)}{isToday && ' ⬅️'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: 24, background: `linear-gradient(90deg, var(--color-primary) ${percentage}%, var(--color-border) ${percentage}%)`, borderRadius: 'var(--radius)', position: 'relative', overflow: 'hidden' }}>
                      <span style={{ position: 'absolute', right: 'var(--space-2)', top: '50%', transform: 'translateY(-50%)', fontSize: 'var(--font-size-xs)', fontWeight: 500, color: percentage > 50 ? 'white' : 'var(--color-text)' }}>
                        {day.hours}h
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
            ⏱️ Longest Session: {longestSession}
          </div>
        </>
      )}
    </div>
  )
}

// ============================================================
// AI HABITS
// ============================================================
function AIHabits({ habits = [] }) {
  if (!habits || habits.length === 0) {
    return (
      <div className="card" style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)', opacity: 0.7 }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <Brain size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Study Pattern Insights</span>
        </div>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Complete more study sessions to unlock AI-detected patterns.
        </p>
      </div>
    )
  }

  const icons = { clock: Clock, trending: TrendingUp, lightbulb: Lightbulb }

  return (
    <div className="card" style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
        <Brain size={18} style={{ color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Study Pattern Insights</span>
        <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
          <Sparkles size={12} /> AI Detected
        </span>
      </div>

      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {habits.map((habit, i) => {
          const Icon = icons[habit.icon] || Lightbulb
          return (
            <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <div className="flex-center" style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--color-surface)', flexShrink: 0, marginTop: 2 }}>
                <Icon size={14} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{habit.text}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{habit.detail}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: 'var(--space-3)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-surface)', borderRadius: 'var(--radius)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
        💡 I'll adjust future recommendations based on these patterns.
      </div>
    </div>
  )
}

// ============================================================
// QUICK ACTIONS
// ============================================================
function QuickActions({ onNavigate }) {
  const actions = [
    { id: 'practice',   icon: PenTool,    label: 'Practice',     color: 'var(--color-primary)' },
    { id: 'lessons',    icon: BookOpen,   label: 'Lessons',      color: 'var(--color-success)' },
    { id: 'topicMode',  icon: Target,     label: 'Topic Mode',   color: 'var(--color-secondary)' },
    { id: 'mistakeBook',icon: BookMarked, label: 'Mistake Book', color: 'var(--color-danger)' },
    { id: 'heatmap',    icon: Flame,      label: 'Heatmap',      color: 'var(--color-warning)' },
  ]

  return (
    <div className="card" style={{ padding: 'var(--space-3)' }}>
      <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <ViewOnly key={action.id} tooltip={`Sign up to open ${action.label}`}>
              <button onClick={() => onNavigate?.(action.id)} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-2) var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                <Icon size={18} style={{ color: action.color }} />
                {action.label}
              </button>
            </ViewOnly>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================
// HYETUTOR CHAT (dual mode)
// ============================================================
function HyeTutorChat({ insights = [], onAsk, loading, mode = 'embedded', onExpand, initialMessage, onClose }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)
  const didInitRef = useRef(false)

  const suggestedQuestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock exam today?',
    'What should I focus on this week?',
  ]

  useEffect(() => {
    if (mode === 'embedded' && insights?.length > 0 && messages.length === 0) {
      setMessages([{
        id: 'insights',
        sender: 'hye',
        content: { text: "I've been analyzing your study patterns and noticed a few things:", insights: insights.slice(0, 3) },
      }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insights, mode])

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, isTyping])

  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return
    setMessages((prev) => [...prev, { id: `u_${Date.now()}`, sender: 'user', content: { text: trimmed } }])
    setInput('')
    setIsTyping(true)
    try {
      const response = await onAsk(trimmed)
      const aiText = typeof response === 'string' ? response : response?.answer || response?.text || response?.message || ''
      setMessages((prev) => [...prev, { id: `h_${Date.now()}`, sender: 'hye', content: { text: aiText || "I couldn't generate a response." } }])
    } catch {
      setMessages((prev) => [...prev, { id: `h_${Date.now()}`, sender: 'hye', content: { text: "I'm having trouble connecting right now." } }])
    } finally {
      setIsTyping(false)
    }
  }

  useEffect(() => {
    if (didInitRef.current) return
    didInitRef.current = true
    if (initialMessage && typeof initialMessage === 'string' && initialMessage.trim()) sendMessage(initialMessage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSend = () => sendMessage(input)
  const isFull = mode === 'full'

  return (
    <div className={isFull ? '' : 'card'} style={isFull ? { display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)' } : { padding: 'var(--space-4)' }}>
      <div className="flex-between" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)', padding: isFull ? 'var(--space-4) var(--space-4) 0' : 0, flexShrink: 0 }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>HyeTutor</span>
          <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Chat</span>
          <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}><Sparkles size={12} /> AI Coach</span>
        </div>
        {!isFull && onExpand && (
          <ViewOnly tooltip="Sign up to open full chat">
            <button onClick={onExpand} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} aria-label="Expand chat">
              <Maximize2 size={16} />
            </button>
          </ViewOnly>
        )}
      </div>

      <div style={{ maxHeight: isFull ? 'none' : 220, flex: isFull ? 1 : 'none', overflowY: 'auto', marginBottom: 'var(--space-3)', paddingRight: isFull ? 0 : 'var(--space-2)', padding: isFull ? '0 var(--space-4)' : 0 }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '85%', padding: 'var(--space-2) var(--space-3)', borderRadius: msg.sender === 'user' ? 'var(--radius-xl) var(--radius-xl) var(--radius-sm) var(--radius-xl)' : 'var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-sm)', background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--color-background)', color: msg.sender === 'user' ? 'white' : 'var(--color-text)', border: msg.sender === 'user' ? 'none' : '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
              {msg.content.insights ? (
                <>
                  <div>{msg.content.text}</div>
                  <ul style={{ marginTop: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                    {msg.content.insights.map((insight, i) => (
                      <li key={i} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start', fontSize: 'var(--font-size-xs)' }}>
                        <Lightbulb size={14} style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: 2 }} />
                        <span>{typeof insight === 'string' ? insight : insight.message}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div>{msg.content.text}</div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 'var(--space-2)' }}>
            <div style={{ padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-xl)', background: 'var(--color-background)', border: '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Loader2 size={16} className="animate-spin" /> Thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {messages.length === 0 && !isTyping && (
        <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-3)', padding: isFull ? '0 var(--space-4)' : 0, flexShrink: 0 }}>
          {suggestedQuestions.map((q, i) => (
            <ViewOnly key={i} tooltip="Sign up to ask">
              <button onClick={() => sendMessage(q)} style={{ padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                💡 {q}
              </button>
            </ViewOnly>
          ))}
        </div>
      )}

      <div className="flex" style={{ gap: 'var(--space-2)', padding: isFull ? 'var(--space-3) var(--space-4)' : 0, borderTop: isFull ? '1px solid var(--color-border)' : 'none', flexShrink: 0 }}>
        <input type="text" className="input" placeholder="Ask HyeTutor anything..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }} style={{ flex: 1 }} />
        <ViewOnly tooltip="Sign up to send">
          <button onClick={handleSend} disabled={!input.trim() || loading || isTyping} className="btn btn-primary" style={{ padding: 'var(--space-2) var(--space-3)' }} aria-label="Send">
            <Send size={18} />
          </button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ============================================================
// REFLECTION MODAL
// ============================================================
function ReflectionModal({ isOpen, onClose, onSubmit, submitting = false, success = false }) {
  const [reflection, setReflection] = useState('')
  const [error, setError] = useState(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (isOpen && textareaRef.current) setTimeout(() => textareaRef.current?.focus(), 100)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) { setReflection(''); setError(null) }
  }, [isOpen])

  const handleSubmit = () => {
    if (!reflection.trim()) { setError('Please write something about your study session.'); return }
    setError(null)
    onSubmit(reflection)
  }

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); handleSubmit() }
    if (e.key === 'Escape') onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" style={{ zIndex: 9999 }} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560, width: '100%', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 'var(--space-1)', borderRadius: '50%', color: 'var(--color-text-muted)' }}>
          <X size={20} />
        </button>

        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <div className="flex-center" style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary-light)' }}>
            <Sparkles size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>Daily Reflection</h2>
            <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Help HyeTutor understand your study experience today</p>
          </div>
        </div>

        {success ? (
          <div style={{ padding: 'var(--space-4)', background: 'var(--color-success-light)', borderRadius: 'var(--radius)', textAlign: 'center', border: '1px solid var(--color-success)' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--color-success)', margin: '0 auto var(--space-3)' }} />
            <h3 style={{ margin: 0, color: 'var(--color-success)' }}>Thank You! 🙏</h3>
            <p style={{ margin: 'var(--space-1) 0 0', color: 'var(--color-text-muted)' }}>Your reflection has been submitted.</p>
          </div>
        ) : (
          <>
            <div style={{ padding: 'var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)', marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>💡 What to reflect on:</div>
              <ul style={{ margin: 'var(--space-1) 0 0 var(--space-3)', lineHeight: 1.8 }}>
                <li>What topics felt easy or difficult today?</li>
                <li>Did you struggle with anything specific?</li>
                <li>How focused were you during study sessions?</li>
                <li>What would you like to do differently tomorrow?</li>
              </ul>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label htmlFor="reflection" style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, display: 'block', marginBottom: 'var(--space-2)' }}>Write your reflection:</label>
              <textarea ref={textareaRef} id="reflection" value={reflection} onChange={(e) => { setReflection(e.target.value); if (error) setError(null) }} onKeyDown={handleKeyDown}
                placeholder="e.g., I struggled with Algebra today, but Physics was easy..."
                style={{ width: '100%', minHeight: 160, padding: 'var(--space-3)', borderRadius: 'var(--radius)', border: `1px solid ${error ? 'var(--color-danger)' : 'var(--color-border)'}`, background: 'var(--color-background)', color: 'var(--color-text)', fontSize: 'var(--font-size-sm)', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }} />
              {error && (
                <div style={{ marginTop: 'var(--space-1)', fontSize: 'var(--font-size-xs)', color: 'var(--color-danger)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <AlertCircle size={14} /> {error}
                </div>
              )}
            </div>

            <div style={{ fontSize: 'var(--font-size-xs)', color: reflection.length > 500 ? 'var(--color-warning)' : 'var(--color-text-muted)', textAlign: 'right', marginBottom: 'var(--space-3)' }}>
              {reflection.length} characters {reflection.length > 500 && '⚠️'}
            </div>

            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
              <button onClick={onClose} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)' }}>Cancel</button>
              <ViewOnly tooltip="Sign up to submit reflections">
                <button onClick={handleSubmit} disabled={submitting || !reflection.trim()} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}>
                  {submitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Submit Reflection</>}
                </button>
              </ViewOnly>
            </div>

            <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              ⌘ + Enter or Ctrl + Enter to submit
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ============================================================
// DAILY TUTOR CARD
// ============================================================
function DailyTutorCard({ onOpen, hasPlan = false, sessionState = 'none' }) {
  // sessionState: 'none' | 'pending' | 'in_progress' | 'completed'
  const session = sessionState === 'in_progress' || sessionState === 'completed' ? DAILY_TUTOR_SESSION : null

  const cardStyle = { padding: 'var(--space-5)', cursor: 'pointer', border: '1px solid var(--color-border)' }

  const headerRow = (
    <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
      <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
      <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Daily</span>
      <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Tutor</span>
      <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}><Sparkles size={12} /> Personalized</span>
    </div>
  )

  if (!hasPlan) {
    return (
      <ViewOnly tooltip="Sign up to set up a Study Plan">
        <section className="card card-hover" style={cardStyle} onClick={() => onOpen?.({ needsPlan: true })}>
          {headerRow}
          <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)' }}>🔒 Set up a Study Plan first</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>Daily Tutor follows your plan and teaches you one topic a day</div>
            </div>
            <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          </div>
        </section>
      </ViewOnly>
    )
  }

  if (sessionState === 'in_progress' && session) {
    return (
      <ViewOnly tooltip="Sign up to continue">
        <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-warning)' }} onClick={() => onOpen?.({ action: 'resume' })}>
          {headerRow}
          <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-warning)', marginBottom: 4 }}>⏸ LESSON IN PROGRESS</div>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)' }}>{session.topic}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>{session.subject}</div>
            </div>
            <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          </div>
          <button className="btn btn-warning flex-center" style={{ width: '100%' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'resume' }) }}>
            <PlayCircleIcon /> Continue
          </button>
        </section>
      </ViewOnly>
    )
  }

  if (sessionState === 'completed' && session) {
    const accuracy = session.result?.accuracy ?? 82
    const passed = accuracy >= 70
    return (
      <ViewOnly tooltip="Sign up to review">
        <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-success)' }} onClick={() => onOpen?.({ action: 'review' })}>
          {headerRow}
          <div className="flex-between" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 4 }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-success)' }}>DAY COMPLETE</span>
                <span className={`badge ${passed ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)' }}>{accuracy}%</span>
              </div>
              <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text)' }}>{session.topic}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>{session.subject}</div>
            </div>
            <ChevronRight size={20} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          </div>
          <button className="btn btn-outline flex-center" style={{ width: '100%', marginTop: 'var(--space-3)' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'review' }) }}>
            <Clock size={16} /> Review Today's Lesson
          </button>
        </section>
      </ViewOnly>
    )
  }

  // pending (has plan, no session)
  return (
    <ViewOnly tooltip="Sign up to start today's lesson">
      <section className="card card-hover" style={{ ...cardStyle, border: '1px solid var(--color-primary)', background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)' }} onClick={() => onOpen?.({ action: 'start' })}>
        {headerRow}
        <div style={{ marginBottom: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: 4 }}>TODAY'S TOPIC</div>
          <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>{DAILY_TUTOR_SESSION.topic}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>{DAILY_TUTOR_SESSION.subject} · ~25 min</div>
        </div>
        <button className="btn btn-primary flex-center" style={{ width: '100%' }} onClick={(e) => { e.stopPropagation(); onOpen?.({ action: 'start' }) }}>
          <PlayCircleIcon /> Start Today's Lesson
        </button>
      </section>
    </ViewOnly>
  )
}

function PlayCircleIcon() {
  return <PlayIconSvg />
}
function PlayIconSvg() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" /></svg>
}

// ============================================================
// DAILY TUTOR MODAL (drives the flow with local state)
// ============================================================
function DailyTutorModal({ isOpen, onClose }) {
  const [step, setStep] = useState('lesson')
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [session, setSession] = useState({ ...DAILY_TUTOR_SESSION, currentStep: 'lesson' })

  useEffect(() => { if (isOpen) { setStep('lesson'); setAnswers({}); setResult(null); setSession({ ...DAILY_TUTOR_SESSION, currentStep: 'lesson' }) } }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const liveSession = { ...session, currentStep: step, answers, result }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 200, padding: 0 }}>
      <div onClick={(e) => e.stopPropagation()} className="modal" style={{ maxWidth: 640, width: '100%', padding: 0, maxHeight: '92vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border)', flexShrink: 0, background: 'var(--color-surface)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', minWidth: 0 }}>
            <BookOpen size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Daily</span>
            <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Tutor</span>
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>
              {step === 'lesson' ? 'Lesson' : step === 'quiz' ? 'Quiz' : step === 'result' ? 'Result' : step === 'reflection' ? 'Reflection' : 'Done'}
            </span>
          </div>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 'var(--space-1)', flexShrink: 0 }} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <DailyTutorFlow
            session={liveSession}
            onSetStep={setStep}
            onSubmitQuiz={(finalAnswers) => {
              const qs = session.quiz.questions
              const correct = qs.filter((q) => finalAnswers[q.id] === q.options[1]).length
              const total = qs.length
              const accuracy = Math.round((correct / total) * 100)
              const r = { correct, total, wrong: total - correct, accuracy, xpEarned: correct * 40 }
              setAnswers(finalAnswers)
              setResult(r)
              setStep('result')
              return r
            }}
            onSubmitReflection={() => {}}
            onSkipReflection={() => {}}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}

// ============================================================
// DAILY TUTOR FLOW
// ============================================================
function DailyTutorFlow({ session, onSetStep, onSubmitQuiz, onSubmitReflection, onSkipReflection, onClose }) {
  const [answers, setAnswers] = useState(session?.answers || {})
  const [result, setResult] = useState(session?.result || null)

  useEffect(() => {
    if (session?.result && !result) setResult(session.result)
    if (session?.answers && Object.keys(answers).length === 0) setAnswers(session.answers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const step = session?.currentStep || 'lesson'

  if (step === 'lesson') {
    return <LessonStep lesson={session.lesson} subject={session.subject} topic={session.topic} onContinue={() => onSetStep('quiz')} onClose={onClose} />
  }
  if (step === 'quiz') {
    return <QuizStep questions={session.quiz?.questions || []} subject={session.subject} topic={session.topic} initialAnswers={answers}
      onSubmit={(finalAnswers) => {
        const r = onSubmitQuiz(finalAnswers)
        setAnswers(finalAnswers)
        setResult(r)
        onSetStep('result')
      }} />
  }
  if (step === 'result') {
    return <ResultStep result={result || session.result} topic={session.topic} subject={session.subject} onContinue={() => onSetStep('reflection')} />
  }
  if (step === 'reflection') {
    return <ReflectionStep topic={session.topic} subject={session.subject}
      onSubmit={(feeling, note) => { onSubmitReflection(feeling, note); onSetStep('done') }}
      onSkip={() => { onSkipReflection(); onSetStep('done') }} />
  }
  if (step === 'done') {
    return <DoneStep session={session} onClose={onClose} />
  }
  return null
}

// ---------- LESSON STEP ----------
function LessonStep({ lesson, subject, topic, onContinue }) {
  const sections = lesson?.sections || []
  const [openIndex, setOpenIndex] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleSpeak = () => {
    setIsSpeaking((v) => !v)
    setTimeout(() => setIsSpeaking(false), 1500)
  }

  const allRead = openIndex >= sections.length - 1

  return (
    <div style={{ padding: 'var(--space-5)' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>TODAY'S LESSON</span>
          {lesson?.estimated_minutes && <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}><Clock size={12} /> ~{lesson.estimated_minutes} min</span>}
          {lesson?.difficulty && (
            <span className={`badge ${lesson.difficulty === 'easy' ? 'badge-success' : lesson.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)' }}>{lesson.difficulty}</span>
          )}
        </div>
        <h2 className="h2" style={{ margin: 0 }}>{lesson?.title || topic}</h2>
        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}>{subject} • {topic}</p>
      </div>

      <div className="flex-between" style={{ marginBottom: 'var(--space-3)', alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Section {Math.min(openIndex + 1, sections.length)} of {sections.length}</span>
        <ViewOnly tooltip="Sign up to read aloud">
          <button onClick={handleSpeak} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
            {isSpeaking ? <Square size={16} /> : <Volume2 size={16} />}
          </button>
        </ViewOnly>
      </div>

      <div className="stack" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
        {sections.map((section, idx) => {
          const isOpen = idx === openIndex
          const isPast = idx < openIndex
          return (
            <div key={idx} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--color-surface)' }}>
              <button onClick={() => setOpenIndex(idx)} style={{ width: '100%', padding: 'var(--space-3) var(--space-4)', background: isOpen ? 'var(--color-primary-light)' : 'var(--color-background)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', gap: 'var(--space-3)' }}>
                <span style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: isOpen ? 'var(--color-primary)' : 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  {isPast ? <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> : <span className="flex-center" style={{ width: 20, height: 20, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--color-border)', color: isOpen ? 'white' : 'var(--color-text-muted)', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{idx + 1}</span>}
                  {section.heading}
                </span>
                <ChevronRight size={16} style={{ color: 'var(--color-text-muted)', transform: isOpen ? 'rotate(90deg)' : 'none', flexShrink: 0 }} />
              </button>
              {isOpen && (
                <div style={{ padding: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  {section.body.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: i < section.body.split('\n\n').length - 1 ? 'var(--space-3)' : 0 }}>{para}</p>)}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {lesson?.key_points?.length > 0 && (
        <div style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-5)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Lightbulb size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)' }}>Key Points</span>
          </div>
          <ul style={{ paddingLeft: 'var(--space-5)' }}>
            {lesson.key_points.map((p, i) => (
              <li key={i} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', listStyle: 'disc', marginBottom: 4 }}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <button onClick={() => setOpenIndex((i) => Math.min(sections.length - 1, i + 1))} disabled={allRead} className="btn btn-outline" style={{ flex: 1, opacity: allRead ? 0.4 : 1 }}>Next Section</button>
        <ViewOnly tooltip="Sign up to continue">
          <button onClick={onContinue} className="btn btn-primary" style={{ flex: 1 }}>Ready for the Quiz <ArrowRight size={16} /></button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ---------- QUIZ STEP ----------
function QuizStep({ questions = [], subject, topic, initialAnswers = {}, onSubmit }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(initialAnswers)
  const [submitting, setSubmitting] = useState(false)

  const total = questions.length
  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const LETTERS = ['A', 'B', 'C', 'D']

  if (!current) return <div className="text-center" style={{ padding: 'var(--space-8)' }}><p className="text-muted">No questions available.</p></div>

  const handleAnswer = (qid, option) => setAnswers((prev) => ({ ...prev, [qid]: option }))

  const handleSubmit = () => {
    setSubmitting(true)
    onSubmit(answers)
  }

  return (
    <div style={{ padding: 'var(--space-5)' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <Target size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>QUIZ TIME</span>
        </div>
        <h2 className="h2" style={{ margin: 0 }}>{topic}</h2>
        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}>{subject}</p>
      </div>

      <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
          Question {currentIndex + 1} of {total}
          {current.difficulty && <span className={`badge ${current.difficulty === 'easy' ? 'badge-success' : current.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>{current.difficulty}</span>}
        </span>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{answeredCount}/{total} answered</span>
      </div>
      <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-4)' }}>
          <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 500, color: 'var(--color-text)' }}>{current.question}</div>
        </div>

        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {(current.options || []).map((option, idx) => {
            const letter = LETTERS[idx]
            const isSelected = answers[current.id] === option
            return (
              <ViewOnly key={idx} tooltip="Sign up to answer">
                <button onClick={() => handleAnswer(current.id, option)} className="card card-hover flex-between" style={{ cursor: 'pointer', border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', background: isSelected ? 'var(--color-primary-light)' : 'var(--color-surface)', padding: 'var(--space-3) var(--space-4)', textAlign: 'left', width: '100%' }}>
                  <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
                    <span className="flex-center" style={{ width: 36, height: 36, borderRadius: '50%', background: isSelected ? 'var(--color-primary)' : 'var(--color-border)', color: isSelected ? 'white' : 'var(--color-text-secondary)', fontWeight: 700, flexShrink: 0 }}>{letter}</span>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{option}</span>
                  </div>
                  {isSelected && <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />}
                </button>
              </ViewOnly>
            )
          })}
        </div>
      </div>

      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <button className="btn btn-outline" onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}>
          <ArrowLeft size={16} /> Previous
        </button>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{currentIndex + 1} / {total}</span>
        {currentIndex === total - 1 ? (
          <ViewOnly tooltip="Sign up to submit">
            <button className="btn btn-success" onClick={handleSubmit} disabled={submitting}>
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
              {submitting ? 'Submitting...' : 'Submit Quiz'}
            </button>
          </ViewOnly>
        ) : (
          <button className="btn btn-outline" onClick={() => setCurrentIndex((i) => Math.min(total - 1, i + 1))}>
            Next <ArrowRight size={16} />
          </button>
        )}
      </div>

      <div className="card" style={{ padding: 'var(--space-3)' }}>
        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>Question Palette</div>
        <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {questions.map((q, i) => {
            const isAnswered = !!answers[q.id]
            const isCurrent = i === currentIndex
            return (
              <button key={i} onClick={() => setCurrentIndex(i)} className="flex-center" style={{ width: 36, height: 36, borderRadius: 'var(--radius)', background: isCurrent ? 'var(--color-primary)' : isAnswered ? 'var(--color-success-light)' : 'var(--color-border)', color: isCurrent ? 'white' : isAnswered ? 'var(--color-success)' : 'var(--color-text-secondary)', fontWeight: 600, fontSize: 'var(--font-size-sm)', cursor: 'pointer', border: 'none' }}>
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ---------- RESULT STEP ----------
function ResultStep({ result, topic, onContinue }) {
  if (!result) return null
  const passed = result.accuracy >= 70

  return (
    <div style={{ padding: 'var(--space-6)' }}>
      <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex-center" style={{ width: 80, height: 80, borderRadius: '50%', background: passed ? 'var(--color-success-light)' : 'var(--color-danger-light)', margin: '0 auto var(--space-4)' }}>
          {passed ? <Award size={40} style={{ color: 'var(--color-success)' }} /> : <AlertCircle size={40} style={{ color: 'var(--color-danger)' }} />}
        </div>
        <h2 className="h2" style={{ color: passed ? 'var(--color-success)' : 'var(--color-danger)', marginBottom: 'var(--space-2)' }}>{passed ? '🎉 Well done!' : 'Keep pushing!'}</h2>
        <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--color-primary)' }}>{result.accuracy}%</div>
        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{result.correct} out of {result.total} correct • {topic}</p>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-sm)' }}><Zap size={14} /> +{result.xpEarned} XP</span>
        </div>
      </div>

      <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{result.correct}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Correct</div></div>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-danger)' }}>{result.wrong}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Wrong</div></div>
        <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{result.total}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Total</div></div>
      </div>

      <ViewOnly tooltip="Sign up to continue">
        <button onClick={onContinue} className="btn btn-primary flex-center" style={{ width: '100%' }}>Continue <ArrowRight size={16} /></button>
      </ViewOnly>
    </div>
  )
}

// ---------- REFLECTION STEP ----------
function ReflectionStep({ topic, subject, onSubmit, onSkip }) {
  const [feeling, setFeeling] = useState(null)
  const [note, setNote] = useState('')

  const options = [
    { value: 'confusing', emoji: '😕', label: 'Confusing' },
    { value: 'okay', emoji: '😐', label: 'Okay' },
    { value: 'clear', emoji: '😄', label: 'Clear' },
  ]

  return (
    <div style={{ padding: 'var(--space-6)' }}>
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)' }}>QUICK REFLECTION</span>
        </div>
        <h2 className="h2" style={{ margin: 0 }}>How did {topic} feel?</h2>
        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}>This helps me adjust your next {subject} lesson.</p>
      </div>

      <div className="grid-3" style={{ marginBottom: 'var(--space-5)' }}>
        {options.map((opt) => {
          const selected = feeling === opt.value
          return (
            <ViewOnly key={opt.value} tooltip="Sign up to reflect">
              <button onClick={() => setFeeling(opt.value)} className="card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center', cursor: 'pointer', border: selected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', background: selected ? 'var(--color-primary-light)' : 'var(--color-surface)', width: '100%' }}>
                <div style={{ fontSize: 32, marginBottom: 4 }}>{opt.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: selected ? 'var(--color-primary)' : 'var(--color-text)' }}>{opt.label}</div>
              </button>
            </ViewOnly>
          )
        })}
      </div>

      <div style={{ marginBottom: 'var(--space-5)' }}>
        <label className="label" style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-2)' }}>Anything specific? (optional)</label>
        <textarea className="textarea" rows={3} placeholder="e.g. The mitochondria part was tricky..." value={note} onChange={(e) => setNote(e.target.value)} style={{ resize: 'vertical', width: '100%' }} />
      </div>

      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <button onClick={onSkip} className="btn btn-ghost" style={{ flex: 1 }}>Skip</button>
        <ViewOnly tooltip="Sign up to submit">
          <button onClick={() => onSubmit(feeling, note)} disabled={!feeling} className="btn btn-primary" style={{ flex: 1 }}>Done <CheckCircle2 size={16} /></button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ---------- DONE STEP ----------
function DoneStep({ session, onClose }) {
  return (
    <div style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
      <div className="flex-center" style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--color-success-light)', margin: '0 auto var(--space-5)' }}>
        <CheckCircle2 size={44} style={{ color: 'var(--color-success)' }} />
      </div>
      <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Day complete 🎉</h2>
      <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', maxWidth: 320, margin: '0 auto var(--space-5)' }}>
        {session?.topic} — {session?.subject}. Nice work. Your next lesson is waiting tomorrow.
      </p>
      <ViewOnly tooltip="Sign up to continue">
        <button onClick={onClose} className="btn btn-primary flex-center" style={{ width: '100%' }}>Close</button>
      </ViewOnly>
    </div>
  )
}

// ============================================================
// DAILY TUTOR HISTORY PAGE
// ============================================================
function DailyTutorPage({ onNavigate, onBack, onSelectSession }) {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BookOpen size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Daily Tutor History</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Revisit any past lesson you've completed</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={onBack} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        <div className="info-card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Clock size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              These lessons are saved as read-only. You can review the content and your original quiz answers anytime.
            </span>
          </div>
        </div>

        <DailyTutorHistory onSelect={(date) => { setSelectedDate(date); onSelectSession?.(date) }} />
      </div>
    </div>
  )
}

// ---------- HISTORY LIST ----------
function DailyTutorHistory({ onSelect, limit = 60 }) {
  const sessions = DEMO_HISTORY.slice(0, limit)

  const getWeekday = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' })
  const getMonthDay = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  if (sessions.length === 0) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
        <Calendar size={40} style={{ margin: '0 auto var(--space-3)', color: 'var(--color-text-muted)', opacity: 0.5 }} />
        <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)' }}>No lessons yet</p>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 4 }}>Complete a Daily Tutor lesson to see it here.</p>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-2)' }}>
      {sessions.map((s) => {
        const accuracy = s.result?.accuracy ?? null
        const passed = accuracy !== null && accuracy >= 70
        return (
          <ViewOnly key={s.date} tooltip="Sign up to review sessions">
            <button onClick={() => onSelect?.(s.date)} className="card card-hover" style={{ padding: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', cursor: 'pointer', background: 'var(--color-surface)', width: '100%' }}>
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
                <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)', marginTop: 2 }}>{s.topic}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{s.subject}</div>
              </div>
              <ChevronRight size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
            </button>
          </ViewOnly>
        )
      })}
    </div>
  )
}

// ============================================================
// HYETUTOR CHAT PAGE (full screen)
// ============================================================
function HyeTutorChatPage({ onNavigate, onBack, onAsk }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  const suggestedQuestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock exam today?',
    'What should I focus on this week?',
  ]

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, isTyping])

  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return
    setMessages((prev) => [...prev, { id: `u_${Date.now()}`, sender: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)
    try {
      const response = await onAsk(trimmed)
      const aiText = typeof response === 'string' ? response : response?.answer || ''
      setMessages((prev) => [...prev, { id: `h_${Date.now()}`, sender: 'hye', text: aiText || "I couldn't generate a response." }])
    } catch {
      setMessages((prev) => [...prev, { id: `h_${Date.now()}`, sender: 'hye', text: "I'm having trouble connecting right now." }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSend = () => sendMessage(input)

  return (
    <div style={{ background: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="flex-between" style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', position: 'sticky', top: 0, zIndex: 10 }}>
        <ViewOnly tooltip="Sign up to go back">
          <button onClick={onBack} className="btn btn-ghost" style={{ padding: 'var(--space-2)' }} aria-label="Back">
            <ArrowLeft size={20} />
          </button>
        </ViewOnly>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <Brain size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>HyeTutor</span>
          <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Chat</span>
          <Sparkles size={14} style={{ color: 'var(--color-warning)' }} />
        </div>
        <div style={{ width: 40 }} />
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', maxWidth: '48rem', width: '100%', margin: '0 auto' }}>
        {messages.length === 0 && !isTyping && (
          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
              <Brain size={32} style={{ color: 'var(--color-primary)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Ask HyeTutor anything</h3>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your personal AI coach for exam prep, study tips, and strategy.</p>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 'var(--space-3)' }}>
            <div style={{ maxWidth: '85%', padding: 'var(--space-3) var(--space-4)', borderRadius: msg.sender === 'user' ? 'var(--radius-xl) var(--radius-xl) var(--radius-sm) var(--radius-xl)' : 'var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-sm)', background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--color-surface)', color: msg.sender === 'user' ? 'white' : 'var(--color-text)', border: msg.sender === 'user' ? 'none' : '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 'var(--space-3)' }}>
            <div style={{ padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-xl)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Loader2 size={16} className="animate-spin" /> Thinking...
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {messages.length === 0 && (
        <div style={{ padding: '0 var(--space-4) var(--space-3)', maxWidth: '48rem', width: '100%', margin: '0 auto' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {suggestedQuestions.map((q, i) => (
              <ViewOnly key={i} tooltip="Sign up to ask">
                <button onClick={() => sendMessage(q)} style={{ padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                  💡 {q}
                </button>
              </ViewOnly>
            ))}
          </div>
        </div>
      )}

      <div style={{ position: 'sticky', bottom: 0, padding: 'var(--space-3) var(--space-4)', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', maxWidth: '48rem', margin: '0 auto' }}>
          <input type="text" className="input" placeholder="Ask HyeTutor anything..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }} style={{ flex: 1 }} />
          <ViewOnly tooltip="Sign up to send">
            <button onClick={handleSend} disabled={!input.trim() || isTyping} className="btn btn-primary" style={{ padding: 'var(--space-2) var(--space-3)' }} aria-label="Send">
              <Send size={18} />
            </button>
          </ViewOnly>
        </div>
      </div>
    </div>
  )
}
