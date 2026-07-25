// Location: src/data/lessons/core/mathematics/calculus/differentiation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_differentiation",
  subject: "Mathematics",
  topic: "Calculus",
  name: "Differentiation",
  icon: "📐",
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
      description: "Define differentiation and the derivative",
      indicator: "Student can explain what differentiation means and what a derivative represents"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply the power rule for differentiation",
      indicator: "Student can use d/dx(xⁿ) = nxⁿ⁻¹"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Differentiate constant functions",
      indicator: "Student can differentiate constants (d/dx(c) = 0)"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Differentiate sums and differences of functions",
      indicator: "Student can apply the sum/difference rule"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Differentiate polynomial functions",
      indicator: "Student can differentiate polynomials using multiple rules"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Find the gradient of a curve at a point",
      indicator: "Student can substitute x-values into derivatives"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Apply the product rule for differentiation",
      indicator: "Student can use d/dx(uv) = u'v + uv'"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply the quotient rule for differentiation",
      indicator: "Student can use d/dx(u/v) = (u'v - uv')/v²"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply the chain rule for differentiation",
      indicator: "Student can use dy/dx = dy/du × du/dx"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Differentiation - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering differentiation, power rule, product rule, quotient rule, and chain rule."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Differentiation?</h2>
      <p><strong>Differentiation</strong> is the process of finding the <strong>derivative</strong> of a function.</p>
      <p>The derivative represents the <strong>rate of change</strong> or the <strong>gradient</strong> of a curve at any point.</p>
      <p>Notation: dy/dx, f'(x), or y'</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Power Rule",
        objective: "obj_002",
        text: `
          <h3>Power Rule</h3>
          <p><strong>d/dx(xⁿ) = nxⁿ⁻¹</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> d/dx(x³)
            <ul>
              <li>n = 3</li>
              <li>d/dx(x³) = 3x²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> d/dx(x⁵)
            <ul>
              <li>n = 5</li>
              <li>d/dx(x⁵) = 5x⁴</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Differentiating Constants",
        objective: "obj_003",
        text: `
          <h3>Constant Rule</h3>
          <p><strong>d/dx(c) = 0</strong></p>
          <p>The derivative of any constant is zero.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> d/dx(7) = 0
          </div>
          <div class="example-box">
            <strong>📌 Example:</strong> d/dx(-3) = 0
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Sum and Difference Rules",
        objective: "obj_004",
        text: `
          <h3>Rules</h3>
          <ul>
            <li><strong>Sum Rule:</strong> d/dx[f(x) + g(x)] = f'(x) + g'(x)</li>
            <li><strong>Difference Rule:</strong> d/dx[f(x) - g(x)] = f'(x) - g'(x)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> d/dx(x³ + x²)
            <ul>
              <li>d/dx(x³) = 3x²</li>
              <li>d/dx(x²) = 2x</li>
              <li>Result = 3x² + 2x</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Differentiating Polynomials",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Differentiate f(x) = 3x⁴ - 5x² + 2x - 7
            <ul>
              <li>d/dx(3x⁴) = 12x³</li>
              <li>d/dx(-5x²) = -10x</li>
              <li>d/dx(2x) = 2</li>
              <li>d/dx(-7) = 0</li>
              <li>f'(x) = 12x³ - 10x + 2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Finding the Gradient",
        objective: "obj_006",
        text: `
          <h3>Gradient at a Point</h3>
          <p>To find the gradient at x = a, substitute x = a into f'(x).</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> f(x) = x², find gradient at x = 3
            <ul>
              <li>f'(x) = 2x</li>
              <li>f'(3) = 2(3) = 6</li>
              <li><strong>Gradient = 6</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Product Rule",
        objective: "obj_007",
        text: `
          <h3>Product Rule</h3>
          <p><strong>d/dx(uv) = u'v + uv'</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Differentiate x² × x³
            <ul>
              <li>u = x², v = x³</li>
              <li>u' = 2x, v' = 3x²</li>
              <li>d/dx(uv) = (2x)(x³) + (x²)(3x²)</li>
              <li>= 2x⁴ + 3x⁴ = 5x⁴</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Quotient Rule",
        objective: "obj_008",
        text: `
          <h3>Quotient Rule</h3>
          <p><strong>d/dx(u/v) = (u'v - uv')/v²</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Differentiate x²/x³
            <ul>
              <li>u = x², v = x³</li>
              <li>u' = 2x, v' = 3x²</li>
              <li>d/dx = [(2x)(x³) - (x²)(3x²)]/x⁶</li>
              <li>= (2x⁴ - 3x⁴)/x⁶ = -x⁴/x⁶ = -1/x²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Chain Rule",
        objective: "obj_009",
        text: `
          <h3>Chain Rule</h3>
          <p><strong>dy/dx = dy/du × du/dx</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Differentiate (2x + 3)²
            <ul>
              <li>Let u = 2x + 3, y = u²</li>
              <li>dy/du = 2u</li>
              <li>du/dx = 2</li>
              <li>dy/dx = 2u × 2 = 4u</li>
              <li>= 4(2x + 3) = 8x + 12</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Differentiate f(x) = (x² + 1)(x³ - 2)
            <ul>
              <li>Use product rule: u = x² + 1, v = x³ - 2</li>
              <li>u' = 2x, v' = 3x²</li>
              <li>f'(x) = (2x)(x³ - 2) + (x² + 1)(3x²)</li>
              <li>= 2x⁴ - 4x + 3x⁴ + 3x²</li>
              <li>= 5x⁴ + 3x² - 4x</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Differentiation finds the rate of change (gradient)</li>
        <li>Power rule: d/dx(xⁿ) = nxⁿ⁻¹</li>
        <li>Constant rule: d/dx(c) = 0</li>
        <li>Sum/difference rules: differentiate each term</li>
        <li>Product rule: (uv)' = u'v + uv'</li>
        <li>Quotient rule: (u/v)' = (u'v - uv')/v²</li>
        <li>Chain rule: dy/dx = dy/du × du/dx</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Derivative", definition: "The rate of change of a function." },
    { term: "Differentiation", definition: "The process of finding a derivative." },
    { term: "Power Rule", definition: "d/dx(xⁿ) = nxⁿ⁻¹" },
    { term: "Product Rule", definition: "(uv)' = u'v + uv'" },
    { term: "Quotient Rule", definition: "(u/v)' = (u'v - uv')/v²" },
    { term: "Chain Rule", definition: "dy/dx = dy/du × du/dx" },
    { term: "Gradient", definition: "The slope of a curve at a point." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is d/dx(x⁴)?",
      type: "multiple_choice",
      options: ["4x³", "3x⁴", "4x⁴", "x³"],
      answer: "4x³",
      explanation: "Power rule: n=4 → 4x³"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is d/dx(x²)?",
      type: "multiple_choice",
      options: ["2x", "x²", "2", "x"],
      answer: "2x",
      explanation: "Power rule: n=2 → 2x"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is d/dx(5)?",
      type: "multiple_choice",
      options: ["5", "1", "0", "x"],
      answer: "0",
      explanation: "The derivative of a constant is 0."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is d/dx(x³ + x²)?",
      type: "multiple_choice",
      options: ["3x² + 2x", "3x² + x", "x² + 2x", "3x + 2x²"],
      answer: "3x² + 2x",
      explanation: "Differentiate each term: 3x² + 2x"
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "easy",
      question: "What is d/dx(2x³)?",
      type: "multiple_choice",
      options: ["6x²", "2x²", "6x³", "x²"],
      answer: "6x²",
      explanation: "2 × 3x² = 6x²"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "d/dx(3x⁴ - 5x² + 2x - 7) = ?",
      type: "multiple_choice",
      options: ["12x³ - 10x + 2", "12x³ - 5x + 2", "3x⁴ - 5x² + 2", "12x³ + 10x + 2"],
      answer: "12x³ - 10x + 2",
      explanation: "3×4x³ = 12x³, -5×2x = -10x, 2, 0"
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "f(x) = x². What is f'(3)?",
      type: "multiple_choice",
      options: ["6", "9", "3", "2"],
      answer: "6",
      explanation: "f'(x) = 2x, f'(3) = 6"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "f(x) = x³. What is f'(2)?",
      type: "multiple_choice",
      options: ["8", "12", "6", "4"],
      answer: "12",
      explanation: "f'(x) = 3x², f'(2) = 12"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "d/dx(4x⁵ - 3x³ + 2x) = ?",
      type: "multiple_choice",
      options: ["20x⁴ - 9x² + 2", "4x⁵ - 3x³ + 2", "20x⁴ + 9x² + 2", "20x⁴ - 9x²"],
      answer: "20x⁴ - 9x² + 2",
      explanation: "4×5x⁴ = 20x⁴, -3×3x² = -9x², 2"
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Use product rule: d/dx(x² × x³)",
      type: "multiple_choice",
      options: ["5x⁴", "x⁵", "6x⁴", "5x⁵"],
      answer: "5x⁴",
      explanation: "(2x)(x³) + (x²)(3x²) = 2x⁴ + 3x⁴ = 5x⁴"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "d/dx(x³ × x²) = ?",
      type: "multiple_choice",
      options: ["5x⁴", "6x³", "5x⁴", "x⁵"],
      answer: "5x⁴",
      explanation: "(3x²)(x²) + (x³)(2x) = 3x⁴ + 2x⁴ = 5x⁴"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "d/dx(x²/x³) = ?",
      type: "multiple_choice",
      options: ["-1/x²", "1/x²", "-x²", "x²"],
      answer: "-1/x²",
      explanation: "[(2x)(x³) - (x²)(3x²)]/x⁶ = (2x⁴ - 3x⁴)/x⁶ = -x⁴/x⁶ = -1/x²"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "d/dx(2x + 1)³ = ?",
      type: "multiple_choice",
      options: ["6(2x+1)²", "3(2x+1)²", "6(2x+1)", "3(2x+1)"],
      answer: "6(2x+1)²",
      explanation: "Chain rule: 3(2x+1)² × 2 = 6(2x+1)²"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "d/dx[(x²+1)(x³-2)] = ?",
      type: "multiple_choice",
      options: ["5x⁴ + 3x² - 4x", "5x⁴ - 3x² + 4x", "5x⁴ + 3x²", "5x⁴ - 4x"],
      answer: "5x⁴ + 3x² - 4x",
      explanation: "Product rule: (2x)(x³-2) + (x²+1)(3x²) = 2x⁴ - 4x + 3x⁴ + 3x² = 5x⁴ + 3x² - 4x"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "d/dx(x² + 3x)⁴ = ?",
      type: "multiple_choice",
      options: ["4(x²+3x)³(2x+3)", "4(x²+3x)³", "(2x+3)⁴", "4(2x+3)³"],
      answer: "4(x²+3x)³(2x+3)",
      explanation: "Chain rule: 4(x²+3x)³ × (2x+3)"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_differentiation",
    title: "Differentiation Quiz",
    description: "Test your understanding of differentiation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_002",
        difficulty: "easy",
        question: "d/dx(x⁵) = ?",
        type: "short_answer",
        answer_key: "5x⁴",
        explanation: "Power rule: 5x⁴"
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "d/dx(10) = ?",
        type: "short_answer",
        answer_key: "0",
        explanation: "Derivative of a constant is 0."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "easy",
        question: "d/dx(x² + x³) = ?",
        type: "short_answer",
        answer_key: "2x + 3x²",
        explanation: "2x + 3x²"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "d/dx(2x⁴ - 3x² + 5) = ?",
        type: "short_answer",
        answer_key: "8x³ - 6x",
        explanation: "2×4x³ = 8x³, -3×2x = -6x, 0"
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "f(x) = x⁴. f'(2) = ?",
        type: "short_answer",
        answer_key: "32",
        explanation: "f'(x) = 4x³, f'(2) = 32"
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "d/dx(x³ × x²) = ?",
        type: "short_answer",
        answer_key: "5x⁴",
        explanation: "Product rule: (3x²)(x²) + (x³)(2x) = 5x⁴"
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "d/dx(x³/x²) = ?",
        type: "short_answer",
        answer_key: "1",
        explanation: "Quotient rule: (3x²×x² - x³×2x)/x⁴ = (3x⁴ - 2x⁴)/x⁴ = x⁴/x⁴ = 1"
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "d/dx(3x+1)² = ?",
        type: "short_answer",
        answer_key: "6(3x+1)",
        explanation: "Chain rule: 2(3x+1) × 3 = 6(3x+1)"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "d/dx[(x²+2)(x-1)] = ?",
        type: "short_answer",
        answer_key: "3x² - 2x + 2",
        explanation: "Product rule: (2x)(x-1) + (x²+2)(1) = 2x² - 2x + x² + 2 = 3x² - 2x + 2"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "d/dx(x²+1)³ = ?",
        type: "short_answer",
        answer_key: "6x(x²+1)²",
        explanation: "Chain rule: 3(x²+1)² × 2x = 6x(x²+1)²"
      }
    ]
  }
};