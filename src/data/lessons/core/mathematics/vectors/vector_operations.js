// Location: src/data/lessons/core/mathematics/vectors/vector_operations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_vector_operations",
  subject: "Mathematics",
  topic: "Vectors",
  name: "Vector Operations",
  icon: "➡️",
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
      description: "Define a vector and its components",
      indicator: "Student can explain what a vector is and identify its magnitude and direction"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Represent vectors in component form",
      indicator: "Student can write vectors as column vectors or using i, j, k notation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Add and subtract vectors",
      indicator: "Student can add and subtract vectors component-wise"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Multiply vectors by scalars",
      indicator: "Student can scale vectors by multiplying components"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate the magnitude of a vector",
      indicator: "Student can find the length of a vector using Pythagoras"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Find the unit vector in a given direction",
      indicator: "Student can normalize a vector to find its unit vector"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Calculate the dot product of two vectors",
      indicator: "Student can use a·b = |a||b|cosθ or component-wise"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Find the angle between two vectors",
      indicator: "Student can use cosθ = (a·b)/(|a||b|)"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Calculate the cross product of two vectors",
      indicator: "Student can find the cross product of 3D vectors"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Vector Operations - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering vector operations, magnitude, dot product, and cross product."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Vectors?</h2>
      <p>A <strong>vector</strong> is a quantity that has both <strong>magnitude</strong> (size) and <strong>direction</strong>.</p>
      <p>Examples: displacement, velocity, force</p>
      <p>Vectors are represented by arrows or in component form.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Vector Components",
        objective: "obj_002",
        text: `
          <h3>Component Form</h3>
          <p>A vector can be written as: <strong>(a, b)</strong> or <strong>a<strong>i</strong> + b<strong>j</strong></strong></p>
          <ul>
            <li><strong>a</strong> = x-component</li>
            <li><strong>b</strong> = y-component</li>
            <li><strong>i</strong> = unit vector in x-direction</li>
            <li><strong>j</strong> = unit vector in y-direction</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (3, 4) represents 3 units in x-direction and 4 units in y-direction.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Vector Addition",
        objective: "obj_003",
        text: `
          <h3>Adding Vectors</h3>
          <p>Add corresponding components.</p>
          <p><strong>(a₁, b₁) + (a₂, b₂) = (a₁ + a₂, b₁ + b₂)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (3, 4) + (1, 2)
            <ul>
              <li>= (3 + 1, 4 + 2)</li>
              <li>= (4, 6)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Vector Subtraction",
        objective: "obj_003",
        text: `
          <h3>Subtracting Vectors</h3>
          <p>Subtract corresponding components.</p>
          <p><strong>(a₁, b₁) - (a₂, b₂) = (a₁ - a₂, b₁ - b₂)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (5, 7) - (2, 3)
            <ul>
              <li>= (5 - 2, 7 - 3)</li>
              <li>= (3, 4)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Scalar Multiplication",
        objective: "obj_004",
        text: `
          <h3>Multiplying by a Scalar</h3>
          <p>Multiply each component by the scalar.</p>
          <p><strong>k(a, b) = (ka, kb)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3 × (2, 5)
            <ul>
              <li>= (3×2, 3×5)</li>
              <li>= (6, 15)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Magnitude of a Vector",
        objective: "obj_005",
        text: `
          <h3>Formula</h3>
          <p><strong>|(a, b)| = √(a² + b²)</strong></p>
          <p>This is the length of the vector.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> |(3, 4)|
            <ul>
              <li>= √(3² + 4²)</li>
              <li>= √(9 + 16)</li>
              <li>= √25 = 5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Unit Vectors",
        objective: "obj_006",
        text: `
          <h3>Finding the Unit Vector</h3>
          <p><strong>Unit Vector = v / |v|</strong></p>
          <p>A unit vector has magnitude 1 and points in the same direction.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Unit vector of (3, 4)
            <ul>
              <li>|v| = 5</li>
              <li>Unit vector = (3/5, 4/5)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Dot Product",
        objective: "obj_007",
        text: `
          <h3>Dot Product (Scalar Product)</h3>
          <p><strong>a·b = a₁b₁ + a₂b₂</strong></p>
          <p>OR <strong>a·b = |a||b|cosθ</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (3, 4) · (1, 2)
            <ul>
              <li>= 3×1 + 4×2</li>
              <li>= 3 + 8 = 11</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Angle Between Vectors",
        objective: "obj_008",
        text: `
          <h3>Formula</h3>
          <p><strong>cosθ = (a·b) / (|a||b|)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Angle between (3, 4) and (1, 2)
            <ul>
              <li>a·b = 11</li>
              <li>|a| = 5, |b| = √5</li>
              <li>cosθ = 11/(5√5) ≈ 0.984</li>
              <li>θ ≈ 10.3°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Cross Product (3D)",
        objective: "obj_009",
        text: `
          <h3>Cross Product (Vector Product)</h3>
          <p>For a = (a₁, a₂, a₃) and b = (b₁, b₂, b₃):</p>
          <p><strong>a × b = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> (1, 2, 3) × (4, 5, 6)
            <ul>
              <li>= (2×6 - 3×5, 3×4 - 1×6, 1×5 - 2×4)</li>
              <li>= (12 - 15, 12 - 6, 5 - 8)</li>
              <li>= (-3, 6, -3)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Vectors have magnitude and direction</li>
        <li>Add/subtract component-wise</li>
        <li>Scalar multiplication: multiply each component</li>
        <li>Magnitude: |v| = √(a² + b²)</li>
        <li>Unit vector: v/|v|</li>
        <li>Dot product: a·b = a₁b₁ + a₂b₂</li>
        <li>Angle between vectors: cosθ = (a·b)/(|a||b|)</li>
        <li>Cross product (3D): gives perpendicular vector</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Vector", definition: "A quantity with magnitude and direction." },
    { term: "Magnitude", definition: "The length or size of a vector." },
    { term: "Unit Vector", definition: "A vector with magnitude 1." },
    { term: "Scalar", definition: "A quantity with only magnitude (no direction)." },
    { term: "Dot Product", definition: "A scalar product of two vectors." },
    { term: "Cross Product", definition: "A vector product of two 3D vectors." }
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
      question: "A vector has both magnitude and what?",
      type: "multiple_choice",
      options: ["Speed", "Direction", "Mass", "Time"],
      answer: "Direction",
      explanation: "Vectors have both magnitude and direction."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "(3, 4) + (1, 2) = ?",
      type: "multiple_choice",
      options: ["(4, 6)", "(4, 5)", "(3, 6)", "(5, 6)"],
      answer: "(4, 6)",
      explanation: "3+1=4, 4+2=6"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "(5, 7) - (2, 3) = ?",
      type: "multiple_choice",
      options: ["(3, 4)", "(4, 3)", "(3, 5)", "(5, 4)"],
      answer: "(3, 4)",
      explanation: "5-2=3, 7-3=4"
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "3 × (2, 5) = ?",
      type: "multiple_choice",
      options: ["(5, 8)", "(6, 15)", "(2, 15)", "(6, 5)"],
      answer: "(6, 15)",
      explanation: "3×2=6, 3×5=15"
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "easy",
      question: "The vector (3, 4) can be written as:",
      type: "multiple_choice",
      options: ["3i + 4j", "4i + 3j", "3i - 4j", "-3i + 4j"],
      answer: "3i + 4j",
      explanation: "(a, b) = ai + bj"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "|(3, 4)| = ?",
      type: "multiple_choice",
      options: ["5", "7", "12", "25"],
      answer: "5",
      explanation: "√(9+16) = √25 = 5"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "|(6, 8)| = ?",
      type: "multiple_choice",
      options: ["6", "8", "10", "14"],
      answer: "10",
      explanation: "√(36+64) = √100 = 10"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Unit vector of (3, 4) is:",
      type: "multiple_choice",
      options: ["(3/5, 4/5)", "(3/4, 4/3)", "(5/3, 5/4)", "(3, 4)"],
      answer: "(3/5, 4/5)",
      explanation: "v/|v| = (3/5, 4/5)"
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "(3, 4) · (1, 2) = ?",
      type: "multiple_choice",
      options: ["5", "9", "11", "14"],
      answer: "11",
      explanation: "3×1 + 4×2 = 3 + 8 = 11"
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "(2, 3) · (4, 5) = ?",
      type: "multiple_choice",
      options: ["18", "20", "22", "23"],
      answer: "23",
      explanation: "2×4 + 3×5 = 8 + 15 = 23"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "cosθ for (3, 4) and (1, 2) is:",
      type: "multiple_choice",
      options: ["11/(5√5)", "10/(5√5)", "12/(5√5)", "13/(5√5)"],
      answer: "11/(5√5)",
      explanation: "(3×1 + 4×2)/(5×√5) = 11/(5√5)"
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "(1, 2, 3) × (4, 5, 6) = ?",
      type: "multiple_choice",
      options: ["(-3, 6, -3)", "(3, -6, 3)", "(-3, -6, -3)", "(3, 6, 3)"],
      answer: "(-3, 6, -3)",
      explanation: "(2×6 - 3×5, 3×4 - 1×6, 1×5 - 2×4) = (-3, 6, -3)"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "(2, 3, 4) × (1, 2, 3) = ?",
      type: "multiple_choice",
      options: ["(1, -2, 1)", "(1, 2, 1)", "(-1, 2, -1)", "(1, -2, -1)"],
      answer: "(1, -2, 1)",
      explanation: "(3×3 - 4×2, 4×1 - 2×3, 2×2 - 3×1) = (9-8, 4-6, 4-3) = (1, -2, 1)"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "If a·b = 0, what can you say about the vectors?",
      type: "multiple_choice",
      options: ["They are parallel", "They are perpendicular", "They are equal", "They are opposite"],
      answer: "They are perpendicular",
      explanation: "Dot product 0 means vectors are perpendicular (θ = 90°)."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Angle between (1, 0) and (0, 1) is:",
      type: "multiple_choice",
      options: ["0°", "45°", "90°", "180°"],
      answer: "90°",
      explanation: "cosθ = (1×0 + 0×1)/(1×1) = 0 → θ = 90°"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_vector_operations",
    title: "Vector Operations Quiz",
    description: "Test your understanding of vector operations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What two things define a vector?",
        type: "short_answer",
        answer_key: "Magnitude and direction",
        explanation: "Vectors have both magnitude and direction."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "(2, 3) + (4, 5) = ?",
        type: "short_answer",
        answer_key: "(6, 8)",
        explanation: "2+4=6, 3+5=8"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "(8, 6) - (3, 2) = ?",
        type: "short_answer",
        answer_key: "(5, 4)",
        explanation: "8-3=5, 6-2=4"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "4 × (2, 3) = ?",
        type: "short_answer",
        answer_key: "(8, 12)",
        explanation: "4×2=8, 4×3=12"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "|(5, 12)| = ?",
        type: "short_answer",
        answer_key: "13",
        explanation: "√(25+144) = √169 = 13"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "|(8, 15)| = ?",
        type: "short_answer",
        answer_key: "17",
        explanation: "√(64+225) = √289 = 17"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Unit vector of (5, 12) is:",
        type: "short_answer",
        answer_key: "(5/13, 12/13)",
        explanation: "|v| = 13 → (5/13, 12/13)"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "medium",
        question: "(2, 5) · (3, 4) = ?",
        type: "short_answer",
        answer_key: "26",
        explanation: "2×3 + 5×4 = 6 + 20 = 26"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "cosθ for (1, 0) and (0, 1) is:",
        type: "short_answer",
        answer_key: "0",
        explanation: "(1×0 + 0×1)/(1×1) = 0"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "(1, 0, 0) × (0, 1, 0) = ?",
        type: "short_answer",
        answer_key: "(0, 0, 1)",
        explanation: "(0×0 - 0×1, 0×0 - 1×0, 1×1 - 0×0) = (0, 0, 1)"
      }
    ]
  }
};