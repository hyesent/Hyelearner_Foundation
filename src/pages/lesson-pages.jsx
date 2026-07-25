// ============================================================
// HYELEARNER: FOUNDATION — LESSON PAGES
// Lessons list with search, filtering, and full lesson flow
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks'
import { storage } from '../storage'
import { subscriptions } from '../services'
import { SUBJECTS } from '../constants'
import { LessonCard, LessonViewer, LessonTest } from '../components/lesson'
import lessonIndex from '../data/lessons/index.js'

// ============================================================
// VITE GLOB — Pre-load all lesson files
// ============================================================
const lessonFiles = import.meta.glob('../data/lessons/**/*.js')

// Lucide Icons
import {
  ArrowLeft,
  BookOpen,
  Search,
  Filter,
  Loader2,
  Lock,
  Crown,
  PenTool,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Target,
  Zap,
  BookMarked,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Grid3x3,
  List,
  RefreshCw
} from 'lucide-react'

// ============================================================
// UPGRADE PROMO BANNER
// ============================================================
function UpgradePromoBanner({ onUpgrade }) {
  return (
    <div className="card" style={{ 
      padding: 'var(--space-6)',
      background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%)',
      border: '2px solid var(--color-primary)',
      marginBottom: 'var(--space-6)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'var(--color-primary)',
        opacity: '0.1'
      }} />
      <div style={{ 
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: 'var(--color-secondary)',
        opacity: '0.08'
      }} />
      
      <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <div className="flex-center" style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '50%', 
          background: 'var(--color-primary)',
          flexShrink: 0
        }}>
          <Crown style={{ width: '28px', height: '28px', color: 'white' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
            <h3 className="h3" style={{ margin: 0, color: 'var(--color-text)' }}>
              Unlock All Lessons
            </h3>
            <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
              <Zap style={{ width: '12px', height: '12px', display: 'inline' }} /> Recommended
            </span>
          </div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
            Get access to <strong>328+ lessons</strong> across 47 subjects. Master every topic with interactive lessons, practice tests, and detailed explanations.
          </p>
          <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
              <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> 328+ Lessons
            </span>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
              <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> 47 Subjects
            </span>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
              <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> Practice Tests
            </span>
            <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
              <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> Mastery Tracking
            </span>
          </div>
        </div>
        <button 
          onClick={onUpgrade}
          className="btn btn-primary btn-lg"
          style={{ 
            flexShrink: 0,
            padding: 'var(--space-2) var(--space-6)',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
          }}
        >
          <Crown style={{ width: '18px', height: '18px' }} /> Upgrade Now
        </button>
      </div>
    </div>
  )
}

// ============================================================
// LESSONS PAGE
// ============================================================
export function LessonsPage() {
  const navigate = useNavigate()
  const { updateProgress } = useProgress()
  
  // State
  const [lessons, setLessons] = useState([])
  const [filteredLessons, setFilteredLessons] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [masteryData, setMasteryData] = useState({})
  
  // Lesson view state
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [viewMode, setViewMode] = useState('list')
  const [lessonQuestions, setLessonQuestions] = useState([])
  const [lessonRead, setLessonRead] = useState(false)
  const [updating, setUpdating] = useState(false)

  // Subscription
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)

  // ============================================================
  // LOAD DATA
  // ============================================================
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const status = await subscriptions.status()
        setSubscription(status)

        const mastery = storage.getMastery()
        setMasteryData(mastery)

        const allLessons = []
        lessonIndex.subjects.forEach(subject => {
          subject.topics.forEach(topic => {
            if (topic.hasLesson !== false) {
              allLessons.push({
                id: `${subject.subject}-${topic.name}`.replace(/\s+/g, '_').toLowerCase(),
                name: topic.name,
                subject: subject.subject,
                category: subject.category,
                icon: subject.icon,
                file: topic.file,
                hasLesson: true,
                content: null,
                keyTerms: [],
                practice: [],
                assessment: null,
                objectives: [],
                videos: []
              })
            }
          })
        })

        setLessons(allLessons)
        setFilteredLessons(allLessons)
      } catch (error) {
        console.error('Failed to load lessons:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // ============================================================
  // FILTER LESSONS
  // ============================================================
  useEffect(() => {
    let filtered = [...lessons]

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(l => 
        l.name.toLowerCase().includes(query) ||
        l.subject.toLowerCase().includes(query)
      )
    }

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(l => l.subject === selectedSubject)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(l => l.category === selectedCategory)
    }

    setFilteredLessons(filtered)
  }, [searchQuery, selectedSubject, selectedCategory, lessons])

  // ============================================================
  // GET SUBJECTS AND CATEGORIES
  // ============================================================
  const subjects = ['all', ...new Set(lessons.map(l => l.subject))]
  const categories = ['all', ...new Set(lessons.map(l => l.category))]

  // ============================================================
  // GET LESSON MASTERY
  // ============================================================
  const getLessonMastery = (lessonName) => {
    const data = masteryData[lessonName]
    return data?.accuracy || 0
  }

  // ============================================================
  // LOAD LESSON CONTENT — FIXED for index.js structure
  // ============================================================
  const loadLessonContent = async (lesson) => {
    try {
      // The file property already contains the full path from lessons folder
      // Example: "core/mathematics/algebra/linear_equations.js"
      const filePattern = `../data/lessons/${lesson.file}`
      
      const importFn = lessonFiles[filePattern]
      
      if (!importFn) {
        console.warn(`Lesson file not found: ${filePattern}`)
        return {
          ...lesson,
          content: 'Content coming soon...',
          keyTerms: [],
          practice: [],
          assessment: null,
          objectives: [],
          videos: []
        }
      }

      const module = await importFn()
      const lessonData = module.default

      return {
        ...lesson,
        icon: lessonData.icon || lesson.icon || '📚',
        grade_level: lessonData.grade_level || null,
        estimated_duration: lessonData.estimated_duration || null,
        objectives: lessonData.objectives || [],
        videos: lessonData.videos || [],
        keyTerms: lessonData.keyTerms || [],
        content: lessonData.content || 'No content available.',
        practice: lessonData.practice || [],
        assessment: lessonData.assessment || null,
        raw: lessonData
      }
    } catch (error) {
      console.error('Failed to load lesson content:', error)
      return {
        ...lesson,
        content: 'Content coming soon...',
        keyTerms: [],
        practice: [],
        assessment: null,
        objectives: [],
        videos: []
      }
    }
  }

  // ============================================================
  // HANDLE LESSON CLICK
  // ============================================================
  const handleLessonClick = async (lesson) => {
    // Check if free user
    if (isFreeUser) {
      const banner = document.querySelector('.upgrade-banner')
      if (banner) banner.scrollIntoView({ behavior: 'smooth' })
      return
    }

    setLoading(true)
    try {
      const fullLesson = await loadLessonContent(lesson)
      setSelectedLesson(fullLesson)
      
      const mastery = getLessonMastery(lesson.name)
      setLessonRead(mastery > 0)
      
      setViewMode('read')
    } catch (error) {
      console.error('Failed to open lesson:', error)
      alert('Failed to load lesson. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // HANDLE MARK AS READ
  // ============================================================
  const handleMarkRead = async () => {
    if (!selectedLesson || lessonRead || updating) return
    setUpdating(true)

    try {
      updateProgress({
        type: 'lesson',
        subject: selectedLesson.subject,
        topic: selectedLesson.name,
        questions: [{ 
          id: selectedLesson.id, 
          question: selectedLesson.name, 
          answer: 'completed',
          topic: selectedLesson.name
        }],
        answers: { [selectedLesson.id]: 'completed' },
        timeTaken: 60,
        mode: 'Lesson Read'
      })

      const currentMastery = getLessonMastery(selectedLesson.name)
      const newMastery = Math.min(100, currentMastery + 10)
      storage.updateMastery(selectedLesson.name, newMastery, selectedLesson.subject)

      const mastery = storage.getMastery()
      setMasteryData(mastery)
      setLessonRead(true)

    } catch (error) {
      console.error('Failed to mark lesson as read:', error)
      alert('Failed to mark lesson as read. Please try again.')
    } finally {
      setUpdating(false)
    }
  }

  // ============================================================
  // HANDLE TAKE TEST
  // ============================================================
  const handleTakeTest = async () => {
    if (!selectedLesson) return
    setLoading(true)

    try {
      let lessonData = selectedLesson
      if (!lessonData.practice || lessonData.practice.length === 0) {
        lessonData = await loadLessonContent(selectedLesson)
        setSelectedLesson(lessonData)
      }

      const practiceQuestions = lessonData.practice || []

      if (practiceQuestions.length === 0) {
        alert('No practice questions available for this lesson yet.')
        setLoading(false)
        return
      }

      const questions = practiceQuestions.map(p => ({
        id: p.id,
        question: p.question,
        options: p.options || [],
        answer: p.answer || p.answer_key,
        explanation: p.explanation || '',
        topic: selectedLesson.name,
        difficulty: p.difficulty || 'medium'
      }))

      setLessonQuestions(questions)
      setViewMode('test')
    } catch (error) {
      console.error('Failed to start test:', error)
      alert('Failed to load test questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ============================================================
  // HANDLE TEST COMPLETE
  // ============================================================
  const handleTestComplete = (results) => {
    const mastery = storage.getMastery()
    setMasteryData(mastery)
    setLessonRead(true)
  }

  // ============================================================
  // HANDLE BACK
  // ============================================================
  const handleBack = () => {
    if (viewMode === 'read') {
      setViewMode('list')
      setSelectedLesson(null)
      setLessonRead(false)
    } else if (viewMode === 'test') {
      setViewMode('read')
      setLessonQuestions([])
    }
  }

  // ============================================================
  // HANDLE REFRESH
  // ============================================================
  const handleRefresh = () => {
    const mastery = storage.getMastery()
    setMasteryData(mastery)
  }

  // ============================================================
  // HANDLE UPGRADE
  // ============================================================
  const handleUpgrade = () => {
    navigate('/settings')
  }

  // ============================================================
  // RENDER
  // ============================================================
  const isFreeUser = !subscription?.isActive

  if (loading && viewMode === 'list') {
    return (
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <div className="spinner spinner-lg"></div>
      </div>
    )
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
          subject={selectedLesson.subject}
          topic={selectedLesson.name}
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
          loading={updating}
        />
      </div>
    )
  }

  // ============================================================
  // LIST VIEW
  // ============================================================
  const totalLessons = filteredLessons.length
  const masteredCount = filteredLessons.filter(l => getLessonMastery(l.name) >= 80).length

  return (
    <div className="container section">
      {/* Header */}
      <div className="flex-between card card-hover" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
            <BookOpen style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h1 className="h2">Lessons</h1>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              {totalLessons} lessons • {masteredCount} mastered
            </p>
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

      {/* Upgrade Banner */}
      {isFreeUser && (
        <div className="upgrade-banner">
          <UpgradePromoBanner onUpgrade={handleUpgrade} />
        </div>
      )}

      {/* Stats */}
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
          <div className="h2" style={{ color: 'var(--color-danger)' }}>
            {totalLessons - masteredCount}
          </div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Remaining</div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search lessons..."
              className="input"
              style={{ paddingLeft: 'var(--space-10)' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select
            className="select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{ minWidth: '140px' }}
          >
            <option value="all">All Subjects</option>
            {subjects.filter(s => s !== 'all').map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select
            className="select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ minWidth: '140px' }}
          >
            <option value="all">All Categories</option>
            {categories.filter(c => c !== 'all').map(c => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Lessons List */}
      {filteredLessons.length === 0 ? (
        <div className="empty-card">
          <div className="icon"><BookOpen style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
          <div className="title">No Lessons Found</div>
          <div className="desc">Try adjusting your search or filters</div>
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              mastery={getLessonMastery(lesson.name)}
              onClick={() => handleLessonClick(lesson)}
              index={index}
              isLocked={isFreeUser}
            />
          ))}
        </div>
      )}

      {/* Free user lock hint */}
      {isFreeUser && filteredLessons.length > 0 && (
        <div className="card text-center" style={{ 
          marginTop: 'var(--space-4)', 
          padding: 'var(--space-4)',
          background: 'var(--color-warning-light)',
          border: '1px dashed var(--color-warning)'
        }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
            <Lock style={{ width: '16px', height: '16px', color: 'var(--color-warning)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <strong>Free users</strong> can view lessons but need to <strong>upgrade</strong> to access full content and tests.
            </span>
            <button 
              onClick={handleUpgrade}
              className="btn btn-primary"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              <Crown style={{ width: '14px', height: '14px' }} /> Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  )
}