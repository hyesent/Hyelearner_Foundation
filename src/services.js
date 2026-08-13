// ============================================================
// HYELEARNER: FOUNDATION — SERVICES (COMPLETE)
// Real API + Mock fallback with localStorage persistence
// Built by Hyesent.dev
// ============================================================

// ============================================================
// CONSTANTS
// ============================================================

import questionIndex from './data/questions/index.js'

// ✅ FIXED: USE_MOCK is true only when explicitly set to 'true'
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'
const API_BASE = import.meta.env.VITE_API_URL || 'https://hyelearner-api.onrender.com'

const MOCK_DELAYS = {
  fast: 200,
  normal: 500,
  slow: 800,
  verySlow: 1200,
}

// ============================================================
// HELPERS
// ============================================================

const delay = (ms = MOCK_DELAYS.normal) => 
  new Promise(resolve => setTimeout(resolve, ms))

const generateId = () => `mock_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const randomDate = (start, end) => {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return d.toISOString()
}

const safeJSONParse = (str, fallback = null) => {
  try { return JSON.parse(str) } catch { return fallback }
}

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// ============================================================
// REAL QUESTION LOADER (Using index) — FIXED FOR VITE
// ============================================================

const questionCache = {}

const loadRealQuestions = async (data) => {
  const { subject, topic, difficulty, count = 30, difficultyDistribution } = data
  let allQuestions = []

  try {
    // 1. Find the subject in the index
    const subjectEntry = questionIndex.find(
      entry => entry.subject === subject
    )
    if (!subjectEntry) {
      console.warn(`[Questions] Subject "${subject}" not found in index, using mock`)
      return generateMockQuestions(count, subject, topic, difficulty)
    }

    // 2. Determine which files to load
    let filesToLoad = []
    if (topic) {
      const topicEntry = subjectEntry.topics.find(t => t.name === topic)
      if (topicEntry) {
        filesToLoad = [topicEntry.file]
      } else {
        filesToLoad = subjectEntry.topics.map(t => t.file)
      }
    } else {
      filesToLoad = subjectEntry.topics.map(t => t.file)
    }

    // 3. ✅ Use glob import to load questions
    const questionFiles = import.meta.glob('../data/questions/**/*.js')
    
    for (const file of filesToLoad) {
      const cacheKey = file
      if (!questionCache[cacheKey]) {
        let loaded = false
        for (const [path, importFn] of Object.entries(questionFiles)) {
          if (path.includes(`/${file}.js`)) {
            try {
              const module = await importFn()
              questionCache[cacheKey] = module.default || []
              loaded = true
              console.log(`✅ [Questions] Loaded ${questionCache[cacheKey].length} questions from ${file}`)
              break
            } catch (err) {
              console.warn(`[Questions] Could not load ${file}:`, err.message)
              questionCache[cacheKey] = []
            }
          }
        }
        if (!loaded) {
          console.warn(`[Questions] File not found: ${file}, using fallback`)
          questionCache[cacheKey] = []
        }
      }
      const questions = questionCache[cacheKey]
      if (Array.isArray(questions) && questions.length > 0) {
        allQuestions = allQuestions.concat(questions)
      }
    }

    // Fallback if nothing loaded
    if (allQuestions.length === 0) {
      console.warn(`[Questions] No real questions for ${subject}, using mock`)
      return generateMockQuestions(count, subject, topic, difficulty)
    }

    // Filter by difficulty
    if (difficulty && difficulty !== 'mixed') {
      const filtered = allQuestions.filter(q => q.difficulty === difficulty)
      if (filtered.length > 0) allQuestions = filtered
    }

    // Apply difficulty distribution
    if (difficultyDistribution) {
      const selected = []
      for (const [diff, percentage] of Object.entries(difficultyDistribution)) {
        const pool = allQuestions.filter(q => q.difficulty === diff)
        const needed = Math.round((percentage / 100) * count)
        selected.push(...shuffleArray(pool).slice(0, needed))
      }
      if (selected.length < count) {
        const remaining = shuffleArray(allQuestions.filter(q => !selected.includes(q)))
        selected.push(...remaining.slice(0, count - selected.length))
      }
      return shuffleArray(selected).slice(0, count)
    }

    return shuffleArray(allQuestions).slice(0, count)
  } catch (error) {
    console.error('[Questions] Error loading real questions:', error)
    return generateMockQuestions(count, subject, topic, difficulty)
  }
}

// ============================================================
// MOCK DATA GENERATORS (Fallback only)
// ============================================================

const SUBJECTS = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Government']
const TOPICS = {
  Mathematics: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus', 'Statistics', 'Probability'],
  English: ['Grammar', 'Comprehension', 'Vocabulary', 'Essay Writing', 'Literature'],
  Physics: ['Mechanics', 'Heat', 'Waves', 'Optics', 'Electricity', 'Magnetism'],
  Chemistry: ['Organic', 'Inorganic', 'Physical', 'Biochemistry', 'Analytical'],
  Biology: ['Cell Biology', 'Genetics', 'Ecology', 'Human Anatomy', 'Plant Physiology'],
}
const DIFFICULTIES = ['easy', 'medium', 'hard']

const MOCK_USER = {
  id: 'user_001',
  firstName: 'Hyesent',
  lastName: 'Dev',
  username: 'hyesent',
  email: 'hyesent@example.com',
  school: 'UNILAG',
  country: 'Nigeria',
  exam: 'jamb',
  tier: 'foundation',
  subjects: ['Mathematics', 'English', 'Physics', 'Chemistry'],
  xp: 1234,
  level: 12,
  streak: 7,
  bio: 'Building Hyelearner',
  goal: 'Pass JAMB with 300+',
  avatar: null,
  subscriptionExpires: '2026-08-01',
  darkMode: false,
  notifications: true,
  studyReminders: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

let mockToken = 'mock_jwt_token_12345'

const generateMockQuestion = (subject, topic, difficulty) => {
  const id = `q_${subject?.slice(0,3) || 'gen'}_${topic?.slice(0,3) || 'top'}_${randomInt(1, 999)}`
  const options = [
    `${randomItem(['x = 2', 'x = 5', 'x = 8', 'x = 10', 'Option Alpha', 'Option Beta'])}`,
    `${randomItem(['x = 3', 'x = 7', 'x = 9', 'x = 12', 'Option Gamma', 'Option Delta'])}`,
    `${randomItem(['x = 4', 'x = 6', 'x = 11', 'x = 15', 'Option Epsilon', 'Option Zeta'])}`,
    `${randomItem(['x = 1', 'x = 13', 'x = 14', 'x = 16', 'Option Eta', 'Option Theta'])}`
  ]
  const answer = randomItem(options)

  return {
    id,
    type: 'multiple_choice',
    question: `${difficulty === 'easy' ? 'Find' : difficulty === 'medium' ? 'Solve for' : 'Determine'} the value of x in this ${topic?.toLowerCase() || 'general'} problem from ${subject || 'this subject'}.`,
    options,
    answer,
    explanation: `Step-by-step solution for this ${difficulty} ${topic || ''} question. Review the concept and practice similar problems.`,
    difficulty,
    topic: topic || 'General',
    subject: subject || 'General',
    platform: 'hyelearner',
    year: 2026,
  }
}

const generateMockQuestions = (count = 30, subject = null, topic = null, difficulty = null) => {
  const questions = []
  const subjects = subject ? [subject] : SUBJECTS
  const topicsList = topic ? [topic] : (subject && TOPICS[subject] ? TOPICS[subject] : ['General'])
  const difficulties = difficulty ? [difficulty] : DIFFICULTIES

  for (let i = 0; i < count; i++) {
    const s = randomItem(subjects)
    const t = randomItem(topicsList)
    const d = randomItem(difficulties)
    questions.push(generateMockQuestion(s, t, d))
  }
  return questions
}

// ============================================================
// REAL API CALLS (Production) — FIXED ERROR HANDLING
// ============================================================

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE}${endpoint}`
  const token = localStorage.getItem('token')
  
  console.log(`🔍 [API] Calling: ${url}`)
  console.log(`🔍 [API] Token present: ${!!token}`)
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  }

  try {
    const response = await fetch(url, { ...options, headers })
    console.log(`🔍 [API] Response status: ${response.status}`)
    
    const data = await response.json()
    console.log(`🔍 [API] Response data:`, data)

    if (!response.ok) {
      let errorMessage = 'API request failed'
      
      if (data.detail) {
        if (typeof data.detail === 'string') {
          errorMessage = data.detail
        } else if (Array.isArray(data.detail)) {
          errorMessage = data.detail.map(err => 
            `${err.loc?.join('.') || ''}: ${err.msg || 'Invalid'}`
          ).join('; ')
        } else if (typeof data.detail === 'object') {
          errorMessage = JSON.stringify(data.detail)
        }
      } else if (data.message) {
        errorMessage = typeof data.message === 'string' ? data.message : JSON.stringify(data.message)
      }

      console.error('[API] Error response:', { status: response.status, data })
      throw new Error(errorMessage)
    }

    return data
  } catch (error) {
    console.error(`❌ [API] ${endpoint} error:`, error)
    throw error
  }
}

// ============================================================
// AUTH SERVICE
// ============================================================

export const auth = {
  login: async (email, password) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!email || !password) throw new Error('Email and password required')
      mockToken = `mock_jwt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem('token', mockToken)
      localStorage.setItem('user', JSON.stringify(MOCK_USER))
      return { user: MOCK_USER, token: mockToken }
    }
    
    const result = await apiCall('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify({ email, password }) 
    })
    
    if (result.refresh_token) {
      localStorage.setItem('refresh_token', result.refresh_token)
    }
    
    return result
  },

  register: async (data) => {
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password,
      school: data.school,
      country: data.country,
      exam: data.exam,
    }

    Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key])

    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!payload.email || !payload.password) throw new Error('Email and password required')
      if (payload.password.length < 6) throw new Error('Password must be at least 6 characters')
      mockToken = `mock_jwt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem('token', mockToken)
      const newUser = { ...MOCK_USER, ...payload, id: `user_${Date.now()}`, createdAt: new Date().toISOString() }
      localStorage.setItem('user', JSON.stringify(newUser))
      return { user: newUser, token: mockToken }
    }
    
    const result = await apiCall('/auth/register', { method: 'POST', body: JSON.stringify(payload) })
    
    if (result.refresh_token) {
      localStorage.setItem('refresh_token', result.refresh_token)
    }
    
    return result
  },

  logout: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      localStorage.removeItem('token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user')
      localStorage.removeItem('hyespace-store-id')
      return { success: true }
    }
    const result = await apiCall('/auth/logout', { method: 'POST' })
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    localStorage.removeItem('hyespace-store-id')
    return result
  },

  refresh: async () => {
    const refreshToken = localStorage.getItem('refresh_token')
    if (!refreshToken) throw new Error('No refresh token available')
    
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      mockToken = `mock_jwt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem('token', mockToken)
      return { token: mockToken }
    }
    
    const result = await apiCall('/auth/refresh', { 
      method: 'POST', 
      body: JSON.stringify({ refresh_token: refreshToken }) 
    })
    
    if (result.access_token) {
      localStorage.setItem('token', result.access_token)
    }
    if (result.refresh_token) {
      localStorage.setItem('refresh_token', result.refresh_token)
    }
    
    return result
  },

  forgotPassword: async (email) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!email) throw new Error('Email required')
      return { success: true, message: 'Reset link sent to email' }
    }
    return apiCall('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
  },

  resetPassword: async (token, password) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!token || !password) throw new Error('Token and password required')
      if (password.length < 6) throw new Error('Password must be at least 6 characters')
      return { success: true }
    }
    return apiCall('/auth/reset-password', { method: 'POST', body: JSON.stringify({ token, password }) })
  },

  getMe: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const token = localStorage.getItem('token')
      if (!token) throw new Error('Not authenticated')
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      return { user }
    }
    
    const result = await apiCall('/auth/me')
    
    if (result && result.user) {
      return result
    }
    
    if (result && result.id) {
      return { user: result }
    }
    
    return { user: null }
  },

  updateProfile: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const current = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      const updated = { ...current, ...data, updatedAt: new Date().toISOString() }
      localStorage.setItem('user', JSON.stringify(updated))
      return { user: updated }
    }
    const result = await apiCall('/user/profile', { method: 'PUT', body: JSON.stringify(data) })
    if (result.user) {
      localStorage.setItem('user', JSON.stringify(result.user))
    }
    return result
  },

  updatePassword: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!data.currentPassword || !data.newPassword) throw new Error('Current and new password required')
      if (data.newPassword.length < 6) throw new Error('New password must be at least 6 characters')
      return { success: true }
    }
    return apiCall('/user/password', { method: 'PUT', body: JSON.stringify(data) })
  },

  uploadAvatar: async (file) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)
      if (!file) throw new Error('File required')
      const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      user.avatar = avatarUrl
      user.updatedAt = new Date().toISOString()
      localStorage.setItem('user', JSON.stringify(user))
      return { avatar: avatarUrl }
    }
    const formData = new FormData()
    formData.append('file', file)
    return apiCall('/user/avatar', { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, body: formData })
  },

  getSubjects: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      return { subjects: user.subjects || MOCK_USER.subjects }
    }
    return apiCall('/user/subjects')
  },

  updateSubjects: async (subjects) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!subjects || !Array.isArray(subjects) || subjects.length === 0) throw new Error('At least one subject required')
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      user.subjects = subjects
      user.updatedAt = new Date().toISOString()
      localStorage.setItem('user', JSON.stringify(user))
      return { subjects }
    }
    return apiCall('/user/subjects', { method: 'PUT', body: JSON.stringify({ subjects }) })
  },
}

// ============================================================
// SESSIONS SERVICE
// ============================================================

export const sessions = {
  start: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      if (!data.subject) throw new Error('Subject required')

      const questions = await loadRealQuestions(data)

      const session = {
        id: `session_${Date.now()}`,
        subject: data.subject,
        topic: data.topic || 'All Topics',
        totalQuestions: questions.length,
        questions,
        answers: {},
        isTimed: data.isTimed || false,
        timeLimit: data.timeLimit || 600,
        startedAt: new Date().toISOString(),
        status: 'active',
      }

      const sessions = safeJSONParse(localStorage.getItem('hyelearner_sessions'), [])
      sessions.push(session)
      localStorage.setItem('hyelearner_sessions', JSON.stringify(sessions))

      return session
    }

    return apiCall('/sessions/start', { method: 'POST', body: JSON.stringify(data) })
  },

  submit: async (sessionId, answers, timeTaken = 0) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)

      const sessions = safeJSONParse(localStorage.getItem('hyelearner_sessions'), [])
      const session = sessions.find(s => s.id === sessionId)
      if (!session) throw new Error('Session not found')

      const total = session.questions.length
      let correct = 0, wrong = 0, skipped = 0

      session.questions.forEach((q) => {
        const userAnswer = answers[q.id]
        if (!userAnswer) {
          skipped++
        } else if (userAnswer === q.answer) {
          correct++
        } else {
          wrong++
        }
      })

      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
      const xpEarned = correct * 10 + (accuracy >= 70 ? 25 : 0) + (accuracy >= 90 ? 50 : 0)

      const result = {
        sessionId, score: correct, total, correct, wrong, skipped,
        accuracy, xpEarned, timeTaken, completedAt: new Date().toISOString(),
      }

      session.status = 'completed'
      session.completedAt = result.completedAt
      session.correctAnswers = correct
      session.wrongAnswers = wrong
      session.skipped = skipped
      session.accuracy = accuracy
      session.xpEarned = xpEarned
      session.answers = answers
      localStorage.setItem('hyelearner_sessions', JSON.stringify(sessions))

      const results = safeJSONParse(localStorage.getItem('hyelearner_results'), [])
      results.push({
        id: `result_${Date.now()}`, sessionId, subject: session.subject,
        topic: session.topic, ...result, createdAt: new Date().toISOString(),
      })
      localStorage.setItem('hyelearner_results', JSON.stringify(results))

      const gamification = safeJSONParse(localStorage.getItem('hyelearner_gamification'), { xp: 0, level: 1, streak: 0, badges: [], totalXP: 0 })
      gamification.xp += xpEarned
      gamification.totalXP = (gamification.totalXP || 0) + xpEarned
      gamification.level = gamification.xp < 1000 ? Math.floor(gamification.xp / 100) + 1 : 10 + Math.floor((gamification.xp - 1000) / 200)
      localStorage.setItem('hyelearner_gamification', JSON.stringify(gamification))

      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      session.questions.forEach((q) => {
        if (answers[q.id] && answers[q.id] !== q.answer) {
          mistakes.push({
            id: `mist_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
            questionId: q.id, 
            question: q.question, 
            options: q.options,
            userAnswer: answers[q.id], 
            correctAnswer: q.answer,
            subject: session.subject, 
            topic: q.topic || 'General',
            explanation: q.explanation || '',
            isResolved: false, 
            createdAt: new Date().toISOString(),
          })
        }
      })
      localStorage.setItem('hyelearner_mistakes', JSON.stringify(mistakes))

      return result
    }

    return apiCall(`/sessions/${sessionId}/submit`, { method: 'POST', body: JSON.stringify({ answers, timeTaken }) })
  },

  getOne: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const sessions = safeJSONParse(localStorage.getItem('hyelearner_sessions'), [])
      const session = sessions.find(s => s.id === id)
      if (!session) throw new Error('Session not found')
      return session
    }
    return apiCall(`/sessions/${id}`)
  },

  getAll: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const sessions = safeJSONParse(localStorage.getItem('hyelearner_sessions'), [])
      return sessions.filter(s => s.status === 'completed').map(s => ({
        id: s.id, subject: s.subject, topic: s.topic,
        score: s.correctAnswers || 0, total: s.totalQuestions || 0,
        accuracy: s.accuracy || 0, date: s.completedAt || s.startedAt, xpEarned: s.xpEarned || 0,
      }))
    }
    return apiCall('/sessions')
  },

  history: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const results = safeJSONParse(localStorage.getItem('hyelearner_results'), [])
      return results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    return apiCall('/sessions/history')
  },
}

// ============================================================
// MISTAKES SERVICE
// ============================================================

export const mistakes = {
  getAll: async (filters = {}) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      let mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      if (filters.subject) mistakes = mistakes.filter(m => m.subject?.toLowerCase() === filters.subject.toLowerCase())
      if (filters.topic) mistakes = mistakes.filter(m => m.topic?.toLowerCase() === filters.topic.toLowerCase())
      if (filters.resolved !== undefined) mistakes = mistakes.filter(m => m.isResolved === filters.resolved)
      return mistakes
    }
    const params = new URLSearchParams(filters).toString()
    return apiCall(`/mistakes?${params}`)
  },

  getOne: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      const mistake = mistakes.find(m => m.id === id)
      if (!mistake) throw new Error('Mistake not found')
      return mistake
    }
    return apiCall(`/mistakes/${id}`)
  },

  add: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      const newMistake = { id: `mist_${Date.now()}`, ...data, isResolved: false, createdAt: new Date().toISOString() }
      mistakes.push(newMistake)
      localStorage.setItem('hyelearner_mistakes', JSON.stringify(mistakes))
      return { success: true, mistake: newMistake }
    }
    return apiCall('/mistakes', { method: 'POST', body: JSON.stringify(data) })
  },

  resolve: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      const updated = mistakes.map(m => m.id === id ? { ...m, isResolved: true, resolvedAt: new Date().toISOString() } : m)
      localStorage.setItem('hyelearner_mistakes', JSON.stringify(updated))
      return { success: true }
    }
    return apiCall(`/mistakes/${id}/resolve`, { method: 'PUT' })
  },

  clear: async (onlyResolved = true) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      const remaining = onlyResolved ? mistakes.filter(m => !m.isResolved) : []
      localStorage.setItem('hyelearner_mistakes', JSON.stringify(remaining))
      return { success: true, cleared: mistakes.length - remaining.length }
    }
    return apiCall(`/mistakes/clear?onlyResolved=${onlyResolved}`, { method: 'DELETE' })
  },

  export: async (format = 'pdf') => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)
      const mistakes = safeJSONParse(localStorage.getItem('hyelearner_mistakes'), [])
      return { url: `https://example.com/mistakes.${format}`, filename: `mistakes_${new Date().toISOString().slice(0, 10)}.${format}`, count: mistakes.length }
    }
    return apiCall(`/mistakes/export?format=${format}`)
  },
}

// ============================================================
// BOOKMARKS SERVICE
// ============================================================

export const bookmarks = {
  getAll: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return safeJSONParse(localStorage.getItem('hyelearner_bookmarks'), [])
    }
    return apiCall('/bookmarks')
  },

  add: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const bookmarks = safeJSONParse(localStorage.getItem('hyelearner_bookmarks'), [])
      const exists = bookmarks.some(b => b.targetId === data.targetId && b.targetType === data.targetType)
      if (exists) throw new Error('Bookmark already exists')
      const newBookmark = { id: `bm_${Date.now()}`, ...data, createdAt: new Date().toISOString() }
      bookmarks.push(newBookmark)
      localStorage.setItem('hyelearner_bookmarks', JSON.stringify(bookmarks))
      return { success: true, bookmark: newBookmark }
    }
    return apiCall('/bookmarks', { method: 'POST', body: JSON.stringify(data) })
  },

  remove: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const bookmarks = safeJSONParse(localStorage.getItem('hyelearner_bookmarks'), [])
      localStorage.setItem('hyelearner_bookmarks', JSON.stringify(bookmarks.filter(b => b.id !== id)))
      return { success: true }
    }
    return apiCall(`/bookmarks/${id}`, { method: 'DELETE' })
  },

  update: async (id, data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const bookmarks = safeJSONParse(localStorage.getItem('hyelearner_bookmarks'), [])
      const updated = bookmarks.map(b => b.id === id ? { ...b, ...data, updatedAt: new Date().toISOString() } : b)
      localStorage.setItem('hyelearner_bookmarks', JSON.stringify(updated))
      return { success: true, bookmark: updated.find(b => b.id === id) }
    }
    return apiCall(`/bookmarks/${id}`, { method: 'PUT', body: JSON.stringify(data) })
  },
}

// ============================================================
// AI SERVICE
// ============================================================

export const ai = {
  explain: async (question, userAnswer, options = [], correctAnswer = null) => {
    const safeQuestion = question || 'No question provided'
    const safeUserAnswer = userAnswer || 'No answer provided'
    const safeOptions = Array.isArray(options) ? options : []
    const safeCorrectAnswer = correctAnswer || null
    
    if (!question || question.trim() === '') {
      return {
        explanation: 'No question provided. Please try again.',
        keyConcept: 'N/A',
        why_wrong: 'N/A',
        tips: ['Please select a valid question'],
        shortcut: 'N/A',
        error: true
      }
    }
    
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)
      return {
        explanation: `Step-by-step solution for: "${safeQuestion.slice(0, 50)}..."\n\n1. Understand the problem\n2. Identify the concept\n3. Apply the formula\n4. Verify your answer`,
        keyConcept: 'Understanding the fundamental principle',
        why_wrong: `Your answer "${safeUserAnswer}" was incorrect. The correct answer is ${safeCorrectAnswer || 'not provided'}.`,
        tips: ['Read carefully', 'Show working', 'Double-check'],
        shortcut: 'Practice similar questions to master this concept.',
        correct_answer: safeCorrectAnswer,
        question: safeQuestion,
        user_answer: safeUserAnswer
      }
    }
    
    try {
      const payload = { 
        question: safeQuestion, 
        userAnswer: safeUserAnswer,
        options: safeOptions,
        correctAnswer: safeCorrectAnswer
      }
      
      const result = await apiCall('/ai/explain', { 
        method: 'POST', 
        body: JSON.stringify(payload) 
      })
      return result
    } catch (error) {
      return {
        explanation: 'Sorry, I could not generate an explanation at this time. Please try again later.',
        keyConcept: 'Please try again',
        why_wrong: 'Unable to generate explanation',
        tips: ['Refresh the page', 'Try again later', 'Check your internet connection'],
        shortcut: 'N/A',
        error: true,
        error_details: error.message || 'Unknown error'
      }
    }
  },

  weakness: async (data = {}) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)
      return {
        weakTopics: [
          { topic: 'Trigonometry', accuracy: 38, priority: 'High', recommendations: 'Practice basic trigonometric ratios' },
          { topic: 'Probability', accuracy: 42, priority: 'High', recommendations: 'Review combination and permutation rules' },
          { topic: 'Geometry', accuracy: 55, priority: 'Medium', recommendations: 'Focus on circle theorems' },
        ].slice(0, data.limit || 3),
        summary: 'Focus on high-priority topics for maximum improvement.',
        createdAt: new Date().toISOString(),
      }
    }
    
    try {
      const result = await apiCall('/ai/weakness', { method: 'POST', body: JSON.stringify(data) })
      return result
    } catch (error) {
      throw error
    }
  },

  studyPlanV2: async (data) => {
    try {
      return await apiCall('/ai/study-plan-v2', { method: 'POST', body: JSON.stringify(data) })
    } catch (error) {
      throw error
    }
  },

  getSyllabus: async (examType = 'jamb', subject = null) => {
    let url = `/ai/syllabus?exam_type=${examType}`
    if (subject) url += `&subject=${encodeURIComponent(subject)}`
    return apiCall(url, { method: 'GET' })
  },

  getPlanPresets: async () => {
    return apiCall('/ai/study-plan-presets', { method: 'GET' })
  },

  hyetutor: {
    analyze: async (data) => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.slow)
        return {
          missions: [
            { id: 'mission_001', text: 'Review Algebra — focus on linear equations', reason: '42% accuracy in yesterday\'s CBT', priority: 'high', xpReward: 30, estimatedTime: 25, completed: false },
            { id: 'mission_002', text: 'Complete 30 practice questions on Trigonometry', reason: 'Weak topic (45% mastery)', priority: 'high', xpReward: 40, estimatedTime: 45, completed: false },
            { id: 'mission_003', text: 'Study Calculus — watch lesson video', reason: 'Critical weak area (38% mastery)', priority: 'critical', xpReward: 25, estimatedTime: 30, completed: false },
          ],
          totalXpReward: 95,
          nextSession: { time: '7:00 PM', subject: 'Mathematics', topic: 'Quadratic Equations', duration: 45, difficulty: 'Medium' },
          timeBudget: { total: 2.75, completed: 1.33, remaining: 1.42 },
          weeklyGoal: { total: 24, completed: 18, percentage: 75 },
          performance: { examReadiness: 89, confidence: 91, consistency: 87, focus: 84, burnoutRisk: 'Low' },
          subjects: [
            { name: 'Mathematics', mastery: 78, confidence: 92, status: 'in_progress', trend: 'down' },
            { name: 'Physics', mastery: 45, confidence: 48, status: 'danger', trend: 'down' },
            { name: 'English', mastery: 85, confidence: 91, status: 'completed', trend: 'up' },
          ],
          insights: [],
          habits: [],
          momentum: { hours: 18.4, average_per_day: 2.6, bestDay: 'Tuesday', longestSession: '2h 13m', missedDays: 1, streak: 7 },
          revisionQueue: [],
          quickStats: { topicsRemaining: 34, lessonsRemaining: 12, questionsRemaining: 486, daysAhead: 11 },
          motivation: "Yesterday you studied 3h 18m — that's 42 mins more than your average. Great work!"
        }
      }
      return apiCall('/hyetutor/analyze', { method: 'POST', body: JSON.stringify(data) })
    },

    chat: async (question, context) => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.slow)
        return {
          answer: "Based on your data, focus on these areas for improvement.",
          confidence: 87
        }
      }
      return apiCall('/hyetutor/chat', { method: 'POST', body: JSON.stringify({ question, context }) })
    },

    completeMission: async (missionId) => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.normal)
        return { success: true, mission: { id: missionId, completed: true, xp_earned: 30 } }
      }
      return apiCall(`/hyetutor/mission/${missionId}/complete`, { method: 'POST' })
    },

    reflection: async (data) => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.normal)
        return { success: true, adjustments: { workload_reduced: true, new_load: 2.0 } }
      }
      return apiCall('/hyetutor/reflection', { method: 'POST', body: JSON.stringify(data) })
    },

    cached: async () => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.fast)
        return { cached: true, date: new Date().toISOString().split('T')[0] }
      }
      return apiCall('/hyetutor/cached', { method: 'GET' })
    }
  }
}

// ============================================================
// SUBSCRIPTIONS SERVICE (with Hardcoded Account)
// ============================================================

const HARDCODED_EMAIL = 'hyesent@example.com'
const HARDCODED_USER_ID = 'user_hyesent'
const HYESPACE_STORE_URL = 'https://hyespace.vercel.app'
const HYESPACE_VERIFY_URL = 'https://bqyrkdxqwysrhvjfajix.supabase.co/functions/v1/verify-subscription'

const isHardcodedAccount = (user) => {
  return user?.email === HARDCODED_EMAIL || user?.id === HARDCODED_USER_ID
}

const normalizeHyeSpaceId = (value) => {
  if (!value || typeof value !== 'string') return ''
  return value.trim().toLowerCase()
}

const safeCurrentUser = () => safeJSONParse(localStorage.getItem('user'), MOCK_USER)

const getLinkedHyeSpaceId = () => normalizeHyeSpaceId(localStorage.getItem('hyespace-store-id'))

const isHyeSpaceLinked = () => !!getLinkedHyeSpaceId()

const openHyeSpace = () => {
  window.open(HYESPACE_STORE_URL, '_blank', 'noopener,noreferrer')
}

export const handleSubscribeClick = (navigate) => {
  const linkedId = localStorage.getItem('hyespace-store-id')
  if (linkedId) {
    navigate('/settings')
    return
  }
  window.open(HYESPACE_STORE_URL, '_blank', 'noopener,noreferrer')
}

export const hasLinkedHyeSpaceId = () => !!localStorage.getItem('hyespace-store-id')

export const subscriptions = {
  initialize: async (tier, currency = 'NGN') => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return {
        authorizationUrl: HYESPACE_STORE_URL,
        reference: `mock_ref_${Date.now()}`,
        tier,
        amount: tier === 'premium' ? 5000 : 1500,
        currency
      }
    }

    return {
      authorizationUrl: HYESPACE_STORE_URL,
      reference: `hyespace_${Date.now()}`,
      tier,
      amount: tier === 'premium' ? 5000 : 1500,
      currency,
      note: 'Use HyeSpace to manage your subscription.'
    }
  },

  verify: async (reference) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { status: 'success', tier: 'foundation', amount: 1500, reference, verifiedAt: new Date().toISOString() }
    }
    return { status: 'success', verified: isHyeSpaceLinked(), message: isHyeSpaceLinked() ? 'HyeSpace link detected' : 'No HyeSpace link' }
  },

  status: async () => {
    const user = safeCurrentUser()

    // Hardcoded account bypass
    if (isHardcodedAccount(user)) {
      return {
        isActive: true,
        tier: 'pro',
        plan: 'Pro',
        expiresAt: '2027-12-31T23:59:59.000Z',
        daysRemaining: 365,
        autoRenew: true,
        isHardcoded: true
      }
    }

    // Mock mode
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return {
        isActive: !!getLinkedHyeSpaceId(),
        tier: getLinkedHyeSpaceId() ? (user.tier || 'foundation') : 'free',
        plan: getLinkedHyeSpaceId() ? (user.tier === 'premium' ? 'Premium' : 'Foundation') : 'Free',
        expiresAt: getLinkedHyeSpaceId() ? (user.subscriptionExpires || '2026-08-01') : null,
        daysRemaining: getLinkedHyeSpaceId() ? 24 : 0,
        autoRenew: true
      }
    }

    // Real flow — call HyeSpace verify endpoint
    const hyeSpaceId = getLinkedHyeSpaceId()
    const userEmail = user?.email || ''

    if (!hyeSpaceId) {
      return {
        isActive: false,
        tier: 'free',
        plan: 'Free',
        expiresAt: null,
        daysRemaining: 0,
        autoRenew: false,
        redirectTo: HYESPACE_STORE_URL,
        message: 'Link your HyeSpace ID or subscribe on HyeSpace to unlock premium features.'
      }
    }

    if (!userEmail) {
      return {
        isActive: false,
        tier: 'free',
        plan: 'Free',
        expiresAt: null,
        daysRemaining: 0,
        autoRenew: false,
        message: 'No user email found. Please sign in again.'
      }
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)

      const res = await fetch(HYESPACE_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeId: hyeSpaceId,
          appId: 'hyelearner',
          email: userEmail,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        console.error('HyeSpace verification failed:', res.status)
        return {
          isActive: false,
          tier: 'free',
          plan: 'Free',
          expiresAt: null,
          daysRemaining: 0,
          autoRenew: false,
          message: 'HyeSpace verification failed. Try again later.'
        }
      }

      const data = await res.json()

      if (data.error) {
        console.error('HyeSpace error:', data.error)
        return {
          isActive: false,
          tier: 'free',
          plan: 'Free',
          expiresAt: null,
          daysRemaining: 0,
          autoRenew: false,
          message: data.error
        }
      }

      if (data.subscribed && data.status === 'active') {
        const mappedTier = data.tierId === 'hyelearner-foundation' ? 'foundation' : 'free'
        const daysRemaining = data.expiresAt
          ? Math.ceil((new Date(data.expiresAt) - new Date()) / 86400000)
          : 0

        return {
          isActive: true,
          tier: mappedTier,
          plan: mappedTier === 'foundation' ? 'Foundation' : 'Free',
          expiresAt: data.expiresAt || null,
          daysRemaining,
          autoRenew: true,
          verifiedVia: 'hyespace',
          message: 'Verified through HyeSpace.'
        }
      }

      if (data.message === 'Store ID belongs to another account') {
        localStorage.removeItem('hyespace-store-id')
      }

      return {
        isActive: false,
        tier: 'free',
        plan: 'Free',
        expiresAt: null,
        daysRemaining: 0,
        autoRenew: false,
        message: data.message || 'No active subscription'
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('HyeSpace verification timeout')
      } else {
        console.error('HyeSpace verification error:', error)
      }
      return {
        isActive: false,
        tier: 'free',
        plan: 'Free',
        expiresAt: null,
        daysRemaining: 0,
        autoRenew: false,
        message: 'Could not reach HyeSpace. Try again later.'
      }
    }
  },

  cancel: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, message: 'Subscription cancelled.', expiresAt: new Date(Date.now() + 30 * 86400000).toISOString() }
    }
    openHyeSpace()
    return { success: true, message: 'Open HyeSpace to cancel your subscription.', redirectUrl: HYESPACE_STORE_URL }
  },

  upgrade: async (tier) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const user = safeCurrentUser()
      user.tier = tier
      user.subscriptionExpires = new Date(Date.now() + 30 * 86400000).toISOString()
      localStorage.setItem('user', JSON.stringify(user))
      return { success: true, tier, expiresAt: user.subscriptionExpires }
    }

    openHyeSpace()
    return { success: true, tier, message: 'Use HyeSpace to upgrade your subscription.', redirectUrl: HYESPACE_STORE_URL }
  },

  linkStoreId: (storeId) => {
    const normalized = normalizeHyeSpaceId(storeId)
    if (!normalized) throw new Error('Enter a valid HyeSpace ID first.')
    localStorage.setItem('hyespace-store-id', normalized)
    return { success: true, storeId: normalized }
  },

  unlinkStoreId: () => {
    localStorage.removeItem('hyespace-store-id')
    return { success: true }
  },

  isHardcoded: () => {
    const user = safeCurrentUser()
    return isHardcodedAccount(user)
  }
}

// ============================================================
// PARENT SERVICE
// ============================================================

export const parent = {
  generateCode: async () => {
    const response = await apiCall('/parent/generate-code', { 
      method: 'POST',
      body: JSON.stringify({})
    })
    return response
  },

  link: async (code) => {
    if (!code || code.length < 4) {
      throw new Error('Invalid code. Must be at least 4 characters.')
    }
    const response = await apiCall('/parent/link', { 
      method: 'POST', 
      body: JSON.stringify({ code }) 
    })
    return response
  },

  getStatus: async () => {
    const response = await apiCall('/parent/status', { method: 'GET' })
    return response
  },

  getStudentAnalytics: async (studentId) => {
    if (!studentId) {
      throw new Error('Student ID is required')
    }
    const response = await apiCall(`/parent/analytics/${studentId}`, { method: 'GET' })
    return response
  },

  unlink: async () => {
    const response = await apiCall('/parent/unlink', { 
      method: 'POST',
      body: JSON.stringify({})
    })
    return response
  },

  approve: async (studentId, action) => {
    if (!studentId) {
      throw new Error('Student ID is required')
    }
    if (!action) {
      throw new Error('Action is required')
    }
    const response = await apiCall(`/parent/approve/${studentId}`, { 
      method: 'POST', 
      body: JSON.stringify({ action }) 
    })
    return response
  },
}

// ============================================================
// DUEL SERVICE
// ============================================================

export const duels = {
  create: async (data) => {
    const payload = {
      subject: data.subject,
      topic: data.topic,
      count: data.questionCount || 10,
      time_limit: data.timeLimit || 300,
      is_public: data.is_public || false,
      questions: data.questions || []
    }
    
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const code = Math.random().toString(36).substring(2, 8).toUpperCase()
      return { 
        id: `duel_${Date.now()}`, 
        code: code,
        createdAt: new Date().toISOString() 
      }
    }
    return apiCall('/duel/create', { 
      method: 'POST', 
      body: JSON.stringify(payload) 
    })
  },

  join: async (code) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const sampleQuestions = generateMockQuestions(10, 'Mathematics', 'Algebra')
      return { 
        id: `duel_${Date.now()}`, 
        opponent: { name: 'Opponent Player', id: 'opponent-1' },
        questions: sampleQuestions,
        timeLimit: 300
      }
    }
    return apiCall('/duel/join', { method: 'POST', body: JSON.stringify({ code }) })
  },

  submit: async (duelId, answers) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.slow)
      const total = Object.keys(answers).length || 10
      const correct = Math.floor(Math.random() * (total + 1))
      return {
        correct,
        total,
        accuracy: Math.round((correct / total) * 100),
        winner: correct >= Math.floor(total / 2) ? 'You' : 'Opponent'
      }
    }
    return apiCall('/duel/submit', { 
      method: 'POST', 
      body: JSON.stringify({ duel_id: duelId, answers }) 
    })
  },

  history: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return [
        { id: 'd1', opponent: 'John Doe', subject: 'Mathematics', accuracy: 75, winner: true, date: new Date().toISOString() },
        { id: 'd2', opponent: 'Jane Smith', subject: 'English', accuracy: 60, winner: false, date: new Date().toISOString() }
      ]
    }
    return apiCall('/duel/history')
  },

  status: async (duelId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { status: 'active', players: 2, timeLeft: 180 }
    }
    return apiCall(`/duel/${duelId}`)
  },

  getActiveUsers: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { 
        count: 12,
        users: [
          { id: '1', username: 'John Doe', avatar_url: null },
          { id: '2', username: 'Jane Smith', avatar_url: null },
        ]
      }
    }
    return apiCall('/duel/active-users', { method: 'GET' })
  },

  getPublicDuels: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return {
        active_users: 12,
        duels: [],
        total_public_duels: 0
      }
    }
    return apiCall('/duel/public', { method: 'GET' })
  },

  joinPublic: async (duelId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const sampleQuestions = generateMockQuestions(10, 'Mathematics', 'Algebra')
      return {
        duel_id: duelId,
        subject: 'Mathematics',
        topic: 'Algebra',
        questions: sampleQuestions,
        time_limit: 300,
        challenger: 'John Doe',
        opponent: 'You',
        status: 'active'
      }
    }
    return apiCall(`/duel/join-public/${duelId}`, { method: 'POST' })
  },
}

// ============================================================
// LEADERBOARD SERVICE
// ============================================================

export const leaderboard = {
  get: async (filter = 'global', limit = 20) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const rankings = [
        { rank: 1, name: 'John Doe', xp: 12450, level: 25, streak: 12, school: 'UNILAG' },
        { rank: 2, name: 'Mary Smith', xp: 10230, level: 22, streak: 8, school: 'UI' },
        { rank: 3, name: 'Alex Johnson', xp: 8900, level: 20, streak: 15, school: 'UNILAG' },
      ]
      
      return { 
        rankings, 
        totalUsers: 2847, 
        filter,
        userRank: null
      }
    }
    return apiCall(`/leaderboard?filter=${filter}&limit=${limit}`)
  },
}

// ============================================================
// SOCIAL SERVICE
// ============================================================

export const social = {
  searchUsers: async (q, limit = 20) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { users: [], total: 0, limit } }
    }
    return apiCall(`/social/users/search?q=${encodeURIComponent(q)}&limit=${limit}`)
  },

  getFriends: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { friends: [], total: 0, online: 0 } }
    }
    return apiCall('/social/friends')
  },

  getFriendRequests: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { requests: [], total: 0 } }
    }
    return apiCall('/social/friends/requests')
  },

  sendFriendRequest: async (userId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { requestId: Date.now(), status: 'pending', sentAt: new Date().toISOString() } }
    }
    return apiCall('/social/friends/request', { method: 'POST', body: JSON.stringify({ userId }) })
  },

  acceptFriendRequest: async (requestId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { friendId: 99, friendUsername: 'new_friend', acceptedAt: new Date().toISOString() } }
    }
    return apiCall(`/social/friends/accept/${requestId}`, { method: 'PUT' })
  },

  rejectFriendRequest: async (requestId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, message: 'Friend request rejected' }
    }
    return apiCall(`/social/friends/reject/${requestId}`, { method: 'DELETE' })
  },

  removeFriend: async (friendId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, message: 'Friend removed' }
    }
    return apiCall(`/social/friends/${friendId}`, { method: 'DELETE' })
  },

  getMessages: async (friendId, limit = 50, before = null) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { messages: [], nextCursor: null } }
    }
    const url = before ? `/social/messages/${friendId}?limit=${limit}&before=${before}` : `/social/messages/${friendId}?limit=${limit}`
    return apiCall(url)
  },

  sendMessage: async (recipientId, message) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { message: { id: Date.now(), senderId: 1, receiverId: recipientId, message, isRead: false, createdAt: new Date().toISOString() } } }
    }
    return apiCall('/social/messages/send', { method: 'POST', body: JSON.stringify({ recipientId, message }) })
  },

  markMessagesRead: async (friendId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { markedCount: 0, updatedAt: new Date().toISOString() } }
    }
    return apiCall(`/social/messages/${friendId}/read`, { method: 'PUT' })
  },

  getUnreadCount: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { totalUnread: 0, conversations: [] } }
    }
    return apiCall('/social/messages/unread')
  },

  inviteDuel: async (friendId, subject, topic = null, questionCount = 10, timeLimit = 300) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { inviteId: Date.now(), friendId, status: 'pending', invitedAt: new Date().toISOString(), expiresAt: new Date(Date.now() + 3600000).toISOString() } }
    }
    return apiCall('/social/duel/invite', { method: 'POST', body: JSON.stringify({ friendId, subject, topic, questionCount, timeLimit }) })
  },

  getDuelInvites: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { invites: [] } }
    }
    return apiCall('/social/duel/invites')
  },

  respondDuelInvite: async (inviteId, accept) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return accept ? { success: true, data: { duelId: 'duel_mock_123', status: 'active', questionCount: 10, timeLimit: 300, startsAt: new Date().toISOString() } } : { success: true, message: 'Duel invite rejected' }
    }
    return apiCall(`/social/duel/invite/${inviteId}/respond`, { method: 'POST', body: JSON.stringify({ accept }) })
  },

  getGroups: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { groups: [] } }
    }
    return apiCall('/social/groups')
  },

  getGroup: async (groupId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { id: groupId, name: 'Mock Group', memberCount: 0, isMember: false } }
    }
    return apiCall(`/social/groups/${groupId}`)
  },

  createGroup: async (name, description = '', subject = 'All', memberIds = []) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { id: Date.now(), name, description, subject, memberCount: memberIds.length + 1, isMember: true, createdAt: new Date().toISOString(), inviteCode: 'MOCK' + Math.random().toString(36).slice(2, 6).toUpperCase() } }
    }
    return apiCall('/social/groups/create', { method: 'POST', body: JSON.stringify({ name, description, subject, memberIds }) })
  },

  joinGroup: async (groupId, inviteCode = null) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { groupId, joinedAt: new Date().toISOString() } }
    }
    const body = inviteCode ? { inviteCode } : {}
    return apiCall(`/social/groups/${groupId}/join`, { method: 'POST', body: JSON.stringify(body) })
  },

  leaveGroup: async (groupId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, message: 'Left group successfully' }
    }
    return apiCall(`/social/groups/${groupId}/leave`, { method: 'POST' })
  },

  getGroupMessages: async (groupId, limit = 50) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { messages: [] } }
    }
    return apiCall(`/social/groups/${groupId}/messages?limit=${limit}`)
  },

  sendGroupMessage: async (groupId, message) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { id: Date.now(), sender: { id: 1, username: 'me' }, message, isAnnouncement: false, createdAt: new Date().toISOString() } }
    }
    return apiCall(`/social/groups/${groupId}/message`, { method: 'POST', body: JSON.stringify({ message }) })
  },

  getFriendActivity: async (limit = 20) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { activities: [] } }
    }
    return apiCall(`/social/activity/friends?limit=${limit}`)
  },

  getGlobalActivity: async (limit = 20) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { recent: [], stats: { totalUsers: 0, onlineNow: 0, sessionsToday: 0 } } }
    }
    return apiCall(`/social/activity/global?limit=${limit}`)
  },

  createChallenge: async (type, friendIds, duration = 7, stake = null) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { challengeId: Date.now(), type, participants: [1, ...friendIds], duration, stake, status: 'active', startsAt: new Date().toISOString(), endsAt: new Date(Date.now() + duration * 86400000).toISOString() } }
    }
    return apiCall('/social/challenges/create', { method: 'POST', body: JSON.stringify({ type, friendIds, duration, stake }) })
  },

  getChallenges: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { challenges: [] } }
    }
    return apiCall('/social/challenges')
  },

  acceptChallenge: async (challengeId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { challengeId, joinedAt: new Date().toISOString() } }
    }
    return apiCall(`/social/challenges/${challengeId}/accept`, { method: 'POST' })
  },

  getChallengeStatus: async (challengeId) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { id: challengeId, type: 'streak', status: 'active', participants: [], timeRemaining: 172800 } }
    }
    return apiCall(`/social/challenges/${challengeId}`)
  },
}

// ============================================================
// VOICE SERVICE
// ============================================================

const API_BASE_VOICE = import.meta.env.VITE_VOICE_API_URL || 'https://hyezen.onrender.com'

export const voice = {
  getVoices: async (type = 'realistic') => {
    const response = await fetch(`${API_BASE_VOICE}/api/voices/${type}`)
    if (!response.ok) throw new Error('Failed to fetch voices')
    return response.json()
  },

  getModes: async () => {
    const response = await fetch(`${API_BASE_VOICE}/api/modes`)
    if (!response.ok) throw new Error('Failed to fetch modes')
    return response.json()
  },

  synthesize: async (data) => {
    const response = await fetch(`${API_BASE_VOICE}/api/tts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('TTS generation failed')
    return response.json()
  },

  health: async () => {
    const response = await fetch(`${API_BASE_VOICE}/api/health`)
    if (!response.ok) throw new Error('Voice service unavailable')
    return response.json()
  }
}

// ============================================================
// REFERRALS SERVICE
// ============================================================

export const referrals = {
  getCode: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { code: `REF${Math.random().toString(36).slice(2,6).toUpperCase()}${Date.now().toString().slice(-4)}`, clicks: 0, signups: 0, rewards: 0 } }
    return apiCall('/referral/code')
  },
  track: async (code) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); if (!code) throw new Error('Referral code required'); return { success: true, referrer: 'John Doe', reward: 500, message: 'You have been referred! 500 XP bonus awarded.' } }
    return apiCall('/referral/track', { method: 'POST', body: JSON.stringify({ code }) })
  },
  getStats: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { totalClicks: 0, totalSignups: 0, xpEarned: 0 } }
    return apiCall('/referral/stats')
  },
}

// ============================================================
// NOTIFICATIONS SERVICE
// ============================================================

export const notifications = {
  getAll: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/notifications')
  },
  markRead: async (id) => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { success: true } }; return apiCall(`/notifications/${id}/read`, { method: 'PUT' }) },
  markAllRead: async () => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { success: true } }; return apiCall('/notifications/read-all', { method: 'PUT' }) },
  getUnreadCount: async () => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { count: 0 } }; return apiCall('/notifications/unread-count') },
}

// ============================================================
// OFFLINE SERVICE
// ============================================================

export const offline = {
  sync: async (data) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.slow); return { success: true, syncedAt: new Date().toISOString(), syncedItems: data ? Object.keys(data).length : 0 } }
    return apiCall('/sync', { method: 'POST', body: JSON.stringify(data) })
  },
  getStatus: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { isOnline: navigator.onLine, lastSync: localStorage.getItem('hyelearner_last_sync') || null, pendingChanges: 0 } }
    return apiCall('/sync/status')
  },
}

// ============================================================
// ADMIN SERVICE
// ============================================================

export const adminExtended = {
  getStats: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return {
        totalUsers: 1,
        activeUsers: 1,
        inactiveUsers: 0,
        newUsersToday: 1,
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
        subscriptionBreakdown: { free: 1, foundation: 0, premium: 0, pro: 0 },
        growth: { users: 0, revenue: 0, sessions: 0 },
        dailyStats: { activeUsers: 1, newUsers: 0, sessions: 0, feedback: 0, contributions: 0 },
        weeklyStats: { activeUsers: 1, newUsers: 0, sessions: 0, feedback: 0, contributions: 0 }
      }
    }
    return apiCall('/admin/stats')
  },

  getFeedback: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/admin/feedback')
  },

  deleteFeedback: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/admin/feedback/${id}`, { method: 'DELETE' })
  },

  getContributions: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/admin/contributions')
  },

  approveContribution: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/admin/contributions/${id}/approve`, { method: 'POST' })
  },

  rejectContribution: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/admin/contributions/${id}/reject`, { method: 'POST' })
  },

  getUsers: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/admin/users')
  }
}

// ============================================================
// FEEDBACK SERVICE
// ============================================================

export const feedback = {
  submit: async (data) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true, id: `feedback_${Date.now()}` } }
    return apiCall('/feedback', { method: 'POST', body: JSON.stringify(data) })
  },

  getAll: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/feedback')
  },

  delete: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/feedback/${id}`, { method: 'DELETE' })
  }
}

// ============================================================
// CUTOFF CONTRIBUTION SERVICE
// ============================================================

export const cutoffContributions = {
  submit: async (data) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true, id: `contrib_${Date.now()}`, status: 'pending' } }
    return apiCall('/cutoffs/contribute', { method: 'POST', body: JSON.stringify(data) })
  },

  getMyContributions: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/cutoffs/my-contributions')
  },

  getAll: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [] }
    return apiCall('/admin/contributions')
  },

  approve: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/admin/contributions/${id}/approve`, { method: 'POST' })
  },

  reject: async (id) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); return { success: true } }
    return apiCall(`/admin/contributions/${id}/reject`, { method: 'POST' })
  }
}

// ============================================================
// CAREER SERVICE
// ============================================================

export const career = {
  findCourses: async (data) => {
    return apiCall('/career/courses', { method: 'POST', body: JSON.stringify(data) })
  },

  getCutoffs: async (university, course) => {
    return apiCall(`/career/cutoffs?university=${university}&course=${course}`)
  },

  getUniversities: async () => {
    return apiCall('/career/universities')
  },

  getCourses: async (university) => {
    return apiCall(`/career/courses?university=${university}`)
  },

  searchUniversities: async (query) => {
    return apiCall(`/career/search-universities?query=${encodeURIComponent(query)}`, { method: 'GET' })
  },

  checkAdmission: async (data) => {
    return apiCall('/career/check', { method: 'POST', body: JSON.stringify(data) })
  },
}

// ============================================================
// USER STATS
// ============================================================

export const userStats = {
  getToday: async () => {
    return apiCall('/user/stats', { method: 'GET' })
  },
  save: async (stats) => {
    return apiCall('/user/stats', { method: 'POST', body: JSON.stringify(stats) })
  },
  getTodayProgress: async () => {
    return apiCall('/user/stats/today', { method: 'GET' })
  },
  getRange: async (days = 7) => {
    return apiCall(`/user/stats/range?days=${days}`, { method: 'GET' })
  },
  getWeekly: async () => {
    return apiCall('/user/stats/weekly', { method: 'GET' })
  },
  cleanup: async (daysToKeep = 30) => {
    return apiCall(`/user/stats/old?days_to_keep=${daysToKeep}`, { method: 'DELETE' })
  }
}

// ============================================================
// PING SERVICE
// ============================================================

export const ping = {
  ping: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { status: 'ok', timestamp: new Date().toISOString(), mock: true }
    }
    return apiCall('/ping', { method: 'GET' })
  },

  pingAuth: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      return { 
        status: 'ok', 
        authenticated: true,
        user_id: user?.id || 'mock_user',
        username: user?.username || 'mock_user',
        timestamp: new Date().toISOString(),
        mock: true 
      }
    }
    return apiCall('/ping/auth', { method: 'GET' })
  },

  health: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: '99.99%',
        version: '1.0.0',
        mock: true 
      }
    }
    return apiCall('/health', { method: 'GET' })
  },
}

// ============================================================
// EXPORT ALL
// ============================================================

export default {
  auth, 
  user: auth, 
  sessions, 
  mistakes, 
  bookmarks, 
  ai, 
  subscriptions, 
  parent, 
  duels,
  career, 
  leaderboard, 
  referrals, 
  notifications,  
  adminExtended,
  offline,
  ping,
  social,
  voice,
  userStats,
  feedback,           
  cutoffContributions,
  handleSubscribeClick,
  hasLinkedHyeSpaceId
}
