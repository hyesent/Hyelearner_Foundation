// Location: src/data/lessons/core/english_language/grammar/tenses.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_tenses",
  subject: "English Language",
  topic: "Grammar",
  name: "Tenses",
  icon: "⏰",
  grade_level: "JSS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of parts of speech",
    "Knowledge of basic verbs",
    "Ability to form simple sentences"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_sentence_structure",
      name: "Sentence Structure",
      file: "core/english_language/grammar/sentence_structure.js"
    },
    {
      id: "eng_lesson_subject_verb_agreement",
      name: "Subject-Verb Agreement",
      file: "core/english_language/grammar/subject_verb_agreement.js"
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
      description: "Define tenses and identify the three main tenses (past, present, future)",
      indicator: "Student can name the three main tenses with examples"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and use the present simple tense",
      indicator: "Student can use present simple for facts and habits"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify and use the past simple tense",
      indicator: "Student can form past simple tense with regular and irregular verbs"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify and use the future simple tense (will/shall)",
      indicator: "Student can make predictions and promises using will/shall"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Form and use the present continuous tense",
      indicator: "Student can describe ongoing actions in the present"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Form and use the past continuous tense",
      indicator: "Student can describe ongoing actions in the past"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Form and use the future continuous tense",
      indicator: "Student can describe ongoing actions in the future"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Form and use the present perfect tense",
      indicator: "Student can connect past actions to the present"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Form and use the past perfect tense",
      indicator: "Student can show one past action before another"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Form and use the future perfect tense",
      indicator: "Student can describe actions that will be completed in the future"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Differentiate between all 12 tense forms correctly",
      indicator: "Student can identify any tense in a sentence"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Apply tense consistency in writing",
      indicator: "Student can maintain correct tense throughout a paragraph"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Complete Guide to English Tenses",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Master all 12 English tenses with clear explanations and examples."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Tenses?</h2>
      <p><strong>Tenses</strong> indicate the time of an action or state of being. They help us understand <strong>when</strong> something happens.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🔵 Past</h3>
          <p>Action completed</p>
          <p><em>"I walked."</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🟢 Present</h3>
          <p>Action happening now</p>
          <p><em>"I walk."</em></p>
        </div>
        <div class="bg-purple-50 p-4 rounded text-center">
          <h3 class="text-purple-600">🟣 Future</h3>
          <p>Action yet to happen</p>
          <p><em>"I will walk."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 The 12 Tenses Overview</h4>
        <p>There are <strong>12 tenses</strong> in English, divided into <strong>3 main categories</strong> (past, present, future) × <strong>4 aspects</strong> (simple, continuous, perfect, perfect continuous).</p>
        <ul>
          <li><strong>Simple:</strong> Basic form (I walk, I walked, I will walk)</li>
          <li><strong>Continuous (Progressive):</strong> Ongoing action (I am walking, I was walking, I will be walking)</li>
          <li><strong>Perfect:</strong> Completed action (I have walked, I had walked, I will have walked)</li>
          <li><strong>Perfect Continuous:</strong> Ongoing and completed (I have been walking, I had been walking, I will have been walking)</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Present Simple Tense",
        objective: "obj_002",
        text: `
          <h3>Present Simple</h3>
          <p><strong>Uses:</strong> Facts, habits, routines, permanent situations, and scheduled events.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + verb(s/es)</li>
              <li><strong>Negative:</strong> Subject + do/does + not + base verb</li>
              <li><strong>Question:</strong> Do/Does + subject + base verb?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I drink</strong> coffee every morning." (habit)</li>
              <li>"<strong>She works</strong> at a hospital." (fact)</li>
              <li>"<strong>The sun rises</strong> in the east." (fact)</li>
              <li>"<strong>The train leaves</strong> at 8 PM." (schedule)</li>
              <li>"<strong>They speak</strong> French." (permanent situation)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> For third person singular (he/she/it), add <strong>-s</strong> or <strong>-es</strong>:
            <ul>
              <li>I eat → He eats</li>
              <li>I go → She goes</li>
              <li>I watch → It watches</li>
              <li>I study → He studies (y → ies)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Present Continuous Tense",
        objective: "obj_005",
        text: `
          <h3>Present Continuous</h3>
          <p><strong>Uses:</strong> Actions happening now, temporary situations, and future arrangements.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + am/is/are + verb-ing</li>
              <li><strong>Negative:</strong> Subject + am/is/are + not + verb-ing</li>
              <li><strong>Question:</strong> Am/Is/Are + subject + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I am reading</strong> a book." (happening now)</li>
              <li>"<strong>She is studying</strong> for her exam." (temporary)</li>
              <li>"<strong>We are meeting</strong> them tomorrow." (future arrangement)</li>
              <li>"<strong>It is raining</strong> outside." (happening now)</li>
              <li>"<strong>They are building</strong> a new house." (temporary)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>🔄 Compare:</strong>
            <ul>
              <li>Present Simple: "I work" (habit/fact)</li>
              <li>Present Continuous: "I am working" (happening now)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Present Perfect Tense",
        objective: "obj_008",
        text: `
          <h3>Present Perfect</h3>
          <p><strong>Uses:</strong> Past actions with present relevance, life experiences, and unfinished time periods.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + have/has + past participle</li>
              <li><strong>Negative:</strong> Subject + have/has + not + past participle</li>
              <li><strong>Question:</strong> Have/Has + subject + past participle?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I have visited</strong> Paris." (life experience)</li>
              <li>"<strong>She has lived</strong> here since 2010." (unfinished time)</li>
              <li>"<strong>We have just eaten</strong>." (recent past)</li>
              <li>"<strong>He hasn't finished</strong> his homework." (past with present result)</li>
              <li>"<strong>Have you ever been</strong> to Japan?" (life experience question)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Present Perfect is often used with:
            <ul>
              <li><strong>ever/never</strong> (experience)</li>
              <li><strong>already/yet</strong> (completion)</li>
              <li><strong>just</strong> (recent action)</li>
              <li><strong>for/since</strong> (duration)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Present Perfect Continuous",
        objective: "obj_012",
        text: `
          <h3>Present Perfect Continuous</h3>
          <p><strong>Uses:</strong> Actions that started in the past and are still continuing, or recently finished with visible results.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + have/has + been + verb-ing</li>
              <li><strong>Negative:</strong> Subject + have/has + not + been + verb-ing</li>
              <li><strong>Question:</strong> Have/Has + subject + been + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I have been waiting</strong> for an hour." (continuing)</li>
              <li>"<strong>She has been studying</strong> all day." (continuing)</li>
              <li>"<strong>They have been playing</strong> football." (visible result - they're tired)</li>
              <li>"<strong>He has been working</strong> here since 2015." (duration)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>🔄 Compare:</strong>
            <ul>
              <li>Present Perfect: "I have read the book." (completed action)</li>
              <li>Present Perfect Continuous: "I have been reading the book." (ongoing action)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Past Simple Tense",
        objective: "obj_003",
        text: `
          <h3>Past Simple</h3>
          <p><strong>Uses:</strong> Completed actions in the past, past habits, and past facts.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + verb(past)</li>
              <li><strong>Negative:</strong> Subject + did + not + base verb</li>
              <li><strong>Question:</strong> Did + subject + base verb?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Regular Verbs:</strong>
            <ul>
              <li>"<strong>I walked</strong> to school." (walk + ed)</li>
              <li>"<strong>She played</strong> tennis." (play + ed)</li>
              <li>"<strong>They studied</strong> hard." (study → studied)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Irregular Verbs:</strong>
            <ul>
              <li>"<strong>I went</strong> to the store." (go → went)</li>
              <li>"<strong>She ate</strong> dinner." (eat → ate)</li>
              <li>"<strong>He saw</strong> a movie." (see → saw)</li>
              <li>"<strong>We bought</strong> a car." (buy → bought)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Past Simple uses time expressions like:
            <ul>
              <li>yesterday, last week, in 2020, two days ago</li>
              <li>Example: "I visited London <strong>last year</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Past Continuous Tense",
        objective: "obj_006",
        text: `
          <h3>Past Continuous</h3>
          <p><strong>Uses:</strong> Ongoing actions in the past, interrupted actions, and background descriptions.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + was/were + verb-ing</li>
              <li><strong>Negative:</strong> Subject + was/were + not + verb-ing</li>
              <li><strong>Question:</strong> Was/Were + subject + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I was watching</strong> TV at 8 PM." (ongoing at a specific time)</li>
              <li>"<strong>She was sleeping</strong> when I called." (interrupted)</li>
              <li>"<strong>They were playing</strong> football all afternoon." (ongoing period)</li>
              <li>"<strong>He was reading</strong> a book while she was cooking." (parallel actions)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>🔄 Compare:</strong>
            <ul>
              <li>Past Simple: "I walked to school." (completed action)</li>
              <li>Past Continuous: "I was walking to school when it started raining." (interrupted action)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Past Perfect Tense",
        objective: "obj_009",
        text: `
          <h3>Past Perfect</h3>
          <p><strong>Uses:</strong> Actions completed before another past action or time.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + had + past participle</li>
              <li><strong>Negative:</strong> Subject + had + not + past participle</li>
              <li><strong>Question:</strong> Had + subject + past participle?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I had finished</strong> my homework before dinner." (completed before another past action)</li>
              <li>"<strong>She had left</strong> when I arrived." (left before arrival)</li>
              <li>"<strong>They had already eaten</strong> when we offered food." (completed earlier)</li>
              <li>"<strong>He had studied</strong> English before moving to London." (studied before moving)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Use Past Perfect to show the <strong>order</strong> of past events:
            <ul>
              <li>Past Perfect = earlier event</li>
              <li>Past Simple = later event</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Past Perfect Continuous",
        objective: "obj_012",
        text: `
          <h3>Past Perfect Continuous</h3>
          <p><strong>Uses:</strong> Actions that were ongoing before another past action or time.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + had + been + verb-ing</li>
              <li><strong>Negative:</strong> Subject + had + not + been + verb-ing</li>
              <li><strong>Question:</strong> Had + subject + been + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I had been waiting</strong> for two hours when she finally arrived." (ongoing before another action)</li>
              <li>"<strong>She had been studying</strong> all day, so she was tired." (ongoing with visible result)</li>
              <li>"<strong>They had been playing</strong> for hours when it started raining." (duration before interruption)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Future Simple Tense",
        objective: "obj_004",
        text: `
          <h3>Future Simple</h3>
          <p><strong>Uses:</strong> Predictions, promises, decisions, and offers.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + will + base verb</li>
              <li><strong>Negative:</strong> Subject + will + not + base verb</li>
              <li><strong>Question:</strong> Will + subject + base verb?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I will call</strong> you tomorrow." (decision)</li>
              <li>"<strong>She will be</strong> happy." (prediction)</li>
              <li>"<strong>We will help</strong> you." (promise/offer)</li>
              <li>"<strong>It will rain</strong> later." (prediction)</li>
              <li>"<strong>Will you come</strong> to the party?" (question)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Note:</strong> "Shall" can be used with I/We for offers and suggestions:
            <ul>
              <li>"Shall I help you?" (offer)</li>
              <li>"Shall we go?" (suggestion)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Future Continuous Tense",
        objective: "obj_007",
        text: `
          <h3>Future Continuous</h3>
          <p><strong>Uses:</strong> Ongoing actions in the future, future arrangements, and polite questions.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + will + be + verb-ing</li>
              <li><strong>Negative:</strong> Subject + will + not + be + verb-ing</li>
              <li><strong>Question:</strong> Will + subject + be + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I will be working</strong> at 9 AM tomorrow." (ongoing at a specific time)</li>
              <li>"<strong>She will be studying</strong> all evening." (ongoing period)</li>
              <li>"<strong>They will be arriving</strong> soon." (arrangement)</li>
              <li>"<strong>Will you be staying</strong> long?" (polite question)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Future Perfect Tense",
        objective: "obj_010",
        text: `
          <h3>Future Perfect</h3>
          <p><strong>Uses:</strong> Actions that will be completed before a specific future time.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + will + have + past participle</li>
              <li><strong>Negative:</strong> Subject + will + not + have + past participle</li>
              <li><strong>Question:</strong> Will + subject + have + past participle?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I will have finished</strong> the project by Friday." (completed before Friday)</li>
              <li>"<strong>She will have left</strong> by the time you arrive." (completed before arrival)</li>
              <li>"<strong>They will have graduated</strong> by next year." (completed before next year)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Future Perfect Continuous",
        objective: "obj_012",
        text: `
          <h3>Future Perfect Continuous</h3>
          <p><strong>Uses:</strong> Actions that will be ongoing up to a specific future time.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <ul>
              <li><strong>Affirmative:</strong> Subject + will + have + been + verb-ing</li>
              <li><strong>Negative:</strong> Subject + will + not + have + been + verb-ing</li>
              <li><strong>Question:</strong> Will + subject + have + been + verb-ing?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"By December, <strong>I will have been working</strong> here for 10 years." (duration up to future time)</li>
              <li>"By the time she retires, <strong>she will have been teaching</strong> for 30 years." (ongoing until retirement)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⏰ The 12 Tenses at a Glance</h4>
          <table class="w-full text-sm">
            <tr><th>Time</th><th>Simple</th><th>Continuous</th><th>Perfect</th><th>Perfect Continuous</th></tr>
            <tr><td><strong>Past</strong></td><td>walked</td><td>was walking</td><td>had walked</td><td>had been walking</td></tr>
            <tr><td><strong>Present</strong></td><td>walk/walks</td><td>am/is/are walking</td><td>have/has walked</td><td>have/has been walking</td></tr>
            <tr><td><strong>Future</strong></td><td>will walk</td><td>will be walking</td><td>will have walked</td><td>will have been walking</td></tr>
          </table>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Simple = basic, general time</li>
            <li>✓ Continuous = ongoing action</li>
            <li>✓ Perfect = completed action</li>
            <li>✓ Perfect Continuous = ongoing + duration</li>
            <li>✓ Use time markers to identify tenses</li>
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
        misconception: "Present Simple can describe all present actions",
        correction: "Use Present Continuous for actions happening at this moment",
        explanation: "Present Simple is for habits and facts. Present Continuous is for actions happening NOW."
      },
      {
        id: "mis_002",
        misconception: "Past Simple and Present Perfect are the same",
        correction: "Past Simple = completed past action (specific time). Present Perfect = past with present connection",
        explanation: "Use Past Simple for finished actions (I visited Paris in 2019). Use Present Perfect for experiences (I have visited Paris)."
      },
      {
        id: "mis_003",
        misconception: "Future Simple is the only future tense",
        correction: "There are 4 future tenses: Simple, Continuous, Perfect, Perfect Continuous",
        explanation: "Each future tense has a specific use for expressing different future actions."
      },
      {
        id: "mis_004",
        misconception: "Will and going to mean the same thing",
        correction: "Will = spontaneous decision/prediction. Going to = planned action",
        explanation: "Use 'will' for sudden decisions (I'll take it). Use 'going to' for plans (I'm going to study law)."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Writing Stories",
        description: "Using different past tenses creates more engaging narratives.",
        example: "Use Past Simple for main events, Past Continuous for background, Past Perfect to show sequence."
      },
      {
        id: "app_002",
        title: "Business Communication",
        description: "Proper tense usage in emails and reports shows professionalism.",
        example: "Use Present Perfect for completed actions, Future Simple for promises, Future Continuous for arrangements."
      },
      {
        id: "app_003",
        title: "Academic Writing",
        description: "Research papers require precise tense usage for clarity.",
        example: "Use Present Simple for facts, Present Perfect for literature review, Past Simple for methodology."
      },
      {
        id: "app_004",
        title: "News Reporting",
        description: "Journalists use various tenses to report events accurately.",
        example: "Use Past Simple for yesterday's events, Present Perfect for breaking news, Future Simple for predictions."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Tense", definition: "The form of a verb that shows the time of an action." },
    { term: "Simple Tense", definition: "Basic verb form showing a completed or general action." },
    { term: "Continuous Tense", definition: "Verb form showing an ongoing action (ing)." },
    { term: "Perfect Tense", definition: "Verb form showing a completed action (have/has/had + past participle)." },
    { term: "Past Participle", definition: "The third form of a verb (e.g., walked, eaten, gone)." },
    { term: "Regular Verb", definition: "A verb that ends in -ed in the past tense (e.g., walk → walked)." },
    { term: "Irregular Verb", definition: "A verb that changes form in the past tense (e.g., go → went)." },
    { term: "Auxiliary Verb", definition: "A helping verb (e.g., have, be, will, do)." }
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
      question: "What are the three main tenses in English?",
      type: "multiple_choice",
      options: ["Present, Past, Future", "Simple, Continuous, Perfect", "Past, Present Perfect, Future", "All of the above"],
      answer: "Present, Past, Future",
      explanation: "The three main tenses are Present, Past, and Future. Simple, Continuous, and Perfect are aspects."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which sentence is in Present Simple tense?",
      type: "multiple_choice",
      options: ["She is reading", "She reads", "She has read", "She is reading"],
      answer: "She reads",
      explanation: "'She reads' is Present Simple. It shows a regular action."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Choose the Past Simple form: 'I _____ to the store yesterday.'",
      type: "multiple_choice",
      options: ["go", "went", "gone", "going"],
      answer: "went",
      explanation: "'Went' is the past simple form of 'go'. The past tense is used because it happened yesterday."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "Which shows Future Simple?",
      type: "multiple_choice",
      options: ["I went", "I have gone", "I will go", "I am going"],
      answer: "I will go",
      explanation: "'I will go' is Future Simple. 'Will' + base verb indicates future action."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Complete: 'Listen! She _____ the piano.'",
      type: "multiple_choice",
      options: ["plays", "played", "is playing", "has played"],
      answer: "is playing",
      explanation: "'Listen!' indicates an action happening now, so we use Present Continuous."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Complete: 'I _____ when he called.'",
      type: "multiple_choice",
      options: ["slept", "was sleeping", "have slept", "had slept"],
      answer: "was sleeping",
      explanation: "The action was ongoing (sleeping) when another action interrupted (called). Use Past Continuous."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Complete: 'At 10 AM tomorrow, I _____ my presentation.'",
      type: "multiple_choice",
      options: ["will give", "will be giving", "have given", "am giving"],
      answer: "will be giving",
      explanation: "At a specific future time (10 AM tomorrow), an action will be in progress. Use Future Continuous."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "Complete: 'I _____ never _____ sushi before.'",
      type: "multiple_choice",
      options: ["have, eaten", "had, eaten", "was, eating", "will, eat"],
      answer: "have, eaten",
      explanation: "Use Present Perfect for life experiences (ever/never)."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "medium",
      question: "Complete: 'She _____ (leave) before I arrived.'",
      type: "multiple_choice",
      options: ["left", "has left", "was leaving", "had left"],
      answer: "had left",
      explanation: "The leaving happened before the arrival. Use Past Perfect for the earlier action."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "medium",
      question: "Complete: 'By Friday, I _____ (finish) my project.'",
      type: "multiple_choice",
      options: ["will finish", "will be finishing", "will have finished", "am finishing"],
      answer: "will have finished",
      explanation: "The project will be completed by Friday. Use Future Perfect."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Identify the tense: 'She has been waiting for two hours.'",
      type: "multiple_choice",
      options: ["Present Perfect", "Present Perfect Continuous", "Past Perfect", "Future Perfect"],
      answer: "Present Perfect Continuous",
      explanation: "'Has been waiting' shows an action that started in the past and continues to the present."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "Identify the tense: 'He will have finished by then.'",
      type: "multiple_choice",
      options: ["Future Simple", "Future Perfect", "Future Continuous", "Future Perfect Continuous"],
      answer: "Future Perfect",
      explanation: "'Will have finished' is Future Perfect - an action that will be completed before a future time."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which sentence has correct tense consistency?",
      type: "multiple_choice",
      options: [
        "I was driving when I see him.",
        "I am driving when I saw him.",
        "I was driving when I saw him.",
        "I will drive when I saw him."
      ],
      answer: "I was driving when I saw him.",
      explanation: "Both actions are in the past: Past Continuous (was driving) + Past Simple (saw)."
    },
    {
      id: "prac_014",
      objective: "obj_011",
      difficulty: "hard",
      question: "What tense is: 'By next year, we will have been living here for a decade.'",
      type: "multiple_choice",
      options: ["Future Perfect", "Future Perfect Continuous", "Future Continuous", "Present Perfect Continuous"],
      answer: "Future Perfect Continuous",
      explanation: "This shows an action continuing up to a future time (will have been living)."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which sentence is in Present Perfect?",
      type: "multiple_choice",
      options: ["I have been studying", "I studied", "I have studied", "I am studying"],
      answer: "I have studied",
      explanation: "'Have studied' is Present Perfect. 'Have been studying' is Present Perfect Continuous."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "Choose the correct form: 'If I _____ you, I would accept.'",
      type: "multiple_choice",
      options: ["am", "was", "were", "had been"],
      answer: "were",
      explanation: "In conditional sentences, use 'were' for all subjects (subjunctive mood)."
    },
    {
      id: "prac_017",
      objective: "obj_011",
      difficulty: "hard",
      question: "What tense is: 'She will be studying when you arrive.'",
      type: "multiple_choice",
      options: ["Future Simple", "Future Continuous", "Future Perfect", "Present Continuous"],
      answer: "Future Continuous",
      explanation: "'Will be studying' shows an ongoing action at a future time."
    },
    {
      id: "prac_018",
      objective: "obj_012",
      difficulty: "hard",
      question: "Choose the correct sequence: 'After I _____ my homework, I _____ TV.'",
      type: "multiple_choice",
      options: [
        "finished, watched",
        "had finished, watched",
        "have finished, watched",
        "was finishing, watch"
      ],
      answer: "had finished, watched",
      explanation: "Past Perfect for the first action (finished homework), Past Simple for the second (watched TV)."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_tenses",
    title: "Tenses Quiz",
    description: "Test your understanding of all 12 English tenses",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Name the three main tenses.",
        type: "short_answer",
        answer_key: "Present, Past, Future",
        explanation: "The three main tenses are Present, Past, and Future."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What tense is: 'The sun rises in the east.'?",
        type: "short_answer",
        answer_key: "Present Simple",
        explanation: "Facts are expressed in Present Simple tense."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What tense is: 'I walked to school yesterday.'?",
        type: "short_answer",
        answer_key: "Past Simple",
        explanation: "'Yesterday' indicates a completed past action, so Past Simple."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "What tense is: 'I will call you tomorrow.'?",
        type: "short_answer",
        answer_key: "Future Simple",
        explanation: "'Will call' with 'tomorrow' is Future Simple."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Complete: 'Right now, they _____ (play) football.'",
        type: "short_answer",
        answer_key: "are playing",
        explanation: "'Right now' indicates a current action, so Present Continuous."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Complete: 'I _____ (read) when he arrived.'",
        type: "short_answer",
        answer_key: "was reading",
        explanation: "An ongoing past action interrupted by another action. Use Past Continuous."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Complete: 'At 5 PM tomorrow, I _____ (travel) to London.'",
        type: "short_answer",
        answer_key: "will be traveling",
        explanation: "An action in progress at a specific future time. Use Future Continuous."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "Complete: 'I _____ never _____ (try) sushi.'",
        type: "short_answer",
        answer_key: "have, tried",
        explanation: "Life experience with 'never' = Present Perfect."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "medium",
        question: "Complete: 'She _____ (leave) by the time I arrived.'",
        type: "short_answer",
        answer_key: "had left",
        explanation: "The leaving happened before arrival. Use Past Perfect."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "medium",
        question: "Complete: 'By December, I _____ (work) here for 5 years.'",
        type: "short_answer",
        answer_key: "will have worked",
        explanation: "An action completed by a future time. Use Future Perfect."
      },
      {
        id: "ass_011",
        objective: "obj_011",
        difficulty: "hard",
        question: "Identify the tense: 'We have been waiting for an hour.'",
        type: "short_answer",
        answer_key: "Present Perfect Continuous",
        explanation: "An action that started in the past and continues to the present with duration."
      },
      {
        id: "ass_012",
        objective: "obj_012",
        difficulty: "hard",
        question: "Identify the tense and explain its use: 'I will have been studying for three hours by then.'",
        type: "short_answer",
        answer_key: "Future Perfect Continuous",
        explanation: "This shows a continuous action that will have been in progress for a specific duration up to a future time."
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
        "Identify the 12 English tenses",
        "Use each tense correctly in sentences",
        "Maintain tense consistency in writing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Time line overview" },
        { time: "5-15 min", activity: "Direct Instruction - Present tenses" },
        { time: "15-25 min", activity: "Direct Instruction - Past tenses" },
        { time: "25-30 min", activity: "Direct Instruction - Future tenses" },
        { time: "30-40 min", activity: "Guided Practice - Tense identification" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Present, Past, Future",
        // ... full answer key
      },
      assessment: {
        ass_001: "Present, Past, Future",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a timeline of your life using different past and present tenses",
      "Write a story with at least 5 different tenses",
      "Analyze a news article and identify all tenses used",
      "Practice using different future tenses to make predictions",
      "Create tense flashcards with examples"
    ],
    differentiation: {
      struggling: [
        "Start with only 3 main tenses",
        "Use visual timetables",
        "Practice with fill-in-the-blank exercises",
        "Provide cheat sheets with formulas"
      ],
      advanced: [
        "Analyze complex verb structures",
        "Write stories with perfect continuous tenses",
        "Research regional variations in tense usage",
        "Explore tense use in literature"
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
      title: "The 12 Tenses Timeline",
      description: "A comprehensive visual timeline showing all 12 tenses",
      url: "/diagrams/tenses-timeline.png",
      alt: "Timeline showing all 12 English tenses"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Tense Formula Reference Chart",
      description: "Complete reference chart with formulas for each tense",
      url: "/diagrams/tenses-chart.png",
      alt: "Reference chart of all tense formulas"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "When to Use Each Tense",
      description: "Infographic showing uses and time markers for each tense",
      url: "/diagrams/tenses-usage.png",
      alt: "Usage guide for English tenses"
    }
  ]
};