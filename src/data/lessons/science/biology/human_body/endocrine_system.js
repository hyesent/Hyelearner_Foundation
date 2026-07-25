// Location: src/data/lessons/science/biology/human_body/endocrine_system.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_endocrine_system",
  subject: "Biology",
  topic: "Endocrine System",
  name: "Endocrine System",
  icon: "⚖️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of the nervous system",
    "Knowledge of cell biology",
    "Basic understanding of homeostasis"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Reproductive System",
      file: "science/biology/human_body/reproductive_system.js"
    },
    {
      name: "Circulatory System",
      file: "science/biology/human_body/circulatory_system.js"
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
      description: "Define the endocrine system and explain its functions",
      indicator: "Student can explain what the endocrine system does"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major glands of the endocrine system",
      indicator: "Student can name the main endocrine glands"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define hormones and explain how they work",
      indicator: "Student can describe what hormones are"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the function of the pituitary gland",
      indicator: "Student can describe the role of the 'master gland'"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the function of the thyroid gland",
      indicator: "Student can describe the role of thyroid hormones"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the function of the adrenal glands",
      indicator: "Student can describe the role of adrenaline"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the function of the pancreas",
      indicator: "Student can describe the role of insulin and glucagon"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the function of the gonads (ovaries and testes)",
      indicator: "Student can describe the role of sex hormones"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the role of the hypothalamus in the endocrine system",
      indicator: "Student can explain how the hypothalamus controls the pituitary"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the mechanism of hormone action",
      indicator: "Student can describe how hormones affect target cells"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain feedback mechanisms in the endocrine system",
      indicator: "Student can describe negative feedback loops"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain common endocrine disorders and their treatments",
      indicator: "Student can describe disorders like diabetes and hyperthyroidism"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "The Endocrine System - Chemical Messengers",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the endocrine system, hormones, and how they regulate body functions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to the Endocrine System</h2>
      <p>The <strong>endocrine system</strong> is a network of glands that produce and secrete hormones. These chemical messengers regulate many body functions, including growth, metabolism, reproduction, and mood.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Key Concepts</h3>
          <ul>
            <li>✓ Hormones</li>
            <li>✓ Glands</li>
            <li>✓ Pituitary Gland</li>
            <li>✓ Thyroid Gland</li>
            <li>✓ Adrenal Glands</li>
            <li>✓ Pancreas</li>
            <li>✓ Feedback Mechanisms</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The endocrine system has 8 major glands</li>
            <li>• Hormones travel through the bloodstream</li>
            <li>• The pituitary is called the "master gland"</li>
            <li>• Hormones can affect every cell in the body</li>
            <li>• The endocrine system works with the nervous system</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why the Endocrine System Matters</h4>
        <p>The endocrine system regulates essential body functions. Understanding it helps us understand growth, metabolism, stress responses, and reproductive health.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Endocrine System",
        objective: "obj_001",
        text: `
          <h3>What is the Endocrine System?</h3>
          <p>The <strong>endocrine system</strong> is a collection of glands that produce hormones. These hormones are released into the bloodstream and travel to target cells throughout the body.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Regulates growth and development</li>
                <li>• Controls metabolism</li>
                <li>• Maintains homeostasis</li>
                <li>• Regulates reproduction</li>
                <li>• Responds to stress</li>
                <li>• Controls mood and emotions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Major Glands</h4>
              <ul>
                <li>• Pituitary</li>
                <li>• Thyroid</li>
                <li>• Parathyroid</li>
                <li>• Adrenal</li>
                <li>• Pancreas</li>
                <li>• Gonads (Ovaries/Testes)</li>
                <li>• Pineal</li>
                <li>• Thymus</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="400" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Major Endocrine Glands</text>
              
              <!-- Pineal Gland -->
              <g transform="translate(250, 70)">
                <ellipse cx="0" cy="0" rx="15" ry="10" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Pineal</text>
              </g>
              
              <!-- Hypothalamus -->
              <g transform="translate(230, 95)">
                <rect x="-15" y="-8" width="30" height="16" rx="3" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Hypothalamus</text>
              </g>
              
              <!-- Pituitary -->
              <g transform="translate(250, 125)">
                <circle cx="0" cy="0" r="12" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="22" text-anchor="middle" font-size="10" fill="#c62828">Pituitary</text>
              </g>
              
              <!-- Thyroid -->
              <g transform="translate(250, 175)">
                <ellipse cx="-15" cy="0" rx="15" ry="10" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <ellipse cx="15" cy="0" rx="15" ry="10" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Thyroid</text>
              </g>
              
              <!-- Parathyroid -->
              <g transform="translate(250, 195)">
                <rect x="-18" y="-6" width="8" height="12" rx="2" fill="#ffcc80" stroke="#c62828" stroke-width="1.5"/>
                <rect x="10" y="-6" width="8" height="12" rx="2" fill="#ffcc80" stroke="#c62828" stroke-width="1.5"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Parathyroid</text>
              </g>
              
              <!-- Thymus -->
              <g transform="translate(250, 245)">
                <path d="M-15 -15 L15 -15 L10 5 L-10 5 Z" fill="#ffab91" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Thymus</text>
              </g>
              
              <!-- Adrenal Glands -->
              <g transform="translate(200, 290)">
                <path d="M-10 -15 L0 -5 L10 -15 L5 5 L-5 5 Z" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Adrenal</text>
              </g>
              <g transform="translate(300, 290)">
                <path d="M-10 -15 L0 -5 L10 -15 L5 5 L-5 5 Z" fill="#ef5350" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="20" text-anchor="middle" font-size="10" fill="#c62828">Adrenal</text>
              </g>
              
              <!-- Pancreas -->
              <g transform="translate(250, 330)">
                <ellipse cx="0" cy="0" rx="25" ry="12" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="22" text-anchor="middle" font-size="10" fill="#c62828">Pancreas</text>
              </g>
              
              <!-- Ovaries/Testes -->
              <g transform="translate(200, 375)">
                <ellipse cx="0" cy="0" rx="12" ry="8" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="18" text-anchor="middle" font-size="10" fill="#c62828">Gonads</text>
              </g>
              <g transform="translate(300, 375)">
                <ellipse cx="0" cy="0" rx="12" ry="8" fill="#ff8a80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="18" text-anchor="middle" font-size="10" fill="#c62828">Gonads</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Hormones",
        objective: "obj_003",
        text: `
          <h3>Hormones - Chemical Messengers</h3>
          <p><strong>Hormones</strong> are chemical messengers produced by glands and transported through the bloodstream to target cells.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics</h4>
              <ul>
                <li>• Produced by endocrine glands</li>
                <li>• Travel through blood</li>
                <li>• Affect specific target cells</li>
                <li>• Work in small amounts</li>
                <li>• Bind to receptors on cells</li>
                <li>• Can be proteins or steroids</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Hormones</h4>
              <ul>
                <li><strong>Peptide hormones:</strong></li>
                <li>• Made of amino acids</li>
                <li>• Example: Insulin</li>
                <li><strong>Steroid hormones:</strong></li>
                <li>• Made from cholesterol</li>
                <li>• Example: Testosterone</li>
                <li><strong>Amine hormones:</strong></li>
                <li>• Modified amino acids</li>
                <li>• Example: Adrenaline</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 How Hormones Work:</strong>
            <ul>
              <li>1. Hormone is released into blood</li>
              <li>2. Travels to target cells</li>
              <li>3. Binds to specific receptors</li>
              <li>4. Triggers a response</li>
              <li>5. Response is controlled by feedback</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Pituitary Gland",
        objective: "obj_004",
        text: `
          <h3>The Pituitary Gland - Master Gland</h3>
          <p>The <strong>pituitary gland</strong> is called the "master gland" because it controls many other endocrine glands.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Located at the base of the brain</li>
                <li>• About the size of a pea</li>
                <li>• Connected to the hypothalamus</li>
                <li>• Has two lobes:</li>
                <li>• Anterior pituitary</li>
                <li>• Posterior pituitary</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones Produced</h4>
              <ul>
                <li>• <strong>Growth Hormone (GH):</strong> Growth</li>
                <li>• <strong>Thyroid-Stimulating Hormone (TSH):</strong> Thyroid</li>
                <li>• <strong>Adrenocorticotropic Hormone (ACTH):</strong> Adrenal glands</li>
                <li>• <strong>Luteinizing Hormone (LH):</strong> Gonads</li>
                <li>• <strong>Follicle-Stimulating Hormone (FSH):</strong> Gonads</li>
                <li>• <strong>Prolactin:</strong> Milk production</li>
                <li>• <strong>ADH:</strong> Water balance</li>
                <li>• <strong>Oxytocin:</strong> Childbirth and bonding</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Thyroid Gland",
        objective: "obj_005",
        text: `
          <h3>The Thyroid Gland</h3>
          <p>The <strong>thyroid gland</strong> is located in the neck and produces hormones that regulate metabolism.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Located in the neck</li>
                <li>• Butterfly-shaped</li>
                <li>• Two lobes connected by isthmus</li>
                <li>• Requires iodine</li>
                <li>• Contains follicles</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones</h4>
              <ul>
                <li><strong>Thyroxine (T4):</strong></li>
                <li>• Regulates metabolism</li>
                <li>• Affects all body cells</li>
                <li>• Essential for growth</li>
                <li><strong>Triiodothyronine (T3):</strong></li>
                <li>• More active form</li>
                <li>• Regulates metabolism</li>
                <li><strong>Calcitonin:</strong></li>
                <li>• Regulates calcium levels</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Thyroid Disorders:</strong>
            <ul>
              <li>• <strong>Hypothyroidism:</strong> Underactive thyroid</li>
              <li>• <strong>Hyperthyroidism:</strong> Overactive thyroid</li>
              <li>• <strong>Goiter:</strong> Enlarged thyroid</li>
              <li>• <strong>Hashimoto's:</strong> Autoimmune disease</li>
              <li>• <strong>Graves' disease:</strong> Autoimmune hyperthyroidism</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Adrenal Glands",
        objective: "obj_006",
        text: `
          <h3>The Adrenal Glands</h3>
          <p>The <strong>adrenal glands</strong> are located on top of the kidneys and produce hormones that help the body respond to stress.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Located on top of kidneys</li>
                <li>• Two parts:</li>
                <li>• <strong>Adrenal cortex:</strong> Outer layer</li>
                <li>• <strong>Adrenal medulla:</strong> Inner layer</li>
                <li>• Each part produces different hormones</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones</h4>
              <ul>
                <li><strong>Adrenal Cortex:</strong></li>
                <li>• Cortisol: Stress response, metabolism</li>
                <li>• Aldosterone: Salt and water balance</li>
                <li><strong>Adrenal Medulla:</strong></li>
                <li>• Adrenaline (Epinephrine): Fight or flight</li>
                <li>• Noradrenaline: Fight or flight</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Fight or Flight Response:</strong>
            <ul>
              <li>• Stress triggers adrenaline release</li>
              <li>• Increased heart rate</li>
              <li>• Dilated pupils</li>
              <li>• Increased breathing</li>
              <li>• Blood diverted to muscles</li>
              <li>• Prepared for action</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "The Pancreas",
        objective: "obj_007",
        text: `
          <h3>The Pancreas</h3>
          <p>The <strong>pancreas</strong> produces hormones that regulate blood sugar levels.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure</h4>
              <ul>
                <li>• Located behind the stomach</li>
                <li>• Has endocrine and exocrine functions</li>
                <li>• Contains islets of Langerhans</li>
                <li>• Alpha and beta cells</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hormones</h4>
              <ul>
                <li><strong>Insulin:</strong></li>
                <li>• Produced by beta cells</li>
                <li>• Lowers blood sugar</li>
                <li>• Allows cells to absorb glucose</li>
                <li><strong>Glucagon:</strong></li>
                <li>• Produced by alpha cells</li>
                <li>• Raises blood sugar</li>
                <li>• Stimulates glycogen breakdown</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Blood Sugar Regulation</text>
              
              <!-- Blood Sugar Goes Up -->
              <g transform="translate(150, 160)">
                <!-- Arrow up -->
                <line x1="0" y1="30" x2="0" y2="-30" stroke="#4caf50" stroke-width="3"/>
                <polygon points="-8,-30 0,-40 8,-30" fill="#4caf50"/>
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#4caf50">Blood Sugar ↑</text>
                <text x="0" y="50" text-anchor="middle" font-size="10" fill="#2e7d32">Eat food</text>
              </g>
              
              <!-- Pancreas -->
              <g transform="translate(250, 160)">
                <ellipse cx="0" cy="0" rx="30" ry="15" fill="#ffcc80" stroke="#c62828" stroke-width="2"/>
                <text x="0" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#c62828">Pancreas</text>
                <text x="0" y="45" text-anchor="middle" font-size="10" fill="#c62828">releases Insulin</text>
              </g>
              
              <!-- Blood Sugar Goes Down -->
              <g transform="translate(350, 160)">
                <!-- Arrow down -->
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#ef5350" stroke-width="3"/>
                <polygon points="-8,30 0,40 8,30" fill="#ef5350"/>
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#ef5350">Blood Sugar ↓</text>
                <text x="0" y="60" text-anchor="middle" font-size="10" fill="#c62828">Cells absorb glucose</text>
              </g>
              
              <!-- Arrow connections -->
              <path d="M170 160 Q210 160 220 160" stroke="#1565c0" stroke-width="2" fill="none"/>
              <path d="M280 160 Q290 160 330 160" stroke="#1565c0" stroke-width="2" fill="none"/>
              
              <!-- Label -->
              <text x="250" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565c0">How Insulin Regulates Blood Sugar</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The Gonads",
        objective: "obj_008",
        text: `
          <h3>The Gonads - Ovaries and Testes</h3>
          <p>The <strong>gonads</strong> produce sex hormones that control reproduction and secondary sexual characteristics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ovaries (Female)</h4>
              <ul>
                <li>• Located in the pelvis</li>
                <li>• Produce eggs</li>
                <li><strong>Estrogen:</strong></li>
                <li>• Female characteristics</li>
                <li>• Menstrual cycle</li>
                <li>• Bone health</li>
                <li><strong>Progesterone:</strong></li>
                <li>• Menstrual cycle</li>
                <li>• Pregnancy maintenance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Testes (Male)</h4>
              <ul>
                <li>• Located in the scrotum</li>
                <li>• Produce sperm</li>
                <li><strong>Testosterone:</strong></li>
                <li>• Male characteristics</li>
                <li>• Sperm production</li>
                <li>• Muscle development</li>
                <li>• Deep voice</li>
                <li>• Facial hair</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Feedback Mechanisms",
        objective: "obj_011",
        text: `
          <h3>Feedback Mechanisms</h3>
          <p>The endocrine system uses <strong>feedback mechanisms</strong> to maintain homeostasis.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Negative Feedback</h4>
              <ul>
                <li>• Most common type</li>
                <li>• Response reverses the change</li>
                <li>• Maintains homeostasis</li>
                <li>• Example: Blood sugar regulation</li>
                <li>• Example: Body temperature</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Positive Feedback</h4>
              <ul>
                <li>• Response amplifies the change</li>
                <li>• Less common</li>
                <li>• Leads to rapid change</li>
                <li>• Example: Childbirth</li>
                <li>• Example: Blood clotting</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Endocrine Disorders",
        objective: "obj_012",
        text: `
          <h3>Common Endocrine Disorders</h3>
          <p>Various disorders can affect the endocrine system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Diabetes</h4>
              <ul>
                <li><strong>Type 1:</strong></li>
                <li>• Autoimmune destruction of beta cells</li>
                <li>• No insulin produced</li>
                <li>• Requires insulin injections</li>
                <li><strong>Type 2:</strong></li>
                <li>• Insulin resistance</li>
                <li>• Often related to lifestyle</li>
                <li>• Can be managed with diet and medication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Other Disorders</h4>
              <ul>
                <li><strong>Hypothyroidism:</strong> Underactive thyroid</li>
                <li>• Weight gain, fatigue</li>
                <li><strong>Hyperthyroidism:</strong> Overactive thyroid</li>
                <li>• Weight loss, anxiety</li>
                <li><strong>Cushing's:</strong> Excess cortisol</li>
                <li>• Weight gain, high blood pressure</li>
                <li><strong>Addison's:</strong> Insufficient cortisol</li>
                <li>• Fatigue, low blood pressure</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "The Hypothalamus",
        objective: "obj_009",
        text: `
          <h3>The Hypothalamus</h3>
          <p>The <strong>hypothalamus</strong> links the nervous system to the endocrine system. It controls the pituitary gland.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Controls body temperature</li>
                <li>• Regulates hunger and thirst</li>
                <li>• Controls sleep-wake cycles</li>
                <li>• Regulates hormone release</li>
                <li>• Maintains homeostasis</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Connection to Pituitary</h4>
              <ul>
                <li>• Hypothalamus produces releasing hormones</li>
                <li>• These stimulate or inhibit the pituitary</li>
                <li>• Pituitary then controls other glands</li>
                <li>• A hypothalamic-pituitary axis</li>
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
          <h4>⚖️ Endocrine System Basics</h4>
          <ul>
            <li>• Glands produce hormones</li>
            <li>• Hormones travel through blood</li>
            <li>• Pituitary is the "master gland"</li>
            <li>• Feedback maintains balance</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Glands</h4>
          <ul>
            <li>• Thyroid: Metabolism</li>
            <li>• Adrenal: Stress response</li>
            <li>• Pancreas: Blood sugar</li>
            <li>• Gonads: Reproduction</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>The endocrine system works with the nervous system to control and coordinate body functions.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The nervous system and endocrine system are separate",
        correction: "They work together to control the body",
        explanation: "The hypothalamus links the nervous and endocrine systems."
      },
      {
        id: "mis_002",
        misconception: "Hormones work instantly",
        correction: "Hormones take time to work",
        explanation: "Hormones are slower than nerve signals but have longer-lasting effects."
      },
      {
        id: "mis_003",
        misconception: "Only the pituitary produces hormones",
        correction: "All endocrine glands produce hormones",
        explanation: "Each endocrine gland produces specific hormones."
      },
      {
        id: "mis_004",
        misconception: "Diabetes is caused by eating too much sugar",
        correction: "Diabetes involves problems with insulin",
        explanation: "Type 1 diabetes is autoimmune; Type 2 involves insulin resistance."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding hormones helps treat disorders.",
        example: "Diabetes treatment with insulin"
      },
      {
        id: "app_002",
        title: "Sports",
        description: "Understanding hormones improves athletic performance.",
        example: "Regulating stress responses"
      },
      {
        id: "app_003",
        title: "Reproductive Health",
        description: "Understanding hormones helps with reproduction.",
        example: "Contraception, fertility treatments"
      },
      {
        id: "app_004",
        title: "Weight Management",
        description: "Understanding metabolism helps with weight control.",
        example: "Thyroid function and metabolism"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Endocrine System", definition: "Glands that produce and secrete hormones." },
    { term: "Hormone", definition: "A chemical messenger produced by endocrine glands." },
    { term: "Gland", definition: "An organ that produces and secretes substances." },
    { term: "Pituitary Gland", definition: "The 'master gland' that controls other glands." },
    { term: "Thyroid Gland", definition: "Gland that regulates metabolism." },
    { term: "Adrenal Glands", definition: "Glands that produce stress hormones." },
    { term: "Pancreas", definition: "Gland that produces insulin and glucagon." },
    { term: "Insulin", definition: "Hormone that lowers blood sugar." },
    { term: "Glucagon", definition: "Hormone that raises blood sugar." },
    { term: "Estrogen", definition: "Female sex hormone." },
    { term: "Testosterone", definition: "Male sex hormone." },
    { term: "Negative Feedback", definition: "Response that reverses a change." },
    { term: "Positive Feedback", definition: "Response that amplifies a change." },
    { term: "Homeostasis", definition: "Maintaining a stable internal environment." },
    { term: "Hypothalamus", definition: "Brain region linking nervous and endocrine systems." },
    { term: "Diabetes", definition: "Disorder of blood sugar regulation." },
    { term: "Cortisol", definition: "Stress hormone produced by the adrenal cortex." },
    { term: "Adrenaline", definition: "Fight or flight hormone." },
    { term: "Metabolism", definition: "Chemical processes in the body." },
    { term: "Receptor", definition: "Protein that binds to hormones." }
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
      question: "What is the function of the endocrine system?",
      type: "multiple_choice",
      options: [
        "To pump blood",
        "To produce hormones and regulate body functions",
        "To digest food",
        "To filter waste"
      ],
      answer: "To produce hormones and regulate body functions",
      explanation: "The endocrine system produces hormones that regulate body functions."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which gland is called the 'master gland'?",
      type: "multiple_choice",
      options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
      answer: "Pituitary",
      explanation: "The pituitary gland controls many other endocrine glands."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are hormones?",
      type: "multiple_choice",
      options: [
        "Chemical messengers",
        "Nerve cells",
        "Muscle cells",
        "Blood cells"
      ],
      answer: "Chemical messengers",
      explanation: "Hormones are chemical messengers that travel through the blood."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What hormone does the pituitary gland produce?",
      type: "multiple_choice",
      options: [
        "Insulin",
        "Adrenaline",
        "Growth hormone",
        "Testosterone"
      ],
      answer: "Growth hormone",
      explanation: "The pituitary gland produces growth hormone among many others."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the function of the thyroid gland?",
      type: "multiple_choice",
      options: [
        "Regulates blood sugar",
        "Regulates metabolism",
        "Produces adrenaline",
        "Produces sperm"
      ],
      answer: "Regulates metabolism",
      explanation: "The thyroid gland regulates metabolism through thyroid hormones."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What hormone is produced by the adrenal glands during stress?",
      type: "multiple_choice",
      options: ["Insulin", "Adrenaline", "Estrogen", "Thyroxine"],
      answer: "Adrenaline",
      explanation: "The adrenal glands produce adrenaline (epinephrine) during the fight or flight response."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the function of insulin?",
      type: "multiple_choice",
      options: [
        "Raises blood sugar",
        "Lowers blood sugar",
        "Produces adrenaline",
        "Regulates metabolism"
      ],
      answer: "Lowers blood sugar",
      explanation: "Insulin lowers blood sugar by allowing cells to absorb glucose."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What hormone do the ovaries produce?",
      type: "multiple_choice",
      options: ["Testosterone", "Estrogen", "Adrenaline", "Insulin"],
      answer: "Estrogen",
      explanation: "The ovaries produce estrogen, the primary female sex hormone."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How does the hypothalamus control the pituitary gland?",
      type: "multiple_choice",
      options: [
        "Through releasing hormones",
        "Through nerves only",
        "Through the bloodstream",
        "It doesn't control the pituitary"
      ],
      answer: "Through releasing hormones",
      explanation: "The hypothalamus produces releasing hormones that stimulate or inhibit the pituitary."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How do hormones affect target cells?",
      type: "multiple_choice",
      options: [
        "By binding to receptors",
        "By entering the cell",
        "By killing the cell",
        "By changing DNA"
      ],
      answer: "By binding to receptors",
      explanation: "Hormones bind to specific receptors on target cells."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is negative feedback?",
      type: "multiple_choice",
      options: [
        "A response that amplifies a change",
        "A response that reverses a change",
        "A response that has no effect",
        "A response that causes disease"
      ],
      answer: "A response that reverses a change",
      explanation: "Negative feedback reverses changes to maintain homeostasis."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is Type 1 diabetes?",
      type: "multiple_choice",
      options: [
        "Insulin resistance",
        "Autoimmune destruction of beta cells",
        "Excess insulin production",
        "Thyroid disorder"
      ],
      answer: "Autoimmune destruction of beta cells",
      explanation: "Type 1 diabetes is an autoimmune condition where beta cells are destroyed."
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is the fight or flight response?",
      type: "multiple_choice",
      options: [
        "A response to hunger",
        "A stress response triggered by adrenaline",
        "A response to cold",
        "A response to sleep"
      ],
      answer: "A stress response triggered by adrenaline",
      explanation: "The fight or flight response is triggered by adrenaline during stress."
    },
    {
      id: "prac_014",
      objective: "obj_005",
      difficulty: "hard",
      question: "What mineral is essential for the thyroid gland?",
      type: "multiple_choice",
      options: ["Iron", "Calcium", "Iodine", "Potassium"],
      answer: "Iodine",
      explanation: "Iodine is essential for the production of thyroid hormones."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is Cushing's syndrome?",
      type: "multiple_choice",
      options: [
        "Underactive thyroid",
        "Overactive adrenal glands (excess cortisol)",
        "Underactive adrenal glands",
        "Overactive thyroid"
      ],
      answer: "Overactive adrenal glands (excess cortisol)",
      explanation: "Cushing's syndrome is caused by excess cortisol from the adrenal glands."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_endocrine_system",
    title: "Endocrine System Quiz",
    description: "Test your understanding of the endocrine system",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the function of the endocrine system?",
        type: "short_answer",
        answer_key: "To produce hormones and regulate body functions",
        explanation: "The endocrine system produces hormones that regulate body functions."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Which gland is called the 'master gland'?",
        type: "short_answer",
        answer_key: "Pituitary gland",
        explanation: "The pituitary gland controls many other endocrine glands."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are hormones?",
        type: "short_answer",
        answer_key: "Chemical messengers",
        explanation: "Hormones are chemical messengers produced by endocrine glands."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What hormone does the pituitary gland produce?",
        type: "short_answer",
        answer_key: "Growth hormone (or any valid pituitary hormone)",
        explanation: "The pituitary produces many hormones including growth hormone."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of the thyroid gland?",
        type: "short_answer",
        answer_key: "Regulates metabolism",
        explanation: "The thyroid regulates metabolism through thyroid hormones."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What hormone is produced during stress?",
        type: "short_answer",
        answer_key: "Adrenaline",
        explanation: "Adrenaline is produced by the adrenal glands during stress."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the function of insulin?",
        type: "short_answer",
        answer_key: "Lowers blood sugar",
        explanation: "Insulin lowers blood sugar levels."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What hormone do the ovaries produce?",
        type: "short_answer",
        answer_key: "Estrogen",
        explanation: "The ovaries produce estrogen."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is negative feedback?",
        type: "short_answer",
        answer_key: "A response that reverses a change",
        explanation: "Negative feedback maintains homeostasis by reversing changes."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is Type 1 diabetes?",
        type: "short_answer",
        answer_key: "Autoimmune destruction of insulin-producing cells",
        explanation: "Type 1 diabetes is caused by autoimmune destruction of beta cells."
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
        "Understand the structure and function of the endocrine system",
        "Identify major glands and their hormones",
        "Explain feedback mechanisms",
        "Understand common endocrine disorders"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the endocrine system?" },
        { time: "5-10 min", activity: "Direct Instruction - Glands and Hormones" },
        { time: "10-15 min", activity: "Direct Instruction - Pituitary Gland" },
        { time: "15-20 min", activity: "Direct Instruction - Thyroid and Adrenal" },
        { time: "20-25 min", activity: "Direct Instruction - Pancreas and Gonads" },
        { time: "25-30 min", activity: "Direct Instruction - Feedback Mechanisms" },
        { time: "30-35 min", activity: "Direct Instruction - Disorders" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "To produce hormones and regulate body functions",
        prac_002: "Pituitary",
        prac_003: "Chemical messengers",
        prac_004: "Growth hormone",
        prac_005: "Regulates metabolism",
        prac_006: "Adrenaline",
        prac_007: "Lowers blood sugar",
        prac_008: "Estrogen",
        prac_009: "Through releasing hormones",
        prac_010: "By binding to receptors",
        prac_011: "A response that reverses a change",
        prac_012: "Autoimmune destruction of beta cells",
        prac_013: "A stress response triggered by adrenaline",
        prac_014: "Iodine",
        prac_015: "Overactive adrenal glands (excess cortisol)"
      },
      assessment: {
        ass_001: "To produce hormones and regulate body functions",
        ass_002: "Pituitary gland",
        ass_003: "Chemical messengers",
        ass_004: "Growth hormone (or any valid pituitary hormone)",
        ass_005: "Regulates metabolism",
        ass_006: "Adrenaline",
        ass_007: "Lowers blood sugar",
        ass_008: "Estrogen",
        ass_009: "A response that reverses a change",
        ass_010: "Autoimmune destruction of insulin-producing cells"
      }
    },
    extensionActivities: [
      "Research diabetes management",
      "Study the effects of stress on hormones",
      "Research thyroid disorders",
      "Investigate how hormones affect growth",
      "Study the role of hormones in puberty"
    ],
    differentiation: {
      struggling: [
        "Focus on major glands and their functions",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research hormone receptors",
        "Study endocrine disorders in detail",
        "Research hormone replacement therapy",
        "Study the hypothalamic-pituitary axis"
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
      title: "Endocrine System",
      description: "Diagram of the endocrine system",
      url: "/diagrams/endocrine-system.png",
      alt: "Endocrine system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Blood Sugar Regulation",
      description: "Diagram of insulin and glucagon action",
      url: "/diagrams/blood-sugar-regulation.png",
      alt: "Blood sugar regulation diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Hormones and Functions",
      description: "Chart of major hormones and their functions",
      url: "/diagrams/hormones-chart.png",
      alt: "Hormones chart"
    }
  ]
};