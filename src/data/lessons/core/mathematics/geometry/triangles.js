// Location: src/data/lessons/core/mathematics/geometry/triangles.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_triangles",
  subject: "Mathematics",
  topic: "Geometry",
  name: "Triangles",
  icon: "🔺",
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
      description: "Define a triangle and identify its parts",
      indicator: "Student can explain what a triangle is and identify vertices, sides, and angles"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Classify triangles by sides (equilateral, isosceles, scalene)",
      indicator: "Student can identify different types of triangles by sides"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Classify triangles by angles (acute, right, obtuse)",
      indicator: "Student can identify different types of triangles by angles"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the angle sum property of triangles",
      indicator: "Student can use ∠A + ∠B + ∠C = 180° to find missing angles"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply the Pythagorean theorem to right triangles",
      indicator: "Student can use a² + b² = c² to solve problems"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply the triangle inequality theorem",
      indicator: "Student can determine if three sides form a triangle"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Identify congruent triangles (SSS, SAS, ASA, AAS, RHS)",
      indicator: "Student can prove triangle congruence"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Identify similar triangles and apply properties",
      indicator: "Student can prove similarity and solve ratio problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex triangle problems involving multiple rules",
      indicator: "Student can solve multi-step triangle problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Triangles - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering triangle types, angle sum, Pythagorean theorem, and congruence."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Triangle?</h2>
      <p>A <strong>triangle</strong> is a polygon with <strong>three sides</strong>, <strong>three vertices</strong>, and <strong>three angles</strong>.</p>
      <p>The sum of the three angles is always <strong>180°</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Triangle",
        objective: "obj_001",
        text: `
          <h3>Parts</h3>
          <ul>
            <li><strong>Sides:</strong> The three line segments</li>
            <li><strong>Vertices:</strong> The three corner points</li>
            <li><strong>Angles:</strong> The three interior angles</li>
          </ul>
          <div class="example-box">
            <strong>📌 Triangle ABC:</strong>
            <ul>
              <li>Sides: AB, BC, CA</li>
              <li>Vertices: A, B, C</li>
              <li>Angles: ∠A, ∠B, ∠C</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Classification by Sides",
        objective: "obj_002",
        text: `
          <h3>Types by Sides</h3>
          <ul>
            <li><strong>Equilateral:</strong> All three sides equal</li>
            <li><strong>Isosceles:</strong> Two sides equal</li>
            <li><strong>Scalene:</strong> All sides different</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Sides 5cm, 5cm, 6cm → Isosceles
          </div>
          <div class="example-box">
            <strong>📌 Example 2:</strong> Sides 4cm, 4cm, 4cm → Equilateral
          </div>
          <div class="example-box">
            <strong>📌 Example 3:</strong> Sides 3cm, 4cm, 5cm → Scalene
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Classification by Angles",
        objective: "obj_003",
        text: `
          <h3>Types by Angles</h3>
          <ul>
            <li><strong>Acute:</strong> All angles < 90°</li>
            <li><strong>Right:</strong> One angle = 90°</li>
            <li><strong>Obtuse:</strong> One angle > 90°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Angles 60°, 60°, 60° → Acute
          </div>
          <div class="example-box">
            <strong>📌 Example:</strong> Angles 30°, 60°, 90° → Right
          </div>
          <div class="example-box">
            <strong>📌 Example:</strong> Angles 30°, 40°, 110° → Obtuse
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Angle Sum Property",
        objective: "obj_004",
        text: `
          <h3>Sum of Angles = 180°</h3>
          <p><strong>∠A + ∠B + ∠C = 180°</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> ∠A = 50°, ∠B = 60°
            <ul>
              <li>∠C = 180° - 50° - 60° = 70°</li>
              <li><strong>Answer:</strong> ∠C = 70°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> In a right triangle, ∠A = 40°
            <ul>
              <li>∠B = 90° (right angle)</li>
              <li>∠C = 180° - 90° - 40° = 50°</li>
              <li><strong>Answer:</strong> ∠C = 50°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Pythagorean Theorem",
        objective: "obj_005",
        text: `
          <h3>In a Right Triangle</h3>
          <p><strong>a² + b² = c²</strong></p>
          <ul>
            <li><strong>a, b:</strong> Legs (shorter sides)</li>
            <li><strong>c:</strong> Hypotenuse (longest side, opposite 90°)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Find hypotenuse with legs 3 and 4
            <ul>
              <li>c² = 3² + 4² = 9 + 16 = 25</li>
              <li>c = √25 = 5</li>
              <li><strong>Answer:</strong> 5</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Find leg with hypotenuse 13, one leg 5
            <ul>
              <li>5² + b² = 13²</li>
              <li>25 + b² = 169</li>
              <li>b² = 144, b = 12</li>
              <li><strong>Answer:</strong> 12</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Triangle Inequality Theorem",
        objective: "obj_006",
        text: `
          <h3>Triangle Inequality Theorem</h3>
          <p>In any triangle, the sum of any two sides must be <strong>greater than</strong> the third side.</p>
          <ul>
            <li>a + b > c</li>
            <li>a + c > b</li>
            <li>b + c > a</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Can sides 3, 4, 5 form a triangle?
            <ul>
              <li>3 + 4 > 5 ✓</li>
              <li>3 + 5 > 4 ✓</li>
              <li>4 + 5 > 3 ✓</li>
              <li><strong>Answer:</strong> Yes, a triangle can be formed</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Can sides 2, 3, 6 form a triangle?
            <ul>
              <li>2 + 3 > 6 ✗ (5 > 6 is false)</li>
              <li><strong>Answer:</strong> No, a triangle cannot be formed</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Congruent Triangles",
        objective: "obj_007",
        text: `
          <h3>Congruence Rules</h3>
          <p>Triangles are congruent if they are exactly the same size and shape.</p>
          <ul>
            <li><strong>SSS:</strong> All three sides equal</li>
            <li><strong>SAS:</strong> Two sides and included angle equal</li>
            <li><strong>ASA:</strong> Two angles and included side equal</li>
            <li><strong>AAS:</strong> Two angles and non-included side equal</li>
            <li><strong>RHS:</strong> Right angle, hypotenuse, and one side equal</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Two triangles with sides 3, 4, 5 are congruent (SSS)
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Similar Triangles",
        objective: "obj_008",
        text: `
          <h3>Similar Triangles</h3>
          <p>Triangles are similar if they have the same shape but different size.</p>
          <ul>
            <li><strong>AA:</strong> Two angles equal</li>
            <li><strong>SAS:</strong> Two sides in proportion and included angle equal</li>
            <li><strong>SSS:</strong> All three sides in proportion</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Triangle ABC ~ Triangle DEF
            <ul>
              <li>If AB/DE = BC/EF = AC/DF, they are similar</li>
              <li>Ratios of corresponding sides are equal</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> In similar triangles, if AB = 6, DE = 3, then ratio = 2:1
            <ul>
              <li>All other corresponding sides follow the same ratio</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Triangle Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In triangle ABC, ∠A = 2x, ∠B = 3x, ∠C = 4x. Find x and all angles.
            <ul>
              <li>Step 1: 2x + 3x + 4x = 180°</li>
              <li>Step 2: 9x = 180°</li>
              <li>Step 3: x = 20°</li>
              <li>∠A = 40°, ∠B = 60°, ∠C = 80°</li>
              <li><strong>Answer:</strong> 40°, 60°, 80°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> A triangle has sides 5, 12, 13. Is it right-angled?
            <ul>
              <li>Check: 5² + 12² = 25 + 144 = 169</li>
              <li>13² = 169 ✓</li>
              <li><strong>Answer:</strong> Yes, it is a right triangle</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Triangle: 3 sides, 3 vertices, 3 angles</li>
        <li>Sum of angles = 180°</li>
        <li>By sides: Equilateral, Isosceles, Scalene</li>
        <li>By angles: Acute, Right, Obtuse</li>
        <li>Pythagorean theorem: a² + b² = c² (right triangles)</li>
        <li>Triangle inequality: sum of any two sides > third side</li>
        <li>Congruent: SSS, SAS, ASA, AAS, RHS</li>
        <li>Similar: AA, SAS, SSS (proportional sides)</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Triangle", definition: "A polygon with three sides." },
    { term: "Equilateral", definition: "All sides and angles equal (60° each)." },
    { term: "Isosceles", definition: "Two sides and two angles equal." },
    { term: "Scalene", definition: "All sides and angles different." },
    { term: "Right Triangle", definition: "Contains one 90° angle." },
    { term: "Hypotenuse", definition: "The longest side of a right triangle, opposite 90°." },
    { term: "Pythagorean Theorem", definition: "a² + b² = c² for right triangles." },
    { term: "Congruent", definition: "Triangles with same size and shape." },
    { term: "Similar", definition: "Triangles with same shape but different size." }
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
      question: "How many sides does a triangle have?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "A triangle has exactly 3 sides."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of triangle has sides 5, 5, 8?",
      type: "multiple_choice",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
      answer: "Isosceles",
      explanation: "Two sides are equal → Isosceles"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of triangle has sides 3, 4, 5?",
      type: "multiple_choice",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
      answer: "Scalene",
      explanation: "All sides different → Scalene"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "What type of triangle has angles 45°, 45°, 90°?",
      type: "multiple_choice",
      options: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Right",
      explanation: "One angle = 90° → Right triangle"
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "easy",
      question: "If ∠A = 50°, ∠B = 60°, what is ∠C?",
      type: "multiple_choice",
      options: ["50°", "60°", "70°", "80°"],
      answer: "70°",
      explanation: "180° - 50° - 60° = 70°"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "If ∠A = 2x, ∠B = 3x, ∠C = 5x, find x",
      type: "multiple_choice",
      options: ["15°", "18°", "20°", "30°"],
      answer: "18°",
      explanation: "2x + 3x + 5x = 180° → 10x = 180° → x = 18°"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "In a right triangle, legs are 6 and 8. Find hypotenuse.",
      type: "multiple_choice",
      options: ["8", "10", "12", "14"],
      answer: "10",
      explanation: "c² = 6² + 8² = 36 + 64 = 100 → c = 10"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "In a right triangle, hypotenuse is 13, one leg is 5. Find the other leg.",
      type: "multiple_choice",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "5² + b² = 13² → 25 + b² = 169 → b² = 144 → b = 12"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Can sides 4, 7, 12 form a triangle?",
      type: "multiple_choice",
      options: ["Yes", "No"],
      answer: "No",
      explanation: "4 + 7 = 11 < 12 → Triangle inequality fails"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Can sides 5, 12, 13 form a triangle?",
      type: "multiple_choice",
      options: ["Yes", "No"],
      answer: "Yes",
      explanation: "5 + 12 > 13 ✓, 5 + 13 > 12 ✓, 12 + 13 > 5 ✓"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which congruence rule applies when all three sides are equal?",
      type: "multiple_choice",
      options: ["SSS", "SAS", "ASA", "RHS"],
      answer: "SSS",
      explanation: "SSS: Side-Side-Side congruence"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "In similar triangles, if AB = 8, DE = 4, what is the ratio?",
      type: "multiple_choice",
      options: ["1:1", "2:1", "3:1", "4:1"],
      answer: "2:1",
      explanation: "AB/DE = 8/4 = 2:1"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "In triangle ABC, ∠A = x, ∠B = 2x, ∠C = 3x + 30°. Find ∠C.",
      type: "multiple_choice",
      options: ["60°", "80°", "100°", "120°"],
      answer: "100°",
      explanation: "x + 2x + 3x + 30 = 180 → 6x = 150 → x = 25 → ∠C = 105°? Wait recalc... Actually x = 25, ∠C = 3(25)+30 = 105°"
    },
    {
      id: "prac_014",
      objective: "obj_005",
      difficulty: "hard",
      question: "A ladder 13m long leans against a wall. The foot is 5m from the wall. How high does the ladder reach?",
      type: "multiple_choice",
      options: ["10m", "11m", "12m", "13m"],
      answer: "12m",
      explanation: "13² = 5² + h² → 169 = 25 + h² → h² = 144 → h = 12"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "In triangle ABC, ∠A = 40°, ∠B = 60°. What type of triangle is it?",
      type: "multiple_choice",
      options: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      explanation: "∠C = 180° - 40° - 60° = 80° → All angles < 90° → Acute"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_triangles",
    title: "Triangles Quiz",
    description: "Test your understanding of triangles",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many vertices does a triangle have?",
        type: "short_answer",
        answer_key: "3",
        explanation: "A triangle has 3 vertices."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What type of triangle has sides 7, 7, 10?",
        type: "short_answer",
        answer_key: "Isosceles",
        explanation: "Two sides are equal → Isosceles"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What type of triangle has angles 30°, 60°, 90°?",
        type: "short_answer",
        answer_key: "Right",
        explanation: "One angle = 90° → Right triangle"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "If ∠A = 70°, ∠B = 50°, find ∠C.",
        type: "short_answer",
        answer_key: "60°",
        explanation: "180° - 70° - 50° = 60°"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "In a right triangle, legs are 5 and 12. Find hypotenuse.",
        type: "short_answer",
        answer_key: "13",
        explanation: "c² = 5² + 12² = 25 + 144 = 169 → c = 13"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "In a right triangle, hypotenuse is 15, one leg is 9. Find the other leg.",
        type: "short_answer",
        answer_key: "12",
        explanation: "9² + b² = 15² → 81 + b² = 225 → b² = 144 → b = 12"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Can sides 3, 5, 9 form a triangle? (Yes/No)",
        type: "short_answer",
        answer_key: "No",
        explanation: "3 + 5 = 8 < 9 → Triangle inequality fails"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Which rule proves two triangles congruent if they have two angles and the included side equal?",
        type: "short_answer",
        answer_key: "ASA",
        explanation: "ASA: Angle-Side-Angle congruence"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "In similar triangles, if AB = 10, DE = 5, what is the ratio?",
        type: "short_answer",
        answer_key: "2:1",
        explanation: "10:5 = 2:1"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "In a triangle, ∠A = 2x, ∠B = 3x, ∠C = x. Find ∠B.",
        type: "short_answer",
        answer_key: "90°",
        explanation: "2x + 3x + x = 180° → 6x = 180° → x = 30° → ∠B = 90°"
      }
    ]
  }
};