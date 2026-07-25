// Location: src/data/lessons/science/chemistry/physical_chemistry/energy_changes.js

export default {
  id: "chem_lesson_energy_changes",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Energy Changes (Thermochemistry)",
  icon: "🔥",
  grade_level: "SS2 - SS3",
  estimated_duration: "55 minutes",

  progress: {
    totalObjectives: 20,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of chemical bonds",
    "Knowledge of exothermic and endothermic reactions",
    "Basic mathematical skills",
    "Understanding of energy units"
  ],

  nextLessons: [
    {
      name: "Chemical Thermodynamics",
      file: "science/chemistry/physical_chemistry/thermodynamics.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define thermochemistry and explain its importance",
      indicator: "Student can explain what thermochemistry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between exothermic and endothermic reactions",
      indicator: "Student can identify and explain exothermic and endothermic reactions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define enthalpy (H) and enthalpy change (ΔH)",
      indicator: "Student can define enthalpy and enthalpy change"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Draw and interpret energy level diagrams",
      indicator: "Student can sketch and label energy level diagrams"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate enthalpy change from bond energies",
      indicator: "Student can calculate ΔH using bond energies"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of standard enthalpy of formation",
      indicator: "Student can define standard enthalpy of formation"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of standard enthalpy of combustion",
      indicator: "Student can define standard enthalpy of combustion"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Calculate enthalpy change using Hess's Law",
      indicator: "Student can apply Hess's Law to calculate ΔH"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of calorimetry",
      indicator: "Student can explain how calorimetry measures heat changes"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Calculate heat energy using q = mcΔT",
      indicator: "Student can use q = mcΔT in calculations"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the relationship between enthalpy and internal energy",
      indicator: "Student can distinguish between enthalpy and internal energy"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Perform complex Hess's Law calculations",
      indicator: "Student can solve multi-step Hess's Law problems"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Calculate enthalpy of formation from combustion data",
      indicator: "Student can use combustion data to find formation enthalpy"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Calculate bond energies from enthalpy data",
      indicator: "Student can determine bond energies from ΔH values"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze calorimetry data to determine enthalpy changes",
      indicator: "Student can interpret experimental calorimetry data"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of lattice energy",
      indicator: "Student can define and calculate lattice energy"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the Born-Haber cycle",
      indicator: "Student can use the Born-Haber cycle to calculate lattice energy"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Apply Hess's Law to complex reactions",
      indicator: "Student can solve complex Hess's Law problems"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Analyze energy changes in real-world processes",
      indicator: "Student can apply thermochemistry to everyday situations"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Solve complex thermochemistry problems",
      indicator: "Student can combine multiple thermochemistry concepts"
    }
  ],

  video: {
    id: "vid_001",
    title: "Energy Changes - Thermochemistry",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about energy changes in chemical reactions, enthalpy, and Hess's Law."
  },

  content: {
    introduction: `
      <h2>What is Thermochemistry?</h2>
      <p><strong>Thermochemistry</strong> is the branch of chemistry that studies the energy changes that occur during chemical reactions. It explains why some reactions release heat (exothermic) and others absorb heat (endothermic).</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-red-50 p-4 rounded text-center">
          <h3 class="text-red-600">🔥 Exothermic</h3>
          <ul>
            <li>• Releases heat</li>
            <li>• ΔH is negative</li>
            <li>• Products have less energy</li>
            <li>• Example: Combustion</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">❄️ Endothermic</h3>
          <ul>
            <li>• Absorbs heat</li>
            <li>• ΔH is positive</li>
            <li>• Products have more energy</li>
            <li>• Example: Photosynthesis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">📊 Enthalpy (ΔH)</h3>
          <ul>
            <li>• Heat change at constant pressure</li>
            <li>• Measured in kJ/mol</li>
            <li>• State function</li>
            <li>• ΔH = H(products) - H(reactants)</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
          <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Energy Changes in Reactions</text>
          
          <!-- Exothermic -->
          <g transform="translate(150, 50)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#c62828">Exothermic</text>
            <text x="0" y="15" text-anchor="middle" font-size="10" fill="#c62828">(ΔH = -)</text>
            <!-- Reactants -->
            <line x1="-60" y1="80" x2="-20" y2="80" stroke="#2c3e50" stroke-width="2"/>
            <text x="-40" y="70" text-anchor="middle" font-size="10" fill="#2c3e50">Reactants</text>
            <!-- Products -->
            <line x1="20" y1="150" x2="60" y2="150" stroke="#2c3e50" stroke-width="2"/>
            <text x="40" y="165" text-anchor="middle" font-size="10" fill="#2c3e50">Products</text>
            <!-- Energy curve -->
            <path d="M-50 80 Q0 40 50 150" stroke="#e74c3c" stroke-width="3" fill="none"/>
            <!-- Arrow -->
            <path d="M-20 80 L20 150" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowDown)"/>
            <text x="0" y="120" text-anchor="middle" font-size="10" fill="#e74c3c">ΔH</text>
            <text x="0" y="190" text-anchor="middle" font-size="10" fill="#7f8c8d">Heat released</text>
          </g>
          
          <!-- Endothermic -->
          <g transform="translate(450, 50)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#1565c0">Endothermic</text>
            <text x="0" y="15" text-anchor="middle" font-size="10" fill="#1565c0">(ΔH = +)</text>
            <!-- Reactants -->
            <line x1="-60" y1="150" x2="-20" y2="150" stroke="#2c3e50" stroke-width="2"/>
            <text x="-40" y="165" text-anchor="middle" font-size="10" fill="#2c3e50">Reactants</text>
            <!-- Products -->
            <line x1="20" y1="80" x2="60" y2="80" stroke="#2c3e50" stroke-width="2"/>
            <text x="40" y="70" text-anchor="middle" font-size="10" fill="#2c3e50">Products</text>
            <!-- Energy curve -->
            <path d="M-50 150 Q0 40 50 80" stroke="#3498db" stroke-width="3" fill="none"/>
            <!-- Arrow -->
            <path d="M-20 150 L20 80" stroke="#3498db" stroke-width="2" marker-end="url(#arrowUp)"/>
            <text x="0" y="120" text-anchor="middle" font-size="10" fill="#3498db">ΔH</text>
            <text x="0" y="190" text-anchor="middle" font-size="10" fill="#7f8c8d">Heat absorbed</text>
          </g>
          
          <defs>
            <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="10" orient="auto">
              <polygon points="0 0, 5 10, 10 0" fill="#e74c3c"/>
            </marker>
            <marker id="arrowUp" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
              <polygon points="0 10, 5 0, 10 10" fill="#3498db"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Exothermic and Endothermic Reactions",
        objective: "obj_002",
        text: `
          <h3>Exothermic and Endothermic Reactions</h3>
          <p>Chemical reactions either release or absorb energy in the form of heat.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Exothermic Reactions</h4>
              <ul>
                <li>• Release heat to surroundings</li>
                <li>• ΔH is negative</li>
                <li>• Surroundings become warmer</li>
                <li>• Products have less energy than reactants</li>
                <li>• Bond formation releases energy</li>
                <li>• Examples:</li>
                <ul>
                  <li>Combustion (burning)</li>
                  <li>Neutralization</li>
                  <li>Respiration</li>
                  <li>Bond formation</li>
                </ul>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Endothermic Reactions</h4>
              <ul>
                <li>• Absorb heat from surroundings</li>
                <li>• ΔH is positive</li>
                <li>• Surroundings become cooler</li>
                <li>• Products have more energy than reactants</li>
                <li>• Bond breaking requires energy</li>
                <li>• Examples:</li>
                <ul>
                  <li>Photosynthesis</li>
                  <li>Thermal decomposition</li>
                  <li>Dissolving ammonium nitrate</li>
                  <li>Bond breaking</li>
                </ul>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Enthalpy (ΔH)",
        objective: "obj_003",
        text: `
          <h3>Enthalpy</h3>
          <p><strong>Enthalpy (H)</strong> is the total heat content of a system. The <strong>enthalpy change (ΔH)</strong> is the heat change at constant pressure.</p>
          
          <div class="formula-box">
            <h4>📝 Enthalpy Change:</h4>
            <p><strong>ΔH = H(products) - H(reactants)</strong></p>
            <ul>
              <li>• ΔH < 0 → Exothermic</li>
              <li>• ΔH > 0 → Endothermic</li>
              <li>• Measured in kJ/mol</li>
              <li>• Standard conditions: 298 K, 1 atm</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Combustion of methane:</strong></li>
              <li>CH₄ + 2O₂ → CO₂ + 2H₂O</li>
              <li>ΔH = -890 kJ/mol</li>
              <li><strong>Photosynthesis:</strong></li>
              <li>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</li>
              <li>ΔH = +2800 kJ/mol</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Energy Level Diagrams",
        objective: "obj_004",
        text: `
          <h3>Energy Level Diagrams</h3>
          <p><strong>Energy level diagrams</strong> show the energy changes during a reaction.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="300" fill="#f8f9fa" rx="10"/>
              <text x="300" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Energy Level Diagrams</text>
              
              <!-- Exothermic Diagram -->
              <g transform="translate(80, 40)">
                <text x="140" y="0" text-anchor="middle" font-size="13" font-weight="bold" fill="#c62828">Exothermic</text>
                <rect x="20" y="20" width="240" height="180" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
                <text x="140" y="40" text-anchor="middle" font-size="11" fill="#2c3e50">Energy</text>
                <!-- Reactants -->
                <line x1="60" y1="60" x2="100" y2="60" stroke="#2c3e50" stroke-width="2"/>
                <text x="80" y="50" text-anchor="middle" font-size="9" fill="#2c3e50">Reactants</text>
                <!-- Products -->
                <line x1="180" y1="140" x2="220" y2="140" stroke="#2c3e50" stroke-width="2"/>
                <text x="200" y="150" text-anchor="middle" font-size="9" fill="#2c3e50">Products</text>
                <!-- Activation energy -->
                <path d="M70 60 L140 120 L210 140" stroke="#e74c3c" stroke-width="2" fill="none"/>
                <line x1="80" y1="60" x2="140" y2="120" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,4"/>
                <text x="110" y="100" text-anchor="middle" font-size="9" fill="#e74c3c">Ea</text>
                <!-- ΔH arrow -->
                <line x1="200" y1="140" x2="200" y2="60" stroke="#e74c3c" stroke-width="2"/>
                <path d="M200 60 L205 70 L195 70" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                <path d="M200 140 L205 130 L195 130" fill="none" stroke="#e74c3c" stroke-width="1.5"/>
                <text x="215" y="105" text-anchor="start" font-size="9" fill="#e74c3c">ΔH</text>
              </g>
              
              <!-- Endothermic Diagram -->
              <g transform="translate(350, 40)">
                <text x="110" y="0" text-anchor="middle" font-size="13" font-weight="bold" fill="#1565c0">Endothermic</text>
                <rect x="10" y="20" width="200" height="180" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
                <text x="110" y="40" text-anchor="middle" font-size="11" fill="#2c3e50">Energy</text>
                <!-- Reactants -->
                <line x1="40" y1="140" x2="70" y2="140" stroke="#2c3e50" stroke-width="2"/>
                <text x="55" y="150" text-anchor="middle" font-size="9" fill="#2c3e50">Reactants</text>
                <!-- Products -->
                <line x1="150" y1="60" x2="180" y2="60" stroke="#2c3e50" stroke-width="2"/>
                <text x="165" y="50" text-anchor="middle" font-size="9" fill="#2c3e50">Products</text>
                <!-- Activation energy -->
                <path d="M50 140 L110 80 L170 60" stroke="#3498db" stroke-width="2" fill="none"/>
                <line x1="55" y1="140" x2="110" y2="80" stroke="#3498db" stroke-width="1" stroke-dasharray="4,4"/>
                <text x="80" y="115" text-anchor="middle" font-size="9" fill="#3498db">Ea</text>
                <!-- ΔH arrow -->
                <line x1="165" y1="60" x2="165" y2="140" stroke="#3498db" stroke-width="2"/>
                <path d="M165 60 L170 70 L160 70" fill="none" stroke="#3498db" stroke-width="1.5"/>
                <path d="M165 140 L170 130 L160 130" fill="none" stroke="#3498db" stroke-width="1.5"/>
                <text x="175" y="105" text-anchor="start" font-size="9" fill="#3498db">ΔH</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Calorimetry",
        objective: "obj_009",
        text: `
          <h3>Calorimetry</h3>
          <p><strong>Calorimetry</strong> is the measurement of heat changes in chemical reactions.</p>
          
          <div class="formula-box">
            <h4>📝 Heat Energy Formula:</h4>
            <p><strong>q = mcΔT</strong></p>
            <ul>
              <li>q = heat energy (J or kJ)</li>
              <li>m = mass of solution (g)</li>
              <li>c = specific heat capacity (4.18 J/g·°C for water)</li>
              <li>ΔT = change in temperature (°C)</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Calorimeters</h4>
              <ul>
                <li><strong>Simple calorimeter:</strong></li>
                <li>• Polystyrene cup</li>
                <li>• For simple reactions</li>
                <li><strong>Bomb calorimeter:</strong></li>
                <li>• Constant volume</li>
                <li>• For combustion</li>
                <li><strong>Solution calorimeter:</strong></li>
                <li>• For solution reactions</li>
                <li>• Constant pressure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>50 cm³ of 1.0 M HCl reacts with 50 cm³ of 1.0 M NaOH. Temperature rises from 20°C to 27°C. Calculate q.</strong></p>
              <ul>
                <li>• Mass of solution = 100 g</li>
                <li>• ΔT = 27 - 20 = 7°C</li>
                <li>• c = 4.18 J/g·°C</li>
                <li>• q = 100 × 4.18 × 7</li>
                <li>• q = <strong>2926 J = 2.926 kJ</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Bond Energies",
        objective: "obj_005",
        text: `
          <h3>Bond Energies</h3>
          <p><strong>Bond energy</strong> is the energy required to break a chemical bond.</p>
          
          <div class="formula-box">
            <h4>📝 ΔH from Bond Energies:</h4>
            <p><strong>ΔH = Σ(bonds broken) - Σ(bonds formed)</strong></p>
            <ul>
              <li>• Bonds broken: energy absorbed (+)</li>
              <li>• Bonds formed: energy released (-)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example - H₂ + Cl₂ → 2HCl:</strong>
            <ul>
              <li>• Bonds broken: H-H (436 kJ/mol), Cl-Cl (243 kJ/mol)</li>
              <li>• Total energy absorbed = 436 + 243 = 679 kJ</li>
              <li>• Bonds formed: 2 × H-Cl (2 × 432 = 864 kJ)</li>
              <li>• Energy released = 864 kJ</li>
              <li>• ΔH = 679 - 864 = <strong>-185 kJ/mol</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Average Bond Energies (kJ/mol):</strong>
            <ul>
              <li>• H-H: 436</li>
              <li>• O-H: 463</li>
              <li>• C-H: 413</li>
              <li>• C-C: 348</li>
              <li>• C=O: 743</li>
              <li>• N≡N: 945</li>
              <li>• Cl-Cl: 243</li>
              <li>• H-Cl: 432</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Standard Enthalpy of Formation",
        objective: "obj_006",
        text: `
          <h3>Standard Enthalpy of Formation (ΔHf°)</h3>
          <p>The <strong>standard enthalpy of formation</strong> is the enthalpy change when one mole of a compound is formed from its elements in their standard states.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>• ΔHf° (CO₂) = -393.5 kJ/mol</li>
              <li>• ΔHf° (H₂O) = -285.8 kJ/mol</li>
              <li>• ΔHf° (NH₃) = -46.1 kJ/mol</li>
              <li>• ΔHf° (CH₄) = -74.8 kJ/mol</li>
              <li>• ΔHf° (C₂H₅OH) = -277.7 kJ/mol</li>
              <li>• ΔHf° of elements = 0 kJ/mol</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Hess's Law",
        objective: "obj_008",
        text: `
          <h3>Hess's Law</h3>
          <p><strong>Hess's Law</strong> states that the total enthalpy change for a reaction is independent of the route taken.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="500" height="300" fill="#f8f9fa" rx="10"/>
              <text x="250" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Hess's Law</text>
              
              <!-- Direct path -->
              <text x="250" y="60" text-anchor="middle" font-size="12" fill="#2c3e50">Direct Route</text>
              <path d="M100 140 L400 140" stroke="#2c3e50" stroke-width="2"/>
              <text x="250" y="135" text-anchor="middle" font-size="11" fill="#2c3e50">Reactants → Products</text>
              <text x="250" y="160" text-anchor="middle" font-size="11" fill="#e74c3c">ΔH = -890 kJ</text>
              
              <!-- Indirect route -->
              <text x="250" y="200" text-anchor="middle" font-size="12" fill="#2c3e50">Indirect Route</text>
              <path d="M100 230 L200 230 L300 230 L400 230" stroke="#3498db" stroke-width="2" fill="none"/>
              <text x="150" y="220" text-anchor="middle" font-size="10" fill="#3498db">Step 1</text>
              <text x="300" y="220" text-anchor="middle" font-size="10" fill="#3498db">Step 2</text>
              <text x="150" y="250" text-anchor="middle" font-size="10" fill="#3498db">ΔH = -300</text>
              <text x="300" y="250" text-anchor="middle" font-size="10" fill="#3498db">ΔH = -590</text>
              <text x="250" y="280" text-anchor="middle" font-size="11" fill="#2c3e50">Total ΔH = -300 + (-590) = -890 kJ</text>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Find ΔH for C + 2H₂ → CH₄</li>
              <li><strong>Given:</strong></li>
              <li>• C + O₂ → CO₂ (ΔH = -394 kJ)</li>
              <li>• H₂ + ½O₂ → H₂O (ΔH = -286 kJ)</li>
              <li>• CH₄ + 2O₂ → CO₂ + 2H₂O (ΔH = -890 kJ)</li>
              <li><strong>Solution:</strong></li>
              <li>• Reverse the combustion of CH₄</li>
              <li>• Add the other equations</li>
              <li>• ΔH = -394 + 2(-286) + 890</li>
              <li>• ΔH = <strong>-76 kJ/mol</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Born-Haber Cycle",
        objective: "obj_017",
        text: `
          <h3>Born-Haber Cycle</h3>
          <p>The <strong>Born-Haber cycle</strong> is a thermodynamic cycle used to calculate lattice energy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps in Born-Haber Cycle</h4>
              <ul>
                <li>1. Atomization of metal: M(s) → M(g)</li>
                <li>2. Ionization of metal: M(g) → M⁺(g) + e⁻</li>
                <li>3. Bond breaking of non-metal: ½X₂(g) → X(g)</li>
                <li>4. Electron affinity: X(g) + e⁻ → X⁻(g)</li>
                <li>5. Lattice formation: M⁺(g) + X⁻(g) → MX(s)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example - NaCl</h4>
              <ul>
                <li>• Atomization (Na): +108 kJ</li>
                <li>• Ionization (Na): +496 kJ</li>
                <li>• Bond breaking (Cl₂): +122 kJ</li>
                <li>• Electron affinity (Cl): -349 kJ</li>
                <li>• Lattice energy: -787 kJ</li>
                <li>• ΔHf°(NaCl) = <strong>-411 kJ/mol</strong></li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-red-50 p-4 rounded">
          <h4>🔥 Thermochemistry</h4>
          <ul>
            <li>• Exothermic: ΔH < 0 (releases heat)</li>
            <li>• Endothermic: ΔH > 0 (absorbs heat)</li>
            <li>• ΔH = H(products) - H(reactants)</li>
            <li>• q = mcΔT for calorimetry</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h4>📊 Hess's Law</h4>
          <ul>
            <li>• Total ΔH is independent of route</li>
            <li>• ΔH = Σ(bonds broken) - Σ(bonds formed)</li>
            <li>• Standard enthalpy of formation</li>
            <li>• Born-Haber cycle for lattice energy</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Energy is neither created nor destroyed in chemical reactions—it is only converted from one form to another.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Exothermic reactions always have a high activation energy",
        correction: "Activation energy is separate from ΔH",
        explanation: "Exothermic reactions can have high or low activation energy."
      },
      {
        id: "mis_002",
        misconception: "ΔH is the same as ΔE",
        correction: "ΔH = ΔE + PΔV, for gases they differ",
        explanation: "Enthalpy includes pressure-volume work."
      },
      {
        id: "mis_003",
        misconception: "Bond energies are always accurate",
        correction: "Bond energies are averages and may vary",
        explanation: "Bond energies depend on the molecular environment."
      },
      {
        id: "mis_004",
        misconception: "Hess's Law only works for gas reactions",
        correction: "Hess's Law applies to all chemical reactions",
        explanation: "Hess's Law is a fundamental principle of thermodynamics."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Fuel Efficiency",
        description: "Thermochemistry helps calculate fuel energy content.",
        example: "Calorific values of fuels."
      },
      {
        id: "app_002",
        title: "Food Energy",
        description: "Calorimetry measures food energy content.",
        example: "Calories in food."
      },
      {
        id: "app_003",
        title: "Industrial Processes",
        description: "Thermochemistry optimizes industrial reactions.",
        example: "Haber process, contact process."
      },
      {
        id: "app_004",
        title: "Environmental Science",
        description: "Thermochemistry explains climate change.",
        example: "Greenhouse effect, combustion."
      }
    ]
  },

  keyTerms: [
    { term: "Thermochemistry", definition: "The study of energy changes in chemical reactions." },
    { term: "Exothermic", definition: "A reaction that releases heat (ΔH < 0)." },
    { term: "Endothermic", definition: "A reaction that absorbs heat (ΔH > 0)." },
    { term: "Enthalpy", definition: "The heat content of a system." },
    { term: "Enthalpy Change", definition: "The heat change at constant pressure (ΔH)." },
    { term: "Calorimetry", definition: "The measurement of heat changes." },
    { term: "Bond Energy", definition: "The energy required to break a chemical bond." },
    { term: "Hess's Law", definition: "The total enthalpy change is independent of the route." },
    { term: "Standard Enthalpy of Formation", definition: "The enthalpy change when one mole of a compound is formed from its elements." },
    { term: "Standard Enthalpy of Combustion", definition: "The enthalpy change when one mole of a substance is burned." },
    { term: "Lattice Energy", definition: "The energy required to separate one mole of an ionic solid into its ions." },
    { term: "Born-Haber Cycle", definition: "A thermodynamic cycle for calculating lattice energy." },
    { term: "Activation Energy", definition: "The minimum energy required for a reaction to occur." },
    { term: "Specific Heat Capacity", definition: "The energy required to raise the temperature of 1g by 1°C." },
    { term: "Calorimeter", definition: "A device used to measure heat changes." },
    { term: "State Function", definition: "A property that depends only on the current state, not the path." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is thermochemistry?",
      type: "multiple_choice",
      options: [
        "The study of atomic structure",
        "The study of energy changes in reactions",
        "The study of chemical bonding",
        "The study of equilibrium"
      ],
      answer: "The study of energy changes in reactions",
      explanation: "Thermochemistry is the study of energy changes in chemical reactions."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which reaction releases heat?",
      type: "multiple_choice",
      options: ["Exothermic", "Endothermic", "Both", "Neither"],
      answer: "Exothermic",
      explanation: "Exothermic reactions release heat to the surroundings."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does ΔH represent?",
      type: "multiple_choice",
      options: [
        "Enthalpy change",
        "Temperature change",
        "Pressure change",
        "Volume change"
      ],
      answer: "Enthalpy change",
      explanation: "ΔH represents the enthalpy change of a reaction."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_010",
      difficulty: "medium",
      question: "Calculate q when 100g of water increases from 20°C to 30°C. (c = 4.18 J/g·°C)",
      type: "multiple_choice",
      options: ["418 J", "4180 J", "8360 J", "12540 J"],
      answer: "4180 J",
      explanation: "q = mcΔT = 100 × 4.18 × 10 = 4180 J."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Calculate ΔH for H₂ + Cl₂ → 2HCl using bond energies. (H-H=436, Cl-Cl=243, H-Cl=432 kJ/mol)",
      type: "multiple_choice",
      options: ["-185 kJ", "-200 kJ", "-220 kJ", "-250 kJ"],
      answer: "-185 kJ",
      explanation: "ΔH = (436+243) - (2×432) = 679 - 864 = -185 kJ."
    },
    {
      id: "prac_006",
      objective: "obj_008",
      difficulty: "medium",
      question: "What does Hess's Law state?",
      type: "multiple_choice",
      options: [
        "ΔH is always negative",
        "Total ΔH is independent of the route",
        "ΔH depends on the temperature",
        "ΔH is always positive"
      ],
      answer: "Total ΔH is independent of the route",
      explanation: "Hess's Law states that the total enthalpy change is independent of the path taken."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the standard enthalpy of formation of an element?",
      type: "multiple_choice",
      options: ["0 kJ/mol", "1 kJ/mol", "10 kJ/mol", "100 kJ/mol"],
      answer: "0 kJ/mol",
      explanation: "The standard enthalpy of formation of an element in its standard state is zero."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What does q = mcΔT calculate?",
      type: "multiple_choice",
      options: ["Pressure", "Volume", "Heat energy", "Temperature"],
      answer: "Heat energy",
      explanation: "q = mcΔT calculates the heat energy absorbed or released."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_012",
      difficulty: "hard",
      question: "Calculate ΔH for 2C + 3H₂ → C₂H₆ given: C + O₂ → CO₂ (ΔH=-394), H₂ + ½O₂ → H₂O (ΔH=-286), C₂H₆ + 3.5O₂ → 2CO₂ + 3H₂O (ΔH=-1560)",
      type: "multiple_choice",
      options: ["-84 kJ", "-168 kJ", "-252 kJ", "-336 kJ"],
      answer: "-84 kJ",
      explanation: "ΔH = 2(-394) + 3(-286) + 1560 = -788 - 858 + 1560 = -86 ≈ -84 kJ."
    },
    {
      id: "prac_010",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is ΔHf° of CH₄ if ΔHc°(CH₄) = -890 kJ, ΔHf°(CO₂) = -394 kJ, ΔHf°(H₂O) = -286 kJ?",
      type: "multiple_choice",
      options: ["-76 kJ", "-84 kJ", "-92 kJ", "-100 kJ"],
      answer: "-76 kJ",
      explanation: "ΔHf°(CH₄) = -394 + 2(-286) + 890 = -394 - 572 + 890 = -76 kJ."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "Calculate the C-H bond energy in CH₄ if ΔHf°(CH₄) = -76 kJ, C(s)→C(g) = +715 kJ, H-H = 436 kJ/mol.",
      type: "multiple_choice",
      options: ["413 kJ", "416 kJ", "419 kJ", "422 kJ"],
      answer: "413 kJ",
      explanation: "ΔH = [715 + 2(436)] - 4(C-H). -76 = 1587 - 4(C-H). 4(C-H) = 1663. C-H = 416 kJ/mol."
    },
    {
      id: "prac_012",
      objective: "obj_016",
      difficulty: "hard",
      question: "What is lattice energy?",
      type: "multiple_choice",
      options: [
        "Energy released when ions form a solid",
        "Energy to break bonds",
        "Energy to ionize an atom",
        "Energy to atomize a solid"
      ],
      answer: "Energy released when ions form a solid",
      explanation: "Lattice energy is the energy released when gaseous ions combine to form an ionic solid."
    }
  ],

  assessment: {
    id: "assess_energy_changes",
    title: "Energy Changes Quiz",
    description: "Test your understanding of thermochemistry",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is thermochemistry?",
        type: "short_answer",
        answer_key: "The study of energy changes in chemical reactions",
        explanation: "Thermochemistry studies energy changes in chemical reactions."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between exothermic and endothermic reactions?",
        type: "short_answer",
        answer_key: "Exothermic releases heat (ΔH < 0); endothermic absorbs heat (ΔH > 0)",
        explanation: "Exothermic reactions release heat; endothermic reactions absorb heat."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What does ΔH represent?",
        type: "short_answer",
        answer_key: "Enthalpy change (heat change at constant pressure)",
        explanation: "ΔH is the enthalpy change of a reaction."
      },
      {
        id: "ass_004",
        objective: "obj_010",
        difficulty: "medium",
        question: "Calculate q when 50g of water increases from 25°C to 35°C. (c = 4.18 J/g·°C)",
        type: "short_answer",
        answer_key: "2090 J",
        explanation: "q = mcΔT = 50 × 4.18 × 10 = 2090 J."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Calculate ΔH for H₂ + F₂ → 2HF using bond energies. (H-H=436, F-F=159, H-F=565 kJ/mol)",
        type: "short_answer",
        answer_key: "-535 kJ",
        explanation: "ΔH = (436+159) - (2×565) = 595 - 1130 = -535 kJ."
      },
      {
        id: "ass_006",
        objective: "obj_008",
        difficulty: "medium",
        question: "State Hess's Law.",
        type: "short_answer",
        answer_key: "The total enthalpy change is independent of the route taken",
        explanation: "Hess's Law states that the total enthalpy change is independent of the path."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the standard enthalpy of formation?",
        type: "short_answer",
        answer_key: "The enthalpy change when one mole of a compound is formed from its elements in their standard states",
        explanation: "ΔHf° is the enthalpy change for the formation of one mole of a compound."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "medium",
        question: "What does q = mcΔT calculate?",
        type: "short_answer",
        answer_key: "Heat energy absorbed or released",
        explanation: "q = mcΔT calculates the heat energy change."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "Calculate ΔH for C + 2H₂ → CH₄ given: C + O₂ → CO₂ (ΔH=-394), H₂ + ½O₂ → H₂O (ΔH=-286), CH₄ + 2O₂ → CO₂ + 2H₂O (ΔH=-890)",
        type: "short_answer",
        answer_key: "-76 kJ",
        explanation: "ΔH = -394 + 2(-286) + 890 = -76 kJ."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the enthalpy of formation of CH₄ if ΔHc°(CH₄) = -890 kJ, ΔHf°(CO₂) = -394 kJ, ΔHf°(H₂O) = -286 kJ?",
        type: "short_answer",
        answer_key: "-76 kJ",
        explanation: "ΔHf°(CH₄) = -394 + 2(-286) + 890 = -76 kJ."
      },
      {
        id: "ass_011",
        objective: "obj_016",
        difficulty: "hard",
        question: "What is lattice energy?",
        type: "short_answer",
        answer_key: "The energy released when gaseous ions combine to form an ionic solid",
        explanation: "Lattice energy is the energy released during ionic solid formation."
      },
      {
        id: "ass_012",
        objective: "obj_017",
        difficulty: "hard",
        question: "What is the Born-Haber cycle used for?",
        type: "short_answer",
        answer_key: "Calculating lattice energy",
        explanation: "The Born-Haber cycle is used to calculate lattice energy of ionic compounds."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand exothermic and endothermic reactions",
        "Use calorimetry calculations",
        "Apply Hess's Law",
        "Calculate enthalpy changes"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is thermochemistry?" },
        { time: "5-10 min", activity: "Direct Instruction - Exothermic and Endothermic" },
        { time: "10-15 min", activity: "Direct Instruction - Enthalpy and Energy Diagrams" },
        { time: "15-20 min", activity: "Direct Instruction - Calorimetry" },
        { time: "20-25 min", activity: "Direct Instruction - Bond Energies" },
        { time: "25-30 min", activity: "Direct Instruction - Hess's Law" },
        { time: "30-35 min", activity: "Direct Instruction - Born-Haber Cycle" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of energy changes in reactions",
        prac_002: "Exothermic",
        prac_003: "Enthalpy change",
        prac_004: "4180 J",
        prac_005: "-185 kJ",
        prac_006: "Total ΔH is independent of the route",
        prac_007: "0 kJ/mol",
        prac_008: "Heat energy",
        prac_009: "-84 kJ",
        prac_010: "-76 kJ",
        prac_011: "413 kJ",
        prac_012: "Energy released when ions form a solid"
      },
      assessment: {
        ass_001: "The study of energy changes in chemical reactions",
        ass_002: "Exothermic releases heat (ΔH < 0); endothermic absorbs heat (ΔH > 0)",
        ass_003: "Enthalpy change (heat change at constant pressure)",
        ass_004: "2090 J",
        ass_005: "-535 kJ",
        ass_006: "The total enthalpy change is independent of the route taken",
        ass_007: "The enthalpy change when one mole of a compound is formed from its elements in their standard states",
        ass_008: "Heat energy absorbed or released",
        ass_009: "-76 kJ",
        ass_010: "-76 kJ",
        ass_011: "The energy released when gaseous ions combine to form an ionic solid",
        ass_012: "Calculating lattice energy"
      }
    },
    extensionActivities: [
      "Calculate the heat of combustion of different fuels",
      "Use Hess's Law to find unknown enthalpy changes",
      "Research the Born-Haber cycle for different ionic compounds",
      "Investigate the energy content of different foods"
    ],
    differentiation: {
      struggling: [
        "Focus on exothermic and endothermic first",
        "Use simple calculations",
        "Practice with q = mcΔT",
        "Provide a formula sheet"
      ],
      advanced: [
        "Research advanced thermochemistry",
        "Explore thermodynamic cycles",
        "Study calorimetry in detail",
        "Investigate thermochemical equations"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Energy Level Diagrams",
      description: "Diagrams showing exothermic and endothermic reactions",
      url: "/diagrams/energy-level-diagrams.png",
      alt: "Energy level diagrams"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Hess's Law",
      description: "Diagram showing Hess's Law",
      url: "/diagrams/hess-law.png",
      alt: "Hess's Law diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Born-Haber Cycle",
      description: "Diagram showing the Born-Haber cycle",
      url: "/diagrams/born-haber-cycle.png",
      alt: "Born-Haber cycle diagram"
    }
  ]
};