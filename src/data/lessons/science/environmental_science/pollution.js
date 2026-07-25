// Location: src/data/lessons/science/environmental_science/pollution.js

export default {
  id: "env_lesson_pollution",
  subject: "Environmental Science",
  topic: "Pollution",
  name: "Pollution",
  icon: "☠️",
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
    "Understanding of the environment",
    "Knowledge of ecosystems",
    "Basic understanding of chemistry",
    "Awareness of environmental issues"
  ],

  nextLessons: [
    {
      name: "Conservation",
      file: "science/environmental_science/conservation.js"
    },
    {
      name: "Climate",
      file: "science/environmental_science/climate.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define pollution and identify its types",
      indicator: "Student can explain what pollution is and list its types"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the sources of pollution",
      indicator: "Student can identify natural and human-made sources of pollution"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of air pollution",
      indicator: "Student can define air pollution and give examples"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain the concept of water pollution",
      indicator: "Student can define water pollution and give examples"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the causes and effects of air pollution",
      indicator: "Student can describe the major causes and effects of air pollution"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the causes and effects of water pollution",
      indicator: "Student can describe the major causes and effects of water pollution"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of land pollution",
      indicator: "Student can define land pollution and its causes"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of noise pollution",
      indicator: "Student can define noise pollution and its effects"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of light pollution",
      indicator: "Student can define light pollution and its effects"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the concept of thermal pollution",
      indicator: "Student can define thermal pollution and its effects"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the concept of radioactive pollution",
      indicator: "Student can define radioactive pollution and its effects"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the impact of pollution on human health",
      indicator: "Student can explain how pollution affects human health"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the impact of pollution on ecosystems",
      indicator: "Student can explain how pollution affects ecosystems"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of pollution control",
      indicator: "Student can describe methods of controlling pollution"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the concept of waste management",
      indicator: "Student can describe waste management strategies"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of environmental pollution laws",
      indicator: "Student can describe environmental laws and regulations"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the concept of acid rain",
      indicator: "Student can explain the causes and effects of acid rain"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the concept of smog",
      indicator: "Student can explain the causes and effects of smog"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Analyze the role of individuals in reducing pollution",
      indicator: "Student can describe what individuals can do to reduce pollution"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Develop strategies for pollution prevention",
      indicator: "Student can propose solutions to pollution problems"
    }
  ],

  video: {
    id: "vid_001",
    title: "Pollution - Types, Causes, and Effects",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about different types of pollution and their impact on the environment."
  },

  content: {
    introduction: `
      <h2>What is Pollution?</h2>
      <p><strong>Pollution</strong> is the introduction of harmful substances or energy into the environment, causing adverse effects on living organisms and the environment. It is one of the biggest challenges facing humanity today.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🌫️ Air Pollution</h3>
          <ul>
            <li>• Gases, particulates</li>
            <li>• From vehicles, factories</li>
            <li>• Causes respiratory issues</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">💧 Water Pollution</h3>
          <ul>
            <li>• Chemicals, waste</li>
            <li>• From industry, agriculture</li>
            <li>• Affects aquatic life</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🌍 Land Pollution</h3>
          <ul>
            <li>• Solid waste, chemicals</li>
            <li>• From disposal, mining</li>
            <li>• Affects soil and health</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="400" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Types of Pollution</text>
          
          <!-- Air pollution -->
          <g transform="translate(100, 100)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#3498db">Air</text>
            <circle cx="0" cy="40" r="35" fill="#bbdefb" stroke="#3498db" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#1565c0">Factories</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#1565c0">Vehicles</text>
          </g>
          
          <!-- Water pollution -->
          <g transform="translate(300, 100)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#2ecc71">Water</text>
            <circle cx="0" cy="40" r="35" fill="#c8e6c9" stroke="#2ecc71" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#1a5276">Waste</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#1a5276">Chemicals</text>
          </g>
          
          <!-- Land pollution -->
          <g transform="translate(500, 100)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#e67e22">Land</text>
            <circle cx="0" cy="40" r="35" fill="#fdebd0" stroke="#e67e22" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#7b2d26">Garbage</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#7b2d26">Mining</text>
          </g>
          
          <!-- Noise pollution -->
          <g transform="translate(100, 240)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#9b59b6">Noise</text>
            <circle cx="0" cy="40" r="35" fill="#e8daef" stroke="#9b59b6" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#4a235a">Traffic</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#4a235a">Construction</text>
          </g>
          
          <!-- Light pollution -->
          <g transform="translate(300, 240)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#f39c12">Light</text>
            <circle cx="0" cy="40" r="35" fill="#fcf3cf" stroke="#f39c12" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#7d6608">Urban glow</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#7d6608">Billboards</text>
          </g>
          
          <!-- Thermal pollution -->
          <g transform="translate(500, 240)">
            <text x="0" y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#e74c3c">Thermal</text>
            <circle cx="0" cy="40" r="35" fill="#fadbd8" stroke="#e74c3c" stroke-width="2"/>
            <text x="0" y="45" text-anchor="middle" font-size="9" fill="#78281f">Power plants</text>
            <text x="0" y="58" text-anchor="middle" font-size="9" fill="#78281f">Industry</text>
          </g>
          
          <text x="300" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Pollution affects air, water, land, and living organisms in many ways</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Air Pollution",
        objective: "obj_003",
        text: `
          <h3>Air Pollution</h3>
          <p><strong>Air pollution</strong> is the presence of harmful substances in the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes of Air Pollution</h4>
              <ul>
                <li><strong>Natural Sources:</strong></li>
                <li>• Volcanic eruptions</li>
                <li>• Forest fires</li>
                <li>• Dust storms</li>
                <li><strong>Human Sources:</strong></li>
                <li>• Vehicle emissions</li>
                <li>• Industrial emissions</li>
                <li>• Burning of fossil fuels</li>
                <li>• Agricultural activities</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Effects of Air Pollution</h4>
              <ul>
                <li>• <strong>Human Health:</strong></li>
                <li>• Respiratory problems</li>
                <li>• Cardiovascular diseases</li>
                <li>• Cancer</li>
                <li>• <strong>Environment:</strong></li>
                <li>• Acid rain</li>
                <li>• Global warming</li>
                <li>• Ozone depletion</li>
                <li>• Damage to buildings</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Major Air Pollutants:</strong>
            <ul>
              <li>• <strong>Carbon monoxide (CO):</strong> Vehicle emissions</li>
              <li>• <strong>Sulfur dioxide (SO₂):</strong> Burning coal</li>
              <li>• <strong>Nitrogen oxides (NOₓ):</strong> Vehicle emissions</li>
              <li>• <strong>Particulates (PM):</strong> Dust, smoke</li>
              <li>• <strong>Ozone (O₃):</strong> Photochemical smog</li>
              <li>• <strong>Lead (Pb):</strong> From gasoline</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Water Pollution",
        objective: "obj_004",
        text: `
          <h3>Water Pollution</h3>
          <p><strong>Water pollution</strong> is the contamination of water bodies by harmful substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes of Water Pollution</h4>
              <ul>
                <li><strong>Industrial:</strong></li>
                <li>• Chemical waste</li>
                <li>• Heavy metals</li>
                <li>• Thermal pollution</li>
                <li><strong>Agricultural:</strong></li>
                <li>• Pesticides</li>
                <li>• Fertilizers</li>
                <li>• Animal waste</li>
                <li><strong>Domestic:</strong></li>
                <li>• Sewage</li>
                <li>• Detergents</li>
                <li>• Plastic waste</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Effects of Water Pollution</h4>
              <ul>
                <li>• <strong>Human Health:</strong></li>
                <li>• Waterborne diseases</li>
                <li>• Chemical poisoning</li>
                <li>• Cancer</li>
                <li>• <strong>Environment:</strong></li>
                <li>• Eutrophication</li>
                <li>• Death of aquatic life</li>
                <li>• Destruction of ecosystems</li>
                <li>• Bioaccumulation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Land Pollution",
        objective: "obj_007",
        text: `
          <h3>Land Pollution</h3>
          <p><strong>Land pollution</strong> is the degradation of the Earth's surface by human activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Causes of Land Pollution</h4>
              <ul>
                <li><strong>Solid Waste:</strong></li>
                <li>• Garbage and refuse</li>
                <li>• Plastic waste</li>
                <li>• Construction debris</li>
                <li><strong>Chemical:</strong></li>
                <li>• Industrial waste</li>
                <li>• Pesticides</li>
                <li>• Mining waste</li>
                <li><strong>Other:</strong></li>
                <li>• Deforestation</li>
                <li>• Soil erosion</li>
                <li>• Urbanization</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Effects of Land Pollution</h4>
              <ul>
                <li>• <strong>Human Health:</strong></li>
                <li>• Diseases</li>
                <li>• Contaminated food</li>
                <li>• Toxic exposure</li>
                <li>• <strong>Environment:</strong></li>
                <li>• Loss of fertility</li>
                <li>• Desertification</li>
                <li>• Habitat destruction</li>
                <li>• Groundwater contamination</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Noise Pollution",
        objective: "obj_008",
        text: `
          <h3>Noise Pollution</h3>
          <p><strong>Noise pollution</strong> is excessive or harmful levels of noise in the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Causes of Noise Pollution</h4>
              <ul>
                <li>• <strong>Transportation:</strong></li>
                <li>• Vehicles, aircraft, trains</li>
                <li>• <strong>Industry:</strong></li>
                <li>• Factories, construction</li>
                <li>• <strong>Urban:</strong></li>
                <li>• Traffic, crowds</li>
                <li>• Loud music</li>
                <li>• Public events</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Effects of Noise Pollution</h4>
              <ul>
                <li>• <strong>Human Health:</strong></li>
                <li>• Hearing loss</li>
                <li>• Stress and anxiety</li>
                <li>• Sleep disturbance</li>
                <li>• Cardiovascular issues</li>
                <li>• <strong>Environment:</strong></li>
                <li>• Disruption to wildlife</li>
                <li>• Communication problems</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Other Types of Pollution",
        objective: "obj_009",
        text: `
          <h3>Other Types of Pollution</h3>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>💡 Light Pollution</h4>
              <ul>
                <li>• Excessive artificial light</li>
                <li>• Causes:</li>
                <li>• Streetlights, billboards</li>
                <li>• Urban areas</li>
                <li>• Effects:</li>
                <li>• Disrupts ecosystems</li>
                <li>• Affects sleep patterns</li>
                <li>• Wastes energy</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>🔥 Thermal Pollution</h4>
              <ul>
                <li>• Release of hot water</li>
                <li>• Causes:</li>
                <li>• Power plants</li>
                <li>• Industrial processes</li>
                <li>• Effects:</li>
                <li>• Lowers oxygen levels</li>
                <li>• Kills aquatic life</li>
                <li>• Disrupts ecosystems</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>☢️ Radioactive Pollution</h4>
              <ul>
                <li>• Release of radiation</li>
                <li>• Causes:</li>
                <li>• Nuclear plants</li>
                <li>• Medical waste</li>
                <li>• Weapons testing</li>
                <li>• Effects:</li>
                <li>• Cancer</li>
                <li>• Genetic mutations</li>
                <li>• Long-term contamination</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Pollution Control",
        objective: "obj_014",
        text: `
          <h3>Pollution Control Methods</h3>
          <p>Various methods are used to control and reduce pollution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Air Pollution Control</h4>
              <ul>
                <li>• <strong>Filters and scrubbers:</strong> In factories</li>
                <li>• <strong>Catalytic converters:</strong> In vehicles</li>
                <li>• <strong>Renewable energy:</strong> Reduce fossil fuels</li>
                <li>• <strong>Afforestation:</strong> Planting trees</li>
                <li>• <strong>Emission standards:</strong> Regulations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Water Pollution Control</h4>
              <ul>
                <li>• <strong>Wastewater treatment:</strong> Treat sewage</li>
                <li>• <strong>Industrial treatment:</strong> Treat waste</li>
                <li>• <strong>Agricultural management:</strong> Reduce runoff</li>
                <li>• <strong>Water conservation:</strong> Reduce use</li>
                <li>• <strong>Laws and regulations:</strong> Enforce standards</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Land Pollution Control</h4>
              <ul>
                <li>• <strong>Recycling:</strong> Reduce waste</li>
                <li>• <strong>Composting:</strong> Organic waste</li>
                <li>• <strong>Safe disposal:</strong> Landfills</li>
                <li>• <strong>Remediation:</strong> Clean up sites</li>
                <li>• <strong>Waste reduction:</strong> Minimize waste</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Personal Actions</h4>
              <ul>
                <li>• <strong>Reduce, Reuse, Recycle</strong></li>
                <li>• <strong>Use public transport</strong></li>
                <li>• <strong>Conserve energy</strong></li>
                <li>• <strong>Plant trees</strong></li>
                <li>• <strong>Proper waste disposal</strong></li>
                <li>• <strong>Choose eco-friendly products</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Waste Management",
        objective: "obj_015",
        text: `
          <h3>Waste Management</h3>
          <p><strong>Waste management</strong> is the collection, transport, processing, and disposal of waste materials.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Waste Hierarchy</h4>
              <ul>
                <li>1. <strong>Prevention:</strong> Avoid waste</li>
                <li>2. <strong>Minimization:</strong> Reduce waste</li>
                <li>3. <strong>Reuse:</strong> Use again</li>
                <li>4. <strong>Recycling:</strong> Process waste</li>
                <li>5. <strong>Recovery:</strong> Energy from waste</li>
                <li>6. <strong>Disposal:</strong> Landfill</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Waste Disposal Methods</h4>
              <ul>
                <li><strong>Landfilling:</strong></li>
                <li>• Most common</li>
                <li>• Leachate problems</li>
                <li><strong>Incineration:</strong></li>
                <li>• Burning waste</li>
                <li>• Air pollution</li>
                <li><strong>Composting:</strong></li>
                <li>• Organic waste</li>
                <li>• Produces fertilizer</li>
                <li><strong>Recycling:</strong></li>
                <li>• Best option</li>
                <li>• Saves resources</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Environmental Laws and Regulations",
        objective: "obj_016",
        text: `
          <h3>Environmental Laws</h3>
          <p>Laws and regulations are essential for controlling pollution and protecting the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 International Agreements</h4>
              <ul>
                <li><strong>Kyoto Protocol:</strong></li>
                <li>• Climate change</li>
                <li>• Emission reductions</li>
                <li><strong>Paris Agreement:</strong></li>
                <li>• Global warming</li>
                <li>• Climate action</li>
                <li><strong>Montreal Protocol:</strong></li>
                <li>• Ozone depletion</li>
                <li>• Banned CFCs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nigerian Environmental Laws</h4>
              <ul>
                <li><strong>NESREA Act:</strong></li>
                <li>• National Environmental Standards</li>
                <li>• Regulations and enforcement</li>
                <li><strong>Environmental Impact Assessment:</strong></li>
                <li>• Required for projects</li>
                <li>• Assess environmental effects</li>
                <li><strong>Oil Spill Regulations:</strong></li>
                <li>• Oil spill prevention</li>
                <li>• Cleanup requirements</li>
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
          <h4>☠️ Pollution Types</h4>
          <ul>
            <li>• Air pollution: Gases, particulates</li>
            <li>• Water pollution: Chemicals, waste</li>
            <li>• Land pollution: Solid waste, chemicals</li>
            <li>• Noise, light, thermal, radioactive</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🛡️ Solutions</h4>
          <ul>
            <li>• Pollution control technologies</li>
            <li>• Waste management hierarchy</li>
            <li>• Environmental laws and regulations</li>
            <li>• Individual actions matter</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Pollution is a global problem that requires collective action. Everyone has a role in reducing pollution.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Pollution is only caused by large industries",
        correction: "Individuals also contribute to pollution",
        explanation: "Every person contributes to pollution through daily activities."
      },
      {
        id: "mis_002",
        misconception: "Air pollution only affects the local area",
        correction: "Air pollution can travel long distances",
        explanation: "Pollutants can travel across countries and continents."
      },
      {
        id: "mis_003",
        misconception: "Water pollution only affects aquatic life",
        correction: "Water pollution affects human health and ecosystems",
        explanation: "Contaminated water affects all life, including humans."
      },
      {
        id: "mis_004",
        misconception: "Plastic pollution is not a serious problem",
        correction: "Plastic pollution is a major environmental crisis",
        explanation: "Plastic takes hundreds of years to decompose and harms wildlife."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Public Health",
        description: "Pollution control protects human health.",
        example: "Clean air and water reduce disease."
      },
      {
        id: "app_002",
        title: "Ecosystem Protection",
        description: "Reducing pollution protects ecosystems.",
        example: "Clean water supports aquatic life."
      },
      {
        id: "app_003",
        title: "Environmental Policy",
        description: "Pollution control informs environmental policy.",
        example: "Regulations on emissions and waste."
      },
      {
        id: "app_004",
        title: "Sustainable Development",
        description: "Pollution control is essential for sustainability.",
        example: "Clean technology and green practices."
      }
    ]
  },

  keyTerms: [
    { term: "Pollution", definition: "The introduction of harmful substances into the environment." },
    { term: "Air Pollution", definition: "Contamination of the atmosphere by harmful substances." },
    { term: "Water Pollution", definition: "Contamination of water bodies by harmful substances." },
    { term: "Land Pollution", definition: "Degradation of the Earth's surface by human activities." },
    { term: "Noise Pollution", definition: "Excessive or harmful levels of noise." },
    { term: "Light Pollution", definition: "Excessive artificial light in the environment." },
    { term: "Thermal Pollution", definition: "Release of hot water into the environment." },
    { term: "Radioactive Pollution", definition: "Release of radiation into the environment." },
    { term: "Smog", definition: "Air pollution caused by photochemical reactions." },
    { term: "Acid Rain", definition: "Rain with a pH below 5.6 caused by SO₂ and NOₓ." },
    { term: "Eutrophication", definition: "Nutrient enrichment leading to oxygen depletion." },
    { term: "Bioaccumulation", definition: "Accumulation of toxins in organisms." },
    { term: "Waste Management", definition: "Collection, treatment, and disposal of waste." },
    { term: "Recycling", definition: "Processing waste into new materials." },
    { term: "Composting", definition: "Decomposition of organic waste into fertilizer." },
    { term: "Landfill", definition: "A site for waste disposal." },
    { term: "Incineration", definition: "Burning waste materials." },
    { term: "Emissions", definition: "Substances released into the atmosphere." },
    { term: "Pollutant", definition: "A substance that causes pollution." },
    { term: "Sustainability", definition: "Meeting present needs without compromising the future." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is pollution?",
      type: "multiple_choice",
      options: [
        "The introduction of harmful substances into the environment",
        "The removal of harmful substances from the environment",
        "The study of the environment",
        "The protection of the environment"
      ],
      answer: "The introduction of harmful substances into the environment",
      explanation: "Pollution is the introduction of harmful substances into the environment."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is air pollution?",
      type: "multiple_choice",
      options: [
        "Contamination of water",
        "Contamination of the atmosphere",
        "Contamination of soil",
        "Contamination of food"
      ],
      answer: "Contamination of the atmosphere",
      explanation: "Air pollution is the contamination of the atmosphere by harmful substances."
    },
    {
      id: "prac_003",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is water pollution?",
      type: "multiple_choice",
      options: [
        "Contamination of the atmosphere",
        "Contamination of water bodies",
        "Contamination of soil",
        "Contamination of food"
      ],
      answer: "Contamination of water bodies",
      explanation: "Water pollution is the contamination of water bodies by harmful substances."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is a major cause of air pollution?",
      type: "multiple_choice",
      options: [
        "Burning fossil fuels",
        "Recycling",
        "Planting trees",
        "Water treatment"
      ],
      answer: "Burning fossil fuels",
      explanation: "Burning fossil fuels is a major cause of air pollution."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is a major cause of water pollution?",
      type: "multiple_choice",
      options: [
        "Industrial waste",
        "Air pollution",
        "Noise pollution",
        "Light pollution"
      ],
      answer: "Industrial waste",
      explanation: "Industrial waste is a major cause of water pollution."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is land pollution?",
      type: "multiple_choice",
      options: [
        "Contamination of the atmosphere",
        "Degradation of the Earth's surface",
        "Contamination of water",
        "Excessive noise"
      ],
      answer: "Degradation of the Earth's surface",
      explanation: "Land pollution is the degradation of the Earth's surface by human activities."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is noise pollution?",
      type: "multiple_choice",
      options: [
        "Excessive light",
        "Excessive noise",
        "Excessive heat",
        "Excessive radiation"
      ],
      answer: "Excessive noise",
      explanation: "Noise pollution is excessive or harmful levels of noise."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is light pollution?",
      type: "multiple_choice",
      options: [
        "Excessive artificial light",
        "Excessive natural light",
        "Lack of light",
        "Light from the sun"
      ],
      answer: "Excessive artificial light",
      explanation: "Light pollution is excessive artificial light in the environment."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What causes thermal pollution?",
      type: "multiple_choice",
      options: [
        "Power plants releasing hot water",
        "Factories releasing chemicals",
        "Vehicles emitting gases",
        "Mining activities"
      ],
      answer: "Power plants releasing hot water",
      explanation: "Thermal pollution is caused by the release of hot water from power plants."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is radioactive pollution?",
      type: "multiple_choice",
      options: [
        "Release of radiation into the environment",
        "Release of chemicals into the environment",
        "Release of heat into the environment",
        "Release of noise into the environment"
      ],
      answer: "Release of radiation into the environment",
      explanation: "Radioactive pollution is the release of radiation into the environment."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does air pollution affect human health?",
      type: "multiple_choice",
      options: [
        "Respiratory problems",
        "Digestive problems",
        "Skin problems",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Air pollution can cause respiratory, digestive, and skin problems."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the best way to control pollution?",
      type: "multiple_choice",
      options: [
        "Prevention at the source",
        "Only cleaning up after pollution",
        "Ignoring the problem",
        "Burning waste"
      ],
      answer: "Prevention at the source",
      explanation: "The best way to control pollution is to prevent it at the source."
    }
  ],

  assessment: {
    id: "assess_pollution",
    title: "Pollution Quiz",
    description: "Test your understanding of pollution",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is pollution?",
        type: "short_answer",
        answer_key: "The introduction of harmful substances into the environment",
        explanation: "Pollution is the introduction of harmful substances into the environment."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "Name four types of pollution.",
        type: "short_answer",
        answer_key: "Air, water, land, and noise pollution",
        explanation: "The main types of pollution are air, water, land, and noise."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is air pollution?",
        type: "short_answer",
        answer_key: "Contamination of the atmosphere",
        explanation: "Air pollution is the contamination of the atmosphere by harmful substances."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "easy",
        question: "What is water pollution?",
        type: "short_answer",
        answer_key: "Contamination of water bodies",
        explanation: "Water pollution is the contamination of water bodies by harmful substances."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What are two major causes of air pollution?",
        type: "short_answer",
        answer_key: "Vehicle emissions and industrial emissions",
        explanation: "Vehicles and industries are major sources of air pollution."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What are two major causes of water pollution?",
        type: "short_answer",
        answer_key: "Industrial waste and agricultural runoff",
        explanation: "Industry and agriculture are major sources of water pollution."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is land pollution?",
        type: "short_answer",
        answer_key: "Degradation of the Earth's surface",
        explanation: "Land pollution is the degradation of the Earth's surface by human activities."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is noise pollution?",
        type: "short_answer",
        answer_key: "Excessive or harmful levels of noise",
        explanation: "Noise pollution is excessive or harmful levels of noise."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What causes thermal pollution?",
        type: "short_answer",
        answer_key: "Release of hot water from power plants",
        explanation: "Thermal pollution is caused by the release of hot water from power plants."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is radioactive pollution?",
        type: "short_answer",
        answer_key: "Release of radiation into the environment",
        explanation: "Radioactive pollution is the release of radiation into the environment."
      },
      {
        id: "ass_011",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is the best way to control pollution?",
        type: "short_answer",
        answer_key: "Prevention at the source",
        explanation: "Preventing pollution at the source is the most effective approach."
      },
      {
        id: "ass_012",
        objective: "obj_019",
        difficulty: "hard",
        question: "What can individuals do to reduce pollution?",
        type: "short_answer",
        answer_key: "Reduce, reuse, recycle, use public transport, conserve energy",
        explanation: "Individuals can reduce pollution through sustainable practices."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand pollution and its types",
        "Explain the causes and effects of pollution",
        "Describe pollution control methods",
        "Understand waste management"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is pollution?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Pollution" },
        { time: "10-15 min", activity: "Direct Instruction - Air and Water Pollution" },
        { time: "15-20 min", activity: "Direct Instruction - Land and Noise Pollution" },
        { time: "20-25 min", activity: "Direct Instruction - Other Types of Pollution" },
        { time: "25-30 min", activity: "Direct Instruction - Pollution Control" },
        { time: "30-35 min", activity: "Direct Instruction - Waste Management" },
        { time: "35-40 min", activity: "Direct Instruction - Environmental Laws" },
        { time: "40-50 min", activity: "Guided Practice" },
        { time: "50-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The introduction of harmful substances into the environment",
        prac_002: "Contamination of the atmosphere",
        prac_003: "Contamination of water bodies",
        prac_004: "Burning fossil fuels",
        prac_005: "Industrial waste",
        prac_006: "Degradation of the Earth's surface",
        prac_007: "Excessive noise",
        prac_008: "Excessive artificial light",
        prac_009: "Power plants releasing hot water",
        prac_010: "Release of radiation into the environment",
        prac_011: "All of the above",
        prac_012: "Prevention at the source"
      },
      assessment: {
        ass_001: "The introduction of harmful substances into the environment",
        ass_002: "Air, water, land, and noise pollution",
        ass_003: "Contamination of the atmosphere",
        ass_004: "Contamination of water bodies",
        ass_005: "Vehicle emissions and industrial emissions",
        ass_006: "Industrial waste and agricultural runoff",
        ass_007: "Degradation of the Earth's surface",
        ass_008: "Excessive or harmful levels of noise",
        ass_009: "Release of hot water from power plants",
        ass_010: "Release of radiation into the environment",
        ass_011: "Prevention at the source",
        ass_012: "Reduce, reuse, recycle, use public transport, conserve energy"
      }
    },
    extensionActivities: [
      "Research local pollution issues",
      "Conduct a waste audit at home or school",
      "Investigate pollution control technologies",
      "Create a pollution awareness campaign"
    ],
    differentiation: {
      struggling: [
        "Focus on basic types of pollution",
        "Use visual aids",
        "Practice with simple examples",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research specific pollution problems",
        "Study pollution control technologies",
        "Investigate environmental policy",
        "Explore international agreements"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Types of Pollution",
      description: "Diagram showing types of pollution",
      url: "/diagrams/types-of-pollution.png",
      alt: "Types of pollution diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Air Pollutants",
      description: "Chart of major air pollutants",
      url: "/diagrams/air-pollutants.png",
      alt: "Air pollutants chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Pollution Control",
      description: "Infographic on pollution control methods",
      url: "/diagrams/pollution-control.png",
      alt: "Pollution control infographic"
    }
  ]
};