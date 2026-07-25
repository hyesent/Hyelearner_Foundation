// Location: src/data/lessons/core/mathematics/geometry/angles.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_angles",
  subject: "Mathematics",
  topic: "Geometry",
  name: "Angles",
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
      description: "Define an angle and identify its parts",
      indicator: "Student can explain what an angle is and identify vertex, arms, and measure"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Classify angles by their measure (acute, right, obtuse, straight, reflex)",
      indicator: "Student can identify different types of angles"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify complementary and supplementary angles",
      indicator: "Student can identify and calculate complementary and supplementary angles"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply angle properties of intersecting lines (vertically opposite, corresponding, alternate)",
      indicator: "Student can solve problems using angle properties"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate angles in parallel lines with transversals",
      indicator: "Student can find missing angles in parallel line diagrams"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply angle sum properties in polygons",
      indicator: "Student can calculate the sum of interior and exterior angles"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex angle problems involving multiple rules",
      indicator: "Student can solve multi-step angle problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Prove angle relationships using logical reasoning",
      indicator: "Student can write geometric proofs involving angles"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply angles in real-world contexts and bearings",
      indicator: "Student can solve practical angle problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Angles - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering types of angles, angle properties, parallel lines, and polygons."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is an Angle?</h2>
      <p>An <strong>angle</strong> is formed by two rays (arms) meeting at a common point called the <strong>vertex</strong>.</p>
      <p>Angles are measured in <strong>degrees (°)</strong>.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of an Angle",
        objective: "obj_001",
        text: `
          <h3>Parts</h3>
          <ul>
            <li><strong>Vertex:</strong> The common endpoint where the two arms meet</li>
            <li><strong>Arms:</strong> The two rays that form the angle</li>
            <li><strong>Measure:</strong> The size of the angle in degrees</li>
          </ul>
          <div class="example-box">
            <strong>📌 Example:</strong> In angle ABC:
            <ul>
              <li>Vertex: B</li>
              <li>Arms: BA and BC</li>
              <li>Measure: Written as ∠ABC</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Angles",
        objective: "obj_002",
        text: `
          <h3>Angle Classifications</h3>
          <ul>
            <li><strong>Acute:</strong> 0° < angle < 90°</li>
            <li><strong>Right:</strong> angle = 90°</li>
            <li><strong>Obtuse:</strong> 90° < angle < 180°</li>
            <li><strong>Straight:</strong> angle = 180°</li>
            <li><strong>Reflex:</strong> 180° < angle < 360°</li>
            <li><strong>Full:</strong> angle = 360°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>30° → Acute</li>
              <li>90° → Right</li>
              <li>120° → Obtuse</li>
              <li>180° → Straight</li>
              <li>270° → Reflex</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Complementary and Supplementary Angles",
        objective: "obj_003",
        text: `
          <h3>Complementary Angles</h3>
          <p>Two angles that add up to <strong>90°</strong>.</p>
          <div class="example-box">
            <strong>📌 Example:</strong> 30° and 60° are complementary (30° + 60° = 90°)
          </div>
          
          <h3>Supplementary Angles</h3>
          <p>Two angles that add up to <strong>180°</strong>.</p>
          <div class="example-box">
            <strong>📌 Example:</strong> 110° and 70° are supplementary (110° + 70° = 180°)
          </div>
          
          <div class="example-box">
            <strong>📌 Finding Complementary:</strong> 45° → Complement = 90° - 45° = 45°
          </div>
          
          <div class="example-box">
            <strong>📌 Finding Supplementary:</strong> 120° → Supplement = 180° - 120° = 60°
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Intersecting Lines",
        objective: "obj_004",
        text: `
          <h3>Angle Properties</h3>
          <ul>
            <li><strong>Vertically Opposite Angles:</strong> Equal</li>
            <li><strong>Angles on a straight line:</strong> Sum to 180°</li>
            <li><strong>Angles around a point:</strong> Sum to 360°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Vertically opposite angles
            <ul>
              <li>If ∠1 = 50°, then ∠3 = 50° (vertically opposite)</li>
              <li>∠1 + ∠2 = 180° (straight line)</li>
              <li>∠2 = 130°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Angles around a point
            <ul>
              <li>Angles around a point sum to 360°</li>
              <li>If one angle is 80°, the others sum to 280°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Parallel Lines and Transversals",
        objective: "obj_005",
        text: `
          <h3>Angle Relationships</h3>
          <ul>
            <li><strong>Corresponding angles:</strong> Equal</li>
            <li><strong>Alternate interior angles:</strong> Equal</li>
            <li><strong>Co-interior angles:</strong> Sum to 180°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find x
            <ul>
              <li>Given: x + 40° on a straight line with 40°</li>
              <li>Corresponding angles: x = 40°</li>
              <li>OR: Alternate interior: x = 40°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find the missing angle
            <ul>
              <li>Given a transversal crossing parallel lines</li>
              <li>Co-interior angles sum to 180°</li>
              <li>If one angle is 70°, the other is 180° - 70° = 110°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Angles in Polygons",
        objective: "obj_006",
        text: `
          <h3>Interior Angle Sum</h3>
          <p><strong>Sum of interior angles = (n-2) × 180°</strong></p>
          <p>where n = number of sides</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Triangle (n=3)
            <ul>
              <li>Sum = (3-2) × 180° = 1 × 180° = 180°</li>
              <li>Each angle in an equilateral triangle = 60°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Quadrilateral (n=4)
            <ul>
              <li>Sum = (4-2) × 180° = 2 × 180° = 360°</li>
            </ul>
          </div>
          
          <h3>Exterior Angles</h3>
          <p><strong>Sum of exterior angles = 360°</strong></p>
          <p>Each exterior angle = 360°/n</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Pentagon (n=5)
            <ul>
              <li>Each exterior angle = 360°/5 = 72°</li>
              <li>Each interior angle = 180° - 72° = 108°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Complex Angle Problems",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Find all angles in a triangle with two parallel lines
            <ul>
              <li>Triangle ABC with DE ∥ BC</li>
              <li>∠A = 50°, ∠B = 70°</li>
              <li>Step 1: ∠C = 180° - 50° - 70° = 60°</li>
              <li>Step 2: Corresponding angles give the rest</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Geometric Proofs",
        objective: "obj_008",
        text: `
          <h3>Writing Proofs</h3>
          <p>A proof shows step-by-step reasoning.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Prove that vertically opposite angles are equal
            <ul>
              <li>Statement 1: ∠1 + ∠2 = 180° (straight line)</li>
              <li>Statement 2: ∠2 + ∠3 = 180° (straight line)</li>
              <li>Statement 3: ∠1 + ∠2 = ∠2 + ∠3 (both = 180°)</li>
              <li>Statement 4: ∠1 = ∠3 (subtract ∠2 from both sides)</li>
              <li>Therefore, vertically opposite angles are equal.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Angles in Real-World Contexts",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example 1 (Bearings):</strong> A ship sails on a bearing of 045°.
            <ul>
              <li>Bearing is measured clockwise from North</li>
              <li>045° = 45° from North</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2 (Angles of Elevation):</strong>
            <ul>
              <li>Angle of elevation from the ground to the top of a building</li>
              <li>If a 10m building casts a 10m shadow, angle = 45°</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Angles are measured in degrees (°)</li>
        <li>Types: Acute, Right, Obtuse, Straight, Reflex</li>
        <li>Complementary angles sum to 90°, Supplementary sum to 180°</li>
        <li>Vertically opposite angles are equal</li>
        <li>Parallel lines: Corresponding =, Alternate =, Co-interior sum to 180°</li>
        <li>Polygon interior sum: (n-2) × 180°</li>
        <li>Exterior angles sum to 360°</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Angle", definition: "The space between two intersecting lines." },
    { term: "Vertex", definition: "The common point where two arms meet." },
    { term: "Acute Angle", definition: "An angle less than 90°." },
    { term: "Right Angle", definition: "An angle of exactly 90°." },
    { term: "Obtuse Angle", definition: "An angle between 90° and 180°." },
    { term: "Supplementary", definition: "Two angles that sum to 180°." },
    { term: "Complementary", definition: "Two angles that sum to 90°." },
    { term: "Vertically Opposite", definition: "Angles formed by intersecting lines." },
    { term: "Corresponding Angles", definition: "Equal angles on parallel lines." },
    { term: "Alternate Angles", definition: "Equal angles on parallel lines." }
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
      question: "What is the vertex of angle ABC?",
      type: "multiple_choice",
      options: ["A", "B", "C", "AB"],
      answer: "B",
      explanation: "The vertex is the middle letter in the angle name."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of angle is 45°?",
      type: "multiple_choice",
      options: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Acute",
      explanation: "45° is less than 90° → Acute"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of angle is 135°?",
      type: "multiple_choice",
      options: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Obtuse",
      explanation: "135° is between 90° and 180° → Obtuse"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find the complement of 35°",
      type: "multiple_choice",
      options: ["45°", "55°", "65°", "145°"],
      answer: "55°",
      explanation: "90° - 35° = 55°"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find the supplement of 110°",
      type: "multiple_choice",
      options: ["60°", "70°", "80°", "90°"],
      answer: "70°",
      explanation: "180° - 110° = 70°"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "If ∠1 = 65°, what is ∠3 if they are vertically opposite?",
      type: "multiple_choice",
      options: ["65°", "115°", "25°", "90°"],
      answer: "65°",
      explanation: "Vertically opposite angles are equal."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "If two angles are corresponding and one is 55°, what is the other?",
      type: "multiple_choice",
      options: ["55°", "125°", "35°", "90°"],
      answer: "55°",
      explanation: "Corresponding angles are equal."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "If two angles are alternate interior and one is 70°, what is the other?",
      type: "multiple_choice",
      options: ["70°", "110°", "90°", "20°"],
      answer: "70°",
      explanation: "Alternate interior angles are equal."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "If two co-interior angles are 80° and x, what is x?",
      type: "multiple_choice",
      options: ["80°", "100°", "90°", "120°"],
      answer: "100°",
      explanation: "Co-interior angles sum to 180° → 180° - 80° = 100°"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the sum of interior angles in a hexagon?",
      type: "multiple_choice",
      options: ["360°", "540°", "720°", "900°"],
      answer: "720°",
      explanation: "(6-2) × 180° = 4 × 180° = 720°"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "In a triangle, ∠A = 2x, ∠B = 3x, ∠C = 4x. Find x.",
      type: "multiple_choice",
      options: ["10°", "15°", "20°", "25°"],
      answer: "20°",
      explanation: "2x + 3x + 4x = 180° → 9x = 180° → x = 20°"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "In triangle ABC, ∠A = 50°, ∠B = 70°. What is ∠C?",
      type: "multiple_choice",
      options: ["50°", "60°", "70°", "80°"],
      answer: "60°",
      explanation: "180° - 50° - 70° = 60°"
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is each interior angle of a regular hexagon?",
      type: "multiple_choice",
      options: ["100°", "120°", "135°", "150°"],
      answer: "120°",
      explanation: "Sum = 720°, each = 720°/6 = 120°"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "Find x in a quadrilateral with angles 80°, 90°, 110°, x",
      type: "multiple_choice",
      options: ["60°", "70°", "80°", "90°"],
      answer: "80°",
      explanation: "80° + 90° + 110° + x = 360° → 280° + x = 360° → x = 80°"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "A bearing of 135° means what angle from North?",
      type: "multiple_choice",
      options: ["135° clockwise from North", "45° counterclockwise from North", "135° counterclockwise from North", "45° clockwise from North"],
      answer: "135° clockwise from North",
      explanation: "Bearings are measured clockwise from North."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_angles",
    title: "Angles Quiz",
    description: "Test your understanding of angles",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the vertex of ∠XYZ?",
        type: "short_answer",
        answer_key: "Y",
        explanation: "The vertex is the middle letter."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What type of angle is 120°?",
        type: "short_answer",
        answer_key: "Obtuse",
        explanation: "120° is between 90° and 180°."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Find the complement of 25°",
        type: "short_answer",
        answer_key: "65°",
        explanation: "90° - 25° = 65°"
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "easy",
        question: "Find the supplement of 85°",
        type: "short_answer",
        answer_key: "95°",
        explanation: "180° - 85° = 95°"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "If ∠1 = 40°, what is ∠3 (vertically opposite)?",
        type: "short_answer",
        answer_key: "40°",
        explanation: "Vertically opposite angles are equal."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "If corresponding angles are 75°, what is the other?",
        type: "short_answer",
        answer_key: "75°",
        explanation: "Corresponding angles are equal."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "If co-interior angles are 60° and x, find x.",
        type: "short_answer",
        answer_key: "120°",
        explanation: "60° + x = 180° → x = 120°"
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "medium",
        question: "Sum of interior angles in a pentagon?",
        type: "short_answer",
        answer_key: "540°",
        explanation: "(5-2) × 180° = 3 × 180° = 540°"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "In a triangle: ∠A = 3x, ∠B = 2x, ∠C = x. Find x.",
        type: "short_answer",
        answer_key: "30°",
        explanation: "3x + 2x + x = 180° → 6x = 180° → x = 30°"
      },
      {
        id: "ass_010",
        objective: "obj_006",
        difficulty: "hard",
        question: "Each interior angle of a regular pentagon?",
        type: "short_answer",
        answer_key: "108°",
        explanation: "Sum = 540°, each = 540°/5 = 108°"
      }
    ]
  }
};