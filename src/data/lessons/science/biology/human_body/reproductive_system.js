// Location: src/data/lessons/science/biology/human_body/reproductive_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_reproductive_system",
  subject: "Biology",
  topic: "Reproductive System",
  name: "Reproductive System",
  icon: "👶",
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
    "Understanding of the endocrine system",
    "Knowledge of hormones",
    "Basic understanding of genetics"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Circulatory System",
      file: "science/biology/human_body/circulatory_system.js"
    },
    {
      name: "Respiratory System",
      file: "science/biology/human_body/respiratory_system.js"
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
      description: "Define the reproductive system and explain its functions",
      indicator: "Student can explain what the reproductive system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main parts of the male reproductive system",
      indicator: "Student can label the male reproductive organs"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the main parts of the female reproductive system",
      indicator: "Student can label the female reproductive organs"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the process of gamete formation (spermatogenesis and oogenesis)",
      indicator: "Student can describe how sperm and eggs are produced"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the process of fertilization",
      indicator: "Student can describe how sperm fertilizes an egg"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the process of implantation and pregnancy",
      indicator: "Student can describe how a fertilized egg develops"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the menstrual cycle",
      indicator: "Student can describe the phases of the menstrual cycle"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of hormones in reproduction",
      indicator: "Student can describe the hormones involved in reproduction"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the process of childbirth",
      indicator: "Student can describe the stages of labor"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the role of the placenta",
      indicator: "Student can describe the function of the placenta"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain methods of contraception",
      indicator: "Student can describe different birth control methods"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe common reproductive disorders",
      indicator: "Student can describe disorders like STIs and infertility"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the stages of embryonic development",
      indicator: "Student can describe how an embryo develops"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Compare the male and female reproductive systems",
      indicator: "Student can distinguish between male and female reproductive anatomy"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Reproductive System - Creating New Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the reproductive system, from gamete formation to childbirth."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Reproductive System</h2>
      <p>The <strong>reproductive system</strong> is responsible for producing offspring and ensuring the continuation of the species. In humans, it involves the production of gametes (sperm and eggs), fertilization, and the development of a fetus.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">👶 Key Concepts</h3>
          <ul>
            <li>✓ Male Reproductive System</li>
            <li>✓ Female Reproductive System</li>
            <li>✓ Gamete Formation</li>
            <li>✓ Fertilization</li>
            <li>✓ Pregnancy</li>
            <li>✓ Menstrual Cycle</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The male produces ~1,000 sperm per second</li>
            <li>• A woman is born with ~1-2 million eggs</li>
            <li>• Fertilization occurs in the fallopian tube</li>
            <li>• Pregnancy lasts ~40 weeks (9 months)</li>
            <li>• Twins occur in about 1 in 250 pregnancies</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Reproductive System Matters</h4>
        <p>The reproductive system ensures the continuation of the human species. Understanding it helps us make informed decisions about health, family planning, and reproduction.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Male Reproductive System",
        objective: "obj_002",
        text: `
          <h3>Male Reproductive System</h3>
          <p>The <strong>male reproductive system</strong> produces sperm and hormones that support reproduction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Organs</h4>
              <ul>
                <li>• <strong>Testes:</strong> Produce sperm and testosterone</li>
                <li>• <strong>Epididymis:</strong> Stores and matures sperm</li>
                <li>• <strong>Vas deferens:</strong> Transports sperm</li>
                <li>• <strong>Seminal vesicles:</strong> Produce seminal fluid</li>
                <li>• <strong>Prostate gland:</strong> Produces seminal fluid</li>
                <li>• <strong>Penis:</strong> Delivers sperm</li>
                <li>• <strong>Scrotum:</strong> Holds testes (temperature regulation)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones</h4>
              <ul>
                <li>• <strong>Testosterone:</strong> Produced by testes</li>
                <li>• Male secondary characteristics</li>
                <li>• Sperm production</li>
                <li>• Muscle development</li>
                <li>• Deep voice</li>
                <li>• Facial and body hair</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Male Reproductive System</text>
              
              <!-- Bladder -->
              <g transform="translate(250, 80)">
                <ellipse cx="0" cy="0" rx="20" ry="15" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="-25" text-anchor="middle" font-size="10" fill="#c62828">Bladder</text>
              </g>
              
              <!-- Prostate -->
              <g transform="translate(250, 110)">
                <ellipse cx="0" cy="0" rx="15" ry="12" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="-20" text-anchor="middle" font-size="10" fill="#c62828">Prostate</text>
              </g>
              
              <!-- Seminal Vesicle -->
              <g transform="translate(220, 105)">
                <ellipse cx="0" cy="0" rx="10" ry="15" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <text x="-15" y="-25" text-anchor="middle" font-size="9" fill="#c62828">Seminal</text>
                <text x="-15" y="-15" text-anchor="middle" font-size="9" fill="#c62828">Vesicle</text>
              </g>
              
              <!-- Vas Deferens -->
              <g transform="translate(250, 140)">
                <rect x="-20" y="-3" width="40" height="6" rx="2" fill="#ef5350" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#c62828">Vas Deferens</text>
              </g>
              
              <!-- Penis -->
              <g transform="translate(250, 220)">
                <rect x="-25" y="-40" width="50" height="40" rx="5" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="-50" text-anchor="middle" font-size="11" fill="#c62828">Penis</text>
              </g>
              
              <!-- Urethra -->
              <line x1="250" y1="140" x2="250" y2="180" stroke="#1565c0" stroke-width="3" stroke-dasharray="4,4"/>
              
              <!-- Testes -->
              <g transform="translate(230, 280)">
                <ellipse cx="0" cy="0" rx="20" ry="15" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="25" text-anchor="middle" font-size="10" fill="#c62828">Testis</text>
              </g>
              <g transform="translate(270, 280)">
                <ellipse cx="0" cy="0" rx="20" ry="15" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="25" text-anchor="middle" font-size="10" fill="#c62828">Testis</text>
              </g>
              
              <!-- Scrotum -->
              <path d="M210 280 Q230 310 250 310 Q270 310 290 280" fill="none" stroke="#c62828" stroke-width="2"/>
              <text x="250" y="330" text-anchor="middle" font-size="11" fill="#c62828">Scrotum</text>
              
              <!-- Epididymis -->
              <path d="M235 275 Q245 290 255 275" stroke="#ef5350" stroke-width="3" fill="none"/>
              <text x="250" y="300" text-anchor="middle" font-size="9" fill="#c62828">Epididymis</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Female Reproductive System",
        objective: "obj_003",
        text: `
          <h3>Female Reproductive System</h3>
          <p>The <strong>female reproductive system</strong> produces eggs, supports fertilization, and nourishes the developing fetus.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Organs</h4>
              <ul>
                <li>• <strong>Ovaries:</strong> Produce eggs and hormones</li>
                <li>• <strong>Fallopian tubes:</strong> Transport eggs</li>
                <li>• <strong>Uterus:</strong> Nourishes the fetus</li>
                <li>• <strong>Cervix:</strong> Lower part of uterus</li>
                <li>• <strong>Vagina:</strong> Birth canal</li>
                <li>• <strong>Vulva:</strong> External genitalia</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones</h4>
              <ul>
                <li>• <strong>Estrogen:</strong> Produced by ovaries</li>
                <li>• Female secondary characteristics</li>
                <li>• Menstrual cycle</li>
                <li>• <strong>Progesterone:</strong> Produced by ovaries</li>
                <li>• Maintains pregnancy</li>
                <li>• Prepares uterus for implantation</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Female Reproductive System</text>
              
              <!-- Fallopian Tubes -->
              <g transform="translate(250, 100)">
                <path d="M-80 0 Q-40 -30 0 0" stroke="#ef5350" stroke-width="6" fill="none"/>
                <path d="M80 0 Q40 -30 0 0" stroke="#ef5350" stroke-width="6" fill="none"/>
                <text x="-40" y="-40" text-anchor="middle" font-size="10" fill="#c62828">Fallopian</text>
                <text x="-40" y="-30" text-anchor="middle" font-size="10" fill="#c62828">Tubes</text>
              </g>
              
              <!-- Ovaries -->
              <g transform="translate(170, 100)">
                <ellipse cx="0" cy="0" rx="15" ry="10" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Ovary</text>
              </g>
              <g transform="translate(330, 100)">
                <ellipse cx="0" cy="0" rx="15" ry="10" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Ovary</text>
              </g>
              
              <!-- Uterus -->
              <g transform="translate(250, 160)">
                <path d="M-30 -20 L-20 20 L-10 40 L10 40 L20 20 L30 -20 Z" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="-30" text-anchor="middle" font-size="11" fill="#c62828">Uterus</text>
              </g>
              
              <!-- Cervix -->
              <g transform="translate(250, 210)">
                <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="25" text-anchor="middle" font-size="10" fill="#c62828">Cervix</text>
              </g>
              
              <!-- Vagina -->
              <g transform="translate(250, 260)">
                <rect x="-20" y="-15" width="40" height="40" rx="5" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="45" text-anchor="middle" font-size="11" fill="#c62828">Vagina</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Gamete Formation",
        objective: "obj_004",
        text: `
          <h3>Gamete Formation</h3>
          <p><strong>Gametes</strong> are reproductive cells produced through meiosis.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Spermatogenesis (Sperm Formation)</h4>
              <ul>
                <li>• Occurs in the testes</li>
                <li>• Starts at puberty</li>
                <li>• Produces 4 sperm cells</li>
                <li>• Takes ~70 days</li>
                <li>• Sperm have a head, midpiece, and tail</li>
                <li>• ~300 million produced daily</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Oogenesis (Egg Formation)</h4>
              <ul>
                <li>• Occurs in the ovaries</li>
                <li>• Starts before birth</li>
                <li>• Produces 1 egg + polar bodies</li>
                <li>• Takes ~14 days</li>
                <li>• ~1-2 million eggs at birth</li>
                <li>• ~400 eggs released in a lifetime</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Sperm and Egg</text>
              
              <!-- Sperm -->
              <g transform="translate(150, 150)">
                <!-- Head -->
                <ellipse cx="0" cy="0" rx="15" ry="8" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <!-- Nucleus -->
                <ellipse cx="-5" cy="0" rx="8" ry="5" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
                <!-- Acrosome -->
                <ellipse cx="-12" cy="0" rx="5" ry="4" fill="#ff6b6b" stroke="#c62828" stroke-width="1.5"/>
                <!-- Midpiece -->
                <rect x="15" y="-4" width="10" height="8" rx="2" fill="#4a90d9" stroke="#1565c0" stroke-width="1.5"/>
                <!-- Mitochondria -->
                <circle cx="18" cy="-2" r="3" fill="#ffcc80"/>
                <circle cx="22" cy="0" r="3" fill="#ffcc80"/>
                <circle cx="18" cy="2" r="3" fill="#ffcc80"/>
                <!-- Tail -->
                <path d="M25 0 Q40 -15 60 -5 Q75 5 90 -10" stroke="#1565c0" stroke-width="2" fill="none"/>
                <text x="0" y="40" text-anchor="middle" font-size="12" fill="#1565c0">Sperm Cell</text>
                <text x="0" y="55" text-anchor="middle" font-size="10" fill="#1565c0">(Male Gamete)</text>
              </g>
              
              <!-- Egg -->
              <g transform="translate(450, 150)">
                <!-- Cell -->
                <circle cx="0" cy="0" r="35" fill="#ffb3b3" stroke="#c62828" stroke-width="3"/>
                <!-- Nucleus -->
                <circle cx="0" cy="0" r="15" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
                <!-- Zona Pellucida -->
                <circle cx="0" cy="0" r="40" fill="none" stroke="#ef5350" stroke-width="2" stroke-dasharray="4,4"/>
                <!-- Corona Radiata -->
                <circle cx="-30" cy="-20" r="4" fill="#ff8a80"/>
                <circle cx="-25" cy="25" r="4" fill="#ff8a80"/>
                <circle cx="30" cy="-20" r="4" fill="#ff8a80"/>
                <circle cx="25" cy="25" r="4" fill="#ff8a80"/>
                <circle cx="0" cy="-35" r="4" fill="#ff8a80"/>
                <circle cx="0" cy="35" r="4" fill="#ff8a80"/>
                <text x="0" y="60" text-anchor="middle" font-size="12" fill="#c62828">Egg Cell</text>
                <text x="0" y="75" text-anchor="middle" font-size="10" fill="#c62828">(Female Gamete)</text>
              </g>
              
              <!-- Arrow -->
              <text x="300" y="160" text-anchor="middle" font-size="24" fill="#1565c0">+</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Fertilization",
        objective: "obj_005",
        text: `
          <h3>Fertilization</h3>
          <p><strong>Fertilization</strong> is the union of a sperm and an egg to form a zygote.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Process</h4>
              <ul>
                <li>1. Sperm travels through the vagina</li>
                <li>2. Passes through cervix and uterus</li>
                <li>3. Reaches the fallopian tube</li>
                <li>4. Sperm penetrates the egg</li>
                <li>5. Nuclei fuse</li>
                <li>6. Zygote is formed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Requirements</h4>
              <ul>
                <li>• Ovulation must occur</li>
                <li>• Sperm must be present</li>
                <li>• Fertile window</li>
                <li>• Healthy sperm and egg</li>
                <li>• Unblocked fallopian tubes</li>
                <li>• Suitable uterine lining</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Menstrual Cycle",
        objective: "obj_007",
        text: `
          <h3>The Menstrual Cycle</h3>
          <p>The <strong>menstrual cycle</strong> is a monthly series of changes in the female reproductive system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Phases</h4>
              <ul>
                <li><strong>Menstrual Phase (Days 1-5):</strong></li>
                <li>• Shedding of uterine lining</li>
                <li><strong>Follicular Phase (Days 6-14):</strong></li>
                <li>• Egg matures in ovary</li>
                <li><strong>Ovulation (Day 14):</strong></li>
                <li>• Egg is released</li>
                <li><strong>Luteal Phase (Days 15-28):</strong></li>
                <li>• Uterus prepares for implantation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormonal Control</h4>
              <ul>
                <li>• <strong>FSH:</strong> Stimulates follicle growth</li>
                <li>• <strong>Estrogen:</strong> Thickens uterine lining</li>
                <li>• <strong>LH:</strong> Triggers ovulation</li>
                <li>• <strong>Progesterone:</strong> Maintains uterine lining</li>
                <li>• Hormonal feedback controls the cycle</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Menstrual Cycle</text>
              
              <!-- Cycle circle -->
              <g transform="translate(300, 160)">
                <!-- Circle -->
                <circle cx="0" cy="0" r="90" fill="none" stroke="#1565c0" stroke-width="2"/>
                
                <!-- Days labels -->
                <text x="0" y="-105" text-anchor="middle" font-size="11" fill="#1565c0">Day 1</text>
                <text x="0" y="115" text-anchor="middle" font-size="11" fill="#1565c0">Day 14</text>
                <text x="-110" y="5" text-anchor="middle" font-size="11" fill="#1565c0">Day 7</text>
                <text x="110" y="5" text-anchor="middle" font-size="11" fill="#1565c0">Day 21</text>
                
                <!-- Menstrual Phase -->
                <path d="M0 -90 A90 90 0 0 0 -90 0" fill="#ef5350" opacity="0.3" stroke="#c62828" stroke-width="1"/>
                <text x="-50" y="-55" text-anchor="middle" font-size="10" fill="#c62828">Menstrual</text>
                
                <!-- Follicular Phase -->
                <path d="M-90 0 A90 90 0 0 0 0 90" fill="#4caf50" opacity="0.3" stroke="#2e7d32" stroke-width="1"/>
                <text x="-65" y="55" text-anchor="middle" font-size="10" fill="#2e7d32">Follicular</text>
                
                <!-- Ovulation -->
                <circle cx="90" cy="0" r="12" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
                <text x="100" y="-10" text-anchor="middle" font-size="10" fill="#e65100">Ovulation</text>
                
                <!-- Luteal Phase -->
                <path d="M0 90 A90 90 0 0 0 90 0" fill="#ffb74d" opacity="0.3" stroke="#ef6c00" stroke-width="1"/>
                <text x="55" y="-55" text-anchor="middle" font-size="10" fill="#ef6c00">Luteal</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Pregnancy",
        objective: "obj_006",
        text: `
          <h3>Pregnancy</h3>
          <p><strong>Pregnancy</strong> begins with fertilization and continues until birth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages</h4>
              <ul>
                <li><strong>First Trimester (0-12 weeks):</strong></li>
                <li>• Embryo develops</li>
                <li>• Heart begins to beat</li>
                <li>• Major organs form</li>
                <li><strong>Second Trimester (13-27 weeks):</strong></li>
                <li>• Fetus grows</li>
                <li>• Movement felt</li>
                <li><strong>Third Trimester (28-40 weeks):</strong></li>
                <li>• Rapid growth</li>
                <li>• Organ maturation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Development</h4>
              <ul>
                <li>• <strong>Zygote:</strong> Fertilized egg</li>
                <li>• <strong>Morula:</strong> 16-cell stage</li>
                <li>• <strong>Blastocyst:</strong> Implants in uterus</li>
                <li>• <strong>Embryo:</strong> 3-8 weeks</li>
                <li>• <strong>Fetus:</strong> 9 weeks to birth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Placenta",
        objective: "obj_010",
        text: `
          <h3>The Placenta</h3>
          <p>The <strong>placenta</strong> is a temporary organ that connects the developing fetus to the uterine wall.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Nutrient exchange:</strong> Mother to fetus</li>
                <li>• <strong>Waste removal:</strong> Fetus to mother</li>
                <li>• <strong>Gas exchange:</strong> Oxygen and CO₂</li>
                <li>• <strong>Hormone production:</strong></li>
                <li>• hCG, estrogen, progesterone</li>
                <li>• <strong>Immunity:</strong> Antibodies pass through</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Attached to uterine wall</li>
                <li>• Connected to fetus by umbilical cord</li>
                <li>• Contains maternal and fetal blood</li>
                <li>• Maternal and fetal blood do not mix</li>
                <li>• Is expelled after birth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Hormones in Reproduction",
        objective: "obj_008",
        text: `
          <h3>Hormones in Reproduction</h3>
          <p>Several hormones control the reproductive system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Male Hormones</h4>
              <ul>
                <li>• <strong>GnRH:</strong> Stimulates pituitary</li>
                <li>• <strong>FSH:</strong> Stimulates sperm production</li>
                <li>• <strong>LH:</strong> Stimulates testosterone production</li>
                <li>• <strong>Testosterone:</strong> Male characteristics</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Female Hormones</h4>
              <ul>
                <li>• <strong>GnRH:</strong> Stimulates pituitary</li>
                <li>• <strong>FSH:</strong> Stimulates follicle growth</li>
                <li>• <strong>LH:</strong> Triggers ovulation</li>
                <li>• <strong>Estrogen:</strong> Uterine lining growth</li>
                <li>• <strong>Progesterone:</strong> Maintains uterine lining</li>
                <li>• <strong>hCG:</strong> Maintains early pregnancy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Contraception",
        objective: "obj_011",
        text: `
          <h3>Methods of Contraception</h3>
          <p><strong>Contraception</strong> is the prevention of pregnancy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Barrier Methods</h4>
              <ul>
                <li>• <strong>Condoms:</strong> Male and female</li>
                <li>• <strong>Diaphragm:</strong> Blocks sperm</li>
                <li>• <strong>Cervical cap:</strong> Covers cervix</li>
                <li>• <strong>Spermicide:</strong> Kills sperm</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormonal Methods</h4>
              <ul>
                <li>• <strong>Birth control pills:</strong> Hormones</li>
                <li>• <strong>Patch:</strong> Hormones through skin</li>
                <li>• <strong>Ring:</strong> Hormones in vagina</li>
                <li>• <strong>Implant:</strong> Long-term hormones</li>
                <li>• <strong>IUD:</strong> Intrauterine device</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Natural Methods</h4>
              <ul>
                <li>• <strong>Rhythm method:</strong> Tracking cycles</li>
                <li>• <strong>Withdrawal:</strong> Pulling out</li>
                <li>• <strong>Lactational amenorrhea:</strong> Breastfeeding</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Permanent Methods</h4>
              <ul>
                <li>• <strong>Vasectomy:</strong> Male sterilization</li>
                <li>• <strong>Tubal ligation:</strong> Female sterilization</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Reproductive Health",
        objective: "obj_012",
        text: `
          <h3>Reproductive Health</h3>
          <p>Maintaining reproductive health is important for overall well-being.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Issues</h4>
              <ul>
                <li><strong>STIs:</strong> Sexually transmitted infections</li>
                <li>• HIV, HPV, chlamydia</li>
                <li><strong>Infertility:</strong> Difficulty conceiving</li>
                <li><strong>PCOS:</strong> Polycystic ovary syndrome</li>
                <li><strong>Endometriosis:</strong> Uterine tissue outside</li>
                <li><strong>Prostate issues:</strong> Men over 50</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Prevention</h4>
              <ul>
                <li>• <strong>Safe sex:</strong> Condom use</li>
                <li>• <strong>Regular check-ups:</strong> Screenings</li>
                <li>• <strong>Vaccinations:</strong> HPV vaccine</li>
                <li>• <strong>Healthy lifestyle:</strong> Diet, exercise</li>
                <li>• <strong>Education:</strong> Understanding reproductive health</li>
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
          <h4>👶 Reproductive System</h4>
          <ul>
            <li>• Male: Testes produce sperm</li>
            <li>• Female: Ovaries produce eggs</li>
            <li>• Fertilization creates a zygote</li>
            <li>• Pregnancy lasts ~40 weeks</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Processes</h4>
          <ul>
            <li>• Menstrual cycle: Monthly changes</li>
            <li>• Hormones control reproduction</li>
            <li>• Contraception prevents pregnancy</li>
            <li>• Reproductive health is important</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The reproductive system ensures the continuation of the human species. Understanding it is essential for health and well-being.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Fertilization occurs in the uterus",
        correction: "Fertilization occurs in the fallopian tube",
        explanation: "Sperm meets the egg in the fallopian tube, not the uterus."
      },
      {
        id: "mis_002",
        misconception: "A woman releases eggs every day",
        correction: "A woman releases one egg per menstrual cycle",
        explanation: "Ovulation occurs once per cycle, releasing one egg."
      },
      {
        id: "mis_003",
        misconception: "All women have 28-day cycles",
        correction: "Menstrual cycles vary between 21-35 days",
        explanation: "Cycle length varies among women and even in the same woman."
      },
      {
        id: "mis_004",
        misconception: "The man determines the baby's gender",
        correction: "The sperm determines the baby's gender",
        explanation: "Sperm carries X or Y chromosome; egg carries X."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding reproduction helps treat infertility.",
        example: "IVF, fertility treatments"
      },
      {
        id: "app_002",
        title: "Family Planning",
        description: "Understanding reproduction helps plan families.",
        example: "Contraception, pregnancy planning"
      },
      {
        id: "app_003",
        title: "Public Health",
        description: "Understanding reproduction helps prevent STIs.",
        example: "Education, prevention programs"
      },
      {
        id: "app_004",
        title: "Prenatal Care",
        description: "Understanding pregnancy helps ensure healthy babies.",
        example: "Prenatal vitamins, monitoring"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Gamete", definition: "A reproductive cell (sperm or egg)." },
    { term: "Fertilization", definition: "Union of sperm and egg." },
    { term: "Zygote", definition: "A fertilized egg." },
    { term: "Testes", definition: "Male reproductive organs that produce sperm." },
    { term: "Ovaries", definition: "Female reproductive organs that produce eggs." },
    { term: "Uterus", definition: "Organ where the fetus develops." },
    { term: "Cervix", definition: "Lower part of the uterus." },
    { term: "Vagina", definition: "Birth canal." },
    { term: "Menstrual Cycle", definition: "Monthly changes in the female reproductive system." },
    { term: "Ovulation", definition: "Release of an egg from the ovary." },
    { term: "Placenta", definition: "Organ that nourishes the fetus." },
    { term: "Embryo", definition: "Developing organism from 3-8 weeks." },
    { term: "Fetus", definition: "Developing organism from 9 weeks to birth." },
    { term: "Hormones", definition: "Chemical messengers that control reproduction." },
    { term: "Estrogen", definition: "Female sex hormone." },
    { term: "Progesterone", definition: "Hormone that maintains pregnancy." },
    { term: "Testosterone", definition: "Male sex hormone." },
    { term: "Contraception", definition: "Prevention of pregnancy." },
    { term: "STI", definition: "Sexually transmitted infection." },
    { term: "Infertility", definition: "Difficulty conceiving." }
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
      question: "What is the function of the reproductive system?",
      type: "multiple_choice",
      options: [
        "To digest food",
        "To produce offspring",
        "To pump blood",
        "To filter waste"
      ],
      answer: "To produce offspring",
      explanation: "The reproductive system is responsible for producing offspring."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What organ produces sperm in males?",
      type: "multiple_choice",
      options: ["Prostate", "Testes", "Penis", "Epididymis"],
      answer: "Testes",
      explanation: "The testes produce sperm and testosterone."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What organ produces eggs in females?",
      type: "multiple_choice",
      options: ["Uterus", "Ovaries", "Fallopian tubes", "Vagina"],
      answer: "Ovaries",
      explanation: "The ovaries produce eggs and hormones."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is spermatogenesis?",
      type: "multiple_choice",
      options: [
        "The production of eggs",
        "The production of sperm",
        "The release of an egg",
        "The growth of the uterus"
      ],
      answer: "The production of sperm",
      explanation: "Spermatogenesis is the production of sperm in the testes."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Where does fertilization occur?",
      type: "multiple_choice",
      options: ["Uterus", "Fallopian tube", "Vagina", "Cervix"],
      answer: "Fallopian tube",
      explanation: "Fertilization occurs in the fallopian tube."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is implantation?",
      type: "multiple_choice",
      options: [
        "The release of an egg",
        "The attachment of the embryo to the uterine wall",
        "The formation of sperm",
        "The birth of a baby"
      ],
      answer: "The attachment of the embryo to the uterine wall",
      explanation: "Implantation is when the embryo attaches to the uterine wall."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which phase of the menstrual cycle involves ovulation?",
      type: "multiple_choice",
      options: ["Menstrual", "Follicular", "Ovulation", "Luteal"],
      answer: "Ovulation",
      explanation: "Ovulation occurs around day 14 of the menstrual cycle."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What hormone triggers ovulation?",
      type: "multiple_choice",
      options: ["FSH", "LH", "Estrogen", "Progesterone"],
      answer: "LH",
      explanation: "LH (luteinizing hormone) triggers ovulation."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the first stage of labor?",
      type: "multiple_choice",
      options: ["Delivery", "Contractions", "Crowning", "Placental"],
      answer: "Contractions",
      explanation: "Labor begins with contractions that dilate the cervix."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the function of the placenta?",
      type: "multiple_choice",
      options: [
        "To produce hormones",
        "To nourish the fetus",
        "To remove waste",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "The placenta nourishes the fetus, removes waste, and produces hormones."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a hormonal contraceptive?",
      type: "multiple_choice",
      options: [
        "Condom",
        "Birth control pill",
        "Diaphragm",
        "Vasectomy"
      ],
      answer: "Birth control pill",
      explanation: "Birth control pills are hormonal contraceptives."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is an STI?",
      type: "multiple_choice",
      options: [
        "A type of cancer",
        "A sexually transmitted infection",
        "A heart condition",
        "A lung disease"
      ],
      answer: "A sexually transmitted infection",
      explanation: "STIs are infections transmitted through sexual contact."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the correct order of embryonic development?",
      type: "multiple_choice",
      options: [
        "Zygote → Embryo → Fetus",
        "Embryo → Zygote → Fetus",
        "Fetus → Zygote → Embryo",
        "Zygote → Fetus → Embryo"
      ],
      answer: "Zygote → Embryo → Fetus",
      explanation: "Development proceeds from zygote to embryo to fetus."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a key difference between male and female reproductive systems?",
      type: "multiple_choice",
      options: [
        "Males have ovaries; females have testes",
        "Males produce sperm; females produce eggs",
        "Males have a uterus; females have a prostate",
        "There is no difference"
      ],
      answer: "Males produce sperm; females produce eggs",
      explanation: "Males produce sperm while females produce eggs."
    },
    {
      id: "prac_015",
      objective: "obj_004",
      difficulty: "hard",
      question: "What is oogenesis?",
      type: "multiple_choice",
      options: [
        "The production of sperm",
        "The production of eggs",
        "The release of an egg",
        "The fertilization of an egg"
      ],
      answer: "The production of eggs",
      explanation: "Oogenesis is the production of eggs in the ovaries."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_reproductive_system",
    title: "Reproductive System Quiz",
    description: "Test your understanding of the reproductive system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the function of the reproductive system?",
        type: "short_answer",
        answer_key: "To produce offspring",
        explanation: "The reproductive system produces offspring."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What organ produces sperm in males?",
        type: "short_answer",
        answer_key: "Testes",
        explanation: "The testes produce sperm."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What organ produces eggs in females?",
        type: "short_answer",
        answer_key: "Ovaries",
        explanation: "The ovaries produce eggs."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is spermatogenesis?",
        type: "short_answer",
        answer_key: "The production of sperm",
        explanation: "Spermatogenesis is sperm production."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Where does fertilization occur?",
        type: "short_answer",
        answer_key: "Fallopian tube",
        explanation: "Fertilization occurs in the fallopian tube."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is implantation?",
        type: "short_answer",
        answer_key: "Attachment of the embryo to the uterine wall",
        explanation: "Implantation is the attachment of the embryo to the uterine wall."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Which phase of the menstrual cycle involves ovulation?",
        type: "short_answer",
        answer_key: "Ovulation phase",
        explanation: "Ovulation occurs during the ovulation phase."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What hormone triggers ovulation?",
        type: "short_answer",
        answer_key: "LH",
        explanation: "LH (luteinizing hormone) triggers ovulation."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the function of the placenta?",
        type: "short_answer",
        answer_key: "To nourish the fetus and remove waste",
        explanation: "The placenta nourishes the fetus and removes waste."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is a hormonal contraceptive?",
        type: "short_answer",
        answer_key: "Birth control pill (or any hormonal method)",
        explanation: "Hormonal contraceptives use hormones to prevent pregnancy."
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
        "Understand the structure of the reproductive system",
        "Explain gamete formation and fertilization",
        "Describe the menstrual cycle",
        "Understand pregnancy and contraception"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the reproductive system?" },
        { time: "5-10 min", activity: "Direct Instruction - Male Reproductive System" },
        { time: "10-15 min", activity: "Direct Instruction - Female Reproductive System" },
        { time: "15-20 min", activity: "Direct Instruction - Gamete Formation" },
        { time: "20-25 min", activity: "Direct Instruction - Fertilization" },
        { time: "25-30 min", activity: "Direct Instruction - Menstrual Cycle" },
        { time: "30-35 min", activity: "Direct Instruction - Pregnancy and Contraception" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To produce offspring",
        prac_002: "Testes",
        prac_003: "Ovaries",
        prac_004: "The production of sperm",
        prac_005: "Fallopian tube",
        prac_006: "The attachment of the embryo to the uterine wall",
        prac_007: "Ovulation",
        prac_008: "LH",
        prac_009: "Contractions",
        prac_010: "All of the above",
        prac_011: "Birth control pill",
        prac_012: "A sexually transmitted infection",
        prac_013: "Zygote → Embryo → Fetus",
        prac_014: "Males produce sperm; females produce eggs",
        prac_015: "The production of eggs"
      },
      assessment: {
        ass_001: "To produce offspring",
        ass_002: "Testes",
        ass_003: "Ovaries",
        ass_004: "The production of sperm",
        ass_005: "Fallopian tube",
        ass_006: "Attachment of the embryo to the uterine wall",
        ass_007: "Ovulation phase",
        ass_008: "LH",
        ass_009: "To nourish the fetus and remove waste",
        ass_010: "Birth control pill (or any hormonal method)"
      }
    },
    extensionActivities: [
      "Research infertility treatments",
      "Study STI prevention",
      "Research the stages of pregnancy",
      "Investigate contraceptive methods",
      "Study puberty changes"
    ],
    differentiation: {
      struggling: [
        "Focus on basic structures",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research IVF technology",
        "Study genetic conditions",
        "Research reproductive hormones",
        "Study embryonic development"
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
      title: "Male Reproductive System",
      description: "Diagram of the male reproductive system",
      url: "/diagrams/male-reproductive.png",
      alt: "Male reproductive system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Female Reproductive System",
      description: "Diagram of the female reproductive system",
      url: "/diagrams/female-reproductive.png",
      alt: "Female reproductive system diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Menstrual Cycle",
      description: "Diagram of the menstrual cycle",
      url: "/diagrams/menstrual-cycle.png",
      alt: "Menstrual cycle diagram"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "Sperm and Egg",
      description: "Diagram of sperm and egg cells",
      url: "/diagrams/sperm-egg.png",
      alt: "Sperm and egg diagram"
    }
  ]
};