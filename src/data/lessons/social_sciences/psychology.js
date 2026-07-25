// Location: src/data/lessons/social_sciences/psychology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "psy_lesson_psychology",
  subject: "Psychology",
  topic: "Psychology",
  name: "Psychology",
  icon: "🧠",
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
    "Understanding of human behavior",
    "Knowledge of biology basics",
    "Interest in the mind and behavior",
    "Basic scientific understanding"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Sociology",
      file: "social_sciences/sociology.js"
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
      description: "Define psychology and explain its importance",
      indicator: "Student can explain what psychology is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main branches of psychology",
      indicator: "Student can list the major fields of psychology"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between nature and nurture",
      indicator: "Student can describe the nature vs nurture debate"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the major schools of thought in psychology",
      indicator: "Student can explain behaviorism, psychoanalysis, and humanism"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the structure and function of the brain",
      indicator: "Student can describe the major parts of the brain"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the process of learning and conditioning",
      indicator: "Student can describe classical and operant conditioning"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe human development across the lifespan",
      indicator: "Student can explain stages of human development"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain theories of personality",
      indicator: "Student can describe major personality theories"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe psychological disorders and their treatment",
      indicator: "Student can identify common mental health disorders"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain social psychology concepts",
      indicator: "Student can describe social influence and group behavior"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the research methods used in psychology",
      indicator: "Student can describe different research methods"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of emotions and motivation",
      indicator: "Student can describe theories of emotion and motivation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe cognitive psychology and memory",
      indicator: "Student can explain how memory works"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the psychology of stress and health",
      indicator: "Student can describe the effects of stress on health"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze psychological disorders in depth",
      indicator: "Student can discuss anxiety, depression, and schizophrenia"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of psychological well-being",
      indicator: "Student can discuss mental health and well-being"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Describe the role of psychology in everyday life",
      indicator: "Student can apply psychological concepts to daily life"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the future of psychology",
      indicator: "Student can discuss emerging trends in psychology"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Psychology - Understanding the Mind and Behavior",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about psychology, the mind, behavior, and mental health."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Psychology</h2>
      <p><strong>Psychology</strong> is the scientific study of the mind and behavior. It explores how we think, feel, and act, and seeks to understand the underlying processes that drive human behavior. Psychology is both a science and a profession that helps improve mental health and well-being.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧠 Key Concepts</h3>
          <ul>
            <li>✓ The Mind and Behavior</li>
            <li>✓ Nature vs Nurture</li>
            <li>✓ Schools of Thought</li>
            <li>✓ Brain and Nervous System</li>
            <li>✓ Learning and Memory</li>
            <li>✓ Personality</li>
            <li>✓ Psychological Disorders</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Psychology is over 100 years old</li>
            <li>• Sigmund Freud was a pioneer</li>
            <li>• The brain has 86 billion neurons</li>
            <li>• Mental health affects 1 in 4 people</li>
            <li>• Psychology is used in many fields</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Psychology Matters</h4>
        <p>Psychology helps us understand ourselves and others. It is essential for mental health, education, work, and relationships.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Psychology?",
        objective: "obj_001",
        text: `
          <h3>Understanding Psychology</h3>
          <p><strong>Psychology</strong> is the scientific study of the mind and behavior. It seeks to understand how people think, feel, and act.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Mind:</strong> Mental processes</li>
                <li>• <strong>Behavior:</strong> Observable actions</li>
                <li>• <strong>Emotions:</strong> Feelings and moods</li>
                <li>• <strong>Cognition:</strong> Thinking and reasoning</li>
                <li>• <strong>Development:</strong> Growth over time</li>
                <li>• <strong>Social:</strong> Interaction with others</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Goals of Psychology</h4>
              <ul>
                <li>• <strong>Describe:</strong> What is happening</li>
                <li>• <strong>Explain:</strong> Why it is happening</li>
                <li>• <strong>Predict:</strong> What will happen</li>
                <li>• <strong>Control:</strong> How to change behavior</li>
                <li>• <strong>Improve:</strong> Mental health and well-being</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Branches of Psychology",
        objective: "obj_002",
        text: `
          <h3>Branches of Psychology</h3>
          <p>Psychology has many specialized fields.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Clinical Psychology</h4>
              <ul>
                <li>• Mental health disorders</li>
                <li>• Therapy and counseling</li>
                <li>• Assessment and diagnosis</li>
                <li>• Treatment and intervention</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Cognitive Psychology</h4>
              <ul>
                <li>• Thinking and memory</li>
                <li>• Problem-solving</li>
                <li>• Language and decision-making</li>
                <li>• Perception and attention</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Developmental Psychology</h4>
              <ul>
                <li>• Human development</li>
                <li>• Child and adolescent psychology</li>
                <li>• Aging and lifespan</li>
                <li>• Learning and growth</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Social Psychology</h4>
              <ul>
                <li>• Group behavior</li>
                <li>• Social influence</li>
                <li>• Attitudes and persuasion</li>
                <li>• Prejudice and discrimination</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Educational Psychology</h4>
              <ul>
                <li>• Learning and teaching</li>
                <li>• Classroom behavior</li>
                <li>• Motivation and achievement</li>
                <li>• Educational interventions</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Industrial-Organizational Psychology</h4>
              <ul>
                <li>• Workplace behavior</li>
                <li>• Employee motivation</li>
                <li>• Leadership and teamwork</li>
                <li>• Organizational development</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Nature vs Nurture",
        objective: "obj_003",
        text: `
          <h3>Nature vs Nurture</h3>
          <p>The <strong>nature vs nurture</strong> debate explores the influence of genetics and environment on human development.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Nature (Genetics)</h4>
              <ul>
                <li>• Inherited traits</li>
                <li>• DNA and genes</li>
                <li>• Biological factors</li>
                <li>• Heredity and genetics</li>
                <li>• Innate abilities</li>
                <li>• Physical characteristics</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nurture (Environment)</h4>
              <ul>
                <li>• Upbringing and family</li>
                <li>• Education and learning</li>
                <li>• Culture and society</li>
                <li>• Life experiences</li>
                <li>• Social interactions</li>
                <li>• Environment and context</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Modern View:</strong>
            <ul>
              <li>• Both nature and nurture interact</li>
              <li>• Genetics provide potential</li>
              <li>• Environment shapes expression</li>
              <li>• Genes + environment = outcome</li>
              <li>• Epigenetics: Environment affects gene expression</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Schools of Thought",
        objective: "obj_004",
        text: `
          <h3>Major Schools of Thought</h3>
          <p>Psychology has several major theoretical perspectives.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Behaviorism</h4>
              <ul>
                <li>• Focus on observable behavior</li>
                <li>• Learning through conditioning</li>
                <li>• Pavlov, Watson, Skinner</li>
                <li>• Stimulus-response</li>
                <li>• Environment shapes behavior</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Psychoanalysis</h4>
              <ul>
                <li>• Unconscious mind</li>
                <li>• Freud's theory</li>
                <li>• Id, ego, superego</li>
                <li>• Defense mechanisms</li>
                <li>• Childhood experiences</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Humanism</h4>
              <ul>
                <li>• Human potential</li>
                <li>• Self-actualization</li>
                <li>• Maslow, Rogers</li>
                <li>• Free will</li>
                <li>• Positive psychology</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Cognitive Psychology</h4>
              <ul>
                <li>• Mental processes</li>
                <li>• Thinking and memory</li>
                <li>• Information processing</li>
                <li>• Problem-solving</li>
                <li>• Cognitive therapy</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Biological Psychology</h4>
              <ul>
                <li>• Brain and nervous system</li>
                <li>• Neurotransmitters</li>
                <li>• Genetics and behavior</li>
                <li>• Physiological basis</li>
                <li>• Psychopharmacology</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Sociocultural Psychology</h4>
              <ul>
                <li>• Culture and behavior</li>
                <li>• Social norms</li>
                <li>• Group dynamics</li>
                <li>• Cultural differences</li>
                <li>• Social context</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The Brain and Nervous System",
        objective: "obj_005",
        text: `
          <h3>The Brain and Nervous System</h3>
          <p>The brain is the physical basis of the mind.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of the Brain</h4>
              <ul>
                <li>• <strong>Cerebrum:</strong> Thinking and memory</li>
                <li>• <strong>Cerebellum:</strong> Coordination and balance</li>
                <li>• <strong>Brainstem:</strong> Basic functions</li>
                <li>• <strong>Hypothalamus:</strong> Regulation</li>
                <li>• <strong>Amygdala:</strong> Emotion</li>
                <li>• <strong>Hippocampus:</strong> Memory</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nervous System</h4>
              <ul>
                <li>• <strong>Central Nervous System:</strong> Brain and spinal cord</li>
                <li>• <strong>Peripheral Nervous System:</strong> Nerves</li>
                <li>• <strong>Neurons:</strong> Nerve cells</li>
                <li>• <strong>Neurotransmitters:</strong> Chemical messengers</li>
                <li>• <strong>Synapses:</strong> Connections</li>
                <li>• <strong>Neural pathways:</strong> Communication</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Learning and Conditioning",
        objective: "obj_006",
        text: `
          <h3>Learning and Conditioning</h3>
          <p>Learning is a relatively permanent change in behavior resulting from experience.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Classical Conditioning</h4>
              <ul>
                <li>• <strong>Pavlov's experiment:</strong> Dogs and bells</li>
                <li>• <strong>Unconditioned stimulus:</strong> Food</li>
                <li>• <strong>Unconditioned response:</strong> Salivation</li>
                <li>• <strong>Conditioned stimulus:</strong> Bell</li>
                <li>• <strong>Conditioned response:</strong> Salivation</li>
                <li>• Learning through association</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Operant Conditioning</h4>
              <ul>
                <li>• <strong>Skinner's experiments:</strong> Rats and levers</li>
                <li>• <strong>Reinforcement:</strong> Increases behavior</li>
                <li>• <strong>Punishment:</strong> Decreases behavior</li>
                <li>• <strong>Positive reinforcement:</strong> Reward</li>
                <li>• <strong>Negative reinforcement:</strong> Removing negative</li>
                <li>• Learning through consequences</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Human Development",
        objective: "obj_007",
        text: `
          <h3>Human Development Across the Lifespan</h3>
          <p>Human development follows predictable stages.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages of Development</h4>
              <ul>
                <li>• <strong>Infancy:</strong> 0-2 years</li>
                <li>• <strong>Early childhood:</strong> 2-6 years</li>
                <li>• <strong>Middle childhood:</strong> 6-11 years</li>
                <li>• <strong>Adolescence:</strong> 11-18 years</li>
                <li>• <strong>Adulthood:</strong> 18-65 years</li>
                <li>• <strong>Old age:</strong> 65+ years</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Theories</h4>
              <ul>
                <li>• <strong>Piaget:</strong> Cognitive development</li>
                <li>• <strong>Erikson:</strong> Psychosocial development</li>
                <li>• <strong>Kohlberg:</strong> Moral development</li>
                <li>• <strong>Vygotsky:</strong> Social development</li>
                <li>• <strong>Attachment theory:</strong> Bowlby</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Personality Theories",
        objective: "obj_008",
        text: `
          <h3>Theories of Personality</h3>
          <p>Personality is the unique pattern of thoughts, feelings, and behaviors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Theories</h4>
              <ul>
                <li>• <strong>Psychoanalytic:</strong> Freud (Id, Ego, Superego)</li>
                <li>• <strong>Trait:</strong> Big Five (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)</li>
                <li>• <strong>Humanistic:</strong> Maslow (Self-actualization)</li>
                <li>• <strong>Social-cognitive:</strong> Bandura (Reciprocal determinism)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Personality Assessment</h4>
              <ul>
                <li>• <strong>Self-report:</strong> Questionnaires</li>
                <li>• <strong>Projective tests:</strong> Rorschach inkblots</li>
                <li>• <strong>Observational:</strong> Behavioral assessment</li>
                <li>• <strong>Interviews:</strong> Clinical interviews</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Psychological Disorders",
        objective: "obj_009",
        text: `
          <h3>Psychological Disorders</h3>
          <p>Psychological disorders are patterns of behavior that cause distress or impairment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Disorders</h4>
              <ul>
                <li>• <strong>Anxiety disorders:</strong> Excessive fear</li>
                <li>• <strong>Mood disorders:</strong> Depression, bipolar</li>
                <li>• <strong>Schizophrenia:</strong> Psychosis</li>
                <li>• <strong>Personality disorders:</strong> Patterns</li>
                <li>• <strong>Eating disorders:</strong> Anorexia, bulimia</li>
                <li>• <strong>Substance use disorders:</strong> Addiction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Treatment</h4>
              <ul>
                <li>• <strong>Psychotherapy:</strong> Talk therapy</li>
                <li>• <strong>Medication:</strong> Antidepressants, antipsychotics</li>
                <li>• <strong>CBT:</strong> Cognitive Behavioral Therapy</li>
                <li>• <strong>Psychoanalysis:</strong> Unconscious exploration</li>
                <li>• <strong>Humanistic:</strong> Person-centered therapy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Social Psychology",
        objective: "obj_010",
        text: `
          <h3>Social Psychology</h3>
          <p>Social psychology studies how people think about, influence, and relate to others.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Conformity:</strong> Changing behavior to fit in</li>
                <li>• <strong>Obedience:</strong> Following authority</li>
                <li>• <strong>Groupthink:</strong> Conformity in groups</li>
                <li>• <strong>Prejudice:</strong> Unfair judgments</li>
                <li>• <strong>Stereotypes:</strong> Generalized beliefs</li>
                <li>• <strong>Attribution:</strong> Explaining behavior</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Famous Studies</h4>
              <ul>
                <li>• <strong>Milgram:</strong> Obedience experiment</li>
                <li>• <strong>Zimbardo:</strong> Stanford prison experiment</li>
                <li>• <strong>Asch:</strong> Conformity experiments</li>
                <li>• <strong>Sherif:</strong> Robbers Cave experiment</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Research Methods",
        objective: "obj_011",
        text: `
          <h3>Research Methods in Psychology</h3>
          <p>Psychologists use various research methods to study behavior.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Research</h4>
              <ul>
                <li>• <strong>Experimental:</strong> Cause and effect</li>
                <li>• <strong>Correlational:</strong> Relationship between variables</li>
                <li>• <strong>Descriptive:</strong> Observational</li>
                <li>• <strong>Case study:</strong> In-depth individual</li>
                <li>• <strong>Survey:</strong> Questionnaires</li>
                <li>• <strong>Longitudinal:</strong> Over time</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Ethical Considerations</h4>
              <ul>
                <li>• <strong>Informed consent:</strong> Participants agree</li>
                <li>• <strong>Confidentiality:</strong> Privacy</li>
                <li>• <strong>Debriefing:</strong> Explain after</li>
                <li>• <strong>No harm:</strong> Protect participants</li>
                <li>• <strong>Ethical review:</strong> Approval</li>
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
          <h4>🧠 Psychology</h4>
          <ul>
            <li>• Scientific study of mind and behavior</li>
            <li>• Multiple branches: clinical, cognitive, developmental</li>
            <li>• Nature vs nurture interaction</li>
            <li>• Learning through conditioning</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Areas</h4>
          <ul>
            <li>• Brain and nervous system</li>
            <li>• Personality and development</li>
            <li>• Psychological disorders and treatment</li>
            <li>• Social influence and research</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Psychology helps us understand ourselves and others, improving mental health and well-being.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Psychology is just common sense",
        correction: "Psychology is a scientific discipline",
        explanation: "Psychology uses scientific methods and research."
      },
      {
        id: "mis_002",
        misconception: "Psychologists can read minds",
        correction: "Psychologists study behavior and mental processes",
        explanation: "Psychology is based on observation and research."
      },
      {
        id: "mis_003",
        misconception: "Mental illness is a sign of weakness",
        correction: "Mental illness is a medical condition",
        explanation: "Mental health disorders are treatable conditions."
      },
      {
        id: "mis_004",
        misconception: "All therapy is the same",
        correction: "There are many different therapeutic approaches",
        explanation: "Different therapies work for different conditions."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Mental Health",
        description: "Psychology helps treat mental illness.",
        example: "Therapy, counseling, medication"
      },
      {
        id: "app_002",
        title: "Education",
        description: "Psychology improves learning.",
        example: "Teaching methods, classroom management"
      },
      {
        id: "app_003",
        title: "Workplace",
        description: "Psychology improves work performance.",
        example: "Motivation, leadership, teamwork"
      },
      {
        id: "app_004",
        title: "Relationships",
        description: "Psychology improves relationships.",
        example: "Communication, conflict resolution"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Psychology", definition: "The scientific study of mind and behavior." },
    { term: "Behavior", definition: "Observable actions of an organism." },
    { term: "Cognition", definition: "Mental processes like thinking and memory." },
    { term: "Emotion", definition: "Feelings and moods." },
    { term: "Nature", definition: "Genetic and biological influences." },
    { term: "Nurture", definition: "Environmental and social influences." },
    { term: "Conditioning", definition: "Learning through association or consequences." },
    { term: "Personality", definition: "Unique pattern of thoughts and behaviors." },
    { term: "Disorder", definition: "A pattern of behavior causing distress." },
    { term: "Therapy", definition: "Treatment for psychological disorders." },
    { term: "Neuron", definition: "A nerve cell." },
    { term: "Neurotransmitter", definition: "A chemical messenger in the brain." },
    { term: "Consciousness", definition: "Awareness of the self and environment." },
    { term: "Memory", definition: "The storage and retrieval of information." },
    { term: "Motivation", definition: "The drive to act." },
    { term: "Stress", definition: "The body's response to demands." },
    { term: "Social Influence", definition: "The effect of others on behavior." },
    { term: "Research Method", definition: "A scientific approach to study." },
    { term: "Ethics", definition: "Moral principles in research." },
    { term: "Mental Health", definition: "Emotional and psychological well-being." }
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
      question: "What is psychology?",
      type: "multiple_choice",
      options: [
        "The study of the brain only",
        "The scientific study of mind and behavior",
        "The study of medicine",
        "The study of the body"
      ],
      answer: "The scientific study of mind and behavior",
      explanation: "Psychology is the scientific study of mind and behavior."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is clinical psychology?",
      type: "multiple_choice",
      options: [
        "The study of thinking",
        "The study and treatment of mental disorders",
        "The study of development",
        "The study of the brain"
      ],
      answer: "The study and treatment of mental disorders",
      explanation: "Clinical psychology focuses on mental health disorders."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the nature vs nurture debate?",
      type: "multiple_choice",
      options: [
        "The influence of genetics vs environment",
        "The influence of nutrition",
        "The influence of education",
        "The influence of exercise"
      ],
      answer: "The influence of genetics vs environment",
      explanation: "Nature vs nurture is about genetics and environment."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Who founded psychoanalysis?",
      type: "multiple_choice",
      options: ["Pavlov", "Freud", "Skinner", "Maslow"],
      answer: "Freud",
      explanation: "Sigmund Freud founded psychoanalysis."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What part of the brain controls thinking and memory?",
      type: "multiple_choice",
      options: ["Cerebellum", "Cerebrum", "Brainstem", "Hypothalamus"],
      answer: "Cerebrum",
      explanation: "The cerebrum controls thinking and memory."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is classical conditioning?",
      type: "multiple_choice",
      options: [
        "Learning through consequences",
        "Learning through association",
        "Learning through observation",
        "Learning through punishment"
      ],
      answer: "Learning through association",
      explanation: "Classical conditioning is learning through association."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which stage of development is adolescence?",
      type: "multiple_choice",
      options: ["0-2 years", "2-6 years", "11-18 years", "18-65 years"],
      answer: "11-18 years",
      explanation: "Adolescence is approximately 11-18 years."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What are the Big Five personality traits?",
      type: "multiple_choice",
      options: [
        "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
        "Honesty, Kindness, Intelligence, Creativity, Patience",
        "Strength, Courage, Wisdom, Justice, Temperance",
        "Ego, Superego, Id, Defense Mechanisms"
      ],
      answer: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
      explanation: "The Big Five are OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is depression?",
      type: "multiple_choice",
      options: [
        "A normal mood",
        "A mood disorder",
        "A personality type",
        "A cognitive style"
      ],
      answer: "A mood disorder",
      explanation: "Depression is a mood disorder."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is conformity?",
      type: "multiple_choice",
      options: [
        "Changing behavior to fit in",
        "Following orders",
        "Resisting social pressure",
        "Leading a group"
      ],
      answer: "Changing behavior to fit in",
      explanation: "Conformity is changing behavior to fit in."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an experimental research method?",
      type: "multiple_choice",
      options: [
        "Observing behavior",
        "Studying cause and effect",
        "Surveys",
        "Case studies"
      ],
      answer: "Studying cause and effect",
      explanation: "Experimental research studies cause and effect."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of emotions?",
      type: "multiple_choice",
      options: [
        "They have no role",
        "They influence behavior and decision-making",
        "They only cause problems",
        "They are irrelevant"
      ],
      answer: "They influence behavior and decision-making",
      explanation: "Emotions influence behavior and decision-making."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is memory?",
      type: "multiple_choice",
      options: [
        "The storage and retrieval of information",
        "The ability to speak",
        "The ability to move",
        "The ability to eat"
      ],
      answer: "The storage and retrieval of information",
      explanation: "Memory is the storage and retrieval of information."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is stress?",
      type: "multiple_choice",
      options: [
        "The body's response to demands",
        "A mental disorder",
        "A personality trait",
        "An emotion"
      ],
      answer: "The body's response to demands",
      explanation: "Stress is the body's response to demands."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is schizophrenia?",
      type: "multiple_choice",
      options: [
        "A mood disorder",
        "A psychotic disorder",
        "A personality disorder",
        "An anxiety disorder"
      ],
      answer: "A psychotic disorder",
      explanation: "Schizophrenia is a psychotic disorder."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_psychology",
    title: "Psychology Quiz",
    description: "Test your understanding of psychology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is psychology?",
        type: "short_answer",
        answer_key: "The scientific study of mind and behavior",
        explanation: "Psychology is the scientific study of mind and behavior."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one branch of psychology.",
        type: "short_answer",
        answer_key: "Clinical psychology (or any valid)",
        explanation: "Clinical psychology is a branch of psychology."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the nature vs nurture debate about?",
        type: "short_answer",
        answer_key: "The influence of genetics vs environment",
        explanation: "Nature vs nurture is about genetics and environment."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Who founded psychoanalysis?",
        type: "short_answer",
        answer_key: "Freud",
        explanation: "Sigmund Freud founded psychoanalysis."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What part of the brain controls thinking and memory?",
        type: "short_answer",
        answer_key: "Cerebrum",
        explanation: "The cerebrum controls thinking and memory."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is classical conditioning?",
        type: "short_answer",
        answer_key: "Learning through association",
        explanation: "Classical conditioning is learning through association."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Which stage of development is adolescence?",
        type: "short_answer",
        answer_key: "11-18 years",
        explanation: "Adolescence is approximately 11-18 years."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What are the Big Five personality traits?",
        type: "short_answer",
        answer_key: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
        explanation: "The Big Five are OCEAN."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is depression?",
        type: "short_answer",
        answer_key: "A mood disorder",
        explanation: "Depression is a mood disorder."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is conformity?",
        type: "short_answer",
        answer_key: "Changing behavior to fit in",
        explanation: "Conformity is changing behavior to fit in."
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
        "Understand psychology and its branches",
        "Explain nature vs nurture",
        "Describe major schools of thought",
        "Understand psychological disorders"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is psychology?" },
        { time: "5-10 min", activity: "Direct Instruction - Branches of Psychology" },
        { time: "10-15 min", activity: "Direct Instruction - Nature vs Nurture" },
        { time: "15-20 min", activity: "Direct Instruction - Schools of Thought" },
        { time: "20-25 min", activity: "Direct Instruction - The Brain" },
        { time: "25-30 min", activity: "Direct Instruction - Learning and Memory" },
        { time: "30-35 min", activity: "Direct Instruction - Disorders and Treatment" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The scientific study of mind and behavior",
        prac_002: "The study and treatment of mental disorders",
        prac_003: "The influence of genetics vs environment",
        prac_004: "Freud",
        prac_005: "Cerebrum",
        prac_006: "Learning through association",
        prac_007: "11-18 years",
        prac_008: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
        prac_009: "A mood disorder",
        prac_010: "Changing behavior to fit in",
        prac_011: "Studying cause and effect",
        prac_012: "They influence behavior and decision-making",
        prac_013: "The storage and retrieval of information",
        prac_014: "The body's response to demands",
        prac_015: "A psychotic disorder"
      },
      assessment: {
        ass_001: "The scientific study of mind and behavior",
        ass_002: "Clinical psychology (or any valid)",
        ass_003: "The influence of genetics vs environment",
        ass_004: "Freud",
        ass_005: "Cerebrum",
        ass_006: "Learning through association",
        ass_007: "11-18 years",
        ass_008: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
        ass_009: "A mood disorder",
        ass_010: "Changing behavior to fit in"
      }
    },
    extensionActivities: [
      "Research a psychologist",
      "Study a psychological experiment",
      "Research mental health",
      "Learn about therapy methods"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research psychological research",
        "Study clinical psychology",
        "Research neuropsychology",
        "Study positive psychology"
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
      title: "Branches of Psychology",
      description: "Diagram showing branches of psychology",
      url: "/diagrams/psychology-branches.png",
      alt: "Psychology branches diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "The Brain",
      description: "Diagram of the brain",
      url: "/diagrams/brain-diagram.png",
      alt: "Brain diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Maslow's Hierarchy of Needs",
      description: "Diagram showing Maslow's hierarchy",
      url: "/diagrams/maslow-hierarchy.png",
      alt: "Maslow's hierarchy diagram"
    }
  ]
};