// ============================================================
// HYELEARNER: FOUNDATION — LANDING
// Two-path entry: Student | Parent
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  Users,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Calendar,
  Search,
  Calculator,
  MessageSquare,
  BarChart3,
  ClipboardCheck,
  Brain,
  Swords,
  Sparkles,
  Clock,
  Target,
  Flame,
  Award,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Eye,
  Send,
  UserPlus,
  Globe,
  Trophy,
  Building2,
  MapPin,
  LineChart,
  History,
  Lightbulb,
  ChevronRight,
  RotateCw,
  X,
  play,
} from 'lucide-react'
import Footer from '../Footer'

// ============================================================
// LOGO — full circle + book + spark (from LoadingScreen)
// ============================================================
function HyelearnerLogo({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hyelearner Logo"
      role="img"
    >
      <circle cx="50" cy="50" r="46" fill="var(--color-primary-light)" />
      <path d="M22 31C30 27 40 28 50 35V76C40 69 30 68 22 72V31Z" fill="var(--color-primary)" />
      <path d="M78 31C70 27 60 28 50 35V76C60 69 70 68 78 72V31Z" fill="var(--color-primary)" />
      <path d="M50 35V76" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M29 40C35 38 41 40 46 43" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M29 49C35 47 41 49 46 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M71 40C65 38 59 40 54 43" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M71 49C65 47 59 49 54 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M50 15L52.5 21.5L59 24L52.5 26.5L50 33L47.5 26.5L41 24L47.5 21.5L50 15Z" fill="var(--color-primary)" />
    </svg>
  )
}

// ============================================================
// MAIN
// ============================================================
export default function Landing() {
  const navigate = useNavigate()

  const handleStudent = () => {
    const seen = localStorage.getItem('hyelearner_slideshow_seen') === 'true'
    if (seen) navigate('/login')
    else navigate('/slideshow/student')
  }

  const handleParent = () => {
    const seen = localStorage.getItem('hyelearner_parent_slideshow_seen') === 'true'
    if (seen) navigate('/parent/login')
    else navigate('/slideshow/parent')
  }

  return (
    <div style={styles.page}>
      {/* HELP LINK */}
      <button
        onClick={() => navigate('/help')}
        style={styles.helpLink}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-primary)'
          e.currentTarget.style.background = 'var(--color-primary-light)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--color-text-muted)'
          e.currentTarget.style.background = 'transparent'
        }}
      >
        <HelpCircle size={16} />
        <span>Help</span>
      </button>

      {/* PREVIEW SHOWCASE */}
<button
  onClick={() => navigate('/showcase')}
  style={styles.previewLink}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = 'var(--color-primary)'
    e.currentTarget.style.color = 'white'
    e.currentTarget.style.borderColor = 'var(--color-primary)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'transparent'
    e.currentTarget.style.color = 'var(--color-primary)'
    e.currentTarget.style.borderColor = 'var(--color-primary)'
  }}
>
  <Play size={14} />
  <span>Preview Hyelearner</span>
  <ArrowRight size={14} />
</button>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.glowOuter} aria-hidden="true">
          <div style={styles.glowInner} />
        </div>

        <div style={styles.logoWrap}>
          <HyelearnerLogo size={180} />
        </div>

        <div style={styles.wordmark}>Hyelearner:Foundation</div>

        <h1 style={styles.headline}>
          Built for the exam
          <br />
          you actually sit.
        </h1>

        <p style={styles.subhead}>
          30,000+ questions, structured lessons, and AI coaching — for
          secondary school, pre-university, and college entrance exams.
        </p>

        <div style={styles.cardsWrap}>
          <button
            onClick={handleStudent}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(79, 70, 229, 0.20)'
              e.currentTarget.style.borderColor = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
          >
            <div style={{ ...styles.cardIcon, background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <GraduationCap size={32} strokeWidth={1.75} />
            </div>
            <div style={styles.cardLabel}>I'm a Student</div>
            <div style={styles.cardDesc}>
              Practice, learn with lessons, and track your exam preparation.
            </div>
            <div style={{ ...styles.cardCta, color: 'var(--color-primary)' }}>
              <span>Start</span>
              <ArrowRight size={16} />
            </div>
          </button>

          <button
            onClick={handleParent}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(34, 197, 94, 0.20)'
              e.currentTarget.style.borderColor = 'var(--color-success)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
          >
            <div style={{ ...styles.cardIcon, background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <Users size={32} strokeWidth={1.75} />
            </div>
            <div style={styles.cardLabel}>I'm a Parent</div>
            <div style={styles.cardDesc}>
              See your child's progress, study activity, and where they need help.
            </div>
            <div style={{ ...styles.cardCta, color: 'var(--color-success)' }}>
              <span>Enter code</span>
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </section>

      {/* STUDY PLAN */}
      <FeatureSection
        icon={Calendar}
        eyebrow="Study Plan"
        title="A plan that knows your exam date."
        body="Enter your exam date, subjects, and weekly hours — Hyelearner generates a week-by-week schedule that adapts as you improve. Countdown, milestones, and recommendations in one place."
      >
        <MockStudyPlan />
      </FeatureSection>

      {/* COURSE FINDER */}
      <FeatureSection
        icon={Search}
        eyebrow="Course Finder"
        title="Know your real chances."
        body="Search a university, enter your course, score, and subjects. Hyelearner checks against real admission data and tells you whether you're qualified, borderline, or need a different plan."
        alt
      >
        <MockCourseFinder />
      </FeatureSection>

      {/* CUT-OFF TRACKER */}
      <FeatureSection
        icon={LineChart}
        eyebrow="Cut-off Tracker"
        title="Five years of data, one graph."
        body="Track how cut-off marks have moved for any university and course over the last five years. See the trend, get a prediction for this year, and know whether a course is safe or highly competitive."
      >
        <MockCutoffTracker />
      </FeatureSection>

      {/* FORMULA SOLVER */}
      <FeatureSection
        icon={Calculator}
        eyebrow="Formula Solver"
        title="Every formula, solved for any variable."
        body="Browse 100+ formulas across all subjects. Enter the values you know, leave one blank, and Hyelearner solves for the unknown — then verifies the answer by plugging it back in."
        alt
      >
        <MockFormulaSolver />
      </FeatureSection>

      {/* SOCIAL */}
      <FeatureSection
        icon={MessageSquare}
        eyebrow="Social"
        title="Study together, not alone."
        body="Add friends, message them, join study groups, and see who's online. Learning is easier when someone's in it with you."
      >
        <MockSocial />
      </FeatureSection>

      {/* PARENT VIEW */}
      <FeatureSection
        icon={Eye}
        eyebrow="Parent View"
        title="For the parents paying attention."
        body="One code gives a parent a read-only view of their child's progress — subject readiness, recent activity, study time, and where they need help. No spying, no personal data."
        alt
      >
        <MockParentView />
      </FeatureSection>

      <Footer />
    </div>
  )
}

// ============================================================
// FEATURE SECTION — text up, mock down
// ============================================================
function FeatureSection({ icon: Icon, eyebrow, title, body, children, alt = false }) {
  return (
    <section style={{ ...styles.feature, ...(alt ? styles.featureAlt : {}) }}>
      <div style={styles.featureInner}>
        <div style={styles.featureText}>
          <div style={styles.featureEyebrow}>
            <Icon size={14} />
            <span>{eyebrow}</span>
          </div>
          <h2 style={styles.featureTitle}>{title}</h2>
          <p style={styles.featureBody}>{body}</p>
        </div>

        <div style={styles.featureMock}>{children}</div>
      </div>
    </section>
  )
}

// ============================================================
// MOCK — STUDY PLAN
// ============================================================
function MockStudyPlan() {
  const days = [
    { day: 'Monday', hours: 2.5, topic: 'Algebra — Linear Equations' },
    { day: 'Tuesday', hours: 1.5, topic: 'Cell Structure — Organelles' },
    { day: 'Wednesday', hours: 2.0, topic: 'Mechanics — Newton\'s Laws' },
    { day: 'Thursday', hours: 2.5, topic: 'Essay Writing — Argumentative' },
  ]

  return (
    <div style={mock.frame}>
      <div style={mock.header}>
        <div style={mock.headerLeft}>
          <Clock size={16} color="var(--color-primary)" />
          <span style={mock.headerTitle}>Exam in</span>
        </div>
        <div style={mock.timer}>45d 12h 30m</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
        {days.map((d) => (
          <div key={d.day} style={mock.row}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={mock.rowTitle}>{d.day}</div>
              <div style={mock.rowSub}>{d.topic}</div>
            </div>
            <div style={mock.rowHours}>{d.hours}h</div>
          </div>
        ))}
      </div>

      <div style={mock.footerRow}>
        <div style={mock.footerBadge}>
          <TrendingUp size={12} />
          <span>On track</span>
        </div>
        <span style={mock.footerNote}>6.2 / 10 hrs this week</span>
      </div>
    </div>
  )
}

// ============================================================
// MOCK — COURSE FINDER (better presentation)
// Shows: search bar with dropdown, selected uni, course, score,
//        result card with status, score comparison, recommendations
// ============================================================
function MockCourseFinder() {
  return (
    <div style={{ ...mock.frame, maxWidth: 520 }}>
      {/* Tabs */}
      <div style={mock.tabRow}>
        <div style={mock.tabActive}>
          <Search size={13} />
          <span>New Check</span>
        </div>
        <div style={mock.tabInactive}>
          <History size={13} />
          <span>History</span>
        </div>
      </div>

      {/* University search — showing dropdown state */}
      <div style={mock.fieldGroup}>
        <div style={mock.fieldHeader}>
          <Building2 size={13} color="var(--color-primary)" />
          <span style={mock.fieldHeaderText}>University</span>
        </div>

        <div style={mock.searchInput}>
          <Search size={14} color="var(--color-text-muted)" />
          <span style={mock.searchInputText}>University of Lagos</span>
          <X size={14} color="var(--color-text-muted)" style={{ marginLeft: 'auto' }} />
        </div>

        {/* Dropdown peek */}
        <div style={mock.dropdown}>
          <div style={{ ...mock.dropdownItem, background: 'var(--color-primary-light)' }}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={mock.dropdownName}>University of Lagos</div>
              <div style={mock.dropdownMeta}>
                <MapPin size={11} style={{ display: 'inline' }} /> Nigeria
              </div>
            </div>
            <CheckCircle2 size={14} color="var(--color-primary)" />
          </div>
          <div style={mock.dropdownItem}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={mock.dropdownName}>University of Ibadan</div>
              <div style={mock.dropdownMeta}>
                <MapPin size={11} style={{ display: 'inline' }} /> Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course + Score row */}
      <div style={mock.fieldPairRow}>
        <div style={mock.fieldHalf}>
          <div style={mock.fieldHeader}>
            <BookOpen size={13} color="var(--color-primary)" />
            <span style={mock.fieldHeaderText}>Course</span>
          </div>
          <div style={mock.smallInput}>Computer Science</div>
        </div>
        <div style={mock.fieldHalf}>
          <div style={mock.fieldHeader}>
            <Target size={13} color="var(--color-primary)" />
            <span style={mock.fieldHeaderText}>Score (JAMB)</span>
          </div>
          <div style={mock.smallInputMono}>278</div>
        </div>
      </div>

      {/* Result card */}
      <div style={mock.resultCard}>
        <div style={mock.resultIconWrap}>
          <CheckCircle2 size={22} color="var(--color-success)" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={mock.resultTitle}>Qualified</div>
          <div style={mock.resultSub}>
            Your score meets the requirement
          </div>

          {/* Score vs cutoff row */}
          <div style={mock.compareRow}>
            <div style={mock.compareBlock}>
              <div style={mock.compareLabel}>Your score</div>
              <div style={{ ...mock.compareValue, color: 'var(--color-success)' }}>278</div>
            </div>
            <div style={mock.compareDivider} />
            <div style={mock.compareBlock}>
              <div style={mock.compareLabel}>Cutoff</div>
              <div style={mock.compareValue}>265</div>
            </div>
            <div style={mock.compareDivider} />
            <div style={mock.compareBlock}>
              <div style={mock.compareLabel}>Chance</div>
              <div style={{ ...mock.compareValue, color: 'var(--color-success)' }}>82%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation pill */}
      <div style={mock.recoRow}>
        <div style={mock.recoIcon}>
          <Lightbulb size={13} color="var(--color-primary)" />
        </div>
        <div style={mock.recoText}>
          Practice harder questions to lock in your score
        </div>
        <ChevronRight size={14} color="var(--color-text-muted)" />
      </div>
    </div>
  )
}

// ============================================================
// MOCK — CUT-OFF TRACKER
// ============================================================
function MockCutoffTracker() {
  const years = [
    { year: 2020, value: 245 },
    { year: 2021, value: 251 },
    { year: 2022, value: 258 },
    { year: 2023, value: 262 },
    { year: 2024, value: 265 },
  ]

  const max = 280

  return (
    <div style={mock.frame}>
      <div style={mock.header}>
        <div style={mock.headerLeft}>
          <LineChart size={16} color="var(--color-warning)" />
          <span style={mock.headerTitle}>UNILAG — Computer Science</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
        {years.map((y) => {
          const isLatest = y.year === 2024
          const pct = (y.value / max) * 100
          return (
            <div key={y.year} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={mock.yearLabel}>{y.year}</span>
              <div style={mock.track}>
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    background: isLatest ? 'var(--color-primary)' : 'var(--color-primary-light)',
                    borderRadius: 3,
                  }}
                />
              </div>
              <span style={{ ...mock.yearValue, color: isLatest ? 'var(--color-primary)' : 'var(--color-text)' }}>
                {y.value}
              </span>
            </div>
          )
        })}
      </div>

      <div style={mock.predictionBox}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <TrendingUp size={14} color="var(--color-warning)" />
          <span style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)' }}>
            Prediction: 270
          </span>
        </div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
          <AlertTriangle size={11} />
          <span>Highly Competitive</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MOCK — FORMULA SOLVER
// ============================================================
function MockFormulaSolver() {
  return (
    <div style={mock.frame}>
      <div style={mock.header}>
        <div style={mock.headerLeft}>
          <Calculator size={16} color="var(--color-primary)" />
          <span style={mock.headerTitle}>Quadratic Formula</span>
        </div>
      </div>

      <div style={mock.formulaBig}>x = (-b ± √(b² - 4ac)) / 2a</div>

      <div style={mock.inputRow}>
        <span style={mock.inputKey}>a</span>
        <span style={mock.inputVal}>1</span>
      </div>
      <div style={mock.inputRow}>
        <span style={mock.inputKey}>b</span>
        <span style={mock.inputVal}>-5</span>
      </div>
      <div style={mock.inputRow}>
        <span style={mock.inputKey}>c</span>
        <span style={{ ...mock.inputVal, opacity: 0.4 }}>?</span>
      </div>

      <div style={mock.solveRow}>
        <Sparkles size={14} color="var(--color-warning)" />
        <span style={mock.solveText}>Solved for c</span>
        <span style={mock.solveValue}>c = 6</span>
      </div>
    </div>
  )
}

// ============================================================
// MOCK — SOCIAL
// ============================================================
function MockSocial() {
  return (
    <div style={mock.frame}>
      <div style={mock.header}>
        <div style={mock.headerLeft}>
          <MessageSquare size={16} color="var(--color-primary)" />
          <span style={mock.headerTitle}>Friends</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>
          <Globe size={12} />
          <span>3 online</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
        {[
          { name: 'Ada', streak: 12, online: true },
          { name: 'Tunde', streak: 8, online: true },
          { name: 'Zainab', streak: 5, online: false },
        ].map((f) => (
          <div key={f.name} style={mock.friendRow}>
            <div style={mock.avatar}>
              {f.name[0]}
              {f.online && <span style={mock.onlineDot} />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={mock.friendName}>{f.name}</div>
              <div style={mock.friendMeta}>
                <Flame size={10} /> {f.streak} day streak
              </div>
            </div>
            <Swords size={14} color="var(--color-warning)" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// MOCK — PARENT VIEW
// ============================================================
function MockParentView() {
  const subjects = [
    { name: 'English', value: 85, color: 'var(--color-success)' },
    { name: 'Math', value: 78, color: 'var(--color-primary)' },
    { name: 'Physics', value: 45, color: 'var(--color-danger)' },
  ]

  return (
    <div style={mock.frame}>
      <div style={mock.header}>
        <div style={mock.headerLeft}>
          <Eye size={16} color="var(--color-success)" />
          <span style={mock.headerTitle}>Ada Obi</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={mock.onlineDot} />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            Online now
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 4 }}>
        <div style={mock.statMini}>
          <Flame size={14} color="var(--color-warning)" />
          <div style={mock.statVal}>12</div>
          <div style={mock.statLbl}>Streak</div>
        </div>
        <div style={mock.statMini}>
          <Target size={14} color="var(--color-primary)" />
          <div style={mock.statVal}>78%</div>
          <div style={mock.statLbl}>Accuracy</div>
        </div>
        <div style={mock.statMini}>
          <Award size={14} color="var(--color-success)" />
          <div style={mock.statVal}>8</div>
          <div style={mock.statLbl}>Level</div>
        </div>
      </div>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {subjects.map((s) => (
          <div key={s.name}>
            <div style={mock.subjLabel}>
              <span>{s.name}</span>
              <span style={{ color: s.color, fontWeight: 600 }}>{s.value}%</span>
            </div>
            <div style={mock.barTrack}>
              <div style={{ width: `${s.value}%`, height: '100%', background: s.color, borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={mock.alertRow}>
        <AlertTriangle size={14} color="var(--color-warning)" />
        <span style={mock.alertText}>Physics below passing</span>
      </div>
    </div>
  )
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  page: {
    background: 'var(--color-background)',
    color: 'var(--color-text)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },

  helpLink: {
    position: 'absolute',
    top: 'var(--space-5)',
    left: 'var(--space-5)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 14px',
    background: 'transparent',
    color: 'var(--color-text-muted)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    cursor: 'pointer',
    zIndex: 5,
    transition: 'all var(--transition)',
  },

  previewLink: {
  position: 'absolute',
  top: 'var(--space-5)',
  right: 'var(--space-5)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '8px 14px',
  background: 'transparent',
  color: 'var(--color-primary)',
  border: '1px solid var(--color-primary)',
  borderRadius: 'var(--radius-full)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 600,
  cursor: 'pointer',
  zIndex: 5,
  transition: 'all var(--transition)',
},

  hero: {
    position: 'relative',
    padding: 'var(--space-16) var(--space-5) var(--space-12)',
    textAlign: 'center',
    zIndex: 1,
  },

  glowOuter: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'min(640px, 90vw)',
    height: 'min(640px, 90vw)',
    pointerEvents: 'none',
    zIndex: -1,
  },
  glowInner: {
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(79, 70, 229, 0.04) 40%, transparent 70%)',
    borderRadius: '50%',
    animation: 'landingGlowPulse 3s ease-in-out infinite',
  },

  logoWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'landingLogoPulse 3s ease-in-out infinite',
    marginBottom: 'var(--space-5)',
  },

  wordmark: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--color-primary)',
    marginBottom: 'var(--space-5)',
  },

  headline: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.05,
    color: 'var(--color-text)',
    margin: 0,
  },

  subhead: {
    fontSize: 'var(--font-size-base)',
    lineHeight: 1.65,
    color: 'var(--color-text-secondary)',
    marginTop: 'var(--space-5)',
    marginBottom: 'var(--space-12)',
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  cardsWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'var(--space-4)',
    maxWidth: 640,
    margin: '0 auto',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: 'var(--space-5)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 250ms cubic-bezier(0.34, 1.3, 0.64, 1)',
    boxShadow: 'var(--shadow-md)',
    minHeight: 240,
    color: 'var(--color-text)',
  },

  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 'var(--radius-xl)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'var(--space-4)',
  },

  cardLabel: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    color: 'var(--color-text)',
  },

  cardDesc: {
    fontSize: 'var(--font-size-sm)',
    lineHeight: 1.55,
    color: 'var(--color-text-muted)',
    marginTop: 'var(--space-2)',
    flex: 1,
  },

  cardCta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    marginTop: 'var(--space-4)',
  },

  feature: {
    position: 'relative',
    padding: 'var(--space-16) var(--space-5)',
    borderTop: '1px solid var(--color-border)',
    zIndex: 1,
  },
  featureAlt: {
    background: 'var(--color-surface)',
  },

  featureInner: {
    maxWidth: '720px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-8)',
  },

  featureText: {
    textAlign: 'center',
  },

  featureEyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 'var(--font-size-xs)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-primary)',
    marginBottom: 'var(--space-3)',
  },

  featureTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
    color: 'var(--color-text)',
    margin: 0,
  },

  featureBody: {
    fontSize: 'var(--font-size-base)',
    lineHeight: 1.7,
    color: 'var(--color-text-secondary)',
    marginTop: 'var(--space-4)',
    maxWidth: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  featureMock: {
    width: '100%',
  },
}

// ============================================================
// MOCK STYLES (shared)
// ============================================================
const mock = {
  frame: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-5)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: 480,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 'var(--space-4)',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  timer: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-primary)',
  },

  // Study Plan rows
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    padding: '10px 12px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  rowTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  rowSub: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  rowHours: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-primary)',
    flexShrink: 0,
  },

  footerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'var(--space-4)',
    paddingTop: 'var(--space-3)',
    borderTop: '1px solid var(--color-border)',
  },
  footerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '4px 10px',
    background: 'var(--color-success-light)',
    color: 'var(--color-success)',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 600,
  },
  footerNote: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
  },

  // Course Finder
  tabRow: {
    display: 'flex',
    gap: 6,
    marginBottom: 'var(--space-4)',
  },
  tabActive: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '7px 14px',
    background: 'var(--color-primary)',
    color: 'white',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 600,
  },
  tabInactive: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '7px 14px',
    background: 'transparent',
    color: 'var(--color-text-muted)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 500,
  },
  fieldGroup: {
    marginBottom: 'var(--space-3)',
    position: 'relative',
  },
  fieldHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    marginBottom: 6,
  },
  fieldHeaderText: {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
  },
  searchInput: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '9px 12px',
    background: 'var(--color-background)',
    border: '2px solid var(--color-primary)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-sm)',
  },
  searchInputText: {
    color: 'var(--color-text)',
    fontWeight: 500,
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  dropdown: {
    marginTop: 6,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    borderBottom: '1px solid var(--color-border-light)',
  },
  dropdownName: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    color: 'var(--color-text)',
  },
  dropdownMeta: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 1,
  },
  fieldPairRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--space-3)',
    marginBottom: 'var(--space-4)',
  },
  fieldHalf: {},
  smallInput: {
    padding: '8px 11px',
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text)',
    fontWeight: 500,
  },
  smallInputMono: {
    padding: '8px 11px',
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text)',
    fontWeight: 700,
    fontFamily: 'var(--font-mono)',
  },

  // Result card
  resultCard: {
    display: 'flex',
    gap: 'var(--space-3)',
    padding: '14px',
    background: 'var(--color-success-light)',
    border: '2px solid var(--color-success)',
    borderRadius: 'var(--radius-xl)',
    marginBottom: 'var(--space-3)',
  },
  resultIconWrap: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  resultTitle: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-success)',
    lineHeight: 1.2,
  },
  resultSub: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-secondary)',
    marginTop: 2,
  },
  compareRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    marginTop: 10,
    padding: '8px 10px',
    background: 'rgba(255,255,255,0.7)',
    borderRadius: 'var(--radius-lg)',
  },
  compareBlock: {
    flex: 1,
    textAlign: 'center',
  },
  compareLabel: {
    fontSize: '10px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
  },
  compareValue: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-text)',
    fontFamily: 'var(--font-mono)',
    marginTop: 2,
  },
  compareDivider: {
    width: 1,
    height: 24,
    background: 'rgba(0,0,0,0.08)',
  },

  // Recommendation row
  recoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    padding: '10px 12px',
    background: 'var(--color-primary-light)',
    borderRadius: 'var(--radius-lg)',
  },
  recoIcon: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  recoText: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-primary)',
    fontWeight: 500,
    lineHeight: 1.4,
    flex: 1,
    minWidth: 0,
  },

  // Cut-off Tracker
  yearLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    fontFamily: 'var(--font-mono)',
    width: 34,
    flexShrink: 0,
  },
  track: {
    flex: 1,
    height: 10,
    background: 'var(--color-background)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  yearValue: {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 700,
    fontFamily: 'var(--font-mono)',
    width: 34,
    textAlign: 'right',
    flexShrink: 0,
  },
  predictionBox: {
    marginTop: 'var(--space-4)',
    padding: '12px 14px',
    background: 'var(--color-warning-light)',
    borderRadius: 'var(--radius-lg)',
  },

  // Formula Solver
  formulaBig: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-lg)',
    fontWeight: 600,
    color: 'var(--color-primary)',
    padding: '12px 14px',
    background: 'var(--color-primary-light)',
    borderRadius: 'var(--radius-lg)',
    textAlign: 'center',
    marginBottom: 'var(--space-4)',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
    marginBottom: 6,
  },
  inputKey: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  inputVal: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
  solveRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    marginTop: 'var(--space-4)',
    padding: '10px 14px',
    background: 'var(--color-warning-light)',
    borderRadius: 'var(--radius-lg)',
  },
  solveText: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    flex: 1,
  },
  solveValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-warning)',
  },

  // Social
  friendRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    padding: '8px 10px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  avatar: {
    position: 'relative',
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'var(--color-primary-light)',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: 'var(--font-size-sm)',
    flexShrink: 0,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: 'var(--color-success)',
    border: '2px solid var(--color-background)',
  },
  friendName: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  friendMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 2,
  },

  // Parent view
  statMini: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    padding: '10px 6px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  statVal: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
  statLbl: {
    fontSize: '10px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
  },
  subjLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-secondary)',
    marginBottom: 4,
  },
  barTrack: {
    height: 6,
    background: 'var(--color-border)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  alertRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    marginTop: 'var(--space-4)',
    padding: '10px 12px',
    background: 'var(--color-warning-light)',
    borderRadius: 'var(--radius-lg)',
  },
  alertText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
}
