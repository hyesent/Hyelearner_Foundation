// Location: src/data/lessons/science/chemistry/inorganic_chemistry/non_metals.js

export default {
  id: "chem_lesson_non_metals",
  subject: "Chemistry",
  topic: "Inorganic Chemistry",
  name: "Non-Metals and Their Compounds",
  icon: "💨",
  grade_level: "SS1 - SS3",
  estimated_duration: "55 minutes",

  progress: {
    totalObjectives: 20,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of the periodic table",
    "Knowledge of atomic structure",
    "Understanding of chemical bonding",
    "Basic knowledge of elements"
  ],

  nextLessons: [
    {
      name: "Metals and Extraction",
      file: "science/chemistry/inorganic_chemistry/metals.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define non-metals and identify their location on the periodic table",
      indicator: "Student can identify non-metals on the periodic table"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "List the physical properties of non-metals",
      indicator: "Student can describe the physical properties of non-metals"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "List the chemical properties of non-metals",
      indicator: "Student can describe the chemical properties of non-metals"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify the common non-metals in everyday life",
      indicator: "Student can name common non-metals and their uses"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the structure and properties of hydrogen",
      indicator: "Student can describe hydrogen and its compounds"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the structure and properties of oxygen",
      indicator: "Student can describe oxygen and its compounds"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the structure and properties of nitrogen",
      indicator: "Student can describe nitrogen and its compounds"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the structure and properties of the halogens",
      indicator: "Student can describe halogens and their compounds"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the structure and properties of sulfur",
      indicator: "Student can describe sulfur and its compounds"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the structure and properties of phosphorus",
      indicator: "Student can describe phosphorus and its compounds"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the structure and properties of carbon",
      indicator: "Student can describe carbon and its allotropes"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Compare and contrast the properties of non-metals",
      indicator: "Student can compare different non-metals"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the reactions of non-metals with metals",
      indicator: "Student can describe reactions between non-metals and metals"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the industrial production and uses of non-metals",
      indicator: "Student can describe industrial applications of non-metals"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the environmental impact of non-metal compounds",
      indicator: "Student can describe environmental issues related to non-metals"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the oxides of non-metals and their properties",
      indicator: "Student can describe acidic oxides of non-metals"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the hydrogen compounds of non-metals",
      indicator: "Student can describe hydrides of non-metals"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the reactivity trends in non-metals",
      indicator: "Student can explain reactivity trends in non-metals"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Explain the role of non-metals in biological systems",
      indicator: "Student can explain the importance of non-metals in biology"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Solve problems involving non-metal compounds",
      indicator: "Student can solve problems related to non-metal compounds"
    }
  ],

  video: {
    id: "vid_001",
    title: "Non-Metals and Their Compounds",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about non-metals, their properties, and compounds."
  },

  content: {
    introduction: `
      <h2>What are Non-Metals?</h2>
      <p><strong>Non-metals</strong> are elements that are poor conductors of heat and electricity, are usually gases or brittle solids, and form acidic oxides. They are located on the right side of the periodic table.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">💨 Gases</h3>
          <ul>
            <li>• Hydrogen (H₂)</li>
            <li>• Oxygen (O₂)</li>
            <li>• Nitrogen (N₂)</li>
            <li>• Halogens (F₂, Cl₂)</li>
            <li>• Noble gases</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🧊 Solids</h3>
          <ul>
            <li>• Carbon (C)</li>
            <li>• Sulfur (S)</li>
            <li>• Phosphorus (P)</li>
            <li>• Iodine (I₂)</li>
            <li>• Silicon (Si)</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Common Non-Metals</h3>
          <ul>
            <li>• H, C, N, O, P, S</li>
            <li>• F, Cl, Br, I</li>
            <li>• He, Ne, Ar, Kr, Xe</li>
            <li>• Si, Se, Te</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Non-Metals on the Periodic Table</text>
          
          <!-- Simplified periodic table outline -->
          <rect x="50" y="60" width="500" height="180" fill="none" stroke="#2c3e50" stroke-width="2" rx="5"/>
          
          <!-- Non-metal region - right side -->
          <rect x="350" y="60" width="200" height="180" fill="#bbdefb" opacity="0.3" rx="5"/>
          <text x="450" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1565c0">Non-Metals</text>
          
          <!-- Representative non-metals -->
          <text x="380" y="110" font-family="Arial, sans-serif" font-size="14" fill="#e74c3c">H</text>
          <text x="440" y="110" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">C</text>
          <text x="480" y="110" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">N</text>
          <text x="520" y="110" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">O</text>
          
          <text x="400" y="140" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">P</text>
          <text x="440" y="140" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">S</text>
          <text x="520" y="140" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">F</text>
          
          <text x="400" y="170" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Cl</text>
          <text x="480" y="170" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Ar</text>
          
          <text x="440" y="200" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Br</text>
          <text x="520" y="200" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Kr</text>
          
          <text x="480" y="230" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">I</text>
          
          <!-- Legend -->
          <text x="60" y="260" font-size="10" fill="#2c3e50">✓ Non-metals are on the right side of the periodic table</text>
          <text x="60" y="275" font-size="10" fill="#2c3e50">✓ They are poor conductors and form acidic oxides</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Properties of Non-Metals",
        objective: "obj_002",
        text: `
          <h3>Physical and Chemical Properties</h3>
          <p>Non-metals have distinct physical and chemical properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Properties</h4>
              <ul>
                <li>• <strong>State:</strong> Gases, liquids, or brittle solids</li>
                <li>• <strong>Appearance:</strong> Dull (not shiny)</li>
                <li>• <strong>Conductivity:</strong> Poor conductors of heat and electricity</li>
                <li>• <strong>Malleability:</strong> Brittle in solid form</li>
                <li>• <strong>Density:</strong> Low density</li>
                <li>• <strong>Melting/Boiling:</strong> Low melting and boiling points</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemical Properties</h4>
              <ul>
                <li>• <strong>Valence electrons:</strong> 4-8 electrons</li>
                <li>• <strong>Reaction with metals:</strong> Form ionic compounds</li>
                <li>• <strong>Reaction with non-metals:</strong> Form covalent compounds</li>
                <li>• <strong>Oxides:</strong> Acidic oxides</li>
                <li>• <strong>Reactivity:</strong> Varies across groups</li>
                <li>• <strong>Electronegativity:</strong> High electronegativity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Hydrogen",
        objective: "obj_005",
        text: `
          <h3>Hydrogen</h3>
          <p><strong>Hydrogen (H)</strong> is the most abundant element in the universe. It is a colourless, odourless gas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Atomic number: 1</li>
                <li>• Electronic configuration: 1</li>
                <li>• Valency: 1</li>
                <li>• Diatomic gas: H₂</li>
                <li>• Lightest element</li>
                <li>• Highly flammable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Water (H₂O)</li>
                <li>• Ammonia (NH₃)</li>
                <li>• Hydrochloric acid (HCl)</li>
                <li>• Hydrogen peroxide (H₂O₂)</li>
                <li><strong>Uses:</strong></li>
                <li>• Fuel cells</li>
                <li>• Hydrogenation of oils</li>
                <li>• Production of ammonia</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Oxygen",
        objective: "obj_006",
        text: `
          <h3>Oxygen</h3>
          <p><strong>Oxygen (O)</strong> is essential for life. It is a colourless, odourless gas that supports combustion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Atomic number: 8</li>
                <li>• Electronic configuration: 2,6</li>
                <li>• Valency: 2</li>
                <li>• Diatomic gas: O₂</li>
                <li>• Supports combustion</li>
                <li>• 21% of atmosphere</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Water (H₂O)</li>
                <li>• Carbon dioxide (CO₂)</li>
                <li>• Oxides of metals</li>
                <li>• Ozone (O₃)</li>
                <li><strong>Uses:</strong></li>
                <li>• Respiration</li>
                <li>• Combustion</li>
                <li>• Medical oxygen</li>
                <li>• Steel production</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Nitrogen",
        objective: "obj_007",
        text: `
          <h3>Nitrogen</h3>
          <p><strong>Nitrogen (N)</strong> is a colourless, odourless gas that makes up 78% of the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Atomic number: 7</li>
                <li>• Electronic configuration: 2,5</li>
                <li>• Valency: 3</li>
                <li>• Diatomic gas: N₂</li>
                <li>• Inert due to strong N≡N bond</li>
                <li>• 78% of atmosphere</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Ammonia (NH₃)</li>
                <li>• Nitric acid (HNO₃)</li>
                <li>• Nitrogen oxides (NOₓ)</li>
                <li>• Fertilizers</li>
                <li><strong>Uses:</strong></li>
                <li>• Fertilizer production</li>
                <li>• Liquid nitrogen</li>
                <li>• Explosives</li>
                <li>• Food preservation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Halogens",
        objective: "obj_008",
        text: `
          <h3>Halogens (Group 17)</h3>
          <p>The <strong>halogens</strong> are highly reactive non-metals in Group 17 of the periodic table.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• 7 valence electrons</li>
                <li>• Diatomic molecules: F₂, Cl₂, Br₂, I₂</li>
                <li>• Reactivity decreases down the group</li>
                <li>• Coloured elements</li>
                <li>• Toxic</li>
                <li>• Form salts with metals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Members</h4>
              <ul>
                <li><strong>Fluorine (F₂):</strong> Pale yellow gas</li>
                <li><strong>Chlorine (Cl₂):</strong> Greenish-yellow gas</li>
                <li><strong>Bromine (Br₂):</strong> Red-brown liquid</li>
                <li><strong>Iodine (I₂):</strong> Dark grey solid</li>
                <li><strong>Astatine (At):</strong> Radioactive</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Reactions:</strong>
            <ul>
              <li>• <strong>With metals:</strong> 2Na + Cl₂ → 2NaCl</li>
              <li>• <strong>With hydrogen:</strong> H₂ + Cl₂ → 2HCl</li>
              <li>• <strong>Displacement reactions:</strong> Cl₂ + 2KBr → 2KCl + Br₂</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sulfur",
        objective: "obj_009",
        text: `
          <h3>Sulfur</h3>
          <p><strong>Sulfur (S)</strong> is a yellow, brittle solid that is essential in many industrial processes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Atomic number: 16</li>
                <li>• Electronic configuration: 2,8,6</li>
                <li>• Valency: 2,4,6</li>
                <li>• Yellow solid</li>
                <li>• S₈ molecules</li>
                <li>• Found as sulfur and sulfides</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Sulfuric acid (H₂SO₄)</li>
                <li>• Sulfur dioxide (SO₂)</li>
                <li>• Hydrogen sulfide (H₂S)</li>
                <li>• Sulfates</li>
                <li><strong>Uses:</strong></li>
                <li>• Sulfuric acid production</li>
                <li>• Vulcanization of rubber</li>
                <li>• Fertilizers</li>
                <li>• Gunpowder</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Phosphorus",
        objective: "obj_010",
        text: `
          <h3>Phosphorus</h3>
          <p><strong>Phosphorus (P)</strong> is a highly reactive non-metal with several allotropes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties</h4>
              <ul>
                <li>• Atomic number: 15</li>
                <li>• Electronic configuration: 2,8,5</li>
                <li>• Valency: 3,5</li>
                <li>• Allotropes: White, red, black</li>
                <li>• White phosphorus is highly reactive</li>
                <li>• Red phosphorus is stable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Phosphoric acid (H₃PO₄)</li>
                <li>• Phosphates (PO₄³⁻)</li>
                <li>• Phosphine (PH₃)</li>
                <li><strong>Uses:</strong></li>
                <li>• Fertilizers</li>
                <li>• Matchsticks</li>
                <li>• Fireworks</li>
                <li>• Detergents</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Carbon",
        objective: "obj_011",
        text: `
          <h3>Carbon</h3>
          <p><strong>Carbon (C)</strong> is the basis of organic chemistry and has several important allotropes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Allotropes of Carbon</h4>
              <ul>
                <li><strong>Diamond:</strong></li>
                <li>• Tetrahedral structure</li>
                <li>• Hardest natural substance</li>
                <li>• Insulator</li>
                <li><strong>Graphite:</strong></li>
                <li>• Layered structure</li>
                <li>• Soft and slippery</li>
                <li>• Conductor</li>
                <li><strong>Fullerenes:</strong></li>
                <li>• C₆₀ molecules</li>
                <li>• Football-shaped</li>
                <li><strong>Graphene:</strong></li>
                <li>• Single layer of graphite</li>
                <li>• Very strong</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Compounds and Uses</h4>
              <ul>
                <li><strong>Compounds:</strong></li>
                <li>• Carbon dioxide (CO₂)</li>
                <li>• Carbon monoxide (CO)</li>
                <li>• Carbonates (CO₃²⁻)</li>
                <li>• Organic compounds</li>
                <li><strong>Uses:</strong></li>
                <li>• Fuel (coal, charcoal)</li>
                <li>• Diamond tools</li>
                <li>• Graphite lubricants</li>
                <li>• Carbon fibre</li>
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
          <h4>💨 Non-Metals</h4>
          <ul>
            <li>• Poor conductors of heat and electricity</li>
            <li>• Form acidic oxides</li>
            <li>• Located on the right side of the periodic table</li>
            <li>• Gases, liquids, or brittle solids</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Non-Metals</h4>
          <ul>
            <li>• Hydrogen, Oxygen, Nitrogen</li>
            <li>• Halogens: F, Cl, Br, I</li>
            <li>• Sulfur, Phosphorus, Carbon</li>
            <li>• Essential for life and industry</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Non-metals are essential for life and modern industry. They form compounds that are crucial for biological systems, materials, and energy production.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "All non-metals are gases",
        correction: "Non-metals can be solids (carbon, sulfur), liquids (bromine), or gases",
        explanation: "Non-metals exist in all three states at room temperature."
      },
      {
        id: "mis_002",
        misconception: "Non-metals are not essential for life",
        correction: "Non-metals like oxygen, carbon, nitrogen, and hydrogen are essential for life",
        explanation: "These elements form the building blocks of biological molecules."
      },
      {
        id: "mis_003",
        misconception: "Non-metals are not found in the Earth's crust",
        correction: "Non-metals like oxygen, carbon, and sulfur are abundant in the Earth's crust",
        explanation: "Oxygen is the most abundant element in the crust."
      },
      {
        id: "mis_004",
        misconception: "All non-metal oxides are acidic",
        correction: "Most non-metal oxides are acidic, but some are neutral (NO, CO)",
        explanation: "Carbon monoxide and nitrogen monoxide are neutral oxides."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Fertilizer Production",
        description: "Nitrogen and phosphorus are essential for fertilizers.",
        example: "Ammonia, phosphates, and nitrates."
      },
      {
        id: "app_002",
        title: "Industrial Chemicals",
        description: "Non-metals are used in the production of many chemicals.",
        example: "Sulfuric acid, nitric acid, and hydrochloric acid."
      },
      {
        id: "app_003",
        title: "Energy Production",
        description: "Non-metals are used in fuels and energy systems.",
        example: "Hydrogen fuel cells, carbon-based fuels."
      },
      {
        id: "app_004",
        title: "Medicine",
        description: "Non-metals are used in pharmaceuticals and medicine.",
        example: "Oxygen therapy, iodine antiseptics."
      }
    ]
  },

  keyTerms: [
    { term: "Non-metal", definition: "An element that is a poor conductor of heat and electricity." },
    { term: "Halogen", definition: "A Group 17 non-metal element." },
    { term: "Allotrope", definition: "Different structural forms of the same element." },
    { term: "Acidic Oxide", definition: "An oxide that reacts with water to form an acid." },
    { term: "Diatomic Molecule", definition: "A molecule containing two atoms." },
    { term: "Valence Electron", definition: "An electron in the outermost shell." },
    { term: "Electronegativity", definition: "The ability of an atom to attract electrons." },
    { term: "Oxide", definition: "A compound containing oxygen and another element." },
    { term: "Hydride", definition: "A compound containing hydrogen and another element." },
    { term: "Sulfuric Acid", definition: "H₂SO₄, an important industrial chemical." },
    { term: "Ammonia", definition: "NH₃, a compound of nitrogen and hydrogen." },
    { term: "Carbon Dioxide", definition: "CO₂, a compound of carbon and oxygen." },
    { term: "Phosphoric Acid", definition: "H₃PO₄, an important acid used in fertilizers." },
    { term: "Chlorine", definition: "A greenish-yellow halogen gas." },
    { term: "Sulfur", definition: "A yellow non-metal solid." },
    { term: "Carbon", definition: "A non-metal that forms the basis of organic chemistry." },
    { term: "Ozone", definition: "O₃, a form of oxygen with three atoms." },
    { term: "Oxidation", definition: "The loss of electrons or gain of oxygen." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "Where are non-metals located on the periodic table?",
      type: "multiple_choice",
      options: ["Left side", "Right side", "Middle", "All over"],
      answer: "Right side",
      explanation: "Non-metals are located on the right side of the periodic table."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a physical property of non-metals?",
      type: "multiple_choice",
      options: ["Good conductor", "Shiny", "Brittle", "Malleable"],
      answer: "Brittle",
      explanation: "Non-metals are brittle in solid form."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What type of oxides do non-metals form?",
      type: "multiple_choice",
      options: ["Basic oxides", "Acidic oxides", "Amphoteric oxides", "Neutral oxides"],
      answer: "Acidic oxides",
      explanation: "Non-metals form acidic oxides."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the most abundant element in the universe?",
      type: "multiple_choice",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon"],
      answer: "Hydrogen",
      explanation: "Hydrogen is the most abundant element in the universe."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "What percentage of the atmosphere is oxygen?",
      type: "multiple_choice",
      options: ["21%", "78%", "1%", "50%"],
      answer: "21%",
      explanation: "Oxygen makes up about 21% of the atmosphere."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What percentage of the atmosphere is nitrogen?",
      type: "multiple_choice",
      options: ["21%", "78%", "1%", "50%"],
      answer: "78%",
      explanation: "Nitrogen makes up about 78% of the atmosphere."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which halogen is a liquid at room temperature?",
      type: "multiple_choice",
      options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
      answer: "Bromine",
      explanation: "Bromine (Br₂) is a red-brown liquid at room temperature."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is the colour of sulfur?",
      type: "multiple_choice",
      options: ["White", "Yellow", "Red", "Black"],
      answer: "Yellow",
      explanation: "Sulfur is a yellow solid."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which allotrope of phosphorus is highly reactive?",
      type: "multiple_choice",
      options: ["Red phosphorus", "White phosphorus", "Black phosphorus", "All are the same"],
      answer: "White phosphorus",
      explanation: "White phosphorus is highly reactive and ignites spontaneously in air."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which allotrope of carbon is the hardest natural substance?",
      type: "multiple_choice",
      options: ["Graphite", "Diamond", "Fullerene", "Graphene"],
      answer: "Diamond",
      explanation: "Diamond is the hardest natural substance known."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which is more reactive, chlorine or iodine?",
      type: "multiple_choice",
      options: ["Chlorine", "Iodine", "Both are equal", "Neither"],
      answer: "Chlorine",
      explanation: "Chlorine is more reactive than iodine."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the product of the reaction between sodium and chlorine?",
      type: "multiple_choice",
      options: ["NaCl", "NaCl₂", "Na₂Cl", "Na₂Cl₂"],
      answer: "NaCl",
      explanation: "Sodium chloride (NaCl) is formed when sodium reacts with chlorine."
    }
  ],

  assessment: {
    id: "assess_non_metals",
    title: "Non-Metals Quiz",
    description: "Test your understanding of non-metals and their compounds",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Where are non-metals located on the periodic table?",
        type: "short_answer",
        answer_key: "Right side",
        explanation: "Non-metals are on the right side of the periodic table."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "List two physical properties of non-metals.",
        type: "short_answer",
        answer_key: "Poor conductors and brittle (or dull, low density)",
        explanation: "Non-metals are poor conductors, brittle, and dull."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What type of oxides do non-metals form?",
        type: "short_answer",
        answer_key: "Acidic oxides",
        explanation: "Non-metals form acidic oxides."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the most abundant element in the universe?",
        type: "short_answer",
        answer_key: "Hydrogen",
        explanation: "Hydrogen is the most abundant element."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What percentage of the atmosphere is oxygen?",
        type: "short_answer",
        answer_key: "21%",
        explanation: "Oxygen makes up 21% of the atmosphere."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What percentage of the atmosphere is nitrogen?",
        type: "short_answer",
        answer_key: "78%",
        explanation: "Nitrogen makes up 78% of the atmosphere."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "Which halogen is a liquid at room temperature?",
        type: "short_answer",
        answer_key: "Bromine",
        explanation: "Bromine is the only halogen that is liquid at room temperature."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "medium",
        question: "What is the colour of sulfur?",
        type: "short_answer",
        answer_key: "Yellow",
        explanation: "Sulfur is a yellow solid."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Which allotrope of carbon is the hardest?",
        type: "short_answer",
        answer_key: "Diamond",
        explanation: "Diamond is the hardest natural substance."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Which is more reactive, chlorine or bromine?",
        type: "short_answer",
        answer_key: "Chlorine",
        explanation: "Chlorine is more reactive than bromine."
      },
      {
        id: "ass_011",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the product of sodium reacting with chlorine?",
        type: "short_answer",
        answer_key: "Sodium chloride (NaCl)",
        explanation: "Sodium chloride is formed when sodium reacts with chlorine."
      },
      {
        id: "ass_012",
        objective: "obj_016",
        difficulty: "hard",
        question: "Why are non-metal oxides acidic?",
        type: "short_answer",
        answer_key: "They react with water to form acids",
        explanation: "Non-metal oxides are acidic because they react with water to form acids."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand non-metals and their properties",
        "Identify common non-metals and their compounds",
        "Explain the reactions and uses of non-metals"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are non-metals?" },
        { time: "5-10 min", activity: "Direct Instruction - Properties of Non-Metals" },
        { time: "10-15 min", activity: "Direct Instruction - Hydrogen and Oxygen" },
        { time: "15-20 min", activity: "Direct Instruction - Nitrogen and Halogens" },
        { time: "20-25 min", activity: "Direct Instruction - Sulfur and Phosphorus" },
        { time: "25-30 min", activity: "Direct Instruction - Carbon" },
        { time: "30-35 min", activity: "Direct Instruction - Reactions and Compounds" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Right side",
        prac_002: "Brittle",
        prac_003: "Acidic oxides",
        prac_004: "Hydrogen",
        prac_005: "21%",
        prac_006: "78%",
        prac_007: "Bromine",
        prac_008: "Yellow",
        prac_009: "White phosphorus",
        prac_010: "Diamond",
        prac_011: "Chlorine",
        prac_012: "NaCl"
      },
      assessment: {
        ass_001: "Right side",
        ass_002: "Poor conductors and brittle (or dull, low density)",
        ass_003: "Acidic oxides",
        ass_004: "Hydrogen",
        ass_005: "21%",
        ass_006: "78%",
        ass_007: "Bromine",
        ass_008: "Yellow",
        ass_009: "Diamond",
        ass_010: "Chlorine",
        ass_011: "Sodium chloride (NaCl)",
        ass_012: "They react with water to form acids"
      }
    },
    extensionActivities: [
      "Research the uses of different non-metals",
      "Investigate the environmental impact of non-metal compounds",
      "Study the allotropes of carbon and sulfur",
      "Research the industrial production of sulfuric acid"
    ],
    differentiation: {
      struggling: [
        "Focus on common non-metals first",
        "Use visual aids",
        "Practice with simple examples",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the chemistry of the halogens",
        "Study the industrial uses of non-metals",
        "Investigate the role of non-metals in biology",
        "Explore the environmental chemistry of non-metals"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Non-Metals on the Periodic Table",
      description: "Diagram showing the location of non-metals",
      url: "/diagrams/non-metals-periodic.png",
      alt: "Non-metals on the periodic table"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Properties of Non-Metals",
      description: "Chart showing properties of non-metals",
      url: "/diagrams/non-metal-properties.png",
      alt: "Non-metal properties chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Allotropes of Carbon",
      description: "Diagram showing allotropes of carbon",
      url: "/diagrams/carbon-allotropes.png",
      alt: "Carbon allotropes diagram"
    }
  ]
};