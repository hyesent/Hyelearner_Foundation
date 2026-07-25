// Location: src/data/lessons/science/physics/mechanics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_mechanics",
  subject: "Physics",
  topic: "Mechanics",
  name: "Mechanics",
  icon: "⚙️",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of measurements",
    "Basic algebra skills",
    "Knowledge of vectors and scalars",
    "Understanding of graphs"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_heat",
      name: "Heat",
      file: "science/physics/heat.js"
    }
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define mechanics and its branches",
      indicator: "Student can explain the two branches of mechanics"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between scalar and vector quantities",
      indicator: "Student can classify quantities as scalar or vector"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define speed, velocity, and acceleration",
      indicator: "Student can explain the differences between these concepts"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the equations of motion",
      indicator: "Student can use SUVAT equations to solve problems"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain Newton's First Law of Motion",
      indicator: "Student can state and explain the law of inertia"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain Newton's Second Law of Motion",
      indicator: "Student can apply F = ma to solve problems"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain Newton's Third Law of Motion",
      indicator: "Student can identify action-reaction pairs"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply the concept of work, energy, and power",
      indicator: "Student can calculate work, kinetic energy, and power"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply the principle of conservation of energy",
      indicator: "Student can solve problems using energy conservation"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain momentum and impulse",
      indicator: "Student can solve problems involving momentum and impulse"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Apply the principle of conservation of momentum",
      indicator: "Student can solve collision problems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of gravitational force",
      indicator: "Student can apply Newton's law of gravitation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze motion under gravity",
      indicator: "Student can solve projectile and free-fall problems"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Solve complex mechanics problems",
      indicator: "Student can combine multiple mechanics concepts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mechanics - Motion, Forces, and Energy",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about motion, Newton's laws, energy, and momentum."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Mechanics?</h2>
      <p><strong>Mechanics</strong> is the branch of physics that deals with the motion of objects and the forces that cause motion. It is divided into two main branches: <strong>kinematics</strong> (study of motion) and <strong>dynamics</strong> (study of forces and motion).</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Kinematics</h3>
          <ul>
            <li>✓ Describes motion</li>
            <li>✓ Speed, velocity, acceleration</li>
            <li>✓ Distance and displacement</li>
            <li>✓ Equations of motion</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Dynamics</h3>
          <ul>
            <li>✓ Explains motion</li>
            <li>✓ Forces and Newton's Laws</li>
            <li>✓ Work, energy, power</li>
            <li>✓ Momentum</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Concepts</h4>
        <ul>
          <li><strong>Scalar:</strong> Magnitude only (e.g., speed, mass)</li>
          <li><strong>Vector:</strong> Magnitude and direction (e.g., velocity, force)</li>
          <li><strong>Velocity:</strong> Speed with direction</li>
          <li><strong>Acceleration:</strong> Rate of change of velocity</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Scalar and Vector Quantities",
        objective: "obj_002",
        text: `
          <h3>Scalars and Vectors</h3>
          <p><strong>Scalar quantities</strong> have only magnitude (size). <strong>Vector quantities</strong> have both magnitude and direction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Scalar Quantities</h4>
              <ul>
                <li>Mass</li>
                <li>Speed</li>
                <li>Distance</li>
                <li>Time</li>
                <li>Temperature</li>
                <li>Energy</li>
                <li>Power</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Vector Quantities</h4>
              <ul>
                <li>Displacement</li>
                <li>Velocity</li>
                <li>Acceleration</li>
                <li>Force</li>
                <li>Momentum</li>
                <li>Weight</li>
                <li>Impulse</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Equations of Motion",
        objective: "obj_004",
        text: `
          <h3>Equations of Motion (SUVAT)</h3>
          <p>These equations describe the motion of objects moving with uniform acceleration.</p>
          
          <div class="formula-box">
            <h4>📝 SUVAT Equations:</h4>
            <ul>
              <li><strong>v = u + at</strong></li>
              <li><strong>s = ut + ½at²</strong></li>
              <li><strong>v² = u² + 2as</strong></li>
              <li><strong>s = ½(u + v)t</strong></li>
            </ul>
            <ul>
              <li>s = displacement (m)</li>
              <li>u = initial velocity (m/s)</li>
              <li>v = final velocity (m/s)</li>
              <li>a = acceleration (m/s²)</li>
              <li>t = time (s)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A car accelerates from rest at 2 m/s² for 5 seconds. Calculate its final velocity and distance traveled.</li>
              <li><strong>Solution:</strong></li>
              <li>u = 0, a = 2 m/s², t = 5 s</li>
              <li>v = u + at = 0 + 2 × 5 = 10 m/s</li>
              <li>s = ut + ½at² = 0 + ½ × 2 × 25 = 25 m</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Newton's First Law",
        objective: "obj_005",
        text: `
          <h3>Newton's First Law (Law of Inertia)</h3>
          <p>An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net external force.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ Inertia is the tendency of an object to resist changes in its motion</li>
              <li>✓ An object's mass is a measure of its inertia</li>
              <li>✓ Without force, velocity is constant</li>
              <li>✓ Also known as the law of inertia</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ A book on a table remains at rest until pushed</li>
              <li>✓ A moving car continues moving if the engine stops (friction will eventually stop it)</li>
              <li>✓ Passengers lurch forward when a car stops suddenly</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Newton's Second Law",
        objective: "obj_006",
        text: `
          <h3>Newton's Second Law</h3>
          <p>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>F = ma</strong></p>
            <ul>
              <li>F = net force (N)</li>
              <li>m = mass (kg)</li>
              <li>a = acceleration (m/s²)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A force of 50 N is applied to a 10 kg object. Calculate its acceleration.</li>
              <li><strong>Solution:</strong></li>
              <li>F = ma → a = F/m</li>
              <li>a = 50/10 = 5 m/s²</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Newton's Third Law",
        objective: "obj_007",
        text: `
          <h3>Newton's Third Law</h3>
          <p>For every action, there is an equal and opposite reaction.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ Forces always occur in pairs</li>
              <li>✓ Action and reaction forces are equal in magnitude</li>
              <li>✓ Action and reaction forces are opposite in direction</li>
              <li>✓ Action and reaction forces act on different objects</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ A rocket pushes gases downward; gases push rocket upward</li>
              <li>✓ A person pushes on the ground; ground pushes back on the person</li>
              <li>✓ A gun recoils when a bullet is fired</li>
              <li>✓ A boat oar pushes water backward; water pushes boat forward</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Work, Energy, and Power",
        objective: "obj_008",
        text: `
          <h3>Work, Energy, and Power</h3>
          <p><strong>Work</strong> is done when a force causes displacement. <strong>Energy</strong> is the capacity to do work. <strong>Power</strong> is the rate of doing work.</p>
          
          <div class="formula-box">
            <h4>📝 Formulas:</h4>
            <ul>
              <li><strong>W = F × d</strong> (Work = Force × Distance)</li>
              <li><strong>KE = ½mv²</strong> (Kinetic Energy)</li>
              <li><strong>PE = mgh</strong> (Potential Energy)</li>
              <li><strong>P = W/t</strong> (Power = Work/Time)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A force of 20 N moves an object 5 m. Calculate the work done.</li>
              <li><strong>Solution:</strong></li>
              <li>W = F × d = 20 × 5 = 100 J</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Momentum and Impulse",
        objective: "obj_010",
        text: `
          <h3>Momentum and Impulse</h3>
          <p><strong>Momentum</strong> is the product of mass and velocity. <strong>Impulse</strong> is the change in momentum.</p>
          
          <div class="formula-box">
            <h4>📝 Formulas:</h4>
            <ul>
              <li><strong>p = mv</strong> (Momentum)</li>
              <li><strong>Impulse = F × t = Δp</strong> (Impulse = Change in momentum)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A 2 kg object has a velocity of 3 m/s. Calculate its momentum.</li>
              <li><strong>Solution:</strong></li>
              <li>p = mv = 2 × 3 = 6 kg·m/s</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Conservation of Momentum",
        objective: "obj_011",
        text: `
          <h3>Conservation of Momentum</h3>
          <p>The total momentum of a closed system remains constant if no external forces act on it.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A 4 kg object moving at 2 m/s collides with a 2 kg object at rest. After collision, the 4 kg object stops. Calculate the velocity of the 2 kg object.</li>
              <li><strong>Solution:</strong></li>
              <li>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</li>
              <li>4 × 2 + 2 × 0 = 4 × 0 + 2 × v₂</li>
              <li>8 = 2v₂ → v₂ = 4 m/s</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⚙️ Mechanics</h4>
          <ul>
            <li>✓ Kinematics: describing motion</li>
            <li>✓ Dynamics: explaining motion</li>
            <li>✓ Newton's Three Laws</li>
            <li>✓ Work, Energy, Power</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Equations</h4>
          <ul>
            <li>✓ SUVAT: v = u + at, etc.</li>
            <li>✓ F = ma</li>
            <li>✓ W = Fd, KE = ½mv²</li>
            <li>✓ p = mv</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "If no force acts on an object, it stops moving",
        correction: "An object continues moving at constant velocity without force",
        explanation: "Newton's First Law states that objects maintain their velocity unless acted upon by a force."
      },
      {
        id: "mis_002",
        misconception: "Action and reaction forces cancel each other",
        correction: "Action and reaction forces act on different objects and do not cancel",
        explanation: "Forces cancel only when they act on the same object."
      },
      {
        id: "mis_003",
        misconception: "Mass and weight are the same",
        correction: "Mass is amount of matter; weight is force due to gravity",
        explanation: "Mass is constant; weight changes with gravity (W = mg)."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Transportation",
        description: "Mechanics principles are used in vehicle design.",
        example: "Brakes, safety features, and fuel efficiency."
      },
      {
        id: "app_002",
        title: "Sports",
        description: "Mechanics explains motion in sports.",
        example: "Throwing, running, and hitting techniques."
      },
      {
        id: "app_003",
        title: "Engineering",
        description: "Mechanics is essential for structural engineering.",
        example: "Building bridges, buildings, and machinery."
      },
      {
        id: "app_004",
        title: "Space Exploration",
        description: "Mechanics principles are used in rocket launches.",
        example: "Orbital mechanics and spacecraft design."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Kinematics", definition: "The study of motion without considering forces." },
    { term: "Dynamics", definition: "The study of forces and their effect on motion." },
    { term: "Scalar", definition: "A quantity with magnitude only." },
    { term: "Vector", definition: "A quantity with magnitude and direction." },
    { term: "Velocity", definition: "Speed in a given direction." },
    { term: "Acceleration", definition: "Rate of change of velocity." },
    { term: "Inertia", definition: "The tendency of an object to resist changes in motion." },
    { term: "Momentum", definition: "The product of mass and velocity (p = mv)." },
    { term: "Impulse", definition: "The change in momentum (F × t = Δp)." },
    { term: "Work", definition: "The product of force and distance (W = F × d)." },
    { term: "Kinetic Energy", definition: "Energy due to motion (KE = ½mv²)." },
    { term: "Potential Energy", definition: "Stored energy due to position (PE = mgh)." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What are the two main branches of mechanics?",
      type: "multiple_choice",
      options: [
        "Kinematics and Dynamics",
        "Kinetics and Statics",
        "Motion and Forces",
        "Energy and Power"
      ],
      answer: "Kinematics and Dynamics",
      explanation: "The two main branches are kinematics (describing motion) and dynamics (explaining motion with forces)."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a scalar quantity?",
      type: "multiple_choice",
      options: ["Velocity", "Force", "Mass", "Displacement"],
      answer: "Mass",
      explanation: "Mass has magnitude only; it is a scalar quantity."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a vector quantity?",
      type: "multiple_choice",
      options: ["Speed", "Distance", "Time", "Velocity"],
      answer: "Velocity",
      explanation: "Velocity has both magnitude and direction; it is a vector quantity."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "A car travels 100 km in 2 hours. What is its average speed?",
      type: "multiple_choice",
      options: ["50 km/h", "100 km/h", "200 km/h", "25 km/h"],
      answer: "50 km/h",
      explanation: "Speed = Distance/Time = 100/2 = 50 km/h."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "A car accelerates from rest at 3 m/s² for 4 seconds. Calculate its final velocity.",
      type: "multiple_choice",
      options: ["8 m/s", "10 m/s", "12 m/s", "14 m/s"],
      answer: "12 m/s",
      explanation: "v = u + at = 0 + 3 × 4 = 12 m/s."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "A car accelerates from rest at 2 m/s² for 3 seconds. How far does it travel?",
      type: "multiple_choice",
      options: ["6 m", "9 m", "12 m", "18 m"],
      answer: "9 m",
      explanation: "s = ut + ½at² = 0 + ½ × 2 × 9 = 9 m."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does Newton's First Law state?",
      type: "multiple_choice",
      options: [
        "F = ma",
        "An object maintains its velocity unless acted upon by a force",
        "For every action, there is an equal and opposite reaction",
        "Energy is conserved"
      ],
      answer: "An object maintains its velocity unless acted upon by a force",
      explanation: "Newton's First Law is the law of inertia."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "A force of 40 N is applied to a 8 kg object. Calculate its acceleration.",
      type: "multiple_choice",
      options: ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²"],
      answer: "5 m/s²",
      explanation: "a = F/m = 40/8 = 5 m/s²."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the action-reaction pair when a person pushes a wall?",
      type: "multiple_choice",
      options: [
        "Person pushes wall; wall pushes person",
        "Person pushes wall; floor pushes person",
        "Person pushes wall; gravity pulls person",
        "Wall pushes person; gravity pulls wall"
      ],
      answer: "Person pushes wall; wall pushes person",
      explanation: "Newton's Third Law: action and reaction forces are equal and opposite."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "hard",
      question: "A 10 N force moves an object 5 m. Calculate the work done.",
      type: "multiple_choice",
      options: ["25 J", "50 J", "75 J", "100 J"],
      answer: "50 J",
      explanation: "W = F × d = 10 × 5 = 50 J."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "A 2 kg object has a velocity of 4 m/s. Calculate its kinetic energy.",
      type: "multiple_choice",
      options: ["8 J", "16 J", "32 J", "64 J"],
      answer: "16 J",
      explanation: "KE = ½mv² = ½ × 2 × 16 = 16 J."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "A 5 kg object is dropped from a height of 10 m. What is its velocity just before hitting the ground? (g = 10 m/s²)",
      type: "multiple_choice",
      options: ["10 m/s", "14 m/s", "20 m/s", "25 m/s"],
      answer: "14 m/s",
      explanation: "Using v² = u² + 2gh = 0 + 2 × 10 × 10 = 200. v = √200 = 14.14 ≈ 14 m/s."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "A 3 kg object moving at 4 m/s has what momentum?",
      type: "multiple_choice",
      options: ["6 kg·m/s", "8 kg·m/s", "12 kg·m/s", "16 kg·m/s"],
      answer: "12 kg·m/s",
      explanation: "p = mv = 3 × 4 = 12 kg·m/s."
    },
    {
      id: "prac_014",
      objective: "obj_011",
      difficulty: "hard",
      question: "A 2 kg object moving at 6 m/s collides with a 4 kg object at rest. After collision, the 2 kg object stops. Calculate the velocity of the 4 kg object.",
      type: "multiple_choice",
      options: ["2 m/s", "3 m/s", "4 m/s", "6 m/s"],
      answer: "3 m/s",
      explanation: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. 2 × 6 + 4 × 0 = 2 × 0 + 4 × v₂. 12 = 4v₂ → v₂ = 3 m/s."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "Calculate the weight of a 50 kg object. (g = 10 m/s²)",
      type: "multiple_choice",
      options: ["50 N", "100 N", "500 N", "1000 N"],
      answer: "500 N",
      explanation: "W = mg = 50 × 10 = 500 N."
    },
    {
      id: "prac_016",
      objective: "obj_013",
      difficulty: "hard",
      question: "A ball is thrown vertically upward with a velocity of 20 m/s. How high does it rise? (g = 10 m/s²)",
      type: "multiple_choice",
      options: ["10 m", "15 m", "20 m", "25 m"],
      answer: "20 m",
      explanation: "v² = u² + 2as. At maximum height, v = 0. 0 = 400 - 20s. s = 400/20 = 20 m."
    },
    {
      id: "prac_017",
      objective: "obj_014",
      difficulty: "hard",
      question: "A force of 60 N acts on a 12 kg object for 5 seconds. Calculate the impulse.",
      type: "multiple_choice",
      options: ["100 N·s", "200 N·s", "300 N·s", "400 N·s"],
      answer: "300 N·s",
      explanation: "Impulse = F × t = 60 × 5 = 300 N·s."
    },
    {
      id: "prac_018",
      objective: "obj_014",
      difficulty: "hard",
      question: "A 10 kg object is lifted to a height of 5 m. Calculate its potential energy. (g = 10 m/s²)",
      type: "multiple_choice",
      options: ["50 J", "100 J", "250 J", "500 J"],
      answer: "500 J",
      explanation: "PE = mgh = 10 × 10 × 5 = 500 J."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_mechanics",
    title: "Mechanics Quiz",
    description: "Test your understanding of mechanics",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the two main branches of mechanics?",
        type: "short_answer",
        answer_key: "Kinematics and Dynamics",
        explanation: "Kinematics describes motion; dynamics explains motion with forces."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between a scalar and a vector?",
        type: "short_answer",
        answer_key: "Scalars have magnitude only; vectors have magnitude and direction",
        explanation: "Scalars (e.g., mass, speed) have only magnitude; vectors (e.g., velocity, force) have both."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between speed and velocity?",
        type: "short_answer",
        answer_key: "Speed is scalar (magnitude only); velocity is vector (magnitude and direction)",
        explanation: "Speed has only magnitude; velocity has both magnitude and direction."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "A car accelerates from rest at 4 m/s² for 3 seconds. Calculate its final velocity.",
        type: "short_answer",
        answer_key: "12 m/s",
        explanation: "v = u + at = 0 + 4 × 3 = 12 m/s."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "A car accelerates from rest at 3 m/s² for 4 seconds. Calculate the distance traveled.",
        type: "short_answer",
        answer_key: "24 m",
        explanation: "s = ut + ½at² = 0 + ½ × 3 × 16 = 24 m."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "State Newton's First Law of Motion.",
        type: "short_answer",
        answer_key: "An object maintains its velocity unless acted upon by a net external force",
        explanation: "Newton's First Law is the law of inertia."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "State Newton's Second Law of Motion.",
        type: "short_answer",
        answer_key: "F = ma (Force = mass × acceleration)",
        explanation: "Acceleration is directly proportional to net force and inversely proportional to mass."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "medium",
        question: "State Newton's Third Law of Motion.",
        type: "short_answer",
        answer_key: "For every action, there is an equal and opposite reaction",
        explanation: "Action and reaction forces are equal in magnitude and opposite in direction."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "A force of 15 N moves an object 8 m. Calculate the work done.",
        type: "short_answer",
        answer_key: "120 J",
        explanation: "W = F × d = 15 × 8 = 120 J."
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A 4 kg object has a velocity of 5 m/s. Calculate its kinetic energy.",
        type: "short_answer",
        answer_key: "50 J",
        explanation: "KE = ½mv² = ½ × 4 × 25 = 50 J."
      },
      {
        id: "ass_011",
        objective: "obj_010",
        difficulty: "hard",
        question: "A 5 kg object moving at 2 m/s has what momentum?",
        type: "short_answer",
        answer_key: "10 kg·m/s",
        explanation: "p = mv = 5 × 2 = 10 kg·m/s."
      },
      {
        id: "ass_012",
        objective: "obj_012",
        difficulty: "hard",
        question: "Calculate the weight of a 20 kg object. (g = 10 m/s²)",
        type: "short_answer",
        answer_key: "200 N",
        explanation: "W = mg = 20 × 10 = 200 N."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand kinematics and dynamics",
        "Apply equations of motion",
        "Explain Newton's laws",
        "Understand work, energy, and momentum"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is mechanics?" },
        { time: "5-10 min", activity: "Direct Instruction - Scalars and Vectors" },
        { time: "10-15 min", activity: "Direct Instruction - Equations of Motion" },
        { time: "15-20 min", activity: "Direct Instruction - Newton's Laws" },
        { time: "20-25 min", activity: "Direct Instruction - Work and Energy" },
        { time: "25-30 min", activity: "Direct Instruction - Momentum" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Kinematics and Dynamics",
        // ... full answer key
      },
      assessment: {
        ass_001: "Kinematics and Dynamics",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Perform experiments on motion using a stopwatch and ruler",
      "Calculate the acceleration of objects in motion",
      "Research the application of Newton's laws in sports",
      "Build a simple machine to demonstrate work and energy"
    ],
    differentiation: {
      struggling: [
        "Focus on one concept at a time",
        "Use visual diagrams",
        "Practice with simple calculations",
        "Provide a formula sheet"
      ],
      advanced: [
        "Explore projectile motion in detail",
        "Research circular motion and centripetal force",
        "Investigate real-world applications of momentum",
        "Study the work-energy theorem in depth"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Scalars and Vectors",
      description: "Diagram showing scalar and vector quantities",
      url: "/diagrams/scalars-vectors.png",
      alt: "Scalars and vectors diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Equations of Motion",
      description: "Diagram showing SUVAT equations",
      url: "/diagrams/suvat-equations.png",
      alt: "SUVAT equations diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Newton's Laws",
      description: "Diagram explaining Newton's three laws",
      url: "/diagrams/newtons-laws.png",
      alt: "Newton's laws diagram"
    }
  ]
};