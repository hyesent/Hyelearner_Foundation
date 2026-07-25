// Location: src/data/lessons/science/agricultural_science/farm_management.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "agri_lesson_farm_management",
  subject: "Agricultural Science",
  topic: "Farm Management",
  name: "Farm Management",
  icon: "🚜",
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
    "Understanding of basic agriculture",
    "Knowledge of crop and animal production",
    "Basic business concepts",
    "Understanding of farm operations"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Agricultural Science lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define farm management and explain its importance",
      indicator: "Student can explain what farm management is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the functions of farm management",
      indicator: "Student can list the key functions of farm management"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the importance of farm planning",
      indicator: "Student can describe why farm planning is essential"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe farm record keeping and accounting",
      indicator: "Student can explain why records are important on a farm"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain farm financial management",
      indicator: "Student can describe budgeting and financial planning"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe marketing of farm produce",
      indicator: "Student can explain how to market agricultural products"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain farm labor management",
      indicator: "Student can describe managing farm workers"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe farm risk management",
      indicator: "Student can explain how to manage farm risks"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain farm mechanization",
      indicator: "Student can describe the use of machinery on farms"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain farm budgeting and financial analysis",
      indicator: "Student can describe how to create farm budgets"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe farm enterprise selection",
      indicator: "Student can explain how to choose farm enterprises"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain farm diversification strategies",
      indicator: "Student can describe how to diversify farm operations"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the challenges of farm management",
      indicator: "Student can describe problems facing farm managers"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain sustainable farm management practices",
      indicator: "Student can describe environmentally friendly farming"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the role of technology in farm management",
      indicator: "Student can describe modern farm technologies"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the economics of farm production",
      indicator: "Student can discuss costs, returns, and profitability"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Farm Management - Running a Successful Farm",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about farm management, planning, record keeping, and farm business operations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Farm Management</h2>
      <p><strong>Farm management</strong> is the art and science of organizing and operating a farm as a business. It involves making decisions about land, labor, capital, and other resources to achieve farm goals and maximize profits while ensuring sustainability.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🚜 Key Concepts</h3>
          <ul>
            <li>✓ Farm Planning</li>
            <li>✓ Record Keeping</li>
            <li>✓ Financial Management</li>
            <li>✓ Marketing</li>
            <li>✓ Labor Management</li>
            <li>✓ Risk Management</li>
            <li>✓ Mechanization</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Good management can double farm profits</li>
            <li>• Record keeping is essential for farm success</li>
            <li>• Marketing is as important as production</li>
            <li>• Farm labor is a major cost</li>
            <li>• Technology is transforming agriculture</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Farm Management Matters</h4>
        <p>Farm management ensures that agricultural resources are used efficiently and sustainably. It helps farmers make informed decisions and adapt to changing conditions.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Functions of Farm Management",
        objective: "obj_002",
        text: `
          <h3>Functions of Farm Management</h3>
          <p>Farm management involves several key functions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Functions</h4>
              <ul>
                <li>• <strong>Planning:</strong> Setting goals and strategies</li>
                <li>• <strong>Organizing:</strong> Arranging resources</li>
                <li>• <strong>Directing:</strong> Leading farm operations</li>
                <li>• <strong>Controlling:</strong> Monitoring performance</li>
                <li>• <strong>Decision making:</strong> Choosing among alternatives</li>
                <li>• <strong>Record keeping:</strong> Tracking farm activities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Maximizes farm profits</li>
                <li>• Ensures efficient resource use</li>
                <li>• Helps achieve farm goals</li>
                <li>• Adapts to changing conditions</li>
                <li>• Builds a sustainable business</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Farm Planning",
        objective: "obj_003",
        text: `
          <h3>Farm Planning</h3>
          <p>Farm planning is essential for a successful farm business.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Plans</h4>
              <ul>
                <li>• <strong>Strategic plan:</strong> Long-term direction</li>
                <li>• <strong>Operational plan:</strong> Day-to-day operations</li>
                <li>• <strong>Financial plan:</strong> Budgeting and finance</li>
                <li>• <strong>Crop plan:</strong> What and when to plant</li>
                <li>• <strong>Marketing plan:</strong> Selling produce</li>
                <li>• <strong>Labor plan:</strong> Staffing needs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Provides direction</li>
                <li>• Reduces uncertainty</li>
                <li>• Improves resource use</li>
                <li>• Increases profits</li>
                <li>• Prepares for challenges</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Farm Records",
        objective: "obj_004",
        text: `
          <h3>Farm Records and Accounting</h3>
          <p>Keeping accurate records is essential for farm management.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Records</h4>
              <ul>
                <li>• <strong>Financial records:</strong> Income, expenses</li>
                <li>• <strong>Production records:</strong> Crop yields, livestock</li>
                <li>• <strong>Inventory records:</strong> Supplies, equipment</li>
                <li>• <strong>Labor records:</strong> Hours, wages</li>
                <li>• <strong>Land records:</strong> Fields, use</li>
                <li>• <strong>Health records:</strong> Animal health</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Tracks farm performance</li>
                <li>• Helps with decision making</li>
                <li>• Provides legal evidence</li>
                <li>• Aids in tax preparation</li>
                <li>• Shows profitability</li>
                <li>• Supports planning</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Farm Finance",
        objective: "obj_005",
        text: `
          <h3>Farm Financial Management</h3>
          <p>Financial management is crucial for farm success.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Financial Concepts</h4>
              <ul>
                <li>• <strong>Income:</strong> Revenue from sales</li>
                <li>• <strong>Expenses:</strong> Costs of production</li>
                <li>• <strong>Profit:</strong> Income - Expenses</li>
                <li>• <strong>Budget:</strong> Financial plan</li>
                <li>• <strong>Investment:</strong> Capital expenditure</li>
                <li>• <strong>Credit:</strong> Borrowed money</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Financial Tools</h4>
              <ul>
                <li>• <strong>Farm budget:</strong> Planning income and expenses</li>
                <li>• <strong>Cash flow analysis:</strong> Tracking money flow</li>
                <li>• <strong>Balance sheet:</strong> Assets and liabilities</li>
                <li>• <strong>Profit and loss statement:</strong> Performance</li>
                <li>• <strong>Break-even analysis:</strong> Covering costs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Farm Marketing",
        objective: "obj_006",
        text: `
          <h3>Marketing Farm Produce</h3>
          <p>Marketing is essential for selling farm products profitably.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Marketing Channels</h4>
              <ul>
                <li>• <strong>Direct sales:</strong> Farm to consumer</li>
                <li>• <strong>Wholesale:</strong> Selling to middlemen</li>
                <li>• <strong>Cooperatives:</strong> Group marketing</li>
                <li>• <strong>Processors:</strong> Selling to factories</li>
                <li>• <strong>Export:</strong> International sales</li>
                <li>• <strong>Online:</strong> Digital marketing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Marketing Strategies</h4>
              <ul>
                <li>• <strong>Market research:</strong> Understanding demand</li>
                <li>• <strong>Pricing:</strong> Setting the right price</li>
                <li>• <strong>Packaging:</strong> Attractive presentation</li>
                <li>• <strong>Branding:</strong> Building reputation</li>
                <li>• <strong>Timing:</strong> Selling at the right time</li>
                <li>• <strong>Quality:</strong> Maintaining standards</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Farm Labor Management",
        objective: "obj_007",
        text: `
          <h3>Farm Labor Management</h3>
          <p>Managing farm labor effectively is essential for productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Labor Management</h4>
              <ul>
                <li>• <strong>Recruitment:</strong> Hiring the right workers</li>
                <li>• <strong>Training:</strong> Developing skills</li>
                <li>• <strong>Supervision:</strong> Guiding workers</li>
                <li>• <strong>Motivation:</strong> Encouraging workers</li>
                <li>• <strong>Safety:</strong> Ensuring workplace safety</li>
                <li>• <strong>Welfare:</strong> Worker well-being</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Labor</h4>
              <ul>
                <li>• <strong>Family labor:</strong> Family members</li>
                <li>• <strong>Hired labor:</strong> Paid workers</li>
                <li>• <strong>Temporary labor:</strong> Seasonal workers</li>
                <li>• <strong>Permanent labor:</strong> Full-time workers</li>
                <li>• <strong>Contract labor:</strong> Outsourced tasks</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Farm Risk Management",
        objective: "obj_008",
        text: `
          <h3>Farm Risk Management</h3>
          <p>Farming involves many risks that must be managed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Risks</h4>
              <ul>
                <li>• <strong>Weather risks:</strong> Drought, floods, storms</li>
                <li>• <strong>Market risks:</strong> Price changes</li>
                <li>• <strong>Production risks:</strong> Crop failure, disease</li>
                <li>• <strong>Financial risks:</strong> Debt, interest rates</li>
                <li>• <strong>Human risks:</strong> Health, labor issues</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Risk Management Strategies</h4>
              <ul>
                <li>• <strong>Diversification:</strong> Multiple enterprises</li>
                <li>• <strong>Insurance:</strong> Crop, livestock insurance</li>
                <li>• <strong>Savings:</strong> Financial buffers</li>
                <li>• <strong>Contracts:</strong> Fixed-price agreements</li>
                <li>• <strong>Hedging:</strong> Price protection</li>
                <li>• <strong>Good practices:</strong> Prevention measures</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Farm Mechanization",
        objective: "obj_009",
        text: `
          <h3>Farm Mechanization</h3>
          <p>Mechanization improves efficiency and reduces labor costs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Machinery</h4>
              <ul>
                <li>• <strong>Tractors:</strong> Power source</li>
                <li>• <strong>Plows:</strong> Land preparation</li>
                <li>• <strong>Harvesters:</strong> Harvesting crops</li>
                <li>• <strong>Irrigation equipment:</strong> Watering</li>
                <li>• <strong>Milking machines:</strong> Dairy</li>
                <li>• <strong>Feed mixers:</strong> Animal feed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Increases efficiency</li>
                <li>• Reduces labor costs</li>
                <li>• Improves timeliness</li>
                <li>• Increases yields</li>
                <li>• Reduces drudgery</li>
                <li>• Enables large-scale farming</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Farm Diversification",
        objective: "obj_012",
        text: `
          <h3>Farm Diversification</h3>
          <p>Diversification reduces risk and increases income.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Diversification Options</h4>
              <ul>
                <li>• <strong>Crop diversification:</strong> Multiple crops</li>
                <li>• <strong>Livestock integration:</strong> Animals and crops</li>
                <li>• <strong>Value addition:</strong> Processing produce</li>
                <li>• <strong>Agro-tourism:</strong> Farm visits</li>
                <li>• <strong>Organic farming:</strong> Niche markets</li>
                <li>• <strong>Aquaculture:</strong> Fish farming</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Reduces risk</li>
                <li>• Increases income</li>
                <li>• Improves resilience</li>
                <li>• Better resource use</li>
                <li>• Market opportunities</li>
                <li>• Sustainability</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Sustainable Farm Management",
        objective: "obj_014",
        text: `
          <h3>Sustainable Farm Management</h3>
          <p>Sustainable practices protect the environment while maintaining productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles</h4>
              <ul>
                <li>• <strong>Soil health:</strong> Conservation practices</li>
                <li>• <strong>Water conservation:</strong> Efficient use</li>
                <li>• <strong>Biodiversity:</strong> Protect ecosystems</li>
                <li>• <strong>Resource efficiency:</strong> Minimize waste</li>
                <li>• <strong>Resilience:</strong> Adapt to change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practices</h4>
              <ul>
                <li>• <strong>Organic farming:</strong> No chemicals</li>
                <li>• <strong>No-till farming:</strong> Reduce soil disturbance</li>
                <li>• <strong>Cover crops:</strong> Protect soil</li>
                <li>• <strong>Agroforestry:</strong> Trees on farms</li>
                <li>• <strong>Integrated farming:</strong> Combined systems</li>
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
          <h4>🚜 Farm Management</h4>
          <ul>
            <li>• Planning is essential for success</li>
            <li>• Record keeping tracks performance</li>
            <li>• Financial management ensures profitability</li>
            <li>• Marketing is as important as production</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Practices</h4>
          <ul>
            <li>• Risk management protects the farm</li>
            <li>• Mechanization improves efficiency</li>
            <li>• Diversification reduces risk</li>
            <li>• Sustainability ensures long-term success</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Good farm management is the key to a successful agricultural business. It combines technical knowledge with business skills.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Farming doesn't need business skills",
        correction: "Farming is a business that needs management skills",
        explanation: "Good management is essential for farm profitability."
      },
      {
        id: "mis_002",
        misconception: "Record keeping is not important",
        correction: "Record keeping is essential for farm success",
        explanation: "Records help track performance and make decisions."
      },
      {
        id: "mis_003",
        misconception: "Marketing is only about selling",
        correction: "Marketing includes research, pricing, and distribution",
        explanation: "Marketing is a comprehensive process, not just selling."
      },
      {
        id: "mis_004",
        misconception: "Technology makes farming worse",
        correction: "Technology improves efficiency and productivity",
        explanation: "Modern technology has revolutionized agriculture."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Farm Business",
        description: "Management skills run a farm business.",
        example: "Planning, budgeting, marketing"
      },
      {
        id: "app_002",
        title: "Agribusiness",
        description: "Management principles apply to agribusiness.",
        example: "Agri-input supply, processing, distribution"
      },
      {
        id: "app_003",
        title: "Agricultural Extension",
        description: "Management knowledge helps farmers.",
        example: "Advisory services, farmer training"
      },
      {
        id: "app_004",
        title: "Policy Making",
        description: "Management data informs policy.",
        example: "Agricultural policy development"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Farm Management", definition: "Organizing and operating a farm as a business." },
    { term: "Farm Planning", definition: "Setting goals and strategies for the farm." },
    { term: "Record Keeping", definition: "Tracking farm activities and performance." },
    { term: "Budget", definition: "A financial plan for the farm." },
    { term: "Cash Flow", definition: "Movement of money in and out of the farm." },
    { term: "Marketing", definition: "Promoting and selling farm products." },
    { term: "Diversification", definition: "Having multiple farm enterprises." },
    { term: "Risk Management", definition: "Strategies to reduce farm risks." },
    { term: "Mechanization", definition: "Using machinery on the farm." },
    { term: "Labor Management", definition: "Managing farm workers." },
    { term: "Profit", definition: "Revenue minus expenses." },
    { term: "Loss", definition: "Expenses exceeding revenue." },
    { term: "Investment", definition: "Money spent on farm assets." },
    { term: "Credit", definition: "Borrowed money for the farm." },
    { term: "Sustainability", definition: "Meeting current needs without compromising future." },
    { term: "Agroforestry", definition: "Integrating trees with crops/livestock." },
    { term: "Value Addition", definition: "Processing produce to increase value." },
    { term: "Break-Even", definition: "Point where costs equal revenue." },
    { term: "Enterprise", definition: "A farm business activity." },
    { term: "Agribusiness", definition: "Agricultural business activities." }
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
      question: "What is farm management?",
      type: "multiple_choice",
      options: [
        "Only farming activities",
        "Organizing and operating a farm as a business",
        "Selling farm produce",
        "Working on a farm"
      ],
      answer: "Organizing and operating a farm as a business",
      explanation: "Farm management is organizing and operating a farm as a business."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a function of farm management?",
      type: "multiple_choice",
      options: ["Planning", "Record keeping", "Decision making", "All of the above"],
      answer: "All of the above",
      explanation: "Planning, record keeping, and decision making are key functions."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Why is farm planning important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It provides direction and improves resource use",
        "It only helps with crops",
        "It is only for large farms"
      ],
      answer: "It provides direction and improves resource use",
      explanation: "Planning provides direction and improves resource use."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the purpose of farm records?",
      type: "multiple_choice",
      options: [
        "To make the farm look good",
        "To track performance and aid decision making",
        "To decorate the farm office",
        "To impress visitors"
      ],
      answer: "To track performance and aid decision making",
      explanation: "Records track performance and aid decision making."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a farm budget?",
      type: "multiple_choice",
      options: [
        "A list of farm animals",
        "A financial plan for the farm",
        "A farm calendar",
        "A list of farm equipment"
      ],
      answer: "A financial plan for the farm",
      explanation: "A budget is a financial plan for the farm."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is farm marketing?",
      type: "multiple_choice",
      options: [
        "Only selling produce",
        "Promoting and selling farm products",
        "Growing crops",
        "Raising animals"
      ],
      answer: "Promoting and selling farm products",
      explanation: "Marketing involves promoting and selling farm products."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is labor management?",
      type: "multiple_choice",
      options: [
        "Managing farm workers",
        "Managing crops",
        "Managing finances",
        "Managing machinery"
      ],
      answer: "Managing farm workers",
      explanation: "Labor management involves managing farm workers."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a type of farm risk?",
      type: "multiple_choice",
      options: ["Weather risk", "Market risk", "Production risk", "All of the above"],
      answer: "All of the above",
      explanation: "Weather, market, and production are all farm risks."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is farm mechanization?",
      type: "multiple_choice",
      options: [
        "Using manual labor",
        "Using machinery on the farm",
        "Using organic methods",
        "Using traditional tools"
      ],
      answer: "Using machinery on the farm",
      explanation: "Mechanization involves using machinery on the farm."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a benefit of farm budgeting?",
      type: "multiple_choice",
      options: [
        "It wastes time",
        "It helps plan income and expenses",
        "It is not useful",
        "It only helps large farms"
      ],
      answer: "It helps plan income and expenses",
      explanation: "Budgeting helps plan income and expenses."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is farm enterprise selection?",
      type: "multiple_choice",
      options: [
        "Choosing which crops to grow",
        "Choosing animals to raise",
        "Choosing the best farm enterprises",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Enterprise selection involves choosing the best farm activities."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is farm diversification?",
      type: "multiple_choice",
      options: [
        "Having multiple farm enterprises",
        "Focusing on one enterprise",
        "Reducing farm activities",
        "Stopping farming"
      ],
      answer: "Having multiple farm enterprises",
      explanation: "Diversification involves having multiple farm enterprises."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is a challenge of farm management?",
      type: "multiple_choice",
      options: [
        "Climate change",
        "Market volatility",
        "Rising costs",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Climate change, market volatility, and rising costs are challenges."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is sustainable farm management?",
      type: "multiple_choice",
      options: [
        "Farming that ignores the environment",
        "Farming that protects the environment",
        "Farming for maximum profit only",
        "Traditional farming only"
      ],
      answer: "Farming that protects the environment",
      explanation: "Sustainable farming protects the environment."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does technology help farm management?",
      type: "multiple_choice",
      options: [
        "It makes farming harder",
        "It improves efficiency and decision making",
        "It has no effect",
        "It only helps large farms"
      ],
      answer: "It improves efficiency and decision making",
      explanation: "Technology improves efficiency and decision making."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_farm_management",
    title: "Farm Management Quiz",
    description: "Test your understanding of farm management",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is farm management?",
        type: "short_answer",
        answer_key: "Organizing and operating a farm as a business",
        explanation: "Farm management is organizing and operating a farm as a business."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one function of farm management.",
        type: "short_answer",
        answer_key: "Planning (or any valid)",
        explanation: "Planning, organizing, and controlling are key functions."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Why is farm planning important?",
        type: "short_answer",
        answer_key: "It provides direction and improves resource use",
        explanation: "Planning provides direction and improves resource use."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the purpose of farm records?",
        type: "short_answer",
        answer_key: "To track performance and aid decision making",
        explanation: "Records track performance and aid decision making."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a farm budget?",
        type: "short_answer",
        answer_key: "A financial plan for the farm",
        explanation: "A budget is a financial plan for the farm."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is farm marketing?",
        type: "short_answer",
        answer_key: "Promoting and selling farm products",
        explanation: "Marketing involves promoting and selling farm products."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a type of farm risk?",
        type: "short_answer",
        answer_key: "Weather risk (or any valid)",
        explanation: "Weather, market, and production are farm risks."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is farm mechanization?",
        type: "short_answer",
        answer_key: "Using machinery on the farm",
        explanation: "Mechanization involves using machinery."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is farm diversification?",
        type: "short_answer",
        answer_key: "Having multiple farm enterprises",
        explanation: "Diversification involves multiple farm enterprises."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is sustainable farm management?",
        type: "short_answer",
        answer_key: "Farming that protects the environment",
        explanation: "Sustainable farming protects the environment."
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
        "Understand farm management and its importance",
        "Explain farm planning and record keeping",
        "Describe financial management and marketing",
        "Understand risk management and sustainability"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is farm management?" },
        { time: "5-10 min", activity: "Direct Instruction - Functions of Farm Management" },
        { time: "10-15 min", activity: "Direct Instruction - Planning and Records" },
        { time: "15-20 min", activity: "Direct Instruction - Financial Management" },
        { time: "20-25 min", activity: "Direct Instruction - Marketing" },
        { time: "25-30 min", activity: "Direct Instruction - Risk and Labor Management" },
        { time: "30-35 min", activity: "Direct Instruction - Mechanization and Diversification" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Organizing and operating a farm as a business",
        prac_002: "All of the above",
        prac_003: "It provides direction and improves resource use",
        prac_004: "To track performance and aid decision making",
        prac_005: "A financial plan for the farm",
        prac_006: "Promoting and selling farm products",
        prac_007: "Managing farm workers",
        prac_008: "All of the above",
        prac_009: "Using machinery on the farm",
        prac_010: "It helps plan income and expenses",
        prac_011: "All of the above",
        prac_012: "Having multiple farm enterprises",
        prac_013: "All of the above",
        prac_014: "Farming that protects the environment",
        prac_015: "It improves efficiency and decision making"
      },
      assessment: {
        ass_001: "Organizing and operating a farm as a business",
        ass_002: "Planning (or any valid)",
        ass_003: "It provides direction and improves resource use",
        ass_004: "To track performance and aid decision making",
        ass_005: "A financial plan for the farm",
        ass_006: "Promoting and selling farm products",
        ass_007: "Weather risk (or any valid)",
        ass_008: "Using machinery on the farm",
        ass_009: "Having multiple farm enterprises",
        ass_010: "Farming that protects the environment"
      }
    },
    extensionActivities: [
      "Create a farm budget",
      "Visit a successful farm",
      "Research farm marketing strategies",
      "Study a farm case study"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research farm business planning",
        "Study agricultural economics",
        "Research farm technology",
        "Study agricultural policy"
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
      title: "Farm Management Cycle",
      description: "Diagram showing the farm management cycle",
      url: "/diagrams/farm-management-cycle.png",
      alt: "Farm management cycle diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Farm Records",
      description: "Chart showing types of farm records",
      url: "/diagrams/farm-records.png",
      alt: "Farm records chart"
    }
  ]
};