// Location: src/data/lessons/core/mathematics/vectors/position_vectors.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_position_vectors",
  subject: "Mathematics",
  topic: "Vectors",
  name: "Position Vectors",
  icon: "📍",
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
      description: "Define a position vector and understand its meaning",
      indicator: "Student can explain that a position vector locates a point relative to the origin"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Find position vectors of points",
      indicator: "Student can write the position vector of a point as (x, y)"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use position vectors to find displacement vectors",
      indicator: "Student can find the vector between two points"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Find the midpoint of two position vectors",
      indicator: "Student can calculate the midpoint using vector averaging"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply position vectors to solve geometric problems",
      indicator: "Student can use vectors to solve geometry problems"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Find the equation of a line using position vectors",
      indicator: "Student can use r = a + tb to represent a line"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve problems involving collinear points using vectors",
      indicator: "Student can determine if points are collinear using vectors"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply position vectors to 3D geometry problems",
      indicator: "Student can solve 3D vector problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex vector geometry problems",
      indicator: "Student can solve multi-step vector geometry problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Position Vectors - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering position vectors, displacement, and vector geometry."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Position Vectors?</h2>
      <p>A <strong>position vector</strong> is a vector that starts at the origin (0,0) and ends at a point P.</p>
      <p>It is written as <strong>OP</strong> or <strong>r</strong>.</p>
      <p>If P has coordinates (x, y), then the position vector is <strong>(x, y)</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Position Vectors of Points",
        objective: "obj_002",
        text: `
          <h3>Writing Position Vectors</h3>
          <p>The position vector of point P(x, y) is <strong>OP = (x, y)</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Point P(3, 4)
            <ul>
              <li>Position vector = (3, 4)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Point Q(-2, 5)
            <ul>
              <li>Position vector = (-2, 5)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Displacement Vectors",
        objective: "obj_003",
        text: `
          <h3>Finding the Vector from A to B</h3>
          <p><strong>AB = OB - OA</strong></p>
          <p>Where OA and OB are position vectors of points A and B.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(2, 3) and B(5, 7)
            <ul>
              <li>OA = (2, 3), OB = (5, 7)</li>
              <li>AB = OB - OA = (5, 7) - (2, 3) = (3, 4)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Midpoint of Two Vectors",
        objective: "obj_004",
        text: `
          <h3>Midpoint Formula</h3>
          <p><strong>M = (A + B)/2</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(2, 3) and B(6, 7)
            <ul>
              <li>OA = (2, 3), OB = (6, 7)</li>
              <li>Midpoint = (2+6)/2, (3+7)/2 = (4, 5)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Vector Geometry",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In triangle ABC, A(1, 2), B(4, 6), C(7, 2)
            <ul>
              <li>AB = B - A = (4-1, 6-2) = (3, 4)</li>
              <li>BC = C - B = (7-4, 2-6) = (3, -4)</li>
              <li>CA = A - C = (1-7, 2-2) = (-6, 0)</li>
              <li>Check: AB + BC + CA = (3, 4) + (3, -4) + (-6, 0) = (0, 0) ✓</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Equation of a Line",
        objective: "obj_006",
        text: `
          <h3>Vector Equation of a Line</h3>
          <p><strong>r = a + tb</strong></p>
          <ul>
            <li><strong>a</strong> = position vector of a point on the line</li>
            <li><strong>b</strong> = direction vector of the line</li>
            <li><strong>t</strong> = scalar parameter</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Line through A(1, 2) in direction (3, 4)
            <ul>
              <li>a = (1, 2), b = (3, 4)</li>
              <li>r = (1, 2) + t(3, 4)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Collinear Points",
        objective: "obj_007",
        text: `
          <h3>Checking Collinearity</h3>
          <p>Points A, B, C are collinear if <strong>AB = k × BC</strong> for some scalar k.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(1, 2), B(3, 6), C(5, 10)
            <ul>
              <li>AB = (2, 4)</li>
              <li>BC = (2, 4)</li>
              <li>AB = BC, so k = 1</li>
              <li><strong>Collinear!</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "3D Position Vectors",
        objective: "obj_008",
        text: `
          <h3>3D Vectors</h3>
          <p>In 3D, position vectors have three components: (x, y, z).</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(1, 2, 3), B(4, 5, 6)
            <ul>
              <li>OA = (1, 2, 3)</li>
              <li>OB = (4, 5, 6)</li>
              <li>AB = OB - OA = (3, 3, 3)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Vector Geometry",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A(-1, 3), B(2, 5), C(5, 7). Find AB and BC.
            <ul>
              <li>AB = B - A = (2-(-1), 5-3) = (3, 2)</li>
              <li>BC = C - B = (5-2, 7-5) = (3, 2)</li>
              <li>AB = BC, so the points are collinear!</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Position vector: vector from origin to a point</li>
        <li>Displacement: AB = OB - OA</li>
        <li>Midpoint: (A + B)/2</li>
        <li>Line equation: r = a + tb</li>
        <li>Collinear points: AB = k × BC</li>
        <li>3D vectors work the same way with three components</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Position Vector", definition: "A vector from the origin to a point." },
    { term: "Displacement Vector", definition: "The vector between two points (AB = OB - OA)." },
    { term: "Midpoint", definition: "The point halfway between two points: (A+B)/2." },
    { term: "Direction Vector", definition: "A vector that gives the direction of a line." },
    { term: "Collinear", definition: "Points that lie on the same straight line." },
    { term: "Parameter", definition: "A variable (t) used in vector equations of lines." }
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
      question: "A position vector represents a point relative to:",
      type: "multiple_choice",
      options: ["Another point", "The origin", "The x-axis", "The y-axis"],
      answer: "The origin",
      explanation: "Position vectors start at the origin."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Position vector of P(3, 5) is:",
      type: "multiple_choice",
      options: ["(3, 5)", "(5, 3)", "(3, 0)", "(0, 5)"],
      answer: "(3, 5)",
      explanation: "Position vector of P(x, y) is (x, y)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "A(1, 2), B(4, 6). AB = ?",
      type: "multiple_choice",
      options: ["(3, 4)", "(4, 3)", "(5, 8)", "(3, 8)"],
      answer: "(3, 4)",
      explanation: "AB = OB - OA = (4-1, 6-2) = (3, 4)"
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "Midpoint of A(2, 4) and B(6, 8) is:",
      type: "multiple_choice",
      options: ["(4, 6)", "(3, 5)", "(5, 7)", "(8, 12)"],
      answer: "(4, 6)",
      explanation: "(2+6)/2 = 4, (4+8)/2 = 6"
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "easy",
      question: "Line through A(1,2) direction (3,4): r = ?",
      type: "multiple_choice",
      options: ["(1,2) + t(3,4)", "(3,4) + t(1,2)", "(1,2) × t(3,4)", "(1,2) - t(3,4)"],
      answer: "(1,2) + t(3,4)",
      explanation: "r = a + tb where a is point and b is direction."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_003",
      difficulty: "medium",
      question: "A(3, 5), B(7, 9). AB = ?",
      type: "multiple_choice",
      options: ["(4, 4)", "(10, 14)", "(4, 14)", "(10, 4)"],
      answer: "(4, 4)",
      explanation: "(7-3, 9-5) = (4, 4)"
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Midpoint of A(-1, 3) and B(5, -1) is:",
      type: "multiple_choice",
      options: ["(2, 1)", "(4, 2)", "(2, 2)", "(3, 1)"],
      answer: "(2, 1)",
      explanation: "(-1+5)/2 = 2, (3-1)/2 = 1"
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "Are A(1, 2), B(3, 6), C(5, 10) collinear?",
      type: "multiple_choice",
      options: ["Yes", "No", "Cannot determine", "Only A and B"],
      answer: "Yes",
      explanation: "AB = (2, 4), BC = (2, 4), so collinear."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "In triangle ABC, AB = (2, 3), BC = (-1, 4). What is AC?",
      type: "multiple_choice",
      options: ["(1, 7)", "(3, -1)", "(1, -1)", "(3, 7)"],
      answer: "(1, 7)",
      explanation: "AC = AB + BC = (2-1, 3+4) = (1, 7)"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Line through (2,3) and (5,7). Direction vector is:",
      type: "multiple_choice",
      options: ["(3, 4)", "(2, 3)", "(5, 7)", "(7, 10)"],
      answer: "(3, 4)",
      explanation: "Direction = (5-2, 7-3) = (3, 4)"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A(1, 2), B(3, 6), C(5, 10). Find k if AB = k(BC).",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "AB = (2, 4), BC = (2, 4), k = 1"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "In 3D, A(1, 2, 3), B(4, 5, 6). AB = ?",
      type: "multiple_choice",
      options: ["(3, 3, 3)", "(3, 3, 3)", "(5, 7, 9)", "(3, 7, 9)"],
      answer: "(3, 3, 3)",
      explanation: "(4-1, 5-2, 6-3) = (3, 3, 3)"
    },
    {
      id: "prac_013",
      objective: "obj_007",
      difficulty: "hard",
      question: "Are A(2, 3), B(4, 7), C(6, 11) collinear?",
      type: "multiple_choice",
      options: ["Yes", "No", "Cannot determine", "Only A and B"],
      answer: "Yes",
      explanation: "AB = (2, 4), BC = (2, 4) → collinear"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "A(1, 2), B(4, 5), C(7, 8). What is AB + BC?",
      type: "multiple_choice",
      options: ["(3, 3)", "(3, 3)", "(6, 6)", "(3, 6)"],
      answer: "(6, 6)",
      explanation: "AB = (3, 3), BC = (3, 3), AB + BC = (6, 6) = AC"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Find the equation of the line through A(1, 2) and B(3, 6).",
      type: "multiple_choice",
      options: ["r = (1,2) + t(2,4)", "r = (1,2) + t(3,6)", "r = (3,6) + t(1,2)", "r = (2,4) + t(1,2)"],
      answer: "r = (1,2) + t(2,4)",
      explanation: "a = (1,2), b = B - A = (2,4)"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_position_vectors",
    title: "Position Vectors Quiz",
    description: "Test your understanding of position vectors",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What does a position vector represent?",
        type: "short_answer",
        answer_key: "A point relative to the origin",
        explanation: "Position vectors locate points relative to the origin."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Position vector of P(4, 7) is:",
        type: "short_answer",
        answer_key: "(4, 7)",
        explanation: "Position vector = (x, y)"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "A(2, 3), B(5, 8). AB = ?",
        type: "short_answer",
        answer_key: "(3, 5)",
        explanation: "(5-2, 8-3) = (3, 5)"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "Midpoint of A(1, 4) and B(5, 8) is:",
        type: "short_answer",
        answer_key: "(3, 6)",
        explanation: "(1+5)/2 = 3, (4+8)/2 = 6"
      },
      {
        id: "ass_005",
        objective: "obj_003",
        difficulty: "medium",
        question: "A(3, 7), B(8, 12). AB = ?",
        type: "short_answer",
        answer_key: "(5, 5)",
        explanation: "(8-3, 12-7) = (5, 5)"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "Midpoint of A(-2, 3) and B(4, -1) is:",
        type: "short_answer",
        answer_key: "(1, 1)",
        explanation: "(-2+4)/2 = 1, (3-1)/2 = 1"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Are A(1, 1), B(3, 5), C(5, 9) collinear? (Yes/No)",
        type: "short_answer",
        answer_key: "Yes",
        explanation: "AB = (2, 4), BC = (2, 4) → collinear"
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "Line through A(1, 2) and B(4, 8). Direction vector:",
        type: "short_answer",
        answer_key: "(3, 6)",
        explanation: "(4-1, 8-2) = (3, 6)"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "A(1, 2, 3), B(3, 5, 7). AB = ?",
        type: "short_answer",
        answer_key: "(2, 3, 4)",
        explanation: "(3-1, 5-2, 7-3) = (2, 3, 4)"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A(1, 3), B(4, 7), C(7, 11). Find AB + BC.",
        type: "short_answer",
        answer_key: "(6, 8)",
        explanation: "AB = (3, 4), BC = (3, 4), sum = (6, 8)"
      }
    ]
  }
};