// Location: src/data/lessons/business/accounting/journals.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_journals",
  subject: "Accounting",
  topic: "Journals",
  name: "Journals",
  icon: "📝",
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
    "Understanding of debit and credit rules",
    "Basic numeracy skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Ledgers",
      file: "business/accounting/ledgers.js"
    },
    {
      name: "Trial Balance",
      file: "business/accounting/trial_balance.js"
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
      description: "Define a journal and explain its importance",
      indicator: "Student can explain what a journal is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of journals",
      indicator: "Student can distinguish between general and special journals"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the format of a journal entry",
      indicator: "Student can describe the parts of a journal entry"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Record transactions in a general journal",
      indicator: "Student can make journal entries"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the use of special journals",
      indicator: "Student can describe sales, purchases, cash receipts, and cash payments journals"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the process of journalizing",
      indicator: "Student can explain how to journalize transactions"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of source documents",
      indicator: "Student can describe what source documents are"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the importance of accurate journal entries",
      indicator: "Student can explain why accuracy matters"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the relationship between journals and ledgers",
      indicator: "Student can describe how journals connect to ledgers"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze complex journal entries",
      indicator: "Student can handle multi-account journal entries"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the use of adjusting journal entries",
      indicator: "Student can describe adjusting entries"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the use of reversing entries",
      indicator: "Student can explain reversing entries"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the role of technology in journalizing",
      indicator: "Student can describe how accounting software handles journals"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of journal documentation",
      indicator: "Student can discuss the importance of supporting documents"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the audit trail in journals",
      indicator: "Student can describe the audit trail"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze common errors in journal entries",
      indicator: "Student can identify and correct journal errors"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Journals - The First Book of Entry",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about journals, journal entries, and how to record transactions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Journals</h2>
      <p>The <strong>journal</strong> is the book of original entry where financial transactions are first recorded. It is the first step in the accounting process. Journals provide a chronological record of all business transactions, showing the accounts affected, the amounts, and the date of each transaction.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📝 Key Concepts</h3>
          <ul>
            <li>✓ General Journal</li>
            <li>✓ Special Journals</li>
            <li>✓ Journal Entries</li>
            <li>✓ Source Documents</li>
            <li>✓ Journalizing</li>
            <li>✓ Posting</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Journals are called "books of original entry"</li>
            <li>• Every transaction is recorded in a journal</li>
            <li>• Journals provide a chronological record</li>
            <li>• Special journals save time</li>
            <li>• Journals are the first step in the accounting cycle</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Journals Matter</h4>
        <p>Journals provide a complete and chronological record of all transactions, forming the basis for all other accounting records.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is a Journal?",
        objective: "obj_001",
        text: `
          <h3>Understanding Journals</h3>
          <p>A <strong>journal</strong> is a record of financial transactions in chronological order. It is the first place where transactions are recorded.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Chronological:</strong> Recorded by date</li>
                <li>• <strong>Complete:</strong> All transactions recorded</li>
                <li>• <strong>Original:</strong> First record of transactions</li>
                <li>• <strong>Detailed:</strong> Shows full details</li>
                <li>• <strong>Audit trail:</strong> Provides evidence</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Complete transaction record</li>
                <li>• Chronological tracking</li>
                <li>• Basis for ledgers</li>
                <li>• Audit trail</li>
                <li>• Error identification</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Journals",
        objective: "obj_002",
        text: `
          <h3>Types of Journals</h3>
          <p>There are two main types of journals.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Journal</h4>
              <ul>
                <li>• Used for all transactions</li>
                <li>• Simple to use</li>
                <li>• Suitable for small businesses</li>
                <li>• Records all types of transactions</li>
                <li>• Date, accounts, amounts, explanation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Special Journals</h4>
              <ul>
                <li>• Used for specific types</li>
                <li>• Saves time</li>
                <li>• Suitable for large businesses</li>
                <li>• Types:</li>
                <li>• Sales journal</li>
                <li>• Purchases journal</li>
                <li>• Cash receipts journal</li>
                <li>• Cash payments journal</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Journal Entry Format",
        objective: "obj_003",
        text: `
          <h3>Journal Entry Format</h3>
          <p>A journal entry follows a specific format.</p>
          
          <div class="example-box">
            <strong>📌 Standard Journal Entry Format:</strong>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2">Date</th>
                  <th class="border p-2">Account Title</th>
                  <th class="border p-2">Ref</th>
                  <th class="border p-2">Debit</th>
                  <th class="border p-2">Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2">Jan 1</td>
                  <td class="border p-2">Cash</td>
                  <td class="border p-2">101</td>
                  <td class="border p-2">₦10,000</td>
                  <td class="border p-2"></td>
                </tr>
                <tr>
                  <td class="border p-2"></td>
                  <td class="border p-2">Capital</td>
                  <td class="border p-2">301</td>
                  <td class="border p-2"></td>
                  <td class="border p-2">₦10,000</td>
                </tr>
                <tr>
                  <td class="border p-2" colspan="5">(To record owner's investment)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of a Journal Entry</h4>
              <ul>
                <li>• <strong>Date:</strong> When the transaction occurred</li>
                <li>• <strong>Account title:</strong> Names of accounts</li>
                <li>• <strong>Ref:</strong> Account reference number</li>
                <li>• <strong>Debit:</strong> Amount debited</li>
                <li>• <strong>Credit:</strong> Amount credited</li>
                <li>• <strong>Explanation:</strong> Description of transaction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Rules</h4>
              <ul>
                <li>• Debits are entered first</li>
                <li>• Credits are indented</li>
                <li>• Debits must equal credits</li>
                <li>• Each entry has an explanation</li>
                <li>• Account names are specific</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Journalizing",
        objective: "obj_006",
        text: `
          <h3>Journalizing Transactions</h3>
          <p><strong>Journalizing</strong> is the process of recording transactions in a journal.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps</h4>
              <ul>
                <li>1. <strong>Analyze:</strong> Understand the transaction</li>
                <li>2. <strong>Identify:</strong> Which accounts are affected</li>
                <li>3. <strong>Determine:</strong> Which accounts are debited/credited</li>
                <li>4. <strong>Record:</strong> Enter the journal entry</li>
                <li>5. <strong>Post:</strong> Transfer to ledgers</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Transaction:</strong> Purchased inventory for ₦5,000 cash</li>
                <li>• <strong>Debit:</strong> Inventory ₦5,000</li>
                <li>• <strong>Credit:</strong> Cash ₦5,000</li>
                <li>• <strong>Explanation:</strong> Purchased inventory for cash</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Source Documents",
        objective: "obj_007",
        text: `
          <h3>Source Documents</h3>
          <p><strong>Source documents</strong> are the original records that provide evidence of a transaction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Source Documents</h4>
              <ul>
                <li>• <strong>Invoices:</strong> Bills from suppliers</li>
                <li>• <strong>Receipts:</strong> Proof of payment</li>
                <li>• <strong>Cheques:</strong> Payment instruments</li>
                <li>• <strong>Bank statements:</strong> Bank records</li>
                <li>• <strong>Sales orders:</strong> Customer orders</li>
                <li>• <strong>Purchase orders:</strong> Supplier orders</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Provides evidence</li>
                <li>• Supports entries</li>
                <li>• Audit trail</li>
                <li>• Verifies transactions</li>
                <li>• Legal proof</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Journals to Ledgers",
        objective: "obj_009",
        text: `
          <h3>Journals to Ledgers</h3>
          <p>Journal entries are transferred to ledgers through a process called <strong>posting</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Posting Process</h4>
              <ul>
                <li>1. <strong>Record:</strong> Enter transaction in journal</li>
                <li>2. <strong>Analyze:</strong> Identify the accounts</li>
                <li>3. <strong>Transfer:</strong> Move to ledger accounts</li>
                <li>4. <strong>Balance:</strong> Update account balances</li>
                <li>5. <strong>Verify:</strong> Check accuracy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Journal entry:</strong> Cash ₦10,000 (Debit), Capital ₦10,000 (Credit)</li>
                <li>• <strong>Cash account:</strong> Debit ₦10,000</li>
                <li>• <strong>Capital account:</strong> Credit ₦10,000</li>
                <li>• Both accounts updated</li>
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
          <h4>📝 Journals</h4>
          <ul>
            <li>• Book of original entry</li>
            <li>• General and special journals</li>
            <li>• Journal entries record transactions</li>
            <li>• Debits and credits must balance</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Source documents support entries</li>
            <li>• Journalizing is the recording process</li>
            <li>• Posting transfers to ledgers</li>
            <li>• Accuracy is essential</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Journals are the foundation of accounting. Every transaction starts with a journal entry.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All transactions are recorded in the general journal",
        correction: "Special journals are used for specific transactions",
        explanation: "Large businesses use special journals for efficiency."
      },
      {
        id: "mis_002",
        misconception: "Journal entries don't need explanations",
        correction: "Explanations are essential for understanding",
        explanation: "Explanations provide context for the transaction."
      },
      {
        id: "mis_003",
        misconception: "Source documents are optional",
        correction: "Source documents are required evidence",
        explanation: "Source documents support and verify transactions."
      },
      {
        id: "mis_004",
        misconception: "Journals and ledgers are the same",
        correction: "Journals record transactions; ledgers organize accounts",
        explanation: "Journals are the first record; ledgers summarize accounts."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Transaction Recording",
        description: "Journals record all business transactions.",
        example: "Sales, purchases, payments, receipts"
      },
      {
        id: "app_002",
        title: "Audit Trail",
        description: "Journals provide an audit trail.",
        example: "Tracking transactions for verification"
      },
      {
        id: "app_003",
        title: "Financial Reporting",
        description: "Journals support financial reporting.",
        example: "Preparing financial statements"
      },
      {
        id: "app_004",
        title: "Error Detection",
        description: "Journals help detect errors.",
        example: "Reviewing entries for accuracy"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Journal", definition: "The book of original entry." },
    { term: "Journal Entry", definition: "The record of a transaction in a journal." },
    { term: "Journalizing", definition: "The process of recording transactions." },
    { term: "General Journal", definition: "A journal used for all transactions." },
    { term: "Special Journal", definition: "A journal used for specific types of transactions." },
    { term: "Source Document", definition: "Evidence of a transaction." },
    { term: "Posting", definition: "Transferring journal entries to ledgers." },
    { term: "Debit", definition: "The left side of an account." },
    { term: "Credit", definition: "The right side of an account." },
    { term: "Sales Journal", definition: "A journal for credit sales." },
    { term: "Purchases Journal", definition: "A journal for credit purchases." },
    { term: "Cash Receipts Journal", definition: "A journal for cash receipts." },
    { term: "Cash Payments Journal", definition: "A journal for cash payments." },
    { term: "Invoice", definition: "A bill for goods or services." },
    { term: "Receipt", definition: "Proof of payment." },
    { term: "Audit Trail", definition: "A record of transactions." },
    { term: "Adjusting Entry", definition: "An entry made at the end of a period." },
    { term: "Reversing Entry", definition: "An entry that reverses a previous entry." },
    { term: "Account", definition: "A record of transactions for a specific item." },
    { term: "Transaction", definition: "A business event that affects accounts." }
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
      question: "What is a journal?",
      type: "multiple_choice",
      options: [
        "The book of original entry",
        "A collection of accounts",
        "A financial statement",
        "A type of ledger"
      ],
      answer: "The book of original entry",
      explanation: "A journal is the book of original entry."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the types of journals?",
      type: "multiple_choice",
      options: [
        "General and special journals",
        "Sales and purchases journals only",
        "Cash and credit journals",
        "Debit and credit journals"
      ],
      answer: "General and special journals",
      explanation: "The two main types are general and special journals."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is included in a journal entry?",
      type: "multiple_choice",
      options: [
        "Date, accounts, amounts, explanation",
        "Only date and amounts",
        "Only accounts and amounts",
        "Only explanation"
      ],
      answer: "Date, accounts, amounts, explanation",
      explanation: "A journal entry includes date, accounts, amounts, and explanation."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the journal entry for a cash sale of ₦5,000?",
      type: "multiple_choice",
      options: [
        "Debit Cash ₦5,000, Credit Sales ₦5,000",
        "Debit Sales ₦5,000, Credit Cash ₦5,000",
        "Debit Cash ₦5,000, Credit Inventory ₦5,000",
        "Debit Inventory ₦5,000, Credit Cash ₦5,000"
      ],
      answer: "Debit Cash ₦5,000, Credit Sales ₦5,000",
      explanation: "Cash increases (Debit) and Sales increases (Credit)."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a sales journal used for?",
      type: "multiple_choice",
      options: [
        "Recording credit sales",
        "Recording cash sales",
        "Recording purchases",
        "Recording expenses"
      ],
      answer: "Recording credit sales",
      explanation: "A sales journal is used for credit sales."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is journalizing?",
      type: "multiple_choice",
      options: [
        "Recording transactions in a journal",
        "Posting to ledgers",
        "Preparing financial statements",
        "Closing accounts"
      ],
      answer: "Recording transactions in a journal",
      explanation: "Journalizing is the process of recording transactions in a journal."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a source document?",
      type: "multiple_choice",
      options: [
        "Evidence of a transaction",
        "A type of journal",
        "A type of ledger",
        "A financial statement"
      ],
      answer: "Evidence of a transaction",
      explanation: "A source document is evidence of a transaction."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Why is accuracy important in journal entries?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "Errors affect all accounting records",
        "It only matters for tax",
        "It only matters for large businesses"
      ],
      answer: "Errors affect all accounting records",
      explanation: "Errors in journals affect all accounting records."
    },
    {
      id: "prac_009",
      objective: "obj_009",
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
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a compound journal entry?",
      type: "multiple_choice",
      options: [
        "An entry with one debit and one credit",
        "An entry with multiple debits or credits",
        "An entry with no debits",
        "An entry with no credits"
      ],
      answer: "An entry with multiple debits or credits",
      explanation: "A compound entry has multiple debits or credits."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an adjusting journal entry?",
      type: "multiple_choice",
      options: [
        "An entry to correct errors",
        "An entry made at the end of a period",
        "An entry for cash transactions",
        "An entry for sales"
      ],
      answer: "An entry made at the end of a period",
      explanation: "Adjusting entries are made at the end of a period."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a reversing entry?",
      type: "multiple_choice",
      options: [
        "An entry that reverses a previous entry",
        "An entry for cash payments",
        "An entry for sales",
        "An entry for purchases"
      ],
      answer: "An entry that reverses a previous entry",
      explanation: "A reversing entry reverses a previous entry."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How has technology impacted journalizing?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It has made it faster and more accurate",
        "It has made it harder",
        "It is no longer used"
      ],
      answer: "It has made it faster and more accurate",
      explanation: "Technology has made journalizing faster and more accurate."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why are source documents important?",
      type: "multiple_choice",
      options: [
        "They are not important",
        "They provide evidence and support entries",
        "They are only for tax",
        "They are optional"
      ],
      answer: "They provide evidence and support entries",
      explanation: "Source documents provide evidence and support entries."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is an audit trail?",
      type: "multiple_choice",
      options: [
        "A record of transactions",
        "A type of journal",
        "A type of ledger",
        "A financial statement"
      ],
      answer: "A record of transactions",
      explanation: "An audit trail is a record of transactions."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_journals",
    title: "Journals Quiz",
    description: "Test your understanding of journals",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a journal?",
        type: "short_answer",
        answer_key: "The book of original entry",
        explanation: "A journal is the book of original entry."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the types of journals?",
        type: "short_answer",
        answer_key: "General and special journals",
        explanation: "The two main types are general and special journals."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is included in a journal entry?",
        type: "short_answer",
        answer_key: "Date, accounts, amounts, explanation",
        explanation: "A journal entry includes date, accounts, amounts, and explanation."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the journal entry for a cash sale of ₦5,000?",
        type: "short_answer",
        answer_key: "Debit Cash ₦5,000, Credit Sales ₦5,000",
        explanation: "Cash increases (Debit) and Sales increases (Credit)."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a sales journal used for?",
        type: "short_answer",
        answer_key: "Recording credit sales",
        explanation: "A sales journal is used for credit sales."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is journalizing?",
        type: "short_answer",
        answer_key: "Recording transactions in a journal",
        explanation: "Journalizing is the process of recording transactions."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a source document?",
        type: "short_answer",
        answer_key: "Evidence of a transaction",
        explanation: "A source document is evidence of a transaction."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Why is accuracy important in journal entries?",
        type: "short_answer",
        answer_key: "Errors affect all accounting records",
        explanation: "Errors in journals affect all accounting records."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the relationship between journals and ledgers?",
        type: "short_answer",
        answer_key: "Journals are posted to ledgers",
        explanation: "Journal entries are posted to ledgers."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a compound journal entry?",
        type: "short_answer",
        answer_key: "An entry with multiple debits or credits",
        explanation: "A compound entry has multiple debits or credits."
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
        "Understand journals and their importance",
        "Explain types of journals",
        "Record journal entries",
        "Understand source documents"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a journal?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Journals" },
        { time: "10-15 min", activity: "Direct Instruction - Journal Entry Format" },
        { time: "15-20 min", activity: "Direct Instruction - Journalizing" },
        { time: "20-25 min", activity: "Direct Instruction - Source Documents" },
        { time: "25-30 min", activity: "Direct Instruction - Journals to Ledgers" },
        { time: "30-35 min", activity: "Direct Instruction - Special Journals" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The book of original entry",
        prac_002: "General and special journals",
        prac_003: "Date, accounts, amounts, explanation",
        prac_004: "Debit Cash ₦5,000, Credit Sales ₦5,000",
        prac_005: "Recording credit sales",
        prac_006: "Recording transactions in a journal",
        prac_007: "Evidence of a transaction",
        prac_008: "Errors affect all accounting records",
        prac_009: "Journals are posted to ledgers",
        prac_010: "An entry with multiple debits or credits",
        prac_011: "An entry made at the end of a period",
        prac_012: "An entry that reverses a previous entry",
        prac_013: "It has made it faster and more accurate",
        prac_014: "They provide evidence and support entries",
        prac_015: "A record of transactions"
      },
      assessment: {
        ass_001: "The book of original entry",
        ass_002: "General and special journals",
        ass_003: "Date, accounts, amounts, explanation",
        ass_004: "Debit Cash ₦5,000, Credit Sales ₦5,000",
        ass_005: "Recording credit sales",
        ass_006: "Recording transactions in a journal",
        ass_007: "Evidence of a transaction",
        ass_008: "Errors affect all accounting records",
        ass_009: "Journals are posted to ledgers",
        ass_010: "An entry with multiple debits or credits"
      }
    },
    extensionActivities: [
      "Practice journalizing transactions",
      "Create a sales journal",
      "Analyze source documents",
      "Research accounting software"
    ],
    differentiation: {
      struggling: [
        "Focus on basic journal entries",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research advanced journal entries",
        "Study special journals",
        "Analyze adjusting entries",
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
      title: "Journal Entry Format",
      description: "Diagram showing journal entry format",
      url: "/diagrams/journal-entry-format.png",
      alt: "Journal entry format diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Types of Journals",
      description: "Diagram showing types of journals",
      url: "/diagrams/types-of-journals.png",
      alt: "Types of journals diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Journal to Ledger Process",
      description: "Diagram showing journal to ledger process",
      url: "/diagrams/journal-to-ledger.png",
      alt: "Journal to ledger process diagram"
    }
  ]
};