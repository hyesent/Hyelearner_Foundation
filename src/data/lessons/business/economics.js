// Location: src/data/lessons/business/economics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_economics",
  subject: "Economics",
  topic: "Economics",
  name: "Economics",
  icon: "💰",
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
    "Understanding of basic business concepts",
    "Interest in economics",
    "Basic numeracy skills",
    "Understanding of society"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Entrepreneurship",
      file: "business/entrepreneurship.js"
    },
    {
      name: "Finance",
      file: "business/finance.js"
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
      description: "Define economics and explain its importance",
      indicator: "Student can explain what economics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the basic economic problem of scarcity",
      indicator: "Student can describe the problem of scarcity"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the factors of production",
      indicator: "Student can name land, labor, capital, and entrepreneurship"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the concept of opportunity cost",
      indicator: "Student can describe what opportunity cost means"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the types of economic systems",
      indicator: "Student can distinguish between capitalist, socialist, and mixed economies"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the laws of supply and demand",
      indicator: "Student can describe how supply and demand work"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of market equilibrium",
      indicator: "Student can describe how prices are determined"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the types of markets",
      indicator: "Student can distinguish between perfect competition and monopoly"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the role of money in the economy",
      indicator: "Student can describe the functions of money"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concepts of inflation and deflation",
      indicator: "Student can describe inflation and its effects"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the causes and effects of unemployment",
      indicator: "Student can discuss unemployment and its impact"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of government in the economy",
      indicator: "Student can explain government's role in economics"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of gross domestic product (GDP)",
      indicator: "Student can describe GDP and its importance"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain international trade and exchange rates",
      indicator: "Student can describe how international trade works"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze economic growth and development",
      indicator: "Student can discuss economic growth"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of fiscal policy",
      indicator: "Student can describe government spending and taxation"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the concept of monetary policy",
      indicator: "Student can describe central bank policies"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the Nigerian economy",
      indicator: "Student can discuss the Nigerian economy"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Economics - The Study of Choice",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about economics, scarcity, supply and demand, and the economy."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Economics</h2>
      <p><strong>Economics</strong> is the study of how individuals, businesses, and governments make choices about how to allocate scarce resources to satisfy unlimited wants. It helps us understand how societies organize production, distribution, and consumption of goods and services.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💰 Key Concepts</h3>
          <ul>
            <li>✓ Scarcity</li>
            <li>✓ Factors of Production</li>
            <li>✓ Supply and Demand</li>
            <li>✓ Opportunity Cost</li>
            <li>✓ Economic Systems</li>
            <li>✓ Inflation</li>
            <li>✓ GDP</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Economics is over 200 years old</li>
            <li>• Adam Smith is the father of economics</li>
            <li>• Nigeria is the largest economy in Africa</li>
            <li>• The GDP of Nigeria is over 400 billion USD</li>
            <li>• Economics affects our daily lives</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Economics Matters</h4>
        <p>Economics helps us understand how to make better decisions, manage resources, and improve our standard of living.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Economics?",
        objective: "obj_001",
        text: `
          <h3>Understanding Economics</h3>
          <p><strong>Economics</strong> is the study of how people make choices to satisfy their wants and needs with limited resources.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Scarcity:</strong> Limited resources</li>
                <li>• <strong>Choice:</strong> Deciding what to do</li>
                <li>• <strong>Opportunity cost:</strong> The next best alternative</li>
                <li>• <strong>Resources:</strong> Inputs used to produce goods</li>
                <li>• <strong>Needs and wants:</strong> Basic and desired goods</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Microeconomics vs Macroeconomics</h4>
              <ul>
                <li>• <strong>Microeconomics:</strong> Individual decisions</li>
                <li>• <strong>Macroeconomics:</strong> The whole economy</li>
                <li>• Micro: Supply and demand</li>
                <li>• Macro: Inflation, GDP, unemployment</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Scarcity and Choice",
        objective: "obj_002",
        text: `
          <h3>Scarcity and Choice</h3>
          <p><strong>Scarcity</strong> is the fundamental economic problem: wants are unlimited, but resources are limited.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Problem of Scarcity</h4>
              <ul>
                <li>• <strong>Unlimited wants:</strong> People always want more</li>
                <li>• <strong>Limited resources:</strong> Not enough to satisfy everyone</li>
                <li>• <strong>Choices:</strong> Must decide how to use resources</li>
                <li>• <strong>Trade-offs:</strong> Giving up something to get something</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Opportunity Cost</h4>
              <ul>
                <li>• <strong>Definition:</strong> The next best alternative forgone</li>
                <li>• <strong>Example:</strong> Studying vs working</li>
                <li>• <strong>Decision-making:</strong> Weighing costs and benefits</li>
                <li>• <strong>All decisions have opportunity costs</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Factors of Production",
        objective: "obj_003",
        text: `
          <h3>Factors of Production</h3>
          <p>The <strong>factors of production</strong> are the resources used to produce goods and services.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Four Factors</h4>
              <ul>
                <li>• <strong>Land:</strong> Natural resources</li>
                <li>• <strong>Labor:</strong> Human effort</li>
                <li>• <strong>Capital:</strong> Tools and machinery</li>
                <li>• <strong>Entrepreneurship:</strong> Organizing resources</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Returns</h4>
              <ul>
                <li>• <strong>Land:</strong> Rent</li>
                <li>• <strong>Labor:</strong> Wages</li>
                <li>• <strong>Capital:</strong> Interest</li>
                <li>• <strong>Entrepreneurship:</strong> Profit</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Economic Systems",
        objective: "obj_005",
        text: `
          <h3>Economic Systems</h3>
          <p>Different countries organize their economies in different ways.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Capitalist Economy</h4>
              <ul>
                <li>• Private ownership</li>
                <li>• Free markets</li>
                <li>• Competition</li>
                <li>• Profit motive</li>
                <li>• Example: USA</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Socialist Economy</h4>
              <ul>
                <li>• State ownership</li>
                <li>• Central planning</li>
                <li>• Equality</li>
                <li>• State control</li>
                <li>• Example: Cuba</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Mixed Economy</h4>
              <ul>
                <li>• Combination of both</li>
                <li>• Private and public</li>
                <li>• Regulated markets</li>
                <li>• Social welfare</li>
                <li>• Example: Nigeria</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Supply and Demand",
        objective: "obj_006",
        text: `
          <h3>Supply and Demand</h3>
          <p><strong>Supply</strong> is the quantity of goods producers are willing to sell. <strong>Demand</strong> is the quantity consumers are willing to buy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Law of Demand</h4>
              <ul>
                <li>• Price increases = demand decreases</li>
                <li>• Price decreases = demand increases</li>
                <li>• Relationship between price and quantity</li>
                <li>• Ceteris paribus (all else equal)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Law of Supply</h4>
              <ul>
                <li>• Price increases = supply increases</li>
                <li>• Price decreases = supply decreases</li>
                <li>• Relationship between price and quantity</li>
                <li>• Producers respond to prices</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Market Equilibrium",
        objective: "obj_007",
        text: `
          <h3>Market Equilibrium</h3>
          <p><strong>Market equilibrium</strong> occurs when supply equals demand.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Equilibrium Price</h4>
              <ul>
                <li>• Price where quantity supplied = quantity demanded</li>
                <li>• Market clears</li>
                <li>• No shortage or surplus</li>
                <li>• Stable price</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Disequilibrium</h4>
              <ul>
                <li>• <strong>Shortage:</strong> Demand > Supply</li>
                <li>• <strong>Surplus:</strong> Supply > Demand</li>
                <li>• Prices adjust to restore equilibrium</li>
                <li>• Market forces work</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Market Structures",
        objective: "obj_008",
        text: `
          <h3>Market Structures</h3>
          <p>Markets have different structures based on competition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Perfect Competition</h4>
              <ul>
                <li>• Many sellers</li>
                <li>• Identical products</li>
                <li>• Free entry and exit</li>
                <li>• No single seller controls price</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Monopoly</h4>
              <ul>
                <li>• One seller</li>
                <li>• Unique product</li>
                <li>• Barriers to entry</li>
                <li>• Price maker</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Oligopoly</h4>
              <ul>
                <li>• Few sellers</li>
                <li>• Interdependent decisions</li>
                <li>• Barriers to entry</li>
                <li>• Examples: Airlines, telecom</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Monopolistic Competition</h4>
              <ul>
                <li>• Many sellers</li>
                <li>• Differentiated products</li>
                <li>• Free entry</li>
                <li>• Examples: Restaurants, clothing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Money and Banking",
        objective: "obj_009",
        text: `
          <h3>Money and Banking</h3>
          <p><strong>Money</strong> is a medium of exchange, store of value, and unit of account.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Money</h4>
              <ul>
                <li>• <strong>Medium of exchange:</strong> Used to buy goods</li>
                <li>• <strong>Store of value:</strong> Holds value over time</li>
                <li>• <strong>Unit of account:</strong> Measures value</li>
                <li>• <strong>Standard of deferred payment:</strong> Used for debt</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Banking System</h4>
              <ul>
                <li>• <strong>Central bank:</strong> Controls money supply</li>
                <li>• <strong>Commercial banks:</strong> Accept deposits and lend</li>
                <li>• <strong>Interest rates:</strong> Cost of borrowing</li>
                <li>• <strong>Banking services:</strong> Savings, loans, transfers</li>
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
          <h4>💰 Economics</h4>
          <ul>
            <li>• Scarcity and choice</li>
            <li>• Factors of production: land, labor, capital, entrepreneurship</li>
            <li>• Supply and demand</li>
            <li>• Market equilibrium</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Economic systems</li>
            <li>• Market structures</li>
            <li>• Money and banking</li>
            <li>• Nigerian economy</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Economics helps us understand how to make better decisions and improve our standard of living.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Economics is only about money",
        correction: "Economics is about choices with scarce resources",
        explanation: "Economics studies how people make decisions with limited resources."
      },
      {
        id: "mis_002",
        misconception: "Supply and demand only work in theory",
        correction: "Supply and demand work in real markets",
        explanation: "The laws of supply and demand operate in all markets."
      },
      {
        id: "mis_003",
        misconception: "All monopolies are illegal",
        correction: "Some monopolies are legal (natural monopolies)",
        explanation: "Natural monopolies like utilities are regulated, not illegal."
      },
      {
        id: "mis_004",
        misconception: "Inflation is always bad",
        correction: "Some inflation is normal and healthy",
        explanation: "Moderate inflation is a sign of a growing economy."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Finance",
        description: "Economics helps with personal financial decisions.",
        example: "Budgeting, saving, investing"
      },
      {
        id: "app_002",
        title: "Business Decisions",
        description: "Businesses use economics to make decisions.",
        example: "Pricing, production, investment"
      },
      {
        id: "app_003",
        title: "Government Policy",
        description: "Governments use economics for policy.",
        example: "Taxation, spending, regulation"
      },
      {
        id: "app_004",
        title: "Understanding the Economy",
        description: "Economics helps us understand the world.",
        example: "Inflation, unemployment, growth"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Economics", definition: "The study of how people make choices with scarce resources." },
    { term: "Scarcity", definition: "Limited resources to meet unlimited wants." },
    { term: "Opportunity Cost", definition: "The next best alternative forgone." },
    { term: "Factors of Production", definition: "Land, labor, capital, and entrepreneurship." },
    { term: "Demand", definition: "The quantity consumers are willing to buy." },
    { term: "Supply", definition: "The quantity producers are willing to sell." },
    { term: "Equilibrium", definition: "Where supply equals demand." },
    { term: "Market", definition: "A place where buyers and sellers meet." },
    { term: "Monopoly", definition: "A market with one seller." },
    { term: "Competition", definition: "Rivalry between businesses." },
    { term: "Money", definition: "A medium of exchange." },
    { term: "Bank", definition: "A financial institution." },
    { term: "Interest", definition: "The cost of borrowing money." },
    { term: "Inflation", definition: "A general increase in prices." },
    { term: "Unemployment", definition: "People without jobs." },
    { term: "GDP", definition: "Gross Domestic Product." },
    { term: "Fiscal Policy", definition: "Government spending and taxation." },
    { term: "Monetary Policy", definition: "Central bank policies." },
    { term: "Economic Growth", definition: "Increase in production." },
    { term: "Exchange Rate", definition: "The value of one currency in terms of another." }
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
      question: "What is economics?",
      type: "multiple_choice",
      options: [
        "The study of money",
        "The study of how people make choices with scarce resources",
        "The study of business",
        "The study of history"
      ],
      answer: "The study of how people make choices with scarce resources",
      explanation: "Economics is the study of how people make choices with scarce resources."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is scarcity?",
      type: "multiple_choice",
      options: [
        "When there is enough of everything",
        "Limited resources to meet unlimited wants",
        "When resources are unlimited",
        "When there is no choice"
      ],
      answer: "Limited resources to meet unlimited wants",
      explanation: "Scarcity means limited resources to meet unlimited wants."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are the factors of production?",
      type: "multiple_choice",
      options: [
        "Land, labor, capital, entrepreneurship",
        "Money, land, labor, capital",
        "Land, money, labor, entrepreneurship",
        "Labor, capital, money, entrepreneurship"
      ],
      answer: "Land, labor, capital, entrepreneurship",
      explanation: "The four factors of production are land, labor, capital, and entrepreneurship."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is opportunity cost?",
      type: "multiple_choice",
      options: [
        "The cost of production",
        "The next best alternative forgone",
        "The price of a good",
        "The total cost of a choice"
      ],
      answer: "The next best alternative forgone",
      explanation: "Opportunity cost is the next best alternative forgone."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a capitalist economy?",
      type: "multiple_choice",
      options: [
        "An economy with state ownership",
        "An economy with private ownership",
        "An economy with no ownership",
        "An economy with only government control"
      ],
      answer: "An economy with private ownership",
      explanation: "A capitalist economy is based on private ownership."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the law of demand?",
      type: "multiple_choice",
      options: [
        "As price increases, demand increases",
        "As price increases, demand decreases",
        "Price and demand are not related",
        "Demand is always constant"
      ],
      answer: "As price increases, demand decreases",
      explanation: "The law of demand states that as price increases, demand decreases."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is market equilibrium?",
      type: "multiple_choice",
      options: [
        "When supply exceeds demand",
        "When demand exceeds supply",
        "When supply equals demand",
        "When the market is unstable"
      ],
      answer: "When supply equals demand",
      explanation: "Market equilibrium occurs when supply equals demand."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a monopoly?",
      type: "multiple_choice",
      options: [
        "A market with many sellers",
        "A market with one seller",
        "A market with perfect competition",
        "A market with no sellers"
      ],
      answer: "A market with one seller",
      explanation: "A monopoly is a market with one seller."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a function of money?",
      type: "multiple_choice",
      options: [
        "A medium of exchange",
        "A store of value",
        "A unit of account",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Money serves as a medium of exchange, store of value, and unit of account."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is inflation?",
      type: "multiple_choice",
      options: [
        "A decrease in prices",
        "An increase in prices",
        "No change in prices",
        "A decrease in the money supply"
      ],
      answer: "An increase in prices",
      explanation: "Inflation is a general increase in prices."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is unemployment?",
      type: "multiple_choice",
      options: [
        "People without jobs",
        "People working part-time",
        "People with jobs",
        "People in school"
      ],
      answer: "People without jobs",
      explanation: "Unemployment refers to people without jobs."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of government in the economy?",
      type: "multiple_choice",
      options: [
        "No role",
        "To regulate and provide services",
        "To control everything",
        "To only collect taxes"
      ],
      answer: "To regulate and provide services",
      explanation: "Government regulates the economy and provides services."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is GDP?",
      type: "multiple_choice",
      options: [
        "Gross Domestic Product",
        "Gross Domestic Profit",
        "Gross Development Product",
        "Great Domestic Product"
      ],
      answer: "Gross Domestic Product",
      explanation: "GDP stands for Gross Domestic Product."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is an exchange rate?",
      type: "multiple_choice",
      options: [
        "The price of one currency in terms of another",
        "The price of gold",
        "The interest rate",
        "The inflation rate"
      ],
      answer: "The price of one currency in terms of another",
      explanation: "An exchange rate is the price of one currency in terms of another."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is economic growth?",
      type: "multiple_choice",
      options: [
        "A decrease in production",
        "An increase in production",
        "No change in production",
        "A decrease in population"
      ],
      answer: "An increase in production",
      explanation: "Economic growth is an increase in production."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_economics",
    title: "Economics Quiz",
    description: "Test your understanding of economics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is economics?",
        type: "short_answer",
        answer_key: "The study of how people make choices with scarce resources",
        explanation: "Economics is the study of how people make choices with scarce resources."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is scarcity?",
        type: "short_answer",
        answer_key: "Limited resources to meet unlimited wants",
        explanation: "Scarcity means limited resources to meet unlimited wants."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are the factors of production?",
        type: "short_answer",
        answer_key: "Land, labor, capital, entrepreneurship",
        explanation: "The factors of production are land, labor, capital, and entrepreneurship."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is opportunity cost?",
        type: "short_answer",
        answer_key: "The next best alternative forgone",
        explanation: "Opportunity cost is the next best alternative forgone."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a capitalist economy?",
        type: "short_answer",
        answer_key: "An economy with private ownership",
        explanation: "A capitalist economy is based on private ownership."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the law of demand?",
        type: "short_answer",
        answer_key: "As price increases, demand decreases",
        explanation: "The law of demand states that as price increases, demand decreases."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is market equilibrium?",
        type: "short_answer",
        answer_key: "When supply equals demand",
        explanation: "Market equilibrium occurs when supply equals demand."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a monopoly?",
        type: "short_answer",
        answer_key: "A market with one seller",
        explanation: "A monopoly is a market with one seller."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is inflation?",
        type: "short_answer",
        answer_key: "A general increase in prices",
        explanation: "Inflation is a general increase in prices."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What does GDP stand for?",
        type: "short_answer",
        answer_key: "Gross Domestic Product",
        explanation: "GDP stands for Gross Domestic Product."
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
        "Understand economics and the problem of scarcity",
        "Explain factors of production",
        "Describe supply and demand",
        "Understand market structures and the Nigerian economy"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is economics?" },
        { time: "5-10 min", activity: "Direct Instruction - Scarcity and Choice" },
        { time: "10-15 min", activity: "Direct Instruction - Factors of Production" },
        { time: "15-20 min", activity: "Direct Instruction - Economic Systems" },
        { time: "20-25 min", activity: "Direct Instruction - Supply and Demand" },
        { time: "25-30 min", activity: "Direct Instruction - Market Equilibrium" },
        { time: "30-35 min", activity: "Direct Instruction - Market Structures" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of how people make choices with scarce resources",
        prac_002: "Limited resources to meet unlimited wants",
        prac_003: "Land, labor, capital, entrepreneurship",
        prac_004: "The next best alternative forgone",
        prac_005: "An economy with private ownership",
        prac_006: "As price increases, demand decreases",
        prac_007: "When supply equals demand",
        prac_008: "A market with one seller",
        prac_009: "All of the above",
        prac_010: "An increase in prices",
        prac_011: "People without jobs",
        prac_012: "To regulate and provide services",
        prac_013: "Gross Domestic Product",
        prac_014: "The price of one currency in terms of another",
        prac_015: "An increase in production"
      },
      assessment: {
        ass_001: "The study of how people make choices with scarce resources",
        ass_002: "Limited resources to meet unlimited wants",
        ass_003: "Land, labor, capital, entrepreneurship",
        ass_004: "The next best alternative forgone",
        ass_005: "An economy with private ownership",
        ass_006: "As price increases, demand decreases",
        ass_007: "When supply equals demand",
        ass_008: "A market with one seller",
        ass_009: "A general increase in prices",
        ass_010: "Gross Domestic Product"
      }
    },
    extensionActivities: [
      "Research the Nigerian economy",
      "Study supply and demand in a market",
      "Analyze inflation rates",
      "Research economic growth"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research economic theories",
        "Study macroeconomics",
        "Analyze economic data",
        "Research Nigerian economic policy"
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
      title: "Factors of Production",
      description: "Diagram showing factors of production",
      url: "/diagrams/factors-of-production.png",
      alt: "Factors of production diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Supply and Demand",
      description: "Diagram showing supply and demand curves",
      url: "/diagrams/supply-demand.png",
      alt: "Supply and demand diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Market Structures",
      description: "Diagram showing market structures",
      url: "/diagrams/market-structures.png",
      alt: "Market structures diagram"
    }
  ]
};