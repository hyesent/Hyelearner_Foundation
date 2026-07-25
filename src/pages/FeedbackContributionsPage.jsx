// ============================================================
// HYELEARNER: FEEDBACK & CONTRIBUTIONS PAGE
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { ArrowLeft, Send, CheckCircle2, Loader2, AlertCircle, Users, Lightbulb, Bug, Star, MessageSquare, ThumbsUp, ThumbsDown, Plus, X, Info, Database, ExternalLink, Clock, Award, Heart, RefreshCw } from 'lucide-react'

export function FeedbackContributionsPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  // Tab state
  const [activeTab, setActiveTab] = useState('feedback')

  // Feedback state
  const [feedbackType, setFeedbackType] = useState('general')
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [feedbackEmail, setFeedbackEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  // Contributions state
  const [contributionData, setContributionData] = useState({
    university: '',
    course: '',
    year: '',
    cutoff: '',
    examType: 'jamb',
    source: ''
  })
  const [contributing, setContributing] = useState(false)
  const [contributionSuccess, setContributionSuccess] = useState(false)
  const [contributionError, setContributionError] = useState(null)

  // User's contributions history
  const [myContributions, setMyContributions] = useState([])
  const [loadingContributions, setLoadingContributions] = useState(false)

  // Universities list for contribution
  const [universitiesList] = useState([
    'UNILAG', 'UI', 'UNIBEN', 'FUTA', 'FUOYE', 'LASU', 'UNILORIN', 
    'UNN', 'UNIBADAN', 'FUTO', 'OAU', 'ABU', 'UNIMAID', 'BUK', 
    'FUNAAB', 'UNIUYO', 'DELSU', 'Other'
  ])

  // Load user contributions on mount
  useEffect(() => {
    loadMyContributions()
  }, [])

  const loadMyContributions = () => {
    setLoadingContributions(true)
    try {
      const saved = localStorage.getItem('user_contributions')
      if (saved) {
        setMyContributions(JSON.parse(saved))
      }
    } catch (err) {
      console.error('Failed to load contributions:', err)
    } finally {
      setLoadingContributions(false)
    }
  }

  // ============================================================
  // HANDLE FEEDBACK SUBMIT
  // ============================================================
  const handleFeedbackSubmit = async () => {
    if (!feedbackMessage.trim()) {
      setError('Please write your feedback')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      // ✅ Send to backend (if available)
      // const response = await fetch('https://your-api.com/feedback', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify({
      //     type: feedbackType,
      //     message: feedbackMessage,
      //     rating: feedbackRating,
      //     email: feedbackEmail || user?.email,
      //     userId: user?.id
      //   })
      // })
      // const result = await response.json()

      // ✅ Fallback to localStorage
      const feedbacks = JSON.parse(localStorage.getItem('user_feedback') || '[]')
      feedbacks.push({
        id: Date.now(),
        type: feedbackType,
        message: feedbackMessage,
        rating: feedbackRating,
        email: feedbackEmail || user?.email,
        createdAt: new Date().toISOString()
      })
      localStorage.setItem('user_feedback', JSON.stringify(feedbacks))
      
      setSuccess(true)
      setFeedbackMessage('')
      setFeedbackRating(0)
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err) {
      setError(err.message || 'Failed to submit feedback')
    } finally {
      setSubmitting(false)
    }
  }

  // ============================================================
  // HANDLE CONTRIBUTION SUBMIT
  // ============================================================
  const handleContributionSubmit = async () => {
    if (!contributionData.university || !contributionData.course || !contributionData.year || !contributionData.cutoff) {
      setContributionError('Please fill in all required fields')
      return
    }

    setContributing(true)
    setContributionError(null)

    try {
      // ✅ Send to backend (if available)
      // const response = await fetch('https://your-api.com/cutoffs/contribute', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify({
      //     university: contributionData.university,
      //     course: contributionData.course,
      //     year: parseInt(contributionData.year),
      //     cutoff: parseInt(contributionData.cutoff),
      //     examType: contributionData.examType,
      //     source: contributionData.source,
      //     userId: user?.id
      //   })
      // })
      // const result = await response.json()

      // ✅ Fallback to localStorage
      const newContribution = {
        id: Date.now(),
        ...contributionData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      const updated = [newContribution, ...myContributions]
      setMyContributions(updated)
      localStorage.setItem('user_contributions', JSON.stringify(updated))

      setContributionSuccess(true)
      setContributionData({ university: '', course: '', year: '', cutoff: '', examType: 'jamb', source: '' })
      setTimeout(() => {
        setContributionSuccess(false)
      }, 3000)
    } catch (err) {
      setContributionError(err.message || 'Failed to submit contribution')
    } finally {
      setContributing(false)
    }
  }

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <MessageSquare style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Feedback & Contributions</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Help us improve Hyelearner</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ 
          gap: 'var(--space-1)', 
          marginBottom: 'var(--space-6)', 
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto'
        }}>
          <button
            onClick={() => setActiveTab('feedback')}
            className="flex"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              borderBottom: activeTab === 'feedback' ? '2px solid var(--color-primary)' : '2px solid transparent',
              background: 'transparent',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              cursor: 'pointer',
              gap: 'var(--space-2)',
              alignItems: 'center',
              color: activeTab === 'feedback' ? 'var(--color-primary)' : 'var(--color-text-muted)',
              fontWeight: activeTab === 'feedback' ? '600' : '400',
              transition: 'all var(--transition)',
              whiteSpace: 'nowrap'
            }}
          >
            <MessageSquare style={{ width: '18px', height: '18px' }} />
            Feedback
          </button>
          <button
            onClick={() => setActiveTab('contributions')}
            className="flex"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              borderBottom: activeTab === 'contributions' ? '2px solid var(--color-primary)' : '2px solid transparent',
              background: 'transparent',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              cursor: 'pointer',
              gap: 'var(--space-2)',
              alignItems: 'center',
              color: activeTab === 'contributions' ? 'var(--color-primary)' : 'var(--color-text-muted)',
              fontWeight: activeTab === 'contributions' ? '600' : '400',
              transition: 'all var(--transition)',
              whiteSpace: 'nowrap'
            }}
          >
            <Database style={{ width: '18px', height: '18px' }} />
            Contributions
          </button>
          <button
            onClick={() => setActiveTab('my-contributions')}
            className="flex"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              borderBottom: activeTab === 'my-contributions' ? '2px solid var(--color-primary)' : '2px solid transparent',
              background: 'transparent',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              cursor: 'pointer',
              gap: 'var(--space-2)',
              alignItems: 'center',
              color: activeTab === 'my-contributions' ? 'var(--color-primary)' : 'var(--color-text-muted)',
              fontWeight: activeTab === 'my-contributions' ? '600' : '400',
              transition: 'all var(--transition)',
              whiteSpace: 'nowrap'
            }}
          >
            <Users style={{ width: '18px', height: '18px' }} />
            My Contributions
          </button>
        </div>

        {/* ============================================================
            TAB 1: FEEDBACK
        ============================================================ */}
        {activeTab === 'feedback' && (
          <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: 'var(--space-6)' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="text-center">
                <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
                  <Heart style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
                </div>
                <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>We Value Your Feedback</h3>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Your feedback helps us improve Hyelearner for everyone
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <div className="success-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />
                    <span style={{ fontWeight: '500' }}>Thank you for your feedback! 🙏</span>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="danger-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <AlertCircle style={{ width: '20px', height: '20px' }} />
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {/* Feedback Type */}
              <div>
                <label className="label">Feedback Type</label>
                <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {[
                    { id: 'general', icon: <MessageSquare size={16} />, label: 'General' },
                    { id: 'bug', icon: <Bug size={16} />, label: 'Bug Report' },
                    { id: 'feature', icon: <Lightbulb size={16} />, label: 'Feature Request' },
                    { id: 'improvement', icon: <ThumbsUp size={16} />, label: 'Improvement' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFeedbackType(type.id)}
                      className={`btn ${feedbackType === type.id ? 'btn-primary' : 'btn-outline'}`}
                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                    >
                      {type.icon} {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="label">Rate Your Experience</label>
                <div className="flex" style={{ gap: 'var(--space-1)' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFeedbackRating(star)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'var(--font-size-2xl)',
                        color: star <= feedbackRating ? 'var(--color-warning)' : 'var(--color-border)',
                        transition: 'all var(--transition)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="label">Your Feedback *</label>
                <textarea
                  className="input"
                  rows="4"
                  placeholder="Tell us what you think... What do you like? What can we improve?"
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label className="label">Email (optional)</label>
                <input
                  type="email"
                  className="input"
                  placeholder="your@email.com"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                />
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  We'll only use this to follow up on your feedback
                </p>
              </div>

              {/* Submit */}
              <button
                onClick={handleFeedbackSubmit}
                disabled={submitting || !feedbackMessage.trim()}
                className="btn btn-primary flex-center"
                style={{ width: '100%', padding: 'var(--space-3)' }}
              >
                {submitting ? (
                  <><Loader2 className="animate-spin" style={{ width: '18px', height: '18px', marginRight: 'var(--space-2)' }} /> Sending...</>
                ) : (
                  <><Send style={{ width: '18px', height: '18px' }} /> Send Feedback</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 2: CONTRIBUTIONS
        ============================================================ */}
        {activeTab === 'contributions' && (
          <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: 'var(--space-6)' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="text-center">
                <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
                  <Database style={{ width: '32px', height: '32px', color: 'var(--color-primary)' }} />
                </div>
                <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>Contribute Cut-off Data</h3>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Help build the most accurate cut-off database
                </p>
              </div>

              {/* Success */}
              {contributionSuccess && (
                <div className="success-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />
                    <span style={{ fontWeight: '500' }}>Thank you! Your contribution is pending review. 🎉</span>
                  </div>
                </div>
              )}

              {/* Error */}
              {contributionError && (
                <div className="danger-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <AlertCircle style={{ width: '20px', height: '20px' }} />
                    <span>{contributionError}</span>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="info-card" style={{ padding: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                  <Info style={{ width: '16px', height: '16px', color: 'var(--color-primary)', marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                      All contributions are reviewed before being published. Help thousands of students find accurate cut-off information.
                    </p>
                    <button 
                      onClick={() => window.open('https://www.jamb.gov.ng', '_blank')}
                      className="btn btn-ghost"
                      style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', marginTop: 'var(--space-1)' }}
                    >
                      <ExternalLink style={{ width: '14px', height: '14px' }} /> Check JAMB Portal
                    </button>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>University *</label>
                  <select
                    className="select"
                    value={contributionData.university}
                    onChange={(e) => setContributionData(prev => ({ ...prev, university: e.target.value }))}
                  >
                    <option value="">Select</option>
                    {universitiesList.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Course *</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g., Computer Science"
                    value={contributionData.course}
                    onChange={(e) => setContributionData(prev => ({ ...prev, course: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Year *</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="e.g., 2025"
                    value={contributionData.year}
                    onChange={(e) => setContributionData(prev => ({ ...prev, year: e.target.value }))}
                    min="2000"
                    max="2026"
                  />
                </div>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Cut-off Score *</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="e.g., 280"
                    value={contributionData.cutoff}
                    onChange={(e) => setContributionData(prev => ({ ...prev, cutoff: e.target.value }))}
                    min="100"
                    max="400"
                  />
                </div>
              </div>

              <div>
                <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Exam Type</label>
                <select
                  className="select"
                  value={contributionData.examType}
                  onChange={(e) => setContributionData(prev => ({ ...prev, examType: e.target.value }))}
                >
                  <option value="jamb">JAMB</option>
                  <option value="waec">WAEC</option>
                  <option value="neco">NECO</option>
                  <option value="post_utme">Post-UTME</option>
                </select>
              </div>

              <div>
                <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Source (optional)</label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g., JAMB Brochure 2025, University Website"
                  value={contributionData.source}
                  onChange={(e) => setContributionData(prev => ({ ...prev, source: e.target.value }))}
                />
              </div>

              <button
                onClick={handleContributionSubmit}
                disabled={contributing || !contributionData.university || !contributionData.course || !contributionData.year || !contributionData.cutoff}
                className="btn btn-primary flex-center"
                style={{ width: '100%', padding: 'var(--space-3)' }}
              >
                {contributing ? (
                  <><Loader2 className="animate-spin" style={{ width: '18px', height: '18px', marginRight: 'var(--space-2)' }} /> Submitting...</>
                ) : (
                  <><Send style={{ width: '18px', height: '18px' }} /> Submit Contribution</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 3: MY CONTRIBUTIONS
        ============================================================ */}
        {activeTab === 'my-contributions' && (
          <div className="card" style={{ padding: 'var(--space-6)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                <Users style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
                <h3 style={{ margin: 0 }}>My Contributions</h3>
                <span className="badge badge-muted">{myContributions.length}</span>
              </div>
              <button 
                onClick={loadMyContributions}
                className="btn btn-ghost"
                style={{ padding: 'var(--space-1) var(--space-2)' }}
              >
                <RefreshCw style={{ width: '16px', height: '16px' }} />
              </button>
            </div>

            {loadingContributions ? (
              <div className="flex-center" style={{ padding: 'var(--space-6)' }}>
                <Loader2 className="animate-spin" style={{ width: '24px', height: '24px' }} />
              </div>
            ) : myContributions.length === 0 ? (
              <div className="text-center" style={{ padding: 'var(--space-6)' }}>
                <Database style={{ width: '48px', height: '48px', margin: '0 auto var(--space-3)', opacity: '0.3' }} />
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  You haven't contributed any data yet.
                </p>
                <button 
                  onClick={() => setActiveTab('contributions')}
                  className="btn btn-primary"
                  style={{ marginTop: 'var(--space-2)' }}
                >
                  <Plus style={{ width: '16px', height: '16px' }} /> Make a Contribution
                </button>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {myContributions.map((item) => (
                  <div key={item.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-border)' }}>
                    <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                          {item.university} — {item.course}
                        </div>
                        <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                          <span>📅 {item.year}</span>
                          <span>🎯 {item.cutoff}</span>
                          <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.examType || 'jamb'}</span>
                        </div>
                        {item.source && (
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                            📎 {item.source}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className={`badge ${item.status === 'approved' ? 'badge-success' : item.status === 'rejected' ? 'badge-danger' : 'badge-warning'}`}>
                          {item.status === 'pending' ? '⏳ Pending' : 
                           item.status === 'approved' ? '✅ Approved' : '❌ Rejected'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)', justifyContent: 'center' }}>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn btn-outline"
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back to Dashboard
          </button>
          <button 
            onClick={() => navigate('/cutoff-tracker')}
            className="btn btn-primary"
          >
            View Cut-off Tracker
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeedbackContributionsPage
