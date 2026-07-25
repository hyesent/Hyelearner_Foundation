// Location: src/data/lessons/business/accounting/ledgers.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_ledgers",
  subject: "Accounting",
  topic: "Ledgers",
  name: "Ledgers",
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
    "Knowledge of journals",
    "Understanding of debit and credit rules",
    "Basic numeracy skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Trial Balance",
      file: "business/accounting/trial_balance.js"
    },
    {
      name: "Financial Statements",
      file: "business/accounting/financial_statements.js"
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
      description: "Define a ledger and explain its importance",
      indicator: "Student can explain what a ledger is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of ledgers",
      indicator: "Student can distinguish between general and subsidiary ledgers"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the format of a ledger account",
      indicator: "Student can describe the parts of a ledger account"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the process of posting to ledgers",
      indicator: "Student can describe how to post journal entries to ledgers"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the process of balancing ledger accounts",
      indicator: "Student can explain how to balance accounts"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the purpose of the general ledger",
      indicator: "Student can describe the general ledger's role"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the purpose of subsidiary ledgers",
      indicator: "Student can explain the role of subsidiary ledgers"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the relationship between journals and ledgers",
      indicator: "Student can describe how journals connect to ledgers"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the importance of accurate ledger entries",
      indicator: "Student can explain why accuracy matters"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze T-account structures",
      indicator: "Student can analyze T-account balances"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the use of control accounts",
      indicator: "Student can describe control accounts"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of technology in ledger management",
      indicator: "Student can explain how accounting software handles ledgers"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of account reconciliation",
      indicator: "Student can describe how to reconcile accounts"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of the ledger in the accounting cycle",
      indicator: "Student can discuss the ledger's role in the accounting cycle"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the audit trail in ledgers",
      indicator: "Student can describe the audit trail"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze common errors in ledgers",
      indicator: "Student can identify and correct ledger errors"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Ledgers - Organizing Financial Information",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about ledgers, posting, balancing accounts, and organizing financial information."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Ledgers</h2>
      <p>The <strong>ledger</strong> is the principal book of accounts where transactions are organized by account. It is the second step in the accounting process, after journals. Ledgers provide a complete record of all transactions for each account, showing the current balance of each account.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📊 Key Concepts</h3>
          <ul>
            <li>✓ General Ledger</li>
            <li>✓ Subsidiary Ledgers</li>
            <li>✓ T-Accounts</li>
            <li>✓ Posting</li>
            <li>✓ Balancing Accounts</li>
            <li>✓ Control Accounts</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Ledgers have been used for centuries</li>
            <li>• The general ledger is the main accounting record</li>
            <li>• Subsidiary ledgers provide detail</li>
            <li>• T-accounts are a simple way to visualize ledgers</li>
            <li>• Ledgers are essential for financial reporting</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Ledgers Matter</h4>
        <p>Ledgers organize and summarize transactions, providing the information needed for financial statements and decision-making.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is a Ledger?",
        objective: "obj_001",
        text: `
          <h3>Understanding Ledgers</h3>
          <p>A <strong>ledger</strong> is a collection of accounts that summarizes all transactions recorded in journals. It is the principal book of accounts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Organized:</strong> Transactions grouped by account</li>
                <li>• <strong>Complete:</strong> All accounts included</li>
                <li>• <strong>Summarized:</strong> Shows account balances</li>
                <li>• <strong>Source:</strong> Information for financial statements</li>
                <li>• <strong>Reference:</strong> Links to journals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Organizes financial data</li>
                <li>• Shows account balances</li>
                <li>• Supports financial statements</li>
                <li>• Provides audit trail</li>
                <li>• Enables analysis</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Ledgers",
        objective: "obj_002",
        text: `
          <h3>Types of Ledgers</h3>
          <p>There are two main types of ledgers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Ledger</h4>
              <ul>
                <li>• The main accounting record</li>
                <li>• Contains all accounts</li>
                <li>• Summarizes transactions</li>
                <li>• Used for financial statements</li>
                <li>• Shows overall financial position</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Subsidiary Ledgers</h4>
              <ul>
                <li>• Detailed records</li>
                <li>• Supports the general ledger</li>
                <li>• Types:</li>
                <li>• Accounts receivable ledger</li>
                <li>• Accounts payable ledger</li>
                <li>• Inventory ledger</li>
                <li>• Fixed asset ledger</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Ledger Account Format",
        objective: "obj_003",
        text: `
          <h3>Ledger Account Format</h3>
          <p>A ledger account has a standard format, often shown as a T-account.</p>
          
          <div class="example-box">
            <strong>📌 T-Account Format:</strong>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2" colspan="2">Account Name</th>
                </tr>
                <tr class="bg-gray-100">
                  <th class="border p-2">Debit</th>
                  <th class="border p-2">Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">Date | Details | Amount</td>
                  <td class="border p-2">Date | Details | Amount</td>
                </tr>
                <tr>
                  <td class="border p-2">Jan 1 | Cash | ₦10,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2"></td>
                  <td class="border p-2">Jan 2 | Sales | ₦5,000</td>
                </tr>
                <tr>
                  <td class="border p-2"><strong>Total: ₦10,000</strong></td>
                  <td class="border p-2"><strong>Total: ₦5,000</strong></td>
                </tr>
                <tr>
                  <td class="border p-2" colspan="2"><strong>Balance: ₦5,000 (Debit)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of a Ledger Account</h4>
              <ul>
                <li>• <strong>Account title:</strong> Name of the account</li>
                <li>• <strong>Debit side:</strong> Left side</li>
                <li>• <strong>Credit side:</strong> Right side</li>
                <li>• <strong>Date:</strong> Transaction date</li>
                <li>• <strong>Details:</strong> Description</li>
                <li>• <strong>Amount:</strong> Transaction amount</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 T-Account Rules</h4>
              <ul>
                <li>• Debits on the left</li>
                <li>• Credits on the right</li>
                <li>• Debits increase assets</li>
                <li>• Credits increase liabilities</li>
                <li>• Balance = Debits - Credits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Posting to Ledgers",
        objective: "obj_004",
        text: `
          <h3>Posting to Ledgers</h3>
          <p><strong>Posting</strong> is the process of transferring journal entries to ledger accounts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Posting Process</h4>
              <ul>
                <li>1. <strong>Review:</strong> Examine journal entries</li>
                <li>2. <strong>Identify:</strong> Determine the accounts affected</li>
                <li>3. <strong>Transfer:</strong> Enter amounts in ledgers</li>
                <li>4. <strong>Reference:</strong> Note the journal page</li>
                <li>5. <strong>Verify:</strong> Check for accuracy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Journal entry:</strong> Cash ₦10,000 (Debit), Capital ₦10,000 (Credit)</li>
                <li>• <strong>Cash ledger:</strong> Enter debit ₦10,000</li>
                <li>• <strong>Capital ledger:</strong> Enter credit ₦10,000</li>
                <li>• Both accounts updated</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Balancing Ledger Accounts",
        objective: "obj_005",
        text: `
          <h3>Balancing Ledger Accounts</h3>
          <p><strong>Balancing</strong> is the process of calculating the balance of each ledger account.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps to Balance</h4>
              <ul>
                <li>1. <strong>Total:</strong> Add all debits</li>
                <li>2. <strong>Total:</strong> Add all credits</li>
                <li>3. <strong>Calculate:</strong> Difference between totals</li>
                <li>4. <strong>Record:</strong> Enter the balance</li>
                <li>5. <strong>Check:</strong> Ensure debits = credits</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Balance Types</h4>
              <ul>
                <li>• <strong>Debit balance:</strong> Debits > Credits</li>
                <li>• <strong>Credit balance:</strong> Credits > Debits</li>
                <li>• <strong>Zero balance:</strong> Debits = Credits</li>
                <li>• Asset accounts: Usually debit balance</li>
                <li>• Liability accounts: Usually credit balance</li>
                <li>• Equity accounts: Usually credit balance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Subsidiary Ledgers",
        objective: "obj_007",
        text: `
          <h3>Subsidiary Ledgers</h3>
          <p><strong>Subsidiary ledgers</strong> provide detailed information that supports the general ledger.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Subsidiary Ledgers</h4>
              <ul>
                <li>• <strong>Accounts Receivable:</strong> Customer details</li>
                <li>• <strong>Accounts Payable:</strong> Supplier details</li>
                <li>• <strong>Inventory:</strong> Product details</li>
                <li>• <strong>Fixed Assets:</strong> Asset details</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Detailed records</li>
                <li>• Easy to track individual accounts</li>
                <li>• Supports the general ledger</li>
                <li>• Improves efficiency</li>
                <li>• Enhances control</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Control Accounts",
        objective: "obj_011",
        text: `
          <h3>Control Accounts</h3>
          <p><strong>Control accounts</strong> summarize transactions from subsidiary ledgers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Control Accounts</h4>
              <ul>
                <li>• <strong>Accounts Receivable Control:</strong> Total customer balances</li>
                <li>• <strong>Accounts Payable Control:</strong> Total supplier balances</li>
                <li>• <strong>Inventory Control:</strong> Total inventory value</li>
                <li>• <strong>Fixed Asset Control:</strong> Total asset value</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Summarizes subsidiary ledgers</li>
                <li>• Checks accuracy</li>
                <li>• Simplifies financial statements</li>
                <li>• Enhances control</li>
                <li>• Improves efficiency</li>
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
          <h4>📊 Ledgers</h4>
          <ul>
            <li>• The principal book of accounts</li>
            <li>• General and subsidiary ledgers</li>
            <li>• T-accounts show debits and credits</li>
            <li>• Posting transfers journal entries</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Balancing accounts</li>
            <li>• Control accounts summarize</li>
            <li>• Subsidiary ledgers provide detail</li>
            <li>• Ledgers support financial statements</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Ledgers organize and summarize financial data, providing the foundation for financial reporting.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The general ledger and subsidiary ledger are the same",
        correction: "The general ledger summarizes; subsidiary ledgers provide detail",
        explanation: "Subsidiary ledgers support the general ledger with detailed information."
      },
      {
        id: "mis_002",
        misconception: "T-accounts are only for learning",
        correction: "T-accounts are used in practice",
        explanation: "T-accounts are a simple way to visualize ledger accounts."
      },
      {
        id: "mis_003",
        misconception: "Posting and journalizing are the same",
        correction: "Journalizing records in journals; posting transfers to ledgers",
        explanation: "Journalizing is the first step; posting is the second step."
      },
      {
        id: "mis_004",
        misconception: "Ledgers are no longer needed with software",
        correction: "Ledgers are still essential in accounting software",
        explanation: "Accounting software uses electronic ledgers."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Financial Reporting",
        description: "Ledgers support financial reporting.",
        example: "Balance sheet, income statement"
      },
      {
        id: "app_002",
        title: "Account Analysis",
        description: "Ledgers enable account analysis.",
        example: "Reviewing transaction history"
      },
      {
        id: "app_003",
        title: "Audit Trail",
        description: "Ledgers provide an audit trail.",
        example: "Tracking transactions"
      },
      {
        id: "app_004",
        title: "Decision Making",
        description: "Ledgers support decision making.",
        example: "Financial analysis"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Ledger", definition: "The principal book of accounts." },
    { term: "General Ledger", definition: "The main accounting record." },
    { term: "Subsidiary Ledger", definition: "A detailed record supporting the general ledger." },
    { term: "T-Account", definition: "A simple format for ledger accounts." },
    { term: "Posting", definition: "Transferring journal entries to ledgers." },
    { term: "Balancing", definition: "Calculating account balances." },
    { term: "Control Account", definition: "An account that summarizes subsidiary ledgers." },
    { term: "Accounts Receivable", definition: "Money owed by customers." },
    { term: "Accounts Payable", definition: "Money owed to suppliers." },
    { term: "Debit Balance", definition: "Debits exceed credits." },
    { term: "Credit Balance", definition: "Credits exceed debits." },
    { term: "Account Title", definition: "The name of an account." },
    { term: "Ledger Account", definition: "A record of transactions for one account." },
    { term: "Reconciliation", definition: "Comparing accounts." },
    { term: "Audit Trail", definition: "A record of transactions." },
    { term: "Double-Entry", definition: "A system where every transaction affects two accounts." },
    { term: "Trial Balance", definition: "A list of all account balances." },
    { term: "Chart of Accounts", definition: "A list of all accounts." },
    { term: "Financial Statement", definition: "A report of financial performance." },
    { term: "Bookkeeping", definition: "The process of recording transactions." }
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
      question: "What is a ledger?",
      type: "multiple_choice",
      options: [
        "The book of original entry",
        "The principal book of accounts",
        "A financial statement",
        "A type of journal"
      ],
      answer: "The principal book of accounts",
      explanation: "A ledger is the principal book of accounts."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the types of ledgers?",
      type: "multiple_choice",
      options: [
        "General and subsidiary ledgers",
        "Sales and purchases ledgers",
        "Cash and credit ledgers",
        "Debit and credit ledgers"
      ],
      answer: "General and subsidiary ledgers",
      explanation: "The two main types are general and subsidiary ledgers."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a T-account?",
      type: "multiple_choice",
      options: [
        "A type of journal",
        "A simple format for ledger accounts",
        "A financial statement",
        "A source document"
      ],
      answer: "A simple format for ledger accounts",
      explanation: "A T-account is a simple format for ledger accounts."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is posting?",
      type: "multiple_choice",
      options: [
        "Recording transactions in journals",
        "Transferring journal entries to ledgers",
        "Preparing financial statements",
        "Closing accounts"
      ],
      answer: "Transferring journal entries to ledgers",
      explanation: "Posting is transferring journal entries to ledgers."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is balancing an account?",
      type: "multiple_choice",
      options: [
        "Recording transactions",
        "Calculating the account balance",
        "Posting to ledgers",
        "Preparing financial statements"
      ],
      answer: "Calculating the account balance",
      explanation: "Balancing is calculating the account balance."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the purpose of the general ledger?",
      type: "multiple_choice",
      options: [
        "To record detailed transactions",
        "To summarize all accounts",
        "To prepare source documents",
        "To record journal entries"
      ],
      answer: "To summarize all accounts",
      explanation: "The general ledger summarizes all accounts."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a subsidiary ledger?",
      type: "multiple_choice",
      options: [
        "A detailed record supporting the general ledger",
        "A financial statement",
        "A type of journal",
        "A source document"
      ],
      answer: "A detailed record supporting the general ledger",
      explanation: "A subsidiary ledger provides detailed records supporting the general ledger."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the relationship between journals and ledgers?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Journals are posted to ledgers",
        "Ledgers are posted to journals",
        "There is no relationship"
      ],
      answer: "Journals are posted to ledgers",
      explanation: "Journal entries are posted to ledgers."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is accuracy important in ledgers?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "Errors affect financial statements",
        "It only matters for tax",
        "It only matters for large businesses"
      ],
      answer: "Errors affect financial statements",
      explanation: "Errors in ledgers affect financial statements."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a debit balance?",
      type: "multiple_choice",
      options: [
        "Debits exceed credits",
        "Credits exceed debits",
        "Debits equal credits",
        "No balance"
      ],
      answer: "Debits exceed credits",
      explanation: "A debit balance means debits exceed credits."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a control account?",
      type: "multiple_choice",
      options: [
        "An account that summarizes subsidiary ledgers",
        "An account that records transactions",
        "An account for cash",
        "An account for inventory"
      ],
      answer: "An account that summarizes subsidiary ledgers",
      explanation: "A control account summarizes subsidiary ledgers."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How has technology impacted ledger management?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It has made it faster and more accurate",
        "It has made it harder",
        "It is no longer used"
      ],
      answer: "It has made it faster and more accurate",
      explanation: "Technology has made ledger management faster and more accurate."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is account reconciliation?",
      type: "multiple_choice",
      options: [
        "Recording transactions",
        "Comparing account balances",
        "Posting to ledgers",
        "Preparing financial statements"
      ],
      answer: "Comparing account balances",
      explanation: "Reconciliation is comparing account balances."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the role of ledgers in the accounting cycle?",
      type: "multiple_choice",
      options: [
        "They are the first step",
        "They organize and summarize transactions",
        "They are the final step",
        "They are not part of the cycle"
      ],
      answer: "They organize and summarize transactions",
      explanation: "Ledgers organize and summarize transactions in the accounting cycle."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is an audit trail in ledgers?",
      type: "multiple_choice",
      options: [
        "A record of transactions",
        "A type of journal",
        "A financial statement",
        "A source document"
      ],
      answer: "A record of transactions",
      explanation: "An audit trail is a record of transactions."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_ledgers",
    title: "Ledgers Quiz",
    description: "Test your understanding of ledgers",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a ledger?",
        type: "short_answer",
        answer_key: "The principal book of accounts",
        explanation: "A ledger is the principal book of accounts."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the types of ledgers?",
        type: "short_answer",
        answer_key: "General and subsidiary ledgers",
        explanation: "The two main types are general and subsidiary ledgers."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a T-account?",
        type: "short_answer",
        answer_key: "A simple format for ledger accounts",
        explanation: "A T-account is a simple format for ledger accounts."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is posting?",
        type: "short_answer",
        answer_key: "Transferring journal entries to ledgers",
        explanation: "Posting is transferring journal entries to ledgers."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is balancing an account?",
        type: "short_answer",
        answer_key: "Calculating the account balance",
        explanation: "Balancing is calculating the account balance."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the purpose of the general ledger?",
        type: "short_answer",
        answer_key: "To summarize all accounts",
        explanation: "The general ledger summarizes all accounts."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a subsidiary ledger?",
        type: "short_answer",
        answer_key: "A detailed record supporting the general ledger",
        explanation: "A subsidiary ledger provides detailed records."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the relationship between journals and ledgers?",
        type: "short_answer",
        answer_key: "Journals are posted to ledgers",
        explanation: "Journal entries are posted to ledgers."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Why is accuracy important in ledgers?",
        type: "short_answer",
        answer_key: "Errors affect financial statements",
        explanation: "Errors in ledgers affect financial statements."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a debit balance?",
        type: "short_answer",
        answer_key: "Debits exceed credits",
        explanation: "A debit balance means debits exceed credits."
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
        "Understand ledgers and their importance",
        "Explain types of ledgers",
        "Describe posting and balancing",
        "Understand subsidiary ledgers"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a ledger?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Ledgers" },
        { time: "10-15 min", activity: "Direct Instruction - T-Account Format" },
        { time: "15-20 min", activity: "Direct Instruction - Posting" },
        { time: "20-25 min", activity: "Direct Instruction - Balancing Accounts" },
        { time: "25-30 min", activity: "Direct Instruction - Subsidiary Ledgers" },
        { time: "30-35 min", activity: "Direct Instruction - Control Accounts" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The principal book of accounts",
        prac_002: "General and subsidiary ledgers",
        prac_003: "A simple format for ledger accounts",
        prac_004: "Transferring journal entries to ledgers",
        prac_005: "Calculating the account balance",
        prac_006: "To summarize all accounts",
        prac_007: "A detailed record supporting the general ledger",
        prac_008: "Journals are posted to ledgers",
        prac_009: "Errors affect financial statements",
        prac_010: "Debits exceed credits",
        prac_011: "An account that summarizes subsidiary ledgers",
        prac_012: "It has made it faster and more accurate",
        prac_013: "Comparing account balances",
        prac_014: "They organize and summarize transactions",
        prac_015: "A record of transactions"
      },
      assessment: {
        ass_001: "The principal book of accounts",
        ass_002: "General and subsidiary ledgers",
        ass_003: "A simple format for ledger accounts",
        ass_004: "Transferring journal entries to ledgers",
        ass_005: "Calculating the account balance",
        ass_006: "To summarize all accounts",
        ass_007: "A detailed record supporting the general ledger",
        ass_008: "Journals are posted to ledgers",
        ass_009: "Errors affect financial statements",
        ass_010: "Debits exceed credits"
      }
    },
    extensionActivities: [
      "Practice posting to ledgers",
      "Create a subsidiary ledger",
      "Balance a T-account",
      "Research accounting software"
    ],
    differentiation: {
      struggling: [
        "Focus on basic T-accounts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research advanced ledger systems",
        "Study control accounts",
        "Analyze ledger reconciliation",
        "Research accounting systems"
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
      title: "T-Account Format",
      description: "Diagram showing T-account format",
      url: "/diagrams/t-account-format.png",
      alt: "T-account format diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Types of Ledgers",
      description: "Diagram showing types of ledgers",
      url: "/diagrams/types-of-ledgers.png",
      alt: "Types of ledgers diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Posting Process",
      description: "Diagram showing the posting process",
      url: "/diagrams/posting-process.png",
      alt: "Posting process diagram"
    }
  ]
};