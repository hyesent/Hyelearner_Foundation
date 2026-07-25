// Location: src/data/lessons/science/agricultural_science/soil_science.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "agri_lesson_soil_science",
  subject: "Agricultural Science",
  topic: "Soil Science",
  name: "Soil Science",
  icon: "🌱",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic chemistry",
    "Knowledge of plant biology",
    "Understanding of crop production",
    "Interest in soil and agriculture"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Farm Management",
      file: "science/agricultural_science/farm_management.js"
    },
    {
      name: "Crop Production",
      file: "science/agricultural_science/crop_production.js"
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
      description: "Define soil and explain its importance",
      indicator: "Student can explain what soil is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the components of soil",
      indicator: "Student can list the main components of soil"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the types of soil",
      indicator: "Student can describe sandy, loamy, and clay soils"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the formation of soil",
      indicator: "Student can explain how soil is formed"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain soil properties",
      indicator: "Student can describe physical, chemical, and biological properties"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe soil fertility",
      indicator: "Student can explain what makes soil fertile"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain soil pH and its importance",
      indicator: "Student can describe the role of soil pH in plant growth"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe soil erosion and its causes",
      indicator: "Student can explain how soil erosion occurs"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain soil conservation methods",
      indicator: "Student can describe ways to prevent soil erosion"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the soil profile",
      indicator: "Student can describe the layers of soil"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain soil nutrient cycles",
      indicator: "Student can describe the nitrogen and carbon cycles in soil"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe soil management practices",
      indicator: "Student can explain sustainable soil management"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the relationship between soil and crop growth",
      indicator: "Student can describe how soil affects plant growth"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the causes of soil degradation",
      indicator: "Student can describe factors that damage soil"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the importance of organic matter in soil",
      indicator: "Student can describe the role of organic matter"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Describe soil testing and analysis",
      indicator: "Student can explain how soil is tested"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Soil Science - The Foundation of Agriculture",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about soil formation, properties, fertility, and conservation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Soil Science</h2>
      <p><strong>Soil</strong> is a natural body consisting of minerals, organic matter, water, and air that supports plant growth. It is one of the most important natural resources for agriculture and food production.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌱 Key Concepts</h3>
          <ul>
            <li>✓ Soil Components</li>
            <li>✓ Soil Formation</li>
            <li>✓ Soil Types</li>
            <li>✓ Soil Fertility</li>
            <li>✓ Soil pH</li>
            <li>✓ Soil Conservation</li>
            <li>✓ Soil Profile</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• It takes 500+ years to form 2.5 cm of topsoil</li>
            <li>• Soil contains 25% of global biodiversity</li>
            <li>• Nigeria has 7 major soil types</li>
            <li>• Soil organic matter improves fertility</li>
            <li>• Soil is a non-renewable resource</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Soil Science Matters</h4>
        <p>Soil is the foundation of agriculture. Understanding soil science helps us grow healthy crops, conserve the environment, and ensure food security.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Soil Components",
        objective: "obj_002",
        text: `
          <h3>Components of Soil</h3>
          <p>Soil is composed of four main components.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Soil Composition</h4>
              <ul>
                <li>• <strong>Mineral matter (45%):</strong> Sand, silt, clay</li>
                <li>• <strong>Organic matter (5%):</strong> Decomposed plants and animals</li>
                <li>• <strong>Water (25%):</strong> Dissolved nutrients</li>
                <li>• <strong>Air (25%):</strong> Oxygen for roots and organisms</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Soil Organisms</h4>
              <ul>
                <li>• <strong>Microorganisms:</strong> Bacteria, fungi, actinomycetes</li>
                <li>• <strong>Macroorganisms:</strong> Earthworms, ants, termites</li>
                <li>• <strong>Role:</strong> Decomposition, nutrient cycling</li>
                <li>• <strong>Importance:</strong> Soil health and fertility</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Soil Formation",
        objective: "obj_004",
        text: `
          <h3>How Soil is Formed</h3>
          <p>Soil formation is a slow process involving physical, chemical, and biological weathering.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Factors of Soil Formation</h4>
              <ul>
                <li>• <strong>Parent material:</strong> Rock type</li>
                <li>• <strong>Climate:</strong> Temperature, rainfall</li>
                <li>• <strong>Organisms:</strong> Plants, animals, microorganisms</li>
                <li>• <strong>Topography:</strong> Slope, elevation</li>
                <li>• <strong>Time:</strong> Thousands of years</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Weathering Processes</h4>
              <ul>
                <li>• <strong>Physical:</strong> Temperature, frost, wind</li>
                <li>• <strong>Chemical:</strong> Water, acids, oxidation</li>
                <li>• <strong>Biological:</strong> Plant roots, organisms</li>
                <li>• All break rocks into smaller particles</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Types of Soil",
        objective: "obj_003",
        text: `
          <h3>Soil Types</h3>
          <p>Soils are classified based on their texture and composition.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sandy Soil</h4>
              <ul>
                <li>• Large particles</li>
                <li>• Good drainage</li>
                <li>• Low fertility</li>
                <li>• Warms quickly</li>
                <li>• Low water retention</li>
                <li>• Easy to cultivate</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Loamy Soil</h4>
              <ul>
                <li>• Balanced texture</li>
                <li>• Good drainage</li>
                <li>• High fertility</li>
                <li>• Retains moisture</li>
                <li>• Easy to work</li>
                <li>• Best for crops</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Clay Soil</h4>
              <ul>
                <li>• Fine particles</li>
                <li>• Poor drainage</li>
                <li>• High fertility</li>
                <li>• Hard when dry</li>
                <li>• Sticky when wet</li>
                <li>• Difficult to cultivate</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Soil Properties",
        objective: "obj_005",
        text: `
          <h3>Soil Properties</h3>
          <p>Soil properties determine its suitability for crop production.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Properties</h4>
              <ul>
                <li>• <strong>Texture:</strong> Sand, silt, clay</li>
                <li>• <strong>Structure:</strong> How particles are arranged</li>
                <li>• <strong>Porosity:</strong> Space between particles</li>
                <li>• <strong>Water holding capacity:</strong> Moisture retention</li>
                <li>• <strong>Color:</strong> Organic matter content</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemical Properties</h4>
              <ul>
                <li>• <strong>pH:</strong> Acidity or alkalinity</li>
                <li>• <strong>Nutrient content:</strong> NPK, micronutrients</li>
                <li>• <strong>Cation exchange capacity:</strong> Nutrient holding</li>
                <li>• <strong>Salinity:</strong> Salt content</li>
                <li>• <strong>Organic matter:</strong> Decomposed material</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Biological Properties</h4>
              <ul>
                <li>• <strong>Microorganisms:</strong> Bacteria, fungi</li>
                <li>• <strong>Earthworms:</strong> Aerate soil</li>
                <li>• <strong>Organic matter:</strong> Food for organisms</li>
                <li>• <strong>Decomposition:</strong> Nutrient release</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Soil Texture Triangle</h4>
              <ul>
                <li>• Determines soil type</li>
                <li>• Based on sand, silt, clay percentages</li>
                <li>• Affects water and nutrient holding</li>
                <li>• Guides management decisions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Soil Fertility",
        objective: "obj_006",
        text: `
          <h3>Soil Fertility</h3>
          <p>Soil fertility is the ability of soil to support plant growth by providing essential nutrients.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Essential Nutrients</h4>
              <ul>
                <li>• <strong>Macronutrients:</strong> N, P, K (NPK)</li>
                <li>• <strong>Secondary:</strong> Ca, Mg, S</li>
                <li>• <strong>Micronutrients:</strong> Fe, Zn, Cu, Mn</li>
                <li>• <strong>Organic matter:</strong> Improves fertility</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Maintaining Fertility</h4>
              <ul>
                <li>• <strong>Fertilizers:</strong> Add nutrients</li>
                <li>• <strong>Organic manure:</strong> Compost, farmyard manure</li>
                <li>• <strong>Crop rotation:</strong> Legumes fix nitrogen</li>
                <li>• <strong>Green manure:</strong> Cover crops</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Soil pH",
        objective: "obj_007",
        text: `
          <h3>Soil pH</h3>
          <p>Soil pH measures the acidity or alkalinity of soil, affecting nutrient availability.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 pH Scale</h4>
              <ul>
                <li>• <strong>pH < 7:</strong> Acidic soil</li>
                <li>• <strong>pH = 7:</strong> Neutral soil</li>
                <li>• <strong>pH > 7:</strong> Alkaline soil</li>
                <li>• <strong>Optimal range:</strong> 5.5 - 7.0</li>
                <li>• Most crops grow best in this range</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects of pH</h4>
              <ul>
                <li>• <strong>Acidic soil:</strong> Al toxicity, nutrient deficiency</li>
                <li>• <strong>Alkaline soil:</strong> Nutrient tie-up, iron deficiency</li>
                <li>• <strong>Adjusting pH:</strong> Lime (raise), Sulfur (lower)</li>
                <li>• <strong>Testing:</strong> Use pH meter or test kit</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Soil Erosion",
        objective: "obj_008",
        text: `
          <h3>Soil Erosion</h3>
          <p>Soil erosion is the removal of topsoil by water, wind, or human activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes of Erosion</h4>
              <ul>
                <li>• <strong>Water:</strong> Rain, runoff, flooding</li>
                <li>• <strong>Wind:</strong> Strong winds, dry conditions</li>
                <li>• <strong>Deforestation:</strong> Removing trees</li>
                <li>• <strong>Overgrazing:</strong> Removing vegetation</li>
                <li>• <strong>Poor farming:</strong> Plowing on slopes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects of Erosion</h4>
              <ul>
                <li>• Loss of topsoil (most fertile layer)</li>
                <li>• Reduced crop yields</li>
                <li>• Desertification</li>
                <li>• Sediment in water bodies</li>
                <li>• Loss of organic matter</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Soil Conservation",
        objective: "obj_009",
        text: `
          <h3>Soil Conservation Methods</h3>
          <p>Soil conservation protects soil from erosion and degradation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Methods</h4>
              <ul>
                <li>• <strong>Contour plowing:</strong> Plowing across slopes</li>
                <li>• <strong>Terracing:</strong> Level steps on slopes</li>
                <li>• <strong>Cover crops:</strong> Protect soil</li>
                <li>• <strong>Windbreaks:</strong> Trees to reduce wind</li>
                <li>• <strong>Mulching:</strong> Cover soil with material</li>
                <li>• <strong>Afforestation:</strong> Planting trees</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Prevents soil loss</li>
                <li>• Maintains soil fertility</li>
                <li>• Protects water quality</li>
                <li>• Increases crop yields</li>
                <li>• Protects biodiversity</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Soil Profile</text>
              
              <!-- Soil layers -->
              <g transform="translate(300, 180)">
                <!-- Topsoil (O Horizon) -->
                <rect x="-150" y="-80" width="300" height="40" rx="3" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="-55" text-anchor="middle" font-size="14" font-weight="bold" fill="white">O Horizon - Organic Matter</text>
                <text x="0" y="-40" text-anchor="middle" font-size="11" fill="white">Plant debris, humus</text>
                
                <!-- Topsoil (A Horizon) -->
                <rect x="-150" y="-40" width="300" height="40" rx="3" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
                <text x="0" y="-15" text-anchor="middle" font-size="14" font-weight="bold" fill="white">A Horizon - Topsoil</text>
                <text x="0" y="0" text-anchor="middle" font-size="11" fill="white">Mineral + organic matter, fertile</text>
                
                <!-- Subsoil (B Horizon) -->
                <rect x="-150" y="0" width="300" height="40" rx="3" fill="#a1887f" stroke="#5d4037" stroke-width="2"/>
                <text x="0" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="white">B Horizon - Subsoil</text>
                <text x="0" y="40" text-anchor="middle" font-size="11" fill="white">Mineral accumulation, clay</text>
                
                <!-- Parent Material (C Horizon) -->
                <rect x="-150" y="40" width="300" height="40" rx="3" fill="#bc9b7a" stroke="#8d6e63" stroke-width="2"/>
                <text x="0" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="white">C Horizon - Parent Material</text>
                <text x="0" y="80" text-anchor="middle" font-size="11" fill="white">Partly weathered rock</text>
                
                <!-- Bedrock (R Horizon) -->
                <rect x="-150" y="80" width="300" height="30" rx="3" fill="#78909c" stroke="#455a64" stroke-width="2"/>
                <text x="0" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="white">R Horizon - Bedrock</text>
                <text x="0" y="115" text-anchor="middle" font-size="11" fill="white">Unweathered rock</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Soil Profile",
        objective: "obj_010",
        text: `
          <h3>The Soil Profile</h3>
          <p>The soil profile is a vertical section of soil showing the different layers (horizons).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Soil Horizons</h4>
              <ul>
                <li>• <strong>O Horizon:</strong> Organic matter</li>
                <li>• <strong>A Horizon:</strong> Topsoil (fertile)</li>
                <li>• <strong>B Horizon:</strong> Subsoil (clay accumulation)</li>
                <li>• <strong>C Horizon:</strong> Parent material</li>
                <li>• <strong>R Horizon:</strong> Bedrock</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Shows soil development</li>
                <li>• Indicates fertility</li>
                <li>• Guides land use</li>
                <li>• Helps in soil classification</li>
                <li>• Informs management decisions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Soil Degradation",
        objective: "obj_014",
        text: `
          <h3>Soil Degradation</h3>
          <p>Soil degradation is the decline in soil quality caused by human activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes</h4>
              <ul>
                <li>• <strong>Overcultivation:</strong> Constant farming</li>
                <li>• <strong>Overgrazing:</strong> Too many animals</li>
                <li>• <strong>Deforestation:</strong> Tree removal</li>
                <li>• <strong>Chemical use:</strong> Excessive fertilizer/pesticides</li>
                <li>• <strong>Salinization:</strong> Salt buildup</li>
                <li>• <strong>Acidification:</strong> pH decrease</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Sustainable farming:</strong> Conservation agriculture</li>
                <li>• <strong>Agroforestry:</strong> Trees on farms</li>
                <li>• <strong>Organic farming:</strong> Reduce chemicals</li>
                <li>• <strong>Soil testing:</strong> Know your soil</li>
                <li>• <strong>Education:</strong> Farmer training</li>
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
          <h4>🌱 Soil Science</h4>
          <ul>
            <li>• Soil is a mixture of minerals, organic matter, water, and air</li>
            <li>• Different soil types: sandy, loamy, clay</li>
            <li>• Soil pH affects nutrient availability</li>
            <li>• Soil fertility depends on nutrients and organic matter</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Practices</h4>
          <ul>
            <li>• Soil erosion must be prevented</li>
            <li>• Soil conservation protects topsoil</li>
            <li>• The soil profile shows soil development</li>
            <li>• Sustainable management prevents degradation</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Soil is a precious resource. Protecting soil health is essential for sustainable food production and environmental conservation.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Soil is just dirt",
        correction: "Soil is a living, complex ecosystem",
        explanation: "Soil contains minerals, organic matter, water, air, and millions of organisms."
      },
      {
        id: "mis_002",
        misconception: "All soils are the same",
        correction: "Different soils have different properties",
        explanation: "Soils vary in texture, fertility, pH, and other properties."
      },
      {
        id: "mis_003",
        misconception: "Fertilizer can replace all soil needs",
        correction: "Fertilizer adds nutrients but doesn't replace organic matter",
        explanation: "Organic matter improves soil structure and health."
      },
      {
        id: "mis_004",
        misconception: "Soil erosion is only a natural process",
        correction: "Human activities accelerate soil erosion",
        explanation: "Deforestation, overgrazing, and poor farming speed up erosion."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Crop Production",
        description: "Understanding soil improves crop yields.",
        example: "Choosing the right crops for soil type"
      },
      {
        id: "app_002",
        title: "Soil Conservation",
        description: "Protecting soil from erosion.",
        example: "Terracing, contour plowing"
      },
      {
        id: "app_003",
        title: "Environmental Protection",
        description: "Healthy soil protects water quality.",
        example: "Preventing runoff and sedimentation"
      },
      {
        id: "app_004",
        title: "Land Use Planning",
        description: "Soil science guides land use.",
        example: "Identifying suitable areas for farming"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Soil", definition: "A natural body supporting plant growth." },
    { term: "Topsoil", definition: "The fertile upper layer of soil." },
    { term: "Subsoil", definition: "The layer beneath topsoil." },
    { term: "Parent Material", definition: "The rock from which soil forms." },
    { term: "Humus", definition: "Decomposed organic matter in soil." },
    { term: "Soil Texture", definition: "The proportion of sand, silt, and clay." },
    { term: "Soil Structure", definition: "The arrangement of soil particles." },
    { term: "pH", definition: "A measure of acidity or alkalinity." },
    { term: "NPK", definition: "Nitrogen, Phosphorus, Potassium - key nutrients." },
    { term: "Cation Exchange Capacity", definition: "The ability to hold nutrients." },
    { term: "Erosion", definition: "The removal of topsoil by water or wind." },
    { term: "Conservation", definition: "Protecting soil from degradation." },
    { term: "Fertilizer", definition: "Substance added to soil to improve fertility." },
    { term: "Organic Matter", definition: "Decomposed plant and animal material." },
    { term: "Soil Profile", definition: "Vertical section showing soil layers." },
    { term: "Horizon", definition: "A distinct layer in the soil profile." },
    { term: "Macronutrient", definition: "Nutrient needed in large amounts (N, P, K)." },
    { term: "Micronutrient", definition: "Nutrient needed in small amounts (Fe, Zn)." },
    { term: "Salinization", definition: "Salt accumulation in soil." },
    { term: "Degradation", definition: "Decline in soil quality." }
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
      question: "What is soil?",
      type: "multiple_choice",
      options: [
        "Just dirt",
        "A natural body that supports plant growth",
        "Only minerals",
        "Only organic matter"
      ],
      answer: "A natural body that supports plant growth",
      explanation: "Soil is a natural body that supports plant growth."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a component of soil?",
      type: "multiple_choice",
      options: ["Mineral matter", "Organic matter", "Water", "All of the above"],
      answer: "All of the above",
      explanation: "Soil contains mineral matter, organic matter, water, and air."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which soil type has large particles and good drainage?",
      type: "multiple_choice",
      options: ["Sandy", "Loamy", "Clay", "Silty"],
      answer: "Sandy",
      explanation: "Sandy soil has large particles and drains well."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "How is soil formed?",
      type: "multiple_choice",
      options: [
        "Instantly",
        "Through weathering over time",
        "By humans",
        "By animals only"
      ],
      answer: "Through weathering over time",
      explanation: "Soil is formed through weathering over thousands of years."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is soil texture?",
      type: "multiple_choice",
      options: [
        "The color of soil",
        "The proportion of sand, silt, and clay",
        "The pH of soil",
        "The organic matter content"
      ],
      answer: "The proportion of sand, silt, and clay",
      explanation: "Soil texture is the proportion of sand, silt, and clay."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What makes soil fertile?",
      type: "multiple_choice",
      options: [
        "Only sand",
        "Nutrients and organic matter",
        "Only clay",
        "Only water"
      ],
      answer: "Nutrients and organic matter",
      explanation: "Soil fertility depends on nutrients and organic matter."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the optimal pH range for most crops?",
      type: "multiple_choice",
      options: ["3.0-4.0", "5.5-7.0", "8.0-9.0", "10.0-11.0"],
      answer: "5.5-7.0",
      explanation: "Most crops grow best in soil with pH between 5.5 and 7.0."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is soil erosion?",
      type: "multiple_choice",
      options: [
        "The formation of soil",
        "The removal of topsoil",
        "The addition of nutrients",
        "The mixing of soil layers"
      ],
      answer: "The removal of topsoil",
      explanation: "Soil erosion is the removal of topsoil by water or wind."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a method of soil conservation?",
      type: "multiple_choice",
      options: [
        "Deforestation",
        "Overgrazing",
        "Contour plowing",
        "Burning of vegetation"
      ],
      answer: "Contour plowing",
      explanation: "Contour plowing is a soil conservation method."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the topsoil horizon called?",
      type: "multiple_choice",
      options: ["O Horizon", "A Horizon", "B Horizon", "C Horizon"],
      answer: "A Horizon",
      explanation: "The A Horizon is the topsoil layer."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What nutrient is fixed by leguminous crops?",
      type: "multiple_choice",
      options: ["Phosphorus", "Potassium", "Nitrogen", "Calcium"],
      answer: "Nitrogen",
      explanation: "Leguminous crops fix nitrogen through bacteria in their roots."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a sustainable soil management practice?",
      type: "multiple_choice",
      options: [
        "Burning all crop residues",
        "Excessive chemical use",
        "Crop rotation",
        "Continuous monoculture"
      ],
      answer: "Crop rotation",
      explanation: "Crop rotation is a sustainable soil management practice."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How does soil affect crop growth?",
      type: "multiple_choice",
      options: [
        "No effect",
        "Provides nutrients and water",
        "Only affects root growth",
        "Only affects yield"
      ],
      answer: "Provides nutrients and water",
      explanation: "Soil provides nutrients and water essential for crop growth."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What causes soil degradation?",
      type: "multiple_choice",
      options: [
        "Overcultivation",
        "Deforestation",
        "Chemical misuse",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Overcultivation, deforestation, and chemical misuse degrade soil."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Why is organic matter important in soil?",
      type: "multiple_choice",
      options: [
        "It adds nutrients",
        "Improves soil structure",
        "Increases water holding capacity",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Organic matter improves nutrients, structure, and water holding."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_soil_science",
    title: "Soil Science Quiz",
    description: "Test your understanding of soil science",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is soil?",
        type: "short_answer",
        answer_key: "A natural body that supports plant growth",
        explanation: "Soil is a natural body that supports plant growth."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one component of soil.",
        type: "short_answer",
        answer_key: "Mineral matter (or any valid)",
        explanation: "Soil contains mineral matter, organic matter, water, and air."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Which soil type is best for agriculture?",
        type: "short_answer",
        answer_key: "Loamy soil",
        explanation: "Loamy soil is best for agriculture."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is soil texture?",
        type: "short_answer",
        answer_key: "The proportion of sand, silt, and clay",
        explanation: "Soil texture is the proportion of sand, silt, and clay."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What makes soil fertile?",
        type: "short_answer",
        answer_key: "Nutrients and organic matter",
        explanation: "Soil fertility depends on nutrients and organic matter."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the optimal pH range for most crops?",
        type: "short_answer",
        answer_key: "5.5-7.0",
        explanation: "Most crops grow best in soil with pH between 5.5 and 7.0."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is soil erosion?",
        type: "short_answer",
        answer_key: "The removal of topsoil",
        explanation: "Soil erosion is the removal of topsoil."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is a method of soil conservation?",
        type: "short_answer",
        answer_key: "Contour plowing (or any valid)",
        explanation: "Contour plowing is a soil conservation method."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the topsoil horizon called?",
        type: "short_answer",
        answer_key: "A Horizon",
        explanation: "The A Horizon is the topsoil layer."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What causes soil degradation?",
        type: "short_answer",
        answer_key: "Overcultivation, deforestation, chemical misuse",
        explanation: "These human activities degrade soil quality."
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
        "Understand soil composition and types",
        "Explain soil properties and fertility",
        "Describe soil pH and its importance",
        "Explain soil conservation methods"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is soil?" },
        { time: "5-10 min", activity: "Direct Instruction - Soil Components" },
        { time: "10-15 min", activity: "Direct Instruction - Soil Types" },
        { time: "15-20 min", activity: "Direct Instruction - Soil Properties" },
        { time: "20-25 min", activity: "Direct Instruction - Soil Fertility" },
        { time: "25-30 min", activity: "Direct Instruction - Soil pH" },
        { time: "30-35 min", activity: "Direct Instruction - Erosion and Conservation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A natural body that supports plant growth",
        prac_002: "All of the above",
        prac_003: "Sandy",
        prac_004: "Through weathering over time",
        prac_005: "The proportion of sand, silt, and clay",
        prac_006: "Nutrients and organic matter",
        prac_007: "5.5-7.0",
        prac_008: "The removal of topsoil",
        prac_009: "Contour plowing",
        prac_010: "A Horizon",
        prac_011: "Nitrogen",
        prac_012: "Crop rotation",
        prac_013: "Provides nutrients and water",
        prac_014: "All of the above",
        prac_015: "All of the above"
      },
      assessment: {
        ass_001: "A natural body that supports plant growth",
        ass_002: "Mineral matter (or any valid)",
        ass_003: "Loamy soil",
        ass_004: "The proportion of sand, silt, and clay",
        ass_005: "Nutrients and organic matter",
        ass_006: "5.5-7.0",
        ass_007: "The removal of topsoil",
        ass_008: "Contour plowing (or any valid)",
        ass_009: "A Horizon",
        ass_010: "Overcultivation, deforestation, chemical misuse"
      }
    },
    extensionActivities: [
      "Collect and test soil samples",
      "Research soil types in your area",
      "Study soil conservation practices",
      "Visit a farm to observe soil"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research soil microbiology",
        "Study soil chemistry",
        "Research soil classification",
        "Study soil degradation"
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
      title: "Soil Profile",
      description: "Diagram showing the soil profile layers",
      url: "/diagrams/soil-profile.png",
      alt: "Soil profile diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Soil Texture Triangle",
      description: "Chart showing soil texture classification",
      url: "/diagrams/soil-texture.png",
      alt: "Soil texture triangle"
    }
  ]
};