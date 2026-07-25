// Location: src/data/lessons/science/chemistry/organic_chemistry/petroleum.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_petroleum",
  subject: "Chemistry",
  topic: "Petroleum",
  name: "Petroleum",
  icon: "🛢️",
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
    "Understanding of hydrocarbons",
    "Knowledge of alkanes and alkenes",
    "Understanding of fractional distillation",
    "Basic knowledge of fossil fuels"
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
      description: "Define petroleum and explain its formation",
      indicator: "Student can explain what petroleum is and how it formed"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Describe the composition of petroleum",
      indicator: "Student can explain that petroleum is a mixture of hydrocarbons"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the process of fractional distillation",
      indicator: "Student can describe how petroleum is separated into fractions"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify the main fractions of petroleum and their uses",
      indicator: "Student can list the fractions and their applications"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the relationship between chain length and boiling point",
      indicator: "Student can describe how chain length affects boiling point"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the process of cracking",
      indicator: "Student can describe thermal and catalytic cracking"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the process of reforming",
      indicator: "Student can describe catalytic reforming"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the uses of different petroleum fractions",
      indicator: "Student can match fractions to their uses"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of petroleum in modern life",
      indicator: "Student can discuss the economic importance of petroleum"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the environmental impact of petroleum",
      indicator: "Student can describe the environmental consequences"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe the process of fractional distillation in detail",
      indicator: "Student can explain how the distillation column works"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the chemistry of catalytic cracking",
      indicator: "Student can describe the mechanism of catalytic cracking"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the sustainability issues with petroleum",
      indicator: "Student can discuss peak oil and alternatives"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Evaluate Nigeria's petroleum industry",
      indicator: "Student can discuss the role of petroleum in Nigeria's economy"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Petroleum - The Black Gold",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about petroleum, its formation, extraction, refining, and global importance."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Petroleum</h2>
      <p><strong>Petroleum</strong> (crude oil) is a naturally occurring, complex mixture of hydrocarbons found in geological formations beneath the Earth's surface. It is one of the most important natural resources, providing fuels, lubricants, and raw materials for countless products.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🛢️ Key Concepts</h3>
          <ul>
            <li>✓ Formation of Petroleum</li>
            <li>✓ Fractional Distillation</li>
            <li>✓ Cracking</li>
            <li>✓ Reforming</li>
            <li>✓ Petroleum Fractions</li>
            <li>✓ Environmental Impact</li>
            <li>✓ Nigeria's Petroleum</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Petroleum is called "black gold"</li>
            <li>• Nigeria is Africa's largest oil producer</li>
            <li>• A barrel of oil is 159 liters</li>
            <li>• Oil takes millions of years to form</li>
            <li>• Over 90% of transportation uses oil</li>
            <li>• Over 6,000 products come from petroleum</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Petroleum Matters</h4>
        <p>Petroleum is essential to modern life. It powers transportation, produces electricity, and provides raw materials for plastics, medicines, and countless other products.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Formation of Petroleum",
        objective: "obj_001",
        text: `
          <h3>How Petroleum is Formed</h3>
          <p>Petroleum is formed from the remains of ancient marine organisms over millions of years.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation Process</h4>
              <ul>
                <li>1. Marine organisms die and sink</li>
                <li>2. Remains accumulate on the seafloor</li>
                <li>3. Covered by layers of sediment</li>
                <li>4. Heat and pressure over millions of years</li>
                <li>5. Organic matter transforms into kerogen</li>
                <li>6. Kerogen becomes oil and gas</li>
                <li>7. Trapped in porous rocks</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Conditions Required</h4>
              <ul>
                <li>• <strong>Source rock:</strong> Organic-rich shale</li>
                <li>• <strong>Temperature:</strong> 50-150°C (oil window)</li>
                <li>• <strong>Pressure:</strong> High pressure</li>
                <li>• <strong>Reservoir rock:</strong> Porous and permeable</li>
                <li>• <strong>Cap rock:</strong> Impermeable layer</li>
                <li>• <strong>Time:</strong> Millions of years</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Petroleum Formation</text>
              
              <!-- Surface -->
              <rect x="0" y="280" width="600" height="70" fill="#8d6e63"/>
              <text x="300" y="320" text-anchor="middle" font-size="12" fill="white">Impermeable Cap Rock (Traps Oil)</text>
              
              <!-- Middle layers -->
              <rect x="0" y="200" width="600" height="80" fill="#a1887f"/>
              <text x="300" y="240" text-anchor="middle" font-size="12" fill="white">Reservoir Rock (Porous - Oil Trapped)</text>
              
              <!-- Bottom layers -->
              <rect x="0" y="100" width="600" height="100" fill="#795548"/>
              <text x="300" y="155" text-anchor="middle" font-size="12" fill="white">Source Rock (Organic-Rich Shale)</text>
              
              <!-- Deepest -->
              <rect x="0" y="0" width="600" height="100" fill="#5d4037"/>
              <text x="300" y="50" text-anchor="middle" font-size="12" fill="white">Heat + Pressure Over Millions of Years</text>
              
              <!-- Oil droplets in reservoir rock -->
              <circle cx="100" cy="230" r="10" fill="#ff8a65" opacity="0.8"/>
              <circle cx="150" cy="245" r="8" fill="#ff8a65" opacity="0.8"/>
              <circle cx="200" cy="225" r="12" fill="#ff8a65" opacity="0.8"/>
              <circle cx="250" cy="240" r="9" fill="#ff8a65" opacity="0.8"/>
              <circle cx="300" cy="230" r="11" fill="#ff8a65" opacity="0.8"/>
              <circle cx="350" cy="245" r="8" fill="#ff8a65" opacity="0.8"/>
              <circle cx="400" cy="225" r="10" fill="#ff8a65" opacity="0.8"/>
              <circle cx="450" cy="240" r="12" fill="#ff8a65" opacity="0.8"/>
              <circle cx="500" cy="230" r="9" fill="#ff8a65" opacity="0.8"/>
              
              <!-- Arrows -->
              <path d="M300 80 L300 100" stroke="#ff6b6b" stroke-width="3" fill="none"/>
              <text x="310" y="90" font-size="10" fill="#ff6b6b">↑ Trapped</text>
              
              <!-- Label -->
              <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565c0">Oil is trapped in porous rock under impermeable cap rock</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Composition of Petroleum",
        objective: "obj_002",
        text: `
          <h3>What is Petroleum Made Of?</h3>
          <p>Petroleum is a complex mixture of hydrocarbons, including alkanes, cycloalkanes, and aromatic compounds.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Main Components</h4>
              <ul>
                <li>• <strong>Alkanes:</strong> Paraffins (CH₄ to C₄₀+)</li>
                <li>• <strong>Cycloalkanes:</strong> Naphthenes</li>
                <li>• <strong>Aromatics:</strong> Benzene, toluene, xylene</li>
                <li>• <strong>Other elements:</strong> Sulfur, nitrogen, oxygen</li>
                <li>• <strong>Metals:</strong> Vanadium, nickel, iron</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Variation in Oil</h4>
              <ul>
                <li>• <strong>Light oil:</strong> More small molecules</li>
                <li>• <strong>Heavy oil:</strong> More large molecules</li>
                <li>• <strong>Sweet oil:</strong> Low sulfur content</li>
                <li>• <strong>Sour oil:</strong> High sulfur content</li>
                <li>• API gravity measures oil density</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Fractional Distillation",
        objective: "obj_003",
        text: `
          <h3>Fractional Distillation of Petroleum</h3>
          <p>Petroleum is separated into fractions by fractional distillation based on boiling point differences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Process</h4>
              <ul>
                <li>• Crude oil is heated</li>
                <li>• Vapors rise up the fractionating column</li>
                <li>• Temperature decreases up the column</li>
                <li>• Fractions condense at different temperatures</li>
                <li>• Each fraction is collected separately</li>
                <li>• Small molecules (low BP) at top</li>
                <li>• Large molecules (high BP) at bottom</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• Shorter chains = lower boiling point</li>
                <li>• Longer chains = higher boiling point</li>
                <li>• Gases at the top</li>
                <li>• Liquids in the middle</li>
                <li>• Solids (bitumen) at the bottom</li>
                <li>• Each fraction has different uses</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="450" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Fractional Distillation of Petroleum</text>
              
              <!-- Column -->
              <rect x="250" y="60" width="100" height="320" rx="5" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
              
              <!-- Fractions -->
              <!-- Gases (top) -->
              <rect x="255" y="65" width="90" height="30" rx="3" fill="#4a90d9"/>
              <text x="300" y="78" text-anchor="middle" font-size="9" fill="white">Refinery Gases</text>
              <text x="300" y="90" text-anchor="middle" font-size="8" fill="white">C₁-C₄ (LPG)</text>
              
              <!-- Gasoline -->
              <rect x="255" y="100" width="90" height="30" rx="3" fill="#4caf50"/>
              <text x="300" y="113" text-anchor="middle" font-size="9" fill="white">Gasoline</text>
              <text x="300" y="125" text-anchor="middle" font-size="8" fill="white">C₅-C₁₀</text>
              
              <!-- Naphtha -->
              <rect x="255" y="135" width="90" height="30" rx="3" fill="#ff9800"/>
              <text x="300" y="148" text-anchor="middle" font-size="9" fill="white">Naphtha</text>
              <text x="300" y="160" text-anchor="middle" font-size="8" fill="white">C₆-C₁₀</text>
              
              <!-- Kerosene -->
              <rect x="255" y="170" width="90" height="30" rx="3" fill="#ffb74d"/>
              <text x="300" y="183" text-anchor="middle" font-size="9" fill="white">Kerosene</text>
              <text x="300" y="195" text-anchor="middle" font-size="8" fill="white">C₁₀-C₁₆</text>
              
              <!-- Diesel -->
              <rect x="255" y="205" width="90" height="30" rx="3" fill="#ff6b6b"/>
              <text x="300" y="218" text-anchor="middle" font-size="9" fill="white">Diesel</text>
              <text x="300" y="230" text-anchor="middle" font-size="8" fill="white">C₁₄-C₂₀</text>
              
              <!-- Fuel Oil -->
              <rect x="255" y="240" width="90" height="30" rx="3" fill="#795548"/>
              <text x="300" y="253" text-anchor="middle" font-size="9" fill="white">Fuel Oil</text>
              <text x="300" y="265" text-anchor="middle" font-size="8" fill="white">C₂₀-C₃₀</text>
              
              <!-- Lubricating Oil -->
              <rect x="255" y="275" width="90" height="30" rx="3" fill="#607d8b"/>
              <text x="300" y="288" text-anchor="middle" font-size="9" fill="white">Lubricating</text>
              <text x="300" y="300" text-anchor="middle" font-size="8" fill="white">C₃₀-C₄₀</text>
              
              <!-- Bitumen (bottom) -->
              <rect x="255" y="310" width="90" height="60" rx="3" fill="#3e2723"/>
              <text x="300" y="330" text-anchor="middle" font-size="9" fill="white">Bitumen</text>
              <text x="300" y="342" text-anchor="middle" font-size="8" fill="white">C₄₀+</text>
              <text x="300" y="355" text-anchor="middle" font-size="8" fill="white">(Road Surfacing)</text>
              
              <!-- Temperature gradient -->
              <text x="370" y="80" font-size="10" fill="#1565c0">↑ Cooler</text>
              <text x="370" y="360" font-size="10" fill="#1565c0">↓ Hotter</text>
              
              <!-- Heat source -->
              <rect x="270" y="380" width="60" height="20" rx="3" fill="#ff9800"/>
              <text x="300" y="410" text-anchor="middle" font-size="11" fill="#1565c0">Heat Source</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Petroleum Fractions",
        objective: "obj_004",
        text: `
          <h3>Fractions and Their Uses</h3>
          <p>Each fraction from the distillation column has specific uses.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Fraction</th>
                <th class="border p-2">Carbon Chain</th>
                <th class="border p-2">Boiling Point</th>
                <th class="border p-2">Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Refinery Gases</td>
                <td class="border p-2">C₁-C₄</td>
                <td class="border p-2">< 30°C</td>
                <td class="border p-2">LPG, heating</td>
              </tr>
              <tr>
                <td class="border p-2">Gasoline</td>
                <td class="border p-2">C₅-C₁₀</td>
                <td class="border p-2">30-200°C</td>
                <td class="border p-2">Petrol for cars</td>
              </tr>
              <tr>
                <td class="border p-2">Naphtha</td>
                <td class="border p-2">C₆-C₁₀</td>
                <td class="border p-2">60-200°C</td>
                <td class="border p-2">Making chemicals</td>
              </tr>
              <tr>
                <td class="border p-2">Kerosene</td>
                <td class="border p-2">C₁₀-C₁₆</td>
                <td class="border p-2">180-260°C</td>
                <td class="border p-2">Jet fuel, heating</td>
              </tr>
              <tr>
                <td class="border p-2">Diesel</td>
                <td class="border p-2">C₁₄-C₂₀</td>
                <td class="border p-2">260-340°C</td>
                <td class="border p-2">Diesel fuel</td>
              </tr>
              <tr>
                <td class="border p-2">Fuel Oil</td>
                <td class="border p-2">C₂₀-C₃₀</td>
                <td class="border p-2">340-400°C</td>
                <td class="border p-2">Ship fuel, heating</td>
              </tr>
              <tr>
                <td class="border p-2">Lubricating Oil</td>
                <td class="border p-2">C₃₀-C₄₀</td>
                <td class="border p-2">400-450°C</td>
                <td class="border p-2">Lubricants</td>
              </tr>
              <tr>
                <td class="border p-2">Bitumen</td>
                <td class="border p-2">C₄₀+</td>
                <td class="border p-2">> 450°C</td>
                <td class="border p-2">Roads, roofing</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_005",
        title: "Cracking",
        objective: "obj_006",
        text: `
          <h3>Cracking - Breaking Down Large Molecules</h3>
          <p><strong>Cracking</strong> is the process of breaking down large hydrocarbon molecules into smaller, more useful ones.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Thermal Cracking</h4>
              <ul>
                <li>• High temperature (450-750°C)</li>
                <li>• High pressure</li>
                <li>• Produces alkenes and smaller alkanes</li>
                <li>• Example: C₁₀H₂₂ → C₆H₁₄ + C₄H₈</li>
                <li>• Used to make ethene</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Catalytic Cracking</h4>
              <ul>
                <li>• Lower temperature (450-500°C)</li>
                <li>• Uses zeolite catalyst</li>
                <li>• Produces branched alkanes and aromatics</li>
                <li>• Higher octane gasoline</li>
                <li>• More efficient than thermal cracking</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Importance of Cracking:</strong>
            <ul>
              <li>• Converts heavy fractions into more valuable products</li>
              <li>• Produces alkenes for the chemical industry</li>
              <li>• Increases gasoline yield</li>
              <li>• Improves octane rating of gasoline</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Reforming",
        objective: "obj_007",
        text: `
          <h3>Reforming</h3>
          <p><strong>Reforming</strong> is the process of rearranging molecules to improve fuel quality.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Reforming</h4>
              <ul>
                <li>• <strong>Catalytic Reforming:</strong></li>
                <li>• Uses platinum catalyst</li>
                <li>• Produces aromatics from alkanes</li>
                <li>• Increases octane number</li>
                <li>• <strong>Steam Reforming:</strong></li>
                <li>• Produces hydrogen</li>
                <li>• Uses methane + steam</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Higher octane gasoline</li>
                <li>• Better engine performance</li>
                <li>• Produces hydrogen</li>
                <li>• Produces aromatics (benzene, toluene)</li>
                <li>• Used in petrochemical industry</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Petrochemicals",
        objective: "obj_008",
        text: `
          <h3>Petrochemicals from Petroleum</h3>
          <p>Petroleum is the source of many chemicals used in industry.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Petrochemicals</h4>
              <ul>
                <li>• <strong>Alkenes:</strong> Ethene, propene</li>
                <li>• <strong>Aromatics:</strong> Benzene, toluene</li>
                <li>• <strong>Methanol:</strong> From methane</li>
                <li>• <strong>Ammonia:</strong> From natural gas</li>
                <li>• <strong>Plastics:</strong> Polyethylene, polypropylene</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Products</h4>
              <ul>
                <li>• <strong>Plastics:</strong> Bags, bottles, pipes</li>
                <li>• <strong>Synthetic fibers:</strong> Polyester, nylon</li>
                <li>• <strong>Detergents:</strong> Cleaning products</li>
                <li>• <strong>Medicines:</strong> Pharmaceuticals</li>
                <li>• <strong>Fertilizers:</strong> Ammonia-based</li>
                <li>• <strong>Synthetic rubber:</strong> Tires</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Environmental Impact",
        objective: "obj_010",
        text: `
          <h3>Environmental Impact of Petroleum</h3>
          <p>The use of petroleum has significant environmental consequences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Issues</h4>
              <ul>
                <li>• <strong>Climate change:</strong> CO₂, CH₄ emissions</li>
                <li>• <strong>Air pollution:</strong> Smog, particulates</li>
                <li>• <strong>Oil spills:</strong> Marine pollution</li>
                <li>• <strong>Gas flaring:</strong> Wasteful, polluting</li>
                <li>• <strong>Habitat destruction:</strong> Extraction</li>
                <li>• <strong>Water pollution:</strong> Contamination</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Renewable energy:</strong> Solar, wind</li>
                <li>• <strong>Electric vehicles:</strong> Reduce emissions</li>
                <li>• <strong>Carbon capture:</strong> Storage of CO₂</li>
                <li>• <strong>Biofuels:</strong> Renewable alternatives</li>
                <li>• <strong>Energy efficiency:</strong> Conservation</li>
                <li>• <strong>Flaring reduction:</strong> Better practices</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Nigeria and Petroleum",
        objective: "obj_014",
        text: `
          <h3>Petroleum in Nigeria</h3>
          <p>Nigeria is Africa's largest oil producer and a major player in the global petroleum industry.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Nigeria produces ~1.5 million barrels/day</li>
                <li>• Oil exports: 90% of export revenue</li>
                <li>• Oil contributes ~10% of GDP</li>
                <li>• Major oil fields: Niger Delta</li>
                <li>• Key companies: NNPC, Shell, Chevron</li>
                <li>• Refineries: Port Harcourt, Warri, Kaduna</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Challenges</h4>
              <ul>
                <li>• Oil spills and environmental damage</li>
                <li>• Gas flaring</li>
                <li>• Pipeline vandalism</li>
                <li>• Refining capacity insufficient</li>
                <li>• Over-reliance on oil exports</li>
                <li>• Petroleum subsidies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Sustainability and Alternatives",
        objective: "obj_013",
        text: `
          <h3>Alternatives to Petroleum</h3>
          <p>As petroleum resources decline, alternatives are being developed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Renewable Alternatives</h4>
              <ul>
                <li>• <strong>Biofuels:</strong> Ethanol, biodiesel</li>
                <li>• <strong>Solar energy:</strong> Photovoltaic</li>
                <li>• <strong>Wind energy:</strong> Wind turbines</li>
                <li>• <strong>Hydrogen:</strong> Fuel cells</li>
                <li>• <strong>Nuclear:</strong> Nuclear power</li>
                <li>• <strong>Geothermal:</strong> Earth's heat</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Challenges</h4>
              <ul>
                <li>• Higher costs currently</li>
                <li>• Infrastructure needs</li>
                <li>• Energy storage</li>
                <li>• Transition period</li>
                <li>• Political resistance</li>
                <li>• Technology development</li>
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
          <h4>🛢️ Petroleum Basics</h4>
          <ul>
            <li>• Formed from marine organisms over millions of years</li>
            <li>• Separated by fractional distillation</li>
            <li>• Fractions have different uses</li>
            <li>• Cracking and reforming improve products</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Points</h4>
          <ul>
            <li>• Petroleum is essential to modern life</li>
            <li>• Environmental impacts are significant</li>
            <li>• Nigeria is a major oil producer</li>
            <li>• Sustainable alternatives are needed</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Petroleum has powered modern society, but its environmental impact and finite supply mean we must transition to sustainable alternatives.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Petroleum comes from dinosaurs",
        correction: "Petroleum comes from marine organisms",
        explanation: "Petroleum is formed from marine plankton and algae, not dinosaurs."
      },
      {
        id: "mis_002",
        misconception: "Petroleum is pure oil",
        correction: "Petroleum is a mixture of many compounds",
        explanation: "Crude oil contains thousands of different hydrocarbon compounds."
      },
      {
        id: "mis_003",
        misconception: "Fractional distillation is a chemical reaction",
        correction: "Fractional distillation is a physical separation",
        explanation: "Fractional distillation separates compounds based on boiling points without chemical change."
      },
      {
        id: "mis_004",
        misconception: "Petroleum is renewable",
        correction: "Petroleum is a non-renewable resource",
        explanation: "Petroleum takes millions of years to form and cannot be replenished quickly."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Transportation",
        description: "Petroleum fuels vehicles.",
        example: "Gasoline, diesel, jet fuel"
      },
      {
        id: "app_002",
        title: "Plastics",
        description: "Petroleum provides raw materials for plastics.",
        example: "Polyethylene, polypropylene"
      },
      {
        id: "app_003",
        title: "Energy",
        description: "Petroleum generates electricity.",
        example: "Fuel oil, natural gas"
      },
      {
        id: "app_004",
        title: "Manufacturing",
        description: "Petroleum is used in many products.",
        example: "Lubricants, solvents, medicines"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Petroleum", definition: "A naturally occurring mixture of hydrocarbons." },
    { term: "Crude Oil", definition: "Unrefined petroleum." },
    { term: "Fractional Distillation", definition: "Separation based on boiling points." },
    { term: "Cracking", definition: "Breaking large hydrocarbons into smaller ones." },
    { term: "Reforming", definition: "Rearranging molecules to improve properties." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction." },
    { term: "Octane Number", definition: "Measure of fuel's resistance to knocking." },
    { term: "API Gravity", definition: "Measure of oil density." },
    { term: "Sweet Oil", definition: "Oil with low sulfur content." },
    { term: "Sour Oil", definition: "Oil with high sulfur content." },
    { term: "Refinery", definition: "Facility that processes petroleum." },
    { term: "Petrochemical", definition: "Chemical derived from petroleum." },
    { term: "Bitumen", definition: "Heavy hydrocarbon fraction used for roads." },
    { term: "LPG", definition: "Liquefied Petroleum Gas (propane/butane)." },
    { term: "Naphtha", definition: "Petroleum fraction used for chemicals." },
    { term: "Gasoline", definition: "Fuel for internal combustion engines." },
    { term: "Kerosene", definition: "Fuel for jet engines and heating." },
    { term: "Diesel", definition: "Fuel for diesel engines." },
    { term: "Non-Renewable", definition: "A resource that cannot be replenished quickly." },
    { term: "Hydrocarbon", definition: "Compound containing only carbon and hydrogen." }
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
      question: "What is petroleum?",
      type: "multiple_choice",
      options: [
        "A pure substance",
        "A mixture of hydrocarbons",
        "A type of rock",
        "A chemical compound"
      ],
      answer: "A mixture of hydrocarbons",
      explanation: "Petroleum is a complex mixture of hydrocarbons."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "How is petroleum formed?",
      type: "multiple_choice",
      options: [
        "From dinosaurs",
        "From marine organisms over millions of years",
        "From plants",
        "From volcanic activity"
      ],
      answer: "From marine organisms over millions of years",
      explanation: "Petroleum forms from marine organisms under heat and pressure."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What process separates petroleum into fractions?",
      type: "multiple_choice",
      options: [
        "Cracking",
        "Fractional distillation",
        "Reforming",
        "Combustion"
      ],
      answer: "Fractional distillation",
      explanation: "Fractional distillation separates petroleum based on boiling points."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which fraction is used as jet fuel?",
      type: "multiple_choice",
      options: ["Gasoline", "Kerosene", "Diesel", "Fuel oil"],
      answer: "Kerosene",
      explanation: "Kerosene (jet fuel) is used in aviation."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "How does chain length affect boiling point?",
      type: "multiple_choice",
      options: [
        "Longer chains have lower boiling points",
        "Longer chains have higher boiling points",
        "Chain length doesn't affect boiling point",
        "Only branches affect boiling point"
      ],
      answer: "Longer chains have higher boiling points",
      explanation: "Larger molecules have stronger van der Waals forces and higher boiling points."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is cracking?",
      type: "multiple_choice",
      options: [
        "Combining small molecules",
        "Breaking large molecules into smaller ones",
        "Separating mixtures",
        "Purifying compounds"
      ],
      answer: "Breaking large molecules into smaller ones",
      explanation: "Cracking breaks down large hydrocarbon molecules into smaller ones."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is bitumen used for?",
      type: "multiple_choice",
      options: [
        "Car fuel",
        "Road surfacing",
        "Jet fuel",
        "Heating"
      ],
      answer: "Road surfacing",
      explanation: "Bitumen is used for road surfacing and roofing."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is the product of catalytic cracking?",
      type: "multiple_choice",
      options: [
        "Only alkanes",
        "Branched alkanes and alkenes",
        "Only aromatic compounds",
        "Only gases"
      ],
      answer: "Branched alkanes and alkenes",
      explanation: "Catalytic cracking produces branched alkanes and alkenes."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is the purpose of reforming?",
      type: "multiple_choice",
      options: [
        "To break molecules",
        "To improve octane number",
        "To separate fractions",
        "To produce bitumen"
      ],
      answer: "To improve octane number",
      explanation: "Reforming rearranges molecules to improve octane rating."
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is petroleum important to Nigeria?",
      type: "multiple_choice",
      options: [
        "It provides food",
        "It is the main source of revenue",
        "It is used for medicine",
        "It is a renewable resource"
      ],
      answer: "It is the main source of revenue",
      explanation: "Oil exports provide 90% of Nigeria's export revenue."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a major environmental issue with petroleum?",
      type: "multiple_choice",
      options: [
        "It creates clean energy",
        "Oil spills and CO₂ emissions",
        "It reduces pollution",
        "It is biodegradable"
      ],
      answer: "Oil spills and CO₂ emissions",
      explanation: "Oil spills and CO₂ emissions are major environmental issues."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "Where does the lightest fraction collect in a distillation column?",
      type: "multiple_choice",
      options: ["At the bottom", "At the top", "In the middle", "Throughout"],
      answer: "At the top",
      explanation: "The lightest fractions have the lowest boiling points and collect at the top."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "What catalyst is used in catalytic cracking?",
      type: "multiple_choice",
      options: ["Platinum", "Zeolite", "Iron", "Nickel"],
      answer: "Zeolite",
      explanation: "Zeolite catalysts are used in catalytic cracking."
    },
    {
      id: "prac_014",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is petroleum called a non-renewable resource?",
      type: "multiple_choice",
      options: [
        "It can be made quickly",
        "It takes millions of years to form",
        "It is always available",
        "It is renewable"
      ],
      answer: "It takes millions of years to form",
      explanation: "Petroleum is non-renewable because it takes millions of years to form."
    },
    {
      id: "prac_015",
      objective: "obj_004",
      difficulty: "hard",
      question: "Which fraction has the highest boiling point?",
      type: "multiple_choice",
      options: ["Gasoline", "Kerosene", "Diesel", "Bitumen"],
      answer: "Bitumen",
      explanation: "Bitumen has the highest boiling point and contains the largest molecules."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_petroleum",
    title: "Petroleum Quiz",
    description: "Test your understanding of petroleum",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is petroleum?",
        type: "short_answer",
        answer_key: "A mixture of hydrocarbons",
        explanation: "Petroleum is a complex mixture of hydrocarbons."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "How is petroleum formed?",
        type: "short_answer",
        answer_key: "From marine organisms over millions of years",
        explanation: "Petroleum forms from marine organisms under heat and pressure."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What process separates petroleum into fractions?",
        type: "short_answer",
        answer_key: "Fractional distillation",
        explanation: "Fractional distillation separates petroleum based on boiling points."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which fraction is used as jet fuel?",
        type: "short_answer",
        answer_key: "Kerosene",
        explanation: "Kerosene is used as jet fuel."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "How does chain length affect boiling point?",
        type: "short_answer",
        answer_key: "Longer chains have higher boiling points",
        explanation: "Longer hydrocarbon chains have higher boiling points."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is cracking?",
        type: "short_answer",
        answer_key: "Breaking large molecules into smaller ones",
        explanation: "Cracking breaks down large hydrocarbon molecules."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is bitumen used for?",
        type: "short_answer",
        answer_key: "Road surfacing",
        explanation: "Bitumen is used for road surfacing and roofing."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the purpose of reforming?",
        type: "short_answer",
        answer_key: "To improve octane number",
        explanation: "Reforming rearranges molecules to improve octane rating."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a major environmental issue with petroleum?",
        type: "short_answer",
        answer_key: "Oil spills and CO₂ emissions",
        explanation: "Oil spills and CO₂ emissions are major environmental concerns."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "Why is petroleum a non-renewable resource?",
        type: "short_answer",
        answer_key: "It takes millions of years to form",
        explanation: "Petroleum is non-renewable because it takes millions of years to form."
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
        "Understand the formation of petroleum",
        "Explain fractional distillation",
        "Describe cracking and reforming",
        "Discuss the importance of petroleum"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is petroleum?" },
        { time: "5-10 min", activity: "Direct Instruction - Formation of Petroleum" },
        { time: "10-15 min", activity: "Direct Instruction - Composition of Petroleum" },
        { time: "15-20 min", activity: "Direct Instruction - Fractional Distillation" },
        { time: "20-25 min", activity: "Direct Instruction - Fractions and Uses" },
        { time: "25-30 min", activity: "Direct Instruction - Cracking and Reforming" },
        { time: "30-35 min", activity: "Direct Instruction - Environmental Impact" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A mixture of hydrocarbons",
        prac_002: "From marine organisms over millions of years",
        prac_003: "Fractional distillation",
        prac_004: "Kerosene",
        prac_005: "Longer chains have higher boiling points",
        prac_006: "Breaking large molecules into smaller ones",
        prac_007: "Road surfacing",
        prac_008: "Branched alkanes and alkenes",
        prac_009: "To improve octane number",
        prac_010: "It is the main source of revenue",
        prac_011: "Oil spills and CO₂ emissions",
        prac_012: "At the top",
        prac_013: "Zeolite",
        prac_014: "It takes millions of years to form",
        prac_015: "Bitumen"
      },
      assessment: {
        ass_001: "A mixture of hydrocarbons",
        ass_002: "From marine organisms over millions of years",
        ass_003: "Fractional distillation",
        ass_004: "Kerosene",
        ass_005: "Longer chains have higher boiling points",
        ass_006: "Breaking large molecules into smaller ones",
        ass_007: "Road surfacing",
        ass_008: "To improve octane number",
        ass_009: "Oil spills and CO₂ emissions",
        ass_010: "It takes millions of years to form"
      }
    },
    extensionActivities: [
      "Research Nigeria's petroleum industry",
      "Study the environmental impact of oil spills",
      "Research alternative fuels",
      "Learn about the petrochemical industry"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research petroleum chemistry",
        "Study refining processes",
        "Research global oil markets",
        "Study the chemistry of oil sands"
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
      title: "Petroleum Formation",
      description: "Diagram showing how petroleum is formed",
      url: "/diagrams/petroleum-formation.png",
      alt: "Petroleum formation diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Fractional Distillation",
      description: "Diagram of the fractional distillation column",
      url: "/diagrams/fractional-distillation.png",
      alt: "Fractional distillation diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Petroleum Fractions",
      description: "Chart showing petroleum fractions and their uses",
      url: "/diagrams/petroleum-fractions.png",
      alt: "Petroleum fractions chart"
    }
  ]
};