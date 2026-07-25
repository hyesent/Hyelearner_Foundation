// Location: src/data/lessons/core/mathematics/calculus/integration.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_integration",
  subject: "Mathematics",
  topic: "Calculus",
  name: "Integration",
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
      description: "Define integration as the reverse of differentiation",
      indicator: "Student can explain that integration is the inverse of differentiation"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply the power rule for integration",
      indicator: "Student can use ∫xⁿ dx = xⁿ⁺¹/(n+1) + C"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Integrate constant functions",
      indicator: "Student can integrate constants (∫c dx = cx + C)"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Integrate sums and differences of functions",
      indicator: "Student can apply the sum/difference rule for integration"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Integrate polynomial functions",
      indicator: "Student can integrate polynomials using multiple rules"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Evaluate definite integrals",
      indicator: "Student can use ∫ₐᵇ f(x) dx = F(b) - F(a)"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Apply integration to find areas under curves",
      indicator: "Student can find the area between a curve and the x-axis"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply integration to find areas between curves",
      indicator: "Student can find the area between two curves"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex integration problems",
      indicator: "Student can solve multi-step integration problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Integration - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering integration, power rule, and area calculations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Integration?</h2>
      <p><strong>Integration</strong> is the reverse process of differentiation.</p>
      <p>It finds the <strong>antiderivative</strong> of a function.</p>
      <p>Integration is used to find:</p>
      <ul>
        <li>Areas under curves</li>
        <li>Volumes of solids</li>
        <li>Total accumulated change</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Power Rule for Integration",
        objective: "obj_002",
        text: `
          <h3>Power Rule</h3>
          <p><strong>∫xⁿ dx = xⁿ⁺¹/(n+1) + C</strong> (where n ≠ -1)</p>
          <p><strong>+ C</strong> is the constant of integration.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> ∫x³ dx
            <ul>
              <li>n = 3</li>
              <li>∫x³ dx = x⁴/4 + C</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> ∫x⁵ dx
            <ul>
              <li>n = 5</li>
              <li>∫x⁵ dx = x⁶/6 + C</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Integrating Constants",
        objective: "obj_003",
        text: `
          <h3>Constant Rule</h3>
          <p><strong>∫c dx = cx + C</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> ∫5 dx
            <ul>
              <li>∫5 dx = 5x + C</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> ∫-3 dx
            <ul>
              <li>∫-3 dx = -3x + C</li>
            </ul>
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
            <li><strong>Sum Rule:</strong> ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx</li>
            <li><strong>Difference Rule:</strong> ∫[f(x) - g(x)] dx = ∫f(x) dx - ∫g(x) dx</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> ∫(x³ + x²) dx
            <ul>
              <li>∫x³ dx = x⁴/4</li>
              <li>∫x² dx = x³/3</li>
              <li>Result = x⁴/4 + x³/3 + C</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Integrating Polynomials",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> ∫(3x⁴ - 5x² + 2x - 7) dx
            <ul>
              <li>∫3x⁴ dx = 3x⁵/5</li>
              <li>∫-5x² dx = -5x³/3</li>
              <li>∫2x dx = x²</li>
              <li>∫-7 dx = -7x</li>
              <li>Result = 3x⁵/5 - 5x³/3 + x² - 7x + C</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Definite Integrals",
        objective: "obj_006",
        text: `
          <h3>Definite Integral</h3>
          <p><strong>∫ₐᵇ f(x) dx = F(b) - F(a)</strong></p>
          <p>Where F(x) is the antiderivative of f(x).</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> ∫₀² x² dx
            <ul>
              <li>F(x) = x³/3</li>
              <li>F(2) = 8/3</li>
              <li>F(0) = 0</li>
              <li>∫₀² x² dx = 8/3 - 0 = 8/3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Area Under a Curve",
        objective: "obj_007",
        text: `
          <h3>Finding Area</h3>
          <p>The area under the curve y = f(x) from x = a to x = b is given by:</p>
          <p><strong>Area = ∫ₐᵇ f(x) dx</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find the area under y = x² from x = 0 to x = 3
            <ul>
              <li>Area = ∫₀³ x² dx</li>
              <li>= [x³/3]₀³</li>
              <li>= 27/3 - 0 = 9</li>
              <li><strong>Area = 9 square units</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Area Between Curves",
        objective: "obj_008",
        text: `
          <h3>Finding Area Between Curves</h3>
          <p>Area between y = f(x) and y = g(x):</p>
          <p><strong>Area = ∫ₐᵇ [f(x) - g(x)] dx</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find area between y = x² and y = x from x = 0 to x = 1
            <ul>
              <li>f(x) = x, g(x) = x²</li>
              <li>Area = ∫₀¹ (x - x²) dx</li>
              <li>= [x²/2 - x³/3]₀¹</li>
              <li>= (1/2 - 1/3) - 0</li>
              <li>= 1/6</li>
              <li><strong>Area = 1/6 square units</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Integration",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> ∫(2x + 3) dx from x = 1 to x = 4
            <ul>
              <li>∫(2x + 3) dx = x² + 3x</li>
              <li>[x² + 3x]₁⁴</li>
              <li>= (16 + 12) - (1 + 3)</li>
              <li>= 28 - 4 = 24</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Integration is the reverse of differentiation</li>
        <li>Power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C</li>
        <li>Always add + C for indefinite integrals</li>
        <li>Definite integrals: ∫ₐᵇ f(x) dx = F(b) - F(a)</li>
        <li>Area under curve = definite integral</li>
        <li>Area between curves = ∫(upper - lower) dx</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Integration", definition: "The reverse process of differentiation." },
    { term: "Antiderivative", definition: "A function F(x) such that F'(x) = f(x)." },
    { term: "Constant of Integration", definition: "The constant C added to indefinite integrals." },
    { term: "Definite Integral", definition: "An integral with limits of integration." },
    { term: "Indefinite Integral", definition: "An integral without limits (includes + C)." },
    { term: "Area Under Curve", definition: "The integral of a function over an interval." }
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
      question: "∫x⁴ dx = ?",
      type: "multiple_choice",
      options: ["x⁵/5 + C", "x⁴/4 + C", "4x³ + C", "x³/3 + C"],
      answer: "x⁵/5 + C",
      explanation: "Power rule: n=4 → x⁵/5 + C"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "∫x² dx = ?",
      type: "multiple_choice",
      options: ["x³/3 + C", "x²/2 + C", "2x + C", "x + C"],
      answer: "x³/3 + C",
      explanation: "Power rule: n=2 → x³/3 + C"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "∫5 dx = ?",
      type: "multiple_choice",
      options: ["5x + C", "5 + C", "x + C", "0"],
      answer: "5x + C",
      explanation: "Integrating a constant: cx + C"
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "∫(x² + x³) dx = ?",
      type: "multiple_choice",
      options: ["x³/3 + x⁴/4 + C", "x² + x³ + C", "2x + 3x² + C", "x + x² + C"],
      answer: "x³/3 + x⁴/4 + C",
      explanation: "Sum rule: x³/3 + x⁴/4 + C"
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "easy",
      question: "∫2x dx = ?",
      type: "multiple_choice",
      options: ["x² + C", "2x² + C", "x + C", "2 + C"],
      answer: "x² + C",
      explanation: "Power rule: 2 × x²/2 = x² + C"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "∫(3x⁴ - 2x² + 5) dx = ?",
      type: "multiple_choice",
      options: ["3x⁵/5 - 2x³/3 + 5x + C", "3x⁴ - 2x² + 5x + C", "3x⁵ - 2x³ + 5x + C", "x⁵ - x³ + 5x + C"],
      answer: "3x⁵/5 - 2x³/3 + 5x + C",
      explanation: "3x⁵/5 - 2x³/3 + 5x + C"
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "∫₀¹ x dx = ?",
      type: "multiple_choice",
      options: ["1", "1/2", "1/3", "0"],
      answer: "1/2",
      explanation: "F(x) = x²/2, F(1) - F(0) = 1/2 - 0 = 1/2"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "∫₀² x² dx = ?",
      type: "multiple_choice",
      options: ["8/3", "4", "2", "0"],
      answer: "8/3",
      explanation: "F(x) = x³/3, F(2) - F(0) = 8/3 - 0 = 8/3"
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Area under y = x from x = 0 to x = 4",
      type: "multiple_choice",
      options: ["4", "8", "6", "10"],
      answer: "8",
      explanation: "∫₀⁴ x dx = [x²/2]₀⁴ = 16/2 = 8"
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "medium",
      question: "Area between y = 2x and y = x from x = 0 to x = 1",
      type: "multiple_choice",
      options: ["1/2", "1/4", "3/4", "1"],
      answer: "1/2",
      explanation: "∫₀¹ (2x - x) dx = ∫₀¹ x dx = [x²/2]₀¹ = 1/2"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Area under y = x² from x = -1 to x = 2",
      type: "multiple_choice",
      options: ["3", "5", "7", "9"],
      answer: "3",
      explanation: "∫₋₁² x² dx = [x³/3]₋₁² = 8/3 - (-1/3) = 9/3 = 3"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Area between y = x² and y = x from x = 0 to x = 2",
      type: "multiple_choice",
      options: ["2/3", "4/3", "2", "8/3"],
      answer: "4/3",
      explanation: "∫₀² (x² - x) dx = [x³/3 - x²/2]₀² = 8/3 - 4/2 = 8/3 - 2 = 2/3"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "∫₀³ (2x + 1) dx = ?",
      type: "multiple_choice",
      options: ["9", "10", "11", "12"],
      answer: "12",
      explanation: "F(x) = x² + x, F(3) - F(0) = 9 + 3 = 12"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "Area under y = 2x from x = 0 to x = 5",
      type: "multiple_choice",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "∫₀⁵ 2x dx = [x²]₀⁵ = 25"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "∫₀⁴ (x² - 2x) dx = ?",
      type: "multiple_choice",
      options: ["16/3", "20/3", "25/3", "30/3"],
      answer: "16/3",
      explanation: "[x³/3 - x²]₀⁴ = 64/3 - 16 = 64/3 - 48/3 = 16/3"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_integration",
    title: "Integration Quiz",
    description: "Test your understanding of integration",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_002",
        difficulty: "easy",
        question: "∫x³ dx = ?",
        type: "short_answer",
        answer_key: "x⁴/4 + C",
        explanation: "Power rule: n=3 → x⁴/4 + C"
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "∫7 dx = ?",
        type: "short_answer",
        answer_key: "7x + C",
        explanation: "Integrating a constant: 7x + C"
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "easy",
        question: "∫(x + x²) dx = ?",
        type: "short_answer",
        answer_key: "x²/2 + x³/3 + C",
        explanation: "x²/2 + x³/3 + C"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "∫(2x³ - 3x + 4) dx = ?",
        type: "short_answer",
        answer_key: "x⁴/2 - 3x²/2 + 4x + C",
        explanation: "2x⁴/4 - 3x²/2 + 4x + C = x⁴/2 - 3x²/2 + 4x + C"
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "∫₀³ x dx = ?",
        type: "short_answer",
        answer_key: "9/2",
        explanation: "[x²/2]₀³ = 9/2"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "∫₁² x² dx = ?",
        type: "short_answer",
        answer_key: "7/3",
        explanation: "[x³/3]₁² = 8/3 - 1/3 = 7/3"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Area under y = x² from x = 0 to x = 3",
        type: "short_answer",
        answer_key: "9",
        explanation: "[x³/3]₀³ = 27/3 = 9"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Area between y = x and y = x² from x = 0 to x = 1",
        type: "short_answer",
        answer_key: "1/6",
        explanation: "[x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "Area under y = 2x from x = 1 to x = 4",
        type: "short_answer",
        answer_key: "15",
        explanation: "[x²]₁⁴ = 16 - 1 = 15"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "∫₀² (x² + x) dx = ?",
        type: "short_answer",
        answer_key: "14/3",
        explanation: "[x³/3 + x²/2]₀² = 8/3 + 4/2 = 8/3 + 2 = 14/3"
      }
    ]
  }
};