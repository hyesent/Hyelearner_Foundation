// ============================================================
// HYELEARNER: HYETUTOR — MAIN PAGE
// Your personal AI coach dashboard
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { LoadingScreen } from '../../components/LoadingScreen'
import { useHyeTutor } from './hooks/useHyeTutor'
import {
  MissionHero,
  PerformanceCenter,
  WeeklyMomentum,
  HyeTutorChat,
  AIHabits,
  QuickActions,
  ReflectionModal
} from './components'
import {
  ArrowLeft,
  Brain,
  Sparkles,
  RefreshCw,
  MessageSquare,
  X,
} from 'lucide-react'

export default function HyeTutorPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const {
    data,
    loading,
    refreshing,
    error,
    isStale,
    refresh,
    askQuestion,
    completeMission,
    submitReflection
  } = useHyeTutor()

  const [chatLoading, setChatLoading] = useState(false)
  const [showReflection, setShowReflection] = useState(false)
  const [reflectionSubmitting, setReflectionSubmitting] = useState(false)
  const [reflectionSuccess, setReflectionSuccess] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)

  const handleAsk = async (question) => {
    setChatLoading(true)
    try {
      const response = await askQuestion(question)
      return response
    } finally {
      setChatLoading(false)
    }
  }

  const handleMissionToggle = async (missionId) => {
    await completeMission(missionId)
  }

  const handleReflectionSubmit = async (reflection) => {
    setReflectionSubmitting(true)
    try {
      const result = await submitReflection(reflection)
      if (result && !result.error) {
        setReflectionSuccess(true)
        setTimeout(() => {
          setShowReflection(false)
          setReflectionSuccess(false)
        }, 2000)
      }
      return result
    } finally {
      setReflectionSubmitting(false)
    }
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (!data) {
    return (
      <div className="flex-center" style={{ minHeight: '400px' }}>
        <div className="card text-center" style={{ padding: 'var(--space-8)', maxWidth: '480px' }}>
          <div className="flex-center" style={{
            width: '64px', height: '64px', borderRadius: '50%',
            background: 'var(--color-primary-light)',
            margin: '0 auto var(--space-4)'
          }}>
            <Brain style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
          </div>
          <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Data Yet</h3>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>
            Complete some study sessions to get personalized AI coaching.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/practice')}>
            Start Studying
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-primary-light)'
            }}>
              <Brain style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <h1 className="h2" style={{ margin: 0 }}>HyeTutor</h1>
                <Sparkles style={{ width: '18px', height: '18px', color: 'var(--color-warning)' }} />
                {isStale && (
                  <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>
                    ⚠️ Stale
                  </span>
                )}
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Your personal AI coach
                {data.examDays != null && (
                  <> • {data.examDays} {data.examDays === 1 ? 'day' : 'days'} until exam</>
                )}
                {data.examDays == null && (
                  <> • No exam date set</>
                )}
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button
              onClick={() => setShowReflection(true)}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
            >
              <MessageSquare style={{ width: '16px', height: '16px' }} /> Reflect
            </button>
            <button
              onClick={refresh}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              disabled={refreshing}
            >
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        {/* Stale Warning */}
        {isStale && (
          <div className="warning-card" style={{ marginBottom: 'var(--space-4)' }}>
            <span>⚠️ Showing cached data. AI analysis is in progress...</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <span>{error}</span>
          </div>
        )}

        {/* Hero Section */}
        <MissionHero
          missions={data.missions || []}
          timeBudget={data.timeBudget || { total: 2.75, completed: 1.33, remaining: 1.42 }}
          xpReward={data.totalXpReward || 120}
          weeklyGoal={data.weeklyGoal || { total: 24, completed: 18, percentage: 75 }}
          nextSession={data.nextSession || null}
          onMissionToggle={handleMissionToggle}
          onStartSession={(session) => {
            navigate('/practice', { state: { subject: session.subject, topic: session.topic } })
          }}
        />

        {/* Performance Center */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <PerformanceCenter metrics={data.performance || {
            examReadiness: 89,
            confidence: 91,
            consistency: 87,
            focus: 84,
            burnoutRisk: 'Low'
          }} />
        </div>

        {/* Two-Column Layout */}
        <div className="grid-2" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          {/* Left Column */}
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <WeeklyMomentum data={data.momentum || {
              hours: 18.4,
              average: 2.6,
              bestDay: 'Tuesday',
              longestSession: '2h 13m',
              missedDays: 1,
              streak: 7,
              weeklyData: [
                { day: 'Monday', hours: 3.2 },
                { day: 'Tuesday', hours: 4.0 },
                { day: 'Wednesday', hours: 2.4 },
                { day: 'Thursday', hours: 1.8 },
                { day: 'Friday', hours: 2.4 },
                { day: 'Saturday', hours: 1.6 },
                { day: 'Sunday', hours: 1.6 }
              ]
            }} />

            <AIHabits habits={data.habits || []} />
          </div>

          {/* Right Column */}
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <HyeTutorChat
              insights={data.insights || []}
              onAsk={handleAsk}
              loading={chatLoading}
              mode="embedded"
              onExpand={() => setShowChatModal(true)}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <QuickActions />
        </div>

        {/* Reflection Modal */}
        <ReflectionModal
          isOpen={showReflection}
          onClose={() => setShowReflection(false)}
          onSubmit={handleReflectionSubmit}
          submitting={reflectionSubmitting}
          success={reflectionSuccess}
        />

        {/* ===== FULL CHAT MODAL ===== */}
        {showChatModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowChatModal(false)}
            style={{ zIndex: 200 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal"
              style={{
                maxWidth: '640px',
                width: '100%',
                padding: 0,
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Modal header */}
              <div
                className="flex-between"
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  borderBottom: '1px solid var(--color-border)',
                  flexShrink: 0,
                }}
              >
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Brain size={18} style={{ color: 'var(--color-primary)' }} />
                  <span
                    style={{
                      fontStyle: 'italic',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text)',
                    }}
                  >
                    HyeTutor
                  </span>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text)',
                    }}
                  >
                    Chat
                  </span>
                </div>
                <button
                  onClick={() => setShowChatModal(false)}
                  className="btn btn-ghost"
                  style={{ padding: 'var(--space-1)' }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Full-mode chat */}
              <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
                <div style={{ flex: 1, minHeight: 0 }}>
                  <HyeTutorChat
                    insights={data.insights || []}
                    onAsk={handleAsk}
                    loading={chatLoading}
                    mode="full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
