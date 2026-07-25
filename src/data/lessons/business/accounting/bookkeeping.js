// Location: src/data/lessons/business/accounting/bookkeeping.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_bookkeeping",
  subject: "Accounting",
  topic: "Bookkeeping",
  name: "Bookkeeping",
  icon: "📒",
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
    "Understanding of basic business concepts",
    "Interest in accounting",
    "Basic numeracy skills",
    "Understanding of money"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Journals",
      file: "business/accounting/journals.js"
    },
    {
      name: "Ledgers",
      file: "business/accounting/ledgers.js"
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
      description: "Define bookkeeping and explain its importance",
      indicator: "Student can explain what bookkeeping is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the basic accounting equation",
      indicator: "Student can state Assets = Liabilities + Equity"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of double-entry bookkeeping",
      indicator: "Student can describe the double-entry system"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the types of accounts",
      indicator: "Student can distinguish between assets, liabilities, equity, revenue, and expenses"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the rules of debit and credit",
      indicator: "Student can apply debit and credit rules"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the accounting cycle",
      indicator: "Student can explain the steps in the accounting cycle"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of a ledger",
      indicator: "Student can describe what a ledger is"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the purpose of a trial balance",
      indicator: "Student can explain what a trial balance does"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of accurate record-keeping",
      indicator: "Student can discuss why accurate records are essential"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between bookkeeping and accounting",
      indicator: "Student can distinguish between bookkeeping and accounting"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the importance of financial statements",
      indicator: "Student can describe the purpose of financial statements"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of technology in bookkeeping",
      indicator: "Student can explain how technology helps bookkeeping"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of depreciation",
      indicator: "Student can describe depreciation and its importance"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the importance of internal controls",
      indicator: "Student can explain why internal controls are needed"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the ethical responsibilities of bookkeepers",
      indicator: "Student can discuss ethical issues in bookkeeping"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the future of bookkeeping",
      indicator: "Student can discuss trends in bookkeeping"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Bookkeeping - Recording Financial Transactions",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about bookkeeping, the accounting equation, and double-entry bookkeeping."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Bookkeeping</h2>
      <p><strong>Bookkeeping</strong> is the process of recording financial transactions in an organized manner. It is the foundation of accounting and essential for tracking business performance. Good bookkeeping helps businesses make informed decisions and comply with legal requirements.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📒 Key Concepts</h3>
          <ul>
            <li>✓ Accounting Equation</li>
            <li>✓ Double-Entry Bookkeeping</li>
            <li>✓ Types of Accounts</li>
            <li>✓ Debit and Credit Rules</li>
            <li>✓ Accounting Cycle</li>
            <li>✓ Financial Records</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Bookkeeping has existed for thousands of years</li>
            <li>• Luca Pacioli is the father of accounting</li>
            <li>• Double-entry bookkeeping was developed in the 15th century</li>
            <li>• Bookkeeping is essential for all businesses</li>
            <li>• Technology has transformed bookkeeping</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Bookkeeping Matters</h4>
        <p>Bookkeeping provides the financial information needed to make business decisions, track performance, and ensure compliance.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Bookkeeping?",
        objective: "obj_001",
        text: `
          <h3>Understanding Bookkeeping</h3>
          <p><strong>Bookkeeping</strong> is the systematic recording of financial transactions. It is the first step in the accounting process.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Activities</h4>
              <ul>
                <li>• <strong>Recording:</strong> Entering transactions</li>
                <li>• <strong>Classifying:</strong> Categorizing transactions</li>
                <li>• <strong>Summarizing:</strong> Organizing data</li>
                <li>• <strong>Reporting:</strong> Preparing financial reports</li>
                <li>• <strong>Analyzing:</strong> Reviewing financial data</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Tracks business performance</li>
                <li>• Supports decision-making</li>
                <li>• Ensures compliance</li>
                <li>• Facilitates planning</li>
                <li>• Provides financial records</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Accounting Equation",
        objective: "obj_002",
        text: `
          <h3>The Accounting Equation</h3>
          <p>The <strong>accounting equation</strong> is the foundation of double-entry bookkeeping.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 The Equation:</h4>
            <p><strong>Assets = Liabilities + Equity</strong></p>
            <ul>
              <li>• <strong>Assets:</strong> What the business owns</li>
              <li>• <strong>Liabilities:</strong> What the business owes</li>
              <li>• <strong>Equity:</strong> The owner's claim</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Assets:</strong> Cash, inventory, equipment</li>
                <li>• <strong>Liabilities:</strong> Loans, accounts payable</li>
                <li>• <strong>Equity:</strong> Owner's capital, retained earnings</li>
                <li>• The equation must always balance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• Business has ₦100,000 assets</li>
                <li>• Business owes ₦30,000 (liabilities)</li>
                <li>• Equity = ₦100,000 - ₦30,000 = ₦70,000</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Double-Entry Bookkeeping",
        objective: "obj_003",
        text: `
          <h3>Double-Entry Bookkeeping</h3>
          <p><strong>Double-entry bookkeeping</strong> is a system where every transaction affects at least two accounts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• Every transaction has two sides</li>
                <li>• Debits must equal credits</li>
                <li>• Maintains the accounting equation</li>
                <li>• Provides a complete record</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Transaction:</strong> Business buys equipment for ₦50,000 cash</li>
                <li>• <strong>Debit:</strong> Equipment (Asset increases)</li>
                <li>• <strong>Credit:</strong> Cash (Asset decreases)</li>
                <li>• Both sides are equal</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Types of Accounts",
        objective: "obj_004",
        text: `
          <h3>Types of Accounts</h3>
          <p>Accounts are classified into five main categories.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Account Categories</h4>
              <ul>
                <li>• <strong>Assets:</strong> Resources owned</li>
                <li>• <strong>Liabilities:</strong> Obligations owed</li>
                <li>• <strong>Equity:</strong> Owner's claim</li>
                <li>• <strong>Revenue:</strong> Income earned</li>
                <li>• <strong>Expenses:</strong> Costs incurred</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Assets:</strong> Cash, Accounts Receivable, Inventory</li>
                <li>• <strong>Liabilities:</strong> Accounts Payable, Loans</li>
                <li>• <strong>Equity:</strong> Capital, Retained Earnings</li>
                <li>• <strong>Revenue:</strong> Sales, Service Revenue</li>
                <li>• <strong>Expenses:</strong> Rent, Salaries, Utilities</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Debit and Credit Rules",
        objective: "obj_005",
        text: `
          <h3>Debit and Credit Rules</h3>
          <p>Each account type has specific debit and credit rules.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Account Type</th>
                <th class="border p-2">Debit</th>
                <th class="border p-2">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Assets</td>
                <td class="border p-2">Increase</td>
                <td class="border p-2">Decrease</td>
              </tr>
              <tr>
                <td class="border p-2">Liabilities</td>
                <td class="border p-2">Decrease</td>
                <td class="border p-2">Increase</td>
              </tr>
              <tr>
                <td class="border p-2">Equity</td>
                <td class="border p-2">Decrease</td>
                <td class="border p-2">Increase</td>
              </tr>
              <tr>
                <td class="border p-2">Revenue</td>
                <td class="border p-2">Decrease</td>
                <td class="border p-2">Increase</td>
              </tr>
              <tr>
                <td class="border p-2">Expenses</td>
                <td class="border p-2">Increase</td>
                <td class="border p-2">Decrease</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_006",
        title: "The Accounting Cycle",
        objective: "obj_006",
        text: `
          <h3>The Accounting Cycle</h3>
          <p>The <strong>accounting cycle</strong> is the process of recording and processing financial transactions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps</h4>
              <ul>
                <li>1. <strong>Identify transactions:</strong> Analyze business events</li>
                <li>2. <strong>Record transactions:</strong> Enter in journals</li>
                <li>3. <strong>Post to ledgers:</strong> Transfer to accounts</li>
                <li>4. <strong>Prepare trial balance:</strong> Check balances</li>
                <li>5. <strong>Adjust entries:</strong> Update accounts</li>
                <li>6. <strong>Prepare financial statements:</strong> Report results</li>
                <li>7. <strong>Close accounts:</strong> Reset temporary accounts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Frequency</h4>
              <ul>
                <li>• Daily: Recording transactions</li>
                <li>• Monthly: Posting and adjusting</li>
                <li>• Quarterly: Reporting</li>
                <li>• Annually: Closing and financial statements</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Bookkeeping vs Accounting",
        objective: "obj_010",
        text: `
          <h3>Bookkeeping vs Accounting</h3>
          <p>Bookkeeping and accounting are related but different.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Bookkeeping</h4>
              <ul>
                <li>• Recording transactions</li>
                <li>• Routine tasks</li>
                <li>• Daily entries</li>
                <li>• Focus on accuracy</li>
                <li>• Foundation of accounting</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Accounting</h4>
              <ul>
                <li>• Analyzing transactions</li>
                <li>• Interpreting data</li>
                <li>• Preparing reports</li>
                <li>• Decision-making</li>
                <li>• Higher-level functions</li>
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
          <h4>📒 Bookkeeping</h4>
          <ul>
            <li>• Recording financial transactions</li>
            <li>• Accounting equation: Assets = Liabilities + Equity</li>
            <li>• Double-entry system</li>
            <li>• Types of accounts: assets, liabilities, equity, revenue, expenses</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Debit and credit rules</li>
            <li>• Accounting cycle</li>
            <li>• Bookkeeping vs accounting</li>
            <li>• Importance of accurate records</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Bookkeeping is the foundation of accounting. Accurate records are essential for business success.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Bookkeeping and accounting are the same",
        correction: "Bookkeeping is recording; accounting is analyzing and reporting",
        explanation: "Bookkeeping is the first step; accounting includes higher-level functions."
      },
      {
        id: "mis_002",
        misconception: "Only large businesses need bookkeeping",
        correction: "All businesses need bookkeeping",
        explanation: "Every business needs to track its financial transactions."
      },
      {
        id: "mis_003",
        misconception: "Debits are bad and credits are good",
        correction: "Debits and credits have different meanings for different accounts",
        explanation: "The effect of a debit or credit depends on the account type."
      },
      {
        id: "mis_004",
        misconception: "Bookkeeping is just data entry",
        correction: "Bookkeeping requires understanding and accuracy",
        explanation: "Bookkeepers must understand financial concepts and ensure accuracy."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business Records",
        description: "Bookkeeping maintains business records.",
        example: "Recording sales, expenses, and payments"
      },
      {
        id: "app_002",
        title: "Tax Compliance",
        description: "Bookkeeping helps with tax compliance.",
        example: "Tracking income and expenses for tax purposes"
      },
      {
        id: "app_003",
        title: "Financial Analysis",
        description: "Bookkeeping supports financial analysis.",
        example: "Preparing reports for decision-making"
      },
      {
        id: "app_004",
        title: "Business Planning",
        description: "Bookkeeping helps with business planning.",
        example: "Budgeting and forecasting"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Bookkeeping", definition: "The process of recording financial transactions." },
    { term: "Accounting Equation", definition: "Assets = Liabilities + Equity." },
    { term: "Double-Entry", definition: "A system where every transaction affects two accounts." },
    { term: "Debit", definition: "The left side of an account." },
    { term: "Credit", definition: "The right side of an account." },
    { term: "Assets", definition: "Resources owned by a business." },
    { term: "Liabilities", definition: "Debts owed by a business." },
    { term: "Equity", definition: "The owner's claim on assets." },
    { term: "Revenue", definition: "Income earned from operations." },
    { term: "Expenses", definition: "Costs incurred in operations." },
    { term: "Trial Balance", definition: "A list of all account balances." },
    { term: "Ledger", definition: "A collection of accounts." },
    { term: "Journal", definition: "A record of transactions." },
    { term: "Accounting Cycle", definition: "The process of recording and reporting." },
    { term: "Financial Statements", definition: "Reports showing financial performance." },
    { term: "Balance Sheet", definition: "A statement of assets, liabilities, and equity." },
    { term: "Income Statement", definition: "A statement of revenue and expenses." },
    { term: "Cash Flow", definition: "The movement of money in and out." },
    { term: "Internal Controls", definition: "Procedures to protect assets." },
    { term: "Audit", definition: "An examination of financial records." }
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
      question: "What is bookkeeping?",
      type: "multiple_choice",
      options: [
        "The process of analyzing financial data",
        "The process of recording financial transactions",
        "The process of preparing financial statements",
        "The process of auditing records"
      ],
      answer: "The process of recording financial transactions",
      explanation: "Bookkeeping is the process of recording financial transactions."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the accounting equation?",
      type: "multiple_choice",
      options: [
        "Assets = Liabilities + Equity",
        "Assets + Liabilities = Equity",
        "Assets = Revenue - Expenses",
        "Assets + Equity = Liabilities"
      ],
      answer: "Assets = Liabilities + Equity",
      explanation: "The accounting equation is Assets = Liabilities + Equity."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is double-entry bookkeeping?",
      type: "multiple_choice",
      options: [
        "A system where every transaction affects one account",
        "A system where every transaction affects two accounts",
        "A system where every transaction affects no accounts",
        "A system where transactions are not recorded"
      ],
      answer: "A system where every transaction affects two accounts",
      explanation: "Double-entry bookkeeping affects at least two accounts."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is an asset?",
      type: "multiple_choice",
      options: [
        "A debt owed by a business",
        "A resource owned by a business",
        "Revenue earned",
        "An expense"
      ],
      answer: "A resource owned by a business",
      explanation: "An asset is a resource owned by a business."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a debit?",
      type: "multiple_choice",
      options: [
        "The right side of an account",
        "The left side of an account",
        "A type of revenue",
        "A type of expense"
      ],
      answer: "The left side of an account",
      explanation: "A debit is the left side of an account."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the first step in the accounting cycle?",
      type: "multiple_choice",
      options: [
        "Prepare financial statements",
        "Identify transactions",
        "Post to ledgers",
        "Close accounts"
      ],
      answer: "Identify transactions",
      explanation: "The first step is to identify transactions."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a ledger?",
      type: "multiple_choice",
      options: [
        "A collection of accounts",
        "A record of transactions",
        "A financial statement",
        "A type of journal"
      ],
      answer: "A collection of accounts",
      explanation: "A ledger is a collection of accounts."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a trial balance?",
      type: "multiple_choice",
      options: [
        "A financial statement",
        "A list of all account balances",
        "A journal entry",
        "A cash flow report"
      ],
      answer: "A list of all account balances",
      explanation: "A trial balance is a list of all account balances."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is accurate record-keeping important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It supports business decisions",
        "It only helps the tax authority",
        "It is optional"
      ],
      answer: "It supports business decisions",
      explanation: "Accurate records support business decisions."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between bookkeeping and accounting?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Bookkeeping is recording; accounting is analyzing and reporting",
        "Accounting is recording; bookkeeping is analyzing",
        "There is no difference"
      ],
      answer: "Bookkeeping is recording; accounting is analyzing and reporting",
      explanation: "Bookkeeping is recording; accounting includes analyzing and reporting."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the purpose of financial statements?",
      type: "multiple_choice",
      options: [
        "To track daily transactions",
        "To show financial performance",
        "To record expenses",
        "To manage inventory"
      ],
      answer: "To show financial performance",
      explanation: "Financial statements show financial performance."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How has technology impacted bookkeeping?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It has made bookkeeping easier and faster",
        "It has made bookkeeping harder",
        "It is not used in bookkeeping"
      ],
      answer: "It has made bookkeeping easier and faster",
      explanation: "Technology has made bookkeeping easier and faster."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is depreciation?",
      type: "multiple_choice",
      options: [
        "The increase in asset value",
        "The decrease in asset value over time",
        "A type of revenue",
        "A type of liability"
      ],
      answer: "The decrease in asset value over time",
      explanation: "Depreciation is the decrease in asset value over time."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What are internal controls?",
      type: "multiple_choice",
      options: [
        "Procedures to protect assets",
        "A type of financial statement",
        "A journal entry",
        "A type of asset"
      ],
      answer: "Procedures to protect assets",
      explanation: "Internal controls are procedures to protect assets."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is an ethical responsibility of a bookkeeper?",
      type: "multiple_choice",
      options: [
        "To be honest and accurate",
        "To ignore errors",
        "To make false entries",
        "To hide information"
      ],
      answer: "To be honest and accurate",
      explanation: "Bookkeepers have an ethical responsibility to be honest and accurate."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_bookkeeping",
    title: "Bookkeeping Quiz",
    description: "Test your understanding of bookkeeping",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is bookkeeping?",
        type: "short_answer",
        answer_key: "The process of recording financial transactions",
        explanation: "Bookkeeping is the process of recording financial transactions."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the accounting equation?",
        type: "short_answer",
        answer_key: "Assets = Liabilities + Equity",
        explanation: "The accounting equation is Assets = Liabilities + Equity."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is double-entry bookkeeping?",
        type: "short_answer",
        answer_key: "A system where every transaction affects two accounts",
        explanation: "Double-entry bookkeeping affects at least two accounts."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an asset?",
        type: "short_answer",
        answer_key: "A resource owned by a business",
        explanation: "An asset is a resource owned by a business."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a debit?",
        type: "short_answer",
        answer_key: "The left side of an account",
        explanation: "A debit is the left side of an account."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the first step in the accounting cycle?",
        type: "short_answer",
        answer_key: "Identify transactions",
        explanation: "The first step is to identify transactions."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a ledger?",
        type: "short_answer",
        answer_key: "A collection of accounts",
        explanation: "A ledger is a collection of accounts."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a trial balance?",
        type: "short_answer",
        answer_key: "A list of all account balances",
        explanation: "A trial balance is a list of all account balances."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the difference between bookkeeping and accounting?",
        type: "short_answer",
        answer_key: "Bookkeeping is recording; accounting is analyzing and reporting",
        explanation: "Bookkeeping is recording; accounting includes analyzing and reporting."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the purpose of financial statements?",
        type: "short_answer",
        answer_key: "To show financial performance",
        explanation: "Financial statements show financial performance."
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
        "Understand bookkeeping and its importance",
        "Explain the accounting equation",
        "Describe double-entry bookkeeping",
        "Understand debit and credit rules"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is bookkeeping?" },
        { time: "5-10 min", activity: "Direct Instruction - Accounting Equation" },
        { time: "10-15 min", activity: "Direct Instruction - Double-Entry System" },
        { time: "15-20 min", activity: "Direct Instruction - Types of Accounts" },
        { time: "20-25 min", activity: "Direct Instruction - Debit and Credit Rules" },
        { time: "25-30 min", activity: "Direct Instruction - Accounting Cycle" },
        { time: "30-35 min", activity: "Direct Instruction - Bookkeeping vs Accounting" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The process of recording financial transactions",
        prac_002: "Assets = Liabilities + Equity",
        prac_003: "A system where every transaction affects two accounts",
        prac_004: "A resource owned by a business",
        prac_005: "The left side of an account",
        prac_006: "Identify transactions",
        prac_007: "A collection of accounts",
        prac_008: "A list of all account balances",
        prac_009: "It supports business decisions",
        prac_010: "Bookkeeping is recording; accounting is analyzing and reporting",
        prac_011: "To show financial performance",
        prac_012: "It has made bookkeeping easier and faster",
        prac_013: "The decrease in asset value over time",
        prac_014: "Procedures to protect assets",
        prac_015: "To be honest and accurate"
      },
      assessment: {
        ass_001: "The process of recording financial transactions",
        ass_002: "Assets = Liabilities + Equity",
        ass_003: "A system where every transaction affects two accounts",
        ass_004: "A resource owned by a business",
        ass_005: "The left side of an account",
        ass_006: "Identify transactions",
        ass_007: "A collection of accounts",
        ass_008: "A list of all account balances",
        ass_009: "Bookkeeping is recording; accounting is analyzing and reporting",
        ass_010: "To show financial performance"
      }
    },
    extensionActivities: [
      "Practice recording transactions",
      "Create a simple balance sheet",
      "Research accounting software",
      "Study the history of bookkeeping"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research accounting standards",
        "Study financial analysis",
        "Research auditing",
        "Study forensic accounting"
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
      title: "Accounting Equation",
      description: "Diagram showing the accounting equation",
      url: "/diagrams/accounting-equation.png",
      alt: "Accounting equation diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Accounting Cycle",
      description: "Diagram showing the accounting cycle",
      url: "/diagrams/accounting-cycle.png",
      alt: "Accounting cycle diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Debit and Credit Rules",
      description: "Chart showing debit and credit rules",
      url: "/diagrams/debit-credit-rules.png",
      alt: "Debit and credit rules chart"
    }
  ]
};