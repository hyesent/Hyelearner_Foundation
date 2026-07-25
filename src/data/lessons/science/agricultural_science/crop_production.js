// Location: src/data/lessons/science/agricultural_science/crop_production.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "agri_lesson_crop_production",
  subject: "Agricultural Science",
  topic: "Crop Production",
  name: "Crop Production",
  icon: "🌾",
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
    "Understanding of plant biology",
    "Knowledge of soil types",
    "Basic understanding of farming",
    "Interest in agriculture"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Soil Science",
      file: "science/agricultural_science/soil_science.js"
    },
    {
      name: "Animal Husbandry",
      file: "science/agricultural_science/animal_husbandry.js"
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
      description: "Define crop production and explain its importance",
      indicator: "Student can explain what crop production is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify different types of crops",
      indicator: "Student can classify crops into different categories"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the factors affecting crop production",
      indicator: "Student can list factors that influence crop growth"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the process of land preparation",
      indicator: "Student can explain how land is prepared for planting"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain methods of planting crops",
      indicator: "Student can describe different planting methods"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe crop management practices",
      indicator: "Student can explain weeding, irrigation, and fertilization"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain pest and disease control in crops",
      indicator: "Student can describe methods of controlling pests and diseases"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe harvesting methods",
      indicator: "Student can explain how different crops are harvested"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain post-harvest handling and storage",
      indicator: "Student can describe how crops are stored after harvest"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain crop rotation and its benefits",
      indicator: "Student can describe the importance of crop rotation"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe mixed cropping and intercropping",
      indicator: "Student can explain different cropping systems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the economics of crop production",
      indicator: "Student can discuss costs and returns in crop farming"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the challenges of crop production",
      indicator: "Student can describe problems facing crop farmers"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain sustainable crop production practices",
      indicator: "Student can describe environmentally friendly farming"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe the role of technology in crop production",
      indicator: "Student can explain modern farming technologies"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the importance of crop production to the economy",
      indicator: "Student can discuss the economic significance of crops"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Crop Production - From Seed to Harvest",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about crop production, from land preparation to harvesting and storage."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Crop Production</h2>
      <p><strong>Crop production</strong> is the practice of growing plants for food, feed, fiber, fuel, and other uses. It is a fundamental part of agriculture and essential for human survival. Crop production involves a series of activities from land preparation to harvesting and storage.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌾 Key Concepts</h3>
          <ul>
            <li>✓ Types of Crops</li>
            <li>✓ Land Preparation</li>
            <li>✓ Planting Methods</li>
            <li>✓ Crop Management</li>
            <li>✓ Pest and Disease Control</li>
            <li>✓ Harvesting and Storage</li>
            <li>✓ Crop Rotation</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Agriculture provides 80% of the world's food</li>
            <li>• Nigeria has over 40 million hectares of farmland</li>
            <li>• Cassava is Nigeria's most important root crop</li>
            <li>• Rice is a staple food for millions</li>
            <li>• Cocoa is a major export crop</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Crop Production Matters</h4>
        <p>Crop production provides food, raw materials for industry, and employment for millions of people. It is essential for food security and economic development.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Crops",
        objective: "obj_002",
        text: `
          <h3>Classification of Crops</h3>
          <p>Crops can be classified in several ways based on their use, life cycle, or growth requirements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Based on Use</h4>
              <ul>
                <li>• <strong>Food crops:</strong> Rice, maize, cassava</li>
                <li>• <strong>Cash crops:</strong> Cocoa, rubber, cotton</li>
                <li>• <strong>Feed crops:</strong> Grasses, hay</li>
                <li>• <strong>Fiber crops:</strong> Cotton, jute</li>
                <li>• <strong>Oil crops:</strong> Palm oil, groundnuts</li>
                <li>• <strong>Medicinal crops:</strong> Herbs, medicinal plants</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Based on Life Cycle</h4>
              <ul>
                <li>• <strong>Annuals:</strong> Complete life cycle in one year</li>
                <li>• Example: Maize, rice, millet</li>
                <li>• <strong>Biennials:</strong> Complete in two years</li>
                <li>• Example: Sugar beet, carrots</li>
                <li>• <strong>Perennials:</strong> Live for more than two years</li>
                <li>• Example: Cocoa, coffee, cassava</li>
              </ul>
            </div>
          </div>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Crop Type</th>
                <th class="border p-2">Examples</th>
                <th class="border p-2">Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Cereals</td>
                <td class="border p-2">Rice, maize, wheat</td>
                <td class="border p-2">Human food, animal feed</td>
              </tr>
              <tr>
                <td class="border p-2">Root Crops</td>
                <td class="border p-2">Cassava, yam, potatoes</td>
                <td class="border p-2">Human food, industrial raw materials</td>
              </tr>
              <tr>
                <td class="border p-2">Legumes</td>
                <td class="border p-2">Beans, groundnuts, soya beans</td>
                <td class="border p-2">Food, nitrogen fixation</td>
              </tr>
              <tr>
                <td class="border p-2">Fruits</td>
                <td class="border p-2">Mangoes, oranges, bananas</td>
                <td class="border p-2">Human food, juices</td>
              </tr>
              <tr>
                <td class="border p-2">Vegetables</td>
                <td class="border p-2">Tomatoes, cabbage, spinach</td>
                <td class="border p-2">Human food, vitamins</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_002",
        title: "Factors Affecting Crop Production",
        objective: "obj_003",
        text: `
          <h3>Factors Affecting Crop Production</h3>
          <p>Several factors influence the success of crop production.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Climatic Factors</h4>
              <ul>
                <li>• <strong>Rainfall:</strong> Amount and distribution</li>
                <li>• <strong>Temperature:</strong> Optimal range for growth</li>
                <li>• <strong>Sunlight:</strong> Photosynthesis requirement</li>
                <li>• <strong>Humidity:</strong> Affects transpiration</li>
                <li>• <strong>Wind:</strong> Pollination, drying</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Edaphic (Soil) Factors</h4>
              <ul>
                <li>• <strong>Soil type:</strong> Sandy, loamy, clay</li>
                <li>• <strong>Soil fertility:</strong> Nutrients available</li>
                <li>• <strong>Soil pH:</strong> Acid or alkaline</li>
                <li>• <strong>Soil texture:</strong> Water retention</li>
                <li>• <strong>Soil drainage:</strong> Water movement</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Biological Factors</h4>
              <ul>
                <li>• <strong>Pests:</strong> Insects, rodents</li>
                <li>• <strong>Diseases:</strong> Fungi, bacteria, viruses</li>
                <li>• <strong>Weeds:</strong> Compete for nutrients</li>
                <li>• <strong>Beneficial organisms:</strong> Pollinators</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Socio-economic Factors</h4>
              <ul>
                <li>• <strong>Labor availability:</strong> Farm workers</li>
                <li>• <strong>Capital:</strong> Finance for inputs</li>
                <li>• <strong>Market access:</strong> Selling produce</li>
                <li>• <strong>Government policies:</strong> Subsidies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Land Preparation",
        objective: "obj_004",
        text: `
          <h3>Land Preparation</h3>
          <p>Land preparation is the process of preparing the soil for planting. It is a crucial first step in crop production.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps in Land Preparation</h4>
              <ul>
                <li>• <strong>Clearing:</strong> Remove vegetation</li>
                <li>• <strong>Stumping:</strong> Remove tree stumps</li>
                <li>• <strong>Ploughing:</strong> Turn over the soil</li>
                <li>• <strong>Harrowing:</strong> Break soil clods</li>
                <li>• <strong>Ridging:</strong> Make ridges/rows</li>
                <li>• <strong>Leveling:</strong> Smooth the surface</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance of Land Preparation</h4>
              <ul>
                <li>• Removes weeds and pests</li>
                <li>• Improves soil aeration</li>
                <li>• Enhances water infiltration</li>
                <li>• Creates seedbed for planting</li>
                <li>• Incorporates organic matter</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Planting Methods",
        objective: "obj_005",
        text: `
          <h3>Methods of Planting</h3>
          <p>Different crops require different planting methods.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Planting Methods</h4>
              <ul>
                <li>• <strong>Broadcasting:</strong> Scattering seeds evenly</li>
                <li>• <strong>Drilling:</strong> Planting in rows</li>
                <li>• <strong>Transplanting:</strong> Planting seedlings</li>
                <li>• <strong>Direct sowing:</strong> Planting seeds directly</li>
                <li>• <strong>Steking:</strong> For climbing plants</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Broadcasting:</strong> Rice, millet</li>
                <li>• <strong>Drilling:</strong> Maize, beans</li>
                <li>• <strong>Transplanting:</strong> Rice, tomatoes</li>
                <li>• <strong>Direct sowing:</strong> Cassava, yam</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Crop Management",
        objective: "obj_006",
        text: `
          <h3>Crop Management Practices</h3>
          <p>Proper management is essential for high yields.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Management Practices</h4>
              <ul>
                <li>• <strong>Weeding:</strong> Removing unwanted plants</li>
                <li>• <strong>Irrigation:</strong> Water supply</li>
                <li>• <strong>Fertilization:</strong> Adding nutrients</li>
                <li>• <strong>Mulching:</strong> Covering soil</li>
                <li>• <strong>Pruning:</strong> Removing unnecessary parts</li>
                <li>• <strong>Thinning:</strong> Reducing plant density</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Fertilizers</h4>
              <ul>
                <li>• <strong>Organic:</strong> Compost, manure</li>
                <li>• <strong>Inorganic:</strong> NPK, urea</li>
                <li>• <strong>Nitrogen fertilizer:</strong> Urea, ammonium</li>
                <li>• <strong>Phosphorus fertilizer:</strong> Superphosphate</li>
                <li>• <strong>Potassium fertilizer:</strong> Muriate of potash</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Pest and Disease Control",
        objective: "obj_007",
        text: `
          <h3>Pest and Disease Control</h3>
          <p>Pests and diseases can significantly reduce crop yields if not managed properly.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Pests</h4>
              <ul>
                <li>• <strong>Insects:</strong> Locusts, grasshoppers, aphids</li>
                <li>• <strong>Rodents:</strong> Rats, mice</li>
                <li>• <strong>Birds:</strong> Weavers, parrots</li>
                <li>• <strong>Nematodes:</strong> Roundworms</li>
                <li>• <strong>Mites:</strong> Spider mites</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Control Methods</h4>
              <ul>
                <li>• <strong>Cultural:</strong> Crop rotation, clean farming</li>
                <li>• <strong>Biological:</strong> Natural enemies</li>
                <li>• <strong>Chemical:</strong> Pesticides, fungicides</li>
                <li>• <strong>Physical:</strong> Traps, barriers</li>
                <li>• <strong>Integrated Pest Management (IPM)</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Harvesting",
        objective: "obj_008",
        text: `
          <h3>Harvesting</h3>
          <p>Harvesting is the process of gathering mature crops from the field.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Harvesting Methods</h4>
              <ul>
                <li>• <strong>Manual harvesting:</strong> By hand</li>
                <li>• <strong>Mechanical harvesting:</strong> Machines</li>
                <li>• <strong>Combined harvesting:</strong> Cutting and threshing</li>
                <li>• <strong>Sequential harvesting:</strong> Multiple passes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Indicators of Maturity</h4>
              <ul>
                <li>• <strong>Color change:</strong> Yellowing, browning</li>
                <li>• <strong>Size:</strong> Full development</li>
                <li>• <strong>Texture:</strong> Hardening</li>
                <li>• <strong>Moisture content:</strong> Reduced</li>
                <li>• <strong>Days after planting:</strong> Time guide</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Post-Harvest Handling and Storage",
        objective: "obj_009",
        text: `
          <h3>Post-Harvest Handling</h3>
          <p>Proper handling and storage prevent crop losses after harvest.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Post-Harvest Activities</h4>
              <ul>
                <li>• <strong>Threshing:</strong> Separating grains</li>
                <li>• <strong>Cleaning:</strong> Removing debris</li>
                <li>• <strong>Drying:</strong> Reducing moisture</li>
                <li>• <strong>Shelling:</strong> Removing shells</li>
                <li>• <strong>Grading:</strong> Sorting by quality</li>
                <li>• <strong>Packaging:</strong> Preparing for market</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Storage Methods</h4>
              <ul>
                <li>• <strong>Silos:</strong> Grain storage</li>
                <li>• <strong>Bins:</strong> Small scale storage</li>
                <li>• <strong>Barns:</strong> Dried produce</li>
                <li>• <strong>Refrigeration:</strong> Perishables</li>
                <li>• <strong>Controlled atmosphere:</strong> Modified storage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Cropping Systems",
        objective: "obj_010",
        text: `
          <h3>Cropping Systems</h3>
          <p>Different cropping systems are used to maximize productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Cropping Systems</h4>
              <ul>
                <li>• <strong>Monoculture:</strong> Single crop</li>
                <li>• <strong>Mixed cropping:</strong> Two or more crops</li>
                <li>• <strong>Intercropping:</strong> Crops growing together</li>
                <li>• <strong>Crop rotation:</strong> Sequential planting</li>
                <li>• <strong>Alley cropping:</strong> Trees and crops</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits of Crop Rotation</h4>
              <ul>
                <li>• Improves soil fertility</li>
                <li>• Reduces pest buildup</li>
                <li>• Controls weeds</li>
                <li>• Prevents soil erosion</li>
                <li>• Increases yields</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Sustainable Crop Production",
        objective: "obj_014",
        text: `
          <h3>Sustainable Crop Production</h3>
          <p>Sustainable farming practices protect the environment while producing food.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles</h4>
              <ul>
                <li>• <strong>Conservation:</strong> Protect soil and water</li>
                <li>• <strong>Biodiversity:</strong> Maintain ecosystems</li>
                <li>• <strong>Reduced chemicals:</strong> Minimize pesticides</li>
                <li>• <strong>Organic farming:</strong> Natural methods</li>
                <li>• <strong>Water conservation:</strong> Efficient irrigation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practices</h4>
              <ul>
                <li>• <strong>No-till farming:</strong> Reduce soil disturbance</li>
                <li>• <strong>Cover crops:</strong> Protect soil</li>
                <li>• <strong>Agroforestry:</strong> Trees and crops</li>
                <li>• <strong>Organic fertilizers:</strong> Compost, manure</li>
                <li>• <strong>Integrated pest management</strong></li>
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
          <h4>🌾 Crop Production</h4>
          <ul>
            <li>• Crops are classified by use and life cycle</li>
            <li>• Land preparation is essential before planting</li>
            <li>• Different crops use different planting methods</li>
            <li>• Management practices affect yield</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Practices</h4>
          <ul>
            <li>• Pest and disease control protects crops</li>
            <li>• Harvesting at the right time is important</li>
            <li>• Proper storage prevents losses</li>
            <li>• Sustainable practices protect the environment</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Crop production is essential for food security and economic development. Good practices lead to better yields and sustainable agriculture.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All crops can be grown in any soil",
        correction: "Different crops have different soil requirements",
        explanation: "Crops need specific soil types and conditions to grow well."
      },
      {
        id: "mis_002",
        misconception: "More fertilizer always means better yields",
        correction: "Excess fertilizer can damage crops and the environment",
        explanation: "Proper fertilizer application is important for optimal yields."
      },
      {
        id: "mis_003",
        misconception: "Pesticides are the only way to control pests",
        correction: "Integrated pest management uses multiple methods",
        explanation: "Cultural, biological, and chemical methods can be used together."
      },
      {
        id: "mis_004",
        misconception: "Crop rotation is not important",
        correction: "Crop rotation improves soil health and reduces pests",
        explanation: "Crop rotation is a key practice in sustainable agriculture."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Food Production",
        description: "Crop production provides food for people.",
        example: "Staple crops like rice, maize, and cassava"
      },
      {
        id: "app_002",
        title: "Industrial Raw Materials",
        description: "Crops provide materials for industry.",
        example: "Cotton for textiles, oil palm for oil"
      },
      {
        id: "app_003",
        title: "Employment",
        description: "Crop production provides jobs.",
        example: "Farmers, laborers, agribusiness"
      },
      {
        id: "app_004",
        title: "Export Revenue",
        description: "Cash crops earn foreign exchange.",
        example: "Cocoa, rubber, palm oil exports"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Crop Production", definition: "The practice of growing plants for food, feed, fiber, and other uses." },
    { term: "Annual Crop", definition: "A crop that completes its life cycle in one year." },
    { term: "Perennial Crop", definition: "A crop that lives for more than two years." },
    { term: "Cash Crop", definition: "A crop grown for sale rather than personal use." },
    { term: "Subsistence Crop", definition: "A crop grown for personal consumption." },
    { term: "Broadcasting", definition: "Scattering seeds evenly over the soil surface." },
    { term: "Drilling", definition: "Planting seeds in rows." },
    { term: "Transplanting", definition: "Planting seedlings that have been grown in a nursery." },
    { term: "Mulching", definition: "Covering the soil with organic material." },
    { term: "Irrigation", definition: "Artificial application of water to crops." },
    { term: "Fertilization", definition: "Adding nutrients to the soil." },
    { term: "Weeding", definition: "Removing unwanted plants from the field." },
    { term: "Pest Control", definition: "Managing organisms that damage crops." },
    { term: "Crop Rotation", definition: "Growing different crops in succession on the same land." },
    { term: "Intercropping", definition: "Growing two or more crops together." },
    { term: "Harvesting", definition: "Gathering mature crops from the field." },
    { term: "Post-Harvest", definition: "Activities after harvest including handling and storage." },
    { term: "IPM", definition: "Integrated Pest Management - combining different control methods." },
    { term: "Sustainable Agriculture", definition: "Farming that meets current needs without compromising the future." },
    { term: "Agroforestry", definition: "Integrating trees with crops and livestock." }
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
      question: "What is crop production?",
      type: "multiple_choice",
      options: [
        "The practice of raising animals",
        "The practice of growing plants for food and other uses",
        "The practice of processing crops",
        "The practice of selling crops"
      ],
      answer: "The practice of growing plants for food and other uses",
      explanation: "Crop production is the practice of growing plants for various uses."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a cash crop?",
      type: "multiple_choice",
      options: ["Cassava", "Cocoa", "Yam", "Rice"],
      answer: "Cocoa",
      explanation: "Cocoa is a cash crop grown primarily for sale."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a factor affecting crop production?",
      type: "multiple_choice",
      options: ["Rainfall", "Color of the farmhouse", "Number of farmers", "Type of tractor"],
      answer: "Rainfall",
      explanation: "Rainfall is a climatic factor that affects crop production."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in land preparation?",
      type: "multiple_choice",
      options: ["Ploughing", "Clearing", "Harrowing", "Ridging"],
      answer: "Clearing",
      explanation: "Clearing is the first step, removing vegetation from the land."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which planting method involves scattering seeds?",
      type: "multiple_choice",
      options: ["Drilling", "Transplanting", "Broadcasting", "Steking"],
      answer: "Broadcasting",
      explanation: "Broadcasting involves scattering seeds evenly over the soil."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the purpose of weeding?",
      type: "multiple_choice",
      options: [
        "To add nutrients to the soil",
        "To remove unwanted plants",
        "To water the crops",
        "To harvest the crops"
      ],
      answer: "To remove unwanted plants",
      explanation: "Weeding removes unwanted plants that compete with crops."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is integrated pest management (IPM)?",
      type: "multiple_choice",
      options: [
        "Using only chemicals",
        "Combining different pest control methods",
        "Ignoring pest problems",
        "Only using biological control"
      ],
      answer: "Combining different pest control methods",
      explanation: "IPM combines cultural, biological, and chemical control methods."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is an indicator of crop maturity?",
      type: "multiple_choice",
      options: ["Color change", "Plant height", "Number of leaves", "Age of the farmer"],
      answer: "Color change",
      explanation: "Color change is an indicator that a crop is ready for harvest."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is drying important after harvest?",
      type: "multiple_choice",
      options: [
        "To reduce moisture content and prevent spoilage",
        "To make the crop heavier",
        "To change the color of the crop",
        "To increase the size of the crop"
      ],
      answer: "To reduce moisture content and prevent spoilage",
      explanation: "Drying reduces moisture to prevent spoilage during storage."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a benefit of crop rotation?",
      type: "multiple_choice",
      options: [
        "Improves soil fertility",
        "Reduces yield",
        "Increases pest problems",
        "Wastes land"
      ],
      answer: "Improves soil fertility",
      explanation: "Crop rotation improves soil fertility and reduces pest buildup."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is intercropping?",
      type: "multiple_choice",
      options: [
        "Growing only one crop",
        "Growing two or more crops together",
        "Growing crops in rotation",
        "Growing crops in different fields"
      ],
      answer: "Growing two or more crops together",
      explanation: "Intercropping involves growing two or more crops simultaneously."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a major cost in crop production?",
      type: "multiple_choice",
      options: ["Seed", "Land preparation", "Fertilizer", "All of the above"],
      answer: "All of the above",
      explanation: "Seed, land preparation, and fertilizer are all major costs."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is a challenge facing crop production?",
      type: "multiple_choice",
      options: ["Climate change", "Abundant rainfall", "Good soil", "Low pest levels"],
      answer: "Climate change",
      explanation: "Climate change is a major challenge affecting crop production."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is sustainable crop production?",
      type: "multiple_choice",
      options: [
        "Maximizing yields at any cost",
        "Farming in a way that protects the environment",
        "Using only chemical fertilizers",
        "Ignoring soil health"
      ],
      answer: "Farming in a way that protects the environment",
      explanation: "Sustainable crop production protects the environment while producing food."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does technology help crop production?",
      type: "multiple_choice",
      options: [
        "Improves efficiency and yields",
        "Makes farming harder",
        "Increases costs",
        "Reduces crop quality"
      ],
      answer: "Improves efficiency and yields",
      explanation: "Technology improves efficiency and increases crop yields."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_crop_production",
    title: "Crop Production Quiz",
    description: "Test your understanding of crop production",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is crop production?",
        type: "short_answer",
        answer_key: "The practice of growing plants for food and other uses",
        explanation: "Crop production is the practice of growing plants for various uses."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one type of cash crop.",
        type: "short_answer",
        answer_key: "Cocoa (or any valid)",
        explanation: "Cocoa, rubber, and cotton are examples of cash crops."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a factor affecting crop production?",
        type: "short_answer",
        answer_key: "Rainfall (or any valid)",
        explanation: "Rainfall, temperature, soil type, and nutrients affect crop production."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in land preparation?",
        type: "short_answer",
        answer_key: "Clearing",
        explanation: "Clearing is the first step in preparing land."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is broadcasting in planting?",
        type: "short_answer",
        answer_key: "Scattering seeds evenly over the soil",
        explanation: "Broadcasting involves scattering seeds over the soil surface."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the purpose of weeding?",
        type: "short_answer",
        answer_key: "To remove unwanted plants",
        explanation: "Weeding removes unwanted plants that compete with crops."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is integrated pest management?",
        type: "short_answer",
        answer_key: "Combining different pest control methods",
        explanation: "IPM uses cultural, biological, and chemical methods together."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is an indicator of crop maturity?",
        type: "short_answer",
        answer_key: "Color change",
        explanation: "Color change is an indicator that a crop is ready for harvest."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is crop rotation?",
        type: "short_answer",
        answer_key: "Growing different crops in succession on the same land",
        explanation: "Crop rotation improves soil fertility and reduces pests."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is sustainable crop production?",
        type: "short_answer",
        answer_key: "Farming in a way that protects the environment",
        explanation: "Sustainable crop production protects the environment while producing food."
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
        "Understand crop production and its importance",
        "Identify different types of crops",
        "Describe land preparation and planting methods",
        "Explain crop management and harvesting"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is crop production?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Crops" },
        { time: "10-15 min", activity: "Direct Instruction - Factors Affecting Crop Production" },
        { time: "15-20 min", activity: "Direct Instruction - Land Preparation and Planting" },
        { time: "20-25 min", activity: "Direct Instruction - Crop Management" },
        { time: "25-30 min", activity: "Direct Instruction - Pest Control" },
        { time: "30-35 min", activity: "Direct Instruction - Harvesting and Storage" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The practice of growing plants for food and other uses",
        prac_002: "Cocoa",
        prac_003: "Rainfall",
        prac_004: "Clearing",
        prac_005: "Broadcasting",
        prac_006: "To remove unwanted plants",
        prac_007: "Combining different pest control methods",
        prac_008: "Color change",
        prac_009: "To reduce moisture content and prevent spoilage",
        prac_010: "Improves soil fertility",
        prac_011: "Growing two or more crops together",
        prac_012: "All of the above",
        prac_013: "Climate change",
        prac_014: "Farming in a way that protects the environment",
        prac_015: "Improves efficiency and yields"
      },
      assessment: {
        ass_001: "The practice of growing plants for food and other uses",
        ass_002: "Cocoa (or any valid)",
        ass_003: "Rainfall (or any valid)",
        ass_004: "Clearing",
        ass_005: "Scattering seeds evenly over the soil",
        ass_006: "To remove unwanted plants",
        ass_007: "Combining different pest control methods",
        ass_008: "Color change",
        ass_009: "Growing different crops in succession on the same land",
        ass_010: "Farming in a way that protects the environment"
      }
    },
    extensionActivities: [
      "Visit a local farm",
      "Start a school garden",
      "Research crop pests in your area",
      "Study sustainable farming practices"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research modern farming techniques",
        "Study precision agriculture",
        "Research crop genetics",
        "Study agricultural economics"
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
      title: "Crop Production Cycle",
      description: "Diagram showing the stages of crop production",
      url: "/diagrams/crop-production-cycle.png",
      alt: "Crop production cycle diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Types of Crops",
      description: "Chart showing different crop types",
      url: "/diagrams/crop-types.png",
      alt: "Crop types chart"
    }
  ]
};