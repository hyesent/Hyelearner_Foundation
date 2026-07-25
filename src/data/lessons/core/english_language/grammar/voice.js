// Location: src/data/lessons/core/english_language/grammar/voice.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_voice",
  subject: "English Language",
  topic: "Grammar",
  name: "Active and Passive Voice",
  icon: "🎙️",
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
    "Knowledge of tenses",
    "Understanding of sentence structure",
    "Knowledge of subject-verb agreement"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_speech",
      name: "Direct and Indirect Speech",
      file: "core/english_language/grammar/speech.js"
    },
    {
      id: "eng_lesson_modal_verbs",
      name: "Modal Verbs",
      file: "core/english_language/grammar/modal_verbs.js"
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
      description: "Define active and passive voice",
      indicator: "Student can explain the difference between active and passive voice"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify active voice in sentences",
      indicator: "Student can recognize when the subject performs the action"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify passive voice in sentences",
      indicator: "Student can recognize when the subject receives the action"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Convert active sentences to passive",
      indicator: "Student can transform active voice sentences to passive voice"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Convert passive sentences to active",
      indicator: "Student can transform passive voice sentences to active voice"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Form passive voice in different tenses",
      indicator: "Student can create passive sentences in present, past, and future tenses"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify when to use passive voice appropriately",
      indicator: "Student can choose between active and passive based on context"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Convert complex sentences between active and passive",
      indicator: "Student can transform sentences with multiple clauses"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use passive voice with modals and infinitives",
      indicator: "Student can form passive voice with modal verbs and infinitive structures"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze and revise sentences for appropriate voice usage",
      indicator: "Student can edit texts to improve voice consistency and effectiveness"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Active vs Passive Voice",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Master the difference between active and passive voice with clear examples."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Voice in English?</h2>
      <p><strong>Voice</strong> tells us whether the subject is performing the action or receiving the action.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">✅ Active Voice</h3>
          <p><strong>Subject → Verb → Object</strong></p>
          <p><em>"The cat <strong>chased</strong> the mouse."</em></p>
          <p>The <strong>subject</strong> (cat) performs the action.</p>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔵 Passive Voice</h3>
          <p><strong>Object → Verb → Subject</strong></p>
          <p><em>"The mouse <strong>was chased</strong> by the cat."</em></p>
          <p>The <strong>subject</strong> (mouse) receives the action.</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Differences</h4>
        <ul>
          <li><strong>Active:</strong> Subject does the action → <em>She wrote the book.</em></li>
          <li><strong>Passive:</strong> Subject receives the action → <em>The book was written by her.</em></li>
          <li><strong>Formula:</strong> Passive = <em>be + past participle</em></li>
        </ul>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>💡 When to Use Each</h4>
        <ul>
          <li><strong>Use Active:</strong> Most writing, clear communication, strong writing</li>
          <li><strong>Use Passive:</strong> Unknown actor, scientific writing, emphasis on receiver</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Active Voice",
        objective: "obj_002",
        text: `
          <h3>Active Voice</h3>
          <p>In <strong>active voice</strong>, the <strong>subject performs the action</strong>. The sentence follows the pattern: <strong>Subject + Verb + Object</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>The girl</strong> <strong>wrote</strong> a letter." (Girl = subject, wrote = action)</li>
              <li>"<strong>The chef</strong> <strong>cooked</strong> the meal." (Chef = subject, cooked = action)</li>
              <li>"<strong>She</strong> <strong>sings</strong> a song." (She = subject, sings = action)</li>
              <li>"<strong>The dog</strong> <strong>chased</strong> the cat." (Dog = subject, chased = action)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Advantages of Active Voice:</strong>
            <ul>
              <li><strong>Clearer:</strong> Who is doing what is obvious</li>
              <li><strong>Stronger:</strong> More direct and energetic</li>
              <li><strong>Concise:</strong> Uses fewer words</li>
              <li><strong>More engaging:</strong> Keeps the reader interested</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Comparison:</strong>
            <ul>
              <li>❌ Weak: "The report was written by the student." (passive)</li>
              <li>✅ Strong: "The student wrote the report." (active)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Passive Voice",
        objective: "obj_003",
        text: `
          <h3>Passive Voice</h3>
          <p>In <strong>passive voice</strong>, the <strong>subject receives the action</strong>. The sentence follows the pattern: <strong>Object + Verb + Subject</strong>.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Subject + be (in correct tense) + past participle + (by + agent)</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>A letter</strong> <strong>was written</strong> by the girl." (Letter receives action)</li>
              <li>"<strong>The meal</strong> <strong>was cooked</strong> by the chef." (Meal receives action)</li>
              <li>"<strong>A song</strong> <strong>is sung</strong> by her." (Song receives action)</li>
              <li>"<strong>The cat</strong> <strong>was chased</strong> by the dog." (Cat receives action)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 When to Use Passive Voice:</strong>
            <ul>
              <li><strong>When the actor is unknown:</strong> "My wallet was stolen."</li>
              <li><strong>When the actor is obvious:</strong> "The thief was arrested."</li>
              <li><strong>To emphasize the receiver:</strong> "The president was elected."</li>
              <li><strong>In scientific writing:</strong> "The solution was heated."</li>
              <li><strong>To avoid responsibility:</strong> "Mistakes were made."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Overusing Passive Voice:</strong>
            <ul>
              <li>Makes writing weak and wordy</li>
              <li>Can be confusing</li>
              <li>Less engaging for readers</li>
              <li>Often unnecessary</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Converting Active to Passive",
        objective: "obj_004",
        text: `
          <h3>Steps to Convert Active to Passive</h3>
          
          <div class="example-box">
            <strong>📌 Step-by-Step Process:</strong>
            <ul>
              <li><strong>Step 1:</strong> Identify the subject, verb, and object</li>
              <li><strong>Step 2:</strong> Move the object to the subject position</li>
              <li><strong>Step 3:</strong> Change the verb to passive form (be + past participle)</li>
              <li><strong>Step 4:</strong> Move the original subject after 'by'</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <ul>
              <li><strong>Active:</strong> <em>She</em> <em>writes</em> <em>a letter</em>.</li>
              <li><strong>Passive:</strong> <em>A letter</em> <em>is written</em> <em>by her</em>.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <ul>
              <li><strong>Active:</strong> <em>The chef</em> <em>cooked</em> <em>the meal</em>.</li>
              <li><strong>Passive:</strong> <em>The meal</em> <em>was cooked</em> <em>by the chef</em>.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong>
            <ul>
              <li><strong>Active:</strong> <em>The students</em> <em>will complete</em> <em>the project</em>.</li>
              <li><strong>Passive:</strong> <em>The project</em> <em>will be completed</em> <em>by the students</em>.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> You can often omit 'by + agent' if the agent is obvious or unimportant.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Converting Passive to Active",
        objective: "obj_005",
        text: `
          <h3>Steps to Convert Passive to Active</h3>
          
          <div class="example-box">
            <strong>📌 Step-by-Step Process:</strong>
            <ul>
              <li><strong>Step 1:</strong> Identify the subject (receiver of action)</li>
              <li><strong>Step 2:</strong> Find the 'by' phrase (the agent)</li>
              <li><strong>Step 3:</strong> Move the agent to the subject position</li>
              <li><strong>Step 4:</strong> Change the verb to active form</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <ul>
              <li><strong>Passive:</strong> <em>A letter</em> <em>is written</em> <em>by her</em>.</li>
              <li><strong>Active:</strong> <em>She</em> <em>writes</em> <em>a letter</em>.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <ul>
              <li><strong>Passive:</strong> <em>The meal</em> <em>was cooked</em> <em>by the chef</em>.</li>
              <li><strong>Active:</strong> <em>The chef</em> <em>cooked</em> <em>the meal</em>.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong>
            <ul>
              <li><strong>Passive:</strong> <em>The project</em> <em>will be completed</em> <em>by the students</em>.</li>
              <li><strong>Active:</strong> <em>The students</em> <em>will complete</em> <em>the project</em>.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> If there's no 'by' phrase, you may need to add a subject (someone, people, they, etc.).
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Passive Voice in Different Tenses",
        objective: "obj_006",
        text: `
          <h3>Forming Passive Voice in All Tenses</h3>
          <p>The passive voice uses the verb 'to be' in the appropriate tense + the past participle of the main verb.</p>
          
          <div class="example-box">
            <strong>📌 Present Simple:</strong>
            <ul>
              <li>Active: She <strong>writes</strong> a letter.</li>
              <li>Passive: A letter <strong>is written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Present Continuous:</strong>
            <ul>
              <li>Active: She <strong>is writing</strong> a letter.</li>
              <li>Passive: A letter <strong>is being written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Present Perfect:</strong>
            <ul>
              <li>Active: She <strong>has written</strong> a letter.</li>
              <li>Passive: A letter <strong>has been written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Past Simple:</strong>
            <ul>
              <li>Active: She <strong>wrote</strong> a letter.</li>
              <li>Passive: A letter <strong>was written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Past Continuous:</strong>
            <ul>
              <li>Active: She <strong>was writing</strong> a letter.</li>
              <li>Passive: A letter <strong>was being written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Past Perfect:</strong>
            <ul>
              <li>Active: She <strong>had written</strong> a letter.</li>
              <li>Passive: A letter <strong>had been written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Future Simple:</strong>
            <ul>
              <li>Active: She <strong>will write</strong> a letter.</li>
              <li>Passive: A letter <strong>will be written</strong> by her.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Future Perfect:</strong>
            <ul>
              <li>Active: She <strong>will have written</strong> a letter.</li>
              <li>Passive: A letter <strong>will have been written</strong> by her.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Passive Voice with Modal Verbs",
        objective: "obj_009",
        text: `
          <h3>Passive Voice with Modals</h3>
          <p>To form passive voice with modal verbs, use: <strong>modal + be + past participle</strong></p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Can:</strong> "The homework <strong>can be done</strong> tomorrow."</li>
              <li><strong>Could:</strong> "The problem <strong>could be solved</strong> easily."</li>
              <li><strong>Will:</strong> "The project <strong>will be finished</strong> soon."</li>
              <li><strong>Would:</strong> "It <strong>would be appreciated</strong>."</li>
              <li><strong>Should:</strong> "The medicine <strong>should be taken</strong> daily."</li>
              <li><strong>Must:</strong> "The rules <strong>must be followed</strong>."</li>
              <li><strong>Might:</strong> "The package <strong>might be delivered</strong> today."</li>
              <li><strong>May:</strong> "The meeting <strong>may be postponed</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Active vs Passive with Modals:</strong>
            <ul>
              <li>Active: "You <strong>should finish</strong> the homework."</li>
              <li>Passive: "The homework <strong>should be finished</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Complex Sentences with Passive Voice",
        objective: "obj_008",
        text: `
          <h3>Passive Voice in Complex Sentences</h3>
          <p>Passive voice can be used in complex sentences with multiple clauses.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Active:</strong> "The teacher said that the students <strong>wrote</strong> the report."</li>
              <li><strong>Passive:</strong> "The teacher said that the report <strong>was written</strong> by the students."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>"I know that the letter <strong>was sent</strong> yesterday."</li>
              <li>"She believes that the work <strong>will be completed</strong> on time."</li>
              <li>"The report which <strong>was written</strong> by the student received an A."</li>
              <li>"The project that <strong>is being developed</strong> is innovative."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> In complex sentences, be careful which clause receives the passive transformation.
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Choosing Between Active and Passive",
        objective: "obj_007",
        text: `
          <h3>When to Use Active vs Passive</h3>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded">
              <h4 class="text-green-600">✅ Use Active Voice</h4>
              <ul>
                <li>✓ Most writing situations</li>
                <li>✓ To be clear and direct</li>
                <li>✓ To be concise</li>
                <li>✓ To create strong writing</li>
                <li>✓ When the actor is important</li>
                <li>✓ To engage the reader</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded">
              <h4 class="text-blue-600">🔵 Use Passive Voice</h4>
              <ul>
                <li>✓ When the actor is unknown</li>
                <li>✓ When the actor is obvious</li>
                <li>✓ To emphasize the receiver</li>
                <li>✓ In scientific writing</li>
                <li>✓ To avoid responsibility</li>
                <li>✓ To sound more formal</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Active (Better):</strong> "The company <strong>launched</strong> a new product."</li>
              <li><strong>Passive (Weaker):</strong> "A new product <strong>was launched</strong> by the company."</li>
              <li><strong>Passive (Better for science):</strong> "The solution <strong>was heated</strong> to 100°C."</li>
              <li><strong>Passive (Unknown actor):</strong> "My wallet <strong>was stolen</strong>."</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded">
          <h4>✅ Active Voice</h4>
          <ul>
            <li>✓ Subject performs action</li>
            <li>✓ Subject + Verb + Object</li>
            <li>✓ Clear, direct, strong</li>
            <li>✓ Use for most writing</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔵 Passive Voice</h4>
          <ul>
            <li>✓ Subject receives action</li>
            <li>✓ Subject + be + past participle</li>
            <li>✓ Can be weak or formal</li>
            <li>✓ Use when actor unknown</li>
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
        misconception: "Passive voice is always wrong",
        correction: "Passive voice is acceptable in many contexts",
        explanation: "Passive voice is appropriate in scientific writing, when the actor is unknown, or to emphasize the receiver."
      },
      {
        id: "mis_002",
        misconception: "Passive voice is always longer than active voice",
        correction: "Passive voice can be shorter when the actor is omitted",
        explanation: "Passive without 'by + agent' can be concise: 'Mistakes were made' is short."
      },
      {
        id: "mis_003",
        misconception: "You can always convert between active and passive",
        correction: "Intransitive verbs (no object) cannot be passive",
        explanation: "Sentences like 'She sleeps' have no object, so passive voice is impossible."
      },
      {
        id: "mis_004",
        misconception: "Active voice is always better",
        correction: "Sometimes passive voice is more appropriate or effective",
        explanation: "In formal or scientific writing, passive voice is often preferred for objectivity."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Academic Writing",
        description: "Passive voice is often used in scientific papers for objectivity.",
        example: "In scientific reports: 'The mixture was heated' instead of 'We heated the mixture.'"
      },
      {
        id: "app_002",
        title: "News Reporting",
        description: "Both voices are used depending on what the journalist wants to emphasize.",
        example: "'The president was elected' emphasizes the president. 'Voters elected the president' emphasizes the voters."
      },
      {
        id: "app_003",
        title: "Business Writing",
        description: "Active voice is preferred for clear, professional communication.",
        example: "'We will complete the project by Friday' is clearer than 'The project will be completed by Friday.'"
      },
      {
        id: "app_004",
        title: "Legal Writing",
        description: "Passive voice is often used to avoid assigning blame.",
        example: "'Mistakes were made' instead of 'We made mistakes.'"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Active Voice", definition: "The subject performs the action. (Subject + Verb + Object)" },
    { term: "Passive Voice", definition: "The subject receives the action. (Subject + be + past participle)" },
    { term: "Agent", definition: "The person or thing that performs the action in a passive sentence." },
    { term: "Past Participle", definition: "The third form of a verb (e.g., written, cooked, completed)." },
    { term: "Intransitive Verb", definition: "A verb that does not take an object (cannot be passive)." },
    { term: "Transitive Verb", definition: "A verb that takes an object (can be passive)." },
    { term: "By + Agent", definition: "The phrase that identifies the actor in a passive sentence." },
    { term: "Voice", definition: "The form of a verb that shows whether the subject performs or receives the action." }
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
      question: "What is the difference between active and passive voice?",
      type: "multiple_choice",
      options: [
        "Active has a subject; passive doesn't",
        "Active subject performs action; passive subject receives action",
        "Active uses past tense; passive uses present tense",
        "Active is always shorter than passive"
      ],
      answer: "Active subject performs action; passive subject receives action",
      explanation: "In active voice, the subject does the action. In passive voice, the subject receives the action."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which sentence is in active voice?",
      type: "multiple_choice",
      options: [
        "The book was written by John.",
        "John wrote the book.",
        "The book is being written.",
        "The book has been written."
      ],
      answer: "John wrote the book.",
      explanation: "John (subject) performed the action (wrote) - this is active voice."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which sentence is in passive voice?",
      type: "multiple_choice",
      options: [
        "She sings a song.",
        "She is singing a song.",
        "A song is sung by her.",
        "She will sing a song."
      ],
      answer: "A song is sung by her.",
      explanation: "The subject (a song) receives the action - this is passive voice."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert to passive: 'The chef cooked the meal.'",
      type: "multiple_choice",
      options: [
        "The meal cooked the chef.",
        "The meal was cooked by the chef.",
        "The chef was cooked by the meal.",
        "The meal is cooked by the chef."
      ],
      answer: "The meal was cooked by the chef.",
      explanation: "The object (meal) becomes the subject, and we add 'was cooked' (past tense passive)."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert to passive: 'They will build a new hospital.'",
      type: "multiple_choice",
      options: [
        "A new hospital will be built by them.",
        "A new hospital was built by them.",
        "A new hospital is built by them.",
        "They were built a new hospital."
      ],
      answer: "A new hospital will be built by them.",
      explanation: "Use 'will be' + past participle (built) for future passive."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert to active: 'The letter was written by Mary.'",
      type: "multiple_choice",
      options: [
        "Mary wrote the letter.",
        "The letter wrote Mary.",
        "Mary was written the letter.",
        "The letter was written."
      ],
      answer: "Mary wrote the letter.",
      explanation: "Move the agent (Mary) to the subject position and change to active verb form."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert to active: 'The homework is done by the students.'",
      type: "multiple_choice",
      options: [
        "The students do the homework.",
        "The homework does the students.",
        "The students are done the homework.",
        "The homework is done."
      ],
      answer: "The students do the homework.",
      explanation: "Move 'the students' to subject position and use active verb 'do'."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is the correct passive form: 'She writes a letter.'?",
      type: "multiple_choice",
      options: [
        "A letter was written by her.",
        "A letter is written by her.",
        "A letter has been written by her.",
        "A letter will be written by her."
      ],
      answer: "A letter is written by her.",
      explanation: "Present simple active becomes present simple passive (is written)."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is the correct passive form: 'She wrote a letter.'?",
      type: "multiple_choice",
      options: [
        "A letter was written by her.",
        "A letter is written by her.",
        "A letter has been written by her.",
        "A letter will be written by her."
      ],
      answer: "A letter was written by her.",
      explanation: "Past simple active becomes past simple passive (was written)."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "In which situation should you use passive voice?",
      type: "multiple_choice",
      options: [
        "When you know who performed the action",
        "When you want to be clear and direct",
        "When you want to emphasize the receiver of the action",
        "When you want to write more engagingly"
      ],
      answer: "When you want to emphasize the receiver of the action",
      explanation: "Passive voice is used to emphasize the receiver, not the performer of the action."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Convert to passive: 'They believe that he is innocent.'",
      type: "multiple_choice",
      options: [
        "He is believed to be innocent.",
        "He was believed to be innocent.",
        "They are believed he is innocent.",
        "It is believed that he is innocent."
      ],
      answer: "He is believed to be innocent.",
      explanation: "With verbs like 'believe,' we can use the passive with an infinitive structure."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Convert to passive with modal: 'You must finish the report.'",
      type: "multiple_choice",
      options: [
        "The report must be finished.",
        "The report must finish.",
        "The report must have been finished.",
        "The report must be finishing."
      ],
      answer: "The report must be finished.",
      explanation: "Modal + be + past participle: must + be + finished."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Convert to passive with modal: 'She can solve the problem.'",
      type: "multiple_choice",
      options: [
        "The problem can be solved by her.",
        "The problem can solve by her.",
        "The problem can be solving.",
        "The problem can have solved."
      ],
      answer: "The problem can be solved by her.",
      explanation: "Modal (can) + be + past participle (solved)."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence is more appropriate for a scientific report?",
      type: "multiple_choice",
      options: [
        "We heated the solution to 100°C.",
        "The solution was heated to 100°C.",
        "I heated the solution.",
        "The solution heated."
      ],
      answer: "The solution was heated to 100°C.",
      explanation: "Scientific writing often uses passive voice for objectivity and to focus on the process."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence is stronger and more direct?",
      type: "multiple_choice",
      options: [
        "The report was written by the student.",
        "The student wrote the report.",
        "The report was written.",
        "It was the student who wrote the report."
      ],
      answer: "The student wrote the report.",
      explanation: "Active voice is stronger, more direct, and uses fewer words."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Convert to active: 'Mistakes were made.'",
      type: "multiple_choice",
      options: [
        "Someone made mistakes.",
        "Mistakes made someone.",
        "We made mistakes.",
        "Mistakes were making."
      ],
      answer: "Someone made mistakes.",
      explanation: "When the agent is unknown, use 'someone' or 'they' to create active voice."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_voice",
    title: "Active and Passive Voice Quiz",
    description: "Test your understanding of active and passive voice",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between active and passive voice?",
        type: "short_answer",
        answer_key: "In active voice, the subject performs the action; in passive voice, the subject receives the action.",
        explanation: "Active: subject does action. Passive: subject receives action."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Identify the voice: 'The dog chased the cat.'",
        type: "short_answer",
        answer_key: "active voice",
        explanation: "The dog (subject) performs the action (chased)."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Identify the voice: 'The cat was chased by the dog.'",
        type: "short_answer",
        answer_key: "passive voice",
        explanation: "The cat (subject) receives the action (was chased)."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Convert to passive: 'The teacher explained the lesson.'",
        type: "short_answer",
        answer_key: "The lesson was explained by the teacher.",
        explanation: "The object (lesson) becomes subject, and we use past simple passive."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Convert to passive: 'They are building a new school.'",
        type: "short_answer",
        answer_key: "A new school is being built.",
        explanation: "Present continuous passive: is being + past participle."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert to active: 'The homework was finished by John.'",
        type: "short_answer",
        answer_key: "John finished the homework.",
        explanation: "Move the agent to subject position and use active verb."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Convert to passive (present simple): 'She reads the newspaper.'",
        type: "short_answer",
        answer_key: "The newspaper is read by her.",
        explanation: "Present simple passive: is + read (past participle)."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "When would you use passive voice instead of active? Give two examples.",
        type: "short_answer",
        answer_key: "1) When the actor is unknown: 'My wallet was stolen.' 2) In scientific writing: 'The solution was heated.'",
        explanation: "Passive voice is used when the actor is unknown, to emphasize the receiver, or in scientific/formal writing."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Convert to passive with modal: 'You should complete the form.'",
        type: "short_answer",
        answer_key: "The form should be completed.",
        explanation: "Modal (should) + be + past participle (completed)."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Rewrite the following paragraph to improve it by changing passive voice to active where appropriate: 'The book was written by the author. It was published by a major company. It was read by millions of people.'",
        type: "short_answer",
        answer_key: "The author wrote the book. A major company published it. Millions of people read it.",
        explanation: "Active voice makes the writing stronger, clearer, and more direct."
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
        "Distinguish between active and passive voice",
        "Convert sentences between active and passive",
        "Use appropriate voice in writing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is voice?" },
        { time: "5-15 min", activity: "Direct Instruction - Active vs Passive" },
        { time: "15-25 min", activity: "Direct Instruction - Converting Voices" },
        { time: "25-35 min", activity: "Guided Practice - Transformations" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Active subject performs action; passive subject receives action",
        // ... full answer key
      },
      assessment: {
        ass_001: "In active voice, the subject performs the action; in passive voice, the subject receives the action.",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Find examples of active and passive voice in newspapers",
      "Rewrite a paragraph from passive to active voice",
      "Create a poster showing the transformation process",
      "Write a story using both active and passive voice"
    ],
    differentiation: {
      struggling: [
        "Start with simple sentences only",
        "Use color-coding for subject/verb/object",
        "Practice one tense at a time",
        "Provide transformation templates"
      ],
      advanced: [
        "Analyze complex passive structures",
        "Write about the effects of voice choice",
        "Research voice usage in different genres",
        "Create an advanced transformation exercise"
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
      title: "Active vs Passive Voice",
      description: "Diagram showing the difference between active and passive voice",
      url: "/diagrams/active-passive.png",
      alt: "Diagram comparing active and passive voice"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Passive Voice Tenses Chart",
      description: "Chart showing passive voice in all tenses",
      url: "/diagrams/passive-tenses.png",
      alt: "Chart of passive voice in different tenses"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "When to Use Passive Voice",
      description: "Infographic explaining appropriate usage of passive voice",
      url: "/diagrams/passive-usage.png",
      alt: "When to use passive voice"
    }
  ]
};