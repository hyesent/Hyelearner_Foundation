// Location: src/data/lessons/humanities/religious_studies/christian_religious_studies.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_christian_religious_studies",
  subject: "Religious Studies",
  topic: "Christian Religious Studies",
  name: "Christian Religious Studies",
  icon: "✝️",
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
    "Interest in Christianity",
    "Openness to learning",
    "Understanding of the Bible"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
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
      description: "Define Christianity and explain its origins",
      indicator: "Student can explain what Christianity is and where it began"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the core beliefs of Christianity",
      indicator: "Student can list the key beliefs of Christianity"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure of the Bible",
      indicator: "Student can describe the Old and New Testaments"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the life and teachings of Jesus Christ",
      indicator: "Student can explain the key events in Jesus' life"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the concept of the Trinity",
      indicator: "Student can describe the Father, Son, and Holy Spirit"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the meaning of salvation and grace",
      indicator: "Student can describe how Christians understand salvation"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the sacraments and ordinances",
      indicator: "Student can explain baptism and the Eucharist"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the importance of prayer and worship",
      indicator: "Student can describe how Christians pray and worship"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the history of Christianity",
      indicator: "Student can explain the development of Christianity"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the different denominations of Christianity",
      indicator: "Student can distinguish between Catholicism, Protestantism, and Orthodoxy"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of the Church in society",
      indicator: "Student can discuss the social impact of the Church"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the relationship between Christianity and culture",
      indicator: "Student can discuss how Christianity interacts with culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the Christian view of ethics and morality",
      indicator: "Student can describe Christian moral teachings"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe Christianity in Nigeria",
      indicator: "Student can explain the history and impact of Christianity in Nigeria"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the relationship between Christianity and other religions",
      indicator: "Student can discuss Christian attitudes towards other faiths"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of the afterlife in Christianity",
      indicator: "Student can describe heaven, hell, and judgment"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the role of faith in daily life",
      indicator: "Student can discuss how faith shapes Christian living"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the future of Christianity",
      indicator: "Student can discuss trends in Christianity"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Christian Religious Studies - The Faith of Christians",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about Christianity, its beliefs, practices, and history."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Christian Religious Studies</h2>
      <p><strong>Christianity</strong> is the world's largest religion, with over 2 billion followers worldwide. It is based on the life and teachings of Jesus Christ, who Christians believe is the Son of God and the Savior of humanity. Christianity has a rich history, diverse traditions, and a profound impact on culture and society.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">✝️ Key Concepts</h3>
          <ul>
            <li>✓ Jesus Christ</li>
            <li>✓ The Bible</li>
            <li>✓ The Trinity</li>
            <li>✓ Salvation</li>
            <li>✓ Sacraments</li>
            <li>✓ Prayer</li>
            <li>✓ Denominations</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Christianity began about 2,000 years ago</li>
            <li>• The Bible has 66 books</li>
            <li>• There are over 45,000 Christian denominations</li>
            <li>• Christianity is the majority religion in Nigeria</li>
            <li>• The largest Christian denomination is Catholicism</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Christian Religious Studies Matters</h4>
        <p>Understanding Christianity helps us understand its beliefs, practices, and impact on history, culture, and society.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Christianity?",
        objective: "obj_001",
        text: `
          <h3>Understanding Christianity</h3>
          <p><strong>Christianity</strong> is a monotheistic religion based on the life and teachings of Jesus Christ. It is the world's largest religion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Beliefs</h4>
              <ul>
                <li>• One God in three persons</li>
                <li>• Jesus Christ is the Son of God</li>
                <li>• Jesus died for the sins of humanity</li>
                <li>• Jesus rose from the dead</li>
                <li>• Salvation through faith in Jesus</li>
                <li>• The Bible is God's word</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Origins</h4>
              <ul>
                <li>• Began in 1st century Palestine</li>
                <li>• Followers of Jesus</li>
                <li>• Spread by apostles</li>
                <li>• Became official religion of the Roman Empire</li>
                <li>• Spread throughout the world</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Bible",
        objective: "obj_003",
        text: `
          <h3>The Bible - The Sacred Scripture</h3>
          <p>The <strong>Bible</strong> is the sacred scripture of Christianity. It is divided into the Old Testament and the New Testament.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Old Testament</h4>
              <ul>
                <li>• 39 books</li>
                <li>• Written before Jesus</li>
                <li>• Includes:</li>
                <li>• Torah (Law)</li>
                <li>• Prophets</li>
                <li>• Writings</li>
                <li>• Psalms, Proverbs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 New Testament</h4>
              <ul>
                <li>• 27 books</li>
                <li>• Written after Jesus</li>
                <li>• Includes:</li>
                <li>• Gospels (Matthew, Mark, Luke, John)</li>
                <li>• Acts of the Apostles</li>
                <li>• Epistles (Letters)</li>
                <li>• Revelation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Jesus Christ",
        objective: "obj_004",
        text: `
          <h3>Jesus Christ</h3>
          <p><strong>Jesus Christ</strong> is the central figure of Christianity. Christians believe He is the Son of God and the Savior of humanity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Events</h4>
              <ul>
                <li>• <strong>Birth:</strong> Born in Bethlehem</li>
                <li>• <strong>Ministry:</strong> Teaching and healing</li>
                <li>• <strong>Death:</strong> Crucified on a cross</li>
                <li>• <strong>Resurrection:</strong> Rose from the dead</li>
                <li>• <strong>Ascension:</strong> Rose to heaven</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Teachings</h4>
              <ul>
                <li>• <strong>Sermon on the Mount:</strong> Beatitudes</li>
                <li>• <strong>Parables:</strong> Stories with meaning</li>
                <li>• <strong>Love:</strong> Love God and neighbor</li>
                <li>• <strong>Forgiveness:</strong> Forgive others</li>
                <li>• <strong>Kingdom of God:</strong> God's reign</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Trinity",
        objective: "obj_005",
        text: `
          <h3>The Trinity</h3>
          <p><strong>The Trinity</strong> is the Christian belief that God is one being in three persons: Father, Son, and Holy Spirit.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 God the Father</h4>
              <ul>
                <li>• Creator of the universe</li>
                <li>• All-powerful</li>
                <li>• All-knowing</li>
                <li>• Loving Father</li>
                <li>• Source of all life</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 God the Son</h4>
              <ul>
                <li>• Jesus Christ</li>
                <li>• Savior of humanity</li>
                <li>• Word made flesh</li>
                <li>• Reveals the Father</li>
                <li>• Redeemer</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 God the Holy Spirit</h4>
              <ul>
                <li>• Comforter</li>
                <li>• Guide</li>
                <li>• Empowers believers</li>
                <li>• Convicts of sin</li>
                <li>• Gives gifts</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Salvation",
        objective: "obj_006",
        text: `
          <h3>Salvation and Grace</h3>
          <p><strong>Salvation</strong> is the deliverance from sin and its consequences. <strong>Grace</strong> is the unmerited favor of God.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Sin:</strong> Separation from God</li>
                <li>• <strong>Repentance:</strong> Turning from sin</li>
                <li>• <strong>Faith:</strong> Trust in Jesus</li>
                <li>• <strong>Grace:</strong> God's free gift</li>
                <li>• <strong>Forgiveness:</strong> Pardon for sin</li>
                <li>• <strong>Eternal life:</strong> Life with God</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How to Receive Salvation</h4>
              <ul>
                <li>• <strong>Believe:</strong> In Jesus Christ</li>
                <li>• <strong>Confess:</strong> Sins to God</li>
                <li>• <strong>Repent:</strong> Turn from sin</li>
                <li>• <strong>Receive:</strong> Accept Jesus</li>
                <li>• <strong>Follow:</strong> Obey Jesus</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sacraments",
        objective: "obj_007",
        text: `
          <h3>Sacraments and Ordinances</h3>
          <p><strong>Sacraments</strong> are sacred rites that convey God's grace. Different traditions recognize different sacraments.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Sacraments</h4>
              <ul>
                <li>• <strong>Baptism:</strong> Initiation into the Church</li>
                <li>• <strong>Eucharist (Communion):</strong> Remembrance of Jesus</li>
                <li>• <strong>Confirmation:</strong> Strengthening of faith</li>
                <li>• <strong>Marriage:</strong> Union of couple</li>
                <li>• <strong>Holy Orders:</strong> Ordination</li>
                <li>• <strong>Anointing of the Sick:</strong> Healing</li>
                <li>• <strong>Reconciliation:</strong> Forgiveness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Protestant Ordinances</h4>
              <ul>
                <li>• <strong>Baptism:</strong> Symbol of new life</li>
                <li>• <strong>Communion:</strong> Memorial of Jesus</li>
                <li>• Only two ordinances</li>
                <li>• Not viewed as sacramental</li>
                <li>• Symbolic meaning</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Prayer and Worship",
        objective: "obj_008",
        text: `
          <h3>Prayer and Worship</h3>
          <p><strong>Prayer</strong> is communication with God. <strong>Worship</strong> is the expression of reverence and adoration.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Prayer</h4>
              <ul>
                <li>• <strong>Adoration:</strong> Praising God</li>
                <li>• <strong>Confession:</strong> Admitting sin</li>
                <li>• <strong>Thanksgiving:</strong> Thanking God</li>
                <li>• <strong>Supplication:</strong> Asking for help</li>
                <li>• <strong>Intercession:</strong> Praying for others</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Worship Practices</h4>
              <ul>
                <li>• <strong>Church services:</strong> Gathering together</li>
                <li>• <strong>Singing:</strong> Hymns and songs</li>
                <li>• <strong>Preaching:</strong> Teaching the Bible</li>
                <li>• <strong>Prayer:</strong> Corporate prayer</li>
                <li>• <strong>Sacraments:</strong> Baptism, communion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Denominations",
        objective: "obj_010",
        text: `
          <h3>Christian Denominations</h3>
          <p>Christianity is divided into many denominations with different traditions and practices.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Catholicism</h4>
              <ul>
                <li>• Largest denomination</li>
                <li>• Led by the Pope</li>
                <li>• Seven sacraments</li>
                <li>• Tradition and scripture</li>
                <li>• Global presence</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Protestantism</h4>
              <ul>
                <li>• Began in the Reformation</li>
                <li>• Sola Scriptura</li>
                <li>• Faith alone</li>
                <li>• Grace alone</li>
                <li>• Priesthood of all believers</li>
                <li>• Many denominations</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Orthodoxy</h4>
              <ul>
                <li>• Eastern Orthodox</li>
                <li>• Ancient traditions</li>
                <li>• Liturgical worship</li>
                <li>• Icons and rituals</li>
                <li>• Patriarchates</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Pentecostalism</h4>
              <ul>
                <li>• Holy Spirit emphasis</li>
                <li>• Charismatic worship</li>
                <li>• Healing and miracles</li>
                <li>• Growing rapidly</li>
                <li>• Strong in Africa</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Evangelicalism</h4>
              <ul>
                <li>• Bible-centered</li>
                <li>• Personal conversion</li>
                <li>• Mission focus</li>
                <li>• Active faith</li>
                <li>• Cross-denominational</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Anglican</h4>
              <ul>
                <li>• Church of England</li>
                <li>• Middle way</li>
                <li>• Liturgical</li>
                <li>• Episcopal structure</li>
                <li>• Commonwealth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Christianity in Nigeria",
        objective: "obj_014",
        text: `
          <h3>Christianity in Nigeria</h3>
          <p>Christianity is a major religion in Nigeria with a significant impact on society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 History</h4>
              <ul>
                <li>• Arrived in the 19th century</li>
                <li>• Missionary work</li>
                <li>• Spread through education</li>
                <li>• Indigenous churches</li>
                <li>• Growth and expansion</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Major Denominations</h4>
              <ul>
                <li>• <strong>Catholic Church:</strong> Large presence</li>
                <li>• <strong>Anglican Church:</strong> Historical</li>
                <li>• <strong>Pentecostal Churches:</strong> Rapid growth</li>
                <li>• <strong>Methodist Church:</strong> Established</li>
                <li>• <strong>Baptist Church:</strong> Active</li>
                <li>• <strong>Indigenous churches:</strong> Aladura, etc.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Christian Ethics",
        objective: "obj_013",
        text: `
          <h3>Christian Ethics</h3>
          <p>Christian ethics is based on the teachings of Jesus and the Bible.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Love:</strong> Love God and neighbor</li>
                <li>• <strong>Golden Rule:</strong> Do to others as you would have them do to you</li>
                <li>• <strong>Forgiveness:</strong> Forgive others</li>
                <li>• <strong>Justice:</strong> Stand for justice</li>
                <li>• <strong>Mercy:</strong> Show compassion</li>
                <li>• <strong>Humility:</strong> Be humble</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Ten Commandments</h4>
              <ul>
                <li>• <strong>Love God:</strong> First four commandments</li>
                <li>• <strong>Love Others:</strong> Last six commandments</li>
                <li>• <strong>Honor parents:</strong> Family values</li>
                <li>• <strong>Do not kill:</strong> Respect life</li>
                <li>• <strong>Do not steal:</strong> Respect property</li>
                <li>• <strong>Do not lie:</strong> Truthfulness</li>
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
          <h4>✝️ Christianity</h4>
          <ul>
            <li>• Based on Jesus Christ</li>
            <li>• The Bible is the sacred text</li>
            <li>• Core beliefs: Trinity, salvation, grace</li>
            <li>• Sacraments: baptism, communion</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Prayer and worship are central</li>
            <li>• Many denominations</li>
            <li>• Christianity in Nigeria</li>
            <li>• Christian ethics and values</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Christianity is a global faith with a rich history and diverse traditions. It continues to shape societies around the world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All Christians believe the same things",
        correction: "Christians have diverse beliefs and traditions",
        explanation: "Different denominations have different interpretations."
      },
      {
        id: "mis_002",
        misconception: "The Bible is one book",
        correction: "The Bible is a collection of 66 books",
        explanation: "The Bible contains many books written by different authors."
      },
      {
        id: "mis_003",
        misconception: "Christianity is only a Western religion",
        correction: "Christianity is a global religion",
        explanation: "Christianity has strong presence in Africa, Asia, and Latin America."
      },
      {
        id: "mis_004",
        misconception: "Christianity is only about going to church",
        correction: "Christianity is about faith, relationship, and daily living",
        explanation: "Christianity involves personal faith and daily practice."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Faith Practice",
        description: "Christians practice their faith daily.",
        example: "Prayer, Bible reading, worship"
      },
      {
        id: "app_002",
        title: "Community Service",
        description: "Christians serve their communities.",
        example: "Charities, social services"
      },
      {
        id: "app_003",
        title: "Interfaith Dialogue",
        description: "Christians engage with other faiths.",
        example: "Peacebuilding, understanding"
      },
      {
        id: "app_004",
        title: "Cultural Influence",
        description: "Christianity influences culture.",
        example: "Art, music, literature"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Christianity", definition: "A monotheistic religion based on Jesus Christ." },
    { term: "Jesus Christ", definition: "The central figure of Christianity." },
    { term: "Bible", definition: "The sacred scripture of Christianity." },
    { term: "Old Testament", definition: "The first part of the Bible." },
    { term: "New Testament", definition: "The second part of the Bible." },
    { term: "Trinity", definition: "God in three persons: Father, Son, Holy Spirit." },
    { term: "Salvation", definition: "Deliverance from sin and its consequences." },
    { term: "Grace", definition: "The unmerited favor of God." },
    { term: "Faith", definition: "Trust and belief in God." },
    { term: "Repentance", definition: "Turning away from sin." },
    { term: "Baptism", definition: "A sacrament of initiation." },
    { term: "Eucharist", definition: "The sacrament of communion." },
    { term: "Gospel", definition: "The good news of Jesus Christ." },
    { term: "Apostle", definition: "A messenger of Jesus." },
    { term: "Church", definition: "The community of believers." },
    { term: "Denomination", definition: "A branch of Christianity." },
    { term: "Pope", definition: "The leader of the Catholic Church." },
    { term: "Pastor", definition: "A Christian leader." },
    { term: "Parable", definition: "A story with a moral lesson." },
    { term: "Resurrection", definition: "Rising from the dead." }
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
      question: "What is Christianity?",
      type: "multiple_choice",
      options: [
        "A polytheistic religion",
        "A monotheistic religion based on Jesus Christ",
        "A type of philosophy",
        "A form of government"
      ],
      answer: "A monotheistic religion based on Jesus Christ",
      explanation: "Christianity is based on the life and teachings of Jesus Christ."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a core belief of Christianity?",
      type: "multiple_choice",
      options: [
        "Belief in many gods",
        "Belief in Jesus as the Son of God",
        "Belief in reincarnation",
        "Belief in karma"
      ],
      answer: "Belief in Jesus as the Son of God",
      explanation: "Christians believe Jesus is the Son of God."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "How many books are in the Bible?",
      type: "multiple_choice",
      options: ["39", "66", "27", "73"],
      answer: "66",
      explanation: "The Bible has 66 books."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Where was Jesus born?",
      type: "multiple_choice",
      options: ["Bethlehem", "Jerusalem", "Nazareth", "Rome"],
      answer: "Bethlehem",
      explanation: "Jesus was born in Bethlehem."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the Trinity?",
      type: "multiple_choice",
      options: [
        "Three gods",
        "God in three persons",
        "One god only",
        "Four persons"
      ],
      answer: "God in three persons",
      explanation: "The Trinity is God in three persons: Father, Son, and Holy Spirit."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is salvation?",
      type: "multiple_choice",
      options: [
        "A type of prayer",
        "Deliverance from sin",
        "A type of worship",
        "A sacrament"
      ],
      answer: "Deliverance from sin",
      explanation: "Salvation is deliverance from sin."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is baptism?",
      type: "multiple_choice",
      options: [
        "A type of prayer",
        "A sacrament of initiation",
        "A type of worship",
        "A type of teaching"
      ],
      answer: "A sacrament of initiation",
      explanation: "Baptism is a sacrament of initiation."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the Lord's Prayer?",
      type: "multiple_choice",
      options: [
        "A type of sacrament",
        "The prayer Jesus taught",
        "A type of worship",
        "A type of teaching"
      ],
      answer: "The prayer Jesus taught",
      explanation: "The Lord's Prayer is the prayer Jesus taught his disciples."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "When did Christianity begin?",
      type: "multiple_choice",
      options: [
        "1st century BC",
        "1st century AD",
        "2nd century AD",
        "5th century AD"
      ],
      answer: "1st century AD",
      explanation: "Christianity began in the 1st century AD."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the largest Christian denomination?",
      type: "multiple_choice",
      options: ["Protestant", "Catholic", "Orthodox", "Pentecostal"],
      answer: "Catholic",
      explanation: "Catholicism is the largest Christian denomination."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the role of the Church?",
      type: "multiple_choice",
      options: [
        "To provide social services",
        "To spread the gospel",
        "To build community",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "The Church has multiple roles in society."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does Christianity relate to culture?",
      type: "multiple_choice",
      options: [
        "It has no relation",
        "It shapes and is shaped by culture",
        "It only influences Western culture",
        "It destroys culture"
      ],
      answer: "It shapes and is shaped by culture",
      explanation: "Christianity both influences and is influenced by culture."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the Golden Rule?",
      type: "multiple_choice",
      options: [
        "Do to others as you would have them do to you",
        "Love God above all",
        "Honor your parents",
        "Do not kill"
      ],
      answer: "Do to others as you would have them do to you",
      explanation: "The Golden Rule is a key Christian ethical teaching."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How did Christianity come to Nigeria?",
      type: "multiple_choice",
      options: [
        "Through merchants",
        "Through missionaries",
        "Through colonization",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Christianity came to Nigeria through missionaries, merchants, and colonization."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the Christian view of other religions?",
      type: "multiple_choice",
      options: [
        "They are rejected completely",
        "They are seen with respect and dialogue",
        "They are ignored",
        "They are the same"
      ],
      answer: "They are seen with respect and dialogue",
      explanation: "Christians are called to respect other religions and engage in dialogue."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_christian_religious_studies",
    title: "Christian Religious Studies Quiz",
    description: "Test your understanding of Christian religious studies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is Christianity?",
        type: "short_answer",
        answer_key: "A monotheistic religion based on Jesus Christ",
        explanation: "Christianity is based on the life and teachings of Jesus Christ."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a core belief of Christianity?",
        type: "short_answer",
        answer_key: "Belief in Jesus as the Son of God",
        explanation: "Christians believe Jesus is the Son of God."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "How many books are in the Bible?",
        type: "short_answer",
        answer_key: "66",
        explanation: "The Bible has 66 books."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Where was Jesus born?",
        type: "short_answer",
        answer_key: "Bethlehem",
        explanation: "Jesus was born in Bethlehem."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Trinity?",
        type: "short_answer",
        answer_key: "God in three persons",
        explanation: "The Trinity is God in three persons: Father, Son, and Holy Spirit."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is salvation?",
        type: "short_answer",
        answer_key: "Deliverance from sin",
        explanation: "Salvation is deliverance from sin."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is baptism?",
        type: "short_answer",
        answer_key: "A sacrament of initiation",
        explanation: "Baptism is a sacrament of initiation."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the Lord's Prayer?",
        type: "short_answer",
        answer_key: "The prayer Jesus taught",
        explanation: "The Lord's Prayer is the prayer Jesus taught."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the largest Christian denomination?",
        type: "short_answer",
        answer_key: "Catholic",
        explanation: "Catholicism is the largest Christian denomination."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "How did Christianity come to Nigeria?",
        type: "short_answer",
        answer_key: "Through missionaries, merchants, and colonization",
        explanation: "Christianity came to Nigeria through missionaries, merchants, and colonization."
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
        "Understand Christianity and its origins",
        "Explain core beliefs and the Bible",
        "Describe Jesus and the Trinity",
        "Understand denominations and Nigerian Christianity"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Christianity?" },
        { time: "5-10 min", activity: "Direct Instruction - The Bible" },
        { time: "10-15 min", activity: "Direct Instruction - Jesus Christ" },
        { time: "15-20 min", activity: "Direct Instruction - The Trinity" },
        { time: "20-25 min", activity: "Direct Instruction - Salvation" },
        { time: "25-30 min", activity: "Direct Instruction - Sacraments" },
        { time: "30-35 min", activity: "Direct Instruction - Denominations" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A monotheistic religion based on Jesus Christ",
        prac_002: "Belief in Jesus as the Son of God",
        prac_003: "66",
        prac_004: "Bethlehem",
        prac_005: "God in three persons",
        prac_006: "Deliverance from sin",
        prac_007: "A sacrament of initiation",
        prac_008: "The prayer Jesus taught",
        prac_009: "1st century AD",
        prac_010: "Catholic",
        prac_011: "All of the above",
        prac_012: "It shapes and is shaped by culture",
        prac_013: "Do to others as you would have them do to you",
        prac_014: "All of the above",
        prac_015: "They are seen with respect and dialogue"
      },
      assessment: {
        ass_001: "A monotheistic religion based on Jesus Christ",
        ass_002: "Belief in Jesus as the Son of God",
        ass_003: "66",
        ass_004: "Bethlehem",
        ass_005: "God in three persons",
        ass_006: "Deliverance from sin",
        ass_007: "A sacrament of initiation",
        ass_008: "The prayer Jesus taught",
        ass_009: "Catholic",
        ass_010: "Through missionaries, merchants, and colonization"
      }
    },
    extensionActivities: [
      "Read the Bible",
      "Research a Christian denomination",
      "Study Church history",
      "Visit a church service"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Read theological texts",
        "Research Church history",
        "Study comparative religion",
        "Research Christian ethics"
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
      title: "The Trinity",
      description: "Diagram of the Trinity",
      url: "/diagrams/trinity.png",
      alt: "Trinity diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Structure of the Bible",
      description: "Diagram of the Bible structure",
      url: "/diagrams/bible-structure.png",
      alt: "Bible structure diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Christian Denominations",
      description: "Diagram of Christian denominations",
      url: "/diagrams/christian-denominations.png",
      alt: "Christian denominations diagram"
    }
  ]
};