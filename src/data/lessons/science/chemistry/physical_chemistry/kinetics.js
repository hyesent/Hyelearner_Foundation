// Location: src/data/lessons/science/chemistry/physical_chemistry/kinetics.js

export default {
  id: "chem_lesson_kinetics",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Chemical Kinetics",
  icon: "⏱️",
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
    "Knowledge of collision theory",
    "Basic mathematical skills",
    "Understanding of graphs"
  ],

  nextLessons: [
    {
      name: "Chemical Equilibrium",
      file: "science/chemistry/physical_chemistry/equilibrium.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define chemical kinetics and explain its importance",
      indicator: "Student can explain what chemical kinetics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define rate of reaction and explain how it is measured",
      indicator: "Student can explain the concept of reaction rate"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the factors that affect reaction rates",
      indicator: "Student can list the factors affecting rate of reaction"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain collision theory in simple terms",
      indicator: "Student can explain that particles must collide to react"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain how concentration affects reaction rate",
      indicator: "Student can describe the effect of concentration on rate"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain how temperature affects reaction rate",
      indicator: "Student can describe the effect of temperature on rate"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain how surface area affects reaction rate",
      indicator: "Student can describe the effect of surface area on rate"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain how catalysts affect reaction rate",
      indicator: "Student can explain the role of catalysts in reactions"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Define activation energy and explain its significance",
      indicator: "Student can define activation energy and explain its role"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Draw and interpret reaction energy profiles",
      indicator: "Student can sketch and label reaction energy diagrams"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Understand and use the Arrhenius equation",
      indicator: "Student can use the Arrhenius equation to solve problems"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Determine the order of a reaction from experimental data",
      indicator: "Student can determine reaction order from data"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Derive and use rate equations",
      indicator: "Student can write and use rate equations"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Calculate rate constants from experimental data",
      indicator: "Student can calculate k from experimental data"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the concept of half-life in chemical reactions",
      indicator: "Student can define and calculate half-life"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze graphical data to determine reaction rates",
      indicator: "Student can interpret concentration-time graphs"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the mechanism of a reaction from kinetics data",
      indicator: "Student can propose a mechanism from kinetic data"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the effect of catalysts on activation energy",
      indicator: "Student can explain how catalysts lower activation energy"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Analyze the role of kinetics in industrial processes",
      indicator: "Student can apply kinetics to industrial applications"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Solve complex kinetics problems",
      indicator: "Student can combine multiple kinetics concepts"
    }
  ],

  video: {
    id: "vid_001",
    title: "Chemical Kinetics - Rate of Reaction",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about chemical kinetics, reaction rates, and factors affecting them."
  },

  content: {
    introduction: `
      <h2>What is Chemical Kinetics?</h2>
      <p><strong>Chemical kinetics</strong> is the branch of chemistry that studies the rates of chemical reactions and the factors that influence them. It explains how fast reactions occur and provides insight into the mechanisms of reactions.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⏱️ Rate of Reaction</h3>
          <ul>
            <li>• Change in concentration over time</li>
            <li>• Measured in mol/dm³/s</li>
            <li>• Tells us how fast a reaction proceeds</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">⚡ Collision Theory</h3>
          <ul>
            <li>• Particles must collide to react</li>
            <li>• Collisions must have sufficient energy</li>
            <li>• Correct orientation is needed</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Factors Affecting Rate</h3>
          <ul>
            <li>• Concentration</li>
            <li>• Temperature</li>
            <li>• Surface area</li>
            <li>• Catalysts</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Chemical Kinetics Overview</text>
          
          <!-- Reaction arrow -->
          <text x="180" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">Reactants</text>
          <path d="M260 90 L340 90" stroke="#2c3e50" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="300" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Rate of Reaction</text>
          <text x="420" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">Products</text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
            </marker>
          </defs>
          
          <!-- Rate equation box -->
          <rect x="80" y="130" width="200" height="45" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
          <text x="180" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#1565c0">Rate = Δ[Products]/Δt</text>
          <text x="180" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">or Rate = -Δ[Reactants]/Δt</text>
          
          <!-- Collision theory box -->
          <rect x="320" y="130" width="200" height="45" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="5"/>
          <text x="420" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2e7d32">Collision Theory</text>
          <text x="420" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#2e7d32">Particles must collide to react</text>
          
          <!-- Factors -->
          <text x="300" y="210" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Factors Affecting Reaction Rate</text>
          
          <rect x="50" y="230" width="110" height="40" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="5"/>
          <text x="105" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">Concentration</text>
          
          <rect x="175" y="230" width="110" height="40" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="5"/>
          <text x="230" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">Temperature</text>
          
          <rect x="300" y="230" width="110" height="40" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="5"/>
          <text x="355" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">Surface Area</text>
          
          <rect x="425" y="230" width="110" height="40" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5" rx="5"/>
          <text x="480" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">Catalysts</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Rate of Reaction",
        objective: "obj_002",
        text: `
          <h3>Rate of Reaction</h3>
          <p>The <strong>rate of reaction</strong> is the change in concentration of a reactant or product per unit time.</p>
          
          <div class="formula-box">
            <h4>📝 Rate of Reaction:</h4>
            <p><strong>Rate = Δ[Products]/Δt</strong></p>
            <ul>
              <li>Rate is measured in mol/dm³/s</li>
              <li>Δ[Products] = change in concentration of products</li>
              <li>Δt = change in time</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Measuring Rate</h4>
              <ul>
                <li><strong>Volume of gas produced:</strong></li>
                <li>• Measure gas collected over time</li>
                <li><strong>Mass loss:</strong></li>
                <li>• Measure mass decrease as gas escapes</li>
                <li><strong>Color change:</strong></li>
                <li>• Use a colorimeter</li>
                <li><strong>pH change:</strong></li>
                <li>• For acid-base reactions</li>
                <li><strong>Conductivity:</strong></li>
                <li>• For ionic reactions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p><strong>Calculate the rate of reaction if the concentration of a product increases from 0.2 M to 0.6 M in 20 seconds.</strong></p>
              <ul>
                <li>• Δ[Products] = 0.6 - 0.2 = 0.4 M</li>
                <li>• Δt = 20 s</li>
                <li>• Rate = 0.4/20</li>
                <li>• Rate = <strong>0.02 mol/dm³/s</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Collision Theory",
        objective: "obj_004",
        text: `
          <h3>Collision Theory</h3>
          <p><strong>Collision theory</strong> explains how chemical reactions occur and why rates differ.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>📌 Particles Must Collide</h4>
              <p>Reactions only happen when particles collide with each other.</p>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>📌 Sufficient Energy</h4>
              <p>Collisions must have enough energy to overcome the activation energy barrier.</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>📌 Correct Orientation</h4>
              <p>Particles must be correctly aligned for a reaction to occur.</p>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="500" height="300" fill="#f8f9fa" rx="10"/>
              <text x="250" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Collision Theory</text>
              
              <!-- Successful collision -->
              <g transform="translate(130, 150)">
                <text x="0" y="-70" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">Successful Collision</text>
                <circle cx="-30" cy="0" r="25" fill="#e74c3c" opacity="0.7"/>
                <circle cx="30" cy="0" r="25" fill="#3498db" opacity="0.7"/>
                <!-- Collision arrows -->
                <path d="M-60 0 L-40 0" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow2)"/>
                <path d="M60 0 L40 0" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow2)"/>
                <defs>
                  <marker id="arrow2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 z" fill="#2c3e50"/>
                  </marker>
                </defs>
                <!-- Products -->
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#2c3e50">→ Products formed</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#7f8c8d">Correct orientation + sufficient energy</text>
              </g>
              
              <!-- Unsuccessful collision -->
              <g transform="translate(370, 150)">
                <text x="0" y="-70" text-anchor="middle" font-size="12" font-weight="bold" fill="#c62828">Unsuccessful Collision</text>
                <circle cx="-30" cy="0" r="25" fill="#e74c3c" opacity="0.7"/>
                <circle cx="30" cy="0" r="25" fill="#3498db" opacity="0.7"/>
                <!-- Collision arrows (wrong direction) -->
                <path d="M-60 0 L-40 0" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow2)"/>
                <path d="M60 0 L40 0" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow2)"/>
                <!-- X mark -->
                <text x="0" y="35" text-anchor="middle" font-size="24" fill="#e74c3c">✗</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#7f8c8d">Incorrect orientation or insufficient energy</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Factors Affecting Reaction Rate",
        objective: "obj_003",
        text: `
          <h3>Factors Affecting Reaction Rate</h3>
          <p>Several factors influence the rate of a chemical reaction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Concentration</h4>
              <ul>
                <li>• <strong>Higher concentration → Faster rate</strong></li>
                <li>• More particles in a given volume</li>
                <li>• More frequent collisions</li>
                <li>• Rate ∝ [Reactant]</li>
                <li>• Example: HCl + marble chips</li>
                <li>• 2M HCl reacts faster than 1M HCl</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Temperature</h4>
              <ul>
                <li>• <strong>Higher temperature → Faster rate</strong></li>
                <li>• Particles move faster</li>
                <li>• More frequent collisions</li>
                <li>• More particles have sufficient energy</li>
                <li>• <strong>Rule of thumb:</strong> Rate doubles for every 10°C rise</li>
                <li>• Example: Food cooks faster at higher temperatures</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Surface Area</h4>
              <ul>
                <li>• <strong>Larger surface area → Faster rate</strong></li>
                <li>• More particles exposed to react</li>
                <li>• More collisions</li>
                <li>• Powders react faster than lumps</li>
                <li>• Example: Powdered sugar dissolves faster</li>
                <li>• Example: Marble chips vs powder with HCl</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Catalysts</h4>
              <ul>
                <li>• <strong>Catalysts increase reaction rate</strong></li>
                <li>• Provide an alternative pathway</li>
                <li>• Lower activation energy</li>
                <li>• Not consumed in the reaction</li>
                <li>• Specific to certain reactions</li>
                <li>• Example: Enzymes in biological systems</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Activation Energy",
        objective: "obj_009",
        text: `
          <h3>Activation Energy</h3>
          <p><strong>Activation energy (Ea)</strong> is the minimum energy required for a reaction to occur.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Reaction Energy Profile</text>
              
              <!-- Axes -->
              <line x1="80" y1="50" x2="80" y2="310" stroke="#2c3e50" stroke-width="2"/>
              <line x1="80" y1="310" x2="550" y2="310" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Y-axis label -->
              <text x="25" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50" transform="rotate(-90 25 180)">Energy (kJ/mol)</text>
              
              <!-- X-axis label -->
              <text x="315" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Reaction Progress</text>
              
              <!-- Reactants level -->
              <line x1="100" y1="250" x2="150" y2="250" stroke="#2c3e50" stroke-width="1.5" stroke-dasharray="4,4"/>
              <text x="130" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Reactants</text>
              
              <!-- Products level -->
              <line x1="450" y1="150" x2="500" y2="150" stroke="#2c3e50" stroke-width="1.5" stroke-dasharray="4,4"/>
              <text x="510" y="155" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Products</text>
              
              <!-- Reaction curve -->
              <path d="M100 250 Q180 80 300 100 Q420 120 480 150" stroke="#1565c0" stroke-width="3" fill="none"/>
              
              <!-- Peak -->
              <circle cx="300" cy="100" r="5" fill="#1565c0"/>
              <text x="300" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1565c0">Transition State</text>
              
              <!-- Activation energy arrow -->
              <line x1="150" y1="250" x2="270" y2="100" stroke="#e74c3c" stroke-width="2"/>
              <line x1="140" y1="250" x2="140" y2="100" stroke="#e74c3c" stroke-width="2"/>
              <path d="M140 100 L150 105 L140 110" fill="none" stroke="#e74c3c" stroke-width="2"/>
              <path d="M140 250 L150 245 L140 240" fill="none" stroke="#e74c3c" stroke-width="2"/>
              <text x="130" y="175" text-anchor="end" font-family="Arial, sans-serif" font-size="11" fill="#e74c3c">Ea</text>
              
              <!-- Enthalpy change arrow -->
              <line x1="490" y1="150" x2="490" y2="250" stroke="#2e7d32" stroke-width="2"/>
              <path d="M490 250 L495 240 L485 240" fill="none" stroke="#2e7d32" stroke-width="2"/>
              <path d="M490 150 L495 160 L485 160" fill="none" stroke="#2e7d32" stroke-width="2"/>
              <text x="510" y="210" font-family="Arial, sans-serif" font-size="11" fill="#2e7d32">ΔH</text>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>• <strong>Activation Energy (Ea):</strong> Energy barrier to overcome</li>
              <li>• <strong>Transition State:</strong> Highest energy point</li>
              <li>• <strong>ΔH:</strong> Enthalpy change of reaction</li>
              <li>• <strong>Exothermic:</strong> Products lower energy than reactants</li>
              <li>• <strong>Endothermic:</strong> Products higher energy than reactants</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Catalysts and Catalysis",
        objective: "obj_008",
        text: `
          <h3>Catalysts</h3>
          <p>A <strong>catalyst</strong> is a substance that increases the rate of a reaction without being consumed.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Effect of a Catalyst on Activation Energy</text>
              
              <!-- Axes -->
              <line x1="60" y1="50" x2="60" y2="300" stroke="#2c3e50" stroke-width="2"/>
              <line x1="60" y1="300" x2="550" y2="300" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Y-axis label -->
              <text x="20" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50" transform="rotate(-90 20 175)">Energy</text>
              
              <!-- Reactants -->
              <line x1="80" y1="240" x2="120" y2="240" stroke="#2c3e50" stroke-width="1"/>
              <text x="100" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Reactants</text>
              
              <!-- Products -->
              <line x1="480" y1="160" x2="520" y2="160" stroke="#2c3e50" stroke-width="1"/>
              <text x="540" y="165" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Products</text>
              
              <!-- Without catalyst -->
              <path d="M100 240 Q250 80 400 160" stroke="#e74c3c" stroke-width="3" fill="none"/>
              <text x="250" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">Without catalyst</text>
              
              <!-- With catalyst -->
              <path d="M100 240 Q250 180 400 160" stroke="#2ecc71" stroke-width="3" fill="none"/>
              <text x="250" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2ecc71">With catalyst</text>
              
              <!-- Activation energy labels -->
              <line x1="120" y1="240" x2="230" y2="80" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4,4"/>
              <text x="175" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">Ea (without)</text>
              
              <line x1="120" y1="240" x2="230" y2="180" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4,4"/>
              <text x="175" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2ecc71">Ea (with)</text>
            </svg>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Catalysts</h4>
              <ul>
                <li><strong>Homogeneous:</strong></li>
                <li>• Same phase as reactants</li>
                <li>• Example: H⁺ in ester hydrolysis</li>
                <li><strong>Heterogeneous:</strong></li>
                <li>• Different phase from reactants</li>
                <li>• Example: Pt in car catalytic converters</li>
                <li><strong>Enzymes:</strong></li>
                <li>• Biological catalysts</li>
                <li>• Highly specific</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Industrial Catalysts</h4>
              <ul>
                <li><strong>Haber Process:</strong></li>
                <li>• Iron catalyst for NH₃ production</li>
                <li><strong>Contact Process:</strong></li>
                <li>• Vanadium pentoxide for H₂SO₄</li>
                <li><strong>Catalytic Converters:</strong></li>
                <li>• Platinum, palladium, rhodium</li>
                <li>• Convert CO and NOx to CO₂ and N₂</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Rate Equations and Order of Reaction",
        objective: "obj_013",
        text: `
          <h3>Rate Equations</h3>
          <p>The <strong>rate equation</strong> relates the rate of reaction to the concentration of reactants.</p>
          
          <div class="formula-box">
            <h4>📝 Rate Equation:</h4>
            <p><strong>Rate = k[A]^m[B]^n</strong></p>
            <ul>
              <li>k = rate constant</li>
              <li>[A], [B] = concentrations</li>
              <li>m, n = orders of reaction</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>Zero Order</h4>
              <p>Rate = k</p>
              <p>Rate independent of concentration</p>
              <p>[A] does not affect rate</p>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>First Order</h4>
              <p>Rate = k[A]</p>
              <p>Rate ∝ [A]</p>
              <p>Doubling [A] doubles rate</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>Second Order</h4>
              <p>Rate = k[A]²</p>
              <p>Rate ∝ [A]²</p>
              <p>Doubling [A] quadruples rate</p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> For the reaction A + B → C, rate = k[A]²[B]. What is the order with respect to A, B, and overall?</li>
              <li><strong>Solution:</strong></li>
              <li>• Order w.r.t. A = 2 (second order)</li>
              <li>• Order w.r.t. B = 1 (first order)</li>
              <li>• Overall order = 2 + 1 = <strong>3 (third order)</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Graphical Analysis of Reaction Rates",
        objective: "obj_016",
        text: `
          <h3>Graphical Analysis</h3>
          <p>Graphs are used to determine reaction orders and rate constants.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="300" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Concentration-Time Graphs</text>
              
              <!-- Graph 1: Zero Order -->
              <g transform="translate(50, 50)">
                <text x="70" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#2c3e50">Zero Order</text>
                <rect x="0" y="20" width="140" height="120" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
                <line x1="10" y1="120" x2="130" y2="50" stroke="#e74c3c" stroke-width="2"/>
                <text x="70" y="155" text-anchor="middle" font-size="9" fill="#7f8c8d">Time</text>
                <text x="10" y="70" font-size="9" fill="#7f8c8d" transform="rotate(-90 10 70)">[A]</text>
              </g>
              
              <!-- Graph 2: First Order -->
              <g transform="translate(220, 50)">
                <text x="80" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#2c3e50">First Order</text>
                <rect x="0" y="20" width="160" height="120" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
                <path d="M10 120 Q40 100 80 80 Q120 60 150 40" stroke="#3498db" stroke-width="2" fill="none"/>
                <text x="80" y="155" text-anchor="middle" font-size="9" fill="#7f8c8d">Time</text>
                <text x="10" y="70" font-size="9" fill="#7f8c8d" transform="rotate(-90 10 70)">[A]</text>
              </g>
              
              <!-- Graph 3: Second Order -->
              <g transform="translate(410, 50)">
                <text x="80" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#2c3e50">Second Order</text>
                <rect x="0" y="20" width="160" height="120" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
                <path d="M10 120 Q20 110 40 95 Q80 70 140 40" stroke="#2ecc71" stroke-width="2" fill="none"/>
                <text x="80" y="155" text-anchor="middle" font-size="9" fill="#7f8c8d">Time</text>
                <text x="10" y="70" font-size="9" fill="#7f8c8d" transform="rotate(-90 10 70)">[A]</text>
              </g>
              
              <text x="300" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">The shape of the concentration-time graph indicates the order of reaction</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Half-Life",
        objective: "obj_015",
        text: `
          <h3>Half-Life of Reactions</h3>
          <p>The <strong>half-life (t₁/₂)</strong> is the time required for the concentration of a reactant to decrease to half its initial value.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 First Order Reactions</h4>
              <ul>
                <li>• t₁/₂ is constant</li>
                <li>• Independent of initial concentration</li>
                <li>• <strong>t₁/₂ = 0.693/k</strong></li>
                <li>• Example: Radioactive decay</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Zero and Second Order</h4>
              <ul>
                <li>• t₁/₂ depends on concentration</li>
                <li>• Not constant</li>
                <li>• Zero order: t₁/₂ = [A]₀/2k</li>
                <li>• Second order: t₁/₂ = 1/k[A]₀</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example - First Order:</strong>
            <ul>
              <li><strong>Problem:</strong> A first order reaction has a rate constant k = 0.693 s⁻¹. Calculate the half-life.</li>
              <li><strong>Solution:</strong></li>
              <li>t₁/₂ = 0.693/k = 0.693/0.693</li>
              <li>t₁/₂ = <strong>1.0 s</strong></li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⏱️ Kinetics Basics</h4>
          <ul>
            <li>• Rate = Δ[Products]/Δt</li>
            <li>• Collision Theory: particles must collide</li>
            <li>• Factors: concentration, temperature, surface area, catalysts</li>
            <li>• Activation Energy: energy barrier</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Advanced Concepts</h4>
          <ul>
            <li>• Rate equations: Rate = k[A]^m[B]^n</li>
            <li>• Order of reaction: zero, first, second</li>
            <li>• Half-life: t₁/₂ = 0.693/k (first order)</li>
            <li>• Catalysts lower activation energy</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Chemical kinetics is the study of how fast reactions occur, not just whether they occur. It has important industrial and biological applications.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Rate of reaction is constant throughout",
        correction: "Rate changes as concentrations change",
        explanation: "Rate usually decreases as reactants are consumed."
      },
      {
        id: "mis_002",
        misconception: "All reactions are faster at higher temperatures",
        correction: "Most are, but some reactions have temperature limits",
        explanation: "Enzymes can denature at high temperatures."
      },
      {
        id: "mis_003",
        misconception: "Catalysts are consumed in the reaction",
        correction: "Catalysts are not consumed and can be reused",
        explanation: "Catalysts lower activation energy without being used up."
      },
      {
        id: "mis_004",
        misconception: "All collisions lead to reactions",
        correction: "Only collisions with sufficient energy and correct orientation react",
        explanation: "This is the basis of collision theory."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Industrial Processes",
        description: "Kinetics is used to optimize production.",
        example: "Haber process, contact process, catalytic cracking."
      },
      {
        id: "app_002",
        title: "Medicine",
        description: "Drugs work through kinetics principles.",
        example: "Drug metabolism, enzyme inhibition."
      },
      {
        id: "app_003",
        title: "Food Science",
        description: "Kinetics explains food spoilage.",
        example: "Shelf-life determination, preservation."
      },
      {
        id: "app_004",
        title: "Environmental Science",
        description: "Kinetics is used in pollution control.",
        example: "Catalytic converters, waste treatment."
      }
    ]
  },

  keyTerms: [
    { term: "Chemical Kinetics", definition: "The study of reaction rates." },
    { term: "Rate of Reaction", definition: "Change in concentration per unit time." },
    { term: "Collision Theory", definition: "Reactions occur when particles collide with sufficient energy and correct orientation." },
    { term: "Activation Energy", definition: "The minimum energy required for a reaction to occur." },
    { term: "Catalyst", definition: "A substance that increases reaction rate without being consumed." },
    { term: "Rate Equation", definition: "Rate = k[A]^m[B]^n, relating rate to concentrations." },
    { term: "Order of Reaction", definition: "The exponent in the rate equation." },
    { term: "Rate Constant", definition: "k, a proportionality constant in the rate equation." },
    { term: "Half-life", definition: "The time for concentration to decrease to half its value." },
    { term: "Transition State", definition: "The highest energy state in a reaction." },
    { term: "Homogeneous Catalyst", definition: "A catalyst in the same phase as the reactants." },
    { term: "Heterogeneous Catalyst", definition: "A catalyst in a different phase from the reactants." },
    { term: "Enzyme", definition: "A biological catalyst." },
    { term: "Arrhenius Equation", definition: "k = Ae^(-Ea/RT), relating rate constant to temperature." },
    { term: "Exothermic Reaction", definition: "A reaction that releases heat (ΔH negative)." },
    { term: "Endothermic Reaction", definition: "A reaction that absorbs heat (ΔH positive)." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is chemical kinetics?",
      type: "multiple_choice",
      options: [
        "The study of energy changes in reactions",
        "The study of reaction rates",
        "The study of equilibrium",
        "The study of atomic structure"
      ],
      answer: "The study of reaction rates",
      explanation: "Chemical kinetics is the study of rates of chemical reactions."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How is rate of reaction measured?",
      type: "multiple_choice",
      options: [
        "mol/dm³/s",
        "g/s",
        "L/s",
        "K/s"
      ],
      answer: "mol/dm³/s",
      explanation: "Rate is measured in mol/dm³/s (concentration change per unit time)."
    },
    {
      id: "prac_003",
      objective: "obj_004",
      difficulty: "easy",
      question: "According to collision theory, what must particles do to react?",
      type: "multiple_choice",
      options: [
        "Touch each other",
        "Collide with sufficient energy",
        "Mix together",
        "Be in the same state"
      ],
      answer: "Collide with sufficient energy",
      explanation: "Particles must collide with sufficient energy and correct orientation."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "How does increasing concentration affect reaction rate?",
      type: "multiple_choice",
      options: [
        "Increases rate",
        "Decreases rate",
        "No effect",
        "Varies depending on reaction"
      ],
      answer: "Increases rate",
      explanation: "Higher concentration means more particles, leading to more collisions and a faster rate."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "How does increasing temperature affect reaction rate?",
      type: "multiple_choice",
      options: [
        "Increases rate",
        "Decreases rate",
        "No effect",
        "Varies depending on reaction"
      ],
      answer: "Increases rate",
      explanation: "Higher temperature means particles move faster, leading to more frequent and energetic collisions."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "Why does powdered marble react faster with acid than a lump?",
      type: "multiple_choice",
      options: [
        "Powder is more reactive",
        "Larger surface area",
        "Higher concentration",
        "Lower activation energy"
      ],
      answer: "Larger surface area",
      explanation: "Powder has a larger surface area, providing more sites for reaction."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the role of a catalyst?",
      type: "multiple_choice",
      options: [
        "Increases product yield",
        "Lowers activation energy",
        "Changes equilibrium",
        "Consumes reactants"
      ],
      answer: "Lowers activation energy",
      explanation: "Catalysts lower activation energy, providing an alternative reaction pathway."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is activation energy?",
      type: "multiple_choice",
      options: [
        "The energy released in a reaction",
        "The minimum energy for a reaction to occur",
        "The energy of products",
        "The energy of reactants"
      ],
      answer: "The minimum energy for a reaction to occur",
      explanation: "Activation energy is the minimum energy required for a reaction to proceed."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_013",
      difficulty: "hard",
      question: "For the rate equation rate = k[A]²[B], what is the overall order?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "Order = 2 + 1 = 3 (third order)."
    },
    {
      id: "prac_010",
      objective: "obj_013",
      difficulty: "hard",
      question: "If rate = k[A] and [A] is doubled, what happens to the rate?",
      type: "multiple_choice",
      options: [
        "Doubles",
        "Quadruples",
        "Halves",
        "Stays the same"
      ],
      answer: "Doubles",
      explanation: "First order means rate ∝ [A], so doubling [A] doubles the rate."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "In a first order reaction, k = 0.0693 s⁻¹. What is the half-life?",
      type: "multiple_choice",
      options: ["5 s", "10 s", "15 s", "20 s"],
      answer: "10 s",
      explanation: "t₁/₂ = 0.693/k = 0.693/0.0693 = 10 s."
    },
    {
      id: "prac_012",
      objective: "obj_018",
      difficulty: "hard",
      question: "How does a catalyst affect activation energy?",
      type: "multiple_choice",
      options: [
        "Increases it",
        "Decreases it",
        "No effect",
        "Removes it completely"
      ],
      answer: "Decreases it",
      explanation: "Catalysts lower activation energy, making it easier for the reaction to occur."
    }
  ],

  assessment: {
    id: "assess_kinetics",
    title: "Chemical Kinetics Quiz",
    description: "Test your understanding of chemical kinetics",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is chemical kinetics?",
        type: "short_answer",
        answer_key: "The study of reaction rates",
        explanation: "Chemical kinetics is the study of how fast chemical reactions occur."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the unit of reaction rate?",
        type: "short_answer",
        answer_key: "mol/dm³/s",
        explanation: "Rate is measured in mol/dm³/s."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name four factors that affect reaction rate.",
        type: "short_answer",
        answer_key: "Concentration, temperature, surface area, catalysts",
        explanation: "These four factors affect the rate of reaction."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does collision theory state?",
        type: "short_answer",
        answer_key: "Particles must collide with sufficient energy and correct orientation to react",
        explanation: "Collision theory explains how reactions occur at the particle level."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "How does concentration affect reaction rate?",
        type: "short_answer",
        answer_key: "Increasing concentration increases the rate of reaction",
        explanation: "Higher concentration means more particles and more collisions."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How does temperature affect reaction rate?",
        type: "short_answer",
        answer_key: "Increasing temperature increases the rate of reaction",
        explanation: "Higher temperature means faster-moving particles and more energetic collisions."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "How does surface area affect reaction rate?",
        type: "short_answer",
        answer_key: "Increasing surface area increases the rate of reaction",
        explanation: "Larger surface area provides more sites for reaction."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is a catalyst?",
        type: "short_answer",
        answer_key: "A substance that increases reaction rate without being consumed",
        explanation: "Catalysts speed up reactions by lowering activation energy."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is activation energy?",
        type: "short_answer",
        answer_key: "The minimum energy required for a reaction to occur",
        explanation: "Activation energy is the energy barrier that must be overcome."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "Write the general form of a rate equation.",
        type: "short_answer",
        answer_key: "Rate = k[A]^m[B]^n",
        explanation: "The rate equation relates rate to concentrations with the rate constant k."
      },
      {
        id: "ass_011",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is half-life in chemical kinetics?",
        type: "short_answer",
        answer_key: "The time for concentration to decrease to half its initial value",
        explanation: "Half-life is a measure of how quickly a reaction proceeds."
      },
      {
        id: "ass_012",
        objective: "obj_018",
        difficulty: "hard",
        question: "How does a catalyst affect activation energy?",
        type: "short_answer",
        answer_key: "A catalyst lowers the activation energy",
        explanation: "Catalysts provide an alternative pathway with lower activation energy."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand reaction rates and collision theory",
        "Explain factors affecting reaction rates",
        "Use rate equations and determine order",
        "Understand catalysts and activation energy"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is chemical kinetics?" },
        { time: "5-10 min", activity: "Direct Instruction - Collision Theory" },
        { time: "10-15 min", activity: "Direct Instruction - Factors Affecting Rate" },
        { time: "15-20 min", activity: "Direct Instruction - Activation Energy" },
        { time: "20-25 min", activity: "Direct Instruction - Rate Equations" },
        { time: "25-30 min", activity: "Direct Instruction - Order of Reaction" },
        { time: "30-35 min", activity: "Direct Instruction - Catalysts" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of reaction rates",
        prac_002: "mol/dm³/s",
        prac_003: "Collide with sufficient energy",
        prac_004: "Increases rate",
        prac_005: "Increases rate",
        prac_006: "Larger surface area",
        prac_007: "Lowers activation energy",
        prac_008: "The minimum energy for a reaction to occur",
        prac_009: "3",
        prac_010: "Doubles",
        prac_011: "10 s",
        prac_012: "Decreases it"
      },
      assessment: {
        ass_001: "The study of reaction rates",
        ass_002: "mol/dm³/s",
        ass_003: "Concentration, temperature, surface area, catalysts",
        ass_004: "Particles must collide with sufficient energy and correct orientation to react",
        ass_005: "Increasing concentration increases the rate of reaction",
        ass_006: "Increasing temperature increases the rate of reaction",
        ass_007: "Increasing surface area increases the rate of reaction",
        ass_008: "A substance that increases reaction rate without being consumed",
        ass_009: "The minimum energy required for a reaction to occur",
        ass_010: "Rate = k[A]^m[B]^n",
        ass_011: "The time for concentration to decrease to half its initial value",
        ass_012: "A catalyst lowers the activation energy"
      }
    },
    extensionActivities: [
      "Investigate the effect of concentration on reaction rate experimentally",
      "Research catalysts in the Haber process",
      "Analyze rate data and determine reaction order",
      "Research the role of enzymes in biological systems"
    ],
    differentiation: {
      struggling: [
        "Focus on collision theory and factors first",
        "Use simple examples",
        "Practice with basic calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the Arrhenius equation",
        "Study reaction mechanisms",
        "Analyze complex kinetic data",
        "Research industrial catalysis"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Collision Theory",
      description: "Diagram showing successful and unsuccessful collisions",
      url: "/diagrams/collision-theory.png",
      alt: "Collision theory diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Reaction Energy Profile",
      description: "Diagram showing activation energy and reaction progress",
      url: "/diagrams/reaction-energy-profile.png",
      alt: "Reaction energy profile diagram"
    },
    {
      id: "vis_003",
      type: "graph",
      title: "Effect of Catalyst",
      description: "Graph showing how a catalyst lowers activation energy",
      url: "/diagrams/catalyst-effect.png",
      alt: "Effect of catalyst graph"
    }
  ]
};