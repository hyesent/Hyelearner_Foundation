// Location: src/data/lessons/science/biology/microorganisms.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_microorganisms",
  subject: "Biology",
  topic: "Microorganisms",
  name: "Microorganisms",
  icon: "🦠",
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
    "Knowledge of prokaryotic and eukaryotic cells",
    "Basic understanding of genetics"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Biotechnology",
      file: "science/biology/biotechnology.js"
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
      description: "Define microorganisms and explain their importance",
      indicator: "Student can explain what microorganisms are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main types of microorganisms",
      indicator: "Student can name bacteria, viruses, fungi, and protists"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Describe the structure of bacteria",
      indicator: "Student can identify the parts of a bacterial cell"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain how bacteria reproduce",
      indicator: "Student can describe binary fission"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the structure of viruses",
      indicator: "Student can explain why viruses are not considered living"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain how viruses replicate",
      indicator: "Student can describe the lytic and lysogenic cycles"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the structure of fungi",
      indicator: "Student can explain the features of fungi"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the structure of protists",
      indicator: "Student can give examples of protists"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the role of microorganisms in disease",
      indicator: "Student can describe how pathogens cause disease"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the beneficial roles of microorganisms",
      indicator: "Student can describe the positive roles of microbes"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the process of antibiotic resistance",
      indicator: "Student can describe how bacteria become resistant"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of microorganisms in biotechnology",
      indicator: "Student can describe industrial uses of microbes"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Compare the different types of microorganisms",
      indicator: "Student can distinguish between bacteria, viruses, fungi, and protists"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the importance of microorganisms in ecosystems",
      indicator: "Student can describe the role of microbes in nutrient cycling"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Microorganisms - The Invisible World",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Explore the fascinating world of microorganisms, from bacteria to viruses."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Microorganisms</h2>
      <p><strong>Microorganisms</strong> (microbes) are living organisms that are too small to be seen with the naked eye. They include bacteria, viruses, fungi, and protists. Despite their small size, they have a huge impact on our lives and the planet.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🦠 Key Concepts</h3>
          <ul>
            <li>✓ Bacteria</li>
            <li>✓ Viruses</li>
            <li>✓ Fungi</li>
            <li>✓ Protists</li>
            <li>✓ Pathogens</li>
            <li>✓ Beneficial Microbes</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Microbes outnumber human cells 10:1</li>
            <li>• There are more bacteria on Earth than stars</li>
            <li>• 99% of microbes are harmless</li>
            <li>• Some bacteria can survive in extreme conditions</li>
            <li>• Viruses are not considered living organisms</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Microorganisms Matter</h4>
        <p>Microorganisms are essential for life on Earth. They help break down organic matter, fix nitrogen, aid in digestion, and are used in food production and medicine.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Microorganisms",
        objective: "obj_002",
        text: `
          <h3>Main Types of Microorganisms</h3>
          <p>There are four main groups of microorganisms.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🦠 Bacteria</h4>
              <ul>
                <li>• Prokaryotic</li>
                <li>• Single-celled</li>
                <li>• No nucleus</li>
                <li>• Reproduce by binary fission</li>
                <li>• Examples: E. coli, Streptococcus</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>🧬 Viruses</h4>
              <ul>
                <li>• Not living</li>
                <li>• Need host to replicate</li>
                <li>• Genetic material + protein coat</li>
                <li>• Examples: Influenza, HIV</li>
                <li>• Smaller than bacteria</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🍄 Fungi</h4>
              <ul>
                <li>• Eukaryotic</li>
                <li>• Yeasts and molds</li>
                <li>• Cell wall (chitin)</li>
                <li>• Reproduce by spores</li>
                <li>• Examples: Yeast, Penicillium</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🌿 Protists</h4>
              <ul>
                <li>• Eukaryotic</li>
                <li>• Single-celled</li>
                <li>• Diverse group</li>
                <li>• Examples: Amoeba, Paramecium</li>
                <li>• Some are algae</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Bacteria",
        objective: "obj_003",
        text: `
          <h3>Bacteria</h3>
          <p><strong>Bacteria</strong> are prokaryotic microorganisms that are found almost everywhere on Earth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure of Bacteria</h4>
              <ul>
                <li>• <strong>Cell wall:</strong> Made of peptidoglycan</li>
                <li>• <strong>Cell membrane:</strong> Controls what enters</li>
                <li>• <strong>Cytoplasm:</strong> Jelly-like substance</li>
                <li>• <strong>Nucleoid:</strong> Circular DNA (no nucleus)</li>
                <li>• <strong>Plasmids:</strong> Small DNA rings</li>
                <li>• <strong>Ribosomes:</strong> Protein synthesis</li>
                <li>• <strong>Flagella:</strong> For movement (some)</li>
                <li>• <strong>Pili:</strong> For attachment</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Shapes of Bacteria</h4>
              <ul>
                <li><strong>Cocci:</strong> Spherical</li>
                <li>• Example: Streptococcus</li>
                <li><strong>Bacilli:</strong> Rod-shaped</li>
                <li>• Example: E. coli</li>
                <li><strong>Spirilla:</strong> Spiral-shaped</li>
                <li>• Example: Spirillum</li>
                <li><strong>Vibrio:</strong> Comma-shaped</li>
                <li>• Example: Cholera</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Bacterial Shapes</text>
              
              <!-- Cocci (Spherical) -->
              <g transform="translate(100, 160)">
                <circle cx="0" cy="0" r="30" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-25" cy="-20" r="20" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="25" cy="-20" r="20" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-15" cy="25" r="18" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="15" cy="25" r="18" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1565c0">Cocci</text>
              </g>
              
              <!-- Bacilli (Rod-shaped) -->
              <g transform="translate(300, 160)">
                <rect x="-40" y="-20" width="80" height="40" rx="10" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <rect x="-60" y="-15" width="60" height="30" rx="8" fill="#4a90d9" stroke="#1565c0" stroke-width="2" transform="translate(0, -35)"/>
                <rect x="-55" y="-15" width="60" height="30" rx="8" fill="#4a90d9" stroke="#1565c0" stroke-width="2" transform="translate(0, 35)"/>
                <text x="0" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1565c0">Bacilli</text>
              </g>
              
              <!-- Spirilla (Spiral) -->
              <g transform="translate(500, 160)">
                <path d="M-35 0 Q-25 -15 -15 0 Q-5 15 5 0 Q15 -15 25 0 Q35 15 45 0" stroke="#4a90d9" stroke-width="12" fill="none" stroke-linecap="round"/>
                <text x="0" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1565c0">Spirilla</text>
              </g>
              
              <!-- Label -->
              <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565c0">Bacteria come in three main shapes</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Bacterial Reproduction",
        objective: "obj_004",
        text: `
          <h3>How Bacteria Reproduce</h3>
          <p>Bacteria reproduce asexually through a process called <strong>binary fission</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Binary Fission Steps</h4>
              <ul>
                <li>1. DNA replicates</li>
                <li>2. Cell elongates</li>
                <li>3. Cell membrane pinches inward</li>
                <li>4. Cell wall forms a septum</li>
                <li>5. Two identical daughter cells</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Growth Conditions</h4>
              <ul>
                <li>• Food (nutrients)</li>
                <li>• Water</li>
                <li>• Suitable temperature</li>
                <li>• Oxygen (or not, depending on type)</li>
                <li>• Some bacteria double every 20 minutes</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Exponential Growth:</strong>
            <ul>
              <li>• 1 bacterium → 2 → 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512 → 1024</li>
              <li>• After 10 divisions (about 3.3 hours), 1 becomes ~1,000</li>
              <li>• After 20 divisions, ~1,000,000</li>
            </ul>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1565c0">Binary Fission</text>
              
              <!-- Step 1: Parent Cell -->
              <g transform="translate(60, 150)">
                <rect x="-30" y="-20" width="60" height="40" rx="10" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="0" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <circle cx="0" cy="-5" r="3" fill="#ff6b6b"/>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Step 1</text>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">Parent Cell</text>
              </g>
              
              <!-- Arrow -->
              <text x="120" y="155" font-size="24" fill="#1565c0">→</text>
              
              <!-- Step 2: DNA Replication -->
              <g transform="translate(180, 150)">
                <rect x="-30" y="-20" width="60" height="40" rx="10" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-10" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <circle cx="10" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Step 2</text>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">DNA Replicates</text>
              </g>
              
              <!-- Arrow -->
              <text x="250" y="155" font-size="24" fill="#1565c0">→</text>
              
              <!-- Step 3: Cell Elongation -->
              <g transform="translate(310, 150)">
                <rect x="-40" y="-20" width="80" height="40" rx="10" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-15" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <circle cx="15" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Step 3</text>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">Cell Elongates</text>
              </g>
              
              <!-- Arrow -->
              <text x="410" y="155" font-size="24" fill="#1565c0">→</text>
              
              <!-- Step 4: Division -->
              <g transform="translate(470, 150)">
                <rect x="-30" y="-20" width="60" height="40" rx="10" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <rect x="-35" y="-15" width="30" height="30" rx="8" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-20" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <circle cx="20" cy="0" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#1565c0">Step 4</text>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">Two Daughter Cells</text>
              </g>
              
              <!-- Arrows -->
              <text x="100" y="155" font-size="24" fill="#1565c0">→</text>
              <text x="300" y="155" font-size="24" fill="#1565c0">→</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Viruses",
        objective: "obj_005",
        text: `
          <h3>Viruses</h3>
          <p><strong>Viruses</strong> are not considered living organisms. They are tiny particles that can only replicate inside living cells.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure of Viruses</h4>
              <ul>
                <li>• <strong>Genetic material:</strong> DNA or RNA</li>
                <li>• <strong>Capsid:</strong> Protein coat</li>
                <li>• <strong>Envelope:</strong> Some have a membrane</li>
                <li>• <strong>No nucleus, cytoplasm, or organelles</strong></li>
                <li>• Very small (20-300 nm)</li>
                <li>• Cannot reproduce on their own</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Why Viruses Are Not Alive</h4>
              <ul>
                <li>• Cannot reproduce without a host</li>
                <li>• No metabolism</li>
                <li>• No cellular structure</li>
                <li>• Do not grow or develop</li>
                <li>• Do not respond to stimuli</li>
                <li>• Are not made of cells</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#faf0f0" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#c62828">Virus Structure</text>
              
              <!-- Bacteriophage -->
              <g transform="translate(150, 170)">
                <!-- Head/Capsid -->
                <circle cx="0" cy="-30" r="35" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
                <!-- DNA inside -->
                <path d="M-15 -40 Q0 -30 15 -40" stroke="#ff6b6b" stroke-width="2" fill="none"/>
                <path d="M-10 -35 Q0 -25 10 -35" stroke="#ff6b6b" stroke-width="2" fill="none"/>
                <!-- Collar -->
                <rect x="-10" y="-5" width="20" height="8" rx="2" fill="#c62828"/>
                <!-- Sheath -->
                <rect x="-6" y="3" width="12" height="40" rx="2" fill="#c62828"/>
                <!-- Tail fibers -->
                <line x1="-6" y1="35" x2="-25" y2="50" stroke="#c62828" stroke-width="3"/>
                <line x1="6" y1="35" x2="25" y2="50" stroke="#c62828" stroke-width="3"/>
                <line x1="-6" y1="30" x2="-30" y2="40" stroke="#c62828" stroke-width="2"/>
                <line x1="6" y1="30" x2="30" y2="40" stroke="#c62828" stroke-width="2"/>
                <!-- Base plate -->
                <rect x="-10" y="40" width="20" height="5" rx="2" fill="#b71c1c"/>
                <!-- Spikes -->
                <line x1="-10" y1="45" x2="-15" y2="55" stroke="#b71c1c" stroke-width="2"/>
                <line x1="-3" y1="45" x2="-5" y2="55" stroke="#b71c1c" stroke-width="2"/>
                <line x1="3" y1="45" x2="5" y2="55" stroke="#b71c1c" stroke-width="2"/>
                <line x1="10" y1="45" x2="15" y2="55" stroke="#b71c1c" stroke-width="2"/>
                
                <text x="0" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">Bacteriophage</text>
              </g>
              
              <!-- HIV Virus -->
              <g transform="translate(420, 160)">
                <!-- Envelope -->
                <circle cx="0" cy="0" r="45" fill="#e57373" stroke="#c62828" stroke-width="2"/>
                <!-- Lipid bilayer -->
                <circle cx="0" cy="0" r="40" fill="none" stroke="#b71c1c" stroke-width="1.5"/>
                <!-- Glycoproteins (spikes) -->
                <path d="M-35 -20 L-45 -30 L-35 -35" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M-20 -35 L-25 -48 L-15 -50" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M5 -40 L5 -55 L-5 -55" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M30 -25 L40 -38 L35 -45" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M35 0 L50 0 L50 -10" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M30 25 L42 35 L48 28" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M-30 25 L-42 35 L-48 28" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <path d="M-35 0 L-50 0 L-50 -10" stroke="#b71c1c" stroke-width="3" fill="none"/>
                <!-- Capsid (cone-shaped) -->
                <ellipse cx="0" cy="-5" rx="18" ry="28" fill="#ef5350" stroke="#b71c1c" stroke-width="1.5"/>
                <!-- RNA inside -->
                <path d="M-8 -20 Q0 -10 8 -20" stroke="#ff8a80" stroke-width="2" fill="none"/>
                <path d="M-5 -15 Q0 -5 5 -15" stroke="#ff8a80" stroke-width="2" fill="none"/>
                
                <text x="0" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#c62828">HIV Virus</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Viral Replication",
        objective: "obj_006",
        text: `
          <h3>How Viruses Replicate</h3>
          <p>Viruses replicate by hijacking the host cell's machinery. There are two main cycles.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Lytic Cycle</h4>
              <ul>
                <li>1. Virus attaches to host cell</li>
                <li>2. Injects genetic material</li>
                <li>3. Host cell makes viral proteins</li>
                <li>4. New viruses are assembled</li>
                <li>5. Cell bursts (lysis) releasing viruses</li>
                <li>• Host cell is destroyed</li>
                <li>• Rapid replication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Lysogenic Cycle</h4>
              <ul>
                <li>1. Virus attaches and injects DNA</li>
                <li>2. Viral DNA integrates into host DNA</li>
                <li>3. Becomes a prophage (inactive)</li>
                <li>4. Cell divides normally</li>
                <li>5. Later, the virus may enter lytic cycle</li>
                <li>• Host cell is not immediately destroyed</li>
                <li>• Virus remains dormant</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Fungi",
        objective: "obj_007",
        text: `
          <h3>Fungi</h3>
          <p><strong>Fungi</strong> are eukaryotic organisms that include yeasts, molds, and mushrooms. Some fungi are microscopic.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure of Fungi</h4>
              <ul>
                <li>• <strong>Cell wall:</strong> Made of chitin</li>
                <li>• <strong>Hyphae:</strong> Thread-like structures</li>
                <li>• <strong>Mycelium:</strong> Network of hyphae</li>
                <li>• <strong>Spores:</strong> For reproduction</li>
                <li>• <strong>No chlorophyll:</strong> Cannot photosynthesize</li>
                <li>• Absorb nutrients from surroundings</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Microscopic Fungi</h4>
              <ul>
                <li><strong>Yeasts:</strong></li>
                <li>• Single-celled</li>
                <li>• Reproduce by budding</li>
                <li>• Example: Saccharomyces (baker's yeast)</li>
                <li><strong>Molds:</strong></li>
                <li>• Multicellular</li>
                <li>• Reproduce by spores</li>
                <li>• Example: Penicillium</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f5f0e8" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2e7d32">Fungi - Yeast and Mold</text>
              
              <!-- Yeast -->
              <g transform="translate(150, 160)">
                <!-- Parent cell -->
                <ellipse cx="0" cy="0" rx="35" ry="25" fill="#f5c842" stroke="#f57f17" stroke-width="2"/>
                <!-- Nucleus -->
                <ellipse cx="-5" cy="-3" rx="10" ry="8" fill="#f9a825" stroke="#f57f17" stroke-width="1"/>
                <!-- Vacuole -->
                <ellipse cx="10" cy="5" rx="8" ry="6" fill="#fff9c4" stroke="#f57f17" stroke-width="1"/>
                <!-- Bud -->
                <ellipse cx="45" cy="-5" rx="20" ry="15" fill="#f5c842" stroke="#f57f17" stroke-width="2"/>
                <!-- Bud nucleus -->
                <ellipse cx="48" cy="-5" rx="6" ry="5" fill="#f9a825" stroke="#f57f17" stroke-width="1"/>
                
                <text x="0" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2e7d32">Yeast (Budding)</text>
              </g>
              
              <!-- Mold -->
              <g transform="translate(400, 150)">
                <!-- Mycelium -->
                <path d="M-30 0 Q-20 -30 0 -20 Q20 -10 30 -30" stroke="#4caf50" stroke-width="3" fill="none"/>
                <path d="M0 -20 Q10 -40 20 -35" stroke="#4caf50" stroke-width="3" fill="none"/>
                <path d="M-10 -15 Q-25 -35 -15 -45" stroke="#4caf50" stroke-width="3" fill="none"/>
                <!-- Sporangia -->
                <circle cx="0" cy="-20" r="10" fill="#66bb6a" stroke="#388e3c" stroke-width="2"/>
                <circle cx="20" cy="-35" r="8" fill="#66bb6a" stroke="#388e3c" stroke-width="2"/>
                <circle cx="-15" cy="-45" r="8" fill="#66bb6a" stroke="#388e3c" stroke-width="2"/>
                <!-- Spores -->
                <circle cx="-3" cy="-25" r="2" fill="#388e3c"/>
                <circle cx="3" cy="-22" r="2" fill="#388e3c"/>
                <circle cx="0" cy="-18" r="2" fill="#388e3c"/>
                
                <text x="0" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2e7d32">Mold (Spores)</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Protists",
        objective: "obj_008",
        text: `
          <h3>Protists</h3>
          <p><strong>Protists</strong> are a diverse group of eukaryotic microorganisms that are not plants, animals, or fungi.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Amoeba</h4>
              <ul>
                <li>• Moves by pseudopods</li>
                <li>• Feeds by phagocytosis</li>
                <li>• Found in freshwater</li>
                <li>• No fixed shape</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Paramecium</h4>
              <ul>
                <li>• Moves by cilia</li>
                <li>• Has a fixed shape</li>
                <li>• Found in freshwater</li>
                <li>• Has a macronucleus and micronucleus</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Euglena</h4>
              <ul>
                <li>• Moves by flagellum</li>
                <li>• Has chloroplasts</li>
                <li>• Found in freshwater</li>
                <li>• Can photosynthesize</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Protists</text>
              
              <!-- Amoeba -->
              <g transform="translate(100, 130)">
                <!-- Body -->
                <path d="M-30 -20 Q-40 -10 -35 0 Q-45 10 -30 20 Q-20 35 -5 30 Q10 40 20 25 Q35 30 30 10 Q40 -10 25 -20 Q15 -35 0 -30 Q-15 -40 -30 -20" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
                <!-- Nucleus -->
                <circle cx="0" cy="0" r="12" fill="#81d4fa" stroke="#0288d1" stroke-width="1.5"/>
                <circle cx="0" cy="0" r="5" fill="#0288d1"/>
                <!-- Vacuoles -->
                <circle cx="-15" cy="-10" r="5" fill="#e1f5fe" stroke="#0288d1" stroke-width="1"/>
                <circle cx="12" cy="8" r="6" fill="#e1f5fe" stroke="#0288d1" stroke-width="1"/>
                <!-- Pseudopods -->
                <path d="M-30 -20 L-45 -30 L-35 -35" stroke="#4fc3f7" stroke-width="3" fill="none"/>
                <path d="M30 10 L45 15 L40 5" stroke="#4fc3f7" stroke-width="3" fill="none"/>
                
                <text x="0" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0288d1">Amoeba</text>
              </g>
              
              <!-- Paramecium -->
              <g transform="translate(300, 130)">
                <!-- Body -->
                <ellipse cx="0" cy="0" rx="50" ry="20" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
                <!-- Macronucleus -->
                <ellipse cx="-5" cy="-3" rx="15" ry="8" fill="#81d4fa" stroke="#0288d1" stroke-width="1"/>
                <!-- Micronucleus -->
                <circle cx="10" cy="5" r="4" fill="#e1f5fe" stroke="#0288d1" stroke-width="1"/>
                <!-- Contractile vacuoles -->
                <circle cx="-35" cy="-5" r="6" fill="#e1f5fe" stroke="#0288d1" stroke-width="1"/>
                <circle cx="35" cy="-5" r="6" fill="#e1f5fe" stroke="#0288d1" stroke-width="1"/>
                <!-- Oral groove -->
                <path d="M-30 -5 Q-15 -15 0 -10 Q15 -5 20 -10" stroke="#0288d1" stroke-width="1.5" fill="none"/>
                <!-- Cilia -->
                <path d="M-45 0 L-50 -5 M-45 5 L-50 5 M-40 10 L-45 15 M-30 15 L-35 20 M-20 18 L-25 23 M-10 20 L-10 25 M0 20 L0 25 M10 20 L10 25 M20 18 L25 23 M30 15 L35 20 M40 10 L45 15 M45 5 L50 5 M45 0 L50 -5" stroke="#0288d1" stroke-width="1.5"/>
                
                <text x="0" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0288d1">Paramecium</text>
              </g>
              
              <!-- Euglena -->
              <g transform="translate(500, 130)">
                <!-- Body -->
                <ellipse cx="0" cy="0" rx="25" ry="18" fill="#4fc3f7" stroke="#0288d1" stroke-width="2"/>
                <!-- Flagellum -->
                <path d="M-25 0 Q-40 -10 -50 -5" stroke="#0288d1" stroke-width="2" fill="none"/>
                <!-- Chloroplasts -->
                <circle cx="-5" cy="-5" r="4" fill="#66bb6a" stroke="#388e3c" stroke-width="1"/>
                <circle cx="5" cy="0" r="4" fill="#66bb6a" stroke="#388e3c" stroke-width="1"/>
                <circle cx="-8" cy="5" r="4" fill="#66bb6a" stroke="#388e3c" stroke-width="1"/>
                <!-- Nucleus -->
                <circle cx="8" cy="-5" r="5" fill="#81d4fa" stroke="#0288d1" stroke-width="1"/>
                <!-- Eyespot -->
                <circle cx="-18" cy="-5" r="4" fill="#ff6b6b" stroke="#c62828" stroke-width="1"/>
                
                <text x="0" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0288d1">Euglena</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Beneficial Microorganisms",
        objective: "obj_010",
        text: `
          <h3>Beneficial Microorganisms</h3>
          <p>Not all microorganisms are harmful. Many are essential for life and have important uses.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 In Nature</h4>
              <ul>
                <li>• <strong>Decomposition:</strong> Break down dead matter</li>
                <li>• <strong>Nitrogen fixation:</strong> Convert N₂ to usable form</li>
                <li>• <strong>Digestion:</strong> Help animals digest food</li>
                <li>• <strong>Symbiosis:</strong> Live in mutual relationships</li>
                <li>• <strong>Food chains:</strong> Base of aquatic food webs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 In Industry</h4>
              <ul>
                <li>• <strong>Food production:</strong> Yogurt, cheese, bread</li>
                <li>• <strong>Medicine:</strong> Antibiotics (penicillin)</li>
                <li>• <strong>Fermentation:</strong> Beer, wine, soy sauce</li>
                <li>• <strong>Biofuels:</strong> Ethanol production</li>
                <li>• <strong>Bioremediation:</strong> Cleaning up pollution</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 The Human Microbiome:</strong>
            <ul>
              <li>• Our bodies contain 10x more bacteria than human cells</li>
              <li>• Help digest food</li>
              <li>• Produce vitamins</li>
              <li>• Protect against pathogens</li>
              <li>• Affect our immune system</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Microorganisms and Disease",
        objective: "obj_009",
        text: `
          <h3>Pathogenic Microorganisms</h3>
          <p>Some microorganisms cause disease. These are called <strong>pathogens</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Pathogens</h4>
              <ul>
                <li><strong>Bacterial Pathogens:</strong></li>
                <li>• Tuberculosis (Mycobacterium)</li>
                <li>• Cholera (Vibrio)</li>
                <li>• Food poisoning (Salmonella)</li>
                <li><strong>Viral Pathogens:</strong></li>
                <li>• Influenza</li>
                <li>• HIV/AIDS</li>
                <li>• COVID-19</li>
                <li><strong>Fungal Pathogens:</strong></li>
                <li>• Athlete's foot</li>
                <li>• Thrush</li>
                <li><strong>Protist Pathogens:</strong></li>
                <li>• Malaria (Plasmodium)</li>
                <li>• Sleeping sickness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How Pathogens Spread</h4>
              <ul>
                <li>• <strong>Direct contact:</strong> Person-to-person</li>
                <li>• <strong>Airborne:</strong> Coughing, sneezing</li>
                <li>• <strong>Waterborne:</strong> Contaminated water</li>
                <li>• <strong>Foodborne:</strong> Contaminated food</li>
                <li>• <strong>Vector-borne:</strong> Insects (mosquitoes, ticks)</li>
                <li>• <strong>Bloodborne:</strong> Needles, transfusions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Antibiotic Resistance",
        objective: "obj_011",
        text: `
          <h3>Antibiotic Resistance</h3>
          <p><strong>Antibiotic resistance</strong> occurs when bacteria evolve to become resistant to antibiotics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Resistance Develops</h4>
              <ul>
                <li>1. Bacteria mutate</li>
                <li>2. Some develop resistance</li>
                <li>3. Antibiotics kill susceptible bacteria</li>
                <li>4. Resistant bacteria survive</li>
                <li>5. They reproduce</li>
                <li>6. Population becomes resistant</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Causes of Resistance</h4>
              <ul>
                <li>• <strong>Overuse of antibiotics:</strong> Prescribed too often</li>
                <li>• <strong>Misuse:</strong> Not finishing courses</li>
                <li>• <strong>Agriculture:</strong> Antibiotics in animal feed</li>
                <li>• <strong>Natural selection:</strong> Survival of the fittest</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Superbugs:</strong>
            <ul>
              <li>• <strong>MRSA:</strong> Methicillin-resistant Staphylococcus aureus</li>
              <li>• <strong>VRSA:</strong> Vancomycin-resistant Staphylococcus aureus</li>
              <li>• Resistant to multiple antibiotics</li>
              <li>• Can cause serious infections</li>
              <li>• A growing global health concern</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Microorganisms and Ecosystems",
        objective: "obj_014",
        text: `
          <h3>Microorganisms in Ecosystems</h3>
          <p>Microorganisms are essential for ecosystem function.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Nutrient Cycling</h4>
              <ul>
                <li>• <strong>Carbon cycle:</strong> Decomposition releases CO₂</li>
                <li>• <strong>Nitrogen cycle:</strong> Nitrogen fixation, nitrification, denitrification</li>
                <li>• <strong>Phosphorus cycle:</strong> Mineralization</li>
                <li>• <strong>Sulfur cycle:</strong> Microbial transformations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Symbiotic Relationships</h4>
              <ul>
                <li>• <strong>Mutualism:</strong> Both benefit</li>
                <li>• Example: Nitrogen-fixing bacteria in roots</li>
                <li>• <strong>Commensalism:</strong> One benefits, other unaffected</li>
                <li>• <strong>Parasitism:</strong> One benefits, other harmed</li>
                <li>• Example: Pathogens</li>
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
          <h4>🦠 Types of Microorganisms</h4>
          <ul>
            <li>• Bacteria: Prokaryotic, binary fission</li>
            <li>• Viruses: Not alive, need host</li>
            <li>• Fungi: Eukaryotic, absorb nutrients</li>
            <li>• Protists: Diverse eukaryotes</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Importance</h4>
          <ul>
            <li>• Beneficial: Decomposition, food, medicine</li>
            <li>• Harmful: Pathogens, antibiotic resistance</li>
            <li>• Essential for nutrient cycling</li>
            <li>• Used in biotechnology</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Most microorganisms are harmless or beneficial. Only a small percentage cause disease.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All bacteria are harmful",
        correction: "Most bacteria are harmless or beneficial",
        explanation: "Only a small percentage of bacteria cause disease."
      },
      {
        id: "mis_002",
        misconception: "Antibiotics work against viruses",
        correction: "Antibiotics only work against bacteria",
        explanation: "Antibiotics target bacterial cell walls and processes, which viruses don't have."
      },
      {
        id: "mis_003",
        misconception: "All viruses cause disease",
        correction: "Many viruses are harmless or even beneficial",
        explanation: "Some viruses infect bacteria (phages) and can be used to treat infections."
      },
      {
        id: "mis_004",
        misconception: "Fungi are all plants",
        correction: "Fungi are a separate kingdom",
        explanation: "Fungi have different cell walls (chitin not cellulose) and absorb nutrients differently."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Microorganisms produce antibiotics and vaccines.",
        example: "Penicillin from Penicillium mold"
      },
      {
        id: "app_002",
        title: "Food Production",
        description: "Microorganisms are used to make food.",
        example: "Yogurt, cheese, bread, beer"
      },
      {
        id: "app_003",
        title: "Biotechnology",
        description: "Microorganisms are used in industry.",
        example: "Biofuels, bioremediation"
      },
      {
        id: "app_004",
        title: "Agriculture",
        description: "Microorganisms improve soil fertility.",
        example: "Nitrogen-fixing bacteria in legumes"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Microorganism", definition: "An organism that is too small to be seen with the naked eye." },
    { term: "Bacteria", definition: "Single-celled prokaryotic microorganisms." },
    { term: "Virus", definition: "A non-living particle that replicates inside living cells." },
    { term: "Fungi", definition: "Eukaryotic organisms that absorb nutrients from their surroundings." },
    { term: "Protist", definition: "A diverse group of eukaryotic microorganisms." },
    { term: "Pathogen", definition: "A microorganism that causes disease." },
    { term: "Binary Fission", definition: "Asexual reproduction in bacteria." },
    { term: "Capsid", definition: "The protein coat of a virus." },
    { term: "Lytic Cycle", definition: "Viral replication that destroys the host cell." },
    { term: "Lysogenic Cycle", definition: "Viral replication where the virus remains dormant." },
    { term: "Antibiotic", definition: "A drug that kills or inhibits bacteria." },
    { term: "Resistance", definition: "The ability to survive the effects of an antibiotic." },
    { term: "Hyphae", definition: "Thread-like structures of fungi." },
    { term: "Mycelium", definition: "A network of hyphae." },
    { term: "Spore", definition: "A reproductive cell of fungi and some other organisms." },
    { term: "Plasmid", definition: "A small circular DNA molecule in bacteria." },
    { term: "Flagella", definition: "A whip-like tail used for movement." },
    { term: "Pseudopod", definition: "A temporary extension of a cell used for movement." }
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
      question: "What are microorganisms?",
      type: "multiple_choice",
      options: [
        "Organisms that are harmful to humans",
        "Organisms that are too small to be seen with the naked eye",
        "Organisms that live in water",
        "Organisms that are plants"
      ],
      answer: "Organisms that are too small to be seen with the naked eye",
      explanation: "Microorganisms are organisms that are too small to be seen without a microscope."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which of the following is NOT a type of microorganism?",
      type: "multiple_choice",
      options: ["Bacteria", "Viruses", "Fungi", "Mammals"],
      answer: "Mammals",
      explanation: "Mammals are macroscopic organisms, not microorganisms."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the genetic material in bacteria?",
      type: "multiple_choice",
      options: [
        "Linear chromosomes",
        "Circular DNA in the nucleoid",
        "RNA only",
        "No genetic material"
      ],
      answer: "Circular DNA in the nucleoid",
      explanation: "Bacteria have circular DNA in the nucleoid region."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "How do bacteria reproduce?",
      type: "multiple_choice",
      options: [
        "Sexual reproduction",
        "Binary fission",
        "Spore formation",
        "Budding"
      ],
      answer: "Binary fission",
      explanation: "Bacteria reproduce asexually by binary fission."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Why are viruses not considered living?",
      type: "multiple_choice",
      options: [
        "They are too small",
        "They cannot reproduce without a host",
        "They do not have genetic material",
        "They do not evolve"
      ],
      answer: "They cannot reproduce without a host",
      explanation: "Viruses cannot reproduce on their own and require a host cell."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What happens in the lytic cycle of viral replication?",
      type: "multiple_choice",
      options: [
        "The virus becomes dormant",
        "The host cell is destroyed",
        "The virus integrates into host DNA",
        "The virus doesn't replicate"
      ],
      answer: "The host cell is destroyed",
      explanation: "In the lytic cycle, the host cell is destroyed when new viruses are released."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the cell wall of fungi made of?",
      type: "multiple_choice",
      options: ["Cellulose", "Chitin", "Peptidoglycan", "Lignin"],
      answer: "Chitin",
      explanation: "Fungal cell walls are made of chitin, not cellulose like plants."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which protist uses a flagellum for movement?",
      type: "multiple_choice",
      options: ["Amoeba", "Paramecium", "Euglena", "Algae"],
      answer: "Euglena",
      explanation: "Euglena uses a flagellum to move."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What causes tuberculosis?",
      type: "multiple_choice",
      options: [
        "A virus",
        "A bacterium",
        "A fungus",
        "A protist"
      ],
      answer: "A bacterium",
      explanation: "Tuberculosis is caused by the bacterium Mycobacterium tuberculosis."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which microorganisms are used to make antibiotics?",
      type: "multiple_choice",
      options: ["Bacteria", "Viruses", "Fungi", "Protists"],
      answer: "Fungi",
      explanation: "Many antibiotics like penicillin come from fungi."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "How does antibiotic resistance develop?",
      type: "multiple_choice",
      options: [
        "Bacteria mutate and become resistant",
        "Antibiotics stop working",
        "Viruses become resistant",
        "Resistance is inherited from parents"
      ],
      answer: "Bacteria mutate and become resistant",
      explanation: "Bacteria can develop resistance through mutations and natural selection."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which microorganism is used in the production of ethanol?",
      type: "multiple_choice",
      options: ["Bacteria", "Yeast", "Viruses", "Algae"],
      answer: "Yeast",
      explanation: "Yeast (a fungus) is used to ferment sugars into ethanol."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the main difference between bacteria and viruses?",
      type: "multiple_choice",
      options: [
        "Bacteria are eukaryotic; viruses are prokaryotic",
        "Bacteria are living; viruses are not considered living",
        "Bacteria have a protein coat; viruses have a cell wall",
        "There is no difference"
      ],
      answer: "Bacteria are living; viruses are not considered living",
      explanation: "Bacteria are living cells; viruses are non-living particles that require a host."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What role do nitrogen-fixing bacteria play in ecosystems?",
      type: "multiple_choice",
      options: [
        "They release nitrogen gas into the atmosphere",
        "They convert nitrogen gas into ammonia",
        "They break down dead matter",
        "They produce oxygen"
      ],
      answer: "They convert nitrogen gas into ammonia",
      explanation: "Nitrogen-fixing bacteria convert atmospheric nitrogen into a usable form."
    },
    {
      id: "prac_015",
      objective: "obj_013",
      difficulty: "hard",
      question: "Which of the following is an example of a protist?",
      type: "multiple_choice",
      options: ["Yeast", "E. coli", "Amoeba", "Penicillium"],
      answer: "Amoeba",
      explanation: "Amoeba is a protist. Yeast and Penicillium are fungi; E. coli is a bacterium."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_microorganisms",
    title: "Microorganisms Quiz",
    description: "Test your understanding of microorganisms",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are microorganisms?",
        type: "short_answer",
        answer_key: "Organisms too small to be seen with the naked eye",
        explanation: "Microorganisms are organisms that require a microscope to be seen."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the four main types of microorganisms.",
        type: "short_answer",
        answer_key: "Bacteria, viruses, fungi, and protists",
        explanation: "The four main types of microorganisms are bacteria, viruses, fungi, and protists."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What type of genetic material do bacteria have?",
        type: "short_answer",
        answer_key: "Circular DNA in the nucleoid",
        explanation: "Bacteria have circular DNA in the nucleoid region."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "How do bacteria reproduce?",
        type: "short_answer",
        answer_key: "Binary fission",
        explanation: "Bacteria reproduce asexually by binary fission."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Why are viruses not considered living?",
        type: "short_answer",
        answer_key: "They cannot reproduce without a host",
        explanation: "Viruses need a host cell to replicate."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between the lytic and lysogenic cycles?",
        type: "short_answer",
        answer_key: "Lytic cycle destroys the host cell; lysogenic cycle integrates into host DNA",
        explanation: "In the lytic cycle, the host cell is destroyed; in the lysogenic cycle, the virus becomes dormant."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the cell wall of fungi made of?",
        type: "short_answer",
        answer_key: "Chitin",
        explanation: "Fungal cell walls are made of chitin."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is a pathogen?",
        type: "short_answer",
        answer_key: "A microorganism that causes disease",
        explanation: "Pathogens are microorganisms that cause disease."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Give one example of a beneficial microorganism.",
        type: "short_answer",
        answer_key: "Yeast (or any valid example)",
        explanation: "Yeast is used in baking and brewing."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "How does antibiotic resistance develop?",
        type: "short_answer",
        answer_key: "Bacteria mutate and resistant ones survive",
        explanation: "Natural selection selects for bacteria that are resistant to antibiotics."
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
        "Understand different types of microorganisms",
        "Explain bacterial reproduction",
        "Describe viral replication",
        "Understand the importance of microorganisms"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are microorganisms?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Microorganisms" },
        { time: "10-15 min", activity: "Direct Instruction - Bacteria" },
        { time: "15-20 min", activity: "Direct Instruction - Viruses" },
        { time: "20-25 min", activity: "Direct Instruction - Fungi and Protists" },
        { time: "25-30 min", activity: "Direct Instruction - Beneficial Microorganisms" },
        { time: "30-35 min", activity: "Direct Instruction - Pathogens and Resistance" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Organisms that are too small to be seen with the naked eye",
        prac_002: "Mammals",
        prac_003: "Circular DNA in the nucleoid",
        prac_004: "Binary fission",
        prac_005: "They cannot reproduce without a host",
        prac_006: "The host cell is destroyed",
        prac_007: "Chitin",
        prac_008: "Euglena",
        prac_009: "A bacterium",
        prac_010: "Fungi",
        prac_011: "Bacteria mutate and become resistant",
        prac_012: "Yeast",
        prac_013: "Bacteria are living; viruses are not considered living",
        prac_014: "They convert nitrogen gas into ammonia",
        prac_015: "Amoeba"
      },
      assessment: {
        ass_001: "Organisms too small to be seen with the naked eye",
        ass_002: "Bacteria, viruses, fungi, and protists",
        ass_003: "Circular DNA in the nucleoid",
        ass_004: "Binary fission",
        ass_005: "They cannot reproduce without a host",
        ass_006: "Lytic cycle destroys the host cell; lysogenic cycle integrates into host DNA",
        ass_007: "Chitin",
        ass_008: "A microorganism that causes disease",
        ass_009: "Yeast (or any valid example)",
        ass_010: "Bacteria mutate and resistant ones survive"
      }
    },
    extensionActivities: [
      "Culture bacteria on agar plates",
      "Research the human microbiome",
      "Study antibiotic resistance in the community",
      "Research the role of microbes in climate change",
      "Visit a microbiology lab"
    ],
    differentiation: {
      struggling: [
        "Focus on the four main types",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research microbial genetics",
        "Study pathogenic bacteria",
        "Research emerging viruses",
        "Study bioremediation"
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
      title: "Bacterial Shapes",
      description: "Diagram showing bacterial shapes",
      url: "/diagrams/bacterial-shapes.png",
      alt: "Bacterial shapes diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Virus Structure",
      description: "Diagram of virus structure",
      url: "/diagrams/virus-structure.png",
      alt: "Virus structure diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Fungi and Protists",
      description: "Diagrams of fungi and protists",
      url: "/diagrams/fungi-protists.png",
      alt: "Fungi and protists diagram"
    }
  ]
};