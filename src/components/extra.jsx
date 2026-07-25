// ============================================================
// HYELEARNER: FOUNDATION — EXTRA COMPONENTS
// Parent Dashboard (CHILD APP ONLY), Course Finder, Cut-off Tracker, Bookmarks, Settings
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { formatDate } from '../utils'
import { SUBJECTS, COUNTRIES, EXAM_TYPES } from '../constants'

import {
  Users,
  User,
  Clock,
  Calendar,
  BarChart3,
  BookOpen,
  GraduationCap,
  LineChart,
  Star,
  Settings,
  LogOut,
  Moon,
  Sun,
  Bell,
  BellOff,
  Brain,
  Sparkles,
  CreditCard,
  Award,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Link,
  Link2,
  Copy,
  Download,
  RefreshCw,
  Wifi,
  WifiOff,
  Database,
  Cloud,
  Zap,
  Lock,
  Edit,
  Search,
  Trash2,
  BookMarked,
  School,
  Globe,
  AlertTriangle,
  Mail,
  UserCircle,
  Unlink,
  Info
} from 'lucide-react'

// ============================================================
// PARENT DASHBOARD — CHILD APP ONLY
// Shows: Generate Code → Share with Parent → Stats + Unlink
// ============================================================
export function ParentDashboard({ 
  studentData = null, 
  onGenerateCode, 
  onLinkCode, 
  onUnlink,
  className = '' 
}) {
  const { user } = useAuth()
  const [linkCode, setLinkCode] = useState('')
  const [linked, setLinked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [enteredCode, setEnteredCode] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_parent_link')
    if (saved) {
      const data = JSON.parse(saved)
      setLinked(data.linked || false)
    }
  }, [])

  const handleGenerateCode = async () => {
    setLoading(true)
    try {
      const code = await onGenerateCode?.() || Math.random().toString(36).substring(2, 8).toUpperCase()
      setLinkCode(code)
      setLinked(false)
    } catch (err) {
      console.error('Failed to generate code:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLinkCode = async () => {
    if (!enteredCode || enteredCode.length < 6) return
    setLoading(true)
    try {
      await onLinkCode?.(enteredCode)
      setLinked(true)
      localStorage.setItem('hyelearner_parent_link', JSON.stringify({ linked: true, code: enteredCode }))
    } catch (err) {
      console.error('Failed to link:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleUnlink = async () => {
    if (!confirm('This will disconnect your account from your parent. Continue?')) return
    setLoading(true)
    try {
      await onUnlink?.()
      setLinked(false)
      localStorage.removeItem('hyelearner_parent_link')
    } catch (err) {
      console.error('Failed to unlink:', err)
    } finally {
      setLoading(false)
    }
  }

  // ===== NOT LINKED — Show Generate Code =====
  if (!linked) {
    return (
      <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-2)' }}>
          <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
            <Link2 style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
          </div>
          <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>Connect with Parent</h3>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Generate a code for your parent to link and track your progress.
          </p>
        </div>
        
        <div className="card" style={{ border: '2px dashed var(--color-primary)', padding: 'var(--space-5)' }}>
          <button
            onClick={handleGenerateCode}
            disabled={loading}
            className="btn btn-primary flex-center"
            style={{ width: '100%', padding: 'var(--space-3)' }}
          >
            {loading ? (
              <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Generating...</>
            ) : (
              <><Link2 style={{ width: '18px', height: '18px' }} /> Generate Code</>
            )}
          </button>

          {linkCode && (
            <div className="card" style={{ marginTop: 'var(--space-4)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)', textAlign: 'center' }}>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>
                Share this code with your parent:
              </div>
              <div style={{ 
                fontSize: 'var(--font-size-4xl)', 
                fontFamily: 'var(--font-mono)', 
                fontWeight: '700', 
                color: 'var(--color-primary)', 
                letterSpacing: '0.1em',
                padding: 'var(--space-2)'
              }}>
                {linkCode}
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(linkCode)}
                className="btn btn-primary"
                style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}
              >
                <Copy style={{ width: '14px', height: '14px' }} /> Copy Code
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="info-card" style={{ padding: 'var(--space-3)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <Info style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0, color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Your parent can use this code to connect and view your progress.
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ===== LINKED — Show Stats + Unlink =====
  const student = studentData || {
    name: 'John Doe',
    streak: 7,
    xp: 1234,
    level: 12,
    accuracy: 78,
    school: 'UNILAG',
    exam: 'JAMB',
    subscription: { plan: 'Foundation', status: 'active', expires: '2026-08-01' },
    studyTime: { today: 2, week: 12, month: 45 },
    subjects: [
      { name: 'Mathematics', readiness: 78 },
      { name: 'Physics', readiness: 65 },
      { name: 'Chemistry', readiness: 52 },
      { name: 'English', readiness: 82 },
    ],
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* Connected Message */}
      <div className="success-card" style={{ padding: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
          <CheckCircle2 style={{ width: '32px', height: '32px', color: 'var(--color-success)' }} />
          <div>
            <div style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>
              Connected to {student.name}
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              Your parent can now view your progress.
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid-3" style={{ gap: 'var(--space-3)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-warning)' }}>{student.streak}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Day Streak</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)' }}>{student.xp}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Total XP</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: student.accuracy >= 70 ? 'var(--color-success)' : 'var(--color-warning)' }}>
            {student.accuracy}%
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Accuracy</div>
        </div>
      </div>

      {/* Subject Readiness */}
      <div className="card">
        <div style={{ fontWeight: '500', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <TrendingUp style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Subject Readiness
        </div>
        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          {student.subjects.map((subject) => (
            <div key={subject.name}>
              <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                <span style={{ color: 'var(--color-text)' }}>{subject.name}</span>
                <span style={{ color: subject.readiness >= 70 ? 'var(--color-success)' : subject.readiness >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                  {subject.readiness}%
                </span>
              </div>
              <div className="progress">
                <div className={`progress-fill ${subject.readiness >= 70 ? 'progress-fill-success' : subject.readiness >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`} style={{ width: `${subject.readiness}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlink Button */}
      <div className="card text-center" style={{ border: '2px dashed var(--color-danger)', padding: 'var(--space-4)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}>
          <Unlink style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />
          <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>Disconnect Parent</span>
        </div>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
          This will disconnect your account from your parent.
        </p>
        <button
          onClick={handleUnlink}
          disabled={loading}
          className="btn btn-danger"
          style={{ marginTop: 'var(--space-2)' }}
        >
          {loading ? <Loader2 className="spinner" style={{ width: '16px', height: '16px' }} /> : 'Unlink Parent'}
        </button>
      </div>
    </div>
  )
}

// ============================================================
// COURSE FINDER
// ============================================================
export function CourseFinder({ onSearch, courses = [], loading = false, className = '' }) {
  const [score, setScore] = useState('')
  const [subjects, setSubjects] = useState(['', '', '', ''])
  const [results, setResults] = useState(courses)

  const subjectOptions = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Economics']

  const handleSearch = async () => {
    if (!score || subjects.some(s => !s)) {
      alert('Please fill in all fields.')
      return
    }
    const data = await onSearch?.({ score: Number(score), subjects })
    if (data) setResults(data)
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'safe': return 'var(--color-success)'
      case 'competitive': return 'var(--color-warning)'
      case 'highly_competitive': return 'var(--color-danger)'
      default: return 'var(--color-text-muted)'
    }
  }

  const getRiskLabel = (risk) => {
    switch (risk) {
      case 'safe': return 'Safe'
      case 'competitive': return 'Competitive'
      case 'highly_competitive': return 'Highly Competitive'
      default: return 'Unknown'
    }
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Find your perfect university course.</p>

      <div>
        <label className="label">JAMB Score</label>
        <input
          type="number"
          className="input"
          placeholder="e.g., 250"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="100"
          max="400"
        />
      </div>

      <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <label className="label">Subject {i + 1}</label>
            <select
              className="select"
              value={subjects[i]}
              onChange={(e) => {
                const newSubjects = [...subjects]
                newSubjects[i] = e.target.value
                setSubjects(newSubjects)
              }}
            >
              <option value="">Select</option>
              {subjectOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        onClick={handleSearch}
        disabled={loading}
        className="btn btn-primary flex-center"
        style={{ width: '100%' }}
      >
        {loading ? (
          <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Searching...</>
        ) : (
          <><Search style={{ width: '16px', height: '16px' }} /> Find Courses</>
        )}
      </button>

      {results.length > 0 && (
        <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '300px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
          {results.map((course, i) => (
            <div key={i} className="card card-hover" style={{ cursor: 'default' }}>
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{course.name}</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{course.university}</div>
                </div>
                <div className="text-right">
                  <div style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{course.cutoff}</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: getRiskColor(course.risk) }}>
                    {getRiskLabel(course.risk)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================================
// CUT-OFF TRACKER
// ============================================================
export function CutoffTracker({ onSearch, history = null, loading = false, className = '' }) {
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')

  const universities = ['UNILAG', 'UI', 'UNIBEN', 'FUTA', 'LASU']
  const courses = ['Computer Science', 'Medicine', 'Law', 'Engineering', 'Accounting']

  const handleSearch = () => {
    if (!university || !course) return
    onSearch?.(university, course)
  }

  if (history) {
    const isRising = history.data?.length > 1 && history.data[history.data.length - 1].value > history.data[0].value

    return (
      <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
        <div className="card">
          <div style={{ fontWeight: '500', marginBottom: 'var(--space-2)' }}>{history.university} — {history.course}</div>
          <div className="stack" style={{ gap: 'var(--space-2)' }}>
            {history.data?.map((item, i) => (
              <div key={i} className="flex-between">
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{item.year}</span>
                <span style={{ fontWeight: '700', color: i === history.data.length - 1 ? 'var(--color-primary)' : 'var(--color-text)' }}>
                  {item.value}
                  {i > 0 && item.value > history.data[i-1].value && (
                    <span style={{ color: 'var(--color-success)', marginLeft: 'var(--space-1)' }}>↑</span>
                  )}
                  {i > 0 && item.value < history.data[i-1].value && (
                    <span style={{ color: 'var(--color-danger)', marginLeft: 'var(--space-1)' }}>↓</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={`card text-center ${history.risk === 'highly_competitive' ? 'danger-card' : 'warning-card'}`}>
          <div style={{ fontWeight: '700' }}>
            Prediction: {history.prediction} ({isRising ? 'Rising' : 'Stable'})
          </div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {history.risk === 'highly_competitive' ? 'Highly Competitive' : 'Competitive'}
          </div>
        </div>

        <button onClick={() => window.location.reload()} className="btn btn-outline flex-center" style={{ width: '100%' }}>
          <Search style={{ width: '16px', height: '16px' }} /> Search Again
        </button>
      </div>
    )
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Track university cut-off marks.</p>

      <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
        <div>
          <label className="label">University</label>
          <select className="select" value={university} onChange={(e) => setUniversity(e.target.value)}>
            <option value="">Select</option>
            {universities.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Course</label>
          <select className="select" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        disabled={!university || !course || loading}
        className="btn btn-primary flex-center"
        style={{ width: '100%' }}
      >
        {loading ? (
          <>
            <div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div>
            Loading...
          </>
        ) : (
          <>
            <Search style={{ width: '16px', height: '16px' }} /> Search
          </>
        )}
      </button>
    </div>
  )
}

// ============================================================
// BOOKMARKS
// ============================================================
export function Bookmarks({ bookmarks = [], onRemove, onRetry, className = '' }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = bookmarks.filter((b) => {
    const matchesFilter = filter === 'all' || b.targetType === filter
    const matchesSearch = (b.title || b.targetId || '')
      .toLowerCase()
      .includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const total = bookmarks.length

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      <div className="flex-between">
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          {total} bookmark{total !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '150px', position: 'relative' }}>
          <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search bookmarks..."
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
          <option value="all">All</option>
          <option value="question">Questions</option>
          <option value="lesson">Lessons</option>
          <option value="topic">Topics</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-card text-center">
          <div className="icon"><Star style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
          <div className="title">{search || filter !== 'all' ? 'No Matching Bookmarks' : 'No Bookmarks Yet'}</div>
          <div className="desc">{search || filter !== 'all' ? 'Try a different search.' : 'Save questions and lessons you want to revisit.'}</div>
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
          {filtered.map((bookmark) => (
            <div key={bookmark.id} className="card flex-between">
              <div>
                <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{bookmark.title || bookmark.targetId}</div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {bookmark.targetType} • {bookmark.topic || 'General'}
                  {bookmark.subject && ` • ${bookmark.subject}`}
                </div>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)' }}>
                {bookmark.targetType === 'question' && (
                  <button onClick={() => onRetry?.(bookmark)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                    Retry
                  </button>
                )}
                <button onClick={() => onRemove?.(bookmark.id)} className="btn btn-danger" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                  <Trash2 style={{ width: '14px', height: '14px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================================
// SETTINGS
// ============================================================
export function Settings({ user, onUpdateProfile, onLogout, onUpdateSubjects, className = '' }) {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [studyReminders, setStudyReminders] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_settings')
    if (saved) {
      const settings = JSON.parse(saved)
      setDarkMode(settings.darkMode || false)
      setNotifications(settings.notifications !== false)
      setStudyReminders(settings.studyReminders !== false)
    }
  }, [])

  const handleToggle = (key, value) => {
    const settings = { darkMode, notifications, studyReminders, [key]: value }
    localStorage.setItem('hyelearner_settings', JSON.stringify(settings))
    if (key === 'darkMode') {
      setDarkMode(value)
      document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light')
    }
    if (key === 'notifications') setNotifications(value)
    if (key === 'studyReminders') setStudyReminders(value)
  }

  const subjectOptions = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology']
  const selectedSubjects = user?.subjects || subjectOptions.slice(0, 4)

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-6)' }}>
      {/* Profile */}
      <div>
        <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <User style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Profile
        </h3>
        <div className="card flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)', fontWeight: '700' }}>
            {user?.firstName?.[0] || 'U'}
          </div>
          <div>
            <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{user?.firstName} {user?.lastName}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{user?.email}</div>
          </div>
        </div>
        <button onClick={() => onUpdateProfile?.(user)} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
          <Edit style={{ width: '14px', height: '14px' }} /> Edit Profile
        </button>
      </div>

      {/* Preferences */}
      <div>
        <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Sparkles style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Preferences
        </h3>
        <div className="stack" style={{ gap: 'var(--space-3)' }}>
          <label className="card flex-between" style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              {darkMode ? <Moon style={{ width: '16px', height: '16px' }} /> : <Sun style={{ width: '16px', height: '16px' }} />}
              Dark Mode
            </span>
            <input type="checkbox" checked={darkMode} onChange={(e) => handleToggle('darkMode', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
          </label>
          <label className="card flex-between" style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              {notifications ? <Bell style={{ width: '16px', height: '16px' }} /> : <BellOff style={{ width: '16px', height: '16px' }} />}
              Notifications
            </span>
            <input type="checkbox" checked={notifications} onChange={(e) => handleToggle('notifications', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
          </label>
          <label className="card flex-between" style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Calendar style={{ width: '16px', height: '16px' }} />
              Study Reminders
            </span>
            <input type="checkbox" checked={studyReminders} onChange={(e) => handleToggle('studyReminders', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
          </label>
        </div>
      </div>

      {/* Subjects */}
      <div>
        <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Subjects
        </h3>
        <div className="card">
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {selectedSubjects.map((s) => (
              <span key={s} className="badge badge-primary">{s}</span>
            ))}
          </div>
          <button onClick={() => onUpdateSubjects?.(selectedSubjects)} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
            Select Subjects
          </button>
        </div>
      </div>

      {/* AI Usage */}
      <div>
        <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Brain style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> AI Usage
        </h3>
        <div className="card">
          <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
            <span style={{ color: 'var(--color-text)' }}>Daily</span>
            <span style={{ color: 'var(--color-text-muted)' }}>8/10</span>
          </div>
          <div className="progress"><div className="progress-fill progress-fill-primary" style={{ width: '80%' }} /></div>
          <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-3)' }}>
            <span style={{ color: 'var(--color-text)' }}>Monthly</span>
            <span style={{ color: 'var(--color-text-muted)' }}>85/100</span>
          </div>
          <div className="progress"><div className="progress-fill progress-fill-primary" style={{ width: '85%' }} /></div>
        </div>
      </div>

      {/* Subscription */}
      <div>
        <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <CreditCard style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Subscription
        </h3>
        <div className="card flex-between">
          <div>
            <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>Foundation Plan</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Expires: 2026-08-01</div>
          </div>
          <div className="badge badge-success">Active</div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          <button className="btn btn-primary flex-1 flex-center">Upgrade</button>
          <button className="btn btn-outline flex-1 flex-center">Cancel</button>
        </div>
      </div>

      {/* Logout */}
      <button onClick={onLogout} className="btn btn-danger flex-center" style={{ width: '100%' }}>
        <LogOut style={{ width: '16px', height: '16px' }} /> Logout
      </button>
    </div>
  )
}