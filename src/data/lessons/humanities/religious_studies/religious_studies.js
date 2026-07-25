// Location: src/data/lessons/humanities/religious_studies/religious_studies.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_religious_studies",
  subject: "Religious Studies",
  topic: "Religious Studies",
  name: "Religious Studies",
  icon: "⛪",
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
    "Understanding of basic human beliefs",
    "Interest in religion and spirituality",
    "Openness to different perspectives",
    "Understanding of culture"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Christian Religious Studies",
      file: "humanities/religious_studies/christian_religious_studies.js"
    },
    {
      name: "Islamic Religious Studies",
      file: "humanities/religious_studies/islamic_religious_studies.js"
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
      description: "Define religion and explain its importance",
      indicator: "Student can explain what religion is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major world religions",
      indicator: "Student can name the major religions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of faith and belief",
      indicator: "Student can describe what faith means"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the core beliefs of major religions",
      indicator: "Student can describe the key beliefs of Christianity, Islam, and other religions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the role of sacred texts",
      indicator: "Student can explain the importance of religious scriptures"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of worship and ritual",
      indicator: "Student can describe different forms of worship"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the relationship between religion and society",
      indicator: "Student can explain how religion influences society"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of spirituality",
      indicator: "Student can describe what spirituality means"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the role of religious leaders",
      indicator: "Student can explain the role of priests, imams, and other religious leaders"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between different religions",
      indicator: "Student can discuss interfaith dialogue and cooperation"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of religious pluralism",
      indicator: "Student can describe the importance of religious diversity"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of religion in history",
      indicator: "Student can discuss the historical impact of religion"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the relationship between religion and science",
      indicator: "Student can discuss the connection between religion and science"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of religious freedom",
      indicator: "Student can describe the importance of religious freedom"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of religion in modern society",
      indicator: "Student can discuss the contemporary role of religion"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the future of religion in the world",
      indicator: "Student can discuss trends in religion"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Religious Studies - Understanding Faith and Belief",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about religion, its role in society, and the major world religions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Religious Studies</h2>
      <p><strong>Religious studies</strong> is the academic study of religion, beliefs, practices, and spiritual traditions. It examines how people find meaning, purpose, and connection through religion. Understanding religion is essential for understanding human culture and society.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⛪ Key Concepts</h3>
          <ul>
            <li>✓ Major World Religions</li>
            <li>✓ Faith and Belief</li>
            <li>✓ Sacred Texts</li>
            <li>✓ Worship and Ritual</li>
            <li>✓ Religious Leaders</li>
            <li>✓ Religion and Society</li>
            <li>✓ Religious Freedom</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• There are over 4,000 religions in the world</li>
            <li>• Christianity is the largest religion</li>
            <li>• Islam is the second-largest religion</li>
            <li>• Nigeria has both Christianity and Islam</li>
            <li>• Religion has existed for thousands of years</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Religious Studies Matters</h4>
        <p>Religious studies help us understand human culture, values, and history. It promotes tolerance and understanding between different faiths.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Religion?",
        objective: "obj_001",
        text: `
          <h3>Understanding Religion</h3>
          <p><strong>Religion</strong> is a system of beliefs, practices, and values that connects people to the sacred and provides meaning and purpose in life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Beliefs:</strong> Ideas about the divine</li>
                <li>• <strong>Practices:</strong> Rituals and ceremonies</li>
                <li>• <strong>Values:</strong> Moral principles</li>
                <li>• <strong>Community:</strong> Groups of believers</li>
                <li>• <strong>Sacred texts:</strong> Holy scriptures</li>
                <li>• <strong>Leaders:</strong> Religious authorities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions of Religion</h4>
              <ul>
                <li>• <strong>Meaning:</strong> Purpose in life</li>
                <li>• <strong>Community:</strong> Belonging</li>
                <li>• <strong>Morality:</strong> Ethical guidance</li>
                <li>• <strong>Ritual:</strong> Marking life events</li>
                <li>• <strong>Hope:</strong> Comfort and support</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Major World Religions",
        objective: "obj_002",
        text: `
          <h3>Major World Religions</h3>
          <p>There are many religions in the world. The major ones include:</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Abrahamic Religions</h4>
              <ul>
                <li>• <strong>Christianity:</strong> Based on Jesus Christ</li>
                <li>• <strong>Islam:</strong> Based on Prophet Muhammad</li>
                <li>• <strong>Judaism:</strong> Based on Abraham</li>
                <li>• All believe in one God</li>
                <li>• All have sacred scriptures</li>
                <li>• All have prophets</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Eastern Religions</h4>
              <ul>
                <li>• <strong>Hinduism:</strong> Polytheistic tradition</li>
                <li>• <strong>Buddhism:</strong> Founded by Buddha</li>
                <li>• <strong>Sikhism:</strong> Monotheistic tradition</li>
                <li>• <strong>Jainism:</strong> Non-violent tradition</li>
                <li>• <strong>Taoism:</strong> Chinese tradition</li>
                <li>• <strong>Confucianism:</strong> Ethical system</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Traditional Religions</h4>
              <ul>
                <li>• <strong>African Traditional Religions</strong></li>
                <li>• <strong>Indigenous Religions</strong></li>
                <li>• <strong>Native American Religions</strong></li>
                <li>• <strong>Ancestral worship</strong></li>
                <li>• <strong>Nature worship</strong></li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Religion in Nigeria</h4>
              <ul>
                <li>• <strong>Christianity:</strong> Mainly in the South</li>
                <li>• <strong>Islam:</strong> Mainly in the North</li>
                <li>• <strong>Traditional Religions:</strong> Across Nigeria</li>
                <li>• Religious diversity</li>
                <li>• Religious tolerance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Sacred Texts",
        objective: "obj_005",
        text: `
          <h3>Sacred Texts</h3>
          <p><strong>Sacred texts</strong> are religious scriptures that guide beliefs and practices.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Sacred Texts</h4>
              <ul>
                <li>• <strong>The Bible:</strong> Christianity</li>
                <li>• <strong>The Quran:</strong> Islam</li>
                <li>• <strong>The Torah:</strong> Judaism</li>
                <li>• <strong>The Vedas:</strong> Hinduism</li>
                <li>• <strong>The Tripitaka:</strong> Buddhism</li>
                <li>• <strong>The Guru Granth Sahib:</strong> Sikhism</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Guidance:</strong> Moral and spiritual</li>
                <li>• <strong>Doctrine:</strong> Beliefs and teachings</li>
                <li>• <strong>Worship:</strong> Liturgy and prayers</li>
                <li>• <strong>History:</strong> Religious history</li>
                <li>• <strong>Community:</strong> Shared identity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Worship and Ritual",
        objective: "obj_006",
        text: `
          <h3>Worship and Ritual</h3>
          <p><strong>Worship</strong> and <strong>ritual</strong> are expressions of religious devotion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Forms of Worship</h4>
              <ul>
                <li>• <strong>Prayer:</strong> Communication with the divine</li>
                <li>• <strong>Meditation:</strong> Spiritual reflection</li>
                <li>• <strong>Singing:</strong> Hymns and chants</li>
                <li>• <strong>Sacraments:</strong> Sacred ceremonies</li>
                <li>• <strong>Festivals:</strong> Religious celebrations</li>
                <li>• <strong>Pilgrimage:</strong> Sacred journeys</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rituals</h4>
              <ul>
                <li>• <strong>Birth:</strong> Baptism, naming ceremonies</li>
                <li>• <strong>Marriage:</strong> Weddings</li>
                <li>• <strong>Death:</strong> Funerals</li>
                <li>• <strong>Coming of age:</strong> Initiation rituals</li>
                <li>• <strong>Daily rituals:</strong> Prayers, meditation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Religion and Society",
        objective: "obj_007",
        text: `
          <h3>Religion and Society</h3>
          <p>Religion plays a significant role in society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Religious Institutions</h4>
              <ul>
                <li>• <strong>Churches:</strong> Christian communities</li>
                <li>• <strong>Mosques:</strong> Islamic communities</li>
                <li>• <strong>Temples:</strong> Hindu and Buddhist communities</li>
                <li>• <strong>Synagogues:</strong> Jewish communities</li>
                <li>• <strong>Social services:</strong> Schools, hospitals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Social Impact</h4>
              <ul>
                <li>• <strong>Morality:</strong> Ethical values</li>
                <li>• <strong>Charity:</strong> Helping the needy</li>
                <li>• <strong>Community:</strong> Building connections</li>
                <li>• <strong>Culture:</strong> Traditions and customs</li>
                <li>• <strong>Conflict:</strong> Religious tensions</li>
                <li>• <strong>Peace:</strong> Interfaith dialogue</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Religious Freedom",
        objective: "obj_014",
        text: `
          <h3>Religious Freedom</h3>
          <p><strong>Religious freedom</strong> is the right to practice any religion or none.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Freedom of belief:</strong> Choose religion</li>
                <li>• <strong>Freedom of worship:</strong> Practice religion</li>
                <li>• <strong>Freedom of expression:</strong> Share beliefs</li>
                <li>• <strong>Freedom from discrimination:</strong> Equal treatment</li>
                <li>• <strong>Separation of church and state</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Universal Declaration of Human Rights</h4>
              <ul>
                <li>• <strong>Article 18:</strong> Freedom of thought, conscience, and religion</li>
                <li>• Everyone has the right to choose their religion</li>
                <li>• Freedom to worship alone or with others</li>
                <li>• Freedom to teach and practice religion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Interfaith Dialogue",
        objective: "obj_010",
        text: `
          <h3>Interfaith Dialogue</h3>
          <p><strong>Interfaith dialogue</strong> promotes understanding between different religions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Goals</h4>
              <ul>
                <li>• <strong>Understanding:</strong> Learning about other religions</li>
                <li>• <strong>Tolerance:</strong> Respecting differences</li>
                <li>• <strong>Cooperation:</strong> Working together</li>
                <li>• <strong>Peace:</strong> Reducing conflict</li>
                <li>• <strong>Common ground:</strong> Shared values</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Challenges</h4>
              <ul>
                <li>• Misunderstandings</li>
                <li>• Prejudice and stereotypes</li>
                <li>• Historical conflicts</li>
                <li>• Different beliefs</li>
                <li>• Religious extremism</li>
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
          <h4>⛪ Religious Studies</h4>
          <ul>
            <li>• Major world religions: Christianity, Islam, Judaism, Hinduism, Buddhism</li>
            <li>• Sacred texts guide beliefs</li>
            <li>• Worship and rituals express faith</li>
            <li>• Religion plays a role in society</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Religious freedom is a fundamental right</li>
            <li>• Interfaith dialogue promotes understanding</li>
            <li>• Nigeria has religious diversity</li>
            <li>• Religion and culture are interconnected</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Religious studies help us understand the diversity of human beliefs and promote tolerance and respect for all faiths.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All religions are the same",
        correction: "Religions have different beliefs and practices",
        explanation: "Different religions have distinct beliefs, practices, and traditions."
      },
      {
        id: "mis_002",
        misconception: "Religion is only about belief in God",
        correction: "Religion includes many aspects beyond belief",
        explanation: "Religion includes practices, community, values, and rituals."
      },
      {
        id: "mis_003",
        misconception: "Science and religion are always in conflict",
        correction: "Science and religion can coexist",
        explanation: "Many people find compatibility between science and religion."
      },
      {
        id: "mis_004",
        misconception: "Religious freedom means freedom from religion",
        correction: "Religious freedom includes both freedom to practice and freedom from coercion",
        explanation: "Religious freedom protects both religious and non-religious people."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Interfaith Dialogue",
        description: "Understanding different religions promotes peace.",
        example: "Community dialogue, peacebuilding"
      },
      {
        id: "app_002",
        title: "Social Services",
        description: "Religious institutions provide social services.",
        example: "Schools, hospitals, charities"
      },
      {
        id: "app_003",
        title: "Cultural Understanding",
        description: "Religion helps us understand culture.",
        example: "Traditions, festivals, customs"
      },
      {
        id: "app_004",
        title: "Personal Growth",
        description: "Religion provides meaning and purpose.",
        example: "Spiritual development, ethical guidance"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Religion", definition: "A system of beliefs, practices, and values." },
    { term: "Faith", definition: "Confidence or trust in a religion." },
    { term: "Belief", definition: "Acceptance that something is true." },
    { term: "Sacred", definition: "Holy or set apart." },
    { term: "Scripture", definition: "Sacred text of a religion." },
    { term: "Ritual", definition: "A set of religious actions." },
    { term: "Worship", definition: "Expression of reverence for the divine." },
    { term: "Prayer", definition: "Communication with the divine." },
    { term: "Pilgrimage", definition: "A sacred journey." },
    { term: "Monotheism", definition: "Belief in one God." },
    { term: "Polytheism", definition: "Belief in multiple gods." },
    { term: "Prophet", definition: "A messenger of God." },
    { term: "Religious Freedom", definition: "The right to practice any religion." },
    { term: "Interfaith", definition: "Between different religions." },
    { term: "Tolerance", definition: "Respecting differences." },
    { term: "Pluralism", definition: "Diversity and coexistence." },
    { term: "Tradition", definition: "Customs passed down." },
    { term: "Community", definition: "A group of believers." },
    { term: "Spirituality", definition: "Personal connection to the sacred." },
    { term: "Ethics", definition: "Moral principles." }
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
      question: "What is religion?",
      type: "multiple_choice",
      options: [
        "A system of beliefs and practices",
        "A type of government",
        "A form of art",
        "A type of science"
      ],
      answer: "A system of beliefs and practices",
      explanation: "Religion is a system of beliefs and practices."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the largest religion in the world?",
      type: "multiple_choice",
      options: ["Islam", "Christianity", "Hinduism", "Buddhism"],
      answer: "Christianity",
      explanation: "Christianity is the largest religion in the world."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is faith?",
      type: "multiple_choice",
      options: [
        "Certainty based on evidence",
        "Confidence or trust in a religion",
        "Doubt about religion",
        "Rejection of religion"
      ],
      answer: "Confidence or trust in a religion",
      explanation: "Faith is confidence or trust in a religion."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a core belief of Christianity?",
      type: "multiple_choice",
      options: [
        "Belief in Jesus as the Son of God",
        "Belief in Muhammad as the prophet",
        "Belief in karma",
        "Belief in reincarnation"
      ],
      answer: "Belief in Jesus as the Son of God",
      explanation: "Christianity is based on belief in Jesus Christ."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the sacred text of Islam?",
      type: "multiple_choice",
      options: ["The Bible", "The Quran", "The Torah", "The Vedas"],
      answer: "The Quran",
      explanation: "The Quran is the sacred text of Islam."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is worship?",
      type: "multiple_choice",
      options: [
        "Expression of reverence for the divine",
        "A type of work",
        "A form of entertainment",
        "A type of education"
      ],
      answer: "Expression of reverence for the divine",
      explanation: "Worship is expression of reverence for the divine."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "How does religion influence society?",
      type: "multiple_choice",
      options: [
        "It has no influence",
        "It shapes moral values and community",
        "It only affects individuals",
        "It only affects politics"
      ],
      answer: "It shapes moral values and community",
      explanation: "Religion shapes moral values and builds community."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is spirituality?",
      type: "multiple_choice",
      options: [
        "A type of religion",
        "A personal connection to the sacred",
        "A rejection of religion",
        "A type of ritual"
      ],
      answer: "A personal connection to the sacred",
      explanation: "Spirituality is a personal connection to the sacred."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the role of an imam in Islam?",
      type: "multiple_choice",
      options: [
        "To lead prayers",
        "To teach the Bible",
        "To perform ceremonies",
        "To lead worship in a church"
      ],
      answer: "To lead prayers",
      explanation: "An imam leads prayers in Islam."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is interfaith dialogue?",
      type: "multiple_choice",
      options: [
        "Conflict between religions",
        "Understanding between different religions",
        "Conversion to another religion",
        "Rejection of all religions"
      ],
      answer: "Understanding between different religions",
      explanation: "Interfaith dialogue promotes understanding between religions."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is religious pluralism?",
      type: "multiple_choice",
      options: [
        "One religion only",
        "Diversity and coexistence of religions",
        "Conflict between religions",
        "A single religious truth"
      ],
      answer: "Diversity and coexistence of religions",
      explanation: "Religious pluralism is the diversity and coexistence of religions."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How has religion impacted history?",
      type: "multiple_choice",
      options: [
        "It has had no impact",
        "It has shaped civilizations and cultures",
        "It has only caused conflict",
        "It has only brought peace"
      ],
      answer: "It has shaped civilizations and cultures",
      explanation: "Religion has shaped civilizations and cultures."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How do religion and science relate?",
      type: "multiple_choice",
      options: [
        "They are always in conflict",
        "They are completely separate",
        "They can coexist and complement each other",
        "Science has replaced religion"
      ],
      answer: "They can coexist and complement each other",
      explanation: "Religion and science can coexist and complement each other."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is religious freedom?",
      type: "multiple_choice",
      options: [
        "The right to practice any religion",
        "The right to no religion",
        "Both the right to practice and not practice religion",
        "Only the right to practice Christianity"
      ],
      answer: "Both the right to practice and not practice religion",
      explanation: "Religious freedom includes both the right to practice and not practice religion."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the role of religion in modern society?",
      type: "multiple_choice",
      options: [
        "It has no role",
        "It continues to influence many aspects of life",
        "It is only about tradition",
        "It is declining in importance"
      ],
      answer: "It continues to influence many aspects of life",
      explanation: "Religion continues to influence many aspects of life."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_religious_studies",
    title: "Religious Studies Quiz",
    description: "Test your understanding of religious studies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is religion?",
        type: "short_answer",
        answer_key: "A system of beliefs and practices",
        explanation: "Religion is a system of beliefs and practices."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the largest religion in the world?",
        type: "short_answer",
        answer_key: "Christianity",
        explanation: "Christianity is the largest religion."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is faith?",
        type: "short_answer",
        answer_key: "Confidence or trust in a religion",
        explanation: "Faith is confidence or trust in a religion."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a core belief of Christianity?",
        type: "short_answer",
        answer_key: "Belief in Jesus as the Son of God",
        explanation: "Christianity is based on belief in Jesus Christ."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the sacred text of Islam?",
        type: "short_answer",
        answer_key: "The Quran",
        explanation: "The Quran is the sacred text of Islam."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is worship?",
        type: "short_answer",
        answer_key: "Expression of reverence for the divine",
        explanation: "Worship is expression of reverence for the divine."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "How does religion influence society?",
        type: "short_answer",
        answer_key: "It shapes moral values and community",
        explanation: "Religion shapes moral values and builds community."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is spirituality?",
        type: "short_answer",
        answer_key: "A personal connection to the sacred",
        explanation: "Spirituality is a personal connection to the sacred."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is interfaith dialogue?",
        type: "short_answer",
        answer_key: "Understanding between different religions",
        explanation: "Interfaith dialogue promotes understanding between religions."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is religious freedom?",
        type: "short_answer",
        answer_key: "Both the right to practice and not practice religion",
        explanation: "Religious freedom includes both the right to practice and not practice religion."
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
        "Understand religion and its elements",
        "Identify major world religions",
        "Explain sacred texts and worship",
        "Understand religious freedom and interfaith dialogue"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is religion?" },
        { time: "5-10 min", activity: "Direct Instruction - Major World Religions" },
        { time: "10-15 min", activity: "Direct Instruction - Sacred Texts" },
        { time: "15-20 min", activity: "Direct Instruction - Worship and Ritual" },
        { time: "20-25 min", activity: "Direct Instruction - Religion and Society" },
        { time: "25-30 min", activity: "Direct Instruction - Religious Freedom" },
        { time: "30-35 min", activity: "Direct Instruction - Interfaith Dialogue" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A system of beliefs and practices",
        prac_002: "Christianity",
        prac_003: "Confidence or trust in a religion",
        prac_004: "Belief in Jesus as the Son of God",
        prac_005: "The Quran",
        prac_006: "Expression of reverence for the divine",
        prac_007: "It shapes moral values and community",
        prac_008: "A personal connection to the sacred",
        prac_009: "To lead prayers",
        prac_010: "Understanding between different religions",
        prac_011: "Diversity and coexistence of religions",
        prac_012: "It has shaped civilizations and cultures",
        prac_013: "They can coexist and complement each other",
        prac_014: "Both the right to practice and not practice religion",
        prac_015: "It continues to influence many aspects of life"
      },
      assessment: {
        ass_001: "A system of beliefs and practices",
        ass_002: "Christianity",
        ass_003: "Confidence or trust in a religion",
        ass_004: "Belief in Jesus as the Son of God",
        ass_005: "The Quran",
        ass_006: "Expression of reverence for the divine",
        ass_007: "It shapes moral values and community",
        ass_008: "A personal connection to the sacred",
        ass_009: "Understanding between different religions",
        ass_010: "Both the right to practice and not practice religion"
      }
    },
    extensionActivities: [
      "Research a world religion",
      "Visit a religious service",
      "Study interfaith dialogue",
      "Research religious freedom"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research comparative religion",
        "Study religious history",
        "Research religious texts",
        "Study religious philosophy"
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
      title: "Major World Religions",
      description: "Diagram showing major world religions",
      url: "/diagrams/major-world-religions.png",
      alt: "Major world religions diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Sacred Texts",
      description: "Diagram of sacred texts",
      url: "/diagrams/sacred-texts.png",
      alt: "Sacred texts diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Religion and Society",
      description: "Diagram showing religion and society",
      url: "/diagrams/religion-society.png",
      alt: "Religion and society diagram"
    }
  ]
};