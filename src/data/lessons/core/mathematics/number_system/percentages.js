// Location: src/data/lessons/core/mathematics/number_system/percentages.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_percentages",
  subject: "Mathematics",
  topic: "Number System",
  name: "Percentages",
  icon: "%",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define percentages and convert between percentages and fractions",
      indicator: "Student can explain what a percentage is and convert % to fractions"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Convert between percentages and decimals",
      indicator: "Student can convert % to decimals and vice versa"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Find the percentage of a quantity",
      indicator: "Student can calculate x% of a number"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate percentage increase and decrease",
      indicator: "Student can calculate percentage change"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Find the original amount after a percentage change",
      indicator: "Student can find the original value"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate simple interest using percentages",
      indicator: "Student can use I = PRT/100"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex percentage problems",
      indicator: "Student can solve multi-step percentage problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply percentages to real-world problems",
      indicator: "Student can solve practical percentage problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Calculate compound interest",
      indicator: "Student can use the compound interest formula"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Percentages - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering percentages, conversions, increase/decrease, and interest."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Percentages?</h2>
      <p>A <strong>percentage</strong> is a number out of 100.</p>
      <p>The word "percent" means "per hundred".</p>
      <p>Example: 25% = 25/100 = 1/4 = 0.25</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Converting Percentages to Fractions",
        objective: "obj_001",
        text: `
          <h3>Method</h3>
          <p>Write the percentage as a fraction over 100 and simplify.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 25%
            <ul>
              <li>= 25/100 = 1/4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 60%
            <ul>
              <li>= 60/100 = 3/5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Converting Percentages to Decimals",
        objective: "obj_002",
        text: `
          <h3>Method</h3>
          <p>Divide the percentage by 100.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 25%
            <ul>
              <li>= 25/100 = 0.25</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 60%
            <ul>
              <li>= 60/100 = 0.60</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Percentage of a Quantity",
        objective: "obj_003",
        text: `
          <h3>Method</h3>
          <p>Multiply the quantity by the percentage (as a decimal or fraction).</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 25% of 80
            <ul>
              <li>= 25/100 × 80 = 0.25 × 80 = 20</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 15% of 200
            <ul>
              <li>= 15/100 × 200 = 0.15 × 200 = 30</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Percentage Increase",
        objective: "obj_004",
        text: `
          <h3>Formula</h3>
          <p><strong>% Increase = (Increase / Original) × 100</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A price increases from $50 to $60.
            <ul>
              <li>Increase = $10</li>
              <li>% Increase = (10/50) × 100 = 20%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Percentage Decrease",
        objective: "obj_004",
        text: `
          <h3>Formula</h3>
          <p><strong>% Decrease = (Decrease / Original) × 100</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A price decreases from $80 to $64.
            <ul>
              <li>Decrease = $16</li>
              <li>% Decrease = (16/80) × 100 = 20%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Finding the Original Amount",
        objective: "obj_005",
        text: `
          <h3>Method</h3>
          <p>Use: Original = New / (1 ± %/100)</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> After a 20% increase, the price is $60. What was the original?
            <ul>
              <li>Original = 60 / 1.20 = $50</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Simple Interest",
        objective: "obj_006",
        text: `
          <h3>Formula</h3>
          <p><strong>I = PRT/100</strong></p>
          <ul>
            <li><strong>P</strong> = Principal (amount borrowed)</li>
            <li><strong>R</strong> = Rate (%)</li>
            <li><strong>T</strong> = Time (in years)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> $1000 at 5% for 3 years
            <ul>
              <li>I = (1000 × 5 × 3)/100 = $150</li>
              <li>Total = $1150</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Compound Interest",
        objective: "obj_009",
        text: `
          <h3>Formula</h3>
          <p><strong>A = P(1 + R/100)ⁿ</strong></p>
          <ul>
            <li><strong>A</strong> = Amount after n years</li>
            <li><strong>P</strong> = Principal</li>
            <li><strong>R</strong> = Rate (%)</li>
            <li><strong>n</strong> = Number of years</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> $1000 at 5% for 3 years
            <ul>
              <li>A = 1000(1 + 0.05)³</li>
              <li>= 1000(1.05)³ = 1000 × 1.157625 = $1157.63</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Applications of Percentages",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A store has a 20% off sale. A shirt costs $40. What is the sale price?
            <ul>
              <li>Discount = 20% of 40 = $8</li>
              <li>Sale price = $40 - $8 = $32</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Percent = out of 100</li>
        <li>% to fraction: divide by 100 and simplify</li>
        <li>% to decimal: divide by 100</li>
        <li>Percentage of quantity: multiply</li>
        <li>% increase: (increase/original) × 100</li>
        <li>% decrease: (decrease/original) × 100</li>
        <li>Simple interest: I = PRT/100</li>
        <li>Compound interest: A = P(1 + R/100)ⁿ</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Percentage", definition: "A number out of 100." },
    { term: "Discount", definition: "A reduction in price, often as a percentage." },
    { term: "Interest", definition: "Money paid for borrowing money." },
    { term: "Principal", definition: "The original amount of money borrowed or invested." },
    { term: "Compound Interest", definition: "Interest calculated on both principal and accumulated interest." },
    { term: "Simple Interest", definition: "Interest calculated only on the principal." }
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
      question: "What is 25% as a fraction?",
      type: "multiple_choice",
      options: ["1/4", "1/5", "1/3", "1/2"],
      answer: "1/4",
      explanation: "25% = 25/100 = 1/4"
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is 50% as a fraction?",
      type: "multiple_choice",
      options: ["1/2", "1/3", "1/4", "1/5"],
      answer: "1/2",
      explanation: "50% = 50/100 = 1/2"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is 25% as a decimal?",
      type: "multiple_choice",
      options: ["0.25", "2.5", "25.0", "0.025"],
      answer: "0.25",
      explanation: "25/100 = 0.25"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "25% of 80 = ?",
      type: "multiple_choice",
      options: ["15", "20", "25", "30"],
      answer: "20",
      explanation: "25/100 × 80 = 20"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "15% of 200 = ?",
      type: "multiple_choice",
      options: ["25", "30", "35", "40"],
      answer: "30",
      explanation: "15/100 × 200 = 30"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Price increases from $50 to $60. % increase = ?",
      type: "multiple_choice",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "(10/50) × 100 = 20%"
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Price decreases from $80 to $64. % decrease = ?",
      type: "multiple_choice",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "(16/80) × 100 = 20%"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "After 20% increase, price is $60. Original = ?",
      type: "multiple_choice",
      options: ["$40", "$48", "$50", "$55"],
      answer: "$50",
      explanation: "60 / 1.20 = $50"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Simple interest: $1000 at 5% for 2 years = ?",
      type: "multiple_choice",
      options: ["$50", "$100", "$150", "$200"],
      answer: "$100",
      explanation: "(1000 × 5 × 2)/100 = $100"
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "medium",
      question: "Compound interest: $1000 at 5% for 2 years = ?",
      type: "multiple_choice",
      options: ["$100", "$102.50", "$105", "$107.50"],
      answer: "$102.50",
      explanation: "A = 1000(1.05)² = 1102.50, Interest = $102.50"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A shirt costs $40 with 20% off. Sale price = ?",
      type: "multiple_choice",
      options: ["$32", "$32", "$36", "$38"],
      answer: "$32",
      explanation: "40 - (20% of 40) = 40 - 8 = $32"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A $50 item is discounted to $40. What % discount?",
      type: "multiple_choice",
      options: ["10%", "15%", "20%", "25%"],
      answer: "20%",
      explanation: "Decrease = $10, (10/50) × 100 = 20%"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Compound interest: $500 at 4% for 3 years = ?",
      type: "multiple_choice",
      options: ["$60", "$62.43", "$64.87", "$65.50"],
      answer: "$62.43",
      explanation: "A = 500(1.04)³ = 562.43, Interest = $62.43"
    },
    {
      id: "prac_014",
      objective: "obj_005",
      difficulty: "hard",
      question: "After 15% increase, price is $57.50. Original = ?",
      type: "multiple_choice",
      options: ["$45", "$48", "$50", "$52"],
      answer: "$50",
      explanation: "57.50 / 1.15 = $50"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "A car costs $20,000. Depreciates 10% per year. Value after 2 years = ?",
      type: "multiple_choice",
      options: ["$16,000", "$16,200", "$16,400", "$18,000"],
      answer: "$16,200",
      explanation: "20000(0.9)² = 20000 × 0.81 = $16,200"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_percentages",
    title: "Percentages Quiz",
    description: "Test your understanding of percentages",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is 30% as a fraction?",
        type: "short_answer",
        answer_key: "3/10",
        explanation: "30/100 = 3/10"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is 40% as a decimal?",
        type: "short_answer",
        answer_key: "0.40",
        explanation: "40/100 = 0.40"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "20% of 150 = ?",
        type: "short_answer",
        answer_key: "30",
        explanation: "20/100 × 150 = 30"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Price from $40 to $50. % increase = ?",
        type: "short_answer",
        answer_key: "25%",
        explanation: "(10/40) × 100 = 25%"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Price from $60 to $45. % decrease = ?",
        type: "short_answer",
        answer_key: "25%",
        explanation: "(15/60) × 100 = 25%"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "After 10% increase, price is $55. Original = ?",
        type: "short_answer",
        answer_key: "$50",
        explanation: "55 / 1.10 = $50"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Simple interest: $2000 at 5% for 4 years = ?",
        type: "short_answer",
        answer_key: "$400",
        explanation: "(2000 × 5 × 4)/100 = $400"
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "Compound interest: $1000 at 5% for 3 years = ?",
        type: "short_answer",
        answer_key: "$157.63",
        explanation: "1000(1.05)³ = 1157.63, Interest = $157.63"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "A $60 item with 15% discount. Sale price = ?",
        type: "short_answer",
        answer_key: "$51",
        explanation: "60 - (15% of 60) = 60 - 9 = $51"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A $80 item is on sale for $68. What % discount?",
        type: "short_answer",
        answer_key: "15%",
        explanation: "Decrease = $12, (12/80) × 100 = 15%"
      }
    ]
  }
};