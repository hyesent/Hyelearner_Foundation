// Location: src/data/lessons/science/chemistry/organic_chemistry/polymers.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_polymers",
  subject: "Chemistry",
  topic: "Polymers",
  name: "Polymers",
  icon: "🧵",
  grade_level: "SS2 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of alkenes",
    "Knowledge of addition reactions",
    "Understanding of hydrocarbons",
    "Basic knowledge of organic chemistry"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Functional Groups",
      file: "science/chemistry/organic_chemistry/functional_groups.js"
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
      description: "Define polymers and explain their importance",
      indicator: "Student can explain what polymers are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between monomers and polymers",
      indicator: "Student can differentiate between monomers and polymers"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between addition and condensation polymerization",
      indicator: "Student can distinguish between the two types of polymerization"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe addition polymerization",
      indicator: "Student can explain how addition polymers are formed"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe condensation polymerization",
      indicator: "Student can explain how condensation polymers are formed"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the formation of poly(ethene)",
      indicator: "Student can describe the polymerization of ethene"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the formation of poly(propene)",
      indicator: "Student can describe the polymerization of propene"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the formation of nylon",
      indicator: "Student can explain how nylon is made"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the formation of polyesters",
      indicator: "Student can explain how polyesters are made"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the formation of proteins (polypeptides)",
      indicator: "Student can describe how proteins are formed from amino acids"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the structure of DNA as a polymer",
      indicator: "Student can describe DNA as a polymer"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the properties of different polymers",
      indicator: "Student can relate structure to properties"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Discuss the environmental impact of polymers",
      indicator: "Student can explain the problems with plastic waste"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the importance of biodegradable polymers",
      indicator: "Student can discuss sustainable polymer alternatives"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Polymers - The Chemistry of Plastics",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about polymers, their formation, properties, and importance in modern life."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Polymers</h2>
      <p><strong>Polymers</strong> are large molecules made up of repeating units called monomers. They are everywhere in our daily lives - from plastics and synthetic fibers to natural materials like proteins and DNA.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧵 Key Concepts</h3>
          <ul>
            <li>✓ Monomers vs Polymers</li>
            <li>✓ Addition Polymerization</li>
            <li>✓ Condensation Polymerization</li>
            <li>✓ Plastics</li>
            <li>✓ Natural Polymers</li>
            <li>✓ Biodegradable Polymers</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• DNA is a natural polymer</li>
            <li>• Over 300 million tons of plastic produced annually</li>
            <li>• Proteins are polymers of amino acids</li>
            <li>• The first synthetic polymer was Bakelite (1907)</li>
            <li>• Polymers can be designed for specific properties</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Polymers Matter</h4>
        <p>Polymers are essential to modern life. They provide materials for clothing, packaging, construction, medicine, electronics, and countless other applications.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Polymers?",
        objective: "obj_001",
        text: `
          <h3>Understanding Polymers</h3>
          <p><strong>Polymers</strong> are large molecules composed of repeating structural units called <strong>monomers</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Monomers</h4>
              <ul>
                <li>• Small molecules</li>
                <li>• Building blocks of polymers</li>
                <li>• Examples: ethene, propene</li>
                <li>• Join together to form polymers</li>
                <li>• Usually unsaturated (alkenes)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Polymers</h4>
              <ul>
                <li>• Large molecules (macromolecules)</li>
                <li>• Made of repeating monomers</li>
                <li>• Examples: plastics, proteins</li>
                <li>• Can be synthetic or natural</li>
                <li>• Have unique properties</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Monomers → Polymers</text>
              
              <!-- Monomers -->
              <g transform="translate(150, 130)">
                <rect x="-60" y="-20" width="40" height="40" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-40" y="5" text-anchor="middle" font-size="10" fill="white">M</text>
                <rect x="0" y="-20" width="40" height="40" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="20" y="5" text-anchor="middle" font-size="10" fill="white">M</text>
                <rect x="60" y="-20" width="40" height="40" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="80" y="5" text-anchor="middle" font-size="10" fill="white">M</text>
                <text x="-40" y="-40" text-anchor="middle" font-size="11" fill="#1565c0">Monomers</text>
              </g>
              
              <!-- Arrow -->
              <text x="250" y="140" font-size="24" fill="#1565c0">→</text>
              
              <!-- Polymer -->
              <g transform="translate(400, 130)">
                <rect x="-80" y="-20" width="160" height="40" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white">Polymer Chain</text>
                <text x="0" y="-40" text-anchor="middle" font-size="11" fill="#2e7d32">Polymer</text>
                <!-- Repeating units indicator -->
                <line x1="-50" y1="-25" x2="-50" y2="25" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="0" y1="-25" x2="0" y2="25" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="50" y1="-25" x2="50" y2="25" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="3,3"/>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Addition Polymerization",
        objective: "obj_004",
        text: `
          <h3>Addition Polymerization</h3>
          <p><strong>Addition polymerization</strong> occurs when unsaturated monomers (alkenes) join together without the loss of any atoms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• Monomers are alkenes (C=C)</li>
                <li>• No small molecules are eliminated</li>
                <li>• Requires a catalyst or initiator</li>
                <li>• Produces long chains</li>
                <li>• Example: Poly(ethene)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Conditions Required</h4>
              <ul>
                <li>• High pressure (up to 2000 atm)</li>
                <li>• High temperature (up to 300°C)</li>
                <li>• Catalyst (e.g., Ziegler-Natta)</li>
                <li>• Initiator (peroxide)</li>
                <li>• Alkene monomer</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 General Reaction:</strong>
            <p>n CH₂=CH₂ → —(CH₂-CH₂)n—</p>
            <p><small>n molecules of ethene → poly(ethene)</small></p>
            <ul>
              <li>• The double bond opens</li>
              <li>• Monomers join together</li>
              <li>• Long polymer chain forms</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Condensation Polymerization",
        objective: "obj_005",
        text: `
          <h3>Condensation Polymerization</h3>
          <p><strong>Condensation polymerization</strong> occurs when monomers join together with the elimination of a small molecule (usually water).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• Monomers have functional groups</li>
                <li>• Small molecules eliminated (H₂O, HCl)</li>
                <li>• Forms polymers with functional groups</li>
                <li>• Examples: Nylon, polyester</li>
                <li>• Often requires heat</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Monomers</h4>
              <ul>
                <li>• <strong>Dicarboxylic acids:</strong> -COOH</li>
                <li>• <strong>Diamines:</strong> -NH₂</li>
                <li>• <strong>Diols:</strong> -OH</li>
                <li>• <strong>Diacid chlorides:</strong> -COCl</li>
                <li>• Combine to form polymers</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example: Nylon Formation</strong>
            <ul>
              <li>• Hexanedioic acid + Hexamethylenediamine</li>
              <li>• Forms Nylon-6,6</li>
              <li>• Water is eliminated</li>
              <li>• Contains amide (-CONH-) linkages</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Poly(ethene)",
        objective: "obj_006",
        text: `
          <h3>Poly(ethene) - The Most Common Plastic</h3>
          <p><strong>Poly(ethene)</strong> (polyethylene) is the most widely used synthetic polymer.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation</h4>
              <ul>
                <li>• Monomer: Ethene (C₂H₄)</li>
                <li>• n CH₂=CH₂ → —(CH₂-CH₂)n—</li>
                <li>• Addition polymerization</li>
                <li>• Catalyst: Zeigler-Natta or peroxide</li>
                <li>• High pressure process</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties and Uses</h4>
              <ul>
                <li>• Flexible and tough</li>
                <li>• Water-resistant</li>
                <li>• Good electrical insulator</li>
                <li>• <strong>Uses:</strong></li>
                <li>• Plastic bags</li>
                <li>• Bottles and containers</li>
                <li>• Packaging materials</li>
                <li>• Toys</li>
                <li>• Pipes</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Poly(propene)",
        objective: "obj_007",
        text: `
          <h3>Poly(propene) - Polypropylene</h3>
          <p><strong>Poly(propene)</strong> (polypropylene) is a versatile polymer with many applications.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation</h4>
              <ul>
                <li>• Monomer: Propene (C₃H₆)</li>
                <li>• n CH₂=CH-CH₃ → —(CH₂-CH(CH₃))n—</li>
                <li>• Addition polymerization</li>
                <li>• Zeigler-Natta catalyst</li>
                <li>• Atactic vs Isotactic forms</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties and Uses</h4>
              <ul>
                <li>• Strong and durable</li>
                <li>• Resistant to chemicals</li>
                <li>• High melting point</li>
                <li>• <strong>Uses:</strong></li>
                <li>• Crates and pallets</li>
                <li>• Furniture</li>
                <li>• Ropes and carpets</li>
                <li>• Automotive parts</li>
                <li>• Food containers</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Nylon",
        objective: "obj_008",
        text: `
          <h3>Nylon - A Synthetic Fiber</h3>
          <p><strong>Nylon</strong> is a synthetic polymer made by condensation polymerization.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation of Nylon-6,6</h4>
              <ul>
                <li>• Hexanedioic acid (adipic acid)</li>
                <li>• Hexamethylenediamine</li>
                <li>• Condensation polymerization</li>
                <li>• Water is eliminated</li>
                <li>• Amide linkages (-CONH-)</li>
                <li>• Named for six carbons in each</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties and Uses</h4>
              <ul>
                <li>• Strong and elastic</li>
                <li>• Resistant to wear</li>
                <li>• Melts at high temperature</li>
                <li>• <strong>Uses:</strong></li>
                <li>• Clothing and stockings</li>
                <li>• Ropes and fishing lines</li>
                <li>• Carpets and upholstery</li>
                <li>• Mechanical parts</li>
                <li>• Toothbrush bristles</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Polyesters",
        objective: "obj_009",
        text: `
          <h3>Polyesters</h3>
          <p><strong>Polyesters</strong> are polymers formed from dicarboxylic acids and diols.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation</h4>
              <ul>
                <li>• Dicarboxylic acid + Diol</li>
                <li>• Condensation polymerization</li>
                <li>• Water is eliminated</li>
                <li>• Ester linkages (-COO-)</li>
                <li>• Example: PET (polyethylene terephthalate)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Properties and Uses</h4>
              <ul>
                <li>• Strong and flexible</li>
                <li>• Resistant to stretching</li>
                <li>• Good barrier properties</li>
                <li>• <strong>Uses:</strong></li>
                <li>• Clothing (polyester fabric)</li>
                <li>• Plastic bottles (PET)</li>
                <li>• Packaging films</li>
                <li>• Adhesives</li>
                <li>• Foam insulation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Natural Polymers",
        objective: "obj_010",
        text: `
          <h3>Natural Polymers - Proteins and DNA</h3>
          <p>Nature produces many important polymers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Proteins</h4>
              <ul>
                <li>• Polymers of amino acids</li>
                <li>• Condensation polymerization</li>
                <li>• Peptide bonds (-CONH-)</li>
                <li>• Essential for life</li>
                <li>• Examples: Enzymes, keratin, collagen</li>
                <li>• Functions: Structure, catalysis, transport</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 DNA</h4>
              <ul>
                <li>• Polymer of nucleotides</li>
                <li>• Contains genetic information</li>
                <li>• Double helix structure</li>
                <li>• Phosphodiester linkages</li>
                <li>• Passed from generation to generation</li>
                <li>• Essential for life</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Plastic Properties",
        objective: "obj_012",
        text: `
          <h3>Properties of Polymers</h3>
          <p>The properties of polymers depend on their structure and bonding.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Thermoplastics</h4>
              <ul>
                <li>• Soften when heated</li>
                <li>• Can be reshaped</li>
                <li>• Reversible process</li>
                <li>• Examples: Poly(ethene), poly(propene)</li>
                <li>• Weak intermolecular forces</li>
                <li>• Easily recycled</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Thermosetting Plastics</h4>
              <ul>
                <li>• Hard and rigid</li>
                <li>• Cannot be reshaped</li>
                <li>• Irreversible process</li>
                <li>• Examples: Bakelite, epoxy resin</li>
                <li>• Cross-linked structures</li>
                <li>• Strong covalent bonds</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Environmental Impact",
        objective: "obj_013",
        text: `
          <h3>Environmental Impact of Polymers</h3>
          <p>Plastics have become a major environmental concern.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Problems</h4>
              <ul>
                <li>• <strong>Non-biodegradable:</strong> Last for centuries</li>
                <li>• <strong>Plastic pollution:</strong> Oceans, land</li>
                <li>• <strong>Microplastics:</strong> In food and water</li>
                <li>• <strong>Wildlife harm:</strong> Ingestion, entanglement</li>
                <li>• <strong>Fossil fuel consumption:</strong> Made from petroleum</li>
                <li>• <strong>Greenhouse gas emissions:</strong> Production and disposal</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Recycling:</strong> Reduce waste</li>
                <li>• <strong>Biodegradable plastics:</strong> Compostable</li>
                <li>• <strong>Reduce usage:</strong> Less single-use plastics</li>
                <li>• <strong>Bioplastics:</strong> From renewable sources</li>
                <li>• <strong>Waste-to-energy:</strong> Incineration with energy recovery</li>
                <li>• <strong>Chemical recycling:</strong> Breaking down polymers</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Biodegradable Polymers",
        objective: "obj_014",
        text: `
          <h3>Biodegradable Polymers</h3>
          <p><strong>Biodegradable polymers</strong> break down naturally in the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Polylactic acid (PLA):</strong></li>
                <li>• From corn starch</li>
                <li>• Used in packaging and cups</li>
                <li>• <strong>Polyhydroxyalkanoates (PHA):</strong></li>
                <li>• Produced by bacteria</li>
                <li>• Used in medical applications</li>
                <li>• <strong>Starch-based polymers:</strong></li>
                <li>• Mixed with conventional plastics</li>
                <li>• Improve biodegradability</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Advantages</h4>
              <ul>
                <li>• Reduce landfill waste</li>
                <li>• Less environmental pollution</li>
                <li>• Renewable sources</li>
                <li>• Reduce petroleum dependence</li>
                <li>• Decompose into CO₂ and H₂O</li>
                <li>• Sustainable alternative</li>
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
          <h4>🧵 Polymers</h4>
          <ul>
            <li>• Large molecules made of repeating monomers</li>
            <li>• Addition: alkenes join without losing atoms</li>
            <li>• Condensation: monomers join losing small molecules</li>
            <li>• Natural and synthetic polymers exist</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Polymers</h4>
          <ul>
            <li>• Poly(ethene): Plastic bags, bottles</li>
            <li>• Poly(propene): Crates, furniture</li>
            <li>• Nylon: Clothing, ropes</li>
            <li>• Polyester: Clothing, bottles</li>
            <li>• Proteins and DNA: Natural polymers</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Polymers are essential to modern life, but their environmental impact requires sustainable solutions like recycling and biodegradable alternatives.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All polymers are plastics",
        correction: "Plastics are a type of synthetic polymer",
        explanation: "Natural polymers like proteins and DNA are not plastics."
      },
      {
        id: "mis_002",
        misconception: "All plastics are bad for the environment",
        correction: "Plastics have benefits but environmental issues need solutions",
        explanation: "Plastics are useful but require proper disposal and recycling."
      },
      {
        id: "mis_003",
        misconception: "Polymers are only made from petroleum",
        correction: "Polymers can be natural or made from renewable sources",
        explanation: "Natural polymers and bioplastics exist."
      },
      {
        id: "mis_004",
        misconception: "Addition and condensation are the same",
        correction: "Addition polymers lose no atoms; condensation polymers lose small molecules",
        explanation: "The two processes are different in their mechanism and products."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Packaging",
        description: "Polymers protect and preserve products.",
        example: "Plastic bags, food containers, films"
      },
      {
        id: "app_002",
        title: "Textiles",
        description: "Polymers are used in fabrics.",
        example: "Polyester, nylon, acrylic fibers"
      },
      {
        id: "app_003",
        title: "Medicine",
        description: "Polymers are used in medical applications.",
        example: "Sutures, implants, drug delivery"
      },
      {
        id: "app_004",
        title: "Construction",
        description: "Polymers are used in building materials.",
        example: "Pipes, insulation, adhesives"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Polymer", definition: "A large molecule made of repeating monomers." },
    { term: "Monomer", definition: "A small molecule that joins to form a polymer." },
    { term: "Addition Polymerization", definition: "Monomers join without losing atoms." },
    { term: "Condensation Polymerization", definition: "Monomers join losing a small molecule." },
    { term: "Thermoplastic", definition: "A plastic that softens when heated." },
    { term: "Thermosetting", definition: "A plastic that cannot be reshaped after forming." },
    { term: "Poly(ethene)", definition: "Polymer of ethene (polyethylene)." },
    { term: "Poly(propene)", definition: "Polymer of propene (polypropylene)." },
    { term: "Nylon", definition: "A synthetic polyamide." },
    { term: "Polyester", definition: "A polymer with ester linkages." },
    { term: "Protein", definition: "A polymer of amino acids." },
    { term: "DNA", definition: "A polymer of nucleotides." },
    { term: "Biodegradable", definition: "Breaks down naturally in the environment." },
    { term: "Recycling", definition: "Processing waste materials into new products." },
    { term: "Microplastics", definition: "Small plastic particles less than 5mm." },
    { term: "Bioplastic", definition: "Plastic made from renewable sources." },
    { term: "Polyamide", definition: "A polymer with amide linkages (e.g., nylon)." },
    { term: "Cross-linking", definition: "Bonds between polymer chains." },
    { term: "Copolymer", definition: "A polymer made from two different monomers." },
    { term: "Macromolecule", definition: "A very large molecule (polymer)." }
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
      question: "What is a polymer?",
      type: "multiple_choice",
      options: [
        "A small molecule",
        "A large molecule made of repeating monomers",
        "A single atom",
        "A type of metal"
      ],
      answer: "A large molecule made of repeating monomers",
      explanation: "Polymers are large molecules made from repeating monomer units."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a monomer?",
      type: "multiple_choice",
      options: [
        "A polymer",
        "A small molecule that joins to form a polymer",
        "A type of plastic",
        "A synthetic material"
      ],
      answer: "A small molecule that joins to form a polymer",
      explanation: "Monomers are the building blocks of polymers."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is addition polymerization?",
      type: "multiple_choice",
      options: [
        "Monomers join losing water",
        "Monomers join without losing atoms",
        "Monomers are broken down",
        "Monomers are separated"
      ],
      answer: "Monomers join without losing atoms",
      explanation: "Addition polymerization joins monomers without losing any atoms."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which monomer forms poly(ethene)?",
      type: "multiple_choice",
      options: ["Propene", "Ethene", "Ethyne", "Benzene"],
      answer: "Ethene",
      explanation: "Poly(ethene) is formed from ethene monomers."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is eliminated in condensation polymerization?",
      type: "multiple_choice",
      options: ["CO₂", "H₂O", "H₂", "O₂"],
      answer: "H₂O",
      explanation: "Condensation polymerization eliminates small molecules like water."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is poly(ethene) used for?",
      type: "multiple_choice",
      options: [
        "Clothing",
        "Plastic bags",
        "Ropes",
        "Automotive parts"
      ],
      answer: "Plastic bags",
      explanation: "Poly(ethene) is used to make plastic bags and packaging."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What type of polymer is nylon?",
      type: "multiple_choice",
      options: [
        "Addition polymer",
        "Condensation polymer",
        "Natural polymer",
        "Thermosetting polymer"
      ],
      answer: "Condensation polymer",
      explanation: "Nylon is formed by condensation polymerization."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What linkage is found in polyesters?",
      type: "multiple_choice",
      options: [
        "Amide (-CONH-)",
        "Ester (-COO-)",
        "Ether (-O-)",
        "Peptide (-CONH-)"
      ],
      answer: "Ester (-COO-)",
      explanation: "Polyesters have ester linkages."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What are proteins made of?",
      type: "multiple_choice",
      options: [
        "Nucleotides",
        "Amino acids",
        "Monosaccharides",
        "Fatty acids"
      ],
      answer: "Amino acids",
      explanation: "Proteins are polymers of amino acids."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is DNA a polymer of?",
      type: "multiple_choice",
      options: [
        "Amino acids",
        "Nucleotides",
        "Monosaccharides",
        "Fatty acids"
      ],
      answer: "Nucleotides",
      explanation: "DNA is a polymer of nucleotides."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a thermoplastic?",
      type: "multiple_choice",
      options: [
        "A plastic that hardens when heated",
        "A plastic that softens when heated",
        "A plastic that cannot be recycled",
        "A plastic that is biodegradable"
      ],
      answer: "A plastic that softens when heated",
      explanation: "Thermoplastics soften when heated and can be reshaped."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why are plastics a problem in the environment?",
      type: "multiple_choice",
      options: [
        "They are biodegradable",
        "They are non-biodegradable",
        "They decompose quickly",
        "They are recyclable"
      ],
      answer: "They are non-biodegradable",
      explanation: "Most plastics are non-biodegradable and persist in the environment."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a biodegradable polymer?",
      type: "multiple_choice",
      options: [
        "A polymer that breaks down naturally",
        "A polymer that lasts forever",
        "A polymer made from petroleum",
        "A polymer that cannot be recycled"
      ],
      answer: "A polymer that breaks down naturally",
      explanation: "Biodegradable polymers break down naturally in the environment."
    },
    {
      id: "prac_014",
      objective: "obj_004",
      difficulty: "hard",
      question: "What is the monomer for poly(propene)?",
      type: "multiple_choice",
      options: ["Ethene", "Propene", "Butene", "Benzene"],
      answer: "Propene",
      explanation: "Poly(propene) is made from propene monomers."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "What type of linkage is found in nylon?",
      type: "multiple_choice",
      options: [
        "Ester (-COO-)",
        "Amide (-CONH-)",
        "Ether (-O-)",
        "Peptide (-CONH-)"
      ],
      answer: "Amide (-CONH-)",
      explanation: "Nylon has amide linkages (-CONH-)."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_polymers",
    title: "Polymers Quiz",
    description: "Test your understanding of polymers",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a polymer?",
        type: "short_answer",
        answer_key: "A large molecule made of repeating monomers",
        explanation: "Polymers are large molecules made from repeating monomer units."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a monomer?",
        type: "short_answer",
        answer_key: "A small molecule that joins to form a polymer",
        explanation: "Monomers are the building blocks of polymers."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between addition and condensation polymerization?",
        type: "short_answer",
        answer_key: "Addition loses no atoms; condensation loses small molecules",
        explanation: "Addition polymerization joins monomers without losing atoms; condensation loses small molecules."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which monomer forms poly(ethene)?",
        type: "short_answer",
        answer_key: "Ethene",
        explanation: "Poly(ethene) is formed from ethene monomers."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is eliminated in condensation polymerization?",
        type: "short_answer",
        answer_key: "Water",
        explanation: "Condensation polymerization eliminates small molecules like water."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is poly(ethene) used for?",
        type: "short_answer",
        answer_key: "Plastic bags and packaging",
        explanation: "Poly(ethene) is used for plastic bags and packaging."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What type of polymer is nylon?",
        type: "short_answer",
        answer_key: "Condensation polymer",
        explanation: "Nylon is a condensation polymer."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What are proteins made of?",
        type: "short_answer",
        answer_key: "Amino acids",
        explanation: "Proteins are polymers of amino acids."
      },
      {
        id: "ass_009",
        objective: "obj_013",
        difficulty: "hard",
        question: "Why are plastics a problem in the environment?",
        type: "short_answer",
        answer_key: "They are non-biodegradable",
        explanation: "Most plastics are non-biodegradable and persist in the environment."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is a biodegradable polymer?",
        type: "short_answer",
        answer_key: "A polymer that breaks down naturally",
        explanation: "Biodegradable polymers break down naturally in the environment."
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
        "Understand polymers and monomers",
        "Differentiate between addition and condensation polymerization",
        "Describe common polymers",
        "Understand environmental issues"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are polymers?" },
        { time: "5-10 min", activity: "Direct Instruction - Monomers and Polymers" },
        { time: "10-15 min", activity: "Direct Instruction - Addition Polymerization" },
        { time: "15-20 min", activity: "Direct Instruction - Condensation Polymerization" },
        { time: "20-25 min", activity: "Direct Instruction - Common Polymers" },
        { time: "25-30 min", activity: "Direct Instruction - Natural Polymers" },
        { time: "30-35 min", activity: "Direct Instruction - Environmental Impact" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A large molecule made of repeating monomers",
        prac_002: "A small molecule that joins to form a polymer",
        prac_003: "Monomers join without losing atoms",
        prac_004: "Ethene",
        prac_005: "H₂O",
        prac_006: "Plastic bags",
        prac_007: "Condensation polymer",
        prac_008: "Ester (-COO-)",
        prac_009: "Amino acids",
        prac_010: "Nucleotides",
        prac_011: "A plastic that softens when heated",
        prac_012: "They are non-biodegradable",
        prac_013: "A polymer that breaks down naturally",
        prac_014: "Propene",
        prac_015: "Amide (-CONH-)"
      },
      assessment: {
        ass_001: "A large molecule made of repeating monomers",
        ass_002: "A small molecule that joins to form a polymer",
        ass_003: "Addition loses no atoms; condensation loses small molecules",
        ass_004: "Ethene",
        ass_005: "Water",
        ass_006: "Plastic bags and packaging",
        ass_007: "Condensation polymer",
        ass_008: "Amino acids",
        ass_009: "They are non-biodegradable",
        ass_010: "A polymer that breaks down naturally"
      }
    },
    extensionActivities: [
      "Research recycling processes",
      "Study bioplastics",
      "Research the history of polymers",
      "Investigate polymer applications in medicine"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research polymer synthesis",
        "Study polymer properties",
        "Research advanced polymers",
        "Study the chemistry of biodegradation"
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
      title: "Monomers to Polymers",
      description: "Diagram showing monomers joining to form a polymer",
      url: "/diagrams/monomers-to-polymers.png",
      alt: "Monomers to polymers diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Addition Polymerization",
      description: "Diagram of addition polymerization",
      url: "/diagrams/addition-polymerization.png",
      alt: "Addition polymerization diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Common Polymers",
      description: "Chart of common polymers and their uses",
      url: "/diagrams/common-polymers.png",
      alt: "Common polymers chart"
    }
  ]
};