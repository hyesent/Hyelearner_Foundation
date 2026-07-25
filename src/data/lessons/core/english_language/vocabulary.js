// Location: src/data/lessons/core/english_language/vocabulary.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_vocabulary",
  subject: "English Language",
  topic: "Vocabulary",
  name: "Vocabulary Development",
  icon: "📖",
  grade_level: "JSS1 - SS3",
  estimated_duration: "40 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 10,
    totalPracticeQuestions: 16,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 12,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Basic reading skills",
    "Understanding of parts of speech",
    "Ability to use a dictionary",
    "Basic sentence construction"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_comprehension",
      name: "Comprehension",
      file: "core/english_language/comprehension.js"
    },
    {
      id: "eng_lesson_synonyms_antonyms",
      name: "Synonyms and Antonyms",
      file: "core/english_language/synonyms_and_antonyms.js"
    }
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define vocabulary and explain its importance",
      indicator: "Student can explain why vocabulary is important for communication"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and use common everyday vocabulary words",
      indicator: "Student can use basic vocabulary in simple sentences"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use context clues to determine word meanings",
      indicator: "Student can guess the meaning of unknown words from context"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify and use academic vocabulary",
      indicator: "Student can use academic words in writing and speaking"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use word formation techniques (prefixes, suffixes, roots)",
      indicator: "Student can break down words into morphemes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use a dictionary and thesaurus effectively",
      indicator: "Student can find word meanings, pronunciations, and synonyms"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Group vocabulary by themes and topics",
      indicator: "Student can organize vocabulary into semantic fields"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use advanced and specialized vocabulary",
      indicator: "Student can use appropriate vocabulary for different contexts"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze word relationships (synonyms, antonyms, homonyms)",
      indicator: "Student can identify and use word relationships correctly"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Apply vocabulary strategies for independent learning",
      indicator: "Student can develop a personal vocabulary learning plan"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Building Your Vocabulary",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn strategies to expand and improve your vocabulary."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Vocabulary?</h2>
      <p><strong>Vocabulary</strong> is the collection of words that a person knows and uses. A rich vocabulary is essential for effective communication, reading comprehension, and academic success.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📚 Receptive</h3>
          <p>Words you understand when reading or listening</p>
          <p class="text-sm">(Your reading vocabulary)</p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">✍️ Productive</h3>
          <p>Words you use when speaking or writing</p>
          <p class="text-sm">(Your speaking/writing vocabulary)</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🎯 Target</h3>
          <p>Words you are currently learning</p>
          <p class="text-sm">(Your learning goals)</p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 Why Vocabulary Matters</h4>
        <ul>
          <li>✓ Better reading comprehension</li>
          <li>✓ More effective writing</li>
          <li>✓ Improved speaking skills</li>
          <li>✓ Better grades in all subjects</li>
          <li>✓ More confidence in communication</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Using Context Clues",
        objective: "obj_003",
        text: `
          <h3>Context Clues</h3>
          <p><strong>Context clues</strong> are hints in the text that help you figure out the meaning of unknown words.</p>
          
          <div class="example-box">
            <strong>📌 Types of Context Clues:</strong>
            <ul>
              <li><strong>Definition:</strong> The word is directly defined in the text</li>
              <li><em>"A <strong>meteorologist</strong> is a person who studies weather."</em></li>
              <li><strong>Synonym:</strong> A similar word is used nearby</li>
              <li><em>"She was <strong>elated</strong>, or extremely happy, about the news."</em></li>
              <li><strong>Antonym:</strong> An opposite word is used nearby</li>
              <li><em>"Unlike his <strong>gregarious</strong> brother, he was shy and quiet."</em></li>
              <li><strong>Example:</strong> Examples are given</li>
              <li><em>"He enjoyed <strong>cereals</strong> like wheat, oats, and corn."</em></li>
              <li><strong>Inference:</strong> You infer the meaning from the context</li>
              <li><em>"The <strong>arduous</strong> climb left us exhausted and breathless."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice with Context Clues:</strong>
            <ul>
              <li>"The <strong>luminous</strong> moonlit night made the garden look magical." (Luminous = glowing/bright)</li>
              <li>"She was <strong>indignant</strong> at the unfair treatment." (Indignant = angry/upset)</li>
              <li>"The <strong>voluminous</strong> book contained over 1000 pages." (Voluminous = large/bulky)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Word Formation - Prefixes",
        objective: "obj_005",
        text: `
          <h3>Common Prefixes</h3>
          <p><strong>Prefixes</strong> are letters added to the beginning of a word that change its meaning.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔵 Negative Prefixes</h4>
              <ul>
                <li><strong>un-</strong> happy → unhappy</li>
                <li><strong>in-</strong> visible → invisible</li>
                <li><strong>im-</strong> possible → impossible</li>
                <li><strong>il-</strong> legal → illegal</li>
                <li><strong>ir-</strong> regular → irregular</li>
                <li><strong>dis-</strong> like → dislike</li>
                <li><strong>non-</strong> stop → nonstop</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟢 Size/Number Prefixes</h4>
              <ul>
                <li><strong>bi-</strong> cycle → bicycle (two)</li>
                <li><strong>tri-</strong> angle → triangle (three)</li>
                <li><strong>quad-</strong> ruple → quadruple (four)</li>
                <li><strong>multi-</strong> national → multinational</li>
                <li><strong>semi-</strong> circle → semicircle</li>
                <li><strong>micro-</strong> scope → microscope</li>
                <li><strong>macro-</strong> economics → macroeconomics</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🟡 Time/Order Prefixes</h4>
              <ul>
                <li><strong>pre-</strong> view → preview</li>
                <li><strong>post-</strong> poned → postponed</li>
                <li><strong>fore-</strong> cast → forecast</li>
                <li><strong>anti-</strong> freeze → antifreeze</li>
                <li><strong>pro-</strong> active → proactive</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🟣 Other Common Prefixes</h4>
              <ul>
                <li><strong>re-</strong> do → redo (again)</li>
                <li><strong>mis-</strong> understand → misunderstand</li>
                <li><strong>over-</strong> cook → overcook</li>
                <li><strong>under-</strong> cook → undercook</li>
                <li><strong>sub-</strong> marine → submarine</li>
                <li><strong>super-</strong> market → supermarket</li>
                <li><strong>inter-</strong> national → international</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Word Formation - Suffixes",
        objective: "obj_005",
        text: `
          <h3>Common Suffixes</h3>
          <p><strong>Suffixes</strong> are letters added to the end of a word that change its meaning or part of speech.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔵 Noun Suffixes</h4>
              <ul>
                <li><strong>-ment</strong> achieve → achievement</li>
                <li><strong>-tion/-sion</strong> educate → education</li>
                <li><strong>-ness</strong> happy → happiness</li>
                <li><strong>-ity</strong> active → activity</li>
                <li><strong>-er/-or</strong> teach → teacher</li>
                <li><strong>-ism</strong> capital → capitalism</li>
                <li><strong>-ship</strong> friend → friendship</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟢 Adjective Suffixes</h4>
              <ul>
                <li><strong>-able/-ible</strong> comfort → comfortable</li>
                <li><strong>-ful</strong> hope → hopeful</li>
                <li><strong>-less</strong> hope → hopeless</li>
                <li><strong>-ous</strong> danger → dangerous</li>
                <li><strong>-ive</strong> act → active</li>
                <li><strong>-al</strong> nature → natural</li>
                <li><strong>-ic</strong> hero → heroic</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🟡 Verb Suffixes</h4>
              <ul>
                <li><strong>-ize/-ise</strong> modern → modernize</li>
                <li><strong>-ify</strong> class → classify</li>
                <li><strong>-ate</strong> active → activate</li>
                <li><strong>-en</strong> wide → widen</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🟣 Adverb Suffixes</h4>
              <ul>
                <li><strong>-ly</strong> quick → quickly</li>
                <li><strong>-ward</strong> home → homeward</li>
                <li><strong>-wise</strong> clock → clockwise</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Word Roots",
        objective: "obj_005",
        text: `
          <h3>Common Word Roots</h3>
          <p><strong>Roots</strong> are the core parts of words that carry the main meaning. Many English words come from Latin and Greek roots.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔵 Latin Roots</h4>
              <ul>
                <li><strong>aud-</strong> (hear) → audience, audible</li>
                <li><strong>bene-</strong> (good) → benefit, benevolent</li>
                <li><strong>dict-</strong> (say/speak) → dictionary, predict</li>
                <li><strong>ject-</strong> (throw) → project, reject</li>
                <li><strong>port-</strong> (carry) → transport, import</li>
                <li><strong>scrib-</strong> (write) → describe, scribble</li>
                <li><strong>spect-</strong> (look) → inspect, spectator</li>
                <li><strong>vis-</strong> (see) → vision, visible</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟢 Greek Roots</h4>
              <ul>
                <li><strong>bio-</strong> (life) → biology, biography</li>
                <li><strong>geo-</strong> (earth) → geography, geology</li>
                <li><strong>hydr-</strong> (water) → hydrate, hydraulic</li>
                <li><strong>psych-</strong> (mind) → psychology, psyche</li>
                <li><strong>tele-</strong> (far) → telephone, telescope</li>
                <li><strong>chron-</strong> (time) → chronicle, chronological</li>
                <li><strong>phon-</strong> (sound) → phone, symphony</li>
                <li><strong>photo-</strong> (light) → photograph, photosynthesis</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>tele + phone</strong> = telephone (far sound)</li>
              <li><strong>bio + graphy</strong> = biography (life writing)</li>
              <li><strong>geo + logy</strong> = geology (earth study)</li>
              <li><strong>psych + ology</strong> = psychology (mind study)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Using a Dictionary and Thesaurus",
        objective: "obj_006",
        text: `
          <h3>Dictionary and Thesaurus Skills</h3>
          <p>These tools are essential for vocabulary development.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded">
              <h4>📘 Dictionary</h4>
              <p>Provides:</p>
              <ul>
                <li>✓ Spelling</li>
                <li>✓ Pronunciation</li>
                <li>✓ Part of speech</li>
                <li>✓ Definitions</li>
                <li>✓ Example sentences</li>
                <li>✓ Word origin</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded">
              <h4>📗 Thesaurus</h4>
              <p>Provides:</p>
              <ul>
                <li>✓ Synonyms (similar words)</li>
                <li>✓ Antonyms (opposite words)</li>
                <li>✓ Related words</li>
                <li>✓ Alternatives for common words</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Dictionary Entry Example:</strong>
            <div class="bg-white p-3 rounded">
              <p><strong>vocabulary</strong> | vōˈkabyəˌlerē | <em>noun</em></p>
              <p>1. The body of words used in a particular language.</p>
              <p>2. The words known to a person or group.</p>
              <p>3. A list of words with definitions.</p>
              <p><em>Example:</em> "She has a very large vocabulary."</p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Thesaurus Entry Example:</strong>
            <div class="bg-white p-3 rounded">
              <p><strong>happy</strong> <em>adjective</em></p>
              <p><strong>Synonyms:</strong> joyful, cheerful, delighted, elated, content, pleased</p>
              <p><strong>Antonyms:</strong> sad, unhappy, miserable, depressed, sorrowful</p>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Thematic Vocabulary",
        objective: "obj_007",
        text: `
          <h3>Vocabulary by Theme</h3>
          <p>Organizing vocabulary by themes helps you learn related words together.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🏥 Health and Medicine</h4>
              <ul>
                <li>doctor, nurse, hospital</li>
                <li>medicine, prescription</li>
                <li>surgery, treatment</li>
                <li>symptom, diagnosis</li>
                <li>patient, cure, illness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🏫 Education</h4>
              <ul>
                <li>teacher, student, school</li>
                <li>classroom, homework</li>
                <li>exam, assignment</li>
                <li>textbook, lecture</li>
                <li>graduate, scholarship</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>💼 Business</h4>
              <ul>
                <li>company, employee</li>
                <li>manager, meeting</li>
                <li>project, deadline</li>
                <li>profit, investment</li>
                <li>customer, market</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🌍 Environment</h4>
              <ul>
                <li>climate, pollution</li>
                <li>recycle, conserve</li>
                <li>renewable, sustainable</li>
                <li>ecosystem, habitat</li>
                <li>endangered, species</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Academic Vocabulary",
        objective: "obj_004",
        text: `
          <h3>Academic Vocabulary</h3>
          <p><strong>Academic vocabulary</strong> includes words commonly used in school, university, and professional settings.</p>
          
          <div class="example-box">
            <strong>📌 Common Academic Words:</strong>
            <ul>
              <li><strong>Analyze:</strong> To examine in detail</li>
              <li><strong>Evaluate:</strong> To assess or judge</li>
              <li><strong>Interpret:</strong> To explain the meaning</li>
              <li><strong>Summarize:</strong> To give a brief statement</li>
              <li><strong>Compare:</strong> To note similarities</li>
              <li><strong>Contrast:</strong> To note differences</li>
              <li><strong>Hypothesis:</strong> A proposed explanation</li>
              <li><strong>Methodology:</strong> A system of methods</li>
              <li><strong>Significant:</strong> Important or meaningful</li>
              <li><strong>Evidence:</strong> Proof or support</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 In Sentences:</strong>
            <ul>
              <li>"We need to <strong>analyze</strong> the data carefully."</li>
              <li>"Please <strong>summarize</strong> the main points."</li>
              <li>"This research is <strong>significant</strong> to the field."</li>
              <li>"What <strong>evidence</strong> supports your argument?"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Strategies for Vocabulary Learning",
        objective: "obj_010",
        text: `
          <h3>Effective Vocabulary Strategies</h3>
          <p>Here are proven strategies to build your vocabulary.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📝 Active Learning</h4>
              <ul>
                <li>Read widely and regularly</li>
                <li>Keep a vocabulary journal</li>
                <li>Use new words in sentences</li>
                <li>Learn words in context</li>
                <li>Use flashcards (Spaced Repetition)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🎯 Word Study</h4>
              <ul>
                <li>Study roots and affixes</li>
                <li>Group words by themes</li>
                <li>Use word families</li>
                <li>Learn common collocations</li>
                <li>Practice pronunciation</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🔁 Practice</h4>
              <ul>
                <li>Write regularly</li>
                <li>Speak with others</li>
                <li>Play word games</li>
                <li>Take vocabulary quizzes</li>
                <li>Teach others new words</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📱 Technology</h4>
              <ul>
                <li>Use vocabulary apps</li>
                <li>Subscribe to word-a-day</li>
                <li>Watch educational videos</li>
                <li>Use online dictionaries</li>
                <li>Join language communities</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📖 Vocabulary Building</h4>
          <ul>
            <li>✓ Use context clues to understand new words</li>
            <li>✓ Learn prefixes, suffixes, and roots</li>
            <li>✓ Use dictionaries and thesauruses</li>
            <li>✓ Practice regularly</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Read every day</li>
            <li>✓ Keep a word journal</li>
            <li>✓ Learn 5 new words daily</li>
            <li>✓ Use new words in conversation</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Memorizing word lists is the best way to learn vocabulary",
        correction: "Learning words in context is more effective than memorization",
        explanation: "Words are best learned through reading, listening, and using them in context."
      },
      {
        id: "mis_002",
        misconception: "A word has only one meaning",
        correction: "Most words have multiple meanings depending on context",
        explanation: "Words like 'run,' 'set,' and 'break' have many different meanings."
      },
      {
        id: "mis_003",
        misconception: "Using a thesaurus always improves writing",
        correction: "Use synonyms appropriately - not all synonyms work in all contexts",
        explanation: "Different words have different connotations and collocations."
      },
      {
        id: "mis_004",
        misconception: "Native speakers know all words",
        correction: "Everyone continues to learn new words throughout life",
        explanation: "Vocabulary acquisition is a lifelong process for all learners."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Reading Comprehension",
        description: "A strong vocabulary helps you understand more of what you read.",
        example: "Knowing vocabulary like 'analyze' and 'interpret' helps in studying."
      },
      {
        id: "app_002",
        title: "Academic Success",
        description: "Good vocabulary is essential for success in school and university.",
        example: "Academic vocabulary helps in writing essays and taking exams."
      },
      {
        id: "app_003",
        title: "Professional Communication",
        description: "A broad vocabulary helps in job interviews and professional settings.",
        example: "Using precise vocabulary shows competence and confidence."
      },
      {
        id: "app_004",
        title: "Social Communication",
        description: "Vocabulary helps you express yourself clearly and understand others.",
        example: "Better vocabulary means better conversations and relationships."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Vocabulary", definition: "The set of words known and used by a person." },
    { term: "Context Clue", definition: "Hints in the text that help determine word meaning." },
    { term: "Prefix", definition: "A letter group added to the beginning of a word." },
    { term: "Suffix", definition: "A letter group added to the end of a word." },
    { term: "Root", definition: "The core part of a word carrying main meaning." },
    { term: "Synonym", definition: "A word with a similar meaning to another word." },
    { term: "Antonym", definition: "A word with an opposite meaning to another word." },
    { term: "Thesaurus", definition: "A reference book listing synonyms and antonyms." },
    { term: "Collocation", definition: "Words that commonly go together (e.g., 'make a decision')." },
    { term: "Semantic Field", definition: "A group of words related by meaning." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is vocabulary?",
      type: "multiple_choice",
      options: [
        "A list of grammar rules",
        "The set of words a person knows",
        "A type of writing",
        "A punctuation mark"
      ],
      answer: "The set of words a person knows",
      explanation: "Vocabulary is the collection of words that a person understands and uses."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are context clues?",
      type: "multiple_choice",
      options: [
        "Hidden messages in text",
        "Hints that help you understand word meanings",
        "Bold words in a dictionary",
        "Letters at the end of words"
      ],
      answer: "Hints that help you understand word meanings",
      explanation: "Context clues are hints in the surrounding text that help you figure out unknown words."
    },
    {
      id: "prac_003",
      objective: "obj_005",
      difficulty: "easy",
      question: "What does the prefix 'un-' mean?",
      type: "multiple_choice",
      options: ["again", "not", "before", "after"],
      answer: "not",
      explanation: "The prefix 'un-' means 'not' (e.g., happy → unhappy)."
    },
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "easy",
      question: "What does the suffix '-ful' mean?",
      type: "multiple_choice",
      options: ["without", "full of", "again", "not"],
      answer: "full of",
      explanation: "The suffix '-ful' means 'full of' (e.g., hope → hopeful)."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "medium",
      question: "Use context clues: 'The arid desert had almost no water.' What does 'arid' mean?",
      type: "multiple_choice",
      options: ["wet", "dry", "cold", "hot"],
      answer: "dry",
      explanation: "The clue 'almost no water' tells you 'arid' means dry."
    },
    {
      id: "prac_006",
      objective: "obj_003",
      difficulty: "medium",
      question: "Use context clues: 'She was elated, or extremely happy, about the news.' What does 'elated' mean?",
      type: "multiple_choice",
      options: ["sad", "angry", "happy", "tired"],
      answer: "happy",
      explanation: "The definition 'extremely happy' is given directly in the text."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the root in 'biology'?",
      type: "multiple_choice",
      options: ["bio", "logy", "biol", "ogy"],
      answer: "bio",
      explanation: "The root 'bio-' means 'life,' and '-logy' means 'study of.'"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does 'geology' mean?",
      type: "multiple_choice",
      options: ["Study of life", "Study of earth", "Study of water", "Study of mind"],
      answer: "Study of earth",
      explanation: "Geo- = earth, -logy = study of. Geology = study of the earth."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which resource would you use to find synonyms?",
      type: "multiple_choice",
      options: ["Dictionary", "Thesaurus", "Encyclopedia", "Atlas"],
      answer: "Thesaurus",
      explanation: "A thesaurus lists synonyms (and sometimes antonyms) for words."
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which is an academic vocabulary word?",
      type: "multiple_choice",
      options: ["analyze", "run", "cat", "happy"],
      answer: "analyze",
      explanation: "'Analyze' is commonly used in academic contexts."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Use the correct word: 'The ____ evidence supports the theory.'",
      type: "multiple_choice",
      options: ["simple", "common", "substantial", "small"],
      answer: "substantial",
      explanation: "'Substantial' means considerable/important, appropriate for academic context."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the relationship between 'happy' and 'sad'?",
      type: "multiple_choice",
      options: ["Synonyms", "Antonyms", "Homonyms", "Polysemes"],
      answer: "Antonyms",
      explanation: "'Happy' and 'sad' are antonyms (opposite meanings)."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the relationship between 'happy' and 'joyful'?",
      type: "multiple_choice",
      options: ["Synonyms", "Antonyms", "Homonyms", "Polysemes"],
      answer: "Synonyms",
      explanation: "'Happy' and 'joyful' are synonyms (similar meanings)."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which strategy is most effective for vocabulary learning?",
      type: "multiple_choice",
      options: [
        "Reading widely and regularly",
        "Reading widely and regularly",
        "Using words in context",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Combining multiple strategies is the most effective way to learn vocabulary."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Choose the most precise word: 'The doctor gave a ____ diagnosis.'",
      type: "multiple_choice",
      options: ["clear", "definitive", "big", "good"],
      answer: "definitive",
      explanation: "'Definitive' means conclusive/precise, appropriate for medical context."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "How many new words should you aim to learn daily?",
      type: "multiple_choice",
      options: ["1-2", "3-5", "10-15", "As many as possible"],
      answer: "3-5",
      explanation: "Learning 3-5 new words daily is a realistic and achievable goal."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_vocabulary",
    title: "Vocabulary Development Quiz",
    description: "Test your understanding of vocabulary strategies and word formation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is vocabulary?",
        type: "short_answer",
        answer_key: "The set of words a person knows and uses",
        explanation: "Vocabulary is the collection of words that a person understands and uses in communication."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are context clues?",
        type: "short_answer",
        answer_key: "Hints in the text that help determine word meaning",
        explanation: "Context clues are clues in the surrounding text that help you understand unknown words."
      },
      {
        id: "ass_003",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does the prefix 'pre-' mean?",
        type: "short_answer",
        answer_key: "before",
        explanation: "The prefix 'pre-' means 'before' (e.g., preview = to see before)."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does the suffix '-less' mean?",
        type: "short_answer",
        answer_key: "without",
        explanation: "The suffix '-less' means 'without' (e.g., hopeless = without hope)."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the meaning of 'biology' based on its roots?",
        type: "short_answer",
        answer_key: "Study of life",
        explanation: "Bio- = life, -logy = study of. Biology = study of life."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Which resource would you use to find word meanings?",
        type: "short_answer",
        answer_key: "Dictionary",
        explanation: "A dictionary provides definitions, pronunciations, and word information."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Which resource would you use to find synonyms?",
        type: "short_answer",
        answer_key: "Thesaurus",
        explanation: "A thesaurus lists synonyms (and antonyms) for words."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between a synonym and an antonym?",
        type: "short_answer",
        answer_key: "Synonyms have similar meanings; antonyms have opposite meanings",
        explanation: "Synonyms are words with similar meanings. Antonyms are words with opposite meanings."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Name two effective strategies for vocabulary learning.",
        type: "short_answer",
        answer_key: "Reading widely and keeping a vocabulary journal (or similar)",
        explanation: "Effective strategies include reading, using word journals, context learning, and spaced repetition."
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "Use an academic word: 'The data was ____ to the study.' (important)",
        type: "short_answer",
        answer_key: "significant",
        explanation: "'Significant' is an academic vocabulary word meaning important or meaningful."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "40 minutes",
      objectives: [
        "Understand the importance of vocabulary",
        "Use context clues to determine word meanings",
        "Apply word formation strategies",
        "Develop effective vocabulary learning habits"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Why vocabulary matters" },
        { time: "5-10 min", activity: "Context Clues Practice" },
        { time: "10-20 min", activity: "Word Formation (Prefixes, Suffixes, Roots)" },
        { time: "20-25 min", activity: "Dictionary and Thesaurus Skills" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The set of words a person knows",
        // ... full answer key
      },
      assessment: {
        ass_001: "The set of words a person knows and uses",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a vocabulary journal for one week",
      "Find 10 new words from your reading this week",
      "Create word cards with definitions and examples",
      "Teach five new words to a friend or family member"
    ],
    differentiation: {
      struggling: [
        "Start with common everyday words",
        "Use visual aids and pictures",
        "Provide simple definitions",
        "Focus on one type of context clue at a time"
      ],
      advanced: [
        "Learn specialized vocabulary for specific subjects",
        "Study word etymology in depth",
        "Create advanced vocabulary quizzes",
        "Analyze vocabulary in academic texts"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Word Formation",
      description: "Diagram showing prefixes, suffixes, and roots",
      url: "/diagrams/word-formation.png",
      alt: "Word formation diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Context Clues Types",
      description: "Chart showing types of context clues",
      url: "/diagrams/context-clues.png",
      alt: "Context clues chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Vocabulary Learning Strategies",
      description: "Infographic with effective vocabulary learning strategies",
      url: "/diagrams/vocabulary-strategies.png",
      alt: "Vocabulary strategies infographic"
    }
  ]
};