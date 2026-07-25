// Location: src/data/lessons/business/accounting/depreciation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_depreciation",
  subject: "Accounting",
  topic: "Depreciation",
  name: "Depreciation",
  icon: "📉",
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
    "Understanding of basic accounting",
    "Knowledge of assets",
    "Understanding of the accounting equation",
    "Basic numeracy skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Accounting lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define depreciation and explain its importance",
      indicator: "Student can explain what depreciation is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the causes of depreciation",
      indicator: "Student can list the main causes of depreciation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of useful life",
      indicator: "Student can describe what useful life means"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the straight-line method of depreciation",
      indicator: "Student can calculate depreciation using the straight-line method"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the reducing balance method of depreciation",
      indicator: "Student can calculate depreciation using the reducing balance method"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the sum of digits method of depreciation",
      indicator: "Student can calculate depreciation using the sum of digits method"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the units of production method of depreciation",
      indicator: "Student can calculate depreciation using the units of production method"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the factors affecting depreciation",
      indicator: "Student can explain what factors influence depreciation"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of depreciation in accounting",
      indicator: "Student can discuss why depreciation is important"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the impact of depreciation on financial statements",
      indicator: "Student can discuss how depreciation affects financial statements"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of residual value",
      indicator: "Student can describe residual value and its importance"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of depreciation in tax",
      indicator: "Student can explain the tax implications of depreciation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of accumulated depreciation",
      indicator: "Student can describe accumulated depreciation"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the choice of depreciation method",
      indicator: "Student can discuss factors in choosing a depreciation method"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the importance of depreciation in asset management",
      indicator: "Student can discuss depreciation in managing assets"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Depreciation - Allocating Asset Cost",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about depreciation, methods of depreciation, and its impact on financial statements."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Depreciation</h2>
      <p><strong>Depreciation</strong> is the systematic allocation of the cost of a tangible asset over its useful life. It represents the decline in value of an asset due to wear and tear, age, or obsolescence. Depreciation is important for matching the cost of an asset with the revenue it generates.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📉 Key Concepts</h3>
          <ul>
            <li>✓ Causes of Depreciation</li>
            <li>✓ Straight-Line Method</li>
            <li>✓ Reducing Balance Method</li>
            <li>✓ Sum of Digits Method</li>
            <li>✓ Units of Production Method</li>
            <li>✓ Accumulated Depreciation</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Depreciation is a non-cash expense</li>
            <li>• It affects the balance sheet and income statement</li>
            <li>• Different methods can be used</li>
            <li>• Depreciation is important for tax</li>
            <li>• Assets have a limited useful life</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Depreciation Matters</h4>
        <p>Depreciation ensures that the cost of an asset is matched with the revenue it generates, providing a more accurate picture of financial performance.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Depreciation?",
        objective: "obj_001",
        text: `
          <h3>Understanding Depreciation</h3>
          <p><strong>Depreciation</strong> is the allocation of the cost of a tangible asset over its useful life. It reflects the decline in value of the asset.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• <strong>Non-cash expense:</strong> No cash outflow</li>
                <li>• <strong>Allocation:</strong> Spreading cost over time</li>
                <li>• <strong>Useful life:</strong> Expected period of use</li>
                <li>• <strong>Residual value:</strong> Value at end of life</li>
                <li>• <strong>Impacts:</strong> Financial statements</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Matches costs with revenues</li>
                <li>• Shows true asset value</li>
                <li>• Affects profit calculation</li>
                <li>• Important for tax</li>
                <li>• Helps with asset management</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Causes of Depreciation",
        objective: "obj_002",
        text: `
          <h3>Causes of Depreciation</h3>
          <p>Depreciation is caused by several factors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Causes</h4>
              <ul>
                <li>• <strong>Wear and tear:</strong> Normal use</li>
                <li>• <strong>Deterioration:</strong> Age and weather</li>
                <li>• <strong>Damage:</strong> Accidents</li>
                <li>• <strong>Obsolescence:</strong> New technology</li>
                <li>• <strong>Depletion:</strong> Natural resources</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Economic Causes</h4>
              <ul>
                <li>• <strong>Technological change:</strong> New technology</li>
                <li>• <strong>Market changes:</strong> Demand decrease</li>
                <li>• <strong>Legal changes:</strong> Regulations</li>
                <li>• <strong>Economic conditions:</strong> Market factors</li>
                <li>• <strong>Functional obsolescence:</strong> Outdated</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Depreciation Methods",
        objective: "obj_004",
        text: `
          <h3>Straight-Line Method</h3>
          <p>The <strong>straight-line method</strong> is the simplest and most common depreciation method.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Formula:</h4>
            <p><strong>Annual Depreciation = (Cost - Residual Value) / Useful Life</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• <strong>Cost:</strong> ₦100,000</li>
              <li>• <strong>Residual Value:</strong> ₦10,000</li>
              <li>• <strong>Useful Life:</strong> 5 years</li>
              <li>• Annual Depreciation = (100,000 - 10,000) / 5</li>
              <li>• <strong>Annual Depreciation = ₦18,000</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Reducing Balance Method",
        objective: "obj_005",
        text: `
          <h3>Reducing Balance Method</h3>
          <p>The <strong>reducing balance method</strong> applies a fixed percentage to the reducing book value of the asset.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Formula:</h4>
            <p><strong>Depreciation = Rate × Book Value</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• <strong>Cost:</strong> ₦100,000</li>
              <li>• <strong>Rate:</strong> 20%</li>
              <li>• <strong>Year 1:</strong> 100,000 × 20% = ₦20,000</li>
              <li>• <strong>Book Value:</strong> 100,000 - 20,000 = ₦80,000</li>
              <li>• <strong>Year 2:</strong> 80,000 × 20% = ₦16,000</li>
              <li>• <strong>Book Value:</strong> 80,000 - 16,000 = ₦64,000</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Sum of Digits Method",
        objective: "obj_006",
        text: `
          <h3>Sum of Digits Method</h3>
          <p>The <strong>sum of digits method</strong> accelerates depreciation by applying a decreasing fraction to the depreciable amount.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Steps:</h4>
            <ul>
              <li>1. Sum of digits = n(n+1)/2</li>
              <li>2. Fraction = Remaining life / Sum of digits</li>
              <li>3. Depreciation = Fraction × (Cost - Residual Value)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• <strong>Cost:</strong> ₦100,000</li>
              <li>• <strong>Residual Value:</strong> ₦10,000</li>
              <li>• <strong>Useful Life:</strong> 5 years</li>
              <li>• <strong>Sum of digits:</strong> 5+4+3+2+1 = 15</li>
              <li>• <strong>Year 1:</strong> 5/15 × 90,000 = ₦30,000</li>
              <li>• <strong>Year 2:</strong> 4/15 × 90,000 = ₦24,000</li>
              <li>• <strong>Year 3:</strong> 3/15 × 90,000 = ₦18,000</li>
              <li>• <strong>Year 4:</strong> 2/15 × 90,000 = ₦12,000</li>
              <li>• <strong>Year 5:</strong> 1/15 × 90,000 = ₦6,000</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Units of Production Method",
        objective: "obj_007",
        text: `
          <h3>Units of Production Method</h3>
          <p>The <strong>units of production method</strong> bases depreciation on actual usage rather than time.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Formula:</h4>
            <p><strong>Depreciation per Unit = (Cost - Residual Value) / Total Units</strong></p>
            <p><strong>Annual Depreciation = Units Used × Depreciation per Unit</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• <strong>Cost:</strong> ₦100,000</li>
              <li>• <strong>Residual Value:</strong> ₦10,000</li>
              <li>• <strong>Total Units:</strong> 10,000 units</li>
              <li>• <strong>Units Used Year 1:</strong> 2,000</li>
              <li>• <strong>Depreciation per Unit:</strong> (100,000-10,000)/10,000 = ₦9</li>
              <li>• <strong>Year 1 Depreciation:</strong> 2,000 × 9 = ₦18,000</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Accumulated Depreciation",
        objective: "obj_013",
        text: `
          <h3>Accumulated Depreciation</h3>
          <p><strong>Accumulated depreciation</strong> is the total depreciation recorded for an asset since its acquisition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• <strong>Contra-asset account:</strong> Reduces asset value</li>
                <li>• <strong>Accumulated:</strong> Total depreciation to date</li>
                <li>• <strong>Book value:</strong> Cost - Accumulated depreciation</li>
                <li>• <strong>Shows:</strong> Asset's remaining value</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Cost:</strong> ₦100,000</li>
                <li>• <strong>Accumulated Depreciation:</strong> ₦40,000</li>
                <li>• <strong>Book Value:</strong> ₦100,000 - ₦40,000 = ₦60,000</li>
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
          <h4>📉 Depreciation</h4>
          <ul>
            <li>• Allocation of asset cost over time</li>
            <li>• Causes: wear and tear, obsolescence</li>
            <li>• Methods: straight-line, reducing balance</li>
            <li>• Accumulated depreciation reduces asset value</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Useful life and residual value</li>
            <li>• Impact on financial statements</li>
            <li>• Choice of method matters</li>
            <li>• Important for tax and management</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Depreciation ensures that asset costs are matched with the revenue they generate, providing a true picture of financial performance.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Depreciation is a cash expense",
        correction: "Depreciation is a non-cash expense",
        explanation: "Depreciation does not involve any cash outflow."
      },
      {
        id: "mis_002",
        misconception: "All depreciation methods give the same result",
        correction: "Different methods give different results",
        explanation: "The choice of method affects the amount of depreciation each year."
      },
      {
        id: "mis_003",
        misconception: "Depreciation increases the value of an asset",
        correction: "Depreciation decreases the value of an asset",
        explanation: "Depreciation reflects the decline in value of an asset."
      },
      {
        id: "mis_004",
        misconception: "Depreciation is only for tax purposes",
        correction: "Depreciation serves many purposes",
        explanation: "Depreciation is important for financial reporting, asset management, and tax."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Financial Reporting",
        description: "Depreciation affects financial statements.",
        example: "Balance sheet, income statement"
      },
      {
        id: "app_002",
        title: "Tax Planning",
        description: "Depreciation is important for tax.",
        example: "Reducing taxable income"
      },
      {
        id: "app_003",
        title: "Asset Management",
        description: "Depreciation helps manage assets.",
        example: "Planning for replacement"
      },
      {
        id: "app_004",
        title: "Decision Making",
        description: "Depreciation supports decisions.",
        example: "Investment and budgeting"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Depreciation", definition: "Allocation of asset cost over useful life." },
    { term: "Useful Life", definition: "Expected period of asset use." },
    { term: "Residual Value", definition: "Value at the end of useful life." },
    { term: "Book Value", definition: "Cost minus accumulated depreciation." },
    { term: "Accumulated Depreciation", definition: "Total depreciation to date." },
    { term: "Straight-Line Method", definition: "Equal depreciation each year." },
    { term: "Reducing Balance Method", definition: "Declining depreciation each year." },
    { term: "Sum of Digits Method", definition: "Accelerated depreciation method." },
    { term: "Units of Production Method", definition: "Depreciation based on usage." },
    { term: "Wear and Tear", definition: "Physical deterioration." },
    { term: "Obsolescence", definition: "Becoming outdated." },
    { term: "Capital Asset", definition: "A long-term asset." },
    { term: "Contra-Asset Account", definition: "An account that reduces asset value." },
    { term: "Depreciable Amount", definition: "Cost minus residual value." },
    { term: "Straight-Line Rate", definition: "1/Useful Life." },
    { term: "Net Book Value", definition: "Cost minus accumulated depreciation." },
    { term: "Impairment", definition: "A permanent decline in value." },
    { term: "Capital Expenditure", definition: "Spending on long-term assets." },
    { term: "Revenue Expenditure", definition: "Spending on day-to-day operations." },
    { term: "Tax Depreciation", definition: "Depreciation for tax purposes." }
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
      question: "What is depreciation?",
      type: "multiple_choice",
      options: [
        "The increase in asset value",
        "The allocation of asset cost over useful life",
        "The cash outflow for assets",
        "The sale of assets"
      ],
      answer: "The allocation of asset cost over useful life",
      explanation: "Depreciation is the allocation of asset cost over useful life."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a cause of depreciation?",
      type: "multiple_choice",
      options: [
        "Wear and tear",
        "Increase in value",
        "Market growth",
        "Economic expansion"
      ],
      answer: "Wear and tear",
      explanation: "Wear and tear is a cause of depreciation."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is useful life?",
      type: "multiple_choice",
      options: [
        "The expected period of asset use",
        "The total life of an asset",
        "The time until sale",
        "The time until repair"
      ],
      answer: "The expected period of asset use",
      explanation: "Useful life is the expected period of asset use."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the straight-line depreciation formula?",
      type: "multiple_choice",
      options: [
        "(Cost - Residual Value) / Useful Life",
        "Cost × Useful Life",
        "Cost / Residual Value",
        "(Cost + Residual Value) / Useful Life"
      ],
      answer: "(Cost - Residual Value) / Useful Life",
      explanation: "Straight-line depreciation = (Cost - Residual Value) / Useful Life."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the reducing balance method?",
      type: "multiple_choice",
      options: [
        "Equal depreciation each year",
        "Declining depreciation each year",
        "Depreciation based on usage",
        "Depreciation based on sum of digits"
      ],
      answer: "Declining depreciation each year",
      explanation: "The reducing balance method has declining depreciation each year."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the sum of digits method?",
      type: "multiple_choice",
      options: [
        "Equal depreciation each year",
        "Declining depreciation each year",
        "Depreciation based on usage",
        "An accelerated depreciation method"
      ],
      answer: "An accelerated depreciation method",
      explanation: "The sum of digits method is an accelerated depreciation method."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the units of production method?",
      type: "multiple_choice",
      options: [
        "Depreciation based on time",
        "Depreciation based on usage",
        "Depreciation based on value",
        "Depreciation based on age"
      ],
      answer: "Depreciation based on usage",
      explanation: "The units of production method bases depreciation on actual usage."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What factors affect depreciation?",
      type: "multiple_choice",
      options: [
        "Cost and useful life",
        "Residual value",
        "Depreciation method",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Cost, useful life, residual value, and method all affect depreciation."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is depreciation important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It matches costs with revenues",
        "It only affects tax",
        "It only affects cash flow"
      ],
      answer: "It matches costs with revenues",
      explanation: "Depreciation matches costs with the revenues they generate."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How does depreciation affect the income statement?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It increases expenses",
        "It decreases expenses",
        "It increases revenue"
      ],
      answer: "It increases expenses",
      explanation: "Depreciation is an expense that reduces profit."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is residual value?",
      type: "multiple_choice",
      options: [
        "The value at the end of useful life",
        "The initial cost",
        "The current market value",
        "The replacement cost"
      ],
      answer: "The value at the end of useful life",
      explanation: "Residual value is the estimated value at the end of useful life."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does depreciation affect tax?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It reduces taxable income",
        "It increases taxable income",
        "It only affects large businesses"
      ],
      answer: "It reduces taxable income",
      explanation: "Depreciation reduces taxable income."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is accumulated depreciation?",
      type: "multiple_choice",
      options: [
        "Current year's depreciation",
        "Total depreciation to date",
        "Future depreciation",
        "Depreciation for tax"
      ],
      answer: "Total depreciation to date",
      explanation: "Accumulated depreciation is the total depreciation recorded to date."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How do you choose a depreciation method?",
      type: "multiple_choice",
      options: [
        "Randomly",
        "Based on the asset type and business needs",
        "Only use straight-line",
        "Use the most expensive method"
      ],
      answer: "Based on the asset type and business needs",
      explanation: "The choice of depreciation method depends on the asset type and business needs."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Why is depreciation important in asset management?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps plan for replacement",
        "It only affects accounting",
        "It only affects tax"
      ],
      answer: "It helps plan for replacement",
      explanation: "Depreciation helps in planning for asset replacement."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_depreciation",
    title: "Depreciation Quiz",
    description: "Test your understanding of depreciation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is depreciation?",
        type: "short_answer",
        answer_key: "The allocation of asset cost over useful life",
        explanation: "Depreciation is the allocation of asset cost over useful life."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a cause of depreciation?",
        type: "short_answer",
        answer_key: "Wear and tear (or any valid)",
        explanation: "Wear and tear is a cause of depreciation."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is useful life?",
        type: "short_answer",
        answer_key: "The expected period of asset use",
        explanation: "Useful life is the expected period of asset use."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the straight-line depreciation formula?",
        type: "short_answer",
        answer_key: "(Cost - Residual Value) / Useful Life",
        explanation: "Straight-line depreciation = (Cost - Residual Value) / Useful Life."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the reducing balance method?",
        type: "short_answer",
        answer_key: "Declining depreciation each year",
        explanation: "The reducing balance method has declining depreciation each year."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the sum of digits method?",
        type: "short_answer",
        answer_key: "An accelerated depreciation method",
        explanation: "The sum of digits method is an accelerated depreciation method."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the units of production method?",
        type: "short_answer",
        answer_key: "Depreciation based on usage",
        explanation: "The units of production method bases depreciation on usage."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What factors affect depreciation?",
        type: "short_answer",
        answer_key: "Cost, useful life, residual value, and method",
        explanation: "These factors all affect depreciation."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Why is depreciation important?",
        type: "short_answer",
        answer_key: "It matches costs with revenues",
        explanation: "Depreciation matches costs with the revenues they generate."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is accumulated depreciation?",
        type: "short_answer",
        answer_key: "Total depreciation to date",
        explanation: "Accumulated depreciation is the total depreciation recorded to date."
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
        "Understand depreciation and its causes",
        "Explain the straight-line method",
        "Describe the reducing balance method",
        "Understand other depreciation methods"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is depreciation?" },
        { time: "5-10 min", activity: "Direct Instruction - Causes of Depreciation" },
        { time: "10-15 min", activity: "Direct Instruction - Straight-Line Method" },
        { time: "15-20 min", activity: "Direct Instruction - Reducing Balance Method" },
        { time: "20-25 min", activity: "Direct Instruction - Sum of Digits Method" },
        { time: "25-30 min", activity: "Direct Instruction - Units of Production Method" },
        { time: "30-35 min", activity: "Direct Instruction - Accumulated Depreciation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The allocation of asset cost over useful life",
        prac_002: "Wear and tear",
        prac_003: "The expected period of asset use",
        prac_004: "(Cost - Residual Value) / Useful Life",
        prac_005: "Declining depreciation each year",
        prac_006: "An accelerated depreciation method",
        prac_007: "Depreciation based on usage",
        prac_008: "All of the above",
        prac_009: "It matches costs with revenues",
        prac_010: "It increases expenses",
        prac_011: "The value at the end of useful life",
        prac_012: "It reduces taxable income",
        prac_013: "Total depreciation to date",
        prac_014: "Based on the asset type and business needs",
        prac_015: "It helps plan for replacement"
      },
      assessment: {
        ass_001: "The allocation of asset cost over useful life",
        ass_002: "Wear and tear (or any valid)",
        ass_003: "The expected period of asset use",
        ass_004: "(Cost - Residual Value) / Useful Life",
        ass_005: "Declining depreciation each year",
        ass_006: "An accelerated depreciation method",
        ass_007: "Depreciation based on usage",
        ass_008: "Cost, useful life, residual value, and method",
        ass_009: "It matches costs with revenues",
        ass_010: "Total depreciation to date"
      }
    },
    extensionActivities: [
      "Calculate depreciation using different methods",
      "Research depreciation for tax purposes",
      "Analyze the impact of depreciation",
      "Study asset management practices"
    ],
    differentiation: {
      struggling: [
        "Focus on straight-line method",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research tax depreciation",
        "Study asset impairment",
        "Analyze depreciation choices",
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
      title: "Depreciation Methods Comparison",
      description: "Diagram comparing depreciation methods",
      url: "/diagrams/depreciation-methods.png",
      alt: "Depreciation methods comparison diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Straight-Line Depreciation",
      description: "Diagram showing straight-line depreciation",
      url: "/diagrams/straight-line-depreciation.png",
      alt: "Straight-line depreciation diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Reducing Balance Depreciation",
      description: "Diagram showing reducing balance depreciation",
      url: "/diagrams/reducing-balance-depreciation.png",
      alt: "Reducing balance depreciation diagram"
    }
  ]
};