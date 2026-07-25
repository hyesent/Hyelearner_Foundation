// Location: src/data/lessons/science/biology/plants.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_plants",
  subject: "Biology",
  topic: "Plants",
  name: "Plants",
  icon: "🌱",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of cell biology",
    "Knowledge of photosynthesis",
    "Basic understanding of ecology"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Animals",
      file: "science/biology/animals.js"
    },
    {
      name: "Microorganisms",
      file: "science/biology/microorganisms.js"
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
      description: "Define plants and explain their importance",
      indicator: "Student can explain what plants are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main parts of a plant",
      indicator: "Student can label roots, stems, leaves, flowers, and fruits"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the process of photosynthesis",
      indicator: "Student can describe how plants make their own food"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the structure and function of roots",
      indicator: "Student can explain how roots absorb water and minerals"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the structure and function of stems",
      indicator: "Student can explain how stems transport materials"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the structure and function of leaves",
      indicator: "Student can explain how leaves carry out photosynthesis"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the process of transpiration",
      indicator: "Student can describe how water moves through plants"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the structure of flowers and reproduction in plants",
      indicator: "Student can explain pollination, fertilization, and seed formation"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Compare monocots and dicots",
      indicator: "Student can distinguish between these two types of plants"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the transport systems in plants (xylem and phloem)",
      indicator: "Student can describe how water and nutrients are transported"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain plant responses to stimuli (tropisms)",
      indicator: "Student can describe phototropism, geotropism, and hydrotropism"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the life cycle of flowering plants",
      indicator: "Student can explain the alternation of generations"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of plants to humans and ecosystems",
      indicator: "Student can discuss the economic and ecological importance of plants"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the different types of plant tissues",
      indicator: "Student can differentiate between meristematic and permanent tissues"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Plants - The Foundation of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Explore the fascinating world of plants, from photosynthesis to reproduction."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Plants</h2>
      <p><strong>Plants</strong> are multicellular organisms that produce their own food through photosynthesis. They are essential for life on Earth, providing oxygen, food, and habitats for countless organisms.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌱 Key Concepts</h3>
          <ul>
            <li>✓ Photosynthesis</li>
            <li>✓ Plant Structure</li>
            <li>✓ Transport Systems</li>
            <li>✓ Reproduction</li>
            <li>✓ Plant Responses</li>
            <li>✓ Economic Importance</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• There are over 390,000 plant species</li>
            <li>• Plants produce 50% of the oxygen we breathe</li>
            <li>• The largest plant is a giant sequoia tree</li>
            <li>• The oldest plant is 43,000 years old</li>
            <li>• Plants provide 80% of human food</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Plants Matter</h4>
        <p>Plants are the foundation of all ecosystems. They produce oxygen, provide food, and are essential for human survival and well-being.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Plant",
        objective: "obj_002",
        text: `
          <h3>Parts of a Plant</h3>
          <p>Plants have several main parts, each with specific functions.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🌿 Roots</h4>
              <ul>
                <li>• Anchor the plant</li>
                <li>• Absorb water and minerals</li>
                <li>• Store food</li>
                <li>• Types: Taproot and fibrous</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🌱 Stem</h4>
              <ul>
                <li>• Supports the plant</li>
                <li>• Transports materials</li>
                <li>• Stores food</li>
                <li>• Grows toward light</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🍃 Leaves</h4>
              <ul>
                <li>• Photosynthesis</li>
                <li>• Transpiration</li>
                <li>• Gas exchange</li>
                <li>• Store food</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>🌸 Flower</h4>
              <ul>
                <li>• Reproduction</li>
                <li>• Attracts pollinators</li>
                <li>• Produces seeds</li>
                <li>• Produces fruit</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🍎 Fruit</h4>
              <ul>
                <li>• Protects seeds</li>
                <li>• Disperses seeds</li>
                <li>• Provides nutrition</li>
                <li>• Attracts animals</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-3 rounded">
              <h4>🌰 Seed</h4>
              <ul>
                <li>• Embryo plant</li>
                <li>• Stores food</li>
                <li>• Protected by seed coat</li>
                <li>• Germinates to grow</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Photosynthesis",
        objective: "obj_003",
        text: `
          <h3>Photosynthesis</h3>
          <p><strong>Photosynthesis</strong> is the process by which plants convert light energy into chemical energy (glucose).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Equation</h4>
              <p><strong>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</strong></p>
              <p><small>Carbon Dioxide + Water → Glucose + Oxygen</small></p>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Requirements</h4>
              <ul>
                <li>• <strong>Sunlight:</strong> Energy source</li>
                <li>• <strong>CO₂:</strong> From the air</li>
                <li>• <strong>Water:</strong> From the soil</li>
                <li>• <strong>Chlorophyll:</strong> Green pigment</li>
                <li>• <strong>Chloroplasts:</strong> Where it happens</li>
              </ul>
            </div>
          </div>
          
          <h4 class="mt-4">Two Stages of Photosynthesis</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Light-Dependent Reactions</h4>
              <ul>
                <li>• Occurs in thylakoid membranes</li>
                <li>• Requires light</li>
                <li>• Produces ATP and NADPH</li>
                <li>• Splits water (H₂O → O₂)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Calvin Cycle</h4>
              <ul>
                <li>• Occurs in stroma</li>
                <li>• Does not require light</li>
                <li>• Uses CO₂</li>
                <li>• Produces glucose</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Factors Affecting Photosynthesis:</strong>
            <ul>
              <li>• <strong>Light intensity:</strong> More light = faster rate (up to a point)</li>
              <li>• <strong>CO₂ concentration:</strong> More CO₂ = faster rate (up to a point)</li>
              <li>• <strong>Temperature:</strong> Optimal temperature for enzymes</li>
              <li>• <strong>Water availability:</strong> Water stress slows photosynthesis</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Roots",
        objective: "obj_004",
        text: `
          <h3>Roots</h3>
          <p>Roots are the underground parts of plants that anchor them and absorb water and minerals.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Roots</h4>
              <ul>
                <li><strong>Taproot System:</strong></li>
                <li>• One main root</li>
                <li>• Examples: Carrots, dandelions</li>
                <li>• Deep roots</li>
                <li><strong>Fibrous Root System:</strong></li>
                <li>• Many thin roots</li>
                <li>• Examples: Grasses, wheat</li>
                <li>• Shallow roots</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions of Roots</h4>
              <ul>
                <li>• <strong>Absorption:</strong> Water and minerals</li>
                <li>• <strong>Anchorage:</strong> Hold the plant in place</li>
                <li>• <strong>Storage:</strong> Store food and water</li>
                <li>• <strong>Transport:</strong> Move water to the stem</li>
                <li>• <strong>Root hairs:</strong> Increase surface area</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Root Hairs:</strong>
            <ul>
              <li>• Tiny extensions of root cells</li>
              <li>• Increase surface area for absorption</li>
              <li>• Absorb water through osmosis</li>
              <li>• Absorb minerals through active transport</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Stems",
        objective: "obj_005",
        text: `
          <h3>Stems</h3>
          <p>Stems provide support and transport materials throughout the plant.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Stems</h4>
              <ul>
                <li>• <strong>Support:</strong> Hold leaves and flowers</li>
                <li>• <strong>Transport:</strong> Move water, minerals, and food</li>
                <li>• <strong>Storage:</strong> Store food and water</li>
                <li>• <strong>Growth:</strong> Grow toward light</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Stems</h4>
              <ul>
                <li><strong>Herbaceous:</strong> Soft, green, flexible</li>
                <li><strong>Woody:</strong> Hard, brown, rigid</li>
                <li><strong>Underground:</strong> Rhizomes, tubers, bulbs</li>
                <li><strong>Climbing:</strong> Vines, tendrils</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Leaves",
        objective: "obj_006",
        text: `
          <h3>Leaves</h3>
          <p>Leaves are the main organs for photosynthesis and gas exchange.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Leaf Structure</h4>
              <ul>
                <li><strong>Epidermis:</strong> Outer protective layer</li>
                <li><strong>Cuticle:</strong> Waxy layer preventing water loss</li>
                <li><strong>Mesophyll:</strong> Photosynthetic tissue</li>
                <li>• Palisade layer: Many chloroplasts</li>
                <li>• Spongy layer: Air spaces for gas exchange</li>
                <li><strong>Stomata:</strong> Small pores for gas exchange</li>
                <li><strong>Guard cells:</strong> Control stomata opening</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Leaf Adaptations</h4>
              <ul>
                <li>• <strong>Broad leaves:</strong> Capture more sunlight</li>
                <li>• <strong>Thin leaves:</strong> Short diffusion distance</li>
                <li>• <strong>Veins:</strong> Transport and support</li>
                <li>• <strong>Stomata:</strong> Gas exchange</li>
                <li>• <strong>Chloroplasts:</strong> For photosynthesis</li>
                <li>• <strong>Needles:</strong> Reduce water loss</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Transpiration",
        objective: "obj_007",
        text: `
          <h3>Transpiration</h3>
          <p><strong>Transpiration</strong> is the loss of water vapor from plant leaves through stomata.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Transpiration Stream</h4>
              <ul>
                <li>• Water is absorbed by roots</li>
                <li>• Travels up the xylem</li>
                <li>• Evaporates from leaves</li>
                <li>• Creates a pull that draws water upward</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Factors Affecting Transpiration</h4>
              <ul>
                <li>• <strong>Light:</strong> More light, more transpiration</li>
                <li>• <strong>Temperature:</strong> More heat, more transpiration</li>
                <li>• <strong>Humidity:</strong> Less humidity, more transpiration</li>
                <li>• <strong>Wind:</strong> More wind, more transpiration</li>
                <li>• <strong>Water availability:</strong> Less water, less transpiration</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Importance of Transpiration:</strong>
            <ul>
              <li>• <strong>Cooling:</strong> Cools the plant</li>
              <li>• <strong>Transport:</strong> Moves water and minerals</li>
              <li>• <strong>Water cycle:</strong> Releases water vapor into air</li>
              <li>• <strong>Maintains turgor:</strong> Keeps cells rigid</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Transport Systems",
        objective: "obj_010",
        text: `
          <h3>Transport Systems</h3>
          <p>Plants have two main transport systems: <strong>xylem</strong> and <strong>phloem</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Xylem</h4>
              <ul>
                <li>• Transports water and minerals</li>
                <li>• Moves upward from roots</li>
                <li>• Dead cells (hollow tubes)</li>
                <li>• Provides support</li>
                <li>• Transpiration pulls water up</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Phloem</h4>
              <ul>
                <li>• Transports food (sugars)</li>
                <li>• Moves both up and down</li>
                <li>• Living cells</li>
                <li>• Sieve tubes transport food</li>
                <li>• Pressure flow mechanism</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Plant Reproduction",
        objective: "obj_008",
        text: `
          <h3>Plant Reproduction</h3>
          <p>Plants reproduce through flowers, which contain the reproductive organs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Flower Structure</h4>
              <ul>
                <li><strong>Male Parts (Stamen):</strong></li>
                <li>• Anther: Produces pollen</li>
                <li>• Filament: Supports anther</li>
                <li><strong>Female Parts (Carpel):</strong></li>
                <li>• Stigma: Receives pollen</li>
                <li>• Style: Connects stigma to ovary</li>
                <li>• Ovary: Contains ovules</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Pollination</h4>
              <ul>
                <li>• <strong>Self-pollination:</strong> Same flower</li>
                <li>• <strong>Cross-pollination:</strong> Different flower</li>
                <li>• <strong>Agents:</strong> Wind, insects, birds, bats</li>
                <li>• <strong>Fertilization:</strong> Pollen reaches ovule</li>
                <li>• <strong>Seed formation:</strong> After fertilization</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Pollination Adaptations:</strong>
            <ul>
              <li>• <strong>Insect-pollinated:</strong> Bright colors, scent, nectar</li>
              <li>• <strong>Wind-pollinated:</strong> Small petals, lots of pollen</li>
              <li>• <strong>Bird-pollinated:</strong> Red flowers, tubular shape</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Plant Responses",
        objective: "obj_011",
        text: `
          <h3>Plant Responses (Tropisms)</h3>
          <p><strong>Tropisms</strong> are directional growth responses to stimuli.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>☀️ Phototropism</h4>
              <ul>
                <li>• Response to light</li>
                <li>• Grows toward light</li>
                <li>• Positive phototropism</li>
                <li>• Hormone: Auxin</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>⬆️ Geotropism</h4>
              <ul>
                <li>• Response to gravity</li>
                <li>• Roots grow downward (positive)</li>
                <li>• Shoots grow upward (negative)</li>
                <li>• Hormone: Auxin</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>💧 Hydrotropism</h4>
              <ul>
                <li>• Response to water</li>
                <li>• Roots grow toward water</li>
                <li>• Positive hydrotropism</li>
                <li>• Important for drought survival</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Monocots vs Dicots",
        objective: "obj_009",
        text: `
          <h3>Monocots vs Dicots</h3>
          <p>Flowering plants are divided into two main groups: monocots and dicots.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Feature</th>
                <th class="border p-2">Monocots</th>
                <th class="border p-2">Dicots</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Seed leaves (cotyledons)</td>
                <td class="border p-2">One</td>
                <td class="border p-2">Two</td>
              </tr>
              <tr>
                <td class="border p-2">Leaf veins</td>
                <td class="border p-2">Parallel</td>
                <td class="border p-2">Branching (net-like)</td>
              </tr>
              <tr>
                <td class="border p-2">Root system</td>
                <td class="border p-2">Fibrous</td>
                <td class="border p-2">Taproot</td>
              </tr>
              <tr>
                <td class="border p-2">Flower parts</td>
                <td class="border p-2">Multiples of 3</td>
                <td class="border p-2">Multiples of 4 or 5</td>
              </tr>
              <tr>
                <td class="border p-2">Vascular bundles</td>
                <td class="border p-2">Scattered in stem</td>
                <td class="border p-2">Ring in stem</td>
              </tr>
              <tr>
                <td class="border p-2">Examples</td>
                <td class="border p-2">Grasses, lilies, orchids</td>
                <td class="border p-2">Roses, beans, oaks</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_011",
        title: "Plant Tissues",
        objective: "obj_014",
        text: `
          <h3>Plant Tissues</h3>
          <p>Plants have different types of tissues with specific functions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Meristematic Tissue</h4>
              <ul>
                <li>• Undifferentiated cells</li>
                <li>• Divide actively</li>
                <li>• Found at tips of roots and shoots</li>
                <li>• Responsible for growth</li>
                <li>• Can differentiate into other tissues</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Permanent Tissue</h4>
              <ul>
                <li>• Differentiated cells</li>
                <li>• Do not divide</li>
                <li>• Types:</li>
                <li>• <strong>Parenchyma:</strong> Storage, photosynthesis</li>
                <li>• <strong>Collenchyma:</strong> Support</li>
                <li>• <strong>Sclerenchyma:</strong> Stiffness (lignin)</li>
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
          <h4>🌱 Plant Structure</h4>
          <ul>
            <li>• Roots anchor and absorb</li>
            <li>• Stems support and transport</li>
            <li>• Leaves photosynthesize</li>
            <li>• Flowers reproduce</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🌿 Plant Functions</h4>
          <ul>
            <li>• Photosynthesis produces food</li>
            <li>• Transpiration moves water</li>
            <li>• Transport through xylem and phloem</li>
            <li>• Tropisms respond to environment</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Plants are essential for life on Earth. They produce oxygen, provide food, and support ecosystems.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Plants get their food from the soil",
        correction: "Plants make their own food through photosynthesis",
        explanation: "Plants use sunlight, CO₂, and water to make glucose."
      },
      {
        id: "mis_002",
        misconception: "All plants have flowers",
        correction: "Non-flowering plants like ferns and mosses don't produce flowers",
        explanation: "Some plants reproduce using spores or cones."
      },
      {
        id: "mis_003",
        misconception: "Plants don't move at all",
        correction: "Plants respond to stimuli through slow growth movements",
        explanation: "Plants can bend toward light, grow toward water, and exhibit rapid movements in some cases."
      },
      {
        id: "mis_004",
        misconception: "Plants don't need oxygen",
        correction: "Plants do need oxygen for respiration",
        explanation: "Plants carry out both photosynthesis and respiration."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Agriculture",
        description: "Understanding plants helps grow food.",
        example: "Improving crop yields and farming practices"
      },
      {
        id: "app_002",
        title: "Medicine",
        description: "Plants provide many medicines.",
        example: "Aspirin from willow trees, digitalis from foxglove"
      },
      {
        id: "app_003",
        title: "Environmental Protection",
        description: "Plants clean air and prevent erosion.",
        example: "Reforestation, conservation"
      },
      {
        id: "app_004",
        title: "Biofuel",
        description: "Plants can be used for energy.",
        example: "Ethanol from corn, biodiesel from soy"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Photosynthesis", definition: "Process of making food from sunlight, CO₂, and water." },
    { term: "Chlorophyll", definition: "Green pigment that absorbs light energy." },
    { term: "Transpiration", definition: "Loss of water vapor from plant leaves." },
    { term: "Xylem", definition: "Tissue that transports water and minerals." },
    { term: "Phloem", definition: "Tissue that transports food (sugars)." },
    { term: "Stomata", definition: "Small pores in leaves for gas exchange." },
    { term: "Tropism", definition: "Directional growth response to stimuli." },
    { term: "Pollination", definition: "Transfer of pollen from anther to stigma." },
    { term: "Germination", definition: "Growth of a seed into a new plant." },
    { term: "Monocot", definition: "Plant with one seed leaf." },
    { term: "Dicot", definition: "Plant with two seed leaves." },
    { term: "Chloroplast", definition: "Organelle where photosynthesis occurs." },
    { term: "Stamen", definition: "Male part of a flower." },
    { term: "Carpel", definition: "Female part of a flower." },
    { term: "Guard Cells", definition: "Cells that control stomata opening." },
    { term: "Cuticle", definition: "Waxy layer on leaves preventing water loss." }
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
      question: "What is the main function of plants?",
      type: "multiple_choice",
      options: [
        "To produce food for themselves",
        "To produce oxygen",
        "To provide habitat for animals",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Plants produce their own food, release oxygen, and provide habitats."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which part of the plant absorbs water and minerals?",
      type: "multiple_choice",
      options: ["Leaves", "Stems", "Roots", "Flowers"],
      answer: "Roots",
      explanation: "Roots absorb water and minerals from the soil."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the product of photosynthesis?",
      type: "multiple_choice",
      options: ["Carbon dioxide", "Glucose", "Water", "Nitrogen"],
      answer: "Glucose",
      explanation: "Photosynthesis produces glucose and oxygen."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the function of root hairs?",
      type: "multiple_choice",
      options: [
        "To protect the root",
        "To increase surface area for absorption",
        "To store food",
        "To anchor the plant"
      ],
      answer: "To increase surface area for absorption",
      explanation: "Root hairs increase the surface area for water and mineral absorption."
    },
    {
      id: "prac_005",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is transpiration?",
      type: "multiple_choice",
      options: [
        "Water absorption by roots",
        "Water loss from leaves",
        "Food production in leaves",
        "Pollination of flowers"
      ],
      answer: "Water loss from leaves",
      explanation: "Transpiration is the loss of water vapor from plant leaves through stomata."
    },
    {
      id: "prac_006",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the female part of a flower called?",
      type: "multiple_choice",
      options: ["Stamen", "Anther", "Carpel", "Filament"],
      answer: "Carpel",
      explanation: "The carpel is the female reproductive part of a flower."
    },
    {
      id: "prac_007",
      objective: "obj_010",
      difficulty: "medium",
      question: "What does the xylem transport?",
      type: "multiple_choice",
      options: ["Food", "Water and minerals", "Pollen", "Seeds"],
      answer: "Water and minerals",
      explanation: "Xylem transports water and dissolved minerals from roots to the rest of the plant."
    },
    {
      id: "prac_008",
      objective: "obj_011",
      difficulty: "medium",
      question: "What is phototropism?",
      type: "multiple_choice",
      options: [
        "Growth toward gravity",
        "Growth toward light",
        "Growth toward water",
        "Growth toward touch"
      ],
      answer: "Growth toward light",
      explanation: "Phototropism is the growth of plants toward light."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How many cotyledons do dicots have?",
      type: "multiple_choice",
      options: ["One", "Two", "Three", "Four"],
      answer: "Two",
      explanation: "Dicots have two cotyledons (seed leaves)."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the life cycle of flowering plants called?",
      type: "multiple_choice",
      options: [
        "Alternation of generations",
        "Spore formation",
        "Binary fission",
        "Budding"
      ],
      answer: "Alternation of generations",
      explanation: "Flowering plants have a life cycle with alternation between haploid and diploid generations."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why are plants important to humans?",
      type: "multiple_choice",
      options: [
        "They provide food",
        "They provide oxygen",
        "They provide medicine",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Plants provide food, oxygen, medicine, and many other resources."
    },
    {
      id: "prac_012",
      objective: "obj_005",
      difficulty: "hard",
      question: "What is the function of the stem?",
      type: "multiple_choice",
      options: [
        "Support and transport",
        "Photosynthesis",
        "Absorption of water",
        "Reproduction"
      ],
      answer: "Support and transport",
      explanation: "Stems support the plant and transport materials between roots and leaves."
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "Where does photosynthesis occur in the leaf?",
      type: "multiple_choice",
      options: [
        "Epidermis",
        "Mesophyll",
        "Stomata",
        "Veins"
      ],
      answer: "Mesophyll",
      explanation: "Photosynthesis occurs mainly in the mesophyll tissue of the leaf."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between xylem and phloem?",
      type: "multiple_choice",
      options: [
        "Xylem carries water; phloem carries food",
        "Xylem carries food; phloem carries water",
        "Both carry water and food",
        "Xylem is only in roots; phloem is only in leaves"
      ],
      answer: "Xylem carries water; phloem carries food",
      explanation: "Xylem transports water and minerals; phloem transports food (sugars)."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "What hormone is involved in phototropism?",
      type: "multiple_choice",
      options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
      answer: "Auxin",
      explanation: "Auxin is the hormone responsible for phototropism (growth toward light)."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_plants",
    title: "Plants Quiz",
    description: "Test your understanding of plants",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main function of plants?",
        type: "short_answer",
        answer_key: "To produce food through photosynthesis",
        explanation: "Plants are autotrophs that make their own food."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the four main parts of a plant.",
        type: "short_answer",
        answer_key: "Roots, stem, leaves, flowers",
        explanation: "The main parts of a plant are roots, stems, leaves, and flowers."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the chemical equation for photosynthesis?",
        type: "short_answer",
        answer_key: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        explanation: "Photosynthesis uses CO₂ and water to produce glucose and oxygen."
      },
      {
        id: "ass_004",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is transpiration?",
        type: "short_answer",
        answer_key: "Loss of water vapor from leaves",
        explanation: "Transpiration is the loss of water vapor from plant leaves through stomata."
      },
      {
        id: "ass_005",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is pollination?",
        type: "short_answer",
        answer_key: "Transfer of pollen from anther to stigma",
        explanation: "Pollination is the transfer of pollen from the male part to the female part of a flower."
      },
      {
        id: "ass_006",
        objective: "obj_010",
        difficulty: "medium",
        question: "What is the function of xylem?",
        type: "short_answer",
        answer_key: "Transport water and minerals from roots",
        explanation: "Xylem transports water and minerals from the roots to the rest of the plant."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between monocots and dicots?",
        type: "short_answer",
        answer_key: "Monocots have one cotyledon; dicots have two",
        explanation: "The main difference is the number of cotyledons in the seed."
      },
      {
        id: "ass_008",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is phototropism?",
        type: "short_answer",
        answer_key: "Growth toward light",
        explanation: "Phototropism is the growth of plants toward light."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the life cycle of flowering plants called?",
        type: "short_answer",
        answer_key: "Alternation of generations",
        explanation: "Flowering plants have a life cycle with alternation between haploid and diploid generations."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "Why are plants important to humans?",
        type: "short_answer",
        answer_key: "They provide food, oxygen, and medicine",
        explanation: "Plants provide food, oxygen, medicine, and many other resources."
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
        "Understand plant structure and function",
        "Explain photosynthesis and transpiration",
        "Describe plant reproduction",
        "Understand plant responses and transport systems"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are plants?" },
        { time: "5-10 min", activity: "Direct Instruction - Parts of a Plant" },
        { time: "10-15 min", activity: "Direct Instruction - Photosynthesis" },
        { time: "15-20 min", activity: "Direct Instruction - Transpiration" },
        { time: "20-25 min", activity: "Direct Instruction - Transport Systems" },
        { time: "25-30 min", activity: "Direct Instruction - Reproduction" },
        { time: "30-35 min", activity: "Direct Instruction - Plant Responses" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "All of the above",
        prac_002: "Roots",
        prac_003: "Glucose",
        prac_004: "To increase surface area for absorption",
        prac_005: "Water loss from leaves",
        prac_006: "Carpel",
        prac_007: "Water and minerals",
        prac_008: "Growth toward light",
        prac_009: "Two",
        prac_010: "Alternation of generations",
        prac_011: "All of the above",
        prac_012: "Support and transport",
        prac_013: "Mesophyll",
        prac_014: "Xylem carries water; phloem carries food",
        prac_015: "Auxin"
      },
      assessment: {
        ass_001: "To produce food through photosynthesis",
        ass_002: "Roots, stem, leaves, flowers",
        ass_003: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        ass_004: "Loss of water vapor from leaves",
        ass_005: "Transfer of pollen from anther to stigma",
        ass_006: "Transport water and minerals from roots",
        ass_007: "Monocots have one cotyledon; dicots have two",
        ass_008: "Growth toward light",
        ass_009: "Alternation of generations",
        ass_010: "They provide food, oxygen, and medicine"
      }
    },
    extensionActivities: [
      "Grow a plant from seed",
      "Research medicinal plants",
      "Study plant adaptations to different environments",
      "Collect and press leaves",
      "Create a plant collection"
    ],
    differentiation: {
      struggling: [
        "Focus on basic plant structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research plant physiology",
        "Study plant genetics",
        "Research plant evolution",
        "Study plant ecology"
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
      title: "Plant Structure",
      description: "Diagram of a flowering plant",
      url: "/diagrams/plant-structure.png",
      alt: "Plant structure diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Photosynthesis",
      description: "Diagram showing the process of photosynthesis",
      url: "/diagrams/photosynthesis.png",
      alt: "Photosynthesis diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Flower Structure",
      description: "Diagram of a flower with labeled parts",
      url: "/diagrams/flower-structure.png",
      alt: "Flower structure diagram"
    },
    {
      id: "vis_004",
      type: "chart",
      title: "Monocots vs Dicots",
      description: "Comparison chart of monocots and dicots",
      url: "/diagrams/monocots-vs-dicots.png",
      alt: "Monocots vs dicots comparison"
    }
  ]
};