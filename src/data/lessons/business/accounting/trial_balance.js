// Location: src/data/lessons/business/accounting/trial_balance.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_trial_balance",
  subject: "Accounting",
  topic: "Trial Balance",
  name: "Trial Balance",
  icon: "⚖️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of bookkeeping basics",
    "Knowledge of journals and ledgers",
    "Understanding of debit and credit rules",
    "Basic numeracy skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Financial Statements",
      file: "business/accounting/financial_statements.js"
    },
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
      description: "Define a trial balance and explain its importance",
      indicator: "Student can explain what a trial balance is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the purpose of a trial balance",
      indicator: "Student can describe the main purpose of a trial balance"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the format of a trial balance",
      indicator: "Student can describe the structure of a trial balance"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Prepare a trial balance from ledger balances",
      indicator: "Student can create a trial balance from ledger accounts"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the relationship between ledgers and the trial balance",
      indicator: "Student can describe how ledgers connect to the trial balance"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify and correct trial balance errors",
      indicator: "Student can find and fix errors in a trial balance"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the limitations of a trial balance",
      indicator: "Student can describe what a trial balance cannot detect"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the steps to prepare a trial balance",
      indicator: "Student can explain how to prepare a trial balance"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of the trial balance in the accounting cycle",
      indicator: "Student can discuss the role of the trial balance"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the causes of trial balance differences",
      indicator: "Student can explain why a trial balance may not balance"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the use of suspense accounts",
      indicator: "Student can describe how suspense accounts are used"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of technology in trial balance preparation",
      indicator: "Student can explain how accounting software handles trial balances"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the relationship between the trial balance and financial statements",
      indicator: "Student can discuss how the trial balance connects to financial statements"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of adjusting entries and the trial balance",
      indicator: "Student can describe how adjusting entries affect the trial balance"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the importance of the trial balance for accuracy",
      indicator: "Student can discuss why the trial balance is essential for accuracy"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Trial Balance - Checking Accounting Accuracy",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the trial balance, how to prepare it, and how to identify errors."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Trial Balance</h2>
      <p>The <strong>trial balance</strong> is a statement that lists all the ledger account balances at a specific point in time. It is used to check the mathematical accuracy of the accounting records. If the total debits equal total credits, the accounts are said to be in balance.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Key Concepts</h3>
          <ul>
            <li>✓ Purpose of Trial Balance</li>
            <li>✓ Preparing a Trial Balance</li>
            <li>✓ Errors in Trial Balance</li>
            <li>✓ Suspense Accounts</li>
            <li>✓ Limitations</li>
            <li>✓ Role in Accounting Cycle</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The trial balance is a check on accuracy</li>
            <li>• Debits must equal credits</li>
            <li>• Some errors are not detected</li>
            <li>• Suspense accounts are used for differences</li>
            <li>• The trial balance is used for financial statements</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Trial Balance Matters</h4>
        <p>The trial balance ensures that the accounting records are mathematically accurate before preparing financial statements.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is a Trial Balance?",
        objective: "obj_001",
        text: `
          <h3>Understanding the Trial Balance</h3>
          <p>A <strong>trial balance</strong> is a list of all ledger account balances at a specific date. It is used to verify that total debits equal total credits.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>List:</strong> All accounts included</li>
                <li>• <strong>Balances:</strong> Debit and credit columns</li>
                <li>• <strong>Check:</strong> Mathematical accuracy</li>
                <li>• <strong>Summary:</strong> Summarizes ledgers</li>
                <li>• <strong>Preparation:</strong> Before financial statements</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Purpose</h4>
              <ul>
                <li>• Verify accuracy</li>
                <li>• Identify errors</li>
                <li>• Prepare financial statements</li>
                <li>• Check the double-entry system</li>
                <li>• Provide a summary</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Format of a Trial Balance",
        objective: "obj_003",
        text: `
          <h3>Format of a Trial Balance</h3>
          <p>A trial balance has a standard format.</p>
          
          <div class="example-box">
            <strong>📌 Trial Balance Format:</strong>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2">Account Name</th>
                  <th class="border p-2">Debit (₦)</th>
                  <th class="border p-2">Credit (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">Cash</td>
                  <td class="border p-2">10,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2">Accounts Receivable</td>
                  <td class="border p-2">5,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2">Inventory</td>
                  <td class="border p-2">8,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2">Equipment</td>
                  <td class="border p-2">20,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2">Accounts Payable</td>
                  <td class="border p-2"></td>
                  <td class="border p-2">12,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Loan Payable</td>
                  <td class="border p-2"></td>
                  <td class="border p-2">15,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Capital</td>
                  <td class="border p-2"></td>
                  <td class="border p-2">16,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Sales</td>
                  <td class="border p-2"></td>
                  <td class="border p-2">10,000</td>
                </tr>
                <tr>
                  <td class="border p-2">Expenses</td>
                  <td class="border p-2">10,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border p-2"><strong>Total</strong></td>
                  <td class="border p-2"><strong>53,000</strong></td>
                  <td class="border p-2"><strong>53,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Preparing a Trial Balance",
        objective: "obj_004",
        text: `
          <h3>Preparing a Trial Balance</h3>
          <p>To prepare a trial balance, follow these steps.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps</h4>
              <ul>
                <li>1. <strong>List:</strong> All ledger accounts</li>
                <li>2. <strong>Enter:</strong> Account balances</li>
                <li>3. <strong>Separate:</strong> Debits and credits</li>
                <li>4. <strong>Total:</strong> Debit column</li>
                <li>5. <strong>Total:</strong> Credit column</li>
                <li>6. <strong>Check:</strong> Debits = Credits</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Cash:</strong> Debit 10,000</li>
                <li>• <strong>Sales:</strong> Credit 10,000</li>
                <li>• <strong>Total Debits:</strong> 10,000</li>
                <li>• <strong>Total Credits:</strong> 10,000</li>
                <li>• <strong>Balanced:</strong> Debits = Credits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Errors in Trial Balance",
        objective: "obj_006",
        text: `
          <h3>Errors in Trial Balance</h3>
          <p>Various errors can cause a trial balance not to balance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Errors</h4>
              <ul>
                <li>• <strong>Transposition error:</strong> 54 written as 45</li>
                <li>• <strong>Omission error:</strong> Entry not recorded</li>
                <li>• <strong>Commission error:</strong> Wrong account</li>
                <li>• <strong>Principle error:</strong> Wrong account type</li>
                <li>• <strong>Compensating error:</strong> Two errors cancel</li>
                <li>• <strong>Partial entry:</strong> Only one side recorded</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How to Find Errors</h4>
              <ul>
                <li>• Check the difference</li>
                <li>• Divide by 9 for transposition errors</li>
                <li>• Divide by 2 for reversal errors</li>
                <li>• Review ledger accounts</li>
                <li>• Check journals</li>
                <li>• Verify balances</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Limitations of Trial Balance",
        objective: "obj_007",
        text: `
          <h3>Limitations of Trial Balance</h3>
          <p>The trial balance has some limitations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 What It Cannot Detect</h4>
              <ul>
                <li>• <strong>Error of omission:</strong> Complete omission</li>
                <li>• <strong>Error of commission:</strong> Wrong account</li>
                <li>• <strong>Error of principle:</strong> Wrong account type</li>
                <li>• <strong>Compensating errors:</strong> Errors cancel</li>
                <li>• <strong>Reverse entries:</strong> Both sides reversed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 What It Can Detect</h4>
              <ul>
                <li>• <strong>Transposition errors:</strong> Digits reversed</li>
                <li>• <strong>Partial entries:</strong> One side only</li>
                <li>• <strong>Incorrect amounts:</strong> Wrong numbers</li>
                <li>• <strong>Balancing errors:</strong> Wrong balance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Suspense Accounts",
        objective: "obj_011",
        text: `
          <h3>Suspense Accounts</h3>
          <p>A <strong>suspense account</strong> is used to temporarily hold a difference in a trial balance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 When to Use</h4>
              <ul>
                <li>• Trial balance doesn't balance</li>
                <li>• Difference is unknown</li>
                <li>• Temporary holding account</li>
                <li>• Later investigated</li>
                <li>• Corrected when error found</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Debits:</strong> ₦50,000</li>
                <li>• <strong>Credits:</strong> ₦48,000</li>
                <li>• <strong>Difference:</strong> ₦2,000</li>
                <li>• <strong>Credit suspense:</strong> ₦2,000</li>
                <li>• Balance is restored</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Trial Balance and Financial Statements",
        objective: "obj_013",
        text: `
          <h3>Trial Balance and Financial Statements</h3>
          <p>The trial balance is the foundation for preparing financial statements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Process</h4>
              <ul>
                <li>1. <strong>Prepare trial balance</strong></li>
                <li>2. <strong>Make adjusting entries</strong></li>
                <li>3. <strong>Prepare adjusted trial balance</strong></li>
                <li>4. <strong>Prepare financial statements</strong></li>
                <li>5. <strong>Balance sheet, income statement</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Ensures accuracy</li>
                <li>• Provides data</li>
                <li>• Supports decision-making</li>
                <li>• Foundation for reporting</li>
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
          <h4>⚖️ Trial Balance</h4>
          <ul>
            <li>• A list of all account balances</li>
            <li>• Debits must equal credits</li>
            <li>• Used to check accuracy</li>
            <li>• Foundation for financial statements</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Errors can cause imbalance</li>
            <li>• Suspense accounts hold differences</li>
            <li>• Limitations exist</li>
            <li>• Essential for the accounting cycle</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The trial balance is a crucial check on accounting accuracy before preparing financial statements.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "A balanced trial balance means no errors",
        correction: "Some errors can still exist even if it balances",
        explanation: "Errors of omission, commission, and principle are not detected."
      },
      {
        id: "mis_002",
        misconception: "The trial balance is a financial statement",
        correction: "The trial balance is an internal document",
        explanation: "It is used internally to check accuracy, not for external reporting."
      },
      {
        id: "mis_003",
        misconception: "Only debit errors cause imbalance",
        correction: "Errors on either side can cause imbalance",
        explanation: "Both debit and credit errors can affect the balance."
      },
      {
        id: "mis_004",
        misconception: "Suspense accounts are permanent",
        correction: "Suspense accounts are temporary",
        explanation: "They are used temporarily and cleared when errors are found."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Financial Reporting",
        description: "The trial balance supports financial reporting.",
        example: "Preparing balance sheets and income statements"
      },
      {
        id: "app_002",
        title: "Error Detection",
        description: "The trial balance helps find errors.",
        example: "Identifying and correcting accounting errors"
      },
      {
        id: "app_003",
        title: "Auditing",
        description: "Auditors use the trial balance.",
        example: "Checking accuracy and compliance"
      },
      {
        id: "app_004",
        title: "Decision Making",
        description: "The trial balance supports decision-making.",
        example: "Analyzing financial data"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Trial Balance", definition: "A list of all account balances." },
    { term: "Debit", definition: "The left side of an account." },
    { term: "Credit", definition: "The right side of an account." },
    { term: "Suspense Account", definition: "A temporary holding account for differences." },
    { term: "Transposition Error", definition: "Digits reversed." },
    { term: "Omission Error", definition: "Entry not recorded." },
    { term: "Commission Error", definition: "Wrong account." },
    { term: "Principle Error", definition: "Wrong account type." },
    { term: "Compensating Error", definition: "Two errors that cancel." },
    { term: "Balancing", definition: "Ensuring debits equal credits." },
    { term: "Ledger", definition: "A collection of accounts." },
    { term: "Account Balance", definition: "The net amount in an account." },
    { term: "Accounting Cycle", definition: "The process of recording and reporting." },
    { term: "Financial Statement", definition: "A report of financial performance." },
    { term: "Adjusting Entry", definition: "An entry made at the end of a period." },
    { term: "Posting", definition: "Transferring journal entries to ledgers." },
    { term: "Journal", definition: "The book of original entry." },
    { term: "General Ledger", definition: "The main accounting record." },
    { term: "Balance Sheet", definition: "A statement of assets, liabilities, and equity." },
    { term: "Income Statement", definition: "A statement of revenue and expenses." }
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
      question: "What is a trial balance?",
      type: "multiple_choice",
      options: [
        "A financial statement",
        "A list of all account balances",
        "A type of journal",
        "A source document"
      ],
      answer: "A list of all account balances",
      explanation: "A trial balance is a list of all account balances."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the purpose of a trial balance?",
      type: "multiple_choice",
      options: [
        "To check accuracy",
        "To prepare source documents",
        "To record transactions",
        "To close accounts"
      ],
      answer: "To check accuracy",
      explanation: "The purpose of a trial balance is to check accuracy."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are the columns in a trial balance?",
      type: "multiple_choice",
      options: [
        "Debit and credit",
        "Income and expense",
        "Asset and liability",
        "Revenue and expense"
      ],
      answer: "Debit and credit",
      explanation: "The columns in a trial balance are debit and credit."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in preparing a trial balance?",
      type: "multiple_choice",
      options: [
        "Total the columns",
        "List all accounts",
        "Enter balances",
        "Check for errors"
      ],
      answer: "List all accounts",
      explanation: "The first step is to list all accounts."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Where do balances for the trial balance come from?",
      type: "multiple_choice",
      options: [
        "Journals",
        "Ledgers",
        "Source documents",
        "Financial statements"
      ],
      answer: "Ledgers",
      explanation: "Balances for the trial balance come from ledgers."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a transposition error?",
      type: "multiple_choice",
      options: [
        "Digits reversed",
        "Entry not recorded",
        "Wrong account",
        "Wrong account type"
      ],
      answer: "Digits reversed",
      explanation: "A transposition error is when digits are reversed."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a limitation of the trial balance?",
      type: "multiple_choice",
      options: [
        "It is too detailed",
        "It cannot detect some errors",
        "It is only for large businesses",
        "It is difficult to prepare"
      ],
      answer: "It cannot detect some errors",
      explanation: "The trial balance cannot detect errors of omission, commission, and principle."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the next step after preparing a trial balance?",
      type: "multiple_choice",
      options: [
        "Close accounts",
        "Prepare financial statements",
        "Record transactions",
        "Post to ledgers"
      ],
      answer: "Prepare financial statements",
      explanation: "After preparing a trial balance, financial statements are prepared."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the role of the trial balance in the accounting cycle?",
      type: "multiple_choice",
      options: [
        "It is the first step",
        "It checks accuracy",
        "It is the final step",
        "It is not part of the cycle"
      ],
      answer: "It checks accuracy",
      explanation: "The trial balance checks accuracy in the accounting cycle."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What causes a trial balance difference?",
      type: "multiple_choice",
      options: [
        "Transposition errors",
        "Omission errors",
        "Compensating errors",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Transposition, omission, and compensating errors can cause differences."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a suspense account?",
      type: "multiple_choice",
      options: [
        "A permanent account",
        "A temporary holding account",
        "A financial statement",
        "A type of journal"
      ],
      answer: "A temporary holding account",
      explanation: "A suspense account is a temporary holding account for differences."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does technology affect trial balance preparation?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It automates the process",
        "It makes it harder",
        "It is no longer used"
      ],
      answer: "It automates the process",
      explanation: "Technology automates trial balance preparation."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the relationship between the trial balance and financial statements?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "The trial balance provides data for financial statements",
        "Financial statements provide data for the trial balance",
        "There is no relationship"
      ],
      answer: "The trial balance provides data for financial statements",
      explanation: "The trial balance provides the data needed for financial statements."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How do adjusting entries affect the trial balance?",
      type: "multiple_choice",
      options: [
        "They have no effect",
        "They change the balances",
        "They are not recorded",
        "They only affect revenue"
      ],
      answer: "They change the balances",
      explanation: "Adjusting entries change account balances, affecting the trial balance."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Why is the trial balance important for accuracy?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It ensures debits equal credits",
        "It only matters for tax",
        "It only matters for large businesses"
      ],
      answer: "It ensures debits equal credits",
      explanation: "The trial balance ensures that debits equal credits."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_trial_balance",
    title: "Trial Balance Quiz",
    description: "Test your understanding of the trial balance",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a trial balance?",
        type: "short_answer",
        answer_key: "A list of all account balances",
        explanation: "A trial balance is a list of all account balances."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the purpose of a trial balance?",
        type: "short_answer",
        answer_key: "To check accuracy",
        explanation: "The purpose of a trial balance is to check accuracy."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are the columns in a trial balance?",
        type: "short_answer",
        answer_key: "Debit and credit",
        explanation: "The columns are debit and credit."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in preparing a trial balance?",
        type: "short_answer",
        answer_key: "List all accounts",
        explanation: "The first step is to list all accounts."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Where do balances for the trial balance come from?",
        type: "short_answer",
        answer_key: "Ledgers",
        explanation: "Balances come from ledgers."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a transposition error?",
        type: "short_answer",
        answer_key: "Digits reversed",
        explanation: "A transposition error is when digits are reversed."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a limitation of the trial balance?",
        type: "short_answer",
        answer_key: "It cannot detect some errors",
        explanation: "The trial balance cannot detect errors of omission, commission, and principle."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the next step after preparing a trial balance?",
        type: "short_answer",
        answer_key: "Prepare financial statements",
        explanation: "Financial statements are prepared after the trial balance."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the role of the trial balance in the accounting cycle?",
        type: "short_answer",
        answer_key: "It checks accuracy",
        explanation: "The trial balance checks accuracy in the accounting cycle."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What causes a trial balance difference?",
        type: "short_answer",
        answer_key: "Transposition, omission, and compensating errors",
        explanation: "These errors can cause the trial balance not to balance."
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
        "Understand the trial balance and its purpose",
        "Prepare a trial balance",
        "Identify errors",
        "Understand limitations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a trial balance?" },
        { time: "5-10 min", activity: "Direct Instruction - Purpose of Trial Balance" },
        { time: "10-15 min", activity: "Direct Instruction - Format" },
        { time: "15-20 min", activity: "Direct Instruction - Preparing a Trial Balance" },
        { time: "20-25 min", activity: "Direct Instruction - Errors" },
        { time: "25-30 min", activity: "Direct Instruction - Limitations" },
        { time: "30-35 min", activity: "Direct Instruction - Suspense Accounts" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A list of all account balances",
        prac_002: "To check accuracy",
        prac_003: "Debit and credit",
        prac_004: "List all accounts",
        prac_005: "Ledgers",
        prac_006: "Digits reversed",
        prac_007: "It cannot detect some errors",
        prac_008: "Prepare financial statements",
        prac_009: "It checks accuracy",
        prac_010: "All of the above",
        prac_011: "A temporary holding account",
        prac_012: "It automates the process",
        prac_013: "The trial balance provides data for financial statements",
        prac_014: "They change the balances",
        prac_015: "It ensures debits equal credits"
      },
      assessment: {
        ass_001: "A list of all account balances",
        ass_002: "To check accuracy",
        ass_003: "Debit and credit",
        ass_004: "List all accounts",
        ass_005: "Ledgers",
        ass_006: "Digits reversed",
        ass_007: "It cannot detect some errors",
        ass_008: "Prepare financial statements",
        ass_009: "It checks accuracy",
        ass_010: "Transposition, omission, and compensating errors"
      }
    },
    extensionActivities: [
      "Prepare a trial balance from a set of accounts",
      "Identify errors in a trial balance",
      "Research accounting software",
      "Study suspense account usage"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research error detection",
        "Study complex errors",
        "Analyze financial statements",
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
      title: "Trial Balance Format",
      description: "Diagram showing trial balance format",
      url: "/diagrams/trial-balance-format.png",
      alt: "Trial balance format diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Types of Errors",
      description: "Diagram showing types of errors",
      url: "/diagrams/types-of-errors.png",
      alt: "Types of errors diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Accounting Cycle",
      description: "Diagram showing the accounting cycle",
      url: "/diagrams/accounting-cycle.png",
      alt: "Accounting cycle diagram"
    }
  ]
};