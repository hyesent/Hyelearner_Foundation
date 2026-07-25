// ============================================================
// HYELEARNER: FOUNDATION — ENGAGE PAGES
// Heatmap, Weakness Finder (AI + Logic), Gamification, Leaderboards
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import { ai, leaderboard, subscriptions } from '../services'
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
  BookOpen
} from 'lucide-react'

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
          onClick={() => navigate('/settings')} 
          className="btn btn-primary flex-center"
        >
          Subscribe Now
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

  const CACHE_KEY = 'weakness_finder_cache'
  const CACHE_EXPIRY_HOURS = 12

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
            console.log('📦 Using cached weakness analysis')
            setWeakTopics(data.logicResults || [])
            if (data.aiAnalysis) {
              setAiAnalysis(data.aiAnalysis)
              setUseAI(true)
              setShowAI(true)
            }
            setLoading(false)
            return
          } else {
            console.log('🔄 Cache expired — re-analyzing')
          }
        } catch (e) {
          console.warn('Failed to parse cache:', e)
        }
      }

      await analyzeWeaknesses(false)
    }

    if (!isFreeUser) {
      checkCacheAndAnalyze()
    }
  }, [isFreeUser])

  const saveToCache = (logicResults, aiData = null) => {
    const cacheData = {
      timestamp: Date.now(),
      logicResults: logicResults,
      aiAnalysis: aiData,
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
  }

  const analyzeWithLogic = () => {
    const mastery = storage.getMastery()
    const mistakes = storage.getMistakes()
    const sessions = storage.getSessions()

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

    return weak
  }

  const analyzeWithAI = async (logicResults) => {
    if (aiLimitReached) {
      setError('AI limit reached. Using logic-based results.')
      return
    }

    setAiLoading(true)
    setError(null)

    try {
      const mistakes = storage.getMistakes()
      const mastery = storage.getMastery()
      
      const payload = {
        mistakes: mistakes.slice(0, 50),
        mastery: mastery,
        limit: 5
      }

      console.log('📤 Sending to AI weakness:', {
        mistakesCount: payload.mistakes.length,
        masteryTopics: Object.keys(payload.mastery).length
      })

      const result = await ai.weakness(payload)
      
      // ✅ TRACK AI USAGE
      trackAIUsage()

      let weakTopics = []
      let summary = result.summary || 'Based on your performance, focus on these areas for maximum improvement.'

      if (result.weakTopics && Array.isArray(result.weakTopics)) {
        weakTopics = result.weakTopics.map(item => ({
          topic: item.topic,
          accuracy: item.accuracy || 50,
          priority: item.priority || 'Medium',
          recommendations: item.recommendations || `Practice more in ${item.topic}`
        }))
      } else if (result.weak_topics && Array.isArray(result.weak_topics)) {
        weakTopics = result.weak_topics.map(item => ({
          topic: item.topic,
          accuracy: item.accuracy || 50,
          priority: item.priority || 'Medium',
          recommendations: item.recommendations || `Practice more in ${item.topic}`
        }))
      } else if (Array.isArray(result)) {
        weakTopics = result.map(item => ({
          topic: item.topic,
          accuracy: item.accuracy || 50,
          priority: item.priority || 'Medium',
          recommendations: item.recommendations || `Practice more in ${item.topic}`
        }))
      } else {
        weakTopics = logicResults.slice(0, 5).map(w => ({
          topic: w.topic,
          accuracy: w.accuracy,
          priority: w.priority,
          recommendations: generateRecommendations(w.topic, w.accuracy, w.mistakeCount)[0] || `Practice ${w.topic} more`
        }))
      }

      const aiData = {
        weakTopics: weakTopics.slice(0, 5),
        summary: summary,
        generatedAt: result.created_at || new Date().toISOString()
      }

      setAiAnalysis(aiData)
      setUseAI(true)
      setShowAI(true)
      
      // Update AI calls remaining after tracking
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
    } catch (err) {
      console.error('AI analysis failed:', err)
      setError('AI analysis failed. Showing logic-based results.')
      setUseAI(false)
      return null
    } finally {
      setAiLoading(false)
    }
  }

  const analyzeWeaknesses = async (forceAI = false) => {
    setLoading(true)
    setError(null)
    setAiAnalysis(null)
    setUseAI(false)
    setShowAI(false)

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

        <div className="card flex-between" style={{ marginBottom: 'var(--space-4)', background: 'var(--color-primary-light)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Cpu style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
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

            {!aiLimitReached && (
              <div className="flex" style={{ gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <button
                  onClick={() => {
                    if (!useAI) {
                      setAiLoading(true)
                      analyzeWithAI(weakTopics).finally(() => setAiLoading(false))
                    } else {
                      setShowAI(!showAI)
                    }
                  }}
                  className={`btn ${useAI ? 'btn-primary' : 'btn-outline'}`}
                  disabled={aiLoading}
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  {aiLoading ? (
                    <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Analyzing...</>
                  ) : (
                    <><Cpu style={{ width: '16px', height: '16px' }} /> {useAI ? 'AI Insights' : 'Get AI Insights'}</>
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
                      <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{item.topic}</div>
                      <div className="flex" style={{ gap: 'var(--space-2)', marginTop: '2px', flexWrap: 'wrap' }}>
                        <span className={`badge ${item.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                          {item.priority} Priority
                        </span>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                          {item.mistakeCount} mistakes • {item.attempts} attempts
                        </span>
                      </div>
                      <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        {generateRecommendations(item.topic, item.accuracy, item.mistakeCount).map((rec, i) => (
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
// LEADERBOARDS PAGE — LOCKED FOR FREE USERS
// ============================================================
export function LeaderboardsPage() {
  const navigate = useNavigate()
  const [leaderboardData, setLeaderboardData] = useState([])
  const [filter, setFilter] = useState('global')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
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
      setLeaderboardData([
        { rank: 1, name: 'John Doe', xp: 12450, level: 25, school: 'UNILAG' },
        { rank: 2, name: 'Mary Smith', xp: 10230, level: 22, school: 'UI' },
        { rank: 3, name: 'Alex Johnson', xp: 8900, level: 20, school: 'UNILAG' },
        { rank: 4, name: 'David Lee', xp: 7650, level: 18, school: 'UNIBEN' },
        { rank: 5, name: 'Sarah Jones', xp: 6200, level: 15, school: 'UNILAG' },
        { rank: 6, name: 'Michael Brown', xp: 5800, level: 14, school: 'UI' },
        { rank: 7, name: 'Emily Davis', xp: 5200, level: 13, school: 'UNILORIN' },
        { rank: 8, name: 'James Wilson', xp: 4800, level: 12, school: 'UNILAG' },
        { rank: 9, name: 'Jessica Taylor', xp: 4500, level: 11, school: 'UNIBEN' },
        { rank: 10, name: 'Robert Martinez', xp: 4200, level: 10, school: 'UI' },
      ])
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

          {leaderboardData.map((item) => (
            <div key={item.rank || item.id} className="grid" style={{ 
              gridTemplateColumns: '1fr 3fr 1fr 1fr',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-4)',
              borderBottom: '1px solid var(--color-border-light)',
              transition: 'background var(--transition)',
              alignItems: 'center'
            }}>
              <div className="flex" style={{ alignItems: 'center', gap: 'var(--space-1)' }}>
                {getMedal(item.rank)}
              </div>
              <div>
                <div style={{ fontWeight: '500', color: 'var(--color-text)' }}>{item.name}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{item.school}</div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: '700', color: 'var(--color-primary)' }}>
                {item.xp.toLocaleString()}
              </div>
              <div style={{ textAlign: 'right', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Lv.{item.level}
              </div>
            </div>
          ))}
        </div>

        <div className="card flex-between" style={{ marginTop: 'var(--space-4)' }}>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Total Players</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: '600', color: 'var(--color-text)' }}>{leaderboardData.length}</span>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-muted)' }}>Top XP</span>
            <span style={{ marginLeft: 'var(--space-2)', fontWeight: '600', color: 'var(--color-primary)' }}>{leaderboardData[0]?.xp.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}