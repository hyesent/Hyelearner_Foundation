// Location: src/data/lessons/arts/music.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "arts_lesson_music",
  subject: "Music",
  topic: "Music",
  name: "Music",
  icon: "🎵",
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
    "Interest in music",
    "Basic understanding of sound",
    "Ability to listen actively",
    "Appreciation for music"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Drama",
      file: "arts/drama.js"
    },
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
      description: "Define music and explain its importance",
      indicator: "Student can explain what music is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the elements of music",
      indicator: "Student can describe rhythm, melody, harmony, timbre, and dynamics"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the different types of musical instruments",
      indicator: "Student can classify instruments into families"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain music notation and theory",
      indicator: "Student can read basic music notation"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the history of music",
      indicator: "Student can explain major periods in music history"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain different music genres",
      indicator: "Student can identify various music genres"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of music in culture",
      indicator: "Student can explain the cultural significance of music"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the structure of music",
      indicator: "Student can describe musical form and structure"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe Nigerian music traditions",
      indicator: "Student can explain traditional Nigerian music"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze musical composition",
      indicator: "Student can describe how music is composed"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the principles of sound production",
      indicator: "Student can describe how sound is produced in instruments"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of music in society",
      indicator: "Student can discuss music's social and emotional impact"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the music industry",
      indicator: "Student can explain how the music industry works"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the connection between music and emotion",
      indicator: "Student can describe how music affects emotions"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze a musical piece",
      indicator: "Student can analyze the elements of a song"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of music education",
      indicator: "Student can discuss the value of studying music"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Music - The Universal Language",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about music, its elements, history, genres, and cultural significance."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Music</h2>
      <p><strong>Music</strong> is the art of organizing sound in time through the elements of melody, harmony, rhythm, and timbre. It is a universal form of human expression that transcends cultural boundaries and connects people across the world.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🎵 Key Concepts</h3>
          <ul>
            <li>✓ Elements of Music</li>
            <li>✓ Music Notation</li>
            <li>✓ Musical Instruments</li>
            <li>✓ Music History</li>
            <li>✓ Music Genres</li>
            <li>✓ Nigerian Music</li>
            <li>✓ Music and Society</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Music has existed for over 40,000 years</li>
            <li>• The oldest known instrument is a flute made from bone</li>
            <li>• There are over 1,000 music genres</li>
            <li>• Music affects brain development</li>
            <li>• Nigeria has a rich musical heritage</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Music Matters</h4>
        <p>Music enriches our lives, expresses emotions, preserves culture, and brings people together.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Music?",
        objective: "obj_001",
        text: `
          <h3>Understanding Music</h3>
          <p><strong>Music</strong> is the art of arranging sounds in time to create a composition. It is a form of human expression that communicates emotions, ideas, and stories.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Sound:</strong> The basis of music</li>
                <li>• <strong>Rhythm:</strong> Pattern of time</li>
                <li>• <strong>Melody:</strong> Sequence of notes</li>
                <li>• <strong>Harmony:</strong> Combination of notes</li>
                <li>• <strong>Timbre:</strong> Quality of sound</li>
                <li>• <strong>Dynamics:</strong> Volume changes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Purposes of Music</h4>
              <ul>
                <li>• <strong>Expression:</strong> Emotions and feelings</li>
                <li>• <strong>Entertainment:</strong> Enjoyment and pleasure</li>
                <li>• <strong>Communication:</strong> Stories and ideas</li>
                <li>• <strong>Ceremony:</strong> Rituals and celebrations</li>
                <li>• <strong>Healing:</strong> Therapeutic benefits</li>
                <li>• <strong>Cultural preservation:</strong> Heritage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Elements of Music",
        objective: "obj_002",
        text: `
          <h3>The Elements of Music</h3>
          <p>Music is built from several key elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Rhythm:</strong> The pattern of beats and time</li>
                <li>• <strong>Melody:</strong> A sequence of notes</li>
                <li>• <strong>Harmony:</strong> Notes played together</li>
                <li>• <strong>Timbre:</strong> The quality of sound</li>
                <li>• <strong>Dynamics:</strong> Volume (piano, forte)</li>
                <li>• <strong>Tempo:</strong> Speed of the music</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Rhythm:</strong> The beat you tap your foot to</li>
                <li>• <strong>Melody:</strong> The tune you hum</li>
                <li>• <strong>Harmony:</strong> Chords that support the melody</li>
                <li>• <strong>Timbre:</strong> The difference between a piano and a guitar</li>
                <li>• <strong>Dynamics:</strong> Soft vs loud sections</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Musical Instruments",
        objective: "obj_003",
        text: `
          <h3>Musical Instruments</h3>
          <p>Instruments are devices used to produce music.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 String Instruments</h4>
              <ul>
                <li>• <strong>Guitar:</strong> Acoustic, electric</li>
                <li>• <strong>Violin:</strong> Classical</li>
                <li>• <strong>Piano:</strong> Keyboard</li>
                <li>• <strong>Harp:</strong> Plucked</li>
                <li>• <strong>Cello:</strong> Bass</li>
                <li>• <strong>Ukulele:</strong> Small guitar</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Woodwind Instruments</h4>
              <ul>
                <li>• <strong>Flute:</strong> Air blown</li>
                <li>• <strong>Clarinet:</strong> Single reed</li>
                <li>• <strong>Saxophone:</strong> Single reed</li>
                <li>• <strong>Oboe:</strong> Double reed</li>
                <li>• <strong>Bassoon:</strong> Double reed</li>
                <li>• <strong>Piccolo:</strong> High flute</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Brass Instruments</h4>
              <ul>
                <li>• <strong>Trumpet:</strong> Bright sound</li>
                <li>• <strong>Trombone:</strong> Slide</li>
                <li>• <strong>French horn:</strong> Round sound</li>
                <li>• <strong>Tuba:</strong> Deep bass</li>
                <li>• <strong>Cornet:</strong> Similar to trumpet</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Percussion Instruments</h4>
              <ul>
                <li>• <strong>Drums:</strong> Different sizes</li>
                <li>• <strong>Cymbals:</strong> Metal</li>
                <li>• <strong>Xylophone:</strong> Wooden bars</li>
                <li>• <strong>Tambourine:</strong> Jingles</li>
                <li>• <strong>Marimba:</strong> Similar to xylophone</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 African Instruments</h4>
              <ul>
                <li>• <strong>Djembe:</strong> West African drum</li>
                <li>• <strong>Talking drum:</strong> Hourglass shape</li>
                <li>• <strong>Kora:</strong> West African harp</li>
                <li>• <strong>Kalimba:</strong> Thumb piano</li>
                <li>• <strong>Shekere:</strong> Gourd shaker</li>
                <li>• <strong>Udu:</strong> Clay drum</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Electronic Instruments</h4>
              <ul>
                <li>• <strong>Synthesizer:</strong> Electronic sound</li>
                <li>• <strong>Electric guitar:</strong> Amplified</li>
                <li>• <strong>Electronic keyboard:</strong> Various sounds</li>
                <li>• <strong>Drum machine:</strong> Electronic drums</li>
                <li>• <strong>Sampler:</strong> Plays recorded sounds</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Music Notation",
        objective: "obj_004",
        text: `
          <h3>Music Notation</h3>
          <p><strong>Music notation</strong> is a system for writing down music so it can be performed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Notation</h4>
              <ul>
                <li>• <strong>Staff:</strong> Five lines</li>
                <li>• <strong>Clef:</strong> Treble, bass, alto</li>
                <li>• <strong>Notes:</strong> Whole, half, quarter, eighth</li>
                <li>• <strong>Rests:</strong> Silent beats</li>
                <li>• <strong>Time signature:</strong> Beats per measure</li>
                <li>• <strong>Key signature:</strong> Sharps and flats</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Symbols</h4>
              <ul>
                <li>• <strong>♩ Quarter note:</strong> One beat</li>
                <li>• <strong>♪ Eighth note:</strong> Half beat</li>
                <li>• <strong>♩.</strong> Dotted note: 1.5 beats</li>
                <li>• <strong>♮</strong> Natural: Cancel sharp/flat</li>
                <li>• <strong>♯</strong> Sharp: Raise note</li>
                <li>• <strong>♭</strong> Flat: Lower note</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "History of Music",
        objective: "obj_005",
        text: `
          <h3>History of Music</h3>
          <p>Music has evolved over thousands of years.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Periods</h4>
              <ul>
                <li>• <strong>Medieval:</strong> Gregorian chant, 500-1400</li>
                <li>• <strong>Renaissance:</strong> Polyphony, 1400-1600</li>
                <li>• <strong>Baroque:</strong> Bach, Handel, 1600-1750</li>
                <li>• <strong>Classical:</strong> Mozart, Beethoven, 1750-1820</li>
                <li>• <strong>Romantic:</strong> Chopin, Tchaikovsky, 1820-1900</li>
                <li>• <strong>Modern:</strong> 1900-present</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Composers</h4>
              <ul>
                <li>• <strong>Bach:</strong> Baroque</li>
                <li>• <strong>Mozart:</strong> Classical</li>
                <li>• <strong>Beethoven:</strong> Classical/Romantic</li>
                <li>• <strong>Chopin:</strong> Romantic</li>
                <li>• <strong>Tchaikovsky:</strong> Romantic</li>
                <li>• <strong>Duke Ellington:</strong> Jazz</li>
                <li>• <strong>Fela Kuti:</strong> Afrobeat</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Music Genres",
        objective: "obj_006",
        text: `
          <h3>Music Genres</h3>
          <p>Music can be classified into many different genres.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Classical</h4>
              <ul>
                <li>• Orchestral</li>
                <li>• Chamber music</li>
                <li>• Opera</li>
                <li>• Choral</li>
                <li>• Instrumental</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Popular Music</h4>
              <ul>
                <li>• Rock</li>
                <li>• Pop</li>
                <li>• Hip hop</li>
                <li>• R&B</li>
                <li>• Country</li>
                <li>• Electronic</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 African Music</h4>
              <ul>
                <li>• Afrobeat</li>
                <li>• Highlife</li>
                <li>• Juju</li>
                <li>• Fuji</li>
                <li>• Afro-pop</li>
                <li>• Traditional</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nigerian Music",
        objective: "obj_009",
        text: `
          <h3>Nigerian Music Traditions</h3>
          <p>Nigeria has a rich and diverse musical heritage.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Traditional Genres</h4>
              <ul>
                <li>• <strong>Juju:</strong> Yoruba music</li>
                <li>• <strong>Fuji:</strong> Islamic-influenced</li>
                <li>• <strong>Highlife:</strong> Igbo music</li>
                <li>• <strong>Apala:</strong> Yoruba percussion</li>
                <li>• <strong>Afrobeat:</strong> Fela Kuti</li>
                <li>• <strong>Waka:</strong> Yoruba music</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Modern Nigerian Music</h4>
              <ul>
                <li>• <strong>Afrobeats:</strong> Global popularity</li>
                <li>• <strong>Burna Boy:</strong> International star</li>
                <li>• <strong>Wizkid:</strong> Global artist</li>
                <li>• <strong>Davido:</strong> Afrobeats artist</li>
                <li>• <strong>Fela Kuti:</strong> Afrobeat pioneer</li>
                <li>• <strong>King Sunny Ade:</strong> Juju legend</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Music and Society",
        objective: "obj_012",
        text: `
          <h3>Music and Society</h3>
          <p>Music plays a vital role in society and human experience.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Music</h4>
              <ul>
                <li>• <strong>Social:</strong> Bringing people together</li>
                <li>• <strong>Emotional:</strong> Expressing feelings</li>
                <li>• <strong>Cultural:</strong> Preserving heritage</li>
                <li>• <strong>Political:</strong> Protest and activism</li>
                <li>• <strong>Religious:</strong> Worship</li>
                <li>• <strong>Therapeutic:</strong> Healing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact on Development</h4>
              <ul>
                <li>• <strong>Cognitive:</strong> Brain development</li>
                <li>• <strong>Social:</strong> Communication skills</li>
                <li>• <strong>Emotional:</strong> Emotional intelligence</li>
                <li>• <strong>Academic:</strong> Improved learning</li>
                <li>• <strong>Creative:</strong> Creativity</li>
                <li>• <strong>Discipline:</strong> Practice and dedication</li>
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
          <h4>🎵 Music</h4>
          <ul>
            <li>• Elements: rhythm, melody, harmony, timbre, dynamics</li>
            <li>• Instrument families: strings, woodwinds, brass, percussion</li>
            <li>• Music notation: reading and writing music</li>
            <li>• History of music: medieval to modern</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Music genres: classical, popular, African</li>
            <li>• Nigerian music traditions</li>
            <li>• Music's role in society</li>
            <li>• Impact on human development</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Music is a universal language that connects people across cultures and generations.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "You need to be born with musical talent",
        correction: "Musical ability can be learned and developed",
        explanation: "Anyone can learn music with practice and dedication."
      },
      {
        id: "mis_002",
        misconception: "Classical music is the only real music",
        correction: "All genres of music are valid forms of expression",
        explanation: "Different genres have different cultural contexts and value."
      },
      {
        id: "mis_003",
        misconception: "Modern music has no value",
        correction: "Modern music is a valid form of cultural expression",
        explanation: "Music evolves with culture and technology."
      },
      {
        id: "mis_004",
        misconception: "Music is just entertainment",
        correction: "Music has many functions beyond entertainment",
        explanation: "Music serves social, emotional, cultural, and therapeutic purposes."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Music Therapy",
        description: "Music is used in therapy.",
        example: "Healing, emotional expression"
      },
      {
        id: "app_002",
        title: "Music Education",
        description: "Music is taught in schools.",
        example: "Developing skills and creativity"
      },
      {
        id: "app_003",
        title: "Music Industry",
        description: "Music is a significant economic sector.",
        example: "Recording, performance, streaming"
      },
      {
        id: "app_004",
        title: "Cultural Preservation",
        description: "Music preserves culture.",
        example: "Traditional music, heritage"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Music", definition: "The art of organizing sound in time." },
    { term: "Rhythm", definition: "The pattern of beats and time in music." },
    { term: "Melody", definition: "A sequence of notes that forms a tune." },
    { term: "Harmony", definition: "Notes played together to create chords." },
    { term: "Timbre", definition: "The quality of sound that distinguishes instruments." },
    { term: "Dynamics", definition: "The volume of sound in music." },
    { term: "Tempo", definition: "The speed of the music." },
    { term: "Pitch", definition: "The highness or lowness of a sound." },
    { term: "Genre", definition: "A category of music." },
    { term: "Orchestra", definition: "A large group of instrumentalists." },
    { term: "Choir", definition: "A group of singers." },
    { term: "Composer", definition: "A person who writes music." },
    { term: "Conductor", definition: "A person who directs a musical group." },
    { term: "Improvisation", definition: "Creating music on the spot." },
    { term: "Notation", definition: "A system for writing music." },
    { term: "Afrobeats", definition: "A popular Nigerian music genre." },
    { term: "Afrobeat", definition: "A genre created by Fela Kuti." },
    { term: "Highlife", definition: "A traditional Nigerian genre." },
    { term: "Juju", definition: "A Yoruba music genre." },
    { term: "Soul", definition: "A genre combining gospel and rhythm and blues." }
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
      question: "What is music?",
      type: "multiple_choice",
      options: [
        "A form of visual art",
        "The art of organizing sound in time",
        "A type of dance",
        "A form of literature"
      ],
      answer: "The art of organizing sound in time",
      explanation: "Music is the art of organizing sound in time."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is rhythm?",
      type: "multiple_choice",
      options: [
        "The tune of a song",
        "The pattern of beats and time",
        "The volume of sound",
        "The quality of sound"
      ],
      answer: "The pattern of beats and time",
      explanation: "Rhythm is the pattern of beats and time in music."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a string instrument?",
      type: "multiple_choice",
      options: ["Trumpet", "Violin", "Flute", "Drum"],
      answer: "Violin",
      explanation: "The violin is a string instrument."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is music notation?",
      type: "multiple_choice",
      options: [
        "A system for writing music",
        "A type of instrument",
        "A music genre",
        "A musical performance"
      ],
      answer: "A system for writing music",
      explanation: "Music notation is a system for writing music."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Who was a Baroque composer?",
      type: "multiple_choice",
      options: ["Mozart", "Bach", "Beethoven", "Chopin"],
      answer: "Bach",
      explanation: "Bach was a Baroque composer."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is an African music genre?",
      type: "multiple_choice",
      options: ["Jazz", "Afrobeats", "Rock", "Country"],
      answer: "Afrobeats",
      explanation: "Afrobeats is an African music genre."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the role of music in culture?",
      type: "multiple_choice",
      options: [
        "Only entertainment",
        "Preserving cultural heritage",
        "No role",
        "Only for ceremonies"
      ],
      answer: "Preserving cultural heritage",
      explanation: "Music preserves cultural heritage."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is musical form?",
      type: "multiple_choice",
      options: [
        "The structure of a piece",
        "The instruments used",
        "The volume of sound",
        "The tempo"
      ],
      answer: "The structure of a piece",
      explanation: "Musical form is the structure of a piece."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Who created Afrobeat?",
      type: "multiple_choice",
      options: [
        "Burna Boy",
        "Fela Kuti",
        "Wizkid",
        "Davido"
      ],
      answer: "Fela Kuti",
      explanation: "Fela Kuti created Afrobeat."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is musical composition?",
      type: "multiple_choice",
      options: [
        "A type of instrument",
        "The process of creating music",
        "A music genre",
        "A musical performance"
      ],
      answer: "The process of creating music",
      explanation: "Musical composition is the process of creating music."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "How is sound produced in instruments?",
      type: "multiple_choice",
      options: [
        "By vibrations",
        "By visual effects",
        "By electricity only",
        "By digital means"
      ],
      answer: "By vibrations",
      explanation: "Sound is produced by vibrations in instruments."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the social function of music?",
      type: "multiple_choice",
      options: [
        "Only personal enjoyment",
        "Bringing people together",
        "Only for professionals",
        "No social function"
      ],
      answer: "Bringing people together",
      explanation: "Music brings people together socially."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the music industry?",
      type: "multiple_choice",
      options: [
        "The business of music",
        "A type of instrument",
        "A music genre",
        "A musical performance"
      ],
      answer: "The business of music",
      explanation: "The music industry is the business of music."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does music affect emotions?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It can evoke emotions",
        "It only creates sadness",
        "It only creates joy"
      ],
      answer: "It can evoke emotions",
      explanation: "Music can evoke a wide range of emotions."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is the first step in analyzing a song?",
      type: "multiple_choice",
      options: [
        "Listening to the lyrics",
        "Identifying the elements of music",
        "Judging the song",
        "Comparing to other songs"
      ],
      answer: "Listening to the lyrics",
      explanation: "The first step is listening to the lyrics."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_music",
    title: "Music Quiz",
    description: "Test your understanding of music",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is music?",
        type: "short_answer",
        answer_key: "The art of organizing sound in time",
        explanation: "Music is the art of organizing sound in time."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is rhythm?",
        type: "short_answer",
        answer_key: "The pattern of beats and time",
        explanation: "Rhythm is the pattern of beats and time in music."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name one type of musical instrument.",
        type: "short_answer",
        answer_key: "Guitar (or any valid)",
        explanation: "Guitar is a string instrument."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is music notation?",
        type: "short_answer",
        answer_key: "A system for writing music",
        explanation: "Music notation is a system for writing music."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Name one Baroque composer.",
        type: "short_answer",
        answer_key: "Bach (or any valid)",
        explanation: "Bach was a Baroque composer."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Which is an African music genre?",
        type: "short_answer",
        answer_key: "Afrobeats (or any valid)",
        explanation: "Afrobeats is an African music genre."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the role of music in culture?",
        type: "short_answer",
        answer_key: "Preserving cultural heritage",
        explanation: "Music preserves cultural heritage."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "Who created Afrobeat?",
        type: "short_answer",
        answer_key: "Fela Kuti",
        explanation: "Fela Kuti created Afrobeat."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the social function of music?",
        type: "short_answer",
        answer_key: "Bringing people together",
        explanation: "Music brings people together socially."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the music industry?",
        type: "short_answer",
        answer_key: "The business of music",
        explanation: "The music industry is the business of music."
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
        "Understand music and its elements",
        "Identify musical instruments",
        "Explain music notation and history",
        "Understand music genres and Nigerian music"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is music?" },
        { time: "5-10 min", activity: "Direct Instruction - Elements of Music" },
        { time: "10-15 min", activity: "Direct Instruction - Instruments" },
        { time: "15-20 min", activity: "Direct Instruction - Music Notation" },
        { time: "20-25 min", activity: "Direct Instruction - Music History" },
        { time: "25-30 min", activity: "Direct Instruction - Music Genres" },
        { time: "30-35 min", activity: "Direct Instruction - Nigerian Music" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The art of organizing sound in time",
        prac_002: "The pattern of beats and time",
        prac_003: "Violin",
        prac_004: "A system for writing music",
        prac_005: "Bach",
        prac_006: "Afrobeats",
        prac_007: "Preserving cultural heritage",
        prac_008: "The structure of a piece",
        prac_009: "Fela Kuti",
        prac_010: "The process of creating music",
        prac_011: "By vibrations",
        prac_012: "Bringing people together",
        prac_013: "The business of music",
        prac_014: "It can evoke emotions",
        prac_015: "Listening to the lyrics"
      },
      assessment: {
        ass_001: "The art of organizing sound in time",
        ass_002: "The pattern of beats and time",
        ass_003: "Guitar (or any valid)",
        ass_004: "A system for writing music",
        ass_005: "Bach (or any valid)",
        ass_006: "Afrobeats (or any valid)",
        ass_007: "Preserving cultural heritage",
        ass_008: "Fela Kuti",
        ass_009: "Bringing people together",
        ass_010: "The business of music"
      }
    },
    extensionActivities: [
      "Learn to play an instrument",
      "Research a music genre",
      "Study a composer",
      "Attend a live performance"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use audio examples",
        "Provide vocabulary list"
      ],
      advanced: [
        "Study music theory",
        "Compose a piece",
        "Research music history",
        "Study world music"
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
      title: "Elements of Music",
      description: "Diagram showing the elements of music",
      url: "/diagrams/elements-of-music.png",
      alt: "Elements of music diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Musical Instruments",
      description: "Diagram of instrument families",
      url: "/diagrams/instrument-families.png",
      alt: "Instrument families diagram"
    },
    {
      id: "vis_003",
      type: "timeline",
      title: "Music History Timeline",
      description: "Timeline of major music periods",
      url: "/diagrams/music-history-timeline.png",
      alt: "Music history timeline"
    }
  ]
};