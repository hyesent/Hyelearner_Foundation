// Location: src/data/lessons/core/english_language/grammar/modal_verbs.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_modal_verbs",
  subject: "English Language",
  topic: "Grammar",
  name: "Modal Verbs",
  icon: "🔮",
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
    "Understanding of verbs",
    "Knowledge of tenses",
    "Understanding of sentence structure",
    "Basic vocabulary"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_conditionals",
      name: "Conditionals",
      file: "core/english_language/grammar/conditionals.js"
    },
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
      description: "Define modal verbs and list common modals",
      indicator: "Student can list at least 8 modal verbs"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use 'can' and 'could' for ability and permission",
      indicator: "Student can use can/could correctly in sentences"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use 'may' and 'might' for possibility and permission",
      indicator: "Student can use may/might to express possibility"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use 'must' and 'have to' for obligation",
      indicator: "Student can express necessity and obligation correctly"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use 'should' and 'ought to' for advice",
      indicator: "Student can give and ask for advice using should/ought to"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use 'will' and 'would' for predictions and offers",
      indicator: "Student can make predictions and offers using will/would"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Distinguish between different modal verbs for similar meanings",
      indicator: "Student can choose the appropriate modal for context"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use modal perfects (must have, should have, etc.)",
      indicator: "Student can use modal perfects to express past possibilities and regrets"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Use modals in negative and question forms",
      indicator: "Student can form negative and interrogative sentences with modals"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Use semi-modals (need to, have to, used to)",
      indicator: "Student can use semi-modals in various contexts"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Use modals in conditional sentences",
      indicator: "Student can use modals correctly in conditional structures"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze and correct modal verb errors in context",
      indicator: "Student can identify and fix mistakes with modal verbs"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Modal Verbs",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to use all modal verbs correctly in different contexts."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Modal Verbs?</h2>
      <p><strong>Modal verbs</strong> are auxiliary (helping) verbs that express <strong>possibility, necessity, ability, permission, or obligation</strong>. They modify the meaning of the main verb.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-3 rounded text-center">
          <h4>🔵 Ability</h4>
          <p>can, could</p>
          <p><em>"I <strong>can</strong> swim."</em></p>
        </div>
        <div class="bg-green-50 p-3 rounded text-center">
          <h4>🟢 Possibility</h4>
          <p>may, might, could</p>
          <p><em>"It <strong>might</strong> rain."</em></p>
        </div>
        <div class="bg-yellow-50 p-3 rounded text-center">
          <h4>🟡 Necessity</h4>
          <p>must, have to</p>
          <p><em>"You <strong>must</strong> study."</em></p>
        </div>
        <div class="bg-purple-50 p-3 rounded text-center">
          <h4>🟣 Advice</h4>
          <p>should, ought to</p>
          <p><em>"You <strong>should</strong> rest."</em></p>
        </div>
        <div class="bg-red-50 p-3 rounded text-center">
          <h4>🔴 Permission</h4>
          <p>may, can, could</p>
          <p><em>"<strong>May</strong> I come in?"</em></p>
        </div>
        <div class="bg-orange-50 p-3 rounded text-center">
          <h4>🟠 Prediction</h4>
          <p>will, would</p>
          <p><em>"It <strong>will</strong> be fine."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Rules</h4>
        <ul>
          <li>✓ Modal verbs <strong>don't</strong> change form (no -s, -ed, -ing)</li>
          <li>✓ Modal verbs are followed by the <strong>base form</strong> of the main verb</li>
          <li>✓ Modal verbs don't need 'to' (except 'ought to')</li>
          <li>✓ Modal verbs are used to express the speaker's attitude</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Ability: Can and Could",
        objective: "obj_002",
        text: `
          <h3>Can and Could</h3>
          <p>Use <strong>can</strong> for present ability and <strong>could</strong> for past ability or polite requests.</p>
          
          <div class="example-box">
            <strong>📌 Can (Present Ability):</strong>
            <ul>
              <li>"I <strong>can</strong> speak three languages."</li>
              <li>"She <strong>can</strong> drive a car."</li>
              <li>"They <strong>can't</strong> (cannot) come to the party."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Could (Past Ability):</strong>
            <ul>
              <li>"When I was young, I <strong>could</strong> run fast."</li>
              <li>"She <strong>could</strong> play the piano when she was five."</li>
              <li>"I <strong>couldn't</strong> (could not) swim when I was a child."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Could (Polite Requests):</strong>
            <ul>
              <li>"<strong>Could</strong> you help me, please?"</li>
              <li>"<strong>Could</strong> I borrow your pen?"</li>
              <li>"<strong>Could</strong> you open the window?"</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> 'Can' is less formal than 'could' for requests. Use 'could' in formal situations.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Possibility: May, Might, Could",
        objective: "obj_003",
        text: `
          <h3>May, Might, and Could</h3>
          <p>Use <strong>may, might,</strong> and <strong>could</strong> to express possibility. They show different levels of certainty.</p>
          
          <div class="example-box">
            <strong>📌 May (More certain):</strong>
            <ul>
              <li>"It <strong>may</strong> rain tomorrow." (50-60% sure)</li>
              <li>"She <strong>may</strong> be at home."</li>
              <li>"He <strong>may</strong> not come to the meeting."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Might (Less certain):</strong>
            <ul>
              <li>"It <strong>might</strong> rain tomorrow." (30-40% sure)</li>
              <li>"She <strong>might</strong> be at the library."</li>
              <li>"We <strong>might</strong> go to the beach."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Could (Possibility):</strong>
            <ul>
              <li>"It <strong>could</strong> rain later." (possible)</li>
              <li>"He <strong>could</strong> be the winner."</li>
              <li>"She <strong>could</strong> be lying."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 May (Permission - Formal):</strong>
            <ul>
              <li>"<strong>May</strong> I come in?"</li>
              <li>"<strong>May</strong> I use your phone?"</li>
              <li>"You <strong>may</strong> leave early."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Obligation: Must and Have to",
        objective: "obj_004",
        text: `
          <h3>Must and Have to</h3>
          <p>Use <strong>must</strong> and <strong>have to</strong> to express obligation or necessity.</p>
          
          <div class="example-box">
            <strong>📌 Must (Internal obligation - speaker's feeling):</strong>
            <ul>
              <li>"I <strong>must</strong> study harder." (I feel I need to)</li>
              <li>"You <strong>must</strong> see that movie!" (I recommend it)</li>
              <li>"We <strong>must</strong> leave now." (I decide)</li>
              <li>"You <strong>mustn't</strong> (must not) smoke here." (prohibition)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Have to (External obligation - rules/laws):</strong>
            <ul>
              <li>"I <strong>have to</strong> work on Saturday." (my boss requires it)</li>
              <li>"You <strong>have to</strong> wear a seatbelt." (the law requires it)</li>
              <li>"She <strong>has to</strong> pay taxes." (it's required)</li>
              <li>"They <strong>don't have to</strong> come if they don't want to." (no obligation)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Comparison:</strong>
            <ul>
              <li><strong>Must:</strong> "I <strong>must</strong> call my mother." (I feel it's important)</li>
              <li><strong>Have to:</strong> "I <strong>have to</strong> call my mother." (she expects my call)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>'Must' is stronger than 'have to'</li>
              <li>'Must' is more personal; 'have to' is more impersonal</li>
              <li>'Must' has no past tense; use 'had to' for past obligations</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Advice: Should and Ought to",
        objective: "obj_005",
        text: `
          <h3>Should and Ought to</h3>
          <p>Use <strong>should</strong> and <strong>ought to</strong> to give advice, make recommendations, or express what is right.</p>
          
          <div class="example-box">
            <strong>📌 Should (Advice/Recommendation):</strong>
            <ul>
              <li>"You <strong>should</strong> see a doctor." (my advice)</li>
              <li>"She <strong>should</strong> study more." (recommendation)</li>
              <li>"They <strong>should</strong> arrive soon." (expectation)</li>
              <li>"You <strong>shouldn't</strong> (should not) eat too much sugar." (advice against)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Ought to (Similar to should):</strong>
            <ul>
              <li>"You <strong>ought to</strong> apologize." (you should)</li>
              <li>"She <strong>ought to</strong> get more sleep." (recommendation)</li>
              <li>"We <strong>ought to</strong> help them." (moral obligation)</li>
              <li>"He <strong>ought not to</strong> be late." (shouldn't)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Should vs Ought to:</strong>
            <ul>
              <li><strong>Should</strong> is more common and less formal</li>
              <li><strong>Ought to</strong> is less common and more formal</li>
              <li>Both express advice or moral obligation</li>
              <li>"You <strong>should</strong> tell her." (more common)</li>
              <li>"You <strong>ought to</strong> tell her." (more formal)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Predictions and Offers: Will and Would",
        objective: "obj_006",
        text: `
          <h3>Will and Would</h3>
          <p>Use <strong>will</strong> for future predictions, promises, and offers. Use <strong>would</strong> for past habits, polite requests, and hypothetical situations.</p>
          
          <div class="example-box">
            <strong>📌 Will (Predictions):</strong>
            <ul>
              <li>"It <strong>will</strong> rain tomorrow." (prediction)</li>
              <li>"She <strong>will</strong> be happy." (future state)</li>
              <li>"They <strong>will</strong> arrive at 5 PM." (future action)</li>
              <li>"You <strong>won't</strong> (will not) regret it." (prediction)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Will (Promises and Offers):</strong>
            <ul>
              <li>"I <strong>will</strong> help you." (offer)</li>
              <li>"I <strong>will</strong> call you later." (promise)</li>
              <li>"<strong>Will</strong> you marry me?" (proposal)</li>
              <li>"I <strong>won't</strong> tell anyone." (promise)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Would (Past Habits):</strong>
            <ul>
              <li>"When I was young, I <strong>would</strong> play outside every day." (past habit)</li>
              <li>"She <strong>would</strong> always sing in the shower." (past habit)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Would (Polite Requests):</strong>
            <ul>
              <li>"<strong>Would</strong> you help me, please?"</li>
              <li>"<strong>Would</strong> you like some coffee?"</li>
              <li>"<strong>Would</strong> you mind closing the door?"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Would (Hypothetical):</strong>
            <ul>
              <li>"If I were rich, I <strong>would</strong> travel the world."</li>
              <li>"I <strong>would</strong> help if I could."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Modal Perfects",
        objective: "obj_008",
        text: `
          <h3>Modal Perfects</h3>
          <p>Modal perfects use <strong>modal + have + past participle</strong> to talk about the past.</p>
          
          <div class="example-box">
            <strong>📌 Must have (Strong deduction about the past):</strong>
            <ul>
              <li>"She <strong>must have</strong> left already." (I'm sure she left)</li>
              <li>"They <strong>must have</strong> arrived by now." (I'm sure they arrived)</li>
              <li>"He <strong>must have</strong> been tired." (strong deduction)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Might/May have (Possibility about the past):</strong>
            <ul>
              <li>"She <strong>might have</strong> forgotten the meeting." (possibly forgot)</li>
              <li>"He <strong>may have</strong> called while I was out." (possibly called)</li>
              <li>"They <strong>could have</strong> left earlier." (possible past action)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Should have (Regret/Advice about the past):</strong>
            <ul>
              <li>"I <strong>should have</strong> studied harder." (regret)</li>
              <li>"You <strong>should have</strong> told me." (advice in the past)</li>
              <li>"We <strong>shouldn't have</strong> eaten so much." (regret)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Would have (Hypothetical past):</strong>
            <ul>
              <li>"If I had known, I <strong>would have</strong> come." (past hypothetical)</li>
              <li>"She <strong>would have</strong> helped if she could." (past hypothetical)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Could have (Past ability/possibility):</strong>
            <ul>
              <li>"I <strong>could have</strong> won the race." (had the ability but didn't)</li>
              <li>"She <strong>could have</strong> told me." (possible but didn't)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Semi-Modals",
        objective: "obj_010",
        text: `
          <h3>Semi-Modals</h3>
          <p><strong>Semi-modals</strong> are verbs that behave like modals but have different forms.</p>
          
          <div class="example-box">
            <strong>📌 Need to (Necessity):</strong>
            <ul>
              <li>"I <strong>need to</strong> go now."</li>
              <li>"She <strong>needs to</strong> study more."</li>
              <li>"You <strong>don't need to</strong> worry." (no necessity)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Have to (Obligation):</strong>
            <ul>
              <li>"I <strong>have to</strong> work today."</li>
              <li>"She <strong>has to</strong> be there."</li>
              <li>"They <strong>don't have to</strong> come." (no obligation)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Used to (Past habits/states):</strong>
            <ul>
              <li>"I <strong>used to</strong> play the guitar." (past habit)</li>
              <li>"She <strong>used to</strong> live in Paris." (past state)</li>
              <li>"We <strong>used to</strong> be friends." (past state)</li>
              <li>❌ "I use to play." (incorrect)</li>
              <li>✅ "I used to play." (correct)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Semi-modals change form for person (need to → needs to)</li>
              <li>Semi-modals use 'to' before the main verb</li>
              <li>'Used to' is only used for past habits/states</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Modals in Questions and Negatives",
        objective: "obj_009",
        text: `
          <h3>Questions and Negatives with Modals</h3>
          <p>Forming questions and negatives with modals is straightforward.</p>
          
          <div class="example-box">
            <strong>📌 Questions:</strong>
            <ul>
              <li><strong>Can</strong> you help me?</li>
              <li><strong>May</strong> I come in?</li>
              <li><strong>Should</strong> we wait?</li>
              <li><strong>Will</strong> they arrive soon?</li>
              <li><strong>Could</strong> you repeat that?</li>
              <li><strong>Would</strong> you like some tea?</li>
              <li><strong>Must</strong> I finish this today?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Negatives:</strong>
            <ul>
              <li>I <strong>can't</strong> (cannot) swim.</li>
              <li>You <strong>mustn't</strong> (must not) smoke.</li>
              <li>She <strong>shouldn't</strong> (should not) worry.</li>
              <li>They <strong>won't</strong> (will not) come.</li>
              <li>He <strong>couldn't</strong> (could not) attend.</li>
              <li>We <strong>might not</strong> go.</li>
              <li>I <strong>wouldn't</strong> (would not) do that.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Remember:</strong> 
            <ul>
              <li>Modal + subject + main verb (for questions)</li>
              <li>Subject + modal + not + main verb (for negatives)</li>
              <li>'Not' comes after the modal</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔮 Modal Verbs at a Glance</h4>
          <ul>
            <li><strong>Can/Could:</strong> Ability, possibility, permission</li>
            <li><strong>May/Might:</strong> Possibility, permission</li>
            <li><strong>Must/Have to:</strong> Obligation, necessity</li>
            <li><strong>Should/Ought to:</strong> Advice, recommendation</li>
            <li><strong>Will/Would:</strong> Prediction, offers, past habits</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Modals don't change form</li>
            <li>✓ Modals + base verb</li>
            <li>✓ Modals express attitude</li>
            <li>✓ Use modal perfects for the past</li>
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
        misconception: "Must and have to mean exactly the same thing",
        correction: "Must = internal obligation; Have to = external obligation",
        explanation: "Must is personal feeling; have to comes from rules or others."
      },
      {
        id: "mis_002",
        misconception: "Can and may are always interchangeable",
        correction: "Can = ability/informal permission; May = formal permission/possibility",
        explanation: "May is more formal and polite for permissions."
      },
      {
        id: "mis_003",
        misconception: "Modal verbs always take 'to' after them",
        correction: "Most modals take the base verb without 'to' (except ought to)",
        explanation: "She must go (not must to go). Only 'ought to' uses 'to.'"
      },
      {
        id: "mis_004",
        misconception: "Modal verbs can be used in all tenses",
        correction: "Modals are limited in tense forms; use modal perfects for the past",
        explanation: "Must → must have, can → could have, will → would have."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Professional Communication",
        description: "Modal verbs help express ideas politely and professionally.",
        example: "Use 'could' and 'would' for polite requests in business emails."
      },
      {
        id: "app_002",
        title: "Academic Writing",
        description: "Modals help express degrees of certainty in academic work.",
        example: "Use 'may' and 'might' in research papers to show caution."
      },
      {
        id: "app_003",
        title: "Medical/Health Advice",
        description: "Doctors use modals to give advice and express necessity.",
        example: "'You should rest' or 'You must take this medication daily.'"
      },
      {
        id: "app_004",
        title: "Law and Regulations",
        description: "Modals express obligations and permissions in legal texts.",
        example: "'You must not park here' or 'You may use this facility.'"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Modal Verb", definition: "A helping verb that expresses ability, possibility, necessity, or permission." },
    { term: "Ability", definition: "Being able to do something (expressed by can/could)." },
    { term: "Possibility", definition: "Something that may happen (expressed by may/might/could)." },
    { term: "Obligation", definition: "Something you must do (expressed by must/have to)." },
    { term: "Permission", definition: "Being allowed to do something (expressed by may/can)." },
    { term: "Advice", definition: "A recommendation about what to do (expressed by should/ought to)." },
    { term: "Modal Perfect", definition: "Modal + have + past participle (expresses past possibility/regret)." },
    { term: "Semi-Modal", definition: "A verb that functions like a modal but changes form (need to, have to, used to)." }
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
      question: "Which of the following is a modal verb?",
      type: "multiple_choice",
      options: ["run", "can", "eating", "beautiful"],
      answer: "can",
      explanation: "'Can' is a modal verb expressing ability or possibility."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Complete: 'I ____ speak Spanish.' (ability)",
      type: "multiple_choice",
      options: ["can", "may", "must", "should"],
      answer: "can",
      explanation: "'Can' expresses present ability."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Complete: 'When I was young, I ____ run fast.' (past ability)",
      type: "multiple_choice",
      options: ["can", "could", "may", "must"],
      answer: "could",
      explanation: "'Could' expresses past ability."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Complete: 'It ____ rain tomorrow.' (possibility)",
      type: "multiple_choice",
      options: ["can", "must", "may", "will"],
      answer: "may",
      explanation: "'May' expresses possibility."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Complete: 'You ____ wear a seatbelt. (law)'",
      type: "multiple_choice",
      options: ["must", "have to", "should", "may"],
      answer: "have to",
      explanation: "'Have to' expresses external obligation (the law requires it)."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Complete: 'I ____ study harder. (I feel it's necessary)'",
      type: "multiple_choice",
      options: ["must", "have to", "can", "may"],
      answer: "must",
      explanation: "'Must' expresses internal obligation (the speaker feels it's necessary)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Complete: 'You ____ see a doctor. (advice)'",
      type: "multiple_choice",
      options: ["must", "should", "have to", "can"],
      answer: "should",
      explanation: "'Should' is used to give advice."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Complete: 'I ____ help you with that. (offer)'",
      type: "multiple_choice",
      options: ["will", "can", "must", "should"],
      answer: "will",
      explanation: "'Will' is used to make offers."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Complete: 'When I was young, I ____ visit my grandmother every Sunday.' (past habit)",
      type: "multiple_choice",
      options: ["will", "would", "should", "must"],
      answer: "would",
      explanation: "'Would' expresses past habits."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which modal expresses the strongest obligation?",
      type: "multiple_choice",
      options: ["should", "must", "may", "can"],
      answer: "must",
      explanation: "'Must' expresses the strongest obligation."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Complete: 'She ____ left already. (I'm sure)'",
      type: "multiple_choice",
      options: ["must have", "might have", "should have", "could have"],
      answer: "must have",
      explanation: "'Must have' expresses strong certainty about a past action."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Complete: 'I ____ studied harder. (regret)'",
      type: "multiple_choice",
      options: ["must have", "should have", "may have", "can have"],
      answer: "should have",
      explanation: "'Should have' expresses regret about a past action."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Complete: 'He ____ forgotten the appointment. (possibility)'",
      type: "multiple_choice",
      options: ["must have", "should have", "might have", "have to"],
      answer: "might have",
      explanation: "'Might have' expresses past possibility."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Complete: 'I ____ play the piano when I was a child. (past habit)'",
      type: "multiple_choice",
      options: ["used to", "would to", "used", "would used"],
      answer: "used to",
      explanation: "'Used to' expresses past habits or states."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Choose the correct negative: 'You ____ smoke here.' (prohibition)",
      type: "multiple_choice",
      options: ["mustn't", "don't have to", "shouldn't", "may not"],
      answer: "mustn't",
      explanation: "'Mustn't' expresses prohibition."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'She must to go to the store.'",
      type: "multiple_choice",
      options: [
        "She must to go",
        "She must go",
        "She must going",
        "She must went"
      ],
      answer: "She must go",
      explanation: "Modals are followed by the base verb (without 'to')."
    },
    {
      id: "prac_017",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'I can to speak English.'",
      type: "multiple_choice",
      options: [
        "I can to speak",
        "I can speak",
        "I could speak",
        "I can speaking"
      ],
      answer: "I can speak",
      explanation: "Modals are followed by the base verb (without 'to')."
    },
    {
      id: "prac_018",
      objective: "obj_011",
      difficulty: "hard",
      question: "Complete: 'If I had money, I ____ travel the world.'",
      type: "multiple_choice",
      options: ["will", "would", "should", "must"],
      answer: "would",
      explanation: "'Would' is used in hypothetical situations (second conditional)."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_modal_verbs",
    title: "Modal Verbs Quiz",
    description: "Test your understanding of modal verbs",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "List 8 modal verbs.",
        type: "short_answer",
        answer_key: "can, could, may, might, must, shall, should, will, would (any 8)",
        explanation: "Common modals include: can, could, may, might, must, shall, should, will, would."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Complete: 'She ____ speak three languages.' (ability)",
        type: "short_answer",
        answer_key: "can",
        explanation: "'Can' expresses present ability."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Complete: 'It ____ be true.' (possibility)",
        type: "short_answer",
        answer_key: "may/might/could",
        explanation: "Any of these modals expresses possibility."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Complete: 'You ____ stop at the red light.' (law)",
        type: "short_answer",
        answer_key: "have to/must",
        explanation: "Both express obligation from law."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Complete: 'You ____ eat more vegetables.' (advice)",
        type: "short_answer",
        answer_key: "should/ought to",
        explanation: "Both express advice."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Complete: 'I ____ help you with your homework.' (offer)",
        type: "short_answer",
        answer_key: "will/can",
        explanation: "Both can express offers."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "Complete: 'She ____ forgotten her keys.' (I'm certain)",
        type: "short_answer",
        answer_key: "must have",
        explanation: "'Must have' expresses strong certainty about the past."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Complete: 'I ____ called you yesterday.' (regret)",
        type: "short_answer",
        answer_key: "should have",
        explanation: "'Should have' expresses regret about a past action."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Complete: 'I ____ live in New York, but now I live in London.' (past state)",
        type: "short_answer",
        answer_key: "used to",
        explanation: "'Used to' expresses past states."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Correct this sentence: 'He must to finish his homework.'",
        type: "short_answer",
        answer_key: "He must finish his homework.",
        explanation: "Modals are followed by the base verb without 'to.'"
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
        "Identify modal verbs and their uses",
        "Use modal verbs correctly in sentences",
        "Express ability, possibility, obligation, and advice"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are modals?" },
        { time: "5-15 min", activity: "Direct Instruction - Types of Modals" },
        { time: "15-25 min", activity: "Direct Instruction - Modal Perfects" },
        { time: "25-35 min", activity: "Guided Practice - Exercises" },
        { time: "35-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "can",
        // ... full answer key
      },
      assessment: {
        ass_001: "can, could, may, might, must, shall, should, will, would",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a dialogue using 10 different modal verbs",
      "Write a paragraph giving advice using modals",
      "Analyze modal usage in a news article",
      "Create a modal verb poster with examples"
    ],
    differentiation: {
      struggling: [
        "Start with 3 main modals (can, must, should)",
        "Use visual aids for each function",
        "Provide formula templates",
        "Practice with fill-in-the-blank exercises"
      ],
      advanced: [
        "Analyze subtle differences between modals",
        "Write about the cultural aspects of modals",
        "Create an advanced modal exercise",
        "Research modal usage in different English varieties"
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
      title: "Modal Verbs Functions",
      description: "Diagram showing different functions of modal verbs",
      url: "/diagrams/modals-functions.png",
      alt: "Functions of modal verbs"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Modal Verb Comparison Chart",
      description: "Chart comparing all modal verbs with examples",
      url: "/diagrams/modals-chart.png",
      alt: "Comparison chart of modal verbs"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Modal Perfects Guide",
      description: "Infographic explaining modal perfects",
      url: "/diagrams/modal-perfects.png",
      alt: "Guide to modal perfects"
    }
  ]
};