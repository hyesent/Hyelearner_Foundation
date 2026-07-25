// Location: src/data/lessons/core/mathematics/geometry/polygons.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_polygons",
  subject: "Mathematics",
  topic: "Geometry",
  name: "Polygons",
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
      description: "Define a polygon and identify its parts",
      indicator: "Student can explain what a polygon is and identify vertices, sides, and angles"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Classify polygons by number of sides",
      indicator: "Student can identify triangles, quadrilaterals, pentagons, hexagons, etc."
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between regular and irregular polygons",
      indicator: "Student can identify if a polygon is regular or irregular"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate the sum of interior angles of a polygon",
      indicator: "Student can use formula S = (n-2) × 180°"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate the measure of each interior angle of a regular polygon",
      indicator: "Student can use formula each angle = (n-2) × 180° / n"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate the sum of exterior angles of a polygon",
      indicator: "Student can use formula sum of exterior angles = 360°"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Calculate each exterior angle of a regular polygon",
      indicator: "Student can use formula each exterior angle = 360°/n"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve complex polygon problems involving multiple properties",
      indicator: "Student can solve multi-step polygon problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply polygon properties to real-world problems",
      indicator: "Student can solve practical problems involving polygons"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Polygons - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering polygon types, interior and exterior angles, and regular polygons."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Polygon?</h2>
      <p>A <strong>polygon</strong> is a closed figure with <strong>straight sides</strong>.</p>
      <p>The word polygon means "many angles".</p>
      <p>A polygon is named by the number of sides it has.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Polygon",
        objective: "obj_001",
        text: `
          <h3>Key Parts</h3>
          <ul>
            <li><strong>Sides:</strong> The straight line segments</li>
            <li><strong>Vertices:</strong> The corner points (plural of vertex)</li>
            <li><strong>Interior Angles:</strong> The angles inside the polygon</li>
            <li><strong>Exterior Angles:</strong> The angles outside the polygon</li>
            <li><strong>Diagonals:</strong> Lines connecting non-adjacent vertices</li>
          </ul>
          <div class="example-box">
            <strong>📌 Example:</strong> A pentagon has 5 sides, 5 vertices, and 5 angles
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Classification by Sides",
        objective: "obj_002",
        text: `
          <h3>Polygon Names</h3>
          <ul>
            <li><strong>Triangle:</strong> 3 sides</li>
            <li><strong>Quadrilateral:</strong> 4 sides</li>
            <li><strong>Pentagon:</strong> 5 sides</li>
            <li><strong>Hexagon:</strong> 6 sides</li>
            <li><strong>Heptagon:</strong> 7 sides</li>
            <li><strong>Octagon:</strong> 8 sides</li>
            <li><strong>Nonagon:</strong> 9 sides</li>
            <li><strong>Decagon:</strong> 10 sides</li>
            <li><strong>Dodecagon:</strong> 12 sides</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A stop sign is a regular octagon (8 sides)
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Regular vs Irregular Polygons",
        objective: "obj_003",
        text: `
          <h3>Regular Polygon</h3>
          <ul>
            <li>All sides are equal</li>
            <li>All interior angles are equal</li>
          </ul>
          
          <h3>Irregular Polygon</h3>
          <ul>
            <li>Sides are not all equal</li>
            <li>Angles are not all equal</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>Regular: Square, Equilateral Triangle, Regular Pentagon</li>
              <li>Irregular: Rectangle (not all sides equal), Scalene Triangle</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Sum of Interior Angles",
        objective: "obj_004",
        text: `
          <h3>Formula</h3>
          <p><strong>S = (n-2) × 180°</strong></p>
          <p>where n = number of sides</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Pentagon (n = 5)
            <ul>
              <li>S = (5-2) × 180° = 3 × 180° = 540°</li>
              <li><strong>Answer:</strong> 540°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Hexagon (n = 6)
            <ul>
              <li>S = (6-2) × 180° = 4 × 180° = 720°</li>
              <li><strong>Answer:</strong> 720°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> Octagon (n = 8)
            <ul>
              <li>S = (8-2) × 180° = 6 × 180° = 1080°</li>
              <li><strong>Answer:</strong> 1080°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Each Interior Angle of a Regular Polygon",
        objective: "obj_005",
        text: `
          <h3>Formula</h3>
          <p><strong>Each angle = (n-2) × 180° / n</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Regular Pentagon (n = 5)
            <ul>
              <li>Each angle = (5-2) × 180° / 5 = 3 × 180° / 5 = 540°/5 = 108°</li>
              <li><strong>Answer:</strong> 108°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Regular Hexagon (n = 6)
            <ul>
              <li>Each angle = (6-2) × 180° / 6 = 4 × 180° / 6 = 720°/6 = 120°</li>
              <li><strong>Answer:</strong> 120°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> Square (n = 4)
            <ul>
              <li>Each angle = (4-2) × 180° / 4 = 2 × 180° / 4 = 360°/4 = 90°</li>
              <li><strong>Answer:</strong> 90°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sum of Exterior Angles",
        objective: "obj_006",
        text: `
          <h3>Key Property</h3>
          <p><strong>Sum of exterior angles = 360°</strong></p>
          <p>This is true for <strong>all</strong> polygons!</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A pentagon has exterior angles summing to 360°
            <ul>
              <li>If each exterior angle = 72°, then 5 × 72° = 360°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Each Exterior Angle of a Regular Polygon",
        objective: "obj_007",
        text: `
          <h3>Formula</h3>
          <p><strong>Each exterior angle = 360° / n</strong></p>
          <p><strong>Interior angle + exterior angle = 180°</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Regular Pentagon (n = 5)
            <ul>
              <li>Each exterior angle = 360° / 5 = 72°</li>
              <li>Each interior angle = 180° - 72° = 108°</li>
              <li><strong>Answer:</strong> 72°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Regular Hexagon (n = 6)
            <ul>
              <li>Each exterior angle = 360° / 6 = 60°</li>
              <li>Each interior angle = 180° - 60° = 120°</li>
              <li><strong>Answer:</strong> 60°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Polygon Problems",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> In a quadrilateral, angles are 90°, 100°, 120°, and x. Find x.
            <ul>
              <li>Sum of interior angles = (4-2) × 180° = 360°</li>
              <li>90° + 100° + 120° + x = 360°</li>
              <li>310° + x = 360°</li>
              <li>x = 50°</li>
              <li><strong>Answer:</strong> 50°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Find the number of sides of a regular polygon with each exterior angle = 36°.
            <ul>
              <li>n = 360° / 36° = 10</li>
              <li><strong>Answer:</strong> Decagon (10 sides)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Real-World Applications",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> A tile floor uses regular hexagons. What is each interior angle?
            <ul>
              <li>n = 6</li>
              <li>Each interior angle = (6-2) × 180° / 6 = 720°/6 = 120°</li>
              <li><strong>Answer:</strong> 120°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> A soccer ball is made of pentagons and hexagons.
            <ul>
              <li>A regular pentagon has interior angle = 108°</li>
              <li>A regular hexagon has interior angle = 120°</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Polygon: closed figure with straight sides</li>
        <li>Named by number of sides: triangle (3), quadrilateral (4), pentagon (5), etc.</li>
        <li>Regular: all sides and angles equal</li>
        <li>Sum of interior angles: (n-2) × 180°</li>
        <li>Each interior angle (regular): (n-2) × 180° / n</li>
        <li>Sum of exterior angles: 360°</li>
        <li>Each exterior angle (regular): 360° / n</li>
        <li>Interior + exterior = 180°</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Polygon", definition: "A closed figure with straight sides." },
    { term: "Vertex", definition: "A corner point of a polygon." },
    { term: "Regular Polygon", definition: "All sides and angles equal." },
    { term: "Irregular Polygon", definition: "Sides and angles not all equal." },
    { term: "Interior Angle", definition: "The angle inside a polygon." },
    { term: "Exterior Angle", definition: "The angle between a side and the extended adjacent side." },
    { term: "Diagonal", definition: "A line connecting non-adjacent vertices." },
    { term: "Pentagon", definition: "A polygon with 5 sides." },
    { term: "Hexagon", definition: "A polygon with 6 sides." },
    { term: "Octagon", definition: "A polygon with 8 sides." }
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
      question: "How many sides does a pentagon have?",
      type: "multiple_choice",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "A pentagon has 5 sides."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What polygon has 6 sides?",
      type: "multiple_choice",
      options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
      answer: "Hexagon",
      explanation: "A hexagon has 6 sides."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What polygon has 8 sides?",
      type: "multiple_choice",
      options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
      answer: "Octagon",
      explanation: "An octagon has 8 sides."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a regular polygon?",
      type: "multiple_choice",
      options: ["Rectangle", "Square", "Scalene Triangle", "Parallelogram"],
      answer: "Square",
      explanation: "A square has all sides and angles equal."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "easy",
      question: "Sum of interior angles of a quadrilateral?",
      type: "multiple_choice",
      options: ["180°", "270°", "360°", "540°"],
      answer: "360°",
      explanation: "(4-2) × 180° = 2 × 180° = 360°"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Sum of interior angles of a hexagon?",
      type: "multiple_choice",
      options: ["360°", "540°", "720°", "900°"],
      answer: "720°",
      explanation: "(6-2) × 180° = 4 × 180° = 720°"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Each interior angle of a regular pentagon?",
      type: "multiple_choice",
      options: ["90°", "108°", "120°", "135°"],
      answer: "108°",
      explanation: "(5-2) × 180° / 5 = 540°/5 = 108°"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Sum of exterior angles of any polygon?",
      type: "multiple_choice",
      options: ["180°", "270°", "360°", "540°"],
      answer: "360°",
      explanation: "Sum of exterior angles = 360° for all polygons."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Each exterior angle of a regular hexagon?",
      type: "multiple_choice",
      options: ["45°", "60°", "72°", "90°"],
      answer: "60°",
      explanation: "360° / 6 = 60°"
    },
    {
      id: "prac_010",
      objective: "obj_005",
      difficulty: "medium",
      question: "Each interior angle of a regular octagon?",
      type: "multiple_choice",
      options: ["90°", "108°", "120°", "135°"],
      answer: "135°",
      explanation: "(8-2) × 180° / 8 = 1080°/8 = 135°"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "In a quadrilateral, angles are 80°, 100°, 120°, and x. Find x.",
      type: "multiple_choice",
      options: ["40°", "50°", "60°", "70°"],
      answer: "60°",
      explanation: "Sum = 360° → 80° + 100° + 120° + x = 360° → 300° + x = 360° → x = 60°"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A regular polygon has each interior angle = 150°. How many sides?",
      type: "multiple_choice",
      options: ["8", "10", "12", "15"],
      answer: "12",
      explanation: "Each interior = (n-2) × 180° / n → 150° = (n-2) × 180° / n → 150n = 180n - 360 → 30n = 360 → n = 12"
    },
    {
      id: "prac_013",
      objective: "obj_007",
      difficulty: "hard",
      question: "A regular polygon has each exterior angle = 30°. How many sides?",
      type: "multiple_choice",
      options: ["6", "8", "10", "12"],
      answer: "12",
      explanation: "n = 360° / 30° = 12"
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "In a pentagon, angles are 100°, 110°, 120°, 130°, and x. Find x.",
      type: "multiple_choice",
      options: ["70°", "80°", "90°", "100°"],
      answer: "80°",
      explanation: "Sum = 540° → 100° + 110° + 120° + 130° + x = 540° → 460° + x = 540° → x = 80°"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "A regular polygon has 20 sides. What is each interior angle?",
      type: "multiple_choice",
      options: ["162°", "168°", "170°", "174°"],
      answer: "162°",
      explanation: "(20-2) × 180° / 20 = 18 × 180° / 20 = 3240°/20 = 162°"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_polygons",
    title: "Polygons Quiz",
    description: "Test your understanding of polygons",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many sides does a hexagon have?",
        type: "short_answer",
        answer_key: "6",
        explanation: "A hexagon has 6 sides."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What polygon has 10 sides?",
        type: "short_answer",
        answer_key: "Decagon",
        explanation: "A decagon has 10 sides."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Is a square regular or irregular?",
        type: "short_answer",
        answer_key: "Regular",
        explanation: "A square has all sides and angles equal."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "Sum of interior angles of a pentagon?",
        type: "short_answer",
        answer_key: "540°",
        explanation: "(5-2) × 180° = 3 × 180° = 540°"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Each interior angle of a regular hexagon?",
        type: "short_answer",
        answer_key: "120°",
        explanation: "(6-2) × 180° / 6 = 720°/6 = 120°"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Sum of exterior angles of an octagon?",
        type: "short_answer",
        answer_key: "360°",
        explanation: "Sum of exterior angles = 360° for all polygons."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Each exterior angle of a regular pentagon?",
        type: "short_answer",
        answer_key: "72°",
        explanation: "360° / 5 = 72°"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "In a quadrilateral, angles are 70°, 110°, 130°, and x. Find x.",
        type: "short_answer",
        answer_key: "50°",
        explanation: "70° + 110° + 130° + x = 360° → 310° + x = 360° → x = 50°"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "A regular polygon has each interior angle = 140°. How many sides?",
        type: "short_answer",
        answer_key: "9",
        explanation: "(n-2) × 180° / n = 140° → 180n - 360 = 140n → 40n = 360 → n = 9"
      },
      {
        id: "ass_010",
        objective: "obj_007",
        difficulty: "hard",
        question: "A regular polygon has each exterior angle = 24°. How many sides?",
        type: "short_answer",
        answer_key: "15",
        explanation: "n = 360° / 24° = 15"
      }
    ]
  }
};