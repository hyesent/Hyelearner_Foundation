// Location: src/data/lessons/science/chemistry/environmental_chemistry/pollution.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "chem_lesson_pollution",
  subject: "Chemistry",
  topic: "Pollution",
  name: "Pollution",
  icon: "🏭",
  grade_level: "SS2 - SS3",
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
    "Understanding of chemical reactions",
    "Knowledge of the atmosphere",
    "Understanding of the periodic table",
    "Basic knowledge of environmental science"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Climate Change",
      file: "science/chemistry/environmental_chemistry/climate_change.js"
    },
    {
      name: "Green Chemistry",
      file: "science/chemistry/environmental_chemistry/green_chemistry.js"
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
      description: "Define pollution and explain its types",
      indicator: "Student can explain what pollution is and its main types"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main air pollutants",
      indicator: "Student can list the major air pollutants"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the sources of pollution",
      indicator: "Student can identify pollution sources"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the chemistry of acid rain",
      indicator: "Student can describe how acid rain is formed"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the formation of photochemical smog",
      indicator: "Student can describe how smog forms"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the greenhouse effect",
      indicator: "Student can describe the greenhouse effect"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the depletion of the ozone layer",
      indicator: "Student can describe ozone depletion and its causes"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe water pollution and its sources",
      indicator: "Student can explain the causes of water pollution"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe soil pollution and its sources",
      indicator: "Student can explain the causes of soil pollution"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the chemical reactions involved in air pollution",
      indicator: "Student can describe the reactions forming pollutants"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the effects of pollution on health",
      indicator: "Student can describe the health effects of pollutants"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the effects of pollution on the environment",
      indicator: "Student can describe environmental impacts"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe methods of pollution control",
      indicator: "Student can explain how pollution is controlled"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the importance of monitoring pollution",
      indicator: "Student can describe monitoring methods"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of chemistry in solving pollution problems",
      indicator: "Student can discuss chemistry's role in pollution control"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Evaluate environmental policies and regulations",
      indicator: "Student can discuss environmental regulations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Pollution - Chemistry in the Environment",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about pollution, its causes, effects, and how chemistry helps solve environmental problems."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Pollution</h2>
      <p><strong>Pollution</strong> is the introduction of harmful substances or energy into the environment. It can be natural or human-caused, but human activities are the main source of modern pollution. Chemistry plays a crucial role in understanding, monitoring, and solving pollution problems.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏭 Key Concepts</h3>
          <ul>
            <li>✓ Air Pollution</li>
            <li>✓ Water Pollution</li>
            <li>✓ Soil Pollution</li>
            <li>✓ Greenhouse Effect</li>
            <li>✓ Acid Rain</li>
            <li>✓ Ozone Depletion</li>
            <li>✓ Pollution Control</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• 91% of people breathe polluted air</li>
            <li>• 7 million deaths annually from air pollution</li>
            <li>• 80% of wastewater is untreated</li>
            <li>• 1 million seabirds die from plastic annually</li>
            <li>• Pollution costs $4.6 trillion per year</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Pollution Matters</h4>
        <p>Pollution threatens human health, ecosystems, and the climate. Understanding its chemistry helps us find effective solutions.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Pollution",
        objective: "obj_001",
        text: `
          <h3>Types of Pollution</h3>
          <p>Pollution can be classified by the medium affected.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Air Pollution</h4>
              <ul>
                <li>• Contamination of the atmosphere</li>
                <li>• Gases, particulates, aerosols</li>
                <li>• Sources: Industry, vehicles, burning</li>
                <li>• Effects: Health, climate, acid rain</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Water Pollution</h4>
              <ul>
                <li>• Contamination of water bodies</li>
                <li>• Chemicals, pathogens, plastics</li>
                <li>• Sources: Industry, agriculture, sewage</li>
                <li>• Effects: Health, ecosystems, drinking water</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Soil Pollution</h4>
              <ul>
                <li>• Contamination of land</li>
                <li>• Heavy metals, pesticides, waste</li>
                <li>• Sources: Industry, agriculture, landfills</li>
                <li>• Effects: Food contamination, biodiversity loss</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Air Pollution",
        objective: "obj_002",
        text: `
          <h3>Air Pollution</h3>
          <p>Air pollution is the presence of harmful substances in the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Air Pollutants</h4>
              <ul>
                <li>• <strong>SO₂:</strong> Sulfur dioxide</li>
                <li>• <strong>NOₓ:</strong> Nitrogen oxides</li>
                <li>• <strong>CO:</strong> Carbon monoxide</li>
                <li>• <strong>CO₂:</strong> Carbon dioxide</li>
                <li>• <strong>O₃:</strong> Ozone (tropospheric)</li>
                <li>• <strong>Particulates:</strong> PM2.5, PM10</li>
                <li>• <strong>VOCs:</strong> Volatile organic compounds</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sources</h4>
              <ul>
                <li>• <strong>Transport:</strong> Vehicle emissions</li>
                <li>• <strong>Industry:</strong> Factories, power plants</li>
                <li>• <strong>Agriculture:</strong> Ammonia, methane</li>
                <li>• <strong>Domestic:</strong> Cooking, heating</li>
                <li>• <strong>Natural:</strong> Volcanic eruptions, wildfires</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Acid Rain",
        objective: "obj_004",
        text: `
          <h3>Acid Rain</h3>
          <p><strong>Acid rain</strong> is rainfall with a pH lower than 5.6, caused by dissolved SO₂ and NOₓ in the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation</h4>
              <ul>
                <li>• <strong>SO₂ → H₂SO₄:</strong></li>
                <li>• 2SO₂ + O₂ → 2SO₃</li>
                <li>• SO₃ + H₂O → H₂SO₄</li>
                <li>• <strong>NOₓ → HNO₃:</strong></li>
                <li>• 2NO + O₂ → 2NO₂</li>
                <li>• 4NO₂ + 2H₂O + O₂ → 4HNO₃</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Acidifies lakes:</strong> Kills fish</li>
                <li>• <strong>Damages forests:</strong> Kills trees</li>
                <li>• <strong>Corrodes buildings:</strong> Stone, metal</li>
                <li>• <strong>Damages crops:</strong> Reduces yields</li>
                <li>• <strong>Leaches minerals:</strong> From soil</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Acid Rain Formation</text>
              
              <!-- Factory -->
              <g transform="translate(100, 250)">
                <rect x="-30" y="-40" width="60" height="40" rx="3" fill="#78909c"/>
                <rect x="-15" y="-60" width="30" height="20" rx="2" fill="#90a4ae"/>
                <!-- Smoke -->
                <circle cx="0" cy="-70" r="10" fill="#bdbdbd" opacity="0.7"/>
                <circle cx="15" cy="-85" r="12" fill="#bdbdbd" opacity="0.6"/>
                <circle cx="5" cy="-100" r="14" fill="#bdbdbd" opacity="0.5"/>
                <circle cx="20" cy="-115" r="16" fill="#bdbdbd" opacity="0.4"/>
                <!-- Labels -->
                <text x="0" y="-130" text-anchor="middle" font-size="10" fill="#1565c0">SO₂, NOₓ</text>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#1565c0">Factory</text>
              </g>
              
              <!-- Arrow -->
              <path d="M150 170 Q250 130 350 170" stroke="#1565c0" stroke-width="2" fill="none"/>
              <polygon points="350,170 340,165 340,175" fill="#1565c0"/>
              <text x="250" y="140" text-anchor="middle" font-size="10" fill="#1565c0">Reactions with water</text>
              
              <!-- Cloud -->
              <g transform="translate(350, 150)">
                <circle cx="-20" cy="0" r="20" fill="#e0e0e0"/>
                <circle cx="0" cy="-5" r="25" fill="#e0e0e0"/>
                <circle cx="20" cy="0" r="20" fill="#e0e0e0"/>
                <text x="0" y="40" text-anchor="middle" font-size="10" fill="#1565c0">Clouds</text>
              </g>
              
              <!-- Rain -->
              <g transform="translate(350, 195)">
                <line x1="-30" y1="0" x2="-25" y2="30" stroke="#4a90d9" stroke-width="2" stroke-dasharray="4,4"/>
                <line x1="-10" y1="0" x2="-5" y2="30" stroke="#4a90d9" stroke-width="2" stroke-dasharray="4,4"/>
                <line x1="10" y1="0" x2="15" y2="30" stroke="#4a90d9" stroke-width="2" stroke-dasharray="4,4"/>
                <line x1="30" y1="0" x2="35" y2="30" stroke="#4a90d9" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="0" y="50" text-anchor="middle" font-size="10" fill="#1565c0">Acid Rain</text>
                <text x="0" y="65" text-anchor="middle" font-size="9" fill="#1565c0">pH < 5.6</text>
              </g>
              
              <!-- Forest -->
              <g transform="translate(500, 280)">
                <line x1="-30" y1="0" x2="-30" y2="-50" stroke="#2e7d32" stroke-width="4"/>
                <line x1="-15" y1="0" x2="-15" y2="-60" stroke="#2e7d32" stroke-width="4"/>
                <line x1="0" y1="0" x2="0" y2="-55" stroke="#2e7d32" stroke-width="4"/>
                <line x1="15" y1="0" x2="15" y2="-65" stroke="#2e7d32" stroke-width="4"/>
                <line x1="30" y1="0" x2="30" y2="-45" stroke="#2e7d32" stroke-width="4"/>
                <!-- Tree tops -->
                <polygon points="-40,-50 -30,-70 -20,-50" fill="#66bb6a"/>
                <polygon points="-25,-60 -15,-80 -5,-60" fill="#66bb6a"/>
                <polygon points="-10,-55 0,-75 10,-55" fill="#66bb6a"/>
                <polygon points="5,-65 15,-85 25,-65" fill="#66bb6a"/>
                <polygon points="20,-45 30,-65 40,-45" fill="#66bb6a"/>
                <text x="0" y="25" text-anchor="middle" font-size="10" fill="#1565c0">Damaged forest</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Photochemical Smog",
        objective: "obj_005",
        text: `
          <h3>Photochemical Smog</h3>
          <p><strong>Photochemical smog</strong> is formed when NOₓ and VOCs react in sunlight to produce ozone and other pollutants.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formation</h4>
              <ul>
                <li>• NO₂ + sunlight → NO + O</li>
                <li>• O + O₂ → O₃ (ozone)</li>
                <li>• O₃ + NO → NO₂ + O₂</li>
                <li>• VOCs + O₂ → Ozone precursors</li>
                <li>• Sunlight drives the reactions</li>
                <li>• More common in summer</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Health:</strong> Respiratory issues</li>
                <li>• <strong>Plants:</strong> Damages crops</li>
                <li>• <strong>Material:</strong> Degrades rubber</li>
                <li>• <strong>Visibility:</strong> Reduces visibility</li>
                <li>• <strong>Ozone:</strong> Ground-level ozone</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Greenhouse Effect",
        objective: "obj_006",
        text: `
          <h3>The Greenhouse Effect</h3>
          <p>The <strong>greenhouse effect</strong> is the warming of the Earth's surface due to greenhouse gases trapping heat.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Greenhouse Gases</h4>
              <ul>
                <li>• <strong>CO₂:</strong> Carbon dioxide</li>
                <li>• <strong>CH₄:</strong> Methane</li>
                <li>• <strong>N₂O:</strong> Nitrous oxide</li>
                <li>• <strong>CFCs:</strong> Chlorofluorocarbons</li>
                <li>• <strong>H₂O:</strong> Water vapor</li>
                <li>• <strong>O₃:</strong> Ozone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Process</h4>
              <ul>
                <li>• Sunlight passes through atmosphere</li>
                <li>• Earth's surface absorbs heat</li>
                <li>• Earth emits infrared radiation</li>
                <li>• Greenhouse gases trap the heat</li>
                <li>• Natural greenhouse effect: Necessary for life</li>
                <li>• Enhanced effect: Global warming</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Ozone Layer Depletion",
        objective: "obj_007",
        text: `
          <h3>Ozone Layer Depletion</h3>
          <p>The <strong>ozone layer</strong> in the stratosphere protects Earth from UV radiation. CFCs and other chemicals deplete it.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ozone Destruction</h4>
              <ul>
                <li>• CFCs release Cl atoms</li>
                <li>• Cl + O₃ → ClO + O₂</li>
                <li>• ClO + O → Cl + O₂</li>
                <li>• Cl acts as a catalyst</li>
                <li>• One Cl atom destroys 100,000 O₃ molecules</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>UV-B radiation:</strong> Increases</li>
                <li>• <strong>Health:</strong> Skin cancer, cataracts</li>
                <li>• <strong>Ecosystems:</strong> Damages phytoplankton</li>
                <li>• <strong>Materials:</strong> Degrades plastics</li>
                <li>• <strong>Montreal Protocol:</strong> International agreement</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Water Pollution",
        objective: "obj_008",
        text: `
          <h3>Water Pollution</h3>
          <p>Water pollution is the contamination of water bodies by harmful substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types</h4>
              <ul>
                <li>• <strong>Chemical:</strong> Heavy metals, pesticides</li>
                <li>• <strong>Biological:</strong> Bacteria, viruses</li>
                <li>• <strong>Physical:</strong> Plastics, sediment</li>
                <li>• <strong>Nutrient:</strong> Nitrates, phosphates</li>
                <li>• <strong>Thermal:</strong> Heated water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sources</h4>
              <ul>
                <li>• <strong>Industry:</strong> Chemical waste</li>
                <li>• <strong>Agriculture:</strong> Fertilizers, pesticides</li>
                <li>• <strong>Sewage:</strong> Human waste</li>
                <li>• <strong>Oil spills:</strong> Petroleum</li>
                <li>• <strong>Urban runoff:</strong> Roads, parking lots</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Soil Pollution",
        objective: "obj_009",
        text: `
          <h3>Soil Pollution</h3>
          <p>Soil pollution is the contamination of soil by harmful substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types</h4>
              <ul>
                <li>• <strong>Heavy metals:</strong> Pb, Hg, As, Cd</li>
                <li>• <strong>Pesticides:</strong> Insecticides, herbicides</li>
                <li>• <strong>Industrial waste:</strong> Chemicals</li>
                <li>• <strong>Plastics:</strong> Microplastics</li>
                <li>• <strong>Landfills:</strong> Waste disposal</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Food contamination:</strong> Crops absorb toxins</li>
                <li>• <strong>Biodiversity loss:</strong> Soil organisms die</li>
                <li>• <strong>Water contamination:</strong> Leaching</li>
                <li>• <strong>Human health:</strong> Heavy metal poisoning</li>
                <li>• <strong>Ecosystem damage:</strong> Plant growth affected</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Health Effects",
        objective: "obj_011",
        text: `
          <h3>Health Effects of Pollution</h3>
          <p>Pollution has serious impacts on human health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Air Pollution</h4>
              <ul>
                <li>• <strong>Respiratory:</strong> Asthma, lung cancer</li>
                <li>• <strong>Cardiovascular:</strong> Heart disease</li>
                <li>• <strong>Neurological:</strong> Lead poisoning</li>
                <li>• <strong>Cancer:</strong> Lung, bladder</li>
                <li>• <strong>Premature death:</strong> 7 million annually</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Water/Soil</h4>
              <ul>
                <li>• <strong>Waterborne diseases:</strong> Cholera, typhoid</li>
                <li>• <strong>Heavy metal poisoning:</strong> Lead, mercury</li>
                <li>• <strong>Cancer:</strong> Carcinogens in water</li>
                <li>• <strong>Reproductive issues:</strong> Endocrine disruptors</li>
                <li>• <strong>Developmental:</strong> Birth defects</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Pollution Control",
        objective: "obj_013",
        text: `
          <h3>Methods of Pollution Control</h3>
          <p>Various methods are used to control pollution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Air Pollution Control</h4>
              <ul>
                <li>• <strong>Catalytic converters:</strong> Vehicles</li>
                <li>• <strong>Scrubbers:</strong> Factories</li>
                <li>• <strong>Electrostatic precipitators:</strong> Remove particulates</li>
                <li>• <strong>Alternative energy:</strong> Reduce emissions</li>
                <li>• <strong>Regulations:</strong> Emission standards</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Water/Soil Control</h4>
              <ul>
                <li>• <strong>Wastewater treatment:</strong> Remove pollutants</li>
                <li>• <strong>Bioremediation:</strong> Use microorganisms</li>
                <li>• <strong>Phytoremediation:</strong> Use plants</li>
                <li>• <strong>Recycling:</strong> Reduce waste</li>
                <li>• <strong>Regulations:</strong> Discharge limits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Monitoring Pollution",
        objective: "obj_014",
        text: `
          <h3>Monitoring Pollution</h3>
          <p>Monitoring is essential to track pollution levels and assess effectiveness of controls.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Methods</h4>
              <ul>
                <li>• <strong>Chemical analysis:</strong> Samples</li>
                <li>• <strong>Remote sensing:</strong> Satellites</li>
                <li>• <strong>Continuous monitoring:</strong> Stations</li>
                <li>• <strong>Biological indicators:</strong> Plants, animals</li>
                <li>• <strong>Citizen science:</strong> Community monitoring</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 What is Monitored</h4>
              <ul>
                <li>• <strong>Air:</strong> SO₂, NOₓ, O₃, PM2.5</li>
                <li>• <strong>Water:</strong> pH, dissolved oxygen, heavy metals</li>
                <li>• <strong>Soil:</strong> Heavy metals, pesticides</li>
                <li>• <strong>Noise:</strong> Decibel levels</li>
                <li>• <strong>Radiation:</strong> Radioactive materials</li>
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
          <h4>🏭 Pollution</h4>
          <ul>
            <li>• Types: Air, water, soil</li>
            <li>• Major pollutants: SO₂, NOₓ, CO, particulates</li>
            <li>• Acid rain, smog, greenhouse effect</li>
            <li>• Health effects: Respiratory, cancer, cardiovascular</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Solutions</h4>
          <ul>
            <li>• Pollution control: Scrubbers, catalytic converters</li>
            <li>• Alternative energy: Reduce emissions</li>
            <li>• Waste treatment: Wastewater, recycling</li>
            <li>• Regulations: Environmental laws</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Pollution is a global problem that requires collective action. Chemistry provides the tools to understand and solve environmental challenges.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The greenhouse effect is entirely bad",
        correction: "The natural greenhouse effect is necessary for life",
        explanation: "The enhanced greenhouse effect (global warming) is the problem."
      },
      {
        id: "mis_002",
        misconception: "Acid rain is caused by CO₂",
        correction: "Acid rain is caused by SO₂ and NOₓ",
        explanation: "CO₂ causes ocean acidification, not acid rain."
      },
      {
        id: "mis_003",
        misconception: "Ozone depletion is caused by CO₂",
        correction: "Ozone depletion is caused by CFCs",
        explanation: "CFCs are the main cause of ozone depletion."
      },
      {
        id: "mis_004",
        misconception: "Pollution is only an industrial problem",
        correction: "Pollution comes from many sources, including domestic activities",
        explanation: "Individual actions like driving and waste contribute to pollution."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Air Quality Management",
        description: "Understanding pollution chemistry helps manage air quality.",
        example: "Monitoring and forecasting air pollution"
      },
      {
        id: "app_002",
        title: "Water Treatment",
        description: "Chemistry is essential for cleaning water.",
        example: "Wastewater treatment plants"
      },
      {
        id: "app_003",
        title: "Climate Policy",
        description: "Understanding pollution helps create environmental policy.",
        example: "Paris Agreement, carbon pricing"
      },
      {
        id: "app_004",
        title: "Green Chemistry",
        description: "Chemistry can design cleaner processes.",
        example: "Sustainable chemical production"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Pollution", definition: "Introduction of harmful substances into the environment." },
    { term: "Air Pollution", definition: "Contamination of the atmosphere by harmful substances." },
    { term: "Water Pollution", definition: "Contamination of water bodies by harmful substances." },
    { term: "Soil Pollution", definition: "Contamination of soil by harmful substances." },
    { term: "Acid Rain", definition: "Rainfall with pH below 5.6 due to SO₂ and NOₓ." },
    { term: "Greenhouse Effect", definition: "Trapping of heat by greenhouse gases." },
    { term: "Global Warming", definition: "Increase in Earth's average temperature." },
    { term: "Ozone Depletion", definition: "Reduction of stratospheric ozone." },
    { term: "CFCs", definition: "Chlorofluorocarbons, ozone-depleting substances." },
    { term: "Photochemical Smog", definition: "Smog formed by reactions in sunlight." },
    { term: "Particulates", definition: "Tiny particles suspended in air." },
    { term: "VOCs", definition: "Volatile organic compounds." },
    { term: "Heavy Metals", definition: "Toxic metals like lead, mercury, cadmium." },
    { term: "Eutrophication", definition: "Excessive nutrients causing algal blooms." },
    { term: "Bioremediation", definition: "Using organisms to clean pollution." },
    { term: "Phytoremediation", definition: "Using plants to clean pollution." },
    { term: "Catalytic Converter", definition: "Device that reduces vehicle emissions." },
    { term: "Scrubber", definition: "Device that removes pollutants from flue gas." },
    { term: "Electrostatic Precipitator", definition: "Device that removes particulates." },
    { term: "Montreal Protocol", definition: "International agreement to phase out CFCs." }
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
      question: "What is pollution?",
      type: "multiple_choice",
      options: [
        "The study of the environment",
        "The introduction of harmful substances into the environment",
        "The removal of waste",
        "The recycling of materials"
      ],
      answer: "The introduction of harmful substances into the environment",
      explanation: "Pollution is the introduction of harmful substances into the environment."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a major air pollutant?",
      type: "multiple_choice",
      options: ["NaCl", "SO₂", "H₂O", "N₂"],
      answer: "SO₂",
      explanation: "Sulfur dioxide is a major air pollutant."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a major source of air pollution?",
      type: "multiple_choice",
      options: ["Rain", "Vehicle emissions", "Wind", "Sunlight"],
      answer: "Vehicle emissions",
      explanation: "Vehicle emissions are a major source of air pollution."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What causes acid rain?",
      type: "multiple_choice",
      options: ["CO₂", "SO₂ and NOₓ", "O₃", "CH₄"],
      answer: "SO₂ and NOₓ",
      explanation: "Acid rain is caused by SO₂ and NOₓ dissolving in rainwater."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is photochemical smog?",
      type: "multiple_choice",
      options: [
        "Smog from coal burning",
        "Smog formed by reactions in sunlight",
        "Smog from volcanic eruptions",
        "Smog from dust storms"
      ],
      answer: "Smog formed by reactions in sunlight",
      explanation: "Photochemical smog is formed when NOₓ and VOCs react in sunlight."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What gas is mainly responsible for the greenhouse effect?",
      type: "multiple_choice",
      options: ["O₂", "CO₂", "N₂", "Ar"],
      answer: "CO₂",
      explanation: "Carbon dioxide is the main greenhouse gas."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What causes ozone depletion?",
      type: "multiple_choice",
      options: ["CO₂", "CFCs", "CH₄", "SO₂"],
      answer: "CFCs",
      explanation: "CFCs are the main cause of ozone depletion."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the chemical reaction for acid rain formation from SO₂?",
      type: "multiple_choice",
      options: [
        "SO₂ + H₂O → H₂SO₃",
        "2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄",
        "SO₂ + O₂ → SO₃",
        "SO₂ + H₂O → H₂SO₄"
      ],
      answer: "2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄",
      explanation: "SO₂ is oxidized to SO₃, then combines with water to form H₂SO₄."
    },
    {
      id: "prac_009",
      objective: "obj_011",
      difficulty: "hard",
      question: "What health problem is caused by air pollution?",
      type: "multiple_choice",
      options: ["Diabetes", "Asthma", "Arthritis", "Alzheimer's"],
      answer: "Asthma",
      explanation: "Air pollution causes respiratory problems like asthma."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is an environmental effect of acid rain?",
      type: "multiple_choice",
      options: [
        "Global warming",
        "Acidification of lakes",
        "Ozone depletion",
        "Deforestation"
      ],
      answer: "Acidification of lakes",
      explanation: "Acid rain acidifies lakes, killing fish."
    },
    {
      id: "prac_011",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is used to remove SO₂ from industrial emissions?",
      type: "multiple_choice",
      options: ["Catalytic converter", "Scrubber", "Filter", "Electrostatic precipitator"],
      answer: "Scrubber",
      explanation: "Scrubbers are used to remove SO₂ from industrial emissions."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is an indicator of water pollution?",
      type: "multiple_choice",
      options: [
        "High dissolved oxygen",
        "Low dissolved oxygen",
        "High pH",
        "Low temperature"
      ],
      answer: "Low dissolved oxygen",
      explanation: "Low dissolved oxygen indicates water pollution."
    },
    {
      id: "prac_013",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does chemistry help solve pollution problems?",
      type: "multiple_choice",
      options: [
        "By understanding pollution chemistry",
        "By developing cleaner processes",
        "By monitoring pollutants",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Chemistry helps understand, monitor, and solve pollution problems."
    },
    {
      id: "prac_014",
      objective: "obj_016",
      difficulty: "hard",
      question: "What is the Montreal Protocol?",
      type: "multiple_choice",
      options: [
        "An agreement to reduce CO₂ emissions",
        "An agreement to phase out CFCs",
        "An agreement to reduce SO₂",
        "An agreement to protect water"
      ],
      answer: "An agreement to phase out CFCs",
      explanation: "The Montreal Protocol phases out CFCs to protect the ozone layer."
    },
    {
      id: "prac_015",
      objective: "obj_004",
      difficulty: "hard",
      question: "What is the pH of acid rain?",
      type: "multiple_choice",
      options: ["pH < 7", "pH < 5.6", "pH = 7", "pH > 7"],
      answer: "pH < 5.6",
      explanation: "Acid rain has a pH lower than 5.6."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_pollution",
    title: "Pollution Quiz",
    description: "Test your understanding of pollution",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is pollution?",
        type: "short_answer",
        answer_key: "Introduction of harmful substances into the environment",
        explanation: "Pollution is the introduction of harmful substances into the environment."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one major air pollutant.",
        type: "short_answer",
        answer_key: "SO₂ (or any valid)",
        explanation: "SO₂ is a major air pollutant."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a source of air pollution?",
        type: "short_answer",
        answer_key: "Vehicle emissions (or any valid)",
        explanation: "Vehicle emissions are a major source of air pollution."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What gases cause acid rain?",
        type: "short_answer",
        answer_key: "SO₂ and NOₓ",
        explanation: "SO₂ and NOₓ cause acid rain."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is photochemical smog?",
        type: "short_answer",
        answer_key: "Smog formed by reactions in sunlight",
        explanation: "Photochemical smog is formed when NOₓ and VOCs react in sunlight."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What gas is mainly responsible for the greenhouse effect?",
        type: "short_answer",
        answer_key: "CO₂",
        explanation: "Carbon dioxide is the main greenhouse gas."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What causes ozone depletion?",
        type: "short_answer",
        answer_key: "CFCs",
        explanation: "CFCs cause ozone depletion."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a source of water pollution?",
        type: "short_answer",
        answer_key: "Industrial waste (or any valid)",
        explanation: "Industrial waste is a source of water pollution."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What health problem is caused by air pollution?",
        type: "short_answer",
        answer_key: "Respiratory problems (asthma)",
        explanation: "Air pollution causes respiratory problems like asthma."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is used to remove SO₂ from industrial emissions?",
        type: "short_answer",
        answer_key: "Scrubber",
        explanation: "Scrubbers are used to remove SO₂ from industrial emissions."
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
        "Understand types of pollution",
        "Explain the chemistry of acid rain and smog",
        "Describe the greenhouse effect and ozone depletion",
        "Explain pollution control methods"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is pollution?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Pollution" },
        { time: "10-15 min", activity: "Direct Instruction - Air Pollution and Acid Rain" },
        { time: "15-20 min", activity: "Direct Instruction - Smog and Greenhouse Effect" },
        { time: "20-25 min", activity: "Direct Instruction - Ozone Depletion" },
        { time: "25-30 min", activity: "Direct Instruction - Water and Soil Pollution" },
        { time: "30-35 min", activity: "Direct Instruction - Pollution Control" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The introduction of harmful substances into the environment",
        prac_002: "SO₂",
        prac_003: "Vehicle emissions",
        prac_004: "SO₂ and NOₓ",
        prac_005: "Smog formed by reactions in sunlight",
        prac_006: "CO₂",
        prac_007: "CFCs",
        prac_008: "2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄",
        prac_009: "Asthma",
        prac_010: "Acidification of lakes",
        prac_011: "Scrubber",
        prac_012: "Low dissolved oxygen",
        prac_013: "All of the above",
        prac_014: "An agreement to phase out CFCs",
        prac_015: "pH < 5.6"
      },
      assessment: {
        ass_001: "Introduction of harmful substances into the environment",
        ass_002: "SO₂ (or any valid)",
        ass_003: "Vehicle emissions (or any valid)",
        ass_004: "SO₂ and NOₓ",
        ass_005: "Smog formed by reactions in sunlight",
        ass_006: "CO₂",
        ass_007: "CFCs",
        ass_008: "Industrial waste (or any valid)",
        ass_009: "Respiratory problems (asthma)",
        ass_010: "Scrubber"
      }
    },
    extensionActivities: [
      "Research local air quality",
      "Study water treatment in your area",
      "Investigate the Montreal Protocol",
      "Research renewable energy solutions"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research pollution chemistry",
        "Study atmospheric chemistry",
        "Research environmental policy",
        "Study green chemistry"
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
      title: "Acid Rain Formation",
      description: "Diagram showing how acid rain forms",
      url: "/diagrams/acid-rain.png",
      alt: "Acid rain diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Greenhouse Effect",
      description: "Diagram of the greenhouse effect",
      url: "/diagrams/greenhouse-effect.png",
      alt: "Greenhouse effect diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Ozone Depletion",
      description: "Diagram showing ozone depletion",
      url: "/diagrams/ozone-depletion.png",
      alt: "Ozone depletion diagram"
    }
  ]
};