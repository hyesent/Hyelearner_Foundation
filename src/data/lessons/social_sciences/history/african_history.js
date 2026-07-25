// Location: src/data/lessons/social_sciences/history/african_history.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hist_lesson_african_history",
  subject: "History",
  topic: "African History",
  name: "African History",
  icon: "🌍",
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
    "Understanding of world history",
    "Knowledge of Nigerian history",
    "Understanding of colonialism",
    "Interest in African heritage"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more History lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define African history and explain its importance",
      indicator: "Student can explain what African history is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the ancient African civilizations",
      indicator: "Student can name major ancient African civilizations"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of African unity",
      indicator: "Student can describe the idea of African unity"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the ancient Egyptian civilization",
      indicator: "Student can explain the key features of ancient Egypt"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the Kingdom of Kush",
      indicator: "Student can explain the key features of Kush"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the Kingdom of Aksum",
      indicator: "Student can explain the key features of Aksum"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the trans-Saharan trade",
      indicator: "Student can describe the importance of trans-Saharan trade"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the Mali Empire",
      indicator: "Student can explain the key features of the Mali Empire"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the Songhai Empire",
      indicator: "Student can explain the key features of the Songhai Empire"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the African slave trade",
      indicator: "Student can describe the impact of the slave trade on Africa"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the colonial period in Africa",
      indicator: "Student can describe the effects of colonialism on Africa"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the independence movements in Africa",
      indicator: "Student can describe how African countries gained independence"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the role of pan-Africanism",
      indicator: "Student can explain the importance of pan-Africanism"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze contemporary African issues",
      indicator: "Student can discuss current challenges facing Africa"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the African Renaissance",
      indicator: "Student can describe the vision for Africa's future"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "African History - From Ancient Civilizations to Modern Africa",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about African history from ancient times to the present day."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to African History</h2>
      <p><strong>African history</strong> is the history of the peoples and civilizations of Africa. It is a story of great empires, cultural achievements, and resilience in the face of challenges. Understanding African history is essential for understanding the modern world.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Key Concepts</h3>
          <ul>
            <li>✓ Ancient Civilizations</li>
            <li>✓ West African Empires</li>
            <li>✓ Trans-Saharan Trade</li>
            <li>✓ African Slave Trade</li>
            <li>✓ Colonialism</li>
            <li>✓ Independence Movements</li>
            <li>✓ Pan-Africanism</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Africa is the cradle of humanity</li>
            <li>• Ancient Egypt was one of the world's greatest civilizations</li>
            <li>• The Mali Empire was one of the richest in history</li>
            <li>• Africa has over 2,000 languages</li>
            <li>• 54 countries make up the African continent</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why African History Matters</h4>
        <p>African history helps us understand the rich heritage of the continent, the achievements of its peoples, and the challenges it faces today.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Ancient African Civilizations",
        objective: "obj_002",
        text: `
          <h3>Ancient African Civilizations</h3>
          <p>Africa is the birthplace of humanity and home to some of the world's oldest civilizations.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ancient Egypt</h4>
              <ul>
                <li>• Nile River civilization</li>
                <li>• Pyramids and pharaohs</li>
                <li>• Hieroglyphics</li>
                <li>• Advanced knowledge</li>
                <li>• Lasted 3,000+ years</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Kingdom of Kush</h4>
              <ul>
                <li>• Located in Nubia</li>
                <li>• Ruled Egypt for a time</li>
                <li>• Capital: Meroë</li>
                <li>• Iron production</li>
                <li>• Wealthy civilization</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Kingdom of Aksum</h4>
              <ul>
                <li>• Located in Ethiopia</li>
                <li>• Sea trade empire</li>
                <li>• Christian kingdom</li>
                <li>• Obelisks</li>
                <li>• Wealthy and powerful</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "West African Empires",
        objective: "obj_008",
        text: `
          <h3>West African Empires</h3>
          <p>West Africa was home to powerful empires that controlled trade and wealth.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ghana Empire</h4>
              <ul>
                <li>• 4th-11th century</li>
                <li>• "Land of Gold"</li>
                <li>• Controlled gold trade</li>
                <li>• Capital: Kumbi Saleh</li>
                <li>• Powerful army</li>
                <li>• Fell to Almoravids</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mali Empire</h4>
              <ul>
                <li>• 13th-16th century</li>
                <li>• Mansa Musa: Richest man</li>
                <li>• Capital: Timbuktu</li>
                <li>• Center of learning</li>
                <li>• Gold and salt trade</li>
                <li>• Fell to Songhai</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Songhai Empire</h4>
              <ul>
                <li>• 15th-16th century</li>
                <li>• Largest African empire</li>
                <li>• Capital: Gao</li>
                <li>• Timbuktu center of learning</li>
                <li>• Askia Muhammad</li>
                <li>• Fell to Moroccans</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Trans-Saharan Trade",
        objective: "obj_007",
        text: `
          <h3>Trans-Saharan Trade</h3>
          <p>The <strong>trans-Saharan trade</strong> connected West Africa to North Africa and the Mediterranean.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Trade Items</h4>
              <ul>
                <li>• <strong>Gold:</strong> From West Africa</li>
                <li>• <strong>Salt:</strong> From North Africa</li>
                <li>• <strong>Slaves:</strong> From various regions</li>
                <li>• <strong>Ivory:</strong> From forests</li>
                <li>• <strong>Cola nuts:</strong> From West Africa</li>
                <li>• <strong>Textiles:</strong> From North Africa</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact</h4>
              <ul>
                <li>• <strong>Economic:</strong> Wealth of empires</li>
                <li>• <strong>Cultural:</strong> Islam spread</li>
                <li>• <strong>Political:</strong> Rise of states</li>
                <li>• <strong>Urbanization:</strong> Cities grew</li>
                <li>• <strong>Education:</strong> Centers of learning</li>
                <li>• <strong>Exchange:</strong> Ideas and goods</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The African Slave Trade",
        objective: "obj_010",
        text: `
          <h3>The African Slave Trade</h3>
          <p>The <strong>African slave trade</strong> had a devastating impact on the continent.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• <strong>Trans-Saharan:</strong> Across the Sahara</li>
                <li>• <strong>Transatlantic:</strong> To the Americas</li>
                <li>• <strong>East African:</strong> To the Middle East</li>
                <li>• <strong>Duration:</strong> 15th-19th century</li>
                <li>• <strong>Scale:</strong> Millions enslaved</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Demographic:</strong> Population loss</li>
                <li>• <strong>Economic:</strong> Underdevelopment</li>
                <li>• <strong>Social:</strong> Family destruction</li>
                <li>• <strong>Political:</strong> States destabilized</li>
                <li>• <strong>Cultural:</strong> Loss of heritage</li>
                <li>• <strong>Legacy:</strong> Ongoing effects</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Colonialism in Africa",
        objective: "obj_011",
        text: `
          <h3>Colonialism in Africa</h3>
          <p>European powers colonized most of Africa in the late 19th and 20th centuries.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Scramble for Africa</h4>
              <ul>
                <li>• <strong>1884-1885:</strong> Berlin Conference</li>
                <li>• <strong>European powers:</strong> Britain, France, Germany, etc.</li>
                <li>• <strong>Division:</strong> Artificial borders</li>
                <li>• <strong>Exploitation:</strong> Resources, labor</li>
                <li>• <strong>Resistance:</strong> African resistance</li>
                <li>• <strong>Legacy:</strong> Lingering effects</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects of Colonialism</h4>
              <ul>
                <li>• <strong>Economic:</strong> Exploitation</li>
                <li>• <strong>Political:</strong> New borders</li>
                <li>• <strong>Cultural:</strong> Disruption of traditions</li>
                <li>• <strong>Social:</strong> Ethnic tensions</li>
                <li>• <strong>Educational:</strong> Western systems</li>
                <li>• <strong>Religious:</strong> Introduction of Christianity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Independence Movements",
        objective: "obj_012",
        text: `
          <h3>Independence Movements</h3>
          <p>African countries fought for and gained independence from colonial rule.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Leaders</h4>
              <ul>
                <li>• <strong>Kwame Nkrumah:</strong> Ghana</li>
                <li>• <strong>Jomo Kenyatta:</strong> Kenya</li>
                <li>• <strong>Julius Nyerere:</strong> Tanzania</li>
                <li>• <strong>Nnamdi Azikiwe:</strong> Nigeria</li>
                <li>• <strong>Nelson Mandela:</strong> South Africa</li>
                <li>• <strong>Patrice Lumumba:</strong> Congo</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>1957:</strong> Ghana independence (first)</li>
                <li>• <strong>1960:</strong> Year of Africa</li>
                <li>• <strong>1960s:</strong> Most independence</li>
                <li>• <strong>1975:</strong> Mozambique, Angola</li>
                <li>• <strong>1980:</strong> Zimbabwe</li>
                <li>• <strong>1994:</strong> South Africa</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Pan-Africanism",
        objective: "obj_013",
        text: `
          <h3>Pan-Africanism</h3>
          <p><strong>Pan-Africanism</strong> is a movement that promotes unity and solidarity among African peoples.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Figures</h4>
              <ul>
                <li>• <strong>W.E.B. Du Bois:</strong> African-American leader</li>
                <li>• <strong>Marcus Garvey:</strong> Back-to-Africa movement</li>
                <li>• <strong>Kwame Nkrumah:</strong> First President of Ghana</li>
                <li>• <strong>Julius Nyerere:</strong> President of Tanzania</li>
                <li>• <strong>Muammar Gaddafi:</strong> Libyan leader</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Organizations</h4>
              <ul>
                <li>• <strong>OAU:</strong> Organization of African Unity</li>
                <li>• <strong>AU:</strong> African Union</li>
                <li>• <strong>Pan-African Congresses:</strong> Meetings</li>
                <li>• <strong>African Union:</strong> Continental body</li>
                <li>• <strong>Agenda 2063:</strong> Vision for Africa</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Contemporary Africa",
        objective: "obj_014",
        text: `
          <h3>Contemporary Africa</h3>
          <p>Africa faces many challenges but also has great opportunities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Challenges</h4>
              <ul>
                <li>• <strong>Poverty:</strong> High poverty rates</li>
                <li>• <strong>Disease:</strong> HIV/AIDS, malaria</li>
                <li>• <strong>Conflict:</strong> Civil wars, terrorism</li>
                <li>• <strong>Corruption:</strong> Poor governance</li>
                <li>• <strong>Climate change:</strong> Environmental challenges</li>
                <li>• <strong>Infrastructure:</strong> Poor infrastructure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Opportunities</h4>
              <ul>
                <li>• <strong>Resources:</strong> Natural resources</li>
                <li>• <strong>Youth:</strong> Young population</li>
                <li>• <strong>Technology:</strong> Leapfrogging</li>
                <li>• <strong>African Continental Free Trade Area</strong></li>
                <li>• <strong>Diaspora:</strong> Remittances</li>
                <li>• <strong>Innovation:</strong> M-Pesa, mobile money</li>
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
          <h4>🌍 African History</h4>
          <ul>
            <li>• Ancient civilizations: Egypt, Kush, Aksum</li>
            <li>• West African empires: Ghana, Mali, Songhai</li>
            <li>• Trans-Saharan trade</li>
            <li>• African slave trade</li>
            <li>• Colonialism and independence</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Themes</h4>
          <ul>
            <li>• Pan-Africanism</li>
            <li>• Unity and solidarity</li>
            <li>• Resilience and strength</li>
            <li>• Hope for the future</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>African history is a story of great civilizations, resilience, and hope for the future.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Africa had no history before colonialism",
        correction: "Africa had rich civilizations and history",
        explanation: "Africa had great empires and civilizations."
      },
      {
        id: "mis_002",
        misconception: "All Africans are the same",
        correction: "Africa is diverse with many cultures",
        explanation: "Africa has over 2,000 languages and many cultures."
      },
      {
        id: "mis_003",
        misconception: "Africa is a country",
        correction: "Africa is a continent with 54 countries",
        explanation: "Africa is a continent with many countries."
      },
      {
        id: "mis_004",
        misconception: "African history is only about slavery",
        correction: "African history is rich and varied",
        explanation: "African history includes great civilizations and achievements."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Cultural Identity",
        description: "Understanding history builds cultural pride.",
        example: "Heritage, traditions"
      },
      {
        id: "app_002",
        title: "Unity",
        description: "History promotes African unity.",
        example: "Pan-Africanism"
      },
      {
        id: "app_003",
        title: "Development",
        description: "History informs development policy.",
        example: "Learning from past mistakes"
      },
      {
        id: "app_004",
        title: "International Relations",
        description: "History shapes international relations.",
        example: "Africa's role in the world"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "African History", definition: "The history of the peoples and civilizations of Africa." },
    { term: "Ancient Egypt", definition: "A great civilization on the Nile River." },
    { term: "Kush", definition: "An ancient kingdom in Nubia." },
    { term: "Aksum", definition: "An ancient kingdom in Ethiopia." },
    { term: "Ghana Empire", definition: "A powerful West African empire." },
    { term: "Mali Empire", definition: "A wealthy West African empire." },
    { term: "Songhai Empire", definition: "A large West African empire." },
    { term: "Trans-Saharan Trade", definition: "Trade across the Sahara Desert." },
    { term: "Slave Trade", definition: "The trade of enslaved people." },
    { term: "Colonialism", definition: "Rule by a foreign power." },
    { term: "Scramble for Africa", definition: "European colonization of Africa." },
    { term: "Independence", definition: "Freedom from colonial rule." },
    { term: "Pan-Africanism", definition: "Movement for African unity." },
    { term: "African Union", definition: "Continental organization." },
    { term: "Diaspora", definition: "People of African descent outside Africa." },
    { term: "Mansa Musa", definition: "Richest king of Mali." },
    { term: "Timbuktu", definition: "Ancient center of learning." },
    { term: "Berlin Conference", definition: "Division of Africa among European powers." },
    { term: "African Renaissance", definition: "Revival of Africa." },
    { term: "Agenda 2063", definition: "Africa's development plan." }
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
      question: "What is African history?",
      type: "multiple_choice",
      options: [
        "The history of European colonizers",
        "The history of the peoples and civilizations of Africa",
        "The history of America",
        "The history of Asia"
      ],
      answer: "The history of the peoples and civilizations of Africa",
      explanation: "African history is the history of the peoples and civilizations of Africa."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which was an ancient African civilization?",
      type: "multiple_choice",
      options: ["Egypt", "Ghana", "Mali", "All of the above"],
      answer: "All of the above",
      explanation: "Egypt, Ghana, and Mali were all African civilizations."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is pan-Africanism?",
      type: "multiple_choice",
      options: [
        "Unity among African peoples",
        "Division of Africa",
        "Colonial rule",
        "European domination"
      ],
      answer: "Unity among African peoples",
      explanation: "Pan-Africanism is unity among African peoples."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What river was ancient Egypt located on?",
      type: "multiple_choice",
      options: ["Nile", "Congo", "Niger", "Zambezi"],
      answer: "Nile",
      explanation: "Ancient Egypt was located on the Nile River."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Where was the Kingdom of Kush located?",
      type: "multiple_choice",
      options: ["Egypt", "Nubia", "Ethiopia", "Ghana"],
      answer: "Nubia",
      explanation: "The Kingdom of Kush was located in Nubia."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Where was the Kingdom of Aksum located?",
      type: "multiple_choice",
      options: ["Egypt", "Nubia", "Ethiopia", "Ghana"],
      answer: "Ethiopia",
      explanation: "The Kingdom of Aksum was located in Ethiopia."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What was traded across the Sahara?",
      type: "multiple_choice",
      options: ["Gold and salt", "Only gold", "Only salt", "Only slaves"],
      answer: "Gold and salt",
      explanation: "Gold and salt were traded across the Sahara."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Who was the richest king in history?",
      type: "multiple_choice",
      options: ["Mansa Musa", "Mansa Musa, the King of Mali", "Mali Empire", "All of the above"],
      answer: "Mansa Musa",
      explanation: "Mansa Musa of Mali is considered the richest king in history."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What was the largest empire in African history?",
      type: "multiple_choice",
      options: ["Ghana", "Mali", "Songhai", "Egypt"],
      answer: "Songhai",
      explanation: "The Songhai Empire was the largest in African history."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "When did the transatlantic slave trade begin?",
      type: "multiple_choice",
      options: ["14th century", "15th century", "16th century", "17th century"],
      answer: "15th century",
      explanation: "The transatlantic slave trade began in the 15th century."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What was the Berlin Conference?",
      type: "multiple_choice",
      options: [
        "A meeting to divide Africa",
        "A meeting about trade",
        "A meeting about slavery",
        "A meeting about education"
      ],
      answer: "A meeting to divide Africa",
      explanation: "The Berlin Conference divided Africa among European powers."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which country was the first to gain independence in Africa?",
      type: "multiple_choice",
      options: ["Nigeria", "Ghana", "Kenya", "South Africa"],
      answer: "Ghana",
      explanation: "Ghana was the first African country to gain independence."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Who was a key pan-Africanist leader?",
      type: "multiple_choice",
      options: [
        "Kwame Nkrumah",
        "Nnamdi Azikiwe",
        "Julius Nyerere",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "All were key pan-Africanist leaders."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a major challenge facing Africa today?",
      type: "multiple_choice",
      options: ["Poverty", "Climate change", "Corruption", "All of the above"],
      answer: "All of the above",
      explanation: "Poverty, climate change, and corruption are major challenges."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the African Renaissance?",
      type: "multiple_choice",
      options: [
        "The revival of Africa",
        "The end of Africa",
        "The colonization of Africa",
        "The independence of Africa"
      ],
      answer: "The revival of Africa",
      explanation: "The African Renaissance is the revival of Africa."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_african_history",
    title: "African History Quiz",
    description: "Test your understanding of African history",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is African history?",
        type: "short_answer",
        answer_key: "The history of the peoples and civilizations of Africa",
        explanation: "African history is the history of the peoples and civilizations of Africa."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one ancient African civilization.",
        type: "short_answer",
        answer_key: "Egypt (or any valid)",
        explanation: "Egypt was an ancient African civilization."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is pan-Africanism?",
        type: "short_answer",
        answer_key: "Unity among African peoples",
        explanation: "Pan-Africanism is unity among African peoples."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What river was ancient Egypt located on?",
        type: "short_answer",
        answer_key: "Nile",
        explanation: "Ancient Egypt was located on the Nile River."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Where was the Kingdom of Kush located?",
        type: "short_answer",
        answer_key: "Nubia",
        explanation: "The Kingdom of Kush was located in Nubia."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Where was the Kingdom of Aksum located?",
        type: "short_answer",
        answer_key: "Ethiopia",
        explanation: "The Kingdom of Aksum was located in Ethiopia."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "Who was the richest king in history?",
        type: "short_answer",
        answer_key: "Mansa Musa",
        explanation: "Mansa Musa of Mali is considered the richest king in history."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What was the largest empire in African history?",
        type: "short_answer",
        answer_key: "Songhai",
        explanation: "The Songhai Empire was the largest in African history."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What was the Berlin Conference?",
        type: "short_answer",
        answer_key: "A meeting to divide Africa",
        explanation: "The Berlin Conference divided Africa among European powers."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Which country was the first to gain independence in Africa?",
        type: "short_answer",
        answer_key: "Ghana",
        explanation: "Ghana was the first African country to gain independence."
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
        "Understand African history",
        "Describe ancient civilizations",
        "Explain West African empires",
        "Understand independence and pan-Africanism"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is African history?" },
        { time: "5-10 min", activity: "Direct Instruction - Ancient Civilizations" },
        { time: "10-15 min", activity: "Direct Instruction - West African Empires" },
        { time: "15-20 min", activity: "Direct Instruction - Trans-Saharan Trade" },
        { time: "20-25 min", activity: "Direct Instruction - Slave Trade" },
        { time: "25-30 min", activity: "Direct Instruction - Colonialism" },
        { time: "30-35 min", activity: "Direct Instruction - Independence" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The history of the peoples and civilizations of Africa",
        prac_002: "All of the above",
        prac_003: "Unity among African peoples",
        prac_004: "Nile",
        prac_005: "Nubia",
        prac_006: "Ethiopia",
        prac_007: "Gold and salt",
        prac_008: "Mansa Musa",
        prac_009: "Songhai",
        prac_010: "15th century",
        prac_011: "A meeting to divide Africa",
        prac_012: "Ghana",
        prac_013: "All of the above",
        prac_014: "All of the above",
        prac_015: "The revival of Africa"
      },
      assessment: {
        ass_001: "The history of the peoples and civilizations of Africa",
        ass_002: "Egypt (or any valid)",
        ass_003: "Unity among African peoples",
        ass_004: "Nile",
        ass_005: "Nubia",
        ass_006: "Ethiopia",
        ass_007: "Mansa Musa",
        ass_008: "Songhai",
        ass_009: "A meeting to divide Africa",
        ass_010: "Ghana"
      }
    },
    extensionActivities: [
      "Research an African empire",
      "Study African independence movements",
      "Research pan-Africanism",
      "Study contemporary African issues"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a timeline"
      ],
      advanced: [
        "Research African historiography",
        "Study African culture",
        "Research African economics",
        "Study African politics"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "map",
      title: "Ancient African Civilizations",
      description: "Map of ancient African civilizations",
      url: "/diagrams/ancient-africa.png",
      alt: "Ancient Africa map"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Trans-Saharan Trade Routes",
      description: "Diagram showing trans-Saharan trade routes",
      url: "/diagrams/trans-saharan-trade.png",
      alt: "Trans-Saharan trade diagram"
    },
    {
      id: "vis_003",
      type: "timeline",
      title: "African Independence Timeline",
      description: "Timeline of African independence",
      url: "/diagrams/african-independence.png",
      alt: "African independence timeline"
    }
  ]
};