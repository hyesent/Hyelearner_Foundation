// Location: src/data/lessons/science/chemistry/inorganic_chemistry/metals.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_metals",
  subject: "Chemistry",
  topic: "Metals",
  name: "Metals",
  icon: "🔩",
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
    "Understanding of the periodic table",
    "Knowledge of atomic structure",
    "Understanding of bonding",
    "Knowledge of redox reactions"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Transition Metals",
      file: "science/chemistry/transition_metals.js"
    },
    {
      name: "Extraction of Metals",
      file: "science/chemistry/extraction_of_metals.js"
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
      description: "Define metals and explain their importance",
      indicator: "Student can explain what metals are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the physical properties of metals",
      indicator: "Student can list the physical properties of metals"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the chemical properties of metals",
      indicator: "Student can describe the chemical properties of metals"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the reactivity series of metals",
      indicator: "Student can order metals by reactivity"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the reactions of metals with water",
      indicator: "Student can describe how metals react with water"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the reactions of metals with acids",
      indicator: "Student can describe how metals react with acids"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the reactions of metals with oxygen",
      indicator: "Student can describe how metals react with oxygen"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the reactions of metals with metal salts",
      indicator: "Student can describe displacement reactions"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the extraction of metals",
      indicator: "Student can explain how metals are extracted"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the properties of alkali metals",
      indicator: "Student can describe the properties of Group 1 metals"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the properties of alkaline earth metals",
      indicator: "Student can describe the properties of Group 2 metals"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the properties of transition metals",
      indicator: "Student can describe the properties of transition metals"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the uses of metals based on their properties",
      indicator: "Student can match metals to their uses"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the phenomenon of rusting",
      indicator: "Student can describe the conditions for rusting"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain methods of preventing corrosion",
      indicator: "Student can describe how to prevent rusting"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the economic importance of metals",
      indicator: "Student can discuss the economic significance of metals"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Metals - Properties, Reactions, and Uses",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the properties, reactions, and uses of metals in our daily lives."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Metals</h2>
      <p><strong>Metals</strong> are a group of elements that are typically hard, shiny, malleable, and good conductors of heat and electricity. They make up the majority of the periodic table and are essential to modern life.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔩 Key Concepts</h3>
          <ul>
            <li>✓ Physical Properties of Metals</li>
            <li>✓ Chemical Properties of Metals</li>
            <li>✓ Reactivity Series</li>
            <li>✓ Reactions with Water, Acids, Oxygen</li>
            <li>✓ Displacement Reactions</li>
            <li>✓ Corrosion and Rusting</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• There are over 90 metals on the periodic table</li>
            <li>• Gold is the most malleable metal</li>
            <li>• Mercury is a liquid at room temperature</li>
            <li>• Aluminum is the most abundant metal</li>
            <li>• Iron is the most used metal</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Metals Matter</h4>
        <p>Metals are essential to modern civilization. They are used in construction, transportation, electronics, medicine, and countless other applications.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Physical Properties of Metals",
        objective: "obj_002",
        text: `
          <h3>Physical Properties of Metals</h3>
          <p>Metals have characteristic physical properties due to their metallic bonding.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• <strong>Malleable:</strong> Can be hammered into shapes</li>
                <li>• <strong>Ductile:</strong> Can be drawn into wires</li>
                <li>• <strong>Shiny:</strong> Lustrous appearance</li>
                <li>• <strong>Good conductors:</strong> Heat and electricity</li>
                <li>• <strong>High density:</strong> Heavy for their size</li>
                <li>• <strong>High melting/boiling points:</strong> Strong bonds</li>
                <li>• <strong>Sonorous:</strong> Ring when struck</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Explanation</h4>
              <ul>
                <li>• Metallic bonding: Sea of delocalized electrons</li>
                <li>• Electrons free to move</li>
                <li>• Layers can slide (malleable, ductile)</li>
                <li>• Electrons conduct electricity</li>
                <li>• Strong bonds = high melting point</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Metallic Bonding</text>
              
              <!-- Metal structure -->
              <g transform="translate(300, 160)">
                <!-- Positive ions -->
                <circle cx="-40" cy="-30" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-40" y="-25" text-anchor="middle" font-size="10" fill="white">+</text>
                
                <circle cx="40" cy="-30" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="40" y="-25" text-anchor="middle" font-size="10" fill="white">+</text>
                
                <circle cx="0" cy="0" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="10" fill="white">+</text>
                
                <circle cx="-40" cy="30" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-40" y="35" text-anchor="middle" font-size="10" fill="white">+</text>
                
                <circle cx="40" cy="30" r="15" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="40" y="35" text-anchor="middle" font-size="10" fill="white">+</text>
                
                <!-- Delocalized electrons -->
                <circle cx="-20" cy="-15" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="15" cy="-20" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="-15" cy="5" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="20" cy="10" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="-25" cy="20" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="25" cy="-5" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="0" cy="-15" r="5" fill="#ff6b6b" opacity="0.7"/>
                <circle cx="10" cy="20" r="5" fill="#ff6b6b" opacity="0.7"/>
                
                <!-- Labels -->
                <text x="-80" y="-40" text-anchor="middle" font-size="10" fill="#1565c0">Positive ions</text>
                <text x="-80" y="-25" text-anchor="middle" font-size="10" fill="#1565c0">in a "sea" of</text>
                <text x="-80" y="-10" text-anchor="middle" font-size="10" fill="#1565c0">delocalized</text>
                <text x="-80" y="5" text-anchor="middle" font-size="10" fill="#1565c0">electrons</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Chemical Properties of Metals",
        objective: "obj_003",
        text: `
          <h3>Chemical Properties of Metals</h3>
          <p>Metals are reactive because they lose electrons to form positive ions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Reactions</h4>
              <ul>
                <li>• <strong>React with oxygen:</strong> Forms metal oxides</li>
                <li>• <strong>React with water:</strong> Forms metal hydroxides + H₂</li>
                <li>• <strong>React with acids:</strong> Forms salts + H₂</li>
                <li>• <strong>Displacement:</strong> More reactive displaces less reactive</li>
                <li>• <strong>Form ionic compounds:</strong> M → Mⁿ⁺ + ne⁻</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reactivity Trends</h4>
              <ul>
                <li>• Metals lose electrons (oxidation)</li>
                <li>• More reactive = lose electrons easier</li>
                <li>• Reactivity decreases across period</li>
                <li>• Reactivity increases down group</li>
                <li>• Relates to ionization energy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Reactivity Series",
        objective: "obj_004",
        text: `
          <h3>The Reactivity Series</h3>
          <p>The reactivity series lists metals in order of their reactivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Reactivity Series</h4>
              <ul>
                <li>• <strong>Potassium (K)</strong> - Most reactive</li>
                <li>• <strong>Sodium (Na)</strong></li>
                <li>• <strong>Calcium (Ca)</strong></li>
                <li>• <strong>Magnesium (Mg)</strong></li>
                <li>• <strong>Aluminum (Al)</strong></li>
                <li>• <strong>Zinc (Zn)</strong></li>
                <li>• <strong>Iron (Fe)</strong></li>
                <li>• <strong>Lead (Pb)</strong></li>
                <li>• <strong>Copper (Cu)</strong></li>
                <li>• <strong>Silver (Ag)</strong></li>
                <li>• <strong>Gold (Au)</strong> - Least reactive</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• More reactive = lower ionization energy</li>
                <li>• More reactive = loses electrons more easily</li>
                <li>• Higher metals displace lower metals</li>
                <li>• Reactivity determines extraction method</li>
                <li>• Reactivity determines reactions with acids</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="500" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Reactivity Series</text>
              
              <!-- List -->
              <g transform="translate(200, 60)">
                <rect x="-80" y="0" width="160" height="30" rx="3" fill="#ef5350" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="20" text-anchor="middle" font-size="13" fill="white">K - Potassium</text>
                
                <rect x="-80" y="32" width="160" height="30" rx="3" fill="#ef5350" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="52" text-anchor="middle" font-size="13" fill="white">Na - Sodium</text>
                
                <rect x="-80" y="64" width="160" height="30" rx="3" fill="#ff8a65" stroke="#e65100" stroke-width="1.5"/>
                <text x="0" y="84" text-anchor="middle" font-size="13" fill="white">Ca - Calcium</text>
                
                <rect x="-80" y="96" width="160" height="30" rx="3" fill="#ff8a65" stroke="#e65100" stroke-width="1.5"/>
                <text x="0" y="116" text-anchor="middle" font-size="13" fill="white">Mg - Magnesium</text>
                
                <rect x="-80" y="128" width="160" height="30" rx="3" fill="#ffb74d" stroke="#ef6c00" stroke-width="1.5"/>
                <text x="0" y="148" text-anchor="middle" font-size="13" fill="white">Al - Aluminum</text>
                
                <rect x="-80" y="160" width="160" height="30" rx="3" fill="#ffb74d" stroke="#ef6c00" stroke-width="1.5"/>
                <text x="0" y="180" text-anchor="middle" font-size="13" fill="white">Zn - Zinc</text>
                
                <rect x="-80" y="192" width="160" height="30" rx="3" fill="#ffcc80" stroke="#f57f17" stroke-width="1.5"/>
                <text x="0" y="212" text-anchor="middle" font-size="13" fill="white">Fe - Iron</text>
                
                <rect x="-80" y="224" width="160" height="30" rx="3" fill="#ffcc80" stroke="#f57f17" stroke-width="1.5"/>
                <text x="0" y="244" text-anchor="middle" font-size="13" fill="white">Pb - Lead</text>
                
                <rect x="-80" y="256" width="160" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                <text x="0" y="276" text-anchor="middle" font-size="13" fill="white">Cu - Copper</text>
                
                <rect x="-80" y="288" width="160" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                <text x="0" y="308" text-anchor="middle" font-size="13" fill="white">Ag - Silver</text>
                
                <rect x="-80" y="320" width="160" height="30" rx="3" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
                <text x="0" y="340" text-anchor="middle" font-size="13" fill="white">Au - Gold</text>
                
                <!-- Decreasing reactivity arrow -->
                <text x="90" y="180" font-size="12" fill="#1565c0">Reactivity ↓</text>
                <line x1="90" y1="160" x2="90" y2="200" stroke="#1565c0" stroke-width="2"/>
                <polygon points="90,200 85,190 95,190" fill="#1565c0"/>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Reactions with Water",
        objective: "obj_005",
        text: `
          <h3>Metals + Water Reactions</h3>
          <p>Different metals react with water at different rates.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Reaction</h4>
              <ul>
                <li>• <strong>Metal + Water → Metal Hydroxide + Hydrogen</strong></li>
                <li>• 2Na + 2H₂O → 2NaOH + H₂</li>
                <li>• Ca + 2H₂O → Ca(OH)₂ + H₂</li>
                <li>• Mg + 2H₂O → Mg(OH)₂ + H₂ (slow)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Observations</h4>
              <ul>
                <li>• <strong>K, Na:</strong> Vigorous reaction, flame</li>
                <li>• <strong>Ca:</strong> Steady reaction, bubbles</li>
                <li>• <strong>Mg:</strong> Slow reaction (with steam)</li>
                <li>• <strong>Zn, Fe:</strong> Very slow or no reaction</li>
                <li>• <strong>Cu, Ag, Au:</strong> No reaction</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Reactions with Acids",
        objective: "obj_006",
        text: `
          <h3>Metals + Acids Reactions</h3>
          <p>Metals react with acids to produce salts and hydrogen gas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Reaction</h4>
              <ul>
                <li>• <strong>Metal + Acid → Salt + Hydrogen</strong></li>
                <li>• Zn + 2HCl → ZnCl₂ + H₂</li>
                <li>• Mg + 2HCl → MgCl₂ + H₂</li>
                <li>• Fe + H₂SO₄ → FeSO₄ + H₂</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Observations</h4>
              <ul>
                <li>• <strong>Reactive metals:</strong> Vigorous fizzing</li>
                <li>• <strong>Less reactive:</strong> Slow bubbling</li>
                <li>• <strong>Unreactive:</strong> No reaction</li>
                <li>• <strong>Cu, Ag, Au:</strong> No reaction with acids</li>
                <li>• Hydrogen gas test: Squeaky pop</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Reactions with Oxygen",
        objective: "obj_007",
        text: `
          <h3>Metals + Oxygen Reactions</h3>
          <p>Metals react with oxygen to form metal oxides.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Reaction</h4>
              <ul>
                <li>• <strong>Metal + Oxygen → Metal Oxide</strong></li>
                <li>• 2Mg + O₂ → 2MgO</li>
                <li>• 4Fe + 3O₂ → 2Fe₂O₃</li>
                <li>• 2Cu + O₂ → 2CuO</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Observations</h4>
              <ul>
                <li>• <strong>Mg:</strong> Bright white flame</li>
                <li>• <strong>Fe:</strong> Orange sparks</li>
                <li>• <strong>Cu:</strong> Black layer forms</li>
                <li>• <strong>Al:</strong> Protective oxide layer</li>
                <li>• <strong>Au, Pt:</strong> No reaction</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Displacement Reactions",
        objective: "obj_008",
        text: `
          <h3>Displacement Reactions</h3>
          <p>A more reactive metal displaces a less reactive metal from its salt solution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 General Reaction</h4>
              <ul>
                <li>• <strong>More reactive metal + Salt → Salt + Less reactive metal</strong></li>
                <li>• Zn + CuSO₄ → ZnSO₄ + Cu</li>
                <li>• Fe + CuSO₄ → FeSO₄ + Cu</li>
                <li>• Mg + ZnSO₄ → MgSO₄ + Zn</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Observations</h4>
              <ul>
                <li>• Blue solution fades (Cu²⁺ removed)</li>
                <li>• Copper deposits (red-brown solid)</li>
                <li>• Metal dissolves</li>
                <li>• Temperature increases (exothermic)</li>
                <li>• Displacement indicates reactivity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Extraction of Metals",
        objective: "obj_009",
        text: `
          <h3>Extraction of Metals</h3>
          <p>Metals are extracted from their ores based on their reactivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Methods</h4>
              <ul>
                <li>• <strong>Very reactive (K, Na, Ca, Mg, Al):</strong></li>
                <li>• Electrolysis of molten ores</li>
                <li>• <strong>Medium (Zn, Fe, Cu):</strong></li>
                <li>• Reduction with carbon</li>
                <li>• <strong>Unreactive (Ag, Au, Pt):</strong></li>
                <li>• Found native (uncombined)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Aluminum:</strong> Electrolysis of Al₂O₃</li>
                <li>• <strong>Iron:</strong> Blast furnace (carbon reduction)</li>
                <li>• <strong>Copper:</strong> Carbon reduction or electrolysis</li>
                <li>• <strong>Gold:</strong> Found as native metal</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Corrosion and Rusting",
        objective: "obj_014",
        text: `
          <h3>Corrosion and Rusting</h3>
          <p><strong>Corrosion</strong> is the gradual destruction of metals by chemical reactions. <strong>Rusting</strong> is the corrosion of iron.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Conditions for Rusting</h4>
              <ul>
                <li>• <strong>Iron + Oxygen + Water → Hydrated Iron(III) Oxide</strong></li>
                <li>• 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃</li>
                <li>• Both oxygen and water are required</li>
                <li>• Salt speeds up rusting</li>
                <li>• Acidic conditions speed up rusting</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Prevention Methods</h4>
              <ul>
                <li>• <strong>Painting:</strong> Barrier</li>
                <li>• <strong>Oiling/greasing:</strong> Barrier</li>
                <li>• <strong>Galvanizing:</strong> Zinc coating</li>
                <li>• <strong>Sacrificial protection:</strong> More reactive metal</li>
                <li>• <strong>Alloying:</strong> Stainless steel</li>
                <li>• <strong>Electroplating:</strong> Coating with another metal</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Uses of Metals",
        objective: "obj_013",
        text: `
          <h3>Uses of Metals</h3>
          <p>Metals are used based on their properties.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Metal</th>
                <th class="border p-2">Key Property</th>
                <th class="border p-2">Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Iron</td>
                <td class="border p-2">Strength, relatively cheap</td>
                <td class="border p-2">Steel, construction, cars</td>
              </tr>
              <tr>
                <td class="border p-2">Aluminum</td>
                <td class="border p-2">Lightweight, corrosion resistant</td>
                <td class="border p-2">Aircraft, cans, foil</td>
              </tr>
              <tr>
                <td class="border p-2">Copper</td>
                <td class="border p-2">Excellent conductor</td>
                <td class="border p-2">Electrical wires, plumbing</td>
              </tr>
              <tr>
                <td class="border p-2">Gold</td>
                <td class="border p-2">Unreactive, shiny</td>
                <td class="border p-2">Jewelry, electronics</td>
              </tr>
              <tr>
                <td class="border p-2">Silver</td>
                <td class="border p-2">Best conductor, unreactive</td>
                <td class="border p-2">Jewelry, electronics</td>
              </tr>
              <tr>
                <td class="border p-2">Zinc</td>
                <td class="border p-2">Corrosion resistant</td>
                <td class="border p-2">Galvanizing, batteries</td>
              </tr>
            </tbody>
          </table>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔩 Metals</h4>
          <ul>
            <li>• Good conductors, malleable, ductile</li>
            <li>• Reactivity series: K → Au</li>
            <li>• React with O₂, H₂O, acids</li>
            <li>• Displacement reactions</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Corrosion: Rusting of iron</li>
            <li>• Extraction depends on reactivity</li>
            <li>• Uses based on properties</li>
            <li>• Alloys improve properties</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Metals are essential to modern life. Understanding their properties and reactions is key to using them effectively.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All metals react with acids",
        correction: "Only reactive metals react with acids",
        explanation: "Copper, silver, and gold do not react with dilute acids."
      },
      {
        id: "mis_002",
        misconception: "All metals are magnetic",
        correction: "Only iron, nickel, and cobalt are magnetic",
        explanation: "Most metals are not magnetic."
      },
      {
        id: "mis_003",
        misconception: "Rusting requires only oxygen",
        correction: "Rusting requires both oxygen and water",
        explanation: "Both oxygen and water are needed for iron to rust."
      },
      {
        id: "mis_004",
        misconception: "Alloys are less useful than pure metals",
        correction: "Alloys often have improved properties",
        explanation: "Alloys are designed to be stronger, more resistant, etc."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Construction",
        description: "Metals are used in building structures.",
        example: "Steel beams, iron frames"
      },
      {
        id: "app_002",
        title: "Electronics",
        description: "Metals conduct electricity.",
        example: "Copper wires, gold contacts"
      },
      {
        id: "app_003",
        title: "Transportation",
        description: "Metals are used in vehicles.",
        example: "Aluminum frames, steel bodies"
      },
      {
        id: "app_004",
        title: "Medicine",
        description: "Metals are used in medical devices.",
        example: "Stainless steel tools, titanium implants"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Metal", definition: "An element that is a good conductor of heat and electricity." },
    { term: "Malleable", definition: "Can be hammered into shapes." },
    { term: "Ductile", definition: "Can be drawn into wires." },
    { term: "Metallic Bonding", definition: "Bonding between metal ions and delocalized electrons." },
    { term: "Reactivity Series", definition: "List of metals in order of reactivity." },
    { term: "Displacement", definition: "A more reactive metal displaces a less reactive one." },
    { term: "Corrosion", definition: "The gradual destruction of metals by chemical reactions." },
    { term: "Rusting", definition: "The corrosion of iron." },
    { term: "Galvanizing", definition: "Coating iron with zinc to prevent rusting." },
    { term: "Sacrificial Protection", definition: "Protecting iron with a more reactive metal." },
    { term: "Alloy", definition: "A mixture of metals." },
    { term: "Extraction", definition: "Getting a metal from its ore." },
    { term: "Electrolysis", definition: "Using electricity to extract reactive metals." },
    { term: "Oxidation", definition: "Loss of electrons by a metal." },
    { term: "Ore", definition: "A naturally occurring rock containing a metal compound." },
    { term: "Native Metal", definition: "A metal found in its elemental form." },
    { term: "Solder", definition: "An alloy used for joining metals." },
    { term: "Brass", definition: "An alloy of copper and zinc." },
    { term: "Bronze", definition: "An alloy of copper and tin." },
    { term: "Stainless Steel", definition: "Alloy of iron, chromium, and nickel." }
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
      question: "What is a metal?",
      type: "multiple_choice",
      options: [
        "A non-conducting element",
        "A good conductor of heat and electricity",
        "A gas at room temperature",
        "A type of plastic"
      ],
      answer: "A good conductor of heat and electricity",
      explanation: "Metals are good conductors of heat and electricity."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a physical property of metals?",
      type: "multiple_choice",
      options: [
        "Reacts with acids",
        "Malleable",
        "Burns in oxygen",
        "Displaces other metals"
      ],
      answer: "Malleable",
      explanation: "Malleability is a physical property of metals."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What do metals form when they react with oxygen?",
      type: "multiple_choice",
      options: ["Metal oxide", "Metal hydroxide", "Salt", "Hydrogen"],
      answer: "Metal oxide",
      explanation: "Metals form metal oxides when they react with oxygen."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which metal is the most reactive?",
      type: "multiple_choice",
      options: ["Gold", "Iron", "Copper", "Potassium"],
      answer: "Potassium",
      explanation: "Potassium is at the top of the reactivity series."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the product when sodium reacts with water?",
      type: "multiple_choice",
      options: [
        "Sodium oxide + Hydrogen",
        "Sodium hydroxide + Hydrogen",
        "Sodium chloride + Hydrogen",
        "Sodium + Water"
      ],
      answer: "Sodium hydroxide + Hydrogen",
      explanation: "2Na + 2H₂O → 2NaOH + H₂"
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the product when zinc reacts with hydrochloric acid?",
      type: "multiple_choice",
      options: ["Zinc chloride + H₂", "Zinc oxide + H₂", "Zinc hydroxide + H₂", "Zinc sulfate + H₂"],
      answer: "Zinc chloride + H₂",
      explanation: "Zn + 2HCl → ZnCl₂ + H₂"
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the product when magnesium burns in oxygen?",
      type: "multiple_choice",
      options: ["MgO", "MgO₂", "Mg₂O", "Mg(OH)₂"],
      answer: "MgO",
      explanation: "2Mg + O₂ → 2MgO"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What happens when zinc is added to copper sulfate solution?",
      type: "multiple_choice",
      options: [
        "No reaction",
        "Zinc sulfate + Copper",
        "Copper sulfate + Zinc",
        "Zinc oxide + Copper"
      ],
      answer: "Zinc sulfate + Copper",
      explanation: "Zn + CuSO₄ → ZnSO₄ + Cu"
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How is aluminum extracted from its ore?",
      type: "multiple_choice",
      options: [
        "Reduction with carbon",
        "Electrolysis",
        "Roasting in air",
        "Heating with steam"
      ],
      answer: "Electrolysis",
      explanation: "Aluminum is extracted by electrolysis of molten Al₂O₃."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which element is an alkali metal?",
      type: "multiple_choice",
      options: ["Mg", "Ca", "Na", "Al"],
      answer: "Na",
      explanation: "Sodium (Na) is an alkali metal (Group 1)."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which is an alkaline earth metal?",
      type: "multiple_choice",
      options: ["Li", "Na", "Mg", "K"],
      answer: "Mg",
      explanation: "Magnesium (Mg) is an alkaline earth metal (Group 2)."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which of these is a transition metal?",
      type: "multiple_choice",
      options: ["Na", "Mg", "Fe", "Al"],
      answer: "Fe",
      explanation: "Iron (Fe) is a transition metal."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is copper used in electrical wires?",
      type: "multiple_choice",
      options: [
        "It is cheap",
        "It is a good conductor",
        "It is strong",
        "It is unreactive"
      ],
      answer: "It is a good conductor",
      explanation: "Copper is used in wires because it is an excellent conductor."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is required for iron to rust?",
      type: "multiple_choice",
      options: [
        "Oxygen only",
        "Water only",
        "Oxygen and water",
        "Salt only"
      ],
      answer: "Oxygen and water",
      explanation: "Rusting requires both oxygen and water."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is galvanizing?",
      type: "multiple_choice",
      options: [
        "Coating iron with tin",
        "Coating iron with zinc",
        "Coating iron with copper",
        "Coating iron with gold"
      ],
      answer: "Coating iron with zinc",
      explanation: "Galvanizing is coating iron with zinc to prevent rusting."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_metals",
    title: "Metals Quiz",
    description: "Test your understanding of metals",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a metal?",
        type: "short_answer",
        answer_key: "A good conductor of heat and electricity",
        explanation: "Metals are good conductors of heat and electricity."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name two physical properties of metals.",
        type: "short_answer",
        answer_key: "Malleable and ductile (or any valid)",
        explanation: "Metals are malleable and ductile."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What do metals form when they react with oxygen?",
        type: "short_answer",
        answer_key: "Metal oxide",
        explanation: "Metals form metal oxides with oxygen."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which metal is the most reactive?",
        type: "short_answer",
        answer_key: "Potassium",
        explanation: "Potassium is the most reactive metal."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the product when sodium reacts with water?",
        type: "short_answer",
        answer_key: "Sodium hydroxide + Hydrogen",
        explanation: "2Na + 2H₂O → 2NaOH + H₂"
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the product when zinc reacts with hydrochloric acid?",
        type: "short_answer",
        answer_key: "Zinc chloride + Hydrogen",
        explanation: "Zn + 2HCl → ZnCl₂ + H₂"
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What happens when zinc is added to copper sulfate solution?",
        type: "short_answer",
        answer_key: "Zinc sulfate + Copper",
        explanation: "Zn + CuSO₄ → ZnSO₄ + Cu"
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "How is aluminum extracted from its ore?",
        type: "short_answer",
        answer_key: "Electrolysis",
        explanation: "Aluminum is extracted by electrolysis."
      },
      {
        id: "ass_009",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is required for iron to rust?",
        type: "short_answer",
        answer_key: "Oxygen and water",
        explanation: "Rusting requires both oxygen and water."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is galvanizing?",
        type: "short_answer",
        answer_key: "Coating iron with zinc",
        explanation: "Galvanizing is coating iron with zinc."
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
        "Understand the properties of metals",
        "Explain the reactivity series",
        "Describe reactions of metals",
        "Understand corrosion and prevention"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are metals?" },
        { time: "5-10 min", activity: "Direct Instruction - Physical Properties" },
        { time: "10-15 min", activity: "Direct Instruction - Chemical Properties" },
        { time: "15-20 min", activity: "Direct Instruction - Reactivity Series" },
        { time: "20-25 min", activity: "Direct Instruction - Reactions with Water, Acids, Oxygen" },
        { time: "25-30 min", activity: "Direct Instruction - Displacement Reactions" },
        { time: "30-35 min", activity: "Direct Instruction - Corrosion and Prevention" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A good conductor of heat and electricity",
        prac_002: "Malleable",
        prac_003: "Metal oxide",
        prac_004: "Potassium",
        prac_005: "Sodium hydroxide + Hydrogen",
        prac_006: "Zinc chloride + H₂",
        prac_007: "MgO",
        prac_008: "Zinc sulfate + Copper",
        prac_009: "Electrolysis",
        prac_010: "Na",
        prac_011: "Mg",
        prac_012: "Fe",
        prac_013: "It is a good conductor",
        prac_014: "Oxygen and water",
        prac_015: "Coating iron with zinc"
      },
      assessment: {
        ass_001: "A good conductor of heat and electricity",
        ass_002: "Malleable and ductile (or any valid)",
        ass_003: "Metal oxide",
        ass_004: "Potassium",
        ass_005: "Sodium hydroxide + Hydrogen",
        ass_006: "Zinc chloride + Hydrogen",
        ass_007: "Zinc sulfate + Copper",
        ass_008: "Electrolysis",
        ass_009: "Oxygen and water",
        ass_010: "Coating iron with zinc"
      }
    },
    extensionActivities: [
      "Research corrosion prevention in industry",
      "Study the extraction of a specific metal",
      "Investigate alloys and their uses",
      "Research the history of metallurgy"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research electrochemical series",
        "Study metallurgy",
        "Research corrosion mechanisms",
        "Study alloy design"
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
      title: "Metallic Bonding",
      description: "Diagram showing metallic bonding",
      url: "/diagrams/metallic-bonding.png",
      alt: "Metallic bonding diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Reactivity Series",
      description: "Chart of the reactivity series",
      url: "/diagrams/reactivity-series.png",
      alt: "Reactivity series chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Extraction Methods",
      description: "Diagram showing metal extraction methods",
      url: "/diagrams/extraction-methods.png",
      alt: "Extraction methods diagram"
    }
  ]
};