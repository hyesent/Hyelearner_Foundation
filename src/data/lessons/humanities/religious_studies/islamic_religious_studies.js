// Location: src/data/lessons/humanities/religious_studies/islamic_religious_studies.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_islamic_religious_studies",
  subject: "Religious Studies",
  topic: "Islamic Religious Studies",
  name: "Islamic Religious Studies",
  icon: "🕌",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 26,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of religious studies basics",
    "Interest in Islam",
    "Openness to learning",
    "Understanding of the Quran"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Religious Studies lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define Islam and explain its origins",
      indicator: "Student can explain what Islam is and where it began"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the core beliefs of Islam",
      indicator: "Student can list the key beliefs of Islam"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure of the Quran",
      indicator: "Student can describe the Quran and its organization"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the life and teachings of Prophet Muhammad",
      indicator: "Student can explain the key events in the Prophet's life"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the Five Pillars of Islam",
      indicator: "Student can describe the five pillars"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the Six Articles of Faith",
      indicator: "Student can describe the six articles of faith"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the importance of prayer (Salah)",
      indicator: "Student can explain how Muslims pray"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the meaning of fasting (Sawm)",
      indicator: "Student can describe the purpose of fasting"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the history of Islam",
      indicator: "Student can explain the development of Islam"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the different branches of Islam",
      indicator: "Student can distinguish between Sunni and Shia Islam"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of the Mosque in society",
      indicator: "Student can discuss the social impact of the Mosque"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the relationship between Islam and culture",
      indicator: "Student can discuss how Islam interacts with culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain Islamic ethics and morality",
      indicator: "Student can describe Islamic moral teachings"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe Islam in Nigeria",
      indicator: "Student can explain the history and impact of Islam in Nigeria"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the relationship between Islam and other religions",
      indicator: "Student can discuss Islamic attitudes towards other faiths"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of Jihad",
      indicator: "Student can describe the true meaning of Jihad"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the role of faith in daily life",
      indicator: "Student can discuss how faith shapes Muslim living"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the future of Islam",
      indicator: "Student can discuss trends in Islam"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Islamic Religious Studies - The Faith of Muslims",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about Islam, its beliefs, practices, and history."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Islamic Religious Studies</h2>
      <p><strong>Islam</strong> is a monotheistic religion that means "submission to the will of God." It is the second-largest religion in the world, with over 1.8 billion followers. Islam was founded in the 7th century CE by the Prophet Muhammad in the Arabian Peninsula.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🕌 Key Concepts</h3>
          <ul>
            <li>✓ Prophet Muhammad</li>
            <li>✓ The Quran</li>
            <li>✓ Five Pillars</li>
            <li>✓ Six Articles of Faith</li>
            <li>✓ Prayer and Fasting</li>
            <li>✓ Branches of Islam</li>
            <li>✓ Islamic Ethics</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Islam began in the 7th century CE</li>
            <li>• The Quran has 114 chapters (Surahs)</li>
            <li>• Islam is the fastest-growing religion</li>
            <li>• Islam is a majority religion in Nigeria</li>
            <li>• The two main branches are Sunni and Shia</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Islamic Religious Studies Matters</h4>
        <p>Understanding Islam helps us understand its beliefs, practices, and impact on history, culture, and society.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Islam?",
        objective: "obj_001",
        text: `
          <h3>Understanding Islam</h3>
          <p><strong>Islam</strong> is a monotheistic religion that teaches submission to the will of God (Allah). It is the second-largest religion in the world.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Beliefs</h4>
              <ul>
                <li>• One God (Allah)</li>
                <li>• Prophet Muhammad is the messenger of God</li>
                <li>• The Quran is God's final revelation</li>
                <li>• Angels exist</li>
                <li>• Judgment Day</li>
                <li>• Predestination</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Origins</h4>
              <ul>
                <li>• Began in 7th century Arabia</li>
                <li>• Prophet Muhammad received revelations</li>
                <li>• Spread throughout Arabia</li>
                <li>• Expanded globally</li>
                <li>• Now second-largest religion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Quran",
        objective: "obj_003",
        text: `
          <h3>The Quran - The Holy Book</h3>
          <p>The <strong>Quran</strong> is the sacred scripture of Islam. It is believed to be the literal word of God revealed to Prophet Muhammad.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• 114 Surahs (chapters)</li>
                <li>• Organized by length</li>
                <li>• Revealed over 23 years</li>
                <li>• Arabic language</li>
                <li>• Recited and memorized</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Themes</h4>
              <ul>
                <li>• Tawhid (Oneness of God)</li>
                <li>• Prophethood</li>
                <li>• Justice and righteousness</li>
                <li>• Judgment Day</li>
                <li>• Guidance for humanity</li>
                <li>• Moral teachings</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Prophet Muhammad",
        objective: "obj_004",
        text: `
          <h3>Prophet Muhammad</h3>
          <p><strong>Prophet Muhammad</strong> is the founder of Islam and the last messenger of God. Muslims believe he received the Quran from God.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>Birth:</strong> Born in Mecca in 570 CE</li>
                <li>• <strong>Revelation:</strong> First revelation at age 40</li>
                <li>• <strong>Migration:</strong> Hijra to Medina</li>
                <li>• <strong>Leadership:</strong> Established the first Islamic community</li>
                <li>• <strong>Death:</strong> Died in 632 CE</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Teachings</h4>
              <ul>
                <li>• Oneness of God</li>
                <li>• Worship of God alone</li>
                <li>• Social justice</li>
                <li>• Equality of all believers</li>
                <li>• Morality and ethics</li>
                <li>• Preparation for the afterlife</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Six Articles of Faith",
        objective: "obj_006",
        text: `
          <h3>The Six Articles of Faith</h3>
          <p>The <strong>Six Articles of Faith</strong> are the core beliefs of Islam.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Six Articles</h4>
              <ul>
                <li>1. <strong>Belief in God (Allah):</strong> One God</li>
                <li>2. <strong>Belief in Angels:</strong> Created by God</li>
                <li>3. <strong>Belief in Holy Books:</strong> Including the Quran</li>
                <li>4. <strong>Belief in Prophets:</strong> Including Muhammad</li>
                <li>5. <strong>Belief in Judgment Day:</strong> Accountability</li>
                <li>6. <strong>Belief in Predestination:</strong> God's will</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Foundation of faith</li>
                <li>• Core of Islamic belief</li>
                <li>• Unites all Muslims</li>
                <li>• Shapes daily practice</li>
                <li>• Provides worldview</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Five Pillars of Islam",
        objective: "obj_005",
        text: `
          <h3>The Five Pillars of Islam</h3>
          <p>The <strong>Five Pillars</strong> are the essential practices of Islam.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Five Pillars</h4>
              <ul>
                <li>1. <strong>Shahada:</strong> Declaration of faith</li>
                <li>2. <strong>Salah:</strong> Prayer five times daily</li>
                <li>3. <strong>Zakat:</strong> Charity (2.5% of wealth)</li>
                <li>4. <strong>Sawm:</strong> Fasting during Ramadan</li>
                <li>5. <strong>Hajj:</strong> Pilgrimage to Mecca</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Significance</h4>
              <ul>
                <li>• Practical expression of faith</li>
                <li>• Discipline and devotion</li>
                <li>• Community building</li>
                <li>• Spiritual growth</li>
                <li>• Unity among Muslims</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Prayer (Salah)",
        objective: "obj_007",
        text: `
          <h3>Prayer (Salah)</h3>
          <p><strong>Salah</strong> is the ritual prayer performed five times a day by Muslims.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Prayer Times</h4>
              <ul>
                <li>• <strong>Fajr:</strong> Dawn (before sunrise)</li>
                <li>• <strong>Dhuhr:</strong> Noon</li>
                <li>• <strong>Asr:</strong> Afternoon</li>
                <li>• <strong>Maghrib:</strong> Sunset</li>
                <li>• <strong>Isha:</strong> Night</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Preparation</h4>
              <ul>
                <li>• <strong>Wudu:</strong> Ritual purification</li>
                <li>• <strong>Qibla:</strong> Facing Mecca</li>
                <li>• <strong>Intention:</strong> Sincere devotion</li>
                <li>• <strong>Recitation:</strong> Quran verses</li>
                <li>• <strong>Postures:</strong> Standing, bowing, prostrating</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Fasting (Sawm)",
        objective: "obj_008",
        text: `
          <h3>Fasting (Sawm)</h3>
          <p><strong>Sawm</strong> is the fast observed during the month of Ramadan.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Rules of Fasting</h4>
              <ul>
                <li>• No food or drink from dawn to sunset</li>
                <li>• Also abstain from smoking and marital relations</li>
                <li>• Exemptions for sick, pregnant, traveling</li>
                <li>• Includes spiritual reflection</li>
                <li>• Ends with Eid al-Fitr celebration</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Purpose</h4>
              <ul>
                <li>• Develop self-discipline</li>
                <li>• Spiritual growth</li>
                <li>• Empathy for the poor</li>
                <li>• Strengthen faith</li>
                <li>• Seek forgiveness</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Branches of Islam",
        objective: "obj_010",
        text: `
          <h3>Branches of Islam</h3>
          <p>Islam is divided into several branches, with the two largest being Sunni and Shia.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sunni Islam</h4>
              <ul>
                <li>• Largest branch (~85-90%)</li>
                <li>• Follow the Sunnah of the Prophet</li>
                <li>• Four schools of thought</li>
                <li>• Caliphs as leaders</li>
                <li>• Majority worldwide</li>
                <li>• Majority in Nigeria</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Shia Islam</h4>
              <ul>
                <li>• Second largest (~10-15%)</li>
                <li>• Believe in Imams as leaders</li>
                <li>• Ali as rightful successor</li>
                <li>• Focus on the family of the Prophet</li>
                <li>• Majority in Iran, Iraq</li>
                <li>• Minority in Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Sufism</h4>
              <ul>
                <li>• Mystical dimension of Islam</li>
                <li>• Focus on spiritual connection with God</li>
                <li>• Meditation and chanting</li>
                <li>• Prominent in Africa</li>
                <li>• Accepted in Sunni and Shia</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Other Branches</h4>
              <ul>
                <li>• <strong>Ibadi:</strong> Found in Oman</li>
                <li>• <strong>Ahmadiyya:</strong> Minority movement</li>
                <li>• <strong>Nation of Islam:</strong> African American</li>
                <li>• Various reform movements</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Islam in Nigeria",
        objective: "obj_014",
        text: `
          <h3>Islam in Nigeria</h3>
          <p>Islam is a major religion in Nigeria with a significant impact on society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 History</h4>
              <ul>
                <li>• Arrived in 11th century</li>
                <li>• Spread through trade and conquest</li>
                <li>• Sokoto Caliphate (19th century)</li>
                <li>• Colonial period</li>
                <li>• Modern Nigerian Islam</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Major Groups</h4>
              <ul>
                <li>• <strong>Sunni:</strong> Majority</li>
                <li>• <strong>Sufi Orders:</strong> Qadiriyya, Tijaniyya</li>
                <li>• <strong>Shia:</strong> Minority</li>
                <li>• <strong>Islamist movements:</strong> Reformist</li>
                <li>• <strong>Cultural Islam:</strong> Traditional practices</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Islamic Ethics",
        objective: "obj_013",
        text: `
          <h3>Islamic Ethics</h3>
          <p>Islamic ethics are based on the Quran and the teachings of Prophet Muhammad.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Tawhid:</strong> Oneness of God</li>
                <li>• <strong>Justice:</strong> Fairness and equity</li>
                <li>• <strong>Compassion:</strong> Care for others</li>
                <li>• <strong>Honesty:</strong> Truthfulness</li>
                <li>• <strong>Charity:</strong> Helping the needy</li>
                <li>• <strong>Forgiveness:</strong> Mercy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Moral Teachings</h4>
              <ul>
                <li>• <strong>Honesty:</strong> Always truthful</li>
                <li>• <strong>Integrity:</strong> Honest dealings</li>
                <li>• <strong>Kindness:</strong> To all people</li>
                <li>• <strong>Respect:</strong> For parents and elders</li>
                <li>• <strong>Modesty:</strong> Humility</li>
                <li>• <strong>Patience:</strong> Endurance</li>
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
          <h4>🕌 Islam</h4>
          <ul>
            <li>• Based on Prophet Muhammad</li>
            <li>• The Quran is the sacred text</li>
            <li>• Six Articles of Faith</li>
            <li>• Five Pillars of Islam</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Prayer and fasting are central</li>
            <li>• Two main branches: Sunni and Shia</li>
            <li>• Islam in Nigeria</li>
            <li>• Islamic ethics and values</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Islam is a global faith with a rich history and diverse traditions. It continues to shape societies around the world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All Muslims are Arab",
        correction: "Muslims are diverse and come from all over the world",
        explanation: "The largest Muslim populations are in Asia and Africa."
      },
      {
        id: "mis_002",
        misconception: "Islam promotes violence",
        correction: "Islam teaches peace and compassion",
        explanation: "Islam, like other religions, promotes peace and justice."
      },
      {
        id: "mis_003",
        misconception: "All Muslims are the same",
        correction: "Muslims have diverse beliefs and practices",
        explanation: "There are different branches and traditions in Islam."
      },
      {
        id: "mis_004",
        misconception: "Jihad means holy war",
        correction: "Jihad means striving in the way of God",
        explanation: "Jihad primarily means spiritual struggle."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Faith Practice",
        description: "Muslims practice their faith daily.",
        example: "Prayer, fasting, charity"
      },
      {
        id: "app_002",
        title: "Community Service",
        description: "Muslims serve their communities.",
        example: "Zakat, social services"
      },
      {
        id: "app_003",
        title: "Interfaith Dialogue",
        description: "Muslims engage with other faiths.",
        example: "Peacebuilding, understanding"
      },
      {
        id: "app_004",
        title: "Cultural Influence",
        description: "Islam influences culture.",
        example: "Art, architecture, literature"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Islam", definition: "A monotheistic religion meaning 'submission to God'." },
    { term: "Muslim", definition: "A follower of Islam." },
    { term: "Allah", definition: "The Arabic word for God." },
    { term: "Quran", definition: "The sacred scripture of Islam." },
    { term: "Prophet Muhammad", definition: "The founder of Islam." },
    { term: "Sunnah", definition: "The teachings and practices of Prophet Muhammad." },
    { term: "Hadith", definition: "Sayings and traditions of Prophet Muhammad." },
    { term: "Shahada", definition: "The declaration of faith." },
    { term: "Salah", definition: "Ritual prayer performed five times a day." },
    { term: "Zakat", definition: "Charity (2.5% of wealth)." },
    { term: "Sawm", definition: "Fasting during Ramadan." },
    { term: "Hajj", definition: "Pilgrimage to Mecca." },
    { term: "Ramadan", definition: "The month of fasting." },
    { term: "Eid", definition: "A Muslim festival." },
    { term: "Mosque", definition: "A place of worship." },
    { term: "Imam", definition: "A leader of prayer." },
    { term: "Sunni", definition: "The largest branch of Islam." },
    { term: "Shia", definition: "The second largest branch of Islam." },
    { term: "Sufi", definition: "A mystical branch of Islam." },
    { term: "Jihad", definition: "Striving in the way of God." }
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
      question: "What is Islam?",
      type: "multiple_choice",
      options: [
        "A polytheistic religion",
        "A monotheistic religion meaning 'submission to God'",
        "A type of philosophy",
        "A form of government"
      ],
      answer: "A monotheistic religion meaning 'submission to God'",
      explanation: "Islam means submission to the will of God."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a core belief of Islam?",
      type: "multiple_choice",
      options: [
        "Belief in many gods",
        "Belief in one God (Allah)",
        "Belief in reincarnation",
        "Belief in karma"
      ],
      answer: "Belief in one God (Allah)",
      explanation: "Islam is monotheistic and believes in one God."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "How many Surahs are in the Quran?",
      type: "multiple_choice",
      options: ["100", "114", "120", "124"],
      answer: "114",
      explanation: "The Quran has 114 Surahs (chapters)."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Where was Prophet Muhammad born?",
      type: "multiple_choice",
      options: ["Mecca", "Medina", "Jerusalem", "Cairo"],
      answer: "Mecca",
      explanation: "Prophet Muhammad was born in Mecca."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the first pillar of Islam?",
      type: "multiple_choice",
      options: ["Salah", "Shahada", "Zakat", "Sawm"],
      answer: "Shahada",
      explanation: "Shahada is the declaration of faith."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How many articles of faith are there in Islam?",
      type: "multiple_choice",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation: "There are six articles of faith in Islam."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "How many times a day do Muslims pray?",
      type: "multiple_choice",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Muslims pray five times a day."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the purpose of fasting during Ramadan?",
      type: "multiple_choice",
      options: [
        "To develop self-discipline",
        "To lose weight",
        "To save money",
        "To have a holiday"
      ],
      answer: "To develop self-discipline",
      explanation: "Fasting develops self-discipline and spiritual growth."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "When did Islam begin?",
      type: "multiple_choice",
      options: [
        "5th century CE",
        "6th century CE",
        "7th century CE",
        "8th century CE"
      ],
      answer: "7th century CE",
      explanation: "Islam began in the 7th century CE."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the largest branch of Islam?",
      type: "multiple_choice",
      options: ["Sunni", "Shia", "Sufi", "Ibadi"],
      answer: "Sunni",
      explanation: "Sunni Islam is the largest branch."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the role of the Mosque?",
      type: "multiple_choice",
      options: [
        "Place of worship",
        "Community center",
        "Educational center",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "The Mosque serves multiple functions in the community."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does Islam relate to culture?",
      type: "multiple_choice",
      options: [
        "It has no relation",
        "It shapes and is shaped by culture",
        "It only influences Arab culture",
        "It destroys culture"
      ],
      answer: "It shapes and is shaped by culture",
      explanation: "Islam both influences and is influenced by culture."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is a key Islamic ethical principle?",
      type: "multiple_choice",
      options: [
        "Honesty",
        "Justice",
        "Compassion",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Honesty, justice, and compassion are key Islamic ethical principles."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How did Islam come to Nigeria?",
      type: "multiple_choice",
      options: [
        "Through trade",
        "Through conquest",
        "Through missionaries",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Islam came to Nigeria through trade, conquest, and missionaries."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the Islamic view of other religions?",
      type: "multiple_choice",
      options: [
        "They are rejected completely",
        "They are seen with respect and dialogue",
        "They are ignored",
        "They are the same"
      ],
      answer: "They are seen with respect and dialogue",
      explanation: "Islam teaches respect for other religions and encourages dialogue."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_islamic_religious_studies",
    title: "Islamic Religious Studies Quiz",
    description: "Test your understanding of Islamic religious studies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is Islam?",
        type: "short_answer",
        answer_key: "A monotheistic religion meaning 'submission to God'",
        explanation: "Islam means submission to the will of God."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a core belief of Islam?",
        type: "short_answer",
        answer_key: "Belief in one God (Allah)",
        explanation: "Islam is monotheistic and believes in one God."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "How many Surahs are in the Quran?",
        type: "short_answer",
        answer_key: "114",
        explanation: "The Quran has 114 Surahs."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Where was Prophet Muhammad born?",
        type: "short_answer",
        answer_key: "Mecca",
        explanation: "Prophet Muhammad was born in Mecca."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the first pillar of Islam?",
        type: "short_answer",
        answer_key: "Shahada",
        explanation: "Shahada is the declaration of faith."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How many articles of faith are there in Islam?",
        type: "short_answer",
        answer_key: "6",
        explanation: "There are six articles of faith."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "How many times a day do Muslims pray?",
        type: "short_answer",
        answer_key: "5",
        explanation: "Muslims pray five times a day."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the purpose of fasting during Ramadan?",
        type: "short_answer",
        answer_key: "To develop self-discipline and spiritual growth",
        explanation: "Fasting develops self-discipline and spiritual growth."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the largest branch of Islam?",
        type: "short_answer",
        answer_key: "Sunni",
        explanation: "Sunni Islam is the largest branch."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "How did Islam come to Nigeria?",
        type: "short_answer",
        answer_key: "Through trade, conquest, and missionaries",
        explanation: "Islam came to Nigeria through trade, conquest, and missionaries."
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
        "Understand Islam and its origins",
        "Explain core beliefs and the Quran",
        "Describe Prophet Muhammad",
        "Understand the Five Pillars and branches"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Islam?" },
        { time: "5-10 min", activity: "Direct Instruction - The Quran" },
        { time: "10-15 min", activity: "Direct Instruction - Prophet Muhammad" },
        { time: "15-20 min", activity: "Direct Instruction - Six Articles of Faith" },
        { time: "20-25 min", activity: "Direct Instruction - Five Pillars" },
        { time: "25-30 min", activity: "Direct Instruction - Prayer and Fasting" },
        { time: "30-35 min", activity: "Direct Instruction - Branches and Nigerian Islam" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A monotheistic religion meaning 'submission to God'",
        prac_002: "Belief in one God (Allah)",
        prac_003: "114",
        prac_004: "Mecca",
        prac_005: "Shahada",
        prac_006: "6",
        prac_007: "5",
        prac_008: "To develop self-discipline",
        prac_009: "7th century CE",
        prac_010: "Sunni",
        prac_011: "All of the above",
        prac_012: "It shapes and is shaped by culture",
        prac_013: "All of the above",
        prac_014: "All of the above",
        prac_015: "They are seen with respect and dialogue"
      },
      assessment: {
        ass_001: "A monotheistic religion meaning 'submission to God'",
        ass_002: "Belief in one God (Allah)",
        ass_003: "114",
        ass_004: "Mecca",
        ass_005: "Shahada",
        ass_006: "6",
        ass_007: "5",
        ass_008: "To develop self-discipline and spiritual growth",
        ass_009: "Sunni",
        ass_010: "Through trade, conquest, and missionaries"
      }
    },
    extensionActivities: [
      "Read the Quran",
      "Research Islamic history",
      "Study Islamic art and architecture",
      "Visit a Mosque"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Read Islamic texts",
        "Research Islamic history",
        "Study comparative religion",
        "Research Islamic philosophy"
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
      title: "The Five Pillars of Islam",
      description: "Diagram of the Five Pillars",
      url: "/diagrams/five-pillars.png",
      alt: "Five Pillars diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Six Articles of Faith",
      description: "Diagram of the Six Articles of Faith",
      url: "/diagrams/six-articles-faith.png",
      alt: "Six Articles of Faith diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Branches of Islam",
      description: "Diagram of branches of Islam",
      url: "/diagrams/branches-of-islam.png",
      alt: "Branches of Islam diagram"
    }
  ]
};