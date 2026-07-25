// Location: src/data/lessons/science/chemistry/physical_chemistry/thermodynamics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_thermodynamics",
  subject: "Chemistry",
  topic: "Thermodynamics",
  name: "Thermodynamics",
  icon: "🔥",
  grade_level: "SS2 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of states of matter",
    "Knowledge of energy and work",
    "Basic understanding of chemical reactions"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Chemical Kinetics",
      file: "science/chemistry/physical_chemistry/kinetics.js"
    },
    {
      name: "Equilibrium",
      file: "science/chemistry/equilibrium.js"
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
      description: "Define thermodynamics and explain its importance",
      indicator: "Student can explain what thermodynamics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define system, surroundings, and universe in thermodynamics",
      indicator: "Student can distinguish between system, surroundings, and universe"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define exothermic and endothermic reactions",
      indicator: "Student can explain the difference between exothermic and endothermic reactions"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the first law of thermodynamics",
      indicator: "Student can state and apply the first law (ΔU = q + w)"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Define enthalpy and enthalpy change",
      indicator: "Student can explain ΔH and calculate enthalpy changes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate enthalpy changes from bond energies",
      indicator: "Student can use bond energies to calculate ΔH"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain Hess's Law and use it to calculate enthalpy changes",
      indicator: "Student can apply Hess's Law to find ΔH"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Define entropy and explain its significance",
      indicator: "Student can explain the concept of entropy"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the second law of thermodynamics",
      indicator: "Student can state and explain the second law"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Define Gibbs free energy and its relationship to spontaneity",
      indicator: "Student can explain ΔG and predict spontaneity"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Calculate Gibbs free energy using ΔG = ΔH - TΔS",
      indicator: "Student can calculate ΔG from ΔH and ΔS"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Predict the spontaneity of reactions",
      indicator: "Student can determine if a reaction is spontaneous"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the relationship between temperature and spontaneity",
      indicator: "Student can analyze how temperature affects spontaneity"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Calculate standard enthalpy of formation",
      indicator: "Student can use ΔH°f values to calculate ΔH°reaction"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the third law of thermodynamics",
      indicator: "Student can state the third law of thermodynamics"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Apply thermodynamics to real-world processes",
      indicator: "Student can analyze energy efficiency and heat engines"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Thermodynamics - Energy and Heat in Chemistry",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about energy, enthalpy, entropy, and Gibbs free energy in chemical reactions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Thermodynamics</h2>
      <p><strong>Thermodynamics</strong> is the study of energy, heat, and work in chemical and physical processes. It explains how energy is transferred and transformed in chemical reactions and whether reactions will occur spontaneously.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔥 Key Concepts</h3>
          <ul>
            <li>✓ First Law of Thermodynamics</li>
            <li>✓ Enthalpy (ΔH)</li>
            <li>✓ Exothermic & Endothermic</li>
            <li>✓ Hess's Law</li>
            <li>✓ Entropy (ΔS)</li>
            <li>✓ Gibbs Free Energy (ΔG)</li>
            <li>✓ Second Law of Thermodynamics</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Chemical reactions always involve energy change</li>
            <li>• Entropy is a measure of disorder</li>
            <li>• Spontaneous reactions don't need outside energy</li>
            <li>• ΔG = 0 at equilibrium</li>
            <li>• Thermodynamics applies to everything in the universe</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Thermodynamics Matters</h4>
        <p>Thermodynamics helps us predict whether reactions will occur, how much energy is involved, and how to optimize chemical processes in industry.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "System, Surroundings, and Universe",
        objective: "obj_002",
        text: `
          <h3>System, Surroundings, and Universe</h3>
          <p>In thermodynamics, we define the <strong>system</strong> as the part of the universe we are studying. Everything else is the <strong>surroundings</strong>, and together they form the <strong>universe</strong>.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 System</h4>
              <ul>
                <li>• The substance or reaction</li>
                <li>• Example: Molecules in a beaker</li>
                <li>• What we are studying</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Surroundings</h4>
              <ul>
                <li>• Everything outside the system</li>
                <li>• Example: The beaker, air, room</li>
                <li>• Affected by the system</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Universe</h4>
              <ul>
                <li>• System + Surroundings</li>
                <li>• Energy is conserved</li>
                <li>• Universe = System + Surroundings</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Exothermic and Endothermic Reactions",
        objective: "obj_003",
        text: `
          <h3>Exothermic vs Endothermic Reactions</h3>
          <p>Chemical reactions either release or absorb energy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Exothermic Reactions</h4>
              <ul>
                <li>• Release energy (heat)</li>
                <li>• Temperature of surroundings increases</li>
                <li>• ΔH is <strong>negative</strong></li>
                <li>• Energy of products < reactants</li>
                <li>• Example: Combustion</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Endothermic Reactions</h4>
              <ul>
                <li>• Absorb energy (heat)</li>
                <li>• Temperature of surroundings decreases</li>
                <li>• ΔH is <strong>positive</strong></li>
                <li>• Energy of products > reactants</li>
                <li>• Example: Photosynthesis</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Energy Level Diagrams</text>
              
              <!-- Exothermic -->
              <g transform="translate(150, 160)">
                <!-- Axes -->
                <line x1="-80" y1="50" x2="-80" y2="-80" stroke="#1565c0" stroke-width="2"/>
                <line x1="-80" y1="50" x2="80" y2="50" stroke="#1565c0" stroke-width="2"/>
                <text x="-90" y="-40" text-anchor="middle" font-size="10" fill="#1565c0" transform="rotate(-90,-90,-40)">Energy</text>
                <text x="0" y="75" text-anchor="middle" font-size="10" fill="#1565c0">Reaction Progress</text>
                
                <!-- Reactants -->
                <rect x="-50" y="-40" width="20" height="20" fill="#4a90d9"/>
                <text x="-40" y="-50" text-anchor="middle" font-size="10" fill="#1565c0">Reactants</text>
                <line x1="-40" y1="-40" x2="10" y2="20" stroke="#1565c0" stroke-width="2"/>
                
                <!-- Products -->
                <rect x="10" y="20" width="20" height="20" fill="#4a90d9"/>
                <text x="20" y="10" text-anchor="middle" font-size="10" fill="#1565c0">Products</text>
                
                <!-- Energy released -->
                <path d="M-40 -40 L10 20 L-40 -40" fill="none" stroke="#ef5350" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="-15" y="-5" text-anchor="middle" font-size="10" fill="#ef5350">ΔH = -</text>
                <text x="0" y="-80" text-anchor="middle" font-size="14" font-weight="bold" fill="#ef5350">Exothermic</text>
              </g>
              
              <!-- Endothermic -->
              <g transform="translate(450, 160)">
                <!-- Axes -->
                <line x1="-80" y1="50" x2="-80" y2="-80" stroke="#1565c0" stroke-width="2"/>
                <line x1="-80" y1="50" x2="80" y2="50" stroke="#1565c0" stroke-width="2"/>
                <text x="-90" y="-40" text-anchor="middle" font-size="10" fill="#1565c0" transform="rotate(-90,-90,-40)">Energy</text>
                <text x="0" y="75" text-anchor="middle" font-size="10" fill="#1565c0">Reaction Progress</text>
                
                <!-- Reactants -->
                <rect x="-50" y="10" width="20" height="20" fill="#4a90d9"/>
                <text x="-40" y="0" text-anchor="middle" font-size="10" fill="#1565c0">Reactants</text>
                <line x1="-40" y1="10" x2="10" y2="-40" stroke="#1565c0" stroke-width="2"/>
                
                <!-- Products -->
                <rect x="10" y="-60" width="20" height="20" fill="#4a90d9"/>
                <text x="20" y="-70" text-anchor="middle" font-size="10" fill="#1565c0">Products</text>
                
                <!-- Energy absorbed -->
                <path d="M-40 10 L10 -40 L-40 10" fill="none" stroke="#4caf50" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="-15" y="-15" text-anchor="middle" font-size="10" fill="#4caf50">ΔH = +</text>
                <text x="0" y="-80" text-anchor="middle" font-size="14" font-weight="bold" fill="#4caf50">Endothermic</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "First Law of Thermodynamics",
        objective: "obj_004",
        text: `
          <h3>First Law of Thermodynamics</h3>
          <p>The <strong>First Law of Thermodynamics</strong> states that energy cannot be created or destroyed, only transferred or transformed. ΔU = q + w</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Terms</h4>
              <ul>
                <li>• <strong>ΔU:</strong> Change in internal energy</li>
                <li>• <strong>q:</strong> Heat (positive if added to system)</li>
                <li>• <strong>w:</strong> Work (positive if done on system)</li>
                <li>• Energy is conserved</li>
                <li>• Total energy of universe is constant</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• Burning fuel: Chemical → Heat</li>
                <li>• Photosynthesis: Light → Chemical</li>
                <li>• Battery: Chemical → Electrical</li>
                <li>• Heat engine: Heat → Work</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Enthalpy and Enthalpy Change",
        objective: "obj_005",
        text: `
          <h3>Enthalpy (ΔH)</h3>
          <p><strong>Enthalpy (H)</strong> is the heat content of a system at constant pressure. <strong>ΔH</strong> is the heat absorbed or released during a reaction.</p>
          
          <div class="example-box">
            <strong>📌 Key Relationships:</strong>
            <ul>
              <li>• ΔH = H(products) - H(reactants)</li>
              <li>• Exothermic: ΔH < 0 (heat released)</li>
              <li>• Endothermic: ΔH > 0 (heat absorbed)</li>
              <li>• Standard enthalpy change: ΔH°</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p><strong>CH₄ + 2O₂ → CO₂ + 2H₂O</strong></p>
              <ul>
                <li>• ΔH = -890 kJ/mol</li>
                <li>• Exothermic reaction</li>
                <li>• Heat released to surroundings</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p><strong>N₂ + O₂ → 2NO</strong></p>
              <ul>
                <li>• ΔH = +180 kJ/mol</li>
                <li>• Endothermic reaction</li>
                <li>• Heat absorbed from surroundings</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Bond Energies",
        objective: "obj_006",
        text: `
          <h3>Bond Energies</h3>
          <p><strong>Bond energy</strong> is the energy required to break one mole of bonds. We can calculate ΔH using bond energies.</p>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p>ΔH = (Bonds broken) - (Bonds formed)</p>
            <p>• Bonds broken: Energy absorbed</p>
            <p>• Bonds formed: Energy released</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>H₂ + Cl₂ → 2HCl</strong></p>
              <ul>
                <li>• Bonds broken: H-H (436 kJ) + Cl-Cl (242 kJ) = 678 kJ</li>
                <li>• Bonds formed: 2 × H-Cl (2 × 431) = 862 kJ</li>
                <li>• ΔH = 678 - 862 = <strong>-184 kJ/mol</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Bond Energies</h4>
              <ul>
                <li>• H-H: 436 kJ/mol</li>
                <li>• C-H: 413 kJ/mol</li>
                <li>• C-C: 348 kJ/mol</li>
                <li>• O=O: 498 kJ/mol</li>
                <li>• H-Cl: 431 kJ/mol</li>
                <li>• C=O: 805 kJ/mol</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Hess's Law",
        objective: "obj_007",
        text: `
          <h3>Hess's Law</h3>
          <p><strong>Hess's Law</strong> states that the enthalpy change of a reaction is independent of the path taken. ΔH is additive.</p>
          
          <div class="example-box">
            <strong>📌 Key Point:</strong>
            <p>If a reaction can be broken into steps, the total ΔH is the sum of the ΔH values for each step.</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Find ΔH for C + 2H₂ → CH₄</strong></p>
              <ul>
                <li>• C + O₂ → CO₂ (ΔH = -394 kJ)</li>
                <li>• 2H₂ + O₂ → 2H₂O (ΔH = -572 kJ)</li>
                <li>• CH₄ + 2O₂ → CO₂ + 2H₂O (ΔH = -890 kJ)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Using Hess's Law</h4>
              <ul>
                <li>• ΔH = (-394) + (-572) - (-890)</li>
                <li>• ΔH = -966 + 890</li>
                <li>• <strong>ΔH = -76 kJ/mol</strong></li>
              </ul>
              <p>Thus: C + 2H₂ → CH₄ has ΔH = -76 kJ/mol</p>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Standard Enthalpy of Formation",
        objective: "obj_014",
        text: `
          <h3>Standard Enthalpy of Formation (ΔH°f)</h3>
          <p><strong>Standard enthalpy of formation</strong> is the enthalpy change when one mole of a compound is formed from its elements in their standard states.</p>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p>ΔH°reaction = ΣΔH°f(products) - ΣΔH°f(reactants)</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Calculate ΔH° for: CH₄ + 2O₂ → CO₂ + 2H₂O</strong></p>
              <ul>
                <li>• ΔH°f(CH₄) = -75 kJ/mol</li>
                <li>• ΔH°f(O₂) = 0 kJ/mol</li>
                <li>• ΔH°f(CO₂) = -394 kJ/mol</li>
                <li>• ΔH°f(H₂O) = -286 kJ/mol</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Calculation</h4>
              <ul>
                <li>• Products = -394 + 2(-286) = -966 kJ</li>
                <li>• Reactants = -75 + 2(0) = -75 kJ</li>
                <li>• ΔH° = -966 - (-75)</li>
                <li>• <strong>ΔH° = -891 kJ/mol</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Entropy",
        objective: "obj_008",
        text: `
          <h3>Entropy (ΔS)</h3>
          <p><strong>Entropy</strong> is a measure of disorder or randomness in a system. The second law of thermodynamics states that entropy tends to increase.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• Entropy (S) measures disorder</li>
                <li>• ΔS = S(products) - S(reactants)</li>
                <li>• ΔS > 0: Increase in disorder</li>
                <li>• ΔS < 0: Decrease in disorder</li>
                <li>• Gas > Liquid > Solid (entropy)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Solid → Liquid:</strong> ΔS > 0</li>
                <li><strong>Liquid → Gas:</strong> ΔS > 0</li>
                <li><strong>Gas → Liquid:</strong> ΔS < 0</li>
                <li><strong>2H₂ + O₂ → 2H₂O:</strong> ΔS < 0</li>
                <li>(3 moles gas → 2 moles gas)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Second Law of Thermodynamics",
        objective: "obj_009",
        text: `
          <h3>Second Law of Thermodynamics</h3>
          <p>The <strong>Second Law of Thermodynamics</strong> states that the entropy of the universe always increases for spontaneous processes.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>• ΔS(universe) = ΔS(system) + ΔS(surroundings) > 0</li>
              <li>• Spontaneous processes increase total entropy</li>
              <li>• Nature favors disorder</li>
              <li>• Energy tends to disperse</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Gibbs Free Energy",
        objective: "obj_010",
        text: `
          <h3>Gibbs Free Energy (ΔG)</h3>
          <p><strong>Gibbs free energy</strong> combines enthalpy and entropy to predict spontaneity.</p>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p><strong>ΔG = ΔH - TΔS</strong></p>
            <ul>
              <li>• ΔG < 0: Spontaneous</li>
              <li>• ΔG > 0: Non-spontaneous</li>
              <li>• ΔG = 0: Equilibrium</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 When is ΔG Negative?</h4>
              <ul>
                <li><strong>ΔH negative, ΔS positive:</strong></li>
                <li>• Always spontaneous</li>
                <li><strong>ΔH negative, ΔS negative:</strong></li>
                <li>• Spontaneous at low T</li>
                <li><strong>ΔH positive, ΔS positive:</strong></li>
                <li>• Spontaneous at high T</li>
                <li><strong>ΔH positive, ΔS negative:</strong></li>
                <li>• Never spontaneous</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Calculate ΔG for: 2H₂ + O₂ → 2H₂O</strong></p>
              <ul>
                <li>• ΔH = -572 kJ/mol</li>
                <li>• ΔS = -326 J/K·mol</li>
                <li>• T = 298 K</li>
                <li>• ΔG = -572 - (298 × -0.326)</li>
                <li>• ΔG = -572 + 97</li>
                <li>• <strong>ΔG = -475 kJ/mol</strong></li>
                <li>• Spontaneous!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Spontaneity and Temperature",
        objective: "obj_013",
        text: `
          <h3>Temperature and Spontaneity</h3>
          <p>Temperature affects spontaneity through the TΔS term.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 ΔH < 0, ΔS < 0</h4>
              <ul>
                <li>• Spontaneous at low temperatures</li>
                <li>• Non-spontaneous at high temperatures</li>
                <li>• T must be less than ΔH/ΔS</li>
                <li>• Example: Water freezing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 ΔH > 0, ΔS > 0</h4>
              <ul>
                <li>• Non-spontaneous at low temperatures</li>
                <li>• Spontaneous at high temperatures</li>
                <li>• T must be greater than ΔH/ΔS</li>
                <li>• Example: Water boiling</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Third Law of Thermodynamics",
        objective: "obj_015",
        text: `
          <h3>Third Law of Thermodynamics</h3>
          <p>The <strong>Third Law of Thermodynamics</strong> states that the entropy of a perfect crystal at absolute zero (0 K) is zero.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• At 0 K, entropy = 0</li>
                <li>• Perfect crystal = perfect order</li>
                <li>• No disorder at absolute zero</li>
                <li>• Absolute zero is impossible to reach</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• Allows calculation of absolute entropies</li>
                <li>• Used to determine ΔS for reactions</li>
                <li>• Important in material science</li>
                <li>• Foundation for low-temperature physics</li>
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
          <h4>🔥 Thermodynamics</h4>
          <ul>
            <li>• First Law: Energy is conserved</li>
            <li>• Enthalpy (ΔH): Heat at constant pressure</li>
            <li>• Exothermic: ΔH < 0</li>
            <li>• Endothermic: ΔH > 0</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Entropy: Measure of disorder</li>
            <li>• Second Law: Entropy increases</li>
            <li>• Gibbs Free Energy: ΔG = ΔH - TΔS</li>
            <li>• ΔG < 0: Spontaneous</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Thermodynamics tells us if a reaction can happen (thermodynamics) not how fast it happens (kinetics).</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Exothermic reactions are always spontaneous",
        correction: "Exothermic reactions are often spontaneous but not always",
        explanation: "Spontaneity depends on both enthalpy and entropy."
      },
      {
        id: "mis_002",
        misconception: "Entropy is the same as energy",
        correction: "Entropy is a measure of disorder, not energy",
        explanation: "Energy and entropy are different concepts in thermodynamics."
      },
      {
        id: "mis_003",
        misconception: "Spontaneous means fast",
        correction: "Spontaneous means thermodynamically favored, not fast",
        explanation: "A reaction can be spontaneous but extremely slow (e.g., diamond to graphite)."
      },
      {
        id: "mis_004",
        misconception: "ΔG = 0 means no reaction",
        correction: "ΔG = 0 means the reaction is at equilibrium",
        explanation: "At equilibrium, the forward and reverse reactions occur at the same rate."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Internal Combustion Engines",
        description: "Thermodynamics explains how engines convert heat to work.",
        example: "Cars, generators"
      },
      {
        id: "app_002",
        title: "Power Generation",
        description: "Thermodynamics is used in power plants.",
        example: "Coal, nuclear, and solar power"
      },
      {
        id: "app_003",
        title: "Refrigeration",
        description: "Thermodynamics explains how heat pumps work.",
        example: "Air conditioners, refrigerators"
      },
      {
        id: "app_004",
        title: "Chemical Industry",
        description: "Thermodynamics helps optimize reactions.",
        example: "Haber process, ammonia production"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Thermodynamics", definition: "Study of energy, heat, and work in chemical processes." },
    { term: "System", definition: "The part of the universe being studied." },
    { term: "Surroundings", definition: "Everything outside the system." },
    { term: "Enthalpy", definition: "Heat content at constant pressure (H)." },
    { term: "Exothermic", definition: "Reaction that releases heat (ΔH < 0)." },
    { term: "Endothermic", definition: "Reaction that absorbs heat (ΔH > 0)." },
    { term: "Entropy", definition: "Measure of disorder or randomness (S)." },
    { term: "Gibbs Free Energy", definition: "Energy available to do work (G)." },
    { term: "Spontaneous", definition: "A reaction that occurs naturally." },
    { term: "First Law", definition: "Energy is conserved (ΔU = q + w)." },
    { term: "Second Law", definition: "Entropy of the universe increases." },
    { term: "Third Law", definition: "Entropy is zero at absolute zero." },
    { term: "Hess's Law", definition: "ΔH is independent of reaction pathway." },
    { term: "Bond Energy", definition: "Energy required to break one mole of bonds." },
    { term: "Enthalpy of Formation", definition: "ΔH when one mole of compound forms." },
    { term: "Standard State", definition: "The state of a substance at 1 atm and 298 K." },
    { term: "Internal Energy", definition: "Total energy of a system (U)." },
    { term: "Work", definition: "Energy transferred by force (w = -PΔV)." },
    { term: "Heat", definition: "Energy transferred due to temperature difference." },
    { term: "Equilibrium", definition: "State where ΔG = 0." }
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
      question: "What is thermodynamics?",
      type: "multiple_choice",
      options: [
        "The study of atomic structure",
        "The study of energy, heat, and work",
        "The study of chemical bonding",
        "The study of organic compounds"
      ],
      answer: "The study of energy, heat, and work",
      explanation: "Thermodynamics is the study of energy, heat, and work in chemical and physical processes."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the system in thermodynamics?",
      type: "multiple_choice",
      options: [
        "The universe",
        "The part being studied",
        "Everything outside the part being studied",
        "The surroundings"
      ],
      answer: "The part being studied",
      explanation: "The system is the specific part of the universe being studied."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an exothermic reaction?",
      type: "multiple_choice",
      options: [
        "A reaction that absorbs heat",
        "A reaction that releases heat",
        "A reaction that does not involve heat",
        "A reaction that creates energy"
      ],
      answer: "A reaction that releases heat",
      explanation: "An exothermic reaction releases heat to the surroundings."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first law of thermodynamics?",
      type: "multiple_choice",
      options: [
        "Energy is created",
        "Energy is conserved",
        "Energy is destroyed",
        "Entropy increases"
      ],
      answer: "Energy is conserved",
      explanation: "The first law states that energy cannot be created or destroyed, only transformed."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is ΔH in a chemical reaction?",
      type: "multiple_choice",
      options: [
        "The change in temperature",
        "The change in enthalpy",
        "The change in entropy",
        "The change in pressure"
      ],
      answer: "The change in enthalpy",
      explanation: "ΔH is the change in enthalpy, the heat absorbed or released."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "If a reaction has ΔH = -184 kJ/mol, is it exothermic or endothermic?",
      type: "multiple_choice",
      options: ["Exothermic", "Endothermic", "Both", "Neither"],
      answer: "Exothermic",
      explanation: "A negative ΔH means the reaction is exothermic."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is entropy?",
      type: "multiple_choice",
      options: [
        "The energy of a system",
        "The measure of disorder",
        "The temperature of a system",
        "The pressure of a system"
      ],
      answer: "The measure of disorder",
      explanation: "Entropy is a measure of disorder or randomness in a system."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is Gibbs free energy (ΔG)?",
      type: "multiple_choice",
      options: [
        "The energy available to do work",
        "The total energy of a system",
        "The heat content of a system",
        "The disorder of a system"
      ],
      answer: "The energy available to do work",
      explanation: "Gibbs free energy is the energy available to do useful work."
    },
    {
      id: "prac_009",
      objective: "obj_011",
      difficulty: "hard",
      question: "If ΔH = -100 kJ and ΔS = -0.2 kJ/K at 300 K, what is ΔG?",
      type: "multiple_choice",
      options: ["-40 kJ", "-60 kJ", "-100 kJ", "140 kJ"],
      answer: "-40 kJ",
      explanation: "ΔG = -100 - (300 × -0.2) = -100 + 60 = -40 kJ"
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "If ΔG < 0, the reaction is:",
      type: "multiple_choice",
      options: ["Spontaneous", "Non-spontaneous", "At equilibrium", "Impossible"],
      answer: "Spontaneous",
      explanation: "A negative ΔG indicates a spontaneous reaction."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "For ΔH > 0 and ΔS > 0, the reaction is spontaneous at:",
      type: "multiple_choice",
      options: ["Low temperatures", "High temperatures", "All temperatures", "No temperatures"],
      answer: "High temperatures",
      explanation: "When both ΔH and ΔS are positive, spontaneity requires high T."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "ΔH°f for H₂O(l) is -286 kJ/mol. What does this mean?",
      type: "multiple_choice",
      options: [
        "Forming water releases 286 kJ",
        "Forming water absorbs 286 kJ",
        "Water decomposes releasing 286 kJ",
        "Water has no enthalpy"
      ],
      answer: "Forming water releases 286 kJ",
      explanation: "A negative ΔH°f means energy is released when the compound forms."
    },
    {
      id: "prac_013",
      objective: "obj_015",
      difficulty: "hard",
      question: "What does the third law of thermodynamics state?",
      type: "multiple_choice",
      options: [
        "Energy is conserved",
        "Entropy increases",
        "Entropy is zero at 0 K",
        "ΔG is always negative"
      ],
      answer: "Entropy is zero at 0 K",
      explanation: "The third law states that entropy of a perfect crystal at absolute zero is zero."
    },
    {
      id: "prac_014",
      objective: "obj_006",
      difficulty: "hard",
      question: "Calculate ΔH using bond energies: H₂ + Cl₂ → 2HCl. (H-H = 436, Cl-Cl = 242, H-Cl = 431 kJ/mol)",
      type: "multiple_choice",
      options: ["+184 kJ", "-184 kJ", "+678 kJ", "-862 kJ"],
      answer: "-184 kJ",
      explanation: "Bonds broken: 436+242=678, Bonds formed: 2×431=862, ΔH=678-862=-184 kJ"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "Hess's Law states that ΔH depends on:",
      type: "multiple_choice",
      options: [
        "The path of the reaction",
        "Only the initial and final states",
        "The temperature only",
        "The pressure only"
      ],
      answer: "Only the initial and final states",
      explanation: "Hess's Law states that ΔH is independent of the reaction pathway."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_thermodynamics",
    title: "Thermodynamics Quiz",
    description: "Test your understanding of thermodynamics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is thermodynamics?",
        type: "short_answer",
        answer_key: "The study of energy, heat, and work",
        explanation: "Thermodynamics is the study of energy, heat, and work in chemical processes."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the system in thermodynamics?",
        type: "short_answer",
        answer_key: "The part being studied",
        explanation: "The system is the specific part of the universe being studied."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an exothermic reaction?",
        type: "short_answer",
        answer_key: "A reaction that releases heat",
        explanation: "An exothermic reaction releases heat to the surroundings."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first law of thermodynamics?",
        type: "short_answer",
        answer_key: "Energy is conserved",
        explanation: "The first law states that energy cannot be created or destroyed."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does ΔH represent?",
        type: "short_answer",
        answer_key: "Change in enthalpy",
        explanation: "ΔH is the change in enthalpy, the heat absorbed or released."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "If ΔH is negative, is the reaction exothermic or endothermic?",
        type: "short_answer",
        answer_key: "Exothermic",
        explanation: "A negative ΔH indicates an exothermic reaction."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is entropy?",
        type: "short_answer",
        answer_key: "A measure of disorder",
        explanation: "Entropy is a measure of disorder or randomness."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is Gibbs free energy?",
        type: "short_answer",
        answer_key: "Energy available to do work",
        explanation: "Gibbs free energy is the energy available to do useful work."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the formula for Gibbs free energy?",
        type: "short_answer",
        answer_key: "ΔG = ΔH - TΔS",
        explanation: "ΔG = ΔH - TΔS is the Gibbs free energy equation."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "If ΔG < 0, is the reaction spontaneous?",
        type: "short_answer",
        answer_key: "Yes",
        explanation: "A negative ΔG indicates a spontaneous reaction."
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
        "Understand the laws of thermodynamics",
        "Explain enthalpy and entropy",
        "Calculate Gibbs free energy",
        "Predict spontaneity of reactions"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is thermodynamics?" },
        { time: "5-10 min", activity: "Direct Instruction - First Law and Enthalpy" },
        { time: "10-15 min", activity: "Direct Instruction - Exothermic and Endothermic" },
        { time: "15-20 min", activity: "Direct Instruction - Hess's Law" },
        { time: "20-25 min", activity: "Direct Instruction - Entropy" },
        { time: "25-30 min", activity: "Direct Instruction - Second Law" },
        { time: "30-35 min", activity: "Direct Instruction - Gibbs Free Energy" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of energy, heat, and work",
        prac_002: "The part being studied",
        prac_003: "A reaction that releases heat",
        prac_004: "Energy is conserved",
        prac_005: "The change in enthalpy",
        prac_006: "Exothermic",
        prac_007: "The measure of disorder",
        prac_008: "The energy available to do work",
        prac_009: "-40 kJ",
        prac_010: "Spontaneous",
        prac_011: "High temperatures",
        prac_012: "Forming water releases 286 kJ",
        prac_013: "Entropy is zero at 0 K",
        prac_014: "-184 kJ",
        prac_015: "Only the initial and final states"
      },
      assessment: {
        ass_001: "The study of energy, heat, and work",
        ass_002: "The part being studied",
        ass_003: "A reaction that releases heat",
        ass_004: "Energy is conserved",
        ass_005: "Change in enthalpy",
        ass_006: "Exothermic",
        ass_007: "A measure of disorder",
        ass_008: "Energy available to do work",
        ass_009: "ΔG = ΔH - TΔS",
        ass_010: "Yes"
      }
    },
    extensionActivities: [
      "Research heat engines",
      "Study refrigeration cycles",
      "Analyze power plant efficiency",
      "Research the Haber process thermodynamics"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide formula cards"
      ],
      advanced: [
        "Research thermodynamic cycles",
        "Study Carnot engines",
        "Research free energy calculations",
        "Study biological thermodynamics"
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
      title: "Energy Level Diagrams",
      description: "Diagrams for exothermic and endothermic reactions",
      url: "/diagrams/energy-level.png",
      alt: "Energy level diagrams"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Thermodynamic Relationships",
      description: "Chart showing relationships between ΔH, ΔS, and ΔG",
      url: "/diagrams/thermodynamic-relationships.png",
      alt: "Thermodynamic relationships chart"
    }
  ]
};