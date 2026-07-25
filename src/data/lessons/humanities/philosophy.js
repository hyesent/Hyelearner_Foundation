// Location: src/data/lessons/humanities/philosophy.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_philosophy",
  subject: "Philosophy",
  topic: "Philosophy",
  name: "Philosophy",
  icon: "🤔",
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
    "Understanding of basic reasoning",
    "Interest in ideas",
    "Curiosity about life's big questions",
    "Openness to different perspectives"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Religious Studies",
      file: "humanities/religious_studies.js"
    },
    {
      name: "Ethics",
      file: "humanities/ethics.js"
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
      description: "Define philosophy and explain its importance",
      indicator: "Student can explain what philosophy is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main branches of philosophy",
      indicator: "Student can list the major branches of philosophy"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of logic and reasoning",
      indicator: "Student can describe what logic is"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the contributions of major philosophers",
      indicator: "Student can describe the ideas of Socrates, Plato, and Aristotle"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the concept of metaphysics",
      indicator: "Student can describe what metaphysics is about"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of epistemology",
      indicator: "Student can describe what epistemology is about"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of ethics",
      indicator: "Student can describe what ethics is about"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of aesthetics",
      indicator: "Student can describe what aesthetics is about"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the different schools of philosophy",
      indicator: "Student can distinguish between rationalism, empiricism, and idealism"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the nature of reality",
      indicator: "Student can discuss metaphysical questions about existence"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the nature of knowledge",
      indicator: "Student can discuss epistemological questions about truth"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of free will versus determinism",
      indicator: "Student can discuss the debate between free will and determinism"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the meaning of life",
      indicator: "Student can discuss different philosophical views on meaning"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe African philosophy",
      indicator: "Student can explain the key ideas in African philosophy"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the relationship between philosophy and science",
      indicator: "Student can discuss how philosophy relates to science"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the importance of philosophy in everyday life",
      indicator: "Student can discuss how philosophy applies to daily life"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Philosophy - The Love of Wisdom",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about philosophy, its branches, major philosophers, and the big questions of life."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Philosophy</h2>
      <p><strong>Philosophy</strong> is the love of wisdom. It is the study of fundamental questions about existence, knowledge, values, reason, mind, and language. Philosophy encourages us to think deeply, question assumptions, and seek understanding about the world and our place in it.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🤔 Key Concepts</h3>
          <ul>
            <li>✓ Metaphysics</li>
            <li>✓ Epistemology</li>
            <li>✓ Ethics</li>
            <li>✓ Logic</li>
            <li>✓ Aesthetics</li>
            <li>✓ Major Philosophers</li>
            <li>✓ Schools of Thought</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Philosophy means "love of wisdom" in Greek</li>
            <li>• Socrates is the father of Western philosophy</li>
            <li>• Philosophy has been studied for over 2,500 years</li>
            <li>• African philosophy has a rich tradition</li>
            <li>• Philosophy asks the biggest questions</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Philosophy Matters</h4>
        <p>Philosophy helps us think critically, question assumptions, and understand the big questions of life. It develops reasoning skills and deepens our understanding of the world.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Philosophy?",
        objective: "obj_001",
        text: `
          <h3>Understanding Philosophy</h3>
          <p><strong>Philosophy</strong> is the systematic study of fundamental questions about existence, knowledge, values, reason, and language.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Questions</h4>
              <ul>
                <li>• <strong>What is real?</strong> Metaphysics</li>
                <li>• <strong>What can we know?</strong> Epistemology</li>
                <li>• <strong>What is right and wrong?</strong> Ethics</li>
                <li>• <strong>How should we live?</strong> Ethics</li>
                <li>• <strong>What is beautiful?</strong> Aesthetics</li>
                <li>• <strong>What is truth?</strong> Logic</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Philosophical Method</h4>
              <ul>
                <li>• <strong>Question:</strong> Ask fundamental questions</li>
                <li>• <strong>Analyze:</strong> Examine concepts and arguments</li>
                <li>• <strong>Reason:</strong> Use logic and evidence</li>
                <li>• <strong>Evaluate:</strong> Assess different perspectives</li>
                <li>• <strong>Conclude:</strong> Reach reasoned conclusions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Branches of Philosophy",
        objective: "obj_002",
        text: `
          <h3>Branches of Philosophy</h3>
          <p>Philosophy is divided into several main branches.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Branches</h4>
              <ul>
                <li>• <strong>Metaphysics:</strong> The nature of reality</li>
                <li>• <strong>Epistemology:</strong> The nature of knowledge</li>
                <li>• <strong>Ethics:</strong> Moral philosophy</li>
                <li>• <strong>Logic:</strong> The principles of reasoning</li>
                <li>• <strong>Aesthetics:</strong> The nature of beauty</li>
                <li>• <strong>Political philosophy:</strong> Government and society</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Questions in Each Branch</h4>
              <ul>
                <li>• <strong>Metaphysics:</strong> What is existence?</li>
                <li>• <strong>Epistemology:</strong> How do we know?</li>
                <li>• <strong>Ethics:</strong> What is the good life?</li>
                <li>• <strong>Logic:</strong> What is valid reasoning?</li>
                <li>• <strong>Aesthetics:</strong> What is beauty?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Logic and Reasoning",
        objective: "obj_003",
        text: `
          <h3>Logic and Reasoning</h3>
          <p><strong>Logic</strong> is the study of valid reasoning and argumentation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Logic</h4>
              <ul>
                <li>• <strong>Deductive logic:</strong> Conclusion follows necessarily</li>
                <li>• <strong>Inductive logic:</strong> Conclusion follows probably</li>
                <li>• <strong>Formal logic:</strong> Structure of arguments</li>
                <li>• <strong>Informal logic:</strong> Everyday reasoning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Deductive:</strong> All humans are mortal. Socrates is human. Therefore, Socrates is mortal.</li>
                <li>• <strong>Inductive:</strong> Every swan I've seen is white. Therefore, all swans are white.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Major Philosophers",
        objective: "obj_004",
        text: `
          <h3>Major Philosophers</h3>
          <p>Several philosophers have shaped Western and global thought.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Socrates</h4>
              <ul>
                <li>• Father of Western philosophy</li>
                <li>• Socratic method: questioning</li>
                <li>• "Know thyself"</li>
                <li>• The unexamined life is not worth living</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Plato</h4>
              <ul>
                <li>• Student of Socrates</li>
                <li>• Theory of Forms</li>
                <li>• The Republic</li>
                <li>• Ideal state</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Aristotle</h4>
              <ul>
                <li>• Student of Plato</li>
                <li>• Ethics and virtue</li>
                <li>• Logic and science</li>
                <li>• Golden mean</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Descartes</h4>
              <ul>
                <li>• "I think, therefore I am"</li>
                <li>• Rationalism</li>
                <li>• Mind-body dualism</li>
                <li>• Modern philosophy</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Kant</h4>
              <ul>
                <li>• Categorical imperative</li>
                <li>• Ethics of duty</li>
                <li>• Enlightenment thinker</li>
                <li>• Critique of Pure Reason</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Nietzsche</h4>
              <ul>
                <li>• "God is dead"</li>
                <li>• Will to power</li>
                <li>• Beyond Good and Evil</li>
                <li>• Existentialism</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Metaphysics",
        objective: "obj_005",
        text: `
          <h3>Metaphysics - The Nature of Reality</h3>
          <p><strong>Metaphysics</strong> is the branch of philosophy that deals with the nature of reality.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Questions</h4>
              <ul>
                <li>• <strong>What is existence?</strong></li>
                <li>• <strong>What is the nature of being?</strong></li>
                <li>• <strong>What is the mind?</strong></li>
                <li>• <strong>What is time and space?</strong></li>
                <li>• <strong>Does God exist?</strong></li>
                <li>• <strong>Are we free?</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Ontology:</strong> The study of being</li>
                <li>• <strong>Dualism:</strong> Mind and body are separate</li>
                <li>• <strong>Materialism:</strong> Only matter exists</li>
                <li>• <strong>Idealism:</strong> Reality is mental</li>
                <li>• <strong>Determinism:</strong> Everything is predetermined</li>
                <li>• <strong>Free will:</strong> We choose freely</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Epistemology",
        objective: "obj_006",
        text: `
          <h3>Epistemology - The Nature of Knowledge</h3>
          <p><strong>Epistemology</strong> is the branch of philosophy that deals with the nature of knowledge.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Questions</h4>
              <ul>
                <li>• <strong>What is knowledge?</strong></li>
                <li>• <strong>How do we know?</strong></li>
                <li>• <strong>What is truth?</strong></li>
                <li>• <strong>What are the limits of knowledge?</strong></li>
                <li>• <strong>Can we trust our senses?</strong></li>
                <li>• <strong>What is justification?</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Rationalism:</strong> Reason is the source of knowledge</li>
                <li>• <strong>Empiricism:</strong> Experience is the source of knowledge</li>
                <li>• <strong>Skepticism:</strong> Doubting knowledge claims</li>
                <li>• <strong>Justified true belief:</strong> Traditional definition of knowledge</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "African Philosophy",
        objective: "obj_014",
        text: `
          <h3>African Philosophy</h3>
          <p><strong>African philosophy</strong> is the philosophical tradition of Africa.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Ubuntu:</strong> "I am because we are"</li>
                <li>• <strong>Community:</strong> Importance of community</li>
                <li>• <strong>Oral tradition:</strong> Wisdom passed down</li>
                <li>• <strong>Spirituality:</strong> Connection to the divine</li>
                <li>• <strong>Ancestors:</strong> Role of ancestors</li>
                <li>• <strong>Harmony:</strong> Balance in life</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Philosophers</h4>
              <ul>
                <li>• <strong>Kwame Nkrumah:</strong> Consciencism</li>
                <li>• <strong>Leopold Senghor:</strong> Negritude</li>
                <li>• <strong>Chinua Achebe:</strong> Things Fall Apart</li>
                <li>• <strong>Sophie Oluwole:</strong> African philosophy</li>
                <li>• <strong>John Mbiti:</strong> African religions</li>
                <li>• <strong>Kwame Gyekye:</strong> African philosophy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Philosophy in Daily Life",
        objective: "obj_016",
        text: `
          <h3>Philosophy in Everyday Life</h3>
          <p>Philosophy is not just abstract theory—it has practical applications.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Critical thinking:</strong> Evaluating arguments</li>
                <li>• <strong>Decision making:</strong> Making better choices</li>
                <li>• <strong>Ethical reasoning:</strong> Moral decisions</li>
                <li>• <strong>Self-reflection:</strong> Understanding yourself</li>
                <li>• <strong>Questioning assumptions:</strong> Thinking deeper</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Everyday philosophy:</strong> Questioning "why?"</li>
                <li>• <strong>Moral choices:</strong> Deciding what is right</li>
                <li>• <strong>Career decisions:</strong> Finding meaning</li>
                <li>• <strong>Relationships:</strong> Understanding others</li>
                <li>• <strong>Life purpose:</strong> Finding meaning</li>
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
          <h4>🤔 Philosophy</h4>
          <ul>
            <li>• Love of wisdom</li>
            <li>• Branches: metaphysics, epistemology, ethics, logic, aesthetics</li>
            <li>• Major philosophers: Socrates, Plato, Aristotle</li>
            <li>• Key concepts: reasoning, knowledge, reality</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Ideas</h4>
          <ul>
            <li>• African philosophy: Ubuntu, community</li>
            <li>• Philosophy in daily life</li>
            <li>• Critical thinking and reasoning</li>
            <li>• The big questions of life</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Philosophy is the love of wisdom. It encourages us to think deeply, question assumptions, and seek understanding about ourselves and the world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Philosophy is impractical",
        correction: "Philosophy has practical applications in daily life",
        explanation: "Philosophy develops critical thinking and ethical reasoning."
      },
      {
        id: "mis_002",
        misconception: "Philosophy is only for academics",
        correction: "Philosophy is for everyone",
        explanation: "Everyone asks philosophical questions about life."
      },
      {
        id: "mis_003",
        misconception: "There are no answers in philosophy",
        correction: "Philosophy provides reasoned answers",
        explanation: "Philosophy offers well-reasoned perspectives on questions."
      },
      {
        id: "mis_004",
        misconception: "African philosophy doesn't exist",
        correction: "African philosophy has a rich tradition",
        explanation: "African philosophy includes Ubuntu and other important concepts."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Critical Thinking",
        description: "Philosophy develops critical thinking skills.",
        example: "Evaluating arguments, making decisions"
      },
      {
        id: "app_002",
        title: "Ethics",
        description: "Philosophy guides moral decisions.",
        example: "Right and wrong, ethical dilemmas"
      },
      {
        id: "app_003",
        title: "Self-Reflection",
        description: "Philosophy encourages self-understanding.",
        example: "Knowing oneself, life purpose"
      },
      {
        id: "app_004",
        title: "Society",
        description: "Philosophy shapes society.",
        example: "Political philosophy, justice"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Philosophy", definition: "The love of wisdom; the study of fundamental questions." },
    { term: "Metaphysics", definition: "The branch of philosophy dealing with the nature of reality." },
    { term: "Epistemology", definition: "The branch of philosophy dealing with the nature of knowledge." },
    { term: "Ethics", definition: "The branch of philosophy dealing with right and wrong." },
    { term: "Logic", definition: "The study of valid reasoning." },
    { term: "Aesthetics", definition: "The branch of philosophy dealing with beauty." },
    { term: "Socrates", definition: "A Greek philosopher, father of Western philosophy." },
    { term: "Plato", definition: "A Greek philosopher, student of Socrates." },
    { term: "Aristotle", definition: "A Greek philosopher, student of Plato." },
    { term: "Rationalism", definition: "The view that reason is the primary source of knowledge." },
    { term: "Empiricism", definition: "The view that experience is the primary source of knowledge." },
    { term: "Ubuntu", definition: "An African philosophy meaning 'I am because we are'." },
    { term: "Dualism", definition: "The view that mind and body are separate." },
    { term: "Determinism", definition: "The view that everything is predetermined." },
    { term: "Free Will", definition: "The ability to choose freely." },
    { term: "Skepticism", definition: "The view that knowledge is uncertain." },
    { term: "Ontology", definition: "The study of being." },
    { term: "Ethics", definition: "The study of right and wrong." },
    { term: "Virtue", definition: "A moral excellence." },
    { term: "Wisdom", definition: "The quality of having experience, knowledge, and good judgment." }
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
      question: "What is philosophy?",
      type: "multiple_choice",
      options: [
        "The study of science",
        "The love of wisdom",
        "The study of history",
        "The study of art"
      ],
      answer: "The love of wisdom",
      explanation: "Philosophy means 'love of wisdom.'"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a branch of philosophy?",
      type: "multiple_choice",
      options: ["Metaphysics", "Biology", "Chemistry", "Physics"],
      answer: "Metaphysics",
      explanation: "Metaphysics is a branch of philosophy."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is logic?",
      type: "multiple_choice",
      options: [
        "The study of knowledge",
        "The study of valid reasoning",
        "The study of beauty",
        "The study of reality"
      ],
      answer: "The study of valid reasoning",
      explanation: "Logic is the study of valid reasoning."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Who is the father of Western philosophy?",
      type: "multiple_choice",
      options: ["Plato", "Aristotle", "Socrates", "Kant"],
      answer: "Socrates",
      explanation: "Socrates is the father of Western philosophy."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does metaphysics study?",
      type: "multiple_choice",
      options: [
        "The nature of knowledge",
        "The nature of reality",
        "The nature of beauty",
        "The nature of reasoning"
      ],
      answer: "The nature of reality",
      explanation: "Metaphysics studies the nature of reality."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does epistemology study?",
      type: "multiple_choice",
      options: [
        "The nature of reality",
        "The nature of knowledge",
        "The nature of beauty",
        "The nature of reasoning"
      ],
      answer: "The nature of knowledge",
      explanation: "Epistemology studies the nature of knowledge."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does ethics study?",
      type: "multiple_choice",
      options: [
        "The nature of reality",
        "The nature of knowledge",
        "Right and wrong",
        "The nature of beauty"
      ],
      answer: "Right and wrong",
      explanation: "Ethics studies right and wrong."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does aesthetics study?",
      type: "multiple_choice",
      options: [
        "The nature of reality",
        "The nature of knowledge",
        "The nature of beauty",
        "The nature of reasoning"
      ],
      answer: "The nature of beauty",
      explanation: "Aesthetics studies the nature of beauty."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is rationalism?",
      type: "multiple_choice",
      options: [
        "The view that reason is the source of knowledge",
        "The view that experience is the source of knowledge",
        "The view that knowledge is uncertain",
        "The view that only matter exists"
      ],
      answer: "The view that reason is the source of knowledge",
      explanation: "Rationalism holds that reason is the source of knowledge."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the nature of reality?",
      type: "multiple_choice",
      options: [
        "A philosophical question",
        "A scientific question",
        "A historical question",
        "An artistic question"
      ],
      answer: "A philosophical question",
      explanation: "The nature of reality is a philosophical question."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the nature of knowledge?",
      type: "multiple_choice",
      options: [
        "A philosophical question",
        "A scientific question",
        "A historical question",
        "An artistic question"
      ],
      answer: "A philosophical question",
      explanation: "The nature of knowledge is a philosophical question."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is free will?",
      type: "multiple_choice",
      options: [
        "The ability to choose freely",
        "The lack of choice",
        "The predetermined nature of events",
        "The randomness of events"
      ],
      answer: "The ability to choose freely",
      explanation: "Free will is the ability to choose freely."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the meaning of life?",
      type: "multiple_choice",
      options: [
        "A philosophical question",
        "A scientific question",
        "A historical question",
        "An artistic question"
      ],
      answer: "A philosophical question",
      explanation: "The meaning of life is a philosophical question."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is Ubuntu?",
      type: "multiple_choice",
      options: [
        "A European philosophy",
        "An African philosophy meaning 'I am because we are'",
        "A type of music",
        "A type of art"
      ],
      answer: "An African philosophy meaning 'I am because we are'",
      explanation: "Ubuntu is an African philosophy meaning 'I am because we are.'"
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does philosophy relate to science?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Philosophy is the foundation of science",
        "They have no relation",
        "Science is the foundation of philosophy"
      ],
      answer: "Philosophy is the foundation of science",
      explanation: "Philosophy provides the foundational questions for science."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_philosophy",
    title: "Philosophy Quiz",
    description: "Test your understanding of philosophy",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is philosophy?",
        type: "short_answer",
        answer_key: "The love of wisdom",
        explanation: "Philosophy means 'love of wisdom.'"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a branch of philosophy?",
        type: "short_answer",
        answer_key: "Metaphysics (or any valid)",
        explanation: "Metaphysics is a branch of philosophy."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is logic?",
        type: "short_answer",
        answer_key: "The study of valid reasoning",
        explanation: "Logic is the study of valid reasoning."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Who is the father of Western philosophy?",
        type: "short_answer",
        answer_key: "Socrates",
        explanation: "Socrates is the father of Western philosophy."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does metaphysics study?",
        type: "short_answer",
        answer_key: "The nature of reality",
        explanation: "Metaphysics studies the nature of reality."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What does epistemology study?",
        type: "short_answer",
        answer_key: "The nature of knowledge",
        explanation: "Epistemology studies the nature of knowledge."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does ethics study?",
        type: "short_answer",
        answer_key: "Right and wrong",
        explanation: "Ethics studies right and wrong."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does aesthetics study?",
        type: "short_answer",
        answer_key: "The nature of beauty",
        explanation: "Aesthetics studies the nature of beauty."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is rationalism?",
        type: "short_answer",
        answer_key: "The view that reason is the source of knowledge",
        explanation: "Rationalism holds that reason is the source of knowledge."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is Ubuntu?",
        type: "short_answer",
        answer_key: "An African philosophy meaning 'I am because we are'",
        explanation: "Ubuntu means 'I am because we are.'"
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
        "Understand philosophy and its branches",
        "Explain major philosophers",
        "Describe metaphysics and epistemology",
        "Understand African philosophy"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is philosophy?" },
        { time: "5-10 min", activity: "Direct Instruction - Branches of Philosophy" },
        { time: "10-15 min", activity: "Direct Instruction - Logic and Reasoning" },
        { time: "15-20 min", activity: "Direct Instruction - Major Philosophers" },
        { time: "20-25 min", activity: "Direct Instruction - Metaphysics" },
        { time: "25-30 min", activity: "Direct Instruction - Epistemology" },
        { time: "30-35 min", activity: "Direct Instruction - African Philosophy" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The love of wisdom",
        prac_002: "Metaphysics",
        prac_003: "The study of valid reasoning",
        prac_004: "Socrates",
        prac_005: "The nature of reality",
        prac_006: "The nature of knowledge",
        prac_007: "Right and wrong",
        prac_008: "The nature of beauty",
        prac_009: "The view that reason is the source of knowledge",
        prac_010: "A philosophical question",
        prac_011: "A philosophical question",
        prac_012: "The ability to choose freely",
        prac_013: "A philosophical question",
        prac_014: "An African philosophy meaning 'I am because we are'",
        prac_015: "Philosophy is the foundation of science"
      },
      assessment: {
        ass_001: "The love of wisdom",
        ass_002: "Metaphysics (or any valid)",
        ass_003: "The study of valid reasoning",
        ass_004: "Socrates",
        ass_005: "The nature of reality",
        ass_006: "The nature of knowledge",
        ass_007: "Right and wrong",
        ass_008: "The nature of beauty",
        ass_009: "The view that reason is the source of knowledge",
        ass_010: "An African philosophy meaning 'I am because we are'"
      }
    },
    extensionActivities: [
      "Discuss a philosophical question",
      "Research a philosopher",
      "Explore African philosophy",
      "Write a philosophical reflection"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Read primary philosophical texts",
        "Write a philosophical essay",
        "Research philosophy of science",
        "Study existentialism"
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
      title: "Branches of Philosophy",
      description: "Diagram showing branches of philosophy",
      url: "/diagrams/philosophy-branches.png",
      alt: "Philosophy branches diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Major Philosophers",
      description: "Diagram of major philosophers",
      url: "/diagrams/major-philosophers.png",
      alt: "Major philosophers diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "African Philosophy",
      description: "Diagram of African philosophy concepts",
      url: "/diagrams/african-philosophy.png",
      alt: "African philosophy diagram"
    }
  ]
};