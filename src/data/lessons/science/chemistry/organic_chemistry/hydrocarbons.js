// Location: src/data/lessons/science/chemistry/organic_chemistry/hydrocarbons.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_hydrocarbons",
  subject: "Chemistry",
  topic: "Hydrocarbons",
  name: "Hydrocarbons",
  icon: "⛽",
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
    "Understanding of atomic structure",
    "Knowledge of chemical bonding",
    "Basic understanding of organic chemistry",
    "Understanding of nomenclature"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Functional Groups",
      file: "science/chemistry/organic_chemistry/functional_groups.js"
    },
    {
      name: "Polymers",
      file: "science/chemistry/organic_chemistry/polymers.js"
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
      description: "Define hydrocarbons and classify them",
      indicator: "Student can explain what hydrocarbons are and classify them as aliphatic or aromatic"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify saturated and unsaturated hydrocarbons",
      indicator: "Student can distinguish between saturated and unsaturated hydrocarbons"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure of alkanes",
      indicator: "Student can describe the structure and bonding in alkanes"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Name alkanes using IUPAC nomenclature",
      indicator: "Student can name and draw straight-chain and branched alkanes"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the structure and properties of alkenes",
      indicator: "Student can describe the structure and bonding in alkenes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the structure and properties of alkynes",
      indicator: "Student can describe the structure and bonding in alkynes"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the structure and properties of aromatic hydrocarbons (benzene)",
      indicator: "Student can describe the structure and properties of benzene"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the physical properties of hydrocarbons",
      indicator: "Student can describe boiling points, solubility, and density trends"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the reactions of alkanes",
      indicator: "Student can explain combustion and substitution reactions"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Describe the reactions of alkenes",
      indicator: "Student can explain addition reactions of alkenes"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Describe the reactions of alkynes",
      indicator: "Student can explain addition reactions of alkynes"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the reactions of benzene",
      indicator: "Student can explain electrophilic substitution reactions of benzene"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the sources of hydrocarbons",
      indicator: "Student can explain petroleum and natural gas formation"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of fractional distillation of petroleum",
      indicator: "Student can describe how petroleum is separated into fractions"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain cracking of hydrocarbons",
      indicator: "Student can describe the cracking process and its importance"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the environmental impact of hydrocarbon use",
      indicator: "Student can discuss pollution and climate change from fossil fuels"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Hydrocarbons - The Chemistry of Fossil Fuels",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about hydrocarbons, their structure, properties, reactions, and importance in our daily lives."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Hydrocarbons</h2>
      <p><strong>Hydrocarbons</strong> are organic compounds composed entirely of carbon and hydrogen atoms. They are the simplest organic compounds and form the basis of many important substances, including fossil fuels, plastics, and medicines.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⛽ Key Concepts</h3>
          <ul>
            <li>✓ Alkanes (Saturated)</li>
            <li>✓ Alkenes (Unsaturated)</li>
            <li>✓ Alkynes (Unsaturated)</li>
            <li>✓ Aromatic Hydrocarbons</li>
            <li>✓ Isomerism</li>
            <li>✓ Fractional Distillation</li>
            <li>✓ Cracking</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Hydrocarbons are the main component of fossil fuels</li>
            <li>• There are millions of hydrocarbon compounds</li>
            <li>• Benzene was discovered in 1825</li>
            <li>• Cracking produces smaller, more useful molecules</li>
            <li>• Hydrocarbons are essential for the petrochemical industry</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Hydrocarbons Matter</h4>
        <p>Hydrocarbons are the foundation of the petrochemical industry. They provide fuels, plastics, and countless other materials essential to modern life.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Classification of Hydrocarbons",
        objective: "obj_001",
        text: `
          <h3>Types of Hydrocarbons</h3>
          <p>Hydrocarbons are classified into two main types: aliphatic and aromatic.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Aliphatic Hydrocarbons</h4>
              <ul>
                <li>• Carbon atoms in chains or rings</li>
                <li>• <strong>Alkanes:</strong> Single bonds (saturated)</li>
                <li>• <strong>Alkenes:</strong> Double bonds (unsaturated)</li>
                <li>• <strong>Alkynes:</strong> Triple bonds (unsaturated)</li>
                <li>• Example: Methane, ethene, ethyne</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Aromatic Hydrocarbons</h4>
              <ul>
                <li>• Contain benzene rings</li>
                <li>• Delocalized electrons</li>
                <li>• Very stable structure</li>
                <li>• Example: Benzene (C₆H₆)</li>
                <li>• Found in crude oil and coal tar</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Classification of Hydrocarbons</text>
              
              <!-- Hydrocarbons box -->
              <g transform="translate(300, 160)">
                <rect x="-250" y="-90" width="500" height="180" rx="10" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="-65" text-anchor="middle" font-size="16" font-weight="bold" fill="#1565c0">Hydrocarbons</text>
                
                <!-- Aliphatic -->
                <g transform="translate(-100, -20)">
                  <rect x="-80" y="-30" width="160" height="60" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="0" y="-5" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Aliphatic</text>
                  <text x="0" y="12" text-anchor="middle" font-size="10" fill="white">Open chain structures</text>
                </g>
                
                <!-- Aromatic -->
                <g transform="translate(100, -20)">
                  <rect x="-80" y="-30" width="160" height="60" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                  <text x="0" y="-5" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Aromatic</text>
                  <text x="0" y="12" text-anchor="middle" font-size="10" fill="white">Benzene ring structures</text>
                </g>
                
                <!-- Alkanes -->
                <g transform="translate(-130, 50)">
                  <rect x="-70" y="-15" width="140" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" fill="#1565c0">Alkanes</text>
                </g>
                
                <!-- Alkenes -->
                <g transform="translate(0, 50)">
                  <rect x="-70" y="-15" width="140" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" fill="#1565c0">Alkenes</text>
                </g>
                
                <!-- Alkynes -->
                <g transform="translate(130, 50)">
                  <rect x="-70" y="-15" width="140" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" fill="#1565c0">Alkynes</text>
                </g>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Alkanes",
        objective: "obj_003",
        text: `
          <h3>Alkanes - Saturated Hydrocarbons</h3>
          <p><strong>Alkanes</strong> are saturated hydrocarbons with only single bonds between carbon atoms. They have the general formula CₙH₂ₙ₊₂.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Single bonds only (C-C and C-H)</li>
                <li>• Tetrahedral geometry</li>
                <li>• sp³ hybridization</li>
                <li>• Saturated (no more H can be added)</li>
                <li>• Examples: CH₄ (methane), C₂H₆ (ethane)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Non-polar</li>
                <li>• Insoluble in water</li>
                <li>• Low reactivity</li>
                <li>• Boiling point increases with chain length</li>
                <li>• Gases (C1-C4), liquids (C5-C17), solids (C18+)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 First 10 Alkanes:</strong>
            <ul>
              <li>• Methane: CH₄</li>
              <li>• Ethane: C₂H₆</li>
              <li>• Propane: C₃H₈</li>
              <li>• Butane: C₄H₁₀</li>
              <li>• Pentane: C₅H₁₂</li>
              <li>• Hexane: C₆H₁₄</li>
              <li>• Heptane: C₇H₁₆</li>
              <li>• Octane: C₈H₁₈</li>
              <li>• Nonane: C₉H₂₀</li>
              <li>• Decane: C₁₀H₂₂</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Naming Alkanes",
        objective: "obj_004",
        text: `
          <h3>IUPAC Nomenclature of Alkanes</h3>
          <p>Alkanes are named according to IUPAC rules.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Naming Alkanes:</strong>
            <ol>
              <li>Find the longest continuous carbon chain</li>
              <li>Number the chain from the end nearest a branch</li>
              <li>Name branches as alkyl groups</li>
              <li>List branches alphabetically</li>
              <li>Use prefixes (di, tri, etc.) for multiple identical branches</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p><strong>Structure:</strong></p>
              <p>CH₃-CH-CH₃</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;CH₃</p>
              <ul>
                <li>• Longest chain: 3 carbons (propane)</li>
                <li>• Branch: methyl at C2</li>
                <li>• Name: <strong>2-methylpropane</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p><strong>Structure:</strong></p>
              <p>CH₃-CH-CH₂-CH₃</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;CH₃</p>
              <ul>
                <li>• Longest chain: 4 carbons (butane)</li>
                <li>• Branch: methyl at C2</li>
                <li>• Name: <strong>2-methylbutane</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Alkenes",
        objective: "obj_005",
        text: `
          <h3>Alkenes - Unsaturated Hydrocarbons</h3>
          <p><strong>Alkenes</strong> are unsaturated hydrocarbons containing at least one carbon-carbon double bond. They have the general formula CₙH₂ₙ.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• One double bond (C=C)</li>
                <li>• Trigonal planar geometry</li>
                <li>• sp² hybridization</li>
                <li>• Unsaturated (can add H)</li>
                <li>• Examples: C₂H₄ (ethene), C₃H₆ (propene)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• More reactive than alkanes</li>
                <li>• Undergo addition reactions</li>
                <li>• Decolorize bromine water</li>
                <li>• Used to make polymers</li>
                <li>• Found in plants (ethene is a hormone)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Naming Alkenes:</strong>
            <ul>
              <li>• Replace -ane with -ene</li>
              <li>• Number the chain from the end nearest the double bond</li>
              <li>• Indicate the position of the double bond</li>
              <li>• Example: CH₂=CH-CH₃ is <strong>propene</strong></li>
              <li>• Example: CH₃-CH=CH-CH₃ is <strong>but-2-ene</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Alkynes",
        objective: "obj_006",
        text: `
          <h3>Alkynes - Unsaturated Hydrocarbons</h3>
          <p><strong>Alkynes</strong> are unsaturated hydrocarbons containing at least one carbon-carbon triple bond. They have the general formula CₙH₂ₙ₋₂.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• One triple bond (C≡C)</li>
                <li>• Linear geometry (180°)</li>
                <li>• sp hybridization</li>
                <li>• Unsaturated</li>
                <li>• Examples: C₂H₂ (ethyne/acetylene), C₃H₄ (propyne)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Very reactive</li>
                <li>• Undergo addition reactions</li>
                <li>• Burn with a hot, luminous flame</li>
                <li>• Acetylene used in welding</li>
                <li>• Found in some natural products</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Naming Alkynes:</strong>
            <ul>
              <li>• Replace -ane with -yne</li>
              <li>• Number the chain from the end nearest the triple bond</li>
              <li>• Indicate the position of the triple bond</li>
              <li>• Example: CH≡C-CH₃ is <strong>propyne</strong></li>
              <li>• Example: CH₃-C≡C-CH₃ is <strong>but-2-yne</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Aromatic Hydrocarbons",
        objective: "obj_007",
        text: `
          <h3>Aromatic Hydrocarbons</h3>
          <p><strong>Aromatic hydrocarbons</strong> contain benzene rings with delocalized electrons.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Benzene (C₆H₆)</h4>
              <ul>
                <li>• Six carbon ring</li>
                <li>• Delocalized π electrons</li>
                <li>• Very stable</li>
                <li>• Planar structure</li>
                <li>• All C-C bonds equal length</li>
                <li>• Undergoes substitution, not addition</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Sweet smell</li>
                <li>• Non-polar</li>
                <li>• Carcinogenic</li>
                <li>• Used to make styrene, phenol</li>
                <li>• Found in crude oil</li>
                <li>• Most carcinogenic hydrocarbons</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="300" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="150" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Benzene Ring</text>
              
              <!-- Hexagon -->
              <g transform="translate(150, 160)">
                <!-- Outer ring -->
                <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="none" stroke="#1565c0" stroke-width="3"/>
                
                <!-- Inner ring (delocalized electrons) -->
                <circle cx="0" cy="0" r="45" fill="none" stroke="#4a90d9" stroke-width="2" stroke-dasharray="8,4"/>
                
                <!-- Carbon atoms -->
                <circle cx="0" cy="-70" r="6" fill="#4a90d9"/>
                <circle cx="60" cy="-35" r="6" fill="#4a90d9"/>
                <circle cx="60" cy="35" r="6" fill="#4a90d9"/>
                <circle cx="0" cy="70" r="6" fill="#4a90d9"/>
                <circle cx="-60" cy="35" r="6" fill="#4a90d9"/>
                <circle cx="-60" cy="-35" r="6" fill="#4a90d9"/>
                
                <!-- Hydrogen atoms -->
                <text x="0" y="-95" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                <text x="80" y="-40" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                <text x="80" y="40" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                <text x="0" y="95" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                <text x="-80" y="40" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                <text x="-80" y="-40" text-anchor="middle" font-size="14" fill="#1565c0">H</text>
                
                <!-- Label -->
                <text x="0" y="-110" text-anchor="middle" font-size="12" fill="#1565c0">Benzene</text>
                <text x="0" y="110" text-anchor="middle" font-size="12" fill="#1565c0">C₆H₆</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Isomerism",
        objective: "obj_001",
        text: `
          <h3>Isomerism</h3>
          <p><strong>Isomers</strong> are compounds with the same molecular formula but different structural arrangements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structural Isomers</h4>
              <ul>
                <li>• Same formula, different structure</li>
                <li>• Different physical properties</li>
                <li>• Different chemical properties</li>
                <li>• Example: C₄H₁₀</li>
                <li>• Butane: straight chain</li>
                <li>• 2-methylpropane: branched</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example: C₄H₁₀</h4>
              <ul>
                <li><strong>Butane:</strong></li>
                <li>• CH₃-CH₂-CH₂-CH₃</li>
                <li>• Boiling point: -0.5°C</li>
                <li><strong>2-methylpropane:</strong></li>
                <li>• CH₃-CH(CH₃)-CH₃</li>
                <li>• Boiling point: -11.7°C</li>
                <li>• Branched = lower boiling point</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Reactions of Alkanes",
        objective: "obj_009",
        text: `
          <h3>Reactions of Alkanes</h3>
          <p>Alkanes undergo two main types of reactions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Combustion</h4>
              <ul>
                <li>• Complete combustion:</li>
                <li>• Hydrocarbon + O₂ → CO₂ + H₂O</li>
                <li>• Example: CH₄ + 2O₂ → CO₂ + 2H₂O</li>
                <li>• Incomplete combustion:</li>
                <li>• Hydrocarbon + O₂ → CO + H₂O</li>
                <li>• Soot (C) may form</li>
                <li>• Exothermic reactions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Substitution</h4>
              <ul>
                <li>• Reaction with halogens</li>
                <li>• UV light required</li>
                <li>• Example: CH₄ + Cl₂ → CH₃Cl + HCl</li>
                <li>• Further substitution possible:</li>
                <li>• CH₃Cl + Cl₂ → CH₂Cl₂ + HCl</li>
                <li>• CH₂Cl₂ + Cl₂ → CHCl₃ + HCl</li>
                <li>• CHCl₃ + Cl₂ → CCl₄ + HCl</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Reactions of Alkenes",
        objective: "obj_010",
        text: `
          <h3>Reactions of Alkenes</h3>
          <p>Alkenes undergo addition reactions due to their double bond.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Hydrogenation</h4>
              <ul>
                <li>• Addition of H₂</li>
                <li>• Catalyst: Ni or Pt</li>
                <li>• Alkene → Alkane</li>
                <li>• Example: C₂H₄ + H₂ → C₂H₆</li>
                <li>• Used to make margarine</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Halogenation</h4>
              <ul>
                <li>• Addition of Br₂ or Cl₂</li>
                <li>• Decolorizes bromine water</li>
                <li>• Alkene → Dihaloalkane</li>
                <li>• Example: C₂H₄ + Br₂ → C₂H₄Br₂</li>
                <li>• Test for unsaturation</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Hydration</h4>
              <ul>
                <li>• Addition of H₂O</li>
                <li>• Acid catalyst (H₂SO₄)</li>
                <li>• Alkene → Alcohol</li>
                <li>• Example: C₂H₄ + H₂O → C₂H₅OH</li>
                <li>• Used to make ethanol</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Petroleum and Fractional Distillation",
        objective: "obj_013",
        text: `
          <h3>Sources of Hydrocarbons</h3>
          <p><strong>Petroleum</strong> (crude oil) and natural gas are the main sources of hydrocarbons.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Fractional Distillation</h4>
              <ul>
                <li>• Separates crude oil into fractions</li>
                <li>• Based on boiling point differences</li>
                <li>• Each fraction has different uses</li>
                <li>• Fractions:</li>
                <li>• Gases: LPG (C1-C4)</li>
                <li>• Gasoline: Petrol (C5-C10)</li>
                <li>• Naphtha: Chemicals (C6-C10)</li>
                <li>• Kerosene: Fuel (C10-C16)</li>
                <li>• Diesel: Fuel (C14-C20)</li>
                <li>• Lubricating oils: (C20-C30)</li>
                <li>• Bitumen: Roads (C30+)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Cracking</h4>
              <ul>
                <li>• Breaking down large hydrocarbon molecules</li>
                <li>• Produces smaller, more useful molecules</li>
                <li>• <strong>Thermal cracking:</strong> High temperature, pressure</li>
                <li>• <strong>Catalytic cracking:</strong> Uses a catalyst</li>
                <li>• Products: alkenes, smaller alkanes</li>
                <li>• Example: C₁₀H₂₂ → C₆H₁₄ + C₄H₈</li>
                <li>• Essential for gasoline production</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="400" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Fractional Distillation of Petroleum</text>
              
              <!-- Fractionating column -->
              <rect x="200" y="50" width="100" height="300" rx="5" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
              
              <!-- Fractions -->
              <!-- Gases (top) -->
              <rect x="205" y="55" width="90" height="35" rx="3" fill="#4a90d9" opacity="0.8"/>
              <text x="250" y="75" text-anchor="middle" font-size="10" fill="white">Gases</text>
              <text x="260" y="90" text-anchor="middle" font-size="8" fill="white">LPG</text>
              
              <!-- Gasoline -->
              <rect x="205" y="95" width="90" height="35" rx="3" fill="#4caf50" opacity="0.8"/>
              <text x="250" y="115" text-anchor="middle" font-size="10" fill="white">Gasoline</text>
              
              <!-- Naphtha -->
              <rect x="205" y="135" width="90" height="35" rx="3" fill="#ff9800" opacity="0.8"/>
              <text x="250" y="155" text-anchor="middle" font-size="10" fill="white">Naphtha</text>
              
              <!-- Kerosene -->
              <rect x="205" y="175" width="90" height="35" rx="3" fill="#ffb74d" opacity="0.8"/>
              <text x="250" y="195" text-anchor="middle" font-size="10" fill="white">Kerosene</text>
              
              <!-- Diesel -->
              <rect x="205" y="215" width="90" height="35" rx="3" fill="#ff6b6b" opacity="0.8"/>
              <text x="250" y="235" text-anchor="middle" font-size="10" fill="white">Diesel</text>
              
              <!-- Lubricating oils -->
              <rect x="205" y="255" width="90" height="35" rx="3" fill="#795548" opacity="0.8"/>
              <text x="250" y="275" text-anchor="middle" font-size="10" fill="white">Lubricating</text>
              
              <!-- Bitumen (bottom) -->
              <rect x="205" y="295" width="90" height="45" rx="3" fill="#3e2723" opacity="0.8"/>
              <text x="250" y="320" text-anchor="middle" font-size="10" fill="white">Bitumen</text>
              
              <!-- Temperature gradient -->
              <text x="320" y="80" font-size="10" fill="#1565c0">↑ Cooler</text>
              <text x="320" y="340" font-size="10" fill="#1565c0">↓ Hotter</text>
              
              <!-- Arrows -->
              <line x1="150" y1="200" x2="195" y2="200" stroke="#1565c0" stroke-width="2"/>
              <polygon points="195,195 205,200 195,205" fill="#1565c0"/>
              <text x="140" y="195" text-anchor="middle" font-size="10" fill="#1565c0">Crude Oil In</text>
              
              <!-- Flame -->
              <rect x="220" y="350" width="60" height="20" rx="3" fill="#ff9800"/>
              <rect x="230" y="340" width="40" height="10" rx="2" fill="#ffb74d"/>
              <text x="250" y="385" text-anchor="middle" font-size="11" fill="#1565c0">Heat Source</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Environmental Impact",
        objective: "obj_016",
        text: `
          <h3>Environmental Impact of Hydrocarbons</h3>
          <p>The use of hydrocarbons has significant environmental consequences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Issues</h4>
              <ul>
                <li>• <strong>Climate change:</strong> CO₂ is a greenhouse gas</li>
                <li>• <strong>Air pollution:</strong> CO, NOx, SOx, particulates</li>
                <li>• <strong>Oil spills:</strong> Damage to ecosystems</li>
                <li>• <strong>Plastic pollution:</strong> Non-biodegradable</li>
                <li>• <strong>Resource depletion:</strong> Non-renewable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Renewable energy:</strong> Solar, wind</li>
                <li>• <strong>Electric vehicles:</strong> Reduce emissions</li>
                <li>• <strong>Carbon capture:</strong> Remove CO₂</li>
                <li>• <strong>Biofuels:</strong> Sustainable alternatives</li>
                <li>• <strong>Recycling:</strong> Reduce plastic waste</li>
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
          <h4>⛽ Hydrocarbons</h4>
          <ul>
            <li>• Compounds of carbon and hydrogen</li>
            <li>• Alkanes: single bonds, saturated</li>
            <li>• Alkenes: double bonds, unsaturated</li>
            <li>• Alkynes: triple bonds, unsaturated</li>
            <li>• Aromatic: benzene rings</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Applications</h4>
          <ul>
            <li>• Fuels: petrol, diesel, LPG</li>
            <li>• Plastics: polymers from alkenes</li>
            <li>• Lubricants and waxes</li>
            <li>• Petrochemicals industry</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Hydrocarbons are essential to modern life but also have environmental impacts. Sustainable alternatives are being developed.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All hydrocarbons are fossil fuels",
        correction: "Hydrocarbons can be renewable (e.g., from plants)",
        explanation: "Hydrocarbons can be produced from biomass as well as fossil sources."
      },
      {
        id: "mis_002",
        misconception: "Alkenes are saturated like alkanes",
        correction: "Alkenes are unsaturated (have double bonds)",
        explanation: "Alkenes have double bonds and can undergo addition reactions."
      },
      {
        id: "mis_003",
        misconception: "Benzene has alternating single and double bonds",
        correction: "Benzene has delocalized electrons with all bonds equal",
        explanation: "Benzene's electrons are delocalized, giving it extra stability."
      },
      {
        id: "mis_004",
        misconception: "All hydrocarbons are bad for the environment",
        correction: "Hydrocarbons are essential, but fossil sources have impacts",
        explanation: "Biodegradable hydrocarbons from renewable sources can be sustainable."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Fuel Production",
        description: "Hydrocarbons are used as fuels.",
        example: "Petrol, diesel, jet fuel"
      },
      {
        id: "app_002",
        title: "Plastics and Polymers",
        description: "Alkenes are used to make polymers.",
        example: "Polyethylene, polypropylene"
      },
      {
        id: "app_003",
        title: "Industrial Chemicals",
        description: "Hydrocarbons are feedstocks for chemicals.",
        example: "Solvents, lubricants, waxes"
      },
      {
        id: "app_004",
        title: "Pharmaceuticals",
        description: "Hydrocarbons are used in drug synthesis.",
        example: "Drugs, medicines, vitamins"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Hydrocarbon", definition: "Compound containing only carbon and hydrogen." },
    { term: "Alkane", definition: "Saturated hydrocarbon with single bonds." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon with a double bond." },
    { term: "Alkyne", definition: "Unsaturated hydrocarbon with a triple bond." },
    { term: "Aromatic", definition: "Compound containing a benzene ring." },
    { term: "Saturated", definition: "Contains only single bonds (max hydrogens)." },
    { term: "Unsaturated", definition: "Contains double or triple bonds." },
    { term: "Isomer", definition: "Compound with same formula, different structure." },
    { term: "Functional Group", definition: "An atom or group that gives a compound its properties." },
    { term: "Combustion", definition: "Burning in oxygen to produce CO₂ and H₂O." },
    { term: "Substitution", definition: "Reaction where one atom replaces another." },
    { term: "Addition", definition: "Reaction where atoms add to a double/triple bond." },
    { term: "Cracking", definition: "Breaking down larger hydrocarbons into smaller ones." },
    { term: "Petroleum", definition: "Crude oil, a mixture of hydrocarbons." },
    { term: "Fractional Distillation", definition: "Separation of crude oil based on boiling points." },
    { term: "Delocalized Electrons", definition: "Electrons spread over several atoms." },
    { term: "Electrophilic Substitution", definition: "A reaction where an electrophile replaces a hydrogen." },
    { term: "Hydrogenation", definition: "Addition of hydrogen to a double/triple bond." },
    { term: "Halogenation", definition: "Addition of a halogen to a double/triple bond." },
    { term: "Hydration", definition: "Addition of water to a double/triple bond." }
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
      question: "What are hydrocarbons?",
      type: "multiple_choice",
      options: [
        "Compounds containing only carbon and hydrogen",
        "Compounds containing carbon and oxygen",
        "Compounds containing only hydrogen",
        "Compounds containing carbon and nitrogen"
      ],
      answer: "Compounds containing only carbon and hydrogen",
      explanation: "Hydrocarbons are compounds composed solely of carbon and hydrogen."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which type of hydrocarbon has only single bonds?",
      type: "multiple_choice",
      options: ["Alkanes", "Alkenes", "Alkynes", "Aromatic"],
      answer: "Alkanes",
      explanation: "Alkanes have only single bonds and are saturated."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the general formula for alkanes?",
      type: "multiple_choice",
      options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "C₆H₆"],
      answer: "CₙH₂ₙ₊₂",
      explanation: "Alkanes have the general formula CₙH₂ₙ₊₂."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the name of CH₃-CH₂-CH₂-CH₃?",
      type: "multiple_choice",
      options: ["Butane", "Propane", "Pentane", "Hexane"],
      answer: "Butane",
      explanation: "C₄H₁₀ with a straight chain is butane."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What type of bond is found in alkenes?",
      type: "multiple_choice",
      options: ["Single bond", "Double bond", "Triple bond", "Ionic bond"],
      answer: "Double bond",
      explanation: "Alkenes contain at least one carbon-carbon double bond."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the name of C₂H₂?",
      type: "multiple_choice",
      options: ["Ethene", "Ethyne", "Ethane", "Ethanol"],
      answer: "Ethyne",
      explanation: "C₂H₂ is ethyne (acetylene), an alkyne."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What happens to boiling point as chain length increases?",
      type: "multiple_choice",
      options: ["Increases", "Decreases", "Stays the same", "Fluctuates"],
      answer: "Increases",
      explanation: "Boiling point increases with chain length due to larger molecules."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the product of complete combustion of methane?",
      type: "multiple_choice",
      options: ["CO + H₂O", "CO₂ + H₂O", "C + H₂O", "CH₃OH"],
      answer: "CO₂ + H₂O",
      explanation: "Complete combustion of methane produces CO₂ and H₂O."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the product when ethene reacts with bromine?",
      type: "multiple_choice",
      options: ["Ethane", "1,2-dibromoethane", "Ethanol", "Ethyne"],
      answer: "1,2-dibromoethane",
      explanation: "Ethene + Br₂ → CH₂Br-CH₂Br (1,2-dibromoethane)."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the product of hydrogenation of ethyne?",
      type: "multiple_choice",
      options: ["Ethane", "Ethene", "Ethanol", "Ethyne"],
      answer: "Ethane",
      explanation: "Ethyne + 2H₂ → Ethane (with catalyst)."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the main source of hydrocarbons?",
      type: "multiple_choice",
      options: ["Petroleum", "Water", "Air", "Soil"],
      answer: "Petroleum",
      explanation: "Petroleum (crude oil) is the main source of hydrocarbons."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "What process separates crude oil into fractions?",
      type: "multiple_choice",
      options: ["Cracking", "Fractional distillation", "Combustion", "Hydrogenation"],
      answer: "Fractional distillation",
      explanation: "Fractional distillation separates crude oil based on boiling points."
    },
    {
      id: "prac_013",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is the structure of benzene?",
      type: "multiple_choice",
      options: [
        "Six-member ring with alternating double bonds",
        "Six-member ring with delocalized electrons",
        "Six-member ring with triple bonds",
        "Open chain structure"
      ],
      answer: "Six-member ring with delocalized electrons",
      explanation: "Benzene has delocalized electrons in a ring structure."
    },
    {
      id: "prac_014",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is cracking?",
      type: "multiple_choice",
      options: [
        "Breaking large hydrocarbons into smaller ones",
        "Combining small hydrocarbons into larger ones",
        "Burning hydrocarbons",
        "Separating hydrocarbons"
      ],
      answer: "Breaking large hydrocarbons into smaller ones",
      explanation: "Cracking breaks down large hydrocarbon molecules into smaller ones."
    },
    {
      id: "prac_015",
      objective: "obj_016",
      difficulty: "hard",
      question: "What is a major environmental issue with hydrocarbon use?",
      type: "multiple_choice",
      options: [
        "Climate change from CO₂ emissions",
        "Ozone depletion",
        "Acid rain only",
        "Water shortage"
      ],
      answer: "Climate change from CO₂ emissions",
      explanation: "CO₂ from burning hydrocarbons is a major contributor to climate change."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_hydrocarbons",
    title: "Hydrocarbons Quiz",
    description: "Test your understanding of hydrocarbons",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are hydrocarbons?",
        type: "short_answer",
        answer_key: "Compounds containing only carbon and hydrogen",
        explanation: "Hydrocarbons are compounds composed solely of carbon and hydrogen."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between saturated and unsaturated hydrocarbons?",
        type: "short_answer",
        answer_key: "Saturated has only single bonds; unsaturated has double/triple bonds",
        explanation: "Saturated hydrocarbons have only single bonds; unsaturated have double or triple bonds."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the general formula for alkanes?",
        type: "short_answer",
        answer_key: "CₙH₂ₙ₊₂",
        explanation: "Alkanes have the general formula CₙH₂ₙ₊₂."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name the alkane with the formula C₄H₁₀.",
        type: "short_answer",
        answer_key: "Butane",
        explanation: "C₄H₁₀ is butane."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What type of bond do alkenes have?",
        type: "short_answer",
        answer_key: "Double bond",
        explanation: "Alkenes contain at least one carbon-carbon double bond."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the name of C₂H₂?",
        type: "short_answer",
        answer_key: "Ethyne",
        explanation: "C₂H₂ is ethyne (acetylene)."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the structure of benzene?",
        type: "short_answer",
        answer_key: "Six-member ring with delocalized electrons",
        explanation: "Benzene has a ring of six carbons with delocalized electrons."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the product of complete combustion of methane?",
        type: "short_answer",
        answer_key: "CO₂ and H₂O",
        explanation: "Complete combustion of methane produces CO₂ and H₂O."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the product when ethene reacts with bromine?",
        type: "short_answer",
        answer_key: "1,2-dibromoethane",
        explanation: "Ethene + Br₂ → 1,2-dibromoethane."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What process separates crude oil into fractions?",
        type: "short_answer",
        answer_key: "Fractional distillation",
        explanation: "Fractional distillation separates crude oil based on boiling points."
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
        "Understand the classification of hydrocarbons",
        "Name alkanes, alkenes, and alkynes",
        "Describe the properties and reactions",
        "Understand the importance of petroleum"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are hydrocarbons?" },
        { time: "5-10 min", activity: "Direct Instruction - Classification of Hydrocarbons" },
        { time: "10-15 min", activity: "Direct Instruction - Alkanes and Naming" },
        { time: "15-20 min", activity: "Direct Instruction - Alkenes and Alkynes" },
        { time: "20-25 min", activity: "Direct Instruction - Aromatic Hydrocarbons" },
        { time: "25-30 min", activity: "Direct Instruction - Reactions of Hydrocarbons" },
        { time: "30-35 min", activity: "Direct Instruction - Petroleum and Fractional Distillation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Compounds containing only carbon and hydrogen",
        prac_002: "Alkanes",
        prac_003: "CₙH₂ₙ₊₂",
        prac_004: "Butane",
        prac_005: "Double bond",
        prac_006: "Ethyne",
        prac_007: "Increases",
        prac_008: "CO₂ + H₂O",
        prac_009: "1,2-dibromoethane",
        prac_010: "Ethane",
        prac_011: "Petroleum",
        prac_012: "Fractional distillation",
        prac_013: "Six-member ring with delocalized electrons",
        prac_014: "Breaking large hydrocarbons into smaller ones",
        prac_015: "Climate change from CO₂ emissions"
      },
      assessment: {
        ass_001: "Compounds containing only carbon and hydrogen",
        ass_002: "Saturated has only single bonds; unsaturated has double/triple bonds",
        ass_003: "CₙH₂ₙ₊₂",
        ass_004: "Butane",
        ass_005: "Double bond",
        ass_006: "Ethyne",
        ass_007: "Six-member ring with delocalized electrons",
        ass_008: "CO₂ and H₂O",
        ass_009: "1,2-dibromoethane",
        ass_010: "Fractional distillation"
      }
    },
    extensionActivities: [
      "Research the petrochemical industry",
      "Study the environmental impact of fossil fuels",
      "Research alternative fuels",
      "Learn about polymer production"
    ],
    differentiation: {
      struggling: [
        "Focus on basic nomenclature",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research reaction mechanisms",
        "Study advanced nomenclature",
        "Research synthetic routes",
        "Study the chemistry of biofuels"
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
      title: "Classification of Hydrocarbons",
      description: "Diagram showing the classification of hydrocarbons",
      url: "/diagrams/hydrocarbon-classification.png",
      alt: "Hydrocarbon classification diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Benzene Ring",
      description: "Structure of benzene",
      url: "/diagrams/benzene.png",
      alt: "Benzene structure"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Fractional Distillation",
      description: "Diagram of fractional distillation of petroleum",
      url: "/diagrams/fractional-distillation.png",
      alt: "Fractional distillation diagram"
    }
  ]
};