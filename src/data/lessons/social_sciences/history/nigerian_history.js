// Location: src/data/lessons/social_sciences/history/nigerian_history.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hist_lesson_nigerian_history",
  subject: "History",
  topic: "Nigerian History",
  name: "Nigerian History",
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
    "Understanding of world history",
    "Knowledge of African history",
    "Understanding of colonialism",
    "Interest in Nigerian heritage"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "African History",
      file: "social_sciences/history/african_history.js"
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
      description: "Explain the meaning and importance of Nigerian history",
      indicator: "Student can explain why Nigerian history is important"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major ethnic groups in Nigeria",
      indicator: "Student can name the major ethnic groups"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Describe the pre-colonial kingdoms in Nigeria",
      indicator: "Student can describe the major pre-colonial states"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the Oyo Empire",
      indicator: "Student can explain the key features of the Oyo Empire"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the Benin Kingdom",
      indicator: "Student can explain the key features of the Benin Kingdom"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the Sokoto Caliphate",
      indicator: "Student can explain the key features of the Sokoto Caliphate"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the transatlantic slave trade and its impact",
      indicator: "Student can explain the effects of the slave trade"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the colonial period in Nigeria",
      indicator: "Student can describe the colonial era"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the Nigerian independence movement",
      indicator: "Student can explain how Nigeria gained independence"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the role of nationalist leaders",
      indicator: "Student can describe the contributions of nationalist leaders"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the Nigerian Civil War",
      indicator: "Student can explain the causes and consequences of the civil war"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the military regimes in Nigeria",
      indicator: "Student can describe the military era in Nigeria"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the transition to democracy",
      indicator: "Student can describe the return to civilian rule"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze contemporary Nigerian politics",
      indicator: "Student can discuss current political issues"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe the cultural heritage of Nigeria",
      indicator: "Student can explain Nigerian cultural diversity"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the challenges facing Nigeria",
      indicator: "Student can discuss Nigeria's current challenges"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Nigerian History - From Ancient Kingdoms to Modern Nigeria",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about Nigerian history from pre-colonial kingdoms to the present day."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Nigerian History</h2>
      <p><strong>Nigerian history</strong> is the story of the people and events that have shaped modern Nigeria. From ancient kingdoms to colonial rule, independence, and beyond, Nigeria has a rich and complex history that reflects the diversity and resilience of its people.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🇳🇬 Key Concepts</h3>
          <ul>
            <li>✓ Pre-colonial Kingdoms</li>
            <li>✓ Transatlantic Slave Trade</li>
            <li>✓ Colonial Era</li>
            <li>✓ Independence Movement</li>
            <li>✓ Nationalist Leaders</li>
            <li>✓ Nigerian Civil War</li>
            <li>✓ Military Regimes</li>
            <li>✓ Democratic Transition</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Nigeria has over 250 ethnic groups</li>
            <li>• The Yoruba kingdoms date back to the 11th century</li>
            <li>• The Benin Kingdom was famous for its bronze art</li>
            <li>• The Sokoto Caliphate was one of the largest empires in Africa</li>
            <li>• Nigeria gained independence in 1960</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Nigerian History Matters</h4>
        <p>Understanding Nigerian history helps us appreciate our heritage, learn from the past, and build a better future for all Nigerians.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Pre-Colonial Kingdoms",
        objective: "obj_003",
        text: `
          <h3>Pre-Colonial Kingdoms</h3>
          <p>Before colonialism, Nigeria was home to many powerful kingdoms and empires.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oyo Empire</h4>
              <ul>
                <li>• Yoruba kingdom</li>
                <li>• Capital: Oyo-Ile</li>
                <li>• Powerful army</li>
                <li>• Alafin as ruler</li>
                <li>• Traded with Europeans</li>
                <li>• Declined in the 19th century</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benin Kingdom</h4>
              <ul>
                <li>• Edo kingdom</li>
                <li>• Capital: Benin City</li>
                <li>• Famous for bronze art</li>
                <li>• Oba as ruler</li>
                <li>• Powerful and wealthy</li>
                <li>• British conquest in 1897</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Sokoto Caliphate</h4>
              <ul>
                <li>• Fulani empire</li>
                <li>• Founded by Usman dan Fodio</li>
                <li>• Largest in West Africa</li>
                <li>• Capital: Sokoto</li>
                <li>• Islamic state</li>
                <li>• Conquered by British in 1903</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Kanem-Bornu Empire</h4>
              <ul>
                <li>• North-eastern Nigeria</li>
                <li>• Based around Lake Chad</li>
                <li>• Trade across the Sahara</li>
                <li>• Islamic state</li>
                <li>• Lasted for centuries</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Igbo States</h4>
              <ul>
                <li>• Decentralized system</li>
                <li>• Village-based democracy</li>
                <li>• Nri kingdom</li>
                <li>• Known for bronze art</li>
                <li>• Arochukwu confederation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Transatlantic Slave Trade",
        objective: "obj_007",
        text: `
          <h3>Transatlantic Slave Trade</h3>
          <p>The <strong>transatlantic slave trade</strong> had a devastating impact on Nigeria and West Africa.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Lasted from the 15th to 19th century</li>
                <li>• Millions of Nigerians enslaved</li>
                <li>• Ports: Lagos, Badagry, Calabar</li>
                <li>• European slave traders</li>
                <li>• Impact: depopulation, instability</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Social:</strong> Family disruption</li>
                <li>• <strong>Economic:</strong> Underdevelopment</li>
                <li>• <strong>Political:</strong> Weakness of states</li>
                <li>• <strong>Demographic:</strong> Population decline</li>
                <li>• <strong>Cultural:</strong> Loss of heritage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Colonial Era",
        objective: "obj_008",
        text: `
          <h3>The Colonial Era (1880s-1960)</h3>
          <p>Nigeria became a British colony in the late 19th century.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>1880s:</strong> British colonization</li>
                <li>• <strong>1900:</strong> Protectorates established</li>
                <li>• <strong>1914:</strong> Northern and Southern Nigeria merged</li>
                <li>• <strong>1922:</strong> Clifford Constitution</li>
                <li>• <strong>1946:</strong> Richards Constitution</li>
                <li>• <strong>1954:</strong> Lyttleton Constitution</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Colonial Policies</h4>
              <ul>
                <li>• <strong>Indirect rule:</strong> British controlled through chiefs</li>
                <li>• <strong>Lugard's policy:</strong> Indirect rule</li>
                <li>• <strong>Economic exploitation:</strong> Cash crops, minerals</li>
                <li>• <strong>Education:</strong> Missionary schools</li>
                <li>• <strong>Infrastructure:</strong> Railways, roads</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Nationalist Movement",
        objective: "obj_009",
        text: `
          <h3>The Nationalist Movement</h3>
          <p>Nigerians fought for independence through nationalist movements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Leaders</h4>
              <ul>
                <li>• <strong>Herbert Macaulay:</strong> "Father of Nigerian nationalism"</li>
                <li>• <strong>Nnamdi Azikiwe:</strong> First President</li>
                <li>• <strong>Obafemi Awolowo:</strong> Premier of Western Region</li>
                <li>• <strong>Ahmadu Bello:</strong> Premier of Northern Region</li>
                <li>• <strong>Anthony Enahoro:</strong> Nationalist</li>
                <li>• <strong>Tafawa Balewa:</strong> First Prime Minister</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>1951:</strong> Macpherson Constitution</li>
                <li>• <strong>1954:</strong> Federal system</li>
                <li>• <strong>1959:</strong> Pre-independence elections</li>
                <li>• <strong>1960:</strong> Independence</li>
                <li>• <strong>1963:</strong> Republic</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Independence and After",
        objective: "obj_010",
        text: `
          <h3>Independence (1960) and the Republic (1963)</h3>
          <p>Nigeria's independence marked a new chapter in its history.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Independence (1960)</h4>
              <ul>
                <li>• October 1, 1960</li>
                <li>• Sir James Robertson: Last Governor-General</li>
                <li>• Tafawa Balewa: First Prime Minister</li>
                <li>• Nnamdi Azikiwe: First Governor-General</li>
                <li>• Member of the Commonwealth</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Republic (1963)</h4>
              <ul>
                <li>• October 1, 1963</li>
                <li>• Nigeria became a republic</li>
                <li>• Queen replaced by President</li>
                <li>• Nnamdi Azikiwe: First President</li>
                <li>• Supreme Court became final court</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The Nigerian Civil War",
        objective: "obj_011",
        text: `
          <h3>The Nigerian Civil War (1967-1970)</h3>
          <p>The <strong>Nigerian Civil War</strong> was a devastating conflict.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes</h4>
              <ul>
                <li>• <strong>Ethnic tensions:</strong> Igbo, Hausa, Yoruba</li>
                <li>• <strong>January 1966 coup:</strong> Military takeover</li>
                <li>• <strong>July 1966 counter-coup:</strong> Northern retaliation</li>
                <li>• <strong>Massacres:</strong> Attacks on Igbos in the North</li>
                <li>• <strong>Biafra secession:</strong> Eastern region broke away</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>May 1967:</strong> Biafra declared</li>
                <li>• <strong>July 1967:</strong> War began</li>
                <li>• <strong>1967-1970:</strong> Fierce fighting</li>
                <li>• <strong>January 1970:</strong> War ended</li>
                <li>• <strong>Consequences:</strong> Millions killed, reconstruction</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Military Era",
        objective: "obj_012",
        text: `
          <h3>Military Regimes (1966-1999)</h3>
          <p>Nigeria experienced several military governments.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Military Leaders</h4>
              <ul>
                <li>• <strong>General Yakubu Gowon:</strong> 1966-1975</li>
                <li>• <strong>General Murtala Mohammed:</strong> 1975-1976</li>
                <li>• <strong>General Olusegun Obasanjo:</strong> 1976-1979</li>
                <li>• <strong>General Muhammadu Buhari:</strong> 1983-1985</li>
                <li>• <strong>General Ibrahim Babangida:</strong> 1985-1993</li>
                <li>• <strong>General Sani Abacha:</strong> 1993-1998</li>
                <li>• <strong>General Abdulsalami Abubakar:</strong> 1998-1999</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>1979:</strong> Civilian rule (Shagari)</li>
                <li>• <strong>1983:</strong> Military coup</li>
                <li>• <strong>1993:</strong> Annulled election (Abiola)</li>
                <li>• <strong>1999:</strong> Return to civilian rule</li>
                <li>• <strong>Military legacies:</strong> Infrastructure, corruption</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Fourth Republic",
        objective: "obj_013",
        text: `
          <h3>The Fourth Republic (1999-Present)</h3>
          <p>Nigeria returned to democracy in 1999.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Presidents</h4>
              <ul>
                <li>• <strong>Olusegun Obasanjo:</strong> 1999-2007</li>
                <li>• <strong>Umaru Yar'Adua:</strong> 2007-2010</li>
                <li>• <strong>Goodluck Jonathan:</strong> 2010-2015</li>
                <li>• <strong>Muhammadu Buhari:</strong> 2015-2023</li>
                <li>• <strong>Bola Tinubu:</strong> 2023-present</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>1999:</strong> New constitution</li>
                <li>• <strong>2007:</strong> First civilian transition</li>
                <li>• <strong>2011:</strong> Elections</li>
                <li>• <strong>2015:</strong> First opposition victory</li>
                <li>• <strong>2023:</strong> Recent elections</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Cultural Heritage",
        objective: "obj_015",
        text: `
          <h3>Nigerian Cultural Heritage</h3>
          <p>Nigeria has a rich and diverse cultural heritage.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Languages</h4>
              <ul>
                <li>• Over 250 languages</li>
                <li>• Major: Yoruba, Igbo, Hausa</li>
                <li>• English: Official language</li>
                <li>• Pidgin: Widely spoken</li>
                <li>• Various dialects</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Arts and Crafts</h4>
              <ul>
                <li>• <strong>Benin bronze:</strong> World-famous</li>
                <li>• <strong>Yoruba wood carving:</strong> Traditional</li>
                <li>• <strong>Igbo art:</strong> Masks, sculpture</li>
                <li>• <strong>Textiles:</strong> Adire, Aso Oke</li>
                <li>• <strong>Pottery:</strong> Traditional craft</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Festivals</h4>
              <ul>
                <li>• <strong>Osun Osogbo:</strong> Yoruba</li>
                <li>• <strong>Eyo:</strong> Lagos</li>
                <li>• <strong>Durbar:</strong> Northern Nigeria</li>
                <li>• <strong>Argungu:</strong> Fishing festival</li>
                <li>• <strong>New Yam:</strong> Igbo festival</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Contemporary Challenges",
        objective: "obj_016",
        text: `
          <h3>Challenges Facing Nigeria</h3>
          <p>Nigeria faces several challenges in the modern era.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Challenges</h4>
              <ul>
                <li>• <strong>Corruption:</strong> Endemic problem</li>
                <li>• <strong>Insecurity:</strong> Boko Haram, banditry</li>
                <li>• <strong>Poverty:</strong> High poverty rate</li>
                <li>• <strong>Unemployment:</strong> Youth unemployment</li>
                <li>• <strong>Infrastructure:</strong> Poor infrastructure</li>
                <li>• <strong>Ethnic tensions:</strong> Inter-ethnic conflict</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Anti-corruption:</strong> Strengthen institutions</li>
                <li>• <strong>Security reform:</strong> Modernization</li>
                <li>• <strong>Economic diversification:</strong> Reduce oil dependence</li>
                <li>• <strong>Education:</strong> Improve quality</li>
                <li>• <strong>Infrastructure:</strong> Public investment</li>
                <li>• <strong>National unity:</strong> Promote cohesion</li>
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
          <h4>🇳🇬 Nigerian History</h4>
          <ul>
            <li>• Pre-colonial kingdoms: Oyo, Benin, Sokoto</li>
            <li>• Colonial era and independence</li>
            <li>• Nationalist leaders</li>
            <li>• Civil War and military regimes</li>
            <li>• Return to democracy</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Themes</h4>
          <ul>
            <li>• Cultural diversity</li>
            <li>• Struggle for independence</li>
            <li>• Challenges of nation-building</li>
            <li>• Hope for the future</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Nigerian history is a story of resilience, struggle, and hope. Understanding our past is essential for building a better future.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Nigeria was always called Nigeria",
        correction: "The name Nigeria was given by the British",
        explanation: "The name Nigeria was coined by Flora Shaw in 1914."
      },
      {
        id: "mis_002",
        misconception: "Nigeria had no history before colonialism",
        correction: "Nigeria had rich pre-colonial civilizations",
        explanation: "Nigeria had powerful kingdoms like Oyo, Benin, and Sokoto."
      },
      {
        id: "mis_003",
        misconception: "The Civil War was only about ethnicity",
        correction: "The Civil War had political and economic causes",
        explanation: "The war was about secession, power, and resources."
      },
      {
        id: "mis_004",
        misconception: "Nigeria has always been a democracy",
        correction: "Nigeria has experienced both civilian and military rule",
        explanation: "Nigeria has alternated between democracy and military rule."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "National Identity",
        description: "Understanding history builds national identity.",
        example: "Patriotism, national pride"
      },
      {
        id: "app_002",
        title: "Policy Making",
        description: "History informs government policy.",
        example: "Avoiding past mistakes"
      },
      {
        id: "app_003",
        title: "Conflict Resolution",
        description: "History helps resolve conflicts.",
        example: "Understanding root causes"
      },
      {
        id: "app_004",
        title: "Cultural Preservation",
        description: "History preserves cultural heritage.",
        example: "Traditional values, customs"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Nigerian History", definition: "The history of the people and events of Nigeria." },
    { term: "Pre-colonial", definition: "Before colonial rule." },
    { term: "Colonialism", definition: "Rule by a foreign power." },
    { term: "Nationalism", definition: "Movement for independence." },
    { term: "Independence", definition: "Self-rule and freedom." },
    { term: "Republic", definition: "A country without a monarch." },
    { term: "Civil War", definition: "A war within a country." },
    { term: "Military Coup", definition: "Overthrow of government by the military." },
    { term: "Democracy", definition: "Government by the people." },
    { term: "Constitution", definition: "The fundamental law." },
    { term: "Ethnic Group", definition: "A group sharing a common identity." },
    { term: "Indirect Rule", definition: "British rule through traditional chiefs." },
    { term: "Slave Trade", definition: "The trade of enslaved people." },
    { term: "Nationalist", definition: "A person who supports independence." },
    { term: "Federalism", definition: "Division of power between levels." },
    { term: "Military Regime", definition: "Government by the military." },
    { term: "Democratic Transition", definition: "Return to civilian rule." },
    { term: "Cultural Heritage", definition: "Traditional practices and values." },
    { term: "Diversity", definition: "Variety and difference." },
    { term: "Reconstruction", definition: "Rebuilding after conflict." }
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
      question: "Why is Nigerian history important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps us understand our heritage",
        "It only affects politicians",
        "It is for tourists"
      ],
      answer: "It helps us understand our heritage",
      explanation: "Nigerian history helps us understand our heritage."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How many ethnic groups are in Nigeria?",
      type: "multiple_choice",
      options: ["50", "100", "Over 250", "500"],
      answer: "Over 250",
      explanation: "Nigeria has over 250 ethnic groups."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which was a pre-colonial kingdom in Nigeria?",
      type: "multiple_choice",
      options: ["Sokoto Caliphate", "Ghana", "Mali", "Songhai"],
      answer: "Sokoto Caliphate",
      explanation: "The Sokoto Caliphate was a pre-colonial kingdom in Nigeria."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What was the Oyo Empire known for?",
      type: "multiple_choice",
      options: [
        "Bronze art",
        "A powerful army",
        "Islamic learning",
        "Gold trade"
      ],
      answer: "A powerful army",
      explanation: "The Oyo Empire was known for its powerful army."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the Benin Kingdom famous for?",
      type: "multiple_choice",
      options: [
        "Bronze art",
        "Gold trade",
        "Islamic learning",
        "Salt trade"
      ],
      answer: "Bronze art",
      explanation: "The Benin Kingdom is famous for its bronze art."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Who founded the Sokoto Caliphate?",
      type: "multiple_choice",
      options: [
        "Usman dan Fodio",
        "Oba of Benin",
        "Alafin of Oyo",
        "Nnamdi Azikiwe"
      ],
      answer: "Usman dan Fodio",
      explanation: "Usman dan Fodio founded the Sokoto Caliphate."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What was the impact of the slave trade on Nigeria?",
      type: "multiple_choice",
      options: [
        "Economic growth",
        "Population decline",
        "Cultural exchange",
        "No impact"
      ],
      answer: "Population decline",
      explanation: "The slave trade caused population decline."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "When was Nigeria merged as one country?",
      type: "multiple_choice",
      options: ["1900", "1914", "1922", "1946"],
      answer: "1914",
      explanation: "Nigeria was merged in 1914."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Who is known as the 'Father of Nigerian nationalism'?",
      type: "multiple_choice",
      options: [
        "Herbert Macaulay",
        "Nnamdi Azikiwe",
        "Obafemi Awolowo",
        "Ahmadu Bello"
      ],
      answer: "Herbert Macaulay",
      explanation: "Herbert Macaulay is known as the 'Father of Nigerian nationalism'."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Who was Nigeria's first President?",
      type: "multiple_choice",
      options: [
        "Nnamdi Azikiwe",
        "Tafawa Balewa",
        "Obafemi Awolowo",
        "Ahmadu Bello"
      ],
      answer: "Nnamdi Azikiwe",
      explanation: "Nnamdi Azikiwe was Nigeria's first President."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "When did the Nigerian Civil War end?",
      type: "multiple_choice",
      options: ["1969", "1970", "1971", "1972"],
      answer: "1970",
      explanation: "The Nigerian Civil War ended in 1970."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Who was the longest-serving military ruler?",
      type: "multiple_choice",
      options: [
        "Gowon",
        "Babangida",
        "Abacha",
        "Buhari"
      ],
      answer: "Gowon",
      explanation: "Gowon served the longest (1966-1975)."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "When did Nigeria return to democracy?",
      type: "multiple_choice",
      options: ["1998", "1999", "2000", "2001"],
      answer: "1999",
      explanation: "Nigeria returned to democracy in 1999."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Who was Nigeria's President in 2023?",
      type: "multiple_choice",
      options: [
        "Muhammadu Buhari",
        "Goodluck Jonathan",
        "Bola Tinubu",
        "Umaru Yar'Adua"
      ],
      answer: "Bola Tinubu",
      explanation: "Bola Tinubu became President in 2023."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Which is a Nigerian cultural festival?",
      type: "multiple_choice",
      options: [
        "Osun Osogbo",
        "Glastonbury",
        "Carnival",
        "Rio Festival"
      ],
      answer: "Osun Osogbo",
      explanation: "Osun Osogbo is a Nigerian cultural festival."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_nigerian_history",
    title: "Nigerian History Quiz",
    description: "Test your understanding of Nigerian history",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Why is Nigerian history important?",
        type: "short_answer",
        answer_key: "It helps us understand our heritage",
        explanation: "Nigerian history helps us understand our heritage."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How many ethnic groups are in Nigeria?",
        type: "short_answer",
        answer_key: "Over 250",
        explanation: "Nigeria has over 250 ethnic groups."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name one pre-colonial kingdom in Nigeria.",
        type: "short_answer",
        answer_key: "Oyo Empire (or any valid)",
        explanation: "The Oyo Empire was a pre-colonial kingdom."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What was the Oyo Empire known for?",
        type: "short_answer",
        answer_key: "A powerful army",
        explanation: "The Oyo Empire was known for its powerful army."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Benin Kingdom famous for?",
        type: "short_answer",
        answer_key: "Bronze art",
        explanation: "The Benin Kingdom is famous for its bronze art."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Who founded the Sokoto Caliphate?",
        type: "short_answer",
        answer_key: "Usman dan Fodio",
        explanation: "Usman dan Fodio founded the Sokoto Caliphate."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "When was Nigeria merged as one country?",
        type: "short_answer",
        answer_key: "1914",
        explanation: "Nigeria was merged in 1914."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "Who is known as the 'Father of Nigerian nationalism'?",
        type: "short_answer",
        answer_key: "Herbert Macaulay",
        explanation: "Herbert Macaulay is known as the 'Father of Nigerian nationalism'."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Who was Nigeria's first President?",
        type: "short_answer",
        answer_key: "Nnamdi Azikiwe",
        explanation: "Nnamdi Azikiwe was Nigeria's first President."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "When did the Nigerian Civil War end?",
        type: "short_answer",
        answer_key: "1970",
        explanation: "The Nigerian Civil War ended in 1970."
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
        "Understand Nigerian history",
        "Describe pre-colonial kingdoms",
        "Explain the colonial period",
        "Understand independence and after"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Nigerian history?" },
        { time: "5-10 min", activity: "Direct Instruction - Pre-colonial Kingdoms" },
        { time: "10-15 min", activity: "Direct Instruction - Colonial Era" },
        { time: "15-20 min", activity: "Direct Instruction - Nationalist Movement" },
        { time: "20-25 min", activity: "Direct Instruction - Independence" },
        { time: "25-30 min", activity: "Direct Instruction - Civil War" },
        { time: "30-35 min", activity: "Direct Instruction - Military and Democracy" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "It helps us understand our heritage",
        prac_002: "Over 250",
        prac_003: "Sokoto Caliphate",
        prac_004: "A powerful army",
        prac_005: "Bronze art",
        prac_006: "Usman dan Fodio",
        prac_007: "Population decline",
        prac_008: "1914",
        prac_009: "Herbert Macaulay",
        prac_010: "Nnamdi Azikiwe",
        prac_011: "1970",
        prac_012: "Gowon",
        prac_013: "1999",
        prac_014: "Bola Tinubu",
        prac_015: "Osun Osogbo"
      },
      assessment: {
        ass_001: "It helps us understand our heritage",
        ass_002: "Over 250",
        ass_003: "Oyo Empire (or any valid)",
        ass_004: "A powerful army",
        ass_005: "Bronze art",
        ass_006: "Usman dan Fodio",
        ass_007: "1914",
        ass_008: "Herbert Macaulay",
        ass_009: "Nnamdi Azikiwe",
        ass_010: "1970"
      }
    },
    extensionActivities: [
      "Research a Nigerian kingdom",
      "Study Nigerian nationalists",
      "Research the Nigerian Civil War",
      "Visit a historical site"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a timeline"
      ],
      advanced: [
        "Research primary sources",
        "Study Nigerian historiography",
        "Research Nigerian politics",
        "Study Nigerian culture"
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
      title: "Nigerian History Timeline",
      description: "Timeline of Nigerian history",
      url: "/diagrams/nigerian-timeline.png",
      alt: "Nigerian history timeline"
    },
    {
      id: "vis_002",
      type: "map",
      title: "Pre-colonial Kingdoms",
      description: "Map of pre-colonial kingdoms",
      url: "/diagrams/precolonial-kingdoms.png",
      alt: "Pre-colonial kingdoms map"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Nigerian Nationalists",
      description: "Diagram of nationalist leaders",
      url: "/diagrams/nigerian-nationalists.png",
      alt: "Nigerian nationalists diagram"
    }
  ]
};