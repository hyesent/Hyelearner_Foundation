// Location: src/data/lessons/core/mathematics/trigonometry/graphs.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_trig_graphs",
  subject: "Mathematics",
  topic: "Trigonometry",
  name: "Trigonometric Graphs",
  icon: "📈",
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
      description: "Identify the key features of sine, cosine, and tangent graphs",
      indicator: "Student can recognize the shape of sin, cos, and tan graphs"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify amplitude, period, and midline of trigonometric graphs",
      indicator: "Student can identify amplitude, period, and midline from graphs"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Sketch basic sine and cosine graphs",
      indicator: "Student can sketch y = sin x and y = cos x"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Sketch transformed trigonometric graphs",
      indicator: "Student can sketch y = a sin bx and y = a cos bx"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Find the equation of a trigonometric graph from its features",
      indicator: "Student can determine the equation from amplitude, period, and shifts"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply trigonometric graphs to real-world problems",
      indicator: "Student can model periodic phenomena with trig graphs"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Sketch tangent graphs and identify asymptotes",
      indicator: "Student can sketch y = tan x and identify asymptotes"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve equations using trigonometric graphs",
      indicator: "Student can find solutions by reading graphs"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze complex trigonometric transformations",
      indicator: "Student can sketch and analyze combinations of transformations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Trigonometric Graphs - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering sine, cosine, and tangent graphs with transformations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Trigonometric Graphs?</h2>
      <p>Trigonometric graphs are the visual representations of trigonometric functions.</p>
      <p>The three main graphs are:</p>
      <ul>
        <li><strong>y = sin x</strong> (sine wave)</li>
        <li><strong>y = cos x</strong> (cosine wave)</li>
        <li><strong>y = tan x</strong> (tangent curve)</li>
      </ul>
      <p>These graphs are <strong>periodic</strong> (they repeat their pattern).</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Sine Graph",
        objective: "obj_001",
        text: `
          <h3>y = sin x</h3>
          <ul>
            <li><strong>Shape:</strong> Smooth wave</li>
            <li><strong>Amplitude:</strong> 1 (range: -1 to 1)</li>
            <li><strong>Period:</strong> 360° (2π radians)</li>
            <li><strong>Key points:</strong> (0,0), (90°,1), (180°,0), (270°,-1), (360°,0)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Graph Features:</strong>
            <ul>
              <li>Starts at (0,0)</li>
              <li>Reaches maximum at 90°</li>
              <li>Crosses x-axis at 0°, 180°, 360°</li>
              <li>Minimum at 270°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Cosine Graph",
        objective: "obj_001",
        text: `
          <h3>y = cos x</h3>
          <ul>
            <li><strong>Shape:</strong> Smooth wave</li>
            <li><strong>Amplitude:</strong> 1 (range: -1 to 1)</li>
            <li><strong>Period:</strong> 360° (2π radians)</li>
            <li><strong>Key points:</strong> (0,1), (90°,0), (180°,-1), (270°,0), (360°,1)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Graph Features:</strong>
            <ul>
              <li>Starts at (0,1)</li>
              <li>Crosses x-axis at 90°, 270°</li>
              <li>Maximum at 0°, 360°</li>
              <li>Minimum at 180°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Comparing Sine and Cosine",
        objective: "obj_001",
        text: `
          <h3>Key Differences</h3>
          <ul>
            <li>Sine starts at 0, cosine starts at 1</li>
            <li>Sine is positive from 0° to 180°</li>
            <li>Cosine is positive from 270° to 90°</li>
            <li>sin x = cos (90° - x)</li>
            <li>cos x = sin (90° - x)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> sin 30° = cos 60° = 0.5
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Amplitude and Period",
        objective: "obj_002",
        text: `
          <h3>Key Features</h3>
          <ul>
            <li><strong>Amplitude:</strong> Maximum height from midline (|a|)</li>
            <li><strong>Period:</strong> Length of one complete cycle (360°/|b|)</li>
            <li><strong>Midline:</strong> The horizontal line halfway between max and min</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> y = 3 sin 2x
            <ul>
              <li>Amplitude = 3</li>
              <li>Period = 360°/2 = 180°</li>
              <li>Midline = 0</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Sketching Basic Graphs",
        objective: "obj_003",
        text: `
          <h3>Steps to Sketch</h3>
          <ol>
            <li>Identify amplitude, period, and midline</li>
            <li>Plot key points</li>
            <li>Connect points with a smooth curve</li>
            <li>Continue pattern for given domain</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Sketch y = 2 sin x from 0° to 360°
            <ul>
              <li>Amplitude = 2</li>
              <li>Period = 360°</li>
              <li>Key points: (0,0), (90°,2), (180°,0), (270°,-2), (360°,0)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Transformations",
        objective: "obj_004",
        text: `
          <h3>General Form</h3>
          <p><strong>y = a sin(bx + c) + d</strong></p>
          <ul>
            <li><strong>a</strong> = amplitude</li>
            <li><strong>b</strong> = frequency (period = 360°/b)</li>
            <li><strong>c</strong> = phase shift (horizontal shift)</li>
            <li><strong>d</strong> = vertical shift (midline)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> y = 2 sin 3x + 1
            <ul>
              <li>Amplitude = 2</li>
              <li>Period = 360°/3 = 120°</li>
              <li>Midline = 1</li>
              <li>Range = -1 to 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Tangent Graph",
        objective: "obj_007",
        text: `
          <h3>y = tan x</h3>
          <ul>
            <li><strong>Shape:</strong> Curve with asymptotes</li>
            <li><strong>Period:</strong> 180° (π radians)</li>
            <li><strong>Asymptotes:</strong> x = 90° + 180°n</li>
            <li><strong>Key points:</strong> (0,0), (45°,1), (-45°,-1)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Graph Features:</strong>
            <ul>
              <li>Crosses x-axis at 0°, 180°</li>
              <li>Asymptotes at 90°, 270°</li>
              <li>Increasing function</li>
              <li>Not defined at asymptotes</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Solving Equations from Graphs",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Solve sin x = 0.5 for 0° ≤ x ≤ 360°
            <ul>
              <li>From graph, sin x = 0.5 at 30° and 150°</li>
              <li><strong>Answer:</strong> x = 30°, 150°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Solve cos x = -0.5 for 0° ≤ x ≤ 360°
            <ul>
              <li>From graph, cos x = -0.5 at 120° and 240°</li>
              <li><strong>Answer:</strong> x = 120°, 240°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Transformations",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Sketch y = 3 sin(2x - 90°) + 2
            <ul>
              <li>Amplitude = 3</li>
              <li>Period = 360°/2 = 180°</li>
              <li>Phase shift = 90°/2 = 45° right</li>
              <li>Midline = 2</li>
              <li>Range = -1 to 5</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>sin x: starts at 0, amplitude 1, period 360°</li>
        <li>cos x: starts at 1, amplitude 1, period 360°</li>
        <li>tan x: period 180°, asymptotes at 90° + 180°n</li>
        <li>General form: y = a sin(bx + c) + d</li>
        <li>Amplitude = |a|, Period = 360°/|b|</li>
        <li>Use graphs to solve trigonometric equations</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Amplitude", definition: "The maximum height from the midline." },
    { term: "Period", definition: "The length of one complete cycle." },
    { term: "Midline", definition: "The horizontal line halfway between max and min." },
    { term: "Phase Shift", definition: "The horizontal shift of the graph." },
    { term: "Asymptote", definition: "A line that the graph approaches but never touches." },
    { term: "Frequency", definition: "The number of cycles per unit of angle." }
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
      question: "What is the amplitude of y = sin x?",
      type: "multiple_choice",
      options: ["0", "1", "2", "360°"],
      answer: "1",
      explanation: "The sine function has amplitude 1."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the period of y = sin x?",
      type: "multiple_choice",
      options: ["90°", "180°", "270°", "360°"],
      answer: "360°",
      explanation: "The period of sin x is 360°."
    },
    {
      id: "prac_003",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the amplitude of y = 3 cos x?",
      type: "multiple_choice",
      options: ["1", "2", "3", "6"],
      answer: "3",
      explanation: "Amplitude = coefficient of cos = 3."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the period of y = sin 2x?",
      type: "multiple_choice",
      options: ["90°", "180°", "270°", "360°"],
      answer: "180°",
      explanation: "Period = 360°/2 = 180°."
    },
    {
      id: "prac_005",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the range of y = cos x?",
      type: "multiple_choice",
      options: ["0 to 1", "-1 to 0", "-1 to 1", "-2 to 2"],
      answer: "-1 to 1",
      explanation: "cos x ranges from -1 to 1."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the amplitude of y = 4 sin 2x?",
      type: "multiple_choice",
      options: ["2", "3", "4", "8"],
      answer: "4",
      explanation: "Amplitude = 4."
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the period of y = cos 3x?",
      type: "multiple_choice",
      options: ["60°", "90°", "120°", "180°"],
      answer: "120°",
      explanation: "Period = 360°/3 = 120°."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the amplitude of y = 2 sin 3x + 1?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Amplitude = 2."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the midline of y = 3 sin 2x + 2?",
      type: "multiple_choice",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation: "Midline = 2 (vertical shift)."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the period of y = 2 sin 4x?",
      type: "multiple_choice",
      options: ["45°", "60°", "90°", "120°"],
      answer: "90°",
      explanation: "Period = 360°/4 = 90°."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Where are the asymptotes of y = tan x?",
      type: "multiple_choice",
      options: ["0°, 180°", "45°, 135°", "90°, 270°", "60°, 240°"],
      answer: "90°, 270°",
      explanation: "tan x has asymptotes at 90° and 270°."
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is the period of y = tan 2x?",
      type: "multiple_choice",
      options: ["45°", "60°", "90°", "180°"],
      answer: "90°",
      explanation: "Period of tan = 180°/2 = 90°."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "For y = sin x, where does sin x = 0.5 in 0° to 360°?",
      type: "multiple_choice",
      options: ["30° only", "150° only", "30° and 150°", "30°, 150°, 210°"],
      answer: "30° and 150°",
      explanation: "sin x = 0.5 at 30° and 150°."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "For y = cos x, where does cos x = -1 in 0° to 360°?",
      type: "multiple_choice",
      options: ["90°", "180°", "270°", "0°"],
      answer: "180°",
      explanation: "cos 180° = -1."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the amplitude and period of y = 5 sin 3x?",
      type: "multiple_choice",
      options: ["A=3, P=120°", "A=5, P=120°", "A=5, P=60°", "A=3, P=60°"],
      answer: "A=5, P=120°",
      explanation: "Amplitude = 5, Period = 360°/3 = 120°."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_trig_graphs",
    title: "Trigonometric Graphs Quiz",
    description: "Test your understanding of trigonometric graphs",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the amplitude of y = sin x?",
        type: "short_answer",
        answer_key: "1",
        explanation: "The sine function has amplitude 1."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the period of y = cos x?",
        type: "short_answer",
        answer_key: "360°",
        explanation: "cos x has period 360°."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the amplitude of y = 4 cos 2x?",
        type: "short_answer",
        answer_key: "4",
        explanation: "Amplitude = 4."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the period of y = sin 3x?",
        type: "short_answer",
        answer_key: "120°",
        explanation: "Period = 360°/3 = 120°."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the amplitude of y = 3 sin 4x + 2?",
        type: "short_answer",
        answer_key: "3",
        explanation: "Amplitude = 3."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the period of y = cos 5x?",
        type: "short_answer",
        answer_key: "72°",
        explanation: "Period = 360°/5 = 72°."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the midline of y = 2 sin 3x - 1?",
        type: "short_answer",
        answer_key: "-1",
        explanation: "Midline = -1 (vertical shift)."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "What are the asymptotes of y = tan x?",
        type: "short_answer",
        answer_key: "90°, 270°",
        explanation: "tan x has asymptotes at 90° and 270°."
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the period of y = tan 3x?",
        type: "short_answer",
        answer_key: "60°",
        explanation: "Period = 180°/3 = 60°."
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "Find all solutions of sin x = 1 for 0° to 360°",
        type: "short_answer",
        answer_key: "90°",
        explanation: "sin 90° = 1."
      }
    ]
  }
};