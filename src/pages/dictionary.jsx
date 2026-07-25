// ============================================================
// HYELEARNER: FOUNDATION — DICTIONARY PAGE
// Free Dictionary API + Word of the Day + Vocabulary Builder
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
  CheckCircle2,
  Sparkles,
  Clock,
  Calendar,
  Star,
  BookMarked,
  Mic,
  ChevronRight,
  RefreshCw,
  X,
  Info,
  ExternalLink,
  Play,
  Pause,
  VolumeX
} from 'lucide-react'
import { LoadingScreen } from '../components/LoadingScreen'

// ============================================================
// WORD OF THE DAY — Preloaded list + Daily rotation
// ============================================================

const WORD_OF_THE_DAY_DATA = [
  { word: 'Ephemeral', definition: 'Lasting for a very short time.', example: 'The ephemeral beauty of a sunset.' },
  { word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', example: 'Smartphones have become ubiquitous.' },
  { word: 'Perseverance', definition: 'Persistence in doing something despite difficulty.', example: 'Her perseverance paid off with success.' },
  { word: 'Resilience', definition: 'The capacity to recover quickly from difficulties.', example: 'The resilience of the community was inspiring.' },
  { word: 'Ambiguous', definition: 'Open to more than one interpretation.', example: 'The ending of the movie was ambiguous.' },
  { word: 'Paradigm', definition: 'A typical example or pattern of something.', example: 'The internet changed the paradigm of communication.' },
  { word: 'Synergy', definition: 'The interaction of elements that produces a greater effect than the sum of their individual effects.', example: 'The team worked in synergy to solve the problem.' },
  { word: 'Empathy', definition: 'The ability to understand and share the feelings of another.', example: 'She showed great empathy towards her friend.' },
  { word: 'Phenomenon', definition: 'A fact or situation that is observed to exist or happen.', example: 'The aurora borealis is a natural phenomenon.' },
  { word: 'Trepidation', definition: 'A feeling of fear or anxiety about something that may happen.', example: 'He approached the exam with trepidation.' },
  { word: 'Altruism', definition: 'The belief in or practice of selfless concern for the well-being of others.', example: 'His altruism inspired others to help.' },
  { word: 'Ethereal', definition: 'Extremely delicate and light in a way that seems not of this world.', example: 'The ethereal music filled the room.' },
  { word: 'Prolific', definition: 'Producing much fruit or foliage or many offspring.', example: 'She was a prolific writer.' },
  { word: 'Surreal', definition: 'Having the qualities of surrealism; bizarre.', example: 'The experience was almost surreal.' },
  { word: 'Mellifluous', definition: 'Sweet or musical; pleasant to hear.', example: 'Her mellifluous voice captivated the audience.' },
  { word: 'Benevolent', definition: 'Well-meaning and kindly.', example: 'A benevolent smile spread across his face.' },
  { word: 'Capricious', definition: 'Given to sudden and unaccountable changes of mood or behavior.', example: 'The capricious weather made planning difficult.' },
  { word: 'Clandestine', definition: 'Kept secret or done secretively.', example: 'They had a clandestine meeting.' },
  { word: 'Exquisite', definition: 'Extremely beautiful and, typically, delicate.', example: 'The exquisite craftsmanship was evident.' },
  { word: 'Formidable', definition: 'Inspiring fear or respect through being impressively large, powerful, intense, or capable.', example: 'He was a formidable opponent.' }
]

// ============================================================
// HELPER: Get Word of the Day based on date
// ============================================================

const getWordOfTheDay = () => {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
  const index = dayOfYear % WORD_OF_THE_DAY_DATA.length
  return WORD_OF_THE_DAY_DATA[index]
}

// ============================================================
// DICTIONARY API SERVICE
// ============================================================

const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const fetchWordDefinition = async (word) => {
  const response = await fetch(`${DICTIONARY_API}/${word}`)
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Word not found')
    }
    throw new Error('Failed to fetch definition')
  }
  return response.json()
}

// ============================================================
// DICTIONARY PAGE
// ============================================================

export function DictionaryPage() {
  const navigate = useNavigate()
  
  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [wordData, setWordData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [wordOfTheDay, setWordOfTheDay] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSynth, setSpeechSynth] = useState(null)
  
  // Load word of the day and recent searches on mount
  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay())
    
    // Load recent searches from localStorage
    const saved = localStorage.getItem('dictionary_recent')
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch (e) {}
    }
    
    // Load favorites from localStorage
    const favs = localStorage.getItem('dictionary_favorites')
    if (favs) {
      try {
        setFavorites(JSON.parse(favs))
      } catch (e) {}
    }
  }, [])

  // ============================================================
  // SEARCH WORD
  // ============================================================
  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    const word = searchQuery.trim().toLowerCase()
    await lookupWord(word)
  }

  const lookupWord = async (word) => {
  setLoading(true)
  setError(null)
  
  try {
    const data = await fetchWordDefinition(word)
    
    // ✅ Handle the response format
    if (Array.isArray(data) && data.length > 0) {
      setWordData(data[0])
      
      // ✅ FIX: typo here
      const updated = [word, ...recentSearches.filter(w => w !== word)].slice(0, 10)
      setRecentSearches(updated)
      localStorage.setItem('dictionary_recent', JSON.stringify(updated))
    } else {
      setError('No definition found')
    }
    
  } catch (err) {
    setError(err.message)
    setWordData(null)
  } finally {
    setLoading(false)
  }
}

  // ============================================================
  // TEXT-TO-SPEECH
  // ============================================================
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
    setSpeechSynth(utterance)
  }

  // ============================================================
  // FAVORITES
  // ============================================================
  const toggleFavorite = (word) => {
    const updated = favorites.includes(word) 
      ? favorites.filter(w => w !== word)
      : [...favorites, word]
    setFavorites(updated)
    localStorage.setItem('dictionary_favorites', JSON.stringify(updated))
  }

  const isFavorite = (word) => favorites.includes(word)

  // ============================================================
  // RENDER WORD DETAILS
  // ============================================================
  const renderWordDetails = (data) => {
    if (!data) return null
    
    return (
      <div className="card" style={{ padding: 'var(--space-6)' }}>
        {/* Word Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <h2 className="h2" style={{ margin: 0 }}>{data.word}</h2>
            {data.phonetic && (
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
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
              {isSpeaking ? (
                <Pause style={{ width: '20px', height: '20px' }} />
              ) : (
                <Volume2 style={{ width: '20px', height: '20px' }} />
              )}
            </button>
            <button
              onClick={() => toggleFavorite(data.word)}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              title={isFavorite(data.word) ? 'Remove favorite' : 'Add favorite'}
            >
              <Star 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  fill: isFavorite(data.word) ? 'var(--color-warning)' : 'none',
                  color: isFavorite(data.word) ? 'var(--color-warning)' : 'var(--color-text-muted)'
                }} 
              />
            </button>
          </div>
        </div>

        {/* Audio Pronunciation */}
        {data.phonetics && data.phonetics.some(p => p.audio) && (
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <audio 
              controls 
              style={{ width: '100%', height: '40px' }}
              src={data.phonetics.find(p => p.audio)?.audio}
            />
          </div>
        )}

        {/* Definitions */}
        {data.meanings && data.meanings.map((meaning, idx) => (
          <div key={idx} style={{ marginBottom: 'var(--space-4)' }}>
            <div style={{ 
              display: 'inline-block',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-primary-light)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: '600',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-2)'
            }}>
              {meaning.partOfSpeech}
            </div>
            
            {meaning.definitions.map((def, i) => (
              <div key={i} style={{ 
                padding: 'var(--space-2) var(--space-3)',
                borderBottom: i < meaning.definitions.length - 1 ? '1px solid var(--color-border-light)' : 'none'
              }}>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                  {i + 1}. {def.definition}
                </div>
                {def.example && (
                  <div style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic',
                    marginTop: 'var(--space-1)',
                    paddingLeft: 'var(--space-4)'
                  }}>
                    "{def.example}"
                  </div>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <div style={{ marginTop: 'var(--space-1)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    <strong>Synonyms:</strong> {def.synonyms.join(', ')}
                  </div>
                )}
                {def.antonyms && def.antonyms.length > 0 && (
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    <strong>Antonyms:</strong> {def.antonyms.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Source link */}
        {data.sourceUrls && data.sourceUrls.length > 0 && (
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-3)' }}>
            <a href={data.sourceUrls[0]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
              <ExternalLink style={{ width: '14px', height: '14px', display: 'inline' }} /> Source
            </a>
          </div>
        )}
      </div>
    )
  }

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-4)' }}>
            <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BookOpen style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Dictionary</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Explore words, definitions, and pronunciations</p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
        </div>

        {/* Word of the Day */}
        {wordOfTheDay && (
          <div className="card" style={{ 
            marginBottom: 'var(--space-4)', 
            padding: 'var(--space-4)',
            background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%)',
            border: '2px solid var(--color-primary)'
          }}>
            <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <div className="flex-center" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: 'white',
                fontWeight: '700',
                fontSize: 'var(--font-size-sm)',
                flexShrink: 0
              }}>
                💡
              </div>
              <div style={{ flex: 1 }}>
                <div className="flex-between">
                  <div>
                    <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
                      <span style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)' }}>{wordOfTheDay.word}</span>
                      <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-xs)' }}>
                        <Sparkles style={{ width: '12px', height: '12px', display: 'inline' }} /> Word of the Day
                      </span>
                    </div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                      {wordOfTheDay.definition}
                    </div>
                    {wordOfTheDay.example && (
                      <div style={{ 
                        fontSize: 'var(--font-size-sm)', 
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic',
                        marginTop: 'var(--space-1)'
                      }}>
                        "{wordOfTheDay.example}"
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery(wordOfTheDay.word)
                      lookupWord(wordOfTheDay.word)
                    }}
                    className="btn btn-primary"
                    style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)', flexShrink: 0 }}
                  >
                    <Search style={{ width: '14px', height: '14px' }} /> Learn
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <form onSubmit={handleSearch} className="flex" style={{ gap: 'var(--space-3)' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                className="input"
                placeholder="Search for a word..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: 'var(--space-10)', fontSize: 'var(--font-size-base)' }}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} /> : <Search style={{ width: '18px', height: '18px' }} />}
            </button>
          </form>

          {/* Recent Searches */}
          {recentSearches.length > 0 && !wordData && (
            <div style={{ marginTop: 'var(--space-3)' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                Recent searches:
              </div>
              <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                {recentSearches.map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      setSearchQuery(w)
                      lookupWord(w)
                    }}
                    className="btn btn-ghost"
                    style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--space-1) var(--space-2)' }}
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
          <div className="danger-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <AlertCircle style={{ width: '20px', height: '20px' }} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div className="flex-center" style={{ padding: 'var(--space-8)' }}>
            <Loader2 className="spinner" style={{ width: '32px', height: '32px' }} />
          </div>
        ) : wordData ? (
          renderWordDetails(wordData)
        ) : (
          // Empty state
          <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
            <BookOpen style={{ width: '48px', height: '48px', margin: '0 auto var(--space-3)', opacity: '0.3', color: 'var(--color-text-muted)' }} />
            <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>Search for a Word</h3>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              Enter any word to find its definition, pronunciation, and examples
            </p>
            <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'center', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
              {['perseverance', 'ubiquitous', 'resilience', 'synergy'].map((w) => (
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
              ))}
            </div>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="card" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)' }}>
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
              <Star style={{ width: '18px', height: '18px', color: 'var(--color-warning)' }} />
              <span style={{ fontWeight: '600' }}>Favorites</span>
              <span className="badge badge-muted">{favorites.length}</span>
            </div>
            <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {favorites.map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    setSearchQuery(w)
                    lookupWord(w)
                  }}
                  className="btn btn-ghost"
                  style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
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