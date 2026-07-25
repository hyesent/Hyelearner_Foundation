// Location: src/data/lessons/science/chemistry/physical_chemistry/separation_techniques.js

export default {
  id: "chem_lesson_separation_techniques",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Separation Techniques",
  icon: "🧪",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of mixtures",
    "Knowledge of physical and chemical changes",
    "Basic laboratory safety",
    "Familiarity with laboratory apparatus"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_atomic_structure",
      name: "Atomic Structure",
      file: "science/chemistry/physical_chemistry/atomic_structure.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Define a mixture and distinguish between homogeneous and heterogeneous mixtures", indicator: "Student can classify mixtures as homogeneous or heterogeneous" },
    { id: "obj_002", level: "easy", description: "Explain the purpose of separation techniques", indicator: "Student can explain why separation is important" },
    { id: "obj_003", level: "easy", description: "Describe the process of filtration", indicator: "Student can explain how filtration separates solids from liquids" },
    { id: "obj_004", level: "easy", description: "Describe the process of evaporation", indicator: "Student can explain how evaporation separates soluble solids from liquids" },
    { id: "obj_005", level: "medium", description: "Describe the process of crystallisation", indicator: "Student can explain how crystallisation purifies solids" },
    { id: "obj_006", level: "medium", description: "Describe the process of simple distillation", indicator: "Student can explain how simple distillation separates liquids" },
    { id: "obj_007", level: "medium", description: "Describe the process of fractional distillation", indicator: "Student can explain how fractional distillation separates mixtures of liquids" },
    { id: "obj_008", level: "medium", description: "Describe the process of chromatography", indicator: "Student can explain how chromatography separates mixtures" },
    { id: "obj_009", level: "hard", description: "Describe the process of sublimation", indicator: "Student can explain how sublimation separates mixtures" },
    { id: "obj_010", level: "hard", description: "Describe the process of solvent extraction", indicator: "Student can explain how solvent extraction separates mixtures" },
    { id: "obj_011", level: "hard", description: "Explain how to choose the appropriate separation technique for a given mixture", indicator: "Student can select the correct method based on properties" },
    { id: "obj_012", level: "hard", description: "Analyze separation techniques in industrial applications", indicator: "Student can explain industrial uses of separation methods" }
  ],

  video: {
    id: "vid_001",
    title: "Separation Techniques",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn how to separate mixtures using different techniques."
  },

  content: {
    introduction: `
      <h2>What are Separation Techniques?</h2>
      <p><strong>Separation techniques</strong> are methods used to separate the components of a mixture. They rely on differences in physical properties such as particle size, boiling point, solubility, and density.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🔬 Mixtures</h3>
          <ul>
            <li>Two or more substances</li>
            <li>Not chemically bonded</li>
            <li>Can be separated</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">⚗️ Separation</h3>
          <ul>
            <li>Uses physical properties</li>
            <li>No chemical reaction</li>
            <li>Preserves components</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Applications</h3>
          <ul>
            <li>Water purification</li>
            <li>Oil refining</li>
            <li>Drug manufacturing</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>💡 Why Separation Matters</h4>
        <p>Separation techniques are essential in industry, medicine, and environmental science. They allow us to obtain pure substances from mixtures, recycle materials, and analyze complex samples.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Mixtures and Separation",
        objective: "obj_001",
        text: `
          <h3>Types of Mixtures</h3>
          <p>Mixtures are classified as either <strong>homogeneous</strong> or <strong>heterogeneous</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Homogeneous Mixtures</h4>
              <ul>
                <li>• Uniform composition throughout</li>
                <li>• Same properties throughout</li>
                <li>• Examples:</li>
                <ul>
                  <li>Saltwater</li>
                  <li>Air</li>
                  <li>Sugar solution</li>
                </ul>
                <li>• Also called solutions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Heterogeneous Mixtures</h4>
              <ul>
                <li>• Non-uniform composition</li>
                <li>• Different properties in different parts</li>
                <li>• Examples:</li>
                <ul>
                  <li>Sand and water</li>
                  <li>Oil and water</li>
                  <li>Granite rock</li>
                </ul>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Key Point:</strong>
            <p>The choice of separation technique depends on the type of mixture and the properties of its components.</p>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Filtration",
        objective: "obj_003",
        text: `
          <h3>Filtration</h3>
          <p><strong>Filtration</strong> separates an insoluble solid from a liquid using a filter paper or porous material.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="500" fill="#f8f9fa" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Filtration Apparatus</text>
              
              <!-- Filter Funnel -->
              <path d="M150 120 L200 260 L250 120" stroke="#2c3e50" stroke-width="3" fill="#e8eaf6"/>
              
              <!-- Filter Paper -->
              <path d="M155 140 Q200 200 245 140" stroke="#2c3e50" stroke-width="2" fill="#f5f5f5"/>
              <path d="M160 145 Q200 195 240 145" stroke="#2c3e50" stroke-width="1" fill="none"/>
              
              <!-- Solid residue in filter paper -->
              <ellipse cx="200" cy="155" rx="30" ry="15" fill="#8d6e63"/>
              
              <!-- Liquid in funnel -->
              <path d="M160 120 L170 140 L230 140 L240 120" stroke="#4fc3f7" stroke-width="2" fill="#4fc3f7" opacity="0.4"/>
              
              <!-- Funnel stem -->
              <rect x="190" y="260" width="20" height="60" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Conical Flask -->
              <path d="M140 360 L120 430 Q200 460 280 430 L260 360 Z" stroke="#2c3e50" stroke-width="3" fill="#e8eaf6" opacity="0.6"/>
              
              <!-- Liquid in flask (filtrate) -->
              <path d="M142 380 L125 430 Q200 455 275 430 L258 380 Z" fill="#4fc3f7" opacity="0.5"/>
              
              <!-- Filter funnel support -->
              <rect x="140" y="320" width="120" height="8" fill="#90a4ae" stroke="#2c3e50" stroke-width="2" rx="2"/>
              
              <!-- Ring stand -->
              <rect x="40" y="80" width="8" height="400" fill="#90a4ae" stroke="#2c3e50" stroke-width="2"/>
              <rect x="30" y="80" width="80" height="10" fill="#90a4ae" stroke="#2c3e50" stroke-width="2" rx="2"/>
              <rect x="30" y="320" width="110" height="10" fill="#90a4ae" stroke="#2c3e50" stroke-width="2" rx="2"/>
              
              <!-- Labels -->
              <line x1="260" y1="140" x2="340" y2="140" stroke="#2c3e50" stroke-width="1" stroke-dasharray="4"/>
              <text x="350" y="145" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Solid residue</text>
              
              <line x1="340" y1="400" x2="360" y2="400" stroke="#2c3e50" stroke-width="1" stroke-dasharray="4"/>
              <text x="370" y="405" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Filtrate (liquid)</text>
              
              <text x="200" y="485" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Filtration separates insoluble solids from liquids</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Steps:</strong>
            <ul>
              <li>1. Place filter paper in a funnel</li>
              <li>2. Pour the mixture through the funnel</li>
              <li>3. The solid remains on the filter paper</li>
              <li>4. The liquid passes through as filtrate</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Separating:</strong> Sand from water</li>
              <li><strong>Method:</strong> Filtration</li>
              <li><strong>Why:</strong> Sand is insoluble in water</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Evaporation and Crystallisation",
        objective: "obj_004",
        text: `
          <h3>Evaporation and Crystallisation</h3>
          <p><strong>Evaporation</strong> removes the solvent from a solution by heating, leaving the solute behind. <strong>Crystallisation</strong> forms pure crystals from a solution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Evaporation</h4>
              <ul>
                <li>• Removes solvent by heating</li>
                <li>• Used for soluble solids</li>
                <li>• Example: Salt from saltwater</li>
                <li>• Simple and fast</li>
                <li>• May decompose heat-sensitive substances</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Crystallisation</h4>
              <ul>
                <li>• Forms pure crystals</li>
                <li>• Slower, controlled process</li>
                <li>• Example: Sugar purification</li>
                <li>• Produces very pure solids</li>
                <li>• Gentle heating, then cooling</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="350" fill="#f8f9fa" rx="10"/>
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Crystallisation Process</text>
              
              <!-- Evaporating dish -->
              <ellipse cx="200" cy="200" rx="80" ry="30" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              <path d="M120 200 Q200 170 280 200 L290 280 Q200 310 110 280 Z" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Solution in dish -->
              <path d="M125 210 Q200 195 275 210 L280 240 Q200 260 120 240 Z" fill="#4fc3f7" opacity="0.5"/>
              
              <!-- Crystals forming -->
              <rect x="180" y="240" width="15" height="15" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" transform="rotate(15 187 247)"/>
              <rect x="200" y="250" width="12" height="12" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" transform="rotate(-10 206 256)"/>
              <rect x="160" y="245" width="10" height="10" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" transform="rotate(30 165 250)"/>
              <rect x="220" y="245" width="14" height="14" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" transform="rotate(-20 227 252)"/>
              
              <!-- Heat source -->
              <path d="M150 290 L200 320 L250 290" fill="#ffcc80" stroke="#f57c00" stroke-width="2"/>
              
              <!-- Flames -->
              <path d="M180 310 Q190 330 200 310 Q210 330 220 310" fill="#ff6f00" opacity="0.6"/>
              <path d="M185 315 Q195 325 200 315 Q205 325 215 315" fill="#ffab00" opacity="0.6"/>
              
              <!-- Label -->
              <text x="200" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Gentle heating evaporates water, leaving crystals</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Steps for Crystallisation:</strong>
            <ul>
              <li>1. Dissolve the substance in hot solvent</li>
              <li>2. Filter to remove impurities</li>
              <li>3. Allow the solution to cool slowly</li>
              <li>4. Crystals form as the solution cools</li>
              <li>5. Collect the crystals by filtration</li>
              <li>6. Dry the crystals</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Simple Distillation",
        objective: "obj_006",
        text: `
          <h3>Simple Distillation</h3>
          <p><strong>Simple distillation</strong> separates a liquid from a solution by boiling and condensing the vapor.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="450" fill="#f8f9fa" rx="10"/>
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Simple Distillation</text>
              
              <!-- Round bottom flask -->
              <circle cx="100" cy="320" r="70" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Liquid in flask -->
              <path d="M35 350 Q100 380 165 350 Q160 320 140 320 Q60 320 35 350" fill="#4fc3f7" opacity="0.5"/>
              
              <!-- Vapor in flask -->
              <circle cx="100" cy="280" r="15" fill="#e8eaf6" stroke="#2c3e50" stroke-width="1" opacity="0.5"/>
              <circle cx="85" cy="270" r="10" fill="#e8eaf6" stroke="#2c3e50" stroke-width="1" opacity="0.5"/>
              <circle cx="115" cy="270" r="12" fill="#e8eaf6" stroke="#2c3e50" stroke-width="1" opacity="0.5"/>
              
              <!-- Still head -->
              <path d="M100 250 L100 220 L140 220 L140 240" stroke="#2c3e50" stroke-width="3" fill="none"/>
              
              <!-- Condenser -->
              <rect x="140" y="160" width="180" height="25" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2" rx="5"/>
              <rect x="145" y="165" width="170" height="15" fill="#4fc3f7" opacity="0.3"/>
              
              <!-- Cooling water jacket -->
              <rect x="140" y="155" width="180" height="35" fill="none" stroke="#2c3e50" stroke-width="1" rx="5"/>
              
              <!-- Water in/out -->
              <text x="145" y="150" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">Water out</text>
              <text x="145" y="205" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">Water in</text>
              
              <!-- Distillate collection -->
              <path d="M320 170 L350 170 L350 280 Q350 310 320 310" stroke="#2c3e50" stroke-width="3" fill="none"/>
              <path d="M330 310 Q350 330 370 310" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              <path d="M335 315 Q350 325 365 315" fill="#4fc3f7" opacity="0.5"/>
              
              <!-- Heat source -->
              <path d="M70 390 L100 420 L130 390" fill="#ffcc80" stroke="#f57c00" stroke-width="2"/>
              <path d="M90 400 Q100 420 110 400" fill="#ff6f00" opacity="0.6"/>
              
              <!-- Labels -->
              <text x="100" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Heating</text>
              <text x="380" y="210" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Distillate</text>
              <text x="250" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Condenser</text>
              <text x="100" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Vapor</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Uses:</strong>
            <ul>
              <li>• Purifying water (distilled water)</li>
              <li>• Separating alcohol from water</li>
              <li>• Obtaining pure solvents</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Fractional Distillation",
        objective: "obj_007",
        text: `
          <h3>Fractional Distillation</h3>
          <p><strong>Fractional distillation</strong> separates mixtures of liquids with different boiling points using a fractionating column.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How It Works</h4>
              <ul>
                <li>• Liquids with different boiling points</li>
                <li>• Vapor rises up the column</li>
                <li>• Components condense at different heights</li>
                <li>• Lowest boiling point comes out first</li>
                <li>• Highest boiling point stays in flask</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Oil refining:</strong> Separating crude oil</li>
                <li>• <strong>Air separation:</strong> Liquid nitrogen/oxygen</li>
                <li>• <strong>Alcohol production:</strong> Distilling spirits</li>
                <li>• <strong>Petrochemicals:</strong> Purifying chemicals</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Mixture:</strong> Ethanol (78°C) and Water (100°C)</li>
              <li><strong>Separation:</strong> Ethanol boils first, then water</li>
              <li><strong>Result:</strong> Ethanol collected separately</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Chromatography",
        objective: "obj_008",
        text: `
          <h3>Chromatography</h3>
          <p><strong>Chromatography</strong> separates mixtures based on differences in solubility and adsorption.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="450" fill="#f8f9fa" rx="10"/>
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Paper Chromatography</text>
              
              <!-- Chromatography paper -->
              <rect x="170" y="50" width="60" height="280" fill="#f5f5f5" stroke="#2c3e50" stroke-width="1"/>
              
              <!-- Solvent front -->
              <line x1="170" y1="100" x2="230" y2="100" stroke="#2c3e50" stroke-width="1" stroke-dasharray="4"/>
              <text x="240" y="105" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Solvent front</text>
              
              <!-- Colored spots -->
              <circle cx="200" cy="300" r="8" fill="#e74c3c" opacity="0.8"/>
              <circle cx="195" cy="250" r="8" fill="#3498db" opacity="0.8"/>
              <circle cx="210" cy="200" r="8" fill="#2ecc71" opacity="0.8"/>
              <circle cx="190" cy="160" r="8" fill="#f1c40f" opacity="0.8"/>
              
              <!-- Baseline -->
              <line x1="170" y1="320" x2="230" y2="320" stroke="#2c3e50" stroke-width="1"/>
              <text x="240" y="325" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Baseline</text>
              
              <!-- Beaker -->
              <path d="M150 370 L140 430 Q200 450 260 430 L250 370 Z" fill="#e8eaf6" stroke="#2c3e50" stroke-width="2"/>
              
              <!-- Solvent in beaker -->
              <path d="M153 390 L145 430 Q200 445 255 430 L247 390 Z" fill="#4fc3f7" opacity="0.3"/>
              
              <!-- Labels -->
              <text x="60" y="200" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Different</text>
              <text x="60" y="215" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">colored spots</text>
              <text x="60" y="235" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">separate</text>
              
              <text x="200" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Different components move at different speeds</text>
            </svg>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Uses:</strong>
            <ul>
              <li>• Identifying substances</li>
              <li>• Analyzing inks and dyes</li>
              <li>• Testing purity</li>
              <li>• Forensic analysis</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Other Separation Techniques",
        objective: "obj_009",
        text: `
          <h3>Other Techniques</h3>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sublimation</h4>
              <ul>
                <li>• Solid changes directly to gas</li>
                <li>• Example: Iodine, ammonium chloride</li>
                <li>• Separates sublimable solids</li>
                <li>• The gas condenses on a cold surface</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solvent Extraction</h4>
              <ul>
                <li>• Uses two immiscible liquids</li>
                <li>• Dissolves a solute in one solvent</li>
                <li>• Example: Extracting caffeine</li>
                <li>• Separates based on solubility</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Decantation</h4>
              <ul>
                <li>• Pouring off liquid</li>
                <li>• Leaves sediment behind</li>
                <li>• Simple and quick</li>
                <li>• For heterogeneous mixtures</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Centrifugation</h4>
              <ul>
                <li>• Uses high-speed spinning</li>
                <li>• Separates by density</li>
                <li>• Example: Blood separation</li>
                <li>• Fast and efficient</li>
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
          <h4>🔬 Separation Techniques</h4>
          <ul>
            <li>• Filtration: Solid from liquid</li>
            <li>• Evaporation: Solvent from solution</li>
            <li>• Crystallisation: Pure crystals</li>
            <li>• Simple distillation: Different boiling points</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>⚗️ Advanced Techniques</h4>
          <ul>
            <li>• Fractional distillation: Mixtures of liquids</li>
            <li>• Chromatography: Solubility differences</li>
            <li>• Sublimation: Solid to gas</li>
            <li>• Solvent extraction: Solubility</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Choose the separation technique based on the physical properties of the mixture components.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Filtration separates soluble solids",
        correction: "Filtration separates insoluble solids from liquids",
        explanation: "Soluble solids dissolve and pass through the filter paper."
      },
      {
        id: "mis_002",
        misconception: "Distillation is used to separate solids",
        correction: "Distillation separates liquids based on boiling points",
        explanation: "Solids are separated using other techniques like crystallisation."
      },
      {
        id: "mis_003",
        misconception: "All mixtures can be separated by the same method",
        correction: "Different mixtures require different separation techniques",
        explanation: "The method depends on the physical properties of the components."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Water Purification",
        description: "Filtration and distillation are used to purify water.",
        example: "Drinking water treatment plants use multiple separation techniques."
      },
      {
        id: "app_002",
        title: "Oil Refining",
        description: "Fractional distillation separates crude oil into useful products.",
        example: "Gasoline, diesel, kerosene, and lubricating oils."
      },
      {
        id: "app_003",
        title: "Medicine",
        description: "Chromatography is used to analyze and purify drugs.",
        example: "Separating active ingredients from mixtures."
      },
      {
        id: "app_004",
        title: "Environmental Science",
        description: "Separation techniques monitor pollution.",
        example: "Analyzing water and air samples for contaminants."
      }
    ]
  },

  keyTerms: [
    { term: "Mixture", definition: "Two or more substances physically combined." },
    { term: "Homogeneous", definition: "Uniform composition throughout." },
    { term: "Heterogeneous", definition: "Non-uniform composition." },
    { term: "Filtration", definition: "Separating an insoluble solid from a liquid." },
    { term: "Evaporation", definition: "Removing solvent by heating." },
    { term: "Crystallisation", definition: "Forming pure crystals from a solution." },
    { term: "Distillation", definition: "Separating liquids by boiling and condensing." },
    { term: "Fractional Distillation", definition: "Separating mixtures of liquids by boiling point." },
    { term: "Chromatography", definition: "Separating mixtures based on solubility." },
    { term: "Sublimation", definition: "Solid changing directly to gas." },
    { term: "Solvent Extraction", definition: "Separating using two immiscible solvents." },
    { term: "Filtrate", definition: "The liquid that passes through a filter." },
    { term: "Residue", definition: "The solid left on the filter paper." },
    { term: "Distillate", definition: "The liquid collected after distillation." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a homogeneous mixture?",
      type: "multiple_choice",
      options: [
        "A mixture with uniform composition",
        "A mixture with non-uniform composition",
        "A mixture of solids only",
        "A mixture of liquids only"
      ],
      answer: "A mixture with uniform composition",
      explanation: "Homogeneous mixtures have the same composition throughout."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does filtration separate?",
      type: "multiple_choice",
      options: [
        "Soluble solids from liquids",
        "Insoluble solids from liquids",
        "Liquids from gases",
        "Solids from gases"
      ],
      answer: "Insoluble solids from liquids",
      explanation: "Filtration separates insoluble solids from liquids."
    },
    {
      id: "prac_003",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is removed during evaporation?",
      type: "multiple_choice",
      options: ["The solute", "The solvent", "The crystals", "The impurities"],
      answer: "The solvent",
      explanation: "Evaporation removes the solvent, leaving the solute behind."
    },
    {
      id: "prac_004",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is simple distillation used for?",
      type: "multiple_choice",
      options: [
        "Separating solids from liquids",
        "Separating liquids from solutions",
        "Separating gases from liquids",
        "Separating insoluble solids"
      ],
      answer: "Separating liquids from solutions",
      explanation: "Simple distillation separates a liquid from a solution."
    },
    {
      id: "prac_005",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the difference between simple and fractional distillation?",
      type: "multiple_choice",
      options: [
        "Fractional distillation uses a fractionating column",
        "Simple distillation uses a fractionating column",
        "They are the same",
        "Fractional distillation is faster"
      ],
      answer: "Fractional distillation uses a fractionating column",
      explanation: "Fractional distillation uses a fractionating column to separate liquids with different boiling points."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Why is crystallisation preferred over evaporation for some substances?",
      type: "multiple_choice",
      options: [
        "It is faster",
        "It produces purer crystals",
        "It requires less heat",
        "It uses no solvent"
      ],
      answer: "It produces purer crystals",
      explanation: "Crystallisation produces purer crystals than evaporation."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What property is used in chromatography?",
      type: "multiple_choice",
      options: [
        "Boiling point",
        "Solubility and adsorption",
        "Density",
        "Particle size"
      ],
      answer: "Solubility and adsorption",
      explanation: "Chromatography separates based on differences in solubility and adsorption."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is sublimation?",
      type: "multiple_choice",
      options: [
        "Liquid to gas",
        "Solid to gas",
        "Gas to liquid",
        "Solid to liquid"
      ],
      answer: "Solid to gas",
      explanation: "Sublimation is the direct change of a solid to a gas."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is solvent extraction used for?",
      type: "multiple_choice",
      options: [
        "Separating solids from liquids",
        "Separating substances by boiling point",
        "Separating substances by solubility in two immiscible liquids",
        "Separating gases"
      ],
      answer: "Separating substances by solubility in two immiscible liquids",
      explanation: "Solvent extraction uses two immiscible liquids to separate substances based on solubility."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which technique would you use to separate salt from saltwater?",
      type: "multiple_choice",
      options: [
        "Filtration",
        "Evaporation or crystallisation",
        "Chromatography",
        "Distillation"
      ],
      answer: "Evaporation or crystallisation",
      explanation: "Salt can be obtained from saltwater by evaporation or crystallisation."
    }
  ],

  assessment: {
    id: "assess_separation_techniques",
    title: "Separation Techniques Quiz",
    description: "Test your understanding of separation techniques",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a homogeneous mixture?",
        type: "short_answer",
        answer_key: "A mixture with uniform composition throughout",
        explanation: "Homogeneous mixtures have the same composition everywhere."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What does filtration separate?",
        type: "short_answer",
        answer_key: "Insoluble solids from liquids",
        explanation: "Filtration separates insoluble solids from liquids."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "easy",
        question: "What is removed during evaporation?",
        type: "short_answer",
        answer_key: "The solvent",
        explanation: "Evaporation removes the solvent, leaving the solute behind."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "Why is crystallisation used instead of evaporation?",
        type: "short_answer",
        answer_key: "It produces purer crystals",
        explanation: "Crystallisation produces purer crystals than evaporation."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What does simple distillation separate?",
        type: "short_answer",
        answer_key: "A liquid from a solution",
        explanation: "Simple distillation separates a liquid from a solution."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the difference between simple and fractional distillation?",
        type: "short_answer",
        answer_key: "Fractional distillation uses a fractionating column",
        explanation: "Fractional distillation uses a fractionating column to separate liquids with different boiling points."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What property is used in chromatography?",
        type: "short_answer",
        answer_key: "Solubility and adsorption",
        explanation: "Chromatography separates based on differences in solubility and adsorption."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is sublimation?",
        type: "short_answer",
        answer_key: "Solid changing directly to gas",
        explanation: "Sublimation is the direct change of a solid to a gas."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is solvent extraction?",
        type: "short_answer",
        answer_key: "Separating substances using two immiscible liquids based on solubility",
        explanation: "Solvent extraction separates substances based on their solubility in two different liquids."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "How would you separate salt from saltwater?",
        type: "short_answer",
        answer_key: "Evaporation or crystallisation",
        explanation: "Salt can be obtained from saltwater by evaporation or crystallisation."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "45 minutes",
      objectives: [
        "Understand mixtures and their types",
        "Explain and demonstrate separation techniques",
        "Choose appropriate techniques for different mixtures"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are separation techniques?" },
        { time: "5-10 min", activity: "Direct Instruction - Mixtures and Filtration" },
        { time: "10-15 min", activity: "Direct Instruction - Evaporation and Crystallisation" },
        { time: "15-20 min", activity: "Direct Instruction - Distillation" },
        { time: "20-25 min", activity: "Direct Instruction - Fractional Distillation" },
        { time: "25-30 min", activity: "Direct Instruction - Chromatography" },
        { time: "30-35 min", activity: "Direct Instruction - Other Techniques" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A mixture with uniform composition",
        prac_002: "Insoluble solids from liquids",
        prac_003: "The solvent",
        prac_004: "Separating liquids from solutions",
        prac_005: "Fractional distillation uses a fractionating column",
        prac_006: "It produces purer crystals",
        prac_007: "Solubility and adsorption",
        prac_008: "Solid to gas",
        prac_009: "Separating substances by solubility in two immiscible liquids",
        prac_010: "Evaporation or crystallisation"
      },
      assessment: {
        ass_001: "A mixture with uniform composition throughout",
        ass_002: "Insoluble solids from liquids",
        ass_003: "The solvent",
        ass_004: "It produces purer crystals",
        ass_005: "A liquid from a solution",
        ass_006: "Fractional distillation uses a fractionating column",
        ass_007: "Solubility and adsorption",
        ass_008: "Solid changing directly to gas",
        ass_009: "Separating substances using two immiscible liquids based on solubility",
        ass_010: "Evaporation or crystallisation"
      }
    },
    extensionActivities: [
      "Perform a filtration experiment",
      "Separate salt from saltwater by evaporation",
      "Analyze ink using paper chromatography",
      "Research fractional distillation in oil refining"
    ],
    differentiation: {
      struggling: [
        "Focus on basic techniques first",
        "Use simple examples",
        "Provide step-by-step guides",
        "Use visual aids"
      ],
      advanced: [
        "Research industrial applications",
        "Analyze separation efficiency",
        "Design a separation scheme",
        "Study advanced techniques"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Filtration Apparatus",
      description: "Diagram showing the filtration setup",
      url: "/diagrams/filtration-apparatus.png",
      alt: "Filtration apparatus diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Distillation Apparatus",
      description: "Diagram showing the distillation setup",
      url: "/diagrams/distillation-apparatus.png",
      alt: "Distillation apparatus diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Chromatography",
      description: "Diagram showing paper chromatography",
      url: "/diagrams/chromatography.png",
      alt: "Chromatography diagram"
    }
  ]
};