// Location: src/data/lessons/core/mathematics/geometry/mensuration.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_mensuration",
  subject: "Mathematics",
  topic: "Geometry",
  name: "Mensuration",
  icon: "📏",
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
      description: "Define mensuration and identify key formulas for area and perimeter",
      indicator: "Student can explain what mensuration is and recall basic area/perimeter formulas"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate perimeter and area of rectangles and squares",
      indicator: "Student can use P = 2(l+w) and A = l × w"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Calculate area of triangles and parallelograms",
      indicator: "Student can use A = 1/2 × b × h and A = b × h"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate area of trapeziums and compound shapes",
      indicator: "Student can use A = 1/2(a+b)h and find area of composite shapes"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate surface area of cubes and cuboids",
      indicator: "Student can use formulas for 3D shapes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate volume of cubes, cuboids, and cylinders",
      indicator: "Student can use V = l × w × h and V = πr²h"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Calculate surface area and volume of prisms and pyramids",
      indicator: "Student can use formulas for prisms and pyramids"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Calculate surface area and volume of spheres and cones",
      indicator: "Student can use formulas for spheres and cones"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex mensuration problems involving multiple shapes",
      indicator: "Student can solve multi-step 3D mensuration problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mensuration - Complete Lesson",
    duration: "20:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering area, perimeter, surface area, and volume of 2D and 3D shapes."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Mensuration?</h2>
      <p><strong>Mensuration</strong> is the branch of mathematics that deals with the measurement of <strong>length</strong>, <strong>area</strong>, <strong>perimeter</strong>, <strong>surface area</strong>, and <strong>volume</strong> of geometric shapes.</p>
      <p>It applies to both <strong>2D</strong> (flat) and <strong>3D</strong> (solid) shapes.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Area and Perimeter of 2D Shapes",
        objective: "obj_001",
        text: `
          <h3>Key Formulas</h3>
          <table>
            <tr><th>Shape</th><th>Perimeter</th><th>Area</th></tr>
            <tr><td>Rectangle</td><td>P = 2(l + w)</td><td>A = l × w</td></tr>
            <tr><td>Square</td><td>P = 4s</td><td>A = s²</td></tr>
            <tr><td>Triangle</td><td>P = a + b + c</td><td>A = ½ × b × h</td></tr>
            <tr><td>Parallelogram</td><td>P = 2(a + b)</td><td>A = b × h</td></tr>
            <tr><td>Trapezium</td><td>P = a + b + c + d</td><td>A = ½(a+b)h</td></tr>
            <tr><td>Circle</td><td>C = 2πr</td><td>A = πr²</td></tr>
          </table>
        `
      },
      {
        id: "sec_002",
        title: "Rectangles and Squares",
        objective: "obj_002",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Rectangle with length 8cm, width 5cm
            <ul>
              <li>P = 2(8 + 5) = 2(13) = 26cm</li>
              <li>A = 8 × 5 = 40cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Square with side 7cm
            <ul>
              <li>P = 4 × 7 = 28cm</li>
              <li>A = 7² = 49cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Triangles and Parallelograms",
        objective: "obj_003",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Triangle with base 10cm, height 6cm
            <ul>
              <li>A = ½ × 10 × 6 = 30cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Parallelogram with base 8cm, height 5cm
            <ul>
              <li>A = 8 × 5 = 40cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Trapeziums and Compound Shapes",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Trapezium with parallel sides 10cm and 6cm, height 4cm
            <ul>
              <li>A = ½(10 + 6) × 4 = ½ × 16 × 4 = 32cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Compound shape (rectangle + semicircle)
            <ul>
              <li>Rectangle: 8cm × 4cm = 32cm²</li>
              <li>Semicircle: r = 2cm, area = ½π(2)² = 2π cm²</li>
              <li>Total = 32 + 2π cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Surface Area of Cubes and Cuboids",
        objective: "obj_005",
        text: `
          <h3>Formulas</h3>
          <ul>
            <li><strong>Cube:</strong> SA = 6s² (where s = side length)</li>
            <li><strong>Cuboid:</strong> SA = 2(lw + lh + wh)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Cube with side 5cm
            <ul>
              <li>SA = 6 × 25 = 150cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Cuboid with length 6cm, width 4cm, height 3cm
            <ul>
              <li>SA = 2(6×4 + 6×3 + 4×3) = 2(24 + 18 + 12) = 2(54) = 108cm²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Volume of Cubes, Cuboids, and Cylinders",
        objective: "obj_006",
        text: `
          <h3>Formulas</h3>
          <ul>
            <li><strong>Cube:</strong> V = s³</li>
            <li><strong>Cuboid:</strong> V = l × w × h</li>
            <li><strong>Cylinder:</strong> V = πr²h</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Cube with side 4cm
            <ul>
              <li>V = 4³ = 64cm³</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Cuboid with length 6cm, width 5cm, height 4cm
            <ul>
              <li>V = 6 × 5 × 4 = 120cm³</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> Cylinder with radius 3cm, height 7cm (π = 3.14)
            <ul>
              <li>V = π × 9 × 7 = 63π ≈ 197.82cm³</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Prisms and Pyramids",
        objective: "obj_007",
        text: `
          <h3>Prisms</h3>
          <p><strong>Surface Area:</strong> SA = 2 × base area + perimeter × height</p>
          <p><strong>Volume:</strong> V = base area × height</p>
          
          <h3>Pyramids</h3>
          <p><strong>Volume:</strong> V = ⅓ × base area × height</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Triangular prism with base area 12cm², perimeter 18cm, height 10cm
            <ul>
              <li>SA = 2(12) + 18(10) = 24 + 180 = 204cm²</li>
              <li>V = 12 × 10 = 120cm³</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Spheres and Cones",
        objective: "obj_008",
        text: `
          <h3>Sphere (r = radius)</h3>
          <p><strong>Surface Area:</strong> SA = 4πr²</p>
          <p><strong>Volume:</strong> V = ⁴⁄₃πr³</p>
          
          <h3>Cone (r = radius, h = height, l = slant height)</h3>
          <p><strong>Curved Surface Area:</strong> CSA = πrl</p>
          <p><strong>Total Surface Area:</strong> TSA = πrl + πr²</p>
          <p><strong>Volume:</strong> V = ⅓πr²h</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Sphere with radius 6cm (π = 3.14)
            <ul>
              <li>SA = 4 × 3.14 × 36 = 452.16cm²</li>
              <li>V = ⁴⁄₃ × 3.14 × 216 = 904.32cm³</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Cone with radius 3cm, height 4cm, slant height 5cm (π = 3.14)
            <ul>
              <li>CSA = π × 3 × 5 = 47.1cm²</li>
              <li>V = ⅓ × 3.14 × 9 × 4 = 37.68cm³</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Mensuration Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A cylinder has radius 4cm and height 10cm. Find its volume and surface area.
            <ul>
              <li>V = πr²h = π × 16 × 10 = 160π cm³</li>
              <li>SA = 2πr² + 2πrh = 2π(16) + 2π(4)(10) = 32π + 80π = 112π cm²</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A rectangular tank is 1.5m long, 1.2m wide, and 0.8m deep. Find its volume and capacity in litres.
            <ul>
              <li>V = 1.5 × 1.2 × 0.8 = 1.44m³</li>
              <li>Capacity = 1.44 × 1000 = 1440 litres</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Mensuration: Measurement of length, area, surface area, and volume</li>
        <li>Area of 2D shapes: rectangle (l×w), triangle (½bh), circle (πr²)</li>
        <li>Surface area: cube (6s²), cuboid (2(lw+lh+wh)), cylinder (2πr²+2πrh)</li>
        <li>Volume: cube (s³), cuboid (l×w×h), cylinder (πr²h), prism (base area × height)</li>
        <li>Sphere: SA = 4πr², V = ⁴⁄₃πr³</li>
        <li>Cone: V = ⅓πr²h, CSA = πrl</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Mensuration", definition: "The measurement of geometric shapes and solids." },
    { term: "Perimeter", definition: "The distance around a 2D shape." },
    { term: "Area", definition: "The space enclosed within a 2D shape." },
    { term: "Surface Area", definition: "The total area of all surfaces of a 3D shape." },
    { term: "Volume", definition: "The space occupied by a 3D shape." },
    { term: "Cuboid", definition: "A 3D shape with six rectangular faces." },
    { term: "Cylinder", definition: "A 3D shape with circular bases." },
    { term: "Prism", definition: "A 3D shape with two identical bases." },
    { term: "Pyramid", definition: "A 3D shape with a base and triangular faces." },
    { term: "Sphere", definition: "A 3D shape with all points equidistant from center." },
    { term: "Cone", definition: "A 3D shape with a circular base and a vertex." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find area of rectangle with length 8cm and width 5cm",
      type: "multiple_choice",
      options: ["13cm²", "26cm²", "40cm²", "80cm²"],
      answer: "40cm²",
      explanation: "A = 8 × 5 = 40cm²"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find perimeter of square with side 6cm",
      type: "multiple_choice",
      options: ["12cm", "24cm", "36cm", "48cm"],
      answer: "24cm",
      explanation: "P = 4 × 6 = 24cm"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find area of triangle with base 8cm and height 5cm",
      type: "multiple_choice",
      options: ["13cm²", "20cm²", "40cm²", "80cm²"],
      answer: "20cm²",
      explanation: "A = ½ × 8 × 5 = 20cm²"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find area of parallelogram with base 7cm and height 4cm",
      type: "multiple_choice",
      options: ["11cm²", "14cm²", "28cm²", "56cm²"],
      answer: "28cm²",
      explanation: "A = 7 × 4 = 28cm²"
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find area of square with side 9cm",
      type: "multiple_choice",
      options: ["18cm²", "36cm²", "81cm²", "162cm²"],
      answer: "81cm²",
      explanation: "A = 9² = 81cm²"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Find area of trapezium with parallel sides 10cm and 6cm, height 4cm",
      type: "multiple_choice",
      options: ["16cm²", "24cm²", "32cm²", "64cm²"],
      answer: "32cm²",
      explanation: "A = ½(10+6) × 4 = ½ × 16 × 4 = 32cm²"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Find surface area of cube with side 4cm",
      type: "multiple_choice",
      options: ["24cm²", "64cm²", "96cm²", "144cm²"],
      answer: "96cm²",
      explanation: "SA = 6 × 4² = 6 × 16 = 96cm²"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Find volume of cuboid with length 5cm, width 4cm, height 3cm",
      type: "multiple_choice",
      options: ["12cm³", "20cm³", "60cm³", "120cm³"],
      answer: "60cm³",
      explanation: "V = 5 × 4 × 3 = 60cm³"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "Find surface area of cuboid with length 6cm, width 4cm, height 3cm",
      type: "multiple_choice",
      options: ["36cm²", "72cm²", "108cm²", "144cm²"],
      answer: "108cm²",
      explanation: "SA = 2(6×4 + 6×3 + 4×3) = 2(24 + 18 + 12) = 2(54) = 108cm²"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Find volume of cylinder with radius 3cm, height 7cm (π = 3.14)",
      type: "multiple_choice",
      options: ["65.94cm³", "131.88cm³", "197.82cm³", "263.76cm³"],
      answer: "197.82cm³",
      explanation: "V = π × 9 × 7 = 63 × 3.14 = 197.82cm³"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Find volume of triangular prism with base area 15cm² and height 8cm",
      type: "multiple_choice",
      options: ["40cm³", "60cm³", "80cm³", "120cm³"],
      answer: "120cm³",
      explanation: "V = base area × height = 15 × 8 = 120cm³"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find surface area of sphere with radius 3cm (π = 3.14)",
      type: "multiple_choice",
      options: ["28.26cm²", "56.52cm²", "113.04cm²", "226.08cm²"],
      answer: "113.04cm²",
      explanation: "SA = 4πr² = 4 × 3.14 × 9 = 113.04cm²"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find volume of cone with radius 2cm, height 6cm (π = 3.14)",
      type: "multiple_choice",
      options: ["12.56cm³", "25.12cm³", "37.68cm³", "50.24cm³"],
      answer: "25.12cm³",
      explanation: "V = ⅓πr²h = ⅓ × 3.14 × 4 × 6 = 25.12cm³"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "A rectangular tank is 2m long, 1.5m wide, and 1m deep. Find its volume in litres.",
      type: "multiple_choice",
      options: ["1500L", "2000L", "2500L", "3000L"],
      answer: "3000L",
      explanation: "V = 2 × 1.5 × 1 = 3m³ = 3000L"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "Find volume of square pyramid with base side 6cm and height 8cm",
      type: "multiple_choice",
      options: ["32cm³", "48cm³", "64cm³", "96cm³"],
      answer: "96cm³",
      explanation: "Base area = 36cm², V = ⅓ × 36 × 8 = 96cm³"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_mensuration",
    title: "Mensuration Quiz",
    description: "Test your understanding of mensuration",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_002",
        difficulty: "easy",
        question: "Area of rectangle with length 10cm, width 6cm",
        type: "short_answer",
        answer_key: "60cm²",
        explanation: "A = 10 × 6 = 60cm²"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Perimeter of square with side 8cm",
        type: "short_answer",
        answer_key: "32cm",
        explanation: "P = 4 × 8 = 32cm"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Area of triangle with base 10cm, height 6cm",
        type: "short_answer",
        answer_key: "30cm²",
        explanation: "A = ½ × 10 × 6 = 30cm²"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Area of trapezium with parallel sides 12cm and 8cm, height 5cm",
        type: "short_answer",
        answer_key: "50cm²",
        explanation: "A = ½(12+8) × 5 = ½ × 20 × 5 = 50cm²"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Surface area of cube with side 5cm",
        type: "short_answer",
        answer_key: "150cm²",
        explanation: "SA = 6 × 25 = 150cm²"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Volume of cuboid with length 8cm, width 5cm, height 4cm",
        type: "short_answer",
        answer_key: "160cm³",
        explanation: "V = 8 × 5 × 4 = 160cm³"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Volume of cylinder with radius 2cm, height 5cm (π = 3.14)",
        type: "short_answer",
        answer_key: "62.8cm³",
        explanation: "V = 3.14 × 4 × 5 = 62.8cm³"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Surface area of sphere with radius 2cm (π = 3.14)",
        type: "short_answer",
        answer_key: "50.24cm²",
        explanation: "SA = 4 × 3.14 × 4 = 50.24cm²"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Volume of cone with radius 3cm, height 4cm (π = 3.14)",
        type: "short_answer",
        answer_key: "37.68cm³",
        explanation: "V = ⅓ × 3.14 × 9 × 4 = 37.68cm³"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A cuboid has length 1.2m, width 0.8m, height 0.5m. Find its volume.",
        type: "short_answer",
        answer_key: "0.48m³",
        explanation: "V = 1.2 × 0.8 × 0.5 = 0.48m³"
      }
    ]
  }
};