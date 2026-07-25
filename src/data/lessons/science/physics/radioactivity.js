// Location: src/data/lessons/science/physics/radioactivity.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_radioactivity",
  subject: "Physics",
  topic: "Radioactivity and Nuclear Physics",
  name: "Radioactivity and Nuclear Physics",
  icon: "☢️",
  grade_level: "SS2 - SS3",
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
    "Understanding of atomic structure",
    "Knowledge of subatomic particles",
    "Understanding of isotopes",
    "Basic understanding of nuclear reactions"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_energy_quantization",
      name: "Energy Quantization and X-rays",
      file: "science/physics/energy_quantization.js"
    },
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
      description: "Define radioactivity and explain its discovery",
      indicator: "Student can explain what radioactivity is and who discovered it"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the three types of radiation",
      indicator: "Student can list alpha, beta, and gamma radiation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State the properties of alpha, beta, and gamma radiation",
      indicator: "Student can describe the nature, charge, and penetration of each type"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the characteristics of alpha radiation",
      indicator: "Student can describe alpha particles, their charge, mass, and penetration"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the characteristics of beta radiation",
      indicator: "Student can describe beta particles, their charge, mass, and penetration"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the characteristics of gamma radiation",
      indicator: "Student can describe gamma rays, their nature, and high penetration"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain half-life and its applications",
      indicator: "Student can define half-life and perform half-life calculations"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Perform half-life calculations",
      indicator: "Student can calculate half-life, remaining mass, and time"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain nuclear fission and fusion",
      indicator: "Student can distinguish between fission and fusion"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain nuclear reactions and energy release",
      indicator: "Student can calculate energy released in nuclear reactions (E = mc²)"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the applications of radioactivity",
      indicator: "Student can describe uses in medicine, industry, and energy"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the hazards and safety of radiation",
      indicator: "Student can describe radiation risks and safety measures"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Write and balance nuclear equations",
      indicator: "Student can write nuclear equations for alpha and beta decay"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze radioactive decay curves",
      indicator: "Student can interpret and analyze decay graphs"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Radioactivity and Nuclear Physics",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about radioactivity, types of radiation, half-life, and nuclear reactions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Radioactivity?</h2>
      <p><strong>Radioactivity</strong> is the spontaneous emission of radiation from the nucleus of an unstable atom. This was discovered by <strong>Henri Becquerel</strong> in 1896.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">☢️ Alpha (α)</h3>
          <p>Helium nucleus</p>
          <p>2 protons + 2 neutrons</p>
          <p>+2 charge</p>
          <p>Low penetration</p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">⚡ Beta (β)</h3>
          <p>High-speed electron</p>
          <p>-1 charge</p>
          <p>Medium penetration</p>
          <p>Stopped by aluminum</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">⚡ Gamma (γ)</h3>
          <p>High-energy EM wave</p>
          <p>0 charge</p>
          <p>High penetration</p>
          <p>Stopped by lead/concrete</p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 Radiation Comparison</h4>
        <table class="w-full text-sm">
          <tr><th>Type</th><th>Nature</th><th>Charge</th><th>Mass (amu)</th><th>Penetration</th><th>Stopped by</th></tr>
          <tr><td>Alpha (α)</td><td>Helium nucleus</td><td>+2</td><td>4</td><td>Low</td><td>Paper</td></tr>
          <tr><td>Beta (β)</td><td>Electron</td><td>-1</td><td>~0</td><td>Medium</td><td>Aluminum</td></tr>
          <tr><td>Gamma (γ)</td><td>EM wave</td><td>0</td><td>0</td><td>High</td><td>Lead/Concrete</td></tr>
        </table>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Alpha Radiation",
        objective: "obj_004",
        text: `
          <h3>Alpha (α) Radiation</h3>
          <p><strong>Alpha radiation</strong> consists of alpha particles, which are helium nuclei (2 protons and 2 neutrons).</p>
          
          <div class="example-box">
            <strong>📌 Characteristics of Alpha Radiation:</strong>
            <ul>
              <li>✓ <strong>Nature:</strong> Helium nucleus (₂⁴He)</li>
              <li>✓ <strong>Charge:</strong> +2</li>
              <li>✓ <strong>Mass:</strong> 4 amu</li>
              <li>✓ <strong>Speed:</strong> ~5% of speed of light</li>
              <li>✓ <strong>Ionizing power:</strong> Very high</li>
              <li>✓ <strong>Penetrating power:</strong> Very low</li>
              <li>✓ <strong>Stopped by:</strong> Paper or skin</li>
              <li>✓ <strong>Deflection:</strong> Deflected by electric and magnetic fields</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Alpha Decay Equation:</strong>
            <ul>
              <li>Element X → Element Y + α particle</li>
              <li>²²⁶Ra → ²²²Rn + ⁴He (Alpha decay of radium)</li>
              <li>²³⁸U → ²³⁴Th + ⁴He (Alpha decay of uranium)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Beta Radiation",
        objective: "obj_005",
        text: `
          <h3>Beta (β) Radiation</h3>
          <p><strong>Beta radiation</strong> consists of high-speed electrons emitted from the nucleus.</p>
          
          <div class="example-box">
            <strong>📌 Characteristics of Beta Radiation:</strong>
            <ul>
              <li>✓ <strong>Nature:</strong> High-speed electron</li>
              <li>✓ <strong>Charge:</strong> -1</li>
              <li>✓ <strong>Mass:</strong> ~0 amu (9.11 × 10⁻³¹ kg)</li>
              <li>✓ <strong>Speed:</strong> ~90% of speed of light</li>
              <li>✓ <strong>Ionizing power:</strong> Medium</li>
              <li>✓ <strong>Penetrating power:</strong> Medium</li>
              <li>✓ <strong>Stopped by:</strong> Aluminum sheet</li>
              <li>✓ <strong>Deflection:</strong> Deflected by electric and magnetic fields</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Beta Decay Equation:</strong>
            <ul>
              <li>Element X → Element Y + β⁻ particle</li>
              <li>¹⁴C → ¹⁴N + e⁻ (Beta decay of carbon-14)</li>
              <li>⁴⁰K → ⁴⁰Ca + e⁻ (Beta decay of potassium-40)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Gamma Radiation",
        objective: "obj_006",
        text: `
          <h3>Gamma (γ) Radiation</h3>
          <p><strong>Gamma radiation</strong> consists of high-energy electromagnetic waves emitted from the nucleus.</p>
          
          <div class="example-box">
            <strong>📌 Characteristics of Gamma Radiation:</strong>
            <ul>
              <li>✓ <strong>Nature:</strong> High-energy electromagnetic wave</li>
              <li>✓ <strong>Charge:</strong> 0</li>
              <li>✓ <strong>Mass:</strong> 0</li>
              <li>✓ <strong>Speed:</strong> Speed of light (3.0 × 10⁸ m/s)</li>
              <li>✓ <strong>Ionizing power:</strong> Low</li>
              <li>✓ <strong>Penetrating power:</strong> Very high</li>
              <li>✓ <strong>Stopped by:</strong> Lead or thick concrete</li>
              <li>✓ <strong>Deflection:</strong> Not deflected by electric or magnetic fields</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Gamma Emission:</strong>
            <ul>
              <li>Gamma rays are emitted after alpha or beta decay</li>
              <li>²³⁸U* → ²³⁸U + γ (Gamma emission from excited nucleus)</li>
              <li>No change in atomic number or mass number</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Half-Life",
        objective: "obj_007",
        text: `
          <h3>Half-Life (T₁/₂)</h3>
          <p><strong>Half-life</strong> is the time taken for half of the radioactive nuclei in a sample to decay.</p>
          
          <div class="formula-box">
            <h4>📝 Key Formulas:</h4>
            <ul>
              <li><strong>Decay constant:</strong> λ = ln(2) / T₁/₂</li>
              <li><strong>Remaining nuclei:</strong> N = N₀(1/2)^n</li>
              <li><strong>Remaining mass:</strong> m = m₀(1/2)^n</li>
              <li><strong>Number of half-lives:</strong> n = t / T₁/₂</li>
              <li><strong>Decay equation:</strong> N = N₀e^{-λt}</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <ul>
              <li><strong>Problem:</strong> A sample has an initial mass of 100g and a half-life of 10 years. What mass remains after 30 years?</li>
              <li><strong>Solution:</strong> n = 30/10 = 3 half-lives</li>
              <li>After 10 years: 50g</li>
              <li>After 20 years: 25g</li>
              <li>After 30 years: <strong>12.5g</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <ul>
              <li><strong>Problem:</strong> Carbon-14 has a half-life of 5730 years. How much of a 100g sample remains after 17190 years?</li>
              <li><strong>Solution:</strong> n = 17190/5730 = 3 half-lives</li>
              <li>m = 100 × (1/2)³ = 100 × 1/8 = <strong>12.5g</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Nuclear Fission",
        objective: "obj_009",
        text: `
          <h3>Nuclear Fission</h3>
          <p><strong>Nuclear fission</strong> is the splitting of a heavy nucleus into two or more lighter nuclei, releasing energy.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ A neutron is absorbed by a heavy nucleus</li>
              <li>✓ The nucleus splits into smaller nuclei</li>
              <li>✓ Releases 2-3 neutrons (chain reaction)</li>
              <li>✓ Releases large amounts of energy</li>
              <li>✓ Used in nuclear power plants and atomic bombs</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Fission Equation:</strong>
            <ul>
              <li>²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n + Energy</li>
              <li>²³⁵U + ¹n → ¹⁴⁴Xe + ⁹⁰Sr + 2¹n + Energy</li>
              <li>Energy released: ~200 MeV per fission</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Chain Reaction:</strong>
            <ul>
              <li>One neutron triggers fission</li>
              <li>2-3 neutrons are released</li>
              <li>Each neutron can cause more fissions</li>
              <li>Control rods absorb neutrons to control the reaction</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Nuclear Fusion",
        objective: "obj_009",
        text: `
          <h3>Nuclear Fusion</h3>
          <p><strong>Nuclear fusion</strong> is the joining of two light nuclei to form a heavier nucleus, releasing energy.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Two light nuclei combine</li>
              <li>✓ Forms a heavier nucleus</li>
              <li>✓ Releases huge amounts of energy</li>
              <li>✓ Occurs in stars (e.g., the Sun)</li>
              <li>✓ Requires extremely high temperatures</li>
              <li>✓ Cleaner than fission</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Fusion Equation:</strong>
            <ul>
              <li>²H + ³H → ⁴He + ¹n + Energy</li>
              <li>²H + ²H → ³He + ¹n + Energy</li>
              <li>³He + ³He → ⁴He + 2¹H + Energy</li>
              <li>Energy released: ~17.6 MeV per fusion</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Fission vs Fusion:</strong>
            <ul>
              <li><strong>Fission:</strong> Splitting heavy nuclei (uranium, plutonium)</li>
              <li><strong>Fusion:</strong> Joining light nuclei (hydrogen isotopes)</li>
              <li>Fusion releases more energy per unit mass</li>
              <li>Fusion produces less radioactive waste</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nuclear Energy (E = mc²)",
        objective: "obj_010",
        text: `
          <h3>Einstein's Mass-Energy Equivalence</h3>
          <p>Einstein's famous equation <strong>E = mc²</strong> explains how mass can be converted into energy in nuclear reactions.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>E = mc²</strong></p>
            <ul>
              <li>E = energy (Joules)</li>
              <li>m = mass defect (kg)</li>
              <li>c = speed of light (3.0 × 10⁸ m/s)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A small amount of mass is converted to energy in a nuclear reaction. If m = 1.0 × 10⁻³ kg, how much energy is released?</li>
              <li><strong>Solution:</strong></li>
              <li>E = (1.0 × 10⁻³)(3.0 × 10⁸)²</li>
              <li>E = (1.0 × 10⁻³)(9.0 × 10¹⁶)</li>
              <li>E = 9.0 × 10¹³ J</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Applications of Radioactivity",
        objective: "obj_011",
        text: `
          <h3>Uses of Radioactivity</h3>
          <p>Radioactivity has many important applications.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Medical Applications:</h4>
              <ul>
                <li><strong>Cancer treatment:</strong> Radiotherapy</li>
                <li><strong>Medical imaging:</strong> PET scans, X-rays</li>
                <li><strong>Sterilization:</strong> Gamma rays kill bacteria</li>
                <li><strong>Tracers:</strong> Diagnosis of diseases</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Industrial Applications:</h4>
              <ul>
                <li><strong>Power generation:</strong> Nuclear reactors</li>
                <li><strong>Food preservation:</strong> Food irradiation</li>
                <li><strong>Smoke detectors:</strong> Americium-241</li>
                <li><strong>Dating:</strong> Carbon-14 dating</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Carbon-14 Dating:</strong>
            <ul>
              <li>✓ Living organisms contain C-14</li>
              <li>✓ After death, C-14 decays at a known rate</li>
              <li>✓ Half-life = 5730 years</li>
              <li>✓ Used to date archaeological remains</li>
              <li>✓ Effective up to ~50,000 years</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Hazards and Safety",
        objective: "obj_012",
        text: `
          <h3>Radiation Hazards</h3>
          <p>Radiation can be dangerous to living tissue.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>⚠️ Health Effects:</h4>
              <ul>
                <li><strong>Acute:</strong> Radiation sickness, burns</li>
                <li><strong>Long-term:</strong> Cancer, genetic mutations</li>
                <li><strong>DNA damage:</strong> Cell mutations</li>
                <li><strong>Organ damage:</strong> Bone marrow, thyroid</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🛡️ Safety Measures:</h4>
              <ul>
                <li>✓ <strong>Shielding:</strong> Lead, concrete</li>
                <li>✓ <strong>Distance:</strong> Increase distance from source</li>
                <li>✓ <strong>Time:</strong> Minimize exposure time</li>
                <li>✓ <strong>Protective clothing:</strong> Gloves, suits</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 ALARA Principle:</strong>
            <ul>
              <li><strong>A</strong>s <strong>L</strong>ow <strong>A</strong>s <strong>R</strong>easonably <strong>A</strong>chievable</li>
              <li>Minimize radiation exposure</li>
              <li>Use shielding, distance, and time</li>
              <li>Wear dosimeters to monitor exposure</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>☢️ Radioactivity</h4>
          <ul>
            <li>✓ Alpha (α): Helium nucleus, +2, low penetration</li>
            <li>✓ Beta (β): Electron, -1, medium penetration</li>
            <li>✓ Gamma (γ): EM wave, 0, high penetration</li>
            <li>✓ Half-life: Time for half to decay</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>⚛️ Nuclear Reactions</h4>
          <ul>
            <li>✓ Fission: Splitting heavy nuclei</li>
            <li>✓ Fusion: Joining light nuclei</li>
            <li>✓ E = mc²: Mass-energy equivalence</li>
            <li>✓ Applications: Medicine, energy, dating</li>
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
        misconception: "All radiation is dangerous",
        correction: "Low levels of radiation are naturally present and mostly harmless",
        explanation: "Background radiation is everywhere and humans have adapted to it."
      },
      {
        id: "mis_002",
        misconception: "Gamma rays have mass",
        correction: "Gamma rays are electromagnetic waves and have zero mass",
        explanation: "Gamma rays are high-energy photons with no mass."
      },
      {
        id: "mis_003",
        misconception: "Alpha particles are the most dangerous",
        correction: "Alpha particles are the least penetrating but most ionizing",
        explanation: "Alpha particles are only dangerous if ingested or inhaled."
      },
      {
        id: "mis_004",
        misconception: "Nuclear waste is only produced by nuclear reactors",
        correction: "Nuclear waste is produced by many medical and industrial applications",
        explanation: "Hospitals, research labs, and industrial facilities also produce radioactive waste."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Cancer Treatment",
        description: "Radiation therapy uses ionizing radiation to kill cancer cells.",
        example: "Gamma rays and X-rays are used to target and destroy tumors."
      },
      {
        id: "app_002",
        title: "Nuclear Power",
        description: "Nuclear fission is used to generate electricity.",
        example: "Nuclear reactors use uranium-235 to produce heat and generate electricity."
      },
      {
        id: "app_003",
        title: "Medical Diagnosis",
        description: "Radioactive tracers are used to diagnose diseases.",
        example: "Technetium-99m is used in medical imaging to detect cancer and heart disease."
      },
      {
        id: "app_004",
        title: "Archaeology",
        description: "Carbon-14 dating is used to determine the age of archaeological finds.",
        example: "The remains of ancient civilizations can be dated using carbon-14."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Radioactivity", definition: "The spontaneous emission of radiation from an unstable nucleus." },
    { term: "Alpha Particle", definition: "A helium nucleus emitted during alpha decay." },
    { term: "Beta Particle", definition: "A high-speed electron emitted during beta decay." },
    { term: "Gamma Ray", definition: "High-energy electromagnetic radiation emitted from the nucleus." },
    { term: "Half-Life", definition: "The time taken for half of the radioactive nuclei to decay." },
    { term: "Nuclear Fission", definition: "The splitting of a heavy nucleus into lighter nuclei." },
    { term: "Nuclear Fusion", definition: "The joining of light nuclei to form a heavier nucleus." },
    { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
    { term: "Radioisotope", definition: "A radioactive isotope." },
    { term: "Decay Constant", definition: "The probability of decay per unit time." },
    { term: "Mass Defect", definition: "The difference between the mass of a nucleus and the sum of its parts." },
    { term: "Chain Reaction", definition: "A self-sustaining series of nuclear reactions." }
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
      question: "What is radioactivity?",
      type: "multiple_choice",
      options: [
        "The absorption of radiation by matter",
        "The spontaneous emission of radiation from an unstable nucleus",
        "The emission of light from atoms",
        "The production of heat"
      ],
      answer: "The spontaneous emission of radiation from an unstable nucleus",
      explanation: "Radioactivity is the spontaneous emission of radiation from the nucleus of an unstable atom."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the three types of radiation?",
      type: "multiple_choice",
      options: [
        "Alpha, beta, gamma",
        "Alpha, beta, neutron",
        "Proton, neutron, electron",
        "X-rays, gamma, UV"
      ],
      answer: "Alpha, beta, gamma",
      explanation: "The three main types of radiation are alpha, beta, and gamma."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which type of radiation has the highest penetrating power?",
      type: "multiple_choice",
      options: ["Alpha", "Beta", "Gamma", "Neutron"],
      answer: "Gamma",
      explanation: "Gamma rays have the highest penetrating power and require lead or concrete shielding."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is an alpha particle?",
      type: "multiple_choice",
      options: [
        "A high-speed electron",
        "A helium nucleus",
        "An electromagnetic wave",
        "A neutron"
      ],
      answer: "A helium nucleus",
      explanation: "An alpha particle is a helium nucleus consisting of 2 protons and 2 neutrons."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a beta particle?",
      type: "multiple_choice",
      options: [
        "A helium nucleus",
        "A high-speed electron",
        "An electromagnetic wave",
        "A neutron"
      ],
      answer: "A high-speed electron",
      explanation: "A beta particle is a high-speed electron emitted from the nucleus."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a gamma ray?",
      type: "multiple_choice",
      options: [
        "A helium nucleus",
        "A high-speed electron",
        "A high-energy electromagnetic wave",
        "A neutron"
      ],
      answer: "A high-energy electromagnetic wave",
      explanation: "Gamma rays are high-energy electromagnetic waves emitted from the nucleus."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is half-life?",
      type: "multiple_choice",
      options: [
        "The time for all nuclei to decay",
        "The time for half of the nuclei to decay",
        "The time for no nuclei to decay",
        "The time for a quarter of the nuclei to decay"
      ],
      answer: "The time for half of the nuclei to decay",
      explanation: "Half-life is the time taken for half of the radioactive nuclei in a sample to decay."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "A sample has a half-life of 5 years. What fraction remains after 15 years?",
      type: "multiple_choice",
      options: ["1/2", "1/4", "1/8", "1/16"],
      answer: "1/8",
      explanation: "n = 15/5 = 3 half-lives. Fraction remaining = (1/2)^3 = 1/8."
    },
    {
      id: "prac_009",
      objective: "obj_008",
      difficulty: "hard",
      question: "A sample initially has 100g of radioactive material with a half-life of 10 years. How much remains after 30 years?",
      type: "multiple_choice",
      options: ["50g", "25g", "12.5g", "6.25g"],
      answer: "12.5g",
      explanation: "n = 30/10 = 3 half-lives. m = 100 × (1/2)^3 = 100 × 1/8 = 12.5g."
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is nuclear fission?",
      type: "multiple_choice",
      options: [
        "The joining of light nuclei",
        "The splitting of heavy nuclei",
        "The emission of alpha particles",
        "The absorption of neutrons"
      ],
      answer: "The splitting of heavy nuclei",
      explanation: "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is nuclear fusion?",
      type: "multiple_choice",
      options: [
        "The splitting of heavy nuclei",
        "The joining of light nuclei",
        "The emission of beta particles",
        "The absorption of neutrons"
      ],
      answer: "The joining of light nuclei",
      explanation: "Nuclear fusion is the joining of light nuclei to form a heavier nucleus."
    },
    {
      id: "prac_012",
      objective: "obj_010",
      difficulty: "hard",
      question: "What does the equation E = mc² represent?",
      type: "multiple_choice",
      options: [
        "Kinetic energy",
        "Mass-energy equivalence",
        "Potential energy",
        "Thermal energy"
      ],
      answer: "Mass-energy equivalence",
      explanation: "E = mc² shows that mass can be converted into energy."
    },
    {
      id: "prac_013",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is carbon-14 dating used for?",
      type: "multiple_choice",
      options: [
        "Power generation",
        "Dating archaeological remains",
        "Cancer treatment",
        "Food preservation"
      ],
      answer: "Dating archaeological remains",
      explanation: "Carbon-14 dating is used to determine the age of archaeological remains."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the ALARA principle?",
      type: "multiple_choice",
      options: [
        "As Low As Reasonably Achievable",
        "Always Limit And Reduce Activity",
        "Avoid Large Amounts of Radioactive Areas",
        "Apply Low Activity Radiation Always"
      ],
      answer: "As Low As Reasonably Achievable",
      explanation: "ALARA is the principle of minimizing radiation exposure to As Low As Reasonably Achievable."
    },
    {
      id: "prac_015",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the daughter nucleus in: ²²⁶Ra → ? + ⁴He",
      type: "multiple_choice",
      options: ["²²²Rn", "²²²Ra", "²²⁶Rn", "²³⁰Th"],
      answer: "²²²Rn",
      explanation: "²²⁶Ra → ²²²Rn + ⁴He. The radium nucleus loses 2 protons and 2 neutrons to become radon."
    },
    {
      id: "prac_016",
      objective: "obj_014",
      difficulty: "hard",
      question: "If a sample has decayed to 25% of its original activity after 20 years, what is its half-life?",
      type: "multiple_choice",
      options: ["5 years", "10 years", "15 years", "20 years"],
      answer: "10 years",
      explanation: "25% remaining means 2 half-lives have passed. T₁/₂ = 20/2 = 10 years."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_radioactivity",
    title: "Radioactivity and Nuclear Physics Quiz",
    description: "Test your understanding of radioactivity and nuclear physics",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is radioactivity?",
        type: "short_answer",
        answer_key: "The spontaneous emission of radiation from an unstable nucleus",
        explanation: "Radioactivity is the spontaneous emission of radiation from the nucleus of an unstable atom."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "List the three types of radiation.",
        type: "short_answer",
        answer_key: "Alpha, beta, gamma",
        explanation: "The three types of radiation are alpha (α), beta (β), and gamma (γ)."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Which type of radiation has the highest penetrating power?",
        type: "short_answer",
        answer_key: "Gamma rays",
        explanation: "Gamma rays have the highest penetrating power and require lead or concrete shielding."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an alpha particle composed of?",
        type: "short_answer",
        answer_key: "2 protons and 2 neutrons (helium nucleus)",
        explanation: "An alpha particle is a helium nucleus consisting of 2 protons and 2 neutrons."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a beta particle?",
        type: "short_answer",
        answer_key: "A high-speed electron",
        explanation: "A beta particle is a high-speed electron emitted from the nucleus during beta decay."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a gamma ray?",
        type: "short_answer",
        answer_key: "A high-energy electromagnetic wave",
        explanation: "Gamma rays are high-energy electromagnetic waves emitted from the nucleus."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is half-life?",
        type: "short_answer",
        answer_key: "The time taken for half of the radioactive nuclei to decay",
        explanation: "Half-life is the time taken for half of the radioactive nuclei in a sample to decay."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "A sample has a half-life of 20 years. What fraction remains after 60 years?",
        type: "short_answer",
        answer_key: "1/8",
        explanation: "n = 60/20 = 3 half-lives. Fraction = (1/2)^3 = 1/8."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between nuclear fission and nuclear fusion?",
        type: "short_answer",
        answer_key: "Fission splits heavy nuclei; fusion joins light nuclei",
        explanation: "Fission is splitting heavy nuclei, while fusion is joining light nuclei."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What does E = mc² represent?",
        type: "short_answer",
        answer_key: "Mass-energy equivalence",
        explanation: "E = mc² shows that mass can be converted into energy in nuclear reactions."
      },
      {
        id: "ass_011",
        objective: "obj_011",
        difficulty: "hard",
        question: "Give two applications of radioactivity in medicine.",
        type: "short_answer",
        answer_key: "Cancer treatment (radiotherapy) and medical imaging (PET scans)",
        explanation: "Radioactivity is used in cancer treatment and medical imaging."
      },
      {
        id: "ass_012",
        objective: "obj_012",
        difficulty: "hard",
        question: "What does ALARA stand for?",
        type: "short_answer",
        answer_key: "As Low As Reasonably Achievable",
        explanation: "ALARA is the principle of minimizing radiation exposure."
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
        "Understand radioactivity and types of radiation",
        "Calculate half-life and understand decay",
        "Explain nuclear fission and fusion",
        "Describe applications and hazards of radiation"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is radioactivity?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Radiation" },
        { time: "10-15 min", activity: "Direct Instruction - Alpha, Beta, Gamma Properties" },
        { time: "15-20 min", activity: "Direct Instruction - Half-Life" },
        { time: "20-25 min", activity: "Direct Instruction - Nuclear Fission and Fusion" },
        { time: "25-30 min", activity: "Direct Instruction - Applications" },
        { time: "30-35 min", activity: "Direct Instruction - Hazards and Safety" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The spontaneous emission of radiation from an unstable nucleus",
        // ... full answer key
      },
      assessment: {
        ass_001: "The spontaneous emission of radiation from an unstable nucleus",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research the discovery of radioactivity by Becquerel",
      "Investigate the uses of radioisotopes in medicine",
      "Explore the history of nuclear power",
      "Create a presentation on nuclear waste disposal"
    ],
    differentiation: {
      struggling: [
        "Focus on the three types of radiation first",
        "Use visual comparisons",
        "Practice simple half-life calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research nuclear fusion in stars",
        "Explore the physics of nuclear reactors",
        "Investigate radiation therapy",
        "Study nuclear fission chain reactions"
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
      title: "Types of Radiation",
      description: "Diagram showing alpha, beta, and gamma radiation penetration",
      url: "/diagrams/radiation-types.png",
      alt: "Types of radiation diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Half-Life Decay",
      description: "Chart showing exponential decay of radioactive material",
      url: "/diagrams/half-life-decay.png",
      alt: "Half-life decay chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Nuclear Fission and Fusion",
      description: "Diagram comparing nuclear fission and fusion",
      url: "/diagrams/fission-fusion.png",
      alt: "Nuclear fission and fusion diagram"
    }
  ]
};