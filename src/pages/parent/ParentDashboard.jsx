// ============================================================
// HYELEARNER: FOUNDATION — PARENT DASHBOARD
// Read-only view of the child's progress
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  Flame,
  Target,
  BookOpen,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Award,
  Swords,
  Calendar,
  Activity,
  LogOut,
  Loader2,
  AlertCircle,
  Circle,
} from 'lucide-react'
import { parent as parentService } from '../../services'

// ============================================================
// HELPERS
// ============================================================
function timeAgo(iso) {
  if (!iso) return 'No activity yet'
  const then = new Date(iso).getTime()
  const now = Date.now()
  const diff = Math.max(0, now - then)
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  const weeks = Math.floor(days / 7)
  return `${weeks}w ago`
}

function readinessLevel(value) {
  if (value >= 70) return 'strong'
  if (value >= 50) return 'average'
  return 'weak'
}

function readinessColor(level) {
  if (level === 'strong') return 'var(--color-success)'
  if (level === 'average') return 'var(--color-warning)'
  return 'var(--color-danger)'
}

// ============================================================
// MAIN
// ============================================================
export default function ParentDashboard() {
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const code = typeof window !== 'undefined'
    ? localStorage.getItem('hyelearner_parent_code')
    : null

  useEffect(() => {
    if (!code) {
      navigate('/parent/login', { replace: true })
      return
    }

    let cancelled = false

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await parentService.view(code)
        if (cancelled) return
        if (!res?.success || !res?.student) {
          throw new Error('Failed to load data')
        }
        setStudent(res.student)
      } catch (err) {
        if (cancelled) return
        const msg =
          err?.response?.data?.detail ||
          err?.message ||
          'Failed to load data'
        setError(msg)
        if (msg.toLowerCase().includes('invalid')) {
          localStorage.removeItem('hyelearner_parent_code')
          navigate('/parent/login', { replace: true })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [code, navigate])

  const handleLogout = () => {
    localStorage.removeItem('hyelearner_parent_code')
    navigate('/', { replace: true })
  }

  if (loading) {
    return (
      <div style={s.centered}>
        <Loader2 size={28} className="animate-spin" color="var(--color-primary)" />
      </div>
    )
  }

  if (error || !student) {
    return (
      <div style={s.centered}>
        <div style={s.errorCard}>
          <AlertCircle size={32} color="var(--color-danger)" />
          <div style={s.errorTitle}>Unable to load</div>
          <div style={s.errorBody}>{error || 'Something went wrong'}</div>
          <button onClick={handleLogout} style={s.errorBtn}>
            Back to landing
          </button>
        </div>
      </div>
    )
  }

  const hasAttention = [
    student.weak_subjects?.length > 0,
    student.unresolved_mistakes > 0,
    !student.has_studied_today,
  ].filter(Boolean).length

  return (
    <div style={s.page}>
      {/* ============================================== */}
      {/* HEADER */}
      {/* ============================================== */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={s.headerBrand}>
            <div style={s.headerIconCircle}>
              <Users size={18} color="var(--color-success)" />
            </div>
            <div>
              <div style={s.headerEyebrow}>PARENT VIEW</div>
              <div style={s.headerTitle}>{student.name}</div>
            </div>
          </div>

          <button onClick={handleLogout} style={s.logout}>
            <LogOut size={14} />
            <span>Exit</span>
          </button>
        </div>
      </header>

      <main style={s.main}>
        {/* ============================================== */}
        {/* IDENTITY STRIP */}
        {/* ============================================== */}
        <section style={s.identityStrip}>
          <div style={s.identityLeft}>
            <div style={s.studentName}>{student.name}</div>
            <div style={s.studentMeta}>
              {student.school && <span>{student.school}</span>}
              {student.school && student.exam && <span style={s.dotSep}>·</span>}
              {student.exam && <span>{student.exam.toUpperCase()}</span>}
            </div>
          </div>

          <div style={s.statusPill}>
            <Circle
              size={8}
              fill={student.is_online ? 'var(--color-success)' : 'var(--color-text-muted)'}
              color={student.is_online ? 'var(--color-success)' : 'var(--color-text-muted)'}
            />
            <span style={s.statusText}>
              {student.is_online
                ? 'Online now'
                : timeAgo(student.last_activity)}
            </span>
          </div>
        </section>

        {/* ============================================== */}
        {/* TOP STATS */}
        {/* ============================================== */}
        <section style={s.statsGrid}>
          <div style={s.statCard}>
            <Flame size={18} color="var(--color-warning)" />
            <div style={s.statValue}>{student.streak}</div>
            <div style={s.statLabel}>Day streak</div>
          </div>

          <div style={s.statCard}>
            <Target size={18} color="var(--color-primary)" />
            <div style={s.statValue}>{Math.round(student.accuracy)}%</div>
            <div style={s.statLabel}>Accuracy</div>
          </div>

          <div style={s.statCard}>
            <Award size={18} color="var(--color-success)" />
            <div style={s.statValue}>{student.level}</div>
            <div style={s.statLabel}>Level</div>
          </div>
        </section>

        {/* ============================================== */}
        {/* STUDY TIME */}
        {/* ============================================== */}
        <section style={s.card}>
          <div style={s.cardHeader}>
            <Clock3 size={16} color="var(--color-primary)" />
            <span style={s.cardTitle}>Study Time</span>
          </div>

          <div style={s.timeRow}>
            <div style={s.timeCell}>
              <div style={s.timeValue}>{student.study_today}h</div>
              <div style={s.timeLabel}>Today</div>
            </div>
            <div style={s.timeDivider} />
            <div style={s.timeCell}>
              <div style={s.timeValue}>{student.study_week}h</div>
              <div style={s.timeLabel}>This week</div>
            </div>
            <div style={s.timeDivider} />
            <div style={s.timeCell}>
              <div style={s.timeValue}>{student.study_month}h</div>
              <div style={s.timeLabel}>This month</div>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* ATTENTION NEEDED */}
        {/* ============================================== */}
        {hasAttention > 0 && (
          <section style={{ ...s.card, ...s.cardWarning }}>
            <div style={s.cardHeader}>
              <AlertTriangle size={16} color="var(--color-warning)" />
              <span style={s.cardTitle}>Attention Needed</span>
            </div>

            <div style={s.alertList}>
              {student.weak_subjects?.slice(0, 3).map((subj, i) => (
                <div key={`w-${i}`} style={s.alertRow}>
                  <TrendingDown size={14} color="var(--color-danger)" />
                  <span style={s.alertText}>
                    <strong>{subj}</strong> is below passing
                  </span>
                </div>
              ))}

              {student.unresolved_mistakes > 0 && (
                <div style={s.alertRow}>
                  <AlertTriangle size={14} color="var(--color-warning)" />
                  <span style={s.alertText}>
                    <strong>{student.unresolved_mistakes}</strong> unresolved mistake{student.unresolved_mistakes === 1 ? '' : 's'}
                  </span>
                </div>
              )}

              {!student.has_studied_today && (
                <div style={s.alertRow}>
                  <Clock3 size={14} color="var(--color-text-muted)" />
                  <span style={s.alertText}>No study activity today</span>
                </div>
              )}
            </div>
          </section>
        )}

        {hasAttention === 0 && (
          <section style={{ ...s.card, ...s.cardSuccess }}>
            <div style={s.cardHeader}>
              <CheckCircle2 size={16} color="var(--color-success)" />
              <span style={s.cardTitle}>All good this week</span>
            </div>
            <div style={s.successText}>
              No weak subjects, no unresolved mistakes, and studying consistently.
            </div>
          </section>
        )}

        {/* ============================================== */}
        {/* SUBJECT READINESS */}
        {/* ============================================== */}
        {student.subjects?.length > 0 && (
          <section style={s.card}>
            <div style={s.cardHeader}>
              <BookOpen size={16} color="var(--color-primary)" />
              <span style={s.cardTitle}>Subject Readiness</span>
            </div>

            <div style={s.subjectList}>
              {student.subjects.map((subj) => {
                const level = readinessLevel(subj.readiness)
                const color = readinessColor(level)
                return (
                  <div key={subj.name} style={s.subjectRow}>
                    <div style={s.subjectLabel}>
                      <span style={s.subjectName}>{subj.name}</span>
                      <span style={{ ...s.subjectValue, color }}>
                        {Math.round(subj.readiness)}%
                      </span>
                    </div>
                    <div style={s.barTrack}>
                      <div
                        style={{
                          ...s.barFill,
                          width: `${subj.readiness}%`,
                          background: color,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ============================================== */}
        {/* RECENT ACTIVITY */}
        {/* ============================================== */}
        {student.recent_sessions?.length > 0 && (
          <section style={s.card}>
            <div style={s.cardHeader}>
              <Activity size={16} color="var(--color-primary)" />
              <span style={s.cardTitle}>Recent Activity</span>
            </div>

            <div style={s.activityList}>
              {student.recent_sessions.map((sess) => {
                const acc = Math.round(sess.accuracy || 0)
                const isGood = acc >= 70
                return (
                  <div key={sess.id} style={s.activityRow}>
                    <div style={s.activityIcon}>
                      {isGood ? (
                        <CheckCircle2 size={14} color="var(--color-success)" />
                      ) : (
                        <BookOpen size={14} color="var(--color-text-muted)" />
                      )}
                    </div>
                    <div style={s.activityBody}>
                      <div style={s.activityTitle}>
                        {sess.subject}
                        {sess.topic ? ` · ${sess.topic}` : ''}
                      </div>
                      <div style={s.activityMeta}>
                        {sess.score}/{sess.total} · {acc}%
                      </div>
                    </div>
                    <div style={s.activityTime}>
                      {timeAgo(sess.completed_at)}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ============================================== */}
        {/* ACHIEVEMENTS */}
        {/* ============================================== */}
        {(student.badges?.length > 0 || student.duel_wins > 0 || student.streak > 0) && (
          <section style={s.card}>
            <div style={s.cardHeader}>
              <Award size={16} color="var(--color-primary)" />
              <span style={s.cardTitle}>Achievements</span>
            </div>

            <div style={s.achievementRow}>
              <div style={s.achievement}>
                <Flame size={16} color="var(--color-warning)" />
                <span style={s.achievementText}>
                  {student.streak} day streak
                </span>
              </div>

              {student.badges?.length > 0 && (
                <div style={s.achievement}>
                  <Award size={16} color="var(--color-primary)" />
                  <span style={s.achievementText}>
                    {student.badges.length} badge{student.badges.length === 1 ? '' : 's'}
                  </span>
                </div>
              )}

              {student.duel_wins > 0 && (
                <div style={s.achievement}>
                  <Swords size={16} color="var(--color-success)" />
                  <span style={s.achievementText}>
                    {student.duel_wins} duel win{student.duel_wins === 1 ? '' : 's'}
                  </span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ============================================== */}
        {/* STUDY PLAN */}
        {/* ============================================== */}
        {student.study_plan && (
          <section style={s.card}>
            <div style={s.cardHeader}>
              <Calendar size={16} color="var(--color-primary)" />
              <span style={s.cardTitle}>Study Plan</span>
            </div>

            <div style={s.planRow}>
              <div style={s.planCol}>
                <div style={s.planLabel}>Exam</div>
                <div style={s.planValue}>
                  {(student.study_plan.exam_type || 'Exam').toUpperCase()}
                </div>
              </div>

              {student.study_plan.days_remaining != null && (
                <div style={s.planCol}>
                  <div style={s.planLabel}>Days remaining</div>
                  <div style={s.planValue}>{student.study_plan.days_remaining}</div>
                </div>
              )}

              <div style={s.planCol}>
                <div style={s.planLabel}>Weekly hours</div>
                <div style={s.planValue}>
                  {student.study_plan.weekly_hours_done} / {student.study_plan.weekly_hours_target}
                </div>
              </div>

              <div style={s.planCol}>
                <div style={s.planLabel}>Status</div>
                <div
                  style={{
                    ...s.planValue,
                    color: student.study_plan.on_track
                      ? 'var(--color-success)'
                      : 'var(--color-warning)',
                  }}
                >
                  {student.study_plan.on_track ? 'On track' : 'Behind'}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================== */}
        {/* SUBSCRIPTION */}
        {/* ============================================== */}
        {student.subscription && (
          <section style={s.subStrip}>
            <span style={s.subPlan}>
              {student.subscription.plan?.toString().charAt(0).toUpperCase() + student.subscription.plan?.toString().slice(1)}
            </span>
            <span style={s.subDot}>·</span>
            <span
              style={{
                ...s.subStatus,
                color: student.subscription.is_active
                  ? 'var(--color-success)'
                  : 'var(--color-text-muted)',
              }}
            >
              {student.subscription.is_active ? 'Active' : 'Inactive'}
            </span>
            {student.subscription.expires_at && (
              <>
                <span style={s.subDot}>·</span>
                <span style={s.subStatus}>
                  Renews {new Date(student.subscription.expires_at).toLocaleDateString()}
                </span>
              </>
            )}
          </section>
        )}
      </main>
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
    paddingBottom: 'var(--space-8)',
  },
  centered: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-background)',
    padding: 'var(--space-5)',
  },
  errorCard: {
    maxWidth: 380,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-8)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-3)',
  },
  errorTitle: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
  errorBody: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    lineHeight: 1.55,
  },
  errorBtn: {
    marginTop: 'var(--space-2)',
    padding: '10px 20px',
    background: 'var(--color-primary)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    cursor: 'pointer',
  },

  // HEADER
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: 'rgba(10, 10, 15, 0.72)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--color-border)',
  },
  headerInner: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '12px var(--space-5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  headerIconCircle: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'var(--color-success-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerEyebrow: {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: 'var(--color-text-muted)',
  },
  headerTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },
  logout: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 14px',
    background: 'transparent',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    fontFamily: 'inherit',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    cursor: 'pointer',
  },

  // MAIN
  main: {
    maxWidth: 720,
    margin: '0 auto',
    padding: 'var(--space-5)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
  },

  // IDENTITY
  identityStrip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-3)',
    flexWrap: 'wrap',
  },
  identityLeft: {
    minWidth: 0,
  },
  studentName: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--color-text)',
  },
  studentMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    marginTop: 4,
  },
  dotSep: {
    opacity: 0.5,
  },
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 999,
  },
  statusText: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-secondary)',
  },

  // STATS
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'var(--space-3)',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: 'var(--space-4)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
  },
  statValue: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 800,
    color: 'var(--color-text)',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
  },

  // CARD
  card: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-5)',
  },
  cardWarning: {
    borderColor: 'var(--color-warning)',
    background: 'var(--color-warning-light)',
  },
  cardSuccess: {
    borderColor: 'var(--color-success)',
    background: 'var(--color-success-light)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 'var(--space-3)',
  },
  cardTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },

  // TIME
  timeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeCell: {
    flex: 1,
    textAlign: 'center',
  },
  timeValue: {
    fontSize: 'var(--font-size-xl)',
    fontWeight: 800,
    color: 'var(--color-text)',
  },
  timeLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 4,
  },
  timeDivider: {
    width: 1,
    height: 28,
    background: 'var(--color-border)',
  },

  // ALERTS
  alertList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  alertRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-lg)',
  },
  alertText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },
  successText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.55,
  },

  // SUBJECTS
  subjectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  subjectRow: {},
  subjectLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 'var(--font-size-sm)',
    marginBottom: 6,
  },
  subjectName: {
    color: 'var(--color-text)',
    fontWeight: 500,
  },
  subjectValue: {
    fontWeight: 700,
  },
  barTrack: {
    height: 8,
    background: 'var(--color-border)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
    transition: 'width 400ms ease',
  },

  // ACTIVITY
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  activityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
  },
  activityIcon: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    background: 'var(--color-surface)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  activityBody: {
    flex: 1,
    minWidth: 0,
  },
  activityTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 600,
    color: 'var(--color-text)',
  },
  activityMeta: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginTop: 2,
  },
  activityTime: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    flexShrink: 0,
  },

  // ACHIEVEMENTS
  achievementRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  achievement: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 12px',
    background: 'var(--color-background)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--color-border)',
  },
  achievementText: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
  },

  // PLAN
  planRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 'var(--space-3)',
  },
  planCol: {},
  planLabel: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    marginBottom: 4,
  },
  planValue: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
    color: 'var(--color-text)',
  },

  // SUBSCRIPTION STRIP
  subStrip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '12px',
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
  },
  subPlan: {
    color: 'var(--color-text)',
    fontWeight: 600,
  },
  subDot: {
    opacity: 0.5,
  },
  subStatus: {},
}
