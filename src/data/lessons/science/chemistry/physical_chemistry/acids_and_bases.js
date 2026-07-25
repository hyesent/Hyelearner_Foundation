// Location: src/data/lessons/science/chemistry/physical_chemistry/acids_and_bases.js

export default {
  id: "chem_lesson_acids_bases_salts",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Acids, Bases and Salts",
  icon: "🧪",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of chemical bonding",
    "Knowledge of ions and ionic compounds",
    "Understanding of the periodic table",
    "Basic knowledge of chemical reactions"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_solubility",
      name: "Solubility",
      file: "science/chemistry/physical_chemistry/solubility.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Define acids, bases, and salts", indicator: "Student can explain what acids, bases, and salts are" },
    { id: "obj_002", level: "easy", description: "Identify the properties of acids", indicator: "Student can list the properties of acids" },
    { id: "obj_003", level: "easy", description: "Identify the properties of bases", indicator: "Student can list the properties of bases" },
    { id: "obj_004", level: "easy", description: "Identify common acids and bases", indicator: "Student can name common acids and bases and their uses" },
    { id: "obj_005", level: "medium", description: "Explain the Arrhenius theory of acids and bases", indicator: "Student can explain the Arrhenius definition" },
    { id: "obj_006", level: "medium", description: "Explain the Brønsted-Lowry theory of acids and bases", indicator: "Student can explain the Brønsted-Lowry definition" },
    { id: "obj_007", level: "medium", description: "Define pH and explain the pH scale", indicator: "Student can explain the pH scale and its significance" },
    { id: "obj_008", level: "medium", description: "Describe the process of neutralization", indicator: "Student can explain neutralization reactions" },
    { id: "obj_009", level: "medium", description: "Identify the products of neutralization reactions", indicator: "Student can predict the products of acid-base reactions" },
    { id: "obj_010", level: "medium", description: "Explain the concept of strong and weak acids", indicator: "Student can distinguish between strong and weak acids" },
    { id: "obj_011", level: "medium", description: "Explain the concept of strong and weak bases", indicator: "Student can distinguish between strong and weak bases" },
    { id: "obj_012", level: "hard", description: "Perform pH calculations", indicator: "Student can calculate pH from H⁺ concentration" },
    { id: "obj_013", level: "hard", description: "Identify and name salts from acid-base reactions", indicator: "Student can name salts formed from reactions" },
    { id: "obj_014", level: "hard", description: "Explain the concept of indicators and their use", indicator: "Student can explain how indicators work" },
    { id: "obj_015", level: "hard", description: "Explain the preparation of salts", indicator: "Student can describe methods of salt preparation" },
    { id: "obj_016", level: "hard", description: "Analyze acid-base reactions in real-world contexts", indicator: "Student can apply acid-base knowledge to everyday situations" }
  ],

  video: {
    id: "vid_001",
    title: "Acids, Bases and Salts",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about acids, bases, salts, pH, and neutralization reactions."
  },

  content: {
    introduction: `
      <h2>What are Acids, Bases and Salts?</h2>
      <p><strong>Acids</strong> are substances that release hydrogen ions (H⁺) in solution. <strong>Bases</strong> are substances that accept hydrogen ions or release hydroxide ions (OH⁻) in solution. <strong>Salts</strong> are ionic compounds formed when acids react with bases.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-red-50 p-4 rounded text-center">
          <h3 class="text-red-600">🧪 Acids</h3>
          <ul>
            <li>• Taste sour</li>
            <li>• Turn blue litmus red</li>
            <li>• pH less than 7</li>
            <li>• Release H⁺ ions</li>
            <li>• Examples: HCl, H₂SO₄</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🧪 Bases</h3>
          <ul>
            <li>• Taste bitter</li>
            <li>• Turn red litmus blue</li>
            <li>• pH greater than 7</li>
            <li>• Release OH⁻ ions</li>
            <li>• Examples: NaOH, KOH</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🧪 Salts</h3>
          <ul>
            <li>• Ionic compounds</li>
            <li>• Formed from acid-base reactions</li>
            <li>• Neutral (often pH 7)</li>
            <li>• Examples: NaCl, CaCO₃</li>
            <li>• Used in many applications</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="280" fill="#f8f9fa" rx="10"/>
          <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">The pH Scale</text>
          
          <!-- pH scale bar -->
          <rect x="50" y="60" width="500" height="30" rx="15" fill="none" stroke="#2c3e50" stroke-width="2"/>
          
          <!-- pH segments -->
          <rect x="50" y="60" width="50" height="30" rx="15" fill="#ff1744"/>
          <rect x="100" y="60" width="50" height="30" fill="#ff6d00"/>
          <rect x="150" y="60" width="50" height="30" fill="#ffab00"/>
          <rect x="200" y="60" width="50" height="30" fill="#ffd600"/>
          <rect x="250" y="60" width="50" height="30" fill="#76ff03"/>
          <rect x="300" y="60" width="50" height="30" fill="#00e676"/>
          <rect x="350" y="60" width="50" height="30" fill="#00bcd4"/>
          <rect x="400" y="60" width="50" height="30" fill="#2979ff"/>
          <rect x="450" y="60" width="50" height="30" fill="#d500f9"/>
          <rect x="500" y="60" width="50" height="30" rx="15" fill="#aa00ff"/>
          
          <!-- pH labels -->
          <text x="75" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">0</text>
          <text x="125" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">1</text>
          <text x="175" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">2</text>
          <text x="225" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">3</text>
          <text x="275" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">4</text>
          <text x="325" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">5</text>
          <text x="375" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">6</text>
          <text x="425" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">7</text>
          <text x="475" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">8</text>
          <text x="525" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">9</text>
          <text x="575" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">10</text>
          
          <!-- Labels -->
          <text x="100" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ff1744">Acidic</text>
          <text x="300" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Neutral</text>
          <text x="500" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#aa00ff">Alkaline</text>
          
          <text x="300" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">pH scale ranges from 0 (strong acid) to 14 (strong base). pH 7 is neutral.</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Properties of Acids and Bases",
        objective: "obj_002",
        text: `
          <h3>Properties of Acids and Bases</h3>
          <p>Acids and bases have distinct properties that allow us to identify them.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Properties of Acids</h4>
              <ul>
                <li>• Taste sour</li>
                <li>• Turn blue litmus paper red</li>
                <li>• React with metals to produce hydrogen gas</li>
                <li>• React with bases to produce salt and water</li>
                <li>• Conduct electricity (electrolytes)</li>
                <li>• pH less than 7</li>
                <li>• Release H⁺ ions in solution</li>
                <li>• Corrosive (strong acids)</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties of Bases</h4>
              <ul>
                <li>• Taste bitter</li>
                <li>• Feel slippery</li>
                <li>• Turn red litmus paper blue</li>
                <li>• React with acids to produce salt and water</li>
                <li>• Conduct electricity (electrolytes)</li>
                <li>• pH greater than 7</li>
                <li>• Release OH⁻ ions in solution</li>
                <li>• Corrosive (strong bases)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Common Acids and Bases",
        objective: "obj_004",
        text: `
          <h3>Common Acids and Bases</h3>
          <p>Many acids and bases are used in everyday life and industry.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Common Acids</h4>
              <ul>
                <li><strong>Hydrochloric acid (HCl):</strong></li>
                <li>• Found in stomach acid</li>
                <li>• Used for cleaning metals</li>
                <li><strong>Sulfuric acid (H₂SO₄):</strong></li>
                <li>• Used in batteries</li>
                <li>• Industrial production</li>
                <li><strong>Nitric acid (HNO₃):</strong></li>
                <li>• Used in fertilizers</li>
                <li>• Explosives</li>
                <li><strong>Citric acid:</strong></li>
                <li>• Found in citrus fruits</li>
                <li>• Used in food and drinks</li>
                <li><strong>Acetic acid (CH₃COOH):</strong></li>
                <li>• Found in vinegar</li>
                <li>• Food preservation</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Bases</h4>
              <ul>
                <li><strong>Sodium hydroxide (NaOH):</strong></li>
                <li>• Used in soap making</li>
                <li>• Drain cleaners</li>
                <li><strong>Potassium hydroxide (KOH):</strong></li>
                <li>• Used in batteries</li>
                <li>• Fertilizers</li>
                <li><strong>Calcium hydroxide (Ca(OH)₂):</strong></li>
                <li>• Used in cement</li>
                <li>• Agriculture (lime)</li>
                <li><strong>Ammonia (NH₃):</strong></li>
                <li>• Cleaning products</li>
                <li>• Fertilizers</li>
                <li><strong>Magnesium hydroxide (Mg(OH)₂):</strong></li>
                <li>• Antacids</li>
                <li>• Laxatives</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Theories of Acids and Bases",
        objective: "obj_005",
        text: `
          <h3>Acid-Base Theories</h3>
          <p>There are two main theories that define acids and bases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Arrhenius Theory</h4>
              <ul>
                <li><strong>Acid:</strong> A substance that produces H⁺ ions in water</li>
                <li><strong>Base:</strong> A substance that produces OH⁻ ions in water</li>
                <li><strong>Limitations:</strong></li>
                <li>• Only applies to aqueous solutions</li>
                <li>• Cannot explain basicity of ammonia (no OH⁻)</li>
                <li>• Requires water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Brønsted-Lowry Theory</h4>
              <ul>
                <li><strong>Acid:</strong> A proton (H⁺) donor</li>
                <li><strong>Base:</strong> A proton (H⁺) acceptor</li>
                <li><strong>Advantages:</strong></li>
                <li>• Applies to non-aqueous systems</li>
                <li>• Explains basicity of NH₃</li>
                <li>• Includes conjugate acid-base pairs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Strong and Weak Acids",
        objective: "obj_010",
        text: `
          <h3>Strong and Weak Acids</h3>
          <p>Acids are classified as <strong>strong</strong> or <strong>weak</strong> based on how completely they dissociate in water.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Strong Acids</h4>
              <ul>
                <li>• Dissociate completely</li>
                <li>• All molecules form ions</li>
                <li>• High concentration of H⁺</li>
                <li>• Very low pH</li>
                <li>• Examples:</li>
                <ul>
                  <li>HCl (hydrochloric acid)</li>
                  <li>H₂SO₄ (sulfuric acid)</li>
                  <li>HNO₃ (nitric acid)</li>
                  <li>HClO₄ (perchloric acid)</li>
                </ul>
                <li>• HCl → H⁺ + Cl⁻ (complete)</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Weak Acids</h4>
              <ul>
                <li>• Dissociate partially</li>
                <li>• Equilibrium between ions and molecules</li>
                <li>• Low concentration of H⁺</li>
                <li>• Higher pH than strong acids</li>
                <li>• Examples:</li>
                <ul>
                  <li>CH₃COOH (acetic acid)</li>
                  <li>H₂CO₃ (carbonic acid)</li>
                  <li>H₃PO₄ (phosphoric acid)</li>
                  <li>H₂S (hydrosulfuric acid)</li>
                </ul>
                <li>• CH₃COOH ⇌ H⁺ + CH₃COO⁻ (partial)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Strong and Weak Bases",
        objective: "obj_011",
        text: `
          <h3>Strong and Weak Bases</h3>
          <p>Bases are also classified as <strong>strong</strong> or <strong>weak</strong> based on dissociation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Strong Bases</h4>
              <ul>
                <li>• Dissociate completely</li>
                <li>• All molecules form ions</li>
                <li>• High concentration of OH⁻</li>
                <li>• Very high pH</li>
                <li>• Examples:</li>
                <ul>
                  <li>NaOH (sodium hydroxide)</li>
                  <li>KOH (potassium hydroxide)</li>
                  <li>Ca(OH)₂ (calcium hydroxide)</li>
                  <li>Ba(OH)₂ (barium hydroxide)</li>
                </ul>
                <li>• NaOH → Na⁺ + OH⁻ (complete)</li>
              </ul>
            </div>
            <div class="bg-lightblue-50 p-3 rounded">
              <h4>📌 Weak Bases</h4>
              <ul>
                <li>• Dissociate partially</li>
                <li>• Equilibrium between ions and molecules</li>
                <li>• Low concentration of OH⁻</li>
                <li>• Lower pH than strong bases</li>
                <li>• Examples:</li>
                <ul>
                  <li>NH₃ (ammonia)</li>
                  <li>Al(OH)₃ (aluminum hydroxide)</li>
                  <li>Mg(OH)₂ (magnesium hydroxide)</li>
                  <li>Fe(OH)₃ (iron(III) hydroxide)</li>
                </ul>
                <li>• NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (partial)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "pH Scale and Calculations",
        objective: "obj_012",
        text: `
          <h3>pH Scale</h3>
          <p><strong>pH</strong> is a measure of the concentration of H⁺ ions in a solution.</p>
          
          <div class="formula-box">
            <h4>📝 pH Formula:</h4>
            <p><strong>pH = -log[H⁺]</strong></p>
            <ul>
              <li>• pH ranges from 0 to 14</li>
              <li>• pH 7 = neutral (pure water)</li>
              <li>• pH < 7 = acidic</li>
              <li>• pH > 7 = basic (alkaline)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Calculate the pH of a solution with [H⁺] = 1.0 × 10⁻³ M.</li>
              <li><strong>Solution:</strong></li>
              <li>pH = -log(1.0 × 10⁻³)</li>
              <li>pH = -(-3) = 3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Neutralization Reactions",
        objective: "obj_008",
        text: `
          <h3>Neutralization</h3>
          <p><strong>Neutralization</strong> is the reaction between an acid and a base to produce a salt and water.</p>
          
          <div class="formula-box">
            <h4>📝 General Equation:</h4>
            <p><strong>Acid + Base → Salt + Water</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>• <strong>HCl + NaOH → NaCl + H₂O</strong></li>
              <li>• <strong>H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</strong></li>
              <li>• <strong>HNO₃ + KOH → KNO₃ + H₂O</strong></li>
              <li>• <strong>HCl + NH₃ → NH₄Cl</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Salts and Their Preparation",
        objective: "obj_013",
        text: `
          <h3>Salts</h3>
          <p><strong>Salts</strong> are ionic compounds formed when the H⁺ of an acid is replaced by a metal ion or NH₄⁺.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Salts</h4>
              <ul>
                <li><strong>Normal salts:</strong> All H⁺ replaced</li>
                <li>• NaCl, K₂SO₄, CaCO₃</li>
                <li><strong>Acid salts:</strong> Some H⁺ replaced</li>
                <li>• NaHCO₃, NaHSO₄</li>
                <li><strong>Basic salts:</strong> Some OH⁻ remains</li>
                <li>• Mg(OH)Cl</li>
              </ul>
            </div>
            <div class="bg-lightgreen-50 p-3 rounded">
              <h4>📌 Preparation Methods</h4>
              <ul>
                <li><strong>Neutralization:</strong></li>
                <li>• Acid + Base → Salt + Water</li>
                <li><strong>Acid + Metal:</strong></li>
                <li>• Acid + Metal → Salt + H₂</li>
                <li><strong>Acid + Metal Oxide:</strong></li>
                <li>• Acid + Metal Oxide → Salt + H₂O</li>
                <li><strong>Acid + Metal Carbonate:</strong></li>
                <li>• Acid + Carbonate → Salt + H₂O + CO₂</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-red-50 p-4 rounded">
          <h4>🧪 Acids</h4>
          <ul>
            <li>• pH < 7</li>
            <li>• Release H⁺ ions</li>
            <li>• Turn blue litmus red</li>
            <li>• React with metals to produce H₂</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h4>🧪 Bases</h4>
          <ul>
            <li>• pH > 7</li>
            <li>• Release OH⁻ ions</li>
            <li>• Turn red litmus blue</li>
            <li>• React with acids to form salts</li>
          </ul>
        </div>
      </div>
      <div class="bg-green-50 p-4 rounded mt-4">
        <h4>📌 Neutralization:</h4>
        <p><strong>Acid + Base → Salt + Water</strong></p>
        <p>pH of the resulting salt depends on the strength of the acid and base used.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "All acids are dangerous",
        correction: "Many acids are found in food and are safe in small amounts",
        explanation: "Citric acid in fruits, acetic acid in vinegar are safe."
      },
      {
        id: "mis_002",
        misconception: "Bases are only found in the lab",
        correction: "Bases are common in household products",
        explanation: "Soap, baking soda, and cleaning products contain bases."
      },
      {
        id: "mis_003",
        misconception: "pH 7 means no ions",
        correction: "Pure water has H⁺ and OH⁻ ions at equal concentrations",
        explanation: "At pH 7, [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Acids and bases are used in medicine.",
        example: "Antacids for heartburn, aspirin, vitamin C."
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Soil pH affects crop growth.",
        example: "Adding lime to acidic soil to increase pH."
      },
      {
        id: "app_003",
        title: "Food Industry",
        description: "Acids and bases are used in food preservation.",
        example: "Vinegar (acetic acid) in pickling, baking soda."
      },
      {
        id: "app_004",
        title: "Cleaning Products",
        description: "Bases are used in many cleaning products.",
        example: "Ammonia, bleach, drain cleaners."
      }
    ]
  },

  keyTerms: [
    { term: "Acid", definition: "A substance that releases H⁺ ions in solution." },
    { term: "Base", definition: "A substance that releases OH⁻ ions or accepts H⁺ ions." },
    { term: "Salt", definition: "An ionic compound formed from an acid-base reaction." },
    { term: "Neutralization", definition: "The reaction of an acid with a base to form a salt and water." },
    { term: "pH", definition: "A measure of the concentration of H⁺ ions in solution." },
    { term: "Strong Acid", definition: "An acid that dissociates completely in water." },
    { term: "Weak Acid", definition: "An acid that dissociates partially in water." },
    { term: "Strong Base", definition: "A base that dissociates completely in water." },
    { term: "Weak Base", definition: "A base that dissociates partially in water." },
    { term: "Indicator", definition: "A substance that changes color in acidic or basic conditions." },
    { term: "Hydronium Ion", definition: "H₃O⁺ ion formed when H⁺ attaches to a water molecule." },
    { term: "Conjugate Acid", definition: "The species formed when a base gains a proton." },
    { term: "Conjugate Base", definition: "The species formed when an acid loses a proton." },
    { term: "Arrhenius Theory", definition: "Acids produce H⁺; bases produce OH⁻ in water." },
    { term: "Brønsted-Lowry Theory", definition: "Acids donate protons; bases accept protons." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is an acid?",
      type: "multiple_choice",
      options: [
        "A substance that releases H⁺ ions",
        "A substance that releases OH⁻ ions",
        "A substance that accepts protons",
        "A substance that has pH greater than 7"
      ],
      answer: "A substance that releases H⁺ ions",
      explanation: "Acids release hydrogen ions (H⁺) in solution."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the pH range of acids?",
      type: "multiple_choice",
      options: ["0-7", "7-14", "7", "0-14"],
      answer: "0-7",
      explanation: "Acids have a pH less than 7."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the pH range of bases?",
      type: "multiple_choice",
      options: ["0-7", "7-14", "7", "0-14"],
      answer: "7-14",
      explanation: "Bases have a pH greater than 7."
    },
    {
      id: "prac_004",
      objective: "obj_008",
      difficulty: "medium",
      question: "What are the products of neutralization?",
      type: "multiple_choice",
      options: ["Salt and water", "Acid and base", "Salt and acid", "Water and base"],
      answer: "Salt and water",
      explanation: "Neutralization produces a salt and water."
    },
    {
      id: "prac_005",
      objective: "obj_010",
      difficulty: "medium",
      question: "Which of the following is a strong acid?",
      type: "multiple_choice",
      options: ["HCl", "CH₃COOH", "H₂CO₃", "H₃PO₄"],
      answer: "HCl",
      explanation: "HCl (hydrochloric acid) is a strong acid that dissociates completely."
    },
    {
      id: "prac_006",
      objective: "obj_011",
      difficulty: "medium",
      question: "Which of the following is a weak base?",
      type: "multiple_choice",
      options: ["NaOH", "KOH", "NH₃", "Ca(OH)₂"],
      answer: "NH₃",
      explanation: "NH₃ (ammonia) is a weak base that dissociates partially."
    },
    {
      id: "prac_007",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the pH of a solution with [H⁺] = 1.0 × 10⁻⁴ M?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "pH = -log(1.0 × 10⁻⁴) = 4."
    },
    {
      id: "prac_008",
      objective: "obj_012",
      difficulty: "hard",
      question: "A solution has a pH of 2. What is the [H⁺] concentration?",
      type: "multiple_choice",
      options: ["1.0 × 10⁻² M", "1.0 × 10⁻³ M", "1.0 × 10⁻⁴ M", "1.0 × 10⁻⁵ M"],
      answer: "1.0 × 10⁻² M",
      explanation: "[H⁺] = 10⁻² = 1.0 × 10⁻² M."
    }
  ],

  assessment: {
    id: "assess_acids_bases_salts",
    title: "Acids, Bases and Salts Quiz",
    description: "Test your understanding of acids, bases and salts",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between an acid and a base?",
        type: "short_answer",
        answer_key: "Acids release H⁺ ions; bases release OH⁻ ions or accept H⁺ ions",
        explanation: "Acids are H⁺ donors; bases are H⁺ acceptors or OH⁻ donors."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the pH range for acids?",
        type: "short_answer",
        answer_key: "0 to 7",
        explanation: "Acids have a pH less than 7."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the pH range for bases?",
        type: "short_answer",
        answer_key: "7 to 14",
        explanation: "Bases have a pH greater than 7."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Give an example of a common acid and a common base.",
        type: "short_answer",
        answer_key: "HCl (acid) and NaOH (base) (or any valid pair)",
        explanation: "Common acids: HCl, H₂SO₄. Common bases: NaOH, KOH."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Arrhenius definition of an acid?",
        type: "short_answer",
        answer_key: "A substance that produces H⁺ ions in water",
        explanation: "Arrhenius defined acids as substances that produce H⁺ in aqueous solution."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the Brønsted-Lowry definition of a base?",
        type: "short_answer",
        answer_key: "A proton (H⁺) acceptor",
        explanation: "Brønsted-Lowry bases accept protons (H⁺)."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is the general equation for neutralization?",
        type: "short_answer",
        answer_key: "Acid + Base → Salt + Water",
        explanation: "Neutralization reactions produce a salt and water."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the difference between a strong acid and a weak acid?",
        type: "short_answer",
        answer_key: "Strong acids dissociate completely; weak acids dissociate partially",
        explanation: "Strong acids ionize fully; weak acids ionize only partially."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "Calculate the pH of a solution with [H⁺] = 1.0 × 10⁻⁶ M.",
        type: "short_answer",
        answer_key: "6",
        explanation: "pH = -log(1.0 × 10⁻⁶) = 6."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "A solution has a pH of 3. What is the [H⁺] concentration?",
        type: "short_answer",
        answer_key: "1.0 × 10⁻³ M",
        explanation: "[H⁺] = 10⁻³ = 1.0 × 10⁻³ M."
      },
      {
        id: "ass_011",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is an indicator and how does it work?",
        type: "short_answer",
        answer_key: "A substance that changes color in acidic or basic conditions",
        explanation: "Indicators change color depending on the pH of the solution."
      },
      {
        id: "ass_012",
        objective: "obj_016",
        difficulty: "hard",
        question: "Why is antacid used to treat heartburn?",
        type: "short_answer",
        answer_key: "Antacids are bases that neutralize excess stomach acid",
        explanation: "Antacids neutralize stomach acid (HCl) to relieve heartburn."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand acids, bases and salts",
        "Apply acid-base theories",
        "Perform pH calculations",
        "Explain neutralization reactions"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Acids, bases and salts" },
        { time: "5-10 min", activity: "Direct Instruction - Properties of Acids and Bases" },
        { time: "10-15 min", activity: "Direct Instruction - Acid-Base Theories" },
        { time: "15-20 min", activity: "Direct Instruction - Strong and Weak Acids/Bases" },
        { time: "20-25 min", activity: "Direct Instruction - pH Scale" },
        { time: "25-30 min", activity: "Direct Instruction - Neutralization" },
        { time: "30-35 min", activity: "Direct Instruction - Salts" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A substance that releases H⁺ ions",
        prac_002: "0-7",
        prac_003: "7-14",
        prac_004: "Salt and water",
        prac_005: "HCl",
        prac_006: "NH₃",
        prac_007: "4",
        prac_008: "1.0 × 10⁻² M"
      },
      assessment: {
        ass_001: "Acids release H⁺ ions; bases release OH⁻ ions or accept H⁺ ions",
        ass_002: "0 to 7",
        ass_003: "7 to 14",
        ass_004: "HCl (acid) and NaOH (base) (or any valid pair)",
        ass_005: "A substance that produces H⁺ ions in water",
        ass_006: "A proton (H⁺) acceptor",
        ass_007: "Acid + Base → Salt + Water",
        ass_008: "Strong acids dissociate completely; weak acids dissociate partially",
        ass_009: "6",
        ass_010: "1.0 × 10⁻³ M",
        ass_011: "A substance that changes color in acidic or basic conditions",
        ass_012: "Antacids are bases that neutralize excess stomach acid"
      }
    },
    extensionActivities: [
      "Test the pH of different household substances",
      "Prepare a salt by neutralization",
      "Research the pH of common foods",
      "Investigate acid rain and its effects"
    ],
    differentiation: {
      struggling: [
        "Focus on basic definitions first",
        "Use simple examples",
        "Practice with pH calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research acid-base equilibrium",
        "Study advanced acid-base theories",
        "Explore buffer solutions",
        "Investigate acid-base indicators"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "pH Scale",
      description: "Diagram showing the pH scale",
      url: "/diagrams/ph-scale.png",
      alt: "pH scale diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Neutralization Reaction",
      description: "Diagram showing acid-base neutralization",
      url: "/diagrams/neutralization.png",
      alt: "Neutralization diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Common Acids and Bases",
      description: "Chart of common acids and bases",
      url: "/diagrams/common-acids-bases.png",
      alt: "Common acids and bases chart"
    }
  ]
};