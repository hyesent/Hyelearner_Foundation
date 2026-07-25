// Location: src/data/lessons/health/home_economics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "health_lesson_home_economics",
  subject: "Home Economics",
  topic: "Home Economics",
  name: "Home Economics",
  icon: "🏠",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic health concepts",
    "Interest in home management",
    "Basic cooking knowledge",
    "Understanding of family life"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Food and Nutrition",
      file: "health/food_and_nutrition.js"
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
      description: "Define home economics and explain its importance",
      indicator: "Student can explain what home economics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the areas of home economics",
      indicator: "Student can describe food, clothing, housing, and family studies"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the importance of home management",
      indicator: "Student can describe effective home management"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the principles of food preparation",
      indicator: "Student can explain basic cooking techniques"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the importance of clothing and textiles",
      indicator: "Student can describe clothing care and selection"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe housing and interior design",
      indicator: "Student can explain home design and maintenance"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the importance of family and human development",
      indicator: "Student can describe family life and relationships"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe budgeting and financial management at home",
      indicator: "Student can explain home budgeting"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of consumer education",
      indicator: "Student can describe consumer rights and responsibilities"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between home economics and health",
      indicator: "Student can discuss how home economics affects health"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of sustainable living",
      indicator: "Student can describe sustainable home practices"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of home economics in society",
      indicator: "Student can discuss the societal importance of home economics"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of hygiene in food preparation",
      indicator: "Student can describe food safety practices"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the impact of technology on home economics",
      indicator: "Student can discuss technology in the home"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe the career opportunities in home economics",
      indicator: "Student can identify careers in home economics"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the future of home economics",
      indicator: "Student can discuss emerging trends in home economics"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Home Economics - Managing the Home",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about home economics, home management, and the skills needed to run a home."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Home Economics</h2>
      <p><strong>Home economics</strong> is the study of managing a home and family life. It covers food preparation, clothing, housing, family relationships, and financial management. Home economics provides essential skills for daily living and contributes to the well-being of individuals and families.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏠 Key Concepts</h3>
          <ul>
            <li>✓ Food Preparation</li>
            <li>✓ Clothing and Textiles</li>
            <li>✓ Housing and Interior Design</li>
            <li>✓ Family Studies</li>
            <li>✓ Budgeting</li>
            <li>✓ Consumer Education</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Home economics has been taught for over 100 years</li>
            <li>• It covers practical life skills</li>
            <li>• Food safety is essential in home economics</li>
            <li>• Budgeting helps families manage money</li>
            <li>• Home economics prepares for independent living</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Home Economics Matters</h4>
        <p>Home economics provides the skills needed to manage a home, raise a family, and live a healthy, fulfilling life.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Home Economics?",
        objective: "obj_001",
        text: `
          <h3>Understanding Home Economics</h3>
          <p><strong>Home economics</strong> is the study of managing a home and family life. It develops practical skills for daily living.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Areas</h4>
              <ul>
                <li>• <strong>Food and nutrition:</strong> Cooking and meal planning</li>
                <li>• <strong>Clothing and textiles:</strong> Selection and care</li>
                <li>• <strong>Housing:</strong> Home design and maintenance</li>
                <li>• <strong>Family studies:</strong> Relationships and child development</li>
                <li>• <strong>Consumer education:</strong> Making informed choices</li>
                <li>• <strong>Financial management:</strong> Budgeting and saving</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Develops life skills</li>
                <li>• Promotes healthy living</li>
                <li>• Builds family relationships</li>
                <li>• Financial literacy</li>
                <li>• Independent living</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Food Preparation",
        objective: "obj_004",
        text: `
          <h3>Food Preparation</h3>
          <p>Food preparation involves planning, cooking, and serving meals.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Meal planning:</strong> Balanced and nutritious</li>
                <li>• <strong>Cooking techniques:</strong> Boiling, frying, baking</li>
                <li>• <strong>Food safety:</strong> Hygiene and storage</li>
                <li>• <strong>Presentation:</strong> Serving attractively</li>
                <li>• <strong>Nutrition:</strong> Healthy meals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Kitchen Safety</h4>
              <ul>
                <li>• <strong>Cleanliness:</strong> Wash hands and surfaces</li>
                <li>• <strong>Temperature control:</strong> Keep food safe</li>
                <li>• <strong>Knife safety:</strong> Handle carefully</li>
                <li>• <strong>Fire safety:</strong> Prevent burns</li>
                <li>• <strong>Food storage:</strong> Proper refrigeration</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Clothing and Textiles",
        objective: "obj_005",
        text: `
          <h3>Clothing and Textiles</h3>
          <p>Clothing and textiles involves selection, care, and maintenance of clothing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Fabric selection:</strong> Cotton, wool, synthetic</li>
                <li>• <strong>Clothing care:</strong> Washing, drying, ironing</li>
                <li>• <strong>Fashion:</strong> Personal style</li>
                <li>• <strong>Sewing:</strong> Basic repairs</li>
                <li>• <strong>Budgeting:</strong> Smart shopping</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Self-expression</li>
                <li>• Protection from weather</li>
                <li>• Cultural identity</li>
                <li>• Professional appearance</li>
                <li>• Confidence</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Housing and Interior Design",
        objective: "obj_006",
        text: `
          <h3>Housing and Interior Design</h3>
          <p>Housing involves the selection, design, and maintenance of a home.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Design:</strong> Layout and functionality</li>
                <li>• <strong>Decoration:</strong> Colors, furniture, lighting</li>
                <li>• <strong>Maintenance:</strong> Cleaning and repairs</li>
                <li>• <strong>Space planning:</strong> Efficient use</li>
                <li>• <strong>Safety:</strong> Home security</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Home Design Principles</h4>
              <ul>
                <li>• <strong>Functionality:</strong> Practical use</li>
                <li>• <strong>Aesthetics:</strong> Beauty</li>
                <li>• <strong>Comfort:</strong> Cozy environment</li>
                <li>• <strong>Safety:</strong> Secure and healthy</li>
                <li>• <strong>Sustainability:</strong> Eco-friendly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Family Studies",
        objective: "obj_007",
        text: `
          <h3>Family Studies</h3>
          <p>Family studies covers family relationships, child development, and family dynamics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Family roles:</strong> Responsibilities</li>
                <li>• <strong>Child development:</strong> Growth and learning</li>
                <li>• <strong>Communication:</strong> Healthy relationships</li>
                <li>• <strong>Conflict resolution:</strong> Solving problems</li>
                <li>• <strong>Parenting:</strong> Care and guidance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Builds strong families</li>
                <li>• Supports child development</li>
                <li>• Promotes emotional health</li>
                <li>• Creates supportive environments</li>
                <li>• Develops social skills</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Budgeting and Financial Management",
        objective: "obj_008",
        text: `
          <h3>Budgeting and Financial Management</h3>
          <p>Budgeting is essential for managing family finances.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Steps</h4>
              <ul>
                <li>1. <strong>Track income:</strong> Know what you earn</li>
                <li>2. <strong>Track expenses:</strong> Know what you spend</li>
                <li>3. <strong>Create a budget:</strong> Plan your spending</li>
                <li>4. <strong>Save money:</strong> Build savings</li>
                <li>5. <strong>Review:</strong> Adjust as needed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Tips</h4>
              <ul>
                <li>• <strong>Prioritize needs:</strong> Essentials first</li>
                <li>• <strong>Limit wants:</strong> Avoid overspending</li>
                <li>• <strong>Emergency fund:</strong> Save for unexpected</li>
                <li>• <strong>Reduce debt:</strong> Manage borrowing</li>
                <li>• <strong>Financial goals:</strong> Plan for the future</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Consumer Education",
        objective: "obj_009",
        text: `
          <h3>Consumer Education</h3>
          <p>Consumer education helps individuals make informed purchasing decisions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Consumer rights:</strong> Protection</li>
                <li>• <strong>Consumer responsibilities:</strong> Informed choices</li>
                <li>• <strong>Comparison shopping:</strong> Finding the best value</li>
                <li>• <strong>Product quality:</strong> Evaluating goods</li>
                <li>• <strong>Scams:</strong> Avoiding fraud</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consumer Rights</h4>
              <ul>
                <li>• <strong>Right to safety:</strong> Safe products</li>
                <li>• <strong>Right to information:</strong> Accurate labeling</li>
                <li>• <strong>Right to choose:</strong> Product variety</li>
                <li>• <strong>Right to be heard:</strong> Complaints</li>
                <li>• <strong>Right to redress:</strong> Remedies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Sustainable Living",
        objective: "obj_011",
        text: `
          <h3>Sustainable Living</h3>
          <p>Sustainable living involves practices that protect the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Practices</h4>
              <ul>
                <li>• <strong>Reduce waste:</strong> Minimize trash</li>
                <li>• <strong>Recycle:</strong> Reuse materials</li>
                <li>• <strong>Conserve energy:</strong> Efficient use</li>
                <li>• <strong>Save water:</strong> Responsible use</li>
                <li>• <strong>Eco-friendly products:</strong> Sustainable choices</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Protects the environment</li>
                <li>• Saves money</li>
                <li>• Healthier living</li>
                <li>• Future generations</li>
                <li>• Community well-being</li>
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
          <h4>🏠 Home Economics</h4>
          <ul>
            <li>• Food preparation and safety</li>
            <li>• Clothing and textiles</li>
            <li>• Housing and interior design</li>
            <li>• Family studies and relationships</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Budgeting and financial management</li>
            <li>• Consumer education and rights</li>
            <li>• Sustainable living</li>
            <li>• Home management skills</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Home economics provides essential skills for managing a home and living a healthy, fulfilling life.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Home economics is only about cooking",
        correction: "Home economics covers many areas including finance and family studies",
        explanation: "Home economics includes food, clothing, housing, family, and consumer education."
      },
      {
        id: "mis_002",
        misconception: "Home economics is only for women",
        correction: "Home economics is for everyone",
        explanation: "Everyone needs the skills taught in home economics."
      },
      {
        id: "mis_003",
        misconception: "Budgeting is not important",
        correction: "Budgeting is essential for financial health",
        explanation: "Budgeting helps manage money and achieve financial goals."
      },
      {
        id: "mis_004",
        misconception: "Consumer education is not necessary",
        correction: "Consumer education protects against fraud",
        explanation: "Knowing consumer rights helps make informed decisions."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Home Management",
        description: "Home economics helps manage a home.",
        example: "Meal planning, budgeting, home maintenance"
      },
      {
        id: "app_002",
        title: "Family Life",
        description: "Home economics supports family life.",
        example: "Child development, relationships"
      },
      {
        id: "app_003",
        title: "Consumer Skills",
        description: "Home economics develops consumer skills.",
        example: "Smart shopping, consumer rights"
      },
      {
        id: "app_004",
        title: "Career Opportunities",
        description: "Home economics leads to careers.",
        example: "Nutritionist, interior designer, teacher"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Home Economics", definition: "The study of managing a home and family life." },
    { term: "Nutrition", definition: "The process of providing nutrients for health." },
    { term: "Textile", definition: "A type of fabric or cloth." },
    { term: "Interior Design", definition: "The design and decoration of interior spaces." },
    { term: "Family Studies", definition: "The study of family relationships and child development." },
    { term: "Budgeting", definition: "Planning income and expenses." },
    { term: "Consumer Education", definition: "Education about consumer rights and responsibilities." },
    { term: "Sustainable Living", definition: "Living in an environmentally responsible way." },
    { term: "Food Safety", definition: "Practices to prevent foodborne illness." },
    { term: "Meal Planning", definition: "Planning meals for nutrition and efficiency." },
    { term: "Fabric", definition: "Material made from fibers." },
    { term: "Housing", definition: "The provision of shelter and accommodation." },
    { term: "Child Development", definition: "The process of growth and development in children." },
    { term: "Financial Management", definition: "Managing money effectively." },
    { term: "Consumer Rights", definition: "Rights that protect consumers." },
    { term: "Energy Conservation", definition: "Using energy efficiently." },
    { term: "Recycling", definition: "Reusing materials." },
    { term: "Hygiene", definition: "Practices that maintain health." },
    { term: "Career", definition: "A profession or occupation." },
    { term: "Life Skills", definition: "Skills needed for daily living." }
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
      question: "What is home economics?",
      type: "multiple_choice",
      options: [
        "The study of cooking only",
        "The study of managing a home and family life",
        "The study of fashion only",
        "The study of architecture"
      ],
      answer: "The study of managing a home and family life",
      explanation: "Home economics is the study of managing a home and family life."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is an area of home economics?",
      type: "multiple_choice",
      options: ["Food preparation", "Clothing", "Housing", "All of the above"],
      answer: "All of the above",
      explanation: "Food preparation, clothing, and housing are all areas of home economics."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is home management?",
      type: "multiple_choice",
      options: [
        "Ignoring home tasks",
        "Effectively managing home tasks",
        "Only cooking",
        "Only cleaning"
      ],
      answer: "Effectively managing home tasks",
      explanation: "Home management is effectively managing home tasks."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a principle of food preparation?",
      type: "multiple_choice",
      options: [
        "Food safety",
        "Ignoring hygiene",
        "Eating out",
        "Skipping meals"
      ],
      answer: "Food safety",
      explanation: "Food safety is a principle of food preparation."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is important in clothing care?",
      type: "multiple_choice",
      options: [
        "Washing and ironing",
        "Ignoring stains",
        "Never washing",
        "Wearing dirty clothes"
      ],
      answer: "Washing and ironing",
      explanation: "Washing and ironing are important in clothing care."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is interior design?",
      type: "multiple_choice",
      options: [
        "The design of interior spaces",
        "Only furniture arrangement",
        "Only color selection",
        "Only lighting"
      ],
      answer: "The design of interior spaces",
      explanation: "Interior design is the design of interior spaces."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is family studies?",
      type: "multiple_choice",
      options: [
        "The study of family relationships",
        "Only child development",
        "Only marriage",
        "Only parenting"
      ],
      answer: "The study of family relationships",
      explanation: "Family studies is the study of family relationships and child development."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the first step in creating a budget?",
      type: "multiple_choice",
      options: [
        "Track income",
        "Track expenses",
        "Set goals",
        "Create a plan"
      ],
      answer: "Track income",
      explanation: "The first step in creating a budget is to track income."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a consumer right?",
      type: "multiple_choice",
      options: [
        "The right to safety",
        "The right to ignore products",
        "The right to steal",
        "The right to fraud"
      ],
      answer: "The right to safety",
      explanation: "The right to safety is a consumer right."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How does home economics affect health?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It promotes healthy living",
        "It only affects children",
        "It only affects adults"
      ],
      answer: "It promotes healthy living",
      explanation: "Home economics promotes healthy living."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is sustainable living?",
      type: "multiple_choice",
      options: [
        "Living in an environmentally responsible way",
        "Ignoring the environment",
        "Wasting resources",
        "Polluting"
      ],
      answer: "Living in an environmentally responsible way",
      explanation: "Sustainable living is living in an environmentally responsible way."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of home economics in society?",
      type: "multiple_choice",
      options: [
        "It has no role",
        "It develops life skills",
        "It only teaches cooking",
        "It only teaches sewing"
      ],
      answer: "It develops life skills",
      explanation: "Home economics develops life skills for society."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is hygiene important in food preparation?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It prevents foodborne illness",
        "It only improves taste",
        "It only improves appearance"
      ],
      answer: "It prevents foodborne illness",
      explanation: "Hygiene prevents foodborne illness."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does technology impact home economics?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It makes tasks easier",
        "It makes tasks harder",
        "It is not used"
      ],
      answer: "It makes tasks easier",
      explanation: "Technology makes home economics tasks easier."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a career in home economics?",
      type: "multiple_choice",
      options: [
        "Nutritionist",
        "Doctor",
        "Engineer",
        "Lawyer"
      ],
      answer: "Nutritionist",
      explanation: "A nutritionist is a career in home economics."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_home_economics",
    title: "Home Economics Quiz",
    description: "Test your understanding of home economics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is home economics?",
        type: "short_answer",
        answer_key: "The study of managing a home and family life",
        explanation: "Home economics is the study of managing a home and family life."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is an area of home economics?",
        type: "short_answer",
        answer_key: "Food preparation (or any valid)",
        explanation: "Food preparation is an area of home economics."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is home management?",
        type: "short_answer",
        answer_key: "Effectively managing home tasks",
        explanation: "Home management is effectively managing home tasks."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a principle of food preparation?",
        type: "short_answer",
        answer_key: "Food safety",
        explanation: "Food safety is a principle of food preparation."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is important in clothing care?",
        type: "short_answer",
        answer_key: "Washing and ironing",
        explanation: "Washing and ironing are important in clothing care."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is interior design?",
        type: "short_answer",
        answer_key: "The design of interior spaces",
        explanation: "Interior design is the design of interior spaces."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is family studies?",
        type: "short_answer",
        answer_key: "The study of family relationships",
        explanation: "Family studies is the study of family relationships."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the first step in creating a budget?",
        type: "short_answer",
        answer_key: "Track income",
        explanation: "The first step in creating a budget is to track income."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is a consumer right?",
        type: "short_answer",
        answer_key: "The right to safety",
        explanation: "The right to safety is a consumer right."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is sustainable living?",
        type: "short_answer",
        answer_key: "Living in an environmentally responsible way",
        explanation: "Sustainable living is living in an environmentally responsible way."
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
        "Understand home economics and its areas",
        "Explain food preparation and safety",
        "Describe clothing and housing",
        "Understand budgeting and consumer education"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is home economics?" },
        { time: "5-10 min", activity: "Direct Instruction - Areas of Home Economics" },
        { time: "10-15 min", activity: "Direct Instruction - Food Preparation" },
        { time: "15-20 min", activity: "Direct Instruction - Clothing and Housing" },
        { time: "20-25 min", activity: "Direct Instruction - Family Studies" },
        { time: "25-30 min", activity: "Direct Instruction - Budgeting" },
        { time: "30-35 min", activity: "Direct Instruction - Consumer Education" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of managing a home and family life",
        prac_002: "All of the above",
        prac_003: "Effectively managing home tasks",
        prac_004: "Food safety",
        prac_005: "Washing and ironing",
        prac_006: "The design of interior spaces",
        prac_007: "The study of family relationships",
        prac_008: "Track income",
        prac_009: "The right to safety",
        prac_010: "It promotes healthy living",
        prac_011: "Living in an environmentally responsible way",
        prac_012: "It develops life skills",
        prac_013: "It prevents foodborne illness",
        prac_014: "It makes tasks easier",
        prac_015: "Nutritionist"
      },
      assessment: {
        ass_001: "The study of managing a home and family life",
        ass_002: "Food preparation (or any valid)",
        ass_003: "Effectively managing home tasks",
        ass_004: "Food safety",
        ass_005: "Washing and ironing",
        ass_006: "The design of interior spaces",
        ass_007: "The study of family relationships",
        ass_008: "Track income",
        ass_009: "The right to safety",
        ass_010: "Living in an environmentally responsible way"
      }
    },
    extensionActivities: [
      "Plan a weekly menu",
      "Create a budget",
      "Study sustainable living",
      "Research consumer rights"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research home economics careers",
        "Study interior design",
        "Research sustainable practices",
        "Study family dynamics"
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
      title: "Areas of Home Economics",
      description: "Diagram showing areas of home economics",
      url: "/diagrams/home-economics-areas.png",
      alt: "Home economics areas diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Budgeting Process",
      description: "Diagram showing the budgeting process",
      url: "/diagrams/budgeting-process.png",
      alt: "Budgeting process diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Food Safety",
      description: "Diagram showing food safety practices",
      url: "/diagrams/food-safety.png",
      alt: "Food safety diagram"
    }
  ]
};