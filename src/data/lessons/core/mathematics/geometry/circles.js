// Location: src/data/lessons/core/mathematics/geometry/circles.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_circles",
  subject: "Mathematics",
  topic: "Geometry",
  name: "Circles",
  icon: "⭕",
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
      description: "Define a circle and identify its parts",
      indicator: "Student can explain what a circle is and identify center, radius, diameter, circumference"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate circumference and area of a circle",
      indicator: "Student can use C = 2πr and A = πr²"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify diameter as twice the radius",
      indicator: "Student can calculate d = 2r"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply circle properties involving chords, tangents, and sectors",
      indicator: "Student can solve problems with sectors and tangents"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate arc length and sector area",
      indicator: "Student can use arc length = θ/360 × 2πr and sector area = θ/360 × πr²"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply circle theorems (angles in a semicircle, tangent-radius property)",
      indicator: "Student can solve problems using circle theorems"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Prove and apply angle properties in a circle",
      indicator: "Student can use angles in same segment, cyclic quadrilateral properties"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve complex circle geometry problems",
      indicator: "Student can solve multi-step circle problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply circle theorems to real-world problems",
      indicator: "Student can solve practical problems involving circles"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Circles - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering circle parts, circumference, area, sectors, and circle theorems."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Circle?</h2>
      <p>A <strong>circle</strong> is a set of points equidistant from a fixed point called the <strong>center</strong>.</p>
      <p>The distance from the center to any point on the circle is the <strong>radius (r)</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Circle",
        objective: "obj_001",
        text: `
          <h3>Key Parts</h3>
          <ul>
            <li><strong>Center:</strong> The fixed point equidistant from all points</li>
            <li><strong>Radius (r):</strong> Distance from center to circumference</li>
            <li><strong>Diameter (d):</strong> Distance across circle through center (d = 2r)</li>
            <li><strong>Circumference (C):</strong> The perimeter of the circle</li>
            <li><strong>Chord:</strong> Line segment joining two points on circle</li>
            <li><strong>Tangent:</strong> Line that touches circle at one point</li>
            <li><strong>Arc:</strong> Part of the circumference</li>
            <li><strong>Sector:</strong> Region bounded by two radii and an arc</li>
          </ul>
          <div class="example-box">
            <strong>📌 Example:</strong> If radius = 5cm, then diameter = 10cm
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Circumference of a Circle",
        objective: "obj_002",
        text: `
          <h3>Formula</h3>
          <p><strong>C = 2πr</strong> or <strong>C = πd</strong></p>
          <ul>
            <li>π ≈ 3.14159</li>
            <li>d = 2r</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Radius = 7cm
            <ul>
              <li>C = 2 × π × 7 = 14π ≈ 43.98cm</li>
              <li><strong>Answer:</strong> 14π cm</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Diameter = 10cm
            <ul>
              <li>C = π × 10 = 10π ≈ 31.42cm</li>
              <li><strong>Answer:</strong> 10π cm</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Area of a Circle",
        objective: "obj_002",
        text: `
          <h3>Formula</h3>
          <p><strong>A = πr²</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Radius = 5cm
            <ul>
              <li>A = π × 5² = 25π ≈ 78.54cm²</li>
              <li><strong>Answer:</strong> 25π cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Diameter = 12cm → r = 6cm
            <ul>
              <li>A = π × 6² = 36π ≈ 113.10cm²</li>
              <li><strong>Answer:</strong> 36π cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Diameter and Radius Relationship",
        objective: "obj_003",
        text: `
          <h3>Relationship</h3>
          <p><strong>d = 2r</strong> and <strong>r = d/2</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> If d = 14cm, find r
            <ul>
              <li>r = 14/2 = 7cm</li>
              <li><strong>Answer:</strong> 7cm</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> If r = 8cm, find d
            <ul>
              <li>d = 2 × 8 = 16cm</li>
              <li><strong>Answer:</strong> 16cm</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Arc Length and Sector Area",
        objective: "obj_005",
        text: `
          <h3>Arc Length</h3>
          <p><strong>Arc Length = θ/360° × 2πr</strong></p>
          <p>where θ is the angle in degrees</p>
          
          <h3>Sector Area</h3>
          <p><strong>Sector Area = θ/360° × πr²</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Radius = 6cm, angle = 60°
            <ul>
              <li>Arc Length = 60/360 × 2π × 6 = 1/6 × 12π = 2π cm</li>
              <li>Sector Area = 60/360 × π × 36 = 1/6 × 36π = 6π cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Circle Theorems (Basic)",
        objective: "obj_006",
        text: `
          <h3>Key Theorems</h3>
          <ul>
            <li><strong>Angle in a semicircle:</strong> Any angle subtended by a diameter is 90°</li>
            <li><strong>Tangent-radius property:</strong> A tangent is perpendicular to the radius at the point of contact</li>
            <li><strong>Equal chords:</strong> Equal chords are equidistant from the center</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> In a circle with diameter AB, ∠ACB = 90° (angle in a semicircle)
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Angle Properties in Circles",
        objective: "obj_007",
        text: `
          <h3>Key Theorems</h3>
          <ul>
            <li><strong>Angles in the same segment:</strong> Equal</li>
            <li><strong>Cyclic quadrilateral:</strong> Opposite angles sum to 180°</li>
            <li><strong>Angle at center:</strong> Twice the angle at the circumference (subtended by same arc)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> If ∠ABC = 50°, then ∠AOC = 100° (angle at center = 2 × angle at circumference)
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Circle Problems",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In a circle, AB is a diameter. ∠ABC = 30°. Find ∠ACB.
            <ul>
              <li>AB is diameter → ∠ACB = 90° (angle in semicircle)</li>
              <li><strong>Answer:</strong> 90°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> In a cyclic quadrilateral, ∠A = 70°, ∠C = 110° (opposite angles sum to 180°)
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Real-World Applications",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> A wheel with radius 0.5m rotates. How far does it travel in one revolution?
            <ul>
              <li>Distance = circumference = 2πr = 2 × π × 0.5 = π ≈ 3.14m</li>
              <li><strong>Answer:</strong> ≈ 3.14m</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> A circular garden has radius 7m. How much fencing is needed (circumference)?
            <ul>
              <li>C = 2 × π × 7 = 14π ≈ 43.98m</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Circle: set of points equidistant from center</li>
        <li>Radius (r), Diameter (d = 2r), Circumference (C = 2πr)</li>
        <li>Area: A = πr²</li>
        <li>Arc length = θ/360 × 2πr</li>
        <li>Sector area = θ/360 × πr²</li>
        <li>Angle in a semicircle = 90°</li>
        <li>Tangent perpendicular to radius</li>
        <li>Opposite angles in cyclic quadrilateral sum to 180°</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Circle", definition: "A set of points equidistant from a center." },
    { term: "Radius", definition: "Distance from center to circumference." },
    { term: "Diameter", definition: "Distance across circle through center (d = 2r)." },
    { term: "Circumference", definition: "Perimeter of the circle." },
    { term: "Chord", definition: "Line segment joining two points on a circle." },
    { term: "Tangent", definition: "Line touching circle at one point." },
    { term: "Arc", definition: "Part of the circumference." },
    { term: "Sector", definition: "Region bounded by two radii and an arc." },
    { term: "Cyclic Quadrilateral", definition: "Quadrilateral with all vertices on a circle." }
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
      question: "What is the distance from the center to any point on a circle called?",
      type: "multiple_choice",
      options: ["Diameter", "Radius", "Circumference", "Chord"],
      answer: "Radius",
      explanation: "The radius is the distance from the center to any point on the circle."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "If radius = 8cm, what is the diameter?",
      type: "multiple_choice",
      options: ["4cm", "8cm", "12cm", "16cm"],
      answer: "16cm",
      explanation: "d = 2r = 2 × 8 = 16cm"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find circumference of a circle with radius 7cm (use π = 22/7)",
      type: "multiple_choice",
      options: ["22cm", "44cm", "66cm", "88cm"],
      answer: "44cm",
      explanation: "C = 2πr = 2 × 22/7 × 7 = 44cm"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find area of a circle with radius 7cm (use π = 22/7)",
      type: "multiple_choice",
      options: ["154cm²", "44cm²", "88cm²", "308cm²"],
      answer: "154cm²",
      explanation: "A = πr² = 22/7 × 49 = 154cm²"
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find circumference of a circle with diameter 14cm (use π = 22/7)",
      type: "multiple_choice",
      options: ["22cm", "44cm", "66cm", "88cm"],
      answer: "44cm",
      explanation: "C = πd = 22/7 × 14 = 44cm"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Find arc length of a sector with radius 6cm and angle 60° (use π = 3.14)",
      type: "multiple_choice",
      options: ["6.28cm", "12.56cm", "18.84cm", "25.12cm"],
      answer: "6.28cm",
      explanation: "Arc = θ/360 × 2πr = 60/360 × 2 × 3.14 × 6 = 1/6 × 37.68 = 6.28cm"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Find sector area with radius 6cm and angle 60° (use π = 3.14)",
      type: "multiple_choice",
      options: ["6.28cm²", "12.56cm²", "18.84cm²", "37.68cm²"],
      answer: "18.84cm²",
      explanation: "Sector = θ/360 × πr² = 60/360 × 3.14 × 36 = 1/6 × 113.04 = 18.84cm²"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "In a circle, AB is a diameter. What is ∠ACB?",
      type: "multiple_choice",
      options: ["45°", "60°", "90°", "180°"],
      answer: "90°",
      explanation: "Angle in a semicircle is always 90°."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "If a tangent touches a circle at point P, what is the angle between the tangent and the radius OP?",
      type: "multiple_choice",
      options: ["45°", "60°", "90°", "180°"],
      answer: "90°",
      explanation: "The tangent is perpendicular to the radius at the point of contact."
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "medium",
      question: "If a chord is 8cm from the center and the radius is 10cm, what is the length of the chord?",
      type: "multiple_choice",
      options: ["6cm", "8cm", "10cm", "12cm"],
      answer: "12cm",
      explanation: "Half chord = √(10² - 8²) = √36 = 6, so full chord = 12cm"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "In a cyclic quadrilateral, ∠A = 70°, ∠B = 110°, ∠C = 80°. Find ∠D.",
      type: "multiple_choice",
      options: ["70°", "80°", "100°", "110°"],
      answer: "100°",
      explanation: "Opposite angles sum to 180°: ∠C + ∠D = 180° → 80° + ∠D = 180° → ∠D = 100°"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "If ∠ABC = 50°, what is ∠AOC (center angle)?",
      type: "multiple_choice",
      options: ["25°", "50°", "100°", "200°"],
      answer: "100°",
      explanation: "Angle at center = 2 × angle at circumference = 2 × 50° = 100°"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "In a circle with diameter 20cm, find the area of a sector with angle 90°.",
      type: "multiple_choice",
      options: ["25π", "50π", "100π", "200π"],
      answer: "25π",
      explanation: "r = 10, sector = 90/360 × π × 100 = 1/4 × 100π = 25π"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "A bicycle wheel has radius 35cm. How far does it travel in 100 revolutions?",
      type: "multiple_choice",
      options: ["220m", "22000cm", "22000mm", "2200cm"],
      answer: "22000cm",
      explanation: "C = 2πr = 2 × 22/7 × 35 = 220cm. Distance = 220 × 100 = 22000cm"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "In a circle, ∠ABC = 40° and ∠ACB = 70°. Find ∠BAC.",
      type: "multiple_choice",
      options: ["40°", "70°", "80°", "90°"],
      answer: "70°",
      explanation: "∠BAC = 180° - 40° - 70° = 70°"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_circles",
    title: "Circles Quiz",
    description: "Test your understanding of circles",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the radius of a circle with diameter 24cm?",
        type: "short_answer",
        answer_key: "12cm",
        explanation: "r = d/2 = 24/2 = 12cm"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Find circumference of a circle with radius 14cm (π = 22/7)",
        type: "short_answer",
        answer_key: "88cm",
        explanation: "C = 2 × 22/7 × 14 = 88cm"
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "Find area of a circle with radius 14cm (π = 22/7)",
        type: "short_answer",
        answer_key: "616cm²",
        explanation: "A = 22/7 × 196 = 616cm²"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "Arc length of sector with radius 10cm, angle 72° (π = 3.14)",
        type: "short_answer",
        answer_key: "12.56cm",
        explanation: "72/360 × 2 × 3.14 × 10 = 12.56cm"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Sector area with radius 10cm, angle 72° (π = 3.14)",
        type: "short_answer",
        answer_key: "62.8cm²",
        explanation: "72/360 × 3.14 × 100 = 62.8cm²"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Angle in a semicircle is always what?",
        type: "short_answer",
        answer_key: "90°",
        explanation: "The angle in a semicircle is always 90°."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the angle between a tangent and the radius at the point of contact?",
        type: "short_answer",
        answer_key: "90°",
        explanation: "Tangent is perpendicular to the radius at the point of contact."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "In a cyclic quadrilateral, ∠A = 80°, ∠C = 100°, ∠B = 70°. Find ∠D.",
        type: "short_answer",
        answer_key: "110°",
        explanation: "Opposite angles sum to 180°: ∠B + ∠D = 180° → 70° + ∠D = 180° → ∠D = 110°"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "If angle at circumference is 35°, what is angle at center?",
        type: "short_answer",
        answer_key: "70°",
        explanation: "Angle at center = 2 × angle at circumference = 70°"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A wheel with radius 0.5m makes 100 revolutions. How far does it travel?",
        type: "short_answer",
        answer_key: "314m",
        explanation: "C = 2π × 0.5 = π ≈ 3.14m. Distance = 3.14 × 100 = 314m"
      }
    ]
  }
};