// ============================================================
// HYELEARNER: FOUNDATION — STORAGE (COMPLETE)
// All LocalStorage helpers with sync, queue, and quota management
// Built by Hyesent.dev
// ============================================================

// ============================================================
// CONSTANTS
// ============================================================

const STORAGE_KEYS = {
  BOOKMARKS: 'hyelearner_bookmarks',
  MISTAKES: 'hyelearner_mistakes',
  SESSIONS: 'hyelearner_sessions',
  RESULTS: 'hyelearner_results',
  GAMIFICATION: 'hyelearner_gamification',
  MASTERY: 'hyelearner_mastery',
  LESSONS: 'hyelearner_lessons',
  PLANNER: 'hyelearner_planner',
  SETTINGS: 'hyelearner_settings',
  PROFILE: 'hyelearner_profile',
  LAST_LOGIN: 'hyelearner_last_login',
  LAST_SYNC: 'hyelearner_last_sync',
  PENDING_CHANGES: 'hyelearner_pending_changes',
  DATA_VERSION: 'hyelearner_data_version',
  SYNC_IN_PROGRESS: 'hyelearner_sync_in_progress',
  HYETUTOR_CACHE: 'hyelearner_hyetutor_cache',
}

const CURRENT_VERSION = '2.0.0'

// ============================================================
// SIZE LIMITS
// ============================================================

const MAX_MISTAKES = 500
const MAX_SESSIONS = 200
const MAX_RESULTS = 500
const MAX_BOOKMARKS = 100

// ============================================================
// STORAGE HELPERS
// ============================================================

const safeGet = (key, fallback = null) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : fallback
  } catch {
    return fallback
  }
}

const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    console.error(`[Storage] Failed to save ${key}:`, e)
    return false
  }
}

const safeRemove = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

// ============================================================
// TIMEZONE HELPERS
// ============================================================

const getTodayInUserTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return new Date().toLocaleDateString('en-CA', { timeZone: tz })
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

const getNowInUserTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return new Date().toLocaleString('en-US', { timeZone: tz })
  } catch {
    return new Date().toISOString()
  }
}

// ============================================================
// HYETUTOR CACHE INVALIDATION
// ============================================================

const invalidateHyeTutorCache = () => {
  const today = getTodayInUserTimezone()
  const user = safeGet('user', {})
  const cacheKey = `hyetutor_${user?.id || 'anonymous'}_${today}`
  safeRemove(cacheKey)
  // Trigger storage event for other tabs
  localStorage.setItem('hyetutor_invalidate', Date.now().toString())
}

// ============================================================
// BOOKMARKS
// ============================================================

export const getBookmarks = () => safeGet(STORAGE_KEYS.BOOKMARKS, [])

export const saveBookmarks = (bookmarks) => safeSet(STORAGE_KEYS.BOOKMARKS, bookmarks)

export const addBookmark = (bookmark) => {
  const bookmarks = getBookmarks()
  const exists = bookmarks.some(
    b => b.targetId === bookmark.targetId && b.targetType === bookmark.targetType
  )
  if (!exists) {
    // Prune if over limit
    if (bookmarks.length >= MAX_BOOKMARKS) {
      bookmarks.shift()
    }
    const newBookmark = {
      id: `bm_${Date.now()}`,
      ...bookmark,
      synced: false,
      createdAt: new Date().toISOString(),
    }
    bookmarks.push(newBookmark)
    saveBookmarks(bookmarks)
    addPendingChange('CREATE_BOOKMARK', newBookmark)
    return bookmarks
  }
  return bookmarks
}

export const removeBookmark = (id) => {
  const bookmarks = getBookmarks()
  const removed = bookmarks.find(b => b.id === id)
  const filtered = bookmarks.filter(b => b.id !== id)
  saveBookmarks(filtered)
  if (removed) {
    addPendingChange('DELETE_BOOKMARK', { id, ...removed })
  }
  return filtered
}

export const updateBookmarkNote = (id, note) => {
  const bookmarks = getBookmarks()
  const updated = bookmarks.map(b => {
    if (b.id === id) {
      const newBookmark = { ...b, note, synced: false, updatedAt: new Date().toISOString() }
      addPendingChange('UPDATE_BOOKMARK', newBookmark)
      return newBookmark
    }
    return b
  })
  saveBookmarks(updated)
  return updated
}

// ============================================================
// MISTAKES
// ============================================================

export const getMistakes = () => safeGet(STORAGE_KEYS.MISTAKES, [])

export const saveMistakes = (mistakes) => safeSet(STORAGE_KEYS.MISTAKES, mistakes)

export const addMistake = (mistake) => {
  const mistakes = getMistakes()
  // Prune if over limit
  if (mistakes.length >= MAX_MISTAKES) {
    mistakes.shift()
  }
  const newMistake = {
    id: `mist_${Date.now()}`,
    ...mistake,
    synced: false,
    createdAt: new Date().toISOString(),
  }
  mistakes.push(newMistake)
  saveMistakes(mistakes)
  addPendingChange('CREATE_MISTAKE', newMistake)
  return mistakes
}

export const resolveMistake = (id) => {
  const mistakes = getMistakes()
  const updated = mistakes.map(m => {
    if (m.id === id) {
      const resolved = { ...m, resolved: true, resolvedAt: new Date().toISOString(), synced: false }
      addPendingChange('RESOLVE_MISTAKE', resolved)
      return resolved
    }
    return m
  })
  saveMistakes(updated)
  return updated
}

export const clearMistakes = (onlyResolved = true) => {
  const mistakes = getMistakes()
  let remaining
  let removed
  if (onlyResolved) {
    removed = mistakes.filter(m => m.resolved === true)
    remaining = mistakes.filter(m => m.resolved !== true)
  } else {
    removed = mistakes
    remaining = []
  }
  saveMistakes(remaining)
  removed.forEach(m => addPendingChange('DELETE_MISTAKE', m))
  return remaining
}

// ============================================================
// SESSIONS
// ============================================================

export const getSessions = () => safeGet(STORAGE_KEYS.SESSIONS, [])

export const saveSessions = (sessions) => safeSet(STORAGE_KEYS.SESSIONS, sessions)

export const addSession = (session) => {
  const sessions = getSessions()
  // Prune if over limit
  if (sessions.length >= MAX_SESSIONS) {
    sessions.shift()
  }
  const newSession = {
    ...session,
    id: session.id || `sess_${Date.now()}`,
    synced: false,
    createdAt: new Date().toISOString(),
  }
  sessions.push(newSession)
  saveSessions(sessions)
  addPendingChange('CREATE_SESSION', newSession)
  
  // ✅ Invalidate HyeTutor cache
  invalidateHyeTutorCache()
  
  return sessions
}

export const updateSession = (id, updates) => {
  const sessions = getSessions()
  const updated = sessions.map(s => {
    if (s.id === id) {
      const newSession = { ...s, ...updates, synced: false, updatedAt: new Date().toISOString() }
      addPendingChange('UPDATE_SESSION', newSession)
      return newSession
    }
    return s
  })
  saveSessions(updated)
  invalidateHyeTutorCache()
  return updated
}

// ============================================================
// RESULTS
// ============================================================

export const getResults = () => safeGet(STORAGE_KEYS.RESULTS, [])

export const saveResults = (results) => safeSet(STORAGE_KEYS.RESULTS, results)

export const addResult = (result) => {
  const results = getResults()
  // Prune if over limit
  if (results.length >= MAX_RESULTS) {
    results.shift()
  }
  const newResult = {
    ...result,
    id: result.id || `res_${Date.now()}`,
    synced: false,
    createdAt: new Date().toISOString(),
  }
  results.push(newResult)
  saveResults(results)
  addPendingChange('CREATE_RESULT', newResult)
  return results
}

// ============================================================
// GAMIFICATION (XP, Level, Streak, Badges)
// ============================================================

const DEFAULT_GAMIFICATION = { xp: 0, level: 1, streak: 0, badges: [], totalXP: 0, totalSessions: 0 }

export const getGamification = () => safeGet(STORAGE_KEYS.GAMIFICATION, DEFAULT_GAMIFICATION)

export const saveGamification = (gamification) => safeSet(STORAGE_KEYS.GAMIFICATION, gamification)

export const updateStreak = () => {
  const gamification = getGamification()
  const today = getTodayInUserTimezone()
  const lastLogin = localStorage.getItem(STORAGE_KEYS.LAST_LOGIN)

  if (lastLogin === today) {
    return gamification.streak
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  let newStreak = gamification.streak
  
  if (lastLogin === yesterday) {
    newStreak += 1
  } else {
    // ✅ FIX: First session of new streak = 1, not 0
    newStreak = 1
  }

  gamification.streak = newStreak
  localStorage.setItem(STORAGE_KEYS.LAST_LOGIN, today)
  gamification.updatedAt = new Date().toISOString()
  saveGamification(gamification)
  addPendingChange('UPDATE_GAMIFICATION', gamification)
  return newStreak
}

export const addXP = (amount) => {
  const gamification = getGamification()
  gamification.xp += amount
  gamification.totalXP = (gamification.totalXP || 0) + amount
  // Level: 100 XP per level up to level 10, then 200 XP per level
  if (gamification.xp < 1000) {
    gamification.level = Math.floor(gamification.xp / 100) + 1
  } else {
    gamification.level = 10 + Math.floor((gamification.xp - 1000) / 200)
  }
  gamification.updatedAt = new Date().toISOString()
  saveGamification(gamification)
  addPendingChange('UPDATE_GAMIFICATION', gamification)
  return gamification
}

export const addBadge = (badgeId) => {
  const gamification = getGamification()
  if (!gamification.badges.includes(badgeId)) {
    gamification.badges.push(badgeId)
    gamification.updatedAt = new Date().toISOString()
    saveGamification(gamification)
    addPendingChange('UPDATE_GAMIFICATION', gamification)
  }
  return gamification
}

// ============================================================
// MASTERY
// ============================================================

export const getMastery = () => safeGet(STORAGE_KEYS.MASTERY, {})

export const saveMastery = (mastery) => safeSet(STORAGE_KEYS.MASTERY, mastery)

export const updateMastery = (topic, accuracy, subject = 'general') => {
  const mastery = getMastery()
  if (!mastery[topic]) {
    mastery[topic] = { accuracy: 0, attempts: 0, subject, synced: false }
  }
  mastery[topic].accuracy = Math.min(Math.max(accuracy, 0), 100)
  mastery[topic].attempts += 1
  mastery[topic].subject = subject // ✅ Ensure subject is stored
  mastery[topic].updatedAt = new Date().toISOString()
  mastery[topic].synced = false
  saveMastery(mastery)
  addPendingChange('UPDATE_MASTERY', { topic, data: mastery[topic] })
  return mastery
}

export const getMasteryBySubject = (subject) => {
  const mastery = getMastery()
  const result = {}
  for (const [topic, data] of Object.entries(mastery)) {
    if (data.subject === subject || !data.subject) {
      result[topic] = data
    }
  }
  return result
}

// ============================================================
// LESSONS
// ============================================================

export const getLessons = () => safeGet(STORAGE_KEYS.LESSONS, [])

export const saveLessons = (lessons) => safeSet(STORAGE_KEYS.LESSONS, lessons)

export const markLessonComplete = (lessonId) => {
  const lessons = getLessons()
  const updated = lessons.map(l => {
    if (l.id === lessonId) {
      const completed = { ...l, completed: true, completedAt: new Date().toISOString(), synced: false }
      addPendingChange('COMPLETE_LESSON', completed)
      return completed
    }
    return l
  })
  saveLessons(updated)
  invalidateHyeTutorCache()
  return updated
}

export const getLessonProgress = () => {
  const lessons = getLessons()
  const total = lessons.length
  const completed = lessons.filter(l => l.completed).length
  return { total, completed, progress: total > 0 ? Math.round((completed / total) * 100) : 0 }
}

// ============================================================
// PLANNER
// ============================================================

export const getPlanner = () => safeGet(STORAGE_KEYS.PLANNER, null)

export const savePlanner = (planner) => {
  const updated = { ...planner, updatedAt: new Date().toISOString(), synced: false }
  safeSet(STORAGE_KEYS.PLANNER, updated)
  addPendingChange('UPDATE_PLANNER', updated)
  invalidateHyeTutorCache()
  return updated
}

export const updatePlannerProgress = (day, completed = true) => {
  const planner = getPlanner()
  if (!planner) return null
  if (!planner.progress) planner.progress = {}
  planner.progress[day] = { completed, completedAt: new Date().toISOString() }
  planner.updatedAt = new Date().toISOString()
  planner.synced = false
  savePlanner(planner)
  invalidateHyeTutorCache()
  return planner
}

// ============================================================
// SETTINGS
// ============================================================

const DEFAULT_SETTINGS = { darkMode: false, notifications: true, studyReminders: true, soundEffects: true }

export const getSettings = () => safeGet(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS)

export const saveSettings = (settings) => safeSet(STORAGE_KEYS.SETTINGS, settings)

export const updateSettings = (updates) => {
  const settings = getSettings()
  const updated = { ...settings, ...updates, updatedAt: new Date().toISOString() }
  saveSettings(updated)
  addPendingChange('UPDATE_SETTINGS', updated)
  return updated
}

// ============================================================
// PROFILE
// ============================================================

export const getProfile = () => safeGet(STORAGE_KEYS.PROFILE, {})

export const saveProfile = (profile) => safeSet(STORAGE_KEYS.PROFILE, profile)

export const updateProfile = (updates) => {
  const profile = getProfile()
  const updated = { ...profile, ...updates, updatedAt: new Date().toISOString(), synced: false }
  saveProfile(updated)
  addPendingChange('UPDATE_PROFILE', updated)
  return updated
}

// ============================================================
// SYNC MANAGEMENT
// ============================================================

export const getLastSync = () => localStorage.getItem(STORAGE_KEYS.LAST_SYNC) || null

export const setLastSync = (timestamp) => {
  localStorage.setItem(STORAGE_KEYS.LAST_SYNC, timestamp || new Date().toISOString())
}

export const getSyncStatus = () => {
  const lastSync = getLastSync()
  const pending = getPendingChanges()
  const inProgress = localStorage.getItem(STORAGE_KEYS.SYNC_IN_PROGRESS) === 'true'
  return {
    lastSync,
    pendingChanges: pending.length,
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    needsSync: pending.length > 0 || !lastSync,
    inProgress
  }
}

export const startSync = () => {
  localStorage.setItem(STORAGE_KEYS.SYNC_IN_PROGRESS, 'true')
}

export const endSync = () => {
  localStorage.removeItem(STORAGE_KEYS.SYNC_IN_PROGRESS)
  setLastSync()
}

// ============================================================
// PENDING CHANGES QUEUE
// ============================================================

export const getPendingChanges = () => safeGet(STORAGE_KEYS.PENDING_CHANGES, [])

export const savePendingChanges = (queue) => safeSet(STORAGE_KEYS.PENDING_CHANGES, queue)

export const addPendingChange = (action, data) => {
  const queue = getPendingChanges()
  queue.push({
    id: `sync_${Date.now()}`,
    action,
    data,
    timestamp: new Date().toISOString(),
    retries: 0,
  })
  savePendingChanges(queue)
  return queue
}

export const removePendingChange = (id) => {
  const queue = getPendingChanges()
  const filtered = queue.filter(item => item.id !== id)
  savePendingChanges(filtered)
  return filtered
}

export const clearPendingChanges = () => {
  safeRemove(STORAGE_KEYS.PENDING_CHANGES)
  return []
}

export const getPendingCount = () => {
  return getPendingChanges().length
}

// ============================================================
// CONFLICT RESOLUTION
// ============================================================

export const resolveConflict = (localData, serverData, strategy = 'server-wins') => {
  switch (strategy) {
    case 'server-wins':
      return serverData
    case 'local-wins':
      return localData
    case 'merge':
      if (Array.isArray(localData) && Array.isArray(serverData)) {
        const merged = [...serverData]
        localData.forEach(local => {
          const exists = merged.some(m => m.id === local.id)
          if (!exists) merged.push(local)
        })
        return merged
      }
      if (typeof localData === 'object' && typeof serverData === 'object') {
        return { ...serverData, ...localData }
      }
      return serverData
    case 'keep-both':
      return { local: localData, server: serverData }
    default:
      return serverData
  }
}

// ============================================================
// STORAGE QUOTA CHECK
// ============================================================

export const getStorageSize = () => {
  let total = 0
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += localStorage[key].length * 2
    }
  }
  return total
}

export const getStorageQuota = () => {
  try {
    const test = 'a'.repeat(1024 * 1024)
    localStorage.setItem('_quota_test', test)
    localStorage.removeItem('_quota_test')
    return { available: true, used: getStorageSize() }
  } catch (e) {
    return {
      available: false,
      error: e.message || 'Storage quota exceeded',
      used: getStorageSize()
    }
  }
}

export const getStorageSummary = () => {
  const quota = getStorageQuota()
  const totalItems = localStorage.length
  return {
    ...quota,
    totalItems,
    estimatedSize: getStorageSize(),
    keys: Object.keys(localStorage),
  }
}

// ============================================================
// CLEAR ALL DATA (LOGOUT)
// ============================================================

export const clearAllAppData = (keepSettings = true) => {
  const keys = [
    STORAGE_KEYS.BOOKMARKS,
    STORAGE_KEYS.MISTAKES,
    STORAGE_KEYS.SESSIONS,
    STORAGE_KEYS.RESULTS,
    STORAGE_KEYS.GAMIFICATION,
    STORAGE_KEYS.MASTERY,
    STORAGE_KEYS.LESSONS,
    STORAGE_KEYS.PLANNER,
    STORAGE_KEYS.PROFILE,
    STORAGE_KEYS.LAST_LOGIN,
    STORAGE_KEYS.LAST_SYNC,
    STORAGE_KEYS.PENDING_CHANGES,
    STORAGE_KEYS.SYNC_IN_PROGRESS,
    STORAGE_KEYS.HYETUTOR_CACHE,
  ]

  const settings = keepSettings ? getSettings() : null

  keys.forEach(key => safeRemove(key))

  if (keepSettings && settings) {
    saveSettings(settings)
  }

  return { success: true, cleared: keys.length }
}

// ============================================================
// DATA VERSIONING
// ============================================================

export const getDataVersion = () => {
  return localStorage.getItem(STORAGE_KEYS.DATA_VERSION) || '1.0.0'
}

export const setDataVersion = (version) => {
  localStorage.setItem(STORAGE_KEYS.DATA_VERSION, version)
}

export const migrateData = (fromVersion, toVersion) => {
  const migrations = {
    '1.0.0': () => {
      const gamification = getGamification()
      if (gamification && !gamification.totalXP) {
        gamification.totalXP = gamification.xp
        saveGamification(gamification)
      }
    }
  }

  const currentVersion = getDataVersion()
  if (currentVersion !== toVersion) {
    if (migrations[currentVersion]) {
      migrations[currentVersion]()
      setDataVersion(toVersion)
    }
  }
}

export const checkDataVersion = () => {
  const current = getDataVersion()
  if (current !== CURRENT_VERSION) {
    migrateData(current, CURRENT_VERSION)
    return { migrated: true, from: current, to: CURRENT_VERSION }
  }
  return { migrated: false, version: current }
}

// ============================================================
// EXPORT/IMPORT DATA (BACKUP)
// ============================================================

export const exportAllData = () => {
  const data = {}
  const keys = [
    STORAGE_KEYS.BOOKMARKS,
    STORAGE_KEYS.MISTAKES,
    STORAGE_KEYS.SESSIONS,
    STORAGE_KEYS.RESULTS,
    STORAGE_KEYS.GAMIFICATION,
    STORAGE_KEYS.MASTERY,
    STORAGE_KEYS.LESSONS,
    STORAGE_KEYS.PLANNER,
    STORAGE_KEYS.SETTINGS,
    STORAGE_KEYS.PROFILE,
    STORAGE_KEYS.PENDING_CHANGES,
  ]

  keys.forEach(key => {
    const value = localStorage.getItem(key)
    if (value) data[key] = JSON.parse(value)
  })

  return {
    version: CURRENT_VERSION,
    exportedAt: new Date().toISOString(),
    data
  }
}

export const importAllData = (exportData) => {
  if (!exportData || !exportData.data) {
    throw new Error('Invalid export data')
  }

  Object.entries(exportData.data).forEach(([key, value]) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(`[Storage] Failed to import ${key}:`, e)
    }
  })

  setDataVersion(exportData.version || CURRENT_VERSION)
  return { success: true, imported: Object.keys(exportData.data).length }
}

// ============================================================
// STORAGE EVENT LISTENERS (Multi-tab sync)
// ============================================================

export const onStorageChange = (callback) => {
  const handler = (event) => {
    if (event.key && event.key.startsWith('hyelearner_')) {
      callback({
        key: event.key,
        oldValue: event.oldValue ? JSON.parse(event.oldValue) : null,
        newValue: event.newValue ? JSON.parse(event.newValue) : null,
        storageArea: event.storageArea,
      })
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }
  return () => {}
}

// ============================================================
// BATCH OPERATIONS
// ============================================================

export const batchSave = (operations) => {
  const results = {}
  for (const [key, value] of Object.entries(operations)) {
    const storageKey = STORAGE_KEYS[key] || key
    results[key] = safeSet(storageKey, value)
  }
  return results
}

export const batchGet = (keys) => {
  const results = {}
  keys.forEach(key => {
    const storageKey = STORAGE_KEYS[key] || key
    results[key] = safeGet(storageKey)
  })
  return results
}

// ============================================================
// STORAGE HEALTH CHECK
// ============================================================

export const isStorageHealthy = () => {
  try {
    const testKey = '_health_test'
    const testValue = { test: true, timestamp: Date.now() }
    safeSet(testKey, testValue)
    const retrieved = safeGet(testKey)
    safeRemove(testKey)
    return retrieved && retrieved.test === true
  } catch {
    return false
  }
}

// ============================================================
// EXPORT ALL
// ============================================================

export const storage = {
  // Bookmarks
  getBookmarks,
  saveBookmarks,
  addBookmark,
  removeBookmark,
  updateBookmarkNote,

  // Mistakes
  getMistakes,
  saveMistakes,
  addMistake,
  resolveMistake,
  clearMistakes,

  // Sessions
  getSessions,
  saveSessions,
  addSession,
  updateSession,

  // Results
  getResults,
  saveResults,
  addResult,

  // Gamification
  getGamification,
  saveGamification,
  updateStreak,
  addXP,
  addBadge,

  // Mastery
  getMastery,
  saveMastery,
  updateMastery,
  getMasteryBySubject,

  // Lessons
  getLessons,
  saveLessons,
  markLessonComplete,
  getLessonProgress,

  // Planner
  getPlanner,
  savePlanner,
  updatePlannerProgress,

  // Settings
  getSettings,
  saveSettings,
  updateSettings,

  // Profile
  getProfile,
  saveProfile,
  updateProfile,

  // Sync Management
  getLastSync,
  setLastSync,
  getSyncStatus,
  startSync,
  endSync,

  // Pending Changes
  getPendingChanges,
  savePendingChanges,
  addPendingChange,
  removePendingChange,
  clearPendingChanges,
  getPendingCount,

  // Conflict Resolution
  resolveConflict,

  // Storage Management
  getStorageSize,
  getStorageQuota,
  getStorageSummary,
  clearAllAppData,

  // Data Versioning
  getDataVersion,
  setDataVersion,
  checkDataVersion,

  // Backup
  exportAllData,
  importAllData,

  // Events
  onStorageChange,

  // Batch
  batchSave,
  batchGet,

  // Health
  isStorageHealthy,

  // HyeTutor
  invalidateHyeTutorCache,
  getTodayInUserTimezone,
  getNowInUserTimezone,
}

export default storage