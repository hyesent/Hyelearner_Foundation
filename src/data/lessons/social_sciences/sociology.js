// Location: src/data/lessons/social_sciences/sociology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "soc_lesson_sociology",
  subject: "Sociology",
  topic: "Sociology",
  name: "Sociology",
  icon: "👥",
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
    "Understanding of society",
    "Knowledge of social structures",
    "Interest in social issues",
    "Understanding of human behavior"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Social Sciences lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define sociology and explain its importance",
      indicator: "Student can explain what sociology is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the major sociological perspectives",
      indicator: "Student can describe functionalism, conflict theory, and symbolic interactionism"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of social structure",
      indicator: "Student can describe the elements of social structure"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe social institutions",
      indicator: "Student can explain the role of family, education, religion, and government"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain social stratification",
      indicator: "Student can describe class, caste, and social mobility"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe culture and society",
      indicator: "Student can explain the components of culture"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain social change",
      indicator: "Student can describe the causes and effects of social change"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe socialization",
      indicator: "Student can explain how individuals learn to be members of society"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain social inequality",
      indicator: "Student can describe different forms of social inequality"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Describe social movements",
      indicator: "Student can explain the role of social movements in society"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the impact of globalization on society",
      indicator: "Student can discuss how globalization affects societies"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of deviance",
      indicator: "Student can describe what deviance is and how it is controlled"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the sociology of gender and race",
      indicator: "Student can discuss how gender and race affect social relations"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the role of social research",
      indicator: "Student can explain how sociologists study society"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze social problems",
      indicator: "Student can discuss poverty, crime, and inequality"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of social policy",
      indicator: "Student can describe how social policy addresses social issues"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the future of society",
      indicator: "Student can discuss emerging social trends"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Sociology - Understanding Society",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about sociology, social structures, culture, and social change."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Sociology</h2>
      <p><strong>Sociology</strong> is the scientific study of society, social relationships, and social institutions. It examines how people interact with each other, how societies are organized, and how social forces shape our lives. Sociology helps us understand the social world and our place in it.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">👥 Key Concepts</h3>
          <ul>
            <li>✓ Society</li>
            <li>✓ Social Structure</li>
            <li>✓ Culture</li>
            <li>✓ Socialization</li>
            <li>✓ Social Institutions</li>
            <li>✓ Social Stratification</li>
            <li>✓ Social Change</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Sociology was founded in the 19th century</li>
            <li>• Auguste Comte coined the term "sociology"</li>
            <li>• Society shapes individual behavior</li>
            <li>• Social structures influence our lives</li>
            <li>• Sociology helps solve social problems</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Sociology Matters</h4>
        <p>Sociology helps us understand the social forces that shape our lives, identify social problems, and work toward a more just and equitable society.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Sociology?",
        objective: "obj_001",
        text: `
          <h3>Understanding Sociology</h3>
          <p><strong>Sociology</strong> is the scientific study of society, social relationships, and social institutions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Society:</strong> Groups of people</li>
                <li>• <strong>Social structure:</strong> Patterns of relationships</li>
                <li>• <strong>Social institutions:</strong> Family, education, religion</li>
                <li>• <strong>Culture:</strong> Shared beliefs and values</li>
                <li>• <strong>Social change:</strong> Transformation over time</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Founding Thinkers</h4>
              <ul>
                <li>• <strong>Auguste Comte:</strong> Father of sociology</li>
                <li>• <strong>Karl Marx:</strong> Conflict theory</li>
                <li>• <strong>Emile Durkheim:</strong> Functionalism</li>
                <li>• <strong>Max Weber:</strong> Symbolic interactionism</li>
                <li>• <strong>W.E.B. Du Bois:</strong> Race and sociology</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Sociological Perspectives",
        objective: "obj_002",
        text: `
          <h3>Major Sociological Perspectives</h3>
          <p>There are three main theoretical perspectives in sociology.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functionalism</h4>
              <ul>
                <li>• Society as a system</li>
                <li>• Parts work together</li>
                <li>• Stability and order</li>
                <li>• Durkheim, Parsons</li>
                <li>• Social institutions maintain society</li>
                <li>• Change is gradual</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Conflict Theory</h4>
              <ul>
                <li>• Society as conflict</li>
                <li>• Competition for resources</li>
                <li>• Inequality and power</li>
                <li>• Marx, Weber</li>
                <li>• Change through conflict</li>
                <li>• Class struggle</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Symbolic Interactionism</h4>
              <ul>
                <li>• Micro-level analysis</li>
                <li>• Meaning and symbols</li>
                <li>• Face-to-face interaction</li>
                <li>• Mead, Blumer</li>
                <li>• Reality is socially constructed</li>
                <li>• Change through interaction</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Social Structure",
        objective: "obj_003",
        text: `
          <h3>Social Structure</h3>
          <p><strong>Social structure</strong> is the pattern of social relationships and institutions in society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Elements of Social Structure</h4>
              <ul>
                <li>• <strong>Status:</strong> Social position</li>
                <li>• <strong>Role:</strong> Behavior associated with status</li>
                <li>• <strong>Groups:</strong> People with shared identity</li>
                <li>• <strong>Institutions:</strong> Established patterns</li>
                <li>• <strong>Networks:</strong> Social connections</li>
                <li>• <strong>Organizations:</strong> Formal groups</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Status</h4>
              <ul>
                <li>• <strong>Ascribed status:</strong> Born into (gender, race)</li>
                <li>• <strong>Achieved status:</strong> Earned (occupation, education)</li>
                <li>• <strong>Master status:</strong> Dominant identity</li>
                <li>• <strong>Role conflict:</strong> Competing expectations</li>
                <li>• <strong>Role strain:</strong> Difficulty in a role</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Social Institutions",
        objective: "obj_004",
        text: `
          <h3>Social Institutions</h3>
          <p><strong>Social institutions</strong> are established patterns of behavior that organize social life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Institutions</h4>
              <ul>
                <li>• <strong>Family:</strong> Primary socialization</li>
                <li>• <strong>Education:</strong> Learning and training</li>
                <li>• <strong>Religion:</strong> Beliefs and values</li>
                <li>• <strong>Government:</strong> Political organization</li>
                <li>• <strong>Economy:</strong> Production and distribution</li>
                <li>• <strong>Media:</strong> Communication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Socialization:</strong> Teaching norms</li>
                <li>• <strong>Social control:</strong> Enforcing rules</li>
                <li>• <strong>Social integration:</strong> Bringing people together</li>
                <li>• <strong>Social support:</strong> Helping members</li>
                <li>• <strong>Social change:</strong> Adapting to change</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Culture",
        objective: "obj_006",
        text: `
          <h3>Culture and Society</h3>
          <p><strong>Culture</strong> is the shared beliefs, values, norms, and practices of a society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components of Culture</h4>
              <ul>
                <li>• <strong>Values:</strong> What is important</li>
                <li>• <strong>Norms:</strong> Rules of behavior</li>
                <li>• <strong>Beliefs:</strong> What is true</li>
                <li>• <strong>Symbols:</strong> Meaningful representations</li>
                <li>• <strong>Language:</strong> System of communication</li>
                <li>• <strong>Material culture:</strong> Physical objects</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Culture</h4>
              <ul>
                <li>• <strong>Material culture:</strong> Physical artifacts</li>
                <li>• <strong>Non-material culture:</strong> Ideas and beliefs</li>
                <li>• <strong>Subculture:</strong> Distinct group culture</li>
                <li>• <strong>Counterculture:</strong> Opposes mainstream</li>
                <li>• <strong>Cultural diffusion:</strong> Spread of culture</li>
                <li>• <strong>Cultural relativism:</strong> Understanding cultures</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Socialization",
        objective: "obj_008",
        text: `
          <h3>Socialization</h3>
          <p><strong>Socialization</strong> is the process by which individuals learn the culture of their society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Agents of Socialization</h4>
              <ul>
                <li>• <strong>Family:</strong> Primary socialization</li>
                <li>• <strong>School:</strong> Education and peer groups</li>
                <li>• <strong>Media:</strong> Messages and values</li>
                <li>• <strong>Peer groups:</strong> Friends and peers</li>
                <li>• <strong>Religion:</strong> Moral and spiritual</li>
                <li>• <strong>Workplace:</strong> Professional socialization</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Stages</h4>
              <ul>
                <li>• <strong>Primary socialization:</strong> Early childhood</li>
                <li>• <strong>Secondary socialization:</strong> Later life</li>
                <li>• <strong>Anticipatory socialization:</strong> Preparing for future</li>
                <li>• <strong>Resocialization:</strong> Learning new norms</li>
                <li>• <strong>Life course:</strong> Changing roles</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Social Stratification",
        objective: "obj_005",
        text: `
          <h3>Social Stratification</h3>
          <p><strong>Social stratification</strong> is the division of society into hierarchical layers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Systems of Stratification</h4>
              <ul>
                <li>• <strong>Caste system:</strong> Birth determines status</li>
                <li>• <strong>Class system:</strong> Mobility possible</li>
                <li>• <strong>Estate system:</strong> Feudal social classes</li>
                <li>• <strong>Meritocracy:</strong> Achieved status</li>
                <li>• <strong>Social mobility:</strong> Movement between classes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Factors of Stratification</h4>
              <ul>
                <li>• <strong>Wealth:</strong> Economic resources</li>
                <li>• <strong>Power:</strong> Ability to influence</li>
                <li>• <strong>Prestige:</strong> Social honor</li>
                <li>• <strong>Education:</strong> Knowledge and skills</li>
                <li>• <strong>Occupation:</strong> Job status</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Social Inequality",
        objective: "obj_009",
        text: `
          <h3>Social Inequality</h3>
          <p><strong>Social inequality</strong> is the unequal distribution of resources and opportunities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Inequality</h4>
              <ul>
                <li>• <strong>Economic inequality:</strong> Wealth and income</li>
                <li>• <strong>Social inequality:</strong> Status and power</li>
                <li>• <strong>Gender inequality:</strong> Male-female differences</li>
                <li>• <strong>Racial inequality:</strong> Race-based differences</li>
                <li>• <strong>Educational inequality:</strong> Access to education</li>
                <li>• <strong>Health inequality:</strong> Health disparities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consequences</h4>
              <ul>
                <li>• <strong>Poverty:</strong> Lack of resources</li>
                <li>• <strong>Social exclusion:</strong> Marginalization</li>
                <li>• <strong>Social conflict:</strong> Tension and unrest</li>
                <li>• <strong>Health disparities:</strong> Unequal health outcomes</li>
                <li>• <strong>Limited opportunities:</strong> Reduced social mobility</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Social Change",
        objective: "obj_007",
        text: `
          <h3>Social Change</h3>
          <p><strong>Social change</strong> is the transformation of society over time.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Causes of Social Change</h4>
              <ul>
                <li>• <strong>Technology:</strong> New inventions</li>
                <li>• <strong>Demographics:</strong> Population changes</li>
                <li>• <strong>Culture:</strong> New ideas and values</li>
                <li>• <strong>Politics:</strong> Laws and policies</li>
                <li>• <strong>Economic factors:</strong> Economic shifts</li>
                <li>• <strong>Social movements:</strong> Organized efforts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects of Social Change</h4>
              <ul>
                <li>• <strong>Social progress:</strong> Improvement</li>
                <li>• <strong>Social disruption:</strong> Instability</li>
                <li>• <strong>Cultural change:</strong> New norms</li>
                <li>• <strong>Institutional change:</strong> New organizations</li>
                <li>• <strong>Individual change:</strong> New behaviors</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Social Movements",
        objective: "obj_010",
        text: `
          <h3>Social Movements</h3>
          <p><strong>Social movements</strong> are organized efforts to bring about social change.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Social Movements</h4>
              <ul>
                <li>• <strong>Civil rights:</strong> Equality and justice</li>
                <li>• <strong>Women's rights:</strong> Gender equality</li>
                <li>• <strong>Environmental:</strong> Environmental protection</li>
                <li>• <strong>Labor:</strong> Workers' rights</li>
                <li>• <strong>Political:</strong> Political reform</li>
                <li>• <strong>Religious:</strong> Religious change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Stages of Social Movements</h4>
              <ul>
                <li>• <strong>Emergence:</strong> Awareness</li>
                <li>• <strong>Coalescence:</strong> Organization</li>
                <li>• <strong>Bureaucratization:</strong> Formal structure</li>
                <li>• <strong>Decline:</strong> End of movement</li>
                <li>• <strong>Outcome:</strong> Success or failure</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Globalization",
        objective: "obj_011",
        text: `
          <h3>Globalization and Society</h3>
          <p><strong>Globalization</strong> is the increasing interconnectedness of societies worldwide.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Aspects of Globalization</h4>
              <ul>
                <li>• <strong>Economic:</strong> Global trade</li>
                <li>• <strong>Political:</strong> International organizations</li>
                <li>• <strong>Cultural:</strong> Cultural exchange</li>
                <li>• <strong>Social:</strong> Social interaction</li>
                <li>• <strong>Technological:</strong> Communication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Effects</h4>
              <ul>
                <li>• <strong>Positive:</strong> Development, cooperation</li>
                <li>• <strong>Negative:</strong> Inequality, cultural loss</li>
                <li>• <strong>Global culture:</strong> Shared values</li>
                <li>• <strong>Global problems:</strong> Climate change, poverty</li>
                <li>• <strong>Global solutions:</strong> International cooperation</li>
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
          <h4>👥 Sociology</h4>
          <ul>
            <li>• Scientific study of society</li>
            <li>• Three major perspectives</li>
            <li>• Social structure and institutions</li>
            <li>• Culture and socialization</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Social stratification and inequality</li>
            <li>• Social change and movements</li>
            <li>• Globalization</li>
            <li>• Social problems and solutions</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Sociology helps us understand society and work toward a more just and equitable world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Sociology is just common sense",
        correction: "Sociology is a scientific discipline",
        explanation: "Sociology uses systematic methods to study society."
      },
      {
        id: "mis_002",
        misconception: "Society is fixed and unchanging",
        correction: "Society is constantly changing",
        explanation: "Social change is a constant feature of society."
      },
      {
        id: "mis_003",
        misconception: "We are free from social influence",
        correction: "Social forces shape our lives",
        explanation: "Social structures and institutions influence behavior."
      },
      {
        id: "mis_004",
        misconception: "All social problems have simple solutions",
        correction: "Social problems are complex",
        explanation: "Social problems have multiple causes and require comprehensive solutions."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Social Policy",
        description: "Sociology informs social policy.",
        example: "Welfare, education, health policy"
      },
      {
        id: "app_002",
        title: "Community Development",
        description: "Sociology helps develop communities.",
        example: "Urban planning, community programs"
      },
      {
        id: "app_003",
        title: "Social Work",
        description: "Sociology informs social work.",
        example: "Counseling, advocacy, intervention"
      },
      {
        id: "app_004",
        title: "Business",
        description: "Sociology helps understand consumers.",
        example: "Marketing, human resources"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Sociology", definition: "The scientific study of society." },
    { term: "Society", definition: "A group of people with shared culture." },
    { term: "Social Structure", definition: "Patterns of social relationships." },
    { term: "Culture", definition: "Shared beliefs and practices." },
    { term: "Socialization", definition: "Learning to be a member of society." },
    { term: "Social Institution", definition: "Established pattern of behavior." },
    { term: "Social Stratification", definition: "Division of society into layers." },
    { term: "Social Inequality", definition: "Unequal distribution of resources." },
    { term: "Social Change", definition: "Transformation of society." },
    { term: "Social Movement", definition: "Organized effort for change." },
    { term: "Globalization", definition: "Worldwide interconnectedness." },
    { term: "Deviance", definition: "Behavior that violates norms." },
    { term: "Norms", definition: "Rules of behavior." },
    { term: "Values", definition: "What is important." },
    { term: "Status", definition: "Social position." },
    { term: "Role", definition: "Behavior associated with status." },
    { term: "Class", definition: "Social rank based on wealth." },
    { term: "Gender", definition: "Socially constructed roles." },
    { term: "Race", definition: "Socially constructed category." },
    { term: "Social Justice", definition: "Fair distribution of resources." }
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
      question: "What is sociology?",
      type: "multiple_choice",
      options: [
        "The study of the mind",
        "The scientific study of society",
        "The study of politics",
        "The study of history"
      ],
      answer: "The scientific study of society",
      explanation: "Sociology is the scientific study of society."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is functionalism?",
      type: "multiple_choice",
      options: [
        "Society as conflict",
        "Society as a system",
        "Society as symbols",
        "Society as chaos"
      ],
      answer: "Society as a system",
      explanation: "Functionalism views society as a system."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is social structure?",
      type: "multiple_choice",
      options: [
        "Patterns of social relationships",
        "Individual behavior",
        "Economic systems",
        "Political systems"
      ],
      answer: "Patterns of social relationships",
      explanation: "Social structure is patterns of social relationships."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a social institution?",
      type: "multiple_choice",
      options: [
        "A social club",
        "An established pattern of behavior",
        "A political party",
        "A business"
      ],
      answer: "An established pattern of behavior",
      explanation: "A social institution is an established pattern of behavior."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is social stratification?",
      type: "multiple_choice",
      options: [
        "Division of society into layers",
        "Division of society into groups",
        "Division of society into regions",
        "Division of society into classes"
      ],
      answer: "Division of society into layers",
      explanation: "Social stratification is the division of society into layers."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is culture?",
      type: "multiple_choice",
      options: [
        "Genetic traits",
        "Shared beliefs and practices",
        "Individual preferences",
        "Biological characteristics"
      ],
      answer: "Shared beliefs and practices",
      explanation: "Culture is shared beliefs and practices."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is social change?",
      type: "multiple_choice",
      options: [
        "Political change",
        "Transformation of society",
        "Individual change",
        "Economic change"
      ],
      answer: "Transformation of society",
      explanation: "Social change is the transformation of society."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is socialization?",
      type: "multiple_choice",
      options: [
        "Learning to be a member of society",
        "Learning to be independent",
        "Learning to be rich",
        "Learning to be powerful"
      ],
      answer: "Learning to be a member of society",
      explanation: "Socialization is learning to be a member of society."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is social inequality?",
      type: "multiple_choice",
      options: [
        "Equal distribution of resources",
        "Unequal distribution of resources",
        "Political equality",
        "Social justice"
      ],
      answer: "Unequal distribution of resources",
      explanation: "Social inequality is the unequal distribution of resources."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a social movement?",
      type: "multiple_choice",
      options: [
        "A political party",
        "An organized effort for change",
        "A social club",
        "A business organization"
      ],
      answer: "An organized effort for change",
      explanation: "A social movement is an organized effort for change."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is globalization?",
      type: "multiple_choice",
      options: [
        "Isolation of societies",
        "Worldwide interconnectedness",
        "Nationalism",
        "Localism"
      ],
      answer: "Worldwide interconnectedness",
      explanation: "Globalization is worldwide interconnectedness."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is deviance?",
      type: "multiple_choice",
      options: [
        "Behavior that follows norms",
        "Behavior that violates norms",
        "Behavior that is acceptable",
        "Behavior that is rewarded"
      ],
      answer: "Behavior that violates norms",
      explanation: "Deviance is behavior that violates norms."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is gender inequality?",
      type: "multiple_choice",
      options: [
        "Equal rights for all genders",
        "Unequal treatment based on gender",
        "Equal opportunities",
        "Social justice"
      ],
      answer: "Unequal treatment based on gender",
      explanation: "Gender inequality is unequal treatment based on gender."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How do sociologists study society?",
      type: "multiple_choice",
      options: [
        "Through research methods",
        "Through opinion only",
        "Through intuition",
        "Through common sense"
      ],
      answer: "Through research methods",
      explanation: "Sociologists use research methods to study society."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a social problem?",
      type: "multiple_choice",
      options: [
        "A personal issue",
        "A condition that harms society",
        "An individual problem",
        "A family issue"
      ],
      answer: "A condition that harms society",
      explanation: "A social problem is a condition that harms society."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_sociology",
    title: "Sociology Quiz",
    description: "Test your understanding of sociology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is sociology?",
        type: "short_answer",
        answer_key: "The scientific study of society",
        explanation: "Sociology is the scientific study of society."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is functionalism?",
        type: "short_answer",
        answer_key: "Society as a system",
        explanation: "Functionalism views society as a system."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is social structure?",
        type: "short_answer",
        answer_key: "Patterns of social relationships",
        explanation: "Social structure is patterns of social relationships."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a social institution?",
        type: "short_answer",
        answer_key: "An established pattern of behavior",
        explanation: "A social institution is an established pattern of behavior."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is social stratification?",
        type: "short_answer",
        answer_key: "Division of society into layers",
        explanation: "Social stratification is the division of society into layers."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is culture?",
        type: "short_answer",
        answer_key: "Shared beliefs and practices",
        explanation: "Culture is shared beliefs and practices."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is social change?",
        type: "short_answer",
        answer_key: "Transformation of society",
        explanation: "Social change is the transformation of society."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is socialization?",
        type: "short_answer",
        answer_key: "Learning to be a member of society",
        explanation: "Socialization is learning to be a member of society."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a social movement?",
        type: "short_answer",
        answer_key: "An organized effort for change",
        explanation: "A social movement is an organized effort for change."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is globalization?",
        type: "short_answer",
        answer_key: "Worldwide interconnectedness",
        explanation: "Globalization is worldwide interconnectedness."
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
        "Understand sociology and its perspectives",
        "Explain social structure and institutions",
        "Describe culture and socialization",
        "Understand social change and globalization"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is sociology?" },
        { time: "5-10 min", activity: "Direct Instruction - Sociological Perspectives" },
        { time: "10-15 min", activity: "Direct Instruction - Social Structure" },
        { time: "15-20 min", activity: "Direct Instruction - Social Institutions" },
        { time: "20-25 min", activity: "Direct Instruction - Culture and Socialization" },
        { time: "25-30 min", activity: "Direct Instruction - Social Stratification" },
        { time: "30-35 min", activity: "Direct Instruction - Social Change and Globalization" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The scientific study of society",
        prac_002: "Society as a system",
        prac_003: "Patterns of social relationships",
        prac_004: "An established pattern of behavior",
        prac_005: "Division of society into layers",
        prac_006: "Shared beliefs and practices",
        prac_007: "Transformation of society",
        prac_008: "Learning to be a member of society",
        prac_009: "Unequal distribution of resources",
        prac_010: "An organized effort for change",
        prac_011: "Worldwide interconnectedness",
        prac_012: "Behavior that violates norms",
        prac_013: "Unequal treatment based on gender",
        prac_014: "Through research methods",
        prac_015: "A condition that harms society"
      },
      assessment: {
        ass_001: "The scientific study of society",
        ass_002: "Society as a system",
        ass_003: "Patterns of social relationships",
        ass_004: "An established pattern of behavior",
        ass_005: "Division of society into layers",
        ass_006: "Shared beliefs and practices",
        ass_007: "Transformation of society",
        ass_008: "Learning to be a member of society",
        ass_009: "An organized effort for change",
        ass_010: "Worldwide interconnectedness"
      }
    },
    extensionActivities: [
      "Research a social problem",
      "Study a social movement",
      "Research globalization",
      "Learn about social policy"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research social theory",
        "Study social research methods",
        "Research social policy",
        "Study comparative sociology"
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
      title: "Sociological Perspectives",
      description: "Diagram showing three sociological perspectives",
      url: "/diagrams/sociological-perspectives.png",
      alt: "Sociological perspectives diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Social Institutions",
      description: "Diagram of social institutions",
      url: "/diagrams/social-institutions.png",
      alt: "Social institutions diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Social Stratification",
      description: "Diagram showing social stratification",
      url: "/diagrams/social-stratification.png",
      alt: "Social stratification diagram"
    }
  ]
};