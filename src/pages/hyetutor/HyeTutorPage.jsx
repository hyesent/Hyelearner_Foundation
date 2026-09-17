// ============================================================
// HYELEARNER: HYETUTOR — MAIN PAGE
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { useHydration } from '../../context'
import { LoadingScreen } from '../../components/LoadingScreen'
import { useHyeTutor } from './hooks/useHyeTutor'
import {
  MissionHero,
  PerformanceCenter,
  WeeklyMomentum,
  HyeTutorChat,
  AIHabits,
  QuickActions,
  ReflectionModal,
  DailyTutorCard,
  DailyTutorModal,
} from './components'
import {
  ArrowLeft,
  Brain,
  Sparkles,
  RefreshCw,
  MessageSquare,
  X,
  Zap,
} from 'lucide-react'

export default function HyeTutorPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { aiUsage } = useHydration()
  const {
    data,
    loading,
    refreshing,
    error,
    isStale,
    refresh,
    askQuestion,
    completeMission,
    submitReflection,
  } = useHyeTutor()

  const [chatLoading, setChatLoading] = useState(false)
  const [showReflection, setShowReflection] = useState(false)
  const [reflectionSubmitting, setReflectionSubmitting] = useState(false)
  const [reflectionSuccess, setReflectionSuccess] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)
  const [showDailyTutor, setShowDailyTutor] = useState(false)

  const handleAsk = async (question) => {
    setChatLoading(true)
    try {
      return await askQuestion(question)
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

  const handleDailyTutorOpen = ({ needsPlan }) => {
    if (needsPlan) {
      navigate('/study-plan')
      return
    }
    setShowDailyTutor(true)
  }

  if (loading) return <LoadingScreen />

  if (!data) {
    return (
      <div className="flex-center" style={{ minHeight: '400px' }}>
        <div className="card text-center" style={{ padding: 'var(--space-8)', maxWidth: '480px' }}>
          <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
            <Brain size={32} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Data Yet</h3>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>
            Complete some study sessions to get personalized AI coaching.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/practice')}>Start Studying</button>
        </div>
      </div>
    )
  }

  const aiUsed = aiUsage?.used ?? 0
  const aiLimit = aiUsage?.limit ?? 10

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
                {isStale && <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>⚠️ Stale</span>}
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Your personal AI coach
                {data.examDays != null && <> • {data.examDays} {data.examDays === 1 ? 'day' : 'days'} until exam</>}
                {data.examDays == null && <> • No exam date set</>}
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className={`badge ${aiUsed >= aiLimit ? 'badge-danger' : aiUsed >= aiLimit - 2 ? 'badge-warning' : 'badge-muted'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
              <Zap size={12} /> {aiUsed}/{aiLimit} AI
            </span>
            <button onClick={() => setShowReflection(true)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
              <MessageSquare size={16} /> Reflect
            </button>
            <button onClick={refresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} disabled={refreshing}>
              <RefreshCw size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>

        {isStale && <div className="warning-card" style={{ marginBottom: 'var(--space-4)' }}><span>⚠️ Showing cached data. AI analysis is in progress...</span></div>}
        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><span>{error}</span></div>}

        <MissionHero
          missions={data.missions || []}
          timeBudget={data.timeBudget || { total: 0, completed: 0, remaining: 0 }}
          xpReward={data.totalXpReward || 0}
          weeklyGoal={data.weeklyGoal || { total: 0, completed: 0, percentage: 0 }}
          nextSession={data.nextSession || null}
          onMissionToggle={handleMissionToggle}
          onStartSession={(session) => navigate('/practice', { state: { subject: session.subject, topic: session.topic } })}
        />

        <div style={{ marginTop: 'var(--space-4)' }}>
          <PerformanceCenter metrics={data.performance} />
        </div>

        <div className="grid-2" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <WeeklyMomentum data={data.momentum} />
            <AIHabits habits={data.habits || []} />
          </div>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>
            <DailyTutorCard onOpen={handleDailyTutorOpen} />
            <HyeTutorChat
              insights={data.insights || []}
              onAsk={handleAsk}
              loading={chatLoading}
              mode="embedded"
              onExpand={() => setShowChatModal(true)}
            />
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-4)' }}>
          <QuickActions />
        </div>

        <ReflectionModal
          isOpen={showReflection}
          onClose={() => setShowReflection(false)}
          onSubmit={handleReflectionSubmit}
          submitting={reflectionSubmitting}
          success={reflectionSuccess}
        />

        <DailyTutorModal isOpen={showDailyTutor} onClose={() => setShowDailyTutor(false)} />

        {showChatModal && (
          <div className="modal-overlay" onClick={() => setShowChatModal(false)} style={{ zIndex: 200 }}>
            <div onClick={(e) => e.stopPropagation()} className="modal" style={{ maxWidth: '640px', width: '100%', padding: 0, maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
                  <HyeTutorChat insights={data.insights || []} onAsk={handleAsk} loading={chatLoading} mode="full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
