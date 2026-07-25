// ============================================================
// src/pages/AdminPage.jsx
// HYELEARNER: ADMIN PAGE — Hybrid (Backend + LocalStorage Fallback)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { adminExtended, feedback, cutoffContributions } from '../services'
import { LoadingScreen } from '../components/LoadingScreen'
import { 
  ArrowLeft, 
  Shield, 
  Users, 
  Database, 
  MessageSquare, 
  CheckCircle2, 
  XCircle,
  Loader2,
  AlertCircle,
  RefreshCw,
  FileText,
  BarChart3,
  Clock,
  ChevronRight,
  Trash2,
  Eye,
  Edit,
  Search,
  Filter,
  Download,
  TrendingUp,
  UserCheck,
  UserX,
  Activity,
  Zap,
  Calendar,
  Award,
  PieChart,
  Percent,
  DollarSign,
  Crown,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  School,
  ExternalLink,
  Info,
  Check,
  X,
  BookMarked
} from 'lucide-react'

export function AdminPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  
  // ✅ Guard: Only allow hardcoded account
  const isHardcoded = user?.email === 'hyesent@example.com' || user?.id === 'user_hyesent'
  
  // State
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState(null)
  const [source, setSource] = useState('local') // 'local' or 'api'
  
  // Stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    newUsersToday: 0,
    totalSessions: 0,
    sessionsToday: 0,
    totalMistakes: 0,
    totalBookmarks: 0,
    totalFeedback: 0,
    totalContributions: 0,
    pendingContributions: 0,
    approvedContributions: 0,
    rejectedContributions: 0,
    totalRevenue: 0,
    revenueThisMonth: 0,
    subscriptionBreakdown: {
      free: 0,
      foundation: 0,
      premium: 0,
      pro: 0
    },
    growth: {
      users: 0,
      revenue: 0,
      sessions: 0
    },
    // Daily stats
    dailyStats: {
      activeUsers: 0,
      newUsers: 0,
      sessions: 0,
      feedback: 0,
      contributions: 0
    },
    // Weekly stats
    weeklyStats: {
      activeUsers: 0,
      newUsers: 0,
      sessions: 0,
      feedback: 0,
      contributions: 0
    }
  })
  
  const [feedbackList, setFeedbackList] = useState([])
  const [contributionsList, setContributionsList] = useState([])
  const [usersList, setUsersList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Load data on mount
  useEffect(() => {
    if (isHardcoded) {
      loadData()
    }
  }, [isHardcoded])

  // ============================================================
  // LOAD DATA — Hybrid (Backend + LocalStorage)
  // ============================================================
  const loadData = async (forceApi = false) => {
    setLoading(true)
    setSyncing(true)
    
    try {
      let dataSource = 'local'
      
      // 1. Try to fetch from backend (if not forcing local)
      if (!forceApi) {
        try {
          // Fetch admin stats
          const statsData = await admin.getStats()
          
          // Fetch feedback
          const feedbackData = await admin.getFeedback()
          
          // Fetch contributions
          const contributionsData = await admin.getContributions()
          
          // Fetch users
          const usersData = await admin.getUsers()
          
          // Calculate derived stats
          const pending = contributionsData.filter(c => c.status === 'pending').length
          const approved = contributionsData.filter(c => c.status === 'approved').length
          const rejected = contributionsData.filter(c => c.status === 'rejected').length
          
          setStats({
            ...statsData,
            totalFeedback: feedbackData.length,
            totalContributions: contributionsData.length,
            pendingContributions: pending,
            approvedContributions: approved,
            rejectedContributions: rejected
          })
          
          setFeedbackList(feedbackData)
          setContributionsList(contributionsData)
          setUsersList(usersData)
          
          dataSource = 'api'
          setLastSync(new Date())
          
        } catch (apiError) {
          console.warn('⚠️ Backend failed, falling back to localStorage:', apiError.message)
          // Fall through to localStorage
        }
      }
      
      // 2. If backend failed or force local, use localStorage
      if (dataSource === 'local') {
        // Load from localStorage
        const sessions = storage.getSessions()
        const mistakes = storage.getMistakes()
        const bookmarks = storage.getBookmarks()
        const feedback = JSON.parse(localStorage.getItem('user_feedback') || '[]')
        const contributions = JSON.parse(localStorage.getItem('user_contributions') || '[]')
        const pending = contributions.filter(c => c.status === 'pending').length
        const approved = contributions.filter(c => c.status === 'approved').length
        const rejected = contributions.filter(c => c.status === 'rejected').length
        
        // Calculate user stats
        const userData = {
          totalUsers: 1,
          activeUsers: 1,
          inactiveUsers: 0,
          newUsersToday: 1
        }
        
        // Calculate session stats
        const today = new Date().toISOString().split('T')[0]
        const todaySessions = sessions.filter(s => {
          const date = new Date(s.createdAt || s.date).toISOString().split('T')[0]
          return date === today
        })
        
        setStats({
          ...stats,
          totalUsers: userData.totalUsers,
          activeUsers: userData.activeUsers,
          inactiveUsers: userData.inactiveUsers,
          newUsersToday: userData.newUsersToday,
          totalSessions: sessions.length,
          sessionsToday: todaySessions.length,
          totalMistakes: mistakes.length,
          totalBookmarks: bookmarks.length,
          totalFeedback: feedback.length,
          totalContributions: contributions.length,
          pendingContributions: pending,
          approvedContributions: approved,
          rejectedContributions: rejected,
          totalRevenue: 0,
          revenueThisMonth: 0,
          subscriptionBreakdown: {
            free: 1,
            foundation: 0,
            premium: 0,
            pro: 0
          },
          growth: {
            users: 0,
            revenue: 0,
            sessions: 0
          },
          dailyStats: {
            activeUsers: 1,
            newUsers: 0,
            sessions: todaySessions.length,
            feedback: feedback.filter(f => {
              const date = new Date(f.createdAt).toISOString().split('T')[0]
              return date === today
            }).length,
            contributions: contributions.filter(c => {
              const date = new Date(c.createdAt).toISOString().split('T')[0]
              return date === today
            }).length
          },
          weeklyStats: {
            activeUsers: 1,
            newUsers: 0,
            sessions: sessions.length,
            feedback: feedback.length,
            contributions: contributions.length
          }
        })
        
        setFeedbackList(feedback)
        setContributionsList(contributions)
        setUsersList([
          {
            id: user?.id || '1',
            name: user?.firstName ? `${user.firstName} ${user.lastName}` : 'Hyesent Dev',
            email: user?.email || 'hyesent@example.com',
            status: 'active',
            joinedAt: new Date().toISOString(),
            school: user?.school || 'UNILAG',
            exam: user?.exam || 'JAMB',
            xp: 1234,
            level: 12,
            streak: 7,
            accuracy: 78
          }
        ])
        
        dataSource = 'local'
        setLastSync(new Date())
      }
      
      setSource(dataSource)
      
    } catch (err) {
      console.error('Failed to load admin data:', err)
      // Show error but keep existing data
    } finally {
      setLoading(false)
      setSyncing(false)
    }
  }

  // ============================================================
  // HANDLERS
  // ============================================================
  const handleApprove = async (id) => {
    try {
      await admin.approveContribution(id)
      loadData()
    } catch (err) {
      // Fallback to localStorage
      const contributions = JSON.parse(localStorage.getItem('user_contributions') || '[]')
      const updated = contributions.map(c => 
        c.id === id ? { ...c, status: 'approved' } : c
      )
      localStorage.setItem('user_contributions', JSON.stringify(updated))
      loadData()
    }
  }

  const handleReject = async (id) => {
    try {
      await admin.rejectContribution(id)
      loadData()
    } catch (err) {
      // Fallback to localStorage
      const contributions = JSON.parse(localStorage.getItem('user_contributions') || '[]')
      const updated = contributions.map(c => 
        c.id === id ? { ...c, status: 'rejected' } : c
      )
      localStorage.setItem('user_contributions', JSON.stringify(updated))
      loadData()
    }
  }

  const handleDeleteFeedback = async (id) => {
    if (!confirm('Delete this feedback?')) return
    try {
      await admin.deleteFeedback(id)
      loadData()
    } catch (err) {
      // Fallback to localStorage
      const feedback = JSON.parse(localStorage.getItem('user_feedback') || '[]')
      const updated = feedback.filter(f => f.id !== id)
      localStorage.setItem('user_feedback', JSON.stringify(updated))
      loadData()
    }
  }

  const handleExportData = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      source: source,
      stats: stats,
      feedback: feedbackList,
      contributions: contributionsList,
      users: usersList,
      localData: {
        bookmarks: storage.getBookmarks(),
        mistakes: storage.getMistakes(),
        sessions: storage.getSessions(),
        mastery: storage.getMastery(),
        gamification: storage.getGamification(),
        settings: storage.getSettings(),
        feedback: JSON.parse(localStorage.getItem('user_feedback') || '[]'),
        contributions: JSON.parse(localStorage.getItem('user_contributions') || '[]')
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `hyetutor_admin_export_${new Date().toISOString().slice(0,10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleSync = () => {
    loadData(true)
  }

  // If not hardcoded, redirect
  if (!isHardcoded) {
    navigate('/dashboard')
    return null
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <Loader2 className="animate-spin" style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
      </div>
    )
  }

  // ============================================================
  // TABS
  // ============================================================
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare, badge: stats.totalFeedback },
    { id: 'contributions', label: 'Contributions', icon: Database, badge: stats.pendingContributions },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'data', label: 'Data', icon: FileText }
  ]

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)', border: '2px solid var(--color-primary)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Shield style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <h1 className="h2" style={{ margin: 0 }}>Admin Panel</h1>
                <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <Shield style={{ width: '12px', height: '12px', display: 'inline' }} /> Dev Only
                </span>
                <span className={`badge ${source === 'api' ? 'badge-success' : 'badge-muted'}`} style={{ fontSize: 'var(--font-size-xs)' }}>
                  {source === 'api' ? '🔗 API' : '💾 Local'}
                </span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
                <span>Last sync: {lastSync ? new Date(lastSync).toLocaleTimeString() : 'Never'}</span>
                {syncing && <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}><Loader2 className="animate-spin" style={{ width: '12px', height: '12px' }} /> Syncing...</span>}
              </div>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button onClick={handleSync} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }} disabled={syncing}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button onClick={handleExportData} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <Download style={{ width: '16px', height: '16px' }} />
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        {/* Data Source Notice */}
        {source === 'local' && (
          <div className="warning-card" style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-3)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Info style={{ width: '16px', height: '16px', color: 'var(--color-warning)' }} />
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                Using local data only. Connect backend for multi-user stats.
              </span>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex" style={{ 
          gap: 'var(--space-1)', 
          marginBottom: 'var(--space-6)', 
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex"
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  background: 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  gap: 'var(--space-2)',
                  alignItems: 'center',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all var(--transition)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
                {tab.label}
                {tab.badge > 0 && (
                  <span className="badge badge-danger" style={{ fontSize: 'var(--font-size-xs)' }}>
                    {tab.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* ============================================================
            TAB: DASHBOARD — FULL STATS
        ============================================================ */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div className="grid-4" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-primary)' }}>{stats.totalUsers}</div>
                    <div className="text-muted">Total Users</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-success)' }}>🟢 {stats.activeUsers} active</span>
                      {' • '}
                      <span style={{ color: 'var(--color-danger)' }}>🔴 {stats.inactiveUsers} inactive</span>
                    </div>
                  </div>
                  <Users style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-success)' }}>{stats.totalSessions}</div>
                    <div className="text-muted">Total Sessions</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {stats.sessionsToday} today • {stats.dailyStats?.sessions || 0} avg
                    </div>
                  </div>
                  <FileText style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-warning)' }}>{stats.totalFeedback}</div>
                    <div className="text-muted">Feedback</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {stats.dailyStats?.feedback || 0} today
                    </div>
                  </div>
                  <MessageSquare style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: stats.pendingContributions > 0 ? 'var(--color-danger)' : 'var(--color-success)' }}>
                      {stats.pendingContributions}
                    </div>
                    <div className="text-muted">Pending Review</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {stats.approvedContributions} approved • {stats.rejectedContributions} rejected
                    </div>
                  </div>
                  <Database style={{ width: '24px', height: '24px', color: stats.pendingContributions > 0 ? 'var(--color-danger)' : 'var(--color-success)' }} />
                </div>
              </div>
            </div>

            {/* Extended Stats */}
            <div className="grid-4" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-secondary)' }}>{stats.totalMistakes}</div>
                    <div className="text-muted">Mistakes</div>
                  </div>
                  <AlertCircle style={{ width: '24px', height: '24px', color: 'var(--color-secondary)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-info)' }}>{stats.totalBookmarks}</div>
                    <div className="text-muted">Bookmarks</div>
                  </div>
                  <BookMarked style={{ width: '24px', height: '24px', color: 'var(--color-info)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-warning)' }}>${stats.totalRevenue}</div>
                    <div className="text-muted">Revenue</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      ${stats.revenueThisMonth} this month
                    </div>
                  </div>
                  <DollarSign style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} />
                </div>
              </div>
              <div className="stat-card">
                <div className="flex-between">
                  <div>
                    <div className="h2" style={{ color: 'var(--color-primary)' }}>
                      <span style={{ color: stats.growth.users >= 0 ? 'var(--color-success)' : 'var(--color-danger)' }}>
                        {stats.growth.users}%
                      </span>
                    </div>
                    <div className="text-muted">User Growth</div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      Revenue: <span style={{ color: stats.growth.revenue >= 0 ? 'var(--color-success)' : 'var(--color-danger)' }}>
                        {stats.growth.revenue}%
                      </span>
                    </div>
                  </div>
                  <TrendingUp style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
                </div>
              </div>
            </div>

            {/* Subscription Breakdown */}
            <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
              <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Subscription Breakdown</h3>
              <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
                {[
                  { label: 'Free', count: stats.subscriptionBreakdown?.free || 0, color: 'var(--color-text-muted)' },
                  { label: 'Foundation', count: stats.subscriptionBreakdown?.foundation || 0, color: 'var(--color-primary)' },
                  { label: 'Premium', count: stats.subscriptionBreakdown?.premium || 0, color: 'var(--color-warning)' },
                  { label: 'Pro', count: stats.subscriptionBreakdown?.pro || 0, color: 'var(--color-success)' }
                ].map((item) => (
                  <div key={item.label} className="stat-card text-center">
                    <div className="h2" style={{ color: item.color }}>{item.count}</div>
                    <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Stats */}
            <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
              <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Today's Activity</h3>
              <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
                {[
                  { label: 'Active Users', value: stats.dailyStats?.activeUsers || 0, icon: UserCheck, color: 'var(--color-success)' },
                  { label: 'New Users', value: stats.dailyStats?.newUsers || 0, icon: UserPlus, color: 'var(--color-primary)' },
                  { label: 'Sessions', value: stats.dailyStats?.sessions || 0, icon: Activity, color: 'var(--color-info)' },
                  { label: 'Feedback', value: stats.dailyStats?.feedback || 0, icon: MessageSquare, color: 'var(--color-warning)' }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="stat-card text-center">
                      <div className="flex-center" style={{ marginBottom: 'var(--space-1)' }}>
                        <Icon style={{ width: '18px', height: '18px', color: item.color }} />
                      </div>
                      <div className="h3" style={{ color: item.color, margin: 0 }}>{item.value}</div>
                      <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ padding: 'var(--space-4)' }}>
              <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Quick Actions</h3>
              <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
                <button 
                  onClick={() => setActiveTab('contributions')}
                  className="card card-hover text-center" 
                  style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)' }}
                >
                  <Database style={{ width: '24px', height: '24px', margin: '0 auto var(--space-2)', color: 'var(--color-primary)' }} />
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>Review Contributions</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {stats.pendingContributions} pending
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('feedback')}
                  className="card card-hover text-center" 
                  style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)' }}
                >
                  <MessageSquare style={{ width: '24px', height: '24px', margin: '0 auto var(--space-2)', color: 'var(--color-warning)' }} />
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>View Feedback</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {stats.totalFeedback} total
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className="card card-hover text-center" 
                  style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)' }}
                >
                  <Users style={{ width: '24px', height: '24px', margin: '0 auto var(--space-2)', color: 'var(--color-success)' }} />
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>Manage Users</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {stats.totalUsers} active
                  </div>
                </button>
                <button 
                  onClick={handleExportData}
                  className="card card-hover text-center" 
                  style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)' }}
                >
                  <Download style={{ width: '24px', height: '24px', margin: '0 auto var(--space-2)', color: 'var(--color-text-muted)' }} />
                  <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>Export Data</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Backup all data
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB: FEEDBACK
        ============================================================ */}
        {activeTab === 'feedback' && (
          <div className="card" style={{ padding: 'var(--space-4)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h4" style={{ margin: 0 }}>User Feedback ({feedbackList.length})</h3>
              <div className="flex" style={{ gap: 'var(--space-2)' }}>
                <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                  <Clock style={{ width: '12px', height: '12px', display: 'inline' }} /> {source === 'api' ? 'Live' : 'Local'}
                </span>
                <button 
                  onClick={() => {
                    if (confirm('Clear all feedback?')) {
                      localStorage.removeItem('user_feedback')
                      loadData()
                    }
                  }} 
                  className="btn btn-danger" 
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  <Trash2 style={{ width: '16px', height: '16px' }} /> Clear All
                </button>
              </div>
            </div>

            {feedbackList.length === 0 ? (
              <div className="text-center" style={{ padding: 'var(--space-6)' }}>
                <MessageSquare style={{ width: '48px', height: '48px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
                <p style={{ color: 'var(--color-text-muted)' }}>No feedback yet</p>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {feedbackList.map((item) => (
                  <div key={item.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-border)' }}>
                    <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                          <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                            {item.type || 'general'}
                          </span>
                          {item.rating > 0 && (
                            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)' }}>
                              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                            </span>
                          )}
                          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                            <Clock style={{ width: '12px', height: '12px', display: 'inline' }} />
                            {' '}{new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', marginTop: 'var(--space-1)' }}>
                          {item.message}
                        </p>
                        {item.email && (
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                            📧 {item.email}
                          </div>
                        )}
                      </div>
                      <button 
                        onClick={() => handleDeleteFeedback(item.id)}
                        className="btn btn-ghost" 
                        style={{ padding: 'var(--space-1) var(--space-2)', color: 'var(--color-danger)' }}
                      >
                        <Trash2 style={{ width: '16px', height: '16px' }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================
            TAB: CONTRIBUTIONS
        ============================================================ */}
        {activeTab === 'contributions' && (
          <div className="card" style={{ padding: 'var(--space-4)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <div>
                <h3 className="h4" style={{ margin: 0 }}>Cut-off Contributions</h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {contributionsList.filter(c => c.status === 'pending').length} pending • {contributionsList.filter(c => c.status === 'approved').length} approved • {contributionsList.filter(c => c.status === 'rejected').length} rejected
                </p>
              </div>
              <button onClick={() => loadData()} className="btn btn-ghost">
                <RefreshCw style={{ width: '16px', height: '16px' }} />
              </button>
            </div>

            {contributionsList.length === 0 ? (
              <div className="text-center" style={{ padding: 'var(--space-6)' }}>
                <Database style={{ width: '48px', height: '48px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
                <p style={{ color: 'var(--color-text-muted)' }}>No contributions yet</p>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {contributionsList.map((item) => (
                  <div key={item.id} className="card" style={{ 
                    padding: 'var(--space-3)', 
                    border: `2px solid ${
                      item.status === 'approved' ? 'var(--color-success)' : 
                      item.status === 'rejected' ? 'var(--color-danger)' : 
                      'var(--color-warning)'
                    }`
                  }}>
                    <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                          {item.university} — {item.course}
                        </div>
                        <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                          <span>📅 {item.year}</span>
                          <span>🎯 {item.cutoff}</span>
                          <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.examType || 'jamb'}</span>
                        </div>
                        {item.source && (
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                            📎 {item.source}
                          </div>
                        )}
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                          Submitted: {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex" style={{ gap: 'var(--space-2)' }}>
                        {item.status === 'pending' ? (
                          <>
                            <button 
                              onClick={() => handleApprove(item.id)}
                              className="btn btn-success"
                              style={{ padding: 'var(--space-1) var(--space-2)' }}
                              title="Approve"
                            >
                              <CheckCircle2 style={{ width: '18px', height: '18px' }} />
                            </button>
                            <button 
                              onClick={() => handleReject(item.id)}
                              className="btn btn-danger"
                              style={{ padding: 'var(--space-1) var(--space-2)' }}
                              title="Reject"
                            >
                              <XCircle style={{ width: '18px', height: '18px' }} />
                            </button>
                          </>
                        ) : (
                          <span className={`badge ${item.status === 'approved' ? 'badge-success' : 'badge-danger'}`}>
                            {item.status === 'approved' ? '✅ Approved' : '❌ Rejected'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================
            TAB: USERS
        ============================================================ */}
        {activeTab === 'users' && (
          <div className="card" style={{ padding: 'var(--space-4)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <h3 className="h4" style={{ margin: 0 }}>Users ({usersList.length})</h3>
              <div className="flex" style={{ gap: 'var(--space-2)' }}>
                <Search style={{ width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                <input 
                  type="text" 
                  className="input" 
                  placeholder="Search users..." 
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)', width: '200px' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="select"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)', width: '120px' }}
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="card" style={{ padding: 'var(--space-3)', background: 'var(--color-background)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', padding: 'var(--space-2)', borderBottom: '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                <div style={{ width: '40px' }}>#</div>
                <div style={{ flex: 2 }}>User</div>
                <div style={{ flex: 1 }}>Email</div>
                <div style={{ flex: 1 }}>Status</div>
                <div style={{ flex: 1 }}>XP</div>
                <div style={{ width: '100px' }}>Joined</div>
                <div style={{ width: '80px' }}>Actions</div>
              </div>
              {usersList.map((u, idx) => (
                <div key={u.id} className="flex" style={{ gap: 'var(--space-3)', padding: 'var(--space-2)', alignItems: 'center', borderBottom: '1px solid var(--color-border-light)' }}>
                  <div style={{ width: '40px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{idx + 1}</div>
                  <div style={{ flex: 2 }} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <div className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', fontWeight: '700' }}>
                      {u.name?.[0] || 'U'}
                    </div>
                    <div>
                      <span style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)' }}>{u.name || u.username}</span>
                      {u.school && <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'block' }}>{u.school}</span>}
                    </div>
                  </div>
                  <div style={{ flex: 1, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>{u.email}</div>
                  <div style={{ flex: 1 }}>
                    <span className={`badge ${u.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                      {u.status || 'Active'}
                    </span>
                  </div>
                  <div style={{ flex: 1, fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
                    {u.xp || 0}
                  </div>
                  <div style={{ width: '100px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    {new Date(u.joinedAt).toLocaleDateString()}
                  </div>
                  <div style={{ width: '80px' }}>
                    <button className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><Eye size={16} /></button>
                    <button className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}><Edit size={16} /></button>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', padding: 'var(--space-2)', textAlign: 'center' }}>
                Showing {usersList.length} of {usersList.length} users
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB: DATA
        ============================================================ */}
        {activeTab === 'data' && (
          <div className="card" style={{ padding: 'var(--space-4)' }}>
            <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>App Data Management</h3>
            
            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-4)' }}>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>📊 Export Data</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                  Export all app data as JSON backup
                </p>
                <button onClick={handleExportData} className="btn btn-primary">
                  <Download style={{ width: '16px', height: '16px' }} /> Export JSON
                </button>
              </div>

              <div className="card" style={{ border: '1px solid var(--color-border)', padding: 'var(--space-4)' }}>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>🗑️ Clear Data</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                  Clear all app data (sessions, mistakes, bookmarks)
                </p>
                <button 
                  onClick={() => {
                    if (confirm('Clear ALL app data? This cannot be undone.')) {
                      storage.clearAllAppData()
                      localStorage.removeItem('user_feedback')
                      localStorage.removeItem('user_contributions')
                      loadData()
                      alert('Data cleared successfully')
                    }
                  }}
                  className="btn btn-danger"
                >
                  <Trash2 style={{ width: '16px', height: '16px' }} /> Clear All Data
                </button>
              </div>
            </div>

            <div className="card" style={{ marginTop: 'var(--space-4)', background: 'var(--color-background)' }}>
              <h4 style={{ marginBottom: 'var(--space-2)' }}>📈 Storage Usage</h4>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                {[
                  { label: 'Bookmarks', count: stats.totalBookmarks },
                  { label: 'Mistakes', count: stats.totalMistakes },
                  { label: 'Sessions', count: stats.totalSessions },
                  { label: 'Feedback', count: stats.totalFeedback },
                  { label: 'Contributions', count: stats.totalContributions }
                ].map((item) => (
                  <div key={item.label} className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item.label}</span>
                    <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>{item.count}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                Source: {source === 'api' ? 'Live API' : 'Local Storage'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}