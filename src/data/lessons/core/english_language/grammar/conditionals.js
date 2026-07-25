// Location: src/data/lessons/core/english_language/grammar/conditionals.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_conditionals",
  subject: "English Language",
  topic: "Grammar",
  name: "Conditionals",
  icon: "🔀",
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
    "Understanding of tenses",
    "Knowledge of modal verbs",
    "Understanding of sentence structure",
    "Basic vocabulary"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_phrases_clauses",
      name: "Phrases and Clauses",
      file: "core/english_language/grammar/phrases_clauses.js"
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
      description: "Define conditionals and identify the parts of a conditional sentence",
      indicator: "Student can identify the 'if' clause and the main clause"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use the zero conditional for general truths and facts",
      indicator: "Student can form zero conditional sentences correctly"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use the first conditional for real future possibilities",
      indicator: "Student can express future possibilities using first conditional"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use the second conditional for unreal present situations",
      indicator: "Student can form second conditional sentences"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use the third conditional for unreal past situations",
      indicator: "Student can express regrets about the past"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Distinguish between the different conditionals",
      indicator: "Student can choose the correct conditional for different contexts"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use 'unless' and other alternatives to 'if'",
      indicator: "Student can use 'unless' correctly in conditional sentences"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use mixed conditionals",
      indicator: "Student can form mixed conditional sentences"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use conditionals with modals in the main clause",
      indicator: "Student can use modals (could, might, should) in conditional sentences"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Use inverted conditionals (were, had, should)",
      indicator: "Student can use inversion in conditional sentences"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Use conditionals in reported speech",
      indicator: "Student can report conditional sentences correctly"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze and correct conditional errors in context",
      indicator: "Student can identify and fix mistakes with conditionals"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Conditionals",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn all five types of conditionals with clear explanations and examples."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Conditionals?</h2>
      <p><strong>Conditionals</strong> are sentences that express the result of a condition. They describe <strong>if</strong> something happens, then something else will happen.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Parts of a Conditional</h3>
          <p><strong>If Clause</strong> (condition) + <strong>Main Clause</strong> (result)</p>
          <p><em>"If it rains,</em> <strong>I will stay home.</strong>"</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Types of Conditionals</h3>
          <ul>
            <li><strong>Zero:</strong> Facts/truths</li>
            <li><strong>First:</strong> Real future</li>
            <li><strong>Second:</strong> Unreal present</li>
            <li><strong>Third:</strong> Unreal past</li>
            <li><strong>Mixed:</strong> Combined times</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Quick Reference</h4>
        <table class="w-full text-sm">
          <tr><th>Type</th><th>If Clause</th><th>Main Clause</th><th>Use</th></tr>
          <tr><td>Zero</td><td>Present Simple</td><td>Present Simple</td><td>Facts</td></tr>
          <tr><td>First</td><td>Present Simple</td><td>will + infinitive</td><td>Real future</td></tr>
          <tr><td>Second</td><td>Past Simple</td><td>would + infinitive</td><td>Unreal present</td></tr>
          <tr><td>Third</td><td>Past Perfect</td><td>would have + past participle</td><td>Unreal past</td></tr>
        </table>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Zero Conditional",
        objective: "obj_002",
        text: `
          <h3>Zero Conditional</h3>
          <p>Use the <strong>zero conditional</strong> for general truths, scientific facts, and things that are always true.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>If + Present Simple, Present Simple</strong></p>
            <p>OR <strong>Present Simple + if + Present Simple</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>If</strong> you heat water, it <strong>boils</strong>." (scientific fact)</li>
              <li>"Ice <strong>melts</strong> <strong>if</strong> you heat it." (scientific fact)</li>
              <li>"<strong>If</strong> I am late, my parents <strong>get</strong> angry." (general truth)</li>
              <li>"<strong>If</strong> it rains, the ground <strong>gets</strong> wet." (general truth)</li>
              <li>"<strong>If</strong> you don't eat, you <strong>get</strong> hungry." (general truth)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using 'When' vs 'If':</strong>
            <ul>
              <li><strong>When:</strong> Used for certain situations → <em>"When I'm tired, I sleep."</em></li>
              <li><strong>If:</strong> Used for uncertain situations → <em>"If I'm tired, I'll sleep."</em></li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Remember:</strong> The zero conditional is always true. Both clauses use the present simple tense.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "First Conditional",
        objective: "obj_003",
        text: `
          <h3>First Conditional</h3>
          <p>Use the <strong>first conditional</strong> for real and possible situations in the future.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>If + Present Simple, will + infinitive</strong></p>
            <p>OR <strong>will + infinitive + if + Present Simple</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>If</strong> it rains, I <strong>will stay</strong> home." (possible future action)</li>
              <li>"I <strong>will call</strong> you <strong>if</strong> I need help." (possible future action)</li>
              <li>"<strong>If</strong> she studies, she <strong>will pass</strong> the exam." (possible future result)</li>
              <li>"<strong>If</strong> you don't hurry, you <strong>will miss</strong> the bus." (warning)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using Other Modals:</strong>
            <ul>
              <li><strong>Can:</strong> "If I finish early, I <strong>can</strong> help you."</li>
              <li><strong>May:</strong> "If it's sunny, we <strong>may</strong> go to the beach."</li>
              <li><strong>Should:</strong> "If you're tired, you <strong>should</strong> rest."</li>
              <li><strong>Must:</strong> "If you're sick, you <strong>must</strong> see a doctor."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using 'Unless' (If not):</strong>
            <ul>
              <li>"I won't go <strong>unless</strong> you come too." (= I won't go if you don't come.)</li>
              <li>"<strong>Unless</strong> you study, you won't pass." (= If you don't study, you won't pass.)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Second Conditional",
        objective: "obj_004",
        text: `
          <h3>Second Conditional</h3>
          <p>Use the <strong>second conditional</strong> for unreal, imaginary, or unlikely situations in the present or future.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>If + Past Simple, would + infinitive</strong></p>
            <p>OR <strong>would + infinitive + if + Past Simple</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>If</strong> I were rich, I <strong>would travel</strong> the world." (unreal present situation)</li>
              <li>"<strong>If</strong> she had more time, she <strong>would learn</strong> Spanish." (unreal present)</li>
              <li>"<strong>If</strong> we lived near the beach, we <strong>would swim</strong> every day." (unreal present)</li>
              <li>"<strong>If</strong> I were you, I <strong>would accept</strong> the offer." (advice)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using 'Were' for All Subjects:</strong>
            <ul>
              <li>"If I <strong>were</strong> you..." (not 'was')</li>
              <li>"If he <strong>were</strong> here..." (not 'was')</li>
              <li>"If she <strong>were</strong> a millionaire..." (not 'was')</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using Other Modals:</strong>
            <ul>
              <li><strong>Could:</strong> "If I spoke French, I <strong>could</strong> work in Paris."</li>
              <li><strong>Might:</strong> "If she won the lottery, she <strong>might</strong> buy a house."</li>
              <li><strong>Should:</strong> "If you were sick, you <strong>should</strong> see a doctor."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Remember:</strong> The second conditional is for UNREAL or IMAGINARY situations. Use 'were' instead of 'was' for all subjects.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Third Conditional",
        objective: "obj_005",
        text: `
          <h3>Third Conditional</h3>
          <p>Use the <strong>third conditional</strong> for unreal situations in the past. It expresses regret or how things could have been different.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>If + Past Perfect, would have + past participle</strong></p>
            <p>OR <strong>would have + past participle + if + Past Perfect</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>If</strong> I had studied harder, I <strong>would have passed</strong> the exam." (regret)</li>
              <li>"<strong>If</strong> she had known, she <strong>would have come</strong>." (past unreal situation)</li>
              <li>"<strong>If</strong> we had left earlier, we <strong>would have arrived</strong> on time." (past unreal)</li>
              <li>"<strong>If</strong> you had told me, I <strong>would have helped</strong> you." (past unreal)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Using Other Modals:</strong>
            <ul>
              <li><strong>Could have:</strong> "If I had known, I <strong>could have helped</strong>."</li>
              <li><strong>Might have:</strong> "If she had asked, I <strong>might have said</strong> yes."</li>
              <li><strong>Should have:</strong> "If I had seen him, I <strong>should have told</strong> him."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Remember:</strong> The third conditional is for UNREAL PAST situations. The result is always in the past and cannot be changed.
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Mixed Conditionals",
        objective: "obj_008",
        text: `
          <h3>Mixed Conditionals</h3>
          <p><strong>Mixed conditionals</strong> combine different times in the if-clause and main clause.</p>
          
          <div class="example-box">
            <strong>📌 Type 1: Past → Present</strong>
            <ul>
              <li><strong>If clause:</strong> Past Perfect (past situation)</li>
              <li><strong>Main clause:</strong> would + infinitive (present result)</li>
              <li><em>"If I had studied medicine, I would be a doctor now."</em></li>
              <li><em>"If she had taken the job, she would live in London now."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Type 2: Present → Past</strong>
            <ul>
              <li><strong>If clause:</strong> Past Simple (present situation)</li>
              <li><strong>Main clause:</strong> would have + past participle (past result)</li>
              <li><em>"If I weren't afraid of flying, I would have visited you."</em></li>
              <li><em>"If she were more careful, she wouldn't have lost her keys."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"If I had won the lottery, I would be rich now." (past condition, present result)</li>
              <li>"If I were rich, I would have bought that car." (present condition, past result)</li>
              <li>"If he had studied harder, he would have a better job now." (past condition, present result)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Inverted Conditionals",
        objective: "obj_010",
        text: `
          <h3>Inverted Conditionals</h3>
          <p>In <strong>inverted conditionals</strong>, we omit 'if' and invert the subject and auxiliary verb. This is more formal.</p>
          
          <div class="example-box">
            <strong>📌 First Conditional Inversion:</strong>
            <ul>
              <li><strong>Normal:</strong> "If you need help, call me."</li>
              <li><strong>Inverted:</strong> "<strong>Should</strong> you need help, call me."</li>
              <li><strong>Normal:</strong> "If he arrives early, tell him to wait."</li>
              <li><strong>Inverted:</strong> "<strong>Should</strong> he arrive early, tell him to wait."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Second Conditional Inversion:</strong>
            <ul>
              <li><strong>Normal:</strong> "If I were rich, I would travel."</li>
              <li><strong>Inverted:</strong> "<strong>Were</strong> I rich, I would travel."</li>
              <li><strong>Normal:</strong> "If she were here, she would help."</li>
              <li><strong>Inverted:</strong> "<strong>Were</strong> she here, she would help."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Third Conditional Inversion:</strong>
            <ul>
              <li><strong>Normal:</strong> "If I had known, I would have come."</li>
              <li><strong>Inverted:</strong> "<strong>Had</strong> I known, I would have come."</li>
              <li><strong>Normal:</strong> "If he had studied, he would have passed."</li>
              <li><strong>Inverted:</strong> "<strong>Had</strong> he studied, he would have passed."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Alternatives to 'If'",
        objective: "obj_007",
        text: `
          <h3>Alternatives to 'If'</h3>
          <p>We can use other expressions to introduce conditions.</p>
          
          <div class="example-box">
            <strong>📌 Unless (If not):</strong>
            <ul>
              <li>"I won't go <strong>unless</strong> you come." (= if you don't come)</li>
              <li>"<strong>Unless</strong> it rains, we'll have a picnic." (= if it doesn't rain)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Provided/Providing (If, on condition that):</strong>
            <ul>
              <li>"I'll come <strong>provided</strong> you pay for my ticket."</li>
              <li>"You can go <strong>providing</strong> you finish your work."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 As long as (If, on condition that):</strong>
            <ul>
              <li>"You can stay <strong>as long as</strong> you behave."</li>
              <li>"I'll help you <strong>as long as</strong> you need me."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 In case (To express precaution):</strong>
            <ul>
              <li>"Take an umbrella <strong>in case</strong> it rains."</li>
              <li>"I'll call you <strong>in case</strong> I need help."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Even if (Despite the condition):</strong>
            <ul>
              <li>"<strong>Even if</strong> it rains, I'll go." (regardless of rain)</li>
              <li>"<strong>Even if</strong> you apologize, I won't forgive you."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Conditionals in Reported Speech",
        objective: "obj_011",
        text: `
          <h3>Conditionals in Reported Speech</h3>
          <p>When reporting conditional sentences, we often need to change the tense.</p>
          
          <div class="example-box">
            <strong>📌 Reporting First Conditional:</strong>
            <ul>
              <li><strong>Direct:</strong> "If it rains, I <strong>will stay</strong> home."</li>
              <li><strong>Indirect:</strong> He said that if it rained, he <strong>would stay</strong> home.</li>
              <li>(will → would, Present → Past)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Reporting Second Conditional:</strong>
            <ul>
              <li><strong>Direct:</strong> "If I <strong>had</strong> money, I <strong>would buy</strong> a car."</li>
              <li><strong>Indirect:</strong> She said that if she <strong>had</strong> money, she <strong>would buy</strong> a car.</li>
              <li>(No tense change - already in past)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Reporting Third Conditional:</strong>
            <ul>
              <li><strong>Direct:</strong> "If I <strong>had known</strong>, I <strong>would have come</strong>."</li>
              <li><strong>Indirect:</strong> He said that if he <strong>had known</strong>, he <strong>would have come</strong>.</li>
              <li>(No tense change - already in past perfect)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔀 Conditional Types</h4>
          <ul>
            <li><strong>Zero:</strong> If + Present, Present (Facts)</li>
            <li><strong>First:</strong> If + Present, will + infinitive (Real future)</li>
            <li><strong>Second:</strong> If + Past, would + infinitive (Unreal present)</li>
            <li><strong>Third:</strong> If + Past Perfect, would have + PP (Unreal past)</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Use 'were' for all subjects in second conditional</li>
            <li>✓ Use 'unless' to mean 'if not'</li>
            <li>✓ Mixed conditionals combine different times</li>
            <li>✓ Inversion is formal: Were/Had/Should + subject</li>
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
        misconception: "You can't use 'will' in the if-clause",
        correction: "You can use 'will' in the if-clause for requests or willingness",
        explanation: "Example: 'If you will help me, I'll be grateful.' (will = willingness)"
      },
      {
        id: "mis_002",
        misconception: "Second conditional is only about the past",
        correction: "Second conditional is about unreal PRESENT or FUTURE situations",
        explanation: "'If I were rich, I would travel' is about the present/future, not the past."
      },
      {
        id: "mis_003",
        misconception: "Third conditional and second conditional are the same",
        correction: "Second conditional = unreal present; Third conditional = unreal past",
        explanation: "Second: 'If I had money, I would buy it.' (I don't have money now) Third: 'If I had had money, I would have bought it.' (I didn't have money then)"
      },
      {
        id: "mis_004",
        misconception: "All conditionals use 'if'",
        correction: "We can use other alternatives like 'unless', 'provided', 'as long as'",
        explanation: "Example: 'I'll go unless it rains.' (instead of 'if it doesn't rain')"
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Decision Making",
        description: "Conditionals help us make decisions and consider possibilities.",
        example: "If I study hard, I will pass. If I don't, I won't."
      },
      {
        id: "app_002",
        title: "Giving Advice",
        description: "Conditionals are used to give advice and make suggestions.",
        example: "If I were you, I would apologize. (second conditional for advice)"
      },
      {
        id: "app_003",
        title: "Business Planning",
        description: "Conditionals are essential for planning and forecasting.",
        example: "If sales increase by 10%, we will expand. (first conditional for planning)"
      },
      {
        id: "app_004",
        title: "Expressing Regrets",
        description: "Third conditionals are used to express regrets about the past.",
        example: "If I had known, I would have helped. (regret about a past situation)"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Conditional", definition: "A sentence that expresses a condition and its result." },
    { term: "If Clause", definition: "The part of the sentence that states the condition." },
    { term: "Main Clause", definition: "The part of the sentence that states the result." },
    { term: "Zero Conditional", definition: "Conditional for general truths and scientific facts." },
    { term: "First Conditional", definition: "Conditional for real and possible future situations." },
    { term: "Second Conditional", definition: "Conditional for unreal or imaginary present situations." },
    { term: "Third Conditional", definition: "Conditional for unreal past situations expressing regret." },
    { term: "Mixed Conditional", definition: "A conditional that combines different time frames." },
    { term: "Inversion", definition: "Formal way of forming conditionals by inverting the subject and verb." }
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
      question: "What are the two parts of a conditional sentence?",
      type: "multiple_choice",
      options: [
        "Subject and Verb",
        "If Clause and Main Clause",
        "Noun and Pronoun",
        "Question and Answer"
      ],
      answer: "If Clause and Main Clause",
      explanation: "A conditional sentence has an if clause (condition) and a main clause (result)."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Complete: 'If you heat water, it ____.'",
      type: "multiple_choice",
      options: ["will boil", "boils", "would boil", "boiled"],
      answer: "boils",
      explanation: "Zero conditional uses present simple in both clauses (general truth)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Complete: 'If it rains, I ____ stay home.'",
      type: "multiple_choice",
      options: ["will", "would", "would have", "am"],
      answer: "will",
      explanation: "First conditional uses 'will' + infinitive in the main clause."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Complete: 'If I were you, I ____ travel the world.'",
      type: "multiple_choice",
      options: ["will", "would", "would have", "am"],
      answer: "would",
      explanation: "Second conditional uses 'would' + infinitive in the main clause."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Complete: 'If I had studied, I ____ passed the exam.'",
      type: "multiple_choice",
      options: ["will", "would", "would have", "have"],
      answer: "would have",
      explanation: "Third conditional uses 'would have' + past participle."
    },
    {
      id: "prac_006",
      objective: "obj_002",
      difficulty: "medium",
      question: "Which sentence is zero conditional?",
      type: "multiple_choice",
      options: [
        "If it rains, I will stay home.",
        "If you heat ice, it melts.",
        "If I were rich, I would travel.",
        "If I had known, I would have come."
      ],
      answer: "If you heat ice, it melts.",
      explanation: "Zero conditional expresses general truth (present + present)."
    },
    {
      id: "prac_007",
      objective: "obj_003",
      difficulty: "medium",
      question: "Which sentence is first conditional?",
      type: "multiple_choice",
      options: [
        "If you heat ice, it melts.",
        "If it rains, I will stay home.",
        "If I were rich, I would travel.",
        "If I had known, I would have come."
      ],
      answer: "If it rains, I will stay home.",
      explanation: "First conditional expresses real future possibility (present + will)."
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which sentence is second conditional?",
      type: "multiple_choice",
      options: [
        "If you heat ice, it melts.",
        "If it rains, I will stay home.",
        "If I were rich, I would travel.",
        "If I had known, I would have come."
      ],
      answer: "If I were rich, I would travel.",
      explanation: "Second conditional expresses unreal present (past + would)."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which sentence is third conditional?",
      type: "multiple_choice",
      options: [
        "If you heat ice, it melts.",
        "If it rains, I will stay home.",
        "If I were rich, I would travel.",
        "If I had known, I would have come."
      ],
      answer: "If I had known, I would have come.",
      explanation: "Third conditional expresses unreal past (past perfect + would have)."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which conditional is used for scientific facts?",
      type: "multiple_choice",
      options: ["Zero", "First", "Second", "Third"],
      answer: "Zero",
      explanation: "Zero conditional is used for scientific facts and general truths."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What does 'unless' mean?",
      type: "multiple_choice",
      options: ["if", "if not", "because", "although"],
      answer: "if not",
      explanation: "'Unless' means 'if not' and introduces a condition."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which is a mixed conditional?",
      type: "multiple_choice",
      options: [
        "If I study, I will pass.",
        "If I had studied, I would have passed.",
        "If I had studied, I would be a doctor now.",
        "If I studied, I would pass."
      ],
      answer: "If I had studied, I would be a doctor now.",
      explanation: "Mixed conditional: past condition (had studied) + present result (would be)."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Complete: 'If she knew the truth, she ____ angry.'",
      type: "multiple_choice",
      options: ["will be", "would be", "would have been", "is"],
      answer: "would be",
      explanation: "Second conditional uses 'would be' for unreal present situations."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which is an inverted conditional?",
      type: "multiple_choice",
      options: [
        "If I were rich, I would travel.",
        "Were I rich, I would travel.",
        "If I had known, I would have come.",
        "If it rains, I will stay home."
      ],
      answer: "Were I rich, I would travel.",
      explanation: "Inversion: Were + subject (instead of If + subject + were)."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which is an inverted conditional?",
      type: "multiple_choice",
      options: [
        "If I had known, I would have come.",
        "Had I known, I would have come.",
        "If I were you, I would go.",
        "If it rains, I will stay."
      ],
      answer: "Had I known, I would have come.",
      explanation: "Inversion: Had + subject (instead of If + subject + had)."
    },
    {
      id: "prac_016",
      objective: "obj_011",
      difficulty: "hard",
      question: "Report this: 'If it rains, I will stay home.'",
      type: "multiple_choice",
      options: [
        "He said if it rains, he will stay home.",
        "He said if it rained, he would stay home.",
        "He said if it rained, he will stay home.",
        "He said if it rains, he would stay home."
      ],
      answer: "He said if it rained, he would stay home.",
      explanation: "First conditional changes to second conditional in reported speech."
    },
    {
      id: "prac_017",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'If I would have known, I would have come.'",
      type: "multiple_choice",
      options: [
        "If I would have known",
        "If I had known",
        "If I have known",
        "If I knew"
      ],
      answer: "If I had known",
      explanation: "Third conditional uses 'If + past perfect' (had known), not 'would have known'."
    },
    {
      id: "prac_018",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'If she will come, I will be happy.'",
      type: "multiple_choice",
      options: [
        "If she will come",
        "If she comes",
        "If she is coming",
        "If she came"
      ],
      answer: "If she comes",
      explanation: "First conditional uses present simple in the if clause, not 'will'."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_conditionals",
    title: "Conditionals Quiz",
    description: "Test your understanding of all conditional types",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the two parts of a conditional sentence?",
        type: "short_answer",
        answer_key: "If clause (condition) and main clause (result)",
        explanation: "A conditional has an if clause expressing the condition and a main clause expressing the result."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Complete: 'If you freeze water, it ____.' (zero conditional)",
        type: "short_answer",
        answer_key: "freezes",
        explanation: "Zero conditional uses present simple in both clauses."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Complete: 'If she studies, she ____ pass.' (first conditional)",
        type: "short_answer",
        answer_key: "will",
        explanation: "First conditional uses 'will' + infinitive in the main clause."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Complete: 'If I were you, I ____ apologize.' (second conditional)",
        type: "short_answer",
        answer_key: "would",
        explanation: "Second conditional uses 'would' + infinitive in the main clause."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Complete: 'If I had known, I ____ come.' (third conditional)",
        type: "short_answer",
        answer_key: "would have",
        explanation: "Third conditional uses 'would have' + past participle."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "What verb form should be used in the if clause of second conditional for all subjects?",
        type: "short_answer",
        answer_key: "were",
        explanation: "In second conditional, use 'were' for all subjects (If I were, If she were, etc.)."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does 'unless' mean?",
        type: "short_answer",
        answer_key: "if not",
        explanation: "'Unless' means 'if not' and introduces a conditional clause."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Complete: 'If I had studied medicine, I ____ a doctor now.' (mixed conditional)",
        type: "short_answer",
        answer_key: "would be",
        explanation: "Mixed conditional: past condition + present result = would be."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Rewrite using inversion: 'If I had known, I would have helped.'",
        type: "short_answer",
        answer_key: "Had I known, I would have helped.",
        explanation: "Inversion: Had + subject (instead of If + subject + had)."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Correct this sentence: 'If I would have seen him, I would have told him.'",
        type: "short_answer",
        answer_key: "If I had seen him, I would have told him.",
        explanation: "Third conditional: use 'If + past perfect' (had seen), not 'would have seen'."
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
        "Identify the four main types of conditionals",
        "Use conditionals correctly in sentences",
        "Express real and unreal situations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are conditionals?" },
        { time: "5-10 min", activity: "Direct Instruction - Zero and First" },
        { time: "10-20 min", activity: "Direct Instruction - Second and Third" },
        { time: "20-25 min", activity: "Direct Instruction - Mixed and Inversions" },
        { time: "25-35 min", activity: "Guided Practice - Exercises" },
        { time: "35-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "If Clause and Main Clause",
        // ... full answer key
      },
      assessment: {
        ass_001: "If clause (condition) and main clause (result)",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Write a story using all four types of conditionals",
      "Create a poster showing the conditional types",
      "Find examples of conditionals in song lyrics",
      "Role-play scenarios using second conditionals"
    ],
    differentiation: {
      struggling: [
        "Start with zero conditional only",
        "Use visual timelines",
        "Provide formula templates",
        "Practice with fill-in-the-blank exercises"
      ],
      advanced: [
        "Analyze conditional usage in literature",
        "Write about mixed conditional patterns",
        "Create an advanced conditional worksheet",
        "Research conditionals in other languages"
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
      title: "Conditional Types Overview",
      description: "Diagram showing all four main conditional types",
      url: "/diagrams/conditionals-overview.png",
      alt: "Overview of conditional types"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Conditional Formula Chart",
      description: "Chart with formulas and examples for each conditional",
      url: "/diagrams/conditional-chart.png",
      alt: "Chart of conditional formulas"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Mixed Conditionals Guide",
      description: "Infographic explaining mixed conditionals",
      url: "/diagrams/mixed-conditionals.png",
      alt: "Guide to mixed conditionals"
    }
  ]
};