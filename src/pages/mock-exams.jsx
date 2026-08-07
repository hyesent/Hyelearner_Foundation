// ============================================================
// HYELEARNER: MOCK EXAMS PAGE
// Full exam simulation with 4 subjects (select any 4 from constants),
// 100/140/180 questions, calculator, and anti-cheat
// NOW WITH PASSAGE + SVG/DIAGRAM SUPPORT
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useProgress } from '../hooks'
import { storage } from '../storage'
import { 
  calculateScore, 
  calculateXP, 
  shuffleArray,
  formatDate,
  calculateMastery
} from '../utils'
import { SUBJECTS } from '../constants'
import { sessions, subscriptions } from '../services'
import { QuestionReview } from '../components/QuestionReview'
import { BookmarkButton } from '../components/BookmarkButton'
import { Calculator } from '../components/calculator'
import questionIndex from '../data/questions/index.js'
import {
  ArrowLeft,
  Clock,
  Loader2,
  BarChart3,
  Zap,
  RotateCw,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Target,
  Calendar,
  TrendingUp,
  Award,
  PlayCircle,
  AlertTriangle,
  Calculator as CalculatorIcon,
  Eye,
  Lock,
  Crown,
  PenTool,
  FileText
} from 'lucide-react'

// ============================================================
// LOAD ALL QUESTIONS USING VITE GLOB
// ============================================================
const questionModules = import.meta.glob('../data/questions/**/*.js', { eager: true })

const questionMap = {}
Object.entries(questionModules).forEach(([path, module]) => {
  const relativePath = path.replace('../data/questions/', '')
  if (module.default && Array.isArray(module.default)) {
    questionMap[relativePath] = module.default
  }
})

// Timer options for mock exams
const EXAM_DURATIONS = [
  { value: 7200, label: '120 min' },
  { value: 9000, label: '150 min' },
  { value: 10800, label: '180 min' },
]

// Question count options
const QUESTION_COUNTS = [100, 140, 180]

// ============================================================
// MOCK EXAMS PAGE — WITH FREE TIER LOCK + MASTERY TRACKING
// NOW WITH PASSAGE + DIAGRAM RENDERING IN EXAM VIEW
// ============================================================
export function MockExamsPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { updateProgress } = useProgress()
  
  const [subjects, setSubjects] = useState([])
  const [examDuration, setExamDuration] = useState(7200)
  const [questionCount, setQuestionCount] = useState(100)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [timeRemaining, setTimeRemaining] = useState(examDuration)
  const [loading, setLoading] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [subjectError, setSubjectError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  
  // Tab warning state
  const [showWarning, setShowWarning] = useState(false)
  const [warningCountdown, setWarningCountdown] = useState(10)
  const warningIntervalRef = useRef(null)
  const hasSubmitted = useRef(false)

  const subjectKeys = Object.keys(SUBJECTS)
  const subjectLabels = subjectKeys.map(key => ({
    key,
    label: SUBJECTS[key].label,
    icon: SUBJECTS[key].icon
  }))

  // Load subscription status
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

  const isFreeUser = !subscription?.isActive

  // Timer
  useEffect(() => {
    if (!started || results || hasSubmitted.current || submitting) return
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [started, results, submitting])

  // Tab visibility detection
  useEffect(() => {
    if (!started || results || hasSubmitted.current || submitting) return

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startWarning()
      } else {
        clearWarning()
      }
    }

    const handleBeforeUnload = (e) => {
      if (started && !results && !hasSubmitted.current) {
        e.preventDefault()
        e.returnValue = 'You have an ongoing exam. Are you sure you want to leave?'
        handleSubmit()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearWarning()
    }
  }, [started, results, submitting])

  const startWarning = () => {
    if (showWarning) return
    setShowWarning(true)
    setWarningCountdown(10)

    warningIntervalRef.current = setInterval(() => {
      setWarningCountdown(prev => {
        if (prev <= 1) {
          clearInterval(warningIntervalRef.current)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const clearWarning = () => {
    setShowWarning(false)
    if (warningIntervalRef.current) {
      clearInterval(warningIntervalRef.current)
      warningIntervalRef.current = null
    }
  }

  const addSubject = (subjectKey) => {
    if (subjects.includes(subjectKey)) {
      setSubjectError('Subject already selected')
      return
    }
    if (subjects.length >= 4) {
      setSubjectError('Maximum 4 subjects allowed')
      return
    }
    setSubjects([...subjects, subjectKey])
    setSubjectError('')
  }

  const removeSubject = (subjectKey) => {
    setSubjects(subjects.filter(s => s !== subjectKey))
    setSubjectError('')
  }

  const handleStart = async () => {
    if (subjects.length < 1) {
      setSubjectError('Please select at least 1 subject')
      return
    }
    if (subjects.length > 4) {
      setSubjectError('Maximum 4 subjects allowed')
      return
    }

    setLoading(true)
    setSubjectError('')
    try {
      // Get subject labels from keys
      const subjectLabels = subjects.map(key => SUBJECTS[key]?.label || key)
      
      let allQuestions = []
      
      for (const subjectLabel of subjectLabels) {
        // Find subject in index
        const subjectEntry = questionIndex.find(entry => entry.subject === subjectLabel)
        
        if (!subjectEntry) {
          console.warn(`Subject "${subjectLabel}" not found in question index`)
          continue
        }
        
        // Get all questions for this subject from the already loaded questionMap
        for (const topic of subjectEntry.topics) {
          const filePath = topic.file
          const questions = questionMap[filePath]
          
          if (questions && Array.isArray(questions)) {
            const topicQuestions = questions.map(q => ({
              ...q,
              subject: subjectLabel
            }))
            allQuestions = allQuestions.concat(topicQuestions)
          }
        }
      }
      
      if (allQuestions.length === 0) {
        alert('No questions available for the selected subjects. Please try different subjects.')
        setLoading(false)
        return
      }
      
      // Shuffle and select questions
      const shuffled = shuffleArray(allQuestions)
      const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length))
      
      // Create session for tracking/stats
      try {
        await sessions.start({
          subject: subjectLabels.join(', '),
          topic: 'All Topics',
          count: selected.length,
          difficulty: 'mixed',
          isTimed: true,
          timeLimit: examDuration,
          questions: selected
        })
      } catch (sessionError) {
        console.warn('Session creation failed, but continuing with exam:', sessionError)
      }
      
      setQuestions(selected)
      setStarted(true)
      setTimeRemaining(examDuration)
      setCurrentIndex(0)
      setAnswers({})
      setResults(null)
      setShowReview(false)
      setXpEarned(0)
      hasSubmitted.current = false
    } catch (error) {
      console.error('Failed to start mock exam:', error)
      alert('Failed to load questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (questionId, optionText) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionText }))
  }

  const handleSubmit = async () => {
    if (hasSubmitted.current || submitting) return
    const answered = Object.keys(answers).length
    if (answered < questions.length) {
      if (!confirm(`You've answered ${answered}/${questions.length}. Submit anyway?`)) return
    }
    hasSubmitted.current = true
    clearWarning()
    setSubmitting(true)

    try {
      const timeTaken = examDuration - timeRemaining
      const scoreData = calculateScore(questions, answers)
      
      const result = updateProgress({
        type: 'mock_exam',
        subject: subjects.map(s => SUBJECTS[s]?.label || s).join(', '),
        topic: 'All Topics',
        questions: questions,
        answers: answers,
        timeTaken: timeTaken,
        mode: 'Mock Exam'
      })

      try {
        await sessions.complete({
          subject: subjects.map(s => SUBJECTS[s]?.label || s).join(', '),
          score: scoreData.score,
          total: scoreData.total,
          accuracy: scoreData.accuracy,
          timeTaken: timeTaken,
          answers: answers
        })
      } catch (sessionError) {
        console.warn('Failed to complete session:', sessionError)
      }

      // Save to localStorage for Results page
      const sessionData = {
        subject: subjects.map(s => SUBJECTS[s]?.label || s).join(', '),
        topic: 'All Topics',
        score: scoreData.score,
        total: scoreData.total,
        accuracy: scoreData.accuracy,
        date: new Date().toISOString(),
        timeTaken: timeTaken,
        mode: 'Mock Exam',
        xp: result.xp
      }
      
      const savedSessions = localStorage.getItem('hyelearner_sessions')
      const sessions = savedSessions ? JSON.parse(savedSessions) : []
      sessions.push(sessionData)
      localStorage.setItem('hyelearner_sessions', JSON.stringify(sessions))

      // Subject breakdown for display
      const breakdown = {}
      questions.forEach((q) => {
        const subject = q.subject || 'General'
        if (!breakdown[subject]) {
          breakdown[subject] = { total: 0, correct: 0 }
        }
        breakdown[subject].total++
        if (answers[q.id] === q.answer) {
          breakdown[subject].correct++
        }
      })
      
      setResults({ ...scoreData, breakdown })
      setXpEarned(result.xp)
      setShowReview(true)

    } catch (error) {
      console.error('Failed to submit exam:', error)
      alert('Failed to submit. Please try again.')
      hasSubmitted.current = false
    } finally {
      setSubmitting(false)
    }
  }

  const handleRetry = () => {
    setStarted(false)
    setQuestions([])
    setAnswers({})
    setResults(null)
    setCurrentIndex(0)
    setTimeRemaining(examDuration)
    setShowReview(false)
    setXpEarned(0)
    hasSubmitted.current = false
    clearWarning()
  }

  const formatTimer = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // ===== FREE USER LOCK SCREEN =====
  if (!subLoading && isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Calendar style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2">Mock Exams</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Full exam simulation with 4 subjects</p>
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
            <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Mock Exams are for Subscribers</h2>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
              Full exam simulation with 1-4 subjects, 100-180 questions, and real exam conditions.
              Upgrade to Foundation plan to unlock this feature.
            </p>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center' }}>
              <button 
                onClick={() => navigate('/practice')} 
                className="btn btn-outline flex-center"
              >
                <PenTool style={{ width: '16px', height: '16px' }} /> Go to Practice
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

  // ===== RESULTS WITH QUESTION REVIEW =====
  if (showReview && results) {
    const subjectNames = subjects.map(s => SUBJECTS[s]?.label || s).join(', ')
    return (
      <QuestionReview
        questions={questions}
        answers={answers}
        subject={subjectNames}
        topic="All Topics"
        mode="Mock Exam"
        xpEarned={xpEarned}
        onRetry={handleRetry}
        onClose={() => navigate('/dashboard')}
        showBookmark={true}
        showRetry={true}
        showHome={true}
      />
    )
  }

  // ===== RESULTS VIEW (before review) =====
  if (results) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2">Mock Exam Results</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  {subjects.map(s => SUBJECTS[s]?.icon || '📚').join(' ')} {subjects.map(s => SUBJECTS[s]?.label || s).join(', ')}
                </p>
              </div>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>

          <div className="card text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="h1" style={{ 
              fontSize: 'var(--font-size-5xl)',
              color: results.accuracy >= 70 ? 'var(--color-success)' : results.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'
            }}>
              {results.accuracy}%
            </div>
            <p className="text-lg">{results.score} out of {results.total} correct</p>
            <div className="flex" style={{ gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-3)' }}>
              <span className="badge badge-primary"><Zap style={{ width: '14px', height: '14px' }} /> +{xpEarned} XP</span>
              <span className="badge badge-success"><CheckCircle2 style={{ width: '14px', height: '14px' }} /> {results.correct} correct</span>
              <span className="badge badge-danger"><XCircle style={{ width: '14px', height: '14px' }} /> {results.wrong} wrong</span>
            </div>
          </div>

          {results.breakdown && Object.keys(results.breakdown).length > 0 && (
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ fontWeight: '600', marginBottom: 'var(--space-4)' }}>Subject Breakdown</div>
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {Object.entries(results.breakdown).map(([subject, data]) => {
                  const subAcc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
                  const subjectLabel = SUBJECTS[subject]?.label || subject
                  const subjectIcon = SUBJECTS[subject]?.icon || '📚'
                  return (
                    <div key={subject}>
                      <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                        <span style={{ color: 'var(--color-text)' }}>{subjectIcon} {subjectLabel}</span>
                        <span style={{ color: subAcc >= 70 ? 'var(--color-success)' : subAcc >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                          {subAcc}% ({data.correct}/{data.total})
                        </span>
                      </div>
                      <div className="progress">
                        <div className={`progress-fill ${subAcc >= 70 ? 'progress-fill-success' : subAcc >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`}
                             style={{ width: `${subAcc}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <button 
              className="btn btn-primary flex-1 flex-center" 
              onClick={() => setShowReview(true)}
            >
              <Eye className="w-4 h-4" /> Review Questions
            </button>
            <button onClick={handleRetry} className="btn btn-primary flex-1 flex-center">
              <RotateCw style={{ width: '16px', height: '16px' }} /> Retry Exam
            </button>
            <button onClick={() => navigate('/practice')} className="btn btn-outline flex-1 flex-center">
              <Target style={{ width: '16px', height: '16px' }} /> Practice Weak Areas
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ===== EXAM VIEW — WITH PASSAGE + DIAGRAM SUPPORT =====
  if (started && questions.length > 0) {
    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length
    const letters = ['A', 'B', 'C', 'D']

    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {/* Tab Warning Overlay */}
          {showWarning && (
            <div className="modal-overlay" style={{ zIndex: 200 }}>
              <div className="card" style={{ maxWidth: '400px', textAlign: 'center', padding: 'var(--space-8)' }}>
                <AlertTriangle style={{ width: '48px', height: '48px', color: 'var(--color-danger)', margin: '0 auto var(--space-4)' }} />
                <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>⚠️ Tab Switch Detected!</h3>
                <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
                  You switched tabs during the exam. This is not allowed.
                  Exam will auto-submit in {warningCountdown} seconds.
                </p>
                <div className="progress" style={{ width: '100%' }}>
                  <div className="progress-fill progress-fill-danger" style={{ width: `${(warningCountdown / 10) * 100}%` }} />
                </div>
                <button 
                  onClick={() => { clearWarning(); setShowWarning(false) }}
                  className="btn btn-primary"
                  style={{ marginTop: 'var(--space-4)' }}
                >
                  <CheckCircle2 style={{ width: '16px', height: '16px' }} /> I'm Back
                </button>
              </div>
            </div>
          )}

          <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Calendar style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2">Mock Exam</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  {subjects.map(s => SUBJECTS[s]?.icon || '📚').join(' ')}
                </p>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <button 
                onClick={() => setShowCalculator(true)}
                className="btn btn-outline"
                style={{ padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
              >
                <CalculatorIcon style={{ width: '16px', height: '16px' }} />
              </button>
              {showCalculator && <Calculator onClose={() => setShowCalculator(false)} />}
              <div className="flex-center" style={{ 
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-xl)',
                background: timeRemaining < 300 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
                color: timeRemaining < 300 ? 'var(--color-danger)' : 'var(--color-primary)',
                fontWeight: '700',
                fontSize: 'var(--font-size-lg)',
                fontFamily: 'var(--font-mono)',
                animation: timeRemaining < 300 ? 'pulse 1s infinite' : 'none'
              }}>
                <Clock style={{ width: '16px', height: '16px', marginRight: 'var(--space-2)' }} />
                {formatTimer(timeRemaining)}
              </div>
            </div>
          </div>

          <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>Question {currentIndex + 1} of {total}</span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{answeredCount}/{total} answered</span>
          </div>
          <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
          </div>

          {currentQuestion && (
            <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <span className="badge badge-muted">Q{currentIndex + 1}</span>
                  <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{currentQuestion.topic || 'General'}</span>
                  <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>•</span>
                  <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{currentQuestion.subject || ''}</span>
                </div>
                <BookmarkButton question={currentQuestion} size="md" />
              </div>

              {/* ===== PASSAGE SECTION (for comprehension questions) ===== */}
              {currentQuestion.passage && (
                <div style={{
                  background: 'var(--color-background)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  maxHeight: '300px',
                  overflowY: 'auto'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-3)'
                  }}>
                    <FileText style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Passage
                    </span>
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    whiteSpace: 'pre-line'
                  }}>
                    {currentQuestion.passage}
                  </div>
                </div>
              )}

              {/* ===== SVG / DIAGRAM SECTION ===== */}
              {currentQuestion.diagram && (
                <div style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  <img 
                    src={currentQuestion.diagram} 
                    alt="Diagram for question" 
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
              )}

              <div className="h3" style={{ marginBottom: 'var(--space-4)' }}>{currentQuestion.question}</div>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                {currentQuestion.options.map((option, idx) => {
                  const letter = letters[idx]
                  const isSelected = answers[currentQuestion.id] === option
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(currentQuestion.id, option)}
                      className={`card card-hover flex-between ${isSelected ? 'success-card' : ''}`}
                      style={{ 
                        cursor: 'pointer',
                        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        background: isSelected ? 'var(--color-primary-light)' : 'var(--color-surface)'
                      }}
                    >
                      <div className="flex" style={{ gap: 'var(--space-4)' }}>
                        <span className="flex-center" style={{ 
                          width: '36px', height: '36px', borderRadius: '50%',
                          background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                          color: isSelected ? 'white' : 'var(--color-text-secondary)',
                          fontWeight: '700'
                        }}>{letter}</span>
                        <span className={isSelected ? 'h4' : ''}>{option}</span>
                      </div>
                      {isSelected && <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <div className="flex-between">
            <button 
              className="btn btn-outline" 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? '0.4' : '1' }}
            >
              ← Previous
            </button>
            <span className="badge badge-muted">{currentIndex + 1} / {total}</span>
            {currentIndex === total - 1 ? (
              <button className="btn btn-success" onClick={handleSubmit} disabled={submitting || loading}>
                {submitting || loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                {submitting || loading ? 'Submitting...' : 'Submit'}
              </button>
            ) : (
              <button className="btn btn-outline" onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}>
                Next →
              </button>
            )}
          </div>

          <div className="card" style={{ marginTop: 'var(--space-4)' }}>
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>Question Palette</div>
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
                      width: '36px', height: '36px', borderRadius: 'var(--radius)',
                      background: isCurrent ? 'var(--color-primary)' : isAnswered ? 'var(--color-success-light)' : 'var(--color-border)',
                      color: isCurrent ? 'white' : isAnswered ? 'var(--color-success)' : 'var(--color-text-secondary)',
                      fontWeight: '600',
                      fontSize: 'var(--font-size-sm)',
                      transition: 'all var(--transition)',
                      cursor: 'pointer',
                      border: 'none'
                    }}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)' }} /> Current
              </span>
              <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-success-light)', border: '1px solid var(--color-success)' }} /> Answered
              </span>
              <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-border)' }} /> Unanswered
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ===== START VIEW =====
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Calendar style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Mock Exams</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Full exam simulation with 4 subjects</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="stack" style={{ gap: 'var(--space-5)' }}>
            <div>
              <label className="label" style={{ marginBottom: 'var(--space-2)' }}>
                Select Subjects (1-4 subjects)
              </label>
              
              {subjects.length > 0 && (
                <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  {subjects.map(key => (
                    <span key={key} className="badge badge-primary" style={{ 
                      padding: 'var(--space-1) var(--space-3)', 
                      fontSize: 'var(--font-size-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}>
                      {SUBJECTS[key]?.icon || '📚'} {SUBJECTS[key]?.label || key}
                      <button onClick={() => removeSubject(key)} style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                        padding: '0 var(--space-1)'
                      }}>
                        ✕
                      </button>
                    </span>
                  ))}
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', alignSelf: 'center' }}>
                    {subjects.length}/4 selected
                  </span>
                </div>
              )}

              <div className="flex" style={{ gap: 'var(--space-3)' }}>
                <select
                  className="select"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) {
                      addSubject(e.target.value)
                      e.target.value = ''
                    }
                  }}
                  style={{ flex: 1 }}
                >
                  <option value="">Add a subject...</option>
                  {subjectLabels
                    .filter(s => !subjects.includes(s.key))
                    .map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.icon} {s.label}
                      </option>
                    ))
                  }
                </select>
              </div>

              {subjectError && (
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-danger)', marginTop: 'var(--space-2)' }}>
                  <AlertCircle style={{ width: '14px', height: '14px', display: 'inline', marginRight: 'var(--space-1)' }} />
                  {subjectError}
                </p>
              )}

              {subjects.length === 0 && (
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                  Select at least 1 subject (max 4) to start the mock exam
                </p>
              )}
            </div>

            <div>
              <label className="label">Exam Duration</label>
              <select
                className="select"
                value={examDuration}
                onChange={(e) => setExamDuration(Number(e.target.value))}
              >
                {EXAM_DURATIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Question Count</label>
              <select
                className="select"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                {QUESTION_COUNTS.map((count) => (
                  <option key={count} value={count}>{count} Questions</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleStart}
              disabled={subjects.length === 0 || loading}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3)' }}
            >
              {loading ? (
                <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Loading...</>
              ) : (
                <><PlayCircle style={{ width: '20px', height: '20px' }} /> Start Mock Exam</>
              )}
            </button>

            {subjects.length === 0 && (
              <p className="flex-center" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
                <AlertCircle style={{ width: '16px', height: '16px' }} /> Please select at least 1 subject
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
