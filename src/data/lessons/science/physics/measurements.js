// Location: src/data/lessons/science/physics/measurements.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_measurements",
  subject: "Physics",
  topic: "Measurements",
  name: "Measurements",
  icon: "📏",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Basic arithmetic skills",
    "Understanding of decimals and fractions",
    "Knowledge of basic units",
    "Familiarity with measuring instruments"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_mechanics",
      name: "Mechanics",
      file: "science/physics/mechanics.js"
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
      description: "Define measurement and explain its importance",
      indicator: "Student can explain why measurement is essential in physics"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the fundamental quantities and their SI units",
      indicator: "Student can list the seven fundamental quantities"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State the SI units for length, mass, and time",
      indicator: "Student can recall meter, kilogram, and second as base units"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the difference between fundamental and derived quantities",
      indicator: "Student can distinguish between fundamental and derived quantities"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use prefixes in measurements (kilo, centi, milli, etc.)",
      indicator: "Student can convert between units using prefixes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Measure length, mass, and time using appropriate instruments",
      indicator: "Student can use rulers, balances, and stopwatches correctly"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of measurement errors",
      indicator: "Student can identify and explain systematic and random errors"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Calculate percentage error in measurements",
      indicator: "Student can calculate percentage error using the formula"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Express measurements in standard form (scientific notation)",
      indicator: "Student can convert numbers to and from standard form"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Determine the density of objects using measurements",
      indicator: "Student can calculate density from mass and volume measurements"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the precision and accuracy of measurements",
      indicator: "Student can distinguish between precision and accuracy"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Solve complex problems involving unit conversions",
      indicator: "Student can perform multi-step unit conversions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Measurements in Physics",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about measurements, SI units, errors, and significant figures in physics."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Measurements?</h2>
      <p><strong>Measurement</strong> is the process of assigning a number to a physical quantity using a standard unit. It is the foundation of all scientific investigation and everyday life.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Fundamental Quantities</h3>
          <ul>
            <li>✓ Length (meter)</li>
            <li>✓ Mass (kilogram)</li>
            <li>✓ Time (second)</li>
            <li>✓ Electric current (ampere)</li>
            <li>✓ Temperature (kelvin)</li>
            <li>✓ Amount of substance (mole)</li>
            <li>✓ Luminous intensity (candela)</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Derived Quantities</h3>
          <ul>
            <li>✓ Speed (m/s)</li>
            <li>✓ Force (Newton)</li>
            <li>✓ Energy (Joule)</li>
            <li>✓ Pressure (Pascal)</li>
            <li>✓ Power (Watt)</li>
            <li>✓ Density (kg/m³)</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 SI System</h4>
        <p>The <strong>International System of Units (SI)</strong> is the standard system of measurement used worldwide.</p>
        <ul>
          <li>✓ Meter (m) for length</li>
          <li>✓ Kilogram (kg) for mass</li>
          <li>✓ Second (s) for time</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Fundamental Quantities and SI Units",
        objective: "obj_002",
        text: `
          <h3>Fundamental Quantities</h3>
          <p><strong>Fundamental quantities</strong> are basic quantities that cannot be expressed in terms of other quantities.</p>
          
          <div class="example-box">
            <strong>📌 The Seven Fundamental Quantities:</strong>
            <table class="w-full text-sm">
              <tr><th>Quantity</th><th>SI Unit</th><th>Symbol</th></tr>
              <tr><td>Length</td><td>meter</td><td>m</td></tr>
              <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
              <tr><td>Time</td><td>second</td><td>s</td></tr>
              <tr><td>Electric Current</td><td>ampere</td><td>A</td></tr>
              <tr><td>Temperature</td><td>kelvin</td><td>K</td></tr>
              <tr><td>Amount of Substance</td><td>mole</td><td>mol</td></tr>
              <tr><td>Luminous Intensity</td><td>candela</td><td>cd</td></tr>
            </table>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Derived Quantities",
        objective: "obj_004",
        text: `
          <h3>Derived Quantities</h3>
          <p><strong>Derived quantities</strong> are quantities that are expressed in terms of fundamental quantities.</p>
          
          <div class="example-box">
            <strong>📌 Examples of Derived Quantities:</strong>
            <table class="w-full text-sm">
              <tr><th>Derived Quantity</th><th>Formula</th><th>SI Unit</th></tr>
              <tr><td>Area</td><td>Length × Length</td><td>m²</td></tr>
              <tr><td>Volume</td><td>Length × Length × Length</td><td>m³</td></tr>
              <tr><td>Speed</td><td>Length / Time</td><td>m/s</td></tr>
              <tr><td>Acceleration</td><td>Speed / Time</td><td>m/s²</td></tr>
              <tr><td>Force</td><td>Mass × Acceleration</td><td>kg·m/s² (N)</td></tr>
              <tr><td>Pressure</td><td>Force / Area</td><td>N/m² (Pa)</td></tr>
              <tr><td>Energy</td><td>Force × Distance</td><td>N·m (J)</td></tr>
              <tr><td>Power</td><td>Energy / Time</td><td>J/s (W)</td></tr>
            </table>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "SI Prefixes",
        objective: "obj_005",
        text: `
          <h3>SI Prefixes</h3>
          <p><strong>SI prefixes</strong> are used to express very large or very small quantities in a convenient way.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Multiples (Large):</h4>
              <ul>
                <li><strong>tera (T):</strong> 10¹²</li>
                <li><strong>giga (G):</strong> 10⁹</li>
                <li><strong>mega (M):</strong> 10⁶</li>
                <li><strong>kilo (k):</strong> 10³</li>
                <li><strong>hecto (h):</strong> 10²</li>
                <li><strong>deka (da):</strong> 10¹</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Submultiples (Small):</h4>
              <ul>
                <li><strong>deci (d):</strong> 10⁻¹</li>
                <li><strong>centi (c):</strong> 10⁻²</li>
                <li><strong>milli (m):</strong> 10⁻³</li>
                <li><strong>micro (µ):</strong> 10⁻⁶</li>
                <li><strong>nano (n):</strong> 10⁻⁹</li>
                <li><strong>pico (p):</strong> 10⁻¹²</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>1 kilometer (km) = 1000 meters = 10³ m</li>
              <li>1 centimeter (cm) = 0.01 meters = 10⁻² m</li>
              <li>1 millimeter (mm) = 0.001 meters = 10⁻³ m</li>
              <li>1 micrometer (µm) = 10⁻⁶ m</li>
              <li>1 nanosecond (ns) = 10⁻⁹ s</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Measurement Instruments",
        objective: "obj_006",
        text: `
          <h3>Measuring Instruments</h3>
          <p>Different instruments are used to measure different physical quantities.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📏 Length</h4>
              <ul>
                <li><strong>Ruler/Meter rule:</strong> up to 1 m</li>
                <li><strong>Vernier caliper:</strong> 0.01 mm precision</li>
                <li><strong>Micrometer screw gauge:</strong> 0.001 mm precision</li>
                <li><strong>Measuring tape:</strong> up to several meters</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>⚖️ Mass</h4>
              <ul>
                <li><strong>Balance scale:</strong> for comparing masses</li>
                <li><strong>Digital balance:</strong> electronic reading</li>
                <li><strong>Spring balance:</strong> measures force/mass</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>⏱️ Time</h4>
              <ul>
                <li><strong>Stopwatch:</strong> 0.01 s precision</li>
                <li><strong>Digital timer:</strong> accurate and precise</li>
                <li><strong>Clock:</strong> for everyday time</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Measurement Errors",
        objective: "obj_007",
        text: `
          <h3>Errors in Measurement</h3>
          <p>No measurement is perfectly accurate. Understanding errors is essential for reliable results.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Systematic Errors:</h4>
              <ul>
                <li>✓ Consistent and repeatable</li>
                <li>✓ Caused by faulty equipment</li>
                <li>✓ Can be corrected</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Zero error in instruments</li>
                  <li>Parallax error</li>
                  <li>Calibration errors</li>
                </ul>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Random Errors:</h4>
              <ul>
                <li>✓ Inconsistent and unpredictable</li>
                <li>✓ Caused by human error</li>
                <li>✓ Can be reduced by averaging</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Reaction time errors</li>
                  <li>Environmental changes</li>
                  <li>Judgement errors</li>
                </ul>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Precision and Accuracy",
        objective: "obj_011",
        text: `
          <h3>Precision vs Accuracy</h3>
          <p>It's important to understand the difference between precision and accuracy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Accuracy</h4>
              <ul>
                <li>✓ How close a measurement is to the true value</li>
                <li>✓ Affected by systematic errors</li>
                <li>✓ "Hitting the bullseye"</li>
                <li>✓ Can be improved with calibration</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Precision</h4>
              <ul>
                <li>✓ How close measurements are to each other</li>
                <li>✓ Affected by random errors</li>
                <li>✓ "Hitting the same spot repeatedly"</li>
                <li>✓ Can be improved with more measurements</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>True value:</strong> 10.00 cm</li>
              <li><strong>Measurement 1:</strong> 10.02, 10.03, 10.01 (Precise but not accurate)</li>
              <li><strong>Measurement 2:</strong> 10.10, 9.90, 10.05 (Accurate but not precise)</li>
              <li><strong>Measurement 3:</strong> 10.00, 10.00, 10.00 (Both accurate and precise)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Percentage Error",
        objective: "obj_008",
        text: `
          <h3>Percentage Error</h3>
          <p><strong>Percentage error</strong> expresses the error as a percentage of the true value.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>% Error = (|Measured Value - True Value| / True Value) × 100%</strong></p>
            <p><strong>% Error = (Error / True Value) × 100%</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> The true length of a table is 2.00 m. A student measures it as 2.05 m. Calculate the percentage error.</li>
              <li><strong>Solution:</strong></li>
              <li>Error = |2.05 - 2.00| = 0.05 m</li>
              <li>% Error = (0.05 / 2.00) × 100%</li>
              <li>% Error = 2.5%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Density",
        objective: "obj_010",
        text: `
          <h3>Density</h3>
          <p><strong>Density</strong> is the mass per unit volume of a substance.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>ρ = m / V</strong></p>
            <ul>
              <li>ρ (rho) = density (kg/m³)</li>
              <li>m = mass (kg)</li>
              <li>V = volume (m³)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A cube of metal has mass 270 g and volume 100 cm³. Calculate the density in kg/m³.</li>
              <li><strong>Solution:</strong></li>
              <li>m = 270 g = 0.270 kg</li>
              <li>V = 100 cm³ = 100 × 10⁻⁶ m³ = 1.0 × 10⁻⁴ m³</li>
              <li>ρ = 0.270 / (1.0 × 10⁻⁴)</li>
              <li>ρ = 2700 kg/m³</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📏 Measurements</h4>
          <ul>
            <li>✓ 7 fundamental quantities</li>
            <li>✓ SI units are standard</li>
            <li>✓ Prefixes for large/small values</li>
            <li>✓ Instruments for measurement</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Concepts</h4>
          <ul>
            <li>✓ Accuracy vs Precision</li>
            <li>✓ Systematic vs Random errors</li>
            <li>✓ Percentage error calculation</li>
            <li>✓ Density = mass/volume</li>
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
        misconception: "Mass and weight are the same",
        correction: "Mass is amount of matter; weight is force due to gravity",
        explanation: "Mass is constant; weight changes with gravity."
      },
      {
        id: "mis_002",
        misconception: "All measurements are exact",
        correction: "All measurements have some degree of error",
        explanation: "No measurement is perfect due to limitations of instruments and human factors."
      },
      {
        id: "mis_003",
        misconception: "Precision and accuracy are the same",
        correction: "Precision is consistency; accuracy is closeness to true value",
        explanation: "You can be precise without being accurate."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Construction",
        description: "Measurements are essential in building and construction.",
        example: "Building dimensions, material quantities, and structural calculations."
      },
      {
        id: "app_002",
        title: "Medicine",
        description: "Measurements are crucial for diagnosis and treatment.",
        example: "Blood pressure, temperature, dosage calculations."
      },
      {
        id: "app_003",
        title: "Science and Research",
        description: "Accurate measurements are the foundation of scientific research.",
        example: "Experimental data collection and analysis."
      },
      {
        id: "app_004",
        title: "Everyday Life",
        description: "We use measurements daily without thinking.",
        example: "Cooking, shopping, travel, and time management."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Measurement", definition: "The process of assigning a number to a physical quantity." },
    { term: "Fundamental Quantity", definition: "A basic quantity that cannot be expressed in terms of others." },
    { term: "Derived Quantity", definition: "A quantity expressed in terms of fundamental quantities." },
    { term: "SI Unit", definition: "The standard unit of measurement in the International System." },
    { term: "Accuracy", definition: "How close a measurement is to the true value." },
    { term: "Precision", definition: "How close repeated measurements are to each other." },
    { term: "Systematic Error", definition: "A consistent error caused by faulty equipment or technique." },
    { term: "Random Error", definition: "An unpredictable error caused by human or environmental factors." },
    { term: "Density", definition: "Mass per unit volume (ρ = m/V)." },
    { term: "Standard Form", definition: "A number written as A × 10ⁿ where 1 ≤ A < 10." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is measurement?",
      type: "multiple_choice",
      options: [
        "The process of guessing a quantity",
        "The process of assigning a number to a physical quantity",
        "The process of comparing two objects",
        "The process of estimating"
      ],
      answer: "The process of assigning a number to a physical quantity",
      explanation: "Measurement is the process of assigning a number to a physical quantity using a standard unit."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How many fundamental quantities are there?",
      type: "multiple_choice",
      options: ["5", "7", "9", "10"],
      answer: "7",
      explanation: "There are seven fundamental quantities in the SI system."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the SI unit for length?",
      type: "multiple_choice",
      options: ["kilogram", "meter", "second", "ampere"],
      answer: "meter",
      explanation: "The SI unit for length is the meter (m)."
    },
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert 5.0 km to meters.",
      type: "multiple_choice",
      options: ["50 m", "500 m", "5000 m", "50000 m"],
      answer: "5000 m",
      explanation: "1 km = 1000 m, so 5.0 km = 5.0 × 1000 = 5000 m."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert 250 cm to meters.",
      type: "multiple_choice",
      options: ["2.5 m", "25 m", "0.25 m", "250 m"],
      answer: "2.5 m",
      explanation: "1 cm = 0.01 m, so 250 cm = 250 × 0.01 = 2.5 m."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which type of error is consistent and repeatable?",
      type: "multiple_choice",
      options: ["Random error", "Systematic error", "Human error", "Measurement error"],
      answer: "Systematic error",
      explanation: "Systematic errors are consistent and repeatable due to faulty equipment or technique."
    },
    {
      id: "prac_007",
      objective: "obj_011",
      difficulty: "medium",
      question: "What is the difference between accuracy and precision?",
      type: "multiple_choice",
      options: [
        "Accuracy is consistency; precision is closeness to true value",
        "Accuracy is closeness to true value; precision is consistency",
        "They are the same",
        "They are opposites"
      ],
      answer: "Accuracy is closeness to true value; precision is consistency",
      explanation: "Accuracy refers to how close measurements are to the true value, while precision refers to how close measurements are to each other."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "A student measured the length of a table as 1.98 m. The true value is 2.00 m. What is the percentage error?",
      type: "multiple_choice",
      options: ["0.5%", "1.0%", "2.0%", "1.5%"],
      answer: "1.0%",
      explanation: "Error = |1.98 - 2.00| = 0.02 m. % Error = (0.02 / 2.00) × 100% = 1.0%."
    },
    {
      id: "prac_009",
      objective: "obj_008",
      difficulty: "hard",
      question: "A student measured a length as 5.2 cm. The true value is 5.0 cm. What is the percentage error?",
      type: "multiple_choice",
      options: ["2%", "4%", "6%", "8%"],
      answer: "4%",
      explanation: "Error = |5.2 - 5.0| = 0.2 cm. % Error = (0.2 / 5.0) × 100% = 4%."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "A substance has a mass of 180 g and a volume of 60 cm³. What is its density in g/cm³?",
      type: "multiple_choice",
      options: ["2 g/cm³", "3 g/cm³", "4 g/cm³", "5 g/cm³"],
      answer: "3 g/cm³",
      explanation: "ρ = m/V = 180/60 = 3 g/cm³."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "A block of metal has mass 540 g and volume 200 cm³. What is its density in kg/m³?",
      type: "multiple_choice",
      options: ["2700 kg/m³", "3000 kg/m³", "2500 kg/m³", "2800 kg/m³"],
      answer: "2700 kg/m³",
      explanation: "m = 540 g = 0.540 kg. V = 200 cm³ = 200 × 10⁻⁶ m³ = 2.0 × 10⁻⁴ m³. ρ = 0.540 / (2.0 × 10⁻⁴) = 2700 kg/m³."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Express 0.000025 in standard form.",
      type: "multiple_choice",
      options: ["2.5 × 10⁻⁶", "2.5 × 10⁻⁵", "2.5 × 10⁻⁴", "2.5 × 10⁻⁷"],
      answer: "2.5 × 10⁻⁵",
      explanation: "0.000025 = 2.5 × 10⁻⁵."
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "Which instrument would give the most precise measurement of length?",
      type: "multiple_choice",
      options: ["Meter rule", "Vernier caliper", "Micrometer screw gauge", "Measuring tape"],
      answer: "Micrometer screw gauge",
      explanation: "A micrometer screw gauge measures to 0.001 mm, the highest precision."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "Convert 72 km/h to m/s.",
      type: "multiple_choice",
      options: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"],
      answer: "20 m/s",
      explanation: "72 km/h = 72 × (1000/3600) = 72 × (5/18) = 20 m/s."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "If a series of measurements are close to each other but far from the true value, they are:",
      type: "multiple_choice",
      options: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Both accurate and precise",
        "Neither accurate nor precise"
      ],
      answer: "Precise but not accurate",
      explanation: "Closeness to each other indicates precision; distance from true value indicates lack of accuracy."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "Convert 2.5 hours to seconds.",
      type: "multiple_choice",
      options: ["6000 s", "7500 s", "9000 s", "10000 s"],
      answer: "9000 s",
      explanation: "2.5 h = 2.5 × 60 × 60 = 2.5 × 3600 = 9000 s."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_measurements",
    title: "Measurements Quiz",
    description: "Test your understanding of measurements in physics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is measurement?",
        type: "short_answer",
        answer_key: "The process of assigning a number to a physical quantity",
        explanation: "Measurement is the process of assigning a number to a physical quantity using a standard unit."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "List the seven fundamental quantities.",
        type: "short_answer",
        answer_key: "Length, mass, time, electric current, temperature, amount of substance, luminous intensity",
        explanation: "The seven fundamental quantities are length, mass, time, electric current, temperature, amount of substance, and luminous intensity."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the SI unit for mass?",
        type: "short_answer",
        answer_key: "kilogram (kg)",
        explanation: "The SI unit for mass is the kilogram (kg)."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the difference between fundamental and derived quantities?",
        type: "short_answer",
        answer_key: "Fundamental quantities are basic; derived quantities are expressed in terms of fundamental quantities",
        explanation: "Fundamental quantities cannot be expressed in terms of others, while derived quantities are combinations of fundamental quantities."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert 3.5 km to meters.",
        type: "short_answer",
        answer_key: "3500 m",
        explanation: "3.5 km = 3.5 × 1000 = 3500 m."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the difference between systematic and random errors?",
        type: "short_answer",
        answer_key: "Systematic errors are consistent; random errors are unpredictable",
        explanation: "Systematic errors are consistent and repeatable, while random errors are inconsistent and unpredictable."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "A student measured a length as 15.2 cm. The true value is 15.0 cm. Calculate the percentage error.",
        type: "short_answer",
        answer_key: "1.33%",
        explanation: "Error = |15.2 - 15.0| = 0.2 cm. % Error = (0.2/15.0) × 100% = 1.33%."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "A substance has mass 120 g and volume 40 cm³. What is its density in g/cm³?",
        type: "short_answer",
        answer_key: "3 g/cm³",
        explanation: "ρ = m/V = 120/40 = 3 g/cm³."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the difference between accuracy and precision?",
        type: "short_answer",
        answer_key: "Accuracy is closeness to the true value; precision is consistency of measurements",
        explanation: "Accuracy refers to how close a measurement is to the true value, while precision refers to how close repeated measurements are to each other."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Convert 36 km/h to m/s.",
        type: "short_answer",
        answer_key: "10 m/s",
        explanation: "36 km/h = 36 × (1000/3600) = 36 × (5/18) = 10 m/s."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "45 minutes",
      objectives: [
        "Understand measurement and SI units",
        "Distinguish between fundamental and derived quantities",
        "Perform unit conversions",
        "Calculate errors and density"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is measurement?" },
        { time: "5-10 min", activity: "Direct Instruction - Fundamental Quantities" },
        { time: "10-15 min", activity: "Direct Instruction - Derived Quantities and Prefixes" },
        { time: "15-20 min", activity: "Direct Instruction - Instruments and Errors" },
        { time: "20-25 min", activity: "Direct Instruction - Accuracy and Precision" },
        { time: "25-30 min", activity: "Direct Instruction - Density" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The process of assigning a number to a physical quantity",
        // ... full answer key
      },
      assessment: {
        ass_001: "The process of assigning a number to a physical quantity",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Measure the dimensions of objects in your classroom",
      "Calculate the density of different materials",
      "Research the history of measurement units",
      "Compare different measurement systems"
    ],
    differentiation: {
      struggling: [
        "Focus on basic units first",
        "Use visual aids for conversions",
        "Practice simple calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the history of the SI system",
        "Explore precision measurements in science",
        "Calculate uncertainties in measurements",
        "Investigate measurement in different fields"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "chart",
      title: "SI Units",
      description: "Chart of SI units and symbols",
      url: "/diagrams/si-units.png",
      alt: "SI units chart"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Measurement Instruments",
      description: "Diagram showing common measuring instruments",
      url: "/diagrams/measurement-instruments.png",
      alt: "Measurement instruments diagram"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Errors in Measurement",
      description: "Infographic on systematic and random errors",
      url: "/diagrams/measurement-errors.png",
      alt: "Measurement errors infographic"
    }
  ]
};