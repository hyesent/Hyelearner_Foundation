// Location: src/data/lessons/science/chemistry/organic_chemistry/organic_intro.js

export default {
  id: "chem_lesson_organic_intro",
  subject: "Chemistry",
  topic: "Organic Chemistry",
  name: "Introduction to Organic Chemistry",
  icon: "🧬",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of atomic structure",
    "Knowledge of chemical bonding",
    "Understanding of covalent bonding",
    "Basic knowledge of carbon"
  ],

  nextLessons: [
    {
      name: "Alkanes, Alkenes and Alkynes",
      file: "science/chemistry/organic_chemistry/hydrocarbons.js"
    },
    {
      name: "Petroleum and Petrochemicals",
      file: "science/chemistry/organic_chemistry/petroleum.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define organic chemistry and explain its importance",
      indicator: "Student can explain what organic chemistry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the unique properties of carbon",
      indicator: "Student can describe why carbon is the basis of organic chemistry"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define a homologous series",
      indicator: "Student can explain what a homologous series is"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify the functional groups in organic compounds",
      indicator: "Student can recognize common functional groups"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the different types of formula in organic chemistry",
      indicator: "Student can distinguish between molecular, structural, condensed, and displayed formulas"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Name simple organic compounds using IUPAC nomenclature",
      indicator: "Student can name alkanes and simple organic compounds"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Classify organic compounds into aliphatic and aromatic",
      indicator: "Student can distinguish between aliphatic and aromatic compounds"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of isomerism",
      indicator: "Student can define isomerism and give examples"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Distinguish between structural and stereoisomerism",
      indicator: "Student can differentiate between types of isomerism"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Identify the different types of hybridization in carbon",
      indicator: "Student can explain sp³, sp², and sp hybridization"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the concept of functional groups and their importance",
      indicator: "Student can explain why functional groups determine chemical properties"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Apply IUPAC nomenclature to complex organic compounds",
      indicator: "Student can name complex organic compounds"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the different types of structural isomerism",
      indicator: "Student can explain chain, position, and functional group isomerism"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of optical isomerism",
      indicator: "Student can explain optical isomerism and chirality"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the relationship between structure and properties of organic compounds",
      indicator: "Student can explain how structure affects properties"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the importance of organic chemistry in everyday life",
      indicator: "Student can explain the applications of organic chemistry"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the reactivity of different functional groups",
      indicator: "Student can explain why different functional groups react differently"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Solve problems involving organic compound identification",
      indicator: "Student can identify organic compounds from given data"
    }
  ],

  video: {
    id: "vid_001",
    title: "Introduction to Organic Chemistry",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about organic chemistry, carbon compounds, and functional groups."
  },

  content: {
    introduction: `
      <h2>What is Organic Chemistry?</h2>
      <p><strong>Organic chemistry</strong> is the branch of chemistry that studies carbon-containing compounds and their properties, structures, and reactions. It is essential for understanding life processes, materials, and many industries.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🧪 Carbon Compounds</h3>
          <ul>
            <li>• Compounds containing carbon</li>
            <li>• Covalent bonding</li>
            <li>• Millions of compounds</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🔬 Functional Groups</h3>
          <ul>
            <li>• Determine properties</li>
            <li>• Alkane, alkene, alcohol</li>
            <li>• Carboxylic acid, ester</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Applications</h3>
          <ul>
            <li>• Pharmaceuticals</li>
            <li>• Plastics</li>
            <li>• Fuels</li>
            <li>• Food</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Importance of Organic Chemistry</text>
          
          <!-- Central carbon -->
          <circle cx="300" cy="120" r="40" fill="#e8f5e9" stroke="#2e7d32" stroke-width="3"/>
          <text x="300" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2e7d32">C</text>
          <text x="300" y="135" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2e7d32">Carbon</text>
          
          <!-- Branches -->
          <!-- Medicine -->
          <g transform="translate(120, 60)">
            <line x1="40" y1="40" x2="300" y2="80" stroke="#e74c3c" stroke-width="2"/>
            <circle cx="40" cy="40" r="30" fill="#ffcdd2" stroke="#e74c3c" stroke-width="2"/>
            <text x="40" y="35" text-anchor="middle" font-size="10" fill="#e74c3c">Medicine</text>
            <text x="40" y="50" text-anchor="middle" font-size="9" fill="#e74c3c">Drugs</text>
          </g>
          
          <!-- Plastics -->
          <g transform="translate(500, 60)">
            <line x1="-40" y1="40" x2="300" y2="80" stroke="#3498db" stroke-width="2"/>
            <circle cx="500" cy="60" r="30" fill="#bbdefb" stroke="#3498db" stroke-width="2"/>
            <text x="500" y="55" text-anchor="middle" font-size="10" fill="#3498db">Plastics</text>
            <text x="500" y="70" text-anchor="middle" font-size="9" fill="#3498db">Polymers</text>
          </g>
          
          <!-- Fuels -->
          <g transform="translate(120, 220)">
            <line x1="40" y1="-40" x2="300" y2="160" stroke="#f39c12" stroke-width="2"/>
            <circle cx="40" cy="220" r="30" fill="#ffe0b2" stroke="#f39c12" stroke-width="2"/>
            <text x="40" y="215" text-anchor="middle" font-size="10" fill="#f39c12">Fuels</text>
            <text x="40" y="230" text-anchor="middle" font-size="9" fill="#f39c12">Energy</text>
          </g>
          
          <!-- Food -->
          <g transform="translate(500, 220)">
            <line x1="-40" y1="-40" x2="300" y2="160" stroke="#8e24aa" stroke-width="2"/>
            <circle cx="500" cy="220" r="30" fill="#e1bee7" stroke="#8e24aa" stroke-width="2"/>
            <text x="500" y="215" text-anchor="middle" font-size="10" fill="#8e24aa">Food</text>
            <text x="500" y="230" text-anchor="middle" font-size="9" fill="#8e24aa">Nutrients</text>
          </g>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Unique Nature of Carbon",
        objective: "obj_002",
        text: `
          <h3>Why Carbon?</h3>
          <p>Carbon is unique because it can form up to <strong>four covalent bonds</strong> with other atoms, allowing it to form millions of different compounds.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Properties of Carbon</h4>
              <ul>
                <li>• <strong>Catenation:</strong> Carbon atoms can bond to other carbon atoms</li>
                <li>• <strong>Tetravalency:</strong> Carbon forms four bonds</li>
                <li>• <strong>Multiple bonds:</strong> Can form single, double, and triple bonds</li>
                <li>• <strong>Stability:</strong> Carbon-carbon bonds are strong</li>
                <li>• <strong>Hybridization:</strong> sp³, sp², sp</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Carbon Allotropes</h4>
              <ul>
                <li>• <strong>Graphite:</strong> Layered structure</li>
                <li>• <strong>Diamond:</strong> Tetrahedral structure</li>
                <li>• <strong>Fullerenes:</strong> Spherical molecules</li>
                <li>• <strong>Graphene:</strong> Single layer of graphite</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Hybridization in Carbon",
        objective: "obj_010",
        text: `
          <h3>Hybridization of Carbon</h3>
          <p>Carbon atoms can undergo hybridization to form different types of bonds.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>sp³ Hybridization</h4>
              <ul>
                <li>• Four sigma bonds</li>
                <li>• Tetrahedral shape</li>
                <li>• Bond angle: 109.5°</li>
                <li>• Example: CH₄ (methane)</li>
                <li>• Alkanes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>sp² Hybridization</h4>
              <ul>
                <li>• Three sigma bonds</li>
                <li>• One pi bond</li>
                <li>• Trigonal planar shape</li>
                <li>• Bond angle: 120°</li>
                <li>• Example: C₂H₄ (ethene)</li>
                <li>• Alkenes</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>sp Hybridization</h4>
              <ul>
                <li>• Two sigma bonds</li>
                <li>• Two pi bonds</li>
                <li>• Linear shape</li>
                <li>• Bond angle: 180°</li>
                <li>• Example: C₂H₂ (ethyne)</li>
                <li>• Alkynes</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Types of Organic Formulas",
        objective: "obj_005",
        text: `
          <h3>Types of Formulas</h3>
          <p>Organic compounds can be represented in several ways.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Formulas</h4>
              <ul>
                <li><strong>Molecular formula:</strong> C₄H₁₀ (butane)</li>
                <li><strong>Empirical formula:</strong> C₂H₅ (simplest ratio)</li>
                <li><strong>Structural formula:</strong> Shows all bonds</li>
                <li><strong>Condensed formula:</strong> CH₃CH₂CH₂CH₃</li>
                <li><strong>Skeletal formula:</strong> Shows only carbon skeleton</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example - Butane</h4>
              <ul>
                <li><strong>Molecular:</strong> C₄H₁₀</li>
                <li><strong>Empirical:</strong> C₂H₅</li>
                <li><strong>Structural:</strong> CH₃-CH₂-CH₂-CH₃</li>
                <li><strong>Condensed:</strong> CH₃CH₂CH₂CH₃</li>
                <li><strong>Skeletal:</strong> Zig-zag line</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Functional Groups",
        objective: "obj_004",
        text: `
          <h3>Functional Groups</h3>
          <p><strong>Functional groups</strong> are specific groups of atoms that determine the chemical properties of organic compounds.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Hydrocarbons</h4>
              <ul>
                <li><strong>Alkane:</strong> C-C (single bonds)</li>
                <li><strong>Alkene:</strong> C=C (double bond)</li>
                <li><strong>Alkyne:</strong> C≡C (triple bond)</li>
                <li><strong>Aromatic:</strong> Benzene ring</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Oxygen-Containing</h4>
              <ul>
                <li><strong>Alcohol:</strong> -OH</li>
                <li><strong>Ether:</strong> -O-</li>
                <li><strong>Aldehyde:</strong> -CHO</li>
                <li><strong>Ketone:</strong> C=O</li>
                <li><strong>Carboxylic acid:</strong> -COOH</li>
                <li><strong>Ester:</strong> -COO-</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Nitrogen-Containing</h4>
              <ul>
                <li><strong>Amine:</strong> -NH₂</li>
                <li><strong>Amide:</strong> -CONH₂</li>
                <li><strong>Nitrile:</strong> -CN</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Homologous Series",
        objective: "obj_003",
        text: `
          <h3>Homologous Series</h3>
          <p>A <strong>homologous series</strong> is a family of organic compounds with the same functional group and similar chemical properties.</p>
          
          <div class="example-box">
            <strong>📌 Characteristics:</strong>
            <ul>
              <li>• Same functional group</li>
              <li>• Similar chemical properties</li>
              <li>• Gradual change in physical properties</li>
              <li>• General formula (e.g., CₙH₂ₙ₊₂ for alkanes)</li>
              <li>• Each member differs by CH₂</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Alkanes:</strong> CₙH₂ₙ₊₂</li>
              <li>• Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)</li>
              <li><strong>Alkenes:</strong> CₙH₂ₙ</li>
              <li>• Ethene (C₂H₄), Propene (C₃H₆)</li>
              <li><strong>Alcohols:</strong> CₙH₂ₙ₊₁OH</li>
              <li>• Methanol (CH₃OH), Ethanol (C₂H₅OH)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "IUPAC Nomenclature",
        objective: "obj_006",
        text: `
          <h3>IUPAC Nomenclature</h3>
          <p><strong>IUPAC nomenclature</strong> is a systematic way of naming organic compounds.</p>
          
          <div class="example-box">
            <strong>📌 Rules for Naming:</strong>
            <ol>
              <li>Identify the longest carbon chain</li>
              <li>Number the chain from the end nearest a branch</li>
              <li>Name the branches (alkyl groups)</li>
              <li>Assign numbers to branches</li>
              <li>Write the name with branches in alphabetical order</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Prefixes</h4>
              <ul>
                <li>1: meth-</li>
                <li>2: eth-</li>
                <li>3: prop-</li>
                <li>4: but-</li>
                <li>5: pent-</li>
                <li>6: hex-</li>
                <li>7: hept-</li>
                <li>8: oct-</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Alkyl Groups</h4>
              <ul>
                <li>CH₃ → methyl</li>
                <li>C₂H₅ → ethyl</li>
                <li>C₃H₇ → propyl</li>
                <li>C₄H₉ → butyl</li>
                <li>Branch names end in -yl</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• CH₃-CH₂-CH(CH₃)-CH₃</li>
              <li>• Longest chain: butane (4 carbons)</li>
              <li>• Branch: methyl at position 2</li>
              <li>• Name: <strong>2-methylbutane</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Isomerism",
        objective: "obj_008",
        text: `
          <h3>Isomerism</h3>
          <p><strong>Isomers</strong> are compounds with the same molecular formula but different structures or arrangements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structural Isomerism</h4>
              <ul>
                <li><strong>Chain isomerism:</strong> Different carbon skeleton</li>
                <li><strong>Position isomerism:</strong> Different position of functional group</li>
                <li><strong>Functional group isomerism:</strong> Different functional groups</li>
                <li>Example: C₄H₁₀ → butane and 2-methylpropane</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Stereoisomerism</h4>
              <ul>
                <li><strong>Geometric isomerism:</strong> cis/trans (E/Z)</li>
                <li><strong>Optical isomerism:</strong> Chiral molecules</li>
                <li>Same connectivity, different 3D arrangement</li>
                <li>Example: cis-2-butene and trans-2-butene</li>
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
          <h4>🧬 Organic Chemistry Basics</h4>
          <ul>
            <li>• Carbon forms four bonds</li>
            <li>• Functional groups determine properties</li>
            <li>• Homologous series have similar properties</li>
            <li>• IUPAC nomenclature is systematic</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Concepts</h4>
          <ul>
            <li>• Hybridization: sp³, sp², sp</li>
            <li>• Isomerism: structural and stereoisomerism</li>
            <li>• Formula types: molecular, structural, condensed</li>
            <li>• Applications in daily life</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Organic chemistry is the chemistry of carbon compounds. It is essential for understanding life, materials, and many industries.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Organic compounds only come from living things",
        correction: "Organic compounds can be synthesized in the laboratory",
        explanation: "Wöhler synthesized urea in 1828, disproving vitalism."
      },
      {
        id: "mis_002",
        misconception: "All carbon compounds are organic",
        correction: "CO₂, carbonates, and carbides are inorganic",
        explanation: "Some carbon compounds are classified as inorganic."
      },
      {
        id: "mis_003",
        misconception: "Isomers have the same properties",
        correction: "Isomers have different properties",
        explanation: "Different structures lead to different physical and chemical properties."
      },
      {
        id: "mis_004",
        misconception: "Carbon only forms single bonds",
        correction: "Carbon can form single, double, and triple bonds",
        explanation: "Carbon can form multiple bonds due to its electronic structure."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Pharmaceuticals",
        description: "Organic chemistry is essential for drug development.",
        example: "Aspirin, penicillin, and many other drugs."
      },
      {
        id: "app_002",
        title: "Materials Science",
        description: "Organic chemistry is used to create new materials.",
        example: "Plastics, polymers, and composites."
      },
      {
        id: "app_003",
        title: "Energy",
        description: "Organic chemistry is involved in energy production.",
        example: "Fuels, biofuels, and petrochemicals."
      },
      {
        id: "app_004",
        title: "Food Science",
        description: "Organic chemistry is used in food production.",
        example: "Preservatives, flavorings, and nutrients."
      }
    ]
  },

  keyTerms: [
    { term: "Organic Chemistry", definition: "The study of carbon-containing compounds." },
    { term: "Carbon", definition: "The element that forms the basis of organic chemistry." },
    { term: "Catenation", definition: "The ability of carbon to form bonds with other carbon atoms." },
    { term: "Functional Group", definition: "A specific group of atoms that determines the chemical properties of a compound." },
    { term: "Homologous Series", definition: "A family of organic compounds with the same functional group." },
    { term: "Isomerism", definition: "Compounds with the same molecular formula but different structures." },
    { term: "Structural Isomerism", definition: "Isomers with different structural arrangements." },
    { term: "Stereoisomerism", definition: "Isomers with different 3D arrangements." },
    { term: "Hybridization", definition: "The mixing of atomic orbitals to form new orbitals." },
    { term: "sp³ Hybridization", definition: "Four sigma bonds, tetrahedral shape." },
    { term: "sp² Hybridization", definition: "Three sigma bonds, one pi bond, trigonal planar." },
    { term: "sp Hybridization", definition: "Two sigma bonds, two pi bonds, linear." },
    { term: "IUPAC Nomenclature", definition: "A systematic way of naming organic compounds." },
    { term: "Alkyl Group", definition: "A group derived from an alkane by removing a hydrogen atom." },
    { term: "Aromatic Compound", definition: "A compound containing a benzene ring." },
    { term: "Aliphatic Compound", definition: "A compound that is not aromatic." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is organic chemistry?",
      type: "multiple_choice",
      options: [
        "The study of inorganic compounds",
        "The study of carbon-containing compounds",
        "The study of metals",
        "The study of gases"
      ],
      answer: "The study of carbon-containing compounds",
      explanation: "Organic chemistry is the study of carbon-containing compounds."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Why is carbon unique in forming so many compounds?",
      type: "multiple_choice",
      options: [
        "It forms ionic bonds",
        "It forms up to four covalent bonds",
        "It is radioactive",
        "It is a noble gas"
      ],
      answer: "It forms up to four covalent bonds",
      explanation: "Carbon can form up to four covalent bonds, allowing it to form many compounds."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a homologous series?",
      type: "multiple_choice",
      options: [
        "A family of compounds with the same functional group",
        "A family of compounds with different functional groups",
        "A family of compounds with the same formula",
        "A family of compounds with the same structure"
      ],
      answer: "A family of compounds with the same functional group",
      explanation: "A homologous series is a family of compounds with the same functional group."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which functional group is found in alcohols?",
      type: "multiple_choice",
      options: ["-OH", "-COOH", "-NH₂", "-CHO"],
      answer: "-OH",
      explanation: "Alcohols contain the -OH (hydroxyl) functional group."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the molecular formula of butane?",
      type: "multiple_choice",
      options: ["C₄H₁₀", "C₄H₈", "C₄H₆", "C₄H₁₂"],
      answer: "C₄H₁₀",
      explanation: "Butane has the molecular formula C₄H₁₀."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the IUPAC name of CH₃-CH₂-CH₂-CH₃?",
      type: "multiple_choice",
      options: ["Butane", "Propane", "Pentane", "Hexane"],
      answer: "Butane",
      explanation: "CH₃-CH₂-CH₂-CH₃ is butane (4 carbons)."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What type of compound is benzene?",
      type: "multiple_choice",
      options: ["Aliphatic", "Aromatic", "Alkane", "Alkene"],
      answer: "Aromatic",
      explanation: "Benzene is an aromatic compound."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is isomerism?",
      type: "multiple_choice",
      options: [
        "Compounds with the same molecular formula but different structures",
        "Compounds with different molecular formulas but similar structures",
        "Compounds with the same properties",
        "Compounds with the same structure"
      ],
      answer: "Compounds with the same molecular formula but different structures",
      explanation: "Isomers have the same molecular formula but different structures."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What hybridization is present in ethene (C₂H₄)?",
      type: "multiple_choice",
      options: ["sp³", "sp²", "sp", "sp³d"],
      answer: "sp²",
      explanation: "Ethene has sp² hybridization due to the double bond."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the IUPAC name of CH₃-CH₂-CH(CH₃)-CH₃?",
      type: "multiple_choice",
      options: ["2-methylbutane", "3-methylbutane", "2-methylpropane", "Butane"],
      answer: "2-methylbutane",
      explanation: "The longest chain is butane with a methyl group at position 2."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the difference between structural and stereoisomerism?",
      type: "multiple_choice",
      options: [
        "Structural: different connectivity; Stereoisomerism: same connectivity, different 3D arrangement",
        "They are the same",
        "Stereoisomerism: different connectivity; Structural: same connectivity",
        "Neither exists"
      ],
      answer: "Structural: different connectivity; Stereoisomerism: same connectivity, different 3D arrangement",
      explanation: "Structural isomers have different connectivity; stereoisomers have different 3D arrangements."
    },
    {
      id: "prac_012",
      objective: "obj_015",
      difficulty: "hard",
      question: "Why do organic compounds have different properties?",
      type: "multiple_choice",
      options: [
        "Different functional groups and structures",
        "Same functional groups",
        "Same structures",
        "They are all the same"
      ],
      answer: "Different functional groups and structures",
      explanation: "Different functional groups and structures lead to different properties."
    }
  ],

  assessment: {
    id: "assess_organic_intro",
    title: "Introduction to Organic Chemistry Quiz",
    description: "Test your understanding of organic chemistry",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is organic chemistry?",
        type: "short_answer",
        answer_key: "The study of carbon-containing compounds",
        explanation: "Organic chemistry is the study of carbon-containing compounds."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Why can carbon form so many compounds?",
        type: "short_answer",
        answer_key: "It can form up to four covalent bonds",
        explanation: "Carbon's tetravalency allows it to form millions of compounds."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a homologous series?",
        type: "short_answer",
        answer_key: "A family of compounds with the same functional group",
        explanation: "A homologous series is a family of compounds with the same functional group."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What functional group is found in carboxylic acids?",
        type: "short_answer",
        answer_key: "-COOH",
        explanation: "Carboxylic acids contain the -COOH (carboxyl) functional group."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the molecular formula of pentane?",
        type: "short_answer",
        answer_key: "C₅H₁₂",
        explanation: "Pentane has the molecular formula C₅H₁₂."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the IUPAC name of CH₃-CH₂-CH₂-CH₂-CH₃?",
        type: "short_answer",
        answer_key: "Pentane",
        explanation: "The compound with five carbons is pentane."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the difference between aliphatic and aromatic compounds?",
        type: "short_answer",
        answer_key: "Aliphatic compounds are not aromatic; aromatic compounds contain a benzene ring",
        explanation: "Aromatic compounds contain a benzene ring; aliphatic compounds do not."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What are isomers?",
        type: "short_answer",
        answer_key: "Compounds with the same molecular formula but different structures",
        explanation: "Isomers have the same molecular formula but different structures."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What hybridization is found in methane (CH₄)?",
        type: "short_answer",
        answer_key: "sp³",
        explanation: "Methane has sp³ hybridization with tetrahedral geometry."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃?",
        type: "short_answer",
        answer_key: "2-methylbutane",
        explanation: "The longest chain is butane with a methyl group at position 2."
      },
      {
        id: "ass_011",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between structural and stereoisomerism?",
        type: "short_answer",
        answer_key: "Structural: different connectivity; Stereoisomerism: same connectivity, different 3D arrangement",
        explanation: "Structural isomers have different atom connectivity; stereoisomers have different spatial arrangements."
      },
      {
        id: "ass_012",
        objective: "obj_016",
        difficulty: "hard",
        question: "Give one application of organic chemistry.",
        type: "short_answer",
        answer_key: "Pharmaceuticals (or plastics, fuels, food)",
        explanation: "Organic chemistry is used in pharmaceuticals, plastics, fuels, and food production."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand organic chemistry",
        "Identify functional groups",
        "Use IUPAC nomenclature",
        "Understand isomerism"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is organic chemistry?" },
        { time: "5-10 min", activity: "Direct Instruction - Carbon and Bonding" },
        { time: "10-15 min", activity: "Direct Instruction - Hybridization" },
        { time: "15-20 min", activity: "Direct Instruction - Functional Groups" },
        { time: "20-25 min", activity: "Direct Instruction - Homologous Series" },
        { time: "25-30 min", activity: "Direct Instruction - IUPAC Nomenclature" },
        { time: "30-35 min", activity: "Direct Instruction - Isomerism" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of carbon-containing compounds",
        prac_002: "It forms up to four covalent bonds",
        prac_003: "A family of compounds with the same functional group",
        prac_004: "-OH",
        prac_005: "C₄H₁₀",
        prac_006: "Butane",
        prac_007: "Aromatic",
        prac_008: "Compounds with the same molecular formula but different structures",
        prac_009: "sp²",
        prac_010: "2-methylbutane",
        prac_011: "Structural: different connectivity; Stereoisomerism: same connectivity, different 3D arrangement",
        prac_012: "Different functional groups and structures"
      },
      assessment: {
        ass_001: "The study of carbon-containing compounds",
        ass_002: "It can form up to four covalent bonds",
        ass_003: "A family of compounds with the same functional group",
        ass_004: "-COOH",
        ass_005: "C₅H₁₂",
        ass_006: "Pentane",
        ass_007: "Aliphatic compounds are not aromatic; aromatic compounds contain a benzene ring",
        ass_008: "Compounds with the same molecular formula but different structures",
        ass_009: "sp³",
        ass_010: "2-methylbutane",
        ass_011: "Structural: different connectivity; Stereoisomerism: same connectivity, different 3D arrangement",
        ass_012: "Pharmaceuticals (or plastics, fuels, food)"
      }
    },
    extensionActivities: [
      "Research the history of organic chemistry",
      "Build models of organic molecules",
      "Identify functional groups in everyday products",
      "Research the uses of different organic compounds"
    ],
    differentiation: {
      struggling: [
        "Focus on basic functional groups",
        "Use simple examples",
        "Practice naming simple compounds",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research advanced organic chemistry",
        "Study reaction mechanisms",
        "Explore polymer chemistry",
        "Investigate organic synthesis"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Functional Groups",
      description: "Diagram showing common functional groups",
      url: "/diagrams/functional-groups.png",
      alt: "Functional groups diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Homologous Series",
      description: "Chart showing homologous series",
      url: "/diagrams/homologous-series.png",
      alt: "Homologous series chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Isomerism",
      description: "Diagram showing different types of isomerism",
      url: "/diagrams/isomerism.png",
      alt: "Isomerism diagram"
    }
  ]
};