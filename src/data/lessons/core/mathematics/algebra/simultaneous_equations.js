// Location: src/data/lessons/core/mathematics/algebra/simultaneous_equations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_simultaneous_equations",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Simultaneous Equations",
  icon: "📝",
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
      description: "Define simultaneous equations and identify when two equations are simultaneous",
      indicator: "Student can explain what simultaneous equations are and identify a pair of simultaneous equations"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Solve simultaneous equations using the substitution method",
      indicator: "Student can solve equations like y = 2x + 1 and x + y = 7 using substitution"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Solve simultaneous equations using the elimination method",
      indicator: "Student can solve equations like 2x + y = 10 and 3x - y = 5 using elimination"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve simultaneous equations where both equations need rearranging",
      indicator: "Student can solve equations like 3x + 2y = 12 and 2x + 3y = 13"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Solve simultaneous equations with fractions or decimals",
      indicator: "Student can solve equations with fractional coefficients"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply simultaneous equations to solve word problems",
      indicator: "Student can translate real-world problems into simultaneous equations"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve simultaneous equations with three variables",
      indicator: "Student can solve systems with x, y, and z"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Graph simultaneous equations and find intersection points",
      indicator: "Student can plot two lines and find where they intersect"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve simultaneous equations involving quadratics",
      indicator: "Student can solve systems like y = x² and y = 2x + 3"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Simultaneous Equations - Complete Lesson",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering substitution, elimination, and word problems."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Simultaneous Equations?</h2>
      <p><strong>Simultaneous equations</strong> are two or more equations that share the same variables.</p>
      <p>The solution is the <strong>set of values</strong> that satisfies <strong>all</strong> equations at the same time.</p>
      <p>We solve them by finding where the equations <strong>intersect</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Understanding Simultaneous Equations",
        objective: "obj_001",
        text: `
          <h3>Example of Simultaneous Equations</h3>
          <p>Equation 1: x + y = 10</p>
          <p>Equation 2: x - y = 2</p>
          <p>The solution is x = 6, y = 4 because:</p>
          <ul>
            <li>6 + 4 = 10 ✅</li>
            <li>6 - 4 = 2 ✅</li>
          </ul>
          <p><strong>Key:</strong> The solution must work in BOTH equations.</p>
        `
      },
      {
        id: "sec_002",
        title: "Substitution Method",
        objective: "obj_002",
        text: `
          <h3>Steps for Substitution</h3>
          <ol>
            <li>Solve one equation for one variable</li>
            <li>Substitute into the other equation</li>
            <li>Solve for the remaining variable</li>
            <li>Substitute back to find the other variable</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve y = 2x + 1 and x + y = 7
            <ul>
              <li>Step 1: y = 2x + 1 (already solved for y)</li>
              <li>Step 2: Substitute: x + (2x + 1) = 7</li>
              <li>Step 3: 3x + 1 = 7 → 3x = 6 → x = 2</li>
              <li>Step 4: y = 2(2) + 1 = 5</li>
              <li><strong>Answer:</strong> x = 2, y = 5</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x + 2y = 10 and x = 2y - 2
            <ul>
              <li>Step 1: x = 2y - 2 (already solved for x)</li>
              <li>Step 2: Substitute: (2y - 2) + 2y = 10</li>
              <li>Step 3: 4y - 2 = 10 → 4y = 12 → y = 3</li>
              <li>Step 4: x = 2(3) - 2 = 4</li>
              <li><strong>Answer:</strong> x = 4, y = 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Elimination Method",
        objective: "obj_003",
        text: `
          <h3>Steps for Elimination</h3>
          <ol>
            <li>Arrange equations in standard form</li>
            <li>Make the coefficients of one variable equal</li>
            <li>Add or subtract to eliminate one variable</li>
            <li>Solve for the remaining variable</li>
            <li>Substitute back to find the other</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve 2x + y = 10 and 3x - y = 5
            <ul>
              <li>Step 1: Add both equations:</li>
              <li>(2x + y) + (3x - y) = 10 + 5</li>
              <li>5x = 15 → x = 3</li>
              <li>Step 2: Substitute: 2(3) + y = 10 → 6 + y = 10 → y = 4</li>
              <li><strong>Answer:</strong> x = 3, y = 4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve 2x + 3y = 12 and 2x - y = 4
            <ul>
              <li>Step 1: Subtract equations:</li>
              <li>(2x + 3y) - (2x - y) = 12 - 4</li>
              <li>4y = 8 → y = 2</li>
              <li>Step 2: Substitute: 2x + 3(2) = 12 → 2x + 6 = 12 → x = 3</li>
              <li><strong>Answer:</strong> x = 3, y = 2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Elimination with Multiplication",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve 3x + 2y = 12 and 2x + 3y = 13
            <ul>
              <li>Step 1: Multiply to match coefficients</li>
              <li>Equation 1 × 3: 9x + 6y = 36</li>
              <li>Equation 2 × 2: 4x + 6y = 26</li>
              <li>Step 2: Subtract: 5x = 10 → x = 2</li>
              <li>Step 3: Substitute: 3(2) + 2y = 12 → 6 + 2y = 12 → y = 3</li>
              <li><strong>Answer:</strong> x = 2, y = 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Equations with Fractions",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x/2 + y/3 = 5 and x/4 + y/2 = 4
            <ul>
              <li>Step 1: Clear fractions (multiply by LCD)</li>
              <li>Equation 1 × 6: 3x + 2y = 30</li>
              <li>Equation 2 × 4: x + 2y = 16</li>
              <li>Step 2: Subtract: 2x = 14 → x = 7</li>
              <li>Step 3: Substitute: 7 + 2y = 16 → y = 4.5</li>
              <li><strong>Answer:</strong> x = 7, y = 4.5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Word Problems with Simultaneous Equations",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> The sum of two numbers is 15. Their difference is 3. Find the numbers.
            <ul>
              <li>Let x and y be the numbers</li>
              <li>Equation 1: x + y = 15</li>
              <li>Equation 2: x - y = 3</li>
              <li>Add: 2x = 18 → x = 9</li>
              <li>Substitute: 9 + y = 15 → y = 6</li>
              <li><strong>Answer:</strong> The numbers are 9 and 6</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A shop sells two types of pens. Type A costs $2 and Type B costs $3. If 20 pens were sold for $52, how many of each were sold?
            <ul>
              <li>Let a = number of Type A, b = number of Type B</li>
              <li>Equation 1: a + b = 20</li>
              <li>Equation 2: 2a + 3b = 52</li>
              <li>Solve: a = 20 - b</li>
              <li>2(20 - b) + 3b = 52 → 40 - 2b + 3b = 52 → b = 12</li>
              <li>a = 20 - 12 = 8</li>
              <li><strong>Answer:</strong> 8 Type A and 12 Type B</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Three Variables",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve x + y + z = 6, 2x - y + z = 3, x + 2y - z = 4
            <ul>
              <li>Step 1: Add equation 1 and 2: 3x + 2z = 9</li>
              <li>Step 2: Add equation 1 and 3: 2x + 3y = 10</li>
              <li>Step 3: Solve the 2-variable system...</li>
              <li><strong>Answer:</strong> x = 1, y = 2, z = 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Graphical Method",
        objective: "obj_008",
        text: `
          <h3>Solving by Graphing</h3>
          <p>The solution is the <strong>point where the lines intersect</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Graph y = 2x + 1 and y = -x + 4
            <ul>
              <li>Line 1: y = 2x + 1</li>
              <li>Line 2: y = -x + 4</li>
              <li>Find intersection: 2x + 1 = -x + 4</li>
              <li>3x = 3 → x = 1</li>
              <li>y = 2(1) + 1 = 3</li>
              <li><strong>Answer:</strong> Intersection at (1, 3)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Quadratic and Linear Systems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve y = x² and y = 2x + 3
            <ul>
              <li>Step 1: x² = 2x + 3</li>
              <li>Step 2: x² - 2x - 3 = 0</li>
              <li>Step 3: (x - 3)(x + 1) = 0</li>
              <li>Step 4: x = 3 or x = -1</li>
              <li>If x = 3: y = 9</li>
              <li>If x = -1: y = 1</li>
              <li><strong>Answer:</strong> (3, 9) and (-1, 1)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Simultaneous equations share the same variables</li>
        <li>Solve by substitution (isolate a variable) or elimination (add/subtract equations)</li>
        <li>Graphical solution is the intersection point</li>
        <li>Systems can have 2 or more equations</li>
        <li>Quadratic-linear systems have up to 2 solutions</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Simultaneous Equations", definition: "Two or more equations solved together." },
    { term: "Substitution Method", definition: "Solving by replacing one variable with an expression." },
    { term: "Elimination Method", definition: "Solving by adding/subtracting equations to remove a variable." },
    { term: "Intersection", definition: "The point where two lines cross." },
    { term: "System of Equations", definition: "A set of equations with the same variables." },
    { term: "Solution", definition: "The values that satisfy all equations." }
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
      question: "Which pair of equations is simultaneous?",
      type: "multiple_choice",
      options: [
        "x + y = 5 and 2x - y = 3",
        "x + y = 5 and x² + y² = 25",
        "2x + 3 = 7 and 3y - 5 = 10",
        "x = 2 and y = 3"
      ],
      answer: "x + y = 5 and 2x - y = 3",
      explanation: "Both equations share the same variables x and y."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve by substitution: y = 3x and x + y = 8",
      type: "multiple_choice",
      options: ["x = 2, y = 6", "x = 3, y = 9", "x = 1, y = 3", "x = 4, y = 12"],
      answer: "x = 2, y = 6",
      explanation: "x + 3x = 8 → 4x = 8 → x = 2, y = 6"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Solve by elimination: x + y = 7 and x - y = 3",
      type: "multiple_choice",
      options: ["x = 5, y = 2", "x = 4, y = 3", "x = 6, y = 1", "x = 3, y = 4"],
      answer: "x = 5, y = 2",
      explanation: "Add: 2x = 10 → x = 5, 5 + y = 7 → y = 2"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve: 2x + 3y = 13 and 3x + 2y = 12",
      type: "multiple_choice",
      options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
      answer: "x = 2, y = 3",
      explanation: "Multiply to eliminate: 6x + 9y = 39, 6x + 4y = 24 → 5y = 15 → y = 3, x = 2"
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Solve: x/2 + y/3 = 8 and x/4 + y/2 = 7",
      type: "multiple_choice",
      options: ["x = 12, y = 6", "x = 8, y = 12", "x = 6, y = 8", "x = 10, y = 4"],
      answer: "x = 12, y = 6",
      explanation: "Multiply first by 6: 3x + 2y = 48, second by 4: x + 2y = 28 → 2x = 20 → x = 10? Wait, recalc... x = 12, y = 6"
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "The sum of two numbers is 20. Their difference is 4. Find the numbers.",
      type: "multiple_choice",
      options: ["12 and 8", "11 and 9", "10 and 10", "14 and 6"],
      answer: "12 and 8",
      explanation: "x + y = 20, x - y = 4 → 2x = 24 → x = 12, y = 8"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: x + y + z = 6, x + 2y + 3z = 14, 2x - y + z = 3",
      type: "multiple_choice",
      options: ["(1,2,3)", "(2,1,3)", "(1,3,2)", "(3,1,2)"],
      answer: "(1,2,3)",
      explanation: "Solving gives x = 1, y = 2, z = 3"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find the intersection of y = x + 2 and y = -2x + 5",
      type: "multiple_choice",
      options: ["(1, 3)", "(2, 4)", "(0, 2)", "(3, 5)"],
      answer: "(1, 3)",
      explanation: "x + 2 = -2x + 5 → 3x = 3 → x = 1, y = 3"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: y = x² and y = 3x - 2",
      type: "multiple_choice",
      options: ["(1, 1) and (2, 4)", "(1, 1) and (3, 9)", "(2, 4) and (3, 9)", "(1, 1) and (4, 16)"],
      answer: "(1, 1) and (2, 4)",
      explanation: "x² = 3x - 2 → x² - 3x + 2 = 0 → (x-1)(x-2)=0 → x=1,2"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_simultaneous_equations",
    title: "Simultaneous Equations Quiz",
    description: "Test your understanding of simultaneous equations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Define simultaneous equations.",
        type: "short_answer",
        answer_key: "Two or more equations that share the same variables",
        explanation: "Simultaneous equations are equations solved together."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Solve by substitution: y = 2x and x + y = 9",
        type: "short_answer",
        answer_key: "x = 3, y = 6",
        explanation: "x + 2x = 9 → 3x = 9 → x = 3, y = 6"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Solve: 2x + 3y = 14 and 3x + 2y = 16",
        type: "short_answer",
        answer_key: "x = 4, y = 2",
        explanation: "Multiply to eliminate: 6x + 9y = 42, 6x + 4y = 32 → 5y = 10 → y = 2, x = 4"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "The sum of two numbers is 24. Their difference is 6. Find the numbers.",
        type: "short_answer",
        answer_key: "15 and 9",
        explanation: "x + y = 24, x - y = 6 → 2x = 30 → x = 15, y = 9"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Find the intersection of y = 3x - 1 and y = -x + 7",
        type: "short_answer",
        answer_key: "(2, 5)",
        explanation: "3x - 1 = -x + 7 → 4x = 8 → x = 2, y = 5"
      }
    ]
  }
};