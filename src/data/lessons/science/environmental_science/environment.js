// Location: src/data/lessons/science/environmental_science/environment.js

export default {
  id: "env_lesson_environment",
  subject: "Environmental Science",
  topic: "Environment",
  name: "Environment",
  icon: "🌍",
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
    "Understanding of basic science concepts",
    "Knowledge of living and non-living things",
    "Basic understanding of ecosystems",
    "Awareness of environmental issues"
  ],

  nextLessons: [
    {
      name: "Pollution",
      file: "science/environmental_science/pollution.js"
    },
    {
      name: "Conservation",
      file: "science/environmental_science/conservation.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define environment and explain its components",
      indicator: "Student can explain what the environment is and identify its components"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the four spheres of the Earth",
      indicator: "Student can name and describe the atmosphere, hydrosphere, lithosphere, and biosphere"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of an ecosystem",
      indicator: "Student can define ecosystem and give examples"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain the concept of ecology",
      indicator: "Student can define ecology and explain its importance"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the concept of biodiversity",
      indicator: "Student can define biodiversity and explain its importance"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of food chains and food webs",
      indicator: "Student can describe how energy flows through ecosystems"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of energy flow in ecosystems",
      indicator: "Student can explain how energy moves through trophic levels"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of nutrient cycling",
      indicator: "Student can describe the carbon, nitrogen, and water cycles"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of ecological succession",
      indicator: "Student can describe primary and secondary succession"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the concept of biomes",
      indicator: "Student can identify major biomes and their characteristics"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the concept of environmental sustainability",
      indicator: "Student can explain what sustainability means and why it matters"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the interactions between the four spheres",
      indicator: "Student can explain how the atmosphere, hydrosphere, lithosphere, and biosphere interact"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of carrying capacity",
      indicator: "Student can explain how populations are limited by their environment"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of ecological footprint",
      indicator: "Student can explain the impact of human activities on the environment"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of human activities on ecosystems",
      indicator: "Student can explain how human activities affect the environment"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of environmental management",
      indicator: "Student can describe strategies for managing the environment"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the concept of sustainable development",
      indicator: "Student can define sustainable development and its goals"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the importance of environmental education",
      indicator: "Student can explain why environmental education is important"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Evaluate the impact of climate change on ecosystems",
      indicator: "Student can explain how climate change affects the environment"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Develop strategies for environmental protection",
      indicator: "Student can propose solutions to environmental problems"
    }
  ],

  video: {
    id: "vid_001",
    title: "The Environment - Our Planet's Ecosystems",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the environment, ecosystems, and the importance of protecting our planet."
  },

  content: {
    introduction: `
      <h2>What is the Environment?</h2>
      <p>The <strong>environment</strong> is everything that surrounds us, including both living and non-living things. It includes the air we breathe, the water we drink, the land we live on, and all the living organisms that share our planet.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Components of the Environment</h3>
          <ul>
            <li>• <strong>Atmosphere:</strong> The air surrounding Earth</li>
            <li>• <strong>Hydrosphere:</strong> All water on Earth</li>
            <li>• <strong>Lithosphere:</strong> The solid Earth</li>
            <li>• <strong>Biosphere:</strong> All living things</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Why It Matters</h3>
          <ul>
            <li>• Supports all life on Earth</li>
            <li>• Provides resources we need</li>
            <li>• Regulates climate and weather</li>
            <li>• Essential for survival</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="400" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Four Spheres of Earth</text>
          
          <!-- Atmosphere (outer circle) -->
          <circle cx="300" cy="200" r="160" fill="none" stroke="#3498db" stroke-width="3"/>
          <text x="300" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#3498db">Atmosphere</text>
          <text x="300" y="65" text-anchor="middle" font-size="10" fill="#3498db">Air</text>
          
          <!-- Hydrosphere -->
          <circle cx="300" cy="200" r="120" fill="none" stroke="#2ecc71" stroke-width="3"/>
          <text x="300" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#2ecc71">Hydrosphere</text>
          <text x="300" y="100" text-anchor="middle" font-size="10" fill="#2ecc71">Water</text>
          
          <!-- Lithosphere -->
          <circle cx="300" cy="200" r="80" fill="none" stroke="#e67e22" stroke-width="3"/>
          <text x="300" y="195" text-anchor="middle" font-size="14" font-weight="bold" fill="#e67e22">Lithosphere</text>
          <text x="300" y="212" text-anchor="middle" font-size="10" fill="#e67e22">Land</text>
          
          <!-- Biosphere -->
          <circle cx="300" cy="200" r="40" fill="#27ae60" opacity="0.3" stroke="#27ae60" stroke-width="2"/>
          <text x="300" y="205" text-anchor="middle" font-size="14" font-weight="bold" fill="#27ae60">Biosphere</text>
          <text x="300" y="220" text-anchor="middle" font-size="10" fill="#27ae60">Life</text>
          
          <!-- Earth center -->
          <circle cx="300" cy="200" r="10" fill="#e74c3c"/>
          <text x="300" y="200" text-anchor="middle" font-size="8" fill="#fff">Earth</text>
          
          <!-- Labels -->
          <text x="300" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Atmosphere, Hydrosphere, Lithosphere, and Biosphere interact to form the environment</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Four Spheres",
        objective: "obj_002",
        text: `
          <h3>The Four Spheres of the Earth</h3>
          <p>The environment consists of four interconnected spheres.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🌬️ Atmosphere</h4>
              <ul>
                <li>• The layer of gases surrounding Earth</li>
                <li>• Main gases: Nitrogen (78%), Oxygen (21%)</li>
                <li>• Protects from harmful radiation</li>
                <li>• Regulates temperature</li>
                <li>• Provides air for breathing</li>
              </ul>
            </div>
            <div class="bg-blue-200 p-3 rounded">
              <h4>💧 Hydrosphere</h4>
              <ul>
                <li>• All water on Earth</li>
                <li>• Oceans, rivers, lakes, ice</li>
                <li>• Covers 71% of Earth's surface</li>
                <li>• Essential for all life</li>
                <li>• Cycles through evaporation and precipitation</li>
              </ul>
            </div>
            <div class="bg-brown-50 p-3 rounded">
              <h4>⛰️ Lithosphere</h4>
              <ul>
                <li>• The solid outer layer of Earth</li>
                <li>• Includes rocks, soil, minerals</li>
                <li>• Provides nutrients for plants</li>
                <li>• Contains fossil fuels</li>
                <li>• Subject to erosion and weathering</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🌿 Biosphere</h4>
              <ul>
                <li>• All living organisms</li>
                <li>• Includes plants, animals, microorganisms</li>
                <li>• Interacts with other spheres</li>
                <li>• Supports life processes</li>
                <li>• Maintains biodiversity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Ecosystems and Ecology",
        objective: "obj_003",
        text: `
          <h3>Ecosystems</h3>
          <p>An <strong>ecosystem</strong> is a community of living organisms interacting with their non-living environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components of an Ecosystem</h4>
              <ul>
                <li><strong>Abiotic (Non-living):</strong></li>
                <li>• Light, temperature, water</li>
                <li>• Soil, minerals, air</li>
                <li><strong>Biotic (Living):</strong></li>
                <li>• Producers (plants)</li>
                <li>• Consumers (animals)</li>
                <li>• Decomposers (bacteria, fungi)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Ecosystems</h4>
              <ul>
                <li><strong>Terrestrial:</strong></li>
                <li>• Forests, grasslands, deserts</li>
                <li>• Mountains, tundra</li>
                <li><strong>Aquatic:</strong></li>
                <li>• Freshwater: rivers, lakes</li>
                <li>• Marine: oceans, seas</li>
                <li>• Estuaries: where fresh and salt water meet</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Ecology:</strong>
            <ul>
              <li>• <strong>Ecology</strong> is the study of how organisms interact with each other and their environment</li>
              <li>• Levels of ecological organization:</li>
              <li>• Organism → Population → Community → Ecosystem → Biome → Biosphere</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Biodiversity",
        objective: "obj_005",
        text: `
          <h3>Biodiversity</h3>
          <p><strong>Biodiversity</strong> is the variety of life on Earth at all levels, from genes to ecosystems.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Levels of Biodiversity</h4>
              <ul>
                <li><strong>Genetic diversity:</strong></li>
                <li>• Variation within species</li>
                <li>• Essential for adaptation</li>
                <li><strong>Species diversity:</strong></li>
                <li>• Number of different species</li>
                <li>• Richness and abundance</li>
                <li><strong>Ecosystem diversity:</strong></li>
                <li>• Variety of habitats</li>
                <li>• Different ecosystems</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance of Biodiversity</h4>
              <ul>
                <li>• Provides ecosystem services</li>
                <li>• Food, medicine, resources</li>
                <li>• Maintains ecosystem stability</li>
                <li>• Supports life on Earth</li>
                <li>• Aesthetic and cultural value</li>
                <li>• Economic benefits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Food Chains and Food Webs",
        objective: "obj_006",
        text: `
          <h3>Food Chains and Food Webs</h3>
          <p>A <strong>food chain</strong> shows the flow of energy from one organism to another. A <strong>food web</strong> is a network of interconnected food chains.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="300" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Food Chain</text>
              
              <!-- Sun -->
              <circle cx="60" cy="150" r="25" fill="#f39c12"/>
              <text x="60" y="155" text-anchor="middle" font-size="9" fill="#fff">Sun</text>
              
              <!-- Arrow -->
              <path d="M85 150 L120 150" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowF)"/>
              
              <!-- Producer -->
              <rect x="125" y="125" width="60" height="50" fill="#2ecc71" stroke="#27ae60" stroke-width="2" rx="5"/>
              <text x="155" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Grass</text>
              <text x="155" y="163" text-anchor="middle" font-size="9" fill="#fff">Producer</text>
              
              <path d="M185 150 L220 150" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowF)"/>
              
              <!-- Primary Consumer -->
              <rect x="225" y="125" width="60" height="50" fill="#f39c12" stroke="#e67e22" stroke-width="2" rx="5"/>
              <text x="255" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Rabbit</text>
              <text x="255" y="163" text-anchor="middle" font-size="9" fill="#fff">Primary</text>
              
              <path d="M285 150 L320 150" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowF)"/>
              
              <!-- Secondary Consumer -->
              <rect x="325" y="125" width="60" height="50" fill="#e74c3c" stroke="#c0392b" stroke-width="2" rx="5"/>
              <text x="355" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Fox</text>
              <text x="355" y="163" text-anchor="middle" font-size="9" fill="#fff">Secondary</text>
              
              <path d="M385 150 L420 150" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowF)"/>
              
              <!-- Tertiary Consumer -->
              <rect x="425" y="125" width="60" height="50" fill="#8e44ad" stroke="#6c3483" stroke-width="2" rx="5"/>
              <text x="455" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Lion</text>
              <text x="455" y="163" text-anchor="middle" font-size="9" fill="#fff">Tertiary</text>
              
              <defs>
                <marker id="arrowF" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
                </marker>
              </defs>
              
              <text x="300" y="230" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Energy flows through the food chain from sun to producers to consumers</text>
              <text x="300" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">10% of energy is transferred to the next trophic level</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Trophic Levels:</strong>
            <ul>
              <li>• <strong>Producers (Level 1):</strong> Plants, algae (autotrophs)</li>
              <li>• <strong>Primary Consumers (Level 2):</strong> Herbivores (eat plants)</li>
              <li>• <strong>Secondary Consumers (Level 3):</strong> Omnivores (eat herbivores)</li>
              <li>• <strong>Tertiary Consumers (Level 4):</strong> Carnivores (eat other consumers)</li>
              <li>• <strong>Decomposers:</strong> Break down dead organisms</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Nutrient Cycles",
        objective: "obj_008",
        text: `
          <h3>Nutrient Cycles</h3>
          <p>Nutrients cycle through the environment in biogeochemical cycles.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>💧 Water Cycle</h4>
              <ul>
                <li>• Evaporation</li>
                <li>• Condensation</li>
                <li>• Precipitation</li>
                <li>• Collection</li>
                <li>• Essential for all life</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🔄 Carbon Cycle</h4>
              <ul>
                <li>• Photosynthesis</li>
                <li>• Respiration</li>
                <li>• Decomposition</li>
                <li>• Combustion</li>
                <li>• Fossil fuels</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🔁 Nitrogen Cycle</h4>
              <ul>
                <li>• Nitrogen fixation</li>
                <li>• Nitrification</li>
                <li>• Assimilation</li>
                <li>• Denitrification</li>
                <li>• Essential for proteins</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Ecological Succession",
        objective: "obj_009",
        text: `
          <h3>Ecological Succession</h3>
          <p><strong>Ecological succession</strong> is the gradual change in an ecosystem over time.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Primary Succession</h4>
              <ul>
                <li>• Starts on bare rock</li>
                <li>• No soil present</li>
                <li>• Pioneer species first</li>
                <li>• Very slow process</li>
                <li>• Example: Volcanic island</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Secondary Succession</h4>
              <ul>
                <li>• Starts on disturbed soil</li>
                <li>• Soil already present</li>
                <li>• Faster than primary</li>
                <li>• Example: After a forest fire</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Stages of Succession:</strong>
            <ul>
              <li>• <strong>Pioneer stage:</strong> Lichens, mosses</li>
              <li>• <strong>Intermediate stage:</strong> Grasses, shrubs</li>
              <li>• <strong>Climax community:</strong> Mature forest</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Biomes",
        objective: "obj_010",
        text: `
          <h3>Major Biomes of the World</h3>
          <p><strong>Biomes</strong> are large communities of plants and animals that are adapted to specific climates.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>🌳 Forest Biomes</h4>
              <ul>
                <li><strong>Tropical Rainforest:</strong></li>
                <li>• Hot, humid, high rainfall</li>
                <li>• Greatest biodiversity</li>
                <li><strong>Temperate Forest:</strong></li>
                <li>• Four seasons</li>
                <li>• Deciduous trees</li>
                <li><strong>Boreal Forest (Taiga):</strong></li>
                <li>• Cold, coniferous trees</li>
                <li>• Long winters</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🏜️ Dry Biomes</h4>
              <ul>
                <li><strong>Desert:</strong></li>
                <li>• Very dry, extreme temperatures</li>
                <li>• Adapted plants and animals</li>
                <li><strong>Grassland:</strong></li>
                <li>• Moderate rainfall</li>
                <li>• Grazing animals</li>
                <li><strong>Savanna:</strong></li>
                <li>• Grass and scattered trees</li>
                <li>• Wet and dry seasons</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>❄️ Cold Biomes</h4>
              <ul>
                <li><strong>Tundra:</strong></li>
                <li>• Very cold, permafrost</li>
                <li>• Short growing season</li>
                <li><strong>Ice Caps:</strong></li>
                <li>• Permanent ice and snow</li>
                <li>• Very little life</li>
              </ul>
            </div>
            <div class="bg-blue-200 p-3 rounded">
              <h4>🌊 Aquatic Biomes</h4>
              <ul>
                <li><strong>Marine:</strong></li>
                <li>• Oceans, coral reefs</li>
                <li>• Saltwater ecosystems</li>
                <li><strong>Freshwater:</strong></li>
                <li>• Rivers, lakes, wetlands</li>
                <li>• Important for biodiversity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Environmental Sustainability",
        objective: "obj_011",
        text: `
          <h3>Environmental Sustainability</h3>
          <p><strong>Environmental sustainability</strong> means using resources in a way that meets present needs without compromising the ability of future generations to meet their own needs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles of Sustainability</h4>
              <ul>
                <li>• Use resources wisely</li>
                <li>• Reduce waste and pollution</li>
                <li>• Protect biodiversity</li>
                <li>• Maintain ecosystem health</li>
                <li>• Consider future generations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sustainable Practices</h4>
              <ul>
                <li>• Renewable energy</li>
                <li>• Recycling and waste reduction</li>
                <li>• Conservation of resources</li>
                <li>• Sustainable agriculture</li>
                <li>• Reforestation</li>
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
          <h4>🌍 The Environment</h4>
          <ul>
            <li>• Four spheres: Atmosphere, Hydrosphere, Lithosphere, Biosphere</li>
            <li>• Ecosystems consist of living and non-living components</li>
            <li>• Biodiversity is essential for ecosystem health</li>
            <li>• Energy flows through food chains and webs</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Concepts</h4>
          <ul>
            <li>• Nutrient cycles recycle essential elements</li>
            <li>• Ecological succession changes ecosystems over time</li>
            <li>• Biomes are large ecosystems with specific climates</li>
            <li>• Sustainability ensures resources for future generations</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The environment is a complex system of interconnected components. Understanding it is essential for protecting our planet.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "The environment is just nature",
        correction: "The environment includes all living and non-living things, including human-made elements",
        explanation: "The environment includes everything around us, including cities and human-made structures."
      },
      {
        id: "mis_002",
        misconception: "Ecosystems are always in balance",
        correction: "Ecosystems are dynamic and constantly changing",
        explanation: "Natural disturbances and human activities constantly alter ecosystems."
      },
      {
        id: "mis_003",
        misconception: "Biodiversity is not important for human survival",
        correction: "Biodiversity provides essential ecosystem services",
        explanation: "Biodiversity provides food, medicine, clean air, and water."
      },
      {
        id: "mis_004",
        misconception: "The environment is infinite and can support unlimited growth",
        correction: "The environment has finite resources and carrying capacity",
        explanation: "Resources are limited, and human activities must be sustainable."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Environmental Management",
        description: "Understanding the environment helps in managing natural resources.",
        example: "Forest management, water resource management."
      },
      {
        id: "app_002",
        title: "Conservation",
        description: "Environmental science guides conservation efforts.",
        example: "Protecting endangered species and habitats."
      },
      {
        id: "app_003",
        title: "Urban Planning",
        description: "Environmental science informs sustainable city planning.",
        example: "Green spaces, sustainable infrastructure."
      },
      {
        id: "app_004",
        title: "Climate Policy",
        description: "Environmental science provides the basis for climate policy.",
        example: "International agreements on climate change."
      }
    ]
  },

  keyTerms: [
    { term: "Environment", definition: "Everything that surrounds us, including living and non-living things." },
    { term: "Atmosphere", definition: "The layer of gases surrounding Earth." },
    { term: "Hydrosphere", definition: "All water on Earth." },
    { term: "Lithosphere", definition: "The solid outer layer of Earth." },
    { term: "Biosphere", definition: "All living organisms on Earth." },
    { term: "Ecosystem", definition: "A community of organisms interacting with their environment." },
    { term: "Ecology", definition: "The study of interactions between organisms and their environment." },
    { term: "Biodiversity", definition: "The variety of life on Earth." },
    { term: "Food Chain", definition: "A sequence of organisms through which energy flows." },
    { term: "Food Web", definition: "A network of interconnected food chains." },
    { term: "Producer", definition: "An organism that produces its own food." },
    { term: "Consumer", definition: "An organism that consumes other organisms." },
    { term: "Decomposer", definition: "An organism that breaks down dead organisms." },
    { term: "Succession", definition: "The gradual change in an ecosystem over time." },
    { term: "Biome", definition: "A large ecosystem with specific climate and organisms." },
    { term: "Sustainability", definition: "Meeting present needs without compromising the future." },
    { term: "Carrying Capacity", definition: "The maximum population an environment can support." },
    { term: "Ecological Footprint", definition: "The impact of human activities on the environment." },
    { term: "Nutrient Cycle", definition: "The cycling of nutrients through the environment." },
    { term: "Conservation", definition: "The protection and preservation of the environment." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is the environment?",
      type: "multiple_choice",
      options: [
        "Only living things",
        "Everything that surrounds us",
        "Only non-living things",
        "Only the atmosphere"
      ],
      answer: "Everything that surrounds us",
      explanation: "The environment includes all living and non-living things around us."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which sphere includes all water on Earth?",
      type: "multiple_choice",
      options: ["Atmosphere", "Hydrosphere", "Lithosphere", "Biosphere"],
      answer: "Hydrosphere",
      explanation: "The hydrosphere includes all water on Earth."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an ecosystem?",
      type: "multiple_choice",
      options: [
        "Only living organisms",
        "A community of organisms and their environment",
        "Only non-living things",
        "A single species"
      ],
      answer: "A community of organisms and their environment",
      explanation: "An ecosystem includes both living organisms and their non-living environment."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is ecology?",
      type: "multiple_choice",
      options: [
        "The study of weather",
        "The study of organisms and their environment",
        "The study of rocks",
        "The study of water"
      ],
      answer: "The study of organisms and their environment",
      explanation: "Ecology is the study of interactions between organisms and their environment."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is biodiversity?",
      type: "multiple_choice",
      options: [
        "The number of humans on Earth",
        "The variety of life on Earth",
        "The number of species in a forest",
        "The amount of water on Earth"
      ],
      answer: "The variety of life on Earth",
      explanation: "Biodiversity is the variety of life at all levels."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the first trophic level in a food chain?",
      type: "multiple_choice",
      options: ["Primary consumers", "Producers", "Secondary consumers", "Decomposers"],
      answer: "Producers",
      explanation: "Producers (plants) are the first trophic level."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What percentage of energy is transferred from one trophic level to the next?",
      type: "multiple_choice",
      options: ["10%", "20%", "50%", "90%"],
      answer: "10%",
      explanation: "About 10% of energy is transferred to the next trophic level."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which cycle involves evaporation and precipitation?",
      type: "multiple_choice",
      options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Phosphorus cycle"],
      answer: "Water cycle",
      explanation: "The water cycle involves evaporation, condensation, and precipitation."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is primary succession?",
      type: "multiple_choice",
      options: [
        "Succession after a fire",
        "Succession on bare rock",
        "Succession on disturbed soil",
        "Succession in a forest"
      ],
      answer: "Succession on bare rock",
      explanation: "Primary succession starts on bare rock with no soil."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which biome has the greatest biodiversity?",
      type: "multiple_choice",
      options: ["Desert", "Tundra", "Tropical rainforest", "Grassland"],
      answer: "Tropical rainforest",
      explanation: "Tropical rainforests have the greatest biodiversity."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is environmental sustainability?",
      type: "multiple_choice",
      options: [
        "Using resources as fast as possible",
        "Meeting present needs without compromising the future",
        "Ignoring environmental problems",
        "Only using renewable resources"
      ],
      answer: "Meeting present needs without compromising the future",
      explanation: "Sustainability means using resources wisely for future generations."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How do the four spheres interact?",
      type: "multiple_choice",
      options: [
        "They are completely separate",
        "They interact and influence each other",
        "They only interact through water",
        "They only interact through air"
      ],
      answer: "They interact and influence each other",
      explanation: "The atmosphere, hydrosphere, lithosphere, and biosphere are interconnected."
    }
  ],

  assessment: {
    id: "assess_environment",
    title: "Environment Quiz",
    description: "Test your understanding of the environment",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the environment?",
        type: "short_answer",
        answer_key: "Everything that surrounds us",
        explanation: "The environment includes all living and non-living things around us."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the four spheres of the Earth?",
        type: "short_answer",
        answer_key: "Atmosphere, hydrosphere, lithosphere, biosphere",
        explanation: "The four spheres are atmosphere, hydrosphere, lithosphere, and biosphere."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the biosphere?",
        type: "short_answer",
        answer_key: "All living organisms on Earth",
        explanation: "The biosphere includes all living things."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "What is an ecosystem?",
        type: "short_answer",
        answer_key: "A community of organisms and their environment",
        explanation: "An ecosystem includes living organisms and their non-living environment."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is ecology?",
        type: "short_answer",
        answer_key: "The study of organisms and their environment",
        explanation: "Ecology studies interactions between organisms and their environment."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is biodiversity?",
        type: "short_answer",
        answer_key: "The variety of life on Earth",
        explanation: "Biodiversity is the variety of all life forms."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between a food chain and a food web?",
        type: "short_answer",
        answer_key: "A food chain is a single path; a food web is a network of food chains",
        explanation: "Food chains show one path; food webs show multiple interconnected paths."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "Name three nutrient cycles.",
        type: "short_answer",
        answer_key: "Water cycle, carbon cycle, nitrogen cycle",
        explanation: "The water, carbon, and nitrogen cycles are important nutrient cycles."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between primary and secondary succession?",
        type: "short_answer",
        answer_key: "Primary starts on bare rock; secondary starts on disturbed soil",
        explanation: "Primary succession starts without soil; secondary starts with soil already present."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Which biome is the most biodiverse?",
        type: "short_answer",
        answer_key: "Tropical rainforest",
        explanation: "Tropical rainforests have the highest biodiversity."
      },
      {
        id: "ass_011",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is environmental sustainability?",
        type: "short_answer",
        answer_key: "Meeting present needs without compromising the future",
        explanation: "Sustainability ensures resources for future generations."
      },
      {
        id: "ass_012",
        objective: "obj_020",
        difficulty: "hard",
        question: "Why is it important to protect the environment?",
        type: "short_answer",
        answer_key: "To ensure resources and a healthy planet for future generations",
        explanation: "Protecting the environment is essential for the survival of all life."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand the environment and its components",
        "Explain ecosystems and biodiversity",
        "Describe food chains and nutrient cycles",
        "Understand sustainability"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the environment?" },
        { time: "5-10 min", activity: "Direct Instruction - The Four Spheres" },
        { time: "10-15 min", activity: "Direct Instruction - Ecosystems and Ecology" },
        { time: "15-20 min", activity: "Direct Instruction - Biodiversity" },
        { time: "20-25 min", activity: "Direct Instruction - Food Chains and Webs" },
        { time: "25-30 min", activity: "Direct Instruction - Nutrient Cycles" },
        { time: "30-35 min", activity: "Direct Instruction - Biomes and Succession" },
        { time: "35-40 min", activity: "Direct Instruction - Sustainability" },
        { time: "40-50 min", activity: "Guided Practice" },
        { time: "50-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Everything that surrounds us",
        prac_002: "Hydrosphere",
        prac_003: "A community of organisms and their environment",
        prac_004: "The study of organisms and their environment",
        prac_005: "The variety of life on Earth",
        prac_006: "Producers",
        prac_007: "10%",
        prac_008: "Water cycle",
        prac_009: "Succession on bare rock",
        prac_010: "Tropical rainforest",
        prac_011: "Meeting present needs without compromising the future",
        prac_012: "They interact and influence each other"
      },
      assessment: {
        ass_001: "Everything that surrounds us",
        ass_002: "Atmosphere, hydrosphere, lithosphere, biosphere",
        ass_003: "All living organisms on Earth",
        ass_004: "A community of organisms and their environment",
        ass_005: "The study of organisms and their environment",
        ass_006: "The variety of life on Earth",
        ass_007: "A food chain is a single path; a food web is a network of food chains",
        ass_008: "Water cycle, carbon cycle, nitrogen cycle",
        ass_009: "Primary starts on bare rock; secondary starts on disturbed soil",
        ass_010: "Tropical rainforest",
        ass_011: "Meeting present needs without compromising the future",
        ass_012: "To ensure resources and a healthy planet for future generations"
      }
    },
    extensionActivities: [
      "Visit a local ecosystem and observe biodiversity",
      "Research the carbon cycle in detail",
      "Study a specific biome",
      "Investigate sustainable practices in your community"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use visual aids",
        "Practice with simple examples",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research specific ecosystems in depth",
        "Study climate change impacts",
        "Investigate conservation strategies",
        "Explore environmental policy"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "The Four Spheres",
      description: "Diagram showing the four spheres of Earth",
      url: "/diagrams/four-spheres.png",
      alt: "Four spheres diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Food Chain",
      description: "Diagram showing a food chain",
      url: "/diagrams/food-chain.png",
      alt: "Food chain diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Biomes",
      description: "Chart showing major biomes",
      url: "/diagrams/biomes.png",
      alt: "Biomes chart"
    }
  ]
};