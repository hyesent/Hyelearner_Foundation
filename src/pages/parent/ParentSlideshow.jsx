// ============================================================
// HYELEARNER: FOUNDATION — PARENT SLIDESHOW
// 5-slide onboarding for parents
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import {
  Users,
  TrendingUp,
  AlertTriangle,
  Award,
  KeyRound,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Flame,
  Swords,
  BarChart3,
  Eye,
} from 'lucide-react'

// ============================================================
// SLIDE 1 — WELCOME
// ============================================================
function WelcomeVisual() {
  return (
    <div style={vis.wrap}>
      <div style={vis.iconCircleLarge}>
        <Users size={40} color="var(--color-success)" />
      </div>
      <div style={vis.textBlock}>
        <div style={vis.bigNumber}>Welcome</div>
        <div style={vis.smallLabel}>to the parent view</div>
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 2 — SEE PROGRESS
// ============================================================
function ProgressVisual() {
  const subjects = [
    { name: 'English', value: 85, color: 'var(--color-success)' },
    { name: 'Mathematics', value: 78, color: 'var(--color-primary)' },
    { name: 'Chemistry', value: 62, color: 'var(--color-warning)' },
    { name: 'Physics', value: 45, color: 'var(--color-danger)' },
  ]

  return (
    <div style={vis.card}>
      <div style={vis.cardHeader}>
        <BarChart3 size={16} color="var(--color-success)" />
        <span style={vis.cardTitle}>Subject Readiness</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
        {subjects.map((s) => (
          <div key={s.name}>
            <div style={vis.barLabel}>
              <span>{s.name}</span>
              <span style={{ color: s.color, fontWeight: 600 }}>{s.value}%</span>
            </div>
            <div style={vis.barTrack}>
              <div style={{ width: `${s.value}%`, height: '100%', background: s.color, borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 3 — KNOW WEAKNESSES
// ============================================================
function WeaknessVisual() {
  const items = [
    { text: 'Physics at 45% — below passing', level: 'danger' },
    { text: '8 unresolved mistakes in Chemistry', level: 'warning' },
    { text: "Hasn't studied today", level: 'warning' },
  ]

  return (
    <div style={vis.card}>
      <div style={vis.cardHeader}>
        <AlertTriangle size={16} color="var(--color-warning)" />
        <span style={vis.cardTitle}>Attention Needed</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {items.map((item, i) => (
          <div key={i} style={vis.alertRow}>
            <span
              style={{
                ...vis.alertDot,
                background:
                  item.level === 'danger'
                    ? 'var(--color-danger)'
                    : 'var(--color-warning)',
              }}
            />
            <span style={vis.alertText}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 4 — CELEBRATE WINS
// ============================================================
function WinsVisual() {
  return (
    <div style={vis.card}>
      <div style={vis.cardHeader}>
        <Award size={16} color="var(--color-primary)" />
        <span style={vis.cardTitle}>Achievements</span>
      </div>

      <div style={vis.winsGrid}>
        <div style={vis.winTile}>
          <Flame size={22} color="var(--color-warning)" />
          <div style={vis.winValue}>12</div>
          <div style={vis.winLabel}>day streak</div>
        </div>
        <div style={vis.winTile}>
          <Award size={22} color="var(--color-primary)" />
          <div style={vis.winValue}>5</div>
          <div style={vis.winLabel}>badges</div>
        </div>
        <div style={vis.winTile}>
          <Swords size={22} color="var(--color-success)" />
          <div style={vis.winValue}>8</div>
          <div style={vis.winLabel}>duel wins</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// SLIDE 5 — ENTER CODE
// ============================================================
function CodeVisual() {
  return (
    <div style={vis.wrap}>
      <div style={{ ...vis.iconCircleLarge, background: 'var(--color-success-light)' }}>
        <KeyRound size={40} color="var(--color-success)" />
      </div>
      <div style={vis.codeHint}>
        Ask your child for their 6-character code
      </div>
      <div style={vis.codeBox}>
        <span style={vis.codeChar}>A</span>
        <span style={vis.codeChar}>3</span>
        <span style={vis.codeChar}>F</span>
        <span style={vis.codeChar}>9</span>
        <span style={vis.codeChar}>K</span>
        <span style={vis.codeChar}>2</span>
      </div>
    </div>
  )
}

// ============================================================
// SLIDE DATA
// ============================================================
const PARENT_SLIDES = [
  {
    id: 'welcome',
    title: 'Welcome, Parent',
    subtitle: "You're about to see how your child is preparing.",
    description:
      'Hyelearner gives you a real, honest view of your child\'s exam preparation — no guessing, no asking.',
    visual: WelcomeVisual,
  },
  {
    id: 'progress',
    title: 'See their progress',
    subtitle: 'Subject by subject.',
    description:
      'Track readiness across every subject they\'re studying. Spot where they\'re strong and where they need more time.',
    visual: ProgressVisual,
  },
  {
    id: 'weakness',
    title: 'Know where they struggle',
    subtitle: 'Before it becomes a problem.',
    description:
      'We surface the areas that need attention — weak subjects, unresolved mistakes, missed study days.',
    visual: WeaknessVisual,
  },
  {
    id: 'wins',
    title: 'Celebrate their wins',
    subtitle: 'Big and small.',
    description:
      'Streaks, badges, duel wins — see the milestones and praise them for consistency, not just for scores.',
    visual: WinsVisual,
  },
  {
    id: 'code',
    title: 'Enter your code',
    subtitle: 'One code. Full access.',
    description:
      'Your child generates a permanent code from their settings. Enter it once — that\'s your key.',
    visual: CodeVisual,
  },
]

// ============================================================
// MAIN SLIDESHOW
// ============================================================
export function ParentSlideshow({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const totalSlides = PARENT_SLIDES.length

  const currentSlide = PARENT_SLIDES[currentIndex]
  const VisualComponent = currentSlide.visual
  const isLastSlide = currentIndex === totalSlides - 1

  const handleComplete = () => {
    setIsExiting(true)
    localStorage.setItem('hyelearner_parent_slideshow_seen', 'true')
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 350)
  }

  const goToSlide = (index) => {
    if (isExiting) return
    if (index < 0) index = totalSlides - 1
    if (index >= totalSlides) index = 0
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    if (isExiting) return
    if (isLastSlide) handleComplete()
    else goToSlide(currentIndex + 1)
  }

  const prevSlide = () => {
    if (isExiting) return
    if (currentIndex > 0) goToSlide(currentIndex - 1)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        nextSlide()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        handleComplete()
      }
      if (e.key === 'Enter' && isLastSlide) {
        e.preventDefault()
        handleComplete()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isExiting])

  return (
    <div style={s.page}>
      <div
        style={{
          ...s.card,
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? 'scale(0.97)' : 'scale(1)',
        }}
      >
        {/* Skip */}
        <button onClick={handleComplete} style={s.skip}>
          Skip
        </button>

        {/* Counter */}
        <div style={s.counter}>
          {currentIndex + 1} / {totalSlides}
        </div>

        {/* Content */}
        <div style={s.content}>
          <div style={s.header}>
            <div style={s.badge}>
              <Eye size={12} />
              <span style={s.badgeText}>PARENT VIEW</span>
            </div>
            <h2 style={s.title}>{currentSlide.title}</h2>
            <p style={s.subtitle}>{currentSlide.subtitle}</p>
          </div>

          <div style={s.visualWrap}>
            <VisualComponent />
          </div>

          <p style={s.description}>{currentSlide.description}</p>

          {/* Nav */}
          <div style={s.navRow}>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              style={{
                ...s.navBtn,
                opacity: currentIndex === 0 ? 0.4 : 1,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <div style={s.dots}>
              {PARENT_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  style={{
                    ...s.dot,
                    width: i === currentIndex ? 12 : 8,
                    height: i === currentIndex ? 12 : 8,
                    background:
                      i === currentIndex
                        ? 'var(--color-success)'
                        : 'var(--color-border)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              style={{
                ...s.navBtn,
                ...(isLastSlide ? s.navBtnPrimary : s.navBtnDefault),
              }}
            >
              {isLastSlide ? (
                <>
                  <span>Enter code</span>
                  <Rocket size={16} />
                </>
              ) : (
                <>
                  <span>Next</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// STYLES
// ============================================================
const s = {
  page: {
    background: 'var(--color-background)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--space-5)',
  },
  card: {
    maxWidth: 640,
    width: '100%',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-8)',
    position: 'relative',
    transition: 'opacity 300ms ease, transform 300ms ease',
  },
  skip: {
    position: 'absolute',
    top: 'var(--space-4)',
    left: 'var(--space-4)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    padding: 4,
  },
  counter: {
    position: 'absolute',
    top: 'var(--space-4)',
    right: 'var(--space-4)',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    background: 'var(--color-background)',
    padding: '4px 10px',
    borderRadius: 999,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 'var(--space-5)',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    background: 'var(--color-success-light)',
    color: 'var(--color-success)',
    borderRadius: 999,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 700,
    letterSpacing: '0.08em',
  },
  title: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--color-text)',
    margin: 0,
  },
  subtitle: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-secondary)',
    marginTop: 6,
  },
  visualWrap: {
    width: '100%',
    marginBottom: 'var(--space-5)',
  },
  description: {
    fontSize: 'var(--font-size-sm)',
    lineHeight: 1.7,
    color: 'var(--color-text-secondary)',
    textAlign: 'center',
    maxWidth: 460,
    marginBottom: 'var(--space-6)',
  },
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 'var(--space-3)',
  },
  navBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 16px',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--color-border)',
    background: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 150ms ease',
  },
  navBtnDefault: {
    background: 'var(--color-surface)',
    color: 'var(--color-text)',
  },
  navBtnPrimary: {
    background: 'var(--color-success)',
    color: 'white',
    border: '1px solid var(--color-success)',
  },
  dots: {
    display: 'flex',
    gap: 6,
    alignItems: 'center',
  },
  dot: {
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 150ms ease',
  },
}

// ============================================================
// VISUAL STYLES
// ============================================================
const vis = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-4)',
    padding: 'var(--space-6)',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-2xl)',
    border: '1px solid var(--color-border)',
  },
  iconCircleLarge: {
    width: 88,
    height: 88,
    borderRadius: '50%',
    background: 'var(--color-primary-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    textAlign: 'center',
  },
  bigNumber: {
    fontSize: 'var(--font-size-3xl)',
    fontWeight: 800,
    color: 'var(--color-text)',
    letterSpacing: '-0.02em',
  },
  smallLabel: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    marginTop: 4,
  },
  card: {
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-5)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
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
  alertRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--color-border)',
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  alertText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
  winsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'var(--space-3)',
    marginTop: 12,
  },
  winTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: 'var(--space-4)',
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--color-border)',
  },
  winValue: {
    fontSize: 'var(--font-size-xl)',
    fontWeight: 800,
    color: 'var(--color-text)',
  },
  winLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
  },
  codeHint: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
  },
  codeBox: {
    display: 'flex',
    gap: 8,
  },
  codeChar: {
    width: 44,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-surface)',
    border: '2px solid var(--color-success)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-xl)',
    fontWeight: 800,
    color: 'var(--color-success)',
    fontFamily: 'var(--font-mono)',
  },
}

export default ParentSlideshow
