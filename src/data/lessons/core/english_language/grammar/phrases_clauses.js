// Location: src/data/lessons/core/english_language/grammar/phrases_clauses.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_phrases_clauses",
  subject: "English Language",
  topic: "Grammar",
  name: "Phrases and Clauses",
  icon: "🧩",
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
    "Understanding of verbs and subjects",
    "Basic vocabulary"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_vocabulary",
      name: "Vocabulary",
      file: "core/english_language/vocabulary.js"
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
      description: "Define phrases and clauses",
      indicator: "Student can distinguish between phrases and clauses"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify noun phrases",
      indicator: "Student can recognize noun phrases in sentences"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify verb phrases",
      indicator: "Student can recognize verb phrases in sentences"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify adjective phrases and adverb phrases",
      indicator: "Student can recognize adjective and adverb phrases"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify prepositional phrases",
      indicator: "Student can recognize prepositional phrases and their functions"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Distinguish between independent and dependent clauses",
      indicator: "Student can identify independent and dependent clauses"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify relative clauses",
      indicator: "Student can recognize relative clauses and their use"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Identify adverbial clauses",
      indicator: "Student can recognize adverbial clauses and their functions"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Identify noun clauses",
      indicator: "Student can recognize noun clauses and their functions"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Identify and analyze complex phrase and clause structures",
      indicator: "Student can break down complex sentences into phrases and clauses"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Use phrases and clauses to vary sentence structure",
      indicator: "Student can combine phrases and clauses to create varied sentences"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze and correct errors with phrases and clauses",
      indicator: "Student can identify and fix errors involving phrases and clauses"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Phrases and Clauses",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to identify and use phrases and clauses correctly in your writing."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Phrases and Clauses?</h2>
      <p><strong>Phrases</strong> and <strong>clauses</strong> are the building blocks of sentences. Understanding them helps you construct better sentences.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔵 Phrases</h3>
          <p>A group of words WITHOUT a subject-verb pair.</p>
          <ul>
            <li><em>"in the morning"</em></li>
            <li><em>"the beautiful house"</em></li>
            <li><em>"running quickly"</em></li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🟢 Clauses</h3>
          <p>A group of words WITH a subject-verb pair.</p>
          <ul>
            <li><em>"She sings"</em></li>
            <li><em>"when he arrived"</em></li>
            <li><em>"that I bought"</em></li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Differences</h4>
        <ul>
          <li><strong>Phrases:</strong> No subject-verb pair → Cannot stand alone</li>
          <li><strong>Independent Clauses:</strong> Has subject-verb pair → Can stand alone</li>
          <li><strong>Dependent Clauses:</strong> Has subject-verb pair → Cannot stand alone</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Phrases",
        objective: "obj_001",
        text: `
          <h3>What is a Phrase?</h3>
          <p>A <strong>phrase</strong> is a group of related words that does NOT contain a subject-verb pair. It functions as a single part of speech.</p>
          
          <div class="example-box">
            <strong>📌 Types of Phrases:</strong>
            <ul>
              <li><strong>Noun Phrase:</strong> "The tall, handsome man"</li>
              <li><strong>Verb Phrase:</strong> "has been running"</li>
              <li><strong>Adjective Phrase:</strong> "full of energy"</li>
              <li><strong>Adverb Phrase:</strong> "very quickly"</li>
              <li><strong>Prepositional Phrase:</strong> "in the garden"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"<strong>The beautiful bird</strong> flew away." (Noun phrase as subject)</li>
              <li>"She <strong>has been singing</strong> all day." (Verb phrase)</li>
              <li>"The book <strong>on the shelf</strong> is mine." (Prepositional phrase)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Noun Phrases",
        objective: "obj_002",
        text: `
          <h3>Noun Phrases</h3>
          <p>A <strong>noun phrase</strong> is a group of words that functions as a noun. It includes a noun and its modifiers.</p>
          
          <div class="formula-box">
            <h4>📝 Structure:</h4>
            <p><strong>(Determiner) + (Adjective) + Noun + (Prepositional Phrase/Relative Clause)</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>Dogs</strong>" (simple noun)</li>
              <li>"<strong>The big, brown dog</strong>" (with determiners and adjectives)</li>
              <li>"<strong>The dog in the park</strong>" (with prepositional phrase)</li>
              <li>"<strong>The dog that I saw</strong>" (with relative clause)</li>
              <li>"<strong>All of the students</strong>" (with quantifier)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Functions:</strong>
            <ul>
              <li><strong>Subject:</strong> "<strong>The beautiful sunset</strong> amazed everyone."</li>
              <li><strong>Object:</strong> "I saw <strong>the beautiful sunset</strong>."</li>
              <li><strong>Complement:</strong> "She is <strong>a talented singer</strong>."</li>
              <li><strong>Object of preposition:</strong> "He walked to <strong>the old house</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Verb Phrases",
        objective: "obj_003",
        text: `
          <h3>Verb Phrases</h3>
          <p>A <strong>verb phrase</strong> consists of the main verb and its auxiliary (helping) verbs.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Simple:</strong> "She <strong>walks</strong>."</li>
              <li><strong>With auxiliary:</strong> "She <strong>is walking</strong>."</li>
              <li><strong>With multiple auxiliaries:</strong> "She <strong>has been walking</strong>."</li>
              <li><strong>With modals:</strong> "She <strong>might have been walking</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Common Auxiliary Verbs:</strong>
            <ul>
              <li><strong>Be:</strong> is, am, are, was, were, been</li>
              <li><strong>Have:</strong> have, has, had</li>
              <li><strong>Do:</strong> do, does, did</li>
              <li><strong>Modals:</strong> can, could, will, would, shall, should, may, might, must</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples in Sentences:</strong>
            <ul>
              <li>"They <strong>are playing</strong> football."</li>
              <li>"I <strong>have finished</strong> my homework."</li>
              <li>"She <strong>must have been sleeping</strong>."</li>
              <li>"We <strong>did see</strong> the movie." (emphasis)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Prepositional Phrases",
        objective: "obj_005",
        text: `
          <h3>Prepositional Phrases</h3>
          <p>A <strong>prepositional phrase</strong> begins with a preposition and ends with a noun or pronoun (the object of the preposition).</p>
          
          <div class="formula-box">
            <h4>📝 Structure:</h4>
            <p><strong>Preposition + (Modifiers) + Noun/Pronoun (Object)</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Common Prepositions:</strong>
            <ul>
              <li><strong>Place:</strong> in, on, at, under, over, between, behind</li>
              <li><strong>Time:</strong> before, after, during, since, until</li>
              <li><strong>Direction:</strong> to, from, into, through</li>
              <li><strong>Other:</strong> with, without, about, for, of</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Functions:</strong>
            <ul>
              <li><strong>Adjective phrase:</strong> "The book <strong>on the table</strong> is mine." (modifies book)</li>
              <li><strong>Adverb phrase:</strong> "She walked <strong>to the store</strong>." (modifies walked)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"The cat is <strong>under the bed</strong>."</li>
              <li>"I'll meet you <strong>at 5 PM</strong>."</li>
              <li>"He walked <strong>through the forest</strong>."</li>
              <li>"She wrote <strong>with a pen</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Independent and Dependent Clauses",
        objective: "obj_006",
        text: `
          <h3>Types of Clauses</h3>
          <p>A <strong>clause</strong> is a group of words that contains a subject and a verb.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded">
              <h4 class="text-green-600">🟢 Independent Clauses</h4>
              <ul>
                <li>Has a subject-verb pair</li>
                <li>Can stand alone</li>
                <li>Makes complete sense</li>
                <li><em>"She sings beautifully."</em></li>
              </ul>
            </div>
            <div class="bg-orange-50 p-4 rounded">
              <h4 class="text-orange-600">🟠 Dependent Clauses</h4>
              <ul>
                <li>Has a subject-verb pair</li>
                <li>Cannot stand alone</li>
                <li>Needs an independent clause</li>
                <li><em>"because she is happy"</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Independent Clauses:</strong>
            <ul>
              <li>"<strong>I walked</strong> to the store."</li>
              <li>"<strong>The sun is shining</strong>."</li>
              <li>"<strong>She sings</strong> beautifully."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Dependent Clauses:</strong>
            <ul>
              <li>"<strong>Because I was tired</strong>"</li>
              <li>"<strong>When she arrived</strong>"</li>
              <li>"<strong>Who lives next door</strong>"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Combined:</strong>
            <ul>
              <li>"<strong>Because I was tired</strong>, I went to bed."</li>
              <li>"<strong>When she arrived</strong>, we started the meeting."</li>
              <li>"The person <strong>who lives next door</strong> is my friend."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Relative Clauses",
        objective: "obj_007",
        text: `
          <h3>Relative Clauses</h3>
          <p><strong>Relative clauses</strong> (adjective clauses) modify nouns and are introduced by relative pronouns.</p>
          
          <div class="example-box">
            <strong>📌 Relative Pronouns:</strong>
            <ul>
              <li><strong>Who/Whom:</strong> for people</li>
              <li><strong>Which:</strong> for things</li>
              <li><strong>That:</strong> for people or things</li>
              <li><strong>Whose:</strong> for possession</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Defining Relative Clauses (Essential):</strong>
            <ul>
              <li>"The man <strong>who lives next door</strong> is a doctor." (essential information)</li>
              <li>"The book <strong>that I bought</strong> is interesting." (essential information)</li>
              <li>"The car <strong>which is parked outside</strong> belongs to my brother."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Non-Defining Relative Clauses (Extra):</strong>
            <ul>
              <li>"My father, <strong>who is 60 years old</strong>, still works." (extra information)</li>
              <li>"The book, <strong>which I read yesterday</strong>, was very good." (extra information)</li>
              <li>"Paris, <strong>which is the capital of France</strong>, is beautiful."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Use commas for non-defining relative clauses</li>
              <li>Don't use 'that' in non-defining clauses</li>
              <li>You can omit the relative pronoun when it's the object</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Adverbial Clauses",
        objective: "obj_008",
        text: `
          <h3>Adverbial Clauses</h3>
          <p><strong>Adverbial clauses</strong> function as adverbs and are introduced by subordinating conjunctions.</p>
          
          <div class="example-box">
            <strong>📌 Types:</strong>
            <ul>
              <li><strong>Time:</strong> when, while, after, before, since, until</li>
              <li><strong>Place:</strong> where, wherever</li>
              <li><strong>Reason:</strong> because, since, as</li>
              <li><strong>Purpose:</strong> so that, in order that</li>
              <li><strong>Result:</strong> so...that, such...that</li>
              <li><strong>Concession:</strong> although, even though, while</li>
              <li><strong>Condition:</strong> if, unless, provided that</li>
              <li><strong>Manner:</strong> as, as if, as though</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Time:</strong> "I called her <strong>when I arrived</strong>."</li>
              <li><strong>Reason:</strong> "I stayed home <strong>because I was sick</strong>."</li>
              <li><strong>Purpose:</strong> "She studied hard <strong>so that she could pass</strong>."</li>
              <li><strong>Concession:</strong> "He went out <strong>although it was raining</strong>."</li>
              <li><strong>Condition:</strong> "I'll go <strong>if you come with me</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Noun Clauses",
        objective: "obj_009",
        text: `
          <h3>Noun Clauses</h3>
          <p><strong>Noun clauses</strong> function as nouns in a sentence. They can be subjects, objects, or complements.</p>
          
          <div class="example-box">
            <strong>📌 Words that Introduce Noun Clauses:</strong>
            <ul>
              <li><strong>Wh- words:</strong> what, when, where, who, whom, which, why, how</li>
              <li><strong>That</strong></li>
              <li><strong>If/Whether</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Functions:</strong>
            <ul>
              <li><strong>Subject:</strong> "<strong>What she said</strong> surprised everyone."</li>
              <li><strong>Object:</strong> "I know <strong>that he is coming</strong>."</li>
              <li><strong>Complement:</strong> "The truth is <strong>that she lied</strong>."</li>
              <li><strong>Object of preposition:</strong> "She is interested in <strong>what you said</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>That he survived</strong> is a miracle." (subject)</li>
              <li>"I wonder <strong>if she will come</strong>." (object)</li>
              <li>"The problem is <strong>that we don't have money</strong>." (complement)</li>
              <li>"Please tell me <strong>where you are going</strong>." (object)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🧩 Phrases</h4>
          <ul>
            <li>✓ No subject-verb pair</li>
            <li>✓ Cannot stand alone</li>
            <li>✓ Types: Noun, Verb, Prepositional, etc.</li>
            <li>✓ Function as parts of speech</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🧩 Clauses</h4>
          <ul>
            <li>✓ Has subject-verb pair</li>
            <li>✓ Independent: can stand alone</li>
            <li>✓ Dependent: cannot stand alone</li>
            <li>✓ Types: Relative, Adverbial, Noun</li>
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
        misconception: "All groups of words with a verb are clauses",
        correction: "A clause must have a subject AND a verb",
        explanation: "'Running quickly' has a verb but no subject - it's a phrase, not a clause."
      },
      {
        id: "mis_002",
        misconception: "Phrases and clauses are the same thing",
        correction: "Phrases lack subject-verb pairs; clauses have them",
        explanation: "A phrase is a group of words without a subject-verb pair. A clause has one."
      },
      {
        id: "mis_003",
        misconception: "Dependent clauses are incomplete sentences",
        correction: "Dependent clauses have subject-verb pairs but need independent clauses",
        explanation: "'Because I was tired' has subject+verb but needs more information."
      },
      {
        id: "mis_004",
        misconception: "All clauses can stand alone",
        correction: "Only independent clauses can stand alone",
        explanation: "Dependent clauses cannot stand alone - they need an independent clause."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Academic Writing",
        description: "Using a variety of phrases and clauses creates sophisticated writing.",
        example: "Complex sentences with multiple clauses show advanced writing skills."
      },
      {
        id: "app_002",
        title: "Creative Writing",
        description: "Phrases add description and detail to stories.",
        example: "Using prepositional and adjective phrases creates vivid imagery."
      },
      {
        id: "app_003",
        title: "Professional Communication",
        description: "Clear clause structure prevents miscommunication.",
        example: "Proper use of relative clauses clarifies which person or thing you mean."
      },
      {
        id: "app_004",
        title: "Editing and Proofreading",
        description: "Understanding phrases and clauses helps identify sentence errors.",
        example: "Editing for sentence fragments requires recognizing dependent clauses."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Phrase", definition: "A group of related words without a subject-verb pair." },
    { term: "Clause", definition: "A group of words with a subject-verb pair." },
    { term: "Independent Clause", definition: "A clause that can stand alone as a sentence." },
    { term: "Dependent Clause", definition: "A clause that cannot stand alone." },
    { term: "Noun Phrase", definition: "A phrase that functions as a noun." },
    { term: "Verb Phrase", definition: "A phrase consisting of a verb and its auxiliaries." },
    { term: "Prepositional Phrase", definition: "A phrase beginning with a preposition." },
    { term: "Relative Clause", definition: "A clause that modifies a noun." },
    { term: "Adverbial Clause", definition: "A clause that functions as an adverb." },
    { term: "Noun Clause", definition: "A clause that functions as a noun." },
    { term: "Subordinating Conjunction", definition: "A word that introduces a dependent clause." },
    { term: "Relative Pronoun", definition: "A pronoun that introduces a relative clause." }
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
      question: "What is the main difference between a phrase and a clause?",
      type: "multiple_choice",
      options: [
        "Phrases are longer than clauses",
        "Phrases have no subject-verb pair; clauses do",
        "Clauses are always independent",
        "Phrases always have a subject"
      ],
      answer: "Phrases have no subject-verb pair; clauses do",
      explanation: "A phrase lacks a subject-verb pair, while a clause has one."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a noun phrase?",
      type: "multiple_choice",
      options: [
        "running quickly",
        "the tall man",
        "has been running",
        "in the park"
      ],
      answer: "the tall man",
      explanation: "'The tall man' is a noun phrase because it functions as a noun."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a verb phrase?",
      type: "multiple_choice",
      options: [
        "the beautiful house",
        "has been working",
        "under the table",
        "very quickly"
      ],
      answer: "has been working",
      explanation: "'Has been working' is a verb phrase with auxiliary verbs + main verb."
    },
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is a prepositional phrase?",
      type: "multiple_choice",
      options: [
        "the tall man",
        "has been working",
        "in the garden",
        "very quickly"
      ],
      answer: "in the garden",
      explanation: "'In the garden' begins with the preposition 'in' and has an object."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is an independent clause?",
      type: "multiple_choice",
      options: [
        "because I was tired",
        "when she arrived",
        "She sings beautifully",
        "who lives next door"
      ],
      answer: "She sings beautifully",
      explanation: "This has a subject-verb pair and can stand alone as a sentence."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is a dependent clause?",
      type: "multiple_choice",
      options: [
        "I walked to the store",
        "The sun is shining",
        "because I was tired",
        "She sings beautifully"
      ],
      answer: "because I was tired",
      explanation: "This has a subject-verb pair but cannot stand alone."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is a relative clause?",
      type: "multiple_choice",
      options: [
        "because I was tired",
        "who lives next door",
        "if she comes",
        "when she arrived"
      ],
      answer: "who lives next door",
      explanation: "This relative clause modifies a noun and starts with a relative pronoun."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which is an adverbial clause?",
      type: "multiple_choice",
      options: [
        "who lives next door",
        "that I bought",
        "because I was tired",
        "what she said"
      ],
      answer: "because I was tired",
      explanation: "This adverbial clause tells why and modifies the verb."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is a noun clause?",
      type: "multiple_choice",
      options: [
        "who lives next door",
        "because I was tired",
        "what she said",
        "when she arrived"
      ],
      answer: "what she said",
      explanation: "This noun clause functions as a noun (e.g., 'What she said surprised me.')."
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which is an adjective phrase?",
      type: "multiple_choice",
      options: [
        "very quickly",
        "full of energy",
        "has been running",
        "in the morning"
      ],
      answer: "full of energy",
      explanation: "'Full of energy' is an adjective phrase that describes a noun."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "How many clauses are in: 'She said that she was tired.'?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Two clauses: 'She said' (independent) and 'that she was tired' (noun clause)."
    },
    {
      id: "prac_012",
      objective: "obj_010",
      difficulty: "hard",
      question: "How many clauses are in: 'When she arrived, we started the meeting because we were ready.'?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Three clauses: 'When she arrived' (adverbial), 'we started the meeting' (independent), 'because we were ready' (adverbial)."
    },
    {
      id: "prac_013",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which sentence uses a phrase correctly?",
      type: "multiple_choice",
      options: [
        "Running quickly, the door was closed.",
        "Running quickly, she closed the door.",
        "Running quickly, the door closed.",
        "Running quickly, closed the door."
      ],
      answer: "Running quickly, she closed the door.",
      explanation: "The participial phrase 'Running quickly' correctly modifies 'she'."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'The man who is standing there is my uncle.'",
      type: "multiple_choice",
      options: [
        "No error",
        "Missing comma",
        "Wrong relative pronoun",
        "Wrong verb tense"
      ],
      answer: "No error",
      explanation: "This sentence is correct. 'Who is standing there' is a defining relative clause."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'My brother, who lives in London is coming.'",
      type: "multiple_choice",
      options: [
        "No error",
        "Missing comma",
        "Wrong relative pronoun",
        "Missing verb"
      ],
      answer: "Missing comma",
      explanation: "Non-defining relative clauses need commas: 'My brother, who lives in London, is coming.'"
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "What type of clause is: 'that she was happy'?",
      type: "multiple_choice",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      answer: "Noun clause",
      explanation: "'That she was happy' is a noun clause (object of the verb 'said')."
    },
    {
      id: "prac_017",
      objective: "obj_008",
      difficulty: "hard",
      question: "What type of clause is: 'although it was raining'?",
      type: "multiple_choice",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      answer: "Adverbial clause",
      explanation: "'Although it was raining' is an adverbial clause (concession)."
    },
    {
      id: "prac_018",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which sentence is most effective?",
      type: "multiple_choice",
      options: [
        "The man was walking down the street. He was carrying a bag.",
        "Walking down the street, the man carried a bag.",
        "The man who was carrying a bag walked down the street.",
        "The man walked down the street and he carried a bag."
      ],
      answer: "The man who was carrying a bag walked down the street.",
      explanation: "This sentence uses a relative clause efficiently and is clear and concise."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_phrases_clauses",
    title: "Phrases and Clauses Quiz",
    description: "Test your understanding of phrases and clauses",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main difference between a phrase and a clause?",
        type: "short_answer",
        answer_key: "A phrase has no subject-verb pair; a clause does.",
        explanation: "Phrases lack subject-verb pairs, while clauses have them."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give an example of a noun phrase.",
        type: "short_answer",
        answer_key: "the beautiful house (or similar)",
        explanation: "A noun phrase functions as a noun and includes a noun with modifiers."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give an example of a verb phrase.",
        type: "short_answer",
        answer_key: "has been running (or similar)",
        explanation: "A verb phrase includes the main verb and its auxiliaries."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "Give an example of a prepositional phrase.",
        type: "short_answer",
        answer_key: "on the table (or similar)",
        explanation: "A prepositional phrase begins with a preposition and has an object."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "Write an independent clause.",
        type: "short_answer",
        answer_key: "She reads books. (or similar)",
        explanation: "An independent clause has a subject-verb pair and can stand alone."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Write a dependent clause.",
        type: "short_answer",
        answer_key: "because she is happy (or similar)",
        explanation: "A dependent clause has a subject-verb pair but cannot stand alone."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Write a sentence with a relative clause.",
        type: "short_answer",
        answer_key: "The man who lives next door is my friend. (or similar)",
        explanation: "A relative clause modifies a noun and starts with a relative pronoun."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Write a sentence with an adverbial clause.",
        type: "short_answer",
        answer_key: "I stayed home because I was sick. (or similar)",
        explanation: "An adverbial clause modifies a verb and tells how, when, why, etc."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Write a sentence with a noun clause.",
        type: "short_answer",
        answer_key: "What she said surprised me. (or similar)",
        explanation: "A noun clause functions as a noun (subject, object, or complement)."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Correct this sentence: 'The book which is on the table is mine.'",
        type: "short_answer",
        answer_key: "The book that is on the table is mine. OR The book, which is on the table, is mine.",
        explanation: "For defining relative clauses (essential info), use 'that' or no comma. For non-defining (extra info), use commas."
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
        "Distinguish between phrases and clauses",
        "Identify different types of phrases and clauses",
        "Use phrases and clauses effectively in writing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Phrases vs Clauses" },
        { time: "5-15 min", activity: "Direct Instruction - Types of Phrases" },
        { time: "15-25 min", activity: "Direct Instruction - Types of Clauses" },
        { time: "25-35 min", activity: "Guided Practice - Identification" },
        { time: "35-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Phrases have no subject-verb pair; clauses do",
        // ... full answer key
      },
      assessment: {
        ass_001: "A phrase has no subject-verb pair; a clause does.",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Write a paragraph identifying all phrases and clauses",
      "Create a poster showing phrase and clause types",
      "Analyze a complex text for phrases and clauses",
      "Create a sentence-building exercise using phrases and clauses"
    ],
    differentiation: {
      struggling: [
        "Start with simple identification only",
        "Use color-coding for different types",
        "Practice with sentence strips",
        "Provide a reference sheet"
      ],
      advanced: [
        "Analyze complex literary sentences",
        "Write about the effect of different phrases/clauses",
        "Create a teaching presentation on the topic",
        "Research phrase/clause usage in different genres"
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
      title: "Phrases vs Clauses",
      description: "Diagram comparing phrases and clauses",
      url: "/diagrams/phrases-vs-clauses.png",
      alt: "Comparison of phrases and clauses"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Types of Phrases",
      description: "Chart showing different types of phrases",
      url: "/diagrams/phrase-types.png",
      alt: "Types of phrases"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Types of Clauses",
      description: "Chart showing different types of clauses",
      url: "/diagrams/clause-types.png",
      alt: "Types of clauses"
    }
  ]
};