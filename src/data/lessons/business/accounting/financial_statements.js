// Location: src/data/lessons/business/accounting/financial_statements.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_financial_statements",
  subject: "Accounting",
  topic: "Financial Statements",
  name: "Financial Statements",
  icon: "📊",
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
    "Understanding of bookkeeping basics",
    "Knowledge of the accounting equation",
    "Understanding of ledgers and trial balance",
    "Basic financial literacy"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Depreciation",
      file: "business/accounting/depreciation.js"
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
      description: "Define financial statements and explain their importance",
      indicator: "Student can explain what financial statements are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main types of financial statements",
      indicator: "Student can name the balance sheet, income statement, and cash flow statement"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the purpose of the balance sheet",
      indicator: "Student can describe what a balance sheet shows"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the purpose of the income statement",
      indicator: "Student can describe what an income statement shows"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the purpose of the cash flow statement",
      indicator: "Student can describe what a cash flow statement shows"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Prepare a simple balance sheet",
      indicator: "Student can create a balance sheet from financial data"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Prepare a simple income statement",
      indicator: "Student can create an income statement from financial data"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the relationship between financial statements",
      indicator: "Student can describe how the statements connect"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the users of financial statements",
      indicator: "Student can identify who uses financial statements"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze financial statements",
      indicator: "Student can interpret financial statement data"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of retained earnings",
      indicator: "Student can describe retained earnings and its calculation"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of notes to financial statements",
      indicator: "Student can explain why notes are important"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of financial statement analysis",
      indicator: "Student can discuss the importance of analyzing financial statements"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the role of auditors in financial reporting",
      indicator: "Student can explain the role of auditors"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the limitations of financial statements",
      indicator: "Student can discuss the limitations of financial statements"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of financial statements in decision-making",
      indicator: "Student can discuss how financial statements support decisions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Financial Statements - Reporting Financial Performance",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about financial statements, balance sheets, income statements, and cash flow statements."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Financial Statements</h2>
      <p><strong>Financial statements</strong> are formal records of the financial activities and position of a business. They provide essential information for decision-making by owners, investors, creditors, and other stakeholders. Financial statements are the final product of the accounting process.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📊 Key Concepts</h3>
          <ul>
            <li>✓ Balance Sheet</li>
            <li>✓ Income Statement</li>
            <li>✓ Cash Flow Statement</li>
            <li>✓ Statement of Changes in Equity</li>
            <li>✓ Notes to Financial Statements</li>
            <li>✓ Financial Analysis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Financial statements are required by law</li>
            <li>• They provide a snapshot of the business</li>
            <li>• Investors rely on financial statements</li>
            <li>• Auditors verify financial statements</li>
            <li>• They help with decision-making</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Financial Statements Matter</h4>
        <p>Financial statements provide essential information for decision-making, transparency, and accountability in business.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Financial Statements?",
        objective: "obj_001",
        text: `
          <h3>Understanding Financial Statements</h3>
          <p><strong>Financial statements</strong> are formal records that show the financial position and performance of a business.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Statements</h4>
              <ul>
                <li>• <strong>Balance Sheet:</strong> Financial position</li>
                <li>• <strong>Income Statement:</strong> Profit or loss</li>
                <li>• <strong>Cash Flow Statement:</strong> Cash movements</li>
                <li>• <strong>Statement of Changes in Equity:</strong> Owner's equity</li>
                <li>• <strong>Notes:</strong> Additional information</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Decision-making</li>
                <li>• Transparency</li>
                <li>• Accountability</li>
                <li>• Legal compliance</li>
                <li>• Investor confidence</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Balance Sheet",
        objective: "obj_003",
        text: `
          <h3>The Balance Sheet</h3>
          <p>The <strong>balance sheet</strong> shows the financial position of a business at a specific point in time.</p>
          
          <div class="example-box">
            <strong>📌 Balance Sheet Format:</strong>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2">Assets</th>
                  <th class="border p-2">Amount (₦)</th>
                  <th class="border p-2">Liabilities & Equity</th>
                  <th class="border p-2">Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">Cash</td>
                  <td class="border p-2">10,000</td>
                  <td class="border p-2">Accounts Payable</td>
                  <td class="border p-2">8,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Accounts Receivable</td>
                  <td class="border p-2">5,000</td>
                  <td class="border p-2">Loan Payable</td>
                  <td class="border p-2">12,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Inventory</td>
                  <td class="border p-2">8,000</td>
                  <td class="border p-2">Capital</td>
                  <td class="border p-2">20,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Equipment</td>
                  <td class="border p-2">20,000</td>
                  <td class="border p-2">Retained Earnings</td>
                  <td class="border p-2">3,000</td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border p-2"><strong>Total Assets</strong></td>
                  <td class="border p-2"><strong>43,000</strong></td>
                  <td class="border p-2"><strong>Total Liabilities & Equity</strong></td>
                  <td class="border p-2"><strong>43,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Components</h4>
              <ul>
                <li>• <strong>Assets:</strong> What the business owns</li>
                <li>• <strong>Liabilities:</strong> What the business owes</li>
                <li>• <strong>Equity:</strong> Owner's claim</li>
                <li>• Assets = Liabilities + Equity</li>
                <li>• It must always balance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Shows financial position</li>
                <li>• Used by investors</li>
                <li>• Used by creditors</li>
                <li>• Helps with planning</li>
                <li>• Shows liquidity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Income Statement",
        objective: "obj_004",
        text: `
          <h3>The Income Statement</h3>
          <p>The <strong>income statement</strong> shows the financial performance of a business over a period of time.</p>
          
          <div class="example-box">
            <strong>📌 Income Statement Format:</strong>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2">Item</th>
                  <th class="border p-2">Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">Sales Revenue</td>
                  <td class="border p-2">50,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Less: Cost of Goods Sold</td>
                  <td class="border p-2">(30,000)</td>
                </tr>
                <tr>
                  <td class="border p-2"><strong>Gross Profit</strong></td>
                  <td class="border p-2"><strong>20,000</strong></td>
                </tr>
                <tr>
                  <td class="border p-2">Less: Expenses</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2">Rent</td>
                  <td class="border p-2">(5,000)</td>
                </tr>
                <tr>
                  <td class="border p-2">Salaries</td>
                  <td class="border p-2">(8,000)</td>
                </tr>
                <tr>
                  <td class="border p-2">Utilities</td>
                  <td class="border p-2">(2,000)</td>
                </tr>
                <tr>
                  <td class="border p-2"><strong>Total Expenses</strong></td>
                  <td class="border p-2"><strong>(15,000)</strong></td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border p-2"><strong>Net Profit</strong></td>
                  <td class="border p-2"><strong>5,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Components</h4>
              <ul>
                <li>• <strong>Revenue:</strong> Income from sales</li>
                <li>• <strong>Cost of Goods Sold:</strong> Direct costs</li>
                <li>• <strong>Gross Profit:</strong> Revenue - COGS</li>
                <li>• <strong>Expenses:</strong> Operating costs</li>
                <li>• <strong>Net Profit:</strong> Revenue - all expenses</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Shows profitability</li>
                <li>• Used by investors</li>
                <li>• Used by managers</li>
                <li>• Helps with planning</li>
                <li>• Shows performance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Cash Flow Statement",
        objective: "obj_005",
        text: `
          <h3>The Cash Flow Statement</h3>
          <p>The <strong>cash flow statement</strong> shows the movement of cash in and out of a business.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Sections</h4>
              <ul>
                <li>• <strong>Operating Activities:</strong> Daily operations</li>
                <li>• <strong>Investing Activities:</strong> Buying/selling assets</li>
                <li>• <strong>Financing Activities:</strong> Loans, equity</li>
                <li>• Net increase/decrease in cash</li>
                <li>• Opening and closing balances</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Shows cash position</li>
                <li>• Used for planning</li>
                <li>• Shows liquidity</li>
                <li>• Helps manage cash</li>
                <li>• Used by creditors</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Users of Financial Statements",
        objective: "obj_009",
        text: `
          <h3>Users of Financial Statements</h3>
          <p>Various people use financial statements for different purposes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Internal Users</h4>
              <ul>
                <li>• <strong>Managers:</strong> Decision-making</li>
                <li>• <strong>Employees:</strong> Job security</li>
                <li>• <strong>Owners:</strong> Performance</li>
                <li>• <strong>Board of directors:</strong> Oversight</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 External Users</h4>
              <ul>
                <li>• <strong>Investors:</strong> Investment decisions</li>
                <li>• <strong>Creditors:</strong> Lending decisions</li>
                <li>• <strong>Tax authorities:</strong> Tax collection</li>
                <li>• <strong>Regulators:</strong> Compliance</li>
                <li>• <strong>Customers:</strong> Reliability</li>
                <li>• <strong>Competitors:</strong> Benchmarking</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Financial Statement Analysis",
        objective: "obj_010",
        text: `
          <h3>Financial Statement Analysis</h3>
          <p>Analyzing financial statements helps understand business performance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Analysis</h4>
              <ul>
                <li>• <strong>Horizontal Analysis:</strong> Trends over time</li>
                <li>• <strong>Vertical Analysis:</strong> Proportions</li>
                <li>• <strong>Ratio Analysis:</strong> Financial ratios</li>
                <li>• <strong>Liquidity ratios:</strong> Can pay debts</li>
                <li>• <strong>Profitability ratios:</strong> Earning profit</li>
                <li>• <strong>Efficiency ratios:</strong> Using resources</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Ratios</h4>
              <ul>
                <li>• <strong>Current ratio:</strong> Current assets/Current liabilities</li>
                <li>• <strong>Gross profit margin:</strong> Gross profit/Sales</li>
                <li>• <strong>Net profit margin:</strong> Net profit/Sales</li>
                <li>• <strong>Return on equity:</strong> Net profit/Equity</li>
                <li>• <strong>Debt-to-equity:</strong> Debt/Equity</li>
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
          <h4>📊 Financial Statements</h4>
          <ul>
            <li>• Balance sheet: financial position</li>
            <li>• Income statement: profitability</li>
            <li>• Cash flow statement: cash movement</li>
            <li>• Used by many stakeholders</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Financial statements are linked</li>
            <li>• Analysis helps decision-making</li>
            <li>• Auditors verify accuracy</li>
            <li>• Essential for transparency</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Financial statements are the language of business. They communicate financial performance and position.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Financial statements are only for tax purposes",
        correction: "Financial statements serve many purposes",
        explanation: "They are used for decision-making, investment, and management."
      },
      {
        id: "mis_002",
        misconception: "The balance sheet and income statement are the same",
        correction: "They serve different purposes",
        explanation: "The balance sheet shows position; the income statement shows performance."
      },
      {
        id: "mis_003",
        misconception: "Only large businesses need financial statements",
        correction: "All businesses need financial statements",
        explanation: "Small businesses also need financial statements for management and compliance."
      },
      {
        id: "mis_004",
        misconception: "Financial statements always show the truth",
        correction: "Financial statements need to be verified",
        explanation: "Auditors verify financial statements for accuracy."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Investment Decisions",
        description: "Financial statements help investors.",
        example: "Deciding whether to invest in a company"
      },
      {
        id: "app_002",
        title: "Management Decisions",
        description: "Financial statements help managers.",
        example: "Planning and controlling operations"
      },
      {
        id: "app_003",
        title: "Credit Decisions",
        description: "Financial statements help creditors.",
        example: "Deciding whether to lend money"
      },
      {
        id: "app_004",
        title: "Regulatory Compliance",
        description: "Financial statements ensure compliance.",
        example: "Meeting legal and tax requirements"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Financial Statements", definition: "Formal records of financial activities and position." },
    { term: "Balance Sheet", definition: "A statement of assets, liabilities, and equity." },
    { term: "Income Statement", definition: "A statement of revenue and expenses." },
    { term: "Cash Flow Statement", definition: "A statement of cash movements." },
    { term: "Assets", definition: "Resources owned by a business." },
    { term: "Liabilities", definition: "Debts owed by a business." },
    { term: "Equity", definition: "The owner's claim on assets." },
    { term: "Revenue", definition: "Income from operations." },
    { term: "Expenses", definition: "Costs incurred in operations." },
    { term: "Gross Profit", definition: "Revenue minus cost of goods sold." },
    { term: "Net Profit", definition: "Revenue minus all expenses." },
    { term: "Liquidity", definition: "The ability to pay short-term debts." },
    { term: "Solvency", definition: "The ability to pay long-term debts." },
    { term: "Audit", definition: "An examination of financial records." },
    { term: "Notes to Financial Statements", definition: "Additional information." },
    { term: "Financial Analysis", definition: "Evaluating financial performance." },
    { term: "Ratio Analysis", definition: "Using ratios to analyze performance." },
    { term: "Profitability", definition: "The ability to earn profit." },
    { term: "Cash Flow", definition: "The movement of cash." },
    { term: "Retained Earnings", definition: "Profits kept in the business." }
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
      question: "What are financial statements?",
      type: "multiple_choice",
      options: [
        "Records of financial activities",
        "A type of journal",
        "A list of transactions",
        "A source document"
      ],
      answer: "Records of financial activities",
      explanation: "Financial statements are formal records of financial activities."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the main types of financial statements?",
      type: "multiple_choice",
      options: [
        "Balance sheet, income statement, cash flow statement",
        "Journal, ledger, trial balance",
        "Assets, liabilities, equity",
        "Revenue, expenses, profit"
      ],
      answer: "Balance sheet, income statement, cash flow statement",
      explanation: "The main types are balance sheet, income statement, and cash flow statement."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does a balance sheet show?",
      type: "multiple_choice",
      options: [
        "Financial position",
        "Profit or loss",
        "Cash movement",
        "Revenue"
      ],
      answer: "Financial position",
      explanation: "A balance sheet shows the financial position of a business."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does an income statement show?",
      type: "multiple_choice",
      options: [
        "Financial position",
        "Profit or loss",
        "Cash movement",
        "Assets"
      ],
      answer: "Profit or loss",
      explanation: "An income statement shows profit or loss."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does a cash flow statement show?",
      type: "multiple_choice",
      options: [
        "Financial position",
        "Profit or loss",
        "Cash movement",
        "Liabilities"
      ],
      answer: "Cash movement",
      explanation: "A cash flow statement shows cash movement."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the accounting equation?",
      type: "multiple_choice",
      options: [
        "Assets = Liabilities + Equity",
        "Revenue = Expenses + Profit",
        "Assets + Liabilities = Equity",
        "Equity = Revenue - Expenses"
      ],
      answer: "Assets = Liabilities + Equity",
      explanation: "The accounting equation is Assets = Liabilities + Equity."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is gross profit?",
      type: "multiple_choice",
      options: [
        "Revenue minus all expenses",
        "Revenue minus cost of goods sold",
        "Revenue minus taxes",
        "Revenue minus expenses"
      ],
      answer: "Revenue minus cost of goods sold",
      explanation: "Gross profit is revenue minus cost of goods sold."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "How are financial statements connected?",
      type: "multiple_choice",
      options: [
        "They are not connected",
        "The income statement feeds into the balance sheet",
        "The balance sheet feeds into the income statement",
        "They are independent"
      ],
      answer: "The income statement feeds into the balance sheet",
      explanation: "The income statement's net profit is added to retained earnings on the balance sheet."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Who uses financial statements?",
      type: "multiple_choice",
      options: [
        "Investors",
        "Creditors",
        "Managers",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Investors, creditors, and managers all use financial statements."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is financial statement analysis?",
      type: "multiple_choice",
      options: [
        "Evaluating financial performance",
        "Recording transactions",
        "Preparing statements",
        "Closing accounts"
      ],
      answer: "Evaluating financial performance",
      explanation: "Financial statement analysis evaluates financial performance."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What are retained earnings?",
      type: "multiple_choice",
      options: [
        "Profits kept in the business",
        "Profits paid to owners",
        "Revenue from sales",
        "Expenses paid"
      ],
      answer: "Profits kept in the business",
      explanation: "Retained earnings are profits kept in the business."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What are notes to financial statements?",
      type: "multiple_choice",
      options: [
        "Additional information",
        "A type of journal",
        "A summary of transactions",
        "A source document"
      ],
      answer: "Additional information",
      explanation: "Notes to financial statements provide additional information."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is financial statement analysis important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps in decision-making",
        "It only helps investors",
        "It only helps managers"
      ],
      answer: "It helps in decision-making",
      explanation: "Financial statement analysis helps in decision-making."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the role of an auditor?",
      type: "multiple_choice",
      options: [
        "To prepare financial statements",
        "To verify financial statements",
        "To record transactions",
        "To make decisions"
      ],
      answer: "To verify financial statements",
      explanation: "Auditors verify the accuracy of financial statements."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a limitation of financial statements?",
      type: "multiple_choice",
      options: [
        "They are too detailed",
        "They may not show all relevant information",
        "They are always accurate",
        "They are too simple"
      ],
      answer: "They may not show all relevant information",
      explanation: "Financial statements may not show all relevant information."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_financial_statements",
    title: "Financial Statements Quiz",
    description: "Test your understanding of financial statements",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are financial statements?",
        type: "short_answer",
        answer_key: "Formal records of financial activities and position",
        explanation: "Financial statements are formal records of financial activities."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the main types of financial statements?",
        type: "short_answer",
        answer_key: "Balance sheet, income statement, cash flow statement",
        explanation: "The main types are balance sheet, income statement, and cash flow statement."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What does a balance sheet show?",
        type: "short_answer",
        answer_key: "Financial position",
        explanation: "A balance sheet shows financial position."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does an income statement show?",
        type: "short_answer",
        answer_key: "Profit or loss",
        explanation: "An income statement shows profit or loss."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does a cash flow statement show?",
        type: "short_answer",
        answer_key: "Cash movement",
        explanation: "A cash flow statement shows cash movement."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the accounting equation?",
        type: "short_answer",
        answer_key: "Assets = Liabilities + Equity",
        explanation: "The accounting equation is Assets = Liabilities + Equity."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is gross profit?",
        type: "short_answer",
        answer_key: "Revenue minus cost of goods sold",
        explanation: "Gross profit is revenue minus cost of goods sold."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "How are financial statements connected?",
        type: "short_answer",
        answer_key: "The income statement feeds into the balance sheet",
        explanation: "The income statement's net profit is added to retained earnings."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Who uses financial statements?",
        type: "short_answer",
        answer_key: "Investors, creditors, managers, and others",
        explanation: "Many stakeholders use financial statements."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is financial statement analysis?",
        type: "short_answer",
        answer_key: "Evaluating financial performance",
        explanation: "Financial statement analysis evaluates financial performance."
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
        "Understand financial statements",
        "Explain the balance sheet and income statement",
        "Describe the cash flow statement",
        "Understand users and analysis"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are financial statements?" },
        { time: "5-10 min", activity: "Direct Instruction - Balance Sheet" },
        { time: "10-15 min", activity: "Direct Instruction - Income Statement" },
        { time: "15-20 min", activity: "Direct Instruction - Cash Flow Statement" },
        { time: "20-25 min", activity: "Direct Instruction - Users" },
        { time: "25-30 min", activity: "Direct Instruction - Analysis" },
        { time: "30-35 min", activity: "Direct Instruction - Connections" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Records of financial activities",
        prac_002: "Balance sheet, income statement, cash flow statement",
        prac_003: "Financial position",
        prac_004: "Profit or loss",
        prac_005: "Cash movement",
        prac_006: "Assets = Liabilities + Equity",
        prac_007: "Revenue minus cost of goods sold",
        prac_008: "The income statement feeds into the balance sheet",
        prac_009: "All of the above",
        prac_010: "Evaluating financial performance",
        prac_011: "Profits kept in the business",
        prac_012: "Additional information",
        prac_013: "It helps in decision-making",
        prac_014: "To verify financial statements",
        prac_015: "They may not show all relevant information"
      },
      assessment: {
        ass_001: "Formal records of financial activities and position",
        ass_002: "Balance sheet, income statement, cash flow statement",
        ass_003: "Financial position",
        ass_004: "Profit or loss",
        ass_005: "Cash movement",
        ass_006: "Assets = Liabilities + Equity",
        ass_007: "Revenue minus cost of goods sold",
        ass_008: "The income statement feeds into the balance sheet",
        ass_009: "Investors, creditors, managers, and others",
        ass_010: "Evaluating financial performance"
      }
    },
    extensionActivities: [
      "Analyze a company's financial statements",
      "Create financial statements from data",
      "Research financial ratios",
      "Study the role of auditors"
    ],
    differentiation: {
      struggling: [
        "Focus on basic statements",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research financial analysis",
        "Study ratio analysis",
        "Analyze real company statements",
        "Research international accounting standards"
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
      title: "Financial Statements Overview",
      description: "Diagram showing financial statements",
      url: "/diagrams/financial-statements-overview.png",
      alt: "Financial statements overview diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Balance Sheet Format",
      description: "Diagram showing balance sheet format",
      url: "/diagrams/balance-sheet-format.png",
      alt: "Balance sheet format diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Income Statement Format",
      description: "Diagram showing income statement format",
      url: "/diagrams/income-statement-format.png",
      alt: "Income statement format diagram"
    }
  ]
};