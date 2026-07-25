// Location: src/data/lessons/health/food_and_nutrition.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "health_lesson_food_and_nutrition",
  subject: "Food and Nutrition",
  topic: "Food and Nutrition",
  name: "Food and Nutrition",
  icon: "🍎",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 17,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic health concepts",
    "Interest in food and cooking",
    "Basic scientific knowledge",
    "Understanding of nutrition"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Health lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define food and nutrition and explain their importance",
      indicator: "Student can explain what food and nutrition are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the six classes of nutrients",
      indicator: "Student can list carbohydrates, proteins, fats, vitamins, minerals, and water"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of a balanced diet",
      indicator: "Student can describe what a balanced diet is"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the functions of carbohydrates",
      indicator: "Student can describe the role of carbohydrates in the body"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the functions of proteins",
      indicator: "Student can describe the role of proteins in the body"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the functions of fats",
      indicator: "Student can describe the role of fats in the body"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the functions of vitamins and minerals",
      indicator: "Student can describe the role of vitamins and minerals"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the importance of water",
      indicator: "Student can describe why water is essential"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the food groups",
      indicator: "Student can explain the different food groups"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between nutrition and health",
      indicator: "Student can discuss how nutrition affects health"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of malnutrition",
      indicator: "Student can describe undernutrition and overnutrition"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the nutritional needs across the lifespan",
      indicator: "Student can explain how nutritional needs change"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of food safety",
      indicator: "Student can describe food safety practices"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the role of nutrition in disease prevention",
      indicator: "Student can discuss how nutrition prevents disease"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the concept of food security",
      indicator: "Student can describe food security and its importance"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the impact of culture on food choices",
      indicator: "Student can discuss cultural influences on food"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the future of food and nutrition",
      indicator: "Student can discuss emerging trends in food and nutrition"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Food and Nutrition - Fueling the Body",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about food, nutrition, nutrients, and how to maintain a healthy diet."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Food and Nutrition</h2>
      <p><strong>Food and nutrition</strong> is the study of how food affects the body and health. It covers the nutrients the body needs, the role of food in health, and the importance of a balanced diet. Good nutrition is essential for growth, development, and overall well-being.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🍎 Key Concepts</h3>
          <ul>
            <li>✓ Nutrients</li>
            <li>✓ Balanced Diet</li>
            <li>✓ Food Groups</li>
            <li>✓ Malnutrition</li>
            <li>✓ Food Safety</li>
            <li>✓ Nutrition and Health</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• There are six classes of nutrients</li>
            <li>• Water is the most essential nutrient</li>
            <li>• Malnutrition affects millions of people</li>
            <li>• A balanced diet prevents disease</li>
            <li>• Nutrition needs change with age</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Food and Nutrition Matters</h4>
        <p>Food and nutrition are essential for health, growth, and disease prevention. Understanding nutrition helps us make better food choices.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Food and Nutrition?",
        objective: "obj_001",
        text: `
          <h3>Understanding Food and Nutrition</h3>
          <p><strong>Food</strong> is any substance consumed to provide nutritional support. <strong>Nutrition</strong> is the process of obtaining and using food for health and growth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Food:</strong> Source of nutrients</li>
                <li>• <strong>Nutrition:</strong> How the body uses food</li>
                <li>• <strong>Nutrients:</strong> Essential substances</li>
                <li>• <strong>Diet:</strong> What a person eats</li>
                <li>• <strong>Health:</strong> Physical and mental well-being</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Growth and development</li>
                <li>• Energy for daily activities</li>
                <li>• Disease prevention</li>
                <li>• Mental well-being</li>
                <li>• Long-term health</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Classes of Nutrients",
        objective: "obj_002",
        text: `
          <h3>Six Classes of Nutrients</h3>
          <p>There are six classes of nutrients that the body needs.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Carbohydrates</h4>
              <ul>
                <li>• Main source of energy</li>
                <li>• Examples: Bread, rice, pasta</li>
                <li>• Provides 4 calories per gram</li>
                <li>• Types: Simple and complex</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Proteins</h4>
              <ul>
                <li>• Build and repair tissues</li>
                <li>• Examples: Meat, beans, eggs</li>
                <li>• Provides 4 calories per gram</li>
                <li>• Made of amino acids</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Fats</h4>
              <ul>
                <li>• Energy storage</li>
                <li>• Examples: Oil, butter, nuts</li>
                <li>• Provides 9 calories per gram</li>
                <li>• Types: Saturated and unsaturated</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Vitamins</h4>
              <ul>
                <li>• Regulate body processes</li>
                <li>• Examples: Vitamin A, C, D</li>
                <li>• Essential for health</li>
                <li>• Fat-soluble and water-soluble</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Minerals</h4>
              <ul>
                <li>• Body functions</li>
                <li>• Examples: Calcium, iron, potassium</li>
                <li>• Essential for health</li>
                <li>• Found in soil and water</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Water</h4>
              <ul>
                <li>• Essential for life</li>
                <li>• Regulates body temperature</li>
                <li>• Transports nutrients</li>
                <li>• Removes waste</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Balanced Diet",
        objective: "obj_003",
        text: `
          <h3>Balanced Diet</h3>
          <p>A <strong>balanced diet</strong> provides all the nutrients the body needs in the right proportions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components</h4>
              <ul>
                <li>• <strong>Carbohydrates:</strong> 45-65% of calories</li>
                <li>• <strong>Proteins:</strong> 10-35% of calories</li>
                <li>• <strong>Fats:</strong> 20-35% of calories</li>
                <li>• <strong>Vitamins:</strong> Daily requirements</li>
                <li>• <strong>Minerals:</strong> Daily requirements</li>
                <li>• <strong>Water:</strong> Adequate intake</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Maintains healthy weight</li>
                <li>• Prevents disease</li>
                <li>• Provides energy</li>
                <li>• Supports growth</li>
                <li>• Improves mental health</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Food Groups",
        objective: "obj_009",
        text: `
          <h3>Food Groups</h3>
          <p>Foods are grouped into categories based on their nutritional properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Food Groups</h4>
              <ul>
                <li>• <strong>Grains:</strong> Rice, wheat, maize</li>
                <li>• <strong>Vegetables:</strong> Leafy greens, root vegetables</li>
                <li>• <strong>Fruits:</strong> Fresh, dried, canned</li>
                <li>• <strong>Proteins:</strong> Meat, fish, beans, eggs</li>
                <li>• <strong>Dairy:</strong> Milk, cheese, yogurt</li>
                <li>• <strong>Fats and oils:</strong> Used in moderation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Healthy Eating Plate</h4>
              <ul>
                <li>• Half plate: Vegetables and fruits</li>
                <li>• Quarter plate: Whole grains</li>
                <li>• Quarter plate: Healthy proteins</li>
                <li>• Water as the drink</li>
                <li>• Healthy oils in moderation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Malnutrition",
        objective: "obj_011",
        text: `
          <h3>Malnutrition</h3>
          <p><strong>Malnutrition</strong> occurs when the body does not get the right amount of nutrients.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types</h4>
              <ul>
                <li>• <strong>Undernutrition:</strong> Not enough nutrients</li>
                <li>• <strong>Overnutrition:</strong> Too many nutrients</li>
                <li>• <strong>Micronutrient deficiency:</strong> Lack of vitamins/minerals</li>
                <li>• <strong>Protein-energy malnutrition:</strong> Lack of protein</li>
                <li>• <strong>Obesity:</strong> Excessive body fat</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• Stunted growth</li>
                <li>• Weakened immune system</li>
                <li>• Cognitive impairment</li>
                <li>• Increased disease risk</li>
                <li>• Reduced productivity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Nutrition and Health",
        objective: "obj_010",
        text: `
          <h3>Nutrition and Health</h3>
          <p>Nutrition plays a crucial role in health and disease prevention.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Health Benefits</h4>
              <ul>
                <li>• Heart health</li>
                <li>• Strong bones</li>
                <li>• Healthy immune system</li>
                <li>• Disease prevention</li>
                <li>• Mental well-being</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Disease Prevention</h4>
              <ul>
                <li>• <strong>Heart disease:</strong> Healthy fats</li>
                <li>• <strong>Diabetes:</strong> Balanced diet</li>
                <li>• <strong>Cancer:</strong> Antioxidants</li>
                <li>• <strong>Osteoporosis:</strong> Calcium</li>
                <li>• <strong>Anemia:</strong> Iron</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nutrition Across the Lifespan",
        objective: "obj_012",
        text: `
          <h3>Nutrition Across the Lifespan</h3>
          <p>Nutritional needs change throughout life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Life Stages</h4>
              <ul>
                <li>• <strong>Infants:</strong> Breast milk or formula</li>
                <li>• <strong>Children:</strong> Growth and development</li>
                <li>• <strong>Adolescents:</strong> Increased needs</li>
                <li>• <strong>Adults:</strong> Maintenance</li>
                <li>• <strong>Elderly:</strong> Reduced needs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Special Needs</h4>
              <ul>
                <li>• <strong>Pregnancy:</strong> Extra nutrients</li>
                <li>• <strong>Lactation:</strong> Increased calories</li>
                <li>• <strong>Athletes:</strong> Higher energy needs</li>
                <li>• <strong>Illness:</strong> Special dietary needs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Food Safety",
        objective: "obj_013",
        text: `
          <h3>Food Safety</h3>
          <p><strong>Food safety</strong> is the practice of handling, preparing, and storing food to prevent illness.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Practices</h4>
              <ul>
                <li>• <strong>Clean:</strong> Wash hands and surfaces</li>
                <li>• <strong>Separate:</strong> Raw and cooked foods</li>
                <li>• <strong>Cook:</strong> Proper temperatures</li>
                <li>• <strong>Chill:</strong> Refrigerate promptly</li>
                <li>• <strong>Check:</strong> Use by dates</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Foodborne Illnesses</h4>
              <ul>
                <li>• <strong>Salmonella:</strong> Raw eggs, poultry</li>
                <li>• <strong>E. coli:</strong> Undercooked meat</li>
                <li>• <strong>Listeria:</strong> Unpasteurized dairy</li>
                <li>• <strong>Norovirus:</strong> Contaminated food</li>
                <li>• <strong>Botulism:</strong> Improperly canned food</li>
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
          <h4>🍎 Food and Nutrition</h4>
          <ul>
            <li>• Six classes of nutrients</li>
            <li>• Balanced diet is essential</li>
            <li>• Malnutrition has serious effects</li>
            <li>• Nutrition affects health</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Food groups guide healthy eating</li>
            <li>• Food safety prevents illness</li>
            <li>• Nutrition needs change with age</li>
            <li>• Food security is important</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Good nutrition is the foundation of good health. The food we eat affects our physical and mental well-being.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Carbohydrates are bad for you",
        correction: "Carbohydrates are essential for energy",
        explanation: "Complex carbohydrates like whole grains are healthy."
      },
      {
        id: "mis_002",
        misconception: "All fats are unhealthy",
        correction: "Healthy fats are essential",
        explanation: "Unsaturated fats from plants and fish are beneficial."
      },
      {
        id: "mis_003",
        misconception: "Vitamins and minerals are not important",
        correction: "Vitamins and minerals are essential for health",
        explanation: "Micronutrients support many body functions."
      },
      {
        id: "mis_004",
        misconception: "You don't need water if you're not thirsty",
        correction: "Water is essential even when not thirsty",
        explanation: "Staying hydrated is important for health."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Health",
        description: "Nutrition supports personal health.",
        example: "Healthy eating, disease prevention"
      },
      {
        id: "app_002",
        title: "Diet Planning",
        description: "Nutrition helps plan diets.",
        example: "Weight management, sports nutrition"
      },
      {
        id: "app_003",
        title: "Public Health",
        description: "Nutrition supports public health.",
        example: "Food security, nutrition programs"
      },
      {
        id: "app_004",
        title: "Career Opportunities",
        description: "Nutrition leads to careers.",
        example: "Nutritionist, dietitian, food scientist"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Nutrition", definition: "The process of obtaining and using food for health." },
    { term: "Nutrients", definition: "Substances in food that the body needs." },
    { term: "Carbohydrates", definition: "The body's main source of energy." },
    { term: "Proteins", definition: "Nutrients that build and repair tissues." },
    { term: "Fats", definition: "Nutrients that provide energy and support cell function." },
    { term: "Vitamins", definition: "Organic compounds essential for health." },
    { term: "Minerals", definition: "Inorganic elements essential for health." },
    { term: "Water", definition: "An essential nutrient for all body functions." },
    { term: "Balanced Diet", definition: "A diet with all essential nutrients." },
    { term: "Malnutrition", definition: "A condition caused by poor nutrition." },
    { term: "Food Safety", definition: "Practices to prevent foodborne illness." },
    { term: "Food Groups", definition: "Categories of foods with similar nutritional properties." },
    { term: "Calorie", definition: "A unit of energy from food." },
    { term: "Fiber", definition: "A type of carbohydrate that aids digestion." },
    { term: "Antioxidant", definition: "A substance that protects cells from damage." },
    { term: "Hydration", definition: "The process of maintaining fluid balance." },
    { term: "Food Security", definition: "Access to sufficient, safe, and nutritious food." },
    { term: "Dietary Guidelines", definition: "Recommendations for healthy eating." },
    { term: "Nutritional Deficiency", definition: "A lack of essential nutrients." },
    { term: "Metabolism", definition: "Chemical processes in the body." }
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
      question: "What is nutrition?",
      type: "multiple_choice",
      options: [
        "The process of cooking food",
        "The process of obtaining and using food for health",
        "The process of storing food",
        "The process of eating only vegetables"
      ],
      answer: "The process of obtaining and using food for health",
      explanation: "Nutrition is the process of obtaining and using food for health."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How many classes of nutrients are there?",
      type: "multiple_choice",
      options: ["4", "5", "6", "7"],
      answer: "6",
      explanation: "There are six classes of nutrients: carbohydrates, proteins, fats, vitamins, minerals, and water."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a balanced diet?",
      type: "multiple_choice",
      options: [
        "A diet with all essential nutrients",
        "A diet with only carbohydrates",
        "A diet with only proteins",
        "A diet with only vegetables"
      ],
      answer: "A diet with all essential nutrients",
      explanation: "A balanced diet provides all essential nutrients."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the main function of carbohydrates?",
      type: "multiple_choice",
      options: [
        "Build and repair tissues",
        "Provide energy",
        "Regulate body processes",
        "Store energy"
      ],
      answer: "Provide energy",
      explanation: "The main function of carbohydrates is to provide energy."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the main function of proteins?",
      type: "multiple_choice",
      options: [
        "Provide energy",
        "Build and repair tissues",
        "Regulate body temperature",
        "Store vitamins"
      ],
      answer: "Build and repair tissues",
      explanation: "The main function of proteins is to build and repair tissues."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the main function of fats?",
      type: "multiple_choice",
      options: [
        "Provide energy",
        "Build and repair tissues",
        "Regulate body processes",
        "Provide quick energy"
      ],
      answer: "Provide energy",
      explanation: "Fats provide energy and support cell function."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the function of vitamins?",
      type: "multiple_choice",
      options: [
        "Provide energy",
        "Build and repair tissues",
        "Regulate body processes",
        "Store energy"
      ],
      answer: "Regulate body processes",
      explanation: "Vitamins regulate body processes."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Why is water essential?",
      type: "multiple_choice",
      options: [
        "It is not essential",
        "It regulates body temperature",
        "It only helps with digestion",
        "It only helps with hydration"
      ],
      answer: "It regulates body temperature",
      explanation: "Water regulates body temperature and supports many functions."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a food group?",
      type: "multiple_choice",
      options: [
        "A category of foods with similar properties",
        "A type of nutrient",
        "A cooking method",
        "A food brand"
      ],
      answer: "A category of foods with similar properties",
      explanation: "A food group is a category of foods with similar nutritional properties."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How does nutrition affect health?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It significantly affects health",
        "It only affects weight",
        "It only affects mood"
      ],
      answer: "It significantly affects health",
      explanation: "Nutrition significantly affects overall health."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is malnutrition?",
      type: "multiple_choice",
      options: [
        "Eating too much food",
        "A condition caused by poor nutrition",
        "Eating only healthy food",
        "A type of diet"
      ],
      answer: "A condition caused by poor nutrition",
      explanation: "Malnutrition is a condition caused by poor nutrition."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How do nutritional needs change with age?",
      type: "multiple_choice",
      options: [
        "They do not change",
        "They increase and decrease at different life stages",
        "They only increase",
        "They only decrease"
      ],
      answer: "They increase and decrease at different life stages",
      explanation: "Nutritional needs change across the lifespan."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is food safety?",
      type: "multiple_choice",
      options: [
        "Eating only cooked food",
        "Practices to prevent foodborne illness",
        "Eating only organic food",
        "Storing food in the refrigerator"
      ],
      answer: "Practices to prevent foodborne illness",
      explanation: "Food safety is practices to prevent foodborne illness."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does nutrition prevent disease?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It strengthens the immune system",
        "It only prevents obesity",
        "It only prevents diabetes"
      ],
      answer: "It strengthens the immune system",
      explanation: "Nutrition strengthens the immune system and prevents disease."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is food security?",
      type: "multiple_choice",
      options: [
        "Having enough food to eat",
        "Access to sufficient, safe, and nutritious food",
        "Only having food in the house",
        "Eating regularly"
      ],
      answer: "Access to sufficient, safe, and nutritious food",
      explanation: "Food security is access to sufficient, safe, and nutritious food."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_food_and_nutrition",
    title: "Food and Nutrition Quiz",
    description: "Test your understanding of food and nutrition",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is nutrition?",
        type: "short_answer",
        answer_key: "The process of obtaining and using food for health",
        explanation: "Nutrition is the process of obtaining and using food for health."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How many classes of nutrients are there?",
        type: "short_answer",
        answer_key: "6",
        explanation: "There are six classes of nutrients."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a balanced diet?",
        type: "short_answer",
        answer_key: "A diet with all essential nutrients",
        explanation: "A balanced diet provides all essential nutrients."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the main function of carbohydrates?",
        type: "short_answer",
        answer_key: "Provide energy",
        explanation: "The main function of carbohydrates is to provide energy."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the main function of proteins?",
        type: "short_answer",
        answer_key: "Build and repair tissues",
        explanation: "The main function of proteins is to build and repair tissues."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the main function of fats?",
        type: "short_answer",
        answer_key: "Provide energy",
        explanation: "Fats provide energy and support cell function."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the function of vitamins?",
        type: "short_answer",
        answer_key: "Regulate body processes",
        explanation: "Vitamins regulate body processes."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Why is water essential?",
        type: "short_answer",
        answer_key: "It regulates body temperature",
        explanation: "Water regulates body temperature and supports many functions."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is malnutrition?",
        type: "short_answer",
        answer_key: "A condition caused by poor nutrition",
        explanation: "Malnutrition is a condition caused by poor nutrition."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is food safety?",
        type: "short_answer",
        answer_key: "Practices to prevent foodborne illness",
        explanation: "Food safety is practices to prevent foodborne illness."
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
        "Understand food and nutrition",
        "Explain the six classes of nutrients",
        "Describe a balanced diet",
        "Understand malnutrition and food safety"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is food and nutrition?" },
        { time: "5-10 min", activity: "Direct Instruction - Classes of Nutrients" },
        { time: "10-15 min", activity: "Direct Instruction - Balanced Diet" },
        { time: "15-20 min", activity: "Direct Instruction - Food Groups" },
        { time: "20-25 min", activity: "Direct Instruction - Malnutrition" },
        { time: "25-30 min", activity: "Direct Instruction - Nutrition and Health" },
        { time: "30-35 min", activity: "Direct Instruction - Food Safety" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The process of obtaining and using food for health",
        prac_002: "6",
        prac_003: "A diet with all essential nutrients",
        prac_004: "Provide energy",
        prac_005: "Build and repair tissues",
        prac_006: "Provide energy",
        prac_007: "Regulate body processes",
        prac_008: "It regulates body temperature",
        prac_009: "A category of foods with similar properties",
        prac_010: "It significantly affects health",
        prac_011: "A condition caused by poor nutrition",
        prac_012: "They increase and decrease at different life stages",
        prac_013: "Practices to prevent foodborne illness",
        prac_014: "It strengthens the immune system",
        prac_015: "Access to sufficient, safe, and nutritious food"
      },
      assessment: {
        ass_001: "The process of obtaining and using food for health",
        ass_002: "6",
        ass_003: "A diet with all essential nutrients",
        ass_004: "Provide energy",
        ass_005: "Build and repair tissues",
        ass_006: "Provide energy",
        ass_007: "Regulate body processes",
        ass_008: "It regulates body temperature",
        ass_009: "A condition caused by poor nutrition",
        ass_010: "Practices to prevent foodborne illness"
      }
    },
    extensionActivities: [
      "Plan a balanced meal",
      "Research food safety practices",
      "Study nutrition in different cultures",
      "Investigate malnutrition in Nigeria"
    ],
    differentiation: {
      struggling: [
        "Focus on basic nutrients",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research micronutrients",
        "Study nutrition science",
        "Research global nutrition issues",
        "Study food technology"
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
      title: "Six Classes of Nutrients",
      description: "Diagram showing six classes of nutrients",
      url: "/diagrams/six-classes-nutrients.png",
      alt: "Six classes of nutrients diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Balanced Diet",
      description: "Diagram showing a balanced diet",
      url: "/diagrams/balanced-diet.png",
      alt: "Balanced diet diagram"
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