// ============================================================
// HYELEARNER: FOUNDATION — EXTEND PAGES (SHOWCASE / PREVIEW)
// Mistake Book, Revision Planner, Duo Battle. Static + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  BookMarked, Calendar, Swords, ArrowLeft, Search, Download, Trash2,
  RefreshCw, Clock, Users, Trophy, Loader2, CheckCircle2, AlertCircle,
  Play, Copy, Plus, Medal, Star, Zap, Printer, Share2, AlertTriangle,
  Info, PartyPopper, Lightbulb, Sparkles, Target, History, Eye, Bot,
  Brain, Globe, Lock, Unlock, BarChart3, TrendingUp, Award, Edit,
  Pause, Square, Timer, Filter, Check, X, Flame, ListChecks,
  Clock as ClockIcon, RefreshCw as RefreshIcon,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const SUBJECTS = {
  mathematics: { label: 'Mathematics' },
  english:     { label: 'English Language' },
  physics:     { label: 'Physics' },
  chemistry:   { label: 'Chemistry' },
  biology:     { label: 'Biology' },
  economics:   { label: 'Economics' },
  government:  { label: 'Government' },
  literature:  { label: 'Literature' },
}

const MISTAKES = [
  {
    id: 'm1', subject: 'mathematics', topic: 'Trigonometry',
    question: 'Simplify: sin²θ + cos²θ',
    options: ['0', '1', '2', 'sin θ'], userAnswer: '0', answer: '1',
    explanation: 'The Pythagorean identity states sin²θ + cos²θ = 1 for all θ.',
    createdAt: '2026-04-22T10:00:00Z',
  },
  {
    id: 'm2', subject: 'chemistry', topic: 'Organic Chemistry',
    question: 'Which functional group is present in ethanol?',
    options: ['Aldehyde', 'Ketone', 'Hydroxyl', 'Carboxyl'], userAnswer: 'Aldehyde', answer: 'Hydroxyl',
    explanation: 'Ethanol (C₂H₅OH) contains the −OH hydroxyl group.',
    createdAt: '2026-04-20T09:00:00Z',
  },
  {
    id: 'm3', subject: 'english', topic: 'Comprehension',
    question: 'In the passage, the author\'s attitude is best described as:',
    options: ['Sarcastic', 'Cautiously optimistic', 'Indifferent', 'Hostile'], userAnswer: 'Sarcastic', answer: 'Cautiously optimistic',
    explanation: 'The author acknowledges risks but emphasises potential gains.',
    createdAt: '2026-04-18T15:30:00Z',
  },
  {
    id: 'm4', subject: 'physics', topic: "Newton's Laws",
    question: 'A body in equilibrium has:',
    options: ['Zero velocity', 'Zero acceleration', 'Zero mass', 'Zero weight'], userAnswer: 'Zero velocity', answer: 'Zero acceleration',
    explanation: 'Equilibrium means net force = 0, so acceleration = 0 (velocity may be constant and non-zero).',
    createdAt: '2026-04-15T11:20:00Z',
  },
]

const AI_EXPLANATIONS = {
  m1: {
    explanation: 'The Pythagorean identity sin²θ + cos²θ = 1 holds for every angle θ. It follows directly from the unit circle: any point (cos θ, sin θ) lies on x² + y² = 1.',
    why_wrong: 'You may have thought sin²θ + cos²θ cancels to 0, but squaring does not change the sign — both terms are always non-negative and sum to exactly 1.',
    shortcut: 'Memorise the three Pythagorean identities: sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=csc²θ.',
    keyConcept: 'Pythagorean identity',
    tips: ['Draw the unit circle.', 'Check θ = 0 and θ = 90° to sanity-check.'],
    correct_answer: '1',
  },
}

const TEMPLATES = [
  { id: 't1', name: '📚 JAMB Prep',        tasks: [
    { title: 'Mathematics Practice',  estimatedTime: 30, subject: 'Mathematics' },
    { title: 'English Comprehension', estimatedTime: 20, subject: 'English Language' },
    { title: 'Physics Problems',      estimatedTime: 45, subject: 'Physics' },
    { title: 'Chemistry Revision',    estimatedTime: 30, subject: 'Chemistry' },
  ]},
  { id: 't2', name: '📘 Daily Study',      tasks: [
    { title: 'Subject 1 Practice', estimatedTime: 30, subject: 'General' },
    { title: 'Subject 2 Practice', estimatedTime: 30, subject: 'General' },
    { title: 'Subject 3 Practice', estimatedTime: 30, subject: 'General' },
  ]},
  { id: 't3', name: '🔥 Weekend Marathon', tasks: [
    { title: 'Mathematics Practice', estimatedTime: 60, subject: 'Mathematics' },
    { title: 'English Essay',        estimatedTime: 45, subject: 'English Language' },
    { title: 'Physics Revision',     estimatedTime: 60, subject: 'Physics' },
  ]},
]

const INITIAL_TASKS = [
  { id: 'k1', title: 'Revise Physics formulas',       subject: 'Physics',     topic: 'Mechanics',        priority: 'high',   estimatedTime: 30, completed: true,  completedAt: new Date().toISOString(), dueDate: new Date().toISOString().split('T')[0], notes: '', tags: [], timeSpent: 25 },
  { id: 'k2', title: 'Practice 20 Algebra questions', subject: 'Mathematics', topic: 'Algebra',          priority: 'high',   estimatedTime: 45, completed: false, dueDate: new Date().toISOString().split('T')[0], notes: 'Chapter 4', tags: ['exam-prep'], timeSpent: 0 },
  { id: 'k3', title: 'Review Organic Chemistry notes', subject: 'Chemistry',  topic: 'Organic',          priority: 'medium', estimatedTime: 25, completed: false, dueDate: new Date().toISOString().split('T')[0], notes: '', tags: [], timeSpent: 0 },
  { id: 'k4', title: 'Read Chapter 4 of Biology',      subject: 'Biology',    topic: 'Cell Division',    priority: 'low',    estimatedTime: 20, completed: false, dueDate: new Date().toISOString().split('T')[0], notes: '', tags: [], timeSpent: 0 },
]

const PUBLIC_DUELS = [
  { duel_id: 'd1', challenger: 'Tunde',   subject: 'Mathematics', topic: 'Trigonometry',   question_count: 10, time_limit: 300, created_ago: '2m ago' },
  { duel_id: 'd2', challenger: 'Chinaza', subject: 'Physics',     topic: 'Mechanics',      question_count: 5,  time_limit: 120, created_ago: '30s ago' },
  { duel_id: 'd3', challenger: 'Bola',    subject: 'Chemistry',   topic: 'Organic',        question_count: 10, time_limit: 300, created_ago: '1m ago' },
]

const DUEL_HISTORY = [
  { opponent: 'Tunde',   subject: 'Mathematics', date: '2026-04-26T10:00:00Z', accuracy: 80, winner: true  },
  { opponent: 'Chinaza', subject: 'Physics',     date: '2026-04-24T14:00:00Z', accuracy: 60, winner: false },
  { opponent: 'Bola',    subject: 'Chemistry',   date: '2026-04-22T09:00:00Z', accuracy: 70, winner: true  },
]

const DUEL_QUESTIONS = [
  { id: 'q1', question: 'Solve for x: x² − 5x + 6 = 0',           options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = 0 or x = 5'], answer: 'B' },
  { id: 'q2', question: 'What is the discriminant of x² + 2x + 5?', options: ['−16', '4', '24', '0'],                                                              answer: 'A' },
  { id: 'q3', question: 'sin²θ + cos²θ = ?',                      options: ['0', '1', '2', 'sin θ'],                                                              answer: 'B' },
  { id: 'q4', question: '10% of 250 = ?',                         options: ['20', '25', '30', '15'],                                                              answer: 'B' },
  { id: 'q5', question: 'The square root of 144 is:',             options: ['10', '11', '12', '13'],                                                              answer: 'C' },
]

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// ============================================================
// 1. MISTAKE BOOK
// ============================================================
export function ShowcaseMistakeBook({ onNavigate }) {
  const [mistakes] = useState(MISTAKES)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [explaining, setExplaining] = useState(null)
  const [explanations, setExplanations] = useState({})
  const [explainError, setExplainError] = useState(null)

  const subjectBreakdown = mistakes.reduce((acc, m) => {
    acc[m.subject] = (acc[m.subject] || 0) + 1
    return acc
  }, {})

  const topicCounts = mistakes.reduce((acc, m) => {
    acc[m.topic] = (acc[m.topic] || 0) + 1
    return acc
  }, {})
  const mostCommonTopics = Object.entries(topicCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([topic, count]) => ({ topic, count }))
  const weakTopics = mostCommonTopics.slice(0, 3)

  const monthlyTrend = [
    { month: 'Feb', count: 3 },
    { month: 'Mar', count: 5 },
    { month: 'Apr', count: mistakes.length },
  ]

  const filteredMistakes = mistakes.filter((m) => {
    const matchesFilter = filter === 'all' || m.subject === filter
    const matchesSearch = !search
      || m.question?.toLowerCase().includes(search.toLowerCase())
      || m.topic?.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleAIExplain = (mistake) => {
    setExplainError(null)

    // already shown → toggle
    if (explanations[mistake.id]) {
      setExplaining(explaining === mistake.id ? null : mistake.id)
      return
    }

    setExplaining(mistake.id)

    // showcase: instantly provide a cached explanation (no network)
    const demo = AI_EXPLANATIONS[mistake.id] || {
      explanation: mistake.explanation || 'No explanation available for this question.',
      why_wrong: 'The correct approach requires applying the underlying concept carefully.',
      shortcut: 'Break the problem into smaller steps.',
      keyConcept: mistake.topic,
      tips: ['Re-read the question carefully.', 'Eliminate obviously wrong options first.'],
      correct_answer: mistake.answer,
    }

    setExplanations((prev) => ({ ...prev, [mistake.id]: demo }))
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-danger-light)' }}>
              <BookMarked size={20} style={{ color: 'var(--color-danger)' }} />
            </div>
            <div>
              <h1 className="h2">Mistake Book</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>All your wrong answers in one place</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw size={16} />
            </button>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-danger)' }}>{mistakes.length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Mistakes</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{weakTopics.length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Weak Topics</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{Object.keys(subjectBreakdown).length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Subjects</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{mostCommonTopics[0]?.topic || 'None'}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Most Common Topic</div></div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <TrendingUp size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Monthly Trend</span>
          </div>
          <div className="flex" style={{ gap: 'var(--space-4)', justifyContent: 'space-around' }}>
            {monthlyTrend.map((item, i) => (
              <div key={i} className="text-center">
                <div className="h3" style={{ color: 'var(--color-primary)', margin: 0 }}>{item.count}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <BarChart3 size={16} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600 }}>Subject Breakdown</span>
          </div>
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {Object.entries(subjectBreakdown).map(([subject, count]) => (
              <span key={subject} className="badge badge-primary">
                {SUBJECTS[subject]?.label || subject}: {count}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {mistakes.length} mistake{mistakes.length !== 1 ? 's' : ''} recorded
            {Object.keys(explanations).length > 0 && ` • ${Object.keys(explanations).length} explained with AI`}
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <ViewOnly tooltip="Sign up to export mistakes as PDF">
              <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}>
                <Download size={16} /> Export PDF
              </button>
            </ViewOnly>
            <ViewOnly tooltip="Sign up to clear all mistakes">
              <button className="btn btn-danger" style={{ fontSize: 'var(--font-size-sm)', background: 'var(--color-danger)', color: 'white' }}>
                <Trash2 size={16} /> Clear All
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <div style={{ flex: 1, minWidth: 180, position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input type="text" placeholder="Search mistakes..." className="input" style={{ paddingLeft: 'var(--space-10)', width: '100%' }} value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Subjects</option>
            {Object.keys(SUBJECTS).map((key) => (
              <option key={key} value={key}>{SUBJECTS[key].label}</option>
            ))}
          </select>
        </div>

        {filteredMistakes.length === 0 ? (
          <div className="empty-card">
            <div className="icon"><PartyPopper size={48} style={{ color: 'var(--color-text-muted)' }} /></div>
            <div className="title">{search ? 'No Matching Mistakes' : 'No Mistakes Yet'}</div>
            <div className="desc">{search ? 'Try a different search term.' : 'Keep practicing and you will learn from your mistakes!'}</div>
          </div>
        ) : (
          <div className="stack" style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {filteredMistakes.map((mistake, index) => {
              const isExplaining = explaining === mistake.id
              const aiExplanation = explanations[mistake.id]
              const hasExplanation = !!aiExplanation

              return (
                <div key={index} className="card">
                  <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>{mistake.question}</div>
                      <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Your answer: <span style={{ color: 'var(--color-danger)', fontWeight: 700 }}>{mistake.userAnswer}</span></span>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Correct: <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>{mistake.answer}</span></span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{mistake.topic}</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{SUBJECTS[mistake.subject]?.label || mistake.subject}</span>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>{formatDate(mistake.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-2)', flexShrink: 0 }}>
                      <ViewOnly tooltip="Sign up to explain with AI">
                        <button
                          onClick={() => handleAIExplain(mistake)}
                          className={`btn ${hasExplanation ? (isExplaining ? 'btn-primary' : 'btn-outline') : 'btn-ghost'}`}
                          style={{ fontSize: 'var(--font-size-sm)' }}
                        >
                          <Brain size={14} /> {hasExplanation ? (isExplaining ? 'Hide' : 'Explain') : 'Explain with AI'}
                        </button>
                      </ViewOnly>
                    </div>
                  </div>

                  {hasExplanation && isExplaining && (
                    <div className="info-card" style={{ marginTop: 'var(--space-3)', padding: 'var(--space-4)' }}>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                        <Brain size={16} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-primary)' }} />
                        <div style={{ flex: 1 }}>
                          {aiExplanation.explanation && (
                            <div style={{ whiteSpace: 'pre-wrap', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                              {aiExplanation.explanation}
                            </div>
                          )}
                          {aiExplanation.why_wrong && (
                            <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-danger-light)', borderRadius: 'var(--radius)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-danger)' }}>Why You Were Wrong</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{aiExplanation.why_wrong}</div>
                            </div>
                          )}
                          {aiExplanation.shortcut && (
                            <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-primary)' }}>Quick Tip</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{aiExplanation.shortcut}</div>
                            </div>
                          )}
                          {aiExplanation.keyConcept && (
                            <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)' }}>
                              Key concept: {aiExplanation.keyConcept}
                            </div>
                          )}
                          {aiExplanation.tips && aiExplanation.tips.length > 0 && (
                            <div style={{ marginTop: 'var(--space-2)', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Tips:</div>
                              <ul style={{ margin: 'var(--space-1) 0 0 var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                {aiExplanation.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// 2. REVISION PLANNER
// ============================================================
export function ShowcaseRevisionPlanner({ onNavigate }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [view, setView] = useState('today')
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedTasks, setSelectedTasks] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showTimerModal, setShowTimerModal] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [formData, setFormData] = useState({
    title: '', subject: 'General', topic: 'General', priority: 'medium',
    estimatedTime: 30, dueDate: '', notes: '', tags: '',
  })
  const [timerState, setTimerState] = useState({
    isRunning: false, isPaused: false, timeRemaining: 0, taskId: null, elapsedSeconds: 0,
  })
  const timerRef = useRef(null)

  const today = new Date().toISOString().split('T')[0]

  const getFilteredTasks = () => {
    let list = [...tasks]
    if (view === 'today') list = list.filter((t) => !t.dueDate || t.dueDate <= today)
    if (filter === 'pending')   list = list.filter((t) => !t.completed)
    if (filter === 'completed') list = list.filter((t) => t.completed)
    if (filter === 'high' || filter === 'medium' || filter === 'low') list = list.filter((t) => t.priority === filter)
    if (selectedSubject !== 'all') list = list.filter((t) => t.subject === selectedSubject)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter((t) => t.title.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q))
    }
    list.sort((a, b) => {
      if (a.completed && !b.completed) return 1
      if (!a.completed && b.completed) return -1
      const order = { high: 0, medium: 1, low: 2 }
      return order[a.priority] - order[b.priority]
    })
    return list
  }

  const completedToday = tasks.filter((t) => t.completed && t.completedAt?.split('T')[0] === today).length
  const completedAll   = tasks.filter((t) => t.completed).length
  const pendingAll     = tasks.length - completedAll
  const totalTime      = tasks.reduce((sum, t) => sum + (t.timeSpent || 0), 0)

  const addTask = () => {
    if (!formData.title.trim()) return
    const newTask = {
      id: `task_${Date.now()}`,
      title: formData.title.trim(),
      subject: formData.subject,
      topic: formData.topic || 'General',
      priority: formData.priority,
      estimatedTime: parseInt(formData.estimatedTime) || 30,
      completed: false, completedAt: null,
      dueDate: formData.dueDate || today,
      notes: formData.notes, tags: formData.tags ? formData.tags.split(',').map((t) => t.trim()) : [],
      timeSpent: 0,
    }
    setTasks((prev) => [...prev, newTask])
    setFormData({ title: '', subject: 'General', topic: 'General', priority: 'medium', estimatedTime: 30, dueDate: '', notes: '', tags: '' })
    setShowAddModal(false)
  }

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    setEditingTask(id)
    setFormData({
      title: task.title, subject: task.subject, topic: task.topic,
      priority: task.priority, estimatedTime: task.estimatedTime,
      dueDate: task.dueDate || '', notes: task.notes || '', tags: (task.tags || []).join(', '),
    })
    setShowAddModal(true)
  }

  const updateTask = () => {
    if (!editingTask || !formData.title.trim()) return
    setTasks((prev) => prev.map((t) => t.id === editingTask
      ? {
          ...t,
          title: formData.title.trim(),
          subject: formData.subject, topic: formData.topic,
          priority: formData.priority, estimatedTime: parseInt(formData.estimatedTime) || 30,
          dueDate: formData.dueDate || null,
          notes: formData.notes,
          tags: formData.tags ? formData.tags.split(',').map((s) => s.trim()) : [],
        }
      : t
    ))
    setEditingTask(null)
    setShowAddModal(false)
    setFormData({ title: '', subject: 'General', topic: 'General', priority: 'medium', estimatedTime: 30, dueDate: '', notes: '', tags: '' })
  }

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => t.id === id
      ? { ...t, completed: !t.completed, completedAt: !t.completed ? new Date().toISOString() : null }
      : t
    ))
  }

  const bulkAction = (action) => {
    if (selectedTasks.length === 0) return
    if (action === 'delete') setTasks((prev) => prev.filter((t) => !selectedTasks.includes(t.id)))
    else if (action === 'complete') setTasks((prev) => prev.map((t) => selectedTasks.includes(t.id) ? { ...t, completed: true, completedAt: new Date().toISOString() } : t))
    else setTasks((prev) => prev.map((t) => selectedTasks.includes(t.id) ? { ...t, priority: action } : t))
    setSelectedTasks([])
  }

  const startTimer = (taskId) => {
    setTimerState({ isRunning: true, isPaused: false, timeRemaining: 25 * 60, taskId, elapsedSeconds: 0 })
    setShowTimerModal(true)
  }

  const pauseTimer = () => {
    setTimerState((p) => ({ ...p, isRunning: false, isPaused: true }))
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const resumeTimer = () => setTimerState((p) => ({ ...p, isRunning: true, isPaused: false }))

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (timerState.taskId) {
      const elapsedMin = Math.round(timerState.elapsedSeconds / 60)
      if (elapsedMin > 0) {
        setTasks((prev) => prev.map((t) => t.id === timerState.taskId ? { ...t, timeSpent: (t.timeSpent || 0) + elapsedMin } : t))
      }
    }
    setTimerState({ isRunning: false, isPaused: false, timeRemaining: 0, taskId: null, elapsedSeconds: 0 })
    setShowTimerModal(false)
  }

  useEffect(() => {
    if (timerState.isRunning) {
      timerRef.current = setInterval(() => {
        setTimerState((prev) => {
          if (prev.timeRemaining <= 0) { clearInterval(timerRef.current); return { ...prev, isRunning: false } }
          return { ...prev, timeRemaining: prev.timeRemaining - 1, elapsedSeconds: prev.elapsedSeconds + 1 }
        })
      }, 1000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [timerState.isRunning])

  const applyTemplate = (template) => {
    const newTasks = template.tasks.map((t) => ({
      id: `task_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
      title: t.title, subject: t.subject, topic: 'General', priority: 'medium',
      estimatedTime: t.estimatedTime || 30, completed: false, completedAt: null,
      dueDate: today, notes: '', tags: [], timeSpent: 0,
    }))
    setTasks((prev) => [...prev, ...newTasks])
    setShowTemplates(false)
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-teal-light)' }}>
              <Calendar size={20} style={{ color: 'var(--color-teal)' }} />
            </div>
            <div>
              <h1 className="h2">Revision Planner</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage your study tasks</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{completedToday}/{tasks.length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Today's Progress</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}><Flame size={24} style={{ display: 'inline' }} /> 5</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Day Streak</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{tasks.length}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Tasks</div><div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{completedAll} done • {pendingAll} pending</div></div>
          <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-secondary)' }}>{Math.floor(totalTime / 60)}h {totalTime % 60}m</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Study Time</div></div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="flex" style={{ gap: 'var(--space-1)' }}>
              <button onClick={() => setView('today')}  className={`btn ${view === 'today' ? 'btn-primary' : 'btn-outline'}`}  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>Today</button>
              <button onClick={() => setView('weekly')} className={`btn ${view === 'weekly' ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>Weekly</button>
            </div>

            <div style={{ width: 1, height: 24, background: 'var(--color-border)' }} />

            <div style={{ flex: 1, minWidth: 150, position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 'var(--space-2)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input type="text" placeholder="Search tasks..." className="input" style={{ paddingLeft: 'var(--space-7)', fontSize: 'var(--font-size-sm)' }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', minWidth: 120 }}>
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>

            <select className="select" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', minWidth: 120 }}>
              <option value="all">All Subjects</option>
              {Object.keys(SUBJECTS).map((key) => <option key={key} value={SUBJECTS[key].label}>{SUBJECTS[key].label}</option>)}
            </select>

            <ViewOnly tooltip="Sign up to use templates">
              <button onClick={() => setShowTemplates(true)} className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                <ListChecks size={14} /> Templates
              </button>
            </ViewOnly>
            <ViewOnly tooltip="Sign up to export your plan">
              <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                <Download size={14} /> Export
              </button>
            </ViewOnly>
            <ViewOnly tooltip="Sign up to add a task">
              <button onClick={() => setShowAddModal(true)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                <Plus size={14} /> Add Task
              </button>
            </ViewOnly>
          </div>
        </div>

        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                {view === 'today' ? "Today's Tasks" : 'Weekly Tasks'}
              </span>
              <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{filteredTasks.length} tasks</span>
            </div>
            {selectedTasks.length > 0 && (
              <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{selectedTasks.length} selected</span>
                <button onClick={() => bulkAction('complete')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}><Check size={12} /></button>
                <button onClick={() => bulkAction('delete')}   className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}><Trash2 size={12} /></button>
                <button onClick={() => setSelectedTasks([])}   className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}><X size={12} /></button>
              </div>
            )}
          </div>

          {filteredTasks.length === 0 ? (
            <div className="text-center" style={{ padding: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
              <div style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-2)' }}>📭</div>
              <p style={{ fontWeight: 500 }}>No tasks found</p>
              <p style={{ fontSize: 'var(--font-size-sm)' }}>{searchQuery ? 'Try adjusting your search' : 'Add a task to get started!'}</p>
            </div>
          ) : (
            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {filteredTasks.map((task) => {
                const isSelected = selectedTasks.includes(task.id)
                return (
                  <div key={task.id} className="card" style={{
                    padding: 'var(--space-3) var(--space-4)',
                    background: task.completed ? 'var(--color-success-light)' : 'var(--color-surface)',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    opacity: task.completed ? 0.7 : 1,
                  }}>
                    <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start', flex: 1 }}>
                        <ViewOnly tooltip="Sign up to toggle tasks">
                          <button onClick={() => toggleTask(task.id)} className="flex-center" style={{
                            width: 24, height: 24, borderRadius: 'var(--radius)',
                            border: '2px solid var(--color-primary)',
                            background: task.completed ? 'var(--color-primary)' : 'transparent',
                            color: task.completed ? 'white' : 'transparent',
                            cursor: 'pointer', flexShrink: 0, marginTop: 2,
                          }}>
                            {task.completed && <Check size={14} />}
                          </button>
                        </ViewOnly>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{
                              fontWeight: task.completed ? 400 : 600,
                              textDecoration: task.completed ? 'line-through' : 'none',
                              color: task.completed ? 'var(--color-text-muted)' : 'var(--color-text)',
                              fontSize: 'var(--font-size-sm)',
                            }}>{task.title}</span>
                            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{task.estimatedTime}m</span>
                            {task.timeSpent > 0 && <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>{task.timeSpent}m spent</span>}
                          </div>
                          <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', flexWrap: 'wrap' }}>
                            <span>{task.subject}</span>
                            {task.topic && <span>• {task.topic}</span>}
                            <span>• {task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'} {task.priority}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex" style={{ gap: 'var(--space-1)', flexShrink: 0 }}>
                        {!task.completed && (
                          <ViewOnly tooltip="Sign up to start a timer">
                            <button onClick={() => startTimer(task.id)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                              <Timer size={16} />
                            </button>
                          </ViewOnly>
                        )}
                        <ViewOnly tooltip="Sign up to edit">
                          <button onClick={() => editTask(task.id)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                            <Edit size={14} />
                          </button>
                        </ViewOnly>
                        <ViewOnly tooltip="Sign up to delete">
                          <button onClick={() => deleteTask(task.id)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}>
                            <Trash2 size={14} />
                          </button>
                        </ViewOnly>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      {showAddModal && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: 480, padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>{editingTask ? 'Edit Task' : 'Add New Task'}</h3>
              <button onClick={() => { setShowAddModal(false); setEditingTask(null) }} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><X size={20} /></button>
            </div>

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <div>
                <label className="label">Task Title *</label>
                <input type="text" className="input" placeholder="What do you want to study?" value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} />
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label">Subject</label>
                  <select className="select" value={formData.subject} onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}>
                    <option value="General">General</option>
                    {Object.keys(SUBJECTS).map((key) => <option key={key} value={SUBJECTS[key].label}>{SUBJECTS[key].label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Topic</label>
                  <input type="text" className="input" placeholder="e.g., Algebra" value={formData.topic} onChange={(e) => setFormData((p) => ({ ...p, topic: e.target.value }))} />
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label">Priority</label>
                  <select className="select" value={formData.priority} onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))}>
                    <option value="high">🔴 High</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="low">🟢 Low</option>
                  </select>
                </div>
                <div>
                  <label className="label">Estimated Time (min)</label>
                  <input type="number" className="input" min="5" max="180" value={formData.estimatedTime} onChange={(e) => setFormData((p) => ({ ...p, estimatedTime: parseInt(e.target.value) || 30 }))} />
                </div>
              </div>

              <div>
                <label className="label">Due Date (optional)</label>
                <input type="date" className="input" value={formData.dueDate} onChange={(e) => setFormData((p) => ({ ...p, dueDate: e.target.value }))} />
              </div>

              <div>
                <label className="label">Notes (optional)</label>
                <textarea className="input" placeholder="Add notes..." rows="2" value={formData.notes} onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))} style={{ resize: 'vertical' }} />
              </div>

              <div>
                <label className="label">Tags (comma separated)</label>
                <input type="text" className="input" placeholder="e.g., exam-prep, revision" value={formData.tags} onChange={(e) => setFormData((p) => ({ ...p, tags: e.target.value }))} />
              </div>

              <button onClick={editingTask ? updateTask : addTask} disabled={!formData.title.trim()} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                {editingTask ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TIMER MODAL */}
      {showTimerModal && timerState.taskId && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: 400, padding: 'var(--space-6)', textAlign: 'center' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>⏱️ Study Timer</h3>
              <button onClick={stopTimer} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><X size={20} /></button>
            </div>

            <div style={{ fontSize: 'var(--font-size-6xl)', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', padding: 'var(--space-4)' }}>
              {Math.floor(timerState.timeRemaining / 60)}:{String(timerState.timeRemaining % 60).padStart(2, '0')}
            </div>

            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
              {tasks.find((t) => t.id === timerState.taskId)?.title || 'No task'}
            </div>

            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', marginBottom: 'var(--space-3)' }}>
              {!timerState.isRunning && !timerState.isPaused && (
                <button onClick={() => setTimerState((p) => ({ ...p, isRunning: true }))} className="btn btn-primary flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Play size={20} /> Start
                </button>
              )}
              {timerState.isRunning && (
                <button onClick={pauseTimer} className="btn btn-warning flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Pause size={20} /> Pause
                </button>
              )}
              {timerState.isPaused && (
                <button onClick={resumeTimer} className="btn btn-primary flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Play size={20} /> Resume
                </button>
              )}
              {(timerState.isRunning || timerState.isPaused) && (
                <button onClick={stopTimer} className="btn btn-danger flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Square size={20} /> Stop
                </button>
              )}
            </div>

            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              {timerState.elapsedSeconds > 0 && <span>⏱️ {Math.floor(timerState.elapsedSeconds / 60)}m {timerState.elapsedSeconds % 60}s elapsed</span>}
            </div>
          </div>
        </div>
      )}

      {/* TEMPLATES MODAL */}
      {showTemplates && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: 500, padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>📋 Templates</h3>
              <button onClick={() => setShowTemplates(false)} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><X size={20} /></button>
            </div>

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {TEMPLATES.map((template) => (
                <ViewOnly key={template.id} tooltip="Sign up to apply templates">
                  <button onClick={() => applyTemplate(template)} className="card card-hover" style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'left', cursor: 'pointer', width: '100%' }}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>{template.name}</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {template.tasks.length} tasks • {template.tasks.reduce((sum, t) => sum + t.estimatedTime, 0)}m total
                    </div>
                  </button>
                </ViewOnly>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================
// 3. DUO BATTLE
// ============================================================
export function ShowcaseDuoBattle({ onNavigate }) {
  const [mode, setMode] = useState('lobby')           // 'lobby' | 'waiting' | 'battle'
  const [roomCode, setRoomCode] = useState('')
  const [subject, setSubject] = useState('Mathematics')
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(10)
  const [timeLimit, setTimeLimit] = useState(300)
  const [isPublic, setIsPublic] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [error, setError] = useState(null)
  const [showHistory, setShowHistory] = useState(false)
  const [loading, setLoading] = useState(false)

  const activeUsers = 47
  const publicDuels = PUBLIC_DUELS
  const duelHistory = DUEL_HISTORY

  const subjectOptions = Object.keys(SUBJECTS).map((k) => SUBJECTS[k].label)
  const topicsBySubject = {
    Mathematics: ['Quadratic Equations', 'Trigonometry', 'Algebra'],
    Physics:     ['Mechanics', 'Waves', 'Electricity'],
    Chemistry:   ['Atomic Structure', 'Organic Chemistry'],
    Biology:     ['Cell Division', 'Genetics'],
    English:     ['Comprehension', 'Synonyms & Antonyms', 'Essay'],
  }

  // countdown when in battle
  useEffect(() => {
    if (mode !== 'battle' || results) return
    const id = setInterval(() => setTimeLeft((p) => Math.max(0, p - 1)), 1000)
    return () => clearInterval(id)
  }, [mode, results])

  const handleCreateRoom = () => {
    if (!subject) { setError('Please select a subject'); return }
    setError(null)
    setLoading(true)
    setTimeout(() => {
      setRoomCode('ABC123')
      setQuestions(DUEL_QUESTIONS.slice(0, questionCount))
      setMode('waiting')
      setLoading(false)
      // demo: after 2.5s, "opponent joins" and battle starts
      setTimeout(() => {
        setMode('battle')
        setTimeLeft(timeLimit)
      }, 2500)
    }, 500)
  }

  const handleJoinPublic = (duel) => {
    setError(null)
    setSubject(duel.subject)
    setTopic(duel.topic || '')
    setQuestionCount(duel.question_count)
    setTimeLimit(duel.time_limit)
    setQuestions(DUEL_QUESTIONS.slice(0, duel.question_count))
    setMode('battle')
    setTimeLeft(duel.time_limit)
  }

  const handleJoinRoom = () => {
    if (roomCode.length < 6) { setError('Please enter a valid room code'); return }
    setError(null)
    setQuestions(DUEL_QUESTIONS.slice(0, questionCount))
    setMode('battle')
    setTimeLeft(timeLimit)
  }

  const handleSubmitBattle = () => {
    const correct = questions.filter((q) => answers[q.id] === q.answer).length
    const total = questions.length
    const accuracy = Math.round((correct / total) * 100)
    setResults({ correct, total, accuracy, winner: accuracy >= 60 ? 'You' : 'Opponent' })
  }

  const handleRematch = () => {
    setMode('lobby'); setRoomCode(''); setQuestions([]); setAnswers({}); setResults(null)
    setCurrentIndex(0); setTopic(''); setError(null); setTimeLeft(timeLimit)
  }

  const toggleAnswer = (qid, letter) => setAnswers((prev) => ({ ...prev, [qid]: letter }))

  // ---- WAITING ----
  if (mode === 'waiting') {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <ViewOnly tooltip="Sign up to go back">
            <button className="btn btn-ghost" onClick={() => setMode('lobby')} style={{ marginBottom: 'var(--space-6)' }}>
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>

          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
              <Users size={32} style={{ color: 'var(--color-primary)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Waiting for Opponent</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>Share this code with a friend:</p>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.1em', background: 'var(--color-primary-light)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-primary)' }}>
              {roomCode}
            </div>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner spinner-sm"></div>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Waiting for opponent to join...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ---- HISTORY ----
  if (showHistory) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
                <History size={20} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <h1 className="h2">Duel History</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your past battles</p>
              </div>
            </div>
            <button className="btn btn-ghost" onClick={() => setShowHistory(false)}>
              <ArrowLeft size={16} /> Back
            </button>
          </div>

          <div className="stack" style={{ gap: 'var(--space-3)' }}>
            {duelHistory.map((duel, i) => (
              <div key={i} className="card flex-between">
                <div>
                  <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>vs {duel.opponent}</div>
                  <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    <span>{duel.subject}</span><span>•</span><span>{formatDate(duel.date)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div style={{ fontWeight: 700, color: duel.winner ? 'var(--color-success)' : 'var(--color-danger)' }}>{duel.accuracy}%</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{duel.winner ? 'Won' : 'Lost'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ---- RESULTS ----
  if (mode === 'battle' && results) {
    const isWinner = results.winner === 'You'
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <ViewOnly tooltip="Sign up to go back">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')} style={{ marginBottom: 'var(--space-6)' }}>
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>

          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              {isWinner
                ? <Trophy size={64} style={{ margin: '0 auto', color: 'var(--color-warning)' }} />
                : <Swords size={64} style={{ margin: '0 auto', color: 'var(--color-danger)' }} />}
            </div>
            <h3 className="h2" style={{ marginBottom: 'var(--space-4)' }}>{isWinner ? 'You Won!' : 'Better Luck Next Time!'}</h3>
            <div className="grid-2" style={{ maxWidth: 320, margin: '0 auto' }}>
              <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{results.accuracy}%</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your Accuracy</div></div>
              <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-text-muted)' }}>VS</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Opponent</div></div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <ViewOnly tooltip="Sign up to rematch">
                <button onClick={handleRematch} className="btn btn-primary flex-1 flex-center">
                  <Swords size={16} /> Rematch
                </button>
              </ViewOnly>
              <ViewOnly tooltip="Sign up to close">
                <button onClick={() => onNavigate?.('dashboard')} className="btn btn-outline flex-1 flex-center">Close</button>
              </ViewOnly>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ---- BATTLE ----
  if (mode === 'battle') {
    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length

    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <ViewOnly tooltip="Sign up to exit">
            <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')} style={{ marginBottom: 'var(--space-6)' }}>
              <ArrowLeft size={16} /> Exit
            </button>
          </ViewOnly>

          <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
                <Swords size={20} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <h1 className="h2">Duo Battle</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{subject}</p>
              </div>
            </div>
            <div className="flex-center" style={{
              padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-xl)',
              background: timeLeft < 60 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
              color: timeLeft < 60 ? 'var(--color-danger)' : 'var(--color-primary)',
              fontWeight: 700, fontSize: 'var(--font-size-lg)', fontFamily: 'var(--font-mono)',
            }}>
              <ClockIcon size={16} style={{ marginRight: 'var(--space-2)' }} />
              {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </div>
          </div>

          <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text)' }}>Question {currentIndex + 1} of {total}</span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{answeredCount}/{total} answered</span>
          </div>
          <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
          </div>

          {currentQuestion && (
            <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Question {currentIndex + 1}</div>
              <div className="h3" style={{ marginBottom: 'var(--space-4)' }}>{currentQuestion.question}</div>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                {currentQuestion.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx)
                  const isSelected = answers[currentQuestion.id] === letter
                  return (
                    <ViewOnly key={idx} tooltip="Sign up to answer">
                      <button
                        onClick={() => toggleAnswer(currentQuestion.id, letter)}
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
          )}

          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}>
              ← Previous
            </button>
            <span className="badge badge-muted">{currentIndex + 1} / {total}</span>
            {currentIndex === total - 1 ? (
              <ViewOnly tooltip="Sign up to submit the duel">
                <button className="btn btn-success" onClick={handleSubmitBattle}>
                  <CheckCircle2 size={16} /> Submit Duel
                </button>
              </ViewOnly>
            ) : (
              <button className="btn btn-outline" onClick={() => setCurrentIndex((p) => Math.min(total - 1, p + 1))}>
                Next →
              </button>
            )}
          </div>

          <div className="card">
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
                      fontWeight: 600, fontSize: 'var(--font-size-sm)',
                      cursor: 'pointer', border: 'none',
                    }}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ---- LOBBY ----
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
              <Swords size={20} style={{ color: 'var(--color-secondary)' }} />
            </div>
            <div>
              <h1 className="h2">Duo Battle</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Challenge a friend to a duel</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              <Users size={14} /> {activeUsers} online
            </span>
            <ViewOnly tooltip="Sign up to view duel history">
              <button onClick={() => setShowHistory(true)} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)' }}>
                <History size={16} /> History
              </button>
            </ViewOnly>
            <ViewOnly tooltip="Sign up to go back">
              <button className="btn btn-ghost" onClick={() => onNavigate?.('dashboard')}>
                <ArrowLeft size={16} /> Back
              </button>
            </ViewOnly>
          </div>
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle size={16} /><span>{error}</span>
            </div>
          </div>
        )}

        <div className="card" style={{ padding: 'var(--space-8)' }}>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Plus size={16} style={{ color: 'var(--color-primary)' }} /> Create Room
              </div>

              <div style={{ marginBottom: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <button onClick={() => setIsPublic(false)} className={`btn ${!isPublic ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)' }}>
                    <Lock size={14} /> Private
                  </button>
                  <button onClick={() => setIsPublic(true)} className={`btn ${isPublic ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)' }}>
                    <Unlock size={14} /> Public
                  </button>
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label">Subject</label>
                  <select className="select" value={subject} onChange={(e) => { setSubject(e.target.value); setTopic('') }}>
                    <option value="">Choose</option>
                    {subjectOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Topic</label>
                  <select className="select" value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!subject}>
                    <option value="">Choose</option>
                    {(topicsBySubject[subject] || []).map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                <div>
                  <label className="label">Questions</label>
                  <select className="select" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
                    {[5, 10, 15, 20].map((q) => <option key={q} value={q}>{q}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Time Limit</label>
                  <select className="select" value={timeLimit} onChange={(e) => setTimeLimit(Number(e.target.value))}>
                    <option value={120}>2 min</option>
                    <option value={300}>5 min</option>
                    <option value={600}>10 min</option>
                  </select>
                </div>
              </div>

              <ViewOnly tooltip="Sign up to create a room">
                <button onClick={handleCreateRoom} disabled={!subject || loading} className="btn btn-primary flex-center" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                  {loading ? <><Loader2 className="animate-spin" size={16} /> Creating...</> : <><Plus size={16} /> {isPublic ? 'Create Public Room' : 'Create Private Room'}</>}
                </button>
              </ViewOnly>
            </div>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Users size={16} style={{ color: 'var(--color-primary)' }} /> Join Private Room
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)' }}>
                <input className="input" placeholder="Enter room code" value={roomCode} onChange={(e) => setRoomCode(e.target.value.toUpperCase())} maxLength={6} style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }} />
                <ViewOnly tooltip="Sign up to join">
                  <button onClick={handleJoinRoom} disabled={roomCode.length < 6} className="btn btn-primary">Join</button>
                </ViewOnly>
              </div>
            </div>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Globe size={16} style={{ color: 'var(--color-primary)' }} /> Public Lobby ({publicDuels.length} active)
              </div>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                {publicDuels.map((duel) => (
                  <div key={duel.duel_id} className="card flex-between" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                        {duel.challenger} wants to duel
                      </div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                        {duel.subject} {duel.topic ? `• ${duel.topic}` : ''} • {duel.question_count} questions
                      </div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                        ⏱️ {duel.time_limit}s • {duel.created_ago}
                      </div>
                    </div>
                    <ViewOnly tooltip="Sign up to join">
                      <button onClick={() => handleJoinPublic(duel)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                        Join
                      </button>
                    </ViewOnly>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
