// Location: src/data/lessons/social_sciences/government/nigerian_government.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "gov_lesson_nigerian_government",
  subject: "Government",
  topic: "Nigerian Government",
  name: "Nigerian Government",
  icon: "🇳🇬",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of government basics",
    "Knowledge of the Nigerian Constitution",
    "Understanding of democracy",
    "Knowledge of Nigerian history"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Constitutional Development",
      file: "social_sciences/government/constitutional_development.js"
    },
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
      description: "Explain the structure of the Nigerian government",
      indicator: "Student can describe the federal structure of Nigeria"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the executive arm of government in Nigeria",
      indicator: "Student can describe the roles of the President, Vice President, and Cabinet"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the legislative arm of government in Nigeria",
      indicator: "Student can describe the National Assembly and its functions"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the Nigerian Constitution and its features",
      indicator: "Student can explain the key features of the Nigerian Constitution"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the role of the judiciary in Nigeria",
      indicator: "Student can describe the Nigerian court system"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the federal system in Nigeria",
      indicator: "Student can explain the division of powers between federal and state governments"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the roles of the President and Vice President",
      indicator: "Student can describe the powers and functions of the President"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the National Assembly",
      indicator: "Student can explain the Senate and House of Representatives"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the role of the Supreme Court",
      indicator: "Student can describe the functions of the Supreme Court"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the principles of Nigerian federalism",
      indicator: "Student can discuss the key principles of Nigerian federalism"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of separation of powers in Nigeria",
      indicator: "Student can describe how power is shared among branches"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the challenges facing Nigerian government",
      indicator: "Student can discuss problems in Nigerian governance"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the role of local government in Nigeria",
      indicator: "Student can describe the functions of local government"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the electoral system in Nigeria",
      indicator: "Student can explain how elections are conducted in Nigeria"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of INEC in Nigerian democracy",
      indicator: "Student can describe the functions of INEC"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Evaluate the performance of Nigerian government",
      indicator: "Student can assess the effectiveness of Nigerian governance"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Nigerian Government - Structure and Functions",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the structure, organs, and functions of the Nigerian government."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Nigerian Government</h2>
      <p><strong>Nigeria</strong> is a Federal Republic with a presidential system of government. The Nigerian government operates under the 1999 Constitution (as amended), which establishes three tiers of government: federal, state, and local. Understanding the structure and functions of the Nigerian government is essential for every citizen.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🇳🇬 Key Concepts</h3>
          <ul>
            <li>✓ Federal System</li>
            <li>✓ Executive Arm</li>
            <li>✓ Legislative Arm</li>
            <li>✓ Judicial Arm</li>
            <li>✓ The Constitution</li>
            <li>✓ Separation of Powers</li>
            <li>✓ Local Government</li>
            <li>✓ INEC</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Nigeria has 36 states and 1 FCT</li>
            <li>• The President is the head of state</li>
            <li>• The National Assembly has 469 members</li>
            <li>• Nigeria has a multi-party system</li>
            <li>• The Supreme Court is the highest court</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Understanding Nigerian Government Matters</h4>
        <p>Understanding Nigerian government helps citizens know their rights, participate in governance, and hold leaders accountable.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Structure of Nigerian Government",
        objective: "obj_001",
        text: `
          <h3>Structure of Nigerian Government</h3>
          <p>Nigeria operates a <strong>Federal Republic</strong> with three tiers of government.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Federal Government</h4>
              <ul>
                <li>• Central government</li>
                <li>• Located in Abuja</li>
                <li>• Handles national affairs</li>
                <li>• President as head</li>
                <li>• National Assembly</li>
                <li>• Supreme Court</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 State Government</h4>
              <ul>
                <li>• 36 state governments</li>
                <li>• Governors as heads</li>
                <li>• State Houses of Assembly</li>
                <li>• Handle state affairs</li>
                <li>• State courts</li>
                <li>• Local government supervision</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Local Government</h4>
              <ul>
                <li>• 774 local governments</li>
                <li>• Chairpersons as heads</li>
                <li>• Councillors</li>
                <li>• Handle local affairs</li>
                <li>• Primary services</li>
                <li>• Closest to the people</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Executive Arm",
        objective: "obj_002",
        text: `
          <h3>The Executive Arm</h3>
          <p>The <strong>Executive</strong> is responsible for implementing and enforcing laws.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Federal Executive</h4>
              <ul>
                <li>• <strong>President:</strong> Head of state and government</li>
                <li>• <strong>Vice President:</strong> Deputy to the President</li>
                <li>• <strong>Cabinet:</strong> Ministers appointed by the President</li>
                <li>• <strong>Federal Executive Council:</strong> Cabinet meetings</li>
                <li>• <strong>Civil service:</strong> Career bureaucrats</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 State Executive</h4>
              <ul>
                <li>• <strong>Governor:</strong> Head of state government</li>
                <li>• <strong>Deputy Governor:</strong> Deputy to the Governor</li>
                <li>• <strong>Commissioners:</strong> State ministers</li>
                <li>• <strong>State Executive Council:</strong> Cabinet meetings</li>
                <li>• <strong>Local government:</strong> Chairpersons</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Powers of the President:</strong>
            <ul>
              <li>• Commander-in-Chief of the Armed Forces</li>
              <li>• Appoints ministers and judges</li>
              <li>• Assents to bills</li>
              <li>• Conducts foreign relations</li>
              <li>• Issues executive orders</li>
              <li>• Can declare a state of emergency</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Legislative Arm",
        objective: "obj_003",
        text: `
          <h3>The Legislative Arm</h3>
          <p>The <strong>Legislature</strong> is responsible for making laws.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 National Assembly</h4>
              <ul>
                <li>• <strong>Bicameral:</strong> Two houses</li>
                <li>• <strong>Senate:</strong> 109 members (3 per state + 1 for FCT)</li>
                <li>• <strong>House of Representatives:</strong> 360 members</li>
                <li>• <strong>Senate President:</strong> Leader of the Senate</li>
                <li>• <strong>Speaker:</strong> Leader of the House</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 State Houses of Assembly</h4>
              <ul>
                <li>• <strong>Unicameral:</strong> One house each</li>
                <li>• <strong>Members:</strong> Elected from constituencies</li>
                <li>• <strong>Speaker:</strong> Leader of the House</li>
                <li>• Make laws for their states</li>
                <li>• Oversee state government</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Functions of the National Assembly:</strong>
            <ul>
              <li>• Makes federal laws</li>
              <li>• Approves the national budget</li>
              <li>• Confirms appointments</li>
              <li>• Conducts oversight</li>
              <li>• Can impeach the President</li>
              <li>• Amends the Constitution</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Judicial Arm",
        objective: "obj_005",
        text: `
          <h3>The Judicial Arm</h3>
          <p>The <strong>Judiciary</strong> is responsible for interpreting laws and administering justice.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Federal Courts</h4>
              <ul>
                <li>• <strong>Supreme Court:</strong> Highest court</li>
                <li>• <strong>Court of Appeal:</strong> Intermediate</li>
                <li>• <strong>Federal High Court:</strong> Original jurisdiction</li>
                <li>• <strong>National Industrial Court:</strong> Labour matters</li>
                <li>• <strong>Customary Court of Appeal:</strong> Customary law</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 State Courts</h4>
              <ul>
                <li>• <strong>High Court:</strong> State level</li>
                <li>• <strong>Magistrate Courts:</strong> Lower courts</li>
                <li>• <strong>Customary Courts:</strong> Customary law</li>
                <li>• <strong>Area Courts:</strong> Northern states</li>
                <li>• <strong>Sharia Courts:</strong> Islamic law</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Functions of the Judiciary:</strong>
            <ul>
              <li>• Interprets laws</li>
              <li>• Resolves disputes</li>
              <li>• Protects rights</li>
              <li>• Judicial review</li>
              <li>• Holds government accountable</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Nigerian Constitution",
        objective: "obj_004",
        text: `
          <h3>The Nigerian Constitution</h3>
          <p>The <strong>1999 Constitution</strong> is the supreme law of Nigeria.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Federal system:</strong> Division of powers</li>
                <li>• <strong>Presidential system:</strong> President as head</li>
                <li>• <strong>Separation of powers:</strong> Three branches</li>
                <li>• <strong>Fundamental rights:</strong> Chapter IV</li>
                <li>• <strong>Supremacy clause:</strong> Constitution is supreme</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Amendments</h4>
              <ul>
                <li>• First Amendment: 2010</li>
                <li>• Several amendments since</li>
                <li>• Requires 2/3 majority</li>
                <li>• National Assembly can amend</li>
                <li>• State Houses of Assembly must approve</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Federalism in Nigeria",
        objective: "obj_010",
        text: `
          <h3>Federalism in Nigeria</h3>
          <p><strong>Federalism</strong> is the division of powers between the federal and state governments.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Exclusive Legislative List</h4>
              <ul>
                <li>• Federal government only</li>
                <li>• Defence, foreign affairs</li>
                <li>• Currency, banking</li>
                <li>• Immigration, citizenship</li>
                <li>• Federal elections</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Concurrent Legislative List</h4>
              <ul>
                <li>• Both federal and state</li>
                <li>• Education</li>
                <li>• Health</li>
                <li>• Agriculture</li>
                <li>• Transport</li>
                <li>• Mining</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Residual List</h4>
              <ul>
                <li>• State government only</li>
                <li>• Local government</li>
                <li>• Chieftaincy matters</li>
                <li>• Land use</li>
                <li>• Traditional institutions</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Principles of Nigerian Federalism</h4>
              <ul>
                <li>• Federal supremacy</li>
                <li>• Fiscal federalism</li>
                <li>• Revenue allocation</li>
                <li>• Derivation principle</li>
                <li>• Federal character</li>
                <li>• State creation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Local Government",
        objective: "obj_013",
        text: `
          <h3>Local Government in Nigeria</h3>
          <p><strong>Local government</strong> is the third tier of government, closest to the people.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• <strong>Chairperson:</strong> Executive head</li>
                <li>• <strong>Councillors:</strong> Elected representatives</li>
                <li>• <strong>Secretary:</strong> Administrative head</li>
                <li>• <strong>Supervisory Councillors:</strong> Department heads</li>
                <li>• <strong>Treasure:</strong> Financial officer</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Primary education</li>
                <li>• Primary health care</li>
                <li>• Market development</li>
                <li>• Road construction</li>
                <li>• Waste management</li>
                <li>• Community development</li>
                <li>• Revenue collection</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Electoral System",
        objective: "obj_014",
        text: `
          <h3>The Electoral System in Nigeria</h3>
          <p>Nigeria conducts elections at all levels of government.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Elections</h4>
              <ul>
                <li>• <strong>Presidential:</strong> Every 4 years</li>
                <li>• <strong>National Assembly:</strong> Every 4 years</li>
                <li>• <strong>Gubernatorial:</strong> Every 4 years</li>
                <li>• <strong>State Assembly:</strong> Every 4 years</li>
                <li>• <strong>Local Government:</strong> Every 4 years</li>
                <li>• <strong>By-elections:</strong> Fill vacancies</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Electoral Process</h4>
              <ul>
                <li>• <strong>Voter registration:</strong> INEC</li>
                <li>• <strong>Candidate nomination:</strong> Political parties</li>
                <li>• <strong>Campaign:</strong> Political campaigns</li>
                <li>• <strong>Voting:</strong> Secret ballot</li>
                <li>• <strong>Counting:</strong> Transparent process</li>
                <li>• <strong>Result declaration:</strong> INEC announces</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "INEC",
        objective: "obj_015",
        text: `
          <h3>INEC - Independent National Electoral Commission</h3>
          <p><strong>INEC</strong> is the body responsible for conducting elections in Nigeria.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of INEC</h4>
              <ul>
                <li>• Register political parties</li>
                <li>• Register voters</li>
                <li>• Conduct elections</li>
                <li>• Announce results</li>
                <li>• Voter education</li>
                <li>• Electoral reform</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Established in 1998</li>
                <li>• Headquarters in Abuja</li>
                <li>• 12 National Commissioners</li>
                <li>• 36 State Resident Electoral Commissioners</li>
                <li>• Over 90 million registered voters</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Challenges of Nigerian Government",
        objective: "obj_012",
        text: `
          <h3>Challenges Facing Nigerian Government</h3>
          <p>The Nigerian government faces several challenges.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Challenges</h4>
              <ul>
                <li>• <strong>Corruption:</strong> Abuse of office</li>
                <li>• <strong>Insecurity:</strong> Boko Haram, banditry</li>
                <li>• <strong>Poverty:</strong> High poverty rate</li>
                <li>• <strong>Unemployment:</strong> Youth unemployment</li>
                <li>• <strong>Infrastructure deficit:</strong> Poor infrastructure</li>
                <li>• <strong>Weak institutions:</strong> Poor governance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Anti-corruption:</strong> EFCC, ICPC</li>
                <li>• <strong>Security reform:</strong> Modernization</li>
                <li>• <strong>Economic diversification:</strong> Reduce oil dependence</li>
                <li>• <strong>Infrastructure development:</strong> Public investment</li>
                <li>• <strong>Institutional strengthening:</strong> Good governance</li>
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
          <h4>🇳🇬 Nigerian Government</h4>
          <ul>
            <li>• Federal Republic with three tiers</li>
            <li>• Executive, Legislative, Judicial branches</li>
            <li>• 1999 Constitution is supreme</li>
            <li>• Federal system divides powers</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Institutions</h4>
          <ul>
            <li>• President and Cabinet</li>
            <li>• National Assembly</li>
            <li>• Courts and Judiciary</li>
            <li>• INEC conducts elections</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Understanding Nigerian government helps citizens participate effectively and hold leaders accountable.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The President has unlimited power",
        correction: "The President is limited by the Constitution",
        explanation: "The Constitution and other branches limit the President's powers."
      },
      {
        id: "mis_002",
        misconception: "The National Assembly makes all laws",
        correction: "The National Assembly makes federal laws; states make their own",
        explanation: "States have their own Houses of Assembly."
      },
      {
        id: "mis_003",
        misconception: "The judiciary is not independent",
        correction: "The judiciary is independent in Nigeria",
        explanation: "The Constitution guarantees judicial independence."
      },
      {
        id: "mis_004",
        misconception: "Local governments have no real power",
        correction: "Local governments have significant functions",
        explanation: "They provide essential services at the grassroots level."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Governance",
        description: "Understanding government helps citizens participate.",
        example: "Voting, civic engagement"
      },
      {
        id: "app_002",
        title: "Accountability",
        description: "Knowledge helps hold leaders accountable.",
        example: "Demanding transparency, oversight"
      },
      {
        id: "app_003",
        title: "Service Delivery",
        description: "Understanding government helps access services.",
        example: "Education, healthcare, infrastructure"
      },
      {
        id: "app_004",
        title: "Public Participation",
        description: "Citizens can participate in governance.",
        example: "Town hall meetings, public hearings"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Federal Republic", definition: "A federal system with elected representatives." },
    { term: "Executive", definition: "Branch that implements and enforces laws." },
    { term: "Legislature", definition: "Branch that makes laws." },
    { term: "Judiciary", definition: "Branch that interprets laws." },
    { term: "Constitution", definition: "The supreme law of Nigeria." },
    { term: "National Assembly", definition: "Nigeria's federal legislature." },
    { term: "Senate", definition: "Upper house of the National Assembly." },
    { term: "House of Representatives", definition: "Lower house of the National Assembly." },
    { term: "Supreme Court", definition: "The highest court in Nigeria." },
    { term: "INEC", definition: "Independent National Electoral Commission." },
    { term: "Federalism", definition: "Division of powers between levels." },
    { term: "Exclusive List", definition: "Powers only for the federal government." },
    { term: "Concurrent List", definition: "Powers for both federal and state." },
    { term: "Residual List", definition: "Powers only for state governments." },
    { term: "Local Government", definition: "The third tier of government." },
    { term: "Governor", definition: "Head of a state government." },
    { term: "President", definition: "Head of the federal government." },
    { term: "Cabinet", definition: "Ministers appointed by the President." },
    { term: "Judicial Review", definition: "Courts reviewing laws." },
    { term: "Rule of Law", definition: "All are subject to the law." }
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
      question: "How many tiers of government are there in Nigeria?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Nigeria has three tiers: federal, state, and local."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Who is the head of the Nigerian government?",
      type: "multiple_choice",
      options: ["The Senate President", "The President", "The Chief Justice", "The Inspector General"],
      answer: "The President",
      explanation: "The President is the head of the Nigerian government."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the National Assembly?",
      type: "multiple_choice",
      options: [
        "The judiciary",
        "The legislature",
        "The executive",
        "The local government"
      ],
      answer: "The legislature",
      explanation: "The National Assembly is the legislative arm."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which constitution is currently in use in Nigeria?",
      type: "multiple_choice",
      options: ["1979 Constitution", "1989 Constitution", "1999 Constitution", "2000 Constitution"],
      answer: "1999 Constitution",
      explanation: "The 1999 Constitution is currently in use."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the highest court in Nigeria?",
      type: "multiple_choice",
      options: [
        "The Court of Appeal",
        "The Supreme Court",
        "The Federal High Court",
        "The High Court"
      ],
      answer: "The Supreme Court",
      explanation: "The Supreme Court is the highest court in Nigeria."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is federalism?",
      type: "multiple_choice",
      options: [
        "A unitary system",
        "Division of powers between levels",
        "Concentration of powers",
        "No government"
      ],
      answer: "Division of powers between levels",
      explanation: "Federalism is the division of powers between levels of government."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a power of the President?",
      type: "multiple_choice",
      options: [
        "To make laws",
        "To command the armed forces",
        "To interpret laws",
        "To run elections"
      ],
      answer: "To command the armed forces",
      explanation: "The President is the Commander-in-Chief."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "How many members are in the House of Representatives?",
      type: "multiple_choice",
      options: ["109", "360", "469", "774"],
      answer: "360",
      explanation: "The House of Representatives has 360 members."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the role of the Supreme Court?",
      type: "multiple_choice",
      options: [
        "To make laws",
        "To interpret laws and administer justice",
        "To enforce laws",
        "To conduct elections"
      ],
      answer: "To interpret laws and administer justice",
      explanation: "The Supreme Court interprets laws and administers justice."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the principle of federal character?",
      type: "multiple_choice",
      options: [
        "Representation from all states",
        "Representation from one region",
        "No representation",
        "Only federal officials"
      ],
      answer: "Representation from all states",
      explanation: "Federal character ensures representation from all states."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is separation of powers?",
      type: "multiple_choice",
      options: [
        "Concentrating powers",
        "Dividing powers among branches",
        "Removing powers",
        "Sharing with citizens"
      ],
      answer: "Dividing powers among branches",
      explanation: "Separation of powers divides powers among branches."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a challenge facing Nigerian government?",
      type: "multiple_choice",
      options: ["Good governance", "Corruption", "Strong institutions", "Economic growth"],
      answer: "Corruption",
      explanation: "Corruption is a major challenge facing Nigerian government."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the role of local government?",
      type: "multiple_choice",
      options: [
        "National defense",
        "Primary services",
        "Foreign affairs",
        "Currency issuance"
      ],
      answer: "Primary services",
      explanation: "Local government provides primary services."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the electoral system in Nigeria?",
      type: "multiple_choice",
      options: [
        "Appointed leaders",
        "Elected representatives",
        "Military rule",
        "Monarchy"
      ],
      answer: "Elected representatives",
      explanation: "Nigeria elects representatives at all levels."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the role of INEC?",
      type: "multiple_choice",
      options: [
        "To make laws",
        "To conduct elections",
        "To interpret laws",
        "To enforce laws"
      ],
      answer: "To conduct elections",
      explanation: "INEC conducts elections in Nigeria."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_nigerian_government",
    title: "Nigerian Government Quiz",
    description: "Test your understanding of Nigerian government",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many tiers of government are there in Nigeria?",
        type: "short_answer",
        answer_key: "3",
        explanation: "Nigeria has three tiers: federal, state, and local."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Who is the head of the Nigerian government?",
        type: "short_answer",
        answer_key: "The President",
        explanation: "The President is the head of the Nigerian government."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the National Assembly?",
        type: "short_answer",
        answer_key: "The legislature",
        explanation: "The National Assembly is the legislative arm."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which constitution is currently in use in Nigeria?",
        type: "short_answer",
        answer_key: "1999 Constitution",
        explanation: "The 1999 Constitution is currently in use."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the highest court in Nigeria?",
        type: "short_answer",
        answer_key: "The Supreme Court",
        explanation: "The Supreme Court is the highest court in Nigeria."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is federalism?",
        type: "short_answer",
        answer_key: "Division of powers between levels",
        explanation: "Federalism is the division of powers between levels of government."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a power of the President?",
        type: "short_answer",
        answer_key: "Commander-in-Chief of the Armed Forces",
        explanation: "The President is the Commander-in-Chief."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "How many members are in the House of Representatives?",
        type: "short_answer",
        answer_key: "360",
        explanation: "The House of Representatives has 360 members."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the role of the Supreme Court?",
        type: "short_answer",
        answer_key: "To interpret laws and administer justice",
        explanation: "The Supreme Court interprets laws and administers justice."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is the role of INEC?",
        type: "short_answer",
        answer_key: "To conduct elections",
        explanation: "INEC conducts elections in Nigeria."
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
        "Understand the structure of Nigerian government",
        "Explain the three branches of government",
        "Describe the federal system",
        "Understand the role of INEC"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Nigerian government?" },
        { time: "5-10 min", activity: "Direct Instruction - Structure of Government" },
        { time: "10-15 min", activity: "Direct Instruction - The Executive" },
        { time: "15-20 min", activity: "Direct Instruction - The Legislature" },
        { time: "20-25 min", activity: "Direct Instruction - The Judiciary" },
        { time: "25-30 min", activity: "Direct Instruction - Federalism" },
        { time: "30-35 min", activity: "Direct Instruction - INEC and Elections" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "3",
        prac_002: "The President",
        prac_003: "The legislature",
        prac_004: "1999 Constitution",
        prac_005: "The Supreme Court",
        prac_006: "Division of powers between levels",
        prac_007: "To command the armed forces",
        prac_008: "360",
        prac_009: "To interpret laws and administer justice",
        prac_010: "Representation from all states",
        prac_011: "Dividing powers among branches",
        prac_012: "Corruption",
        prac_013: "Primary services",
        prac_014: "Elected representatives",
        prac_015: "To conduct elections"
      },
      assessment: {
        ass_001: "3",
        ass_002: "The President",
        ass_003: "The legislature",
        ass_004: "1999 Constitution",
        ass_005: "The Supreme Court",
        ass_006: "Division of powers between levels",
        ass_007: "Commander-in-Chief of the Armed Forces",
        ass_008: "360",
        ass_009: "To interpret laws and administer justice",
        ass_010: "To conduct elections"
      }
    },
    extensionActivities: [
      "Research the Nigerian Constitution",
      "Study the National Assembly",
      "Analyze INEC's role",
      "Research local government"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research federalism",
        "Study constitutional law",
        "Analyze electoral reforms",
        "Research governance challenges"
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
      title: "Structure of Nigerian Government",
      description: "Diagram showing the structure of Nigerian government",
      url: "/diagrams/nigerian-government-structure.png",
      alt: "Nigerian government structure diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Federalism in Nigeria",
      description: "Diagram showing the federal system",
      url: "/diagrams/nigerian-federalism.png",
      alt: "Nigerian federalism diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "INEC and Elections",
      description: "Diagram showing the electoral process",
      url: "/diagrams/inec-elections.png",
      alt: "INEC and elections diagram"
    }
  ]
};