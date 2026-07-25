// Location: src/data/lessons/science/biology/human_body/respiratory_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_respiratory_system",
  subject: "Biology",
  topic: "Respiratory System",
  name: "Respiratory System",
  icon: "🫁",
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
    "Knowledge of cell biology",
    "Basic understanding of gas exchange"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Digestive System",
      file: "science/biology/human_body/digestive_system.js"
    },
    {
      name: "Excretory System",
      file: "science/biology/human_body/excretory_system.js"
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
      description: "Define the respiratory system and explain its functions",
      indicator: "Student can explain what the respiratory system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main parts of the respiratory system",
      indicator: "Student can label the organs of the respiratory system"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the process of breathing (ventilation)",
      indicator: "Student can describe inhalation and exhalation"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the structure and function of the lungs",
      indicator: "Student can describe the alveoli and gas exchange"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the process of gas exchange",
      indicator: "Student can explain how oxygen and CO₂ are exchanged"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of the diaphragm in breathing",
      indicator: "Student can describe how the diaphragm works"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the composition of inhaled and exhaled air",
      indicator: "Student can compare the gases in inspired and expired air"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain how the respiratory system is protected",
      indicator: "Student can describe mucus, cilia, and the cough reflex"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the control of breathing by the brain",
      indicator: "Student can describe the role of the respiratory center"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain common respiratory diseases",
      indicator: "Student can describe asthma, bronchitis, and pneumonia"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the effects of smoking on the respiratory system",
      indicator: "Student can describe the effects of smoking on the lungs"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the importance of the respiratory system",
      indicator: "Student can discuss why breathing is essential"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Compare the structure of the left and right lungs",
      indicator: "Student can distinguish between the lungs"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Respiratory System - Breathing for Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the respiratory system, how we breathe, and how gas exchange keeps us alive."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Respiratory System</h2>
      <p>The <strong>respiratory system</strong> is responsible for bringing oxygen into the body and removing carbon dioxide. It works closely with the circulatory system to deliver oxygen to every cell in the body.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🫁 Key Concepts</h3>
          <ul>
            <li>✓ Breathing (Ventilation)</li>
            <li>✓ Gas Exchange</li>
            <li>✓ Lungs</li>
            <li>✓ Alveoli</li>
            <li>✓ Diaphragm</li>
            <li>✓ Respiratory Diseases</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• We breathe ~20,000 times per day</li>
            <li>• The lungs contain ~600 million alveoli</li>
            <li>• The lungs have a surface area ~70m²</li>
            <li>• We inhale ~11,000 liters of air daily</li>
            <li>• The right lung is slightly larger</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Respiratory System Matters</h4>
        <p>Every cell in your body needs oxygen to survive. The respiratory system ensures that oxygen is delivered and carbon dioxide is removed.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of the Respiratory System",
        objective: "obj_002",
        text: `
          <h3>Organs of the Respiratory System</h3>
          <p>The respiratory system consists of several organs that work together to bring air into the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Upper Respiratory Tract</h4>
              <ul>
                <li>• <strong>Nose/Nasal Cavity:</strong> Air enters, filtered, warmed</li>
                <li>• <strong>Pharynx:</strong> Passage for air and food</li>
                <li>• <strong>Larynx:</strong> Voice box</li>
                <li>• <strong>Epiglottis:</strong> Prevents food from entering trachea</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Lower Respiratory Tract</h4>
              <ul>
                <li>• <strong>Trachea:</strong> Windpipe</li>
                <li>• <strong>Bronchi:</strong> Two branches to lungs</li>
                <li>• <strong>Bronchioles:</strong> Smaller branches</li>
                <li>• <strong>Alveoli:</strong> Air sacs where gas exchange occurs</li>
                <li>• <strong>Lungs:</strong> Main organs of respiration</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="450" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1565c0">Respiratory System</text>
              
              <!-- Nasal Cavity -->
              <path d="M170 60 L200 40 L230 60" stroke="#4a90d9" stroke-width="3" fill="none"/>
              <ellipse cx="200" cy="65" rx="30" ry="15" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
              
              <!-- Pharynx -->
              <rect x="185" y="80" width="30" height="30" rx="5" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/>
              
              <!-- Larynx -->
              <rect x="185" y="115" width="30" height="25" rx="5" fill="#90caf9" stroke="#1565c0" stroke-width="2"/>
              
              <!-- Trachea -->
              <rect x="185" y="145" width="30" height="60" rx="3" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
              <!-- Trachea rings -->
              <line x1="185" y1="155" x2="215" y2="155" stroke="#1565c0" stroke-width="1.5"/>
              <line x1="185" y1="165" x2="215" y2="165" stroke="#1565c0" stroke-width="1.5"/>
              <line x1="185" y1="175" x2="215" y2="175" stroke="#1565c0" stroke-width="1.5"/>
              <line x1="185" y1="185" x2="215" y2="185" stroke="#1565c0" stroke-width="1.5"/>
              <line x1="185" y1="195" x2="215" y2="195" stroke="#1565c0" stroke-width="1.5"/>
              
              <!-- Bronchi -->
              <path d="M200 205 L140 250" stroke="#4a90d9" stroke-width="6" fill="none"/>
              <path d="M200 205 L260 250" stroke="#4a90d9" stroke-width="6" fill="none"/>
              
              <!-- Bronchioles -->
              <path d="M140 250 L110 290" stroke="#4a90d9" stroke-width="4" fill="none"/>
              <path d="M140 250 L170 290" stroke="#4a90d9" stroke-width="4" fill="none"/>
              <path d="M260 250 L230 290" stroke="#4a90d9" stroke-width="4" fill="none"/>
              <path d="M260 250 L290 290" stroke="#4a90d9" stroke-width="4" fill="none"/>
              
              <!-- Lungs -->
              <ellipse cx="130" cy="340" rx="60" ry="90" fill="#bbdefb" stroke="#1565c0" stroke-width="2" opacity="0.5"/>
              <ellipse cx="270" cy="340" rx="55" ry="85" fill="#bbdefb" stroke="#1565c0" stroke-width="2" opacity="0.5"/>
              
              <!-- Diaphragm -->
              <path d="M60 420 Q200 390 340 420" stroke="#1565c0" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
              
              <!-- Labels -->
              <text x="200" y="55" text-anchor="middle" font-size="9" fill="#1565c0">Nose</text>
              <text x="200" y="100" text-anchor="middle" font-size="9" fill="#1565c0">Pharynx</text>
              <text x="200" y="130" text-anchor="middle" font-size="9" fill="#1565c0">Larynx</text>
              <text x="220" y="170" text-anchor="middle" font-size="9" fill="#1565c0">Trachea</text>
              <text x="200" y="235" text-anchor="middle" font-size="9" fill="#1565c0">Bronchi</text>
              <text x="130" y="280" text-anchor="middle" font-size="8" fill="#1565c0">Bronchioles</text>
              <text x="270" y="280" text-anchor="middle" font-size="8" fill="#1565c0">Bronchioles</text>
              <text x="130" y="340" text-anchor="middle" font-size="11" fill="#1565c0">Lung</text>
              <text x="270" y="340" text-anchor="middle" font-size="11" fill="#1565c0">Lung</text>
              <text x="200" y="435" text-anchor="middle" font-size="10" fill="#1565c0">Diaphragm</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Breathing (Ventilation)",
        objective: "obj_003",
        text: `
          <h3>Breathing Process</h3>
          <p><strong>Ventilation</strong> is the process of moving air in and out of the lungs. It involves inhalation and exhalation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Inhalation (Inspiration)</h4>
              <ul>
                <li>• Diaphragm contracts and flattens</li>
                <li>• Intercostal muscles contract</li>
                <li>• Ribs move up and out</li>
                <li>• Thoracic volume increases</li>
                <li>• Pressure decreases</li>
                <li>• Air rushes in</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Exhalation (Expiration)</h4>
              <ul>
                <li>• Diaphragm relaxes and domes up</li>
                <li>• Intercostal muscles relax</li>
                <li>• Ribs move down and in</li>
                <li>• Thoracic volume decreases</li>
                <li>• Pressure increases</li>
                <li>• Air rushes out</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Inhalation and Exhalation</text>
              
              <!-- Inhalation -->
              <g transform="translate(150, 160)">
                <!-- Lungs -->
                <ellipse cx="0" cy="-20" rx="40" ry="60" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/>
                <ellipse cx="0" cy="-20" rx="30" ry="50" fill="#e3f2fd" stroke="#1565c0" stroke-width="1"/>
                <!-- Trachea -->
                <rect x="-8" y="-85" width="16" height="30" rx="3" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <!-- Diaphragm (flattened) -->
                <path d="M-60 50 Q0 30 60 50" stroke="#1565c0" stroke-width="3" fill="none"/>
                <!-- Arrow in -->
                <path d="M-15 -110 L0 -95 L15 -110" stroke="#4caf50" stroke-width="2" fill="none"/>
                <text x="0" y="-120" text-anchor="middle" font-size="11" fill="#4caf50">Air In</text>
                <!-- Label -->
                <text x="0" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">Inhalation</text>
                <text x="0" y="95" text-anchor="middle" font-size="9" fill="#1565c0">Diaphragm contracts</text>
              </g>
              
              <!-- Arrow -->
              <text x="290" y="165" font-size="24" fill="#1565c0">↔</text>
              
              <!-- Exhalation -->
              <g transform="translate(450, 160)">
                <!-- Lungs -->
                <ellipse cx="0" cy="-20" rx="35" ry="50" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/>
                <ellipse cx="0" cy="-20" rx="25" ry="40" fill="#e3f2fd" stroke="#1565c0" stroke-width="1"/>
                <!-- Trachea -->
                <rect x="-8" y="-75" width="16" height="25" rx="3" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <!-- Diaphragm (domed) -->
                <path d="M-50 40 Q0 60 50 40" stroke="#1565c0" stroke-width="3" fill="none"/>
                <!-- Arrow out -->
                <path d="M-15 -80 L0 -65 L15 -80" stroke="#ef5350" stroke-width="2" fill="none"/>
                <text x="0" y="-90" text-anchor="middle" font-size="11" fill="#ef5350">Air Out</text>
                <!-- Label -->
                <text x="0" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">Exhalation</text>
                <text x="0" y="95" text-anchor="middle" font-size="9" fill="#1565c0">Diaphragm relaxes</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Gas Exchange",
        objective: "obj_005",
        text: `
          <h3>Gas Exchange</h3>
          <p><strong>Gas exchange</strong> occurs in the alveoli, where oxygen enters the blood and carbon dioxide leaves.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Alveoli - Site of Exchange</h4>
              <ul>
                <li>• Tiny air sacs</li>
                <li>• Thin walls (one cell thick)</li>
                <li>• Large surface area</li>
                <li>• Surrounded by capillaries</li>
                <li>• Moist lining</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How Exchange Happens</h4>
              <ul>
                <li>• <strong>Oxygen:</strong></li>
                <li>• Diffuses from alveoli to blood</li>
                <li>• Binds to hemoglobin</li>
                <li>• <strong>Carbon Dioxide:</strong></li>
                <li>• Diffuses from blood to alveoli</li>
                <li>• Exhaled out of the body</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Gas Exchange in the Alveoli</text>
              
              <!-- Alveolus -->
              <g transform="translate(300, 160)">
                <!-- Alveolar wall -->
                <circle cx="0" cy="0" r="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <circle cx="0" cy="0" r="50" fill="#bbdefb" stroke="#1565c0" stroke-width="1.5"/>
                
                <!-- Capillary -->
                <path d="M-70 -20 Q-40 -40 0 -30 Q40 -20 70 -40" stroke="#ef5350" stroke-width="6" fill="none"/>
                <path d="M-70 20 Q-40 40 0 30 Q40 20 70 40" stroke="#ef5350" stroke-width="6" fill="none"/>
                
                <!-- Red blood cells -->
                <ellipse cx="-30" cy="-32" rx="8" ry="5" fill="#c62828"/>
                <ellipse cx="-10" cy="-35" rx="8" ry="5" fill="#c62828"/>
                <ellipse cx="10" cy="-30" rx="8" ry="5" fill="#c62828"/>
                <ellipse cx="30" cy="-35" rx="8" ry="5" fill="#c62828"/>
                
                <!-- Oxygen molecules in alveolus -->
                <circle cx="-30" cy="-10" r="4" fill="#4caf50"/>
                <circle cx="-10" cy="-5" r="4" fill="#4caf50"/>
                <circle cx="10" cy="-15" r="4" fill="#4caf50"/>
                <circle cx="30" cy="-5" r="4" fill="#4caf50"/>
                
                <!-- Carbon dioxide molecules -->
                <circle cx="-20" cy="15" r="5" fill="#ef5350"/>
                <circle cx="0" cy="20" r="5" fill="#ef5350"/>
                <circle cx="20" cy="15" r="5" fill="#ef5350"/>
              </g>
              
              <!-- Labels -->
              <text x="300" y="270" text-anchor="middle" font-size="12" fill="#1565c0">O₂ enters blood from alveoli</text>
              <text x="300" y="285" text-anchor="middle" font-size="12" fill="#1565c0">CO₂ enters alveoli from blood</text>
              
              <!-- Legend -->
              <circle cx="180" cy="275" r="4" fill="#4caf50"/>
              <text x="190" y="279" font-size="11" fill="#4caf50">= O₂</text>
              <circle cx="180" cy="290" r="5" fill="#ef5350"/>
              <text x="190" y="294" font-size="11" fill="#ef5350">= CO₂</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Composition of Air",
        objective: "obj_007",
        text: `
          <h3>Composition of Inhaled and Exhaled Air</h3>
          <p>The air we breathe in and out has different compositions.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Gas</th>
                <th class="border p-2">Inhaled Air</th>
                <th class="border p-2">Exhaled Air</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Oxygen (O₂)</td>
                <td class="border p-2">~21%</td>
                <td class="border p-2">~16%</td>
              </tr>
              <tr>
                <td class="border p-2">Carbon Dioxide (CO₂)</td>
                <td class="border p-2">~0.04%</td>
                <td class="border p-2">~4%</td>
              </tr>
              <tr>
                <td class="border p-2">Nitrogen (N₂)</td>
                <td class="border p-2">~78%</td>
                <td class="border p-2">~78%</td>
              </tr>
              <tr>
                <td class="border p-2">Water Vapor</td>
                <td class="border p-2">Variable (low)</td>
                <td class="border p-2">High (saturated)</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_005",
        title: "Protection of the Respiratory System",
        objective: "obj_008",
        text: `
          <h3>Defense Mechanisms</h3>
          <p>The respiratory system has several mechanisms to protect itself from harmful substances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Defenses</h4>
              <ul>
                <li>• <strong>Hair in nose:</strong> Filters large particles</li>
                <li>• <strong>Mucus:</strong> Traps dust and pathogens</li>
                <li>• <strong>Cilia:</strong> Tiny hairs that sweep mucus upward</li>
                <li>• <strong>Epiglottis:</strong> Prevents food from entering trachea</li>
                <li>• <strong>Cough reflex:</strong> Expels irritants</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemical Defenses</h4>
              <ul>
                <li>• <strong>Lysozyme:</strong> Enzyme that kills bacteria</li>
                <li>• <strong>Mucus:</strong> Contains antibodies</li>
                <li>• <strong>Surfactant:</strong> Keeps alveoli open</li>
                <li>• <strong>Immune cells:</strong> Macrophages in alveoli</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Control of Breathing",
        objective: "obj_009",
        text: `
          <h3>How Breathing is Controlled</h3>
          <p>Breathing is controlled by the respiratory center in the brainstem.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Respiratory Center</h4>
              <ul>
                <li>• Located in the medulla oblongata</li>
                <li>• Sends signals to respiratory muscles</li>
                <li>• Controls rate and depth of breathing</li>
                <li>• Responds to chemical changes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Factors Affecting Breathing</h4>
              <ul>
                <li>• <strong>CO₂ levels:</strong> High CO₂ increases breathing</li>
                <li>• <strong>O₂ levels:</strong> Low O₂ increases breathing</li>
                <li>• <strong>pH:</strong> Acidosis increases breathing</li>
                <li>• <strong>Exercise:</strong> Increases breathing rate</li>
                <li>• <strong>Emotions:</strong> Stress, anxiety affect breathing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Respiratory Diseases",
        objective: "obj_010",
        text: `
          <h3>Common Respiratory Diseases</h3>
          <p>Various diseases can affect the respiratory system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Diseases</h4>
              <ul>
                <li><strong>Asthma:</strong> Narrowing of airways</li>
                <li><strong>Bronchitis:</strong> Inflammation of bronchi</li>
                <li><strong>Pneumonia:</strong> Infection of alveoli</li>
                <li><strong>Tuberculosis:</strong> Bacterial infection</li>
                <li><strong>COPD:</strong> Chronic obstructive pulmonary disease</li>
                <li><strong>Lung cancer:</strong> Uncontrolled growth in lungs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Symptoms</h4>
              <ul>
                <li>• Shortness of breath</li>
                <li>• Coughing</li>
                <li>• Wheezing</li>
                <li>• Chest pain</li>
                <li>• Fever</li>
                <li>• Fatigue</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Effects of Smoking",
        objective: "obj_011",
        text: `
          <h3>Effects of Smoking on the Respiratory System</h3>
          <p>Smoking is the leading cause of preventable respiratory diseases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Harmful Substances</h4>
              <ul>
                <li>• <strong>Nicotine:</strong> Addictive</li>
                <li>• <strong>Tar:</strong> Damages lungs</li>
                <li>• <strong>Carbon monoxide:</strong> Reduces oxygen</li>
                <li>• <strong>Formaldehyde:</strong> Carcinogen</li>
                <li>• <strong>Ammonia:</strong> Irritant</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Lung cancer:</strong> Leading cause of cancer deaths</li>
                <li>• <strong>COPD:</strong> Chronic bronchitis, emphysema</li>
                <li>• <strong>Asthma:</strong> Triggers attacks</li>
                <li>• <strong>Infection:</strong> Increased risk</li>
                <li>• <strong>Premature aging:</strong> Speeds up aging</li>
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
          <h4>🫁 Respiratory System</h4>
          <ul>
            <li>• Brings oxygen into the body</li>
            <li>• Removes carbon dioxide</li>
            <li>• Gas exchange occurs in alveoli</li>
            <li>• Diaphragm controls breathing</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Inhalation: Air in</li>
            <li>• Exhalation: Air out</li>
            <li>• Oxygen: From lungs to blood</li>
            <li>• CO₂: From blood to lungs</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Your lungs work tirelessly to keep you alive. Protect them by avoiding smoking and harmful pollutants.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "We breathe in only oxygen",
        correction: "We breathe in air (21% oxygen, 78% nitrogen, 1% other gases)",
        explanation: "Air is a mixture of gases, not just oxygen."
      },
      {
        id: "mis_002",
        misconception: "The lungs are hollow like balloons",
        correction: "Lungs are spongy with millions of air sacs",
        explanation: "Lungs are made of alveoli, which are tiny air sacs."
      },
      {
        id: "mis_003",
        misconception: "The brain is the only organ that controls breathing",
        correction: "The brainstem specifically controls breathing",
        explanation: "The respiratory center in the medulla oblongata controls breathing."
      },
      {
        id: "mis_004",
        misconception: "Smoking only affects the lungs",
        correction: "Smoking affects the entire body",
        explanation: "Smoking damages many organs and systems, not just the lungs."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding helps treat respiratory diseases.",
        example: "Asthma treatment, pneumonia treatment"
      },
      {
        id: "app_002",
        title: "Public Health",
        description: "Understanding helps prevent smoking and pollution.",
        example: "Anti-smoking campaigns"
      },
      {
        id: "app_003",
        title: "Sports",
        description: "Understanding helps improve athletic performance.",
        example: "Breathing techniques for athletes"
      },
      {
        id: "app_004",
        title: "First Aid",
        description: "Understanding helps respond to breathing emergencies.",
        example: "CPR, Heimlich maneuver"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Respiration", definition: "The process of gas exchange in the body." },
    { term: "Ventilation", definition: "Movement of air in and out of the lungs." },
    { term: "Inhalation", definition: "Breathing in (inspiration)." },
    { term: "Exhalation", definition: "Breathing out (expiration)." },
    { term: "Alveoli", definition: "Tiny air sacs where gas exchange occurs." },
    { term: "Diaphragm", definition: "Muscle that controls breathing." },
    { term: "Trachea", definition: "Windpipe." },
    { term: "Bronchi", definition: "Two branches of the trachea." },
    { term: "Bronchioles", definition: "Smaller branches of the bronchi." },
    { term: "Gas Exchange", definition: "O₂ entering blood and CO₂ leaving blood." },
    { term: "Hemoglobin", definition: "Protein that carries oxygen." },
    { term: "Mucus", definition: "Sticky substance that traps particles." },
    { term: "Cilia", definition: "Tiny hairs that move mucus." },
    { term: "Asthma", definition: "Narrowing of airways." },
    { term: "Pneumonia", definition: "Infection of the alveoli." },
    { term: "COPD", definition: "Chronic obstructive pulmonary disease." },
    { term: "Smoking", definition: "Inhaling tobacco smoke." },
    { term: "Surfactant", definition: "Substance that keeps alveoli open." },
    { term: "Larynx", definition: "Voice box." },
    { term: "Epiglottis", definition: "Flap that prevents food from entering trachea." }
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
      question: "What is the main function of the respiratory system?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To bring oxygen into the body and remove CO₂",
        "To pump blood",
        "To produce hormones"
      ],
      answer: "To bring oxygen into the body and remove CO₂",
      explanation: "The respiratory system brings oxygen in and removes carbon dioxide."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which organ is the main organ of the respiratory system?",
      type: "multiple_choice",
      options: ["Heart", "Liver", "Lungs", "Kidneys"],
      answer: "Lungs",
      explanation: "The lungs are the main organs of the respiratory system."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What happens during inhalation?",
      type: "multiple_choice",
      options: [
        "Air leaves the lungs",
        "Air enters the lungs",
        "The lungs expand",
        "Both air enters and lungs expand"
      ],
      answer: "Both air enters and lungs expand",
      explanation: "During inhalation, air enters and the lungs expand."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Where does gas exchange occur in the lungs?",
      type: "multiple_choice",
      options: ["Trachea", "Bronchi", "Alveoli", "Bronchioles"],
      answer: "Alveoli",
      explanation: "Gas exchange occurs in the alveoli."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What gas diffuses from the alveoli into the blood?",
      type: "multiple_choice",
      options: ["CO₂", "O₂", "N₂", "H₂O"],
      answer: "O₂",
      explanation: "Oxygen diffuses from the alveoli into the blood."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the role of the diaphragm in breathing?",
      type: "multiple_choice",
      options: [
        "It controls the flow of air",
        "It contracts and relaxes to change lung volume",
        "It filters air",
        "It produces mucus"
      ],
      answer: "It contracts and relaxes to change lung volume",
      explanation: "The diaphragm contracts and relaxes to change the volume of the thoracic cavity."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the approximate percentage of oxygen in exhaled air?",
      type: "multiple_choice",
      options: ["21%", "16%", "4%", "78%"],
      answer: "16%",
      explanation: "Exhaled air contains about 16% oxygen."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the function of cilia in the respiratory system?",
      type: "multiple_choice",
      options: [
        "To trap dust and pathogens",
        "To sweep mucus upward",
        "To produce mucus",
        "To warm the air"
      ],
      answer: "To sweep mucus upward",
      explanation: "Cilia sweep mucus upward toward the throat."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What part of the brain controls breathing?",
      type: "multiple_choice",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      answer: "Medulla oblongata",
      explanation: "The respiratory center is located in the medulla oblongata."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is asthma?",
      type: "multiple_choice",
      options: [
        "Infection of the alveoli",
        "Narrowing of the airways",
        "Inflammation of the bronchi",
        "Cancer of the lungs"
      ],
      answer: "Narrowing of the airways",
      explanation: "Asthma causes the airways to narrow, making breathing difficult."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a major effect of smoking on the lungs?",
      type: "multiple_choice",
      options: [
        "Asthma",
        "Lung cancer",
        "Pneumonia",
        "Bronchitis"
      ],
      answer: "Lung cancer",
      explanation: "Smoking is the leading cause of lung cancer."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is the respiratory system essential for life?",
      type: "multiple_choice",
      options: [
        "It provides oxygen to cells",
        "It removes CO₂ from the body",
        "It works with the circulatory system",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "The respiratory system provides oxygen, removes CO₂, and works with the circulatory system."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Which lung is slightly larger?",
      type: "multiple_choice",
      options: ["Left lung", "Right lung", "They are the same size", "It depends on the person"],
      answer: "Right lung",
      explanation: "The right lung is slightly larger because the heart takes up space on the left side."
    },
    {
      id: "prac_014",
      objective: "obj_004",
      difficulty: "hard",
      question: "What is the surface area of the alveoli?",
      type: "multiple_choice",
      options: ["10m²", "40m²", "70m²", "100m²"],
      answer: "70m²",
      explanation: "The alveoli have a surface area of about 70m² for efficient gas exchange."
    },
    {
      id: "prac_015",
      objective: "obj_005",
      difficulty: "hard",
      question: "What gas diffuses from the blood into the alveoli?",
      type: "multiple_choice",
      options: ["O₂", "CO₂", "N₂", "H₂O"],
      answer: "CO₂",
      explanation: "Carbon dioxide diffuses from the blood into the alveoli to be exhaled."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_respiratory_system",
    title: "Respiratory System Quiz",
    description: "Test your understanding of the respiratory system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main function of the respiratory system?",
        type: "short_answer",
        answer_key: "To bring oxygen into the body and remove carbon dioxide",
        explanation: "The respiratory system brings in oxygen and removes CO₂."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the main organ of the respiratory system.",
        type: "short_answer",
        answer_key: "Lungs",
        explanation: "The lungs are the main organs of the respiratory system."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What happens during inhalation?",
        type: "short_answer",
        answer_key: "Air enters the lungs",
        explanation: "During inhalation, air enters the lungs."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Where does gas exchange occur in the lungs?",
        type: "short_answer",
        answer_key: "Alveoli",
        explanation: "Gas exchange occurs in the alveoli."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What gas diffuses from the alveoli into the blood?",
        type: "short_answer",
        answer_key: "Oxygen (O₂)",
        explanation: "Oxygen diffuses from the alveoli into the blood."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the role of the diaphragm in breathing?",
        type: "short_answer",
        answer_key: "Contracts and relaxes to change lung volume",
        explanation: "The diaphragm changes lung volume for breathing."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the approximate percentage of oxygen in exhaled air?",
        type: "short_answer",
        answer_key: "16%",
        explanation: "Exhaled air contains about 16% oxygen."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the function of cilia in the respiratory system?",
        type: "short_answer",
        answer_key: "To sweep mucus upward",
        explanation: "Cilia sweep mucus upward toward the throat."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What part of the brain controls breathing?",
        type: "short_answer",
        answer_key: "Medulla oblongata",
        explanation: "The respiratory center is in the medulla oblongata."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is asthma?",
        type: "short_answer",
        answer_key: "Narrowing of the airways",
        explanation: "Asthma causes the airways to narrow."
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
        "Understand the structure and function of the respiratory system",
        "Explain the breathing process",
        "Describe gas exchange",
        "Understand respiratory diseases"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the respiratory system?" },
        { time: "5-10 min", activity: "Direct Instruction - Parts of the Respiratory System" },
        { time: "10-15 min", activity: "Direct Instruction - Breathing Process" },
        { time: "15-20 min", activity: "Direct Instruction - Gas Exchange" },
        { time: "20-25 min", activity: "Direct Instruction - Control of Breathing" },
        { time: "25-30 min", activity: "Direct Instruction - Protection" },
        { time: "30-35 min", activity: "Direct Instruction - Diseases and Smoking" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To bring oxygen into the body and remove CO₂",
        prac_002: "Lungs",
        prac_003: "Both air enters and lungs expand",
        prac_004: "Alveoli",
        prac_005: "O₂",
        prac_006: "It contracts and relaxes to change lung volume",
        prac_007: "16%",
        prac_008: "To sweep mucus upward",
        prac_009: "Medulla oblongata",
        prac_010: "Narrowing of the airways",
        prac_011: "Lung cancer",
        prac_012: "All of the above",
        prac_013: "Right lung",
        prac_014: "70m²",
        prac_015: "CO₂"
      },
      assessment: {
        ass_001: "To bring oxygen into the body and remove carbon dioxide",
        ass_002: "Lungs",
        ass_003: "Air enters the lungs",
        ass_004: "Alveoli",
        ass_005: "Oxygen (O₂)",
        ass_006: "Contracts and relaxes to change lung volume",
        ass_007: "16%",
        ass_008: "To sweep mucus upward",
        ass_009: "Medulla oblongata",
        ass_010: "Narrowing of the airways"
      }
    },
    extensionActivities: [
      "Research lung diseases",
      "Study the effects of smoking",
      "Research asthma management",
      "Study the history of pneumonia treatment",
      "Learn about respiratory therapy"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research respiratory physiology",
        "Study lung transplantation",
        "Research pulmonary pharmacology",
        "Study respiratory infections"
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
      title: "Respiratory System",
      description: "Diagram of the respiratory system",
      url: "/diagrams/respiratory-system.png",
      alt: "Respiratory system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Gas Exchange",
      description: "Diagram of gas exchange in the alveoli",
      url: "/diagrams/gas-exchange.png",
      alt: "Gas exchange diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Breathing Mechanism",
      description: "Diagram showing inhalation and exhalation",
      url: "/diagrams/breathing.png",
      alt: "Breathing diagram"
    }
  ]
};