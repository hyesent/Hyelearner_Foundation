// Location: src/data/lessons/social_sciences/government/constitutional_development.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "gov_lesson_constitutional_development",
  subject: "Government",
  topic: "Constitutional Development",
  name: "Constitutional Development",
  icon: "📜",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of Nigerian history",
    "Knowledge of Nigerian government",
    "Understanding of colonialism",
    "Knowledge of Nigerian independence"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "International Organizations",
      file: "social_sciences/government/international_organizations.js"
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
      description: "Define constitution and explain its importance",
      indicator: "Student can explain what a constitution is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of constitutions",
      indicator: "Student can distinguish between written and unwritten constitutions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the features of a constitution",
      indicator: "Student can describe the key features of a constitution"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the constitutional development in Nigeria",
      indicator: "Student can trace the development of Nigerian constitutions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the Clifford Constitution of 1922",
      indicator: "Student can explain the key features of the Clifford Constitution"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the Richards Constitution of 1946",
      indicator: "Student can explain the key features of the Richards Constitution"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the Macpherson Constitution of 1951",
      indicator: "Student can explain the key features of the Macpherson Constitution"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the Lyttleton Constitution of 1954",
      indicator: "Student can explain the key features of the Lyttleton Constitution"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the Independence Constitution of 1960",
      indicator: "Student can explain the key features of the Independence Constitution"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Describe the Republican Constitution of 1963",
      indicator: "Student can explain the key features of the Republican Constitution"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the 1979 Constitution",
      indicator: "Student can explain the features of the 1979 Constitution"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the 1999 Constitution",
      indicator: "Student can explain the features of the 1999 Constitution"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the amendments to the 1999 Constitution",
      indicator: "Student can describe the amendments made to the 1999 Constitution"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of constitutional development",
      indicator: "Student can discuss why constitutional development is significant"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Constitutional Development in Nigeria",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the development of constitutions in Nigeria from colonial times to the present."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Constitutional Development in Nigeria</h2>
      <p><strong>Constitutional development</strong> refers to the evolution of the fundamental laws and principles that govern Nigeria. From colonial times to the present, Nigeria has had several constitutions, each reflecting the political and social realities of its time. Understanding this development is essential for understanding Nigeria's political history and governance.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📜 Key Concepts</h3>
          <ul>
            <li>✓ Meaning of Constitution</li>
            <li>✓ Types of Constitutions</li>
            <li>✓ Colonial Constitutions</li>
            <li>✓ Independence Constitution</li>
            <li>✓ Republican Constitution</li>
            <li>✓ 1979 Constitution</li>
            <li>✓ 1999 Constitution</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Nigeria has had 9 constitutions</li>
            <li>• The 1960 Constitution was the first independent one</li>
            <li>• Nigeria became a republic in 1963</li>
            <li>• The 1999 Constitution is the current one</li>
            <li>• Constitutional amendments continue</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Constitutional Development Matters</h4>
        <p>Constitutional development reflects Nigeria's political evolution from colonial rule to independence and democracy. It helps us understand the foundations of our governance system.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is a Constitution?",
        objective: "obj_001",
        text: `
          <h3>Understanding Constitutions</h3>
          <p>A <strong>constitution</strong> is the fundamental law of a country that establishes the framework for government, defines the powers of institutions, and protects citizens' rights.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Functions</h4>
              <ul>
                <li>• Establishes government structure</li>
                <li>• Defines powers of branches</li>
                <li>• Protects citizens' rights</li>
                <li>• Limits government power</li>
                <li>• Provides stability</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Features of a Constitution</h4>
              <ul>
                <li>• Supremacy</li>
                <li>• Rigidity (difficult to amend)</li>
                <li>• Fundamental rights</li>
                <li>• Separation of powers</li>
                <li>• Rule of law</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Constitutions",
        objective: "obj_002",
        text: `
          <h3>Types of Constitutions</h3>
          <p>Constitutions can be classified in different ways.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Written vs Unwritten</h4>
              <ul>
                <li>• <strong>Written:</strong> Codified in a single document</li>
                <li>• Example: Nigeria, USA</li>
                <li>• <strong>Unwritten:</strong> Based on conventions and traditions</li>
                <li>• Example: UK</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rigid vs Flexible</h4>
              <ul>
                <li>• <strong>Rigid:</strong> Difficult to amend</li>
                <li>• Example: Nigeria, USA</li>
                <li>• <strong>Flexible:</strong> Easy to amend</li>
                <li>• Example: UK</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Colonial Constitutions",
        objective: "obj_004",
        text: `
          <h3>Colonial Constitutions</h3>
          <p>Nigeria's constitutional journey began during the colonial era.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Clifford Constitution (1922)</h4>
              <ul>
                <li>• First Nigerian constitution</li>
                <li>• Established legislative council</li>
                <li>• Introduced elective principle</li>
                <li>• 4 elected members</li>
                <li>• Limited to Lagos and Calabar</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Richards Constitution (1946)</h4>
              <ul>
                <li>• Created regional assemblies</li>
                <li>• Three regions: North, West, East</li>
                <li>• Introduced federal principle</li>
                <li>• Legislative council remained</li>
                <li>• More Nigerian representation</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Macpherson Constitution (1951)</h4>
              <ul>
                <li>• More Nigerian involvement</li>
                <li>• Regional governments created</li>
                <li>• Central legislative council</li>
                <li>• Ministers from regions</li>
                <li>• Prepared Nigeria for self-government</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Lyttleton Constitution (1954)</h4>
              <ul>
                <li>• Established federal system</li>
                <li>• Regional governments with autonomy</li>
                <li>• Central government</li>
                <li>• Shared legislative lists</li>
                <li>• Nigeria became a federation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Independence and Republican Constitutions",
        objective: "obj_009",
        text: `
          <h3>Independence and Republican Constitutions</h3>
          <p>Nigeria's post-independence constitutions established full sovereignty.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Independence Constitution (1960)</h4>
              <ul>
                <li>• Nigeria became independent</li>
                <li>• Queen Elizabeth II as head of state</li>
                <li>• Governor-General represented the Queen</li>
                <li>• Prime Minister as head of government</li>
                <li>• Federal system maintained</li>
                <li>• Parliamentary system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Republican Constitution (1963)</h4>
              <ul>
                <li>• Nigeria became a republic</li>
                <li>• President replaced the Queen</li>
                <li>• Ceremonial President</li>
                <li>• Prime Minister remained head of government</li>
                <li>• Removed British judicial appeals</li>
                <li>• Full sovereignty achieved</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Military Era and the 1979 Constitution",
        objective: "obj_011",
        text: `
          <h3>The 1979 Constitution</h3>
          <p>After military rule, the 1979 Constitution restored civilian governance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• Presidential system</li>
                <li>• Executive President</li>
                <li>• Separation of powers</li>
                <li>• Federal system</li>
                <li>• Fundamental rights</li>
                <li>• National Assembly: Senate and House</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Innovations</h4>
              <ul>
                <li>• Federal character principle</li>
                <li>• Revenue allocation formula</li>
                <li>• Independent judiciary</li>
                <li>• Protection of fundamental rights</li>
                <li>• Established the National Assembly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The 1999 Constitution",
        objective: "obj_012",
        text: `
          <h3>The 1999 Constitution</h3>
          <p>The <strong>1999 Constitution</strong> is the current constitution of Nigeria, adopted after military rule.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• Presidential system</li>
                <li>• Federal system (36 states, 1 FCT)</li>
                <li>• Separation of powers</li>
                <li>• Fundamental rights (Chapter IV)</li>
                <li>• Supreme Court as highest court</li>
                <li>• National Assembly (Senate + House)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Important Sections</h4>
              <ul>
                <li>• <strong>Section 1:</strong> Supremacy clause</li>
                <li>• <strong>Chapter IV:</strong> Fundamental rights</li>
                <li>• <strong>Chapter V:</strong> Executive, Legislature, Judiciary</li>
                <li>• <strong>Chapter IX:</strong> Local government</li>
                <li>• <strong>Chapter XII:</strong> Revenue allocation</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Amendments to the 1999 Constitution:</strong>
            <ul>
              <li>• First Amendment: 2010</li>
              <li>• Second Amendment: 2011</li>
              <li>• Third Amendment: 2011</li>
              <li>• Several other amendments</li>
              <li>• Requires 2/3 majority in National Assembly</li>
              <li>• Approval by 2/3 of states</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Constitutional Development Timeline",
        objective: "obj_014",
        text: `
          <h3>Timeline of Constitutional Development</h3>
          <p>A summary of Nigeria's constitutional evolution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Colonial Era</h4>
              <ul>
                <li>• <strong>1922:</strong> Clifford Constitution</li>
                <li>• <strong>1946:</strong> Richards Constitution</li>
                <li>• <strong>1951:</strong> Macpherson Constitution</li>
                <li>• <strong>1954:</strong> Lyttleton Constitution</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Post-Independence</h4>
              <ul>
                <li>• <strong>1960:</strong> Independence Constitution</li>
                <li>• <strong>1963:</strong> Republican Constitution</li>
                <li>• <strong>1979:</strong> Presidential Constitution</li>
                <li>• <strong>1999:</strong> Current Constitution</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📜 Constitutional Development</h4>
          <ul>
            <li>• Nigeria has had 9 constitutions</li>
            <li>• Clifford to Macpherson to Lyttleton</li>
            <li>• 1960: Independence</li>
            <li>• 1963: Republic</li>
            <li>• 1979 and 1999: Presidential systems</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Features</h4>
          <ul>
            <li>• Federal system</li>
            <li>• Separation of powers</li>
            <li>• Fundamental rights</li>
            <li>• Presidential system</li>
            <li>• Supremacy of the Constitution</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The Constitution is the supreme law of Nigeria. It establishes the framework for government and protects citizens' rights.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The 1999 Constitution is the first Nigerian constitution",
        correction: "Nigeria has had many constitutions",
        explanation: "Nigeria has had 9 constitutions since 1922."
      },
      {
        id: "mis_002",
        misconception: "Nigeria has always been a republic",
        correction: "Nigeria became a republic in 1963",
        explanation: "Nigeria was a monarchy from 1960-1963."
      },
      {
        id: "mis_003",
        misconception: "All constitutions are the same",
        correction: "Different constitutions have different features",
        explanation: "Each constitution reflected the political context of its time."
      },
      {
        id: "mis_004",
        misconception: "Constitutions cannot be changed",
        correction: "Constitutions can be amended",
        explanation: "The 1999 Constitution has been amended several times."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Governance",
        description: "The constitution guides governance.",
        example: "Government structure, powers"
      },
      {
        id: "app_002",
        title: "Rights Protection",
        description: "The constitution protects rights.",
        example: "Fundamental rights enforcement"
      },
      {
        id: "app_003",
        title: "Legal Framework",
        description: "The constitution provides legal framework.",
        example: "Law-making, judicial decisions"
      },
      {
        id: "app_004",
        title: "National Unity",
        description: "The constitution promotes unity.",
        example: "Federal character, equal representation"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Constitution", definition: "The fundamental law of a country." },
    { term: "Constitutional Development", definition: "The evolution of a country's constitution." },
    { term: "Written Constitution", definition: "A constitution codified in a single document." },
    { term: "Unwritten Constitution", definition: "A constitution based on conventions." },
    { term: "Rigid Constitution", definition: "A constitution that is difficult to amend." },
    { term: "Flexible Constitution", definition: "A constitution that is easy to amend." },
    { term: "Clifford Constitution", definition: "The 1922 Nigerian constitution." },
    { term: "Richards Constitution", definition: "The 1946 Nigerian constitution." },
    { term: "Macpherson Constitution", definition: "The 1951 Nigerian constitution." },
    { term: "Lyttleton Constitution", definition: "The 1954 Nigerian constitution." },
    { term: "Independence Constitution", definition: "The 1960 Nigerian constitution." },
    { term: "Republican Constitution", definition: "The 1963 Nigerian constitution." },
    { term: "1979 Constitution", definition: "The constitution adopted in 1979." },
    { term: "1999 Constitution", definition: "The current Nigerian constitution." },
    { term: "Supremacy Clause", definition: "The clause making the constitution supreme." },
    { term: "Fundamental Rights", definition: "Basic rights protected by the constitution." },
    { term: "Separation of Powers", definition: "Division of powers among branches." },
    { term: "Federal Character", definition: "Principle of representation from all states." },
    { term: "Amendment", definition: "A change to the constitution." },
    { term: "Presidential System", definition: "A system with an executive President." }
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
      question: "What is a constitution?",
      type: "multiple_choice",
      options: [
        "A type of law",
        "The fundamental law of a country",
        "A court decision",
        "A government policy"
      ],
      answer: "The fundamental law of a country",
      explanation: "A constitution is the fundamental law of a country."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a written constitution?",
      type: "multiple_choice",
      options: [
        "A constitution based on conventions",
        "A constitution codified in a single document",
        "A constitution that is easy to amend",
        "A constitution that is not written"
      ],
      answer: "A constitution codified in a single document",
      explanation: "A written constitution is codified in a single document."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a feature of a constitution?",
      type: "multiple_choice",
      options: ["Supremacy", "Flexibility", "Informality", "No rights"],
      answer: "Supremacy",
      explanation: "Supremacy is a key feature of a constitution."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which was the first Nigerian constitution?",
      type: "multiple_choice",
      options: [
        "Richards Constitution (1946)",
        "Clifford Constitution (1922)",
        "Macpherson Constitution (1951)",
        "Lyttleton Constitution (1954)"
      ],
      answer: "Clifford Constitution (1922)",
      explanation: "The Clifford Constitution of 1922 was the first."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What was introduced by the Clifford Constitution?",
      type: "multiple_choice",
      options: [
        "Regional assemblies",
        "Elective principle",
        "Federal system",
        "Presidential system"
      ],
      answer: "Elective principle",
      explanation: "The Clifford Constitution introduced the elective principle."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What was the key feature of the Richards Constitution?",
      type: "multiple_choice",
      options: [
        "Created regional assemblies",
        "Introduced the presidential system",
        "Established the Supreme Court",
        "Created local governments"
      ],
      answer: "Created regional assemblies",
      explanation: "The Richards Constitution created regional assemblies."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What was the significance of the Macpherson Constitution?",
      type: "multiple_choice",
      options: [
        "More Nigerian involvement",
        "Independence from Britain",
        "Presidential system",
        "Local government system"
      ],
      answer: "More Nigerian involvement",
      explanation: "The Macpherson Constitution allowed more Nigerian involvement."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What did the Lyttleton Constitution establish?",
      type: "multiple_choice",
      options: [
        "A unitary system",
        "A federal system",
        "A presidential system",
        "A parliamentary system"
      ],
      answer: "A federal system",
      explanation: "The Lyttleton Constitution established the federal system."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "When did Nigeria become independent?",
      type: "multiple_choice",
      options: ["1960", "1963", "1979", "1999"],
      answer: "1960",
      explanation: "Nigeria became independent in 1960."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What did the 1963 Constitution establish?",
      type: "multiple_choice",
      options: [
        "Independence",
        "A republic",
        "A military government",
        "A monarchy"
      ],
      answer: "A republic",
      explanation: "The 1963 Constitution made Nigeria a republic."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What system did the 1979 Constitution introduce?",
      type: "multiple_choice",
      options: [
        "Parliamentary system",
        "Presidential system",
        "Unitary system",
        "Military system"
      ],
      answer: "Presidential system",
      explanation: "The 1979 Constitution introduced the presidential system."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which constitution is currently in use in Nigeria?",
      type: "multiple_choice",
      options: ["1979 Constitution", "1989 Constitution", "1999 Constitution", "1963 Constitution"],
      answer: "1999 Constitution",
      explanation: "The 1999 Constitution is currently in use."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is required to amend the Nigerian Constitution?",
      type: "multiple_choice",
      options: [
        "Simple majority",
        "2/3 majority in National Assembly",
        "President's approval only",
        "Court decision"
      ],
      answer: "2/3 majority in National Assembly",
      explanation: "Amendments require 2/3 majority in the National Assembly."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is constitutional development important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It shows Nigeria's political evolution",
        "It only affects politicians",
        "It is irrelevant"
      ],
      answer: "It shows Nigeria's political evolution",
      explanation: "Constitutional development shows Nigeria's political evolution."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "What year was the Lyttleton Constitution passed?",
      type: "multiple_choice",
      options: ["1946", "1951", "1954", "1960"],
      answer: "1954",
      explanation: "The Lyttleton Constitution was passed in 1954."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_constitutional_development",
    title: "Constitutional Development Quiz",
    description: "Test your understanding of constitutional development in Nigeria",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a constitution?",
        type: "short_answer",
        answer_key: "The fundamental law of a country",
        explanation: "A constitution is the fundamental law of a country."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a written constitution?",
        type: "short_answer",
        answer_key: "A constitution codified in a single document",
        explanation: "A written constitution is codified in a single document."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name one feature of a constitution.",
        type: "short_answer",
        answer_key: "Supremacy (or any valid)",
        explanation: "Supremacy is a key feature of a constitution."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which was the first Nigerian constitution?",
        type: "short_answer",
        answer_key: "Clifford Constitution (1922)",
        explanation: "The Clifford Constitution of 1922 was the first."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What was introduced by the Clifford Constitution?",
        type: "short_answer",
        answer_key: "Elective principle",
        explanation: "The Clifford Constitution introduced the elective principle."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What did the Richards Constitution create?",
        type: "short_answer",
        answer_key: "Regional assemblies",
        explanation: "The Richards Constitution created regional assemblies."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What did the Lyttleton Constitution establish?",
        type: "short_answer",
        answer_key: "A federal system",
        explanation: "The Lyttleton Constitution established the federal system."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "When did Nigeria become independent?",
        type: "short_answer",
        answer_key: "1960",
        explanation: "Nigeria became independent in 1960."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What did the 1963 Constitution establish?",
        type: "short_answer",
        answer_key: "A republic",
        explanation: "The 1963 Constitution made Nigeria a republic."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Which constitution is currently in use in Nigeria?",
        type: "short_answer",
        answer_key: "1999 Constitution",
        explanation: "The 1999 Constitution is currently in use."
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
        "Understand what a constitution is",
        "Trace Nigeria's constitutional development",
        "Describe key features of each constitution",
        "Understand the importance of constitutional development"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a constitution?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Constitutions" },
        { time: "10-15 min", activity: "Direct Instruction - Colonial Constitutions" },
        { time: "15-20 min", activity: "Direct Instruction - Independence and Republican" },
        { time: "20-25 min", activity: "Direct Instruction - 1979 Constitution" },
        { time: "25-30 min", activity: "Direct Instruction - 1999 Constitution" },
        { time: "30-35 min", activity: "Direct Instruction - Amendments" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The fundamental law of a country",
        prac_002: "A constitution codified in a single document",
        prac_003: "Supremacy",
        prac_004: "Clifford Constitution (1922)",
        prac_005: "Elective principle",
        prac_006: "Created regional assemblies",
        prac_007: "More Nigerian involvement",
        prac_008: "A federal system",
        prac_009: "1960",
        prac_010: "A republic",
        prac_011: "Presidential system",
        prac_012: "1999 Constitution",
        prac_013: "2/3 majority in National Assembly",
        prac_014: "It shows Nigeria's political evolution",
        prac_015: "1954"
      },
      assessment: {
        ass_001: "The fundamental law of a country",
        ass_002: "A constitution codified in a single document",
        ass_003: "Supremacy (or any valid)",
        ass_004: "Clifford Constitution (1922)",
        ass_005: "Elective principle",
        ass_006: "Regional assemblies",
        ass_007: "A federal system",
        ass_008: "1960",
        ass_009: "A republic",
        ass_010: "1999 Constitution"
      }
    },
    extensionActivities: [
      "Research the 1999 Constitution",
      "Study constitutional amendments",
      "Compare Nigerian constitutions",
      "Research constitutional reform"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a timeline"
      ],
      advanced: [
        "Research constitutional law",
        "Study comparative constitutions",
        "Research constitutional reform",
        "Analyze constitutional provisions"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "timeline",
      title: "Constitutional Development Timeline",
      description: "Timeline showing Nigeria's constitutional development",
      url: "/diagrams/constitutional-timeline.png",
      alt: "Constitutional development timeline"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Comparison of Constitutions",
      description: "Chart comparing key features of Nigerian constitutions",
      url: "/diagrams/constitution-comparison.png",
      alt: "Constitution comparison chart"
    }
  ]
};