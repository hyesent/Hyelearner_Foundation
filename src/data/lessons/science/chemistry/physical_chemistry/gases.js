// Location: src/data/lessons/science/chemistry/physical_chemistry/gases.js

export default {
  id: "chem_lesson_gases",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Gas Laws",
  icon: "💨",
  grade_level: "SS2 - SS3",
  estimated_duration: "55 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of the mole concept",
    "Knowledge of temperature scales",
    "Basic algebra skills",
    "Understanding of pressure and volume"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_acids_and_bases",
      name: "Acids, Bases and Salts",
      file: "science/chemistry/physical_chemistry/acids_and_bases.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Define the kinetic theory of gases", indicator: "Student can explain the assumptions of the kinetic theory" },
    { id: "obj_002", level: "easy", description: "Explain the properties of gases", indicator: "Student can describe the characteristics of gases" },
    { id: "obj_003", level: "easy", description: "Define pressure, volume, and temperature in gases", indicator: "Student can define P, V, and T with their units" },
    { id: "obj_004", level: "medium", description: "State Boyle's Law and perform calculations", indicator: "Student can apply P₁V₁ = P₂V₂" },
    { id: "obj_005", level: "medium", description: "State Charles' Law and perform calculations", indicator: "Student can apply V₁/T₁ = V₂/T₂" },
    { id: "obj_006", level: "medium", description: "State the Pressure Law and perform calculations", indicator: "Student can apply P₁/T₁ = P₂/T₂" },
    { id: "obj_007", level: "medium", description: "State the Combined Gas Law and perform calculations", indicator: "Student can apply (P₁V₁)/T₁ = (P₂V₂)/T₂" },
    { id: "obj_008", level: "medium", description: "State Avogadro's Law", indicator: "Student can apply V ∝ n" },
    { id: "obj_009", level: "medium", description: "State the Ideal Gas Law and perform calculations", indicator: "Student can apply PV = nRT" },
    { id: "obj_010", level: "medium", description: "Explain the concept of molar volume of a gas", indicator: "Student can state that 1 mole of gas occupies 22.4 dm³ at STP" },
    { id: "obj_011", level: "hard", description: "Calculate the molar volume of a gas at STP", indicator: "Student can use molar volume in stoichiometric calculations" },
    { id: "obj_012", level: "hard", description: "Perform gas stoichiometry calculations", indicator: "Student can use gas volumes in reacting mass calculations" },
    { id: "obj_013", level: "hard", description: "Apply Dalton's Law of Partial Pressures", indicator: "Student can calculate partial pressures in gas mixtures" },
    { id: "obj_014", level: "hard", description: "Explain the concept of the gas constant (R)", indicator: "Student can use R in ideal gas calculations" },
    { id: "obj_015", level: "hard", description: "Analyze the relationship between gas laws", indicator: "Student can combine gas laws to solve complex problems" },
    { id: "obj_016", level: "hard", description: "Compare real gases with ideal gases", indicator: "Student can explain deviations from ideal gas behavior" },
    { id: "obj_017", level: "hard", description: "Calculate the density of gases", indicator: "Student can use density = PM/RT" },
    { id: "obj_018", level: "hard", description: "Solve complex gas law problems", indicator: "Student can solve multi-step gas problems" }
  ],

  video: {
    id: "vid_001",
    title: "Gas Laws",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the behavior of gases and the gas laws."
  },

  content: {
    introduction: `
      <h2>What are Gas Laws?</h2>
      <p><strong>Gas laws</strong> describe the behavior of gases in terms of pressure, volume, temperature, and the number of moles. They are essential for understanding chemical reactions involving gases and for industrial applications.</p>
      
      <div class="grid grid-cols-4 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📌 Pressure (P)</h3>
          <p>Force per unit area</p>
          <p>Units: atm, Pa, mmHg</p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">📌 Volume (V)</h3>
          <p>Space occupied</p>
          <p>Units: L, dm³, m³</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📌 Temperature (T)</h3>
          <p>Average kinetic energy</p>
          <p>Units: K (Kelvin)</p>
        </div>
        <div class="bg-purple-50 p-4 rounded text-center">
          <h3 class="text-purple-600">📌 Moles (n)</h3>
          <p>Amount of gas</p>
          <p>Units: mol</p>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Properties of Gases</text>
          
          <!-- Gas particles -->
          <text x="300" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50">Gases have particles that are:</text>
          
          <!-- Container -->
          <rect x="100" y="100" width="400" height="200" fill="none" stroke="#2c3e50" stroke-width="3" rx="5"/>
          <text x="110" y="95" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Container</text>
          
          <!-- Gas particles -->
          <circle cx="180" cy="150" r="10" fill="#3498db" opacity="0.8"/>
          <circle cx="250" cy="180" r="10" fill="#e74c3c" opacity="0.8"/>
          <circle cx="350" cy="140" r="10" fill="#2ecc71" opacity="0.8"/>
          <circle cx="420" cy="200" r="10" fill="#f39c12" opacity="0.8"/>
          <circle cx="300" cy="240" r="10" fill="#9b59b6" opacity="0.8"/>
          <circle cx="150" cy="230" r="10" fill="#1abc9c" opacity="0.8"/>
          <circle cx="380" cy="250" r="10" fill="#e67e22" opacity="0.8"/>
          <circle cx="200" cy="200" r="10" fill="#3498db" opacity="0.8"/>
          <circle cx="450" cy="160" r="10" fill="#e74c3c" opacity="0.8"/>
          <circle cx="280" cy="140" r="10" fill="#2ecc71" opacity="0.8"/>
          <circle cx="160" cy="180" r="10" fill="#f39c12" opacity="0.8"/>
          <circle cx="330" cy="200" r="10" fill="#9b59b6" opacity="0.8"/>
          
          <!-- Particle motion arrows -->
          <path d="M190 160 L210 155" stroke="#2c3e50" stroke-width="1.5" marker-end="url(#arrow)"/>
          <path d="M260 190 L280 185" stroke="#2c3e50" stroke-width="1.5" marker-end="url(#arrow)"/>
          <path d="M360 150 L380 145" stroke="#2c3e50" stroke-width="1.5" marker-end="url(#arrow)"/>
          <path d="M430 210 L450 205" stroke="#2c3e50" stroke-width="1.5" marker-end="url(#arrow)"/>
          <path d="M310 250 L330 245" stroke="#2c3e50" stroke-width="1.5" marker-end="url(#arrow)"/>
          
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#2c3e50"/>
            </marker>
          </defs>
          
          <!-- Labels -->
          <text x="300" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Gas particles move freely, collide with each other and the container walls</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Kinetic Theory of Gases",
        objective: "obj_001",
        text: `
          <h3>The Kinetic Theory</h3>
          <p>The <strong>kinetic theory of gases</strong> explains the behavior of gases based on the motion of their particles.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Assumptions:</h4>
              <ul>
                <li>• Gases consist of tiny particles</li>
                <li>• Particles are in constant random motion</li>
                <li>• Collisions are perfectly elastic</li>
                <li>• No intermolecular forces</li>
                <li>• Volume of particles is negligible</li>
                <li>• Average kinetic energy ∝ temperature</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties of Gases:</h4>
              <ul>
                <li>• Expand to fill container</li>
                <li>• Compressible</li>
                <li>• Low density</li>
                <li>• Random motion</li>
                <li>• Diffusion and effusion</li>
                <li>• Exert pressure</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Boyle's Law",
        objective: "obj_004",
        text: `
          <h3>Boyle's Law</h3>
          <p><strong>Boyle's Law</strong> states that at constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>P₁V₁ = P₂V₂</strong></p>
            <ul>
              <li>P = Pressure (atm, Pa, mmHg)</li>
              <li>V = Volume (L, dm³, m³)</li>
              <li>T = Constant</li>
              <li>n = Constant</li>
            </ul>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="400" height="300" fill="#f8f9fa" rx="10"/>
              <text x="200" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Boyle's Law</text>
              
              <!-- Cylinder 1 (High Volume, Low Pressure) -->
              <rect x="50" y="70" width="60" height="150" fill="none" stroke="#2c3e50" stroke-width="2"/>
              <rect x="50" y="70" width="60" height="150" fill="#e8f4f8" opacity="0.5"/>
              <text x="80" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Low P</text>
              <text x="80" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">High V</text>
              <!-- Piston -->
              <rect x="45" y="65" width="70" height="8" fill="#90a4ae" stroke="#2c3e50" stroke-width="1"/>
              
              <!-- Cylinder 2 (Medium Volume, Medium Pressure) -->
              <rect x="170" y="120" width="60" height="100" fill="none" stroke="#2c3e50" stroke-width="2"/>
              <rect x="170" y="120" width="60" height="100" fill="#e8f4f8" opacity="0.5"/>
              <text x="200" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Medium P</text>
              <text x="200" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Medium V</text>
              <!-- Piston -->
              <rect x="165" y="115" width="70" height="8" fill="#90a4ae" stroke="#2c3e50" stroke-width="1"/>
              
              <!-- Cylinder 3 (Low Volume, High Pressure) -->
              <rect x="290" y="170" width="60" height="50" fill="none" stroke="#2c3e50" stroke-width="2"/>
              <rect x="290" y="170" width="60" height="50" fill="#e8f4f8" opacity="0.5"/>
              <text x="320" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">High P</text>
              <text x="320" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Low V</text>
              <!-- Piston -->
              <rect x="285" y="165" width="70" height="8" fill="#90a4ae" stroke="#2c3e50" stroke-width="1"/>
              
              <!-- Arrows -->
              <text x="200" y="290" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">P ∝ 1/V (at constant T)</text>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A gas occupies 2.0 L at 1.0 atm. What volume will it occupy at 2.0 atm at constant temperature?</li>
              <li><strong>Solution:</strong></li>
              <li>P₁V₁ = P₂V₂</li>
              <li>1.0 × 2.0 = 2.0 × V₂</li>
              <li>V₂ = 1.0 L</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Charles' Law",
        objective: "obj_005",
        text: `
          <h3>Charles' Law</h3>
          <p><strong>Charles' Law</strong> states that at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>V₁/T₁ = V₂/T₂</strong></p>
            <ul>
              <li>V = Volume (L, dm³, m³)</li>
              <li>T = Temperature (K)</li>
              <li>P = Constant</li>
              <li>n = Constant</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A gas has a volume of 2.0 L at 300 K. What is the volume at 600 K at constant pressure?</li>
              <li><strong>Solution:</strong></li>
              <li>V₁/T₁ = V₂/T₂</li>
              <li>2.0/300 = V₂/600</li>
              <li>V₂ = 4.0 L</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Pressure Law (Gay-Lussac's Law)",
        objective: "obj_006",
        text: `
          <h3>The Pressure Law</h3>
          <p><strong>The Pressure Law</strong> states that at constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute temperature.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>P₁/T₁ = P₂/T₂</strong></p>
            <ul>
              <li>P = Pressure (atm, Pa, mmHg)</li>
              <li>T = Temperature (K)</li>
              <li>V = Constant</li>
              <li>n = Constant</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A gas has a pressure of 1.0 atm at 300 K. What is the pressure at 600 K at constant volume?</li>
              <li><strong>Solution:</strong></li>
              <li>P₁/T₁ = P₂/T₂</li>
              <li>1.0/300 = P₂/600</li>
              <li>P₂ = 2.0 atm</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Combined Gas Law",
        objective: "obj_007",
        text: `
          <h3>The Combined Gas Law</h3>
          <p>The <strong>Combined Gas Law</strong> combines Boyle's, Charles', and the Pressure Law into one equation.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>(P₁V₁)/T₁ = (P₂V₂)/T₂</strong></p>
            <ul>
              <li>P = Pressure</li>
              <li>V = Volume</li>
              <li>T = Temperature (K)</li>
              <li>n = Constant</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A gas has a volume of 2.0 L at 1.0 atm and 300 K. What is the volume at 2.0 atm and 600 K?</li>
              <li><strong>Solution:</strong></li>
              <li>(P₁V₁)/T₁ = (P₂V₂)/T₂</li>
              <li>(1.0 × 2.0)/300 = (2.0 × V₂)/600</li>
              <li>V₂ = 2.0 L</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Avogadro's Law",
        objective: "obj_008",
        text: `
          <h3>Avogadro's Law</h3>
          <p><strong>Avogadro's Law</strong> states that equal volumes of all gases at the same temperature and pressure contain the same number of molecules.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>V ∝ n</strong> (at constant T and P)</p>
            <ul>
              <li>V = Volume</li>
              <li>n = Number of moles</li>
              <li>T = Constant</li>
              <li>P = Constant</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Implications:</strong>
            <ul>
              <li>• 1 mole of any gas occupies 22.4 dm³ at STP</li>
              <li>• Equal volumes of gases have equal moles</li>
              <li>• Gas volume is proportional to moles</li>
              <li>• Used in stoichiometric calculations</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Ideal Gas Law",
        objective: "obj_009",
        text: `
          <h3>The Ideal Gas Law</h3>
          <p>The <strong>Ideal Gas Law</strong> combines all the gas laws into one comprehensive equation.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>PV = nRT</strong></p>
            <ul>
              <li>P = Pressure (atm)</li>
              <li>V = Volume (L)</li>
              <li>n = Number of moles (mol)</li>
              <li>R = Gas constant (0.0821 L·atm/mol·K)</li>
              <li>T = Temperature (K)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> What volume is occupied by 2.0 mol of gas at 1.0 atm and 300 K?</li>
              <li><strong>Solution:</strong></li>
              <li>PV = nRT</li>
              <li>1.0 × V = 2.0 × 0.0821 × 300</li>
              <li>V = 49.26 L</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Molar Volume and Gas Stoichiometry",
        objective: "obj_011",
        text: `
          <h3>Molar Volume</h3>
          <p><strong>Molar volume</strong> is the volume occupied by one mole of gas.</p>
          
          <div class="example-box">
            <strong>📌 Standard Conditions:</strong>
            <ul>
              <li><strong>STP:</strong> 0°C (273 K), 1 atm</li>
              <li><strong>Molar volume at STP:</strong> 22.4 L/mol</li>
              <li><strong>RTP:</strong> 25°C (298 K), 1 atm</li>
              <li><strong>Molar volume at RTP:</strong> 24.0 L/mol</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Gas Stoichiometry:</strong>
            <ul>
              <li><strong>Problem:</strong> What volume of CO₂ is produced at STP when 2.0 mol of CH₄ is burned?</li>
              <li><strong>Equation:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O</li>
              <li><strong>Solution:</strong></li>
              <li>1 mol CH₄ → 1 mol CO₂</li>
              <li>2.0 mol CH₄ → 2.0 mol CO₂</li>
              <li>Volume = 2.0 × 22.4 = 44.8 L</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>💨 Gas Laws</h4>
          <ul>
            <li>• Boyle's Law: P₁V₁ = P₂V₂</li>
            <li>• Charles' Law: V₁/T₁ = V₂/T₂</li>
            <li>• Pressure Law: P₁/T₁ = P₂/T₂</li>
            <li>• Combined: (P₁V₁)/T₁ = (P₂V₂)/T₂</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Advanced Concepts</h4>
          <ul>
            <li>• Avogadro's Law: V ∝ n</li>
            <li>• Ideal Gas Law: PV = nRT</li>
            <li>• Molar volume: 22.4 L/mol at STP</li>
            <li>• Gas stoichiometry</li>
          </ul>
        </div>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "All gases behave ideally",
        correction: "Real gases deviate from ideal behavior at high pressure and low temperature",
        explanation: "Real gases have intermolecular forces and particle volume."
      },
      {
        id: "mis_002",
        misconception: "Temperature must be in Celsius",
        correction: "All gas law calculations require temperature in Kelvin",
        explanation: "Kelvin is the absolute temperature scale; K = °C + 273."
      },
      {
        id: "mis_003",
        misconception: "Gas volume depends on particle size",
        correction: "Gas volume depends on temperature and pressure, not particle size",
        explanation: "Gas particles are far apart, so their size is negligible."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Meteorology",
        description: "Gas laws explain weather patterns.",
        example: "Air pressure and temperature changes in the atmosphere."
      },
      {
        id: "app_002",
        title: "Aviation",
        description: "Gas laws explain airplane cabin pressure.",
        example: "Maintaining pressure at high altitudes."
      },
      {
        id: "app_003",
        title: "Medicine",
        description: "Gas laws are used in respiratory medicine.",
        example: "Oxygen tanks and anesthesia delivery."
      },
      {
        id: "app_004",
        title: "Industry",
        description: "Gas laws are essential in chemical processing.",
        example: "Production of ammonia, hydrogen, and other gases."
      }
    ]
  },

  keyTerms: [
    { term: "Boyle's Law", definition: "P₁V₁ = P₂V₂ (at constant T)." },
    { term: "Charles' Law", definition: "V₁/T₁ = V₂/T₂ (at constant P)." },
    { term: "Pressure Law", definition: "P₁/T₁ = P₂/T₂ (at constant V)." },
    { term: "Combined Gas Law", definition: "(P₁V₁)/T₁ = (P₂V₂)/T₂." },
    { term: "Avogadro's Law", definition: "V ∝ n (at constant T and P)." },
    { term: "Ideal Gas Law", definition: "PV = nRT." },
    { term: "Molar Volume", definition: "The volume occupied by one mole of gas." },
    { term: "STP", definition: "Standard Temperature and Pressure (273 K, 1 atm)." },
    { term: "RTP", definition: "Room Temperature and Pressure (298 K, 1 atm)." },
    { term: "Gas Constant", definition: "R = 0.0821 L·atm/mol·K." },
    { term: "Kinetic Theory", definition: "Model explaining gas behavior based on particle motion." },
    { term: "Partial Pressure", definition: "Pressure of an individual gas in a mixture." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the kinetic theory of gases?",
      type: "multiple_choice",
      options: [
        "A model describing gas behavior based on particle motion",
        "A model describing liquid behavior",
        "A model describing solid behavior",
        "A model describing plasma behavior"
      ],
      answer: "A model describing gas behavior based on particle motion",
      explanation: "The kinetic theory explains gas behavior based on the motion of particles."
    },
    {
      id: "prac_002",
      objective: "obj_004",
      difficulty: "easy",
      question: "What does Boyle's Law state?",
      type: "multiple_choice",
      options: [
        "V₁/T₁ = V₂/T₂",
        "P₁V₁ = P₂V₂",
        "P₁/T₁ = P₂/T₂",
        "(P₁V₁)/T₁ = (P₂V₂)/T₂"
      ],
      answer: "P₁V₁ = P₂V₂",
      explanation: "Boyle's Law states that P₁V₁ = P₂V₂ at constant temperature."
    },
    {
      id: "prac_003",
      objective: "obj_005",
      difficulty: "easy",
      question: "What does Charles' Law state?",
      type: "multiple_choice",
      options: [
        "P₁V₁ = P₂V₂",
        "V₁/T₁ = V₂/T₂",
        "P₁/T₁ = P₂/T₂",
        "(P₁V₁)/T₁ = (P₂V₂)/T₂"
      ],
      answer: "V₁/T₁ = V₂/T₂",
      explanation: "Charles' Law states that V₁/T₁ = V₂/T₂ at constant pressure."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "A gas occupies 4.0 L at 2.0 atm. What volume will it occupy at 4.0 atm at constant temperature?",
      type: "multiple_choice",
      options: ["1.0 L", "2.0 L", "4.0 L", "8.0 L"],
      answer: "2.0 L",
      explanation: "P₁V₁ = P₂V₂. 2.0 × 4.0 = 4.0 × V₂. V₂ = 2.0 L."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "A gas has a volume of 3.0 L at 300 K. What is the volume at 600 K at constant pressure?",
      type: "multiple_choice",
      options: ["1.5 L", "3.0 L", "6.0 L", "9.0 L"],
      answer: "6.0 L",
      explanation: "V₁/T₁ = V₂/T₂. 3.0/300 = V₂/600. V₂ = 6.0 L."
    },
    {
      id: "prac_006",
      objective: "obj_009",
      difficulty: "hard",
      question: "What volume is occupied by 1.0 mol of gas at 1.0 atm and 300 K? (R = 0.0821 L·atm/mol·K)",
      type: "multiple_choice",
      options: ["22.4 L", "24.6 L", "30.0 L", "40.0 L"],
      answer: "24.6 L",
      explanation: "V = nRT/P = (1.0 × 0.0821 × 300)/1.0 = 24.6 L."
    },
    {
      id: "prac_007",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the molar volume of a gas at STP?",
      type: "multiple_choice",
      options: ["22.4 L", "24.0 L", "30.0 L", "40.0 L"],
      answer: "22.4 L",
      explanation: "At STP (273 K, 1 atm), 1 mole of gas occupies 22.4 L."
    },
    {
      id: "prac_008",
      objective: "obj_012",
      difficulty: "hard",
      question: "What volume of CO₂ is produced at STP when 2.0 mol of CH₄ is burned?",
      type: "multiple_choice",
      options: ["22.4 L", "44.8 L", "67.2 L", "89.6 L"],
      answer: "44.8 L",
      explanation: "1 mol CH₄ → 1 mol CO₂. 2.0 mol CH₄ → 2.0 mol CO₂. Volume = 2.0 × 22.4 = 44.8 L."
    }
  ],

  assessment: {
    id: "assess_gases",
    title: "Gas Laws Quiz",
    description: "Test your understanding of gas laws",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the kinetic theory of gases?",
        type: "short_answer",
        answer_key: "A model explaining gas behavior based on particle motion",
        explanation: "The kinetic theory describes gases in terms of particle motion."
      },
      {
        id: "ass_002",
        objective: "obj_004",
        difficulty: "easy",
        question: "State Boyle's Law.",
        type: "short_answer",
        answer_key: "P₁V₁ = P₂V₂ (at constant T)",
        explanation: "Boyle's Law states that pressure and volume are inversely proportional."
      },
      {
        id: "ass_003",
        objective: "obj_005",
        difficulty: "easy",
        question: "State Charles' Law.",
        type: "short_answer",
        answer_key: "V₁/T₁ = V₂/T₂ (at constant P)",
        explanation: "Charles' Law states that volume and temperature are directly proportional."
      },
      {
        id: "ass_004",
        objective: "obj_006",
        difficulty: "easy",
        question: "State the Pressure Law.",
        type: "short_answer",
        answer_key: "P₁/T₁ = P₂/T₂ (at constant V)",
        explanation: "The Pressure Law states that pressure and temperature are directly proportional."
      },
      {
        id: "ass_005",
        objective: "obj_007",
        difficulty: "medium",
        question: "Write the Combined Gas Law.",
        type: "short_answer",
        answer_key: "(P₁V₁)/T₁ = (P₂V₂)/T₂",
        explanation: "The Combined Gas Law combines Boyle's, Charles', and the Pressure Law."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "A gas occupies 5.0 L at 3.0 atm. What volume will it occupy at 6.0 atm at constant temperature?",
        type: "short_answer",
        answer_key: "2.5 L",
        explanation: "P₁V₁ = P₂V₂. 3.0 × 5.0 = 6.0 × V₂. V₂ = 2.5 L."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "A gas has a volume of 4.0 L at 200 K. What is the volume at 400 K at constant pressure?",
        type: "short_answer",
        answer_key: "8.0 L",
        explanation: "V₁/T₁ = V₂/T₂. 4.0/200 = V₂/400. V₂ = 8.0 L."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the Ideal Gas Law?",
        type: "short_answer",
        answer_key: "PV = nRT",
        explanation: "The Ideal Gas Law combines all gas laws into PV = nRT."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What volume is occupied by 0.5 mol of gas at 2.0 atm and 300 K? (R = 0.0821 L·atm/mol·K)",
        type: "short_answer",
        answer_key: "6.16 L",
        explanation: "V = nRT/P = (0.5 × 0.0821 × 300)/2.0 = 6.16 L."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the molar volume of a gas at STP?",
        type: "short_answer",
        answer_key: "22.4 L/mol",
        explanation: "At STP, 1 mole of gas occupies 22.4 L."
      },
      {
        id: "ass_011",
        objective: "obj_012",
        difficulty: "hard",
        question: "What volume of O₂ is needed at STP to react with 2.0 mol of H₂? (2H₂ + O₂ → 2H₂O)",
        type: "short_answer",
        answer_key: "22.4 L",
        explanation: "2 mol H₂ reacts with 1 mol O₂. 1 mol O₂ = 22.4 L."
      },
      {
        id: "ass_012",
        objective: "obj_016",
        difficulty: "hard",
        question: "Why do real gases deviate from ideal behavior at high pressure?",
        type: "short_answer",
        answer_key: "Intermolecular forces become significant and particle volume is not negligible",
        explanation: "At high pressure, gas particles are closer together, making the ideal gas assumptions invalid."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand the kinetic theory of gases",
        "Apply Boyle's, Charles', and the Pressure Laws",
        "Use the Combined and Ideal Gas Laws",
        "Perform gas stoichiometry calculations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Properties of gases" },
        { time: "5-10 min", activity: "Direct Instruction - Kinetic Theory" },
        { time: "10-15 min", activity: "Direct Instruction - Boyle's Law" },
        { time: "15-20 min", activity: "Direct Instruction - Charles' Law" },
        { time: "20-25 min", activity: "Direct Instruction - Pressure Law" },
        { time: "25-30 min", activity: "Direct Instruction - Combined and Ideal Gas Laws" },
        { time: "30-35 min", activity: "Direct Instruction - Molar Volume and Stoichiometry" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A model describing gas behavior based on particle motion",
        prac_002: "P₁V₁ = P₂V₂",
        prac_003: "V₁/T₁ = V₂/T₂",
        prac_004: "2.0 L",
        prac_005: "6.0 L",
        prac_006: "24.6 L",
        prac_007: "22.4 L",
        prac_008: "44.8 L"
      },
      assessment: {
        ass_001: "A model explaining gas behavior based on particle motion",
        ass_002: "P₁V₁ = P₂V₂ (at constant T)",
        ass_003: "V₁/T₁ = V₂/T₂ (at constant P)",
        ass_004: "P₁/T₁ = P₂/T₂ (at constant V)",
        ass_005: "(P₁V₁)/T₁ = (P₂V₂)/T₂",
        ass_006: "2.5 L",
        ass_007: "8.0 L",
        ass_008: "PV = nRT",
        ass_009: "6.16 L",
        ass_010: "22.4 L/mol",
        ass_011: "22.4 L",
        ass_012: "Intermolecular forces become significant and particle volume is not negligible"
      }
    },
    extensionActivities: [
      "Research real gas behavior",
      "Calculate gas density using the ideal gas law",
      "Perform a virtual gas law experiment",
      "Investigate the history of the gas laws"
    ],
    differentiation: {
      struggling: [
        "Focus on one gas law at a time",
        "Use simple examples",
        "Practice with step-by-step guides",
        "Provide a formula sheet"
      ],
      advanced: [
        "Research real gas deviations",
        "Explore gas mixtures and partial pressures",
        "Study the kinetic theory in depth",
        "Analyze gas behavior in different applications"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Kinetic Theory",
      description: "Diagram showing the kinetic theory of gases",
      url: "/diagrams/kinetic-theory.png",
      alt: "Kinetic theory diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Gas Laws Summary",
      description: "Chart summarizing all gas laws",
      url: "/diagrams/gas-laws-summary.png",
      alt: "Gas laws summary chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Molar Volume",
      description: "Diagram showing molar volume at STP",
      url: "/diagrams/molar-volume.png",
      alt: "Molar volume diagram"
    }
  ]
};