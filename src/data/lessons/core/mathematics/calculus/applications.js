// Location: src/data/lessons/core/mathematics/calculus/applications.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_calculus_applications",
  subject: "Mathematics",
  topic: "Calculus",
  name: "Applications of Calculus",
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
      description: "Apply differentiation to find rates of change",
      indicator: "Student can use derivatives to find rates of change in real-world contexts"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply differentiation to find velocity and acceleration",
      indicator: "Student can find velocity and acceleration from displacement functions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Apply integration to find displacement from velocity",
      indicator: "Student can integrate velocity to find displacement"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Find stationary points using differentiation",
      indicator: "Student can find maximum and minimum points"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Determine the nature of stationary points",
      indicator: "Student can use the second derivative to classify stationary points"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply optimization to solve real-world problems",
      indicator: "Student can find maximum/minimum values in practical situations"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve kinematics problems using calculus",
      indicator: "Student can solve complex motion problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply integration to find volumes of revolution",
      indicator: "Student can find volumes using integration"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex optimization problems",
      indicator: "Student can solve multi-variable optimization problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Applications of Calculus - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering rates of change, motion, optimization, and volumes."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are the Applications of Calculus?</h2>
      <p>Calculus has many real-world applications:</p>
      <ul>
        <li><strong>Rates of Change:</strong> Speed, growth rates, inflation</li>
        <li><strong>Kinematics:</strong> Motion (displacement, velocity, acceleration)</li>
        <li><strong>Optimization:</strong> Finding maximum/minimum values</li>
        <li><strong>Areas and Volumes:</strong> Using integration</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Rates of Change",
        objective: "obj_001",
        text: `
          <h3>Using Derivatives</h3>
          <p>The derivative dy/dx gives the <strong>rate of change</strong> of y with respect to x.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A car's distance is given by s = 5t² + 2t (meters).
            <ul>
              <li>Velocity = ds/dt = 10t + 2</li>
              <li>At t = 3s, v = 10(3) + 2 = 32 m/s</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Velocity and Acceleration",
        objective: "obj_002",
        text: `
          <h3>Kinematics</h3>
          <ul>
            <li><strong>Velocity:</strong> v = ds/dt</li>
            <li><strong>Acceleration:</strong> a = dv/dt = d²s/dt²</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> s = t³ - 6t² + 9t + 2
            <ul>
              <li>v = 3t² - 12t + 9</li>
              <li>a = 6t - 12</li>
              <li>At t = 2: v = 12 - 24 + 9 = -3 m/s, a = 12 - 12 = 0 m/s²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Displacement from Velocity",
        objective: "obj_003",
        text: `
          <h3>Using Integration</h3>
          <p>s = ∫v dt</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A particle has velocity v = 4t - 2.
            <ul>
              <li>Displacement: s = ∫(4t - 2) dt = 2t² - 2t + C</li>
              <li>If s(0) = 0, then C = 0</li>
              <li>At t = 3: s = 2(9) - 6 = 12m</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Stationary Points",
        objective: "obj_004",
        text: `
          <h3>Finding Maximum and Minimum</h3>
          <ol>
            <li>Find derivative: f'(x)</li>
            <li>Set f'(x) = 0 to find stationary points</li>
            <li>Use second derivative to classify</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> f(x) = x² - 4x + 3
            <ul>
              <li>f'(x) = 2x - 4</li>
              <li>Set 2x - 4 = 0 → x = 2</li>
              <li>f(2) = 4 - 8 + 3 = -1</li>
              <li>f''(x) = 2 > 0 → minimum at (2, -1)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Classifying Stationary Points",
        objective: "obj_005",
        text: `
          <h3>Second Derivative Test</h3>
          <ul>
            <li><strong>f''(x) > 0:</strong> Minimum point</li>
            <li><strong>f''(x) < 0:</strong> Maximum point</li>
            <li><strong>f''(x) = 0:</strong> Inconclusive (point of inflection)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> f(x) = -x² + 4x - 1
            <ul>
              <li>f'(x) = -2x + 4</li>
              <li>x = 2</li>
              <li>f''(x) = -2 < 0 → maximum at (2, 3)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Optimization",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A rectangle has perimeter 20m. What dimensions give maximum area?
            <ul>
              <li>Let length = x, width = y</li>
              <li>2x + 2y = 20 → y = 10 - x</li>
              <li>Area: A = xy = x(10 - x) = 10x - x²</li>
              <li>dA/dx = 10 - 2x</li>
              <li>Set 10 - 2x = 0 → x = 5</li>
              <li>y = 10 - 5 = 5</li>
              <li><strong>Maximum area = 25m² (square)</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Kinematics Problems",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A particle moves with s = t³ - 6t² + 9t.
            <ul>
              <li>v = 3t² - 12t + 9</li>
              <li>a = 6t - 12</li>
              <li>When is velocity zero?</li>
              <li>3t² - 12t + 9 = 0 → t² - 4t + 3 = 0 → t = 1, 3</li>
              <li>Displacement at t = 1: s = 1 - 6 + 9 = 4</li>
              <li>Displacement at t = 3: s = 27 - 54 + 27 = 0</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Volumes of Revolution",
        objective: "obj_008",
        text: `
          <h3>Formula</h3>
          <p><strong>V = π∫ₐᵇ [f(x)]² dx</strong></p>
          <p>This gives the volume when the region is rotated around the x-axis.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Volume of y = x² from x = 0 to x = 2
            <ul>
              <li>V = π∫₀² (x²)² dx = π∫₀² x⁴ dx</li>
              <li>= π [x⁵/5]₀²</li>
              <li>= π(32/5) = 32π/5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Optimization",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A cylindrical can with volume 1000cm³. Find minimum surface area.
            <ul>
              <li>V = πr²h = 1000 → h = 1000/(πr²)</li>
              <li>SA = 2πr² + 2πrh = 2πr² + 2000/r</li>
              <li>dSA/dr = 4πr - 2000/r²</li>
              <li>Set = 0: 4πr = 2000/r² → 4πr³ = 2000 → r³ = 500/π</li>
              <li>r = (500/π)^(1/3) ≈ 5.42cm</li>
              <li>h = 1000/(π×29.4) ≈ 10.83cm</li>
              <li><strong>Answer:</strong> r ≈ 5.42cm, h ≈ 10.83cm</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Derivatives find rates of change and velocity/acceleration</li>
        <li>Integration finds displacement from velocity</li>
        <li>Stationary points: f'(x) = 0</li>
        <li>Second derivative: f''(x) > 0 = min, f''(x) < 0 = max</li>
        <li>Optimization uses derivatives to find maximum/minimum values</li>
        <li>Volumes of revolution: V = π∫[f(x)]² dx</li>
        <li>Kinematics: s, v = ds/dt, a = dv/dt</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Rate of Change", definition: "How quickly a quantity changes over time." },
    { term: "Velocity", definition: "Rate of change of displacement (v = ds/dt)." },
    { term: "Acceleration", definition: "Rate of change of velocity (a = dv/dt)." },
    { term: "Stationary Point", definition: "A point where f'(x) = 0." },
    { term: "Optimization", definition: "Finding maximum or minimum values." },
    { term: "Volume of Revolution", definition: "Volume formed by rotating a curve around an axis." }
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
      question: "s = 4t² + 3t. What is velocity?",
      type: "multiple_choice",
      options: ["8t + 3", "4t + 3", "8t", "8t + 3"],
      answer: "8t + 3",
      explanation: "v = ds/dt = 8t + 3"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "s = 3t². What is acceleration?",
      type: "multiple_choice",
      options: ["6t", "3", "6", "0"],
      answer: "6",
      explanation: "v = 6t, a = dv/dt = 6"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "v = 4t. What is displacement if s(0) = 0?",
      type: "multiple_choice",
      options: ["2t²", "4t²", "2t", "t²"],
      answer: "2t²",
      explanation: "s = ∫4t dt = 2t² + C, with C = 0"
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "f(x) = x² - 2x. Find stationary point.",
      type: "multiple_choice",
      options: ["x = 1", "x = 2", "x = 0", "x = -1"],
      answer: "x = 1",
      explanation: "f'(x) = 2x - 2 = 0 → x = 1"
    },
    {
      id: "prac_005",
      objective: "obj_001",
      difficulty: "easy",
      question: "If y = 3x², what is dy/dx?",
      type: "multiple_choice",
      options: ["6x", "3x", "6", "x"],
      answer: "6x",
      explanation: "dy/dx = 6x"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "f(x) = x² - 4x + 3. Is x = 2 a max or min?",
      type: "multiple_choice",
      options: ["Maximum", "Minimum", "Neither", "Inflection"],
      answer: "Minimum",
      explanation: "f''(x) = 2 > 0 → minimum"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "f(x) = -x² + 4x - 1. Is x = 2 a max or min?",
      type: "multiple_choice",
      options: ["Maximum", "Minimum", "Neither", "Inflection"],
      answer: "Maximum",
      explanation: "f''(x) = -2 < 0 → maximum"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Rectangle perimeter 24m. Max area?",
      type: "multiple_choice",
      options: ["16m²", "25m²", "36m²", "49m²"],
      answer: "36m²",
      explanation: "x + y = 12, A = xy = x(12-x), max at x=6, y=6 → 36m²"
    },
    {
      id: "prac_009",
      objective: "obj_002",
      difficulty: "medium",
      question: "s = t³ - 3t². Find velocity at t = 2.",
      type: "multiple_choice",
      options: ["0", "3", "6", "9"],
      answer: "0",
      explanation: "v = 3t² - 6t, v(2) = 12 - 12 = 0"
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "s = t² - 4t + 3. When is velocity zero?",
      type: "multiple_choice",
      options: ["t = 1", "t = 2", "t = 3", "t = 4"],
      answer: "t = 2",
      explanation: "v = 2t - 4 = 0 → t = 2"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "s = t³ - 6t² + 9t. Find displacement when velocity is zero.",
      type: "multiple_choice",
      options: ["4", "5", "6", "7"],
      answer: "4",
      explanation: "v = 3t² - 12t + 9 = 0 → t = 1, 3. s(1) = 1 - 6 + 9 = 4"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Volume of y = x from x = 0 to x = 2 around x-axis.",
      type: "multiple_choice",
      options: ["8π/3", "4π/3", "2π/3", "16π/3"],
      answer: "8π/3",
      explanation: "V = π∫₀² x² dx = π[x³/3]₀² = 8π/3"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Volume of y = x² from x = 0 to x = 1 around x-axis.",
      type: "multiple_choice",
      options: ["π/5", "2π/5", "3π/5", "4π/5"],
      answer: "π/5",
      explanation: "V = π∫₀¹ x⁴ dx = π[x⁵/5]₀¹ = π/5"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Cylinder volume = 1000cm³. Find radius for minimum surface area.",
      type: "multiple_choice",
      options: ["5.42cm", "6.42cm", "7.42cm", "8.42cm"],
      answer: "5.42cm",
      explanation: "r³ = 500/π → r ≈ 5.42cm"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "s = t³ - 3t² + 2t. Find acceleration at t = 1.",
      type: "multiple_choice",
      options: ["0", "3", "6", "9"],
      answer: "0",
      explanation: "a = 6t - 6, at t=1: 6 - 6 = 0"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_calculus_applications",
    title: "Applications of Calculus Quiz",
    description: "Test your understanding of calculus applications",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "s = 5t², what is velocity?",
        type: "short_answer",
        answer_key: "10t",
        explanation: "v = ds/dt = 10t"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "s = 2t³, what is acceleration?",
        type: "short_answer",
        answer_key: "12t",
        explanation: "v = 6t², a = 12t"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "v = 6t, displacement s(0)=0?",
        type: "short_answer",
        answer_key: "3t²",
        explanation: "s = ∫6t dt = 3t²"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "f(x) = x² - 6x + 5. Stationary point?",
        type: "short_answer",
        answer_key: "x = 3",
        explanation: "f'(x) = 2x - 6 = 0 → x = 3"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "f(x) = x² - 6x + 5. Is x=3 max or min?",
        type: "short_answer",
        answer_key: "Minimum",
        explanation: "f''(x) = 2 > 0 → minimum"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Rectangle perimeter 16m. Max area?",
        type: "short_answer",
        answer_key: "16m²",
        explanation: "x + y = 8, max at x=4, y=4 → 16m²"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "s = t³ - 6t². Velocity at t = 2?",
        type: "short_answer",
        answer_key: "-12",
        explanation: "v = 3t² - 12t, v(2) = 12 - 24 = -12"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Volume of y = 2x from x=0 to x=3 around x-axis.",
        type: "short_answer",
        answer_key: "36π",
        explanation: "V = π∫₀³ 4x² dx = π[4x³/3]₀³ = 36π"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Volume of y = x from x=0 to x=1 around x-axis.",
        type: "short_answer",
        answer_key: "π/3",
        explanation: "V = π∫₀¹ x² dx = π[x³/3]₀¹ = π/3"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Cylinder volume = 500cm³. Find radius for minimum SA.",
        type: "short_answer",
        answer_key: "(250/π)^(1/3)",
        explanation: "r³ = 250/π → r = (250/π)^(1/3)"
      }
    ]
  }
};