// Location: src/data/lessons/business/commerce.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_commerce",
  subject: "Commerce",
  topic: "Commerce",
  name: "Commerce",
  icon: "🏪",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 17,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of business basics",
    "Interest in trade and commerce",
    "Knowledge of basic economics",
    "Understanding of exchange"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Economics",
      file: "business/economics.js"
    },
    {
      name: "Entrepreneurship",
      file: "business/entrepreneurship.js"
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
      description: "Define commerce and explain its importance",
      indicator: "Student can explain what commerce is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the branches of commerce",
      indicator: "Student can distinguish between trade and aids to trade"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of trade",
      indicator: "Student can describe what trade is"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the types of trade",
      indicator: "Student can distinguish between home trade and foreign trade"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the aids to trade",
      indicator: "Student can explain transportation, banking, insurance, and advertising"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of retail trade",
      indicator: "Student can describe different types of retailers"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of wholesale trade",
      indicator: "Student can describe the role of wholesalers"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe international trade",
      indicator: "Student can explain imports and exports"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of commerce to the economy",
      indicator: "Student can discuss the economic significance of commerce"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the channels of distribution",
      indicator: "Student can describe how goods reach consumers"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of e-commerce",
      indicator: "Student can describe online commerce and its impact"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of balance of trade",
      indicator: "Student can describe the relationship between exports and imports"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe trade barriers",
      indicator: "Student can explain tariffs, quotas, and other barriers"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the role of trade organizations",
      indicator: "Student can describe WTO, ECOWAS, and other organizations"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of globalization on commerce",
      indicator: "Student can discuss how globalization affects trade"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of fair trade",
      indicator: "Student can describe the principles of fair trade"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the future of commerce",
      indicator: "Student can discuss trends in commerce"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Commerce - The Exchange of Goods and Services",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about commerce, trade, and the exchange of goods and services."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Commerce</h2>
      <p><strong>Commerce</strong> is the exchange of goods and services between individuals, businesses, and countries. It encompasses all activities involved in the distribution of goods from producers to consumers. Commerce is essential for economic growth and development.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏪 Key Concepts</h3>
          <ul>
            <li>✓ Trade</li>
            <li>✓ Aids to Trade</li>
            <li>✓ Retail Trade</li>
            <li>✓ Wholesale Trade</li>
            <li>✓ International Trade</li>
            <li>✓ Distribution Channels</li>
            <li>✓ E-commerce</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Commerce has existed for thousands of years</li>
            <li>• The first coins were used in Lydia around 600 BCE</li>
            <li>• Nigeria has a vibrant commercial sector</li>
            <li>• E-commerce is growing rapidly</li>
            <li>• International trade is essential for the economy</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Commerce Matters</h4>
        <p>Commerce drives economic growth, creates jobs, and enables the exchange of goods and services that improve our quality of life.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Commerce?",
        objective: "obj_001",
        text: `
          <h3>Understanding Commerce</h3>
          <p><strong>Commerce</strong> is the exchange of goods and services, especially on a large scale. It includes all activities that help in the movement of goods from producers to consumers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Exchange:</strong> Buying and selling</li>
                <li>• <strong>Distribution:</strong> Moving goods</li>
                <li>• <strong>Transportation:</strong> Moving products</li>
                <li>• <strong>Banking:</strong> Financial services</li>
                <li>• <strong>Insurance:</strong> Risk protection</li>
                <li>• <strong>Advertising:</strong> Promoting products</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Economic growth</li>
                <li>• Job creation</li>
                <li>• Consumer choice</li>
                <li>• Standard of living</li>
                <li>• International relations</li>
                <li>• National development</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Branches of Commerce",
        objective: "obj_002",
        text: `
          <h3>Branches of Commerce</h3>
          <p>Commerce is divided into two main branches.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Trade</h4>
              <ul>
                <li>• <strong>Exchange of goods</strong> and services</li>
                <li>• <strong>Home trade:</strong> Within a country</li>
                <li>• <strong>Foreign trade:</strong> Between countries</li>
                <li>• <strong>Retail trade:</strong> Selling to consumers</li>
                <li>• <strong>Wholesale trade:</strong> Selling to retailers</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Aids to Trade</h4>
              <ul>
                <li>• <strong>Transportation:</strong> Moving goods</li>
                <li>• <strong>Banking:</strong> Financial services</li>
                <li>• <strong>Insurance:</strong> Risk protection</li>
                <li>• <strong>Advertising:</strong> Promoting products</li>
                <li>• <strong>Storage:</strong> Warehousing</li>
                <li>• <strong>Communication:</strong> Information exchange</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Trade",
        objective: "obj_003",
        text: `
          <h3>Trade</h3>
          <p><strong>Trade</strong> is the exchange of goods and services between buyers and sellers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Trade</h4>
              <ul>
                <li>• <strong>Home trade:</strong> Buying and selling within a country</li>
                <li>• <strong>Foreign trade:</strong> Buying and selling between countries</li>
                <li>• <strong>Retail trade:</strong> Selling to final consumers</li>
                <li>• <strong>Wholesale trade:</strong> Selling to retailers</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance of Trade</h4>
              <ul>
                <li>• Exchange of goods</li>
                <li>• Economic growth</li>
                <li>• Job creation</li>
                <li>• Consumer choice</li>
                <li>• National development</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Aids to Trade",
        objective: "obj_005",
        text: `
          <h3>Aids to Trade</h3>
          <p><strong>Aids to trade</strong> are services that facilitate the exchange of goods and services.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Transportation</h4>
              <ul>
                <li>• Moving goods</li>
                <li>• Road, rail, air, sea</li>
                <li>• Reduces distance</li>
                <li>• Connects markets</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Banking</h4>
              <ul>
                <li>• Financial services</li>
                <li>• Payments and transfers</li>
                <li>• Credit and loans</li>
                <li>• Safe storage of money</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Insurance</h4>
              <ul>
                <li>• Risk protection</li>
                <li>• Cover for goods</li>
                <li>• Protection against loss</li>
                <li>• Peace of mind</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Advertising</h4>
              <ul>
                <li>• Promoting products</li>
                <li>• Informing consumers</li>
                <li>• Creating demand</li>
                <li>• Building brands</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Warehousing</h4>
              <ul>
                <li>• Storing goods</li>
                <li>• Preserving quality</li>
                <li>• Managing inventory</li>
                <li>• Seasonal storage</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Communication</h4>
              <ul>
                <li>• Information exchange</li>
                <li>• Orders and payments</li>
                <li>• Customer service</li>
                <li>• Technology and connectivity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Retail Trade",
        objective: "obj_006",
        text: `
          <h3>Retail Trade</h3>
          <p><strong>Retail trade</strong> is the sale of goods to final consumers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Retailers</h4>
              <ul>
                <li>• <strong>Small shops:</strong> Corner stores</li>
                <li>• <strong>Supermarkets:</strong> Large stores</li>
                <li>• <strong>Department stores:</strong> Wide variety</li>
                <li>• <strong>Online retailers:</strong> E-commerce</li>
                <li>• <strong>Specialty stores:</strong> Specific products</li>
                <li>• <strong>Franchises:</strong> Branded stores</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Selling to consumers</li>
                <li>• Providing convenience</li>
                <li>• Offering variety</li>
                <li>• Customer service</li>
                <li>• Product information</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Wholesale Trade",
        objective: "obj_007",
        text: `
          <h3>Wholesale Trade</h3>
          <p><strong>Wholesale trade</strong> is the sale of goods to retailers or other businesses.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Wholesalers</h4>
              <ul>
                <li>• <strong>Bulk buying:</strong> Large quantities</li>
                <li>• <strong>Storage:</strong> Warehousing</li>
                <li>• <strong>Distribution:</strong> Breaking bulk</li>
                <li>• <strong>Financing:</strong> Credit to retailers</li>
                <li>• <strong>Risk bearing:</strong> Taking risks</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Connects producers to retailers</li>
                <li>• Reduces transportation costs</li>
                <li>• Provides storage</li>
                <li>• Offers credit</li>
                <li>• Provides market information</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "International Trade",
        objective: "obj_008",
        text: `
          <h3>International Trade</h3>
          <p><strong>International trade</strong> is the exchange of goods and services between countries.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types</h4>
              <ul>
                <li>• <strong>Exports:</strong> Goods sold to other countries</li>
                <li>• <strong>Imports:</strong> Goods bought from other countries</li>
                <li>• <strong>Visible trade:</strong> Physical goods</li>
                <li>• <strong>Invisible trade:</strong> Services</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Access to resources</li>
                <li>• Economic growth</li>
                <li>• Job creation</li>
                <li>• Consumer choice</li>
                <li>• Technology transfer</li>
                <li>• International relations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "E-commerce",
        objective: "obj_011",
        text: `
          <h3>E-commerce</h3>
          <p><strong>E-commerce</strong> is the buying and selling of goods and services online.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types</h4>
              <ul>
                <li>• <strong>B2C:</strong> Business to Consumer</li>
                <li>• <strong>B2B:</strong> Business to Business</li>
                <li>• <strong>C2C:</strong> Consumer to Consumer</li>
                <li>• <strong>M-commerce:</strong> Mobile commerce</li>
                <li>• <strong>Social commerce:</strong> Social media</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Convenience</li>
                <li>• Wider reach</li>
                <li>• Lower costs</li>
                <li>• 24/7 availability</li>
                <li>• Customer reviews</li>
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
          <h4>🏪 Commerce</h4>
          <ul>
            <li>• Trade and aids to trade</li>
            <li>• Types of trade: home and foreign</li>
            <li>• Retail and wholesale trade</li>
            <li>• Aids to trade: transportation, banking, insurance, advertising</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• International trade: exports and imports</li>
            <li>• E-commerce: online commerce</li>
            <li>• Distribution channels</li>
            <li>• Globalization and trade</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Commerce is the lifeblood of the economy. It enables the exchange of goods and services that improve our lives.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Commerce and business are the same thing",
        correction: "Commerce is a part of business, specifically the exchange of goods",
        explanation: "Commerce focuses on trade and exchange, while business includes all activities."
      },
      {
        id: "mis_002",
        misconception: "Only physical goods are traded",
        correction: "Services are also traded in commerce",
        explanation: "Commerce includes both visible (goods) and invisible (services) trade."
      },
      {
        id: "mis_003",
        misconception: "E-commerce is just online shopping",
        correction: "E-commerce includes many types of online transactions",
        explanation: "E-commerce includes B2B, B2C, C2C, and mobile commerce."
      },
      {
        id: "mis_004",
        misconception: "International trade only benefits rich countries",
        correction: "International trade benefits all countries",
        explanation: "Trade allows countries to access resources and grow their economies."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business Operations",
        description: "Commerce is essential for business operations.",
        example: "Buying and selling goods"
      },
      {
        id: "app_002",
        title: "Consumer Access",
        description: "Commerce provides access to goods.",
        example: "Retail stores, online shopping"
      },
      {
        id: "app_003",
        title: "Economic Development",
        description: "Commerce drives economic growth.",
        example: "Trade, employment, and development"
      },
      {
        id: "app_004",
        title: "International Relations",
        description: "Commerce connects countries.",
        example: "Exports, imports, trade agreements"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Commerce", definition: "The exchange of goods and services." },
    { term: "Trade", definition: "The exchange of goods and services." },
    { term: "Home Trade", definition: "Trade within a country." },
    { term: "Foreign Trade", definition: "Trade between countries." },
    { term: "Retail", definition: "Selling to final consumers." },
    { term: "Wholesale", definition: "Selling to retailers." },
    { term: "Exports", definition: "Goods sold to other countries." },
    { term: "Imports", definition: "Goods bought from other countries." },
    { term: "Aids to Trade", definition: "Services that facilitate trade." },
    { term: "Transportation", definition: "Moving goods and people." },
    { term: "Banking", definition: "Financial services." },
    { term: "Insurance", definition: "Protection against risk." },
    { term: "Advertising", definition: "Promoting products." },
    { term: "Warehousing", definition: "Storing goods." },
    { term: "Communication", definition: "Exchanging information." },
    { term: "E-commerce", definition: "Online buying and selling." },
    { term: "Balance of Trade", definition: "Exports minus imports." },
    { term: "Tariff", definition: "A tax on imports." },
    { term: "Globalization", definition: "Worldwide integration." },
    { term: "Fair Trade", definition: "Trade with fairness." }
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
      question: "What is commerce?",
      type: "multiple_choice",
      options: [
        "The study of money",
        "The exchange of goods and services",
        "The study of history",
        "The study of geography"
      ],
      answer: "The exchange of goods and services",
      explanation: "Commerce is the exchange of goods and services."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the branches of commerce?",
      type: "multiple_choice",
      options: [
        "Trade and aids to trade",
        "Retail and wholesale",
        "Imports and exports",
        "Goods and services"
      ],
      answer: "Trade and aids to trade",
      explanation: "The two branches of commerce are trade and aids to trade."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is trade?",
      type: "multiple_choice",
      options: [
        "The exchange of goods and services",
        "The study of business",
        "The study of economics",
        "The study of finance"
      ],
      answer: "The exchange of goods and services",
      explanation: "Trade is the exchange of goods and services."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is home trade?",
      type: "multiple_choice",
      options: [
        "Trade between countries",
        "Trade within a country",
        "Trade online",
        "Trade with other countries"
      ],
      answer: "Trade within a country",
      explanation: "Home trade is trade within a country."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is an aid to trade?",
      type: "multiple_choice",
      options: [
        "Transportation",
        "Banking",
        "Insurance",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Transportation, banking, and insurance are aids to trade."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is retail trade?",
      type: "multiple_choice",
      options: [
        "Selling to retailers",
        "Selling to consumers",
        "Selling to wholesalers",
        "Selling to businesses"
      ],
      answer: "Selling to consumers",
      explanation: "Retail trade is selling to final consumers."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is wholesale trade?",
      type: "multiple_choice",
      options: [
        "Selling to consumers",
        "Selling to retailers",
        "Selling to the public",
        "Selling online"
      ],
      answer: "Selling to retailers",
      explanation: "Wholesale trade is selling to retailers."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between exports and imports?",
      type: "multiple_choice",
      options: [
        "Exports are goods sold to other countries; imports are goods bought from other countries",
        "Exports are goods bought from other countries; imports are goods sold to other countries",
        "They are the same",
        "Exports are services; imports are goods"
      ],
      answer: "Exports are goods sold to other countries; imports are goods bought from other countries",
      explanation: "Exports are sold to other countries; imports are bought from other countries."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is commerce important to the economy?",
      type: "multiple_choice",
      options: [
        "It creates jobs",
        "It drives growth",
        "It provides goods and services",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Commerce creates jobs, drives growth, and provides goods and services."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a distribution channel?",
      type: "multiple_choice",
      options: [
        "The path goods take from producer to consumer",
        "A type of retail store",
        "A type of wholesale store",
        "A type of transportation"
      ],
      answer: "The path goods take from producer to consumer",
      explanation: "A distribution channel is the path goods take from producer to consumer."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is e-commerce?",
      type: "multiple_choice",
      options: [
        "Buying and selling online",
        "Buying and selling in stores",
        "Buying and selling by phone",
        "Buying and selling by mail"
      ],
      answer: "Buying and selling online",
      explanation: "E-commerce is buying and selling online."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is balance of trade?",
      type: "multiple_choice",
      options: [
        "The difference between exports and imports",
        "The total amount of trade",
        "The number of businesses",
        "The amount of money in circulation"
      ],
      answer: "The difference between exports and imports",
      explanation: "Balance of trade is the difference between exports and imports."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is a tariff?",
      type: "multiple_choice",
      options: [
        "A tax on imports",
        "A tax on exports",
        "A type of trade",
        "A type of business"
      ],
      answer: "A tax on imports",
      explanation: "A tariff is a tax on imports."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the WTO?",
      type: "multiple_choice",
      options: [
        "World Trade Organization",
        "World Trade Office",
        "World Trading Organization",
        "World Tourism Organization"
      ],
      answer: "World Trade Organization",
      explanation: "WTO stands for World Trade Organization."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does globalization affect commerce?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It expands trade opportunities",
        "It reduces trade",
        "It only affects large businesses"
      ],
      answer: "It expands trade opportunities",
      explanation: "Globalization expands trade opportunities."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_commerce",
    title: "Commerce Quiz",
    description: "Test your understanding of commerce",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is commerce?",
        type: "short_answer",
        answer_key: "The exchange of goods and services",
        explanation: "Commerce is the exchange of goods and services."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the branches of commerce?",
        type: "short_answer",
        answer_key: "Trade and aids to trade",
        explanation: "The two branches of commerce are trade and aids to trade."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is trade?",
        type: "short_answer",
        answer_key: "The exchange of goods and services",
        explanation: "Trade is the exchange of goods and services."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is home trade?",
        type: "short_answer",
        answer_key: "Trade within a country",
        explanation: "Home trade is trade within a country."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is an aid to trade?",
        type: "short_answer",
        answer_key: "Transportation (or any valid)",
        explanation: "Transportation is an aid to trade."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is retail trade?",
        type: "short_answer",
        answer_key: "Selling to consumers",
        explanation: "Retail trade is selling to final consumers."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is wholesale trade?",
        type: "short_answer",
        answer_key: "Selling to retailers",
        explanation: "Wholesale trade is selling to retailers."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the difference between exports and imports?",
        type: "short_answer",
        answer_key: "Exports are goods sold to other countries; imports are goods bought from other countries",
        explanation: "Exports are sold to other countries; imports are bought from other countries."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is e-commerce?",
        type: "short_answer",
        answer_key: "Buying and selling online",
        explanation: "E-commerce is buying and selling online."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What does WTO stand for?",
        type: "short_answer",
        answer_key: "World Trade Organization",
        explanation: "WTO stands for World Trade Organization."
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
        "Understand commerce and its branches",
        "Explain trade and aids to trade",
        "Describe retail and wholesale trade",
        "Understand international trade and e-commerce"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is commerce?" },
        { time: "5-10 min", activity: "Direct Instruction - Branches of Commerce" },
        { time: "10-15 min", activity: "Direct Instruction - Trade" },
        { time: "15-20 min", activity: "Direct Instruction - Aids to Trade" },
        { time: "20-25 min", activity: "Direct Instruction - Retail and Wholesale" },
        { time: "25-30 min", activity: "Direct Instruction - International Trade" },
        { time: "30-35 min", activity: "Direct Instruction - E-commerce" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The exchange of goods and services",
        prac_002: "Trade and aids to trade",
        prac_003: "The exchange of goods and services",
        prac_004: "Trade within a country",
        prac_005: "All of the above",
        prac_006: "Selling to consumers",
        prac_007: "Selling to retailers",
        prac_008: "Exports are goods sold to other countries; imports are goods bought from other countries",
        prac_009: "All of the above",
        prac_010: "The path goods take from producer to consumer",
        prac_011: "Buying and selling online",
        prac_012: "The difference between exports and imports",
        prac_013: "A tax on imports",
        prac_014: "World Trade Organization",
        prac_015: "It expands trade opportunities"
      },
      assessment: {
        ass_001: "The exchange of goods and services",
        ass_002: "Trade and aids to trade",
        ass_003: "The exchange of goods and services",
        ass_004: "Trade within a country",
        ass_005: "Transportation (or any valid)",
        ass_006: "Selling to consumers",
        ass_007: "Selling to retailers",
        ass_008: "Exports are goods sold to other countries; imports are goods bought from other countries",
        ass_009: "Buying and selling online",
        ass_010: "World Trade Organization"
      }
    },
    extensionActivities: [
      "Research a local market",
      "Study international trade",
      "Analyze e-commerce",
      "Research trade organizations"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research trade policies",
        "Study global commerce",
        "Analyze trade agreements",
        "Research e-commerce trends"
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
      title: "Branches of Commerce",
      description: "Diagram showing branches of commerce",
      url: "/diagrams/branches-of-commerce.png",
      alt: "Branches of commerce diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Aids to Trade",
      description: "Diagram showing aids to trade",
      url: "/diagrams/aids-to-trade.png",
      alt: "Aids to trade diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Distribution Channels",
      description: "Diagram showing distribution channels",
      url: "/diagrams/distribution-channels.png",
      alt: "Distribution channels diagram"
    }
  ]
};