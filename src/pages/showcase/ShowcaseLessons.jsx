// ============================================================
// HYELEARNER: FOUNDATION — LESSONS (SHOWCASE / PREVIEW)
// Static replica of LessonsPage. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, BookOpen, Search, Lock, Crown, PenTool,
  AlertCircle, CheckCircle2, XCircle, Target, Zap,
  ChevronRight, RefreshCw, PlayCircle, FileText,
} from 'lucide-react'

// ============================================================
// STATIC DATA — lessons index (a realistic slice)
// ============================================================
const LESSON_INDEX = [
  // Mathematics
  { name: 'Linear Equations',       subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Quadratic Equations',    subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Simultaneous Equations', subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Trigonometry Basics',    subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Logarithms',             subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Probability',            subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Statistics',             subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Mensuration',            subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Indices',                subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Surds',                  subject: 'Mathematics', category: 'core',     icon: '📐' },
  { name: 'Vectors',                subject: 'Mathematics', category: 'advanced', icon: '📐' },
  { name: 'Calculus Intro',         subject: 'Mathematics', category: 'advanced', icon: '📐' },

  // Physics
  { name: "Newton's Laws of Motion", subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Work, Energy & Power',    subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Waves and Sound',         subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Electricity',             subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Magnetism',               subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Optics',                  subject: 'Physics', category: 'core',     icon: '⚛️' },
  { name: 'Projectile Motion',       subject: 'Physics', category: 'advanced', icon: '⚛️' },
  { name: 'Circular Motion',         subject: 'Physics', category: 'advanced', icon: '⚛️' },

  // Chemistry
  { name: 'Atomic Structure',    subject: 'Chemistry', category: 'core',     icon: '🧪' },
  { name: 'Periodic Table',      subject: 'Chemistry', category: 'core',     icon: '🧪' },
  { name: 'Chemical Bonding',    subject: 'Chemistry', category: 'core',     icon: '🧪' },
  { name: 'Acids & Bases',       subject: 'Chemistry', category: 'core',     icon: '🧪' },
  { name: 'Organic Chemistry',   subject: 'Chemistry', category: 'advanced', icon: '🧪' },
  { name: 'Electrochemistry',    subject: 'Chemistry', category: 'advanced', icon: '🧪' },

  // English
  { name: 'Comprehension',              subject: 'English', category: 'core', icon: '📖' },
  { name: 'Argumentative Essay',        subject: 'English', category: 'core', icon: '📖' },
  { name: 'Synonyms & Antonyms',        subject: 'English', category: 'core', icon: '📖' },
  { name: 'Sentence Completion',        subject: 'English', category: 'core', icon: '📖' },
  { name: 'Oral Forms',                 subject: 'English', category: 'core', icon: '📖' },

  // Biology
  { name: 'Cell Structure',    subject: 'Biology', category: 'core',     icon: '🧬' },
  { name: 'Cell Division',     subject: 'Biology', category: 'core',     icon: '🧬' },
  { name: 'Genetics',          subject: 'Biology', category: 'advanced', icon: '🧬' },
  { name: 'Ecology',           subject: 'Biology', category: 'core',     icon: '🧬' },
  { name: 'Human Physiology',  subject: 'Biology', category: 'advanced', icon: '🧬' },
]

// Mastery values a real user would have — keyed by lesson name
const MASTERY = {
  'Linear Equations': 92,
  'Quadratic Equations': 84,
  'Simultaneous Equations': 78,
  'Trigonometry Basics': 41,
  'Logarithms': 55,
  'Probability': 63,
  "Newton's Laws of Motion": 88,
  'Work, Energy & Power': 79,
  'Waves and Sound': 42,
  'Electricity': 51,
  'Atomic Structure': 76,
  'Periodic Table': 82,
  'Organic Chemistry': 22,
  'Chemical Bonding': 44,
  'Comprehension': 35,
  'Argumentative Essay': 67,
  'Synonyms & Antonyms': 90,
  'Cell Structure': 81,
  'Cell Division': 74,
  'Genetics': 48,
}

// Demo lesson content for the "read" view
const DEMO_LESSON = {
  name: 'Quadratic Equations',
  subject: 'Mathematics',
  category: 'core',
  icon: '📐',
  grade_level: 'SS2',
  estimated_duration: '25 min',
  objectives: [
    'Identify quadratic equations in standard form',
    'Solve quadratics by factorisation',
    'Use the quadratic formula correctly',
    'Interpret the discriminant',
  ],
  keyTerms: [
    { term: 'Quadratic equation', definition: 'An equation of the form ax² + bx + c = 0 where a ≠ 0.' },
    { term: 'Discriminant',       definition: 'The expression b² − 4ac, which determines the nature of the roots.' },
    { term: 'Roots',              definition: 'The values of x that satisfy the equation.' },
  ],
  content: `A quadratic equation is any equation that can be written in the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.

There are three common methods for solving quadratic equations:

1. Factorisation — Write the equation as a product of two linear factors, then set each factor to zero.

2. Completing the square — Rewrite the equation in the form (x + p)² = q, then take square roots.

3. Quadratic formula — Substitute a, b, and c into x = (−b ± √(b² − 4ac)) / 2a.

The discriminant, b² − 4ac, tells you how many real roots the equation has:
• If b² − 4ac > 0, there are two distinct real roots.
• If b² − 4ac = 0, there is exactly one real root.
• If b² − 4ac < 0, there are no real roots.

Worked example: Solve x² − 5x + 6 = 0.
Factorising: (x − 2)(x − 3) = 0, so x = 2 or x = 3.`,
  practice: [
    {
      id: 'p1',
      question: 'Solve for x: x² − 7x + 12 = 0',
      options: ['x = 3 or x = 4', 'x = 2 or x = 6', 'x = −3 or x = −4', 'x = 1 or x = 12'],
      answer: 'x = 3 or x = 4',
      explanation: 'Factorise: (x − 3)(x − 4) = 0, so x = 3 or x = 4.',
    },
    {
      id: 'p2',
      question: 'What is the discriminant of x² + 2x + 5 = 0?',
      options: ['−16', '4', '24', '0'],
      answer: '−16',
      explanation: 'b² − 4ac = 2² − 4·1·5 = 4 − 20 = −16.',
    },
    {
      id: 'p3',
      question: 'Which method is fastest for x² − 9 = 0?',
      options: ['Factorisation', 'Quadratic formula', 'Completing the square', 'Graphing'],
      answer: 'Factorisation',
      explanation: 'x² − 9 = (x − 3)(x + 3), giving roots immediately.',
    },
  ],
}

// ============================================================
// HELPERS
// ============================================================
const slug = (s) => s.replace(/\s+/g, '_').toLowerCase()
const getMastery = (name) => MASTERY[name] || 0

// ============================================================
// UPGRADE BANNER
// ============================================================
function UpgradePromoBanner({ onNavigate }) {
  return (
    <div className="card" style={{
      padding: 'var(--space-6)',
      background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%)',
      border: '2px solid var(--color-primary)',
      marginBottom: 'var(--space-6)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.1 }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 160, height: 160, borderRadius: '50%', background: 'var(--color-secondary)', opacity: 0.08 }} />

      <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <div className="flex-center" style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }}>
          <Crown size={28} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
            <h3 className="h3" style={{ margin: 0, color: 'var(--color-text)' }}>Unlock All Lessons</h3>
            <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
              <Zap size={12} style={{ display: 'inline' }} /> Recommended
            </span>
          </div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            Get access to <strong>328+ lessons</strong> across 47 subjects. Master every topic with interactive lessons, practice tests, and detailed explanations.
          </p>
          <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
            {['328+ Lessons', '47 Subjects', 'Practice Tests', 'Mastery Tracking'].map((t) => (
              <span key={t} className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                <CheckCircle2 size={12} style={{ display: 'inline' }} /> {t}
              </span>
            ))}
          </div>
        </div>
        <ViewOnly tooltip="Sign up to upgrade">
          <button
            onClick={() => onNavigate?.('settings')}
            className="btn btn-primary btn-lg"
            style={{ flexShrink: 0, padding: 'var(--space-2) var(--space-6)', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
          >
            <Crown size={18} /> Upgrade Now
          </button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ============================================================
// LESSON CARD
// ============================================================
function LessonCard({ lesson, mastery, onClick, index }) {
  const isMastered = mastery >= 80
  const isProgress = mastery > 0 && mastery < 80

  return (
    <ViewOnly tooltip="Sign up to open lessons">
      <button
        onClick={onClick}
        className="card card-hover flex-between"
        style={{ width: '100%', textAlign: 'left', cursor: 'pointer', padding: 'var(--space-4)' }}
      >
        <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center', minWidth: 0 }}>
          <div className="flex-center" style={{
            width: 48, height: 48, borderRadius: 'var(--radius-xl)',
            background: 'var(--color-primary-light)', flexShrink: 0, fontSize: 22,
          }}>
            {lesson.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>
                {lesson.name}
              </span>
              {isMastered && <CheckCircle2 size={14} style={{ color: 'var(--color-success)' }} />}
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginTop: 4 }}>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {lesson.subject}
              </span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-border)' }} />
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>
                {lesson.category}
              </span>
            </div>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flexShrink: 0 }}>
          {isMastered && <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>Mastered</span>}
          {isProgress && <span className="badge badge-warning" style={{ fontSize: 'var(--font-size-xs)' }}>{mastery}%</span>}
          {!isMastered && !isProgress && <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>New</span>}
          <ChevronRight size={18} style={{ color: 'var(--color-text-muted)' }} />
        </div>
      </button>
    </ViewOnly>
  )
}

// ============================================================
// LESSON VIEWER (read)
// ============================================================
function LessonViewer({ lesson, onMarkRead, onTakeTest, onBack, isRead }) {
  return (
    <div className="stack" style={{ gap: 'var(--space-4)' }}>
      <div className="card flex-between">
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <button className="btn btn-ghost" onClick={onBack}>
            <ArrowLeft size={16} /> Back
          </button>
        </div>
        {isRead && <span className="badge badge-success"><CheckCircle2 size={12} /> Read</span>}
      </div>

      <div className="card" style={{ padding: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <div className="flex-center" style={{ width: 56, height: 56, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)', fontSize: 26 }}>
            {lesson.icon}
          </div>
          <div>
            <h1 className="h2" style={{ marginBottom: 4 }}>{lesson.name}</h1>
            <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              <span>{lesson.subject}</span>
              <span>•</span>
              <span>{lesson.grade_level}</span>
              <span>•</span>
              <span>{lesson.estimated_duration}</span>
            </div>
          </div>
        </div>

        {lesson.objectives?.length > 0 && (
          <div style={{ background: 'var(--color-background)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-4)' }}>
            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-2)' }}>
              <Target size={14} style={{ display: 'inline', marginRight: 6 }} /> Learning Objectives
            </div>
            <ul className="stack" style={{ gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', paddingLeft: 'var(--space-4)' }}>
              {lesson.objectives.map((o, i) => <li key={i}>• {o}</li>)}
            </ul>
          </div>
        )}

        <div style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
          {lesson.content}
        </div>

        {lesson.keyTerms?.length > 0 && (
          <div style={{ marginTop: 'var(--space-6)' }}>
            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-2)' }}>
              <FileText size={14} style={{ display: 'inline', marginRight: 6 }} /> Key Terms
            </div>
            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {lesson.keyTerms.map((t, i) => (
                <div key={i} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius-lg)' }}>
                  <strong>{t.term}</strong> — {t.definition}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <ViewOnly tooltip="Sign up to mark as read">
          <button
            className={`btn flex-1 flex-center ${isRead ? 'btn-outline' : 'btn-primary'}`}
            onClick={onMarkRead}
            disabled={isRead}
          >
            <CheckCircle2 size={16} /> {isRead ? 'Already Read' : 'Mark as Read'}
          </button>
        </ViewOnly>
        <ViewOnly tooltip="Sign up to take the lesson test">
          <button className="btn btn-primary flex-1 flex-center" onClick={onTakeTest}>
            <PlayCircle size={16} /> Take Test
          </button>
        </ViewOnly>
      </div>
    </div>
  )
}

// ============================================================
// LESSON TEST
// ============================================================
function LessonTest({ lesson, questions, onComplete, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const currentQuestion = questions[currentIndex]
  const total = questions.length
  const letters = ['A', 'B', 'C', 'D']

  const handleAnswer = (qid, opt) => setAnswers((prev) => ({ ...prev, [qid]: opt }))

  const handleSubmit = () => {
    setSubmitted(true)
    onComplete?.({ answers })
  }

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.answer).length
    const accuracy = Math.round((correct / total) * 100)
    return (
      <div className="stack" style={{ gap: 'var(--space-4)' }}>
        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div className="h1" style={{
            fontSize: 'var(--font-size-5xl)',
            color: accuracy >= 70 ? 'var(--color-success)' : accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
          }}>
            {accuracy}%
          </div>
          <p className="text-lg">{correct} out of {total} correct</p>
        </div>
        <ViewOnly tooltip="Sign up to continue">
          <button className="btn btn-primary flex-center" onClick={onBack} style={{ width: '100%' }}>
            <ArrowLeft size={16} /> Back to Lesson
          </button>
        </ViewOnly>
      </div>
    )
  }

  return (
    <div className="stack" style={{ gap: 'var(--space-4)' }}>
      <div className="card flex-between">
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <button className="btn btn-ghost" onClick={onBack}><ArrowLeft size={16} /> Back</button>
          <span style={{ fontWeight: 600 }}>{lesson.name} — Test</span>
        </div>
        <span className="badge badge-muted">{currentIndex + 1} / {total}</span>
      </div>

      <div className="card">
        <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
          {currentQuestion.question}
        </div>
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = answers[currentQuestion.id] === option
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.id, option)}
                className="card card-hover flex-between"
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  background: isSelected ? 'var(--color-primary-light)' : 'var(--color-surface)',
                }}
              >
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <span className="flex-center" style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                    color: isSelected ? 'white' : 'var(--color-text-secondary)',
                    fontWeight: 700,
                  }}>{letters[idx]}</span>
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-between">
        <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}>
          ← Previous
        </button>
        {currentIndex === total - 1 ? (
          <ViewOnly tooltip="Sign up to submit your test">
            <button className="btn btn-success" onClick={handleSubmit}>
              <CheckCircle2 size={16} /> Submit
            </button>
          </ViewOnly>
        ) : (
          <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.min(total - 1, p + 1))}>
            Next →
          </button>
        )}
      </div>
    </div>
  )
}

// ============================================================
// MAIN SHOWCASE — Lessons
// ============================================================
export default function ShowcaseLessons({ onNavigate }) {
  const [lessons] = useState(LESSON_INDEX)
  const [filteredLessons, setFilteredLessons] = useState(LESSON_INDEX)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [masteryData] = useState(MASTERY)

  const [selectedLesson, setSelectedLesson] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list' | 'read' | 'test'
  const [lessonQuestions, setLessonQuestions] = useState([])
  const [lessonRead, setLessonRead] = useState(false)

  // filter
  useEffect(() => {
    let filtered = [...lessons]
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter((l) => l.name.toLowerCase().includes(q) || l.subject.toLowerCase().includes(q))
    }
    if (selectedSubject !== 'all') filtered = filtered.filter((l) => l.subject === selectedSubject)
    if (selectedCategory !== 'all') filtered = filtered.filter((l) => l.category === selectedCategory)
    setFilteredLessons(filtered)
  }, [searchQuery, selectedSubject, selectedCategory, lessons])

  const subjects = ['all', ...new Set(lessons.map((l) => l.subject))]
  const categories = ['all', ...new Set(lessons.map((l) => l.category))]

  const handleLessonClick = (lesson) => {
    // Demo lesson content is always the same for showcase purposes
    setSelectedLesson({ ...DEMO_LESSON, ...lesson, content: DEMO_LESSON.content, practice: DEMO_LESSON.practice, objectives: DEMO_LESSON.objectives, keyTerms: DEMO_LESSON.keyTerms })
    setLessonRead(getMastery(lesson.name) >= 80)
    setViewMode('read')
  }

  const handleMarkRead = () => setLessonRead(true)

  const handleTakeTest = () => {
    setLessonQuestions(DEMO_LESSON.practice)
    setViewMode('test')
  }

  const handleTestComplete = () => setLessonRead(true)

  const handleBack = () => {
    if (viewMode === 'test') { setViewMode('read'); setLessonQuestions([]) }
    else if (viewMode === 'read') { setViewMode('list'); setSelectedLesson(null); setLessonRead(false) }
  }

  // ============================================================
  // TEST VIEW
  // ============================================================
  if (viewMode === 'test' && selectedLesson) {
    return (
      <div className="container section">
        <LessonTest
          lesson={selectedLesson}
          questions={lessonQuestions}
          onComplete={handleTestComplete}
          onBack={handleBack}
        />
      </div>
    )
  }

  // ============================================================
  // READ VIEW
  // ============================================================
  if (viewMode === 'read' && selectedLesson) {
    return (
      <div className="container section">
        <LessonViewer
          lesson={selectedLesson}
          onMarkRead={handleMarkRead}
          onTakeTest={handleTakeTest}
          onBack={handleBack}
          isRead={lessonRead}
        />
      </div>
    )
  }

  // ============================================================
  // LIST VIEW
  // ============================================================
  const totalLessons = filteredLessons.length
  const masteredCount = filteredLessons.filter((l) => getMastery(l.name) >= 80).length

  return (
    <div className="container section">
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <BookOpen size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Lessons</h1>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              {totalLessons} lessons • {masteredCount} mastered
            </p>
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} title="Refresh">
            <RefreshCw size={16} />
          </button>
          <ViewOnly tooltip="Sign up to go back">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>
      </div>

      <div className="upgrade-banner">
        <UpgradePromoBanner onNavigate={onNavigate} />
      </div>

      <div className="grid-4" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)' }}>{totalLessons}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Lessons</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-success)' }}>{masteredCount}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Mastered</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-warning)' }}>
            {totalLessons > 0 ? Math.round((masteredCount / totalLessons) * 100) : 0}%
          </div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Progress</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-danger)' }}>{totalLessons - masteredCount}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Remaining</div>
        </div>
      </div>

      <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search lessons..."
              className="input"
              style={{ paddingLeft: 'var(--space-10)', width: '100%' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="select" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} style={{ minWidth: 140 }}>
            <option value="all">All Subjects</option>
            {subjects.filter((s) => s !== 'all').map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ minWidth: 140 }}>
            <option value="all">All Categories</option>
            {categories.filter((c) => c !== 'all').map((c) => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="empty-card">
          <div className="icon"><BookOpen size={48} style={{ color: 'var(--color-text-muted)' }} /></div>
          <div className="title">No Lessons Found</div>
          <div className="desc">Try adjusting your search or filters</div>
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={slug(lesson.name)}
              lesson={lesson}
              mastery={getMastery(lesson.name)}
              onClick={() => handleLessonClick(lesson)}
              index={index}
            />
          ))}
        </div>
      )}

      <div className="card text-center" style={{
        marginTop: 'var(--space-4)',
        padding: 'var(--space-4)',
        background: 'var(--color-warning-light)',
        border: '1px dashed var(--color-warning)',
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Lock size={16} style={{ color: 'var(--color-warning)' }} />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            <strong>Free users</strong> can view lessons but need to <strong>upgrade</strong> to access full content and tests.
          </span>
          <ViewOnly tooltip="Sign up to upgrade">
            <button onClick={() => onNavigate?.('settings')} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
              <Crown size={14} /> Upgrade
            </button>
          </ViewOnly>
        </div>
      </div>
    </div>
  )
}
