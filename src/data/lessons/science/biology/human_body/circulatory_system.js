// Location: src/data/lessons/science/biology/human_body/circulatory_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_circulatory_system",
  subject: "Biology",
  topic: "Circulatory System",
  name: "Circulatory System",
  icon: "❤️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of cell biology",
    "Knowledge of the respiratory system",
    "Basic understanding of the heart"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Respiratory System",
      file: "science/biology/human_body/respiratory_system.js"
    },
    {
      name: "Digestive System",
      file: "science/biology/human_body/digestive_system.js"
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
      description: "Define the circulatory system and explain its functions",
      indicator: "Student can explain what the circulatory system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main components of the circulatory system",
      indicator: "Student can name the heart, blood vessels, and blood"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Describe the structure and function of the heart",
      indicator: "Student can label the parts of the heart"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the cardiac cycle (heartbeat)",
      indicator: "Student can describe systole and diastole"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the different types of blood vessels",
      indicator: "Student can distinguish between arteries, veins, and capillaries"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the composition of blood",
      indicator: "Student can describe red blood cells, white blood cells, platelets, and plasma"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the functions of blood",
      indicator: "Student can describe transport, protection, and regulation"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the double circulation system",
      indicator: "Student can describe pulmonary and systemic circulation"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the role of blood clotting",
      indicator: "Student can describe the clotting process"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain how blood pressure is regulated",
      indicator: "Student can describe factors affecting blood pressure"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe common cardiovascular diseases",
      indicator: "Student can describe atherosclerosis, heart attack, and stroke"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the importance of heart health",
      indicator: "Student can discuss lifestyle factors affecting heart health"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain how the heart is controlled by the nervous system",
      indicator: "Student can describe the role of the cardiac center"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Compare the structure of arteries, veins, and capillaries",
      indicator: "Student can distinguish between different blood vessels"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Circulatory System - The Body's Transport Network",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the heart, blood vessels, and how blood circulates through the body."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Circulatory System</h2>
      <p>The <strong>circulatory system</strong> is the body's transport system. It consists of the heart, blood vessels, and blood. Its main function is to transport oxygen, nutrients, hormones, and waste products throughout the body.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">❤️ Key Concepts</h3>
          <ul>
            <li>✓ The Heart</li>
            <li>✓ Blood Vessels</li>
            <li>✓ Blood</li>
            <li>✓ Double Circulation</li>
            <li>✓ Cardiac Cycle</li>
            <li>✓ Blood Pressure</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The heart beats ~100,000 times per day</li>
            <li>• Blood vessels stretch ~100,000 km</li>
            <li>• The heart pumps ~7,500 liters of blood daily</li>
            <li>• Blood makes up ~8% of body weight</li>
            <li>• There are ~5 liters of blood in the body</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Circulatory System Matters</h4>
        <p>The circulatory system delivers oxygen and nutrients to every cell in the body. Without it, cells would die within minutes.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Heart",
        objective: "obj_003",
        text: `
          <h3>The Heart - The Pump</h3>
          <p>The <strong>heart</strong> is a muscular organ that pumps blood throughout the body. It has four chambers and is about the size of a fist.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• <strong>Atria (upper chambers):</strong> Receive blood</li>
                <li>• Right atrium and Left atrium</li>
                <li>• <strong>Ventricles (lower chambers):</strong> Pump blood</li>
                <li>• Right ventricle and Left ventricle</li>
                <li>• <strong>Septum:</strong> Wall dividing left and right</li>
                <li>• <strong>Valves:</strong> Prevent backflow</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Blood Flow Through the Heart</h4>
              <ul>
                <li>1. Blood enters right atrium</li>
                <li>2. Flows to right ventricle</li>
                <li>3. Pumped to lungs (pulmonary)</li>
                <li>4. Returns to left atrium</li>
                <li>5. Flows to left ventricle</li>
                <li>6. Pumped to body (systemic)</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="400" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#c62828">The Heart</text>
              
              <!-- Heart Shape -->
              <g transform="translate(250, 200)">
                <!-- Left Ventricle -->
                <path d="M-10 20 Q-60 40 -70 0 Q-80 -40 -40 -50 Q-20 -55 0 -40" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <!-- Right Ventricle -->
                <path d="M0 -40 Q20 -55 40 -50 Q80 -40 70 0 Q60 40 10 20" fill="#ef9a9a" stroke="#c62828" stroke-width="2"/>
                <!-- Left Atrium -->
                <path d="M-40 -50 Q-50 -80 -20 -90 Q0 -95 0 -70" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
                <!-- Right Atrium -->
                <path d="M0 -70 Q0 -95 20 -90 Q50 -80 40 -50" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
                
                <!-- Septum -->
                <line x1="0" y1="-65" x2="0" y2="20" stroke="#c62828" stroke-width="2"/>
                
                <!-- Valve lines -->
                <line x1="-15" y1="-45" x2="-15" y2="-35" stroke="#c62828" stroke-width="2"/>
                <line x1="15" y1="-45" x2="15" y2="-35" stroke="#c62828" stroke-width="2"/>
                <line x1="-10" y1="10" x2="-10" y2="0" stroke="#c62828" stroke-width="2"/>
                <line x1="10" y1="10" x2="10" y2="0" stroke="#c62828" stroke-width="2"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Left Atrium</text>
              <text x="250" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Right Atrium</text>
              <text x="250" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Left Ventricle</text>
              <text x="250" y="325" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Right Ventricle</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Blood Vessels",
        objective: "obj_005",
        text: `
          <h3>Blood Vessels</h3>
          <p><strong>Blood vessels</strong> are tubes that carry blood throughout the body. There are three main types.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Arteries</h4>
              <ul>
                <li>• Carry blood away from the heart</li>
                <li>• Thick, elastic walls</li>
                <li>• High pressure</li>
                <li>• Carry oxygenated blood</li>
                <li>• Exception: Pulmonary artery</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Veins</h4>
              <ul>
                <li>• Carry blood toward the heart</li>
                <li>• Thin walls</li>
                <li>• Low pressure</li>
                <li>• Have valves</li>
                <li>• Carry deoxygenated blood</li>
                <li>• Exception: Pulmonary vein</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Capillaries</h4>
              <ul>
                <li>• Connect arteries and veins</li>
                <li>• Very thin walls</li>
                <li>• One cell thick</li>
                <li>• Exchange occurs here</li>
                <li>• Oxygen and nutrients pass</li>
                <li>• Waste products collected</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Types of Blood Vessels</text>
              
              <!-- Artery -->
              <g transform="translate(100, 130)">
                <rect x="-40" y="-15" width="80" height="30" rx="5" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <rect x="-30" y="-10" width="60" height="20" rx="3" fill="#ffcdd2" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#c62828">Artery</text>
                <text x="0" y="55" text-anchor="middle" font-size="10" fill="#c62828">Thick wall</text>
              </g>
              
              <!-- Vein -->
              <g transform="translate(300, 130)">
                <rect x="-40" y="-15" width="80" height="30" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <rect x="-35" y="-8" width="70" height="16" rx="3" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1.5"/>
                <!-- Valves -->
                <path d="M-15 -8 L-15 8" stroke="#2e7d32" stroke-width="2"/>
                <path d="M15 -8 L15 8" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e7d32">Vein</text>
                <text x="0" y="55" text-anchor="middle" font-size="10" fill="#2e7d32">Thin wall, valves</text>
              </g>
              
              <!-- Capillary -->
              <g transform="translate(500, 130)">
                <rect x="-30" y="-5" width="60" height="10" rx="2" fill="#ff9800" stroke="#e65100" stroke-width="1.5"/>
                <text x="0" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#e65100">Capillary</text>
                <text x="0" y="45" text-anchor="middle" font-size="10" fill="#e65100">One cell thick</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Blood",
        objective: "obj_006",
        text: `
          <h3>Blood - The Transport Fluid</h3>
          <p><strong>Blood</strong> is a fluid that transports substances throughout the body. It is composed of cells suspended in plasma.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components of Blood</h4>
              <ul>
                <li>• <strong>Plasma (55%):</strong> Liquid portion</li>
                <li>• Water, proteins, salts, nutrients</li>
                <li>• <strong>Red Blood Cells (45%):</strong></li>
                <li>• Contain hemoglobin</li>
                <li>• Carry oxygen</li>
                <li>• <strong>White Blood Cells:</strong></li>
                <li>• Part of immune system</li>
                <li>• <strong>Platelets:</strong></li>
                <li>• Help with clotting</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions of Blood</h4>
              <ul>
                <li>• <strong>Transport:</strong></li>
                <li>• Oxygen, nutrients, hormones</li>
                <li>• <strong>Protection:</strong></li>
                <li>• White blood cells fight infection</li>
                <li>• <strong>Regulation:</strong></li>
                <li>• Temperature, pH, fluid balance</li>
                <li>• <strong>Clotting:</strong></li>
                <li>• Prevents blood loss</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Blood Components</text>
              
              <!-- Blood sample container -->
              <g transform="translate(250, 160)">
                <!-- Tube -->
                <rect x="-40" y="-80" width="80" height="160" rx="5" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                
                <!-- Plasma (top) -->
                <rect x="-35" y="-75" width="70" height="60" rx="3" fill="#fff9c4" stroke="#f57f17" stroke-width="1"/>
                <text x="0" y="-45" text-anchor="middle" font-size="12" fill="#f57f17">Plasma</text>
                <text x="0" y="-30" text-anchor="middle" font-size="10" fill="#f57f17">55%</text>
                
                <!-- Buffy coat (WBC and platelets) -->
                <rect x="-35" y="-15" width="70" height="10" rx="2" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1"/>
                <text x="0" y="-5" text-anchor="middle" font-size="9" fill="#2e7d32">WBC & Platelets</text>
                
                <!-- Red Blood Cells (bottom) -->
                <rect x="-35" y="-5" width="70" height="70" rx="3" fill="#ef5350" stroke="#c62828" stroke-width="1"/>
                <text x="0" y="20" text-anchor="middle" font-size="12" fill="#c62828">Red Blood</text>
                <text x="0" y="35" text-anchor="middle" font-size="12" fill="#c62828">Cells</text>
                <text x="0" y="50" text-anchor="middle" font-size="10" fill="#c62828">45%</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Double Circulation",
        objective: "obj_008",
        text: `
          <h3>Double Circulation</h3>
          <p>Humans have a <strong>double circulation</strong> system where blood passes through the heart twice.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Pulmonary Circulation</h4>
              <ul>
                <li>• Blood to and from the lungs</li>
                <li>• Right side of the heart</li>
                <li>• Deoxygenated blood to lungs</li>
                <li>• Oxygenated blood returns</li>
                <li>• Carbon dioxide is removed</li>
                <li>• Oxygen is added</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Systemic Circulation</h4>
              <ul>
                <li>• Blood to and from the body</li>
                <li>• Left side of the heart</li>
                <li>• Oxygenated blood to body</li>
                <li>• Deoxygenated blood returns</li>
                <li>• Oxygen is delivered</li>
                <li>• Waste products are collected</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Double Circulation</text>
              
              <!-- Heart -->
              <g transform="translate(300, 160)">
                <ellipse cx="0" cy="0" rx="40" ry="30" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white" font-weight="bold">Heart</text>
                <!-- Right side label -->
                <text x="-30" y="-15" text-anchor="middle" font-size="9" fill="#c62828">Right</text>
                <!-- Left side label -->
                <text x="30" y="-15" text-anchor="middle" font-size="9" fill="#c62828">Left</text>
              </g>
              
              <!-- Lungs -->
              <g transform="translate(300, 60)">
                <ellipse cx="-40" cy="0" rx="35" ry="25" fill="#81d4fa" stroke="#0288d1" stroke-width="2"/>
                <ellipse cx="40" cy="0" rx="35" ry="25" fill="#81d4fa" stroke="#0288d1" stroke-width="2"/>
                <text x="0" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#0288d1">Lungs</text>
              </g>
              
              <!-- Body -->
              <g transform="translate(300, 300)">
                <ellipse cx="0" cy="0" rx="60" ry="40" fill="#a5d6a7" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">Body</text>
              </g>
              
              <!-- Pulmonary circulation -->
              <path d="M300 135 L300 85" stroke="#1565c0" stroke-width="3" fill="none"/>
              <path d="M300 135 L300 85" stroke="#1565c0" stroke-width="3" fill="none" transform="translate(-10, 0)"/>
              <path d="M300 85 L300 135" stroke="#ef5350" stroke-width="3" fill="none" transform="translate(10, 0)"/>
              <text x="330" y="105" text-anchor="middle" font-size="10" fill="#1565c0">Pulmonary</text>
              
              <!-- Systemic circulation -->
              <path d="M300 190 L300 260" stroke="#ef5350" stroke-width="3" fill="none"/>
              <path d="M300 190 L300 260" stroke="#ef5350" stroke-width="3" fill="none" transform="translate(-10, 0)"/>
              <path d="M300 260 L300 190" stroke="#1565c0" stroke-width="3" fill="none" transform="translate(10, 0)"/>
              <text x="330" y="225" text-anchor="middle" font-size="10" fill="#1565c0">Systemic</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Blood Clotting",
        objective: "obj_009",
        text: `
          <h3>Blood Clotting</h3>
          <p><strong>Blood clotting</strong> is a process that prevents excessive bleeding when blood vessels are damaged.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Clotting Process</h4>
              <ul>
                <li>1. Blood vessel is damaged</li>
                <li>2. Platelets adhere to the site</li>
                <li>3. Platelets release clotting factors</li>
                <li>4. Fibrinogen converts to fibrin</li>
                <li>5. Fibrin mesh traps platelets</li>
                <li>6. A clot is formed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Clotting Factors</h4>
              <ul>
                <li>• <strong>Platelets:</strong> Form the plug</li>
                <li>• <strong>Fibrinogen:</strong> Soluble protein</li>
                <li>• <strong>Fibrin:</strong> Insoluble protein</li>
                <li>• <strong>Vitamin K:</strong> Essential for clotting</li>
                <li>• <strong>Calcium:</strong> Required for the process</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Blood Pressure",
        objective: "obj_010",
        text: `
          <h3>Blood Pressure</h3>
          <p><strong>Blood pressure</strong> is the force exerted by blood on the walls of blood vessels.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Measurement</h4>
              <ul>
                <li>• <strong>Systolic:</strong> Pressure during contraction</li>
                <li>• <strong>Diastolic:</strong> Pressure during relaxation</li>
                <li>• Normal: 120/80 mmHg</li>
                <li>• Measured with a sphygmomanometer</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Regulation</h4>
              <ul>
                <li>• <strong>Heart rate:</strong> Faster = higher pressure</li>
                <li>• <strong>Blood volume:</strong> More blood = higher pressure</li>
                <li>• <strong>Vessel diameter:</strong> Narrow = higher pressure</li>
                <li>• <strong>Nervous system:</strong> Controls heart rate</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Blood Pressure Categories:</strong>
            <ul>
              <li>• <strong>Normal:</strong> < 120/80 mmHg</li>
              <li>• <strong>Elevated:</strong> 120-129/< 80 mmHg</li>
              <li>• <strong>Hypertension Stage 1:</strong> 130-139/80-89 mmHg</li>
              <li>• <strong>Hypertension Stage 2:</strong> ≥ 140/≥ 90 mmHg</li>
              <li>• <strong>Hypertensive Crisis:</strong> > 180/> 120 mmHg</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Cardiovascular Diseases",
        objective: "obj_011",
        text: `
          <h3>Cardiovascular Diseases</h3>
          <p>Diseases of the heart and blood vessels are leading causes of death worldwide.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Conditions</h4>
              <ul>
                <li><strong>Atherosclerosis:</strong> Plaque buildup</li>
                <li><strong>Heart Attack:</strong> Blocked coronary artery</li>
                <li><strong>Stroke:</strong> Blocked blood vessel in brain</li>
                <li><strong>Hypertension:</strong> High blood pressure</li>
                <li><strong>Heart Failure:</strong> Heart can't pump enough</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Risk Factors</h4>
              <ul>
                <li>• <strong>Modifiable:</strong></li>
                <li>• Smoking, poor diet, lack of exercise</li>
                <li>• Obesity, stress, high cholesterol</li>
                <li>• <strong>Non-modifiable:</strong></li>
                <li>• Age, gender, family history</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Heart Health",
        objective: "obj_012",
        text: `
          <h3>Maintaining Heart Health</h3>
          <p>Lifestyle choices play a major role in heart health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Healthy Habits</h4>
              <ul>
                <li>• <strong>Diet:</strong> Low in saturated fats</li>
                <li>• <strong>Exercise:</strong> 30 minutes daily</li>
                <li>• <strong>No smoking:</strong> Reduces risk</li>
                <li>• <strong>Stress management:</strong> Relaxation</li>
                <li>• <strong>Regular check-ups:</strong> Monitor blood pressure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Warning Signs</h4>
              <ul>
                <li>• <strong>Heart Attack:</strong></li>
                <li>• Chest pain, shortness of breath</li>
                <li>• <strong>Stroke:</strong></li>
                <li>• Sudden numbness, confusion, difficulty speaking</li>
                <li>• Seek immediate medical help</li>
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
          <h4>❤️ Circulatory System</h4>
          <ul>
            <li>• Heart pumps blood</li>
            <li>• Blood vessels transport blood</li>
            <li>• Double circulation: pulmonary and systemic</li>
            <li>• Blood carries oxygen and nutrients</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Components</h4>
          <ul>
            <li>• Red blood cells carry oxygen</li>
            <li>• White blood cells fight infection</li>
            <li>• Platelets help with clotting</li>
            <li>• Plasma carries nutrients and waste</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>A healthy heart is essential for a healthy life. Regular exercise, a balanced diet, and avoiding smoking can keep your heart strong.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All arteries carry oxygenated blood",
        correction: "Pulmonary arteries carry deoxygenated blood",
        explanation: "The pulmonary artery carries deoxygenated blood from the heart to the lungs."
      },
      {
        id: "mis_002",
        misconception: "All veins carry deoxygenated blood",
        correction: "Pulmonary veins carry oxygenated blood",
        explanation: "The pulmonary veins carry oxygenated blood from the lungs to the heart."
      },
      {
        id: "mis_003",
        misconception: "The heart is on the left side of the chest",
        correction: "The heart is in the center but slightly to the left",
        explanation: "The heart is centrally located but the apex points to the left."
      },
      {
        id: "mis_004",
        misconception: "Blood is blue inside the body",
        correction: "Blood is always red, just different shades",
        explanation: "Oxygenated blood is bright red; deoxygenated blood is dark red, not blue."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding the circulatory system helps treat heart disease.",
        example: "Bypass surgery, angioplasty"
      },
      {
        id: "app_002",
        title: "First Aid",
        description: "Knowledge helps respond to emergencies.",
        example: "CPR, stroke recognition"
      },
      {
        id: "app_003",
        title: "Public Health",
        description: "Understanding helps prevent heart disease.",
        example: "Health campaigns, screening programs"
      },
      {
        id: "app_004",
        title: "Sports Science",
        description: "Understanding helps improve athletic performance.",
        example: "Training, oxygen delivery"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Heart", definition: "Muscular organ that pumps blood." },
    { term: "Arteries", definition: "Blood vessels that carry blood away from the heart." },
    { term: "Veins", definition: "Blood vessels that carry blood toward the heart." },
    { term: "Capillaries", definition: "Tiny blood vessels where exchange occurs." },
    { term: "Plasma", definition: "Liquid portion of blood." },
    { term: "Red Blood Cells", definition: "Cells that carry oxygen." },
    { term: "White Blood Cells", definition: "Cells that fight infection." },
    { term: "Platelets", definition: "Cell fragments that help with clotting." },
    { term: "Hemoglobin", definition: "Oxygen-carrying protein in red blood cells." },
    { term: "Pulmonary Circulation", definition: "Blood flow to and from the lungs." },
    { term: "Systemic Circulation", definition: "Blood flow to and from the body." },
    { term: "Systolic", definition: "Blood pressure during heart contraction." },
    { term: "Diastolic", definition: "Blood pressure during heart relaxation." },
    { term: "Hypertension", definition: "High blood pressure." },
    { term: "Atherosclerosis", definition: "Plaque buildup in arteries." },
    { term: "Fibrin", definition: "Protein that forms clots." },
    { term: "Valve", definition: "Structure that prevents backflow." },
    { term: "Cardiac Cycle", definition: "One complete heartbeat." },
    { term: "Septum", definition: "Wall separating heart chambers." },
    { term: "Coronary Artery", definition: "Artery supplying blood to the heart." }
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
      question: "What is the function of the circulatory system?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To transport materials throughout the body",
        "To filter waste",
        "To produce hormones"
      ],
      answer: "To transport materials throughout the body",
      explanation: "The circulatory system transports oxygen, nutrients, hormones, and waste products."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the three main components of the circulatory system?",
      type: "multiple_choice",
      options: [
        "Heart, lungs, and brain",
        "Heart, blood vessels, and blood",
        "Liver, kidneys, and blood",
        "Heart, liver, and kidneys"
      ],
      answer: "Heart, blood vessels, and blood",
      explanation: "The circulatory system consists of the heart, blood vessels, and blood."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "How many chambers does the human heart have?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "The human heart has four chambers: two atria and two ventricles."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the cardiac cycle?",
      type: "multiple_choice",
      options: [
        "The pathway of blood through the body",
        "One complete heartbeat (systole and diastole)",
        "The flow of blood through the heart",
        "The contraction of muscles"
      ],
      answer: "One complete heartbeat (systole and diastole)",
      explanation: "The cardiac cycle is one complete heartbeat, consisting of systole and diastole."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which type of blood vessel carries blood away from the heart?",
      type: "multiple_choice",
      options: ["Veins", "Arteries", "Capillaries", "Venules"],
      answer: "Arteries",
      explanation: "Arteries carry blood away from the heart."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the function of red blood cells?",
      type: "multiple_choice",
      options: [
        "To fight infection",
        "To carry oxygen",
        "To help with clotting",
        "To transport nutrients"
      ],
      answer: "To carry oxygen",
      explanation: "Red blood cells contain hemoglobin and carry oxygen to cells."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a function of blood?",
      type: "multiple_choice",
      options: [
        "Transport oxygen and nutrients",
        "Protect against infection",
        "Regulate temperature",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Blood transports, protects, and regulates body functions."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between pulmonary and systemic circulation?",
      type: "multiple_choice",
      options: [
        "Pulmonary circulation is to the lungs; systemic is to the body",
        "Pulmonary circulation is to the body; systemic is to the lungs",
        "There is no difference",
        "Pulmonary is only in the heart"
      ],
      answer: "Pulmonary circulation is to the lungs; systemic is to the body",
      explanation: "Pulmonary circulation sends blood to the lungs; systemic sends blood to the body."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the role of platelets in blood clotting?",
      type: "multiple_choice",
      options: [
        "To form fibrin",
        "To form a plug at the injury site",
        "To carry oxygen",
        "To fight infection"
      ],
      answer: "To form a plug at the injury site",
      explanation: "Platelets form a plug at the injury site to stop bleeding."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is considered normal blood pressure?",
      type: "multiple_choice",
      options: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
      answer: "120/80 mmHg",
      explanation: "Normal blood pressure is about 120/80 mmHg."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is atherosclerosis?",
      type: "multiple_choice",
      options: [
        "Thickening of the heart muscle",
        "Buildup of plaque in arteries",
        "High blood pressure",
        "A heart infection"
      ],
      answer: "Buildup of plaque in arteries",
      explanation: "Atherosclerosis is the buildup of plaque in the arteries."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which is a lifestyle factor that affects heart health?",
      type: "multiple_choice",
      options: [
        "Smoking",
        "Diet",
        "Exercise",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Smoking, diet, and exercise all affect heart health."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What part of the nervous system controls heart rate?",
      type: "multiple_choice",
      options: [
        "The brainstem",
        "The spinal cord",
        "The cardiac center in the medulla oblongata",
        "The cerebrum"
      ],
      answer: "The cardiac center in the medulla oblongata",
      explanation: "The cardiac center in the medulla oblongata controls heart rate."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a key structural difference between arteries and veins?",
      type: "multiple_choice",
      options: [
        "Arteries have thicker walls",
        "Veins have thicker walls",
        "Arteries have valves",
        "There is no difference"
      ],
      answer: "Arteries have thicker walls",
      explanation: "Arteries have thicker, more elastic walls to withstand higher pressure."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "What part of blood is responsible for fighting infections?",
      type: "multiple_choice",
      options: [
        "Red blood cells",
        "White blood cells",
        "Platelets",
        "Plasma"
      ],
      answer: "White blood cells",
      explanation: "White blood cells are part of the immune system and fight infections."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_circulatory_system",
    title: "Circulatory System Quiz",
    description: "Test your understanding of the circulatory system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the function of the circulatory system?",
        type: "short_answer",
        answer_key: "To transport materials throughout the body",
        explanation: "The circulatory system transports oxygen, nutrients, hormones, and waste products."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the three main components of the circulatory system.",
        type: "short_answer",
        answer_key: "Heart, blood vessels, and blood",
        explanation: "The circulatory system consists of the heart, blood vessels, and blood."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "How many chambers does the human heart have?",
        type: "short_answer",
        answer_key: "4",
        explanation: "The human heart has four chambers."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the cardiac cycle?",
        type: "short_answer",
        answer_key: "One complete heartbeat (systole and diastole)",
        explanation: "The cardiac cycle is one complete heartbeat."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Which blood vessels carry blood away from the heart?",
        type: "short_answer",
        answer_key: "Arteries",
        explanation: "Arteries carry blood away from the heart."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the function of red blood cells?",
        type: "short_answer",
        answer_key: "To carry oxygen",
        explanation: "Red blood cells carry oxygen to cells."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the difference between pulmonary and systemic circulation?",
        type: "short_answer",
        answer_key: "Pulmonary is to the lungs; systemic is to the body",
        explanation: "Pulmonary circulation goes to the lungs; systemic goes to the body."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the role of platelets in blood clotting?",
        type: "short_answer",
        answer_key: "To form a plug at the injury site",
        explanation: "Platelets form a plug to stop bleeding."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is considered normal blood pressure?",
        type: "short_answer",
        answer_key: "120/80 mmHg",
        explanation: "Normal blood pressure is about 120/80 mmHg."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is atherosclerosis?",
        type: "short_answer",
        answer_key: "Buildup of plaque in arteries",
        explanation: "Atherosclerosis is the buildup of plaque in arteries."
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
        "Understand the structure and function of the circulatory system",
        "Identify the parts of the heart",
        "Explain the types of blood vessels",
        "Understand blood components and function"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the circulatory system?" },
        { time: "5-10 min", activity: "Direct Instruction - The Heart" },
        { time: "10-15 min", activity: "Direct Instruction - Blood Vessels" },
        { time: "15-20 min", activity: "Direct Instruction - Blood Components" },
        { time: "20-25 min", activity: "Direct Instruction - Double Circulation" },
        { time: "25-30 min", activity: "Direct Instruction - Blood Pressure and Clotting" },
        { time: "30-35 min", activity: "Direct Instruction - Heart Health" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To transport materials throughout the body",
        prac_002: "Heart, blood vessels, and blood",
        prac_003: "4",
        prac_004: "One complete heartbeat (systole and diastole)",
        prac_005: "Arteries",
        prac_006: "To carry oxygen",
        prac_007: "All of the above",
        prac_008: "Pulmonary circulation is to the lungs; systemic is to the body",
        prac_009: "To form a plug at the injury site",
        prac_010: "120/80 mmHg",
        prac_011: "Buildup of plaque in arteries",
        prac_012: "All of the above",
        prac_013: "The cardiac center in the medulla oblongata",
        prac_014: "Arteries have thicker walls",
        prac_015: "White blood cells"
      },
      assessment: {
        ass_001: "To transport materials throughout the body",
        ass_002: "Heart, blood vessels, and blood",
        ass_003: "4",
        ass_004: "One complete heartbeat (systole and diastole)",
        ass_005: "Arteries",
        ass_006: "To carry oxygen",
        ass_007: "Pulmonary is to the lungs; systemic is to the body",
        ass_008: "To form a plug at the injury site",
        ass_009: "120/80 mmHg",
        ass_010: "Buildup of plaque in arteries"
      }
    },
    extensionActivities: [
      "Research heart disease prevention",
      "Study the effects of exercise on heart rate",
      "Research blood disorders",
      "Learn about blood transfusions",
      "Study the history of heart surgery"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research cardiac physiology",
        "Study the electrical system of the heart",
        "Research cardiovascular pharmacology",
        "Study heart transplantation"
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
      title: "The Heart",
      description: "Diagram of the human heart",
      url: "/diagrams/heart.png",
      alt: "Heart diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Blood Vessels",
      description: "Diagram of arteries, veins, and capillaries",
      url: "/diagrams/blood-vessels.png",
      alt: "Blood vessels diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Blood Components",
      description: "Diagram of blood components",
      url: "/diagrams/blood-components.png",
      alt: "Blood components diagram"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "Double Circulation",
      description: "Diagram showing pulmonary and systemic circulation",
      url: "/diagrams/double-circulation.png",
      alt: "Double circulation diagram"
    }
  ]
};