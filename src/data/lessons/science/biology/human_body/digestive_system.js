// Location: src/data/lessons/science/biology/human_body/digestive_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_digestive_system",
  subject: "Biology",
  topic: "Digestive System",
  name: "Digestive System",
  icon: "🍽️",
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
    "Knowledge of enzymes",
    "Basic understanding of nutrition"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Excretory System",
      file: "science/biology/human_body/excretory_system.js"
    },
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
      description: "Define the digestive system and explain its functions",
      indicator: "Student can explain what the digestive system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main parts of the digestive system",
      indicator: "Student can label the organs of the digestive system"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the process of digestion",
      indicator: "Student can describe how food is broken down"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the structure and function of the mouth and esophagus",
      indicator: "Student can explain the role of the mouth in digestion"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the structure and function of the stomach",
      indicator: "Student can explain the role of the stomach in digestion"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the structure and function of the small intestine",
      indicator: "Student can explain the role of the small intestine in digestion"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the structure and function of the large intestine",
      indicator: "Student can explain the role of the large intestine"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of digestive enzymes",
      indicator: "Student can describe how enzymes break down food"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the role of the liver, gallbladder, and pancreas",
      indicator: "Student can describe the functions of accessory organs"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the process of nutrient absorption",
      indicator: "Student can describe how nutrients are absorbed"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain common digestive disorders",
      indicator: "Student can describe conditions like ulcers and IBS"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the importance of a healthy diet",
      indicator: "Student can discuss the role of nutrition in health"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the role of the villi in absorption",
      indicator: "Student can describe the structure and function of villi"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Compare mechanical and chemical digestion",
      indicator: "Student can distinguish between these two types of digestion"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Digestive System - Breaking Down Food",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the digestive system and how food is broken down and absorbed."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Digestive System</h2>
      <p>The <strong>digestive system</strong> is responsible for breaking down food into nutrients that the body can absorb and use. It converts food into energy and building blocks for cells.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🍽️ Key Concepts</h3>
          <ul>
            <li>✓ Digestion</li>
            <li>✓ Mechanical & Chemical Digestion</li>
            <li>✓ Digestive Organs</li>
            <li>✓ Enzymes</li>
            <li>✓ Absorption</li>
            <li>✓ Nutrition</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The digestive system is ~9 meters long</li>
            <li>• Food takes ~24-72 hours to pass through</li>
            <li>• The stomach produces ~2 liters of acid daily</li>
            <li>• The small intestine has villi for absorption</li>
            <li>• The liver has over 500 functions</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Digestive System Matters</h4>
        <p>The digestive system provides the nutrients your body needs to function. Without it, you couldn't get energy or building materials for growth and repair.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of the Digestive System",
        objective: "obj_002",
        text: `
          <h3>Organs of the Digestive System</h3>
          <p>The digestive system is made up of a long tube called the alimentary canal and several accessory organs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Alimentary Canal</h4>
              <ul>
                <li>• <strong>Mouth:</strong> Chewing and saliva</li>
                <li>• <strong>Pharynx:</strong> Swallowing</li>
                <li>• <strong>Esophagus:</strong> Food tube</li>
                <li>• <strong>Stomach:</strong> Churning and acid</li>
                <li>• <strong>Small intestine:</strong> Digestion and absorption</li>
                <li>• <strong>Large intestine:</strong> Water absorption</li>
                <li>• <strong>Rectum:</strong> Storage</li>
                <li>• <strong>Anus:</strong> Elimination</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Accessory Organs</h4>
              <ul>
                <li>• <strong>Salivary glands:</strong> Produce saliva</li>
                <li>• <strong>Liver:</strong> Produces bile</li>
                <li>• <strong>Gallbladder:</strong> Stores bile</li>
                <li>• <strong>Pancreas:</strong> Produces digestive enzymes</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="400" height="500" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1565c0">Digestive System</text>
              
              <!-- Mouth -->
              <ellipse cx="200" cy="55" rx="25" ry="15" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
              <text x="200" y="45" text-anchor="middle" font-size="9" fill="#c62828">Mouth</text>
              
              <!-- Esophagus -->
              <rect x="190" y="70" width="20" height="60" rx="3" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
              <text x="200" y="80" text-anchor="middle" font-size="9" fill="#c62828">Esophagus</text>
              
              <!-- Stomach -->
              <ellipse cx="200" cy="165" rx="35" ry="25" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
              <text x="200" y="160" text-anchor="middle" font-size="9" fill="#c62828">Stomach</text>
              
              <!-- Liver -->
              <path d="M150 120 L130 140 L130 170 L180 160 L190 140 Z" fill="#81c784" stroke="#2e7d32" stroke-width="2"/>
              <text x="145" y="130" text-anchor="middle" font-size="9" fill="#2e7d32">Liver</text>
              
              <!-- Gallbladder -->
              <ellipse cx="135" cy="185" rx="10" ry="15" fill="#a5d6a7" stroke="#2e7d32" stroke-width="2"/>
              <text x="135" y="210" text-anchor="middle" font-size="8" fill="#2e7d32">Gallbladder</text>
              
              <!-- Pancreas -->
              <ellipse cx="250" cy="180" rx="25" ry="12" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
              <text x="260" y="195" text-anchor="middle" font-size="9" fill="#c62828">Pancreas</text>
              
              <!-- Small Intestine -->
              <path d="M180 190 Q160 220 170 250 Q180 280 160 310 Q140 340 160 370" stroke="#ff8a80" stroke-width="12" fill="none" stroke-linecap="round"/>
              <path d="M220 190 Q240 220 230 250 Q220 280 240 310 Q260 340 240 370" stroke="#ff8a80" stroke-width="12" fill="none" stroke-linecap="round"/>
              <text x="200" y="275" text-anchor="middle" font-size="9" fill="#c62828">Small Intestine</text>
              
              <!-- Large Intestine -->
              <path d="M160 370 L130 370 L120 400 L140 430 L170 430 L200 440" stroke="#ff8a80" stroke-width="10" fill="none" stroke-linecap="round"/>
              <path d="M240 370 L270 370 L280 400 L260 430 L230 430 L200 440" stroke="#ff8a80" stroke-width="10" fill="none" stroke-linecap="round"/>
              <text x="200" y="410" text-anchor="middle" font-size="9" fill="#c62828">Large Intestine</text>
              
              <!-- Rectum -->
              <rect x="185" y="440" width="30" height="25" rx="3" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
              <text x="200" y="480" text-anchor="middle" font-size="9" fill="#c62828">Rectum</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Mechanical vs Chemical Digestion",
        objective: "obj_014",
        text: `
          <h3>Two Types of Digestion</h3>
          <p>Digestion occurs in two ways: mechanical and chemical.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Mechanical Digestion</h4>
              <ul>
                <li>• Physical breakdown of food</li>
                <li>• <strong>Teeth:</strong> Chewing</li>
                <li>• <strong>Tongue:</strong> Mixing</li>
                <li>• <strong>Stomach:</strong> Churning</li>
                <li>• Increases surface area</li>
                <li>• No chemical change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemical Digestion</h4>
              <ul>
                <li>• Enzymes break down food</li>
                <li>• <strong>Saliva:</strong> Amylase breaks down starch</li>
                <li>• <strong>Stomach:</strong> Pepsin breaks down protein</li>
                <li>• <strong>Pancreas:</strong> Various enzymes</li>
                <li>• Changes molecules chemically</li>
                <li>• Converts food to nutrients</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Mouth and Esophagus",
        objective: "obj_004",
        text: `
          <h3>The Mouth and Esophagus</h3>
          <p>Digestion begins in the mouth and continues in the esophagus.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Mouth</h4>
              <ul>
                <li>• <strong>Teeth:</strong> Break food into smaller pieces</li>
                <li>• <strong>Tongue:</strong> Moves food, tastes</li>
                <li>• <strong>Saliva:</strong> Contains amylase</li>
                <li>• Amylase begins starch digestion</li>
                <li>• Food forms a bolus</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Esophagus</h4>
              <ul>
                <li>• Muscular tube</li>
                <li>• Connects mouth to stomach</li>
                <li>• <strong>Peristalsis:</strong> Wave-like contractions</li>
                <li>• Moves food downward</li>
                <li>• No digestion occurs here</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Stomach",
        objective: "obj_005",
        text: `
          <h3>The Stomach</h3>
          <p>The stomach is a muscular organ that continues the digestive process.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• J-shaped organ</li>
                <li>• Three layers of muscle</li>
                <li>• Rugae (folds) for expansion</li>
                <li>• Gastric glands produce secretions</li>
                <li>• Pyloric sphincter controls exit</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Mechanical:</strong> Churning food</li>
                <li>• <strong>Chemical:</strong> Acid and enzymes</li>
                <li>• <strong>Gastric acid:</strong> Kills bacteria</li>
                <li>• <strong>Pepsin:</strong> Breaks down protein</li>
                <li>• <strong>Chyme:</strong> Partially digested food</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Small Intestine",
        objective: "obj_006",
        text: `
          <h3>The Small Intestine</h3>
          <p>The small intestine is where most digestion and nutrient absorption occurs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Longest part (~6 meters)</li>
                <li>• Three sections:</li>
                <li>• Duodenum (first part)</li>
                <li>• Jejunum (middle)</li>
                <li>• Ileum (last part)</li>
                <li>• Lined with villi</li>
                <li>• Microvilli increase surface area</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Receives bile and pancreatic enzymes</li>
                <li>• Final digestion of food</li>
                <li>• <strong>Absorption:</strong></li>
                <li>• Nutrients absorbed into blood</li>
                <li>• Villi increase surface area</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Villi in the Small Intestine</text>
              
              <!-- Villi -->
              <g transform="translate(250, 160)">
                <!-- Villus 1 -->
                <path d="M-80 -20 L-80 30 L-60 30 L-60 -20 L-50 -20 L-50 30 L-30 30 L-30 -20" fill="#ffcc80" stroke="#c62828" stroke-width="1.5"/>
                <!-- Capillary network -->
                <path d="M-75 -10 L-65 0 L-55 -10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M-75 10 L-65 20 L-55 10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M-75 -10 L-75 10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <!-- Lacteal -->
                <path d="M-70 -5 L-70 15" stroke="#4caf50" stroke-width="2" fill="none"/>
                
                <!-- Villus 2 -->
                <path d="M-30 -20 L-30 30 L-10 30 L-10 -20 L0 -20 L0 30 L20 30 L20 -20" fill="#ffcc80" stroke="#c62828" stroke-width="1.5"/>
                <path d="M-25 -10 L-15 0 L-5 -10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M-25 10 L-15 20 L-5 10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M-20 -5 L-20 15" stroke="#4caf50" stroke-width="2" fill="none"/>
                
                <!-- Villus 3 -->
                <path d="M20 -20 L20 30 L40 30 L40 -20 L50 -20 L50 30 L70 30 L70 -20" fill="#ffcc80" stroke="#c62828" stroke-width="1.5"/>
                <path d="M25 -10 L35 0 L45 -10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M25 10 L35 20 L45 10" stroke="#ef5350" stroke-width="1.5" fill="none"/>
                <path d="M30 -5 L30 15" stroke="#4caf50" stroke-width="2" fill="none"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="270" text-anchor="middle" font-size="12" fill="#1565c0">Villi increase surface area for absorption</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The Large Intestine",
        objective: "obj_007",
        text: `
          <h3>The Large Intestine</h3>
          <p>The large intestine absorbs water and forms feces.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Shorter but wider (~1.5 meters)</li>
                <li>• Three sections:</li>
                <li>• Cecum</li>
                <li>• Colon (ascending, transverse, descending)</li>
                <li>• Rectum</li>
                <li>• Appendix</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Water absorption:</strong> Most water absorbed here</li>
                <li>• <strong>Electrolyte absorption:</strong> Sodium, potassium</li>
                <li>• <strong>Vitamin production:</strong> Bacteria produce vitamins</li>
                <li>• <strong>Feces formation:</strong> Removes waste</li>
                <li>• <strong>Bacteria:</strong> Essential for digestion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Digestive Enzymes",
        objective: "obj_008",
        text: `
          <h3>Digestive Enzymes</h3>
          <p><strong>Enzymes</strong> are biological catalysts that speed up digestion.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Enzyme</th>
                <th class="border p-2">Source</th>
                <th class="border p-2">Action</th>
                <th class="border p-2">Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Salivary Amylase</td>
                <td class="border p-2">Salivary glands</td>
                <td class="border p-2">Starch → Maltose</td>
                <td class="border p-2">Maltose (sugar)</td>
              </tr>
              <tr>
                <td class="border p-2">Pepsin</td>
                <td class="border p-2">Stomach</td>
                <td class="border p-2">Protein → Peptides</td>
                <td class="border p-2">Peptides</td>
              </tr>
              <tr>
                <td class="border p-2">Pancreatic Amylase</td>
                <td class="border p-2">Pancreas</td>
                <td class="border p-2">Starch → Maltose</td>
                <td class="border p-2">Maltose</td>
              </tr>
              <tr>
                <td class="border p-2">Trypsin</td>
                <td class="border p-2">Pancreas</td>
                <td class="border p-2">Protein → Peptides</td>
                <td class="border p-2">Peptides</td>
              </tr>
              <tr>
                <td class="border p-2">Lipase</td>
                <td class="border p-2">Pancreas</td>
                <td class="border p-2">Fats → Fatty acids + Glycerol</td>
                <td class="border p-2">Fatty acids, Glycerol</td>
              </tr>
              <tr>
                <td class="border p-2">Maltase</td>
                <td class="border p-2">Small intestine</td>
                <td class="border p-2">Maltose → Glucose</td>
                <td class="border p-2">Glucose</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_008",
        title: "Accessory Organs",
        objective: "obj_009",
        text: `
          <h3>Accessory Organs</h3>
          <p>Several organs assist in digestion without being part of the alimentary canal.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🫁 Liver</h4>
              <ul>
                <li>• Largest internal organ</li>
                <li>• Produces bile</li>
                <li>• Stores glycogen</li>
                <li>• Detoxifies blood</li>
                <li>• Produces blood proteins</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟢 Gallbladder</h4>
              <ul>
                <li>• Stores bile</li>
                <li>• Releases bile into duodenum</li>
                <li>• Bile emulsifies fats</li>
                <li>• Helps absorb fat-soluble vitamins</li>
                <li>• Can be removed</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🧬 Pancreas</h4>
              <ul>
                <li>• Produces digestive enzymes</li>
                <li>• Produces bicarbonate</li>
                <li>• Produces insulin</li>
                <li>• Releases into duodenum</li>
                <li>• Both endocrine and exocrine</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Digestive Disorders",
        objective: "obj_011",
        text: `
          <h3>Common Digestive Disorders</h3>
          <p>Various disorders can affect the digestive system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Conditions</h4>
              <ul>
                <li><strong>Ulcers:</strong> Sores in stomach lining</li>
                <li><strong>Acid reflux:</strong> Stomach acid enters esophagus</li>
                <li><strong>Gallstones:</strong> Hard deposits in gallbladder</li>
                <li><strong>Constipation:</strong> Infrequent bowel movements</li>
                <li><strong>Diarrhea:</strong> Frequent, loose stools</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Prevention</h4>
              <ul>
                <li>• Healthy diet</li>
                <li>• Adequate fiber</li>
                <li>• Proper hydration</li>
                <li>• Regular exercise</li>
                <li>• Manage stress</li>
                <li>• Avoid excessive alcohol</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Nutrition and Health",
        objective: "obj_012",
        text: `
          <h3>Importance of a Healthy Diet</h3>
          <p>A balanced diet provides all the nutrients your body needs.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Essential Nutrients</h4>
              <ul>
                <li>• <strong>Carbohydrates:</strong> Energy</li>
                <li>• <strong>Proteins:</strong> Growth and repair</li>
                <li>• <strong>Fats:</strong> Energy and cell membranes</li>
                <li>• <strong>Vitamins:</strong> Essential for metabolism</li>
                <li>• <strong>Minerals:</strong> Bone health, etc.</li>
                <li>• <strong>Water:</strong> Essential for all processes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Healthy Eating Tips</h4>
              <ul>
                <li>• Eat a variety of foods</li>
                <li>• Include fruits and vegetables</li>
                <li>• Whole grains</li>
                <li>• Lean proteins</li>
                <li>• Limit sugar and salt</li>
                <li>• Stay hydrated</li>
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
          <h4>🍽️ Digestive System</h4>
          <ul>
            <li>• Breaks down food</li>
            <li>• Absorbs nutrients</li>
            <li>• Removes waste</li>
            <li>• Mechanical and chemical digestion</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Organs</h4>
          <ul>
            <li>• Stomach: Churns and digests</li>
            <li>• Small intestine: Absorption</li>
            <li>• Large intestine: Water absorption</li>
            <li>• Liver, pancreas: Aid digestion</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Eating a balanced diet is essential for a healthy digestive system and overall health.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Digestion happens only in the stomach",
        correction: "Digestion occurs throughout the digestive tract",
        explanation: "Digestion begins in the mouth and continues through the small intestine."
      },
      {
        id: "mis_002",
        misconception: "Food goes directly from the stomach to the large intestine",
        correction: "Food goes from the stomach to the small intestine first",
        explanation: "Most digestion and absorption occurs in the small intestine."
      },
      {
        id: "mis_003",
        misconception: "The liver only produces bile",
        correction: "The liver has over 500 functions",
        explanation: "The liver produces bile, stores glycogen, detoxifies blood, and many other functions."
      },
      {
        id: "mis_004",
        misconception: "Fats are bad for you",
        correction: "Fats are essential in moderation",
        explanation: "Fats provide energy and help absorb fat-soluble vitamins."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding helps treat digestive disorders.",
        example: "Ulcer treatment, acid reflux management"
      },
      {
        id: "app_002",
        title: "Nutrition",
        description: "Understanding helps choose healthy foods.",
        example: "Diet planning, nutritional counseling"
      },
      {
        id: "app_003",
        title: "Public Health",
        description: "Understanding helps prevent digestive diseases.",
        example: "Healthy eating campaigns"
      },
      {
        id: "app_004",
        title: "Food Science",
        description: "Understanding helps develop better foods.",
        example: "Food processing, probiotics"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Digestion", definition: "The breakdown of food into nutrients." },
    { term: "Enzyme", definition: "A protein that speeds up digestion." },
    { term: "Peristalsis", definition: "Wave-like muscle contractions." },
    { term: "Chyme", definition: "Partially digested food in the stomach." },
    { term: "Villi", definition: "Finger-like projections in the small intestine." },
    { term: "Amylase", definition: "Enzyme that breaks down starch." },
    { term: "Pepsin", definition: "Enzyme that breaks down protein." },
    { term: "Bile", definition: "Substance that emulsifies fats." },
    { term: "Glucose", definition: "Simple sugar; energy source." },
    { term: "Amino Acid", definition: "Building block of proteins." },
    { term: "Fatty Acid", definition: "Building block of fats." },
    { term: "Glycerol", definition: "Component of fats." },
    { term: "Duodenum", definition: "First part of the small intestine." },
    { term: "Rugae", definition: "Folds in the stomach." },
    { term: "Feces", definition: "Waste material from digestion." },
    { term: "Absorption", definition: "Movement of nutrients into blood." },
    { term: "Nutrition", definition: "Process of obtaining nutrients." },
    { term: "Metabolism", definition: "Chemical processes in the body." },
    { term: "Bolus", definition: "Chewed food mixed with saliva." },
    { term: "Sphincter", definition: "Ring of muscle that controls passage." }
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
      question: "What is the main function of the digestive system?",
      type: "multiple_choice",
      options: [
        "To pump blood",
        "To break down food and absorb nutrients",
        "To produce hormones",
        "To filter waste"
      ],
      answer: "To break down food and absorb nutrients",
      explanation: "The digestive system breaks down food and absorbs nutrients."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which organ is the main site of nutrient absorption?",
      type: "multiple_choice",
      options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
      answer: "Small intestine",
      explanation: "Most nutrient absorption occurs in the small intestine."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is digestion?",
      type: "multiple_choice",
      options: [
        "The breakdown of food",
        "The absorption of nutrients",
        "The elimination of waste",
        "The production of enzymes"
      ],
      answer: "The breakdown of food",
      explanation: "Digestion is the breakdown of food into nutrients."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What enzyme is found in saliva?",
      type: "multiple_choice",
      options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
      answer: "Amylase",
      explanation: "Saliva contains amylase, which breaks down starch."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the function of the stomach?",
      type: "multiple_choice",
      options: [
        "To absorb nutrients",
        "To churn food and begin protein digestion",
        "To absorb water",
        "To produce bile"
      ],
      answer: "To churn food and begin protein digestion",
      explanation: "The stomach churns food and begins protein digestion with pepsin."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What are villi?",
      type: "multiple_choice",
      options: [
        "Folds in the stomach",
        "Finger-like projections in the small intestine",
        "Cells that produce mucus",
        "Enzymes that break down food"
      ],
      answer: "Finger-like projections in the small intestine",
      explanation: "Villi are finger-like projections that increase surface area for absorption."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the main function of the large intestine?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To absorb water and form feces",
        "To produce bile",
        "To absorb nutrients"
      ],
      answer: "To absorb water and form feces",
      explanation: "The large intestine absorbs water and forms feces."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does the enzyme pepsin break down?",
      type: "multiple_choice",
      options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
      answer: "Proteins",
      explanation: "Pepsin breaks down proteins into peptides."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the function of the liver in digestion?",
      type: "multiple_choice",
      options: [
        "To produce digestive enzymes",
        "To produce bile",
        "To store food",
        "To absorb nutrients"
      ],
      answer: "To produce bile",
      explanation: "The liver produces bile, which emulsifies fats."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Where does most nutrient absorption occur?",
      type: "multiple_choice",
      options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
      answer: "Small intestine",
      explanation: "Most nutrient absorption occurs in the small intestine."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an ulcer?",
      type: "multiple_choice",
      options: [
        "Inflammation of the liver",
        "A sore in the stomach lining",
        "A blockage in the intestine",
        "An infection of the pancreas"
      ],
      answer: "A sore in the stomach lining",
      explanation: "An ulcer is a sore in the stomach or intestinal lining."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is a balanced diet important?",
      type: "multiple_choice",
      options: [
        "It provides energy only",
        "It provides all necessary nutrients",
        "It helps with weight loss only",
        "It prevents all diseases"
      ],
      answer: "It provides all necessary nutrients",
      explanation: "A balanced diet provides all the nutrients the body needs."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the role of villi?",
      type: "multiple_choice",
      options: [
        "To produce enzymes",
        "To increase surface area for absorption",
        "To produce mucus",
        "To move food"
      ],
      answer: "To increase surface area for absorption",
      explanation: "Villi increase the surface area for nutrient absorption."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the difference between mechanical and chemical digestion?",
      type: "multiple_choice",
      options: [
        "Mechanical uses enzymes; chemical uses physical force",
        "Mechanical is physical breakdown; chemical uses enzymes",
        "There is no difference",
        "Mechanical is in the stomach; chemical is in the mouth"
      ],
      answer: "Mechanical is physical breakdown; chemical uses enzymes",
      explanation: "Mechanical digestion is physical breakdown; chemical digestion uses enzymes."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "What are the three sections of the small intestine?",
      type: "multiple_choice",
      options: [
        "Duodenum, jejunum, ileum",
        "Cecum, colon, rectum",
        "Fundus, body, antrum",
        "Cardia, fundus, pylorus"
      ],
      answer: "Duodenum, jejunum, ileum",
      explanation: "The small intestine has three sections: duodenum, jejunum, and ileum."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_digestive_system",
    title: "Digestive System Quiz",
    description: "Test your understanding of the digestive system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main function of the digestive system?",
        type: "short_answer",
        answer_key: "To break down food and absorb nutrients",
        explanation: "The digestive system breaks down food and absorbs nutrients."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Which organ is the main site of nutrient absorption?",
        type: "short_answer",
        answer_key: "Small intestine",
        explanation: "Most nutrient absorption occurs in the small intestine."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is digestion?",
        type: "short_answer",
        answer_key: "The breakdown of food",
        explanation: "Digestion is the breakdown of food into nutrients."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What enzyme is found in saliva?",
        type: "short_answer",
        answer_key: "Amylase",
        explanation: "Saliva contains amylase, which breaks down starch."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of the stomach?",
        type: "short_answer",
        answer_key: "To churn food and begin protein digestion",
        explanation: "The stomach churns food and begins protein digestion."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What are villi?",
        type: "short_answer",
        answer_key: "Finger-like projections in the small intestine",
        explanation: "Villi increase surface area for absorption."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the main function of the large intestine?",
        type: "short_answer",
        answer_key: "To absorb water and form feces",
        explanation: "The large intestine absorbs water and forms feces."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does the enzyme pepsin break down?",
        type: "short_answer",
        answer_key: "Proteins",
        explanation: "Pepsin breaks down proteins into peptides."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the function of the liver in digestion?",
        type: "short_answer",
        answer_key: "To produce bile",
        explanation: "The liver produces bile, which emulsifies fats."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Where does most nutrient absorption occur?",
        type: "short_answer",
        answer_key: "Small intestine",
        explanation: "Most nutrient absorption occurs in the small intestine."
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
        "Understand the structure and function of the digestive system",
        "Identify the organs of the digestive tract",
        "Explain the role of enzymes",
        "Understand nutrition and digestive health"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the digestive system?" },
        { time: "5-10 min", activity: "Direct Instruction - Organs of the Digestive System" },
        { time: "10-15 min", activity: "Direct Instruction - Mechanical vs Chemical Digestion" },
        { time: "15-20 min", activity: "Direct Instruction - The Stomach and Small Intestine" },
        { time: "20-25 min", activity: "Direct Instruction - Enzymes and Accessory Organs" },
        { time: "25-30 min", activity: "Direct Instruction - The Large Intestine" },
        { time: "30-35 min", activity: "Direct Instruction - Digestive Disorders" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To break down food and absorb nutrients",
        prac_002: "Small intestine",
        prac_003: "The breakdown of food",
        prac_004: "Amylase",
        prac_005: "To churn food and begin protein digestion",
        prac_006: "Finger-like projections in the small intestine",
        prac_007: "To absorb water and form feces",
        prac_008: "Proteins",
        prac_009: "To produce bile",
        prac_010: "Small intestine",
        prac_011: "A sore in the stomach lining",
        prac_012: "It provides all necessary nutrients",
        prac_013: "To increase surface area for absorption",
        prac_014: "Mechanical is physical breakdown; chemical uses enzymes",
        prac_015: "Duodenum, jejunum, ileum"
      },
      assessment: {
        ass_001: "To break down food and absorb nutrients",
        ass_002: "Small intestine",
        ass_003: "The breakdown of food",
        ass_004: "Amylase",
        ass_005: "To churn food and begin protein digestion",
        ass_006: "Finger-like projections in the small intestine",
        ass_007: "To absorb water and form feces",
        ass_008: "Proteins",
        ass_009: "To produce bile",
        ass_010: "Small intestine"
      }
    },
    extensionActivities: [
      "Research digestive enzymes",
      "Study the microbiome",
      "Research common digestive disorders",
      "Learn about food labels and nutrition",
      "Study the history of digestion research"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research digestive physiology",
        "Study the gut-brain axis",
        "Research probiotics",
        "Study metabolic disorders"
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
      title: "Digestive System",
      description: "Diagram of the digestive system",
      url: "/diagrams/digestive-system.png",
      alt: "Digestive system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Villi",
      description: "Diagram showing villi in the small intestine",
      url: "/diagrams/villi.png",
      alt: "Villi diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Digestive Enzymes",
      description: "Chart of digestive enzymes and their functions",
      url: "/diagrams/digestive-enzymes.png",
      alt: "Digestive enzymes chart"
    }
  ]
};
