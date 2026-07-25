// Location: src/data/lessons/health/physical_education.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "health_lesson_physical_education",
  subject: "Physical Education",
  topic: "Physical Education",
  name: "Physical Education",
  icon: "🏃",
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
    "Interest in physical activity",
    "Basic understanding of the human body",
    "Willingness to participate"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
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
      description: "Define physical education and explain its importance",
      indicator: "Student can explain what physical education is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the components of physical fitness",
      indicator: "Student can list the components of physical fitness"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the benefits of regular physical activity",
      indicator: "Student can describe the benefits of exercise"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the different types of exercises",
      indicator: "Student can distinguish between aerobic, anaerobic, and flexibility exercises"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the importance of warm-up and cool-down",
      indicator: "Student can describe why warm-up and cool-down are important"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the principles of training",
      indicator: "Student can explain FITT and overload principles"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of sportsmanship",
      indicator: "Student can describe what sportsmanship means"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the rules and skills of common sports",
      indicator: "Student can explain basic rules of football, basketball, and other sports"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of safety in physical activities",
      indicator: "Student can describe safety measures in sports"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the relationship between physical activity and health",
      indicator: "Student can discuss how physical activity affects health"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of physical fitness assessment",
      indicator: "Student can describe how fitness is measured"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of nutrition in physical performance",
      indicator: "Student can explain how nutrition affects athletic performance"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of mental preparation in sports",
      indicator: "Student can describe mental aspects of sports performance"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the role of physical education in schools",
      indicator: "Student can discuss the importance of PE in education"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe the career opportunities in physical education",
      indicator: "Student can identify careers related to physical education"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the future of physical education",
      indicator: "Student can discuss emerging trends in physical education"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Physical Education - Building Healthy Bodies and Minds",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about physical education, fitness, sports, and the importance of physical activity."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Physical Education</h2>
      <p><strong>Physical education</strong> is the teaching of physical fitness, sports, and health-related knowledge. It helps individuals develop the skills, knowledge, and attitudes necessary for a healthy, active lifestyle. Physical education is essential for physical, mental, and social development.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏃 Key Concepts</h3>
          <ul>
            <li>✓ Physical Fitness</li>
            <li>✓ Components of Fitness</li>
            <li>✓ Types of Exercise</li>
            <li>✓ Sports Skills</li>
            <li>✓ Training Principles</li>
            <li>✓ Safety in Sports</li>
            <li>✓ Sportsmanship</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Physical activity reduces disease risk</li>
            <li>• Exercise improves mental health</li>
            <li>• Team sports build social skills</li>
            <li>• Nigeria has many traditional sports</li>
            <li>• Physical education is part of the school curriculum</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Physical Education Matters</h4>
        <p>Physical education promotes lifelong health, develops physical skills, and builds social and emotional well-being.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Physical Education?",
        objective: "obj_001",
        text: `
          <h3>Understanding Physical Education</h3>
          <p><strong>Physical education</strong> is the study and practice of physical activity, fitness, and health. It prepares individuals for a lifetime of physical activity and well-being.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Physical fitness:</strong> Health and skill-related</li>
                <li>• <strong>Sports skills:</strong> Movement and coordination</li>
                <li>• <strong>Health knowledge:</strong> Understanding the body</li>
                <li>• <strong>Social skills:</strong> Teamwork and sportsmanship</li>
                <li>• <strong>Lifelong activity:</strong> Encouraging active living</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Health promotion</li>
                <li>• Skill development</li>
                <li>• Social development</li>
                <li>• Mental well-being</li>
                <li>• Academic performance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Components of Physical Fitness",
        objective: "obj_002",
        text: `
          <h3>Components of Physical Fitness</h3>
          <p>Physical fitness has two main categories: health-related and skill-related.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Health-Related Fitness</h4>
              <ul>
                <li>• <strong>Cardiovascular endurance:</strong> Heart and lungs</li>
                <li>• <strong>Muscular strength:</strong> Maximum force</li>
                <li>• <strong>Muscular endurance:</strong> Repeated contractions</li>
                <li>• <strong>Flexibility:</strong> Range of motion</li>
                <li>• <strong>Body composition:</strong> Body fat percentage</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Skill-Related Fitness</h4>
              <ul>
                <li>• <strong>Agility:</strong> Change direction quickly</li>
                <li>• <strong>Balance:</strong> Maintain stability</li>
                <li>• <strong>Coordination:</strong> Movement control</li>
                <li>• <strong>Power:</strong> Force and speed</li>
                <li>• <strong>Reaction time:</strong> Quick responses</li>
                <li>• <strong>Speed:</strong> Move quickly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Types of Exercise",
        objective: "obj_004",
        text: `
          <h3>Types of Exercise</h3>
          <p>Different types of exercise serve different purposes.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Aerobic Exercise</h4>
              <ul>
                <li>• Uses oxygen</li>
                <li>• Improves cardiovascular endurance</li>
                <li>• Examples:</li>
                <li>• Running</li>
                <li>• Swimming</li>
                <li>• Cycling</li>
                <li>• Walking</li>
                <li>• Dancing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Anaerobic Exercise</h4>
              <ul>
                <li>• Without oxygen</li>
                <li>• Builds strength and power</li>
                <li>• Examples:</li>
                <li>• Weight lifting</li>
                <li>• Sprinting</li>
                <li>• Jumping</li>
                <li>• Push-ups</li>
                <li>• Squats</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Flexibility Exercise</h4>
              <ul>
                <li>• Stretching</li>
                <li>• Improves range of motion</li>
                <li>• Examples:</li>
                <li>• Yoga</li>
                <li>• Pilates</li>
                <li>• Stretching routines</li>
                <li>• Warm-up exercises</li>
                <li>• Cool-down exercises</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Training Principles",
        objective: "obj_006",
        text: `
          <h3>Principles of Training</h3>
          <p>Training follows key principles to be effective.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 FITT Principle</h4>
              <ul>
                <li>• <strong>Frequency:</strong> How often</li>
                <li>• <strong>Intensity:</strong> How hard</li>
                <li>• <strong>Time:</strong> How long</li>
                <li>• <strong>Type:</strong> What kind</li>
                <li>• Used to design programs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Other Principles</h4>
              <ul>
                <li>• <strong>Overload:</strong> Training harder than normal</li>
                <li>• <strong>Progression:</strong> Gradually increasing</li>
                <li>• <strong>Specificity:</strong> Training for specific goals</li>
                <li>• <strong>Reversibility:</strong> Use it or lose it</li>
                <li>• <strong>Recovery:</strong> Rest and repair</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Warm-up and Cool-down",
        objective: "obj_005",
        text: `
          <h3>Warm-up and Cool-down</h3>
          <p><strong>Warm-up</strong> prepares the body for exercise. <strong>Cool-down</strong> helps the body recover.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Warm-up</h4>
              <ul>
                <li>• <strong>Purpose:</strong> Prepare the body</li>
                <li>• <strong>Activities:</strong> Light jogging, stretching</li>
                <li>• <strong>Benefits:</strong></li>
                <li>• Increases blood flow</li>
                <li>• Raises body temperature</li>
                <li>• Prevents injury</li>
                <li>• Improves performance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Cool-down</h4>
              <ul>
                <li>• <strong>Purpose:</strong> Recovery</li>
                <li>• <strong>Activities:</strong> Gentle jogging, stretching</li>
                <li>• <strong>Benefits:</strong></li>
                <li>• Gradual heart rate decrease</li>
                <li>• Prevents muscle stiffness</li>
                <li>• Removes waste products</li>
                <li>• Promotes recovery</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sports and Sportsmanship",
        objective: "obj_007",
        text: `
          <h3>Sports and Sportsmanship</h3>
          <p><strong>Sportsmanship</strong> is the ethical and fair behavior in sports.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Fair play:</strong> Following rules</li>
                <li>• <strong>Respect:</strong> For opponents and officials</li>
                <li>• <strong>Integrity:</strong> Honesty</li>
                <li>• <strong>Humility:</strong> In victory</li>
                <li>• <strong>Grace:</strong> In defeat</li>
                <li>• <strong>Teamwork:</strong> Cooperation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Sports</h4>
              <ul>
                <li>• <strong>Football:</strong> Soccer</li>
                <li>• <strong>Basketball:</strong> Team sport</li>
                <li>• <strong>Athletics:</strong> Track and field</li>
                <li>• <strong>Swimming:</strong> Water sport</li>
                <li>• <strong>Volleyball:</strong> Team sport</li>
                <li>• <strong>Traditional sports:</strong> Local games</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Safety in Physical Activities",
        objective: "obj_009",
        text: `
          <h3>Safety in Physical Activities</h3>
          <p>Safety is essential in all physical activities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Safety Measures</h4>
              <ul>
                <li>• <strong>Proper equipment:</strong> Use the right gear</li>
                <li>• <strong>Warm-up:</strong> Prepare the body</li>
                <li>• <strong>Hydration:</strong> Drink water</li>
                <li>• <strong>Rest:</strong> Allow recovery</li>
                <li>• <strong>First aid:</strong> Know emergency procedures</li>
                <li>• <strong>Environment:</strong> Safe surroundings</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Injuries</h4>
              <ul>
                <li>• <strong>Sprains:</strong> Ligament injuries</li>
                <li>• <strong>Strains:</strong> Muscle injuries</li>
                <li>• <strong>Fractures:</strong> Broken bones</li>
                <li>• <strong>Concussions:</strong> Head injuries</li>
                <li>• <strong>Prevention:</strong> Proper technique</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Nutrition and Performance",
        objective: "obj_012",
        text: `
          <h3>Nutrition and Physical Performance</h3>
          <p>Nutrition plays a key role in athletic performance.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Nutrients</h4>
              <ul>
                <li>• <strong>Carbohydrates:</strong> Energy</li>
                <li>• <strong>Proteins:</strong> Muscle repair</li>
                <li>• <strong>Fats:</strong> Energy and health</li>
                <li>• <strong>Water:</strong> Hydration</li>
                <li>• <strong>Vitamins and minerals:</strong> Health</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Hydration</h4>
              <ul>
                <li>• <strong>Before exercise:</strong> Drink water</li>
                <li>• <strong>During exercise:</strong> Stay hydrated</li>
                <li>• <strong>After exercise:</strong> Replace fluids</li>
                <li>• <strong>Sports drinks:</strong> For endurance</li>
                <li>• <strong>Dehydration:</strong> Affects performance</li>
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
          <h4>🏃 Physical Education</h4>
          <ul>
            <li>• Components of physical fitness</li>
            <li>• Types of exercise: aerobic, anaerobic, flexibility</li>
            <li>• Training principles: FITT, overload, progression</li>
            <li>• Warm-up and cool-down are essential</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Sportsmanship and fair play</li>
            <li>• Safety in physical activities</li>
            <li>• Nutrition and hydration</li>
            <li>• Lifelong physical activity</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Physical education promotes lifelong health, fitness, and well-being. It develops the whole person.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Physical education is only about sports",
        correction: "Physical education includes fitness, health, and lifelong activity",
        explanation: "Physical education covers fitness, health knowledge, and lifelong skills."
      },
      {
        id: "mis_002",
        misconception: "Only athletes need physical education",
        correction: "Everyone benefits from physical education",
        explanation: "Physical education is important for all individuals."
      },
      {
        id: "mis_003",
        misconception: "Exercise is only for weight loss",
        correction: "Exercise has many health benefits beyond weight loss",
        explanation: "Exercise improves cardiovascular health, mental health, and overall well-being."
      },
      {
        id: "mis_004",
        misconception: "Stretching before exercise prevents all injuries",
        correction: "Proper warm-up and technique are also important",
        explanation: "A complete warm-up includes light activity and stretching."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Fitness",
        description: "Physical education helps improve personal fitness.",
        example: "Exercise programs, fitness goals"
      },
      {
        id: "app_002",
        title: "Sports Participation",
        description: "Physical education develops sports skills.",
        example: "Team sports, individual sports"
      },
      {
        id: "app_003",
        title: "Health Promotion",
        description: "Physical education promotes health.",
        example: "Disease prevention, healthy lifestyles"
      },
      {
        id: "app_004",
        title: "Career Opportunities",
        description: "Physical education leads to careers.",
        example: "Coaching, teaching, fitness training"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Physical Education", definition: "The teaching of physical fitness, sports, and health knowledge." },
    { term: "Physical Fitness", definition: "The ability to perform physical activity." },
    { term: "Cardiovascular Endurance", definition: "The ability of the heart and lungs to work efficiently." },
    { term: "Muscular Strength", definition: "The maximum force a muscle can produce." },
    { term: "Flexibility", definition: "The range of motion around a joint." },
    { term: "Aerobic Exercise", definition: "Exercise that uses oxygen." },
    { term: "Anaerobic Exercise", definition: "Exercise without oxygen." },
    { term: "Warm-up", definition: "Preparing the body for exercise." },
    { term: "Cool-down", definition: "Allowing the body to recover after exercise." },
    { term: "FITT Principle", definition: "Frequency, Intensity, Time, Type." },
    { term: "Overload", definition: "Training harder than normal." },
    { term: "Progression", definition: "Gradually increasing training." },
    { term: "Sportsmanship", definition: "Ethical and fair behavior in sports." },
    { term: "Teamwork", definition: "Working together as a group." },
    { term: "Hydration", definition: "Maintaining fluid balance." },
    { term: "Agility", definition: "The ability to change direction quickly." },
    { term: "Balance", definition: "The ability to maintain stability." },
    { term: "Coordination", definition: "The ability to control movement." },
    { term: "Power", definition: "The combination of strength and speed." },
    { term: "Reaction Time", definition: "The time to respond to a stimulus." }
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
      question: "What is physical education?",
      type: "multiple_choice",
      options: [
        "The study of sports only",
        "The teaching of physical fitness, sports, and health knowledge",
        "The study of nutrition",
        "The study of medicine"
      ],
      answer: "The teaching of physical fitness, sports, and health knowledge",
      explanation: "Physical education is the teaching of physical fitness, sports, and health knowledge."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a component of physical fitness?",
      type: "multiple_choice",
      options: ["Cardiovascular endurance", "Intelligence", "Creativity", "Knowledge"],
      answer: "Cardiovascular endurance",
      explanation: "Cardiovascular endurance is a component of physical fitness."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a benefit of regular physical activity?",
      type: "multiple_choice",
      options: [
        "Weight gain",
        "Improved mental health",
        "Increased fatigue",
        "Lower energy"
      ],
      answer: "Improved mental health",
      explanation: "Regular physical activity improves mental health."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is aerobic exercise?",
      type: "multiple_choice",
      options: [
        "Exercise that uses oxygen",
        "Exercise without oxygen",
        "Stretching exercises",
        "Strength training"
      ],
      answer: "Exercise that uses oxygen",
      explanation: "Aerobic exercise uses oxygen."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the purpose of a warm-up?",
      type: "multiple_choice",
      options: [
        "To cool down the body",
        "To prepare the body for exercise",
        "To reduce heart rate",
        "To increase fatigue"
      ],
      answer: "To prepare the body for exercise",
      explanation: "A warm-up prepares the body for exercise."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does FITT stand for?",
      type: "multiple_choice",
      options: [
        "Frequency, Intensity, Time, Type",
        "Fitness, Intensity, Time, Type",
        "Frequency, Intensity, Training, Type",
        "Fitness, Intensity, Training, Time"
      ],
      answer: "Frequency, Intensity, Time, Type",
      explanation: "FITT stands for Frequency, Intensity, Time, and Type."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is sportsmanship?",
      type: "multiple_choice",
      options: [
        "Winning at all costs",
        "Ethical and fair behavior in sports",
        "Cheating in sports",
        "Ignoring rules"
      ],
      answer: "Ethical and fair behavior in sports",
      explanation: "Sportsmanship is ethical and fair behavior in sports."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the FITT principle used for?",
      type: "multiple_choice",
      options: [
        "To design training programs",
        "To measure fitness",
        "To diagnose injuries",
        "To evaluate sports"
      ],
      answer: "To design training programs",
      explanation: "The FITT principle is used to design training programs."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is safety important in physical activities?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It prevents injuries",
        "It only matters for children",
        "It only matters for professionals"
      ],
      answer: "It prevents injuries",
      explanation: "Safety prevents injuries in physical activities."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How does physical activity affect health?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It improves health significantly",
        "It only affects weight",
        "It only affects mood"
      ],
      answer: "It improves health significantly",
      explanation: "Physical activity significantly improves health."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is physical fitness assessment?",
      type: "multiple_choice",
      options: [
        "Measuring fitness levels",
        "Playing sports",
        "Eating healthy",
        "Resting"
      ],
      answer: "Measuring fitness levels",
      explanation: "Physical fitness assessment measures fitness levels."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does nutrition affect performance?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It improves performance",
        "It only affects weight",
        "It only affects mood"
      ],
      answer: "It improves performance",
      explanation: "Nutrition improves physical performance."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is mental preparation in sports?",
      type: "multiple_choice",
      options: [
        "Physical training",
        "Psychological readiness",
        "Nutrition planning",
        "Equipment checking"
      ],
      answer: "Psychological readiness",
      explanation: "Mental preparation is psychological readiness."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the role of physical education in schools?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It promotes health and fitness",
        "It only teaches sports",
        "It is optional"
      ],
      answer: "It promotes health and fitness",
      explanation: "Physical education promotes health and fitness in schools."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a career in physical education?",
      type: "multiple_choice",
      options: [
        "Doctor",
        "Physical education teacher",
        "Engineer",
        "Lawyer"
      ],
      answer: "Physical education teacher",
      explanation: "A physical education teacher is a career in physical education."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_physical_education",
    title: "Physical Education Quiz",
    description: "Test your understanding of physical education",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is physical education?",
        type: "short_answer",
        answer_key: "The teaching of physical fitness, sports, and health knowledge",
        explanation: "Physical education is the teaching of physical fitness, sports, and health knowledge."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a component of physical fitness?",
        type: "short_answer",
        answer_key: "Cardiovascular endurance (or any valid)",
        explanation: "Cardiovascular endurance is a component of physical fitness."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a benefit of regular physical activity?",
        type: "short_answer",
        answer_key: "Improved mental health (or any valid)",
        explanation: "Regular physical activity improves mental health."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is aerobic exercise?",
        type: "short_answer",
        answer_key: "Exercise that uses oxygen",
        explanation: "Aerobic exercise uses oxygen."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the purpose of a warm-up?",
        type: "short_answer",
        answer_key: "To prepare the body for exercise",
        explanation: "A warm-up prepares the body for exercise."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What does FITT stand for?",
        type: "short_answer",
        answer_key: "Frequency, Intensity, Time, Type",
        explanation: "FITT stands for Frequency, Intensity, Time, and Type."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is sportsmanship?",
        type: "short_answer",
        answer_key: "Ethical and fair behavior in sports",
        explanation: "Sportsmanship is ethical and fair behavior in sports."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the FITT principle used for?",
        type: "short_answer",
        answer_key: "To design training programs",
        explanation: "The FITT principle is used to design training programs."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Why is safety important in physical activities?",
        type: "short_answer",
        answer_key: "It prevents injuries",
        explanation: "Safety prevents injuries in physical activities."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "How does physical activity affect health?",
        type: "short_answer",
        answer_key: "It improves health significantly",
        explanation: "Physical activity significantly improves health."
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
        "Understand physical education and its importance",
        "Explain components of physical fitness",
        "Describe types of exercise",
        "Understand training principles and safety"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is physical education?" },
        { time: "5-10 min", activity: "Direct Instruction - Components of Fitness" },
        { time: "10-15 min", activity: "Direct Instruction - Types of Exercise" },
        { time: "15-20 min", activity: "Direct Instruction - Training Principles" },
        { time: "20-25 min", activity: "Direct Instruction - Warm-up and Cool-down" },
        { time: "25-30 min", activity: "Direct Instruction - Sports and Sportsmanship" },
        { time: "30-35 min", activity: "Direct Instruction - Safety and Nutrition" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The teaching of physical fitness, sports, and health knowledge",
        prac_002: "Cardiovascular endurance",
        prac_003: "Improved mental health",
        prac_004: "Exercise that uses oxygen",
        prac_005: "To prepare the body for exercise",
        prac_006: "Frequency, Intensity, Time, Type",
        prac_007: "Ethical and fair behavior in sports",
        prac_008: "To design training programs",
        prac_009: "It prevents injuries",
        prac_010: "It improves health significantly",
        prac_011: "Measuring fitness levels",
        prac_012: "It improves performance",
        prac_013: "Psychological readiness",
        prac_014: "It promotes health and fitness",
        prac_015: "Physical education teacher"
      },
      assessment: {
        ass_001: "The teaching of physical fitness, sports, and health knowledge",
        ass_002: "Cardiovascular endurance (or any valid)",
        ass_003: "Improved mental health (or any valid)",
        ass_004: "Exercise that uses oxygen",
        ass_005: "To prepare the body for exercise",
        ass_006: "Frequency, Intensity, Time, Type",
        ass_007: "Ethical and fair behavior in sports",
        ass_008: "To design training programs",
        ass_009: "It prevents injuries",
        ass_010: "It improves health significantly"
      }
    },
    extensionActivities: [
      "Create a personal fitness plan",
      "Research a sport",
      "Study the benefits of exercise",
      "Learn about sports injuries prevention"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research sports science",
        "Study exercise physiology",
        "Research sports psychology",
        "Study coaching methods"
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
      title: "Components of Fitness",
      description: "Diagram showing components of physical fitness",
      url: "/diagrams/components-of-fitness.png",
      alt: "Components of fitness diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "FITT Principle",
      description: "Diagram showing the FITT principle",
      url: "/diagrams/fitt-principle.png",
      alt: "FITT principle diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Types of Exercise",
      description: "Diagram showing types of exercise",
      url: "/diagrams/types-of-exercise.png",
      alt: "Types of exercise diagram"
    }
  ]
};