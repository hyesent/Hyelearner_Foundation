// ============================================================
// HYELEARNER: FOUNDATION — DICTIONARY PAGE
// Backend-proxied dictionary + Word of the Day + Vocabulary Builder
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Search,
  Volume2,
  Loader2,
  AlertCircle,
  Sparkles,
  Star,
  ExternalLink,
  Pause,
} from 'lucide-react'
import { LoadingScreen } from '../components/LoadingScreen'
import { WORD_OF_THE_DAY_DATA } from '../data/words'

// ✅ Read API base from env (same as services.js)
const API_BASE =
  import.meta.env.VITE_API_URL || 'https://hyelearner-api.onrender.com'

// ============================================================
// WORD OF THE DAY — picks from the shared 730-word list
// ============================================================

const getWordOfTheDay = () => {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 86400000
  )
  const year = today.getFullYear()
  const index =
    (dayOfYear + year * 31) % (WORD_OF_THE_DAY_DATA?.length || 1)
  return WORD_OF_THE_DAY_DATA?.[index] || null
}

// ============================================================
// DICTIONARY LOOKUP — proxied through our backend (no CORS)
// ============================================================

const fetchWordDefinition = async (word) => {
  const url = `${API_BASE}/dictionary/${encodeURIComponent(word)}`
  let res
  try {
    res = await fetch(url)
  } catch (e) {
    // network error (offline, DNS, etc.)
    throw new Error('Network error. Check your connection and try again.')
  }

  if (!res.ok) {
    let detail = 'Failed to fetch definition'
    try {
      const body = await res.json()
      if (body?.detail) detail = body.detail
    } catch {}
    if (res.status === 404) throw new Error('Word not found')
    if (res.status === 502) throw new Error('Dictionary service unavailable')
    throw new Error(detail)
  }

  return res.json()
}

// ============================================================
// DICTIONARY PAGE
// ============================================================

export function DictionaryPage() {
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('')
  const [wordData, setWordData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [wordOfTheDay, setWordOfTheDay] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay())

    const saved = localStorage.getItem('dictionary_recent')
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch {}
    }

    const favs = localStorage.getItem('dictionary_favorites')
    if (favs) {
      try {
        setFavorites(JSON.parse(favs))
      } catch {}
    }
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    await lookupWord(searchQuery.trim().toLowerCase())
  }

  const lookupWord = async (word) => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchWordDefinition(word)

      if (Array.isArray(data) && data.length > 0) {
        setWordData(data[0])

        const updated = [
          word,
          ...recentSearches.filter((w) => w !== word),
        ].slice(0, 10)
        setRecentSearches(updated)
        localStorage.setItem(
          'dictionary_recent',
          JSON.stringify(updated)
        )
      } else {
        setError('No definition found')
      }
    } catch (err) {
      setError(err.message || 'Something went wrong')
      setWordData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSpeak = (text) => {
    if (!('speechSynthesis' in window)) return

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.lang = 'en-US'

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const toggleFavorite = (word) => {
    const updated = favorites.includes(word)
      ? favorites.filter((w) => w !== word)
      : [...favorites, word]
    setFavorites(updated)
    localStorage.setItem(
      'dictionary_favorites',
      JSON.stringify(updated)
    )
  }

  const isFavorite = (word) => favorites.includes(word)

  const renderWordDetails = (data) => {
    if (!data) return null

    return (
      <div className="card" style={{ padding: 'var(--space-6)' }}>
        <div
          className="flex-between"
          style={{ marginBottom: 'var(--space-4)' }}
        >
          <div
            className="flex"
            style={{ gap: 'var(--space-3)', alignItems: 'center' }}
          >
            <h2 className="h2" style={{ margin: 0 }}>
              {data.word}
            </h2>
            {data.phonetic && (
              <span
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-muted)',
                }}
              >
                /{data.phonetic}/
              </span>
            )}
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button
              onClick={() => handleSpeak(data.word)}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              title="Pronounce"
            >
              {isSpeaking ? <Pause size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={() => toggleFavorite(data.word)}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              title={
                isFavorite(data.word) ? 'Remove favorite' : 'Add favorite'
              }
            >
              <Star
                size={20}
                style={{
                  fill: isFavorite(data.word)
                    ? 'var(--color-warning)'
                    : 'none',
                  color: isFavorite(data.word)
                    ? 'var(--color-warning)'
                    : 'var(--color-text-muted)',
                }}
              />
            </button>
          </div>
        </div>

        {data.phonetics &&
          data.phonetics.some((p) => p.audio) && (
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <audio
                controls
                style={{ width: '100%', height: 40 }}
                src={data.phonetics.find((p) => p.audio)?.audio}
              />
            </div>
          )}

        {data.meanings &&
          data.meanings.map((meaning, idx) => (
            <div key={idx} style={{ marginBottom: 'var(--space-4)' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-primary-light)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {meaning.partOfSpeech}
              </div>

              {meaning.definitions.map((def, i) => (
                <div
                  key={i}
                  style={{
                    padding: 'var(--space-2) var(--space-3)',
                    borderBottom:
                      i < meaning.definitions.length - 1
                        ? '1px solid var(--color-border-light)'
                        : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {i + 1}. {def.definition}
                  </div>
                  {def.example && (
                    <div
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic',
                        marginTop: 'var(--space-1)',
                        paddingLeft: 'var(--space-4)',
                      }}
                    >
                      "{def.example}"
                    </div>
                  )}
                  {def.synonyms?.length > 0 && (
                    <div
                      style={{
                        marginTop: 'var(--space-1)',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <strong>Synonyms:</strong> {def.synonyms.join(', ')}
                    </div>
                  )}
                  {def.antonyms?.length > 0 && (
                    <div
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <strong>Antonyms:</strong> {def.antonyms.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

        {data.sourceUrls?.length > 0 && (
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-muted)',
              marginTop: 'var(--space-3)',
            }}
          >
            <a
              href={data.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-primary)' }}
            >
              <ExternalLink
                size={14}
                style={{ display: 'inline' }}
              />{' '}
              Source
            </a>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        background: 'var(--color-background)',
        padding: 'var(--space-4) var(--space-6)',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div
          className="card flex-between"
          style={{ marginBottom: 'var(--space-6)' }}
        >
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div
              className="flex-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-xl)',
                background: 'var(--color-primary-light)',
              }}
            >
              <BookOpen
                size={24}
                style={{ color: 'var(--color-primary)' }}
              />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>
                Dictionary
              </h1>
              <p
                className="text-muted"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                Explore words, definitions, and pronunciations
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn btn-ghost"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* Word of the Day */}
        {wordOfTheDay && (
          <div
            className="card"
            style={{
              marginBottom: 'var(--space-4)',
              padding: 'var(--space-4)',
              background:
                'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)',
              border: '2px solid var(--color-primary)',
            }}
          >
            <div
              className="flex"
              style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}
            >
              <div
                className="flex-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-sm)',
                  flexShrink: 0,
                }}
              >
                💡
              </div>
              <div style={{ flex: 1 }}>
                <div className="flex-between">
                  <div>
                    <div
                      className="flex"
                      style={{
                        gap: 'var(--space-2)',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: 'var(--font-size-lg)',
                        }}
                      >
                        {wordOfTheDay.word}
                      </span>
                      <span
                        className="badge badge-primary"
                        style={{ fontSize: 'var(--font-size-xs)' }}
                      >
                        <Sparkles size={12} /> Word of the Day
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        marginTop: 'var(--space-1)',
                      }}
                    >
                      {wordOfTheDay.definition}
                    </div>
                    {wordOfTheDay.example && (
                      <div
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-muted)',
                          fontStyle: 'italic',
                          marginTop: 'var(--space-1)',
                        }}
                      >
                        "{wordOfTheDay.example}"
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery(wordOfTheDay.word)
                      lookupWord(wordOfTheDay.word.toLowerCase())
                    }}
                    className="btn btn-primary"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      padding: 'var(--space-1) var(--space-3)',
                      flexShrink: 0,
                    }}
                  >
                    <Search size={14} /> Learn
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div
          className="card"
          style={{
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <form
            onSubmit={handleSearch}
            className="flex"
            style={{ gap: 'var(--space-3)' }}
          >
            <div style={{ flex: 1, position: 'relative' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: 'var(--space-3)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-muted)',
                }}
              />
              <input
                type="text"
                className="input"
                placeholder="Search for a word..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  paddingLeft: 'var(--space-10)',
                  fontSize: 'var(--font-size-base)',
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <Loader2
                  size={18}
                  style={{ animation: 'spin 1s linear infinite' }}
                />
              ) : (
                <Search size={18} />
              )}
            </button>
          </form>

          {recentSearches.length > 0 && !wordData && (
            <div style={{ marginTop: 'var(--space-3)' }}>
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Recent searches:
              </div>
              <div
                className="flex"
                style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}
              >
                {recentSearches.map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      setSearchQuery(w)
                      lookupWord(w)
                    }}
                    className="btn btn-ghost"
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      padding: 'var(--space-1) var(--space-2)',
                    }}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div
            className="danger-card"
            style={{ marginBottom: 'var(--space-4)' }}
          >
            <div
              className="flex"
              style={{ gap: 'var(--space-2)', alignItems: 'center' }}
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div
            className="flex-center"
            style={{ padding: 'var(--space-8)' }}
          >
            <Loader2
              size={32}
              style={{ animation: 'spin 1s linear infinite' }}
            />
          </div>
        ) : wordData ? (
          renderWordDetails(wordData)
        ) : (
          <div
            className="card text-center"
            style={{ padding: 'var(--space-8)' }}
          >
            <BookOpen
              size={48}
              style={{
                margin: '0 auto var(--space-3)',
                opacity: 0.3,
                color: 'var(--color-text-muted)',
              }}
            />
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>
              Search for a Word
            </h3>
            <p
              className="text-muted"
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              Enter any word to find its definition, pronunciation, and
              examples
            </p>
            <div
              className="flex"
              style={{
                gap: 'var(--space-2)',
                justifyContent: 'center',
                marginTop: 'var(--space-4)',
                flexWrap: 'wrap',
              }}
            >
              {['perseverance', 'ubiquitous', 'resilience', 'synergy'].map(
                (w) => (
                  <button
                    key={w}
                    onClick={() => {
                      setSearchQuery(w)
                      lookupWord(w)
                    }}
                    className="btn btn-outline"
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    {w}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Favorites */}
        {favorites.length > 0 && (
          <div
            className="card"
            style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)' }}
          >
            <div
              className="flex"
              style={{
                gap: 'var(--space-2)',
                alignItems: 'center',
                marginBottom: 'var(--space-3)',
              }}
            >
              <Star size={18} style={{ color: 'var(--color-warning)' }} />
              <span style={{ fontWeight: 600 }}>Favorites</span>
              <span className="badge badge-muted">{favorites.length}</span>
            </div>
            <div
              className="flex"
              style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}
            >
              {favorites.map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    setSearchQuery(w)
                    lookupWord(w)
                  }}
                  className="btn btn-ghost"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    padding: 'var(--space-1) var(--space-3)',
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
