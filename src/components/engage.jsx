// ============================================================
// HYELEARNER: FOUNDATION — ENGAGE COMPONENTS
// Heatmap, Weakness Finder, Gamification, Leaderboards
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import {
  calculateMastery,
  getMasteryStatus,
  getHeatmapColor,
  formatDate,
  getLevel,
  getNextLevelXP,
  getLevelProgress,
  truncate,
} from '../utils'
import {
  SUBJECTS,
  TOPICS,
  BADGE_DEFINITIONS,
  XP_TABLE,
  HEATMAP_COLORS,
  MASTERY_THRESHOLDS,
} from '../constants'

import {
  Flame,
  Target,
  Award,
  Trophy,
  TrendingUp,
  Users,
  Crown,
  Medal,
  Zap,
  Star,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Loader2,
  ChevronRight,
  ChevronLeft,
  Grid3x3,
  List,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Brain,
  Gamepad2,
  Sparkles,
  Info,
  Lock
} from 'lucide-react'

// ============================================================
// HEATMAP
// ============================================================
export function Heatmap({ data, onTopicClick, className = '' }) {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

  const subjects = Object.keys(SUBJECTS)

  const getAllTopics = () => {
    const allTopics = []
    subjects.forEach((subject) => {
      const topicList = TOPICS[subject] || []
      topicList.forEach((topic) => {
        const mastery = data?.[topic] || 0
        allTopics.push({
          subject,
          topic,
          mastery,
          status: getMasteryStatus(mastery),
        })
      })
    })
    return allTopics
  }

  const allTopics = getAllTopics()
  const filteredTopics = selectedSubject
    ? allTopics.filter((t) => t.subject === selectedSubject)
    : allTopics

  const getColor = (mastery) => {
    if (mastery >= MASTERY_THRESHOLDS.strong) return HEATMAP_COLORS.strong
    if (mastery >= MASTERY_THRESHOLDS.average) return HEATMAP_COLORS.average
    if (mastery > 0) return HEATMAP_COLORS.weak
    return HEATMAP_COLORS.notStudied
  }

  const getLabel = (mastery) => {
    const status = getMasteryStatus(mastery)
    return status.label
  }

  if (!data || allTopics.length === 0) {
    return (
      <div className="empty-card text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="icon"><Flame style={{ width: '48px', height: '48px', color: 'var(--color-text-muted)' }} /></div>
        <div className="title">No Mastery Data Yet</div>
        <div className="desc">Complete some practice sessions to build your heatmap</div>
      </div>
    )
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* Header */}
      <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <button
            onClick={() => setSelectedSubject(null)}
            className={`btn ${selectedSubject === null ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 'var(--font-size-sm)', borderRadius: 'var(--radius-full)' }}
          >
            All
          </button>
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSubject(s)}
              className={`btn ${selectedSubject === s ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 'var(--font-size-sm)', borderRadius: 'var(--radius-full)' }}
            >
              {SUBJECTS[s]?.icon} {SUBJECTS[s]?.label}
            </button>
          ))}
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)' }}>
          <button
            onClick={() => setViewMode('grid')}
            className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)' }}
          >
            <Grid3x3 style={{ width: '16px', height: '16px' }} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)' }}
          >
            <List style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
        <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: HEATMAP_COLORS.strong }} />
          Strong (80-100%)
        </span>
        <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: HEATMAP_COLORS.average }} />
          Average (50-79%)
        </span>
        <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: HEATMAP_COLORS.weak }} />
          Weak (0-49%)
        </span>
        <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: HEATMAP_COLORS.notStudied }} />
          Not studied
        </span>
      </div>

      {/* Heatmap Grid */}
      {viewMode === 'grid' ? (
        <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
          {filteredTopics.map((item) => (
            <button
              key={`${item.subject}-${item.topic}`}
              onClick={() => onTopicClick?.(item.subject, item.topic)}
              className="card card-hover text-center"
              style={{ cursor: 'pointer', padding: 'var(--space-4)' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: 'var(--radius)',
                  marginBottom: 'var(--space-2)',
                  background: getColor(item.mastery),
                  transition: 'all var(--transition)'
                }}
              />
              <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>{item.topic}</div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                {item.mastery}% • {getLabel(item.mastery)}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="stack" style={{ gap: 'var(--space-2)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
          {filteredTopics.map((item) => (
            <button
              key={`${item.subject}-${item.topic}`}
              onClick={() => onTopicClick?.(item.subject, item.topic)}
              className="card card-hover flex-between"
              style={{ cursor: 'pointer', padding: 'var(--space-3)', width: '100%' }}
            >
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>{item.topic}</span>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{item.subject}</span>
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>{item.mastery}%</span>
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: getColor(item.mastery)
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="grid-3" style={{ gap: 'var(--space-3)', textAlign: 'center', fontSize: 'var(--font-size-sm)' }}>
        <div className="success-card">
          <div className="h3" style={{ color: 'var(--color-success)', margin: 0 }}>
            {allTopics.filter((t) => t.mastery >= MASTERY_THRESHOLDS.strong).length}
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Strong</div>
        </div>
        <div className="warning-card">
          <div className="h3" style={{ color: 'var(--color-warning)', margin: 0 }}>
            {allTopics.filter(
              (t) => t.mastery >= MASTERY_THRESHOLDS.average && t.mastery < MASTERY_THRESHOLDS.strong
            ).length}
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Average</div>
        </div>
        <div className="danger-card">
          <div className="h3" style={{ color: 'var(--color-danger)', margin: 0 }}>
            {allTopics.filter(
              (t) => t.mastery > 0 && t.mastery < MASTERY_THRESHOLDS.average
            ).length}
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Weak</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// WEAKNESS FINDER
// ============================================================
export function WeaknessFinder({ masteryData, mistakes, onDrill, className = '' }) {
  const [weakTopics, setWeakTopics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (masteryData) {
      const weak = Object.entries(masteryData)
        .filter(([_, value]) => value < MASTERY_THRESHOLDS.average && value > 0)
        .map(([topic, value]) => ({
          topic,
          mastery: value,
          priority: value < 30 ? 'High' : 'Medium',
          status: getMasteryStatus(value),
        }))
        .sort((a, b) => a.mastery - b.mastery)

      setWeakTopics(weak)
    }
    setLoading(false)
  }, [masteryData])

  if (loading) {
    return (
      <div className="flex-center" style={{ minHeight: '128px' }}>
        <div className="spinner"></div>
      </div>
    )
  }

  if (weakTopics.length === 0) {
    return (
      <div className="empty-card text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="icon"><CheckCircle2 style={{ width: '48px', height: '48px', color: 'var(--color-success)' }} /></div>
        <div className="title">No Weak Topics Found</div>
        <div className="desc">Keep up the great work! Your mastery is above 50% in all topics.</div>
      </div>
    )
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      <div className="flex-between">
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {weakTopics.length} weak {weakTopics.length === 1 ? 'topic' : 'topics'} detected
          </p>
        </div>
        <button
          onClick={() => onDrill?.(weakTopics[0]?.topic)}
          className="btn btn-primary"
          style={{ fontSize: 'var(--font-size-sm)' }}
        >
          <Target style={{ width: '16px', height: '16px' }} /> Drill Weakest
        </button>
      </div>

      <div className="stack" style={{ gap: 'var(--space-3)', maxHeight: '400px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
        {weakTopics.map((item) => (
          <div key={item.topic} className="card" style={{ cursor: 'default' }}>
            <div className="flex-between">
              <div>
                <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{item.topic}</div>
                <div className="flex" style={{ gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', alignItems: 'center' }}>
                  <span>Priority: {item.priority}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-border)' }} />
                  <span className={item.status.color}>{item.status.label}</span>
                </div>
              </div>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
                <span className={`h3 ${item.status.color}`} style={{ margin: 0 }}>{item.mastery}%</span>
                <button
                  onClick={() => onDrill?.(item.topic)}
                  className="btn btn-primary"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                >
                  Drill
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      {weakTopics.length > 0 && (
        <div className="info-card">
          <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-2)', alignItems: 'center' }}>
            <Sparkles style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Recommendations</span>
          </div>
          <ul className="stack" style={{ gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <span>•</span>
              Focus on <strong style={{ color: 'var(--color-text)' }}>{weakTopics[0]?.topic}</strong> first ({weakTopics[0]?.mastery}%)
            </li>
            <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <span>•</span>
              Practice 20 questions on {weakTopics[0]?.topic}
            </li>
            <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <span>•</span>
              Review key concepts before attempting
            </li>
            {weakTopics.length > 1 && (
              <li style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <span>•</span>
                After improvement, move to {weakTopics[1]?.topic}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

// ============================================================
// GAMIFICATION DISPLAY
// ============================================================
export function GamificationDisplay({ xp, level, streak, badges, className = '' }) {
  const [showBadges, setShowBadges] = useState(false)

  const nextLevelXP = getNextLevelXP(xp)
  const progress = getLevelProgress(xp)
  const unlockedBadges = badges || []

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* XP & Level */}
      <div className="grid-3" style={{ gap: 'var(--space-4)' }}>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>{xp}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Total XP</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-secondary)', margin: 0 }}>Lv.{level}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Level</div>
        </div>
        <div className="stat-card text-center">
          <div className="h2" style={{ color: 'var(--color-warning)', margin: 0 }}>{streak}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}><Zap style={{ width: '12px', height: '12px', display: 'inline', color: 'var(--color-warning)' }} /> Streak</div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="card">
        <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
          <span style={{ color: 'var(--color-text)' }}>Level {level}</span>
          <span style={{ color: 'var(--color-text-muted)' }}>{xp} / {nextLevelXP} XP</span>
        </div>
        <div className="progress" style={{ marginTop: 'var(--space-1)' }}>
          <div className="progress-fill progress-fill-primary" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', textAlign: 'right' }}>
          {progress}% to Level {level + 1}
        </div>
      </div>

      {/* Badges */}
      <div className="card">
        <div className="flex-between" style={{ marginBottom: 'var(--space-2)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Award style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>Badges</span>
          </div>
          <button
            onClick={() => setShowBadges(!showBadges)}
            className="btn btn-ghost"
            style={{ fontSize: 'var(--font-size-sm)' }}
          >
            {showBadges ? 'Hide' : 'Show All'}
          </button>
        </div>
        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {BADGE_DEFINITIONS.slice(0, showBadges ? 20 : 6).map((badge) => {
            const unlocked = unlockedBadges.includes(badge.id)
            return (
              <div
                key={badge.id}
                className={`flex ${unlocked ? 'badge badge-primary' : 'badge badge-muted'}`}
                style={{ 
                  gap: 'var(--space-2)', 
                  alignItems: 'center',
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-sm)',
                  opacity: unlocked ? 1 : 0.5
                }}
              >
                <span>{unlocked ? badge.icon : <Lock style={{ width: '12px', height: '12px' }} />}</span>
                <span>{badge.label}</span>
              </div>
            )
          })}
          {!showBadges && BADGE_DEFINITIONS.length > 6 && (
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', alignSelf: 'center' }}>
              +{BADGE_DEFINITIONS.length - 6} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// LEADERBOARD
// ============================================================
export function Leaderboard({ data, onSelectUser, className = '' }) {
  const [filter, setFilter] = useState('global')
  const [sortBy, setSortBy] = useState('xp')

  const filteredData = data || [
    { rank: 1, name: 'John Doe', xp: 12450, level: 25, streak: 12, school: 'UNILAG' },
    { rank: 2, name: 'Mary Smith', xp: 10230, level: 22, streak: 8, school: 'UI' },
    { rank: 3, name: 'Alex Johnson', xp: 8900, level: 20, streak: 15, school: 'UNILAG' },
    { rank: 4, name: 'David Lee', xp: 7650, level: 18, streak: 5, school: 'UNIBEN' },
    { rank: 5, name: 'Sarah Jones', xp: 6200, level: 15, streak: 10, school: 'UNILAG' },
    { rank: 6, name: 'Michael Brown', xp: 5800, level: 14, streak: 7, school: 'UI' },
    { rank: 7, name: 'Emily Davis', xp: 5200, level: 13, streak: 4, school: 'UNILORIN' },
    { rank: 8, name: 'James Wilson', xp: 4800, level: 12, streak: 9, school: 'UNILAG' },
    { rank: 9, name: 'Jessica Taylor', xp: 4500, level: 11, streak: 6, school: 'UNIBEN' },
    { rank: 10, name: 'Robert Martinez', xp: 4200, level: 10, streak: 3, school: 'UI' },
  ]

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'xp') return b.xp - a.xp
    if (sortBy === 'level') return b.level - a.level
    if (sortBy === 'streak') return b.streak - a.streak
    return 0
  })

  const getMedal = (rank) => {
    if (rank === 1) return <Crown style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
    if (rank === 2) return <Medal style={{ width: '20px', height: '20px', color: 'var(--color-text-muted)' }} />
    if (rank === 3) return <Medal style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
    return <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>#{rank}</span>
  }

  return (
    <div className={`stack ${className}`} style={{ gap: 'var(--space-4)' }}>
      {/* Filters */}
      <div className="flex-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <div className="flex" style={{ gap: 'var(--space-2)' }}>
          {['global', 'school', 'friends'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn ${filter === f ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 'var(--font-size-sm)', borderRadius: 'var(--radius-full)', textTransform: 'capitalize' }}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--font-size-sm)', width: 'auto' }}
        >
          <option value="xp">Sort by XP</option>
          <option value="level">Sort by Level</option>
          <option value="streak">Sort by Streak</option>
        </select>
      </div>

      {/* Table */}
      <div className="card" style={{ overflow: 'hidden', padding: 0, maxHeight: '450px', overflowY: 'auto' }}>
        <div className="grid" style={{ 
          gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr',
          gap: 'var(--space-2)',
          padding: 'var(--space-2) var(--space-4)',
          background: 'var(--color-background)',
          borderBottom: '1px solid var(--color-border)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: '500',
          color: 'var(--color-text-muted)',
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}>
          <div>Rank</div>
          <div>Name</div>
          <div style={{ textAlign: 'right' }}>XP</div>
          <div style={{ textAlign: 'center' }}>Level</div>
          <div style={{ textAlign: 'center' }}>🔥</div>
        </div>
        {sortedData.map((item) => (
          <div
            key={item.rank || item.name}
            onClick={() => onSelectUser?.(item.id || item.name)}
            className="grid"
            style={{
              gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-4)',
              borderBottom: '1px solid var(--color-border-light)',
              transition: 'background var(--transition)',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontWeight: '500' }}>{getMedal(item.rank)}</div>
            <div>
              <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{item.name}</div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{item.school}</div>
            </div>
            <div style={{ textAlign: 'right', fontWeight: '700', color: 'var(--color-primary)' }}>
              {item.xp.toLocaleString()}
            </div>
            <div style={{ textAlign: 'center', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              Lv.{item.level}
            </div>
            <div style={{ textAlign: 'center', fontSize: 'var(--font-size-sm)', color: 'var(--color-warning)' }}>
              {item.streak}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid-3" style={{ gap: 'var(--space-3)', textAlign: 'center', fontSize: 'var(--font-size-sm)' }}>
        <div className="stat-card">
          <div className="h3" style={{ margin: 0 }}>{sortedData.length}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Total Users</div>
        </div>
        <div className="stat-card">
          <div className="h3" style={{ margin: 0 }}>
            {sortedData.length > 0 ? Math.round(sortedData.reduce((sum, u) => sum + u.xp, 0) / sortedData.length) : 0}
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Avg XP</div>
        </div>
        <div className="stat-card">
          <div className="h3" style={{ margin: 0 }}>
            {sortedData.length > 0 ? Math.round(sortedData.reduce((sum, u) => sum + u.streak, 0) / sortedData.length) : 0}
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Avg Streak</div>
        </div>
      </div>
    </div>
  )
}