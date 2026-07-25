// ============================================================
// HYELEARNER: FOUNDATION — EXTRA PAGES (DYNAMIC DROPDOWNS)
// Parent Dashboard (Connection Only), Course Finder (NEW),
// Cut-off Tracker, Bookmarks, Settings (with Paystack subscription),
// Profile, Offline
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { formatDate } from '../utils'
import { SUBJECTS, COUNTRIES, EXAM_TYPES, AI_LIMITS } from '../constants'
import { career, parent, subscriptions } from '../services'
import { searchUniversities as localSearchUniversities } from '../data/universities/index.js'
import { COMMON_CUTOFFS, hasData, getCutoffData } from '../data/cutoffs/common'
import { LoadingScreen } from '../components/LoadingScreen'

import {
  ArrowLeft,
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
  Crown,
  Lock,
  Edit,
  Search,
  Trash2,
  BookMarked,
  School,
  Globe,
  Info,
  AlertTriangle,
  Mail,
  UserCircle,
  UserCog,
  ExternalLink,
  Shield,
  Building2,
  MapPin,
  GraduationCap as GraduationCapIcon,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  Rocket,
  Sparkles as SparklesIcon,
  Unlink,
  Plus
} from 'lucide-react'

// ============================================================
// PARENT DASHBOARD PAGE — CHILD APP (CONNECTION ONLY)
// ============================================================

export function ParentDashboardPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  // --- State ---
  const [loading, setLoading] = useState(true)
  const [linked, setLinked] = useState(false)
  const [studentData, setStudentData] = useState(null)
  const [linkCode, setLinkCode] = useState('')
  const [generating, setGenerating] = useState(false)
  const [unlinking, setUnlinking] = useState(false)
  const [error, setError] = useState(null)
  const [codeExpiry, setCodeExpiry] = useState(null)

  // --- Load connection status ---
  useEffect(() => {
    loadStatus()
  }, [])

  const loadStatus = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await parent.getStatus()
      
      // ✅ Backend returns { success, data: { linked, students } }
      if (result.success && result.data) {
        const status = result.data
        if (status.linked && status.students && status.students.length > 0) {
          setLinked(true)
          const analyticsResult = await parent.getStudentAnalytics(status.students[0].id)
          
          // ✅ Backend returns { success, data: { student } }
          if (analyticsResult.success && analyticsResult.data) {
            setStudentData(analyticsResult.data.student)
            localStorage.setItem('hyelearner_parent_link', JSON.stringify({
              linked: true,
              student: analyticsResult.data.student
            }))
          }
        }
      } else {
        // Fallback for direct response (no wrapper)
        if (result.linked && result.students && result.students.length > 0) {
          setLinked(true)
          const analyticsResult = await parent.getStudentAnalytics(result.students[0].id)
          if (analyticsResult.student) {
            setStudentData(analyticsResult.student)
          }
        }
      }
    } catch (err) {
      console.error('Failed to load parent status:', err)
      // Check localStorage fallback
      const saved = localStorage.getItem('hyelearner_parent_link')
      if (saved) {
        const data = JSON.parse(saved)
        if (data.linked) {
          setLinked(true)
          setStudentData(data.student)
        }
      }
    } finally {
      setLoading(false)
    }
  }

  // --- Generate code ---
  const handleGenerateCode = async () => {
    setGenerating(true)
    setError(null)
    try {
      const result = await parent.generateCode()
      
      // ✅ Backend returns { success, data: { code, expiresAt } }
      if (result.success && result.data) {
        setLinkCode(result.data.code)
        setCodeExpiry(result.data.expiresAt)
      } else {
        // Fallback for direct response
        setLinkCode(result.code)
        setCodeExpiry(result.expiresAt)
      }
    } catch (err) {
      setError(err.message || 'Failed to generate code')
      console.error('Generate code error:', err)
    } finally {
      setGenerating(false)
    }
  }

  // --- Unlink ---
  const handleUnlink = async () => {
    if (!confirm('This will disconnect your account from your parent. Continue?')) return
    
    setUnlinking(true)
    setError(null)
    try {
      const result = await parent.unlink()
      
      // ✅ Backend returns { success, data: { success, message } }
      if (result.success) {
        setLinked(false)
        setStudentData(null)
        localStorage.removeItem('hyelearner_parent_link')
      }
    } catch (err) {
      setError(err.message || 'Failed to unlink')
    } finally {
      setUnlinking(false)
    }
  }

  // --- Refresh ---
  const handleRefresh = async () => {
    await loadStatus()
  }

  // ===== LOADING =====
  if (loading) {
    return <LoadingScreen />
  }

  // ===== LINKED VIEW =====
  if (linked && studentData) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {/* Header */}
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Users style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2" style={{ margin: 0 }}>Parent Dashboard</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Connected to {studentData?.name || 'parent'}
                </p>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                <RefreshCw style={{ width: '16px', height: '16px' }} />
              </button>
              <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
                <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
              </button>
            </div>
          </div>

          {/* Success Message */}
          <div className="success-card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
              <CheckCircle2 style={{ width: '32px', height: '32px', color: 'var(--color-success)' }} />
              <div>
                <div style={{ fontWeight: '600', fontSize: 'var(--font-size-base)' }}>
                  Connected to {studentData?.name || 'parent'}
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Your parent can now view your progress.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-warning)' }}>{studentData?.streak || 0}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Day Streak</div>
            </div>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: 'var(--color-primary)' }}>{studentData?.xp || 0}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div>
            </div>
            <div className="stat-card text-center">
              <div className="h2" style={{ color: studentData?.accuracy >= 70 ? 'var(--color-success)' : 'var(--color-warning)' }}>
                {studentData?.accuracy || 0}%
              </div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div>
            </div>
          </div>

          {/* Subject Readiness */}
          {studentData?.subjects && studentData.subjects.length > 0 && (
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ fontWeight: '500', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <TrendingUp style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Subject Readiness
              </div>
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {studentData.subjects.map((subject) => (
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
          )}

          {/* Unlink Button */}
          <div className="card text-center" style={{ padding: 'var(--space-6)', border: '2px dashed var(--color-danger)' }}>
            <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-danger-light)', margin: '0 auto var(--space-4)' }}>
              <Unlink style={{ width: '32px', height: '32px', color: 'var(--color-danger)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Disconnect Parent</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-4)', maxWidth: '400px', margin: '0 auto var(--space-4)' }}>
              This will disconnect your account from your parent. They will no longer be able to see your progress.
            </p>
            <button 
              onClick={handleUnlink}
              disabled={unlinking}
              className="btn btn-danger flex-center" 
              style={{ margin: '0 auto' }}
            >
              {unlinking ? (
                <><Loader2 style={{ width: '18px', height: '18px' }} className="animate-spin" /> Disconnecting...</>
              ) : (
                <><Unlink style={{ width: '18px', height: '18px' }} /> Unlink Parent</>
              )}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="danger-card" style={{ marginTop: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <AlertCircle style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ===== NOT LINKED VIEW =====
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Users style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Parent Dashboard</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Generate a code for your parent</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <AlertCircle style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Generate Code Card */}
        <div className="card" style={{ maxWidth: '480px', margin: '0 auto', padding: 'var(--space-8)' }}>
          <div className="stack" style={{ gap: 'var(--space-6)' }}>
            <div className="text-center">
              <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
                <Link2 style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
              </div>
              <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Connect with Parent</h3>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Generate a code for your parent to link and track your progress.
              </p>
            </div>

            <button
              onClick={handleGenerateCode}
              disabled={generating}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3)' }}
            >
              {generating ? (
                <><Loader2 style={{ width: '18px', height: '18px' }} className="animate-spin" /> Generating...</>
              ) : (
                <><Link2 style={{ width: '18px', height: '18px' }} /> Generate Code</>
              )}
            </button>

            {linkCode && (
              <div className="card" style={{ 
                padding: 'var(--space-4)', 
                background: 'var(--color-primary-light)', 
                border: '2px solid var(--color-primary)',
                textAlign: 'center'
              }}>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-1)' }}>
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
                <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', marginTop: 'var(--space-2)' }}>
                  <button
                    onClick={() => navigator.clipboard.writeText(linkCode)}
                    className="btn btn-primary"
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    <Copy style={{ width: '14px', height: '14px' }} /> Copy Code
                  </button>
                  {codeExpiry && (
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>
                      <Clock style={{ width: '14px', height: '14px' }} />
                      {' '}Expires {new Date(codeExpiry).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>
            )}

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
        </div>
      </div>
    </div>
  )
}
  


// ============================================================
// COURSE FINDER PAGE — UPDATED WITH LOCAL UNIVERSITY SEARCH
// ============================================================
export function CourseFinderPage() {
  const navigate = useNavigate()
  
  // --- Form State ---
  const [universityQuery, setUniversityQuery] = useState('')
  const [universityResults, setUniversityResults] = useState([])
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [course, setCourse] = useState('')
  const [score, setScore] = useState('')
  const [scoreType, setScoreType] = useState('sat')
  const [subjects, setSubjects] = useState(['', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  
  const searchTimeoutRef = useRef(null)

  // Subject options
  const subjectOptions = Object.keys(SUBJECTS).map(key => SUBJECTS[key].label)

  // Score type options — WAEC, NECO, SSCE REMOVED
  const scoreTypes = [
    { value: 'sat', label: 'SAT' },
    { value: 'jamb', label: 'JAMB' },
    { value: 'a_level', label: 'A-Level' },
    { value: 'percentage', label: 'Percentage' },
  ]

  // --- Search Universities (local typeahead) ---
  const searchUniversities = (query) => {
    if (!query || query.length < 2) {
      setUniversityResults([])
      setShowResults(false)
      return
    }

    setError(null)
    
    try {
      const results = localSearchUniversities(query, 10)
      setUniversityResults(results)
      setShowResults(true)
    } catch (err) {
      console.error('University search error:', err)
      setError('Failed to search universities. Please try again.')
      setUniversityResults([])
    }
  }

  // Debounced search
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    if (universityQuery.length >= 2) {
      searchTimeoutRef.current = setTimeout(() => {
        searchUniversities(universityQuery)
      }, 300)
    } else {
      setUniversityResults([])
      setShowResults(false)
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [universityQuery])

  // Select university
  const handleSelectUniversity = (uni) => {
    setSelectedUniversity(uni)
    setUniversityQuery(uni.name)
    setShowResults(false)
    setUniversityResults([])
    setError(null)
  }

  // Clear selection
  const handleClearUniversity = () => {
    setSelectedUniversity(null)
    setUniversityQuery('')
    setResult(null)
    setHasSearched(false)
  }

  // --- Check Admission (still uses backend) ---
  const handleCheckAdmission = async () => {
    if (!selectedUniversity) {
      setError('Please select a university')
      return
    }
    if (!course) {
      setError('Please enter a course name')
      return
    }
    if (!score) {
      setError('Please enter your score')
      return
    }
    if (subjects.some(s => !s)) {
      setError('Please enter all 4 subjects')
      return
    }

    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const data = await career.checkAdmission({
        university: selectedUniversity.name,
        country: selectedUniversity.country || 'Unknown',
        course: course,
        score: Number(score),
        score_type: scoreType,
        subjects: subjects.filter(s => s)
      })
      setResult(data)
    } catch (err) {
      console.error('Admission check error:', err)
      setError(err.message || 'Failed to check admission. Please try again.')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'qualified': return 'var(--color-success)'
      case 'partial': return 'var(--color-warning)'
      case 'not_qualified': return 'var(--color-danger)'
      default: return 'var(--color-text-muted)'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'qualified': return <ThumbsUp style={{ width: '20px', height: '20px' }} />
      case 'partial': return <AlertTriangle style={{ width: '20px', height: '20px' }} />
      case 'not_qualified': return <ThumbsDown style={{ width: '20px', height: '20px' }} />
      default: return <Info style={{ width: '20px', height: '20px' }} />
    }
  }

  const getChanceColor = (chance) => {
    if (chance >= 70) return 'var(--color-success)'
    if (chance >= 40) return 'var(--color-warning)'
    return 'var(--color-danger)'
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-success-light)' }}>
              <GraduationCapIcon style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Course Finder</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Find your perfect university course</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <AlertCircle style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* ===== FORM ===== */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stack" style={{ gap: 'var(--space-5)' }}>
            
            {/* 1. University Search (Typeahead) */}
            <div>
              <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Building2 style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                University
              </label>
              <div style={{ position: 'relative' }}>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                    <input
                      type="text"
                      className="input"
                      style={{ paddingLeft: 'var(--space-10)' }}
                      placeholder="Search for a university (e.g., Harvard, UNILAG)"
                      value={universityQuery}
                      onChange={(e) => setUniversityQuery(e.target.value)}
                    />
                  </div>
                  {selectedUniversity && (
                    <button
                      onClick={handleClearUniversity}
                      className="btn btn-ghost"
                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Dropdown Results */}
                {showResults && universityResults.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius)',
                    marginTop: 'var(--space-1)',
                    maxHeight: '240px',
                    overflowY: 'auto',
                    zIndex: 10,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}>
                    {universityResults.map((uni, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectUniversity(uni)}
                        style={{
                          width: '100%',
                          padding: 'var(--space-2) var(--space-3)',
                          textAlign: 'left',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          borderBottom: '1px solid var(--color-border-light)',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-background)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{uni.name}</div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          <MapPin style={{ width: '12px', height: '12px', display: 'inline' }} />
                          {' '}{uni.country || 'Unknown'} {uni.state ? `• ${uni.state}` : ''}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {showResults && universityResults.length === 0 && universityQuery.length >= 2 && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius)',
                    marginTop: 'var(--space-1)',
                    padding: 'var(--space-3)',
                    textAlign: 'center',
                    zIndex: 10
                  }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>No universities found. Try a different search.</span>
                  </div>
                )}
              </div>

              {selectedUniversity && (
                <div className="success-card" style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--color-success)' }} />
                    <div>
                      <span style={{ fontWeight: '500' }}>{selectedUniversity.name}</span>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginLeft: 'var(--space-2)' }}>
                        {selectedUniversity.country}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Course */}
            <div>
              <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                Course / Program
              </label>
              <input
                type="text"
                className="input"
                placeholder="e.g., Computer Science, Medicine, Law"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>

            {/* 3. Score & Score Type */}
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Target style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Your Score
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="e.g., 1500, 250"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Info style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                  Score Type
                </label>
                <select
                  className="select"
                  value={scoreType}
                  onChange={(e) => setScoreType(e.target.value)}
                >
                  {scoreTypes.map((st) => (
                    <option key={st.value} value={st.value}>{st.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Subjects */}
            <div>
              <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                Subjects Taken (4 subjects)
              </label>
              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i}>
                    <label className="label" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Subject {i + 1}</label>
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
            </div>

            {/* Submit Button */}
            <button
              onClick={handleCheckAdmission}
              disabled={loading || !selectedUniversity || !course || !score || subjects.some(s => !s)}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3)' }}
            >
              {loading ? (
                <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Checking...</>
              ) : (
                <><Search style={{ width: '20px', height: '20px' }} /> Check Admission</>
              )}
            </button>
          </div>
        </div>

        {/* ===== RESULTS ===== */}
        {hasSearched && result && (
          <div className="stack" style={{ gap: 'var(--space-6)' }}>
            
            {/* Result Card */}
            <div className="card" style={{ 
              border: `2px solid ${getStatusColor(result.status)}`,
              background: 'var(--color-surface)'
            }}>
              <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <div className="flex-center" style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `${getStatusColor(result.status)}20`,
                  color: getStatusColor(result.status),
                  flexShrink: 0
                }}>
                  {getStatusIcon(result.status)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: 'var(--color-text)' }}>
                    {result.result?.message || result.message || 'Result'}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                    {result.result?.details || result.details || ''}
                  </div>
                  <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                    <span className="badge badge-primary">
                      Score Required: {result.requirements?.score_needed || 'N/A'}
                    </span>
                    <span className="badge badge-muted">
                      Your Score: {score} ({scoreType.toUpperCase()})
                    </span>
                    {result.result?.chance_percentage !== undefined && (
                      <span className="badge" style={{ 
                        background: getChanceColor(result.result.chance_percentage),
                        color: 'white'
                      }}>
                        {result.result.chance_percentage}% Chance
                      </span>
                    )}
                    {result.requirements?.subjects_needed && (
                      <span className="badge badge-info">
                        Subjects: {result.requirements.subjects_needed.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            {result.requirements && (
              <div className="card">
                <div style={{ fontWeight: '600', marginBottom: 'var(--space-3)' }}>📋 Requirements</div>
                <div className="stack" style={{ gap: 'var(--space-2)' }}>
                  <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Score Needed</span>
                    <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{result.requirements.score_needed}</span>
                  </div>
                  <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Score Type</span>
                    <span style={{ fontWeight: '600' }}>{result.requirements.score_type?.toUpperCase() || scoreType.toUpperCase()}</span>
                  </div>
                  {result.requirements.subjects_needed && result.requirements.subjects_needed.length > 0 && (
                    <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Subjects Needed</span>
                      <span style={{ fontWeight: '600' }}>{result.requirements.subjects_needed.join(', ')}</span>
                    </div>
                  )}
                  {result.result?.score_gap !== undefined && (
                    <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Score Gap</span>
                      <span style={{ fontWeight: '600', color: result.result.score_gap > 0 ? 'var(--color-danger)' : 'var(--color-success)' }}>
                        {result.result.score_gap > 0 ? `+${result.result.score_gap} needed` : '✅ Met'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations && result.recommendations.length > 0 && (
              <div className="card" style={{ background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <Lightbulb style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: '600' }}>Recommendations</span>
                </div>
                <div className="stack" style={{ gap: 'var(--space-2)' }}>
                  {result.recommendations.map((rec, idx) => (
                    <div key={idx} className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-surface)' }}>
                      <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                        {rec.title}
                      </div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                        {rec.description}
                      </div>
                      {rec.feature && (
                        <button
                          onClick={() => navigate(`/${rec.feature}`)}
                          className="btn btn-primary"
                          style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-3)', marginTop: 'var(--space-2)' }}
                        >
                          Open {rec.feature.replace('_', ' ')}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Courses */}
            {result.similar_courses && result.similar_courses.length > 0 && (
              <div className="card">
                <div style={{ fontWeight: '600', marginBottom: 'var(--space-3)' }}>🎯 Similar Courses You Might Qualify For</div>
                <div className="stack" style={{ gap: 'var(--space-3)' }}>
                  {result.similar_courses.map((alt, idx) => (
                    <div key={idx} className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-background)' }}>
                      <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                        <div>
                          <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>{alt.university}</div>
                          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{alt.course}</div>
                          {alt.reason && (
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                              {alt.reason}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>Score: {alt.score_needed}</div>
                          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: getChanceColor(alt.chance_percentage) }}>
                            {alt.chance_percentage}% chance
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Search Button */}
            <button
              onClick={() => {
                setResult(null)
                setHasSearched(false)
                handleClearUniversity()
                setCourse('')
                setScore('')
                setSubjects(['', '', '', ''])
              }}
              className="btn btn-outline flex-center"
              style={{ width: '100%' }}
            >
              <RefreshCw style={{ width: '16px', height: '16px' }} /> New Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// CUT-OFF TRACKER PAGE — WITH LOCAL DATA + CONTRIBUTE BUTTON
// ============================================================

export function CutoffTrackerPage() {
  const navigate = useNavigate()
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [history, setHistory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Dynamic dropdown states
  const [universitiesList, setUniversitiesList] = useState([])
  const [coursesList, setCoursesList] = useState([])
  const [loadingOptions, setLoadingOptions] = useState(true)
  const [loadingCourses, setLoadingCourses] = useState(false)

  // Fetch universities on mount
  useEffect(() => {
    const loadUniversities = async () => {
  setLoadingOptions(true)
  try {
    // ✅ Use local COMMON_CUTOFFS data
    const data = Object.keys(COMMON_CUTOFFS)
    setUniversitiesList(data)
  } catch (err) {
    console.error('Failed to load universities:', err)
    setError('Could not load university list')
  } finally {
    setLoadingOptions(false)
  }
}
    loadUniversities()
  }, [])

  // Fetch courses when university changes
  useEffect(() => {
    if (!university) {
      setCoursesList([])
      setCourse('')
      return
    }
    const loadCourses = async () => {
  setLoadingCourses(true)
  try {
    // ✅ Use local COMMON_CUTOFFS data
    const data = COMMON_CUTOFFS[university] ? Object.keys(COMMON_CUTOFFS[university]) : []
    setCoursesList(data)
    setCourse('')
  } catch (err) {
    console.error('Failed to load courses:', err)
    setError('Could not load courses for this university')
  } finally {
    setLoadingCourses(false)
  }
}
    loadCourses()
  }, [university])

  // ============================================================
  // HANDLE SEARCH — WITH LOCAL DATA
  // ============================================================
  const handleSearch = async () => {
    if (!university || !course) {
      setError('Please select both university and course')
      return
    }

    setLoading(true)
    setError(null)

    // ✅ 1. Check local data first
    if (hasData(university, course)) {
      const data = getCutoffData(university, course)
      const lastValue = data[data.length - 1]?.value || 0
      const isRising = data.length > 1 && data[data.length - 1].value > data[0].value

      setHistory({
        university,
        course,
        data: data,
        prediction: lastValue + (isRising ? 5 : -2),
        risk: lastValue > 250 ? 'highly_competitive' : lastValue > 200 ? 'competitive' : 'safe',
        source: 'local'
      })
      setLoading(false)
      return
    }

    // ✅ 2. Try backend
    try {
      const result = await career.getCutoffs(university, course)
      if (result && result.data && result.data.length > 0) {
        setHistory({
          ...result,
          source: 'api'
        })
      } else {
        setError('No cut-off data available. Help us add it!')
        setHistory(null)
      }
    } catch (err) {
      setError('No data available. Contribute to help others!')
      setHistory(null)
    } finally {
      setLoading(false)
    }
  }

  if (loadingOptions) {
    return <LoadingScreen />
  }

  const handleNewSearch = () => {
    setHistory(null)
    setUniversity('')
    setCourse('')
    setError(null)
  }

  // ===== HISTORY VIEW =====
  if (history) {
    const isRising = history.data?.length > 1 && history.data[history.data.length - 1].value > history.data[0].value
    const lastValue = history.data?.[history.data.length - 1]?.value || 0

    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
                <LineChart style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} />
              </div>
              <div>
                <h1 className="h2" style={{ margin: 0 }}>Cut-off Tracker</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  {history.university} — {history.course}
                  {history.source === 'local' && (
                    <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}>
                      <Database style={{ width: '12px', height: '12px', display: 'inline' }} /> Cached
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>

          <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="card">
                <div style={{ fontWeight: '500', marginBottom: 'var(--space-2)' }}>5-Year Cut-off Trend</div>
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
                  📊 Prediction: {history.prediction}
                  <span style={{ marginLeft: 'var(--space-2)', fontWeight: '400', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    ({isRising ? '⬆ Rising trend' : '📉 Stable'})
                  </span>
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {history.risk === 'highly_competitive' ? '🔥 Highly Competitive' : 
                   history.risk === 'competitive' ? '⚡ Competitive' : '✅ Safe'}
                </div>
              </div>

              <button onClick={handleNewSearch} className="btn btn-outline flex-center" style={{ width: '100%' }}>
                <Search style={{ width: '16px', height: '16px' }} /> New Search
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ===== MAIN SEARCH VIEW =====
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <LineChart style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Cut-off Tracker</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Track university cut-off marks</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Beta Warning */}
        <div className="warning-card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4)', border: '2px solid var(--color-warning)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}>
            <AlertTriangle style={{ width: '24px', height: '24px', color: 'var(--color-warning)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>Data Coming Soon</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                We're currently collecting accurate cut-off data from universities across Nigeria. 
                Data shown is based on available sources and user contributions.
              </p>
              <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <Clock style={{ width: '12px', height: '12px', display: 'inline' }} /> Beta Feature
                </span>
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <Users style={{ width: '12px', height: '12px', display: 'inline' }} /> Crowdsourced
                </span>
                <button 
                  onClick={() => window.open('https://www.jamb.gov.ng', '_blank')}
                  className="btn btn-ghost"
                  style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}
                >
                  <ExternalLink style={{ width: '14px', height: '14px' }} /> Check JAMB Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
              <AlertCircle style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span>{error}</span>
                <button 
                  onClick={() => navigate('/feedback')}
                  className="btn btn-primary"
                  style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-3)', marginTop: 'var(--space-1)' }}
                >
                  <Plus style={{ width: '14px', height: '14px' }} /> Contribute Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Form */}
        <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="stack" style={{ gap: 'var(--space-5)' }}>
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Building2 style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> University
                </label>
                <select
                  className="select"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  <option value="">Select</option>
                  {universitiesList.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Course
                </label>
                <select
                  className="select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={!university || loadingCourses}
                >
                  <option value="">{loadingCourses ? 'Loading...' : 'Select'}</option>
                  {coursesList.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={!university || !course || loading}
              className="btn btn-primary flex-center"
              style={{ width: '100%', padding: 'var(--space-3) var(--space-4)' }}
            >
              {loading ? (
                <><Loader2 className="animate-spin" style={{ width: '20px', height: '20px', marginRight: 'var(--space-2)' }} /> Loading...</>
              ) : (
                <><Search style={{ width: '20px', height: '20px' }} /> Search Cut-off</>
              )}
            </button>
          </div>
        </div>

        {/* Contribute CTA */}
        <div className="card text-center" style={{ marginTop: 'var(--space-4)', border: '2px dashed var(--color-primary)', padding: 'var(--space-4)' }}>
          <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
            <Users style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
          </div>
          <h3 style={{ margin: 0, fontSize: 'var(--font-size-base)' }}>Help Us Build This Database</h3>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
            Know a university's cut-off mark? Contribute and help others!
          </p>
          <button 
            onClick={() => navigate('/feedback')}
            className="btn btn-primary"
            style={{ marginTop: 'var(--space-2)' }}
          >
            <Plus style={{ width: '16px', height: '16px' }} /> Contribute Data
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// BOOKMARKS PAGE — FIXED: Added navigation to bookmarks
// ============================================================
export function BookmarksPage() {
  const navigate = useNavigate()
  const [bookmarks, setBookmarks] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBookmarks()
  }, [])

  const loadBookmarks = () => {
    setLoading(true)
    try {
      const data = storage.getBookmarks()
      setBookmarks(data)
    } catch (error) {
      console.error('Failed to load bookmarks:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(loadBookmarks, 30000)
      return () => clearInterval(interval)
    }
  }, [loading])

  const handleRemove = (id) => {
    storage.removeBookmark(id)
    setBookmarks(bookmarks.filter(b => b.id !== id))
  }

  // ✅ Add this function
  const handleBookmarkClick = (bookmark) => {
    if (bookmark.targetType === 'lesson') {
      navigate(`/lessons`, { 
        state: { 
          fromBookmark: true,
          bookmarkId: bookmark.targetId,
          bookmark: bookmark 
        } 
      })
    } else if (bookmark.targetType === 'question') {
      navigate(`/practice`, { 
        state: { 
          fromBookmark: true,
          questionId: bookmark.targetId 
        } 
      })
    } else if (bookmark.targetType === 'topic') {
      navigate(`/topic-mode`, { 
        state: { 
          fromBookmark: true,
          topic: bookmark.topic,
          subject: bookmark.subject
        } 
      })
    }
  }

  const filteredBookmarks = bookmarks.filter(b => {
    if (filter === 'all') return true
    return b.targetType === filter
  })

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <BookMarked style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2">Bookmarks</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your saved questions and lessons</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button onClick={loadBookmarks} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          {['all', 'question', 'lesson', 'topic'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn ${filter === type ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 'var(--font-size-sm)', textTransform: 'capitalize' }}
            >
              {type}
            </button>
          ))}
        </div>

        {filteredBookmarks.length === 0 ? (
          <div className="empty-card">
            <div className="icon"><BookMarked style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
            <div className="title">No Bookmarks</div>
            <div className="desc">Save questions and lessons you want to revisit.</div>
            <div className="action">
              <button className="btn btn-primary" onClick={() => navigate('/practice')}>Start Practicing</button>
            </div>
          </div>
        ) : (
          <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '60vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {filteredBookmarks.map((bookmark) => (
              <div 
                key={bookmark.id} 
                className="card flex-between" 
                style={{ 
                  cursor: 'pointer',
                  transition: 'all var(--transition)'
                }}
                onClick={() => handleBookmarkClick(bookmark)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(79, 70, 229, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                    {bookmark.icon || '📚'} {bookmark.title || bookmark.targetId}
                  </div>
                  <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    <span className="badge badge-muted" style={{ textTransform: 'capitalize' }}>
                      {bookmark.targetType}
                    </span>
                    <span>{bookmark.subject || 'General'}</span>
                    {bookmark.topic && (
                      <>
                        <span>•</span>
                        <span>{bookmark.topic}</span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(bookmark.id)
                  }}
                  className="btn btn-danger"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                >
                  <Trash2 style={{ width: '14px', height: '14px' }} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
  
// ============================================================
// SETTINGS PAGE — SUBSCRIPTION FIXED + AI USAGE DYNAMIC
// ============================================================
export function SettingsPage() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [studyReminders, setStudyReminders] = useState(true)

  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const [subError, setSubError] = useState(null)
  const [subscribing, setSubscribing] = useState(false)

  const [aiUsage, setAiUsage] = useState({ daily: 0, monthly: 0 })

  const loadAIUsage = () => {
    const today = new Date().toISOString().split('T')[0]
    
    const savedDaily = localStorage.getItem('hyelearner_ai_usage')
    let daily = 0
    if (savedDaily) {
      const usage = JSON.parse(savedDaily)
      if (usage.date === today) {
        daily = usage.count || 0
      }
    }

    const savedMonthly = localStorage.getItem('hyelearner_ai_usage_monthly')
    let monthly = 0
    if (savedMonthly) {
      const usage = JSON.parse(savedMonthly)
      monthly = usage.count || 0
    }

    setAiUsage({ daily, monthly })
  }

  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_settings')
    if (saved) {
      const settings = JSON.parse(saved)
      setDarkMode(settings.darkMode || false)
      setNotifications(settings.notifications !== false)
      setStudyReminders(settings.studyReminders !== false)
    }

    loadAIUsage()

    const handleAIUpdate = () => {
      loadAIUsage()
    }
    window.addEventListener('ai:usage-updated', handleAIUpdate)
    return () => window.removeEventListener('ai:usage-updated', handleAIUpdate)
  }, [])

  useEffect(() => {
    const loadSubscription = async () => {
      setSubLoading(true)
      setSubError(null)
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (err) {
        console.error('Failed to load subscription:', err)
        setSubError(err.message || 'Could not load subscription status')
      } finally {
        setSubLoading(false)
      }
    }
    loadSubscription()
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

  const handleSubscribe = async () => {
    setSubscribing(true)
    setSubError(null)
    try {
      const data = await subscriptions.initialize('foundation', 'NGN')
      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl
      } else {
        throw new Error('No payment URL received')
      }
    } catch (err) {
      console.error('Subscribe error:', err)
      setSubError(err.message || 'Failed to initialize payment')
      setSubscribing(false)
    }
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  if (subLoading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-muted-light)' }}>
              <Settings style={{ width: '24px', height: '24px', color: 'var(--color-text-muted)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Settings</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage your preferences</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        <div className="stack" style={{ gap: 'var(--space-6)' }}>
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
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{user?.email}</div>
              </div>
            </div>
            <button 
              className="btn btn-ghost" 
              style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}
              onClick={() => navigate('/profile/edit')}
            >
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

          {/* AI Usage */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Brain style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> AI Usage
            </h3>
            <div className="card">
              <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                <span style={{ color: 'var(--color-text)' }}>Daily</span>
                <span style={{ color: 'var(--color-text-muted)' }}>
                  {aiUsage.daily}/{AI_LIMITS.daily}
                </span>
              </div>
              <div className="progress">
                <div 
                  className="progress-fill progress-fill-primary" 
                  style={{ 
                    width: `${Math.min((aiUsage.daily / AI_LIMITS.daily) * 100, 100)}%` 
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <CreditCard style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> Subscription
            </h3>

            {subError ? (
              <div className="danger-card">
                <AlertCircle style={{ width: '16px', height: '16px', display: 'inline', marginRight: 'var(--space-2)' }} />
                {subError}
              </div>
            ) : (
              <div className="card">
                <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>
                      Foundation Plan
                      {subscription?.isActive ? (
                        <span className="badge badge-success" style={{ marginLeft: 'var(--space-2)' }}>
                          <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> Active
                        </span>
                      ) : (
                        <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)' }}>
                          Inactive
                        </span>
                      )}
                    </div>

                    {subscription?.expiresAt && subscription.isActive ? (
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Expires: {formatDate(subscription.expiresAt)}
                        {subscription.daysRemaining > 0 && (
                          <span style={{ marginLeft: 'var(--space-2)' }}>
                            ({subscription.daysRemaining} days left)
                          </span>
                        )}
                      </div>
                    ) : (
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        No active subscription
                      </div>
                    )}

                    {subscription?.isActive ? (
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-success)', marginTop: '4px' }}>
                        <CheckCircle2 style={{ width: '14px', height: '14px', display: 'inline' }} /> Full access to all features
                      </div>
                    ) : (
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        Subscribe to unlock all features
                      </div>
                    )}
                  </div>

                  {!subscription?.isActive && (
                    <button
                      onClick={handleSubscribe}
                      disabled={subscribing}
                      className="btn btn-primary flex-center"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {subscribing ? (
                        <><Loader2 className="animate-spin" style={{ width: '16px', height: '16px', marginRight: 'var(--space-2)' }} /> Processing...</>
                      ) : (
                        <><CreditCard style={{ width: '16px', height: '16px' }} /> Subscribe Now</>
                      )}
                    </button>
                  )}

                  {subscription?.isActive && (
                    <div className="flex-center" style={{ gap: 'var(--space-2)', color: 'var(--color-success)', fontWeight: '600' }}>
                      <CheckCircle2 style={{ width: '20px', height: '20px' }} />
                      Subscribed
                    </div>
                  )}
                </div>

                {subscription?.isHardcoded && (
                  <div className="info-card" style={{ marginTop: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
                    <Sparkles style={{ width: '16px', height: '16px', display: 'inline' }} />
                    {' '}Developer account — all features unlocked.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Logout */}
          <button onClick={logout} className="btn btn-danger flex-center" style={{ width: '100%' }}>
            <LogOut style={{ width: '16px', height: '16px' }} /> Logout
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// PROFILE PAGE
// ============================================================
export function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-info-light)' }}>
              <UserCircle style={{ width: '24px', height: '24px', color: 'var(--color-info)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Profile</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your personal information</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div className="flex-center" style={{ width: '112px', height: '112px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-4xl)', fontWeight: '700', margin: '0 auto' }}>
            {user?.firstName?.[0] || 'U'}
          </div>
          <div className="stack" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-4)' }}>
            <div className="h3" style={{ margin: 0 }}>{user?.firstName} {user?.lastName}</div>
            <div className="text-muted">@{user?.username}</div>
            <div className="text-muted">{user?.email}</div>
            <div className="text-muted">{user?.school || 'No school'}</div>
            <div className="text-muted">{user?.country || 'Nigeria'} • {user?.exam || 'JAMB'}</div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            <button 
              className="btn btn-outline flex-1 flex-center"
              onClick={() => navigate('/profile/edit')}
            >
              <Edit style={{ width: '16px', height: '16px' }} /> Edit Profile
            </button>
            <button 
              className="btn btn-outline flex-1 flex-center"
              onClick={() => navigate('/change-password')}
            >
              <Lock style={{ width: '16px', height: '16px' }} /> Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// OFFLINE PAGE
// ============================================================
export function OfflinePage() {
  const navigate = useNavigate()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setLastSync(new Date())
      setSyncing(false)
    }, 2000)
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-cyan-light)' }}>
              <Cloud style={{ width: '24px', height: '24px', color: 'var(--color-cyan)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Offline</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage your offline data</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div style={{ fontSize: 'var(--font-size-5xl)', marginBottom: 'var(--space-4)' }}>
            {isOnline ? <Wifi style={{ width: '80px', height: '80px', margin: '0 auto', color: 'var(--color-success)' }} /> : <WifiOff style={{ width: '80px', height: '80px', margin: '0 auto', color: 'var(--color-danger)' }} />}
          </div>
          <div className="h3" style={{ marginBottom: 'var(--space-1)' }}>{isOnline ? 'Online' : 'Offline'}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
            {isOnline ? 'Connected to the internet.' : 'You are offline. Some features may be limited.'}
          </div>

          {isOnline && (
            <>
              <div className="card text-left" style={{ marginTop: 'var(--space-6)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <Database style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: '600' }}>Offline Cache</span>
                </div>
                <div className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
                  {['Lessons', 'Questions', 'Bookmarks', 'Mistake Book'].map((item) => (
                    <div key={item} className="flex-between" style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-light)' }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                      <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', color: 'var(--color-success)' }}>
                        <CheckCircle2 style={{ width: '16px', height: '16px' }} /> Cached
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card flex-between" style={{ marginTop: 'var(--space-4)' }}>
                <div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <RefreshCw style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
                    <span style={{ fontWeight: '600' }}>Sync</span>
                  </div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                    {lastSync ? `Last synced: ${formatDate(lastSync)}` : 'Not synced yet'}
                  </div>
                </div>
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  className="btn btn-primary"
                >
                  {syncing ? (
                    <><Loader2 style={{ width: '16px', height: '16px' }} className="animate-spin" /> Syncing...</>
                  ) : (
                    <><RefreshCw style={{ width: '16px', height: '16px' }} /> Sync Now</>
                  )}
                </button>
              </div>
            </>
          )}

          {!isOnline && (
            <div className="card" style={{ marginTop: 'var(--space-6)', background: 'var(--color-background)' }}>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500' }}>
                Offline mode active. You can still access cached content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}