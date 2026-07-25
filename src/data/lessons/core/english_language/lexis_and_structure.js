// Location: src/data/lessons/core/english_language/lexis_and_structure.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_lexis_structure",
  subject: "English Language",
  topic: "Lexis and Structure",
  name: "Lexis and Structure",
  icon: "🔤",
  grade_level: "JSS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of parts of speech",
    "Knowledge of sentence structure",
    "Basic vocabulary",
    "Understanding of grammar rules"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
    },
    {
      id: "eng_lesson_punctuation",
      name: "Punctuation",
      file: "core/english_language/punctuation.js"
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
      description: "Define lexis and structure",
      indicator: "Student can explain what lexis and structure mean in English"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and use common lexical items",
      indicator: "Student can use common words and phrases correctly"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify basic sentence structures",
      indicator: "Student can recognize subject-verb-object patterns"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use collocations correctly",
      indicator: "Student can match words that commonly go together"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use idioms and fixed expressions",
      indicator: "Student can use common idioms appropriately"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify and use phrasal verbs",
      indicator: "Student can understand and use common phrasal verbs"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use appropriate register and style",
      indicator: "Student can choose between formal and informal language"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Analyze sentence patterns and structures",
      indicator: "Student can identify and analyze complex sentence structures"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use advanced lexical items appropriately",
      indicator: "Student can use sophisticated vocabulary in context"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Identify and correct lexical and structural errors",
      indicator: "Student can spot and fix errors in sentences"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Apply lexical and structural rules in writing",
      indicator: "Student can write coherent sentences with correct lexis and structure"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Differentiate between British and American English lexis",
      indicator: "Student can identify lexical differences between varieties"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Lexis and Structure",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the vocabulary and grammar structures that make English work."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Lexis and Structure?</h2>
      <p><strong>Lexis</strong> refers to the vocabulary or words of a language. <strong>Structure</strong> refers to the way words are organized into sentences. Together, they form the foundation of effective communication.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📚 Lexis</h3>
          <p>The words we use</p>
          <ul>
            <li>✓ Vocabulary</li>
            <li>✓ Collocations</li>
            <li>✓ Idioms</li>
            <li>✓ Phrasal verbs</li>
            <li>✓ Register</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🏗️ Structure</h3>
          <p>How words are organized</p>
          <ul>
            <li>✓ Sentence patterns</li>
            <li>✓ Word order</li>
            <li>✓ Clause types</li>
            <li>✓ Grammar rules</li>
            <li>✓ Cohesion</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why They Matter</h4>
        <ul>
          <li>✓ Clear communication</li>
          <li>✓ Accurate expression</li>
          <li>✓ Academic success</li>
          <li>✓ Professional writing</li>
          <li>✓ Language proficiency</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Lexical Items - Types of Vocabulary",
        objective: "obj_002",
        text: `
          <h3>Understanding Lexis</h3>
          <p><strong>Lexical items</strong> are words and phrases that have meaning in a language.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Content Words</h4>
              <ul>
                <li><strong>Nouns:</strong> table, happiness, London</li>
                <li><strong>Verbs:</strong> run, think, become</li>
                <li><strong>Adjectives:</strong> beautiful, tall, interesting</li>
                <li><strong>Adverbs:</strong> quickly, very, often</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Function Words</h4>
              <ul>
                <li><strong>Prepositions:</strong> in, on, at, by</li>
                <li><strong>Conjunctions:</strong> and, but, because</li>
                <li><strong>Articles:</strong> a, an, the</li>
                <li><strong>Auxiliaries:</strong> is, has, will, can</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li><strong>Content words:</strong> "The <strong>beautiful</strong> <strong>butterfly</strong> <strong>flew</strong> <strong>gracefully</strong>."</li>
              <li><strong>Function words:</strong> "<strong>The</strong> butterfly flew <strong>through</strong> the garden <strong>and</strong> landed <strong>on</strong> a flower."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Collocations",
        objective: "obj_004",
        text: `
          <h3>Collocations</h3>
          <p><strong>Collocations</strong> are words that naturally go together. Using correct collocations makes your English sound more natural.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Collocations:</h4>
              <ul>
                <li><strong>Make</strong> a decision</li>
                <li><strong>Do</strong> homework</li>
                <li><strong>Take</strong> a shower</li>
                <li><strong>Have</strong> breakfast</li>
                <li><strong>Get</strong> married</li>
                <li><strong>Pay</strong> attention</li>
                <li><strong>Keep</strong> a secret</li>
                <li><strong>Save</strong> money</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Strong Collocations:</h4>
              <ul>
                <li><strong>Heavy</strong> rain (not "strong rain")</li>
                <li><strong>Strong</strong> coffee (not "heavy coffee")</li>
                <li><strong>Fast</strong> food (not "quick food")</li>
                <li><strong>Deep</strong> sleep (not "strong sleep")</li>
                <li><strong>Close</strong> friend (not "near friend")</li>
                <li><strong>High</strong> temperature (not "tall temperature")</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>❌ "I <strong>made</strong> a mistake." → ✅ "I <strong>made</strong> a mistake." (Correct!)</li>
              <li>❌ "She <strong>did</strong> a decision." → ✅ "She <strong>made</strong> a decision."</li>
              <li>❌ "He <strong>took</strong> a mistake." → ✅ "He <strong>made</strong> a mistake."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> Pay attention to collocations when reading and listening. They will help you sound more natural.
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Idioms",
        objective: "obj_005",
        text: `
          <h3>Idioms</h3>
          <p><strong>Idioms</strong> are fixed expressions with figurative meanings that are different from the literal meanings of the individual words.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Idioms:</h4>
              <ul>
                <li><strong>Piece of cake:</strong> Very easy</li>
                <li><strong>Break the ice:</strong> Start conversation</li>
                <li><strong>Under the weather:</strong> Feeling sick</li>
                <li><strong>Hit the nail on the head:</strong> Be exactly right</li>
                <li><strong>Once in a blue moon:</strong> Very rarely</li>
                <li><strong>Cost an arm and a leg:</strong> Very expensive</li>
                <li><strong>Spill the beans:</strong> Reveal a secret</li>
                <li><strong>Bite the bullet:</strong> Face a difficult situation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Idioms in Context:</h4>
              <ul>
                <li>"The exam was <strong>a piece of cake</strong>."</li>
                <li>"I tried to <strong>break the ice</strong> at the party."</li>
                <li>"She's feeling <strong>under the weather</strong> today."</li>
                <li>"He <strong>hit the nail on the head</strong> with his answer."</li>
                <li>"I go to the theater <strong>once in a blue moon</strong>."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Literal vs Figurative:</strong>
            <ul>
              <li><strong>Literal:</strong> "I'm under the weather." (Under the sky/weather)</li>
              <li><strong>Figurative:</strong> "I'm under the weather." (I'm sick)</li>
              <li><strong>Literal:</strong> "It's raining cats and dogs." (Animals falling from sky)</li>
              <li><strong>Figurative:</strong> "It's raining cats and dogs." (It's raining heavily)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Phrasal Verbs",
        objective: "obj_006",
        text: `
          <h3>Phrasal Verbs</h3>
          <p><strong>Phrasal verbs</strong> are combinations of a verb and a particle (preposition or adverb) that create a new meaning.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Phrasal Verbs:</h4>
              <ul>
                <li><strong>Give up:</strong> Stop trying (quit)</li>
                <li><strong>Turn off:</strong> Switch off</li>
                <li><strong>Put on:</strong> Wear</li>
                <li><strong>Take off:</strong> Remove (or depart)</li>
                <li><strong>Look after:</strong> Take care of</li>
                <li><strong>Run out of:</strong> Have no more of</li>
                <li><strong>Call off:</strong> Cancel</li>
                <li><strong>Bring up:</strong> Raise (a child) or mention</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types:</h4>
              <ul>
                <li><strong>Intransitive:</strong> No object</li>
                <li>"The plane <strong>took off</strong>."</li>
                <li><strong>Transitive:</strong> Has object</li>
                <li>"She <strong>put on</strong> her coat."</li>
                <li><strong>Separable:</strong> Can split</li>
                <li>"She <strong>put her coat on</strong>."</li>
                <li><strong>Inseparable:</strong> Cannot split</li>
                <li>"I <strong>look after</strong> my sister."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"I <strong>gave up</strong> smoking." (stopped)</li>
              <li>"Please <strong>turn off</strong> the lights." (switch off)</li>
              <li>"She <strong>took off</strong> her shoes." (removed)</li>
              <li>"We <strong>ran out of</strong> milk." (no more milk)</li>
              <li>"They <strong>called off</strong> the meeting." (cancelled)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Register and Style",
        objective: "obj_007",
        text: `
          <h3>Register</h3>
          <p><strong>Register</strong> refers to the level of formality in language. Different situations require different registers.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formal</h4>
              <ul>
                <li>Academic writing</li>
                <li>Business letters</li>
                <li>Official documents</li>
                <li><em>"We regret to inform you..."</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Neutral</h4>
              <ul>
                <li>News articles</li>
                <li>Textbooks</li>
                <li>Reports</li>
                <li><em>"The government announced..."</em></li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Informal</h4>
              <ul>
                <li>Emails to friends</li>
                <li>Text messages</li>
                <li>Everyday conversation</li>
                <li><em>"Hey, what's up?"</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Formal vs Informal:</strong>
            <ul>
              <li><strong>Formal:</strong> "The meeting has been postponed until next week."</li>
              <li><strong>Informal:</strong> "We've moved the meeting to next week."</li>
              <li><strong>Formal:</strong> "I would like to apologize for my absence."</li>
              <li><strong>Informal:</strong> "Sorry I wasn't there."</li>
              <li><strong>Formal:</strong> "I am writing to request additional information."</li>
              <li><strong>Informal:</strong> "Can you give me more info?"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sentence Patterns",
        objective: "obj_008",
        text: `
          <h3>Basic Sentence Patterns</h3>
          <p>Understanding sentence patterns helps you build correct and varied sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Patterns:</h4>
              <ul>
                <li><strong>SV:</strong> Subject + Verb</li>
                <li><em>"Birds fly."</em></li>
                <li><strong>SVO:</strong> Subject + Verb + Object</li>
                <li><em>"She reads books."</em></li>
                <li><strong>SVC:</strong> Subject + Verb + Complement</li>
                <li><em>"He is a doctor."</em></li>
                <li><strong>SVOO:</strong> Subject + Verb + Object + Object</li>
                <li><em>"She gave him a gift."</em></li>
                <li><strong>SVOC:</strong> Subject + Verb + Object + Complement</li>
                <li><em>"They called him a hero."</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>SV:</strong> "The children <strong>played</strong>."</li>
                <li><strong>SVO:</strong> "The children <strong>played football</strong>."</li>
                <li><strong>SVC:</strong> "The children <strong>were happy</strong>."</li>
                <li><strong>SVOO:</strong> "The teacher <strong>gave the children homework</strong>."</li>
                <li><strong>SVOC:</strong> "The class <strong>elected Mary president</strong>."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li><strong>Sentence:</strong> "The dog chased the cat."</li>
              <li><strong>Pattern:</strong> SVO (Subject + Verb + Object)</li>
              <li><strong>Subject:</strong> The dog</li>
              <li><strong>Verb:</strong> chased</li>
              <li><strong>Object:</strong> the cat</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Word Order Rules",
        objective: "obj_003",
        text: `
          <h3>Word Order</h3>
          <p>English has specific rules about word order.</p>
          
          <div class="example-box">
            <strong>📌 Basic Word Order:</strong>
            <ul>
              <li><strong>Statement:</strong> Subject + Verb + Object</li>
              <li><em>"She reads books."</em></li>
              <li><strong>Question:</strong> Auxiliary + Subject + Verb</li>
              <li><em>"Does she read books?"</em></li>
              <li><strong>Negative:</strong> Subject + Auxiliary + Not + Verb</li>
              <li><em>"She does not read books."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adjective Order:</strong>
            <ul>
              <li>Opinion → Size → Age → Shape → Color → Origin → Material → Purpose</li>
              <li>"A <strong>beautiful big old round red French wooden</strong> table"</li>
              <li>"<strong>Lovely little old rectangular green British silver</strong> box"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Adverb Order:</strong>
            <ul>
              <li>Manner → Place → Time</li>
              <li>"He ate <strong>quickly at home yesterday</strong>."</li>
              <li>"She works <strong>hard in the office every day</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "British vs American English Lexis",
        objective: "obj_012",
        text: `
          <h3>Lexical Differences</h3>
          <p>British and American English often use different words for the same things.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 British English:</h4>
              <ul>
                <li>flat (apartment)</li>
                <li>lift (elevator)</li>
                <li>rubbish (trash/garbage)</li>
                <li>petrol (gasoline)</li>
                <li>lorry (truck)</li>
                <li>holiday (vacation)</li>
                <li>biscuit (cookie)</li>
                <li>sweet (candy)</li>
                <li>queue (line)</li>
                <li>torch (flashlight)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 American English:</h4>
              <ul>
                <li>apartment</li>
                <li>elevator</li>
                <li>trash/garbage</li>
                <li>gas/gasoline</li>
                <li>truck</li>
                <li>vacation</li>
                <li>cookie</li>
                <li>candy</li>
                <li>line</li>
                <li>flashlight</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Spelling Differences:</strong>
            <ul>
              <li><strong>British:</strong> colour, labour, centre, metre, organise</li>
              <li><strong>American:</strong> color, labor, center, meter, organize</li>
              <li><strong>British:</strong> travelled, jewellery, programme</li>
              <li><strong>American:</strong> traveled, jewelry, program</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔤 Lexis</h4>
          <ul>
            <li>✓ Use appropriate vocabulary</li>
            <li>✓ Learn collocations</li>
            <li>✓ Understand idioms</li>
            <li>✓ Master phrasal verbs</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🏗️ Structure</h4>
          <ul>
            <li>✓ Follow word order rules</li>
            <li>✓ Use correct sentence patterns</li>
            <li>✓ Choose appropriate register</li>
            <li>✓ Understand British/American differences</li>
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
        misconception: "All words that sound similar have the same meaning",
        correction: "Words like 'accept/except' and 'affect/effect' have different meanings",
        explanation: "These are commonly confused words that must be used correctly."
      },
      {
        id: "mis_002",
        misconception: "You can use any words that mean the same thing",
        correction: "Context and collocations determine which word to use",
        explanation: "'Make' and 'do' both mean 'perform' but have different collocations."
      },
      {
        id: "mis_003",
        misconception: "British and American English are the same",
        correction: "They have different vocabulary, spelling, and sometimes grammar",
        explanation: "Be consistent with the variety you choose."
      },
      {
        id: "mis_004",
        misconception: "Phrasal verbs are always informal",
        correction: "Some phrasal verbs are used in formal English too",
        explanation: "Phrasal verbs like 'conduct research' or 'establish a company' are formal."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Academic Writing",
        description: "Proper lexis and structure are essential for academic success.",
        example: "Using academic vocabulary and complex sentence structures."
      },
      {
        id: "app_002",
        title: "Professional Communication",
        description: "Workplace communication requires precise word choice.",
        example: "Writing clear emails, reports, and presentations."
      },
      {
        id: "app_003",
        title: "Everyday Conversation",
        description: "Understanding idioms and collocations helps in daily interactions.",
        example: "Natural and fluent speech in social situations."
      },
      {
        id: "app_004",
        title: "Creative Writing",
        description: "Rich lexis and varied structure enhance creative writing.",
        example: "Using descriptive vocabulary and varied sentence patterns."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Lexis", definition: "The vocabulary of a language." },
    { term: "Structure", definition: "The way words are organized into sentences." },
    { term: "Collocation", definition: "Words that naturally go together." },
    { term: "Idiom", definition: "A fixed expression with a figurative meaning." },
    { term: "Phrasal Verb", definition: "A verb combined with a particle creating a new meaning." },
    { term: "Register", definition: "The level of formality in language." },
    { term: "Content Word", definition: "A word that carries meaning (noun, verb, adjective, adverb)." },
    { term: "Function Word", definition: "A word that shows grammatical relationships." },
    { term: "Sentence Pattern", definition: "The arrangement of elements in a sentence." },
    { term: "Word Order", definition: "The arrangement of words in a sentence." }
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
      question: "What is lexis?",
      type: "multiple_choice",
      options: [
        "The grammar rules of a language",
        "The vocabulary of a language",
        "The pronunciation of words",
        "The writing system"
      ],
      answer: "The vocabulary of a language",
      explanation: "Lexis refers to the words and vocabulary of a language."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a content word?",
      type: "multiple_choice",
      options: ["the", "and", "beautiful", "of"],
      answer: "beautiful",
      explanation: "'Beautiful' is a content word (adjective) that carries meaning."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the basic word order in English statements?",
      type: "multiple_choice",
      options: [
        "Object + Verb + Subject",
        "Subject + Verb + Object",
        "Verb + Subject + Object",
        "Object + Subject + Verb"
      ],
      answer: "Subject + Verb + Object",
      explanation: "English follows SVO (Subject + Verb + Object) word order."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which collocation is correct?",
      type: "multiple_choice",
      options: [
        "make a mistake",
        "do a mistake",
        "take a mistake",
        "have a mistake"
      ],
      answer: "make a mistake",
      explanation: "'Make a mistake' is the correct collocation."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which collocation is correct?",
      type: "multiple_choice",
      options: [
        "strong rain",
        "heavy rain",
        "big rain",
        "tall rain"
      ],
      answer: "heavy rain",
      explanation: "'Heavy rain' is the correct collocation."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does 'piece of cake' mean?",
      type: "multiple_choice",
      options: [
        "A dessert",
        "Very easy",
        "Very difficult",
        "Something delicious"
      ],
      answer: "Very easy",
      explanation: "'Piece of cake' is an idiom meaning something is very easy."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does 'break the ice' mean?",
      type: "multiple_choice",
      options: [
        "Break frozen water",
        "Start a conversation",
        "End an argument",
        "Make a mistake"
      ],
      answer: "Start a conversation",
      explanation: "'Break the ice' means to start a conversation or ease tension."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does 'give up' mean?",
      type: "multiple_choice",
      options: [
        "Give something away",
        "Stop trying",
        "Start something",
        "Give someone a gift"
      ],
      answer: "Stop trying",
      explanation: "'Give up' means to stop trying or surrender."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does 'look after' mean?",
      type: "multiple_choice",
      options: [
        "Look at something",
        "Take care of",
        "Search for",
        "Ignore"
      ],
      answer: "Take care of",
      explanation: "'Look after' means to take care of someone or something."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is more formal?",
      type: "multiple_choice",
      options: [
        "I'm sorry",
        "I apologize",
        "Sorry about that",
        "My bad"
      ],
      answer: "I apologize",
      explanation: "'I apologize' is more formal than the other options."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the pattern in: 'She gave him a book.'?",
      type: "multiple_choice",
      options: ["SVO", "SVC", "SVOO", "SVOC"],
      answer: "SVOO",
      explanation: "This is Subject + Verb + Object + Object (gave him a book)."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the pattern in: 'He is a teacher.'?",
      type: "multiple_choice",
      options: ["SVO", "SVC", "SVOO", "SVOC"],
      answer: "SVC",
      explanation: "This is Subject + Verb + Complement (is a teacher)."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Choose the more sophisticated word: 'The test was ____.' (difficult)",
      type: "multiple_choice",
      options: ["hard", "tough", "challenging", "rough"],
      answer: "challenging",
      explanation: "'Challenging' is more sophisticated and appropriate in academic contexts."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Find the error: 'She goes to school everyday.'",
      type: "multiple_choice",
      options: [
        "She go",
        "to school",
        "everyday",
        "No error"
      ],
      answer: "everyday",
      explanation: "It should be 'every day' (two words) when used as an adverb."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which sentence has correct structure?",
      type: "multiple_choice",
      options: [
        "I am happy because I passed the exam.",
        "Because I passed the exam I am happy.",
        "I passed the exam because happy I am.",
        "Happy I am because I passed the exam."
      ],
      answer: "I am happy because I passed the exam.",
      explanation: "This follows the correct word order for English sentences."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "British English: 'flat' → American English: ____",
      type: "multiple_choice",
      options: ["apartment", "house", "home", "building"],
      answer: "apartment",
      explanation: "'Flat' in British English is 'apartment' in American English."
    },
    {
      id: "prac_017",
      objective: "obj_012",
      difficulty: "hard",
      question: "British English: 'lorry' → American English: ____",
      type: "multiple_choice",
      options: ["car", "truck", "van", "bus"],
      answer: "truck",
      explanation: "'Lorry' in British English is 'truck' in American English."
    },
    {
      id: "prac_018",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which is British spelling?",
      type: "multiple_choice",
      options: ["color", "color", "colour", "coloure"],
      answer: "colour",
      explanation: "'Colour' is the British spelling; 'color' is American."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_lexis_structure",
    title: "Lexis and Structure Quiz",
    description: "Test your understanding of lexis and structure",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is lexis?",
        type: "short_answer",
        answer_key: "The vocabulary of a language",
        explanation: "Lexis refers to the words and vocabulary of a language."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is structure in language?",
        type: "short_answer",
        answer_key: "The way words are organized into sentences",
        explanation: "Structure refers to how words are arranged to form sentences."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a collocation?",
        type: "short_answer",
        answer_key: "Words that naturally go together",
        explanation: "Collocations are words that frequently appear together in natural language."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Give an example of a collocation.",
        type: "short_answer",
        answer_key: "make a decision (or any correct collocation)",
        explanation: "Accept any correct collocation like 'heavy rain,' 'fast food,' etc."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is an idiom?",
        type: "short_answer",
        answer_key: "A fixed expression with a figurative meaning",
        explanation: "Idioms have meanings that are different from the literal meanings of the words."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a phrasal verb?",
        type: "short_answer",
        answer_key: "A verb combined with a particle creating a new meaning",
        explanation: "Phrasal verbs consist of a verb and a particle (preposition/adverb)."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is register?",
        type: "short_answer",
        answer_key: "The level of formality in language",
        explanation: "Register refers to how formal or informal language is."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the sentence pattern in: 'They elected him president.'?",
        type: "short_answer",
        answer_key: "SVOC (Subject + Verb + Object + Complement)",
        explanation: "This pattern has a subject, verb, object, and object complement."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Correct this sentence: 'Me and my friend went to the store.'",
        type: "short_answer",
        answer_key: "My friend and I went to the store.",
        explanation: "Use 'I' instead of 'me' when it's part of the subject."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Give the American English equivalent of the British word 'petrol'.",
        type: "short_answer",
        answer_key: "gas/gasoline",
        explanation: "'Petrol' in British English is 'gas' or 'gasoline' in American English."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "45 minutes",
      objectives: [
        "Understand lexis and structure",
        "Use collocations and idioms correctly",
        "Apply phrasal verbs appropriately",
        "Recognize different registers"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are lexis and structure?" },
        { time: "5-10 min", activity: "Direct Instruction - Lexical Items" },
        { time: "10-15 min", activity: "Direct Instruction - Collocations and Idioms" },
        { time: "15-20 min", activity: "Direct Instruction - Phrasal Verbs and Register" },
        { time: "20-25 min", activity: "Direct Instruction - Sentence Patterns" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The vocabulary of a language",
        // ... full answer key
      },
      assessment: {
        ass_001: "The vocabulary of a language",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a list of 10 common collocations with examples",
      "Write a short story using at least 5 idioms",
      "Compare British and American English vocabulary",
      "Create a dialogue using formal and informal language"
    ],
    differentiation: {
      struggling: [
        "Start with common collocations",
        "Use visual aids for idioms",
        "Practice with simple phrasal verbs",
        "Focus on one topic at a time"
      ],
      advanced: [
        "Analyze lexical choice in literature",
        "Research the origins of idioms",
        "Create an advanced vocabulary list",
        "Write a formal and informal version of the same text"
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
      title: "Lexis and Structure Overview",
      description: "Diagram showing the relationship between lexis and structure",
      url: "/diagrams/lexis-structure.png",
      alt: "Lexis and structure overview"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Common Collocations",
      description: "Chart of common collocations with examples",
      url: "/diagrams/collocations.png",
      alt: "Common collocations chart"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "British vs American English",
      description: "Chart comparing British and American vocabulary",
      url: "/diagrams/british-american.png",
      alt: "British vs American English chart"
    }
  ]
};