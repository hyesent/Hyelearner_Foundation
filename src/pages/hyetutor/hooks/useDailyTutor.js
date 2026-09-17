// ============================================================
// HYELEARNER: DAILY TUTOR HOOK
// localStorage only — hydrate fills the cache
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../../../hooks'
import { ai as aiService } from '../../../services'

const CACHE_KEY = 'hyelearner_daily_tutor_v1'
const STUDY_PLAN_KEY = 'hyelearner_study_plan_v2'

const getTodayKey = () => new Date().toISOString().split('T')[0]

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return { sessions: {} }
    const parsed = JSON.parse(raw)
    if (!parsed.sessions) parsed.sessions = {}
    return parsed
  } catch { return { sessions: {} } }
}

const writeCache = (cache) => {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)) } catch {}
}

const readStudyPlan = () => {
  try {
    const raw = localStorage.getItem(STUDY_PLAN_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

const getTodayPlanEntry = (plan) => {
  if (!plan) return null
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const schedule = plan?.plan?.weekly_schedule || []
  const entry = schedule.find((d) => d.day?.toLowerCase() === todayName.toLowerCase())
  return entry?.topics?.[0] || null
}

const getWeakAreas = () => {
  try {
    const mastery = JSON.parse(localStorage.getItem('hyelearner_mastery') || '{}')
    return Object.entries(mastery)
      .map(([topic, d]) => ({ topic, subject: d.subject || 'General', accuracy: d.accuracy || 0 }))
      .filter((t) => t.accuracy < 60)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 5)
  } catch { return [] }
}

const getRecentMistakes = (topic, limit = 5) => {
  try {
    const mistakes = JSON.parse(localStorage.getItem('hyelearner_mistakes') || '[]')
    return mistakes
      .filter((m) => m.topic === topic)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit)
      .map((m) => ({ topic: m.topic, question: m.question, user_answer: m.userAnswer, correct_answer: m.correctAnswer }))
  } catch { return [] }
}

const getRecentReflections = (subject, limit = 5) => {
  const cache = readCache()
  return Object.values(cache.sessions || {})
    .filter((s) => s.subject === subject && s.reflection)
    .sort((a, b) => new Date(b.reflection.submittedAt || 0) - new Date(a.reflection.submittedAt || 0))
    .slice(0, limit)
    .map((s) => ({ topic: s.topic, date: s.date, feeling: s.reflection.feeling, note: s.reflection.note || null }))
}

export function useDailyTutor() {
  const { user } = useAuth()
  const [todaySession, setTodaySession] = useState(null)
  const [readOnlySession, setReadOnlySession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState(null)

  const reload = useCallback(() => {
    const cache = readCache()
    const today = getTodayKey()
    setTodaySession(cache.sessions[today] || null)
    setLoading(false)
  }, [])

  useEffect(() => {
    reload()
    const onHydrate = () => reload()
    window.addEventListener('hydration:done', onHydrate)
    return () => window.removeEventListener('hydration:done', onHydrate)
  }, [reload])

  const startToday = useCallback(async () => {
    setError(null)
    setReadOnlySession(null)
    if (!user?.id) { setError('Please sign in to use Daily Tutor.'); return null }

    const cache = readCache()
    const today = getTodayKey()
    if (cache.sessions[today]) { setTodaySession(cache.sessions[today]); return cache.sessions[today] }

    const plan = readStudyPlan()
    const planEntry = getTodayPlanEntry(plan)
    if (!plan || !planEntry) { setError('No Study Plan for today. Set up your plan first.'); return null }

    setGenerating(true)

    try {
      const subject = planEntry.subject
      const topic = planEntry.topic
      const examType = plan?.exam_info?.exam_type || plan?.exam_type || 'jamb'
      const targetScore = plan?.plan?.summary?.target_score || '300+'
      const gamification = JSON.parse(localStorage.getItem('hyelearner_gamification') || '{}')
      const userLevel = gamification.level || 1
      const studyStyle = plan?.plan?.study_style || 'balanced'
      const difficultyPreference = plan?.plan?.difficulty || plan?.difficulty || 'balanced'
      const userId = String(user.id)

      const weakAreas = getWeakAreas()
      const recentMistakes = getRecentMistakes(topic)
      const reflections = getRecentReflections(subject)

      const schedule = plan?.plan?.weekly_schedule || []
      const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
      const todayIndex = schedule.findIndex((d) => d.day?.toLowerCase() === todayName.toLowerCase())
      const day = todayIndex + 1
      const totalDays = plan?.plan?.summary?.days_remaining || 52

      const lessonRes = await aiService.dailyTutor.generateLesson({
        user_id: userId, date: today, topic, subject, exam_type: examType,
        target_score: targetScore, user_level: userLevel, study_style: studyStyle,
        difficulty_preference: difficultyPreference,
        weak_areas: weakAreas, recent_mistakes: recentMistakes, recent_reflections: reflections,
        plan_context: { day, total_days: totalDays, weekly_focus: planEntry.focus || '', hours_allocated: planEntry.hours || 0.5 },
      })

      if (!lessonRes?.success || !lessonRes.lesson) throw new Error(lessonRes?.error || 'Failed to generate lesson')

      const quizRes = await aiService.dailyTutor.generateQuiz({
        user_id: userId, date: today, topic, subject, exam_type: examType,
        user_level: userLevel, question_count: 5,
        lesson_key_points: lessonRes.lesson.key_points || [],
        lesson_section_headings: (lessonRes.lesson.sections || []).map((s) => s.heading),
        recent_mistakes: recentMistakes,
      })

      if (!quizRes?.success || !quizRes.quiz) throw new Error(quizRes?.error || 'Failed to generate quiz')

      const session = {
        date: today, subject, topic,
        lesson: lessonRes.lesson, quiz: quizRes.quiz,
        result: null, reflection: null,
        status: 'in_progress', currentStep: 'lesson',
        generatedAt: new Date().toISOString(),
      }

      cache.sessions[today] = session
      writeCache(cache)
      setTodaySession(session)
      window.dispatchEvent(new Event('hydration:done'))
      return session
    } catch (err) {
      console.error('Daily tutor start error:', err)
      setError(err.message || "Failed to start today's lesson")
      return null
    } finally { setGenerating(false) }
  }, [user?.id])

  const setStep = useCallback((step) => {
    if (readOnlySession) return
    const cache = readCache()
    const entry = cache.sessions[getTodayKey()]
    if (!entry) return
    entry.currentStep = step
    writeCache(cache)
    setTodaySession({ ...entry })
  }, [readOnlySession])

  const submitQuiz = useCallback((answers) => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry?.quiz) return null

    const questions = entry.quiz.questions || []
    let correct = 0, wrong = 0
    const wrongList = []
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++
      else { wrong++; wrongList.push({ q, userAnswer: answers[q.id] }) }
    })

    const total = questions.length
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
    const xpEarned = correct * 10
    const result = { correct, wrong, total, accuracy, xpEarned, completedAt: new Date().toISOString() }

    const sessions = JSON.parse(localStorage.getItem('hyelearner_sessions') || '[]')
    sessions.push({
      id: `daily_tutor_${today}`, subject: entry.subject, topic: entry.topic,
      totalQuestions: total, questions, answers,
      score: correct, total, correct, wrong, skipped: 0, accuracy, xpEarned,
      timeTaken: 900, mode: 'daily_tutor', status: 'completed',
      completedAt: new Date().toISOString(), startedAt: entry.generatedAt,
    })
    localStorage.setItem('hyelearner_sessions', JSON.stringify(sessions))

    const gam = JSON.parse(localStorage.getItem('hyelearner_gamification') || '{"xp":0,"level":1,"streak":0,"badges":[],"totalXP":0}')
    gam.xp = (gam.xp || 0) + xpEarned
    gam.totalXP = (gam.totalXP || 0) + xpEarned
    gam.level = gam.xp < 1000 ? Math.floor(gam.xp / 100) + 1 : 10 + Math.floor((gam.xp - 1000) / 200)
    localStorage.setItem('hyelearner_gamification', JSON.stringify(gam))

    const mistakes = JSON.parse(localStorage.getItem('hyelearner_mistakes') || '[]')
    wrongList.forEach(({ q, userAnswer }) => {
      mistakes.push({
        id: `mist_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        questionId: q.id, userAnswer, correctAnswer: q.answer,
        question: q.question, options: q.options,
        topic: entry.topic, subject: entry.subject,
        explanation: q.explanation || '', isResolved: false,
        createdAt: new Date().toISOString(),
      })
    })
    localStorage.setItem('hyelearner_mistakes', JSON.stringify(mistakes))

    entry.result = result
    entry.answers = answers
    entry.currentStep = 'result'
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })

    aiService.dailyTutor.submitQuiz(today, answers).catch(() => {})
    window.dispatchEvent(new Event('hydration:done'))
    return result
  }, [])

  const submitReflection = useCallback((feeling, note = '') => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry) return
    entry.reflection = { feeling, note: note.trim() || null, submittedAt: new Date().toISOString() }
    entry.status = 'completed'
    entry.currentStep = 'done'
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })
    aiService.dailyTutor.submitReflection(today, feeling, note).catch(() => {})
    window.dispatchEvent(new Event('hydration:done'))
  }, [])

  const skipReflection = useCallback(() => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry) return
    entry.reflection = { feeling: null, note: null, skipped: true, submittedAt: new Date().toISOString() }
    entry.status = 'completed'
    entry.currentStep = 'done'
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })
    window.dispatchEvent(new Event('hydration:done'))
  }, [])

  const getHistory = useCallback((limit = 60) => {
    const cache = readCache()
    return Object.values(cache.sessions || {})
      .filter((s) => s.status === 'completed' && s.result)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }, [])

  const openPastSession = useCallback((dateKey) => {
    const cache = readCache()
    const entry = cache.sessions?.[dateKey]
    if (!entry) { setError('Session not found'); return null }
    setReadOnlySession(entry)
    return entry
  }, [])

  const closePastSession = useCallback(() => setReadOnlySession(null), [])

  return {
    todaySession, readOnlySession, isReadOnly: !!readOnlySession,
    loading, generating, error,
    startToday, setStep, submitQuiz, submitReflection, skipReflection,
    getHistory, openPastSession, closePastSession,
  }
}
