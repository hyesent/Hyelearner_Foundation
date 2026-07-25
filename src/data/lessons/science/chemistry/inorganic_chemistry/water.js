// Location: src/data/lessons/science/chemistry/inorganic_chemistry/water.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_water",
  subject: "Chemistry",
  topic: "Water",
  name: "Water",
  icon: "💧",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 23,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of atomic structure",
    "Knowledge of covalent bonding",
    "Understanding of hydrogen bonding",
    "Basic knowledge of the periodic table"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Acids and Bases",
      file: "science/chemistry/acids_and_bases.js"
    },
    {
      name: "Environmental Chemistry",
      file: "science/chemistry/environmental_chemistry.js"
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
      description: "Define water and explain its importance",
      indicator: "Student can explain what water is and why it is essential"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Describe the structure of the water molecule",
      indicator: "Student can explain the bent structure of H₂O"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the physical properties of water",
      indicator: "Student can list the physical properties of water"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the polarity of water molecules",
      indicator: "Student can explain why water is polar"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain hydrogen bonding in water",
      indicator: "Student can describe hydrogen bonds between water molecules"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the unique properties of water",
      indicator: "Student can explain density, surface tension, and specific heat capacity"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the water cycle",
      indicator: "Student can explain the stages of the water cycle"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the composition of natural water",
      indicator: "Student can describe what is found in natural water"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the difference between hard and soft water",
      indicator: "Student can distinguish between hard and soft water"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the causes and effects of hard water",
      indicator: "Student can explain how hard water is formed and its effects"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe methods of water purification",
      indicator: "Student can explain filtration, distillation, and chlorination"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the process of water treatment",
      indicator: "Student can describe the stages of water treatment"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the environmental issues with water",
      indicator: "Student can describe water pollution and conservation"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the importance of water in chemical reactions",
      indicator: "Student can describe water as a solvent and reactant"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the global water crisis",
      indicator: "Student can discuss water scarcity and solutions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Water - The Essential Compound",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about water, its unique properties, and its importance in chemistry and life."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Water</h2>
      <p><strong>Water</strong> (H₂O) is a simple yet remarkable compound. It is essential for all known forms of life and is the most abundant substance on Earth's surface. Its unique properties make it indispensable in chemistry, biology, and daily life.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💧 Key Concepts</h3>
          <ul>
            <li>✓ Structure of Water</li>
            <li>✓ Polarity</li>
            <li>✓ Hydrogen Bonding</li>
            <li>✓ Physical Properties</li>
            <li>✓ Water Cycle</li>
            <li>✓ Hard and Soft Water</li>
            <li>✓ Water Treatment</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Water covers ~71% of Earth's surface</li>
            <li>• The human body is ~60% water</li>
            <li>• Water expands when it freezes</li>
            <li>• Ice is less dense than liquid water</li>
            <li>• Water is called the "universal solvent"</li>
            <li>• Only 2.5% of Earth's water is fresh</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Water Matters</h4>
        <p>Water is essential for all life. It is a vital solvent, a reactant in many chemical reactions, and plays a crucial role in regulating Earth's climate.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Structure of Water",
        objective: "obj_002",
        text: `
          <h3>The Water Molecule</h3>
          <p>Water molecules consist of two hydrogen atoms covalently bonded to one oxygen atom.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure Details</h4>
              <ul>
                <li>• Molecular formula: H₂O</li>
                <li>• Bent shape (V-shaped)</li>
                <li>• Bond angle: 104.5°</li>
                <li>• O-H bond length: 0.096 nm</li>
                <li>• Covalent bonds (polar)</li>
                <li>• Oxygen is more electronegative</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• Oxygen has two lone pairs</li>
                <li>• Molecule is polar</li>
                <li>• Partial positive charges on H</li>
                <li>• Partial negative charge on O</li>
                <li>• Bent shape due to lone pairs</li>
                <li>• VSEPR theory: tetrahedral electron geometry</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Water Molecule Structure</text>
              
              <!-- Water Molecule -->
              <g transform="translate(200, 160)">
                <!-- Oxygen atom -->
                <circle cx="0" cy="0" r="35" fill="#ef5350" stroke="#c62828" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="16" font-weight="bold" fill="white">O</text>
                
                <!-- Hydrogen atoms -->
                <circle cx="-50" cy="-35" r="20" fill="#4a90d9" stroke="#1565c0" stroke-width="3"/>
                <text x="-50" y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="white">H</text>
                
                <circle cx="50" cy="-35" r="20" fill="#4a90d9" stroke="#1565c0" stroke-width="3"/>
                <text x="50" y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="white">H</text>
                
                <!-- Bonds -->
                <line x1="-30" y1="-20" x2="-50" y2="-35" stroke="#1565c0" stroke-width="4"/>
                <line x1="30" y1="-20" x2="50" y2="-35" stroke="#1565c0" stroke-width="4"/>
                
                <!-- Lone pairs -->
                <circle cx="-15" cy="15" r="6" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
                <circle cx="15" cy="15" r="6" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
                
                <!-- Bond angle -->
                <path d="M-25 -15 A35 35 0 0 1 25 -15" fill="none" stroke="#1565c0" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="0" y="-12" text-anchor="middle" font-size="11" fill="#1565c0">104.5°</text>
                
                <!-- Partial charges -->
                <text x="-55" y="-50" text-anchor="middle" font-size="14" fill="#1565c0">δ+</text>
                <text x="55" y="-50" text-anchor="middle" font-size="14" fill="#1565c0">δ+</text>
                <text x="-5" y="35" text-anchor="middle" font-size="14" fill="#1565c0">δ-</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Polarity and Hydrogen Bonding",
        objective: "obj_004",
        text: `
          <h3>Polarity and Hydrogen Bonding</h3>
          <p>Water is a polar molecule due to the difference in electronegativity between oxygen and hydrogen.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Polarity</h4>
              <ul>
                <li>• Oxygen is more electronegative</li>
                <li>• Shared electrons pulled toward O</li>
                <li>• Oxygen gets partial negative charge (δ-)</li>
                <li>• Hydrogens get partial positive charges (δ+)</li>
                <li>• Molecule has a dipole moment</li>
                <li>• Water is a polar molecule</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hydrogen Bonding</h4>
              <ul>
                <li>• Attraction between δ+ H and δ- O</li>
                <li>• Intermolecular force</li>
                <li>• Weaker than covalent bonds</li>
                <li>• Responsible for many unique properties</li>
                <li>• Each H₂O can form 4 H-bonds</li>
                <li>• Strong for a small molecule</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Hydrogen Bonding in Water</text>
              
              <!-- Water molecules -->
              <g transform="translate(300, 140)">
                <!-- Molecule 1 -->
                <g transform="translate(-100, 0)">
                  <circle cx="0" cy="0" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="white">O</text>
                  <circle cx="-35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="-35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                  <circle cx="35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                  <text x="-35" y="-45" text-anchor="middle" font-size="10" fill="#1565c0">δ+</text>
                  <text x="35" y="-45" text-anchor="middle" font-size="10" fill="#1565c0">δ+</text>
                  <text x="0" y="25" text-anchor="middle" font-size="10" fill="#1565c0">δ-</text>
                </g>
                
                <!-- Molecule 2 -->
                <g transform="translate(100, 0)">
                  <circle cx="0" cy="0" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="white">O</text>
                  <circle cx="-35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="-35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                  <circle cx="35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                </g>
                
                <!-- Molecule 3 -->
                <g transform="translate(-100, -70)">
                  <circle cx="0" cy="0" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="white">O</text>
                  <circle cx="-35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="-35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                  <circle cx="35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                </g>
                
                <!-- Molecule 4 -->
                <g transform="translate(100, -70)">
                  <circle cx="0" cy="0" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                  <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="white">O</text>
                  <circle cx="-35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="-35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                  <circle cx="35" cy="-25" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                  <text x="35" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="white">H</text>
                </g>
                
                <!-- Hydrogen bonds (dashed lines) -->
                <line x1="-65" y1="-15" x2="-65" y2="-45" stroke="#1565c0" stroke-width="2" stroke-dasharray="6,4"/>
                <line x1="65" y1="-15" x2="65" y2="-45" stroke="#1565c0" stroke-width="2" stroke-dasharray="6,4"/>
                <line x1="-75" y1="-35" x2="-75" y2="-50" stroke="#1565c0" stroke-width="2" stroke-dasharray="6,4"/>
                <line x1="75" y1="-35" x2="75" y2="-50" stroke="#1565c0" stroke-width="2" stroke-dasharray="6,4"/>
                
                <!-- Label -->
                <text x="0" y="80" text-anchor="middle" font-size="14" fill="#1565c0">Hydrogen Bonds (---)</text>
                <text x="0" y="100" text-anchor="middle" font-size="11" fill="#1565c0">Each water molecule can form up to 4 hydrogen bonds</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Physical Properties of Water",
        objective: "obj_003",
        text: `
          <h3>Physical Properties of Water</h3>
          <p>Water has many unique physical properties due to hydrogen bonding.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Properties</h4>
              <ul>
                <li>• <strong>Boiling point:</strong> 100°C (high for small molecule)</li>
                <li>• <strong>Melting point:</strong> 0°C</li>
                <li>• <strong>Density:</strong> 1 g/cm³ (at 4°C)</li>
                <li>• <strong>Ice density:</strong> 0.92 g/cm³ (floats)</li>
                <li>• <strong>Surface tension:</strong> High</li>
                <li>• <strong>Specific heat capacity:</strong> 4.18 J/g°C (high)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Why These Properties?</h4>
              <ul>
                <li>• High boiling point: Hydrogen bonds</li>
                <li>• Ice floats: Open structure</li>
                <li>• High surface tension: Hydrogen bonds</li>
                <li>• High specific heat: Hydrogen bonds</li>
                <li>• Universal solvent: Polarity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Water Cycle",
        objective: "obj_007",
        text: `
          <h3>The Water Cycle</h3>
          <p>Water constantly moves through the environment in the <strong>water cycle</strong> (hydrological cycle).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages</h4>
              <ul>
                <li>• <strong>Evaporation:</strong> Water → Water vapor</li>
                <li>• <strong>Transpiration:</strong> From plants</li>
                <li>• <strong>Condensation:</strong> Vapor → Liquid</li>
                <li>• <strong>Precipitation:</strong> Rain, snow, hail</li>
                <li>• <strong>Runoff:</strong> Water flows to rivers, lakes, oceans</li>
                <li>• <strong>Infiltration:</strong> Water soaks into ground</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• Water is continuously recycled</li>
                <li>• Energy from the sun drives the cycle</li>
                <li>• Affects climate and weather</li>
                <li>• Essential for life</li>
                <li>• Human activities can disrupt the cycle</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Hard and Soft Water",
        objective: "obj_009",
        text: `
          <h3>Hard and Soft Water</h3>
          <p><strong>Hard water</strong> contains dissolved calcium and magnesium salts. <strong>Soft water</strong> does not.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Hard Water</h4>
              <ul>
                <li>• Contains Ca²⁺ and Mg²⁺ ions</li>
                <li>• Temporary hardness: Ca(HCO₃)₂</li>
                <li>• Permanent hardness: CaSO₄, MgSO₄</li>
                <li>• Forms scum with soap</li>
                <li>• Causes limescale in pipes</li>
                <li>• Found in limestone areas</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Soft Water</h4>
              <ul>
                <li>• No Ca²⁺ or Mg²⁺ ions</li>
                <li>• Lathers easily with soap</li>
                <li>• Less limescale</li>
                <li>• Found in areas with non-calcareous rocks</li>
                <li>• Rainwater is naturally soft</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Hard Water - Causes and Effects",
        objective: "obj_010",
        text: `
          <h3>Causes and Effects of Hard Water</h3>
          <p>Hard water is caused by dissolved calcium and magnesium compounds.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Temporary Hardness</h4>
              <ul>
                <li>• Caused by Ca(HCO₃)₂</li>
                <li>• Removed by boiling</li>
                <li>• Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂</li>
                <li>• Limescale is CaCO₃</li>
                <li>• Forms in kettles and pipes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Permanent Hardness</h4>
              <ul>
                <li>• Caused by CaSO₄, MgSO₄</li>
                <li>• Not removed by boiling</li>
                <li>• Removed by:</li>
                <li>• Adding washing soda (Na₂CO₃)</li>
                <li>• Ion exchange resins</li>
                <li>• Distillation</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Removing Temporary Hardness:</strong>
            <ul>
              <li>• Boiling: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂</li>
              <li>• Adding lime: Ca(OH)₂</li>
              <li>• Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Water Purification",
        objective: "obj_011",
        text: `
          <h3>Methods of Water Purification</h3>
          <p>Several methods are used to purify water for drinking.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Methods</h4>
              <ul>
                <li>• <strong>Filtration:</strong> Removes solid particles</li>
                <li>• <strong>Boiling:</strong> Kills bacteria</li>
                <li>• <strong>Chlorination:</strong> Kills bacteria</li>
                <li>• <strong>Distillation:</strong> Removes all impurities</li>
                <li>• <strong>Reverse osmosis:</strong> Removes ions</li>
                <li>• <strong>UV treatment:</strong> Kills pathogens</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Industrial Treatment</h4>
              <ul>
                <li>• <strong>Screening:</strong> Removes large objects</li>
                <li>• <strong>Sedimentation:</strong> Particles settle</li>
                <li>• <strong>Filtration:</strong> Removes fine particles</li>
                <li>• <strong>Chlorination:</strong> Disinfection</li>
                <li>• <strong>Fluoridation:</strong> Prevents tooth decay</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Water Treatment Process",
        objective: "obj_012",
        text: `
          <h3>Water Treatment - Stage by Stage</h3>
          <p>Municipal water treatment involves several stages.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages</h4>
              <ul>
                <li>1. <strong>Screening:</strong> Removes large debris</li>
                <li>2. <strong>Flocculation:</strong> Chemicals added to clump particles</li>
                <li>3. <strong>Sedimentation:</strong> Particles settle</li>
                <li>4. <strong>Filtration:</strong> Water passes through sand filters</li>
                <li>5. <strong>Chlorination:</strong> Kills bacteria</li>
                <li>6. <strong>Fluoridation:</strong> Fluoride added</li>
                <li>7. <strong>Storage:</strong> Stored for distribution</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemicals Used</h4>
              <ul>
                <li>• <strong>Alum (Al₂(SO₄)₃):</strong> Flocculation</li>
                <li>• <strong>Chlorine (Cl₂):</strong> Disinfection</li>
                <li>• <strong>Ozone (O₃):</strong> Disinfection</li>
                <li>• <strong>Sodium hydroxide:</strong> pH adjustment</li>
                <li>• <strong>Fluoride:</strong> Dental health</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Water Pollution",
        objective: "obj_013",
        text: `
          <h3>Water Pollution</h3>
          <p>Water pollution is a major environmental issue affecting ecosystems and human health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Pollution</h4>
              <ul>
                <li>• <strong>Chemical:</strong> Pesticides, heavy metals</li>
                <li>• <strong>Biological:</strong> Pathogens, bacteria</li>
                <li>• <strong>Physical:</strong> Plastics, sediment</li>
                <li>• <strong>Nutrient:</strong> Nitrates, phosphates</li>
                <li>• <strong>Thermal:</strong> Heated water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sources</h4>
              <ul>
                <li>• <strong>Industrial waste:</strong> Chemicals</li>
                <li>• <strong>Agricultural runoff:</strong> Fertilizers, pesticides</li>
                <li>• <strong>Sewage:</strong> Human waste</li>
                <li>• <strong>Oil spills:</strong> Petroleum</li>
                <li>• <strong>Plastic waste:</strong> Non-biodegradable</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Water as a Solvent",
        objective: "obj_014",
        text: `
          <h3>Water as a Solvent</h3>
          <p>Water is called the <strong>universal solvent</strong> because it dissolves many substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Why Water Dissolves</h4>
              <ul>
                <li>• Polar molecule</li>
                <li>• Attracts positive and negative ions</li>
                <li>• Hydration shells form</li>
                <li>• Ionic compounds dissolve</li>
                <li>• Polar covalent compounds dissolve</li>
                <li>• "Like dissolves like"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Ionic compounds:</strong></li>
                <li>• NaCl → Na⁺ + Cl⁻</li>
                <li>• <strong>Polar compounds:</strong></li>
                <li>• Sugar (C₁₂H₂₂O₁₁)</li>
                <li>• <strong>Non-polar compounds:</strong></li>
                <li>• Oil (does not dissolve)</li>
                <li>• Fats (do not dissolve)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Global Water Crisis",
        objective: "obj_015",
        text: `
          <h3>The Global Water Crisis</h3>
          <p>Freshwater scarcity is a growing global problem.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Statistics</h4>
              <ul>
                <li>• 2.2 billion people lack safe drinking water</li>
                <li>• 4.2 billion lack safely managed sanitation</li>
                <li>• 80% of wastewater is untreated</li>
                <li>• 700 million people could be displaced by 2030</li>
                <li>• Climate change is worsening water scarcity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Conservation:</strong> Reduce waste</li>
                <li>• <strong>Desalination:</strong> Remove salt from seawater</li>
                <li>• <strong>Water recycling:</strong> Reuse wastewater</li>
                <li>• <strong>Rainwater harvesting:</strong> Collect rainwater</li>
                <li>• <strong>Protect water sources:</strong> Prevent pollution</li>
                <li>• <strong>Efficient irrigation:</strong> Agriculture</li>
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
          <h4>💧 Water</h4>
          <ul>
            <li>• Essential for all life</li>
            <li>• Unique properties due to hydrogen bonding</li>
            <li>• Polar molecule, universal solvent</li>
            <li>• Natural water contains dissolved minerals</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Hard water: Contains Ca²⁺ and Mg²⁺</li>
            <li>• Water purification: Filtration, chlorination</li>
            <li>• Water pollution: Major environmental issue</li>
            <li>• Water scarcity: Growing global challenge</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Water is essential for life and has unique properties. Understanding water chemistry is crucial for addressing global water challenges.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Water molecules are linear",
        correction: "Water molecules are bent (V-shaped)",
        explanation: "The bent shape is due to two lone pairs on oxygen."
      },
      {
        id: "mis_002",
        misconception: "Hard water is unsafe to drink",
        correction: "Hard water is safe to drink",
        explanation: "Hard water contains beneficial minerals like calcium and magnesium."
      },
      {
        id: "mis_003",
        misconception: "Boiling removes all impurities",
        correction: "Boiling only kills bacteria, doesn't remove dissolved solids",
        explanation: "Boiling does not remove dissolved minerals or heavy metals."
      },
      {
        id: "mis_004",
        misconception: "Water pollution is only a developing country problem",
        correction: "Water pollution is a global problem",
        explanation: "Water pollution affects all countries, developed and developing."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Water Treatment",
        description: "Understanding water chemistry helps provide clean drinking water.",
        example: "Municipal water treatment plants"
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Water is essential for crop production.",
        example: "Irrigation, hydroponics"
      },
      {
        id: "app_003",
        title: "Industry",
        description: "Water is used in many industrial processes.",
        example: "Cooling, cleaning, chemical production"
      },
      {
        id: "app_004",
        title: "Environmental Protection",
        description: "Understanding water helps protect ecosystems.",
        example: "Wastewater treatment, pollution control"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Water", definition: "A compound of hydrogen and oxygen (H₂O)." },
    { term: "Polar Molecule", definition: "A molecule with a positive and negative end." },
    { term: "Hydrogen Bond", definition: "An attraction between a hydrogen atom and an electronegative atom." },
    { term: "Specific Heat Capacity", definition: "The heat required to raise the temperature of 1g by 1°C." },
    { term: "Surface Tension", definition: "The property of a liquid's surface." },
    { term: "Hard Water", definition: "Water containing dissolved calcium and magnesium ions." },
    { term: "Soft Water", definition: "Water with low calcium and magnesium content." },
    { term: "Temporary Hardness", definition: "Hardness removed by boiling (bicarbonates)." },
    { term: "Permanent Hardness", definition: "Hardness not removed by boiling (sulfates, chlorides)." },
    { term: "Limescale", definition: "Calcium carbonate deposits." },
    { term: "Flocculation", definition: "Clumping of particles in water treatment." },
    { term: "Chlorination", definition: "Adding chlorine to kill bacteria." },
    { term: "Distillation", definition: "Boiling and condensing to purify water." },
    { term: "Reverse Osmosis", definition: "Forcing water through a membrane to remove ions." },
    { term: "Eutrophication", definition: "Excessive nutrients causing algal blooms." },
    { term: "Water Cycle", definition: "The continuous movement of water." },
    { term: "Evaporation", definition: "Liquid water to water vapor." },
    { term: "Condensation", definition: "Water vapor to liquid water." },
    { term: "Precipitation", definition: "Water falling from the atmosphere." },
    { term: "Desalination", definition: "Removing salt from seawater." }
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
      question: "What is water?",
      type: "multiple_choice",
      options: [
        "A mixture of gases",
        "A compound of hydrogen and oxygen",
        "A single element",
        "A type of salt"
      ],
      answer: "A compound of hydrogen and oxygen",
      explanation: "Water is a compound with the formula H₂O."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the shape of a water molecule?",
      type: "multiple_choice",
      options: ["Linear", "Bent (V-shaped)", "Trigonal", "Tetrahedral"],
      answer: "Bent (V-shaped)",
      explanation: "Water has a bent structure due to lone pairs on oxygen."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the boiling point of water?",
      type: "multiple_choice",
      options: ["50°C", "75°C", "100°C", "125°C"],
      answer: "100°C",
      explanation: "Water boils at 100°C at standard pressure."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Why is water considered a polar molecule?",
      type: "multiple_choice",
      options: [
        "It has a linear shape",
        "It has an uneven distribution of charge",
        "It has no charge",
        "It is ionic"
      ],
      answer: "It has an uneven distribution of charge",
      explanation: "Water is polar because oxygen is more electronegative than hydrogen."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What type of bonding occurs between water molecules?",
      type: "multiple_choice",
      options: [
        "Covalent bonds",
        "Ionic bonds",
        "Hydrogen bonds",
        "Metallic bonds"
      ],
      answer: "Hydrogen bonds",
      explanation: "Water molecules are connected by hydrogen bonds."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Why does ice float on water?",
      type: "multiple_choice",
      options: [
        "Ice is heavier than water",
        "Ice is less dense than water",
        "Ice is denser than water",
        "Ice has no mass"
      ],
      answer: "Ice is less dense than water",
      explanation: "Ice is less dense because of its open crystal structure."
    },
    {
      id: "prac_007",
      objective: "obj_009",
      difficulty: "medium",
      question: "What causes hard water?",
      type: "multiple_choice",
      options: [
        "Dissolved oxygen",
        "Dissolved calcium and magnesium salts",
        "Dissolved sodium",
        "Dissolved chlorine"
      ],
      answer: "Dissolved calcium and magnesium salts",
      explanation: "Hard water contains dissolved Ca²⁺ and Mg²⁺ ions."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is temporary hardness caused by?",
      type: "multiple_choice",
      options: ["CaSO₄", "Ca(HCO₃)₂", "NaCl", "MgCl₂"],
      answer: "Ca(HCO₃)₂",
      explanation: "Temporary hardness is caused by calcium hydrogen carbonate."
    },
    {
      id: "prac_009",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the purpose of chlorination in water treatment?",
      type: "multiple_choice",
      options: [
        "To remove sediment",
        "To kill bacteria",
        "To add fluoride",
        "To remove minerals"
      ],
      answer: "To kill bacteria",
      explanation: "Chlorination kills bacteria and pathogens in water."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is flocculation in water treatment?",
      type: "multiple_choice",
      options: [
        "Killing bacteria",
        "Clumping particles together",
        "Filtering water",
        "Adding fluoride"
      ],
      answer: "Clumping particles together",
      explanation: "Flocculation is the process of clumping particles so they can settle."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is eutrophication?",
      type: "multiple_choice",
      options: [
        "The addition of oxygen to water",
        "Excessive nutrients causing algal blooms",
        "The removal of pollutants",
        "The boiling of water"
      ],
      answer: "Excessive nutrients causing algal blooms",
      explanation: "Eutrophication is caused by excess nutrients like nitrates and phosphates."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is water called the universal solvent?",
      type: "multiple_choice",
      options: [
        "It dissolves all substances",
        "It dissolves many substances due to its polarity",
        "It is the only solvent",
        "It is non-polar"
      ],
      answer: "It dissolves many substances due to its polarity",
      explanation: "Water dissolves many substances because it is polar."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "How can permanent hardness be removed?",
      type: "multiple_choice",
      options: [
        "By boiling",
        "By adding washing soda",
        "By filtration",
        "By chlorination"
      ],
      answer: "By adding washing soda",
      explanation: "Permanent hardness is removed by adding washing soda (Na₂CO₃)."
    },
    {
      id: "prac_014",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a major cause of water scarcity?",
      type: "multiple_choice",
      options: [
        "Too much rainfall",
        "Climate change and population growth",
        "Too many rivers",
        "Excess water treatment"
      ],
      answer: "Climate change and population growth",
      explanation: "Water scarcity is worsened by climate change and population growth."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is the specific heat capacity of water?",
      type: "multiple_choice",
      options: [
        "4.18 J/g°C",
        "2.5 J/g°C",
        "1.0 J/g°C",
        "8.36 J/g°C"
      ],
      answer: "4.18 J/g°C",
      explanation: "Water has a high specific heat capacity of 4.18 J/g°C."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_water",
    title: "Water Quiz",
    description: "Test your understanding of water",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is water?",
        type: "short_answer",
        answer_key: "A compound of hydrogen and oxygen",
        explanation: "Water is H₂O."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the shape of a water molecule?",
        type: "short_answer",
        answer_key: "Bent (V-shaped)",
        explanation: "Water has a bent structure."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the boiling point of water?",
        type: "short_answer",
        answer_key: "100°C",
        explanation: "Water boils at 100°C."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Why is water polar?",
        type: "short_answer",
        answer_key: "Uneven distribution of charge due to electronegativity",
        explanation: "Oxygen is more electronegative than hydrogen."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What type of bonding occurs between water molecules?",
        type: "short_answer",
        answer_key: "Hydrogen bonding",
        explanation: "Hydrogen bonds connect water molecules."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Why does ice float on water?",
        type: "short_answer",
        answer_key: "Ice is less dense",
        explanation: "Ice is less dense than liquid water."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "medium",
        question: "What causes hard water?",
        type: "short_answer",
        answer_key: "Dissolved calcium and magnesium salts",
        explanation: "Hard water contains Ca²⁺ and Mg²⁺ ions."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is temporary hardness caused by?",
        type: "short_answer",
        answer_key: "Calcium hydrogen carbonate",
        explanation: "Temporary hardness is Ca(HCO₃)₂."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is chlorination used for in water treatment?",
        type: "short_answer",
        answer_key: "To kill bacteria",
        explanation: "Chlorination kills bacteria."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is eutrophication?",
        type: "short_answer",
        answer_key: "Excessive nutrients causing algal blooms",
        explanation: "Eutrophication is caused by excess nutrients."
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
        "Understand the structure and properties of water",
        "Explain hydrogen bonding in water",
        "Distinguish between hard and soft water",
        "Explain water purification and environmental issues"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is water?" },
        { time: "5-10 min", activity: "Direct Instruction - Structure of Water" },
        { time: "10-15 min", activity: "Direct Instruction - Polarity and Hydrogen Bonding" },
        { time: "15-20 min", activity: "Direct Instruction - Physical Properties" },
        { time: "20-25 min", activity: "Direct Instruction - Hard and Soft Water" },
        { time: "25-30 min", activity: "Direct Instruction - Water Purification" },
        { time: "30-35 min", activity: "Direct Instruction - Environmental Issues" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A compound of hydrogen and oxygen",
        prac_002: "Bent (V-shaped)",
        prac_003: "100°C",
        prac_004: "It has an uneven distribution of charge",
        prac_005: "Hydrogen bonds",
        prac_006: "Ice is less dense than water",
        prac_007: "Dissolved calcium and magnesium salts",
        prac_008: "Ca(HCO₃)₂",
        prac_009: "To kill bacteria",
        prac_010: "Clumping particles together",
        prac_011: "Excessive nutrients causing algal blooms",
        prac_012: "It dissolves many substances due to its polarity",
        prac_013: "By adding washing soda",
        prac_014: "Climate change and population growth",
        prac_015: "4.18 J/g°C"
      },
      assessment: {
        ass_001: "A compound of hydrogen and oxygen",
        ass_002: "Bent (V-shaped)",
        ass_003: "100°C",
        ass_004: "Uneven distribution of charge due to electronegativity",
        ass_005: "Hydrogen bonding",
        ass_006: "Ice is less dense",
        ass_007: "Dissolved calcium and magnesium salts",
        ass_008: "Calcium hydrogen carbonate",
        ass_009: "To kill bacteria",
        ass_010: "Excessive nutrients causing algal blooms"
      }
    },
    extensionActivities: [
      "Research water treatment in your area",
      "Study the water cycle",
      "Investigate water pollution sources",
      "Research desalination technology"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research water chemistry",
        "Study advanced water treatment",
        "Research water policy",
        "Study ocean acidification"
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
      title: "Water Molecule",
      description: "Structure of a water molecule",
      url: "/diagrams/water-molecule.png",
      alt: "Water molecule diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Hydrogen Bonding",
      description: "Hydrogen bonding in water",
      url: "/diagrams/hydrogen-bonding.png",
      alt: "Hydrogen bonding diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Water Cycle",
      description: "The water cycle diagram",
      url: "/diagrams/water-cycle.png",
      alt: "Water cycle diagram"
    }
  ]
};