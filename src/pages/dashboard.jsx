// ============================================================
// HYELEARNER: FOUNDATION — DASHBOARD
// Full feature index (opened via 4-dot nav button)
// Centered title, bottom nav included (no back button)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { subscriptions } from '../services'
import Footer from '../Footer'
import { LoadingScreen } from '../components/LoadingScreen'
import {
  BookOpen,
  PenTool,
  Target,
  BarChart3,
  Flame,
  Brain,
  BookMarked,
  Calendar,
  Swords,
  Users,
  GraduationCap,
  LineChart,
  Star,
  Trophy,
  Gamepad2,
  Settings,
  Languages,
  Award,
  PieChart,
  Shield,
  MessageSquare,
  FunctionSquare,
  Home as HomeIcon,
  Play,
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [subscription, setSubscription] = useState(null)
  const [loading, setLoading] = useState(true)

  const isHardcoded = user?.email === 'hyesent@example.com' || user?.id === 'user_hyesent'

  useEffect(() => {
    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (error) {
        console.error('Failed to load subscription:', error)
        setSubscription({ isActive: false })
      } finally {
        setLoading(false)
      }
    }
    loadSubscription()
  }, [])

  const getColorClass = (color) => {
    const map = {
      'var(--color-primary)': 'var(--color-primary-light)',
      'var(--color-success)': 'var(--color-success-light)',
      'var(--color-secondary)': 'var(--color-secondary-light)',
      'var(--color-info)': 'var(--color-info-light)',
      'var(--color-danger)': 'var(--color-danger-light)',
      'var(--color-warning)': 'var(--color-warning-light)',
      'var(--color-text-muted)': 'var(--color-border)',
    }
    return map[color] || 'var(--color-primary-light)'
  }

  const allFeatures = [
    { id: 'hyetutor', icon: Brain, title: 'HyeTutor', desc: 'Your AI coach', color: 'var(--color-primary)' },
    { id: 'lessons', icon: BookOpen, title: 'Lessons', desc: 'Learn new concepts', color: 'var(--color-primary)' },
    { id: 'practice', icon: PenTool, title: 'Practice', desc: 'Test your knowledge', color: 'var(--color-success)' },
    { id: 'topic-mode', icon: Target, title: 'Topic Mode', desc: 'Master one topic', color: 'var(--color-secondary)' },
    { id: 'mock-exams', icon: Award, title: 'Mock Exams', desc: 'Full exam simulation', color: 'var(--color-primary)' },
    { id: 'results', icon: BarChart3, title: 'Results', desc: 'View your progress', color: 'var(--color-info)' },
    { id: 'analytics', icon: PieChart, title: 'Analytics', desc: 'View your stats', color: 'var(--color-primary)' },
    { id: 'heatmap', icon: Flame, title: 'Heatmap', desc: 'Track your mastery', color: 'var(--color-danger)' },
    { id: 'weakness', icon: Brain, title: 'Weakness Finder', desc: 'Find weak spots', color: 'var(--color-warning)' },
    { id: 'mistake-book', icon: BookMarked, title: 'Mistake Book', desc: 'Review errors', color: 'var(--color-info)' },
    { id: 'revision-planner', icon: Calendar, title: 'Revision Planner', desc: 'Plan your study', color: 'var(--color-success)' },
    { id: 'study-plan', icon: Calendar, title: 'Study Plan', desc: 'AI-generated plan', color: 'var(--color-primary)' },
    { id: 'duo-battle', icon: Swords, title: 'Duo Battle', desc: 'Challenge friends', color: 'var(--color-warning)' },
    { id: 'social', icon: Users, title: 'Social Hub', desc: 'Connect with friends', color: 'var(--color-primary)' },
    { id: 'parent', icon: Shield, title: 'Parent Dashboard', desc: 'Monitor progress', color: 'var(--color-danger)' },
    { id: 'course-finder', icon: GraduationCap, title: 'Course Finder', desc: 'Find your path', color: 'var(--color-secondary)' },
    { id: 'cutoff-tracker', icon: LineChart, title: 'Cut-off Tracker', desc: 'Track cut-offs', color: 'var(--color-text-muted)' },
    { id: 'bookmarks', icon: Star, title: 'Bookmarks', desc: 'Save for later', color: 'var(--color-warning)' },
    { id: 'leaderboards', icon: Trophy, title: 'Leaderboards', desc: 'Compete', color: 'var(--color-warning)' },
    { id: 'gamification', icon: Gamepad2, title: 'Gamification', desc: 'Earn badges', color: 'var(--color-secondary)' },
    { id: 'Formulas', icon: FunctionSquare, title: 'Formulas', desc: 'Search formulas & calculate', color: 'var(--color-success)' },
    { id: 'dictionary', icon: Languages, title: 'Dictionary', desc: 'Find word definitions', color: 'var(--color-primary)' },
    { id: 'settings', icon: Settings, title: 'Settings', desc: 'Customize', color: 'var(--color-text-muted)' },
    { id: 'feedback', icon: MessageSquare, title: 'Feedback & Contributions', desc: 'Help improve Hyelearner', color: 'var(--color-primary)' },
  ]

  const FREE_FEATURES = ['practice', 'settings', 'revision-planner', 'social', 'feedback']

  const isFreeUser = !subscription?.isActive

  let features = allFeatures.filter(feature => {
    if (isFreeUser) {
      return FREE_FEATURES.includes(feature.id)
    }
    return true
  })

  if (isHardcoded) {
    features.push({
      id: 'admin',
      icon: Shield,
      title: 'Admin Panel',
      desc: 'Manage app data',
      color: 'var(--color-danger)',
    })
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div
      className="has-bottom-nav"
      style={{
        background: 'var(--color-background)',
        minHeight: '100vh',
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 'var(--space-4)',
          paddingBottom: 'var(--space-4)',
          maxWidth: '48rem',
        }}
      >
        {/* ================= CENTERED TITLE ================= */}
        <h1
          className="text-center"
          style={{
            margin: 0,
            marginBottom: 'var(--space-5)',
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--color-text)',
          }}
        >
          DASHBOARD
        </h1>

        {/* ================= FEATURE GRID ================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3)',
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const bgColor = getColorClass(feature.color)
            return (
              <button
                key={feature.id}
                onClick={() => navigate(`/${feature.id}`)}
                className="card card-hover"
                style={{
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  background: 'var(--color-surface)',
                  padding: 'var(--space-4)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <div
                  className="flex-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-lg)',
                    background: bgColor,
                    color: feature.color,
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text)',
                    lineHeight: 1.2,
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.3,
                  }}
                >
                  {feature.desc}
                </div>
              </button>
            )
          })}
        </div>

        {/* ================= FOOTER ================= */}
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Footer />
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <BottomNav />
    </div>
  )
}

// ============================================================
// BOTTOM NAV — Dashboard variant
// Tabs route back to Home shell; center 4-dot is inert here
// ============================================================
function BottomNav() {
  const navigate = useNavigate()

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-inner">
        <div className="bottom-nav-bar" aria-hidden="true" />
        <div className="bottom-nav-center-glow" aria-hidden="true" />

        <div className="bottom-nav-tabs">
          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/')}
            aria-label="Home"
          >
            <HomeIcon size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Home</span>
          </button>

          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/', { state: { tab: 'study' } })}
            aria-label="Study"
          >
            <Play size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Study</span>
          </button>

          <div className="bottom-nav-center-slot" />

          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/social')}
            aria-label="Social"
          >
            <Users size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Social</span>
          </button>

          <button
            className="bottom-nav-tab"
            onClick={() => navigate('/', { state: { tab: 'duel' } })}
            aria-label="Duel"
          >
            <Swords size={22} strokeWidth={1.8} />
            <span className="bottom-nav-tab-label">Duel</span>
          </button>
        </div>

        {/* Center — already on Dashboard */}
        <button
          className="bottom-nav-center"
          onClick={() => navigate('/dashboard')}
          aria-label="Dashboard"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
