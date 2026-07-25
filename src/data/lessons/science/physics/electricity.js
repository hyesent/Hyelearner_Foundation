// Location: src/data/lessons/science/physics/electricity.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_electricity",
  subject: "Physics",
  topic: "Electricity",
  name: "Electricity",
  icon: "⚡",
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
    "Understanding of electric charge",
    "Basic knowledge of circuits",
    "Understanding of current, voltage, and resistance",
    "Basic algebra skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_magnetism",
      name: "Magnetism",
      file: "science/physics/magnetism.js"
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
      description: "Define electric charge and explain its properties",
      indicator: "Student can explain what electric charge is and the difference between positive and negative"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define current, voltage, and resistance",
      indicator: "Student can define current (I), voltage (V), and resistance (R)"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State Ohm's Law",
      indicator: "Student can state V = IR and explain its meaning"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply Ohm's Law to solve problems",
      indicator: "Student can calculate current, voltage, or resistance using V = IR"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain series and parallel circuits",
      indicator: "Student can distinguish between series and parallel connections"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate resistance in series and parallel circuits",
      indicator: "Student can use formulas for equivalent resistance"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain electrical power and energy",
      indicator: "Student can calculate power using P = VI and energy using E = Pt"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Solve complex circuit problems",
      indicator: "Student can analyze circuits with combinations of series and parallel"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain Kirchhoff's laws",
      indicator: "Student can apply Kirchhoff's current and voltage laws"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the relationship between current, voltage, and resistance in circuits",
      indicator: "Student can analyze circuit behavior"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Calculate electrical energy and cost",
      indicator: "Student can calculate energy consumption and cost"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the principles of electrical safety",
      indicator: "Student can explain fuses, circuit breakers, and earthing"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the relationship between power, voltage, and current",
      indicator: "Student can solve power problems"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Evaluate the efficiency of electrical devices",
      indicator: "Student can calculate efficiency"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Electricity - Current, Voltage, and Circuits",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about electric current, voltage, resistance, and circuits."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Electricity?</h2>
      <p><strong>Electricity</strong> is the flow of electric charge. It powers our homes, industries, and technology. Understanding electricity is essential for modern life.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⚡ Current (I)</h3>
          <p>Flow of charge</p>
          <p>Measured in Amperes (A)</p>
          <p><em>I = Q/t</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🔋 Voltage (V)</h3>
          <p>Electrical pressure</p>
          <p>Measured in Volts (V)</p>
          <p><em>Energy per charge</em></p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🔌 Resistance (R)</h3>
          <p>Opposition to current</p>
          <p>Measured in Ohms (Ω)</p>
          <p><em>R = V/I</em></p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 Ohm's Law</h4>
        <p><strong>V = IR</strong></p>
        <ul>
          <li>V = Voltage (Volts)</li>
          <li>I = Current (Amperes)</li>
          <li>R = Resistance (Ohms)</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Electric Charge and Current",
        objective: "obj_001",
        text: `
          <h3>Electric Charge</h3>
          <p><strong>Electric charge</strong> is a fundamental property of matter. There are two types: positive and negative.</p>
          
          <div class="example-box">
            <strong>📌 Key Concepts:</strong>
            <ul>
              <li>✓ Like charges repel; opposite charges attract</li>
              <li>✓ Charge is measured in Coulombs (C)</li>
              <li>✓ Electron charge: -1.6 × 10⁻¹⁹ C</li>
              <li>✓ Proton charge: +1.6 × 10⁻¹⁹ C</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Electric Current:</strong>
            <ul>
              <li>✓ <strong>Current (I):</strong> Rate of flow of charge</li>
              <li>✓ <strong>Formula:</strong> I = Q/t</li>
              <li>✓ Unit: Ampere (A) = 1 C/s</li>
              <li>✓ Conventional current flows from positive to negative</li>
              <li>✓ Electron flow is from negative to positive</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Voltage and Resistance",
        objective: "obj_002",
        text: `
          <h3>Voltage and Resistance</h3>
          <p><strong>Voltage</strong> is the electrical pressure that drives current. <strong>Resistance</strong> is the opposition to current flow.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Voltage (V)</h4>
              <ul>
                <li>✓ Also called potential difference</li>
                <li>✓ Measured in Volts (V)</li>
                <li>✓ 1 V = 1 J/C</li>
                <li>✓ Provided by sources like batteries</li>
                <li>✓ Example: 12 V battery</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Resistance (R)</h4>
              <ul>
                <li>✓ Opposition to current flow</li>
                <li>✓ Measured in Ohms (Ω)</li>
                <li>✓ 1 Ω = 1 V/A</li>
                <li>✓ Depends on material, length, cross-sectional area</li>
                <li>✓ Example: 10 Ω resistor</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Factors Affecting Resistance:</strong>
            <ul>
              <li>✓ <strong>Material:</strong> Metals have low resistance; insulators have high resistance</li>
              <li>✓ <strong>Length:</strong> Resistance increases with length</li>
              <li>✓ <strong>Cross-sectional area:</strong> Resistance decreases with larger area</li>
              <li>✓ <strong>Temperature:</strong> Resistance increases with temperature (for metals)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Ohm's Law",
        objective: "obj_003",
        text: `
          <h3>Ohm's Law</h3>
          <p><strong>Ohm's Law</strong> states that the current through a conductor is directly proportional to the voltage across it, provided the temperature remains constant.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>V = IR</strong></p>
            <ul>
              <li>V = Voltage (V)</li>
              <li>I = Current (A)</li>
              <li>R = Resistance (Ω)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A resistor has a resistance of 10 Ω. A voltage of 50 V is applied. Calculate the current.</li>
              <li><strong>Solution:</strong></li>
              <li>V = IR → I = V/R</li>
              <li>I = 50/10 = 5 A</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A current of 2 A flows through a resistor with a voltage of 12 V. Calculate the resistance.</li>
              <li><strong>Solution:</strong></li>
              <li>R = V/I = 12/2 = 6 Ω</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Series Circuits",
        objective: "obj_005",
        text: `
          <h3>Series Circuits</h3>
          <p>In a <strong>series circuit</strong>, components are connected end-to-end. The same current flows through all components.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Series Circuits:</strong>
            <ul>
              <li>✓ <strong>Current:</strong> Same throughout (I_total = I₁ = I₂ = I₃)</li>
              <li>✓ <strong>Voltage:</strong> Divides (V_total = V₁ + V₂ + V₃)</li>
              <li>✓ <strong>Resistance:</strong> Adds (R_total = R₁ + R₂ + R₃)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Series Resistance:</h4>
            <p><strong>R_total = R₁ + R₂ + R₃ + ...</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Three resistors of 2 Ω, 3 Ω, and 5 Ω are connected in series. Calculate the total resistance.</li>
              <li><strong>Solution:</strong></li>
              <li>R_total = 2 + 3 + 5 = 10 Ω</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Parallel Circuits",
        objective: "obj_005",
        text: `
          <h3>Parallel Circuits</h3>
          <p>In a <strong>parallel circuit</strong>, components are connected across the same voltage source. The voltage is the same across each component.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Parallel Circuits:</strong>
            <ul>
              <li>✓ <strong>Voltage:</strong> Same across each branch (V_total = V₁ = V₂ = V₃)</li>
              <li>✓ <strong>Current:</strong> Divides (I_total = I₁ + I₂ + I₃)</li>
              <li>✓ <strong>Resistance:</strong> Reciprocal adds (1/R_total = 1/R₁ + 1/R₂ + 1/R₃)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Parallel Resistance:</h4>
            <p><strong>1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Calculate the total resistance.</li>
              <li><strong>Solution:</strong></li>
              <li>1/R_total = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1</li>
              <li>R_total = 1 Ω</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Electrical Power and Energy",
        objective: "obj_007",
        text: `
          <h3>Power and Energy</h3>
          <p><strong>Electrical power</strong> is the rate at which electrical energy is converted. <strong>Electrical energy</strong> is the total amount of energy used.</p>
          
          <div class="formula-box">
            <h4>📝 Formulas:</h4>
            <ul>
              <li><strong>P = VI</strong> (Power = Voltage × Current)</li>
              <li><strong>P = I²R</strong> (Power = Current² × Resistance)</li>
              <li><strong>P = V²/R</strong> (Power = Voltage² / Resistance)</li>
              <li><strong>E = Pt</strong> (Energy = Power × Time)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A device uses 240 V and draws 2 A. Calculate the power.</li>
              <li><strong>Solution:</strong></li>
              <li>P = VI = 240 × 2 = 480 W</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A 100 W bulb is used for 5 hours. Calculate the energy used.</li>
              <li><strong>Solution:</strong></li>
              <li>E = Pt = 100 × 5 = 500 Wh = 0.5 kWh</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Kirchhoff's Laws",
        objective: "obj_009",
        text: `
          <h3>Kirchhoff's Laws</h3>
          <p>Kirchhoff's laws are used to analyze complex circuits.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Kirchhoff's Current Law (KCL)</h4>
              <ul>
                <li>✓ The total current entering a junction equals the total current leaving</li>
                <li>✓ <strong>ΣI_in = ΣI_out</strong></li>
                <li>✓ Based on conservation of charge</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Kirchhoff's Voltage Law (KVL)</h4>
              <ul>
                <li>✓ The total voltage around a closed loop is zero</li>
                <li>✓ <strong>ΣV = 0</strong></li>
                <li>✓ Based on conservation of energy</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li>✓ Analyzing complex circuits</li>
              <li>✓ Finding currents and voltages</li>
              <li>✓ Circuit design</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Electrical Safety",
        objective: "obj_012",
        text: `
          <h3>Electrical Safety</h3>
          <p>Understanding electrical safety is essential to prevent accidents.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Safety Devices:</h4>
              <ul>
                <li><strong>Fuse:</strong> Melts to break circuit</li>
                <li><strong>Circuit Breaker:</strong> Automatically opens circuit</li>
                <li><strong>Earth Wire:</strong> Prevents electric shock</li>
                <li><strong>Insulation:</strong> Prevents contact with live wires</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Safety Tips:</h4>
              <ul>
                <li>✓ Never touch exposed wires</li>
                <li>✓ Don't overload sockets</li>
                <li>✓ Use proper insulation</li>
                <li>✓ Keep water away from electricity</li>
                <li>✓ Turn off before maintenance</li>
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
          <h4>⚡ Electricity</h4>
          <ul>
            <li>✓ V = IR (Ohm's Law)</li>
            <li>✓ Series: R_total = R₁ + R₂ + ...</li>
            <li>✓ Parallel: 1/R_total = 1/R₁ + 1/R₂ + ...</li>
            <li>✓ P = VI</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Concepts</h4>
          <ul>
            <li>✓ Current: flow of charge</li>
            <li>✓ Voltage: electrical pressure</li>
            <li>✓ Resistance: opposition to current</li>
            <li>✓ Power: rate of energy use</li>
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
        misconception: "Current and voltage are the same",
        correction: "Current is flow of charge; voltage is electrical pressure",
        explanation: "Voltage drives current; they are different quantities."
      },
      {
        id: "mis_002",
        misconception: "In series circuits, voltage is the same across each component",
        correction: "In series circuits, current is the same; voltage divides",
        explanation: "Voltage divides across components in series; current is constant."
      },
      {
        id: "mis_003",
        misconception: "In parallel circuits, current is the same in each branch",
        correction: "In parallel circuits, voltage is the same; current divides",
        explanation: "Current divides in parallel circuits; voltage is constant."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Power Generation",
        description: "Electricity is generated in power plants.",
        example: "Thermal, hydroelectric, nuclear, and renewable sources."
      },
      {
        id: "app_002",
        title: "Household Appliances",
        description: "Electricity powers our homes.",
        example: "Lighting, heating, cooling, and electronics."
      },
      {
        id: "app_003",
        title: "Transportation",
        description: "Electricity is used in modern vehicles.",
        example: "Electric cars, trains, and trams."
      },
      {
        id: "app_004",
        title: "Communication",
        description: "Electricity powers communication devices.",
        example: "Smartphones, computers, and networks."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Electric Charge", definition: "A fundamental property of matter (positive or negative)." },
    { term: "Current", definition: "The rate of flow of electric charge (I = Q/t)." },
    { term: "Voltage", definition: "The electrical pressure that drives current (potential difference)." },
    { term: "Resistance", definition: "The opposition to the flow of current." },
    { term: "Ohm's Law", definition: "The relationship V = IR." },
    { term: "Series Circuit", definition: "A circuit where components are connected end-to-end." },
    { term: "Parallel Circuit", definition: "A circuit where components are connected across the same voltage." },
    { term: "Electrical Power", definition: "The rate of electrical energy conversion (P = VI)." },
    { term: "Electrical Energy", definition: "Total energy used (E = Pt)." },
    { term: "Kirchhoff's Current Law", definition: "Total current entering a junction equals total leaving." },
    { term: "Kirchhoff's Voltage Law", definition: "The total voltage around a closed loop is zero." },
    { term: "Fuse", definition: "A safety device that melts to break the circuit." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is electric charge?",
      type: "multiple_choice",
      options: [
        "A fundamental property of matter",
        "A type of energy",
        "A form of light",
        "A type of wave"
      ],
      answer: "A fundamental property of matter",
      explanation: "Electric charge is a fundamental property of matter with positive and negative types."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the unit of current?",
      type: "multiple_choice",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: "Ampere",
      explanation: "Current is measured in Amperes (A)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is Ohm's Law?",
      type: "multiple_choice",
      options: ["V = IR", "P = VI", "I = Q/t", "R = ρL/A"],
      answer: "V = IR",
      explanation: "Ohm's Law states that V = IR."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "A resistor has a resistance of 5 Ω. A voltage of 20 V is applied. What is the current?",
      type: "multiple_choice",
      options: ["2 A", "4 A", "5 A", "10 A"],
      answer: "4 A",
      explanation: "I = V/R = 20/5 = 4 A."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "A current of 3 A flows through a resistor with a voltage of 15 V. What is the resistance?",
      type: "multiple_choice",
      options: ["3 Ω", "5 Ω", "15 Ω", "45 Ω"],
      answer: "5 Ω",
      explanation: "R = V/I = 15/3 = 5 Ω."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "In a series circuit, what is the same throughout?",
      type: "multiple_choice",
      options: ["Voltage", "Current", "Resistance", "Power"],
      answer: "Current",
      explanation: "In a series circuit, the current is the same throughout."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "In a parallel circuit, what is the same across each branch?",
      type: "multiple_choice",
      options: ["Current", "Voltage", "Resistance", "Power"],
      answer: "Voltage",
      explanation: "In a parallel circuit, the voltage is the same across each branch."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Three resistors of 2 Ω, 3 Ω, and 5 Ω are connected in series. What is the total resistance?",
      type: "multiple_choice",
      options: ["5 Ω", "8 Ω", "10 Ω", "30 Ω"],
      answer: "10 Ω",
      explanation: "R_total = 2 + 3 + 5 = 10 Ω."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. What is the total resistance?",
      type: "multiple_choice",
      options: ["1 Ω", "2 Ω", "3 Ω", "6 Ω"],
      answer: "1 Ω",
      explanation: "1/R_total = 1/2 + 1/3 + 1/6 = 1. R_total = 1 Ω."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "hard",
      question: "A device uses 240 V and draws 5 A. Calculate the power.",
      type: "multiple_choice",
      options: ["480 W", "960 W", "1200 W", "2400 W"],
      answer: "1200 W",
      explanation: "P = VI = 240 × 5 = 1200 W."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A 60 W bulb is used for 10 hours. Calculate the energy used in kWh.",
      type: "multiple_choice",
      options: ["0.6 kWh", "6 kWh", "60 kWh", "600 kWh"],
      answer: "0.6 kWh",
      explanation: "E = Pt = 60 × 10 = 600 Wh = 0.6 kWh."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Two resistors, 4 Ω and 6 Ω, are in series. This combination is in parallel with a 10 Ω resistor. Calculate the total resistance.",
      type: "multiple_choice",
      options: ["2 Ω", "4 Ω", "5 Ω", "10 Ω"],
      answer: "5 Ω",
      explanation: "R_series = 4 + 6 = 10 Ω. 1/R_total = 1/10 + 1/10 = 2/10 = 1/5. R_total = 5 Ω."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "What does Kirchhoff's Current Law state?",
      type: "multiple_choice",
      options: [
        "Total current entering a junction equals total leaving",
        "Total voltage around a loop is zero",
        "Current is the same in series",
        "Voltage is the same in parallel"
      ],
      answer: "Total current entering a junction equals total leaving",
      explanation: "KCL states that the total current entering a junction equals the total current leaving."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the purpose of a fuse in an electrical circuit?",
      type: "multiple_choice",
      options: [
        "To measure current",
        "To protect against overcurrent by melting",
        "To increase resistance",
        "To store energy"
      ],
      answer: "To protect against overcurrent by melting",
      explanation: "A fuse melts when current exceeds a safe value, breaking the circuit."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "A 2 kW heater is used for 4 hours. If electricity costs N150 per kWh, calculate the cost.",
      type: "multiple_choice",
      options: ["N300", "N600", "N900", "N1200"],
      answer: "N1200",
      explanation: "Energy = 2 × 4 = 8 kWh. Cost = 8 × 150 = N1200."
    },
    {
      id: "prac_016",
      objective: "obj_013",
      difficulty: "hard",
      question: "A device uses 120 V and has a resistance of 40 Ω. Calculate the power.",
      type: "multiple_choice",
      options: ["60 W", "120 W", "240 W", "360 W"],
      answer: "360 W",
      explanation: "P = V²/R = 120²/40 = 14400/40 = 360 W."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_electricity",
    title: "Electricity Quiz",
    description: "Test your understanding of electricity",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is electric charge?",
        type: "short_answer",
        answer_key: "A fundamental property of matter (positive or negative)",
        explanation: "Electric charge is a fundamental property with positive and negative types."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between current, voltage, and resistance?",
        type: "short_answer",
        answer_key: "Current is flow of charge; voltage is electrical pressure; resistance is opposition to current",
        explanation: "Current (I) is flow; voltage (V) is pressure; resistance (R) is opposition."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is Ohm's Law?",
        type: "short_answer",
        answer_key: "V = IR",
        explanation: "Ohm's Law states that V = IR."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "A resistor has a resistance of 8 Ω. A voltage of 24 V is applied. Calculate the current.",
        type: "short_answer",
        answer_key: "3 A",
        explanation: "I = V/R = 24/8 = 3 A."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "A current of 4 A flows through a resistor with a voltage of 20 V. Calculate the resistance.",
        type: "short_answer",
        answer_key: "5 Ω",
        explanation: "R = V/I = 20/4 = 5 Ω."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between series and parallel circuits?",
        type: "short_answer",
        answer_key: "Series: same current, voltage divides. Parallel: same voltage, current divides.",
        explanation: "Series has same current; parallel has same voltage."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "hard",
        question: "Three resistors of 3 Ω, 4 Ω, and 5 Ω are in series. Calculate the total resistance.",
        type: "short_answer",
        answer_key: "12 Ω",
        explanation: "R_total = 3 + 4 + 5 = 12 Ω."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "Three resistors of 4 Ω, 6 Ω, and 12 Ω are in parallel. Calculate the total resistance.",
        type: "short_answer",
        answer_key: "2 Ω",
        explanation: "1/R_total = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2. R_total = 2 Ω."
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "A device uses 230 V and draws 2 A. Calculate the power.",
        type: "short_answer",
        answer_key: "460 W",
        explanation: "P = VI = 230 × 2 = 460 W."
      },
      {
        id: "ass_010",
        objective: "obj_007",
        difficulty: "hard",
        question: "A 100 W bulb is used for 8 hours. Calculate the energy used in kWh.",
        type: "short_answer",
        answer_key: "0.8 kWh",
        explanation: "E = Pt = 100 × 8 = 800 Wh = 0.8 kWh."
      },
      {
        id: "ass_011",
        objective: "obj_009",
        difficulty: "hard",
        question: "What does Kirchhoff's Voltage Law state?",
        type: "short_answer",
        answer_key: "The total voltage around a closed loop is zero",
        explanation: "KVL states that the sum of voltages around a loop is zero."
      },
      {
        id: "ass_012",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the purpose of a circuit breaker?",
        type: "short_answer",
        answer_key: "To automatically break the circuit in case of overcurrent",
        explanation: "Circuit breakers automatically open the circuit when current exceeds safe limits."
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
        "Understand electric charge, current, voltage, and resistance",
        "Apply Ohm's Law",
        "Analyze series and parallel circuits",
        "Understand power and safety"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is electricity?" },
        { time: "5-10 min", activity: "Direct Instruction - Charge, Current, Voltage, Resistance" },
        { time: "10-15 min", activity: "Direct Instruction - Ohm's Law" },
        { time: "15-20 min", activity: "Direct Instruction - Series Circuits" },
        { time: "20-25 min", activity: "Direct Instruction - Parallel Circuits" },
        { time: "25-30 min", activity: "Direct Instruction - Power and Energy" },
        { time: "30-35 min", activity: "Direct Instruction - Kirchhoff's Laws and Safety" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A fundamental property of matter",
        // ... full answer key
      },
      assessment: {
        ass_001: "A fundamental property of matter (positive or negative)",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Build a simple electrical circuit",
      "Measure voltage and current in circuits",
      "Calculate the cost of electricity for household appliances",
      "Research electrical safety devices"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts first",
        "Use visual circuit diagrams",
        "Practice simple calculations",
        "Provide a formula sheet"
      ],
      advanced: [
        "Explore complex circuit analysis",
        "Research electrical power generation",
        "Investigate renewable energy sources",
        "Study the history of electricity"
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
      title: "Ohm's Law",
      description: "Diagram showing V = IR relationship",
      url: "/diagrams/ohms-law.png",
      alt: "Ohm's law diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Series and Parallel Circuits",
      description: "Diagram showing series and parallel circuit configurations",
      url: "/diagrams/series-parallel.png",
      alt: "Series and parallel circuits diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Electrical Formulas",
      description: "Chart of electrical formulas and units",
      url: "/diagrams/electrical-formulas.png",
      alt: "Electrical formulas chart"
    }
  ]
};