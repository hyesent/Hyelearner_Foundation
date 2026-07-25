// Location: src/data/lessons/science/environmental_science/conservation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "env_lesson_conservation",
  subject: "Environmental Science",
  topic: "Conservation",
  name: "Conservation",
  icon: "🌿",
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
    "Understanding of ecosystems",
    "Knowledge of biodiversity",
    "Understanding of environmental issues",
    "Basic understanding of sustainability"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Environment",
      file: "science/environmental_science/environment.js"
    },
    {
      name: "Pollution",
      file: "science/environmental_science/pollution.js"
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
      description: "Define conservation and explain its importance",
      indicator: "Student can explain what conservation is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between conservation and preservation",
      indicator: "Student can differentiate between conservation and preservation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify types of natural resources",
      indicator: "Student can classify renewable and non-renewable resources"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the principles of conservation",
      indicator: "Student can describe the key principles of conservation"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe biodiversity conservation strategies",
      indicator: "Student can explain in-situ and ex-situ conservation"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the importance of protected areas",
      indicator: "Student can describe national parks, reserves, and sanctuaries"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe sustainable resource management",
      indicator: "Student can explain sustainable use of resources"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of international organizations",
      indicator: "Student can describe IUCN, WWF, and CITES"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of ecosystem restoration",
      indicator: "Student can describe habitat restoration and rewilding"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the challenges of conservation",
      indicator: "Student can describe the obstacles to conservation efforts"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the impact of human activities on biodiversity",
      indicator: "Student can describe how humans threaten biodiversity"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the importance of genetic diversity",
      indicator: "Student can describe why genetic diversity matters"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe community-based conservation",
      indicator: "Student can explain the role of local communities"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the economics of conservation",
      indicator: "Student can discuss the economic value of biodiversity"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Evaluate conservation success stories",
      indicator: "Student can describe successful conservation efforts"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the future of conservation",
      indicator: "Student can discuss emerging conservation strategies"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Conservation - Protecting Our Planet",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about conservation, biodiversity, and how we can protect our natural world."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Conservation</h2>
      <p><strong>Conservation</strong> is the protection and sustainable management of natural resources and biodiversity. It involves the careful use of resources to ensure their availability for future generations while maintaining the health of ecosystems.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌿 Key Concepts</h3>
          <ul>
            <li>✓ Conservation vs Preservation</li>
            <li>✓ Natural Resources</li>
            <li>✓ Biodiversity Conservation</li>
            <li>✓ Protected Areas</li>
            <li>✓ Sustainable Management</li>
            <li>✓ Ecosystem Restoration</li>
            <li>✓ International Cooperation</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• 1 million species are threatened with extinction</li>
            <li>• Protected areas cover 15% of land</li>
            <li>• Conservation saves species from extinction</li>
            <li>• Biodiversity provides $125 trillion in services</li>
            <li>• Indigenous peoples manage 80% of biodiversity</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Conservation Matters</h4>
        <p>Conservation is essential for maintaining biodiversity, ecosystem services, and the health of our planet. It ensures that future generations can enjoy and benefit from nature.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Conservation vs Preservation",
        objective: "obj_002",
        text: `
          <h3>Conservation vs Preservation</h3>
          <p>Understanding the difference between these two approaches is fundamental.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Conservation</h4>
              <ul>
                <li>• <strong>Sustainable use</strong> of resources</li>
                <li>• Balance between use and protection</li>
                <li>• Active management</li>
                <li>• Example: Sustainable forestry</li>
                <li>• "Use wisely"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Preservation</h4>
              <ul>
                <li>• <strong>Protection</strong> from human use</li>
                <li>• Leave untouched</li>
                <li>• Minimal intervention</li>
                <li>• Example: Wilderness areas</li>
                <li>• "Leave as is"</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Key Difference:</strong>
            <ul>
              <li>• Conservation = Sustainable use</li>
              <li>• Preservation = Protection without use</li>
              <li>• Both are important for environmental protection</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Natural Resources",
        objective: "obj_003",
        text: `
          <h3>Types of Natural Resources</h3>
          <p>Resources are classified based on their ability to be replenished.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Renewable Resources</h4>
              <ul>
                <li>• Can be replenished naturally</li>
                <li>• Sustainable with careful use</li>
                <li>• Examples:</li>
                <li>• Solar energy</li>
                <li>• Wind energy</li>
                <li>• Water</li>
                <li>• Forests (sustainably managed)</li>
                <li>• Fish stocks</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Non-Renewable Resources</h4>
              <ul>
                <li>• Cannot be replenished</li>
                <li>• Finite supply</li>
                <li>• Examples:</li>
                <li>• Fossil fuels (coal, oil, gas)</li>
                <li>• Minerals</li>
                <li>• Metals</li>
                <li>• Nuclear fuels</li>
                <li>• Groundwater (some)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Principles of Conservation",
        objective: "obj_004",
        text: `
          <h3>Key Principles of Conservation</h3>
          <p>Several principles guide conservation efforts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles</h4>
              <ul>
                <li>• <strong>Sustainability:</strong> Use without depleting</li>
                <li>• <strong>Biodiversity:</strong> Protect all species</li>
                <li>• <strong>Ecosystem integrity:</strong> Maintain natural systems</li>
                <li>• <strong>Precautionary principle:</strong> When in doubt, protect</li>
                <li>• <strong>Intergenerational equity:</strong> Think of future generations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Application</h4>
              <ul>
                <li>• <strong>Ecosystem-based management:</strong> Whole systems</li>
                <li>• <strong>Adaptive management:</strong> Learning and adjusting</li>
                <li>• <strong>Stakeholder involvement:</strong> Include all affected</li>
                <li>• <strong>Science-based:</strong> Use best available knowledge</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Biodiversity Conservation",
        objective: "obj_005",
        text: `
          <h3>Biodiversity Conservation Strategies</h3>
          <p>Two main approaches are used to conserve biodiversity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 In-Situ Conservation</h4>
              <ul>
                <li>• Protecting species in their natural habitat</li>
                <li>• Maintaining ecosystems</li>
                <li>• Examples:</li>
                <li>• National parks</li>
                <li>• Wildlife reserves</li>
                <li>• Marine protected areas</li>
                <li>• Advantages:</li>
                <li>• Natural ecosystem maintained</li>
                <li>• Species can evolve naturally</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Ex-Situ Conservation</h4>
              <ul>
                <li>• Protecting species outside their natural habitat</li>
                <li>• Artificial environments</li>
                <li>• Examples:</li>
                <li>• Zoos</li>
                <li>• Botanical gardens</li>
                <li>• Seed banks</li>
                <li>• Captive breeding programs</li>
                <li>• Advantages:</li>
                <li>• Controlled environment</li>
                <li>• Can save critically endangered species</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Protected Areas",
        objective: "obj_006",
        text: `
          <h3>Protected Areas</h3>
          <p>Protected areas are essential for conservation worldwide.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Protected Areas</h4>
              <ul>
                <li>• <strong>National Parks:</strong> Protected landscapes</li>
                <li>• <strong>Wildlife Sanctuaries:</strong> Species protection</li>
                <li>• <strong>Marine Protected Areas:</strong> Ocean conservation</li>
                <li>• <strong>Nature Reserves:</strong> Scientific research</li>
                <li>• <strong>World Heritage Sites:</strong> Global significance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Protect habitats and species</li>
                <li>• Maintain ecosystem services</li>
                <li>• Support research and education</li>
                <li>• Generate tourism revenue</li>
                <li>• Provide cultural benefits</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">In-Situ vs Ex-Situ Conservation</text>
              
              <!-- In-Situ Conservation -->
              <g transform="translate(150, 180)">
                <!-- Forest -->
                <path d="M-80 30 L-60 -20 L-30 10 L-10 -30 L20 0 L40 -40 L60 -10 L80 30 Z" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <!-- Trees -->
                <polygon points="-60,-20 -50,-40 -40,-20" fill="#66bb6a"/>
                <polygon points="-10,-30 0,-55 10,-30" fill="#66bb6a"/>
                <polygon points="40,-40 50,-65 60,-40" fill="#66bb6a"/>
                <!-- Animals -->
                <ellipse cx="-20" cy="10" rx="10" ry="6" fill="#8d6e63"/>
                <circle cx="-25" cy="5" r="4" fill="#8d6e63"/>
                <ellipse cx="20" cy="15" rx="8" ry="5" fill="#a1887f"/>
                <circle cx="15" cy="10" r="3" fill="#a1887f"/>
                
                <text x="0" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e7d32">In-Situ</text>
                <text x="0" y="88" text-anchor="middle" font-size="11" fill="#2e7d32">Natural Habitat</text>
                <text x="0" y="103" text-anchor="middle" font-size="10" fill="#2e7d32">National Parks, Reserves</text>
              </g>
              
              <!-- Arrow -->
              <text x="290" y="185" font-size="24" fill="#1565c0">↔</text>
              
              <!-- Ex-Situ Conservation -->
              <g transform="translate(450, 180)">
                <!-- Zoo enclosure -->
                <rect x="-70" y="-40" width="140" height="70" rx="5" fill="#e0e0e0" stroke="#795548" stroke-width="3"/>
                <rect x="-60" y="-35" width="120" height="30" rx="3" fill="#a5d6a7" stroke="#2e7d32" stroke-width="1.5"/>
                <!-- Animals -->
                <ellipse cx="-25" cy="-10" rx="10" ry="6" fill="#8d6e63"/>
                <circle cx="-30" cy="-15" r="4" fill="#8d6e63"/>
                <ellipse cx="25" cy="-10" rx="8" ry="5" fill="#a1887f"/>
                <circle cx="20" cy="-15" r="3" fill="#a1887f"/>
                
                <text x="0" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#795548">Ex-Situ</text>
                <text x="0" y="88" text-anchor="middle" font-size="11" fill="#795548">Artificial Environment</text>
                <text x="0" y="103" text-anchor="middle" font-size="10" fill="#795548">Zoos, Seed Banks</text>
              </g>
              
              <!-- Label -->
              <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1565c0">Both approaches are essential for biodiversity conservation</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "International Organizations",
        objective: "obj_008",
        text: `
          <h3>International Conservation Organizations</h3>
          <p>Several organizations work on conservation globally.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Organizations</h4>
              <ul>
                <li>• <strong>IUCN:</strong> International Union for Conservation of Nature</li>
                <li>• <strong>WWF:</strong> World Wildlife Fund</li>
                <li>• <strong>CITES:</strong> Convention on International Trade in Endangered Species</li>
                <li>• <strong>UNEP:</strong> UN Environment Programme</li>
                <li>• <strong>BirdLife International:</strong> Bird conservation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Their Roles</h4>
              <ul>
                <li>• <strong>IUCN:</strong> Red List of Threatened Species</li>
                <li>• <strong>WWF:</strong> Conservation projects, advocacy</li>
                <li>• <strong>CITES:</strong> Regulates wildlife trade</li>
                <li>• <strong>UNEP:</strong> Environmental policy</li>
                <li>• <strong>BirdLife:</strong> Bird species protection</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Ecosystem Restoration",
        objective: "obj_009",
        text: `
          <h3>Ecosystem Restoration</h3>
          <p><strong>Ecosystem restoration</strong> is the process of helping degraded ecosystems recover.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Restoration Approaches</h4>
              <ul>
                <li>• <strong>Reforestation:</strong> Planting trees</li>
                <li>• <strong>Rewilding:</strong> Reintroducing species</li>
                <li>• <strong>Habitat restoration:</strong> Recreating habitats</li>
                <li>• <strong>Wetland restoration:</strong> Rebuilding wetlands</li>
                <li>• <strong>Coral reef restoration:</strong> Rebuilding reefs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Amazon rainforest:</strong> Reforestation efforts</li>
                <li>• <strong>Coral reefs:</strong> Coral restoration projects</li>
                <li>• <strong>Oyster reefs:</strong> Restoration in coastal areas</li>
                <li>• <strong>Mangroves:</strong> Coastal protection</li>
                <li>• <strong>Yellowstone wolves:</strong> Trophic cascade</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Sustainable Resource Management",
        objective: "obj_007",
        text: `
          <h3>Sustainable Resource Management</h3>
          <p>Sustainable management ensures resources are available for future generations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles</h4>
              <ul>
                <li>• <strong>Carrying capacity:</strong> Don't exceed limits</li>
                <li>• <strong>Ecological footprint:</strong> Reduce impact</li>
                <li>• <strong>Circular economy:</strong> Reduce, reuse, recycle</li>
                <li>• <strong>Green technology:</strong> Clean solutions</li>
                <li>• <strong>Efficiency:</strong> Use less resources</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Forestry:</strong> Sustainable logging</li>
                <li>• <strong>Fisheries:</strong> Quotas and limits</li>
                <li>• <strong>Agriculture:</strong> Sustainable farming</li>
                <li>• <strong>Water:</strong> Efficient use</li>
                <li>• <strong>Energy:</strong> Renewable sources</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Conservation Challenges",
        objective: "obj_010",
        text: `
          <h3>Conservation Challenges</h3>
          <p>Conservation faces many obstacles that must be overcome.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Challenges</h4>
              <ul>
                <li>• <strong>Climate change:</strong> Alters habitats</li>
                <li>• <strong>Habitat loss:</strong> Deforestation, urbanization</li>
                <li>• <strong>Pollution:</strong> Air, water, land</li>
                <li>• <strong>Overexploitation:</strong> Overfishing, hunting</li>
                <li>• <strong>Invasive species:</strong> Disrupt ecosystems</li>
                <li>• <strong>Inadequate funding:</strong> Limited resources</li>
                <li>• <strong>Lack of political will:</strong> Low priority</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Increased funding:</strong> Investment in conservation</li>
                <li>• <strong>Stronger laws:</strong> Environmental legislation</li>
                <li>• <strong>Public education:</strong> Awareness campaigns</li>
                <li>• <strong>International cooperation:</strong> Global efforts</li>
                <li>• <strong>Innovation:</strong> New technologies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Community-Based Conservation",
        objective: "obj_013",
        text: `
          <h3>Community-Based Conservation</h3>
          <p>Local communities play a crucial role in conservation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Community involvement:</strong> Local participation</li>
                <li>• <strong>Indigenous knowledge:</strong> Traditional practices</li>
                <li>• <strong>Benefit-sharing:</strong> Communities benefit</li>
                <li>• <strong>Capacity building:</strong> Skills and resources</li>
                <li>• <strong>Empowerment:</strong> Community control</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Community forests:</strong> Managed by locals</li>
                <li>• <strong>Community reserves:</strong> Protected by communities</li>
                <li>• <strong>Eco-tourism:</strong> Community benefit</li>
                <li>• <strong>Traditional knowledge:</strong> Conservation wisdom</li>
                <li>• <strong>Indigenous territories:</strong> Protected areas</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Conservation Success Stories",
        objective: "obj_015",
        text: `
          <h3>Conservation Success Stories</h3>
          <p>Many species have been saved from extinction through conservation efforts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Success Stories</h4>
              <ul>
                <li>• <strong>Giant Panda:</strong> Conservation saved from extinction</li>
                <li>• <strong>California Condor:</strong> Captive breeding success</li>
                <li>• <strong>Humpback Whale:</strong> Population recovery</li>
                <li>• <strong>Arabian Oryx:</strong> Reintroduced to the wild</li>
                <li>• <strong>Mountain Gorilla:</strong> Population increasing</li>
                <li>• <strong>Bald Eagle:</strong> Recovered from DDT</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 What Worked</h4>
              <ul>
                <li>• <strong>Protected areas:</strong> Safe habitats</li>
                <li>• <strong>Captive breeding:</strong> Population recovery</li>
                <li>• <strong>Law enforcement:</strong> Anti-poaching</li>
                <li>• <strong>International cooperation:</strong> Global efforts</li>
                <li>• <strong>Public support:</strong> Awareness and funding</li>
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
          <h4>🌿 Conservation</h4>
          <ul>
            <li>• Protecting biodiversity and resources</li>
            <li>• Sustainable use of natural resources</li>
            <li>• In-situ and ex-situ conservation</li>
            <li>• Protected areas are essential</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Strategies</h4>
          <ul>
            <li>• Ecosystem restoration</li>
            <li>• Sustainable management</li>
            <li>• Community involvement</li>
            <li>• International cooperation</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Conservation is everyone's responsibility. Small actions can make a big difference in protecting our planet.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Conservation and preservation are the same",
        correction: "Conservation allows sustainable use; preservation protects without use",
        explanation: "Conservation manages resources; preservation protects from human use."
      },
      {
        id: "mis_002",
        misconception: "All renewable resources are unlimited",
        correction: "Renewable resources can be depleted if overused",
        explanation: "Even renewable resources need sustainable management."
      },
      {
        id: "mis_003",
        misconception: "Conservation is just about saving animals",
        correction: "Conservation includes ecosystems, resources, and habitats",
        explanation: "Conservation protects entire ecosystems and natural resources."
      },
      {
        id: "mis_004",
        misconception: "One person can't make a difference",
        correction: "Every individual action contributes to conservation",
        explanation: "Collective small actions have a significant impact."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Protected Area Management",
        description: "Managing national parks and reserves.",
        example: "Park management, wildlife monitoring"
      },
      {
        id: "app_002",
        title: "Sustainable Agriculture",
        description: "Farming in harmony with nature.",
        example: "Organic farming, agroforestry"
      },
      {
        id: "app_003",
        title: "Species Recovery",
        description: "Breeding and reintroducing species.",
        example: "Captive breeding, reintroduction programs"
      },
      {
        id: "app_004",
        title: "Environmental Education",
        description: "Teaching people about conservation.",
        example: "School programs, community outreach"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Conservation", definition: "Protection and sustainable management of natural resources." },
    { term: "Preservation", definition: "Protecting nature from human use." },
    { term: "Biodiversity", definition: "Variety of life on Earth." },
    { term: "In-Situ Conservation", definition: "Protecting species in their natural habitat." },
    { term: "Ex-Situ Conservation", definition: "Protecting species outside their natural habitat." },
    { term: "Protected Area", definition: "Area designated for conservation." },
    { term: "National Park", definition: "Protected area for conservation and recreation." },
    { term: "Wildlife Sanctuary", definition: "Area protected for wildlife." },
    { term: "Sustainable", definition: "Meeting needs without compromising future generations." },
    { term: "Renewable Resource", definition: "Resource that can be replenished." },
    { term: "Non-Renewable Resource", definition: "Resource that cannot be replenished." },
    { term: "Ecosystem Restoration", definition: "Helping degraded ecosystems recover." },
    { term: "Rewilding", definition: "Reintroducing species to restore ecosystems." },
    { term: "Red List", definition: "IUCN list of threatened species." },
    { term: "CITES", definition: "Convention on International Trade in Endangered Species." },
    { term: "IUCN", definition: "International Union for Conservation of Nature." },
    { term: "WWF", definition: "World Wildlife Fund." },
    { term: "Endangered", definition: "At risk of extinction." },
    { term: "Habitat", definition: "The natural environment of an organism." },
    { term: "Ecosystem Services", definition: "Benefits humans get from ecosystems." }
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
      question: "What is conservation?",
      type: "multiple_choice",
      options: [
        "The complete protection of all resources",
        "The protection and sustainable management of natural resources",
        "The destruction of natural habitats",
        "The use of all resources without limit"
      ],
      answer: "The protection and sustainable management of natural resources",
      explanation: "Conservation involves protecting and sustainably managing natural resources."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the difference between conservation and preservation?",
      type: "multiple_choice",
      options: [
        "Conservation allows sustainable use; preservation protects without use",
        "Preservation allows use; conservation protects",
        "They are the same",
        "Conservation is for animals; preservation is for plants"
      ],
      answer: "Conservation allows sustainable use; preservation protects without use",
      explanation: "Conservation manages resources; preservation protects from human use."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a renewable resource?",
      type: "multiple_choice",
      options: ["Coal", "Oil", "Solar energy", "Natural gas"],
      answer: "Solar energy",
      explanation: "Solar energy is a renewable resource."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a principle of conservation?",
      type: "multiple_choice",
      options: [
        "Using all resources immediately",
        "Sustainability",
        "Ignoring future generations",
        "Maximum extraction"
      ],
      answer: "Sustainability",
      explanation: "Sustainability is a key principle of conservation."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is in-situ conservation?",
      type: "multiple_choice",
      options: [
        "Protecting species in their natural habitat",
        "Protecting species in zoos",
        "Protecting species in seed banks",
        "Protecting species in botanical gardens"
      ],
      answer: "Protecting species in their natural habitat",
      explanation: "In-situ conservation protects species in their natural habitat."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a national park?",
      type: "multiple_choice",
      options: [
        "A zoo",
        "A protected area for conservation and recreation",
        "A botanical garden",
        "A private hunting ground"
      ],
      answer: "A protected area for conservation and recreation",
      explanation: "National parks are protected areas for conservation and recreation."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is sustainable resource management?",
      type: "multiple_choice",
      options: [
        "Using all resources immediately",
        "Using resources without regard for the future",
        "Using resources to meet current needs without compromising the future",
        "Ignoring resource use"
      ],
      answer: "Using resources to meet current needs without compromising the future",
      explanation: "Sustainable management balances current and future needs."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does CITES do?",
      type: "multiple_choice",
      options: [
        "Protects forests",
        "Regulates international trade in endangered species",
        "Protects oceans",
        "Studies climate change"
      ],
      answer: "Regulates international trade in endangered species",
      explanation: "CITES regulates trade in endangered species."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is ecosystem restoration?",
      type: "multiple_choice",
      options: [
        "Destroying ecosystems",
        "Helping degraded ecosystems recover",
        "Creating new ecosystems",
        "Removing all species"
      ],
      answer: "Helping degraded ecosystems recover",
      explanation: "Ecosystem restoration helps degraded ecosystems recover."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a challenge to conservation?",
      type: "multiple_choice",
      options: [
        "Climate change",
        "Abundant funding",
        "Strong political will",
        "Public awareness"
      ],
      answer: "Climate change",
      explanation: "Climate change is a major challenge to conservation."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "How do humans threaten biodiversity?",
      type: "multiple_choice",
      options: [
        "Habitat destruction",
        "Sustainable practices",
        "Conservation efforts",
        "Protection of ecosystems"
      ],
      answer: "Habitat destruction",
      explanation: "Habitat destruction is a major threat to biodiversity."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is genetic diversity important?",
      type: "multiple_choice",
      options: [
        "It helps species adapt to change",
        "It has no importance",
        "It makes species weaker",
        "It only benefits humans"
      ],
      answer: "It helps species adapt to change",
      explanation: "Genetic diversity helps species adapt to environmental changes."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is community-based conservation?",
      type: "multiple_choice",
      options: [
        "Conservation without community involvement",
        "Conservation involving local communities",
        "Conservation only by governments",
        "Conservation only by scientists"
      ],
      answer: "Conservation involving local communities",
      explanation: "Community-based conservation involves local communities."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is biodiversity economically valuable?",
      type: "multiple_choice",
      options: [
        "It has no economic value",
        "It provides ecosystem services",
        "It is only valuable for tourism",
        "It is only valuable for medicine"
      ],
      answer: "It provides ecosystem services",
      explanation: "Biodiversity provides valuable ecosystem services."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Which species is a conservation success story?",
      type: "multiple_choice",
      options: [
        "Giant Panda",
        "Dodo",
        "Tasmanian Tiger",
        "Passenger Pigeon"
      ],
      answer: "Giant Panda",
      explanation: "Giant Panda populations have recovered through conservation."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_conservation",
    title: "Conservation Quiz",
    description: "Test your understanding of conservation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is conservation?",
        type: "short_answer",
        answer_key: "The protection and sustainable management of natural resources",
        explanation: "Conservation involves protecting and sustainably managing natural resources."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between conservation and preservation?",
        type: "short_answer",
        answer_key: "Conservation allows sustainable use; preservation protects without use",
        explanation: "Conservation manages resources; preservation protects from human use."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name a renewable resource.",
        type: "short_answer",
        answer_key: "Solar energy (or any valid)",
        explanation: "Solar energy is a renewable resource."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a key principle of conservation?",
        type: "short_answer",
        answer_key: "Sustainability",
        explanation: "Sustainability is a key principle of conservation."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is in-situ conservation?",
        type: "short_answer",
        answer_key: "Protecting species in their natural habitat",
        explanation: "In-situ conservation protects species in their natural habitat."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a national park?",
        type: "short_answer",
        answer_key: "A protected area for conservation and recreation",
        explanation: "National parks are protected areas for conservation and recreation."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is sustainable resource management?",
        type: "short_answer",
        answer_key: "Using resources to meet current needs without compromising the future",
        explanation: "Sustainable management balances current and future needs."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does CITES do?",
        type: "short_answer",
        answer_key: "Regulates international trade in endangered species",
        explanation: "CITES regulates trade in endangered species."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is ecosystem restoration?",
        type: "short_answer",
        answer_key: "Helping degraded ecosystems recover",
        explanation: "Ecosystem restoration helps degraded ecosystems recover."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "Name one conservation success story.",
        type: "short_answer",
        answer_key: "Giant Panda (or any valid)",
        explanation: "The Giant Panda is a conservation success story."
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
        "Understand conservation and its importance",
        "Distinguish between conservation and preservation",
        "Explain biodiversity conservation strategies",
        "Understand the role of protected areas"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is conservation?" },
        { time: "5-10 min", activity: "Direct Instruction - Conservation vs Preservation" },
        { time: "10-15 min", activity: "Direct Instruction - Natural Resources" },
        { time: "15-20 min", activity: "Direct Instruction - Biodiversity Conservation" },
        { time: "20-25 min", activity: "Direct Instruction - Protected Areas" },
        { time: "25-30 min", activity: "Direct Instruction - Ecosystem Restoration" },
        { time: "30-35 min", activity: "Direct Instruction - Conservation Success Stories" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The protection and sustainable management of natural resources",
        prac_002: "Conservation allows sustainable use; preservation protects without use",
        prac_003: "Solar energy",
        prac_004: "Sustainability",
        prac_005: "Protecting species in their natural habitat",
        prac_006: "A protected area for conservation and recreation",
        prac_007: "Using resources to meet current needs without compromising the future",
        prac_008: "Regulates international trade in endangered species",
        prac_009: "Helping degraded ecosystems recover",
        prac_010: "Climate change",
        prac_011: "Habitat destruction",
        prac_012: "It helps species adapt to change",
        prac_013: "Conservation involving local communities",
        prac_014: "It provides ecosystem services",
        prac_015: "Giant Panda"
      },
      assessment: {
        ass_001: "The protection and sustainable management of natural resources",
        ass_002: "Conservation allows sustainable use; preservation protects without use",
        ass_003: "Solar energy (or any valid)",
        ass_004: "Sustainability",
        ass_005: "Protecting species in their natural habitat",
        ass_006: "A protected area for conservation and recreation",
        ass_007: "Using resources to meet current needs without compromising the future",
        ass_008: "Regulates international trade in endangered species",
        ass_009: "Helping degraded ecosystems recover",
        ass_010: "Giant Panda (or any valid)"
      }
    },
    extensionActivities: [
      "Research a local conservation project",
      "Study IUCN Red List species",
      "Investigate protected areas",
      "Research community-based conservation"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research conservation biology",
        "Study conservation policy",
        "Research restoration ecology",
        "Study ecosystem services"
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
      title: "In-Situ vs Ex-Situ Conservation",
      description: "Diagram comparing in-situ and ex-situ conservation",
      url: "/diagrams/in-situ-ex-situ.png",
      alt: "In-situ vs ex-situ conservation diagram"
    },
    {
      id: "vis_002",
      type: "map",
      title: "Protected Areas",
      description: "Map showing protected areas",
      url: "/diagrams/protected-areas.png",
      alt: "Protected areas map"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Conservation Strategies",
      description: "Chart of conservation strategies",
      url: "/diagrams/conservation-strategies.png",
      alt: "Conservation strategies chart"
    }
  ]
};