// Location: src/data/lessons/social_sciences/government/introduction_to_government.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "gov_lesson_introduction",
  subject: "Government",
  topic: "Introduction to Government",
  name: "Introduction to Government",
  icon: "⚖️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of civics",
    "Knowledge of democracy",
    "Awareness of governance",
    "Understanding of society"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Nigerian Government",
      file: "social_sciences/government/nigerian_government.js"
    },
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
      description: "Define government and explain its importance",
      indicator: "Student can explain what government is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the functions of government",
      indicator: "Student can list the key functions of government"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of the state",
      indicator: "Student can describe the elements of a state"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the systems of government",
      indicator: "Student can distinguish between different systems of government"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the forms of government",
      indicator: "Student can identify different forms of government"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the organs of government",
      indicator: "Student can explain the three branches of government"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of separation of powers",
      indicator: "Student can describe how power is divided"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of checks and balances",
      indicator: "Student can describe how branches check each other"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the meaning of democracy",
      indicator: "Student can explain democratic principles"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between government and the state",
      indicator: "Student can distinguish between government and the state"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of sovereignty",
      indicator: "Student can describe what sovereignty means"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the importance of the constitution",
      indicator: "Student can explain why a constitution is important"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of rule of law",
      indicator: "Student can describe the importance of the rule of law"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the functions of government in society",
      indicator: "Student can discuss how government serves society"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the relationship between government and citizens",
      indicator: "Student can describe government-citizen relations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Introduction to Government - How Societies Are Governed",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about government, its functions, systems, and importance in society."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Government</h2>
      <p><strong>Government</strong> is the institution through which a society makes and enforces its laws and policies. It is the organized system of ruling and administering a country or community. Government provides the framework for social order, justice, and development.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Key Concepts</h3>
          <ul>
            <li>✓ Meaning of Government</li>
            <li>✓ Functions of Government</li>
            <li>✓ The State</li>
            <li>✓ Systems of Government</li>
            <li>✓ Forms of Government</li>
            <li>✓ Organs of Government</li>
            <li>✓ Rule of Law</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Government is as old as human civilization</li>
            <li>• Nigeria is a Federal Republic</li>
            <li>• There are three branches of government</li>
            <li>• The constitution is the supreme law</li>
            <li>• Government serves the people</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Government Matters</h4>
        <p>Government provides order, security, and services essential for society to function. Without government, there would be chaos and instability.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Government?",
        objective: "obj_001",
        text: `
          <h3>Understanding Government</h3>
          <p><strong>Government</strong> is the institution that makes and enforces laws, manages public affairs, and provides services to citizens.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Law-making:</strong> Creates laws</li>
                <li>• <strong>Law enforcement:</strong> Ensures compliance</li>
                <li>• <strong>Policy implementation:</strong> Carries out policies</li>
                <li>• <strong>Service delivery:</strong> Provides services</li>
                <li>• <strong>Conflict resolution:</strong> Settles disputes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Maintains law and order</li>
                <li>• Protects citizens' rights</li>
                <li>• Provides public services</li>
                <li>• Promotes economic development</li>
                <li>• Ensures national security</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Functions of Government",
        objective: "obj_002",
        text: `
          <h3>Functions of Government</h3>
          <p>Government performs several essential functions in society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Functions</h4>
              <ul>
                <li>• <strong>Legislative:</strong> Making laws</li>
                <li>• <strong>Executive:</strong> Implementing laws</li>
                <li>• <strong>Judicial:</strong> Interpreting laws</li>
                <li>• <strong>Security:</strong> Protecting citizens</li>
                <li>• <strong>Economic:</strong> Managing the economy</li>
                <li>• <strong>Social:</strong> Providing welfare</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Legislative:</strong> Passing budgets</li>
                <li>• <strong>Executive:</strong> Building roads</li>
                <li>• <strong>Judicial:</strong> Resolving disputes</li>
                <li>• <strong>Security:</strong> Police, military</li>
                <li>• <strong>Economic:</strong> Taxation, regulation</li>
                <li>• <strong>Social:</strong> Education, healthcare</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The State",
        objective: "obj_003",
        text: `
          <h3>The State</h3>
          <p>The <strong>state</strong> is a political community that has sovereign authority over a defined territory.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Elements of a State</h4>
              <ul>
                <li>• <strong>Population:</strong> People living in the state</li>
                <li>• <strong>Territory:</strong> Defined boundaries</li>
                <li>• <strong>Government:</strong> Governing institution</li>
                <li>• <strong>Sovereignty:</strong> Supreme authority</li>
                <li>• <strong>Recognition:</strong> By other states</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 State vs Government</h4>
              <ul>
                <li>• <strong>State:</strong> Permanent entity</li>
                <li>• <strong>Government:</strong> Temporary administration</li>
                <li>• Governments come and go</li>
                <li>• The state continues</li>
                <li>• Government is the machinery of the state</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Sovereignty",
        objective: "obj_011",
        text: `
          <h3>Sovereignty</h3>
          <p><strong>Sovereignty</strong> is the supreme authority of a state to govern itself without external interference.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Sovereignty</h4>
              <ul>
                <li>• <strong>Internal sovereignty:</strong> Supreme authority within</li>
                <li>• <strong>External sovereignty:</strong> Independence from outside</li>
                <li>• <strong>Legal sovereignty:</strong> Authority of the law</li>
                <li>• <strong>Political sovereignty:</strong> Power of the people</li>
                <li>• <strong>Popular sovereignty:</strong> People are the source</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Ensures independence</li>
                <li>• Protects from interference</li>
                <li>• Allows self-governance</li>
                <li>• Establishes national identity</li>
                <li>• Foundation of international relations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Systems of Government",
        objective: "obj_004",
        text: `
          <h3>Systems of Government</h3>
          <p>There are different systems of government based on the distribution of power.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Federal System</h4>
              <ul>
                <li>• Power shared between central and regional governments</li>
                <li>• Examples: Nigeria, USA, Canada</li>
                <li>• Two levels of government</li>
                <li>• Constitutional division of powers</li>
                <li>• Advantages: Diversity accommodated</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Unitary System</h4>
              <ul>
                <li>• Central government has all power</li>
                <li>• Examples: UK, France</li>
                <li>• Subnational units have limited autonomy</li>
                <li>• Centralized authority</li>
                <li>• Advantages: Unity and uniformity</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Confederal System</h4>
              <ul>
                <li>• States have more power than central government</li>
                <li>• Examples: Confederation</li>
                <li>• Weak central authority</li>
                <li>• Member states retain sovereignty</li>
                <li>• Advantages: Strong regional autonomy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Forms of Government",
        objective: "obj_005",
        text: `
          <h3>Forms of Government</h3>
          <p>Governments can take different forms based on who holds power.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Democratic Forms</h4>
              <ul>
                <li>• <strong>Presidential:</strong> President is head of state and government</li>
                <li>• <strong>Parliamentary:</strong> Prime Minister is head of government</li>
                <li>• <strong>Constitutional:</strong> Limited by constitution</li>
                <li>• <strong>Liberal:</strong> Protects individual rights</li>
                <li>• <strong>Social:</strong> Focus on social welfare</li>
                <li>• Examples: Nigeria (Presidential), UK (Parliamentary)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Non-Democratic Forms</h4>
              <ul>
                <li>• <strong>Monarchy:</strong> Rule by a king or queen</li>
                <li>• <strong>Dictatorship:</strong> Rule by one person</li>
                <li>• <strong>Totalitarianism:</strong> Complete state control</li>
                <li>• <strong>Theocracy:</strong> Rule by religious authorities</li>
                <li>• <strong>Military:</strong> Rule by the military</li>
                <li>• <strong>Oligarchy:</strong> Rule by a small group</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Organs of Government",
        objective: "obj_006",
        text: `
          <h3>Organs of Government</h3>
          <p>Government is divided into three branches.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Legislature</h4>
              <ul>
                <li>• Makes laws</li>
                <li>• Nigeria: National Assembly</li>
                <li>• Senate and House of Representatives</li>
                <li>• Passes budgets</li>
                <li>• Oversees the executive</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Executive</h4>
              <ul>
                <li>• Implements laws</li>
                <li>• Nigeria: President and Cabinet</li>
                <li>• Enforces policies</li>
                <li>• Manages government</li>
                <li>• Conducts foreign affairs</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Judiciary</h4>
              <ul>
                <li>• Interprets laws</li>
                <li>• Nigeria: Courts system</li>
                <li>• Supreme Court</li>
                <li>• Resolves disputes</li>
                <li>• Judicial review</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Separation of Powers",
        objective: "obj_007",
        text: `
          <h3>Separation of Powers</h3>
          <p><strong>Separation of powers</strong> is the division of government into branches to prevent concentration of power.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Each branch has its own powers</strong></li>
                <li>• <strong>No branch can dominate</strong></li>
                <li>• <strong>Branches are separate</strong></li>
                <li>• <strong>Independence of each branch</strong></li>
                <li>• <strong>Interdependence</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Prevents tyranny</li>
                <li>• Protects liberty</li>
                <li>• Ensures accountability</li>
                <li>• Promotes efficiency</li>
                <li>• Maintains balance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Checks and Balances",
        objective: "obj_008",
        text: `
          <h3>Checks and Balances</h3>
          <p><strong>Checks and balances</strong> allow each branch to limit the powers of the other branches.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Legislative Checks</h4>
              <ul>
                <li>• Can impeach President</li>
                <li>• Approves appointments</li>
                <li>• Passes laws</li>
                <li>• Controls budget</li>
                <li>• Investigates executive</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Executive Checks</h4>
              <ul>
                <li>• Vetoes legislation</li>
                <li>• Appoints judges</li>
                <li>• Issues executive orders</li>
                <li>• Conducts foreign policy</li>
                <li>• Commands military</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Judicial Checks</h4>
              <ul>
                <li>• Judicial review</li>
                <li>• Declares laws unconstitutional</li>
                <li>• Interprets laws</li>
                <li>• Settles disputes</li>
                <li>• Protects rights</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Rule of Law",
        objective: "obj_013",
        text: `
          <h3>Rule of Law</h3>
          <p>The <strong>rule of law</strong> is the principle that all people and institutions are subject to and accountable to the law.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Supremacy of law:</strong> Law is supreme</li>
                <li>• <strong>Equality before the law:</strong> Everyone is equal</li>
                <li>• <strong>Accountability:</strong> No one is above the law</li>
                <li>• <strong>Fairness:</strong> Justice for all</li>
                <li>• <strong>Access to justice:</strong> Right to fair hearing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Prevents abuse of power</li>
                <li>• Protects citizens' rights</li>
                <li>• Promotes stability</li>
                <li>• Ensures justice</li>
                <li>• Builds trust in government</li>
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
          <h4>⚖️ Government</h4>
          <ul>
            <li>• Institution that makes and enforces laws</li>
            <li>• Functions: legislative, executive, judicial</li>
            <li>• State: population, territory, government, sovereignty</li>
            <li>• Systems: federal, unitary, confederal</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Separation of powers prevents tyranny</li>
            <li>• Checks and balances ensure accountability</li>
            <li>• Rule of law protects citizens</li>
            <li>• Government serves the people</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Government exists to serve the people. A good government is accountable, transparent, and respects the rule of law.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Government and state are the same",
        correction: "Government is the machinery; the state is permanent",
        explanation: "Governments change; the state continues."
      },
      {
        id: "mis_002",
        misconception: "Democracy means unlimited power",
        correction: "Democracy is limited by the constitution and rights",
        explanation: "Democratic governments are limited by law."
      },
      {
        id: "mis_003",
        misconception: "Separation of powers means branches are completely separate",
        correction: "Branches are separate but interdependent",
        explanation: "Branches work together while checking each other."
      },
      {
        id: "mis_004",
        misconception: "Rule of law only applies to citizens",
        correction: "Rule of law applies to everyone including government",
        explanation: "No one is above the law."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Governance",
        description: "Government provides governance and services.",
        example: "Education, healthcare, infrastructure"
      },
      {
        id: "app_002",
        title: "Law and Order",
        description: "Government maintains law and order.",
        example: "Police, courts, security"
      },
      {
        id: "app_003",
        title: "Economic Management",
        description: "Government manages the economy.",
        example: "Taxation, budgets, regulation"
      },
      {
        id: "app_004",
        title: "Public Administration",
        description: "Government administers public services.",
        example: "Civil service, public policies"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Government", definition: "Institution that makes and enforces laws." },
    { term: "State", definition: "Political community with sovereign authority." },
    { term: "Sovereignty", definition: "Supreme authority of a state." },
    { term: "Constitution", definition: "Supreme law of the land." },
    { term: "Legislature", definition: "Branch that makes laws." },
    { term: "Executive", definition: "Branch that enforces laws." },
    { term: "Judiciary", definition: "Branch that interprets laws." },
    { term: "Federal System", definition: "Division of powers between levels." },
    { term: "Unitary System", definition: "Centralized government." },
    { term: "Confederal System", definition: "Decentralized government." },
    { term: "Separation of Powers", definition: "Division of powers among branches." },
    { term: "Checks and Balances", definition: "Branches limiting each other." },
    { term: "Rule of Law", definition: "All are subject to the law." },
    { term: "Democracy", definition: "Government by the people." },
    { term: "Dictatorship", definition: "Rule by one person." },
    { term: "Monarchy", definition: "Rule by a king or queen." },
    { term: "Presidential System", definition: "President as head of state." },
    { term: "Parliamentary System", definition: "Prime Minister as head of government." },
    { term: "Popular Sovereignty", definition: "People are the source of power." },
    { term: "Public Service", definition: "Services provided by government." }
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
      question: "What is government?",
      type: "multiple_choice",
      options: [
        "A social club",
        "The institution that makes and enforces laws",
        "A religious organization",
        "A business organization"
      ],
      answer: "The institution that makes and enforces laws",
      explanation: "Government is the institution that makes and enforces laws."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a function of government?",
      type: "multiple_choice",
      options: ["Making laws", "Playing games", "Entertaining people", "Farming"],
      answer: "Making laws",
      explanation: "Making laws is a key function of government."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an element of a state?",
      type: "multiple_choice",
      options: ["Population", "Population, territory, government, sovereignty", "Population only", "Government only"],
      answer: "Population, territory, government, sovereignty",
      explanation: "A state has population, territory, government, and sovereignty."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a federal system of government?",
      type: "multiple_choice",
      options: [
        "Power is concentrated in the central government",
        "Power is shared between central and regional governments",
        "Power is in the hands of one person",
        "There is no government"
      ],
      answer: "Power is shared between central and regional governments",
      explanation: "Federal systems share power between levels of government."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a democracy?",
      type: "multiple_choice",
      options: [
        "Rule by one person",
        "Government by the people",
        "Rule by the military",
        "Rule by a king"
      ],
      answer: "Government by the people",
      explanation: "Democracy is government by the people."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What are the three organs of government?",
      type: "multiple_choice",
      options: [
        "Legislature, Executive, Judiciary",
        "Senate, House, Courts",
        "President, Senate, Judiciary",
        "Police, Army, Navy"
      ],
      answer: "Legislature, Executive, Judiciary",
      explanation: "The three organs are legislature, executive, and judiciary."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is separation of powers?",
      type: "multiple_choice",
      options: [
        "Dividing powers among government branches",
        "Removing all powers",
        "Concentrating all powers",
        "Sharing powers with citizens"
      ],
      answer: "Dividing powers among government branches",
      explanation: "Separation of powers divides powers among branches."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What are checks and balances?",
      type: "multiple_choice",
      options: [
        "Branches completely controlling each other",
        "Branches limiting each other's powers",
        "Branches having no powers",
        "Branches being independent"
      ],
      answer: "Branches limiting each other's powers",
      explanation: "Checks and balances allow branches to limit each other."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a key principle of democracy?",
      type: "multiple_choice",
      options: [
        "One-person rule",
        "Popular sovereignty",
        "No elections",
        "Unlimited power"
      ],
      answer: "Popular sovereignty",
      explanation: "Popular sovereignty is a key democratic principle."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between government and the state?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Government is temporary; the state is permanent",
        "The state is temporary; government is permanent",
        "There is no difference"
      ],
      answer: "Government is temporary; the state is permanent",
      explanation: "Government changes; the state continues."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is sovereignty?",
      type: "multiple_choice",
      options: [
        "Limited authority",
        "Supreme authority of a state",
        "Shared authority",
        "Weak authority"
      ],
      answer: "Supreme authority of a state",
      explanation: "Sovereignty is the supreme authority of a state."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is a constitution important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It limits government power",
        "It gives unlimited power",
        "It is optional"
      ],
      answer: "It limits government power",
      explanation: "A constitution limits government power."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the rule of law?",
      type: "multiple_choice",
      options: [
        "Laws that apply only to citizens",
        "Everyone is subject to the law",
        "Leaders are above the law",
        "Laws are optional"
      ],
      answer: "Everyone is subject to the law",
      explanation: "The rule of law means everyone is subject to the law."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does government serve society?",
      type: "multiple_choice",
      options: [
        "It does not serve society",
        "By providing services and maintaining order",
        "By ignoring citizens",
        "By creating chaos"
      ],
      answer: "By providing services and maintaining order",
      explanation: "Government serves society by providing services and maintaining order."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the relationship between government and citizens?",
      type: "multiple_choice",
      options: [
        "Government controls citizens completely",
        "Citizens have no role",
        "Government serves and is accountable to citizens",
        "There is no relationship"
      ],
      answer: "Government serves and is accountable to citizens",
      explanation: "Government serves and is accountable to citizens."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_introduction_government",
    title: "Introduction to Government Quiz",
    description: "Test your understanding of government",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is government?",
        type: "short_answer",
        answer_key: "The institution that makes and enforces laws",
        explanation: "Government is the institution that makes and enforces laws."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one function of government.",
        type: "short_answer",
        answer_key: "Making laws (or any valid)",
        explanation: "Making laws is a key function of government."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are the elements of a state?",
        type: "short_answer",
        answer_key: "Population, territory, government, sovereignty",
        explanation: "A state has population, territory, government, and sovereignty."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a federal system of government?",
        type: "short_answer",
        answer_key: "Power is shared between central and regional governments",
        explanation: "Federal systems share power between levels of government."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is democracy?",
        type: "short_answer",
        answer_key: "Government by the people",
        explanation: "Democracy is government by the people."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What are the three organs of government?",
        type: "short_answer",
        answer_key: "Legislature, Executive, Judiciary",
        explanation: "The three organs are legislature, executive, and judiciary."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is separation of powers?",
        type: "short_answer",
        answer_key: "Dividing powers among government branches",
        explanation: "Separation of powers divides powers among branches."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What are checks and balances?",
        type: "short_answer",
        answer_key: "Branches limiting each other's powers",
        explanation: "Checks and balances allow branches to limit each other."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is sovereignty?",
        type: "short_answer",
        answer_key: "Supreme authority of a state",
        explanation: "Sovereignty is the supreme authority of a state."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the rule of law?",
        type: "short_answer",
        answer_key: "Everyone is subject to the law",
        explanation: "The rule of law means everyone is subject to the law."
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
        "Understand government and its functions",
        "Explain the elements of a state",
        "Describe systems and forms of government",
        "Understand separation of powers and rule of law"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is government?" },
        { time: "5-10 min", activity: "Direct Instruction - Functions of Government" },
        { time: "10-15 min", activity: "Direct Instruction - The State" },
        { time: "15-20 min", activity: "Direct Instruction - Systems of Government" },
        { time: "20-25 min", activity: "Direct Instruction - Organs of Government" },
        { time: "25-30 min", activity: "Direct Instruction - Separation of Powers" },
        { time: "30-35 min", activity: "Direct Instruction - Rule of Law" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The institution that makes and enforces laws",
        prac_002: "Making laws",
        prac_003: "Population, territory, government, sovereignty",
        prac_004: "Power is shared between central and regional governments",
        prac_005: "Government by the people",
        prac_006: "Legislature, Executive, Judiciary",
        prac_007: "Dividing powers among government branches",
        prac_008: "Branches limiting each other's powers",
        prac_009: "Popular sovereignty",
        prac_010: "Government is temporary; the state is permanent",
        prac_011: "Supreme authority of a state",
        prac_012: "It limits government power",
        prac_013: "Everyone is subject to the law",
        prac_014: "By providing services and maintaining order",
        prac_015: "Government serves and is accountable to citizens"
      },
      assessment: {
        ass_001: "The institution that makes and enforces laws",
        ass_002: "Making laws (or any valid)",
        ass_003: "Population, territory, government, sovereignty",
        ass_004: "Power is shared between central and regional governments",
        ass_005: "Government by the people",
        ass_006: "Legislature, Executive, Judiciary",
        ass_007: "Dividing powers among government branches",
        ass_008: "Branches limiting each other's powers",
        ass_009: "Supreme authority of a state",
        ass_010: "Everyone is subject to the law"
      }
    },
    extensionActivities: [
      "Research systems of government",
      "Study the Nigerian Constitution",
      "Compare forms of government",
      "Analyze separation of powers"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research comparative government",
        "Study constitutional law",
        "Research political theory",
        "Analyze governance systems"
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
      title: "Organs of Government",
      description: "Diagram showing the three organs of government",
      url: "/diagrams/organs-of-government.png",
      alt: "Organs of government diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Separation of Powers",
      description: "Diagram showing separation of powers",
      url: "/diagrams/separation-of-powers.png",
      alt: "Separation of powers diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Systems of Government",
      description: "Chart comparing federal, unitary, and confederal systems",
      url: "/diagrams/systems-of-government.png",
      alt: "Systems of government chart"
    }
  ]
};