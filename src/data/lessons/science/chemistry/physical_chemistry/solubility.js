// Location: src/data/lessons/science/chemistry/physical_chemistry/solubility.js

export default {
  id: "chem_lesson_solubility",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Solubility",
  icon: "💧",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of ionic compounds",
    "Knowledge of chemical bonding",
    "Understanding of solutions and mixtures",
    "Basic mathematical skills"
  ],

  nextLessons: [
    {
      name: "Chemical Kinetics",
      file: "science/chemistry/physical_chemistry/kinetics.js"
    },
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
      description: "Define solubility and explain its importance",
      indicator: "Student can explain what solubility is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between soluble, insoluble, and sparingly soluble substances",
      indicator: "Student can classify substances by solubility"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the terms saturated, unsaturated, and supersaturated solutions",
      indicator: "Student can define and distinguish between these solution types"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify factors affecting solubility",
      indicator: "Student can list factors that affect solubility"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the effect of temperature on solubility",
      indicator: "Student can describe how temperature affects solubility of solids and gases"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the effect of pressure on solubility of gases",
      indicator: "Student can apply Henry's Law to gas solubility"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the solubility rules for ionic compounds",
      indicator: "Student can use solubility rules to predict if a salt is soluble"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Define and calculate solubility product (Ksp)",
      indicator: "Student can write Ksp expressions and solve problems"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the common ion effect",
      indicator: "Student can explain how common ions affect solubility"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Interpret solubility curves",
      indicator: "Student can read and interpret solubility graphs"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Calculate solubility from Ksp values",
      indicator: "Student can calculate molar solubility from Ksp"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Predict precipitation using the ion product",
      indicator: "Student can use Q vs Ksp to predict precipitation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the effect of pH on solubility",
      indicator: "Student can explain how pH affects solubility of certain compounds"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Perform calculations involving Ksp and common ion effect",
      indicator: "Student can solve complex solubility problems"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the applications of solubility in analytical chemistry",
      indicator: "Student can explain how solubility is used in analysis"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze solubility in real-world contexts",
      indicator: "Student can apply solubility concepts to real-life situations"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Calculate solubility products from experimental data",
      indicator: "Student can determine Ksp from experimental data"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the relationship between solubility and Gibbs free energy",
      indicator: "Student can connect solubility to thermodynamics"
    }
  ],

  video: {
    id: "vid_001",
    title: "Solubility - Understanding Dissolution",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about solubility, factors affecting it, and calculations."
  },

  content: {
    introduction: `
      <h2>What is Solubility?</h2>
      <p><strong>Solubility</strong> is the maximum amount of a substance that can dissolve in a given amount of solvent at a specific temperature. It is a fundamental concept in chemistry with applications in medicine, industry, and environmental science.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">💧 Solubility</h3>
          <ul>
            <li>• Maximum solute that dissolves</li>
            <li>• Depends on temperature</li>
            <li>• Measured in g/100g solvent</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🧪 Solution Types</h3>
          <ul>
            <li>• Saturated</li>
            <li>• Unsaturated</li>
            <li>• Supersaturated</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Factors</h3>
          <ul>
            <li>• Temperature</li>
            <li>• Pressure</li>
            <li>• Nature of solute/solvent</li>
            <li>• pH</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Types of Solutions</text>
          
          <!-- Unsaturated -->
          <g transform="translate(100, 170)">
            <text x="0" y="-80" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e7d32">Unsaturated</text>
            <text x="0" y="-65" text-anchor="middle" font-size="10" fill="#2e7d32">More solute can dissolve</text>
            <rect x="-60" y="-50" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
            <!-- Solvent -->
            <rect x="-55" y="-20" width="110" height="45" fill="#90caf9" opacity="0.5" rx="3"/>
            <!-- Solute particles -->
            <circle cx="-30" cy="-30" r="5" fill="#e74c3c"/>
            <circle cx="10" cy="-35" r="5" fill="#e74c3c"/>
            <circle cx="-15" cy="-15" r="5" fill="#e74c3c"/>
            <circle cx="25" cy="-20" r="5" fill="#e74c3c"/>
            <circle cx="0" cy="-45" r="5" fill="#e74c3c"/>
          </g>
          
          <!-- Saturated -->
          <g transform="translate(300, 170)">
            <text x="0" y="-80" text-anchor="middle" font-size="14" font-weight="bold" fill="#e65100">Saturated</text>
            <text x="0" y="-65" text-anchor="middle" font-size="10" fill="#e65100">Maximum solute dissolved</text>
            <rect x="-60" y="-50" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
            <!-- Solvent -->
            <rect x="-55" y="-20" width="110" height="45" fill="#90caf9" opacity="0.5" rx="3"/>
            <!-- Solute particles (more) -->
            <circle cx="-35" cy="-30" r="5" fill="#e74c3c"/>
            <circle cx="5" cy="-40" r="5" fill="#e74c3c"/>
            <circle cx="-15" cy="-15" r="5" fill="#e74c3c"/>
            <circle cx="30" cy="-25" r="5" fill="#e74c3c"/>
            <circle cx="-20" cy="-45" r="5" fill="#e74c3c"/>
            <circle cx="20" cy="-45" r="5" fill="#e74c3c"/>
            <circle cx="0" cy="-30" r="5" fill="#e74c3c"/>
            <!-- Undissolved solute at bottom -->
            <circle cx="-40" cy="10" r="5" fill="#e74c3c" opacity="0.6"/>
            <circle cx="-10" cy="12" r="5" fill="#e74c3c" opacity="0.6"/>
            <circle cx="20" cy="8" r="5" fill="#e74c3c" opacity="0.6"/>
            <circle cx="35" cy="12" r="5" fill="#e74c3c" opacity="0.6"/>
          </g>
          
          <!-- Supersaturated -->
          <g transform="translate(500, 170)">
            <text x="0" y="-80" text-anchor="middle" font-size="14" font-weight="bold" fill="#c62828">Supersaturated</text>
            <text x="0" y="-65" text-anchor="middle" font-size="10" fill="#c62828">Unstable - excess dissolved</text>
            <rect x="-60" y="-50" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
            <!-- Solvent -->
            <rect x="-55" y="-20" width="110" height="45" fill="#90caf9" opacity="0.5" rx="3"/>
            <!-- More solute particles -->
            <circle cx="-40" cy="-30" r="5" fill="#e74c3c"/>
            <circle cx="0" cy="-45" r="5" fill="#e74c3c"/>
            <circle cx="-20" cy="-15" r="5" fill="#e74c3c"/>
            <circle cx="35" cy="-30" r="5" fill="#e74c3c"/>
            <circle cx="-10" cy="-35" r="5" fill="#e74c3c"/>
            <circle cx="25" cy="-40" r="5" fill="#e74c3c"/>
            <circle cx="15" cy="-20" r="5" fill="#e74c3c"/>
            <circle cx="-30" cy="-20" r="5" fill="#e74c3c"/>
            <circle cx="10" cy="-10" r="5" fill="#e74c3c"/>
            <circle cx="-25" cy="-5" r="5" fill="#e74c3c"/>
          </g>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Introduction to Solubility",
        objective: "obj_001",
        text: `
          <h3>Understanding Solubility</h3>
          <p><strong>Solubility</strong> is the maximum amount of solute that can dissolve in a given amount of solvent at a specific temperature.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Terms</h4>
              <ul>
                <li><strong>Solute:</strong> The substance being dissolved</li>
                <li><strong>Solvent:</strong> The substance doing the dissolving</li>
                <li><strong>Solution:</strong> A homogeneous mixture of solute and solvent</li>
                <li><strong>Concentration:</strong> Amount of solute per volume of solution</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solubility Classifications</h4>
              <ul>
                <li><strong>Soluble:</strong> > 1g per 100g solvent</li>
                <li><strong>Sparingly soluble:</strong> 0.01 - 1g per 100g</li>
                <li><strong>Insoluble:</strong> < 0.01g per 100g</li>
                <li><strong>Miscible:</strong> Liquids that dissolve in each other</li>
                <li><strong>Immiscible:</strong> Liquids that do not dissolve</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Factors Affecting Solubility",
        objective: "obj_004",
        text: `
          <h3>Factors Affecting Solubility</h3>
          <p>Several factors determine how much solute can dissolve in a solvent.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Temperature</h4>
              <ul>
                <li>• <strong>Solids:</strong> Usually increases with temperature</li>
                <li>• <strong>Gases:</strong> Decreases with temperature</li>
                <li>• <strong>Example:</strong> Sugar dissolves more in hot water</li>
                <li>• <strong>Example:</strong> Less O₂ in warm water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Pressure</h4>
              <ul>
                <li>• <strong>Gases:</strong> Solubility increases with pressure</li>
                <li>• <strong>Solids:</strong> Little effect</li>
                <li>• <strong>Henry's Law:</strong> C = k × P</li>
                <li>• <strong>Example:</strong> Carbonated drinks</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Nature of Solute/Solvent</h4>
              <ul>
                <li>• <strong>"Like dissolves like"</strong></li>
                <li>• Polar dissolves polar</li>
                <li>• Non-polar dissolves non-polar</li>
                <li>• Example: Salt in water (polar)</li>
                <li>• Example: Oil in hexane (non-polar)</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 pH</h4>
              <ul>
                <li>• Affects solubility of salts</li>
                <li>• <strong>Acidic salts:</strong> More soluble in acid</li>
                <li>• <strong>Basic salts:</strong> More soluble in base</li>
                <li>• Example: CaCO₃ dissolves in acid</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Solubility Curves",
        objective: "obj_010",
        text: `
          <h3>Solubility Curves</h3>
          <p><strong>Solubility curves</strong> show how solubility changes with temperature.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="400" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Solubility Curves</text>
              
              <!-- Axes -->
              <line x1="80" y1="70" x2="80" y2="350" stroke="#2c3e50" stroke-width="2"/>
              <line x1="80" y1="350" x2="550" y2="350" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Y-axis label -->
              <text x="20" y="210" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50" transform="rotate(-90 20 210)">Solubility (g/100g water)</text>
              
              <!-- X-axis label -->
              <text x="315" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Temperature (°C)</text>
              
              <!-- Y-axis ticks -->
              <text x="70" y="350" text-anchor="end" font-size="10" fill="#2c3e50">0</text>
              <text x="70" y="280" text-anchor="end" font-size="10" fill="#2c3e50">50</text>
              <text x="70" y="210" text-anchor="end" font-size="10" fill="#2c3e50">100</text>
              <text x="70" y="140" text-anchor="end" font-size="10" fill="#2c3e50">150</text>
              <text x="70" y="70" text-anchor="end" font-size="10" fill="#2c3e50">200</text>
              
              <!-- X-axis ticks -->
              <text x="170" y="365" text-anchor="middle" font-size="10" fill="#2c3e50">20</text>
              <text x="260" y="365" text-anchor="middle" font-size="10" fill="#2c3e50">40</text>
              <text x="350" y="365" text-anchor="middle" font-size="10" fill="#2c3e50">60</text>
              <text x="440" y="365" text-anchor="middle" font-size="10" fill="#2c3e50">80</text>
              <text x="530" y="365" text-anchor="middle" font-size="10" fill="#2c3e50">100</text>
              
              <!-- NaCl curve (flat) -->
              <path d="M100 280 L150 278 L200 275 L250 270 L300 265 L350 260 L400 255 L450 250 L500 245" stroke="#e74c3c" stroke-width="3" fill="none"/>
              <text x="510" y="245" font-family="Arial, sans-serif" font-size="11" fill="#e74c3c">NaCl</text>
              
              <!-- KNO3 curve (steep) -->
              <path d="M100 340 L150 335 L200 320 L250 300 L300 270 L350 230 L400 180 L450 120 L500 70" stroke="#3498db" stroke-width="3" fill="none"/>
              <text x="510" y="70" font-family="Arial, sans-serif" font-size="11" fill="#3498db">KNO₃</text>
              
              <!-- CaCl2 curve -->
              <path d="M100 300 L150 285 L200 260 L250 230 L300 200 L350 170 L400 140 L450 110 L500 85" stroke="#2ecc71" stroke-width="3" fill="none"/>
              <text x="510" y="85" font-family="Arial, sans-serif" font-size="11" fill="#2ecc71">CaCl₂</text>
              
              <!-- Grid lines -->
              <line x1="80" y1="280" x2="550" y2="280" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="80" y1="210" x2="550" y2="210" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="80" y1="140" x2="550" y2="140" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="170" y1="70" x2="170" y2="350" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="260" y1="70" x2="260" y2="350" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="350" y1="70" x2="350" y2="350" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
              <line x1="440" y1="70" x2="440" y2="350" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Interpreting Solubility Curves:</strong>
            <ul>
              <li>• Each line shows how solubility changes with temperature</li>
              <li>• Above the curve: Supersaturated solution</li>
              <li>• On the curve: Saturated solution</li>
              <li>• Below the curve: Unsaturated solution</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Solubility Rules",
        objective: "obj_007",
        text: `
          <h3>Solubility Rules for Ionic Compounds</h3>
          <p>These rules help predict whether a salt will dissolve in water.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Soluble Salts</h4>
              <ul>
                <li><strong>All salts of Na⁺, K⁺, NH₄⁺</strong></li>
                <li>• Always soluble in water</li>
                <li><strong>All nitrates (NO₃⁻)</strong></li>
                <li>• Always soluble</li>
                <li><strong>All chlorides (Cl⁻)</strong></li>
                <li>• Except AgCl, PbCl₂, Hg₂Cl₂</li>
                <li><strong>All sulfates (SO₄²⁻)</strong></li>
                <li>• Except BaSO₄, PbSO₄, CaSO₄</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Insoluble Salts</h4>
              <ul>
                <li><strong>All carbonates (CO₃²⁻)</strong></li>
                <li>• Except Na₂CO₃, K₂CO₃, (NH₄)₂CO₃</li>
                <li><strong>All phosphates (PO₄³⁻)</strong></li>
                <li>• Except Na₃PO₄, K₃PO₄</li>
                <li><strong>All sulfides (S²⁻)</strong></li>
                <li>• Except Na₂S, K₂S, (NH₄)₂S</li>
                <li><strong>All hydroxides (OH⁻)</strong></li>
                <li>• Except NaOH, KOH, Ba(OH)₂</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="500" height="250" fill="#f8f9fa" rx="10"/>
              <text x="250" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Solubility Rules</text>
              
              <!-- Soluble section -->
              <rect x="30" y="40" width="210" height="180" fill="#d5f5e3" stroke="#27ae60" stroke-width="2" rx="8"/>
              <text x="135" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#27ae60">✓ Soluble</text>
              <text x="135" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#27ae60">Always soluble</text>
              <text x="50" y="105" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Na⁺, K⁺, NH₄⁺ salts</text>
              <text x="50" y="120" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• All nitrates (NO₃⁻)</text>
              <text x="50" y="135" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most chlorides (Cl⁻)</text>
              <text x="55" y="150" font-family="Arial, sans-serif" font-size="9" fill="#7f8c8d">  (except AgCl, PbCl₂)</text>
              <text x="50" y="165" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most sulfates (SO₄²⁻)</text>
              <text x="55" y="180" font-family="Arial, sans-serif" font-size="9" fill="#7f8c8d">  (except BaSO₄, PbSO₄)</text>
              
              <!-- Insoluble section -->
              <rect x="260" y="40" width="210" height="180" fill="#fadbd8" stroke="#e74c3c" stroke-width="2" rx="8"/>
              <text x="365" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c">✗ Insoluble</text>
              <text x="365" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">Generally insoluble</text>
              <text x="280" y="105" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most carbonates (CO₃²⁻)</text>
              <text x="285" y="120" font-family="Arial, sans-serif" font-size="9" fill="#7f8c8d">  (except Na, K, NH₄)</text>
              <text x="280" y="135" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most phosphates (PO₄³⁻)</text>
              <text x="280" y="150" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most sulfides (S²⁻)</text>
              <text x="280" y="165" font-family="Arial, sans-serif" font-size="10" fill="#1a5276">• Most hydroxides (OH⁻)</text>
              <text x="285" y="180" font-family="Arial, sans-serif" font-size="9" fill="#7f8c8d">  (except NaOH, KOH)</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Solubility Product (Ksp)",
        objective: "obj_008",
        text: `
          <h3>Solubility Product (Ksp)</h3>
          <p>The <strong>solubility product constant (Ksp)</strong> is the equilibrium constant for the dissolution of a sparingly soluble salt.</p>
          
          <div class="formula-box">
            <h4>📝 General Formula:</h4>
            <p><strong>AₐB₆(s) ⇌ aAᵐ⁺(aq) + bBⁿ⁻(aq)</strong></p>
            <p><strong>Ksp = [Aᵐ⁺]ᵃ × [Bⁿ⁻]ᵇ</strong></p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ksp Expressions</h4>
              <ul>
                <li><strong>AgCl(s) ⇌ Ag⁺ + Cl⁻</strong></li>
                <li>Ksp = [Ag⁺][Cl⁻]</li>
                <li><strong>CaF₂(s) ⇌ Ca²⁺ + 2F⁻</strong></li>
                <li>Ksp = [Ca²⁺][F⁻]²</li>
                <li><strong>PbI₂(s) ⇌ Pb²⁺ + 2I⁻</strong></li>
                <li>Ksp = [Pb²⁺][I⁻]²</li>
                <li><strong>Al(OH)₃(s) ⇌ Al³⁺ + 3OH⁻</strong></li>
                <li>Ksp = [Al³⁺][OH⁻]³</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Relationship</h4>
              <ul>
                <li>• Ksp is constant at a given temperature</li>
                <li>• Smaller Ksp = less soluble</li>
                <li>• Larger Ksp = more soluble</li>
                <li>• <strong>Q = Ksp:</strong> Saturated solution</li>
                <li>• <strong>Q < Ksp:</strong> Unsaturated</li>
                <li>• <strong>Q > Ksp:</strong> Supersaturated</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Calculating Ksp:</strong>
            <ul>
              <li><strong>Problem:</strong> The solubility of AgCl is 1.3 × 10⁻⁵ mol/dm³ at 25°C. Calculate Ksp.</li>
              <li><strong>Solution:</strong></li>
              <li>AgCl(s) ⇌ Ag⁺ + Cl⁻</li>
              <li>s = 1.3 × 10⁻⁵</li>
              <li>[Ag⁺] = [Cl⁻] = s = 1.3 × 10⁻⁵</li>
              <li>Ksp = s² = (1.3 × 10⁻⁵)²</li>
              <li>Ksp = <strong>1.69 × 10⁻¹⁰</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Calculating Solubility from Ksp",
        objective: "obj_011",
        text: `
          <h3>Calculating Solubility from Ksp</h3>
          <p>Ksp can be used to calculate the molar solubility of a sparingly soluble salt.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1: AgCl</h4>
              <p><strong>Ksp(AgCl) = 1.8 × 10⁻¹⁰</strong></p>
              <ul>
                <li>• AgCl(s) ⇌ Ag⁺ + Cl⁻</li>
                <li>• Let s = solubility</li>
                <li>• [Ag⁺] = s, [Cl⁻] = s</li>
                <li>• Ksp = s²</li>
                <li>• s = √(1.8 × 10⁻¹⁰)</li>
                <li>• s = <strong>1.34 × 10⁻⁵ mol/dm³</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2: CaF₂</h4>
              <p><strong>Ksp(CaF₂) = 4.0 × 10⁻¹¹</strong></p>
              <ul>
                <li>• CaF₂(s) ⇌ Ca²⁺ + 2F⁻</li>
                <li>• Let s = solubility</li>
                <li>• [Ca²⁺] = s, [F⁻] = 2s</li>
                <li>• Ksp = s × (2s)² = 4s³</li>
                <li>• s = ∛(Ksp/4)</li>
                <li>• s = ∛(4.0 × 10⁻¹¹/4)</li>
                <li>• s = ∛(1.0 × 10⁻¹¹)</li>
                <li>• s = <strong>2.15 × 10⁻⁴ mol/dm³</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Common Ion Effect",
        objective: "obj_009",
        text: `
          <h3>The Common Ion Effect</h3>
          <p>The <strong>common ion effect</strong> is the decrease in solubility of a salt when a soluble compound containing one of its ions is added to the solution.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>AgCl(s) ⇌ Ag⁺ + Cl⁻</strong></li>
              <li>If NaCl is added, [Cl⁻] increases</li>
              <li>Equilibrium shifts left</li>
              <li>More AgCl precipitates</li>
              <li>Solubility of AgCl decreases</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Calculation Example</h4>
              <p><strong>Calculate the solubility of AgCl in 0.1 M NaCl. Ksp = 1.8 × 10⁻¹⁰</strong></p>
              <ul>
                <li>• AgCl(s) ⇌ Ag⁺ + Cl⁻</li>
                <li>• [Cl⁻] = 0.1 + s ≈ 0.1</li>
                <li>• Ksp = [Ag⁺][Cl⁻]</li>
                <li>• 1.8 × 10⁻¹⁰ = s × 0.1</li>
                <li>• s = <strong>1.8 × 10⁻⁹ mol/dm³</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Comparison</h4>
              <ul>
                <li>• <strong>In pure water:</strong></li>
                <li>• s = 1.34 × 10⁻⁵ mol/dm³</li>
                <li>• <strong>In 0.1 M NaCl:</strong></li>
                <li>• s = 1.8 × 10⁻⁹ mol/dm³</li>
                <li>• <strong>Decrease:</strong> ~7400 times less soluble!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Predicting Precipitation",
        objective: "obj_012",
        text: `
          <h3>Predicting Precipitation</h3>
          <p>Precipitation occurs when the ion product (Q) exceeds the solubility product (Ksp).</p>
          
          <div class="example-box">
            <strong>📌 Steps to Predict Precipitation:</strong>
            <ol>
              <li>Write the equilibrium equation</li>
              <li>Determine the Ksp value</li>
              <li>Calculate the ion product (Q)</li>
              <li>Compare Q with Ksp</li>
              <li>• Q > Ksp → Precipitation occurs</li>
              <li>• Q = Ksp → Saturated solution</li>
              <li>• Q < Ksp → No precipitation</li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Example 1</h4>
              <p><strong>Will BaSO₄ precipitate if [Ba²⁺] = 1.0 × 10⁻⁵ M and [SO₄²⁻] = 1.0 × 10⁻⁵ M? Ksp = 1.0 × 10⁻¹⁰</strong></p>
              <ul>
                <li>• BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻</li>
                <li>• Q = [Ba²⁺][SO₄²⁻]</li>
                <li>• Q = (1.0 × 10⁻⁵)(1.0 × 10⁻⁵)</li>
                <li>• Q = 1.0 × 10⁻¹⁰</li>
                <li>• Q = Ksp → <strong>Saturated</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example 2</h4>
              <p><strong>Will AgCl precipitate if [Ag⁺] = 1.0 × 10⁻⁴ M and [Cl⁻] = 1.0 × 10⁻⁴ M? Ksp = 1.8 × 10⁻¹⁰</strong></p>
              <ul>
                <li>• AgCl(s) ⇌ Ag⁺ + Cl⁻</li>
                <li>• Q = [Ag⁺][Cl⁻]</li>
                <li>• Q = (1.0 × 10⁻⁴)(1.0 × 10⁻⁴)</li>
                <li>• Q = 1.0 × 10⁻⁸</li>
                <li>• Q > Ksp → <strong>Precipitate forms!</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Applications of Solubility",
        objective: "obj_016",
        text: `
          <h3>Applications of Solubility</h3>
          <p>Solubility concepts are applied in many fields.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Medicine</h4>
              <ul>
                <li>• Drug solubility affects absorption</li>
                <li>• IV solutions must be isotonic</li>
                <li>• Kidney stone formation</li>
                <li>• Example: Calcium oxalate stones</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Environmental Chemistry</h4>
              <ul>
                <li>• Heavy metal precipitation</li>
                <li>• Water hardness</li>
                <li>• Soil nutrient availability</li>
                <li>• Example: CaCO₃ in water treatment</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Industrial Chemistry</h4>
              <ul>
                <li>• Salt production</li>
                <li>• Mineral processing</li>
                <li>• Water softening</li>
                <li>• Example: Ion exchange resins</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Analytical Chemistry</h4>
              <ul>
                <li>• Gravimetric analysis</li>
                <li>• Precipitation titrations</li>
                <li>• Separation of ions</li>
                <li>• Example: Identifying ions by precipitation</li>
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
          <h4>💧 Solubility</h4>
          <ul>
            <li>• Solubility = max solute dissolved</li>
            <li>• Factors: Temperature, pressure, pH</li>
            <li>• Solubility rules predict dissolution</li>
            <li>• Ksp describes sparingly soluble salts</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Calculations</h4>
          <ul>
            <li>• Ksp = [A]ᵃ[B]ᵇ</li>
            <li>• Q > Ksp → Precipitation</li>
            <li>• Common ion effect reduces solubility</li>
            <li>• Applications in medicine and industry</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Solubility is not just about "dissolves" or "doesn't dissolve" — it's a quantitative measure that depends on conditions and has important practical applications.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Everything that dissolves is soluble",
        correction: "Solubility is the maximum amount that can dissolve",
        explanation: "A substance may dissolve, but if it's beyond its solubility limit, it's supersaturated."
      },
      {
        id: "mis_002",
        misconception: "Hot water dissolves everything better",
        correction: "Heat increases solubility of solids but decreases solubility of gases",
        explanation: "Gases become less soluble as temperature increases."
      },
      {
        id: "mis_003",
        misconception: "Ksp is the same as solubility",
        correction: "Ksp is the equilibrium constant; solubility is the concentration",
        explanation: "Ksp is a constant; solubility depends on the compound's formula."
      },
      {
        id: "mis_004",
        misconception: "All ionic compounds are soluble in water",
        correction: "Many ionic compounds are insoluble or sparingly soluble",
        explanation: "Solubility rules identify which compounds are soluble."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Solubility affects drug delivery.",
        example: "Designing water-soluble drugs for better absorption."
      },
      {
        id: "app_002",
        title: "Water Treatment",
        description: "Solubility is used in water softening.",
        example: "Removing Ca²⁺ and Mg²⁺ ions by precipitation."
      },
      {
        id: "app_003",
        title: "Environmental Science",
        description: "Solubility helps in pollution control.",
        example: "Precipitating heavy metals from wastewater."
      },
      {
        id: "app_004",
        title: "Food Science",
        description: "Solubility is important in food production.",
        example: "Sugar solubility in beverages, salt in preservation."
      }
    ]
  },

  keyTerms: [
    { term: "Solubility", definition: "Maximum solute that dissolves in a given solvent at a specific temperature." },
    { term: "Saturated Solution", definition: "A solution containing the maximum amount of solute." },
    { term: "Unsaturated Solution", definition: "A solution containing less than the maximum solute." },
    { term: "Supersaturated Solution", definition: "A solution containing more solute than the saturation point." },
    { term: "Solubility Product (Ksp)", definition: "The equilibrium constant for the dissolution of a sparingly soluble salt." },
    { term: "Common Ion Effect", definition: "The decrease in solubility caused by a common ion." },
    { term: "Ion Product (Q)", definition: "The product of ion concentrations before equilibrium." },
    { term: "Precipitation", definition: "The formation of a solid from a solution." },
    { term: "Henry's Law", definition: "The solubility of a gas is proportional to its pressure." },
    { term: "Molar Solubility", definition: "The number of moles of solute that dissolve per liter." },
    { term: "Solvent", definition: "The substance that dissolves the solute." },
    { term: "Solute", definition: "The substance that is dissolved." },
    { term: "Miscible", definition: "Liquids that dissolve completely in each other." },
    { term: "Immiscible", definition: "Liquids that do not dissolve in each other." },
    { term: "Solubility Curve", definition: "A graph showing solubility vs temperature." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is solubility?",
      type: "multiple_choice",
      options: [
        "The mass of solvent",
        "The maximum solute that dissolves",
        "The volume of solution",
        "The pH of a solution"
      ],
      answer: "The maximum solute that dissolves",
      explanation: "Solubility is the maximum amount of solute that can dissolve in a given solvent."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which salt is soluble in water?",
      type: "multiple_choice",
      options: ["NaCl", "AgCl", "BaSO₄", "CaCO₃"],
      answer: "NaCl",
      explanation: "NaCl is soluble in water."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a saturated solution?",
      type: "multiple_choice",
      options: [
        "A solution with maximum solute",
        "A solution with no solute",
        "A solution with excess solute",
        "A dilute solution"
      ],
      answer: "A solution with maximum solute",
      explanation: "A saturated solution contains the maximum amount of dissolved solute."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "How does temperature affect solid solubility?",
      type: "multiple_choice",
      options: [
        "Usually increases",
        "Usually decreases",
        "No effect",
        "Varies randomly"
      ],
      answer: "Usually increases",
      explanation: "Most solid solutes become more soluble as temperature increases."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "How does pressure affect gas solubility?",
      type: "multiple_choice",
      options: [
        "Increases with pressure",
        "Decreases with pressure",
        "No effect",
        "Varies randomly"
      ],
      answer: "Increases with pressure",
      explanation: "Gas solubility increases with pressure (Henry's Law)."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which compound is insoluble in water?",
      type: "multiple_choice",
      options: ["NaNO₃", "KCl", "BaSO₄", "NH₄Cl"],
      answer: "BaSO₄",
      explanation: "BaSO₄ is insoluble in water (sulfate exception)."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the Ksp expression for AgCl?",
      type: "multiple_choice",
      options: [
        "[Ag⁺][Cl⁻]",
        "[Ag⁺]²[Cl⁻]",
        "[Ag⁺][Cl⁻]²",
        "[Ag⁺]²[Cl⁻]²"
      ],
      answer: "[Ag⁺][Cl⁻]",
      explanation: "Ksp = [Ag⁺][Cl⁻] for AgCl."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is the common ion effect?",
      type: "multiple_choice",
      options: [
        "Increase in solubility",
        "Decrease in solubility",
        "No change in solubility",
        "Change in temperature"
      ],
      answer: "Decrease in solubility",
      explanation: "The common ion effect decreases the solubility of a salt."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_011",
      difficulty: "hard",
      question: "Calculate the solubility of AgCl if Ksp = 1.8 × 10⁻¹⁰.",
      type: "multiple_choice",
      options: [
        "1.34 × 10⁻⁵ M",
        "2.68 × 10⁻⁵ M",
        "6.7 × 10⁻⁶ M",
        "3.6 × 10⁻¹⁰ M"
      ],
      answer: "1.34 × 10⁻⁵ M",
      explanation: "s = √(1.8 × 10⁻¹⁰) = 1.34 × 10⁻⁵ M."
    },
    {
      id: "prac_010",
      objective: "obj_012",
      difficulty: "hard",
      question: "Will BaSO₄ precipitate if [Ba²⁺] = 1.0 × 10⁻⁴ M and [SO₄²⁻] = 1.0 × 10⁻⁴ M? Ksp = 1.0 × 10⁻¹⁰",
      type: "multiple_choice",
      options: ["Yes", "No", "Cannot determine", "Saturated"],
      answer: "Yes",
      explanation: "Q = 1.0 × 10⁻⁸ > 1.0 × 10⁻¹⁰, so precipitation occurs."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "Calculate the solubility of CaF₂ if Ksp = 4.0 × 10⁻¹¹.",
      type: "multiple_choice",
      options: [
        "2.15 × 10⁻⁴ M",
        "4.30 × 10⁻⁴ M",
        "1.08 × 10⁻⁴ M",
        "6.45 × 10⁻⁴ M"
      ],
      answer: "2.15 × 10⁻⁴ M",
      explanation: "s = ∛(Ksp/4) = ∛(4.0 × 10⁻¹¹/4) = 2.15 × 10⁻⁴ M."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Calculate the solubility of AgCl in 0.1 M NaCl. Ksp = 1.8 × 10⁻¹⁰",
      type: "multiple_choice",
      options: [
        "1.8 × 10⁻⁹ M",
        "1.34 × 10⁻⁵ M",
        "1.8 × 10⁻¹⁰ M",
        "1.34 × 10⁻⁴ M"
      ],
      answer: "1.8 × 10⁻⁹ M",
      explanation: "s = Ksp/[Cl⁻] = 1.8 × 10⁻¹⁰/0.1 = 1.8 × 10⁻⁹ M."
    }
  ],

  assessment: {
    id: "assess_solubility",
    title: "Solubility Quiz",
    description: "Test your understanding of solubility",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is solubility?",
        type: "short_answer",
        answer_key: "The maximum amount of solute that dissolves in a solvent",
        explanation: "Solubility is the maximum amount of solute that can dissolve in a given solvent at a specific temperature."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the three types of solutions based on saturation.",
        type: "short_answer",
        answer_key: "Saturated, unsaturated, supersaturated",
        explanation: "Solutions are classified as saturated, unsaturated, or supersaturated."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a saturated solution?",
        type: "short_answer",
        answer_key: "A solution with maximum dissolved solute",
        explanation: "A saturated solution contains the maximum amount of solute."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name three factors that affect solubility.",
        type: "short_answer",
        answer_key: "Temperature, pressure, pH (or nature of solute/solvent)",
        explanation: "Temperature, pressure, pH, and the nature of solute/solvent affect solubility."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "How does temperature affect the solubility of solids?",
        type: "short_answer",
        answer_key: "Solubility usually increases with temperature",
        explanation: "Most solid solutes become more soluble as temperature increases."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How does pressure affect the solubility of gases?",
        type: "short_answer",
        answer_key: "Increases with pressure (Henry's Law)",
        explanation: "Gas solubility increases as pressure increases."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Which ions are always soluble in water?",
        type: "short_answer",
        answer_key: "Na⁺, K⁺, NH₄⁺, NO₃⁻",
        explanation: "Salts of Na⁺, K⁺, NH₄⁺ and all nitrates are soluble."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the Ksp expression for CaF₂?",
        type: "short_answer",
        answer_key: "Ksp = [Ca²⁺][F⁻]²",
        explanation: "CaF₂(s) ⇌ Ca²⁺ + 2F⁻, so Ksp = [Ca²⁺][F⁻]²."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Calculate the solubility of AgCl if Ksp = 1.8 × 10⁻¹⁰.",
        type: "short_answer",
        answer_key: "1.34 × 10⁻⁵ M",
        explanation: "s = √(1.8 × 10⁻¹⁰) = 1.34 × 10⁻⁵ M."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the common ion effect?",
        type: "short_answer",
        answer_key: "The decrease in solubility caused by a common ion",
        explanation: "The common ion effect reduces the solubility of a salt when a common ion is present."
      },
      {
        id: "ass_011",
        objective: "obj_012",
        difficulty: "hard",
        question: "When does precipitation occur?",
        type: "short_answer",
        answer_key: "When Q > Ksp",
        explanation: "Precipitation occurs when the ion product exceeds the solubility product."
      },
      {
        id: "ass_012",
        objective: "obj_016",
        difficulty: "hard",
        question: "Give an application of solubility in medicine.",
        type: "short_answer",
        answer_key: "Drug solubility affects absorption and bioavailability",
        explanation: "Solubility affects how drugs are absorbed in the body."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand solubility and its importance",
        "Identify factors affecting solubility",
        "Use solubility rules",
        "Perform Ksp calculations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is solubility?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Solutions" },
        { time: "10-15 min", activity: "Direct Instruction - Factors Affecting Solubility" },
        { time: "15-20 min", activity: "Direct Instruction - Solubility Curves" },
        { time: "20-25 min", activity: "Direct Instruction - Solubility Rules" },
        { time: "25-30 min", activity: "Direct Instruction - Ksp and Common Ion Effect" },
        { time: "30-35 min", activity: "Direct Instruction - Precipitation" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The maximum solute that dissolves",
        prac_002: "NaCl",
        prac_003: "A solution with maximum solute",
        prac_004: "Usually increases",
        prac_005: "Increases with pressure",
        prac_006: "BaSO₄",
        prac_007: "[Ag⁺][Cl⁻]",
        prac_008: "Decrease in solubility",
        prac_009: "1.34 × 10⁻⁵ M",
        prac_010: "Yes",
        prac_011: "2.15 × 10⁻⁴ M",
        prac_012: "1.8 × 10⁻⁹ M"
      },
      assessment: {
        ass_001: "The maximum amount of solute that dissolves in a solvent",
        ass_002: "Saturated, unsaturated, supersaturated",
        ass_003: "A solution with maximum dissolved solute",
        ass_004: "Temperature, pressure, pH (or nature of solute/solvent)",
        ass_005: "Solubility usually increases with temperature",
        ass_006: "Increases with pressure (Henry's Law)",
        ass_007: "Na⁺, K⁺, NH₄⁺, NO₃⁻",
        ass_008: "Ksp = [Ca²⁺][F⁻]²",
        ass_009: "1.34 × 10⁻⁵ M",
        ass_010: "The decrease in solubility caused by a common ion",
        ass_011: "When Q > Ksp",
        ass_012: "Drug solubility affects absorption and bioavailability"
      }
    },
    extensionActivities: [
      "Research the solubility of different substances",
      "Plot a solubility curve from experimental data",
      "Investigate the common ion effect experimentally",
      "Research the role of solubility in kidney stone formation"
    ],
    differentiation: {
      struggling: [
        "Focus on basic definitions",
        "Use simple examples",
        "Practice with solubility rules",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research Ksp values of different compounds",
        "Study the thermodynamics of dissolution",
        "Investigate the role of solubility in the environment",
        "Explore the applications of solubility in industry"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Types of Solutions",
      description: "Diagram showing saturated, unsaturated, and supersaturated solutions",
      url: "/diagrams/solution-types.png",
      alt: "Solution types diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Solubility Rules",
      description: "Chart of solubility rules for ionic compounds",
      url: "/diagrams/solubility-rules.png",
      alt: "Solubility rules chart"
    },
    {
      id: "vis_003",
      type: "graph",
      title: "Solubility Curves",
      description: "Graph showing solubility curves for different compounds",
      url: "/diagrams/solubility-curves.png",
      alt: "Solubility curves graph"
    }
  ]
};