// ============================================================
// STUDY REMINDER COMPONENT — FULLY UPGRADED
// Smart, context-aware, and functional
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Bell, BellOff, Clock, Zap, Target, Calendar, X, Users, Swords,
  Brain, BookOpen, Flame, Award, TrendingUp, AlertCircle, CheckCircle2,
  Coffee, Moon, Sun, MessageCircle, Gift, Crown, Loader2
} from 'lucide-react'
import { storage } from '../storage'

// ============================================================
// CONSTANTS
// ============================================================

const REMINDER_PRIORITY = {
  critical: 100,
  streak: 95,
  exam: 92,
  weak_topics: 90,
  social: 85,
  duel: 80,
  study_plan: 70,
  achievement: 65,
  tip: 55,
  default: 50,
}

const REMINDER_INTERVAL = 60000 // 1 minute
const SNOOZE_DURATION = 30 * 60000 // 30 minutes

// ============================================================
// STUDY REMINDER — MAIN COMPONENT
// ============================================================

export function StudyReminder({ onClose, onSnooze }) {
  const navigate = useNavigate()
  const [reminder, setReminder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [permissionGranted, setPermissionGranted] = useState(false)
  const [activeReminders, setActiveReminders] = useState([])
  const [reminderIndex, setReminderIndex] = useState(0)
  const intervalRef = useRef(null)

  // ============================================================
  // CHECK SNOOZE
  // ============================================================

  const isSnoozed = useCallback(() => {
    const snoozeUntil = localStorage.getItem('hyelearner_snooze_until')
    if (snoozeUntil) {
      const snoozeTime = new Date(snoozeUntil)
      if (snoozeTime > new Date()) {
        return true
      } else {
        localStorage.removeItem('hyelearner_snooze_until')
      }
    }
    return false
  }, [])

  // ============================================================
  // GET WEEK NUMBER
  // ============================================================

  const getWeekNumber = () => {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const diff = now - startOfYear
    return Math.ceil((diff / 86400000 + startOfYear.getDay() + 1) / 7)
  }

  // ============================================================
  // CHECK REMINDERS — ENHANCED
  // ============================================================

  const checkReminders = useCallback(() => {
    setLoading(true)
    try {
      // Skip if snoozed
      if (isSnoozed()) {
        setReminder(null)
        setActiveReminders([])
        setLoading(false)
        return
      }

      const settings = storage.getSettings()
      const gamification = storage.getGamification()
      const planner = storage.getPlanner()
      const mastery = storage.getMastery()
      const sessions = storage.getSessions()
      const mistakes = storage.getMistakes()
      const bookmarks = storage.getBookmarks()
      
      const today = new Date().toISOString().split('T')[0]
      const now = new Date()
      const hour = now.getHours()
      const dayOfWeek = now.getDay() // 0 = Sunday

      // Check if study reminders are enabled
      if (!settings.studyReminders) {
        setReminder(null)
        setActiveReminders([])
        setLoading(false)
        return
      }

      // Check if already reminded today
      const lastReminder = localStorage.getItem('hyelearner_last_reminder')
      if (lastReminder === today) {
        setReminder(null)
        setActiveReminders([])
        setLoading(false)
        return
      }

      // ============================================================
      // BUILD REMINDERS LIST
      // ============================================================

      let reminders = []

      // 1. EXAM COUNTDOWN (Priority: 92)
      const examDays = planner?.examDate ? Math.ceil((new Date(planner.examDate) - now) / 86400000) : null
      if (examDays !== null && examDays <= 30 && examDays > 0) {
        const urgency = examDays <= 7 ? '🔥 CRITICAL' : examDays <= 14 ? '⚡ URGENT' : '📌 Important'
        reminders.push({
          id: 'exam',
          priority: REMINDER_PRIORITY.exam,
          message: `${urgency} ${examDays} days until your exam! Time to focus.`,
          type: examDays <= 7 ? 'critical' : 'warning',
          icon: <AlertCircle style={{ width: '20px', height: '20px', color: examDays <= 7 ? 'var(--color-danger)' : 'var(--color-warning)' }} />,
          action: { label: 'View Plan', route: '/revision-planner' }
        })
      }

      // 2. STREAK REMINDER (Priority: 95)
      if (gamification.streak === 0) {
        reminders.push({
          id: 'streak',
          priority: REMINDER_PRIORITY.streak,
          message: "🔥 You haven't studied today. Keep your streak alive!",
          type: 'warning',
          icon: <Zap style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
          action: { label: 'Start Studying', route: '/practice' }
        })
      } else if (gamification.streak === 7) {
        reminders.push({
          id: 'streak_milestone',
          priority: REMINDER_PRIORITY.achievement,
          message: "🎉 7-day streak! You're on fire! Keep going!",
          type: 'success',
          icon: <Flame style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
          action: { label: 'Keep Going', route: '/dashboard' }
        })
      } else if (gamification.streak === 30) {
        reminders.push({
          id: 'streak_milestone_30',
          priority: REMINDER_PRIORITY.achievement,
          message: "🏆 30-day streak! You're a study machine!",
          type: 'success',
          icon: <Award style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />,
          action: { label: 'View Badges', route: '/gamification' }
        })
      }

      // 3. WEAK TOPICS (Priority: 90)
      const weakTopics = Object.entries(mastery)
        .filter(([_, data]) => data.accuracy < 50)
        .sort((a, b) => a[1].accuracy - b[1].accuracy)
      
      if (weakTopics.length > 0) {
        const worstTopic = weakTopics[0]
        reminders.push({
          id: 'weak_topics',
          priority: REMINDER_PRIORITY.weak_topics,
          message: `🧠 Your weakest topic is "${worstTopic[0]}" (${worstTopic[1].accuracy}%). Review it now!`,
          type: 'warning',
          icon: <Target style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />,
          action: { label: 'View Weak Topics', route: '/weakness' }
        })
      }

      // 4. MISTAKE BOOK REVIEW (Priority: 75)
      const unresolvedMistakes = mistakes.filter(m => !m.isResolved)
      if (unresolvedMistakes.length >= 3) {
        reminders.push({
          id: 'mistakes',
          priority: 75,
          message: `📝 You have ${unresolvedMistakes.length} unresolved mistakes. Review them!`,
          type: 'info',
          icon: <BookOpen style={{ width: '20px', height: '20px', color: 'var(--color-info)' }} />,
          action: { label: 'Review Mistakes', route: '/mistake-book' }
        })
      }

      // 5. SOCIAL: FRIEND ACTIVITY (Priority: 85)
      try {
        const friends = storage.getFriends ? storage.getFriends() : []
        if (friends.length > 0) {
          const activeFriends = friends.filter(f => f.isOnline || (f.streak || 0) > 3)
          if (activeFriends.length > 0) {
            const friend = activeFriends[0]
            reminders.push({
              id: 'social',
              priority: REMINDER_PRIORITY.social,
              message: `👥 ${friend.username || 'A friend'} ${friend.isOnline ? 'is online now' : `has a ${friend.streak}-day streak`}! Join them?`,
              type: 'info',
              icon: <Users style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />,
              action: { label: 'View Friends', route: '/social' }
            })
          }
        }
      } catch (e) {}

      // 6. DUEL REMINDER (Priority: 80)
      try {
        const duels = storage.getDuels ? storage.getDuels() : []
        const pendingDuels = duels.filter(d => d.status === 'pending' || d.status === 'invited')
        if (pendingDuels.length > 0) {
          reminders.push({
            id: 'duel',
            priority: REMINDER_PRIORITY.duel,
            message: `⚔️ ${pendingDuels.length} pending duel${pendingDuels.length > 1 ? 's' : ''}! Don't keep them waiting.`,
            type: 'warning',
            icon: <Swords style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
            action: { label: 'View Duels', route: '/duo-battle' }
          })
        }
      } catch (e) {}

      // 7. STUDY PLAN (Priority: 70)
      if (planner?.schedule) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const todayPlan = planner.schedule.find(day => day.day === dayNames[dayOfWeek])
        if (todayPlan && todayPlan.topics?.length > 0) {
          const topics = todayPlan.topics.map(t => t.name || t).join(', ')
          reminders.push({
            id: 'study_plan',
            priority: REMINDER_PRIORITY.study_plan,
            message: `📚 Today's plan: ${topics}`,
            type: 'info',
            icon: <Calendar style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />,
            action: { label: 'View Plan', route: '/revision-planner' }
          })
        }
      }

      // 8. TIME-BASED REMINDERS
      if (hour >= 6 && hour < 10) {
        reminders.push({
          id: 'morning_tip',
          priority: REMINDER_PRIORITY.tip,
          message: "🌅 Good morning! Start your day with 10 minutes of practice.",
          type: 'info',
          icon: <Sun style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
          action: { label: 'Start Practice', route: '/practice' }
        })
      } else if (hour >= 13 && hour < 15) {
        reminders.push({
          id: 'afternoon_tip',
          priority: REMINDER_PRIORITY.tip,
          message: "☕ Afternoon slump? Take a 5-min break, then get back to studying.",
          type: 'info',
          icon: <Coffee style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
          action: { label: 'Continue Studying', route: '/dashboard' }
        })
      } else if (hour >= 20 && hour < 23) {
        reminders.push({
          id: 'evening_tip',
          priority: REMINDER_PRIORITY.tip,
          message: "🌙 Evening session! Review what you learned today.",
          type: 'info',
          icon: <Moon style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />,
          action: { label: 'Review', route: '/results' }
        })
      }

      // 9. ACHIEVEMENT REMINDERS
      const totalSessions = gamification.totalSessions || 0
      if (totalSessions > 0 && totalSessions % 10 === 0) {
        reminders.push({
          id: 'achievement_sessions',
          priority: REMINDER_PRIORITY.achievement,
          message: `🎯 ${totalSessions} sessions completed! You're unstoppable!`,
          type: 'success',
          icon: <Award style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />,
          action: { label: 'View Progress', route: '/analytics' }
        })
      }

      // 10. WEEKLY GOAL CHECK (Priority: 60)
      const weekNumber = getWeekNumber()
      const weeklyGoalKey = `weekly_goal_${now.getFullYear()}_${weekNumber}`
      const weeklyProgress = JSON.parse(localStorage.getItem(weeklyGoalKey) || '{"sessions": 0, "xp": 0}')
      
      if (weeklyProgress.sessions < 3 && dayOfWeek === 6) {
        reminders.push({
          id: 'weekly_goal',
          priority: 60,
          message: "📊 You're behind on your weekly goal. Catch up this weekend!",
          type: 'warning',
          icon: <TrendingUp style={{ width: '20px', height: '20px', color: 'var(--color-warning)' }} />,
          action: { label: 'Study Now', route: '/practice' }
        })
      }

      // 11. DEFAULT
      if (reminders.length === 0) {
        const tips = [
          "📖 Time to study! Don't break your streak.",
          "💡 Remember: Consistent daily practice builds mastery.",
          "🧠 Your future self will thank you for studying today.",
          "📚 Every session brings you closer to your goal.",
          "🔥 Small steps every day lead to big results."
        ]
        reminders.push({
          id: 'default',
          priority: REMINDER_PRIORITY.default,
          message: tips[Math.floor(Math.random() * tips.length)],
          type: 'info',
          icon: <Clock style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />,
          action: { label: 'Start Studying', route: '/practice' }
        })
      }

      // Sort by priority (highest first)
      reminders.sort((a, b) => b.priority - a.priority)
      
      setActiveReminders(reminders)
      
      // Show the highest priority reminder
      if (reminders.length > 0) {
        setReminder(reminders[0])
        setReminderIndex(0)
        
        // Show desktop notification
        if (permissionGranted) {
          showDesktopNotification(reminders[0].message)
        }
      } else {
        setReminder(null)
      }

    } catch (error) {
      console.error('Failed to check reminders:', error)
      setReminder(null)
    } finally {
      setLoading(false)
    }
  }, [isSnoozed, permissionGranted])

  // ============================================================
  // DESKTOP NOTIFICATIONS
  // ============================================================

  const requestNotificationPermission = useCallback(async () => {
    if (!('Notification' in window)) return
    if (Notification.permission === 'granted') {
      setPermissionGranted(true)
    } else if (Notification.permission === 'default') {
      const result = await Notification.requestPermission()
      setPermissionGranted(result === 'granted')
    }
  }, [])

  const showDesktopNotification = (message) => {
    if (!('Notification' in window)) return
    if (Notification.permission === 'granted') {
      new Notification('🎯 Hyelearner Reminder', {
        body: message,
        icon: '/favicon.ico',
        vibrate: [200, 100, 200],
        silent: false
      })
    }
  }

  // ============================================================
  // CYCLE THROUGH REMINDERS
  // ============================================================

  const nextReminder = useCallback(() => {
    if (activeReminders.length === 0) return
    const nextIndex = (reminderIndex + 1) % activeReminders.length
    setReminderIndex(nextIndex)
    setReminder(activeReminders[nextIndex])
  }, [activeReminders, reminderIndex])

  const prevReminder = useCallback(() => {
    if (activeReminders.length === 0) return
    const prevIndex = (reminderIndex - 1 + activeReminders.length) % activeReminders.length
    setReminderIndex(prevIndex)
    setReminder(activeReminders[prevIndex])
  }, [activeReminders, reminderIndex])

  // ============================================================
  // AUTO-ROTATE REMINDERS
  // ============================================================

  useEffect(() => {
    if (activeReminders.length <= 1) return
    
    const autoRotate = setInterval(() => {
      nextReminder()
    }, 8000) // Change every 8 seconds
    
    return () => clearInterval(autoRotate)
  }, [activeReminders, nextReminder])

  // ============================================================
  // PERIODIC RE-CHECK
  // ============================================================

  useEffect(() => {
    requestNotificationPermission()
    
    // Initial check
    checkReminders()

    // Check every minute
    intervalRef.current = setInterval(() => {
      checkReminders()
    }, REMINDER_INTERVAL)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [checkReminders, requestNotificationPermission])

  // ============================================================
  // HANDLERS
  // ============================================================

  const handleDismiss = () => {
    const today = new Date().toISOString().split('T')[0]
    localStorage.setItem('hyelearner_last_reminder', today)
    setReminder(null)
    setActiveReminders([])
    if (onClose) onClose()
  }

  const handleSnooze = () => {
    const snoozeTime = new Date(Date.now() + SNOOZE_DURATION).toISOString()
    localStorage.setItem('hyelearner_snooze_until', snoozeTime)
    setReminder(null)
    if (onSnooze) onSnooze()
  }

  const handleAction = (route) => {
    handleDismiss()
    navigate(route)
  }

  // ============================================================
  // GET CARD STYLE
  // ============================================================

  const getCardStyle = (type) => {
    switch (type) {
      case 'critical':
        return {
          border: '2px solid var(--color-danger)',
          background: 'var(--color-danger-light)'
        }
      case 'warning':
        return {
          border: '2px solid var(--color-warning)',
          background: 'var(--color-warning-light)'
        }
      case 'success':
        return {
          border: '2px solid var(--color-success)',
          background: 'var(--color-success-light)'
        }
      default:
        return {
          border: '2px solid var(--color-primary)',
          background: 'var(--color-surface)'
        }
    }
  }

  // ============================================================
  // RENDER
  // ============================================================

  if (loading || !reminder) return null

  const cardStyle = getCardStyle(reminder.type)
  const hasMultiple = activeReminders.length > 1

  return (
    <div 
      className="card" 
      style={{ 
        position: 'fixed', 
        bottom: 'var(--space-6)', 
        right: 'var(--space-6)',
        maxWidth: '400px',
        minWidth: '320px',
        zIndex: 1000,
        padding: 'var(--space-4)',
        background: cardStyle.background,
        border: cardStyle.border,
        boxShadow: 'var(--shadow-xl)',
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}>
        <div style={{ marginTop: '2px', flexShrink: 0 }}>{reminder.icon}</div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', margin: 0, lineHeight: '1.5' }}>
            {reminder.message}
          </p>
          
          {/* Reminder counter */}
          {hasMultiple && (
            <div style={{ 
              fontSize: 'var(--font-size-xs)', 
              color: 'var(--color-text-muted)', 
              marginTop: 'var(--space-1)'
            }}>
              {reminderIndex + 1} of {activeReminders.length}
            </div>
          )}
          
          <div className="flex" style={{ gap: 'var(--space-2)', marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
            {reminder.action && (
              <button 
                onClick={() => handleAction(reminder.action.route)}
                className="btn btn-primary"
                style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
              >
                {reminder.action.label}
              </button>
            )}
            
            {hasMultiple && (
              <>
                <button 
                  onClick={prevReminder}
                  className="btn btn-outline"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)' }}
                >
                  ←
                </button>
                <button 
                  onClick={nextReminder}
                  className="btn btn-outline"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-2)' }}
                >
                  →
                </button>
              </>
            )}
            
            <button 
              onClick={handleSnooze}
              className="btn btn-outline"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              Snooze
            </button>
            <button 
              onClick={handleDismiss}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1)' }}
            >
              <X style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}