// Location: src/data/lessons/core/english_language/synonyms_and_antonyms.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_synonyms_antonyms",
  subject: "English Language",
  topic: "Synonyms and Antonyms",
  name: "Synonyms and Antonyms",
  icon: "🔀",
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
    "Basic vocabulary knowledge",
    "Understanding of parts of speech",
    "Reading comprehension skills",
    "Dictionary skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more lessons in English Language - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define synonyms and antonyms",
      indicator: "Student can explain what synonyms and antonyms are"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify synonyms for common words",
      indicator: "Student can find synonyms for everyday vocabulary"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify antonyms for common words",
      indicator: "Student can find antonyms for everyday vocabulary"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use synonyms to improve writing",
      indicator: "Student can replace words with synonyms to avoid repetition"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use antonyms to show contrast",
      indicator: "Student can use antonyms to create contrast in writing"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Distinguish between synonyms with different nuances",
      indicator: "Student can choose the most appropriate synonym for context"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use a thesaurus effectively",
      indicator: "Student can find synonyms and antonyms using a thesaurus"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Analyze shades of meaning in synonyms",
      indicator: "Student can explain subtle differences between similar words"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use synonyms and antonyms in complex sentences",
      indicator: "Student can create sophisticated sentences with word relationships"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Apply synonym and antonym knowledge in various contexts",
      indicator: "Student can use word relationships in different writing situations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Synonyms and Antonyms",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to use synonyms and antonyms to enrich your vocabulary and writing."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Synonyms and Antonyms?</h2>
      <p><strong>Synonyms</strong> are words that have similar meanings. <strong>Antonyms</strong> are words that have opposite meanings. Understanding word relationships helps you build vocabulary and write more effectively.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Synonyms</h3>
          <p><strong>Similar meanings</strong></p>
          <ul>
            <li>happy ↔ joyful</li>
            <li>big ↔ large</li>
            <li>fast ↔ quick</li>
          </ul>
          <p><em>"She was happy and joyful."</em></p>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h3 class="text-red-600">📌 Antonyms</h3>
          <p><strong>Opposite meanings</strong></p>
          <ul>
            <li>happy ↔ sad</li>
            <li>big ↔ small</li>
            <li>fast ↔ slow</li>
          </ul>
          <p><em>"She was happy, not sad."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why They Matter</h4>
        <ul>
          <li>✓ Build vocabulary</li>
          <li>✓ Improve writing</li>
          <li>✓ Avoid repetition</li>
          <li>✓ Show contrast</li>
          <li>✓ Express ideas precisely</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Synonyms",
        objective: "obj_002",
        text: `
          <h3>Understanding Synonyms</h3>
          <p><strong>Synonyms</strong> are words that have the same or nearly the same meaning. They help you vary your language and avoid repetition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Synonyms by Part of Speech:</h4>
              <ul>
                <li><strong>Adjectives:</strong></li>
                <li>happy → joyful, cheerful, delighted</li>
                <li>big → large, huge, enormous</li>
                <li>beautiful → pretty, lovely, gorgeous</li>
                <li><strong>Verbs:</strong></li>
                <li>run → jog, sprint, race</li>
                <li>talk → speak, chat, converse</li>
                <li>look → see, gaze, stare</li>
                <li><strong>Nouns:</strong></li>
                <li>house → home, residence, dwelling</li>
                <li>friend → companion, ally, pal</li>
                <li>teacher → instructor, educator, professor</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples in Context:</h4>
              <ul>
                <li>"The <strong>big</strong> dog" → "The <strong>large</strong> dog"</li>
                <li>"She was <strong>happy</strong>" → "She was <strong>delighted</strong>"</li>
                <li>"He <strong>ran</strong> quickly" → "He <strong>sprinted</strong> quickly"</li>
                <li>"The <strong>house</strong> was old" → "The <strong>home</strong> was old"</li>
                <li>"<strong>Beautiful</strong> flowers" → "<strong>Gorgeous</strong> flowers"</li>
              </ul>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>💡 Note:</strong> Synonyms are not always interchangeable. Some words have specific meanings or connotations that may not fit all contexts.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Antonyms",
        objective: "obj_003",
        text: `
          <h3>Understanding Antonyms</h3>
          <p><strong>Antonyms</strong> are words that have opposite meanings. They help create contrast and comparison in writing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Types of Antonyms:</h4>
              <ul>
                <li><strong>Adjectives:</strong></li>
                <li>hot ↔ cold</li>
                <li>rich ↔ poor</li>
                <li>young ↔ old</li>
                <li><strong>Verbs:</strong></li>
                <li>open ↔ close</li>
                <li>start ↔ finish</li>
                <li>increase ↔ decrease</li>
                <li><strong>Nouns:</strong></li>
                <li>day ↔ night</li>
                <li>friend ↔ enemy</li>
                <li>success ↔ failure</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Examples in Context:</h4>
              <ul>
                <li>"The water was <strong>hot</strong>, not <strong>cold</strong>."</li>
                <li>"She is <strong>rich</strong> while he is <strong>poor</strong>."</li>
                <li>"Please <strong>open</strong> the door, don't <strong>close</strong> it."</li>
                <li>"We need to <strong>increase</strong> sales, not <strong>decrease</strong> them."</li>
                <li>"He was a <strong>friend</strong>, never an <strong>enemy</strong>."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Gradable Antonyms:</strong>
            <ul>
              <li>Words that have degrees of comparison</li>
              <li><strong>Hot → warm → cool → cold</strong></li>
              <li><strong>Big → large → medium → small → tiny</strong></li>
              <li><strong>Happy → content → neutral → unhappy → sad</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Using Synonyms to Improve Writing",
        objective: "obj_004",
        text: `
          <h3>Avoiding Repetition</h3>
          <p>Using synonyms helps you avoid repeating the same words and makes your writing more interesting.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Without Synonyms (Repetitive):</h4>
              <p><em>"The <strong>beautiful</strong> sunset was <strong>beautiful</strong>. The <strong>beautiful</strong> colors filled the sky. It was a <strong>beautiful</strong> sight."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ With Synonyms (Varied):</h4>
              <p><em>"The <strong>beautiful</strong> sunset was <strong>stunning</strong>. The <strong>vibrant</strong> colors filled the sky. It was a <strong>magnificent</strong> sight."</em></p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li><strong>Instead of "good":</strong></li>
              <li>excellent, wonderful, fantastic, great, superb</li>
              <li><strong>Instead of "bad":</strong></li>
              <li>terrible, awful, poor, dreadful, atrocious</li>
              <li><strong>Instead of "said":</strong></li>
              <li>stated, replied, responded, announced, whispered</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Using Antonyms to Show Contrast",
        objective: "obj_005",
        text: `
          <h3>Creating Contrast</h3>
          <p>Antonyms help you show contrast, comparison, and opposing ideas in your writing.</p>
          
          <div class="example-box">
            <strong>📌 Using Antonyms Effectively:</strong>
            <ul>
              <li><strong>Contrast:</strong> "The city was <strong>noisy</strong>, but the countryside was <strong>quiet</strong>."</li>
              <li><strong>Comparison:</strong> "He is <strong>kind</strong> while his brother is <strong>cruel</strong>."</li>
              <li><strong>Opposition:</strong> "The debate was between <strong>progress</strong> and <strong>tradition</strong>."</li>
              <li><strong>Change:</strong> "The weather went from <strong>sunny</strong> to <strong>cloudy</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Signal Words for Contrast:</strong>
            <ul>
              <li>but, however, although, while, whereas, yet</li>
              <li><em>"She was <strong>tired</strong>, <strong>however</strong>, she continued working."</em></li>
              <li><em>"<strong>While</strong> he was <strong>optimistic</strong>, she was <strong>pessimistic</strong>."</em></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Nuances and Shades of Meaning",
        objective: "obj_006",
        text: `
          <h3>Choosing the Right Word</h3>
          <p>Not all synonyms are exactly the same. Some have subtle differences in meaning, tone, or formality.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Shades of Meaning:</h4>
              <ul>
                <li><strong>Happy:</strong></li>
                <li>Content (satisfied) → Cheerful (bright) → Delighted (very pleased) → Ecstatic (overjoyed)</li>
                <li><strong>Big:</strong></li>
                <li>Large (general) → Huge (very big) → Enormous (extremely big) → Gigantic (massive)</li>
                <li><strong>Said:</strong></li>
                <li>Mumbled (quietly) → Shouted (loudly) → Whispered (softly) → Exclaimed (suddenly)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Formal vs Informal:</h4>
              <ul>
                <li><strong>Formal:</strong> commence (vs start)</li>
                <li><strong>Formal:</strong> conclude (vs end)</li>
                <li><strong>Formal:</strong> utilize (vs use)</li>
                <li><strong>Formal:</strong> inquire (vs ask)</li>
                <li><strong>Informal:</strong> kids (vs children)</li>
                <li><strong>Informal:</strong> big (vs large)</li>
                <li><strong>Informal:</strong> help (vs assist)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Using a Thesaurus",
        objective: "obj_007",
        text: `
          <h3>Thesaurus Skills</h3>
          <p>A <strong>thesaurus</strong> is a reference book that lists synonyms and antonyms for words.</p>
          
          <div class="example-box">
            <strong>📌 How to Use a Thesaurus:</strong>
            <ul>
              <li><strong>Step 1:</strong> Look up the word you want to replace</li>
              <li><strong>Step 2:</strong> Read the list of synonyms</li>
              <li><strong>Step 3:</strong> Check the part of speech (noun, verb, adjective)</li>
              <li><strong>Step 4:</strong> Consider the context and nuance</li>
              <li><strong>Step 5:</strong> Choose the most appropriate synonym</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Thesaurus Entry Example:</strong>
            <div class="bg-white p-3 rounded">
              <p><strong>happy</strong> <em>adjective</em></p>
              <p><strong>Synonyms:</strong> joyful, cheerful, delighted, content, pleased, thrilled</p>
              <p><strong>Antonyms:</strong> sad, unhappy, miserable, depressed, sorrowful</p>
              <p><strong>Related:</strong> happiness, happily, unhappiness</p>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Caution:</strong> Don't use a thesaurus for every word. Sometimes a simpler word is more effective. Also, be aware that not all synonyms work in all contexts.
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Practice with Synonyms and Antonyms",
        objective: "obj_008",
        text: `
          <h3>Practice Exercises</h3>
          <p>Test your understanding of synonyms and antonyms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Find the Synonym:</h4>
              <ul>
                <li><strong>Beautiful</strong> → <em>pretty, lovely, gorgeous</em></li>
                <li><strong>Smart</strong> → <em>intelligent, clever, bright</em></li>
                <li><strong>Strong</strong> → <em>powerful, sturdy, mighty</em></li>
                <li><strong>Brave</strong> → <em>courageous, fearless, daring</em></li>
                <li><strong>Calm</strong> → <em>peaceful, serene, tranquil</em></li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Find the Antonym:</h4>
              <ul>
                <li><strong>Beautiful</strong> → <em>ugly, unattractive</em></li>
                <li><strong>Smart</strong> → <em>stupid, unintelligent</em></li>
                <li><strong>Strong</strong> → <em>weak, fragile</em></li>
                <li><strong>Brave</strong> → <em>cowardly, fearful</em></li>
                <li><strong>Calm</strong> → <em>anxious, agitated</em></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Synonyms and Antonyms in Context",
        objective: "obj_009",
        text: `
          <h3>Using Word Relationships</h3>
          <p>See how synonyms and antonyms work in real writing.</p>
          
          <div class="example-box">
            <strong>📌 Paragraph with Synonyms:</strong>
            <p><em>"The <strong>beautiful</strong> garden was a sight to behold. <strong>Colorful</strong> flowers bloomed everywhere. The <strong>vibrant</strong> petals danced in the breeze. It was a truly <strong>magnificent</strong> scene."</em></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Paragraph with Antonyms:</strong>
            <p><em>"The <strong>old</strong> house stood in stark contrast to the <strong>new</strong> buildings around it. While the neighborhood was <strong>noisy</strong>, the house was <strong>quiet</strong>. Inside, the rooms were <strong>dark</strong>, unlike the <strong>bright</strong> apartments next door."</em></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Mixed Examples:</strong>
            <p><em>"She was <strong>brave</strong> yet <strong>fearful</strong> at the same time. Her <strong>courageous</strong> actions inspired others, but her <strong>timid</strong> nature showed her humility. She was both <strong>strong</strong> and <strong>vulnerable</strong>."</em></p>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔀 Synonyms</h4>
          <ul>
            <li>✓ Words with similar meanings</li>
            <li>✓ Avoid repetition</li>
            <li>✓ Vary your language</li>
            <li>✓ Consider nuances</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h4>🔀 Antonyms</h4>
          <ul>
            <li>✓ Words with opposite meanings</li>
            <li>✓ Create contrast</li>
            <li>✓ Show comparisons</li>
            <li>✓ Express opposition</li>
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
        misconception: "All synonyms can be used interchangeably",
        correction: "Synonyms have different nuances and contexts",
        explanation: "'Slim' and 'thin' are synonyms but have different connotations."
      },
      {
        id: "mis_002",
        misconception: "There is only one antonym for each word",
        correction: "Words can have multiple antonyms with different meanings",
        explanation: "'Hot' has antonyms like 'cold,' 'cool,' and 'chilly' with different degrees."
      },
      {
        id: "mis_003",
        misconception: "Using a thesaurus always improves writing",
        correction: "Using inappropriate synonyms can make writing worse",
        explanation: "Using complex words incorrectly can confuse readers."
      },
      {
        id: "mis_004",
        misconception: "Synonyms and antonyms are only about adjectives",
        correction: "They apply to all parts of speech",
        explanation: "Nouns, verbs, adjectives, and adverbs all have synonyms and antonyms."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Writing",
        description: "Synonyms and antonyms make writing more interesting and precise.",
        example: "Using varied vocabulary in essays, stories, and reports."
      },
      {
        id: "app_002",
        title: "Vocabulary Building",
        description: "Learning synonyms and antonyms expands your vocabulary.",
        example: "Learning word families helps you understand and use more words."
      },
      {
        id: "app_003",
        title: "Reading Comprehension",
        description: "Understanding word relationships helps you understand texts.",
        example: "Knowing synonyms helps you understand unfamiliar words."
      },
      {
        id: "app_004",
        title: "Standardized Tests",
        description: "Many tests include synonym and antonym questions.",
        example: "SAT, GRE, and other exams test vocabulary knowledge."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Synonym", definition: "A word with a similar meaning to another word." },
    { term: "Antonym", definition: "A word with an opposite meaning to another word." },
    { term: "Thesaurus", definition: "A reference book listing synonyms and antonyms." },
    { term: "Nuance", definition: "A subtle difference in meaning or tone." },
    { term: "Connotation", definition: "The feeling or association a word carries." },
    { term: "Denotation", definition: "The literal or dictionary definition of a word." },
    { term: "Part of Speech", definition: "The category a word belongs to (noun, verb, etc.)." },
    { term: "Context", definition: "The situation or setting in which a word is used." }
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
      question: "What is a synonym?",
      type: "multiple_choice",
      options: [
        "A word with the opposite meaning",
        "A word with a similar meaning",
        "A word with the same spelling",
        "A word with different spelling"
      ],
      answer: "A word with a similar meaning",
      explanation: "Synonyms are words that have similar meanings."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is an antonym?",
      type: "multiple_choice",
      options: [
        "A word with a similar meaning",
        "A word with the opposite meaning",
        "A word with the same spelling",
        "A word with different spelling"
      ],
      answer: "A word with the opposite meaning",
      explanation: "Antonyms are words that have opposite meanings."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a synonym for 'big'?",
      type: "multiple_choice",
      options: ["small", "large", "tiny", "mini"],
      answer: "large",
      explanation: "Large' is a synonym for 'big'."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is an antonym for 'happy'?",
      type: "multiple_choice",
      options: ["joyful", "sad", "cheerful", "delighted"],
      answer: "sad",
      explanation: "'Sad' is an antonym (opposite) of 'happy'."
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "medium",
      question: "Which is a synonym for 'beautiful'?",
      type: "multiple_choice",
      options: ["ugly", "pretty", "plain", "simple"],
      answer: "pretty",
      explanation: "'Pretty' is a synonym for 'beautiful'."
    },
    {
      id: "prac_006",
      objective: "obj_003",
      difficulty: "medium",
      question: "Which is an antonym for 'fast'?",
      type: "multiple_choice",
      options: ["quick", "rapid", "slow", "speedy"],
      answer: "slow",
      explanation: "'Slow' is an antonym (opposite) of 'fast'."
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which sentence uses a synonym to avoid repetition?",
      type: "multiple_choice",
      options: [
        "The big dog was big.",
        "The big dog was large.",
        "The big dog was dog.",
        "The big dog was huge."
      ],
      answer: "The big dog was large.",
      explanation: "'Large' is a synonym for 'big,' avoiding repetition."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which sentence uses antonyms correctly?",
      type: "multiple_choice",
      options: [
        "The weather was hot and cold.",
        "The weather was hot but cold.",
        "The weather was hot, not cold.",
        "The weather was hot or cold."
      ],
      answer: "The weather was hot, not cold.",
      explanation: "This uses antonyms to show that the weather was not the opposite."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which synonym best fits: 'She is a ____ person who always helps others.'",
      type: "multiple_choice",
      options: ["selfish", "kind", "cruel", "mean"],
      answer: "kind",
      explanation: "'Kind' is the most appropriate synonym for someone who helps others."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which synonym best fits: 'The ____ mountain was covered in snow.'",
      type: "multiple_choice",
      options: ["small", "tiny", "tall", "mini"],
      answer: "tall",
      explanation: "'Tall' is the most appropriate synonym for a mountain."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What reference book lists synonyms and antonyms?",
      type: "multiple_choice",
      options: ["Dictionary", "Thesaurus", "Encyclopedia", "Atlas"],
      answer: "Thesaurus",
      explanation: "A thesaurus lists synonyms and antonyms."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between 'slim' and 'thin'?",
      type: "multiple_choice",
      options: [
        "They are exactly the same",
        "Slim has a more positive connotation",
        "Thin has a more positive connotation",
        "They are opposites"
      ],
      answer: "Slim has a more positive connotation",
      explanation: "'Slim' is generally more positive/attractive, while 'thin' can be neutral or negative."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between 'ancient' and 'old'?",
      type: "multiple_choice",
      options: [
        "They are exactly the same",
        "Ancient means very old; old is more general",
        "Old means very old; ancient is more general",
        "They are opposites"
      ],
      answer: "Ancient means very old; old is more general",
      explanation: "'Ancient' refers to something from a very long time ago, while 'old' is more general."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which sentence uses synonyms and antonyms effectively?",
      type: "multiple_choice",
      options: [
        "The strong man was weak.",
        "The brave hero, though fearful, showed courage.",
        "The beautiful ugly girl walked.",
        "The fast slow car drove quickly."
      ],
      answer: "The brave hero, though fearful, showed courage.",
      explanation: "This uses 'brave' and 'courageous' (synonyms) with 'fearful' (antonym) effectively."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which word is the best synonym for 'tired' in formal writing?",
      type: "multiple_choice",
      options: ["beat", "exhausted", "dead", "worn"],
      answer: "exhausted",
      explanation: "'Exhausted' is more appropriate for formal writing than informal options."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which pair is NOT a synonym-antonym pair?",
      type: "multiple_choice",
      options: [
        "happy/sad",
        "fast/slow",
        "hot/cold",
        "big/large"
      ],
      answer: "big/large",
      explanation: "'Big' and 'large' are synonyms, not a synonym-antonym pair."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_synonyms_antonyms",
    title: "Synonyms and Antonyms Quiz",
    description: "Test your understanding of synonyms and antonyms",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between a synonym and an antonym?",
        type: "short_answer",
        answer_key: "Synonyms have similar meanings; antonyms have opposite meanings",
        explanation: "Synonyms are words with similar meanings; antonyms are words with opposite meanings."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give a synonym for 'happy'.",
        type: "short_answer",
        answer_key: "joyful, cheerful, delighted, content (any one)",
        explanation: "Any word with a similar meaning to 'happy' is acceptable."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give an antonym for 'hot'.",
        type: "short_answer",
        answer_key: "cold",
        explanation: "'Cold' is the direct opposite of 'hot.'"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Write a sentence using a synonym to avoid repetition: 'The good movie was good.'",
        type: "short_answer",
        answer_key: "The good movie was excellent. (or similar)",
        explanation: "The answer should replace the second 'good' with a synonym."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Write a sentence using antonyms to show contrast.",
        type: "short_answer",
        answer_key: "She was happy, not sad. (or similar)",
        explanation: "The answer should use two opposite words to show contrast."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Which word is more appropriate for formal writing: 'big' or 'large'?",
        type: "short_answer",
        answer_key: "large",
        explanation: "'Large' is generally more formal than 'big.'"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What reference book would you use to find synonyms?",
        type: "short_answer",
        answer_key: "A thesaurus",
        explanation: "A thesaurus is a reference book that lists synonyms and antonyms."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Explain the difference between 'old' and 'ancient'.",
        type: "short_answer",
        answer_key: "Old is general; ancient means very old from a long time ago",
        explanation: "'Ancient' implies a much longer time span than 'old.'"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Write a sentence using both a synonym and an antonym.",
        type: "short_answer",
        answer_key: "Although she was brave, her fear was strong. (or similar)",
        explanation: "The sentence should include synonyms and/or antonyms."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Why is it important to understand synonyms and antonyms?",
        type: "short_answer",
        answer_key: "To build vocabulary, improve writing, and communicate more effectively",
        explanation: "Understanding word relationships helps with vocabulary building and writing."
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
        "Understand synonyms and antonyms",
        "Use synonyms to improve writing",
        "Use antonyms to show contrast"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are synonyms and antonyms?" },
        { time: "5-10 min", activity: "Direct Instruction - Synonyms" },
        { time: "10-15 min", activity: "Direct Instruction - Antonyms" },
        { time: "15-20 min", activity: "Direct Instruction - Using in Writing" },
        { time: "20-25 min", activity: "Direct Instruction - Thesaurus Skills" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A word with a similar meaning",
        // ... full answer key
      },
      assessment: {
        ass_001: "Synonyms have similar meanings; antonyms have opposite meanings",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Use a thesaurus to find 5 synonyms for common words",
      "Write a paragraph without using the word 'said'",
      "Create a synonym-antonym matching game",
      "Find synonyms and antonyms in a newspaper article"
    ],
    differentiation: {
      struggling: [
        "Start with basic vocabulary",
        "Use visual aids with word pairs",
        "Practice with simple matching exercises",
        "Provide a synonym-antonym word bank"
      ],
      advanced: [
        "Analyze subtle differences in word meanings",
        "Create a synonym-antonym dictionary",
        "Write a story using multiple synonyms",
        "Research the origins of synonyms"
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
      title: "Synonyms and Antonyms",
      description: "Diagram showing synonyms and antonyms relationships",
      url: "/diagrams/synonyms-antonyms.png",
      alt: "Synonyms and antonyms diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Common Synonyms",
      description: "Chart of common synonyms grouped by part of speech",
      url: "/diagrams/common-synonyms.png",
      alt: "Common synonyms chart"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Common Antonyms",
      description: "Chart of common antonyms grouped by category",
      url: "/diagrams/common-antonyms.png",
      alt: "Common antonyms chart"
    }
  ]
};