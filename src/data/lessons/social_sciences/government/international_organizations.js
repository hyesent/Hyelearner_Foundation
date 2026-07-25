// Location: src/data/lessons/social_sciences/government/international_organizations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "gov_lesson_international_organizations",
  subject: "Government",
  topic: "International Organizations",
  name: "International Organizations",
  icon: "🌍",
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
    "Understanding of government basics",
    "Knowledge of Nigerian government",
    "Understanding of international relations",
    "Awareness of global issues"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Government lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define international organizations and explain their importance",
      indicator: "Student can explain what international organizations are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of international organizations",
      indicator: "Student can distinguish between global and regional organizations"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the role of the United Nations",
      indicator: "Student can describe the functions of the UN"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the organs of the United Nations",
      indicator: "Student can explain the structure of the UN"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the role of the African Union (AU)",
      indicator: "Student can describe the functions of the AU"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of ECOWAS",
      indicator: "Student can describe the functions of ECOWAS"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the Commonwealth of Nations",
      indicator: "Student can explain the role of the Commonwealth"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of OPEC",
      indicator: "Student can describe the functions of OPEC"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the role of the World Bank and IMF",
      indicator: "Student can explain the functions of the World Bank and IMF"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze Nigeria's role in international organizations",
      indicator: "Student can discuss Nigeria's membership and contributions"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the benefits of international organizations",
      indicator: "Student can describe the advantages of membership"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the challenges facing international organizations",
      indicator: "Student can discuss problems with international cooperation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of international cooperation",
      indicator: "Student can describe why countries cooperate"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the future of international organizations",
      indicator: "Student can discuss the role of international organizations in the future"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "International Organizations - Global Cooperation",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about international organizations and their role in global governance."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>International Organizations</h2>
      <p><strong>International organizations</strong> are institutions created by treaties between countries to promote cooperation and address common challenges. They play a crucial role in global governance, peacekeeping, development, and international law.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Key Concepts</h3>
          <ul>
            <li>✓ United Nations (UN)</li>
            <li>✓ African Union (AU)</li>
            <li>✓ ECOWAS</li>
            <li>✓ Commonwealth</li>
            <li>✓ OPEC</li>
            <li>✓ World Bank</li>
            <li>✓ International Monetary Fund (IMF)</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Nigeria is a member of all major international organizations</li>
            <li>• The UN has 193 member states</li>
            <li>• ECOWAS has 15 member states</li>
            <li>• The AU has 55 member states</li>
            <li>• OPEC has 13 member states</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why International Organizations Matter</h4>
        <p>International organizations facilitate cooperation between nations, promote peace and security, and address global challenges like climate change, poverty, and conflict.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are International Organizations?",
        objective: "obj_001",
        text: `
          <h3>Understanding International Organizations</h3>
          <p><strong>International organizations</strong> are institutions established by treaties between states to promote cooperation and address shared challenges.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Organizations</h4>
              <ul>
                <li>• <strong>Global:</strong> UN, World Bank, IMF</li>
                <li>• <strong>Regional:</strong> AU, ECOWAS, EU</li>
                <li>• <strong>Functional:</strong> OPEC, WTO</li>
                <li>• <strong>Political:</strong> Commonwealth</li>
                <li>• <strong>Specialized:</strong> WHO, UNESCO</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Purposes</h4>
              <ul>
                <li>• Maintain peace and security</li>
                <li>• Promote economic cooperation</li>
                <li>• Protect human rights</li>
                <li>• Address global challenges</li>
                <li>• Facilitate diplomacy</li>
                <li>• Provide development assistance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The United Nations (UN)",
        objective: "obj_003",
        text: `
          <h3>The United Nations</h3>
          <p>The <strong>United Nations (UN)</strong> is the world's largest and most important international organization.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Founded in 1945</li>
                <li>• 193 member states</li>
                <li>• Headquarters in New York</li>
                <li>• Official languages: 6</li>
                <li>• Secretary-General as head</li>
                <li>• Nigeria joined in 1960</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Organs of the UN</h4>
              <ul>
                <li>• <strong>General Assembly:</strong> All members</li>
                <li>• <strong>Security Council:</strong> 15 members (5 permanent)</li>
                <li>• <strong>Economic and Social Council:</strong> 54 members</li>
                <li>• <strong>International Court of Justice:</strong> Judicial organ</li>
                <li>• <strong>Trusteeship Council:</strong> Suspended</li>
                <li>• <strong>Secretariat:</strong> Administrative organ</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Nigeria's Role in the UN:</strong>
            <ul>
              <li>• Active member since 1960</li>
              <li>• Served on Security Council multiple times</li>
              <li>• Contributes to peacekeeping missions</li>
              <li>• Advocates for African interests</li>
              <li>• Supports sustainable development goals</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The African Union (AU)",
        objective: "obj_005",
        text: `
          <h3>The African Union</h3>
          <p>The <strong>African Union (AU)</strong> is the premier continental organization in Africa.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Founded in 2002</li>
                <li>• 55 member states</li>
                <li>• Headquarters in Addis Ababa, Ethiopia</li>
                <li>• Replaced the OAU</li>
                <li>• Chairperson as head</li>
                <li>• Nigeria is a founding member</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Organs of the AU</h4>
              <ul>
                <li>• <strong>Assembly:</strong> Heads of state</li>
                <li>• <strong>Executive Council:</strong> Ministers</li>
                <li>• <strong>Pan-African Parliament:</strong> Legislative body</li>
                <li>• <strong>African Court of Justice:</strong> Judicial organ</li>
                <li>• <strong>African Commission:</strong> Secretariat</li>
                <li>• <strong>Peace and Security Council:</strong> Conflict resolution</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 AU's Goals:</strong>
            <ul>
              <li>• African integration</li>
              <li>• Peace and security</li>
              <li>• Economic development</li>
              <li>• Protect human rights</li>
              <li>• Promote pan-Africanism</li>
              <li>• Agenda 2063</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "ECOWAS",
        objective: "obj_006",
        text: `
          <h3>ECOWAS - Economic Community of West African States</h3>
          <p><strong>ECOWAS</strong> is a regional organization in West Africa.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Founded in 1975</li>
                <li>• 15 member states</li>
                <li>• Headquarters in Abuja, Nigeria</li>
                <li>• Purpose: Economic integration</li>
                <li>• Nigeria is a leading member</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Member States</h4>
              <ul>
                <li>• Nigeria, Ghana, Senegal</li>
                <li>• Côte d'Ivoire, Mali, Burkina Faso</li>
                <li>• Benin, Togo, Niger</li>
                <li>• Guinea, Guinea-Bissau</li>
                <li>• Liberia, Sierra Leone</li>
                <li>• Cape Verde, Gambia</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 ECOWAS Achievements:</strong>
            <ul>
              <li>• ECOWAS Trade Liberalization Scheme</li>
              <li>• ECOWAS Common Currency (proposed)</li>
              <li>• Peacekeeping missions</li>
              <li>• Free movement of persons</li>
              <li>• Regional infrastructure projects</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Commonwealth",
        objective: "obj_007",
        text: `
          <h3>The Commonwealth of Nations</h3>
          <p>The <strong>Commonwealth</strong> is a political association of former British colonies.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Founded in 1931</li>
                <li>• 56 member states</li>
                <li>• Headquarters in London</li>
                <li>• The Queen as Head of the Commonwealth</li>
                <li>• Nigeria joined in 1960</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Objectives</h4>
              <ul>
                <li>• Promote democracy</li>
                <li>• Human rights</li>
                <li>• Rule of law</li>
                <li>• Economic development</li>
                <li>• Cultural exchange</li>
                <li>• Commonwealth Games</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "OPEC",
        objective: "obj_008",
        text: `
          <h3>OPEC - Organization of the Petroleum Exporting Countries</h3>
          <p><strong>OPEC</strong> is an organization of oil-exporting countries.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Founded in 1960</li>
                <li>• 13 member states</li>
                <li>• Headquarters in Vienna</li>
                <li>• Purpose: Coordinate oil policies</li>
                <li>• Nigeria joined in 1971</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Member States</h4>
              <ul>
                <li>• Saudi Arabia, Iran, Iraq</li>
                <li>• Kuwait, UAE, Venezuela</li>
                <li>• Nigeria, Algeria, Angola</li>
                <li>• Libya, Gabon, Congo</li>
                <li>• Equatorial Guinea</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 OPEC's Role:</strong>
            <ul>
              <li>• Controls oil prices</li>
              <li>• Manages oil production</li>
              <li>• Ensures supply stability</li>
              <li>• Affects global economy</li>
              <li>• Nigeria benefits from OPEC membership</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "World Bank and IMF",
        objective: "obj_009",
        text: `
          <h3>The World Bank and IMF</h3>
          <p>The <strong>World Bank</strong> and <strong>International Monetary Fund (IMF)</strong> are major financial institutions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 World Bank</h4>
              <ul>
                <li>• Founded in 1944</li>
                <li>• Headquarters in Washington D.C.</li>
                <li>• Provides development loans</li>
                <li>• Funds infrastructure projects</li>
                <li>• Supports poverty reduction</li>
                <li>• Nigeria is a member</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 International Monetary Fund (IMF)</h4>
              <ul>
                <li>• Founded in 1944</li>
                <li>• Headquarters in Washington D.C.</li>
                <li>• Promotes international monetary cooperation</li>
                <li>• Provides financial assistance</li>
                <li>• Economic surveillance</li>
                <li>• Nigeria is a member</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Nigeria and International Organizations",
        objective: "obj_010",
        text: `
          <h3>Nigeria's Role in International Organizations</h3>
          <p>Nigeria is an active member of many international organizations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Nigeria's Membership</h4>
              <ul>
                <li>• United Nations (UN)</li>
                <li>• African Union (AU)</li>
                <li>• ECOWAS</li>
                <li>• Commonwealth</li>
                <li>• OPEC</li>
                <li>• World Bank</li>
                <li>• IMF</li>
                <li>• WTO</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contributions</h4>
              <ul>
                <li>• Peacekeeping missions</li>
                <li>• Diplomatic leadership</li>
                <li>• Economic contributions</li>
                <li>• Advocacy for African interests</li>
                <li>• Conflict resolution</li>
                <li>• Humanitarian assistance</li>
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
          <h4>🌍 International Organizations</h4>
          <ul>
            <li>• UN: Global peace and security</li>
            <li>• AU: African integration</li>
            <li>• ECOWAS: West African cooperation</li>
            <li>• Commonwealth: Political association</li>
            <li>• OPEC: Oil policy coordination</li>
            <li>• World Bank/IMF: Financial assistance</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Points</h4>
          <ul>
            <li>• Nigeria is a member of all major organizations</li>
            <li>• International organizations promote cooperation</li>
            <li>• They address global challenges</li>
            <li>• They facilitate development and peace</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>International organizations are essential for global cooperation, peace, and development. Nigeria plays an active role in these organizations.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The UN can force countries to follow its decisions",
        correction: "The UN relies on cooperation and enforcement is limited",
        explanation: "The UN's power depends on member states' willingness to comply."
      },
      {
        id: "mis_002",
        misconception: "Nigeria only benefits from international organizations",
        correction: "Nigeria also contributes significantly",
        explanation: "Nigeria contributes troops, funds, and diplomatic leadership."
      },
      {
        id: "mis_003",
        misconception: "International organizations are only for rich countries",
        correction: "All countries, including developing ones, are members",
        explanation: "Developing countries are active members of international organizations."
      },
      {
        id: "mis_004",
        misconception: "ECOWAS is only about economics",
        correction: "ECOWAS also addresses political and security issues",
        explanation: "ECOWAS is involved in peacekeeping and conflict resolution."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Peacekeeping",
        description: "International organizations maintain peace.",
        example: "UN peacekeeping missions"
      },
      {
        id: "app_002",
        title: "Economic Cooperation",
        description: "International organizations promote economic development.",
        example: "World Bank loans, ECOWAS trade"
      },
      {
        id: "app_003",
        title: "Human Rights",
        description: "International organizations protect human rights.",
        example: "UN Human Rights Council"
      },
      {
        id: "app_004",
        title: "Conflict Resolution",
        description: "International organizations resolve conflicts.",
        example: "AU mediation, UN Security Council"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "International Organization", definition: "Institution established by treaty between states." },
    { term: "UN", definition: "United Nations - global peace organization." },
    { term: "AU", definition: "African Union - continental organization." },
    { term: "ECOWAS", definition: "Economic Community of West African States." },
    { term: "Commonwealth", definition: "Association of former British colonies." },
    { term: "OPEC", definition: "Organization of Petroleum Exporting Countries." },
    { term: "World Bank", definition: "International financial institution for development." },
    { term: "IMF", definition: "International Monetary Fund." },
    { term: "General Assembly", definition: "UN organ with all member states." },
    { term: "Security Council", definition: "UN organ responsible for peace and security." },
    { term: "Peacekeeping", definition: "Maintaining peace in conflict zones." },
    { term: "Secretary-General", definition: "Head of the UN Secretariat." },
    { term: "Sovereignty", definition: "Supreme authority of a state." },
    { term: "Diplomacy", definition: "The practice of conducting negotiations." },
    { term: "International Law", definition: "Rules governing relations between states." },
    { term: "Treaty", definition: "A formal agreement between states." },
    { term: "Sanction", definition: "A penalty imposed on a state." },
    { term: "Development Aid", definition: "Assistance to developing countries." },
    { term: "Globalization", definition: "Increasing global interconnectedness." },
    { term: "Multilateralism", definition: "Cooperation between multiple countries." }
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
      question: "What are international organizations?",
      type: "multiple_choice",
      options: [
        "Organizations within a single country",
        "Institutions established by treaties between states",
        "Business organizations",
        "Religious organizations"
      ],
      answer: "Institutions established by treaties between states",
      explanation: "International organizations are established by treaties between states."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a regional organization?",
      type: "multiple_choice",
      options: [
        "A global organization",
        "An organization limited to a specific region",
        "A national organization",
        "A religious organization"
      ],
      answer: "An organization limited to a specific region",
      explanation: "Regional organizations are limited to specific regions."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the United Nations?",
      type: "multiple_choice",
      options: [
        "A regional organization",
        "A global peace organization",
        "A business organization",
        "A religious organization"
      ],
      answer: "A global peace organization",
      explanation: "The UN is a global organization focused on peace and security."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What are the organs of the United Nations?",
      type: "multiple_choice",
      options: [
        "General Assembly and Security Council only",
        "General Assembly, Security Council, ECOSOC, ICJ, Secretariat",
        "Only the Security Council",
        "Only the General Assembly"
      ],
      answer: "General Assembly, Security Council, ECOSOC, ICJ, Secretariat",
      explanation: "The UN has five main organs."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the African Union?",
      type: "multiple_choice",
      options: [
        "A global organization",
        "A continental organization in Africa",
        "A European organization",
        "A business organization"
      ],
      answer: "A continental organization in Africa",
      explanation: "The AU is the continental organization in Africa."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is ECOWAS?",
      type: "multiple_choice",
      options: [
        "A global organization",
        "A West African regional organization",
        "A European organization",
        "A business organization"
      ],
      answer: "A West African regional organization",
      explanation: "ECOWAS is a regional organization in West Africa."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the Commonwealth?",
      type: "multiple_choice",
      options: [
        "A political association of former British colonies",
        "A trade organization",
        "A military alliance",
        "A religious organization"
      ],
      answer: "A political association of former British colonies",
      explanation: "The Commonwealth is an association of former British colonies."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is OPEC?",
      type: "multiple_choice",
      options: [
        "Organization of Petroleum Exporting Countries",
        "Organization of Police and Economic Cooperation",
        "Organization of Political and Economic Cooperation",
        "Organization of Petroleum and Energy Companies"
      ],
      answer: "Organization of Petroleum Exporting Countries",
      explanation: "OPEC stands for Organization of Petroleum Exporting Countries."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the role of the World Bank?",
      type: "multiple_choice",
      options: [
        "To provide development loans",
        "To regulate international trade",
        "To maintain peace",
        "To control oil prices"
      ],
      answer: "To provide development loans",
      explanation: "The World Bank provides development loans to countries."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which international organizations is Nigeria a member of?",
      type: "multiple_choice",
      options: [
        "Only the UN",
        "UN, AU, ECOWAS, Commonwealth, OPEC, World Bank, IMF",
        "Only ECOWAS",
        "Only the Commonwealth"
      ],
      answer: "UN, AU, ECOWAS, Commonwealth, OPEC, World Bank, IMF",
      explanation: "Nigeria is a member of all major international organizations."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a benefit of international organizations?",
      type: "multiple_choice",
      options: [
        "Promotes cooperation",
        "Causes conflict",
        "Isolates countries",
        "Reduces trade"
      ],
      answer: "Promotes cooperation",
      explanation: "International organizations promote cooperation between countries."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a challenge facing international organizations?",
      type: "multiple_choice",
      options: [
        "Too much cooperation",
        "Conflicting interests of member states",
        "Too much funding",
        "No challenges"
      ],
      answer: "Conflicting interests of member states",
      explanation: "Conflicting interests are a major challenge for international organizations."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why do countries cooperate in international organizations?",
      type: "multiple_choice",
      options: [
        "To solve problems together",
        "To dominate others",
        "To isolate themselves",
        "To reduce trade"
      ],
      answer: "To solve problems together",
      explanation: "Countries cooperate to solve problems together."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the future of international organizations?",
      type: "multiple_choice",
      options: [
        "They will disappear",
        "They will continue to grow in importance",
        "They will become less important",
        "They will be replaced"
      ],
      answer: "They will continue to grow in importance",
      explanation: "International organizations will continue to grow in importance."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "How many member states does ECOWAS have?",
      type: "multiple_choice",
      options: ["12", "15", "20", "25"],
      answer: "15",
      explanation: "ECOWAS has 15 member states."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_international_organizations",
    title: "International Organizations Quiz",
    description: "Test your understanding of international organizations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are international organizations?",
        type: "short_answer",
        answer_key: "Institutions established by treaties between states",
        explanation: "International organizations are established by treaties between states."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a regional organization?",
        type: "short_answer",
        answer_key: "An organization limited to a specific region",
        explanation: "Regional organizations are limited to specific regions."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the United Nations?",
        type: "short_answer",
        answer_key: "A global peace organization",
        explanation: "The UN is a global organization focused on peace and security."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name one organ of the United Nations.",
        type: "short_answer",
        answer_key: "General Assembly (or any valid)",
        explanation: "The UN has five main organs including the General Assembly."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the African Union?",
        type: "short_answer",
        answer_key: "A continental organization in Africa",
        explanation: "The AU is the continental organization in Africa."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is ECOWAS?",
        type: "short_answer",
        answer_key: "A West African regional organization",
        explanation: "ECOWAS is a regional organization in West Africa."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the Commonwealth?",
        type: "short_answer",
        answer_key: "A political association of former British colonies",
        explanation: "The Commonwealth is an association of former British colonies."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does OPEC stand for?",
        type: "short_answer",
        answer_key: "Organization of Petroleum Exporting Countries",
        explanation: "OPEC stands for Organization of Petroleum Exporting Countries."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the role of the World Bank?",
        type: "short_answer",
        answer_key: "To provide development loans",
        explanation: "The World Bank provides development loans to countries."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Name one international organization Nigeria is a member of.",
        type: "short_answer",
        answer_key: "UN (or any valid)",
        explanation: "Nigeria is a member of the UN and many other organizations."
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
        "Understand international organizations",
        "Explain the role of the UN, AU, and ECOWAS",
        "Describe the Commonwealth and OPEC",
        "Understand Nigeria's role in international organizations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are international organizations?" },
        { time: "5-10 min", activity: "Direct Instruction - UN" },
        { time: "10-15 min", activity: "Direct Instruction - AU" },
        { time: "15-20 min", activity: "Direct Instruction - ECOWAS" },
        { time: "20-25 min", activity: "Direct Instruction - Commonwealth and OPEC" },
        { time: "25-30 min", activity: "Direct Instruction - World Bank and IMF" },
        { time: "30-35 min", activity: "Direct Instruction - Nigeria's Role" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Institutions established by treaties between states",
        prac_002: "An organization limited to a specific region",
        prac_003: "A global peace organization",
        prac_004: "General Assembly, Security Council, ECOSOC, ICJ, Secretariat",
        prac_005: "A continental organization in Africa",
        prac_006: "A West African regional organization",
        prac_007: "A political association of former British colonies",
        prac_008: "Organization of Petroleum Exporting Countries",
        prac_009: "To provide development loans",
        prac_010: "UN, AU, ECOWAS, Commonwealth, OPEC, World Bank, IMF",
        prac_011: "Promotes cooperation",
        prac_012: "Conflicting interests of member states",
        prac_013: "To solve problems together",
        prac_014: "They will continue to grow in importance",
        prac_015: "15"
      },
      assessment: {
        ass_001: "Institutions established by treaties between states",
        ass_002: "An organization limited to a specific region",
        ass_003: "A global peace organization",
        ass_004: "General Assembly (or any valid)",
        ass_005: "A continental organization in Africa",
        ass_006: "A West African regional organization",
        ass_007: "A political association of former British colonies",
        ass_008: "Organization of Petroleum Exporting Countries",
        ass_009: "To provide development loans",
        ass_010: "UN (or any valid)"
      }
    },
    extensionActivities: [
      "Research a UN agency",
      "Study AU initiatives",
      "Research ECOWAS projects",
      "Analyze Nigeria's role in international organizations"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research international law",
        "Study global governance",
        "Research international relations",
        "Analyze multilateralism"
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
      title: "UN Organs",
      description: "Diagram showing the organs of the United Nations",
      url: "/diagrams/un-organs.png",
      alt: "UN organs diagram"
    },
    {
      id: "vis_002",
      type: "map",
      title: "ECOWAS Member States",
      description: "Map showing ECOWAS member states",
      url: "/diagrams/ecowas-map.png",
      alt: "ECOWAS map"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Nigeria in International Organizations",
      description: "Diagram showing Nigeria's membership in international organizations",
      url: "/diagrams/nigeria-international.png",
      alt: "Nigeria international organizations diagram"
    }
  ]
};