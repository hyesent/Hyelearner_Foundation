// ============================================================
// HYELEARNER: FOUNDATION — ENGAGE PAGES
// Heatmap, Weakness Finder (AI + Logic), Gamification, Leaderboards
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { ai, leaderboard, subscriptions, social } from '../services'
import { getLevel, calculateXP, checkBadgeUnlock, shuffleArray, trackAIUsage } from '../utils'
import { SUBJECTS, BADGE_DEFINITIONS, XP_TABLE, AI_LIMITS } from '../constants'
import { LoadingScreen } from '../components/LoadingScreen'
import {
  Flame,
  Brain,
  Gamepad2,
  Trophy,
  Target,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Award,
  Medal,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader2,
  Zap,
  Star,
  Users,
  Crown,
  Info,
  Cpu,
  RefreshCw,
  Lock,
  BookOpen,
  UserPlus,
  Clock,
} from 'lucide-react'

// ============================================================
// LOGGER — prefixed so you can filter easily in DevTools
// ============================================================
const log = (...args) => console.log('%c[WF]', 'color:#4F46E5;font-weight:700', ...args)
const warn = (...args) => console.warn('%c[WF]', 'color:#F59E0B;font-weight:700', ...args)
const err = (...args) => console.error('%c[WF]', 'color:#EF4444;font-weight:700', ...args)

// ============================================================
// FREE USER LOCK SCREEN COMPONENT
// ============================================================
function FreeUserLockScreen({ featureName, navigate }) {
  return (
    <div className="card text-center" style={{
      padding: 'var(--space-12)',
      maxWidth: '480px',
      margin: '0 auto',
      border: '2px dashed var(--color-border)'
    }}>
      <div className="flex-center" style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'var(--color-danger-light)',
        margin: '0 auto var(--space-6)'
      }}>
        <Lock style={{ width: '40px', height: '40px', color: 'var(--color-danger)' }} />
      </div>
      <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>{featureName} is for Subscribers</h2>
      <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
        Upgrade to Foundation plan to unlock this feature and get full access to all tools.
      </p>
      <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center' }}>
        <button
          onClick={() => navigate('/practice')}
          className="btn btn-outline flex-center"
        >
          Go to Practice
        </button>
        <button
          onClick={() => {
            const linkedId = localStorage.getItem('hyespace-store-id')
            if (linkedId) {
              navigate('/settings')
              return
            }
            window.open('https://hyespace.vercel.app', '_blank', 'noopener,noreferrer')
          }}
          className="btn btn-primary flex-center"
        >
          Subscribe on HyeSpace
        </button>
      </div>
    </div>
  )
}

// ============================================================
// HEATMAP PAGE — LOCKED FOR FREE USERS
// ============================================================
export function HeatmapPage() {
  const navigate = useNavigate()
  const [masteryData, setMasteryData] = useState({})
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFreeUser, setIsFreeUser] = useState(false)
  const [subLoading, setSubLoading] = useState(true)

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setIsFreeUser(!status.isActive)
      } catch (error) {
        setIsFreeUser(true)
      } finally {
        setSubLoading(false)
      }
    }
    checkSubscription()
  }, [])

  useEffect(() => {
    if (!isFreeUser) {
      loadMastery()
    } else {
      setLoading(false)
    }
  }, [isFreeUser])

  const loadMastery = () => {
    setLoading(true)
    try {
      const data = storage.getMastery()
      setMasteryData(data)
    } catch (error) {
      console.error('Failed to load mastery:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading && !isFreeUser) {
      const interval = setInterval(loadMastery, 30000)
      return () => clearInterval(interval)
    }
  }, [loading, isFreeUser])

  if (subLoading || loading) {
    return <LoadingScreen />
  }

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Flame style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Heatmap</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Topic mastery overview</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>
        <FreeUserLockScreen featureName="Heatmap" navigate={navigate} />
      </div>
    )
  }

  const allTopics = Object.keys(masteryData)

  const strongCount = allTopics.filter(t => masteryData[t]?.accuracy >= 80).length
  const avgCount = allTopics.filter(t => masteryData[t]?.accuracy >= 50 && masteryData[t]?.accuracy < 80).length
  const weakCount = allTopics.filter(t => masteryData[t]?.accuracy > 0 && masteryData[t]?.accuracy < 50).length
  const notStudiedCount = allTopics.filter(t => masteryData[t]?.accuracy === 0 || !masteryData[t]).length

  const subjects = Object.keys(SUBJECTS)

  const getStatusColor = (value) => {
    if (value >= 80) return 'var(--color-success)'
    if (value >= 50) return 'var(--color-warning)'
    if (value > 0) return 'var(--color-danger)'
    return 'var(--color-border)'
  }

  const getStatusText = (value) => {
    if (value >= 80) return 'var(--color-success)'
    if (value >= 50) return 'var(--color-warning)'
    if (value > 0) return 'var(--color-danger)'
    return 'var(--color-text-muted)'
  }

  const getStatusLabel = (value) => {
    if (value >= 80) return 'Strong'
    if (value >= 50) return 'Average'
    if (value > 0) return 'Weak'
    return 'Not studied'
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <Flame style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Heatmap</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Topic mastery overview</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button onClick={loadMastery} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          {[
            { label: 'Strong', count: strongCount, color: 'var(--color-success)' },
            { label: 'Average', count: avgCount, color: 'var(--color-warning)' },
            { label: 'Weak', count: weakCount, color: 'var(--color-danger)' },
            { label: 'Not Studied', count: notStudiedCount, color: 'var(--color-text-muted)' },
          ].map((item) => (
            <div key={item.label} className="stat-card text-center">
              <div className="h2" style={{ color: item.color, margin: 0 }}>{item.count}</div>
              <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          <button
            onClick={() => setSelectedSubject(null)}
            className={`btn ${selectedSubject === null ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 'var(--font-size-sm)' }}
          >
            All Subjects
          </button>
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSubject(s)}
              className={`btn ${selectedSubject === s ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              {SUBJECTS[s]?.label || s}
            </button>
          ))}
        </div>

        <div className="stack" style={{ gap: 'var(--space-4)' }}>
          {subjects
            .filter(s => selectedSubject === null || s === selectedSubject)
            .map((subject) => {
              const topics = SUBJECTS[subject]?.topics || []
              return (
                <div key={subject} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                  <div className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-background)', borderBottom: '1px solid var(--color-border)' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>{SUBJECTS[subject]?.label || subject}</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{topics.length} topics</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-border)' }}>
                    {topics.map((topic) => {
                      const topicData = masteryData[topic]
                      const value = topicData?.accuracy || 0
                      return (
                        <div key={topic} className="flex-between" style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border-light)', transition: 'background var(--transition)' }}>
                          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>{topic}</span>
                          <div className="flex" style={{ gap: 'var(--space-4)', alignItems: 'center' }}>
                            <div className="progress" style={{ width: '96px' }}>
                              <div className="progress-fill" style={{ width: `${value}%`, background: getStatusColor(value) }} />
                            </div>
                            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', width: '48px', textAlign: 'right', color: getStatusText(value) }}>
                              {value}%
                            </span>
                            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', width: '80px', textAlign: 'right' }}>
                              {getStatusLabel(value)}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </div>

        <div className="card" style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)' }}>
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)' }}>
            <span style={{ fontWeight: '500', color: 'var(--color-text-secondary)' }}>Legend</span>
            <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Strong (80-100%)</span>
            </span>
            <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-warning)' }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Average (50-79%)</span>
            </span>
            <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-danger)' }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Weak (0-49%)</span>
            </span>
            <span className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-border)' }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Not studied</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// WEAKNESS FINDER PAGE
// ============================================================
export function WeaknessFinderPage() {
  const navigate = useNavigate()
  const [weakTopics, setWeakTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState(null)
  const [useAI, setUseAI] = useState(false)
  const [aiLimitReached, setAiLimitReached] = useState(false)
  const [error, setError] = useState(null)
  const [aiCallsRemaining, setAiCallsRemaining] = useState(AI_LIMITS.daily)
  const [showAI, setShowAI] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [isFreeUser, setIsFreeUser] = useState(false)
  const [subLoading, setSubLoading] = useState(true)
  const [todaySnapshot, setTodaySnapshot] = useState(null)

  const CACHE_KEY = 'weakness_finder_cache'
  const CACHE_EXPIRY_HOURS = 12

  // ─── Read today's backend snapshot ───
  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem('hyelearner_weakness_today')
        const parsed = raw ? JSON.parse(raw) : null
        log('🔵 [snapshot-effect] Loaded from localStorage:', parsed)
        log('🔵 [snapshot-effect] weakTopics count:', parsed?.weakTopics?.length ?? 0)
        log('🔵 [snapshot-effect] generatedAt:', parsed?.generatedAt ?? null)
        setTodaySnapshot(parsed)
      } catch (e) {
        err('🔴 [snapshot-effect] Failed to parse:', e)
        setTodaySnapshot(null)
      }
    }
    load()
    window.addEventListener('hydration:done', () => {
      log('🟢 [snapshot-effect] hydration:done fired')
      load()
    })
    window.addEventListener('storage', (e) => {
      if (e.key === 'hyelearner_weakness_today') {
        log('🟢 [snapshot-effect] storage event for weakness key')
        load()
      }
    })
    return () => {
      window.removeEventListener('hydration:done', load)
      window.removeEventListener('storage', load)
    }
  }, [])

  const alreadyDoneToday = !!todaySnapshot?.generatedAt
  log('🟡 [render] alreadyDoneToday:', alreadyDoneToday, '| todaySnapshot:', todaySnapshot)

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setIsFreeUser(!status.isActive)
      } catch (error) {
        setIsFreeUser(true)
      } finally {
        setSubLoading(false)
      }
    }
    checkSubscription()
  }, [])

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem('hyelearner_ai_usage')
    if (saved) {
      const usage = JSON.parse(saved)
      if (usage.date === today) {
        const remaining = AI_LIMITS.daily - usage.count
        setAiCallsRemaining(Math.max(0, remaining))
        setAiLimitReached(remaining <= 0)
      } else {
        localStorage.setItem('hyelearner_ai_usage', JSON.stringify({ date: today, count: 0 }))
        setAiCallsRemaining(AI_LIMITS.daily)
        setAiLimitReached(false)
      }
    } else {
      localStorage.setItem('hyelearner_ai_usage', JSON.stringify({ date: today, count: 0 }))
      setAiCallsRemaining(AI_LIMITS.daily)
      setAiLimitReached(false)
    }
  }, [])

  useEffect(() => {
    if (isFreeUser) {
      log('🟡 [init-effect] Free user — skipping analysis')
      setLoading(false)
      return
    }
    const checkCacheAndAnalyze = async () => {
      const cached = localStorage.getItem(CACHE_KEY)
      const now = Date.now()

      if (cached) {
        try {
          const data = JSON.parse(cached)
          const age = now - data.timestamp
          const expiryMs = CACHE_EXPIRY_HOURS * 60 * 60 * 1000

          if (age < expiryMs) {
            log('📦 [init-effect] Using local cache. logicResults:', data.logicResults?.length, '| has AI:', !!data.aiAnalysis)
            setWeakTopics(data.logicResults || [])
            if (data.aiAnalysis) {
              setAiAnalysis(data.aiAnalysis)
              setUseAI(true)
              setShowAI(true)
            }
            setLoading(false)
            return
          } else {
            log('🔄 [init-effect] Cache expired — re-analyzing')
          }
        } catch (e) {
          warn('⚠️ [init-effect] Failed to parse cache:', e)
        }
      }

      log('🟡 [init-effect] No fresh cache — calling analyzeWeaknesses(false)')
      await analyzeWeaknesses(false)
    }

    if (!isFreeUser) {
      checkCacheAndAnalyze()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFreeUser])

  const saveToCache = (logicResults, aiData = null) => {
    const cacheData = {
      timestamp: Date.now(),
      logicResults: logicResults,
      aiAnalysis: aiData,
    }
    log('💾 [saveToCache] Saving:', { logicCount: logicResults.length, hasAI: !!aiData })
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
  }

  const analyzeWithLogic = () => {
    const mastery = storage.getMastery()
    const mistakes = storage.getMistakes()
    const sessions = storage.getSessions()

    log('🧮 [analyzeWithLogic] mastery keys:', Object.keys(mastery).length, '| mistakes:', mistakes.length, '| sessions:', sessions.length)

    const topicMistakes = {}
    mistakes.forEach(m => {
      const topic = m.topic || 'General'
      topicMistakes[topic] = (topicMistakes[topic] || 0) + 1
    })

    const topicAttempts = {}
    sessions.forEach(s => {
      if (s.questions) {
        s.questions.forEach(q => {
          const topic = q.topic || 'General'
          topicAttempts[topic] = (topicAttempts[topic] || 0) + 1
        })
      }
    })

    const weak = Object.entries(mastery)
      .map(([topic, data]) => {
        const value = data.accuracy || 0
        let weaknessScore = 100 - value
        const mistakeCount = topicMistakes[topic] || 0
        weaknessScore += mistakeCount * 2

        if (mistakeCount >= 3) weaknessScore += 10
        if (mistakeCount >= 5) weaknessScore += 15

        let priority = 'Low'
        if (weaknessScore > 70) priority = 'High'
        else if (weaknessScore > 40) priority = 'Medium'

        return {
          topic,
          accuracy: value,
          weaknessScore: Math.min(weaknessScore, 100),
          priority,
          mistakeCount,
          attempts: topicAttempts[topic] || 0,
        }
      })
      .filter(item => item.accuracy < 60 || item.mistakeCount > 0)
      .sort((a, b) => b.weaknessScore - a.weaknessScore)

    log('🧮 [analyzeWithLogic] Result count:', weak.length)
    return weak
  }

  const analyzeWithAI = async (logicResults) => {
    log('🤖 [analyzeWithAI] Called. alreadyDoneToday:', alreadyDoneToday, '| logicResults:', logicResults.length)

    // ─── Already done today — just show cached snapshot ───
    if (alreadyDoneToday) {
      if (todaySnapshot) {
        log('🤖 [analyzeWithAI] Snapshot exists — using it')
        setAiAnalysis({
          weakTopics: todaySnapshot.weakTopics || [],
          summary: todaySnapshot.summary || '',
          generatedAt: todaySnapshot.generatedAt,
        })
        setUseAI(true)
        setShowAI(true)
      }
      return
    }

    if (aiLimitReached) {
      warn('⚠️ [analyzeWithAI] AI limit reached')
      setError('AI limit reached. Using logic-based results.')
      return
    }

    setAiLoading(true)
    setError(null)

    try {
      log('🤖 [analyzeWithAI] Calling ai.weakness()')
      const result = await ai.weakness({ limit: 5 })
      log('🤖 [analyzeWithAI] Response:', result)

      trackAIUsage()

      let weakTopicsList = []
      let summary = result.summary || 'Based on your performance, focus on these areas for maximum improvement.'

      const source = result.weakTopics || result.weak_topics || (Array.isArray(result) ? result : null)

      if (source && Array.isArray(source)) {
        weakTopicsList = source.map(item => ({
          topic: item.topic,
          accuracy: item.accuracy || 50,
          priority: item.priority || 'Medium',
          recommendations: item.recommendations || `Practice more in ${item.topic}`,
        }))
      } else {
        weakTopicsList = logicResults.slice(0, 5).map(w => ({
          topic: w.topic,
          accuracy: w.accuracy,
          priority: w.priority,
          recommendations: generateRecommendations(w.topic, w.accuracy, w.mistakeCount)[0] || `Practice ${w.topic} more`,
        }))
      }

      const aiData = {
        weakTopics: weakTopicsList.slice(0, 5),
        summary: summary,
        generatedAt: result.createdAt || result.created_at || new Date().toISOString(),
      }

      log('🤖 [analyzeWithAI] Final aiData:', aiData)
      setAiAnalysis(aiData)
      setUseAI(true)
      setShowAI(true)

      // Force hydrate so todaySnapshot becomes current
      window.dispatchEvent(new Event('hydration:done'))

      const today = new Date().toISOString().split('T')[0]
      const saved = localStorage.getItem('hyelearner_ai_usage')
      if (saved) {
        const usage = JSON.parse(saved)
        if (usage.date === today) {
          const remaining = AI_LIMITS.daily - usage.count
          setAiCallsRemaining(Math.max(0, remaining))
          setAiLimitReached(remaining <= 0)
        }
      }

      return aiData
    } catch (e) {
      err('🔴 [analyzeWithAI] Failed:', e)
      setError('AI analysis failed. Showing logic-based results.')
      setUseAI(false)
      return null
    } finally {
      setAiLoading(false)
    }
  }

  const analyzeWeaknesses = async (forceAI = false) => {
    log('🔵 [analyzeWeaknesses] START. forceAI:', forceAI)
    log('🔵 [analyzeWeaknesses] todaySnapshot:', todaySnapshot)
    log('🔵 [analyzeWeaknesses] snapshot topics:', todaySnapshot?.weakTopics?.length ?? 0)
    log('🔵 [analyzeWeaknesses] snapshot generatedAt:', todaySnapshot?.generatedAt ?? null)

    setLoading(true)
    setError(null)
    setAiAnalysis(null)
    setUseAI(false)
    setShowAI(false)

    // ─── Backend already generated today's snapshot → MERGE with local logic ───
    if (todaySnapshot?.generatedAt) {
      log('✅ [analyzeWeaknesses] SNAPSHOT EXISTS — merging with local logic')

      const localTopics = analyzeWithLogic()
      log('✅ [analyzeWeaknesses] Local topics:', localTopics.length)

      const snapshotTopics = (todaySnapshot.weakTopics || []).map((t) => ({
        topic: t.topic,
        accuracy: t.accuracy || 0,
        priority: t.priority || 'Medium',
        mistakeCount: t.mistakeCount || 0,
        attempts: t.attempts || 0,
        recommendations: t.recommendations || null,
        source: 'snapshot',
      }))
      log('✅ [analyzeWeaknesses] Snapshot topics:', snapshotTopics.length)

      // Merge by topic name; snapshot wins on overlap
      const merged = [...snapshotTopics]
      localTopics.forEach((local) => {
        if (!merged.find((m) => m.topic === local.topic)) {
          merged.push({ ...local, source: 'local' })
        }
      })

      log('✅ [analyzeWeaknesses] MERGED count:', merged.length)
      log('✅ [analyzeWeaknesses] MERGED topics:', merged.map((m) => `${m.topic} (${m.source})`))

      setWeakTopics(merged)
      setAiAnalysis({
        weakTopics: todaySnapshot.weakTopics || [],
        summary: todaySnapshot.summary || '',
        generatedAt: todaySnapshot.generatedAt,
      })
      setUseAI(true)
      setShowAI(true)
      setLoading(false)
      return
    }

    log('🟡 [analyzeWeaknesses] NO SNAPSHOT — falling back to local + AI flow')

    const logicResults = analyzeWithLogic()
    setWeakTopics(logicResults)

    let aiData = null

    const cached = localStorage.getItem(CACHE_KEY)
    let shouldRunAI = forceAI || !aiLimitReached

    if (cached) {
      try {
        const data = JSON.parse(cached)
        const age = Date.now() - data.timestamp
        const expiryMs = CACHE_EXPIRY_HOURS * 60 * 60 * 1000
        if (age < expiryMs && data.aiAnalysis) {
          shouldRunAI = false
          aiData = data.aiAnalysis
          setAiAnalysis(aiData)
          setUseAI(true)
          setShowAI(true)
        }
      } catch (e) {}
    }

    if (shouldRunAI && logicResults.length > 0) {
      aiData = await analyzeWithAI(logicResults)
    }

    saveToCache(logicResults, aiData)
    setLoading(false)
  }

  const generateRecommendations = (topic, accuracy, mistakeCount) => {
    const recs = []

    if (accuracy < 30) {
      recs.push(`Master the fundamentals of ${topic} first`)
      recs.push(`Watch video tutorials on ${topic}`)
    } else if (accuracy < 50) {
      recs.push(`Practice ${topic} questions daily (10-15 per session)`)
      recs.push(`Review your mistakes in ${topic}`)
    }

    if (mistakeCount >= 3) {
      recs.push(`Focus on ${topic} concepts you keep getting wrong`)
    }

    if (recs.length === 0) {
      recs.push(`Continue practicing ${topic} to improve further`)
    }

    return recs
  }

  const handleRefresh = async () => {
    log('🔄 [handleRefresh] User tapped refresh')
    setRefreshing(true)
    await analyzeWeaknesses(true)
    setRefreshing(false)
  }

  if (subLoading || loading) {
    return <LoadingScreen />
  }

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-danger-light)' }}>
              <Brain style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />
            </div>
            <div>
              <h1 className="h2">Weakness Finder</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Find and fix weak topics</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>
        <FreeUserLockScreen featureName="Weakness Finder" navigate={navigate} />
      </div>
    )
  }

  log('🎨 [render] Rendering WeaknessFinderPage. weakTopics.length:', weakTopics.length)

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-danger-light)' }}>
              <Brain style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />
            </div>
            <div>
              <h1 className="h2">Weakness Finder</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {useAI ? 'AI-powered analysis' : 'Logic-based analysis'}
                {!aiLoading && (
                  <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    (Updated {(() => {
                      const cached = localStorage.getItem(CACHE_KEY)
                      if (cached) {
                        try {
                          const data = JSON.parse(cached)
                          return new Date(data.timestamp).toLocaleTimeString()
                        } catch (e) {}
                      }
                      return 'never'
                    })()})
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button
              onClick={handleRefresh}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              disabled={refreshing}
            >
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        {/* ⭐ Weakness status banner */}
        <div
          style={{
            padding: 'var(--space-3) var(--space-4)',
            borderRadius: 'var(--radius-xl)',
            background: alreadyDoneToday
              ? 'var(--color-success-light)'
              : 'var(--color-primary-light)',
            border: `1px solid ${
              alreadyDoneToday ? 'var(--color-success)' : 'var(--color-primary)'
            }`,
            marginBottom: 'var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
          }}
        >
          {alreadyDoneToday ? (
            <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
          ) : (
            <Sparkles size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
              {alreadyDoneToday
                ? 'Daily weakness check complete'
                : 'Weakness analysis ready'}
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)',
                marginTop: 2,
              }}
            >
              {alreadyDoneToday
                ? `Checked at ${new Date(todaySnapshot.generatedAt).toLocaleTimeString()}`
                : 'Tap below to run AI analysis (once per day)'}
            </div>
          </div>
        </div>

        {/* AI call limit */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu style={{ width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              AI Calls Remaining: <strong>{aiCallsRemaining}</strong> / {AI_LIMITS.daily}
            </span>
          </div>
          {aiLimitReached && (
            <span className="badge badge-danger">Limit Reached</span>
          )}
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle style={{ width: '20px', height: '20px' }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {weakTopics.length === 0 ? (
          <div className="card text-center" style={{ padding: 'var(--space-12)' }}>
            <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-success-light)', margin: '0 auto var(--space-4)' }}>
              <CheckCircle2 style={{ width: '32px', height: '32px', color: 'var(--color-success)' }} />
            </div>
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Weak Topics</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>You're performing well across all topics</p>
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
          </div>
        ) : (
          <>
            <div className="grid-2" style={{ marginBottom: 'var(--space-6)' }}>
              <div className="stat-card text-center">
                <div className="h2" style={{ color: 'var(--color-danger)' }}>{weakTopics.length}</div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Weak Topics</div>
              </div>
              <div className="stat-card text-center">
                <div className="h2" style={{ color: 'var(--color-warning)' }}>
                  {Math.round(weakTopics.reduce((acc, t) => acc + t.accuracy, 0) / weakTopics.length)}%
                </div>
                <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Avg Accuracy</div>
              </div>
            </div>

            {(!aiLimitReached || alreadyDoneToday) && (
              <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <button
                  onClick={() => {
                    if (alreadyDoneToday) {
                      setShowAI(!showAI)
                      return
                    }
                    if (!useAI) {
                      setAiLoading(true)
                      analyzeWithAI(weakTopics).finally(() => setAiLoading(false))
                    } else {
                      setShowAI(!showAI)
                    }
                  }}
                  className={`btn ${useAI || alreadyDoneToday ? 'btn-primary' : 'btn-outline'}`}
                  disabled={aiLoading}
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  {aiLoading ? (
                    <>
                      <div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }} />
                      Analyzing...
                    </>
                  ) : alreadyDoneToday ? (
                    <>
                      <CheckCircle2 size={16} />
                      {showAI ? 'Hide AI Insights' : '✓ Checked today — view'}
                    </>
                  ) : (
                    <>
                      <Cpu size={16} />
                      {useAI ? 'AI Insights' : 'Get AI Insights'}
                    </>
                  )}
                </button>
              </div>
            )}

            {showAI && aiAnalysis && (
              <div className="card" style={{ marginBottom: 'var(--space-6)', background: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <Sparkles style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: '600', fontSize: 'var(--font-size-lg)' }}>AI Insights</span>
                  <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>Powered by AI</span>
                </div>

                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    {aiAnalysis.summary || 'Based on your performance, focus on these areas for maximum improvement.'}
                  </p>
                </div>

                {aiAnalysis.weakTopics && aiAnalysis.weakTopics.length > 0 && (
                  <div className="stack" style={{ gap: 'var(--space-3)' }}>
                    {aiAnalysis.weakTopics.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="card" style={{ background: 'var(--color-surface)' }}>
                        <div className="flex-between">
                          <div>
                            <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{item.topic}</div>
                            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginTop: 'var(--space-1)' }}>
                              <span className="badge badge-danger">{item.accuracy}%</span>
                              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                                Priority: {item.priority || 'High'}
                              </span>
                            </div>
                          </div>
                        </div>
                        {item.recommendations && (
                          <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                            💡 {item.recommendations}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-3)' }}>
                  Generated: {new Date(aiAnalysis.generatedAt).toLocaleString()}
                </div>
              </div>
            )}

            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {weakTopics.map((item) => (
                <div key={item.topic} className="card card-hover" style={{ cursor: 'default' }}>
                  <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                        {item.topic}
                        {item.source && (
                          <span style={{ fontSize: '10px', marginLeft: 8, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {item.source}
                          </span>
                        )}
                      </div>
                      <div className="flex" style={{ gap: 'var(--space-2)', marginTop: '2px', flexWrap: 'wrap' }}>
                        <span className={`badge ${item.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                          {item.priority} Priority
                        </span>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          {item.mistakeCount} mistakes • {item.attempts} attempts
                        </span>
                      </div>
                      <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        {/* Use snapshot recommendations if present, else generate locally */}
                        {(item.recommendations
                          ? [item.recommendations]
                          : generateRecommendations(item.topic, item.accuracy, item.mistakeCount)
                        ).map((rec, i) => (
                          <div key={i} className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--color-primary)' }}>•</span>
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flexShrink: 0, marginLeft: 'var(--space-4)' }}>
                      <div className="h2" style={{ color: item.accuracy < 30 ? 'var(--color-danger)' : 'var(--color-warning)', margin: 0 }}>
                        {item.accuracy}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card text-center" style={{
              marginTop: 'var(--space-6)',
              padding: 'var(--space-6)',
              background: 'var(--color-primary-light)',
              border: '2px dashed var(--color-primary)'
            }}>
              <div className="flex" style={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}>
                <BookOpen style={{
                  width: '48px',
                  height: '48px',
                  color: 'var(--color-primary)'
                }} />
                <h3 className="h3" style={{ color: 'var(--color-text)' }}>
                  Ready to improve?
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-md)',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}>
                  Go to the <strong>Dashboard</strong> and practice your weak subjects.
                  Focus on the topics listed above to boost your mastery.
                </p>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn btn-primary btn-lg flex-center"
                  style={{ marginTop: 'var(--space-2)' }}
                >
                  <ArrowLeft style={{ width: '16px', height: '16px' }} /> Go to Dashboard
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ============================================================
// GAMIFICATION PAGE — LOCKED FOR FREE USERS
// ============================================================
export function GamificationPage() {
  const navigate = useNavigate()
  const [gamification, setGamification] = useState({
    xp: 0,
    level: 1,
    streak: 0,
    badges: [],
  })
  const [loading, setLoading] = useState(true)
  const [isFreeUser, setIsFreeUser] = useState(false)
  const [subLoading, setSubLoading] = useState(true)

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setIsFreeUser(!status.isActive)
      } catch (error) {
        setIsFreeUser(true)
      } finally {
        setSubLoading(false)
      }
    }
    checkSubscription()
  }, [])

  useEffect(() => {
    if (!isFreeUser) {
      loadGamification()
    } else {
      setLoading(false)
    }
  }, [isFreeUser])

  const loadGamification = () => {
    setLoading(true)
    try {
      const data = storage.getGamification()
      setGamification(data)
    } catch (error) {
      console.error('Failed to load gamification:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading && !isFreeUser) {
      const interval = setInterval(loadGamification, 30000)
      return () => clearInterval(interval)
    }
  }, [loading, isFreeUser])

  const xpForNextLevel = XP_TABLE[gamification.level - 1] || XP_TABLE[0]
  const progress = Math.min((gamification.xp / xpForNextLevel) * 100, 100)

  if (subLoading || loading) {
    return <LoadingScreen />
  }

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
              <Gamepad2 style={{ width: '20px', height: '20px', color: 'var(--color-secondary)' }} />
            </div>
            <div>
              <h1 className="h2">Gamification</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Progress & achievements</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>
        <FreeUserLockScreen featureName="Gamification" navigate={navigate} />
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-secondary-light)' }}>
              <Gamepad2 style={{ width: '20px', height: '20px', color: 'var(--color-secondary)' }} />
            </div>
            <div>
              <h1 className="h2">Gamification</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Progress & achievements</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button onClick={loadGamification} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        <div className="card text-center" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="h1" style={{ color: 'var(--color-primary)' }}>{gamification.xp.toLocaleString()}</div>
          <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>Level {gamification.level}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>{gamification.xp} / {xpForNextLevel} XP</span>
          </div>
          <div className="progress" style={{ marginTop: 'var(--space-1)' }}>
            <div className="progress-fill progress-fill-primary" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', textAlign: 'right' }}>
            {Math.round(progress)}% to Level {gamification.level + 1}
          </div>
        </div>

        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-lg)', background: 'var(--color-warning-light)' }}>
              <Zap style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
            </div>
            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>Daily Streak</span>
          </div>
          <span className="h2" style={{ color: 'var(--color-warning)' }}>{gamification.streak}</span>
        </div>

        <div className="card">
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Award style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
              <h2 className="h3" style={{ margin: 0 }}>Badges</h2>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              {gamification.badges.length} / {BADGE_DEFINITIONS.length}
            </span>
          </div>
          <div className="grid-4" style={{ gap: 'var(--space-3)' }}>
            {BADGE_DEFINITIONS.map((badge) => {
              const unlocked = gamification.badges.includes(badge.id)
              return (
                <div
                  key={badge.id}
                  className={`card text-center ${unlocked ? 'success-card' : ''}`}
                  style={{
                    padding: 'var(--space-3)',
                    opacity: unlocked ? 1 : 0.5,
                    transition: 'all var(--transition)'
                  }}
                >
                  <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-1)' }}>{unlocked ? badge.icon : '🔒'}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: '500', color: 'var(--color-text)' }}>{badge.label}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{badge.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// LEADERBOARDS PAGE — tap row → friend modal
// ============================================================
export function LeaderboardsPage() {
  const navigate = useNavigate()
  const [leaderboardData, setLeaderboardData] = useState([])
  const [filter, setFilter] = useState('global')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isFreeUser, setIsFreeUser] = useState(false)
  const [subLoading, setSubLoading] = useState(true)

  // ─── Friend modal state ───
  const [selectedUser, setSelectedUser] = useState(null)
  const [statusLoading, setStatusLoading] = useState(false)
  const [userStatus, setUserStatus] = useState(null)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const status = await subscriptions.status()
        setIsFreeUser(!status.isActive)
      } catch (error) {
        setIsFreeUser(true)
      } finally {
        setSubLoading(false)
      }
    }
    checkSubscription()
  }, [])

  useEffect(() => {
    if (!isFreeUser) {
      fetchLeaderboard()
    } else {
      setLoading(false)
    }
  }, [filter, isFreeUser])

  const fetchLeaderboard = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await leaderboard.get(filter)
      setLeaderboardData(data.rankings || [])
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err)
      setError(err.message || 'Failed to load leaderboard')
      setLeaderboardData([])
    } finally {
      setLoading(false)
    }
  }

  const getMedal = (rank) => {
    if (rank === 1) return <Crown style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
    if (rank === 2) return <Medal style={{ width: '20px', height: '20px', color: 'var(--color-text-muted)' }} />
    if (rank === 3) return <Medal style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
    return <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text-muted)' }}>#{rank}</span>
  }

  const handleRefresh = () => {
    fetchLeaderboard()
  }

  // ─── Friend modal logic ───
  const openUser = async (userId) => {
    if (!userId) return
    setSelectedUser(userId)
    setUserStatus(null)
    setStatusLoading(true)
    try {
      const res = await social.getFriendStatus(userId)
      setUserStatus(res)
    } catch (err) {
      console.error('Failed to load user status:', err)
      setUserStatus(null)
    } finally {
      setStatusLoading(false)
    }
  }

  const closeUserModal = () => {
    setSelectedUser(null)
    setUserStatus(null)
  }

  const sendFriendRequest = async () => {
    if (!selectedUser) return
    setActionLoading(true)
    try {
      await social.sendFriendRequest(selectedUser)
      setUserStatus((prev) => ({ ...prev, outgoingRequestId: 'pending' }))
    } catch (err) {
      console.error('Send friend request failed:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const acceptIncoming = async () => {
    if (!userStatus?.incomingRequestId) return
    setActionLoading(true)
    try {
      await social.acceptFriendRequest(userStatus.incomingRequestId)
      setUserStatus((prev) => ({ ...prev, isFriend: true, incomingRequestId: null }))
    } catch (err) {
      console.error('Accept failed:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const rejectIncoming = async () => {
    if (!userStatus?.incomingRequestId) return
    setActionLoading(true)
    try {
      await social.rejectFriendRequest(userStatus.incomingRequestId)
      setUserStatus((prev) => ({ ...prev, incomingRequestId: null }))
    } catch (err) {
      console.error('Reject failed:', err)
    } finally {
      setActionLoading(false)
    }
  }

  if (subLoading || loading) {
    return <LoadingScreen />
  }

  if (isFreeUser) {
    return (
      <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <Trophy style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2">Leaderboards</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Top performers</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>
        <FreeUserLockScreen featureName="Leaderboards" navigate={navigate} />
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-warning-light)' }}>
              <Trophy style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />
            </div>
            <div>
              <h1 className="h2">Leaderboards</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Top performers</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <button onClick={handleRefresh} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        {error && (
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle style={{ width: '20px', height: '20px' }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          {['global', 'school', 'friends'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn ${filter === f ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 'var(--font-size-sm)', textTransform: 'capitalize' }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
          <div className="grid" style={{
            gridTemplateColumns: '1fr 3fr 1fr 1fr',
            gap: 'var(--space-2)',
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--color-background)',
            borderBottom: '1px solid var(--color-border)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '500',
            color: 'var(--color-text-secondary)'
          }}>
            <div>Rank</div>
            <div>Name</div>
            <div style={{ textAlign: 'right' }}>XP</div>
            <div style={{ textAlign: 'right' }}>Level</div>
          </div>

          {leaderboardData.length === 0 ? (
            <div className="text-center" style={{ padding: 'var(--space-8)' }}>
              <p className="text-muted">No rankings yet. Start practicing to appear here!</p>
            </div>
          ) : (
            leaderboardData.map((item) => (
              <button
                key={item.user_id || item.rank || item.id}
                onClick={() => openUser(item.user_id || item.id)}
                className="grid"
                style={{
                  gridTemplateColumns: '1fr 3fr 1fr 1fr',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderBottom: '1px solid var(--color-border-light)',
                  transition: 'background var(--transition)',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  width: '100%',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-background)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                <div className="flex" style={{ alignItems: 'center', gap: 'var(--space-1)' }}>
                  {getMedal(item.rank)}
                </div>
                <div>
                  <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                    {item.name || item.username || 'Anonymous'}
                  </div>
                  {item.school && (
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                      {item.school}
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right', fontWeight: '700', color: 'var(--color-primary)' }}>
                  {(item.xp || 0).toLocaleString()}
                </div>
                <div style={{ textAlign: 'right', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  Lv.{item.level || 1}
                </div>
              </button>
            ))
          )}
        </div>

        <div className="card flex-between" style={{ marginTop: 'var(--space-4)' }}>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Total Players</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: '600', color: 'var(--color-text)' }}>{leaderboardData.length}</span>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Top XP</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: '600', color: 'var(--color-primary)' }}>
              {leaderboardData[0]?.xp?.toLocaleString() || 0}
            </span>
          </div>
        </div>
      </div>

      {/* ─── FRIEND MODAL ─── */}
      {selectedUser && (
        <div
          className="modal-overlay"
          onClick={closeUserModal}
          style={{ zIndex: 200 }}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '360px', width: '100%', padding: 'var(--space-5)' }}
          >
            {statusLoading ? (
              <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
                <Loader2 className="animate-spin" size={24} />
              </div>
            ) : userStatus?.user ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                  <div
                    className="flex-center"
                    style={{
                      width: '64px',
                      height: '64px',
                      margin: '0 auto var(--space-3)',
                      borderRadius: '50%',
                      background: 'var(--color-primary-light)',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--color-primary)',
                      overflow: 'hidden',
                    }}
                  >
                    {userStatus.user.avatar ? (
                      <img
                        src={userStatus.user.avatar}
                        alt={userStatus.user.username}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      (userStatus.user.firstName?.[0] || userStatus.user.username?.[0] || 'U').toUpperCase()
                    )}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>
                    {userStatus.user.firstName} {userStatus.user.lastName}
                  </div>
                  <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                    @{userStatus.user.username}
                  </div>
                  {userStatus.user.school && (
                    <div className="text-muted" style={{ fontSize: 'var(--font-size-xs)', marginTop: 2 }}>
                      {userStatus.user.school}
                    </div>
                  )}
                </div>

                {userStatus.isFriend ? (
                  <button
                    className="btn btn-outline flex-center"
                    style={{ width: '100%' }}
                    disabled
                  >
                    <CheckCircle2 size={16} /> Friends
                  </button>
                ) : userStatus.outgoingRequestId ? (
                  <button
                    className="btn btn-ghost flex-center"
                    style={{ width: '100%' }}
                    disabled
                  >
                    <Clock size={16} /> Request sent
                  </button>
                ) : userStatus.incomingRequestId ? (
                  <div className="flex" style={{ gap: 'var(--space-2)' }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1 }}
                      onClick={acceptIncoming}
                      disabled={actionLoading}
                    >
                      {actionLoading ? <Loader2 size={14} className="animate-spin" /> : 'Accept'}
                    </button>
                    <button
                      className="btn btn-outline"
                      style={{ flex: 1 }}
                      onClick={rejectIncoming}
                      disabled={actionLoading}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn btn-primary flex-center"
                    style={{ width: '100%' }}
                    onClick={sendFriendRequest}
                    disabled={actionLoading}
                  >
                    {actionLoading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        <UserPlus size={16} /> Add Friend
                      </>
                    )}
                  </button>
                )}

                <button
                  className="btn btn-ghost"
                  style={{ width: '100%', marginTop: 'var(--space-2)' }}
                  onClick={closeUserModal}
                >
                  Close
                </button>
              </>
            ) : (
              <div className="text-center" style={{ padding: 'var(--space-4)' }}>
                <p className="text-muted">Could not load user info.</p>
                <button className="btn btn-outline" onClick={closeUserModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
