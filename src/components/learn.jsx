// ============================================================
// HYELEARNER: FOUNDATION — LEARN COMPONENTS
// Core learning engine: CBT, Topic Mode, Question Renderer
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useAuth, useCBT, useTimer, useProgress } from '../hooks'
import { storage } from '../storage'
import { 
  calculateScore, 
  calculateXP, 
  getLevel, 
  getNextLevelXP,
  formatTime,
  formatDate,
  shuffleArray,
  getWordCount,
  getReadingTime,
  calculateMastery,
  getMasteryStatus,
  truncate
} from '../utils'
import { 
  SUBJECTS, 
  TOPICS, 
  DIFFICULTIES,
  MASTERY_THRESHOLDS,
  HEATMAP_COLORS,
  ROUTES,
  THEME_COLORS,
  BADGE_DEFINITIONS
} from '../constants'
import { BookmarkButton } from './BookmarkButton'
import { QuestionReview } from './QuestionReview'
import {
  BookOpen,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  ArrowLeft,
  ArrowRight,
  Target,
  Zap,
  Sparkles,
  BarChart3,
  TrendingUp,
  Users,
  Crown,
  Medal,
  Flame,
  Brain,
  Gamepad2,
  Trophy,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Star,
  BookMarked,
  Lightbulb,
  Play,
  RotateCw,
  Home,
  ChevronLeft,
  ChevronRight,
  ListChecks,
  ClipboardCheck,
  Info,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  FileText,
  Printer,
  Share2,
  Link,
  AlertTriangle
} from 'lucide-react'

// ============================================================
// QUESTION RENDERER — Added Bookmark Button
// ============================================================
export function QuestionRenderer({ 
  question, 
  selected, 
  onSelect, 
  showCorrect = false,
  disabled = false,
  showExplanation = false,
  showBookmark = true,
  index = 0
}) {
  const letters = ['A', 'B', 'C', 'D']

  if (!question) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/60 p-8 text-center text-slate-500 shadow-sm">
        No question available
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-6">
      {/* Question Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-500">{question.topic || 'General'}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            question.difficulty === 'easy' ? 'bg-emerald-50 text-emerald-600' :
            question.difficulty === 'hard' ? 'bg-rose-50 text-rose-600' :
            'bg-amber-50 text-amber-600'
          }`}>
            {question.difficulty || 'Medium'}
          </span>
        </div>
        {showBookmark && (
          <BookmarkButton question={question} size="md" />
        )}
      </div>

      {/* Question Text */}
      <div className="text-lg font-semibold text-slate-800">{question.question}</div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const letter = letters[index]
          const isSelected = selected === option
          const isCorrect = showCorrect && question.answer === option
          const isWrong = showCorrect && isSelected && question.answer !== option

          return (
            <button
              key={index}
              onClick={() => !disabled && onSelect(option)}
              disabled={disabled}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' :
                isWrong ? 'border-rose-500 bg-rose-50 text-rose-700' :
                isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-700' :
                'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
              } ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                isCorrect ? 'bg-emerald-200 text-emerald-700' :
                isWrong ? 'bg-rose-200 text-rose-700' :
                isSelected ? 'bg-indigo-200 text-indigo-700' :
                'bg-slate-100 text-slate-600'
              }`}>
                {letter}
              </span>
              <span className="flex-1">{option}</span>
              {showCorrect && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
              {showCorrect && isWrong && <XCircle className="w-5 h-5 text-rose-600" />}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showExplanation && question.explanation && (
        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-200/60">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-sm text-slate-800">Explanation</span>
          </div>
          <p className="text-sm text-slate-600">{question.explanation}</p>
          {question.wrongExplanations && (
            <div className="mt-2 text-sm text-slate-600">
              <div className="font-medium text-slate-700">Why other options are wrong:</div>
              {Object.entries(question.wrongExplanations).map(([key, value]) => (
                <div key={key} className="pl-4 text-rose-600">
                  • <span className="font-medium text-slate-700">{key}:</span> {value}
                </div>
              ))}
            </div>
          )}
          {question.shortcut && (
            <div className="mt-2 p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 text-sm">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-amber-600 mt-0.5" />
                <div>
                  <span className="font-medium text-slate-700">Shortcut:</span>
                  <span className="text-slate-600"> {question.shortcut}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ============================================================
// CBT PRACTICE ENGINE — Uses useProgress + QuestionReview
// ============================================================
export function CBTEngine({ 
  questions, 
  onComplete, 
  onClose,
  timeLimit = 600,
  timed = true,
  subject = 'General',
  topic = 'All Topics',
  mode = 'Practice'
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [xpEarned, setXpEarned] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit)
  const [showReview, setShowReview] = useState(false)
  const { updateProgress } = useProgress()
  const [updating, setUpdating] = useState(false)

  const total = questions.length

  // Timer
  useEffect(() => {
    if (!timed || submitted) return
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
  }, [timed, submitted])

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = async () => {
    if (updating) return
    const answered = Object.keys(answers).length
    if (answered < total) {
      if (!confirm(`You've answered ${answered}/${total}. Submit anyway?`)) return
    }

    setUpdating(true)

    try {
      // Calculate score
      const scoreData = calculateScore(questions, answers)
      const timeTaken = timeLimit - timeRemaining
      const xp = calculateXP(scoreData, Math.floor(timeTaken / 10))
      
      setXpEarned(xp)
      setResults(scoreData)

      // Update progress via central hook
      const result = updateProgress({
        type: 'practice',
        subject: subject,
        topic: topic,
        questions: questions,
        answers: answers,
        timeTaken: timeTaken,
        mode: mode
      })

      setXpEarned(result.xp)
      setResults(result.scoreData)
      setSubmitted(true)
      setShowReview(true)

      if (onComplete) {
        onComplete({
          ...result.scoreData,
          xp: result.xp,
          answers,
          timeTaken: timeTaken,
        })
      }
    } catch (error) {
      console.error('Failed to submit:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setUpdating(false)
    }
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setAnswers({})
    setSubmitted(false)
    setResults(null)
    setXpEarned(0)
    setTimeRemaining(timeLimit)
    setShowReview(false)
  }

  // Show QuestionReview after submission
  if (submitted && showReview && results) {
    return (
      <QuestionReview
        questions={questions}
        answers={answers}
        subject={subject}
        topic={topic}
        mode={mode}
        xpEarned={xpEarned}
        onRetry={handleRetry}
        onClose={onClose}
        showBookmark={true}
        showRetry={true}
        showHome={true}
      />
    )
  }

  // Still showing summary
  if (submitted && results && !showReview) {
    return (
      <div className="space-y-6">
        {/* Score Card */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-8 text-center shadow-sm">
          <div className={`text-6xl font-bold ${results.accuracy >= 70 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {results.accuracy}%
          </div>
          <div className="text-lg font-semibold text-slate-800 mt-2">{results.score}/{results.total} correct</div>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-slate-600">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="font-medium">+{xpEarned} XP earned</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/60 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">{results.correct}</div>
            <div className="text-sm text-slate-500">Correct</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/60 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-rose-600">{results.wrong}</div>
            <div className="text-sm text-slate-500">Wrong</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/60 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{results.skipped}</div>
            <div className="text-sm text-slate-500">Skipped</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/60 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">{formatTime(timeLimit - timeRemaining)}</div>
            <div className="text-sm text-slate-500">Time Taken</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowReview(true)}
            className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-sm shadow-indigo-200"
          >
            <Eye className="w-4 h-4" />
            Review Questions
          </button>
          <button
            onClick={handleRetry}
            className="flex-1 py-3 border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition"
          >
            <RotateCw className="w-4 h-4" />
            Retry
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm font-semibold text-slate-700">Question {currentIndex + 1} of {total}</span>
          <span className="text-sm text-slate-500 ml-3">
            {answeredCount}/{total} answered
          </span>
        </div>
        {timed && (
          <div className={`text-lg font-mono font-bold ${timeRemaining < 60 ? 'text-rose-600 animate-pulse' : 'text-indigo-600'}`}>
            <Clock className="w-4 h-4 inline mr-1.5" />
            {formatTime(timeRemaining)}
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <QuestionRenderer
        question={currentQuestion}
        selected={answers[currentQuestion.id] || null}
        onSelect={(answer) => handleAnswer(currentQuestion.id, answer)}
        showCorrect={false}
        disabled={submitted || updating}
        showBookmark={true}
        index={currentIndex}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 border border-slate-200 rounded-xl disabled:opacity-40 hover:bg-slate-50 transition text-sm font-medium text-slate-600"
        >
          Previous
        </button>
        <span className="text-sm text-slate-500 font-medium">
          {currentIndex + 1} / {total}
        </span>
        {currentIndex === total - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={updating}
            className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition flex items-center gap-2 shadow-sm shadow-emerald-200 disabled:opacity-50"
          >
            {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
            {updating ? 'Submitting...' : 'Submit'}
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}
            className="px-5 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-600"
          >
            Next
          </button>
        )}
      </div>

      {/* Palette */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
        {questions.map((q, i) => {
          const isAnswered = !!answers[q.id]
          const isCurrent = i === currentIndex
          return (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-9 h-9 rounded-xl text-sm font-medium transition ${
                isCurrent 
                  ? 'ring-2 ring-indigo-600 bg-indigo-600 text-white' 
                  : isAnswered 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================
// TOPIC MODE ENGINE — Uses central storage for mastery
// ============================================================
export function TopicModeEngine({ 
  subject, 
  topic, 
  questions, 
  onComplete,
  onClose 
}) {
  const [mastery, setMastery] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [sessionHistory, setSessionHistory] = useState([])
  const { updateProgress } = useProgress()

  // Load mastery from CENTRAL storage on mount
  useEffect(() => {
    const allMastery = storage.getMastery()
    const topicData = allMastery[topic]
    if (topicData) {
      setMastery(topicData.accuracy || 0)
      setAttempts(topicData.attempts || 0)
    }
    
    const savedHistory = localStorage.getItem(`hyelearner_mastery_history_${subject}_${topic}`)
    if (savedHistory) {
      try {
        setSessionHistory(JSON.parse(savedHistory))
      } catch (e) {}
    }
  }, [subject, topic])

  const handleSessionComplete = (results) => {
    const newAttempts = attempts + 1
    const newCorrect = correct + results.correct
    const newMastery = calculateMastery(newCorrect, newAttempts * results.total)
    
    setMastery(newMastery)
    setAttempts(newAttempts)
    setCorrect(newCorrect)
    
    const history = [...sessionHistory, {
      date: new Date().toISOString(),
      score: results.score,
      total: results.total,
      accuracy: results.accuracy,
      xp: results.xp,
    }]
    setSessionHistory(history)

    storage.updateMastery(topic, newMastery, subject)
    localStorage.setItem(`hyelearner_mastery_history_${subject}_${topic}`, JSON.stringify(history))

    if (onComplete) {
      onComplete({ mastery: newMastery, attempts: newAttempts, correct: newCorrect })
    }
  }

  const status = getMasteryStatus(mastery)

  return (
    <div className="space-y-6">
      {/* Mastery Card */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl text-slate-800">{topic}</h3>
            <p className="text-sm text-slate-500">{subject}</p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${status.color === 'text-success' ? 'text-emerald-600' : status.color === 'text-warning' ? 'text-amber-600' : 'text-rose-600'}`}>
              {mastery}%
            </div>
            <div className="text-sm text-slate-500">{status.label}</div>
          </div>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mt-3">
          <div 
            className={`h-full rounded-full transition-all duration-700 ${
              status.color === 'text-success' ? 'bg-emerald-500' : 
              status.color === 'text-warning' ? 'bg-amber-500' : 'bg-rose-500'
            }`}
            style={{ width: `${mastery}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-slate-500 mt-3 font-medium">
          <span>Attempts: {attempts}</span>
          <span>Correct: {correct}</span>
          <span>Accuracy: {attempts > 0 ? Math.round((correct / (attempts * 20)) * 100) : 0}%</span>
        </div>
      </div>

      {/* Practice Session */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          Practice Session
        </div>
        {questions.length > 0 ? (
          <CBTEngine
            questions={questions}
            onComplete={handleSessionComplete}
            onClose={onClose}
            timeLimit={600}
            timed={true}
            subject={subject}
            topic={topic}
            mode="Topic Mode"
          />
        ) : (
          <div className="text-center py-8 text-slate-500">
            <p>No questions available for this topic yet.</p>
          </div>
        )}
      </div>

      {/* Session History */}
      {sessionHistory.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <div className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            Session History
          </div>
          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2">
            {sessionHistory.slice().reverse().slice(0, 5).map((session, i) => (
              <div key={i} className="flex justify-between items-center text-sm p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-medium">{formatDate(session.date, 'short')}</span>
                <span className="font-semibold text-slate-700">{session.score}/{session.total}</span>
                <span className={session.accuracy >= 70 ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                  {session.accuracy}%
                </span>
                <span className="text-indigo-600 font-semibold">+{session.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================
// TOPIC SELECTOR — Reads mastery from central storage
// ============================================================
export function TopicSelector({ 
  subject, 
  onSelect,
  selected,
  topics 
}) {
  const subjectData = SUBJECTS[subject]

  if (!subject) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/60 p-8 text-center text-slate-500 shadow-sm">
        <p>Select a subject to view topics.</p>
      </div>
    )
  }

  const topicList = topics || subjectData?.topics || []

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{subjectData?.icon || '📚'}</span>
        <h3 className="font-bold text-xl text-slate-800">{subjectData?.label || subject}</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {topicList.map((topic) => {
          const isSelected = selected === topic
          const allMastery = storage.getMastery()
          const topicData = allMastery[topic]
          const masteryValue = topicData?.accuracy || 0
          const status = getMasteryStatus(masteryValue)

          return (
            <button
              key={topic}
              onClick={() => onSelect(topic)}
              className={`p-4 rounded-2xl border text-left transition hover:shadow-md ${
                isSelected 
                  ? 'border-indigo-500 bg-indigo-50/30 shadow-sm' 
                  : 'border-slate-200/60 hover:border-indigo-300'
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold text-slate-800">{topic}</div>
                <div className="flex items-center gap-3">
                  {topicData && (
                    <span className={`text-sm font-bold ${
                      status.color === 'text-success' ? 'text-emerald-600' : 
                      status.color === 'text-warning' ? 'text-amber-600' : 'text-rose-600'
                    }`}>
                      {masteryValue}%
                    </span>
                  )}
                  <span className="text-sm text-slate-400">
                    {topicData ? <BarChart3 className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}