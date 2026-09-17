// ============================================================
// HYELEARNER: FOUNDATION — LANDING
// Two-path entry: Student | Parent
// Built by Hyesent.dev
// ============================================================

import { useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  Users,
  ArrowRight,
  ClipboardCheck,
  Brain,
  Swords,
  CheckCircle2,
  Clock3,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from 'lucide-react'

// ============================================================
// INLINE LOGO — bare book + spark (no circle background)
// ============================================================
function BrandMark({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="22 12 56 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hyelearner"
      role="img"
    >
      {/* Left page */}
      <path
        d="M22 31C30 27 40 28 50 35V76C40 69 30 68 22 72V31Z"
        fill="currentColor"
      />
      {/* Right page */}
      <path
        d="M78 31C70 27 60 28 50 35V76C60 69 70 68 78 72V31Z"
        fill="currentColor"
      />
      {/* Center fold */}
      <path
        d="M50 35V76"
        stroke="var(--color-background)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Spark above */}
      <path
        d="M50 15L52.5 21.5L59 24L52.5 26.5L50 33L47.5 26.5L41 24L47.5 21.5L50 15Z"
        fill="currentColor"
      />
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
    if (seen) {
      navigate('/login')
    } else {
      navigate('/slideshow/student')
    }
  }

  const handleParent = () => {
    const seen = localStorage.getItem('hyelearner_parent_slideshow_seen') === 'true'
    if (seen) {
      navigate('/parent/login')
    } else {
      navigate('/slideshow/parent')
    }
  }

  return (
    <div style={styles.page}>
      {/* Ambient glow behind hero — one, not many */}
      <div style={styles.glow} aria-hidden="true" />

      {/* ============================================== */}
      {/* NAV */}
      {/* ============================================== */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brand}>
            <span style={styles.brandMarkWrap}>
              <BrandMark size={26} />
            </span>
            <span style={styles.brandText}>Hyelearner</span>
          </div>

          <button
            onClick={() => navigate('/login')}
            style={styles.navLogin}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-muted)'
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* ============================================== */}
      {/* HERO */}
      {/* ============================================== */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.headline}>
            Built for the exam
            <br />
            you actually sit.
          </h1>

          <p style={styles.subhead}>
            30,000+ questions, structured lessons, and AI coaching —
            for secondary school, pre-university, and college entrance exams.
          </p>

          {/* ============================================ */}
          {/* TWO CARDS — the entire CTA */}
          {/* ============================================ */}
          <div style={styles.cardsWrap}>
            {/* STUDENT CARD */}
            <button
              onClick={handleStudent}
              style={styles.cardStudent}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(79, 70, 229, 0.18)'
                e.currentTarget.style.borderColor = 'var(--color-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
            >
              <div style={{ ...styles.cardIcon, color: 'var(--color-primary)', background: 'var(--color-primary-light)' }}>
                <GraduationCap size={32} strokeWidth={1.75} />
              </div>

              <div style={styles.cardLabel}>I'm a Student</div>

              <div style={styles.cardDesc}>
                Practice for your exam, learn with lessons, and track your progress.
              </div>

              <div style={{ ...styles.cardCta, color: 'var(--color-primary)' }}>
                <span>Start</span>
                <ArrowRight size={16} />
              </div>
            </button>

            {/* PARENT CARD */}
            <button
              onClick={handleParent}
              style={styles.cardParent}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.18)'
                e.currentTarget.style.borderColor = 'var(--color-success)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
            >
              <div style={{ ...styles.cardIcon, color: 'var(--color-success)', background: 'var(--color-success-light)' }}>
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
        </div>
      </section>

      {/* ============================================== */}
      {/* FEATURE 1 — CBT PRACTICE */}
      {/* ============================================== */}
      <section style={styles.feature}>
        <div style={styles.featureInner}>
          <div style={styles.featureText}>
            <div style={styles.featureEyebrow}>
              <ClipboardCheck size={14} />
              <span>CBT Practice</span>
            </div>
            <h2 style={styles.featureTitle}>
              The real exam, minus the nerves.
            </h2>
            <p style={styles.featureBody}>
              Practice with 30,000+ questions in a CBT interface that mirrors
              the real thing. Timed sessions, subject-based practice, and
              instant feedback — so exam day isn't the first time you've seen it.
            </p>
          </div>

          <div style={styles.featureMock}>
            <MockCBT />
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* FEATURE 2 — LESSONS + AI */}
      {/* ============================================== */}
      <section style={{ ...styles.feature, ...styles.featureAlt }}>
        <div style={styles.featureInner}>
          <div style={{ ...styles.featureMock, order: 1 }}>
            <MockAnalytics />
          </div>

          <div style={{ ...styles.featureText, order: 2 }}>
            <div style={styles.featureEyebrow}>
              <Brain size={14} />
              <span>Lessons + AI Coaching</span>
            </div>
            <h2 style={styles.featureTitle}>
              Know where you're losing marks.
            </h2>
            <p style={styles.featureBody}>
              Every wrong answer feeds a live picture of your strengths and
              weaknesses. Readiness by subject, weak-topic drill-down, and a
              study plan that adjusts as you improve.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* FEATURE 3 — DUELS */}
      {/* ============================================== */}
      <section style={styles.feature}>
        <div style={styles.featureInner}>
          <div style={styles.featureText}>
            <div style={styles.featureEyebrow}>
              <Swords size={14} />
              <span>Duels</span>
            </div>
            <h2 style={styles.featureTitle}>
              Progress you can feel.
            </h2>
            <p style={styles.featureBody}>
              Challenge friends to duels, keep a daily streak, and unlock
              badges as you hit milestones. Learning that keeps you coming back.
            </p>
          </div>

          <div style={styles.featureMock}>
            <MockDuel />
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* FOOTER */}
      {/* ============================================== */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            <span style={{ color: 'var(--color-primary)', display: 'inline-flex' }}>
              <BrandMark size={20} />
            </span>
            <span style={styles.footerBrandText}>Hyelearner</span>
          </div>

          <div style={styles.footerLinks}>
            <button
              onClick={() => navigate('/login')}
              style={styles.footerLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              Student login
            </button>
            <button
              onClick={() => navigate('/parent/login')}
              style={styles.footerLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              Parent access
            </button>
          </div>

          <div style={styles.footerCopy}>
            © {new Date().getFullYear()} Hyelearner
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================================
// MOCK — CBT QUESTION
// ============================================================
function MockCBT() {
  const options = ['x = 2', 'x = 4', 'x = 6', 'x = 8']
  const selectedIndex = 1

  return (
    <div style={mockStyles.frame}>
      <div style={mockStyles.header}>
        <div style={mockStyles.headerLeft}>
          <ClipboardCheck size={16} color="var(--color-primary)" />
          <span style={mockStyles.headerTitle}>Mathematics</span>
        </div>
        <div style={mockStyles.headerRight}>
          <Clock3 size={14} color="var(--color-text-muted)" />
          <span style={mockStyles.headerTimer}>12:45</span>
        </div>
      </div>

      <div style={mockStyles.progressLabel}>
        <span>Question 24 of 50</span>
        <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>48%</span>
      </div>
      <div className="progress" style={{ height: 6, marginBottom: 'var(--space-4)' }}>
        <div className="progress-fill progress-fill-primary" style={{ width: '48%' }} />
      </div>

      <div style={mockStyles.questionBox}>
        <p style={mockStyles.questionText}>
          If f(x) = 2x² + 3x - 5, what is f(2)?
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {options.map((opt, i) => {
          const isSelected = i === selectedIndex
          const isCorrect = isSelected && i === 1
          return (
            <div
              key={i}
              style={{
                ...mockStyles.option,
                borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                background: isCorrect ? 'var(--color-success-light)' : 'var(--color-surface)',
              }}
            >
              <span
                style={{
                  ...mockStyles.optionLetter,
                  background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                  color: isSelected ? 'white' : 'var(--color-text-muted)',
                }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span style={mockStyles.optionText}>{opt}</span>
              {isCorrect && <CheckCircle2 size={16} color="var(--color-success)" />}
            </div>
          )
        })}
      </div>

      <div style={mockStyles.navRow}>
        <div style={mockStyles.navBtn}>
          <ChevronLeft size={14} />
          <span>Previous</span>
        </div>
        <span style={mockStyles.navCounter}>24 / 50</span>
        <div style={{ ...mockStyles.navBtn, background: 'var(--color-primary)', color: 'white' }}>
          <span>Next</span>
          <ChevronRightIcon size={14} />
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MOCK — ANALYTICS
// ============================================================
function MockAnalytics() {
  const subjects = [
    { name: 'English', value: 85, color: 'var(--color-success)' },
    { name: 'Mathematics', value: 78, color: 'var(--color-primary)' },
    { name: 'Chemistry', value: 62, color: 'var(--color-warning)' },
    { name: 'Physics', value: 45, color: 'var(--color-danger)' },
  ]

  return (
    <div style={mockStyles.frame}>
      <div style={mockStyles.header}>
        <div style={mockStyles.headerLeft}>
          <Brain size={16} color="var(--color-primary)" />
          <span style={mockStyles.headerTitle}>Weakness Analysis</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
        {subjects.map((s) => (
          <div key={s.name}>
            <div style={mockStyles.barLabel}>
              <span>{s.name}</span>
              <span style={{ color: s.color, fontWeight: 600 }}>{s.value}%</span>
            </div>
            <div style={mockStyles.barTrack}>
              <div
                style={{
                  width: `${s.value}%`,
                  height: '100%',
                  background: s.color,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={mockStyles.weakBox}>
        <div style={mockStyles.weakTitle}>Focus next</div>
        <div style={mockStyles.weakList}>
          <span style={mockStyles.weakPill}>Algebra</span>
          <span style={mockStyles.weakPill}>Organic Chemistry</span>
          <span style={mockStyles.weakPill}>Trigonometry</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MOCK — DUEL
// ============================================================
function MockDuel() {
  return (
    <div style={mockStyles.frame}>
      <div style={mockStyles.header}>
        <div style={mockStyles.headerLeft}>
          <Swords size={16} color="var(--color-warning)" />
          <span style={mockStyles.headerTitle}>Duo Battle</span>
        </div>
      </div>

      <div style={mockStyles.duelGrid}>
        <div style={mockStyles.duelPlayer}>
          <div style={{ ...mockStyles.duelAvatar, background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
            A
          </div>
          <div style={mockStyles.duelName}>Player A</div>
          <div style={mockStyles.duelXp}>1,850 XP</div>
        </div>

        <div style={mockStyles.duelVs}>VS</div>

        <div style={mockStyles.duelPlayer}>
          <div style={{ ...mockStyles.duelAvatar, background: 'var(--color-secondary-light)', color: 'var(--color-secondary)' }}>
            B
          </div>
          <div style={mockStyles.duelName}>Player B</div>
          <div style={mockStyles.duelXp}>1,420 XP</div>
        </div>
      </div>

      <div style={mockStyles.duelStats}>
        <div style={mockStyles.duelStat}>
          <div style={mockStyles.duelStatValue}>7</div>
          <div style={mockStyles.duelStatLabel}>day streak</div>
        </div>
        <div style={mockStyles.duelStatDivider} />
        <div style={mockStyles.duelStat}>
          <div style={mockStyles.duelStatValue}>2,450</div>
          <div style={mockStyles.duelStatLabel}>total XP</div>
        </div>
        <div style={mockStyles.duelStatDivider} />
        <div style={mockStyles.duelStat}>
          <div style={mockStyles.duelStatValue}>8</div>
          <div style={mockStyles.duelStatLabel}>duels won</div>
        </div>
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
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },

  glow: {
    position: 'absolute',
    top: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '800px',
    background:
      'radial-gradient(circle, rgba(79, 70, 229, 0.10) 0%, rgba(79, 70, 229, 0) 60%)',
    pointerEvents: 'none',
    zIndex: 0,
  },

  // NAV
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: 'rgba(10, 10, 15, 0.72)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--color-border)',
  },
  navInner: {
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '14px var(--space-5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  brandMarkWrap: {
    display: 'inline-flex',
    color: 'var(--color-primary)',
  },
  brandText: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--color-text)',
  },
  navLogin: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    color: 'var(--color-text-muted)',
    padding: '6px 10px',
    transition: 'color 150ms ease',
  },

  // HERO
  hero: {
    position: 'relative',
    zIndex: 1,
    padding: '80px var(--space-5) 40px',
  },
  heroInner: {
    maxWidth: '760px',
    margin: '0 auto',
    textAlign: 'center',
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
    marginTop: 20,
    marginBottom: 56,
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  // CARDS
  cardsWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'var(--space-4)',
    maxWidth: 640,
    margin: '0 auto',
  },
  cardStudent: {
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
    transition: 'all 220ms cubic-bezier(0.34, 1.3, 0.64, 1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    minHeight: 260,
    color: 'var(--color-text)',
  },
  cardParent: {
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
    transition: 'all 220ms cubic-bezier(0.34, 1.3, 0.64, 1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    minHeight: 260,
    color: 'var(--color-text)',
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 'var(--radius-xl)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    marginTop: 8,
    flex: 1,
  },
  cardCta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    marginTop: 20,
  },

  // FEATURE
  feature: {
    position: 'relative',
    zIndex: 1,
    padding: '80px var(--space-5)',
    borderTop: '1px solid var(--color-border)',
  },
  featureAlt: {
    background: 'var(--color-background)',
  },
  featureInner: {
    maxWidth: '1080px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 'clamp(32px, 5vw, 72px)',
    alignItems: 'center',
  },
  featureText: {
    order: 1,
  },
  featureMock: {
    order: 2,
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
    marginBottom: 16,
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
    marginTop: 16,
  },

  // FOOTER
  footer: {
    borderTop: '1px solid var(--color-border)',
    padding: '32px var(--space-5)',
    position: 'relative',
    zIndex: 1,
  },
  footerInner: {
    maxWidth: '1080px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  footerBrandText: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
  footerLinks: {
    display: 'flex',
    gap: 20,
  },
  footerLink: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    padding: 0,
    transition: 'color 150ms ease',
  },
  footerCopy: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
  },
}

// ============================================================
// MOCK STYLES (shared across the three previews)
// ============================================================
const mockStyles = {
  frame: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-5)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
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
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  headerTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  headerTimer: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginBottom: 6,
  },
  questionBox: {
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-4)',
    marginBottom: 'var(--space-4)',
  },
  questionText: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    color: 'var(--color-text)',
    margin: 0,
    lineHeight: 1.55,
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    padding: '10px 14px',
    border: '2px solid var(--color-border)',
    borderRadius: 'var(--radius)',
    transition: 'all 150ms ease',
  },
  optionLetter: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 700,
    flexShrink: 0,
  },
  optionText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text)',
    flex: 1,
  },
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'var(--space-4)',
  },
  navBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: 'var(--radius)',
    background: 'var(--color-background)',
    color: 'var(--color-text-secondary)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 500,
  },
  navCounter: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
  },

  // analytics
  barLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-secondary)',
    marginBottom: 6,
  },
  barTrack: {
    height: 8,
    background: 'var(--color-border)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  weakBox: {
    marginTop: 20,
    padding: 'var(--space-3)',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  weakTitle: {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 600,
    color: 'var(--color-text-muted)',
    marginBottom: 8,
  },
  weakList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  weakPill: {
    padding: '4px 10px',
    background: 'var(--color-danger-light)',
    color: 'var(--color-danger)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 500,
    borderRadius: 999,
    border: '1px solid var(--color-danger)',
  },

  // duel
  duelGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: 'var(--space-3)',
    alignItems: 'center',
    marginTop: 4,
  },
  duelPlayer: {
    textAlign: 'center',
  },
  duelAvatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 8px',
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
  },
  duelName: {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  duelXp: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 2,
  },
  duelVs: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--color-warning)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 900,
  },
  duelStats: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 'var(--space-3)',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  duelStat: {
    flex: 1,
    textAlign: 'center',
  },
  duelStatValue: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    color: 'var(--color-primary)',
  },
  duelStatLabel: {
    fontSize: '10px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
    marginTop: 2,
  },
  duelStatDivider: {
    width: 1,
    height: 24,
    background: 'var(--color-border)',
  },
}
