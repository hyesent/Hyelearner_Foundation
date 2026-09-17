// ============================================================
// HYELEARNER: FOUNDATION — EXTRA PAGES
// Career (with history tabs) + EditProfilePage added
// Only these two changed. Everything else same as your file.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useHydration } from '../hooks'
import { storage } from '../storage'
import { formatDate } from '../utils'
import { SUBJECTS, COUNTRIES, EXAM_TYPES, AI_LIMITS } from '../constants'
import { career, parent, subscriptions, auth as authService } from '../services'
import { searchUniversities as localSearchUniversities } from '../data/universities/index.js'
import { COMMON_CUTOFFS, hasData, getCutoffData } from '../data/cutoffs/common'
import { LoadingScreen } from '../components/LoadingScreen'

import {
  ArrowLeft, Users, User, Clock, Calendar, BarChart3, BookOpen,
  GraduationCap, LineChart, Star, Settings, LogOut, Moon, Sun, Bell,
  BellOff, Brain, Sparkles, CreditCard, Award, Target, TrendingUp,
  AlertCircle, CheckCircle2, Loader2, Link2, Copy, Download, RefreshCw,
  Wifi, WifiOff, Database, Cloud, Zap, Crown, Lock, Edit, Search,
  Trash2, BookMarked, School, Globe, Info, AlertTriangle, Mail,
  UserCircle, UserCog, ExternalLink, Shield, Building2, MapPin,
  GraduationCap as GraduationCapIcon, ChevronRight, Lightbulb, Plus,
  Unlink, History, FileText, RotateCw, Save, X, Camera, Eye, EyeOff,
} from 'lucide-react'


// ============================================================
// PARENT DASHBOARD PAGE
// (unchanged — same as your file, kept here for the barrel)
// ============================================================

export function ParentDashboardPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [linked, setLinked] = useState(false)
  const [studentData, setStudentData] = useState(null)
  const [linkCode, setLinkCode] = useState('')
  const [generating, setGenerating] = useState(false)
  const [unlinking, setUnlinking] = useState(false)
  const [error, setError] = useState(null)
  const [codeExpiry, setCodeExpiry] = useState(null)

  useEffect(() => { loadStatus() }, [])

  const loadStatus = async () => {
    setLoading(true); setError(null)
    try {
      const result = await parent.getStatus()
      if (result.success && result.data) {
        const status = result.data
        if (status.linked && status.students && status.students.length > 0) {
          setLinked(true)
          const analyticsResult = await parent.getStudentAnalytics(status.students[0].id)
          if (analyticsResult.success && analyticsResult.data) {
            setStudentData(analyticsResult.data.student)
            localStorage.setItem('hyelearner_parent_link', JSON.stringify({ linked: true, student: analyticsResult.data.student }))
          }
        }
      } else if (result.linked && result.students && result.students.length > 0) {
        setLinked(true)
        const analyticsResult = await parent.getStudentAnalytics(result.students[0].id)
        if (analyticsResult.student) setStudentData(analyticsResult.student)
      }
    } catch (err) {
      const saved = localStorage.getItem('hyelearner_parent_link')
      if (saved) {
        const data = JSON.parse(saved)
        if (data.linked) { setLinked(true); setStudentData(data.student) }
      }
    } finally { setLoading(false) }
  }

  const handleGenerateCode = async () => {
    setGenerating(true); setError(null)
    try {
      const result = await parent.generateCode()
      if (result.success && result.data) {
        setLinkCode(result.data.code); setCodeExpiry(result.data.expiresAt)
      } else {
        setLinkCode(result.code); setCodeExpiry(result.expiresAt)
      }
    } catch (err) { setError(err.message || 'Failed to generate code') }
    finally { setGenerating(false) }
  }

  const handleUnlink = async () => {
    if (!confirm('This will disconnect your account from your parent. Continue?')) return
    setUnlinking(true); setError(null)
    try {
      const result = await parent.unlink()
      if (result.success) {
        setLinked(false); setStudentData(null)
        localStorage.removeItem('hyelearner_parent_link')
      }
    } catch (err) { setError(err.message || 'Failed to unlink') }
    finally { setUnlinking(false) }
  }

  if (loading) return <LoadingScreen />

  if (linked && studentData) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
                <Users size={24} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h1 className="h2" style={{ margin: 0 }}>Parent Dashboard</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Connected to {studentData?.name || 'parent'}</p>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <button onClick={loadStatus} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
              <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
            </div>
          </div>

          <div className="success-card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
              <CheckCircle2 size={32} style={{ color: 'var(--color-success)' }} />
              <div>
                <div style={{ fontWeight: 600 }}>Connected to {studentData?.name || 'parent'}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your parent can now view your progress.</div>
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{studentData?.streak || 0}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Day Streak</div></div>
            <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{studentData?.xp || 0}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div></div>
            <div className="stat-card text-center"><div className="h2" style={{ color: studentData?.accuracy >= 70 ? 'var(--color-success)' : 'var(--color-warning)' }}>{studentData?.accuracy || 0}%</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div></div>
          </div>

          {studentData?.subjects && studentData.subjects.length > 0 && (
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ fontWeight: 500, marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <TrendingUp size={16} style={{ color: 'var(--color-primary)' }} /> Subject Readiness
              </div>
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {studentData.subjects.map((subject) => (
                  <div key={subject.name}>
                    <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                      <span>{subject.name}</span>
                      <span style={{ color: subject.readiness >= 70 ? 'var(--color-success)' : subject.readiness >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>{subject.readiness}%</span>
                    </div>
                    <div className="progress">
                      <div className={`progress-fill ${subject.readiness >= 70 ? 'progress-fill-success' : subject.readiness >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`} style={{ width: `${subject.readiness}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="card text-center" style={{ padding: 'var(--space-6)', border: '2px dashed var(--color-danger)' }}>
            <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-danger-light)', margin: '0 auto var(--space-4)' }}>
              <Unlink size={32} style={{ color: 'var(--color-danger)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Disconnect Parent</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>This will disconnect your account from your parent.</p>
            <button onClick={handleUnlink} disabled={unlinking} className="btn btn-danger flex-center" style={{ margin: '0 auto' }}>
              {unlinking ? <><Loader2 size={18} className="animate-spin" /> Disconnecting...</> : <><Unlink size={18} /> Unlink Parent</>}
            </button>
          </div>

          {error && <div className="danger-card" style={{ marginTop: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div></div>}
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Users size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div><h1 className="h2" style={{ margin: 0 }}>Parent Dashboard</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Generate a code for your parent</p></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div></div>}

        <div className="card" style={{ maxWidth: 480, margin: '0 auto', padding: 'var(--space-8)' }}>
          <div className="stack" style={{ gap: 'var(--space-6)' }}>
            <div className="text-center">
              <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
                <Link2 size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Connect with Parent</h3>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Generate a code for your parent to link and track your progress.</p>
            </div>

            <button onClick={handleGenerateCode} disabled={generating} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
              {generating ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><Link2 size={18} /> Generate Code</>}
            </button>

            {linkCode && (
              <div className="card" style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', border: '2px solid var(--color-primary)', textAlign: 'center' }}>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-1)' }}>Share this code with your parent:</div>
                <div style={{ fontSize: 'var(--font-size-4xl)', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.1em', padding: 'var(--space-2)' }}>{linkCode}</div>
                <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', marginTop: 'var(--space-2)' }}>
                  <button onClick={() => navigator.clipboard.writeText(linkCode)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}><Copy size={14} /> Copy Code</button>
                  {codeExpiry && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}><Clock size={14} /> Expires {new Date(codeExpiry).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>}
                </div>
              </div>
            )}

            <div className="info-card" style={{ padding: 'var(--space-3)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <Info size={16} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-primary)' }} />
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Your parent can use this code to connect and view your progress.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// ============================================================
// COURSE FINDER PAGE — with History tab + Recheck
// ============================================================

export function CourseFinderPage() {
  const navigate = useNavigate()

  const [tab, setTab] = useState('check') // 'check' | 'history'

  // Form
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

  // History
  const [history, setHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)
  const [activeHistoryItem, setActiveHistoryItem] = useState(null)

  const searchTimeoutRef = useRef(null)
  const subjectOptions = Object.keys(SUBJECTS).map((key) => SUBJECTS[key].label)

  const scoreTypes = [
    { value: 'sat', label: 'SAT' },
    { value: 'jamb', label: 'JAMB' },
    { value: 'a_level', label: 'A-Level' },
    { value: 'percentage', label: 'Percentage' },
  ]

  const searchUniversities = (query) => {
    if (!query || query.length < 2) {
      setUniversityResults([]); setShowResults(false); return
    }
    setError(null)
    try {
      const results = localSearchUniversities(query, 10)
      setUniversityResults(results); setShowResults(true)
    } catch (err) {
      setError('Failed to search universities. Please try again.')
      setUniversityResults([])
    }
  }

  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
    if (universityQuery.length >= 2) {
      searchTimeoutRef.current = setTimeout(() => searchUniversities(universityQuery), 300)
    } else {
      setUniversityResults([]); setShowResults(false)
    }
    return () => { if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current) }
  }, [universityQuery])

  const handleSelectUniversity = (uni) => {
    setSelectedUniversity(uni)
    setUniversityQuery(uni.name)
    setShowResults(false); setUniversityResults([]); setError(null)
  }

  const handleClearUniversity = () => {
    setSelectedUniversity(null); setUniversityQuery(''); setResult(null); setHasSearched(false)
  }

  const handleCheckAdmission = async () => {
    if (!selectedUniversity) return setError('Please select a university')
    if (!course) return setError('Please enter a course name')
    if (!score) return setError('Please enter your score')
    if (subjects.some((s) => !s)) return setError('Please enter all 4 subjects')

    setLoading(true); setError(null); setHasSearched(true)
    try {
      const data = await career.checkAdmission({
        university: selectedUniversity.name,
        country: selectedUniversity.country || 'Unknown',
        course,
        score: Number(score),
        score_type: scoreType,
        subjects: subjects.filter((s) => s),
      })
      setResult(data)
    } catch (err) {
      setError(err.message || 'Failed to check admission. Please try again.')
      setResult(null)
    } finally { setLoading(false) }
  }

  // Load history
  const loadHistory = async () => {
    setHistoryLoading(true); setError(null)
    try {
      const data = await career.getHistory(30)
      setHistory(data.checks || [])
    } catch (err) {
      console.error('History error:', err)
      setError(err.message || 'Failed to load history')
    } finally { setHistoryLoading(false) }
  }

  useEffect(() => {
    if (tab === 'history') loadHistory()
  }, [tab])

  // Recheck with new data — prefills form, jumps to check tab
  const handleRecheck = (item) => {
    setCourse(item.course || '')
    setUniversityQuery(item.university || '')
    setSelectedUniversity({ name: item.university, country: item.country || '' })
    setScore(item.score ? String(item.score) : '')
    setScoreType(item.score_type || 'sat')
    setSubjects(item.subjects && item.subjects.length === 4 ? item.subjects : ['', '', '', ''])
    setResult(null); setHasSearched(false)
    setTab('check')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'qualified': return 'var(--color-success)'
      case 'partial': return 'var(--color-warning)'
      case 'not_qualified': return 'var(--color-danger)'
      default: return 'var(--color-text-muted)'
    }
  }

  const getChanceColor = (c) => c >= 70 ? 'var(--color-success)' : c >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-success-light)' }}>
              <GraduationCapIcon size={24} style={{ color: 'var(--color-success)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Course Finder</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Find your perfect university course</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button onClick={() => setTab('check')} className={`btn ${tab === 'check' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}>
            <Search size={16} /> New Check
          </button>
          <button onClick={() => setTab('history')} className={`btn ${tab === 'history' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}>
            <History size={16} /> History
          </button>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div></div>}

        {/* ================= HISTORY TAB ================= */}
        {tab === 'history' && (
          <>
            {historyLoading ? (
              <div className="flex-center" style={{ padding: 'var(--space-8)' }}><Loader2 size={28} className="animate-spin" /></div>
            ) : history.length === 0 ? (
              <div className="empty-card">
                <div className="icon"><History size={48} style={{ color: 'var(--color-text-muted)' }} /></div>
                <div className="title">No checks yet</div>
                <div className="desc">Run your first admission check to see it here.</div>
                <div className="action">
                  <button className="btn btn-primary" onClick={() => setTab('check')}>Start a check</button>
                </div>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {history.map((item) => {
                  const passed = item.status === 'qualified'
                  const partial = item.status === 'partial'
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveHistoryItem(item)}
                      className="card card-hover"
                      style={{ padding: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', cursor: 'pointer', background: 'var(--color-surface)' }}
                    >
                      <div className="flex-center" style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: passed ? 'var(--color-success-light)' : partial ? 'var(--color-warning-light)' : 'var(--color-danger-light)', flexShrink: 0 }}>
                        <GraduationCapIcon size={20} style={{ color: getStatusColor(item.status) }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                            {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          {item.chance_percentage != null && (
                            <span className={`badge ${passed ? 'badge-success' : partial ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
                              {item.chance_percentage}%
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.course}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.university}
                        </div>
                      </div>
                      <ChevronRight size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                    </button>
                  )
                })}
              </div>
            )}
          </>
        )}

        {/* ================= CHECK TAB ================= */}
        {tab === 'check' && (
          <>
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div className="stack" style={{ gap: 'var(--space-5)' }}>

                {/* University */}
                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <Building2 size={16} style={{ color: 'var(--color-primary)' }} /> University
                  </label>
                  <div style={{ position: 'relative' }}>
                    <div className="flex" style={{ gap: 'var(--space-2)' }}>
                      <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                        <input type="text" className="input" style={{ paddingLeft: 'var(--space-10)' }} placeholder="Search university..." value={universityQuery} onChange={(e) => setUniversityQuery(e.target.value)} />
                      </div>
                      {selectedUniversity && (
                        <button onClick={handleClearUniversity} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>Clear</button>
                      )}
                    </div>

                    {showResults && universityResults.length > 0 && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', marginTop: 'var(--space-1)', maxHeight: 240, overflowY: 'auto', zIndex: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                        {universityResults.map((uni, idx) => (
                          <button key={idx} onClick={() => handleSelectUniversity(uni)} style={{ width: '100%', padding: 'var(--space-2) var(--space-3)', textAlign: 'left', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '1px solid var(--color-border-light)' }}>
                            <div style={{ fontWeight: 500 }}>{uni.name}</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                              <MapPin size={12} style={{ display: 'inline' }} /> {uni.country || 'Unknown'}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {selectedUniversity && (
                    <div className="success-card" style={{ marginTop: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)' }}>
                      <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                        <span style={{ fontWeight: 500 }}>{selectedUniversity.name}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Course */}
                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Course / Program</label>
                  <input type="text" className="input" placeholder="e.g., Computer Science, Medicine" value={course} onChange={(e) => setCourse(e.target.value)} />
                </div>

                {/* Score */}
                <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
                  <div>
                    <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Target size={16} style={{ color: 'var(--color-primary)' }} /> Your Score</label>
                    <input type="number" className="input" placeholder="e.g., 1500, 250" value={score} onChange={(e) => setScore(e.target.value)} min="0" />
                  </div>
                  <div>
                    <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Info size={16} style={{ color: 'var(--color-primary)' }} /> Score Type</label>
                    <select className="select" value={scoreType} onChange={(e) => setScoreType(e.target.value)}>
                      {scoreTypes.map((st) => <option key={st.value} value={st.value}>{st.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Subjects */}
                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Subjects Taken (4)</label>
                  <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                    {[0, 1, 2, 3].map((i) => (
                      <select key={i} className="select" value={subjects[i]} onChange={(e) => { const n = [...subjects]; n[i] = e.target.value; setSubjects(n) }}>
                        <option value="">Subject {i + 1}</option>
                        {subjectOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    ))}
                  </div>
                </div>

                <button onClick={handleCheckAdmission} disabled={loading || !selectedUniversity || !course || !score || subjects.some((s) => !s)} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                  {loading ? <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }} /> Checking...</> : <><Search size={20} /> Check Admission</>}
                </button>
              </div>
            </div>

            {/* Result */}
            {hasSearched && result && (
              <div className="stack" style={{ gap: 'var(--space-6)' }}>
                <div className="card" style={{ border: `2px solid ${getStatusColor(result.status)}` }}>
                  <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div className="flex-center" style={{ width: 56, height: 56, borderRadius: '50%', background: `${getStatusColor(result.status)}20`, color: getStatusColor(result.status), flexShrink: 0 }}>
                      {result.status === 'qualified' ? <CheckCircle2 size={24} /> : result.status === 'partial' ? <AlertTriangle size={24} /> : <AlertCircle size={24} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>{result.result?.message || result.message || 'Result'}</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{result.result?.details || result.details || ''}</div>
                      <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                        <span className="badge badge-primary">Score Required: {result.requirements?.score_needed || 'N/A'}</span>
                        <span className="badge badge-muted">Your Score: {score}</span>
                        {result.result?.chance_percentage != null && (
                          <span className="badge" style={{ background: getChanceColor(result.result.chance_percentage), color: 'white' }}>{result.result.chance_percentage}% Chance</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {result.recommendations && result.recommendations.length > 0 && (
                  <div className="card" style={{ background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
                    <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                      <Lightbulb size={20} style={{ color: 'var(--color-primary)' }} />
                      <span style={{ fontWeight: 600 }}>Recommendations</span>
                    </div>
                    <div className="stack" style={{ gap: 'var(--space-2)' }}>
                      {result.recommendations.map((rec, i) => (
                        <div key={i} className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-surface)' }}>
                          <div style={{ fontWeight: 500, fontSize: 'var(--font-size-sm)' }}>{rec.title}</div>
                          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{rec.description}</div>
                          {rec.feature && (
                            <button onClick={() => navigate(`/${rec.feature}`)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-3)', marginTop: 'var(--space-2)' }}>
                              Open {rec.feature.replace('_', ' ')}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {result.similar_courses && result.similar_courses.length > 0 && (
                  <div className="card">
                    <div style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>🎯 Similar Courses</div>
                    <div className="stack" style={{ gap: 'var(--space-3)' }}>
                      {result.similar_courses.map((alt, i) => (
                        <div key={i} className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-background)' }}>
                          <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                            <div>
                              <div style={{ fontWeight: 600 }}>{alt.university}</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{alt.course}</div>
                              {alt.reason && <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>{alt.reason}</div>}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>Score: {alt.score_needed}</div>
                              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: getChanceColor(alt.chance_percentage) }}>{alt.chance_percentage}% chance</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button onClick={() => { setResult(null); setHasSearched(false); handleClearUniversity(); setCourse(''); setScore(''); setSubjects(['', '', '', '']) }} className="btn btn-outline flex-center" style={{ width: '100%' }}>
                  <RefreshCw size={16} /> New Search
                </button>
              </div>
            )}
          </>
        )}

        {/* History detail modal */}
        {activeHistoryItem && (
          <div className="modal-overlay" onClick={() => setActiveHistoryItem(null)} style={{ zIndex: 200 }}>
            <div onClick={(e) => e.stopPropagation()} className="modal" style={{ maxWidth: 520, padding: 'var(--space-5)' }}>
              <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
                <h3 className="h3" style={{ margin: 0 }}>{activeHistoryItem.course}</h3>
                <button onClick={() => setActiveHistoryItem(null)} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><X size={20} /></button>
              </div>

              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--font-size-sm)' }}>
                  <Building2 size={16} style={{ color: 'var(--color-text-muted)' }} />
                  <span>{activeHistoryItem.university}</span>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--font-size-sm)' }}>
                  <Calendar size={16} style={{ color: 'var(--color-text-muted)' }} />
                  <span>{new Date(activeHistoryItem.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                {activeHistoryItem.chance_percentage != null && (
                  <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: getStatusColor(activeHistoryItem.status) }}>
                    {activeHistoryItem.chance_percentage}% chance
                  </div>
                )}
              </div>

              <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-5)' }}>
                <button onClick={() => { setActiveHistoryItem(null); handleRecheck(activeHistoryItem) }} className="btn btn-primary flex-1 flex-center">
                  <RotateCw size={16} /> Recheck
                </button>
                <button onClick={() => setActiveHistoryItem(null)} className="btn btn-outline flex-1 flex-center">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


// ============================================================
// CUT-OFF TRACKER — unchanged
// ============================================================

export function CutoffTrackerPage() {
  const navigate = useNavigate()
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [history, setHistory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [universitiesList, setUniversitiesList] = useState([])
  const [coursesList, setCoursesList] = useState([])
  const [loadingOptions, setLoadingOptions] = useState(true)
  const [loadingCourses, setLoadingCourses] = useState(false)

  useEffect(() => {
    setLoadingOptions(true)
    try { setUniversitiesList(Object.keys(COMMON_CUTOFFS)) }
    catch { setError('Could not load university list') }
    finally { setLoadingOptions(false) }
  }, [])

  useEffect(() => {
    if (!university) { setCoursesList([]); setCourse(''); return }
    setLoadingCourses(true)
    try { setCoursesList(COMMON_CUTOFFS[university] ? Object.keys(COMMON_CUTOFFS[university]) : []); setCourse('') }
    catch { setError('Could not load courses') }
    finally { setLoadingCourses(false) }
  }, [university])

  const handleSearch = async () => {
    if (!university || !course) return setError('Please select both university and course')
    setLoading(true); setError(null)
    if (hasData(university, course)) {
      const data = getCutoffData(university, course)
      const lastValue = data[data.length - 1]?.value || 0
      const isRising = data.length > 1 && data[data.length - 1].value > data[0].value
      setHistory({ university, course, data, prediction: lastValue + (isRising ? 5 : -2), risk: lastValue > 250 ? 'highly_competitive' : lastValue > 200 ? 'competitive' : 'safe', source: 'local' })
      setLoading(false); return
    }
    try {
      const result = await career.getCutoffs(university, course)
      if (result?.data?.length > 0) setHistory({ ...result, source: 'api' })
      else { setError('No cut-off data available. Help us add it!'); setHistory(null) }
    } catch { setError('No data available. Contribute to help others!'); setHistory(null) }
    finally { setLoading(false) }
  }

  if (loadingOptions) return <LoadingScreen />

  const handleNewSearch = () => { setHistory(null); setUniversity(''); setCourse(''); setError(null) }

  if (history) {
    const isRising = history.data?.length > 1 && history.data[history.data.length - 1].value > history.data[0].value
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="flex" style={{ gap: 'var(--space-4)' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
                <LineChart size={24} style={{ color: 'var(--color-warning)' }} />
              </div>
              <div>
                <h1 className="h2" style={{ margin: 0 }}>Cut-off Tracker</h1>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{history.university} — {history.course}</p>
              </div>
            </div>
            <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </div>
          <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="card">
                <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>5-Year Cut-off Trend</div>
                <div className="stack" style={{ gap: 'var(--space-2)' }}>
                  {history.data?.map((item, i) => (
                    <div key={i} className="flex-between">
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{item.year}</span>
                      <span style={{ fontWeight: 700, color: i === history.data.length - 1 ? 'var(--color-primary)' : 'var(--color-text)' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`card text-center ${history.risk === 'highly_competitive' ? 'danger-card' : 'warning-card'}`}>
                <div style={{ fontWeight: 700 }}>📊 Prediction: {history.prediction}</div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {history.risk === 'highly_competitive' ? '🔥 Highly Competitive' : history.risk === 'competitive' ? '⚡ Competitive' : '✅ Safe'}
                </div>
              </div>
              <button onClick={handleNewSearch} className="btn btn-outline flex-center" style={{ width: '100%' }}><Search size={16} /> New Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <LineChart size={24} style={{ color: 'var(--color-warning)' }} />
            </div>
            <div><h1 className="h2" style={{ margin: 0 }}>Cut-off Tracker</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Track university cut-off marks</p></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        <div className="warning-card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-4)', border: '2px solid var(--color-warning)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}>
            <AlertTriangle size={24} style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <h3 style={{ margin: 0, fontSize: 'var(--font-size-base)' }}>Data Coming Soon</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>We're collecting accurate cut-off data across Nigeria.</p>
            </div>
          </div>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div></div>}

        <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="stack" style={{ gap: 'var(--space-5)' }}>
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><Building2 size={16} style={{ color: 'var(--color-primary)' }} /> University</label>
                <select className="select" value={university} onChange={(e) => setUniversity(e.target.value)}>
                  <option value="">Select</option>
                  {universitiesList.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Course</label>
                <select className="select" value={course} onChange={(e) => setCourse(e.target.value)} disabled={!university || loadingCourses}>
                  <option value="">{loadingCourses ? 'Loading...' : 'Select'}</option>
                  {coursesList.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <button onClick={handleSearch} disabled={!university || !course || loading} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
              {loading ? <><Loader2 className="animate-spin" size={20} /> Loading...</> : <><Search size={20} /> Search Cut-off</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


// ============================================================
// BOOKMARKS PAGE — unchanged
// ============================================================

export function BookmarksPage() {
  const navigate = useNavigate()
  const [bookmarks, setBookmarks] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadBookmarks() }, [])
  useEffect(() => { if (!loading) { const i = setInterval(loadBookmarks, 30000); return () => clearInterval(i) } }, [loading])

  const loadBookmarks = () => {
    setLoading(true)
    try { setBookmarks(storage.getBookmarks()) }
    catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  const handleRemove = (id) => { storage.removeBookmark(id); setBookmarks(bookmarks.filter((b) => b.id !== id)) }

  const handleBookmarkClick = (b) => {
    if (b.targetType === 'lesson') navigate('/lessons', { state: { fromBookmark: true, bookmarkId: b.targetId, bookmark: b } })
    else if (b.targetType === 'question') navigate('/practice', { state: { fromBookmark: true, questionId: b.targetId } })
    else if (b.targetType === 'topic') navigate('/topic-mode', { state: { fromBookmark: true, topic: b.topic, subject: b.subject } })
  }

  const filtered = bookmarks.filter((b) => filter === 'all' || b.targetType === filter)

  if (loading) return <LoadingScreen />

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <BookMarked size={24} style={{ color: 'var(--color-warning)' }} />
            </div>
            <div><h1 className="h2">Bookmarks</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your saved questions and lessons</p></div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button onClick={loadBookmarks} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </div>
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          {['all', 'question', 'lesson', 'topic'].map((t) => (
            <button key={t} onClick={() => setFilter(t)} className={`btn ${filter === t ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 'var(--font-size-sm)', textTransform: 'capitalize' }}>{t}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-card">
            <div className="icon"><BookMarked size={48} style={{ color: 'var(--color-text-muted)' }} /></div>
            <div className="title">No Bookmarks</div>
            <div className="desc">Save questions and lessons you want to revisit.</div>
            <div className="action"><button className="btn btn-primary" onClick={() => navigate('/practice')}>Start Practicing</button></div>
          </div>
        ) : (
          <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '60vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {filtered.map((b) => (
              <div key={b.id} className="card flex-between" style={{ cursor: 'pointer' }} onClick={() => handleBookmarkClick(b)}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500 }}>{b.icon || '📚'} {b.title || b.targetId}</div>
                  <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    <span className="badge badge-muted" style={{ textTransform: 'capitalize' }}>{b.targetType}</span>
                    <span>{b.subject || 'General'}</span>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleRemove(b.id) }} className="btn btn-danger" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                  <Trash2 size={14} />
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
// SETTINGS PAGE — unchanged
// ============================================================

export function SettingsPage() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { aiUsage } = useHydration()
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [studyReminders, setStudyReminders] = useState(true)
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const [subError, setSubError] = useState(null)
  const [subSuccess, setSubSuccess] = useState(null)
  const [subscribing, setSubscribing] = useState(false)
  const [hyeSpaceId, setHyeSpaceId] = useState(() => localStorage.getItem('hyespace-store-id') || '')
  const [savingHyeSpaceId, setSavingHyeSpaceId] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('hyelearner_settings')
    if (saved) {
      const s = JSON.parse(saved)
      setDarkMode(s.darkMode || false)
      setNotifications(s.notifications !== false)
      setStudyReminders(s.studyReminders !== false)
    }
  }, [])

  useEffect(() => {
    const load = async () => {
      setSubLoading(true); setSubError(null)
      try { setSubscription(await subscriptions.status()) }
      catch (err) { setSubError(err.message || 'Could not load subscription') }
      finally { setSubLoading(false) }
    }
    load()
  }, [])

  const handleToggle = (key, value) => {
    const settings = { darkMode, notifications, studyReminders, [key]: value }
    localStorage.setItem('hyelearner_settings', JSON.stringify(settings))
    if (key === 'darkMode') { setDarkMode(value); document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light') }
    if (key === 'notifications') setNotifications(value)
    if (key === 'studyReminders') setStudyReminders(value)
  }

  const handleSaveHyeSpaceId = async () => {
    setSavingHyeSpaceId(true); setSubError(null); setSubSuccess(null)
    try {
      subscriptions.linkStoreId(hyeSpaceId)
      const status = await subscriptions.status()
      setSubscription(status)
      if (status?.isActive) setSubSuccess('HyeSpace ID linked. Subscription active!')
      else if (status?.message) setSubError(status.message)
    } catch (err) { setSubError(err.message || 'Could not save HyeSpace ID') }
    finally { setSavingHyeSpaceId(false) }
  }

  const handleRemoveHyeSpaceId = async () => {
    subscriptions.unlinkStoreId(); setHyeSpaceId('')
    setSubscription({ isActive: false, tier: 'free', plan: 'Free' })
    setSubError(null); setSubSuccess('HyeSpace ID removed.')
  }

  const handleSubscribe = async () => {
    setSubscribing(true); setSubError(null); setSubSuccess(null)
    try {
      const data = await subscriptions.initialize('foundation', 'NGN')
      if (data.authorizationUrl) { window.open(data.authorizationUrl, '_blank', 'noopener,noreferrer'); setSubSuccess('Opening HyeSpace...') }
      else throw new Error('No HyeSpace store URL received')
    } catch (err) { setSubError(err.message || 'Failed to open HyeSpace') }
    finally { setSubscribing(false) }
  }

  const formatDate2 = (d) => d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'

  if (subLoading) return <LoadingScreen />

  const aiUsed = aiUsage?.used ?? 0
  const aiLimit = aiUsage?.limit ?? AI_LIMITS.daily

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-muted-light)' }}>
              <Settings size={24} style={{ color: 'var(--color-text-muted)' }} />
            </div>
            <div><h1 className="h2" style={{ margin: 0 }}>Settings</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage your preferences</p></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        <div className="stack" style={{ gap: 'var(--space-6)' }}>
          {/* Profile */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><User size={16} style={{ color: 'var(--color-primary)' }} /> Profile</h3>
            <div className="card flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>
                {user?.firstName?.[0] || 'U'}
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>{user?.firstName} {user?.lastName}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{user?.email}</div>
              </div>
            </div>
            <button className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }} onClick={() => navigate('/profile/edit')}>
              <Edit size={14} /> Edit Profile
            </button>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Sparkles size={16} style={{ color: 'var(--color-primary)' }} /> Preferences</h3>
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  {darkMode ? <Moon size={16} /> : <Sun size={16} />} Dark Mode
                </span>
                <input type="checkbox" checked={darkMode} onChange={(e) => handleToggle('darkMode', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  {notifications ? <Bell size={16} /> : <BellOff size={16} />} Notifications
                </span>
                <input type="checkbox" checked={notifications} onChange={(e) => handleToggle('notifications', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <Calendar size={16} /> Study Reminders
                </span>
                <input type="checkbox" checked={studyReminders} onChange={(e) => handleToggle('studyReminders', e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
            </div>
          </div>

          {/* AI Usage */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Brain size={16} style={{ color: 'var(--color-primary)' }} /> AI Usage</h3>
            <div className="card">
              <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                <span>Daily</span>
                <span className="text-muted">{aiUsed}/{aiLimit}</span>
              </div>
              <div className="progress">
                <div className="progress-fill progress-fill-primary" style={{ width: `${Math.min((aiUsed / aiLimit) * 100, 100)}%` }} />
              </div>
            </div>
          </div>

          {/* Subscription — same as original */}
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><CreditCard size={16} style={{ color: 'var(--color-primary)' }} /> Subscription</h3>

            {subError && <div className="danger-card" style={{ marginBottom: 'var(--space-3)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{subError}</span></div></div>}
            {subSuccess && <div className="success-card" style={{ marginBottom: 'var(--space-3)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /><span>{subSuccess}</span></div></div>}

            <div className="card">
              <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>
                    Foundation Plan
                    {subscription?.isActive ? <span className="badge badge-success" style={{ marginLeft: 'var(--space-2)' }}>Active</span> : <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)' }}>Inactive</span>}
                  </div>
                  {subscription?.expiresAt && subscription.isActive ? (
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>Expires: {formatDate2(subscription.expiresAt)}</div>
                  ) : (
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>No active subscription</div>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 220 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <input type="text" value={hyeSpaceId} onChange={(e) => setHyeSpaceId(e.target.value)} placeholder="HyeSpace ID" style={{ flex: 1, minWidth: 0, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }} />
                    <button onClick={handleSaveHyeSpaceId} disabled={savingHyeSpaceId} className="btn btn-ghost" style={{ whiteSpace: 'nowrap' }}>{savingHyeSpaceId ? 'Saving...' : 'Save'}</button>
                  </div>
                  {!subscription?.isActive && (
                    <button onClick={handleSubscribe} disabled={subscribing} className="btn btn-primary flex-center">
                      {subscribing ? <><Loader2 className="animate-spin" size={16} style={{ marginRight: 'var(--space-2)' }} /> Opening...</> : <><CreditCard size={16} /> Subscribe on HyeSpace</>}
                    </button>
                  )}
                  {hyeSpaceId && (
                    <button onClick={handleRemoveHyeSpaceId} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Remove HyeSpace ID</button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button onClick={logout} className="btn btn-danger flex-center" style={{ width: '100%' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
    </div>
  )
}


// ============================================================
// PROFILE PAGE — unchanged
// ============================================================

export function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-info-light)' }}>
              <UserCircle size={24} style={{ color: 'var(--color-info)' }} />
            </div>
            <div><h1 className="h2" style={{ margin: 0 }}>Profile</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your personal information</p></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div className="flex-center" style={{ width: 112, height: 112, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-4xl)', fontWeight: 700, margin: '0 auto' }}>
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
            <button className="btn btn-outline flex-1 flex-center" onClick={() => navigate('/profile/edit')}>
              <Edit size={16} /> Edit Profile
            </button>
            <button className="btn btn-outline flex-1 flex-center" onClick={() => navigate('/change-password')}>
              <Lock size={16} /> Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


// ============================================================
// ⭐ NEW — EDIT PROFILE PAGE
// ============================================================

export function EditProfilePage() {
  const navigate = useNavigate()
  const { user, updateProfile, updatePassword } = useAuth()
  const { refreshHydration } = useHydration()

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const [form, setForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    school: user?.school || '',
    country: user?.country || 'Nigeria',
    exam: user?.exam || 'jamb',
    bio: user?.bio || '',
    goal: user?.goal || '',
  })

  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [pwSaving, setPwSaving] = useState(false)
  const [pwError, setPwError] = useState(null)
  const [pwSuccess, setPwSuccess] = useState(null)
  const [showPw, setShowPw] = useState(false)

  const handleChange = (key, value) => setForm((p) => ({ ...p, [key]: value }))

  const handleSaveProfile = async (e) => {
    e.preventDefault()
    setSaving(true); setError(null); setSuccess(null)
    try {
      const payload = {
        first_name: form.firstName.trim(),
        last_name: form.lastName.trim(),
        school: form.school.trim(),
        country: form.country,
        exam: form.exam,
        bio: form.bio.trim(),
        goal: form.goal.trim(),
      }
      await updateProfile(payload)
      if (refreshHydration) refreshHydration().catch(() => {})
      setSuccess('Profile updated successfully.')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err.message || 'Failed to update profile')
    } finally { setSaving(false) }
  }

  const handleSavePassword = async (e) => {
    e.preventDefault()
    setPwError(null); setPwSuccess(null)

    if (!pwForm.currentPassword) return setPwError('Current password is required')
    if (!pwForm.newPassword || pwForm.newPassword.length < 6) return setPwError('New password must be at least 6 characters')
    if (pwForm.newPassword !== pwForm.confirmPassword) return setPwError('Passwords do not match')

    setPwSaving(true)
    try {
      await updatePassword({ currentPassword: pwForm.currentPassword, newPassword: pwForm.newPassword })
      setPwSuccess('Password changed successfully.')
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setTimeout(() => setPwSuccess(null), 3000)
    } catch (err) {
      setPwError(err.message || 'Failed to change password')
    } finally { setPwSaving(false) }
  }

  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSaving(true); setError(null); setSuccess(null)
    try {
      const { auth: authSvc } = await import('../services')
      const res = await authSvc.uploadAvatar(file)
      if (res?.avatar) {
        await updateProfile({ avatar_url: res.avatar })
        setSuccess('Avatar updated.')
        setTimeout(() => setSuccess(null), 3000)
      }
    } catch (err) {
      setError(err.message || 'Failed to upload avatar')
    } finally { setSaving(false) }
  }

  const initials = (form.firstName?.[0] || 'U') + (form.lastName?.[0] || '')

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <UserCog size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Edit Profile</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Update your personal info</p>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><AlertCircle size={16} /><span>{error}</span></div></div>}
        {success && <div className="success-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><CheckCircle2 size={16} /><span>{success}</span></div></div>}

        {/* Avatar + Profile form */}
        <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-5)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
            <div className="flex-center" style={{ position: 'relative', width: 88, height: 88, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>
              {user?.avatar_url ? <img src={user.avatar_url} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : initials}
              <label htmlFor="avatar-upload" className="flex-center" style={{ position: 'absolute', bottom: -4, right: -4, width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', border: '2px solid var(--color-surface)' }}>
                <Camera size={14} />
                <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
              </label>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>{form.firstName} {form.lastName}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>@{user?.username}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}>{user?.email}</div>
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="stack" style={{ gap: 'var(--space-4)' }}>
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label">First Name</label>
                <input type="text" className="input" value={form.firstName} onChange={(e) => handleChange('firstName', e.target.value)} required />
              </div>
              <div>
                <label className="label">Last Name</label>
                <input type="text" className="input" value={form.lastName} onChange={(e) => handleChange('lastName', e.target.value)} required />
              </div>
            </div>

            <div>
              <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <School size={14} style={{ color: 'var(--color-primary)' }} /> School
              </label>
              <input type="text" className="input" placeholder="Your school name" value={form.school} onChange={(e) => handleChange('school', e.target.value)} />
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Globe size={14} style={{ color: 'var(--color-primary)' }} /> Country
                </label>
                <select className="select" value={form.country} onChange={(e) => handleChange('country', e.target.value)}>
                  {Object.values(COUNTRIES || {}).flat().map((c) => <option key={c} value={c}>{c}</option>)}
                  {(!COUNTRIES || Object.keys(COUNTRIES).length === 0) && ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'UK', 'US', 'Other'].map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} /> Exam
                </label>
                <select className="select" value={form.exam} onChange={(e) => handleChange('exam', e.target.value)}>
                  {(EXAM_TYPES || [{ value: 'jamb', label: 'JAMB' }, { value: 'waec', label: 'WAEC' }, { value: 'neco', label: 'NECO' }, { value: 'ssce', label: 'SSCE' }]).map((e) => (
                    <option key={e.value} value={e.value}>{e.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="label">Goal</label>
              <input type="text" className="input" placeholder="e.g., Pass JAMB with 300+" value={form.goal} onChange={(e) => handleChange('goal', e.target.value)} />
            </div>

            <div>
              <label className="label">Bio</label>
              <textarea className="textarea" rows={3} placeholder="Tell us about yourself..." value={form.bio} onChange={(e) => handleChange('bio', e.target.value)} style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" disabled={saving} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
              {saving ? <><Loader2 className="animate-spin" size={18} /> Saving...</> : <><Save size={18} /> Save Changes</>}
            </button>
          </form>
        </div>

        {/* Password */}
        <div className="card" style={{ padding: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Lock size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>Change Password</span>
          </div>

          {pwError && <div className="danger-card" style={{ marginBottom: 'var(--space-3)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><AlertCircle size={16} /><span>{pwError}</span></div></div>}
          {pwSuccess && <div className="success-card" style={{ marginBottom: 'var(--space-3)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><CheckCircle2 size={16} /><span>{pwSuccess}</span></div></div>}

          <form onSubmit={handleSavePassword} className="stack" style={{ gap: 'var(--space-4)' }}>
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" value={pwForm.currentPassword} onChange={(e) => setPwForm((p) => ({ ...p, currentPassword: e.target.value }))} required />
            </div>
            <div>
              <label className="label">New Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPw ? 'text' : 'password'} className="input" placeholder="Min 6 characters" value={pwForm.newPassword} onChange={(e) => setPwForm((p) => ({ ...p, newPassword: e.target.value }))} required style={{ paddingRight: 'var(--space-10)' }} />
                <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="label">Confirm New Password</label>
              <input type={showPw ? 'text' : 'password'} className="input" value={pwForm.confirmPassword} onChange={(e) => setPwForm((p) => ({ ...p, confirmPassword: e.target.value }))} required />
            </div>
            <button type="submit" disabled={pwSaving} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
              {pwSaving ? <><Loader2 className="animate-spin" size={18} /> Changing...</> : <><Lock size={18} /> Change Password</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


// ============================================================
// OFFLINE PAGE — unchanged
// ============================================================

export function OfflinePage() {
  const navigate = useNavigate()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)

  useEffect(() => {
    const on = () => setIsOnline(true)
    const off = () => setIsOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => { setLastSync(new Date()); setSyncing(false) }, 2000)
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-cyan-light)' }}>
              <Cloud size={24} style={{ color: 'var(--color-cyan)' }} />
            </div>
            <div><h1 className="h2" style={{ margin: 0 }}>Offline</h1><p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage offline data</p></div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
        </div>

        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div style={{ marginBottom: 'var(--space-4)' }}>
            {isOnline ? <Wifi size={80} style={{ margin: '0 auto', color: 'var(--color-success)' }} /> : <WifiOff size={80} style={{ margin: '0 auto', color: 'var(--color-danger)' }} />}
          </div>
          <div className="h3" style={{ marginBottom: 'var(--space-1)' }}>{isOnline ? 'Online' : 'Offline'}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
            {isOnline ? 'Connected to the internet.' : 'You are offline.'}
          </div>

          {isOnline && (
            <>
              <div className="card text-left" style={{ marginTop: 'var(--space-6)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <Database size={20} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600 }}>Cached Content</span>
                </div>
                <div className="stack" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
                  {['Lessons', 'Questions', 'Bookmarks', 'Mistake Book'].map((item) => (
                    <div key={item} className="flex-between" style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-light)' }}>
                      <span>{item}</span>
                      <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center', color: 'var(--color-success)' }}><CheckCircle2 size={16} /> Cached</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card flex-between" style={{ marginTop: 'var(--space-4)' }}>
                <div>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><RefreshCw size={20} style={{ color: 'var(--color-primary)' }} /><span style={{ fontWeight: 600 }}>Sync</span></div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                    {lastSync ? `Last synced: ${formatDate(lastSync)}` : 'Not synced yet'}
                  </div>
                </div>
                <button onClick={handleSync} disabled={syncing} className="btn btn-primary">
                  {syncing ? <><Loader2 size={16} className="animate-spin" /> Syncing...</> : <><RefreshCw size={16} /> Sync Now</>}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
