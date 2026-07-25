// Location: src/data/lessons/core/english_language/grammar/modifiers.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_modifiers",
  subject: "English Language",
  topic: "Grammar",
  name: "Modifiers",
  icon: "✏️",
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
    "Understanding of parts of speech",
    "Knowledge of adjectives and adverbs",
    "Understanding of sentence structure"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_voice",
      name: "Active and Passive Voice",
      file: "core/english_language/grammar/voice.js"
    },
    {
      id: "eng_lesson_speech",
      name: "Direct and Indirect Speech",
      file: "core/english_language/grammar/speech.js"
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
      description: "Define modifiers and identify adjectives and adverbs",
      indicator: "Student can distinguish between adjectives and adverbs"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use adjectives correctly as modifiers",
      indicator: "Student can place adjectives correctly in sentences"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use adverbs correctly as modifiers",
      indicator: "Student can place adverbs correctly in sentences"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify and correct misplaced modifiers",
      indicator: "Student can move modifiers to their correct positions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify and correct dangling modifiers",
      indicator: "Student can fix modifiers that don't have clear subjects"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use comparative and superlative forms correctly",
      indicator: "Student can form and use comparatives and superlatives"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use intensifiers and qualifiers appropriately",
      indicator: "Student can use words like 'very,' 'quite,' 'rather' correctly"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Identify and correct squinting modifiers",
      indicator: "Student can fix modifiers that could modify two things"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use limiting modifiers correctly",
      indicator: "Student can place words like 'only,' 'just,' 'almost' correctly"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze and revise sentences to improve modifier usage",
      indicator: "Student can rewrite sentences for clarity and precision"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Modifiers",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to use modifiers correctly and avoid common errors."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Modifiers?</h2>
      <p><strong>Modifiers</strong> are words, phrases, or clauses that describe or add information to other words in a sentence. They make writing more specific and interesting.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔵 Without Modifiers</h3>
          <p>"The <strong>dog</strong> ran."</p>
          <p>"She <strong>spoke</strong>."</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🟢 With Modifiers</h3>
          <p>"The <strong>big, brown</strong> dog ran <strong>quickly</strong>."</p>
          <p>"She <strong>spoke softly</strong> to <strong>the crying child</strong>."</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Types of Modifiers</h4>
        <ul>
          <li><strong>Adjectives:</strong> Modify nouns/pronouns</li>
          <li><strong>Adverbs:</strong> Modify verbs, adjectives, or other adverbs</li>
          <li><strong>Modifying Phrases:</strong> Prepositional phrases, participial phrases</li>
          <li><strong>Modifying Clauses:</strong> Relative clauses, adverbial clauses</li>
        </ul>
      </div>
      
      <div class="bg-red-50 p-4 rounded mt-4">
        <h4>⚠️ Common Errors:</h4>
        <ul>
          <li><strong>Misplaced Modifiers:</strong> Modifiers in the wrong place</li>
          <li><strong>Dangling Modifiers:</strong> Modifiers with no clear subject</li>
          <li><strong>Squinting Modifiers:</strong> Modifiers that could modify two things</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Adjectives as Modifiers",
        objective: "obj_002",
        text: `
          <h3>Adjectives</h3>
          <p><strong>Adjectives</strong> modify nouns or pronouns. They answer questions like: <em>What kind? Which one? How many?</em></p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"The <strong>red</strong> car is fast." (What kind?)</li>
              <li>"<strong>That</strong> book is interesting." (Which one?)</li>
              <li>"<strong>Three</strong> students arrived." (How many?)</li>
              <li>"She is <strong>beautiful</strong>." (What kind?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Order of Adjectives:</strong>
            <ul>
              <li><strong>Opinion:</strong> beautiful, ugly, nice</li>
              <li><strong>Size:</strong> big, small, tall</li>
              <li><strong>Age:</strong> old, new, young</li>
              <li><strong>Shape:</strong> round, square, long</li>
              <li><strong>Color:</strong> red, blue, green</li>
              <li><strong>Origin:</strong> French, American, Chinese</li>
              <li><strong>Material:</strong> wooden, cotton, silk</li>
              <li><strong>Purpose:</strong> sleeping (bag), cooking (pot)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adjective Order Examples:</strong>
            <ul>
              <li>"A <strong>beautiful big old round red French wooden</strong> table"</li>
              <li>"<strong>Lovely little old rectangular green British silver</strong> box"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Adverbs as Modifiers",
        objective: "obj_003",
        text: `
          <h3>Adverbs</h3>
          <p><strong>Adverbs</strong> modify verbs, adjectives, or other adverbs. They answer questions like: <em>How? When? Where? How often? How much?</em></p>
          
          <div class="example-box">
            <strong>📌 Types of Adverbs:</strong>
            <ul>
              <li><strong>Manner (How):</strong> She sings <strong>beautifully</strong>.</li>
              <li><strong>Time (When):</strong> I will call you <strong>tomorrow</strong>.</li>
              <li><strong>Place (Where):</strong> Put it <strong>there</strong>.</li>
              <li><strong>Frequency (How often):</strong> I <strong>always</strong> wake up early.</li>
              <li><strong>Degree (How much):</strong> She is <strong>very</strong> intelligent.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adverb Positions:</strong>
            <ul>
              <li><strong>Before the verb:</strong> She <strong>quickly</strong> ran.</li>
              <li><strong>After the verb:</strong> She ran <strong>quickly</strong>.</li>
              <li><strong>Before the adjective:</strong> It is <strong>very</strong> cold.</li>
              <li><strong>Beginning of sentence:</strong> <strong>Suddenly</strong>, the lights went out.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Not all words ending in -ly are adverbs (e.g., friendly, lovely, silly are adjectives).
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Comparative and Superlative Forms",
        objective: "obj_006",
        text: `
          <h3>Comparing with Modifiers</h3>
          <p>We use <strong>comparative</strong> and <strong>superlative</strong> forms to compare two or more things.</p>
          
          <div class="example-box">
            <strong>📌 Adjectives:</strong>
            <ul>
              <li><strong>Positive:</strong> tall, fast, beautiful</li>
              <li><strong>Comparative:</strong> taller, faster, more beautiful</li>
              <li><strong>Superlative:</strong> tallest, fastest, most beautiful</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adverbs:</strong>
            <ul>
              <li><strong>Positive:</strong> quickly, slowly, well</li>
              <li><strong>Comparative:</strong> more quickly, more slowly, better</li>
              <li><strong>Superlative:</strong> most quickly, most slowly, best</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"She is <strong>taller</strong> than her sister." (comparative)</li>
              <li>"He is the <strong>tallest</strong> in the class." (superlative)</li>
              <li>"She runs <strong>faster</strong> than I do." (comparative)</li>
              <li>"He runs the <strong>fastest</strong> on the team." (superlative)</li>
              <li>"This is <strong>more interesting</strong> than that." (comparative)</li>
              <li>"This is the <strong>most interesting</strong> book." (superlative)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Irregular Forms:</strong>
            <ul>
              <li>Good → Better → Best</li>
              <li>Bad → Worse → Worst</li>
              <li>Far → Farther/Further → Farthest/Furthest</li>
              <li>Little → Less → Least</li>
              <li>Many/Much → More → Most</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Misplaced Modifiers",
        objective: "obj_004",
        text: `
          <h3>Misplaced Modifiers</h3>
          <p>A <strong>misplaced modifier</strong> is placed in the wrong position, making the sentence confusing or funny.</p>
          
          <div class="example-box">
            <strong>❌ Incorrect:</strong>
            <ul>
              <li>"<strong>Running quickly</strong>, the tree fell on the man." (The tree wasn't running!)</li>
              <li>"She wore a dress <strong>made of silk</strong> to the party." (Could be dress or party?)</li>
              <li>"He almost drove his car <strong>for an hour</strong>." (Did he almost drive, or drive for almost an hour?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>✅ Correct:</strong>
            <ul>
              <li>"<strong>Running quickly</strong>, the man was hit by the falling tree."</li>
              <li>"She wore a dress <strong>made of silk</strong> to the party." (Already correct - modifies dress)</li>
              <li>"He drove his car <strong>for almost an hour</strong>." (Moves modifier to correct place)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>❌ "The woman walked the dog with a hat." (Dog had a hat?)</li>
              <li>✅ "The woman with a hat walked the dog."</li>
              <li>❌ "I saw a car driving down the street with a flat tire." (Street had flat tire?)</li>
              <li>✅ "I saw a car with a flat tire driving down the street."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Dangling Modifiers",
        objective: "obj_005",
        text: `
          <h3>Dangling Modifiers</h3>
          <p>A <strong>dangling modifier</strong> doesn't clearly and logically modify anything in the sentence.</p>
          
          <div class="example-box">
            <strong>❌ Incorrect:</strong>
            <ul>
              <li>"<strong>Walking through the park</strong>, the flowers were beautiful." (The flowers weren't walking!)</li>
              <li>"<strong>Having finished the test</strong>, the bell rang." (The bell didn't finish the test!)</li>
              <li>"<strong>To succeed in business</strong>, hard work is needed." (Hard work doesn't succeed in business!)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>✅ Correct:</strong>
            <ul>
              <li>"<strong>Walking through the park</strong>, I saw beautiful flowers."</li>
              <li>"<strong>Having finished the test</strong>, the students heard the bell ring."</li>
              <li>"<strong>To succeed in business</strong>, you need to work hard."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>❌ "After reading the book, the movie was disappointing."</li>
              <li>✅ "After reading the book, I found the movie disappointing."</li>
              <li>❌ "Being late, the meeting had started."</li>
              <li>✅ "Being late, I found that the meeting had started."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Fixing Dangling Modifiers:</strong>
            <ul>
              <li>Add a clear subject to the modifier</li>
              <li>Change the modifier into a clause</li>
              <li>Rewrite the sentence</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Squinting Modifiers",
        objective: "obj_008",
        text: `
          <h3>Squinting Modifiers</h3>
          <p>A <strong>squinting modifier</strong> is placed so it could modify the word before OR the word after it.</p>
          
          <div class="example-box">
            <strong>❌ Examples:</strong>
            <ul>
              <li>"Students who study <strong>often</strong> pass the test." (Does often modify study or pass?)</li>
              <li>"The teacher said <strong>clearly</strong> the students were wrong." (Did she say clearly, or were they clearly wrong?)</li>
              <li>"She almost drove <strong>all</strong> the way home." (Did she almost drive, or drive almost all the way?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>✅ Correct:</strong>
            <ul>
              <li>"Students who <strong>often</strong> study pass the test." (Often modifies study)</li>
              <li>"Students who study pass the test <strong>often</strong>." (Often modifies pass)</li>
              <li>"The teacher said that the students were <strong>clearly</strong> wrong."</li>
              <li>"The teacher said <strong>clearly</strong>, 'The students were wrong.'"</li>
              <li>"She drove <strong>almost</strong> all the way home."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Limiting Modifiers",
        objective: "obj_009",
        text: `
          <h3>Limiting Modifiers</h3>
          <p><strong>Limiting modifiers</strong> like <em>only, just, almost, even, nearly</em> should be placed directly before the word they modify.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>Only</strong> John ate the cake." (No one else ate it)</li>
              <li>"John <strong>only</strong> ate the cake." (He didn't do anything else with it)</li>
              <li>"John ate the <strong>only</strong> cake." (There was one cake)</li>
              <li>"John ate the cake <strong>only</strong>." (He did nothing else)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>"She <strong>almost</strong> failed the test." (She came close to failing)</li>
              <li>"She failed <strong>almost</strong> all the questions." (She failed most questions)</li>
              <li>"I <strong>just</strong> want a coffee." (Only coffee, nothing else)</li>
              <li>"I want <strong>just</strong> coffee." (Only coffee, nothing else - same meaning)</li>
              <li>"He <strong>even</strong> helped clean up." (He went beyond expectations)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> The position of limiting modifiers can change the meaning significantly!
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Modifying Phrases and Clauses",
        objective: "obj_010",
        text: `
          <h3>Phrases and Clauses as Modifiers</h3>
          <p>Modifiers can be entire phrases or clauses.</p>
          
          <div class="example-box">
            <strong>📌 Prepositional Phrases:</strong>
            <ul>
              <li>"The book <strong>on the table</strong> is mine." (Which book?)</li>
              <li>"She ran <strong>to the store</strong>." (Where?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Participial Phrases:</strong>
            <ul>
              <li>"<strong>Running quickly</strong>, she caught the bus." (How?)</li>
              <li>"The man <strong>sitting in the corner</strong> is my uncle." (Which man?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Relative Clauses:</strong>
            <ul>
              <li>"The woman <strong>who lives next door</strong> is a doctor." (Which woman?)</li>
              <li>"This is the book <strong>that I bought</strong>." (Which book?)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adverbial Clauses:</strong>
            <ul>
              <li>"<strong>Because I was tired</strong>, I went home." (Why?)</li>
              <li>"I called her <strong>when I arrived</strong>." (When?)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>✏️ Modifier Rules</h4>
          <ul>
            <li>✓ Place modifiers close to what they modify</li>
            <li>✓ Don't create dangling modifiers</li>
            <li>✓ Avoid squinting modifiers</li>
            <li>✓ Place limiting modifiers carefully</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Modifiers add detail and clarity</li>
            <li>✓ Check your sentences for confusion</li>
            <li>✓ Read sentences aloud to catch errors</li>
            <li>✓ When in doubt, rewrite for clarity</li>
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
        misconception: "All modifiers should be placed next to the word they modify",
        correction: "Modifiers should be placed where they make the most sense",
        explanation: "While modifiers should be close to what they modify, sometimes context and rhythm affect placement."
      },
      {
        id: "mis_002",
        misconception: "Dangling modifiers are always wrong",
        correction: "Some dangling modifiers are acceptable in certain contexts (e.g., 'Generally speaking, ...')",
        explanation: "Some set phrases with dangling modifiers are accepted in formal writing."
      },
      {
        id: "mis_003",
        misconception: "Adjectives and adverbs can be used interchangeably",
        correction: "Adjectives modify nouns; adverbs modify verbs, adjectives, and other adverbs",
        explanation: "Use 'quick' (adj) to describe a noun, 'quickly' (adv) to describe a verb."
      },
      {
        id: "mis_004",
        misconception: "Only' always means the same thing",
        correction: "'Only' can modify different parts of a sentence, changing meaning",
        explanation: "The placement of 'only' changes what it limits (only John ate cake vs John ate only cake)."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Technical Writing",
        description: "Precise modifiers are essential for clear technical communication.",
        example: "In user manuals, misplaced modifiers can cause confusion or accidents."
      },
      {
        id: "app_002",
        title: "Legal Writing",
        description: "Modifier placement can change the legal meaning of documents.",
        example: "A misplaced 'only' in a contract could change the entire meaning."
      },
      {
        id: "app_003",
        title: "Creative Writing",
        description: "Modifiers add richness and description to stories.",
        example: "Authors use modifiers to create vivid imagery and atmosphere."
      },
      {
        id: "app_004",
        title: "Journalism",
        description: "Clear modifier use prevents misinterpretation in news.",
        example: "Misplaced modifiers in headlines can create unintended humor or confusion."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Modifier", definition: "A word, phrase, or clause that describes another word." },
    { term: "Adjective", definition: "A modifier that describes a noun or pronoun." },
    { term: "Adverb", definition: "A modifier that describes a verb, adjective, or other adverb." },
    { term: "Misplaced Modifier", definition: "A modifier placed too far from the word it modifies." },
    { term: "Dangling Modifier", definition: "A modifier with no clear subject in the sentence." },
    { term: "Squinting Modifier", definition: "A modifier that could modify either what comes before or after." },
    { term: "Comparative", definition: "The form used to compare two things (e.g., taller, more quickly)." },
    { term: "Superlative", definition: "The form used to compare three or more things (e.g., tallest, most quickly)." },
    { term: "Limiting Modifier", definition: "A modifier like 'only' or 'almost' that restricts meaning." }
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
      question: "What is the modifier in: 'The beautiful sunset was amazing.'?",
      type: "multiple_choice",
      options: ["beautiful", "sunset", "amazing", "was"],
      answer: "beautiful",
      explanation: "'Beautiful' is an adjective modifying 'sunset'."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the modifier in: 'She sings beautifully.'?",
      type: "multiple_choice",
      options: ["sings", "beautifully", "she", "sings beautifully"],
      answer: "beautifully",
      explanation: "'Beautifully' is an adverb modifying the verb 'sings'."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Choose the correct adjective order: 'a ____ ____ ____ table'",
      type: "multiple_choice",
      options: ["wooden, round, small", "round, wooden, small", "small, round, wooden", "wooden, small, round"],
      answer: "small, round, wooden",
      explanation: "Adjective order: opinion, size, age, shape, color, origin, material, purpose."
    },
    {
      id: "prac_004",
      objective: "obj_006",
      difficulty: "easy",
      question: "What is the comparative form of 'big'?",
      type: "multiple_choice",
      options: ["bigger", "biggest", "more big", "more bigger"],
      answer: "bigger",
      explanation: "The comparative of 'big' is 'bigger' (add -er)."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Identify the misplaced modifier: 'The man walked the dog with a red collar.'",
      type: "multiple_choice",
      options: ["The man", "walked the dog", "with a red collar", "dog with a red collar"],
      answer: "with a red collar",
      explanation: "The modifier 'with a red collar' suggests the man has a red collar. Should be: 'The man walked the dog that had a red collar.'"
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Correct the misplaced modifier: 'I saw a car driving down the street with a flat tire.'",
      type: "multiple_choice",
      options: [
        "I saw a car with a flat tire driving down the street.",
        "I saw a car driving with a flat tire down the street.",
        "With a flat tire, I saw a car driving down the street.",
        "I saw, with a flat tire, a car driving down the street."
      ],
      answer: "I saw a car with a flat tire driving down the street.",
      explanation: "The modifier should be placed directly after what it modifies (the car)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Identify the dangling modifier: 'Walking through the park, the flowers were beautiful.'",
      type: "multiple_choice",
      options: ["Walking through the park", "the flowers", "were beautiful", "through the park"],
      answer: "Walking through the park",
      explanation: "Who was walking? The flowers weren't walking. Need to add a subject."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Correct the dangling modifier: 'Having finished the test, the bell rang.'",
      type: "multiple_choice",
      options: [
        "Having finished the test, the bell rang loudly.",
        "Having finished the test, the students heard the bell ring.",
        "Having finished the test, the ringing bell sounded.",
        "Having finished, the test bell rang."
      ],
      answer: "Having finished the test, the students heard the bell ring.",
      explanation: "Add a clear subject (the students) to the modifier."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Choose the correct form: 'She is the ____ student in the class.'",
      type: "multiple_choice",
      options: ["smart", "smarter", "smartest", "more smart"],
      answer: "smartest",
      explanation: "Use superlative (smartest) when comparing three or more."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Choose the correct intensifier: 'The movie was ____ interesting.'",
      type: "multiple_choice",
      options: ["very", "more", "most", "quite"],
      answer: "very",
      explanation: "All are correct, but 'very' is the most common intensifier for adjectives."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Identify the squinting modifier: 'Students who study often pass the test.'",
      type: "multiple_choice",
      options: ["Students", "who study", "often", "pass the test"],
      answer: "often",
      explanation: "'Often' could modify 'study' or 'pass' - it's a squinting modifier."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Correct the squinting modifier: 'The teacher said clearly the students were wrong.'",
      type: "multiple_choice",
      options: [
        "The teacher said the students were clearly wrong.",
        "The teacher said clearly, 'The students were wrong.'",
        "Clearly, the teacher said the students were wrong.",
        "The teacher clearly said the students were wrong."
      ],
      answer: "The teacher said clearly, 'The students were wrong.'",
      explanation: "This clarifies that 'clearly' modifies how the teacher said it, not the students being wrong."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Choose the correct placement of 'only': '___ John ate the cake.'",
      type: "multiple_choice",
      options: ["Only", "John only", "John ate only", "John ate the only"],
      answer: "Only",
      explanation: "To mean that no one else ate cake, place 'only' before John."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "What does 'John only ate the cake' mean?",
      type: "multiple_choice",
      options: [
        "No one else ate the cake",
        "John didn't do anything else with the cake",
        "There was only one cake",
        "John was the only one who ate"
      ],
      answer: "John didn't do anything else with the cake",
      explanation: "'Only' modifies 'ate' - he only ate it (didn't buy, make, or share it)."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Rewrite for clarity: 'She almost drove all the way home.'",
      type: "multiple_choice",
      options: [
        "She drove almost all the way home.",
        "Almost she drove all the way home.",
        "She drove all the way home almost.",
        "She drove all almost the way home."
      ],
      answer: "She drove almost all the way home.",
      explanation: "This clarifies that she came close to completing the journey, not that she almost started driving."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Rewrite for clarity: 'The woman walked the dog with a hat.'",
      type: "multiple_choice",
      options: [
        "The woman with a hat walked the dog.",
        "The woman walked the dog that had a hat.",
        "The woman walked, with a hat, the dog.",
        "The woman walked the dog and a hat."
      ],
      answer: "The woman with a hat walked the dog.",
      explanation: "This clarifies that the woman (not the dog) had the hat."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_modifiers",
    title: "Modifiers Quiz",
    description: "Test your understanding of modifiers and their usage",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the modifier in: 'He spoke loudly.'?",
        type: "short_answer",
        answer_key: "loudly",
        explanation: "'Loudly' is an adverb modifying the verb 'spoke'."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give three adjectives to describe a 'house'.",
        type: "short_answer",
        answer_key: "large, beautiful, modern (any three adjectives)",
        explanation: "Adjectives describe nouns - any descriptive words for a house are acceptable."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give an example of an adverb modifying a verb.",
        type: "short_answer",
        answer_key: "She ran quickly.",
        explanation: "'Quickly' is an adverb modifying the verb 'ran'."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Identify the misplaced modifier: 'I saw a car driving down the street with a flat tire.'",
        type: "short_answer",
        answer_key: "with a flat tire",
        explanation: "The modifier suggests the street has a flat tire. Should modify the car."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Correct this sentence: 'The man walked the dog with a red collar.'",
        type: "short_answer",
        answer_key: "The man walked the dog that had a red collar.",
        explanation: "This clarifies that the dog (not the man) had the red collar."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Correct this dangling modifier: 'Walking through the park, the flowers were beautiful.'",
        type: "short_answer",
        answer_key: "Walking through the park, I saw beautiful flowers.",
        explanation: "Add a clear subject (I) to the modifier."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Give the comparative and superlative forms of 'good'.",
        type: "short_answer",
        answer_key: "better, best",
        explanation: "'Good' is irregular: good (positive), better (comparative), best (superlative)."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Correct this squinting modifier: 'Students who study often pass the test.'",
        type: "short_answer",
        answer_key: "Students who often study pass the test.",
        explanation: "This clarifies that 'often' modifies 'study' (not 'pass')."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Correct this limiting modifier: 'I only saw the movie.' (Meaning: I only saw it, didn't do anything else)",
        type: "short_answer",
        answer_key: "I saw only the movie.",
        explanation: "Moving 'only' before 'movie' clarifies that I saw nothing else."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Rewrite for clarity: 'She almost drove all the way home.'",
        type: "short_answer",
        answer_key: "She drove almost all the way home.",
        explanation: "This clarifies that she completed most of the journey, not that she almost started."
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
        "Identify adjectives and adverbs",
        "Use modifiers correctly",
        "Fix misplaced, dangling, and squinting modifiers"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are modifiers?" },
        { time: "5-15 min", activity: "Direct Instruction - Basic Modifiers" },
        { time: "15-25 min", activity: "Direct Instruction - Common Errors" },
        { time: "25-35 min", activity: "Guided Practice - Correcting Errors" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "beautiful",
        // ... full answer key
      },
      assessment: {
        ass_001: "loudly",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Find examples of misplaced modifiers in newspapers",
      "Write a paragraph using a variety of modifiers",
      "Create a comic strip showing misplaced modifier humor",
      "Design a poster explaining modifier rules"
    ],
    differentiation: {
      struggling: [
        "Start with adjectives and adverbs only",
        "Use pictures to show modifiers",
        "Practice with simple sentences first",
        "Provide modifier placement rules"
      ],
      advanced: [
        "Analyze complex modifier structures",
        "Write about the effects of different modifiers",
        "Research how modifiers are used in advertising",
        "Create an advanced modifier worksheet"
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
      title: "Types of Modifiers",
      description: "Diagram showing different types of modifiers",
      url: "/diagrams/modifiers-types.png",
      alt: "Diagram showing types of modifiers"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Common Modifier Errors",
      description: "Chart showing misplaced, dangling, and squinting modifiers",
      url: "/diagrams/modifier-errors.png",
      alt: "Chart of common modifier errors"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Modifier Placement Guide",
      description: "Guide to placing modifiers correctly",
      url: "/diagrams/modifier-placement.png",
      alt: "Guide for placing modifiers"
    }
  ]
};