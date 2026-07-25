// Location: src/data/lessons/core/english_language/grammar/speech.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_speech",
  subject: "English Language",
  topic: "Grammar",
  name: "Direct and Indirect Speech",
  icon: "💬",
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
    "Knowledge of pronouns",
    "Understanding of sentence structure",
    "Knowledge of time expressions"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_modal_verbs",
      name: "Modal Verbs",
      file: "core/english_language/grammar/modal_verbs.js"
    },
    {
      id: "eng_lesson_conditionals",
      name: "Conditionals",
      file: "core/english_language/grammar/conditionals.js"
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
      description: "Define direct and indirect speech",
      indicator: "Student can explain the difference between direct and indirect speech"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify direct speech in writing",
      indicator: "Student can recognize quotation marks and reporting verbs"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify indirect speech in writing",
      indicator: "Student can recognize reported speech without quotation marks"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Convert direct speech to indirect speech (statements)",
      indicator: "Student can change statements from direct to indirect speech"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Convert direct speech to indirect speech (questions)",
      indicator: "Student can change questions from direct to indirect speech"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Convert direct speech to indirect speech (commands/requests)",
      indicator: "Student can change commands and requests to indirect speech"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Apply tense changes in indirect speech",
      indicator: "Student can change verb tenses correctly when reporting speech"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply pronoun and time/place changes in indirect speech",
      indicator: "Student can correctly change pronouns, time, and place references"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Convert indirect speech back to direct speech",
      indicator: "Student can reverse the transformation from indirect to direct speech"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Handle complex sentences in indirect speech",
      indicator: "Student can report sentences with multiple clauses"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Use reporting verbs correctly in indirect speech",
      indicator: "Student can use a variety of reporting verbs accurately"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze and correct errors in indirect speech",
      indicator: "Student can identify and fix common mistakes in reported speech"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Direct and Indirect Speech",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Master the rules of converting between direct and indirect speech."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Direct and Indirect Speech?</h2>
      <p>We use <strong>direct speech</strong> to repeat someone's exact words. We use <strong>indirect (reported) speech</strong> to report what someone said without using their exact words.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💬 Direct Speech</h3>
          <p>"I am <strong>happy</strong>," she said.</p>
          <ul>
            <li>Quotation marks</li>
            <li>Exact words</li>
            <li>Reporting verb + comma</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🗣️ Indirect Speech</h3>
          <p>She said that she was <strong>happy</strong>.</p>
          <ul>
            <li>No quotation marks</li>
            <li>Changed words</li>
            <li>Sometimes uses 'that'</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Rules</h4>
        <ul>
          <li><strong>Direct:</strong> "I <strong>am</strong> going," she said.</li>
          <li><strong>Indirect:</strong> She said that she <strong>was</strong> going.</li>
          <li>✓ Tense changes (present → past)</li>
          <li>✓ Pronoun changes (I → she)</li>
          <li>✓ Time/place changes (now → then)</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Direct Speech",
        objective: "obj_002",
        text: `
          <h3>Direct Speech</h3>
          <p>In <strong>direct speech</strong>, we repeat the exact words someone said, using <strong>quotation marks</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Punctuation Rules:</strong>
            <ul>
              <li><strong>Reporting verb + comma:</strong> "She said, <em>"I am happy."</em>"</li>
              <li><strong>Reporting verb after speech:</strong> <em>"I am happy,"</em> she said."</li>
              <li><strong>Question mark inside quotes:</strong> <em>"Are you happy?"</em> she asked."</li>
              <li><strong>Exclamation inside quotes:</strong> <em>"I am so happy!"</em> she exclaimed."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I love</strong> this book," she said.</li>
              <li>He asked, "<strong>Are you coming</strong>?"</li>
              <li>"<strong>Please help</strong> me," she begged.</li>
              <li>"<strong>Wow!</strong>" he exclaimed.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Use quotation marks (") to show exact words</li>
              <li>Use a comma before the closing quote</li>
              <li>Capitalize the first word inside quotes</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Indirect Speech",
        objective: "obj_003",
        text: `
          <h3>Indirect (Reported) Speech</h3>
          <p>In <strong>indirect speech</strong>, we report what someone said without using their exact words.</p>
          
          <div class="example-box">
            <strong>📌 Characteristics:</strong>
            <ul>
              <li><strong>No quotation marks</strong></li>
              <li><strong>Changes in tense:</strong> Present → Past</li>
              <li><strong>Changes in pronouns:</strong> I → she/he</li>
              <li><strong>Changes in time/place:</strong> now → then</li>
              <li><strong>Often uses 'that':</strong> He said that...</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Direct:</strong> "I <strong>am</strong> happy," she said.</li>
              <li><strong>Indirect:</strong> She said that she <strong>was</strong> happy.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li><strong>Direct:</strong> "We <strong>are</strong> leaving," they said.</li>
              <li><strong>Indirect:</strong> They said that they <strong>were</strong> leaving.</li>
              <li><strong>Direct:</strong> "I <strong>have finished</strong>," she said.</li>
              <li><strong>Indirect:</strong> She said that she <strong>had finished</strong>.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Tense Changes in Indirect Speech",
        objective: "obj_007",
        text: `
          <h3>Tense Changes</h3>
          <p>When converting from direct to indirect speech, the tense usually <strong>moves back one step</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Tense Changes:</strong>
            <ul>
              <li><strong>Present Simple → Past Simple</strong></li>
              <li>"I <strong>eat</strong>" → She said she <strong>ate</strong>.</li>
              <li><strong>Present Continuous → Past Continuous</strong></li>
              <li>"I <strong>am eating</strong>" → She said she <strong>was eating</strong>.</li>
              <li><strong>Present Perfect → Past Perfect</strong></li>
              <li>"I <strong>have eaten</strong>" → She said she <strong>had eaten</strong>.</li>
              <li><strong>Past Simple → Past Perfect</strong></li>
              <li>"I <strong>ate</strong>" → She said she <strong>had eaten</strong>.</li>
              <li><strong>Will → Would</strong></li>
              <li>"I <strong>will eat</strong>" → She said she <strong>would eat</strong>.</li>
              <li><strong>Can → Could</strong></li>
              <li>"I <strong>can eat</strong>" → She said she <strong>could eat</strong>.</li>
              <li><strong>Must → Had to</strong></li>
              <li>"I <strong>must eat</strong>" → She said she <strong>had to eat</strong>.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Exceptions (No Change):</strong>
            <ul>
              <li><strong>Past Perfect:</strong> "I had eaten" → She said she had eaten.</li>
              <li><strong>Conditional:</strong> "I would eat" → She said she would eat.</li>
              <li><strong>Universal Truths:</strong> "The sun is hot" → He said the sun is hot.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Pronoun and Time/Place Changes",
        objective: "obj_008",
        text: `
          <h3>Pronoun and Time/Place Changes</h3>
          <p>When reporting speech, we need to change pronouns, time expressions, and place expressions to make sense.</p>
          
          <div class="example-box">
            <strong>📌 Pronoun Changes:</strong>
            <ul>
              <li><strong>I → He/She:</strong> "I am tired" → She said she was tired.</li>
              <li><strong>We → They:</strong> "We are coming" → They said they were coming.</li>
              <li><strong>My → His/Her:</strong> "This is my book" → He said it was his book.</li>
              <li><strong>You → He/She/They:</strong> "You look nice" → She said I looked nice.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Time Changes:</strong>
            <ul>
              <li><strong>Now → Then</strong></li>
              <li><strong>Today → That day</strong></li>
              <li><strong>Yesterday → The day before / The previous day</strong></li>
              <li><strong>Tomorrow → The next day / The following day</strong></li>
              <li><strong>This week → That week</strong></li>
              <li><strong>Last week → The week before / The previous week</strong></li>
              <li><strong>Next week → The following week</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Place Changes:</strong>
            <ul>
              <li><strong>Here → There</strong></li>
              <li><strong>This → That</strong></li>
              <li><strong>These → Those</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Direct:</strong> "I <strong>will see you here tomorrow</strong>," she said.</li>
              <li><strong>Indirect:</strong> She said that she <strong>would see me there the next day</strong>.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Reporting Statements",
        objective: "obj_004",
        text: `
          <h3>Reporting Statements</h3>
          <p>To report statements, use <strong>say</strong> or <strong>tell</strong> + 'that' (optional).</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Subject + say/tell + (that) + reported clause</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Direct:</strong> "I <strong>am</strong> a teacher," he said.</li>
              <li><strong>Indirect:</strong> He said (that) he <strong>was</strong> a teacher.</li>
              <li><strong>Direct:</strong> "We <strong>have finished</strong> our work," they said.</li>
              <li><strong>Indirect:</strong> They said (that) they <strong>had finished</strong> their work.</li>
              <li><strong>Direct:</strong> "She <strong>will come</strong> tomorrow," he said.</li>
              <li><strong>Indirect:</strong> He said (that) she <strong>would come</strong> the next day.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Say vs Tell:</strong>
            <ul>
              <li><strong>Say:</strong> Used without a personal object → He said (that) he was tired.</li>
              <li><strong>Tell:</strong> Used with a personal object → He told me (that) he was tired.</li>
              <li>❌ He said me (that) he was tired. (Incorrect)</li>
              <li>✅ He told me (that) he was tired. (Correct)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Reporting Questions",
        objective: "obj_005",
        text: `
          <h3>Reporting Questions</h3>
          <p>To report questions, use verbs like <strong>ask, wonder, want to know</strong>. The word order changes from question to statement.</p>
          
          <div class="example-box">
            <strong>📌 Yes/No Questions:</strong>
            <ul>
              <li><strong>Formula:</strong> ask + if/whether + subject + verb</li>
              <li><strong>Direct:</strong> "Are you coming?" she asked.</li>
              <li><strong>Indirect:</strong> She asked <strong>if</strong> I was coming.</li>
              <li><strong>Direct:</strong> "Did you see it?" he asked.</li>
              <li><strong>Indirect:</strong> He asked <strong>whether</strong> I had seen it.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Wh-Questions:</strong>
            <ul>
              <li><strong>Formula:</strong> ask + question word + subject + verb</li>
              <li><strong>Direct:</strong> "Where are you going?" she asked.</li>
              <li><strong>Indirect:</strong> She asked <strong>where</strong> I was going.</li>
              <li><strong>Direct:</strong> "What time is it?" he asked.</li>
              <li><strong>Indirect:</strong> He asked <strong>what time</strong> it was.</li>
              <li><strong>Direct:</strong> "Why did you leave?" she asked.</li>
              <li><strong>Indirect:</strong> She asked <strong>why</strong> I had left.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Don't use question marks in indirect questions</li>
              <li>Use statement word order (subject + verb)</li>
              <li>Use 'if' or 'whether' for yes/no questions</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Reporting Commands and Requests",
        objective: "obj_006",
        text: `
          <h3>Reporting Commands and Requests</h3>
          <p>To report commands and requests, use verbs like <strong>tell, ask, order, command, request, beg</strong> + <strong>infinitive</strong>.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Subject + reporting verb + object + (not) + infinitive</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Direct:</strong> "Close the door," he said.</li>
              <li><strong>Indirect:</strong> He told me <strong>to close</strong> the door.</li>
              <li><strong>Direct:</strong> "Please help me," she said.</li>
              <li><strong>Indirect:</strong> She asked me <strong>to help</strong> her.</li>
              <li><strong>Direct:</strong> "Don't be late," he said.</li>
              <li><strong>Indirect:</strong> He told me <strong>not to be</strong> late.</li>
              <li><strong>Direct:</strong> "Please don't leave," she begged.</li>
              <li><strong>Indirect:</strong> She begged me <strong>not to leave</strong>.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Reporting Verbs for Commands:</strong>
            <ul>
              <li><strong>Strong:</strong> order, command, demand</li>
              <li><strong>Neutral:</strong> tell, instruct, direct</li>
              <li><strong>Polite:</strong> ask, request, beg, implore</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Sentences in Indirect Speech",
        objective: "obj_010",
        text: `
          <h3>Complex Sentences</h3>
          <p>When reporting complex sentences with multiple clauses, apply the rules to each clause.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Direct:</strong> "I think that she is right," he said.</li>
              <li><strong>Indirect:</strong> He said that he thought that she was right.</li>
              <li><strong>Direct:</strong> "When I finish, I will call you," she said.</li>
              <li><strong>Indirect:</strong> She said that when she finished, she would call me.</li>
              <li><strong>Direct:</strong> "If you study, you will pass," he said.</li>
              <li><strong>Indirect:</strong> He said that if I studied, I would pass.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> 
            <ul>
              <li>Apply tense changes to each verb</li>
              <li>Change pronouns in each clause</li>
              <li>Change time/place expressions consistently</li>
              <li>Maintain logical meaning throughout</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Reporting Verbs",
        objective: "obj_011",
        text: `
          <h3>Variety of Reporting Verbs</h3>
          <p>Using different reporting verbs makes your writing more interesting and precise.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded">
              <h4>📌 For Statements</h4>
              <ul>
                <li><strong>said</strong> - neutral</li>
                <li><strong>told</strong> - with object</li>
                <li><strong>explained</strong> - detailed</li>
                <li><strong>mentioned</strong> - briefly</li>
                <li><strong>claimed</strong> - uncertain</li>
                <li><strong>stated</strong> - formal</li>
                <li><strong>declared</strong> - emphatic</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded">
              <h4>📌 For Questions</h4>
              <ul>
                <li><strong>asked</strong> - neutral</li>
                <li><strong>wondered</strong> - curious</li>
                <li><strong>inquired</strong> - formal</li>
                <li><strong>queried</strong> - questioning</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-4 rounded">
              <h4>📌 For Commands</h4>
              <ul>
                <li><strong>ordered</strong> - strong</li>
                <li><strong>commanded</strong> - authoritative</li>
                <li><strong>instructed</strong> - instructional</li>
                <li><strong>requested</strong> - polite</li>
                <li><strong>begged</strong> - desperate</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded">
              <h4>📌 For Emotions</h4>
              <ul>
                <li><strong>exclaimed</strong> - surprise</li>
                <li><strong>shouted</strong> - loud</li>
                <li><strong>whispered</strong> - quiet</li>
                <li><strong>complained</strong> - dissatisfaction</li>
                <li><strong>apologized</strong> - sorry</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"I disagree," she <strong>objected</strong>.</li>
              <li>"I'm sorry," he <strong>apologized</strong>.</li>
              <li>"That's wonderful!" she <strong>exclaimed</strong>.</li>
              <li>"I'll do it," he <strong>promised</strong>.</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>💬 Direct Speech</h4>
          <ul>
            <li>✓ Exact words</li>
            <li>✓ Quotation marks</li>
            <li>✓ Reporting verb + comma</li>
            <li>✓ No changes needed</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🗣️ Indirect Speech</h4>
          <ul>
            <li>✓ Reported words</li>
            <li>✓ No quotation marks</li>
            <li>✓ Changes in tense</li>
            <li>✓ Changes in pronouns/time/place</li>
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
        misconception: "You always need to change the tense in indirect speech",
        correction: "Tenses stay the same if the reporting verb is in the present or future",
        explanation: "If reporting is in present: 'He says, \"I am tired\"' → 'He says he is tired.'"
      },
      {
        id: "mis_002",
        misconception: "'Say' and 'tell' are interchangeable",
        correction: "'Say' doesn't need an object; 'tell' always needs an object",
        explanation: "Say: He said he was tired. Tell: He told me he was tired."
      },
      {
        id: "mis_003",
        misconception: "You must always use 'that' in indirect speech",
        correction: "'That' is optional in indirect speech",
        explanation: "Both are correct: 'He said he was tired' or 'He said that he was tired.'"
      },
      {
        id: "mis_004",
        misconception: "Indirect questions use question marks",
        correction: "Indirect questions are statements, not questions",
        explanation: "She asked where I was going. (not: She asked where was I going?)"
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "News Reporting",
        description: "Journalists use indirect speech to report what people said.",
        example: "'The president said that the economy was improving.' (instead of direct quotes)"
      },
      {
        id: "app_002",
        title: "Academic Writing",
        description: "Indirect speech is used to summarize and reference sources.",
        example: "Smith (2020) argued that climate change was a global priority."
      },
      {
        id: "app_003",
        title: "Business Meetings",
        description: "Minutes of meetings use indirect speech to report discussions.",
        example: "The CEO stated that the company would expand into new markets."
      },
      {
        id: "app_004",
        title: "Storytelling",
        description: "Both direct and indirect speech are used in narrative writing.",
        example: "She said she was leaving (indirect), then added, 'I'll never return' (direct)."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Direct Speech", definition: "Reporting the exact words someone said using quotation marks." },
    { term: "Indirect Speech", definition: "Reporting what someone said without using their exact words." },
    { term: "Reporting Verb", definition: "A verb used to report speech (e.g., say, tell, ask, explain)." },
    { term: "Quotation Marks", definition: "Punctuation marks (\") used to show direct speech." },
    { term: "Reported Clause", definition: "The part of the sentence containing the reported words." },
    { term: "Backshift", definition: "The change of tense when moving from direct to indirect speech." },
    { term: "Universal Truth", definition: "A fact that is always true (tense doesn't change in indirect speech)." }
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
      question: "What is the main difference between direct and indirect speech?",
      type: "multiple_choice",
      options: [
        "Direct speech uses quotation marks; indirect doesn't",
        "Direct speech is always shorter",
        "Indirect speech uses more words",
        "Direct speech changes the meaning"
      ],
      answer: "Direct speech uses quotation marks; indirect doesn't",
      explanation: "Direct speech uses quotation marks to show exact words, while indirect speech doesn't."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which sentence is in direct speech?",
      type: "multiple_choice",
      options: [
        "She said she was happy.",
        "She said, 'I am happy.'",
        "She said that she was happy.",
        "She told me she was happy."
      ],
      answer: "She said, 'I am happy.'",
      explanation: "Direct speech uses quotation marks and the exact words spoken."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which sentence is in indirect speech?",
      type: "multiple_choice",
      options: [
        "'I am tired,' he said.",
        "He said, 'I am tired.'",
        "He said that he was tired.",
        "'I am tired,' he exclaimed."
      ],
      answer: "He said that he was tired.",
      explanation: "Indirect speech doesn't use quotation marks and changes the tense."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert to indirect: 'I love pizza,' she said.",
      type: "multiple_choice",
      options: [
        "She said that she loved pizza.",
        "She said that she loves pizza.",
        "She said that she love pizza.",
        "She said that she is loving pizza."
      ],
      answer: "She said that she loved pizza.",
      explanation: "Present simple 'love' becomes past simple 'loved' in indirect speech."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert to indirect: 'We are leaving tomorrow,' they said.",
      type: "multiple_choice",
      options: [
        "They said they were leaving tomorrow.",
        "They said they were leaving the next day.",
        "They said they are leaving tomorrow.",
        "They said they will leave tomorrow."
      ],
      answer: "They said they were leaving the next day.",
      explanation: "Tense changes (are → were) and time changes (tomorrow → the next day)."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert to indirect: 'Are you coming?' she asked.",
      type: "multiple_choice",
      options: [
        "She asked are you coming.",
        "She asked if I was coming.",
        "She asked if I am coming.",
        "She asked if was I coming."
      ],
      answer: "She asked if I was coming.",
      explanation: "Yes/no questions use 'if' and statement word order (subject + verb)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert to indirect: 'Where do you live?' he asked.",
      type: "multiple_choice",
      options: [
        "He asked where do you live.",
        "He asked where I lived.",
        "He asked where I live.",
        "He asked where did I live."
      ],
      answer: "He asked where I lived.",
      explanation: "Wh-questions keep the question word but use statement word order."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Convert to indirect: 'Close the door,' he said.",
      type: "multiple_choice",
      options: [
        "He said to close the door.",
        "He told me to close the door.",
        "He said close the door.",
        "He told to close the door."
      ],
      answer: "He told me to close the door.",
      explanation: "Commands use 'tell' + object + infinitive ('to close')."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Convert to indirect: 'Please don't shout,' she said.",
      type: "multiple_choice",
      options: [
        "She asked me please not shout.",
        "She asked me not to shout.",
        "She asked me don't shout.",
        "She asked not to shout."
      ],
      answer: "She asked me not to shout.",
      explanation: "Negative commands use 'not' before the infinitive."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Convert to indirect: 'I have finished my homework,' she said.",
      type: "multiple_choice",
      options: [
        "She said she finished her homework.",
        "She said she has finished her homework.",
        "She said she had finished her homework.",
        "She said she has been finishing her homework."
      ],
      answer: "She said she had finished her homework.",
      explanation: "Present perfect 'have finished' becomes past perfect 'had finished.'"
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Convert to indirect: 'I will see you here tomorrow,' he said.",
      type: "multiple_choice",
      options: [
        "He said he would see me here tomorrow.",
        "He said he would see me there the next day.",
        "He said he will see me there tomorrow.",
        "He said he would see me here the next day."
      ],
      answer: "He said he would see me there the next day.",
      explanation: "Change: will→would, you→me, here→there, tomorrow→the next day."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Convert to direct: 'She said that she was tired.'",
      type: "multiple_choice",
      options: [
        "'I am tired,' she said.",
        "'I was tired,' she said.",
        "'She is tired,' she said.",
        "'I am tired,' she said that."
      ],
      answer: "'I am tired,' she said.",
      explanation: "Reverse the changes: was → am, she → I."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "Convert to indirect: 'If you study, you will pass,' he said.",
      type: "multiple_choice",
      options: [
        "He said if you studied, you will pass.",
        "He said if I studied, I would pass.",
        "He said if I study, I will pass.",
        "He said if I studied, I will pass."
      ],
      answer: "He said if I studied, I would pass.",
      explanation: "Apply tense changes to both clauses: study→studied, will→would, you→I."
    },
    {
      id: "prac_014",
      objective: "obj_011",
      difficulty: "hard",
      question: "Choose the correct reporting verb: 'I'll be there,' he ____.",
      type: "multiple_choice",
      options: ["said", "promised", "asked", "told"],
      answer: "promised",
      explanation: "'Promised' is appropriate for a commitment to be somewhere."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'She told that she was happy.'",
      type: "multiple_choice",
      options: [
        "She told that she was happy.",
        "She said that she was happy.",
        "She told me that she was happy.",
        "Both B and C are correct"
      ],
      answer: "Both B and C are correct",
      explanation: "'Tell' needs a personal object ('me/him/her'), or use 'say' without an object."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'She asked where was I going.'",
      type: "multiple_choice",
      options: [
        "She asked where was I going.",
        "She asked where I was going.",
        "She asked where I am going.",
        "She asked where was I going?"
      ],
      answer: "She asked where I was going.",
      explanation: "Indirect questions use statement word order (subject + verb), not question word order."
    },
    {
      id: "prac_017",
      objective: "obj_008",
      difficulty: "hard",
      question: "Convert to indirect: 'I love you,' he said to her.",
      type: "multiple_choice",
      options: [
        "He said to her that he loved you.",
        "He told her that he loved her.",
        "He said that he loved her.",
        "He told that he loved her."
      ],
      answer: "He told her that he loved her.",
      explanation: "Use 'told' with the object 'her', and change 'you' to 'her'."
    },
    {
      id: "prac_018",
      objective: "obj_012",
      difficulty: "hard",
      question: "Find the error: 'He said me that he was tired.'",
      type: "multiple_choice",
      options: [
        "He said me that he was tired.",
        "He told me that he was tired.",
        "He said that he was tired.",
        "Both B and C are correct"
      ],
      answer: "Both B and C are correct",
      explanation: "'Say' doesn't take a direct object. Use 'tell me' or 'say that'."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_speech",
    title: "Direct and Indirect Speech Quiz",
    description: "Test your understanding of direct and indirect speech",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between direct and indirect speech?",
        type: "short_answer",
        answer_key: "Direct speech uses quotation marks and exact words; indirect speech reports without quotation marks.",
        explanation: "Direct: exact words in quotes. Indirect: reported words, changes in tense/pronouns."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Convert to indirect: 'I am a student,' she said.",
        type: "short_answer",
        answer_key: "She said that she was a student.",
        explanation: "Present 'am' becomes past 'was', pronoun 'I' changes to 'she'."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "Convert to indirect: 'We are going to the park,' they said.",
        type: "short_answer",
        answer_key: "They said that they were going to the park.",
        explanation: "Present continuous 'are going' becomes past continuous 'were going'."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert to indirect: 'Do you like coffee?' she asked.",
        type: "short_answer",
        answer_key: "She asked if I liked coffee.",
        explanation: "Yes/no question uses 'if' and changes 'do you like' to 'I liked'."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert to indirect: 'What time is it?' he asked.",
        type: "short_answer",
        answer_key: "He asked what time it was.",
        explanation: "Wh-question keeps the question word but uses statement word order."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Convert to indirect: 'Please help me,' she said.",
        type: "short_answer",
        answer_key: "She asked me to help her.",
        explanation: "Request uses 'ask' + object + infinitive ('to help')."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Convert to indirect: 'Don't be late,' he said.",
        type: "short_answer",
        answer_key: "He told me not to be late.",
        explanation: "Negative commands use 'not' before the infinitive."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Convert to indirect: 'I will call you tomorrow,' she said.",
        type: "short_answer",
        answer_key: "She said that she would call me the next day.",
        explanation: "Change: will→would, you→me, tomorrow→the next day."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Choose the correct reporting verb: 'I'm sorry,' he ____.",
        type: "short_answer",
        answer_key: "apologized",
        explanation: "'Apologized' is appropriate for an apology."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Correct this sentence: 'He asked that was I tired.'",
        type: "short_answer",
        answer_key: "He asked if I was tired.",
        explanation: "Use 'if' for yes/no questions and statement word order (I was, not was I)."
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
        "Understand direct and indirect speech",
        "Convert between direct and indirect speech",
        "Apply rules for tense, pronoun, and time changes"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Direct vs Indirect" },
        { time: "5-10 min", activity: "Direct Instruction - Basic Rules" },
        { time: "10-20 min", activity: "Direct Instruction - Transformations" },
        { time: "20-30 min", activity: "Guided Practice - Conversions" },
        { time: "30-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Direct speech uses quotation marks; indirect doesn't",
        // ... full answer key
      },
      assessment: {
        ass_001: "Direct speech uses quotation marks and exact words; indirect speech reports without quotation marks.",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Listen to a news report and convert direct quotes to indirect speech",
      "Write a dialogue and convert it to indirect speech",
      "Create a comic strip with speech bubbles and narrate in indirect speech",
      "Role-play a conversation and write a report using indirect speech"
    ],
    differentiation: {
      struggling: [
        "Start with simple statements only",
        "Use a transformation template",
        "Practice one tense at a time",
        "Provide a formula reference sheet"
      ],
      advanced: [
        "Convert complex passages with multiple speakers",
        "Write about the effect of different reporting verbs",
        "Analyze speech in literature",
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
      title: "Direct vs Indirect Speech",
      description: "Diagram showing the differences between direct and indirect speech",
      url: "/diagrams/direct-indirect.png",
      alt: "Comparison of direct and indirect speech"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Tense Changes Chart",
      description: "Chart showing all tense changes in indirect speech",
      url: "/diagrams/tense-changes.png",
      alt: "Chart of tense changes in indirect speech"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Time and Place Changes",
      description: "Infographic showing time and place expression changes",
      url: "/diagrams/time-place-changes.png",
      alt: "Time and place changes in indirect speech"
    }
  ]
};