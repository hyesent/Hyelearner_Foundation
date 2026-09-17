// ============================================================
// HYELEARNER: FOUNDATION — EXTRA PAGES (SHOWCASE / PREVIEW)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, Users, User, Clock, Calendar, BarChart3, BookOpen,
  GraduationCap, LineChart, Settings, LogOut, Moon, Sun, Bell,
  BellOff, Brain, Sparkles, CreditCard, Target, TrendingUp,
  AlertCircle, CheckCircle2, Loader2, Link2, Copy, RefreshCw,
  Wifi, WifiOff, Database, Cloud, Edit, Search, Trash2,
  BookMarked, School, Globe, Info, AlertTriangle, Mail,
  UserCircle, UserCog, Building2, MapPin, ChevronRight, Lightbulb,
  Unlink, History, RotateCw, Save, X, Camera, Eye, EyeOff, Lock,
  GraduationCap as GraduationCapIcon,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const STUDENT = {
  firstName: 'Ada', lastName: 'Obi', username: 'adaobi', email: 'ada@hyelearner.app',
  school: 'Federal Government College, Lagos', country: 'Nigeria', exam: 'jamb',
  bio: 'Aiming for 320+ in JAMB.', goal: 'Pass JAMB with 300+',
}

const PARENT_STUDENT = {
  name: 'Ada Obi',
  streak: 12,
  xp: 2340,
  accuracy: 78,
  subjects: [
    { name: 'Mathematics',      readiness: 84 },
    { name: 'Physics',          readiness: 72 },
    { name: 'Chemistry',        readiness: 55 },
    { name: 'English Language', readiness: 78 },
    { name: 'Biology',          readiness: 68 },
  ],
}

const UNIVERSITIES = [
  { name: 'University of Lagos',              country: 'Nigeria' },
  { name: 'University of Ibadan',             country: 'Nigeria' },
  { name: 'Obafemi Awolowo University',       country: 'Nigeria' },
  { name: 'Ahmadu Bello University',          country: 'Nigeria' },
  { name: 'University of Nigeria, Nsukka',    country: 'Nigeria' },
  { name: 'Covenant University',              country: 'Nigeria' },
  { name: 'Lagos State University',           country: 'Nigeria' },
  { name: 'Federal University of Technology, Akure', country: 'Nigeria' },
]

const SUBJECT_OPTIONS = [
  'Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology',
  'Economics', 'Government', 'Literature', 'Geography', 'Agricultural Science',
]

const CAREER_HISTORY = [
  {
    id: 'h1',
    created_at: '2026-04-28T10:12:00Z',
    university: 'University of Lagos',
    country: 'Nigeria',
    course: 'Computer Science',
    score: 285,
    score_type: 'jamb',
    subjects: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
    status: 'qualified',
    chance_percentage: 82,
  },
  {
    id: 'h2',
    created_at: '2026-04-20T14:05:00Z',
    university: 'University of Ibadan',
    country: 'Nigeria',
    course: 'Medicine and Surgery',
    score: 285,
    score_type: 'jamb',
    subjects: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
    status: 'not_qualified',
    chance_percentage: 22,
  },
  {
    id: 'h3',
    created_at: '2026-04-12T09:30:00Z',
    university: 'Covenant University',
    country: 'Nigeria',
    course: 'Mechanical Engineering',
    score: 285,
    score_type: 'jamb',
    subjects: ['Mathematics', 'English Language', 'Physics', 'Chemistry'],
    status: 'partial',
    chance_percentage: 54,
  },
]

const ADMISSION_RESULT = {
  status: 'qualified',
  result: {
    message: 'Qualified for admission',
    details: 'Your JAMB score of 285 meets the University of Lagos cut-off for Computer Science.',
    chance_percentage: 82,
  },
  requirements: { score_needed: 250 },
  recommendations: [
    { title: 'Take a mock exam',       description: 'Simulate the exam under real timing.',       feature: 'mockExams' },
    { title: 'Practice weak topics',   description: 'Focus on Trigonometry and Comprehension.',   feature: 'topicMode' },
    { title: 'Review your study plan', description: 'Keep your weekly schedule on track.',        feature: 'studyPlan' },
  ],
  similar_courses: [
    { university: 'University of Lagos',        course: 'Computer Engineering', score_needed: 260, chance_percentage: 74, reason: 'Similar admission criteria' },
    { university: 'Covenant University',        course: 'Software Engineering', score_needed: 245, chance_percentage: 88, reason: 'Slightly lower cut-off' },
    { university: 'Lagos State University',     course: 'Computer Science',     score_needed: 230, chance_percentage: 92, reason: 'High acceptance rate' },
  ],
}

const CUTOFFS_UNIVERSITIES = ['University of Lagos', 'University of Ibadan', 'Obafemi Awolowo University']
const CUTOFFS_COURSES = {
  'University of Lagos': ['Computer Science', 'Medicine and Surgery', 'Mechanical Engineering'],
  'University of Ibadan': ['Medicine and Surgery', 'Law', 'Economics'],
  'Obafemi Awolowo University': ['Computer Science', 'Accounting', 'Pharmacy'],
}

const CUTOFF_TREND = [
  { year: 2021, value: 270 },
  { year: 2022, value: 275 },
  { year: 2023, value: 285 },
  { year: 2024, value: 290 },
  { year: 2025, value: 295 },
]

const BOOKMARKS = [
  { id: 'b1', targetType: 'question', targetId: 'q1', title: 'Solve for x: x² − 5x + 6 = 0', subject: 'Mathematics', icon: '📐' },
  { id: 'b2', targetType: 'lesson',   targetId: 'l1', title: 'Quadratic Equations',              subject: 'Mathematics', icon: '📐' },
  { id: 'b3', targetType: 'topic',    targetId: 't1', title: 'Trigonometry Basics',              subject: 'Mathematics', icon: '📐' },
  { id: 'b4', targetType: 'question', targetId: 'q2', title: "Newton's Laws of Motion",          subject: 'Physics',     icon: '⚛️' },
  { id: 'b5', targetType: 'lesson',   targetId: 'l2', title: 'Organic Chemistry',                subject: 'Chemistry',   icon: '🧪' },
]

const AI_LIMITS = { daily: 5 }

// ============================================================
// 1. PARENT DASHBOARD
// ============================================================
export function ShowcaseParentDashboard({ onNavigate }) {
  const [linked, setLinked] = useState(false)

  if (linked) {
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
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Connected to {PARENT_STUDENT.name}</p>
              </div>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <button className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}><RefreshCw size={16} /></button>
              <ViewOnly tooltip="Sign up to go back">
                <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
              </ViewOnly>
            </div>
          </div>

          <div className="success-card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
              <CheckCircle2 size={32} style={{ color: 'var(--color-success)' }} />
              <div>
                <div style={{ fontWeight: 600 }}>Connected to {PARENT_STUDENT.name}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your parent can now view your progress.</div>
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-warning)' }}>{PARENT_STUDENT.streak}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Day Streak</div></div>
            <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-primary)' }}>{PARENT_STUDENT.xp}</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div></div>
            <div className="stat-card text-center"><div className="h2" style={{ color: 'var(--color-success)' }}>{PARENT_STUDENT.accuracy}%</div><div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div></div>
          </div>

          <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
            <div style={{ fontWeight: 500, marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <TrendingUp size={16} style={{ color: 'var(--color-primary)' }} /> Subject Readiness
            </div>
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {PARENT_STUDENT.subjects.map((subject) => (
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

          <div className="card text-center" style={{ padding: 'var(--space-6)', border: '2px dashed var(--color-danger)' }}>
            <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-danger-light)', margin: '0 auto var(--space-4)' }}>
              <Unlink size={32} style={{ color: 'var(--color-danger)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Disconnect Parent</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>This will disconnect your account from your parent.</p>
            <ViewOnly tooltip="Sign up to disconnect">
              <button onClick={() => setLinked(false)} className="btn btn-danger flex-center" style={{ margin: '0 auto' }}>
                <Unlink size={18} /> Unlink Parent
              </button>
            </ViewOnly>
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
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Users size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Parent Dashboard</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Generate a code for your parent</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        <div className="card" style={{ maxWidth: 480, margin: '0 auto', padding: 'var(--space-8)' }}>
          <div className="stack" style={{ gap: 'var(--space-6)' }}>
            <div className="text-center">
              <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-4)' }}>
                <Link2 size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Connect with Parent</h3>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Generate a code for your parent to link and track your progress.</p>
            </div>

            <ViewOnly tooltip="Sign up to generate a code">
              <button onClick={() => setLinked(true)} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                <Link2 size={18} /> Generate Code
              </button>
            </ViewOnly>

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
// 2. COURSE FINDER
// ============================================================
export function ShowcaseCourseFinder({ onNavigate }) {
  const [tab, setTab] = useState('check')
  const [universityQuery, setUniversityQuery] = useState('')
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [course, setCourse] = useState('')
  const [score, setScore] = useState('')
  const [scoreType, setScoreType] = useState('sat')
  const [subjects, setSubjects] = useState(['', '', '', ''])
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeHistoryItem, setActiveHistoryItem] = useState(null)

  const scoreTypes = [
    { value: 'sat', label: 'SAT' },
    { value: 'jamb', label: 'JAMB' },
    { value: 'a_level', label: 'A-Level' },
    { value: 'percentage', label: 'Percentage' },
  ]

  const filteredUniversities = universityQuery.length >= 2
    ? UNIVERSITIES.filter((u) => u.name.toLowerCase().includes(universityQuery.toLowerCase()))
    : []

  const handleSelectUniversity = (uni) => {
    setSelectedUniversity(uni)
    setUniversityQuery(uni.name)
    setShowResults(false)
    setError(null)
  }

  const handleClearUniversity = () => {
    setSelectedUniversity(null); setUniversityQuery(''); setResult(null); setHasSearched(false)
  }

  const handleCheckAdmission = () => {
    if (!selectedUniversity) return setError('Please select a university')
    if (!course) return setError('Please enter a course name')
    if (!score) return setError('Please enter your score')
    if (subjects.some((s) => !s)) return setError('Please enter all 4 subjects')
    setError(null)
    setHasSearched(true)
    setResult(ADMISSION_RESULT)
  }

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

  const getStatusColor = (status) =>
    status === 'qualified' ? 'var(--color-success)'
    : status === 'partial' ? 'var(--color-warning)'
    : status === 'not_qualified' ? 'var(--color-danger)'
    : 'var(--color-text-muted)'

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
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <button onClick={() => setTab('check')} className={`btn ${tab === 'check' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}>
            <Search size={16} /> New Check
          </button>
          <button onClick={() => setTab('history')} className={`btn ${tab === 'history' ? 'btn-primary' : 'btn-outline'}`} style={{ flex: 1 }}>
            <History size={16} /> History
          </button>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}><AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} /><span>{error}</span></div></div>}

        {tab === 'history' && (
          <>
            {CAREER_HISTORY.length === 0 ? (
              <div className="empty-card">
                <div className="icon"><History size={48} style={{ color: 'var(--color-text-muted)' }} /></div>
                <div className="title">No checks yet</div>
                <div className="desc">Run your first admission check to see it here.</div>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {CAREER_HISTORY.map((item) => {
                  const passed = item.status === 'qualified'
                  const partial = item.status === 'partial'
                  return (
                    <ViewOnly key={item.id} tooltip="Sign up to view history details">
                      <button
                        onClick={() => setActiveHistoryItem(item)}
                        className="card card-hover"
                        style={{ padding: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', cursor: 'pointer', background: 'var(--color-surface)', width: '100%' }}
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
                          <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: 'var(--color-text)', marginTop: 2 }}>
                            {item.course}
                          </div>
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                            {item.university}
                          </div>
                        </div>
                        <ChevronRight size={18} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                      </button>
                    </ViewOnly>
                  )
                })}
              </div>
            )}
          </>
        )}

        {tab === 'check' && (
          <>
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
              <div className="stack" style={{ gap: 'var(--space-5)' }}>
                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <Building2 size={16} style={{ color: 'var(--color-primary)' }} /> University
                  </label>
                  <div style={{ position: 'relative' }}>
                    <div className="flex" style={{ gap: 'var(--space-2)' }}>
                      <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={16} style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                        <input
                          type="text" className="input" style={{ paddingLeft: 'var(--space-10)' }}
                          placeholder="Search university..."
                          value={universityQuery}
                          onChange={(e) => { setUniversityQuery(e.target.value); setShowResults(true) }}
                        />
                      </div>
                      {selectedUniversity && (
                        <button onClick={handleClearUniversity} className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>Clear</button>
                      )}
                    </div>

                    {showResults && filteredUniversities.length > 0 && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', marginTop: 'var(--space-1)', maxHeight: 240, overflowY: 'auto', zIndex: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                        {filteredUniversities.map((uni, idx) => (
                          <button key={idx} onClick={() => handleSelectUniversity(uni)} style={{ width: '100%', padding: 'var(--space-2) var(--space-3)', textAlign: 'left', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '1px solid var(--color-border-light)' }}>
                            <div style={{ fontWeight: 500 }}>{uni.name}</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                              <MapPin size={12} style={{ display: 'inline' }} /> {uni.country}
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

                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Course / Program
                  </label>
                  <input type="text" className="input" placeholder="e.g., Computer Science, Medicine" value={course} onChange={(e) => setCourse(e.target.value)} />
                </div>

                <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
                  <div>
                    <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                      <Target size={16} style={{ color: 'var(--color-primary)' }} /> Your Score
                    </label>
                    <input type="number" className="input" placeholder="e.g., 1500, 250" value={score} onChange={(e) => setScore(e.target.value)} min="0" />
                  </div>
                  <div>
                    <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                      <Info size={16} style={{ color: 'var(--color-primary)' }} /> Score Type
                    </label>
                    <select className="select" value={scoreType} onChange={(e) => setScoreType(e.target.value)}>
                      {scoreTypes.map((st) => <option key={st.value} value={st.value}>{st.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Subjects Taken (4)
                  </label>
                  <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                    {[0, 1, 2, 3].map((i) => (
                      <select key={i} className="select" value={subjects[i]} onChange={(e) => { const n = [...subjects]; n[i] = e.target.value; setSubjects(n) }}>
                        <option value="">Subject {i + 1}</option>
                        {SUBJECT_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    ))}
                  </div>
                </div>

                <ViewOnly tooltip="Sign up to check admission">
                  <button onClick={handleCheckAdmission} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                    <Search size={20} /> Check Admission
                  </button>
                </ViewOnly>
              </div>
            </div>

            {hasSearched && result && (
              <div className="stack" style={{ gap: 'var(--space-6)' }}>
                <div className="card" style={{ border: `2px solid ${getStatusColor(result.status)}` }}>
                  <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div className="flex-center" style={{ width: 56, height: 56, borderRadius: '50%', background: `${getStatusColor(result.status)}20`, color: getStatusColor(result.status), flexShrink: 0 }}>
                      {result.status === 'qualified' ? <CheckCircle2 size={24} /> : result.status === 'partial' ? <AlertTriangle size={24} /> : <AlertCircle size={24} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>{result.result.message}</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{result.result.details}</div>
                      <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                        <span className="badge badge-primary">Score Required: {result.requirements.score_needed}</span>
                        <span className="badge badge-muted">Your Score: {score}</span>
                        {result.result.chance_percentage != null && (
                          <span className="badge" style={{ background: getChanceColor(result.result.chance_percentage), color: 'white' }}>
                            {result.result.chance_percentage}% Chance
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {result.recommendations.length > 0 && (
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
                          <ViewOnly tooltip="Sign up to open this feature">
                            <button onClick={() => onNavigate?.(rec.feature)} className="btn btn-primary" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-3)', marginTop: 'var(--space-2)' }}>
                              Open {rec.feature.replace('_', ' ')}
                            </button>
                          </ViewOnly>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="card">
                  <div style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>🎯 Similar Courses</div>
                  <div className="stack" style={{ gap: 'var(--space-3)' }}>
                    {result.similar_courses.map((alt, i) => (
                      <div key={i} className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-background)' }}>
                        <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                          <div>
                            <div style={{ fontWeight: 600 }}>{alt.university}</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{alt.course}</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>{alt.reason}</div>
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

                <ViewOnly tooltip="Sign up to run another search">
                  <button onClick={() => { setResult(null); setHasSearched(false); handleClearUniversity(); setCourse(''); setScore(''); setSubjects(['', '', '', '']) }} className="btn btn-outline flex-center" style={{ width: '100%' }}>
                    <RefreshCw size={16} /> New Search
                  </button>
                </ViewOnly>
              </div>
            )}
          </>
        )}

        {activeHistoryItem && (
          <div className="modal-overlay" onClick={() => setActiveHistoryItem(null)} style={{ zIndex: 200 }}>
            <div onClick={(e) => e.stopPropagation()} className="modal" style={{ maxWidth: 520, padding: 'var(--space-5)' }}>
              <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
                <h3 className="h3" style={{ margin: 0 }}>{activeHistoryItem.course}</h3>
                <button onClick={() => setActiveHistoryItem(null)} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><X size={20} /></button>
              </div>

              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--font-size-sm)' }}>
                  <Building2 size={16} style={{ color: 'var(--color-text-muted)' }} /><span>{activeHistoryItem.university}</span>
                </div>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--font-size-sm)' }}>
                  <Calendar size={16} style={{ color: 'var(--color-text-muted)' }} /><span>{new Date(activeHistoryItem.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                {activeHistoryItem.chance_percentage != null && (
                  <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: getStatusColor(activeHistoryItem.status) }}>
                    {activeHistoryItem.chance_percentage}% chance
                  </div>
                )}
              </div>

              <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-5)' }}>
                <ViewOnly tooltip="Sign up to recheck">
                  <button onClick={() => { setActiveHistoryItem(null); handleRecheck(activeHistoryItem) }} className="btn btn-primary flex-1 flex-center">
                    <RotateCw size={16} /> Recheck
                  </button>
                </ViewOnly>
                <button onClick={() => setActiveHistoryItem(null)} className="btn btn-outline flex-1 flex-center">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// 3. CUT-OFF TRACKER
// ============================================================
export function ShowcaseCutoffTracker({ onNavigate }) {
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [history, setHistory] = useState(null)

  const coursesList = university ? (CUTOFFS_COURSES[university] || []) : []

  const handleSearch = () => {
    if (!university || !course) return
    const lastValue = CUTOFF_TREND[CUTOFF_TREND.length - 1].value
    const isRising = CUTOFF_TREND[CUTOFF_TREND.length - 1].value > CUTOFF_TREND[0].value
    setHistory({
      university, course,
      data: CUTOFF_TREND,
      prediction: lastValue + (isRising ? 5 : -2),
      risk: lastValue > 250 ? 'highly_competitive' : lastValue > 200 ? 'competitive' : 'safe',
    })
  }

  const handleNewSearch = () => { setHistory(null); setUniversity(''); setCourse('') }

  if (history) {
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
            <ViewOnly tooltip="Sign up to go back">
              <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
            </ViewOnly>
          </div>
          <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="card">
                <div style={{ fontWeight: 500, marginBottom: 'var(--space-2)' }}>5-Year Cut-off Trend</div>
                <div className="stack" style={{ gap: 'var(--space-2)' }}>
                  {history.data.map((item, i) => (
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
              <ViewOnly tooltip="Sign up to start a new search">
                <button onClick={handleNewSearch} className="btn btn-outline flex-center" style={{ width: '100%' }}>
                  <Search size={16} /> New Search
                </button>
              </ViewOnly>
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
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Cut-off Tracker</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Track university cut-off marks</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
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

        <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="stack" style={{ gap: 'var(--space-5)' }}>
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <Building2 size={16} style={{ color: 'var(--color-primary)' }} /> University
                </label>
                <select className="select" value={university} onChange={(e) => { setUniversity(e.target.value); setCourse('') }}>
                  <option value="">Select</option>
                  {CUTOFFS_UNIVERSITIES.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <BookOpen size={16} style={{ color: 'var(--color-primary)' }} /> Course
                </label>
                <select className="select" value={course} onChange={(e) => setCourse(e.target.value)} disabled={!university}>
                  <option value="">Select</option>
                  {coursesList.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <ViewOnly tooltip="Sign up to search cut-offs">
              <button onClick={handleSearch} disabled={!university || !course} className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)', opacity: (!university || !course) ? 0.5 : 1 }}>
                <Search size={20} /> Search Cut-off
              </button>
            </ViewOnly>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 4. BOOKMARKS
// ============================================================
export function ShowcaseBookmarks({ onNavigate }) {
  const [bookmarks, setBookmarks] = useState(BOOKMARKS)
  const [filter, setFilter] = useState('all')

  const handleRemove = (id) => setBookmarks(bookmarks.filter((b) => b.id !== id))

  const handleBookmarkClick = (b) => {
    if (b.targetType === 'lesson') onNavigate?.('lessons')
    else if (b.targetType === 'question') onNavigate?.('cbtPractice')
    else if (b.targetType === 'topic') onNavigate?.('topicMode')
  }

  const filtered = bookmarks.filter((b) => filter === 'all' || b.targetType === filter)

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <BookMarked size={24} style={{ color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2">Bookmarks</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your saved questions and lessons</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
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
          </div>
        ) : (
          <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '60vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {filtered.map((b) => (
              <ViewOnly key={b.id} tooltip="Sign up to open bookmarks">
                <div className="card flex-between" style={{ cursor: 'pointer' }} onClick={() => handleBookmarkClick(b)}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 500 }}>{b.icon} {b.title}</div>
                    <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                      <span className="badge badge-muted" style={{ textTransform: 'capitalize' }}>{b.targetType}</span>
                      <span>{b.subject}</span>
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleRemove(b.id) }} className="btn btn-danger" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </ViewOnly>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// 5. SETTINGS
// ============================================================
export function ShowcaseSettings({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [studyReminders, setStudyReminders] = useState(true)
  const [hyeSpaceId, setHyeSpaceId] = useState('')

  const aiUsed = 2
  const aiLimit = AI_LIMITS.daily
  const subscription = { isActive: false, expiresAt: null }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-muted-light)' }}>
              <Settings size={24} style={{ color: 'var(--color-text-muted)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Settings</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage your preferences</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        <div className="stack" style={{ gap: 'var(--space-6)' }}>
          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <User size={16} style={{ color: 'var(--color-primary)' }} /> Profile
            </h3>
            <div className="card flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
              <div className="flex-center" style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>
                {STUDENT.firstName[0]}
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>{STUDENT.firstName} {STUDENT.lastName}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{STUDENT.email}</div>
              </div>
            </div>
            <ViewOnly tooltip="Sign up to edit your profile">
              <button className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }} onClick={() => onNavigate?.('editProfile')}>
                <Edit size={14} /> Edit Profile
              </button>
            </ViewOnly>
          </div>

          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Sparkles size={16} style={{ color: 'var(--color-primary)' }} /> Preferences
            </h3>
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  {darkMode ? <Moon size={16} /> : <Sun size={16} />} Dark Mode
                </span>
                <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  {notifications ? <Bell size={16} /> : <BellOff size={16} />} Notifications
                </span>
                <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
              <label className="card flex-between" style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <Calendar size={16} /> Study Reminders
                </span>
                <input type="checkbox" checked={studyReminders} onChange={(e) => setStudyReminders(e.target.checked)} style={{ accentColor: 'var(--color-primary)' }} />
              </label>
            </div>
          </div>

          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Brain size={16} style={{ color: 'var(--color-primary)' }} /> AI Usage
            </h3>
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

          <div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <CreditCard size={16} style={{ color: 'var(--color-primary)' }} /> Subscription
            </h3>

            <div className="card">
              <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>
                    Foundation Plan
                    {subscription.isActive
                      ? <span className="badge badge-success" style={{ marginLeft: 'var(--space-2)' }}>Active</span>
                      : <span className="badge badge-muted" style={{ marginLeft: 'var(--space-2)' }}>Inactive</span>}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>No active subscription</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 220 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <input
                      type="text"
                      value={hyeSpaceId}
                      onChange={(e) => setHyeSpaceId(e.target.value)}
                      placeholder="HyeSpace ID"
                      style={{ flex: 1, minWidth: 0, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
                    />
                    <ViewOnly tooltip="Sign up to save">
                      <button className="btn btn-ghost" style={{ whiteSpace: 'nowrap' }}>Save</button>
                    </ViewOnly>
                  </div>
                  <ViewOnly tooltip="Sign up to subscribe">
                    <button className="btn btn-primary flex-center">
                      <CreditCard size={16} /> Subscribe on HyeSpace
                    </button>
                  </ViewOnly>
                  {hyeSpaceId && (
                    <ViewOnly tooltip="Sign up to remove">
                      <button className="btn btn-ghost" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Remove HyeSpace ID</button>
                    </ViewOnly>
                  )}
                </div>
              </div>
            </div>
          </div>

          <ViewOnly tooltip="Sign up to log out">
            <button className="btn btn-danger flex-center" style={{ width: '100%' }}>
              <LogOut size={16} /> Logout
            </button>
          </ViewOnly>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 6. PROFILE
// ============================================================
export function ShowcaseProfile({ onNavigate }) {
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-info-light)' }}>
              <UserCircle size={24} style={{ color: 'var(--color-info)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Profile</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your personal information</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
          <div className="flex-center" style={{ width: 112, height: 112, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-4xl)', fontWeight: 700, margin: '0 auto' }}>
            {STUDENT.firstName[0]}
          </div>
          <div className="stack" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-4)' }}>
            <div className="h3" style={{ margin: 0 }}>{STUDENT.firstName} {STUDENT.lastName}</div>
            <div className="text-muted">@{STUDENT.username}</div>
            <div className="text-muted">{STUDENT.email}</div>
            <div className="text-muted">{STUDENT.school}</div>
            <div className="text-muted">{STUDENT.country} • {STUDENT.exam.toUpperCase()}</div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            <ViewOnly tooltip="Sign up to edit your profile">
              <button className="btn btn-outline flex-1 flex-center" onClick={() => onNavigate?.('editProfile')}>
                <Edit size={16} /> Edit Profile
              </button>
            </ViewOnly>
            <ViewOnly tooltip="Sign up to change your password">
              <button className="btn btn-outline flex-1 flex-center" onClick={() => onNavigate?.('editProfile')}>
                <Lock size={16} /> Change Password
              </button>
            </ViewOnly>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 7. EDIT PROFILE
// ============================================================
export function ShowcaseEditProfile({ onNavigate }) {
  const [form, setForm] = useState({
    firstName: STUDENT.firstName,
    lastName: STUDENT.lastName,
    school: STUDENT.school,
    country: STUDENT.country,
    exam: STUDENT.exam,
    bio: STUDENT.bio,
    goal: STUDENT.goal,
  })
  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [showPw, setShowPw] = useState(false)
  const [success, setSuccess] = useState(null)
  const [pwSuccess, setPwSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (key, value) => setForm((p) => ({ ...p, [key]: value }))

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setError(null); setSuccess('Profile updated successfully.')
    setTimeout(() => setSuccess(null), 3000)
  }

  const handleSavePassword = (e) => {
    e.preventDefault()
    setError(null); setPwSuccess(null)
    if (!pwForm.currentPassword) return setError('Current password is required')
    if (!pwForm.newPassword || pwForm.newPassword.length < 6) return setError('New password must be at least 6 characters')
    if (pwForm.newPassword !== pwForm.confirmPassword) return setError('Passwords do not match')
    setPwSuccess('Password changed successfully.')
    setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setTimeout(() => setPwSuccess(null), 3000)
  }

  const initials = (form.firstName?.[0] || 'U') + (form.lastName?.[0] || '')

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
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
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('profile')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
        </div>

        {error && <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><AlertCircle size={16} /><span>{error}</span></div></div>}
        {success && <div className="success-card" style={{ marginBottom: 'var(--space-4)' }}><div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}><CheckCircle2 size={16} /><span>{success}</span></div></div>}

        <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-5)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
            <div className="flex-center" style={{ position: 'relative', width: 88, height: 88, borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>
              {initials}
              <ViewOnly tooltip="Sign up to upload an avatar">
                <label className="flex-center" style={{ position: 'absolute', bottom: -4, right: -4, width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', cursor: 'pointer', border: '2px solid var(--color-surface)' }}>
                  <Camera size={14} />
                </label>
              </ViewOnly>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>{form.firstName} {form.lastName}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>@{STUDENT.username}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 2 }}>{STUDENT.email}</div>
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
                  {['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'UK', 'US', 'Other'].map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="label flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                  <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} /> Exam
                </label>
                <select className="select" value={form.exam} onChange={(e) => handleChange('exam', e.target.value)}>
                  {[{ value: 'jamb', label: 'JAMB' }, { value: 'waec', label: 'WAEC' }, { value: 'neco', label: 'NECO' }, { value: 'ssce', label: 'SSCE' }].map((e) => (
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

            <ViewOnly tooltip="Sign up to save changes">
              <button type="submit" className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                <Save size={18} /> Save Changes
              </button>
            </ViewOnly>
          </form>
        </div>

        <div className="card" style={{ padding: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <Lock size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>Change Password</span>
          </div>

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
            <ViewOnly tooltip="Sign up to change your password">
              <button type="submit" className="btn btn-primary flex-center" style={{ width: '100%', padding: 'var(--space-3)' }}>
                <Lock size={18} /> Change Password
              </button>
            </ViewOnly>
          </form>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 8. OFFLINE
// ============================================================
export function ShowcaseOffline({ onNavigate }) {
  const [isOnline, setIsOnline] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)

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
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Offline</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Manage offline data</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost"><ArrowLeft size={16} /> Back</button>
          </ViewOnly>
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
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <RefreshCw size={20} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ fontWeight: 600 }}>Sync</span>
                  </div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                    {lastSync ? `Last synced: ${lastSync.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : 'Not synced yet'}
                  </div>
                </div>
                <ViewOnly tooltip="Sign up to sync">
                  <button onClick={handleSync} disabled={syncing} className="btn btn-primary">
                    {syncing ? <><Loader2 size={16} className="animate-spin" /> Syncing...</> : <><RefreshCw size={16} /> Sync Now</>}
                  </button>
                </ViewOnly>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
