// Location: src/data/lessons/humanities/literature/drama.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_literary_drama",
  subject: "Literature",
  topic: "Drama",
  name: "Drama",
  icon: "🎭",
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
    "Understanding of literature basics",
    "Interest in theatre",
    "Knowledge of storytelling",
    "Understanding of dramatic elements"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
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
      description: "Define drama in literature and explain its importance",
      indicator: "Student can explain what drama is as a literary genre"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the elements of dramatic literature",
      indicator: "Student can describe the key elements of a play"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the structure of a play",
      indicator: "Student can describe acts, scenes, and dramatic structure"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the types of drama",
      indicator: "Student can distinguish between tragedy, comedy, and other types"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Analyze dramatic techniques",
      indicator: "Student can identify dramatic irony, soliloquy, and aside"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of dialogue in drama",
      indicator: "Student can describe how dialogue develops character and plot"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the use of stage directions",
      indicator: "Student can explain how stage directions guide performance"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of dramatic conflict",
      indicator: "Student can describe the role of conflict in drama"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the structure of a dramatic plot",
      indicator: "Student can explain the five-act structure"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze a dramatic text",
      indicator: "Student can analyze a play's themes and techniques"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the historical development of drama",
      indicator: "Student can describe the evolution of drama from ancient Greece to modern times"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze Nigerian drama",
      indicator: "Student can discuss Nigerian playwrights and their works"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the relationship between drama and society",
      indicator: "Student can discuss how drama reflects and influences society"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the use of dramatic devices in literature",
      indicator: "Student can identify and analyze dramatic devices"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Compare drama with other literary genres",
      indicator: "Student can distinguish drama from poetry and prose"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of drama in literature",
      indicator: "Student can discuss the significance of drama as a literary form"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Drama in Literature - The Power of Performance",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about drama as a literary genre, its elements, techniques, and significance."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Drama in Literature</h2>
      <p><strong>Drama</strong> is a literary genre that is written for performance on stage. It combines dialogue, action, and visual elements to tell a story. As a literary form, drama has its own conventions, structures, and techniques that distinguish it from poetry and prose.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🎭 Key Concepts</h3>
          <ul>
            <li>✓ Elements of Drama</li>
            <li>✓ Types of Drama</li>
            <li>✓ Dramatic Techniques</li>
            <li>✓ Structure of a Play</li>
            <li>✓ Nigerian Drama</li>
            <li>✓ Dramatic Analysis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Drama originated in ancient Greece</li>
            <li>• Shakespeare wrote 37 plays</li>
            <li>• Nigerian drama has a rich tradition</li>
            <li>• Wole Soyinka won the Nobel Prize in Literature</li>
            <li>• Drama is the oldest form of literature</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Drama in Literature Matters</h4>
        <p>Drama as literature explores human experience through dialogue and action. It challenges readers to imagine performance and understand the power of spoken words.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Drama in Literature?",
        objective: "obj_001",
        text: `
          <h3>Understanding Drama as a Literary Genre</h3>
          <p><strong>Drama</strong> is a literary genre written for performance. It consists of dialogue, stage directions, and action that tell a story through characters' words and interactions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Dialogue:</strong> Words spoken by characters</li>
                <li>• <strong>Stage directions:</strong> Instructions for performance</li>
                <li>• <strong>Acts and scenes:</strong> Structural divisions</li>
                <li>• <strong>Characters:</strong> People in the play</li>
                <li>• <strong>Conflict:</strong> Driving force of the plot</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drama vs Other Genres</h4>
              <ul>
                <li>• <strong>Drama:</strong> Written for performance</li>
                <li>• <strong>Poetry:</strong> Condensed, rhythmic language</li>
                <li>• <strong>Prose:</strong> Narrative, descriptive language</li>
                <li>• Drama uses dialogue and action</li>
                <li>• Drama is meant to be performed</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Elements of Drama",
        objective: "obj_002",
        text: `
          <h3>Elements of Drama</h3>
          <p>Drama is built on several key literary elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Literary Elements</h4>
              <ul>
                <li>• <strong>Plot:</strong> The sequence of events</li>
                <li>• <strong>Character:</strong> The people in the play</li>
                <li>• <strong>Setting:</strong> Time and place</li>
                <li>• <strong>Theme:</strong> The underlying message</li>
                <li>• <strong>Dialogue:</strong> Words spoken by characters</li>
                <li>• <strong>Conflict:</strong> The central struggle</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Dramatic Elements</h4>
              <ul>
                <li>• <strong>Stage directions:</strong> Performance instructions</li>
                <li>• <strong>Acts and scenes:</strong> Structural divisions</li>
                <li>• <strong>Spectacle:</strong> Visual elements</li>
                <li>• <strong>Music/Sound:</strong> Auditory elements</li>
                <li>• <strong>Dramatic irony:</strong> Audience knows more</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Structure of a Play",
        objective: "obj_003",
        text: `
          <h3>Structure of a Play</h3>
          <p>Plays follow a specific structure, traditionally divided into acts and scenes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Acts and Scenes</h4>
              <ul>
                <li>• <strong>Act:</strong> Major division of a play</li>
                <li>• <strong>Scene:</strong> Subdivision of an act</li>
                <li>• <strong>Five-act structure:</strong> Traditional Shakespearean</li>
                <li>• <strong>Three-act structure:</strong> Modern plays</li>
                <li>• <strong>One-act plays:</strong> Short dramas</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Five-Act Structure</h4>
              <ul>
                <li>• <strong>Act I:</strong> Exposition</li>
                <li>• <strong>Act II:</strong> Rising Action</li>
                <li>• <strong>Act III:</strong> Climax</li>
                <li>• <strong>Act IV:</strong> Falling Action</li>
                <li>• <strong>Act V:</strong> Resolution</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Types of Drama",
        objective: "obj_004",
        text: `
          <h3>Types of Drama</h3>
          <p>Drama can be classified into several types.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Tragedy</h4>
              <ul>
                <li>• Serious, somber themes</li>
                <li>• Tragic hero</li>
                <li>• Unhappy ending</li>
                <li>• Examples:</li>
                <li>• Hamlet, Macbeth</li>
                <li>• Oedipus Rex</li>
                <li>• Death of a Salesman</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Comedy</h4>
              <ul>
                <li>• Humorous themes</li>
                <li>• Happy ending</li>
                <li>• Satirical</li>
                <li>• Examples:</li>
                <li>• A Midsummer Night's Dream</li>
                <li>• The Importance of Being Earnest</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Tragicomedy</h4>
              <ul>
                <li>• Combines tragedy and comedy</li>
                <li>• Serious and humorous elements</li>
                <li>• Complex tone</li>
                <li>• Examples:</li>
                <li>• The Merchant of Venice</li>
                <li>• Waiting for Godot</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Melodrama</h4>
              <ul>
                <li>• Exaggerated emotions</li>
                <li>• Simple characters</li>
                <li>• Moral lessons</li>
                <li>• Examples:</li>
                <li>• Victorian melodramas</li>
                <li>• Nigerian popular drama</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Absurdist Drama</h4>
              <ul>
                <li>• Illogical or absurd</li>
                <li>• Rejects traditional structure</li>
                <li>• Examines meaninglessness</li>
                <li>• Examples:</li>
                <li>• Waiting for Godot</li>
                <li>• The Bald Soprano</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Historical Drama</h4>
              <ul>
                <li>• Based on historical events</li>
                <li>• Real or fictional characters</li>
                <li>• Educational</li>
                <li>• Examples:</li>
                <li>• A Man for All Seasons</li>
                <li>• Nigerian historical plays</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Dramatic Techniques",
        objective: "obj_005",
        text: `
          <h3>Dramatic Techniques</h3>
          <p>Playwrights use various techniques to create dramatic effect.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Techniques</h4>
              <ul>
                <li>• <strong>Dramatic irony:</strong> Audience knows more than characters</li>
                <li>• <strong>Soliloquy:</strong> Character speaks alone</li>
                <li>• <strong>Aside:</strong> Character speaks to audience</li>
                <li>• <strong>Monologue:</strong> Long speech by one character</li>
                <li>• <strong>Dialogue:</strong> Conversation between characters</li>
                <li>• <strong>Flashback:</strong> Past events shown</li>
                <li>• <strong>Foreshadowing:</strong> Hint of future events</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Dramatic irony:</strong> Romeo and Juliet</li>
                <li>• <strong>Soliloquy:</strong> Hamlet's "To be or not to be"</li>
                <li>• <strong>Aside:</strong> Iago in Othello</li>
                <li>• <strong>Monologue:</strong> Character revelations</li>
                <li>• <strong>Flashback:</strong> Death of a Salesman</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Nigerian Drama",
        objective: "obj_012",
        text: `
          <h3>Nigerian Drama</h3>
          <p>Nigeria has a vibrant dramatic tradition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Playwrights</h4>
              <ul>
                <li>• <strong>Wole Soyinka:</strong> The Lion and the Jewel</li>
                <li>• <strong>Femi Osofisan:</strong> Morountodun</li>
                <li>• <strong>Ola Rotimi:</strong> The Gods Are Not to Blame</li>
                <li>• <strong>Hubert Ogunde:</strong> Yoruba travelling theatre</li>
                <li>• <strong>J.P. Clark:</strong> The Raft</li>
                <li>• <strong>Zulu Sofola:</strong> Wedlock of the Gods</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Themes</h4>
              <ul>
                <li>• <strong>Colonialism:</strong> Impact on African societies</li>
                <li>• <strong>Tradition vs modernity:</strong> Cultural conflict</li>
                <li>• <strong>Politics:</strong> Post-colonial governance</li>
                <li>• <strong>Identity:</strong> Nigerian and African identity</li>
                <li>• <strong>Social issues:</strong> Inequality, corruption</li>
                <li>• <strong>Cultural heritage:</strong> Traditional values</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Analyzing Drama",
        objective: "obj_010",
        text: `
          <h3>Analyzing Drama as Literature</h3>
          <p>Analyzing a play involves examining its literary and dramatic elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps for Analysis</h4>
              <ul>
                <li>1. <strong>Read the play:</strong> Pay attention to dialogue</li>
                <li>2. <strong>Analyze structure:</strong> Acts, scenes, plot</li>
                <li>3. <strong>Examine characters:</strong> Development and motivation</li>
                <li>4. <strong>Analyze dialogue:</strong> Language and meaning</li>
                <li>5. <strong>Consider stage directions:</strong> Performance clues</li>
                <li>6. <strong>Identify themes:</strong> Central messages</li>
                <li>7. <strong>Consider context:</strong> Historical and cultural</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example Analysis</h4>
              <p><strong>The Lion and the Jewel by Wole Soyinka</strong></p>
              <ul>
                <li>• <strong>Structure:</strong> Three acts</li>
                <li>• <strong>Characters:</strong> Sidi, Lakunle, Baroka</li>
                <li>• <strong>Theme:</strong> Tradition vs modernity</li>
                <li>• <strong>Style:</strong> Comic and satirical</li>
                <li>• <strong>Significance:</strong> Nigerian identity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Drama and Society",
        objective: "obj_013",
        text: `
          <h3>Drama and Society</h3>
          <p>Drama reflects and influences society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Drama</h4>
              <ul>
                <li>• <strong>Social commentary:</strong> Reflection on society</li>
                <li>• <strong>Cultural preservation:</strong> Heritage</li>
                <li>• <strong>Education:</strong> Learning</li>
                <li>• <strong>Entertainment:</strong> Enjoyment</li>
                <li>• <strong>Political activism:</strong> Protest and change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact</h4>
              <ul>
                <li>• <strong>Empathy:</strong> Understanding others</li>
                <li>• <strong>Critical thinking:</strong> Questioning society</li>
                <li>• <strong>Cultural awareness:</strong> Diversity</li>
                <li>• <strong>Social change:</strong> Inspiring action</li>
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
          <h4>🎭 Drama in Literature</h4>
          <ul>
            <li>• Elements: plot, character, setting, theme, dialogue</li>
            <li>• Types: tragedy, comedy, tragicomedy, melodrama, absurdist, historical</li>
            <li>• Techniques: dramatic irony, soliloquy, aside, monologue</li>
            <li>• Structure: acts and scenes</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Nigerian drama and playwrights</li>
            <li>• Dramatic analysis</li>
            <li>• Drama and society</li>
            <li>• Performance and literature</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Drama is literature that comes alive on stage. It explores human experience through dialogue and action.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Drama is only for performance, not reading",
        correction: "Drama is a literary genre that can be read and studied",
        explanation: "Drama is an important literary form that can be analyzed like poetry and prose."
      },
      {
        id: "mis_002",
        misconception: "All drama is tragedy",
        correction: "Drama includes comedy, tragicomedy, and many other types",
        explanation: "Drama encompasses many genres beyond tragedy."
      },
      {
        id: "mis_003",
        misconception: "Stage directions are not important",
        correction: "Stage directions are essential for understanding the play",
        explanation: "Stage directions provide important clues about characters and action."
      },
      {
        id: "mis_004",
        misconception: "Drama is only entertainment",
        correction: "Drama has social, educational, and political functions",
        explanation: "Drama serves many important functions beyond entertainment."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Literature Studies",
        description: "Drama is studied as literature.",
        example: "Reading and analyzing plays"
      },
      {
        id: "app_002",
        title: "Theatre Production",
        description: "Drama is performed on stage.",
        example: "Plays, musicals, festivals"
      },
      {
        id: "app_003",
        title: "Education",
        description: "Drama is used in education.",
        example: "School plays, drama education"
      },
      {
        id: "app_004",
        title: "Social Commentary",
        description: "Drama comments on society.",
        example: "Political and social plays"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Drama", definition: "A literary genre written for performance." },
    { term: "Dialogue", definition: "Words spoken by characters in a play." },
    { term: "Stage Directions", definition: "Instructions for performance in a play." },
    { term: "Act", definition: "A major division of a play." },
    { term: "Scene", definition: "A subdivision of an act." },
    { term: "Tragedy", definition: "A serious play with an unhappy ending." },
    { term: "Comedy", definition: "A humorous play with a happy ending." },
    { term: "Tragicomedy", definition: "A play combining tragedy and comedy." },
    { term: "Melodrama", definition: "A play with exaggerated emotions." },
    { term: "Absurdist Drama", definition: "A play with illogical or absurd elements." },
    { term: "Dramatic Irony", definition: "Audience knows more than characters." },
    { term: "Soliloquy", definition: "A character speaking alone on stage." },
    { term: "Aside", definition: "A character speaking to the audience." },
    { term: "Monologue", definition: "A long speech by one character." },
    { term: "Plot", definition: "The sequence of events in a play." },
    { term: "Character", definition: "A person in a play." },
    { term: "Setting", definition: "The time and place of a play." },
    { term: "Theme", definition: "The central message of a play." },
    { term: "Conflict", definition: "The central struggle in a play." },
    { term: "Foreshadowing", definition: "Hint of future events." }
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
      question: "What is drama in literature?",
      type: "multiple_choice",
      options: [
        "A type of poetry",
        "A literary genre written for performance",
        "A type of prose",
        "A form of music"
      ],
      answer: "A literary genre written for performance",
      explanation: "Drama is a literary genre written for performance."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is an element of drama?",
      type: "multiple_choice",
      options: ["Dialogue", "Rhyme", "Meter", "Stanza"],
      answer: "Dialogue",
      explanation: "Dialogue is an element of drama."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an act in a play?",
      type: "multiple_choice",
      options: [
        "A major division of a play",
        "A character",
        "A type of drama",
        "A stage direction"
      ],
      answer: "A major division of a play",
      explanation: "An act is a major division of a play."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a tragedy?",
      type: "multiple_choice",
      options: [
        "A humorous play",
        "A serious play with an unhappy ending",
        "A play with songs",
        "A play with exaggerated emotions"
      ],
      answer: "A serious play with an unhappy ending",
      explanation: "A tragedy is a serious play with an unhappy ending."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is dramatic irony?",
      type: "multiple_choice",
      options: [
        "When characters know more than the audience",
        "When the audience knows more than the characters",
        "When the author speaks to the audience",
        "When a character speaks alone"
      ],
      answer: "When the audience knows more than the characters",
      explanation: "Dramatic irony occurs when the audience knows more than the characters."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the function of dialogue in drama?",
      type: "multiple_choice",
      options: [
        "To provide stage directions",
        "To develop character and advance plot",
        "To describe the setting",
        "To provide the theme"
      ],
      answer: "To develop character and advance plot",
      explanation: "Dialogue develops character and advances the plot."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What are stage directions?",
      type: "multiple_choice",
      options: [
        "Instructions for performance",
        "The words spoken by characters",
        "The title of the play",
        "The characters in the play"
      ],
      answer: "Instructions for performance",
      explanation: "Stage directions are instructions for performance."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the role of conflict in drama?",
      type: "multiple_choice",
      options: [
        "It has no role",
        "It drives the plot",
        "It only occurs in tragedies",
        "It is only in comedies"
      ],
      answer: "It drives the plot",
      explanation: "Conflict is the driving force of the plot."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How many acts are in a traditional Shakespearean play?",
      type: "multiple_choice",
      options: ["3", "4", "5", "6"],
      answer: "5",
      explanation: "Traditional Shakespearean plays have five acts."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the first step in analyzing a play?",
      type: "multiple_choice",
      options: [
        "Identify the theme",
        "Read the play",
        "Analyze the structure",
        "Consider the context"
      ],
      answer: "Read the play",
      explanation: "The first step is to read the play."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Where did drama originate?",
      type: "multiple_choice",
      options: ["Ancient Greece", "Ancient Egypt", "Ancient Rome", "Ancient China"],
      answer: "Ancient Greece",
      explanation: "Drama originated in ancient Greece."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Who is a famous Nigerian playwright?",
      type: "multiple_choice",
      options: [
        "Wole Soyinka",
        "Chinua Achebe",
        "Chimamanda Adichie",
        "Ben Okri"
      ],
      answer: "Wole Soyinka",
      explanation: "Wole Soyinka is a famous Nigerian playwright."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How does drama reflect society?",
      type: "multiple_choice",
      options: [
        "It does not reflect society",
        "It reflects social issues and values",
        "It only reflects individual opinions",
        "It has no connection to society"
      ],
      answer: "It reflects social issues and values",
      explanation: "Drama reflects social issues and values."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is a soliloquy?",
      type: "multiple_choice",
      options: [
        "A character speaking to another character",
        "A character speaking alone on stage",
        "A character speaking to the audience",
        "A character's inner thoughts"
      ],
      answer: "A character speaking alone on stage",
      explanation: "A soliloquy is a character speaking alone on stage."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What distinguishes drama from prose?",
      type: "multiple_choice",
      options: [
        "Drama uses dialogue and is written for performance",
        "Drama has no characters",
        "Drama has no plot",
        "Drama is always serious"
      ],
      answer: "Drama uses dialogue and is written for performance",
      explanation: "Drama is written for performance and uses dialogue."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_literary_drama",
    title: "Drama in Literature Quiz",
    description: "Test your understanding of drama in literature",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is drama in literature?",
        type: "short_answer",
        answer_key: "A literary genre written for performance",
        explanation: "Drama is a literary genre written for performance."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is an element of drama?",
        type: "short_answer",
        answer_key: "Dialogue (or any valid)",
        explanation: "Dialogue is an element of drama."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an act in a play?",
        type: "short_answer",
        answer_key: "A major division of a play",
        explanation: "An act is a major division of a play."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a tragedy?",
        type: "short_answer",
        answer_key: "A serious play with an unhappy ending",
        explanation: "A tragedy is a serious play with an unhappy ending."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is dramatic irony?",
        type: "short_answer",
        answer_key: "When the audience knows more than the characters",
        explanation: "Dramatic irony occurs when the audience knows more."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the function of dialogue in drama?",
        type: "short_answer",
        answer_key: "To develop character and advance plot",
        explanation: "Dialogue develops character and advances plot."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What are stage directions?",
        type: "short_answer",
        answer_key: "Instructions for performance",
        explanation: "Stage directions are instructions for performance."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the role of conflict in drama?",
        type: "short_answer",
        answer_key: "It drives the plot",
        explanation: "Conflict drives the plot."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "Who is a famous Nigerian playwright?",
        type: "short_answer",
        answer_key: "Wole Soyinka (or any valid)",
        explanation: "Wole Soyinka is a famous Nigerian playwright."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the first step in analyzing a play?",
        type: "short_answer",
        answer_key: "Read the play",
        explanation: "The first step is to read the play."
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
        "Understand drama as a literary genre",
        "Identify elements and types of drama",
        "Explain dramatic techniques",
        "Analyze Nigerian drama"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is drama in literature?" },
        { time: "5-10 min", activity: "Direct Instruction - Elements of Drama" },
        { time: "10-15 min", activity: "Direct Instruction - Structure of a Play" },
        { time: "15-20 min", activity: "Direct Instruction - Types of Drama" },
        { time: "20-25 min", activity: "Direct Instruction - Dramatic Techniques" },
        { time: "25-30 min", activity: "Direct Instruction - Nigerian Drama" },
        { time: "30-35 min", activity: "Direct Instruction - Analyzing Drama" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A literary genre written for performance",
        prac_002: "Dialogue",
        prac_003: "A major division of a play",
        prac_004: "A serious play with an unhappy ending",
        prac_005: "When the audience knows more than the characters",
        prac_006: "To develop character and advance plot",
        prac_007: "Instructions for performance",
        prac_008: "It drives the plot",
        prac_009: "5",
        prac_010: "Read the play",
        prac_011: "Ancient Greece",
        prac_012: "Wole Soyinka",
        prac_013: "It reflects social issues and values",
        prac_014: "A character speaking alone on stage",
        prac_015: "Drama uses dialogue and is written for performance"
      },
      assessment: {
        ass_001: "A literary genre written for performance",
        ass_002: "Dialogue (or any valid)",
        ass_003: "A major division of a play",
        ass_004: "A serious play with an unhappy ending",
        ass_005: "When the audience knows more than the characters",
        ass_006: "To develop character and advance plot",
        ass_007: "Instructions for performance",
        ass_008: "It drives the plot",
        ass_009: "Wole Soyinka (or any valid)",
        ass_010: "Read the play"
      }
    },
    extensionActivities: [
      "Read a play",
      "Write a scene",
      "Research a playwright",
      "Analyze a dramatic text"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a full play",
        "Study dramatic theory",
        "Research theatre history",
        "Analyze dramatic literature"
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
      title: "Elements of Drama",
      description: "Diagram showing elements of drama",
      url: "/diagrams/elements-of-drama-literary.png",
      alt: "Elements of drama diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Types of Drama",
      description: "Diagram showing types of drama",
      url: "/diagrams/types-of-drama-literary.png",
      alt: "Types of drama diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Dramatic Structure",
      description: "Diagram showing five-act structure",
      url: "/diagrams/dramatic-structure.png",
      alt: "Dramatic structure diagram"
    }
  ]
};