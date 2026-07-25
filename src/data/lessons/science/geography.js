// Location: src/data/lessons/science/geography.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "geo_lesson_geography",
  subject: "Geography",
  topic: "Geography",
  name: "Geography",
  icon: "🌍",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 26,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic earth science",
    "Knowledge of maps and directions",
    "Basic understanding of climate",
    "Interest in the world around you"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Geography lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define geography and explain its branches",
      indicator: "Student can explain what geography is and its main branches"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the continents and oceans of the world",
      indicator: "Student can name the continents and oceans"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure of the Earth",
      indicator: "Student can describe the layers of the Earth"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the formation of landforms",
      indicator: "Student can describe mountains, valleys, and plateaus"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the rock cycle",
      indicator: "Student can explain how rocks are formed and transformed"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the water cycle",
      indicator: "Student can describe the stages of the water cycle"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe climate types and their characteristics",
      indicator: "Student can identify different climate zones"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the factors affecting climate",
      indicator: "Student can describe what influences climate"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain human geography concepts",
      indicator: "Student can describe population, settlement, and migration"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Describe map reading and interpretation",
      indicator: "Student can read and interpret maps"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Explain plate tectonics",
      indicator: "Student can describe continental drift and plate movements"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain volcanic and earthquake activity",
      indicator: "Student can describe the causes of volcanoes and earthquakes"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the impact of human activities on the environment",
      indicator: "Student can describe environmental issues"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concepts of globalization",
      indicator: "Student can describe how the world is connected"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe Nigeria's geography",
      indicator: "Student can describe Nigeria's physical and human geography"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of GIS and remote sensing",
      indicator: "Student can describe modern geographic technologies"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the causes and effects of climate change",
      indicator: "Student can discuss climate change impacts"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain sustainable development",
      indicator: "Student can describe sustainable practices"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Geography - The Study of Earth and Its People",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about physical geography, human geography, and the world around us."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Geography</h2>
      <p><strong>Geography</strong> is the study of the Earth's physical features, climate, and human populations. It examines the relationships between people and their environments, helping us understand our world and our place in it.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌍 Key Concepts</h3>
          <ul>
            <li>✓ Physical Geography</li>
            <li>✓ Human Geography</li>
            <li>✓ Continents and Oceans</li>
            <li>✓ Earth's Structure</li>
            <li>✓ Landforms</li>
            <li>✓ Climate</li>
            <li>✓ Map Reading</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Africa is the second-largest continent</li>
            <li>• The Pacific Ocean is the largest ocean</li>
            <li>• Nigeria has 36 states and 1 territory</li>
            <li>• The Earth's surface is 71% water</li>
            <li>• Mount Everest is the highest mountain</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Geography Matters</h4>
        <p>Geography helps us understand our world, make sense of current events, and address global challenges like climate change and sustainable development.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Branches of Geography",
        objective: "obj_001",
        text: `
          <h3>Physical and Human Geography</h3>
          <p>Geography is divided into two main branches.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Geography</h4>
              <ul>
                <li>• <strong>Landforms:</strong> Mountains, valleys, plains</li>
                <li>• <strong>Climate:</strong> Weather patterns</li>
                <li>• <strong>Water bodies:</strong> Rivers, oceans, lakes</li>
                <li>• <strong>Soil and rocks:</strong> Composition</li>
                <li>• <strong>Vegetation:</strong> Forests, deserts</li>
                <li>• <strong>Natural disasters:</strong> Earthquakes, volcanoes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Human Geography</h4>
              <ul>
                <li>• <strong>Population:</strong> Distribution, density</li>
                <li>• <strong>Settlement:</strong> Cities, villages</li>
                <li>• <strong>Migration:</strong> Movement of people</li>
                <li>• <strong>Economy:</strong> Agriculture, industry</li>
                <li>• <strong>Culture:</strong> Traditions, language</li>
                <li>• <strong>Politics:</strong> Boundaries, governance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Continents and Oceans",
        objective: "obj_002",
        text: `
          <h3>Continents and Oceans</h3>
          <p>The world is divided into seven continents and five oceans.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Continents (by size)</h4>
              <ul>
                <li>• <strong>Asia:</strong> Largest continent</li>
                <li>• <strong>Africa:</strong> Second largest</li>
                <li>• <strong>North America</strong></li>
                <li>• <strong>South America</strong></li>
                <li>• <strong>Antarctica:</strong> Coldest continent</li>
                <li>• <strong>Europe:</strong> Smallest continent</li>
                <li>• <strong>Australia:</strong> Smallest continent</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Oceans (by size)</h4>
              <ul>
                <li>• <strong>Pacific:</strong> Largest ocean</li>
                <li>• <strong>Atlantic:</strong> Second largest</li>
                <li>• <strong>Indian:</strong> Third largest</li>
                <li>• <strong>Southern/Antarctic</strong></li>
                <li>• <strong>Arctic:</strong> Smallest ocean</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">World Map - Continents</text>
              
              <!-- Simplified continents -->
              <g transform="translate(300, 160)">
                <!-- North America -->
                <rect x="-140" y="-60" width="60" height="80" rx="10" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                
                <!-- South America -->
                <rect x="-120" y="25" width="30" height="70" rx="8" fill="#66bb6a" stroke="#2e7d32" stroke-width="2"/>
                
                <!-- Europe -->
                <rect x="-50" y="-50" width="40" height="50" rx="8" fill="#42a5f5" stroke="#1565c0" stroke-width="2"/>
                
                <!-- Africa -->
                <rect x="-40" y="5" width="50" height="70" rx="8" fill="#ffb74d" stroke="#ef6c00" stroke-width="2"/>
                
                <!-- Asia -->
                <rect x="5" y="-60" width="80" height="90" rx="10" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                
                <!-- Australia -->
                <rect x="70" y="40" width="30" height="25" rx="5" fill="#ff8a65" stroke="#e65100" stroke-width="2"/>
                
                <!-- Labels -->
                <text x="-110" y="-75" text-anchor="middle" font-size="8" fill="#2e7d32">N. America</text>
                <text x="-105" y="110" text-anchor="middle" font-size="8" fill="#2e7d32">S. America</text>
                <text x="-30" y="-65" text-anchor="middle" font-size="8" fill="#1565c0">Europe</text>
                <text x="-15" y="90" text-anchor="middle" font-size="8" fill="#ef6c00">Africa</text>
                <text x="45" y="-80" text-anchor="middle" font-size="8" fill="#c62828">Asia</text>
                <text x="85" y="80" text-anchor="middle" font-size="8" fill="#e65100">Australia</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Structure of the Earth",
        objective: "obj_003",
        text: `
          <h3>The Earth's Structure</h3>
          <p>The Earth is composed of several layers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Layers of the Earth</h4>
              <ul>
                <li>• <strong>Crust:</strong> Outer layer, 5-70 km thick</li>
                <li>• <strong>Mantle:</strong> 2,900 km thick</li>
                <li>• <strong>Outer Core:</strong> Liquid iron and nickel</li>
                <li>• <strong>Inner Core:</strong> Solid iron and nickel</li>
                <li>• Temperature: Increases with depth</li>
                <li>• Pressure: Increases with depth</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Characteristics</h4>
              <ul>
                <li>• <strong>Crust:</strong> Solid, rocky</li>
                <li>• <strong>Mantle:</strong> Semi-solid, convects</li>
                <li>• <strong>Outer core:</strong> Liquid, generates magnetic field</li>
                <li>• <strong>Inner core:</strong> Solid, extremely hot</li>
                <li>• The lithosphere includes crust and upper mantle</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="400" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Structure of the Earth</text>
              
              <!-- Inner Core -->
              <circle cx="200" cy="200" r="25" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
              <text x="200" y="195" text-anchor="middle" font-size="8" fill="white">Inner</text>
              <text x="200" y="205" text-anchor="middle" font-size="8" fill="white">Core</text>
              
              <!-- Outer Core -->
              <circle cx="200" cy="200" r="55" fill="none" stroke="#ff8a65" stroke-width="30"/>
              <text x="200" y="145" text-anchor="middle" font-size="8" fill="#e65100">Outer Core</text>
              
              <!-- Mantle -->
              <circle cx="200" cy="200" r="105" fill="none" stroke="#ffb74d" stroke-width="50"/>
              <text x="120" y="130" text-anchor="middle" font-size="9" fill="#ef6c00">Mantle</text>
              
              <!-- Crust -->
              <circle cx="200" cy="200" r="150" fill="none" stroke="#66bb6a" stroke-width="20"/>
              <text x="300" y="130" text-anchor="middle" font-size="9" fill="#2e7d32">Crust</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Plate Tectonics",
        objective: "obj_011",
        text: `
          <h3>Plate Tectonics</h3>
          <p>The Earth's crust is divided into plates that move over the mantle.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Lithosphere:</strong> Crust and upper mantle</li>
                <li>• <strong>Asthenosphere:</strong> Partially molten mantle</li>
                <li>• <strong>Divergent boundaries:</strong> Plates move apart</li>
                <li>• <strong>Convergent boundaries:</strong> Plates move together</li>
                <li>• <strong>Transform boundaries:</strong> Plates slide past</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Earthquakes:</strong> At plate boundaries</li>
                <li>• <strong>Volcanoes:</strong> At plate boundaries</li>
                <li>• <strong>Mountains:</strong> Formed by convergence</li>
                <li>• <strong>Ocean trenches:</strong> Deep sea features</li>
                <li>• <strong>Continental drift:</strong> Movement over time</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Landforms",
        objective: "obj_004",
        text: `
          <h3>Major Landforms</h3>
          <p>Landforms are natural features of the Earth's surface.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Mountains</h4>
              <ul>
                <li>• Elevated land</li>
                <li>• > 600 meters high</li>
                <li>• Formed by tectonic activity</li>
                <li>• Examples: Himalayas, Alps</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Plateaus</h4>
              <ul>
                <li>• Flat elevated land</li>
                <li>• Steep sides</li>
                <li>• Formed by uplift</li>
                <li>• Examples: Tibetan Plateau</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Plains</h4>
              <ul>
                <li>• Low, flat land</li>
                <li>• Good for farming</li>
                <li>• Formed by deposition</li>
                <li>• Examples: Niger Delta</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Valleys</h4>
              <ul>
                <li>• Low areas between hills</li>
                <li>• Often with rivers</li>
                <li>• Formed by erosion</li>
                <li>• V-shaped or U-shaped</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Deserts</h4>
              <ul>
                <li>• Very dry areas</li>
                <li>• Less than 250mm rain</li>
                <li>• Sand or rock</li>
                <li>• Examples: Sahara</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Coastal Features</h4>
              <ul>
                <li>• Coastlines, beaches</li>
                <li>• Cliffs, bays</li>
                <li>• Formed by wave action</li>
                <li>• Examples: Delta, lagoon</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Climate and Weather",
        objective: "obj_007",
        text: `
          <h3>Climate and Weather</h3>
          <p>Climate is the long-term pattern of weather in a region.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Climate Zones</h4>
              <ul>
                <li>• <strong>Tropical:</strong> Hot, wet (near equator)</li>
                <li>• <strong>Temperate:</strong> Four seasons</li>
                <li>• <strong>Polar:</strong> Very cold (poles)</li>
                <li>• <strong>Arid:</strong> Desert (Sahara)</li>
                <li>• <strong>Mediterranean:</strong> Hot, dry summers</li>
                <li>• <strong>Continental:</strong> Extreme temperatures</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Factors Affecting Climate</h4>
              <ul>
                <li>• <strong>Latitude:</strong> Distance from equator</li>
                <li>• <strong>Altitude:</strong> Height above sea level</li>
                <li>• <strong>Distance from sea:</strong> Coastal vs inland</li>
                <li>• <strong>Ocean currents:</strong> Warm/cold currents</li>
                <li>• <strong>Prevailing winds:</strong> Wind patterns</li>
                <li>• <strong>Vegetation:</strong> Forest, desert</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Population Geography",
        objective: "obj_009",
        text: `
          <h3>Population Geography</h3>
          <p>Population geography studies the distribution and characteristics of people.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Population density:</strong> People per area</li>
                <li>• <strong>Birth rate:</strong> Live births per 1000</li>
                <li>• <strong>Death rate:</strong> Deaths per 1000</li>
                <li>• <strong>Population growth:</strong> Increase/decrease</li>
                <li>• <strong>Life expectancy:</strong> Average lifespan</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Population Distribution</h4>
              <ul>
                <li>• <strong>Dense:</strong> Cities, fertile areas</li>
                <li>• <strong>Sparse:</strong> Deserts, mountains</li>
                <li>• <strong>Migration:</strong> Movement of people</li>
                <li>• <strong>Urbanization:</strong> Movement to cities</li>
                <li>• <strong>Factors:</strong> Climate, resources, economy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Map Reading",
        objective: "obj_010",
        text: `
          <h3>Map Reading</h3>
          <p>Maps are essential tools for geographers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Map Elements</h4>
              <ul>
                <li>• <strong>Title:</strong> What the map shows</li>
                <li>• <strong>Key/Legend:</strong> Symbols explained</li>
                <li>• <strong>Scale:</strong> Relationship to real world</li>
                <li>• <strong>Compass rose:</strong> Direction</li>
                <li>• <strong>Grid lines:</strong> Coordinates</li>
                <li>• <strong>Contour lines:</strong> Elevation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Maps</h4>
              <ul>
                <li>• <strong>Political maps:</strong> Borders</li>
                <li>• <strong>Physical maps:</strong> Landforms</li>
                <li>• <strong>Thematic maps:</strong> Specific themes</li>
                <li>• <strong>Topographic maps:</strong> Elevation</li>
                <li>• <strong>Road maps:</strong> Transportation</li>
                <li>• <strong>Weather maps:</strong> Climate data</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Nigeria's Geography",
        objective: "obj_015",
        text: `
          <h3>Geography of Nigeria</h3>
          <p>Nigeria is a diverse country with varied geography.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Features</h4>
              <ul>
                <li>• <strong>Location:</strong> West Africa</li>
                <li>• <strong>Area:</strong> 923,768 km²</li>
                <li>• <strong>Capital:</strong> Abuja</li>
                <li>• <strong>Major rivers:</strong> Niger, Benue</li>
                <li>• <strong>Mountains:</strong> Jos Plateau, Chappal Waddi</li>
                <li>• <strong>Coastline:</strong> Gulf of Guinea</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Regions</h4>
              <ul>
                <li>• <strong>North:</strong> Sahel, savanna</li>
                <li>• <strong>South:</strong> Rainforest, delta</li>
                <li>• <strong>West:</strong> Yoruba states</li>
                <li>• <strong>East:</strong> Igbo states</li>
                <li>• <strong>Middle Belt:</strong> Diverse cultures</li>
                <li>• <strong>Niger Delta:</strong> Oil region</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Environmental Issues",
        objective: "obj_013",
        text: `
          <h3>Environmental Issues</h3>
          <p>Human activities have significant impacts on the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Issues</h4>
              <ul>
                <li>• <strong>Climate change:</strong> Global warming</li>
                <li>• <strong>Deforestation:</strong> Loss of forests</li>
                <li>• <strong>Pollution:</strong> Air, water, land</li>
                <li>• <strong>Desertification:</strong> Land degradation</li>
                <li>• <strong>Loss of biodiversity:</strong> Species extinction</li>
                <li>• <strong>Water scarcity:</strong> Limited water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Sustainable practices:</strong> Conservation</li>
                <li>• <strong>Renewable energy:</strong> Solar, wind</li>
                <li>• <strong>Reforestation:</strong> Planting trees</li>
                <li>• <strong>Pollution control:</strong> Regulations</li>
                <li>• <strong>Education:</strong> Awareness</li>
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
          <h4>🌍 Geography</h4>
          <ul>
            <li>• Physical and Human Geography</li>
            <li>• Continents: 7, Oceans: 5</li>
            <li>• Earth's layers: Crust, Mantle, Core</li>
            <li>• Landforms: Mountains, plains, plateaus</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Topics</h4>
          <ul>
            <li>• Climate and weather patterns</li>
            <li>• Population and settlement</li>
            <li>• Map reading and interpretation</li>
            <li>• Environmental challenges</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Geography helps us understand our world, its challenges, and how we can protect it for future generations.</p>
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
        explanation: "Weather is day-to-day; climate is the average over 30+ years."
      },
      {
        id: "mis_002",
        misconception: "The Earth is solid throughout",
        correction: "The Earth has layers including liquid outer core",
        explanation: "The outer core is liquid, generating the magnetic field."
      },
      {
        id: "mis_003",
        misconception: "Continents don't move",
        correction: "Continents move through plate tectonics",
        explanation: "Plate tectonics explains continental drift."
      },
      {
        id: "mis_004",
        misconception: "Geography is just about maps",
        correction: "Geography covers many topics",
        explanation: "Geography includes physical features, climate, people, and environments."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Urban Planning",
        description: "Geography helps plan cities.",
        example: "Infrastructure, zoning, transportation"
      },
      {
        id: "app_002",
        title: "Environmental Management",
        description: "Geography helps manage resources.",
        example: "Conservation, sustainable development"
      },
      {
        id: "app_003",
        title: "Disaster Response",
        description: "Geography helps prepare for disasters.",
        example: "Earthquake, flood, hurricane planning"
      },
      {
        id: "app_004",
        title: "International Relations",
        description: "Geography helps understand global issues.",
        example: "Trade, boundaries, resources"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Geography", definition: "The study of the Earth and its people." },
    { term: "Physical Geography", definition: "Study of Earth's natural features." },
    { term: "Human Geography", definition: "Study of human populations and activities." },
    { term: "Continent", definition: "A large landmass." },
    { term: "Ocean", definition: "A large body of salt water." },
    { term: "Crust", definition: "The Earth's outer layer." },
    { term: "Mantle", definition: "The layer below the crust." },
    { term: "Core", definition: "The Earth's center." },
    { term: "Plate Tectonics", definition: "Movement of Earth's plates." },
    { term: "Climate", definition: "Long-term weather patterns." },
    { term: "Landform", definition: "A natural feature of the Earth's surface." },
    { term: "Map", definition: "A representation of an area." },
    { term: "Scale", definition: "The relationship between map and real world." },
    { term: "Population", definition: "The number of people in an area." },
    { term: "Migration", definition: "Movement of people." },
    { term: "Urbanization", definition: "Movement to cities." },
    { term: "Desertification", definition: "Land becoming desert." },
    { term: "Deforestation", definition: "Clearing of forests." },
    { term: "Globalization", definition: "Worldwide integration." },
    { term: "GIS", definition: "Geographic Information System." }
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
      question: "What is geography?",
      type: "multiple_choice",
      options: [
        "The study of stars",
        "The study of the Earth and its people",
        "The study of animals",
        "The study of plants"
      ],
      answer: "The study of the Earth and its people",
      explanation: "Geography is the study of the Earth and its people."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How many continents are there?",
      type: "multiple_choice",
      options: ["5", "6", "7", "8"],
      answer: "7",
      explanation: "There are seven continents."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the outer layer of the Earth called?",
      type: "multiple_choice",
      options: ["Mantle", "Crust", "Core", "Asthenosphere"],
      answer: "Crust",
      explanation: "The crust is the Earth's outer layer."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a mountain?",
      type: "multiple_choice",
      options: [
        "A flat area of land",
        "An elevated area of land",
        "A low area between hills",
        "A body of water"
      ],
      answer: "An elevated area of land",
      explanation: "A mountain is an elevated area of land."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the rock cycle?",
      type: "multiple_choice",
      options: [
        "The formation of rocks",
        "The transformation of rocks between types",
        "The destruction of rocks",
        "The movement of rocks"
      ],
      answer: "The transformation of rocks between types",
      explanation: "The rock cycle describes how rocks change between types."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the water cycle?",
      type: "multiple_choice",
      options: [
        "The movement of water through the environment",
        "The formation of clouds",
        "The flow of rivers",
        "The tides"
      ],
      answer: "The movement of water through the environment",
      explanation: "The water cycle describes the movement of water."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which climate zone is near the equator?",
      type: "multiple_choice",
      options: ["Polar", "Temperate", "Tropical", "Arid"],
      answer: "Tropical",
      explanation: "The tropical climate zone is near the equator."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is plate tectonics?",
      type: "multiple_choice",
      options: [
        "The study of rocks",
        "The movement of Earth's plates",
        "The formation of mountains",
        "The study of volcanoes"
      ],
      answer: "The movement of Earth's plates",
      explanation: "Plate tectonics describes the movement of Earth's plates."
    },
    {
      id: "prac_009",
      objective: "obj_012",
      difficulty: "hard",
      question: "What causes earthquakes?",
      type: "multiple_choice",
      options: [
        "Volcanic eruptions",
        "Movement of tectonic plates",
        "Climate change",
        "Ocean currents"
      ],
      answer: "Movement of tectonic plates",
      explanation: "Earthquakes are caused by the movement of tectonic plates."
    },
    {
      id: "prac_010",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is deforestation?",
      type: "multiple_choice",
      options: [
        "The planting of trees",
        "The clearing of forests",
        "The protection of forests",
        "The study of trees"
      ],
      answer: "The clearing of forests",
      explanation: "Deforestation is the clearing of forests."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is globalization?",
      type: "multiple_choice",
      options: [
        "The separation of countries",
        "The worldwide integration of economies",
        "The isolation of nations",
        "The study of geography"
      ],
      answer: "The worldwide integration of economies",
      explanation: "Globalization is the worldwide integration of economies."
    },
    {
      id: "prac_012",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the capital of Nigeria?",
      type: "multiple_choice",
      options: ["Lagos", "Abuja", "Port Harcourt", "Kano"],
      answer: "Abuja",
      explanation: "Abuja is the capital of Nigeria."
    },
    {
      id: "prac_013",
      objective: "obj_016",
      difficulty: "hard",
      question: "What is GIS?",
      type: "multiple_choice",
      options: [
        "Global Information System",
        "Geographic Information System",
        "General Information System",
        "Geographic Intelligence System"
      ],
      answer: "Geographic Information System",
      explanation: "GIS stands for Geographic Information System."
    },
    {
      id: "prac_014",
      objective: "obj_017",
      difficulty: "hard",
      question: "What is a major cause of climate change?",
      type: "multiple_choice",
      options: [
        "Volcanic activity",
        "Burning of fossil fuels",
        "Ocean currents",
        "Solar radiation"
      ],
      answer: "Burning of fossil fuels",
      explanation: "Burning fossil fuels is a major cause of climate change."
    },
    {
      id: "prac_015",
      objective: "obj_018",
      difficulty: "hard",
      question: "What is sustainable development?",
      type: "multiple_choice",
      options: [
        "Using resources without regard for the future",
        "Meeting needs without compromising the future",
        "Ignoring environmental concerns",
        "Focusing only on economic growth"
      ],
      answer: "Meeting needs without compromising the future",
      explanation: "Sustainable development meets needs without compromising the future."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_geography",
    title: "Geography Quiz",
    description: "Test your understanding of geography",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is geography?",
        type: "short_answer",
        answer_key: "The study of the Earth and its people",
        explanation: "Geography is the study of the Earth and its people."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How many continents are there?",
        type: "short_answer",
        answer_key: "7",
        explanation: "There are seven continents."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the Earth's outer layer called?",
        type: "short_answer",
        answer_key: "Crust",
        explanation: "The crust is the Earth's outer layer."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a mountain?",
        type: "short_answer",
        answer_key: "An elevated area of land",
        explanation: "A mountain is an elevated area of land."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the water cycle?",
        type: "short_answer",
        answer_key: "The movement of water through the environment",
        explanation: "The water cycle describes the movement of water."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "Which climate zone is near the equator?",
        type: "short_answer",
        answer_key: "Tropical",
        explanation: "The tropical climate zone is near the equator."
      },
      {
        id: "ass_007",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is plate tectonics?",
        type: "short_answer",
        answer_key: "The movement of Earth's plates",
        explanation: "Plate tectonics describes the movement of Earth's plates."
      },
      {
        id: "ass_008",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is deforestation?",
        type: "short_answer",
        answer_key: "The clearing of forests",
        explanation: "Deforestation is the clearing of forests."
      },
      {
        id: "ass_009",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is the capital of Nigeria?",
        type: "short_answer",
        answer_key: "Abuja",
        explanation: "Abuja is the capital of Nigeria."
      },
      {
        id: "ass_010",
        objective: "obj_017",
        difficulty: "hard",
        question: "What is a major cause of climate change?",
        type: "short_answer",
        answer_key: "Burning of fossil fuels",
        explanation: "Burning fossil fuels is a major cause of climate change."
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
        "Understand geography and its branches",
        "Identify continents and oceans",
        "Explain Earth's structure and landforms",
        "Understand climate and environmental issues"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is geography?" },
        { time: "5-10 min", activity: "Direct Instruction - Branches of Geography" },
        { time: "10-15 min", activity: "Direct Instruction - Continents and Oceans" },
        { time: "15-20 min", activity: "Direct Instruction - Earth's Structure" },
        { time: "20-25 min", activity: "Direct Instruction - Landforms" },
        { time: "25-30 min", activity: "Direct Instruction - Climate" },
        { time: "30-35 min", activity: "Direct Instruction - Environmental Issues" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of the Earth and its people",
        prac_002: "7",
        prac_003: "Crust",
        prac_004: "An elevated area of land",
        prac_005: "The transformation of rocks between types",
        prac_006: "The movement of water through the environment",
        prac_007: "Tropical",
        prac_008: "The movement of Earth's plates",
        prac_009: "Movement of tectonic plates",
        prac_010: "The clearing of forests",
        prac_011: "The worldwide integration of economies",
        prac_012: "Abuja",
        prac_013: "Geographic Information System",
        prac_014: "Burning of fossil fuels",
        prac_015: "Meeting needs without compromising the future"
      },
      assessment: {
        ass_001: "The study of the Earth and its people",
        ass_002: "7",
        ass_003: "Crust",
        ass_004: "An elevated area of land",
        ass_005: "The movement of water through the environment",
        ass_006: "Tropical",
        ass_007: "The movement of Earth's plates",
        ass_008: "The clearing of forests",
        ass_009: "Abuja",
        ass_010: "Burning of fossil fuels"
      }
    },
    extensionActivities: [
      "Research Nigerian geography",
      "Study map reading",
      "Research climate change",
      "Study GIS technology"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research geographic information systems",
        "Study climate models",
        "Research international development",
        "Study environmental policy"
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
      title: "World Map",
      description: "Map showing continents",
      url: "/diagrams/world-map.png",
      alt: "World map diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Earth's Structure",
      description: "Diagram showing Earth's layers",
      url: "/diagrams/earth-structure.png",
      alt: "Earth structure diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Plate Tectonics",
      description: "Diagram showing plate tectonics",
      url: "/diagrams/plate-tectonics.png",
      alt: "Plate tectonics diagram"
    }
  ]
};