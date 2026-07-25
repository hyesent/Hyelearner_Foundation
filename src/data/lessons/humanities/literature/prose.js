// Location: src/data/lessons/humanities/literature/prose.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_prose",
  subject: "Literature",
  topic: "Prose",
  name: "Prose",
  icon: "📖",
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
    "Understanding of language",
    "Interest in literature",
    "Basic understanding of storytelling",
    "Ability to read and analyze texts"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Drama",
      file: "humanities/literature/drama.js"
    },
    {
      name: "Literary Devices",
      file: "humanities/literature/literary_devices.js"
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
      description: "Define prose and explain its importance",
      indicator: "Student can explain what prose is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of prose",
      indicator: "Student can distinguish between fiction and non-fiction"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the elements of prose",
      indicator: "Student can describe plot, character, setting, and theme"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the structure of a novel",
      indicator: "Student can describe the parts of a novel"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe character development",
      indicator: "Student can explain how characters are developed"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain plot structure",
      indicator: "Student can describe the elements of plot"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of setting in prose",
      indicator: "Student can explain how setting contributes to a story"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the different points of view",
      indicator: "Student can distinguish between first-person, third-person, and omniscient narration"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the use of theme in prose",
      indicator: "Student can identify themes in prose works"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze a prose work",
      indicator: "Student can analyze a novel or short story"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the historical and cultural context of prose",
      indicator: "Student can discuss how context influences prose"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze Nigerian prose",
      indicator: "Student can discuss Nigerian novelists and their works"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the relationship between prose and society",
      indicator: "Student can discuss how prose reflects and influences society"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the use of literary devices in prose",
      indicator: "Student can identify literary devices in prose"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the difference between a novel and a short story",
      indicator: "Student can distinguish between these two forms"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the importance of prose in literature",
      indicator: "Student can discuss the significance of prose"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Prose - The Art of Storytelling",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about prose, its types, elements, and significance in literature."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Prose</h2>
      <p><strong>Prose</strong> is a form of written or spoken language that follows natural speech patterns and grammatical structures. It is the most common form of literature, encompassing novels, short stories, essays, and other forms of writing. Prose allows writers to tell stories, express ideas, and explore human experience in detail.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📖 Key Concepts</h3>
          <ul>
            <li>✓ Types of Prose</li>
            <li>✓ Elements of Prose</li>
            <li>✓ Plot Structure</li>
            <li>✓ Character Development</li>
            <li>✓ Setting</li>
            <li>✓ Point of View</li>
            <li>✓ Theme</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The first novel was written in the 11th century</li>
            <li>• Nigeria has produced many world-class novelists</li>
            <li>• Chinua Achebe's "Things Fall Apart" is a global classic</li>
            <li>• Prose is the most widely read form of literature</li>
            <li>• Short stories are a popular form of prose</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Prose Matters</h4>
        <p>Prose allows us to explore human experience, understand different perspectives, and connect with stories that reflect our lives and the world around us.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Prose?",
        objective: "obj_001",
        text: `
          <h3>Understanding Prose</h3>
          <p><strong>Prose</strong> is a form of language that follows natural speech patterns and grammatical structures, without the rhythmic and metrical constraints of poetry.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Natural language:</strong> Follows speech patterns</li>
                <li>• <strong>Sentences and paragraphs:</strong> Standard structure</li>
                <li>• <strong>No fixed rhythm:</strong> No metrical constraints</li>
                <li>• <strong>Detailed:</strong> Allows for extensive description</li>
                <li>• <strong>Varied:</strong> Can be fiction or non-fiction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Prose vs Poetry</h4>
              <ul>
                <li>• <strong>Prose:</strong> Natural speech, paragraphs</li>
                <li>• <strong>Poetry:</strong> Condensed, rhythmic, line breaks</li>
                <li>• <strong>Prose:</strong> Detailed and expansive</li>
                <li>• <strong>Poetry:</strong> Brief and condensed</li>
                <li>• <strong>Prose:</strong> No rhyme requirement</li>
                <li>• <strong>Poetry:</strong> Often uses rhyme</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Prose",
        objective: "obj_002",
        text: `
          <h3>Types of Prose</h3>
          <p>Prose can be broadly divided into fiction and non-fiction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Fiction</h4>
              <ul>
                <li>• <strong>Novel:</strong> Long, complex narrative</li>
                <li>• <strong>Short story:</strong> Brief narrative</li>
                <li>• <strong>Novella:</strong> Medium-length narrative</li>
                <li>• <strong>Fable:</strong> Short moral tale</li>
                <li>• <strong>Fantasy:</strong> Imaginary worlds</li>
                <li>• <strong>Realism:</strong> Real-life situations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Non-Fiction</h4>
              <ul>
                <li>• <strong>Biography:</strong> Life of a person</li>
                <li>• <strong>Autobiography:</strong> Author's own life</li>
                <li>• <strong>Essay:</strong> Short piece on a topic</li>
                <li>• <strong>Memoir:</strong> Personal recollections</li>
                <li>• <strong>Journalism:</strong> News and reporting</li>
                <li>• <strong>History:</strong> Historical accounts</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Elements of Prose",
        objective: "obj_003",
        text: `
          <h3>Elements of Prose</h3>
          <p>Prose is built on several key elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Plot:</strong> The sequence of events</li>
                <li>• <strong>Character:</strong> The people in the story</li>
                <li>• <strong>Setting:</strong> Time and place</li>
                <li>• <strong>Theme:</strong> The underlying message</li>
                <li>• <strong>Point of View:</strong> Who tells the story</li>
                <li>• <strong>Style:</strong> The author's language</li>
                <li>• <strong>Tone:</strong> The author's attitude</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Plot:</strong> Romeo and Juliet's love story</li>
                <li>• <strong>Character:</strong> Okonkwo in Things Fall Apart</li>
                <li>• <strong>Setting:</strong> 19th century Nigeria</li>
                <li>• <strong>Theme:</strong> Colonization and identity</li>
                <li>• <strong>Point of View:</strong> Third-person narration</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Plot Structure",
        objective: "obj_006",
        text: `
          <h3>Plot Structure</h3>
          <p>The <strong>plot</strong> is the sequence of events in a story, typically following a specific structure.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Elements of Plot</h4>
              <ul>
                <li>• <strong>Exposition:</strong> Introduction of characters and setting</li>
                <li>• <strong>Rising Action:</strong> Events leading to the climax</li>
                <li>• <strong>Climax:</strong> The turning point</li>
                <li>• <strong>Falling Action:</strong> Events after the climax</li>
                <li>• <strong>Resolution:</strong> The conclusion</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Exposition:</strong> Introduction of characters</li>
                <li>• <strong>Rising Action:</strong> Conflicts develop</li>
                <li>• <strong>Climax:</strong> The turning point</li>
                <li>• <strong>Falling Action:</strong> Conflicts resolve</li>
                <li>• <strong>Resolution:</strong> Story ends</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Character Development",
        objective: "obj_005",
        text: `
          <h3>Character Development</h3>
          <p><strong>Characters</strong> are the people in a story, and their development is essential to prose.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Characters</h4>
              <ul>
                <li>• <strong>Protagonist:</strong> Main character</li>
                <li>• <strong>Antagonist:</strong> Opposes the protagonist</li>
                <li>• <strong>Round character:</strong> Complex, fully developed</li>
                <li>• <strong>Flat character:</strong> Simple, one-dimensional</li>
                <li>• <strong>Dynamic character:</strong> Changes during the story</li>
                <li>• <strong>Static character:</strong> Does not change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Character Development</h4>
              <ul>
                <li>• <strong>Direct characterization:</strong> Author tells</li>
                <li>• <strong>Indirect characterization:</strong> Shows through actions</li>
                <li>• <strong>Speech:</strong> What the character says</li>
                <li>• <strong>Actions:</strong> What the character does</li>
                <li>• <strong>Thoughts:</strong> What the character thinks</li>
                <li>• <strong>Appearance:</strong> How the character looks</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Setting and Point of View",
        objective: "obj_007",
        text: `
          <h3>Setting and Point of View</h3>
          <p><strong>Setting</strong> is the time and place where a story occurs. <strong>Point of view</strong> determines who tells the story.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Setting</h4>
              <ul>
                <li>• <strong>Time:</strong> Historical period, time of day</li>
                <li>• <strong>Place:</strong> Location, geography</li>
                <li>• <strong>Social context:</strong> Culture, society</li>
                <li>• <strong>Mood:</strong> Atmosphere created</li>
                <li>• <strong>Function:</strong> Establishes context</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Point of View</h4>
              <ul>
                <li>• <strong>First-person:</strong> "I" narrator</li>
                <li>• <strong>Second-person:</strong> "You" narrator</li>
                <li>• <strong>Third-person limited:</strong> One character's perspective</li>
                <li>• <strong>Third-person omniscient:</strong> All-knowing narrator</li>
                <li>• <strong>Third-person objective:</strong> Only what is seen</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nigerian Prose",
        objective: "obj_012",
        text: `
          <h3>Nigerian Prose</h3>
          <p>Nigeria has a rich tradition of prose literature.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Nigerian Novelists</h4>
              <ul>
                <li>• <strong>Chinua Achebe:</strong> Things Fall Apart</li>
                <li>• <strong>Chimamanda Adichie:</strong> Half of a Yellow Sun</li>
                <li>• <strong>Wole Soyinka:</strong> The Interpreters</li>
                <li>• <strong>Ben Okri:</strong> The Famished Road</li>
                <li>• <strong>Buchi Emecheta:</strong> The Joys of Motherhood</li>
                <li>• <strong>Cyprian Ekwensi:</strong> Jagua Nana</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Themes</h4>
              <ul>
                <li>• <strong>Colonialism:</strong> Impact on African societies</li>
                <li>• <strong>Identity:</strong> Nigerian and African identity</li>
                <li>• <strong>Tradition vs Modernity:</strong> Cultural conflict</li>
                <li>• <strong>Politics:</strong> Post-colonial politics</li>
                <li>• <strong>Gender:</strong> Women's roles</li>
                <li>• <strong>Diaspora:</strong> African experiences abroad</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Analyzing Prose",
        objective: "obj_010",
        text: `
          <h3>Analyzing Prose</h3>
          <p>Analyzing a prose work involves examining its elements and meaning.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps for Analysis</h4>
              <ul>
                <li>1. <strong>Read the text:</strong> Read carefully</li>
                <li>2. <strong>Identify elements:</strong> Plot, character, setting</li>
                <li>3. <strong>Analyze structure:</strong> How it is organized</li>
                <li>4. <strong>Identify themes:</strong> Central messages</li>
                <li>5. <strong>Analyze style:</strong> Author's language</li>
                <li>6. <strong>Consider context:</strong> Historical and cultural</li>
                <li>7. <strong>Interpret meaning:</strong> Deeper significance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example Analysis</h4>
              <p><strong>Things Fall Apart by Chinua Achebe</strong></p>
              <ul>
                <li>• <strong>Plot:</strong> Okonkwo's tragic story</li>
                <li>• <strong>Character:</strong> Okonkwo, complex protagonist</li>
                <li>• <strong>Setting:</strong> 19th century Igbo society</li>
                <li>• <strong>Theme:</strong> Colonization, identity, tradition</li>
                <li>• <strong>Significance:</strong> African perspective on colonialism</li>
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
          <h4>📖 Prose</h4>
          <ul>
            <li>• Types: fiction and non-fiction</li>
            <li>• Elements: plot, character, setting, theme</li>
            <li>• Plot structure: exposition, rising action, climax, falling action, resolution</li>
            <li>• Point of view: first-person, third-person limited, third-person omniscient</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Character development</li>
            <li>• Nigerian prose and novelists</li>
            <li>• Literary analysis</li>
            <li>• Themes in prose</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Prose is the most accessible form of literature. It tells stories that help us understand ourselves and the world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All prose is fiction",
        correction: "Prose includes both fiction and non-fiction",
        explanation: "Non-fiction prose includes essays, biographies, and journalism."
      },
      {
        id: "mis_002",
        misconception: "Novels are the only form of prose",
        correction: "Prose includes short stories, essays, and many other forms",
        explanation: "Prose encompasses many different forms of writing."
      },
      {
        id: "mis_003",
        misconception: "Prose does not use literary devices",
        correction: "Prose uses many literary devices",
        explanation: "Prose uses metaphor, symbolism, imagery, and other devices."
      },
      {
        id: "mis_004",
        misconception: "Only classic prose is valuable",
        correction: "Contemporary prose is equally valuable",
        explanation: "Modern prose explores current themes and issues."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Entertainment",
        description: "Prose entertains readers.",
        example: "Novels, short stories"
      },
      {
        id: "app_002",
        title: "Education",
        description: "Prose is used in education.",
        example: "Textbooks, literature"
      },
      {
        id: "app_003",
        title: "Information",
        description: "Prose conveys information.",
        example: "Journalism, essays"
      },
      {
        id: "app_004",
        title: "Culture",
        description: "Prose preserves culture.",
        example: "Literature, history"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Prose", definition: "A form of language following natural speech patterns." },
    { term: "Fiction", definition: "Imaginative or invented prose." },
    { term: "Non-Fiction", definition: "Prose based on facts and reality." },
    { term: "Plot", definition: "The sequence of events in a story." },
    { term: "Character", definition: "A person in a story." },
    { term: "Setting", definition: "The time and place of a story." },
    { term: "Theme", definition: "The central message of a story." },
    { term: "Point of View", definition: "The perspective from which a story is told." },
    { term: "Protagonist", definition: "The main character." },
    { term: "Antagonist", definition: "A character who opposes the protagonist." },
    { term: "Round Character", definition: "A complex, fully developed character." },
    { term: "Flat Character", definition: "A simple, one-dimensional character." },
    { term: "Dynamic Character", definition: "A character who changes during the story." },
    { term: "Static Character", definition: "A character who does not change." },
    { term: "Exposition", definition: "The introduction of a story." },
    { term: "Climax", definition: "The turning point of a story." },
    { term: "Resolution", definition: "The conclusion of a story." },
    { term: "Novel", definition: "A long work of fiction." },
    { term: "Short Story", definition: "A brief work of fiction." },
    { term: "Essay", definition: "A short piece of non-fiction." }
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
      question: "What is prose?",
      type: "multiple_choice",
      options: [
        "A form of poetry",
        "A form of language following natural speech patterns",
        "A type of drama",
        "A type of music"
      ],
      answer: "A form of language following natural speech patterns",
      explanation: "Prose follows natural speech patterns."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is fiction?",
      type: "multiple_choice",
      options: [
        "Imaginative or invented prose",
        "Based on facts",
        "A type of poetry",
        "A type of drama"
      ],
      answer: "Imaginative or invented prose",
      explanation: "Fiction is imaginative or invented prose."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an element of prose?",
      type: "multiple_choice",
      options: ["Plot", "Rhythm", "Rhyme", "Meter"],
      answer: "Plot",
      explanation: "Plot is an element of prose."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a novel?",
      type: "multiple_choice",
      options: [
        "A short story",
        "A long work of fiction",
        "A type of essay",
        "A biography"
      ],
      answer: "A long work of fiction",
      explanation: "A novel is a long work of fiction."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a round character?",
      type: "multiple_choice",
      options: [
        "A simple character",
        "A complex, fully developed character",
        "A character who does not change",
        "A character who is the main character"
      ],
      answer: "A complex, fully developed character",
      explanation: "A round character is complex and fully developed."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the climax of a story?",
      type: "multiple_choice",
      options: [
        "The beginning",
        "The turning point",
        "The ending",
        "The introduction"
      ],
      answer: "The turning point",
      explanation: "The climax is the turning point of a story."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the setting of a story?",
      type: "multiple_choice",
      options: [
        "The characters",
        "The time and place",
        "The plot",
        "The theme"
      ],
      answer: "The time and place",
      explanation: "The setting is the time and place of a story."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is first-person point of view?",
      type: "multiple_choice",
      options: [
        "The narrator is a character",
        "The narrator is outside the story",
        "The narrator is all-knowing",
        "The narrator is the author"
      ],
      answer: "The narrator is a character",
      explanation: "First-person point of view uses 'I' narrator."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the theme of a story?",
      type: "multiple_choice",
      options: [
        "The plot",
        "The central message",
        "The setting",
        "The characters"
      ],
      answer: "The central message",
      explanation: "The theme is the central message of a story."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the first step in analyzing a prose work?",
      type: "multiple_choice",
      options: [
        "Identify the theme",
        "Read the text",
        "Analyze the structure",
        "Consider the context"
      ],
      answer: "Read the text",
      explanation: "The first step is to read the text."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "How does context influence prose?",
      type: "multiple_choice",
      options: [
        "It does not influence prose",
        "It affects the meaning and themes",
        "It only affects the setting",
        "It only affects the characters"
      ],
      answer: "It affects the meaning and themes",
      explanation: "Context influences the meaning and themes of prose."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Who wrote 'Things Fall Apart'?",
      type: "multiple_choice",
      options: [
        "Chimamanda Adichie",
        "Chinua Achebe",
        "Wole Soyinka",
        "Ben Okri"
      ],
      answer: "Chinua Achebe",
      explanation: "Chinua Achebe wrote 'Things Fall Apart'."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How does prose reflect society?",
      type: "multiple_choice",
      options: [
        "It does not reflect society",
        "It reflects social issues and values",
        "It only reflects individual opinions",
        "It has no connection to society"
      ],
      answer: "It reflects social issues and values",
      explanation: "Prose reflects social issues and values."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Which is a literary device used in prose?",
      type: "multiple_choice",
      options: ["Metaphor", "Simile", "Symbolism", "All of the above"],
      answer: "All of the above",
      explanation: "Prose uses many literary devices including metaphor, simile, and symbolism."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the difference between a novel and a short story?",
      type: "multiple_choice",
      options: [
        "Novels are longer than short stories",
        "Short stories are longer than novels",
        "They are the same",
        "Novels are non-fiction"
      ],
      answer: "Novels are longer than short stories",
      explanation: "Novels are longer works of fiction."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_prose",
    title: "Prose Quiz",
    description: "Test your understanding of prose",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is prose?",
        type: "short_answer",
        answer_key: "A form of language following natural speech patterns",
        explanation: "Prose follows natural speech patterns."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is fiction?",
        type: "short_answer",
        answer_key: "Imaginative or invented prose",
        explanation: "Fiction is imaginative or invented prose."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an element of prose?",
        type: "short_answer",
        answer_key: "Plot (or any valid)",
        explanation: "Plot is an element of prose."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a novel?",
        type: "short_answer",
        answer_key: "A long work of fiction",
        explanation: "A novel is a long work of fiction."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a round character?",
        type: "short_answer",
        answer_key: "A complex, fully developed character",
        explanation: "A round character is complex and fully developed."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the climax of a story?",
        type: "short_answer",
        answer_key: "The turning point",
        explanation: "The climax is the turning point of a story."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the setting of a story?",
        type: "short_answer",
        answer_key: "The time and place",
        explanation: "The setting is the time and place."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is first-person point of view?",
        type: "short_answer",
        answer_key: "The narrator is a character",
        explanation: "First-person uses 'I' narrator."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "Who wrote 'Things Fall Apart'?",
        type: "short_answer",
        answer_key: "Chinua Achebe",
        explanation: "Chinua Achebe wrote 'Things Fall Apart'."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the first step in analyzing a prose work?",
        type: "short_answer",
        answer_key: "Read the text",
        explanation: "The first step is to read the text."
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
        "Understand prose and its types",
        "Identify elements of prose",
        "Explain plot structure and character development",
        "Understand Nigerian prose"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is prose?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Prose" },
        { time: "10-15 min", activity: "Direct Instruction - Elements of Prose" },
        { time: "15-20 min", activity: "Direct Instruction - Plot Structure" },
        { time: "20-25 min", activity: "Direct Instruction - Character Development" },
        { time: "25-30 min", activity: "Direct Instruction - Nigerian Prose" },
        { time: "30-35 min", activity: "Direct Instruction - Analyzing Prose" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A form of language following natural speech patterns",
        prac_002: "Imaginative or invented prose",
        prac_003: "Plot",
        prac_004: "A long work of fiction",
        prac_005: "A complex, fully developed character",
        prac_006: "The turning point",
        prac_007: "The time and place",
        prac_008: "The narrator is a character",
        prac_009: "The central message",
        prac_010: "Read the text",
        prac_011: "It affects the meaning and themes",
        prac_012: "Chinua Achebe",
        prac_013: "It reflects social issues and values",
        prac_014: "All of the above",
        prac_015: "Novels are longer than short stories"
      },
      assessment: {
        ass_001: "A form of language following natural speech patterns",
        ass_002: "Imaginative or invented prose",
        ass_003: "Plot (or any valid)",
        ass_004: "A long work of fiction",
        ass_005: "A complex, fully developed character",
        ass_006: "The turning point",
        ass_007: "The time and place",
        ass_008: "The narrator is a character",
        ass_009: "Chinua Achebe",
        ass_010: "Read the text"
      }
    },
    extensionActivities: [
      "Read a novel",
      "Write a short story",
      "Research a Nigerian novelist",
      "Analyze a prose work"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a novel review",
        "Analyze prose in depth",
        "Research literary theory",
        "Study Nigerian literature"
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
      title: "Types of Prose",
      description: "Diagram showing types of prose",
      url: "/diagrams/types-of-prose.png",
      alt: "Types of prose diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Plot Structure",
      description: "Diagram showing plot structure",
      url: "/diagrams/plot-structure.png",
      alt: "Plot structure diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Nigerian Novelists",
      description: "Diagram of Nigerian novelists",
      url: "/diagrams/nigerian-novelists.png",
      alt: "Nigerian novelists diagram"
    }
  ]
};