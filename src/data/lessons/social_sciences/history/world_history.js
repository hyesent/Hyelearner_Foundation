// Location: src/data/lessons/social_sciences/history/world_history.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hist_lesson_world_history",
  subject: "History",
  topic: "World History",
  name: "World History",
  icon: "🌍",
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
    "Understanding of basic history concepts",
    "Knowledge of geography",
    "Interest in world events",
    "Understanding of ancient civilizations"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Nigerian History",
      file: "social_sciences/history/nigerian_history.js"
    },
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
      description: "Define history and explain its importance",
      indicator: "Student can explain what history is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the sources of history",
      indicator: "Student can list primary and secondary sources"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of ancient civilizations",
      indicator: "Student can describe what ancient civilizations were"
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
      description: "Describe the ancient Greek civilization",
      indicator: "Student can explain the key features of ancient Greece"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the ancient Roman civilization",
      indicator: "Student can explain the key features of ancient Rome"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the major world religions",
      indicator: "Student can describe the origins of Islam, Christianity, and other religions"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the Middle Ages in Europe",
      indicator: "Student can explain the key features of the Middle Ages"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the Renaissance period",
      indicator: "Student can describe the Renaissance and its significance"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the impact of the Industrial Revolution",
      indicator: "Student can explain how the Industrial Revolution changed the world"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the causes and effects of World War I",
      indicator: "Student can describe the causes and consequences of WWI"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the causes and effects of World War II",
      indicator: "Student can describe the causes and consequences of WWII"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the Cold War period",
      indicator: "Student can explain the key features of the Cold War"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of decolonization",
      indicator: "Student can describe how colonies gained independence"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of the Age of Exploration",
      indicator: "Student can explain the consequences of European exploration"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of globalization in the modern era",
      indicator: "Student can describe how the world became interconnected"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "World History - From Ancient Civilizations to the Modern World",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about world history from ancient civilizations to the modern era."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to World History</h2>
      <p><strong>World History</strong> is the study of the past from a global perspective, examining the development of human civilization from ancient times to the present. It helps us understand how societies have evolved and how historical events have shaped our modern world.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Key Concepts</h3>
          <ul>
            <li>✓ Ancient Civilizations</li>
            <li>✓ World Religions</li>
            <li>✓ Middle Ages</li>
            <li>✓ Renaissance</li>
            <li>✓ Industrial Revolution</li>
            <li>✓ World Wars</li>
            <li>✓ Cold War</li>
            <li>✓ Decolonization</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Human history spans over 5,000 years</li>
            <li>• The first civilizations emerged around 3500 BCE</li>
            <li>• World War II was the deadliest conflict in history</li>
            <li>• The Industrial Revolution began in the 18th century</li>
            <li>• Decolonization transformed the world map</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why World History Matters</h4>
        <p>World history helps us understand our shared human experience, learn from past mistakes, and appreciate the diversity of human culture and achievement.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is History?",
        objective: "obj_001",
        text: `
          <h3>Understanding History</h3>
          <p><strong>History</strong> is the study of the past, particularly how it relates to humans. It is the record of human events, achievements, and failures.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Why Study History?</h4>
              <ul>
                <li>• Learn from past mistakes</li>
                <li>• Understand the present</li>
                <li>• Appreciate cultural heritage</li>
                <li>• Develop critical thinking</li>
                <li>• Build national identity</li>
                <li>• Preserve memory</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sources of History</h4>
              <ul>
                <li>• <strong>Primary sources:</strong> Original documents, artifacts</li>
                <li>• <strong>Secondary sources:</strong> Books, articles</li>
                <li>• <strong>Oral sources:</strong> Stories, traditions</li>
                <li>• <strong>Archaeological evidence:</strong> Excavations</li>
                <li>• <strong>Written records:</strong> Manuscripts, inscriptions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Ancient Civilizations",
        objective: "obj_003",
        text: `
          <h3>Ancient Civilizations</h3>
          <p>Early civilizations emerged in river valleys and laid the foundation for modern society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Civilizations</h4>
              <ul>
                <li>• <strong>Mesopotamia:</strong> Tigris and Euphrates</li>
                <li>• <strong>Egypt:</strong> Nile River</li>
                <li>• <strong>Indus Valley:</strong> India and Pakistan</li>
                <li>• <strong>China:</strong> Yellow River</li>
                <li>• <strong>Mesoamerica:</strong> Maya, Aztec</li>
                <li>• <strong>Andes:</strong> Inca</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contributions</h4>
              <ul>
                <li>• <strong>Writing:</strong> Cuneiform, hieroglyphics</li>
                <li>• <strong>Mathematics:</strong> Geometry, algebra</li>
                <li>• <strong>Astronomy:</strong> Calendars, star charts</li>
                <li>• <strong>Architecture:</strong> Pyramids, temples</li>
                <li>• <strong>Law:</strong> Code of Hammurabi</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Ancient Egypt",
        objective: "obj_004",
        text: `
          <h3>Ancient Egypt</h3>
          <p><strong>Ancient Egypt</strong> was one of the world's greatest civilizations, lasting for over 3,000 years.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Nile River:</strong> Lifeblood of Egypt</li>
                <li>• <strong>Pharaohs:</strong> Divine rulers</li>
                <li>• <strong>Pyramids:</strong> Tombs for pharaohs</li>
                <li>• <strong>Hieroglyphics:</strong> Picture writing</li>
                <li>• <strong>Religion:</strong> Polytheistic</li>
                <li>• <strong>Cleopatra:</strong> Last pharaoh</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Achievements</h4>
              <ul>
                <li>• <strong>Architecture:</strong> Great Pyramids</li>
                <li>• <strong>Medicine:</strong> Advanced knowledge</li>
                <li>• <strong>Mathematics:</strong> Geometry</li>
                <li>• <strong>Astronomy:</strong> 365-day calendar</li>
                <li>• <strong>Art:</strong> Paintings, sculptures</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Ancient Greece",
        objective: "obj_005",
        text: `
          <h3>Ancient Greece</h3>
          <p><strong>Ancient Greece</strong> is the birthplace of democracy and Western civilization.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>City-states:</strong> Athens, Sparta</li>
                <li>• <strong>Democracy:</strong> Born in Athens</li>
                <li>• <strong>Philosophy:</strong> Socrates, Plato, Aristotle</li>
                <li>• <strong>Olympics:</strong> First held in 776 BCE</li>
                <li>• <strong>Alexander the Great:</strong> Conqueror</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contributions</h4>
              <ul>
                <li>• <strong>Democracy:</strong> Government by the people</li>
                <li>• <strong>Philosophy:</strong> Western thought</li>
                <li>• <strong>Science:</strong> Astronomy, medicine</li>
                <li>• <strong>Art:</strong> Sculpture, drama</li>
                <li>• <strong>Literature:</strong> Epic poetry</li>
                <li>• <strong>Mathematics:</strong> Geometry</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Ancient Rome",
        objective: "obj_006",
        text: `
          <h3>Ancient Rome</h3>
          <p><strong>Ancient Rome</strong> built one of the largest empires in history.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Republic:</strong> Government by elected officials</li>
                <li>• <strong>Empire:</strong> World domination</li>
                <li>• <strong>Julius Caesar:</strong> Famous leader</li>
                <li>• <strong>Roman Law:</strong> Legal system</li>
                <li>• <strong>Christianity:</strong> Became official religion</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Achievements</h4>
              <ul>
                <li>• <strong>Architecture:</strong> Colosseum, aqueducts</li>
                <li>• <strong>Law:</strong> Roman legal system</li>
                <li>• <strong>Engineering:</strong> Roads, bridges</li>
                <li>• <strong>Language:</strong> Latin</li>
                <li>• <strong>Government:</strong> Influence on modern states</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The Middle Ages",
        objective: "obj_008",
        text: `
          <h3>The Middle Ages (500-1500 CE)</h3>
          <p>The <strong>Middle Ages</strong> was a period of European history between the fall of Rome and the Renaissance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Feudalism:</strong> Social system</li>
                <li>• <strong>Manorialism:</strong> Economic system</li>
                <li>• <strong>Knights:</strong> Warriors</li>
                <li>• <strong>Crusades:</strong> Religious wars</li>
                <li>• <strong>Black Death:</strong> Plague</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Developments</h4>
              <ul>
                <li>• <strong>Universities:</strong> Education centers</li>
                <li>• <strong>Cathedrals:</strong> Gothic architecture</li>
                <li>• <strong>Magna Carta:</strong> Limiting royal power</li>
                <li>• <strong>Marco Polo:</strong> Travels to Asia</li>
                <li>• <strong>Islam:</strong> Golden Age of Islam</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Renaissance",
        objective: "obj_009",
        text: `
          <h3>The Renaissance (14th-17th Century)</h3>
          <p>The <strong>Renaissance</strong> was a period of cultural revival in Europe.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Humanism:</strong> Focus on human potential</li>
                <li>• <strong>Art:</strong> Renaissance art</li>
                <li>• <strong>Science:</strong> Scientific revolution</li>
                <li>• <strong>Exploration:</strong> Age of Discovery</li>
                <li>• <strong>Reformation:</strong> Religious reform</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Figures</h4>
              <ul>
                <li>• <strong>Leonardo da Vinci:</strong> Artist, scientist</li>
                <li>• <strong>Michelangelo:</strong> Artist</li>
                <li>• <strong>Galileo:</strong> Scientist</li>
                <li>• <strong>Shakespeare:</strong> Playwright</li>
                <li>• <strong>Martin Luther:</strong> Reformation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Industrial Revolution",
        objective: "obj_010",
        text: `
          <h3>The Industrial Revolution (18th-19th Century)</h3>
          <p>The <strong>Industrial Revolution</strong> transformed society with new technologies and manufacturing processes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Factories:</strong> Mass production</li>
                <li>• <strong>Steam engine:</strong> Power source</li>
                <li>• <strong>Railways:</strong> Transportation</li>
                <li>• <strong>Textile industry:</strong> Mechanization</li>
                <li>• <strong>Urbanization:</strong> Growth of cities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact</h4>
              <ul>
                <li>• <strong>Economic:</strong> Industrial capitalism</li>
                <li>• <strong>Social:</strong> Working class emerged</li>
                <li>• <strong>Political:</strong> Labor movements</li>
                <li>• <strong>Environmental:</strong> Pollution</li>
                <li>• <strong>Global:</strong> Imperial expansion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "World War I",
        objective: "obj_011",
        text: `
          <h3>World War I (1914-1918)</h3>
          <p><strong>World War I</strong> was a global conflict that changed the world.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes</h4>
              <ul>
                <li>• <strong>Militarism:</strong> Arms race</li>
                <li>• <strong>Alliances:</strong> System of alliances</li>
                <li>• <strong>Imperialism:</strong> Colonial rivalry</li>
                <li>• <strong>Nationalism:</strong> Ethnic tensions</li>
                <li>• <strong>Assassination:</strong> Archduke Franz Ferdinand</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consequences</h4>
              <ul>
                <li>• <strong>Casualties:</strong> Over 20 million dead</li>
                <li>• <strong>Treaty of Versailles:</strong> Peace treaty</li>
                <li>• <strong>League of Nations:</strong> International organization</li>
                <li>• <strong>Russian Revolution:</strong> Rise of communism</li>
                <li>• <strong>Weakened Europe:</strong> Decline of empires</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "World War II",
        objective: "obj_012",
        text: `
          <h3>World War II (1939-1945)</h3>
          <p><strong>World War II</strong> was the deadliest conflict in human history.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>German aggression:</strong> Invasion of Poland</li>
                <li>• <strong>Pearl Harbor:</strong> US enters the war</li>
                <li>• <strong>D-Day:</strong> Allied invasion of Europe</li>
                <li>• <strong>Holocaust:</strong> Genocide</li>
                <li>• <strong>Atomic bombs:</strong> Hiroshima and Nagasaki</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consequences</h4>
              <ul>
                <li>• <strong>Casualties:</strong> Over 70 million dead</li>
                <li>• <strong>UN:</strong> United Nations established</li>
                <li>• <strong>Cold War:</strong> Division of Europe</li>
                <li>• <strong>Decolonization:</strong> End of empires</li>
                <li>• <strong>Nuremberg Trials:</strong> War crimes</li>
                <li>• <strong>Israel:</strong> Creation of Israel</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "The Cold War",
        objective: "obj_013",
        text: `
          <h3>The Cold War (1947-1991)</h3>
          <p>The <strong>Cold War</strong> was a period of geopolitical tension between the US and the Soviet Union.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Nuclear arms race:</strong> Build-up of weapons</li>
                <li>• <strong>Space race:</strong> Competition in space</li>
                <li>• <strong>Proxy wars:</strong> Vietnam, Korea, Afghanistan</li>
                <li>• <strong>Berlin Wall:</strong> Symbol of division</li>
                <li>• <strong>Iron Curtain:</strong> Division of Europe</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 End of the Cold War</h4>
              <ul>
                <li>• <strong>Fall of Berlin Wall:</strong> 1989</li>
                <li>• <strong>Dissolution of USSR:</strong> 1991</li>
                <li>• <strong>End of communist rule:</strong> Eastern Europe</li>
                <li>• <strong>US becomes the sole superpower</strong></li>
                <li>• <strong>Globalization:</strong> Increased interconnectedness</li>
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
          <h4>🌍 World History</h4>
          <ul>
            <li>• Ancient civilizations: Egypt, Greece, Rome</li>
            <li>• Middle Ages and Renaissance</li>
            <li>• Industrial Revolution</li>
            <li>• World War I and World War II</li>
            <li>• Cold War and Decolonization</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Lessons</h4>
          <ul>
            <li>• History repeats itself</li>
            <li>• Human achievement and failure</li>
            <li>• Importance of peace and cooperation</li>
            <li>• Impact of technology and ideas</li>
            <li>• Interconnectedness of human experience</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>World history is the story of humanity. It teaches us about our shared past and helps us build a better future.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "History is just a list of dates and events",
        correction: "History is the interpretation of the past",
        explanation: "History involves analyzing causes, effects, and significance."
      },
      {
        id: "mis_002",
        misconception: "Ancient civilizations were primitive",
        correction: "Ancient civilizations were highly advanced",
        explanation: "Ancient civilizations had advanced knowledge in many fields."
      },
      {
        id: "mis_003",
        misconception: "World War I and World War II were the only major conflicts",
        correction: "Many other conflicts have shaped history",
        explanation: "There have been many significant conflicts throughout history."
      },
      {
        id: "mis_004",
        misconception: "History is only about the West",
        correction: "World history includes all civilizations",
        explanation: "World history covers all regions of the world."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Understanding Current Events",
        description: "History helps us understand the present.",
        example: "Current conflicts, political systems"
      },
      {
        id: "app_002",
        title: "Cultural Appreciation",
        description: "History helps us appreciate cultures.",
        example: "Art, literature, traditions"
      },
      {
        id: "app_003",
        title: "Policy Making",
        description: "History informs government policy.",
        example: "Foreign policy, development planning"
      },
      {
        id: "app_004",
        title: "Personal Identity",
        description: "History helps us understand our identity.",
        example: "National identity, heritage"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "History", definition: "The study of the past." },
    { term: "Primary Source", definition: "Original document or artifact." },
    { term: "Secondary Source", definition: "Interpretation of primary sources." },
    { term: "Civilization", definition: "Advanced human society." },
    { term: "Democracy", definition: "Government by the people." },
    { term: "Republic", definition: "Government with elected representatives." },
    { term: "Empire", definition: "Large political unit." },
    { term: "Feudalism", definition: "Medieval social system." },
    { term: "Renaissance", definition: "Period of cultural revival." },
    { term: "Industrial Revolution", definition: "Period of industrialization." },
    { term: "Imperialism", definition: "Extension of power through colonization." },
    { term: "Nationalism", definition: "Patriotic feeling for one's nation." },
    { term: "Militarism", definition: "Belief in military power." },
    { term: "Alliance", definition: "Agreement between nations." },
    { term: "Treaty", definition: "Formal agreement between states." },
    { term: "Decolonization", definition: "Process of gaining independence." },
    { term: "Cold War", definition: "Tension between US and USSR." },
    { term: "Globalization", definition: "Worldwide interconnectedness." },
    { term: "Genocide", definition: "Systematic killing of a group." },
    { term: "Human Rights", definition: "Basic rights of all people." }
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
      question: "What is history?",
      type: "multiple_choice",
      options: [
        "The study of the past",
        "The study of the future",
        "The study of science",
        "The study of art"
      ],
      answer: "The study of the past",
      explanation: "History is the study of the past."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a primary source?",
      type: "multiple_choice",
      options: [
        "A book about history",
        "An original document or artifact",
        "A textbook",
        "A movie"
      ],
      answer: "An original document or artifact",
      explanation: "A primary source is an original document or artifact."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an ancient civilization?",
      type: "multiple_choice",
      options: [
        "A modern society",
        "An early advanced society",
        "A simple society",
        "A future society"
      ],
      answer: "An early advanced society",
      explanation: "Ancient civilizations were early advanced societies."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What river was ancient Egypt located on?",
      type: "multiple_choice",
      options: ["Nile", "Tigris", "Euphrates", "Yellow"],
      answer: "Nile",
      explanation: "Ancient Egypt was located on the Nile River."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the birthplace of democracy?",
      type: "multiple_choice",
      options: ["Rome", "Egypt", "Greece", "China"],
      answer: "Greece",
      explanation: "Ancient Greece is the birthplace of democracy."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What was the Roman Republic?",
      type: "multiple_choice",
      options: [
        "An empire",
        "A government with elected officials",
        "A monarchy",
        "A dictatorship"
      ],
      answer: "A government with elected officials",
      explanation: "The Roman Republic had elected officials."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What was feudalism?",
      type: "multiple_choice",
      options: [
        "A medieval social system",
        "A modern economic system",
        "A type of government",
        "A religion"
      ],
      answer: "A medieval social system",
      explanation: "Feudalism was a medieval social system."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What was the Renaissance?",
      type: "multiple_choice",
      options: [
        "A period of cultural revival",
        "A period of war",
        "A period of decline",
        "A period of exploration"
      ],
      answer: "A period of cultural revival",
      explanation: "The Renaissance was a period of cultural revival."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What was the Industrial Revolution?",
      type: "multiple_choice",
      options: [
        "A period of industrialization",
        "A period of agriculture",
        "A period of war",
        "A period of peace"
      ],
      answer: "A period of industrialization",
      explanation: "The Industrial Revolution was a period of industrialization."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What caused World War I?",
      type: "multiple_choice",
      options: [
        "The assassination of Archduke Franz Ferdinand",
        "The bombing of Pearl Harbor",
        "The invasion of Poland",
        "The Cold War"
      ],
      answer: "The assassination of Archduke Franz Ferdinand",
      explanation: "The assassination of Archduke Franz Ferdinand triggered WWI."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "When did World War II end?",
      type: "multiple_choice",
      options: ["1940", "1944", "1945", "1946"],
      answer: "1945",
      explanation: "World War II ended in 1945."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "What was the Cold War?",
      type: "multiple_choice",
      options: [
        "A period of tension between the US and USSR",
        "A hot war",
        "A global conflict",
        "A colonial war"
      ],
      answer: "A period of tension between the US and USSR",
      explanation: "The Cold War was tension between the US and USSR."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is decolonization?",
      type: "multiple_choice",
      options: [
        "The process of gaining independence",
        "The process of colonization",
        "The process of war",
        "The process of exploration"
      ],
      answer: "The process of gaining independence",
      explanation: "Decolonization is the process of gaining independence."
    },
    {
      id: "prac_014",
      objective: "obj_015",
      difficulty: "hard",
      question: "What was the Age of Exploration?",
      type: "multiple_choice",
      options: [
        "A period of European exploration",
        "A period of colonization",
        "A period of war",
        "A period of peace"
      ],
      answer: "A period of European exploration",
      explanation: "The Age of Exploration was a period of European exploration."
    },
    {
      id: "prac_015",
      objective: "obj_016",
      difficulty: "hard",
      question: "What is globalization?",
      type: "multiple_choice",
      options: [
        "Worldwide interconnectedness",
        "Isolation of countries",
        "Nationalism",
        "Imperialism"
      ],
      answer: "Worldwide interconnectedness",
      explanation: "Globalization is worldwide interconnectedness."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_world_history",
    title: "World History Quiz",
    description: "Test your understanding of world history",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is history?",
        type: "short_answer",
        answer_key: "The study of the past",
        explanation: "History is the study of the past."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a primary source?",
        type: "short_answer",
        answer_key: "An original document or artifact",
        explanation: "A primary source is an original document or artifact."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an ancient civilization?",
        type: "short_answer",
        answer_key: "An early advanced society",
        explanation: "Ancient civilizations were early advanced societies."
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
        question: "What is the birthplace of democracy?",
        type: "short_answer",
        answer_key: "Greece",
        explanation: "Ancient Greece is the birthplace of democracy."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What was the Roman Republic?",
        type: "short_answer",
        answer_key: "A government with elected officials",
        explanation: "The Roman Republic had elected officials."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "hard",
        question: "What was the Renaissance?",
        type: "short_answer",
        answer_key: "A period of cultural revival",
        explanation: "The Renaissance was a period of cultural revival."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What was the Industrial Revolution?",
        type: "short_answer",
        answer_key: "A period of industrialization",
        explanation: "The Industrial Revolution was a period of industrialization."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What caused World War I?",
        type: "short_answer",
        answer_key: "The assassination of Archduke Franz Ferdinand",
        explanation: "The assassination of Archduke Franz Ferdinand triggered WWI."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "When did World War II end?",
        type: "short_answer",
        answer_key: "1945",
        explanation: "World War II ended in 1945."
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
        "Understand history and its sources",
        "Describe ancient civilizations",
        "Explain key world events",
        "Understand the modern world"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is history?" },
        { time: "5-10 min", activity: "Direct Instruction - Ancient Civilizations" },
        { time: "10-15 min", activity: "Direct Instruction - Greece and Rome" },
        { time: "15-20 min", activity: "Direct Instruction - Middle Ages and Renaissance" },
        { time: "20-25 min", activity: "Direct Instruction - Industrial Revolution" },
        { time: "25-30 min", activity: "Direct Instruction - World Wars" },
        { time: "30-35 min", activity: "Direct Instruction - Cold War and Decolonization" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of the past",
        prac_002: "An original document or artifact",
        prac_003: "An early advanced society",
        prac_004: "Nile",
        prac_005: "Greece",
        prac_006: "A government with elected officials",
        prac_007: "A medieval social system",
        prac_008: "A period of cultural revival",
        prac_009: "A period of industrialization",
        prac_010: "The assassination of Archduke Franz Ferdinand",
        prac_011: "1945",
        prac_012: "A period of tension between the US and USSR",
        prac_013: "The process of gaining independence",
        prac_014: "A period of European exploration",
        prac_015: "Worldwide interconnectedness"
      },
      assessment: {
        ass_001: "The study of the past",
        ass_002: "An original document or artifact",
        ass_003: "An early advanced society",
        ass_004: "Nile",
        ass_005: "Greece",
        ass_006: "A government with elected officials",
        ass_007: "A period of cultural revival",
        ass_008: "A period of industrialization",
        ass_009: "The assassination of Archduke Franz Ferdinand",
        ass_010: "1945"
      }
    },
    extensionActivities: [
      "Research an ancient civilization",
      "Study a world leader",
      "Research a historical event",
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
        "Research historical sources",
        "Study historiography",
        "Research comparative history",
        "Analyze historical documents"
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
      title: "World History Timeline",
      description: "Timeline of major world history events",
      url: "/diagrams/world-history-timeline.png",
      alt: "World history timeline"
    },
    {
      id: "vis_002",
      type: "map",
      title: "Ancient Civilizations",
      description: "Map of ancient civilizations",
      url: "/diagrams/ancient-civilizations.png",
      alt: "Ancient civilizations map"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "World Wars Timeline",
      description: "Timeline of World War I and World War II",
      url: "/diagrams/world-wars-timeline.png",
      alt: "World wars timeline"
    }
  ]
};