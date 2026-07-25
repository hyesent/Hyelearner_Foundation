// Location: src/data/lessons/science/physics/energy_and_society.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_energy_and_society",
  subject: "Physics",
  topic: "Energy and Society",
  name: "Energy and Society",
  icon: "🔋",
  grade_level: "SS2 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of energy concepts",
    "Knowledge of energy forms",
    "Understanding of power generation",
    "Basic understanding of environmental issues"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Physics lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define energy and identify its various forms",
      indicator: "Student can list different forms of energy with examples"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the difference between renewable and non-renewable energy",
      indicator: "Student can classify energy sources as renewable or non-renewable"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the main sources of energy in Nigeria",
      indicator: "Student can name Nigeria's primary energy sources"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain how fossil fuels are formed and used",
      indicator: "Student can describe the formation and use of coal, oil, and natural gas"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain solar energy and its applications",
      indicator: "Student can describe how solar energy is harnessed and used"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain hydroelectric power generation",
      indicator: "Student can explain how hydropower generates electricity"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain wind and geothermal energy",
      indicator: "Student can describe how wind and geothermal energy are used"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Explain nuclear energy and its role in society",
      indicator: "Student can describe nuclear fission and its applications"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the environmental impact of different energy sources",
      indicator: "Student can explain the pros and cons of each energy source"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain energy conservation and efficiency",
      indicator: "Student can describe methods to conserve energy"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Compare Nigeria's energy situation with other countries",
      indicator: "Student can analyze Nigeria's energy challenges and opportunities"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Evaluate Nigeria's potential for renewable energy",
      indicator: "Student can assess renewable energy opportunities in Nigeria"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Energy and Society - Powering Our World",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about energy sources, their environmental impact, and Nigeria's energy future."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Energy and Society</h2>
      <p><strong>Energy</strong> is the ability to do work. It powers every aspect of modern society—from transportation and industry to homes and technology. Understanding energy sources is essential for sustainable development.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔋 Forms of Energy</h3>
          <ul>
            <li>✓ Thermal (Heat)</li>
            <li>✓ Mechanical (Kinetic/Potential)</li>
            <li>✓ Electrical</li>
            <li>✓ Chemical</li>
            <li>✓ Nuclear</li>
            <li>✓ Solar</li>
            <li>✓ Sound</li>
            <li>✓ Light</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🌍 Nigeria's Energy Mix</h3>
          <ul>
            <li>✓ Oil and Gas (80%)</li>
            <li>✓ Hydroelectric (15%)</li>
            <li>✓ Coal (3%)</li>
            <li>✓ Renewable (2%)</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Energy Concepts</h4>
        <ul>
          <li><strong>Energy source:</strong> Where energy comes from</li>
          <li><strong>Energy carrier:</strong> How energy is transported and used</li>
          <li><strong>Energy conversion:</strong> Changing energy from one form to another</li>
          <li><strong>Energy efficiency:</strong> Getting more useful work from less energy</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Renewable and Non-Renewable Energy",
        objective: "obj_002",
        text: `
          <h3>Types of Energy Sources</h3>
          <p>Energy sources are classified as either renewable or non-renewable.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>🌿 Renewable Energy</h4>
              <p><strong>Sources that can be replenished naturally.</strong></p>
              <ul>
                <li>✓ Solar</li>
                <li>✓ Wind</li>
                <li>✓ Hydroelectric (Water)</li>
                <li>✓ Geothermal (Earth's heat)</li>
                <li>✓ Biomass</li>
                <li>✓ Tidal/Wave</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>🛢️ Non-Renewable Energy</h4>
              <p><strong>Sources that cannot be replenished easily.</strong></p>
              <ul>
                <li>✗ Oil (Crude oil)</li>
                <li>✗ Natural Gas</li>
                <li>✗ Coal</li>
                <li>✗ Nuclear (Uranium)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Fossil Fuels",
        objective: "obj_004",
        text: `
          <h3>Fossil Fuels</h3>
          <p><strong>Fossil fuels</strong> are formed from the remains of ancient plants and animals over millions of years.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🛢️ Oil</h4>
              <ul>
                <li>✓ Formed from marine organisms</li>
                <li>✓ Used for transport, heating, plastics</li>
                <li>✓ Nigeria's main export</li>
                <li><strong>Pros:</strong> High energy density</li>
                <li><strong>Cons:</strong> Pollution, oil spills</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🔥 Natural Gas</h4>
              <ul>
                <li>✓ Formed from organic matter</li>
                <li>✓ Used for cooking, heating, electricity</li>
                <li>✓ Cleaner than coal and oil</li>
                <li><strong>Pros:</strong> Cleaner burning</li>
                <li><strong>Cons:</strong> GHG emissions, leaks</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>⛏️ Coal</h4>
              <ul>
                <li>✓ Formed from ancient forests</li>
                <li>✓ Used for electricity generation</li>
                <li>✓ Nigeria has coal reserves</li>
                <li><strong>Pros:</strong> Abundant</li>
                <li><strong>Cons:</strong> Very polluting</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Solar Energy",
        objective: "obj_005",
        text: `
          <h3>Solar Energy</h3>
          <p><strong>Solar energy</strong> is energy from the sun. It is the most abundant renewable energy source on Earth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Solar Applications:</h4>
              <ul>
                <li><strong>Photovoltaic (PV) cells:</strong> Convert sunlight directly to electricity</li>
                <li><strong>Solar thermal:</strong> Use sunlight to heat water or air</li>
                <li><strong>Concentrated solar power (CSP):</strong> Use mirrors to concentrate sunlight</li>
                <li><strong>Solar drying:</strong> Used for food preservation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nigeria's Solar Potential:</h4>
              <ul>
                <li>✓ Average solar radiation: 5-7 kWh/m²/day</li>
                <li>✓ Some of the highest in Africa</li>
                <li>✓ Northern Nigeria has the most potential</li>
                <li>✓ Solar could power rural areas</li>
                <li>✓ Government solar initiatives</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Hydroelectric Power",
        objective: "obj_006",
        text: `
          <h3>Hydroelectric Power</h3>
          <p><strong>Hydroelectric power</strong> uses the energy of flowing water to generate electricity.</p>
          
          <div class="example-box">
            <strong>📌 How It Works:</strong>
            <ul>
              <li>1. Water is stored behind a dam</li>
              <li>2. Water flows through turbines</li>
              <li>3. Turbines spin generators</li>
              <li>4. Electricity is produced</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Advantages:</h4>
              <ul>
                <li>✓ Renewable and clean</li>
                <li>✓ Reliable and controllable</li>
                <li>✓ Long lifespan</li>
                <li>✓ Can provide flood control</li>
                <li>✓ Provides water for irrigation</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Disadvantages:</h4>
              <ul>
                <li>✗ High construction cost</li>
                <li>✗ Displaces communities</li>
                <li>✗ Affects ecosystems</li>
                <li>✗ Dependent on rainfall</li>
                <li>✗ Siltation over time</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Nigeria's Hydroelectric Dams:</strong>
            <ul>
              <li>✓ <strong>Kainji Dam:</strong> 760 MW (Niger State)</li>
              <li>✓ <strong>Jebba Dam:</strong> 578 MW (Kwara State)</li>
              <li>✓ <strong>Shiroro Dam:</strong> 600 MW (Niger State)</li>
              <li>✓ <strong>Mambilla Dam:</strong> 3,050 MW (Planned, Taraba State)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Wind and Geothermal Energy",
        objective: "obj_007",
        text: `
          <h3>Wind and Geothermal Energy</h3>
          <p><strong>Wind energy</strong> uses the kinetic energy of wind to generate electricity. <strong>Geothermal energy</strong> uses heat from the Earth's interior.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>💨 Wind Energy</h4>
              <ul>
                <li>✓ Wind turbines convert wind to electricity</li>
                <li>✓ Clean and renewable</li>
                <li>✓ Nigeria's northern regions have wind potential</li>
                <li>✓ Offshore wind potential along the coast</li>
                <li><strong>Pros:</strong> No emissions, low operating cost</li>
                <li><strong>Cons:</strong> Intermittent, visual impact</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🌋 Geothermal Energy</h4>
              <ul>
                <li>✓ Uses heat from Earth's interior</li>
                <li>✓ Used for heating and electricity</li>
                <li>✓ Available 24/7 (baseload)</li>
                <li>✓ Nigeria has geothermal potential in the Chad Basin and elsewhere</li>
                <li><strong>Pros:</strong> Reliable, renewable</li>
                <li><strong>Cons:</strong> Limited locations, high cost</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Nuclear Energy",
        objective: "obj_008",
        text: `
          <h3>Nuclear Energy</h3>
          <p><strong>Nuclear energy</strong> is released during nuclear fission (splitting atoms) or fusion (joining atoms). Currently, only fission is used for power generation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Nuclear Fission:</h4>
              <ul>
                <li>✓ Uranium-235 or Plutonium-239</li>
                <li>✓ Nucleus splits into smaller nuclei</li>
                <li>✓ Releases enormous energy</li>
                <li>✓ Used in nuclear power plants</li>
                <li>✓ Nigeria is exploring nuclear energy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Pros and Cons:</h4>
              <ul>
                <li><strong>Pros:</strong></li>
                <li>✓ No greenhouse gas emissions</li>
                <li>✓ High energy density</li>
                <li>✓ Reliable baseload power</li>
                <li><strong>Cons:</strong></li>
                <li>✗ Radioactive waste</li>
                <li>✗ Nuclear accidents</li>
                <li>✗ Weapons proliferation</li>
                <li>✗ High cost</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Environmental Impact of Energy",
        objective: "obj_009",
        text: `
          <h3>Energy and the Environment</h3>
          <p>Different energy sources have different environmental impacts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>⚠️ Fossil Fuels:</h4>
              <ul>
                <li>✓ CO₂ emissions (climate change)</li>
                <li>✓ Air pollution (particulates, NOx)</li>
                <li>✓ Oil spills</li>
                <li>✓ Mining impacts</li>
                <li>✓ Non-renewable</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ Renewable Energy:</h4>
              <ul>
                <li>✓ Minimal emissions</li>
                <li>✓ Low environmental impact</li>
                <li>✓ Sustainable</li>
                <li>✓ Reduces import dependency</li>
                <li>✓ Creates jobs</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Global Warming and Climate Change:</strong>
            <ul>
              <li>✓ Greenhouse gases trap heat in the atmosphere</li>
              <li>✓ CO₂ from fossil fuels is the main contributor</li>
              <li>✓ Nigeria is vulnerable to climate change</li>
              <li>✓ Need to transition to clean energy</li>
              <li>✓ Paris Agreement commitments</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Energy Conservation and Nigeria's Energy Future",
        objective: "obj_010",
        text: `
          <h3>Energy Conservation</h3>
          <p><strong>Energy conservation</strong> means using less energy and using it more efficiently.</p>
          
          <div class="example-box">
            <strong>📌 Energy Conservation Tips:</strong>
            <ul>
              <li>✓ Use energy-efficient appliances</li>
              <li>✓ Turn off lights when not in use</li>
              <li>✓ Use LED bulbs</li>
              <li>✓ Insulate buildings</li>
              <li>✓ Use public transport</li>
              <li>✓ Use solar water heaters</li>
            </ul>
          </div>
          
          <h3>Nigeria's Energy Future</h3>
          <p>Nigeria faces energy challenges but also has great opportunities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>⚠️ Challenges:</h4>
              <ul>
                <li>✓ Energy poverty</li>
                <li>✓ Inadequate power supply</li>
                <li>✓ Aging infrastructure</li>
                <li>✓ Gas flaring</li>
                <li>✓ Environmental degradation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ Opportunities:</h4>
              <ul>
                <li>✓ Abundant solar energy</li>
                <li>✓ Large hydro potential</li>
                <li>✓ Natural gas resources</li>
                <li>✓ Wind energy potential</li>
                <li>✓ Renewable energy growth</li>
                <li>✓ Energy sector reforms</li>
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
          <h4>🔋 Energy Sources</h4>
          <ul>
            <li>✓ Renewable: Solar, Wind, Hydro, Geothermal</li>
            <li>✓ Non-renewable: Oil, Gas, Coal, Nuclear</li>
            <li>✓ Nigeria: Oil, Gas, Hydro</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🌍 Sustainable Future</h4>
          <ul>
            <li>✓ Transition to renewables</li>
            <li>✓ Energy conservation</li>
            <li>✓ Efficiency improvements</li>
            <li>✓ Nigeria has huge potential</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Renewable energy can completely replace fossil fuels immediately",
        correction: "The transition to renewable energy will take decades",
        explanation: "Infrastructure, technology, and economic factors require a gradual transition."
      },
      {
        id: "mis_002",
        misconception: "Solar energy doesn't work on cloudy days",
        correction: "Solar panels still work on cloudy days, just at reduced efficiency",
        explanation: "Modern solar panels can generate electricity even in overcast conditions."
      },
      {
        id: "mis_003",
        misconception: "Nigeria doesn't have renewable energy potential",
        correction: "Nigeria has abundant solar, hydro, and wind resources",
        explanation: "Nigeria has some of the best solar potential in Africa."
      },
      {
        id: "mis_004",
        misconception: "Nuclear energy is the cleanest energy source",
        correction: "Nuclear energy has no emissions but creates radioactive waste",
        explanation: "Nuclear waste disposal remains a major challenge."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Electricity Generation",
        description: "Understanding energy sources is essential for power generation.",
        example: "Different energy sources power the electricity grid."
      },
      {
        id: "app_002",
        title: "Sustainable Development",
        description: "Energy choices affect the environment and economy.",
        example: "Renewable energy creates jobs and reduces pollution."
      },
      {
        id: "app_003",
        title: "Climate Change Mitigation",
        description: "Reducing fossil fuel use helps combat climate change.",
        example: "Transitioning to renewables reduces greenhouse gas emissions."
      },
      {
        id: "app_004",
        title: "Energy Policy",
        description: "Governments must plan energy systems for the future.",
        example: "Energy policy affects security, economy, and environment."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Energy", definition: "The ability to do work." },
    { term: "Renewable Energy", definition: "Energy from sources that can be replenished naturally." },
    { term: "Non-Renewable Energy", definition: "Energy from sources that cannot be easily replenished." },
    { term: "Fossil Fuels", definition: "Energy sources formed from ancient organic matter." },
    { term: "Solar Energy", definition: "Energy from the sun." },
    { term: "Hydroelectric Power", definition: "Electricity generated from flowing water." },
    { term: "Geothermal Energy", definition: "Energy from the Earth's internal heat." },
    { term: "Nuclear Energy", definition: "Energy released from nuclear reactions." },
    { term: "Energy Conservation", definition: "Using less energy and using it efficiently." },
    { term: "Energy Efficiency", definition: "Getting more useful work from less energy." },
    { term: "Carbon Footprint", definition: "The total greenhouse gas emissions caused by an activity." },
    { term: "Sustainable Energy", definition: "Energy that meets present needs without compromising the future." }
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
      question: "What is energy?",
      type: "multiple_choice",
      options: [
        "The ability to do work",
        "The speed of an object",
        "The mass of an object",
        "The temperature of an object"
      ],
      answer: "The ability to do work",
      explanation: "Energy is defined as the ability to do work."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which of the following is a renewable energy source?",
      type: "multiple_choice",
      options: ["Oil", "Coal", "Solar", "Natural Gas"],
      answer: "Solar",
      explanation: "Solar energy is renewable because the sun will continue to provide energy."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which of the following is a non-renewable energy source?",
      type: "multiple_choice",
      options: ["Wind", "Solar", "Natural Gas", "Hydro"],
      answer: "Natural Gas",
      explanation: "Natural gas is a fossil fuel and non-renewable."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "What is Nigeria's primary source of energy?",
      type: "multiple_choice",
      options: ["Solar", "Oil and Gas", "Coal", "Nuclear"],
      answer: "Oil and Gas",
      explanation: "Nigeria's primary energy source is oil and natural gas."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "How are fossil fuels formed?",
      type: "multiple_choice",
      options: [
        "From the remains of ancient plants and animals",
        "From minerals in the earth",
        "From volcanic activity",
        "From ocean currents"
      ],
      answer: "From the remains of ancient plants and animals",
      explanation: "Fossil fuels are formed from the remains of ancient plants and animals over millions of years."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is solar energy used for?",
      type: "multiple_choice",
      options: [
        "Generating electricity and heating",
        "Only heating",
        "Only lighting",
        "Only transportation"
      ],
      answer: "Generating electricity and heating",
      explanation: "Solar energy is used for generating electricity (PV) and heating (solar thermal)."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is hydroelectric power?",
      type: "multiple_choice",
      options: [
        "Electricity from burning coal",
        "Electricity from flowing water",
        "Electricity from the sun",
        "Electricity from wind"
      ],
      answer: "Electricity from flowing water",
      explanation: "Hydroelectric power uses the energy of flowing water to generate electricity."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is geothermal energy?",
      type: "multiple_choice",
      options: [
        "Energy from the sun",
        "Energy from the Earth's internal heat",
        "Energy from wind",
        "Energy from water"
      ],
      answer: "Energy from the Earth's internal heat",
      explanation: "Geothermal energy uses heat from the Earth's interior."
    },
    {
      id: "prac_009",
      objective: "obj_004",
      difficulty: "hard",
      question: "Which fossil fuel is considered the cleanest?",
      type: "multiple_choice",
      options: ["Coal", "Oil", "Natural Gas", "Peat"],
      answer: "Natural Gas",
      explanation: "Natural gas burns more cleanly than coal and oil, producing less CO₂ per unit of energy."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "hard",
      question: "What type of reaction produces nuclear energy in power plants?",
      type: "multiple_choice",
      options: ["Fusion", "Fission", "Combustion", "Oxidation"],
      answer: "Fission",
      explanation: "Nuclear power plants currently use nuclear fission (splitting atoms) to generate energy."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the environmental impact of burning fossil fuels?",
      type: "multiple_choice",
      options: [
        "No impact",
        "Produces greenhouse gases",
        "Creates more oxygen",
        "Helps the environment"
      ],
      answer: "Produces greenhouse gases",
      explanation: "Burning fossil fuels produces greenhouse gases like CO₂, contributing to climate change."
    },
    {
      id: "prac_012",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is energy conservation?",
      type: "multiple_choice",
      options: [
        "Using more energy",
        "Using less energy efficiently",
        "Storing energy",
        "Creating energy"
      ],
      answer: "Using less energy efficiently",
      explanation: "Energy conservation means using less energy and using it more efficiently."
    },
    {
      id: "prac_013",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is Nigeria's energy challenge?",
      type: "multiple_choice",
      options: [
        "Too much energy",
        "Inadequate power supply and energy poverty",
        "Too many renewable sources",
        "No oil and gas"
      ],
      answer: "Inadequate power supply and energy poverty",
      explanation: "Nigeria faces challenges of inadequate power supply and energy poverty."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is Nigeria's main renewable energy opportunity?",
      type: "multiple_choice",
      options: ["Coal", "Nuclear", "Solar", "Tidal"],
      answer: "Solar",
      explanation: "Nigeria has abundant solar energy resources, making it a major opportunity."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which energy source produces no greenhouse gas emissions?",
      type: "multiple_choice",
      options: ["Coal", "Natural Gas", "Nuclear", "Oil"],
      answer: "Nuclear",
      explanation: "Nuclear energy produces no greenhouse gas emissions during operation."
    },
    {
      id: "prac_016",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the main cause of climate change?",
      type: "multiple_choice",
      options: [
        "Volcanic eruptions",
        "Burning fossil fuels",
        "Solar radiation",
        "Nuclear power"
      ],
      answer: "Burning fossil fuels",
      explanation: "The burning of fossil fuels is the main contributor to climate change."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_energy_and_society",
    title: "Energy and Society Quiz",
    description: "Test your understanding of energy and society",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is energy?",
        type: "short_answer",
        answer_key: "The ability to do work",
        explanation: "Energy is defined as the ability to do work."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between renewable and non-renewable energy?",
        type: "short_answer",
        answer_key: "Renewable energy can be replenished naturally; non-renewable cannot",
        explanation: "Renewable sources are naturally replenished, while non-renewable sources are finite."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give two examples of renewable energy sources.",
        type: "short_answer",
        answer_key: "Solar and wind (or hydro, geothermal, biomass)",
        explanation: "Solar, wind, hydro, geothermal, and biomass are renewable energy sources."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "How are fossil fuels formed?",
        type: "short_answer",
        answer_key: "From the remains of ancient plants and animals",
        explanation: "Fossil fuels are formed from the remains of ancient organisms over millions of years."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is solar energy used for?",
        type: "short_answer",
        answer_key: "Generating electricity and heating",
        explanation: "Solar energy is used for electricity generation and water/space heating."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Name one major hydroelectric dam in Nigeria.",
        type: "short_answer",
        answer_key: "Kainji Dam (or Jebba, Shiroro)",
        explanation: "Kainji, Jebba, and Shiroro are major hydroelectric dams in Nigeria."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What type of reaction is used in nuclear power plants?",
        type: "short_answer",
        answer_key: "Nuclear fission",
        explanation: "Nuclear power plants use nuclear fission (splitting atoms) to generate energy."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the environmental impact of burning fossil fuels?",
        type: "short_answer",
        answer_key: "Greenhouse gas emissions and air pollution",
        explanation: "Burning fossil fuels produces CO₂ and other pollutants that harm the environment."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is energy conservation?",
        type: "short_answer",
        answer_key: "Using less energy and using it efficiently",
        explanation: "Energy conservation involves reducing energy use and improving efficiency."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is Nigeria's main renewable energy opportunity?",
        type: "short_answer",
        answer_key: "Solar energy",
        explanation: "Nigeria has abundant solar resources, making it a major renewable energy opportunity."
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
        "Understand different energy sources",
        "Differentiate between renewable and non-renewable energy",
        "Analyze Nigeria's energy situation"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is energy?" },
        { time: "5-10 min", activity: "Direct Instruction - Renewable vs Non-renewable" },
        { time: "10-15 min", activity: "Direct Instruction - Fossil Fuels" },
        { time: "15-20 min", activity: "Direct Instruction - Solar and Hydro" },
        { time: "20-25 min", activity: "Direct Instruction - Nuclear and Other Sources" },
        { time: "25-30 min", activity: "Direct Instruction - Environmental Impact" },
        { time: "30-35 min", activity: "Direct Instruction - Nigeria's Energy Situation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The ability to do work",
        // ... full answer key
      },
      assessment: {
        ass_001: "The ability to do work",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research Nigeria's energy policy",
      "Create a presentation on renewable energy in Nigeria",
      "Investigate energy efficiency in your community",
      "Compare Nigeria's energy mix with another African country"
    ],
    differentiation: {
      struggling: [
        "Focus on the basic energy concepts first",
        "Use visual comparisons",
        "Use simple examples from daily life",
        "Provide a summary sheet"
      ],
      advanced: [
        "Research Nigeria's renewable energy policy",
        "Explore international energy agreements",
        "Investigate emerging energy technologies",
        "Analyze energy economics in Nigeria"
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
      title: "Energy Sources",
      description: "Diagram showing renewable and non-renewable energy sources",
      url: "/diagrams/energy-sources.png",
      alt: "Energy sources diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Nigeria's Energy Mix",
      description: "Chart showing Nigeria's energy sources",
      url: "/diagrams/nigeria-energy-mix.png",
      alt: "Nigeria's energy mix chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Energy Conservation Tips",
      description: "Infographic with energy conservation tips",
      url: "/diagrams/energy-conservation.png",
      alt: "Energy conservation infographic"
    }
  ]
};