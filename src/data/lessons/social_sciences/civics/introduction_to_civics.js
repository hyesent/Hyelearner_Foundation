// Location: src/data/lessons/social_sciences/civics/introduction_to_civics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "civics_lesson_introduction",
  subject: "Civics",
  topic: "Introduction to Civics",
  name: "Introduction to Civics",
  icon: "🏛️",
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
    "Understanding of society",
    "Basic knowledge of community",
    "Interest in governance",
    "Awareness of citizenship"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Democratic Processes",
      file: "social_sciences/civics/democratic_processes.js"
    },
    {
      name: "Human Rights",
      file: "social_sciences/civics/human_rights.js"
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
      description: "Define civics and explain its importance",
      indicator: "Student can explain what civics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Define citizenship and explain how it is acquired",
      indicator: "Student can describe what it means to be a citizen"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between rights and responsibilities",
      indicator: "Student can distinguish between rights and responsibilities"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify the fundamental rights of citizens",
      indicator: "Student can list the basic rights of citizens"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the responsibilities of citizens",
      indicator: "Student can describe civic duties and obligations"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the process of citizenship acquisition",
      indicator: "Student can explain how citizenship is obtained"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of rule of law",
      indicator: "Student can describe what rule of law means"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the Nigerian citizenship laws",
      indicator: "Student can explain Nigerian citizenship provisions"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the relationship between citizens and the state",
      indicator: "Student can explain the citizen-state relationship"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the concept of patriotism and nationalism",
      indicator: "Student can discuss the meaning of patriotism"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the importance of civic education",
      indicator: "Student can discuss why civic education is essential"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of the citizen in nation-building",
      indicator: "Student can describe how citizens contribute to nation-building"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the duties of citizens to the state",
      indicator: "Student can list duties owed to the state"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the relationship between rights and duties",
      indicator: "Student can explain how rights and duties are connected"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Introduction to Civics - Rights, Responsibilities, and Citizenship",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about civics, citizenship, rights, and responsibilities."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Civics</h2>
      <p><strong>Civics</strong> is the study of the rights and duties of citizens, the structure and functions of government, and the relationship between individuals and the state. It helps us understand how societies are organized and how we can participate in public life.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🏛️ Key Concepts</h3>
          <ul>
            <li>✓ Citizenship</li>
            <li>✓ Rights and Responsibilities</li>
            <li>✓ Rule of Law</li>
            <li>✓ Patriotism</li>
            <li>✓ Nation-Building</li>
            <li>✓ Civic Education</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The word "civics" comes from the Latin "civis" meaning citizen</li>
            <li>• Nigeria has 36 states and 1 Federal Capital Territory</li>
            <li>• The Nigerian Constitution is the supreme law</li>
            <li>• Citizenship can be acquired by birth or naturalization</li>
            <li>• Civic education helps create responsible citizens</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Civics Matters</h4>
        <p>Civics education helps us become informed and responsible citizens. It enables us to understand our rights, fulfill our duties, and participate effectively in society.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Civics?",
        objective: "obj_001",
        text: `
          <h3>Understanding Civics</h3>
          <p><strong>Civics</strong> is the study of citizenship and government. It covers the rights and responsibilities of citizens, how government works, and how citizens can participate in public life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Citizenship:</strong> Rights and duties</li>
                <li>• <strong>Government:</strong> Structure and functions</li>
                <li>• <strong>Law:</strong> Rules that govern society</li>
                <li>• <strong>Political participation:</strong> Voting, activism</li>
                <li>• <strong>Civil society:</strong> Community organizations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Helps us understand our rights</li>
                <li>• Teaches us our responsibilities</li>
                <li>• Enables effective participation</li>
                <li>• Strengthens democracy</li>
                <li>• Builds informed communities</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Citizenship",
        objective: "obj_002",
        text: `
          <h3>Citizenship</h3>
          <p>A <strong>citizen</strong> is a legal member of a country who has rights, privileges, and responsibilities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Citizenship</h4>
              <ul>
                <li>• <strong>Birthright:</strong> Born in the country</li>
                <li>• <strong>Descent:</strong> Born to citizen parents</li>
                <li>• <strong>Naturalization:</strong> Process of becoming a citizen</li>
                <li>• <strong>Marriage:</strong> Through marriage to a citizen</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Citizenship in Nigeria</h4>
              <ul>
                <li>• Citizenship by birth: Born in Nigeria</li>
                <li>• Citizenship by descent: Born to Nigerian parents</li>
                <li>• Citizenship by naturalization: 15+ years residence</li>
                <li>• Dual citizenship: Allowed in Nigeria</li>
                <li>• Loss of citizenship: Renunciation or deprivation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Rights of Citizens",
        objective: "obj_004",
        text: `
          <h3>Rights of Citizens</h3>
          <p><strong>Rights</strong> are legal, social, or ethical principles of freedom or entitlement.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Rights</h4>
              <ul>
                <li>• <strong>Civil rights:</strong> Freedom of speech, religion</li>
                <li>• <strong>Political rights:</strong> Voting, running for office</li>
                <li>• <strong>Social rights:</strong> Education, healthcare</li>
                <li>• <strong>Economic rights:</strong> Work, fair wages</li>
                <li>• <strong>Legal rights:</strong> Fair trial, equality before law</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rights in the Nigerian Constitution</h4>
              <ul>
                <li>• Right to life</li>
                <li>• Right to dignity of human person</li>
                <li>• Right to personal liberty</li>
                <li>• Right to fair hearing</li>
                <li>• Right to freedom of expression</li>
                <li>• Right to freedom of movement</li>
                <li>• Right to freedom of religion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Responsibilities of Citizens",
        objective: "obj_005",
        text: `
          <h3>Responsibilities of Citizens</h3>
          <p><strong>Responsibilities</strong> are duties that citizens are expected to perform.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Civic Responsibilities</h4>
              <ul>
                <li>• <strong>Voting:</strong> Participate in elections</li>
                <li>• <strong>Obeying laws:</strong> Follow legal rules</li>
                <li>• <strong>Paying taxes:</strong> Contribute to government</li>
                <li>• <strong>Jury duty:</strong> Serve on juries</li>
                <li>• <strong>Community service:</strong> Help the community</li>
                <li>• <strong>Respecting others:</strong> Tolerance and mutual respect</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Duties to the State</h4>
              <ul>
                <li>• Protect the constitution</li>
                <li>• Uphold national unity</li>
                <li>• Promote national development</li>
                <li>• Defend the nation</li>
                <li>• Protect the environment</li>
                <li>• Foster national cohesion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Rights and Responsibilities",
        objective: "obj_014",
        text: `
          <h3>Rights and Responsibilities - A Balance</h3>
          <p>Rights and responsibilities are two sides of the same coin. Citizens have rights but also have duties to the state and fellow citizens.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Relationship</h4>
              <ul>
                <li>• Rights come with responsibilities</li>
                <li>• Freedom of speech ≠ right to spread hate</li>
                <li>• Right to vote = duty to vote</li>
                <li>• Right to work = duty to contribute</li>
                <li>• Rights enjoyed, responsibilities fulfilled</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Right to life:</strong> Duty to respect life</li>
                <li>• <strong>Right to property:</strong> Duty to respect others' property</li>
                <li>• <strong>Right to education:</strong> Duty to study and learn</li>
                <li>• <strong>Right to free speech:</strong> Duty to speak responsibly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Rule of Law",
        objective: "obj_007",
        text: `
          <h3>Rule of Law</h3>
          <p>The <strong>rule of law</strong> means that all people and institutions are subject to and accountable to the law.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Supremacy of law:</strong> Law is supreme</li>
                <li>• <strong>Equality before the law:</strong> Everyone is equal</li>
                <li>• <strong>Accountability:</strong> No one is above the law</li>
                <li>• <strong>Fairness:</strong> Justice for all</li>
                <li>• <strong>Access to justice:</strong> Right to fair hearing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Prevents abuse of power</li>
                <li>• Protects citizens' rights</li>
                <li>• Promotes stability</li>
                <li>• Ensures justice</li>
                <li>• Builds trust in government</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Civic Education",
        objective: "obj_011",
        text: `
          <h3>Civic Education</h3>
          <p><strong>Civic education</strong> is the process of teaching citizens about their rights, responsibilities, and how government works.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Knowledge:</strong> Understanding government</li>
                <li>• <strong>Skills:</strong> Participation skills</li>
                <li>• <strong>Values:</strong> Democratic values</li>
                <li>• <strong>Awareness:</strong> Rights and duties</li>
                <li>• <strong>Engagement:</strong> Active participation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Creates informed citizens</li>
                <li>• Strengthens democracy</li>
                <li>• Promotes civic participation</li>
                <li>• Builds national unity</li>
                <li>• Reduces civic ignorance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Patriotism and Nation-Building",
        objective: "obj_010",
        text: `
          <h3>Patriotism and Nation-Building</h3>
          <p><strong>Patriotism</strong> is love and devotion to one's country. <strong>Nation-building</strong> is the process of building a unified nation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Patriotism</h4>
              <ul>
                <li>• Love for one's country</li>
                <li>• Pride in national achievements</li>
                <li>• Willingness to serve</li>
                <li>• Respect for national symbols</li>
                <li>• Constructive and inclusive</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nation-Building</h4>
              <ul>
                <li>• Promoting national unity</li>
                <li>• Fostering economic development</li>
                <li>• Strengthening institutions</li>
                <li>• Upholding democratic values</li>
                <li>• Building national identity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Citizens and the State",
        objective: "obj_009",
        text: `
          <h3>Citizens and the State - The Relationship</h3>
          <p>The relationship between citizens and the state is based on mutual rights and obligations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 State's Role</h4>
              <ul>
                <li>• Protect citizens' rights</li>
                <li>• Provide public services</li>
                <li>• Ensure rule of law</li>
                <li>• Maintain security</li>
                <li>• Promote welfare</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Citizen's Role</h4>
              <ul>
                <li>• Obey laws</li>
                <li>• Pay taxes</li>
                <li>• Participate in governance</li>
                <li>• Uphold national values</li>
                <li>• Contribute to society</li>
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
          <h4>🏛️ Civics</h4>
          <ul>
            <li>• Study of citizenship and government</li>
            <li>• Rights and responsibilities of citizens</li>
            <li>• Rule of law and civic education</li>
            <li>• Patriotism and nation-building</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Citizens have rights and duties</li>
            <li>• Active participation strengthens democracy</li>
            <li>• Civic education is essential</li>
            <li>• Informed citizens build strong nations</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Democracy is not a spectator sport. Active and informed citizens are the foundation of a healthy democracy.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Rights come without responsibilities",
        correction: "Rights and responsibilities go hand in hand",
        explanation: "Every right comes with corresponding responsibilities."
      },
      {
        id: "mis_002",
        misconception: "Citizenship is only by birth",
        correction: "Citizenship can be acquired in several ways",
        explanation: "Citizenship can be by birth, descent, naturalization, or marriage."
      },
      {
        id: "mis_003",
        misconception: "Civic education is not important",
        correction: "Civic education is essential for democracy",
        explanation: "Civic education creates informed and active citizens."
      },
      {
        id: "mis_004",
        misconception: "Patriotism means supporting everything the government does",
        correction: "Patriotism means love of country, not blind support",
        explanation: "Patriots can criticize their government while loving their country."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Voting",
        description: "Participating in elections to choose leaders.",
        example: "Registering and voting in elections"
      },
      {
        id: "app_002",
        title: "Community Service",
        description: "Contributing to community well-being.",
        example: "Volunteering, neighborhood associations"
      },
      {
        id: "app_003",
        title: "Civic Participation",
        description: "Engaging in public affairs.",
        example: "Attending town hall meetings, petitions"
      },
      {
        id: "app_004",
        title: "Civil Society",
        description: "Joining organizations for change.",
        example: "NGOs, community groups"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Civics", definition: "The study of citizenship and government." },
    { term: "Citizen", definition: "A legal member of a country." },
    { term: "Rights", definition: "Legal, social, or ethical principles of freedom." },
    { term: "Responsibilities", definition: "Duties that citizens are expected to perform." },
    { term: "Rule of Law", definition: "The principle that all are subject to the law." },
    { term: "Patriotism", definition: "Love and devotion to one's country." },
    { term: "Nation-Building", definition: "Building a unified and strong nation." },
    { term: "Civic Education", definition: "Teaching citizens about their rights and duties." },
    { term: "Constitution", definition: "The supreme law of the land." },
    { term: "Naturalization", definition: "The process of becoming a citizen." },
    { term: "Democracy", definition: "Government by the people." },
    { term: "National Unity", definition: "Unity among citizens of a nation." },
    { term: "Citizenship", definition: "The status of being a citizen." },
    { term: "Civic Duty", definition: "A responsibility of a citizen." },
    { term: "Civil Rights", definition: "Rights to political and social freedom." },
    { term: "Suffrage", definition: "The right to vote." },
    { term: "Rule of Law", definition: "Principle that all are subject to law." },
    { term: "National Identity", definition: "A sense of belonging to a nation." },
    { term: "Civil Society", definition: "Organizations independent of government." },
    { term: "Public Participation", definition: "Citizen involvement in governance." }
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
      question: "What is civics?",
      type: "multiple_choice",
      options: [
        "The study of history",
        "The study of citizenship and government",
        "The study of economics",
        "The study of geography"
      ],
      answer: "The study of citizenship and government",
      explanation: "Civics is the study of citizenship and government."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a citizen?",
      type: "multiple_choice",
      options: [
        "A visitor to a country",
        "A legal member of a country",
        "A non-resident",
        "A tourist"
      ],
      answer: "A legal member of a country",
      explanation: "A citizen is a legal member of a country."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the difference between rights and responsibilities?",
      type: "multiple_choice",
      options: [
        "Rights are duties; responsibilities are freedoms",
        "Rights are freedoms; responsibilities are duties",
        "They are the same",
        "Rights are for citizens only"
      ],
      answer: "Rights are freedoms; responsibilities are duties",
      explanation: "Rights are freedoms; responsibilities are duties."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a fundamental right of citizens?",
      type: "multiple_choice",
      options: ["Right to life", "Right to free housing", "Right to free cars", "Right to free travel"],
      answer: "Right to life",
      explanation: "The right to life is a fundamental right."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a responsibility of citizens?",
      type: "multiple_choice",
      options: ["Voting", "Ignoring laws", "Avoiding taxes", "Not participating"],
      answer: "Voting",
      explanation: "Voting is a key responsibility of citizens."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How can citizenship be acquired in Nigeria?",
      type: "multiple_choice",
      options: [
        "Only by birth",
        "By birth, descent, naturalization, or marriage",
        "Only by naturalization",
        "Only by marriage"
      ],
      answer: "By birth, descent, naturalization, or marriage",
      explanation: "Citizenship can be acquired in multiple ways."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is the rule of law?",
      type: "multiple_choice",
      options: [
        "Laws that apply only to citizens",
        "Everyone is subject to the law",
        "Leaders are above the law",
        "Laws are optional"
      ],
      answer: "Everyone is subject to the law",
      explanation: "The rule of law means everyone is subject to the law."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which document governs citizenship in Nigeria?",
      type: "multiple_choice",
      options: [
        "The Nigerian Constitution",
        "The Criminal Code",
        "The Civil Code",
        "The Family Code"
      ],
      answer: "The Nigerian Constitution",
      explanation: "The Nigerian Constitution governs citizenship."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is patriotism?",
      type: "multiple_choice",
      options: [
        "Hating your country",
        "Love and devotion to your country",
        "Ignoring your country",
        "Leaving your country"
      ],
      answer: "Love and devotion to your country",
      explanation: "Patriotism is love and devotion to your country."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "Why is civic education important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It creates informed and active citizens",
        "It only benefits the government",
        "It is for children only"
      ],
      answer: "It creates informed and active citizens",
      explanation: "Civic education creates informed and active citizens."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_introduction_civics",
    title: "Introduction to Civics Quiz",
    description: "Test your understanding of civics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is civics?",
        type: "short_answer",
        answer_key: "The study of citizenship and government",
        explanation: "Civics is the study of citizenship and government."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a citizen?",
        type: "short_answer",
        answer_key: "A legal member of a country",
        explanation: "A citizen is a legal member of a country."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between rights and responsibilities?",
        type: "short_answer",
        answer_key: "Rights are freedoms; responsibilities are duties",
        explanation: "Rights are freedoms; responsibilities are duties."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name one fundamental right of citizens.",
        type: "short_answer",
        answer_key: "Right to life (or any valid)",
        explanation: "The right to life is a fundamental right."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Name one responsibility of citizens.",
        type: "short_answer",
        answer_key: "Voting (or any valid)",
        explanation: "Voting is a key responsibility of citizens."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How can citizenship be acquired in Nigeria?",
        type: "short_answer",
        answer_key: "By birth, descent, naturalization, or marriage",
        explanation: "Citizenship can be acquired in multiple ways."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the rule of law?",
        type: "short_answer",
        answer_key: "Everyone is subject to the law",
        explanation: "The rule of law means everyone is subject to the law."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Which document governs citizenship in Nigeria?",
        type: "short_answer",
        answer_key: "The Nigerian Constitution",
        explanation: "The Nigerian Constitution governs citizenship."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is patriotism?",
        type: "short_answer",
        answer_key: "Love and devotion to one's country",
        explanation: "Patriotism is love and devotion to one's country."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "Why is civic education important?",
        type: "short_answer",
        answer_key: "It creates informed and active citizens",
        explanation: "Civic education creates informed and active citizens."
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
        "Understand civics and its importance",
        "Explain citizenship and its acquisition",
        "Identify rights and responsibilities",
        "Understand the rule of law and civic education"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is civics?" },
        { time: "5-10 min", activity: "Direct Instruction - Citizenship" },
        { time: "10-15 min", activity: "Direct Instruction - Rights of Citizens" },
        { time: "15-20 min", activity: "Direct Instruction - Responsibilities" },
        { time: "20-25 min", activity: "Direct Instruction - Rule of Law" },
        { time: "25-30 min", activity: "Direct Instruction - Civic Education" },
        { time: "30-35 min", activity: "Direct Instruction - Patriotism" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of citizenship and government",
        prac_002: "A legal member of a country",
        prac_003: "Rights are freedoms; responsibilities are duties",
        prac_004: "Right to life",
        prac_005: "Voting",
        prac_006: "By birth, descent, naturalization, or marriage",
        prac_007: "Everyone is subject to the law",
        prac_008: "The Nigerian Constitution",
        prac_009: "Love and devotion to your country",
        prac_010: "It creates informed and active citizens"
      },
      assessment: {
        ass_001: "The study of citizenship and government",
        ass_002: "A legal member of a country",
        ass_003: "Rights are freedoms; responsibilities are duties",
        ass_004: "Right to life (or any valid)",
        ass_005: "Voting (or any valid)",
        ass_006: "By birth, descent, naturalization, or marriage",
        ass_007: "Everyone is subject to the law",
        ass_008: "The Nigerian Constitution",
        ass_009: "Love and devotion to one's country",
        ass_010: "It creates informed and active citizens"
      }
    },
    extensionActivities: [
      "Research Nigerian citizenship laws",
      "Study the Nigerian Constitution",
      "Analyze civic rights and responsibilities",
      "Discuss community participation"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research comparative citizenship",
        "Study constitutional law",
        "Research civic engagement",
        "Analyze political participation"
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
      title: "Citizenship Acquisition",
      description: "Diagram showing how citizenship is acquired",
      url: "/diagrams/citizenship-acquisition.png",
      alt: "Citizenship acquisition diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Rights and Responsibilities",
      description: "Chart showing rights and responsibilities of citizens",
      url: "/diagrams/rights-responsibilities.png",
      alt: "Rights and responsibilities chart"
    }
  ]
};