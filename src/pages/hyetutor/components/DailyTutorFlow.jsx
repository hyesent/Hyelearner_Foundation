// ============================================================
// HYELEARNER: DAILY TUTOR — FLOW
// Merged lesson + quiz + result + reflection + done
// Matches LessonViewer + LessonTest visual language
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  XCircle,
  Award,
  Zap,
  Loader2,
  Info,
  Lightbulb,
  Eye,
  Clock,
  Target,
  Volume2,
  Square,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const LETTERS = ['A', 'B', 'C', 'D']

// ============================================================
// MAIN FLOW
// ============================================================
export function DailyTutorFlow({
  session,
  onSetStep,
  onSubmitQuiz,
  onSubmitReflection,
  onSkipReflection,
  onClose,
}) {
  const [answers, setAnswers] = useState(session?.answers || {})
  const [result, setResult] = useState(session?.result || null)

  const step = session?.currentStep || 'lesson'

  // Sync local result when parent updates (e.g. on resume)
  useEffect(() => {
    if (session?.result && !result) setResult(session.result)
    if (session?.answers && Object.keys(answers).length === 0) {
      setAnswers(session.answers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  // -----------------------------------------------------------
  // STEP ROUTING
  // -----------------------------------------------------------

  if (step === 'lesson') {
    return (
      <LessonStep
        lesson={session.lesson}
        subject={session.subject}
        topic={session.topic}
        onContinue={() => onSetStep('quiz')}
        onClose={onClose}
      />
    )
  }

  if (step === 'quiz') {
    return (
      <QuizStep
        questions={session.quiz?.questions || []}
        subject={session.subject}
        topic={session.topic}
        initialAnswers={answers}
        onBack={() => onSetStep('lesson')}
        onSubmit={(finalAnswers) => {
          const r = onSubmitQuiz(finalAnswers)
          setAnswers(finalAnswers)
          setResult(r)
          onSetStep('result')
        }}
        onClose={onClose}
      />
    )
  }

  if (step === 'result') {
    return (
      <ResultStep
        result={result || session.result}
        topic={session.topic}
        subject={session.subject}
        onContinue={() => onSetStep('reflection')}
      />
    )
  }

  if (step === 'reflection') {
    return (
      <ReflectionStep
        topic={session.topic}
        subject={session.subject}
        onSubmit={(feeling, note) => {
          onSubmitReflection(feeling, note)
          onSetStep('done')
        }}
        onSkip={() => {
          onSkipReflection()
          onSetStep('done')
        }}
      />
    )
  }

  if (step === 'done') {
    return <DoneStep session={session} onClose={onClose} />
  }

  return null
}

// ============================================================
// STEP 1 — LESSON
// ============================================================
function LessonStep({ lesson, subject, topic, onContinue, onClose }) {
  const sections = lesson?.sections || []
  const [openIndex, setOpenIndex] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [loadingVoice, setLoadingVoice] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }
    const text = sections.map((s) => `${s.heading}. ${s.body}`).join(' ')
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.95
    utter.onstart = () => setIsSpeaking(true)
    utter.onend = () => setIsSpeaking(false)
    utter.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utter)
    setLoadingVoice(false)
  }

  const allRead = openIndex >= sections.length - 1

  return (
    <div style={{ padding: 'var(--space-5)' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div
          className="flex"
          style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}
        >
          <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            TODAY'S LESSON
          </span>
          {lesson?.estimated_minutes && (
            <span
              className="badge badge-muted"
              style={{ fontSize: 'var(--font-size-xs)' }}
            >
              <Clock size={12} /> ~{lesson.estimated_minutes} min
            </span>
          )}
          {lesson?.difficulty && (
            <span
              className={`badge ${
                lesson.difficulty === 'easy'
                  ? 'badge-success'
                  : lesson.difficulty === 'hard'
                    ? 'badge-danger'
                    : 'badge-warning'
              }`}
              style={{ fontSize: 'var(--font-size-xs)' }}
            >
              {lesson.difficulty}
            </span>
          )}
        </div>

        <h2 className="h2" style={{ margin: 0 }}>
          {lesson?.title || topic}
        </h2>
        <p
          className="text-muted"
          style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}
        >
          {subject} • {topic}
        </p>
      </div>

      {/* Voice + Section progress */}
      <div
        className="flex-between"
        style={{ marginBottom: 'var(--space-3)', alignItems: 'center' }}
      >
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-muted)',
          }}
        >
          Section {Math.min(openIndex + 1, sections.length)} of {sections.length}
        </span>
        <button
          onClick={handleSpeak}
          className="btn btn-ghost"
          style={{ padding: 'var(--space-1) var(--space-2)' }}
          title={isSpeaking ? 'Stop reading' : 'Read aloud'}
        >
          {loadingVoice ? (
            <Loader2
              size={16}
              style={{ animation: 'spin 1s linear infinite' }}
            />
          ) : isSpeaking ? (
            <Square size={16} />
          ) : (
            <Volume2 size={16} />
          )}
        </button>
      </div>

      {/* Sections — accordion */}
      <div className="stack" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
        {sections.map((section, idx) => {
          const isOpen = idx === openIndex
          const isPast = idx < openIndex
          return (
            <div
              key={idx}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'var(--color-surface)',
              }}
            >
              <button
                onClick={() => setOpenIndex(idx)}
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  background: isOpen
                    ? 'var(--color-primary-light)'
                    : 'var(--color-background)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  gap: 'var(--space-3)',
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-size-sm)',
                    color: isOpen
                      ? 'var(--color-primary)'
                      : 'var(--color-text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  {isPast ? (
                    <CheckCircle2
                      size={16}
                      style={{ color: 'var(--color-success)' }}
                    />
                  ) : (
                    <span
                      className="flex-center"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: isOpen
                          ? 'var(--color-primary)'
                          : 'var(--color-border)',
                        color: isOpen
                          ? 'white'
                          : 'var(--color-text-muted)',
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                  )}
                  {section.heading}
                </span>
                <ChevronRight
                  size={16}
                  style={{
                    color: 'var(--color-text-muted)',
                    transform: isOpen ? 'rotate(90deg)' : 'none',
                    transition: 'transform var(--transition)',
                    flexShrink: 0,
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: 'var(--space-4)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {section.body.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      style={{ marginBottom: i < section.body.split('\n\n').length - 1 ? 'var(--space-3)' : 0 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Key points */}
      {lesson?.key_points?.length > 0 && (
        <div
          style={{
            padding: 'var(--space-4)',
            background: 'var(--color-primary-light)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--space-5)',
          }}
        >
          <div
            className="flex"
            style={{
              gap: 'var(--space-2)',
              alignItems: 'center',
              marginBottom: 'var(--space-2)',
            }}
          >
            <Lightbulb size={16} style={{ color: 'var(--color-primary)' }} />
            <span
              style={{
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-primary)',
              }}
            >
              Key Points
            </span>
          </div>
          <ul style={{ paddingLeft: 'var(--space-5)' }}>
            {lesson.key_points.map((p, i) => (
              <li
                key={i}
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  listStyle: 'disc',
                  marginBottom: 4,
                }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <button
          onClick={() => setOpenIndex((i) => Math.min(sections.length - 1, i + 1))}
          disabled={allRead}
          className="btn btn-outline"
          style={{ flex: 1, opacity: allRead ? 0.4 : 1 }}
        >
          Next Section
        </button>
        <button
          onClick={onContinue}
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          Ready for the Quiz
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// STEP 2 — QUIZ
// ============================================================
function QuizStep({
  questions = [],
  subject,
  topic,
  initialAnswers = {},
  onSubmit,
  onBack,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(initialAnswers)
  const [submitting, setSubmitting] = useState(false)

  const total = questions.length
  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  if (!current) {
    return (
      <div className="text-center" style={{ padding: 'var(--space-8)' }}>
        <p className="text-muted">No questions available.</p>
      </div>
    )
  }

  const handleAnswer = (qid, option) => {
    setAnswers((prev) => ({ ...prev, [qid]: option }))
  }

  const handleSubmit = () => {
    const answered = Object.keys(answers).length
    if (answered < total) {
      if (!confirm(`You've answered ${answered}/${total}. Submit anyway?`)) return
    }
    setSubmitting(true)
    onSubmit(answers)
  }

  return (
    <div style={{ padding: 'var(--space-5)' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            alignItems: 'center',
            marginBottom: 'var(--space-2)',
          }}
        >
          <Target size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            QUIZ TIME
          </span>
        </div>
        <h2 className="h2" style={{ margin: 0 }}>
          {topic}
        </h2>
        <p
          className="text-muted"
          style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}
        >
          {subject}
        </p>
      </div>

      {/* Progress */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Question {currentIndex + 1} of {total}
          {current.difficulty && (
            <span
              className={`badge ${
                current.difficulty === 'easy'
                  ? 'badge-success'
                  : current.difficulty === 'hard'
                    ? 'badge-danger'
                    : 'badge-warning'
              }`}
              style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}
            >
              {current.difficulty}
            </span>
          )}
        </span>
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          {answeredCount}/{total} answered
        </span>
      </div>
      <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
        <div
          className="progress-fill progress-fill-primary"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <div
          style={{
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <div
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 500,
              color: 'var(--color-text)',
            }}
          >
            {current.question}
          </div>
        </div>

        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {(current.options || []).map((option, idx) => {
            const letter = LETTERS[idx]
            const isSelected = answers[current.id] === option
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(current.id, option)}
                className="card card-hover flex-between"
                style={{
                  cursor: 'pointer',
                  border: isSelected
                    ? '2px solid var(--color-primary)'
                    : '1px solid var(--color-border)',
                  background: isSelected
                    ? 'var(--color-primary-light)'
                    : 'var(--color-surface)',
                  padding: 'var(--space-3) var(--space-4)',
                  textAlign: 'left',
                }}
              >
                <div
                  className="flex"
                  style={{ gap: 'var(--space-4)', alignItems: 'center' }}
                >
                  <span
                    className="flex-center"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: isSelected
                        ? 'var(--color-primary)'
                        : 'var(--color-border)',
                      color: isSelected
                        ? 'white'
                        : 'var(--color-text-secondary)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {letter}
                  </span>
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {option}
                  </span>
                </div>
                {isSelected && (
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--color-primary)' }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <button
          className="btn btn-outline"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
        >
          <ArrowLeft size={16} /> Previous
        </button>
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
          }}
        >
          {currentIndex + 1} / {total}
        </span>
        {currentIndex === total - 1 ? (
          <button
            className="btn btn-success"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
              <CheckCircle2 size={16} />
            )}
            {submitting ? 'Submitting...' : 'Submit Quiz'}
          </button>
        ) : (
          <button
            className="btn btn-outline"
            onClick={() => setCurrentIndex((i) => Math.min(total - 1, i + 1))}
          >
            Next <ArrowRight size={16} />
          </button>
        )}
      </div>

       {/* Palette */}
      <div
        className="card"
        style={{ padding: 'var(--space-3)' }}
      >
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 600,
            marginBottom: 'var(--space-2)',
            color: 'var(--color-text)',
          }}
        >
          Question Palette
        </div>
        <div
          className="flex"
          style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}
        >
          {questions.map((q, i) => {
            const isAnswered = !!answers[q.id]
            const isCurrent = i === currentIndex
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="flex-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius)',
                  background: isCurrent
                    ? 'var(--color-primary)'
                    : isAnswered
                      ? 'var(--color-success-light)'
                      : 'var(--color-border)',
                  color: isCurrent
                    ? 'white'
                    : isAnswered
                      ? 'var(--color-success)'
                      : 'var(--color-text-secondary)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-sm)',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// STEP 3 — RESULT
// ============================================================
function ResultStep({ result, topic, subject, onContinue }) {
  if (!result) return null

  const passed = result.accuracy >= 70

  return (
    <div style={{ padding: 'var(--space-6)' }}>
      <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
        <div
          className="flex-center"
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: passed
              ? 'var(--color-success-light)'
              : 'var(--color-danger-light)',
            margin: '0 auto var(--space-4)',
          }}
        >
          {passed ? (
            <Award size={40} style={{ color: 'var(--color-success)' }} />
          ) : (
            <XCircle size={40} style={{ color: 'var(--color-danger)' }} />
          )}
        </div>
        <h2
          className="h2"
          style={{
            color: passed ? 'var(--color-success)' : 'var(--color-danger)',
            marginBottom: 'var(--space-2)',
          }}
        >
          {passed ? '🎉 Well done!' : 'Keep pushing!'}
        </h2>
        <div
          style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 700,
            color: 'var(--color-primary)',
          }}
        >
          {result.accuracy}%
        </div>
        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
          {result.correct} out of {result.total} correct • {topic}
        </p>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <span
            className="badge badge-primary"
            style={{ fontSize: 'var(--font-size-sm)' }}
          >
            <Zap size={14} /> +{result.xpEarned} XP
          </span>
        </div>
      </div>

      <div
        className="grid-3"
        style={{ marginBottom: 'var(--space-6)', gap: 'var(--space-3)' }}
      >
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-success)' }}>
            {result.correct}
          </div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
            Correct
          </div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-danger)' }}>
            {result.wrong}
          </div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
            Wrong
          </div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)' }}>
            {result.total}
          </div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
            Total
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="btn btn-primary flex-center"
        style={{ width: '100%' }}
      >
        Continue <ArrowRight size={16} />
      </button>
    </div>
  )
      }
/ ============================================================
// STEP 4 — REFLECTION
// ============================================================
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
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            alignItems: 'center',
            marginBottom: 'var(--space-2)',
          }}
        >
          <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            QUICK REFLECTION
          </span>
        </div>
        <h2 className="h2" style={{ margin: 0 }}>
          How did {topic} feel?
        </h2>
        <p
          className="text-muted"
          style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}
        >
          This helps me adjust your next {subject} lesson.
        </p>
      </div>

      {/* Feeling */}
      <div
        className="grid-3"
        style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}
      >
        {options.map((opt) => {
          const selected = feeling === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => setFeeling(opt.value)}
              className="card card-hover"
              style={{
                padding: 'var(--space-4)',
                textAlign: 'center',
                cursor: 'pointer',
                border: selected
                  ? '2px solid var(--color-primary)'
                  : '1px solid var(--color-border)',
                background: selected
                  ? 'var(--color-primary-light)'
                  : 'var(--color-surface)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 4 }}>{opt.emoji}</div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 'var(--font-size-sm)',
                  color: selected
                    ? 'var(--color-primary)'
                    : 'var(--color-text)',
                }}
              >
                {opt.label}
              </div>
            </button>
          )
        })}
      </div>

      {/* Note */}
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <label
          className="label"
          style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-2)' }}
        >
          Anything specific? (optional)
        </label>
        <textarea
          className="textarea"
          rows={3}
          placeholder="e.g. The mitochondria part was tricky..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{ resize: 'vertical' }}
        />
      </div>

      {/* Actions */}
      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <button onClick={onSkip} className="btn btn-ghost" style={{ flex: 1 }}>
          Skip
        </button>
        <button
          onClick={() => onSubmit(feeling, note)}
          disabled={!feeling}
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          Done <CheckCircle2 size={16} />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// STEP 5 — DONE
// ============================================================
function DoneStep({ session, onClose }) {
  return (
    <div style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
      <div
        className="flex-center"
        style={{
          width: 88,
          height: 88,
          borderRadius: '50%',
          background: 'var(--color-success-light)',
          margin: '0 auto var(--space-5)',
        }}
      >
        <CheckCircle2 size={44} style={{ color: 'var(--color-success)' }} />
      </div>

      <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>
        Day complete 🎉
      </h2>
      <p
        className="text-muted"
        style={{
          fontSize: 'var(--font-size-sm)',
          maxWidth: 320,
          margin: '0 auto var(--space-5)',
        }}
      >
        {session?.topic} — {session?.subject}. Nice work. Your next lesson is
        waiting tomorrow.
      </p>

      <button
        onClick={onClose}
        className="btn btn-primary flex-center"
        style={{ width: '100%' }}
      >
        Close
      </button>
    </div>
  )
    }
