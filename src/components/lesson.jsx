// ============================================================
// HYELEARNER: FOUNDATION — LESSON COMPONENTS
// Reusable lesson components: LessonCard, LessonViewer, LessonTest
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { useProgress } from '../hooks'
import { storage } from '../storage'
import { calculateScore, calculateXP, formatTime } from '../utils'
import { BookmarkButton } from './BookmarkButton'
import { voice } from '../services'
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Zap,
  Loader2,
  Info,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Play,
  Calculator as CalculatorIcon,
  X,
  Eye,
  RotateCw,
  Home,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  Award,
  BarChart3,
  Video,
  ChevronRight,
  Lock,
  Volume2,
  Square,
  Star
} from 'lucide-react'

// ============================================================
// HELPER: Format text for better TTS (COMPLETE VERSION)
// ============================================================
const formatTextForTTS = (text) => {
  if (!text) return ''

  // Step 1: Split into paragraphs
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim())

  // Step 2: Add punctuation where missing
  let formatted = paragraphs.map(p => {
    let para = p.trim()
    
    if (para.length > 0 && !/[.!?…]$/.test(para)) {
      para += '.'
    }
    
    const sentences = para.split(/(?<=[.!?])\s+/).map(s => {
      let sentence = s.trim()
      if (sentence.length > 0 && !/[.!?…]$/.test(sentence)) {
        sentence += '.'
      }
      return sentence
    })
    
    return sentences.join(' ')
  })

  let result = formatted.join(' . . . . ')

  // ============================================================
  // ROMAN NUMERALS
  // ============================================================
  const ROMAN_NUMERALS = {
    'I': 1, 'IV': 4, 'V': 5, 'IX': 9,
    'X': 10, 'XL': 40, 'L': 50, 'XC': 90,
    'C': 100, 'CD': 400, 'D': 500, 'CM': 900,
    'M': 1000
  }

  const romanToNumber = (roman) => {
    let result = 0
    let i = 0
    while (i < roman.length) {
      const two = roman[i] + (roman[i+1] || '')
      if (ROMAN_NUMERALS[two]) {
        result += ROMAN_NUMERALS[two]
        i += 2
      } else {
        result += ROMAN_NUMERALS[roman[i]]
        i += 1
      }
    }
    return result
  }

  result = result.replace(/\b([IVXLCDM]+)\b/g, (match) => {
    try {
      return romanToNumber(match) + ''
    } catch {
      return match
    }
  })

  // ============================================================
  // CURRENCY
  // ============================================================
  result = result.replace(/\$(\d+)/g, '$1 dollars')
  result = result.replace(/£(\d+)/g, '$1 pounds')
  result = result.replace(/₦(\d+)/g, '$1 naira')
  result = result.replace(/€(\d+)/g, '$1 euros')
  result = result.replace(/\$(\d+)\.(\d+)/g, '$1 dollars $2 cents')
  result = result.replace(/£(\d+)\.(\d+)/g, '$1 pounds $2 pence')
  result = result.replace(/₦(\d+)\.(\d+)/g, '$1 naira $2 kobo')

  // ============================================================
  // DATES
  // ============================================================
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
  
  result = result.replace(/(\d{4})-(\d{2})-(\d{2})/g, (match, year, month, day) => {
    return `${MONTHS[parseInt(month) - 1]} ${parseInt(day)}, ${year}`
  })

  result = result.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, (match, month, day, year) => {
    return `${MONTHS[parseInt(month) - 1]} ${parseInt(day)}, ${year}`
  })

  result = result.replace(/(\d{2})\/(\d{2})(?!\/)/g, (match, month, day) => {
    return `${MONTHS[parseInt(month) - 1]} ${parseInt(day)}`
  })

  // ============================================================
  // TIME
  // ============================================================
  result = result.replace(/(\d{1,2}):(\d{2})\s*(AM|PM|am|pm)/g, (match, hour, min, ampm) => {
    const h = parseInt(hour)
    const m = parseInt(min)
    const hour12 = h > 12 ? h - 12 : h
    return `${hour12} ${m} ${ampm.toUpperCase()}`
  })

  result = result.replace(/(\d{2}):(\d{2}):(\d{2})/g, (match, hour, min, sec) => {
    const h = parseInt(hour)
    const m = parseInt(min)
    const s = parseInt(sec)
    let text = ''
    if (h > 12) {
      text += `${h - 12} ${m} PM`
    } else if (h === 0) {
      text += `12 ${m} AM`
    } else {
      text += `${h} ${m} AM`
    }
    if (s > 0) text += ` and ${s} seconds`
    return text
  })

  result = result.replace(/(\d{1,2}):(\d{2})(?!\s*[AP]M)/g, (match, hour, min) => {
    const h = parseInt(hour)
    const m = parseInt(min)
    if (h > 12) {
      return `${h - 12} ${m} PM`
    } else if (h === 0) {
      return `12 ${m} AM`
    } else {
      return `${h} ${m} AM`
    }
  })

  // ============================================================
  // PERCENTAGES
  // ============================================================
  result = result.replace(/(\d+)%/g, '$1 percent')
  result = result.replace(/(\d+)\.(\d+)%/g, '$1 point $2 percent')

  // ============================================================
  // PHONE NUMBERS
  // ============================================================
  result = result.replace(/(\+\d{1,3}-\d{3}-\d{3}-\d{4})/g, (match) => {
    return match.replace(/\D/g, '').split('').join(' ')
  })
  result = result.replace(/(\d{3}-\d{3}-\d{4})/g, (match) => {
    return match.replace(/-/g, '').split('').join(' ')
  })
  result = result.replace(/(\d{4}-\d{3}-\d{3})/g, (match) => {
    return match.replace(/-/g, '').split('').join(' ')
  })

  // ============================================================
  // SCIENTIFIC NOTATION
  // ============================================================
  result = result.replace(/(\d+(?:\.\d+)?)\s*[×*]\s*10\^(\d+)/g, '$1 times ten to the $2')
  result = result.replace(/(\d+(?:\.\d+)?)\s*[×*]\s*10\^{(\d+)}/g, '$1 times ten to the $2')

  // ============================================================
  // UNITS
  // ============================================================
  result = result.replace(/(\d+)km/g, '$1 kilometers')
  result = result.replace(/(\d+)m(?!\w)/g, '$1 meters')
  result = result.replace(/(\d+)cm/g, '$1 centimeters')
  result = result.replace(/(\d+)mm/g, '$1 millimeters')
  result = result.replace(/(\d+)mg/g, '$1 milligrams')
  result = result.replace(/(\d+)g(?!\w)/g, '$1 grams')
  result = result.replace(/(\d+)kg/g, '$1 kilograms')
  result = result.replace(/(\d+)L(?!\w)/g, '$1 liters')
  result = result.replace(/(\d+)mL/g, '$1 milliliters')
  result = result.replace(/(\d+)km\/h/g, '$1 kilometers per hour')
  result = result.replace(/(\d+)m\/s/g, '$1 meters per second')
  result = result.replace(/(\d+)m\/s²/g, '$1 meters per second squared')
  result = result.replace(/(\d+)W/g, '$1 watts')
  result = result.replace(/(\d+)kW/g, '$1 kilowatts')
  result = result.replace(/(\d+)J/g, '$1 joules')
  result = result.replace(/(\d+)N/g, '$1 newtons')
  result = result.replace(/(\d+)Pa/g, '$1 pascals')
  result = result.replace(/(\d+)Hz/g, '$1 hertz')
  result = result.replace(/(\d+)V/g, '$1 volts')
  result = result.replace(/(\d+)A/g, '$1 amperes')
  result = result.replace(/(\d+)Ω/g, '$1 ohms')

  // ============================================================
  // MIXED FRACTIONS
  // ============================================================
  result = result.replace(/(\d+)\s*½/g, '$1 and a half')
  result = result.replace(/(\d+)\s*¼/g, '$1 and a quarter')
  result = result.replace(/(\d+)\s*¾/g, '$1 and three quarters')
  result = result.replace(/(\d+)\s*⅓/g, '$1 and a third')
  result = result.replace(/(\d+)\s*⅔/g, '$1 and two thirds')

  // ============================================================
  // RATIO
  // ============================================================
  result = result.replace(/(\d+):(\d+)/g, '$1 to $2')
  result = result.replace(/([a-zA-Z]):([a-zA-Z])/g, '$1 to $2')

  // ============================================================
  // SET NOTATION
  // ============================================================
  result = result.replace(/∅/g, 'empty set')
  result = result.replace(/∈/g, 'belongs to')
  result = result.replace(/∉/g, 'does not belong to')
  result = result.replace(/⊂/g, 'subset of')
  result = result.replace(/⊆/g, 'subset or equal to')
  result = result.replace(/⊃/g, 'superset of')
  result = result.replace(/⊇/g, 'superset or equal to')
  result = result.replace(/∪/g, 'union')
  result = result.replace(/∩/g, 'intersection')
  result = result.replace(/\{([^}]+)\}/g, 'set containing $1')

  // ============================================================
  // LOGIC SYMBOLS
  // ============================================================
  result = result.replace(/∧/g, 'and')
  result = result.replace(/∨/g, 'or')
  result = result.replace(/¬/g, 'not')
  result = result.replace(/→/g, 'implies')
  result = result.replace(/↔/g, 'if and only if')
  result = result.replace(/∀/g, 'for all')
  result = result.replace(/∃/g, 'there exists')
  result = result.replace(/∴/g, 'therefore')
  result = result.replace(/∵/g, 'because')

  // ============================================================
  // MATH & SCIENCE
  // ============================================================
  
  // Superscripts
  result = result.replace(/(\d+)\s*²/g, '$1 squared')
  result = result.replace(/(\d+)\s*³/g, '$1 cubed')
  result = result.replace(/(\d+)\s*⁴/g, '$1 to the fourth')
  result = result.replace(/(\d+)\s*⁵/g, '$1 to the fifth')
  result = result.replace(/(\d+)\s*⁶/g, '$1 to the sixth')
  result = result.replace(/(\d+)\s*⁷/g, '$1 to the seventh')
  result = result.replace(/(\d+)\s*⁸/g, '$1 to the eighth')
  result = result.replace(/(\d+)\s*⁹/g, '$1 to the ninth')
  result = result.replace(/([a-zA-Z])²/g, '$1 squared')
  result = result.replace(/([a-zA-Z])³/g, '$1 cubed')

  // Roots
  result = result.replace(/√(\d+)/g, 'square root of $1')
  result = result.replace(/∛(\d+)/g, 'cube root of $1')
  result = result.replace(/∜(\d+)/g, 'fourth root of $1')
  result = result.replace(/√\(([^)]+)\)/g, 'square root of $1')

  // Fractions
  result = result.replace(/(\d+)\/(\d+)/g, '$1 over $2')
  result = result.replace(/½/g, 'one half')
  result = result.replace(/¼/g, 'one quarter')
  result = result.replace(/¾/g, 'three quarters')
  result = result.replace(/⅓/g, 'one third')
  result = result.replace(/⅔/g, 'two thirds')

  // Greek letters
  const greek = {
    'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta',
    'ε': 'epsilon', 'θ': 'theta', 'λ': 'lambda', 'μ': 'mu',
    'π': 'pi', 'σ': 'sigma', 'τ': 'tau', 'φ': 'phi',
    'ω': 'omega', 'Δ': 'delta', 'Σ': 'sigma', 'Ω': 'omega',
    'Θ': 'theta', 'Φ': 'phi', 'Ψ': 'psi'
  }
  Object.entries(greek).forEach(([symbol, word]) => {
    result = result.replace(new RegExp(symbol, 'g'), word)
  })

  // Math constants
  result = result.replace(/\be\b(?![\w])/g, "Euler's number")
  result = result.replace(/\bi\b(?![\w])/g, 'imaginary unit')
  result = result.replace(/π/g, 'pi')
  result = result.replace(/φ/g, 'phi')

  // Handle x as variable vs multiplication
  result = result.replace(/\b(x)\b/gi, 'X_VARIABLE')
  result = result.replace(/(\d+)\s*[×*]\s*x/gi, '$1 times x')
  result = result.replace(/\+x/gi, 'plus x')
  result = result.replace(/-x/gi, 'minus x')
  result = result.replace(/X_VARIABLE/g, 'x')
  result = result.replace(/\b(y)\b/gi, 'y')
  result = result.replace(/\b(z)\b/gi, 'z')

  // Math symbols
  result = result.replace(/\b-(\d+)\b/g, 'negative $1')
  result = result.replace(/\s+-\s+/g, ' minus ')
  result = result.replace(/\+/g, ' plus ')
  result = result.replace(/=/g, ' equals ')
  result = result.replace(/±/g, 'plus or minus')
  result = result.replace(/[×*](?!\s*x)/g, ' times ')
  result = result.replace(/÷/g, ' divided by ')

  // Comparison
  result = result.replace(/≈/g, 'approximately equal to')
  result = result.replace(/≠/g, 'not equal to')
  result = result.replace(/≤/g, 'less than or equal to')
  result = result.replace(/≥/g, 'greater than or equal to')
  result = result.replace(/</g, 'less than')
  result = result.replace(/>/g, 'greater than')

  // Calculus
  result = result.replace(/∫/g, 'integral of')
  result = result.replace(/∂/g, 'partial derivative')
  result = result.replace(/∇/g, 'gradient')
  result = result.replace(/∞/g, 'infinity')
  result = result.replace(/∑/g, 'sum of')
  result = result.replace(/∏/g, 'product of')

  // Chemical formulas
  result = result.replace(/H₂O/g, 'H two O')
  result = result.replace(/CO₂/g, 'C O two')
  result = result.replace(/O₂/g, 'O two')
  result = result.replace(/N₂/g, 'N two')
  result = result.replace(/H₂SO₄/g, 'H two S O four')
  result = result.replace(/NaCl/g, 'N a C l')
  result = result.replace(/NaOH/g, 'N a O H')
  result = result.replace(/HCl/g, 'H C l')

  // Function notation
  result = result.replace(/f\(x\)/g, 'f of x')
  result = result.replace(/g\(x\)/g, 'g of x')
  result = result.replace(/sin\(/g, 'sine of')
  result = result.replace(/cos\(/g, 'cosine of')
  result = result.replace(/tan\(/g, 'tangent of')
  result = result.replace(/log\(/g, 'log of')
  result = result.replace(/ln\(/g, 'natural log of')

  // ============================================================
  // ANGLES
  // ============================================================
  result = result.replace(/(\d+)°\s*C/g, '$1 degrees Celsius')
  result = result.replace(/(\d+)°\s*F/g, '$1 degrees Fahrenheit')
  result = result.replace(/(\d+)°/g, '$1 degrees')
  result = result.replace(/(\d+)′/g, '$1 minutes')
  result = result.replace(/(\d+)″/g, '$1 seconds')
  result = result.replace(/π\/(\d+)/g, 'pi over $1')
  result = result.replace(/(\d+)π/g, '$1 pi')
  result = result.replace(/sin\s*(\d+)°/g, 'sine $1 degrees')
  result = result.replace(/cos\s*(\d+)°/g, 'cosine $1 degrees')
  result = result.replace(/tan\s*(\d+)°/g, 'tangent $1 degrees')
  result = result.replace(/sin\s*π/g, 'sine pi')
  result = result.replace(/cos\s*π/g, 'cosine pi')
  result = result.replace(/tan\s*π/g, 'tangent pi')
  result = result.replace(/sin\s*(\w+)/g, 'sine of $1')
  result = result.replace(/cos\s*(\w+)/g, 'cosine of $1')
  result = result.replace(/tan\s*(\w+)/g, 'tangent of $1')
  result = result.replace(/∠([A-Z]+)/g, 'angle $1')
  result = result.replace(/⊿/g, 'right angle')
  result = result.replace(/∟/g, 'right angle')
  result = result.replace(/⟂/g, 'perpendicular to')
  result = result.replace(/∥/g, 'parallel to')
  result = result.replace(/∼/g, 'is similar to')
  result = result.replace(/≅/g, 'is congruent to')

  // ============================================================
  // BINARY
  // ============================================================
  result = result.replace(/\b0b([01]+)\b/g, (match, bits) => {
    return 'binary ' + bits.split('').join(' ')
  })
  result = result.replace(/([01]+)[₂_][2]/g, (match, bits) => {
    return 'binary ' + bits.split('').join(' ')
  })
  result = result.replace(/\b0x([0-9A-Fa-f]+)\b/g, (match, hex) => {
    return 'hex ' + hex.split('').join(' ')
  })
  result = result.replace(/([0-7]+)[₈_][8]/g, (match, digits) => {
    return 'octal ' + digits.split('').join(' ')
  })

 // ============================================================
// ABBREVIATIONS
// ============================================================
result = result.replace(/\be\.g\.?\b/gi, 'for example')
result = result.replace(/\bi\.e\.?\b/gi, 'that is')
result = result.replace(/\betc\.?\b/gi, 'et cetera')
result = result.replace(/\bvs\.?\b/gi, 'versus')
result = result.replace(/\bex\.?\b/gi, 'example')
result = result.replace(/&/g, ' and ')
result = result.replace(/%/g, ' percent')
result = result.replace(/\+/g, ' plus ')
result = result.replace(/=/g, ' equals ')

  // ============================================================
  // PARENTHESES AND BRACKETS
  // ============================================================
  result = result.replace(/\(/g, 'open parenthesis')
  result = result.replace(/\)/g, 'close parenthesis')
  result = result.replace(/\[/g, 'open bracket')
  result = result.replace(/\]/g, 'close bracket')
  result = result.replace(/\{/g, 'open brace')
  result = result.replace(/\}/g, 'close brace')

  // ============================================================
// LISTS
// ============================================================
// Handle HTML list tags
result = result.replace(/<li>/g, '. Point ')
result = result.replace(/<\/li>/g, ' ')
result = result.replace(/<ul>/g, '. ')
result = result.replace(/<\/ul>/g, ' . ')
result = result.replace(/<ol>/g, '. ')
result = result.replace(/<\/ol>/g, ' . ')

// Numbered lists (1., 2., etc.)
result = result.replace(/(\d+)\.\s*/g, '. $1. ')
// Lettered lists (a., b., etc.)
result = result.replace(/([a-z])\)\s*/g, '. $1) ')
// Bullet points
result = result.replace(/[•·●]\s*/g, '. Point ')
// Check marks
result = result.replace(/[✓✔✅]\s*/g, '. Check ')
// Arrow bullets
result = result.replace(/[→➜➝➞]\s*/g, '. Arrow ')

// ============================================================
// KEY TAKEAWAYS / SUMMARY LISTS
// ============================================================
// Add pause before each list item
result = result.replace(/\.\s*(?=Point\s)/g, '. . ')
// Add pause between takeaways
result = result.replace(/(Point\s[^.]*?)(?=Point)/g, '$1 . ')
// Add pause after each takeaway item
result = result.replace(/Point\s/g, ' . Point ')

  // ============================================================
  // EMOJIS
  // ============================================================
  const emojis = {
    '📌': '. Note ', '📊': '. Chart ', '💡': '. Tip ',
    '📚': '. Book ', '🎯': '. Target ', '🔥': '. Fire ',
    '✅': '. Done ', '❌': '. Wrong ', '⚠️': '. Warning ',
    '💪': '. Strong ', '🧠': '. Brain ', '📖': '. Read ',
    '✍️': '. Write ', '📐': '. Protractor ', '📏': '. Ruler ',
    '🔬': '. Microscope ', '🔭': '. Telescope ', '⚗️': '. Flask ',
    '🧪': '. Test tube ', '💻': '. Computer ', '📱': '. Phone ',
    '⌨️': '. Keyboard ', '🖱️': '. Mouse ', '🖨️': '. Printer ',
    '📁': '. Folder ', '📂': '. Folder ', '📅': '. Calendar ',
    '📆': '. Calendar ', '⏰': '. Clock ', '⏱️': '. Stopwatch ',
    '⏲️': '. Timer '
  }
  Object.entries(emojis).forEach(([emoji, replacement]) => {
    result = result.replace(new RegExp(emoji, 'g'), replacement)
  })


  // ============================================================
  // COLON AND SEMICOLON
  // ============================================================
  result = result.replace(/:/g, ', ')
  result = result.replace(/;/g, ', ')

  // ============================================================
  // DASH AND HYPHEN
  // ============================================================
  result = result.replace(/—/g, ' ... ')
  result = result.replace(/–/g, ' ... ')
  result = result.replace(/ - /g, ' ... ')

  // ============================================================
// ENGLISH LANGUAGE SUPPORT (Intonation, Stress, Phonetics)
// ============================================================

// ===== INTONATION & STRESS MARKS =====
result = result.replace(/↗/g, 'rising intonation')
result = result.replace(/↘/g, 'falling intonation')
result = result.replace(/↗︎/g, 'rising intonation')
result = result.replace(/↘︎/g, 'falling intonation')
result = result.replace(/↑/g, 'rise')
result = result.replace(/↓/g, 'fall')
result = result.replace(/ˈ/g, '')
result = result.replace(/ˌ/g, '')
result = result.replace(/ˈ([a-zA-Z])/g, '$1')
result = result.replace(/ˌ([a-zA-Z])/g, '$1')
result = result.replace(/\bSTRESS\b/g, 'stress')
result = result.replace(/\bstressed\b/g, 'stressed')
result = result.replace(/\bunstressed\b/g, 'unstressed')
result = result.replace(/\bemphasized\b/g, 'emphasized')
result = result.replace(/●/g, 'syllable')
result = result.replace(/○/g, 'syllable')
result = result.replace(/•/g, 'syllable')

// ===== SAFETY NET: IPA symbols without slashes =====
const ipaRawReplacements = {
  // Vowels
  'ɪ': 'ih',
  'iː': 'ee',
  'e': 'eh',
  'æ': 'a',
  'ɑː': 'ah',
  'ɒ': 'o',
  'ɔː': 'aw',
  'ʊ': 'uh',
  'uː': 'oo',
  'ʌ': 'uh',
  'ɜː': 'er',
  'ə': 'uh',
  'eɪ': 'ay',
  'aɪ': 'eye',
  'ɔɪ': 'oy',
  'aʊ': 'ow',
  'əʊ': 'oh',
  'ɪə': 'ear',
  'eə': 'air',
  'ʊə': 'ure',
  // Consonants
  'p': 'p',
  'b': 'b',
  't': 't',
  'd': 'd',
  'k': 'k',
  'g': 'g',
  'f': 'f',
  'v': 'v',
  'θ': 'th',
  'ð': 'th',
  's': 's',
  'z': 'z',
  'ʃ': 'sh',
  'ʒ': 'zh',
  'h': 'h',
  'tʃ': 'ch',
  'dʒ': 'j',
  'm': 'm',
  'n': 'n',
  'ŋ': 'ng',
  'l': 'l',
  'r': 'r',
  'w': 'w',
  'j': 'y',
}
Object.entries(ipaRawReplacements).forEach(([symbol, word]) => {
  // Only replace if it's a standalone symbol (not part of a larger word)
  result = result.replace(new RegExp(`\\b${symbol}\\b`, 'g'), word)
})

// ===== IPA VOWELS — COMPLETE SET =====
const ipaVowels = {
  // ===== MONOPHTHONGS (Pure Vowels) =====
  // Front vowels
  '/iː/': 'ee',      // "see", "tea", "green" (close front unrounded)
  '/ɪ/': 'ih',       // "bit", "sit", "ship" (near-close near-front unrounded)
  '/e/': 'eh',       // "bed", "set", "ten" (close-mid front unrounded)
  '/æ/': 'a',        // "cat", "hat", "man" (near-open front unrounded)
  
  // Central vowels
  '/ɜː/': 'er',      // "bird", "turn", "learn" (open-mid central unrounded)
  '/ə/': 'uh',       // "about", "banana", "sofa" (schwa - mid central unrounded)
  '/ʌ/': 'uh',       // "cup", "sun", "up" (open-mid back unrounded)
  
  // Back vowels
  '/ɑː/': 'ah',      // "car", "far", "father" (open back unrounded)
  '/ɒ/': 'o',        // "hot", "dog", "pot" (open back rounded)
  '/ɔː/': 'aw',      // "saw", "door", "four" (open-mid back rounded)
  '/ʊ/': 'uh',       // "book", "foot", "good" (near-close near-back rounded)
  '/uː/': 'oo',      // "too", "food", "blue" (close back rounded)
  
  // ===== DIPHTHONGS (Gliding Vowels) =====
  // Closing diphthongs (ending with /ɪ/ or /ʊ/)
  '/eɪ/': 'ay',      // "face", "day", "say" (ɛɪ̯)
  '/aɪ/': 'eye',     // "price", "my", "high" (aɪ̯)
  '/ɔɪ/': 'oy',      // "choice", "boy", "toy" (ɔɪ̯)
  '/əʊ/': 'oh',      // "goat", "home", "show" (əʊ̯) - British
  '/oʊ/': 'oh',      // "goat", "home", "show" (oʊ̯) - American
  '/aʊ/': 'ow',      // "mouth", "now", "how" (aʊ̯)
  
  // Centering diphthongs (ending with /ə/)
  '/ɪə/': 'ear',     // "near", "here", "idea" (ɪə̯)
  '/eə/': 'air',     // "square", "there", "where" (eə̯)
  '/ʊə/': 'ure',     // "cure", "tour", "poor" (ʊə̯)
  
  // ===== TRIPHTHONGS (Rare) =====
  '/aɪə/': 'eye-uh', // "fire", "hire" (aɪə̯)
  '/aʊə/': 'ow-uh',  // "power", "hour" (aʊə̯)
  '/eɪə/': 'ay-uh',  // "layer", "player" (eɪə̯)
}
Object.entries(ipaVowels).forEach(([symbol, word]) => {
  const escaped = symbol.replace('/', '\\/')
  result = result.replace(new RegExp(escaped, 'g'), word)
  result = result.replace(new RegExp(`\\s${escaped}\\s`, 'g'), ` ${word} `)
  result = result.replace(new RegExp(`${escaped}\\s`, 'g'), `${word} `)
  result = result.replace(new RegExp(`\\s${escaped}`, 'g'), ` ${word}`)
})

// ===== IPA CONSONANTS — COMPLETE SET =====
const ipaConsonants = {
  // ===== PLOSIVES (Stops) =====
  // Voiceless plosives
  '/p/': 'p',        // "pen", "pet", "top"
  '/t/': 't',        // "ten", "tea", "hot"
  '/k/': 'k',        // "cat", "can", "back"
  // Voiced plosives
  '/b/': 'b',        // "bed", "big", "rub"
  '/d/': 'd',        // "dog", "did", "red"
  '/g/': 'g',        // "go", "get", "big"
  
  // ===== NASALS =====
  '/m/': 'm',        // "man", "me", "come"
  '/n/': 'n',        // "no", "ten", "run"
  '/ŋ/': 'ng',       // "sing", "long", "thing"
  
  // ===== FRICATIVES =====
  // Voiceless fricatives
  '/f/': 'f',        // "fan", "fine", "off"
  '/θ/': 'th',       // "think", "thank", "bath"
  '/s/': 's',        // "sun", "see", "bus"
  '/ʃ/': 'sh',       // "she", "shop", "fish"
  '/h/': 'h',        // "hat", "how", "high"
  // Voiced fricatives
  '/v/': 'v',        // "van", "very", "love"
  '/ð/': 'th',       // "this", "that", "them"
  '/z/': 'z',        // "zoo", "zero", "has"
  '/ʒ/': 'zh',       // "measure", "vision", "pleasure"
  
  // ===== AFFRICATES =====
  '/tʃ/': 'ch',      // "chat", "check", "catch"
  '/dʒ/': 'j',       // "jump", "job", "edge"
  
  // ===== APPROXIMANTS =====
  '/l/': 'l',        // "look", "late", "call" (lateral approximant)
  '/r/': 'r',        // "run", "red", "car" (rhotic approximant)
  '/w/': 'w',        // "we", "will", "what" (labio-velar approximant)
  '/j/': 'y',        // "yes", "you", "yellow" (palatal approximant)
  
  // ===== OTHER CONSONANT VARIANTS =====
  // These are sometimes used in English
  '/x/': 'kh',       // Scottish "loch" (voiceless velar fricative)
  '/hw/': 'wh',      // "what", "when" (voiceless labio-velar approximant)
  '/ɫ/': 'l',        // "call", "milk" (dark l)
  '/ɹ/': 'r',        // "red", "car" (alveolar approximant)
}
Object.entries(ipaConsonants).forEach(([symbol, word]) => {
  const escaped = symbol.replace('/', '\\/')
  result = result.replace(new RegExp(escaped, 'g'), word)
  result = result.replace(new RegExp(`\\s${escaped}\\s`, 'g'), ` ${word} `)
  result = result.replace(new RegExp(`${escaped}\\s`, 'g'), `${word} `)
  result = result.replace(new RegExp(`\\s${escaped}`, 'g'), ` ${word}`)
})

// ===== SQUARE-BRACKET PHONETICS =====
result = result.replace(/\[([^\]]+)\]/g, (match, content) => {
  let cleaned = content.replace(/[ˈˌ]/g, '')
  const replacements = {
    // Vowels
    'iː': 'ee', 'ɪ': 'ih', 'e': 'eh', 'æ': 'a',
    'ɑː': 'ah', 'ɒ': 'o', 'ɔː': 'aw', 'ʊ': 'uh',
    'uː': 'oo', 'ʌ': 'uh', 'ɜː': 'er', 'ə': 'uh',
    'eɪ': 'ay', 'aɪ': 'eye', 'ɔɪ': 'oy',
    'aʊ': 'ow', 'əʊ': 'oh', 'oʊ': 'oh',
    'ɪə': 'ear', 'eə': 'air', 'ʊə': 'ure',
    'aɪə': 'eye-uh', 'aʊə': 'ow-uh', 'eɪə': 'ay-uh',
    // Consonants
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd',
    'k': 'k', 'g': 'g', 'f': 'f', 'v': 'v',
    'θ': 'th', 'ð': 'th', 's': 's', 'z': 'z',
    'ʃ': 'sh', 'ʒ': 'zh', 'h': 'h', 'tʃ': 'ch',
    'dʒ': 'j', 'm': 'm', 'n': 'n', 'ŋ': 'ng',
    'l': 'l', 'r': 'r', 'w': 'w', 'j': 'y',
    'x': 'kh', 'hw': 'wh', 'ɫ': 'l', 'ɹ': 'r',
  }
  Object.entries(replacements).forEach(([symbol, word]) => {
    cleaned = cleaned.replace(new RegExp(symbol, 'g'), word)
  })
  return ` ${cleaned} `
})

// ===== SLASH PHONETICS =====
result = result.replace(/\/([^\/]+)\//g, (match, content) => {
  let cleaned = content.replace(/[ˈˌ]/g, '')
  const replacements = {
    // Vowels
    'iː': 'ee', 'ɪ': 'ih', 'e': 'eh', 'æ': 'a',
    'ɑː': 'ah', 'ɒ': 'o', 'ɔː': 'aw', 'ʊ': 'uh',
    'uː': 'oo', 'ʌ': 'uh', 'ɜː': 'er', 'ə': 'uh',
    'eɪ': 'ay', 'aɪ': 'eye', 'ɔɪ': 'oy',
    'aʊ': 'ow', 'əʊ': 'oh', 'oʊ': 'oh',
    'ɪə': 'ear', 'eə': 'air', 'ʊə': 'ure',
    'aɪə': 'eye-uh', 'aʊə': 'ow-uh', 'eɪə': 'ay-uh',
    // Consonants
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd',
    'k': 'k', 'g': 'g', 'f': 'f', 'v': 'v',
    'θ': 'th', 'ð': 'th', 's': 's', 'z': 'z',
    'ʃ': 'sh', 'ʒ': 'zh', 'h': 'h', 'tʃ': 'ch',
    'dʒ': 'j', 'm': 'm', 'n': 'n', 'ŋ': 'ng',
    'l': 'l', 'r': 'r', 'w': 'w', 'j': 'y',
    'x': 'kh', 'hw': 'wh', 'ɫ': 'l', 'ɹ': 'r',
  }
  Object.entries(replacements).forEach(([symbol, word]) => {
    cleaned = cleaned.replace(new RegExp(symbol, 'g'), word)
  })
  return ` ${cleaned} `
})
  
  // ============================================================
  // CLEANUP
  // ============================================================
  result = result.replace(/\.{3,}/g, ' . . . ')
  result = result.replace(/\s{2,}/g, ' ')
  result = result.trim()

  // Inverse trig functions
result = result.replace(/tan⁻¹/g, 'inverse tangent')
result = result.replace(/sin⁻¹/g, 'inverse sine')
result = result.replace(/cos⁻¹/g, 'inverse cosine')

// Directional abbreviations
result = result.replace(/\(W\)/g, 'West')
result = result.replace(/\(E\)/g, 'East')
result = result.replace(/\(S\)/g, 'South')
result = result.replace(/\(N\)/g, 'North')
result = result.replace(/\(NE\)/g, 'Northeast')
result = result.replace(/\(NW\)/g, 'Northwest')
result = result.replace(/\(SE\)/g, 'Southeast')
result = result.replace(/\(SW\)/g, 'Southwest')

  return result
}

// ============================================================
// HELPER: Get plain text from lesson content
// ============================================================

  const getLessonText = (lesson) => {
  if (!lesson?.content) return ''
  
  let text = ''
  if (typeof lesson.content === 'string') {
    text = lesson.content
  } else if (lesson.content?.introduction) {
    text = lesson.content.introduction || ''
    if (lesson.content.sections) {
      lesson.content.sections.forEach(section => {
        text += '\n\n' + (section.text || '')
      })
    }
    if (lesson.content.summary) {
      text += '\n\n' + lesson.content.summary
    }
  }
  
  
  text = text.replace(/<li>/g, '• ')
  text = text.replace(/<\/li>/g, '')
  text = text.replace(/<ul>/g, '')
  text = text.replace(/<\/ul>/g, '')
  text = text.replace(/<ol>/g, '')
  text = text.replace(/<\/ol>/g, '')
  text = text.replace(/<strong>/g, '')
  text = text.replace(/<\/strong>/g, '')
  text = text.replace(/<em>/g, '')
  text = text.replace(/<\/em>/g, '')
  
  const cleanText = text.replace(/<[^>]*>/g, '').trim()
  return formatTextForTTS(cleanText)
}

// ============================================================
// CALCULATOR COMPONENT (Inline)
// ============================================================
export function Calculator({ onClose }) {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState(null)

  const handleNumber = (num) => {
    setDisplay(prev => prev === '0' ? String(num) : prev + String(num))
  }

  const handleOperator = (op) => {
    setEquation(prev => prev + display + op)
    setDisplay('0')
  }

  const handleEquals = () => {
    try {
      const finalEquation = equation + display
      const result = new Function(`return (${finalEquation})`)()
      setResult(result)
      setDisplay(String(result))
      setEquation(finalEquation + '=')
    } catch (e) {
      setDisplay('Error')
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
    setResult(null)
  }

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100))
  }

  const handleNegate = () => {
    setDisplay(String(-parseFloat(display)))
  }

  return (
    <div className="modal-overlay" style={{ zIndex: 100 }}>
      <div className="modal" style={{ maxWidth: '360px', padding: 'var(--space-4)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <span style={{ fontWeight: '700', color: 'var(--color-text)' }}>Calculator</span>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: 'var(--space-1)' }}>
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <div style={{ 
          background: 'var(--color-background)', 
          padding: 'var(--space-4)', 
          borderRadius: 'var(--radius-xl)', 
          marginBottom: 'var(--space-4)',
          textAlign: 'right'
        }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', height: '24px' }}>
            {equation}
          </div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'var(--color-text)' }}>
            {display}
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-2)' }}>
          {['C', '±', '%', '÷'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === 'C') handleClear()
                else if (btn === '±') handleNegate()
                else if (btn === '%') handlePercent()
                else if (btn === '÷') handleOperator('/')
              }}
              className="btn btn-outline"
              style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
            >
              {btn}
            </button>
          ))}
          {[7, 8, 9, '×'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (typeof btn === 'number') handleNumber(btn)
                else handleOperator('*')
              }}
              className="btn btn-outline"
              style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
            >
              {btn}
            </button>
          ))}
          {[4, 5, 6, '−'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (typeof btn === 'number') handleNumber(btn)
                else handleOperator('-')
              }}
              className="btn btn-outline"
              style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
            >
              {btn}
            </button>
          ))}
          {[1, 2, 3, '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (typeof btn === 'number') handleNumber(btn)
                else handleOperator('+')
              }}
              className="btn btn-outline"
              style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleNumber(0)}
            className="btn btn-outline"
            style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)', gridColumn: 'span 2' }}
          >
            0
          </button>
          <button
            onClick={() => { if (!display.includes('.')) setDisplay(display + '.') }}
            className="btn btn-outline"
            style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
          >
            .
          </button>
          <button
            onClick={handleEquals}
            className="btn btn-primary"
            style={{ padding: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// VOICE BUTTON — For lesson list (dropdown with voice settings)
// ============================================================
export function VoiceButton({ lesson, isPlaying, onPlay, onStop }) {
  const [loading, setLoading] = useState(false)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState('en-US-JennyNeural')
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const loadVoices = async () => {
      try {
        const result = await voice.getVoices('fair')
        setVoices(result || [])
        const defaultVoice = result.find(v => v.locale === 'en-NG') || result[0]
        if (defaultVoice) setSelectedVoice(defaultVoice.name)
      } catch (err) {
        console.error('Failed to load voices:', err)
      }
    }
    loadVoices()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handlePlay = async () => {
    if (isPlaying) {
      onStop?.()
      return
    }

    if (!lesson?.content) return
    setLoading(true)

    try {
      const text = getLessonText(lesson)
      if (!text) return

      const result = await voice.synthesize({
        text,
        voice: selectedVoice,
        type: 'fair',
        speed: 1,
        mode: 'education'
      })

      if (result.success && result.url) {
        const url = result.url.startsWith('http')
          ? result.url
          : `https://hyezen.onrender.com${result.url}`
        onPlay?.(url)
      }
    } catch (err) {
      console.error('TTS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <button
        onClick={handlePlay}
        className="btn btn-ghost"
        style={{ padding: 'var(--space-1) var(--space-2)' }}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} />
        ) : isPlaying ? (
          <Square style={{ width: '18px', height: '18px' }} />
        ) : (
          <Volume2 style={{ width: '18px', height: '18px' }} />
        )}
      </button>

      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="btn btn-ghost"
        style={{ padding: 'var(--space-1)' }}
      >
        <ChevronDown style={{ width: '14px', height: '14px' }} />
      </button>

      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 'var(--space-1)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius)',
            padding: 'var(--space-2)',
            minWidth: '200px',
            maxHeight: '250px',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 100
          }}
        >
          {voices.map((v) => (
            <button
              key={v.name}
              onClick={() => {
                setSelectedVoice(v.name)
                setShowDropdown(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: 'var(--space-1) var(--space-2)',
                background: selectedVoice === v.name ? 'var(--color-primary-light)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text)'
              }}
            >
              {v.label || v.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ============================================================
// LESSON CARD — Shows on the lessons list with Voice Button + Bookmark
// ============================================================
export function LessonCard({ 
  lesson, 
  mastery, 
  onClick,
  index,
  isLocked = false 
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioRef, setAudioRef] = useState(null)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Check if bookmarked on mount
  useEffect(() => {
    const bookmarks = storage.getBookmarks()
    const exists = bookmarks.some(b => b.targetId === lesson.id && b.targetType === 'lesson')
    setIsBookmarked(exists)
  }, [lesson.id])

  const handlePlay = (url) => {
    if (audioRef) {
      audioRef.pause()
      audioRef.src = ''
    }
    const audio = new Audio(url)
    audio.onplay = () => setIsPlaying(true)
    audio.onended = () => setIsPlaying(false)
    audio.onerror = () => setIsPlaying(false)
    audio.play()
    setAudioRef(audio)
  }

  const handleStop = () => {
    if (audioRef) {
      audioRef.pause()
      audioRef.currentTime = 0
      setIsPlaying(false)
    }
  }

  const handleBookmark = (e) => {
    e.stopPropagation()
    
    if (isBookmarked) {
      const bookmarks = storage.getBookmarks()
      const filtered = bookmarks.filter(b => b.targetId !== lesson.id || b.targetType !== 'lesson')
      storage.saveBookmarks(filtered)
      setIsBookmarked(false)
    } else {
      storage.addBookmark({
        targetId: lesson.id,
        targetType: 'lesson',
        title: lesson.name,
        subject: lesson.subject,
        topic: lesson.topic || 'General',
        icon: lesson.icon || '📚',
        url: `/lessons/${lesson.id}`,
        content: lesson.content,
        hasTest: false
      })
      setIsBookmarked(true)
    }
  }

  const isCompleted = mastery >= 80
  const statusColor = isCompleted ? 'var(--color-success)' : mastery >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'

  return (
    <div 
      onClick={() => !isLocked && onClick()}
      className="card card-hover"
      style={{ 
        cursor: isLocked ? 'default' : 'pointer',
        padding: 'var(--space-4)',
        borderLeft: `4px solid ${isLocked ? 'var(--color-border)' : statusColor}`,
        transition: 'all var(--transition)',
        opacity: isLocked ? 0.7 : 1,
        position: 'relative'
      }}
    >
      {isLocked && (
        <div style={{ 
          position: 'absolute',
          top: 'var(--space-2)',
          right: 'var(--space-2)',
          background: 'var(--color-warning-light)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-1) var(--space-2)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-warning)'
        }}>
          <Lock style={{ width: '12px', height: '12px' }} />
          Locked
        </div>
      )}
      
      <div className="flex-between" style={{ alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              {lesson.icon || '📚'}
            </span>
            <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>{lesson.name}</span>
            {isCompleted && (
              <span className="badge badge-success" style={{ fontSize: 'var(--font-size-xs)' }}>
                <CheckCircle2 style={{ width: '12px', height: '12px', display: 'inline' }} /> Mastered
              </span>
            )}
            {lesson.grade_level && (
              <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                {lesson.grade_level}
              </span>
            )}
          </div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
            {lesson.subject} • {lesson.topic}
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          {!isLocked && (
            <button
              onClick={handleBookmark}
              className="btn btn-ghost"
              style={{ padding: 'var(--space-1) var(--space-2)' }}
              title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              <Star 
                style={{ 
                  width: '18px', 
                  height: '18px', 
                  color: isBookmarked ? 'var(--color-warning)' : 'var(--color-text-muted)',
                  fill: isBookmarked ? 'var(--color-warning)' : 'none'
                }} 
              />
            </button>
          )}
          {!isLocked && lesson.content && (
            <VoiceButton
              lesson={lesson}
              isPlaying={isPlaying}
              onPlay={handlePlay}
              onStop={handleStop}
            />
          )}
          <div style={{ minWidth: '80px', textAlign: 'right' }}>
            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: '700', color: statusColor }}>
              {mastery}%
            </div>
            <div className="progress" style={{ width: '80px', height: '4px', marginTop: '4px' }}>
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${mastery}%`, 
                  background: statusColor,
                  height: '4px'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// LESSON VIEWER — Read the lesson content with Voice icon + Bookmark
// ============================================================
export function LessonViewer({ 
  lesson, 
  onMarkRead, 
  onTakeTest,
  onBack,
  isRead = false,
  loading = false
}) {
  const [activeSection, setActiveSection] = useState(null)
  const [expandedSections, setExpandedSections] = useState({})
  const [isBookmarked, setIsBookmarked] = useState(false)
  
  // Voice state
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isLoadingVoice, setIsLoadingVoice] = useState(false)
  const audioRef = useRef(null)

  // Check if bookmarked on mount
  useEffect(() => {
    if (lesson?.id) {
      const bookmarks = storage.getBookmarks()
      const exists = bookmarks.some(b => b.targetId === lesson.id && b.targetType === 'lesson')
      setIsBookmarked(exists)
    }
  }, [lesson?.id])

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  const handleBookmark = () => {
    if (isBookmarked) {
      const bookmarks = storage.getBookmarks()
      const filtered = bookmarks.filter(b => b.targetId !== lesson.id || b.targetType !== 'lesson')
      storage.saveBookmarks(filtered)
      setIsBookmarked(false)
    } else {
      storage.addBookmark({
        targetId: lesson.id,
        targetType: 'lesson',
        title: lesson.name,
        subject: lesson.subject,
        topic: lesson.topic || 'General',
        icon: lesson.icon || '📚',
        url: `/lessons/${lesson.id}`,
        content: lesson.content,
        hasTest: false
      })
      setIsBookmarked(true)
    }
  }

  const handleSpeak = async () => {
    if (!lesson?.content) return

    if (isSpeaking) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setIsSpeaking(false)
      return
    }

    const text = getLessonText(lesson)
    if (!text) {
      console.warn('No text content to read')
      return
    }

    setIsLoadingVoice(true)

    try {
      const result = await voice.synthesize({
        text,
        voice: 'en-US-JennyNeural',
        type: 'fair',
        speed: 1,
        mode: 'education'
      })

      if (result.success && result.url) {
        const url = result.url.startsWith('http')
          ? result.url
          : `https://hyezen.onrender.com${result.url}`
        
        if (audioRef.current) {
          audioRef.current.src = url
          audioRef.current.play()
          setIsSpeaking(true)
        }
      }
    } catch (error) {
      console.error('TTS error:', error)
    } finally {
      setIsLoadingVoice(false)
    }
  }

  const handleAudioEnd = () => {
    setIsSpeaking(false)
  }

  if (!lesson) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-12)' }}>
        <div className="flex-center" style={{ 
          width: '64px', height: '64px', borderRadius: '50%', 
          background: 'var(--color-border)',
          margin: '0 auto var(--space-4)'
        }}>
          <BookOpen style={{ width: '32px', height: '32px', color: 'var(--color-text-muted)' }} />
        </div>
        <h3 className="h3" style={{ marginBottom: 'var(--space-2)' }}>No Lesson Selected</h3>
        <p className="text-muted">Select a lesson to start learning</p>
        <button className="btn btn-primary" onClick={onBack} style={{ marginTop: 'var(--space-4)' }}>
          Back to Lessons
        </button>
      </div>
    )
  }

  // Get content - handle both string and object formats
  const getContentText = () => {
    if (typeof lesson.content === 'string') return lesson.content
    if (lesson.content?.introduction) {
      let text = lesson.content.introduction || ''
      if (lesson.content.sections) {
        lesson.content.sections.forEach(section => {
          text += '\n\n' + section.text || ''
        })
      }
      if (lesson.content.summary) {
        text += '\n\n' + lesson.content.summary
      }
      return text
    }
    return 'No content available.'
  }

  const renderContent = () => {
    if (typeof lesson.content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br/>') }} />
    }

    if (lesson.content?.introduction || lesson.content?.sections || lesson.content?.summary) {
      return (
        <div className="lesson-content">
          {lesson.content.introduction && (
            <div className="intro-section" style={{ marginBottom: 'var(--space-4)' }}>
              <div dangerouslySetInnerHTML={{ __html: lesson.content.introduction }} />
            </div>
          )}

          {lesson.content.sections && lesson.content.sections.map((section, idx) => {
            const isExpanded = expandedSections[section.id] !== false
            return (
              <div key={section.id || idx} className="section-block" style={{ 
                marginBottom: 'var(--space-3)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setExpandedSections(prev => ({
                    ...prev,
                    [section.id]: !prev[section.id]
                  }))}
                  style={{
                    width: '100%',
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'var(--color-background)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>
                    {section.title || `Section ${idx + 1}`}
                    {section.objective && (
                      <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>
                        Objective {section.objective.replace('obj_', '')}
                      </span>
                    )}
                  </span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isExpanded && (
                  <div style={{ padding: 'var(--space-4)' }}>
                    <div dangerouslySetInnerHTML={{ __html: section.text || 'No content.' }} />
                  </div>
                )}
              </div>
            )
          })}

          {lesson.content.summary && (
            <div style={{ 
              padding: 'var(--space-4)',
              background: 'var(--color-primary-light)',
              borderRadius: 'var(--radius-xl)',
              marginTop: 'var(--space-4)'
            }}>
              <div dangerouslySetInnerHTML={{ __html: lesson.content.summary }} />
            </div>
          )}
        </div>
      )
    }

    return <div dangerouslySetInnerHTML={{ __html: getContentText().replace(/\n/g, '<br/>') }} />
  }

  // Render videos
  const renderVideos = () => {
    const videos = lesson.videos || []
    if (videos.length === 0) return null

    return (
      <div style={{ 
        padding: 'var(--space-4)',
        background: 'var(--color-background)',
        borderRadius: 'var(--radius-xl)',
        marginBottom: 'var(--space-4)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <Video style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Lesson Videos</span>
        </div>
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {videos.map((video) => (
            <div key={video.id} style={{
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)'
            }}>
              <div className="flex-center" style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius)',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)'
              }}>
                <Play style={{ width: '16px', height: '16px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                  {video.title}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {video.duration || 'Coming soon'} • {video.description || ''}
                </div>
              </div>
              <span className="badge badge-muted" style={{ fontSize: 'var(--font-size-xs)' }}>
                {video.url && video.url !== 'YOUR_VIDEO_URL_HERE' ? 'Watch' : 'Coming Soon'}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Render key terms
  const renderKeyTerms = () => {
    const terms = lesson.keyTerms || []
    if (terms.length === 0) return null

    return (
      <div style={{ 
        padding: 'var(--space-4)',
        background: 'var(--color-primary-light)',
        borderRadius: 'var(--radius-xl)',
        marginBottom: 'var(--space-4)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <Lightbulb style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Key Terms</span>
        </div>
        <div className="grid-2" style={{ gap: 'var(--space-2)' }}>
          {terms.map((term, i) => {
            const termText = typeof term === 'string' ? term : term.term
            const definition = typeof term === 'string' ? null : term.definition
            return (
              <div key={i} style={{
                padding: 'var(--space-2) var(--space-3)',
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--color-border)'
              }}>
                <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                  {termText}
                </span>
                {definition && (
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'block' }}>
                    {definition}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Render objectives
  const renderObjectives = () => {
    const objectives = lesson.objectives || []
    if (objectives.length === 0) return null

    const getDifficultyColor = (level) => {
      if (level === 'easy') return 'var(--color-success)'
      if (level === 'medium') return 'var(--color-warning)'
      if (level === 'hard') return 'var(--color-danger)'
      return 'var(--color-text-muted)'
    }

    return (
      <div style={{ 
        padding: 'var(--space-4)',
        background: 'var(--color-background)',
        borderRadius: 'var(--radius-xl)',
        marginBottom: 'var(--space-4)'
      }}>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <Target style={{ width: '18px', height: '18px', color: 'var(--color-primary)' }} />
          <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>Learning Objectives</span>
        </div>
        <div className="stack" style={{ gap: 'var(--space-2)' }}>
          {objectives.map((obj) => (
            <div key={obj.id} style={{
              padding: 'var(--space-2) var(--space-3)',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)'
            }}>
              <span className="badge" style={{
                fontSize: 'var(--font-size-xs)',
                background: getDifficultyColor(obj.level),
                color: 'white',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                flexShrink: 0
              }}>
                {obj.level || 'General'}
              </span>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                  {obj.description}
                </div>
                {obj.indicator && (
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    🎯 {obj.indicator}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="card" style={{ padding: 'var(--space-6)' }}>
      {/* Audio element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnd}
        onError={handleAudioEnd}
        style={{ display: 'none' }}
      />

      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
        <div>
          <button 
            onClick={onBack}
            className="btn btn-ghost"
            style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-sm)' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
          </button>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginTop: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-xl)' }}>{lesson.icon || '📚'}</span>
            <h2 className="h2" style={{ margin: 0 }}>{lesson.name}</h2>
          </div>
          <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', flexWrap: 'wrap' }}>
            <span>{lesson.subject} • {lesson.topic}</span>
            {lesson.grade_level && (
              <>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-border)' }} />
                <span>{lesson.grade_level}</span>
              </>
            )}
            {lesson.estimated_duration && (
              <>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-border)' }} />
                <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
                  <Clock style={{ width: '14px', height: '14px' }} />
                  {lesson.estimated_duration}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="btn btn-ghost"
            style={{ padding: 'var(--space-1) var(--space-2)' }}
            title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <Star 
              style={{ 
                width: '20px', 
                height: '20px', 
                color: isBookmarked ? 'var(--color-warning)' : 'var(--color-text-muted)',
                fill: isBookmarked ? 'var(--color-warning)' : 'none'
              }} 
            />
          </button>

          {/* Voice icon - small, just the icon */}
          <button
            onClick={handleSpeak}
            disabled={isLoadingVoice}
            className="btn btn-ghost"
            style={{
              padding: 'var(--space-1) var(--space-2)',
              color: isSpeaking ? 'var(--color-primary)' : 'var(--color-text-muted)'
            }}
            title={isSpeaking ? 'Stop reading' : 'Read aloud'}
          >
            {isLoadingVoice ? (
              <Loader2 className="spinner" style={{ width: '18px', height: '18px' }} />
            ) : isSpeaking ? (
              <Square style={{ width: '18px', height: '18px' }} />
            ) : (
              <Volume2 style={{ width: '18px', height: '18px' }} />
            )}
          </button>

          <span className={`badge ${isRead ? 'badge-success' : 'badge-muted'}`}>
            {isRead ? <CheckCircle2 style={{ width: '14px', height: '14px', display: 'inline' }} /> : null}
            {isRead ? ' Read' : ' Not Read'}
          </span>
        </div>
      </div>

      {/* Objectives */}
      {renderObjectives()}

      {/* Videos */}
      {renderVideos()}

      {/* Key Terms */}
      {renderKeyTerms()}

      {/* Content */}
      <div style={{ 
        padding: 'var(--space-4)', 
        background: 'var(--color-background)',
        borderRadius: 'var(--radius-xl)',
        maxHeight: '500px',
        overflowY: 'auto',
        marginBottom: 'var(--space-4)'
      }}>
        {renderContent()}
      </div>

      {/* Actions */}
      <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <button
          onClick={onMarkRead}
          disabled={isRead || loading}
          className={`btn ${isRead ? 'btn-success' : 'btn-primary'}`}
          style={{ flex: 1 }}
        >
          {loading ? (
            <><Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} /> Marking...</>
          ) : isRead ? (
            <><CheckCircle2 style={{ width: '16px', height: '16px' }} /> Read ✓</>
          ) : (
            <><CheckCircle style={{ width: '16px', height: '16px' }} /> Mark as Read</>
          )}
        </button>
        <button
          onClick={onTakeTest}
          className="btn btn-secondary"
          style={{ flex: 1 }}
        >
          <Target style={{ width: '16px', height: '16px' }} /> Take Test
        </button>
      </div>
    </div>
  )
}

// ============================================================
// LESSON TEST — Practice questions with calculator
// ============================================================
export function LessonTest({ 
  lesson,
  questions,
  onComplete,
  onBack,
  subject = 'General',
  topic = 'General'
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [xpEarned, setXpEarned] = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [loading, setLoading] = useState(false)
  const { updateProgress } = useProgress()

  const total = questions.length
  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const letters = ['A', 'B', 'C', 'D']

  const handleAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }))
  }

  const handleSubmit = async () => {
    if (loading) return
    const answered = Object.keys(answers).length
    if (answered < total) {
      if (!confirm(`You've answered ${answered}/${total}. Submit anyway?`)) return
    }

    setLoading(true)

    try {
      const scoreData = calculateScore(questions, answers)
      const xp = calculateXP(scoreData, 0)

      const result = updateProgress({
        type: 'practice',
        subject: subject,
        topic: topic,
        questions: questions,
        answers: answers,
        timeTaken: 0,
        mode: 'Lesson Test'
      })

      setResults(scoreData)
      setXpEarned(result.xp || xp)
      setSubmitted(true)
      setShowReview(true)

      if (onComplete) {
        onComplete({
          ...scoreData,
          xp: result.xp || xp,
          answers,
        })
      }
    } catch (error) {
      console.error('Failed to submit test:', error)
      alert('Failed to submit test. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setAnswers({})
    setSubmitted(false)
    setResults(null)
    setXpEarned(0)
    setShowReview(false)
  }

  // Show results
  if (submitted && results && showReview) {
    const isPassed = results.accuracy >= 70

    return (
      <div className="card" style={{ padding: 'var(--space-6)' }}>
        <button onClick={onBack} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
          <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
        </button>

        <div className="text-center" style={{ margin: 'var(--space-6) 0' }}>
          <div style={{ 
            width: '80px', height: '80px', borderRadius: '50%',
            background: isPassed ? 'var(--color-success-light)' : 'var(--color-danger-light)',
            margin: '0 auto var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {isPassed ? (
              <Award style={{ width: '40px', height: '40px', color: 'var(--color-success)' }} />
            ) : (
              <XCircle style={{ width: '40px', height: '40px', color: 'var(--color-danger)' }} />
            )}
          </div>
          <h2 className="h2" style={{ color: isPassed ? 'var(--color-success)' : 'var(--color-danger)' }}>
            {isPassed ? '🎉 Lesson Passed!' : 'Keep Practicing!'}
          </h2>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'var(--color-primary)' }}>
            {results.accuracy}%
          </div>
          <p className="text-muted">{results.score} out of {results.total} correct</p>
          <div style={{ marginTop: 'var(--space-3)' }}>
            <span className="badge badge-primary" style={{ fontSize: 'var(--font-size-sm)' }}>
              <Zap style={{ width: '16px', height: '16px', display: 'inline' }} /> +{xpEarned} XP
            </span>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-success)' }}>{results.correct}</div>
            <div className="text-muted">Correct</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-danger)' }}>{results.wrong}</div>
            <div className="text-muted">Wrong</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-warning)' }}>{results.skipped}</div>
            <div className="text-muted">Skipped</div>
          </div>
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)' }}>
          <button className="btn btn-primary flex-1" onClick={() => setShowReview(false)}>
            <Eye style={{ width: '16px', height: '16px' }} /> Review Questions
          </button>
          <button className="btn btn-outline flex-1" onClick={handleRetry}>
            <RotateCw style={{ width: '16px', height: '16px' }} /> Retry
          </button>
          <button className="btn btn-outline flex-1" onClick={onBack}>
            <Home style={{ width: '16px', height: '16px' }} /> Done
          </button>
        </div>
      </div>
    )
  }

  // Review mode (showing correct answers)
  if (submitted && results && !showReview) {
    return (
      <div className="card" style={{ padding: 'var(--space-6)' }}>
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <button onClick={() => setShowReview(true)} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Results
          </button>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Reviewing {total} questions
          </span>
        </div>

        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {questions.map((q, idx) => {
            const userAnswer = answers[q.id]
            const correctAnswer = q.answer || q.answer_key
            const isCorrect = userAnswer === correctAnswer
            const letters = ['A', 'B', 'C', 'D']

            return (
              <div key={q.id} className="card" style={{ marginBottom: 'var(--space-3)', padding: 'var(--space-4)', border: `2px solid ${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'}` }}>
                <div className="flex-between">
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>
                    Question {idx + 1}
                    {q.difficulty && (
                      <span className={`badge ${q.difficulty === 'easy' ? 'badge-success' : q.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>
                        {q.difficulty}
                      </span>
                    )}
                  </span>
                  <span className={`badge ${isCorrect ? 'badge-success' : 'badge-danger'}`}>
                    {isCorrect ? '✅ Correct' : '❌ Wrong'}
                  </span>
                </div>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', margin: 'var(--space-2) 0' }}>{q.question}</p>
                
                {q.options && q.options.length > 0 && (
                  <div className="stack" style={{ gap: 'var(--space-1)' }}>
                    {q.options.map((opt, optIdx) => {
                      const letter = letters[optIdx]
                      const isSelected = userAnswer === opt
                      const isCorrectAnswer = correctAnswer === opt
                      let bg = 'var(--color-surface)'
                      let borderColor = 'var(--color-border)'
                      let textColor = 'var(--color-text)'

                      if (isCorrectAnswer) {
                        bg = 'var(--color-success-light)'
                        borderColor = 'var(--color-success)'
                        textColor = 'var(--color-success)'
                      } else if (isSelected && !isCorrect) {
                        bg = 'var(--color-danger-light)'
                        borderColor = 'var(--color-danger)'
                        textColor = 'var(--color-danger)'
                      }

                      return (
                        <div key={optIdx} style={{ 
                          padding: 'var(--space-2) var(--space-3)',
                          borderRadius: 'var(--radius)',
                          background: bg,
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                          fontSize: 'var(--font-size-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)'
                        }}>
                          <span style={{ fontWeight: '700', minWidth: '20px' }}>{letter}.</span>
                          <span>{opt}</span>
                          {isCorrectAnswer && <CheckCircle2 style={{ width: '14px', height: '14px', marginLeft: 'auto' }} />}
                          {isSelected && !isCorrect && <XCircle style={{ width: '14px', height: '14px', marginLeft: 'auto' }} />}
                        </div>
                      )
                    })}
                  </div>
                )}

                {q.explanation && (
                  <div style={{ 
                    marginTop: 'var(--space-2)',
                    padding: 'var(--space-2) var(--space-3)',
                    background: 'var(--color-primary-light)',
                    borderRadius: 'var(--radius)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)'
                  }}>
                    <Info style={{ width: '14px', height: '14px', display: 'inline', marginRight: 'var(--space-1)' }} />
                    {q.explanation}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <button className="btn btn-primary flex-1" onClick={() => setShowReview(true)}>
            <BarChart3 style={{ width: '16px', height: '16px' }} /> Back to Results
          </button>
        </div>
      </div>
    )
  }

  // Active test view
  if (currentQuestion) {
    return (
      <div className="card" style={{ padding: 'var(--space-6)' }}>
        {/* Header */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
          <div>
            <button onClick={onBack} className="btn btn-ghost" style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back
            </button>
            <h2 className="h2" style={{ marginTop: 'var(--space-2)' }}>Test: {lesson.name}</h2>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{subject} • {topic}</p>
          </div>
          <button 
            onClick={() => setShowCalculator(true)}
            className="btn btn-outline"
            style={{ padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--font-size-sm)' }}
          >
            <CalculatorIcon style={{ width: '16px', height: '16px' }} />
          </button>
          {showCalculator && <Calculator onClose={() => setShowCalculator(false)} />}
        </div>

        {/* Progress */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>
            Question {currentIndex + 1} of {total}
            {currentQuestion.difficulty && (
              <span className={`badge ${currentQuestion.difficulty === 'easy' ? 'badge-success' : currentQuestion.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'}`} style={{ fontSize: 'var(--font-size-xs)', marginLeft: 'var(--space-2)' }}>
                {currentQuestion.difficulty}
              </span>
            )}
          </span>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {answeredCount}/{total} answered
          </span>
        </div>
        <div className="progress" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="progress-fill progress-fill-primary" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
        </div>

        {/* Question */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{ 
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--space-4)'
          }}>
            <div style={{ fontSize: 'var(--font-size-base)', fontWeight: '500', color: 'var(--color-text)' }}>
              {currentQuestion.question}
            </div>
          </div>

          {currentQuestion.options && currentQuestion.options.length > 0 ? (
            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {currentQuestion.options.map((option, idx) => {
                const letter = letters[idx]
                const isSelected = answers[currentQuestion.id] === option
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`card card-hover flex-between ${isSelected ? 'success-card' : ''}`}
                    style={{ 
                      cursor: 'pointer',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      background: isSelected ? 'var(--color-primary-light)' : 'var(--color-surface)',
                      padding: 'var(--space-3) var(--space-4)'
                    }}
                  >
                    <div className="flex" style={{ gap: 'var(--space-4)' }}>
                      <span className="flex-center" style={{ 
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                        color: isSelected ? 'white' : 'var(--color-text-secondary)',
                        fontWeight: '700'
                      }}>
                        {letter}
                      </span>
                      <span className={isSelected ? 'h4' : ''}>{option}</span>
                    </div>
                    {isSelected && <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />}
                  </button>
                )
              })}
            </div>
          ) : (
            <div style={{ 
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--color-warning-light)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                Type your answer below (not available in this test format)
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-between">
          <button 
            className="btn btn-outline" 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? '0.4' : '1' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Previous
          </button>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {currentIndex + 1} / {total}
          </span>
          {currentIndex === total - 1 ? (
            <button className="btn btn-success" onClick={handleSubmit} disabled={loading}>
              {loading ? <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} /> : <CheckCircle2 style={{ width: '16px', height: '16px' }} />}
              {loading ? 'Submitting...' : 'Submit Test'}
            </button>
          ) : (
            <button className="btn btn-outline" onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}>
              Next <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
          )}
        </div>

        {/* Palette */}
        <div className="card" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Question Palette</div>
          <div className="flex" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {questions.map((q, i) => {
              const isAnswered = !!answers[q.id]
              const isCurrent = i === currentIndex
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="flex-center"
                  style={{
                    width: '36px', height: '36px', borderRadius: 'var(--radius)',
                    background: isCurrent ? 'var(--color-primary)' : isAnswered ? 'var(--color-success-light)' : 'var(--color-border)',
                    color: isCurrent ? 'white' : isAnswered ? 'var(--color-success)' : 'var(--color-text-secondary)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-sm)',
                    transition: 'all var(--transition)',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)' }} /> Current
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-success-light)', border: '1px solid var(--color-success)' }} /> Answered
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-border)' }} /> Unanswered
            </span>
          </div>
        </div>
      </div>
    )
  }

  return null
}
