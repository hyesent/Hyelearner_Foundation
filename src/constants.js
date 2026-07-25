// ============================================================
// HYELEARNER: FOUNDATION — CONSTANTS (COMPLETE)
// All static data: subjects, topics, routes, theme, badges, XP, etc.
// Built by Hyesent.dev
// ============================================================

// ============================================================
// SUBJECTS & TOPICS (FULL TREE)
// ============================================================

export const SUBJECTS = {
  mathematics: {
    label: 'Mathematics',
    icon: '📐',
    color: '#4F46E5',
    topics: [
      'Algebra',
      'Geometry',
      'Trigonometry',
      'Statistics',
      'Probability',
      'Calculus',
      'Vectors',
      'Number System',
    ],
    subtopics: {
      Algebra: [
        'linear_equations',
        'quadratic_equations',
        'simultaneous_equations',
        'inequalities',
        'polynomials',
        'indices_and_logarithms',
        'sequences_and_series',
      ],
      Geometry: [
        'angles',
        'triangles',
        'circles',
        'polygons',
        'mensuration',
      ],
      Trigonometry: [
        'identities',
        'bearings',
        'elevations',
        'graphs',
      ],
      Statistics: [
        'data_collection',
        'measures',
        'charts',
        'interpretation',
      ],
      Probability: [
        'basic_probability',
        'conditional_probability',
        'permutations_and_combinations',
      ],
      Calculus: [
        'differentiation',
        'integration',
        'applications',
      ],
      Vectors: [
        'vector_operations',
        'position_vectors',
        'vector_geometry',
      ],
      'Number System': [
        'fractions',
        'decimals',
        'percentages',
        'ratios',
        'bases',
      ],
    },
  },

  english: {
    label: 'English Language',
    icon: '📖',
    color: '#22C55E',
    topics: [
      'Grammar',
      'Vocabulary',
      'Comprehension',
      'Summary',
      'Lexis & Structure',
      'Oral English',
      'Essay Writing',
      'Punctuation',
      'Spelling',
      'Idioms',
      'Intonation & Stress',
      'Cloze Passage',
      'Synonyms & Antonyms',
    ],
    subtopics: {
      Grammar: ['grammar'],
      Vocabulary: ['vocabulary'],
      Comprehension: ['comprehension'],
      Summary: ['summary'],
      'Lexis & Structure': ['lexis_and_structure'],
      'Oral English': ['oral_english'],
      'Essay Writing': ['essay_writing'],
      Punctuation: ['punctuation'],
      Spelling: ['spelling'],
      Idioms: ['idioms'],
      'Intonation & Stress': ['intonation_and_stress'],
      'Cloze Passage': ['cloze_passage'],
      'Synonyms & Antonyms': ['synonyms_and_antonyms'],
    },
  },

  physics: {
    label: 'Physics',
    icon: '⚛️',
    color: '#F59E0B',
    topics: [
      'Mechanics',
      'Heat',
      'Waves',
      'Optics',
      'Electricity',
      'Magnetism',
      'Electronics',
      'Modern Physics',
      'Measurements',
    ],
    subtopics: {
      Mechanics: ['mechanics'],
      Heat: ['heat'],
      Waves: ['waves'],
      Optics: ['optics'],
      Electricity: ['electricity'],
      Magnetism: ['magnetism'],
      Electronics: ['electronics'],
      'Modern Physics': ['modern_physics'],
      Measurements: ['measurements'],
    },
  },

  chemistry: {
    label: 'Chemistry',
    icon: '🧪',
    color: '#EF4444',
    topics: [
      'Atomic Structure',
      'Bonding',
      'Periodic Table',
      'Acids & Bases',
      'Organic Chemistry',
      'Electrolysis',
      'Equilibrium',
      'Calculations',
      'Gases',
    ],
    subtopics: {
      'Atomic Structure': ['atomic_structure'],
      Bonding: ['bonding'],
      'Periodic Table': ['periodic_table'],
      'Acids & Bases': ['acids_and_bases'],
      'Organic Chemistry': ['organic_chemistry'],
      Electrolysis: ['electrolysis'],
      Equilibrium: ['equilibrium'],
      Calculations: ['calculations'],
      Gases: ['gases'],
    },
  },

  biology: {
    label: 'Biology',
    icon: '🧬',
    color: '#8B5CF6',
    topics: [
      'Cell Biology',
      'Genetics',
      'Ecology',
      'Evolution',
      'Human Body',
      'Plants',
      'Animals',
      'Microorganisms',
    ],
    subtopics: {
      'Cell Biology': ['cell_biology'],
      Genetics: ['genetics'],
      Ecology: ['ecology'],
      Evolution: ['evolution'],
      'Human Body': ['human_body'],
      Plants: ['plants'],
      Animals: ['animals'],
      Microorganisms: ['microorganisms'],
    },
  },

  agricultural_science: {
    label: 'Agricultural Science',
    icon: '🌾',
    color: '#84CC16',
    topics: [
      'Crop Production',
      'Animal Husbandry',
      'Soil Science',
      'Farm Management',
    ],
    subtopics: {
      'Crop Production': ['crop_production'],
      'Animal Husbandry': ['animal_husbandry'],
      'Soil Science': ['soil_science'],
      'Farm Management': ['farm_management'],
    },
  },

  environmental_science: {
    label: 'Environmental Science',
    icon: '🌍',
    color: '#06B6D4',
    topics: [
      'Environment',
      'Pollution',
      'Conservation',
      'Climate',
    ],
    subtopics: {
      Environment: ['environment'],
      Pollution: ['pollution'],
      Conservation: ['conservation'],
      Climate: ['climate'],
    },
  },

  computer_science: {
    label: 'Computer Science',
    icon: '💻',
    color: '#6366F1',
    topics: [
      'Computer Basics',
      'Programming',
      'Networking',
      'Databases',
    ],
    subtopics: {
      'Computer Basics': ['computer_basics'],
      Programming: ['programming'],
      Networking: ['networking'],
      Databases: ['databases'],
    },
  },

  information_technology: {
    label: 'Information Technology',
    icon: '🖥️',
    color: '#0EA5E9',
    topics: ['Information Technology'],
    subtopics: {
      'Information Technology': ['information_technology'],
    },
  },

  further_mathematics: {
    label: 'Further Mathematics',
    icon: '🔢',
    color: '#7C3AED',
    topics: ['Further Mathematics'],
    subtopics: {
      'Further Mathematics': ['further_mathematics'],
    },
  },

  geography: {
    label: 'Geography',
    icon: '🗺️',
    color: '#14B8A6',
    topics: ['Geography'],
    subtopics: {
      Geography: ['geography'],
    },
  },

  technical_drawing: {
    label: 'Technical Drawing',
    icon: '📏',
    color: '#64748B',
    topics: ['Technical Drawing'],
    subtopics: {
      'Technical Drawing': ['technical_drawing'],
    },
  },

  accounting: {
    label: 'Accounting',
    icon: '📊',
    color: '#0284C7',
    topics: [
      'Bookkeeping',
      'Journals',
      'Ledgers',
      'Trial Balance',
      'Financial Statements',
      'Depreciation',
    ],
    subtopics: {
      Bookkeeping: ['bookkeeping'],
      Journals: ['journals'],
      Ledgers: ['ledgers'],
      'Trial Balance': ['trial_balance'],
      'Financial Statements': ['financial_statements'],
      Depreciation: ['depreciation'],
    },
  },

  business_studies: {
    label: 'Business Studies',
    icon: '💼',
    color: '#0891B2',
    topics: ['Business Studies'],
    subtopics: {
      'Business Studies': ['business_studies'],
    },
  },

  commerce: {
    label: 'Commerce',
    icon: '🏪',
    color: '#059669',
    topics: ['Commerce'],
    subtopics: {
      Commerce: ['commerce'],
    },
  },

  economics: {
    label: 'Economics',
    icon: '📈',
    color: '#D97706',
    topics: ['Economics'],
    subtopics: {
      Economics: ['economics'],
    },
  },

  entrepreneurship: {
    label: 'Entrepreneurship',
    icon: '🚀',
    color: '#DC2626',
    topics: ['Entrepreneurship'],
    subtopics: {
      Entrepreneurship: ['entrepreneurship'],
    },
  },

  finance: {
    label: 'Finance',
    icon: '💰',
    color: '#7C3AED',
    topics: ['Finance'],
    subtopics: {
      Finance: ['finance'],
    },
  },

  marketing: {
    label: 'Marketing',
    icon: '📢',
    color: '#2563EB',
    topics: ['Marketing'],
    subtopics: {
      Marketing: ['marketing'],
    },
  },

  civics: {
    label: 'Civics',
    icon: '🏛️',
    color: '#F97316',
    topics: ['Civics'],
    subtopics: {
      Civics: ['civics'],
    },
  },

  government: {
    label: 'Government',
    icon: '⚖️',
    color: '#EA580C',
    topics: ['Government'],
    subtopics: {
      Government: ['government'],
    },
  },

  history: {
    label: 'History',
    icon: '📜',
    color: '#92400E',
    topics: ['History'],
    subtopics: {
      History: ['history'],
    },
  },

  psychology: {
    label: 'Psychology',
    icon: '🧠',
    color: '#BE185D',
    topics: ['Psychology'],
    subtopics: {
      Psychology: ['psychology'],
    },
  },

  sociology: {
    label: 'Sociology',
    icon: '👥',
    color: '#9D174D',
    topics: ['Sociology'],
    subtopics: {
      Sociology: ['sociology'],
    },
  },

  literature: {
    label: 'Literature',
    icon: '📚',
    color: '#B45309',
    topics: [
      'Poetry',
      'Prose',
      'Drama',
      'Literary Devices',
    ],
    subtopics: {
      Poetry: ['poetry'],
      Prose: ['prose'],
      Drama: ['drama'],
      'Literary Devices': ['literary_devices'],
    },
  },

  philosophy: {
    label: 'Philosophy',
    icon: '🤔',
    color: '#4338CA',
    topics: ['Philosophy'],
    subtopics: {
      Philosophy: ['philosophy'],
    },
  },

  religious_studies: {
    label: 'Religious Studies',
    icon: '🛐',
    color: '#A855F7',
    topics: ['Religious Studies'],
    subtopics: {
      'Religious Studies': ['religious_studies'],
    },
  },

  ethics: {
    label: 'Ethics',
    icon: '⚡',
    color: '#7E22CE',
    topics: ['Ethics'],
    subtopics: {
      Ethics: ['ethics'],
    },
  },

  french: {
    label: 'French',
    icon: '🇫🇷',
    color: '#1E40AF',
    topics: ['French'],
    subtopics: {
      French: ['french'],
    },
  },

  spanish: {
    label: 'Spanish',
    icon: '🇪🇸',
    color: '#DC2626',
    topics: ['Spanish'],
    subtopics: {
      Spanish: ['spanish'],
    },
  },

  german: {
    label: 'German',
    icon: '🇩🇪',
    color: '#000000',
    topics: ['German'],
    subtopics: {
      German: ['german'],
    },
  },

  arabic: {
    label: 'Arabic',
    icon: '🇸🇦',
    color: '#15803D',
    topics: ['Arabic'],
    subtopics: {
      Arabic: ['arabic'],
    },
  },

  chinese: {
    label: 'Chinese',
    icon: '🇨🇳',
    color: '#B91C1C',
    topics: ['Chinese'],
    subtopics: {
      Chinese: ['chinese'],
    },
  },

  portuguese: {
    label: 'Portuguese',
    icon: '🇧🇷',
    color: '#166534',
    topics: ['Portuguese'],
    subtopics: {
      Portuguese: ['portuguese'],
    },
  },

  yoruba: {
    label: 'Yoruba',
    icon: '🇳🇬',
    color: '#65A30D',
    topics: ['Yoruba'],
    subtopics: {
      Yoruba: ['yoruba'],
    },
  },

  igbo: {
    label: 'Igbo',
    icon: '🇳🇬',
    color: '#16A34A',
    topics: ['Igbo'],
    subtopics: {
      Igbo: ['igbo'],
    },
  },

  hausa: {
    label: 'Hausa',
    icon: '🇳🇬',
    color: '#0284C7',
    topics: ['Hausa'],
    subtopics: {
      Hausa: ['hausa'],
    },
  },

  swahili: {
    label: 'Swahili',
    icon: '🇹🇿',
    color: '#2563EB',
    topics: ['Swahili'],
    subtopics: {
      Swahili: ['swahili'],
    },
  },

  fine_arts: {
    label: 'Fine Arts',
    icon: '🎨',
    color: '#E11D48',
    topics: ['Fine Arts'],
    subtopics: {
      'Fine Arts': ['fine_arts'],
    },
  },

  music: {
    label: 'Music',
    icon: '🎵',
    color: '#C026D3',
    topics: ['Music'],
    subtopics: {
      Music: ['music'],
    },
  },

  drama: {
    label: 'Drama',
    icon: '🎭',
    color: '#9333EA',
    topics: ['Drama'],
    subtopics: {
      Drama: ['drama'],
    },
  },

  creative_arts: {
    label: 'Creative Arts',
    icon: '🎪',
    color: '#DB2777',
    topics: ['Creative Arts'],
    subtopics: {
      'Creative Arts': ['creative_arts'],
    },
  },

  health_science: {
    label: 'Health Science',
    icon: '🏥',
    color: '#059669',
    topics: ['Health Science'],
    subtopics: {
      'Health Science': ['health_science'],
    },
  },

  physical_education: {
    label: 'Physical Education',
    icon: '🏃',
    color: '#4F46E5',
    topics: ['Physical Education'],
    subtopics: {
      'Physical Education': ['physical_education'],
    },
  },

  home_economics: {
    label: 'Home Economics',
    icon: '🏠',
    color: '#F59E0B',
    topics: ['Home Economics'],
    subtopics: {
      'Home Economics': ['home_economics'],
    },
  },

  food_and_nutrition: {
    label: 'Food & Nutrition',
    icon: '🍎',
    color: '#EF4444',
    topics: ['Food & Nutrition'],
    subtopics: {
      'Food & Nutrition': ['food_and_nutrition'],
    },
  },
}

// ============================================================
// EXAM TYPES
// ============================================================

export const EXAM_TYPES = [
  { value: 'jamb', label: 'JAMB' },
  { value: 'waec', label: 'WAEC' },
  { value: 'neco', label: 'NECO' },
  { value: 'ssce', label: 'SSCE' },
  { value: 'general', label: 'General Learning' },
]

// ============================================================
// COUNTRIES
// ============================================================

export const COUNTRIES = [
  'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt',
  'UK', 'US', 'Canada', 'Australia', 'Germany', 'France',
  'Other',
]

// ============================================================
// DIFFICULTY LEVELS
// ============================================================

export const DIFFICULTIES = [
  { value: 'easy', label: 'Easy', color: '#22C55E' },
  { value: 'medium', label: 'Medium', color: '#F59E0B' },
  { value: 'hard', label: 'Hard', color: '#EF4444' },
  { value: 'mixed', label: 'Mixed', color: '#8B5CF6' },
]

// ============================================================
// MASTERY THRESHOLDS
// ============================================================

export const MASTERY_THRESHOLDS = {
  strong: 80,
  average: 50,
  weak: 0,
}

// ============================================================
// HEATMAP COLORS
// ============================================================

export const HEATMAP_COLORS = {
  strong: '#22C55E',
  average: '#F59E0B',
  weak: '#EF4444',
  notStudied: '#E2E8F0',
}

// ============================================================
// THEME COLORS
// ============================================================

export const THEME_COLORS = {
  primary: '#4F46E5',
  primaryDark: '#4338CA',
  secondary: '#7C3AED',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  border: '#E2E8F0',
  muted: '#94A3B8',
  foreground: '#0F172A',
}

// ============================================================
// ROUTES (FIXED: uppercase naming, removed component import)
// ============================================================

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  LESSONS: '/lessons',
  PRACTICE: '/practice',
  RESULTS: '/results',
  TOPIC_MODE: '/topic-mode',
  HEATMAP: '/heatmap',
  WEAKNESS: '/weakness',
  MISTAKE_BOOK: '/mistake-book',
  REVISION_PLANNER: '/revision-planner',
  DUEL: '/duel',
  PARENT: '/parent',
  COURSE_FINDER: '/course-finder',
  CUTOFF_TRACKER: '/cutoff-tracker',
  BOOKMARKS: '/bookmarks',
  LEADERBOARDS: '/leaderboards',
  GAMIFICATION: '/gamification',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  OFFLINE: '/offline',
  UPGRADE: '/upgrade',
  STUDY_PLAN: '/study-plan',
  MOCK_EXAMS: '/mock-exams', 
}

// ============================================================
// DASHBOARD CARDS (FIXED: Added study-plan)
// ============================================================

export const DASHBOARD_CARDS = [
  { id: 'lessons', icon: '📚', label: 'Lessons', route: ROUTES.LESSONS, color: 'primary' },
  { id: 'practice', icon: '📝', label: 'Practice', route: ROUTES.PRACTICE, color: 'primary' },
  { id: 'topic-mode', icon: '🎯', label: 'Topic Mode', route: ROUTES.TOPIC_MODE, color: 'primary' },
  { id: 'results', icon: '📊', label: 'Results', route: ROUTES.RESULTS, color: 'primary' },
  { id: 'heatmap', icon: '🔥', label: 'Heatmap', route: ROUTES.HEATMAP, color: 'warning' },
  { id: 'weakness', icon: '🧠', label: 'Weakness Finder', route: ROUTES.WEAKNESS, color: 'danger' },
  { id: 'mistake-book', icon: '📖', label: 'Mistake Book', route: ROUTES.MISTAKE_BOOK, color: 'secondary' },
  { id: 'revision-planner', icon: '📅', label: 'Revision Planner', route: ROUTES.REVISION_PLANNER, color: 'primary' },
  { id: 'study-plan', icon: '📋', label: 'Study Plan', route: ROUTES.STUDY_PLAN, color: 'primary' },
  { id: 'duel', icon: '⚔️', label: 'Duo Battle', route: ROUTES.DUEL, color: 'warning' },
  { id: 'parent', icon: '👨‍👩‍👦', label: 'Parent Dashboard', route: ROUTES.PARENT, color: 'primary' },
  { id: 'course-finder', icon: '🎓', label: 'Course Finder', route: ROUTES.COURSE_FINDER, color: 'success' },
  { id: 'cutoff-tracker', icon: '📈', label: 'Cut-off Tracker', route: ROUTES.CUTOFF_TRACKER, color: 'warning' },
  { id: 'bookmarks', icon: '⭐', label: 'Bookmarks', route: ROUTES.BOOKMARKS, color: 'primary' },
  { id: 'leaderboards', icon: '🏆', label: 'Leaderboards', route: ROUTES.LEADERBOARDS, color: 'secondary' },
  { id: 'gamification', icon: '🎮', label: 'Gamification', route: ROUTES.GAMIFICATION, color: 'success' },
  { id: 'settings', icon: '⚙️', label: 'Settings', route: ROUTES.SETTINGS, color: 'muted' },
]

// ============================================================
// BADGE DEFINITIONS
// ============================================================

export const BADGE_DEFINITIONS = [
  { id: 'first_exam', icon: '🎯', label: 'First Exam', description: 'Complete your first exam' },
  { id: 'first_100', icon: '💯', label: '100 Questions', description: 'Answer 100 questions' },
  { id: 'first_500', icon: '🔥', label: '500 Questions', description: 'Answer 500 questions' },
  { id: 'first_1000', icon: '⭐', label: '1000 Questions', description: 'Answer 1000 questions' },
  { id: 'streak_7', icon: '🔥', label: '7-Day Streak', description: 'Study for 7 days in a row' },
  { id: 'streak_30', icon: '🏆', label: '30-Day Streak', description: 'Study for 30 days in a row' },
  { id: 'weakness_destroyer', icon: '🧠', label: 'Weakness Destroyer', description: 'Complete 10 weakness drills' },
  { id: 'speed_demon', icon: '⚡', label: 'Speed Demon', description: 'Score 80%+ accuracy with speed bonus' },
  { id: 'topic_master', icon: '🎯', label: 'Topic Master', description: 'Master 5 topics' },
  { id: 'level_10', icon: '🌟', label: 'Level 10', description: 'Reach Level 10' },
  { id: 'level_25', icon: '💎', label: 'Level 25', description: 'Reach Level 25' },
  { id: 'level_50', icon: '👑', label: 'Level 50', description: 'Reach Level 50' },
  { id: 'xp_5000', icon: '💰', label: '5,000 XP', description: 'Earn 5,000 XP' },
  { id: 'xp_10000', icon: '💎', label: '10,000 XP', description: 'Earn 10,000 XP' },
]

// ============================================================
// XP TABLE
// ============================================================

export const XP_TABLE = [
  0,      // Level 1
  100,    // Level 2
  250,    // Level 3
  500,    // Level 4
  1000,   // Level 5
  2000,   // Level 6
  3500,   // Level 7
  5000,   // Level 8
  7500,   // Level 9
  10000,  // Level 10
  15000,  // Level 11
  20000,  // Level 12
  30000,  // Level 13
  50000,  // Level 14
  75000,  // Level 15
  100000, // Level 16
  150000, // Level 17
  200000, // Level 18
  300000, // Level 19
  500000, // Level 20
]

// ============================================================
// AI LIMITS
// ============================================================

export const AI_LIMITS = {
  daily: 10,
  monthly: 100,
  warningThreshold: 0.8,
}

// ============================================================
// SUBSCRIPTION
// ============================================================

export const SUBSCRIPTION_TIERS = {
  foundation: {
    id: 'foundation',
    name: 'Foundation',
    price: { NGN: 1500, USD: 2 },
    features: [
      'Lessons',
      '30-Question CBT',
      'Weakness Finder',
      'Mistake Book + PDF',
      'Heatmap',
      '1v1 Duo Mode',
      'Parent Dashboard',
      'Course Finder',
      'Cut-off Tracker',
    ],
  },
}

// ============================================================
// REFERRAL REWARDS
// ============================================================

export const REFERRAL_REWARDS = {
  referrer: {
    xp: 500,
    discount: 0.1,
  },
  referred: {
    xp: 100,
  },
}

// ============================================================
// RISK LABELS
// ============================================================

export const RISK_LABELS = {
  safe: {
    label: 'Safe',
    color: '#22C55E',
    emoji: '🟢',
    description: 'Your score is well above the cut-off',
  },
  competitive: {
    label: 'Competitive',
    color: '#F59E0B',
    emoji: '🟡',
    description: 'Your score is near the cut-off',
  },
  highly_competitive: {
    label: 'Highly Competitive',
    color: '#EF4444',
    emoji: '🔴',
    description: 'Your score is below the cut-off',
  },
}

// ============================================================
// PLANNER DEFAULTS
// ============================================================

export const PLANNER_DEFAULTS = {
  dailyHours: 3,
  daysPerWeek: 7,
  sessionLength: 45,
  breakLength: 15,
}

// ============================================================
// DUEL CONFIG
// ============================================================

export const DUEL_CONFIG = {
  maxPlayers: 2,
  maxQuestions: 20,
  minQuestions: 5,
  defaultQuestions: 10,
  defaultTimeLimit: 300,
  timeLimits: [120, 300, 600],
  questionCounts: [5, 10, 15, 20],
}

// ============================================================
// NOTIFICATION TYPES
// ============================================================

export const NOTIFICATION_TYPES = {
  STREAK: 'streak',
  WEAKNESS: 'weakness',
  EXAM: 'exam',
  INACTIVITY: 'inactivity',
  SUBSCRIPTION: 'subscription',
  ACHIEVEMENT: 'achievement',
  REMINDER: 'reminder',
}

// ============================================================
// DEFAULT SETTINGS
// ============================================================

export const DEFAULT_SETTINGS = {
  darkMode: false,
  notifications: true,
  studyReminders: true,
  soundEffects: true,
  autoSync: true,
}

// ============================================================
// APP METADATA
// ============================================================

export const APP_METADATA = {
  name: 'Hyelearner',
  version: '1.0.0',
  author: 'Hyesent.dev',
  description: 'AI-powered learning platform for SSCE, Campus, and Professional exams',
  keywords: ['education', 'learning', 'exam prep', 'AI', 'CBT', 'JAMB', 'WAEC', 'NECO'],
}

// ============================================================
// API ENDPOINTS
// ============================================================

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME: '/auth/me',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    AVATAR: '/user/avatar',
    SUBJECTS: '/user/subjects',
    PASSWORD: '/user/password',
    SETTINGS: '/user/settings',
  },
  SESSIONS: {
    START: '/sessions/start',
    SUBMIT: '/sessions/submit',
    HISTORY: '/sessions/history',
    DETAIL: '/sessions',
  },
  MISTAKES: {
    LIST: '/mistakes',
    DETAIL: '/mistakes',
    RESOLVE: '/mistakes/resolve',
    CLEAR: '/mistakes/clear',
    EXPORT: '/mistakes/export',
  },
  BOOKMARKS: {
    LIST: '/bookmarks',
    DETAIL: '/bookmarks',
  },
  LESSONS: {
    LIST: '/lessons',
    DETAIL: '/lessons',
    PROGRESS: '/lessons/progress',
  },
  HEATMAP: {
    MASTERY: '/heatmap/mastery',
    TOPICS: '/heatmap/topics',
  },
  GAMIFICATION: {
    STATS: '/gamification/stats',
    BADGES: '/gamification/badges',
    XP: '/gamification/xp',
  },
  AI: {
    EXPLAIN: '/ai/explain',
    WEAKNESS: '/ai/weakness',
    STUDY_PLAN: '/ai/study-plan',
    GENERATE: '/ai/generate',
  },
  SUBSCRIPTIONS: {
    INIT: '/subscriptions/init',
    VERIFY: '/subscriptions/verify',
    STATUS: '/subscriptions/status',
    CANCEL: '/subscriptions/cancel',
    UPGRADE: '/subscriptions/upgrade',
    WEBHOOK: '/subscriptions/webhook',
  },
  PARENT: {
    GENERATE_CODE: '/parent/generate-code',
    LINK: '/parent/link',
    APPROVE: '/parent/approve',
    STATUS: '/parent/status',
    ANALYTICS: '/parent/analytics',
    STUDENTS: '/parent/students',
  },
  DUEL: {
    CREATE: '/duel/create',
    JOIN: '/duel/join',
    SUBMIT: '/duel/submit',
    HISTORY: '/duel/history',
    STATUS: '/duel/status',
  },
  LEADERBOARD: {
    GLOBAL: '/leaderboard/global',
    SCHOOL: '/leaderboard/school',
    FRIENDS: '/leaderboard/friends',
    SUBJECT: '/leaderboard/subject',
  },
  REFERRALS: {
    CODE: '/referral/code',
    TRACK: '/referral/track',
    STATS: '/referral/stats',
  },
  NOTIFICATIONS: {
    LIST: '/notifications',
    READ: '/notifications/read',
    READ_ALL: '/notifications/read-all',
    UNREAD_COUNT: '/notifications/unread-count',
  },
  ADMIN: {
    STATS: '/admin/stats',
    USERS: '/admin/users',
    QUESTIONS: '/admin/questions',
    SUBSCRIPTIONS: '/admin/subscriptions',
    UPDATE_USER: '/admin/users',
    DELETE_USER: '/admin/users',
  },
  CAREER: {
    COURSES: '/career/courses',
    CUTOFFS: '/career/cutoffs',
    UNIVERSITIES: '/career/universities',
    COURSE_LIST: '/career/course-list',
  },
  OFFLINE: {
    SYNC: '/sync',
    STATUS: '/sync/status',
  },
}

// ============================================================
// STORAGE KEYS (FIXED: Added AI_USAGE)
// ============================================================

export const STORAGE_KEYS = {
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
  NOTIFICATIONS: 'hyelearner_notifications',
  THEME: 'hyelearner_theme',
  LAST_LOGIN: 'hyelearner_last_login',
  LAST_SYNC: 'hyelearner_last_sync',
  PENDING_CHANGES: 'hyelearner_pending_changes',
  DATA_VERSION: 'hyelearner_data_version',
  SYNC_IN_PROGRESS: 'hyelearner_sync_in_progress',
  TOKEN: 'token',
  USER: 'user',
  QUESTION_CACHE: 'hyelearner_questions_cache',
  AI_USAGE: 'hyelearner_ai_usage',
}

// ============================================================
// ERROR CODES
// ============================================================

export const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_INVALID: 'TOKEN_INVALID',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  EMAIL_INVALID: 'EMAIL_INVALID',
  PASSWORD_WEAK: 'PASSWORD_WEAK',
  USERNAME_TAKEN: 'USERNAME_TAKEN',
  EMAIL_TAKEN: 'EMAIL_TAKEN',
  NOT_FOUND: 'NOT_FOUND',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  SUBSCRIPTION_EXPIRED: 'SUBSCRIPTION_EXPIRED',
  SUBSCRIPTION_INACTIVE: 'SUBSCRIPTION_INACTIVE',
  AI_LIMIT_REACHED: 'AI_LIMIT_REACHED',
  AI_ERROR: 'AI_ERROR',
  OFFLINE_MODE: 'OFFLINE_MODE',
  SYNC_ERROR: 'SYNC_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  STORAGE_QUOTA_EXCEEDED: 'STORAGE_QUOTA_EXCEEDED',
  STORAGE_ERROR: 'STORAGE_ERROR',
}

// ============================================================
// PAGINATION DEFAULTS
// ============================================================

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
  MIN_LIMIT: 5,
  DEFAULT_PAGE: 1,
}

// ============================================================
// ANIMATION CONFIG
// ============================================================

export const ANIMATIONS = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 800,
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
}

// ============================================================
// SUBJECT HELPERS
// ============================================================

export const SUBJECT_LIST = Object.keys(SUBJECTS).map(key => ({
  id: key,
  label: SUBJECTS[key].label,
  icon: SUBJECTS[key].icon,
  color: SUBJECTS[key].color,
  topics: SUBJECTS[key].topics,
  subtopics: SUBJECTS[key].subtopics,
}))

export const TOPIC_LIST = Object.values(SUBJECTS).flatMap(s => s.topics)

export const getSubjectByTopic = (topic) => {
  for (const [key, subject] of Object.entries(SUBJECTS)) {
    if (subject.topics.includes(topic)) return key
  }
  return null
}

export const getSubjectLabel = (key) => SUBJECTS[key]?.label || key
export const getSubjectIcon = (key) => SUBJECTS[key]?.icon || '📚'
export const getSubjectColor = (key) => SUBJECTS[key]?.color || '#94A3B8'
export const getSubjectTopics = (key) => SUBJECTS[key]?.topics || []

// ============================================================
// TOPIC FILE HELPERS (keep for backward compatibility)
// ============================================================

export const getTopicFiles = (subjectKey, topicLabel) => {
  return SUBJECTS[subjectKey]?.subtopics?.[topicLabel] || [topicLabel.toLowerCase().replace(/\s+/g, '_')]
}

export const getAllTopicFiles = (subjectKey) => {
  const subject = SUBJECTS[subjectKey]
  if (!subject?.subtopics) return []
  return Object.values(subject.subtopics).flat()
}

export const getTopicFromFile = (subjectKey, fileName) => {
  const subtopics = SUBJECTS[subjectKey]?.subtopics
  if (!subtopics) return null
  for (const [topic, files] of Object.entries(subtopics)) {
    if (files.includes(fileName)) return topic
  }
  return null
}

// ============================================================
// EXAM HELPERS
// ============================================================

export const getExamLabel = (value) => {
  const exam = EXAM_TYPES.find(e => e.value === value)
  return exam?.label || value
}

export const getTierFromExam = (exam) => {
  const map = { jamb: 'foundation', waec: 'foundation', neco: 'foundation', ssce: 'foundation' }
  return map[exam] || 'foundation'
}

// ============================================================
// SUBSCRIPTION HELPERS
// ============================================================

export const getPlanFeatures = (tierId) => SUBSCRIPTION_TIERS[tierId]?.features || []
export const getPlanPrice = (tierId, currency = 'NGN') => SUBSCRIPTION_TIERS[tierId]?.price?.[currency] || 0
export const getPlanName = (tierId) => SUBSCRIPTION_TIERS[tierId]?.name || tierId

export const isSubscriptionActive = (expiresAt) => {
  if (!expiresAt) return false
  return new Date(expiresAt) > new Date()
}

export const getDaysUntilExpiry = (expiresAt) => {
  if (!expiresAt) return 0
  const diff = new Date(expiresAt) - new Date()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

// ============================================================
// XP HELPERS
// ============================================================

export const getLevelFromXP = (xp) => {
  let level = 1
  for (let i = 0; i < XP_TABLE.length; i++) {
    if (xp >= XP_TABLE[i]) level = i + 1
  }
  return level
}

export const getXPForLevel = (level) => XP_TABLE[level - 1] || 0

export const getLevelProgress = (xp) => {
  const currentLevel = getLevelFromXP(xp)
  const currentXP = getXPForLevel(currentLevel)
  const nextXP = getXPForLevel(currentLevel + 1) || currentXP + 1000
  const progress = (xp - currentXP) / (nextXP - currentXP)
  return Math.min(100, Math.max(0, Math.round(progress * 100)))
}

// ============================================================
// DIFFICULTY HELPERS
// ============================================================

export const getDifficultyLabel = (value) => {
  const diff = DIFFICULTIES.find(d => d.value === value)
  return diff?.label || value
}

export const getDifficultyColor = (value) => {
  const diff = DIFFICULTIES.find(d => d.value === value)
  return diff?.color || '#94A3B8'
}

// ============================================================
// RISK HELPERS
// ============================================================

export const getRiskLabel = (risk) => RISK_LABELS[risk]?.label || risk
export const getRiskColor = (risk) => RISK_LABELS[risk]?.color || '#94A3B8'
export const getRiskEmoji = (risk) => RISK_LABELS[risk]?.emoji || '⚪'

// ============================================================
// EXPORT ALL
// ============================================================

export default {
  SUBJECTS,
  EXAM_TYPES,
  COUNTRIES,
  DIFFICULTIES,
  MASTERY_THRESHOLDS,
  HEATMAP_COLORS,
  THEME_COLORS,
  ROUTES,
  DASHBOARD_CARDS,
  BADGE_DEFINITIONS,
  XP_TABLE,
  AI_LIMITS,
  SUBSCRIPTION_TIERS,
  REFERRAL_REWARDS,
  RISK_LABELS,
  PLANNER_DEFAULTS,
  DUEL_CONFIG,
  NOTIFICATION_TYPES,
  DEFAULT_SETTINGS,
  APP_METADATA,
  API_ENDPOINTS,
  STORAGE_KEYS,
  ERROR_CODES,
  PAGINATION,
  ANIMATIONS,
  SUBJECT_LIST,
  TOPIC_LIST,
  getSubjectByTopic,
  getSubjectLabel,
  getSubjectIcon,
  getSubjectColor,
  getSubjectTopics,
  getTopicFiles,
  getAllTopicFiles,
  getTopicFromFile,
  getExamLabel,
  getTierFromExam,
  getPlanFeatures,
  getPlanPrice,
  getPlanName,
  isSubscriptionActive,
  getDaysUntilExpiry,
  getLevelFromXP,
  getXPForLevel,
  getLevelProgress,
  getDifficultyLabel,
  getDifficultyColor,
  getRiskLabel,
  getRiskColor,
  getRiskEmoji,
}