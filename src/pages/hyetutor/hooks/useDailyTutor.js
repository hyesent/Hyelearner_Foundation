// ============================================================
// HYELEARNER: DAILY TUTOR HOOK (BACKEND-BACKED)
// Reads from hydration, writes via services
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../../../hooks'
import { useHydration } from '../../../context'
import { ai as aiService } from '../../../services'

const CACHE_KEY = 'hyelearner_daily_tutor_v1'
const STUDY_PLAN_KEY = 'hyelearner_study_plan_v2'

// ============================================================
// HELPERS
// ============================================================

const getTodayKey = () => new Date().toISOString().split('T')[0]

const readLocalCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return { sessions: {} }
    const parsed = JSON.parse(raw)
    if (!parsed.sessions) parsed.sessions = {}
    return parsed
  } catch {
    return { sessions: {} }
  }
}

const writeLocalCache = (cache) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch (e) {
    console.error('Failed to write daily tutor cache:', e)
  }
}

const readStudyPlan = () => {
  try {
    const raw = localStorage.getItem(STUDY_PLAN_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const getTodayPlanEntry = (plan) => {
  if (!plan) return null
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const schedule = plan?.plan?.weekly_schedule || []
  const todayEntry = schedule.find(
    (d) => d.day?.toLowerCase() === todayName.toLowerCase()
  )
  if (!todayEntry || !todayEntry.topics?.length) return null
  return todayEntry.topics[0]
}

const getWeakAreas = () => {
  try {
    const raw = localStorage.getItem('hyelearner_mastery')
    const mastery = raw ? JSON.parse(raw) : {}
    return Object.entries(mastery)
      .map(([topic, data]) => ({
        topic,
        subject: data.subject || 'General',
        accuracy: data.accuracy || 0,
      }))
      .filter((t) => t.accuracy < 60)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 5)
  } catch {
    return []
  }
}

const getRecentMistakes = (topic, limit = 5) => {
  try {
    const raw = localStorage.getItem('hyelearner_mistakes')
    const mistakes = raw ? JSON.parse(raw) : []
    return mistakes
      .filter((m) => m.topic === topic)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, limit)
      .map((m) => ({
        topic: m.topic,
        question: m.question,
        user_answer: m.userAnswer,
        correct_answer: m.correctAnswer,
      }))
  } catch {
    return []
  }
}

const getRecentReflections = (subject, limit = 5) => {
  const cache = readLocalCache()
  const sessions = Object.values(cache.sessions || {})

  return sessions
    .filter((s) => s.subject === subject && s.reflection)
    .sort(
      (a, b) =>
        new Date(b.reflection.submittedAt || 0).getTime() -
        new Date(a.reflection.submittedAt || 0).getTime()
    )
    .slice(0, limit)
    .map((s) => ({
      topic: s.topic,
      date: s.date,
      feeling: s.reflection.feeling,
      note: s.reflection.note || null,
    }))
}

// ============================================================
// HOOK
// ============================================================

export function useDailyTutor() {
  const { user } = useAuth()
  const { dailyTutorToday, refreshHydration } = useHydration()

  const [todaySession, setTodaySession] = useState(null)
  const [readOnlySession, setReadOnlySession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState(null)

  // Sync todaySession from hydration + local cache
  useEffect(() => {
    const today = getTodayKey()
    const cache = readLocalCache()
    const localSession = cache.sessions[today]

    // Prefer hydrated (backend) version
    if (dailyTutorToday) {
      setTodaySession(dailyTutorToday)
      // Mirror to local cache
      cache.sessions[today] = dailyTutorToday
      writeLocalCache(cache)
    } else if (localSession) {
      setTodaySession(localSession)
    } else {
      setTodaySession(null)
    }
    setLoading(false)
  }, [dailyTutorToday])

  // -----------------------------------------------------------
  // Start / generate today's lesson + quiz
  // -----------------------------------------------------------
  const startToday = useCallback(async () => {
    setError(null)
    setReadOnlySession(null)

    if (!user?.id) {
      setError('Please sign in to use Daily Tutor.')
      return null
    }

    // If we already have today's session (from hydration or local), use it
    const today = getTodayKey()
    const cache = readLocalCache()
    const existing = cache.sessions[today]
    if (existing) {
      setTodaySession(existing)
      return existing
    }
    if (dailyTutorToday) {
      setTodaySession(dailyTutorToday)
      return dailyTutorToday
    }

    const plan = readStudyPlan()
    const planEntry = getTodayPlanEntry(plan)
    if (!plan || !planEntry) {
      setError('No Study Plan for today. Set up your plan first.')
      return null
    }

    setGenerating(true)

    try {
      const subject = planEntry.subject
      const topic = planEntry.topic
      const examType = plan?.exam_info?.exam_type || plan?.exam_type || 'jamb'
      const targetScore = plan?.plan?.summary?.target_score || '300+'
      const gamification = JSON.parse(localStorage.getItem('hyelearner_gamification') || '{}')
      const userLevel = gamification.level || 1
      const studyStyle = plan?.plan?.study_style || 'balanced'
      const difficultyPreference =
        plan?.plan?.difficulty || plan?.difficulty || 'balanced'

      const userId = String(user.id)

      const weakAreas = getWeakAreas()
      const recentMistakes = getRecentMistakes(topic)
      const reflections = getRecentReflections(subject)

      const schedule = plan?.plan?.weekly_schedule || []
      const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
      const todayIndex = schedule.findIndex(
        (d) => d.day?.toLowerCase() === todayName.toLowerCase()
      )
      const day = todayIndex + 1
      const totalDays = plan?.plan?.summary?.days_remaining || 52

      // 1. Lesson (backend generates or returns cached)
      const lessonRes = await aiService.dailyTutor.generateLesson({
        user_id: userId,
        date: today,
        topic,
        subject,
        exam_type: examType,
        target_score: targetScore,
        user_level: userLevel,
        study_style: studyStyle,
        difficulty_preference: difficultyPreference,
        weak_areas: weakAreas,
        recent_mistakes: recentMistakes,
        recent_reflections: reflections,
        plan_context: {
          day,
          total_days: totalDays,
          weekly_focus: planEntry.focus || '',
          hours_allocated: planEntry.hours || 0.5,
        },
      })

      if (!lessonRes?.success || !lessonRes.lesson) {
        throw new Error(lessonRes?.error || 'Failed to generate lesson')
      }

      // 2. Quiz
      const quizRes = await aiService.dailyTutor.generateQuiz({
        user_id: userId,
        date: today,
        topic,
        subject,
        exam_type: examType,
        user_level: userLevel,
        question_count: 5,
        lesson_key_points: lessonRes.lesson.key_points || [],
        lesson_section_headings: (lessonRes.lesson.sections || []).map(
          (s) => s.heading
        ),
        recent_mistakes: recentMistakes,
      })

      if (!quizRes?.success || !quizRes.quiz) {
        throw new Error(quizRes?.error || 'Failed to generate quiz')
      }

      const session = {
        date: today,
        subject,
        topic,
        lesson: lessonRes.lesson,
        quiz: quizRes.quiz,
        result: null,
        reflection: null,
        status: 'in_progress',
        currentStep: 'lesson',
        generatedAt: new Date().toISOString(),
      }

      // Write to local cache for instant UI
      cache.sessions[today] = session
      writeLocalCache(cache)
      setTodaySession(session)

      // Refresh hydration in background (updates ai_usage count etc.)
      if (refreshHydration) refreshHydration().catch(() => {})

      return session
    } catch (err) {
      console.error('Daily tutor start error:', err)
      setError(err.message || "Failed to start today's lesson")
      return null
    } finally {
      setGenerating(false)
    }
  }, [user?.id, dailyTutorToday, refreshHydration])

  // -----------------------------------------------------------
  // Update step (local + backend sync)
  // -----------------------------------------------------------
  const setStep = useCallback((step) => {
    if (readOnlySession) return

    const today = getTodayKey()
    const cache = readLocalCache()
    const entry = cache.sessions[today]
    if (!entry) return
    entry.currentStep = step
    cache.sessions[today] = entry
    writeLocalCache(cache)
    setTodaySession({ ...entry })
  }, [readOnlySession])

  // -----------------------------------------------------------
  // Submit quiz (writes via backend, mirrors locally)
  // -----------------------------------------------------------
  const submitQuiz = useCallback(async (answers) => {
    const today = getTodayKey()
    const cache = readLocalCache()
    const entry = cache.sessions[today]
    if (!entry || !entry.quiz) return null

    const questions = entry.quiz.questions || []
    let correct = 0
    let wrong = 0
    const wrongList = []

    questions.forEach((q) => {
      const userAnswer = answers[q.id]
      if (userAnswer === q.answer) correct++
      else {
        wrong++
        wrongList.push({ q, userAnswer })
      }
    })

    const total = questions.length
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
    const xpEarned = correct * 10

    const result = {
      correct,
      wrong,
      total,
      accuracy,
      xpEarned,
      completedAt: new Date().toISOString(),
    }

    // ---- Local write (instant stat calcs) ----
    const sessions = JSON.parse(localStorage.getItem('hyelearner_sessions') || '[]')
    sessions.push({
      id: `daily_tutor_${today}`,
      subject: entry.subject,
      topic: entry.topic,
      totalQuestions: total,
      questions,
      answers,
      score: correct,
      total,
      correct,
      wrong,
      skipped: 0,
      accuracy,
      xpEarned,
      timeTaken: 0,
      mode: 'daily_tutor',
      status: 'completed',
      completedAt: new Date().toISOString(),
      startedAt: entry.generatedAt,
    })
    localStorage.setItem('hyelearner_sessions', JSON.stringify(sessions))

    const gamification = JSON.parse(localStorage.getItem('hyelearner_gamification') || '{"xp":0,"level":1,"streak":0,"badges":[],"totalXP":0}')
    gamification.xp = (gamification.xp || 0) + xpEarned
    gamification.totalXP = (gamification.totalXP || 0) + xpEarned
    gamification.level = gamification.xp < 1000
      ? Math.floor(gamification.xp / 100) + 1
      : 10 + Math.floor((gamification.xp - 1000) / 200)
    localStorage.setItem('hyelearner_gamification', JSON.stringify(gamification))

    const mistakes = JSON.parse(localStorage.getItem('hyelearner_mistakes') || '[]')
    wrongList.forEach(({ q, userAnswer }) => {
      mistakes.push({
        id: `mist_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        questionId: q.id,
        userAnswer,
        correctAnswer: q.answer,
        question: q.question,
        options: q.options,
        topic: entry.topic,
        subject: entry.subject,
        explanation: q.explanation || '',
        isResolved: false,
        createdAt: new Date().toISOString(),
      })
    })
    localStorage.setItem('hyelearner_mistakes', JSON.stringify(mistakes))

    entry.result = result
    entry.answers = answers
    entry.currentStep = 'result'
    cache.sessions[today] = entry
    writeLocalCache(cache)
    setTodaySession({ ...entry })

    // ---- Backend write (fire and forget) ----
    aiService.dailyTutor
      .submitQuiz(today, answers)
      .catch((err) => console.warn('Backend quiz submit failed:', err))

    return result
  }, [])

  // -----------------------------------------------------------
  // Reflection (local + backend)
  // -----------------------------------------------------------
  const submitReflection = useCallback((feeling, note = '') => {
    const today = getTodayKey()
    const cache = readLocalCache()
    const entry = cache.sessions[today]
    if (!entry) return

    entry.reflection = {
      feeling,
      note: note.trim() || null,
      submittedAt: new Date().toISOString(),
    }
    entry.status = 'completed'
    entry.currentStep = 'done'
    cache.sessions[today] = entry
    writeLocalCache(cache)
    setTodaySession({ ...entry })

    aiService.dailyTutor
      .submitReflection(today, feeling, note)
      .catch((err) => console.warn('Backend reflection submit failed:', err))
  }, [])

  const skipReflection = useCallback(() => {
    const today = getTodayKey()
    const cache = readLocalCache()
    const entry = cache.sessions[today]
    if (!entry) return
    entry.reflection = {
      feeling: null,
      note: null,
      skipped: true,
      submittedAt: new Date().toISOString(),
    }
    entry.status = 'completed'
    entry.currentStep = 'done'
    cache.sessions[today] = entry
    writeLocalCache(cache)
    setTodaySession({ ...entry })
  }, [])

  // -----------------------------------------------------------
  // History
  // -----------------------------------------------------------
  const getHistory = useCallback((limit = 60) => {
    const cache = readLocalCache()
    return Object.values(cache.sessions || {})
      .filter((s) => s.status === 'completed' && s.result)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }, [])

  // -----------------------------------------------------------
  // Read-only past session
  // -----------------------------------------------------------
  const openPastSession = useCallback((dateKey) => {
    const cache = readLocalCache()
    const entry = cache.sessions?.[dateKey]
    if (!entry) {
      setError('Session not found')
      return null
    }
    setReadOnlySession(entry)
    return entry
  }, [])

  const closePastSession = useCallback(() => {
    setReadOnlySession(null)
  }, [])

  return {
    todaySession,
    readOnlySession,
    isReadOnly: !!readOnlySession,
    loading,
    generating,
    error,

    startToday,
    setStep,
    submitQuiz,
    submitReflection,
    skipReflection,

    getHistory,
    openPastSession,
    closePastSession,
  }
}
