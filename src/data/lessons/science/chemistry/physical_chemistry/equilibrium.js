// Location: src/data/lessons/science/chemistry/physical_chemistry/equilibrium.js

export default {
  id: "chem_lesson_equilibrium",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Chemical Equilibrium",
  icon: "⚖️",
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
    "Understanding of reversible reactions",
    "Knowledge of rate of reaction",
    "Understanding of concentration and pressure",
    "Basic mathematical skills"
  ],

  nextLessons: [
    {
      name: "Redox Reactions",
      file: "science/chemistry/physical_chemistry/redox.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define chemical equilibrium and explain its characteristics",
      indicator: "Student can explain what chemical equilibrium is"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between reversible and irreversible reactions",
      indicator: "Student can identify reversible reactions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of dynamic equilibrium",
      indicator: "Student can explain dynamic equilibrium in terms of rates"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "State Le Chatelier's Principle",
      indicator: "Student can state Le Chatelier's Principle"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain how concentration changes affect equilibrium",
      indicator: "Student can predict the effect of concentration changes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain how temperature changes affect equilibrium",
      indicator: "Student can predict the effect of temperature changes"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain how pressure changes affect equilibrium",
      indicator: "Student can predict the effect of pressure changes"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the effect of catalysts on equilibrium",
      indicator: "Student can explain that catalysts do not affect equilibrium position"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Define the equilibrium constant (Kc)",
      indicator: "Student can define Kc and write expressions"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Write equilibrium constant expressions for chemical reactions",
      indicator: "Student can write Kc expressions from balanced equations"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Calculate Kc from equilibrium concentrations",
      indicator: "Student can calculate Kc from experimental data"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Perform equilibrium calculations using ICE tables",
      indicator: "Student can use ICE tables to solve equilibrium problems"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Calculate equilibrium concentrations from Kc",
      indicator: "Student can find equilibrium concentrations using Kc"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the significance of Kc values",
      indicator: "Student can interpret Kc values"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Use the reaction quotient (Q) to predict direction",
      indicator: "Student can use Q to predict whether equilibrium shifts"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the Haber process in terms of equilibrium",
      indicator: "Student can apply equilibrium principles to the Haber process"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the Contact process in terms of equilibrium",
      indicator: "Student can apply equilibrium principles to the Contact process"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the effect of changing conditions on equilibrium",
      indicator: "Student can predict and explain equilibrium shifts"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Solve complex equilibrium problems",
      indicator: "Student can solve multi-step equilibrium problems"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Apply equilibrium concepts to real-world systems",
      indicator: "Student can explain equilibrium in biological and industrial systems"
    }
  ],

  video: {
    id: "vid_001",
    title: "Chemical Equilibrium",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about chemical equilibrium, Le Chatelier's Principle, and equilibrium calculations."
  },

  content: {
    introduction: `
      <h2>What is Chemical Equilibrium?</h2>
      <p><strong>Chemical equilibrium</strong> is the state in a reversible reaction where the rates of the forward and reverse reactions are equal, and the concentrations of reactants and products remain constant.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">⚖️ Equilibrium</h3>
          <ul>
            <li>• Forward rate = Reverse rate</li>
            <li>• Concentrations are constant</li>
            <li>• Dynamic (not static)</li>
            <li>• Both reactions continue</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🔁 Reversible Reactions</h3>
          <ul>
            <li>• Can proceed in both directions</li>
            <li>• Represented by ⇌</li>
            <li>• Products can reform reactants</li>
            <li>• Example: N₂ + 3H₂ ⇌ 2NH₃</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Kc</h3>
          <ul>
            <li>• Equilibrium constant</li>
            <li>• Kc = [Products]/[Reactants]</li>
            <li>• Constant at fixed temperature</li>
            <li>• Indicates position of equilibrium</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Dynamic Equilibrium</text>
          
          <!-- Container -->
          <rect x="100" y="60" width="400" height="180" fill="none" stroke="#2c3e50" stroke-width="2" rx="5"/>
          
          <!-- Reactants (left side) -->
          <text x="180" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c">Reactants</text>
          <circle cx="150" cy="130" r="12" fill="#e74c3c" opacity="0.8"/>
          <circle cx="180" cy="150" r="12" fill="#e74c3c" opacity="0.8"/>
          <circle cx="200" cy="120" r="12" fill="#e74c3c" opacity="0.8"/>
          <circle cx="160" cy="170" r="12" fill="#e74c3c" opacity="0.8"/>
          <circle cx="190" cy="180" r="12" fill="#e74c3c" opacity="0.8"/>
          
          <!-- Products (right side) -->
          <text x="420" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2ecc71">Products</text>
          <circle cx="400" cy="130" r="12" fill="#2ecc71" opacity="0.8"/>
          <circle cx="420" cy="150" r="12" fill="#2ecc71" opacity="0.8"/>
          <circle cx="380" cy="160" r="12" fill="#2ecc71" opacity="0.8"/>
          <circle cx="410" cy="170" r="12" fill="#2ecc71" opacity="0.8"/>
          <circle cx="440" cy="140" r="12" fill="#2ecc71" opacity="0.8"/>
          
          <!-- Forward arrow -->
          <path d="M240 140 L360 140" stroke="#2c3e50" stroke-width="3" marker-end="url(#arrowF)"/>
          <text x="300" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Forward</text>
          
          <!-- Reverse arrow -->
          <path d="M360 160 L240 160" stroke="#2c3e50" stroke-width="3" marker-end="url(#arrowR)"/>
          <text x="300" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Reverse</text>
          
          <defs>
            <marker id="arrowF" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
            </marker>
            <marker id="arrowR" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
            </marker>
          </defs>
          
          <!-- Rate graph -->
          <text x="300" y="235" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">At equilibrium: Forward rate = Reverse rate (concentrations remain constant)</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Reversible Reactions and Equilibrium",
        objective: "obj_002",
        text: `
          <h3>Reversible Reactions</h3>
          <p>A <strong>reversible reaction</strong> is one in which the products can react to form the original reactants. It is represented by the symbol <strong>⇌</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Irreversible Reactions</h4>
              <ul>
                <li>• Proceed in one direction only</li>
                <li>• Represented by →</li>
                <li>• Reactants completely consumed</li>
                <li>• Example: Mg + O₂ → MgO</li>
                <li>• Cannot be reversed easily</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reversible Reactions</h4>
              <ul>
                <li>• Proceed in both directions</li>
                <li>• Represented by ⇌</li>
                <li>• Reactants not completely consumed</li>
                <li>• Example: N₂ + 3H₂ ⇌ 2NH₃</li>
                <li>• Can reach equilibrium</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples of Reversible Reactions:</strong>
            <ul>
              <li>• <strong>N₂ + 3H₂ ⇌ 2NH₃</strong> (Haber process)</li>
              <li>• <strong>2SO₂ + O₂ ⇌ 2SO₃</strong> (Contact process)</li>
              <li>• <strong>CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</strong> (Esterification)</li>
              <li>• <strong>CaCO₃ ⇌ CaO + CO₂</strong> (Thermal decomposition)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Dynamic Equilibrium",
        objective: "obj_003",
        text: `
          <h3>Dynamic Equilibrium</h3>
          <p><strong>Dynamic equilibrium</strong> occurs when the rates of the forward and reverse reactions are equal, and the concentrations of reactants and products remain constant.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics</h4>
              <ul>
                <li>• Both reactions continue</li>
                <li>• Rates are equal</li>
                <li>• Concentrations are constant</li>
                <li>• Equilibrium is dynamic, not static</li>
                <li>• Can only occur in a closed system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Conditions for Equilibrium</h4>
              <ul>
                <li>• Closed system</li>
                <li>• Constant temperature</li>
                <li>• No removal of reactants/products</li>
                <li>• Reversible reaction</li>
                <li>• Time for equilibrium to establish</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Le Chatelier's Principle",
        objective: "obj_004",
        text: `
          <h3>Le Chatelier's Principle</h3>
          <p><strong>Le Chatelier's Principle</strong> states that if a system at equilibrium is subjected to a change, the system will adjust to partially oppose the change and establish a new equilibrium.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="280" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Le Chatelier's Principle - Effect of Changes</text>
              
              <!-- Effect on concentration -->
              <g transform="translate(40, 50)">
                <text x="70" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#2c3e50">Concentration</text>
                <rect x="10" y="25" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="5"/>
                <text x="70" y="45" text-anchor="middle" font-size="10" fill="#1565c0">Increase reactant</text>
                <path d="M30 70 L110 70" stroke="#1565c0" stroke-width="2" marker-end="url(#arrowE)"/>
                <text x="70" y="90" text-anchor="middle" font-size="10" fill="#1565c0">Shift right</text>
              </g>
              
              <!-- Effect on pressure -->
              <g transform="translate(230, 50)">
                <text x="70" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#2c3e50">Pressure</text>
                <rect x="10" y="25" width="120" height="80" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" rx="5"/>
                <text x="70" y="45" text-anchor="middle" font-size="10" fill="#2e7d32">Increase pressure</text>
                <path d="M30 70 L110 70" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrowE)"/>
                <text x="70" y="90" text-anchor="middle" font-size="10" fill="#2e7d32">Shift to fewer moles</text>
              </g>
              
              <!-- Effect on temperature -->
              <g transform="translate(420, 50)">
                <text x="70" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#2c3e50">Temperature</text>
                <rect x="10" y="25" width="120" height="80" fill="#fff3e0" stroke="#e65100" stroke-width="1.5" rx="5"/>
                <text x="70" y="45" text-anchor="middle" font-size="10" fill="#e65100">Increase temperature</text>
                <path d="M30 70 L110 70" stroke="#e65100" stroke-width="2" marker-end="url(#arrowE)"/>
                <text x="70" y="90" text-anchor="middle" font-size="10" fill="#e65100">Shift to endothermic</text>
              </g>
              
              <defs>
                <marker id="arrowE" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
                </marker>
              </defs>
              
              <text x="300" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">The system shifts to oppose the change and re-establish equilibrium</text>
            </svg>
          </div>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Concentration</h4>
              <ul>
                <li>• Increase reactant → shift right</li>
                <li>• Decrease reactant → shift left</li>
                <li>• Increase product → shift left</li>
                <li>• Decrease product → shift right</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Pressure</h4>
              <ul>
                <li>• Increase pressure → shift to fewer moles of gas</li>
                <li>• Decrease pressure → shift to more moles of gas</li>
                <li>• No effect if equal moles</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Temperature</h4>
              <ul>
                <li>• Increase temperature → shift to endothermic direction</li>
                <li>• Decrease temperature → shift to exothermic direction</li>
                <li>• Catalysts have no effect on position</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Equilibrium Constant (Kc)",
        objective: "obj_009",
        text: `
          <h3>The Equilibrium Constant</h3>
          <p>For the reaction <strong>aA + bB ⇌ cC + dD</strong>, the equilibrium constant is:</p>
          
          <div class="formula-box">
            <h4>📝 Kc Expression:</h4>
            <p><strong>Kc = [C]ᶜ × [D]ᵈ / [A]ᵃ × [B]ᵇ</strong></p>
            <ul>
              <li>• Kc is constant at a given temperature</li>
              <li>• Only includes gases and aqueous species</li>
              <li>• Pure solids and liquids are not included</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>N₂ + 3H₂ ⇌ 2NH₃</strong></li>
                <li>Kc = [NH₃]² / [N₂][H₂]³</li>
                <li><strong>2SO₂ + O₂ ⇌ 2SO₃</strong></li>
                <li>Kc = [SO₃]² / [SO₂]²[O₂]</li>
                <li><strong>CH₃COOH ⇌ CH₃COO⁻ + H⁺</strong></li>
                <li>Kc = [CH₃COO⁻][H⁺] / [CH₃COOH]</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Interpreting Kc</h4>
              <ul>
                <li>• <strong>Kc > 1:</strong> Products favoured</li>
                <li>• <strong>Kc < 1:</strong> Reactants favoured</li>
                <li>• <strong>Kc ≈ 1:</strong> Both present</li>
                <li>• Kc is temperature dependent</li>
                <li>• Only changes with temperature</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Calculating Kc",
        objective: "obj_011",
        text: `
          <h3>Calculating Kc</h3>
          <p>Kc can be calculated from equilibrium concentrations.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> For the reaction H₂ + I₂ ⇌ 2HI, the equilibrium concentrations are [H₂] = 0.1 M, [I₂] = 0.1 M, [HI] = 0.4 M. Calculate Kc.</li>
              <li><strong>Solution:</strong></li>
              <li>Kc = [HI]² / [H₂][I₂]</li>
              <li>Kc = (0.4)² / (0.1 × 0.1)</li>
              <li>Kc = 0.16 / 0.01</li>
              <li>Kc = <strong>16</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Another Example:</strong>
            <ul>
              <li><strong>Problem:</strong> For N₂ + 3H₂ ⇌ 2NH₃, at equilibrium [NH₃] = 0.4 M, [N₂] = 0.2 M, [H₂] = 0.3 M. Calculate Kc.</li>
              <li><strong>Solution:</strong></li>
              <li>Kc = [NH₃]² / [N₂][H₂]³</li>
              <li>Kc = (0.4)² / (0.2 × 0.3³)</li>
              <li>Kc = 0.16 / (0.2 × 0.027)</li>
              <li>Kc = 0.16 / 0.0054</li>
              <li>Kc = <strong>29.6</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "ICE Tables",
        objective: "obj_012",
        text: `
          <h3>ICE Tables</h3>
          <p><strong>ICE tables</strong> (Initial, Change, Equilibrium) are used to solve equilibrium problems.</p>
          
          <div class="example-box">
            <strong>📌 Example - Using ICE Table:</strong>
            <ul>
              <li><strong>Problem:</strong> For H₂ + I₂ ⇌ 2HI, Kc = 50. Initially [H₂] = [I₂] = 1.0 M. Find equilibrium concentrations.</li>
              <li><strong>Solution:</strong></li>
              <li>• Let x = change in concentration</li>
            </ul>
            <table class="w-full border-collapse">
              <tr><th>Species</th><th>Initial (M)</th><th>Change (M)</th><th>Equilibrium (M)</th></tr>
              <tr><td>H₂</td><td>1.0</td><td>-x</td><td>1.0 - x</td></tr>
              <tr><td>I₂</td><td>1.0</td><td>-x</td><td>1.0 - x</td></tr>
              <tr><td>HI</td><td>0</td><td>+2x</td><td>2x</td></tr>
            </table>
            <ul>
              <li>Kc = [HI]² / [H₂][I₂] = (2x)² / (1.0-x)² = 50</li>
              <li>4x² / (1.0-x)² = 50</li>
              <li>2x / (1.0-x) = √50 = 7.07</li>
              <li>2x = 7.07 - 7.07x</li>
              <li>9.07x = 7.07</li>
              <li>x = 0.78 M</li>
              <li>[H₂] = [I₂] = 0.22 M, [HI] = 1.56 M</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Reaction Quotient (Q)",
        objective: "obj_015",
        text: `
          <h3>The Reaction Quotient (Q)</h3>
          <p>The <strong>reaction quotient (Q)</strong> has the same form as Kc but uses concentrations that are not necessarily at equilibrium.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Using Q</h4>
              <ul>
                <li>• <strong>Q = Kc:</strong> At equilibrium</li>
                <li>• <strong>Q < Kc:</strong> Shift right (more products)</li>
                <li>• <strong>Q > Kc:</strong> Shift left (more reactants)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <p>For N₂ + 3H₂ ⇌ 2NH₃, Kc = 30</p>
              <p>[N₂] = 0.2 M, [H₂] = 0.3 M, [NH₃] = 0.5 M</p>
              <ul>
                <li>• Q = (0.5)² / (0.2 × 0.3³)</li>
                <li>• Q = 0.25 / (0.2 × 0.027)</li>
                <li>• Q = 0.25 / 0.0054 = 46.3</li>
                <li>• Q > Kc → Shift left</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Industrial Applications",
        objective: "obj_016",
        text: `
          <h3>Industrial Applications of Equilibrium</h3>
          <p>Equilibrium principles are used to optimize industrial processes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Haber Process</h4>
              <p><strong>N₂ + 3H₂ ⇌ 2NH₃</strong> (ΔH = -92 kJ/mol)</p>
              <ul>
                <li>• <strong>Conditions:</strong> 400-500°C, 200 atm</li>
                <li>• <strong>Catalyst:</strong> Iron</li>
                <li>• <strong>Low temperature:</strong> Favours forward (exothermic)</li>
                <li>• <strong>High pressure:</strong> Favours forward (fewer moles)</li>
                <li>• <strong>Compromise:</strong> Temperature chosen for rate</li>
                <li>• <strong>Use:</strong> Fertilizer production</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contact Process</h4>
              <p><strong>2SO₂ + O₂ ⇌ 2SO₃</strong> (ΔH = -196 kJ/mol)</p>
              <ul>
                <li>• <strong>Conditions:</strong> 450°C, 1-2 atm</li>
                <li>• <strong>Catalyst:</strong> Vanadium pentoxide (V₂O₅)</li>
                <li>• <strong>Low temperature:</strong> Favours forward</li>
                <li>• <strong>High pressure:</strong> Favours forward (fewer moles)</li>
                <li>• <strong>Use:</strong> Sulfuric acid production</li>
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
          <h4>⚖️ Equilibrium Concepts</h4>
          <ul>
            <li>• Forward rate = Reverse rate</li>
            <li>• Concentrations remain constant</li>
            <li>• Dynamic, not static</li>
            <li>• Kc = [Products]/[Reactants]</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Le Chatelier's Principle</h4>
          <ul>
            <li>• System opposes changes</li>
            <li>• Concentration: shift to oppose</li>
            <li>• Pressure: shift to fewer moles</li>
            <li>• Temperature: shift to endothermic</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Equilibrium is dynamic, not static. The system responds to changes to maintain equilibrium.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "At equilibrium, reactions stop",
        correction: "Both reactions continue at equal rates",
        explanation: "Equilibrium is dynamic, not static."
      },
      {
        id: "mis_002",
        misconception: "Kc changes when concentration changes",
        correction: "Kc is constant at a given temperature",
        explanation: "Only temperature changes Kc."
      },
      {
        id: "mis_003",
        misconception: "Catalysts shift equilibrium position",
        correction: "Catalysts only speed up reaching equilibrium",
        explanation: "Catalysts have no effect on equilibrium position."
      },
      {
        id: "mis_004",
        misconception: "Increasing pressure always shifts equilibrium",
        correction: "Only affects gas reactions with different moles",
        explanation: "Pressure only affects equilibrium if there is a change in the number of gas moles."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Haber Process",
        description: "Ammonia production for fertilizers.",
        example: "N₂ + 3H₂ ⇌ 2NH₃"
      },
      {
        id: "app_002",
        title: "Contact Process",
        description: "Sulfuric acid production.",
        example: "2SO₂ + O₂ ⇌ 2SO₃"
      },
      {
        id: "app_003",
        title: "Biological Systems",
        description: "Equilibrium in the human body.",
        example: "Blood pH, oxygen transport."
      },
      {
        id: "app_004",
        title: "Environmental Systems",
        description: "Ocean acidification.",
        example: "CO₂ dissolution in seawater."
      }
    ]
  },

  keyTerms: [
    { term: "Chemical Equilibrium", definition: "A state where forward and reverse reaction rates are equal." },
    { term: "Reversible Reaction", definition: "A reaction that can proceed in both directions." },
    { term: "Dynamic Equilibrium", definition: "Equilibrium where both reactions continue at equal rates." },
    { term: "Le Chatelier's Principle", definition: "A system at equilibrium opposes changes to maintain equilibrium." },
    { term: "Equilibrium Constant (Kc)", definition: "The ratio of product to reactant concentrations at equilibrium." },
    { term: "Reaction Quotient (Q)", definition: "The ratio of product to reactant concentrations at any point." },
    { term: "Haber Process", definition: "The industrial production of ammonia from nitrogen and hydrogen." },
    { term: "Contact Process", definition: "The industrial production of sulfuric acid." },
    { term: "Exothermic Reaction", definition: "A reaction that releases heat." },
    { term: "Endothermic Reaction", definition: "A reaction that absorbs heat." },
    { term: "ICE Table", definition: "A table showing initial, change, and equilibrium concentrations." },
    { term: "Closed System", definition: "A system where no matter can enter or leave." },
    { term: "Homogeneous Equilibrium", definition: "Equilibrium where all species are in the same phase." },
    { term: "Heterogeneous Equilibrium", definition: "Equilibrium where species are in different phases." },
    { term: "Le Chatelier's Principle", definition: "A system at equilibrium opposes changes to maintain equilibrium." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is chemical equilibrium?",
      type: "multiple_choice",
      options: [
        "When reactions stop",
        "When forward and reverse rates are equal",
        "When all reactants are consumed",
        "When all products are formed"
      ],
      answer: "When forward and reverse rates are equal",
      explanation: "Chemical equilibrium occurs when the rates of forward and reverse reactions are equal."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What symbol represents a reversible reaction?",
      type: "multiple_choice",
      options: ["→", "⇌", "↔", "="],
      answer: "⇌",
      explanation: "The symbol ⇌ represents a reversible reaction."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is dynamic equilibrium?",
      type: "multiple_choice",
      options: [
        "A static state",
        "Both reactions continue at equal rates",
        "Reactions stop",
        "Only forward reaction occurs"
      ],
      answer: "Both reactions continue at equal rates",
      explanation: "Dynamic equilibrium is a state where both reactions continue at equal rates."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does Le Chatelier's Principle state?",
      type: "multiple_choice",
      options: [
        "Equilibrium is always achieved",
        "A system opposes changes to maintain equilibrium",
        "Reactions always go to completion",
        "Equilibrium cannot be disturbed"
      ],
      answer: "A system opposes changes to maintain equilibrium",
      explanation: "Le Chatelier's Principle states that a system at equilibrium opposes changes."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "If you increase the concentration of a reactant, the equilibrium shifts:",
      type: "multiple_choice",
      options: ["Right", "Left", "No change", "Cannot determine"],
      answer: "Right",
      explanation: "Increasing reactant concentration shifts equilibrium to the right (products)."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "For an exothermic reaction, increasing temperature shifts equilibrium:",
      type: "multiple_choice",
      options: ["Right", "Left", "No change", "Cannot determine"],
      answer: "Left",
      explanation: "For exothermic reactions, increasing temperature shifts equilibrium to the left."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts equilibrium:",
      type: "multiple_choice",
      options: ["Right", "Left", "No change", "Cannot determine"],
      answer: "Right",
      explanation: "Increasing pressure shifts equilibrium to the side with fewer moles (right, 4→2)."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is the equilibrium constant (Kc) expression for N₂ + 3H₂ ⇌ 2NH₃?",
      type: "multiple_choice",
      options: [
        "Kc = [NH₃]²/[N₂][H₂]³",
        "Kc = [N₂][H₂]³/[NH₃]²",
        "Kc = [NH₃]/[N₂][H₂]",
        "Kc = [N₂][H₂]/[NH₃]"
      ],
      answer: "Kc = [NH₃]²/[N₂][H₂]³",
      explanation: "The Kc expression is products over reactants, with coefficients as powers."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_011",
      difficulty: "hard",
      question: "For H₂ + I₂ ⇌ 2HI, Kc = 50. If [H₂] = 0.1 M and [I₂] = 0.1 M, what is [HI]?",
      type: "multiple_choice",
      options: ["0.5 M", "0.7 M", "0.9 M", "1.0 M"],
      answer: "0.7 M",
      explanation: "Kc = [HI]²/[H₂][I₂] = 50. [HI]² = 50 × 0.01 = 0.5. [HI] = √0.5 = 0.707 M ≈ 0.7 M."
    },
    {
      id: "prac_010",
      objective: "obj_015",
      difficulty: "hard",
      question: "If Q < Kc, the reaction will shift:",
      type: "multiple_choice",
      options: ["Right", "Left", "No change", "Cannot determine"],
      answer: "Right",
      explanation: "If Q < Kc, the reaction will shift right to produce more products."
    },
    {
      id: "prac_011",
      objective: "obj_014",
      difficulty: "hard",
      question: "If Kc = 1000, what does this indicate?",
      type: "multiple_choice",
      options: [
        "Products are favoured",
        "Reactants are favoured",
        "Both are equal",
        "Cannot determine"
      ],
      answer: "Products are favoured",
      explanation: "A large Kc (>1) indicates that products are favoured at equilibrium."
    },
    {
      id: "prac_012",
      objective: "obj_016",
      difficulty: "hard",
      question: "In the Haber process, what conditions favour high yield of NH₃?",
      type: "multiple_choice",
      options: [
        "Low temperature, high pressure",
        "High temperature, low pressure",
        "High temperature, high pressure",
        "Low temperature, low pressure"
      ],
      answer: "Low temperature, high pressure",
      explanation: "Low temperature favours forward (exothermic) and high pressure favours forward (fewer moles)."
    }
  ],

  assessment: {
    id: "assess_equilibrium",
    title: "Chemical Equilibrium Quiz",
    description: "Test your understanding of chemical equilibrium",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is chemical equilibrium?",
        type: "short_answer",
        answer_key: "A state where forward and reverse reaction rates are equal",
        explanation: "Chemical equilibrium occurs when the rates of forward and reverse reactions are equal."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a reversible reaction?",
        type: "short_answer",
        answer_key: "A reaction that can proceed in both directions",
        explanation: "Reversible reactions can proceed in both directions and are represented by ⇌."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is dynamic equilibrium?",
        type: "short_answer",
        answer_key: "Both reactions continue at equal rates",
        explanation: "Dynamic equilibrium is a state where both reactions continue at equal rates."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "State Le Chatelier's Principle.",
        type: "short_answer",
        answer_key: "A system at equilibrium opposes changes to maintain equilibrium",
        explanation: "Le Chatelier's Principle describes how a system responds to changes."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What happens if you increase the concentration of a reactant?",
        type: "short_answer",
        answer_key: "Equilibrium shifts right (towards products)",
        explanation: "Increasing reactant concentration shifts equilibrium to the products side."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "For an exothermic reaction, what happens when temperature is increased?",
        type: "short_answer",
        answer_key: "Equilibrium shifts left (towards reactants)",
        explanation: "For exothermic reactions, increasing temperature shifts equilibrium to the reactants side."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What happens when pressure is increased in a gas reaction?",
        type: "short_answer",
        answer_key: "Equilibrium shifts to the side with fewer moles of gas",
        explanation: "Increasing pressure shifts equilibrium to the side with fewer gas moles."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "medium",
        question: "Write the Kc expression for N₂ + 3H₂ ⇌ 2NH₃.",
        type: "short_answer",
        answer_key: "Kc = [NH₃]²/[N₂][H₂]³",
        explanation: "Kc = products/reactants with coefficients as powers."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "For H₂ + I₂ ⇌ 2HI, Kc = 64. If [H₂] = [I₂] = 0.5 M, what is [HI]?",
        type: "short_answer",
        answer_key: "4.0 M",
        explanation: "[HI]² = Kc × [H₂][I₂] = 64 × 0.25 = 16. [HI] = 4.0 M."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is the reaction quotient (Q) and how is it used?",
        type: "short_answer",
        answer_key: "Q is the same form as Kc but at any point; Q < Kc shifts right, Q > Kc shifts left",
        explanation: "Q is used to predict the direction of the reaction to reach equilibrium."
      },
      {
        id: "ass_011",
        objective: "obj_016",
        difficulty: "hard",
        question: "What conditions are used in the Haber process and why?",
        type: "short_answer",
        answer_key: "400-500°C, 200 atm, iron catalyst. Low temperature favours yield, high pressure favours yield, compromise for rate",
        explanation: "The Haber process uses conditions that balance yield and rate."
      },
      {
        id: "ass_012",
        objective: "obj_017",
        difficulty: "hard",
        question: "What is the Contact process used to produce?",
        type: "short_answer",
        answer_key: "Sulfuric acid (H₂SO₄)",
        explanation: "The Contact process is used to produce sulfuric acid."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand reversible reactions and dynamic equilibrium",
        "Apply Le Chatelier's Principle",
        "Use the equilibrium constant (Kc)",
        "Understand industrial applications"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is equilibrium?" },
        { time: "5-10 min", activity: "Direct Instruction - Reversible Reactions" },
        { time: "10-15 min", activity: "Direct Instruction - Dynamic Equilibrium" },
        { time: "15-20 min", activity: "Direct Instruction - Le Chatelier's Principle" },
        { time: "20-25 min", activity: "Direct Instruction - Equilibrium Constant (Kc)" },
        { time: "25-30 min", activity: "Direct Instruction - Kc Calculations" },
        { time: "30-35 min", activity: "Direct Instruction - ICE Tables" },
        { time: "35-40 min", activity: "Direct Instruction - Industrial Applications" },
        { time: "40-50 min", activity: "Guided Practice" },
        { time: "50-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "When forward and reverse rates are equal",
        prac_002: "⇌",
        prac_003: "Both reactions continue at equal rates",
        prac_004: "A system opposes changes to maintain equilibrium",
        prac_005: "Right",
        prac_006: "Left",
        prac_007: "Right",
        prac_008: "Kc = [NH₃]²/[N₂][H₂]³",
        prac_009: "0.7 M",
        prac_010: "Right",
        prac_011: "Products are favoured",
        prac_012: "Low temperature, high pressure"
      },
      assessment: {
        ass_001: "A state where forward and reverse reaction rates are equal",
        ass_002: "A reaction that can proceed in both directions",
        ass_003: "Both reactions continue at equal rates",
        ass_004: "A system at equilibrium opposes changes to maintain equilibrium",
        ass_005: "Equilibrium shifts right (towards products)",
        ass_006: "Equilibrium shifts left (towards reactants)",
        ass_007: "Equilibrium shifts to the side with fewer moles of gas",
        ass_008: "Kc = [NH₃]²/[N₂][H₂]³",
        ass_009: "4.0 M",
        ass_010: "Q is the same form as Kc but at any point; Q < Kc shifts right, Q > Kc shifts left",
        ass_011: "400-500°C, 200 atm, iron catalyst. Low temperature favours yield, high pressure favours yield, compromise for rate",
        ass_012: "Sulfuric acid (H₂SO₄)"
      }
    },
    extensionActivities: [
      "Research the Haber process in detail",
      "Investigate the Contact process",
      "Explore equilibrium in biological systems",
      "Calculate Kc from experimental data"
    ],
    differentiation: {
      struggling: [
        "Focus on reversible reactions first",
        "Use simple examples",
        "Practice Kc calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research equilibrium in complex systems",
        "Study Kp for gas reactions",
        "Explore Le Chatelier's Principle in depth",
        "Investigate equilibrium in environmental systems"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Dynamic Equilibrium",
      description: "Diagram showing dynamic equilibrium",
      url: "/diagrams/dynamic-equilibrium.png",
      alt: "Dynamic equilibrium diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Le Chatelier's Principle",
      description: "Diagram showing Le Chatelier's Principle",
      url: "/diagrams/le-chatelier.png",
      alt: "Le Chatelier's Principle diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Kc Interpretation",
      description: "Chart showing Kc interpretation",
      url: "/diagrams/kc-interpretation.png",
      alt: "Kc interpretation chart"
    }
  ]
};