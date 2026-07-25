// Location: src/data/lessons/core/mathematics/algebra/inequalities.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_inequalities",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Inequalities",
  icon: "📏",
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
      description: "Define inequalities and identify the four inequality symbols",
      indicator: "Student can explain what an inequality is and identify <, >, ≤, ≥"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Solve simple linear inequalities (one-step)",
      indicator: "Student can solve inequalities like x + 3 > 7"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Graph solutions on a number line",
      indicator: "Student can represent inequality solutions on a number line"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve multi-step linear inequalities",
      indicator: "Student can solve inequalities like 2x - 5 < 3x + 2"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Solve compound inequalities (AND/OR)",
      indicator: "Student can solve inequalities like -3 < 2x + 1 < 7"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply inequalities to word problems",
      indicator: "Student can translate real-world problems into inequalities"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve quadratic inequalities",
      indicator: "Student can solve inequalities like x² - 5x + 6 > 0"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve inequalities with absolute values",
      indicator: "Student can solve inequalities like |x - 3| < 5"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Graph inequalities on a coordinate plane",
      indicator: "Student can graph linear inequalities like y > 2x + 1"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Inequalities - Complete Lesson",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering solving and graphing inequalities."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Inequalities?</h2>
      <p>An <strong>inequality</strong> is a mathematical statement that compares two values using <strong>inequality symbols</strong>.</p>
      <ul>
        <li><strong><</strong> → Less than</li>
        <li><strong>></strong> → Greater than</li>
        <li><strong>≤</strong> → Less than or equal to</li>
        <li><strong>≥</strong> → Greater than or equal to</li>
      </ul>
      <p>Instead of one solution, inequalities have a <strong>range of solutions</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Inequality Symbols",
        objective: "obj_001",
        text: `
          <h3>The Four Symbols</h3>
          <table>
            <tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr>
            <tr><td><</td><td>Less than</td><td>3 < 5 (3 is less than 5)</td></tr>
            <tr><td>></td><td>Greater than</td><td>5 > 3 (5 is greater than 3)</td></tr>
            <tr><td>≤</td><td>Less than or equal to</td><td>x ≤ 4 (x is less than or equal to 4)</td></tr>
            <tr><td>≥</td><td>Greater than or equal to</td><td>x ≥ 2 (x is greater than or equal to 2)</td></tr>
          </table>
          <p><strong>Note:</strong> The "mouth" always points to the larger number.</p>
        `
      },
      {
        id: "sec_002",
        title: "Solving Simple Inequalities",
        objective: "obj_002",
        text: `
          <h3>Rules for Solving Inequalities</h3>
          <ul>
            <li>Same rules as equations: do the same to both sides</li>
            <li><strong>⚠️ IMPORTANT:</strong> When multiplying or dividing by a NEGATIVE number, <strong>flip the inequality sign</strong></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> x + 3 > 7
            <ul>
              <li>Subtract 3 from both sides: x > 4</li>
              <li><strong>Answer:</strong> x > 4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 5x ≤ 15
            <ul>
              <li>Divide both sides by 5: x ≤ 3</li>
              <li><strong>Answer:</strong> x ≤ 3</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3 (Watch out!):</strong> -2x < 10
            <ul>
              <li>Divide both sides by -2 (FLIP SIGN): x > -5</li>
              <li><strong>Answer:</strong> x > -5</li>
              <li>⚠️ Because we divided by a negative number, the sign flipped!</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Graphing on a Number Line",
        objective: "obj_003",
        text: `
          <h3>How to Graph Inequalities</h3>
          <ul>
            <li><strong>Open circle (○):</strong> < or > (not included)</li>
            <li><strong>Closed circle (●):</strong> ≤ or ≥ (included)</li>
            <li><strong>Arrow:</strong> Points in the direction of the solution</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> x > 3
            <p>○━━━━━━━━━━━→<br>
               &nbsp;&nbsp;&nbsp;&nbsp;3</p>
            <p>Open circle at 3, arrow to the right</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> x ≤ -1
            <p>←━━━━━━━━━━━●<br>
               &nbsp;&nbsp;-1</p>
            <p>Closed circle at -1, arrow to the left</p>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Multi-Step Inequalities",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2x - 5 < 3x + 2
            <ul>
              <li>Step 1: Subtract 2x from both sides: -5 < x + 2</li>
              <li>Step 2: Subtract 2 from both sides: -7 < x</li>
              <li><strong>Answer:</strong> x > -7</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 3x + 4 ≥ 7x - 8
            <ul>
              <li>Step 1: Subtract 3x from both sides: 4 ≥ 4x - 8</li>
              <li>Step 2: Add 8 to both sides: 12 ≥ 4x</li>
              <li>Step 3: Divide by 4: 3 ≥ x</li>
              <li><strong>Answer:</strong> x ≤ 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Compound Inequalities",
        objective: "obj_005",
        text: `
          <h3>AND Inequalities</h3>
          <p>Both conditions must be true.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> -3 < 2x + 1 < 7
            <ul>
              <li>Step 1: Split into two: -3 < 2x + 1 AND 2x + 1 < 7</li>
              <li>Step 2: Solve left: -3 < 2x + 1 → -4 < 2x → -2 < x</li>
              <li>Step 3: Solve right: 2x + 1 < 7 → 2x < 6 → x < 3</li>
              <li><strong>Answer:</strong> -2 < x < 3</li>
            </ul>
          </div>
          
          <h3>OR Inequalities</h3>
          <p>Either condition can be true.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> x - 3 < 2 OR x + 1 > 6
            <ul>
              <li>Solve first: x - 3 < 2 → x < 5</li>
              <li>Solve second: x + 1 > 6 → x > 5</li>
              <li><strong>Answer:</strong> x < 5 OR x > 5 (all real numbers except 5)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Word Problems with Inequalities",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A student needs at least 70% to pass. If the test is out of 100, what is the minimum score needed?
            <ul>
              <li>Let s = score</li>
              <li>s ≥ 70</li>
              <li><strong>Answer:</strong> s ≥ 70 (minimum 70)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A job pays $15 per hour. If you need at least $300 to pay bills, how many hours must you work?
            <ul>
              <li>Let h = hours</li>
              <li>15h ≥ 300</li>
              <li>h ≥ 20</li>
              <li><strong>Answer:</strong> h ≥ 20 (at least 20 hours)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Quadratic Inequalities",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> x² - 5x + 6 > 0
            <ul>
              <li>Step 1: Factor: (x - 2)(x - 3) > 0</li>
              <li>Step 2: Find critical values: x = 2, x = 3</li>
              <li>Step 3: Test intervals: (-∞, 2), (2, 3), (3, ∞)</li>
              <li>Test x = 0: (+) → positive</li>
              <li>Test x = 2.5: (-) → negative</li>
              <li>Test x = 4: (+) → positive</li>
              <li><strong>Answer:</strong> x < 2 OR x > 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Absolute Value Inequalities",
        objective: "obj_008",
        text: `
          <h3>Key Rule</h3>
          <p>|x| < a means: -a < x < a</p>
          <p>|x| > a means: x < -a OR x > a</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> |x - 3| < 5
            <ul>
              <li>-5 < x - 3 < 5</li>
              <li>-5 + 3 < x < 5 + 3</li>
              <li><strong>Answer:</strong> -2 < x < 8</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> |2x + 1| ≥ 7
            <ul>
              <li>2x + 1 ≥ 7 OR 2x + 1 ≤ -7</li>
              <li>2x ≥ 6 OR 2x ≤ -8</li>
              <li>x ≥ 3 OR x ≤ -4</li>
              <li><strong>Answer:</strong> x ≤ -4 OR x ≥ 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Graphing Linear Inequalities",
        objective: "obj_009",
        text: `
          <h3>Steps to Graph Inequalities</h3>
          <ol>
            <li>Graph the boundary line (dashed for < or >, solid for ≤ or ≥)</li>
            <li>Pick a test point (0,0 is easiest if not on the line)</li>
            <li>Shade the region where the inequality is true</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Graph y > 2x + 1
            <ul>
              <li>Step 1: Graph y = 2x + 1 (dashed line because >)</li>
              <li>Step 2: Test (0,0): 0 > 1? FALSE</li>
              <li>Step 3: Shade the side NOT containing (0,0)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Inequalities compare values using <, >, ≤, ≥</li>
        <li>Flip the sign when multiplying/dividing by a negative</li>
        <li>Graph with open circles (<, >) or closed circles (≤, ≥)</li>
        <li>Compound inequalities use AND (intersection) or OR (union)</li>
        <li>Quadratic inequalities require testing intervals</li>
        <li>Absolute value inequalities have special rules</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Inequality", definition: "A statement comparing two values using <, >, ≤, or ≥." },
    { term: "Compound Inequality", definition: "Two inequalities joined by AND or OR." },
    { term: "Critical Value", definition: "Values where the inequality changes sign." },
    { term: "Absolute Value", definition: "The distance from zero; always positive." },
    { term: "Number Line", definition: "A line used to represent and graph inequalities." },
    { term: "Solution Set", definition: "All values that satisfy the inequality." }
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
      question: "Which symbol means 'greater than or equal to'?",
      type: "multiple_choice",
      options: ["<", ">", "≤", "≥"],
      answer: "≥",
      explanation: "≥ means greater than or equal to."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve: x + 5 > 12",
      type: "multiple_choice",
      options: ["x > 7", "x < 7", "x > 17", "x < 17"],
      answer: "x > 7",
      explanation: "x + 5 > 12 → x > 7"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Solve: 3x ≤ 18",
      type: "multiple_choice",
      options: ["x ≤ 6", "x ≥ 6", "x ≤ 15", "x ≥ 15"],
      answer: "x ≤ 6",
      explanation: "3x ≤ 18 → x ≤ 6"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Solve: -2x > 10",
      type: "multiple_choice",
      options: ["x > -5", "x < -5", "x > 5", "x < 5"],
      answer: "x < -5",
      explanation: "-2x > 10 → x < -5 (flip sign for negative division)"
    },

    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve: 3x - 5 < 2x + 7",
      type: "multiple_choice",
      options: ["x < 12", "x > 12", "x < 2", "x > 2"],
      answer: "x < 12",
      explanation: "3x - 5 < 2x + 7 → x - 5 < 7 → x < 12"
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Solve: -2 < 3x + 1 < 10",
      type: "multiple_choice",
      options: ["-1 < x < 3", "-2 < x < 3", "-1 < x < 4", "-2 < x < 4"],
      answer: "-1 < x < 3",
      explanation: "-2 < 3x + 1 < 10 → -3 < 3x < 9 → -1 < x < 3"
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "A student needs at least 75% to pass. If the test is out of 80, what is the minimum score needed?",
      type: "multiple_choice",
      options: ["60", "65", "70", "75"],
      answer: "60",
      explanation: "75% of 80 = 0.75 × 80 = 60"
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "Solve: 4x + 3 ≥ 2x - 5",
      type: "multiple_choice",
      options: ["x ≥ -4", "x ≤ -4", "x ≥ 1", "x ≤ 1"],
      answer: "x ≥ -4",
      explanation: "4x + 3 ≥ 2x - 5 → 2x ≥ -8 → x ≥ -4"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "Solve: x - 4 < 2 OR x + 5 > 10",
      type: "multiple_choice",
      options: ["x < 6 OR x > 5", "x < 6 AND x > 5", "x < 2 OR x > 5", "x < 6 OR x > 15"],
      answer: "x < 6 OR x > 5",
      explanation: "x - 4 < 2 → x < 6; x + 5 > 10 → x > 5. OR means either."
    },

    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: x² - 4x - 5 < 0",
      type: "multiple_choice",
      options: ["-1 < x < 5", "x < -1 OR x > 5", "x < -1", "x > 5"],
      answer: "-1 < x < 5",
      explanation: "(x - 5)(x + 1) < 0 → Test intervals → -1 < x < 5"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Solve: |x - 2| < 4",
      type: "multiple_choice",
      options: ["-2 < x < 6", "x < 6", "-2 < x < 4", "x < 2"],
      answer: "-2 < x < 6",
      explanation: "|x - 2| < 4 → -4 < x - 2 < 4 → -2 < x < 6"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Solve: |2x + 3| ≥ 5",
      type: "multiple_choice",
      options: ["x ≥ 1 OR x ≤ -4", "x ≥ 1", "x ≤ -4", "-4 ≤ x ≤ 1"],
      answer: "x ≥ 1 OR x ≤ -4",
      explanation: "2x + 3 ≥ 5 → x ≥ 1; 2x + 3 ≤ -5 → x ≤ -4"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "Solve: x² + 2x - 3 > 0",
      type: "multiple_choice",
      options: ["x < -3 OR x > 1", "-3 < x < 1", "x < 1", "x > -3"],
      answer: "x < -3 OR x > 1",
      explanation: "(x + 3)(x - 1) > 0 → x < -3 OR x > 1"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which region is shaded for y < 2x - 3?",
      type: "multiple_choice",
      options: ["Below the line", "Above the line", "On the line", "Both sides"],
      answer: "Below the line",
      explanation: "y < 2x - 3 means all points below the line y = 2x - 3 are shaded."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_inequalities",
    title: "Inequalities Quiz",
    description: "Test your understanding of inequalities",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What does the symbol ≤ mean?",
        type: "short_answer",
        answer_key: "Less than or equal to",
        explanation: "≤ means less than or equal to."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Solve: x - 3 < 10",
        type: "short_answer",
        answer_key: "x < 13",
        explanation: "x - 3 < 10 → x < 13"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Solve: 4x > 20",
        type: "short_answer",
        answer_key: "x > 5",
        explanation: "4x > 20 → x > 5"
      },
      {
        id: "ass_004",
        objective: "obj_002",
        difficulty: "easy",
        question: "Solve: -3x ≤ 15",
        type: "short_answer",
        answer_key: "x ≥ -5",
        explanation: "-3x ≤ 15 → x ≥ -5 (flip sign)"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Solve: 5x + 2 < 3x + 14",
        type: "short_answer",
        answer_key: "x < 6",
        explanation: "5x + 2 < 3x + 14 → 2x < 12 → x < 6"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Solve: -1 < 2x + 3 < 7",
        type: "short_answer",
        answer_key: "-2 < x < 2",
        explanation: "-1 < 2x + 3 < 7 → -4 < 2x < 4 → -2 < x < 2"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "A car needs at least 40 miles per gallon. If it has 15 gallons, what is the minimum distance it can travel?",
        type: "short_answer",
        answer_key: "600 miles",
        explanation: "Distance ≥ 40 × 15 = 600 miles"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Solve: x² - 3x - 10 < 0",
        type: "short_answer",
        answer_key: "-2 < x < 5",
        explanation: "(x - 5)(x + 2) < 0 → -2 < x < 5"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Solve: |x - 1| < 3",
        type: "short_answer",
        answer_key: "-2 < x < 4",
        explanation: "|x - 1| < 3 → -3 < x - 1 < 3 → -2 < x < 4"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "Solve: |2x - 1| ≥ 5",
        type: "short_answer",
        answer_key: "x ≥ 3 OR x ≤ -2",
        explanation: "2x - 1 ≥ 5 → x ≥ 3; 2x - 1 ≤ -5 → x ≤ -2"
      }
    ]
  }
};