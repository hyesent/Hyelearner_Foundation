// Location: src/data/lessons/science/physics/energy_quantization.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_energy_quantization",
  subject: "Physics",
  topic: "Energy Quantization and X-rays",
  name: "Energy Quantization and X-rays",
  icon: "💡",
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
    "Understanding of atomic structure",
    "Knowledge of Bohr's model",
    "Understanding of electromagnetic waves",
    "Basic knowledge of energy and frequency"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_energy_and_society",
      name: "Energy and Society",
      file: "science/physics/energy_and_society.js"
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
      description: "Explain the concept of energy quantization",
      indicator: "Student can explain that energy exists in discrete packets called quanta"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define a photon and explain its properties",
      indicator: "Student can describe a photon as a quantum of electromagnetic energy"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State Planck's equation and its significance",
      indicator: "Student can recall E = hf and explain its meaning"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the photoelectric effect",
      indicator: "Student can describe how light can eject electrons from a surface"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the concept of work function",
      indicator: "Student can define work function and explain its importance"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the production of X-rays",
      indicator: "Student can explain how X-rays are produced in an X-ray tube"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the properties of X-rays",
      indicator: "Student can describe the properties and uses of X-rays"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply Planck's equation to solve problems",
      indicator: "Student can calculate energy, frequency, and wavelength using E = hf and E = hc/λ"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the photoelectric effect",
      indicator: "Student can explain the relationship between frequency, energy, and electron emission"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the difference between characteristic and bremsstrahlung X-rays",
      indicator: "Student can distinguish between the two types of X-rays"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the applications and hazards of X-rays",
      indicator: "Student can describe medical uses and safety precautions"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Solve complex problems involving photoelectric effect",
      indicator: "Student can calculate kinetic energy of emitted electrons"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Energy Quantization and X-rays",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about quantum energy, the photoelectric effect, and X-ray production."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Energy Quantization?</h2>
      <p><strong>Energy quantization</strong> is the concept that energy exists in discrete packets or "quanta" rather than continuous amounts. This revolutionary idea was introduced by <strong>Max Planck</strong> in 1900.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Classical View</h3>
          <p>Energy is continuous</p>
          <p>Can have any value</p>
          <p>Any frequency is possible</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Quantum View</h3>
          <p>Energy is quantized</p>
          <p>Only specific values allowed</p>
          <p>Energy is emitted in packets (quanta)</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Planck's Quantum Theory</h4>
        <p><strong>E = hf</strong></p>
        <ul>
          <li>E = Energy of a photon (J)</li>
          <li>h = Planck's constant (6.63 × 10⁻³⁴ J·s)</li>
          <li>f = Frequency (Hz)</li>
        </ul>
        <p><em>Energy is directly proportional to frequency.</em></p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Photon",
        objective: "obj_002",
        text: `
          <h3>What is a Photon?</h3>
          <p>A <strong>photon</strong> is a quantum of electromagnetic energy. It is the smallest unit of light or other electromagnetic radiation.</p>
          
          <div class="example-box">
            <strong>📌 Key Properties of Photons:</strong>
            <ul>
              <li>✓ No mass</li>
              <li>✓ Travels at the speed of light (c = 3.0 × 10⁸ m/s)</li>
              <li>✓ Energy depends on frequency: E = hf</li>
              <li>✓ Energy depends on wavelength: E = hc/λ</li>
              <li>✓ Behaves as both a particle and a wave</li>
              <li>✓ Can be absorbed or emitted by atoms</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Photon Energy Equations:</h4>
            <ul>
              <li><strong>E = hf</strong></li>
              <li><strong>E = hc/λ</strong></li>
              <li>h = 6.63 × 10⁻³⁴ J·s</li>
              <li>c = 3.0 × 10⁸ m/s</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Calculate the energy of a photon with frequency 5.0 × 10¹⁴ Hz.</li>
              <li><strong>Solution:</strong></li>
              <li>E = hf = (6.63 × 10⁻³⁴)(5.0 × 10¹⁴)</li>
              <li>E = 3.32 × 10⁻¹⁹ J</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Photoelectric Effect",
        objective: "obj_004",
        text: `
          <h3>The Photoelectric Effect</h3>
          <p>The <strong>photoelectric effect</strong> is the emission of electrons from a metal surface when light (or electromagnetic radiation) shines on it.</p>
          
          <div class="example-box">
            <strong>📌 Key Observations:</strong>
            <ul>
              <li>✓ Electrons are only emitted if the light frequency is above a threshold</li>
              <li>✓ Increasing intensity increases the number of electrons</li>
              <li>✓ Increasing frequency increases the kinetic energy of electrons</li>
              <li>✓ Electrons are emitted instantly</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Einstein's Explanation:</strong>
            <ul>
              <li>✓ Light consists of photons with energy E = hf</li>
              <li>✓ An electron requires a minimum energy to escape (work function, φ)</li>
              <li>✓ If hf > φ, electrons are emitted</li>
              <li>✓ Excess energy becomes kinetic energy: E_k = hf - φ</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Photoelectric Equation:</h4>
            <p><strong>E_k = hf - φ</strong></p>
            <ul>
              <li>E_k = kinetic energy of emitted electron (J)</li>
              <li>h = Planck's constant</li>
              <li>f = frequency of incident light (Hz)</li>
              <li>φ = work function (minimum energy to release electron)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Work Function",
        objective: "obj_005",
        text: `
          <h3>Work Function (φ)</h3>
          <p>The <strong>work function</strong> is the minimum energy required to remove an electron from a metal surface.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ Each metal has a unique work function</li>
              <li>✓ Measured in electron volts (eV) or Joules (J)</li>
              <li>✓ 1 eV = 1.6 × 10⁻¹⁹ J</li>
              <li>✓ If hf < φ, no electrons are emitted</li>
              <li>✓ If hf = φ, electrons are emitted with zero kinetic energy</li>
              <li>✓ If hf > φ, electrons are emitted with kinetic energy</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples of Work Functions:</strong>
            <ul>
              <li><strong>Sodium:</strong> 2.28 eV</li>
              <li><strong>Potassium:</strong> 2.30 eV</li>
              <li><strong>Aluminum:</strong> 4.28 eV</li>
              <li><strong>Copper:</strong> 4.65 eV</li>
              <li><strong>Gold:</strong> 5.10 eV</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A metal has a work function of 3.0 eV. What is the threshold frequency?</li>
              <li><strong>Solution:</strong></li>
              <li>φ = 3.0 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J</li>
              <li>f₀ = φ/h = (4.8 × 10⁻¹⁹)/(6.63 × 10⁻³⁴)</li>
              <li>f₀ = 7.24 × 10¹⁴ Hz</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Production of X-rays",
        objective: "obj_006",
        text: `
          <h3>How X-rays are Produced</h3>
          <p><strong>X-rays</strong> are produced when high-speed electrons collide with a metal target in an X-ray tube.</p>
          
          <div class="example-box">
            <strong>📌 X-ray Tube Components:</strong>
            <ul>
              <li><strong>Cathode:</strong> Emits electrons (filament)</li>
              <li><strong>Anode:</strong> Metal target (usually tungsten or molybdenum)</li>
              <li><strong>High voltage:</strong> Accelerates electrons</li>
              <li><strong>Vacuum:</strong> Allows electrons to travel without collisions</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Process:</strong>
            <ul>
              <li>1. Electrons are emitted from the cathode</li>
              <li>2. High voltage accelerates electrons</li>
              <li>3. High-speed electrons hit the anode</li>
              <li>4. X-rays are produced in two ways:</li>
              <ul>
                <li>Bremsstrahlung (braking radiation)</li>
                <li>Characteristic X-rays</li>
              </ul>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Bremsstrahlung X-rays",
        objective: "obj_010",
        text: `
          <h3>Bremsstrahlung Radiation</h3>
          <p><strong>Bremsstrahlung</strong> (German for "braking radiation") occurs when electrons are decelerated or deflected by the nucleus.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Produces a continuous spectrum of X-rays</li>
              <li>✓ Energy varies from 0 to maximum</li>
              <li>✓ Maximum energy = kinetic energy of electron</li>
              <li>✓ Intensity increases with electron energy</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Energy of Bremsstrahlung:</strong>
            <ul>
              <li>✓ E = qV (electron accelerated through voltage V)</li>
              <li>✓ Maximum energy: E_max = eV</li>
              <li>✓ Minimum wavelength: λ_min = hc/eV</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Characteristic X-rays",
        objective: "obj_010",
        text: `
          <h3>Characteristic X-rays</h3>
          <p><strong>Characteristic X-rays</strong> are produced when an incoming electron ejects an inner-shell electron from an atom, and an outer-shell electron fills the vacancy.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Produces a discrete spectrum</li>
              <li>✓ Unique to each element</li>
              <li>✓ Energy depends on the element's atomic number</li>
              <li>✓ Used for element identification</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Process:</strong>
            <ul>
              <li>1. Electron ejects an inner-shell electron</li>
              <li>2. An outer-shell electron fills the vacancy</li>
              <li>3. Energy is released as an X-ray photon</li>
              <li>4. Energy difference = E₂ - E₁</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Moseley's Law:</strong>
            <ul>
              <li>✓ f ∝ (Z - 1)²</li>
              <li>✓ Frequency increases with atomic number</li>
              <li>✓ Used to determine atomic numbers</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Properties of X-rays",
        objective: "obj_007",
        text: `
          <h3>Properties of X-rays</h3>
          <p>X-rays have several important properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Properties:</h4>
              <ul>
                <li>✓ Electromagnetic waves</li>
                <li>✓ Short wavelength (0.01 - 10 nm)</li>
                <li>✓ High frequency (3 × 10¹⁶ - 3 × 10¹⁹ Hz)</li>
                <li>✓ Travel at speed of light</li>
                <li>✓ No charge, no mass</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Interaction with Matter:</h4>
              <ul>
                <li>✓ Highly penetrating</li>
                <li>✓ Ionizing radiation</li>
                <li>✓ Can cause fluorescence</li>
                <li>✓ Absorbed differently by different materials</li>
                <li>✓ Can be scattered</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Applications and Hazards of X-rays",
        objective: "obj_011",
        text: `
          <h3>Uses and Safety of X-rays</h3>
          <p>X-rays have many important applications but also pose health risks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Medical Applications:</h4>
              <ul>
                <li>✓ Diagnostic imaging (radiography)</li>
                <li>✓ CT scans</li>
                <li>✓ Mammography</li>
                <li>✓ Dental X-rays</li>
                <li>✓ Cancer treatment (radiotherapy)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Industrial Applications:</h4>
              <ul>
                <li>✓ Non-destructive testing</li>
                <li>✓ Security screening</li>
                <li>✓ Quality control</li>
                <li>✓ Material analysis</li>
                <li>✓ Crystallography</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Hazards of X-rays:</strong>
            <ul>
              <li>✓ <strong>Ionizing:</strong> Can damage DNA</li>
              <li>✓ <strong>Cancer:</strong> Increased risk with exposure</li>
              <li>✓ <strong>Burns:</strong> Skin damage from high doses</li>
              <li>✓ <strong>Radiation sickness:</strong> From acute exposure</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Safety Measures:</strong>
            <ul>
              <li>✓ <strong>Shielding:</strong> Lead aprons, lead screens</li>
              <li>✓ <strong>Distance:</strong> Maximize distance from source</li>
              <li>✓ <strong>Time:</strong> Minimize exposure duration</li>
              <li>✓ <strong>Monitoring:</strong> Dosimeters for personnel</li>
              <li>✓ <strong>ALARA:</strong> As Low As Reasonably Achievable</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>💡 Energy Quantization</h4>
          <ul>
            <li>✓ Energy exists in discrete packets (quanta)</li>
            <li>✓ Photons: E = hf</li>
            <li>✓ E = hc/λ</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📡 X-rays</h4>
          <ul>
            <li>✓ Produced by electron bombardment</li>
            <li>✓ Bremsstrahlung (continuous)</li>
            <li>✓ Characteristic (discrete)</li>
            <li>✓ Used in medicine and industry</li>
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
        misconception: "Energy is always continuous",
        correction: "At the atomic level, energy is quantized",
        explanation: "Energy at the atomic scale exists in discrete packets called quanta."
      },
      {
        id: "mis_002",
        misconception: "All photons have the same energy",
        correction: "Photon energy depends on frequency or wavelength",
        explanation: "Higher frequency photons have higher energy."
      },
      {
        id: "mis_003",
        misconception: "X-rays are produced by all atoms",
        correction: "X-rays require high-energy electrons hitting a metal target",
        explanation: "Special equipment (X-ray tubes) is needed to produce X-rays."
      },
      {
        id: "mis_004",
        misconception: "X-rays are not dangerous",
        correction: "X-rays are ionizing radiation and can cause cancer",
        explanation: "Exposure to X-rays should be minimized and shielded."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medical Imaging",
        description: "X-rays are used to diagnose medical conditions.",
        example: "X-ray images show fractures, dental problems, and lung conditions."
      },
      {
        id: "app_002",
        title: "Cancer Treatment",
        description: "High-energy X-rays kill cancer cells.",
        example: "Radiation therapy uses X-rays to target tumors."
      },
      {
        id: "app_003",
        title: "Security",
        description: "X-ray scanners are used in airports and security.",
        example: "Baggage scanners use X-rays to detect prohibited items."
      },
      {
        id: "app_004",
        title: "Materials Analysis",
        description: "X-rays are used to analyze the structure of materials.",
        example: "X-ray crystallography determines molecular structures."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Photon", definition: "A quantum of electromagnetic energy." },
    { term: "Energy Quantization", definition: "Energy exists in discrete packets (quanta)." },
    { term: "Photoelectric Effect", definition: "The emission of electrons from a metal surface by light." },
    { term: "Work Function", definition: "The minimum energy required to remove an electron." },
    { term: "X-ray", definition: "High-energy electromagnetic radiation." },
    { term: "Bremsstrahlung", definition: "X-rays produced by deceleration of electrons." },
    { term: "Characteristic X-ray", definition: "X-rays with energies unique to each element." },
    { term: "Planck's Constant", definition: "A fundamental constant (h = 6.63 × 10⁻³⁴ J·s)." },
    { term: "Threshold Frequency", definition: "The minimum frequency needed for photoelectric emission." },
    { term: "Ionizing Radiation", definition: "Radiation with enough energy to remove electrons." }
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
      question: "What is energy quantization?",
      type: "multiple_choice",
      options: [
        "Energy is continuous",
        "Energy exists in discrete packets",
        "Energy is unlimited",
        "Energy is constant"
      ],
      answer: "Energy exists in discrete packets",
      explanation: "Energy quantization means energy exists in discrete packets called quanta."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a photon?",
      type: "multiple_choice",
      options: [
        "A quantum of electromagnetic energy",
        "A type of atom",
        "A nuclear particle",
        "A type of wave"
      ],
      answer: "A quantum of electromagnetic energy",
      explanation: "A photon is the smallest unit of electromagnetic energy."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is Planck's equation?",
      type: "multiple_choice",
      options: ["E = mc²", "E = hf", "F = ma", "V = IR"],
      answer: "E = hf",
      explanation: "Planck's equation E = hf relates photon energy to frequency."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the photoelectric effect?",
      type: "multiple_choice",
      options: [
        "The emission of photons from a metal",
        "The emission of electrons from a metal by light",
        "The absorption of electrons by a metal",
        "The emission of X-rays"
      ],
      answer: "The emission of electrons from a metal by light",
      explanation: "The photoelectric effect is the emission of electrons from a metal surface when light shines on it."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "What happens if the frequency of light is below the threshold frequency in the photoelectric effect?",
      type: "multiple_choice",
      options: [
        "Electrons are emitted",
        "No electrons are emitted",
        "Electrons are emitted with high energy",
        "The metal melts"
      ],
      answer: "No electrons are emitted",
      explanation: "If frequency is below the threshold, no electrons are emitted regardless of intensity."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the work function?",
      type: "multiple_choice",
      options: [
        "The minimum energy to emit electrons",
        "The maximum energy of photons",
        "The energy of X-rays",
        "The work done by a force"
      ],
      answer: "The minimum energy to emit electrons",
      explanation: "The work function is the minimum energy required to remove an electron from a metal surface."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "How are X-rays produced in an X-ray tube?",
      type: "multiple_choice",
      options: [
        "By heating a filament",
        "By electrons colliding with a metal target",
        "By radioactive decay",
        "By nuclear fusion"
      ],
      answer: "By electrons colliding with a metal target",
      explanation: "X-rays are produced when high-speed electrons collide with a metal target in an X-ray tube."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Calculate the energy of a photon with frequency 2.0 × 10¹⁵ Hz. (h = 6.63 × 10⁻³⁴ J·s)",
      type: "multiple_choice",
      options: [
        "1.33 × 10⁻¹⁸ J",
        "1.33 × 10⁻¹⁹ J",
        "2.66 × 10⁻¹⁸ J",
        "2.66 × 10⁻¹⁹ J"
      ],
      answer: "1.33 × 10⁻¹⁸ J",
      explanation: "E = hf = (6.63 × 10⁻³⁴)(2.0 × 10¹⁵) = 1.33 × 10⁻¹⁸ J."
    },
    {
      id: "prac_009",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the energy of a photon with wavelength 500 nm? (h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s)",
      type: "multiple_choice",
      options: [
        "3.98 × 10⁻¹⁹ J",
        "3.98 × 10⁻¹⁸ J",
        "4.98 × 10⁻¹⁹ J",
        "4.98 × 10⁻¹⁸ J"
      ],
      answer: "3.98 × 10⁻¹⁹ J",
      explanation: "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(500 × 10⁻⁹) = 3.98 × 10⁻¹⁹ J."
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "hard",
      question: "A metal has a work function of 4.0 eV. What is the threshold frequency? (h = 6.63 × 10⁻³⁴ J·s, 1 eV = 1.6 × 10⁻¹⁹ J)",
      type: "multiple_choice",
      options: [
        "9.66 × 10¹⁴ Hz",
        "6.63 × 10¹⁴ Hz",
        "4.00 × 10¹⁴ Hz",
        "1.60 × 10¹⁴ Hz"
      ],
      answer: "9.66 × 10¹⁴ Hz",
      explanation: "φ = 4.0 × 1.6 × 10⁻¹⁹ = 6.4 × 10⁻¹⁹ J. f₀ = φ/h = 6.4 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 9.66 × 10¹⁴ Hz."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between bremsstrahlung and characteristic X-rays?",
      type: "multiple_choice",
      options: [
        "Bremsstrahlung has a continuous spectrum; characteristic has discrete spectrum",
        "Characteristic has a continuous spectrum; bremsstrahlung has discrete spectrum",
        "They are the same",
        "Bremsstrahlung has higher energy"
      ],
      answer: "Bremsstrahlung has a continuous spectrum; characteristic has discrete spectrum",
      explanation: "Bremsstrahlung produces a continuous spectrum, while characteristic X-rays produce discrete peaks unique to each element."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "If a photon has energy of 4.0 eV and the work function is 2.5 eV, what is the kinetic energy of the emitted electron?",
      type: "multiple_choice",
      options: ["1.5 eV", "2.5 eV", "4.0 eV", "6.5 eV"],
      answer: "1.5 eV",
      explanation: "E_k = hf - φ = 4.0 - 2.5 = 1.5 eV."
    },
    {
      id: "prac_013",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the main medical use of X-rays?",
      type: "multiple_choice",
      options: [
        "Cancer treatment",
        "Diagnostic imaging",
        "Surgery",
        "Physical therapy"
      ],
      answer: "Diagnostic imaging",
      explanation: "X-rays are primarily used in medicine for diagnostic imaging."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "A photon of wavelength 300 nm hits a metal with work function 2.0 eV. Will electrons be emitted?",
      type: "multiple_choice",
      options: [
        "Yes, with kinetic energy",
        "Yes, with zero kinetic energy",
        "No, electrons will not be emitted",
        "The metal will melt"
      ],
      answer: "Yes, with kinetic energy",
      explanation: "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(300 × 10⁻⁹) = 6.63 × 10⁻¹⁹ J = 4.14 eV. Since 4.14 > 2.0, electrons are emitted."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the energy of a photon of frequency 6.0 × 10¹⁴ Hz in eV? (h = 6.63 × 10⁻³⁴ J·s, 1 eV = 1.6 × 10⁻¹⁹ J)",
      type: "multiple_choice",
      options: ["2.49 eV", "3.98 eV", "4.14 eV", "2.00 eV"],
      answer: "2.49 eV",
      explanation: "E = hf = (6.63 × 10⁻³⁴ × 6.0 × 10¹⁴) = 3.98 × 10⁻¹⁹ J. In eV: 3.98 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 2.49 eV."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the maximum kinetic energy of electrons emitted from a metal with work function 3.0 eV when illuminated with light of wavelength 200 nm? (h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s)",
      type: "multiple_choice",
      options: ["3.21 eV", "6.21 eV", "9.21 eV", "12.21 eV"],
      answer: "3.21 eV",
      explanation: "E_photon = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(200 × 10⁻⁹) = 9.95 × 10⁻¹⁹ J = 6.22 eV. E_k = 6.22 - 3.0 = 3.22 eV."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_energy_quantization",
    title: "Energy Quantization and X-rays Quiz",
    description: "Test your understanding of energy quantization and X-rays",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is energy quantization?",
        type: "short_answer",
        answer_key: "Energy exists in discrete packets (quanta)",
        explanation: "Energy quantization means energy is not continuous but exists in discrete packets."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a photon?",
        type: "short_answer",
        answer_key: "A quantum of electromagnetic energy",
        explanation: "A photon is the smallest unit of electromagnetic energy."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "State Planck's equation.",
        type: "short_answer",
        answer_key: "E = hf",
        explanation: "Planck's equation relates photon energy to frequency."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the photoelectric effect?",
        type: "short_answer",
        answer_key: "The emission of electrons from a metal surface by light",
        explanation: "The photoelectric effect is the emission of electrons when light shines on a metal."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the work function?",
        type: "short_answer",
        answer_key: "The minimum energy required to remove an electron",
        explanation: "The work function is the minimum energy needed to release an electron from a metal surface."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How are X-rays produced?",
        type: "short_answer",
        answer_key: "By high-speed electrons colliding with a metal target",
        explanation: "X-rays are produced when electrons are accelerated and hit a metal target in an X-ray tube."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "Calculate the energy of a photon with frequency 4.0 × 10¹⁴ Hz. (h = 6.63 × 10⁻³⁴ J·s)",
        type: "short_answer",
        answer_key: "2.65 × 10⁻¹⁹ J",
        explanation: "E = hf = (6.63 × 10⁻³⁴)(4.0 × 10¹⁴) = 2.65 × 10⁻¹⁹ J."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "A metal has a work function of 3.5 eV. What is the threshold frequency? (h = 6.63 × 10⁻³⁴ J·s)",
        type: "short_answer",
        answer_key: "8.45 × 10¹⁴ Hz",
        explanation: "φ = 3.5 × 1.6 × 10⁻¹⁹ = 5.6 × 10⁻¹⁹ J. f₀ = φ/h = 5.6 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 8.45 × 10¹⁴ Hz."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the difference between bremsstrahlung and characteristic X-rays?",
        type: "short_answer",
        answer_key: "Bremsstrahlung has a continuous spectrum; characteristic has discrete spectrum",
        explanation: "Bremsstrahlung produces continuous X-rays, while characteristic X-rays have discrete energies unique to each element."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "Name two applications of X-rays.",
        type: "short_answer",
        answer_key: "Medical imaging and cancer treatment",
        explanation: "X-rays are used in medical imaging (diagnosis) and cancer treatment (radiotherapy)."
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
        "Understand energy quantization",
        "Explain the photoelectric effect",
        "Describe X-ray production and applications"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is energy quantization?" },
        { time: "5-10 min", activity: "Direct Instruction - Photons and Energy" },
        { time: "10-15 min", activity: "Direct Instruction - Photoelectric Effect" },
        { time: "15-20 min", activity: "Direct Instruction - X-ray Production" },
        { time: "20-25 min", activity: "Direct Instruction - Bremsstrahlung and Characteristic X-rays" },
        { time: "25-30 min", activity: "Direct Instruction - Applications and Hazards" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Energy exists in discrete packets",
        // ... full answer key
      },
      assessment: {
        ass_001: "Energy exists in discrete packets (quanta)",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research the history of quantum theory",
      "Investigate the uses of X-rays in medicine",
      "Explore the photoelectric effect in solar cells",
      "Create a presentation on X-ray safety"
    ],
    differentiation: {
      struggling: [
        "Focus on the basic photon concept first",
        "Use visual diagrams",
        "Practice simple energy calculations",
        "Provide worked examples"
      ],
      advanced: [
        "Research quantum mechanics",
        "Explore the wave-particle duality",
        "Investigate advanced X-ray techniques",
        "Study the applications of synchrotron radiation"
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
      title: "Photoelectric Effect",
      description: "Diagram showing the photoelectric effect in a metal",
      url: "/diagrams/photoelectric-effect.png",
      alt: "Photoelectric effect diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "X-ray Tube",
      description: "Diagram showing the components of an X-ray tube",
      url: "/diagrams/x-ray-tube.png",
      alt: "X-ray tube diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "X-ray Spectrum",
      description: "Chart showing bremsstrahlung and characteristic X-ray spectra",
      url: "/diagrams/x-ray-spectrum.png",
      alt: "X-ray spectrum chart"
    }
  ]
};