// Location: src/data/lessons/science/chemistry/physical_chemistry/electrolysis.js

export default {
  id: "chem_lesson_electrolysis",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Electrolysis",
  icon: "⚡",
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
    "Understanding of ionic compounds",
    "Knowledge of redox reactions",
    "Understanding of electrical conductivity",
    "Knowledge of ions and electrolytes"
  ],

  nextLessons: [
    {
      name: "Redox Reactions",
      file: "science/chemistry/physical_chemistry/redox.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define electrolysis and explain its principles",
      indicator: "Student can explain what electrolysis is and how it works"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the components of an electrolytic cell",
      indicator: "Student can label the parts of an electrolytic cell"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between electrolytic and galvanic cells",
      indicator: "Student can compare and contrast electrolytic and galvanic cells"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Define electrolyte and explain its role",
      indicator: "Student can define electrolyte and give examples"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the process of electrolysis of molten ionic compounds",
      indicator: "Student can describe electrolysis of molten NaCl"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the electrolysis of aqueous solutions",
      indicator: "Student can describe electrolysis of water"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the electrolysis of copper sulfate solution",
      indicator: "Student can describe the electrolysis of CuSO₄"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain electroplating and its applications",
      indicator: "Student can describe the process of electroplating"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Apply Faraday's First Law of Electrolysis",
      indicator: "Student can use m = ZIt in calculations"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Apply Faraday's Second Law of Electrolysis",
      indicator: "Student can use equivalent masses in calculations"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the concept of electrochemical series",
      indicator: "Student can use the electrochemical series to predict reactions"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Perform calculations using Faraday's laws",
      indicator: "Student can solve complex electrolysis calculations"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the refining of metals by electrolysis",
      indicator: "Student can describe electrolytic refining of copper"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the extraction of metals by electrolysis",
      indicator: "Student can describe electrolytic extraction of aluminium"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Calculate the amount of substance deposited during electrolysis",
      indicator: "Student can calculate mass, moles, and charge in electrolysis"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of overvoltage",
      indicator: "Student can explain overvoltage and its significance"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the products of electrolysis using the electrochemical series",
      indicator: "Student can predict products using electrode potentials"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the chlor-alkali process",
      indicator: "Student can describe the industrial electrolysis of brine"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Calculate Faraday's constant from experimental data",
      indicator: "Student can determine Faraday's constant from electrolysis data"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Analyze industrial applications of electrolysis",
      indicator: "Student can explain industrial uses of electrolysis"
    }
  ],

  video: {
    id: "vid_001",
    title: "Electrolysis",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about electrolysis, electrolytic cells, and industrial applications."
  },

  content: {
    introduction: `
      <h2>What is Electrolysis?</h2>
      <p><strong>Electrolysis</strong> is the process of using electrical energy to drive a non-spontaneous chemical reaction. It involves the decomposition of an electrolyte by passing an electric current through it.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⚡ Electrolyte</h3>
          <ul>
            <li>• Contains free ions</li>
            <li>• Conducts electricity</li>
            <li>• Examples: Molten salts, aqueous solutions</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🔋 Electrodes</h3>
          <ul>
            <li>• Anode (+): Oxidation</li>
            <li>• Cathode (-): Reduction</li>
            <li>• Inert or active</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Products</h3>
          <ul>
            <li>• At cathode: Metal or H₂</li>
            <li>• At anode: Non-metal or O₂</li>
            <li>• Depends on electrolyte</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="500" height="400" fill="#f0f8ff" rx="10"/>
          <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Electrolytic Cell</text>
          
          <!-- Battery -->
          <rect x="215" y="50" width="70" height="30" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="3"/>
          <text x="250" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#2e7d32">Battery</text>
          <line x1="250" y1="80" x2="250" y2="95" stroke="#2c3e50" stroke-width="2"/>
          
          <!-- Anode (+) -->
          <rect x="130" y="95" width="15" height="200" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
          <text x="137" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#e74c3c">Anode (+)</text>
          
          <!-- Cathode (-) -->
          <rect x="355" y="95" width="15" height="200" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
          <text x="362" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#3498db">Cathode (-)</text>
          
          <!-- Electrolyte -->
          <rect x="130" y="215" width="240" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
          <text x="250" y="245" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1565c0">Electrolyte</text>
          
          <!-- Ions -->
          <text x="200" y="240" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">+</text>
          <text x="230" y="240" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">+</text>
          <text x="260" y="240" font-family="Arial, sans-serif" font-size="10" fill="#3498db">−</text>
          <text x="290" y="240" font-family="Arial, sans-serif" font-size="10" fill="#3498db">−</text>
          
          <!-- Electron flow -->
          <path d="M145 95 L145 215" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4,4"/>
          <text x="125" y="155" text-anchor="end" font-family="Arial, sans-serif" font-size="9" fill="#e74c3c">e⁻ flow</text>
          <path d="M370 95 L370 215" stroke="#3498db" stroke-width="1.5" stroke-dasharray="4,4"/>
          <text x="390" y="155" text-anchor="start" font-family="Arial, sans-serif" font-size="9" fill="#3498db">e⁻ flow</text>
          
          <!-- Circuit lines -->
          <line x1="137" y1="95" x2="215" y2="95" stroke="#2c3e50" stroke-width="2"/>
          <line x1="285" y1="95" x2="363" y2="95" stroke="#2c3e50" stroke-width="2"/>
          
          <!-- Labels -->
          <text x="250" y="365" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Electrolysis: Electrical energy → Chemical energy</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Electrolytic Cells",
        objective: "obj_002",
        text: `
          <h3>Electrolytic Cells</h3>
          <p>An <strong>electrolytic cell</strong> uses electrical energy to drive a non-spontaneous chemical reaction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components</h4>
              <ul>
                <li><strong>Electrolyte:</strong> Contains free ions</li>
                <li><strong>Anode (+):</strong> Oxidation occurs</li>
                <li><strong>Cathode (-):</strong> Reduction occurs</li>
                <li><strong>Power source:</strong> Provides electrical energy</li>
                <li><strong>Salt bridge:</strong> Completes the circuit</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Electrolytic vs Galvanic</h4>
              <ul>
                <li><strong>Electrolytic:</strong></li>
                <li>• Needs external power</li>
                <li>• Non-spontaneous</li>
                <li>• Converts electrical → chemical</li>
                <li><strong>Galvanic:</strong></li>
                <li>• Produces electrical energy</li>
                <li>• Spontaneous</li>
                <li>• Converts chemical → electrical</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Electrolysis of Molten Compounds",
        objective: "obj_005",
        text: `
          <h3>Electrolysis of Molten Ionic Compounds</h3>
          <p>When ionic compounds are melted, the ions become free to move and conduct electricity.</p>
          
          <div class="example-box">
            <strong>📌 Example - Molten NaCl:</strong>
            <ul>
              <li>• NaCl(l) → Na⁺ + Cl⁻</li>
              <li>• <strong>Cathode (-):</strong> Na⁺ + e⁻ → Na (liquid)</li>
              <li>• <strong>Anode (+):</strong> 2Cl⁻ → Cl₂ + 2e⁻</li>
              <li>• Overall: 2NaCl(l) → 2Na(l) + Cl₂(g)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example - Molten MgCl₂:</strong>
            <ul>
              <li>• MgCl₂(l) → Mg²⁺ + 2Cl⁻</li>
              <li>• <strong>Cathode (-):</strong> Mg²⁺ + 2e⁻ → Mg(l)</li>
              <li>• <strong>Anode (+):</strong> 2Cl⁻ → Cl₂ + 2e⁻</li>
              <li>• Overall: MgCl₂(l) → Mg(l) + Cl₂(g)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Electrolysis of Aqueous Solutions",
        objective: "obj_006",
        text: `
          <h3>Electrolysis of Aqueous Solutions</h3>
          <p>In aqueous solutions, water also contributes ions (H⁺ and OH⁻).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Electrolysis of Water</h4>
              <ul>
                <li>• Water is a weak electrolyte</li>
                <li>• H₂O ⇌ H⁺ + OH⁻</li>
                <li>• <strong>Cathode (-):</strong> 2H⁺ + 2e⁻ → H₂(g)</li>
                <li>• <strong>Anode (+):</strong> 4OH⁻ → O₂ + 2H₂O + 4e⁻</li>
                <li>• Overall: 2H₂O → 2H₂(g) + O₂(g)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Electrolysis of Brine</h4>
              <ul>
                <li>• NaCl(aq) → Na⁺ + Cl⁻</li>
                <li>• <strong>Cathode (-):</strong> 2H₂O + 2e⁻ → H₂ + 2OH⁻</li>
                <li>• <strong>Anode (+):</strong> 2Cl⁻ → Cl₂ + 2e⁻</li>
                <li>• Overall: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂</li>
                <li>• Products: NaOH, H₂, Cl₂</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Electrolysis of Copper Sulfate",
        objective: "obj_007",
        text: `
          <h3>Electrolysis of CuSO₄ Solution</h3>
          <p>The products depend on the electrodes used.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Inert Electrodes (Graphite)</h4>
              <ul>
                <li>• CuSO₄ → Cu²⁺ + SO₄²⁻</li>
                <li>• <strong>Cathode (-):</strong> Cu²⁺ + 2e⁻ → Cu(s)</li>
                <li>• <strong>Anode (+):</strong> 4OH⁻ → O₂ + 2H₂O + 4e⁻</li>
                <li>• Overall: 2CuSO₄ + 2H₂O → 2Cu + O₂ + 2H₂SO₄</li>
                <li>• Copper deposits on cathode</li>
                <li>• Oxygen gas at anode</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Copper Electrodes</h4>
              <ul>
                <li>• <strong>Cathode (-):</strong> Cu²⁺ + 2e⁻ → Cu(s)</li>
                <li>• <strong>Anode (+):</strong> Cu(s) → Cu²⁺ + 2e⁻</li>
                <li>• Overall: Cu(anode) → Cu(cathode)</li>
                <li>• Copper transfers from anode to cathode</li>
                <li>• Used in copper purification</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Observations:</strong>
            <ul>
              <li>• Blue colour of CuSO₄ fades</li>
              <li>• Cathode gains mass (copper deposited)</li>
              <li>• Anode loses mass (copper dissolves)</li>
              <li>• Oxygen gas at anode (with inert electrodes)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Electroplating",
        objective: "obj_008",
        text: `
          <h3>Electroplating</h3>
          <p><strong>Electroplating</strong> is the process of coating one metal with another using electrolysis.</p>
          
          <div class="example-box">
            <strong>📌 Silver Plating:</strong>
            <ul>
              <li>• <strong>Anode:</strong> Silver metal</li>
              <li>• <strong>Cathode:</strong> Object to be plated</li>
              <li>• <strong>Electrolyte:</strong> AgNO₃(aq)</li>
              <li>• <strong>Reaction:</strong> Ag⁺ + e⁻ → Ag(s)</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Advantages</h4>
              <ul>
                <li>• Corrosion protection</li>
                <li>• Improved appearance</li>
                <li>• Increased durability</li>
                <li>• Reduced friction</li>
                <li>• Improved conductivity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Chrome plating:</strong> Car parts</li>
                <li>• <strong>Gold plating:</strong> Jewellery</li>
                <li>• <strong>Silver plating:</strong> Cutlery</li>
                <li>• <strong>Zinc plating:</strong> Galvanized iron</li>
                <li>• <strong>Nickel plating:</strong> Electronics</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Faraday's Laws of Electrolysis",
        objective: "obj_009",
        text: `
          <h3>Faraday's Laws</h3>
          <p>Faraday's laws relate the amount of substance produced at electrodes to the quantity of electricity passed.</p>
          
          <div class="formula-box">
            <h4>📝 First Law:</h4>
            <p><strong>m = ZIt</strong></p>
            <ul>
              <li>m = mass deposited (g)</li>
              <li>Z = electrochemical equivalent (g/C)</li>
              <li>I = current (A)</li>
              <li>t = time (s)</li>
            </ul>
            <h4>📝 Second Law:</h4>
            <p><strong>m ∝ E</strong> (equivalent mass)</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A current of 2A passes through CuSO₄ solution for 30 minutes. Calculate the mass of copper deposited. (Z = 3.29 × 10⁻⁴ g/C)</li>
              <li><strong>Solution:</strong></li>
              <li>t = 30 × 60 = 1800 s</li>
              <li>m = ZIt = 3.29 × 10⁻⁴ × 2 × 1800</li>
              <li>m = <strong>1.18 g</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Industrial Applications",
        objective: "obj_013",
        text: `
          <h3>Industrial Applications of Electrolysis</h3>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Extraction of Aluminium</h4>
              <ul>
                <li>• Al₂O₃ dissolved in molten cryolite</li>
                <li>• <strong>Cathode:</strong> Al³⁺ + 3e⁻ → Al(l)</li>
                <li>• <strong>Anode:</strong> 2O²⁻ → O₂ + 4e⁻</li>
                <li>• Carbon anodes are consumed</li>
                <li>• Overall: 2Al₂O₃ → 4Al + 3O₂</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Refining of Copper</h4>
              <ul>
                <li>• Impure copper as anode</li>
                <li>• Pure copper as cathode</li>
                <li>• CuSO₄ as electrolyte</li>
                <li>• Cu dissolves at anode</li>
                <li>• Cu deposits at cathode</li>
                <li>• Impurities fall to bottom</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Chlor-Alkali Process</h4>
              <ul>
                <li>• Electrolysis of brine (NaCl)</li>
                <li>• Products: NaOH, Cl₂, H₂</li>
                <li>• Uses membrane cell</li>
                <li>• Important industrial process</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Other Applications</h4>
              <ul>
                <li>• Electroplating</li>
                <li>• Anodizing aluminium</li>
                <li>• Production of fluorine</li>
                <li>• Water purification</li>
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
          <h4>⚡ Electrolysis</h4>
          <ul>
            <li>• Uses electrical energy to drive reactions</li>
            <li>• Anode: oxidation (+)</li>
            <li>• Cathode: reduction (-)</li>
            <li>• Electrolyte contains free ions</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Applications</h4>
          <ul>
            <li>• Extraction of aluminium</li>
            <li>• Refining of copper</li>
            <li>• Electroplating</li>
            <li>• Chlor-alkali process</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Faraday's Laws: m = ZIt, and mass is proportional to equivalent mass.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Anions go to the cathode",
        correction: "Cations go to the cathode; anions go to the anode",
        explanation: "Cations (positive) go to cathode (-); anions (negative) go to anode (+)."
      },
      {
        id: "mis_002",
        misconception: "Electrolysis can occur in any solution",
        correction: "The solution must contain free ions (electrolyte)",
        explanation: "Distilled water does not conduct electricity."
      },
      {
        id: "mis_003",
        misconception: "The anode is always negative",
        correction: "In electrolytic cells, the anode is positive",
        explanation: "In electrolytic cells, the anode is connected to the positive terminal."
      },
      {
        id: "mis_004",
        misconception: "Electrolysis produces the same products every time",
        correction: "Products depend on the electrolyte and electrodes",
        explanation: "Different electrolytes and electrodes give different products."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Metal Extraction",
        description: "Electrolysis is used to extract reactive metals.",
        example: "Aluminium extraction by electrolysis."
      },
      {
        id: "app_002",
        title: "Metal Refining",
        description: "Electrolysis purifies metals.",
        example: "Copper refining."
      },
      {
        id: "app_003",
        title: "Electroplating",
        description: "Electroplating protects and decorates objects.",
        example: "Silver plating, chrome plating."
      },
      {
        id: "app_004",
        title: "Industrial Chemicals",
        description: "Electrolysis produces important chemicals.",
        example: "Chlorine, sodium hydroxide, hydrogen."
      }
    ]
  },

  keyTerms: [
    { term: "Electrolysis", definition: "The decomposition of an electrolyte using electrical energy." },
    { term: "Electrolyte", definition: "A substance that conducts electricity when molten or dissolved." },
    { term: "Anode", definition: "The positive electrode where oxidation occurs." },
    { term: "Cathode", definition: "The negative electrode where reduction occurs." },
    { term: "Electrolytic Cell", definition: "A cell that uses electrical energy to drive a chemical reaction." },
    { term: "Electroplating", definition: "Coating a metal with another using electrolysis." },
    { term: "Faraday's First Law", definition: "m = ZIt (mass deposited is proportional to charge)." },
    { term: "Faraday's Second Law", definition: "Mass deposited is proportional to equivalent mass." },
    { term: "Electrochemical Equivalent", definition: "The mass deposited by 1 coulomb of charge." },
    { term: "Ion", definition: "A charged atom or molecule." },
    { term: "Cation", definition: "A positively charged ion." },
    { term: "Anion", definition: "A negatively charged ion." },
    { term: "Overvoltage", definition: "Extra voltage needed for electrolysis." },
    { term: "Chlor-Alkali Process", definition: "Industrial electrolysis of brine." },
    { term: "Electromotive Series", definition: "A list of elements in order of reducing power." },
    { term: "Cryolite", definition: "Used to lower melting point of alumina." },
    { term: "Anodizing", definition: "Forming an oxide layer on aluminium." },
    { term: "Galvanizing", definition: "Coating iron with zinc." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is electrolysis?",
      type: "multiple_choice",
      options: [
        "The production of electricity from chemical reactions",
        "The decomposition of a substance using electrical energy",
        "The combination of elements using electrical energy",
        "The study of electrical circuits"
      ],
      answer: "The decomposition of a substance using electrical energy",
      explanation: "Electrolysis is the decomposition of an electrolyte using electrical energy."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "In an electrolytic cell, which electrode is positive?",
      type: "multiple_choice",
      options: ["Anode", "Cathode", "Both", "Neither"],
      answer: "Anode",
      explanation: "In electrolytic cells, the anode is the positive electrode."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the difference between electrolytic and galvanic cells?",
      type: "multiple_choice",
      options: [
        "Electrolytic cells produce electricity",
        "Galvanic cells produce electricity",
        "They are the same",
        "Electrolytic cells use chemical energy"
      ],
      answer: "Galvanic cells produce electricity",
      explanation: "Galvanic cells produce electrical energy; electrolytic cells use electrical energy."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is produced at the cathode during electrolysis of molten NaCl?",
      type: "multiple_choice",
      options: ["Na", "Cl₂", "NaOH", "HCl"],
      answer: "Na",
      explanation: "Na⁺ + e⁻ → Na(s) at the cathode."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is produced at the anode during electrolysis of molten NaCl?",
      type: "multiple_choice",
      options: ["Na", "Cl₂", "NaOH", "HCl"],
      answer: "Cl₂",
      explanation: "2Cl⁻ → Cl₂ + 2e⁻ at the anode."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is produced at the cathode during electrolysis of water?",
      type: "multiple_choice",
      options: ["H₂", "O₂", "H₂O", "H⁺"],
      answer: "H₂",
      explanation: "2H⁺ + 2e⁻ → H₂(g) at the cathode."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is produced at the anode during electrolysis of water?",
      type: "multiple_choice",
      options: ["H₂", "O₂", "H₂O", "OH⁻"],
      answer: "O₂",
      explanation: "4OH⁻ → O₂ + 2H₂O + 4e⁻ at the anode."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "Calculate the mass of copper deposited when a current of 3A flows for 20 minutes. (Z = 3.29 × 10⁻⁴ g/C)",
      type: "multiple_choice",
      options: ["1.18 g", "1.5 g", "2.0 g", "2.5 g"],
      answer: "1.18 g",
      explanation: "t = 20 × 60 = 1200 s. m = ZIt = 3.29 × 10⁻⁴ × 3 × 1200 = 1.18 g."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_012",
      difficulty: "hard",
      question: "Calculate the mass of copper deposited when 2A flows through CuSO₄ for 1 hour. (Z = 3.29 × 10⁻⁴ g/C)",
      type: "multiple_choice",
      options: ["1.18 g", "2.37 g", "3.55 g", "4.74 g"],
      answer: "2.37 g",
      explanation: "t = 1 × 3600 = 3600 s. m = 3.29 × 10⁻⁴ × 2 × 3600 = 2.37 g."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "How long will it take to deposit 2g of silver with a current of 1A? (Z = 1.12 × 10⁻³ g/C)",
      type: "multiple_choice",
      options: ["1786 s", "2000 s", "2500 s", "3000 s"],
      answer: "1786 s",
      explanation: "m = ZIt → t = m/(ZI) = 2/(1.12 × 10⁻³ × 1) = 1786 s."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "In copper refining, what is the anode made of?",
      type: "multiple_choice",
      options: ["Pure copper", "Impure copper", "Graphite", "Platinum"],
      answer: "Impure copper",
      explanation: "In copper refining, the anode is impure copper, and the cathode is pure copper."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is used to lower the melting point of alumina in aluminium extraction?",
      type: "multiple_choice",
      options: ["Cryolite", "Salt", "Lime", "Silica"],
      answer: "Cryolite",
      explanation: "Cryolite (Na₃AlF₆) is used to lower the melting point of alumina."
    }
  ],

  assessment: {
    id: "assess_electrolysis",
    title: "Electrolysis Quiz",
    description: "Test your understanding of electrolysis",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is electrolysis?",
        type: "short_answer",
        answer_key: "The decomposition of a substance using electrical energy",
        explanation: "Electrolysis uses electrical energy to decompose an electrolyte."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the names of the two electrodes in an electrolytic cell?",
        type: "short_answer",
        answer_key: "Anode and cathode",
        explanation: "The positive electrode is the anode; the negative electrode is the cathode."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between an electrolytic cell and a galvanic cell?",
        type: "short_answer",
        answer_key: "Electrolytic cells use electrical energy; galvanic cells produce electrical energy",
        explanation: "Electrolytic cells consume electrical energy; galvanic cells generate it."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an electrolyte?",
        type: "short_answer",
        answer_key: "A substance that conducts electricity when molten or dissolved",
        explanation: "Electrolytes contain free ions that can conduct electricity."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What are the products of electrolysis of molten NaCl?",
        type: "short_answer",
        answer_key: "Sodium (Na) and chlorine (Cl₂)",
        explanation: "NaCl → Na + Cl₂ during electrolysis."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What are the products of electrolysis of water?",
        type: "short_answer",
        answer_key: "Hydrogen (H₂) and oxygen (O₂)",
        explanation: "2H₂O → 2H₂ + O₂ during electrolysis."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is observed during electrolysis of CuSO₄ with inert electrodes?",
        type: "short_answer",
        answer_key: "Copper deposits at the cathode; oxygen at the anode",
        explanation: "Cu²⁺ + 2e⁻ → Cu at cathode; 4OH⁻ → O₂ + 2H₂O + 4e⁻ at anode."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is electroplating?",
        type: "short_answer",
        answer_key: "Coating one metal with another using electrolysis",
        explanation: "Electroplating uses electrolysis to deposit a metal coating."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Calculate the mass of copper deposited when 2A flows for 500s. (Z = 3.29 × 10⁻⁴ g/C)",
        type: "short_answer",
        answer_key: "0.329 g",
        explanation: "m = ZIt = 3.29 × 10⁻⁴ × 2 × 500 = 0.329 g."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Calculate the current needed to deposit 1g of silver in 1000s. (Z = 1.12 × 10⁻³ g/C)",
        type: "short_answer",
        answer_key: "0.893 A",
        explanation: "I = m/(Zt) = 1/(1.12 × 10⁻³ × 1000) = 0.893 A."
      },
      {
        id: "ass_011",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the purpose of copper refining by electrolysis?",
        type: "short_answer",
        answer_key: "To produce pure copper from impure copper",
        explanation: "Electrolytic refining removes impurities from copper."
      },
      {
        id: "ass_012",
        objective: "obj_014",
        difficulty: "hard",
        question: "Why is cryolite used in aluminium extraction?",
        type: "short_answer",
        answer_key: "To lower the melting point of alumina",
        explanation: "Cryolite reduces the melting point of alumina, making extraction more economical."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand electrolysis and electrolytic cells",
        "Explain the electrolysis of different substances",
        "Apply Faraday's laws",
        "Understand industrial applications"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is electrolysis?" },
        { time: "5-10 min", activity: "Direct Instruction - Electrolytic Cells" },
        { time: "10-15 min", activity: "Direct Instruction - Electrolysis of Molten Compounds" },
        { time: "15-20 min", activity: "Direct Instruction - Electrolysis of Aqueous Solutions" },
        { time: "20-25 min", activity: "Direct Instruction - Electroplating" },
        { time: "25-30 min", activity: "Direct Instruction - Faraday's Laws" },
        { time: "30-35 min", activity: "Direct Instruction - Industrial Applications" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The decomposition of a substance using electrical energy",
        prac_002: "Anode",
        prac_003: "Galvanic cells produce electricity",
        prac_004: "Na",
        prac_005: "Cl₂",
        prac_006: "H₂",
        prac_007: "O₂",
        prac_008: "1.18 g",
        prac_009: "2.37 g",
        prac_010: "1786 s",
        prac_011: "Impure copper",
        prac_012: "Cryolite"
      },
      assessment: {
        ass_001: "The decomposition of a substance using electrical energy",
        ass_002: "Anode and cathode",
        ass_003: "Electrolytic cells use electrical energy; galvanic cells produce electrical energy",
        ass_004: "A substance that conducts electricity when molten or dissolved",
        ass_005: "Sodium (Na) and chlorine (Cl₂)",
        ass_006: "Hydrogen (H₂) and oxygen (O₂)",
        ass_007: "Copper deposits at the cathode; oxygen at the anode",
        ass_008: "Coating one metal with another using electrolysis",
        ass_009: "0.329 g",
        ass_010: "0.893 A",
        ass_011: "To produce pure copper from impure copper",
        ass_012: "To lower the melting point of alumina"
      }
    },
    extensionActivities: [
      "Demonstrate electrolysis of water",
      "Research the industrial extraction of aluminium",
      "Investigate electroplating",
      "Calculate Faraday's constant from experimental data"
    ],
    differentiation: {
      struggling: [
        "Focus on simple electrolysis reactions",
        "Use visual aids",
        "Practice with calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research advanced electrolysis applications",
        "Study the electrochemical series",
        "Investigate fuel cells",
        "Explore electrochemistry in batteries"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Electrolytic Cell",
      description: "Diagram showing an electrolytic cell",
      url: "/diagrams/electrolytic-cell.png",
      alt: "Electrolytic cell diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Electroplating",
      description: "Diagram showing electroplating process",
      url: "/diagrams/electroplating.png",
      alt: "Electroplating diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Copper Refining",
      description: "Diagram showing copper refining by electrolysis",
      url: "/diagrams/copper-refining.png",
      alt: "Copper refining diagram"
    }
  ]
};