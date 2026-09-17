// ============================================================
// HYELEARNER: FOUNDATION — FEEDBACK & CONTRIBUTIONS (SHOWCASE)
// Static replica. Read-only + preview-aware.
// Navigation is local: onNavigate('pageKey') — no router.
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { ViewOnly } from './ViewOnly'
import {
  ArrowLeft, Send, CheckCircle2, Loader2, AlertCircle, Users,
  Lightbulb, Bug, MessageSquare, ThumbsUp, Plus, Info, Database,
  ExternalLink, RefreshCw, Heart,
} from 'lucide-react'

// ============================================================
// STATIC DATA
// ============================================================
const UNIVERSITIES = [
  'UNILAG', 'UI', 'UNIBEN', 'FUTA', 'FUOYE', 'LASU', 'UNILORIN',
  'UNN', 'UNIBADAN', 'FUTO', 'OAU', 'ABU', 'UNIMAID', 'BUK',
  'FUNAAB', 'UNIUYO', 'DELSU', 'Other',
]

const INITIAL_CONTRIBUTIONS = [
  {
    id: 1,
    university: 'UNILAG',
    course: 'Computer Science',
    year: '2025',
    cutoff: '285',
    examType: 'jamb',
    source: 'JAMB Brochure 2025',
    status: 'approved',
    createdAt: '2026-04-15T10:00:00Z',
  },
  {
    id: 2,
    university: 'UI',
    course: 'Medicine and Surgery',
    year: '2025',
    cutoff: '320',
    examType: 'jamb',
    source: 'University Website',
    status: 'pending',
    createdAt: '2026-04-22T14:00:00Z',
  },
  {
    id: 3,
    university: 'OAU',
    course: 'Mechanical Engineering',
    year: '2024',
    cutoff: '260',
    examType: 'jamb',
    source: '',
    status: 'rejected',
    createdAt: '2026-04-10T09:30:00Z',
  },
]

const FEEDBACK_TYPES = [
  { id: 'general',     icon: MessageSquare, label: 'General' },
  { id: 'bug',         icon: Bug,           label: 'Bug Report' },
  { id: 'feature',     icon: Lightbulb,     label: 'Feature Request' },
  { id: 'improvement', icon: ThumbsUp,      label: 'Improvement' },
]

// ============================================================
// MAIN
// ============================================================
export function ShowcaseFeedback({ onNavigate }) {
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
    university: '', course: '', year: '', cutoff: '', examType: 'jamb', source: '',
  })
  const [contributing, setContributing] = useState(false)
  const [contributionSuccess, setContributionSuccess] = useState(false)
  const [contributionError, setContributionError] = useState(null)

  // My contributions
  const [myContributions, setMyContributions] = useState(INITIAL_CONTRIBUTIONS)

  // ============================================================
  // HANDLERS — demo (no backend, no storage)
  // ============================================================
  const handleFeedbackSubmit = () => {
    if (!feedbackMessage.trim()) { setError('Please write your feedback'); return }
    setSubmitting(true); setError(null)

    setTimeout(() => {
      setSuccess(true)
      setFeedbackMessage('')
      setFeedbackRating(0)
      setSubmitting(false)
      setTimeout(() => setSuccess(false), 3000)
    }, 500)
  }

  const handleContributionSubmit = () => {
    const { university, course, year, cutoff } = contributionData
    if (!university || !course || !year || !cutoff) {
      setContributionError('Please fill in all required fields')
      return
    }
    setContributing(true)
    setContributionError(null)

    setTimeout(() => {
      const newContribution = {
        id: Date.now(),
        ...contributionData,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }
      setMyContributions((prev) => [newContribution, ...prev])
      setContributionSuccess(true)
      setContributionData({ university: '', course: '', year: '', cutoff: '', examType: 'jamb', source: '' })
      setContributing(false)
      setTimeout(() => setContributionSuccess(false), 3000)
    }, 500)
  }

  const reloadContributions = () => {
    // no-op in showcase — just a tactile response
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
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <MessageSquare size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Feedback & Contributions</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Help us improve Hyelearner</p>
            </div>
          </div>
          <ViewOnly tooltip="Sign up to go back">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-ghost">
              <ArrowLeft size={16} /> Back
            </button>
          </ViewOnly>
        </div>

        {/* Tabs */}
        <div className="flex" style={{
          gap: 'var(--space-1)',
          marginBottom: 'var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto',
        }}>
          {[
            { id: 'feedback',          icon: MessageSquare, label: 'Feedback' },
            { id: 'contributions',     icon: Database,      label: 'Contributions' },
            { id: 'my-contributions',  icon: Users,         label: 'My Contributions' },
          ].map((t) => {
            const Icon = t.icon
            const active = activeTab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="flex"
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  borderBottom: active ? '2px solid var(--color-primary)' : '2px solid transparent',
                  background: 'transparent',
                  borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                  cursor: 'pointer',
                  gap: 'var(--space-2)',
                  alignItems: 'center',
                  color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontWeight: active ? 600 : 400,
                  transition: 'all var(--transition)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon size={18} />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* ============================================================
            TAB 1: FEEDBACK
        ============================================================ */}
        {activeTab === 'feedback' && (
          <div className="card" style={{ maxWidth: 560, margin: '0 auto', padding: 'var(--space-6)' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="text-center">
                <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
                  <Heart size={32} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>We Value Your Feedback</h3>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Your feedback helps us improve Hyelearner for everyone
                </p>
              </div>

              {success && (
                <div className="success-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-success)' }} />
                    <span style={{ fontWeight: 500 }}>Thank you for your feedback! 🙏</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="danger-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <AlertCircle size={20} /><span>{error}</span>
                  </div>
                </div>
              )}

              {/* Feedback Type */}
              <div>
                <label className="label">Feedback Type</label>
                <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {FEEDBACK_TYPES.map((type) => {
                    const Icon = type.icon
                    const active = feedbackType === type.id
                    return (
                      <button
                        key={type.id}
                        onClick={() => setFeedbackType(type.id)}
                        className={`btn ${active ? 'btn-primary' : 'btn-outline'}`}
                        style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
                      >
                        <Icon size={16} /> {type.label}
                      </button>
                    )
                  })}
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
                        background: 'transparent', border: 'none', cursor: 'pointer',
                        fontSize: 'var(--font-size-2xl)',
                        color: star <= feedbackRating ? 'var(--color-warning)' : 'var(--color-border)',
                        transition: 'all var(--transition)',
                      }}
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
                  rows={4}
                  placeholder="Tell us what you think... What do you like? What can we improve?"
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">Email (optional)</label>
                <input
                  type="email"
                  className="input"
                  placeholder="your@email.com"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                />
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                  We'll only use this to follow up on your feedback
                </p>
              </div>

              <ViewOnly tooltip="Sign up to send feedback">
                <button
                  onClick={handleFeedbackSubmit}
                  disabled={submitting || !feedbackMessage.trim()}
                  className="btn btn-primary flex-center"
                  style={{ width: '100%', padding: 'var(--space-3)' }}
                >
                  {submitting ? (
                    <><Loader2 className="animate-spin" size={18} /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Feedback</>
                  )}
                </button>
              </ViewOnly>
            </div>
          </div>
        )}

        {/* ============================================================
            TAB 2: CONTRIBUTIONS
        ============================================================ */}
        {activeTab === 'contributions' && (
          <div className="card" style={{ maxWidth: 560, margin: '0 auto', padding: 'var(--space-6)' }}>
            <div className="stack" style={{ gap: 'var(--space-4)' }}>
              <div className="text-center">
                <div className="flex-center" style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto var(--space-3)' }}>
                  <Database size={32} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="h3" style={{ marginBottom: 'var(--space-1)' }}>Contribute Cut-off Data</h3>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Help build the most accurate cut-off database
                </p>
              </div>

              {contributionSuccess && (
                <div className="success-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-success)' }} />
                    <span style={{ fontWeight: 500 }}>Thank you! Your contribution is pending review. 🎉</span>
                  </div>
                </div>
              )}

              {contributionError && (
                <div className="danger-card" style={{ padding: 'var(--space-3)' }}>
                  <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                    <AlertCircle size={20} /><span>{contributionError}</span>
                  </div>
                </div>
              )}

              <div className="info-card" style={{ padding: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                  <Info size={16} style={{ color: 'var(--color-primary)', marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                      All contributions are reviewed before being published. Help thousands of students find accurate cut-off information.
                    </p>
                    <ViewOnly tooltip="Sign up to open external links">
                      <button
                        className="btn btn-ghost"
                        style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)', marginTop: 'var(--space-1)' }}
                      >
                        <ExternalLink size={14} /> Check JAMB Portal
                      </button>
                    </ViewOnly>
                  </div>
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>University *</label>
                  <select
                    className="select"
                    value={contributionData.university}
                    onChange={(e) => setContributionData((p) => ({ ...p, university: e.target.value }))}
                  >
                    <option value="">Select</option>
                    {UNIVERSITIES.map((u) => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Course *</label>
                  <input
                    type="text" className="input" placeholder="e.g., Computer Science"
                    value={contributionData.course}
                    onChange={(e) => setContributionData((p) => ({ ...p, course: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Year *</label>
                  <input
                    type="number" className="input" placeholder="e.g., 2025"
                    value={contributionData.year}
                    onChange={(e) => setContributionData((p) => ({ ...p, year: e.target.value }))}
                    min="2000" max="2026"
                  />
                </div>
                <div>
                  <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Cut-off Score *</label>
                  <input
                    type="number" className="input" placeholder="e.g., 280"
                    value={contributionData.cutoff}
                    onChange={(e) => setContributionData((p) => ({ ...p, cutoff: e.target.value }))}
                    min="100" max="400"
                  />
                </div>
              </div>

              <div>
                <label className="label" style={{ fontSize: 'var(--font-size-xs)' }}>Exam Type</label>
                <select
                  className="select"
                  value={contributionData.examType}
                  onChange={(e) => setContributionData((p) => ({ ...p, examType: e.target.value }))}
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
                  type="text" className="input"
                  placeholder="e.g., JAMB Brochure 2025, University Website"
                  value={contributionData.source}
                  onChange={(e) => setContributionData((p) => ({ ...p, source: e.target.value }))}
                />
              </div>

              <ViewOnly tooltip="Sign up to submit contributions">
                <button
                  onClick={handleContributionSubmit}
                  disabled={
                    contributing ||
                    !contributionData.university ||
                    !contributionData.course ||
                    !contributionData.year ||
                    !contributionData.cutoff
                  }
                  className="btn btn-primary flex-center"
                  style={{ width: '100%', padding: 'var(--space-3)' }}
                >
                  {contributing ? (
                    <><Loader2 className="animate-spin" size={18} /> Submitting...</>
                  ) : (
                    <><Send size={18} /> Submit Contribution</>
                  )}
                </button>
              </ViewOnly>
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
                <Users size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 style={{ margin: 0 }}>My Contributions</h3>
                <span className="badge badge-muted">{myContributions.length}</span>
              </div>
              <button onClick={reloadContributions} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
                <RefreshCw size={16} />
              </button>
            </div>

            {myContributions.length === 0 ? (
              <div className="text-center" style={{ padding: 'var(--space-6)' }}>
                <Database size={48} style={{ margin: '0 auto var(--space-3)', opacity: 0.3 }} />
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  You haven't contributed any data yet.
                </p>
                <ViewOnly tooltip="Sign up to contribute">
                  <button onClick={() => setActiveTab('contributions')} className="btn btn-primary" style={{ marginTop: 'var(--space-2)' }}>
                    <Plus size={16} /> Make a Contribution
                  </button>
                </ViewOnly>
              </div>
            ) : (
              <div className="stack" style={{ gap: 'var(--space-3)' }}>
                {myContributions.map((item) => (
                  <div key={item.id} className="card" style={{ padding: 'var(--space-3)', border: '1px solid var(--color-border)' }}>
                    <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                          {item.university} — {item.course}
                        </div>
                        <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                          <span>📅 {item.year}</span>
                          <span>🎯 {item.cutoff}</span>
                          <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>{item.examType || 'jamb'}</span>
                        </div>
                        {item.source && (
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                            📎 {item.source}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className={`badge ${item.status === 'approved' ? 'badge-success' : item.status === 'rejected' ? 'badge-danger' : 'badge-warning'}`}>
                          {item.status === 'pending' ? '⏳ Pending'
                            : item.status === 'approved' ? '✅ Approved'
                            : '❌ Rejected'}
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
        <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <ViewOnly tooltip="Sign up to go back to dashboard">
            <button onClick={() => onNavigate?.('dashboard')} className="btn btn-outline">
              <ArrowLeft size={16} /> Back to Dashboard
            </button>
          </ViewOnly>
          <ViewOnly tooltip="Sign up to open Cut-off Tracker">
            <button onClick={() => onNavigate?.('cutoffTracker')} className="btn btn-primary">
              View Cut-off Tracker
            </button>
          </ViewOnly>
        </div>
      </div>
    </div>
  )
}
