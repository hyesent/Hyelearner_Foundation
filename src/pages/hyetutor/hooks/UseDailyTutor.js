// ============================================================
// HYELEARNER: DAILY TUTOR HOOK
// Manages daily lesson + quiz generation, cache, and write-back
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useCallback } from 'react'
import { storage } from '../../../storage'
import { ai } from '../../../services'

const CACHE_KEY = 'hyelearner_daily_tutor_v1'
const STUDY_PLAN_KEY = 'hyelearner_study_plan_v2'

// ============================================================
// HELPERS
// ============================================================

const getTodayKey = () => new Date().toISOString().split('T')[0]

const readCache = () => {
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

const writeCache = (cache) => {
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
  // Pick highest priority topic if priority exists, else first
  return todayEntry.topics[0]
}

const getWeakAreas = () => {
  try {
    const mastery = storage.getMastery() || {}
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
    const mistakes = storage.getMistakes() || []
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

// Reflections from same subject, most recent 5
const getRecentReflections = (subject, limit = 5) => {
  const cache = readCache()
  const sessions = Object.values(cache.sessions || {})

  return sessions
    .filter((s) => s.subject === subject && s.reflection)
    .sort(
      (a, b) =>
        new Date(b.reflection.submittedAt).getTime() -
        new Date(a.reflection.submittedAt).getTime()
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
  const [todaySession, setTodaySession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState(null)

  // Load today's cached session on mount
  useEffect(() => {
    const cache = readCache()
    const today = getTodayKey()
    setTodaySession(cache.sessions[today] || null)
    setLoading(false)
  }, [])

  // -----------------------------------------------------------
  // Generate or load today's lesson + quiz
  // -----------------------------------------------------------
  const startToday = useCallback(async () => {
    setError(null)

    const cache = readCache()
    const today = getTodayKey()

    // Already cached today → return it
    if (cache.sessions[today]) {
      setTodaySession(cache.sessions[today])
      return cache.sessions[today]
    }

    // Check plan
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
      const examType =
        plan?.exam_info?.exam_type || plan?.exam_type || 'jamb'
      const targetScore = plan?.plan?.summary?.target_score || '300+'
      const gamification = storage.getGamification() || {}
      const userLevel = gamification.level || 1
      const studyStyle = plan?.plan?.study_style || 'balanced'
      const difficultyPreference =
        plan?.plan?.difficulty || plan?.difficulty || 'balanced'

      const weakAreas = getWeakAreas()
      const recentMistakes = getRecentMistakes(topic)
      const reflections = getRecentReflections(subject)

      // Build plan context
      const schedule = plan?.plan?.weekly_schedule || []
      const todayIndex = schedule.findIndex(
        (d) => d.day?.toLowerCase() === new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
      )
      const day = todayIndex + 1
      const totalDays = plan?.plan?.summary?.days_remaining || 52

      // 1. Generate lesson
      const lessonRes = await ai.dailyTutor.generateLesson({
        user_id: gamification.userId || null,
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

      // 2. Generate quiz from lesson
      const quizRes = await ai.dailyTutor.generateQuiz({
        user_id: gamification.userId || null,
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

      // 3. Cache it
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

      cache.sessions[today] = session
      writeCache(cache)
      setTodaySession(session)

      return session
    } catch (err) {
      console.error('Daily tutor start error:', err)
      setError(err.message || 'Failed to start today’s lesson')
      return null
    } finally {
      setGenerating(false)
    }
  }, [])

  // -----------------------------------------------------------
  // Update step (lesson / quiz / result / reflection)
  // -----------------------------------------------------------
  const setStep = useCallback((step) => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry) return
    entry.currentStep = step
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })
  }, [])

  // -----------------------------------------------------------
  // Submit quiz answers
  // -----------------------------------------------------------
  const submitQuiz = useCallback((answers) => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry || !entry.quiz) return null

    const questions = entry.quiz.questions || []
    let correct = 0
    let wrong = 0
    const wrongList = []

    questions.forEach((q) => {
      const userAnswer = answers[q.id]
      if (userAnswer === q.answer) {
        correct++
      } else {
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

    // ---- Write back to storage ----
    const scoreData = {
      score: correct,
      total,
      correct,
      wrong,
      skipped: 0,
      accuracy,
    }

    storage.addSession({
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

    storage.addResult({
      sessionId: `daily_tutor_${today}`,
      subject: entry.subject,
      score: correct,
      total,
      accuracy,
      date: new Date().toISOString(),
      mode: 'daily_tutor',
      xpEarned,
    })

    storage.addXP(xpEarned)
    storage.updateMastery(entry.topic, accuracy, entry.subject)

    // Push wrong answers into Mistake Book
    wrongList.forEach(({ q, userAnswer }) => {
      storage.addMistake({
        questionId: q.id,
        userAnswer,
        correctAnswer: q.answer,
        question: q.question,
        options: q.options,
        topic: entry.topic,
        subject: entry.subject,
        explanation: q.explanation || '',
        createdAt: new Date().toISOString(),
      })
    })

    // ---- Save to cache ----
    entry.result = result
    entry.answers = answers
    entry.currentStep = 'result'
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })

    return result
  }, [])

  // -----------------------------------------------------------
  // Submit reflection
  // -----------------------------------------------------------
  const submitReflection = useCallback((feeling, note = '') => {
    const today = getTodayKey()
    const cache = readCache()
    const entry = cache.sessions[today]
    if (!entry) return

    entry.reflection = {
      feeling, // 'confusing' | 'okay' | 'clear'
      note: note.trim() || null,
      submittedAt: new Date().toISOString(),
    }
    entry.status = 'completed'
    entry.currentStep = 'done'
    cache.sessions[today] = entry
    writeCache(cache)
    setTodaySession({ ...entry })
  }, [])

  // -----------------------------------------------------------
  // Skip reflection (lesson still counts as complete)
  // -----------------------------------------------------------
  const skipReflection = useCallback(() => {
    const today = getTodayKey()
    const cache = readCache()
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
    writeCache(cache)
    setTodaySession({ ...entry })
  }, [])

  // -----------------------------------------------------------
  // History
  // -----------------------------------------------------------
  const getHistory = useCallback((limit = 20) => {
    const cache = readCache()
    return Object.values(cache.sessions || {})
      .filter((s) => s.status === 'completed' && s.result)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }, [])

  return {
    // state
    todaySession,
    loading,
    generating,
    error,

    // actions
    startToday,
    setStep,
    submitQuiz,
    submitReflection,
    skipReflection,
    getHistory,
  }
  }
