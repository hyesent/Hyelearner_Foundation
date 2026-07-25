// Location: src/data/lessons/science/chemistry/physical_chemistry/stoichiometry.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_stoichiometry",
  subject: "Chemistry",
  topic: "Stoichiometry",
  name: "Stoichiometry",
  icon: "⚖️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of atomic structure",
    "Knowledge of the periodic table",
    "Understanding of chemical formulas",
    "Basic mathematical skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Chemical Calculations",
      file: "science/chemistry/calculations.js"
    },
    {
      name: "Acids and Bases",
      file: "science/chemistry/acids_and_bases.js"
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
      description: "Define stoichiometry and explain its importance",
      indicator: "Student can explain what stoichiometry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate relative atomic mass and relative molecular mass",
      indicator: "Student can calculate RAM and RMM from the periodic table"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define the mole and Avogadro's constant",
      indicator: "Student can explain the concept of the mole"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate the number of moles from mass and molar mass",
      indicator: "Student can use the mole formula: n = m/M"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate the number of particles from moles",
      indicator: "Student can use Avogadro's number: N = n × NA"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate percentage composition by mass",
      indicator: "Student can determine the percentage of each element in a compound"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Determine empirical and molecular formulas",
      indicator: "Student can calculate empirical and molecular formulas from data"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Balance chemical equations",
      indicator: "Student can balance equations for chemical reactions"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Perform stoichiometric calculations from balanced equations",
      indicator: "Student can calculate amounts of reactants and products"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Calculate limiting reactants and excess reactants",
      indicator: "Student can identify and calculate limiting reactants"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Calculate theoretical yield and percentage yield",
      indicator: "Student can calculate yields in chemical reactions"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Calculate concentration and moles in solutions",
      indicator: "Student can use the formula: n = C × V"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Perform titration calculations",
      indicator: "Student can calculate unknown concentrations from titration data"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Calculate gas volumes using Avogadro's law",
      indicator: "Student can calculate gas volumes at STP"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze stoichiometry in real-world applications",
      indicator: "Student can apply stoichiometry to industrial processes"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Stoichiometry - The Chemistry of Quantities",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about stoichiometry, moles, and how to calculate chemical quantities."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Stoichiometry</h2>
      <p><strong>Stoichiometry</strong> is the branch of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. It allows chemists to predict how much of each substance is needed and how much will be produced.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Key Concepts</h3>
          <ul>
            <li>✓ The Mole</li>
            <li>✓ Avogadro's Constant</li>
            <li>✓ Molar Mass</li>
            <li>✓ Empirical & Molecular Formulas</li>
            <li>✓ Balancing Equations</li>
            <li>✓ Limiting Reactants</li>
            <li>✓ Percentage Yield</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• 1 mole = 6.02 × 10²³ particles</li>
            <li>• Stoichiometry comes from Greek words</li>
            <li>• It's essential for industrial chemistry</li>
            <li>• Used in pharmaceutical production</li>
            <li>• Helps reduce waste in reactions</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Stoichiometry Matters</h4>
        <p>Stoichiometry is essential for understanding chemical reactions quantitatively. It allows chemists to calculate amounts of reactants needed and products formed in any chemical reaction.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Relative Atomic Mass and Molecular Mass",
        objective: "obj_002",
        text: `
          <h3>Relative Atomic Mass (RAM)</h3>
          <p><strong>Relative Atomic Mass (RAM)</strong> is the mass of an atom compared to 1/12 of a carbon-12 atom.</p>
          
          <div class="example-box">
            <strong>📌 Calculating RAM:</strong>
            <ul>
              <li>• RAM = (Average mass of one atom) / (1/12 × mass of one C-12 atom)</li>
              <li>• Rounded to whole numbers for calculations</li>
              <li>• Found on the periodic table</li>
              <li>• Examples: H = 1, C = 12, O = 16, Na = 23</li>
            </ul>
          </div>
          
          <h3>Relative Molecular Mass (RMM)</h3>
          <p><strong>Relative Molecular Mass (RMM)</strong> is the sum of the RAMs of all atoms in a molecule.</p>
          
          <div class="example-box">
            <strong>📌 Calculating RMM:</strong>
            <ul>
              <li><strong>Water (H₂O):</strong></li>
              <li>• H = 1 × 2 = 2</li>
              <li>• O = 16 × 1 = 16</li>
              <li>• RMM = 2 + 16 = <strong>18</strong></li>
              <li><strong>CO₂:</strong></li>
              <li>• C = 12 × 1 = 12</li>
              <li>• O = 16 × 2 = 32</li>
              <li>• RMM = 12 + 32 = <strong>44</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Mole and Avogadro's Constant",
        objective: "obj_003",
        text: `
          <h3>The Mole</h3>
          <p>The <strong>mole</strong> is the SI unit for the amount of substance. One mole contains exactly 6.022 × 10²³ particles (Avogadro's constant).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Relationships</h4>
              <ul>
                <li>• 1 mole = 6.02 × 10²³ particles</li>
                <li>• 1 mole = Relative formula mass (in grams)</li>
                <li>• 1 mole of any gas = 24 dm³ at room temp</li>
                <li>• 1 mole of any gas = 22.4 dm³ at STP</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• 1 mole of H₂O = 18g = 6.02 × 10²³ molecules</li>
                <li>• 1 mole of Na = 23g = 6.02 × 10²³ atoms</li>
                <li>• 1 mole of CO₂ = 44g = 6.02 × 10²³ molecules</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Mole Concept</text>
              
              <!-- 1 Mole = 6.02 x 10²³ particles -->
              <g transform="translate(300, 130)">
                <!-- Circle -->
                <circle cx="0" cy="0" r="70" fill="#bbdefb" stroke="#1565c0" stroke-width="3"/>
                <text x="0" y="-25" text-anchor="middle" font-size="14" font-weight="bold" fill="#1565c0">1 Mole</text>
                <text x="0" y="-8" text-anchor="middle" font-size="12" fill="#1565c0">= 6.02 × 10²³</text>
                <text x="0" y="8" text-anchor="middle" font-size="12" fill="#1565c0">particles</text>
                <text x="0" y="25" text-anchor="middle" font-size="11" fill="#1565c0">(Avogadro's Number)</text>
                
                <!-- Particle representations -->
                <circle cx="-40" cy="-40" r="4" fill="#4a90d9"/>
                <circle cx="-20" cy="-50" r="4" fill="#4a90d9"/>
                <circle cx="10" cy="-55" r="4" fill="#4a90d9"/>
                <circle cx="35" cy="-45" r="4" fill="#4a90d9"/>
                <circle cx="50" cy="-25" r="4" fill="#4a90d9"/>
                <circle cx="-50" cy="-20" r="4" fill="#4a90d9"/>
                <circle cx="-55" cy="5" r="4" fill="#4a90d9"/>
                <circle cx="-45" cy="30" r="4" fill="#4a90d9"/>
                <circle cx="-25" cy="45" r="4" fill="#4a90d9"/>
                <circle cx="0" cy="50" r="4" fill="#4a90d9"/>
                <circle cx="25" cy="45" r="4" fill="#4a90d9"/>
                <circle cx="45" cy="30" r="4" fill="#4a90d9"/>
                <circle cx="55" cy="5" r="4" fill="#4a90d9"/>
                <circle cx="40" cy="-15" r="4" fill="#4a90d9"/>
                <circle cx="-30" cy="-30" r="4" fill="#4a90d9"/>
                <circle cx="20" cy="-35" r="4" fill="#4a90d9"/>
                <circle cx="-10" cy="30" r="4" fill="#4a90d9"/>
                <circle cx="15" cy="25" r="4" fill="#4a90d9"/>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Mole Calculations",
        objective: "obj_004",
        text: `
          <h3>Mole Calculations</h3>
          <p>The mole is used to convert between mass and number of particles.</p>
          
          <div class="example-box">
            <strong>📌 Key Formulas:</strong>
            <ul>
              <li><strong>n = m/M</strong></li>
              <li>• n = number of moles</li>
              <li>• m = mass in grams</li>
              <li>• M = molar mass (RMM in g/mol)</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p>Calculate the number of moles in 36g of H₂O</p>
              <ul>
                <li>• M(H₂O) = 18 g/mol</li>
                <li>• n = 36/18 = <strong>2 moles</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p>Calculate the mass of 3 moles of CO₂</p>
              <ul>
                <li>• M(CO₂) = 44 g/mol</li>
                <li>• m = 3 × 44 = <strong>132g</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Percentage Composition",
        objective: "obj_006",
        text: `
          <h3>Percentage Composition by Mass</h3>
          <p>The percentage composition of a compound shows the percentage by mass of each element present.</p>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p>% Element = (Mass of element in 1 mole of compound / Molar mass of compound) × 100%</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example: H₂O</h4>
              <ul>
                <li>• M(H₂O) = 18 g/mol</li>
                <li>• Mass of H = 2g</li>
                <li>• % H = (2/18) × 100 = <strong>11.1%</strong></li>
                <li>• Mass of O = 16g</li>
                <li>• % O = (16/18) × 100 = <strong>88.9%</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example: CO₂</h4>
              <ul>
                <li>• M(CO₂) = 44 g/mol</li>
                <li>• Mass of C = 12g</li>
                <li>• % C = (12/44) × 100 = <strong>27.3%</strong></li>
                <li>• Mass of O = 32g</li>
                <li>• % O = (32/44) × 100 = <strong>72.7%</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Empirical and Molecular Formulas",
        objective: "obj_007",
        text: `
          <h3>Empirical and Molecular Formulas</h3>
          <p>The <strong>empirical formula</strong> shows the simplest whole-number ratio of atoms in a compound. The <strong>molecular formula</strong> shows the actual number of atoms in a molecule.</p>
          
          <div class="example-box">
            <strong>📌 Steps to Find Empirical Formula:</strong>
            <ol>
              <li>Write the mass (or percentage) of each element</li>
              <li>Divide by the RAM of each element</li>
              <li>Divide by the smallest number</li>
              <li>Write the ratio as whole numbers</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p>A compound contains 40% C, 6.7% H, 53.3% O</p>
              <ul>
                <li>• C: 40/12 = 3.33</li>
                <li>• H: 6.7/1 = 6.7</li>
                <li>• O: 53.3/16 = 3.33</li>
                <li>• Divide by 3.33</li>
                <li>• C: 1, H: 2, O: 1</li>
                <li>• <strong>Empirical formula = CH₂O</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Molecular Formula</h4>
              <p>If the molar mass is 180 g/mol:</p>
              <ul>
                <li>• RMM(CH₂O) = 30</li>
                <li>• 180/30 = 6</li>
                <li>• Molecular formula = (CH₂O)₆</li>
                <li>• = <strong>C₆H₁₂O₆</strong></li>
                <li>(This is glucose!)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Balancing Chemical Equations",
        objective: "obj_008",
        text: `
          <h3>Balancing Chemical Equations</h3>
          <p>Chemical equations must be balanced to obey the law of conservation of mass.</p>
          
          <div class="example-box">
            <strong>📌 Steps to Balance Equations:</strong>
            <ol>
              <li>Write the unbalanced equation</li>
              <li>Count atoms of each element</li>
              <li>Add coefficients to balance atoms</li>
              <li>Check that all atoms are balanced</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p><strong>H₂ + O₂ → H₂O</strong></p>
              <ul>
                <li>• Left: H=2, O=2</li>
                <li>• Right: H=2, O=1</li>
                <li>• <strong>2H₂ + O₂ → 2H₂O</strong></li>
                <li>• Check: H=4, O=2 ✓</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p><strong>Fe + O₂ → Fe₂O₃</strong></p>
              <ul>
                <li>• Left: Fe=1, O=2</li>
                <li>• Right: Fe=2, O=3</li>
                <li>• <strong>4Fe + 3O₂ → 2Fe₂O₃</strong></li>
                <li>• Check: Fe=4, O=6 ✓</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Stoichiometric Calculations",
        objective: "obj_009",
        text: `
          <h3>Stoichiometric Calculations</h3>
          <p>Balanced equations allow us to calculate the amounts of reactants and products.</p>
          
          <div class="example-box">
            <strong>📌 Steps for Stoichiometric Calculations:</strong>
            <ol>
              <li>Write the balanced equation</li>
              <li>Calculate moles of known substance</li>
              <li>Use mole ratios to find moles of unknown</li>
              <li>Convert moles to mass or volume</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Calculate the mass of CO₂ produced when 40g of CH₄ burns completely.</strong></p>
              <ul>
                <li>• CH₄ + 2O₂ → CO₂ + 2H₂O</li>
                <li>• M(CH₄) = 16 g/mol</li>
                <li>• n(CH₄) = 40/16 = 2.5 mol</li>
                <li>• Mole ratio: 1:1</li>
                <li>• n(CO₂) = 2.5 mol</li>
                <li>• M(CO₂) = 44 g/mol</li>
                <li>• m(CO₂) = 2.5 × 44 = <strong>110g</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Another Example</h4>
              <p><strong>Calculate the mass of Mg needed to produce 60g of MgO.</strong></p>
              <ul>
                <li>• 2Mg + O₂ → 2MgO</li>
                <li>• M(MgO) = 40 g/mol</li>
                <li>• n(MgO) = 60/40 = 1.5 mol</li>
                <li>• Mole ratio: 2:2 = 1:1</li>
                <li>• n(Mg) = 1.5 mol</li>
                <li>• M(Mg) = 24 g/mol</li>
                <li>• m(Mg) = 1.5 × 24 = <strong>36g</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Limiting Reactants",
        objective: "obj_010",
        text: `
          <h3>Limiting Reactants</h3>
          <p>The <strong>limiting reactant</strong> is the substance that is completely used up in a reaction. It determines the amount of product formed.</p>
          
          <div class="example-box">
            <strong>📌 Steps to Find Limiting Reactant:</strong>
            <ol>
              <li>Calculate moles of each reactant</li>
              <li>Divide moles by coefficient in the equation</li>
              <li>The smaller number is the limiting reactant</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>2H₂ + O₂ → 2H₂O</strong></p>
              <p>If we have 4g of H₂ and 32g of O₂:</p>
              <ul>
                <li>• n(H₂) = 4/2 = 2 mol</li>
                <li>• n(O₂) = 32/32 = 1 mol</li>
                <li>• Divide by coefficients:</li>
                <li>• H₂: 2/2 = 1</li>
                <li>• O₂: 1/1 = 1</li>
                <li>• <strong>No limiting reactant - both react completely</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Another Example</h4>
              <p><strong>2H₂ + O₂ → 2H₂O</strong></p>
              <p>If we have 2g of H₂ and 16g of O₂:</p>
              <ul>
                <li>• n(H₂) = 2/2 = 1 mol</li>
                <li>• n(O₂) = 16/32 = 0.5 mol</li>
                <li>• Divide by coefficients:</li>
                <li>• H₂: 1/2 = 0.5</li>
                <li>• O₂: 0.5/1 = 0.5</li>
                <li>• <strong>No limiting reactant</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Theoretical and Percentage Yield",
        objective: "obj_011",
        text: `
          <h3>Theoretical and Percentage Yield</h3>
          <p>The <strong>theoretical yield</strong> is the maximum amount of product that can be formed. The <strong>percentage yield</strong> compares actual yield to theoretical yield.</p>
          
          <div class="example-box">
            <strong>📌 Formulas:</strong>
            <ul>
              <li>• Percentage Yield = (Actual Yield / Theoretical Yield) × 100%</li>
              <li>• Theoretical yield is calculated from stoichiometry</li>
              <li>• Actual yield is what is obtained experimentally</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Mg + Cl₂ → MgCl₂</strong></p>
              <p>Calculate theoretical yield when 24g of Mg reacts:</p>
              <ul>
                <li>• n(Mg) = 24/24 = 1 mol</li>
                <li>• Mole ratio: 1:1</li>
                <li>• n(MgCl₂) = 1 mol</li>
                <li>• M(MgCl₂) = 95 g/mol</li>
                <li>• Theoretical yield = 95g</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Percentage Yield</h4>
              <p>If the actual yield was 76g:</p>
              <ul>
                <li>• Percentage Yield = (76/95) × 100</li>
                <li>• = <strong>80%</strong></li>
              </ul>
              <p>If percentage yield is 70% and theoretical is 100g:</p>
              <ul>
                <li>• Actual yield = 100 × 0.70 = <strong>70g</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Solution Stoichiometry",
        objective: "obj_012",
        text: `
          <h3>Solution Stoichiometry</h3>
          <p>Concentration is measured in moles per cubic decimeter (mol/dm³).</p>
          
          <div class="example-box">
            <strong>📌 Key Formulas:</strong>
            <ul>
              <li>• <strong>C = n/V</strong></li>
              <li>• C = Concentration (mol/dm³)</li>
              <li>• n = Number of moles</li>
              <li>• V = Volume in dm³</li>
              <li>• <strong>n = C × V</strong></li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p>Calculate the number of moles in 250 cm³ of 0.5 mol/dm³ NaCl</p>
              <ul>
                <li>• V = 250 cm³ = 0.25 dm³</li>
                <li>• C = 0.5 mol/dm³</li>
                <li>• n = 0.5 × 0.25</li>
                <li>• n = <strong>0.125 mol</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p>Calculate the concentration of a solution containing 5.85g of NaCl in 500 cm³</p>
              <ul>
                <li>• M(NaCl) = 58.5 g/mol</li>
                <li>• n = 5.85/58.5 = 0.1 mol</li>
                <li>• V = 500 cm³ = 0.5 dm³</li>
                <li>• C = 0.1/0.5 = <strong>0.2 mol/dm³</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Titration Calculations",
        objective: "obj_013",
        text: `
          <h3>Titration Calculations</h3>
          <p>Titrations are used to determine the concentration of an unknown solution.</p>
          
          <div class="example-box">
            <strong>📌 Titration Calculation Steps:</strong>
            <ol>
              <li>Write the balanced equation</li>
              <li>Calculate moles of known solution</li>
              <li>Use mole ratio to find moles of unknown</li>
              <li>Calculate concentration of unknown</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>25.0 cm³ of 0.1 mol/dm³ NaOH neutralizes 20.0 cm³ of HCl.</strong></p>
              <ul>
                <li>• NaOH + HCl → NaCl + H₂O</li>
                <li>• n(NaOH) = 0.1 × 0.025 = 0.0025 mol</li>
                <li>• Mole ratio: 1:1</li>
                <li>• n(HCl) = 0.0025 mol</li>
                <li>• C(HCl) = 0.0025/0.020</li>
                <li>• = <strong>0.125 mol/dm³</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Another Example</h4>
              <p><strong>20.0 cm³ of H₂SO₄ requires 40.0 cm³ of 0.2 mol/dm³ NaOH</strong></p>
              <ul>
                <li>• H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</li>
                <li>• n(NaOH) = 0.2 × 0.040 = 0.008 mol</li>
                <li>• Mole ratio: 1:2</li>
                <li>• n(H₂SO₄) = 0.008/2 = 0.004 mol</li>
                <li>• C(H₂SO₄) = 0.004/0.020</li>
                <li>• = <strong>0.2 mol/dm³</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Gas Volumes",
        objective: "obj_014",
        text: `
          <h3>Gas Volumes and Stoichiometry</h3>
          <p>Under standard conditions, one mole of any gas occupies a fixed volume.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Avogadro's Law</h4>
              <ul>
                <li>• Equal volumes of gases contain equal numbers of molecules</li>
                <li>• At STP (0°C, 1 atm): 1 mol = 22.4 dm³</li>
                <li>• At RTP (25°C, 1 atm): 1 mol = 24 dm³</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Gas Calculations</h4>
              <ul>
                <li>• <strong>n = Volume / Molar Volume</strong></li>
                <li>• Volume = n × Molar Volume</li>
                <li>• Example: 2 mol of CO₂ at STP</li>
                <li>• Volume = 2 × 22.4 = <strong>44.8 dm³</strong></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example:</strong>
            <p><strong>Calculate the volume of CO₂ produced when 10g of CaCO₃ decomposes at STP.</strong></p>
            <ul>
              <li>• CaCO₃ → CaO + CO₂</li>
              <li>• M(CaCO₃) = 100 g/mol</li>
              <li>• n(CaCO₃) = 10/100 = 0.1 mol</li>
              <li>• Mole ratio: 1:1</li>
              <li>• n(CO₂) = 0.1 mol</li>
              <li>• Volume = 0.1 × 22.4 = <strong>2.24 dm³</strong></li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⚖️ Stoichiometry Basics</h4>
          <ul>
            <li>• The mole is the unit for amount of substance</li>
            <li>• 1 mole = 6.02 × 10²³ particles</li>
            <li>• Molar mass = RMM in g/mol</li>
            <li>• Balanced equations give mole ratios</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Calculations</h4>
          <ul>
            <li>• n = m/M (mass to moles)</li>
            <li>• n = C × V (solutions)</li>
            <li>• V = n × 22.4 (gases at STP)</li>
            <li>• % Yield = Actual/Theoretical × 100</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Stoichiometry is the foundation of quantitative chemistry. It allows us to predict and measure chemical reactions accurately.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The mole is just a number like a dozen",
        correction: "The mole represents a specific number of particles (6.02 × 10²³)",
        explanation: "The mole is a fundamental SI unit for amount of substance."
      },
      {
        id: "mis_002",
        misconception: "Empirical and molecular formulas are the same",
        correction: "Empirical formulas show the simplest ratio; molecular formulas show actual numbers",
        explanation: "The molecular formula is a whole-number multiple of the empirical formula."
      },
      {
        id: "mis_003",
        misconception: "Limiting reactants are always the one with fewer moles",
        correction: "Limiting reactants depend on mole ratios, not just moles",
        explanation: "You must compare the mole ratio from the balanced equation."
      },
      {
        id: "mis_004",
        misconception: "Percentage yield can exceed 100%",
        correction: "Percentage yield cannot exceed 100%",
        explanation: "Percentage yield is based on theoretical yield, which is the maximum possible."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Industrial Chemistry",
        description: "Stoichiometry is used to calculate reactant amounts.",
        example: "Haber process, sulfuric acid production"
      },
      {
        id: "app_002",
        title: "Pharmaceuticals",
        description: "Stoichiometry ensures correct dosages.",
        example: "Drug production, quality control"
      },
      {
        id: "app_003",
        title: "Environmental Chemistry",
        description: "Stoichiometry helps monitor pollution.",
        example: "Calculating emissions, waste treatment"
      },
      {
        id: "app_004",
        title: "Food Science",
        description: "Stoichiometry is used in food production.",
        example: "Nutrition labels, food processing"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Stoichiometry", definition: "The quantitative study of reactants and products in chemical reactions." },
    { term: "Mole", definition: "The SI unit for amount of substance (6.02 × 10²³ particles)." },
    { term: "Avogadro's Constant", definition: "6.02 × 10²³ particles per mole." },
    { term: "Molar Mass", definition: "The mass of one mole of a substance (g/mol)." },
    { term: "Empirical Formula", definition: "The simplest whole-number ratio of atoms in a compound." },
    { term: "Molecular Formula", definition: "The actual number of atoms in a molecule." },
    { term: "Limiting Reactant", definition: "The reactant that is completely consumed in a reaction." },
    { term: "Theoretical Yield", definition: "The maximum amount of product that can be formed." },
    { term: "Percentage Yield", definition: "The ratio of actual yield to theoretical yield × 100%." },
    { term: "Concentration", definition: "The amount of solute per volume of solution (mol/dm³)." },
    { term: "Titration", definition: "A technique to determine the concentration of a solution." },
    { term: "STP", definition: "Standard Temperature and Pressure (0°C, 1 atm)." },
    { term: "RTP", definition: "Room Temperature and Pressure (25°C, 1 atm)." },
    { term: "Molar Volume", definition: "The volume occupied by one mole of gas (22.4 dm³ at STP)." },
    { term: "Relative Atomic Mass", definition: "The mass of an atom relative to 1/12 of carbon-12." },
    { term: "Relative Molecular Mass", definition: "The sum of RAMs in a molecule." },
    { term: "Coefficient", definition: "The number placed before a formula in a balanced equation." },
    { term: "Mole Ratio", definition: "The ratio of moles between reactants and products." },
    { term: "Percentage Composition", definition: "The percentage by mass of each element in a compound." },
    { term: "Excess Reactant", definition: "The reactant that is not completely consumed." }
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
      question: "What is stoichiometry?",
      type: "multiple_choice",
      options: [
        "The study of atomic structure",
        "The quantitative study of reactants and products",
        "The study of chemical bonds",
        "The study of organic compounds"
      ],
      answer: "The quantitative study of reactants and products",
      explanation: "Stoichiometry is the quantitative study of reactants and products in chemical reactions."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the RMM of H₂O?",
      type: "multiple_choice",
      options: ["16", "18", "20", "22"],
      answer: "18",
      explanation: "RMM(H₂O) = 2(1) + 16 = 18"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is Avogadro's constant?",
      type: "multiple_choice",
      options: [
        "6.02 × 10²³",
        "6.02 × 10²²",
        "6.02 × 10²⁴",
        "6.02 × 10²¹"
      ],
      answer: "6.02 × 10²³",
      explanation: "Avogadro's constant is 6.02 × 10²³ particles per mole."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "How many moles are in 44g of CO₂?",
      type: "multiple_choice",
      options: ["0.5", "1", "1.5", "2"],
      answer: "1",
      explanation: "M(CO₂) = 44 g/mol, so n = 44/44 = 1 mol"
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "How many molecules are in 2 moles of H₂O?",
      type: "multiple_choice",
      options: [
        "6.02 × 10²³",
        "1.204 × 10²⁴",
        "1.806 × 10²⁴",
        "2.408 × 10²⁴"
      ],
      answer: "1.204 × 10²⁴",
      explanation: "2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules"
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the percentage of oxygen in CO₂?",
      type: "multiple_choice",
      options: ["72.7%", "27.3%", "50%", "66.7%"],
      answer: "72.7%",
      explanation: "(32/44) × 100 = 72.7%"
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the empirical formula of a compound with 40% C, 6.7% H, 53.3% O?",
      type: "multiple_choice",
      options: ["CH₂O", "C₂H₄O₂", "CH₄O", "C₆H₁₂O₆"],
      answer: "CH₂O",
      explanation: "C: 40/12=3.33, H: 6.7/1=6.7, O: 53.3/16=3.33 → CH₂O"
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the balanced equation for H₂ + O₂ → H₂O?",
      type: "multiple_choice",
      options: [
        "H₂ + O₂ → H₂O",
        "2H₂ + O₂ → 2H₂O",
        "H₂ + 2O₂ → 2H₂O",
        "2H₂ + 2O₂ → 4H₂O"
      ],
      answer: "2H₂ + O₂ → 2H₂O",
      explanation: "2H₂ + O₂ → 2H₂O is the balanced equation"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How many grams of CO₂ are produced when 16g of CH₄ burns completely?",
      type: "multiple_choice",
      options: ["22g", "44g", "88g", "66g"],
      answer: "44g",
      explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O, n(CH₄)=1 mol, n(CO₂)=1 mol, m=44g"
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the limiting reactant when 2g of H₂ reacts with 16g of O₂?",
      type: "multiple_choice",
      options: ["H₂", "O₂", "Both", "Neither"],
      answer: "Neither (both fully react)",
      explanation: "n(H₂)=1 mol, n(O₂)=0.5 mol. H₂: 1/2=0.5, O₂: 0.5/1=0.5 → balanced"
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "If theoretical yield is 50g and actual yield is 40g, what is the percentage yield?",
      type: "multiple_choice",
      options: ["80%", "75%", "85%", "90%"],
      answer: "80%",
      explanation: "(40/50) × 100 = 80%"
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How many moles are in 250 cm³ of 0.4 mol/dm³ solution?",
      type: "multiple_choice",
      options: ["0.1", "0.15", "0.2", "0.25"],
      answer: "0.1",
      explanation: "n = 0.4 × 0.25 = 0.1 mol"
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "25 cm³ of 0.2 mol/dm³ NaOH neutralizes 20 cm³ of HCl. What is the HCl concentration?",
      type: "multiple_choice",
      options: ["0.2", "0.25", "0.3", "0.35"],
      answer: "0.25",
      explanation: "n(NaOH)=0.2×0.025=0.005 mol, C(HCl)=0.005/0.020=0.25 mol/dm³"
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What volume does 0.5 mol of CO₂ occupy at STP?",
      type: "multiple_choice",
      options: ["11.2 dm³", "22.4 dm³", "5.6 dm³", "44.8 dm³"],
      answer: "11.2 dm³",
      explanation: "0.5 × 22.4 = 11.2 dm³"
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Stoichiometry is important in which industry?",
      type: "multiple_choice",
      options: [
        "Food production only",
        "Pharmaceuticals and industry",
        "Agriculture only",
        "Textiles only"
      ],
      answer: "Pharmaceuticals and industry",
      explanation: "Stoichiometry is essential in many industries including pharmaceuticals."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_stoichiometry",
    title: "Stoichiometry Quiz",
    description: "Test your understanding of stoichiometry",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is stoichiometry?",
        type: "short_answer",
        answer_key: "The quantitative study of reactants and products",
        explanation: "Stoichiometry is the quantitative study of chemical reactions."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the RMM of CO₂?",
        type: "short_answer",
        answer_key: "44",
        explanation: "RMM(CO₂) = 12 + (16 × 2) = 44"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is Avogadro's constant?",
        type: "short_answer",
        answer_key: "6.02 × 10²³",
        explanation: "Avogadro's constant is 6.02 × 10²³ particles per mole."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "How many moles are in 22g of CO₂?",
        type: "short_answer",
        answer_key: "0.5",
        explanation: "n = 22/44 = 0.5 mol"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "How many molecules in 1.5 moles of H₂O?",
        type: "short_answer",
        answer_key: "9.03 × 10²³",
        explanation: "1.5 × 6.02 × 10²³ = 9.03 × 10²³ molecules"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the percentage of carbon in CO₂?",
        type: "short_answer",
        answer_key: "27.3%",
        explanation: "(12/44) × 100 = 27.3%"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the empirical formula of C₆H₁₂O₆?",
        type: "short_answer",
        answer_key: "CH₂O",
        explanation: "C₆H₁₂O₆ simplifies to CH₂O"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Balance this equation: Fe + O₂ → Fe₂O₃",
        type: "short_answer",
        answer_key: "4Fe + 3O₂ → 2Fe₂O₃",
        explanation: "4Fe + 3O₂ → 2Fe₂O₃ is the balanced equation"
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Calculate percentage yield if theoretical yield is 80g and actual yield is 60g.",
        type: "short_answer",
        answer_key: "75%",
        explanation: "(60/80) × 100 = 75%"
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "How many moles in 500 cm³ of 0.2 mol/dm³ solution?",
        type: "short_answer",
        answer_key: "0.1",
        explanation: "n = 0.2 × 0.5 = 0.1 mol"
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
        "Understand the mole concept",
        "Calculate molar mass and percentage composition",
        "Balance chemical equations",
        "Perform stoichiometric calculations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is stoichiometry?" },
        { time: "5-10 min", activity: "Direct Instruction - The Mole and Avogadro's Constant" },
        { time: "10-15 min", activity: "Direct Instruction - Molar Mass and Mole Calculations" },
        { time: "15-20 min", activity: "Direct Instruction - Percentage Composition" },
        { time: "20-25 min", activity: "Direct Instruction - Empirical and Molecular Formulas" },
        { time: "25-30 min", activity: "Direct Instruction - Stoichiometric Calculations" },
        { time: "30-35 min", activity: "Direct Instruction - Limiting Reactants and Yield" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The quantitative study of reactants and products",
        prac_002: "18",
        prac_003: "6.02 × 10²³",
        prac_004: "1",
        prac_005: "1.204 × 10²⁴",
        prac_006: "72.7%",
        prac_007: "CH₂O",
        prac_008: "2H₂ + O₂ → 2H₂O",
        prac_009: "44g",
        prac_010: "Neither (both fully react)",
        prac_011: "80%",
        prac_012: "0.1",
        prac_013: "0.25",
        prac_014: "11.2 dm³",
        prac_015: "Pharmaceuticals and industry"
      },
      assessment: {
        ass_001: "The quantitative study of reactants and products",
        ass_002: "44",
        ass_003: "6.02 × 10²³",
        ass_004: "0.5",
        ass_005: "9.03 × 10²³",
        ass_006: "27.3%",
        ass_007: "CH₂O",
        ass_008: "4Fe + 3O₂ → 2Fe₂O₃",
        ass_009: "75%",
        ass_010: "0.1"
      }
    },
    extensionActivities: [
      "Calculate the formula of a hydrate",
      "Perform a virtual titration",
      "Research industrial stoichiometry",
      "Calculate the yield of a reaction"
    ],
    differentiation: {
      struggling: [
        "Focus on basic mole calculations",
        "Use simple examples",
        "Use visual aids",
        "Provide formula cards"
      ],
      advanced: [
        "Research industrial applications",
        "Calculate multi-step reactions",
        "Study reaction mechanisms",
        "Research atomic mass determination"
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
      title: "The Mole Concept",
      description: "Diagram showing the mole concept",
      url: "/diagrams/mole-concept.png",
      alt: "Mole concept diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Stoichiometry Flow Chart",
      description: "Flow chart for stoichiometric calculations",
      url: "/diagrams/stoichiometry-flow.png",
      alt: "Stoichiometry flow chart"
    }
  ]
};