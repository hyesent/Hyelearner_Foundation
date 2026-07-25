// Location: src/data/lessons/science/biology/human_body/excretory_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_excretory_system",
  subject: "Biology",
  topic: "Excretory System",
  name: "Excretory System",
  icon: "🧫",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 13,
    totalPracticeQuestions: 19,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 15,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of the circulatory system",
    "Knowledge of the respiratory system",
    "Basic understanding of homeostasis"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Immunity",
      file: "science/biology/human_body/immunity.js"
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
      description: "Define the excretory system and explain its functions",
      indicator: "Student can explain what the excretory system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main organs of excretion",
      indicator: "Student can name the organs involved in excretion"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure and function of the kidneys",
      indicator: "Student can label the parts of the kidney"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the process of urine formation",
      indicator: "Student can describe filtration, reabsorption, and secretion"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the structure and function of the nephron",
      indicator: "Student can explain the role of the nephron"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of the ureters, bladder, and urethra",
      indicator: "Student can describe the urinary tract"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the role of the skin in excretion",
      indicator: "Student can describe how the skin excretes waste"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of the lungs in excretion",
      indicator: "Student can describe how the lungs excrete waste"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the role of the liver in excretion",
      indicator: "Student can describe the liver's role in waste removal"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the importance of homeostasis",
      indicator: "Student can discuss how excretion maintains balance"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain common kidney disorders",
      indicator: "Student can describe kidney stones and kidney failure"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the process of dialysis",
      indicator: "Student can describe how dialysis works"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Compare the composition of urine and blood",
      indicator: "Student can distinguish between urine and blood components"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Excretory System - Removing Waste",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the excretory system and how the body removes waste products."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Excretory System</h2>
      <p>The <strong>excretory system</strong> is responsible for removing waste products from the body. It maintains homeostasis by regulating the composition of body fluids and removing toxic substances.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧫 Key Concepts</h3>
          <ul>
            <li>✓ Excretion vs Egestion</li>
            <li>✓ Kidneys</li>
            <li>✓ Nephron</li>
            <li>✓ Urine Formation</li>
            <li>✓ Homeostasis</li>
            <li>✓ Dialysis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Kidneys filter ~180 liters of blood daily</li>
            <li>• The body produces ~1-2 liters of urine daily</li>
            <li>• Each kidney has ~1 million nephrons</li>
            <li>• Kidneys are the size of a fist</li>
            <li>• Dialysis can replace kidney function</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Excretory System Matters</h4>
        <p>The excretory system removes harmful waste products from the body. Without it, toxic substances would build up and cause serious health problems.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Excretion vs Egestion",
        objective: "obj_001",
        text: `
          <h3>Excretion vs Egestion</h3>
          <p>It's important to understand the difference between excretion and egestion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Excretion</h4>
              <ul>
                <li>• Removal of metabolic waste</li>
                <li>• Waste produced by the body</li>
                <li>• Examples:</li>
                <li>• CO₂ from respiration</li>
                <li>• Urea from protein breakdown</li>
                <li>• Excess water and salts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Egestion</h4>
              <ul>
                <li>• Removal of undigested food</li>
                <li>• Waste from the digestive system</li>
                <li>• Examples:</li>
                <li>• Feces</li>
                <li>• Not a product of metabolism</li>
                <li>• Not considered excretion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Organs of Excretion",
        objective: "obj_002",
        text: `
          <h3>Organs Involved in Excretion</h3>
          <p>Several organs work together to remove waste from the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Primary Excretory Organs</h4>
              <ul>
                <li>• <strong>Kidneys:</strong> Remove urea, excess water, salts</li>
                <li>• <strong>Skin:</strong> Removes water, salts, urea (sweat)</li>
                <li>• <strong>Lungs:</strong> Remove CO₂ and water vapor</li>
                <li>• <strong>Liver:</strong> Converts toxic substances</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Waste Products</h4>
              <ul>
                <li>• <strong>CO₂:</strong> Produced by respiration</li>
                <li>• <strong>Urea:</strong> Produced by protein breakdown</li>
                <li>• <strong>Uric acid:</strong> Produced by nucleic acid breakdown</li>
                <li>• <strong>Water:</strong> Excess water</li>
                <li>• <strong>Salts:</strong> Excess minerals</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Kidneys",
        objective: "obj_003",
        text: `
          <h3>The Kidneys</h3>
          <p>The <strong>kidneys</strong> are the main organs of excretion. They filter blood and produce urine.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Bean-shaped organs</li>
                <li>• Located in the lower back</li>
                <li>• <strong>Renal cortex:</strong> Outer region</li>
                <li>• <strong>Renal medulla:</strong> Inner region</li>
                <li>• <strong>Renal pelvis:</strong> Collects urine</li>
                <li>• <strong>Nephrons:</strong> Functional units</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Filtration:</strong> Remove waste from blood</li>
                <li>• <strong>Reabsorption:</strong> Return useful substances</li>
                <li>• <strong>Secretion:</strong> Remove additional waste</li>
                <li>• <strong>Regulation:</strong> Water and salt balance</li>
                <li>• <strong>pH regulation:</strong> Maintain acid-base balance</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Kidney</text>
              
              <!-- Kidney shape -->
              <g transform="translate(250, 170)">
                <!-- Outer kidney -->
                <path d="M-60 -60 Q-70 -80 -40 -90 Q0 -100 40 -90 Q70 -80 60 -60 Q70 -40 60 0 Q65 40 60 60 Q70 80 40 90 Q0 100 -40 90 Q-70 80 -60 60 Q-70 40 -60 0 Q-65 -40 -60 -60 Z" fill="#ff8a80" stroke="#c62828" stroke-width="3"/>
                
                <!-- Renal cortex -->
                <path d="M-50 -50 Q-55 -65 -35 -75 Q0 -80 35 -75 Q55 -65 50 -50 Q55 -35 50 0 Q55 35 50 50 Q55 65 35 75 Q0 80 -35 75 Q-55 65 -50 50 Q-55 35 -50 0 Q-55 -35 -50 -50 Z" fill="#ffcdd2" stroke="#c62828" stroke-width="1.5"/>
                
                <!-- Renal medulla -->
                <path d="M-30 -30 Q-35 -45 -20 -50 Q0 -55 20 -50 Q35 -45 30 -30 Q35 -20 30 0 Q35 20 30 30 Q35 45 20 50 Q0 55 -20 50 Q-35 45 -30 30 Q-35 20 -30 0 Q-35 -20 -30 -30 Z" fill="#ffab91" stroke="#c62828" stroke-width="1.5"/>
                
                <!-- Renal pelvis -->
                <path d="M-15 25 Q-10 35 0 40 Q10 35 15 25" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                
                <!-- Ureter -->
                <rect x="-8" y="40" width="16" height="40" rx="3" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="100" text-anchor="middle" font-size="12" fill="#c62828">Renal Cortex</text>
              <text x="250" y="125" text-anchor="middle" font-size="12" fill="#c62828">Renal Medulla</text>
              <text x="250" y="270" text-anchor="middle" font-size="12" fill="#c62828">Renal Pelvis</text>
              <text x="250" y="295" text-anchor="middle" font-size="12" fill="#c62828">Ureter</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Nephron",
        objective: "obj_005",
        text: `
          <h3>The Nephron - The Functional Unit</h3>
          <p>The <strong>nephron</strong> is the functional unit of the kidney where urine is formed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• <strong>Bowman's capsule:</strong> Surrounds glomerulus</li>
                <li>• <strong>Glomerulus:</strong> Capillary network</li>
                <li>• <strong>Proximal convoluted tubule:</strong> Reabsorption</li>
                <li>• <strong>Loop of Henle:</strong> Concentration</li>
                <li>• <strong>Distal convoluted tubule:</strong> Secretion</li>
                <li>• <strong>Collecting duct:</strong> Collects urine</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Filtration:</strong> In the glomerulus</li>
                <li>• <strong>Reabsorption:</strong> Useful substances returned</li>
                <li>• <strong>Secretion:</strong> Additional waste removed</li>
                <li>• <strong>Excretion:</strong> Urine formed</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Urine Formation",
        objective: "obj_004",
        text: `
          <h3>Urine Formation</h3>
          <p>Urine is formed through three main processes.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Filtration</h4>
              <ul>
                <li>• Blood enters glomerulus</li>
                <li>• Filtered in Bowman's capsule</li>
                <li>• Water, salts, urea pass through</li>
                <li>• Blood cells and proteins stay</li>
                <li>• Filtrate enters tubule</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Reabsorption</h4>
              <ul>
                <li>• In proximal tubule</li>
                <li>• Glucose, amino acids reabsorbed</li>
                <li>• Water and salts reabsorbed</li>
                <li>• Useful substances returned</li>
                <li>• Active and passive transport</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>3. Secretion</h4>
              <ul>
                <li>• In distal tubule</li>
                <li>• Additional waste removed</li>
                <li>• Drugs, toxins, excess ions</li>
                <li>• Regulation of pH</li>
                <li>• Final urine formed</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Urine Formation Process</text>
              
              <!-- Step 1: Filtration -->
              <g transform="translate(100, 160)">
                <circle cx="0" cy="0" r="35" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white" font-weight="bold">1</text>
                <text x="0" y="50" text-anchor="middle" font-size="12" fill="#c62828">Filtration</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#c62828">Blood → Filtrate</text>
              </g>
              
              <!-- Arrow -->
              <text x="150" y="165" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 2: Reabsorption -->
              <g transform="translate(230, 160)">
                <circle cx="0" cy="0" r="35" fill="#81c784" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2</text>
                <text x="0" y="50" text-anchor="middle" font-size="12" fill="#2e7d32">Reabsorption</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#2e7d32">Nutrients → Blood</text>
              </g>
              
              <!-- Arrow -->
              <text x="280" y="165" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 3: Secretion -->
              <g transform="translate(360, 160)">
                <circle cx="0" cy="0" r="35" fill="#ffb74d" stroke="#ef6c00" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white" font-weight="bold">3</text>
                <text x="0" y="50" text-anchor="middle" font-size="12" fill="#ef6c00">Secretion</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#ef6c00">Waste → Filtrate</text>
              </g>
              
              <!-- Arrow -->
              <text x="410" y="165" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 4: Urine -->
              <g transform="translate(490, 160)">
                <circle cx="0" cy="0" r="35" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white" font-weight="bold">4</text>
                <text x="0" y="50" text-anchor="middle" font-size="12" fill="#1565c0">Urine</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#1565c0">Excretion</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The Urinary Tract",
        objective: "obj_006",
        text: `
          <h3>The Urinary Tract</h3>
          <p>Urine travels through a series of structures before being eliminated.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ureters</h4>
              <ul>
                <li>• Two tubes</li>
                <li>• Connect kidneys to bladder</li>
                <li>• Carry urine by peristalsis</li>
                <li>• Prevent backflow</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Bladder</h4>
              <ul>
                <li>• Stores urine</li>
                <li>• Muscular organ</li>
                <li>• Can hold ~500ml</li>
                <li>• Controlled by sphincters</li>
                <li>• Sensation of fullness</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Urethra</h4>
              <ul>
                <li>• Tube from bladder</li>
                <li>• Carries urine out</li>
                <li>• Different lengths</li>
                <li>• Controlled by sphincters</li>
                <li>• Final elimination</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Other Excretory Organs",
        objective: "obj_007",
        text: `
          <h3>Other Organs Involved in Excretion</h3>
          <p>Several other organs help remove waste from the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Skin</h4>
              <ul>
                <li>• Excretes water, salts, urea</li>
                <li>• <strong>Sweat glands:</strong> Produce sweat</li>
                <li>• Helps regulate temperature</li>
                <li>• Also removes toxins</li>
                <li>• Contains pores</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Lungs</h4>
              <ul>
                <li>• Excrete CO₂</li>
                <li>• Excrete water vapor</li>
                <li>• Continuous process</li>
                <li>• Essential for respiration</li>
                <li>• Regulates pH balance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Liver's Role",
        objective: "obj_009",
        text: `
          <h3>The Liver in Excretion</h3>
          <p>The <strong>liver</strong> plays a crucial role in removing toxins from the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Detoxifies harmful substances</li>
                <li>• Converts ammonia to urea</li>
                <li>• Breakdown of hemoglobin</li>
                <li>• Produces bile</li>
                <li>• Removes drugs and alcohol</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Waste Products</h4>
              <ul>
                <li>• <strong>Urea:</strong> From protein breakdown</li>
                <li>• <strong>Bilirubin:</strong> From red blood cells</li>
                <li>• <strong>Bile salts:</strong> From cholesterol</li>
                <li>• All processed by the liver</li>
                <li>• Eliminated in urine or feces</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Homeostasis",
        objective: "obj_010",
        text: `
          <h3>Homeostasis and Excretion</h3>
          <p>Excretion is essential for maintaining <strong>homeostasis</strong> - a stable internal environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 What Homeostasis Maintains</h4>
              <ul>
                <li>• Water balance</li>
                <li>• Salt balance</li>
                <li>• pH balance</li>
                <li>• Temperature regulation</li>
                <li>• Blood pressure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How Excretion Helps</h4>
              <ul>
                <li>• Removes excess water</li>
                <li>• Removes excess salts</li>
                <li>• Removes acids</li>
                <li>• Maintains blood pH</li>
                <li>• Regulates blood volume</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Kidney Disorders",
        objective: "obj_011",
        text: `
          <h3>Kidney Disorders</h3>
          <p>Several disorders can affect the kidneys and urinary system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Disorders</h4>
              <ul>
                <li><strong>Kidney stones:</strong> Mineral deposits</li>
                <li><strong>Kidney infection:</strong> Bacterial infection</li>
                <li><strong>Kidney failure:</strong> Loss of function</li>
                <li><strong>Glomerulonephritis:</strong> Inflammation</li>
                <li><strong>UTI:</strong> Urinary tract infection</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Prevention</h4>
              <ul>
                <li>• Drink plenty of water</li>
                <li>• Healthy diet</li>
                <li>• Limit salt</li>
                <li>• Regular exercise</li>
                <li>• Avoid smoking</li>
                <li>• Control blood pressure</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Dialysis",
        objective: "obj_012",
        text: `
          <h3>Dialysis</h3>
          <p><strong>Dialysis</strong> is a medical treatment that performs the functions of the kidneys when they fail.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Dialysis Works</h4>
              <ul>
                <li>• Blood is removed from the body</li>
                <li>• Passed through a dialyzer</li>
                <li>• Waste products are filtered out</li>
                <li>• Clean blood is returned</li>
                <li>• Takes several hours</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Dialysis</h4>
              <ul>
                <li><strong>Hemodialysis:</strong></li>
                <li>• Uses a machine</li>
                <li>• 3-4 times per week</li>
                <li><strong>Peritoneal dialysis:</strong></li>
                <li>• Uses the peritoneum</li>
                <li>• Daily treatment</li>
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
          <h4>🧫 Excretory System</h4>
          <ul>
            <li>• Removes metabolic waste</li>
            <li>• Kidneys produce urine</li>
            <li>• Skin, lungs, and liver also excrete</li>
            <li>• Maintains homeostasis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Processes</h4>
          <ul>
            <li>• Filtration: Blood → Filtrate</li>
            <li>• Reabsorption: Nutrients → Blood</li>
            <li>• Secretion: Waste → Filtrate</li>
            <li>• Urine is formed and excreted</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The excretory system is essential for removing waste and maintaining a stable internal environment.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Excretion and egestion are the same",
        correction: "Excretion removes metabolic waste; egestion removes undigested food",
        explanation: "Excretion deals with waste from metabolism; egestion deals with undigested food."
      },
      {
        id: "mis_002",
        misconception: "Urine is just water",
        correction: "Urine contains water, urea, salts, and other waste products",
        explanation: "Urine is a complex solution of various waste products."
      },
      {
        id: "mis_003",
        misconception: "The kidneys produce urine from water alone",
        correction: "Kidneys filter blood to produce urine",
        explanation: "Urine is produced from blood filtration, not just water."
      },
      {
        id: "mis_004",
        misconception: "Dialysis cures kidney failure",
        correction: "Dialysis manages kidney failure but does not cure it",
        explanation: "Dialysis replaces kidney function temporarily but doesn't cure the underlying condition."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding helps treat kidney disorders.",
        example: "Dialysis, kidney transplant"
      },
      {
        id: "app_002",
        title: "Public Health",
        description: "Understanding helps prevent kidney disease.",
        example: "Screening programs, hydration awareness"
      },
      {
        id: "app_003",
        title: "Sports",
        description: "Understanding helps with hydration.",
        example: "Fluid replacement during exercise"
      },
      {
        id: "app_004",
        title: "Nutrition",
        description: "Understanding helps with dietary choices.",
        example: "Salt intake, protein consumption"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Excretion", definition: "Removal of metabolic waste from the body." },
    { term: "Egestion", definition: "Removal of undigested food (feces)." },
    { term: "Kidney", definition: "Organ that filters blood and produces urine." },
    { term: "Nephron", definition: "Functional unit of the kidney." },
    { term: "Glomerulus", definition: "Capillary network in the nephron." },
    { term: "Bowman's Capsule", definition: "Structure surrounding the glomerulus." },
    { term: "Filtration", definition: "Process of removing waste from blood." },
    { term: "Reabsorption", definition: "Return of useful substances to blood." },
    { term: "Secretion", definition: "Removal of additional waste into filtrate." },
    { term: "Urine", definition: "Waste fluid produced by the kidneys." },
    { term: "Urea", definition: "Waste product from protein breakdown." },
    { term: "Ureter", definition: "Tube connecting kidney to bladder." },
    { term: "Bladder", definition: "Organ that stores urine." },
    { term: "Urethra", definition: "Tube that carries urine out of the body." },
    { term: "Dialysis", definition: "Medical treatment that filters blood." },
    { term: "Homeostasis", definition: "Maintaining a stable internal environment." },
    { term: "Sweat", definition: "Fluid excreted by the skin." },
    { term: "CO₂", definition: "Waste product of respiration." },
    { term: "Toxin", definition: "Harmful substance removed by the body." },
    { term: "Loop of Henle", definition: "Part of the nephron for concentration." }
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
      question: "What is the main function of the excretory system?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To remove waste products from the body",
        "To pump blood",
        "To produce hormones"
      ],
      answer: "To remove waste products from the body",
      explanation: "The excretory system removes metabolic waste from the body."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which organ is responsible for filtering blood?",
      type: "multiple_choice",
      options: ["Liver", "Kidneys", "Lungs", "Skin"],
      answer: "Kidneys",
      explanation: "The kidneys filter blood to remove waste."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is urine produced by?",
      type: "multiple_choice",
      options: ["Liver", "Kidneys", "Lungs", "Heart"],
      answer: "Kidneys",
      explanation: "Urine is produced by the kidneys."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What are the three main steps of urine formation?",
      type: "multiple_choice",
      options: [
        "Filtration, digestion, absorption",
        "Filtration, reabsorption, secretion",
        "Filtration, secretion, egestion",
        "Reabsorption, secretion, digestion"
      ],
      answer: "Filtration, reabsorption, secretion",
      explanation: "Urine formation involves filtration, reabsorption, and secretion."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the functional unit of the kidney?",
      type: "multiple_choice",
      options: ["Glomerulus", "Nephron", "Bowman's capsule", "Loop of Henle"],
      answer: "Nephron",
      explanation: "The nephron is the functional unit of the kidney."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What structure carries urine from the kidney to the bladder?",
      type: "multiple_choice",
      options: ["Urethra", "Ureter", "Nephron", "Aorta"],
      answer: "Ureter",
      explanation: "The ureter carries urine from the kidney to the bladder."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does the skin excrete?",
      type: "multiple_choice",
      options: ["CO₂", "Urea and salts", "Feces", "Bile"],
      answer: "Urea and salts",
      explanation: "The skin excretes urea, salts, and water through sweat."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does the lungs excrete?",
      type: "multiple_choice",
      options: ["Urea", "CO₂ and water vapor", "Salts", "Urine"],
      answer: "CO₂ and water vapor",
      explanation: "The lungs excrete CO₂ and water vapor."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the liver's role in excretion?",
      type: "multiple_choice",
      options: [
        "To produce urine",
        "To filter blood",
        "To convert toxins and produce bile",
        "To store waste"
      ],
      answer: "To convert toxins and produce bile",
      explanation: "The liver converts toxins and produces bile for excretion."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How does excretion help maintain homeostasis?",
      type: "multiple_choice",
      options: [
        "By removing waste",
        "By regulating water balance",
        "By regulating pH",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Excretion helps maintain homeostasis by removing waste and regulating water and pH balance."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a kidney stone?",
      type: "multiple_choice",
      options: [
        "A type of kidney infection",
        "A hard deposit of minerals and salts",
        "A tumor in the kidney",
        "A blockage in the ureter"
      ],
      answer: "A hard deposit of minerals and salts",
      explanation: "Kidney stones are hard deposits of minerals and salts."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is dialysis?",
      type: "multiple_choice",
      options: [
        "A type of kidney surgery",
        "A treatment that filters blood",
        "A medication for kidney disease",
        "A kidney transplant"
      ],
      answer: "A treatment that filters blood",
      explanation: "Dialysis is a treatment that filters blood when kidneys fail."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Which substance is found in urine but NOT in blood?",
      type: "multiple_choice",
      options: ["Urea", "Water", "Glucose", "Proteins"],
      answer: "Urea",
      explanation: "Urea is concentrated in urine and normally present in low amounts in blood."
    },
    {
      id: "prac_014",
      objective: "obj_004",
      difficulty: "hard",
      question: "What is reabsorption in the kidney?",
      type: "multiple_choice",
      options: [
        "Removing waste from blood",
        "Returning useful substances to blood",
        "Adding waste to filtrate",
        "Filtering blood"
      ],
      answer: "Returning useful substances to blood",
      explanation: "Reabsorption returns useful substances from the filtrate to the blood."
    },
    {
      id: "prac_015",
      objective: "obj_005",
      difficulty: "hard",
      question: "What is the correct order of urine flow?",
      type: "multiple_choice",
      options: [
        "Kidney → Urethra → Bladder → Ureter",
        "Kidney → Ureter → Bladder → Urethra",
        "Kidney → Bladder → Ureter → Urethra",
        "Kidney → Urethra → Ureter → Bladder"
      ],
      answer: "Kidney → Ureter → Bladder → Urethra",
      explanation: "Urine flows from the kidney to the ureter, then to the bladder, and out through the urethra."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_excretory_system",
    title: "Excretory System Quiz",
    description: "Test your understanding of the excretory system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main function of the excretory system?",
        type: "short_answer",
        answer_key: "To remove waste products from the body",
        explanation: "The excretory system removes metabolic waste from the body."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Which organ filters blood?",
        type: "short_answer",
        answer_key: "Kidneys",
        explanation: "The kidneys filter blood to produce urine."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is urine produced by?",
        type: "short_answer",
        answer_key: "Kidneys",
        explanation: "Urine is produced by the kidneys."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What are the three main steps of urine formation?",
        type: "short_answer",
        answer_key: "Filtration, reabsorption, secretion",
        explanation: "Urine formation involves filtration, reabsorption, and secretion."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the functional unit of the kidney?",
        type: "short_answer",
        answer_key: "Nephron",
        explanation: "The nephron is the functional unit of the kidney."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What structure carries urine from the kidney to the bladder?",
        type: "short_answer",
        answer_key: "Ureter",
        explanation: "The ureter carries urine from the kidney to the bladder."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does the skin excrete?",
        type: "short_answer",
        answer_key: "Water, salts, and urea",
        explanation: "The skin excretes water, salts, and urea through sweat."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What do the lungs excrete?",
        type: "short_answer",
        answer_key: "CO₂ and water vapor",
        explanation: "The lungs excrete CO₂ and water vapor."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the liver's role in excretion?",
        type: "short_answer",
        answer_key: "To convert toxins and produce bile",
        explanation: "The liver converts toxins and produces bile for excretion."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "How does excretion maintain homeostasis?",
        type: "short_answer",
        answer_key: "By removing waste and regulating water and pH balance",
        explanation: "Excretion maintains homeostasis by removing waste and regulating water and pH."
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
        "Understand the structure and function of the excretory system",
        "Explain urine formation",
        "Describe the role of the kidneys",
        "Understand kidney disorders and dialysis"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the excretory system?" },
        { time: "5-10 min", activity: "Direct Instruction - Excretion vs Egestion" },
        { time: "10-15 min", activity: "Direct Instruction - Organs of Excretion" },
        { time: "15-20 min", activity: "Direct Instruction - The Kidneys" },
        { time: "20-25 min", activity: "Direct Instruction - Urine Formation" },
        { time: "25-30 min", activity: "Direct Instruction - Other Excretory Organs" },
        { time: "30-35 min", activity: "Direct Instruction - Disorders and Dialysis" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To remove waste products from the body",
        prac_002: "Kidneys",
        prac_003: "Kidneys",
        prac_004: "Filtration, reabsorption, secretion",
        prac_005: "Nephron",
        prac_006: "Ureter",
        prac_007: "Urea and salts",
        prac_008: "CO₂ and water vapor",
        prac_009: "To convert toxins and produce bile",
        prac_010: "All of the above",
        prac_011: "A hard deposit of minerals and salts",
        prac_012: "A treatment that filters blood",
        prac_013: "Urea",
        prac_014: "Returning useful substances to blood",
        prac_015: "Kidney → Ureter → Bladder → Urethra"
      },
      assessment: {
        ass_001: "To remove waste products from the body",
        ass_002: "Kidneys",
        ass_003: "Kidneys",
        ass_004: "Filtration, reabsorption, secretion",
        ass_005: "Nephron",
        ass_006: "Ureter",
        ass_007: "Water, salts, and urea",
        ass_008: "CO₂ and water vapor",
        ass_009: "To convert toxins and produce bile",
        ass_010: "By removing waste and regulating water and pH balance"
      }
    },
    extensionActivities: [
      "Research kidney donation and transplantation",
      "Study the history of dialysis",
      "Research kidney disease prevention",
      "Learn about the urinary system",
      "Study the effects of dehydration"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research kidney physiology",
        "Study dialysis technology",
        "Research kidney diseases",
        "Study fluid and electrolyte balance"
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
      title: "The Kidney",
      description: "Diagram of the kidney structure",
      url: "/diagrams/kidney.png",
      alt: "Kidney diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Urine Formation",
      description: "Diagram of urine formation process",
      url: "/diagrams/urine-formation.png",
      alt: "Urine formation diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "The Nephron",
      description: "Diagram of the nephron structure",
      url: "/diagrams/nephron.png",
      alt: "Nephron diagram"
    }
  ]
};