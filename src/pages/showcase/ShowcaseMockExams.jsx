// ============================================================
// HYELEARNER: MOCK EXAMS (SHOWCASE / PREVIEW)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, Clock, Zap, RotateCw, CheckCircle2, XCircle,
  AlertCircle, Target, Calendar, PlayCircle, AlertTriangle,
  Calculator as CalculatorIcon, Eye, PenTool, FileText,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const SUBJECTS = {
  mathematics: { label: 'Mathematics', icon: '📐' },
  physics:     { label: 'Physics',     icon: '⚛️' },
  chemistry:   { label: 'Chemistry',   icon: '🧪' },
  biology:     { label: 'Biology',     icon: '🧬' },
  english:     { label: 'English',     icon: '📖' },
  government:  { label: 'Government',  icon: '🏛️' },
  economics:   { label: 'Economics',   icon: '📊' },
  literature:  { label: 'Literature',  icon: '📚' },
}

const EXAM_DURATIONS = [
  { value: 7200,  label: '120 min' },
  { value: 9000,  label: '150 min' },
  { value: 10800, label: '180 min' },
]

const QUESTION_COUNTS = [100, 140, 180]

const DEMO_QUESTIONS = [
  {
    id: 'q1',
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    question: 'Solve for x: x² − 5x + 6 = 0',
    options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = 0 or x = 5'],
    answer: 'x = 2 or x = 3',
  },
  {
    id: 'q2',
    subject: 'Physics',
    topic: "Newton's Laws",
    question: 'A 5 kg object accelerates at 3 m/s². What is the net force acting on it?',
    options: ['8 N', '15 N', '1.67 N', '30 N'],
    answer: '15 N',
  },
  {
    id: 'q3',
    subject: 'English',
    topic: 'Comprehension',
    passage:
      'The rapid expansion of urban centres across West Africa has placed unprecedented pressure on infrastructure. Roads built for a fraction of today\'s traffic now groan under the weight of commuters, and water systems designed for a few thousand residents serve millions. Planners warn that without sustained investment, the region risks stalling the very economic momentum that drew people to its cities in the first place.',
    question: 'According to the passage, what is the main risk facing West African cities?',
    options: [
      'Loss of cultural heritage',
      'Infrastructure collapse halting economic progress',
      'Declining rural populations',
      'Insufficient rainfall',
    ],
    answer: 'Infrastructure collapse halting economic progress',
  },
  {
    id: 'q4',
    subject: 'Chemistry',
    topic: 'Atomic Structure',
    question: 'How many electrons does a neutral carbon-12 atom have?',
    options: ['4', '6', '12', '14'],
    answer: '6',
  },
]

const RESULTS = {
  accuracy: 74,
  score: 74,
  total: 100,
  correct: 74,
  wrong: 22,
  skipped: 4,
  xp: 320,
  breakdown: {
    Mathematics: { total: 25, correct: 21 },
    Physics:     { total: 25, correct: 17 },
    Chemistry:   { total: 25, correct: 19 },
    English:     { total: 25, correct: 17 },
  },
}

// ============================================================
// MAIN SHOWCASE — Mock Exams
// ============================================================
export default function ShowcaseMockExams({ onNavigate }) {
  const [view, setView] = useState('start') // 'start' | 'exam' | 'results'

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {view === 'start' && (
          <StartView
            onStart={() => setView('exam')}
            onNavigate={onNavigate}
          />
        )}
        {view === 'exam' && (
          <ExamView
            onSubmit={() => setView('results')}
            onNavigate={onNavigate}
          />
        )}
        {view === 'results' && (
          <ResultsView
            onRetry={() => setView('start')}
            onReview={() => setView('exam')}
            onNavigate={onNavigate}
          />
        )}
      </div>
    </div>
  )
}

// ============================================================
// START VIEW
// ============================================================
function StartView({ onStart, onNavigate }) {
  const [subjects, setSubjects] = useState(['mathematics', 'physics', 'chemistry', 'english'])
  const [examDuration, setExamDuration] = useState(7200)
  const [questionCount, setQuestionCount] = useState(100)
  const [subjectError, setSubjectError] = useState('')

  const subjectKeys = Object.keys(SUBJECTS)

  const addSubject = (key) => {
    if (!key) return
    if (subjects.includes(key)) { setSubjectError('Subject already selected'); return }
    if (subjects.length >= 4)    { setSubjectError('Maximum 4 subjects allowed'); return }
    setSubjects([...subjects, key]); setSubjectError('')
  }
  const removeSubject = (key) => {
    setSubjects(subjects.filter((s) => s !== key))
    setSubjectError('')
  }

  return (
    <>
      <Header
        onNavigate={onNavigate}
        title="Mock Exams"
        subtitle="Full exam simulation with 4 subjects"
      />

      <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div className="stack" style={{ gap: 'var(--space-5)' }}>

          <div>
            <label className="label" style={{ marginBottom: 'var(--space-2)' }}>
              Select Subjects (1-4 subjects)
            </label>

            {subjects.length > 0 && (
              <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                {subjects.map((key) => (
                  <span key={key} className="badge badge-primary" style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    {SUBJECTS[key]?.icon} {SUBJECTS[key]?.label}
                    <button onClick={() => removeSubject(key)} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: '0 var(--space-1)' }}>✕</button>
                  </span>
                ))}
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', alignSelf: 'center' }}>
                  {subjects.length}/4 selected
                </span>
              </div>
            )}

            <select className="select" value="" onChange={(e) => { addSubject(e.target.value); e.target.value = '' }} style={{ width: '100%' }}>
              <option value="">Add a subject...</option>
              {subjectKeys.filter((k) => !subjects.includes(k)).map((k) => (
                <option key={k} value={k}>{SUBJECTS[k].icon} {SUBJECTS[k].label}</option>
              ))}
            </select>

            {subjectError && (
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-danger)', marginTop: 'var(--space-2)' }}>
                <AlertCircle size={14} style={{ display: 'inline', marginRight: 'var(--space-1)' }} /> {subjectError}
              </p>
            )}
          </div>

          <div>
            <label className="label">Exam Duration</label>
            <select className="select" value={examDuration} onChange={(e) => setExamDuration(Number(e.target.value))}>
              {EXAM_DURATIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">Question Count</label>
            <select className="select" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
              {QUESTION_COUNTS.map((count) => (
                <option key={count} value={count}>{count} Questions</option>
              ))}
            </select>
          </div>

          <ViewOnly tooltip="Sign up to start a mock exam">
            <button
              onClick={onStart}
              disabled={subjects.length === 0}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3)' }}
            >
              <PlayCircle size={20} /> Start Mock Exam
            </button>
          </ViewOnly>
        </div>
      </div>
    </>
  )
}

// ============================================================
// EXAM VIEW
// ============================================================
function ExamView({ onSubmit, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(7200)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [warningCountdown] = useState(10)

  const questions = DEMO_QUESTIONS
  const currentQuestion = questions[currentIndex]
  const total = questions.length
  const answeredCount = Object.keys(answers).length
  const letters = ['A', 'B', 'C', 'D']

  useEffect(() => {
    const id = setInterval(() => setTimeRemaining((p) => Math.max(0, p - 1)), 1000)
    return () => clearInterval(id)
  }, [])

  const formatTimer = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }

  const handleAnswer = (qid, opt) => setAnswers((prev) => ({ ...prev, [qid]: opt }))

  return (
    <>
      {showWarning && (
        <div className="modal-overlay" style={{ zIndex: 200 }}>
          <div className="card" style={{ maxWidth: 400, textAlign: 'center', padding: 'var(--space-8)' }}>
            <AlertTriangle size={48} style={{ color: 'var(--color-danger)', margin: '0 auto var(--space-4)' }} />
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>⚠️ Tab Switch Detected!</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
              You switched tabs during the exam. This is not allowed.
              Exam will auto-submit in {warningCountdown} seconds.
            </p>
            <div className="progress" style={{ width: '100%' }}>
              <div className="progress-fill progress-fill-danger" style={{ width: `${(warningCountdown / 10) * 100}%` }} />
            </div>
            <button onClick={() => setShowWarning(false)} className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
              <CheckCircle2 size={16} /> I'm Back
            </button>
          </div>
        </div>
      )}

      <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <Calendar size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Mock Exam</h1>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>📐 ⚛️ 🧪 📖</p>
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <ViewOnly tooltip="Sign up to use the calculator">
            <button onClick={() => setShowCalculator(true)} className="btn btn-outline" style={{ padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
              <CalculatorIcon size={16} />
            </button>
          </ViewOnly>
          <div className="flex-center" style={{
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-xl)',
            background: timeRemaining < 300 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
            color: timeRemaining < 300 ? 'var(--color-danger)' : 'var(--color-primary)',
            fontWeight: 700,
            fontSize: 'var(--font-size-lg)',
            fontFamily: 'var(--font-mono)',
          }}>
            <Clock size={16} style={{ marginRight: 'var(--space-2)' }} />
            {formatTimer(timeRemaining)}
          </div>
        </div>
      </div>

      <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text)' }}>
          Question {currentIndex + 1} of {total}
        </span>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          {answeredCount}/{total} answered
        </span>
      </div>
      <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <span className="badge badge-muted">Q{currentIndex + 1}</span>
            <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{currentQuestion.topic}</span>
            <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>•</span>
            <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{currentQuestion.subject}</span>
          </div>
        </div>

        {currentQuestion.passage && (
          <div style={{
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-4)',
            maxHeight: 300,
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
              <FileText size={16} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Passage
              </span>
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {currentQuestion.passage}
            </div>
          </div>
        )}

        <div className="h3" style={{ marginBottom: 'var(--space-4)' }}>{currentQuestion.question}</div>
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {currentQuestion.options.map((option, idx) => {
            const letter = letters[idx]
            const isSelected = answers[currentQuestion.id] === option
            return (
              <ViewOnly key={idx} tooltip="Sign up to answer questions">
                <button
                  onClick={() => handleAnswer(currentQuestion.id, option)}
                  className="card card-hover flex-between"
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

      <div className="flex-between">
        <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}>
          ← Previous
        </button>
        <span className="badge badge-muted">{currentIndex + 1} / {total}</span>
        {currentIndex === total - 1 ? (
          <ViewOnly tooltip="Sign up to submit your exam">
            <button className="btn btn-success" onClick={onSubmit}>
              <CheckCircle2 size={16} /> Submit
            </button>
          </ViewOnly>
        ) : (
          <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.min(total - 1, p + 1))}>
            Next →
          </button>
        )}
      </div>

      <div className="card" style={{ marginTop: 'var(--space-4)' }}>
        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>Question Palette</div>
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
        <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
          <Legend color="var(--color-primary)" label="Current" />
          <Legend color="var(--color-success-light)" border="var(--color-success)" label="Answered" />
          <Legend color="var(--color-border)" label="Unanswered" />
        </div>
      </div>
    </>
  )
}

function Legend({ color, border, label }) {
  return (
    <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
      <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: color, border: border ? `1px solid ${border}` : 'none' }} /> {label}
    </span>
  )
}

// ============================================================
// RESULTS VIEW
// ============================================================
function ResultsView({ onRetry, onReview, onNavigate }) {
  const results = RESULTS
  const subjects = ['mathematics', 'physics', 'chemistry', 'english']

  return (
    <>
      <Header
        onNavigate={onNavigate}
        title="Mock Exam Results"
        subtitle={subjects.map((s) => `${SUBJECTS[s]?.icon} ${SUBJECTS[s]?.label}`).join(' • ')}
      />

      <div className="card text-center" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="h1" style={{
          fontSize: 'var(--font-size-5xl)',
          color: results.accuracy >= 70 ? 'var(--color-success)' : results.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
        }}>
          {results.accuracy}%
        </div>
        <p className="text-lg">{results.score} out of {results.total} correct</p>
        <div className="flex" style={{ gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-3)' }}>
          <span className="badge badge-primary"><Zap size={14} /> +{results.xp} XP</span>
          <span className="badge badge-success"><CheckCircle2 size={14} /> {results.correct} correct</span>
          <span className="badge badge-danger"><XCircle size={14} /> {results.wrong} wrong</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ fontWeight: 600, marginBottom: 'var(--space-4)' }}>Subject Breakdown</div>
        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          {Object.entries(results.breakdown).map(([subject, data]) => {
            const subAcc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
            return (
              <div key={subject}>
                <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                  <span style={{ color: 'var(--color-text)' }}>{subject}</span>
                  <span style={{ color: subAcc >= 70 ? 'var(--color-success)' : subAcc >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                    {subAcc}% ({data.correct}/{data.total})
                  </span>
                </div>
                <div className="progress">
                  <div className={`progress-fill ${subAcc >= 70 ? 'progress-fill-success' : subAcc >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`} style={{ width: `${subAcc}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <ViewOnly tooltip="Sign up to review your questions">
          <button className="btn btn-primary flex-1 flex-center" onClick={onReview}>
            <Eye size={16} /> Review Questions
          </button>
        </ViewOnly>
        <ViewOnly tooltip="Sign up to retry the exam">
          <button onClick={onRetry} className="btn btn-primary flex-1 flex-center">
            <RotateCw size={16} /> Retry Exam
          </button>
        </ViewOnly>
        <ViewOnly tooltip="Sign up to practice weak areas">
          <button onClick={() => onNavigate?.('practice')} className="btn btn-outline flex-1 flex-center">
            <Target size={16} /> Practice Weak Areas
          </button>
        </ViewOnly>
      </div>
    </>
  )
}

// ============================================================
// HEADER
// ============================================================
function Header({ onNavigate, title, subtitle }) {
  return (
    <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
          <Calendar size={24} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div>
          <h1 className="h2">{title}</h1>
          <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{subtitle}</p>
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
