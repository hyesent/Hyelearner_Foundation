// ============================================================
// HYELEARNER: FOUNDATION — DASHBOARD (POLISHED)
// Premium EdTech Design with Lucide Icons
// Now pulls real data from storage + Free tier restrictions + SOCIAL + FEEDBACK + ADMIN
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
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
  User,
  Languages,
  Zap,
  Award,
  TrendingUp,
  Clock,
  ChevronRight,
  LayoutDashboard,
  Sparkles,
  FileText,
  Activity,
  PieChart,
  Share2,
  Smartphone,
  Bell,
  Gift,
  RefreshCw,
  Crown,
  Lock,
  Bot,
  MessageCircle,
  UserPlus,
  Shield,
  Globe,
  MessageSquare,  
  Database,
  FunctionSquare        
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [stats, setStats] = useState({
    xp: 0,
    level: 1,
    streak: 0,
    accuracy: 0,
    sessions: 0,
    totalQuestions: 0,
    correct: 0,
    wrong: 0,
  })
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState(null)

  // ---- Mobile detection (inline, no external hook) ----
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // -------------------------------------------------------

  // Check if hardcoded account
  const isHardcoded = user?.email === 'hyesent@example.com' || user?.id === 'user_hyesent'

  // Load subscription status
  useEffect(() => {
    const loadSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setSubscription(status)
      } catch (error) {
        console.error('Failed to load subscription:', error)
        setSubscription({ isActive: false })
      }
    }
    loadSubscription()
  }, [])

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = () => {
    setLoading(true)
    
    try {
      const gamification = storage.getGamification()
      const sessions = storage.getSessions()
      let totalQuestions = 0
      let correct = 0
      let wrong = 0
      let completedSessions = 0
      
      sessions.forEach(session => {
        if (session.status === 'completed') {
          completedSessions++
          totalQuestions += session.totalQuestions || session.total || 0
          correct += session.correctAnswers || session.correct || 0
          wrong += session.wrongAnswers || session.wrong || 0
        }
      })
      
      const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
      
      setStats({
        xp: gamification.xp || 0,
        level: gamification.level || 1,
        streak: gamification.streak || 0,
        accuracy: accuracy,
        sessions: completedSessions,
        totalQuestions: totalQuestions,
        correct: correct,
        wrong: wrong,
      })
    } catch (error) {
      console.error('Failed to load stats:', error)
    } finally {
      setLoading(false)
    }
  }

  // Refresh stats every 30 seconds
  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        loadStats()
      }, 30000)
      return () => clearInterval(interval)
    }
  }, [loading])

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
    { id: 'hyetutor', icon: Bot, title: 'HyeTutor', desc: 'Your AI coach', color: 'var(--color-primary)' },
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
    { id: 'study-plan', icon: FileText, title: 'Study Plan', desc: 'AI-generated plan', color: 'var(--color-primary)' },
    { id: 'duo-battle', icon: Swords, title: 'Duo Battle', desc: 'Challenge friends', color: 'var(--color-warning)' },
    { id: 'social', icon: Users, title: 'Social Hub', desc: 'Connect with friends', color: 'var(--color-primary)' },
    { id: 'parent', icon: Shield, title: 'Parent Dashboard', desc: 'Monitor progress', color: 'var(--color-danger)' },
    { id: 'course-finder', icon: GraduationCap, title: 'Course Finder', desc: 'Find your path', color: 'var(--color-secondary)' },
    { id: 'cutoff-tracker', icon: LineChart, title: 'Cut-off Tracker', desc: 'Track cut-offs', color: 'var(--color-text-muted)' },
    { id: 'bookmarks', icon: Star, title: 'Bookmarks', desc: 'Save for later', color: 'var(--color-warning)' },
    { id: 'leaderboards', icon: Trophy, title: 'Leaderboards', desc: 'Compete', color: 'var(--color-warning)' },
    { id: 'gamification', icon: Gamepad2, title: 'Gamification', desc: 'Earn badges', color: 'var(--color-secondary)' },
    { id: 'Formulas', icon: FunctionSquare, title: 'Formulas', desc: 'Search formulas & calculate', color: 'var(--color-text-success)' },
    { id: 'dictionary', icon: Languages, title: 'Dictionary', desc: 'Find word definitions', color: 'var(--color-primary)' },
    { id: 'settings', icon: Settings, title: 'Settings', desc: 'Customize', color: 'var(--color-text-muted)' },
    { id: 'feedback', icon: MessageSquare, title: 'Feedback & Contributions', desc: 'Help improve Hyelearner', color: 'var(--color-primary)' },
  ]

  // ✅ FREE users only see: practice, settings, profile (profile is via avatar), revision-planner, social (limited)
  const FREE_FEATURES = ['practice', 'settings', 'revision-planner', 'social', 'feedback']

  const isFreeUser = !subscription?.isActive

  let features = allFeatures.filter(feature => {
    if (isFreeUser) {
      return FREE_FEATURES.includes(feature.id)
    }
    return true
  })

  // ✅ Add Admin panel (only for hardcoded account)
  if (isHardcoded) {
    features.push({
      id: 'admin',
      icon: Shield,
      title: 'Admin Panel',
      desc: 'Manage app data',
      color: 'var(--color-danger)'
    })
  }

  const statsConfig = [
    { 
      key: 'xp', 
      icon: Zap, 
      label: 'Total XP', 
      value: stats.xp.toLocaleString(), 
      sub: `Level ${stats.level}`, 
      color: 'var(--color-primary)',
      bg: 'var(--color-primary-light)'
    },
    { 
      key: 'streak', 
      icon: Flame, 
      label: 'Streak', 
      value: stats.streak, 
      sub: stats.streak === 0 ? 'Start today' : 'Keep going!', 
      color: 'var(--color-warning)',
      bg: 'var(--color-warning-light)'
    },
    { 
      key: 'sessions', 
      icon: PenTool, 
      label: 'Sessions', 
      value: stats.sessions, 
      sub: stats.sessions === 0 ? 'Start your first' : 'Great progress!', 
      color: 'var(--color-success)',
      bg: 'var(--color-success-light)'
    },
    { 
      key: 'accuracy', 
      icon: Target, 
      label: 'Accuracy', 
      value: `${stats.accuracy}%`, 
      sub: stats.accuracy === 0 ? 'Start practicing' : stats.accuracy >= 70 ? 'Excellent' : stats.accuracy >= 40 ? 'Getting there' : 'Needs work', 
      color: stats.accuracy >= 70 ? 'var(--color-success)' : stats.accuracy >= 40 ? 'var(--color-warning)' : 'var(--color-danger)',
      bg: stats.accuracy >= 70 ? 'var(--color-success-light)' : stats.accuracy >= 40 ? 'var(--color-warning-light)' : 'var(--color-danger-light)'
    },
  ]

  if (loading) {
    return <LoadingScreen />
  }

  // ---------- Layout helpers ----------
  const gridCols = isMobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr'
  const cardPadding = isMobile ? 'var(--space-3)' : 'var(--space-4)'
  const featurePadding = isMobile ? 'var(--space-3)' : 'var(--space-5)'
  const gap = isMobile ? 'var(--space-3)' : 'var(--space-4)'
  const statFontSize = isMobile ? 'var(--font-size-xl)' : 'var(--font-size-3xl)'
  const iconSize = isMobile ? 16 : 20
  const featureIconSize = isMobile ? 18 : 24
  const avatarSize = isMobile ? 36 : 44
  const userIconSize = isMobile ? 18 : 22
  const headingSize = isMobile ? 'h3' : 'h2'
  const marginBottom = isMobile ? 'var(--space-4)' : 'var(--space-8)'

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

        {/* ===== HEADER — responsive sizes ===== */}
        <div className="flex-between" style={{ marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-8)' }}>
          <div>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <h1 className={headingSize} style={{ margin: 0 }}>
                {isMobile
                  ? `👋 ${user?.firstName || user?.username || 'Learner'}`
                  : `Welcome back, ${user?.firstName || user?.username || 'Learner'}!`
                }
              </h1>
              {!isMobile && <Sparkles style={{ width: 20, height: 20, color: 'var(--color-primary)' }} />}
            </div>
            {!isMobile && (
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: '2px' }}>
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            )}
            {isFreeUser && (
              <div className="flex" style={{ gap: 'var(--space-2)', marginTop: isMobile ? 'var(--space-1)' : 'var(--space-2)' }}>
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <Lock style={{ width: 12, height: 12, display: 'inline' }} /> Free Plan
                </span>
                <button 
                  onClick={() => navigate('/settings')} 
                  className="btn btn-primary"
                  style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-3)' }}
                >
                  <Crown style={{ width: 12, height: 12 }} /> Upgrade
                </button>
              </div>
            )}
            {isHardcoded && (
              <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>
                <Shield style={{ width: 12, height: 12, display: 'inline' }} /> Dev
              </span>
            )}
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button
              onClick={loadStats}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              title="Refresh stats"
            >
              <RefreshCw style={{ width: isMobile ? 14 : 16, height: isMobile ? 14 : 16 }} />
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="flex-center"
              style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: '50%',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                fontWeight: '700',
                fontSize: isMobile ? 'var(--font-size-sm)' : 'var(--font-size-lg)',
                transition: 'background var(--transition)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <User size={userIconSize} />
            </button>
          </div>
        </div>

        {/* ===== STATS CARDS — 4 cols desktop, 2 cols mobile ===== */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: gridCols, 
          gap: gap,
          marginBottom: marginBottom
        }}>
          {statsConfig.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.key} className="stat-card" style={{ padding: cardPadding }}>
                <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: statFontSize, fontWeight: '700', color: stat.color, margin: 0, lineHeight: 1.2 }}>
                      {stat.value}
                    </div>
                    <div className="text-muted" style={{ fontSize: isMobile ? 'var(--font-size-xs)' : 'var(--font-size-sm)', marginTop: '2px' }}>
                      {stat.label}
                    </div>
                    {!isMobile && (
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        {stat.sub}
                      </div>
                    )}
                  </div>
                  <div className="flex-center" style={{ 
                    padding: 'var(--space-2)', 
                    borderRadius: 'var(--radius-xl)', 
                    background: stat.bg,
                    width: isMobile ? 32 : 40,
                    height: isMobile ? 32 : 40
                  }}>
                    <Icon style={{ width: iconSize, height: iconSize, color: stat.color }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ===== FEATURE GRID — 4 cols desktop, 2 cols mobile ===== */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: gridCols, 
          gap: gap,
          marginBottom: marginBottom
        }}>
          {features.map((feature) => {
            const Icon = feature.icon
            const bgColor = getColorClass(feature.color)
            return (
              <button
                key={feature.id}
                onClick={() => navigate(`/${feature.id}`)}
                className="feature-card"
                style={{ 
                  border: '1px solid var(--color-border)',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                  background: 'var(--color-surface)',
                  padding: featurePadding,
                  borderRadius: isMobile ? 'var(--radius-xl)' : 'var(--radius-2xl)',
                  textAlign: 'center'
                }}
              >
                <div className="flex-center" style={{ 
                  width: isMobile ? 40 : 48, 
                  height: isMobile ? 40 : 48, 
                  borderRadius: 'var(--radius-lg)', 
                  margin: '0 auto var(--space-2)',
                  background: bgColor,
                  color: feature.color,
                  transition: 'background var(--transition)'
                }}>
                  <Icon style={{ width: featureIconSize, height: featureIconSize }} strokeWidth={1.5} />
                </div>
                <div style={{ fontWeight: '600', fontSize: isMobile ? 'var(--font-size-sm)' : 'var(--font-size-base)', color: 'var(--color-text)' }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                  {feature.desc}
                </div>
              </button>
            )
          })}
        </div>

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>
    </div>
  )
  }
