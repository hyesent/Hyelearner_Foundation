// Location: src/data/lessons/science/biology/ecology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_ecology",
  subject: "Biology",
  topic: "Ecology",
  name: "Ecology",
  icon: "🌍",
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
    "Understanding of living organisms",
    "Knowledge of basic biology concepts",
    "Understanding of ecosystems"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Evolution",
      file: "science/biology/evolution.js"
    },
    {
      name: "Plants",
      file: "science/biology/plants.js"
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
      description: "Define ecology and explain its importance",
      indicator: "Student can explain what ecology is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the levels of ecological organization",
      indicator: "Student can list levels from organism to biosphere"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between biotic and abiotic factors",
      indicator: "Student can classify factors as biotic or abiotic"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Define habitat, niche, and ecosystem",
      indicator: "Student can define and give examples of each"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain energy flow through ecosystems",
      indicator: "Student can describe food chains and food webs"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain nutrient cycling in ecosystems",
      indicator: "Student can describe the carbon and nitrogen cycles"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe population growth and factors affecting it",
      indicator: "Student can explain carrying capacity and limiting factors"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain ecological succession",
      indicator: "Student can describe primary and secondary succession"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the major biomes of the world",
      indicator: "Student can identify and describe characteristics of biomes"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the impact of human activities on ecosystems",
      indicator: "Student can explain deforestation, pollution, and climate change"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of biodiversity and its importance",
      indicator: "Student can discuss why biodiversity matters"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the nitrogen cycle in detail",
      indicator: "Student can explain the steps of the nitrogen cycle"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the carbon cycle and its relationship to climate change",
      indicator: "Student can explain how carbon cycles through ecosystems"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Evaluate conservation strategies for endangered species",
      indicator: "Student can discuss methods of conservation"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Ecology - The Web of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Explore the relationships between living organisms and their environment."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Ecology</h2>
      <p><strong>Ecology</strong> is the scientific study of the interactions between living organisms and their environment. It examines how organisms interact with each other and with their physical surroundings.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Key Concepts</h3>
          <ul>
            <li>✓ Ecosystems</li>
            <li>✓ Food Chains and Webs</li>
            <li>✓ Nutrient Cycles</li>
            <li>✓ Population Dynamics</li>
            <li>✓ Biomes</li>
            <li>✓ Conservation</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Earth has ~8.7 million species</li>
            <li>• Rainforests cover only 6% of Earth's surface</li>
            <li>• They contain 50% of all species</li>
            <li>• One acre of rainforest can have 750 tree species</li>
            <li>• Coral reefs are the "rainforests of the sea"</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Ecology Matters</h4>
        <p>Ecology helps us understand how ecosystems work, how human activities affect the environment, and how to protect our planet for future generations.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Levels of Ecological Organization",
        objective: "obj_002",
        text: `
          <h3>Levels of Ecological Organization</h3>
          <p>Ecology studies life at different levels of organization, from individual organisms to the entire biosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Levels from Smallest to Largest</h4>
              <ul>
                <li><strong>1. Organism:</strong> Individual living thing</li>
                <li><strong>2. Population:</strong> Group of same species</li>
                <li><strong>3. Community:</strong> Different populations interacting</li>
                <li><strong>4. Ecosystem:</strong> Community + environment</li>
                <li><strong>5. Biome:</strong> Large area with similar climate</li>
                <li><strong>6. Biosphere:</strong> All parts of Earth with life</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Organism:</strong> A lion</li>
                <li><strong>Population:</strong> All lions in an area</li>
                <li><strong>Community:</strong> Lions, zebras, grasses, etc.</li>
                <li><strong>Ecosystem:</strong> A savanna</li>
                <li><strong>Biome:</strong> Grassland</li>
                <li><strong>Biosphere:</strong> Earth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Biotic and Abiotic Factors",
        objective: "obj_003",
        text: `
          <h3>Biotic and Abiotic Factors</h3>
          <p>Ecosystems are made up of <strong>biotic</strong> (living) and <strong>abiotic</strong> (non-living) factors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>🌿 Biotic Factors (Living)</h4>
              <ul>
                <li>• Plants</li>
                <li>• Animals</li>
                <li>• Fungi</li>
                <li>• Bacteria</li>
                <li>• Protists</li>
                <li>• All living organisms</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>🏔️ Abiotic Factors (Non-living)</h4>
              <ul>
                <li>• Sunlight</li>
                <li>• Temperature</li>
                <li>• Water</li>
                <li>• Soil</li>
                <li>• Wind</li>
                <li>• Oxygen levels</li>
                <li>• pH</li>
                <li>• Salinity</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example: A Pond Ecosystem</strong>
            <ul>
              <li><strong>Biotic:</strong> Fish, frogs, algae, bacteria</li>
              <li><strong>Abiotic:</strong> Water, sunlight, temperature, oxygen, pH</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Habitat, Niche, and Ecosystem",
        objective: "obj_004",
        text: `
          <h3>Habitat, Niche, and Ecosystem</h3>
          <p>Understanding these three concepts is fundamental to ecology.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🏠 Habitat</h4>
              <ul>
                <li>• Where an organism lives</li>
                <li>• Physical environment</li>
                <li>• Example: A forest</li>
                <li>• Example: A coral reef</li>
                <li>• The "address" of an organism</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🔬 Niche</h4>
              <ul>
                <li>• Role of an organism</li>
                <li>• How it fits into ecosystem</li>
                <li>• What it eats</li>
                <li>• How it reproduces</li>
                <li>• The "profession" of an organism</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🌍 Ecosystem</h4>
              <ul>
                <li>• Community + environment</li>
                <li>• All organisms + abiotic factors</li>
                <li>• Energy flows through</li>
                <li>• Nutrients cycle through</li>
                <li>• Self-sustaining unit</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Food Chains and Food Webs",
        objective: "obj_005",
        text: `
          <h3>Food Chains and Food Webs</h3>
          <p><strong>Food chains</strong> show a single path of energy flow. <strong>Food webs</strong> show all the interconnected feeding relationships in an ecosystem.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Trophic Levels</h4>
              <ul>
                <li><strong>Producers:</strong> Make their own food</li>
                <li>• Plants, algae, phytoplankton</li>
                <li><strong>Primary Consumers:</strong> Eat producers</li>
                <li>• Herbivores</li>
                <li><strong>Secondary Consumers:</strong> Eat primary consumers</li>
                <li>• Carnivores</li>
                <li><strong>Tertiary Consumers:</strong> Eat secondary consumers</li>
                <li>• Top predators</li>
                <li><strong>Decomposers:</strong> Break down dead organisms</li>
                <li>• Bacteria, fungi</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Energy Transfer</h4>
              <ul>
                <li>• Energy flows from producers to consumers</li>
                <li>• Only ~10% of energy passes to next level</li>
                <li>• Energy lost as heat</li>
                <li>• Less energy at higher levels</li>
                <li>• Why there are fewer top predators</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example Food Chain:</strong>
            <p>Sun → Grass → Grasshopper → Frog → Snake → Eagle</p>
            <p><strong>Food Web:</strong> Many interconnected food chains</p>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Nutrient Cycles",
        objective: "obj_006",
        text: `
          <h3>Nutrient Cycles</h3>
          <p>Nutrients cycle through ecosystems in biogeochemical cycles.</p>
          
          <h4>The Carbon Cycle</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Processes</h4>
              <ul>
                <li>• <strong>Photosynthesis:</strong> CO₂ → Organic carbon</li>
                <li>• <strong>Respiration:</strong> Organic carbon → CO₂</li>
                <li>• <strong>Decomposition:</strong> Releases CO₂</li>
                <li>• <strong>Combustion:</strong> Burning releases CO₂</li>
                <li>• <strong>Fossilization:</strong> Forms fossil fuels</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Carbon Reservoirs</h4>
              <ul>
                <li>• Atmosphere (CO₂)</li>
                <li>• Oceans (dissolved CO₂)</li>
                <li>• Living organisms</li>
                <li>• Fossil fuels</li>
                <li>• Rocks (carbonates)</li>
              </ul>
            </div>
          </div>
          
          <h4 class="mt-4">The Nitrogen Cycle</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Processes</h4>
              <ul>
                <li>• <strong>Nitrogen Fixation:</strong> N₂ → NH₃</li>
                <li>• <strong>Nitrification:</strong> NH₃ → NO₂⁻ → NO₃⁻</li>
                <li>• <strong>Assimilation:</strong> Plants absorb nitrates</li>
                <li>• <strong>Ammonification:</strong> Organic N → NH₄⁺</li>
                <li>• <strong>Denitrification:</strong> NO₃⁻ → N₂</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Nitrogen is essential for proteins</li>
                <li>• Required for DNA and RNA</li>
                <li>• Plants need nitrogen to grow</li>
                <li>• Nitrogen-fixing bacteria in roots</li>
                <li>• Legumes have nitrogen-fixing bacteria</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Population Dynamics",
        objective: "obj_007",
        text: `
          <h3>Population Growth</h3>
          <p>A <strong>population</strong> is a group of individuals of the same species in a particular area.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Growth Patterns</h4>
              <ul>
                <li><strong>Exponential Growth:</strong> J-shaped curve</li>
                <li>• Unlimited resources</li>
                <li>• Rapid increase</li>
                <li><strong>Logistic Growth:</strong> S-shaped curve</li>
                <li>• Limited resources</li>
                <li>• Reaches carrying capacity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Limiting Factors</h4>
              <ul>
                <li>• Food availability</li>
                <li>• Water availability</li>
                <li>• Space</li>
                <li>• Predators</li>
                <li>• Disease</li>
                <li>• Climate</li>
                <li>• Natural disasters</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Carrying Capacity:</strong>
            <p>The maximum population size that an environment can sustain.</p>
            <ul>
              <li>• When population exceeds carrying capacity, it declines</li>
              <li>• Often due to lack of food, water, or space</li>
              <li>• Can lead to competition and disease</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Ecological Succession",
        objective: "obj_008",
        text: `
          <h3>Ecological Succession</h3>
          <p><strong>Ecological succession</strong> is the gradual change in species composition of an ecosystem over time.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Primary Succession</h4>
              <ul>
                <li>• Starts on bare rock</li>
                <li>• No soil present</li>
                <li>• Examples: After volcanic eruptions</li>
                <li>• Pioneer species: Lichens, mosses</li>
                <li>• Slow process</li>
                <li>• Eventually becomes a climax community</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Secondary Succession</h4>
              <ul>
                <li>• Starts with soil present</li>
                <li>• After a disturbance</li>
                <li>• Examples: After fire, logging, farming</li>
                <li>• Faster than primary succession</li>
                <li>• Pioneers: Weeds, grasses</li>
                <li>• Eventually becomes a climax community</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Biomes of the World",
        objective: "obj_009",
        text: `
          <h3>Biomes</h3>
          <p>A <strong>biome</strong> is a large geographic area with similar climate and organisms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Terrestrial Biomes</h4>
              <ul>
                <li><strong>Tropical Rainforest:</strong> Warm, wet, high biodiversity</li>
                <li><strong>Temperate Forest:</strong> Four seasons, deciduous trees</li>
                <li><strong>Taiga (Boreal):</strong> Cold, coniferous trees</li>
                <li><strong>Grassland:</strong> Grasses, few trees</li>
                <li><strong>Savanna:</strong> Tropical grassland, scattered trees</li>
                <li><strong>Tundra:</strong> Cold, permafrost, no trees</li>
                <li><strong>Desert:</strong> Very dry, extreme temperatures</li>
                <li><strong>Chaparral:</strong> Hot, dry summers; mild, wet winters</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Aquatic Biomes</h4>
              <ul>
                <li><strong>Freshwater:</strong></li>
                <li>• Lakes, ponds, rivers, streams</li>
                <li><strong>Marine:</strong></li>
                <li>• Oceans, coral reefs, estuaries</li>
                <li><strong>Estuaries:</strong></li>
                <li>• Where freshwater meets saltwater</li>
                <li><strong>Coral Reefs:</strong></li>
                <li>• High biodiversity, warm waters</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Biodiversity",
        objective: "obj_011",
        text: `
          <h3>Biodiversity</h3>
          <p><strong>Biodiversity</strong> is the variety of life in an area. It includes genetic, species, and ecosystem diversity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Why Biodiversity Matters</h4>
              <ul>
                <li><strong>Ecological:</strong> Healthy ecosystems</li>
                <li><strong>Economic:</strong> Food, medicine, materials</li>
                <li><strong>Scientific:</strong> Research, understanding</li>
                <li><strong>Aesthetic:</strong> Beauty, tourism</li>
                <li><strong>Ethical:</strong> Moral duty to protect</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Threats to Biodiversity</h4>
              <ul>
                <li><strong>Habitat loss:</strong> Deforestation, urbanization</li>
                <li><strong>Pollution:</strong> Air, water, soil</li>
                <li><strong>Climate change:</strong> Global warming</li>
                <li><strong>Invasive species:</strong> Non-native species</li>
                <li><strong>Overexploitation:</strong> Overhunting, overfishing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Human Impact on Ecosystems",
        objective: "obj_010",
        text: `
          <h3>Human Impact on Ecosystems</h3>
          <p>Human activities have significant impacts on ecosystems worldwide.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Major Impacts</h4>
              <ul>
                <li><strong>Deforestation:</strong> Loss of forests</li>
                <li><strong>Pollution:</strong> Air, water, soil, plastic</li>
                <li><strong>Climate Change:</strong> Global warming</li>
                <li><strong>Habitat Destruction:</strong> Loss of habitats</li>
                <li><strong>Overfishing:</strong> Depletion of fish stocks</li>
                <li><strong>Urbanization:</strong> Expansion of cities</li>
                <li><strong>Agriculture:</strong> Monoculture, pesticides</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• Conservation</li>
                <li>• Protected areas</li>
                <li>• Sustainable practices</li>
                <li>• Renewable energy</li>
                <li>• Reduce pollution</li>
                <li>• Reforestation</li>
                <li>• Education</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Conservation",
        objective: "obj_014",
        text: `
          <h3>Conservation</h3>
          <p><strong>Conservation</strong> is the protection and preservation of natural resources and biodiversity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Conservation Strategies</h4>
              <ul>
                <li>• <strong>Protected Areas:</strong> National parks, reserves</li>
                <li>• <strong>Captive Breeding:</strong> Breeding in zoos</li>
                <li>• <strong>Seed Banks:</strong> Storing seeds</li>
                <li>• <strong>Conservation Laws:</strong> Endangered species protection</li>
                <li>• <strong>Habitat Restoration:</strong> Restoring damaged habitats</li>
                <li>• <strong>Education:</strong> Public awareness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Endangered Species Examples</h4>
              <ul>
                <li>• <strong>Tiger:</strong> Less than 4,000 left</li>
                <li>• <strong>Gorilla:</strong> Critically endangered</li>
                <li>• <strong>Panda:</strong> Successfully recovered</li>
                <li>• <strong>Black Rhino:</strong> Less than 6,000</li>
                <li>• <strong>African Elephant:</strong> Threatened</li>
                <li>• <strong>Sea Turtles:</strong> All species are endangered</li>
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
          <h4>🌍 Ecology Basics</h4>
          <ul>
            <li>• Ecology is the study of interactions</li>
            <li>• Ecosystems include biotic and abiotic factors</li>
            <li>• Energy flows through food chains/webs</li>
            <li>• Nutrients cycle through ecosystems</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🌿 Conservation</h4>
          <ul>
            <li>• Biodiversity is essential for life</li>
            <li>• Human activities impact ecosystems</li>
            <li>• Conservation is needed to protect nature</li>
            <li>• Everyone can help protect the environment</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Everything in nature is connected. Protecting ecosystems means protecting life on Earth.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Humans are separate from nature",
        correction: "Humans are part of ecosystems",
        explanation: "Human activities affect and are affected by ecosystems."
      },
      {
        id: "mis_002",
        misconception: "Food webs are simple",
        correction: "Food webs are complex with many interactions",
        explanation: "Ecosystems have intricate relationships between species."
      },
      {
        id: "mis_003",
        misconception: "Population growth is always exponential",
        correction: "Population growth is limited by resources",
        explanation: "Carrying capacity limits population growth."
      },
      {
        id: "mis_004",
        misconception: "Climate change is natural and not serious",
        correction: "Human-caused climate change is a serious threat",
        explanation: "Human activities have accelerated climate change."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Conservation Biology",
        description: "Protecting endangered species and habitats.",
        example: "National parks and wildlife reserves"
      },
      {
        id: "app_002",
        title: "Climate Change",
        description: "Understanding and mitigating climate change.",
        example: "Renewable energy and carbon reduction"
      },
      {
        id: "app_003",
        title: "Agriculture",
        description: "Sustainable farming practices.",
        example: "Crop rotation, organic farming"
      },
      {
        id: "app_004",
        title: "Pollution Control",
        description: "Reducing pollution in air, water, and soil.",
        example: "Waste management and recycling"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Ecology", definition: "The study of interactions between organisms and their environment." },
    { term: "Ecosystem", definition: "A community of organisms and their physical environment." },
    { term: "Habitat", definition: "Where an organism lives." },
    { term: "Niche", definition: "The role of an organism in an ecosystem." },
    { term: "Biotic", definition: "Living factors in an ecosystem." },
    { term: "Abiotic", definition: "Non-living factors in an ecosystem." },
    { term: "Food Chain", definition: "A single path of energy flow." },
    { term: "Food Web", definition: "All interconnected food chains." },
    { term: "Producer", definition: "Organism that makes its own food." },
    { term: "Consumer", definition: "Organism that eats other organisms." },
    { term: "Decomposer", definition: "Organism that breaks down dead matter." },
    { term: "Population", definition: "Group of the same species." },
    { term: "Community", definition: "All populations in an area." },
    { term: "Biome", definition: "Large region with similar climate." },
    { term: "Biosphere", definition: "All parts of Earth with life." },
    { term: "Succession", definition: "Gradual change in an ecosystem." },
    { term: "Biodiversity", definition: "Variety of life in an area." },
    { term: "Conservation", definition: "Protection of natural resources." },
    { term: "Carrying Capacity", definition: "Maximum population an environment can support." },
    { term: "Sustainability", definition: "Meeting needs without compromising the future." }
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
      question: "What is ecology?",
      type: "multiple_choice",
      options: [
        "The study of cells",
        "The study of interactions between organisms and their environment",
        "The study of genes",
        "The study of evolution"
      ],
      answer: "The study of interactions between organisms and their environment",
      explanation: "Ecology is the study of how organisms interact with each other and their environment."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the correct order from smallest to largest?",
      type: "multiple_choice",
      options: [
        "Biosphere → Ecosystem → Community → Population → Organism",
        "Organism → Population → Community → Ecosystem → Biosphere",
        "Organism → Community → Population → Ecosystem → Biosphere",
        "Ecosystem → Organism → Population → Community → Biosphere"
      ],
      answer: "Organism → Population → Community → Ecosystem → Biosphere",
      explanation: "The levels of ecological organization from smallest to largest are organism, population, community, ecosystem, and biosphere."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is an abiotic factor?",
      type: "multiple_choice",
      options: ["Trees", "Animals", "Sunlight", "Bacteria"],
      answer: "Sunlight",
      explanation: "Sunlight is a non-living (abiotic) factor."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the difference between a habitat and a niche?",
      type: "multiple_choice",
      options: [
        "Habitat is the role; niche is the place",
        "Habitat is the place; niche is the role",
        "They are the same thing",
        "Habitat is for animals; niche is for plants"
      ],
      answer: "Habitat is the place; niche is the role",
      explanation: "Habitat is where an organism lives; niche is its role in the ecosystem."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a producer in a food chain?",
      type: "multiple_choice",
      options: [
        "An organism that eats other organisms",
        "An organism that makes its own food",
        "An organism that breaks down dead matter",
        "An organism that decomposes"
      ],
      answer: "An organism that makes its own food",
      explanation: "Producers (plants) make their own food through photosynthesis."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is carrying capacity?",
      type: "multiple_choice",
      options: [
        "The maximum population size an environment can support",
        "The minimum population size an environment can support",
        "The average population size",
        "The rate of population growth"
      ],
      answer: "The maximum population size an environment can support",
      explanation: "Carrying capacity is the maximum population that an environment can sustain."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is primary succession?",
      type: "multiple_choice",
      options: [
        "Succession that starts without soil",
        "Succession that starts with soil",
        "Succession after a fire",
        "Succession in the ocean"
      ],
      answer: "Succession that starts without soil",
      explanation: "Primary succession starts on bare rock without soil."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is the role of nitrogen-fixing bacteria in the nitrogen cycle?",
      type: "multiple_choice",
      options: [
        "Convert nitrogen gas to ammonia",
        "Convert ammonia to nitrates",
        "Convert nitrates to nitrogen gas",
        "Convert organic nitrogen to ammonia"
      ],
      answer: "Convert nitrogen gas to ammonia",
      explanation: "Nitrogen-fixing bacteria convert atmospheric nitrogen (N₂) to ammonia (NH₃)."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a major cause of habitat loss?",
      type: "multiple_choice",
      options: [
        "Conservation",
        "Deforestation",
        "Recycling",
        "Renewable energy"
      ],
      answer: "Deforestation",
      explanation: "Deforestation is a major cause of habitat loss."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "Why is biodiversity important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It supports ecosystem health and provides resources",
        "It only matters for animals",
        "It only matters for plants"
      ],
      answer: "It supports ecosystem health and provides resources",
      explanation: "Biodiversity supports ecosystem health and provides food, medicine, and other resources."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is denitrification?",
      type: "multiple_choice",
      options: [
        "Converting N₂ to NH₃",
        "Converting NO₃⁻ to N₂",
        "Converting NH₃ to NO₃⁻",
        "Converting organic N to NH₄⁺"
      ],
      answer: "Converting NO₃⁻ to N₂",
      explanation: "Denitrification is the conversion of nitrates back to nitrogen gas."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the main cause of increased atmospheric CO₂?",
      type: "multiple_choice",
      options: [
        "Photosynthesis",
        "Burning fossil fuels",
        "Respiration",
        "Decomposition"
      ],
      answer: "Burning fossil fuels",
      explanation: "Burning fossil fuels releases large amounts of CO₂ into the atmosphere."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a conservation strategy?",
      type: "multiple_choice",
      options: [
        "Destroying habitats",
        "Protected areas",
        "Pollution",
        "Deforestation"
      ],
      answer: "Protected areas",
      explanation: "Protected areas like national parks are a key conservation strategy."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which biome has the highest biodiversity?",
      type: "multiple_choice",
      options: ["Desert", "Tundra", "Tropical Rainforest", "Taiga"],
      answer: "Tropical Rainforest",
      explanation: "Tropical rainforests have the highest biodiversity of any biome."
    },
    {
      id: "prac_015",
      objective: "obj_005",
      difficulty: "hard",
      question: "Only about 10% of energy is passed from one trophic level to the next. What happens to the rest?",
      type: "multiple_choice",
      options: [
        "It is stored as fat",
        "It is lost as heat",
        "It is converted to sunlight",
        "It disappears"
      ],
      answer: "It is lost as heat",
      explanation: "Most energy is lost as heat through metabolism."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_ecology",
    title: "Ecology Quiz",
    description: "Test your understanding of ecology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is ecology?",
        type: "short_answer",
        answer_key: "The study of interactions between organisms and their environment",
        explanation: "Ecology is the study of how organisms interact with each other and their environment."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "List the levels of ecological organization from smallest to largest.",
        type: "short_answer",
        answer_key: "Organism, Population, Community, Ecosystem, Biosphere",
        explanation: "The levels are organism, population, community, ecosystem, and biosphere."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between biotic and abiotic factors?",
        type: "short_answer",
        answer_key: "Biotic are living; abiotic are non-living",
        explanation: "Biotic factors are living organisms; abiotic factors are non-living components."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the difference between a habitat and a niche?",
        type: "short_answer",
        answer_key: "Habitat is where an organism lives; niche is its role",
        explanation: "Habitat is the place; niche is the function or role of the organism."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a food chain?",
        type: "short_answer",
        answer_key: "A single path of energy flow through an ecosystem",
        explanation: "A food chain shows a single path of energy transfer from producer to consumers."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is carrying capacity?",
        type: "short_answer",
        answer_key: "The maximum population size an environment can support",
        explanation: "Carrying capacity is the maximum population that an environment can sustain."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is the role of nitrogen-fixing bacteria in the nitrogen cycle?",
        type: "short_answer",
        answer_key: "Convert nitrogen gas to ammonia",
        explanation: "Nitrogen-fixing bacteria convert atmospheric nitrogen to ammonia."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a major human impact on ecosystems?",
        type: "short_answer",
        answer_key: "Deforestation, pollution, climate change, or habitat destruction",
        explanation: "Human activities like deforestation and pollution have major impacts on ecosystems."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Why is biodiversity important?",
        type: "short_answer",
        answer_key: "It supports ecosystem health and provides resources",
        explanation: "Biodiversity supports ecosystem health and provides food, medicine, and other resources."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "Give one example of a conservation strategy.",
        type: "short_answer",
        answer_key: "Protected areas, captive breeding, or habitat restoration",
        explanation: "Conservation strategies include protected areas, captive breeding, and habitat restoration."
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
        "Understand levels of ecological organization",
        "Distinguish between biotic and abiotic factors",
        "Explain food chains and energy flow",
        "Understand conservation and human impact"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is ecology?" },
        { time: "5-10 min", activity: "Direct Instruction - Levels of Organization" },
        { time: "10-15 min", activity: "Direct Instruction - Biotic and Abiotic Factors" },
        { time: "15-20 min", activity: "Direct Instruction - Food Chains and Webs" },
        { time: "20-25 min", activity: "Direct Instruction - Nutrient Cycles" },
        { time: "25-30 min", activity: "Direct Instruction - Human Impact" },
        { time: "30-35 min", activity: "Direct Instruction - Conservation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of interactions between organisms and their environment",
        prac_002: "Organism → Population → Community → Ecosystem → Biosphere",
        prac_003: "Sunlight",
        prac_004: "Habitat is the place; niche is the role",
        prac_005: "An organism that makes its own food",
        prac_006: "The maximum population size an environment can support",
        prac_007: "Succession that starts without soil",
        prac_008: "Convert nitrogen gas to ammonia",
        prac_009: "Deforestation",
        prac_010: "It supports ecosystem health and provides resources",
        prac_011: "Converting NO₃⁻ to N₂",
        prac_012: "Burning fossil fuels",
        prac_013: "Protected areas",
        prac_014: "Tropical Rainforest",
        prac_015: "It is lost as heat"
      },
      assessment: {
        ass_001: "The study of interactions between organisms and their environment",
        ass_002: "Organism, Population, Community, Ecosystem, Biosphere",
        ass_003: "Biotic are living; abiotic are non-living",
        ass_004: "Habitat is where an organism lives; niche is its role",
        ass_005: "A single path of energy flow through an ecosystem",
        ass_006: "The maximum population size an environment can support",
        ass_007: "Convert nitrogen gas to ammonia",
        ass_008: "Deforestation, pollution, climate change, or habitat destruction",
        ass_009: "It supports ecosystem health and provides resources",
        ass_010: "Protected areas, captive breeding, or habitat restoration"
      }
    },
    extensionActivities: [
      "Create a food web for a local ecosystem",
      "Research an endangered species and its conservation",
      "Investigate climate change impacts on ecosystems",
      "Study local environmental issues",
      "Visit a national park or nature reserve"
    ],
    differentiation: {
      struggling: [
        "Focus on basic ecology concepts",
        "Use simple examples",
        "Use visual aids and diagrams",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research complex food webs",
        "Study ecosystem modeling",
        "Research conservation biology",
        "Investigate sustainable practices"
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
      title: "Food Chain",
      description: "Diagram showing a food chain",
      url: "/diagrams/food-chain.png",
      alt: "Food chain diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Nitrogen Cycle",
      description: "The nitrogen cycle diagram",
      url: "/diagrams/nitrogen-cycle.png",
      alt: "Nitrogen cycle diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Carbon Cycle",
      description: "The carbon cycle diagram",
      url: "/diagrams/carbon-cycle.png",
      alt: "Carbon cycle diagram"
    },
    {
      id: "vis_004",
      type: "chart",
      title: "Biomes of the World",
      description: "Map showing biomes",
      url: "/diagrams/biomes.png",
      alt: "Biomes map"
    }
  ]
};