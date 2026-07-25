// Location: src/data/lessons/science/biology/human_body/immunity.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_immunity",
  subject: "Biology",
  topic: "Immunity",
  name: "Immunity",
  icon: "🛡️",
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
    "Understanding of the circulatory system",
    "Knowledge of white blood cells",
    "Basic understanding of pathogens"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Biology lessons - this is the final one in Human Body
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define immunity and explain its importance",
      indicator: "Student can explain what immunity is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the body's first line of defense",
      indicator: "Student can describe physical and chemical barriers"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define pathogens and give examples",
      indicator: "Student can identify different types of pathogens"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the second line of defense (non-specific immunity)",
      indicator: "Student can describe inflammation and phagocytosis"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the third line of defense (specific immunity)",
      indicator: "Student can describe how the immune system targets specific pathogens"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the function of white blood cells",
      indicator: "Student can explain the roles of different white blood cells"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the role of antibodies",
      indicator: "Student can describe how antibodies work"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the difference between active and passive immunity",
      indicator: "Student can distinguish between these two types of immunity"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain how vaccines work",
      indicator: "Student can describe the process of vaccination"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the difference between innate and adaptive immunity",
      indicator: "Student can compare these two types of immunity"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain common immune disorders",
      indicator: "Student can describe allergies, autoimmune diseases, and immunodeficiency"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of memory cells in immunity",
      indicator: "Student can describe how the immune system remembers pathogens"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the inflammatory response",
      indicator: "Student can describe the stages of inflammation"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the importance of herd immunity",
      indicator: "Student can discuss how herd immunity protects populations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Immunity - The Body's Defense System",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the immune system and how it protects the body from disease."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Immunity</h2>
      <p><strong>Immunity</strong> is the body's ability to defend itself against disease-causing organisms and other harmful substances. The immune system is a complex network of cells, tissues, and organs that work together to protect the body.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🛡️ Key Concepts</h3>
          <ul>
            <li>✓ Pathogens</li>
            <li>✓ Lines of Defense</li>
            <li>✓ White Blood Cells</li>
            <li>✓ Antibodies</li>
            <li>✓ Vaccines</li>
            <li>✓ Memory Cells</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The immune system can remember pathogens</li>
            <li>• Vaccines prevent ~3 million deaths annually</li>
            <li>• The body produces ~1 million white blood cells per second</li>
            <li>• Antibodies are Y-shaped proteins</li>
            <li>• Herd immunity protects vulnerable people</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Immunity Matters</h4>
        <p>The immune system is essential for survival. It protects us from infections, helps us recover from illness, and provides long-term protection through memory.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Pathogens",
        objective: "obj_003",
        text: `
          <h3>Pathogens</h3>
          <p><strong>Pathogens</strong> are disease-causing microorganisms that can harm the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Pathogens</h4>
              <ul>
                <li>• <strong>Bacteria:</strong> Single-celled organisms</li>
                <li>• Example: Streptococcus, E. coli</li>
                <li>• <strong>Viruses:</strong> Non-living particles</li>
                <li>• Example: Influenza, HIV</li>
                <li>• <strong>Fungi:</strong> Multicellular or unicellular</li>
                <li>• Example: Candida, Athlete's foot</li>
                <li>• <strong>Protists:</strong> Single-celled eukaryotes</li>
                <li>• Example: Plasmodium (malaria)</li>
                <li>• <strong>Parasites:</strong> Organisms living on/in hosts</li>
                <li>• Example: Tapeworms, lice</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How Pathogens Spread</h4>
              <ul>
                <li>• <strong>Direct contact:</strong> Person-to-person</li>
                <li>• <strong>Airborne:</strong> Coughing, sneezing</li>
                <li>• <strong>Waterborne:</strong> Contaminated water</li>
                <li>• <strong>Foodborne:</strong> Contaminated food</li>
                <li>• <strong>Vector-borne:</strong> Insects, animals</li>
                <li>• <strong>Bloodborne:</strong> Needles, transfusions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "First Line of Defense",
        objective: "obj_002",
        text: `
          <h3>First Line of Defense</h3>
          <p>The first line of defense includes physical and chemical barriers that prevent pathogens from entering the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Barriers</h4>
              <ul>
                <li>• <strong>Skin:</strong> Outer protective layer</li>
                <li>• <strong>Mucous membranes:</strong> Line body cavities</li>
                <li>• <strong>Cilia:</strong> Sweep away particles</li>
                <li>• <strong>Hair:</strong> Filter air in nose</li>
                <li>• <strong>Stomach acid:</strong> Kills pathogens</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chemical Barriers</h4>
              <ul>
                <li>• <strong>Lysozyme:</strong> Enzyme in tears, saliva</li>
                <li>• <strong>Stomach acid:</strong> pH kills bacteria</li>
                <li>• <strong>Skin secretions:</strong> Sweat, sebum</li>
                <li>• <strong>Mucus:</strong> Traps pathogens</li>
                <li>• <strong>Antimicrobial peptides:</strong> Kill bacteria</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Second Line of Defense",
        objective: "obj_004",
        text: `
          <h3>Second Line of Defense</h3>
          <p>The second line of defense is non-specific and responds quickly to any pathogen that enters the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Inflammatory Response</h4>
              <ul>
                <li>• Redness and swelling</li>
                <li>• Heat and pain</li>
                <li>• Increased blood flow</li>
                <li>• White blood cells arrive</li>
                <li>• Tissue repair begins</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Phagocytosis</h4>
              <ul>
                <li>• <strong>Phagocytes:</strong> Eat pathogens</li>
                <li>• <strong>Macrophages:</strong> Engulf and digest</li>
                <li>• <strong>Neutrophils:</strong> First responders</li>
                <li>• <strong>Natural killer cells:</strong> Destroy infected cells</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Phagocytosis</text>
              
              <!-- Macrophage -->
              <g transform="translate(250, 160)">
                <!-- Cell body -->
                <ellipse cx="0" cy="0" rx="50" ry="35" fill="#90caf9" stroke="#1565c0" stroke-width="2"/>
                <!-- Nucleus -->
                <ellipse cx="10" cy="-5" rx="20" ry="15" fill="#64b5f6" stroke="#1565c0" stroke-width="1.5"/>
                <!-- Pseudopods extending -->
                <path d="M-30 -15 Q-50 -30 -45 -45" stroke="#90caf9" stroke-width="8" fill="none" stroke-linecap="round"/>
                <path d="M-20 -25 Q-35 -45 -25 -55" stroke="#90caf9" stroke-width="8" fill="none" stroke-linecap="round"/>
                <!-- Pathogen being engulfed -->
                <circle cx="-35" cy="-40" r="8" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <!-- Pathogen inside -->
                <circle cx="30" cy="10" r="8" fill="#ef5350" stroke="#c62828" stroke-width="2" opacity="0.5"/>
                <!-- Digestive enzymes -->
                <circle cx="28" cy="8" r="3" fill="#ffb74d"/>
                <circle cx="32" cy="12" r="3" fill="#ffb74d"/>
                <circle cx="30" cy="15" r="3" fill="#ffb74d"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="270" text-anchor="middle" font-size="12" fill="#1565c0">Macrophage engulfing a pathogen</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Third Line of Defense",
        objective: "obj_005",
        text: `
          <h3>Third Line of Defense</h3>
          <p>The third line of defense is specific and targets particular pathogens. It also remembers pathogens for future protection.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Components</h4>
              <ul>
                <li>• <strong>B lymphocytes:</strong> Produce antibodies</li>
                <li>• <strong>T lymphocytes:</strong> Kill infected cells</li>
                <li>• <strong>Antibodies:</strong> Y-shaped proteins</li>
                <li>• <strong>Memory cells:</strong> Remember pathogens</li>
                <li>• <strong>Helper T cells:</strong> Activate other cells</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How It Works</h4>
              <ul>
                <li>1. Pathogen is detected</li>
                <li>2. Antigen is recognized</li>
                <li>3. Specific immune cells respond</li>
                <li>4. Pathogen is destroyed</li>
                <li>5. Memory cells remain for future</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "White Blood Cells",
        objective: "obj_006",
        text: `
          <h3>White Blood Cells</h3>
          <p><strong>White blood cells (leukocytes)</strong> are the main cells of the immune system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of White Blood Cells</h4>
              <ul>
                <li><strong>Neutrophils:</strong> Most common, phagocytes</li>
                <li><strong>Lymphocytes:</strong> B cells and T cells</li>
                <li><strong>Monocytes:</strong> Become macrophages</li>
                <li><strong>Eosinophils:</strong> Fight parasites</li>
                <li><strong>Basophils:</strong> Release histamine</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Phagocytosis:</strong> Engulf pathogens</li>
                <li>• <strong>Antibody production:</strong> B cells</li>
                <li>• <strong>Cell killing:</strong> T cells</li>
                <li>• <strong>Memory:</strong> Long-term protection</li>
                <li>• <strong>Regulation:</strong> Control immune response</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Antibodies",
        objective: "obj_007",
        text: `
          <h3>Antibodies</h3>
          <p><strong>Antibodies</strong> are Y-shaped proteins produced by B lymphocytes that bind to specific antigens.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Y-shaped protein</li>
                <li>• Two heavy chains</li>
                <li>• Two light chains</li>
                <li>• Antigen-binding sites</li>
                <li>• Specific to each antigen</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Neutralization:</strong> Block pathogens</li>
                <li>• <strong>Agglutination:</strong> Clump pathogens</li>
                <li>• <strong>Opsonization:</strong> Tag for destruction</li>
                <li>• <strong>Complement activation:</strong> Destroy pathogens</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Antibody Structure</text>
              
              <!-- Antibody -->
              <g transform="translate(250, 130)">
                <!-- Heavy chains -->
                <path d="M-15 -30 L-20 10 L-30 25" stroke="#1565c0" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M15 -30 L20 10 L30 25" stroke="#1565c0" stroke-width="6" fill="none" stroke-linecap="round"/>
                <!-- Light chains -->
                <path d="M-15 -30 L-25 -10 L-30 -5" stroke="#4a90d9" stroke-width="4" fill="none" stroke-linecap="round"/>
                <path d="M15 -30 L25 -10 L30 -5" stroke="#4a90d9" stroke-width="4" fill="none" stroke-linecap="round"/>
                <!-- Antigen binding sites -->
                <circle cx="-30" cy="-5" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="2"/>
                <circle cx="-28" cy="-8" r="3" fill="#ffcdd2"/>
                <circle cx="-32" cy="-2" r="3" fill="#ffcdd2"/>
                <circle cx="30" cy="-5" r="8" fill="#ff6b6b" stroke="#c62828" stroke-width="2"/>
                <circle cx="28" cy="-8" r="3" fill="#ffcdd2"/>
                <circle cx="32" cy="-2" r="3" fill="#ffcdd2"/>
              </g>
              
              <!-- Labels -->
              <text x="250" y="220" text-anchor="middle" font-size="12" fill="#1565c0">Y-shaped antibody</text>
              <text x="250" y="235" text-anchor="middle" font-size="10" fill="#1565c0">Red circles = Antigen binding sites</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Types of Immunity",
        objective: "obj_008",
        text: `
          <h3>Active vs Passive Immunity</h3>
          <p>There are two main types of immunity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Active Immunity</h4>
              <ul>
                <li>• Body produces its own antibodies</li>
                <li>• Long-lasting</li>
                <li>• Memory cells are formed</li>
                <li>• Natural: After infection</li>
                <li>• Artificial: Vaccination</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Passive Immunity</h4>
              <ul>
                <li>• Antibodies are received</li>
                <li>• Short-term</li>
                <li>• No memory cells formed</li>
                <li>• Natural: Mother to baby</li>
                <li>• Artificial: Antibody injections</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Vaccines",
        objective: "obj_009",
        text: `
          <h3>Vaccines</h3>
          <p><strong>Vaccines</strong> are biological preparations that provide active acquired immunity to a particular disease.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Vaccines Work</h4>
              <ul>
                <li>1. Vaccine is administered</li>
                <li>2. Immune system responds</li>
                <li>3. Antibodies are produced</li>
                <li>4. Memory cells are formed</li>
                <li>5. Future infection is prevented</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Vaccines</h4>
              <ul>
                <li>• <strong>Inactivated:</strong> Killed pathogen</li>
                <li>• <strong>Live attenuated:</strong> Weakened pathogen</li>
                <li>• <strong>Subunit:</strong> Part of pathogen</li>
                <li>• <strong>mRNA:</strong> Genetic material</li>
                <li>• <strong>Vector:</strong> Uses another virus</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">How Vaccines Work</text>
              
              <!-- Step 1: Vaccine -->
              <g transform="translate(100, 130)">
                <rect x="-25" y="-30" width="50" height="60" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="0" text-anchor="middle" font-size="11" fill="white">Vaccine</text>
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#1565c0">Step 1</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#1565c0">Administer</text>
              </g>
              
              <!-- Arrow -->
              <text x="150" y="135" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 2: Immune Response -->
              <g transform="translate(230, 130)">
                <circle cx="0" cy="0" r="30" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white">Immune</text>
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#2e7d32">Step 2</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#2e7d32">Response</text>
              </g>
              
              <!-- Arrow -->
              <text x="280" y="135" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 3: Memory -->
              <g transform="translate(360, 130)">
                <circle cx="0" cy="0" r="30" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white">Memory</text>
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#e65100">Step 3</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#e65100">Memory Cells</text>
              </g>
              
              <!-- Arrow -->
              <text x="410" y="135" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 4: Protection -->
              <g transform="translate(490, 130)">
                <circle cx="0" cy="0" r="30" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="11" fill="white">Protection</text>
                <text x="0" y="50" text-anchor="middle" font-size="11" fill="#c62828">Step 4</text>
                <text x="0" y="65" text-anchor="middle" font-size="10" fill="#c62828">Immunity</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Herd Immunity",
        objective: "obj_014",
        text: `
          <h3>Herd Immunity</h3>
          <p><strong>Herd immunity</strong> occurs when a large portion of a population becomes immune to a disease, providing indirect protection to those who are not immune.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How It Works</h4>
              <ul>
                <li>• High vaccination rates</li>
                <li>• Disease transmission is reduced</li>
                <li>• Vulnerable people are protected</li>
                <li>• Examples: Measles, polio</li>
                <li>• Threshold: ~95% for measles</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Why It Matters</h4>
              <ul>
                <li>• Protects those who can't be vaccinated</li>
                <li>• Reduces disease outbreaks</li>
                <li>• Can eliminate diseases</li>
                <li>• Saves lives</li>
                <li>• Requires community participation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Immune Disorders",
        objective: "obj_011",
        text: `
          <h3>Immune System Disorders</h3>
          <p>When the immune system malfunctions, various disorders can occur.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Allergies</h4>
              <ul>
                <li>• Overreaction to harmless substances</li>
                <li>• <strong>Allergens:</strong> Pollen, dust, food</li>
                <li>• <strong>Histamine:</strong> Released by mast cells</li>
                <li>• Symptoms: Sneezing, itching</li>
                <li>• Example: Hay fever</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Autoimmune Diseases</h4>
              <ul>
                <li>• Immune system attacks the body</li>
                <li>• <strong>Type 1 diabetes:</strong> Destroys beta cells</li>
                <li>• <strong>Rheumatoid arthritis:</strong> Joints</li>
                <li>• <strong>MS:</strong> Nervous system</li>
                <li>• <strong>Lupus:</strong> Multiple organs</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Immunodeficiency</h4>
              <ul>
                <li>• Weak immune system</li>
                <li>• <strong>HIV/AIDS:</strong> Destroys T cells</li>
                <li>• <strong>SCID:</strong> Severe combined immunodeficiency</li>
                <li>• <strong>Cancer:</strong> Can weaken immunity</li>
                <li>• <strong>Medications:</strong> Chemotherapy</li>
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
          <h4>🛡️ Immunity</h4>
          <ul>
            <li>• First line: Physical and chemical barriers</li>
            <li>• Second line: Non-specific defenses</li>
            <li>• Third line: Specific immunity</li>
            <li>• Antibodies target specific pathogens</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Vaccines provide active immunity</li>
            <li>• Memory cells provide long-term protection</li>
            <li>• Herd immunity protects communities</li>
            <li>• Immune disorders require medical attention</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>A healthy immune system is essential for protecting against disease. Vaccination and good health practices help keep it strong.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Vaccines cause the disease they prevent",
        correction: "Vaccines contain weakened or inactivated pathogens",
        explanation: "Vaccines are safe and cannot cause the disease they prevent."
      },
      {
        id: "mis_002",
        misconception: "Antibiotics work against viruses",
        correction: "Antibiotics only work against bacteria",
        explanation: "Antibiotics target bacterial cell walls and processes, not viruses."
      },
      {
        id: "mis_003",
        misconception: "All immune responses are the same",
        correction: "Different pathogens trigger different immune responses",
        explanation: "The immune system responds specifically to each pathogen."
      },
      {
        id: "mis_004",
        misconception: "Herd immunity means everyone is immune",
        correction: "Herd immunity reduces transmission, protecting vulnerable people",
        explanation: "Herd immunity protects those who cannot be vaccinated."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding helps treat immune disorders.",
        example: "Immunotherapy, allergy treatment"
      },
      {
        id: "app_002",
        title: "Public Health",
        description: "Understanding helps prevent disease.",
        example: "Vaccination programs, infection control"
      },
      {
        id: "app_003",
        title: "Research",
        description: "Understanding helps develop new treatments.",
        example: "Vaccine development, immune therapies"
      },
      {
        id: "app_004",
        title: "Epidemiology",
        description: "Understanding helps track and control disease.",
        example: "Disease surveillance, outbreak control"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Immunity", definition: "The body's ability to defend against disease." },
    { term: "Pathogen", definition: "A disease-causing organism." },
    { term: "Antigen", definition: "A substance that triggers an immune response." },
    { term: "Antibody", definition: "A protein that binds to antigens." },
    { term: "Vaccine", definition: "A biological preparation that provides immunity." },
    { term: "Phagocytosis", definition: "The engulfment of pathogens by cells." },
    { term: "Inflammation", definition: "The body's response to injury or infection." },
    { term: "White Blood Cell", definition: "A cell of the immune system." },
    { term: "B Lymphocyte", definition: "A white blood cell that produces antibodies." },
    { term: "T Lymphocyte", definition: "A white blood cell that kills infected cells." },
    { term: "Memory Cell", definition: "A cell that remembers pathogens for future response." },
    { term: "Herd Immunity", definition: "Protection of a population through vaccination." },
    { term: "Autoimmune Disease", definition: "A disease where the immune system attacks the body." },
    { term: "Allergy", definition: "An overreaction to a harmless substance." },
    { term: "Immunodeficiency", definition: "A condition where the immune system is weakened." },
    { term: "Active Immunity", definition: "Immunity produced by the body's own immune response." },
    { term: "Passive Immunity", definition: "Immunity received from outside the body." },
    { term: "Macrophage", definition: "A white blood cell that engulfs pathogens." },
    { term: "Neutrophil", definition: "The most common type of white blood cell." },
    { term: "Histamine", definition: "A chemical released during allergic reactions." }
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
      question: "What is immunity?",
      type: "multiple_choice",
      options: [
        "The body's ability to cause disease",
        "The body's ability to defend against disease",
        "The body's ability to digest food",
        "The body's ability to grow"
      ],
      answer: "The body's ability to defend against disease",
      explanation: "Immunity is the body's ability to defend against disease."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the first line of defense?",
      type: "multiple_choice",
      options: [
        "White blood cells",
        "Physical and chemical barriers",
        "Antibodies",
        "Vaccines"
      ],
      answer: "Physical and chemical barriers",
      explanation: "The first line of defense includes physical and chemical barriers like skin and mucus."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a pathogen?",
      type: "multiple_choice",
      options: [
        "A type of white blood cell",
        "A disease-causing organism",
        "A type of antibody",
        "A vaccine"
      ],
      answer: "A disease-causing organism",
      explanation: "A pathogen is a disease-causing organism."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is phagocytosis?",
      type: "multiple_choice",
      options: [
        "The production of antibodies",
        "The engulfment of pathogens",
        "The release of histamine",
        "The activation of memory cells"
      ],
      answer: "The engulfment of pathogens",
      explanation: "Phagocytosis is the engulfment and digestion of pathogens by white blood cells."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the third line of defense?",
      type: "multiple_choice",
      options: [
        "Physical barriers",
        "Non-specific immunity",
        "Specific immunity",
        "Inflammation"
      ],
      answer: "Specific immunity",
      explanation: "The third line of defense is specific immunity involving B and T lymphocytes."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What type of white blood cell produces antibodies?",
      type: "multiple_choice",
      options: ["T lymphocytes", "B lymphocytes", "Neutrophils", "Macrophages"],
      answer: "B lymphocytes",
      explanation: "B lymphocytes produce antibodies."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the function of antibodies?",
      type: "multiple_choice",
      options: [
        "To engulf pathogens",
        "To bind to antigens and neutralize them",
        "To produce histamine",
        "To activate macrophages"
      ],
      answer: "To bind to antigens and neutralize them",
      explanation: "Antibodies bind to antigens and help neutralize or destroy them."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the difference between active and passive immunity?",
      type: "multiple_choice",
      options: [
        "Active immunity is short-term; passive immunity is long-term",
        "Active immunity involves the body producing its own antibodies; passive immunity involves receiving antibodies",
        "Active immunity is for bacteria; passive immunity is for viruses",
        "There is no difference"
      ],
      answer: "Active immunity involves the body producing its own antibodies; passive immunity involves receiving antibodies",
      explanation: "Active immunity is produced by the body's own immune response; passive immunity involves receiving antibodies from another source."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How do vaccines work?",
      type: "multiple_choice",
      options: [
        "They kill all pathogens in the body",
        "They stimulate the immune system to produce memory cells",
        "They cure diseases",
        "They are antibiotics"
      ],
      answer: "They stimulate the immune system to produce memory cells",
      explanation: "Vaccines stimulate the immune system to produce memory cells for future protection."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the difference between innate and adaptive immunity?",
      type: "multiple_choice",
      options: [
        "Innate immunity is specific; adaptive immunity is non-specific",
        "Innate immunity is non-specific; adaptive immunity is specific",
        "Innate immunity is only in animals; adaptive immunity is only in humans",
        "There is no difference"
      ],
      answer: "Innate immunity is non-specific; adaptive immunity is specific",
      explanation: "Innate immunity is non-specific and present at birth; adaptive immunity is specific and develops after exposure."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an autoimmune disease?",
      type: "multiple_choice",
      options: [
        "A disease caused by a pathogen",
        "A disease where the immune system attacks the body",
        "A disease where the immune system is weakened",
        "A disease where the immune system overreacts"
      ],
      answer: "A disease where the immune system attacks the body",
      explanation: "An autoimmune disease occurs when the immune system attacks the body's own tissues."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of memory cells?",
      type: "multiple_choice",
      options: [
        "To produce antibodies immediately",
        "To remember pathogens for future responses",
        "To engulf pathogens",
        "To release histamine"
      ],
      answer: "To remember pathogens for future responses",
      explanation: "Memory cells remember pathogens and provide long-term immunity."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What are the signs of inflammation?",
      type: "multiple_choice",
      options: [
        "Redness, heat, swelling, pain",
        "Fever, cough, fatigue",
        "Nausea, vomiting, diarrhea",
        "Headache, dizziness, confusion"
      ],
      answer: "Redness, heat, swelling, pain",
      explanation: "Inflammation is characterized by redness, heat, swelling, and pain."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is herd immunity?",
      type: "multiple_choice",
      options: [
        "Immunity in a single person",
        "Protection of a population through vaccination",
        "Immunity that lasts forever",
        "Immunity only to viruses"
      ],
      answer: "Protection of a population through vaccination",
      explanation: "Herd immunity protects a population through high vaccination rates."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "What causes allergies?",
      type: "multiple_choice",
      options: [
        "An overreaction of the immune system",
        "A weakened immune system",
        "The presence of viruses",
        "The absence of antibodies"
      ],
      answer: "An overreaction of the immune system",
      explanation: "Allergies are caused by an overreaction of the immune system to harmless substances."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_immunity",
    title: "Immunity Quiz",
    description: "Test your understanding of immunity",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is immunity?",
        type: "short_answer",
        answer_key: "The body's ability to defend against disease",
        explanation: "Immunity is the body's ability to defend against disease."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the first line of defense?",
        type: "short_answer",
        answer_key: "Physical and chemical barriers",
        explanation: "The first line of defense includes skin, mucus, and other barriers."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a pathogen?",
        type: "short_answer",
        answer_key: "A disease-causing organism",
        explanation: "A pathogen is a disease-causing organism."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is phagocytosis?",
        type: "short_answer",
        answer_key: "The engulfment of pathogens by white blood cells",
        explanation: "Phagocytosis is the engulfment and digestion of pathogens."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the third line of defense?",
        type: "short_answer",
        answer_key: "Specific immunity",
        explanation: "The third line of defense is specific immunity."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What type of white blood cell produces antibodies?",
        type: "short_answer",
        answer_key: "B lymphocytes",
        explanation: "B lymphocytes produce antibodies."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the function of antibodies?",
        type: "short_answer",
        answer_key: "To bind to antigens and neutralize them",
        explanation: "Antibodies bind to antigens to neutralize or destroy them."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the difference between active and passive immunity?",
        type: "short_answer",
        answer_key: "Active immunity produces its own antibodies; passive immunity receives antibodies",
        explanation: "Active immunity is produced by the body; passive immunity is received."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "How do vaccines work?",
        type: "short_answer",
        answer_key: "By stimulating the immune system to produce memory cells",
        explanation: "Vaccines stimulate the immune system to produce memory cells."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is an autoimmune disease?",
        type: "short_answer",
        answer_key: "A disease where the immune system attacks the body",
        explanation: "An autoimmune disease occurs when the immune system attacks the body's own tissues."
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
        "Understand the immune system and its functions",
        "Explain the three lines of defense",
        "Describe the role of antibodies",
        "Understand vaccines and herd immunity"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is immunity?" },
        { time: "5-10 min", activity: "Direct Instruction - Pathogens" },
        { time: "10-15 min", activity: "Direct Instruction - First Line of Defense" },
        { time: "15-20 min", activity: "Direct Instruction - Second Line of Defense" },
        { time: "20-25 min", activity: "Direct Instruction - Third Line of Defense" },
        { time: "25-30 min", activity: "Direct Instruction - Antibodies and Vaccines" },
        { time: "30-35 min", activity: "Direct Instruction - Herd Immunity and Disorders" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The body's ability to defend against disease",
        prac_002: "Physical and chemical barriers",
        prac_003: "A disease-causing organism",
        prac_004: "The engulfment of pathogens",
        prac_005: "Specific immunity",
        prac_006: "B lymphocytes",
        prac_007: "To bind to antigens and neutralize them",
        prac_008: "Active immunity involves the body producing its own antibodies; passive immunity involves receiving antibodies",
        prac_009: "They stimulate the immune system to produce memory cells",
        prac_010: "Innate immunity is non-specific; adaptive immunity is specific",
        prac_011: "A disease where the immune system attacks the body",
        prac_012: "To remember pathogens for future responses",
        prac_013: "Redness, heat, swelling, pain",
        prac_014: "Protection of a population through vaccination",
        prac_015: "An overreaction of the immune system"
      },
      assessment: {
        ass_001: "The body's ability to defend against disease",
        ass_002: "Physical and chemical barriers",
        ass_003: "A disease-causing organism",
        ass_004: "The engulfment of pathogens by white blood cells",
        ass_005: "Specific immunity",
        ass_006: "B lymphocytes",
        ass_007: "To bind to antigens and neutralize them",
        ass_008: "Active immunity produces its own antibodies; passive immunity receives antibodies",
        ass_009: "By stimulating the immune system to produce memory cells",
        ass_010: "A disease where the immune system attacks the body"
      }
    },
    extensionActivities: [
      "Research a specific vaccine",
      "Study the history of vaccination",
      "Research autoimmune diseases",
      "Learn about immunotherapy",
      "Study the immune response to COVID-19"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research immunology",
        "Study monoclonal antibodies",
        "Research vaccine development",
        "Study immune system disorders"
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
      title: "Phagocytosis",
      description: "Diagram showing phagocytosis",
      url: "/diagrams/phagocytosis.png",
      alt: "Phagocytosis diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Antibody Structure",
      description: "Diagram of antibody structure",
      url: "/diagrams/antibody.png",
      alt: "Antibody diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "How Vaccines Work",
      description: "Diagram showing how vaccines work",
      url: "/diagrams/vaccine.png",
      alt: "Vaccine diagram"
    }
  ]
};