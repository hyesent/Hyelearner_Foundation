// Location: src/data/lessons/core/mathematics/trigonometry/identities.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_trig_identities",
  subject: "Mathematics",
  topic: "Trigonometry",
  name: "Trigonometric Identities",
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
      description: "Define sine, cosine, and tangent in right-angled triangles",
      indicator: "Student can explain SOH-CAH-TOA and identify opposite, adjacent, and hypotenuse"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Use trigonometric ratios to find missing sides in right triangles",
      indicator: "Student can use sin, cos, tan to calculate sides"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use trigonometric ratios to find missing angles in right triangles",
      indicator: "Student can use inverse trig functions to find angles"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the Pythagorean identity (sin²θ + cos²θ = 1)",
      indicator: "Student can use sin²θ + cos²θ = 1 to solve problems"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply the reciprocal identities (csc, sec, cot)",
      indicator: "Student can use csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply the tangent identity (tan θ = sin θ / cos θ)",
      indicator: "Student can use tan θ = sin θ / cos θ"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Prove simple trigonometric identities",
      indicator: "Student can prove identities using algebraic manipulation"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve trigonometric equations",
      indicator: "Student can solve equations involving sin, cos, and tan"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply trigonometric identities to complex problems",
      indicator: "Student can solve multi-step trig problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Trigonometric Identities - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering sine, cosine, tangent, and trigonometric identities."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Trigonometric Identities?</h2>
      <p><strong>Trigonometry</strong> is the study of relationships between the sides and angles of triangles.</p>
      <p><strong>Trigonometric identities</strong> are equations that are true for all values of the variables.</p>
      <p>The word "trigonometry" comes from Greek: "trigonon" (triangle) and "metron" (measure).</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "SOH-CAH-TOA",
        objective: "obj_001",
        text: `
          <h3>The Three Main Ratios</h3>
          <p><strong>SOH-CAH-TOA</strong> is a mnemonic to remember the trig ratios:</p>
          <ul>
            <li><strong>SOH:</strong> Sin θ = Opposite / Hypotenuse</li>
            <li><strong>CAH:</strong> Cos θ = Adjacent / Hypotenuse</li>
            <li><strong>TOA:</strong> Tan θ = Opposite / Adjacent</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Right Triangle ABC:</strong>
            <ul>
              <li>Hypotenuse (H): Side opposite right angle</li>
              <li>Opposite (O): Side opposite angle θ</li>
              <li>Adjacent (A): Side next to angle θ</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Finding Missing Sides",
        objective: "obj_002",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> In right triangle, angle = 30°, hypotenuse = 10cm. Find opposite side.
            <ul>
              <li>sin 30° = Opposite / Hypotenuse</li>
              <li>0.5 = Opposite / 10</li>
              <li>Opposite = 5cm</li>
              <li><strong>Answer:</strong> 5cm</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> In right triangle, angle = 45°, adjacent = 7cm. Find opposite side.
            <ul>
              <li>tan 45° = Opposite / Adjacent</li>
              <li>1 = Opposite / 7</li>
              <li>Opposite = 7cm</li>
              <li><strong>Answer:</strong> 7cm</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Finding Missing Angles",
        objective: "obj_003",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> In right triangle, opposite = 5cm, hypotenuse = 10cm. Find angle θ.
            <ul>
              <li>sin θ = 5/10 = 0.5</li>
              <li>θ = sin⁻¹(0.5) = 30°</li>
              <li><strong>Answer:</strong> 30°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> In right triangle, opposite = 4cm, adjacent = 3cm. Find angle θ.
            <ul>
              <li>tan θ = 4/3 ≈ 1.333</li>
              <li>θ = tan⁻¹(1.333) ≈ 53.13°</li>
              <li><strong>Answer:</strong> 53.13°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Pythagorean Identity",
        objective: "obj_004",
        text: `
          <h3>Key Identity</h3>
          <p><strong>sin²θ + cos²θ = 1</strong></p>
          <p>This is the Pythagorean identity, derived from the Pythagorean theorem (a² + b² = c²).</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> If sin θ = 3/5, find cos θ.
            <ul>
              <li>sin²θ + cos²θ = 1</li>
              <li>(3/5)² + cos²θ = 1</li>
              <li>9/25 + cos²θ = 1</li>
              <li>cos²θ = 16/25</li>
              <li>cos θ = 4/5</li>
              <li><strong>Answer:</strong> 4/5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Reciprocal Identities",
        objective: "obj_005",
        text: `
          <h3>Reciprocal Ratios</h3>
          <ul>
            <li><strong>csc θ = 1/sin θ</strong> (cosecant)</li>
            <li><strong>sec θ = 1/cos θ</strong> (secant)</li>
            <li><strong>cot θ = 1/tan θ</strong> (cotangent)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> If sin θ = 2/3, find csc θ.
            <ul>
              <li>csc θ = 1/(2/3) = 3/2</li>
              <li><strong>Answer:</strong> 3/2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Tangent Identity",
        objective: "obj_006",
        text: `
          <h3>Identity</h3>
          <p><strong>tan θ = sin θ / cos θ</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> If sin θ = 3/5 and cos θ = 4/5, find tan θ.
            <ul>
              <li>tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4</li>
              <li><strong>Answer:</strong> 3/4</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Proving Identities",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Prove that tan θ × cos θ = sin θ
            <ul>
              <li>LHS: tan θ × cos θ = (sin θ / cos θ) × cos θ = sin θ</li>
              <li>LHS = RHS ✓</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Prove that sin²θ + cos²θ = 1
            <ul>
              <li>This is the Pythagorean identity</li>
              <li>Always true for any angle θ</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Solving Trigonometric Equations",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Solve sin θ = 1/2 for 0° ≤ θ ≤ 90°
            <ul>
              <li>θ = sin⁻¹(1/2) = 30°</li>
              <li><strong>Answer:</strong> 30°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Solve tan θ = 1 for 0° ≤ θ ≤ 90°
            <ul>
              <li>θ = tan⁻¹(1) = 45°</li>
              <li><strong>Answer:</strong> 45°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Trig Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> If sin θ = 12/13 and θ is acute, find cos θ and tan θ.
            <ul>
              <li>sin²θ + cos²θ = 1</li>
              <li>(12/13)² + cos²θ = 1</li>
              <li>144/169 + cos²θ = 1</li>
              <li>cos²θ = 25/169</li>
              <li>cos θ = 5/13</li>
              <li>tan θ = sin θ / cos θ = (12/13)/(5/13) = 12/5</li>
              <li><strong>Answer:</strong> cos θ = 5/13, tan θ = 12/5</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>SOH-CAH-TOA: sin = O/H, cos = A/H, tan = O/A</li>
        <li>Use inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) to find angles</li>
        <li>sin²θ + cos²θ = 1 (Pythagorean identity)</li>
        <li>tan θ = sin θ / cos θ</li>
        <li>csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ</li>
        <li>Use identities to simplify and prove trigonometric expressions</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Sine (sin)", definition: "Opposite / Hypotenuse in a right triangle." },
    { term: "Cosine (cos)", definition: "Adjacent / Hypotenuse in a right triangle." },
    { term: "Tangent (tan)", definition: "Opposite / Adjacent in a right triangle." },
    { term: "Hypotenuse", definition: "The longest side of a right triangle, opposite 90°." },
    { term: "SOH-CAH-TOA", definition: "Mnemonic for sine, cosine, and tangent ratios." },
    { term: "Cosecant (csc)", definition: "Reciprocal of sine: 1/sin θ." },
    { term: "Secant (sec)", definition: "Reciprocal of cosine: 1/cos θ." },
    { term: "Cotangent (cot)", definition: "Reciprocal of tangent: 1/tan θ." },
    { term: "Pythagorean Identity", definition: "sin²θ + cos²θ = 1." }
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
      question: "What does SOH stand for?",
      type: "multiple_choice",
      options: [
        "Sin = Opposite / Hypotenuse",
        "Sin = Adjacent / Hypotenuse",
        "Sin = Opposite / Adjacent",
        "Sin = Hypotenuse / Opposite"
      ],
      answer: "Sin = Opposite / Hypotenuse",
      explanation: "SOH: Sin = Opposite / Hypotenuse"
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What does CAH stand for?",
      type: "multiple_choice",
      options: [
        "Cos = Opposite / Hypotenuse",
        "Cos = Adjacent / Hypotenuse",
        "Cos = Opposite / Adjacent",
        "Cos = Hypotenuse / Adjacent"
      ],
      answer: "Cos = Adjacent / Hypotenuse",
      explanation: "CAH: Cos = Adjacent / Hypotenuse"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "In a right triangle, angle = 30°, hypotenuse = 10cm. Find opposite.",
      type: "multiple_choice",
      options: ["3cm", "4cm", "5cm", "6cm"],
      answer: "5cm",
      explanation: "sin 30° = 0.5 = O/10 → O = 5cm"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "In a right triangle, angle = 45°, adjacent = 8cm. Find opposite.",
      type: "multiple_choice",
      options: ["4cm", "8cm", "12cm", "16cm"],
      answer: "8cm",
      explanation: "tan 45° = 1 = O/8 → O = 8cm"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "If sin θ = 1/2, find θ (0° ≤ θ ≤ 90°)",
      type: "multiple_choice",
      options: ["15°", "30°", "45°", "60°"],
      answer: "30°",
      explanation: "sin⁻¹(1/2) = 30°"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "If sin θ = 4/5, find cos θ",
      type: "multiple_choice",
      options: ["1/5", "2/5", "3/5", "4/5"],
      answer: "3/5",
      explanation: "sin²θ + cos²θ = 1 → 16/25 + cos²θ = 1 → cos²θ = 9/25 → cos θ = 3/5"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "If sin θ = 3/7, find csc θ",
      type: "multiple_choice",
      options: ["3/7", "7/3", "4/7", "7/4"],
      answer: "7/3",
      explanation: "csc θ = 1/sin θ = 7/3"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "If sin θ = 12/13 and cos θ = 5/13, find tan θ",
      type: "multiple_choice",
      options: ["5/12", "12/5", "13/12", "12/13"],
      answer: "12/5",
      explanation: "tan θ = sin θ / cos θ = (12/13)/(5/13) = 12/5"
    },
    {
      id: "prac_009",
      objective: "obj_004",
      difficulty: "medium",
      question: "If cos θ = 5/13, find sin θ",
      type: "multiple_choice",
      options: ["5/13", "8/13", "12/13", "13/12"],
      answer: "12/13",
      explanation: "sin²θ + (5/13)² = 1 → sin²θ + 25/169 = 1 → sin²θ = 144/169 → sin θ = 12/13"
    },
    {
      id: "prac_010",
      objective: "obj_003",
      difficulty: "medium",
      question: "If tan θ = 1, find θ (0° ≤ θ ≤ 90°)",
      type: "multiple_choice",
      options: ["30°", "45°", "60°", "90°"],
      answer: "45°",
      explanation: "tan⁻¹(1) = 45°"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Simplify: tan θ × cos θ",
      type: "multiple_choice",
      options: ["sin θ", "cos θ", "tan θ", "1"],
      answer: "sin θ",
      explanation: "tan θ × cos θ = (sin θ/cos θ) × cos θ = sin θ"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Simplify: sin θ / cos θ",
      type: "multiple_choice",
      options: ["sin θ", "cos θ", "tan θ", "cot θ"],
      answer: "tan θ",
      explanation: "sin θ / cos θ = tan θ"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Solve: sin θ = √3/2 for 0° ≤ θ ≤ 90°",
      type: "multiple_choice",
      options: ["30°", "45°", "60°", "90°"],
      answer: "60°",
      explanation: "sin⁻¹(√3/2) = 60°"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "If sin θ = 5/13 and cos θ = 12/13, find all other trig ratios",
      type: "multiple_choice",
      options: ["csc=13/5, sec=13/12, cot=12/5", "csc=5/13, sec=12/13, cot=5/12", "csc=13/5, sec=12/13, cot=5/12", "csc=5/13, sec=13/12, cot=12/5"],
      answer: "csc=13/5, sec=13/12, cot=12/5",
      explanation: "csc = 1/sin = 13/5, sec = 1/cos = 13/12, cot = 1/tan = 12/5"
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Solve: cos θ = 1/2 for 0° ≤ θ ≤ 90°",
      type: "multiple_choice",
      options: ["30°", "45°", "60°", "90°"],
      answer: "60°",
      explanation: "cos⁻¹(1/2) = 60°"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_trig_identities",
    title: "Trigonometric Identities Quiz",
    description: "Test your understanding of trigonometric identities",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is tan θ equal to in a right triangle?",
        type: "short_answer",
        answer_key: "Opposite / Adjacent",
        explanation: "tan θ = Opposite / Adjacent (TOA)"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "If angle = 30°, hypotenuse = 12cm, find opposite.",
        type: "short_answer",
        answer_key: "6cm",
        explanation: "sin 30° = 0.5 = O/12 → O = 6cm"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "If sin θ = 0.5, find θ (0° ≤ θ ≤ 90°)",
        type: "short_answer",
        answer_key: "30°",
        explanation: "sin⁻¹(0.5) = 30°"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "If sin θ = 5/13, find cos θ.",
        type: "short_answer",
        answer_key: "12/13",
        explanation: "sin²θ + cos²θ = 1 → 25/169 + cos²θ = 1 → cos²θ = 144/169 → cos θ = 12/13"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "If sin θ = 2/5, find csc θ.",
        type: "short_answer",
        answer_key: "5/2",
        explanation: "csc θ = 1/sin θ = 5/2"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "If sin θ = 8/17 and cos θ = 15/17, find tan θ.",
        type: "short_answer",
        answer_key: "8/15",
        explanation: "tan θ = sin θ / cos θ = (8/17)/(15/17) = 8/15"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Simplify: sin θ × cot θ",
        type: "short_answer",
        answer_key: "cos θ",
        explanation: "sin θ × cot θ = sin θ × (cos θ/sin θ) = cos θ"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Simplify: sin²θ + cos²θ",
        type: "short_answer",
        answer_key: "1",
        explanation: "sin²θ + cos²θ = 1 (Pythagorean identity)"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Solve: sin θ = 1/√2 for 0° ≤ θ ≤ 90°",
        type: "short_answer",
        answer_key: "45°",
        explanation: "sin⁻¹(1/√2) = 45°"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "If cos θ = 7/25, find sin θ and tan θ.",
        type: "short_answer",
        answer_key: "sin θ = 24/25, tan θ = 24/7",
        explanation: "sin²θ + (7/25)² = 1 → sin²θ = 576/625 → sin θ = 24/25, tan θ = (24/25)/(7/25) = 24/7"
      }
    ]
  }
};