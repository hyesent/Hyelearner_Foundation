// Location: src/data/lessons/science/chemistry/physical_chemistry/bonding.js

export default {
  id: "chem_lesson_bonding",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Chemical Bonding",
  icon: "🔗",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of atomic structure",
    "Knowledge of electron configuration",
    "Understanding of ions",
    "Knowledge of valence electrons"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_periodic_table",
      name: "Periodic Table",
      file: "science/chemistry/physical_chemistry/periodic_table.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Define a chemical bond and explain why atoms bond", indicator: "Student can explain that atoms bond to achieve a stable electron configuration" },
    { id: "obj_002", level: "easy", description: "Explain the octet rule", indicator: "Student can state that atoms tend to have 8 electrons in their outer shell" },
    { id: "obj_003", level: "easy", description: "Describe ionic bonding", indicator: "Student can explain how ions form and are held together" },
    { id: "obj_004", level: "easy", description: "Describe covalent bonding", indicator: "Student can explain how atoms share electrons" },
    { id: "obj_005", level: "medium", description: "Distinguish between ionic and covalent bonding", indicator: "Student can compare and contrast the two bond types" },
    { id: "obj_006", level: "medium", description: "Explain the properties of ionic compounds", indicator: "Student can describe the properties of ionic compounds" },
    { id: "obj_007", level: "medium", description: "Explain the properties of covalent compounds", indicator: "Student can describe the properties of covalent compounds" },
    { id: "obj_008", level: "medium", description: "Describe metallic bonding", indicator: "Student can explain the sea of electrons model" },
    { id: "obj_009", level: "medium", description: "Explain the relationship between bonding and structure", indicator: "Student can link bond type to properties" },
    { id: "obj_010", level: "hard", description: "Explain the concept of electronegativity", indicator: "Student can define electronegativity and describe its trend" },
    { id: "obj_011", level: "hard", description: "Explain the difference between polar and non-polar covalent bonds", indicator: "Student can distinguish between polar and non-polar bonds" },
    { id: "obj_012", level: "hard", description: "Explain the concept of intermolecular forces", indicator: "Student can describe van der Waals forces and hydrogen bonding" },
    { id: "obj_013", level: "hard", description: "Explain the relationship between bonding and conductivity", indicator: "Student can explain why some substances conduct electricity" },
    { id: "obj_014", level: "hard", description: "Analyze the properties of substances based on their bonding", indicator: "Student can predict properties from bond type" }
  ],

  video: {
    id: "vid_001",
    title: "Chemical Bonding",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about ionic, covalent, and metallic bonding."
  },

  content: {
    introduction: `
      <h2>What is Chemical Bonding?</h2>
      <p><strong>Chemical bonding</strong> is the attraction between atoms that allows the formation of compounds. Atoms bond to achieve a stable electron configuration, usually with 8 electrons in their outer shell (the octet rule).</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⚡ Ionic Bonding</h3>
          <ul>
            <li>• Transfer of electrons</li>
            <li>• Metal + Non-metal</li>
            <li>• Ions formed</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🔗 Covalent Bonding</h3>
          <ul>
            <li>• Sharing of electrons</li>
            <li>• Non-metal + Non-metal</li>
            <li>• Molecules formed</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🔩 Metallic Bonding</h3>
          <ul>
            <li>• Sea of electrons</li>
            <li>• Metal + Metal</li>
            <li>• Delocalized electrons</li>
          </ul>
        </div>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Octet Rule",
        objective: "obj_002",
        text: `
          <h3>The Octet Rule</h3>
          <p>Atoms tend to gain, lose, or share electrons to achieve a full outer shell of 8 electrons (or 2 for hydrogen and helium).</p>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f8f9fa" rx="10"/>
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Octet Rule - Sodium and Chlorine</text>
              
              <!-- Sodium atom -->
              <g transform="translate(120, 150)">
                <text x="0" y="-70" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Sodium (Na)</text>
                <text x="0" y="-55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2,8,1</text>
                <circle cx="0" cy="0" r="40" fill="none" stroke="#3498db" stroke-width="2"/>
                <circle cx="0" cy="0" r="25" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="3,3"/>
                <circle cx="0" cy="0" r="10" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1.5"/>
                <text x="0" y="-5" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#e74c3c">11+</text>
                <!-- Electrons -->
                <circle cx="0" cy="-40" r="4" fill="#3498db"/>
                <circle cx="28" cy="-28" r="4" fill="#3498db"/>
                <circle cx="-28" cy="-28" r="4" fill="#3498db"/>
                <circle cx="40" cy="0" r="4" fill="#3498db"/>
                <circle cx="-40" cy="0" r="4" fill="#3498db"/>
                <circle cx="28" cy="28" r="4" fill="#3498db"/>
                <circle cx="-28" cy="28" r="4" fill="#3498db"/>
                <circle cx="0" cy="40" r="4" fill="#3498db"/>
                <!-- Valence electron -->
                <circle cx="-18" cy="-18" r="5" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1.5"/>
              </g>
              
              <!-- Chlorine atom -->
              <g transform="translate(380, 150)">
                <text x="0" y="-70" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Chlorine (Cl)</text>
                <text x="0" y="-55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2,8,7</text>
                <circle cx="0" cy="0" r="40" fill="none" stroke="#2ecc71" stroke-width="2"/>
                <circle cx="0" cy="0" r="25" fill="none" stroke="#2ecc71" stroke-width="2" stroke-dasharray="3,3"/>
                <circle cx="0" cy="0" r="10" fill="#2ecc71" stroke="#27ae60" stroke-width="1.5"/>
                <text x="0" y="-5" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">17+</text>
                <!-- Electrons -->
                <circle cx="0" cy="-40" r="4" fill="#2ecc71"/>
                <circle cx="28" cy="-28" r="4" fill="#2ecc71"/>
                <circle cx="-28" cy="-28" r="4" fill="#2ecc71"/>
                <circle cx="40" cy="0" r="4" fill="#2ecc71"/>
                <circle cx="-40" cy="0" r="4" fill="#2ecc71"/>
                <circle cx="28" cy="28" r="4" fill="#2ecc71"/>
                <circle cx="-28" cy="28" r="4" fill="#2ecc71"/>
                <circle cx="0" cy="40" r="4" fill="#2ecc71"/>
                <!-- Valence electron -->
                <circle cx="18" cy="-18" r="5" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1.5"/>
              </g>
              
              <!-- Arrow -->
              <path d="M170 150 L220 150" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow)"/>
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#2c3e50"/>
                </marker>
              </defs>
              <text x="195" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Loses 1 e⁻</text>
              
              <text x="250" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Sodium loses 1 electron to achieve stable octet</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Ionic Bonding",
        objective: "obj_003",
        text: `
          <h3>Ionic Bonding</h3>
          <p><strong>Ionic bonding</strong> occurs when electrons are transferred from a metal atom to a non-metal atom, forming positive and negative ions that attract each other.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Ionic Bonding - Sodium Chloride</text>
              
              <!-- Sodium ion -->
              <g transform="translate(150, 180)">
                <text x="0" y="-50" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">Na⁺</text>
                <circle cx="0" cy="0" r="30" fill="#ff6b6b" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#e74c3c">2,8</text>
                <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Sodium ion</text>
              </g>
              
              <!-- Chloride ion -->
              <g transform="translate(450, 180)">
                <text x="0" y="-50" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2ecc71">Cl⁻</text>
                <circle cx="0" cy="0" r="30" fill="#2ecc71" opacity="0.3" stroke="#27ae60" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">2,8,8</text>
                <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Chloride ion</text>
              </g>
              
              <!-- Electrostatic attraction -->
              <path d="M180 180 Q250 150 320 180 Q390 210 420 180" stroke="#f39c12" stroke-width="3" fill="none" stroke-dasharray="8,4"/>
              <text x="300" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#f39c12">Electrostatic attraction</text>
              
              <!-- Labels -->
              <text x="100" y="100" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">Metal (Na) → loses e⁻</text>
              <text x="400" y="100" font-family="Arial, sans-serif" font-size="12" fill="#2ecc71">Non-metal (Cl) → gains e⁻</text>
              
              <text x="300" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Oppositely charged ions are held together by electrostatic forces</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example - Sodium Chloride:</strong>
            <ul>
              <li>• Na (2,8,1) loses 1 electron → Na⁺ (2,8)</li>
              <li>• Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8)</li>
              <li>• Na⁺ + Cl⁻ → NaCl (ionic compound)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Covalent Bonding",
        objective: "obj_004",
        text: `
          <h3>Covalent Bonding</h3>
          <p><strong>Covalent bonding</strong> occurs when non-metal atoms share pairs of electrons to achieve a stable octet.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Covalent Bonding - Hydrogen Molecule</text>
              
              <!-- Hydrogen atom 1 -->
              <g transform="translate(200, 180)">
                <text x="0" y="-40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">H</text>
                <circle cx="0" cy="0" r="25" fill="#3498db" opacity="0.2" stroke="#3498db" stroke-width="2"/>
                <circle cx="0" cy="0" r="15" fill="#3498db" opacity="0.4"/>
                <circle cx="-10" cy="-5" r="4" fill="#3498db"/>
              </g>
              
              <!-- Hydrogen atom 2 -->
              <g transform="translate(400, 180)">
                <text x="0" y="-40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">H</text>
                <circle cx="0" cy="0" r="25" fill="#3498db" opacity="0.2" stroke="#3498db" stroke-width="2"/>
                <circle cx="0" cy="0" r="15" fill="#3498db" opacity="0.4"/>
                <circle cx="10" cy="-5" r="4" fill="#3498db"/>
              </g>
              
              <!-- Shared electrons -->
              <circle cx="300" cy="180" r="6" fill="#f39c12" stroke="#e67e22" stroke-width="1.5"/>
              <circle cx="300" cy="195" r="6" fill="#f39c12" stroke="#e67e22" stroke-width="1.5"/>
              <text x="300" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#f39c12">Shared electrons</text>
              
              <!-- Bond line -->
              <line x1="225" y1="180" x2="375" y2="180" stroke="#2c3e50" stroke-width="2"/>
              <text x="300" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Covalent bond</text>
              
              <text x="300" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Atoms share electrons to achieve a full outer shell</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Examples:</strong>
            <ul>
              <li>• <strong>H₂:</strong> H + H → H-H (single bond)</li>
              <li>• <strong>O₂:</strong> O=O (double bond)</li>
              <li>• <strong>N₂:</strong> N≡N (triple bond)</li>
              <li>• <strong>H₂O:</strong> H-O-H (water)</li>
              <li>• <strong>CH₄:</strong> Methane</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Metallic Bonding",
        objective: "obj_008",
        text: `
          <h3>Metallic Bonding</h3>
          <p><strong>Metallic bonding</strong> occurs between metal atoms. Electrons are delocalized and form a "sea of electrons" that holds the positive metal ions together.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f8f9fa" rx="10"/>
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Metallic Bonding - Sea of Electrons</text>
              
              <!-- Metal ions -->
              <circle cx="100" cy="120" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="100" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="200" cy="120" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="200" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="300" cy="120" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="300" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="400" cy="120" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="400" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="500" cy="120" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="500" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <!-- Second row -->
              <circle cx="150" cy="200" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="150" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="250" cy="200" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="250" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="350" cy="200" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="350" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <circle cx="450" cy="200" r="20" fill="#ff6b6b" stroke="#e74c3c" stroke-width="2"/>
              <text x="450" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">M⁺</text>
              
              <!-- Electron sea -->
              <circle cx="80" cy="100" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="120" cy="80" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="180" cy="90" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="230" cy="70" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="280" cy="95" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="330" cy="80" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="380" cy="90" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="430" cy="70" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="480" cy="100" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="520" cy="80" r="5" fill="#f39c12" opacity="0.7"/>
              
              <circle cx="100" cy="150" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="150" cy="160" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="200" cy="150" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="250" cy="160" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="300" cy="150" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="350" cy="160" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="400" cy="150" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="450" cy="160" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="500" cy="150" r="5" fill="#f39c12" opacity="0.7"/>
              
              <circle cx="80" cy="180" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="130" cy="190" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="180" cy="180" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="230" cy="190" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="280" cy="180" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="330" cy="190" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="380" cy="180" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="430" cy="190" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="480" cy="180" r="5" fill="#f39c12" opacity="0.7"/>
              <circle cx="530" cy="190" r="5" fill="#f39c12" opacity="0.7"/>
              
              <text x="300" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Delocalized electrons form a 'sea' around positive metal ions</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Properties of Metals:</strong>
            <ul>
              <li>• Good conductors of electricity</li>
              <li>• Malleable and ductile</li>
              <li>• High melting points</li>
              <li>• Lustrous (shiny)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Electronegativity",
        objective: "obj_010",
        text: `
          <h3>Electronegativity</h3>
          <p><strong>Electronegativity</strong> is the ability of an atom to attract electrons in a chemical bond.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Points:</h4>
              <ul>
                <li>• Measured on the Pauling scale</li>
                <li>• Highest: Fluorine (4.0)</li>
                <li>• Lowest: Cesium (0.7)</li>
                <li>• Increases across a period</li>
                <li>• Decreases down a group</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Bond Type and Electronegativity:</h4>
              <ul>
                <li>• Difference > 1.7 → Ionic</li>
                <li>• Difference 0.5 - 1.7 → Polar covalent</li>
                <li>• Difference < 0.5 → Non-polar covalent</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Intermolecular Forces",
        objective: "obj_012",
        text: `
          <h3>Intermolecular Forces</h3>
          <p><strong>Intermolecular forces</strong> are forces between molecules. They are weaker than chemical bonds but affect physical properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types:</h4>
              <ul>
                <li><strong>Van der Waals forces:</strong></li>
                <li>• Weakest</li>
                <li>• Present in all molecules</li>
                <li>• Increase with size</li>
                <li><strong>Dipole-dipole forces:</strong></li>
                <li>• Between polar molecules</li>
                <li>• Stronger than van der Waals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hydrogen Bonding:</h4>
              <ul>
                <li>• Strongest intermolecular force</li>
                <li>• Occurs between H and O, N, or F</li>
                <li>• Responsible for water's properties</li>
                <li>• Important in biology (DNA)</li>
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
          <h4>🔗 Bond Types</h4>
          <ul>
            <li>• Ionic: Transfer of electrons</li>
            <li>• Covalent: Sharing of electrons</li>
            <li>• Metallic: Sea of electrons</li>
            <li>• Octet rule: 8 electrons in outer shell</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>⚡ Key Concepts</h4>
          <ul>
            <li>• Electronegativity: attraction for electrons</li>
            <li>• Intermolecular forces: between molecules</li>
            <li>• Hydrogen bonding: strong dipole-dipole</li>
            <li>• Bond type determines properties</li>
          </ul>
        </div>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Ionic compounds conduct electricity in solid form",
        correction: "Ionic compounds only conduct when molten or dissolved",
        explanation: "Ions must be free to move to conduct electricity."
      },
      {
        id: "mis_002",
        misconception: "Covalent bonds are always non-polar",
        correction: "Covalent bonds can be polar if atoms have different electronegativities",
        explanation: "HCl, H₂O, and NH₃ are examples of polar covalent compounds."
      },
      {
        id: "mis_003",
        misconception: "All metals have the same properties",
        correction: "Metals have different properties depending on their structure",
        explanation: "Transition metals have different properties than alkali metals."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Materials Science",
        description: "Understanding bonding helps design new materials.",
        example: "Alloys, composites, and nanomaterials."
      },
      {
        id: "app_002",
        title: "Medicine",
        description: "Bonding is important in drug design.",
        example: "Drugs interact with biological molecules through specific bonds."
      },
      {
        id: "app_003",
        title: "Electronics",
        description: "Semiconductors rely on bonding.",
        example: "Silicon and other semiconductors in electronics."
      },
      {
        id: "app_004",
        title: "Biology",
        description: "Bonding is essential in biological systems.",
        example: "DNA hydrogen bonding, protein structure."
      }
    ]
  },

  keyTerms: [
    { term: "Ionic Bond", definition: "Bond formed by the transfer of electrons between metal and non-metal." },
    { term: "Covalent Bond", definition: "Bond formed by the sharing of electrons between non-metals." },
    { term: "Metallic Bond", definition: "Bond formed by delocalized electrons in metals." },
    { term: "Octet Rule", definition: "Atoms tend to have 8 electrons in their outer shell." },
    { term: "Electronegativity", definition: "The ability of an atom to attract electrons in a bond." },
    { term: "Polar Covalent Bond", definition: "Covalent bond with unequal sharing of electrons." },
    { term: "Non-polar Covalent Bond", definition: "Covalent bond with equal sharing of electrons." },
    { term: "Intermolecular Force", definition: "Force between molecules." },
    { term: "Hydrogen Bond", definition: "A strong intermolecular force between H and O, N, or F." },
    { term: "Van der Waals Force", definition: "Weak intermolecular forces between molecules." },
    { term: "Ion", definition: "A charged atom or molecule." },
    { term: "Cation", definition: "A positively charged ion." },
    { term: "Anion", definition: "A negatively charged ion." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "Why do atoms form chemical bonds?",
      type: "multiple_choice",
      options: [
        "To achieve a stable electron configuration",
        "To increase their mass",
        "To become radioactive",
        "To change their state"
      ],
      answer: "To achieve a stable electron configuration",
      explanation: "Atoms bond to achieve a full outer shell (octet)."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the octet rule?",
      type: "multiple_choice",
      options: [
        "Atoms want 2 electrons in their outer shell",
        "Atoms want 8 electrons in their outer shell",
        "Atoms want 18 electrons in their outer shell",
        "Atoms want 32 electrons in their outer shell"
      ],
      answer: "Atoms want 8 electrons in their outer shell",
      explanation: "The octet rule states that atoms tend to have 8 electrons in their outer shell."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What type of bond involves the transfer of electrons?",
      type: "multiple_choice",
      options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
      answer: "Ionic",
      explanation: "Ionic bonds involve the transfer of electrons from metal to non-metal."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "What type of bond involves the sharing of electrons?",
      type: "multiple_choice",
      options: ["Ionic", "Covalent", "Metallic", "Van der Waals"],
      answer: "Covalent",
      explanation: "Covalent bonds involve the sharing of electron pairs."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the main difference between ionic and covalent bonds?",
      type: "multiple_choice",
      options: [
        "Ionic is between metals; covalent is between non-metals",
        "Ionic is between non-metals; covalent is between metals",
        "They are the same",
        "Ionic bonds are stronger"
      ],
      answer: "Ionic is between metals; covalent is between non-metals",
      explanation: "Ionic bonds form between metals and non-metals; covalent bonds form between non-metals."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which property is true for ionic compounds?",
      type: "multiple_choice",
      options: [
        "Low melting point",
        "Conduct electricity when solid",
        "High melting point",
        "Soft and malleable"
      ],
      answer: "High melting point",
      explanation: "Ionic compounds have high melting points due to strong electrostatic forces."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the 'sea of electrons' model?",
      type: "multiple_choice",
      options: [
        "Ionic bonding",
        "Covalent bonding",
        "Metallic bonding",
        "Hydrogen bonding"
      ],
      answer: "Metallic bonding",
      explanation: "The sea of electrons model describes metallic bonding with delocalized electrons."
    },
    {
      id: "prac_008",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which element has the highest electronegativity?",
      type: "multiple_choice",
      options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
      answer: "Fluorine",
      explanation: "Fluorine has the highest electronegativity (4.0 on the Pauling scale)."
    }
  ],

  assessment: {
    id: "assess_bonding",
    title: "Chemical Bonding Quiz",
    description: "Test your understanding of chemical bonding",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Why do atoms bond?",
        type: "short_answer",
        answer_key: "To achieve a stable electron configuration (octet)",
        explanation: "Atoms bond to achieve a full outer shell of electrons."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the octet rule?",
        type: "short_answer",
        answer_key: "Atoms tend to have 8 electrons in their outer shell",
        explanation: "The octet rule states that atoms are most stable with 8 electrons in their outer shell."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an ionic bond?",
        type: "short_answer",
        answer_key: "A bond formed by the transfer of electrons between metal and non-metal",
        explanation: "Ionic bonds involve the transfer of electrons from a metal to a non-metal."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "What is a covalent bond?",
        type: "short_answer",
        answer_key: "A bond formed by the sharing of electron pairs between non-metals",
        explanation: "Covalent bonds involve the sharing of electrons between non-metal atoms."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between ionic and covalent bonding?",
        type: "short_answer",
        answer_key: "Ionic: transfer of electrons; Covalent: sharing of electrons",
        explanation: "Ionic bonds transfer electrons; covalent bonds share electrons."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a property of ionic compounds?",
        type: "short_answer",
        answer_key: "High melting point (or conduct electricity when molten/dissolved)",
        explanation: "Ionic compounds have high melting points and conduct when molten or in solution."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is metallic bonding?",
        type: "short_answer",
        answer_key: "Bonding in metals with a sea of delocalized electrons",
        explanation: "Metallic bonding involves delocalized electrons holding positive metal ions together."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is electronegativity?",
        type: "short_answer",
        answer_key: "The ability of an atom to attract electrons in a chemical bond",
        explanation: "Electronegativity measures an atom's attraction for electrons in a bond."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the difference between polar and non-polar covalent bonds?",
        type: "short_answer",
        answer_key: "Polar: unequal sharing of electrons; Non-polar: equal sharing",
        explanation: "Polar bonds have unequal electron sharing due to electronegativity differences."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is hydrogen bonding?",
        type: "short_answer",
        answer_key: "A strong intermolecular force between H and O, N, or F",
        explanation: "Hydrogen bonding is a strong intermolecular force involving hydrogen and electronegative atoms."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand ionic, covalent, and metallic bonding",
        "Apply the octet rule",
        "Explain the properties of different bond types"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Why do atoms bond?" },
        { time: "5-10 min", activity: "Direct Instruction - Octet Rule" },
        { time: "10-15 min", activity: "Direct Instruction - Ionic Bonding" },
        { time: "15-20 min", activity: "Direct Instruction - Covalent Bonding" },
        { time: "20-25 min", activity: "Direct Instruction - Metallic Bonding" },
        { time: "25-30 min", activity: "Direct Instruction - Electronegativity" },
        { time: "30-35 min", activity: "Direct Instruction - Intermolecular Forces" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To achieve a stable electron configuration",
        prac_002: "Atoms want 8 electrons in their outer shell",
        prac_003: "Ionic",
        prac_004: "Covalent",
        prac_005: "Ionic is between metals; covalent is between non-metals",
        prac_006: "High melting point",
        prac_007: "Metallic bonding",
        prac_008: "Fluorine"
      },
      assessment: {
        ass_001: "To achieve a stable electron configuration (octet)",
        ass_002: "Atoms tend to have 8 electrons in their outer shell",
        ass_003: "A bond formed by the transfer of electrons between metal and non-metal",
        ass_004: "A bond formed by the sharing of electron pairs between non-metals",
        ass_005: "Ionic: transfer of electrons; Covalent: sharing of electrons",
        ass_006: "High melting point (or conduct electricity when molten/dissolved)",
        ass_007: "Bonding in metals with a sea of delocalized electrons",
        ass_008: "The ability of an atom to attract electrons in a chemical bond",
        ass_009: "Polar: unequal sharing of electrons; Non-polar: equal sharing",
        ass_010: "A strong intermolecular force between H and O, N, or F"
      }
    },
    extensionActivities: [
      "Draw Lewis dot structures for molecules",
      "Research the properties of different materials based on bonding",
      "Build models of ionic and covalent compounds",
      "Investigate hydrogen bonding in water"
    ],
    differentiation: {
      struggling: [
        "Focus on the three main bond types",
        "Use simple examples",
        "Practice with electron dot diagrams",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research advanced bonding theories",
        "Study molecular orbital theory",
        "Investigate bonding in transition metal complexes",
        "Explore bonding in nanomaterials"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Ionic Bonding",
      description: "Diagram showing ionic bond formation",
      url: "/diagrams/ionic-bonding.png",
      alt: "Ionic bonding diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Covalent Bonding",
      description: "Diagram showing covalent bond formation",
      url: "/diagrams/covalent-bonding.png",
      alt: "Covalent bonding diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Metallic Bonding",
      description: "Diagram showing metallic bonding structure",
      url: "/diagrams/metallic-bonding.png",
      alt: "Metallic bonding diagram"
    }
  ]
};