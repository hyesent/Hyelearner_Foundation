// Location: src/data/lessons/health/health_science.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "health_lesson_health_science",
  subject: "Health Science",
  topic: "Health Science",
  name: "Health Science",
  icon: "🏥",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 26,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic biology",
    "Knowledge of human body systems",
    "Interest in health and wellness",
    "Basic scientific knowledge"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Physical Education",
      file: "health/physical_education.js"
    },
    {
      name: "Home Economics",
      file: "health/home_economics.js"
    },
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
      description: "Define health science and explain its importance",
      indicator: "Student can explain what health science is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the dimensions of health",
      indicator: "Student can describe physical, mental, and social health"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of wellness",
      indicator: "Student can describe what wellness means"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the importance of personal hygiene",
      indicator: "Student can describe good hygiene practices"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the principles of nutrition",
      indicator: "Student can explain balanced diet and nutrition"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the importance of physical activity",
      indicator: "Student can describe the benefits of exercise"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the effects of stress on health",
      indicator: "Student can explain how stress affects the body"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the importance of sleep and rest",
      indicator: "Student can describe why sleep is essential"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe common infectious diseases",
      indicator: "Student can explain how diseases spread and are prevented"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concept of public health",
      indicator: "Student can describe public health and its importance"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the impact of lifestyle on health",
      indicator: "Student can discuss how lifestyle affects health"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the importance of health education",
      indicator: "Student can discuss why health education is essential"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the healthcare system",
      indicator: "Student can explain how healthcare is organized"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of disease prevention",
      indicator: "Student can describe methods of preventing disease"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of health in community development",
      indicator: "Student can discuss the relationship between health and community development"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of health promotion",
      indicator: "Student can describe health promotion strategies"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Describe global health issues",
      indicator: "Student can discuss global health challenges"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the future of health science",
      indicator: "Student can discuss emerging trends in health science"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Health Science - The Foundation of Well-being",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about health science, dimensions of health, and how to maintain well-being."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Health Science</h2>
      <p><strong>Health science</strong> is the study of health, wellness, and the factors that affect human health. It encompasses physical, mental, and social well-being. Health science is essential for understanding how to prevent disease, promote health, and improve quality of life.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏥 Key Concepts</h3>
          <ul>
            <li>✓ Dimensions of Health</li>
            <li>✓ Wellness</li>
            <li>✓ Personal Hygiene</li>
            <li>✓ Nutrition</li>
            <li>✓ Physical Activity</li>
            <li>✓ Disease Prevention</li>
            <li>✓ Public Health</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Health is more than the absence of disease</li>
            <li>• Lifestyle affects health significantly</li>
            <li>• Regular exercise reduces disease risk</li>
            <li>• Good nutrition is essential</li>
            <li>• Mental health is as important as physical health</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Health Science Matters</h4>
        <p>Health science helps us understand how to live healthier lives, prevent disease, and improve the well-being of individuals and communities.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Health Science?",
        objective: "obj_001",
        text: `
          <h3>Understanding Health Science</h3>
          <p><strong>Health science</strong> is the study of health, wellness, and the factors that influence human health and well-being.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Areas</h4>
              <ul>
                <li>• <strong>Physical health:</strong> Body functions</li>
                <li>• <strong>Mental health:</strong> Psychological well-being</li>
                <li>• <strong>Social health:</strong> Relationships</li>
                <li>• <strong>Environmental health:</strong> Surroundings</li>
                <li>• <strong>Public health:</strong> Community health</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Disease prevention</li>
                <li>• Health promotion</li>
                <li>• Quality of life</li>
                <li>• Economic productivity</li>
                <li>• Community well-being</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Dimensions of Health",
        objective: "obj_002",
        text: `
          <h3>Dimensions of Health</h3>
          <p>Health has several dimensions that are interconnected.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Physical Health</h4>
              <ul>
                <li>• Body functions</li>
                <li>• Fitness and nutrition</li>
                <li>• Sleep and rest</li>
                <li>• Disease prevention</li>
                <li>• Regular exercise</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mental Health</h4>
              <ul>
                <li>• Emotional well-being</li>
                <li>• Stress management</li>
                <li>• Self-esteem</li>
                <li>• Cognitive function</li>
                <li>• Coping skills</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Social Health</h4>
              <ul>
                <li>• Relationships</li>
                <li>• Communication</li>
                <li>• Community involvement</li>
                <li>• Social support</li>
                <li>• Interpersonal skills</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Spiritual Health</h4>
              <ul>
                <li>• Purpose and meaning</li>
                <li>• Values and beliefs</li>
                <li>• Inner peace</li>
                <li>• Personal growth</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Environmental Health</h4>
              <ul>
                <li>• Surroundings</li>
                <li>• Air and water quality</li>
                <li>• Safety</li>
                <li>• Sustainable practices</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Personal Hygiene",
        objective: "obj_004",
        text: `
          <h3>Personal Hygiene</h3>
          <p><strong>Personal hygiene</strong> is the practice of maintaining cleanliness and health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Practices</h4>
              <ul>
                <li>• <strong>Hand washing:</strong> Prevents infection</li>
                <li>• <strong>Bathing:</strong> Removes dirt and bacteria</li>
                <li>• <strong>Oral hygiene:</strong> Brushing and flossing</li>
                <li>• <strong>Hair care:</strong> Washing and grooming</li>
                <li>• <strong>Nail care:</strong> Clean and trimmed</li>
                <li>• <strong>Foot care:</strong> Clean and dry</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Prevents disease</li>
                <li>• Promotes health</li>
                <li>• Boosts confidence</li>
                <li>• Social acceptance</li>
                <li>• Overall well-being</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Nutrition and Health",
        objective: "obj_005",
        text: `
          <h3>Nutrition and Health</h3>
          <p><strong>Nutrition</strong> is the process of providing the body with the nutrients it needs for health and growth.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Nutrients</h4>
              <ul>
                <li>• <strong>Carbohydrates:</strong> Energy</li>
                <li>• <strong>Proteins:</strong> Growth and repair</li>
                <li>• <strong>Fats:</strong> Energy and cell function</li>
                <li>• <strong>Vitamins:</strong> Metabolism</li>
                <li>• <strong>Minerals:</strong> Body functions</li>
                <li>• <strong>Water:</strong> Hydration</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Balanced Diet</h4>
              <ul>
                <li>• Variety of foods</li>
                <li>• Fruits and vegetables</li>
                <li>• Whole grains</li>
                <li>• Lean proteins</li>
                <li>• Limit sugar and salt</li>
                <li>• Adequate water intake</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Physical Activity",
        objective: "obj_006",
        text: `
          <h3>Physical Activity</h3>
          <p><strong>Physical activity</strong> is any movement that uses energy and benefits health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• <strong>Physical:</strong> Stronger muscles and bones</li>
                <li>• <strong>Mental:</strong> Reduces stress</li>
                <li>• <strong>Weight:</strong> Maintains healthy weight</li>
                <li>• <strong>Heart:</strong> Cardiovascular health</li>
                <li>• <strong>Diabetes:</strong> Prevents type 2 diabetes</li>
                <li>• <strong>Immunity:</strong> Boosts immune system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Recommendations</h4>
              <ul>
                <li>• 150 minutes of moderate activity per week</li>
                <li>• Aerobic exercises: Walking, running</li>
                <li>• Strength training: Resistance exercises</li>
                <li>• Flexibility exercises: Stretching</li>
                <li>• Balance exercises: Stability</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Stress and Health",
        objective: "obj_007",
        text: `
          <h3>Stress and Health</h3>
          <p><strong>Stress</strong> is the body's response to demands and pressures.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Effects of Stress</h4>
              <ul>
                <li>• <strong>Physical:</strong> Headaches, fatigue</li>
                <li>• <strong>Mental:</strong> Anxiety, depression</li>
                <li>• <strong>Behavioral:</strong> Overeating, sleep problems</li>
                <li>• <strong>Immune:</strong> Weakened immunity</li>
                <li>• <strong>Cardiovascular:</strong> Heart disease risk</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Stress Management</h4>
              <ul>
                <li>• <strong>Exercise:</strong> Regular physical activity</li>
                <li>• <strong>Relaxation:</strong> Deep breathing, meditation</li>
                <li>• <strong>Sleep:</strong> Adequate rest</li>
                <li>• <strong>Social support:</strong> Friends and family</li>
                <li>• <strong>Time management:</strong> Prioritizing tasks</li>
                <li>• <strong>Hobbies:</strong> Enjoyable activities</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Sleep and Health",
        objective: "obj_008",
        text: `
          <h3>Sleep and Health</h3>
          <p><strong>Sleep</strong> is essential for physical and mental health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Benefits of Sleep</h4>
              <ul>
                <li>• Restores energy</li>
                <li>• Repairs tissues</li>
                <li>• Strengthens immune system</li>
                <li>• Improves memory</li>
                <li>• Regulates hormones</li>
                <li>• Enhances mood</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Tips for Better Sleep</h4>
              <ul>
                <li>• Regular sleep schedule</li>
                <li>• Comfortable sleep environment</li>
                <li>• Avoid caffeine and screen time</li>
                <li>• Exercise regularly</li>
                <li>• Relax before bed</li>
                <li>• 7-9 hours per night</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Disease Prevention",
        objective: "obj_014",
        text: `
          <h3>Disease Prevention</h3>
          <p><strong>Disease prevention</strong> is the practice of avoiding disease and maintaining health.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Prevention Strategies</h4>
              <ul>
                <li>• <strong>Vaccination:</strong> Immunization</li>
                <li>• <strong>Healthy diet:</strong> Nutrition</li>
                <li>• <strong>Exercise:</strong> Physical activity</li>
                <li>• <strong>Hygiene:</strong> Personal cleanliness</li>
                <li>• <strong>Regular check-ups:</strong> Health screenings</li>
                <li>• <strong>Avoid harmful habits:</strong> Smoking, excessive alcohol</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Diseases</h4>
              <ul>
                <li>• <strong>Infectious:</strong> Malaria, tuberculosis</li>
                <li>• <strong>Non-communicable:</strong> Diabetes, hypertension</li>
                <li>• <strong>Lifestyle-related:</strong> Heart disease, obesity</li>
                <li>• <strong>Preventable:</strong> Many diseases are preventable</li>
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
          <h4>🏥 Health Science</h4>
          <ul>
            <li>• Dimensions: physical, mental, social, spiritual, environmental</li>
            <li>• Personal hygiene prevents disease</li>
            <li>• Nutrition and exercise are essential</li>
            <li>• Stress management is important</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Sleep is essential for health</li>
            <li>• Disease prevention saves lives</li>
            <li>• Public health promotes community well-being</li>
            <li>• Health education empowers individuals</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Health is a state of complete physical, mental, and social well-being. It is a resource for everyday life.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Health is only about physical well-being",
        correction: "Health includes mental and social well-being",
        explanation: "Health is a holistic concept that includes physical, mental, and social dimensions."
      },
      {
        id: "mis_002",
        misconception: "Disease is unavoidable",
        correction: "Many diseases are preventable",
        explanation: "Lifestyle choices and prevention strategies can reduce disease risk."
      },
      {
        id: "mis_003",
        misconception: "Stress is always bad",
        correction: "Some stress can be motivating",
        explanation: "Moderate stress can improve performance; chronic stress is harmful."
      },
      {
        id: "mis_004",
        misconception: "Health is only an individual responsibility",
        correction: "Health is also a community and public responsibility",
        explanation: "Public health and community support are essential for health."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Health",
        description: "Health science helps improve personal health.",
        example: "Healthy eating, exercise, stress management"
      },
      {
        id: "app_002",
        title: "Public Health",
        description: "Health science supports public health.",
        example: "Disease prevention, health promotion"
      },
      {
        id: "app_003",
        title: "Healthcare",
        description: "Health science is the foundation of healthcare.",
        example: "Medical treatment, health services"
      },
      {
        id: "app_004",
        title: "Community Development",
        description: "Health science supports community development.",
        example: "Health programs, community health"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Health Science", definition: "The study of health, wellness, and factors affecting health." },
    { term: "Physical Health", definition: "The condition of the body." },
    { term: "Mental Health", definition: "Psychological and emotional well-being." },
    { term: "Social Health", definition: "The ability to form and maintain relationships." },
    { term: "Wellness", definition: "An active process of becoming aware of and making choices toward health." },
    { term: "Nutrition", definition: "The process of providing the body with nutrients." },
    { term: "Hygiene", definition: "Practices that maintain health and prevent disease." },
    { term: "Physical Activity", definition: "Any movement that uses energy." },
    { term: "Stress", definition: "The body's response to demands and pressures." },
    { term: "Disease Prevention", definition: "Practices to avoid disease." },
    { term: "Public Health", definition: "Health of populations." },
    { term: "Health Education", definition: "Teaching about health." },
    { term: "Healthcare", definition: "Services for maintaining health." },
    { term: "Immunization", definition: "Vaccination to prevent disease." },
    { term: "Balanced Diet", definition: "A diet with all essential nutrients." },
    { term: "Sleep", definition: "A state of rest." },
    { term: "Hygiene", definition: "Cleanliness practices." },
    { term: "Infection", definition: "Invasion of the body by pathogens." },
    { term: "Lifestyle", definition: "The way a person lives." },
    { term: "Well-being", definition: "A state of being healthy and happy." }
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
      question: "What is health science?",
      type: "multiple_choice",
      options: [
        "The study of disease only",
        "The study of health, wellness, and factors affecting health",
        "The study of medicine",
        "The study of exercise"
      ],
      answer: "The study of health, wellness, and factors affecting health",
      explanation: "Health science is the study of health, wellness, and factors affecting health."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the dimensions of health?",
      type: "multiple_choice",
      options: [
        "Physical and mental only",
        "Physical, mental, and social",
        "Physical only",
        "Mental and social only"
      ],
      answer: "Physical, mental, and social",
      explanation: "The dimensions of health include physical, mental, and social health."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is wellness?",
      type: "multiple_choice",
      options: [
        "The absence of disease",
        "An active process of making choices toward health",
        "Only physical health",
        "Only mental health"
      ],
      answer: "An active process of making choices toward health",
      explanation: "Wellness is an active process of making choices toward health."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the importance of hand washing?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It prevents the spread of infection",
        "It only improves appearance",
        "It is optional"
      ],
      answer: "It prevents the spread of infection",
      explanation: "Hand washing prevents the spread of infection."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a balanced diet?",
      type: "multiple_choice",
      options: [
        "Eating only proteins",
        "A diet with all essential nutrients",
        "Eating only fruits",
        "Eating only carbohydrates"
      ],
      answer: "A diet with all essential nutrients",
      explanation: "A balanced diet contains all essential nutrients."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a benefit of physical activity?",
      type: "multiple_choice",
      options: [
        "Weight gain",
        "Reduced stress",
        "Increased fatigue",
        "Lower energy"
      ],
      answer: "Reduced stress",
      explanation: "Physical activity helps reduce stress."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a effect of stress?",
      type: "multiple_choice",
      options: [
        "Improved health",
        "Headaches and fatigue",
        "Better sleep",
        "Increased energy"
      ],
      answer: "Headaches and fatigue",
      explanation: "Stress can cause headaches and fatigue."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Why is sleep important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It restores energy and repairs tissues",
        "It only affects children",
        "It only affects older people"
      ],
      answer: "It restores energy and repairs tissues",
      explanation: "Sleep restores energy and repairs tissues."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How do infectious diseases spread?",
      type: "multiple_choice",
      options: [
        "Through the air",
        "Through contact",
        "Through contaminated food and water",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Infectious diseases spread through air, contact, and contaminated food and water."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is public health?",
      type: "multiple_choice",
      options: [
        "Individual health only",
        "The health of populations",
        "Only hospital care",
        "Only disease treatment"
      ],
      answer: "The health of populations",
      explanation: "Public health is the health of populations."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "How does lifestyle affect health?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It significantly affects health",
        "It only affects appearance",
        "It only affects mood"
      ],
      answer: "It significantly affects health",
      explanation: "Lifestyle significantly affects health."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is health education important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It empowers individuals to make healthy choices",
        "It only benefits children",
        "It only benefits adults"
      ],
      answer: "It empowers individuals to make healthy choices",
      explanation: "Health education empowers individuals to make healthy choices."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is a healthcare system?",
      type: "multiple_choice",
      options: [
        "A system for treating disease only",
        "The organization of health services",
        "Only hospitals",
        "Only doctors"
      ],
      answer: "The organization of health services",
      explanation: "A healthcare system is the organization of health services."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is disease prevention?",
      type: "multiple_choice",
      options: [
        "Treating disease",
        "Practices to avoid disease",
        "Only vaccination",
        "Only exercise"
      ],
      answer: "Practices to avoid disease",
      explanation: "Disease prevention is practices to avoid disease."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does health affect community development?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "Healthy communities are more productive",
        "It only affects individuals",
        "It only affects children"
      ],
      answer: "Healthy communities are more productive",
      explanation: "Healthy communities are more productive and develop faster."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_health_science",
    title: "Health Science Quiz",
    description: "Test your understanding of health science",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is health science?",
        type: "short_answer",
        answer_key: "The study of health, wellness, and factors affecting health",
        explanation: "Health science is the study of health, wellness, and factors affecting health."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the dimensions of health?",
        type: "short_answer",
        answer_key: "Physical, mental, and social",
        explanation: "The dimensions of health include physical, mental, and social health."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is wellness?",
        type: "short_answer",
        answer_key: "An active process of making choices toward health",
        explanation: "Wellness is an active process of making choices toward health."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the importance of hand washing?",
        type: "short_answer",
        answer_key: "It prevents the spread of infection",
        explanation: "Hand washing prevents the spread of infection."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a balanced diet?",
        type: "short_answer",
        answer_key: "A diet with all essential nutrients",
        explanation: "A balanced diet contains all essential nutrients."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a benefit of physical activity?",
        type: "short_answer",
        answer_key: "Reduced stress (or any valid)",
        explanation: "Physical activity helps reduce stress."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is an effect of stress?",
        type: "short_answer",
        answer_key: "Headaches and fatigue",
        explanation: "Stress can cause headaches and fatigue."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Why is sleep important?",
        type: "short_answer",
        answer_key: "It restores energy and repairs tissues",
        explanation: "Sleep restores energy and repairs tissues."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "How do infectious diseases spread?",
        type: "short_answer",
        answer_key: "Through air, contact, and contaminated food and water",
        explanation: "Infectious diseases spread through air, contact, and contaminated food and water."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is public health?",
        type: "short_answer",
        answer_key: "The health of populations",
        explanation: "Public health is the health of populations."
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
        "Understand health science and its dimensions",
        "Explain personal hygiene and nutrition",
        "Describe physical activity and stress management",
        "Understand disease prevention and public health"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is health science?" },
        { time: "5-10 min", activity: "Direct Instruction - Dimensions of Health" },
        { time: "10-15 min", activity: "Direct Instruction - Personal Hygiene" },
        { time: "15-20 min", activity: "Direct Instruction - Nutrition" },
        { time: "20-25 min", activity: "Direct Instruction - Physical Activity" },
        { time: "25-30 min", activity: "Direct Instruction - Stress and Sleep" },
        { time: "30-35 min", activity: "Direct Instruction - Disease Prevention" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of health, wellness, and factors affecting health",
        prac_002: "Physical, mental, and social",
        prac_003: "An active process of making choices toward health",
        prac_004: "It prevents the spread of infection",
        prac_005: "A diet with all essential nutrients",
        prac_006: "Reduced stress",
        prac_007: "Headaches and fatigue",
        prac_008: "It restores energy and repairs tissues",
        prac_009: "All of the above",
        prac_010: "The health of populations",
        prac_011: "It significantly affects health",
        prac_012: "It empowers individuals to make healthy choices",
        prac_013: "The organization of health services",
        prac_014: "Practices to avoid disease",
        prac_015: "Healthy communities are more productive"
      },
      assessment: {
        ass_001: "The study of health, wellness, and factors affecting health",
        ass_002: "Physical, mental, and social",
        ass_003: "An active process of making choices toward health",
        ass_004: "It prevents the spread of infection",
        ass_005: "A diet with all essential nutrients",
        ass_006: "Reduced stress (or any valid)",
        ass_007: "Headaches and fatigue",
        ass_008: "It restores energy and repairs tissues",
        ass_009: "Through air, contact, and contaminated food and water",
        ass_010: "The health of populations"
      }
    },
    extensionActivities: [
      "Research a public health issue",
      "Create a personal health plan",
      "Study a disease prevention program",
      "Research healthcare in Nigeria"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research public health policy",
        "Study epidemiology",
        "Research global health issues",
        "Study health promotion"
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
      title: "Dimensions of Health",
      description: "Diagram showing dimensions of health",
      url: "/diagrams/dimensions-of-health.png",
      alt: "Dimensions of health diagram"
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
      title: "Stress Management",
      description: "Diagram showing stress management techniques",
      url: "/diagrams/stress-management.png",
      alt: "Stress management diagram"
    }
  ]
};