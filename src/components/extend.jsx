// ============================================================
// HYELEARNER: FOUNDATION — EXTEND COMPONENTS
// Mistake Book, Revision Planner, Duo Battle
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useAuth, useTimer } from '../hooks'
import { storage } from '../storage'
import {
  formatDate,
  formatTime,
  calculateDaysRemaining,
  shuffleArray,
  truncate,
  getWordCount,
  getReadingTime,
} from '../utils'
import { PLANNER_DEFAULTS, DUEL_CONFIG } from '../constants'

import {
  BookMarked,
  Calendar,
  Swords,
  Search,
  Download,
  Trash2,
  RefreshCw,
  Clock,
  Users,
  Trophy,
  CheckCircle2,
  AlertCircle,
  RotateCw,
  Copy,
  Plus,
  ChevronDown,
  ChevronUp,
  Medal,
  Star,
  Zap,
  FileText,
  Printer,
  Share2,
  Link,
  AlertTriangle,
  Info,
  Grid3x3,
  List,
  ArrowLeft,
  Eye,
  EyeOff,
  Target,
  Award,
  User,
  Loader2,
  XCircle
} from 'lucide-react'

// ============================================================
// MISTAKE BOOK
// ============================================================
export function MistakeBook({ 
  mistakes = [], 
  onRetry, 
  onClear, 
  onExport,
  className = '' 
}) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selectedMistake, setSelectedMistake] = useState(null)
  const [viewMode, setViewMode] = useState('list')

  const subjects = ['all', 'mathematics', 'english', 'physics', 'chemistry', 'biology']

  const filteredMistakes = mistakes.filter((m) => {
    const matchesFilter = filter === 'all' || m.subject === filter
    const matchesSearch = 
      (m.question?.toLowerCase() || '').includes(search.toLowerCase()) ||
      (m.topic?.toLowerCase() || '').includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const groupedMistakes = filteredMistakes.reduce((acc, m) => {
    const key = m.topic || 'General'
    if (!acc[key]) acc[key] = []
    acc[key].push(m)
    return acc
  }, {})

  const totalMistakes = mistakes.length

  if (mistakes.length === 0) {
    return (
      <div className={`empty-card text-center ${className}`} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="icon"><CheckCircle2 style={{ width: '48px', height: '48px', color: 'var(--color-success)' }} /></div>
        <div className="title">No Mistakes Yet</div>
        <div className="desc">Keep practicing and you'll learn from your mistakes!</div>
      </div>
    )
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* Header */}
      <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', alignItems: 'center' }}>
          <span>{totalMistakes} mistake{totalMistakes !== 1 ? 's' : ''}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-border)' }} />
          <span>{filteredMistakes.length} shown</span>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)' }}>
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'grouped' : 'list')}
            className="btn btn-outline"
            style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
          >
            {viewMode === 'list' ? <Grid3x3 style={{ width: '14px', height: '14px' }} /> : <List style={{ width: '14px', height: '14px' }} />}
            {viewMode === 'list' ? 'Group' : 'List'}
          </button>
          <button
            onClick={onExport}
            className="btn btn-outline"
            style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
          >
            <FileText style={{ width: '14px', height: '14px' }} /> Export
          </button>
          <button
            onClick={onClear}
            className="btn btn-danger"
            style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
          >
            <Trash2 style={{ width: '14px', height: '14px' }} /> Clear All
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '150px', position: 'relative' }}>
          <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search mistakes..."
            className="input"
            style={{ paddingLeft: 'var(--space-10)', fontSize: 'var(--font-size-sm)' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ fontSize: 'var(--font-size-sm)' }}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s === 'all' ? 'All Subjects' : s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={() => { setSearch(''); setFilter('all') }}
          className="btn btn-ghost"
          style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
        >
          Clear
        </button>
      </div>

      {/* Mistakes List */}
      {viewMode === 'list' ? (
        <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
          {filteredMistakes.map((mistake, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setSelectedMistake(selectedMistake === index ? null : index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{mistake.question || 'Unknown question'}</div>
                  <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Your answer: <span style={{ color: 'var(--color-danger)', fontWeight: '700' }}>{mistake.userAnswer || 'N/A'}</span></span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Correct: <span style={{ color: 'var(--color-success)', fontWeight: '700' }}>{mistake.correctAnswer || 'N/A'}</span></span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{mistake.topic || 'General'}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{mistake.subject || 'General'}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{formatDate(mistake.createdAt)}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onRetry?.(mistake) }}
                  className="btn btn-primary"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                >
                  <RotateCw style={{ width: '14px', height: '14px' }} /> Retry
                </button>
              </div>
              {selectedMistake === index && mistake.explanation && (
                <div className="info-card" style={{ marginTop: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
                    <Info style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                    <span style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>Explanation</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{mistake.explanation}</p>
                  {mistake.wrongExplanations && (
                    <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                      <div style={{ fontWeight: '500' }}>Why other options are wrong:</div>
                      {Object.entries(mistake.wrongExplanations).map(([key, value]) => (
                        <div key={key} style={{ paddingLeft: 'var(--space-4)', color: 'var(--color-danger)' }}>
                          • <span style={{ fontWeight: '500' }}>{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-4)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
          {Object.entries(groupedMistakes).map(([topic, items]) => (
            <div key={topic} className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ padding: 'var(--space-2) var(--space-4)', background: 'var(--color-background)', fontWeight: '500', fontSize: 'var(--font-size-sm)', borderBottom: '1px solid var(--color-border)' }}>
                {topic} ({items.length})
              </div>
              <div>
                {items.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex-between" style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--font-size-sm)', borderBottom: '1px solid var(--color-border-light)' }}>
                    <span style={{ color: 'var(--color-text)' }}>{item.question || 'Unknown'}</span>
                    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                      <span style={{ color: 'var(--color-danger)' }}>Your: {item.userAnswer}</span>
                      <span style={{ color: 'var(--color-success)' }}>Correct: {item.correctAnswer}</span>
                      <button onClick={() => onRetry?.(item)} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}>Retry</button>
                    </div>
                  </div>
                ))}
                {items.length > 5 && (
                  <div style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                    +{items.length - 5} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {filteredMistakes.length > 0 && (
        <div className="flex" style={{ gap: 'var(--space-3)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
          <button
            onClick={() => onRetry?.(filteredMistakes)}
            className="btn btn-primary flex-1 flex-center"
          >
            <RotateCw style={{ width: '16px', height: '16px' }} /> Retry All
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================================
// REVISION PLANNER
// ============================================================
export function RevisionPlanner({ 
  plan = null, 
  onGenerate, 
  onUpdate, 
  onExport,
  className = '' 
}) {
  const [examDate, setExamDate] = useState(plan?.examDate || '')
  const [dailyHours, setDailyHours] = useState(plan?.dailyHours || PLANNER_DEFAULTS.dailyHours)
  const [selectedDay, setSelectedDay] = useState(null)
  const [generating, setGenerating] = useState(false)

  const daysRemaining = examDate ? calculateDaysRemaining(examDate) : 0

  const handleGenerate = async () => {
    if (!examDate) {
      alert('Please set an exam date.')
      return
    }
    setGenerating(true)
    await onGenerate?.({ examDate, dailyHours })
    setGenerating(false)
  }

  const handleUpdateTask = (dayIndex, taskIndex, completed) => {
    if (!plan) return
    const newPlan = { ...plan }
    if (newPlan.schedule[dayIndex]?.topics[taskIndex]) {
      newPlan.schedule[dayIndex].topics[taskIndex].completed = completed
      onUpdate?.(newPlan)
    }
  }

  if (!plan) {
    return (
      <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Create a personalized study schedule.</p>
        <div>
          <label className="label">Exam Date</label>
          <input type="date" className="input" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
        </div>
        <div>
          <label className="label">Hours per Day</label>
          <select className="select" value={dailyHours} onChange={(e) => setDailyHours(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6, 8, 10].map((h) => (
              <option key={h} value={h}>{h} hours</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleGenerate}
          disabled={generating || !examDate}
          className="btn btn-primary flex-center"
          style={{ width: '100%' }}
        >
          {generating ? (
            <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Generating...</>
          ) : (
            <><Calendar style={{ width: '16px', height: '16px' }} /> Generate Plan</>
          )}
        </button>
      </div>
    )
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* Header Stats */}
      <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>{daysRemaining > 0 ? daysRemaining : 0}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Days until exam</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>{plan.dailyHours}h</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Daily study time</div>
        </div>
      </div>

      {/* Schedule */}
      <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
        {plan.schedule?.map((day, index) => {
          const totalHours = day.topics.reduce((sum, t) => sum + t.hours, 0)
          const completed = day.topics.filter(t => t.completed).length
          const progress = day.topics.length > 0 ? Math.round((completed / day.topics.length) * 100) : 0

          return (
            <div
              key={index}
              className={`card ${selectedDay === index ? 'success-card' : ''}`}
              onClick={() => setSelectedDay(selectedDay === index ? null : index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="flex-between">
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>{day.day}</span>
                  {progress > 0 && (
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>{progress}% done</span>
                  )}
                </div>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{totalHours}h</span>
              </div>
              {selectedDay === index && (
                <div className="stack" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)' }}>
                  {day.topics.map((topic, i) => (
                    <div key={i} className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                        <input
                          type="checkbox"
                          checked={topic.completed || false}
                          onChange={(e) => handleUpdateTask(index, i, e.target.checked)}
                          style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px' }}
                        />
                        <span className={topic.completed ? 'text-muted' : ''} style={{ color: topic.completed ? 'var(--color-text-muted)' : 'var(--color-text)', textDecoration: topic.completed ? 'line-through' : 'none' }}>
                          {topic.name}
                        </span>
                      </div>
                      <span style={{ color: 'var(--color-text-muted)' }}>{topic.hours}h</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Progress */}
      <div className="card">
        <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
          <span style={{ color: 'var(--color-text)' }}>Progress</span>
          <span style={{ color: 'var(--color-text-muted)' }}>{plan.progress?.completed || 0}/{plan.progress?.total || 0} topics</span>
        </div>
        <div className="progress" style={{ marginTop: 'var(--space-1)' }}>
          <div className="progress-fill progress-fill-success" style={{ width: plan.progress?.total > 0 ? `${((plan.progress.completed || 0) / (plan.progress.total || 1)) * 100}%` : '0%' }} />
        </div>
      </div>

      {/* Actions */}
      <div className="flex" style={{ gap: 'var(--space-3)' }}>
        <button onClick={handleGenerate} disabled={generating} className="btn btn-primary flex-1 flex-center">
          <RefreshCw style={{ width: '16px', height: '16px' }} /> Recalculate
        </button>
        <button onClick={onExport} className="btn btn-outline flex-1 flex-center">
          <FileText style={{ width: '16px', height: '16px' }} /> Export PDF
        </button>
      </div>
    </div>
  )
}

// ============================================================
// DUO BATTLE
// ============================================================
export function DuoBattle({
  onCreateRoom,
  onJoinRoom,
  onStartBattle,
  onSubmitBattle,
  room = null,
  battle = null,
  results = null,
  loading = false,
  className = '',
}) {
  const [roomCode, setRoomCode] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(DUEL_CONFIG.defaultQuestions)
  const [timeLimit, setTimeLimit] = useState(DUEL_CONFIG.defaultTimeLimit)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const subjects = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology']
  const topics = {
    Mathematics: ['Algebra', 'Geometry', 'Trigonometry', 'Probability'],
    English: ['Grammar', 'Comprehension', 'Vocabulary'],
    Physics: ['Mechanics', 'Waves', 'Electricity'],
    Chemistry: ['Organic', 'Inorganic', 'Physical'],
    Biology: ['Cell Biology', 'Genetics', 'Ecology'],
  }

  // Battle Results
  if (results) {
    const isWinner = results.winner === 'You'
    return (
      <div className={`stack text-center ${className}`} style={{ gap: 'var(--space-6)' }}>
        <div style={{ fontSize: 'var(--font-size-5xl)' }}>
          {isWinner ? <Trophy style={{ width: '64px', height: '64px', margin: '0 auto', color: 'var(--color-success)' }} /> : <Swords style={{ width: '64px', height: '64px', margin: '0 auto', color: 'var(--color-danger)' }} />}
        </div>
        <h3 className="h2">{isWinner ? 'You Won!' : 'Better Luck Next Time!'}</h3>
        <div className="grid-2" style={{ gap: 'var(--space-4)', maxWidth: '320px', margin: '0 auto' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>{results.accuracy}%</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Your Accuracy</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-text-muted)', margin: 0 }}>VS</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Opponent</div>
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <button onClick={() => onStartBattle?.()} className="btn btn-primary flex-1 flex-center">
            <Swords style={{ width: '16px', height: '16px' }} /> Rematch
          </button>
          <button onClick={() => {}} className="btn btn-outline flex-1 flex-center">Close</button>
        </div>
      </div>
    )
  }

  // Active Battle
  if (battle) {
    const currentQuestion = battle.questions?.[currentIndex]
    const total = battle.questions?.length || 0
    const answeredCount = Object.keys(answers).length

    return (
      <div className={`stack ${className}`} style={{ gap: 'var(--space-6)' }}>
        <div className="flex-between">
          <div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>Question {currentIndex + 1} of {total}</span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginLeft: 'var(--space-3)' }}>{answeredCount}/{total} answered</span>
          </div>
          <div style={{ fontSize: 'var(--font-size-lg)', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--color-primary)' }}>
            {formatTime(battle.timeLeft || 300)}
          </div>
        </div>

        <div className="card flex-between" style={{ padding: 'var(--space-3)' }}>
          <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><User style={{ width: '16px', height: '16px' }} /> Opponent</span>
          <span style={{ color: 'var(--color-success)' }}><CheckCircle2 style={{ width: '16px', height: '16px', display: 'inline' }} /> Ready</span>
        </div>

        <div className="progress">
          <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
        </div>

        {currentQuestion && (
          <div className="card">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Question {currentIndex + 1}</div>
            <div className="h3" style={{ marginBottom: 'var(--space-4)' }}>{currentQuestion.question}</div>
            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {currentQuestion.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx)
                const isSelected = answers[currentQuestion.id] === letter
                return (
                  <button
                    key={idx}
                    onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: letter }))}
                    className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                    style={{ width: '100%', justifyContent: 'flex-start', textAlign: 'left' }}
                  >
                    <span style={{ fontWeight: '500', marginRight: 'var(--space-2)' }}>{letter}.</span> {option}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="flex-between">
          <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} disabled={currentIndex === 0} className="btn btn-outline" style={{ opacity: currentIndex === 0 ? '0.4' : '1' }}>← Previous</button>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{currentIndex + 1} / {total}</span>
          {currentIndex === total - 1 ? (
            <button onClick={() => onSubmitBattle?.(answers)} className="btn btn-success"><CheckCircle2 style={{ width: '16px', height: '16px' }} /> Submit Duel</button>
          ) : (
            <button onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))} className="btn btn-outline">Next →</button>
          )}
        </div>

        <div className="card">
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {battle.questions?.map((q, i) => {
              const isAnswered = !!answers[q.id]
              const isCurrent = i === currentIndex
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="flex-center"
                  style={{
                    width: '32px', height: '32px', borderRadius: 'var(--radius)',
                    background: isCurrent ? 'var(--color-primary)' : isAnswered ? 'var(--color-success-light)' : 'var(--color-border)',
                    color: isCurrent ? 'white' : isAnswered ? 'var(--color-success)' : 'var(--color-text-muted)',
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
        </div>
      </div>
    )
  }

  // Lobby (Create/Join)
  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-6)' }}>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Challenge a friend to a duel.</p>

      <div className="card">
        <div style={{ fontWeight: '500', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Target style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Create Room
        </div>
        <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
          <div>
            <label className="label">Subject</label>
            <select className="select" value={subject} onChange={(e) => { setSubject(e.target.value); setTopic('') }}>
              <option value="">Choose</option>
              {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
          </div>
          <div>
            <label className="label">Topic</label>
            <select className="select" value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!subject}>
              <option value="">Choose</option>
              {subject && topics[subject]?.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          <div>
            <label className="label">Questions</label>
            <select className="select" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
              {DUEL_CONFIG.questionCounts.map((q) => (<option key={q} value={q}>{q}</option>))}
            </select>
          </div>
          <div>
            <label className="label">Time Limit</label>
            <select className="select" value={timeLimit} onChange={(e) => setTimeLimit(Number(e.target.value))}>
              {DUEL_CONFIG.timeLimits.map((t) => (<option key={t} value={t}>{t}s</option>))}
            </select>
          </div>
        </div>
        <button onClick={() => onCreateRoom?.({ subject, topic, questionCount, timeLimit })} disabled={!subject || loading} className="btn btn-primary flex-center" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
          {loading ? <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Creating...</> : <><Plus style={{ width: '16px', height: '16px' }} /> Create Room</>}
        </button>
      </div>

      <div className="card">
        <div style={{ fontWeight: '500', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Link style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Join Room
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <input className="input" placeholder="Enter room code" value={roomCode} onChange={(e) => setRoomCode(e.target.value.toUpperCase())} maxLength={6} style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }} />
          <button onClick={() => onJoinRoom?.(roomCode)} disabled={roomCode.length < 6 || loading} className="btn btn-primary">
            {loading ? <div className="spinner spinner-sm"></div> : 'Join'}
          </button>
        </div>
      </div>

      {room && (
        <div className="card">
          <div style={{ fontWeight: '500', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <RefreshCw style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Active Rooms
          </div>
          <div className="stack" style={{ gap: 'var(--space-2)' }}>
            <div className="card flex-between" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--color-primary)' }}>{room.code}</div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{room.subject} • {room.topic || 'All topics'} • {room.questionCount} questions</div>
              </div>
              <button onClick={() => onJoinRoom?.(room.code)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}>Join</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}