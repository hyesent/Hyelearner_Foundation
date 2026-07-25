// ============================================================
// HYELEARNER: STUDY PLAN PAGE (V3 — Plan + Progress Toggle)
// AI-generated study plan with real-time progress tracking
// Auto-countdown to exam day with auto-end
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useProgress } from '../hooks'
import { storage } from '../storage'
import { ai, subscriptions } from '../services'
import { SUBJECTS, AI_LIMITS } from '../constants'
import { trackAIUsage } from '../utils'
import { LoadingScreen } from '../components/LoadingScreen'
import jsPDF from 'jspdf'
import {
  ArrowLeft,
  Calendar,
  Trash2,
  Loader2,
  Sparkles,
  Target,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  Download,
  RefreshCw,
  Cpu,
  Brain,
  Award,
  BookOpen,
  TrendingUp,
  Users,
  Flame,
  BarChart3,
  Lightbulb,
  Medal,
  Trophy,
  Crown,
  Info,
  AlertTriangle,
  Check,
  X,
  ChevronRight,
  ChevronDown,
  Star,
  GraduationCap,
  Lock,
  FileText,
  PlayCircle,
  StopCircle,
  Timer,
  Eye,
  EyeOff
} from 'lucide-react'

// ============================================================
// COUNTDOWN COMPONENT — PERSISTENT (Survives page refresh)
// ============================================================
function CountdownTimer({ targetDate, onEnd }) {
  const STORAGE_KEY = 'hyelearner_countdown_state'

  const getInitialState = () => {
    const target = new Date(targetDate)
    const now = new Date()
    const diff = target - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        if (data.targetDate === targetDate && !data.isOver) {
          const elapsed = Math.floor((now - new Date(data.savedAt)) / 1000)
          const totalSeconds = data.days * 86400 + data.hours * 3600 + data.minutes * 60 + data.seconds
          const remaining = Math.max(0, totalSeconds - elapsed)
          
          if (remaining > 0) {
            return {
              days: Math.floor(remaining / 86400),
              hours: Math.floor((remaining % 86400) / 3600),
              minutes: Math.floor((remaining % 3600) / 60),
              seconds: Math.floor(remaining % 60),
              isOver: false
            }
          }
        }
      }
    } catch (e) {}

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isOver: false
    }
  }

  const [timeRemaining, setTimeRemaining] = useState(getInitialState)
  const [isEnded, setIsEnded] = useState(timeRemaining.isOver)

  useEffect(() => {
    if (!isEnded && !timeRemaining.isOver) {
      const stateToSave = {
        targetDate: targetDate,
        days: timeRemaining.days,
        hours: timeRemaining.hours,
        minutes: timeRemaining.minutes,
        seconds: timeRemaining.seconds,
        isOver: timeRemaining.isOver,
        savedAt: new Date().toISOString()
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave))
      } catch (e) {}
    } else {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch (e) {}
    }
  }, [timeRemaining, isEnded, targetDate])

  useEffect(() => {
    if (isEnded) {
      if (onEnd) onEnd()
      return
    }

    const interval = setInterval(() => {
      const target = new Date(targetDate)
      const now = new Date()
      const diff = target - now

      if (diff <= 0) {
        setIsEnded(true)
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true })
        if (onEnd) onEnd()
        clearInterval(interval)
        return
      }

      setTimeRemaining({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        isOver: false
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, onEnd, isEnded])

  const { days, hours, minutes, seconds, isOver } = timeRemaining

  if (isOver || isEnded) {
    return (
      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-danger)' }}>
        <StopCircle style={{ width: '20px', height: '20px' }} />
        <span style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)' }}>Exam Day! 🎯</span>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>— Plan Complete</span>
      </div>
    )
  }

  return (
    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
      <Timer style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
      <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-primary)' }}>
          {days}d
        </span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-text)' }}>
          {String(hours).padStart(2, '0')}h
        </span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-text)' }}>
          {String(minutes).padStart(2, '0')}m
        </span>
        <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: 'var(--color-text)' }}>
          {String(seconds).padStart(2, '0')}s
        </span>
      </div>
      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>remaining</span>
    </div>
  )
}

// ============================================================
// PLAN VIEW — Static AI-generated plan (NO stats card)
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
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>{plan.exam_info.exam_type.toUpperCase()}</div>
              </div>
            )}
            {planData?.summary?.weak_areas && planData.summary.weak_areas.length > 0 && (
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
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-primary)' }}>{planData.summary.target_score}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {planData?.subject_breakdown && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <BarChart3 style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Subject Breakdown</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {Object.entries(planData.subject_breakdown).map(([subject, data]) => (
              <div key={subject} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div>
                    <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>{subject}</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {data.topics?.length || 0} topics • {data.hours_per_week}h/week
                    </div>
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    {data.weak_count > 0 && (
                      <span className="badge badge-danger" style={{ fontSize: 'var(--font-size-xs)' }}>
                        {data.weak_count} weak
                      </span>
                    )}
                    <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                      Priority: {data.priority || 'Normal'}
                    </span>
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
            <Calendar style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '600' }}>Weekly Schedule</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {planData.weekly_schedule.slice(0, 7).map((day, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>{day.day}</div>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{day.total_hours}h</span>
                </div>
                {day.focus && (
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                    Focus: {day.focus}
                  </div>
                )}
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

      {planData?.topic_priorities && planData.topic_priorities.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Target style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '600' }}>Topic Priorities</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-2)', maxHeight: '200px', overflowY: 'auto' }}>
            {planData.topic_priorities.slice(0, 10).map((topic, i) => (
              <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)' }}>
                <div>
                  <span style={{ color: 'var(--color-text)' }}>{topic.subject}</span>
                  <span style={{ color: 'var(--color-text-muted)' }}> — {topic.topic}</span>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <span className={`badge ${topic.priority === 'High' ? 'badge-danger' : topic.priority === 'Medium' ? 'badge-warning' : 'badge-success'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
                    {topic.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {planData?.recommendations && planData.recommendations.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
            <Lightbulb style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Recommendations</span>
          </div>
          <ul className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {planData.recommendations.map((rec, i) => (
              <li key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {planData?.milestones && planData.milestones.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <Trophy style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Milestones</span>
          </div>
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            {planData.milestones.map((milestone, i) => (
              <div key={i} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-3xl)' }}>
                  {milestone.icon === '🌱' ? <Sparkles style={{ width: '32px', height: '32px', color: 'var(--color-success)' }} /> :
                   milestone.icon === '📈' ? <TrendingUp style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} /> :
                   milestone.icon === '🎯' ? <Target style={{ width: '32px', height: '32px', color: 'var(--color-warning)' }} /> :
                   milestone.icon === '🏆' ? <Trophy style={{ width: '32px', height: '32px', color: 'var(--color-warning)' }} /> :
                   <Star style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />}
                </div>
                <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                  Day {milestone.day}: {milestone.percentage}%
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{milestone.target}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', marginTop: 'var(--space-1)' }}>
                  <Award style={{ width: '14px', height: '14px', display: 'inline', marginRight: 'var(--space-1)' }} />
                  {milestone.reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <button
          onClick={onRegenerate}
          disabled={generating}
          className="btn btn-outline flex-1 flex-center"
        >
          <RefreshCw style={{ width: '16px', height: '16px' }} /> Regenerate
        </button>
        <button
          onClick={onExportPDF}
          disabled={exporting}
          className="btn btn-primary flex-1 flex-center"
        >
          {exporting ? (
            <><Loader2 className="animate-spin" style={{ width: '16px', height: '16px', marginRight: 'var(--space-2)' }} /> Exporting...</>
          ) : (
            <><Download style={{ width: '16px', height: '16px' }} /> Export PDF</>
          )}
        </button>
      </div>
    </>
  )
}

// ============================================================
// PROGRESS VIEW — Dynamically recalculates everything from real data
// ============================================================
function ProgressView({ planData, plan }) {
  const [progressData, setProgressData] = useState(null)
  const [loading, setLoading] = useState(true)

  const calculateProgress = () => {
    if (!planData) return

    setLoading(true)
    const mastery = storage.getMastery()
    const sessions = storage.getSessions()
    const lessons = storage.getLessons()

    const allTopics = []
    if (planData.weekly_schedule) {
      planData.weekly_schedule.forEach(day => {
        day.topics.forEach(topic => {
          if (!allTopics.find(t => t.topic === topic.topic && t.subject === topic.subject)) {
            allTopics.push({
              topic: topic.topic,
              subject: topic.subject,
              hours: topic.hours || 0
            })
          }
        })
      })
    }

    const topicProgress = allTopics.map(t => {
      const masteryKey = Object.keys(mastery).find(
        key => key.toLowerCase().includes(t.topic.toLowerCase()) ||
               t.topic.toLowerCase().includes(key.toLowerCase())
      )
      const masteryData = masteryKey ? mastery[masteryKey] : null

      const topicSessions = sessions.filter(s => {
        if (s.topic && s.topic.toLowerCase().includes(t.topic.toLowerCase())) return true
        if (s.questions) {
          return s.questions.some(q => 
            q.topic && q.topic.toLowerCase().includes(t.topic.toLowerCase())
          )
        }
        return false
      })

      const accuracy = masteryData?.accuracy || 0
      const status = accuracy >= 80 ? 'completed' : accuracy > 0 ? 'in-progress' : 'not-started'

      return {
        ...t,
        mastery: accuracy,
        sessions: topicSessions.length,
        status,
        lastStudied: masteryData?.updatedAt || null,
        attempts: masteryData?.attempts || 0
      }
    })

    const total = topicProgress.length
    const completed = topicProgress.filter(t => t.status === 'completed').length
    const inProgress = topicProgress.filter(t => t.status === 'in-progress').length
    const notStarted = topicProgress.filter(t => t.status === 'not-started').length
    const overallCompletion = total > 0 ? Math.round((completed / total) * 100) : 0

    const subjectBreakdown = {}
    topicProgress.forEach(t => {
      if (!subjectBreakdown[t.subject]) {
        subjectBreakdown[t.subject] = {
          total: 0,
          completed: 0,
          inProgress: 0,
          notStarted: 0,
          topics: []
        }
      }
      subjectBreakdown[t.subject].total++
      if (t.status === 'completed') subjectBreakdown[t.subject].completed++
      else if (t.status === 'in-progress') subjectBreakdown[t.subject].inProgress++
      else subjectBreakdown[t.subject].notStarted++
      subjectBreakdown[t.subject].topics.push(t)
    })

    const weeklyProgress = []
    if (planData.weekly_schedule) {
      planData.weekly_schedule.slice(0, 7).forEach(day => {
        const weekTopics = day.topics.map(t => {
          const found = topicProgress.find(p => 
            p.topic === t.topic && p.subject === t.subject
          )
          return found || { ...t, status: 'not-started', mastery: 0, sessions: 0 }
        })
        const weekCompleted = weekTopics.filter(t => t.status === 'completed').length
        weeklyProgress.push({
          day: day.day,
          topics: weekTopics,
          completed: weekCompleted,
          total: weekTopics.length,
          percentage: weekTopics.length > 0 ? Math.round((weekCompleted / weekTopics.length) * 100) : 0
        })
      })
    }

    const topicPriorities = topicProgress.map(t => ({
      ...t,
      priority: t.mastery < 30 ? 'High' : t.mastery < 50 ? 'Medium' : 'Low'
    })).sort((a, b) => a.mastery - b.mastery)

    const milestones = []
    const totalDays = planData.summary?.days_remaining || 30
    const milestoneDays = [Math.floor(totalDays * 0.25), Math.floor(totalDays * 0.5), Math.floor(totalDays * 0.75), totalDays]
    const milestoneTargets = [25, 50, 75, 100]
    
    milestoneDays.forEach((day, idx) => {
      if (day > 0 && day <= totalDays) {
        const targetPercentage = milestoneTargets[idx]
        const isAchieved = overallCompletion >= targetPercentage
        milestones.push({
          day: day,
          percentage: targetPercentage,
          target: `${targetPercentage}% of topics mastered`,
          reward: isAchieved ? '✅ Achieved!' : `${targetPercentage - overallCompletion}% to go`,
          icon: isAchieved ? '🏆' : '🎯'
        })
      }
    })

    const weakTopics = topicProgress.filter(t => t.mastery < 50)
    const recommendations = []
    if (weakTopics.length > 0) {
      recommendations.push(`Focus on these weak topics: ${weakTopics.map(t => t.topic).join(', ')}`)
    }
    if (overallCompletion < 30) {
      recommendations.push('Increase your study hours to catch up on the plan')
    }
    if (inProgress > 0) {
      recommendations.push(`You have ${inProgress} topics in progress. Complete them to boost your mastery!`)
    }
    if (completed > 0) {
      recommendations.push(`Great job! You've mastered ${completed} topics. Keep going!`)
    }

    setProgressData({
      topicProgress,
      total,
      completed,
      inProgress,
      notStarted,
      overallCompletion,
      weeklyProgress,
      subjectBreakdown,
      topicPriorities,
      milestones,
      recommendations,
      weakTopics: weakTopics.length,
      totalHours: topicProgress.reduce((sum, t) => sum + t.hours, 0),
      sessionsCompleted: sessions.filter(s => s.status === 'completed').length,
      totalXP: storage.getGamification()?.totalXP || storage.getGamification()?.xp || 0
    })

    setLoading(false)
  }

  useEffect(() => {
    calculateProgress()
  }, [planData])

  useEffect(() => {
    const interval = setInterval(() => {
      calculateProgress()
    }, 30000)
    return () => clearInterval(interval)
  }, [planData])

  if (loading || !progressData) {
    return (
      <div className="flex-center" style={{ padding: 'var(--space-8)' }}>
        <div className="spinner spinner-sm"></div>
      </div>
    )
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--color-success)' }} />
      case 'in-progress': return <PlayCircle style={{ width: '16px', height: '16px', color: 'var(--color-warning)' }} />
      default: return <Clock style={{ width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      default: return 'Not Started'
    }
  }

  return (
    <>
      <div className="grid-4" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)' }}>{progressData.overallCompletion}%</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Overall Progress</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-success)' }}>{progressData.completed}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Completed</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-warning)' }}>{progressData.inProgress}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>In Progress</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-text-muted)' }}>{progressData.notStarted}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Not Started</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Plan Progress</span>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
            {progressData.overallCompletion}%
          </span>
        </div>
        <div className="progress" style={{ height: '8px' }}>
          <div className="progress-fill progress-fill-primary" style={{ width: `${progressData.overallCompletion}%` }} />
        </div>
        <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
          <span>📚 {progressData.total} topics</span>
          <span>⏱️ {progressData.totalHours}h total</span>
          <span>📝 {progressData.sessionsCompleted} sessions</span>
          <span>⚡ {progressData.totalXP} XP</span>
        </div>
      </div>

      {Object.keys(progressData.subjectBreakdown).length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <BarChart3 style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Subject Progress</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {Object.entries(progressData.subjectBreakdown).map(([subject, data]) => {
              const subjectProgress = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0
              return (
                <div key={subject} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                  <div className="flex-between">
                    <div>
                      <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>{subject}</div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                        {data.completed}/{data.total} completed • {data.inProgress} in progress • {data.notStarted} not started
                      </div>
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                      <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
                        {subjectProgress}%
                      </span>
                    </div>
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
            <Calendar style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '600' }}>Weekly Progress</span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {progressData.weeklyProgress.map((week, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                <div className="flex-between">
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>{week.day}</div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                      {week.completed}/{week.total} done
                    </span>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
                      {week.percentage}%
                    </span>
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
                        <span style={{ color: topic.status === 'completed' ? 'var(--color-success)' : 'var(--color-text)' }}>
                          {topic.subject} — {topic.topic}
                        </span>
                        {topic.mastery > 0 && (
                          <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                            {topic.mastery}%
                          </span>
                        )}
                      </div>
                      <span style={{ color: 'var(--color-text-muted)' }}>
                        {getStatusLabel(topic.status)}
                      </span>
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
            <Target style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '600' }}>Topic Mastery</span>
            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
              {progressData.weakTopics} weak
            </span>
          </div>
          <div className="stack" style={{ gap: 'var(--space-2)', maxHeight: '300px', overflowY: 'auto' }}>
            {progressData.topicPriorities.map((topic, i) => (
              <div key={i} className="flex-between" style={{ 
                fontSize: 'var(--font-size-sm)', 
                padding: 'var(--space-2) var(--space-3)', 
                background: 'var(--color-background)', 
                borderRadius: 'var(--radius)',
                borderLeft: `3px solid ${topic.mastery >= 80 ? 'var(--color-success)' : topic.mastery >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'}`
              }}>
                <div>
                  <span style={{ color: 'var(--color-text)' }}>{topic.subject}</span>
                  <span style={{ color: 'var(--color-text-muted)' }}> — {topic.topic}</span>
                  {topic.mastery < 50 && <span style={{ color: 'var(--color-danger)', marginLeft: 'var(--space-1)' }}>⚠️</span>}
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: topic.mastery >= 80 ? 'var(--color-success)' : topic.mastery >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                    {topic.mastery}%
                  </span>
                  <span className={`badge ${topic.priority === 'High' ? 'badge-danger' : topic.priority === 'Medium' ? 'badge-warning' : 'badge-success'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
                    {topic.priority}
                  </span>
                  <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                    {topic.sessions} sessions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {progressData.milestones.length > 0 && (
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <Trophy style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Milestones</span>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
              {progressData.milestones.filter(m => m.reward.includes('✅')).length} achieved
            </span>
          </div>
          <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
            {progressData.milestones.map((milestone, i) => {
              const isAchieved = milestone.reward.includes('✅')
              return (
                <div key={i} className="card" style={{ 
                  padding: 'var(--space-3) var(--space-4)', 
                  background: isAchieved ? 'var(--color-success-light)' : 'var(--color-background)', 
                  textAlign: 'center',
                  border: isAchieved ? '1px solid var(--color-success)' : '1px solid var(--color-border)'
                }}>
                  <div style={{ fontSize: 'var(--font-size-3xl)' }}>
                    {isAchieved ? '🏆' : '🎯'}
                  </div>
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                    Day {milestone.day}: {milestone.percentage}%
                  </div>
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
            <Lightbulb style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500' }}>Recommendations</span>
          </div>
          <ul className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {progressData.recommendations.map((rec, i) => (
              <li key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                {rec}
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

  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

  // ============================================================
  // FORM STATE — ALL EMPTY, NO DEFAULTS
  // ============================================================
  const [formData, setFormData] = useState({
    goal: '',
    subjects: [],
    hours_per_week: '',
    days_until_exam: '',
    target_score: '',
    study_style: '',
    exam_type: '',
    exam_date: ''
  })

  const subjectOptions = Object.keys(SUBJECTS).map(key => ({
    key,
    label: SUBJECTS[key].label,
    icon: SUBJECTS[key].icon
  }))

  const studyStyles = [
    { value: 'active', label: 'Active Learning', desc: 'Learn by doing' },
    { value: 'visual', label: 'Visual Learning', desc: 'Images & diagrams' },
    { value: 'reading', label: 'Reading/Writing', desc: 'Read & write notes' },
    { value: 'balanced', label: 'Balanced', desc: 'All-round approach' }
  ]

  const examTypes = [
    { value: 'jamb', label: 'JAMB' },
    { value: 'waec', label: 'WAEC' },
    { value: 'neco', label: 'NECO' },
    { value: 'ssce', label: 'SSCE' },
    { value: 'pre-university', label: 'Pre-University' }
  ]

  // ============================================================
  // HELPERS
  // ============================================================
  const getDefaultExamDate = (examType) => {
    const now = new Date()
    const year = now.getFullYear()
    if (examType === 'jamb' || examType === 'JAMB') return `${year}-06-15`
    if (examType === 'waec' || examType === 'WAEC') return `${year}-06-30`
    if (examType === 'neco' || examType === 'NECO') return `${year}-07-31`
    if (examType === 'ssce' || examType === 'SSCE') return `${year}-12-15`
    if (examType === 'pre-university') return `${year}-09-01`
    const defaultDate = new Date(now)
    defaultDate.setDate(now.getDate() + 90)
    return defaultDate.toISOString().split('T')[0]
  }

  const calculateDaysRemaining = (date) => {
    if (!date) return 0
    const target = new Date(date)
    const now = new Date()
    const diff = target - now
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  // ============================================================
  // LOAD SUBSCRIPTION
  // ============================================================
  useEffect(() => {
    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (error) {
        console.error('Failed to load subscription:', error)
        setSubscription({ isActive: false })
      } finally {
        setSubLoading(false)
      }
    }
    loadSubscription()
  }, [])

  // ============================================================
  // LOAD SAVED PLAN — RESTORES EXAM DATE
  // ============================================================
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem('hyelearner_ai_usage')
    if (saved) {
      const usage = JSON.parse(saved)
      if (usage.date === today) {
        const remaining = AI_LIMITS.daily - usage.count
        setAiCallsRemaining(Math.max(0, remaining))
        setAiLimitReached(remaining <= 0)
      } else {
        localStorage.setItem('hyelearner_ai_usage', JSON.stringify({ date: today, count: 0 }))
        setAiCallsRemaining(AI_LIMITS.daily)
        setAiLimitReached(false)
      }
    } else {
      localStorage.setItem('hyelearner_ai_usage', JSON.stringify({ date: today, count: 0 }))
      setAiCallsRemaining(AI_LIMITS.daily)
      setAiLimitReached(false)
    }

    const savedPlan = localStorage.getItem('hyelearner_study_plan_v2')
    if (savedPlan) {
      try {
        const data = JSON.parse(savedPlan)
        setPlan(data)
        setPlanData(data.plan)
        setHasPlan(true)
        
        // ✅ Restore exam date from saved plan
        const savedExamDate = data.exam_date || data.exam_info?.exam_date || data.plan?.exam_date
        if (savedExamDate) {
          const daysLeft = calculateDaysRemaining(savedExamDate)
          if (daysLeft <= 0) {
            setPlanEnded(true)
          }
          setFormData(prev => ({
            ...prev,
            exam_date: savedExamDate,
            exam_type: data.exam_info?.exam_type || prev.exam_type
          }))
        }
        
        setLoading(false)
        return
      } catch (e) {}
    }

    setLoading(false)
  }, [user])

  // ============================================================
  // TOGGLE SUBJECT
  // ============================================================
  const toggleSubject = (subjectKey) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subjectKey)
        ? prev.subjects.filter(s => s !== subjectKey)
        : [...prev.subjects, subjectKey]
    }))
  }

  // ============================================================
  // GENERATE PLAN — STORES EXAM DATE IN PLAN
  // ============================================================
  const generatePlan = async () => {
    if (formData.subjects.length === 0) {
      alert('Please select at least one subject.')
      return
    }

    if (!formData.goal.trim()) {
      alert('Please enter your study goal.')
      return
    }

    if (!formData.exam_date) {
      alert('Please select your exam date.')
      return
    }

    if (aiLimitReached) {
      setError('AI limit reached. Please try again tomorrow.')
      return
    }

    setGenerating(true)
    setError(null)

    try {
      const subjectLabels = formData.subjects.map(key =>
        SUBJECTS[key]?.label || key
      )

      const result = await ai.studyPlanV2({
        goal: formData.goal,
        subjects: subjectLabels,
        hours_per_week: parseInt(formData.hours_per_week) || 15,
        days_until_exam: calculateDaysRemaining(formData.exam_date),
        target_score: formData.target_score || '300+',
        study_style: formData.study_style || 'active',
        exam_type: formData.exam_type || 'jamb',
        exam_date: formData.exam_date
      })

      trackAIUsage()

      let totalTopics = 0
      if (result.plan?.weekly_schedule) {
        result.plan.weekly_schedule.forEach(day => {
          totalTopics += day.topics.length
        })
      }
      if (result.plan?.summary) {
        result.plan.summary.total_topics = totalTopics
      }

      // ✅ CRITICAL: Store exam_date in the plan for persistence
      const planWithDate = {
        ...result,
        exam_date: formData.exam_date,
        exam_info: {
          ...(result.exam_info || {}),
          exam_type: formData.exam_type || 'jamb',
          exam_date: formData.exam_date
        },
        plan: {
          ...result.plan,
          exam_date: formData.exam_date
        }
      }

      setPlan(planWithDate)
      setPlanData(planWithDate.plan)
      setHasPlan(true)
      setPlanEnded(false)
      localStorage.setItem('hyelearner_study_plan_v2', JSON.stringify(planWithDate))
      
    } catch (err) {
      console.error('Failed to generate study plan:', err)
      setError(err.message || 'Failed to generate study plan. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  // ============================================================
  // EXPORT PDF
  // ============================================================
  const handleExportPDF = () => {
    if (!planData) {
      alert('No study plan to export.')
      return
    }

    setExporting(true)
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      let y = margin

      const checkPageBreak = (neededSpace) => {
        if (y + neededSpace > pageHeight - margin) {
          doc.addPage()
          y = margin
        }
      }

      doc.setFontSize(20)
      doc.setTextColor(79, 70, 229)
      doc.text('Hyelearner — Study Plan', pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      const dateStr = new Date().toISOString().slice(0, 10)
      doc.text(`Generated: ${dateStr}`, pageWidth / 2, y, { align: 'center' })
      y += 8

      const examType = plan?.exam_info?.exam_type || formData.exam_type || 'JAMB'
      doc.text(`Exam: ${examType.toUpperCase()}`, pageWidth / 2, y, { align: 'center' })
      y += 8
      doc.text(`Target Score: ${planData?.summary?.target_score || formData.target_score}`, pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setDrawColor(200, 200, 200)
      doc.line(margin, y, pageWidth - margin, y)
      y += 8

      if (planData?.summary) {
        doc.setFontSize(12)
        doc.setTextColor(50, 50, 50)
        doc.text(`Days Remaining: ${planData.summary.days_remaining || 0}`, margin, y)
        y += 7
        doc.text(`Total Hours: ${planData.summary.total_hours || 0}`, margin, y)
        y += 7
        doc.text(`Total Topics: ${planData.summary.total_topics || 0}`, margin, y)
        y += 10
      }

      if (planData?.weekly_schedule) {
        checkPageBreak(30)
        doc.setFontSize(14)
        doc.setTextColor(0, 0, 0)
        doc.text('Weekly Schedule', margin, y)
        y += 7

        doc.setFontSize(9)
        doc.setTextColor(80, 80, 80)
        for (const day of planData.weekly_schedule.slice(0, 7)) {
          checkPageBreak(20)
          const topicsText = day.topics.map(t => 
            `${t.subject} — ${t.topic} (${t.hours}h)`
          ).join(', ')
          doc.text(`• ${day.day}: ${topicsText}`, margin + 2, y)
          y += 6
        }
        y += 5
      }

      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text('Generated by Hyelearner — AI-powered exam prep', pageWidth / 2, pageHeight - 10, { align: 'center' })

      doc.save(`study-plan-${dateStr}.pdf`)
    } catch (error) {
      console.error('PDF export failed:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  // ============================================================
  // HANDLE PLAN END
  // ============================================================
  const handlePlanEnd = () => {
    setPlanEnded(true)
  }

  // ============================================================
  // HANDLE RESET
  // ============================================================
  const handleReset = () => {
    if (confirm('Are you sure you want to reset your study plan?')) {
      localStorage.removeItem('hyelearner_study_plan_v2')
      setPlan(null)
      setPlanData(null)
      setHasPlan(false)
      setPlanEnded(false)
    }
  }

  // ============================================================
  // RENDER
  // ============================================================
  const isFreeUser = !subscription?.isActive

  if (loading || subLoading) {
    return <LoadingScreen />
  }

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Calendar style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2">Study Plan</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>AI-generated personalized study plan</p>
              </div>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>

          <div className="card text-center" style={{ padding: 'var(--space-12)', maxWidth: '480px', margin: '0 auto' }}>
            <div className="flex-center" style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'var(--color-danger-light)',
              margin: '0 auto var(--space-6)'
            }}>
              <Lock style={{ width: '40px', height: '40px', color: 'var(--color-danger)' }} />
            </div>
            <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Study Plan is for Subscribers</h2>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
              Get a personalized AI-generated study plan to boost your exam preparation.  
              Upgrade to Foundation plan to unlock this feature.
            </p>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center' }}>
              <button 
                onClick={() => navigate('/practice')} 
                className="btn btn-outline flex-center"
              >
                <Target style={{ width: '16px', height: '16px' }} /> Go to Practice
              </button>
              <button 
                onClick={() => navigate('/settings')} 
                className="btn btn-primary flex-center"
              >
                <Crown style={{ width: '16px', height: '16px' }} /> Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ✅ Get exam date from plan (stored in localStorage)
  const examDate = plan?.exam_date || planData?.exam_date || plan?.exam_info?.exam_date || formData.exam_date || null

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Calendar style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Study Plan</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {hasPlan ? (planEnded ? 'Plan Complete! 🎯' : 'Your personalized study plan') : 'Generate your study plan'}
              </p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* ✅ Countdown Timer - Shows if exam date exists (restored from localStorage) */}
        {examDate && !planEnded && (
          <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
            <CountdownTimer targetDate={examDate} onEnd={handlePlanEnd} />
          </div>
        )}

        {/* Plan Ended Banner */}
        {hasPlan && planEnded && (
          <div className="card" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-success-light)', border: '2px solid var(--color-success)', textAlign: 'center', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
              <Trophy style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} />
              <span style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)', color: 'var(--color-success)' }}>🎉 Plan Complete!</span>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
              You've successfully completed your study plan. Great job! 🚀
            </p>
          </div>
        )}

        {/* AI Limit Banner */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu style={{ width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              AI Calls Remaining: <strong>{aiCallsRemaining}</strong> / {AI_LIMITS.daily}
            </span>
          </div>
          {aiLimitReached && <span className="badge badge-danger">Limit Reached</span>}
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle style={{ width: '16px', height: '16px' }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {!hasPlan ? (
          // ===== FORM VIEW =====
          <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); generatePlan() }} className="stack" style={{ gap: 'var(--space-5)' }}>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                Fill in your details to generate a personalized study plan powered by AI.
              </p>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <GraduationCap style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Exam Type
                </label>
                <select
                  className="select"
                  value={formData.exam_type}
                  onChange={(e) => {
                    const newExam = e.target.value
                    const newDate = getDefaultExamDate(newExam)
                    setFormData(prev => ({ 
                      ...prev, 
                      exam_type: newExam,
                      exam_date: newDate
                    }))
                  }}
                >
                  <option value="">Select exam type</option>
                  {examTypes.map((exam) => (
                    <option key={exam.value} value={exam.value}>{exam.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Calendar style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Exam Date
                </label>
                <input
                  type="date"
                  className="input"
                  value={formData.exam_date}
                  onChange={(e) => {
                    const newDate = e.target.value
                    setFormData(prev => ({ 
                      ...prev, 
                      exam_date: newDate
                    }))
                  }}
                  required
                />
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Target style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Your Study Goal
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g., Pass JAMB with 300+, Master all topics..."
                  value={formData.goal}
                  onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                  required
                />
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Subjects to Study ({formData.subjects.length} selected)
                </label>
                <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {subjectOptions.map((subject) => (
                    <button
                      key={subject.key}
                      type="button"
                      onClick={() => toggleSubject(subject.key)}
                      className={`btn ${formData.subjects.includes(subject.key) ? 'btn-primary' : 'btn-outline'}`}
                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                    >
                      {subject.icon} {subject.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Clock style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Hours Available per Week
                </label>
                <select
                  className="select"
                  value={formData.hours_per_week}
                  onChange={(e) => setFormData(prev => ({ ...prev, hours_per_week: e.target.value }))}
                >
                  <option value="">Select hours</option>
                  {[5, 10, 15, 20, 25, 30, 35, 40].map((h) => (
                    <option key={h} value={h}>{h} hours</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Award style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Target Score
                </label>
                <select
                  className="select"
                  value={formData.target_score}
                  onChange={(e) => setFormData(prev => ({ ...prev, target_score: e.target.value }))}
                >
                  <option value="">Select target score</option>
                  <option value="200+">200+</option>
                  <option value="250+">250+</option>
                  <option value="300+">300+</option>
                  <option value="350+">350+</option>
                  <option value="400+">400+</option>
                </select>
              </div>

              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Brain style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Study Style
                </label>
                <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {studyStyles.map((style) => (
                    <button
                      key={style.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, study_style: style.value }))}
                      className={`btn ${formData.study_style === style.value ? 'btn-primary' : 'btn-outline'}`}
                      style={{ fontSize: 'var(--font-size-sm)', textTransform: 'capitalize' }}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={generating || formData.subjects.length === 0 || !formData.exam_date || !formData.goal.trim()}
                className="btn btn-primary flex-center"
                style={{ width: '100%', padding: 'var(--space-3)' }}
              >
                {generating ? (
                  <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Generating...</>
                ) : (
                  <><Sparkles style={{ width: '16px', height: '16px' }} /> Generate Study Plan</>
                )}
              </button>

              {formData.subjects.length === 0 && (
                <p className="flex-center" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
                  <AlertCircle style={{ width: '16px', height: '16px' }} /> Please select at least one subject
                </p>
              )}
              {!formData.exam_date && (
                <p className="flex-center" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
                  <AlertCircle style={{ width: '16px', height: '16px' }} /> Please select your exam date
                </p>
              )}
              {!formData.goal.trim() && (
                <p className="flex-center" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
                  <AlertCircle style={{ width: '16px', height: '16px' }} /> Please enter your study goal
                </p>
              )}
            </form>
          </div>
        ) : (
          // ===== PLAN VIEW =====
          <>
            <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <button
                onClick={() => setViewMode('plan')}
                className={`btn ${viewMode === 'plan' ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1 }}
              >
                <FileText style={{ width: '16px', height: '16px' }} /> Plan
              </button>
              <button
                onClick={() => setViewMode('progress')}
                className={`btn ${viewMode === 'progress' ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1 }}
                disabled={planEnded}
              >
                <TrendingUp style={{ width: '16px', height: '16px' }} /> Progress
              </button>
              <button
                onClick={handleReset}
                className="btn btn-danger"
                style={{ background: 'var(--color-danger)', color: 'white' }}
              >
                <Trash2 style={{ width: '16px', height: '16px' }} />
              </button>
            </div>

            {viewMode === 'plan' ? (
              <PlanView
                planData={planData}
                plan={plan}
                onExportPDF={handleExportPDF}
                onRegenerate={generatePlan}
                exporting={exporting}
                generating={generating}
              />
            ) : (
              <ProgressView planData={planData} plan={plan} />
            )}
          </>
        )}
      </div>
    </div>
  )
}