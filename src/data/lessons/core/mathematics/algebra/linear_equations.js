// Location: src/data/lessons/core/mathematics/algebra/linear_equations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_linear_equations",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Linear Equations",
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
      description: "Define a linear equation and identify its components",
      indicator: "Student can explain what a linear equation is and identify the variable, coefficient, and constant"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Solve linear equations with variables on one side",
      indicator: "Student can solve equations like 2x + 3 = 7"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Solve linear equations with variables on both sides",
      indicator: "Student can solve equations like 3x - 5 = 2x + 7"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve linear equations with brackets and fractions",
      indicator: "Student can solve equations like 2(x + 3) = 12 or x/3 + 2 = 5"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply linear equations to solve word problems",
      indicator: "Student can translate word problems into equations and solve them"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Graph linear equations using the slope-intercept form (y = mx + b)",
      indicator: "Student can plot a line given the equation y = mx + b"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve linear equations with variables on both sides and brackets",
      indicator: "Student can solve complex equations like 3(2x - 1) = 5x + 7"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Find the equation of a line given two points or a point and slope",
      indicator: "Student can derive the equation of a line from given information"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve and interpret linear equations in real-world contexts",
      indicator: "Student can solve complex word problems and interpret the results"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER (ONE VIDEO)
  // ============================================================
  video: {
    id: "vid_001",
    title: "Linear Equations - Complete Lesson",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering all aspects of linear equations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Linear Equation?</h2>
      <p>A <strong>linear equation</strong> is an equation where the highest power of the variable is <strong>1</strong>.</p>
      <p>The standard form is: <strong>ax + b = 0</strong> where a ≠ 0</p>
      <p>The graph of a linear equation is a <strong>straight line</strong> — that's why it's called "linear"!</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Components of a Linear Equation",
        objective: "obj_001",
        text: `
          <h3>Parts of a Linear Equation</h3>
          <p>In the equation <strong>ax + b = 0</strong>:</p>
          <ul>
            <li><strong>a</strong> = coefficient (the number multiplied by x)</li>
            <li><strong>x</strong> = variable (the unknown value)</li>
            <li><strong>b</strong> = constant (the fixed number)</li>
          </ul>
          <div class="example-box">
            <strong>📌 Example:</strong> 3x + 5 = 11
            <ul>
              <li>a = 3 (coefficient)</li>
              <li>x = variable</li>
              <li>b = 5 (constant)</li>
            </ul>
          </div>
          <p><strong>Remember:</strong> The variable must have exponent 1.</p>
          <p><span class="warning">❌ x² is NOT linear</span></p>
          <p><span class="success">✅ x is linear</span></p>
        `
      },
      {
        id: "sec_002",
        title: "Solving Linear Equations (One Side)",
        objective: "obj_002",
        text: `
          <h3>The Golden Rule of Algebra</h3>
          <p>Whatever you do to one side of the equation, you <strong>must</strong> do to the other side.</p>
          
          <h3>Step-by-Step Method</h3>
          <ol>
            <li><strong>Simplify</strong> both sides (combine like terms)</li>
            <li><strong>Add or subtract</strong> to get the variable term alone</li>
            <li><strong>Multiply or divide</strong> to solve for the variable</li>
            <li><strong>Check</strong> your answer in the original equation</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2x + 3 = 7
            <ul>
              <li>Step 1: Subtract 3 from both sides → 2x = 4</li>
              <li>Step 2: Divide both sides by 2 → x = 2</li>
              <li>Check: 2(2) + 3 = 4 + 3 = 7 ✅</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 5x - 2 = 13
            <ul>
              <li>Step 1: Add 2 to both sides → 5x = 15</li>
              <li>Step 2: Divide both sides by 5 → x = 3</li>
              <li>Check: 5(3) - 2 = 15 - 2 = 13 ✅</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Solving Linear Equations (Both Sides)",
        objective: "obj_003",
        text: `
          <h3>When Variables Are on Both Sides</h3>
          <ol>
            <li>Get all <strong>variable terms</strong> on one side</li>
            <li>Get all <strong>constant terms</strong> on the other side</li>
            <li>Combine like terms</li>
            <li>Solve for the variable</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3x - 5 = 2x + 7
            <ul>
              <li>Step 1: Subtract 2x from both sides → x - 5 = 7</li>
              <li>Step 2: Add 5 to both sides → x = 12</li>
              <li>Check: 3(12) - 5 = 36 - 5 = 31</li>
              <li>2(12) + 7 = 24 + 7 = 31 ✅</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 4x + 2 = 2x + 10
            <ul>
              <li>Step 1: Subtract 2x from both sides → 2x + 2 = 10</li>
              <li>Step 2: Subtract 2 from both sides → 2x = 8</li>
              <li>Step 3: Divide both sides by 2 → x = 4</li>
              <li>Check: 4(4) + 2 = 16 + 2 = 18</li>
              <li>2(4) + 10 = 8 + 10 = 18 ✅</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Equations with Brackets and Fractions",
        objective: "obj_004",
        text: `
          <h3>Expanding Brackets</h3>
          <p>Use the <strong>distributive property</strong>: a(b + c) = ab + ac</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2(x + 3) = 12
            <ul>
              <li>Step 1: Expand → 2x + 6 = 12</li>
              <li>Step 2: Subtract 6 → 2x = 6</li>
              <li>Step 3: Divide by 2 → x = 3</li>
              <li>Check: 2(3 + 3) = 2(6) = 12 ✅</li>
            </ul>
          </div>
          
          <h3>Clearing Fractions</h3>
          <p>Multiply both sides by the <strong>least common denominator (LCD)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> x/3 + 2 = 5
            <ul>
              <li>Step 1: Subtract 2 → x/3 = 3</li>
              <li>Step 2: Multiply by 3 → x = 9</li>
              <li>Check: 9/3 + 2 = 3 + 2 = 5 ✅</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Word Problems with Linear Equations",
        objective: "obj_005",
        text: `
          <h3>Steps to Solve Word Problems</h3>
          <ol>
            <li><strong>Read carefully</strong> and identify what you're solving for</li>
            <li><strong>Define the variable</strong> (let x = the unknown)</li>
            <li><strong>Write the equation</strong> from the problem</li>
            <li><strong>Solve the equation</strong></li>
            <li><strong>Check your answer</strong> in the original problem</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> "The sum of twice a number and 5 is 13. Find the number."
            <ul>
              <li>Let x = the number</li>
              <li>2x + 5 = 13</li>
              <li>2x = 8</li>
              <li>x = 4</li>
              <li><strong>Answer:</strong> The number is 4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> "A phone plan costs $30 per month plus $0.05 per minute. If the bill is $45, how many minutes were used?"
            <ul>
              <li>Let m = minutes used</li>
              <li>30 + 0.05m = 45</li>
              <li>0.05m = 15</li>
              <li>m = 300</li>
              <li><strong>Answer:</strong> 300 minutes were used</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Graphing Linear Equations",
        objective: "obj_006",
        text: `
          <h3>The Slope-Intercept Form</h3>
          <p><strong>y = mx + b</strong></p>
          <ul>
            <li><strong>m</strong> = slope (steepness of the line)</li>
            <li><strong>b</strong> = y-intercept (where the line crosses the y-axis)</li>
          </ul>
          
          <h3>Slope = Rise/Run</h3>
          <p>If m = 2, it means "up 2, right 1" (2/1)</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Graph y = 2x + 1
            <ul>
              <li>Step 1: Identify y-intercept: b = 1 → point (0, 1)</li>
              <li>Step 2: Identify slope: m = 2 = 2/1</li>
              <li>Step 3: From (0, 1), go up 2 and right 1 → point (1, 3)</li>
              <li>Step 4: Draw a straight line through both points</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Graph y = -x + 3
            <ul>
              <li>Step 1: b = 3 → point (0, 3)</li>
              <li>Step 2: m = -1 = -1/1 (down 1, right 1)</li>
              <li>Step 3: From (0, 3), go down 1 and right 1 → point (1, 2)</li>
              <li>Step 4: Draw the line through both points</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Complex Linear Equations",
        objective: "obj_007",
        text: `
          <h3>Equations with Brackets on Both Sides</h3>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3(2x - 1) = 5x + 7
            <ul>
              <li>Step 1: Expand left side → 6x - 3 = 5x + 7</li>
              <li>Step 2: Subtract 5x from both sides → x - 3 = 7</li>
              <li>Step 3: Add 3 to both sides → x = 10</li>
              <li>Check: 3(20 - 1) = 3(19) = 57</li>
              <li>5(10) + 7 = 50 + 7 = 57 ✅</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Finding the Equation of a Line",
        objective: "obj_008",
        text: `
          <h3>Given Two Points (x₁, y₁) and (x₂, y₂)</h3>
          <p><strong>Step 1:</strong> Find the slope: m = (y₂ - y₁)/(x₂ - x₁)</p>
          <p><strong>Step 2:</strong> Use point-slope form: y - y₁ = m(x - x₁)</p>
          <p><strong>Step 3:</strong> Simplify to y = mx + b</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find the equation of the line through (2, 3) and (4, 7)
            <ul>
              <li>Step 1: m = (7 - 3)/(4 - 2) = 4/2 = 2</li>
              <li>Step 2: y - 3 = 2(x - 2)</li>
              <li>Step 3: y - 3 = 2x - 4</li>
              <li>Step 4: y = 2x - 1</li>
              <li><strong>Answer:</strong> y = 2x - 1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Applications of Linear Equations",
        objective: "obj_009",
        text: `
          <h3>Real-World Applications</h3>
          <p>Linear equations are used in many real-world situations:</p>
          <ul>
            <li><strong>Business:</strong> Cost, revenue, and profit calculations</li>
            <li><strong>Science:</strong> Converting between units (Celsius to Fahrenheit)</li>
            <li><strong>Travel:</strong> Distance, rate, and time problems</li>
            <li><strong>Finance:</strong> Simple interest and budgeting</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> "A car rental company charges $50 per day plus $0.20 per mile. If the bill is $90, how many miles were driven?"
            <ul>
              <li>Let m = miles driven</li>
              <li>50 + 0.20m = 90</li>
              <li>0.20m = 40</li>
              <li>m = 200</li>
              <li><strong>Answer:</strong> 200 miles were driven</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Linear equations have variables with power 1</li>
        <li>Solve by isolating the variable (Golden Rule)</li>
        <li>Graph using y = mx + b (slope-intercept form)</li>
        <li>Real-world problems can be modeled with linear equations</li>
        <li>Always check your answer in the original equation</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Linear Equation", definition: "An equation where the highest power of the variable is 1." },
    { term: "Coefficient", definition: "The number multiplied by a variable (e.g., 3 in 3x)." },
    { term: "Variable", definition: "A symbol (usually a letter) representing an unknown value." },
    { term: "Constant", definition: "A fixed value that does not change (e.g., 5 in 2x + 5)." },
    { term: "Slope (m)", definition: "The steepness of a line, calculated as rise/run." },
    { term: "y-intercept (b)", definition: "The point where a line crosses the y-axis (x = 0)." },
    { term: "Golden Rule", definition: "Whatever you do to one side of an equation, you must do to the other." }
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
      question: "Which of the following is a linear equation?",
      type: "multiple_choice",
      options: [
        "2x + 3 = 7",
        "x² + 2 = 5",
        "√x + 3 = 7",
        "2x³ - 5 = 3"
      ],
      answer: "2x + 3 = 7",
      explanation: "A linear equation has variables raised to the power of 1. 2x + 3 = 7 has x to the power of 1."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve for x: 2x + 5 = 13",
      type: "multiple_choice",
      options: ["x = 4", "x = 5", "x = 6", "x = 3"],
      answer: "x = 4",
      explanation: "2x + 5 = 13 → 2x = 8 → x = 4"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve for x: 3x - 7 = 11",
      type: "multiple_choice",
      options: ["x = 4", "x = 5", "x = 6", "x = 3"],
      answer: "x = 6",
      explanation: "3x - 7 = 11 → 3x = 18 → x = 6"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Solve for x: 4x + 3 = 2x + 11",
      type: "multiple_choice",
      options: ["x = 4", "x = 5", "x = 6", "x = 3"],
      answer: "x = 4",
      explanation: "4x + 3 = 2x + 11 → 2x + 3 = 11 → 2x = 8 → x = 4"
    },

    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve for x: 2(x + 3) = 14",
      type: "multiple_choice",
      options: ["x = 4", "x = 5", "x = 6", "x = 3"],
      answer: "x = 4",
      explanation: "2(x + 3) = 14 → 2x + 6 = 14 → 2x = 8 → x = 4"
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve for x: x/3 + 2 = 7",
      type: "multiple_choice",
      options: ["x = 9", "x = 12", "x = 15", "x = 6"],
      answer: "x = 15",
      explanation: "x/3 + 2 = 7 → x/3 = 5 → x = 15"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "The sum of twice a number and 8 is 22. What is the number?",
      type: "multiple_choice",
      options: ["6", "7", "8", "9"],
      answer: "7",
      explanation: "Let x = the number. 2x + 8 = 22 → 2x = 14 → x = 7"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the slope of the line y = 3x - 2?",
      type: "multiple_choice",
      options: ["3", "2", "-2", "-3"],
      answer: "3",
      explanation: "In y = mx + b, m is the slope. Here m = 3."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the y-intercept of the line y = 3x - 2?",
      type: "multiple_choice",
      options: ["3", "2", "-2", "-3"],
      answer: "-2",
      explanation: "In y = mx + b, b is the y-intercept. Here b = -2."
    },
    {
      id: "prac_010",
      objective: "obj_005",
      difficulty: "medium",
      question: "A phone plan costs $40 per month plus $0.10 per minute. If the bill is $55, how many minutes were used?",
      type: "multiple_choice",
      options: ["100", "150", "200", "250"],
      answer: "150",
      explanation: "Let m = minutes. 40 + 0.10m = 55 → 0.10m = 15 → m = 150"
    },

    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve for x: 3(2x - 1) = 5x + 7",
      type: "multiple_choice",
      options: ["x = 8", "x = 9", "x = 10", "x = 11"],
      answer: "x = 10",
      explanation: "3(2x - 1) = 5x + 7 → 6x - 3 = 5x + 7 → x - 3 = 7 → x = 10"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve for x: 2(x + 4) = 3(x - 1)",
      type: "multiple_choice",
      options: ["x = 8", "x = 9", "x = 10", "x = 11"],
      answer: "x = 11",
      explanation: "2(x + 4) = 3(x - 1) → 2x + 8 = 3x - 3 → 8 + 3 = 3x - 2x → 11 = x"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find the equation of the line through (2, 3) and (4, 7)",
      type: "multiple_choice",
      options: ["y = 2x - 1", "y = 2x + 1", "y = 3x - 1", "y = 3x + 1"],
      answer: "y = 2x - 1",
      explanation: "m = (7-3)/(4-2) = 4/2 = 2. y - 3 = 2(x - 2) → y = 2x - 1"
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find the equation of a line with slope 3 through the point (1, 4)",
      type: "multiple_choice",
      options: ["y = 3x + 1", "y = 3x + 2", "y = 3x - 1", "y = 3x + 4"],
      answer: "y = 3x + 1",
      explanation: "y - 4 = 3(x - 1) → y - 4 = 3x - 3 → y = 3x + 1"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "A car rental company charges $60 per day plus $0.25 per mile. If the total cost is $110 and 200 miles were driven, how many days was the car rented?",
      type: "multiple_choice",
      options: ["1 day", "2 days", "3 days", "4 days"],
      answer: "2 days",
      explanation: "Let d = days. 60d + 0.25(200) = 110 → 60d + 50 = 110 → 60d = 60 → d = 2"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_linear_equations",
    title: "Linear Equations Quiz",
    description: "Test your understanding of linear equations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      // Easy Level (3 questions)
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the coefficient of x in the equation 5x - 3 = 7?",
        type: "short_answer",
        answer_key: "5",
        explanation: "The coefficient is the number multiplied by x, which is 5."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Solve: 3x + 4 = 19",
        type: "short_answer",
        answer_key: "x = 5",
        explanation: "3x + 4 = 19 → 3x = 15 → x = 5"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Solve: 5x - 2 = 2x + 10",
        type: "short_answer",
        answer_key: "x = 4",
        explanation: "5x - 2 = 2x + 10 → 3x - 2 = 10 → 3x = 12 → x = 4"
      },
      // Medium Level (4 questions)
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Solve: 3(x - 2) = 15",
        type: "short_answer",
        answer_key: "x = 7",
        explanation: "3(x - 2) = 15 → 3x - 6 = 15 → 3x = 21 → x = 7"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Solve: x/4 + 3 = 7",
        type: "short_answer",
        answer_key: "x = 16",
        explanation: "x/4 + 3 = 7 → x/4 = 4 → x = 16"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the slope of the line y = 4x + 5?",
        type: "short_answer",
        answer_key: "4",
        explanation: "In y = mx + b, m is the slope. Here m = 4."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "The sum of a number and 6 is 15. What is the number?",
        type: "short_answer",
        answer_key: "9",
        explanation: "Let x = the number. x + 6 = 15 → x = 9"
      },
      // Hard Level (3 questions)
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Solve: 2(3x + 1) = 4x + 10",
        type: "short_answer",
        answer_key: "x = 4",
        explanation: "2(3x + 1) = 4x + 10 → 6x + 2 = 4x + 10 → 2x + 2 = 10 → 2x = 8 → x = 4"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Find the equation of a line with slope 2 through the point (3, 5)",
        type: "short_answer",
        answer_key: "y = 2x - 1",
        explanation: "y - 5 = 2(x - 3) → y - 5 = 2x - 6 → y = 2x - 1"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A taxi charges $3.50 per mile plus a $2.50 flat fee. If a ride costs $20, how many miles was the ride?",
        type: "short_answer",
        answer_key: "5 miles",
        explanation: "Let m = miles. 3.50m + 2.50 = 20 → 3.50m = 17.50 → m = 5"
      }
    ]
  }
};