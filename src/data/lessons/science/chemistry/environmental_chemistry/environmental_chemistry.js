// Location: src/data/lessons/science/chemistry/environmental_chemistry/environmental_chemistry.js

export default {
  id: "chem_lesson_environmental_chemistry",
  subject: "Chemistry",
  topic: "Environmental Chemistry",
  name: "Environmental Chemistry",
  icon: "🌍",
  grade_level: "SS2 - SS3",
  estimated_duration: "55 minutes",

  progress: {
    totalObjectives: 20,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of chemical reactions",
    "Knowledge of acids and bases",
    "Understanding of the atmosphere",
    "Basic knowledge of pollution"
  ],

  nextLessons: [
    // No more Chemistry lessons - this is the final one
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define environmental chemistry and explain its importance",
      indicator: "Student can explain what environmental chemistry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major components of the atmosphere",
      indicator: "Student can list the gases in the atmosphere"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the composition of the hydrosphere",
      indicator: "Student can describe the composition of water on Earth"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain the composition of the lithosphere",
      indicator: "Student can describe the composition of the Earth's crust"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the greenhouse effect",
      indicator: "Student can explain how greenhouse gases warm the planet"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the causes and effects of acid rain",
      indicator: "Student can explain how acid rain forms and its effects"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the causes and effects of ozone depletion",
      indicator: "Student can explain the role of CFCs in ozone depletion"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the causes and effects of water pollution",
      indicator: "Student can explain how water becomes polluted"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the causes and effects of air pollution",
      indicator: "Student can explain the sources and effects of air pollution"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the nitrogen cycle",
      indicator: "Student can describe the nitrogen cycle"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the carbon cycle",
      indicator: "Student can describe the carbon cycle"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the chemistry of the greenhouse effect",
      indicator: "Student can explain the chemical processes involved in global warming"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the impact of human activities on the environment",
      indicator: "Student can explain how human activities affect the environment"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of eutrophication",
      indicator: "Student can explain how nutrient pollution affects water bodies"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the chemistry of ozone depletion",
      indicator: "Student can explain the chemical reactions involved in ozone depletion"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the process of wastewater treatment",
      indicator: "Student can describe how wastewater is treated"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the chemistry of air pollution",
      indicator: "Student can explain the chemical reactions in air pollution"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the effects of pollution on ecosystems",
      indicator: "Student can explain how pollution affects ecosystems"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Explain the principles of green chemistry",
      indicator: "Student can describe the principles of green chemistry"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Evaluate solutions to environmental problems",
      indicator: "Student can evaluate methods for solving environmental problems"
    }
  ],

  video: {
    id: "vid_001",
    title: "Environmental Chemistry",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about environmental chemistry, pollution, and sustainability."
  },

  content: {
    introduction: `
      <h2>What is Environmental Chemistry?</h2>
      <p><strong>Environmental chemistry</strong> is the study of chemical processes that occur in the environment. It examines the sources, reactions, transport, effects, and fates of chemical species in air, water, and soil.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🌬️ Atmosphere</h3>
          <ul>
            <li>• Air composition</li>
            <li>• Greenhouse gases</li>
            <li>• Ozone layer</li>
            <li>• Air pollution</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">💧 Hydrosphere</h3>
          <ul>
            <li>• Water chemistry</li>
            <li>• Water pollution</li>
            <li>• Water treatment</li>
            <li>• Eutrophication</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">🌍 Lithosphere</h3>
          <ul>
            <li>• Soil chemistry</li>
            <li>• Soil pollution</li>
            <li>• Waste management</li>
            <li>• Land degradation</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Environment - Chemical Spheres</text>
          
          <!-- Atmosphere -->
          <circle cx="300" cy="140" r="120" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#3498db">Atmosphere</text>
          
          <!-- Hydrosphere -->
          <circle cx="300" cy="140" r="85" fill="none" stroke="#2ecc71" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="300" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2ecc71">Hydrosphere</text>
          
          <!-- Lithosphere -->
          <circle cx="300" cy="140" r="50" fill="none" stroke="#e67e22" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="300" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#e67e22">Lithosphere</text>
          
          <!-- Labels -->
          <text x="300" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Air, Water, Land</text>
          <text x="300" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">All connected through chemical cycles</text>
          
          <!-- Chemical interactions -->
          <path d="M300 50 Q350 50 350 80" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,4"/>
          <path d="M300 230 Q350 230 350 200" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,4"/>
          <path d="M180 140 Q180 90 200 80" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,4"/>
          <path d="M420 140 Q420 90 400 80" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,4"/>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Atmosphere",
        objective: "obj_002",
        text: `
          <h3>Atmospheric Composition</h3>
          <p>The <strong>atmosphere</strong> is a layer of gases surrounding the Earth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Composition of Air</h4>
              <ul>
                <li><strong>Nitrogen (N₂):</strong> 78%</li>
                <li><strong>Oxygen (O₂):</strong> 21%</li>
                <li><strong>Argon (Ar):</strong> 0.93%</li>
                <li><strong>Carbon dioxide (CO₂):</strong> 0.04%</li>
                <li><strong>Neon, Helium, Methane:</strong> Trace</li>
                <li><strong>Water vapour:</strong> Variable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Layers of the Atmosphere</h4>
              <ul>
                <li><strong>Troposphere:</strong> 0-12 km</li>
                <li><strong>Stratosphere:</strong> 12-50 km</li>
                <li><strong>Mesosphere:</strong> 50-85 km</li>
                <li><strong>Thermosphere:</strong> 85-600 km</li>
                <li><strong>Exosphere:</strong> >600 km</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Greenhouse Effect",
        objective: "obj_005",
        text: `
          <h3>The Greenhouse Effect</h3>
          <p>The <strong>greenhouse effect</strong> is the natural warming of the Earth's surface due to the trapping of heat by greenhouse gases.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">The Greenhouse Effect</text>
              
              <!-- Sun -->
              <circle cx="100" cy="80" r="35" fill="#f39c12"/>
              <text x="100" y="85" text-anchor="middle" font-size="10" fill="#fff">Sun</text>
              
              <!-- Sun rays -->
              <line x1="135" y1="80" x2="300" y2="120" stroke="#f39c12" stroke-width="2" stroke-dasharray="4,4"/>
              <line x1="135" y1="70" x2="300" y2="100" stroke="#f39c12" stroke-width="2" stroke-dasharray="4,4"/>
              <line x1="135" y1="90" x2="300" y2="140" stroke="#f39c12" stroke-width="2" stroke-dasharray="4,4"/>
              
              <!-- Earth -->
              <rect x="180" y="220" width="240" height="80" fill="#2ecc71" stroke="#27ae60" stroke-width="2" rx="5"/>
              <text x="300" y="265" text-anchor="middle" font-size="12" fill="#1a5276">Earth's Surface</text>
              
              <!-- Greenhouse gases -->
              <rect x="200" y="160" width="200" height="50" fill="#3498db" opacity="0.2" stroke="#3498db" stroke-width="1" rx="3"/>
              <text x="300" y="175" text-anchor="middle" font-size="10" fill="#3498db">Greenhouse Gases</text>
              <text x="300" y="190" text-anchor="middle" font-size="9" fill="#3498db">CO₂, H₂O, CH₄, N₂O</text>
              
              <!-- Trapped heat -->
              <path d="M220 220 Q250 180 280 220" stroke="#e74c3c" stroke-width="2" fill="none"/>
              <path d="M280 220 Q310 180 340 220" stroke="#e74c3c" stroke-width="2" fill="none"/>
              <path d="M340 220 Q370 180 400 220" stroke="#e74c3c" stroke-width="2" fill="none"/>
              <text x="300" y="210" text-anchor="middle" font-size="9" fill="#e74c3c">Heat trapped</text>
              
              <!-- Labels -->
              <text x="300" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Greenhouse gases trap heat, warming the planet</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Greenhouse Gases:</strong>
            <ul>
              <li><strong>Carbon dioxide (CO₂):</strong> Burning fossil fuels</li>
              <li><strong>Methane (CH₄):</strong> Agriculture, landfills</li>
              <li><strong>Nitrous oxide (N₂O):</strong> Fertilizers</li>
              <li><strong>Water vapour (H₂O):</strong> Natural evaporation</li>
              <li><strong>CFCs:</strong> Refrigerants, aerosols</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Acid Rain",
        objective: "obj_006",
        text: `
          <h3>Acid Rain</h3>
          <p><strong>Acid rain</strong> is precipitation with a pH below 5.6, caused by the release of sulfur dioxide and nitrogen oxides into the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Causes of Acid Rain</h4>
              <ul>
                <li><strong>Sulfur dioxide (SO₂):</strong></li>
                <li>• Burning fossil fuels</li>
                <li>• 2SO₂ + O₂ → 2SO₃</li>
                <li>• SO₃ + H₂O → H₂SO₄</li>
                <li><strong>Nitrogen oxides (NOₓ):</strong></li>
                <li>• Vehicle emissions</li>
                <li>• 2NO₂ + H₂O → HNO₃ + HNO₂</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Effects of Acid Rain</h4>
              <ul>
                <li>• <strong>Forests:</strong> Damages trees</li>
                <li>• <strong>Lakes:</strong> Kills fish</li>
                <li>• <strong>Buildings:</strong> Corrodes limestone</li>
                <li>• <strong>Soil:</strong> Leaches nutrients</li>
                <li>• <strong>Human health:</strong> Respiratory problems</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Ozone Depletion",
        objective: "obj_007",
        text: `
          <h3>Ozone Depletion</h3>
          <p><strong>Ozone depletion</strong> is the thinning of the ozone layer in the stratosphere, primarily caused by chlorofluorocarbons (CFCs).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ozone Chemistry</h4>
              <ul>
                <li>• Ozone (O₃) in stratosphere</li>
                <li>• Absorbs UV radiation</li>
                <li>• <strong>CFCs:</strong> Cl + O₃ → ClO + O₂</li>
                <li>• ClO + O → Cl + O₂</li>
                <li>• Catalytic destruction of ozone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• Increased UV radiation</li>
                <li>• Skin cancer</li>
                <li>• Eye cataracts</li>
                <li>• Damage to crops</li>
                <li>• Damage to marine life</li>
                <li>• Montreal Protocol (1987) banned CFCs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Water Pollution",
        objective: "obj_008",
        text: `
          <h3>Water Pollution</h3>
          <p><strong>Water pollution</strong> is the contamination of water bodies by harmful substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Water Pollution</h4>
              <ul>
                <li><strong>Chemical:</strong> Heavy metals, pesticides</li>
                <li><strong>Biological:</strong> Pathogens, bacteria</li>
                <li><strong>Nutrient:</strong> Nitrates, phosphates</li>
                <li><strong>Physical:</strong> Sediment, thermal</li>
                <li><strong>Oil:</strong> Oil spills</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Eutrophication</h4>
              <ul>
                <li>• Excess nutrients (N, P)</li>
                <li>• Algal blooms</li>
                <li>• Oxygen depletion</li>
                <li>• Death of aquatic life</li>
                <li>• Dead zones in water bodies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Air Pollution",
        objective: "obj_009",
        text: `
          <h3>Air Pollution</h3>
          <p><strong>Air pollution</strong> is the presence of harmful substances in the atmosphere.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Primary Pollutants</h4>
              <ul>
                <li>• SO₂ (sulfur dioxide)</li>
                <li>• CO (carbon monoxide)</li>
                <li>• NOₓ (nitrogen oxides)</li>
                <li>• Particulates (PM₂.₅, PM₁₀)</li>
                <li>• VOCs (volatile organic compounds)</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Secondary Pollutants</h4>
              <ul>
                <li>• Ozone (O₃) - photochemical smog</li>
                <li>• Acid rain (H₂SO₄, HNO₃)</li>
                <li>• PAN (peroxyacetyl nitrate)</li>
                <li>• Smog (photochemical)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Carbon Cycle",
        objective: "obj_011",
        text: `
          <h3>The Carbon Cycle</h3>
          <p>The <strong>carbon cycle</strong> is the movement of carbon through the atmosphere, oceans, land, and living organisms.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">The Carbon Cycle</text>
              
              <!-- Atmosphere -->
              <text x="300" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Atmosphere</text>
              <text x="300" y="70" text-anchor="middle" font-size="10" fill="#3498db">CO₂</text>
              
              <!-- Photosynthesis -->
              <path d="M200 90 Q250 130 300 130" stroke="#2ecc71" stroke-width="2" marker-end="url(#arrowC)"/>
              <text x="230" y="110" text-anchor="middle" font-size="9" fill="#2ecc71">Photosynthesis</text>
              
              <!-- Respiration -->
              <path d="M300 130 Q350 130 400 90" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowC)"/>
              <text x="370" y="110" text-anchor="middle" font-size="9" fill="#e74c3c">Respiration</text>
              
              <!-- Plants -->
              <text x="300" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#27ae60">Plants</text>
              
              <!-- Animals -->
              <text x="450" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#e67e22">Animals</text>
              <path d="M350 160 Q400 180 430 200" stroke="#8e44ad" stroke-width="2" marker-end="url(#arrowC)"/>
              <text x="400" y="175" text-anchor="middle" font-size="9" fill="#8e44ad">Food</text>
              
              <!-- Decomposition -->
              <text x="150" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#8e44ad">Decomposers</text>
              <path d="M250 160 Q200 180 180 200" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowC)"/>
              <text x="210" y="175" text-anchor="middle" font-size="9" fill="#2c3e50">Decomposition</text>
              
              <!-- Dead organisms -->
              <text x="300" y="240" text-anchor="middle" font-size="12" font-weight="bold" fill="#7f8c8d">Dead Matter</text>
              <path d="M300 210 L300 225" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowC)"/>
              
              <!-- Fossil fuels -->
              <text x="300" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Fossil Fuels</text>
              <path d="M300 255 L300 265" stroke="#f39c12" stroke-width="2" marker-end="url(#arrowC)"/>
              
              <!-- Burning -->
              <path d="M300 280 Q350 280 350 200" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowC)"/>
              <text x="370" y="240" text-anchor="middle" font-size="9" fill="#e74c3c">Burning</text>
              
              <defs>
                <marker id="arrowC" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 z" fill="#2c3e50"/>
                </marker>
              </defs>
              
              <text x="300" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Carbon cycles through the environment in various forms</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Green Chemistry",
        objective: "obj_019",
        text: `
          <h3>Green Chemistry</h3>
          <p><strong>Green chemistry</strong> is the design of chemical processes that reduce or eliminate the use and generation of hazardous substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Principles of Green Chemistry</h4>
              <ul>
                <li>• Prevent waste</li>
                <li>• Maximize atom economy</li>
                <li>• Use less hazardous syntheses</li>
                <li>• Design safer chemicals</li>
                <li>• Use safer solvents</li>
                <li>• Increase energy efficiency</li>
                <li>• Use renewable feedstocks</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• Biodegradable plastics</li>
                <li>• Water-based paints</li>
                <li>• Non-toxic solvents</li>
                <li>• Biofuels</li>
                <li>• Energy-efficient processes</li>
                <li>• Waste reduction</li>
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
          <h4>🌍 Environmental Chemistry</h4>
          <ul>
            <li>• Atmosphere: N₂ 78%, O₂ 21%</li>
            <li>• Greenhouse effect: CO₂, CH₄, H₂O</li>
            <li>• Acid rain: SO₂, NOₓ</li>
            <li>• Ozone depletion: CFCs</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>♻️ Solutions</h4>
          <ul>
            <li>• Renewable energy</li>
            <li>• Green chemistry principles</li>
            <li>• Waste reduction and recycling</li>
            <li>• Sustainable practices</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Chemistry can help solve environmental problems through sustainable practices and green chemistry principles.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "The ozone hole is the same as the greenhouse effect",
        correction: "They are different phenomena affecting different parts of the atmosphere",
        explanation: "Ozone depletion occurs in the stratosphere; greenhouse effect occurs in the troposphere."
      },
      {
        id: "mis_002",
        misconception: "CO₂ is the only greenhouse gas",
        correction: "There are several greenhouse gases, including methane and nitrous oxide",
        explanation: "CH₄ and N₂O have stronger greenhouse effects per molecule than CO₂."
      },
      {
        id: "mis_003",
        misconception: "Acid rain is caused only by natural sources",
        correction: "Human activities are the main cause of acid rain",
        explanation: "Burning fossil fuels releases SO₂ and NOₓ that cause acid rain."
      },
      {
        id: "mis_004",
        misconception: "Water pollution only affects water quality",
        correction: "Water pollution affects ecosystems and human health",
        explanation: "Contaminated water can harm aquatic life and cause diseases."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Renewable Energy",
        description: "Environmental chemistry helps develop sustainable energy sources.",
        example: "Solar, wind, hydroelectric, and biofuels."
      },
      {
        id: "app_002",
        title: "Waste Management",
        description: "Chemistry helps in waste treatment and recycling.",
        example: "Recycling, composting, and waste-to-energy."
      },
      {
        id: "app_003",
        title: "Water Treatment",
        description: "Chemical processes are used in water purification.",
        example: "Chlorination, filtration, and reverse osmosis."
      },
      {
        id: "app_004",
        title: "Air Quality Monitoring",
        description: "Chemistry is used to monitor and improve air quality.",
        example: "Air quality sensors, catalytic converters."
      }
    ]
  },

  keyTerms: [
    { term: "Environmental Chemistry", definition: "The study of chemical processes in the environment." },
    { term: "Greenhouse Effect", definition: "The trapping of heat by greenhouse gases." },
    { term: "Greenhouse Gas", definition: "A gas that traps heat in the atmosphere." },
    { term: "Acid Rain", definition: "Rain with a pH below 5.6 caused by SO₂ and NOₓ." },
    { term: "Ozone Depletion", definition: "The thinning of the ozone layer." },
    { term: "Ozone", definition: "A form of oxygen with three atoms (O₃)." },
    { term: "CFC", definition: "Chlorofluorocarbon, a compound that depletes ozone." },
    { term: "Eutrophication", definition: "Nutrient enrichment leading to oxygen depletion in water." },
    { term: "Air Pollution", definition: "The presence of harmful substances in the atmosphere." },
    { term: "Water Pollution", definition: "The contamination of water bodies." },
    { term: "Particulates", definition: "Small particles in the air that can be inhaled." },
    { term: "Smog", definition: "Air pollution caused by photochemical reactions." },
    { term: "Green Chemistry", definition: "Chemistry that minimizes environmental impact." },
    { term: "Sustainability", definition: "Meeting present needs without compromising the future." },
    { term: "Biodegradable", definition: "Capable of being broken down by natural processes." },
    { term: "Renewable Energy", definition: "Energy from sources that can be replenished." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is environmental chemistry?",
      type: "multiple_choice",
      options: [
        "The study of pollution only",
        "The study of chemical processes in the environment",
        "The study of the atmosphere only",
        "The study of water only"
      ],
      answer: "The study of chemical processes in the environment",
      explanation: "Environmental chemistry studies chemical processes in the environment."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the most abundant gas in the atmosphere?",
      type: "multiple_choice",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      answer: "Nitrogen",
      explanation: "Nitrogen makes up about 78% of the atmosphere."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the hydrosphere?",
      type: "multiple_choice",
      options: [
        "All the water on Earth",
        "All the air on Earth",
        "All the land on Earth",
        "All the living things"
      ],
      answer: "All the water on Earth",
      explanation: "The hydrosphere includes all water on Earth."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the greenhouse effect?",
      type: "multiple_choice",
      options: [
        "The warming of the Earth due to greenhouse gases",
        "The cooling of the Earth",
        "The destruction of the ozone layer",
        "The formation of acid rain"
      ],
      answer: "The warming of the Earth due to greenhouse gases",
      explanation: "The greenhouse effect is the warming of the Earth by greenhouse gases."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is NOT a greenhouse gas?",
      type: "multiple_choice",
      options: ["CO₂", "CH₄", "N₂O", "O₂"],
      answer: "O₂",
      explanation: "Oxygen (O₂) is not a greenhouse gas."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What causes acid rain?",
      type: "multiple_choice",
      options: ["SO₂ and NOₓ", "CO₂ and O₂", "CFCs and H₂O", "O₃ and O₂"],
      answer: "SO₂ and NOₓ",
      explanation: "Acid rain is caused by sulfur dioxide and nitrogen oxides."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What destroys ozone in the stratosphere?",
      type: "multiple_choice",
      options: ["CFCs", "CO₂", "SO₂", "NOₓ"],
      answer: "CFCs",
      explanation: "CFCs are the main cause of ozone depletion."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is eutrophication?",
      type: "multiple_choice",
      options: [
        "Nutrient enrichment leading to algal blooms",
        "Acidification of water",
        "Ozone depletion",
        "Air pollution"
      ],
      answer: "Nutrient enrichment leading to algal blooms",
      explanation: "Eutrophication is caused by excess nutrients in water."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the nitrogen cycle?",
      type: "multiple_choice",
      options: [
        "The movement of nitrogen through the environment",
        "The movement of carbon through the environment",
        "The movement of oxygen through the environment",
        "The movement of water through the environment"
      ],
      answer: "The movement of nitrogen through the environment",
      explanation: "The nitrogen cycle describes the movement of nitrogen in the environment."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the carbon cycle?",
      type: "multiple_choice",
      options: [
        "The movement of carbon through the environment",
        "The movement of nitrogen through the environment",
        "The movement of oxygen through the environment",
        "The movement of water through the environment"
      ],
      answer: "The movement of carbon through the environment",
      explanation: "The carbon cycle describes the movement of carbon in the environment."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the main cause of eutrophication?",
      type: "multiple_choice",
      options: [
        "Excess nitrates and phosphates",
        "Excess carbon dioxide",
        "Excess oxygen",
        "Excess nitrogen gas"
      ],
      answer: "Excess nitrates and phosphates",
      explanation: "Eutrophication is caused by excess nutrients, particularly nitrates and phosphates."
    },
    {
      id: "prac_012",
      objective: "obj_019",
      difficulty: "hard",
      question: "What is green chemistry?",
      type: "multiple_choice",
      options: [
        "Chemistry that reduces environmental impact",
        "Chemistry that uses only natural products",
        "Chemistry that produces no waste",
        "Chemistry that uses only renewable energy"
      ],
      answer: "Chemistry that reduces environmental impact",
      explanation: "Green chemistry aims to reduce or eliminate environmental impact."
    }
  ],

  assessment: {
    id: "assess_environmental_chemistry",
    title: "Environmental Chemistry Quiz",
    description: "Test your understanding of environmental chemistry",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is environmental chemistry?",
        type: "short_answer",
        answer_key: "The study of chemical processes in the environment",
        explanation: "Environmental chemistry studies chemical processes in the environment."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the two main gases in the atmosphere?",
        type: "short_answer",
        answer_key: "Nitrogen (78%) and Oxygen (21%)",
        explanation: "Nitrogen and oxygen are the main gases in the atmosphere."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the hydrosphere?",
        type: "short_answer",
        answer_key: "All the water on Earth",
        explanation: "The hydrosphere includes all water on Earth."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the greenhouse effect?",
        type: "short_answer",
        answer_key: "The warming of the Earth by greenhouse gases",
        explanation: "Greenhouse gases trap heat and warm the Earth."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Name three greenhouse gases.",
        type: "short_answer",
        answer_key: "CO₂, CH₄, N₂O (or H₂O)",
        explanation: "Carbon dioxide, methane, and nitrous oxide are greenhouse gases."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What causes acid rain?",
        type: "short_answer",
        answer_key: "SO₂ and NOₓ emissions",
        explanation: "Sulfur dioxide and nitrogen oxides cause acid rain."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What causes ozone depletion?",
        type: "short_answer",
        answer_key: "CFCs (chlorofluorocarbons)",
        explanation: "CFCs are the main cause of ozone depletion."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is eutrophication?",
        type: "short_answer",
        answer_key: "Nutrient enrichment leading to algal blooms and oxygen depletion",
        explanation: "Eutrophication is caused by excess nutrients in water."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the nitrogen cycle?",
        type: "short_answer",
        answer_key: "The movement of nitrogen through the environment",
        explanation: "The nitrogen cycle describes how nitrogen moves through the environment."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the carbon cycle?",
        type: "short_answer",
        answer_key: "The movement of carbon through the environment",
        explanation: "The carbon cycle describes how carbon moves through the environment."
      },
      {
        id: "ass_011",
        objective: "obj_014",
        difficulty: "hard",
        question: "What causes eutrophication?",
        type: "short_answer",
        answer_key: "Excess nitrates and phosphates",
        explanation: "Excess nutrients cause eutrophication."
      },
      {
        id: "ass_012",
        objective: "obj_019",
        difficulty: "hard",
        question: "What is green chemistry?",
        type: "short_answer",
        answer_key: "Chemistry that reduces environmental impact",
        explanation: "Green chemistry aims to reduce or eliminate environmental harm."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand environmental chemistry concepts",
        "Explain the greenhouse effect and climate change",
        "Identify causes and effects of pollution",
        "Understand green chemistry principles"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is environmental chemistry?" },
        { time: "5-10 min", activity: "Direct Instruction - Atmosphere and Hydrosphere" },
        { time: "10-15 min", activity: "Direct Instruction - Greenhouse Effect" },
        { time: "15-20 min", activity: "Direct Instruction - Acid Rain and Ozone Depletion" },
        { time: "20-25 min", activity: "Direct Instruction - Water and Air Pollution" },
        { time: "25-30 min", activity: "Direct Instruction - The Carbon Cycle" },
        { time: "30-35 min", activity: "Direct Instruction - Green Chemistry" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of chemical processes in the environment",
        prac_002: "Nitrogen",
        prac_003: "All the water on Earth",
        prac_004: "The warming of the Earth due to greenhouse gases",
        prac_005: "O₂",
        prac_006: "SO₂ and NOₓ",
        prac_007: "CFCs",
        prac_008: "Nutrient enrichment leading to algal blooms",
        prac_009: "The movement of nitrogen through the environment",
        prac_010: "The movement of carbon through the environment",
        prac_011: "Excess nitrates and phosphates",
        prac_012: "Chemistry that reduces environmental impact"
      },
      assessment: {
        ass_001: "The study of chemical processes in the environment",
        ass_002: "Nitrogen (78%) and Oxygen (21%)",
        ass_003: "All the water on Earth",
        ass_004: "The warming of the Earth by greenhouse gases",
        ass_005: "CO₂, CH₄, N₂O (or H₂O)",
        ass_006: "SO₂ and NOₓ emissions",
        ass_007: "CFCs (chlorofluorocarbons)",
        ass_008: "Nutrient enrichment leading to algal blooms and oxygen depletion",
        ass_009: "The movement of nitrogen through the environment",
        ass_010: "The movement of carbon through the environment",
        ass_011: "Excess nitrates and phosphates",
        ass_012: "Chemistry that reduces environmental impact"
      }
    },
    extensionActivities: [
      "Research the greenhouse effect and climate change",
      "Investigate water treatment processes",
      "Study the carbon cycle in detail",
      "Research green chemistry applications"
    ],
    differentiation: {
      struggling: [
        "Focus on basic environmental concepts",
        "Use visual aids",
        "Practice with simple examples",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the chemistry of climate change",
        "Study advanced water treatment methods",
        "Explore the chemistry of air pollution",
        "Investigate sustainable chemistry practices"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "The Carbon Cycle",
      description: "Diagram showing the carbon cycle",
      url: "/diagrams/carbon-cycle.png",
      alt: "Carbon cycle diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "The Greenhouse Effect",
      description: "Diagram showing the greenhouse effect",
      url: "/diagrams/greenhouse-effect.png",
      alt: "Greenhouse effect diagram"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Environmental Pollution",
      description: "Infographic showing types of pollution",
      url: "/diagrams/environmental-pollution.png",
      alt: "Environmental pollution infographic"
    }
  ]
};