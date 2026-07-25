// Location: src/data/lessons/arts/drama.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "arts_lesson_drama",
  subject: "Drama",
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
    "Interest in theatre and performance",
    "Creativity and imagination",
    "Basic understanding of storytelling",
    "Willingness to participate"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Creative Arts",
      file: "arts/creative_arts.js"
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
      description: "Define drama and explain its importance",
      indicator: "Student can explain what drama is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the elements of drama",
      indicator: "Student can describe plot, character, setting, theme, and dialogue"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the different types of drama",
      indicator: "Student can distinguish between tragedy, comedy, and melodrama"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the structure of a play",
      indicator: "Student can explain the parts of a play: acts and scenes"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain acting techniques",
      indicator: "Student can describe different acting methods"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe stagecraft and production",
      indicator: "Student can explain the elements of theatrical production"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the history of drama",
      indicator: "Student can describe the origins and development of drama"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the role of the director",
      indicator: "Student can explain the responsibilities of a theatre director"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the role of the playwright",
      indicator: "Student can describe the work of a playwright"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze a dramatic text",
      indicator: "Student can analyze the elements of a play"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the importance of costume and set design",
      indicator: "Student can discuss the role of design in theatre"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of theatre in society",
      indicator: "Student can discuss the social impact of theatre"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe Nigerian theatre traditions",
      indicator: "Student can explain traditional Nigerian drama"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of staging a play",
      indicator: "Student can describe the production process"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of audience in theatre",
      indicator: "Student can discuss the relationship between audience and performance"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of drama education",
      indicator: "Student can discuss the value of studying drama"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Drama - The Art of Theatre",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about drama, theatre, acting, and the performing arts."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Drama</h2>
      <p><strong>Drama</strong> is a form of literature that is intended to be performed on stage. It combines storytelling, acting, and visual elements to create a theatrical experience. Drama has been a fundamental part of human culture for thousands of years, from ancient Greek tragedies to modern theatre.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🎭 Key Concepts</h3>
          <ul>
            <li>✓ Elements of Drama</li>
            <li>✓ Types of Drama</li>
            <li>✓ Acting Techniques</li>
            <li>✓ Stagecraft</li>
            <li>✓ History of Theatre</li>
            <li>✓ Nigerian Theatre</li>
            <li>✓ Production Process</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Drama originated in ancient Greece</li>
            <li>• The first theatre was built in Athens</li>
            <li>• Shakespeare wrote 37 plays</li>
            <li>• Wole Soyinka won a Nobel Prize in Literature</li>
            <li>• Drama is performed in every culture</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Drama Matters</h4>
        <p>Drama entertains, educates, challenges, and inspires. It reflects human experience and helps us understand ourselves and others.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Drama?",
        objective: "obj_001",
        text: `
          <h3>Understanding Drama</h3>
          <p><strong>Drama</strong> is a story told through performance. It combines dialogue, action, and visual elements to tell a story on stage.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Performance:</strong> Live or recorded</li>
                <li>• <strong>Dialogue:</strong> Words spoken by characters</li>
                <li>• <strong>Action:</strong> Movement on stage</li>
                <li>• <strong>Conflict:</strong> Driving force of the plot</li>
                <li>• <strong>Characters:</strong> People in the story</li>
                <li>• <strong>Setting:</strong> Time and place</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Differences from Other Arts</h4>
              <ul>
                <li>• <strong>Literature:</strong> Drama is meant to be performed</li>
                <li>• <strong>Film:</strong> Drama is live performance</li>
                <li>• <strong>Music:</strong> Drama tells a story</li>
                <li>• <strong>Dance:</strong> Drama uses spoken dialogue</li>
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
          <p>Drama is built on several key elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Plot:</strong> The sequence of events</li>
                <li>• <strong>Character:</strong> The people in the story</li>
                <li>• <strong>Setting:</strong> Time and place</li>
                <li>• <strong>Theme:</strong> The underlying message</li>
                <li>• <strong>Dialogue:</strong> The words spoken</li>
                <li>• <strong>Conflict:</strong> The central struggle</li>
                <li>• <strong>Spectacle:</strong> Visual elements</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Plot:</strong> Romeo and Juliet's love story</li>
                <li>• <strong>Character:</strong> Hamlet's internal conflict</li>
                <li>• <strong>Setting:</strong> Ancient Greece, modern Nigeria</li>
                <li>• <strong>Theme:</strong> Love, justice, power</li>
                <li>• <strong>Dialogue:</strong> Shakespearean language</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Types of Drama",
        objective: "obj_003",
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
                <li>• Death of a Salesman</li>
                <li>• Oedipus Rex</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Comedy</h4>
              <ul>
                <li>• Humorous, light-hearted</li>
                <li>• Happy ending</li>
                <li>• Satirical</li>
                <li>• Examples:</li>
                <li>• A Midsummer Night's Dream</li>
                <li>• The Importance of Being Earnest</li>
                <li>• Nigerian comedies</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Melodrama</h4>
              <ul>
                <li>• Exaggerated emotions</li>
                <li>• Simple characters</li>
                <li>• Moral lessons</li>
                <li>• Examples:</li>
                <li>• Victorian melodramas</li>
                <li>• Nigerian home videos</li>
                <li>• Soap operas</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
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
              <h4>📌 Musical Theatre</h4>
              <ul>
                <li>• Songs and dialogue</li>
                <li>• Dance and spectacle</li>
                <li>• Popular entertainment</li>
                <li>• Examples:</li>
                <li>• The Lion King</li>
                <li>• Nigerian musicals</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "History of Drama",
        objective: "obj_007",
        text: `
          <h3>History of Drama</h3>
          <p>Drama has a long and rich history spanning thousands of years.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Periods</h4>
              <ul>
                <li>• <strong>Ancient Greece:</strong> 5th century BCE</li>
                <li>• <strong>Ancient Rome:</strong> 3rd century BCE</li>
                <li>• <strong>Medieval:</strong> Mystery plays</li>
                <li>• <strong>Elizabethan:</strong> Shakespeare</li>
                <li>• <strong>17th Century:</strong> Molière</li>
                <li>• <strong>19th Century:</strong> Realism</li>
                <li>• <strong>20th Century:</strong> Modernism</li>
                <li>• <strong>Contemporary:</strong> Diverse forms</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Playwrights</h4>
              <ul>
                <li>• <strong>Sophocles:</strong> Oedipus</li>
                <li>• <strong>Shakespeare:</strong> Hamlet, Macbeth</li>
                <li>• <strong>Molière:</strong> Tartuffe</li>
                <li>• <strong>Ibsen:</strong> A Doll's House</li>
                <li>• <strong>Chekhov:</strong> The Cherry Orchard</li>
                <li>• <strong>Wole Soyinka:</strong> Nigerian playwright</li>
                <li>• <strong>Femi Osofisan:</strong> Nigerian playwright</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Acting Techniques",
        objective: "obj_005",
        text: `
          <h3>Acting Techniques</h3>
          <p>Actors use various techniques to bring characters to life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Techniques</h4>
              <ul>
                <li>• <strong>Method Acting:</strong> Emotional memory</li>
                <li>• <strong>Meisner:</strong> Reacting to others</li>
                <li>• <strong>Classical:</strong> Formal technique</li>
                <li>• <strong>Physical Theatre:</strong> Movement-based</li>
                <li>• <strong>Improvisation:</strong> Spontaneous performance</li>
                <li>• <strong>Voice Training:</strong> Projection and clarity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Skills</h4>
              <ul>
                <li>• <strong>Voice:</strong> Projection, clarity, emotion</li>
                <li>• <strong>Body:</strong> Movement, gesture, posture</li>
                <li>• <strong>Emotion:</strong> Authentic expression</li>
                <li>• <strong>Memory:</strong> Recall and application</li>
                <li>• <strong>Listening:</strong> Responding to others</li>
                <li>• <strong>Imagination:</strong> Creating believable worlds</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Stagecraft and Production",
        objective: "obj_006",
        text: `
          <h3>Stagecraft and Production</h3>
          <p>Theatre production involves many behind-the-scenes elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Production Elements</h4>
              <ul>
                <li>• <strong>Set Design:</strong> Creating the environment</li>
                <li>• <strong>Costume Design:</strong> Character clothing</li>
                <li>• <strong>Lighting:</strong> Mood and visibility</li>
                <li>• <strong>Sound:</strong> Music and effects</li>
                <li>• <strong>Props:</strong> Objects on stage</li>
                <li>• <strong>Direction:</strong> Guiding the performance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Production Team</h4>
              <ul>
                <li>• <strong>Director:</strong> Artistic vision</li>
                <li>• <strong>Stage Manager:</strong> Coordination</li>
                <li>• <strong>Designers:</strong> Visual elements</li>
                <li>• <strong>Technicians:</strong> Technical support</li>
                <li>• <strong>Actors:</strong> Performers</li>
                <li>• <strong>Producers:</strong> Funding and management</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nigerian Theatre",
        objective: "obj_013",
        text: `
          <h3>Nigerian Theatre Traditions</h3>
          <p>Nigeria has a vibrant and diverse theatre tradition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Traditional Theatre</h4>
              <ul>
                <li>• <strong>Yoruba Travelling Theatre:</strong> Popular performances</li>
                <li>• <strong>Masquerade performances:</strong> Ritual theatre</li>
                <li>• <strong>Storytelling:</strong> Oral traditions</li>
                <li>• <strong>Festival theatre:</strong> Community celebrations</li>
                <li>• <strong>Puppetry:</strong> Traditional puppet shows</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Playwrights</h4>
              <ul>
                <li>• <strong>Wole Soyinka:</strong> Nobel Prize winner</li>
                <li>• <strong>Femi Osofisan:</strong> Contemporary playwright</li>
                <li>• <strong>Ola Rotimi:</strong> Historical plays</li>
                <li>• <strong>Hubert Ogunde:</strong> Father of Nigerian theatre</li>
                <li>• <strong>Tunde Kelani:</strong> Film and theatre</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Theatre and Society",
        objective: "obj_012",
        text: `
          <h3>Theatre and Society</h3>
          <p>Theatre plays an important role in society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Theatre</h4>
              <ul>
                <li>• <strong>Entertainment:</strong> Enjoyment</li>
                <li>• <strong>Education:</strong> Learning</li>
                <li>• <strong>Social commentary:</strong> Reflection on society</li>
                <li>• <strong>Cultural preservation:</strong> Heritage</li>
                <li>• <strong>Political activism:</strong> Protest and change</li>
                <li>• <strong>Community building:</strong> Bringing people together</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact</h4>
              <ul>
                <li>• <strong>Empathy:</strong> Understanding others</li>
                <li>• <strong>Critical thinking:</strong> Questioning society</li>
                <li>• <strong>Creativity:</strong> Inspiring imagination</li>
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
          <h4>🎭 Drama</h4>
          <ul>
            <li>• Elements: plot, character, setting, theme, dialogue</li>
            <li>• Types: tragedy, comedy, melodrama, historical, absurdist, musical</li>
            <li>• Acting techniques: method, Meisner, classical, physical, improvisation</li>
            <li>• Stagecraft: set, costume, lighting, sound, props</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• History of drama from ancient Greece to modern</li>
            <li>• Nigerian theatre traditions</li>
            <li>• Theatre's role in society</li>
            <li>• Production process and collaboration</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Drama is a powerful art form that entertains, educates, and inspires. It reflects the human experience and brings people together.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Acting is just pretending",
        correction: "Acting requires skill, training, and technique",
        explanation: "Professional acting involves rigorous training and practice."
      },
      {
        id: "mis_002",
        misconception: "Drama is only for entertainment",
        correction: "Drama has educational, social, and political functions",
        explanation: "Drama is used for education, social commentary, and activism."
      },
      {
        id: "mis_003",
        misconception: "All theatre is the same",
        correction: "Theatre takes many forms and styles",
        explanation: "Theatre varies across cultures and periods."
      },
      {
        id: "mis_004",
        misconception: "You need to be outgoing to act",
        correction: "Acting is a skill that can be learned",
        explanation: "Many actors are introverted off-stage."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Theatre Production",
        description: "Drama is used in professional theatre.",
        example: "Plays, musicals, festivals"
      },
      {
        id: "app_002",
        title: "Film and Television",
        description: "Drama is used in film and TV.",
        example: "Movies, series, soap operas"
      },
      {
        id: "app_003",
        title: "Education",
        description: "Drama is used in schools.",
        example: "School plays, drama education"
      },
      {
        id: "app_004",
        title: "Community Theatre",
        description: "Drama is used in communities.",
        example: "Community plays, festivals"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Drama", definition: "A story told through performance." },
    { term: "Plot", definition: "The sequence of events in a play." },
    { term: "Character", definition: "A person in a play." },
    { term: "Setting", definition: "The time and place of a play." },
    { term: "Theme", definition: "The underlying message of a play." },
    { term: "Dialogue", definition: "The words spoken by characters." },
    { term: "Conflict", definition: "The central struggle in a play." },
    { term: "Tragedy", definition: "A serious play with an unhappy ending." },
    { term: "Comedy", definition: "A humorous play with a happy ending." },
    { term: "Melodrama", definition: "A play with exaggerated emotions." },
    { term: "Director", definition: "The person who guides the performance." },
    { term: "Playwright", definition: "The person who writes plays." },
    { term: "Stagecraft", definition: "The art of theatrical production." },
    { term: "Acting", definition: "The art of performing a character." },
    { term: "Improvisation", definition: "Spontaneous performance without a script." },
    { term: "Set Design", definition: "The design of the stage environment." },
    { term: "Costume", definition: "The clothing worn by actors." },
    { term: "Lighting", definition: "The use of lights in theatre." },
    { term: "Props", definition: "Objects used on stage." },
    { term: "Audience", definition: "The people watching a performance." }
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
      question: "What is drama?",
      type: "multiple_choice",
      options: [
        "A type of literature",
        "A story told through performance",
        "A form of visual art",
        "A type of music"
      ],
      answer: "A story told through performance",
      explanation: "Drama is a story told through performance."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is an element of drama?",
      type: "multiple_choice",
      options: ["Plot", "Color", "Rhythm", "Melody"],
      answer: "Plot",
      explanation: "Plot is an element of drama."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
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
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the structure of a play?",
      type: "multiple_choice",
      options: [
        "Acts and scenes",
        "Chapters and verses",
        "Stanzas and lines",
        "Verses and choruses"
      ],
      answer: "Acts and scenes",
      explanation: "Plays are divided into acts and scenes."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is method acting?",
      type: "multiple_choice",
      options: [
        "Acting without training",
        "Using emotional memory to act",
        "Acting in musicals",
        "Acting in comedies"
      ],
      answer: "Using emotional memory to act",
      explanation: "Method acting uses emotional memory to create authentic performances."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is stagecraft?",
      type: "multiple_choice",
      options: [
        "The art of acting",
        "The art of theatrical production",
        "The art of writing plays",
        "The art of directing"
      ],
      answer: "The art of theatrical production",
      explanation: "Stagecraft is the art of theatrical production."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Where did drama originate?",
      type: "multiple_choice",
      options: ["Ancient Greece", "Ancient Egypt", "Ancient Rome", "Ancient China"],
      answer: "Ancient Greece",
      explanation: "Drama originated in ancient Greece."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does a director do?",
      type: "multiple_choice",
      options: [
        "Writes the play",
        "Guides the performance",
        "Designs the set",
        "Acts on stage"
      ],
      answer: "Guides the performance",
      explanation: "The director guides the performance."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What does a playwright do?",
      type: "multiple_choice",
      options: [
        "Directs the play",
        "Writes the play",
        "Acts in the play",
        "Designs the set"
      ],
      answer: "Writes the play",
      explanation: "A playwright writes the play."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the first step in analyzing a play?",
      type: "multiple_choice",
      options: [
        "Read the play",
        "Watch the play",
        "Criticize the play",
        "Compare the play"
      ],
      answer: "Read the play",
      explanation: "The first step in analyzing a play is to read it."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is costume design?",
      type: "multiple_choice",
      options: [
        "Designing the set",
        "Designing the clothing",
        "Designing the lights",
        "Designing the sound"
      ],
      answer: "Designing the clothing",
      explanation: "Costume design is designing the clothing worn by actors."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of theatre in society?",
      type: "multiple_choice",
      options: [
        "Only entertainment",
        "Entertainment, education, and social commentary",
        "Only education",
        "No role"
      ],
      answer: "Entertainment, education, and social commentary",
      explanation: "Theatre serves entertainment, education, and social commentary."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Who is a famous Nigerian playwright?",
      type: "multiple_choice",
      options: [
        "Wole Soyinka",
        "Burna Boy",
        "Fela Kuti",
        "Chimamanda Adichie"
      ],
      answer: "Wole Soyinka",
      explanation: "Wole Soyinka is a famous Nigerian playwright."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the first step in staging a play?",
      type: "multiple_choice",
      options: [
        "Rehearsal",
        "Choosing a script",
        "Set design",
        "Costume design"
      ],
      answer: "Choosing a script",
      explanation: "The first step in staging a play is choosing a script."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the role of the audience in theatre?",
      type: "multiple_choice",
      options: [
        "Passive observers",
        "Active participants in the experience",
        "No role",
        "Critics only"
      ],
      answer: "Active participants in the experience",
      explanation: "The audience is an active participant in the theatrical experience."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_drama",
    title: "Drama Quiz",
    description: "Test your understanding of drama",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is drama?",
        type: "short_answer",
        answer_key: "A story told through performance",
        explanation: "Drama is a story told through performance."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is an element of drama?",
        type: "short_answer",
        answer_key: "Plot (or any valid)",
        explanation: "Plot is an element of drama."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a tragedy?",
        type: "short_answer",
        answer_key: "A serious play with an unhappy ending",
        explanation: "A tragedy is a serious play with an unhappy ending."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the structure of a play?",
        type: "short_answer",
        answer_key: "Acts and scenes",
        explanation: "Plays are divided into acts and scenes."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is method acting?",
        type: "short_answer",
        answer_key: "Using emotional memory to act",
        explanation: "Method acting uses emotional memory."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is stagecraft?",
        type: "short_answer",
        answer_key: "The art of theatrical production",
        explanation: "Stagecraft is the art of theatrical production."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Where did drama originate?",
        type: "short_answer",
        answer_key: "Ancient Greece",
        explanation: "Drama originated in ancient Greece."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does a director do?",
        type: "short_answer",
        answer_key: "Guides the performance",
        explanation: "The director guides the performance."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the role of theatre in society?",
        type: "short_answer",
        answer_key: "Entertainment, education, and social commentary",
        explanation: "Theatre serves entertainment, education, and social commentary."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "Who is a famous Nigerian playwright?",
        type: "short_answer",
        answer_key: "Wole Soyinka (or any valid)",
        explanation: "Wole Soyinka is a famous Nigerian playwright."
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
        "Understand drama and its elements",
        "Explain types of drama",
        "Describe acting techniques and stagecraft",
        "Understand theatre history and Nigerian theatre"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is drama?" },
        { time: "5-10 min", activity: "Direct Instruction - Elements of Drama" },
        { time: "10-15 min", activity: "Direct Instruction - Types of Drama" },
        { time: "15-20 min", activity: "Direct Instruction - History of Drama" },
        { time: "20-25 min", activity: "Direct Instruction - Acting Techniques" },
        { time: "25-30 min", activity: "Direct Instruction - Stagecraft" },
        { time: "30-35 min", activity: "Direct Instruction - Nigerian Theatre" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A story told through performance",
        prac_002: "Plot",
        prac_003: "A serious play with an unhappy ending",
        prac_004: "Acts and scenes",
        prac_005: "Using emotional memory to act",
        prac_006: "The art of theatrical production",
        prac_007: "Ancient Greece",
        prac_008: "Guides the performance",
        prac_009: "Writes the play",
        prac_010: "Read the play",
        prac_011: "Designing the clothing",
        prac_012: "Entertainment, education, and social commentary",
        prac_013: "Wole Soyinka",
        prac_014: "Choosing a script",
        prac_015: "Active participants in the experience"
      },
      assessment: {
        ass_001: "A story told through performance",
        ass_002: "Plot (or any valid)",
        ass_003: "A serious play with an unhappy ending",
        ass_004: "Acts and scenes",
        ass_005: "Using emotional memory to act",
        ass_006: "The art of theatrical production",
        ass_007: "Ancient Greece",
        ass_008: "Guides the performance",
        ass_009: "Entertainment, education, and social commentary",
        ass_010: "Wole Soyinka (or any valid)"
      }
    },
    extensionActivities: [
      "Write a short play",
      "Perform a scene",
      "Research a playwright",
      "Attend a theatre performance"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a full-length play",
        "Study dramatic theory",
        "Research theatre history",
        "Direct a scene"
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
      description: "Diagram showing the elements of drama",
      url: "/diagrams/elements-of-drama.png",
      alt: "Elements of drama diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Types of Drama",
      description: "Diagram showing types of drama",
      url: "/diagrams/types-of-drama.png",
      alt: "Types of drama diagram"
    },
    {
      id: "vis_003",
      type: "timeline",
      title: "History of Drama",
      description: "Timeline of drama history",
      url: "/diagrams/drama-history-timeline.png",
      alt: "Drama history timeline"
    }
  ]
};