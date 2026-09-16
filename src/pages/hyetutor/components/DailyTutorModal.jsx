// ============================================================
// HYELEARNER: DAILY TUTOR — MODAL
// Full-screen overlay that hosts the DailyTutorFlow
// Built by Hyesent.dev
// ============================================================

import { useEffect } from 'react'
import { X, BookOpen, Loader2 } from 'lucide-react'
import { DailyTutorFlow } from './DailyTutorFlow'
import { useDailyTutor } from '../hooks'

export function DailyTutorModal({ isOpen, onClose }) {
  const {
    todaySession,
    loading,
    generating,
    error,
    startToday,
    setStep,
    submitQuiz,
    submitReflection,
    skipReflection,
  } = useDailyTutor()

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Escape key closes
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Auto-start (generate or resume) when opened
  useEffect(() => {
    if (!isOpen) return
    if (!todaySession && !generating) {
      startToday()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ zIndex: 200, padding: 0 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        style={{
          maxWidth: '640px',
          width: '100%',
          padding: 0,
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* ============ HEADER ============ */}
        <div
          className="flex-between"
          style={{
            padding: 'var(--space-3) var(--space-4)',
            borderBottom: '1px solid var(--color-border)',
            flexShrink: 0,
            background: 'var(--color-surface)',
          }}
        >
          <div
            className="flex"
            style={{
              gap: 'var(--space-2)',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <BookOpen
              size={18}
              style={{ color: 'var(--color-primary)', flexShrink: 0 }}
            />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text)',
              }}
            >
              Daily
            </span>
            <span
              style={{
                fontWeight: 600,
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text)',
              }}
            >
              Tutor
            </span>
            {todaySession?.currentStep && (
              <span
                className="badge badge-muted"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  marginLeft: 'var(--space-2)',
                }}
              >
                {todaySession.currentStep === 'lesson' && 'Lesson'}
                {todaySession.currentStep === 'quiz' && 'Quiz'}
                {todaySession.currentStep === 'result' && 'Result'}
                {todaySession.currentStep === 'reflection' && 'Reflection'}
                {todaySession.currentStep === 'done' && 'Done'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: 'var(--space-1)', flexShrink: 0 }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* ============ BODY ============ */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
          }}
        >
          {/* Loading */}
          {loading && !todaySession && (
            <div
              className="flex-center"
              style={{ padding: 'var(--space-12)', flexDirection: 'column', gap: 'var(--space-3)' }}
            >
              <div className="spinner spinner-lg"></div>
              <span
                className="text-muted"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                Loading...
              </span>
            </div>
          )}

          {/* Generating */}
          {generating && !todaySession && (
            <div
              className="flex-center"
              style={{
                padding: 'var(--space-12)',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                <Loader2
                  size={28}
                  style={{
                    color: 'var(--color-primary)',
                    animation: 'spin 1s linear infinite',
                  }}
                />
              </div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text)',
                }}
              >
                Generating your lesson...
              </span>
              <span
                className="text-muted"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  maxWidth: 280,
                  textAlign: 'center',
                }}
              >
                Personalizing today's content based on your plan, mistakes, and
                recent reflections.
              </span>
            </div>
          )}

          {/* Error */}
          {error && !generating && !todaySession && (
            <div style={{ padding: 'var(--space-6)' }}>
              <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
                <div
                  className="flex"
                  style={{ gap: 'var(--space-2)', alignItems: 'center' }}
                >
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>
                    {error}
                  </span>
                </div>
              </div>
              <button
                onClick={startToday}
                className="btn btn-primary flex-center"
                style={{ width: '100%' }}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Flow */}
          {todaySession && !generating && (
            <DailyTutorFlow
              session={todaySession}
              onSetStep={setStep}
              onSubmitQuiz={submitQuiz}
              onSubmitReflection={submitReflection}
              onSkipReflection={skipReflection}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  )
  }
