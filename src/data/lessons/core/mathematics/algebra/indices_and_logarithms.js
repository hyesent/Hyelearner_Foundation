// Location: src/data/lessons/core/mathematics/algebra/indices_and_logarithms.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_indices_and_logarithms",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Indices and Logarithms",
  icon: "📊",
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
      description: "Define indices (exponents) and apply the basic laws of indices",
      indicator: "Student can explain what indices are and apply aᵐ × aⁿ = aᵐ⁺ⁿ"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply the division and power laws of indices",
      indicator: "Student can apply aᵐ ÷ aⁿ = aᵐ⁻ⁿ and (aᵐ)ⁿ = aᵐⁿ"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define logarithms and convert between logarithmic and exponential forms",
      indicator: "Student can convert between logₐ b = c and aᶜ = b"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the laws of logarithms (product, quotient, and power rules)",
      indicator: "Student can use log laws to simplify expressions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Solve simple logarithmic equations",
      indicator: "Student can solve equations like log₂ x = 3"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Evaluate logarithms without a calculator",
      indicator: "Student can find log₂ 8 = 3"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve exponential equations using logarithms",
      indicator: "Student can solve equations like 2ˣ = 8"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply the change of base formula",
      indicator: "Student can use logₐ b = log b / log a"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex logarithmic and exponential equations",
      indicator: "Student can solve equations involving logs and exponents together"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Indices and Logarithms - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering laws of indices, laws of logarithms, and solving equations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Indices and Logarithms?</h2>
      <p><strong>Indices (Exponents):</strong> A way to represent repeated multiplication.</p>
      <p>Example: 2³ = 2 × 2 × 2 = 8</p>
      <p><strong>Logarithms:</strong> The inverse operation of exponentiation.</p>
      <p>If 2³ = 8, then log₂ 8 = 3 (The power to raise 2 to get 8 is 3)</p>
      <p><strong>Relationship:</strong> aᶜ = b ⇔ logₐ b = c</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Laws of Indices (Exponents)",
        objective: "obj_001",
        text: `
          <h3>Basic Laws of Indices</h3>
          <ul>
            <li><strong>Multiplication:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ</li>
            <li><strong>Division:</strong> aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
            <li><strong>Power of a power:</strong> (aᵐ)ⁿ = aᵐⁿ</li>
            <li><strong>Zero exponent:</strong> a⁰ = 1 (a ≠ 0)</li>
            <li><strong>Negative exponent:</strong> a⁻ⁿ = 1/aⁿ</li>
            <li><strong>Fractional exponent:</strong> a¹/ⁿ = ⁿ√a</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> (2³)² = 2³ˣ² = 2⁶ = 64
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Zero, Negative, and Fractional Indices",
        objective: "obj_002",
        text: `
          <h3>Zero Exponent</h3>
          <p>Any non-zero number to the power of 0 is 1.</p>
          <div class="example-box">
            <strong>📌 Example:</strong> 5⁰ = 1, 100⁰ = 1, x⁰ = 1 (x ≠ 0)
          </div>
          
          <h3>Negative Exponent</h3>
          <p>a⁻ⁿ = 1/aⁿ</p>
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2⁻³ = 1/2³ = 1/8
          </div>
          <div class="example-box">
            <strong>📌 Example 2:</strong> 3⁻² = 1/9
          </div>
          
          <h3>Fractional Exponent</h3>
          <p>a¹/ⁿ = ⁿ√a</p>
          <div class="example-box">
            <strong>📌 Example 1:</strong> 8¹/³ = ∛8 = 2
          </div>
          <div class="example-box">
            <strong>📌 Example 2:</strong> 16¹/⁴ = ⁴√16 = 2
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Introduction to Logarithms",
        objective: "obj_003",
        text: `
          <h3>Logarithm Definition</h3>
          <p><strong>logₐ b = c</strong> means <strong>aᶜ = b</strong></p>
          <ul>
            <li><strong>a</strong> = base (a > 0, a ≠ 1)</li>
            <li><strong>b</strong> = argument (b > 0)</li>
            <li><strong>c</strong> = logarithm (exponent)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> log₂ 8 = 3 because 2³ = 8
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> log₃ 81 = 4 because 3⁴ = 81
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> log₁₀ 100 = 2 because 10² = 100
          </div>
          
          <h3>Converting Between Forms</h3>
          <p>Exponential Form: aᶜ = b</p>
          <p>Logarithmic Form: logₐ b = c</p>
        `
      },
      {
        id: "sec_004",
        title: "Laws of Logarithms",
        objective: "obj_004",
        text: `
          <h3>Three Laws of Logarithms</h3>
          <ul>
            <li><strong>Product Rule:</strong> logₐ (mn) = logₐ m + logₐ n</li>
            <li><strong>Quotient Rule:</strong> logₐ (m/n) = logₐ m - logₐ n</li>
            <li><strong>Power Rule:</strong> logₐ mⁿ = n logₐ m</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1 (Product Rule):</strong> log₂ (8 × 4) = log₂ 8 + log₂ 4 = 3 + 2 = 5
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2 (Quotient Rule):</strong> log₂ (16/4) = log₂ 16 - log₂ 4 = 4 - 2 = 2
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3 (Power Rule):</strong> log₂ 8³ = 3 × log₂ 8 = 3 × 3 = 9
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Evaluating Logarithms",
        objective: "obj_006",
        text: `
          <h3>Common Logarithms</h3>
          <ul>
            <li><strong>log₁₀ 10 = 1</strong> (10¹ = 10)</li>
            <li><strong>log₁₀ 100 = 2</strong> (10² = 100)</li>
            <li><strong>log₁₀ 1000 = 3</strong> (10³ = 1000)</li>
            <li><strong>log₁₀ 1 = 0</strong> (10⁰ = 1)</li>
          </ul>
          
          <h3>Natural Logarithms (ln)</h3>
          <ul>
            <li>ln e = 1 (e¹ = e)</li>
            <li>ln 1 = 0</li>
            <li>e ≈ 2.718</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Evaluate log₄ 64
            <ul>
              <li>4³ = 64</li>
              <li><strong>Answer:</strong> log₄ 64 = 3</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Evaluate log₅ 125
            <ul>
              <li>5³ = 125</li>
              <li><strong>Answer:</strong> log₅ 125 = 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Solving Simple Logarithmic Equations",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Solve log₂ x = 3
            <ul>
              <li>Convert to exponential: 2³ = x</li>
              <li>2³ = 8</li>
              <li><strong>Answer:</strong> x = 8</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Solve log₃ (x + 1) = 2
            <ul>
              <li>Convert to exponential: 3² = x + 1</li>
              <li>9 = x + 1</li>
              <li>x = 8</li>
              <li><strong>Answer:</strong> x = 8</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> Solve log₂ (2x - 1) = 3
            <ul>
              <li>2³ = 2x - 1</li>
              <li>8 = 2x - 1</li>
              <li>9 = 2x</li>
              <li>x = 4.5</li>
              <li><strong>Answer:</strong> x = 4.5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Solving Exponential Equations",
        objective: "obj_007",
        text: `
          <h3>Method: Use Logarithms</h3>
          <ol>
            <li>Take log of both sides</li>
            <li>Use power rule to bring down exponent</li>
            <li>Solve for the variable</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Solve 2ˣ = 8
            <ul>
              <li>Method 1: 2ˣ = 2³ → x = 3</li>
              <li>Method 2: log 2ˣ = log 8 → x log 2 = log 8 → x = log 8/log 2 = 3</li>
              <li><strong>Answer:</strong> x = 3</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Solve 3ˣ = 81
            <ul>
              <li>3ˣ = 3⁴ → x = 4</li>
              <li><strong>Answer:</strong> x = 4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> Solve 2ˣ = 10
            <ul>
              <li>log 2ˣ = log 10</li>
              <li>x log 2 = 1</li>
              <li>x = 1/log 2 ≈ 3.322</li>
              <li><strong>Answer:</strong> x ≈ 3.322</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Change of Base Formula",
        objective: "obj_008",
        text: `
          <h3>Change of Base Formula</h3>
          <p><strong>logₐ b = log b / log a</strong></p>
          <p>Useful when your calculator only has log₁₀ or ln.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Evaluate log₂ 32
            <ul>
              <li>Method 1: 2⁵ = 32 → log₂ 32 = 5</li>
              <li>Method 2: log₂ 32 = log 32 / log 2 = 1.505 / 0.301 = 5</li>
              <li><strong>Answer:</strong> 5</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Evaluate log₃ 81
            <ul>
              <li>3⁴ = 81 → log₃ 81 = 4</li>
              <li>Check: log 81 / log 3 = 1.908 / 0.477 = 4</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Logarithmic and Exponential Equations",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Solve log₂ x + log₂ (x - 2) = 3
            <ul>
              <li>Use product rule: log₂ [x(x - 2)] = 3</li>
              <li>Convert: x(x - 2) = 2³ = 8</li>
              <li>x² - 2x - 8 = 0</li>
              <li>(x - 4)(x + 2) = 0</li>
              <li>x = 4 or x = -2 (reject negative)</li>
              <li><strong>Answer:</strong> x = 4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Solve 5ˣ = 3ˣ⁺¹
            <ul>
              <li>log 5ˣ = log 3ˣ⁺¹</li>
              <li>x log 5 = (x + 1) log 3</li>
              <li>x log 5 = x log 3 + log 3</li>
              <li>x(log 5 - log 3) = log 3</li>
              <li>x = log 3 / (log 5 - log 3)</li>
              <li><strong>Answer:</strong> x = log 3 / log(5/3)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Indices laws: multiplication (add exponents), division (subtract exponents), power (multiply exponents)</li>
        <li>Logarithms are the inverse of exponents: logₐ b = c → aᶜ = b</li>
        <li>Log laws: product (add), quotient (subtract), power (multiply)</li>
        <li>Use logarithms to solve exponential equations</li>
        <li>Change of base formula: logₐ b = log b / log a</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Index (Exponent)", definition: "The power to which a number is raised." },
    { term: "Logarithm", definition: "The inverse operation of exponentiation." },
    { term: "Base", definition: "The number being raised to a power." },
    { term: "Product Rule", definition: "logₐ (mn) = logₐ m + logₐ n." },
    { term: "Quotient Rule", definition: "logₐ (m/n) = logₐ m - logₐ n." },
    { term: "Power Rule", definition: "logₐ mⁿ = n logₐ m." },
    { term: "Common Logarithm", definition: "log₁₀ (log with base 10)." },
    { term: "Natural Logarithm", definition: "ln (log with base e ≈ 2.718)." }
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
      question: "Simplify: 2³ × 2⁴",
      type: "multiple_choice",
      options: ["2⁷", "2¹²", "4⁷", "4¹²"],
      answer: "2⁷",
      explanation: "2³ × 2⁴ = 2³⁺⁴ = 2⁷"
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "Simplify: 5⁶ ÷ 5²",
      type: "multiple_choice",
      options: ["5⁴", "5⁸", "5³", "5¹²"],
      answer: "5⁴",
      explanation: "5⁶ ÷ 5² = 5⁶⁻² = 5⁴"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is 3⁰ equal to?",
      type: "multiple_choice",
      options: ["0", "1", "3", "9"],
      answer: "1",
      explanation: "Any non-zero number to the power of 0 is 1."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is 2⁻³ equal to?",
      type: "multiple_choice",
      options: ["8", "1/8", "-8", "-1/8"],
      answer: "1/8",
      explanation: "2⁻³ = 1/2³ = 1/8"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is log₂ 16 equal to?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "2⁴ = 16, so log₂ 16 = 4"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Simplify: log₂ 8 + log₂ 4",
      type: "multiple_choice",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "log₂ 8 = 3, log₂ 4 = 2, 3 + 2 = 5"
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Simplify: log₃ 81 - log₃ 9",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "log₃ 81 = 4, log₃ 9 = 2, 4 - 2 = 2"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Solve: log₂ x = 5",
      type: "multiple_choice",
      options: ["16", "25", "32", "64"],
      answer: "32",
      explanation: "2⁵ = 32 → x = 32"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Evaluate: log₄ 64",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "4³ = 64 → log₄ 64 = 3"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Evaluate: log₅ 125",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "5³ = 125 → log₅ 125 = 3"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: 2ˣ = 16",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "2⁴ = 16 → x = 4"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: 3ˣ = 27",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "3³ = 27 → x = 3"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Use change of base: log₂ 16 = log 16 / log 2. What is it?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "log 16 / log 2 = 1.204/0.301 = 4"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: log₂ x + log₂ (x - 2) = 3",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "x(x - 2) = 8 → x² - 2x - 8 = 0 → x = 4 or -2 (reject negative)"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: 2ˣ = 10 (to 3 decimal places)",
      type: "multiple_choice",
      options: ["3.000", "3.322", "3.500", "4.000"],
      answer: "3.322",
      explanation: "x = log 10 / log 2 = 1/0.301 = 3.322"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_indices_and_logarithms",
    title: "Indices and Logarithms Quiz",
    description: "Test your understanding of indices and logarithms",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Simplify: 3⁴ × 3²",
        type: "short_answer",
        answer_key: "3⁶",
        explanation: "3⁴ × 3² = 3⁴⁺² = 3⁶"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is 4⁰ equal to?",
        type: "short_answer",
        answer_key: "1",
        explanation: "Any non-zero number to the power of 0 is 1."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Convert to logarithmic form: 2³ = 8",
        type: "short_answer",
        answer_key: "log₂ 8 = 3",
        explanation: "aᶜ = b → logₐ b = c"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Simplify: log₂ 16 + log₂ 4",
        type: "short_answer",
        answer_key: "6",
        explanation: "log₂ 16 = 4, log₂ 4 = 2, 4 + 2 = 6"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Solve: log₃ x = 4",
        type: "short_answer",
        answer_key: "81",
        explanation: "3⁴ = 81 → x = 81"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Evaluate: log₂ 32",
        type: "short_answer",
        answer_key: "5",
        explanation: "2⁵ = 32 → log₂ 32 = 5"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Solve: 5ˣ = 125",
        type: "short_answer",
        answer_key: "3",
        explanation: "5³ = 125 → x = 3"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Solve: 2ˣ = 10 (to 3 decimal places)",
        type: "short_answer",
        answer_key: "3.322",
        explanation: "x = log 10 / log 2 = 3.322"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Use change of base: log₂ 64 = log 64 / log 2. What is it?",
        type: "short_answer",
        answer_key: "6",
        explanation: "2⁶ = 64 → log₂ 64 = 6"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Solve: log₂ x + log₂ (x + 1) = 1",
        type: "short_answer",
        answer_key: "x = 1",
        explanation: "log₂ [x(x+1)] = 1 → x(x+1) = 2 → x² + x - 2 = 0 → (x+2)(x-1) = 0 → x = 1"
      }
    ]
  }
};