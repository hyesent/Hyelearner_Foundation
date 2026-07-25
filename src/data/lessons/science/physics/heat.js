// Location: src/data/lessons/science/physics/heat.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_heat",
  subject: "Physics",
  topic: "Heat",
  name: "Heat",
  icon: "🔥",
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
    "Understanding of measurements",
    "Basic knowledge of temperature",
    "Understanding of energy concepts",
    "Basic algebra skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_waves",
      name: "Waves",
      file: "science/physics/waves.js"
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
      description: "Define heat and temperature and explain the difference",
      indicator: "Student can distinguish between heat and temperature"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the three methods of heat transfer",
      indicator: "Student can list conduction, convection, and radiation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain thermal expansion and its applications",
      indicator: "Student can describe how materials expand when heated"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain conduction and factors affecting it",
      indicator: "Student can describe how heat is conducted through solids"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain convection and its applications",
      indicator: "Student can describe how heat is transferred in fluids"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain radiation and its properties",
      indicator: "Student can describe how heat is transferred by electromagnetic waves"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of specific heat capacity",
      indicator: "Student can calculate heat energy using Q = mcΔθ"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply the principle of heat exchange",
      indicator: "Student can solve problems using the principle of conservation of heat"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain latent heat and phase changes",
      indicator: "Student can calculate heat energy during phase changes"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Solve complex heat transfer problems",
      indicator: "Student can combine specific heat and latent heat concepts"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the gas laws (Boyle's, Charles', Pressure Law)",
      indicator: "Student can apply the gas laws to solve problems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze heat transfer in real-world applications",
      indicator: "Student can explain heat transfer in everyday situations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Heat - Temperature, Transfer, and Thermodynamics",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about heat, temperature, methods of heat transfer, and the gas laws."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Heat?</h2>
      <p><strong>Heat</strong> is a form of energy that flows from a region of higher temperature to a region of lower temperature. <strong>Temperature</strong> is a measure of the average kinetic energy of particles in a substance.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Heat</h3>
          <ul>
            <li>✓ Form of energy</li>
            <li>✓ Flows from hot to cold</li>
            <li>✓ Measured in Joules (J)</li>
            <li>✓ Depends on mass and material</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Temperature</h3>
          <ul>
            <li>✓ Measure of hotness/coldness</li>
            <li>✓ Average kinetic energy</li>
            <li>✓ Measured in Kelvin (K) or °C</li>
            <li>✓ Independent of mass</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Heat Transfer</h4>
        <ul>
          <li><strong>Conduction:</strong> Transfer through solids</li>
          <li><strong>Convection:</strong> Transfer through fluids</li>
          <li><strong>Radiation:</strong> Transfer through electromagnetic waves</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Heat vs Temperature",
        objective: "obj_001",
        text: `
          <h3>Heat vs Temperature</h3>
          <p>Understanding the difference between heat and temperature is essential in physics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Heat</h4>
              <ul>
                <li>✓ Energy transferred</li>
                <li>✓ Flows from hot to cold</li>
                <li>✓ Measured in Joules (J)</li>
                <li>✓ Depends on mass, specific heat capacity, and temperature change</li>
                <li><strong>Example:</strong> Boiling water on a stove</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Temperature</h4>
              <ul>
                <li>✓ Level of hotness/coldness</li>
                <li>✓ Measure of average kinetic energy</li>
                <li>✓ Measured in Kelvin (K) or Celsius (°C)</li>
                <li>✓ Independent of mass</li>
                <li><strong>Example:</strong> The reading on a thermometer</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Conduction",
        objective: "obj_004",
        text: `
          <h3>Conduction</h3>
          <p><strong>Conduction</strong> is the transfer of heat through a material without the material itself moving. It occurs mainly in solids.</p>
          
          <div class="example-box">
            <strong>📌 How Conduction Works:</strong>
            <ul>
              <li>✓ Heat is transferred by vibrating particles</li>
              <li>✓ Particles gain kinetic energy and pass it to neighboring particles</li>
              <li>✓ Best conductors: metals (copper, aluminum, iron)</li>
              <li>✓ Poor conductors (insulators): wood, rubber, glass, air</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Factors Affecting Conduction:</strong>
            <ul>
              <li>✓ <strong>Material:</strong> Metals conduct better than non-metals</li>
              <li>✓ <strong>Area:</strong> Larger area increases heat transfer</li>
              <li>✓ <strong>Length:</strong> Longer length reduces heat transfer</li>
              <li>✓ <strong>Temperature difference:</strong> Greater difference increases transfer</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ A metal spoon getting hot when left in a hot drink</li>
              <li>✓ A cooking pan heating up on a stove</li>
              <li>✓ An iron heating up when switched on</li>
              <li>✓ Ice melting in your hand</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Convection",
        objective: "obj_005",
        text: `
          <h3>Convection</h3>
          <p><strong>Convection</strong> is the transfer of heat through a fluid (liquid or gas) by the movement of the fluid itself.</p>
          
          <div class="example-box">
            <strong>📌 How Convection Works:</strong>
            <ul>
              <li>✓ Fluid is heated → expands → becomes less dense</li>
              <li>✓ Less dense fluid rises</li>
              <li>✓ Cooler, denser fluid sinks to take its place</li>
              <li>✓ This creates a convection current</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ Boiling water in a pot</li>
              <li>✓ Hot air rising from a heater</li>
              <li>✓ Wind and ocean currents</li>
              <li>✓ Cooling of a hot drink</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Note:</strong> Convection only occurs in fluids (liquids and gases), not in solids.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Radiation",
        objective: "obj_006",
        text: `
          <h3>Radiation</h3>
          <p><strong>Radiation</strong> is the transfer of heat through electromagnetic waves. It does not require a medium.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Heat is transferred by infrared radiation</li>
              <li>✓ Can travel through a vacuum</li>
              <li>✓ All objects emit radiation</li>
              <li>✓ Dark, dull surfaces absorb and emit more radiation</li>
              <li>✓ Light, shiny surfaces reflect radiation</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ Heat from the sun reaching Earth</li>
              <li>✓ Heat from a fire felt from a distance</li>
              <li>✓ A hot object cooling in a vacuum</li>
              <li>✓ Heat from a radiator</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Specific Heat Capacity",
        objective: "obj_007",
        text: `
          <h3>Specific Heat Capacity</h3>
          <p><strong>Specific heat capacity</strong> is the amount of heat energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K).</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Q = mcΔθ</strong></p>
            <ul>
              <li>Q = heat energy (J)</li>
              <li>m = mass (kg)</li>
              <li>c = specific heat capacity (J/kg·°C)</li>
              <li>Δθ = change in temperature (°C)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Specific Heat Capacities:</strong>
            <ul>
              <li>Water: 4200 J/kg·°C</li>
              <li>Ice: 2100 J/kg·°C</li>
              <li>Aluminum: 900 J/kg·°C</li>
              <li>Copper: 385 J/kg·°C</li>
              <li>Iron: 450 J/kg·°C</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> How much heat is required to raise the temperature of 2 kg of water from 20°C to 80°C? (c = 4200 J/kg·°C)</li>
              <li><strong>Solution:</strong></li>
              <li>Q = mcΔθ = 2 × 4200 × (80 - 20)</li>
              <li>Q = 2 × 4200 × 60 = 504,000 J</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Latent Heat",
        objective: "obj_009",
        text: `
          <h3>Latent Heat</h3>
          <p><strong>Latent heat</strong> is the heat energy absorbed or released during a change of state without a change in temperature.</p>
          
          <div class="formula-box">
            <h4>📝 Formulas:</h4>
            <ul>
              <li><strong>Q = mL</strong></li>
              <li>Q = heat energy (J)</li>
              <li>m = mass (kg)</li>
              <li>L = specific latent heat (J/kg)</li>
              <li><strong>Latent heat of fusion:</strong> solid → liquid</li>
              <li><strong>Latent heat of vaporization:</strong> liquid → gas</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Latent Heat Values:</strong>
            <ul>
              <li>Water (fusion): 3.34 × 10⁵ J/kg</li>
              <li>Water (vaporization): 2.26 × 10⁶ J/kg</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> How much heat is required to melt 2 kg of ice at 0°C? (L_f = 3.34 × 10⁵ J/kg)</li>
              <li><strong>Solution:</strong></li>
              <li>Q = mL = 2 × 3.34 × 10⁵ = 6.68 × 10⁵ J</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Gas Laws",
        objective: "obj_011",
        text: `
          <h3>Gas Laws</h3>
          <p>The gas laws describe the behavior of ideal gases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Boyle's Law</h4>
              <ul>
                <li>✓ At constant temperature, pressure × volume is constant</li>
                <li>✓ P₁V₁ = P₂V₂</li>
                <li>✓ As pressure increases, volume decreases</li>
                <li>✓ (Inverse relationship)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Charles' Law</h4>
              <ul>
                <li>✓ At constant pressure, volume ÷ temperature is constant</li>
                <li>✓ V₁/T₁ = V₂/T₂</li>
                <li>✓ As temperature increases, volume increases</li>
                <li>✓ (Direct relationship)</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Pressure Law</h4>
              <ul>
                <li>✓ At constant volume, pressure ÷ temperature is constant</li>
                <li>✓ P₁/T₁ = P₂/T₂</li>
                <li>✓ As temperature increases, pressure increases</li>
                <li>✓ (Direct relationship)</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 General Gas Law</h4>
              <ul>
                <li>✓ Combines all three laws</li>
                <li>✓ (P₁V₁)/T₁ = (P₂V₂)/T₂</li>
                <li>✓ Temperature must be in Kelvin</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔥 Heat</h4>
          <ul>
            <li>✓ Heat is energy; temperature is a measure</li>
            <li>✓ Conduction, convection, radiation</li>
            <li>✓ Specific heat capacity: Q = mcΔθ</li>
            <li>✓ Latent heat: Q = mL</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Gas Laws</h4>
          <ul>
            <li>✓ Boyle: P₁V₁ = P₂V₂</li>
            <li>✓ Charles: V₁/T₁ = V₂/T₂</li>
            <li>✓ Pressure Law: P₁/T₁ = P₂/T₂</li>
            <li>✓ General: (P₁V₁)/T₁ = (P₂V₂)/T₂</li>
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
        misconception: "Heat and temperature are the same",
        correction: "Heat is energy; temperature is a measure of average kinetic energy",
        explanation: "A small cup of boiling water has less heat than a large pot of warm water, but higher temperature."
      },
      {
        id: "mis_002",
        misconception: "Radiation is the same as radioactive radiation",
        correction: "Thermal radiation is infrared radiation, not nuclear radiation",
        explanation: "Thermal radiation is electromagnetic waves; radioactive radiation involves nuclear decay."
      },
      {
        id: "mis_003",
        misconception: "All substances expand when heated",
        correction: "Most substances expand, but some contract (e.g., water from 0°C to 4°C)",
        explanation: "Water is anomalous - it contracts from 0°C to 4°C."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Home Insulation",
        description: "Understanding heat transfer helps design energy-efficient homes.",
        example: "Insulation reduces conduction; double glazing reduces radiation."
      },
      {
        id: "app_002",
        title: "Cooking",
        description: "Heat transfer methods are used in cooking.",
        example: "Conduction (frying pan), convection (boiling), radiation (grilling)."
      },
      {
        id: "app_003",
        title: "Engines",
        description: "Heat engines convert thermal energy to mechanical work.",
        example: "Car engines use heat from fuel combustion."
      },
      {
        id: "app_004",
        title: "Meteorology",
        description: "Heat transfer drives weather patterns.",
        example: "Convection currents cause winds and ocean currents."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Heat", definition: "The transfer of thermal energy from a hotter to a colder body." },
    { term: "Temperature", definition: "A measure of the average kinetic energy of particles." },
    { term: "Conduction", definition: "Heat transfer through a material without movement of the material." },
    { term: "Convection", definition: "Heat transfer through the movement of a fluid." },
    { term: "Radiation", definition: "Heat transfer through electromagnetic waves." },
    { term: "Specific Heat Capacity", definition: "Heat required to raise 1 kg by 1°C." },
    { term: "Latent Heat", definition: "Heat absorbed or released during a change of state." },
    { term: "Thermal Expansion", definition: "The increase in size of a material when heated." },
    { term: "Boyle's Law", definition: "P₁V₁ = P₂V₂ at constant temperature." },
    { term: "Charles' Law", definition: "V₁/T₁ = V₂/T₂ at constant pressure." },
    { term: "Pressure Law", definition: "P₁/T₁ = P₂/T₂ at constant volume." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the difference between heat and temperature?",
      type: "multiple_choice",
      options: [
        "Heat is measured in °C; temperature is measured in J",
        "Heat is energy; temperature is a measure of average kinetic energy",
        "They are the same thing",
        "Temperature is energy; heat is a measure"
      ],
      answer: "Heat is energy; temperature is a measure of average kinetic energy",
      explanation: "Heat is a form of energy; temperature is a measure of how hot or cold something is."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the three methods of heat transfer?",
      type: "multiple_choice",
      options: [
        "Conduction, Convection, Radiation",
        "Kinetic, Potential, Thermal",
        "Friction, Radiation, Conduction",
        "Expansion, Contraction, Convection"
      ],
      answer: "Conduction, Convection, Radiation",
      explanation: "The three methods of heat transfer are conduction, convection, and radiation."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What happens to most materials when they are heated?",
      type: "multiple_choice",
      options: [
        "They contract",
        "They expand",
        "They stay the same",
        "They become heavier"
      ],
      answer: "They expand",
      explanation: "Most materials expand when heated (thermal expansion)."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which material is a good conductor of heat?",
      type: "multiple_choice",
      options: ["Wood", "Copper", "Rubber", "Plastic"],
      answer: "Copper",
      explanation: "Copper is a metal and a good conductor of heat."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convection occurs in which states of matter?",
      type: "multiple_choice",
      options: ["Solids only", "Liquids and gases", "Solids and liquids", "Gases only"],
      answer: "Liquids and gases",
      explanation: "Convection occurs in fluids (liquids and gases)."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which type of heat transfer does not require a medium?",
      type: "multiple_choice",
      options: ["Conduction", "Convection", "Radiation", "All of them"],
      answer: "Radiation",
      explanation: "Radiation can travel through a vacuum and does not require a medium."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "A 1 kg block of aluminum is heated, raising its temperature by 10°C. How much heat is absorbed? (c = 900 J/kg·°C)",
      type: "multiple_choice",
      options: ["900 J", "9000 J", "90 J", "90000 J"],
      answer: "9000 J",
      explanation: "Q = mcΔθ = 1 × 900 × 10 = 9000 J."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "How much heat is required to raise the temperature of 2 kg of water by 5°C? (c = 4200 J/kg·°C)",
      type: "multiple_choice",
      options: ["42000 J", "21000 J", "8400 J", "16800 J"],
      answer: "42000 J",
      explanation: "Q = mcΔθ = 2 × 4200 × 5 = 42000 J."
    },
    {
      id: "prac_009",
      objective: "obj_008",
      difficulty: "hard",
      question: "A metal rod has a temperature difference of 50°C between its ends. How much heat is conducted through it?",
      type: "multiple_choice",
      options: [
        "Depends on the material and dimensions",
        "Depends only on the temperature difference",
        "Cannot be determined without more information",
        "Heat is always the same"
      ],
      answer: "Cannot be determined without more information",
      explanation: "Heat conduction depends on material, area, length, and temperature difference."
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "hard",
      question: "How much heat is required to melt 0.5 kg of ice at 0°C? (L_f = 3.34 × 10⁵ J/kg)",
      type: "multiple_choice",
      options: [
        "1.67 × 10⁵ J",
        "3.34 × 10⁵ J",
        "6.68 × 10⁵ J",
        "4.00 × 10⁵ J"
      ],
      answer: "1.67 × 10⁵ J",
      explanation: "Q = mL = 0.5 × 3.34 × 10⁵ = 1.67 × 10⁵ J."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "A gas has a pressure of 100 kPa and a volume of 2 m³. If the pressure increases to 200 kPa at constant temperature, what is the new volume? (Boyle's Law)",
      type: "multiple_choice",
      options: ["1 m³", "2 m³", "3 m³", "4 m³"],
      answer: "1 m³",
      explanation: "P₁V₁ = P₂V₂. 100 × 2 = 200 × V₂. V₂ = 200/200 = 1 m³."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "A gas has a volume of 4 m³ at 300 K. What is the volume at 450 K at constant pressure? (Charles' Law)",
      type: "multiple_choice",
      options: ["4 m³", "5 m³", "6 m³", "8 m³"],
      answer: "6 m³",
      explanation: "V₁/T₁ = V₂/T₂. 4/300 = V₂/450. V₂ = (4 × 450)/300 = 6 m³."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "How much heat is required to convert 0.1 kg of ice at 0°C to steam at 100°C? (L_f = 3.34 × 10⁵ J/kg, L_v = 2.26 × 10⁶ J/kg, c = 4200 J/kg·°C)",
      type: "multiple_choice",
      options: [
        "2.6 × 10⁵ J",
        "2.6 × 10⁶ J",
        "3.0 × 10⁵ J",
        "4.0 × 10⁵ J"
      ],
      answer: "3.0 × 10⁵ J",
      explanation: "Heat = melting + heating + vaporization. Q = mL_f + mcΔθ + mL_v = 0.1(3.34×10⁵ + 4200×100 + 2.26×10⁶) = 3.0 × 10⁵ J."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why do dark surfaces absorb more heat than light surfaces?",
      type: "multiple_choice",
      options: [
        "They reflect more radiation",
        "They absorb more radiation",
        "They are better conductors",
        "They are better insulators"
      ],
      answer: "They absorb more radiation",
      explanation: "Dark, dull surfaces are better absorbers and emitters of radiation than light, shiny surfaces."
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "A 0.5 kg block of copper at 100°C is placed in water. The copper cools to 25°C. How much heat is lost by the copper? (c = 385 J/kg·°C)",
      type: "multiple_choice",
      options: [
        "14437.5 J",
        "15000 J",
        "10000 J",
        "5000 J"
      ],
      answer: "14437.5 J",
      explanation: "Q = mcΔθ = 0.5 × 385 × (100 - 25) = 0.5 × 385 × 75 = 14437.5 J."
    },
    {
      id: "prac_016",
      objective: "obj_008",
      difficulty: "hard",
      question: "A 0.2 kg piece of metal at 200°C is placed in 0.5 kg of water at 20°C. The final temperature is 30°C. What is the specific heat capacity of the metal? (c_water = 4200 J/kg·°C)",
      type: "multiple_choice",
      options: [
        "180 J/kg·°C",
        "360 J/kg·°C",
        "420 J/kg·°C",
        "540 J/kg·°C"
      ],
      answer: "360 J/kg·°C",
      explanation: "Heat lost by metal = Heat gained by water. m_m c_m (200-30) = m_w c_w (30-20). 0.2 × c_m × 170 = 0.5 × 4200 × 10. c_m = 21000/58.82 = 357.14 ≈ 360 J/kg·°C."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_heat",
    title: "Heat Quiz",
    description: "Test your understanding of heat and heat transfer",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between heat and temperature?",
        type: "short_answer",
        answer_key: "Heat is energy; temperature is a measure of average kinetic energy",
        explanation: "Heat is a form of energy; temperature measures how hot or cold something is."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the three methods of heat transfer?",
        type: "short_answer",
        answer_key: "Conduction, convection, radiation",
        explanation: "Heat is transferred by conduction, convection, and radiation."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What happens to most materials when they are heated?",
        type: "short_answer",
        answer_key: "They expand",
        explanation: "Most materials expand when heated (thermal expansion)."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is conduction and what are good conductors?",
        type: "short_answer",
        answer_key: "Heat transfer through solids; metals are good conductors",
        explanation: "Conduction is heat transfer through a material without the material moving."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is convection and where does it occur?",
        type: "short_answer",
        answer_key: "Heat transfer through fluid movement; occurs in liquids and gases",
        explanation: "Convection is heat transfer through the movement of a fluid."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is radiation and does it require a medium?",
        type: "short_answer",
        answer_key: "Heat transfer through electromagnetic waves; does not require a medium",
        explanation: "Radiation can travel through a vacuum and does not need a medium."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the formula for specific heat capacity?",
        type: "short_answer",
        answer_key: "Q = mcΔθ",
        explanation: "Heat energy = mass × specific heat capacity × change in temperature."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "How much heat is required to raise the temperature of 3 kg of water by 10°C? (c = 4200 J/kg·°C)",
        type: "short_answer",
        answer_key: "126,000 J",
        explanation: "Q = mcΔθ = 3 × 4200 × 10 = 126,000 J."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is latent heat and when is it involved?",
        type: "short_answer",
        answer_key: "Heat absorbed or released during a change of state without a temperature change",
        explanation: "Latent heat is involved in phase changes (melting, boiling, etc.)."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is Boyle's Law?",
        type: "short_answer",
        answer_key: "At constant temperature, pressure × volume is constant (P₁V₁ = P₂V₂)",
        explanation: "Boyle's Law states that pressure and volume are inversely proportional at constant temperature."
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
        "Understand heat and temperature",
        "Explain methods of heat transfer",
        "Apply specific heat and latent heat concepts",
        "Understand the gas laws"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is heat?" },
        { time: "5-10 min", activity: "Direct Instruction - Heat vs Temperature" },
        { time: "10-15 min", activity: "Direct Instruction - Heat Transfer Methods" },
        { time: "15-20 min", activity: "Direct Instruction - Specific Heat Capacity" },
        { time: "20-25 min", activity: "Direct Instruction - Latent Heat" },
        { time: "25-30 min", activity: "Direct Instruction - Gas Laws" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Heat is energy; temperature is a measure of average kinetic energy",
        // ... full answer key
      },
      assessment: {
        ass_001: "Heat is energy; temperature is a measure of average kinetic energy",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Measure the specific heat capacity of a metal",
      "Observe convection currents in water",
      "Investigate the expansion of metals when heated",
      "Research the application of the gas laws in daily life"
    ],
    differentiation: {
      struggling: [
        "Focus on one heat transfer method at a time",
        "Use visual aids",
        "Practice simple calculations",
        "Provide a formula sheet"
      ],
      advanced: [
        "Research heat transfer in real-world applications",
        "Explore thermodynamics in depth",
        "Investigate the kinetic theory of gases",
        "Study thermal expansion in engineering"
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
      title: "Heat Transfer Methods",
      description: "Diagram showing conduction, convection, and radiation",
      url: "/diagrams/heat-transfer.png",
      alt: "Heat transfer methods diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Specific Heat Capacities",
      description: "Chart of specific heat capacities of common substances",
      url: "/diagrams/specific-heat.png",
      alt: "Specific heat capacities chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Gas Laws",
      description: "Diagram showing Boyle's, Charles', and Pressure Laws",
      url: "/diagrams/gas-laws.png",
      alt: "Gas laws diagram"
    }
  ]
};