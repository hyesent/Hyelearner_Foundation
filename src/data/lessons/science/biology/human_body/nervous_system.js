// Location: src/data/lessons/science/biology/human_body/nervous_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_nervous_system",
  subject: "Biology",
  topic: "Nervous System",
  name: "Nervous System",
  icon: "🧠",
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
    "Knowledge of cell structure",
    "Basic understanding of coordination"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Endocrine System",
      file: "science/biology/human_body/endocrine_system.js"
    },
    {
      name: "Reproductive System",
      file: "science/biology/human_body/reproductive_system.js"
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
      description: "Define the nervous system and explain its functions",
      indicator: "Student can explain what the nervous system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main parts of the nervous system",
      indicator: "Student can name the CNS and PNS"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Describe the structure of a neuron",
      indicator: "Student can label the parts of a neuron"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the function of the brain and its parts",
      indicator: "Student can describe the functions of the cerebrum, cerebellum, and brainstem"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the function of the spinal cord",
      indicator: "Student can describe the role of the spinal cord"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain how nerve impulses travel",
      indicator: "Student can describe how signals move along neurons"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the structure and function of synapses",
      indicator: "Student can describe how neurons communicate"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the reflex arc",
      indicator: "Student can describe a reflex action"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Distinguish between the somatic and autonomic nervous systems",
      indicator: "Student can compare voluntary and involuntary control"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Describe the structure and function of the eye",
      indicator: "Student can explain how the eye works"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe the structure and function of the ear",
      indicator: "Student can explain how the ear works"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain common nervous system disorders",
      indicator: "Student can describe diseases like Parkinson's and MS"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of the nervous system",
      indicator: "Student can discuss why the nervous system is essential"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Compare the central and peripheral nervous systems",
      indicator: "Student can distinguish between CNS and PNS functions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Nervous System - Control Center of the Body",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the nervous system, neurons, and how the brain controls everything we do."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Nervous System</h2>
      <p>The <strong>nervous system</strong> is the body's control and communication system. It detects changes in the environment, processes information, and coordinates responses. It allows us to think, feel, move, and react to the world around us.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧠 Key Concepts</h3>
          <ul>
            <li>✓ Central Nervous System (CNS)</li>
            <li>✓ Peripheral Nervous System (PNS)</li>
            <li>✓ Neurons</li>
            <li>✓ Synapses</li>
            <li>✓ Reflexes</li>
            <li>✓ Sense Organs</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The brain has ~86 billion neurons</li>
            <li>• Messages travel at 120 m/s</li>
            <li>• The brain uses 20% of the body's oxygen</li>
            <li>• There are 100 trillion synapses</li>
            <li>• The spinal cord is 45 cm long</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Nervous System Matters</h4>
        <p>The nervous system controls everything we do - from breathing and heartbeat to thinking and feeling. Understanding it helps us appreciate how our bodies work and how to maintain brain health.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of the Nervous System",
        objective: "obj_002",
        text: `
          <h3>The Nervous System is Divided into Two Main Parts</h3>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Central Nervous System (CNS)</h4>
              <ul>
                <li>• <strong>Brain:</strong> Control center</li>
                <li>• <strong>Spinal cord:</strong> Connects brain to body</li>
                <li>• Processes information</li>
                <li>• Makes decisions</li>
                <li>• Initiates responses</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Peripheral Nervous System (PNS)</h4>
              <ul>
                <li>• Nerves throughout the body</li>
                <li>• Connects CNS to organs and limbs</li>
                <li>• <strong>Somatic:</strong> Voluntary control</li>
                <li>• <strong>Autonomic:</strong> Involuntary control</li>
                <li>• Sensory and motor nerves</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="400" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Nervous System</text>
              
              <!-- Brain -->
              <g transform="translate(250, 80)">
                <ellipse cx="0" cy="0" rx="45" ry="35" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <ellipse cx="-25" cy="-5" rx="20" ry="25" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <ellipse cx="25" cy="-5" rx="20" ry="25" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Brain</text>
              </g>
              
              <!-- Spinal Cord -->
              <g transform="translate(250, 140)">
                <rect x="-10" y="0" width="20" height="120" rx="4" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Spinal Cord</text>
              </g>
              
              <!-- Nerves branching out -->
              <g stroke="#4a90d9" stroke-width="2" fill="none">
                <!-- Left arm -->
                <path d="M240 160 Q180 180 100 200"/>
                <path d="M240 180 Q180 200 120 220"/>
                <path d="M240 200 Q190 220 140 240"/>
                <!-- Right arm -->
                <path d="M260 160 Q320 180 400 200"/>
                <path d="M260 180 Q320 200 380 220"/>
                <path d="M260 200 Q310 220 360 240"/>
                <!-- Left leg -->
                <path d="M240 260 Q200 300 160 360"/>
                <path d="M240 280 Q190 330 140 370"/>
                <!-- Right leg -->
                <path d="M260 260 Q300 300 340 360"/>
                <path d="M260 280 Q310 330 360 370"/>
              </g>
              
              <!-- Small nerve endings -->
              <g fill="#4a90d9">
                <circle cx="100" cy="200" r="3"/>
                <circle cx="120" cy="220" r="3"/>
                <circle cx="140" cy="240" r="3"/>
                <circle cx="400" cy="200" r="3"/>
                <circle cx="380" cy="220" r="3"/>
                <circle cx="360" cy="240" r="3"/>
                <circle cx="160" cy="360" r="3"/>
                <circle cx="140" cy="370" r="3"/>
                <circle cx="340" cy="360" r="3"/>
                <circle cx="360" cy="370" r="3"/>
              </g>
              
              <!-- Label -->
              <text x="250" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565c0">Brain and spinal cord with nerves</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Neurons",
        objective: "obj_003",
        text: `
          <h3>Neurons - The Basic Unit</h3>
          <p><strong>Neurons</strong> are specialized cells that transmit electrical signals throughout the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure of a Neuron</h4>
              <ul>
                <li>• <strong>Cell body:</strong> Contains the nucleus</li>
                <li>• <strong>Dendrites:</strong> Receive signals</li>
                <li>• <strong>Axon:</strong> Sends signals away</li>
                <li>• <strong>Myelin sheath:</strong> Insulates the axon</li>
                <li>• <strong>Axon terminals:</strong> Release neurotransmitters</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Neurons</h4>
              <ul>
                <li><strong>Sensory neurons:</strong></li>
                <li>• Carry signals from senses to CNS</li>
                <li><strong>Motor neurons:</strong></li>
                <li>• Carry signals from CNS to muscles</li>
                <li><strong>Interneurons:</strong></li>
                <li>• Connect neurons in the CNS</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#faf0e8" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#e65100">Neuron Structure</text>
              
              <!-- Dendrites -->
              <g transform="translate(80, 150)" stroke="#ff6f00" stroke-width="3" fill="none" stroke-linecap="round">
                <path d="M0 0 L-40 -30"/>
                <path d="M0 0 L-50 -10"/>
                <path d="M0 0 L-45 10"/>
                <path d="M0 0 L-35 30"/>
                <path d="M-40 -30 L-55 -40"/>
                <path d="M-40 -30 L-50 -20"/>
                <path d="M-50 -10 L-65 -15"/>
                <path d="M-50 -10 L-60 0"/>
                <path d="M-45 10 L-60 15"/>
                <path d="M-45 10 L-55 20"/>
                <path d="M-35 30 L-50 40"/>
                <path d="M-35 30 L-45 35"/>
              </g>
              
              <!-- Cell Body -->
              <circle cx="110" cy="150" r="30" fill="#ffcc80" stroke="#e65100" stroke-width="3"/>
              <!-- Nucleus -->
              <circle cx="110" cy="150" r="15" fill="#ffb74d" stroke="#e65100" stroke-width="2"/>
              <circle cx="110" cy="150" r="6" fill="#e65100"/>
              
              <!-- Axon Hillock -->
              <rect x="135" y="140" width="15" height="20" rx="2" fill="#ffcc80" stroke="#e65100" stroke-width="2"/>
              
              <!-- Axon -->
              <line x1="150" y1="150" x2="380" y2="150" stroke="#ff6f00" stroke-width="6"/>
              
              <!-- Myelin Sheath -->
              <rect x="170" y="140" width="20" height="20" rx="3" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
              <rect x="210" y="140" width="20" height="20" rx="3" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
              <rect x="250" y="140" width="20" height="20" rx="3" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
              <rect x="290" y="140" width="20" height="20" rx="3" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
              <rect x="330" y="140" width="20" height="20" rx="3" fill="#ffb74d" stroke="#e65100" stroke-width="1.5"/>
              
              <!-- Axon Terminals -->
              <g transform="translate(380, 150)" stroke="#ff6f00" stroke-width="3" fill="none" stroke-linecap="round">
                <path d="M0 0 L30 -20"/>
                <path d="M0 0 L35 0"/>
                <path d="M0 0 L30 20"/>
                <!-- Terminal buttons -->
                <circle cx="30" cy="-20" r="6" fill="#ffcc80" stroke="#e65100" stroke-width="2"/>
                <circle cx="35" cy="0" r="6" fill="#ffcc80" stroke="#e65100" stroke-width="2"/>
                <circle cx="30" cy="20" r="6" fill="#ffcc80" stroke="#e65100" stroke-width="2"/>
              </g>
              
              <!-- Labels -->
              <text x="80" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#e65100">Dendrites</text>
              <text x="110" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#e65100">Cell Body</text>
              <text x="250" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#e65100">Axon</text>
              <text x="260" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e65100">Myelin Sheath</text>
              <text x="420" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#e65100">Axon Terminals</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Brain",
        objective: "obj_004",
        text: `
          <h3>The Brain</h3>
          <p>The <strong>brain</strong> is the control center of the nervous system. It is divided into several regions, each with specific functions.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🧠 Cerebrum</h4>
              <ul>
                <li>• Largest part of the brain</li>
                <li>• Divided into two hemispheres</li>
                <li>• Responsible for thinking, memory, language</li>
                <li>• Controls voluntary movement</li>
                <li>• Processes sensory information</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🎯 Cerebellum</h4>
              <ul>
                <li>• "Little brain"</li>
                <li>• Coordinates movement</li>
                <li>• Maintains balance</li>
                <li>• Muscle coordination</li>
                <li>• Motor learning</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>⚡ Brainstem</h4>
              <ul>
                <li>• Connects brain to spinal cord</li>
                <li>• Controls vital functions</li>
                <li>• Breathing, heart rate</li>
                <li>• Digestion</li>
                <li>• Sleep-wake cycle</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Parts of the Brain</text>
              
              <!-- Brain Outline -->
              <g transform="translate(250, 160)">
                <!-- Cerebrum -->
                <ellipse cx="0" cy="-20" rx="80" ry="60" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <!-- Left hemisphere -->
                <ellipse cx="-40" cy="-25" rx="45" ry="50" fill="#ef5350" stroke="#c62828" stroke-width="2" opacity="0.6"/>
                <!-- Right hemisphere -->
                <ellipse cx="40" cy="-25" rx="45" ry="50" fill="#ef5350" stroke="#c62828" stroke-width="2" opacity="0.6"/>
                <!-- Fissure -->
                <line x1="0" y1="-80" x2="0" y2="20" stroke="#c62828" stroke-width="1.5"/>
                
                <!-- Cerebellum -->
                <ellipse cx="0" cy="30" rx="40" ry="25" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <!-- Cerebellum lines -->
                <line x1="-30" y1="25" x2="30" y2="25" stroke="#c62828" stroke-width="1" opacity="0.5"/>
                <line x1="-30" y1="30" x2="30" y2="30" stroke="#c62828" stroke-width="1" opacity="0.5"/>
                <line x1="-30" y1="35" x2="30" y2="35" stroke="#c62828" stroke-width="1" opacity="0.5"/>
                
                <!-- Brainstem -->
                <rect x="-15" y="50" width="30" height="40" rx="5" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <!-- Brainstem detail -->
                <line x1="-10" y1="55" x2="-10" y2="85" stroke="#c62828" stroke-width="1" opacity="0.5"/>
                <line x1="10" y1="55" x2="10" y2="85" stroke="#c62828" stroke-width="1" opacity="0.5"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">Cerebrum</text>
              <text x="250" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">Cerebellum</text>
              <text x="250" y="230" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">Brainstem</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Spinal Cord",
        objective: "obj_005",
        text: `
          <h3>The Spinal Cord</h3>
          <p>The <strong>spinal cord</strong> is a long, thin bundle of nerves that extends from the brainstem down the back.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Connects brain to body</li>
                <li>• Transmits signals</li>
                <li>• Controls reflexes</li>
                <li>• Protected by vertebrae</li>
                <li>• Contains gray and white matter</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• <strong>Gray matter:</strong> Cell bodies</li>
                <li>• <strong>White matter:</strong> Axons</li>
                <li>• <strong>Dorsal root:</strong> Sensory nerves</li>
                <li>• <strong>Ventral root:</strong> Motor nerves</li>
                <li>• <strong>Spinal nerves:</strong> 31 pairs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Nerve Impulses",
        objective: "obj_006",
        text: `
          <h3>How Nerve Impulses Travel</h3>
          <p>Nerve impulses are electrical signals that travel along neurons.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Resting Potential</h4>
              <ul>
                <li>• Neuron at rest</li>
                <li>• Inside is negative (-70mV)</li>
                <li>• More K⁺ inside</li>
                <li>• More Na⁺ outside</li>
                <li>• Sodium-potassium pump</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Action Potential</h4>
              <ul>
                <li>• Stimulus triggers depolarization</li>
                <li>• Na⁺ channels open</li>
                <li>• Na⁺ rushes in</li>
                <li>• Inside becomes positive (+40mV)</li>
                <li>• K⁺ channels open</li>
                <li>• Returns to resting potential</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Synapses",
        objective: "obj_007",
        text: `
          <h3>Synapses - Neuron Communication</h3>
          <p>A <strong>synapse</strong> is the junction between two neurons where signals are transmitted.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• <strong>Presynaptic neuron:</strong> Sends signal</li>
                <li>• <strong>Synaptic cleft:</strong> Gap between neurons</li>
                <li>• <strong>Postsynaptic neuron:</strong> Receives signal</li>
                <li>• <strong>Neurotransmitters:</strong> Chemical messengers</li>
                <li>• <strong>Receptors:</strong> Receive neurotransmitters</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How It Works</h4>
              <ul>
                <li>1. Action potential arrives</li>
                <li>2. Neurotransmitters released</li>
                <li>3. Cross synaptic cleft</li>
                <li>4. Bind to receptors</li>
                <li>5. Signal continues</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Reflex Arc",
        objective: "obj_008",
        text: `
          <h3>Reflex Arc</h3>
          <p>A <strong>reflex arc</strong> is a rapid, automatic response to a stimulus.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps of a Reflex</h4>
              <ul>
                <li>1. Stimulus detected by receptor</li>
                <li>2. Sensory neuron sends signal to spinal cord</li>
                <li>3. Interneuron in spinal cord</li>
                <li>4. Motor neuron sends signal to effector</li>
                <li>5. Response (muscle contraction)</li>
                <li>• Bypasses the brain (faster)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples of Reflexes</h4>
              <ul>
                <li>• <strong>Knee-jerk reflex:</strong> Tapping the knee</li>
                <li>• <strong>Withdrawal reflex:</strong> Pulling away from pain</li>
                <li>• <strong>Pupillary reflex:</strong> Pupils constricting in light</li>
                <li>• <strong>Blink reflex:</strong> Protecting the eyes</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f5f5f5" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Reflex Arc</text>
              
              <!-- Spinal Cord -->
              <rect x="270" y="80" width="60" height="150" rx="5" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
              <ellipse cx="300" cy="155" rx="25" ry="40" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
              
              <!-- Labels for spinal cord -->
              <text x="300" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#c62828">Spinal Cord</text>
              
              <!-- Receptor (skin) -->
              <g transform="translate(100, 200)">
                <rect x="-30" y="-15" width="60" height="30" rx="3" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
                <circle cx="0" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="40" text-anchor="middle" font-size="11" fill="#5d4037">Receptor</text>
              </g>
              
              <!-- Effector (muscle) -->
              <g transform="translate(500, 200)">
                <rect x="-20" y="-25" width="40" height="50" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#2e7d32">Effector</text>
              </g>
              
              <!-- Sensory Neuron -->
              <path d="M130 200 L170 170 L240 150 L280 140" stroke="#1565c0" stroke-width="3" fill="none"/>
              <circle cx="200" cy="165" r="6" fill="#1565c0"/>
              <text x="180" y="140" text-anchor="middle" font-size="10" fill="#1565c0">Sensory</text>
              <text x="180" y="152" text-anchor="middle" font-size="10" fill="#1565c0">Neuron</text>
              
              <!-- Interneuron -->
              <path d="M290 150 L300 150 L310 150" stroke="#1565c0" stroke-width="3" fill="none"/>
              <circle cx="300" cy="140" r="6" fill="#1565c0"/>
              <text x="300" y="130" text-anchor="middle" font-size="10" fill="#1565c0">Interneuron</text>
              
              <!-- Motor Neuron -->
              <path d="M320 160 L380 180 L440 200 L490 200" stroke="#1565c0" stroke-width="3" fill="none"/>
              <circle cx="400" cy="180" r="6" fill="#1565c0"/>
              <text x="400" y="160" text-anchor="middle" font-size="10" fill="#1565c0">Motor</text>
              <text x="400" y="172" text-anchor="middle" font-size="10" fill="#1565c0">Neuron</text>
              
              <!-- Arrows -->
              <text x="115" y="210" font-size="20" fill="#1565c0">←</text>
              <text x="515" y="210" font-size="20" fill="#1565c0">→</text>
              
              <!-- Labels for arrows -->
              <text x="75" y="260" text-anchor="middle" font-size="11" fill="#1565c0">Stimulus</text>
              <text x="525" y="260" text-anchor="middle" font-size="11" fill="#1565c0">Response</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Eye",
        objective: "obj_010",
        text: `
          <h3>The Eye - Sense of Sight</h3>
          <p>The <strong>eye</strong> is a sensory organ that detects light and allows us to see.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of the Eye</h4>
              <ul>
                <li>• <strong>Cornea:</strong> Transparent front layer</li>
                <li>• <strong>Iris:</strong> Colored part, controls light</li>
                <li>• <strong>Pupil:</strong> Opening for light</li>
                <li>• <strong>Lens:</strong> Focuses light</li>
                <li>• <strong>Retina:</strong> Light-sensitive layer</li>
                <li>• <strong>Optic nerve:</strong> Sends signals to brain</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How We See</h4>
              <ul>
                <li>1. Light enters through cornea</li>
                <li>2. Passes through pupil</li>
                <li>3. Lens focuses light on retina</li>
                <li>4. Rods and cones detect light</li>
                <li>5. Optic nerve sends signals</li>
                <li>6. Brain processes the image</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">The Eye</text>
              
              <!-- Eye Shape -->
              <g transform="translate(300, 160)">
                <!-- Sclera -->
                <ellipse cx="0" cy="0" rx="120" ry="80" fill="#ffffff" stroke="#bdbdbd" stroke-width="2"/>
                
                <!-- Cornea (front bulge) -->
                <ellipse cx="-100" cy="0" rx="50" ry="70" fill="#e3f2fd" stroke="#90caf9" stroke-width="2"/>
                
                <!-- Iris -->
                <ellipse cx="-60" cy="0" rx="40" ry="40" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
                
                <!-- Pupil -->
                <ellipse cx="-60" cy="0" rx="18" ry="18" fill="#1a1a2e"/>
                
                <!-- Lens -->
                <ellipse cx="-20" cy="0" rx="30" ry="15" fill="#b3e5fc" stroke="#0288d1" stroke-width="1.5" opacity="0.7"/>
                
                <!-- Retina -->
                <path d="M-50 -70 Q20 -80 80 -70 Q110 -50 120 0 Q110 50 80 70 Q20 80 -50 70" fill="none" stroke="#ef5350" stroke-width="3"/>
                
                <!-- Optic Nerve -->
                <rect x="80" y="-15" width="50" height="30" rx="5" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <path d="M130 0 L160 10 L160 -10 Z" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                
                <!-- Blind spot -->
                <circle cx="85" cy="0" r="12" fill="#ffcdd2" stroke="#c62828" stroke-width="1.5"/>
              </g>
              
              <!-- Labels -->
              <text x="195" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#0288d1">Cornea</text>
              <text x="245" y="230" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#0288d1">Lens</text>
              <text x="265" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#0288d1">Retina</text>
              <text x="420" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#c62828">Optic Nerve</text>
              <text x="340" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#0288d1">Iris</text>
              <text x="340" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#0288d1">Pupil</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "The Ear",
        objective: "obj_011",
        text: `
          <h3>The Ear - Sense of Hearing</h3>
          <p>The <strong>ear</strong> is a sensory organ that detects sound waves and helps us hear.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of the Ear</h4>
              <ul>
                <li><strong>Outer ear:</strong></li>
                <li>• Pinna, ear canal, eardrum</li>
                <li><strong>Middle ear:</strong></li>
                <li>• Hammer, anvil, stirrup (ossicles)</li>
                <li><strong>Inner ear:</strong></li>
                <li>• Cochlea (hearing), semicircular canals (balance)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How We Hear</h4>
              <ul>
                <li>1. Sound waves enter the ear</li>
                <li>2. Eardrum vibrates</li>
                <li>3. Ossicles amplify vibrations</li>
                <li>4. Cochlea converts to nerve signals</li>
                <li>5. Auditory nerve sends to brain</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Nervous System Disorders",
        objective: "obj_012",
        text: `
          <h3>Common Nervous System Disorders</h3>
          <p>Various disorders can affect the nervous system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Neurological Disorders</h4>
              <ul>
                <li><strong>Alzheimer's:</strong> Memory loss, dementia</li>
                <li><strong>Parkinson's:</strong> Movement disorders</li>
                <li><strong>Multiple Sclerosis:</strong> Immune system attacks nerves</li>
                <li><strong>Epilepsy:</strong> Seizures</li>
                <li><strong>Stroke:</strong> Loss of blood flow to brain</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Injuries and Diseases</h4>
              <ul>
                <li><strong>Spinal cord injury:</strong> Paralysis</li>
                <li><strong>Meningitis:</strong> Inflammation of meninges</li>
                <li><strong>Neuritis:</strong> Nerve inflammation</li>
                <li><strong>Brain tumors:</strong> Abnormal growth</li>
                <li><strong>Migraines:</strong> Severe headaches</li>
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
          <h4>🧠 Nervous System Basics</h4>
          <ul>
            <li>• CNS: Brain and spinal cord</li>
            <li>• PNS: Nerves throughout the body</li>
            <li>• Neurons transmit signals</li>
            <li>• Synapses allow communication</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Functions</h4>
          <ul>
            <li>• Controls everything we do</li>
            <li>• Reflexes are automatic</li>
            <li>• Sense organs detect the world</li>
            <li>• Essential for survival</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The nervous system is the body's control center. It coordinates all voluntary and involuntary actions.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "We only use 10% of our brain",
        correction: "We use all of our brain",
        explanation: "Different parts of the brain are active at different times, but all are used."
      },
      {
        id: "mis_002",
        misconception: "Nerves are like electrical wires",
        correction: "Nerves transmit signals chemically and electrically",
        explanation: "Nerves use both electrical impulses and chemical neurotransmitters."
      },
      {
        id: "mis_003",
        misconception: "Reflexes are controlled by the brain",
        correction: "Reflexes bypass the brain",
        explanation: "Reflexes are processed in the spinal cord for faster response."
      },
      {
        id: "mis_004",
        misconception: "The spinal cord only carries signals from the brain",
        correction: "The spinal cord also processes reflexes",
        explanation: "The spinal cord can process reflex responses without brain involvement."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding the nervous system helps treat disorders.",
        example: "Treating epilepsy, Parkinson's, and stroke"
      },
      {
        id: "app_002",
        title: "Neuroscience Research",
        description: "Studying the brain helps us understand consciousness.",
        example: "Brain mapping and cognitive research"
      },
      {
        id: "app_003",
        title: "Artificial Intelligence",
        description: "Neural networks are inspired by the brain.",
        example: "Machine learning and AI"
      },
      {
        id: "app_004",
        title: "Sports and Performance",
        description: "Understanding reflexes improves athletic performance.",
        example: "Reaction time training"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Neuron", definition: "A nerve cell that transmits signals." },
    { term: "Dendrite", definition: "Receives signals from other neurons." },
    { term: "Axon", definition: "Sends signals away from the cell body." },
    { term: "Myelin Sheath", definition: "Insulates the axon for faster transmission." },
    { term: "Synapse", definition: "Junction between two neurons." },
    { term: "Neurotransmitter", definition: "Chemical messenger at synapses." },
    { term: "Reflex", definition: "Automatic response to a stimulus." },
    { term: "CNS", definition: "Central Nervous System (brain and spinal cord)." },
    { term: "PNS", definition: "Peripheral Nervous System (nerves)." },
    { term: "Cerebrum", definition: "Largest part of the brain for thinking and memory." },
    { term: "Cerebellum", definition: "Coordinates movement and balance." },
    { term: "Brainstem", definition: "Controls vital functions." },
    { term: "Action Potential", definition: "Electrical signal in a neuron." },
    { term: "Resting Potential", definition: "Neuron at rest (-70mV)." },
    { term: "Sensory Neuron", definition: "Carries signals from senses." },
    { term: "Motor Neuron", definition: "Carries signals to muscles." },
    { term: "Interneuron", definition: "Connects neurons in the CNS." },
    { term: "Cornea", definition: "Transparent front of the eye." },
    { term: "Retina", definition: "Light-sensitive layer in the eye." },
    { term: "Cochlea", definition: "Hearing organ in the inner ear." }
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
      question: "What is the function of the nervous system?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To control and coordinate body activities",
        "To pump blood",
        "To filter waste"
      ],
      answer: "To control and coordinate body activities",
      explanation: "The nervous system controls and coordinates all body activities."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the two main parts of the nervous system?",
      type: "multiple_choice",
      options: [
        "Brain and heart",
        "CNS and PNS",
        "Nerves and muscles",
        "Brain and lungs"
      ],
      answer: "CNS and PNS",
      explanation: "The nervous system is divided into the CNS (brain and spinal cord) and PNS (nerves)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a neuron?",
      type: "multiple_choice",
      options: [
        "A muscle cell",
        "A nerve cell",
        "A blood cell",
        "A bone cell"
      ],
      answer: "A nerve cell",
      explanation: "A neuron is a nerve cell that transmits signals."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which part of the brain controls thinking and memory?",
      type: "multiple_choice",
      options: ["Cerebellum", "Brainstem", "Cerebrum", "Spinal cord"],
      answer: "Cerebrum",
      explanation: "The cerebrum controls thinking, memory, and voluntary movements."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is an action potential?",
      type: "multiple_choice",
      options: [
        "The resting state of a neuron",
        "An electrical signal traveling along a neuron",
        "A chemical messenger",
        "A type of neurotransmitter"
      ],
      answer: "An electrical signal traveling along a neuron",
      explanation: "An action potential is an electrical impulse that travels along a neuron."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a synapse?",
      type: "multiple_choice",
      options: [
        "A type of neuron",
        "The junction between two neurons",
        "A part of the brain",
        "A neurotransmitter"
      ],
      answer: "The junction between two neurons",
      explanation: "A synapse is the gap between two neurons where signals are transmitted."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is a reflex?",
      type: "multiple_choice",
      options: [
        "A conscious decision",
        "An automatic response to a stimulus",
        "A type of memory",
        "A learned behavior"
      ],
      answer: "An automatic response to a stimulus",
      explanation: "A reflex is an automatic, rapid response that bypasses the brain."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the difference between the somatic and autonomic nervous systems?",
      type: "multiple_choice",
      options: [
        "Somatic controls voluntary movement; autonomic controls involuntary functions",
        "Somatic controls the heart; autonomic controls muscles",
        "They are the same thing",
        "Somatic is in the brain; autonomic is in the spine"
      ],
      answer: "Somatic controls voluntary movement; autonomic controls involuntary functions",
      explanation: "The somatic nervous system controls voluntary movements while the autonomic system controls involuntary functions."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What part of the eye focuses light on the retina?",
      type: "multiple_choice",
      options: ["Cornea", "Iris", "Lens", "Pupil"],
      answer: "Lens",
      explanation: "The lens focuses light onto the retina."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What structure in the ear is responsible for hearing?",
      type: "multiple_choice",
      options: ["Hammer", "Anvil", "Cochlea", "Semicircular canals"],
      answer: "Cochlea",
      explanation: "The cochlea converts sound vibrations into nerve signals."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is Alzheimer's disease?",
      type: "multiple_choice",
      options: [
        "A muscle disorder",
        "A disease affecting memory and thinking",
        "A heart condition",
        "A lung disease"
      ],
      answer: "A disease affecting memory and thinking",
      explanation: "Alzheimer's is a neurodegenerative disease that affects memory and cognition."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is the nervous system important?",
      type: "multiple_choice",
      options: [
        "It controls all body functions",
        "It helps us respond to the environment",
        "It allows us to think and feel",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "The nervous system controls body functions, allows us to respond to the environment, and enables thinking and feeling."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the main difference between the CNS and PNS?",
      type: "multiple_choice",
      options: [
        "CNS is in the brain; PNS is in the spine",
        "CNS processes information; PNS carries signals to and from the CNS",
        "CNS controls movement; PNS controls thoughts",
        "There is no difference"
      ],
      answer: "CNS processes information; PNS carries signals to and from the CNS",
      explanation: "The CNS processes information while the PNS connects the CNS to the rest of the body."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "Why do reflexes bypass the brain?",
      type: "multiple_choice",
      options: [
        "To save energy",
        "To respond more quickly",
        "To protect the brain",
        "To avoid pain"
      ],
      answer: "To respond more quickly",
      explanation: "Reflexes bypass the brain to allow for faster responses."
    },
    {
      id: "prac_015",
      objective: "obj_004",
      difficulty: "hard",
      question: "What does the brainstem control?",
      type: "multiple_choice",
      options: [
        "Thinking and memory",
        "Balance and coordination",
        "Vital functions like breathing and heart rate",
        "Vision"
      ],
      answer: "Vital functions like breathing and heart rate",
      explanation: "The brainstem controls vital functions such as breathing, heart rate, and digestion."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_nervous_system",
    title: "Nervous System Quiz",
    description: "Test your understanding of the nervous system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main function of the nervous system?",
        type: "short_answer",
        answer_key: "To control and coordinate body activities",
        explanation: "The nervous system controls and coordinates all body functions."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the two main parts of the nervous system?",
        type: "short_answer",
        answer_key: "CNS (central) and PNS (peripheral)",
        explanation: "The nervous system is divided into the CNS and PNS."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a neuron?",
        type: "short_answer",
        answer_key: "A nerve cell",
        explanation: "A neuron is a specialized cell that transmits signals."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which part of the brain controls thinking and memory?",
        type: "short_answer",
        answer_key: "Cerebrum",
        explanation: "The cerebrum controls thinking, memory, and voluntary actions."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of the spinal cord?",
        type: "short_answer",
        answer_key: "Connects the brain to the body and processes reflexes",
        explanation: "The spinal cord connects the brain to the body and can process reflex responses."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is an action potential?",
        type: "short_answer",
        answer_key: "An electrical signal traveling along a neuron",
        explanation: "An action potential is the electrical impulse that travels along a neuron."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a synapse?",
        type: "short_answer",
        answer_key: "The junction between two neurons",
        explanation: "A synapse is the gap between neurons where chemical signals are transmitted."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a reflex arc?",
        type: "short_answer",
        answer_key: "A rapid automatic response that bypasses the brain",
        explanation: "A reflex arc is a fast, automatic response processed in the spinal cord."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What part of the eye focuses light on the retina?",
        type: "short_answer",
        answer_key: "Lens",
        explanation: "The lens focuses light onto the retina."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What structure in the ear is responsible for hearing?",
        type: "short_answer",
        answer_key: "Cochlea",
        explanation: "The cochlea converts sound waves into nerve signals."
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
        "Understand the structure and function of the nervous system",
        "Identify parts of the brain and their functions",
        "Explain how neurons transmit signals",
        "Understand reflexes and sense organs"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the nervous system?" },
        { time: "5-10 min", activity: "Direct Instruction - Parts of the Nervous System" },
        { time: "10-15 min", activity: "Direct Instruction - Neurons" },
        { time: "15-20 min", activity: "Direct Instruction - The Brain" },
        { time: "20-25 min", activity: "Direct Instruction - Reflexes" },
        { time: "25-30 min", activity: "Direct Instruction - Sense Organs" },
        { time: "30-35 min", activity: "Direct Instruction - Disorders" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To control and coordinate body activities",
        prac_002: "CNS and PNS",
        prac_003: "A nerve cell",
        prac_004: "Cerebrum",
        prac_005: "An electrical signal traveling along a neuron",
        prac_006: "The junction between two neurons",
        prac_007: "An automatic response to a stimulus",
        prac_008: "Somatic controls voluntary movement; autonomic controls involuntary functions",
        prac_009: "Lens",
        prac_010: "Cochlea",
        prac_011: "A disease affecting memory and thinking",
        prac_012: "All of the above",
        prac_013: "CNS processes information; PNS carries signals to and from the CNS",
        prac_014: "To respond more quickly",
        prac_015: "Vital functions like breathing and heart rate"
      },
      assessment: {
        ass_001: "To control and coordinate body activities",
        ass_002: "CNS (central) and PNS (peripheral)",
        ass_003: "A nerve cell",
        ass_004: "Cerebrum",
        ass_005: "Connects the brain to the body and processes reflexes",
        ass_006: "An electrical signal traveling along a neuron",
        ass_007: "The junction between two neurons",
        ass_008: "A rapid automatic response that bypasses the brain",
        ass_009: "Lens",
        ass_010: "Cochlea"
      }
    },
    extensionActivities: [
      "Research brain injuries",
      "Study how the brain develops",
      "Research neurodegenerative diseases",
      "Investigate how memories are formed",
      "Learn about brain imaging techniques"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structure and function",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research neuroplasticity",
        "Study the brain's structure in detail",
        "Research neurological diseases",
        "Study the effects of drugs on the nervous system"
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
      title: "Nervous System",
      description: "Diagram of the nervous system",
      url: "/diagrams/nervous-system.png",
      alt: "Nervous system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Neuron",
      description: "Structure of a neuron",
      url: "/diagrams/neuron.png",
      alt: "Neuron diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "The Brain",
      description: "Parts of the brain",
      url: "/diagrams/brain.png",
      alt: "Brain diagram"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "The Eye",
      description: "Structure of the eye",
      url: "/diagrams/eye.png",
      alt: "Eye diagram"
    }
  ]
};