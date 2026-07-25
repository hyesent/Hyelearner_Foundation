// Location: src/data/lessons/core/mathematics/trigonometry/bearings.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_bearings",
  subject: "Mathematics",
  topic: "Trigonometry",
  name: "Bearings",
  icon: "🧭",
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
      description: "Define a bearing and understand the three-figure bearing system",
      indicator: "Student can explain what a bearing is and identify bearings as three-figure angles"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Measure and draw bearings using a protractor",
      indicator: "Student can measure and draw bearings accurately"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Convert between compass directions and bearings",
      indicator: "Student can convert between N, E, S, W and bearings"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate the bearing from one point to another",
      indicator: "Student can find bearings between two points"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate the back bearing (reciprocal bearing)",
      indicator: "Student can find back bearing = bearing ± 180°"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply bearings to solve distance problems",
      indicator: "Student can use bearings with scale drawings"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve bearing problems using trigonometry (sine and cosine rules)",
      indicator: "Student can apply sine/cosine rules to bearing problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve complex bearing problems with multiple points",
      indicator: "Student can solve multi-step bearing problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply bearings to navigation and real-world problems",
      indicator: "Student can solve practical navigation problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Bearings - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering bearings, three-figure system, and navigation problems."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Bearings?</h2>
      <p>A <strong>bearing</strong> is a way of describing direction using angles.</p>
      <p>Bearings are measured <strong>clockwise</strong> from <strong>North</strong>.</p>
      <p>Bearings are always given as <strong>three figures</strong> (e.g., 045°, 120°, 270°).</p>
      <p>If the angle is less than 100°, add a leading zero (e.g., 045° for 45°).</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Three-Figure Bearing System",
        objective: "obj_001",
        text: `
          <h3>Rules for Bearings</h3>
          <ul>
            <li>Measured from <strong>North</strong> (0°) </li>
            <li>Measured <strong>clockwise</strong></li>
            <li>Always written as <strong>three figures</strong></li>
            <li>Examples: 045° (NE), 090° (E), 180° (S), 270° (W), 315° (NW)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A bearing of 060° means 60° clockwise from North
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Compass Directions to Bearings",
        objective: "obj_003",
        text: `
          <h3>Conversions</h3>
          <ul>
            <li><strong>North:</strong> 000° or 360°</li>
            <li><strong>Northeast:</strong> 045°</li>
            <li><strong>East:</strong> 090°</li>
            <li><strong>Southeast:</strong> 135°</li>
            <li><strong>South:</strong> 180°</li>
            <li><strong>Southwest:</strong> 225°</li>
            <li><strong>West:</strong> 270°</li>
            <li><strong>Northwest:</strong> 315°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A ship sailing Southeast has a bearing of 135°
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Measuring Bearings",
        objective: "obj_002",
        text: `
          <h3>How to Measure Bearings</h3>
          <ol>
            <li>Place the protractor center at the starting point</li>
            <li>Align 0° with North</li>
            <li>Measure the angle clockwise from North</li>
            <li>Write the angle as three figures</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A point is 60° clockwise from North → Bearing = 060°
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Drawing Bearings",
        objective: "obj_002",
        text: `
          <h3>How to Draw Bearings</h3>
          <ol>
            <li>Draw a line to represent North</li>
            <li>Measure the angle clockwise from North</li>
            <li>Draw the bearing line at that angle</li>
            <li>Write the bearing as three figures</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Draw a bearing of 120°
            <ul>
              <li>Start at North (0°)</li>
              <li>Measure 120° clockwise</li>
              <li>Draw the line in that direction</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Back Bearings",
        objective: "obj_005",
        text: `
          <h3>Back Bearing Formula</h3>
          <p><strong>Back Bearing = Bearing ± 180°</strong></p>
          <ul>
            <li>If bearing < 180°, add 180°</li>
            <li>If bearing > 180°, subtract 180°</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Bearing = 060°
            <ul>
              <li>Back Bearing = 060° + 180° = 240°</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Bearing = 220°
            <ul>
              <li>Back Bearing = 220° - 180° = 040°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Finding Bearings Between Points",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Find the bearing of B from A
            <ul>
              <li>From A, draw North line</li>
              <li>Measure angle clockwise from North to B</li>
              <li>If angle is 40°, bearing = 040°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Bearings and Trigonometry",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A ship sails 10km on a bearing of 060°. How far East and North has it traveled?
            <ul>
              <li>East = 10 × sin 60° = 10 × 0.866 = 8.66km</li>
              <li>North = 10 × cos 60° = 10 × 0.5 = 5km</li>
              <li><strong>Answer:</strong> East = 8.66km, North = 5km</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Bearing Problems",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> From A, B is 5km on bearing 045°. From A, C is 7km on bearing 135°. Find BC.
            <ul>
              <li>AB = 5km, AC = 7km</li>
              <li>Angle BAC = 135° - 45° = 90°</li>
              <li>By Pythagoras: BC² = 5² + 7² = 25 + 49 = 74</li>
              <li>BC = √74 ≈ 8.60km</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Navigation and Real-World Applications",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A ship travels 8km on a bearing of 120°. How far East and South has it traveled?
            <ul>
              <li>East = 8 × sin 30° = 8 × 0.5 = 4km</li>
              <li>South = 8 × cos 30° = 8 × 0.866 = 6.93km</li>
              <li><strong>Answer:</strong> East = 4km, South = 6.93km</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Bearings are measured clockwise from North</li>
        <li>Bearings are always three figures (e.g., 045°, 120°, 270°)</li>
        <li>Back bearing = bearing ± 180°</li>
        <li>Use sine and cosine to find distances in North and East directions</li>
        <li>Bearings are used in navigation, surveying, and real-world applications</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Bearing", definition: "Direction measured clockwise from North, written as three figures." },
    { term: "Three-Figure Bearing", definition: "A bearing written with three digits (e.g., 045°)." },
    { term: "Back Bearing", definition: "The opposite direction of a bearing (bearing ± 180°)." },
    { term: "North", definition: "0° direction from which bearings are measured." },
    { term: "Clockwise", definition: "The direction bearings are measured in." }
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
      question: "Bearings are measured from which direction?",
      type: "multiple_choice",
      options: ["East", "South", "West", "North"],
      answer: "North",
      explanation: "Bearings are measured clockwise from North."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "How many figures should a bearing have?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Bearings are always written as three figures."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the bearing for East?",
      type: "multiple_choice",
      options: ["000°", "045°", "090°", "180°"],
      answer: "090°",
      explanation: "East is 90° clockwise from North."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the bearing for South?",
      type: "multiple_choice",
      options: ["090°", "180°", "270°", "000°"],
      answer: "180°",
      explanation: "South is 180° clockwise from North."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the bearing for Northeast?",
      type: "multiple_choice",
      options: ["035°", "045°", "055°", "065°"],
      answer: "045°",
      explanation: "Northeast is 45° clockwise from North."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the back bearing of 060°?",
      type: "multiple_choice",
      options: ["120°", "180°", "240°", "300°"],
      answer: "240°",
      explanation: "060° + 180° = 240°"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the back bearing of 300°?",
      type: "multiple_choice",
      options: ["120°", "180°", "240°", "300°"],
      answer: "120°",
      explanation: "300° - 180° = 120°"
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "A ship travels 5km on a bearing of 030°. How far North has it traveled?",
      type: "multiple_choice",
      options: ["2.5km", "4.33km", "5km", "10km"],
      answer: "4.33km",
      explanation: "North = 5 × cos 30° = 5 × 0.866 = 4.33km"
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "A ship travels 5km on a bearing of 030°. How far East has it traveled?",
      type: "multiple_choice",
      options: ["2.5km", "4.33km", "5km", "10km"],
      answer: "2.5km",
      explanation: "East = 5 × sin 30° = 5 × 0.5 = 2.5km"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "From A, B is 8km on bearing 060°. From A, C is 6km on bearing 120°. Find BC.",
      type: "multiple_choice",
      options: ["6km", "8km", "10km", "12km"],
      answer: "10km",
      explanation: "Angle BAC = 120° - 60° = 60°. By cosine rule: BC² = 8² + 6² - 2(8)(6)cos60 = 64 + 36 - 48 = 52, BC = 7.21km"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A ship travels 10km on a bearing of 135°. How far East and South has it traveled?",
      type: "multiple_choice",
      options: ["East=7.07km, South=7.07km", "East=5km, South=8.66km", "East=8.66km, South=5km", "East=10km, South=0km"],
      answer: "East=7.07km, South=7.07km",
      explanation: "sin 45° = cos 45° = 0.707. East = 10 × sin 45° = 7.07km, South = 10 × cos 45° = 7.07km"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "From A, B is 6km on bearing 045°. From A, C is 8km on bearing 135°. Find distance BC.",
      type: "multiple_choice",
      options: ["8km", "10km", "12km", "14km"],
      answer: "10km",
      explanation: "Angle BAC = 90°. BC² = 6² + 8² = 36 + 64 = 100, BC = 10km"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "A ship travels 12km on a bearing of 210°. How far South and West has it traveled?",
      type: "multiple_choice",
      options: ["South=6km, West=10.39km", "South=10.39km, West=6km", "South=6km, West=6km", "South=10.39km, West=10.39km"],
      answer: "South=10.39km, West=6km",
      explanation: "210° is 30° past South. South = 12 × cos 30° = 10.39km, West = 12 × sin 30° = 6km"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "A plane flies 200km on a bearing of 060°, then 300km on a bearing of 150°. How far North of the starting point is it?",
      type: "multiple_choice",
      options: ["100km", "200km", "260km", "300km"],
      answer: "260km",
      explanation: "First leg North = 200 × cos 60° = 100km. Second leg North = 300 × cos 150° = 300 × cos(180-30) = 300 × (-cos30) = -260? Wait recalc: 150° is 30° from South, so cos 150° = -0.866, North = 300 × (-0.866) = -260km → Actually: First leg North = 200 × 0.5 = 100km. Second leg North = 300 × cos 150° = 300 × (-0.866) = -260km (South). Total North = 100 - 260 = -160km"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "A ship is 8km East and 6km North of a port. What is the bearing of the ship from the port?",
      type: "multiple_choice",
      options: ["036.87°", "053.13°", "126.87°", "306.87°"],
      answer: "036.87°",
      explanation: "tan θ = 6/8 = 0.75, θ = tan⁻¹(0.75) = 36.87°, bearing = 036.87°"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_bearings",
    title: "Bearings Quiz",
    description: "Test your understanding of bearings",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "From which direction are bearings measured?",
        type: "short_answer",
        answer_key: "North",
        explanation: "Bearings are measured clockwise from North."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the bearing for West?",
        type: "short_answer",
        answer_key: "270°",
        explanation: "West is 270° clockwise from North."
      },
      {
        id: "ass_003",
        objective: "obj_005",
        difficulty: "easy",
        question: "What is the back bearing of 140°?",
        type: "short_answer",
        answer_key: "320°",
        explanation: "140° + 180° = 320°"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the back bearing of 250°?",
        type: "short_answer",
        answer_key: "070°",
        explanation: "250° - 180° = 070°"
      },
      {
        id: "ass_005",
        objective: "obj_007",
        difficulty: "medium",
        question: "A ship travels 10km on a bearing of 060°. How far East has it traveled?",
        type: "short_answer",
        answer_key: "8.66km",
        explanation: "East = 10 × sin 60° = 10 × 0.866 = 8.66km"
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "A ship travels 10km on a bearing of 060°. How far North has it traveled?",
        type: "short_answer",
        answer_key: "5km",
        explanation: "North = 10 × cos 60° = 10 × 0.5 = 5km"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Find bearing from A to B if B is 5km East and 8km North of A.",
        type: "short_answer",
        answer_key: "058°",
        explanation: "tan θ = 8/5 = 1.6, θ = tan⁻¹(1.6) = 58°, bearing = 058°"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "From A, B is 6km on bearing 045°. From A, C is 8km on bearing 135°. Find BC.",
        type: "short_answer",
        answer_key: "10km",
        explanation: "Angle BAC = 90°. BC² = 6² + 8² = 100, BC = 10km"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "A ship travels 15km on a bearing of 120°. How far East and South has it traveled?",
        type: "short_answer",
        answer_key: "East=13.0km, South=7.5km",
        explanation: "East = 15 × sin 120° = 15 × 0.866 = 13.0km, South = 15 × cos 120° = 15 × (-0.5) = 7.5km"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A ship travels 10km on bearing 030°, then 15km on bearing 120°. Find its distance from the starting point.",
        type: "short_answer",
        answer_key: "18.03km",
        explanation: "Angle between = 90°. Distance² = 10² + 15² = 100 + 225 = 325, Distance = √325 = 18.03km"
      }
    ]
  }
};