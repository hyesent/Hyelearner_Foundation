// ============================================================
// HYELEARNER: FOUNDATION — UTILITIES
// All helper functions — score, XP, levels, streaks, formatting, validation, PDF, etc.
// Built by Hyesent.dev
// ============================================================

import { AI_LIMITS } from './constants'

// ============================================================
// SCORE CALCULATIONS
// ============================================================

/**
 * Calculate score from questions and answers
 * @param {Array} questions - Array of question objects (with 'answer' field for correct answer)
 * @param {Object} answers - Object mapping questionId -> userAnswer
 * @returns {Object} { score, total, correct, wrong, skipped, accuracy }
 */
export function calculateScore(questions, answers) {
  let correct = 0
  let wrong = 0
  let skipped = 0

  questions.forEach((q) => {
    const userAnswer = answers[q.id]
    if (!userAnswer || userAnswer === '') {
      skipped++
    } else if (userAnswer === q.answer) {
      correct++
    } else {
      wrong++
    }
  })

  const total = questions.length
  const score = correct
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  return {
    score,
    total,
    correct,
    wrong,
    skipped,
    accuracy,
    percentage: accuracy,
  }
}

// ============================================================
// AI USAGE TRACKING (NEW)
// ============================================================

const USAGE_DAILY_KEY = 'hyelearner_ai_usage'
const USAGE_MONTHLY_KEY = 'hyelearner_ai_usage_monthly'

/**
 * Get today's date string
 * @returns {string} YYYY-MM-DD
 */
const getToday = () => new Date().toISOString().split('T')[0]

/**
 * Get current month string
 * @returns {string} YYYY-MM
 */
const getCurrentMonth = () => getToday().slice(0, 7)

/**
 * Load daily AI usage from localStorage
 * @returns {Object} { date, count }
 */
export function getDailyAIUsage() {
  try {
    const saved = localStorage.getItem(USAGE_DAILY_KEY)
    if (!saved) return { date: getToday(), count: 0 }
    
    const data = JSON.parse(saved)
    if (data.date !== getToday()) {
      return { date: getToday(), count: 0 }
    }
    return data
  } catch {
    return { date: getToday(), count: 0 }
  }
}

/**
 * Load monthly AI usage from localStorage
 * @returns {Object} { month, count }
 */
export function getMonthlyAIUsage() {
  try {
    const saved = localStorage.getItem(USAGE_MONTHLY_KEY)
    if (!saved) return { month: getCurrentMonth(), count: 0 }
    
    const data = JSON.parse(saved)
    if (data.month !== getCurrentMonth()) {
      return { month: getCurrentMonth(), count: 0 }
    }
    return data
  } catch {
    return { month: getCurrentMonth(), count: 0 }
  }
}

/**
 * Track AI usage — call this every time an AI feature is used
 * @returns {Object} { daily, monthly, remaining, limitReached }
 */
export function trackAIUsage() {
  // --- DAILY ---
  const daily = getDailyAIUsage()
  daily.count += 1
  localStorage.setItem(USAGE_DAILY_KEY, JSON.stringify(daily))

  // --- MONTHLY ---
  const monthly = getMonthlyAIUsage()
  monthly.count += 1
  localStorage.setItem(USAGE_MONTHLY_KEY, JSON.stringify(monthly))

  // Dispatch event for real-time UI updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ai:usage-updated', { 
      detail: { daily: daily.count, monthly: monthly.count }
    }))
  }

  const remaining = AI_LIMITS.daily - daily.count
  return { 
    daily: daily.count, 
    monthly: monthly.count, 
    remaining: Math.max(0, remaining),
    limitReached: remaining <= 0
  }
}

/**
 * Check if AI limit is reached
 * @returns {boolean} True if daily limit reached
 */
export function isAILimitReached() {
  const daily = getDailyAIUsage()
  return daily.count >= AI_LIMITS.daily
}

/**
 * Get current AI usage stats
 * @returns {Object} { daily, monthly, dailyLimit, monthlyLimit, remaining, limitReached }
 */
export function getAIUsageStats() {
  const daily = getDailyAIUsage()
  const monthly = getMonthlyAIUsage()
  return {
    daily: daily.count,
    monthly: monthly.count,
    dailyLimit: AI_LIMITS.daily,
    monthlyLimit: AI_LIMITS.monthly,
    remaining: Math.max(0, AI_LIMITS.daily - daily.count),
    limitReached: daily.count >= AI_LIMITS.daily
  }
}

/**
 * Reset AI usage (for testing only)
 */
export function resetAIUsage() {
  localStorage.removeItem(USAGE_DAILY_KEY)
  localStorage.removeItem(USAGE_MONTHLY_KEY)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ai:usage-updated', { 
      detail: { daily: 0, monthly: 0 }
    }))
  }
}

// ============================================================
// QUESTION HELPER FUNCTIONS
// ============================================================

/**
 * Get the difficulty distribution of a question set
 * @param {Array} questions - Array of question objects
 * @returns {Object} { easy: count, medium: count, hard: count }
 */
export function getDifficultyBreakdown(questions) {
  const breakdown = { easy: 0, medium: 0, hard: 0 }
  questions.forEach((q) => {
    if (breakdown.hasOwnProperty(q.difficulty)) {
      breakdown[q.difficulty]++
    }
  })
  return breakdown
}

/**
 * Get the topic distribution of a question set
 * @param {Array} questions - Array of question objects
 * @returns {Object} { topicName: count, ... }
 */
export function getTopicBreakdown(questions) {
  const breakdown = {}
  questions.forEach((q) => {
    const topic = q.topic || 'General'
    breakdown[topic] = (breakdown[topic] || 0) + 1
  })
  return breakdown
}

/**
 * Filter questions by difficulty
 * @param {Array} questions - Array of question objects
 * @param {string|string[]} difficulties - 'easy', 'medium', 'hard' or array
 * @returns {Array} Filtered questions
 */
export function filterByDifficulty(questions, difficulties) {
  const diffList = Array.isArray(difficulties) ? difficulties : [difficulties]
  return questions.filter((q) => diffList.includes(q.difficulty))
}

/**
 * Filter questions by topic
 * @param {Array} questions - Array of question objects
 * @param {string|string[]} topics - Topic name(s)
 * @returns {Array} Filtered questions
 */
export function filterByTopic(questions, topics) {
  const topicList = Array.isArray(topics) ? topics : [topics]
  return questions.filter((q) => topicList.includes(q.topic))
}

/**
 * Get all unique topics from a question set
 * @param {Array} questions - Array of question objects
 * @returns {string[]} Array of unique topic names
 */
export function getUniqueTopics(questions) {
  return [...new Set(questions.map((q) => q.topic).filter(Boolean))]
}

/**
 * Get all unique subjects from a question set
 * @param {Array} questions - Array of question objects
 * @returns {string[]} Array of unique subject names
 */
export function getUniqueSubjects(questions) {
  return [...new Set(questions.map((q) => q.subject).filter(Boolean))]
}

/**
 * Check if an answer is correct
 * @param {Object} question - Question object with 'answer' field
 * @param {string} userAnswer - User's answer
 * @returns {boolean} Is correct
 */
export function isAnswerCorrect(question, userAnswer) {
  return userAnswer === question.answer
}

/**
 * Format question ID to a readable number
 * @param {string} id - e.g., "phy_mec_001"
 * @returns {string} e.g., "Physics - Mechanics #1"
 */
export function formatQuestionId(id) {
  const parts = id.split('_')
  const subjectMap = {
    phy: 'Physics', che: 'Chemistry', bio: 'Biology',
    math: 'Mathematics', eng: 'English',
  }
  const subject = subjectMap[parts[0]] || parts[0]
  const topic = parts[1] || ''
  const num = parts[parts.length - 1] || ''
  return `${subject} - ${topic} #${parseInt(num)}`
}

// ============================================================
// XP & LEVELS
// ============================================================

/**
 * Calculate XP earned from a session
 * @param {Object} scoreData - Result from calculateScore()
 * @param {number} timeBonus - Optional time bonus (seconds saved)
 * @returns {number} XP earned
 */
export function calculateXP(scoreData, timeBonus = 0) {
  const { correct, wrong, accuracy } = scoreData

  let xp = 0
  xp += correct * 10        // 10 XP per correct answer
  xp += wrong * 2           // 2 XP for attempting (even if wrong)
  // skipped = 0 XP (no attempt)

  // Accuracy bonus
  if (accuracy >= 90) xp += 50
  else if (accuracy >= 70) xp += 25
  else if (accuracy >= 50) xp += 10

  // Speed bonus (if timeBonus is provided)
  if (timeBonus > 0) {
    const bonus = Math.floor(timeBonus / 10) // 1 XP per 10 seconds saved
    xp += Math.min(bonus, 20) // Cap at 20 XP
  }

  return xp
}

/**
 * Calculate level from XP
 * @param {number} xp - Total XP
 * @returns {number} Level
 */
export function getLevel(xp) {
  const thresholds = [
    0, 100, 250, 500, 1000, 2000, 3500, 5000,
    7500, 10000, 15000, 20000, 30000, 50000
  ]
  let level = 1
  for (let i = 0; i < thresholds.length; i++) {
    if (xp >= thresholds[i]) {
      level = i + 1
    }
  }
  return level
}

/**
 * Get XP needed for next level
 * @param {number} xp - Current XP
 * @returns {number} XP needed to reach next level
 */
export function getNextLevelXP(xp) {
  const thresholds = [
    0, 100, 250, 500, 1000, 2000, 3500, 5000,
    7500, 10000, 15000, 20000, 30000, 50000
  ]
  const currentLevel = getLevel(xp)
  return thresholds[currentLevel] || thresholds[thresholds.length - 1]
}

/**
 * Get XP progress to next level (0-100)
 * @param {number} xp - Current XP
 * @returns {number} Progress percentage to next level
 */
export function getLevelProgress(xp) {
  const currentLevelXP = getLevelXP(xp)
  const nextLevelXP = getNextLevelXP(xp)
  const currentXP = xp - currentLevelXP
  const neededXP = nextLevelXP - currentLevelXP
  return neededXP > 0 ? Math.round((currentXP / neededXP) * 100) : 100
}

/**
 * Get XP required for current level
 * @param {number} xp - Current XP
 * @returns {number} XP at current level start
 */
export function getLevelXP(xp) {
  const thresholds = [
    0, 100, 250, 500, 1000, 2000, 3500, 5000,
    7500, 10000, 15000, 20000, 30000, 50000
  ]
  const level = getLevel(xp)
  return thresholds[level - 1] || 0
}

// ============================================================
// STREAKS
// ============================================================

/**
 * Calculate streak based on login history
 * @param {Array} dates - Array of date strings (YYYY-MM-DD)
 * @param {string} lastDate - Last login date (YYYY-MM-DD)
 * @returns {number} Current streak (0 if broken)
 */
export function calculateStreak(dates, lastDate) {
  if (!lastDate) return 0

  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  // Streak broken if last activity wasn't today or yesterday
  if (lastDate !== today && lastDate !== yesterday) {
    return 0
  }

  let streak = 1
  let currentDate = new Date(lastDate)

  // Count backwards from lastDate
  for (let i = 1; i < 365; i++) {
    currentDate.setDate(currentDate.getDate() - 1)
    const dateStr = currentDate.toISOString().split('T')[0]
    if (dates.includes(dateStr)) {
      streak++
    } else {
      break
    }
  }

  return streak
}

// ============================================================
// DATE & TIME FORMATTING
// ============================================================

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @param {string} format - 'short' | 'long' | 'relative'
 * @returns {string} Formatted date
 */
export function formatDate(date, format = 'short') {
  if (!date) return 'N/A'
  const d = new Date(date)

  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    })
  }

  if (format === 'long') {
    return d.toLocaleDateString('en-US', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    })
  }

  if (format === 'relative') {
    const now = new Date()
    const diff = now - d
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (seconds < 60) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    if (days < 30) return `${Math.floor(days / 7)}w ago`
    return formatDate(date, 'short')
  }

  return d.toLocaleDateString()
}

/**
 * Format time (seconds) to MM:SS
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time (MM:SS)
 */
export function formatTime(seconds) {
  if (!seconds || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * Format minutes to human readable
 * @param {number} minutes - Minutes
 * @returns {string} Formatted time (e.g., "2h 30m")
 */
export function formatMinutes(minutes) {
  if (!minutes || minutes === 0) return '0m'
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours === 0) return `${mins}m`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}

/**
 * Calculate days remaining until a date
 * @param {string|Date} date - Target date
 * @returns {number} Days remaining (negative if past)
 */
export function calculateDaysRemaining(date) {
  if (!date) return 0
  const target = new Date(date)
  const now = new Date()
  const diff = target - now
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

/**
 * Get greeting based on time of day
 * @returns {string} Greeting
 */
export function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

// ============================================================
// VALIDATION
// ============================================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} { valid, errors: [] }
 */
export function validatePassword(password) {
  const errors = []
  if (password.length < 6) errors.push('Password must be at least 6 characters')
  if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter')
  if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter')
  if (!/[0-9]/.test(password)) errors.push('Password must contain at least one number')
  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Validate JAMB score
 * @param {number|string} score - JAMB score
 * @returns {boolean} Is valid score (100-400)
 */
export function isValidJAMBScore(score) {
  const num = Number(score)
  return !isNaN(num) && num >= 100 && num <= 400
}

/**
 * Validate username
 * @param {string} username - Username
 * @returns {boolean} Is valid username
 */
export function isValidUsername(username) {
  return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username)
}

// ============================================================
// TEXT & SEARCH
// ============================================================

/**
 * Truncate text to a certain length
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated text
 */
export function truncate(text, length = 100) {
  if (!text) return ''
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Get word count from text
 * @param {string} text - Text to count
 * @returns {number} Word count
 */
export function getWordCount(text) {
  if (!text) return 0
  return text.trim().split(/\s+/).length
}

/**
 * Get estimated reading time in minutes
 * @param {string} text - Text to read
 * @param {number} wordsPerMinute - Reading speed (default 200)
 * @returns {number} Minutes to read
 */
export function getReadingTime(text, wordsPerMinute = 200) {
  const words = getWordCount(text)
  if (words < 1) return 0
  return Math.max(1, Math.round(words / wordsPerMinute))
}

/**
 * Simple search filter
 * @param {Array} items - Items to filter
 * @param {string} query - Search query
 * @param {Array} fields - Fields to search in
 * @returns {Array} Filtered items
 */
export function searchItems(items, query, fields) {
  if (!query || query.length < 2) return items
  const lowerQuery = query.toLowerCase()
  return items.filter((item) => {
    return fields.some((field) => {
      const value = item[field]
      if (!value) return false
      return String(value).toLowerCase().includes(lowerQuery)
    })
  })
}

// ============================================================
// RANDOM & SHUFFLE
// ============================================================

/**
 * Shuffle an array (Fisher-Yates)
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array (new array)
 */
export function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

/**
 * Get random item from array
 * @param {Array} array - Array to pick from
 * @returns {*} Random item
 */
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// ============================================================
// MASTERY & HEATMAP
// ============================================================

/**
 * Calculate mastery percentage for a topic
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total attempts
 * @returns {number} Mastery percentage (0-100)
 */
export function calculateMastery(correct, total) {
  if (!total || total === 0) return 0
  return Math.min(Math.max(Math.round((correct / total) * 100), 0), 100)
}

/**
 * Get mastery status label and color
 * @param {number} mastery - Mastery percentage (0-100)
 * @returns {Object} { label, color, bg, emoji }
 */
export function getMasteryStatus(mastery) {
  if (mastery >= 80) {
    return { label: 'Strong', color: 'text-success', bg: 'bg-success/10', emoji: '🟢' }
  }
  if (mastery >= 50) {
    return { label: 'Average', color: 'text-warning', bg: 'bg-warning/10', emoji: '🟡' }
  }
  if (mastery > 0) {
    return { label: 'Weak', color: 'text-danger', bg: 'bg-danger/10', emoji: '🔴' }
  }
  return { label: 'Not studied', color: 'text-muted-foreground', bg: 'bg-muted/10', emoji: '⚪' }
}

/**
 * Get heatmap color based on mastery
 * @param {number} mastery - Mastery percentage (0-100)
 * @returns {string} Hex color
 */
export function getHeatmapColor(mastery) {
  if (mastery >= 80) return '#22c55e'   // Green
  if (mastery >= 50) return '#f59e0b'   // Amber
  if (mastery > 0) return '#ef4444'      // Red
  return '#e2e8f0'                       // Light grey (not attempted)
}

// ============================================================
// GAMIFICATION HELPERS
// ============================================================

/**
 * Check if a badge should be unlocked
 * @param {string} badgeId - Badge ID
 * @param {Object} stats - User stats { xp, level, streak, sessions, accuracy, questions }
 * @returns {boolean} Should unlock
 */
export function checkBadgeUnlock(badgeId, stats) {
  const { xp, level, streak, sessions, accuracy, questions } = stats

  const conditions = {
    first_exam: sessions >= 1,
    first_100: questions >= 100,
    first_500: questions >= 500,
    first_1000: questions >= 1000,
    streak_7: streak >= 7,
    streak_30: streak >= 30,
    weakness_destroyer: sessions >= 10 && accuracy >= 50,
    speed_demon: sessions >= 5 && accuracy >= 80,
    topic_master: sessions >= 20 && accuracy >= 70,
    level_10: level >= 10,
    level_25: level >= 25,
    level_50: level >= 50,
    xp_5000: xp >= 5000,
    xp_10000: xp >= 10000,
  }

  return conditions[badgeId] || false
}

// ============================================================
// PDF EXPORT HELPERS
// ============================================================

/**
 * Generate PDF content for mistake book
 * @param {Array} mistakes - List of mistakes
 * @param {Object} user - User object
 * @returns {string} Plain text content (for PDF generation)
 */
export function generateMistakeBookPDF(mistakes, user) {
  const date = new Date().toISOString().split('T')[0]
  const lines = []

  lines.push('='.repeat(60))
  lines.push('                    HYELEARNER — MISTAKE BOOK')
  lines.push('='.repeat(60))
  lines.push('')
  lines.push(`User: ${user?.firstName || ''} ${user?.lastName || ''} (${user?.email || ''})`)
  lines.push(`Generated: ${date}`)
  lines.push(`Total Mistakes: ${mistakes.length}`)
  lines.push('')
  lines.push('-'.repeat(60))
  lines.push('')

  if (mistakes.length === 0) {
    lines.push('No mistakes recorded. Keep up the great work! 🎉')
  }

  mistakes.forEach((m, index) => {
    lines.push(`Q${index + 1}: ${m.question || 'Unknown question'}`)
    lines.push(`Subject: ${m.subject || 'General'}  |  Topic: ${m.topic || 'General'}`)
    lines.push(`Your answer: ${m.userAnswer || 'N/A'}`)
    lines.push(`Correct answer: ${m.answer || 'N/A'}`)

    if (m.explanation) {
      lines.push(`Explanation: ${m.explanation}`)
    }
    lines.push('')
    lines.push('-'.repeat(40))
    lines.push('')
  })

  lines.push('')
  lines.push('='.repeat(60))
  lines.push('  Keep practicing! You got this! 💪')
  lines.push('='.repeat(60))

  return lines.join('\n')
}

/**
 * Generate PDF content for revision planner
 * @param {Object} plan - Planner object
 * @param {Object} user - User object
 * @returns {string} Plain text content
 */
export function generatePlannerPDF(plan, user) {
  const date = new Date().toISOString().split('T')[0]
  const lines = []

  lines.push('='.repeat(60))
  lines.push('                    HYELEARNER — REVISION PLANNER')
  lines.push('='.repeat(60))
  lines.push('')
  lines.push(`User: ${user?.firstName || ''} ${user?.lastName || ''}`)
  lines.push(`Generated: ${date}`)
  lines.push(`Exam Date: ${plan?.examDate || 'Not set'}`)
  lines.push(`Days Remaining: ${plan?.daysRemaining || 0}`)
  lines.push(`Daily Hours: ${plan?.dailyHours || 0}h`)
  lines.push('')
  lines.push('-'.repeat(60))
  lines.push('')

  if (plan?.schedule) {
    plan.schedule.forEach((day) => {
      lines.push(`\n${day.day}:`)
      day.topics.forEach((topic) => {
        lines.push(`  • ${topic.name} — ${topic.hours}h`)
      })
    })
  }

  lines.push('')
  lines.push('='.repeat(60))
  lines.push('  Stay consistent! You got this! 💪')
  lines.push('='.repeat(60))

  return lines.join('\n')
}

// ============================================================
// EXPORT ALL
// ============================================================

export default {
  // AI Usage
  getDailyAIUsage,
  getMonthlyAIUsage,
  trackAIUsage,
  isAILimitReached,
  getAIUsageStats,
  resetAIUsage,

  // Score
  calculateScore,
  getDifficultyBreakdown,
  getTopicBreakdown,
  filterByDifficulty,
  filterByTopic,
  getUniqueTopics,
  getUniqueSubjects,
  isAnswerCorrect,
  formatQuestionId,
  calculateXP,
  getLevel,
  getNextLevelXP,
  getLevelProgress,
  getLevelXP,

  // Streak
  calculateStreak,

  // Date & Time
  formatDate,
  formatTime,
  formatMinutes,
  calculateDaysRemaining,
  getGreeting,

  // Validation
  isValidEmail,
  validatePassword,
  isValidJAMBScore,
  isValidUsername,

  // Text
  truncate,
  getWordCount,
  getReadingTime,
  searchItems,

  // Random
  shuffleArray,
  randomItem,

  // Mastery
  calculateMastery,
  getMasteryStatus,
  getHeatmapColor,

  // Gamification
  checkBadgeUnlock,

  // PDF
  generateMistakeBookPDF,
  generatePlannerPDF,
}