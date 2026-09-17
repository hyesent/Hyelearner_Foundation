// ============================================================
// HYELEARNER: FOUNDATION — LEARN PAGES (SHOWCASE / PREVIEW)
// CBT Practice, Results, Topic Mode. Static + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, BookOpen, CheckCircle2, Clock, PlayCircle,
  Loader2, PenTool, Target, BarChart3, Zap, RotateCw,
  AlertCircle, Calculator as CalculatorIcon, Lock, Crown, Eye,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const SUBJECT_INDEX = [
  {
    subject: 'Mathematics',
    icon: '📐',
    topics: [
      { name: 'Quadratic Equations', file: 'mathematics/quadratic_equations.js' },
      { name: 'Linear Equations',    file: 'mathematics/linear_equations.js' },
      { name: 'Trigonometry',        file: 'mathematics/trigonometry.js' },
      { name: 'Probability',         file: 'mathematics/probability.js' },
    ],
  },
  {
    subject: 'English Language',
    icon: '📝',
    topics: [
      { name: 'Comprehension',       file: 'english/comprehension.js' },
      { name: 'Synonyms & Antonyms', file: 'english/synonyms.js' },
      { name: 'Argumentative Essay', file: 'english/argumentative.js' },
    ],
  },
  {
    subject: 'Physics',
    icon: '⚛️',
    topics: [
      { name: "Newton's Laws",       file: 'physics/newtons_laws.js' },
      { name: 'Work, Energy & Power', file: 'physics/work_energy.js' },
      { name: 'Waves',               file: 'physics/waves.js' },
    ],
  },
  {
    subject: 'Chemistry',
    icon: '🧪',
    topics: [
      { name: 'Atomic Structure',    file: 'chemistry/atomic_structure.js' },
      { name: 'Organic Chemistry',   file: 'chemistry/organic.js' },
    ],
  },
  {
    subject: 'Biology',
    icon: '🧬',
    topics: [
      { name: 'Cell Division', file: 'biology/cell_division.js' },
      { name: 'Genetics',      file: 'biology/genetics.js' },
    ],
  },
]

// A small demo question pool — used for every session
const DEMO_QUESTIONS = [
  {
    id: 'q1',
    difficulty: 'easy',
    topic: 'Quadratic Equations',
    subject: 'Mathematics',
    question: 'Solve for x: x² − 5x + 6 = 0',
    options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = 0 or x = 5'],
    answer: 'x = 2 or x = 3',
  },
  {
    id: 'q2',
    difficulty: 'medium',
    topic: 'Quadratic Equations',
    subject: 'Mathematics',
    question: 'What is the discriminant of x² + 2x + 5 = 0?',
    options: ['−16', '4', '24', '0'],
    answer: '−16',
  },
  {
    id: 'q3',
    difficulty: 'medium',
    topic: 'Comprehension',
    subject: 'English Language',
    question: 'Which best describes the tone of a persuasive essay?',
    options: ['Neutral and detached', 'Urgent and convincing', 'Humorous and light', 'Melancholic'],
    answer: 'Urgent and convincing',
  },
  {
    id: 'q4',
    difficulty: 'hard',
    topic: "Newton's Laws",
    subject: 'Physics',
    question: 'A 5 kg object accelerates at 3 m/s². What is the net force?',
    options: ['8 N', '15 N', '1.67 N', '30 N'],
    answer: '15 N',
  },
  {
    id: 'q5',
    difficulty: 'easy',
    topic: 'Atomic Structure',
    subject: 'Chemistry',
    question: 'How many electrons does a neutral carbon-12 atom have?',
    options: ['4', '6', '12', '14'],
    answer: '6',
  },
]

const TIMER_OPTIONS = [
  { value: 600,  label: '10 min' },
  { value: 1200, label: '20 min' },
  { value: 1800, label: '30 min' },
]

const PAST_SESSIONS = [
  { subject: 'Mathematics',      date: '2026-04-28', mode: 'Timed (10min)', score: 8,  total: 10, accuracy: 80 },
  { subject: 'English Language', date: '2026-04-26', mode: 'Untimed',       score: 7,  total: 10, accuracy: 70 },
  { subject: 'Physics',          date: '2026-04-24', mode: 'Timed (20min)', score: 5,  total: 10, accuracy: 50 },
  { subject: 'Chemistry',        date: '2026-04-22', mode: 'Timed (10min)', score: 9,  total: 10, accuracy: 90 },
  { subject: 'Biology',          date: '2026-04-20', mode: 'Untimed',       score: 6,  total: 10, accuracy: 60 },
]

// ============================================================
// HELPERS
// ============================================================
const getIconForSubject = (subject) => {
  const found = SUBJECT_INDEX.find((s) => s.subject === subject)
  return found?.icon || '📚'
}

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// ============================================================
// 1. CBT PRACTICE PAGE
// ============================================================
export function ShowcaseCBTPractice({ onNavigate }) {
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [timed, setTimed] = useState(true)
  const [selectedTimer, setSelectedTimer] = useState(600)
  const [timeLimit, setTimeLimit] = useState(600)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [timeRemaining, setTimeRemaining] = useState(600)
  const [submitting, setSubmitting] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)

  // timer
  useEffect(() => {
    if (!started || results || !timed || submitting) return
    const id = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(id)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [started, results, timed, submitting])

  const handleStart = () => {
    if (!subject) { alert('Please select a subject'); return }
    setQuestions(DEMO_QUESTIONS)
    setStarted(true)
    setTimeRemaining(timeLimit)
    setCurrentIndex(0)
    setAnswers({})
    setResults(null)
    setXpEarned(0)
  }

  const handleAnswer = (qid, opt) => setAnswers((prev) => ({ ...prev, [qid]: opt }))

  const handleSubmit = () => {
    if (submitting) return
    setSubmitting(true)

    const correct = questions.filter((q) => answers[q.id] === q.answer).length
    const wrong   = questions.filter((q) => answers[q.id] && answers[q.id] !== q.answer).length
    const skipped = questions.length - correct - wrong
    const accuracy = Math.round((correct / questions.length) * 100)

    setResults({ score: correct, total: questions.length, correct, wrong, skipped, accuracy })
    setXpEarned(correct * 12)
    setSubmitting(false)
  }

  const handleRetry = () => {
    setStarted(false)
    setQuestions([])
    setAnswers({})
    setResults(null)
    setCurrentIndex(0)
    setTimeRemaining(timeLimit)
    setXpEarned(0)
  }

  const formatTimer = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const getFilteredSubjects = () =>
    SUBJECT_INDEX.map((entry) => ({
      key: entry.subject.toLowerCase().replace(/\s+/g, '_'),
      label: entry.subject,
      icon: entry.icon,
      topics: entry.topics.map((t) => t.name),
    }))

  const filteredSubjects = getFilteredSubjects()

  // ============================================================
  // RESULTS VIEW
  // ============================================================
  if (results) {
    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Results</h1>
              <p className="text-muted">{subject} Practice</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go to dashboard">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
              <ArrowLeft size={16} /> Dashboard
            </button>
          </ViewOnly>
        </div>

        <div className="card text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="h1" style={{
            fontSize: 'var(--font-size-5xl)',
            color: results.accuracy >= 70 ? 'var(--color-success)' : results.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
          }}>
            {results.accuracy}%
          </div>
          <p className="text-lg">{results.score} out of {results.total} correct</p>
          <div style={{ marginTop: 'var(--space-3)' }}>
            <span className="badge badge-primary flex-center" style={{ gap: 'var(--space-1)' }}>
              <Zap size={16} /> +{xpEarned} XP
            </span>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{results.correct}</div><div className="text-muted">Correct</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-danger)' }}>{results.wrong}</div><div className="text-muted">Wrong</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{results.skipped}</div><div className="text-muted">Skipped</div></div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <ViewOnly tooltip="Sign up to review your questions">
            <button className="btn btn-primary btn-lg flex-1 flex-center" onClick={handleRetry}>
              <Eye size={20} /> Review Questions
            </button>
          </ViewOnly>
          <ViewOnly tooltip="Sign up to retry">
            <button className="btn btn-primary btn-lg flex-1 flex-center" onClick={handleRetry}>
              <RotateCw size={16} /> Practice Again
            </button>
          </ViewOnly>
          <ViewOnly tooltip="Sign up to close">
            <button className="btn btn-outline btn-lg flex-1 flex-center" onClick={handleRetry}>
              Close
            </button>
          </ViewOnly>
        </div>
      </div>
    )
  }

  // ============================================================
  // QUESTION VIEW
  // ============================================================
  if (started && questions.length > 0) {
    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length
    const letters = ['A', 'B', 'C', 'D']

    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <PenTool size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">CBT Practice</h1>
              <p className="text-muted">{subject}</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <ViewOnly tooltip="Sign up to use the calculator">
              <button className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                <CalculatorIcon size={16} />
              </button>
            </ViewOnly>
            {timed && (
              <div className="flex-center" style={{
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-xl)',
                background: timeRemaining < 60 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
                color: timeRemaining < 60 ? 'var(--color-danger)' : 'var(--color-primary)',
                fontWeight: 700,
                fontSize: 'var(--font-size-lg)',
                fontFamily: 'var(--font-mono)',
              }}>
                <Clock size={16} style={{ marginRight: 'var(--space-2)' }} />
                {formatTimer(timeRemaining)}
              </div>
            )}
          </div>
        </div>

        <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
          <span className="text-sm" style={{ fontWeight: 600 }}>Question {currentIndex + 1} of {total}</span>
          <span className="text-sm text-muted">{answeredCount}/{total} answered</span>
        </div>
        <div className="progress" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
              <span className={`badge ${currentQuestion.difficulty === 'easy' ? 'badge-success' : currentQuestion.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`}>
                {currentQuestion.difficulty.toUpperCase()}
              </span>
              <span className="text-muted text-sm">{currentQuestion.topic}</span>
            </div>
          </div>
          <div className="h3" style={{ marginBottom: 'var(--space-6)' }}>{currentQuestion.question}</div>
          <div className="stack">
            {currentQuestion.options.map((option, idx) => {
              const letter = letters[idx]
              const isSelected = answers[currentQuestion.id] === option
              return (
                <ViewOnly key={idx} tooltip="Sign up to answer questions">
                  <button
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`card card-hover flex-between ${isSelected ? 'success-card' : ''}`}
                    style={{
                      cursor: 'pointer',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      background: isSelected ? 'var(--color-primary-light)' : 'var(--color-surface)',
                      width: '100%',
                    }}
                  >
                    <div className="flex" style={{ gap: 'var(--space-4)' }}>
                      <span className="flex-center" style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                        color: isSelected ? 'white' : 'var(--color-text-secondary)',
                        fontWeight: 700,
                      }}>{letter}</span>
                      <span className={isSelected ? 'h4' : ''}>{option}</span>
                    </div>
                    {isSelected && <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />}
                  </button>
                </ViewOnly>
              )
            })}
          </div>
        </div>

        <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}>
            ← Previous
          </button>
          <span className="badge badge-muted">{currentIndex + 1} / {total}</span>
          {currentIndex === total - 1 ? (
            <ViewOnly tooltip="Sign up to submit">
              <button className="btn btn-success" onClick={handleSubmit} disabled={submitting}>
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 size={16} />}
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </ViewOnly>
          ) : (
            <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.min(total - 1, p + 1))}>
              Next →
            </button>
          )}
        </div>

        <div className="card">
          <div className="text-sm" style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Question Palette</div>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {questions.map((q, i) => {
              const isAnswered = !!answers[q.id]
              const isCurrent = i === currentIndex
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="flex-center"
                  style={{
                    width: 36, height: 36, borderRadius: 'var(--radius)',
                    background: isCurrent ? 'var(--color-primary)' : isAnswered ? 'var(--color-success-light)' : 'var(--color-border)',
                    color: isCurrent ? 'white' : isAnswered ? 'var(--color-success)' : 'var(--color-text-secondary)',
                    fontWeight: 600, fontSize: 'var(--font-size-sm)',
                    cursor: 'pointer', border: 'none',
                  }}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)' }} /> Current
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: 'var(--color-success-light)', border: '1px solid var(--color-success)' }} /> Answered
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: 'var(--color-border)' }} /> Unanswered
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // START VIEW
  // ============================================================
  return (
    <div className="container section">
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <PenTool size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">CBT Practice</h1>
            <p className="text-muted">Practice questions from any subject</p>
          </div>
        </div>
        <ViewOnly tooltip="Sign up to go back">
          <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
            <ArrowLeft size={16} /> Back
          </button>
        </ViewOnly>
      </div>

      <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <label className="label">Select Subject</label>
          <select className="select" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Choose a subject...</option>
            {filteredSubjects.map((s) => (
              <option key={s.key} value={s.label}>{s.icon} {s.label}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <label className="label" style={{ marginBottom: 'var(--space-2)' }}>Timer</label>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {TIMER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setSelectedTimer(opt.value); setTimeLimit(opt.value) }}
                className={`btn ${selectedTimer === opt.value ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, minWidth: 80 }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-8)' }}>
          <label className="label" style={{ marginBottom: 'var(--space-3)' }}>Mode</label>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <label className={`flex-1 card card-hover flex-center ${timed ? 'success-card' : ''}`} style={{ cursor: 'pointer', padding: 'var(--space-4)' }}>
              <input type="radio" checked={timed} onChange={() => setTimed(true)} style={{ display: 'none' }} />
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Clock size={20} />
                <span style={{ fontWeight: 600 }}>Timed</span>
              </div>
            </label>
            <label className={`flex-1 card card-hover flex-center ${!timed ? 'success-card' : ''}`} style={{ cursor: 'pointer', padding: 'var(--space-4)' }}>
              <input type="radio" checked={!timed} onChange={() => setTimed(false)} style={{ display: 'none' }} />
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <BookOpen size={20} />
                <span style={{ fontWeight: 600 }}>Untimed</span>
              </div>
            </label>
          </div>
        </div>

        <ViewOnly tooltip="Sign up to start practicing">
          <button
            className="btn btn-primary btn-xl flex-center"
            onClick={handleStart}
            disabled={!subject}
            style={{ width: '100%', opacity: !subject ? 0.5 : 1, cursor: !subject ? 'not-allowed' : 'pointer' }}
          >
            <PlayCircle size={20} /> Start Practice
          </button>
        </ViewOnly>

        {!subject && (
          <p className="flex-center" style={{ marginTop: 'var(--space-4)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
            <AlertCircle size={16} /> Please select a subject to continue
          </p>
        )}
      </div>
    </div>
  )
}

// ============================================================
// 2. RESULTS PAGE
// ============================================================
export function ShowcaseResults({ onNavigate }) {
  const sessions = PAST_SESSIONS

  if (sessions.length === 0) {
    return (
      <div className="container section">
        <ResultsHeader onNavigate={onNavigate} />
        <div className="empty-card">
          <div className="icon">📊</div>
          <div className="title">No Results Yet</div>
          <div className="desc">Complete a practice session to see your results here</div>
          <ViewOnly tooltip="Sign up to start practicing">
            <div className="action">
              <button className="btn btn-primary" onClick={() => onNavigate?.('cbtPractice')}>Start Practicing</button>
            </div>
          </ViewOnly>
        </div>
      </div>
    )
  }

  return (
    <div className="container section">
      <ResultsHeader onNavigate={onNavigate} />

      <div className="stack">
        {sessions.slice().reverse().map((session, i) => (
          <div key={i} className="card card-hover flex-between">
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{
                width: 48, height: 48, borderRadius: 'var(--radius-xl)',
                background: session.accuracy >= 70 ? 'var(--color-success-light)' : session.accuracy >= 50 ? 'var(--color-warning-light)' : 'var(--color-danger-light)',
              }}>
                <BarChart3 size={24} style={{
                  color: session.accuracy >= 70 ? 'var(--color-success)' : session.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
                }} />
              </div>
              <div>
                <div className="h4">{session.subject}</div>
                <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  <span>{formatDate(session.date)}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-border)' }} />
                  <span>{session.mode}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="h3">{session.score}/{session.total}</div>
              <div className="text-sm" style={{
                fontWeight: 700,
                color: session.accuracy >= 70 ? 'var(--color-success)' : session.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
              }}>{session.accuracy}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResultsHeader({ onNavigate }) {
  return (
    <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
          <BarChart3 size={24} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div>
          <h1 className="h2">Results</h1>
          <p className="text-muted">View your past exam performance</p>
        </div>
      </div>
      <ViewOnly tooltip="Sign up to go back">
        <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
          <ArrowLeft size={16} /> Back
        </button>
      </ViewOnly>
    </div>
  )
}

// ============================================================
// 3. TOPIC MODE PAGE
// ============================================================
export function ShowcaseTopicMode({ onNavigate }) {
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')

  const getTopicsForSubject = (subjectLabel) => {
    if (!subjectLabel) return []
    const entry = SUBJECT_INDEX.find((s) => s.subject === subjectLabel)
    return entry ? entry.topics.map((t) => t.name) : []
  }

  const handlePractice = () => {
    if (!subject || !topic) return
    onNavigate?.('cbtPractice')
  }

  const filteredSubjects = SUBJECT_INDEX.map((entry) => ({
    key: entry.subject.toLowerCase().replace(/\s+/g, '_'),
    label: entry.subject,
    icon: entry.icon,
    topics: entry.topics.map((t) => t.name),
  }))

  return (
    <div className="container section">
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <Target size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Topic Mode</h1>
            <p className="text-muted">Master one topic at a time</p>
          </div>
        </div>
        <ViewOnly tooltip="Sign up to go back">
          <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
            <ArrowLeft size={16} /> Back
          </button>
        </ViewOnly>
      </div>

      <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
        <div className="grid-2" style={{ marginBottom: 'var(--space-6)' }}>
          <div>
            <label className="label">Subject</label>
            <select
              className="select"
              value={subject}
              onChange={(e) => { setSubject(e.target.value); setTopic('') }}
            >
              <option value="">Choose subject</option>
              {filteredSubjects.map((s) => (
                <option key={s.key} value={s.label}>{s.icon} {s.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Topic</label>
            <select
              className="select"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={!subject}
              style={{ opacity: !subject ? 0.5 : 1 }}
            >
              <option value="">Choose topic</option>
              {getTopicsForSubject(subject).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {subject && topic && (
          <div className="card" style={{ background: 'var(--color-background)' }}>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div className="h3">{topic}</div>
              <div className="text-muted">{subject}</div>
            </div>
            <ViewOnly tooltip="Sign up to practice this topic">
              <button className="btn btn-primary btn-lg flex-center" style={{ width: '100%' }} onClick={handlePractice}>
                <Target size={20} /> Practice This Topic
              </button>
            </ViewOnly>
          </div>
        )}

        {subject && !topic && (
          <div className="warning-card flex-center" style={{ gap: 'var(--space-2)' }}>
            <AlertCircle size={20} />
            <span>Select a topic to practice</span>
          </div>
        )}
      </div>
    </div>
  )
}
