// ============================================================
// HYELEARNER: FOUNDATION — LEARN PAGES
// CBT Practice, Results, Topic Mode (restricted for free)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth, useProgress } from '../hooks'
import { storage } from '../storage'
import { subscriptions } from '../services'
import { 
  calculateScore, 
  calculateXP, 
  shuffleArray,
  formatDate,
  calculateMastery
} from '../utils'
import { SUBJECTS } from '../constants'
import { QuestionReview } from '../components/QuestionReview'
import { BookmarkButton } from '../components/BookmarkButton'
import { Calculator } from '../components/calculator'
import questionIndex from '../data/questions/index.js'

// Lucide Icons
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  PlayCircle,
  ChevronRight,
  Loader2,
  PenTool,
  Target,
  BarChart3,
  Zap,
  RotateCw,
  AlertCircle,
  Calculator as CalculatorIcon,
  X,
  Lock,
  Crown,
  Eye
} from 'lucide-react'

// ============================================================
// ✅ FIXED: LOAD ALL QUESTIONS USING VITE GLOB (eager: true)
// ============================================================

// Auto-import ALL question files with eager: true
// This loads everything synchronously at build time
const questionModules = import.meta.glob('../data/questions/**/*.js', { eager: true })

// Build a map of file paths to question arrays
const questionMap = {}
Object.entries(questionModules).forEach(([path, module]) => {
  // Extract the relative path from the full path
  const relativePath = path.replace('../data/questions/', '')
  if (module.default && Array.isArray(module.default)) {
    questionMap[relativePath] = module.default
    console.log(`✅ Loaded: ${relativePath} (${module.default.length} questions)`)
  }
})

console.log(`📚 Total question files loaded: ${Object.keys(questionMap).length}`)

// ============================================================
// Fallback questions generator
// ============================================================
const generateFallbackQuestions = (subjectName, count = 30) => {
  const qs = []
  const difficulties = ['easy', 'medium', 'hard']
  const topics = ['General', 'Basics', 'Advanced']
  
  const templates = {
    'Mathematics': [
      { q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
      { q: 'What is 5 × 5?', options: ['20', '25', '30', '35'], answer: '25' },
      { q: 'What is the square root of 16?', options: ['2', '3', '4', '5'], answer: '4' },
      { q: 'What is 10% of 200?', options: ['10', '15', '20', '25'], answer: '20' },
      { q: 'What is 3 + 7?', options: ['8', '9', '10', '11'], answer: '10' },
      { q: 'What is 6 × 6?', options: ['30', '32', '34', '36'], answer: '36' },
      { q: 'What is 100 ÷ 4?', options: ['20', '25', '30', '35'], answer: '25' },
      { q: 'What is 15 + 27?', options: ['40', '42', '44', '46'], answer: '42' },
    ],
    'English Language': [
      { q: 'What is the past tense of "run"?', options: ['run', 'ran', 'runned', 'running'], answer: 'ran' },
      { q: 'What is a noun?', options: ['Action word', 'Naming word', 'Describing word', 'Connecting word'], answer: 'Naming word' },
      { q: 'What is the plural of "child"?', options: ['childs', 'children', 'childrens', 'childes'], answer: 'children' },
      { q: 'What is a verb?', options: ['Action word', 'Naming word', 'Describing word', 'Connecting word'], answer: 'Action word' },
      { q: 'What is an adjective?', options: ['Action word', 'Naming word', 'Describing word', 'Connecting word'], answer: 'Describing word' },
      { q: 'What is the past tense of "go"?', options: ['go', 'went', 'gone', 'going'], answer: 'went' },
      { q: 'What is a conjunction?', options: ['Action word', 'Naming word', 'Describing word', 'Connecting word'], answer: 'Connecting word' },
    ]
  }
  
  const subjectTemplates = templates[subjectName] || [
    { q: `${subjectName} practice question`, options: ['Option A', 'Option B', 'Option C', 'Option D'], answer: 'Option A' }
  ]
  
  for (let i = 0; i < Math.min(count, 30); i++) {
    const template = subjectTemplates[i % subjectTemplates.length]
    const diff = difficulties[i % 3]
    const topic = topics[i % 3]
    
    qs.push({
      id: `fb_${subjectName.replace(/\s/g, '_')}_${i+1}`,
      question: template.q || `${subjectName} practice question ${i+1}`,
      options: template.options || ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: template.answer || 'Option A',
      topic: topic,
      difficulty: diff,
      subject: subjectName,
      explanation: `The correct answer is ${template.answer || 'Option A'}.`
    })
  }
  return qs
}

// ============================================================
// Load questions for a topic (uses questionMap directly)
// ============================================================
const loadQuestionsForTopic = (subjectLabel, topicLabel, count = 10) => {
  try {
    console.log(`🔍 Loading questions for: ${subjectLabel} - ${topicLabel}`)
    
    // Find subject in index
    const subjectEntry = questionIndex.find(
      entry => entry.subject === subjectLabel
    )
    if (!subjectEntry) {
      console.warn(`❌ Subject "${subjectLabel}" not found in index`)
      return generateFallbackQuestions(subjectLabel, count)
    }

    // Find topic in subject
    const topicEntry = subjectEntry.topics.find(t => t.name === topicLabel)
    if (!topicEntry) {
      console.warn(`❌ Topic "${topicLabel}" not found in ${subjectLabel}`)
      return generateFallbackQuestions(subjectLabel, count)
    }

    const filePath = topicEntry.file
    console.log(`📁 Looking for file: ${filePath}`)
    
    // ✅ Use the questionMap directly (already loaded)
    let questions = questionMap[filePath]
    
    if (questions && Array.isArray(questions) && questions.length > 0) {
      console.log(`✅ Found ${questions.length} questions for ${filePath}`)
      
      // Filter by topic if needed
      const filtered = questions.filter(q => q.topic === topicLabel)
      console.log(`📊 Found ${filtered.length} questions for topic "${topicLabel}"`)
      
      const questionsToUse = filtered.length > 0 ? filtered : questions
      const shuffled = shuffleArray([...questionsToUse])
      return shuffled.slice(0, Math.min(count, shuffled.length))
    }

    // If not found, generate fallback
    console.warn(`❌ No questions found for ${subjectLabel} - ${topicLabel}, using fallback`)
    return generateFallbackQuestions(subjectLabel, count)
    
  } catch (error) {
    console.error('❌ Failed to load questions:', error)
    return generateFallbackQuestions(subjectLabel, count)
  }
}

// ============================================================
// Load all questions for a subject
// ============================================================
const loadAllQuestionsForSubject = (subjectLabel, count = 30) => {
  try {
    console.log(`🔍 Loading all questions for: ${subjectLabel}`)
    
    const subjectEntry = questionIndex.find(
      entry => entry.subject === subjectLabel
    )
    if (!subjectEntry) {
      console.warn(`❌ Subject "${subjectLabel}" not found in index`)
      return generateFallbackQuestions(subjectLabel, count)
    }

    const allQuestions = []

    for (const topic of subjectEntry.topics) {
      const filePath = topic.file
      console.log(`📁 Loading topic: ${topic.name} from ${filePath}`)
      
      // ✅ Use the questionMap directly
      const questions = questionMap[filePath]
      
      if (questions && Array.isArray(questions)) {
        console.log(`✅ Found ${questions.length} questions in questionMap`)
        allQuestions.push(...questions)
      } else {
        console.warn(`⚠️ No questions found for: ${filePath}`)
      }
    }

    if (allQuestions.length === 0) {
      console.warn(`❌ No questions found for ${subjectLabel}`)
      return generateFallbackQuestions(subjectLabel, count)
    }

    console.log(`✅ Total questions loaded: ${allQuestions.length}`)
    const shuffled = shuffleArray(allQuestions)
    return shuffled.slice(0, Math.min(count, shuffled.length))
    
  } catch (error) {
    console.error('❌ Failed to load questions:', error)
    return generateFallbackQuestions(subjectLabel, count)
  }
}

// Timer options
const TIMER_OPTIONS = [
  { value: 600, label: '10 min' },
  { value: 1200, label: '20 min' },
  { value: 1800, label: '30 min' },
]

// ============================================================
// CBT PRACTICE PAGE
// ============================================================
export function CBTPracticePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  const { updateProgress } = useProgress()
  
  const { subject: initialSubject, topic: initialTopic } = location.state || {}

  const [subject, setSubject] = useState(initialSubject || '')
  const [topic, setTopic] = useState(initialTopic || '')
  const [timed, setTimed] = useState(true)
  const [selectedTimer, setSelectedTimer] = useState(600)
  const [timeLimit, setTimeLimit] = useState(600)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit)
  const [loading, setLoading] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [loadError, setLoadError] = useState(null)

  // --- Subscription state for subject filtering ---
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

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

  // Get filtered subjects with their actual topics from index
  const getFilteredSubjects = () => {
    // Get all subjects from the index
    const allSubjects = questionIndex.map(entry => ({
      key: entry.subject.toLowerCase().replace(/\s+/g, '_'),
      label: entry.subject,
      icon: getIconForSubject(entry.subject),
      topics: entry.topics.map(t => t.name) // ✅ Gets actual topic names
    }))

    if (!subscription?.isActive) {
      return allSubjects.filter(s => 
        s.label === 'Mathematics' || s.label === 'English Language'
      )
    }
    return allSubjects
  }

  // Helper function for icons
  const getIconForSubject = (subject) => {
    const icons = {
      'Mathematics': '📐',
      'English Language': '📝',
      'Physics': '⚛️',
      'Chemistry': '🧪',
      'Biology': '🧬',
      'Agricultural Science': '🌾',
      'Environmental Science': '🌍',
      'Computer Science': '💻',
      'Information Technology': '💻',
      'Further Mathematics': '📐',
      'Geography': '🌍',
      'Technical Drawing': '✏️',
      'Business Studies': '💼',
      'Commerce': '🏪',
      'Economics': '📈',
      'Entrepreneurship': '🚀',
      'Finance': '💰',
      'Marketing': '📣',
      'Accounting': '📊',
      'Civics': '🏛️',
      'Government': '🏛️',
      'History': '📜',
      'Psychology': '🧠',
      'Sociology': '👥',
      'Literature': '📖',
      'Philosophy': '🤔',
      'Religious Studies': '⛪',
      'Ethics': '⚖️',
      'French': '🇫🇷',
      'Spanish': '🇪🇸',
      'German': '🇩🇪',
      'Arabic': '🇸🇦',
      'Chinese': '🇨🇳',
      'Portuguese': '🇵🇹',
      'Yoruba': '🇳🇬',
      'Igbo': '🇳🇬',
      'Hausa': '🇳🇬',
      'Swahili': '🇰🇪',
      'Fine Arts': '🎨',
      'Music': '🎵',
      'Drama': '🎭',
      'Creative Arts': '🎨',
      'Health Science': '🏥',
      'Physical Education': '🏃',
      'Home Economics': '🏠',
      'Food and Nutrition': '🍎'
    }
    return icons[subject] || '📚'
  }

  const filteredSubjects = getFilteredSubjects()
  const isFreeUser = !subscription?.isActive

  // Timer
  useEffect(() => {
    if (!started || results || !timed || submitting) return
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
  }, [started, results, timed, submitting])

  // Auto-start when coming from Topic Mode
  useEffect(() => {
    if (initialSubject && initialTopic && !started && !loading) {
      setSubject(initialSubject)
      setTopic(initialTopic)
      const timer = setTimeout(() => {
        handleStart()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [initialSubject, initialTopic, started, loading])

  const handleStart = () => {
    if (!subject) { 
      alert('Please select a subject')
      return 
    }
    
    setLoading(true)
    setLoadError(null)
    
    try {
      const questionCount = topic ? 10 : 30
      let qs
      
      if (topic) {
        qs = loadQuestionsForTopic(subject, topic, questionCount)
      } else {
        qs = loadAllQuestionsForSubject(subject, questionCount)
      }
      
      // Ensure we have questions
      if (!qs || qs.length === 0) {
        setLoadError('No questions available for this topic. Please try another topic.')
        setLoading(false)
        return
      }
      
      setQuestions(qs)
      setStarted(true)
      setTimeRemaining(timeLimit)
      setCurrentIndex(0)
      setAnswers({})
      setResults(null)
      setShowReview(false)
      setXpEarned(0)
    } catch (error) {
      console.error('Failed to load questions:', error)
      setLoadError('Failed to load questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (questionId, optionText) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionText }))
  }

  const handleSubmit = async () => {
    if (submitting) return
    const answered = Object.keys(answers).length
    if (answered < questions.length) {
      if (!confirm(`You've answered ${answered}/${questions.length}. Submit anyway?`)) return
    }

    setSubmitting(true)

    try {
      const timeTaken = timeLimit - timeRemaining
      const scoreData = calculateScore(questions, answers)
      const xp = calculateXP(scoreData, Math.floor(timeTaken / 10))

      const result = updateProgress({
        type: 'practice',
        subject: subject,
        topic: topic || 'All Topics',
        questions: questions,
        answers: answers,
        timeTaken: timeTaken,
        mode: timed ? `Timed (${selectedTimer/60}min)` : 'Untimed'
      })

      setResults(scoreData)
      setXpEarned(result.xp)
      setShowReview(true)

    } catch (error) {
      console.error('Failed to submit:', error)
      alert('Failed to submit. Please try again.')
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
    setTimeRemaining(timeLimit)
    setShowReview(false)
    setXpEarned(0)
    setLoadError(null)
  }

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // ===== RESULTS WITH QUESTION REVIEW =====
  if (showReview && results) {
    return (
      <QuestionReview
        questions={questions}
        answers={answers}
        subject={subject}
        topic={topic || 'All Topics'}
        mode={timed ? `Timed (${selectedTimer/60}min)` : 'Untimed'}
        xpEarned={xpEarned}
        onRetry={handleRetry}
        onClose={() => navigate('/dashboard')}
        showBookmark={true}
        showRetry={true}
        showHome={true}
      />
    )
  }

  // ===== RESULTS SUMMARY VIEW (before review) =====
  if (results) {
    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Results</h1>
              <p className="text-muted">{subject} Practice</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Dashboard
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
          <div style={{ marginTop: 'var(--space-3)' }}>
            <span className="badge badge-primary flex-center" style={{ gap: 'var(--space-1)' }}>
              <Zap style={{ width: '16px', height: '16px' }} /> +{xpEarned} XP
            </span>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-success)' }}>{results.correct}</div>
            <div className="text-muted">Correct</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-danger)' }}>{results.wrong}</div>
            <div className="text-muted">Wrong</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-warning)' }}>{results.skipped}</div>
            <div className="text-muted">Skipped</div>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <button 
            className="btn btn-primary btn-lg flex-1 flex-center" 
            onClick={() => setShowReview(true)}
          >
            <Eye style={{ width: '20px', height: '20px' }} /> Review Questions
          </button>
          <button className="btn btn-primary btn-lg flex-1 flex-center" onClick={handleRetry}>
            <RotateCw style={{ width: '16px', height: '16px' }} /> Practice Again
          </button>
          <button className="btn btn-outline btn-lg flex-1 flex-center" onClick={() => navigate('/dashboard')}>
            Close
          </button>
        </div>
      </div>
    )
  }

  // ===== QUESTION VIEW =====
  if (started && questions.length > 0) {
    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length
    const letters = ['A', 'B', 'C', 'D']

    // Check if using fallback questions
    const isFallback = currentQuestion?.id?.startsWith('fb_')

    return (
      <div className="container section">
        {/* Header */}
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <PenTool style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">CBT Practice</h1>
              <p className="text-muted">{subject}</p>
              {isFallback && (
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-warning)' }}>
                  ⚠️ Using practice questions (real questions not found)
                </span>
              )}
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
            {timed && (
              <div className="flex-center" style={{ 
                padding: 'var(--space-2) var(--space-4)', 
                borderRadius: 'var(--radius-xl)',
                background: timeRemaining < 60 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
                color: timeRemaining < 60 ? 'var(--color-danger)' : 'var(--color-primary)',
                fontWeight: '700',
                fontSize: 'var(--font-size-lg)',
                fontFamily: 'var(--font-mono)',
                animation: timeRemaining < 60 ? 'pulse 1s infinite' : 'none'
              }}>
                <Clock style={{ width: '16px', height: '16px', marginRight: 'var(--space-2)' }} />
                {formatTimer(timeRemaining)}
              </div>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
          <span className="text-sm" style={{ fontWeight: '600' }}>Question {currentIndex + 1} of {total}</span>
          <span className="text-sm text-muted">{answeredCount}/{total} answered</span>
        </div>
        <div className="progress" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
        </div>

        {/* Question */}
        {currentQuestion && (
          <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <span className={`badge ${currentQuestion.difficulty === 'easy' ? 'badge-success' : currentQuestion.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`}>
                  {currentQuestion.difficulty?.toUpperCase() || 'MEDIUM'}
                </span>
                <span className="text-muted text-sm">{currentQuestion.topic || 'General'}</span>
              </div>
              <BookmarkButton question={currentQuestion} size="md" />
            </div>
            <div className="h3" style={{ marginBottom: 'var(--space-6)' }}>{currentQuestion.question}</div>
            <div className="stack">
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

        {/* Navigation */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
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
            <button className="btn btn-success" onClick={handleSubmit} disabled={submitting}>
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          ) : (
            <button className="btn btn-outline" onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}>
              Next →
            </button>
          )}
        </div>

        {/* Palette */}
        <div className="card">
          <div className="text-sm" style={{ fontWeight: '600', marginBottom: 'var(--space-3)' }}>Question Palette</div>
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
    )
  }

  // ===== START VIEW =====
  return (
    <div className="container section">
      {/* Header */}
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <PenTool style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">CBT Practice</h1>
            <p className="text-muted">Practice questions from any subject</p>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
          <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
        </button>
      </div>

      {/* Setup */}
      <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
        {/* Subject Selection — with filtering */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <label className="label">Select Subject</label>
          {subLoading ? (
            <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
              <div className="spinner spinner-sm"></div>
            </div>
          ) : (
            <>
              <select 
                className="select" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Choose a subject...</option>
                {filteredSubjects.map((s) => (
                  <option key={s.key} value={s.label}>
                    {s.icon} {s.label}
                  </option>
                ))}
              </select>

              {/* Free user warning */}
              {isFreeUser && (
                <div style={{ 
                  marginTop: 'var(--space-2)', 
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius)',
                  background: 'var(--color-warning-light)',
                  color: 'var(--color-warning)',
                  fontSize: 'var(--font-size-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <Lock style={{ width: '14px', height: '14px' }} />
                  <span>Free users can only practice <strong>Mathematics</strong> and <strong>English Language</strong>. <a href="/settings" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Subscribe</a> for all subjects.</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Timer Options */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <label className="label" style={{ marginBottom: 'var(--space-2)' }}>Timer</label>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {TIMER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setSelectedTimer(opt.value); setTimeLimit(opt.value) }}
                className={`btn ${selectedTimer === opt.value ? 'btn-primary' : 'btn-outline'}`}
                style={{ flex: 1, minWidth: '80px' }}
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
                <Clock style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: '600' }}>Timed</span>
              </div>
            </label>
            <label className={`flex-1 card card-hover flex-center ${!timed ? 'success-card' : ''}`} style={{ cursor: 'pointer', padding: 'var(--space-4)' }}>
              <input type="radio" checked={!timed} onChange={() => setTimed(false)} style={{ display: 'none' }} />
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <BookOpen style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: '600' }}>Untimed</span>
              </div>
            </label>
          </div>
        </div>

        {/* Error Display */}
        {loadError && (
          <div className="card" style={{ 
            marginBottom: 'var(--space-4)', 
            padding: 'var(--space-4)',
            background: 'var(--color-danger-light)',
            border: '1px solid var(--color-danger)'
          }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-danger)' }}>
              <AlertCircle style={{ width: '20px', height: '20px' }} />
              <span>{loadError}</span>
            </div>
          </div>
        )}

        <button 
          className={`btn btn-primary btn-xl flex-center`} 
          onClick={handleStart}
          disabled={!subject || loading}
          style={{ 
            width: '100%',
            opacity: !subject || loading ? '0.5' : '1',
            cursor: !subject || loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Loading...</>
          ) : (
            <><PlayCircle style={{ width: '20px', height: '20px' }} /> Start Practice</>
          )}
        </button>

        {!subject && (
          <p className="flex-center" style={{ marginTop: 'var(--space-4)', color: 'var(--color-warning)', gap: 'var(--space-1)' }}>
            <AlertCircle style={{ width: '16px', height: '16px' }} /> Please select a subject to continue
          </p>
        )}
      </div>
    </div>
  )
}

// ============================================================
// RESULTS PAGE — RESTRICTED FOR FREE USERS
// ============================================================
export function ResultsPage() {
  const navigate = useNavigate()
  const [sessions, setSessions] = useState([])

  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

  useEffect(() => {
    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (error) {
        setSubscription({ isActive: false })
      } finally {
        setSubLoading(false)
      }
    }
    loadSubscription()

    const saved = localStorage.getItem('hyelearner_sessions')
    if (saved) setSessions(JSON.parse(saved))
  }, [])

  const isFreeUser = !subscription?.isActive

  if (subLoading) {
    return (
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <div className="spinner spinner-lg"></div>
      </div>
    )
  }

  if (isFreeUser) {
    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Results</h1>
              <p className="text-muted">View your past exam performance</p>
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
          <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Results are for Subscribers</h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
            Track your performance and see your progress over time.  
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
    )
  }

  if (sessions.length === 0) {
    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Results</h1>
              <p className="text-muted">View your past exam performance</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        <div className="empty-card">
          <div className="icon">📊</div>
          <div className="title">No Results Yet</div>
          <div className="desc">Complete a practice session to see your results here</div>
          <div className="action">
            <button className="btn btn-primary" onClick={() => navigate('/practice')}>Start Practicing</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container section">
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Results</h1>
            <p className="text-muted">View your past exam performance</p>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
          <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
        </button>
      </div>

      <div className="stack">
        {sessions.slice().reverse().map((session, i) => (
          <div key={i} className="card card-hover flex-between">
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{ 
                width: '48px', height: '48px', borderRadius: 'var(--radius-xl)',
                background: session.accuracy >= 70 ? 'var(--color-success-light)' : session.accuracy >= 50 ? 'var(--color-warning-light)' : 'var(--color-danger-light)'
              }}>
                <BarChart3 style={{ 
                  width: '24px', height: '24px',
                  color: session.accuracy >= 70 ? 'var(--color-success)' : session.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'
                }} />
              </div>
              <div>
                <div className="h4">{session.subject}</div>
                <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  <span>{formatDate(session.date)}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-border)' }} />
                  <span>{session.mode || 'Practice'}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="h3">{session.score}/{session.total}</div>
              <div className="text-sm" style={{ 
                fontWeight: '700',
                color: session.accuracy >= 70 ? 'var(--color-success)' : session.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'
              }}>{session.accuracy}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// TOPIC MODE PAGE — FIXED: No mastery display, just topic selection
// ============================================================
export function TopicModePage() {
  const navigate = useNavigate()
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(true)

  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

  useEffect(() => {
    setLoading(false)

    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (error) {
        setSubscription({ isActive: false })
      } finally {
        setSubLoading(false)
      }
    }
    loadSubscription()
  }, [])

  // Helper function for icons
  const getIconForSubject = (subject) => {
    const icons = {
      'Mathematics': '📐',
      'English Language': '📝',
      'Physics': '⚛️',
      'Chemistry': '🧪',
      'Biology': '🧬',
      'Agricultural Science': '🌾',
      'Environmental Science': '🌍',
      'Computer Science': '💻',
      'Information Technology': '💻',
      'Further Mathematics': '📐',
      'Geography': '🌍',
      'Technical Drawing': '✏️',
      'Business Studies': '💼',
      'Commerce': '🏪',
      'Economics': '📈',
      'Entrepreneurship': '🚀',
      'Finance': '💰',
      'Marketing': '📣',
      'Accounting': '📊',
      'Civics': '🏛️',
      'Government': '🏛️',
      'History': '📜',
      'Psychology': '🧠',
      'Sociology': '👥',
      'Literature': '📖',
      'Philosophy': '🤔',
      'Religious Studies': '⛪',
      'Ethics': '⚖️',
      'French': '🇫🇷',
      'Spanish': '🇪🇸',
      'German': '🇩🇪',
      'Arabic': '🇸🇦',
      'Chinese': '🇨🇳',
      'Portuguese': '🇵🇹',
      'Yoruba': '🇳🇬',
      'Igbo': '🇳🇬',
      'Hausa': '🇳🇬',
      'Swahili': '🇰🇪',
      'Fine Arts': '🎨',
      'Music': '🎵',
      'Drama': '🎭',
      'Creative Arts': '🎨',
      'Health Science': '🏥',
      'Physical Education': '🏃',
      'Home Economics': '🏠',
      'Food and Nutrition': '🍎'
    }
    return icons[subject] || '📚'
  }

  // ✅ Get topics from the question index directly
  const getTopicsForSubject = (subjectLabel) => {
    if (!subjectLabel) return []
    
    // Find subject in the index
    const subjectEntry = questionIndex.find(
      entry => entry.subject === subjectLabel
    )
    
    if (!subjectEntry) return []
    
    // Return actual topic names
    return subjectEntry.topics.map(t => t.name)
  }

  const handlePractice = () => {
    if (!subject || !topic) return
    navigate('/practice', { state: { subject, topic } })
  }

  const isFreeUser = !subscription?.isActive

  // Get filtered subjects with their actual topics from index
  const getFilteredSubjects = () => {
    const allSubjects = questionIndex.map(entry => ({
      key: entry.subject.toLowerCase().replace(/\s+/g, '_'),
      label: entry.subject,
      icon: getIconForSubject(entry.subject),
      topics: entry.topics.map(t => t.name)
    }))

    if (isFreeUser) {
      return allSubjects.filter(s => 
        s.label === 'Mathematics' || s.label === 'English Language'
      )
    }
    return allSubjects
  }

  const filteredSubjects = getFilteredSubjects()

  if (loading || subLoading) {
    return (
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <div className="spinner spinner-lg"></div>
      </div>
    )
  }

  if (isFreeUser) {
    return (
      <div className="container section">
        <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Target style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Topic Mode</h1>
              <p className="text-muted">Master one topic at a time</p>
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
          <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Topic Mode is for Subscribers</h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
            Focus on specific topics and track your mastery per topic.  
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
    )
  }

  return (
    <div className="container section">
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <Target style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Topic Mode</h1>
            <p className="text-muted">Master one topic at a time</p>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
          <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
        </button>
      </div>

      <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
        <div className="grid-2" style={{ marginBottom: 'var(--space-6)' }}>
          <div>
            <label className="label">Subject</label>
            <select 
              className="select" 
              value={subject} 
              onChange={(e) => { 
                setSubject(e.target.value)
                setTopic('') // Reset topic when subject changes
              }}
            >
              <option value="">Choose subject</option>
              {filteredSubjects.map((s) => (
                <option key={s.key} value={s.label}>
                  {s.icon} {s.label}
                </option>
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
              style={{ opacity: !subject ? '0.5' : '1' }}
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
            <button className="btn btn-primary btn-lg flex-center" style={{ width: '100%' }} onClick={handlePractice}>
              <Target style={{ width: '20px', height: '20px' }} /> Practice This Topic
            </button>
          </div>
        )}

        {subject && !topic && (
          <div className="warning-card flex-center" style={{ gap: 'var(--space-2)' }}>
            <AlertCircle style={{ width: '20px', height: '20px' }} />
            <span>Select a topic to practice</span>
          </div>
        )}
      </div>
    </div>
  )
}