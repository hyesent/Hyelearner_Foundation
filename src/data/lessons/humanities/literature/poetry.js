// Location: src/data/lessons/humanities/literature/poetry.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_poetry",
  subject: "Literature",
  topic: "Poetry",
  name: "Poetry",
  icon: "📝",
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
    "Basic understanding of figurative language",
    "Ability to read and analyze texts"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Prose",
      file: "humanities/literature/prose.js"
    },
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
      description: "Define poetry and explain its importance",
      indicator: "Student can explain what poetry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the different types of poetry",
      indicator: "Student can distinguish between lyric, narrative, and dramatic poetry"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the elements of poetry",
      indicator: "Student can describe rhyme, rhythm, meter, and stanza"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Analyze poetic devices",
      indicator: "Student can identify metaphor, simile, personification, and imagery"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the structure of a poem",
      indicator: "Student can describe line, stanza, rhyme scheme, and meter"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe different poetic forms",
      indicator: "Student can explain sonnet, haiku, ode, ballad, and free verse"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the role of imagery in poetry",
      indicator: "Student can describe how imagery creates meaning"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the use of sound devices in poetry",
      indicator: "Student can identify alliteration, assonance, consonance, and onomatopoeia"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Analyze the theme of a poem",
      indicator: "Student can identify the central message of a poem"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Interpret the meaning of a poem",
      indicator: "Student can explain the deeper meaning of a poem"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the speaker and tone of a poem",
      indicator: "Student can describe the speaker's voice and attitude"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the historical and cultural context of poetry",
      indicator: "Student can discuss how context influences poetry"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze Nigerian poetry",
      indicator: "Student can discuss Nigerian poets and their works"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the relationship between poetry and music",
      indicator: "Student can discuss the connection between poetry and music"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of poetry on society",
      indicator: "Student can discuss how poetry reflects and influences society"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Write a simple poem",
      indicator: "Student can compose a basic poem using poetic devices"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Poetry - The Art of Language",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about poetry, its forms, devices, and significance in literature."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Poetry</h2>
      <p><strong>Poetry</strong> is a form of literary art that uses aesthetic and rhythmic qualities of language to evoke meaning and emotion. It is one of the oldest forms of literature, dating back thousands of years. Poetry condenses language to its most expressive form, creating powerful images and emotions.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📝 Key Concepts</h3>
          <ul>
            <li>✓ Types of Poetry</li>
            <li>✓ Elements of Poetry</li>
            <li>✓ Poetic Devices</li>
            <li>✓ Sound Devices</li>
            <li>✓ Poetic Forms</li>
            <li>✓ Imagery</li>
            <li>✓ Theme</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Poetry is the oldest form of literature</li>
            <li>• The oldest known poem is the Epic of Gilgamesh</li>
            <li>• Shakespeare wrote 154 sonnets</li>
            <li>• Nigeria has a rich poetic tradition</li>
            <li>• Poetry is often linked to music</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Poetry Matters</h4>
        <p>Poetry expresses human experience in its most condensed and powerful form. It helps us understand ourselves, connect with others, and see the world in new ways.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Poetry?",
        objective: "obj_001",
        text: `
          <h3>Understanding Poetry</h3>
          <p><strong>Poetry</strong> is a form of literature that uses aesthetic and rhythmic qualities of language to evoke meaning and emotion.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Condensed language:</strong> Brief but powerful</li>
                <li>• <strong>Rhythm:</strong> Musical quality</li>
                <li>• <strong>Imagery:</strong> Visual and sensory language</li>
                <li>• <strong>Emotion:</strong> Expresses feelings</li>
                <li>• <strong>Figurative language:</strong> Metaphor, simile</li>
                <li>• <strong>Sound:</strong> Rhyme, alliteration</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Poetry vs Prose</h4>
              <ul>
                <li>• <strong>Poetry:</strong> Condensed, rhythmic, figurative</li>
                <li>• <strong>Prose:</strong> Ordinary language, paragraphs</li>
                <li>• <strong>Poetry:</strong> Uses line breaks</li>
                <li>• <strong>Prose:</strong> Uses sentences and paragraphs</li>
                <li>• <strong>Poetry:</strong> Often uses rhyme and meter</li>
                <li>• <strong>Prose:</strong> Does not require rhyme</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Poetry",
        objective: "obj_002",
        text: `
          <h3>Types of Poetry</h3>
          <p>Poetry can be classified into several main types.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Lyric Poetry</h4>
              <ul>
                <li>• Expresses personal feelings</li>
                <li>• Musical quality</li>
                <li>• Examples:</li>
                <li>• Sonnets</li>
                <li>• Odes</li>
                <li>• Songs</li>
                <li>• Elegies</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Narrative Poetry</h4>
              <ul>
                <li>• Tells a story</li>
                <li>• Has characters and plot</li>
                <li>• Examples:</li>
                <li>• Epics</li>
                <li>• Ballads</li>
                <li>• Narrative poems</li>
                <li>• Folk ballads</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Dramatic Poetry</h4>
              <ul>
                <li>• Written for performance</li>
                <li>• Uses dialogue</li>
                <li>• Examples:</li>
                <li>• Dramatic monologues</li>
                <li>• Plays in verse</li>
                <li>• Verse dramas</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Elements of Poetry",
        objective: "obj_003",
        text: `
          <h3>Elements of Poetry</h3>
          <p>Poetry is built on several key elements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Rhyme:</strong> Repetition of sounds</li>
                <li>• <strong>Rhythm:</strong> Pattern of stressed and unstressed syllables</li>
                <li>• <strong>Meter:</strong> Regular pattern of rhythm</li>
                <li>• <strong>Stanza:</strong> Group of lines</li>
                <li>• <strong>Line:</strong> Basic unit of poetry</li>
                <li>• <strong>Imagery:</strong> Sensory language</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rhyme Scheme</h4>
              <ul>
                <li>• <strong>ABAB:</strong> Alternating rhyme</li>
                <li>• <strong>AABB:</strong> Coupled rhyme</li>
                <li>• <strong>ABBA:</strong> Enclosed rhyme</li>
                <li>• <strong>AAA:</strong> Triple rhyme</li>
                <li>• <strong>Free verse:</strong> No fixed rhyme scheme</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Poetic Devices",
        objective: "obj_004",
        text: `
          <h3>Poetic Devices</h3>
          <p>Poets use various devices to create meaning and effect.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Figurative Language</h4>
              <ul>
                <li>• <strong>Metaphor:</strong> Direct comparison</li>
                <li>• <strong>Simile:</strong> Comparison using "like" or "as"</li>
                <li>• <strong>Personification:</strong> Giving human qualities</li>
                <li>• <strong>Hyperbole:</strong> Exaggeration</li>
                <li>• <strong>Imagery:</strong> Sensory language</li>
                <li>• <strong>Symbolism:</strong> Symbolic meaning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sound Devices</h4>
              <ul>
                <li>• <strong>Alliteration:</strong> Repetition of initial sounds</li>
                <li>• <strong>Assonance:</strong> Repetition of vowel sounds</li>
                <li>• <strong>Consonance:</strong> Repetition of consonant sounds</li>
                <li>• <strong>Onomatopoeia:</strong> Words that imitate sounds</li>
                <li>• <strong>Rhyme:</strong> Repetition of ending sounds</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Poetic Forms",
        objective: "obj_006",
        text: `
          <h3>Poetic Forms</h3>
          <p>Poetry takes many different forms.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sonnet</h4>
              <ul>
                <li>• 14 lines</li>
                <li>• Shakespearean or Petrarchan</li>
                <li>• Rhyme scheme</li>
                <li>• Usually about love</li>
                <li>• Iambic pentameter</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Haiku</h4>
              <ul>
                <li>• 3 lines</li>
                <li>• 5-7-5 syllables</li>
                <li>• Japanese origin</li>
                <li>• Nature themes</li>
                <li>• Simple and brief</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Ode</h4>
              <ul>
                <li>• Praise poem</li>
                <li>• Formal style</li>
                <li>• Serious subject</li>
                <li>• Classical origin</li>
                <li>• Celebratory</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Ballad</h4>
              <ul>
                <li>• Tells a story</li>
                <li>• Folk origin</li>
                <li>• Simple language</li>
                <li>• Often tragic</li>
                <li>• Repetition</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Free Verse</h4>
              <ul>
                <li>• No fixed rhyme or meter</li>
                <li>• Modern form</li>
                <li>• Flexible structure</li>
                <li>• Emphasizes content</li>
                <li>• Natural speech patterns</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Epic</h4>
              <ul>
                <li>• Long narrative poem</li>
                <li>• Heroic subject</li>
                <li>• Ancient origin</li>
                <li>• Grand style</li>
                <li>• Mythological themes</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Imagery in Poetry",
        objective: "obj_007",
        text: `
          <h3>Imagery in Poetry</h3>
          <p><strong>Imagery</strong> is the use of vivid and sensory language to create pictures in the reader's mind.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Imagery</h4>
              <ul>
                <li>• <strong>Visual:</strong> Sight</li>
                <li>• <strong>Auditory:</strong> Sound</li>
                <li>• <strong>Olfactory:</strong> Smell</li>
                <li>• <strong>Gustatory:</strong> Taste</li>
                <li>• <strong>Tactile:</strong> Touch</li>
                <li>• <strong>Kinesthetic:</strong> Movement</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Visual:</strong> "The golden sun sank in the west"</li>
                <li>• <strong>Auditory:</strong> "The roaring thunder"</li>
                <li>• <strong>Olfactory:</strong> "The sweet scent of roses"</li>
                <li>• <strong>Gustatory:</strong> "The bitter taste of defeat"</li>
                <li>• <strong>Tactile:</strong> "The rough bark of the tree"</li>
                <li>• <strong>Kinesthetic:</strong> "The dancer's graceful movement"</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Nigerian Poetry",
        objective: "obj_013",
        text: `
          <h3>Nigerian Poetry</h3>
          <p>Nigeria has a rich and diverse poetic tradition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Nigerian Poets</h4>
              <ul>
                <li>• <strong>Wole Soyinka:</strong> Nobel Prize winner</li>
                <li>• <strong>Chinua Achebe:</strong> Novelist and poet</li>
                <li>• <strong>J.P. Clark:</strong> Poet and playwright</li>
                <li>• <strong>Christopher Okigbo:</strong> Modernist poet</li>
                <li>• <strong>Niyi Osundare:</strong> Contemporary poet</li>
                <li>• <strong>Odia Ofeimun:</strong> Poet and essayist</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Themes</h4>
              <ul>
                <li>• <strong>Colonialism:</strong> Impact of colonization</li>
                <li>• <strong>Independence:</strong> Hope and disillusionment</li>
                <li>• <strong>Culture:</strong> Traditional values</li>
                <li>• <strong>Politics:</strong> Social and political issues</li>
                <li>• <strong>Identity:</strong> Nigerian identity</li>
                <li>• <strong>Oral tradition:</strong> Traditional poetry</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Poetry Analysis",
        objective: "obj_010",
        text: `
          <h3>Analyzing Poetry</h3>
          <p>Analyzing a poem involves examining its elements, devices, and meaning.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps for Analysis</h4>
              <ul>
                <li>1. <strong>Read the poem:</strong> Read multiple times</li>
                <li>2. <strong>Identify the speaker:</strong> Who is speaking?</li>
                <li>3. <strong>Identify the subject:</strong> What is it about?</li>
                <li>4. <strong>Analyze structure:</strong> Lines, stanzas, rhyme</li>
                <li>5. <strong>Identify literary devices:</strong> Metaphor, simile</li>
                <li>6. <strong>Analyze imagery:</strong> Sensory language</li>
                <li>7. <strong>Identify theme:</strong> Central message</li>
                <li>8. <strong>Interpret meaning:</strong> Deeper meaning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example Poem</h4>
              <p><strong>The Rain</strong></p>
              <ul>
                <li>• <strong>Speaker:</strong> A farmer or observer</li>
                <li>• <strong>Subject:</strong> Rain and its effects</li>
                <li>• <strong>Devices:</strong> Imagery, personification</li>
                <li>• <strong>Theme:</strong> Nature's power</li>
                <li>• <strong>Interpretation:</strong> Rain as life-giving force</li>
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
          <h4>📝 Poetry</h4>
          <ul>
            <li>• Types: lyric, narrative, dramatic</li>
            <li>• Elements: rhyme, rhythm, meter, stanza</li>
            <li>• Devices: metaphor, simile, personification, imagery</li>
            <li>• Forms: sonnet, haiku, ode, ballad, free verse</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Nigerian poetry and poets</li>
            <li>• Poetry analysis</li>
            <li>• Sound devices</li>
            <li>• Theme and interpretation</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Poetry is the language of the heart. It expresses what cannot be said in ordinary words.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Poetry must rhyme",
        correction: "Many poems do not rhyme, especially modern poetry",
        explanation: "Free verse poetry does not require rhyme."
      },
      {
        id: "mis_002",
        misconception: "Poetry is always difficult to understand",
        correction: "Poetry can be accessible and meaningful",
        explanation: "Many poems are written in simple, clear language."
      },
      {
        id: "mis_003",
        misconception: "Only old poetry is valuable",
        correction: "Contemporary poetry is equally valuable",
        explanation: "Modern poetry explores current themes and issues."
      },
      {
        id: "mis_004",
        misconception: "Poetry has no practical use",
        correction: "Poetry has many uses including expression, therapy, and education",
        explanation: "Poetry helps us understand ourselves and the world."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Personal Expression",
        description: "Poetry expresses personal feelings.",
        example: "Writing poetry for self-expression"
      },
      {
        id: "app_002",
        title: "Therapy",
        description: "Poetry is used in therapy.",
        example: "Poetry therapy, creative writing"
      },
      {
        id: "app_003",
        title: "Education",
        description: "Poetry is taught in schools.",
        example: "Developing language skills"
      },
      {
        id: "app_004",
        title: "Culture",
        description: "Poetry preserves culture.",
        example: "Traditional and contemporary poetry"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Poetry", definition: "A form of literature using aesthetic and rhythmic qualities of language." },
    { term: "Lyric Poetry", definition: "Poetry expressing personal feelings." },
    { term: "Narrative Poetry", definition: "Poetry that tells a story." },
    { term: "Dramatic Poetry", definition: "Poetry written for performance." },
    { term: "Rhyme", definition: "Repetition of sounds at the end of words." },
    { term: "Rhythm", definition: "Pattern of stressed and unstressed syllables." },
    { term: "Meter", definition: "Regular pattern of rhythm." },
    { term: "Stanza", definition: "A group of lines in a poem." },
    { term: "Imagery", definition: "Sensory language that creates pictures." },
    { term: "Metaphor", definition: "A direct comparison." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Alliteration", definition: "Repetition of initial sounds." },
    { term: "Assonance", definition: "Repetition of vowel sounds." },
    { term: "Consonance", definition: "Repetition of consonant sounds." },
    { term: "Onomatopoeia", definition: "Words that imitate sounds." },
    { term: "Sonnet", definition: "A 14-line poem." },
    { term: "Haiku", definition: "A 3-line poem with a 5-7-5 syllable pattern." },
    { term: "Theme", definition: "The central message of a poem." },
    { term: "Speaker", definition: "The voice in a poem." }
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
      question: "What is poetry?",
      type: "multiple_choice",
      options: [
        "A form of prose",
        "A form of literature using aesthetic and rhythmic language",
        "A type of drama",
        "A type of fiction"
      ],
      answer: "A form of literature using aesthetic and rhythmic language",
      explanation: "Poetry uses aesthetic and rhythmic qualities of language."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is lyric poetry?",
      type: "multiple_choice",
      options: [
        "Poetry that tells a story",
        "Poetry expressing personal feelings",
        "Poetry written for performance",
        "Poetry about nature"
      ],
      answer: "Poetry expressing personal feelings",
      explanation: "Lyric poetry expresses personal feelings."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is rhyme?",
      type: "multiple_choice",
      options: [
        "Repetition of sounds",
        "Pattern of syllables",
        "A group of lines",
        "Sensory language"
      ],
      answer: "Repetition of sounds",
      explanation: "Rhyme is the repetition of sounds."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a metaphor?",
      type: "multiple_choice",
      options: [
        "A comparison using 'like' or 'as'",
        "A direct comparison",
        "Giving human qualities",
        "Exaggeration"
      ],
      answer: "A direct comparison",
      explanation: "A metaphor is a direct comparison."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a stanza?",
      type: "multiple_choice",
      options: [
        "A single line",
        "A group of lines",
        "The rhyme scheme",
        "The meter"
      ],
      answer: "A group of lines",
      explanation: "A stanza is a group of lines in a poem."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How many lines does a sonnet have?",
      type: "multiple_choice",
      options: ["10", "12", "14", "16"],
      answer: "14",
      explanation: "A sonnet has 14 lines."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is imagery?",
      type: "multiple_choice",
      options: [
        "The use of rhyme",
        "The use of sensory language",
        "The use of metaphors",
        "The use of rhythm"
      ],
      answer: "The use of sensory language",
      explanation: "Imagery is the use of sensory language."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is alliteration?",
      type: "multiple_choice",
      options: [
        "Repetition of vowel sounds",
        "Repetition of initial sounds",
        "Repetition of ending sounds",
        "Words that imitate sounds"
      ],
      answer: "Repetition of initial sounds",
      explanation: "Alliteration is the repetition of initial sounds."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the theme of a poem?",
      type: "multiple_choice",
      options: [
        "The rhyme scheme",
        "The central message",
        "The number of stanzas",
        "The length of the poem"
      ],
      answer: "The central message",
      explanation: "The theme is the central message of a poem."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the first step in analyzing a poem?",
      type: "multiple_choice",
      options: [
        "Identify the theme",
        "Read the poem",
        "Analyze the meter",
        "Identify the rhyme scheme"
      ],
      answer: "Read the poem",
      explanation: "The first step is to read the poem."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the speaker in a poem?",
      type: "multiple_choice",
      options: [
        "The author",
        "The voice in the poem",
        "The reader",
        "The publisher"
      ],
      answer: "The voice in the poem",
      explanation: "The speaker is the voice in the poem."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does context influence poetry?",
      type: "multiple_choice",
      options: [
        "It does not influence poetry",
        "It affects the meaning and themes",
        "It only affects the rhyme",
        "It only affects the meter"
      ],
      answer: "It affects the meaning and themes",
      explanation: "Context influences the meaning and themes of poetry."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Who is a famous Nigerian poet?",
      type: "multiple_choice",
      options: [
        "Chinua Achebe",
        "Wole Soyinka",
        "J.P. Clark",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "All are famous Nigerian poets."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How are poetry and music connected?",
      type: "multiple_choice",
      options: [
        "They are not connected",
        "Both use rhythm and sound",
        "Poetry is only for reading",
        "Music is only for listening"
      ],
      answer: "Both use rhythm and sound",
      explanation: "Both poetry and music use rhythm and sound."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does poetry impact society?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It reflects and influences society",
        "It only entertains",
        "It is only for education"
      ],
      answer: "It reflects and influences society",
      explanation: "Poetry reflects and influences society."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_poetry",
    title: "Poetry Quiz",
    description: "Test your understanding of poetry",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is poetry?",
        type: "short_answer",
        answer_key: "A form of literature using aesthetic and rhythmic language",
        explanation: "Poetry uses aesthetic and rhythmic language."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is lyric poetry?",
        type: "short_answer",
        answer_key: "Poetry expressing personal feelings",
        explanation: "Lyric poetry expresses personal feelings."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is rhyme?",
        type: "short_answer",
        answer_key: "Repetition of sounds",
        explanation: "Rhyme is the repetition of sounds."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a metaphor?",
        type: "short_answer",
        answer_key: "A direct comparison",
        explanation: "A metaphor is a direct comparison."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a stanza?",
        type: "short_answer",
        answer_key: "A group of lines",
        explanation: "A stanza is a group of lines."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How many lines does a sonnet have?",
        type: "short_answer",
        answer_key: "14",
        explanation: "A sonnet has 14 lines."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is imagery?",
        type: "short_answer",
        answer_key: "The use of sensory language",
        explanation: "Imagery uses sensory language."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is alliteration?",
        type: "short_answer",
        answer_key: "Repetition of initial sounds",
        explanation: "Alliteration repeats initial sounds."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the theme of a poem?",
        type: "short_answer",
        answer_key: "The central message",
        explanation: "The theme is the central message."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "Name one famous Nigerian poet.",
        type: "short_answer",
        answer_key: "Wole Soyinka (or any valid)",
        explanation: "Wole Soyinka is a famous Nigerian poet."
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
        "Understand poetry and its types",
        "Identify elements of poetry",
        "Analyze poetic devices",
        "Understand Nigerian poetry"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is poetry?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Poetry" },
        { time: "10-15 min", activity: "Direct Instruction - Elements of Poetry" },
        { time: "15-20 min", activity: "Direct Instruction - Poetic Devices" },
        { time: "20-25 min", activity: "Direct Instruction - Poetic Forms" },
        { time: "25-30 min", activity: "Direct Instruction - Nigerian Poetry" },
        { time: "30-35 min", activity: "Direct Instruction - Poetry Analysis" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A form of literature using aesthetic and rhythmic language",
        prac_002: "Poetry expressing personal feelings",
        prac_003: "Repetition of sounds",
        prac_004: "A direct comparison",
        prac_005: "A group of lines",
        prac_006: "14",
        prac_007: "The use of sensory language",
        prac_008: "Repetition of initial sounds",
        prac_009: "The central message",
        prac_010: "Read the poem",
        prac_011: "The voice in the poem",
        prac_012: "It affects the meaning and themes",
        prac_013: "All of the above",
        prac_014: "Both use rhythm and sound",
        prac_015: "It reflects and influences society"
      },
      assessment: {
        ass_001: "A form of literature using aesthetic and rhythmic language",
        ass_002: "Poetry expressing personal feelings",
        ass_003: "Repetition of sounds",
        ass_004: "A direct comparison",
        ass_005: "A group of lines",
        ass_006: "14",
        ass_007: "The use of sensory language",
        ass_008: "Repetition of initial sounds",
        ass_009: "The central message",
        ass_010: "Wole Soyinka (or any valid)"
      }
    },
    extensionActivities: [
      "Write a poem",
      "Read and analyze a poem",
      "Research a poet",
      "Attend a poetry reading"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a sonnet",
        "Analyze a poem in depth",
        "Research poetic theory",
        "Study Nigerian poetry"
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
      title: "Types of Poetry",
      description: "Diagram showing types of poetry",
      url: "/diagrams/types-of-poetry.png",
      alt: "Types of poetry diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Elements of Poetry",
      description: "Diagram showing elements of poetry",
      url: "/diagrams/elements-of-poetry.png",
      alt: "Elements of poetry diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Poetic Devices",
      description: "Diagram showing poetic devices",
      url: "/diagrams/poetic-devices.png",
      alt: "Poetic devices diagram"
    }
  ]
};