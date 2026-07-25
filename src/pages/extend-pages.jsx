// ============================================================
// HYELEARNER: FOUNDATION — EXTEND PAGES (FULLY FIXED)
// Mistake Book (with AI Explain + Cache + Real PDF export + Stats + Auto-Delete),
// Revision Planner (Task Manager for Learning),
// Duo Battle (with History, Status, Public Lobby, Active Users)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { formatDate, formatTime, calculateDaysRemaining, shuffleArray, trackAIUsage } from '../utils'
import { PLANNER_DEFAULTS, DUEL_CONFIG, SUBJECTS } from '../constants'
import { duels, ai } from '../services'
import jsPDF from 'jspdf'
import { LoadingScreen } from '../components/LoadingScreen'
import { 
  BookMarked, 
  Calendar, 
  Swords, 
  ArrowLeft,
  Search,
  Download,
  Trash2,
  RefreshCw,
  Clock,
  Users,
  Trophy,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Clock as ClockIcon,
  Play,
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
  Link as LinkIcon,
  AlertTriangle,
  Info,
  PartyPopper,
  Lightbulb,
  Sparkles,
  Target,
  History,
  Eye,
  RefreshCw as RefreshIcon,
  Bot,
  Brain,
  Globe,
  Lock,
  Unlock,
  BarChart3,
  TrendingUp,
  Award,
  Edit,
  Pause,
  Square,
  Timer,
  Filter,
  Check,
  X,
  Flame,
  Copy as CopyIcon,
  ListChecks,
  MoreVertical
} from 'lucide-react'

// ============================================================
// MISTAKE BOOK PAGE — ENHANCED WITH STATS + AUTO-DELETE + NO RETRY
// ============================================================
export function MistakeBookPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [mistakes, setMistakes] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  const [stats, setStats] = useState({
    total: 0,
    weakTopics: [],
    subjectBreakdown: {},
    monthlyTrend: [],
    mostCommonTopics: [],
    accuracyBySubject: {},
  })

  const [explaining, setExplaining] = useState(null)
  const [explanations, setExplanations] = useState({})
  const [explainError, setExplainError] = useState(null)

  useEffect(() => {
    checkAndCleanMistakes()
    loadMistakes()
  }, [])

  const checkAndCleanMistakes = () => {
    const today = new Date()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    const lastCleanup = localStorage.getItem('hyelearner_mistake_cleanup')
    
    if (!lastCleanup || new Date(lastCleanup) < firstDayOfMonth) {
      const allMistakes = storage.getMistakes()
      const currentMonth = today.getMonth()
      const currentYear = today.getFullYear()
      
      const filtered = allMistakes.filter(m => {
        const date = new Date(m.createdAt)
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear
      })
      
      storage.saveMistakes(filtered)
      localStorage.setItem('hyelearner_mistake_cleanup', today.toISOString())
      
      if (filtered.length < allMistakes.length) {
        console.log(`Auto-cleaned ${allMistakes.length - filtered.length} old mistakes`)
      }
    }
  }

  const loadMistakes = () => {
    setLoading(true)
    try {
      const data = storage.getMistakes()
      setMistakes(data)
      calculateStats(data)

      const cached = localStorage.getItem('hyelearner_ai_explanations')
      if (cached) {
        try {
          setExplanations(JSON.parse(cached))
        } catch (e) {
          console.error('Failed to load AI explanations cache:', e)
        }
      }
    } catch (error) {
      console.error('Failed to load mistakes:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (data) => {
    if (!data || data.length === 0) {
      setStats({
        total: 0,
        weakTopics: [],
        subjectBreakdown: {},
        monthlyTrend: [],
        mostCommonTopics: [],
        accuracyBySubject: {},
      })
      return
    }

    const total = data.length

    const subjectBreakdown = {}
    data.forEach(m => {
      const subject = m.subject || 'General'
      subjectBreakdown[subject] = (subjectBreakdown[subject] || 0) + 1
    })

    const topicMap = {}
    data.forEach(m => {
      const topic = m.topic || 'General'
      topicMap[topic] = (topicMap[topic] || 0) + 1
    })
    const mostCommonTopics = Object.entries(topicMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic, count]) => ({ topic, count }))

    const monthlyTrend = []
    const now = new Date()
    for (let i = 2; i >= 0; i--) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const monthName = month.toLocaleString('default', { month: 'short' })
      const count = data.filter(m => {
        const d = new Date(m.createdAt)
        return d.getMonth() === month.getMonth() && d.getFullYear() === month.getFullYear()
      }).length
      monthlyTrend.push({ month: monthName, count })
    }

    const weakTopics = Object.entries(topicMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([topic, count]) => ({ topic, count }))

    const sessions = storage.getSessions()
    const subjectAccuracy = {}
    Object.keys(subjectBreakdown).forEach(subject => {
      const subjectSessions = sessions.filter(s => s.subject === subject && s.status === 'completed')
      const totalQuestions = subjectSessions.reduce((sum, s) => sum + (s.totalQuestions || s.total || 0), 0)
      const correctAnswers = subjectSessions.reduce((sum, s) => sum + (s.correctAnswers || s.correct || 0), 0)
      const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
      subjectAccuracy[subject] = accuracy
    })

    setStats({
      total,
      weakTopics,
      subjectBreakdown,
      monthlyTrend,
      mostCommonTopics,
      accuracyBySubject: subjectAccuracy,
    })
  }

  const filteredMistakes = mistakes.filter(m => {
    const matchesFilter = filter === 'all' || m.subject === filter
    const matchesSearch = m.question?.toLowerCase().includes(search.toLowerCase()) ||
                          m.topic?.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleAIExplain = async (mistake) => {
    setExplainError(null)

    if (explanations[mistake.id]) {
      setExplaining(explaining === mistake.id ? null : mistake.id)
      return
    }

    setExplaining(mistake.id)

    try {
      const result = await ai.explain(
        mistake.question,
        mistake.userAnswer,
        mistake.options || [],
        mistake.correctAnswer || mistake.answer || null
      )
      
      // ✅ TRACK AI USAGE
      trackAIUsage()
      
      const newExplanations = {
        ...explanations,
        [mistake.id]: result
      }
      setExplanations(newExplanations)
      localStorage.setItem('hyelearner_ai_explanations', JSON.stringify(newExplanations))
      
    } catch (err) {
      console.error('AI explanation failed:', err)
      setExplainError(err.message || 'Failed to generate explanation')
      
      const newExplanations = {
        ...explanations,
        [mistake.id]: { 
          explanation: mistake.explanation || 'No explanation available for this question.',
          error: true,
          fallback: true
        }
      }
      setExplanations(newExplanations)
      localStorage.setItem('hyelearner_ai_explanations', JSON.stringify(newExplanations))
    }
  }

  const handleExportPDF = async () => {
    if (filteredMistakes.length === 0) {
      alert('No mistakes to export.')
      return
    }
    setExporting(true)
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const pageHeight = doc.internal.pageSize.height
      const pageWidth = doc.internal.pageSize.width
      const margin = 20
      let y = margin

      doc.setFontSize(18)
      doc.setTextColor(79, 70, 229)
      doc.text('Hyelearner — Mistake Book', pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(`Generated: ${formatDate(new Date(), 'long')}`, pageWidth / 2, y, { align: 'center' })
      y += 8
      doc.text(`Total Mistakes: ${filteredMistakes.length}`, pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setDrawColor(200, 200, 200)
      doc.line(margin, y, pageWidth - margin, y)
      y += 8

      doc.setFontSize(11)
      doc.setTextColor(50, 50, 50)

      filteredMistakes.forEach((m, index) => {
        const questionText = `Q${index+1}: ${m.question || 'Unknown question'}`
        const lines = doc.splitTextToSize(questionText, pageWidth - 2 * margin)
        if (y + lines.length * 6 + 30 > pageHeight - margin) {
          doc.addPage()
          y = margin
        }
        doc.text(lines, margin, y)
        y += lines.length * 6 + 4

        doc.setFontSize(9)
        doc.setTextColor(150, 150, 150)
        doc.text(`Subject: ${m.subject || 'General'}  |  Topic: ${m.topic || 'General'}`, margin, y)
        y += 6
        doc.text(`Your answer: ${m.userAnswer || 'N/A'}`, margin, y)
        y += 6
        doc.text(`Correct answer: ${m.answer || m.correctAnswer || 'N/A'}`, margin, y)
        y += 6
        if (m.explanation) {
          doc.setTextColor(80, 80, 80)
          const expLines = doc.splitTextToSize(`Explanation: ${m.explanation}`, pageWidth - 2 * margin)
          if (y + expLines.length * 5 + 10 > pageHeight - margin) {
            doc.addPage()
            y = margin
          }
          doc.text(expLines, margin, y)
          y += expLines.length * 5 + 6
        }
        doc.setDrawColor(230, 230, 230)
        doc.line(margin, y, pageWidth - margin, y)
        y += 6
      })

      doc.save(`mistake-book-${new Date().toISOString().slice(0,10)}.pdf`)
    } catch (error) {
      console.error('PDF export failed:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all mistakes?')) {
      storage.clearMistakes()
      setMistakes([])
      setStats({ total: 0, weakTopics: [], subjectBreakdown: {}, monthlyTrend: [], mostCommonTopics: [], accuracyBySubject: {} })
      const newExplanations = { ...explanations }
      mistakes.forEach(m => delete newExplanations[m.id])
      setExplanations(newExplanations)
      localStorage.setItem('hyelearner_ai_explanations', JSON.stringify(newExplanations))
    }
  }

  const handleRefresh = () => {
    loadMistakes()
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-danger-light)' }}>
              <BookMarked style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />
            </div>
            <div>
              <h1 className="h2">Mistake Book</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>All your wrong answers in one place</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-danger)' }}>{stats.total}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Mistakes</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-warning)' }}>{stats.weakTopics.length}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Weak Topics</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)' }}>
              {Object.keys(stats.subjectBreakdown).length}
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Subjects</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-success)' }}>
              {stats.mostCommonTopics.length > 0 ? stats.mostCommonTopics[0].topic : 'None'}
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Most Common Topic</div>
          </div>
        </div>

        {stats.monthlyTrend.length > 0 && (
          <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
              <TrendingUp style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: '600' }}>Monthly Trend</span>
            </div>
            <div className="flex" style={{ gap: 'var(--space-4)', justifyContent: 'space-around' }}>
              {stats.monthlyTrend.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="h3" style={{ color: 'var(--color-primary)', margin: 0 }}>{item.count}</div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.month}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {Object.keys(stats.subjectBreakdown).length > 0 && (
          <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
              <BarChart3 style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: '600' }}>Subject Breakdown</span>
            </div>
            <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {Object.entries(stats.subjectBreakdown).map(([subject, count]) => (
                <span key={subject} className="badge badge-primary">
                  {subject}: {count}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {mistakes.length} mistake{mistakes.length !== 1 ? 's' : ''} recorded
            {Object.keys(explanations).length > 0 && ` • ${Object.keys(explanations).length} explained with AI`}
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <button
              onClick={handleExportPDF}
              className="btn btn-primary"
              disabled={mistakes.length === 0 || exporting}
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              {exporting ? (
                <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Exporting...</>
              ) : (
                <><Download style={{ width: '16px', height: '16px' }} /> Export PDF</>
              )}
            </button>
            <button
              onClick={handleClearAll}
              className="btn btn-danger"
              disabled={mistakes.length === 0}
              style={{ fontSize: 'var(--font-size-sm)', background: 'var(--color-danger)', color: 'white' }}
            >
              <Trash2 style={{ width: '16px', height: '16px' }} /> Clear All
            </button>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <div style={{ flex: 1, minWidth: '180px', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search mistakes..."
              className="input"
              style={{ paddingLeft: 'var(--space-10)' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Subjects</option>
            {Object.keys(SUBJECTS).map((key) => (
              <option key={key} value={key}>{SUBJECTS[key].label}</option>
            ))}
          </select>
        </div>

        {filteredMistakes.length === 0 ? (
          <div className="empty-card">
            <div className="icon"><PartyPopper style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
            <div className="title">{search ? 'No Matching Mistakes' : 'No Mistakes Yet'}</div>
            <div className="desc">{search ? 'Try a different search term.' : 'Keep practicing and you will learn from your mistakes!'}</div>
            <div className="action">
              <button className="btn btn-primary" onClick={() => navigate('/practice')}>Start Practicing</button>
            </div>
          </div>
        ) : (
          <div className="stack" style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {filteredMistakes.map((mistake, index) => {
              const isExplaining = explaining === mistake.id
              const aiExplanation = explanations[mistake.id]
              const hasExplanation = !!aiExplanation
              const isError = aiExplanation?.error

              return (
                <div key={index} className="card" style={{ cursor: 'default' }}>
                  <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{mistake.question || 'Unknown question'}</div>
                      <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Your answer: <span style={{ color: 'var(--color-danger)', fontWeight: '700' }}>{mistake.userAnswer || 'N/A'}</span></span>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Correct: <span style={{ color: 'var(--color-success)', fontWeight: '700' }}>{mistake.answer || mistake.correctAnswer || 'N/A'}</span></span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{mistake.topic || 'General'}</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{mistake.subject || 'General'}</span>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>{formatDate(mistake.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-2)', flexShrink: 0 }}>
                      <button
                        onClick={() => handleAIExplain(mistake)}
                        className={`btn ${hasExplanation ? (isExplaining ? 'btn-primary' : 'btn-outline') : 'btn-ghost'}`}
                        style={{ fontSize: 'var(--font-size-sm)' }}
                        disabled={explaining === mistake.id && !hasExplanation}
                      >
                        {explaining === mistake.id && !hasExplanation ? (
                          <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-1)' }}></div> AI...</>
                        ) : (
                          <><Brain style={{ width: '14px', height: '14px' }} /> {hasExplanation ? (isExplaining ? 'Hide' : 'Explain') : 'Explain with AI'}</>
                        )}
                      </button>
                    </div>
                  </div>

                  {hasExplanation && isExplaining && (
                    <div className={`card ${isError ? 'danger-card' : 'info-card'}`} style={{ marginTop: 'var(--space-3)', padding: 'var(--space-4)' }}>
                      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                        {isError ? (
                          <AlertCircle style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0, color: 'var(--color-danger)' }} />
                        ) : (
                          <Brain style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0, color: 'var(--color-primary)' }} />
                        )}
                        <div style={{ flex: 1 }}>
                          {aiExplanation?.explanation && (
                            <div style={{ whiteSpace: 'pre-wrap', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                              {aiExplanation.explanation}
                            </div>
                          )}
                          {aiExplanation?.why_wrong && (
                            <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)', 
                                          background: 'var(--color-danger-light)', borderRadius: 'var(--radius)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-danger)' }}>Why You Were Wrong</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                {aiExplanation.why_wrong}
                              </div>
                            </div>
                          )}
                          {aiExplanation?.shortcut && (
                            <div style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)',
                                          background: 'var(--color-primary-light)', borderRadius: 'var(--radius)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: '600', color: 'var(--color-primary)' }}>Quick Tip</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                {aiExplanation.shortcut}
                              </div>
                            </div>
                          )}
                          {aiExplanation?.keyConcept && (
                            <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)' }}>
                              Key concept: {aiExplanation.keyConcept}
                            </div>
                          )}
                          {aiExplanation?.tips && aiExplanation.tips.length > 0 && (
                            <div style={{ marginTop: 'var(--space-2)', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border)' }}>
                              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: '600' }}>Tips:</div>
                              <ul style={{ margin: 'var(--space-1) 0 0 var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                {aiExplanation.tips.map((tip, i) => (
                                  <li key={i}>{tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {aiExplanation?.correct_answer && (
                            <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-success)' }}>
                              Correct answer: <strong>{aiExplanation.correct_answer}</strong>
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
// REVISION PLANNER PAGE — TASK MANAGER FOR LEARNING
// ============================================================
export function RevisionPlannerPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const STORAGE_KEY = 'hyelearner_revision_planner_v2'
  
  const getDefaultData = () => ({
    tasks: [],
    dailyLogs: {},
    templates: [
      {
        id: 'template_jamb',
        name: '📚 JAMB Prep',
        tasks: [
          { title: 'Mathematics Practice', estimatedTime: 30, subject: 'Mathematics' },
          { title: 'English Comprehension', estimatedTime: 20, subject: 'English Language' },
          { title: 'Physics Problems', estimatedTime: 45, subject: 'Physics' },
          { title: 'Chemistry Revision', estimatedTime: 30, subject: 'Chemistry' }
        ]
      },
      {
        id: 'template_waec',
        name: '📚 WAEC Prep',
        tasks: [
          { title: 'Mathematics Practice', estimatedTime: 30, subject: 'Mathematics' },
          { title: 'English Grammar', estimatedTime: 20, subject: 'English Language' },
          { title: 'Science Revision', estimatedTime: 45, subject: 'Biology' }
        ]
      },
      {
        id: 'template_daily',
        name: '📘 Daily Study',
        tasks: [
          { title: 'Subject 1 Practice', estimatedTime: 30, subject: 'General' },
          { title: 'Subject 2 Practice', estimatedTime: 30, subject: 'General' },
          { title: 'Subject 3 Practice', estimatedTime: 30, subject: 'General' }
        ]
      },
      {
        id: 'template_weekend',
        name: '🔥 Weekend Marathon',
        tasks: [
          { title: 'Mathematics Practice', estimatedTime: 60, subject: 'Mathematics' },
          { title: 'English Essay Practice', estimatedTime: 45, subject: 'English Language' },
          { title: 'Physics Revision', estimatedTime: 60, subject: 'Physics' },
          { title: 'Chemistry Practice', estimatedTime: 45, subject: 'Chemistry' },
          { title: 'Biology Revision', estimatedTime: 45, subject: 'Biology' }
        ]
      }
    ],
    settings: {
      pomodoro: { focusTime: 25, shortBreak: 5, longBreak: 15, longBreakInterval: 4 },
      dailyGoal: 4,
      autoReset: true,
      examDate: null
    },
    stats: {
      totalTasksCompleted: 0,
      totalTimeStudied: 0,
      currentStreak: 0,
      longestStreak: 0,
      totalFocusSessions: 0,
      subjectBreakdown: {}
    },
    achievements: [],
    timerState: {
      isRunning: false,
      isPaused: false,
      timeRemaining: 0,
      taskId: null,
      elapsedSeconds: 0
    }
  })

  const generateId = () => `task_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
  const getToday = () => new Date().toISOString().split('T')[0]

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const [view, setView] = useState('today')
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedTasks, setSelectedTasks] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showTimerModal, setShowTimerModal] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [exporting, setExporting] = useState(false)
  
  const [formData, setFormData] = useState({
    title: '',
    subject: 'General',
    topic: 'General',
    priority: 'medium',
    estimatedTime: 30,
    dueDate: '',
    notes: '',
    tags: ''
  })
  
  const [timerState, setTimerState] = useState({
    isRunning: false,
    isPaused: false,
    timeRemaining: 0,
    taskId: null,
    elapsedSeconds: 0,
    mode: 'focus'
  })
  const timerIntervalRef = useRef(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setData({ ...getDefaultData(), ...parsed })
      } else {
        setData(getDefaultData())
      }
    } catch (e) {
      console.error('Failed to load revision planner data:', e)
      setData(getDefaultData())
    }
    setLoading(false)
  }, [])

  const saveData = useCallback((newData) => {
    setData(newData)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
    } catch (e) {
      console.error('Failed to save revision planner data:', e)
    }
  }, [])

  useEffect(() => {
    if (!data) return
    if (!data.settings?.autoReset) return
    
    const today = getToday()
    const lastReset = localStorage.getItem('hyelearner_revision_last_reset')
    
    if (lastReset !== today) {
      const updatedTasks = data.tasks.map(task => {
        if (task.recurring && task.recurring.enabled) {
          if (task.completed && task.completedAt) {
            const completedDate = task.completedAt.split('T')[0]
            if (completedDate !== today) {
              return { ...task, completed: false, completedAt: null }
            }
          }
          if (!task.completed && task.dueDate && task.dueDate !== today) {
            return { ...task, dueDate: today }
          }
        }
        return task
      })
      
      const todayLog = data.dailyLogs?.[today] || {
        date: today,
        tasksCompleted: 0,
        tasksTotal: 0,
        timeStudied: 0,
        focusSessions: 0
      }
      
      const todayTasks = updatedTasks.filter(t => {
        if (!t.dueDate) return true
        return t.dueDate === today || !t.dueDate
      })
      todayLog.tasksTotal = todayTasks.length
      
      const newData = {
        ...data,
        tasks: updatedTasks,
        dailyLogs: {
          ...data.dailyLogs,
          [today]: todayLog
        }
      }
      
      localStorage.setItem('hyelearner_revision_last_reset', today)
      saveData(newData)
    }
  }, [data, saveData])

  const addTask = () => {
    if (!formData.title.trim()) return
    
    const newTask = {
      id: generateId(),
      title: formData.title.trim(),
      subject: formData.subject || 'General',
      topic: formData.topic || 'General',
      priority: formData.priority || 'medium',
      estimatedTime: parseInt(formData.estimatedTime) || 30,
      timeSpent: 0,
      completed: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
      dueDate: formData.dueDate || null,
      notes: formData.notes || '',
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
      recurring: { enabled: false, frequency: 'daily', interval: 1, endDate: null },
      timerSessions: 0,
      timerHistory: []
    }
    
    const newData = {
      ...data,
      tasks: [...data.tasks, newTask]
    }
    
    const today = getToday()
    const dailyLog = newData.dailyLogs?.[today] || {
      date: today,
      tasksCompleted: 0,
      tasksTotal: 0,
      timeStudied: 0,
      focusSessions: 0
    }
    dailyLog.tasksTotal = (dailyLog.tasksTotal || 0) + 1
    newData.dailyLogs = {
      ...newData.dailyLogs,
      [today]: dailyLog
    }
    
    saveData(newData)
    setFormData({
      title: '',
      subject: 'General',
      topic: 'General',
      priority: 'medium',
      estimatedTime: 30,
      dueDate: '',
      notes: '',
      tags: ''
    })
    setShowAddModal(false)
  }

  const editTask = (taskId) => {
    const task = data.tasks.find(t => t.id === taskId)
    if (!task) return
    
    setEditingTask(taskId)
    setFormData({
      title: task.title,
      subject: task.subject || 'General',
      topic: task.topic || 'General',
      priority: task.priority || 'medium',
      estimatedTime: task.estimatedTime || 30,
      dueDate: task.dueDate || '',
      notes: task.notes || '',
      tags: (task.tags || []).join(', ')
    })
    setShowAddModal(true)
  }

  const updateTask = () => {
    if (!editingTask || !formData.title.trim()) return
    
    const newData = {
      ...data,
      tasks: data.tasks.map(task => {
        if (task.id === editingTask) {
          return {
            ...task,
            title: formData.title.trim(),
            subject: formData.subject || 'General',
            topic: formData.topic || 'General',
            priority: formData.priority || 'medium',
            estimatedTime: parseInt(formData.estimatedTime) || 30,
            dueDate: formData.dueDate || null,
            notes: formData.notes || '',
            tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : []
          }
        }
        return task
      })
    }
    
    saveData(newData)
    setFormData({
      title: '',
      subject: 'General',
      topic: 'General',
      priority: 'medium',
      estimatedTime: 30,
      dueDate: '',
      notes: '',
      tags: ''
    })
    setEditingTask(null)
    setShowAddModal(false)
  }

  const deleteTask = (taskId) => {
    if (!confirm('Delete this task?')) return
    
    const newData = {
      ...data,
      tasks: data.tasks.filter(t => t.id !== taskId)
    }
    saveData(newData)
  }

  const toggleTask = (taskId) => {
    const today = getToday()
    const newData = {
      ...data,
      tasks: data.tasks.map(task => {
        if (task.id === taskId) {
          const completed = !task.completed
          return {
            ...task,
            completed,
            completedAt: completed ? new Date().toISOString() : null
          }
        }
        return task
      })
    }
    
    const dailyLog = newData.dailyLogs?.[today] || {
      date: today,
      tasksCompleted: 0,
      tasksTotal: 0,
      timeStudied: 0,
      focusSessions: 0
    }
    
    const completedTasks = newData.tasks.filter(t => t.completed && t.completedAt?.split('T')[0] === today)
    dailyLog.tasksCompleted = completedTasks.length
    
    newData.dailyLogs = {
      ...newData.dailyLogs,
      [today]: dailyLog
    }
    
    const stats = newData.stats || {}
    stats.totalTasksCompleted = newData.tasks.filter(t => t.completed).length
    
    let streak = 0
    let date = new Date(today)
    while (true) {
      const dateStr = date.toISOString().split('T')[0]
      const log = newData.dailyLogs?.[dateStr]
      if (log && log.tasksCompleted > 0) {
        streak++
        date.setDate(date.getDate() - 1)
      } else {
        break
      }
    }
    stats.currentStreak = streak
    if (streak > (stats.longestStreak || 0)) {
      stats.longestStreak = streak
    }
    
    newData.stats = stats
    saveData(newData)
  }

  const bulkAction = (action) => {
    if (selectedTasks.length === 0) return
    
    const newData = { ...data }
    
    if (action === 'complete') {
      newData.tasks = data.tasks.map(task => {
        if (selectedTasks.includes(task.id)) {
          return { ...task, completed: true, completedAt: new Date().toISOString() }
        }
        return task
      })
    } else if (action === 'delete') {
      if (!confirm(`Delete ${selectedTasks.length} tasks?`)) return
      newData.tasks = data.tasks.filter(t => !selectedTasks.includes(t.id))
    } else if (action === 'high' || action === 'medium' || action === 'low') {
      newData.tasks = data.tasks.map(task => {
        if (selectedTasks.includes(task.id)) {
          return { ...task, priority: action }
        }
        return task
      })
    }
    
    saveData(newData)
    setSelectedTasks([])
  }

  const startTimer = (taskId) => {
    const task = data.tasks.find(t => t.id === taskId)
    if (!task) return
    
    const focusTime = data.settings?.pomodoro?.focusTime || 25
    
    setTimerState({
      isRunning: true,
      isPaused: false,
      timeRemaining: focusTime * 60,
      taskId: taskId,
      elapsedSeconds: 0,
      mode: 'focus'
    })
    setShowTimerModal(true)
  }

  const pauseTimer = () => {
    setTimerState(prev => ({
      ...prev,
      isRunning: false,
      isPaused: true
    }))
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
    }
  }

  const resumeTimer = () => {
    setTimerState(prev => ({
      ...prev,
      isRunning: true,
      isPaused: false
    }))
  }

  const stopTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
    }
    
    if (timerState.taskId) {
      const elapsed = Math.round(timerState.elapsedSeconds / 60)
      if (elapsed > 0) {
        const newData = {
          ...data,
          tasks: data.tasks.map(task => {
            if (task.id === timerState.taskId) {
              return {
                ...task,
                timeSpent: (task.timeSpent || 0) + elapsed,
                timerSessions: (task.timerSessions || 0) + 1,
                timerHistory: [
                  ...(task.timerHistory || []),
                  { date: new Date().toISOString(), duration: elapsed, completed: true }
                ]
              }
            }
            return task
          })
        }
        
        const stats = newData.stats || {}
        stats.totalTimeStudied = (stats.totalTimeStudied || 0) + elapsed
        stats.totalFocusSessions = (stats.totalFocusSessions || 0) + 1
        
        const task = data.tasks.find(t => t.id === timerState.taskId)
        if (task) {
          const subject = task.subject || 'General'
          if (!stats.subjectBreakdown) stats.subjectBreakdown = {}
          if (!stats.subjectBreakdown[subject]) {
            stats.subjectBreakdown[subject] = { time: 0, tasks: 0 }
          }
          stats.subjectBreakdown[subject].time += elapsed
        }
        
        const today = getToday()
        const dailyLog = newData.dailyLogs?.[today] || {
          date: today,
          tasksCompleted: 0,
          tasksTotal: 0,
          timeStudied: 0,
          focusSessions: 0
        }
        dailyLog.timeStudied = (dailyLog.timeStudied || 0) + elapsed
        dailyLog.focusSessions = (dailyLog.focusSessions || 0) + 1
        
        newData.dailyLogs = {
          ...newData.dailyLogs,
          [today]: dailyLog
        }
        
        newData.stats = stats
        saveData(newData)
      }
    }
    
    setTimerState({
      isRunning: false,
      isPaused: false,
      timeRemaining: 0,
      taskId: null,
      elapsedSeconds: 0,
      mode: 'focus'
    })
    setShowTimerModal(false)
  }

  useEffect(() => {
    if (timerState.isRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerState(prev => {
          if (prev.timeRemaining <= 0) {
            clearInterval(timerIntervalRef.current)
            return { ...prev, isRunning: false }
          }
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
            elapsedSeconds: prev.elapsedSeconds + 1
          }
        })
      }, 1000)
    }
    
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [timerState.isRunning])

  const applyTemplate = (template) => {
    const newTasks = template.tasks.map(t => ({
      id: generateId(),
      title: t.title,
      subject: t.subject || 'General',
      topic: 'General',
      priority: 'medium',
      estimatedTime: t.estimatedTime || 30,
      timeSpent: 0,
      completed: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
      dueDate: getToday(),
      notes: '',
      tags: [],
      recurring: { enabled: false, frequency: 'daily', interval: 1, endDate: null },
      timerSessions: 0,
      timerHistory: []
    }))
    
    const newData = {
      ...data,
      tasks: [...data.tasks, ...newTasks]
    }
    
    const today = getToday()
    const dailyLog = newData.dailyLogs?.[today] || {
      date: today,
      tasksCompleted: 0,
      tasksTotal: 0,
      timeStudied: 0,
      focusSessions: 0
    }
    dailyLog.tasksTotal = (dailyLog.tasksTotal || 0) + newTasks.length
    
    newData.dailyLogs = {
      ...newData.dailyLogs,
      [today]: dailyLog
    }
    
    saveData(newData)
    setShowTemplates(false)
  }

  const handleExportPDF = () => {
    if (!data || data.tasks.length === 0) {
      alert('No tasks to export.')
      return
    }

    setExporting(true)
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      let y = margin

      doc.setFontSize(20)
      doc.setTextColor(79, 70, 229)
      doc.text('Hyelearner — Revision Planner', pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(`Generated: ${formatDate(new Date(), 'long')}`, pageWidth / 2, y, { align: 'center' })
      y += 8

      const examDate = data.settings?.examDate
      if (examDate) {
        const days = calculateDaysRemaining(examDate)
        doc.text(`Days until exam: ${days}`, pageWidth / 2, y, { align: 'center' })
        y += 8
      }

      const today = getToday()
      const dailyLog = data.dailyLogs?.[today] || { tasksCompleted: 0, tasksTotal: 0, timeStudied: 0 }
      doc.text(`Today: ${dailyLog.tasksCompleted}/${dailyLog.tasksTotal} tasks done • ${dailyLog.timeStudied || 0}m studied`, pageWidth / 2, y, { align: 'center' })
      y += 10

      doc.setDrawColor(200, 200, 200)
      doc.line(margin, y, pageWidth - margin, y)
      y += 8

      doc.setFontSize(12)
      doc.setTextColor(50, 50, 50)
      
      const pendingTasks = data.tasks.filter(t => !t.completed)
      const completedTasks = data.tasks.filter(t => t.completed)

      if (pendingTasks.length > 0) {
        doc.text('Pending Tasks', margin, y)
        y += 7
        doc.setFontSize(9)
        doc.setTextColor(80, 80, 80)
        pendingTasks.forEach((task, i) => {
          if (y + 10 > pageHeight - margin) {
            doc.addPage()
            y = margin
          }
          const prioritySymbol = task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'
          doc.text(`${prioritySymbol} ${task.title} (${task.estimatedTime}m)`, margin + 2, y)
          y += 6
        })
        y += 4
      }

      if (completedTasks.length > 0) {
        doc.setFontSize(12)
        doc.setTextColor(50, 50, 50)
        doc.text('Completed Tasks', margin, y)
        y += 7
        doc.setFontSize(9)
        doc.setTextColor(80, 80, 80)
        completedTasks.slice(0, 10).forEach((task, i) => {
          if (y + 10 > pageHeight - margin) {
            doc.addPage()
            y = margin
          }
          doc.text(`✅ ${task.title}`, margin + 2, y)
          y += 6
        })
        if (completedTasks.length > 10) {
          doc.text(`... and ${completedTasks.length - 10} more`, margin + 2, y)
          y += 6
        }
      }

      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text('Generated by Hyelearner — Revision Planner', pageWidth / 2, pageHeight - 10, { align: 'center' })

      doc.save(`revision-planner-${new Date().toISOString().slice(0,10)}.pdf`)
    } catch (error) {
      console.error('PDF export failed:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  const getFilteredTasks = () => {
    if (!data) return []
    
    let tasks = [...data.tasks]
    
    const today = getToday()
    if (view === 'today') {
      tasks = tasks.filter(t => {
        if (!t.dueDate) return true
        return t.dueDate === today || t.dueDate < today
      })
    }
    
    if (filter === 'pending') {
      tasks = tasks.filter(t => !t.completed)
    } else if (filter === 'completed') {
      tasks = tasks.filter(t => t.completed)
    } else if (filter === 'high' || filter === 'medium' || filter === 'low') {
      tasks = tasks.filter(t => t.priority === filter)
    }
    
    if (selectedSubject !== 'all') {
      tasks = tasks.filter(t => t.subject === selectedSubject)
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      tasks = tasks.filter(t => 
        t.title.toLowerCase().includes(query) ||
        t.subject.toLowerCase().includes(query) ||
        t.topic.toLowerCase().includes(query) ||
        t.notes.toLowerCase().includes(query)
      )
    }
    
    tasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1
      if (!a.completed && b.completed) return -1
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
    
    return tasks
  }

  const getStats = () => {
    if (!data) return null
    
    const today = getToday()
    const dailyLog = data.dailyLogs?.[today] || { tasksCompleted: 0, tasksTotal: 0, timeStudied: 0, focusSessions: 0 }
    const totalTasks = data.tasks.length
    const completedTasks = data.tasks.filter(t => t.completed).length
    
    return {
      today: dailyLog,
      total: { tasks: totalTasks, completed: completedTasks, pending: totalTasks - completedTasks },
      streak: data.stats?.currentStreak || 0,
      longestStreak: data.stats?.longestStreak || 0,
      totalTime: data.stats?.totalTimeStudied || 0,
      totalSessions: data.stats?.totalFocusSessions || 0
    }
  }

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const examDate = data?.settings?.examDate

  useEffect(() => {
    if (!examDate) return
    
    const interval = setInterval(() => {
      const target = new Date(examDate)
      const now = new Date()
      const diff = target - now
      
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setCountdown({ days, hours, minutes, seconds })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [examDate])

  if (loading) {
    return <LoadingScreen />
  }

  const filteredTasks = getFilteredTasks()
  const stats = getStats()
  const today = getToday()

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-teal-light)' }}>
              <Calendar style={{ width: '20px', height: '20px', color: 'var(--color-teal)' }} />
            </div>
            <div>
              <h1 className="h2">Revision Planner</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Manage your study tasks
                {examDate && (
                  <span style={{ marginLeft: 'var(--space-2)', color: 'var(--color-primary)', fontWeight: '600' }}>
                    ⏱️ {countdown.days}d {String(countdown.hours).padStart(2, '0')}h {String(countdown.minutes).padStart(2, '0')}m {String(countdown.seconds).padStart(2, '0')}s
                  </span>
                )}
              </p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {stats && (
          <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-primary)' }}>
                {stats.today.tasksCompleted}/{stats.today.tasksTotal}
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Today's Progress</div>
              <div className="progress" style={{ marginTop: 'var(--space-1)', height: '4px' }}>
                <div className="progress-fill progress-fill-primary" style={{ 
                  width: `${stats.today.tasksTotal > 0 ? (stats.today.tasksCompleted / stats.today.tasksTotal) * 100 : 0}%` 
                }} />
              </div>
            </div>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-warning)' }}>
                <Flame style={{ width: '24px', height: '24px', display: 'inline' }} /> {stats.streak}
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Day Streak</div>
            </div>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-success)' }}>
                {stats.total.tasks}
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Tasks</div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {stats.total.completed} done • {stats.total.pending} pending
              </div>
            </div>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-secondary)' }}>
                {Math.floor(stats.totalTime / 60)}h {stats.totalTime % 60}m
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total Study Time</div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {stats.totalSessions} sessions
              </div>
            </div>
          </div>
        )}

        <div className="card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="flex" style={{ gap: 'var(--space-1)' }}>
              <button
                onClick={() => setView('today')}
                className={`btn ${view === 'today' ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
              >
                Today
              </button>
              <button
                onClick={() => setView('weekly')}
                className={`btn ${view === 'weekly' ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
              >
                Weekly
              </button>
            </div>

            <div style={{ width: '1px', height: '24px', background: 'var(--color-border)' }} />

            <div style={{ flex: 1, minWidth: '150px', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: 'var(--space-2)', top: '50%', transform: 'translateY(-50%)', width: '14px', height: '14px', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search tasks..."
                className="input"
                style={{ paddingLeft: 'var(--space-7)', fontSize: 'var(--font-size-sm)' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', minWidth: '120px' }}
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>

            <select
              className="select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', minWidth: '120px' }}
            >
              <option value="all">All Subjects</option>
              {Object.keys(SUBJECTS).map(key => (
                <option key={key} value={SUBJECTS[key].label}>{SUBJECTS[key].label}</option>
              ))}
            </select>

            <button
              onClick={() => setShowTemplates(true)}
              className="btn btn-outline"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              <CopyIcon style={{ width: '14px', height: '14px' }} /> Templates
            </button>
            <button
              onClick={handleExportPDF}
              disabled={exporting}
              className="btn btn-primary"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              {exporting ? <Loader2 className="animate-spin" style={{ width: '14px', height: '14px' }} /> : <Download style={{ width: '14px', height: '14px' }} />}
              {exporting ? 'Exporting...' : 'Export'}
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn btn-primary"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              <Plus style={{ width: '14px', height: '14px' }} /> Add Task
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                {view === 'today' ? "Today's Tasks" : 'Weekly Tasks'}
              </span>
              <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                {filteredTasks.length} tasks
              </span>
            </div>
            {selectedTasks.length > 0 && (
              <div className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {selectedTasks.length} selected
                </span>
                <button onClick={() => bulkAction('complete')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}>
                  <Check style={{ width: '12px', height: '12px' }} />
                </button>
                <button onClick={() => bulkAction('high')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}>
                  🔴
                </button>
                <button onClick={() => bulkAction('medium')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', color: 'var(--color-warning)' }}>
                  🟡
                </button>
                <button onClick={() => bulkAction('low')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', color: 'var(--color-success)' }}>
                  🟢
                </button>
                <button onClick={() => bulkAction('delete')} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}>
                  <Trash2 style={{ width: '12px', height: '12px' }} />
                </button>
                <button onClick={() => setSelectedTasks([])} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}>
                  <X style={{ width: '12px', height: '12px' }} />
                </button>
              </div>
            )}
          </div>

          {filteredTasks.length === 0 ? (
            <div className="text-center" style={{ padding: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
              <div style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-2)' }}>📭</div>
              <p style={{ fontWeight: '500' }}>No tasks found</p>
              <p style={{ fontSize: 'var(--font-size-sm)' }}>
                {searchQuery ? 'Try adjusting your search' : 'Add a task to get started!'}
              </p>
            </div>
          ) : (
            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {filteredTasks.map((task) => {
                const isSelected = selectedTasks.includes(task.id)
                return (
                  <div
                    key={task.id}
                    className="card"
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      background: task.completed ? 'var(--color-success-light)' : 'var(--color-surface)',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      opacity: task.completed ? 0.7 : 1,
                      transition: 'all var(--transition)'
                    }}
                  >
                    <div className="flex-between" style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start', flex: 1 }}>
                        <button
                          onClick={() => toggleTask(task.id)}
                          className="flex-center"
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: 'var(--radius)',
                            border: '2px solid var(--color-primary)',
                            background: task.completed ? 'var(--color-primary)' : 'transparent',
                            color: task.completed ? 'white' : 'transparent',
                            cursor: 'pointer',
                            transition: 'all var(--transition)',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          {task.completed && <Check style={{ width: '14px', height: '14px' }} />}
                        </button>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{
                              fontWeight: task.completed ? '400' : '600',
                              textDecoration: task.completed ? 'line-through' : 'none',
                              color: task.completed ? 'var(--color-text-muted)' : 'var(--color-text)',
                              fontSize: 'var(--font-size-sm)'
                            }}>
                              {task.title}
                            </span>
                            <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                              {task.estimatedTime}m
                            </span>
                            {task.timeSpent > 0 && (
                              <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                                {task.timeSpent}m spent
                              </span>
                            )}
                            {task.completed && (
                              <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                                <CheckCircle2 style={{ width: '10px', height: '10px', display: 'inline' }} /> Done
                              </span>
                            )}
                          </div>
                          <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', flexWrap: 'wrap' }}>
                            <span>{task.subject}</span>
                            {task.topic && <span>• {task.topic}</span>}
                            <span>• {task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'} {task.priority}</span>
                            {task.dueDate && (
                              <span>• 📅 {task.dueDate === today ? 'Today' : formatDate(task.dueDate, 'short')}</span>
                            )}
                            {task.tags && task.tags.length > 0 && (
                              <span>• 🏷️ {task.tags.join(', ')}</span>
                            )}
                          </div>
                          {task.notes && (
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                              📝 {task.notes}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex" style={{ gap: 'var(--space-1)', flexShrink: 0 }}>
                        {!task.completed && (
                          <button
                            onClick={() => startTimer(task.id)}
                            className="btn btn-ghost"
                            style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-xs)' }}
                            title="Start Timer"
                          >
                            <Timer style={{ width: '16px', height: '16px' }} />
                          </button>
                        )}
                        <button
                          onClick={() => editTask(task.id)}
                          className="btn btn-ghost"
                          style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-xs)' }}
                        >
                          <Edit style={{ width: '14px', height: '14px' }} />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="btn btn-ghost"
                          style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-danger)' }}
                        >
                          <Trash2 style={{ width: '14px', height: '14px' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="card" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)' }}>
          <div className="flex-between" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            <span>📊 {data?.tasks?.length || 0} total tasks • {data?.tasks?.filter(t => t.completed).length || 0} completed</span>
            <span>💾 Saved locally • {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: '480px', padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>
                {editingTask ? 'Edit Task' : 'Add New Task'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false)
                  setEditingTask(null)
                  setFormData({
                    title: '',
                    subject: 'General',
                    topic: 'General',
                    priority: 'medium',
                    estimatedTime: 30,
                    dueDate: '',
                    notes: '',
                    tags: ''
                  })
                }}
                className="btn btn-ghost"
                style={{ padding: 'var(--space-1)' }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <div>
                <label className="label">Task Title *</label>
                <input
                  type="text"
                  className="input"
                  placeholder="What do you want to study?"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label">Subject</label>
                  <select
                    className="select"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  >
                    <option value="General">General</option>
                    {Object.keys(SUBJECTS).map(key => (
                      <option key={key} value={SUBJECTS[key].label}>{SUBJECTS[key].label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Topic</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g., Algebra"
                    value={formData.topic}
                    onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label">Priority</label>
                  <select
                    className="select"
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                  >
                    <option value="high">🔴 High</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="low">🟢 Low</option>
                  </select>
                </div>
                <div>
                  <label className="label">Estimated Time (minutes)</label>
                  <input
                    type="number"
                    className="input"
                    min="5"
                    max="180"
                    value={formData.estimatedTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, estimatedTime: parseInt(e.target.value) || 30 }))}
                  />
                </div>
              </div>

              <div>
                <label className="label">Due Date (optional)</label>
                <input
                  type="date"
                  className="input"
                  value={formData.dueDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                />
              </div>

              <div>
                <label className="label">Notes (optional)</label>
                <textarea
                  className="input"
                  placeholder="Add notes or resources..."
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div>
                <label className="label">Tags (comma separated)</label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g., exam-prep, revision, hard"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                />
              </div>

              <button
                onClick={editingTask ? updateTask : addTask}
                disabled={!formData.title.trim()}
                className="btn btn-primary flex-center"
                style={{ width: '100%', padding: 'var(--space-3)' }}
              >
                {editingTask ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showTimerModal && timerState.taskId && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: '400px', padding: 'var(--space-6)', textAlign: 'center' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>⏱️ Study Timer</h3>
              <button onClick={stopTimer} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            <div style={{ fontSize: 'var(--font-size-6xl)', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', padding: 'var(--space-4)' }}>
              {Math.floor(timerState.timeRemaining / 60)}:{String(timerState.timeRemaining % 60).padStart(2, '0')}
            </div>

            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
              {data?.tasks?.find(t => t.id === timerState.taskId)?.title || 'No task selected'}
            </div>

            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', marginBottom: 'var(--space-3)' }}>
              {!timerState.isRunning && !timerState.isPaused && (
                <button onClick={() => startTimer(timerState.taskId)} className="btn btn-primary flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Play style={{ width: '20px', height: '20px' }} /> Start
                </button>
              )}
              {timerState.isRunning && (
                <button onClick={pauseTimer} className="btn btn-warning flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Pause style={{ width: '20px', height: '20px' }} /> Pause
                </button>
              )}
              {timerState.isPaused && (
                <button onClick={resumeTimer} className="btn btn-primary flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Play style={{ width: '20px', height: '20px' }} /> Resume
                </button>
              )}
              {(timerState.isRunning || timerState.isPaused) && (
                <button onClick={stopTimer} className="btn btn-danger flex-center" style={{ padding: 'var(--space-3) var(--space-6)' }}>
                  <Square style={{ width: '20px', height: '20px' }} /> Stop
                </button>
              )}
            </div>

            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              {timerState.elapsedSeconds > 0 && (
                <span>⏱️ {Math.floor(timerState.elapsedSeconds / 60)}m {timerState.elapsedSeconds % 60}s elapsed</span>
              )}
            </div>
          </div>
        </div>
      )}

      {showTemplates && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: '500px', padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h3" style={{ margin: 0 }}>📋 Templates</h3>
              <button onClick={() => setShowTemplates(false)} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {data?.templates?.map((template) => (
                <button
                  key={template.id}
                  onClick={() => applyTemplate(template)}
                  className="card card-hover"
                  style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'left', cursor: 'pointer' }}
                >
                  <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>{template.name}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {template.tasks.length} tasks • {template.tasks.reduce((sum, t) => sum + t.estimatedTime, 0)}m total
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-1)', flexWrap: 'wrap' }}>
                    {template.tasks.slice(0, 3).map((t, i) => (
                      <span key={i} className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                        {t.title}
                      </span>
                    ))}
                    {template.tasks.length > 3 && (
                      <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                        +{template.tasks.length - 3} more
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowTemplates(false)}
              className="btn btn-outline flex-center"
              style={{ width: '100%', marginTop: 'var(--space-3)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================
// DUO BATTLE PAGE — CONNECTED TO API + Public Lobby + Active Users
// ============================================================
export function DuoBattlePage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('lobby')
  const [roomCode, setRoomCode] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [questionCount, setQuestionCount] = useState(10)
  const [timeLimit, setTimeLimit] = useState(300)
  const [matchId, setMatchId] = useState(null)
  const [opponent, setOpponent] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [battleStatus, setBattleStatus] = useState('waiting')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showHistory, setShowHistory] = useState(false)
  const [duelHistory, setDuelHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)
  const [statusCheckInterval, setStatusCheckInterval] = useState(null)
  const [status, setStatus] = useState(null)

  const [isPublic, setIsPublic] = useState(false)
  const [publicDuels, setPublicDuels] = useState([])
  const [activeUsers, setActiveUsers] = useState(0)
  const [loadingLobby, setLoadingLobby] = useState(false)

  // ============================================================
  // QUESTION LOADER
  // ============================================================

  const generateFallbackQuestions = (subjectName, count = 10) => {
    const qs = []
    const difficulties = ['easy', 'medium', 'hard']
    for (let i = 0; i < count; i++) {
      qs.push({
        id: `q${i+1}`,
        question: `${subjectName} practice question ${i+1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: 'Option A',
        explanation: `Explanation for question ${i+1}.`,
        difficulty: difficulties[i % 3],
        topic: topic || 'General',
        subject: subjectName,
      })
    }
    return qs
  }

  const loadAllQuestionsForSubject = async (subjectKey, count = 30) => {
    const allQuestions = []
    const questionFiles = import.meta.glob('../data/questions/**/*.js')
    
    for (const [path, importFn] of Object.entries(questionFiles)) {
      if (path.includes(`/${subjectKey}/`)) {
        try {
          const module = await importFn()
          if (module.default && Array.isArray(module.default)) {
            allQuestions.push(...module.default)
          }
        } catch (e) {
          console.error(`Failed to load ${path}:`, e)
        }
      }
    }
    if (allQuestions.length === 0) {
      return generateFallbackQuestions(SUBJECTS[subjectKey]?.label || subjectKey, count)
    }
    const shuffled = shuffleArray(allQuestions)
    return shuffled.slice(0, Math.min(count, shuffled.length))
  }

  const loadQuestionsForTopic = async (subjectLabel, topicLabel, count = 10) => {
    try {
      const subjectKey = Object.keys(SUBJECTS).find(
        key => SUBJECTS[key].label === subjectLabel
      )
      if (!subjectKey) {
        console.warn(`Subject "${subjectLabel}" not found, using fallback`)
        return generateFallbackQuestions(subjectLabel, count)
      }

      const subtopics = SUBJECTS[subjectKey]?.subtopics
      if (!subtopics) {
        console.warn(`No subtopics defined for ${subjectKey}, loading all questions`)
        return loadAllQuestionsForSubject(subjectKey, count)
      }

      let filesToLoad = []
      const normalizedTopic = topicLabel.toLowerCase().replace(/\s+/g, '_')
      
      const matchedKey = Object.keys(subtopics).find(
        key => key.toLowerCase().replace(/\s+/g, '_') === normalizedTopic
      )
      if (matchedKey) {
        filesToLoad = subtopics[matchedKey]
      } else {
        filesToLoad = [topicLabel.toLowerCase().replace(/\s+/g, '_')]
      }

      const questionFiles = import.meta.glob('../data/questions/**/*.js')
      const allQuestions = []

      for (const file of filesToLoad) {
        for (const [path, importFn] of Object.entries(questionFiles)) {
          if (path.includes(`/${file}.js`)) {
            try {
              const module = await importFn()
              if (module.default && Array.isArray(module.default)) {
                allQuestions.push(...module.default)
                console.log(`✅ Loaded ${module.default.length} questions from ${path}`)
              }
            } catch (err) {
              console.warn(`Failed to load ${path}:`, err.message)
            }
          }
        }
      }

      if (allQuestions.length === 0) {
        console.warn(`No questions found for topic "${topicLabel}", using fallback`)
        return generateFallbackQuestions(subjectLabel, count)
      }

      const shuffled = shuffleArray(allQuestions)
      const result = shuffled.slice(0, Math.min(count, shuffled.length))
      console.log(`✅ Total questions loaded: ${result.length}`)
      return result
    } catch (error) {
      console.error('Failed to load questions:', error)
      return generateFallbackQuestions(subjectLabel, count)
    }
  }

  // ============================================================
  // LOAD LOBBY DATA
  // ============================================================
  useEffect(() => {
    loadLobbyData()
  }, [])

  const loadLobbyData = async () => {
    setLoadingLobby(true)
    try {
      const [active, lobby] = await Promise.all([
        duels.getActiveUsers().catch(() => ({ count: 0, users: [] })),
        duels.getPublicDuels().catch(() => ({ duels: [], total_public_duels: 0 }))
      ])
      setActiveUsers(active.count || 0)
      setPublicDuels(lobby.duels || [])
    } catch (err) {
      console.error('Failed to load lobby:', err)
    } finally {
      setLoadingLobby(false)
    }
  }

  // ============================================================
  // SUBJECT OPTIONS
  // ============================================================
  const subjectOptions = Object.keys(SUBJECTS).map(key => SUBJECTS[key].label)
  const topics = {}
  Object.keys(SUBJECTS).forEach(key => {
    topics[SUBJECTS[key].label] = SUBJECTS[key].topics || []
  })

  // ============================================================
  // HANDLE ANSWER
  // ============================================================
  const handleAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }))
  }

  // ============================================================
  // CREATE ROOM — WITH FRONTEND QUESTION LOADING
  // ============================================================
  const handleCreateRoom = async () => {
    if (!subject) {
      setError('Please select a subject')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const loadedQuestions = await loadQuestionsForTopic(subject, topic, questionCount)
      
      if (!loadedQuestions || loadedQuestions.length === 0) {
        setError(`No questions available for ${subject}${topic ? ` - ${topic}` : ''}`)
        setLoading(false)
        return
      }

      const result = await duels.create({
        subject,
        topic: topic || 'All Topics',
        questionCount: loadedQuestions.length,
        timeLimit,
        is_public: isPublic,
        questions: loadedQuestions.map(q => ({
          id: q.id,
          question: q.question,
          options: q.options,
          answer: q.answer,
          topic: q.topic || 'General',
          subject: q.subject || subject,
          difficulty: q.difficulty || 'medium',
          explanation: q.explanation || ''
        }))
      })

      setRoomCode(result.code)
      setMatchId(result.id)
      setQuestions(loadedQuestions)
      setMode('waiting')
      startStatusPolling(result.id)
      loadLobbyData()
    } catch (err) {
      setError(err.message || 'Failed to create room')
      console.error('Create room error:', err)
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // JOIN PUBLIC DUEL
  // ============================================================
  const handleJoinPublic = async (duelId) => {
    setLoading(true)
    setError(null)
    try {
      const result = await duels.joinPublic(duelId)
      
      if (!result.questions || result.questions.length === 0) {
        setError('No questions received from the duel.')
        setLoading(false)
        return
      }
      
      setMatchId(result.duel_id)
      setOpponent(result.challenger || 'Opponent')
      setQuestions(result.questions)
      setMode('battle')
      setBattleStatus('active')
      setTimeLeft(result.time_limit || timeLimit)
      if (statusCheckInterval) clearInterval(statusCheckInterval)
    } catch (err) {
      setError(err.message || 'Failed to join duel')
      console.error('Join public error:', err)
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // JOIN ROOM BY CODE
  // ============================================================
  const handleJoinRoom = async () => {
    if (!roomCode || roomCode.length < 6) {
      setError('Please enter a valid room code')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const result = await duels.join(roomCode)
      
      if (!result.questions || result.questions.length === 0) {
        setError('No questions received from the duel.')
        setLoading(false)
        return
      }
      
      setMatchId(result.duel_id)
      setOpponent(result.challenger || result.opponent)
      setQuestions(result.questions)
      setMode('battle')
      setBattleStatus('active')
      setTimeLeft(result.time_limit || timeLimit)
      if (statusCheckInterval) clearInterval(statusCheckInterval)
    } catch (err) {
      setError(err.message || 'Failed to join room')
      console.error('Join room error:', err)
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // SUBMIT BATTLE
  // ============================================================
  const handleSubmitBattle = async () => {
    const total = questions.length
    const answered = Object.keys(answers).length
    if (answered < total) {
      if (!confirm(`You've answered ${answered}/${total}. Submit anyway?`)) return
    }
    setLoading(true)
    setError(null)
    try {
      const result = await duels.submit(matchId, answers)
      setResults({
        correct: result.correct,
        total: result.total,
        accuracy: result.accuracy,
        winner: result.winner === 'You' ? 'You' : 'Opponent'
      })
      setBattleStatus('completed')
      if (statusCheckInterval) clearInterval(statusCheckInterval)
      loadLobbyData()
    } catch (err) {
      setError(err.message || 'Failed to submit duel')
      console.error('Submit duel error:', err)
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // HISTORY
  // ============================================================
  const fetchDuelHistory = async () => {
    setHistoryLoading(true)
    try {
      const history = await duels.history()
      setDuelHistory(history)
      setShowHistory(true)
    } catch (err) {
      console.error('Failed to fetch duel history:', err)
      setError('Failed to load duel history.')
    } finally {
      setHistoryLoading(false)
    }
  }

  // ============================================================
  // STATUS POLLING
  // ============================================================
  const startStatusPolling = (duelId) => {
    if (statusCheckInterval) clearInterval(statusCheckInterval)
    const interval = setInterval(async () => {
      try {
        const statusData = await duels.status(duelId)
        setStatus(statusData)
        if (statusData.status === 'active' && mode === 'waiting') {
          await handleJoinRoom()
        }
        if (statusData.status === 'completed' && mode === 'waiting') {
          setError('The duel has already ended.')
          if (statusCheckInterval) clearInterval(statusCheckInterval)
        }
      } catch (err) {
        console.error('Status check error:', err)
      }
    }, 3000)
    setStatusCheckInterval(interval)
  }

  // ============================================================
  // CLEANUP
  // ============================================================
  useEffect(() => {
    return () => {
      if (statusCheckInterval) clearInterval(statusCheckInterval)
    }
  }, [statusCheckInterval])

  // ============================================================
  // REMATCH
  // ============================================================
  const handleRematch = () => {
    setMode('lobby')
    setRoomCode('')
    setSubject('')
    setTopic('')
    setQuestions([])
    setAnswers({})
    setResults(null)
    setMatchId(null)
    setOpponent(null)
    setBattleStatus('waiting')
    setCurrentIndex(0)
    setError(null)
    if (statusCheckInterval) clearInterval(statusCheckInterval)
  }

  // ============================================================
  // RENDER: WAITING ROOM
  // ============================================================
  if (mode === 'waiting') {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <button className="btn btn-ghost" onClick={() => { setMode('lobby'); if (statusCheckInterval) clearInterval(statusCheckInterval) }} style={{ marginBottom: 'var(--space-6)' }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>

          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
              <Users style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Waiting for Opponent</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>Share this code with a friend:</p>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--color-primary)', letterSpacing: '0.1em', background: 'var(--color-primary-light)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-primary)' }}>
              {roomCode}
            </div>
            <button onClick={() => navigator.clipboard.writeText(roomCode)} className="btn btn-ghost" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              <Copy style={{ width: '14px', height: '14px' }} /> Copy code
            </button>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-3)', background: 'var(--color-background)', borderRadius: 'var(--radius)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner spinner-sm"></div>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Waiting for opponent to join...</span>
              </div>
              {status && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                  Status: {status.players} players connected • Time left: {status.timeLeft}s
                </div>
              )}
            </div>

            <button onClick={() => { setMode('lobby'); if (statusCheckInterval) clearInterval(statusCheckInterval) }} className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // RENDER: HISTORY
  // ============================================================
  if (showHistory) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
                <History style={{ width: '20px', height: '20px', color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <h1 className="h2">Duel History</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your past battles</p>
              </div>
            </div>
            <button className="btn btn-ghost" onClick={() => setShowHistory(false)}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>

          {historyLoading ? (
            <div className="flex-center" style={{ minHeight: '200px' }}>
              <div className="spinner spinner-lg"></div>
            </div>
          ) : duelHistory.length === 0 ? (
            <div className="empty-card">
              <div className="icon"><Swords style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
              <div className="title">No Duels Yet</div>
              <div className="desc">Challenge a friend and start your first battle!</div>
              <div className="action">
                <button className="btn btn-primary" onClick={() => setShowHistory(false)}>Go Back</button>
              </div>
            </div>
          ) : (
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {duelHistory.map((duel, i) => (
                <div key={i} className="card flex-between">
                  <div>
                    <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>vs {duel.opponent}</div>
                    <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                      <span>{duel.subject}</span>
                      <span>•</span>
                      <span>{formatDate(duel.date)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontWeight: '700', color: duel.winner ? 'var(--color-success)' : 'var(--color-danger)' }}>
                      {duel.accuracy}%
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {duel.winner ? 'Won' : 'Lost'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // ============================================================
  // RENDER: RESULTS
  // ============================================================
  if (mode === 'battle' && results) {
    const isWinner = results.winner === 'You'
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')} style={{ marginBottom: 'var(--space-6)' }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>

          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <div style={{ fontSize: 'var(--font-size-5xl)', marginBottom: 'var(--space-4)' }}>
              {isWinner ? <Trophy style={{ width: '64px', height: '64px', margin: '0 auto', color: 'var(--color-warning)' }} /> : <Swords style={{ width: '64px', height: '64px', margin: '0 auto', color: 'var(--color-danger)' }} />}
            </div>
            <h3 className="h2" style={{ marginBottom: 'var(--space-4)' }}>{isWinner ? 'You Won!' : 'Better Luck Next Time!'}</h3>
            <div className="grid-2" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div className="stat-card text-center">
                <div className="h2" style={{ color: 'var(--color-primary)' }}>{results.accuracy}%</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your Accuracy</div>
              </div>
              <div className="stat-card text-center">
                <div className="h2" style={{ color: 'var(--color-text-muted)' }}>VS</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Opponent</div>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <button onClick={handleRematch} className="btn btn-primary flex-1 flex-center">
                <Swords style={{ width: '16px', height: '16px' }} /> Rematch
              </button>
              <button onClick={() => navigate('/dashboard')} className="btn btn-outline flex-1 flex-center">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // RENDER: ACTIVE BATTLE
  // ============================================================
  if (mode === 'battle') {
    const currentQuestion = questions[currentIndex]
    const total = questions.length
    const answeredCount = Object.keys(answers).length

    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')} style={{ marginBottom: 'var(--space-6)' }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Exit
          </button>

          <div className="card flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
                <Swords style={{ width: '20px', height: '20px', color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <h1 className="h2">Duo Battle</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{subject}</p>
              </div>
            </div>
            <div className="flex-center" style={{ 
              padding: 'var(--space-2) var(--space-4)', 
              borderRadius: 'var(--radius-xl)',
              background: timeLeft < 60 ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
              color: timeLeft < 60 ? 'var(--color-danger)' : 'var(--color-primary)',
              fontWeight: '700',
              fontSize: 'var(--font-size-lg)',
              fontFamily: 'var(--font-mono)',
              animation: timeLeft < 60 ? 'pulse 1s infinite' : 'none'
            }}>
              <ClockIcon style={{ width: '16px', height: '16px', marginRight: 'var(--space-2)' }} />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-3) var(--space-4)' }}>
            <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', color: 'var(--color-text-secondary)' }}>
              <Users style={{ width: '16px', height: '16px' }} />
              Opponent
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', color: 'var(--color-success)' }}>
              <CheckCircle2 style={{ width: '16px', height: '16px' }} />
              Ready
            </span>
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
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Question {currentIndex + 1}</div>
              <div className="h3" style={{ marginBottom: 'var(--space-4)' }}>{currentQuestion.question}</div>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                {currentQuestion.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx)
                  const isSelected = answers[currentQuestion.id] === letter
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(currentQuestion.id, letter)}
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
              <button className="btn btn-success" onClick={handleSubmitBattle} disabled={loading}>
                {loading ? <div className="spinner spinner-sm"></div> : <><CheckCircle2 style={{ width: '16px', height: '16px' }} /> Submit Duel</>}
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

  // ============================================================
  // RENDER: LOBBY
  // ============================================================
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
              <Swords style={{ width: '20px', height: '20px', color: 'var(--color-secondary)' }} />
            </div>
            <div>
              <h1 className="h2">Duo Battle</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Challenge a friend to a duel</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              <Users style={{ width: '14px', height: '14px' }} /> {activeUsers} online
            </span>
            <button onClick={fetchDuelHistory} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)' }}>
              <History style={{ width: '16px', height: '16px' }} /> History
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle style={{ width: '16px', height: '16px' }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="card" style={{ maxWidth: '480px', margin: '0 auto', padding: 'var(--space-8)' }}>
          <div className="stack" style={{ gap: 'var(--space-4)' }}>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: '600', color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Plus style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                Create Room
              </div>

              <div style={{ marginBottom: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => setIsPublic(false)}
                    className={`btn ${!isPublic ? 'btn-primary' : 'btn-outline'}`}
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    <Lock style={{ width: '14px', height: '14px' }} /> Private
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPublic(true)}
                    className={`btn ${isPublic ? 'btn-primary' : 'btn-outline'}`}
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    <Unlock style={{ width: '14px', height: '14px' }} /> Public
                  </button>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {isPublic ? 'Appears in lobby' : 'Share code'}
                  </span>
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ marginBottom: 'var(--space-1)' }}>Subject</label>
                  <select
                    className="select"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value); setTopic('') }}
                  >
                    <option value="">Choose</option>
                    {subjectOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label" style={{ marginBottom: 'var(--space-1)' }}>Topic</label>
                  <select
                    className="select"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    disabled={!subject}
                  >
                    <option value="">Choose</option>
                    {subject && (topics[subject] || []).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid-2" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ marginBottom: 'var(--space-1)' }}>Questions</label>
                  <select
                    className="select"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                  >
                    {[5, 10, 15, 20].map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label" style={{ marginBottom: 'var(--space-1)' }}>Time Limit</label>
                  <select
                    className="select"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                  >
                    <option value={120}>2 min</option>
                    <option value={300}>5 min</option>
                    <option value={600}>10 min</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleCreateRoom}
                disabled={!subject || loading}
                className="btn btn-primary flex-center"
                style={{ width: '100%', marginTop: 'var(--space-3)' }}
              >
                {loading ? (
                  <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Creating...</>
                ) : (
                  <><Plus style={{ width: '16px', height: '16px' }} /> {isPublic ? 'Create Public Room' : 'Create Private Room'}</>
                )}
              </button>
            </div>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: '600', color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Users style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                Join Private Room
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)' }}>
                <input
                  className="input"
                  placeholder="Enter room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  maxLength={6}
                  style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}
                />
                <button
                  onClick={handleJoinRoom}
                  disabled={roomCode.length < 6 || loading}
                  className="btn btn-primary"
                >
                  {loading ? <div className="spinner spinner-sm"></div> : 'Join'}
                </button>
              </div>
            </div>

            <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: '600', color: 'var(--color-text)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Globe style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                Public Lobby ({publicDuels.length} active)
                <button 
                  onClick={loadLobbyData} 
                  className="btn btn-ghost" 
                  style={{ padding: 'var(--space-1)', fontSize: 'var(--font-size-xs)' }}
                  disabled={loadingLobby}
                >
                  <RefreshCw style={{ width: '12px', height: '12px' }} />
                </button>
              </div>
              {loadingLobby ? (
                <div className="flex-center" style={{ padding: 'var(--space-4)' }}>
                  <div className="spinner spinner-sm"></div>
                </div>
              ) : publicDuels.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  No public duels available. Create one!
                </div>
              ) : (
                <div className="stack" style={{ gap: 'var(--space-2)' }}>
                  {publicDuels.map((duel) => (
                    <div key={duel.duel_id} className="card flex-between" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)' }}>
                      <div>
                        <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                          {duel.challenger} wants to duel
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          {duel.subject} {duel.topic ? `• ${duel.topic}` : ''} • {duel.question_count} questions
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          ⏱️ {duel.time_limit}s • {duel.created_ago}
                        </div>
                      </div>
                      <button
                        onClick={() => handleJoinPublic(duel.duel_id)}
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                      >
                        {loading ? <div className="spinner spinner-sm"></div> : 'Join'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}