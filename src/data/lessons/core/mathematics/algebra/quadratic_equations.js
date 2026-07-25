// Location: src/data/lessons/core/mathematics/algebra/quadratic_equations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_quadratic_equations",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Quadratic Equations",
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
      description: "Define a quadratic equation and identify its standard form",
      indicator: "Student can explain what a quadratic equation is and identify a, b, and c in ax² + bx + c = 0"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Solve quadratic equations by factorization",
      indicator: "Student can solve equations like x² + 5x + 6 = 0 by factoring"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Solve quadratic equations by completing the square",
      indicator: "Student can solve equations by completing the square"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve quadratic equations using the quadratic formula",
      indicator: "Student can apply the formula x = [-b ± √(b² - 4ac)]/2a"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Determine the nature of roots using the discriminant (b² - 4ac)",
      indicator: "Student can identify whether roots are real, equal, or imaginary"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Solve word problems involving quadratic equations",
      indicator: "Student can translate real-world problems into quadratic equations"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve quadratic equations with complex coefficients or fractions",
      indicator: "Student can solve equations like 2x²/3 - 5x/2 + 1 = 0"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Graph quadratic functions and identify key features",
      indicator: "Student can plot parabolas and identify vertex, axis of symmetry, and intercepts"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve systems involving quadratic equations",
      indicator: "Student can solve equations like x² + y² = 25 and y = 2x + 1"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER (ONE VIDEO)
  // ============================================================
  video: {
    id: "vid_001",
    title: "Quadratic Equations - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering quadratic equations, factoring, formula, and graphing."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Quadratic Equation?</h2>
      <p>A <strong>quadratic equation</strong> is an equation where the highest power of the variable is <strong>2</strong>.</p>
      <p>The standard form is: <strong>ax² + bx + c = 0</strong> where a ≠ 0</p>
      <ul>
        <li><strong>a</strong> = coefficient of x²</li>
        <li><strong>b</strong> = coefficient of x</li>
        <li><strong>c</strong> = constant term</li>
      </ul>
      <p>The graph of a quadratic equation is a <strong>parabola</strong> (U-shaped curve).</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Standard Form of Quadratic Equations",
        objective: "obj_001",
        text: `
          <h3>ax² + bx + c = 0</h3>
          <p>Key rules:</p>
          <ul>
            <li>a ≠ 0 (if a = 0, it becomes linear)</li>
            <li>a, b, c are real numbers</li>
            <li>x is the variable</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Identify a, b, and c in 2x² - 3x + 5 = 0
            <ul>
              <li>a = 2</li>
              <li>b = -3</li>
              <li>c = 5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Solving by Factorization",
        objective: "obj_002",
        text: `
          <h3>Steps for Factorization Method</h3>
          <ol>
            <li>Write in standard form: ax² + bx + c = 0</li>
            <li>Factor the quadratic expression</li>
            <li>Set each factor equal to zero</li>
            <li>Solve for x</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Solve x² + 5x + 6 = 0
            <ul>
              <li>Step 1: (x + 2)(x + 3) = 0</li>
              <li>Step 2: x + 2 = 0 or x + 3 = 0</li>
              <li>Step 3: x = -2 or x = -3</li>
              <li><strong>Answer:</strong> x = -2, -3</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Solve x² - 7x + 12 = 0
            <ul>
              <li>Step 1: (x - 3)(x - 4) = 0</li>
              <li>Step 2: x - 3 = 0 or x - 4 = 0</li>
              <li>Step 3: x = 3 or x = 4</li>
              <li><strong>Answer:</strong> x = 3, 4</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Solving by Completing the Square",
        objective: "obj_003",
        text: `
          <h3>Steps for Completing the Square</h3>
          <ol>
            <li>Rewrite in form: x² + bx = -c</li>
            <li>Add (b/2)² to both sides</li>
            <li>Write as a perfect square: (x + b/2)²</li>
            <li>Take square root of both sides</li>
            <li>Solve for x</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x² + 6x - 7 = 0
            <ul>
              <li>Step 1: x² + 6x = 7</li>
              <li>Step 2: Add (6/2)² = 9 to both sides → x² + 6x + 9 = 16</li>
              <li>Step 3: (x + 3)² = 16</li>
              <li>Step 4: x + 3 = ±4</li>
              <li>Step 5: x = 1 or x = -7</li>
              <li><strong>Answer:</strong> x = 1, -7</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Quadratic Formula",
        objective: "obj_004",
        text: `
          <h3>The Formula</h3>
          <p><strong>x = (-b ± √(b² - 4ac)) / 2a</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve 2x² - 5x - 3 = 0
            <ul>
              <li>a = 2, b = -5, c = -3</li>
              <li>Step 1: x = (5 ± √(25 + 24)) / 4</li>
              <li>Step 2: x = (5 ± √49) / 4</li>
              <li>Step 3: x = (5 ± 7) / 4</li>
              <li>Step 4: x = (5+7)/4 = 3 or x = (5-7)/4 = -1/2</li>
              <li><strong>Answer:</strong> x = 3, -1/2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Discriminant",
        objective: "obj_005",
        text: `
          <h3>The Discriminant = b² - 4ac</h3>
          <p>The discriminant tells us the nature of the roots:</p>
          <ul>
            <li><strong>If D > 0:</strong> Two real and different roots</li>
            <li><strong>If D = 0:</strong> One real root (equal roots)</li>
            <li><strong>If D < 0:</strong> No real roots (imaginary roots)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> x² + 5x + 6 = 0
            <ul>
              <li>a = 1, b = 5, c = 6</li>
              <li>D = 25 - 4(1)(6) = 25 - 24 = 1</li>
              <li><strong>D > 0 → Two real roots</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> x² + 4x + 4 = 0
            <ul>
              <li>a = 1, b = 4, c = 4</li>
              <li>D = 16 - 4(1)(4) = 16 - 16 = 0</li>
              <li><strong>D = 0 → One real root</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> x² + x + 1 = 0
            <ul>
              <li>a = 1, b = 1, c = 1</li>
              <li>D = 1 - 4(1)(1) = 1 - 4 = -3</li>
              <li><strong>D < 0 → No real roots</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Word Problems with Quadratic Equations",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A rectangle has length 3 cm more than its width. If the area is 40 cm², find the dimensions.
            <ul>
              <li>Let w = width</li>
              <li>Length = w + 3</li>
              <li>Area = w(w + 3) = 40</li>
              <li>w² + 3w - 40 = 0</li>
              <li>(w + 8)(w - 5) = 0</li>
              <li>w = 5 or w = -8 (reject negative)</li>
              <li><strong>Answer:</strong> Width = 5 cm, Length = 8 cm</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Complex Quadratic Equations",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve (2x²/3) - (5x/2) + 1 = 0
            <ul>
              <li>Step 1: Multiply by LCD (6): 4x² - 15x + 6 = 0</li>
              <li>Step 2: Use quadratic formula: a = 4, b = -15, c = 6</li>
              <li>Step 3: x = (15 ± √(225 - 96)) / 8</li>
              <li>Step 4: x = (15 ± √129) / 8</li>
              <li><strong>Answer:</strong> x = (15 ± √129)/8</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Graphing Quadratic Functions",
        objective: "obj_008",
        text: `
          <h3>Graph of y = ax² + bx + c</h3>
          <ul>
            <li><strong>Vertex:</strong> x = -b/2a</li>
            <li><strong>Axis of symmetry:</strong> x = -b/2a</li>
            <li><strong>y-intercept:</strong> (0, c)</li>
            <li><strong>a > 0:</strong> parabola opens upward</li>
            <li><strong>a < 0:</strong> parabola opens downward</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Graph y = x² - 4x + 3
            <ul>
              <li>a = 1, b = -4, c = 3</li>
              <li>Vertex: x = -(-4)/2(1) = 2</li>
              <li>y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1</li>
              <li><strong>Vertex:</strong> (2, -1)</li>
              <li><strong>Axis of symmetry:</strong> x = 2</li>
              <li><strong>y-intercept:</strong> (0, 3)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Systems with Quadratic Equations",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve: x² + y² = 25 and y = 2x + 1
            <ul>
              <li>Step 1: Substitute y into first equation</li>
              <li>x² + (2x + 1)² = 25</li>
              <li>Step 2: Expand: x² + 4x² + 4x + 1 = 25</li>
              <li>Step 3: 5x² + 4x - 24 = 0</li>
              <li>Step 4: Use quadratic formula: a = 5, b = 4, c = -24</li>
              <li>x = (-4 ± √(16 + 480)) / 10 = (-4 ± √496)/10</li>
              <li><strong>Answer:</strong> x ≈ 1.89 or x ≈ -2.54</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Quadratic equations have variables with power 2 (ax² + bx + c = 0)</li>
        <li>Solve by: factorization, completing the square, or the quadratic formula</li>
        <li>Discriminant (b² - 4ac) determines the nature of roots</li>
        <li>Graph of a quadratic is a parabola</li>
        <li>Quadratic equations model many real-world situations</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Quadratic Equation", definition: "An equation where the highest power of the variable is 2." },
    { term: "Parabola", definition: "The U-shaped graph of a quadratic function." },
    { term: "Vertex", definition: "The highest or lowest point on a parabola." },
    { term: "Axis of Symmetry", definition: "The vertical line that divides a parabola into two equal halves." },
    { term: "Discriminant", definition: "b² - 4ac; determines the nature of roots." },
    { term: "Root", definition: "The solution or x-intercept of a quadratic equation." },
    { term: "Coefficient", definition: "The number multiplied by a variable." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS (BECOMES THE TEST)
  // ============================================================
  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "Which of the following is a quadratic equation?",
      type: "multiple_choice",
      options: [
        "2x + 3 = 7",
        "x² - 4x + 3 = 0",
        "√x + 2 = 5",
        "2x³ - 5 = 3"
      ],
      answer: "x² - 4x + 3 = 0",
      explanation: "A quadratic equation has variables raised to the power of 2."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve: x² + 5x + 6 = 0",
      type: "multiple_choice",
      options: ["x = -2, -3", "x = 2, 3", "x = -1, -6", "x = 1, 6"],
      answer: "x = -2, -3",
      explanation: "(x + 2)(x + 3) = 0 → x = -2, -3"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve: x² - 7x + 12 = 0",
      type: "multiple_choice",
      options: ["x = 3, 4", "x = -3, -4", "x = 2, 6", "x = -2, -6"],
      answer: "x = 3, 4",
      explanation: "(x - 3)(x - 4) = 0 → x = 3, 4"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Solve by completing the square: x² + 4x - 5 = 0",
      type: "multiple_choice",
      options: ["x = 1, -5", "x = -1, 5", "x = 2, -3", "x = -2, 3"],
      answer: "x = 1, -5",
      explanation: "x² + 4x = 5 → (x + 2)² = 9 → x = -2 ± 3 → x = 1, -5"
    },

    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Use the quadratic formula to solve: 2x² - 5x - 3 = 0",
      type: "multiple_choice",
      options: ["x = 3, -0.5", "x = -3, 0.5", "x = 2, -1.5", "x = -2, 1.5"],
      answer: "x = 3, -0.5",
      explanation: "x = (5 ± √(25 + 24)) / 4 = (5 ± 7)/4 → x = 3, -0.5"
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the discriminant of x² + 4x + 4 = 0?",
      type: "multiple_choice",
      options: ["0", "4", "-4", "16"],
      answer: "0",
      explanation: "D = b² - 4ac = 16 - 4(1)(4) = 16 - 16 = 0"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the discriminant of x² + x + 1 = 0?",
      type: "multiple_choice",
      options: ["5", "3", "-3", "-5"],
      answer: "-3",
      explanation: "D = 1 - 4(1)(1) = 1 - 4 = -3"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "How many real roots does x² + 2x + 5 = 0 have?",
      type: "multiple_choice",
      options: ["2", "1", "0", "3"],
      answer: "0",
      explanation: "D = 4 - 20 = -16 < 0 → No real roots"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "A rectangle has length 2 cm more than its width. If the area is 35 cm², find the width.",
      type: "multiple_choice",
      options: ["5 cm", "7 cm", "3 cm", "4 cm"],
      answer: "5 cm",
      explanation: "w(w + 2) = 35 → w² + 2w - 35 = 0 → (w + 7)(w - 5) = 0 → w = 5"
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve: 3x² + 5x - 2 = 0",
      type: "multiple_choice",
      options: ["x = 1/3, -2", "x = -1/3, 2", "x = 2/3, -1", "x = -2/3, 1"],
      answer: "x = 1/3, -2",
      explanation: "x = (-5 ± √(25 + 24)) / 6 = (-5 ± 7)/6 → x = 1/3, -2"
    },

    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: (x²/2) + (3x/4) - 1 = 0",
      type: "multiple_choice",
      options: [
        "x = (-3 ± √41)/4",
        "x = (3 ± √41)/4",
        "x = (-3 ± √17)/4",
        "x = (3 ± √17)/4"
      ],
      answer: "x = (-3 ± √41)/4",
      explanation: "Multiply by 4: 2x² + 3x - 4 = 0 → a=2, b=3, c=-4 → x = (-3 ± √(9+32))/4"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Find the vertex of y = x² - 6x + 8",
      type: "multiple_choice",
      options: ["(3, -1)", "(-3, -1)", "(3, 1)", "(-3, 1)"],
      answer: "(3, -1)",
      explanation: "x = -(-6)/2(1) = 3, y = 9 - 18 + 8 = -1"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "For y = 2x² - 8x + 6, what is the axis of symmetry?",
      type: "multiple_choice",
      options: ["x = 2", "x = -2", "x = 4", "x = -4"],
      answer: "x = 2",
      explanation: "Axis of symmetry: x = -b/2a = -(-8)/2(2) = 8/4 = 2"
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the y-intercept of y = 2x² - 8x + 6?",
      type: "multiple_choice",
      options: ["(0, 6)", "(0, -6)", "(0, 2)", "(0, -2)"],
      answer: "(0, 6)",
      explanation: "y-intercept: when x = 0, y = 6"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve the system: y = x² and y = 4x - 4",
      type: "multiple_choice",
      options: ["x = 2", "x = -2", "x = 2, -2", "x = 4"],
      answer: "x = 2",
      explanation: "x² = 4x - 4 → x² - 4x + 4 = 0 → (x - 2)² = 0 → x = 2"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_quadratic_equations",
    title: "Quadratic Equations Quiz",
    description: "Test your understanding of quadratic equations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      // Easy Level (3 questions)
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the standard form of a quadratic equation?",
        type: "short_answer",
        answer_key: "ax² + bx + c = 0",
        explanation: "The standard form is ax² + bx + c = 0 where a ≠ 0."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Solve: x² + 7x + 12 = 0",
        type: "short_answer",
        answer_key: "x = -3, -4",
        explanation: "(x + 3)(x + 4) = 0 → x = -3, -4"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Solve by completing the square: x² - 6x - 7 = 0",
        type: "short_answer",
        answer_key: "x = 7, -1",
        explanation: "x² - 6x = 7 → (x - 3)² = 16 → x = 3 ± 4 → x = 7, -1"
      },
      // Medium Level (4 questions)
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Use the quadratic formula to solve: x² - 3x - 10 = 0",
        type: "short_answer",
        answer_key: "x = 5, -2",
        explanation: "x = (3 ± √(9 + 40)) / 2 = (3 ± 7)/2 → x = 5, -2"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Find the discriminant of x² + 6x + 9 = 0",
        type: "short_answer",
        answer_key: "0",
        explanation: "D = 36 - 4(1)(9) = 36 - 36 = 0"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "How many real roots does x² + 2x + 2 = 0 have?",
        type: "short_answer",
        answer_key: "0",
        explanation: "D = 4 - 8 = -4 < 0 → No real roots"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "A rectangle has length 3 cm more than its width. If the area is 28 cm², find the width.",
        type: "short_answer",
        answer_key: "4 cm",
        explanation: "w(w + 3) = 28 → w² + 3w - 28 = 0 → (w + 7)(w - 4) = 0 → w = 4"
      },
      // Hard Level (3 questions)
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Find the vertex of y = x² - 8x + 15",
        type: "short_answer",
        answer_key: "(4, -1)",
        explanation: "x = -(-8)/2(1) = 4, y = 16 - 32 + 15 = -1"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "For y = 3x² - 12x + 9, find the axis of symmetry.",
        type: "short_answer",
        answer_key: "x = 2",
        explanation: "x = -(-12)/2(3) = 12/6 = 2"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Solve: y = x² and y = 2x + 3",
        type: "short_answer",
        answer_key: "x = 3, -1",
        explanation: "x² = 2x + 3 → x² - 2x - 3 = 0 → (x - 3)(x + 1) = 0 → x = 3, -1"
      }
    ]
  }
};