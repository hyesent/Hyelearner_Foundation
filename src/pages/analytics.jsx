// ============================================================
// ANALYTICS PAGE — Charts & Stats from User Data with PDF Export
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { storage } from '../storage'
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Clock,
  Zap,
  Award,
  Target,
  Flame,
  Calendar,
  Download,
  RefreshCw,
  Loader2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  BookOpen
} from 'lucide-react'
import jsPDF from 'jspdf'

export function AnalyticsPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)
  const reportRef = useRef(null)
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalQuestions: 0,
    correct: 0,
    wrong: 0,
    accuracy: 0,
    studyTime: 0,
    xp: 0,
    level: 1,
    streak: 0,
    topicsMastered: 0,
    weakTopics: 0,
    mistakes: 0,
    dailyActivity: [],
    weeklyActivity: [],
    subjectProgress: [],
  })

  useEffect(() => {
    loadAnalytics()
  }, [])

  const loadAnalytics = () => {
    setLoading(true)

    try {
      const sessions = storage.getSessions()
      const mastery = storage.getMastery()
      const mistakes = storage.getMistakes()
      const gamification = storage.getGamification()
      const results = storage.getResults()

      let totalQuestions = 0, correct = 0, wrong = 0, studyTime = 0
      const dailyMap = {}
      const weeklyMap = {}
      const subjectMap = {}
      const sessionDates = []

      const completedSessions = sessions.filter(s => s.status === 'completed')
      
      completedSessions.forEach(s => {
        totalQuestions += s.totalQuestions || s.total || 0
        correct += s.correctAnswers || s.correct || 0
        wrong += s.wrongAnswers || s.wrong || 0
        studyTime += (s.timeTaken || 0) / 60

        const date = s.completedAt ? new Date(s.completedAt).toISOString().split('T')[0] : 
                     s.createdAt ? new Date(s.createdAt).toISOString().split('T')[0] : null
        if (date) {
          dailyMap[date] = (dailyMap[date] || 0) + 1
          if (!sessionDates.includes(date)) sessionDates.push(date)
        }

        if (s.subject) {
          if (!subjectMap[s.subject]) {
            subjectMap[s.subject] = { total: 0, correct: 0 }
          }
          subjectMap[s.subject].total += s.totalQuestions || s.total || 0
          subjectMap[s.subject].correct += s.correctAnswers || s.correct || 0
        }
      })

      if (results && results.length > 0) {
        results.forEach(r => {
          if (!subjectMap[r.subject]) {
            subjectMap[r.subject] = { total: 0, correct: 0 }
          }
        })
      }

      const totalSessions = completedSessions.length
      const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0

      const today = new Date()
      const last7Days = []
      for (let i = 6; i >= 0; i--) {
        const d = new Date(today)
        d.setDate(d.getDate() - i)
        const dateStr = d.toISOString().split('T')[0]
        last7Days.push(dateStr)
      }

      const dailyActivity = last7Days.map(date => ({
        date,
        count: dailyMap[date] || 0
      }))

      const weeklyLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      const weeklyActivity = weeklyLabels.map((label, index) => {
        const weekStart = new Date(today)
        weekStart.setDate(today.getDate() - (7 * (3 - index) + today.getDay()))
        const weekEnd = new Date(weekStart)
        weekEnd.setDate(weekStart.getDate() + 7)
        
        let count = 0
        completedSessions.forEach(s => {
          const sDate = s.completedAt ? new Date(s.completedAt) : 
                        s.createdAt ? new Date(s.createdAt) : null
          if (sDate && sDate >= weekStart && sDate < weekEnd) {
            count++
          }
        })
        return { label, count }
      })

      const subjectProgress = Object.entries(subjectMap).map(([subject, data]) => ({
        subject,
        accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
        total: data.total,
        correct: data.correct,
      }))

      const masteryValues = Object.values(mastery).map(m => m.accuracy || 0)
      const topicsMastered = masteryValues.filter(v => v >= 80).length
      const weakTopics = masteryValues.filter(v => v > 0 && v < 50).length

      setStats({
        totalSessions,
        totalQuestions,
        correct,
        wrong,
        accuracy,
        studyTime: Math.round(studyTime),
        xp: gamification.xp || 0,
        level: gamification.level || 1,
        streak: gamification.streak || 0,
        topicsMastered,
        weakTopics,
        mistakes: mistakes.length,
        dailyActivity,
        weeklyActivity,
        subjectProgress,
      })
    } catch (error) {
      console.error('Failed to load analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        loadAnalytics()
      }, 30000)
      return () => clearInterval(interval)
    }
  }, [loading])

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const handleExportPDF = async () => {
    setExporting(true)
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      let y = margin

      const checkPageBreak = (neededSpace) => {
        if (y + neededSpace > pageHeight - margin) {
          doc.addPage()
          y = margin
        }
      }

      doc.setFontSize(20)
      doc.setTextColor(79, 70, 229)
      doc.text('Hyelearner — Analytics Report', pageWidth / 2, y, { align: 'center' })
      y += 12

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      const dateStr = new Date().toISOString().slice(0, 10)
      doc.text(`Generated: ${dateStr}`, pageWidth / 2, y, { align: 'center' })
      y += 8
      doc.text(`User: ${user?.firstName || ''} ${user?.lastName || ''} (${user?.email || ''})`, pageWidth / 2, y, { align: 'center' })
      y += 12

      doc.setDrawColor(200, 200, 200)
      doc.line(margin, y, pageWidth - margin, y)
      y += 10

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)

      const statsData = [
        { label: 'Sessions', value: stats.totalSessions },
        { label: 'Accuracy', value: `${stats.accuracy}%` },
        { label: 'Study Time', value: formatTime(stats.studyTime) },
        { label: 'Total XP', value: stats.xp },
      ]

      const colWidth = (pageWidth - 2 * margin) / 4
      statsData.forEach((stat, i) => {
        const x = margin + i * colWidth
        checkPageBreak(20)
        doc.setFontSize(14)
        doc.setTextColor(79, 70, 229)
        doc.text(String(stat.value), x + colWidth / 2, y, { align: 'center' })
        y += 6
        doc.setFontSize(9)
        doc.setTextColor(100, 100, 100)
        doc.text(stat.label, x + colWidth / 2, y, { align: 'center' })
        y += 8
      })
      y += 6

      doc.line(margin, y, pageWidth - margin, y)
      y += 10

      checkPageBreak(30)
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text('Questions Breakdown', margin, y)
      y += 8
      
      doc.setFontSize(10)
      doc.setTextColor(50, 50, 50)
      doc.text(`Total Questions: ${stats.totalQuestions}`, margin + 2, y)
      y += 7
      doc.setTextColor(34, 197, 94)
      doc.text(`Correct: ${stats.correct}`, margin + 2, y)
      y += 7
      doc.setTextColor(239, 68, 68)
      doc.text(`Wrong: ${stats.wrong}`, margin + 2, y)
      y += 10

      if (stats.subjectProgress.length > 0) {
        checkPageBreak(30)
        doc.setFontSize(12)
        doc.setTextColor(0, 0, 0)
        doc.text('Subject Progress', margin, y)
        y += 8

        stats.subjectProgress.forEach((sub) => {
          checkPageBreak(20)
          doc.setFontSize(9)
          doc.setTextColor(50, 50, 50)
          doc.text(`${sub.subject}: ${sub.accuracy}% (${sub.total} Qs)`, margin, y)
          y += 5
          const barWidth = pageWidth - 2 * margin
          const barHeight = 3
          doc.setDrawColor(200, 200, 200)
          doc.rect(margin, y, barWidth, barHeight)
          const color = sub.accuracy >= 70 ? [34, 197, 94] : sub.accuracy >= 50 ? [245, 158, 11] : [239, 68, 68]
          doc.setFillColor(color[0], color[1], color[2])
          doc.rect(margin, y, (sub.accuracy / 100) * barWidth, barHeight, 'F')
          y += 8
        })
        y += 4
      }

      checkPageBreak(30)
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text('Mastery Overview', margin, y)
      y += 8
      doc.setFontSize(9)
      doc.setTextColor(50, 50, 50)
      doc.text(`Topics Mastered (80%+): ${stats.topicsMastered}`, margin + 2, y)
      y += 7
      doc.setTextColor(239, 68, 68)
      doc.text(`Weak Topics (<50%): ${stats.weakTopics}`, margin + 2, y)
      y += 7
      doc.setTextColor(100, 100, 100)
      doc.text(`Mistakes: ${stats.mistakes}`, margin + 2, y)
      y += 10

      if (stats.dailyActivity.some(d => d.count > 0)) {
        checkPageBreak(30)
        doc.setFontSize(12)
        doc.setTextColor(0, 0, 0)
        doc.text('Activity Summary (Last 7 Days)', margin, y)
        y += 8

        const maxCount = Math.max(1, ...stats.dailyActivity.map(d => d.count))
        const barWidth = (pageWidth - 2 * margin - (stats.dailyActivity.length - 1) * 2) / stats.dailyActivity.length
        const maxBarHeight = 30

        stats.dailyActivity.forEach((day) => {
          const height = (day.count / maxCount) * maxBarHeight
          const x = margin + stats.dailyActivity.indexOf(day) * (barWidth + 2)
          doc.setFillColor(79, 70, 229)
          doc.rect(x, y + maxBarHeight - height, barWidth, height, 'F')
          doc.setFontSize(7)
          doc.setTextColor(100, 100, 100)
          const label = day.date.slice(5)
          doc.text(String(day.count), x + barWidth / 2, y + maxBarHeight + 4, { align: 'center' })
          doc.text(label, x + barWidth / 2, y + maxBarHeight + 11, { align: 'center' })
        })
        y += maxBarHeight + 18
      }

      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text('© Hyelearner — hyesent.dev', pageWidth / 2, pageHeight - 10, { align: 'center' })

      doc.save(`analytics-report-${dateStr}.pdf`)
    } catch (error) {
      console.error('PDF export failed:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <div className="spinner spinner-lg"></div>
      </div>
    )
  }

  return (
    <div ref={reportRef} style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BarChart3 style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2">Analytics</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Your study performance overview</p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button onClick={loadAnalytics} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)' }}>
              <RefreshCw style={{ width: '16px', height: '16px' }} />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
          </div>
        </div>

        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)' }}>{stats.totalSessions}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Sessions</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: stats.accuracy >= 70 ? 'var(--color-success)' : stats.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
              {stats.accuracy}%
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-warning)' }}>{stats.studyTime > 0 ? formatTime(stats.studyTime) : '0m'}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Study Time</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)' }}>{stats.xp.toLocaleString()}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Total XP</div>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Questions</div>
            <div className="h3" style={{ margin: 0 }}>{stats.totalQuestions}</div>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', fontSize: 'var(--font-size-sm)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                <CheckCircle2 style={{ width: '14px', height: '14px', display: 'inline' }} /> {stats.correct}
              </span>
              <span style={{ color: 'var(--color-danger)' }}>
                <XCircle style={{ width: '14px', height: '14px', display: 'inline' }} /> {stats.wrong}
              </span>
            </div>
          </div>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Mastery</div>
            <div className="h3" style={{ margin: 0 }}>{stats.topicsMastered}</div>
            <div className="flex" style={{ gap: 'var(--space-3)', justifyContent: 'center', fontSize: 'var(--font-size-sm)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                <CheckCircle2 style={{ width: '14px', height: '14px', display: 'inline' }} /> Mastered
              </span>
              <span style={{ color: 'var(--color-danger)' }}>
                <AlertCircle style={{ width: '14px', height: '14px', display: 'inline' }} /> {stats.weakTopics} Weak
              </span>
            </div>
          </div>
          <div className="stat-card text-center">
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Streak</div>
            <div className="h3" style={{ margin: 0, color: 'var(--color-warning)' }}>
              <Flame style={{ width: '20px', height: '20px', display: 'inline' }} /> {stats.streak}
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              <BookOpen style={{ width: '14px', height: '14px', display: 'inline' }} /> Mistakes: {stats.mistakes}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Calendar style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: '600' }}>Daily Activity (Last 7 Days)</span>
            </div>
          </div>
          {stats.dailyActivity.some(d => d.count > 0) ? (
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'space-between', alignItems: 'flex-end', height: '120px' }}>
              {stats.dailyActivity.map((day, i) => {
                const max = Math.max(1, ...stats.dailyActivity.map(d => d.count))
                const height = (day.count / max) * 100
                return (
                  <div key={i} className="flex-col" style={{ alignItems: 'center', flex: 1 }}>
                    <div className="flex-center" style={{
                      width: '100%',
                      height: `${Math.max(10, height)}px`,
                      background: 'var(--color-primary)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'height var(--transition)',
                      minHeight: '10px'
                    }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'white', fontWeight: 'bold' }}>{day.count}</span>
                    </div>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                      {day.date.slice(5)}
                    </span>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No activity data yet. Start practicing!</p>
          )}
        </div>

        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <TrendingUp style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: '600' }}>Weekly Activity</span>
            </div>
          </div>
          {stats.weeklyActivity.some(w => w.count > 0) ? (
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'space-between' }}>
              {stats.weeklyActivity.map((week, i) => (
                <div key={i} className="stat-card" style={{ flex: 1, textAlign: 'center', padding: 'var(--space-2)' }}>
                  <div className="h3" style={{ margin: 0, color: 'var(--color-primary)' }}>{week.count}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{week.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No weekly data yet.</p>
          )}
        </div>

        <div className="card">
          <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Target style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: '600' }}>Subject Progress</span>
            </div>
          </div>
          {stats.subjectProgress.length > 0 ? (
            <div className="stack" style={{ gap: 'var(--space-3)' }}>
              {stats.subjectProgress.map((sub, i) => (
                <div key={i}>
                  <div className="flex-between" style={{ fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'var(--color-text)' }}>{sub.subject}</span>
                    <span style={{ color: sub.accuracy >= 70 ? 'var(--color-success)' : sub.accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }}>
                      {sub.accuracy}% ({sub.total} Qs)
                    </span>
                  </div>
                  <div className="progress">
                    <div className={`progress-fill ${sub.accuracy >= 70 ? 'progress-fill-success' : sub.accuracy >= 50 ? 'progress-fill-warning' : 'progress-fill-danger'}`} 
                         style={{ width: `${sub.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted" style={{ textAlign: 'center' }}>No subject data yet. Complete some practice sessions.</p>
          )}
        </div>

        <div style={{ marginTop: 'var(--space-6)' }}>
          <button 
            onClick={handleExportPDF} 
            disabled={exporting}
            className="btn btn-primary flex-center" 
            style={{ width: '100%', padding: 'var(--space-3)' }}
          >
            {exporting ? (
              <><div className="spinner spinner-sm" style={{ marginRight: 'var(--space-2)' }}></div> Exporting...</>
            ) : (
              <><Download style={{ width: '16px', height: '16px' }} /> Export Report (PDF)</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
