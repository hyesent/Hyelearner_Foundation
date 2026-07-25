// Location: src/data/lessons/core/mathematics/algebra/polynomials.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_polynomials",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Polynomials",
  icon: "🧮",
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
      description: "Define a polynomial and identify its key components",
      indicator: "Student can explain what a polynomial is and identify terms, coefficients, and degrees"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Add and subtract polynomials",
      indicator: "Student can combine like terms in polynomial expressions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Multiply monomials and binomials",
      indicator: "Student can multiply simple polynomial expressions"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Multiply polynomials using the distributive property",
      indicator: "Student can multiply two binomials using FOIL method"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Factor polynomials using common factors and grouping",
      indicator: "Student can factor out GCF and factor by grouping"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Factor quadratic trinomials",
      indicator: "Student can factor expressions like x² + 5x + 6"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Factor polynomials using special formulas (difference of squares, perfect squares)",
      indicator: "Student can apply formulas like a² - b² = (a-b)(a+b)"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Divide polynomials (long division)",
      indicator: "Student can perform polynomial long division"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve polynomial equations by factoring",
      indicator: "Student can set factored polynomials equal to zero and solve"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Polynomials - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering polynomial operations, factoring, and solving."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Polynomials?</h2>
      <p>A <strong>polynomial</strong> is an algebraic expression consisting of <strong>terms</strong> with variables raised to non-negative integer powers.</p>
      <p>General form: <strong>aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀</strong></p>
      <ul>
        <li><strong>Terms:</strong> Parts separated by + or - signs</li>
        <li><strong>Coefficients:</strong> Numbers multiplied by variables</li>
        <li><strong>Degree:</strong> The highest power of the variable</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Understanding Polynomials",
        objective: "obj_001",
        text: `
          <h3>Examples of Polynomials</h3>
          <ul>
            <li><strong>Monomial:</strong> 3x² (one term)</li>
            <li><strong>Binomial:</strong> 2x + 5 (two terms)</li>
            <li><strong>Trinomial:</strong> x² + 3x - 4 (three terms)</li>
          </ul>
          
          <h3>Degree of a Polynomial</h3>
          <ul>
            <li><strong>Degree 0:</strong> Constant (e.g., 5)</li>
            <li><strong>Degree 1:</strong> Linear (e.g., 2x + 3)</li>
            <li><strong>Degree 2:</strong> Quadratic (e.g., x² + 2x + 1)</li>
            <li><strong>Degree 3:</strong> Cubic (e.g., x³ + 3x² + 2x - 1)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2x³ - 5x² + 3x - 7
            <ul>
              <li>Terms: 2x³, -5x², 3x, -7</li>
              <li>Degree: 3 (highest power)</li>
              <li>Leading coefficient: 2</li>
              <li>Constant term: -7</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Adding and Subtracting Polynomials",
        objective: "obj_002",
        text: `
          <h3>Combining Like Terms</h3>
          <p>Like terms have the <strong>same variables with the same powers</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example 1 (Addition):</strong> (2x² + 3x - 5) + (x² - 2x + 4)
            <ul>
              <li>Step 1: Group like terms: (2x² + x²) + (3x - 2x) + (-5 + 4)</li>
              <li>Step 2: Combine: 3x² + x - 1</li>
              <li><strong>Answer:</strong> 3x² + x - 1</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2 (Subtraction):</strong> (4x² - 3x + 2) - (2x² + 5x - 3)
            <ul>
              <li>Step 1: Distribute negative: 4x² - 3x + 2 - 2x² - 5x + 3</li>
              <li>Step 2: Combine like terms: (4x² - 2x²) + (-3x - 5x) + (2 + 3)</li>
              <li>Step 3: 2x² - 8x + 5</li>
              <li><strong>Answer:</strong> 2x² - 8x + 5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Multiplying Monomials and Binomials",
        objective: "obj_003",
        text: `
          <h3>Multiplying Monomials</h3>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3x² × 4x³
            <ul>
              <li>Multiply coefficients: 3 × 4 = 12</li>
              <li>Add exponents: x² × x³ = x⁵</li>
              <li><strong>Answer:</strong> 12x⁵</li>
            </ul>
          </div>
          
          <h3>Multiplying a Monomial by a Polynomial</h3>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2x(3x² - 4x + 5)
            <ul>
              <li>Multiply: 2x × 3x² = 6x³</li>
              <li>2x × (-4x) = -8x²</li>
              <li>2x × 5 = 10x</li>
              <li><strong>Answer:</strong> 6x³ - 8x² + 10x</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Multiplying Binomials (FOIL Method)",
        objective: "obj_004",
        text: `
          <h3>FOIL Method</h3>
          <ul>
            <li><strong>F</strong>irst: Multiply first terms</li>
            <li><strong>O</strong>uter: Multiply outer terms</li>
            <li><strong>I</strong>nner: Multiply inner terms</li>
            <li><strong>L</strong>ast: Multiply last terms</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (x + 3)(x + 2)
            <ul>
              <li>F: x × x = x²</li>
              <li>O: x × 2 = 2x</li>
              <li>I: 3 × x = 3x</li>
              <li>L: 3 × 2 = 6</li>
              <li>Combine: x² + 2x + 3x + 6</li>
              <li><strong>Answer:</strong> x² + 5x + 6</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (2x - 3)(x + 4)
            <ul>
              <li>F: 2x × x = 2x²</li>
              <li>O: 2x × 4 = 8x</li>
              <li>I: -3 × x = -3x</li>
              <li>L: -3 × 4 = -12</li>
              <li>Combine: 2x² + 8x - 3x - 12</li>
              <li><strong>Answer:</strong> 2x² + 5x - 12</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Factoring - Greatest Common Factor",
        objective: "obj_005",
        text: `
          <h3>Steps for Factoring</h3>
          <ol>
            <li>Find the GCF of all terms</li>
            <li>Factor out the GCF</li>
            <li>Check your answer by distributing</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor 6x² + 12x
            <ul>
              <li>GCF: 6x</li>
              <li>6x² + 12x = 6x(x + 2)</li>
              <li><strong>Answer:</strong> 6x(x + 2)</li>
            </ul>
          </div>
          
          <h3>Factoring by Grouping (4 terms)</h3>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor x³ + 2x² + 3x + 6
            <ul>
              <li>Group: (x³ + 2x²) + (3x + 6)</li>
              <li>Factor each group: x²(x + 2) + 3(x + 2)</li>
              <li>Factor common: (x² + 3)(x + 2)</li>
              <li><strong>Answer:</strong> (x² + 3)(x + 2)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Factoring Quadratic Trinomials",
        objective: "obj_006",
        text: `
          <h3>Factoring x² + bx + c</h3>
          <p>Find two numbers that:</p>
          <ul>
            <li>Multiply to give <strong>c</strong></li>
            <li>Add to give <strong>b</strong></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor x² + 5x + 6
            <ul>
              <li>Find numbers: 2 × 3 = 6, 2 + 3 = 5</li>
              <li>Write: (x + 2)(x + 3)</li>
              <li><strong>Answer:</strong> (x + 2)(x + 3)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor x² - 7x + 12
            <ul>
              <li>Find numbers: -3 × -4 = 12, -3 + -4 = -7</li>
              <li>Write: (x - 3)(x - 4)</li>
              <li><strong>Answer:</strong> (x - 3)(x - 4)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Special Factoring Formulas",
        objective: "obj_007",
        text: `
          <h3>Difference of Squares</h3>
          <p><strong>a² - b² = (a - b)(a + b)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor x² - 16
            <ul>
              <li>a² = x² → a = x</li>
              <li>b² = 16 → b = 4</li>
              <li>x² - 16 = (x - 4)(x + 4)</li>
              <li><strong>Answer:</strong> (x - 4)(x + 4)</li>
            </ul>
          </div>
          
          <h3>Perfect Square Trinomials</h3>
          <p><strong>a² + 2ab + b² = (a + b)²</strong></p>
          <p><strong>a² - 2ab + b² = (a - b)²</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Factor x² + 6x + 9
            <ul>
              <li>a² = x² → a = x</li>
              <li>b² = 9 → b = 3</li>
              <li>2ab = 2(x)(3) = 6x ✓</li>
              <li>x² + 6x + 9 = (x + 3)²</li>
              <li><strong>Answer:</strong> (x + 3)²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Polynomial Long Division",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Divide x² + 3x - 10 by x + 5
            <ul>
              <li>Step 1: Divide first terms: x² ÷ x = x</li>
              <li>Step 2: Multiply: x(x + 5) = x² + 5x</li>
              <li>Step 3: Subtract: (x² + 3x) - (x² + 5x) = -2x</li>
              <li>Step 4: Bring down: -2x - 10</li>
              <li>Step 5: Divide: -2x ÷ x = -2</li>
              <li>Step 6: Multiply: -2(x + 5) = -2x - 10</li>
              <li>Step 7: Subtract: (-2x - 10) - (-2x - 10) = 0</li>
              <li><strong>Answer:</strong> x - 2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Solving Polynomial Equations",
        objective: "obj_009",
        text: `
          <h3>Steps to Solve</h3>
          <ol>
            <li>Set the polynomial equal to zero</li>
            <li>Factor completely</li>
            <li>Set each factor equal to zero</li>
            <li>Solve each equation</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x² + 5x + 6 = 0
            <ul>
              <li>Step 1: Factor: (x + 2)(x + 3) = 0</li>
              <li>Step 2: Set each factor to zero</li>
              <li>x + 2 = 0 → x = -2</li>
              <li>x + 3 = 0 → x = -3</li>
              <li><strong>Answer:</strong> x = -2, -3</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x³ - 4x = 0
            <ul>
              <li>Step 1: Factor: x(x² - 4) = 0</li>
              <li>Step 2: Continue factoring: x(x - 2)(x + 2) = 0</li>
              <li>Step 3: x = 0, x = 2, x = -2</li>
              <li><strong>Answer:</strong> x = -2, 0, 2</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Polynomials are expressions with variables raised to non-negative integer powers</li>
        <li>Add/subtract by combining like terms</li>
        <li>Multiply using distributive property or FOIL method</li>
        <li>Factor using GCF, grouping, or special formulas</li>
        <li>Solve polynomial equations by factoring and setting to zero</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Polynomial", definition: "An expression with terms of non-negative integer powers." },
    { term: "Monomial", definition: "A polynomial with one term." },
    { term: "Binomial", definition: "A polynomial with two terms." },
    { term: "Trinomial", definition: "A polynomial with three terms." },
    { term: "Degree", definition: "The highest power of the variable." },
    { term: "Coefficient", definition: "The number multiplied by a variable." },
    { term: "Factor", definition: "To break an expression into factors." },
    { term: "FOIL Method", definition: "First, Outer, Inner, Last - for multiplying binomials." }
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
      question: "What is the degree of the polynomial 4x³ - 2x² + 5?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "The highest power is 3."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Add: (3x² + 2x - 5) + (x² - 4x + 3)",
      type: "multiple_choice",
      options: ["4x² - 2x - 2", "4x² + 6x - 2", "2x² - 6x + 8", "4x² - 6x - 8"],
      answer: "4x² - 2x - 2",
      explanation: "3x² + x² = 4x²; 2x - 4x = -2x; -5 + 3 = -2"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Multiply: 3x² × 2x³",
      type: "multiple_choice",
      options: ["6x⁵", "6x⁶", "5x⁵", "5x⁶"],
      answer: "6x⁵",
      explanation: "3 × 2 = 6; x² × x³ = x⁵"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Multiply: 2x(x² + 3x - 4)",
      type: "multiple_choice",
      options: ["2x³ + 6x² - 8x", "2x³ + 3x² - 4x", "2x³ + 6x² - 4x", "2x³ + 6x² + 8x"],
      answer: "2x³ + 6x² - 8x",
      explanation: "2x × x² = 2x³; 2x × 3x = 6x²; 2x × -4 = -8x"
    },

    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Multiply: (x + 2)(x - 5)",
      type: "multiple_choice",
      options: ["x² - 3x - 10", "x² + 3x - 10", "x² - 7x + 10", "x² + 7x + 10"],
      answer: "x² - 3x - 10",
      explanation: "F: x²; O: -5x; I: 2x; L: -10 → x² - 3x - 10"
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Factor: 6x² + 15x",
      type: "multiple_choice",
      options: ["3x(2x + 5)", "3x(2x - 5)", "6x(x + 15)", "3(2x² + 5x)"],
      answer: "3x(2x + 5)",
      explanation: "GCF is 3x: 3x(2x + 5)"
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "Factor: x² + 7x + 12",
      type: "multiple_choice",
      options: ["(x + 3)(x + 4)", "(x + 6)(x + 2)", "(x + 12)(x + 1)", "(x - 3)(x - 4)"],
      answer: "(x + 3)(x + 4)",
      explanation: "3 × 4 = 12; 3 + 4 = 7"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Factor: x² - 5x + 6",
      type: "multiple_choice",
      options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 6)(x - 1)", "(x + 6)(x + 1)"],
      answer: "(x - 2)(x - 3)",
      explanation: "-2 × -3 = 6; -2 + -3 = -5"
    },

    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Factor: x² - 25",
      type: "multiple_choice",
      options: ["(x - 5)(x + 5)", "(x - 25)(x + 1)", "(x - 5)²", "(x + 5)²"],
      answer: "(x - 5)(x + 5)",
      explanation: "Difference of squares: a² - b² = (a-b)(a+b)"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Factor: 9x² - 16",
      type: "multiple_choice",
      options: ["(3x - 4)(3x + 4)", "(9x - 4)(9x + 4)", "(3x - 16)(3x + 16)", "(9x - 16)(9x + 16)"],
      answer: "(3x - 4)(3x + 4)",
      explanation: "(3x)² - 4² = (3x - 4)(3x + 4)"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: x² - 4x - 12 = 0",
      type: "multiple_choice",
      options: ["x = 6, -2", "x = -6, 2", "x = 4, -3", "x = -4, 3"],
      answer: "x = 6, -2",
      explanation: "(x - 6)(x + 2) = 0 → x = 6, -2"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: x³ - 9x = 0",
      type: "multiple_choice",
      options: ["x = 0, 3, -3", "x = 0, 9, -9", "x = 3, -3", "x = 0, 3"],
      answer: "x = 0, 3, -3",
      explanation: "x(x² - 9) = 0 → x(x - 3)(x + 3) = 0 → x = 0, 3, -3"
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Divide: (x² + 7x + 12) ÷ (x + 3)",
      type: "multiple_choice",
      options: ["x + 4", "x + 3", "x + 6", "x + 2"],
      answer: "x + 4",
      explanation: "(x + 3)(x + 4) = x² + 7x + 12"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_polynomials",
    title: "Polynomials Quiz",
    description: "Test your understanding of polynomials",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the degree of 5x⁴ - 3x² + 2?",
        type: "short_answer",
        answer_key: "4",
        explanation: "The highest power is 4."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Add: (4x² + 3x - 2) + (2x² - x + 5)",
        type: "short_answer",
        answer_key: "6x² + 2x + 3",
        explanation: "4x² + 2x² = 6x²; 3x - x = 2x; -2 + 5 = 3"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Multiply: 4x × 3x²",
        type: "short_answer",
        answer_key: "12x³",
        explanation: "4 × 3 = 12; x × x² = x³"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Multiply: (x + 3)(x + 4)",
        type: "short_answer",
        answer_key: "x² + 7x + 12",
        explanation: "F: x²; O: 4x; I: 3x; L: 12 → x² + 7x + 12"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Factor: 8x² + 12x",
        type: "short_answer",
        answer_key: "4x(2x + 3)",
        explanation: "GCF is 4x: 4x(2x + 3)"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Factor: x² + 8x + 15",
        type: "short_answer",
        answer_key: "(x + 3)(x + 5)",
        explanation: "3 × 5 = 15; 3 + 5 = 8"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Factor: x² - 49",
        type: "short_answer",
        answer_key: "(x - 7)(x + 7)",
        explanation: "Difference of squares: (x - 7)(x + 7)"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Factor: 4x² - 9",
        type: "short_answer",
        answer_key: "(2x - 3)(2x + 3)",
        explanation: "(2x)² - 3² = (2x - 3)(2x + 3)"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Solve: x² + 2x - 8 = 0",
        type: "short_answer",
        answer_key: "x = 2, -4",
        explanation: "(x + 4)(x - 2) = 0 → x = -4, 2"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Solve: x³ - 16x = 0",
        type: "short_answer",
        answer_key: "x = -4, 0, 4",
        explanation: "x(x² - 16) = 0 → x(x - 4)(x + 4) = 0 → x = -4, 0, 4"
      }
    ]
  }
};