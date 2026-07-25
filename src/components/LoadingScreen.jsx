// ============================================================
// HYELEARNER: FOUNDATION — LOADING SCREEN
// Clean loading screen with inline SVG logo
// ============================================================

import { useState, useEffect } from 'react'

// ============================================================
// EDUCATIONAL TIPS
// ============================================================

const EDUCATIONAL_TIPS = [
  '💡 Consistent daily practice improves retention by up to 80%',
  '💡 Review your mistakes daily to avoid repeating them',
  '💡 Sleep is essential for memory consolidation — get 7-9 hours!',
  '💡 Active recall is more effective than passive reading',
  '💡 Teach what you learn to someone else to reinforce understanding',
  '💡 Break large topics into smaller, manageable chunks',
  '💡 Use the Pomodoro Technique: 25 min study, 5 min break',
  '💡 Practice with past questions to familiarize with exam patterns',
  '💡 Spaced repetition helps move information to long-term memory',
  '💡 Take handwritten notes for better retention',

  '💡 Use the Mistake Book to track and learn from your errors',
  '💡 The Heatmap shows your mastery across all topics',
  '💡 Duo Battle lets you challenge friends and learn together',
  '💡 The Revision Planner helps you schedule your study time',
  '💡 Topic Mode lets you focus on one topic at a time',
  '💡 Track your progress with the Gamification system',
  '💡 Bookmark difficult questions to review them later',
  '💡 The Weakness Finder uses AI to identify your weak areas',
  '💡 Set a daily study goal to build a consistent habit',
  '💡 Export your Mistake Book as PDF for offline review',

  '💡 Start exam preparation at least 3 months in advance',
  '💡 Simulate exam conditions with timed practice sessions',
  '💡 Focus on weak areas first for maximum score improvement',
  '💡 Take regular breaks to avoid burnout',
  '💡 Stay hydrated and eat well during study sessions',
  '💡 Get to know the exam format and marking scheme',
  '💡 Practice time management with mock exams',
  '💡 Review the syllabus to ensure full coverage',
  '💡 Join study groups for collaborative learning',
  '💡 Stay positive and believe in your preparation',

  // ============================================================
  // SOCIAL TIPS (NEW)
  // ============================================================
  '👥 Share your progress with friends for more fun learning!',
  '👥 Challenge a friend to a Duo Battle and make studying competitive!',
  '👥 Study groups make learning more engaging — invite your friends!',
  '👥 Learning together is more fun — connect with friends on Social Hub!',
  '👥 Share your streak with friends and motivate each other!',
  '👥 Compete on the Leaderboard and see where you rank among friends!',
  '👥 Send a message to a friend and study together!',
  '👥 Create a study group and learn as a team!',
]

// ============================================================
// SHUFFLE FUNCTION
// ============================================================

const shuffleArray = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// ============================================================
// RANDOM TIP — FIXED (Shuffles on mount)
// ============================================================

function useRandomTip() {
  const [tips] = useState(() => shuffleArray(EDUCATIONAL_TIPS))
  const [tipIndex, setTipIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % tips.length)
    }, 5000) // Slower rotation (5 seconds)

    return () => clearInterval(interval)
  }, [tips.length])

  return tips[tipIndex]
}

// ============================================================
// HYELEARNER SVG LOGO
// ============================================================

function HyelearnerLogo({ size = 100 }) {
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
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="var(--color-primary-light)"
      />

      {/* Open book */}
      <path
        d="M22 31C30 27 40 28 50 35V76C40 69 30 68 22 72V31Z"
        fill="var(--color-primary)"
      />

      <path
        d="M78 31C70 27 60 28 50 35V76C60 69 70 68 78 72V31Z"
        fill="var(--color-primary)"
      />

      {/* Book center */}
      <path
        d="M50 35V76"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Book lines */}
      <path
        d="M29 40C35 38 41 40 46 43"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      <path
        d="M29 49C35 47 41 49 46 52"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      <path
        d="M71 40C65 38 59 40 54 43"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      <path
        d="M71 49C65 47 59 49 54 52"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Learning spark */}
      <path
        d="M50 15L52.5 21.5L59 24L52.5 26.5L50 33L47.5 26.5L41 24L47.5 21.5L50 15Z"
        fill="var(--color-primary)"
      />
    </svg>
  )
}

// ============================================================
// LOADING SCREEN
// ============================================================

export function LoadingScreen({
  size = 'lg',
  fullScreen = true,
  showTip = true,
  customStyle = {}
}) {
  const tip = useRandomTip()

  const sizeMap = {
    sm: {
      logo: 60,
      spinner: 28,
      tipSize: 'var(--font-size-xs)'
    },

    md: {
      logo: 80,
      spinner: 36,
      tipSize: 'var(--font-size-sm)'
    },

    lg: {
      logo: 100,
      spinner: 44,
      tipSize: 'var(--font-size-sm)'
    },

    xl: {
      logo: 120,
      spinner: 52,
      tipSize: 'var(--font-size-base)'
    }
  }

  const sizes = sizeMap[size] || sizeMap.lg

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: fullScreen ? '100vh' : '200px',
        padding: 'var(--space-6)',
        background: 'var(--color-background)',
        gap: 'var(--space-5)',
        ...customStyle
      }}
    >

      {/* ================================================== */}
      {/* APP LOGO */}
      {/* ================================================== */}

      <div
        style={{
          width: sizes.logo,
          height: sizes.logo,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'var(--color-primary-light)',
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.15)',
          animation: 'pulse 2s ease-in-out infinite',
          overflow: 'hidden'
        }}
      >
        <HyelearnerLogo size={sizes.logo * 0.75} />
      </div>

      {/* ================================================== */}
      {/* APP NAME */}
      {/* ================================================== */}

      <div
        style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '700',
          color: 'var(--color-primary)',
          letterSpacing: '-0.5px'
        }}
      >
        Hyelearner:Foundation
      </div>

      {/* ================================================== */}
      {/* SPINNER */}
      {/* ================================================== */}

      <div
        style={{
          width: sizes.spinner,
          height: sizes.spinner,
          borderRadius: '50%',
          border: '3px solid var(--color-border)',
          borderTop: '3px solid var(--color-primary)',
          animation: 'spin 0.8s linear infinite'
        }}
      />

      {/* ================================================== */}
      {/* EDUCATIONAL TIP */}
      {/* ================================================== */}

      {showTip && (
        <div
          style={{
            maxWidth: '480px',
            padding: 'var(--space-3) var(--space-5)',
            background: 'var(--color-primary-light)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            fontSize: sizes.tipSize,
            color: 'var(--color-text-secondary)',
            transition: 'all var(--transition)',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '1.6',
            border: '1px solid var(--color-primary)',
            marginTop: 'var(--space-2)'
          }}
        >
          <span>{tip}</span>
        </div>
      )}

    </div>
  )
}

// ============================================================
// PAGE LOADING WRAPPER
// ============================================================

export function PageLoading({
  children,
  isLoading = true
}) {
  if (!isLoading) {
    return children
  }

  return <LoadingScreen fullScreen={true} />
}

// ============================================================
// INLINE LOADING
// ============================================================

export function InlineLoading({
  size = 'md'
}) {
  return (
    <LoadingScreen
      size={size}
      fullScreen={false}
      showTip={false}
      customStyle={{
        minHeight: '150px',
        padding: 'var(--space-4)'
      }}
    />
  )
}

// ============================================================
// ADD TO GLOBAL CSS
// ============================================================

/*

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

*/