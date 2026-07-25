// Location: src/data/lessons/core/english_language/grammar/parts_of_speech.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_parts_of_speech",
  subject: "English Language",
  topic: "Grammar",
  name: "Parts of Speech",
  icon: "📚",
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
    "Basic understanding of words",
    "Ability to read and write simple sentences",
    "Knowledge of alphabet and basic spelling"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_tenses",
      name: "Tenses",
      file: "core/english_language/grammar/tenses.js"
    },
    {
      id: "eng_lesson_sentence_structure",
      name: "Sentence Structure",
      file: "core/english_language/grammar/sentence_structure.js"
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
      description: "Define and identify the 8 parts of speech",
      indicator: "Student can list all 8 parts of speech with examples"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify nouns in sentences",
      indicator: "Student can circle all nouns in a given sentence"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify verbs in sentences",
      indicator: "Student can underline all verbs in a given sentence"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify adjectives in sentences",
      indicator: "Student can identify descriptive words in sentences"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Classify nouns into types (proper, common, abstract, collective)",
      indicator: "Student can categorize nouns correctly"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Classify verbs into action and linking verbs",
      indicator: "Student can differentiate between action and linking verbs"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use pronouns correctly in sentences",
      indicator: "Student can replace nouns with appropriate pronouns"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Identify and use adverbs correctly",
      indicator: "Student can identify adverbs and their types (manner, time, place)"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze complex sentences and identify all parts of speech",
      indicator: "Student can label every word in a complex sentence"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Create sentences using all 8 parts of speech correctly",
      indicator: "Student can construct sentences with proper use of all parts of speech"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Parts of Speech - Complete Lesson",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn all 8 parts of speech with examples and practice exercises."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Parts of Speech?</h2>
      <p><strong>Parts of speech</strong> are the building blocks of English grammar. Every word in a sentence belongs to one of these categories based on its function.</p>
      <p>There are <strong>8 parts of speech</strong> in English:</p>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-3 rounded">1. <strong>Nouns</strong> - Naming words</div>
        <div class="bg-green-50 p-3 rounded">2. <strong>Pronouns</strong> - Replacing words</div>
        <div class="bg-yellow-50 p-3 rounded">3. <strong>Verbs</strong> - Action words</div>
        <div class="bg-purple-50 p-3 rounded">4. <strong>Adjectives</strong> - Describing words</div>
        <div class="bg-pink-50 p-3 rounded">5. <strong>Adverbs</strong> - Modifying words</div>
        <div class="bg-orange-50 p-3 rounded">6. <strong>Prepositions</strong> - Relationship words</div>
        <div class="bg-red-50 p-3 rounded">7. <strong>Conjunctions</strong> - Connecting words</div>
        <div class="bg-teal-50 p-3 rounded">8. <strong>Interjections</strong> - Exclamatory words</div>
      </div>
      <p class="mt-4">💡 <strong>Memory Trick:</strong> <em>"Never Pronounce Verbs And Adjectives Properly; Conjunctions Interrupt!"</em></p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Nouns - Naming Words",
        objective: "obj_002",
        text: `
          <h3>What is a Noun?</h3>
          <p>A <strong>noun</strong> is a word that names a person, place, thing, or idea.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Person:</strong> John, teacher, mother, doctor</li>
              <li><strong>Place:</strong> London, school, park, kitchen</li>
              <li><strong>Thing:</strong> book, table, computer, tree</li>
              <li><strong>Idea:</strong> love, happiness, freedom, justice</li>
            </ul>
          </div>
          
          <h4>Types of Nouns:</h4>
          <ul>
            <li><strong>Proper Noun:</strong> Names specific people/places (e.g., <em>Mary, Paris, Coca-Cola</em>) - always capitalized</li>
            <li><strong>Common Noun:</strong> General names (e.g., <em>girl, city, drink</em>)</li>
            <li><strong>Abstract Noun:</strong> Ideas or concepts (e.g., <em>bravery, wisdom, love</em>)</li>
            <li><strong>Collective Noun:</strong> Groups (e.g., <em>team, family, flock, audience</em>)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Identifying Nouns in Sentences:</strong>
            <ul>
              <li>"The <strong>dog</strong> chased the <strong>cat</strong>." → dog, cat</li>
              <li>"<strong>Maria</strong> loves <strong>music</strong>." → Maria, music</li>
              <li>"The <strong>team</strong> celebrated their <strong>victory</strong>." → team, victory</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Pronouns - Replacing Words",
        objective: "obj_007",
        text: `
          <h3>What is a Pronoun?</h3>
          <p>A <strong>pronoun</strong> is a word used in place of a noun to avoid repetition.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>Instead of: "<em>Mary</em> said <em>Mary</em> is happy." → "<em>She</em> said <em>she</em> is happy."</li>
              <li>Instead of: "<em>John and Peter</em> are friends." → "<em>They</em> are friends."</li>
            </ul>
          </div>
          
          <h4>Types of Pronouns:</h4>
          <ul>
            <li><strong>Personal:</strong> I, you, he, she, it, we, they</li>
            <li><strong>Possessive:</strong> my, your, his, her, its, our, their</li>
            <li><strong>Reflexive:</strong> myself, yourself, himself, herself, itself, ourselves, themselves</li>
            <li><strong>Demonstrative:</strong> this, that, these, those</li>
            <li><strong>Interrogative:</strong> who, whom, whose, which, what</li>
            <li><strong>Indefinite:</strong> someone, anyone, everyone, nobody, everybody</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"<strong>She</strong> is my best friend." → She (personal pronoun)</li>
              <li>"This is <strong>my</strong> book." → my (possessive pronoun)</li>
              <li>"He hurt <strong>himself</strong>." → himself (reflexive pronoun)</li>
              <li>"<strong>This</strong> is delicious." → this (demonstrative pronoun)</li>
              <li>"<strong>Who</strong> is coming?" → who (interrogative pronoun)</li>
              <li>"<strong>Everyone</strong> is here." → everyone (indefinite pronoun)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Verbs - Action Words",
        objective: "obj_003",
        text: `
          <h3>What is a Verb?</h3>
          <p>A <strong>verb</strong> describes an action, occurrence, or state of being.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Action:</strong> run, eat, study, write, jump</li>
              <li><strong>State of being:</strong> is, am, are, was, were, seem, become</li>
            </ul>
          </div>
          
          <h4>Types of Verbs:</h4>
          <ul>
            <li><strong>Action Verbs:</strong> Show physical or mental action (e.g., <em>jump, think, read</em>)</li>
            <li><strong>Linking Verbs:</strong> Connect subject to description (e.g., <em>is, am, are, was, were, seem, become, feel</em>)</li>
            <li><strong>Helping Verbs (Auxiliary):</strong> Help main verbs (e.g., <em>have, do, be, will, shall, may, can</em>)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"She <strong>runs</strong> every morning." → runs (action verb)</li>
              <li>"He <strong>is</strong> a teacher." → is (linking verb)</li>
              <li>"They <strong>are playing</strong> football." → are (helping verb), playing (main verb)</li>
              <li>"I <strong>feel</strong> tired." → feel (linking verb - describes state)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Adjectives - Describing Words",
        objective: "obj_004",
        text: `
          <h3>What is an Adjective?</h3>
          <p>An <strong>adjective</strong> modifies or describes a noun or pronoun.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Colors:</strong> red, blue, green, yellow</li>
              <li><strong>Sizes:</strong> big, small, tall, short</li>
              <li><strong>Opinions:</strong> beautiful, ugly, nice, terrible</li>
              <li><strong>Quantities:</strong> some, many, few, several</li>
              <li><strong>Qualities:</strong> good, bad, soft, hard</li>
            </ul>
          </div>
          
          <h4>Comparing with Adjectives:</h4>
          <ul>
            <li><strong>Positive:</strong> tall, fast, beautiful</li>
            <li><strong>Comparative:</strong> taller, faster, more beautiful</li>
            <li><strong>Superlative:</strong> tallest, fastest, most beautiful</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"The <strong>red</strong> car is fast." → red (describes car)</li>
              <li>"She is a <strong>beautiful</strong> singer." → beautiful (describes singer)</li>
              <li>"I have <strong>three</strong> apples." → three (describes quantity)</li>
              <li>"The <strong>tall</strong> man is my uncle." → tall (describes man)</li>
              <li>"This is the <strong>best</strong> book ever." → best (superlative)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Adverbs - Modifying Words",
        objective: "obj_008",
        text: `
          <h3>What is an Adverb?</h3>
          <p>An <strong>adverb</strong> modifies a verb, adjective, or other adverb. It tells <em>how, when, where, to what extent</em>.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Manner (How):</strong> quickly, slowly, carefully, happily</li>
              <li><strong>Time (When):</strong> now, later, yesterday, soon</li>
              <li><strong>Place (Where):</strong> here, there, everywhere, inside</li>
              <li><strong>Frequency (How often):</strong> always, never, often, sometimes</li>
              <li><strong>Degree (How much):</strong> very, extremely, quite, almost</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"She runs <strong>quickly</strong>." → quickly (modifies verb "runs" - how?)</li>
              <li>"I will call you <strong>tomorrow</strong>." → tomorrow (modifies verb "will call" - when?)</li>
              <li>"She is <strong>very</strong> beautiful." → very (modifies adjective "beautiful" - how much?)</li>
              <li>"He drives <strong>too</strong> fast." → too (modifies adverb "fast" - how much?)</li>
              <li>"Come <strong>here</strong>." → here (modifies verb "come" - where?)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Many adverbs end in <strong>-ly</strong> (quickly, slowly, carefully), but not all words ending in -ly are adverbs (e.g., friendly, lovely - these are adjectives).
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Prepositions - Relationship Words",
        objective: "obj_009",
        text: `
          <h3>What is a Preposition?</h3>
          <p>A <strong>preposition</strong> shows the relationship between a noun/pronoun and another word in the sentence. They often indicate <em>time, place, or direction</em>.</p>
          
          <div class="example-box">
            <strong>📌 Common Prepositions:</strong>
            <ul>
              <li><strong>Place:</strong> in, on, at, under, over, between, behind, beside</li>
              <li><strong>Time:</strong> before, after, during, since, until, at, on, in</li>
              <li><strong>Direction:</strong> to, from, into, through, across</li>
              <li><strong>Others:</strong> with, without, about, for, by, of</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"The book is <strong>on</strong> the table." → on (shows location)</li>
              <li>"I will meet you <strong>at</strong> 5 PM." → at (shows time)</li>
              <li>"She walked <strong>to</strong> the store." → to (shows direction)</li>
              <li>"He is sitting <strong>between</strong> John and Mary." → between (shows position)</li>
              <li>"I did it <strong>for</strong> you." → for (shows purpose)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Conjunctions - Connecting Words",
        objective: "obj_009",
        text: `
          <h3>What is a Conjunction?</h3>
          <p>A <strong>conjunction</strong> connects words, phrases, or clauses.</p>
          
          <h4>Types of Conjunctions:</h4>
          <ul>
            <li><strong>Coordinating Conjunctions (FANBOYS):</strong> <em>For, And, Nor, But, Or, Yet, So</em></li>
            <li><strong>Subordinating Conjunctions:</strong> <em>because, although, while, since, if, when, until</em></li>
            <li><strong>Correlative Conjunctions:</strong> <em>either...or, neither...nor, not only...but also</em></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"I like tea <strong>and</strong> coffee." → and (joins words)</li>
              <li>"She wanted to go, <strong>but</strong> she was tired." → but (joins clauses)</li>
              <li>"<strong>Because</strong> I was sick, I stayed home." → because (subordinating)</li>
              <li>"<strong>Either</strong> you come with me <strong>or</strong> you stay home." → either...or (correlative)</li>
              <li>"I was tired, <strong>so</strong> I went to bed." → so (shows consequence)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Interjections - Exclamatory Words",
        objective: "obj_009",
        text: `
          <h3>What is an Interjection?</h3>
          <p>An <strong>interjection</strong> is a word that expresses strong emotion and is usually followed by an exclamation mark.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Surprise:</strong> Wow! Oh! Really!</li>
              <li><strong>Joy:</strong> Hooray! Yay! Great!</li>
              <li><strong>Pain:</strong> Ouch! Ow! Oh!</li>
              <li><strong>Disgust:</strong> Ugh! Yuck! Ew!</li>
              <li><strong>Attention:</strong> Hey! Look! Listen!</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"<strong>Wow!</strong> That's amazing!" → Wow (expresses surprise)</li>
              <li>"<strong>Ouch!</strong> I hurt my finger." → Ouch (expresses pain)</li>
              <li>"<strong>Hooray!</strong> We won the match!" → Hooray (expresses joy)</li>
              <li>"<strong>Hey!</strong> Look at that!" → Hey (calls attention)</li>
              <li>"<strong>Oh</strong>, I see what you mean." → Oh (expresses understanding)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Note:</strong> Interjections are grammatically independent - they don't connect to other parts of the sentence.
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🎯 The 8 Parts of Speech</h4>
          <ul>
            <li><strong>Nouns:</strong> Names (person, place, thing, idea)</li>
            <li><strong>Pronouns:</strong> Replace nouns</li>
            <li><strong>Verbs:</strong> Show action or state</li>
            <li><strong>Adjectives:</strong> Describe nouns</li>
            <li><strong>Adverbs:</strong> Modify verbs, adjectives, or other adverbs</li>
            <li><strong>Prepositions:</strong> Show relationships</li>
            <li><strong>Conjunctions:</strong> Connect words/phrases/clauses</li>
            <li><strong>Interjections:</strong> Express emotion</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>Every word belongs to a part of speech</li>
            <li>Some words can be multiple parts (e.g., "run" - verb or noun)</li>
            <li>Context determines the part of speech</li>
            <li>Use the 8 parts to analyze sentences</li>
            <li>Mastering parts = Mastery of English!</li>
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
        misconception: "All words ending in -ly are adverbs",
        correction: "Not all -ly words are adverbs (e.g., friendly, lovely, silly are adjectives)",
        explanation: "While many adverbs end in -ly, some adjectives also end in -ly. Check what the word describes."
      },
      {
        id: "mis_002",
        misconception: "A noun is only a person, place, or thing",
        correction: "Nouns also include ideas and concepts (abstract nouns)",
        explanation: "Words like 'love,' 'freedom,' and 'happiness' are also nouns."
      },
      {
        id: "mis_003",
        misconception: "Verbs only show action",
        correction: "Verbs can also show a state of being (linking verbs)",
        explanation: "Words like 'is,' 'am,' 'are,' 'seem,' and 'become' are verbs too."
      },
      {
        id: "mis_004",
        misconception: "Prepositions must be before a noun",
        correction: "Prepositions are always before a noun or pronoun (their object)",
        explanation: "A preposition + its object forms a prepositional phrase (e.g., 'on the table')."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Writing Effective Essays",
        description: "Understanding parts of speech helps you write clearer, more varied sentences.",
        example: "Using adjectives and adverbs adds description. Using conjunctions creates complex sentences."
      },
      {
        id: "app_002",
        title: "Public Speaking",
        description: "Knowing parts of speech helps you craft powerful speeches.",
        example: "Using strong verbs and descriptive adjectives makes your speech more engaging."
      },
      {
        id: "app_003",
        title: "Reading Comprehension",
        description: "Understanding parts of speech helps you decode complex texts.",
        example: "Knowing which words are nouns and verbs helps you find the main idea."
      },
      {
        id: "app_004",
        title: "Professional Communication",
        description: "Proper use of parts of speech improves business writing.",
        example: "Using precise nouns and strong verbs makes emails and reports more effective."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Noun", definition: "A word that names a person, place, thing, or idea." },
    { term: "Pronoun", definition: "A word used in place of a noun." },
    { term: "Verb", definition: "A word that shows action or state of being." },
    { term: "Adjective", definition: "A word that describes a noun or pronoun." },
    { term: "Adverb", definition: "A word that modifies a verb, adjective, or other adverb." },
    { term: "Preposition", definition: "A word that shows the relationship between a noun/pronoun and other words." },
    { term: "Conjunction", definition: "A word that connects words, phrases, or clauses." },
    { term: "Interjection", definition: "A word that expresses strong emotion." },
    { term: "Proper Noun", definition: "A specific name of a person, place, or thing (always capitalized)." },
    { term: "Abstract Noun", definition: "A noun that represents an idea or concept." }
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
      question: "How many parts of speech are there in English?",
      type: "multiple_choice",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "There are 8 parts of speech: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which of the following is a noun?",
      type: "multiple_choice",
      options: ["run", "happiness", "beautiful", "quickly"],
      answer: "happiness",
      explanation: "Happiness is a noun (abstract noun). 'Run' is a verb, 'beautiful' is an adjective, and 'quickly' is an adverb."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which word is the verb in: 'She sings beautifully.'",
      type: "multiple_choice",
      options: ["She", "sings", "beautifully", "."],
      answer: "sings",
      explanation: "'Sings' is the action verb. 'She' is a pronoun, and 'beautifully' is an adverb."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "Which word is the adjective in: 'The red apple is sweet.'",
      type: "multiple_choice",
      options: ["The", "red", "apple", "sweet"],
      answer: "red",
      explanation: "'Red' describes the apple (noun). 'Sweet' is also an adjective, but 'red' is the answer."
    },
    {
      id: "prac_005",
      objective: "obj_001",
      difficulty: "easy",
      question: "What part of speech is 'quickly'?",
      type: "multiple_choice",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      answer: "Adverb",
      explanation: "'Quickly' describes how an action is done, so it's an adverb."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What type of noun is 'London'?",
      type: "multiple_choice",
      options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"],
      answer: "Proper noun",
      explanation: "'London' is a specific place name, so it's a proper noun (always capitalized)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What type of noun is 'team'?",
      type: "multiple_choice",
      options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"],
      answer: "Collective noun",
      explanation: "'Team' is a collective noun because it names a group of people."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which verb is a linking verb?",
      type: "multiple_choice",
      options: ["run", "jump", "is", "eat"],
      answer: "is",
      explanation: "'Is' is a linking verb (state of being). 'Run,' 'jump,' and 'eat' are action verbs."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Choose the correct pronoun: '___ is my best friend.' (referring to a female)",
      type: "multiple_choice",
      options: ["He", "She", "They", "We"],
      answer: "She",
      explanation: "'She' is the correct feminine pronoun for a female."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "medium",
      question: "What type of adverb is 'yesterday'?",
      type: "multiple_choice",
      options: ["Manner", "Time", "Place", "Frequency"],
      answer: "Time",
      explanation: "'Yesterday' tells when something happened, so it's an adverb of time."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "medium",
      question: "Which word is a preposition in: 'The book is on the table.'",
      type: "multiple_choice",
      options: ["book", "is", "on", "table"],
      answer: "on",
      explanation: "'On' shows the relationship between the book and the table (location)."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Identify all parts of speech: 'The beautiful girl quickly ran to the store.'",
      type: "multiple_choice",
      options: [
        "The (article), beautiful (adj), girl (n), quickly (adv), ran (v), to (prep), the (article), store (n)",
        "The (n), beautiful (v), girl (n), quickly (adv), ran (v), to (conj), the (adj), store (n)",
        "The (adv), beautiful (adj), girl (n), quickly (v), ran (n), to (prep), the (adv), store (n)",
        "The (prep), beautiful (n), girl (adv), quickly (adj), ran (v), to (conj), the (prep), store (n)"
      ],
      answer: "The (article), beautiful (adj), girl (n), quickly (adv), ran (v), to (prep), the (article), store (n)",
      explanation: "Each word has a specific function: The (article/determiner), beautiful (adjective describing girl), girl (noun/subject), quickly (adverb modifying ran), ran (verb/action), to (preposition showing direction), the (article), store (noun/object)."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence uses all 8 parts of speech correctly?",
      type: "multiple_choice",
      options: [
        "Wow! She quickly ran to the beautiful store and bought some candy.",
        "Wow! Run beautiful store quickly candy she and.",
        "She beautiful ran quickly to candy store and bought!",
        "Quickly ran to store and bought candy, wow!"
      ],
      answer: "Wow! She quickly ran to the beautiful store and bought some candy.",
      explanation: "This sentence contains: Wow! (interjection), She (pronoun), quickly (adverb), ran (verb), to (preposition), the (article), beautiful (adjective), store (noun), and (conjunction), bought (verb), some (adjective), candy (noun)."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "What part of speech is 'but' in: 'I like coffee, but I prefer tea.'",
      type: "multiple_choice",
      options: ["Preposition", "Conjunction", "Adverb", "Interjection"],
      answer: "Conjunction",
      explanation: "'But' is a coordinating conjunction that joins two clauses."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Identify the part of speech: 'between'",
      type: "multiple_choice",
      options: ["Noun", "Verb", "Adjective", "Preposition"],
      answer: "Preposition",
      explanation: "'Between' shows the relationship between two things (position)."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which word is an interjection?",
      type: "multiple_choice",
      options: ["and", "ouch", "quickly", "beautiful"],
      answer: "ouch",
      explanation: "'Ouch' is an interjection that expresses pain. 'And' is a conjunction, 'quickly' is an adverb, and 'beautiful' is an adjective."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_parts_of_speech",
    title: "Parts of Speech Quiz",
    description: "Test your understanding of the 8 parts of speech",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "List the 8 parts of speech.",
        type: "short_answer",
        answer_key: "nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections",
        explanation: "The 8 parts of speech are: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Identify the noun(s) in: 'The happy children played in the park.'",
        type: "short_answer",
        answer_key: "children, park",
        explanation: "'Children' and 'park' are nouns (people and place). 'Happy' is an adjective."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Identify the verb(s) in: 'She writes beautiful poems.'",
        type: "short_answer",
        answer_key: "writes",
        explanation: "'Writes' is the action verb. 'Beautiful' is an adjective, and 'poems' is a noun."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "Identify the adjective(s) in: 'The old man walked slowly.'",
        type: "short_answer",
        answer_key: "old",
        explanation: "'Old' describes the man (noun). 'Slowly' is an adverb describing how he walked."
      },
      {
        id: "ass_005",
        objective: "obj_007",
        difficulty: "medium",
        question: "Replace 'Mary' with a pronoun: 'Mary is a teacher.'",
        type: "short_answer",
        answer_key: "She is a teacher.",
        explanation: "'She' is the correct pronoun replacing 'Mary' (feminine singular)."
      },
      {
        id: "ass_006",
        objective: "obj_008",
        difficulty: "medium",
        question: "Identify the adverb and its type: 'She will come tomorrow.'",
        type: "short_answer",
        answer_key: "tomorrow - adverb of time",
        explanation: "'Tomorrow' tells when she will come, so it's an adverb of time."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "What type of noun is 'bravery'?",
        type: "short_answer",
        answer_key: "abstract noun",
        explanation: "'Bravery' is an abstract noun because it represents an idea/quality, not a physical thing."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "Identify the prepositions: 'The cat is under the table near the window.'",
        type: "short_answer",
        answer_key: "under, near",
        explanation: "'Under' and 'near' show the cat's position relative to the table and window."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Identify the conjunction: 'I wanted to go, but I was too tired.'",
        type: "short_answer",
        answer_key: "but",
        explanation: "'But' is a coordinating conjunction that joins two contrasting clauses."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Identify all parts of speech in: 'Wow! She has a beautiful voice and sings wonderfully.'",
        type: "short_answer",
        answer_key: "Wow! (interjection), She (pronoun), has (verb), a (article), beautiful (adjective), voice (noun), and (conjunction), sings (verb), wonderfully (adverb)",
        explanation: "This sentence contains 7 parts of speech: interjection, pronoun, verb, article, adjective, noun, conjunction, verb, and adverb."
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
        "Identify and define the 8 parts of speech",
        "Classify words correctly",
        "Use parts of speech in sentences"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Hook with a sentence" },
        { time: "5-15 min", activity: "Direct Instruction - Present each part of speech" },
        { time: "15-25 min", activity: "Guided Practice - Identify parts in sample sentences" },
        { time: "25-35 min", activity: "Independent Practice - Worksheets" },
        { time: "35-40 min", activity: "Assessment and Closure - Quick quiz" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "8",
        prac_002: "happiness",
        // ... full answer key
      },
      assessment: {
        ass_001: "nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a poster with examples of each part of speech",
      "Write a story and highlight different parts of speech with colors",
      "Play 'Parts of Speech Bingo'",
      "Create a video explaining the 8 parts of speech"
    ],
    differentiation: {
      struggling: [
        "Provide visual aids with pictures",
        "Use color-coding for each part",
        "Start with nouns and verbs only"
      ],
      advanced: [
        "Analyze complex sentences",
        "Write a paragraph using all 8 parts",
        "Research: How do parts of speech vary across languages?"
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
      title: "The 8 Parts of Speech Wheel",
      description: "A colorful wheel showing all 8 parts with examples",
      url: "/diagrams/parts-of-speech-wheel.png",
      alt: "Diagram showing the 8 parts of speech"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Parts of Speech Reference Chart",
      description: "Comprehensive chart with definitions and examples",
      url: "/diagrams/parts-of-speech-chart.png",
      alt: "Reference chart for parts of speech"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Parts of Speech in Sentences",
      description: "Example sentences with labeled parts of speech",
      url: "/diagrams/parts-in-sentences.png",
      alt: "Labeled sentences showing parts of speech"
    }
  ]
};