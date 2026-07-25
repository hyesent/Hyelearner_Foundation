// Location: src/data/lessons/business/finance.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_finance",
  subject: "Finance",
  topic: "Finance",
  name: "Finance",
  icon: "🏦",
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
    "Interest in finance",
    "Basic numeracy skills",
    "Understanding of money"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Marketing",
      file: "business/marketing.js"
    },
    {
      name: "Bookkeeping",
      file: "business/accounting/bookkeeping.js"
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
      description: "Define finance and explain its importance",
      indicator: "Student can explain what finance is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the key areas of finance",
      indicator: "Student can describe personal finance, corporate finance, and public finance"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of financial management",
      indicator: "Student can describe what financial management involves"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the importance of budgeting",
      indicator: "Student can describe how to create and manage a budget"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the concept of saving and investing",
      indicator: "Student can distinguish between saving and investing"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of credit and debt",
      indicator: "Student can describe the use and management of credit"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of banks and financial institutions",
      indicator: "Student can explain how banks and financial institutions work"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of interest rates",
      indicator: "Student can describe how interest rates work"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the importance of financial planning",
      indicator: "Student can explain why financial planning is essential"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concept of risk and return",
      indicator: "Student can describe the relationship between risk and return"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe the concept of diversification",
      indicator: "Student can explain why diversification is important"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of the stock market",
      indicator: "Student can describe how the stock market works"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of inflation and its impact on finance",
      indicator: "Student can describe how inflation affects finances"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the importance of financial literacy",
      indicator: "Student can explain why financial literacy is essential"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the concept of personal financial management",
      indicator: "Student can describe how to manage personal finances"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the Nigerian financial system",
      indicator: "Student can discuss the financial system in Nigeria"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the future of finance",
      indicator: "Student can discuss emerging trends in finance"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Finance - Managing Money",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about finance, budgeting, saving, investing, and financial management."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Finance</h2>
      <p><strong>Finance</strong> is the study and management of money, investments, and financial systems. It is essential for individuals, businesses, and governments. Understanding finance helps us make better decisions about saving, spending, investing, and managing resources.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏦 Key Concepts</h3>
          <ul>
            <li>✓ Budgeting</li>
            <li>✓ Saving and Investing</li>
            <li>✓ Credit and Debt</li>
            <li>✓ Interest Rates</li>
            <li>✓ Financial Planning</li>
            <li>✓ Risk and Return</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The first banks were established in ancient times</li>
            <li>• Saving early can lead to significant wealth</li>
            <li>• Compound interest is powerful</li>
            <li>• Nigeria has a growing financial sector</li>
            <li>• Financial literacy is essential for success</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Finance Matters</h4>
        <p>Finance helps us manage money effectively, achieve financial goals, and build a secure future.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Finance?",
        objective: "obj_001",
        text: `
          <h3>Understanding Finance</h3>
          <p><strong>Finance</strong> is the management of money and investments. It involves activities such as saving, investing, borrowing, lending, and budgeting.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Areas</h4>
              <ul>
                <li>• <strong>Personal Finance:</strong> Managing money</li>
                <li>• <strong>Corporate Finance:</strong> Business finances</li>
                <li>• <strong>Public Finance:</strong> Government finances</li>
                <li>• <strong>Investment:</strong> Growing wealth</li>
                <li>• <strong>Banking:</strong> Financial services</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Financial security</li>
                <li>• Wealth creation</li>
                <li>• Economic growth</li>
                <li>• Better decisions</li>
                <li>• Achieving goals</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Budgeting",
        objective: "obj_004",
        text: `
          <h3>Budgeting</h3>
          <p>A <strong>budget</strong> is a plan for managing income and expenses.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps to Create a Budget</h4>
              <ul>
                <li>1. <strong>Track income:</strong> Know how much you earn</li>
                <li>2. <strong>Track expenses:</strong> Know how much you spend</li>
                <li>3. <strong>Set goals:</strong> Define financial objectives</li>
                <li>4. <strong>Create a plan:</strong> Allocate funds</li>
                <li>5. <strong>Monitor:</strong> Review and adjust</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Control spending</li>
                <li>• Save money</li>
                <li>• Reduce debt</li>
                <li>• Achieve goals</li>
                <li>• Peace of mind</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Saving and Investing",
        objective: "obj_005",
        text: `
          <h3>Saving and Investing</h3>
          <p><strong>Saving</strong> is setting money aside for future use. <strong>Investing</strong> is using money to generate returns.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Saving</h4>
              <ul>
                <li>• <strong>Purpose:</strong> Short-term goals</li>
                <li>• <strong>Safety:</strong> Low risk</li>
                <li>• <strong>Return:</strong> Low returns</li>
                <li>• <strong>Examples:</strong> Savings accounts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Investing</h4>
              <ul>
                <li>• <strong>Purpose:</strong> Long-term growth</li>
                <li>• <strong>Risk:</strong> Higher risk</li>
                <li>• <strong>Return:</strong> Higher returns</li>
                <li>• <strong>Examples:</strong> Stocks, bonds, real estate</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Credit and Debt",
        objective: "obj_006",
        text: `
          <h3>Credit and Debt</h3>
          <p><strong>Credit</strong> is the ability to borrow money. <strong>Debt</strong> is the amount owed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Credit</h4>
              <ul>
                <li>• <strong>Credit cards:</strong> Short-term borrowing</li>
                <li>• <strong>Loans:</strong> Personal, business, mortgages</li>
                <li>• <strong>Overdrafts:</strong> Bank account</li>
                <li>• <strong>Lines of credit:</strong> Flexible borrowing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Managing Debt</h4>
              <ul>
                <li>• <strong>Pay on time:</strong> Avoid late fees</li>
                <li>• <strong>Pay more than minimum:</strong> Reduce interest</li>
                <li>• <strong>Avoid unnecessary debt:</strong> Borrow only what you need</li>
                <li>• <strong>Monitor credit:</strong> Check regularly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Banks and Financial Institutions",
        objective: "obj_007",
        text: `
          <h3>Banks and Financial Institutions</h3>
          <p>Financial institutions provide essential financial services.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Institutions</h4>
              <ul>
                <li>• <strong>Commercial banks:</strong> Savings, loans</li>
                <li>• <strong>Central bank:</strong> Regulates the economy</li>
                <li>• <strong>Investment banks:</strong> Capital markets</li>
                <li>• <strong>Insurance companies:</strong> Risk protection</li>
                <li>• <strong>Credit unions:</strong> Member-owned</li>
                <li>• <strong>Microfinance:</strong> Small loans</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Services</h4>
              <ul>
                <li>• <strong>Deposits:</strong> Saving money</li>
                <li>• <strong>Loans:</strong> Borrowing money</li>
                <li>• <strong>Transfers:</strong> Moving money</li>
                <li>• <strong>Investments:</strong> Growing money</li>
                <li>• <strong>Insurance:</strong> Protecting against loss</li>
                <li>• <strong>Advice:</strong> Financial guidance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Interest Rates",
        objective: "obj_008",
        text: `
          <h3>Interest Rates</h3>
          <p><strong>Interest</strong> is the cost of borrowing money or the return on savings.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Interest</h4>
              <ul>
                <li>• <strong>Simple interest:</strong> Interest on principal only</li>
                <li>• <strong>Compound interest:</strong> Interest on interest</li>
                <li>• <strong>Fixed rate:</strong> Interest stays the same</li>
                <li>• <strong>Variable rate:</strong> Interest changes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Factors Affecting Rates</h4>
              <ul>
                <li>• <strong>Central bank policy:</strong> Monetary policy</li>
                <li>• <strong>Inflation:</strong> Rising prices</li>
                <li>• <strong>Economic conditions:</strong> Growth, recession</li>
                <li>• <strong>Risk:</strong> Creditworthiness</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Financial Planning",
        objective: "obj_009",
        text: `
          <h3>Financial Planning</h3>
          <p><strong>Financial planning</strong> is the process of setting and achieving financial goals.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps</h4>
              <ul>
                <li>1. <strong>Assess situation:</strong> Current finances</li>
                <li>2. <strong>Set goals:</strong> Short-term and long-term</li>
                <li>3. <strong>Create plan:</strong> Strategy to achieve goals</li>
                <li>4. <strong>Implement:</strong> Put the plan into action</li>
                <li>5. <strong>Monitor:</strong> Review and adjust</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Achieve goals</li>
                <li>• Financial security</li>
                <li>• Peace of mind</li>
                <li>• Better decisions</li>
                <li>• Long-term success</li>
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
          <h4>🏦 Finance</h4>
          <ul>
            <li>• Management of money</li>
            <li>• Budgeting: planning income and expenses</li>
            <li>• Saving: setting money aside</li>
            <li>• Investing: growing wealth</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Credit and debt management</li>
            <li>• Interest rates</li>
            <li>• Financial planning</li>
            <li>• Banks and financial institutions</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Financial literacy is essential for making informed decisions and achieving financial success.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Finance is only about money",
        correction: "Finance is about managing money effectively",
        explanation: "Finance involves making informed decisions about money."
      },
      {
        id: "mis_002",
        misconception: "Saving and investing are the same",
        correction: "Saving is for short-term; investing is for long-term",
        explanation: "Saving is low-risk; investing involves higher risk for higher returns."
      },
      {
        id: "mis_003",
        misconception: "Debt is always bad",
        correction: "Some debt is good (e.g., education, business)",
        explanation: "Good debt can create value and build wealth."
      },
      {
        id: "mis_004",
        misconception: "Only rich people need financial planning",
        correction: "Financial planning is for everyone",
        explanation: "Everyone can benefit from financial planning."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Finance",
        description: "Managing personal money.",
        example: "Budgeting, saving, investing"
      },
      {
        id: "app_002",
        title: "Business Finance",
        description: "Managing business finances.",
        example: "Business loans, investments"
      },
      {
        id: "app_003",
        title: "Banking",
        description: "Using banks for financial services.",
        example: "Savings accounts, loans, transfers"
      },
      {
        id: "app_004",
        title: "Financial Planning",
        description: "Planning for financial goals.",
        example: "Retirement planning, education planning"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Finance", definition: "The management of money and investments." },
    { term: "Budget", definition: "A plan for managing income and expenses." },
    { term: "Saving", definition: "Setting money aside for future use." },
    { term: "Investing", definition: "Using money to generate returns." },
    { term: "Credit", definition: "The ability to borrow money." },
    { term: "Debt", definition: "Money owed to others." },
    { term: "Interest", definition: "The cost of borrowing money." },
    { term: "Bank", definition: "A financial institution." },
    { term: "Financial Planning", definition: "Planning for financial goals." },
    { term: "Compound Interest", definition: "Interest on interest." },
    { term: "Risk", definition: "The chance of loss." },
    { term: "Return", definition: "The gain from an investment." },
    { term: "Diversification", definition: "Spreading investments." },
    { term: "Inflation", definition: "A general increase in prices." },
    { term: "Financial Literacy", definition: "Understanding of financial concepts." },
    { term: "Mortgage", definition: "A loan for property." },
    { term: "Stock", definition: "Ownership in a company." },
    { term: "Bond", definition: "A loan to a company or government." },
    { term: "Credit Score", definition: "A measure of creditworthiness." },
    { term: "Wealth", definition: "Accumulated assets." }
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
      question: "What is finance?",
      type: "multiple_choice",
      options: [
        "The study of history",
        "The management of money and investments",
        "The study of science",
        "The study of geography"
      ],
      answer: "The management of money and investments",
      explanation: "Finance is the management of money and investments."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is personal finance?",
      type: "multiple_choice",
      options: [
        "Managing government money",
        "Managing personal money",
        "Managing business money",
        "Managing bank money"
      ],
      answer: "Managing personal money",
      explanation: "Personal finance is managing personal money."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is financial management?",
      type: "multiple_choice",
      options: [
        "Ignoring money",
        "Managing financial resources effectively",
        "Spending all money",
        "Avoiding money"
      ],
      answer: "Managing financial resources effectively",
      explanation: "Financial management is managing financial resources effectively."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in creating a budget?",
      type: "multiple_choice",
      options: [
        "Set goals",
        "Track income",
        "Track expenses",
        "Create a plan"
      ],
      answer: "Track income",
      explanation: "The first step is to track income."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the difference between saving and investing?",
      type: "multiple_choice",
      options: [
        "Saving is for long-term; investing is for short-term",
        "Saving is low-risk; investing is higher risk",
        "They are the same",
        "Investing is safer"
      ],
      answer: "Saving is low-risk; investing is higher risk",
      explanation: "Saving is low-risk; investing involves higher risk for higher returns."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is credit?",
      type: "multiple_choice",
      options: [
        "Money owed",
        "The ability to borrow money",
        "A type of investment",
        "A type of saving"
      ],
      answer: "The ability to borrow money",
      explanation: "Credit is the ability to borrow money."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the role of a bank?",
      type: "multiple_choice",
      options: [
        "To provide financial services",
        "To make laws",
        "To educate people",
        "To run the government"
      ],
      answer: "To provide financial services",
      explanation: "Banks provide financial services."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is compound interest?",
      type: "multiple_choice",
      options: [
        "Interest on the principal only",
        "Interest on interest",
        "A fixed interest rate",
        "A variable interest rate"
      ],
      answer: "Interest on interest",
      explanation: "Compound interest is interest on interest."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is financial planning?",
      type: "multiple_choice",
      options: [
        "Planning for financial goals",
        "Spending all money",
        "Ignoring finances",
        "Only saving money"
      ],
      answer: "Planning for financial goals",
      explanation: "Financial planning is planning for financial goals."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the relationship between risk and return?",
      type: "multiple_choice",
      options: [
        "Higher risk means lower return",
        "Higher risk means higher return",
        "Risk and return are not related",
        "Lower risk means higher return"
      ],
      answer: "Higher risk means higher return",
      explanation: "Higher risk generally means higher potential return."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is diversification?",
      type: "multiple_choice",
      options: [
        "Investing in one thing",
        "Spreading investments to reduce risk",
        "Avoiding investments",
        "Only investing in stocks"
      ],
      answer: "Spreading investments to reduce risk",
      explanation: "Diversification spreads investments to reduce risk."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the stock market?",
      type: "multiple_choice",
      options: [
        "A market for buying and selling stocks",
        "A market for selling goods",
        "A type of bank",
        "A government agency"
      ],
      answer: "A market for buying and selling stocks",
      explanation: "The stock market is where stocks are bought and sold."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is inflation?",
      type: "multiple_choice",
      options: [
        "A decrease in prices",
        "An increase in prices",
        "No change in prices",
        "A decrease in money supply"
      ],
      answer: "An increase in prices",
      explanation: "Inflation is a general increase in prices."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is financial literacy important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps make informed decisions",
        "It only helps rich people",
        "It only helps businesses"
      ],
      answer: "It helps make informed decisions",
      explanation: "Financial literacy helps people make informed decisions."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is personal financial management?",
      type: "multiple_choice",
      options: [
        "Managing personal finances",
        "Ignoring finances",
        "Only saving money",
        "Only spending money"
      ],
      answer: "Managing personal finances",
      explanation: "Personal financial management is managing personal finances."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_finance",
    title: "Finance Quiz",
    description: "Test your understanding of finance",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is finance?",
        type: "short_answer",
        answer_key: "The management of money and investments",
        explanation: "Finance is the management of money and investments."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is personal finance?",
        type: "short_answer",
        answer_key: "Managing personal money",
        explanation: "Personal finance is managing personal money."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is financial management?",
        type: "short_answer",
        answer_key: "Managing financial resources effectively",
        explanation: "Financial management is managing financial resources effectively."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in creating a budget?",
        type: "short_answer",
        answer_key: "Track income",
        explanation: "The first step is to track income."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between saving and investing?",
        type: "short_answer",
        answer_key: "Saving is low-risk; investing is higher risk",
        explanation: "Saving is low-risk; investing involves higher risk."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is credit?",
        type: "short_answer",
        answer_key: "The ability to borrow money",
        explanation: "Credit is the ability to borrow money."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the role of a bank?",
        type: "short_answer",
        answer_key: "To provide financial services",
        explanation: "Banks provide financial services."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is compound interest?",
        type: "short_answer",
        answer_key: "Interest on interest",
        explanation: "Compound interest is interest on interest."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is financial planning?",
        type: "short_answer",
        answer_key: "Planning for financial goals",
        explanation: "Financial planning is planning for financial goals."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the relationship between risk and return?",
        type: "short_answer",
        answer_key: "Higher risk means higher return",
        explanation: "Higher risk generally means higher potential return."
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
        "Understand finance and its areas",
        "Explain budgeting and saving",
        "Describe credit and banking",
        "Understand financial planning"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is finance?" },
        { time: "5-10 min", activity: "Direct Instruction - Areas of Finance" },
        { time: "10-15 min", activity: "Direct Instruction - Budgeting" },
        { time: "15-20 min", activity: "Direct Instruction - Saving and Investing" },
        { time: "20-25 min", activity: "Direct Instruction - Credit and Debt" },
        { time: "25-30 min", activity: "Direct Instruction - Banks and Interest" },
        { time: "30-35 min", activity: "Direct Instruction - Financial Planning" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The management of money and investments",
        prac_002: "Managing personal money",
        prac_003: "Managing financial resources effectively",
        prac_004: "Track income",
        prac_005: "Saving is low-risk; investing is higher risk",
        prac_006: "The ability to borrow money",
        prac_007: "To provide financial services",
        prac_008: "Interest on interest",
        prac_009: "Planning for financial goals",
        prac_010: "Higher risk means higher return",
        prac_011: "Spreading investments to reduce risk",
        prac_012: "A market for buying and selling stocks",
        prac_013: "An increase in prices",
        prac_014: "It helps make informed decisions",
        prac_015: "Managing personal finances"
      },
      assessment: {
        ass_001: "The management of money and investments",
        ass_002: "Managing personal money",
        ass_003: "Managing financial resources effectively",
        ass_004: "Track income",
        ass_005: "Saving is low-risk; investing is higher risk",
        ass_006: "The ability to borrow money",
        ass_007: "To provide financial services",
        ass_008: "Interest on interest",
        ass_009: "Planning for financial goals",
        ass_010: "Higher risk means higher return"
      }
    },
    extensionActivities: [
      "Create a personal budget",
      "Research investment options",
      "Study the Nigerian banking system",
      "Learn about compound interest"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research financial markets",
        "Study investment strategies",
        "Analyze financial products",
        "Research financial regulation"
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
      title: "Areas of Finance",
      description: "Diagram showing areas of finance",
      url: "/diagrams/areas-of-finance.png",
      alt: "Areas of finance diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Budgeting Process",
      description: "Diagram showing the budgeting process",
      url: "/diagrams/budgeting-process.png",
      alt: "Budgeting process diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Saving vs Investing",
      description: "Diagram comparing saving and investing",
      url: "/diagrams/saving-vs-investing.png",
      alt: "Saving vs investing diagram"
    }
  ]
};