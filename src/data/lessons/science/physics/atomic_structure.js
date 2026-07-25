// Location: src/data/lessons/science/physics/atomic_structure.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_atomic_structure",
  subject: "Physics",
  topic: "Atomic Structure",
  name: "Atomic Structure",
  icon: "⚛️",
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
    "Understanding of basic atomic theory",
    "Knowledge of subatomic particles",
    "Understanding of electric charges",
    "Basic knowledge of atomic models"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_radioactivity",
      name: "Radioactivity and Nuclear Physics",
      file: "science/physics/radioactivity.js"
    },
    {
      id: "phys_lesson_energy_quantization",
      name: "Energy Quantization and X-rays",
      file: "science/physics/energy_quantization.js"
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
      description: "Describe the structure of the atom",
      indicator: "Student can explain that atoms consist of a nucleus surrounded by electrons"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the three subatomic particles",
      indicator: "Student can list protons, neutrons, and electrons with their properties"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State the charges and masses of subatomic particles",
      indicator: "Student can recall the charge and mass of protons, neutrons, and electrons"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain Rutherford's gold foil experiment",
      indicator: "Student can describe the experiment and its conclusions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe Rutherford's nuclear model of the atom",
      indicator: "Student can explain the nuclear model with a dense positive nucleus"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe Bohr's model of the atom",
      indicator: "Student can explain energy levels and electron transitions"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain atomic number and mass number",
      indicator: "Student can calculate the number of protons, neutrons, and electrons"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Explain isotopes and their properties",
      indicator: "Student can define isotopes and give examples"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain electron configuration and energy levels",
      indicator: "Student can write electron configurations for elements"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concept of electron shells",
      indicator: "Student can explain electron shells and subshells"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain emission and absorption spectra",
      indicator: "Student can explain how energy levels produce spectral lines"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Solve problems involving atomic structure calculations",
      indicator: "Student can calculate atomic number, mass number, and neutron count"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Atomic Structure - Models and Subatomic Particles",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the structure of the atom, subatomic particles, and atomic models."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is the Structure of the Atom?</h2>
      <p>An <strong>atom</strong> is the smallest unit of an element that retains the properties of that element. It consists of a central <strong>nucleus</strong> surrounded by <strong>electrons</strong> in energy levels.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⚛️ Nucleus</h3>
          <p>Contains protons (+)</p>
          <p>Contains neutrons (0)</p>
          <p>Dense, positively charged</p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">⚡ Electrons</h3>
          <p>Negatively charged (-)</p>
          <p>Orbit around nucleus</p>
          <p>In energy levels</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🔬 Overall</h3>
          <p>Atom is neutral</p>
          <p>Number of protons = number of electrons</p>
          <p>Mass concentrated in nucleus</p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 Subatomic Particles Summary</h4>
        <table class="w-full text-sm">
          <tr><th>Particle</th><th>Symbol</th><th>Charge</th><th>Mass (kg)</th><th>Mass (amu)</th></tr>
          <tr><td>Proton</td><td>p⁺</td><td>+1</td><td>1.67 × 10⁻²⁷</td><td>1</td></tr>
          <tr><td>Neutron</td><td>n⁰</td><td>0</td><td>1.67 × 10⁻²⁷</td><td>1</td></tr>
          <tr><td>Electron</td><td>e⁻</td><td>-1</td><td>9.11 × 10⁻³¹</td><td>~0</td></tr>
        </table>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Subatomic Particles",
        objective: "obj_002",
        text: `
          <h3>Protons, Neutrons, and Electrons</h3>
          <p>Atoms are made up of three types of subatomic particles.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Proton</h4>
              <ul>
                <li><strong>Charge:</strong> +1 (positive)</li>
                <li><strong>Mass:</strong> 1 amu (1.67 × 10⁻²⁷ kg)</li>
                <li><strong>Location:</strong> Nucleus</li>
                <li><strong>Symbol:</strong> p⁺</li>
                <li>Determines the element</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <h4>📌 Neutron</h4>
              <ul>
                <li><strong>Charge:</strong> 0 (neutral)</li>
                <li><strong>Mass:</strong> 1 amu (1.67 × 10⁻²⁷ kg)</li>
                <li><strong>Location:</strong> Nucleus</li>
                <li><strong>Symbol:</strong> n⁰</li>
                <li>Determines the isotope</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Electron</h4>
              <ul>
                <li><strong>Charge:</strong> -1 (negative)</li>
                <li><strong>Mass:</strong> ~0 amu (9.11 × 10⁻³¹ kg)</li>
                <li><strong>Location:</strong> Orbiting nucleus</li>
                <li><strong>Symbol:</strong> e⁻</li>
                <li>Determines chemical properties</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Atomic Number and Mass Number",
        objective: "obj_007",
        text: `
          <h3>Atomic Number and Mass Number</h3>
          <p>These two numbers describe an atom's composition.</p>
          
          <div class="example-box">
            <strong>📌 Definitions:</strong>
            <ul>
              <li><strong>Atomic Number (Z):</strong> Number of protons in the nucleus</li>
              <li><strong>Mass Number (A):</strong> Number of protons + neutrons</li>
              <li><strong>Number of neutrons:</strong> A - Z</li>
              <li><strong>Number of electrons:</strong> = Z (in a neutral atom)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Key Formulas:</h4>
            <ul>
              <li><strong>Protons</strong> = Z</li>
              <li><strong>Neutrons</strong> = A - Z</li>
              <li><strong>Electrons</strong> = Z (neutral atom)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example: Carbon-14</strong>
            <ul>
              <li>Atomic Number (Z) = 6</li>
              <li>Mass Number (A) = 14</li>
              <li>Protons = 6</li>
              <li>Neutrons = 14 - 6 = 8</li>
              <li>Electrons = 6</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Rutherford's Gold Foil Experiment",
        objective: "obj_004",
        text: `
          <h3>Rutherford's Experiment</h3>
          <p>In 1911, Ernest Rutherford conducted an experiment that revealed the structure of the atom.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Experiment:</h4>
              <ul>
                <li>✓ Alpha particles (α) fired at thin gold foil</li>
                <li>✓ Detector measured the deflection of α particles</li>
                <li>✓ Most α particles passed straight through</li>
                <li>✓ Some α particles were deflected at small angles</li>
                <li>✓ A few α particles bounced back</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Conclusions:</h4>
              <ul>
                <li>✓ Atom is mostly empty space</li>
                <li>✓ Positive charge is concentrated in a small nucleus</li>
                <li>✓ Nucleus is dense and positively charged</li>
                <li>✓ Electrons orbit the nucleus</li>
                <li>✓ This led to the nuclear model of the atom</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Observations:</strong>
            <ul>
              <li><strong>Most α particles passed through:</strong> Atom is mostly empty space</li>
              <li><strong>Some α particles were deflected:</strong> Positive nucleus repelled them</li>
              <li><strong>Very few α particles bounced back:</strong> Nucleus is small and dense</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Rutherford's Nuclear Model",
        objective: "obj_005",
        text: `
          <h3>The Nuclear Model</h3>
          <p>Rutherford proposed a new model of the atom based on his experiment.</p>
          
          <div class="example-box">
            <strong>📌 Key Features of Rutherford's Model:</strong>
            <ul>
              <li>✓ Atom has a small, dense, positively charged nucleus</li>
              <li>✓ Nucleus contains protons (and later neutrons)</li>
              <li>✓ Electrons orbit the nucleus like planets around the sun</li>
              <li>✓ Most of the atom is empty space</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Limitations of Rutherford's Model:</strong>
            <ul>
              <li>✓ Could not explain why electrons don't spiral into the nucleus</li>
              <li>✓ Could not explain the emission of discrete spectra</li>
              <li>✓ Could not explain the stability of atoms</li>
              <li>✓ Led to Bohr's model</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Bohr's Model of the Atom",
        objective: "obj_006",
        text: `
          <h3>Bohr's Model</h3>
          <p>In 1913, Niels Bohr improved Rutherford's model by introducing quantized energy levels.</p>
          
          <div class="example-box">
            <strong>📌 Key Features of Bohr's Model:</strong>
            <ul>
              <li>✓ Electrons orbit the nucleus in specific energy levels</li>
              <li>✓ Each energy level has a fixed energy value</li>
              <li>✓ Electrons can jump between levels by absorbing or emitting energy</li>
              <li>✓ Energy emitted or absorbed = difference between energy levels</li>
              <li>✓ Explains the discrete spectra of atoms</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Energy Level Transitions:</strong>
            <ul>
              <li><strong>Absorption:</strong> Electron jumps to a higher energy level</li>
              <li><strong>Emission:</strong> Electron falls to a lower energy level</li>
              <li><strong>Energy of photon:</strong> ΔE = E_final - E_initial</li>
              <li><strong>Energy equation:</strong> E = hf = hc/λ</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Electron Configuration",
        objective: "obj_009",
        text: `
          <h3>Electron Configuration</h3>
          <p>Electrons are arranged in energy levels (shells) around the nucleus.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Electron Configuration:</strong>
            <ul>
              <li>✓ Electrons fill the lowest energy levels first (aufbau principle)</li>
              <li>✓ Each shell has a maximum number of electrons</li>
              <li>✓ Shell 1 (K): max 2 electrons</li>
              <li>✓ Shell 2 (L): max 8 electrons</li>
              <li>✓ Shell 3 (M): max 18 electrons</li>
              <li>✓ Shell 4 (N): max 32 electrons</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Hydrogen (Z=1):</strong> 1 electron → 1</li>
              <li><strong>Helium (Z=2):</strong> 2 electrons → 2</li>
              <li><strong>Lithium (Z=3):</strong> 3 electrons → 2,1</li>
              <li><strong>Carbon (Z=6):</strong> 6 electrons → 2,4</li>
              <li><strong>Neon (Z=10):</strong> 10 electrons → 2,8</li>
              <li><strong>Sodium (Z=11):</strong> 11 electrons → 2,8,1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Isotopes",
        objective: "obj_008",
        text: `
          <h3>Isotopes</h3>
          <p><strong>Isotopes</strong> are atoms of the same element with the same number of protons but different numbers of neutrons.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ Same atomic number (Z) but different mass number (A)</li>
              <li>✓ Same chemical properties</li>
              <li>✓ Different physical properties (e.g., mass, density)</li>
              <li>✓ Some isotopes are radioactive (radioisotopes)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples of Isotopes:</strong>
            <ul>
              <li><strong>Carbon:</strong> ¹²C (6 p⁺, 6 n⁰), ¹³C (6 p⁺, 7 n⁰), ¹⁴C (6 p⁺, 8 n⁰)</li>
              <li><strong>Hydrogen:</strong> ¹H (1 p⁺, 0 n⁰), ²H (1 p⁺, 1 n⁰), ³H (1 p⁺, 2 n⁰)</li>
              <li><strong>Uranium:</strong> ²³⁴U, ²³⁵U, ²³⁸U</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Emission and Absorption Spectra",
        objective: "obj_011",
        text: `
          <h3>Spectral Lines</h3>
          <p>When electrons move between energy levels, they emit or absorb light at specific wavelengths.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Emission Spectrum:</h4>
              <ul>
                <li>✓ Electrons fall from higher to lower energy levels</li>
                <li>✓ Photons are emitted</li>
                <li>✓ Each element has a unique emission spectrum</li>
                <li>✓ Used for element identification</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Absorption Spectrum:</h4>
              <ul>
                <li>✓ Electrons absorb energy to jump to higher levels</li>
                <li>✓ Photons are absorbed</li>
                <li>✓ Dark lines appear on a continuous spectrum</li>
                <li>✓ Used in astronomy to identify elements</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Concepts:</strong>
            <ul>
              <li>✓ <strong>Energy difference:</strong> ΔE = E₂ - E₁</li>
              <li>✓ <strong>Photon energy:</strong> E = hf</li>
              <li>✓ <strong>Photon frequency:</strong> f = ΔE/h</li>
              <li>✓ <strong>Photon wavelength:</strong> λ = hc/ΔE</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⚛️ Atomic Structure</h4>
          <ul>
            <li>✓ Nucleus: protons (+) and neutrons (0)</li>
            <li>✓ Electrons (-) orbit in energy levels</li>
            <li>✓ Atomic number = number of protons</li>
            <li>✓ Mass number = protons + neutrons</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Models</h4>
          <ul>
            <li>✓ Rutherford: Nuclear model</li>
            <li>✓ Bohr: Energy levels</li>
            <li>✓ Isotopes: Same Z, different A</li>
            <li>✓ Spectra: Emission and absorption</li>
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
        misconception: "Atoms are solid spheres",
        correction: "Atoms are mostly empty space with a dense nucleus",
        explanation: "Rutherford's experiment showed that atoms are mostly empty space."
      },
      {
        id: "mis_002",
        misconception: "Electrons orbit in circular paths like planets",
        correction: "Electrons exist in probability clouds or shells",
        explanation: "Modern quantum mechanics describes electron positions as probability distributions."
      },
      {
        id: "mis_003",
        misconception: "All atoms of an element are identical",
        correction: "Isotopes of the same element have different numbers of neutrons",
        explanation: "Isotopes have the same number of protons but different numbers of neutrons."
      },
      {
        id: "mis_004",
        misconception: "Atoms are the smallest particles",
        correction: "Atoms are composed of protons, neutrons, and electrons",
        explanation: "Subatomic particles are smaller than atoms."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medical Imaging",
        description: "Understanding atomic structure is essential for medical imaging.",
        example: "X-rays and CT scans rely on the properties of atoms and electrons."
      },
      {
        id: "app_002",
        title: "Nuclear Medicine",
        description: "Radioisotopes are used in diagnosis and treatment.",
        example: "Technetium-99m is used in medical imaging."
      },
      {
        id: "app_003",
        title: "Nuclear Power",
        description: "Nuclear fission uses isotopes of uranium.",
        example: "Uranium-235 is used in nuclear reactors."
      },
      {
        id: "app_004",
        title: "Astronomy",
        description: "Spectroscopy helps identify elements in stars.",
        example: "Emission spectra are used to determine the composition of stars."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Atom", definition: "The smallest unit of an element that retains its properties." },
    { term: "Proton", definition: "A positively charged subatomic particle in the nucleus." },
    { term: "Neutron", definition: "A neutral subatomic particle in the nucleus." },
    { term: "Electron", definition: "A negatively charged subatomic particle orbiting the nucleus." },
    { term: "Nucleus", definition: "The dense central region of an atom containing protons and neutrons." },
    { term: "Atomic Number", definition: "The number of protons in an atom (Z)." },
    { term: "Mass Number", definition: "The total number of protons and neutrons (A)." },
    { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
    { term: "Energy Level", definition: "A fixed energy state of an electron in an atom." },
    { term: "Emission Spectrum", definition: "The spectrum of light emitted by excited atoms." }
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
      question: "What is the structure of an atom?",
      type: "multiple_choice",
      options: [
        "A solid sphere",
        "A nucleus surrounded by electrons",
        "A continuous mass of matter",
        "A cloud of protons and neutrons"
      ],
      answer: "A nucleus surrounded by electrons",
      explanation: "An atom has a central nucleus surrounded by electrons in energy levels."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the three subatomic particles?",
      type: "multiple_choice",
      options: [
        "Proton, neutron, electron",
        "Proton, electron, photon",
        "Neutron, electron, positron",
        "Proton, neutron, neutrino"
      ],
      answer: "Proton, neutron, electron",
      explanation: "Atoms are made up of protons, neutrons, and electrons."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the charge of a proton?",
      type: "multiple_choice",
      options: ["+1", "-1", "0", "+2"],
      answer: "+1",
      explanation: "Protons have a positive charge of +1."
    },
    {
      id: "prac_004",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does the atomic number (Z) represent?",
      type: "multiple_choice",
      options: [
        "Number of neutrons",
        "Number of protons",
        "Number of electrons",
        "Number of protons + neutrons"
      ],
      answer: "Number of protons",
      explanation: "The atomic number (Z) is the number of protons in an atom."
    },
    {
      id: "prac_005",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does the mass number (A) represent?",
      type: "multiple_choice",
      options: [
        "Number of protons",
        "Number of electrons",
        "Number of protons + neutrons",
        "Number of neutrons"
      ],
      answer: "Number of protons + neutrons",
      explanation: "The mass number (A) is the total number of protons and neutrons in an atom."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "How many neutrons are in an atom of carbon-14 (Z=6, A=14)?",
      type: "multiple_choice",
      options: ["6", "8", "14", "20"],
      answer: "8",
      explanation: "Neutrons = A - Z = 14 - 6 = 8."
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "What did Rutherford's gold foil experiment demonstrate?",
      type: "multiple_choice",
      options: [
        "The atom is a solid sphere",
        "The atom is mostly empty space with a dense nucleus",
        "Electrons orbit in fixed paths",
        "Atoms are divisible"
      ],
      answer: "The atom is mostly empty space with a dense nucleus",
      explanation: "Rutherford's experiment showed that most α particles passed through, indicating that atoms are mostly empty space with a dense nucleus."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the key feature of Rutherford's nuclear model?",
      type: "multiple_choice",
      options: [
        "Electrons orbit in specific energy levels",
        "The atom has a small, dense, positively charged nucleus",
        "Atoms are solid spheres",
        "Electrons are in probability clouds"
      ],
      answer: "The atom has a small, dense, positively charged nucleus",
      explanation: "Rutherford's model proposed a small, dense, positively charged nucleus at the center of the atom."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What was Bohr's contribution to atomic theory?",
      type: "multiple_choice",
      options: [
        "Discovery of the nucleus",
        "Introduction of quantized energy levels",
        "Discovery of the electron",
        "Discovery of the neutron"
      ],
      answer: "Introduction of quantized energy levels",
      explanation: "Bohr introduced the idea that electrons orbit in fixed energy levels."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "hard",
      question: "What are isotopes?",
      type: "multiple_choice",
      options: [
        "Atoms with different numbers of protons",
        "Atoms with different numbers of neutrons",
        "Atoms with different numbers of electrons",
        "Atoms with different charges"
      ],
      answer: "Atoms with different numbers of neutrons",
      explanation: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the electron configuration of neon (Z=10)?",
      type: "multiple_choice",
      options: ["2,8", "2,6", "2,8,1", "2,2,6"],
      answer: "2,8",
      explanation: "Neon has 10 electrons: 2 in the first shell and 8 in the second shell."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "What happens when an electron falls from a higher energy level to a lower energy level?",
      type: "multiple_choice",
      options: [
        "Energy is absorbed",
        "A photon is emitted",
        "Energy is conserved",
        "The electron disappears"
      ],
      answer: "A photon is emitted",
      explanation: "When an electron falls to a lower energy level, a photon is emitted with energy equal to the energy difference."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the electron configuration of oxygen (Z=8)?",
      type: "multiple_choice",
      options: ["2,4", "2,6", "2,8", "2,8,1"],
      answer: "2,6",
      explanation: "Oxygen has 8 electrons: 2 in the first shell and 6 in the second shell."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "An atom has Z=11 and A=23. How many neutrons does it have?",
      type: "multiple_choice",
      options: ["11", "12", "23", "34"],
      answer: "12",
      explanation: "Neutrons = A - Z = 23 - 11 = 12."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which of the following are isotopes?",
      type: "multiple_choice",
      options: [
        "¹²C and ¹⁴C",
        "¹²C and ¹⁴N",
        "¹H and ²He",
        "²³Na and ²⁴Mg"
      ],
      answer: "¹²C and ¹⁴C",
      explanation: "¹²C and ¹⁴C are isotopes of carbon because they have the same number of protons (6) but different numbers of neutrons."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "An atom has 20 protons and 20 neutrons. What is its mass number?",
      type: "multiple_choice",
      options: ["20", "40", "60", "80"],
      answer: "40",
      explanation: "Mass number (A) = protons + neutrons = 20 + 20 = 40."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_atomic_structure",
    title: "Atomic Structure Quiz",
    description: "Test your understanding of atomic structure",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the three subatomic particles in an atom?",
        type: "short_answer",
        answer_key: "Protons, neutrons, and electrons",
        explanation: "Atoms consist of protons, neutrons, and electrons."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the charge of an electron?",
        type: "short_answer",
        answer_key: "-1",
        explanation: "Electrons have a negative charge of -1."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the mass of a proton in atomic mass units (amu)?",
        type: "short_answer",
        answer_key: "1 amu",
        explanation: "Protons have a mass of approximately 1 amu."
      },
      {
        id: "ass_004",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does the atomic number (Z) represent?",
        type: "short_answer",
        answer_key: "The number of protons",
        explanation: "The atomic number (Z) is the number of protons in an atom."
      },
      {
        id: "ass_005",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does the mass number (A) represent?",
        type: "short_answer",
        answer_key: "The number of protons + neutrons",
        explanation: "The mass number (A) is the total number of protons and neutrons."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "What did Rutherford's gold foil experiment reveal about the atom?",
        type: "short_answer",
        answer_key: "The atom is mostly empty space with a dense, positive nucleus",
        explanation: "Rutherford's experiment showed the atom is mostly empty space with a dense nucleus."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "What did Bohr add to the atomic model?",
        type: "short_answer",
        answer_key: "Quantized energy levels",
        explanation: "Bohr introduced the concept of electrons orbiting in fixed energy levels."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What are isotopes?",
        type: "short_answer",
        answer_key: "Atoms with the same number of protons but different numbers of neutrons",
        explanation: "Isotopes have the same atomic number (Z) but different mass numbers (A)."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the electron configuration of sodium (Z=11)?",
        type: "short_answer",
        answer_key: "2,8,1",
        explanation: "Sodium has 11 electrons: 2 in shell 1, 8 in shell 2, and 1 in shell 3."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "An atom has Z=8 and A=16. How many neutrons does it have?",
        type: "short_answer",
        answer_key: "8",
        explanation: "Neutrons = A - Z = 16 - 8 = 8."
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
        "Understand the structure of the atom",
        "Explain Rutherford's and Bohr's models",
        "Calculate atomic number, mass number, and isotopes"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is an atom?" },
        { time: "5-10 min", activity: "Direct Instruction - Subatomic Particles" },
        { time: "10-15 min", activity: "Direct Instruction - Rutherford's Experiment" },
        { time: "15-20 min", activity: "Direct Instruction - Rutherford's Model" },
        { time: "20-25 min", activity: "Direct Instruction - Bohr's Model" },
        { time: "25-30 min", activity: "Direct Instruction - Electron Configuration" },
        { time: "30-35 min", activity: "Direct Instruction - Isotopes" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A nucleus surrounded by electrons",
        // ... full answer key
      },
      assessment: {
        ass_001: "Protons, neutrons, and electrons",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a 3D model of the atom",
      "Research the discovery of the neutron",
      "Investigate isotopes used in medicine",
      "Explore the history of atomic theory"
    ],
    differentiation: {
      struggling: [
        "Focus on the basic structure first",
        "Use visual diagrams",
        "Practice with simple calculations",
        "Provide a summary sheet"
      ],
      advanced: [
        "Research quantum mechanics",
        "Explore wave-particle duality",
        "Investigate particle accelerators",
        "Study the standard model"
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
      title: "Atomic Structure",
      description: "Diagram showing the structure of an atom",
      url: "/diagrams/atomic-structure.png",
      alt: "Atomic structure diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Rutherford's Gold Foil Experiment",
      description: "Diagram showing Rutherford's gold foil experiment",
      url: "/diagrams/rutherford-experiment.png",
      alt: "Rutherford's gold foil experiment diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Bohr's Model",
      description: "Diagram showing Bohr's model of the atom",
      url: "/diagrams/bohr-model.png",
      alt: "Bohr's model diagram"
    }
  ]
};