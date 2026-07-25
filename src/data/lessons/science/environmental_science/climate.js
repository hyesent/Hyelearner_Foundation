// Location: src/data/lessons/science/environmental_science/climate.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "env_lesson_climate",
  subject: "Environmental Science",
  topic: "Climate",
  name: "Climate",
  icon: "🌤️",
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
    "Understanding of weather",
    "Knowledge of the atmosphere",
    "Basic understanding of Earth's systems",
    "Understanding of the water cycle"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
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

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define climate and distinguish it from weather",
      indicator: "Student can explain the difference between climate and weather"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major climate zones of the world",
      indicator: "Student can name and describe the main climate zones"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the factors affecting climate",
      indicator: "Student can list factors that influence climate"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the greenhouse effect",
      indicator: "Student can describe the natural greenhouse effect"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain global warming and climate change",
      indicator: "Student can describe the causes and effects of climate change"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the evidence for climate change",
      indicator: "Student can provide evidence supporting climate change"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the difference between weather and climate",
      indicator: "Student can distinguish between weather and climate with examples"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the major climate classification systems",
      indicator: "Student can explain the Köppen climate classification"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the role of oceans in climate",
      indicator: "Student can describe how oceans influence climate"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the mechanisms of climate change",
      indicator: "Student can describe feedback loops and tipping points"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the impacts of climate change",
      indicator: "Student can describe environmental and social impacts"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain climate change mitigation strategies",
      indicator: "Student can describe how to reduce climate change"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain climate adaptation strategies",
      indicator: "Student can describe how to adapt to climate change"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the role of international agreements",
      indicator: "Student can discuss the Paris Agreement and IPCC"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the concept of climate justice",
      indicator: "Student can discuss the ethical dimensions of climate change"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the future projections of climate change",
      indicator: "Student can discuss climate models and future scenarios"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Climate - The Earth's Changing Atmosphere",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about climate, climate change, and how it affects our planet."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Climate</h2>
      <p><strong>Climate</strong> is the long-term pattern of weather conditions in a particular area. It is determined by factors such as temperature, precipitation, wind, and humidity over extended periods (typically 30 years or more). Understanding climate is essential for predicting and adapting to environmental changes.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌤️ Key Concepts</h3>
          <ul>
            <li>✓ Climate vs Weather</li>
            <li>✓ Climate Zones</li>
            <li>✓ Greenhouse Effect</li>
            <li>✓ Global Warming</li>
            <li>✓ Climate Change</li>
            <li>✓ Mitigation & Adaptation</li>
            <li>✓ Climate Justice</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The Earth has warmed by 1.1°C since 1880</li>
            <li>• 2023 was the warmest year on record</li>
            <li>• CO₂ levels are at their highest in 800,000 years</li>
            <li>• The 10 warmest years have occurred since 2010</li>
            <li>• Climate change affects every country</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Climate Matters</h4>
        <p>Climate determines where we can live, what we can grow, and how we live our lives. Climate change is the greatest environmental challenge of our time.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Weather vs Climate",
        objective: "obj_001",
        text: `
          <h3>Weather vs Climate</h3>
          <p>Understanding the difference between weather and climate is fundamental.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Weather</h4>
              <ul>
                <li>• Short-term conditions</li>
                <li>• Day-to-day changes</li>
                <li>• Hours to weeks</li>
                <li>• Local scale</li>
                <li>• Example: "It's raining today"</li>
                <li>• Unpredictable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Climate</h4>
              <ul>
                <li>• Long-term patterns</li>
                <li>• Average over 30+ years</li>
                <li>• Decades to centuries</li>
                <li>• Regional to global scale</li>
                <li>• Example: "The UK has a temperate climate"</li>
                <li>• Predictable trends</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Analogy:</strong>
            <ul>
              <li>• <strong>Weather:</strong> Your mood today</li>
              <li>• <strong>Climate:</strong> Your personality</li>
              <li>• Weather changes day-to-day; climate is the long-term pattern</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Climate Zones",
        objective: "obj_002",
        text: `
          <h3>Major Climate Zones</h3>
          <p>Earth has several distinct climate zones based on latitude, temperature, and precipitation.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🌡️ Tropical</h4>
              <ul>
                <li>• Near the equator</li>
                <li>• Hot year-round</li>
                <li>• High rainfall</li>
                <li>• Examples: Amazon, Congo Basin</li>
                <li>• Rainforests</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🌿 Temperate</h4>
              <ul>
                <li>• Mid-latitudes</li>
                <li>• Four seasons</li>
                <li>• Moderate temperatures</li>
                <li>• Examples: Europe, USA</li>
                <li>• Deciduous forests</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>❄️ Polar</h4>
              <ul>
                <li>• Near the poles</li>
                <li>• Very cold</li>
                <li>• Low precipitation</li>
                <li>• Examples: Arctic, Antarctica</li>
                <li>• Ice caps, tundra</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🏜️ Arid</h4>
              <ul>
                <li>• Desert regions</li>
                <li>• Very dry</li>
                <li>• Extreme temperatures</li>
                <li>• Examples: Sahara, Australia</li>
                <li>• Deserts</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>🌾 Dry</h4>
              <ul>
                <li>• Semi-arid</li>
                <li>• Low rainfall</li>
                <li>• Grasslands</li>
                <li>• Examples: Savannas, steppes</li>
                <li>• Grasslands, scrub</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🏔️ Highland</h4>
              <ul>
                <li>• Mountain regions</li>
                <li>• Temperature varies with altitude</li>
                <li>• Snow at high elevations</li>
                <li>• Examples: Himalayas, Andes</li>
                <li>• Alpine tundra</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Factors Affecting Climate",
        objective: "obj_003",
        text: `
          <h3>Factors Affecting Climate</h3>
          <p>Several factors influence the climate of a region.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Factors</h4>
              <ul>
                <li>• <strong>Latitude:</strong> Distance from equator</li>
                <li>• <strong>Altitude:</strong> Height above sea level</li>
                <li>• <strong>Proximity to water:</strong> Coastal vs inland</li>
                <li>• <strong>Ocean currents:</strong> Warm/cold currents</li>
                <li>• <strong>Prevailing winds:</strong> Wind patterns</li>
                <li>• <strong>Topography:</strong> Mountains, valleys</li>
                <li>• <strong>Vegetation:</strong> Forests, deserts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Latitude:</strong> Equator = hot, Poles = cold</li>
                <li>• <strong>Altitude:</strong> Mountains = colder</li>
                <li>• <strong>Coastal:</strong> Mild temperatures</li>
                <li>• <strong>Ocean currents:</strong> Gulf Stream warms UK</li>
                <li>• <strong>Rain shadow:</strong> Mountains block rain</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Greenhouse Effect",
        objective: "obj_004",
        text: `
          <h3>The Greenhouse Effect</h3>
          <p>The <strong>greenhouse effect</strong> is the natural process that warms the Earth's surface. It is essential for life but is being enhanced by human activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How It Works</h4>
              <ul>
                <li>1. Sunlight passes through atmosphere</li>
                <li>2. Earth's surface absorbs heat</li>
                <li>3. Earth emits infrared radiation</li>
                <li>4. Greenhouse gases trap the heat</li>
                <li>5. Earth warms</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Greenhouse Gases</h4>
              <ul>
                <li>• <strong>CO₂:</strong> Carbon dioxide</li>
                <li>• <strong>CH₄:</strong> Methane</li>
                <li>• <strong>N₂O:</strong> Nitrous oxide</li>
                <li>• <strong>H₂O:</strong> Water vapor</li>
                <li>• <strong>CFCs:</strong> Chlorofluorocarbons</li>
                <li>• <strong>O₃:</strong> Ozone</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Greenhouse Effect</text>
              
              <!-- Sun -->
              <g transform="translate(80, 80)">
                <circle cx="0" cy="0" r="30" fill="#ffd54f" stroke="#f9a825" stroke-width="2"/>
                <text x="0" y="45" text-anchor="middle" font-size="12" fill="#f9a825">Sun</text>
              </g>
              
              <!-- Sun rays -->
              <path d="M110 70 L200 90" stroke="#ffd54f" stroke-width="2" stroke-dasharray="5,5"/>
              <path d="M110 80 L200 120" stroke="#ffd54f" stroke-width="2" stroke-dasharray="5,5"/>
              <path d="M110 90 L200 150" stroke="#ffd54f" stroke-width="2" stroke-dasharray="5,5"/>
              <path d="M110 100 L200 180" stroke="#ffd54f" stroke-width="2" stroke-dasharray="5,5"/>
              
              <!-- Atmosphere -->
              <g transform="translate(300, 160)">
                <ellipse cx="0" cy="0" rx="180" ry="100" fill="none" stroke="#4a90d9" stroke-width="3"/>
                <ellipse cx="0" cy="0" rx="160" ry="85" fill="none" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="6,4"/>
                <text x="0" y="-110" text-anchor="middle" font-size="11" fill="#1565c0">Atmosphere</text>
              </g>
              
              <!-- Earth -->
              <g transform="translate(300, 240)">
                <circle cx="0" cy="0" r="60" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <circle cx="-20" cy="-15" r="25" fill="#81c784" stroke="#2e7d32" stroke-width="1.5"/>
                <circle cx="15" cy="10" r="20" fill="#81c784" stroke="#2e7d32" stroke-width="1.5"/>
                <text x="0" y="80" text-anchor="middle" font-size="12" fill="#2e7d32">Earth</text>
              </g>
              
              <!-- Heat arrows -->
              <path d="M280 190 Q250 130 220 100" stroke="#ef5350" stroke-width="2" fill="none"/>
              <path d="M320 190 Q350 130 380 100" stroke="#ef5350" stroke-width="2" fill="none"/>
              <path d="M270 195 Q240 150 200 130" stroke="#ef5350" stroke-width="2" fill="none"/>
              <path d="M330 195 Q360 150 400 130" stroke="#ef5350" stroke-width="2" fill="none"/>
              
              <!-- Greenhouse gases labels -->
              <text x="140" y="130" font-size="9" fill="#ef5350">CO₂</text>
              <text x="440" y="130" font-size="9" fill="#ef5350">CH₄</text>
              <text x="120" y="150" font-size="9" fill="#ef5350">H₂O</text>
              <text x="460" y="150" font-size="9" fill="#ef5350">N₂O</text>
              
              <!-- Label -->
              <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1565c0">Greenhouse gases trap heat in the atmosphere</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Climate Change",
        objective: "obj_005",
        text: `
          <h3>Climate Change</h3>
          <p><strong>Climate change</strong> refers to long-term changes in temperature, precipitation, and other climate patterns. The current rapid warming is driven by human activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes</h4>
              <ul>
                <li>• <strong>Burning fossil fuels:</strong> Coal, oil, gas</li>
                <li>• <strong>Deforestation:</strong> Removes CO₂ sinks</li>
                <li>• <strong>Agriculture:</strong> Methane, N₂O</li>
                <li>• <strong>Industry:</strong> Emissions</li>
                <li>• <strong>Transport:</strong> Vehicle emissions</li>
                <li>• <strong>Waste:</strong> Landfills, methane</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Temperature rise:</strong> Global warming</li>
                <li>• <strong>Sea level rise:</strong> Melting ice</li>
                <li>• <strong>Extreme weather:</strong> Hurricanes, floods</li>
                <li>• <strong>Ecosystem disruption:</strong> Species extinction</li>
                <li>• <strong>Ocean acidification:</strong> CO₂ dissolving</li>
                <li>• <strong>Food security:</strong> Crop failures</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Evidence for Climate Change",
        objective: "obj_006",
        text: `
          <h3>Evidence for Climate Change</h3>
          <p>Multiple lines of evidence confirm that the climate is changing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Scientific Evidence</h4>
              <ul>
                <li>• <strong>Temperature records:</strong> Global warming</li>
                <li>• <strong>Ice core data:</strong> CO₂ levels</li>
                <li>• <strong>Glacier retreat:</strong> Melting ice</li>
                <li>• <strong>Sea level rise:</strong> Thermal expansion</li>
                <li>• <strong>Ocean acidification:</strong> CO₂ absorption</li>
                <li>• <strong>Species shifts:</strong> Migration patterns</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Observational Data</h4>
              <ul>
                <li>• <strong>Temperature:</strong> 1.1°C increase</li>
                <li>• <strong>CO₂:</strong> 420 ppm (highest in 800,000 years)</li>
                <li>• <strong>Sea level:</strong> 20 cm rise since 1900</li>
                <li>• <strong>Arctic ice:</strong> 40% loss since 1980</li>
                <li>• <strong>Extreme events:</strong> More frequent</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Impact of Climate Change",
        objective: "obj_011",
        text: `
          <h3>Impacts of Climate Change</h3>
          <p>Climate change affects every aspect of life on Earth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Environmental Impacts</h4>
              <ul>
                <li>• <strong>Ecosystems:</strong> Loss of biodiversity</li>
                <li>• <strong>Coral reefs:</strong> Bleaching</li>
                <li>• <strong>Forests:</strong> Increased fires</li>
                <li>• <strong>Permafrost:</strong> Thawing</li>
                <li>• <strong>Water scarcity:</strong> Droughts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Social and Economic Impacts</h4>
              <ul>
                <li>• <strong>Food security:</strong> Crop failures</li>
                <li>• <strong>Health:</strong> Heat-related illness</li>
                <li>• <strong>Migration:</strong> Climate refugees</li>
                <li>• <strong>Economy:</strong> Infrastructure damage</li>
                <li>• <strong>Conflict:</strong> Resource scarcity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Mitigation Strategies",
        objective: "obj_012",
        text: `
          <h3>Climate Change Mitigation</h3>
          <p><strong>Mitigation</strong> involves reducing greenhouse gas emissions to limit climate change.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Strategies</h4>
              <ul>
                <li>• <strong>Renewable energy:</strong> Solar, wind, hydro</li>
                <li>• <strong>Energy efficiency:</strong> Less energy use</li>
                <li>• <strong>Afforestation:</strong> Planting trees</li>
                <li>• <strong>Carbon capture:</strong> CO₂ removal</li>
                <li>• <strong>Electric vehicles:</strong> Zero emissions</li>
                <li>• <strong>Circular economy:</strong> Reduce, reuse, recycle</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Solar farms:</strong> Clean energy</li>
                <li>• <strong>EV charging:</strong> Electric vehicles</li>
                <li>• <strong>Reforestation:</strong> Forest restoration</li>
                <li>• <strong>Carbon pricing:</strong> Economic incentives</li>
                <li>• <strong>Green building:</strong> Energy-efficient</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Adaptation Strategies",
        objective: "obj_013",
        text: `
          <h3>Climate Change Adaptation</h3>
          <p><strong>Adaptation</strong> involves adjusting to the effects of climate change.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Strategies</h4>
              <ul>
                <li>• <strong>Flood defenses:</strong> Barriers, flood plains</li>
                <li>• <strong>Drought-resistant crops:</strong> Climate-smart agriculture</li>
                <li>• <strong>Water management:</strong> Conservation</li>
                <li>• <strong>Urban planning:</strong> Green cities</li>
                <li>• <strong>Early warning systems:</strong> Disaster preparedness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Coastal defenses:</strong> Sea walls</li>
                <li>• <strong>Rainwater harvesting:</strong> Water storage</li>
                <li>• <strong>Heatwave plans:</strong> Public health</li>
                <li>• <strong>Ecosystem restoration:</strong> Natural defenses</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "International Agreements",
        objective: "obj_014",
        text: `
          <h3>International Climate Agreements</h3>
          <p>Global cooperation is essential to address climate change.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Agreements</h4>
              <ul>
                <li>• <strong>UNFCCC (1992):</strong> Framework Convention</li>
                <li>• <strong>Kyoto Protocol (1997):</strong> Binding targets</li>
                <li>• <strong>Paris Agreement (2015):</strong> 1.5°C target</li>
                <li>• <strong>IPCC:</strong> Scientific assessment body</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• <strong>Paris Agreement:</strong> Limit warming to 1.5°C</li>
                <li>• <strong>NDCs:</strong> Nationally Determined Contributions</li>
                <li>• <strong>Net-zero:</strong> Carbon neutrality by 2050</li>
                <li>• <strong>Climate finance:</strong> Support for developing nations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Climate Justice",
        objective: "obj_015",
        text: `
          <h3>Climate Justice</h3>
          <p><strong>Climate justice</strong> recognizes that climate change affects different communities unequally.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Issues</h4>
              <ul>
                <li>• <strong>Vulnerable communities:</strong> Most affected</li>
                <li>• <strong>Developing countries:</strong> Least responsible</li>
                <li>• <strong>Indigenous peoples:</strong> Disproportionate impacts</li>
                <li>• <strong>Intergenerational equity:</strong> Future generations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Climate finance:</strong> Support for developing nations</li>
                <li>• <strong>Loss and damage:</strong> Compensation</li>
                <li>• <strong>Inclusive policies:</strong> All voices</li>
                <li>• <strong>Just transition:</strong> Fair energy transition</li>
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
          <h4>🌤️ Climate</h4>
          <ul>
            <li>• Long-term weather patterns</li>
            <li>• Different from short-term weather</li>
            <li>• Determined by latitude, altitude, and more</li>
            <li>• Affects ecosystems and human societies</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Climate Change</h4>
          <ul>
            <li>• Caused by greenhouse gas emissions</li>
            <li>• Evidence is overwhelming</li>
            <li>• Impacts are severe and widespread</li>
            <li>• Requires mitigation, adaptation, and justice</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Climate change is the defining challenge of our time. We must act now to protect our planet and future generations.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Weather and climate are the same",
        correction: "Weather is short-term; climate is long-term",
        explanation: "Weather changes daily; climate is the average over 30+ years."
      },
      {
        id: "mis_002",
        misconception: "The greenhouse effect is bad",
        correction: "The natural greenhouse effect is essential for life",
        explanation: "The enhanced greenhouse effect from human activities is the problem."
      },
      {
        id: "mis_003",
        misconception: "Climate change is natural",
        correction: "Current climate change is primarily human-caused",
        explanation: "The rapid warming since industrialization is driven by human emissions."
      },
      {
        id: "mis_004",
        misconception: "It's too late to act on climate change",
        correction: "Every action matters to limit warming",
        explanation: "Reducing emissions now prevents the worst impacts."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Agriculture",
        description: "Understanding climate helps farmers adapt.",
        example: "Climate-smart agriculture"
      },
      {
        id: "app_002",
        title: "Urban Planning",
        description: "Climate data informs city design.",
        example: "Green infrastructure, flood prevention"
      },
      {
        id: "app_003",
        title: "Policy Making",
        description: "Climate science guides policy.",
        example: "Emissions reductions, renewable energy mandates"
      },
      {
        id: "app_004",
        title: "Conservation",
        description: "Climate science helps protect biodiversity.",
        example: "Protected areas, species relocation"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Climate", definition: "Long-term average of weather conditions." },
    { term: "Weather", definition: "Short-term atmospheric conditions." },
    { term: "Greenhouse Effect", definition: "Trapping of heat by greenhouse gases." },
    { term: "Global Warming", definition: "Increase in Earth's average temperature." },
    { term: "Climate Change", definition: "Long-term changes in climate patterns." },
    { term: "Greenhouse Gases", definition: "Gases that trap heat (CO₂, CH₄, N₂O)." },
    { term: "Fossil Fuels", definition: "Coal, oil, and gas - major CO₂ sources." },
    { term: "Deforestation", definition: "Clearing of forests, reducing CO₂ absorption." },
    { term: "Mitigation", definition: "Reducing greenhouse gas emissions." },
    { term: "Adaptation", definition: "Adjusting to climate change impacts." },
    { term: "Climate Justice", definition: "Fair distribution of climate impacts and solutions." },
    { term: "Paris Agreement", definition: "International climate treaty." },
    { term: "IPCC", definition: "Intergovernmental Panel on Climate Change." },
    { term: "Net-Zero", definition: "Balance between emissions and removal of CO₂." },
    { term: "Carbon Footprint", definition: "Total greenhouse gas emissions." },
    { term: "Renewable Energy", definition: "Energy from renewable sources." },
    { term: "Sea Level Rise", definition: "Increase in global sea levels." },
    { term: "Climate Model", definition: "Computer simulation of climate." },
    { term: "Feedback Loop", definition: "Process that amplifies or dampens changes." },
    { term: "Tipping Point", definition: "Threshold beyond which change is irreversible." }
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
      question: "What is climate?",
      type: "multiple_choice",
      options: [
        "Day-to-day weather conditions",
        "Long-term average of weather conditions",
        "The current temperature",
        "The amount of rainfall today"
      ],
      answer: "Long-term average of weather conditions",
      explanation: "Climate is the long-term average of weather over 30+ years."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which climate zone is near the equator?",
      type: "multiple_choice",
      options: ["Polar", "Temperate", "Tropical", "Arid"],
      answer: "Tropical",
      explanation: "The tropical climate zone is located near the equator."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a factor affecting climate?",
      type: "multiple_choice",
      options: ["Latitude", "Color of buildings", "Population", "Roads"],
      answer: "Latitude",
      explanation: "Latitude is a key factor that affects climate."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the greenhouse effect?",
      type: "multiple_choice",
      options: [
        "The warming of Earth by greenhouse gases",
        "The cooling of Earth by clouds",
        "The effect of the ozone layer",
        "The reflection of sunlight"
      ],
      answer: "The warming of Earth by greenhouse gases",
      explanation: "The greenhouse effect warms Earth by trapping heat."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is climate change?",
      type: "multiple_choice",
      options: [
        "Seasonal weather variations",
        "Long-term changes in climate patterns",
        "Daily temperature changes",
        "A cooling of the Earth"
      ],
      answer: "Long-term changes in climate patterns",
      explanation: "Climate change refers to long-term changes in climate."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is evidence for climate change?",
      type: "multiple_choice",
      options: [
        "No evidence",
        "Temperature records and ice core data",
        "Weather forecasts",
        "Newspaper reports"
      ],
      answer: "Temperature records and ice core data",
      explanation: "Temperature records and ice core data provide evidence of climate change."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the difference between weather and climate?",
      type: "multiple_choice",
      options: [
        "Weather is long-term; climate is short-term",
        "Weather is short-term; climate is long-term",
        "They are the same",
        "Weather is global; climate is local"
      ],
      answer: "Weather is short-term; climate is long-term",
      explanation: "Weather is short-term conditions; climate is long-term patterns."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does the Köppen climate classification do?",
      type: "multiple_choice",
      options: [
        "Classifies climate zones",
        "Measures temperature",
        "Records rainfall",
        "Predicts weather"
      ],
      answer: "Classifies climate zones",
      explanation: "The Köppen classification system categorizes climate zones."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How do oceans affect climate?",
      type: "multiple_choice",
      options: [
        "They have no effect",
        "They moderate temperatures",
        "They cause global warming",
        "They stop climate change"
      ],
      answer: "They moderate temperatures",
      explanation: "Oceans moderate temperatures by absorbing and releasing heat."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a climate tipping point?",
      type: "multiple_choice",
      options: [
        "A point where climate change becomes irreversible",
        "The warmest day of the year",
        "The coldest month",
        "A weather forecast"
      ],
      answer: "A point where climate change becomes irreversible",
      explanation: "A tipping point is a threshold beyond which change is irreversible."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an impact of climate change?",
      type: "multiple_choice",
      options: [
        "Sea level rise",
        "More stable weather",
        "Less extreme events",
        "Cooler temperatures"
      ],
      answer: "Sea level rise",
      explanation: "Sea level rise is a major impact of climate change."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a mitigation strategy for climate change?",
      type: "multiple_choice",
      options: [
        "Building sea walls",
        "Planting trees",
        "Moving cities inland",
        "Adapting to heat"
      ],
      answer: "Planting trees",
      explanation: "Planting trees (afforestation) is a mitigation strategy."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is an adaptation strategy for climate change?",
      type: "multiple_choice",
      options: [
        "Reducing emissions",
        "Building flood defenses",
        "Using renewable energy",
        "Carbon capture"
      ],
      answer: "Building flood defenses",
      explanation: "Building flood defenses is an adaptation strategy."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the Paris Agreement?",
      type: "multiple_choice",
      options: [
        "A treaty to reduce emissions",
        "A weather forecast",
        "A temperature record",
        "A climate model"
      ],
      answer: "A treaty to reduce emissions",
      explanation: "The Paris Agreement is an international treaty to reduce emissions."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is climate justice?",
      type: "multiple_choice",
      options: [
        "Ignoring climate change",
        "Fair distribution of climate impacts and solutions",
        "Only focusing on developing countries",
        "Stopping all emissions"
      ],
      answer: "Fair distribution of climate impacts and solutions",
      explanation: "Climate justice addresses the unequal impacts of climate change."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_climate",
    title: "Climate Quiz",
    description: "Test your understanding of climate and climate change",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between weather and climate?",
        type: "short_answer",
        answer_key: "Weather is short-term; climate is long-term",
        explanation: "Weather is day-to-day; climate is the long-term average."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one major climate zone.",
        type: "short_answer",
        answer_key: "Tropical (or any valid)",
        explanation: "Tropical, temperate, polar, arid, and dry are major climate zones."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a factor affecting climate?",
        type: "short_answer",
        answer_key: "Latitude (or any valid)",
        explanation: "Latitude, altitude, and ocean currents affect climate."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the greenhouse effect?",
        type: "short_answer",
        answer_key: "The warming of Earth by greenhouse gases",
        explanation: "The greenhouse effect traps heat in the atmosphere."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is climate change?",
        type: "short_answer",
        answer_key: "Long-term changes in climate patterns",
        explanation: "Climate change refers to long-term shifts in temperature and weather patterns."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Give one example of evidence for climate change.",
        type: "short_answer",
        answer_key: "Temperature records (or any valid)",
        explanation: "Temperature records, ice core data, and glacier retreat provide evidence."
      },
      {
        id: "ass_007",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a climate tipping point?",
        type: "short_answer",
        answer_key: "A threshold beyond which change is irreversible",
        explanation: "A tipping point leads to irreversible changes in the climate."
      },
      {
        id: "ass_008",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is an impact of climate change?",
        type: "short_answer",
        answer_key: "Sea level rise (or any valid)",
        explanation: "Sea level rise, extreme weather, and ecosystem disruption are impacts."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is a mitigation strategy for climate change?",
        type: "short_answer",
        answer_key: "Reducing emissions (or any valid)",
        explanation: "Reducing emissions, renewable energy, and afforestation are mitigation strategies."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is an adaptation strategy for climate change?",
        type: "short_answer",
        answer_key: "Building flood defenses (or any valid)",
        explanation: "Building flood defenses, drought-resistant crops, and water management are adaptation strategies."
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
        "Understand climate and distinguish it from weather",
        "Explain the greenhouse effect",
        "Describe climate change and its impacts",
        "Understand mitigation and adaptation strategies"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is climate?" },
        { time: "5-10 min", activity: "Direct Instruction - Weather vs Climate" },
        { time: "10-15 min", activity: "Direct Instruction - Climate Zones" },
        { time: "15-20 min", activity: "Direct Instruction - Greenhouse Effect" },
        { time: "20-25 min", activity: "Direct Instruction - Climate Change" },
        { time: "25-30 min", activity: "Direct Instruction - Impacts" },
        { time: "30-35 min", activity: "Direct Instruction - Mitigation and Adaptation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Long-term average of weather conditions",
        prac_002: "Tropical",
        prac_003: "Latitude",
        prac_004: "The warming of Earth by greenhouse gases",
        prac_005: "Long-term changes in climate patterns",
        prac_006: "Temperature records and ice core data",
        prac_007: "Weather is short-term; climate is long-term",
        prac_008: "Classifies climate zones",
        prac_009: "They moderate temperatures",
        prac_010: "A point where climate change becomes irreversible",
        prac_011: "Sea level rise",
        prac_012: "Planting trees",
        prac_013: "Building flood defenses",
        prac_014: "A treaty to reduce emissions",
        prac_015: "Fair distribution of climate impacts and solutions"
      },
      assessment: {
        ass_001: "Weather is short-term; climate is long-term",
        ass_002: "Tropical (or any valid)",
        ass_003: "Latitude (or any valid)",
        ass_004: "The warming of Earth by greenhouse gases",
        ass_005: "Long-term changes in climate patterns",
        ass_006: "Temperature records (or any valid)",
        ass_007: "A threshold beyond which change is irreversible",
        ass_008: "Sea level rise (or any valid)",
        ass_009: "Reducing emissions (or any valid)",
        ass_010: "Building flood defenses (or any valid)"
      }
    },
    extensionActivities: [
      "Research local climate change impacts",
      "Study climate models",
      "Investigate renewable energy",
      "Research climate policy"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research climate science",
        "Study climate modeling",
        "Research climate policy",
        "Study the carbon cycle"
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
      title: "Greenhouse Effect",
      description: "Diagram showing the greenhouse effect",
      url: "/diagrams/greenhouse-effect.png",
      alt: "Greenhouse effect diagram"
    },
    {
      id: "vis_002",
      type: "map",
      title: "Climate Zones",
      description: "Map showing climate zones",
      url: "/diagrams/climate-zones.png",
      alt: "Climate zones map"
    },
    {
      id: "vis_003",
      type: "graph",
      title: "Temperature Rise",
      description: "Graph showing global temperature rise",
      url: "/diagrams/temperature-rise.png",
      alt: "Temperature rise graph"
    }
  ]
};