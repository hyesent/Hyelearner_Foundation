// Location: src/data/lessons/science/physics/electromagnetic_field.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_electromagnetic_field",
  subject: "Physics",
  topic: "Electromagnetic Field",
  name: "Electromagnetic Field",
  icon: "⚡",
  grade_level: "SS2 - SS3",
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
    "Understanding of electric fields",
    "Knowledge of magnetism and magnetic fields",
    "Understanding of Faraday's Law",
    "Knowledge of current and voltage"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_electromagnetic_waves",
      name: "Electromagnetic Waves",
      file: "science/physics/electromagnetic_waves.js"
    },
    {
      id: "phys_lesson_electricity",
      name: "Electricity",
      file: "science/physics/electricity.js"
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
      description: "Define an electromagnetic field and explain its components",
      indicator: "Student can explain that an EM field consists of electric and magnetic fields"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain electromagnetic induction",
      indicator: "Student can describe how a changing magnetic field induces current"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State Faraday's Law of electromagnetic induction",
      indicator: "Student can state that the induced EMF is proportional to the rate of change of magnetic flux"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain Lenz's Law and its application",
      indicator: "Student can explain that induced current opposes the change that produces it"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the working principle of a transformer",
      indicator: "Student can describe how transformers step up or step down voltage"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply the transformer equation",
      indicator: "Student can use Vp/Vs = Np/Ns to solve problems"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of magnetic flux",
      indicator: "Student can define magnetic flux and explain its importance"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Solve problems involving induced EMF",
      indicator: "Student can calculate induced EMF using Faraday's Law"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the efficiency of transformers",
      indicator: "Student can calculate efficiency and explain energy losses"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concept of mutual and self-induction",
      indicator: "Student can distinguish between self and mutual induction"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the principles of power transmission",
      indicator: "Student can explain why high voltage is used for power transmission"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Solve complex problems involving electromagnetic induction",
      indicator: "Student can solve problems combining multiple concepts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Electromagnetic Field - Induction and Transformers",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about electromagnetic induction, Faraday's Law, Lenz's Law, and transformers."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is an Electromagnetic Field?</h2>
      <p>An <strong>electromagnetic field</strong> is a field that consists of both electric and magnetic field components. A changing magnetic field produces an electric field, and a changing electric field produces a magnetic field. This is the foundation of <strong>electromagnetic induction</strong>.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Key Concepts</h3>
          <ul>
            <li>✓ Electromagnetic induction</li>
            <li>✓ Faraday's Law</li>
            <li>✓ Lenz's Law</li>
            <li>✓ Transformers</li>
            <li>✓ Power transmission</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Applications</h3>
          <ul>
            <li>✓ Electric generators</li>
            <li>✓ Transformers</li>
            <li>✓ Motors</li>
            <li>✓ Power transmission</li>
            <li>✓ Wireless charging</li>
          </ul>
        </div>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Electromagnetic Induction",
        objective: "obj_002",
        text: `
          <h3>What is Electromagnetic Induction?</h3>
          <p><strong>Electromagnetic induction</strong> is the process of producing an electromotive force (EMF) or current in a conductor when it is placed in a changing magnetic field.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ A changing magnetic field induces an EMF in a conductor</li>
              <li>✓ The induced EMF depends on the rate of change of magnetic flux</li>
              <li>✓ A stationary conductor in a constant magnetic field does NOT produce an EMF</li>
              <li>✓ The relative motion between the conductor and magnetic field is essential</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Methods to Induce EMF:</strong>
            <ul>
              <li>1. Move a magnet towards or away from a coil</li>
              <li>2. Move a coil in or out of a magnetic field</li>
              <li>3. Change the strength of the magnetic field</li>
              <li>4. Rotate a coil in a magnetic field (generator)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Faraday's Law of Electromagnetic Induction",
        objective: "obj_003",
        text: `
          <h3>Faraday's Law</h3>
          <p><strong>Faraday's Law</strong> states that the induced EMF in a circuit is equal to the rate of change of magnetic flux through the circuit.</p>
          
          <div class="formula-box">
            <h4>📝 Faraday's Law Formula:</h4>
            <p><strong>ε = -N × ΔΦ/Δt</strong></p>
            <ul>
              <li>ε = induced EMF (volts)</li>
              <li>N = number of turns in the coil</li>
              <li>ΔΦ = change in magnetic flux (webers)</li>
              <li>Δt = change in time (seconds)</li>
              <li>The negative sign indicates Lenz's Law</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Magnetic Flux:</strong>
            <ul>
              <li><strong>Φ = BA cos θ</strong></li>
              <li>Φ = magnetic flux (Wb)</li>
              <li>B = magnetic flux density (T)</li>
              <li>A = area of the coil (m²)</li>
              <li>θ = angle between B and the normal to the coil</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A coil of 100 turns has a magnetic flux changing from 0.5 Wb to 0.2 Wb in 0.1 seconds. Calculate the induced EMF.</li>
              <li><strong>Solution:</strong></li>
              <li>ε = -N × ΔΦ/Δt</li>
              <li>ε = -100 × (0.2 - 0.5)/0.1</li>
              <li>ε = -100 × (-0.3)/0.1</li>
              <li>ε = 100 × 3 = <strong>300 V</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Lenz's Law",
        objective: "obj_004",
        text: `
          <h3>Lenz's Law</h3>
          <p><strong>Lenz's Law</strong> states that the direction of the induced current is such that it opposes the change that produced it.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ The induced current creates a magnetic field that opposes the change in magnetic flux</li>
              <li>✓ If the magnetic flux is increasing, the induced current creates a field that opposes it</li>
              <li>✓ If the magnetic flux is decreasing, the induced current tries to maintain it</li>
              <li>✓ Lenz's Law is derived from the conservation of energy</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Magnet moving into a coil:</strong></li>
              <li>• Magnetic flux increases</li>
              <li>• Induced current creates a field opposing the magnet</li>
              <li>• Repulsive force acts on the magnet</li>
              <li><strong>Magnet moving out of a coil:</strong></li>
              <li>• Magnetic flux decreases</li>
              <li>• Induced current tries to maintain the field</li>
              <li>• Attractive force acts on the magnet</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Transformers",
        objective: "obj_005",
        text: `
          <h3>How Transformers Work</h3>
          <p>A <strong>transformer</strong> is a device that changes the voltage of an alternating current (AC) supply. It uses electromagnetic induction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of a Transformer:</h4>
              <ul>
                <li><strong>Primary Coil:</strong> Input coil, connected to AC supply</li>
                <li><strong>Secondary Coil:</strong> Output coil, connected to the load</li>
                <li><strong>Iron Core:</strong> Laminated iron to concentrate magnetic flux</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Transformers:</h4>
              <ul>
                <li><strong>Step-Up:</strong> Voltage increases (V_s > V_p)</li>
                <li>N_s > N_p</li>
                <li><strong>Step-Down:</strong> Voltage decreases (V_s < V_p)</li>
                <li>N_s < N_p</li>
              </ul>
            </div>
          </div>
          
          <div class="formula-box">
            <h4>📝 Transformer Equation:</h4>
            <p><strong>V_p / V_s = N_p / N_s</strong></p>
            <ul>
              <li>V_p = primary voltage</li>
              <li>V_s = secondary voltage</li>
              <li>N_p = number of turns in primary coil</li>
              <li>N_s = number of turns in secondary coil</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A transformer has 500 turns on the primary coil and 2500 turns on the secondary coil. If the primary voltage is 240 V, what is the secondary voltage?</li>
              <li><strong>Solution:</strong></li>
              <li>V_p / V_s = N_p / N_s</li>
              <li>240 / V_s = 500 / 2500</li>
              <li>V_s = 240 × (2500/500)</li>
              <li>V_s = 240 × 5 = <strong>1200 V</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Power Transmission",
        objective: "obj_011",
        text: `
          <h3>Power Transmission</h3>
          <p>Electric power is transmitted over long distances at <strong>high voltage</strong> and <strong>low current</strong> to minimize energy loss.</p>
          
          <div class="example-box">
            <strong>📌 Why High Voltage?</strong>
            <ul>
              <li>✓ Power = Voltage × Current (P = VI)</li>
              <li>✓ To transmit a given power, high voltage means low current</li>
              <li>✓ Energy loss is I²R (current squared × resistance)</li>
              <li>✓ Low current reduces I²R losses in transmission lines</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Power Transmission Process:</strong>
            <ul>
              <li>1. <strong>Generator</strong> produces electricity at low voltage</li>
              <li>2. <strong>Step-up transformer</strong> increases voltage for transmission</li>
              <li>3. <strong>Transmission lines</strong> carry electricity at high voltage</li>
              <li>4. <strong>Step-down transformer</strong> reduces voltage for use</li>
              <li>5. <strong>Distribution</strong> at safe voltage to consumers</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Energy Losses:</strong>
            <ul>
              <li><strong>Copper losses:</strong> I²R in transmission lines</li>
              <li><strong>Core losses:</strong> Eddy currents and hysteresis in transformers</li>
              <li><strong>Power loss formula:</strong> P_loss = I²R</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Self and Mutual Induction",
        objective: "obj_010",
        text: `
          <h3>Self and Mutual Induction</h3>
          <p><strong>Self-induction</strong> occurs when a changing current in a coil induces an EMF in the same coil. <strong>Mutual induction</strong> occurs when a changing current in one coil induces an EMF in another coil.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Self-Induction</h4>
              <ul>
                <li>✓ Changing current in a coil induces EMF in the same coil</li>
                <li>✓ Opposes the change in current (Lenz's Law)</li>
                <li>✓ Inductance (L) measured in henries (H)</li>
                <li>✓ ε = -L × ΔI/Δt</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mutual Induction</h4>
              <ul>
                <li>✓ Changing current in one coil induces EMF in another coil</li>
                <li>✓ Basis of transformer operation</li>
                <li>✓ Mutual inductance (M) depends on geometry and magnetic coupling</li>
                <li>✓ ε_s = -M × ΔI_p/Δt</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li><strong>Self-induction:</strong> Inductors in circuits, electrical spark plugs</li>
              <li><strong>Mutual induction:</strong> Transformers, wireless charging, magnetic coupling</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Efficiency of Transformers",
        objective: "obj_009",
        text: `
          <h3>Transformer Efficiency</h3>
          <p>Transformer efficiency is the ratio of output power to input power.</p>
          
          <div class="formula-box">
            <h4>📝 Efficiency Formula:</h4>
            <p><strong>η = (P_out / P_in) × 100%</strong></p>
            <ul>
              <li>η = efficiency (percentage)</li>
              <li>P_out = output power (secondary side)</li>
              <li>P_in = input power (primary side)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Energy Losses:</strong>
            <ul>
              <li><strong>Copper losses:</strong> I²R in windings</li>
              <li><strong>Iron losses:</strong> Eddy currents and hysteresis</li>
              <li><strong>Flux leakage:</strong> Magnetic flux not linking both coils</li>
              <li><strong>Heat:</strong> Generated by electrical resistance</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A transformer takes 500 W of power and delivers 450 W to the load. Calculate the efficiency.</li>
              <li><strong>Solution:</strong></li>
              <li>η = (P_out / P_in) × 100%</li>
              <li>η = (450 / 500) × 100%</li>
              <li>η = 0.9 × 100% = <strong>90%</strong></li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⚡ Electromagnetic Induction</h4>
          <ul>
            <li>✓ Faraday's Law: ε = -N × ΔΦ/Δt</li>
            <li>✓ Lenz's Law: induced current opposes change</li>
            <li>✓ Transformers: V_p/V_s = N_p/N_s</li>
            <li>✓ Power transmission: high V, low I</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Equations</h4>
          <ul>
            <li>✓ ε = -N × ΔΦ/Δt</li>
            <li>✓ Φ = BA cos θ</li>
            <li>✓ V_p/V_s = N_p/N_s</li>
            <li>✓ P_loss = I²R</li>
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
        misconception: "A stationary coil in a magnetic field produces current",
        correction: "A changing magnetic field is required for induction",
        explanation: "Stationary conductors in constant magnetic fields do not produce current."
      },
      {
        id: "mis_002",
        misconception: "Transformers work with DC current",
        correction: "Transformers only work with alternating current (AC)",
        explanation: "DC does not produce a changing magnetic flux, so induction does not occur."
      },
      {
        id: "mis_003",
        misconception: "Step-up transformers increase power",
        correction: "Transformers increase voltage but not power (assuming efficiency)",
        explanation: "Power is conserved (P_in = P_out in ideal transformers)."
      },
      {
        id: "mis_004",
        misconception: "The induced EMF is always in the same direction",
        correction: "The induced EMF opposes the change that produced it",
        explanation: "Lenz's Law dictates the direction of induced EMF."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Power Generation",
        description: "Electromagnetic induction is used in generators to produce electricity.",
        example: "Power plants use generators to convert mechanical energy to electrical energy."
      },
      {
        id: "app_002",
        title: "Power Transmission",
        description: "Transformers allow efficient transmission of electrical power.",
        example: "Step-up transformers increase voltage for transmission; step-down transformers reduce it for use."
      },
      {
        id: "app_003",
        title: "Induction Cooking",
        description: "Induction cooktops use electromagnetic induction to heat cookware.",
        example: "A changing magnetic field induces currents in the pan, heating it."
      },
      {
        id: "app_004",
        title: "Wireless Charging",
        description: "Mutual induction is used in wireless charging devices.",
        example: "Phones and electric toothbrushes use induction for wireless charging."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Electromagnetic Induction", definition: "The production of an EMF by a changing magnetic field." },
    { term: "Faraday's Law", definition: "The induced EMF is proportional to the rate of change of magnetic flux." },
    { term: "Lenz's Law", definition: "The induced current opposes the change that produces it." },
    { term: "Magnetic Flux", definition: "The product of magnetic field strength and area (Φ = BA cos θ)." },
    { term: "Transformer", definition: "A device that changes voltage using electromagnetic induction." },
    { term: "Step-up Transformer", definition: "A transformer that increases voltage (N_s > N_p)." },
    { term: "Step-down Transformer", definition: "A transformer that decreases voltage (N_s < N_p)." },
    { term: "Self-Induction", definition: "Induction of EMF in a coil by a changing current in the same coil." },
    { term: "Mutual Induction", definition: "Induction of EMF in one coil by a changing current in another." },
    { term: "Power Transmission", definition: "The transfer of electrical power over long distances." }
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
      question: "What is an electromagnetic field?",
      type: "multiple_choice",
      options: [
        "A field consisting of both electric and magnetic components",
        "A field that only has electric components",
        "A field that only has magnetic components",
        "A field that has no components"
      ],
      answer: "A field consisting of both electric and magnetic components",
      explanation: "An electromagnetic field consists of both electric and magnetic field components."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is electromagnetic induction?",
      type: "multiple_choice",
      options: [
        "The production of a magnetic field by a changing electric field",
        "The production of an EMF by a changing magnetic field",
        "The production of a magnetic field by a stationary charge",
        "The production of heat by a current"
      ],
      answer: "The production of an EMF by a changing magnetic field",
      explanation: "Electromagnetic induction is the process of producing an EMF in a conductor when the magnetic flux changes."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does Faraday's Law state?",
      type: "multiple_choice",
      options: [
        "The induced EMF is equal to the magnetic field strength",
        "The induced EMF is proportional to the rate of change of magnetic flux",
        "The induced current is independent of the magnetic field",
        "The magnetic field is always constant"
      ],
      answer: "The induced EMF is proportional to the rate of change of magnetic flux",
      explanation: "Faraday's Law states that the induced EMF is proportional to the rate of change of magnetic flux."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does Lenz's Law state?",
      type: "multiple_choice",
      options: [
        "The induced current is in the same direction as the change",
        "The induced current opposes the change that produces it",
        "The induced current is independent of the change",
        "The induced current is always zero"
      ],
      answer: "The induced current opposes the change that produces it",
      explanation: "Lenz's Law states that the induced current flows in a direction that opposes the change that produced it."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a transformer?",
      type: "multiple_choice",
      options: [
        "A device that converts AC to DC",
        "A device that changes the voltage of an AC supply",
        "A device that generates electricity",
        "A device that stores electrical energy"
      ],
      answer: "A device that changes the voltage of an AC supply",
      explanation: "A transformer is a device that changes the voltage of an alternating current supply."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "A transformer has 200 turns on the primary and 600 turns on the secondary. If the primary voltage is 120 V, what is the secondary voltage?",
      type: "multiple_choice",
      options: [
        "120 V",
        "240 V",
        "360 V",
        "480 V"
      ],
      answer: "360 V",
      explanation: "Using V_p/V_s = N_p/N_s: 120/V_s = 200/600, V_s = 120 × 3 = 360 V."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "A step-down transformer has 1000 turns on the primary and 50 turns on the secondary. If the primary voltage is 240 V, what is the secondary voltage?",
      type: "multiple_choice",
      options: [
        "12 V",
        "24 V",
        "48 V",
        "60 V"
      ],
      answer: "12 V",
      explanation: "V_s = V_p × (N_s/N_p) = 240 × (50/1000) = 240 × 0.05 = 12 V."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is magnetic flux?",
      type: "multiple_choice",
      options: [
        "The strength of the magnetic field only",
        "The product of magnetic field strength and area perpendicular to the field",
        "The distance between magnetic poles",
        "The current in a coil"
      ],
      answer: "The product of magnetic field strength and area perpendicular to the field",
      explanation: "Magnetic flux (Φ) = BA cos θ, where B is magnetic field strength, A is area, and θ is the angle between B and the normal to the area."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "hard",
      question: "Which type of transformer increases voltage?",
      type: "multiple_choice",
      options: [
        "Step-down transformer",
        "Step-up transformer",
        "Isolation transformer",
        "Auto transformer"
      ],
      answer: "Step-up transformer",
      explanation: "A step-up transformer increases voltage (secondary voltage > primary voltage)."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "hard",
      question: "A coil of 50 turns has a magnetic flux changing from 0.8 Wb to 0.2 Wb in 0.05 seconds. Calculate the induced EMF.",
      type: "multiple_choice",
      options: [
        "400 V",
        "600 V",
        "800 V",
        "1000 V"
      ],
      answer: "600 V",
      explanation: "ε = -N × ΔΦ/Δt = -50 × (0.2 - 0.8)/0.05 = -50 × (-0.6)/0.05 = 50 × 12 = 600 V."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "A coil of 200 turns experiences a change in magnetic flux of 0.5 Wb in 0.1 seconds. What is the induced EMF?",
      type: "multiple_choice",
      options: [
        "500 V",
        "1000 V",
        "1500 V",
        "2000 V"
      ],
      answer: "1000 V",
      explanation: "ε = -N × ΔΦ/Δt = -200 × 0.5/0.1 = -200 × 5 = 1000 V."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "A transformer delivers 800 W of power with an input power of 1000 W. Calculate the efficiency.",
      type: "multiple_choice",
      options: [
        "80%",
        "85%",
        "90%",
        "95%"
      ],
      answer: "80%",
      explanation: "η = (P_out/P_in) × 100% = (800/1000) × 100% = 80%."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between self-induction and mutual induction?",
      type: "multiple_choice",
      options: [
        "Self-induction occurs in one coil; mutual induction occurs between two coils",
        "Self-induction occurs with DC; mutual induction occurs with AC",
        "Self-induction is stronger than mutual induction",
        "There is no difference"
      ],
      answer: "Self-induction occurs in one coil; mutual induction occurs between two coils",
      explanation: "Self-induction is induced EMF in the same coil; mutual induction is induced EMF in a different coil."
    },
    {
      id: "prac_014",
      objective: "obj_011",
      difficulty: "hard",
      question: "Why is electricity transmitted at high voltage?",
      type: "multiple_choice",
      options: [
        "To increase current",
        "To reduce energy loss in transmission lines",
        "To increase power",
        "To reduce voltage"
      ],
      answer: "To reduce energy loss in transmission lines",
      explanation: "High voltage and low current reduce I²R losses in transmission lines."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "A transformer has an efficiency of 95%. If the input power is 2000 W, what is the output power?",
      type: "multiple_choice",
      options: [
        "1900 W",
        "1950 W",
        "2000 W",
        "2100 W"
      ],
      answer: "1900 W",
      explanation: "P_out = P_in × η = 2000 × 0.95 = 1900 W."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "A power line carries 100 A at 11 kV. What is the power being transmitted?",
      type: "multiple_choice",
      options: [
        "0.11 MW",
        "1.1 MW",
        "11 MW",
        "110 MW"
      ],
      answer: "1.1 MW",
      explanation: "P = VI = 11,000 × 100 = 1,100,000 W = 1.1 MW."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_electromagnetic_field",
    title: "Electromagnetic Field Quiz",
    description: "Test your understanding of electromagnetic fields",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is an electromagnetic field?",
        type: "short_answer",
        answer_key: "A field consisting of both electric and magnetic field components",
        explanation: "An electromagnetic field has both electric and magnetic field components."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is electromagnetic induction?",
        type: "short_answer",
        answer_key: "The production of an EMF by a changing magnetic field",
        explanation: "Electromagnetic induction is the process of producing an EMF in a conductor when the magnetic flux changes."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "State Faraday's Law of electromagnetic induction.",
        type: "short_answer",
        answer_key: "The induced EMF is proportional to the rate of change of magnetic flux",
        explanation: "Faraday's Law relates induced EMF to the rate of change of magnetic flux."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "State Lenz's Law.",
        type: "short_answer",
        answer_key: "The induced current opposes the change that produces it",
        explanation: "Lenz's Law states that induced current flows in a direction that opposes the change that produced it."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a transformer and what does it do?",
        type: "short_answer",
        answer_key: "A device that changes the voltage of an AC supply",
        explanation: "A transformer uses electromagnetic induction to change voltage in an AC circuit."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Write the transformer equation.",
        type: "short_answer",
        answer_key: "V_p/V_s = N_p/N_s",
        explanation: "The transformer equation relates primary and secondary voltages to the number of turns."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "hard",
        question: "A transformer has 300 turns on the primary and 900 turns on the secondary. If V_p = 120 V, find V_s.",
        type: "short_answer",
        answer_key: "360 V",
        explanation: "V_s = V_p × (N_s/N_p) = 120 × (900/300) = 120 × 3 = 360 V."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "A coil of 100 turns has a magnetic flux changing from 1.2 Wb to 0.4 Wb in 0.2 seconds. Calculate the induced EMF.",
        type: "short_answer",
        answer_key: "400 V",
        explanation: "ε = -N × ΔΦ/Δt = -100 × (0.4 - 1.2)/0.2 = -100 × (-0.8)/0.2 = 100 × 4 = 400 V."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Why is power transmitted at high voltage?",
        type: "short_answer",
        answer_key: "To reduce energy loss (I²R) in transmission lines",
        explanation: "High voltage and low current reduce I²R losses in transmission lines."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A transformer has an input of 1500 W and outputs 1350 W. Calculate the efficiency.",
        type: "short_answer",
        answer_key: "90%",
        explanation: "η = (P_out/P_in) × 100% = (1350/1500) × 100% = 90%."
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
        "Understand electromagnetic induction",
        "Apply Faraday's and Lenz's Laws",
        "Understand transformers and power transmission"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is electromagnetic induction?" },
        { time: "5-10 min", activity: "Direct Instruction - Faraday's Law" },
        { time: "10-15 min", activity: "Direct Instruction - Lenz's Law" },
        { time: "15-20 min", activity: "Direct Instruction - Transformers" },
        { time: "20-25 min", activity: "Direct Instruction - Power Transmission" },
        { time: "25-30 min", activity: "Direct Instruction - Self and Mutual Induction" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A field consisting of both electric and magnetic components",
        // ... full answer key
      },
      assessment: {
        ass_001: "A field consisting of both electric and magnetic field components",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research how generators work using electromagnetic induction",
      "Investigate the efficiency of different transformers",
      "Explore the history of Faraday's discovery",
      "Calculate power losses in transmission lines"
    ],
    differentiation: {
      struggling: [
        "Focus on the basic concepts first",
        "Use visual diagrams",
        "Practice with simple calculations",
        "Provide worked examples"
      ],
      advanced: [
        "Research advanced transformer designs",
        "Explore Tesla coil principles",
        "Calculate energy losses in power systems",
        "Investigate superconducting transmission"
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
      title: "Electromagnetic Induction",
      description: "Diagram showing electromagnetic induction in a coil",
      url: "/diagrams/electromagnetic-induction.png",
      alt: "Electromagnetic induction diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Transformer Operation",
      description: "Diagram showing how a transformer works",
      url: "/diagrams/transformer-operation.png",
      alt: "Transformer operation diagram"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Power Transmission System",
      description: "Infographic showing the power transmission process",
      url: "/diagrams/power-transmission.png",
      alt: "Power transmission infographic"
    }
  ]
};