// Location: src/data/lessons/core/mathematics/vectors/vector_geometry.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_vector_geometry",
  subject: "Mathematics",
  topic: "Vectors",
  name: "Vector Geometry",
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
      description: "Use vectors to solve problems in triangles",
      indicator: "Student can use vector addition to find sides in triangles"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use vectors to solve problems in quadrilaterals",
      indicator: "Student can use vector addition to find sides in quadrilaterals"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Recognize parallel and equal vectors in geometric figures",
      indicator: "Student can identify parallel and equal vectors"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Prove geometric properties using vectors",
      indicator: "Student can prove statements using vector methods"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply vectors to solve ratio problems in geometry",
      indicator: "Student can find ratios using vector methods"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Solve problems involving medians and diagonals using vectors",
      indicator: "Student can find medians and diagonals using vectors"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Prove that a quadrilateral is a parallelogram using vectors",
      indicator: "Student can prove parallelogram properties"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Use vectors to prove that medians intersect at a point",
      indicator: "Student can prove centroid properties"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex geometric problems using vector methods",
      indicator: "Student can solve multi-step vector geometry problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Vector Geometry - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering vector geometry in triangles, quadrilaterals, and proofs."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Vector Geometry?</h2>
      <p>Vector geometry uses vectors to solve geometric problems.</p>
      <p>Vectors can be used to:</p>
      <ul>
        <li>Find missing sides in triangles and quadrilaterals</li>
        <li>Prove geometric properties</li>
        <li>Find ratios and divisions of lines</li>
        <li>Prove shape properties (parallelogram, etc.)</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Triangle Properties",
        objective: "obj_001",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In triangle ABC, AB = (3, 4), BC = (1, 2). Find AC.
            <ul>
              <li>AC = AB + BC = (3, 4) + (1, 2) = (4, 6)</li>
              <li><strong>Answer:</strong> AC = (4, 6)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Quadrilateral Properties",
        objective: "obj_002",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In quadrilateral ABCD, AB = (2, 3), BC = (1, -2), CD = (-1, 1). Find AD.
            <ul>
              <li>AD = AB + BC + CD = (2, 3) + (1, -2) + (-1, 1)</li>
              <li>= (2+1-1, 3-2+1) = (2, 2)</li>
              <li><strong>Answer:</strong> AD = (2, 2)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Parallel and Equal Vectors",
        objective: "obj_003",
        text: `
          <h3>Properties</h3>
          <ul>
            <li><strong>Equal vectors:</strong> Same magnitude and direction</li>
            <li><strong>Parallel vectors:</strong> One is a scalar multiple of the other</li>
            <li><strong>Opposite vectors:</strong> Same magnitude, opposite direction</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> AB = (2, 4), CD = (3, 6)
            <ul>
              <li>CD = 1.5 × AB</li>
              <li>They are parallel (CD = 1.5AB)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Proving Properties",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Prove that the opposite sides of a parallelogram are equal.
            <ul>
              <li>Let ABCD be a parallelogram</li>
              <li>AB = DC (opposite sides are parallel and equal)</li>
              <li>BC = AD (opposite sides are parallel and equal)</li>
              <li>Therefore, AB = DC and BC = AD</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Ratio Problems",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Point P divides AB in ratio 2:3. A(1, 2), B(7, 8). Find P.
            <ul>
              <li>P = (3A + 2B)/5</li>
              <li>P = (3(1, 2) + 2(7, 8))/5</li>
              <li>P = ((3+14)/5, (6+16)/5)</li>
              <li>P = (17/5, 22/5) = (3.4, 4.4)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Medians and Diagonals",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Triangle ABC with A(1, 2), B(3, 6), C(5, 2). Find median from A to BC.
            <ul>
              <li>M = midpoint of BC = ((3+5)/2, (6+2)/2) = (4, 4)</li>
              <li>AM = M - A = (4-1, 4-2) = (3, 2)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Parallelogram Proof",
        objective: "obj_007",
        text: `
          <h3>Parallelogram Properties</h3>
          <ul>
            <li>Opposite sides are parallel and equal</li>
            <li>Diagonals bisect each other</li>
            <li>Opposite angles are equal</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(1, 2), B(4, 6), C(7, 8), D(4, 4)
            <ul>
              <li>AB = (3, 4), DC = (3, 4) → AB = DC</li>
              <li>BC = (3, 2), AD = (3, 2) → BC = AD</li>
              <li>Therefore, ABCD is a parallelogram</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Medians Intersection (Centroid)",
        objective: "obj_008",
        text: `
          <h3>Centroid Property</h3>
          <p>The medians of a triangle intersect at a point called the centroid.</p>
          <p><strong>Centroid = (A + B + C)/3</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A(1, 2), B(3, 6), C(5, 2)
            <ul>
              <li>Centroid = (1+3+5)/3, (2+6+2)/3</li>
              <li>= (9/3, 10/3) = (3, 10/3)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Vector Geometry",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In triangle ABC, D is the midpoint of BC. Express AD in terms of AB and AC.
            <ul>
              <li>Let A be the origin</li>
              <li>Let B = b, C = c</li>
              <li>D = (b + c)/2</li>
              <li>AD = D - A = (b + c)/2</li>
              <li>Therefore, AD = ½(AB + AC)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Use vector addition to find missing sides</li>
        <li>Parallel vectors: one is a scalar multiple of another</li>
        <li>Equal vectors have same magnitude and direction</li>
        <li>Parallelogram: opposite sides are parallel and equal</li>
        <li>Point dividing a line: P = (mA + nB)/(m+n)</li>
        <li>Centroid = (A + B + C)/3</li>
        <li>Vectors can prove geometric properties</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Parallel Vectors", definition: "Vectors that are scalar multiples of each other." },
    { term: "Equal Vectors", definition: "Vectors with same magnitude and direction." },
    { term: "Parallelogram", definition: "A quadrilateral with opposite sides parallel and equal." },
    { term: "Centroid", definition: "The point where medians of a triangle intersect." },
    { term: "Median", definition: "A line from a vertex to the midpoint of the opposite side." },
    { term: "Ratio Division", definition: "Dividing a line in a given ratio using vectors." }
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
      question: "AB = (2, 3), BC = (1, 4). AC = ?",
      type: "multiple_choice",
      options: ["(3, 7)", "(1, -1)", "(3, 7)", "(1, 1)"],
      answer: "(3, 7)",
      explanation: "AC = AB + BC = (2+1, 3+4) = (3, 7)"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "AB = (1, 2), BC = (3, -1), CD = (-2, 1). AD = ?",
      type: "multiple_choice",
      options: ["(2, 2)", "(1, 2)", "(2, 1)", "(1, 1)"],
      answer: "(2, 2)",
      explanation: "AD = AB + BC + CD = (1+3-2, 2-1+1) = (2, 2)"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "AB = (2, 4), CD = (4, 8). Are they parallel?",
      type: "multiple_choice",
      options: ["Yes", "No", "Equal", "Opposite"],
      answer: "Yes",
      explanation: "CD = 2 × AB, so they are parallel."
    },
    {
      id: "prac_004",
      objective: "obj_001",
      difficulty: "easy",
      question: "In triangle ABC, AB = (3, 5), BC = (2, -3). AC = ?",
      type: "multiple_choice",
      options: ["(5, 2)", "(1, 8)", "(5, 8)", "(1, 2)"],
      answer: "(5, 2)",
      explanation: "AC = (3+2, 5-3) = (5, 2)"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "AB = (-2, -4), CD = (2, 4). Relationship?",
      type: "multiple_choice",
      options: ["Parallel", "Opposite", "Equal", "Perpendicular"],
      answer: "Opposite",
      explanation: "CD = -1 × AB, they are opposite vectors."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "If AB = DC, what shape is ABCD?",
      type: "multiple_choice",
      options: ["Triangle", "Parallelogram", "Rectangle", "Square"],
      answer: "Parallelogram",
      explanation: "One pair of opposite sides equal → parallelogram."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "A(1, 1), B(5, 5). P divides AB in ratio 1:3. P = ?",
      type: "multiple_choice",
      options: ["(2, 2)", "(3, 3)", "(4, 4)", "(2.5, 2.5)"],
      answer: "(2, 2)",
      explanation: "P = (3A + 1B)/4 = (3(1,1) + (5,5))/4 = (8,8)/4 = (2,2)"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "A(1, 2), B(5, 6), C(3, 8). Median from A?",
      type: "multiple_choice",
      options: ["(2, 3)", "(4, 7)", "(4, 7)", "(2, 7)"],
      answer: "(2, 3)",
      explanation: "M = (B+C)/2 = (4, 7), AM = (4-1, 7-2) = (3, 5)"
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "A(1, 1), B(4, 3), C(7, 5), D(4, 3). Is ABCD a parallelogram?",
      type: "multiple_choice",
      options: ["Yes", "No", "Cannot determine", "Only if angles are right"],
      answer: "No",
      explanation: "AB = (3, 2), DC = (3, 2) → AB = DC. BC = (3, 2), AD = (3, 2) → BC = AD. Yes, it is a parallelogram."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Centroid of A(1, 2), B(5, 6), C(3, 4) is:",
      type: "multiple_choice",
      options: ["(3, 4)", "(4, 3)", "(3, 3)", "(4, 4)"],
      answer: "(3, 4)",
      explanation: "(1+5+3)/3 = 3, (2+6+4)/3 = 4"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Centroid formula is (A + B + C)/3. For A(1, 1), B(4, 4), C(7, 7), centroid is:",
      type: "multiple_choice",
      options: ["(4, 4)", "(3, 3)", "(5, 5)", "(6, 6)"],
      answer: "(4, 4)",
      explanation: "(1+4+7)/3 = 4, (1+4+7)/3 = 4"
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "In triangle ABC, D is midpoint of BC. AD = ?",
      type: "multiple_choice",
      options: ["½(AB + AC)", "½(AB - AC)", "AB + AC", "AB - AC"],
      answer: "½(AB + AC)",
      explanation: "If A is origin, AD = (B + C)/2 = ½(AB + AC)"
    },
    {
      id: "prac_013",
      objective: "obj_007",
      difficulty: "hard",
      question: "A(1, 2), B(3, 5), C(5, 8), D(3, 5). Is ABCD a parallelogram?",
      type: "multiple_choice",
      options: ["Yes", "No", "Cannot determine", "Only if angles are right"],
      answer: "Yes",
      explanation: "AB = (2, 3), DC = (2, 3) → AB = DC. BC = (2, 3), AD = (2, 3) → BC = AD."
    },
    {
      id: "prac_014",
      objective: "obj_005",
      difficulty: "hard",
      question: "A(1, 1), B(5, 5). P divides AB in ratio 2:3. P = ?",
      type: "multiple_choice",
      options: ["(2.6, 2.6)", "(3, 3)", "(3.4, 3.4)", "(4, 4)"],
      answer: "(2.6, 2.6)",
      explanation: "P = (3A + 2B)/5 = (3(1,1) + 2(5,5))/5 = (3+10, 3+10)/5 = (13,13)/5 = (2.6, 2.6)"
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Centroid of A(2, 3), B(6, 7), C(4, 5) is:",
      type: "multiple_choice",
      options: ["(3, 4)", "(4, 5)", "(5, 6)", "(4, 4)"],
      answer: "(4, 5)",
      explanation: "(2+6+4)/3 = 4, (3+7+5)/3 = 5"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_vector_geometry",
    title: "Vector Geometry Quiz",
    description: "Test your understanding of vector geometry",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "AB = (2, 3), BC = (4, 5). AC = ?",
        type: "short_answer",
        answer_key: "(6, 8)",
        explanation: "(2+4, 3+5) = (6, 8)"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "AB = (1, 1), BC = (2, -1), CD = (-1, 1). AD = ?",
        type: "short_answer",
        answer_key: "(2, 1)",
        explanation: "(1+2-1, 1-1+1) = (2, 1)"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "AB = (1, 2), CD = (2, 4). Are they parallel?",
        type: "short_answer",
        answer_key: "Yes",
        explanation: "CD = 2 × AB"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "If AB = DC, what shape is ABCD?",
        type: "short_answer",
        answer_key: "Parallelogram",
        explanation: "One pair of opposite sides equal → parallelogram."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "A(1, 1), B(7, 7). P divides AB in ratio 1:2. P = ?",
        type: "short_answer",
        answer_key: "(3, 3)",
        explanation: "P = (2A + 1B)/3 = (2+7, 2+7)/3 = (9, 9)/3 = (3, 3)"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "A(1, 1), B(3, 5), C(5, 3). Median from A is:",
        type: "short_answer",
        answer_key: "(3, 2)",
        explanation: "M = (B+C)/2 = (4, 4), AM = (4-1, 4-1) = (3, 3)"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "A(1, 2), B(4, 5), C(7, 8), D(4, 5). Is ABCD a parallelogram?",
        type: "short_answer",
        answer_key: "Yes",
        explanation: "AB = (3, 3), DC = (3, 3) → AB = DC. BC = (3, 3), AD = (3, 3) → BC = AD."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Centroid of A(0, 0), B(6, 0), C(3, 9) is:",
        type: "short_answer",
        answer_key: "(3, 3)",
        explanation: "(0+6+3)/3 = 3, (0+0+9)/3 = 3"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "AD = ½(AB + AC) when D is midpoint of BC. True or False?",
        type: "short_answer",
        answer_key: "True",
        explanation: "D = (B+C)/2, AD = (B+C)/2 = ½(AB+AC)"
      },
      {
        id: "ass_010",
        objective: "obj_005",
        difficulty: "hard",
        question: "A(2, 2), B(8, 8). P divides AB in ratio 3:1. P = ?",
        type: "short_answer",
        answer_key: "(6.5, 6.5)",
        explanation: "P = (1A + 3B)/4 = (2+24, 2+24)/4 = (26, 26)/4 = (6.5, 6.5)"
      }
    ]
  }
};