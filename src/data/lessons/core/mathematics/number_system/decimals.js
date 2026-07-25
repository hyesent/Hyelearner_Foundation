// Location: src/data/lessons/core/mathematics/number_system/decimals.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_decimals",
  subject: "Mathematics",
  topic: "Number System",
  name: "Decimals",
  icon: "🔢",
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
      description: "Define decimals and identify place values",
      indicator: "Student can explain what a decimal is and identify tenths, hundredths, etc."
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Convert between fractions and decimals",
      indicator: "Student can convert simple fractions to decimals and vice versa"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Compare and order decimals",
      indicator: "Student can compare and order decimal numbers"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Add and subtract decimals",
      indicator: "Student can add and subtract decimal numbers"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Multiply and divide decimals",
      indicator: "Student can multiply and divide decimal numbers"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Round decimals to a given number of decimal places",
      indicator: "Student can round decimals correctly"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex problems involving decimals",
      indicator: "Student can solve multi-step decimal problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply decimals to real-world problems",
      indicator: "Student can solve practical decimal problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve equations involving decimals",
      indicator: "Student can solve decimal equations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Decimals - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering decimal operations, conversion, and rounding."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Decimals?</h2>
      <p>A <strong>decimal</strong> is a way of writing fractions using a decimal point.</p>
      <p>Example: 0.5 = 1/2, 0.75 = 3/4</p>
      <p>Decimal places: 0.1 (tenths), 0.01 (hundredths), 0.001 (thousandths)</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Place Value",
        objective: "obj_001",
        text: `
          <h3>Place Values</h3>
          <ul>
            <li><strong>0.1</strong> = 1/10 (one tenth)</li>
            <li><strong>0.01</strong> = 1/100 (one hundredth)</li>
            <li><strong>0.001</strong> = 1/1000 (one thousandth)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3.456
            <ul>
              <li>3 = whole number</li>
              <li>4 = tenths</li>
              <li>5 = hundredths</li>
              <li>6 = thousandths</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Converting Fractions to Decimals",
        objective: "obj_002",
        text: `
          <h3>Method</h3>
          <p>Divide the numerator by the denominator.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Convert 3/4 to a decimal
            <ul>
              <li>3 ÷ 4 = 0.75</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Convert 1/3 to a decimal
            <ul>
              <li>1 ÷ 3 = 0.333... (recurring)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Converting Decimals to Fractions",
        objective: "obj_002",
        text: `
          <h3>Method</h3>
          <p>Write the decimal as a fraction with denominator as a power of 10.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 0.75
            <ul>
              <li>= 75/100 = 3/4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 0.125
            <ul>
              <li>= 125/1000 = 1/8</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Comparing Decimals",
        objective: "obj_003",
        text: `
          <h3>How to Compare</h3>
          <p>Compare digit by digit from left to right.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 0.35 and 0.4
            <ul>
              <li>0.35 = 0.350</li>
              <li>0.4 = 0.400</li>
              <li>0.4 > 0.35</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Adding and Subtracting Decimals",
        objective: "obj_004",
        text: `
          <h3>Method</h3>
          <p>Line up the decimal points, then add/subtract.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 3.45 + 1.23
            <ul>
              <li>3.45</li>
              <li>+1.23</li>
              <li>=4.68</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 7.8 - 2.35
            <ul>
              <li>7.80</li>
              <li>-2.35</li>
              <li>=5.45</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Multiplying Decimals",
        objective: "obj_005",
        text: `
          <h3>Method</h3>
          <p>Multiply as whole numbers, then count decimal places.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 3.2 × 1.5
            <ul>
              <li>32 × 15 = 480</li>
              <li>3.2 has 1 decimal place, 1.5 has 1 decimal place → total 2</li>
              <li>= 4.80</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Dividing Decimals",
        objective: "obj_005",
        text: `
          <h3>Method</h3>
          <p>Multiply by powers of 10 to make the divisor a whole number.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 7.5 ÷ 0.5
            <ul>
              <li>7.5 ÷ 0.5 = 75 ÷ 5 = 15</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Rounding Decimals",
        objective: "obj_006",
        text: `
          <h3>Rules</h3>
          <p>Look at the digit after the required decimal place.</p>
          <ul>
            <li>If it's ≥ 5, round up</li>
            <li>If it's < 5, round down</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Round 3.456 to 2 decimal places
            <ul>
              <li>3.45|6 → 6 ≥ 5 → 3.46</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Round 7.342 to 1 decimal place
            <ul>
              <li>7.3|42 → 4 < 5 → 7.3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Applications of Decimals",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A $25 item is on sale for 15% off. What is the discount?
            <ul>
              <li>15% = 0.15</li>
              <li>Discount = 25 × 0.15 = 3.75</li>
              <li>Final price = 25 - 3.75 = $21.25</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Decimals represent parts of a whole</li>
        <li>Convert fractions to decimals by dividing</li>
        <li>Compare decimals digit by digit</li>
        <li>Add/subtract: line up decimal points</li>
        <li>Multiply: multiply then count decimal places</li>
        <li>Divide: multiply to make divisor whole</li>
        <li>Round: look at next digit (≥5 round up)</li>
        <li>Use decimals in money, measurements, percentages</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Decimal", definition: "A number with a decimal point representing parts of a whole." },
    { term: "Tenths", definition: "The first decimal place (1/10)." },
    { term: "Hundredths", definition: "The second decimal place (1/100)." },
    { term: "Thousandths", definition: "The third decimal place (1/1000)." },
    { term: "Rounding", definition: "Approximating a number to a given number of decimal places." },
    { term: "Recurring Decimal", definition: "A decimal that repeats indefinitely." }
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
      question: "What is 0.3 as a fraction?",
      type: "multiple_choice",
      options: ["3/10", "3/100", "1/3", "3/1000"],
      answer: "3/10",
      explanation: "0.3 = 3/10 (tenths)"
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is 0.75 as a fraction?",
      type: "multiple_choice",
      options: ["3/4", "75/10", "7/5", "15/20"],
      answer: "3/4",
      explanation: "0.75 = 75/100 = 3/4"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Convert 1/4 to a decimal.",
      type: "multiple_choice",
      options: ["0.25", "0.4", "0.5", "0.125"],
      answer: "0.25",
      explanation: "1 ÷ 4 = 0.25"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Convert 3/5 to a decimal.",
      type: "multiple_choice",
      options: ["0.3", "0.35", "0.5", "0.6"],
      answer: "0.6",
      explanation: "3 ÷ 5 = 0.6"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is larger: 0.45 or 0.5?",
      type: "multiple_choice",
      options: ["0.45", "0.5", "Equal", "Cannot determine"],
      answer: "0.5",
      explanation: "0.5 = 0.50 > 0.45"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "3.45 + 1.23 = ?",
      type: "multiple_choice",
      options: ["4.68", "4.68", "4.23", "4.45"],
      answer: "4.68",
      explanation: "3.45 + 1.23 = 4.68"
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "7.8 - 2.35 = ?",
      type: "multiple_choice",
      options: ["5.45", "5.45", "5.55", "5.65"],
      answer: "5.45",
      explanation: "7.80 - 2.35 = 5.45"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "3.2 × 1.5 = ?",
      type: "multiple_choice",
      options: ["4.8", "4.8", "4.5", "5.0"],
      answer: "4.8",
      explanation: "32 × 15 = 480 → 4.80"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Round 3.456 to 2 decimal places.",
      type: "multiple_choice",
      options: ["3.46", "3.45", "3.5", "3.456"],
      answer: "3.46",
      explanation: "3.45|6 → 6 ≥ 5 → 3.46"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Round 7.342 to 1 decimal place.",
      type: "multiple_choice",
      options: ["7.3", "7.4", "7.34", "7.0"],
      answer: "7.3",
      explanation: "7.3|42 → 4 < 5 → 7.3"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "3.45 × 2.5 = ?",
      type: "multiple_choice",
      options: ["8.625", "8.625", "8.125", "9.0"],
      answer: "8.625",
      explanation: "345 × 25 = 8625 → 8.625"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "7.5 ÷ 0.5 = ?",
      type: "multiple_choice",
      options: ["15", "15", "15.0", "1.5"],
      answer: "15",
      explanation: "7.5 ÷ 0.5 = 75 ÷ 5 = 15"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "A $25 item is 15% off. What is the discount?",
      type: "multiple_choice",
      options: ["$3.75", "$3.75", "$4.00", "$5.00"],
      answer: "$3.75",
      explanation: "25 × 0.15 = 3.75"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: x + 2.5 = 5.0",
      type: "multiple_choice",
      options: ["2.5", "2.5", "3.5", "2.0"],
      answer: "2.5",
      explanation: "x = 5.0 - 2.5 = 2.5"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "0.75 × 0.4 = ?",
      type: "multiple_choice",
      options: ["0.3", "0.3", "0.25", "0.35"],
      answer: "0.3",
      explanation: "75 × 4 = 300 → 0.300 = 0.3"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_decimals",
    title: "Decimals Quiz",
    description: "Test your understanding of decimals",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is 0.5 as a fraction?",
        type: "short_answer",
        answer_key: "1/2",
        explanation: "0.5 = 5/10 = 1/2"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Convert 3/4 to a decimal.",
        type: "short_answer",
        answer_key: "0.75",
        explanation: "3 ÷ 4 = 0.75"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Which is larger: 0.6 or 0.65?",
        type: "short_answer",
        answer_key: "0.65",
        explanation: "0.65 > 0.60"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "4.56 + 2.34 = ?",
        type: "short_answer",
        answer_key: "6.90",
        explanation: "4.56 + 2.34 = 6.90"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "8.9 - 3.45 = ?",
        type: "short_answer",
        answer_key: "5.45",
        explanation: "8.90 - 3.45 = 5.45"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "2.5 × 1.5 = ?",
        type: "short_answer",
        answer_key: "3.75",
        explanation: "25 × 15 = 375 → 3.75"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Round 4.567 to 2 decimal places.",
        type: "short_answer",
        answer_key: "4.57",
        explanation: "4.56|7 → 7 ≥ 5 → 4.57"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "3.6 × 2.5 = ?",
        type: "short_answer",
        answer_key: "9.0",
        explanation: "36 × 25 = 900 → 9.00"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "6.3 ÷ 0.7 = ?",
        type: "short_answer",
        answer_key: "9",
        explanation: "6.3 ÷ 0.7 = 63 ÷ 7 = 9"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A $50 item is 20% off. What is the discount?",
        type: "short_answer",
        answer_key: "$10.00",
        explanation: "50 × 0.20 = 10"
      }
    ]
  }
};