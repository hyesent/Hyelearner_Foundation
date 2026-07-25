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
// AUTH SERVICE — ✅ FULLY FIXED
// ============================================================

export const auth = {
  // ✅ FIXED: Returns full response with user
  login: async (email, password) => {
    console.log('🟡 [LOGIN-14] services.auth.login called')
    console.log('🟡 [LOGIN-14] Email:', email)
    console.log('🟡 [LOGIN-14] USE_MOCK:', USE_MOCK)
    
    if (USE_MOCK) {
      console.log('🟡 [LOGIN-15] Using MOCK login')
      await delay(MOCK_DELAYS.normal)
      if (!email || !password) throw new Error('Email and password required')
      mockToken = `mock_jwt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem('token', mockToken)
      localStorage.setItem('user', JSON.stringify(MOCK_USER))
      console.log('🟡 [LOGIN-16] Mock login successful')
      return { user: MOCK_USER, token: mockToken }
    }
    
    console.log('🟡 [LOGIN-17] Using REAL API login')
    const payload = { email, password }
    console.log('🟡 [LOGIN-18] Sending payload to /auth/login:', payload)
    
    // ✅ FIX: Return the FULL response (includes user, access_token, refresh_token)
    const result = await apiCall('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify(payload) 
    })
    
    console.log('🟡 [LOGIN-19] Full apiCall response:', result)
    console.log('🟡 [LOGIN-20] result.user:', result?.user)
    console.log('🟡 [LOGIN-21] result.access_token:', result?.access_token ? '✅ Present' : '❌ Missing')
    console.log('🟡 [LOGIN-22] result.refresh_token:', result?.refresh_token ? '✅ Present' : '❌ Missing')
    
    // ✅ Store refresh token if present
    if (result.refresh_token) {
      localStorage.setItem('refresh_token', result.refresh_token)
      console.log('🟡 [LOGIN-23] Refresh token stored')
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
    console.log('🟢 [REGISTER-API] Registration response:', result)
    
    // Store refresh token if present
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
      return { success: true }
    }
    const result = await apiCall('/auth/logout', { method: 'POST' })
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
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

  // ✅ FIXED: Handles both response formats
  getMe: async () => {
    console.log('🟣 [getMe-1] Called')
    
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const token = localStorage.getItem('token')
      if (!token) throw new Error('Not authenticated')
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      console.log('🟣 [getMe-2] Mock user:', user)
      return { user }
    }
    
    console.log('🟣 [getMe-2] Calling apiCall to /auth/me')
    const result = await apiCall('/auth/me')
    console.log('🟣 [getMe-3] Raw result from apiCall:', result)
    console.log('🟣 [getMe-4] Result keys:', Object.keys(result))
    
    // ✅ Handle both: { user: {...} } OR just the user object itself
    if (result && result.user) {
      console.log('🟣 [getMe-5] Result has user property, returning as is')
      return result
    }
    
    if (result && result.id) {
      console.log('🟣 [getMe-6] Result is the user object, wrapping it')
      return { user: result }
    }
    
    console.log('🟣 [getMe-7] Unexpected response format, returning empty user')
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
    // Update user in localStorage if returned
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
            options: q.options,  // ✅ Store options with mistake
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
// AI SERVICE — ✅ FULLY FIXED
// ============================================================

export const ai = {
  explain: async (question, userAnswer, options = [], correctAnswer = null) => {
    console.log('🔍 [AI-EXPLAIN] Called with:', { 
      question: question?.slice(0, 50) || 'empty', 
      userAnswer: userAnswer || 'empty', 
      optionsCount: options?.length || 0, 
      correctAnswer: correctAnswer || 'null' 
    })
    
    // ✅ Ensure values are not undefined
    const safeQuestion = question || 'No question provided'
    const safeUserAnswer = userAnswer || 'No answer provided'
    const safeOptions = Array.isArray(options) ? options : []
    const safeCorrectAnswer = correctAnswer || null
    
    // ✅ Validate required fields
    if (!question || question === 'No question provided' || question.trim() === '') {
      console.warn('⚠️ [AI-EXPLAIN] No question provided')
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
      console.log('🔍 [AI-EXPLAIN] Using MOCK')
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
    
    console.log('🔍 [AI-EXPLAIN] Calling REAL API...')
    
    try {
      const payload = { 
        question: safeQuestion, 
        userAnswer: safeUserAnswer,
        options: safeOptions,
        correctAnswer: safeCorrectAnswer
      }
      console.log('🔍 [AI-EXPLAIN] Payload:', JSON.stringify(payload).slice(0, 200))
      
      const result = await apiCall('/ai/explain', { 
        method: 'POST', 
        body: JSON.stringify(payload) 
      })
      console.log('✅ [AI-EXPLAIN] API response received')
      return result
    } catch (error) {
      console.error('❌ [AI-EXPLAIN] API call failed:', error)
      console.error('❌ [AI-EXPLAIN] Error message:', error.message)
      console.error('❌ [AI-EXPLAIN] Error stack:', error.stack)
      
      // ✅ Return a user-friendly error instead of throwing
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
    console.log('🔍 [AI-WEAKNESS] Called with:', data)
    
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
      console.error('❌ [AI-WEAKNESS] API call failed:', error)
      throw error
    }
  },

  studyPlanV2: async (data) => {
    try {
      return await apiCall('/ai/study-plan-v2', { method: 'POST', body: JSON.stringify(data) })
    } catch (error) {
      console.error('❌ [AI-STUDY-PLAN-V2] API call failed:', error)
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

  // ============================================================
  // NEW: HYETUTOR AI ENDPOINTS
  // ============================================================

  hyetutor: {
    analyze: async (data) => {
      if (USE_MOCK) {
        await delay(MOCK_DELAYS.slow)
        return {
          missions: [
            { id: 'mission_001', text: 'Review Algebra — focus on linear equations', reason: '42% accuracy in yesterday\'s CBT', priority: 'high', xpReward: 30, estimatedTime: 25, completed: false },
            { id: 'mission_002', text: 'Complete 30 practice questions on Trigonometry', reason: 'Weak topic (45% mastery)', priority: 'high', xpReward: 40, estimatedTime: 45, completed: false },
            { id: 'mission_003', text: 'Study Calculus — watch lesson video', reason: 'Critical weak area (38% mastery)', priority: 'critical', xpReward: 25, estimatedTime: 30, completed: false },
            { id: 'mission_004', text: 'Review Mistake Book — 2 Algebra mistakes', reason: 'Recent mistakes need review', priority: 'medium', xpReward: 25, estimatedTime: 15, completed: false }
          ],
          totalXpReward: 120,
          nextSession: { time: '7:00 PM', subject: 'Mathematics', topic: 'Quadratic Equations', duration: 45, difficulty: 'Medium' },
          timeBudget: { total: 2.75, completed: 1.33, remaining: 1.42 },
          weeklyGoal: { total: 24, completed: 18, percentage: 75 },
          performance: { examReadiness: 89, confidence: 91, consistency: 87, focus: 84, burnoutRisk: 'Low' },
          subjects: [
            { name: 'Mathematics', mastery: 78, confidence: 92, status: 'in_progress', trend: 'down' },
            { name: 'Physics', mastery: 45, confidence: 48, status: 'danger', trend: 'down' },
            { name: 'English', mastery: 85, confidence: 91, status: 'completed', trend: 'up' },
            { name: 'Chemistry', mastery: 91, confidence: 95, status: 'completed', trend: 'up' }
          ],
          insights: [
            { id: 'insight_001', type: 'critical', message: 'Physics is your weakest subject (48% confidence).', priority: 'high', suggestion: 'Add 2 Physics sessions this week.' },
            { id: 'insight_002', type: 'warning', message: 'Your Algebra mastery dropped 15% in the last 3 days.', priority: 'high', suggestion: 'Review Mistake Book entries for Algebra.' }
          ],
          habits: [
            { icon: 'clock', text: 'You perform best between 7 PM and 9 PM', detail: 'Focus sessions during this time are 34% more effective' },
            { icon: 'trending', text: 'You struggle with Math after long Biology sessions', detail: 'Avoid stacking these subjects back-to-back' }
          ],
          momentum: { hours: 18.4, average_per_day: 2.6, bestDay: 'Tuesday', longestSession: '2h 13m', missedDays: 1, streak: 7 },
          revisionQueue: [
            { topic: 'Vectors', subject: 'Mathematics', days_ago: 3, priority: 'medium', confidence: 65 },
            { topic: 'Organic Chemistry', subject: 'Chemistry', days_ago: 7, priority: 'high', confidence: 42 }
          ],
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
          answer: "Based on your data, your Physics score is dropping because of three patterns:\n\n1. Mechanics fundamentals are weak — you've missed 4 questions on Newton's Laws.\n\n2. Waves concept isn't clicking — you've scored below 40% on both attempts.\n\n3. Your study pattern — you usually study Physics after 9 PM, when your focus drops.\n\nRecommendation: Review Mechanics basics (1 hour), practice Waves problems (30 mins), and move Physics sessions to 7 PM (your peak focus time).",
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

const isHardcodedAccount = (user) => {
  return user?.email === HARDCODED_EMAIL || user?.id === HARDCODED_USER_ID
}

export const subscriptions = {
  initialize: async (tier, currency = 'NGN') => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { 
        authorizationUrl: `https://paystack.com/mock-payment?tier=${tier}&ref=${Date.now()}`, 
        reference: `mock_ref_${Date.now()}`, 
        tier, 
        amount: tier === 'premium' ? 5000 : 1500, 
        currency 
      }
    }
    return apiCall('/subscriptions/init', { method: 'POST', body: JSON.stringify({ tier, currency }) })
  },

  verify: async (reference) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { status: 'success', tier: 'foundation', amount: 1500, reference, verifiedAt: new Date().toISOString() }
    }
    return apiCall(`/subscriptions/verify?reference=${reference}`)
  },

  status: async () => {
    const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
    
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

    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { 
        isActive: true, 
        tier: user.tier || 'foundation', 
        plan: user.tier === 'premium' ? 'Premium' : 'Foundation', 
        expiresAt: user.subscriptionExpires || '2026-08-01', 
        daysRemaining: 24, 
        autoRenew: true 
      }
    }
    return apiCall('/subscriptions/status')
  },

  cancel: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, message: 'Subscription cancelled.', expiresAt: new Date(Date.now() + 30 * 86400000).toISOString() }
    }
    return apiCall('/subscriptions/cancel', { method: 'POST' })
  },

  upgrade: async (tier) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      user.tier = tier
      user.subscriptionExpires = new Date(Date.now() + 30 * 86400000).toISOString()
      localStorage.setItem('user', JSON.stringify(user))
      return { success: true, tier, expiresAt: user.subscriptionExpires }
    }
    return apiCall('/subscriptions/upgrade', { method: 'POST', body: JSON.stringify({ tier }) })
  },

  isHardcoded: () => {
    const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
    return isHardcodedAccount(user)
  }
}



  
// ============================================================
// PARENT SERVICE — MATCHES BACKEND RESPONSE FORMAT
// ============================================================

export const parent = {
  // Generate code
  generateCode: async () => {
    const response = await apiCall('/parent/generate-code', { 
      method: 'POST',
      body: JSON.stringify({})
    })
    // ✅ Return the entire response (keeps { success, data })
    return response
  },

  // Link child
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

  // Get status
  getStatus: async () => {
    const response = await apiCall('/parent/status', { method: 'GET' })
    return response
  },

  // Get student analytics
  getStudentAnalytics: async (studentId) => {
    if (!studentId) {
      throw new Error('Student ID is required')
    }
    const response = await apiCall(`/parent/analytics/${studentId}`, { method: 'GET' })
    return response
  },

  // Unlink parent
  unlink: async () => {
    const response = await apiCall('/parent/unlink', { 
      method: 'POST',
      body: JSON.stringify({})
    })
    return response
  },

  // Approve action
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
// DUEL SERVICE — ✅ UPDATED WITH FIELD MAPPING
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
        duels: [
          {
            duel_id: '1',
            code: 'ABCD12',
            challenger: 'John Doe',
            subject: 'Mathematics',
            topic: 'Algebra',
            question_count: 10,
            time_limit: 300,
            created_ago: '2m ago',
            status: 'waiting'
          },
          {
            duel_id: '2',
            code: 'EFGH34',
            challenger: 'Jane Smith',
            subject: 'English',
            topic: 'Grammar',
            question_count: 10,
            time_limit: 300,
            created_ago: '5m ago',
            status: 'waiting'
          }
        ],
        total_public_duels: 2
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
        { rank: 4, name: 'Sarah Williams', xp: 7600, level: 18, streak: 5, school: 'FUTA' },
        { rank: 5, name: 'Michael Brown', xp: 7200, level: 17, streak: 9, school: 'UNIBEN' },
        { rank: 6, name: 'David Lee', xp: 6800, level: 16, streak: 7, school: 'UNILAG' },
        { rank: 7, name: 'Jessica Taylor', xp: 6500, level: 15, streak: 4, school: 'UI' },
        { rank: 8, name: 'James Wilson', xp: 6200, level: 14, streak: 10, school: 'UNILORIN' },
        { rank: 9, name: 'Emily Davis', xp: 5800, level: 13, streak: 6, school: 'UNILAG' },
        { rank: 10, name: 'Robert Martinez', xp: 5500, level: 12, streak: 3, school: 'UNIBEN' },
      ]
      
      let filtered = rankings
      if (filter === 'school') { 
        const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
        filtered = rankings.filter(r => r.school === user.school) 
      }
      if (filter === 'friends') { 
        const friends = safeJSONParse(localStorage.getItem('hyelearner_friends'), [])
        const friendIds = friends.map(f => f.id)
        filtered = rankings.filter(r => friendIds.includes(r.id))
      }
      
      // Find user's rank
      const user = safeJSONParse(localStorage.getItem('user'), MOCK_USER)
      const userRank = rankings.findIndex(r => r.name === user.firstName + ' ' + user.lastName) + 1
      
      return { 
        rankings: filtered, 
        totalUsers: 2847, 
        filter,
        userRank: userRank > 0 ? { rank: userRank, xp: user.xp } : null
      }
    }
    return apiCall(`/leaderboard?filter=${filter}&limit=${limit}`)
  },
}

// ============================================================
// SOCIAL SERVICE — COMPLETE
// ============================================================

export const social = {
  // ============================================================
  // 1. SEARCH
  // ============================================================
  searchUsers: async (q, limit = 20) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      const mockUsers = [
        { id: 1, username: 'john_doe', firstName: 'John', lastName: 'Doe', avatar: null, school: 'UNILAG', exam: 'JAMB', streak: 7, xp: 1234, level: 12, accuracy: 78, isFriend: false, friendRequestSent: false, isOnline: true },
        { id: 2, username: 'jane_smith', firstName: 'Jane', lastName: 'Smith', avatar: null, school: 'UI', exam: 'JAMB', streak: 14, xp: 2450, level: 15, accuracy: 85, isFriend: true, friendRequestSent: false, isOnline: false },
        { id: 3, username: 'alex_wilson', firstName: 'Alex', lastName: 'Wilson', avatar: null, school: 'UNILAG', exam: 'JAMB', streak: 3, xp: 890, level: 8, accuracy: 62, isFriend: false, friendRequestSent: true, isOnline: true },
      ]
      const filtered = mockUsers.filter(u => 
        u.username.includes(q) || 
        u.firstName.includes(q) || 
        u.lastName.includes(q) ||
        u.school.includes(q)
      )
      return { success: true, data: { users: filtered.slice(0, limit), total: filtered.length, limit } }
    }
    return apiCall(`/social/users/search?q=${encodeURIComponent(q)}&limit=${limit}`)
  },

  // ============================================================
  // 2. FRIENDS
  // ============================================================
  getFriends: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const mockFriends = [
        { id: 2, username: 'jane_smith', firstName: 'Jane', lastName: 'Smith', avatar: null, school: 'UI', exam: 'JAMB', streak: 14, xp: 2450, level: 15, accuracy: 85, isOnline: false, lastSeen: '2026-07-22T14:30:00Z', unreadMessages: 2, friendSince: '2026-06-01T10:00:00Z' },
        { id: 5, username: 'mike_jones', firstName: 'Mike', lastName: 'Jones', avatar: null, school: 'UNILAG', exam: 'JAMB', streak: 21, xp: 3200, level: 18, accuracy: 91, isOnline: true, lastSeen: null, unreadMessages: 0, friendSince: '2026-05-15T08:00:00Z' },
      ]
      return { success: true, data: { friends: mockFriends, total: mockFriends.length, online: 1 } }
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

  // ============================================================
  // 3. MESSAGES
  // ============================================================
  getMessages: async (friendId, limit = 50, before = null) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      const mockMessages = [
        { id: 1, senderId: 2, receiverId: 1, message: 'Hey! Ready for the duel?', isRead: true, createdAt: '2026-07-22T14:30:00Z' },
        { id: 2, senderId: 1, receiverId: 2, message: 'Yeah! Let\'s do it', isRead: false, createdAt: '2026-07-22T14:32:00Z' },
      ]
      return { success: true, data: { messages: mockMessages, nextCursor: null } }
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
      return { success: true, data: { markedCount: 5, updatedAt: new Date().toISOString() } }
    }
    return apiCall(`/social/messages/${friendId}/read`, { method: 'PUT' })
  },

  getUnreadCount: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return { success: true, data: { totalUnread: 3, conversations: [{ friendId: 2, friendUsername: 'jane_smith', unreadCount: 3, lastMessage: 'Hey! Let me know when you\'re free', lastMessageAt: '2026-07-22T14:30:00Z' }] } }
    }
    return apiCall('/social/messages/unread')
  },

  // ============================================================
  // 4. DUEL INVITES
  // ============================================================
  inviteDuel: async (friendId, subject, topic = null, questionCount = 10, timeLimit = 300) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, data: { inviteId: Date.now(), friendId, friendUsername: 'jane_smith', status: 'pending', invitedAt: new Date().toISOString(), expiresAt: new Date(Date.now() + 3600000).toISOString() } }
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

  // ============================================================
  // 5. GROUPS
  // ============================================================
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
      return { success: true, data: { id: groupId, name: 'Mock Group', description: 'A mock group', subject: 'All', memberCount: 5, isMember: true, createdBy: 1, createdAt: new Date().toISOString(), lastActivity: new Date().toISOString() } }
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

  // ============================================================
  // 6. ACTIVITY
  // ============================================================
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
      return { success: true, data: { recent: [], stats: { totalUsers: 2847, onlineNow: 156, sessionsToday: 1234 } } }
    }
    return apiCall(`/social/activity/global?limit=${limit}`)
  },

  // ============================================================
  // 7. CHALLENGES
  // ============================================================
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
      return { success: true, data: { id: challengeId, type: 'streak', status: 'active', participants: [{ id: 1, username: 'me', progress: 5, rank: 1 }], timeRemaining: 172800 } }
    }
    return apiCall(`/social/challenges/${challengeId}`)
  },
}

// ============================================================
// VOICE SERVICE — NO MOCK, REAL API ONLY
// ============================================================

const API_BASE_VOICE = import.meta.env.VITE_VOICE_API_URL || 'https://hyezen.onrender.com'

export const voice = {
  // Get available voices
  getVoices: async (type = 'realistic') => {
    const response = await fetch(`${API_BASE_VOICE}/api/voices/${type}`)
    if (!response.ok) throw new Error('Failed to fetch voices')
    return response.json()
  },

  // Get narration modes
  getModes: async () => {
    const response = await fetch(`${API_BASE_VOICE}/api/modes`)
    if (!response.ok) throw new Error('Failed to fetch modes')
    return response.json()
  },

  // Text-to-Speech
  synthesize: async (data) => {
    const response = await fetch(`${API_BASE_VOICE}/api/tts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('TTS generation failed')
    return response.json()
  },

  // Health check
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
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { code: `REF${Math.random().toString(36).slice(2,6).toUpperCase()}${Date.now().toString().slice(-4)}`, clicks: randomInt(0,50), signups: randomInt(0,10), rewards: randomInt(0,1000) } }
    return apiCall('/referral/code')
  },
  track: async (code) => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.normal); if (!code) throw new Error('Referral code required'); return { success: true, referrer: 'John Doe', reward: 500, message: 'You have been referred! 500 XP bonus awarded.' } }
    return apiCall('/referral/track', { method: 'POST', body: JSON.stringify({ code }) })
  },
  getStats: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { totalClicks: randomInt(10,100), totalSignups: randomInt(5,20), xpEarned: randomInt(500,5000) } }
    return apiCall('/referral/stats')
  },
}

// ============================================================
// NOTIFICATIONS SERVICE
// ============================================================

export const notifications = {
  getAll: async () => {
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return [{ id: '1', type: 'streak', title: '🔥 7-Day Streak', message: "You're on fire! Keep going!", read: false, createdAt: new Date().toISOString() }, { id: '2', type: 'weakness', title: '🧠 Weakness Detected', message: 'You need more practice in Trigonometry', read: false, createdAt: new Date(Date.now()-3600000).toISOString() }] }
    return apiCall('/notifications')
  },
  markRead: async (id) => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { success: true } }; return apiCall(`/notifications/${id}/read`, { method: 'PUT' }) },
  markAllRead: async () => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { success: true } }; return apiCall('/notifications/read-all', { method: 'PUT' }) },
  getUnreadCount: async () => { if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { count: 3 } }; return apiCall('/notifications/unread-count') },
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
    if (USE_MOCK) { await delay(MOCK_DELAYS.fast); return { isOnline: navigator.onLine, lastSync: localStorage.getItem('hyelearner_last_sync') || null, pendingChanges: safeJSONParse(localStorage.getItem('hyelearner_pending_changes'), []).length } }
    return apiCall('/sync/status')
  },
}

// ============================================================
// ADMIN SERVICE — Extended (For Admin Page)
// ============================================================

export const adminExtended = {
  // Get admin stats
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
        dailyStats: {
          activeUsers: 1,
          newUsers: 0,
          sessions: 0,
          feedback: 0,
          contributions: 0
        },
        weeklyStats: {
          activeUsers: 1,
          newUsers: 0,
          sessions: 0,
          feedback: 0,
          contributions: 0
        }
      }
    }
    return apiCall('/admin/stats')
  },

  // Get all feedback (admin)
  getFeedback: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return []
    }
    return apiCall('/admin/feedback')
  },

  // Delete feedback (admin)
  deleteFeedback: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/admin/feedback/${id}`, { method: 'DELETE' })
  },

  // Get all contributions (admin)
  getContributions: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return []
    }
    return apiCall('/admin/contributions')
  },

  // Approve contribution (admin)
  approveContribution: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/admin/contributions/${id}/approve`, { method: 'POST' })
  },

  // Reject contribution (admin)
  rejectContribution: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/admin/contributions/${id}/reject`, { method: 'POST' })
  },

  // Get users (admin)
  getUsers: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return [
        { 
          id: '1', 
          name: 'Hyesent Dev', 
          username: 'hyesent',
          email: 'hyesent@example.com', 
          status: 'active',
          school: 'UNILAG',
          exam: 'JAMB',
          xp: 1234,
          level: 12,
          streak: 7,
          accuracy: 78,
          joinedAt: new Date().toISOString(),
          lastActive: new Date().toISOString()
        }
      ]
    }
    return apiCall('/admin/users')
  }
}

// ============================================================
// FEEDBACK SERVICE
// ============================================================

export const feedback = {
  // Submit feedback
  submit: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, id: `feedback_${Date.now()}` }
    }
    return apiCall('/feedback', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  },

  // Get all feedback (admin)
  getAll: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return [
        { id: '1', type: 'general', message: 'Great app!', rating: 5, email: 'user@example.com', createdAt: new Date().toISOString() },
        { id: '2', type: 'bug', message: 'Login button not working', rating: 2, email: 'bug@example.com', createdAt: new Date().toISOString() }
      ]
    }
    return apiCall('/feedback')
  },

  // Delete feedback (admin)
  delete: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/feedback/${id}`, { method: 'DELETE' })
  }
}

// ============================================================
// CUTOFF CONTRIBUTION SERVICE
// ============================================================

export const cutoffContributions = {
  // Submit contribution
  submit: async (data) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true, id: `contrib_${Date.now()}`, status: 'pending' }
    }
    return apiCall('/cutoffs/contribute', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  },

  // Get user's contributions
  getMyContributions: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return []
    }
    return apiCall('/cutoffs/my-contributions')
  },

  // Get all contributions (admin)
  getAll: async () => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.fast)
      return []
    }
    return apiCall('/admin/contributions')
  },

  // Approve contribution (admin)
  approve: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/admin/contributions/${id}/approve`, { method: 'POST' })
  },

  // Reject contribution (admin)
  reject: async (id) => {
    if (USE_MOCK) {
      await delay(MOCK_DELAYS.normal)
      return { success: true }
    }
    return apiCall(`/admin/contributions/${id}/reject`, { method: 'POST' })
  }
}
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
// PING SERVICE — NAMED EXPORT
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
  feedback,           
  cutoffContributions 
}