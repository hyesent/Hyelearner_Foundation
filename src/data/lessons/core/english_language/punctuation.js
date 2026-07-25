// Location: src/data/lessons/core/english_language/punctuation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_punctuation",
  subject: "English Language",
  topic: "Punctuation",
  name: "Punctuation",
  icon: "🔖",
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
    "Understanding of sentence structure",
    "Knowledge of parts of speech",
    "Basic writing skills",
    "Understanding of clauses"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_spelling",
      name: "Spelling",
      file: "core/english_language/spelling.js"
    },
    {
      id: "eng_lesson_idioms",
      name: "Idioms",
      file: "core/english_language/idioms.js"
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
      description: "Define punctuation and explain its importance",
      indicator: "Student can explain why punctuation is essential for clear writing"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use periods, question marks, and exclamation points correctly",
      indicator: "Student can use end punctuation appropriately"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use commas in lists and with coordinating conjunctions",
      indicator: "Student can use commas correctly in simple sentences"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use apostrophes for possession and contractions",
      indicator: "Student can use apostrophes correctly"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use quotation marks for direct speech and titles",
      indicator: "Student can use quotation marks correctly"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use semicolons and colons correctly",
      indicator: "Student can use semicolons and colons in writing"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use commas with dependent and independent clauses",
      indicator: "Student can use commas in complex sentences"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use hyphens, dashes, and parentheses appropriately",
      indicator: "Student can use advanced punctuation marks"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply punctuation rules in varied writing contexts",
      indicator: "Student can punctuate different types of writing correctly"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Identify and correct common punctuation errors",
      indicator: "Student can spot and fix punctuation mistakes"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Punctuation",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn all the punctuation marks and when to use them correctly."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Punctuation?</h2>
      <p><strong>Punctuation</strong> is the system of marks used in writing to clarify meaning and indicate pauses, stops, and tone. Without punctuation, writing becomes confusing and difficult to read.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-red-50 p-4 rounded">
          <h3 class="text-red-600">❌ Without Punctuation</h3>
          <p><em>"lets eat grandma"</em></p>
          <p><em>"i love cooking my family and my dog"</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">✅ With Punctuation</h3>
          <p><em>"Let's eat, Grandma!"</em></p>
          <p><em>"I love cooking, my family, and my dog."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Common Punctuation Marks</h4>
        <table class="w-full text-sm">
          <tr><th>Mark</th><th>Name</th><th>Use</th></tr>
          <tr><td>.</td><td>Period</td><td>Ends sentences</td></tr>
          <tr><td>?</td><td>Question Mark</td><td>Ends questions</td></tr>
          <tr><td>!</td><td>Exclamation Point</td><td>Shows strong emotion</td></tr>
          <tr><td>,</td><td>Comma</td><td>Separates items/clauses</td></tr>
          <tr><td>'</td><td>Apostrophe</td><td>Shows possession/contractions</td></tr>
          <tr><td>" "</td><td>Quotation Marks</td><td>Shows direct speech</td></tr>
        </table>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "End Punctuation",
        objective: "obj_002",
        text: `
          <h3>End Punctuation Marks</h3>
          <p><strong>End punctuation</strong> signals the end of a sentence and shows the sentence type.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Period (.)</h4>
              <p><strong>Use for:</strong></p>
              <ul>
                <li>Statements</li>
                <li>Commands</li>
                <li>Indirect questions</li>
              </ul>
              <p><em>"She walked to school."</em></p>
              <p><em>"Please close the door."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Question Mark (?)</h4>
              <p><strong>Use for:</strong></p>
              <ul>
                <li>Direct questions</li>
                <li>Rhetorical questions</li>
              </ul>
              <p><em>"Where are you going?"</em></p>
              <p><em>"Isn't it beautiful?"</em></p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Exclamation Point (!)</h4>
              <p><strong>Use for:</strong></p>
              <ul>
                <li>Strong emotion</li>
                <li>Excitement</li>
                <li>Commands</li>
              </ul>
              <p><em>"Watch out!"</em></p>
              <p><em>"I won the prize!"</em></p>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Don't overuse exclamation points. One per paragraph is usually enough.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Commas",
        objective: "obj_003",
        text: `
          <h3>Comma Rules</h3>
          <p><strong>Commas</strong> are the most common punctuation mark. They indicate pauses and separate elements in sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 In Lists:</h4>
              <ul>
                <li>"I bought apples, oranges, bananas, and grapes."</li>
                <li>"She needs paper, pens, and notebooks."</li>
                <li>(Oxford comma is optional but recommended)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 With Coordinating Conjunctions:</h4>
              <ul>
                <li>"I wanted to go, but I was tired."</li>
                <li>"She studied hard, so she passed."</li>
                <li>"He ran fast, yet he lost the race."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 With Dependent Clauses:</h4>
              <ul>
                <li>"Because I was tired, I went home."</li>
                <li>"If you study, you will pass."</li>
                <li>"Although it was raining, we went out."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 With Appositives:</h4>
              <ul>
                <li>"My brother, a doctor, lives in London."</li>
                <li>"Paris, the capital of France, is beautiful."</li>
                <li>"Mr. Smith, my teacher, is kind."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Comma Splice Error:</strong>
            <ul>
              <li>❌ "I went to the store, I bought milk."</li>
              <li>✅ "I went to the store, and I bought milk."</li>
              <li>✅ "I went to the store; I bought milk."</li>
              <li>✅ "I went to the store. I bought milk."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Apostrophes",
        objective: "obj_004",
        text: `
          <h3>Apostrophe Rules</h3>
          <p><strong>Apostrophes</strong> have two main uses: to show possession and to form contractions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Possession:</h4>
              <ul>
                <li><strong>Singular:</strong> add 's</li>
                <li>"The <strong>dog's</strong> bone"</li>
                <li>"<strong>John's</strong> book"</li>
                <li><strong>Plural ending in s:</strong> add ' only</li>
                <li>"The <strong>dogs'</strong> park"</li>
                <li>"The <strong>students'</strong> classroom"</li>
                <li><strong>Plural not ending in s:</strong> add 's</li>
                <li>"The <strong>children's</strong> toys"</li>
                <li>"The <strong>men's</strong> room"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contractions:</h4>
              <ul>
                <li>"<strong>It's</strong> raining." (It is)</li>
                <li>"I <strong>don't</strong> know." (Do not)</li>
                <li>"She <strong>can't</strong> come." (Cannot)</li>
                <li>"We <strong>won't</strong> forget." (Will not)</li>
                <li>"<strong>They're</strong> here." (They are)</li>
                <li>"I <strong>could've</strong> helped." (Could have)</li>
              </ul>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Common Confusions:</strong>
            <ul>
              <li><strong>Its</strong> = possession (The dog wagged its tail.)</li>
              <li><strong>It's</strong> = contraction (It's raining.)</li>
              <li><strong>Your</strong> = possession (Your book is here.)</li>
              <li><strong>You're</strong> = contraction (You're welcome.)</li>
              <li><strong>Their</strong> = possession (Their house is big.)</li>
              <li><strong>They're</strong> = contraction (They're coming.)</li>
              <li><strong>There</strong> = location (The book is there.)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Quotation Marks",
        objective: "obj_005",
        text: `
          <h3>Quotation Marks</h3>
          <p><strong>Quotation marks</strong> are used to show direct speech and the titles of short works.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Direct Speech:</h4>
              <ul>
                <li>"I am happy," she said.</li>
                <li>He asked, "Where are you going?"</li>
                <li>"Please help me," she begged.</li>
                <li>She said, "I'll call you tomorrow."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Titles of Short Works:</h4>
              <ul>
                <li><strong>Short stories:</strong> "The Tell-Tale Heart"</li>
                <li><strong>Poems:</strong> "The Road Not Taken"</li>
                <li><strong>Articles:</strong> "The Future of AI"</li>
                <li><strong>Song titles:</strong> "Imagine"</li>
                <li><strong>Chapters:</strong> "Chapter 1: The Beginning"</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Punctuation with Quotation Marks:</strong>
            <ul>
              <li>Commas and periods go <strong>INSIDE</strong> the quotation marks</li>
              <li>"I love you," she said.</li>
              <li>She said, "I love you."</li>
              <li>Question marks and exclamation points go <strong>INSIDE</strong> if they're part of the quote</li>
              <li>"Are you coming?" she asked.</li>
              <li>Question marks go <strong>OUTSIDE</strong> if they're not part of the quote</li>
              <li>Did she say, "I'm coming"?</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Semicolons and Colons",
        objective: "obj_006",
        text: `
          <h3>Semicolons and Colons</h3>
          <p><strong>Semicolons</strong> and <strong>colons</strong> are used to connect ideas and introduce information.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Semicolon (;)</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Connect related independent clauses</li>
                <li>"I love reading; my sister loves writing."</li>
                <li>Separate items in a list with commas</li>
                <li>"I visited Paris, France; Rome, Italy; and Madrid, Spain."</li>
                <li>With conjunctive adverbs</li>
                <li>"She studied hard; therefore, she passed."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Colon (:)</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Introduce a list</li>
                <li>"I need three things: paper, pen, and ink."</li>
                <li>Introduce an explanation</li>
                <li>"The reason is simple: she was tired."</li>
                <li>After a salutation in a letter</li>
                <li>"Dear Sir:"</li>
                <li>Between hours and minutes</li>
                <li>"The time is 3:30 PM."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Semicolon:</strong> "The weather was beautiful; we decided to go for a walk."</li>
              <li><strong>Colon:</strong> "She had one goal: to become a doctor."</li>
              <li><strong>Colon:</strong> "Please bring the following items: notebooks, pens, and a calculator."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Hyphens and Dashes",
        objective: "obj_008",
        text: `
          <h3>Hyphens and Dashes</h3>
          <p><strong>Hyphens</strong> and <strong>dashes</strong> have different uses and lengths.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Hyphen (-)</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Compound words</li>
                <li>"Mother-in-law, well-known, self-esteem"</li>
                <li>Compound adjectives before nouns</li>
                <li>"A well-known author"</li>
                <li>"A twenty-year-old man"</li>
                <li>Numbers 21-99</li>
                <li>"Twenty-one, thirty-five"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Dash (—)</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Show an interruption or break</li>
                <li>"He was—well, let's just say—unusual."</li>
                <li>Add emphasis</li>
                <li>"She finally understood—it was all a misunderstanding."</li>
                <li>Add extra information</li>
                <li>"The book—which I loved—was recommended by my friend."</li>
              </ul>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Hyphens are shorter (-)</li>
              <li>Dashes are longer (—)</li>
              <li>Don't use dashes too often in formal writing</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Parentheses and Brackets",
        objective: "obj_008",
        text: `
          <h3>Parentheses and Brackets</h3>
          <p><strong>Parentheses</strong> and <strong>brackets</strong> add extra information to sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parentheses ( )</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Add extra information</li>
                <li>"The school (founded in 1980) was renovated."</li>
                <li>Add examples</li>
                <li>"Several animals (e.g., dogs, cats) are pets."</li>
                <li>Add explanations</li>
                <li>"He arrived late (his car broke down)."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Brackets [ ]</h4>
              <p><strong>Uses:</strong></p>
              <ul>
                <li>Add clarification in quoted text</li>
                <li>"She said, 'It [the project] was difficult.'"</li>
                <li>Add editorial comments</li>
                <li>"They [the students] protested the decision."</li>
                <li>Show corrections</li>
                <li>"He was born in 1980 [sic]."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Parentheses:</strong> "The results (shown in the table) are clear."</li>
              <li><strong>Brackets:</strong> "The witness said, 'He [the suspect] was running.'"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Common Punctuation Errors",
        objective: "obj_010",
        text: `
          <h3>Common Errors</h3>
          <p>Avoid these common punctuation mistakes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Comma Splice</h4>
              <p>Two independent clauses joined with only a comma.</p>
              <p><strong>Wrong:</strong> "I went to the store, I bought milk."</p>
              <p><strong>Correct:</strong> "I went to the store, and I bought milk."</p>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Run-On Sentence</h4>
              <p>Two independent clauses with no punctuation.</p>
              <p><strong>Wrong:</strong> "I went to the store I bought milk."</p>
              <p><strong>Correct:</strong> "I went to the store. I bought milk."</p>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Its/It's Confusion</h4>
              <p>Its = possession; It's = it is.</p>
              <p><strong>Wrong:</strong> "The dog wagged it's tail."</p>
              <p><strong>Correct:</strong> "The dog wagged its tail."</p>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Misplaced Apostrophe</h4>
              <p>Apostrophe errors with plurals and possessives.</p>
              <p><strong>Wrong:</strong> "The dog's are barking."</p>
              <p><strong>Correct:</strong> "The dogs are barking."</p>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔖 Punctuation Marks</h4>
          <ul>
            <li>✓ Period (.) - ends statements</li>
            <li>✓ Question Mark (?) - ends questions</li>
            <li>✓ Exclamation (!) - shows emotion</li>
            <li>✓ Comma (,) - separates elements</li>
            <li>✓ Apostrophe (') - possession/contractions</li>
            <li>✓ Quotation Marks (" ") - direct speech</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Use commas to avoid confusion</li>
            <li>✓ Check apostrophe placement</li>
            <li>✓ Don't overuse exclamation points</li>
            <li>✓ Use semicolons to connect ideas</li>
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
        misconception: "You can use a comma to connect any two sentences",
        correction: "This creates a comma splice. Use a conjunction or semicolon.",
        explanation: "Commas alone cannot join independent clauses correctly."
      },
      {
        id: "mis_002",
        misconception: "Apostrophes are used to make plurals",
        correction: "Apostrophes show possession and contractions, not plurals",
        explanation: "Plurals are formed by adding -s or -es, not an apostrophe."
      },
      {
        id: "mis_003",
        misconception: "Quotation marks can be used for emphasis",
        correction: "Quotation marks are for direct speech and titles, not emphasis",
        explanation: "Use italics or bold for emphasis, not quotation marks."
      },
      {
        id: "mis_004",
        misconception: "Punctuation doesn't matter in informal writing",
        correction: "Punctuation is important for clarity in all writing",
        explanation: "Even in informal writing, punctuation helps avoid confusion."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Professional Writing",
        description: "Correct punctuation is essential for professional communication.",
        example: "Emails, reports, and business letters require proper punctuation."
      },
      {
        id: "app_002",
        title: "Academic Writing",
        description: "Punctuation affects grades and clarity in academic work.",
        example: "Essays, research papers, and assignments need correct punctuation."
      },
      {
        id: "app_003",
        title: "Social Media",
        description: "Punctuation affects the meaning of posts and messages.",
        example: "Text messages and social media posts are clearer with punctuation."
      },
      {
        id: "app_004",
        title: "Creative Writing",
        description: "Punctuation creates rhythm and effect in creative writing.",
        example: "Authors use punctuation to control pace and tone."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Punctuation", definition: "Marks used in writing to clarify meaning." },
    { term: "Period", definition: "A punctuation mark used to end statements." },
    { term: "Question Mark", definition: "A punctuation mark used to end questions." },
    { term: "Exclamation Point", definition: "A punctuation mark used to show strong emotion." },
    { term: "Comma", definition: "A punctuation mark used to separate elements in a sentence." },
    { term: "Apostrophe", definition: "A punctuation mark used to show possession or form contractions." },
    { term: "Quotation Marks", definition: "Punctuation marks used to show direct speech." },
    { term: "Semicolon", definition: "A punctuation mark used to connect related independent clauses." },
    { term: "Colon", definition: "A punctuation mark used to introduce lists or explanations." },
    { term: "Hyphen", definition: "A punctuation mark used to join compound words." },
    { term: "Dash", definition: "A punctuation mark used to show breaks or emphasis." },
    { term: "Comma Splice", definition: "Two independent clauses joined with only a comma." }
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
      question: "What is punctuation?",
      type: "multiple_choice",
      options: [
        "A type of grammar rule",
        "Marks used to clarify writing",
        "A type of vocabulary",
        "A way to spell words"
      ],
      answer: "Marks used to clarify writing",
      explanation: "Punctuation marks help clarify meaning and structure in writing."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which punctuation mark ends a statement?",
      type: "multiple_choice",
      options: ["?", "!", ".", ","],
      answer: ".",
      explanation: "A period (.) is used to end declarative statements."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which punctuation mark ends a question?",
      type: "multiple_choice",
      options: ["?", "!", ".", ","],
      answer: "?",
      explanation: "A question mark (?) is used to end interrogative sentences."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "Which is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "I like apples, oranges and bananas.",
        "I like apples oranges and bananas.",
        "I like apples, oranges, and bananas.",
        "I like apples oranges, and bananas."
      ],
      answer: "I like apples, oranges, and bananas.",
      explanation: "Commas separate items in a list. The Oxford comma is recommended."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which is correct?",
      type: "multiple_choice",
      options: [
        "The dogs bone",
        "The dog's bone",
        "The dogs' bone",
        "The doges bone"
      ],
      answer: "The dog's bone",
      explanation: "For a singular possessive, add 's (dog's)."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which is correct?",
      type: "multiple_choice",
      options: [
        "Its raining",
        "It's raining",
        "Its' raining",
        "Itis raining"
      ],
      answer: "It's raining",
      explanation: "It's = it is (contraction)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "She said I love you.",
        "She said, 'I love you.'",
        "She said, I love you.",
        "She said I love you"
      ],
      answer: "She said, 'I love you.'",
      explanation: "Direct speech uses quotation marks with a comma after the reporting verb."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which uses a semicolon correctly?",
      type: "multiple_choice",
      options: [
        "I love reading; I read every day.",
        "I love reading, I read every day.",
        "I love reading I read every day.",
        "I love reading; and I read every day."
      ],
      answer: "I love reading; I read every day.",
      explanation: "Semicolons join related independent clauses without a conjunction."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which uses a colon correctly?",
      type: "multiple_choice",
      options: [
        "I need three things: paper, pen, and ink.",
        "I need three things, paper, pen, and ink.",
        "I need three things; paper, pen, and ink.",
        "I need three things paper, pen, and ink."
      ],
      answer: "I need three things: paper, pen, and ink.",
      explanation: "Colons introduce lists after complete sentences."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "Because I was tired I went home.",
        "Because I was tired, I went home.",
        "Because I was tired; I went home.",
        "Because I was tired: I went home."
      ],
      answer: "Because I was tired, I went home.",
      explanation: "Use a comma after a dependent clause when it comes first."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "My brother who lives in London is coming.",
        "My brother, who lives in London, is coming.",
        "My brother who lives in London, is coming.",
        "My brother, who lives in London is coming."
      ],
      answer: "My brother, who lives in London, is coming.",
      explanation: "Non-defining relative clauses need commas around them."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which uses a hyphen correctly?",
      type: "multiple_choice",
      options: [
        "A well known author",
        "A well-known author",
        "A well known-author",
        "A well knownauthor"
      ],
      answer: "A well-known author",
      explanation: "Hyphens connect compound adjectives before nouns."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which uses parentheses correctly?",
      type: "multiple_choice",
      options: [
        "The school (founded in 1980) was renovated.",
        "The school founded in 1980 was renovated.",
        "The school (founded in 1980 was renovated.",
        "The school founded in 1980) was renovated."
      ],
      answer: "The school (founded in 1980) was renovated.",
      explanation: "Parentheses enclose extra information that is not essential to the sentence."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which sentence is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "He asked, 'Where are you going'?",
        "He asked, 'Where are you going?'",
        "He asked 'Where are you going'?",
        "He asked, where are you going?"
      ],
      answer: "He asked, 'Where are you going?'",
      explanation: "Question marks go inside quotation marks when they are part of the quoted speech."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which sentence is correctly punctuated?",
      type: "multiple_choice",
      options: [
        "Wow I can't believe it!",
        "Wow! I can't believe it!",
        "Wow, I can't believe it!",
        "Wow I can't believe it"
      ],
      answer: "Wow! I can't believe it!",
      explanation: "Exclamation points show strong emotion after interjections and exclamations."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Find the error: 'The students' are going to the library.'",
      type: "multiple_choice",
      options: [
        "students'",
        "students",
        "student's",
        "student"
      ],
      answer: "students",
      explanation: "No apostrophe is needed for plural nouns. 'students' is correct."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_punctuation",
    title: "Punctuation Quiz",
    description: "Test your understanding of punctuation rules",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is punctuation?",
        type: "short_answer",
        answer_key: "Marks used in writing to clarify meaning",
        explanation: "Punctuation marks help readers understand the structure and meaning of writing."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What punctuation mark ends a statement?",
        type: "short_answer",
        answer_key: "Period (.)",
        explanation: "Periods end declarative sentences."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "medium",
        question: "What is the correct punctuation for a list of three items?",
        type: "short_answer",
        answer_key: "apples, oranges, and bananas (with Oxford comma)",
        explanation: "Use commas to separate items in a list. The Oxford comma is optional but recommended."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the difference between 'its' and 'it's'?",
        type: "short_answer",
        answer_key: "Its = possession; It's = it is (contraction)",
        explanation: "'Its' shows ownership. 'It's' is a contraction of 'it is'."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "How do you indicate direct speech in writing?",
        type: "short_answer",
        answer_key: "Use quotation marks (\" \")",
        explanation: "Quotation marks show the exact words someone said."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between a semicolon and a colon?",
        type: "short_answer",
        answer_key: "Semicolon connects related clauses; colon introduces lists/explanations",
        explanation: "Semicolons (;) join independent clauses. Colons (:) introduce information."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "hard",
        question: "Give an example of a semicolon joining two independent clauses.",
        type: "short_answer",
        answer_key: "I love reading; I read every day. (or similar)",
        explanation: "Semicolons join related independent clauses without a conjunction."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "When do you use a comma with 'because'?",
        type: "short_answer",
        answer_key: "When the dependent clause comes first: 'Because I was tired, I went home.'",
        explanation: "Use a comma when the dependent clause precedes the independent clause."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Correct this sentence: 'The dog wagged it's tail.'",
        type: "short_answer",
        answer_key: "The dog wagged its tail.",
        explanation: "Use 'its' (possessive) not 'it's' (it is)."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Correct this sentence: 'I went to the store I bought milk.'",
        type: "short_answer",
        answer_key: "I went to the store. I bought milk. (or ; or , and)",
        explanation: "This is a run-on sentence. Separate the clauses with a period, semicolon, or comma + conjunction."
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
        "Understand the purpose of punctuation",
        "Use common punctuation marks correctly",
        "Avoid common punctuation errors"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Why punctuation matters" },
        { time: "5-10 min", activity: "Direct Instruction - End Punctuation" },
        { time: "10-15 min", activity: "Direct Instruction - Commas and Apostrophes" },
        { time: "15-20 min", activity: "Direct Instruction - Quotation Marks and Semicolons" },
        { time: "20-25 min", activity: "Direct Instruction - Advanced Punctuation" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Marks used to clarify writing",
        // ... full answer key
      },
      assessment: {
        ass_001: "Marks used in writing to clarify meaning",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Write a paragraph without any punctuation and have a partner add it",
      "Create a punctuation poster for the classroom",
      "Find and correct punctuation errors in a newspaper article",
      "Write a dialogue using quotation marks correctly"
    ],
    differentiation: {
      struggling: [
        "Start with periods and question marks only",
        "Use visual aids for each punctuation mark",
        "Practice with short sentences",
        "Provide a punctuation reference sheet"
      ],
      advanced: [
        "Analyze punctuation in literature",
        "Write about the effect of punctuation on tone",
        "Create an advanced punctuation guide",
        "Study punctuation differences in British and American English"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "chart",
      title: "Punctuation Marks Guide",
      description: "Chart showing all punctuation marks and their uses",
      url: "/diagrams/punctuation-guide.png",
      alt: "Punctuation marks guide"
    },
    {
      id: "vis_002",
      type: "infographic",
      title: "Comma Rules",
      description: "Infographic explaining comma usage rules",
      url: "/diagrams/comma-rules.png",
      alt: "Comma rules infographic"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Apostrophe Rules",
      description: "Chart showing apostrophe rules for possession and contractions",
      url: "/diagrams/apostrophe-rules.png",
      alt: "Apostrophe rules chart"
    }
  ]
};