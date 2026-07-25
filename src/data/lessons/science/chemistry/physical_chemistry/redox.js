// Location: src/data/lessons/science/chemistry/redox.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_redox_reactions",
  subject: "Chemistry",
  topic: "Redox Reactions",
  name: "Redox Reactions",
  icon: "⚡",
  grade_level: "pre-university",
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
    "Knowledge of bonding",
    "Understanding of oxidation states",
    "Basic knowledge of chemical reactions"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Electrolysis",
      file: "science/chemistry/electrolysis.js"
    },
    {
      name: "Electrochemical Cells",
      file: "science/chemistry/electrochemical_cells.js"
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
      description: "Define redox reactions and explain their importance",
      indicator: "Student can explain what redox reactions are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define oxidation and reduction in terms of oxygen",
      indicator: "Student can explain oxidation as gain of oxygen and reduction as loss of oxygen"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define oxidation and reduction in terms of electrons",
      indicator: "Student can explain oxidation as loss of electrons and reduction as gain of electrons"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Define oxidizing agents and reducing agents",
      indicator: "Student can identify oxidizing and reducing agents"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Assign oxidation numbers to elements in compounds",
      indicator: "Student can determine oxidation states of elements"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify redox reactions using oxidation numbers",
      indicator: "Student can determine if a reaction is redox by checking oxidation states"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Balance redox equations by the oxidation number method",
      indicator: "Student can balance redox equations using oxidation numbers"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the reactivity series of metals",
      indicator: "Student can use the reactivity series to predict reactions"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain displacement reactions as redox reactions",
      indicator: "Student can explain displacement reactions in terms of redox"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Balance redox equations by the half-equation method",
      indicator: "Student can balance redox equations using half-equations"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain disproportionation reactions",
      indicator: "Student can identify and explain disproportionation"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain redox reactions in electrochemical cells",
      indicator: "Student can relate redox to electrochemical cells"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Predict spontaneity of redox reactions",
      indicator: "Student can predict if a redox reaction will occur"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the role of redox in biological systems",
      indicator: "Student can describe redox in respiration and photosynthesis"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze redox reactions in industrial processes",
      indicator: "Student can apply redox to real-world industrial processes"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Redox Reactions - Electron Transfer in Chemistry",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about oxidation, reduction, electron transfer, and balancing redox equations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Redox Reactions</h2>
      <p><strong>Redox (oxidation-reduction) reactions</strong> are chemical reactions that involve the transfer of electrons between species. They are among the most important reactions in chemistry, occurring in everything from combustion to biological processes.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚡ Key Concepts</h3>
          <ul>
            <li>✓ Oxidation</li>
            <li>✓ Reduction</li>
            <li>✓ Oxidizing Agents</li>
            <li>✓ Reducing Agents</li>
            <li>✓ Oxidation Numbers</li>
            <li>✓ Half-Equations</li>
            <li>✓ Reactivity Series</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Redox reactions power batteries</li>
            <li>• Photosynthesis is a redox reaction</li>
            <li>• Rusting is a redox reaction</li>
            <li>• Respiration is a redox reaction</li>
            <li>• Redox is essential for life</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Redox Reactions Matter</h4>
        <p>Redox reactions are everywhere - from the batteries that power our devices to the oxygen we breathe. Understanding redox is essential for chemistry, biology, and technology.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Definitions of Oxidation and Reduction",
        objective: "obj_002",
        text: `
          <h3>Oxidation and Reduction - Oxygen View</h3>
          <p>Historically, oxidation was defined as the gain of oxygen, and reduction as the loss of oxygen.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oxidation</h4>
              <ul>
                <li>• <strong>Gain of oxygen</strong></li>
                <li>• Example: 2Mg + O₂ → 2MgO</li>
                <li>• Magnesium is oxidized</li>
                <li>• Oxygen is gained</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reduction</h4>
              <ul>
                <li>• <strong>Loss of oxygen</strong></li>
                <li>• Example: CuO + H₂ → Cu + H₂O</li>
                <li>• Copper oxide is reduced</li>
                <li>• Oxygen is lost</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>• Oxidation: Gain of oxygen</li>
              <li>• Reduction: Loss of oxygen</li>
              <li>• These definitions are limited</li>
              <li>• Electron transfer is the more complete picture</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Electron Transfer",
        objective: "obj_003",
        text: `
          <h3>Oxidation and Reduction - Electron View</h3>
          <p>The modern definition of redox involves the transfer of electrons.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oxidation</h4>
              <ul>
                <li>• <strong>Loss of electrons</strong></li>
                <li>• Oxidation state <strong>increases</strong></li>
                <li>• Example: Zn → Zn²⁺ + 2e⁻</li>
                <li>• Zn loses 2 electrons</li>
                <li>• OIL: Oxidation Is Loss</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reduction</h4>
              <ul>
                <li>• <strong>Gain of electrons</strong></li>
                <li>• Oxidation state <strong>decreases</strong></li>
                <li>• Example: Cu²⁺ + 2e⁻ → Cu</li>
                <li>• Cu²⁺ gains 2 electrons</li>
                <li>• RIG: Reduction Is Gain</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Electron Transfer in Redox</text>
              
              <!-- Zinc atom -->
              <g transform="translate(150, 150)">
                <circle cx="0" cy="0" r="40" fill="#4a90d9" stroke="#1565c0" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="18" font-weight="bold" fill="white">Zn</text>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Zinc atom</text>
                <text x="0" y="75" text-anchor="middle" font-size="10" fill="#1565c0">0 electrons lost</text>
              </g>
              
              <!-- Arrow -->
              <g transform="translate(250, 150)">
                <text x="0" y="-20" text-anchor="middle" font-size="14" fill="#1565c0">Loss of 2e⁻</text>
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#ef5350" stroke-width="3"/>
                <polygon points="-8,10 0,20 8,10" fill="#ef5350"/>
                <text x="0" y="35" text-anchor="middle" font-size="12" fill="#ef5350">Oxidation</text>
              </g>
              
              <!-- Zn²⁺ ion -->
              <g transform="translate(380, 150)">
                <circle cx="0" cy="0" r="35" fill="#ef5350" stroke="#c62828" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="16" font-weight="bold" fill="white">Zn²⁺</text>
                <text x="0" y="55" text-anchor="middle" font-size="12" fill="#c62828">Zinc ion</text>
                <text x="0" y="70" text-anchor="middle" font-size="10" fill="#c62828">2 electrons lost</text>
              </g>
              
              <!-- Electrons -->
              <g transform="translate(300, 130)">
                <circle cx="0" cy="0" r="6" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#e65100">2e⁻</text>
              </g>
              
              <!-- OIL RIG mnemonic -->
              <text x="300" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1565c0">OIL RIG: Oxidation Is Loss, Reduction Is Gain</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Oxidizing and Reducing Agents",
        objective: "obj_004",
        text: `
          <h3>Oxidizing and Reducing Agents</h3>
          <p>An <strong>oxidizing agent</strong> causes oxidation by accepting electrons. A <strong>reducing agent</strong> causes reduction by donating electrons.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oxidizing Agent</h4>
              <ul>
                <li>• Causes oxidation</li>
                <li>• Accepts electrons</li>
                <li>• Itself is <strong>reduced</strong></li>
                <li>• Examples: O₂, Cl₂, KMnO₄</li>
                <li>• Strong oxidizing agents</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reducing Agent</h4>
              <ul>
                <li>• Causes reduction</li>
                <li>• Donates electrons</li>
                <li>• Itself is <strong>oxidized</strong></li>
                <li>• Examples: H₂, Mg, NaBH₄</li>
                <li>• Strong reducing agents</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Remember:</strong>
            <ul>
              <li>• Oxidizing agent = Electron acceptor</li>
              <li>• Reducing agent = Electron donor</li>
              <li>• Leo the lion says: "Loss of Electrons is Oxidation"</li>
              <li>• "Gain of Electrons is Reduction"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Oxidation Numbers",
        objective: "obj_005",
        text: `
          <h3>Oxidation Numbers</h3>
          <p><strong>Oxidation numbers</strong> are assigned to atoms to track electron transfer. They are also called oxidation states.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Assigning Oxidation Numbers:</strong>
            <ol>
              <li>Free elements: 0 (e.g., Fe, O₂, Cl₂)</li>
              <li>Monatomic ions: charge (e.g., Na⁺ = +1, Cl⁻ = -1)</li>
              <li>Oxygen: usually -2 (except in peroxides, -1)</li>
              <li>Hydrogen: +1 (with non-metals), -1 (with metals)</li>
              <li>Sum of oxidation numbers = charge on species</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>H₂O:</strong></li>
                <li>• H = +1 (x2) = +2</li>
                <li>• O = -2</li>
                <li>• Sum = 0 ✓</li>
                <li><strong>CO₂:</strong></li>
                <li>• C = +4</li>
                <li>• O = -2 (x2) = -4</li>
                <li>• Sum = 0 ✓</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Examples</h4>
              <ul>
                <li><strong>MnO₄⁻:</strong></li>
                <li>• O = -2 (x4) = -8</li>
                <li>• Mn = +7</li>
                <li>• Sum = -1 ✓</li>
                <li><strong>Cr₂O₇²⁻:</strong></li>
                <li>• O = -2 (x7) = -14</li>
                <li>• Cr = +6 (x2) = +12</li>
                <li>• Sum = -2 ✓</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Identifying Redox Reactions",
        objective: "obj_006",
        text: `
          <h3>Identifying Redox Reactions</h3>
          <p>A reaction is redox if oxidation numbers of atoms <strong>change</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Redox Reaction Example</h4>
              <p><strong>Zn + CuSO₄ → ZnSO₄ + Cu</strong></p>
              <ul>
                <li>• Zn: 0 → +2 (oxidation)</li>
                <li>• Cu: +2 → 0 (reduction)</li>
                <li>• Oxidation numbers change ✓</li>
                <li>• This is a redox reaction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Non-Redox Example</h4>
              <p><strong>NaOH + HCl → NaCl + H₂O</strong></p>
              <ul>
                <li>• Na: +1 → +1 (no change)</li>
                <li>• Cl: -1 → -1 (no change)</li>
                <li>• Oxidation numbers don't change ✗</li>
                <li>• This is NOT redox</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Balancing Redox Equations - Oxidation Number Method",
        objective: "obj_007",
        text: `
          <h3>Balancing Redox Equations</h3>
          <p>There are two main methods to balance redox equations: the oxidation number method and the half-equation method.</p>
          
          <div class="example-box">
            <strong>📌 Oxidation Number Method Steps:</strong>
            <ol>
              <li>Assign oxidation numbers</li>
              <li>Identify elements that change</li>
              <li>Calculate change in oxidation number</li>
              <li>Equalize the changes</li>
              <li>Balance the equation</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>MnO₂ + HCl → MnCl₂ + Cl₂ + H₂O</strong></p>
              <ul>
                <li>• Mn: +4 → +2 (gain 2e⁻, reduced)</li>
                <li>• Cl: -1 → 0 (loses 1e⁻, oxidized)</li>
                <li>• Mn gain = 2, Cl loss = 1</li>
                <li>• Multiply Cl by 2</li>
                <li>• <strong>MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Check</h4>
              <ul>
                <li>• Mn: +4 → +2 (reduced)</li>
                <li>• Cl: -1 → 0 (oxidized)</li>
                <li>• 2 Cl atoms lose 2e⁻ total</li>
                <li>• Mn gains 2e⁻</li>
                <li>• Electrons are balanced ✓</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Half-Equations",
        objective: "obj_010",
        text: `
          <h3>Half-Equations Method</h3>
          <p>Half-equations show the oxidation and reduction parts separately.</p>
          
          <div class="example-box">
            <strong>📌 Half-Equation Method Steps:</strong>
            <ol>
              <li>Write oxidation and reduction half-equations</li>
              <li>Balance atoms (except O and H)</li>
              <li>Balance O by adding H₂O</li>
              <li>Balance H by adding H⁺</li>
              <li>Balance charge by adding e⁻</li>
              <li>Multiply to equalize electrons</li>
              <li>Add half-equations</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺</strong></p>
              <ul>
                <li><strong>Reduction:</strong></li>
                <li>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</li>
                <li><strong>Oxidation:</strong></li>
                <li>Fe²⁺ → Fe³⁺ + e⁻</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Balancing</h4>
              <ul>
                <li>• Multiply oxidation by 5</li>
                <li>• 5Fe²⁺ → 5Fe³⁺ + 5e⁻</li>
                <li>• Add:</li>
                <li>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺</li>
                <li>• <strong>Balanced!</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Reactivity Series",
        objective: "obj_008",
        text: `
          <h3>Reactivity Series of Metals</h3>
          <p>The <strong>reactivity series</strong> lists metals in order of reactivity. More reactive metals can displace less reactive metals from their compounds.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Reactivity Series</h4>
              <ul>
                <li>• K (Most reactive)</li>
                <li>• Na</li>
                <li>• Ca</li>
                <li>• Mg</li>
                <li>• Al</li>
                <li>• Zn</li>
                <li>• Fe</li>
                <li>• Pb</li>
                <li>• Cu</li>
                <li>• Ag</li>
                <li>• Au (Least reactive)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• More reactive = loses electrons easier</li>
                <li>• Metal + acid → salt + hydrogen</li>
                <li>• Displacement: Zn + CuSO₄ → ZnSO₄ + Cu</li>
                <li>• Zn is more reactive than Cu</li>
                <li>• Zn is oxidized, Cu²⁺ is reduced</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Displacement Reactions",
        objective: "obj_009",
        text: `
          <h3>Displacement Reactions as Redox</h3>
          <p>Displacement reactions are redox reactions where a more reactive element displaces a less reactive one.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p><strong>Zn + CuSO₄ → ZnSO₄ + Cu</strong></p>
              <ul>
                <li>• Zn: 0 → +2 (oxidized)</li>
                <li>• Cu: +2 → 0 (reduced)</li>
                <li>• Zn is the reducing agent</li>
                <li>• Cu²⁺ is the oxidizing agent</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p><strong>Fe + CuSO₄ → FeSO₄ + Cu</strong></p>
              <ul>
                <li>• Fe: 0 → +2 (oxidized)</li>
                <li>• Cu: +2 → 0 (reduced)</li>
                <li>• Fe is more reactive than Cu</li>
                <li>• Displacement occurs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Disproportionation",
        objective: "obj_011",
        text: `
          <h3>Disproportionation</h3>
          <p><strong>Disproportionation</strong> is a redox reaction where the same element is both oxidized and reduced.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>2H₂O₂ → 2H₂O + O₂</strong></p>
              <ul>
                <li>• O in H₂O₂: -1</li>
                <li>• O in H₂O: -2 (reduced)</li>
                <li>• O in O₂: 0 (oxidized)</li>
                <li>• Same element (O) both oxidizes and reduces</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Another Example</h4>
              <p><strong>Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O</strong></p>
              <ul>
                <li>• Cl in Cl₂: 0</li>
                <li>• Cl in Cl⁻: -1 (reduced)</li>
                <li>• Cl in ClO⁻: +1 (oxidized)</li>
                <li>• Same element (Cl) both oxidizes and reduces</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Redox in Electrochemical Cells",
        objective: "obj_012",
        text: `
          <h3>Redox in Electrochemical Cells</h3>
          <p>Electrochemical cells use redox reactions to generate electricity or drive chemical reactions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Galvanic Cells</h4>
              <ul>
                <li>• Produce electricity</li>
                <li>• Spontaneous redox reactions</li>
                <li>• Anode: Oxidation occurs</li>
                <li>• Cathode: Reduction occurs</li>
                <li>• Electrons flow from anode to cathode</li>
                <li>• Example: Batteries</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Electrolytic Cells</h4>
              <ul>
                <li>• Use electricity to drive reactions</li>
                <li>• Non-spontaneous reactions</li>
                <li>• Anode: Oxidation</li>
                <li>• Cathode: Reduction</li>
                <li>• External power source needed</li>
                <li>• Example: Electrolysis</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Redox in Biology",
        objective: "obj_014",
        text: `
          <h3>Redox in Biological Systems</h3>
          <p>Redox reactions are essential for life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Photosynthesis</h4>
              <ul>
                <li>• 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</li>
                <li>• CO₂ is reduced (gain of electrons)</li>
                <li>• H₂O is oxidized (loss of electrons)</li>
                <li>• Energy from sunlight drives the reaction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Cellular Respiration</h4>
              <ul>
                <li>• C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</li>
                <li>• Glucose is oxidized (loss of electrons)</li>
                <li>• O₂ is reduced (gain of electrons)</li>
                <li>• Energy released is used by cells</li>
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
          <h4>⚡ Redox Basics</h4>
          <ul>
            <li>• Oxidation = Loss of electrons</li>
            <li>• Reduction = Gain of electrons</li>
            <li>• OIL RIG: Oxidation Is Loss, Reduction Is Gain</li>
            <li>• Redox = Transfer of electrons</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Oxidizing agent = Accepts electrons</li>
            <li>• Reducing agent = Donates electrons</li>
            <li>• Oxidation numbers track electron transfer</li>
            <li>• Redox is everywhere in chemistry</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Redox reactions are fundamental to chemistry, biology, and technology. Understanding them is essential for understanding energy and electron transfer.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Oxidation always involves oxygen",
        correction: "Oxidation can occur without oxygen",
        explanation: "Oxidation is the loss of electrons, regardless of whether oxygen is involved."
      },
      {
        id: "mis_002",
        misconception: "Reducing agents are reduced",
        correction: "Reducing agents cause reduction but are themselves oxidized",
        explanation: "A reducing agent donates electrons and is itself oxidized."
      },
      {
        id: "mis_003",
        misconception: "Oxidation and reduction are separate",
        correction: "They always occur together",
        explanation: "When something is oxidized, something else must be reduced."
      },
      {
        id: "mis_004",
        misconception: "All reactions are redox",
        correction: "Only reactions with electron transfer are redox",
        explanation: "Acid-base reactions and precipitation reactions are not redox."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Batteries",
        description: "Redox reactions power batteries.",
        example: "Lithium-ion, lead-acid batteries"
      },
      {
        id: "app_002",
        title: "Corrosion",
        description: "Redox reactions cause rusting.",
        example: "Prevention of metal corrosion"
      },
      {
        id: "app_003",
        title: "Electroplating",
        description: "Redox is used to coat metals.",
        example: "Chrome plating, gold plating"
      },
      {
        id: "app_004",
        title: "Metallurgy",
        description: "Redox is used to extract metals.",
        example: "Extraction of iron, aluminum"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Redox", definition: "A reaction involving both oxidation and reduction." },
    { term: "Oxidation", definition: "Loss of electrons or gain of oxygen." },
    { term: "Reduction", definition: "Gain of electrons or loss of oxygen." },
    { term: "Oxidizing Agent", definition: "Accepts electrons, causes oxidation." },
    { term: "Reducing Agent", definition: "Donates electrons, causes reduction." },
    { term: "Oxidation Number", definition: "The charge an atom would have if compounds were ionic." },
    { term: "Half-Equation", definition: "Equation showing either oxidation or reduction." },
    { term: "Disproportionation", definition: "Same element is oxidized and reduced." },
    { term: "Reactivity Series", definition: "List of metals in order of reactivity." },
    { term: "Electron Transfer", definition: "Movement of electrons in a redox reaction." },
    { term: "Anode", definition: "Electrode where oxidation occurs." },
    { term: "Cathode", definition: "Electrode where reduction occurs." },
    { term: "Galvanic Cell", definition: "Cell that produces electricity from redox." },
    { term: "Electrolytic Cell", definition: "Cell that uses electricity to drive redox." },
    { term: "Displacement", definition: "A reaction where one element replaces another." },
    { term: "OIL RIG", definition: "Oxidation Is Loss, Reduction Is Gain." },
    { term: "LEO GER", definition: "Lose Electrons Oxidation, Gain Electrons Reduction." },
    { term: "Redox Titration", definition: "Titration using a redox reaction." },
    { term: "Standard Electrode Potential", definition: "Measure of the tendency to gain electrons." },
    { term: "Electrochemical Series", definition: "List of elements by reducing power." }
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
      question: "What is a redox reaction?",
      type: "multiple_choice",
      options: [
        "A reaction involving electron transfer",
        "A reaction involving heat transfer",
        "A reaction involving bond formation",
        "A reaction involving gas formation"
      ],
      answer: "A reaction involving electron transfer",
      explanation: "Redox reactions involve the transfer of electrons."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is oxidation in terms of oxygen?",
      type: "multiple_choice",
      options: [
        "Gain of oxygen",
        "Loss of oxygen",
        "Gain of electrons",
        "Loss of electrons"
      ],
      answer: "Gain of oxygen",
      explanation: "Oxidation is defined as the gain of oxygen."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is reduction in terms of electrons?",
      type: "multiple_choice",
      options: [
        "Loss of electrons",
        "Gain of electrons",
        "Loss of oxygen",
        "Gain of oxygen"
      ],
      answer: "Gain of electrons",
      explanation: "Reduction is the gain of electrons."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is an oxidizing agent?",
      type: "multiple_choice",
      options: [
        "Accepts electrons, causes oxidation",
        "Donates electrons, causes reduction",
        "Accepts protons",
        "Donates protons"
      ],
      answer: "Accepts electrons, causes oxidation",
      explanation: "An oxidizing agent accepts electrons and causes oxidation."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the oxidation number of oxygen in H₂O?",
      type: "multiple_choice",
      options: ["0", "-1", "-2", "+2"],
      answer: "-2",
      explanation: "Oxygen is -2 in most compounds, including H₂O."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which reaction is NOT a redox reaction?",
      type: "multiple_choice",
      options: [
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "NaOH + HCl → NaCl + H₂O",
        "2Mg + O₂ → 2MgO",
        "Fe + CuSO₄ → FeSO₄ + Cu"
      ],
      answer: "NaOH + HCl → NaCl + H₂O",
      explanation: "Acid-base reactions do not involve electron transfer."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which metal is the most reactive?",
      type: "multiple_choice",
      options: ["Cu", "Fe", "Zn", "Na"],
      answer: "Na",
      explanation: "Sodium is higher in the reactivity series and more reactive."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "hard",
      question: "Balance this equation by oxidation number method: MnO₂ + HCl → MnCl₂ + Cl₂ + H₂O",
      type: "multiple_choice",
      options: [
        "MnO₂ + 2HCl → MnCl₂ + Cl₂ + H₂O",
        "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
        "MnO₂ + 6HCl → MnCl₂ + 2Cl₂ + 3H₂O",
        "2MnO₂ + 8HCl → 2MnCl₂ + Cl₂ + 4H₂O"
      ],
      answer: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
      explanation: "The balanced equation is MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O"
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the reduction half-equation for MnO₄⁻ → Mn²⁺?",
      type: "multiple_choice",
      options: [
        "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        "MnO₄⁻ + 4H⁺ + 3e⁻ → Mn²⁺ + 2H₂O",
        "MnO₄⁻ + 8H⁺ + 3e⁻ → Mn²⁺ + 4H₂O",
        "MnO₄⁻ + 4H⁺ + 5e⁻ → Mn²⁺ + 2H₂O"
      ],
      answer: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
      explanation: "The balanced reduction half-equation requires 5e⁻ and 8H⁺."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is disproportionation?",
      type: "multiple_choice",
      options: [
        "When one element is oxidized and another is reduced",
        "When the same element is both oxidized and reduced",
        "When no electron transfer occurs",
        "When oxygen is removed"
      ],
      answer: "When the same element is both oxidized and reduced",
      explanation: "Disproportionation involves the same element being both oxidized and reduced."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "In a galvanic cell, where does oxidation occur?",
      type: "multiple_choice",
      options: ["Anode", "Cathode", "Salt bridge", "Electrolyte"],
      answer: "Anode",
      explanation: "Oxidation occurs at the anode in a galvanic cell."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "Which is the strongest reducing agent?",
      type: "multiple_choice",
      options: ["F₂", "Cl₂", "I₂", "K"],
      answer: "K",
      explanation: "Potassium is a very strong reducing agent (loses electrons easily)."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "In photosynthesis, which molecule is oxidized?",
      type: "multiple_choice",
      options: ["CO₂", "H₂O", "C₆H₁₂O₆", "O₂"],
      answer: "H₂O",
      explanation: "Water is oxidized (loses electrons) in photosynthesis."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "What type of reaction is Zn + CuSO₄ → ZnSO₄ + Cu?",
      type: "multiple_choice",
      options: ["Displacement", "Combination", "Decomposition", "Neutralization"],
      answer: "Displacement",
      explanation: "Zinc displaces copper from its compound."
    },
    {
      id: "prac_015",
      objective: "obj_005",
      difficulty: "hard",
      question: "What is the oxidation number of Mn in KMnO₄?",
      type: "multiple_choice",
      options: ["+5", "+6", "+7", "+8"],
      answer: "+7",
      explanation: "K = +1, O = -2 × 4 = -8, Mn = +7 to balance."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_redox",
    title: "Redox Reactions Quiz",
    description: "Test your understanding of redox reactions",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a redox reaction?",
        type: "short_answer",
        answer_key: "A reaction involving electron transfer",
        explanation: "Redox reactions involve the transfer of electrons."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is oxidation in terms of oxygen?",
        type: "short_answer",
        answer_key: "Gain of oxygen",
        explanation: "Oxidation is the gain of oxygen."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is reduction in terms of electrons?",
        type: "short_answer",
        answer_key: "Gain of electrons",
        explanation: "Reduction is the gain of electrons."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an oxidizing agent?",
        type: "short_answer",
        answer_key: "Accepts electrons, causes oxidation",
        explanation: "An oxidizing agent accepts electrons."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the oxidation number of oxygen in H₂O?",
        type: "short_answer",
        answer_key: "-2",
        explanation: "Oxygen is -2 in H₂O."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How can you identify a redox reaction?",
        type: "short_answer",
        answer_key: "Oxidation numbers change",
        explanation: "A redox reaction has changing oxidation numbers."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Balance: MnO₂ + HCl → MnCl₂ + Cl₂ + H₂O",
        type: "short_answer",
        answer_key: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
        explanation: "The balanced equation is MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Which metal is more reactive, Zn or Cu?",
        type: "short_answer",
        answer_key: "Zn",
        explanation: "Zinc is more reactive than copper."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the reduction half-equation for MnO₄⁻ → Mn²⁺?",
        type: "short_answer",
        answer_key: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        explanation: "The balanced reduction half-equation requires 5e⁻ and 8H⁺."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is disproportionation?",
        type: "short_answer",
        answer_key: "Same element is both oxidized and reduced",
        explanation: "Disproportionation involves the same element being both oxidized and reduced."
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
        "Understand oxidation and reduction",
        "Identify oxidizing and reducing agents",
        "Assign oxidation numbers",
        "Balance redox equations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are redox reactions?" },
        { time: "5-10 min", activity: "Direct Instruction - Definitions of Oxidation and Reduction" },
        { time: "10-15 min", activity: "Direct Instruction - Oxidizing and Reducing Agents" },
        { time: "15-20 min", activity: "Direct Instruction - Oxidation Numbers" },
        { time: "20-25 min", activity: "Direct Instruction - Identifying Redox" },
        { time: "25-30 min", activity: "Direct Instruction - Balancing Redox Equations" },
        { time: "30-35 min", activity: "Direct Instruction - Reactivity Series" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A reaction involving electron transfer",
        prac_002: "Gain of oxygen",
        prac_003: "Gain of electrons",
        prac_004: "Accepts electrons, causes oxidation",
        prac_005: "-2",
        prac_006: "NaOH + HCl → NaCl + H₂O",
        prac_007: "Na",
        prac_008: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
        prac_009: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        prac_010: "When the same element is both oxidized and reduced",
        prac_011: "Anode",
        prac_012: "K",
        prac_013: "H₂O",
        prac_014: "Displacement",
        prac_015: "+7"
      },
      assessment: {
        ass_001: "A reaction involving electron transfer",
        ass_002: "Gain of oxygen",
        ass_003: "Gain of electrons",
        ass_004: "Accepts electrons, causes oxidation",
        ass_005: "-2",
        ass_006: "Oxidation numbers change",
        ass_007: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O",
        ass_008: "Zn",
        ass_009: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
        ass_010: "Same element is both oxidized and reduced"
      }
    },
    extensionActivities: [
      "Research electrochemical cells",
      "Study corrosion prevention",
      "Research redox in batteries",
      "Analyze redox titrations"
    ],
    differentiation: {
      struggling: [
        "Focus on basic definitions",
        "Use simple examples",
        "Use visual aids",
        "Provide OIL RIG mnemonic"
      ],
      advanced: [
        "Research electrochemical series",
        "Study complex redox mechanisms",
        "Research biological redox",
        "Study industrial redox processes"
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
      title: "Electron Transfer",
      description: "Diagram showing electron transfer in redox",
      url: "/diagrams/electron-transfer.png",
      alt: "Electron transfer diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Reactivity Series",
      description: "Chart of the reactivity series of metals",
      url: "/diagrams/reactivity-series.png",
      alt: "Reactivity series chart"
    }
  ]
};