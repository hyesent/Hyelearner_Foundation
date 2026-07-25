// Location: src/data/lessons/core/english_language/oral_english.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_oral_english",
  subject: "English Language",
  topic: "Oral English",
  name: "Oral English",
  icon: "🗣️",
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
    "Basic English vocabulary",
    "Understanding of pronunciation basics",
    "Knowledge of the English alphabet",
    "Ability to listen and repeat"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_intonation_stress",
      name: "Intonation and Stress",
      file: "core/english_language/intonation_and_stress.js"
    },
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
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
      description: "Define oral English and its importance",
      indicator: "Student can explain why speaking skills are important"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and pronounce English vowel sounds",
      indicator: "Student can produce short and long vowel sounds correctly"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify and pronounce English consonant sounds",
      indicator: "Student can produce consonant sounds correctly"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use correct word stress in English words",
      indicator: "Student can place stress on the correct syllable"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use correct sentence stress and rhythm",
      indicator: "Student can stress content words in sentences"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply linking and connected speech rules",
      indicator: "Student can link words naturally in speech"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use appropriate intonation patterns",
      indicator: "Student can use rising and falling intonation correctly"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Distinguish between similar sounds (minimal pairs)",
      indicator: "Student can hear and produce differences in similar sounds"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Speak with clarity and fluency",
      indicator: "Student can speak clearly and confidently"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Apply oral English skills in various contexts",
      indicator: "Student can speak appropriately in different situations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Oral English",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to speak English clearly and confidently with correct pronunciation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Oral English?</h2>
      <p><strong>Oral English</strong> is the spoken form of the English language. It involves pronunciation, intonation, stress, rhythm, and fluency. Strong oral skills are essential for effective communication.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🔊 Pronunciation</h3>
          <p>Producing sounds correctly</p>
          <p class="text-sm"><em>"How to say words"</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🎵 Intonation</h3>
          <p>Rise and fall of voice</p>
          <p class="text-sm"><em>"Music of speech"</em></p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">⏱️ Rhythm</h3>
          <p>Stress and timing patterns</p>
          <p class="text-sm"><em>"Beat of speech"</em></p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 Why Oral English Matters</h4>
        <ul>
          <li>✓ Effective communication</li>
          <li>✓ Academic presentations</li>
          <li>✓ Job interviews</li>
          <li>✓ Social interactions</li>
          <li>✓ Career advancement</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "English Vowel Sounds",
        objective: "obj_002",
        text: `
          <h3>Vowel Sounds</h3>
          <p>English has about 20 vowel sounds. Learning them is essential for clear pronunciation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Short Vowels</h4>
              <ul>
                <li><strong>/ɪ/</strong> - bit, sit, ship</li>
                <li><strong>/e/</strong> - bed, set, ten</li>
                <li><strong>/æ/</strong> - cat, hat, man</li>
                <li><strong>/ʌ/</strong> - cup, sun, up</li>
                <li><strong>/ɒ/</strong> - hot, dog, pot</li>
                <li><strong>/ʊ/</strong> - book, foot, good</li>
                <li><strong>/ə/</strong> - about, banana, sofa (schwa)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Long Vowels</h4>
              <ul>
                <li><strong>/iː/</strong> - see, tea, green</li>
                <li><strong>/ɑː/</strong> - car, far, father</li>
                <li><strong>/ɔː/</strong> - saw, door, four</li>
                <li><strong>/uː/</strong> - too, food, blue</li>
                <li><strong>/ɜː/</strong> - bird, turn, learn</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice Pairs:</strong>
            <ul>
              <li><strong>/ɪ/ vs /iː/</strong> - bit vs beat, sit vs seat</li>
              <li><strong>/e/ vs /ɪ/</strong> - bed vs bid, set vs sit</li>
              <li><strong>/æ/ vs /e/</strong> - hat vs hit, man vs men</li>
              <li><strong>/ʊ/ vs /uː/</strong> - foot vs food, good vs mood</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "English Consonant Sounds",
        objective: "obj_003",
        text: `
          <h3>Consonant Sounds</h3>
          <p>English has about 24 consonant sounds. They are produced by blocking airflow in different ways.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Voiced Consonants</h4>
              <ul>
                <li><strong>/b/</strong> - bed, big, rub</li>
                <li><strong>/d/</strong> - dog, did, red</li>
                <li><strong>/g/</strong> - go, get, big</li>
                <li><strong>/v/</strong> - van, very, love</li>
                <li><strong>/ð/</strong> - this, that, them</li>
                <li><strong>/z/</strong> - zoo, zero, has</li>
                <li><strong>/ʒ/</strong> - measure, vision, pleasure</li>
                <li><strong>/dʒ/</strong> - jump, job, edge</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Unvoiced Consonants</h4>
              <ul>
                <li><strong>/p/</strong> - pen, pet, top</li>
                <li><strong>/t/</strong> - ten, tea, hot</li>
                <li><strong>/k/</strong> - cat, can, back</li>
                <li><strong>/f/</strong> - fan, fine, off</li>
                <li><strong>/θ/</strong> - think, thank, bath</li>
                <li><strong>/s/</strong> - sun, see, bus</li>
                <li><strong>/ʃ/</strong> - she, shop, fish</li>
                <li><strong>/tʃ/</strong> - chat, check, catch</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Minimal Pairs:</strong>
            <ul>
              <li><strong>/b/ vs /p/</strong> - big vs pig, bat vs pat</li>
              <li><strong>/d/ vs /t/</strong> - dog vs top, day vs they</li>
              <li><strong>/g/ vs /k/</strong> - go vs ko, gate vs Kate</li>
              <li><strong>/v/ vs /f/</strong> - van vs fan, very vs ferry</li>
              <li><strong>/ð/ vs /θ/</strong> - this vs think, that vs thank</li>
              <li><strong>/z/ vs /s/</strong> - zoo vs Sue, has vs hass</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Word Stress",
        objective: "obj_004",
        text: `
          <h3>Word Stress</h3>
          <p><strong>Word stress</strong> is the emphasis placed on a particular syllable in a word. Stressed syllables are louder, longer, and higher in pitch.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Word Stress:</strong>
            <ul>
              <li><strong>Two-syllable nouns:</strong> Stress on first syllable</li>
              <li><em>TA-ble, MO-ther, SIS-ter</em></li>
              <li><strong>Two-syllable verbs:</strong> Stress on second syllable</li>
              <li><em>be-GIN, pre-SENT, a-RRIVE</em></li>
              <li><strong>Words ending in -tion:</strong> Stress on syllable before -tion</li>
              <li><em>in-for-MA-tion, e-du-CA-tion</em></li>
              <li><strong>Words ending in -ic:</strong> Stress on syllable before -ic</li>
              <li><em>a-TOM-ic, sci-EN-ti-fic</em></li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>FO-to-graph</strong> (noun)</li>
                <li><strong>pho-TO-graph-er</strong> (person)</li>
                <li><strong>pho-to-GRA-phy</strong> (subject)</li>
                <li><strong>RE-cord</strong> (noun)</li>
                <li><strong>re-CORD</strong> (verb)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practice:</h4>
              <ul>
                <li>E-du-ca-tion (edu-CA-tion)</li>
                <li>Un-der-stand (un-der-STAND)</li>
                <li>Yes-ter-day (YES-ter-day)</li>
                <li>De-ve-lop (de-VE-lop)</li>
                <li>At-trac-tive (at-TRAC-tive)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Sentence Stress",
        objective: "obj_005",
        text: `
          <h3>Sentence Stress</h3>
          <p><strong>Sentence stress</strong> is the emphasis given to certain words in a sentence. Content words are stressed; function words are unstressed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stressed Words (Content Words):</h4>
              <ul>
                <li><strong>Nouns:</strong> 'The <strong>dog</strong> is barking.'</li>
                <li><strong>Verbs:</strong> 'She <strong>ran</strong> home.'</li>
                <li><strong>Adjectives:</strong> 'It's a <strong>beautiful</strong> day.'</li>
                <li><strong>Adverbs:</strong> 'He spoke <strong>quickly</strong>.'</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Unstressed Words (Function Words):</h4>
              <ul>
                <li><strong>Articles:</strong> '<strong>The</strong> dog is barking.'</li>
                <li><strong>Prepositions:</strong> 'She ran <strong>to</strong> home.'</li>
                <li><strong>Conjunctions:</strong> 'It's a beautiful day <strong>and</strong> sunny.'</li>
                <li><strong>Auxiliaries:</strong> 'He <strong>has</strong> spoken.'</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Neutral:</strong> "I <strong>saw</strong> her <strong>yesterday</strong>."</li>
              <li><strong>Emphasizing subject:</strong> "<strong>I</strong> saw her yesterday." (Not someone else)</li>
              <li><strong>Emphasizing object:</strong> "I saw <strong>her</strong> yesterday." (Not someone else)</li>
              <li><strong>Emphasizing time:</strong> "I saw her <strong>yesterday</strong>." (Not today)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Intonation Patterns",
        objective: "obj_007",
        text: `
          <h3>Intonation</h3>
          <p><strong>Intonation</strong> is the rise and fall of the voice when speaking. It conveys meaning and emotion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Rising Intonation (↗)</h4>
              <ul>
                <li><strong>Yes/No questions:</strong></li>
                <li><em>"Are you coming↗?"</em></li>
                <li><strong>List items (except last):</strong></li>
                <li><em>"I need apples↗, oranges↗, and bananas."</em></li>
                <li><strong>Incomplete statements:</strong></li>
                <li><em>"When I arrived↗..."</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Falling Intonation (↘)</h4>
              <ul>
                <li><strong>Statements:</strong></li>
                <li><em>"I am coming↘."</em></li>
                <li><strong>Wh-questions:</strong></li>
                <li><em>"Where are you going↘?"</em></li>
                <li><strong>Commands:</strong></li>
                <li><em>"Close the door↘."</em></li>
                <li><strong>Last item in a list:</strong></li>
                <li><em>"... and bananas↘."</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li>"<strong>You</strong> are <strong>going</strong> to the <strong>store</strong>?" (Rising - question)</li>
              <li>"<strong>You</strong> are <strong>going</strong> to the <strong>store</strong>." (Falling - statement)</li>
              <li>"<strong>Is</strong> this <strong>your</strong> <strong>book</strong>?" (Rising - yes/no question)</li>
              <li>"<strong>Where</strong> is <strong>my</strong> <strong>book</strong>?" (Falling - wh-question)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Connected Speech",
        objective: "obj_006",
        text: `
          <h3>Connected Speech</h3>
          <p>In natural speech, words are not spoken separately but are <strong>linked together</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Linking Rules:</strong>
            <ul>
              <li><strong>Consonant to Vowel:</strong></li>
              <li><em>"<strong>Mi</strong>s<strong>t</strong>a<strong>k</strong>e it"</em> → "Mistake"</li>
              <li><em>"<strong>Whe</strong>n I"</em> → "When I"</li>
              <li><strong>Vowel to Vowel:</strong></li>
              <li><em>"<strong>Go</strong> a<strong>w</strong>ay"</em> → "Go away"</li>
              <li><strong>Same consonants:</strong></li>
              <li><em>"<strong>Bla</strong>ck cat"</em> → "Black cat"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Written:</strong> "I am going to the store."</li>
              <li><strong>Spoken:</strong> "I'm goin' to the store."</li>
              <li><strong>Written:</strong> "What are you doing?"</li>
              <li><strong>Spoken:</strong> "Whatcha doin'?"</li>
              <li><strong>Written:</strong> "I have to go."</li>
              <li><strong>Spoken:</strong> "I gotta go."</li>
              <li><strong>Written:</strong> "I want to go."</li>
              <li><strong>Spoken:</strong> "I wanna go."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Common Pronunciation Challenges",
        objective: "obj_008",
        text: `
          <h3>Common Challenges</h3>
          <p>Certain sounds and patterns are difficult for many learners.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 /θ/ vs /t/</h4>
              <ul>
                <li><strong>/θ/:</strong> think, thank, three</li>
                <li><strong>/t/:</strong> tin, tank, tree</li>
                <li><strong>Practice:</strong> "I think three times."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 /ð/ vs /d/</h4>
              <ul>
                <li><strong>/ð/:</strong> this, that, them</li>
                <li><strong>/d/:</strong> dish, dat, dem</li>
                <li><strong>Practice:</strong> "This that thing."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 /ʃ/ vs /s/</h4>
              <ul>
                <li><strong>/ʃ/:</strong> she, ship, wash</li>
                <li><strong>/s/:</strong> see, sip, was</li>
                <li><strong>Practice:</strong> "She sells sea shells."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 /v/ vs /w/</h4>
              <ul>
                <li><strong>/v/:</strong> very, vine, vest</li>
                <li><strong>/w/:</strong> weary, wine, west</li>
                <li><strong>Practice:</strong> "Very weary weather."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Speaking with Confidence",
        objective: "obj_009",
        text: `
          <h3>Building Confidence</h3>
          <p>Practice these strategies to speak with confidence.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Tips for Confidence:</h4>
              <ul>
                <li>✓ Speak slowly and clearly</li>
                <li>✓ Practice regularly</li>
                <li>✓ Don't worry about mistakes</li>
                <li>✓ Listen to native speakers</li>
                <li>✓ Record yourself</li>
                <li>✓ Practice with others</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practice Activities:</h4>
              <ul>
                <li><strong>Read aloud:</strong> Read books or articles aloud</li>
                <li><strong>Shadowing:</strong> Repeat after a recording</li>
                <li><strong>Conversation:</strong> Practice with friends</li>
                <li><strong>Presentation:</strong> Speak in front of others</li>
                <li><strong>Recording:</strong> Listen to your own voice</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Tongue Twisters:</strong>
            <ul>
              <li>"Peter Piper picked a peck of pickled peppers."</li>
              <li>"She sells sea shells by the sea shore."</li>
              <li>"How much wood would a woodchuck chuck if a woodchuck could chuck wood?"</li>
              <li>"Betty Botter bought some butter, but she said the butter's bitter."</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🗣️ Oral English Skills</h4>
          <ul>
            <li>✓ Master vowel and consonant sounds</li>
            <li>✓ Use correct word and sentence stress</li>
            <li>✓ Apply intonation patterns</li>
            <li>✓ Practice connected speech</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Practice daily</li>
            <li>✓ Listen to English speakers</li>
            <li>✓ Speak slowly and clearly</li>
            <li>✓ Don't fear mistakes</li>
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
        misconception: "Pronunciation is not as important as grammar",
        correction: "Good pronunciation is essential for clear communication",
        explanation: "Even with perfect grammar, poor pronunciation can make you difficult to understand."
      },
      {
        id: "mis_002",
        misconception: "Native speakers always pronounce words the same way",
        correction: "There are many accents and variations in English",
        explanation: "British, American, Australian, and other accents differ significantly."
      },
      {
        id: "mis_003",
        misconception: "Linking words is lazy or incorrect English",
        correction: "Linking is natural and essential for fluency",
        explanation: "Connected speech makes English sound natural and smooth."
      },
      {
        id: "mis_004",
        misconception: "English spelling tells you how to pronounce words",
        correction: "English spelling and pronunciation are not always consistent",
        explanation: "Words like 'though,' 'through,' and 'thought' are pronounced differently."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Job Interviews",
        description: "Clear oral English is essential for success in interviews.",
        example: "Good pronunciation and confidence make a positive impression."
      },
      {
        id: "app_002",
        title: "Academic Presentations",
        description: "Students need good oral skills for presentations and classes.",
        example: "Clear speech helps communicate ideas effectively."
      },
      {
        id: "app_003",
        title: "Social Interactions",
        description: "Good oral skills help in making friends and socializing.",
        example: "Clear communication builds stronger relationships."
      },
      {
        id: "app_004",
        title: "Professional Communication",
        description: "Workplace success depends on clear verbal communication.",
        example: "Meetings, phone calls, and presentations require good oral skills."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Oral English", definition: "The spoken form of the English language." },
    { term: "Pronunciation", definition: "The way a word is spoken or pronounced." },
    { term: "Vowel", definition: "A sound produced without blocking airflow (a, e, i, o, u)." },
    { term: "Consonant", definition: "A sound produced by blocking airflow." },
    { term: "Stress", definition: "Emphasis placed on a syllable or word." },
    { term: "Intonation", definition: "The rise and fall of the voice when speaking." },
    { term: "Rhythm", definition: "The pattern of stressed and unstressed syllables." },
    { term: "Connected Speech", definition: "The way words are linked together in natural speech." },
    { term: "Linking", definition: "Connecting the end of one word to the beginning of the next." },
    { term: "Minimal Pair", definition: "Two words that differ by only one sound." }
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
      question: "What is oral English?",
      type: "multiple_choice",
      options: [
        "Written English",
        "Spoken English",
        "English grammar",
        "English vocabulary"
      ],
      answer: "Spoken English",
      explanation: "Oral English refers to the spoken form of the language."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a short vowel sound?",
      type: "multiple_choice",
      options: ["/iː/", "/uː/", "/æ/", "/ɑː/"],
      answer: "/æ/",
      explanation: "/æ/ is a short vowel sound (as in 'cat')."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a voiced consonant?",
      type: "multiple_choice",
      options: ["/p/", "/t/", "/k/", "/b/"],
      answer: "/b/",
      explanation: "/b/ is voiced; /p/, /t/, and /k/ are unvoiced."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Where is the stress in 'education'?",
      type: "multiple_choice",
      options: ["edu-CA-tion", "E-du-cation", "edu-ca-TION", "ED-u-cation"],
      answer: "edu-CA-tion",
      explanation: "Words ending in -tion have stress on the syllable before -tion."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "How is 'record' (noun) stressed?",
      type: "multiple_choice",
      options: ["RE-cord", "re-CORD", "REC-ord", "rec-ORD"],
      answer: "RE-cord",
      explanation: "Two-syllable nouns are usually stressed on the first syllable."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "In the sentence 'She is a doctor,' which words are stressed?",
      type: "multiple_choice",
      options: ["She, is", "is, a", "She, doctor", "a, doctor"],
      answer: "She, doctor",
      explanation: "Content words (nouns, verbs, adjectives, adverbs) are stressed."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What intonation pattern is used for yes/no questions?",
      type: "multiple_choice",
      options: ["Rising ↗", "Falling ↘", "Flat", "High"],
      answer: "Rising ↗",
      explanation: "Yes/no questions typically use rising intonation."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "What intonation pattern is used for wh-questions?",
      type: "multiple_choice",
      options: ["Rising ↗", "Falling ↘", "Flat", "Low"],
      answer: "Falling ↘",
      explanation: "Wh-questions typically use falling intonation."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "How is 'I am going to' pronounced in fast speech?",
      type: "multiple_choice",
      options: ["I am going to", "I'm going to", "I'm gonna", "I going to"],
      answer: "I'm gonna",
      explanation: "In fast speech, 'going to' becomes 'gonna'."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is it called when words are linked together in speech?",
      type: "multiple_choice",
      options: ["Pronunciation", "Intonation", "Connected speech", "Grammar"],
      answer: "Connected speech",
      explanation: "Connected speech refers to how words are linked in natural speech."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between 'think' and 'tink'?",
      type: "multiple_choice",
      options: [
        "No difference",
        "/θ/ vs /t/",
        "/ð/ vs /d/",
        "/f/ vs /p/"
      ],
      answer: "/θ/ vs /t/",
      explanation: "'Think' uses /θ/, while 'tink' uses /t/."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between 'this' and 'dis'?",
      type: "multiple_choice",
      options: [
        "No difference",
        "/θ/ vs /t/",
        "/ð/ vs /d/",
        "/v/ vs /w/"
      ],
      answer: "/ð/ vs /d/",
      explanation: "'This' uses /ð/, while 'dis' uses /d/."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which practice helps improve fluency?",
      type: "multiple_choice",
      options: [
        "Reading silently",
        "Speaking slowly",
        "Reading aloud regularly",
        "Writing more"
      ],
      answer: "Reading aloud regularly",
      explanation: "Reading aloud helps improve pronunciation and fluency."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is a good strategy to improve oral English?",
      type: "multiple_choice",
      options: [
        "Never practice speaking",
        "Only read silently",
        "Listen to native speakers",
        "Speak as fast as possible"
      ],
      answer: "Listen to native speakers",
      explanation: "Listening to native speakers helps you learn correct pronunciation and intonation."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "In which situation is oral English most important?",
      type: "multiple_choice",
      options: [
        "Writing emails",
        "Reading books",
        "Job interviews",
        "Texting"
      ],
      answer: "Job interviews",
      explanation: "Job interviews require clear verbal communication and good oral skills."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the best way to practice oral English?",
      type: "multiple_choice",
      options: [
        "Practice alone only",
        "Only practice reading",
        "Practice with others regularly",
        "Never speak"
      ],
      answer: "Practice with others regularly",
      explanation: "Practicing with others provides real communication practice and feedback."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_oral_english",
    title: "Oral English Quiz",
    description: "Test your understanding of oral English skills",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is oral English?",
        type: "short_answer",
        answer_key: "The spoken form of the English language",
        explanation: "Oral English refers to speaking and listening skills in English."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give an example of a short vowel sound.",
        type: "short_answer",
        answer_key: "/æ/ (as in cat) or any short vowel",
        explanation: "Short vowels include /ɪ/, /e/, /æ/, /ʌ/, /ɒ/, /ʊ/, /ə/."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give an example of a voiced consonant.",
        type: "short_answer",
        answer_key: "/b/ or /d/ or /g/ or /v/ or /z/",
        explanation: "Voiced consonants include /b/, /d/, /g/, /v/, /z/, /ð/, /ʒ/, /dʒ/."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Where is the stress in 'photograph' (noun)?",
        type: "short_answer",
        answer_key: "PHO-to-graph (first syllable)",
        explanation: "Two-syllable nouns are stressed on the first syllable."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is sentence stress?",
        type: "short_answer",
        answer_key: "The emphasis given to certain words in a sentence",
        explanation: "Content words are stressed; function words are not."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What intonation pattern is used for statements?",
        type: "short_answer",
        answer_key: "Falling intonation ↘",
        explanation: "Statements typically end with falling intonation."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What intonation pattern is used for yes/no questions?",
        type: "short_answer",
        answer_key: "Rising intonation ↗",
        explanation: "Yes/no questions typically use rising intonation."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is connected speech?",
        type: "short_answer",
        answer_key: "The linking of words together in natural speech",
        explanation: "Words are linked together in natural, fluent speech."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Give an example of a minimal pair.",
        type: "short_answer",
        answer_key: "ship/sheep or bit/beat or any minimal pair",
        explanation: "Minimal pairs differ by only one sound."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Name two ways to improve oral English.",
        type: "short_answer",
        answer_key: "Practice regularly and listen to native speakers (or similar)",
        explanation: "Regular practice and listening to native speakers are effective strategies."
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
        "Understand oral English skills",
        "Pronounce English sounds correctly",
        "Use stress and intonation properly",
        "Speak with clarity and confidence"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is oral English?" },
        { time: "5-10 min", activity: "Direct Instruction - Vowel and Consonant Sounds" },
        { time: "10-15 min", activity: "Direct Instruction - Word and Sentence Stress" },
        { time: "15-20 min", activity: "Direct Instruction - Intonation" },
        { time: "20-30 min", activity: "Guided Practice - Speaking Exercises" },
        { time: "30-35 min", activity: "Independent Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Spoken English",
        // ... full answer key
      },
      assessment: {
        ass_001: "The spoken form of the English language",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Record yourself speaking and listen to improve",
      "Practice tongue twisters",
      "Listen to English podcasts and repeat",
      "Have conversations with classmates"
    ],
    differentiation: {
      struggling: [
        "Start with individual sounds",
        "Use visual guides for mouth positions",
        "Provide audio examples",
        "Practice with simple words"
      ],
      advanced: [
        "Focus on connected speech and fluency",
        "Practice with authentic materials",
        "Record and analyze speech",
        "Work on reducing accent"
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
      title: "Vowel Sounds Chart",
      description: "Diagram showing English vowel sounds",
      url: "/diagrams/vowel-chart.png",
      alt: "English vowel sounds chart"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Consonant Sounds Chart",
      description: "Diagram showing English consonant sounds",
      url: "/diagrams/consonant-chart.png",
      alt: "English consonant sounds chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Pronunciation Tips",
      description: "Infographic with pronunciation tips and practice",
      url: "/diagrams/pronunciation-tips.png",
      alt: "Pronunciation tips infographic"
    }
  ]
};