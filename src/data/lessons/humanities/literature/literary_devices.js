// Location: src/data/lessons/humanities/literature/literary_devices.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_literary_devices",
  subject: "Literature",
  topic: "Literary Devices",
  name: "Literary Devices",
  icon: "📝",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 28,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 22,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of literature basics",
    "Knowledge of poetry and prose",
    "Understanding of language",
    "Interest in literary analysis"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Philosophy",
      file: "humanities/philosophy.js"
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
      description: "Define literary devices and explain their importance",
      indicator: "Student can explain what literary devices are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify figurative language devices",
      indicator: "Student can identify metaphor, simile, and personification"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the use of sound devices in literature",
      indicator: "Student can identify alliteration, assonance, and onomatopoeia"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Analyze the use of metaphor in literature",
      indicator: "Student can explain how metaphor creates meaning"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Analyze the use of simile in literature",
      indicator: "Student can explain how simile creates comparison"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Analyze the use of personification in literature",
      indicator: "Student can explain how personification brings objects to life"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the use of symbolism in literature",
      indicator: "Student can identify symbols and their meanings"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the use of irony in literature",
      indicator: "Student can identify verbal, situational, and dramatic irony"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Analyze the use of imagery in literature",
      indicator: "Student can explain how imagery creates sensory experience"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the use of hyperbole in literature",
      indicator: "Student can explain how exaggeration creates effect"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the use of oxymoron in literature",
      indicator: "Student can identify and analyze oxymorons"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the use of paradox in literature",
      indicator: "Student can explain how paradox creates meaning"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the use of allusion in literature",
      indicator: "Student can identify and explain allusions"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the use of foreshadowing in literature",
      indicator: "Student can identify hints of future events"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the use of flashback in literature",
      indicator: "Student can explain how flashbacks provide background"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the use of tone and mood in literature",
      indicator: "Student can distinguish between tone and mood"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the use of motifs in literature",
      indicator: "Student can identify recurring elements"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the combined use of literary devices",
      indicator: "Student can analyze how multiple devices work together"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Literary Devices - The Tools of Writing",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about literary devices, their types, and how they create meaning in literature."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Literary Devices</h2>
      <p><strong>Literary devices</strong> are tools and techniques that writers use to create meaning, enhance expression, and engage readers. They are the building blocks of literature, allowing writers to convey ideas, emotions, and experiences in powerful and creative ways.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📝 Key Concepts</h3>
          <ul>
            <li>✓ Figurative Language</li>
            <li>✓ Sound Devices</li>
            <li>✓ Symbolism</li>
            <li>✓ Irony</li>
            <li>✓ Imagery</li>
            <li>✓ Literary Techniques</li>
            <li>✓ Narrative Devices</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Literary devices have been used for thousands of years</li>
            <li>• Shakespeare used over 200 literary devices</li>
            <li>• Metaphors are used in everyday language</li>
            <li>• Literary devices make writing more powerful</li>
            <li>• Understanding devices enhances reading</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Literary Devices Matter</h4>
        <p>Literary devices are the tools that make literature powerful and memorable. They help writers express complex ideas and emotions in creative ways.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Literary Devices?",
        objective: "obj_001",
        text: `
          <h3>Understanding Literary Devices</h3>
          <p><strong>Literary devices</strong> are techniques that writers use to create effects, convey meaning, and enhance their writing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Devices</h4>
              <ul>
                <li>• <strong>Figurative language:</strong> Metaphor, simile</li>
                <li>• <strong>Sound devices:</strong> Alliteration, assonance</li>
                <li>• <strong>Literary techniques:</strong> Irony, symbolism</li>
                <li>• <strong>Narrative devices:</strong> Foreshadowing, flashback</li>
                <li>• <strong>Structural devices:</strong> Juxtaposition, contrast</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Why Use Them?</h4>
              <ul>
                <li>• <strong>Create imagery:</strong> Paint pictures with words</li>
                <li>• <strong>Convey emotion:</strong> Evoke feelings</li>
                <li>• <strong>Emphasize ideas:</strong> Highlight themes</li>
                <li>• <strong>Engage readers:</strong> Capture attention</li>
                <li>• <strong>Add depth:</strong> Create meaning</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Figurative Language",
        objective: "obj_002",
        text: `
          <h3>Figurative Language</h3>
          <p>Figurative language uses words in non-literal ways to create meaning.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Metaphor</h4>
              <ul>
                <li>• Direct comparison</li>
                <li>• No "like" or "as"</li>
                <li>• Example:</li>
                <li>• "Life is a journey"</li>
                <li>• "The world is a stage"</li>
                <li>• Creates vivid imagery</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Simile</h4>
              <ul>
                <li>• Comparison using "like" or "as"</li>
                <li>• Example:</li>
                <li>• "He ran like the wind"</li>
                <li>• "She was as brave as a lion"</li>
                <li>• Creates clear comparison</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Personification</h4>
              <ul>
                <li>• Giving human qualities</li>
                <li>• Example:</li>
                <li>• "The wind whispered"</li>
                <li>• "The sun smiled"</li>
                <li>• Brings objects to life</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Hyperbole</h4>
              <ul>
                <li>• Exaggeration</li>
                <li>• Example:</li>
                <li>• "I've told you a million times"</li>
                <li>• "I'm so hungry I could eat a horse"</li>
                <li>• Creates emphasis</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Oxymoron</h4>
              <ul>
                <li>• Contradictory terms</li>
                <li>• Example:</li>
                <li>• "Deafening silence"</li>
                <li>• "Bittersweet"</li>
                <li>• Creates paradox</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Paradox</h4>
              <ul>
                <li>• Seeming contradiction</li>
                <li>• Example:</li>
                <li>• "Less is more"</li>
                <li>• "The more you give, the more you get"</li>
                <li>• Reveals truth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Sound Devices",
        objective: "obj_003",
        text: `
          <h3>Sound Devices in Literature</h3>
          <p>Sound devices create musical effects in language.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Alliteration</h4>
              <ul>
                <li>• Repetition of initial sounds</li>
                <li>• Example:</li>
                <li>• "She sells seashells"</li>
                <li>• "Peter Piper picked"</li>
                <li>• Creates rhythm</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Assonance</h4>
              <ul>
                <li>• Repetition of vowel sounds</li>
                <li>• Example:</li>
                <li>• "The rain in Spain"</li>
                <li>• "Men sell the wedding bells"</li>
                <li>• Creates internal rhyme</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Consonance</h4>
              <ul>
                <li>• Repetition of consonant sounds</li>
                <li>• Example:</li>
                <li>• "Pitter patter"</li>
                <li>• "The lumpy, bumpy road"</li>
                <li>• Creates texture</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Onomatopoeia</h4>
              <ul>
                <li>• Words that imitate sounds</li>
                <li>• Example:</li>
                <li>• "Buzz", "Bang"</li>
                <li>• "Hiss", "Pop"</li>
                <li>• Creates auditory imagery</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Rhyme</h4>
              <ul>
                <li>• Repetition of ending sounds</li>
                <li>• Example:</li>
                <li>• "Cat" and "Hat"</li>
                <li>• "Sing" and "Ring"</li>
                <li>• Creates musical effect</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 Rhythm</h4>
              <ul>
                <li>• Pattern of stressed syllables</li>
                <li>• Example:</li>
                <li>• "The way was long, the wind was cold"</li>
                <li>• Creates movement</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Imagery",
        objective: "obj_009",
        text: `
          <h3>Imagery in Literature</h3>
          <p><strong>Imagery</strong> is the use of sensory language to create mental pictures.</p>
          
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
                <li>• <strong>Visual:</strong> "The golden sunset"</li>
                <li>• <strong>Auditory:</strong> "The roaring thunder"</li>
                <li>• <strong>Olfactory:</strong> "The sweet scent of roses"</li>
                <li>• <strong>Gustatory:</strong> "The bitter taste"</li>
                <li>• <strong>Tactile:</strong> "The rough bark"</li>
                <li>• <strong>Kinesthetic:</strong> "The graceful dance"</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Symbolism",
        objective: "obj_007",
        text: `
          <h3>Symbolism in Literature</h3>
          <p><strong>Symbolism</strong> is the use of symbols to represent ideas or qualities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Symbols</h4>
              <ul>
                <li>• <strong>Colors:</strong> Red (passion), White (purity)</li>
                <li>• <strong>Objects:</strong> Rose (love), Dove (peace)</li>
                <li>• <strong>Seasons:</strong> Spring (renewal), Winter (death)</li>
                <li>• <strong>Nature:</strong> Water (life), Fire (destruction)</li>
                <li>• <strong>Light/Dark:</strong> Good vs Evil</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples in Literature</h4>
              <ul>
                <li>• <strong>The Green Light:</strong> Gatsby's hope</li>
                <li>• <strong>The Whale:</strong> Moby Dick</li>
                <li>• <strong>The River:</strong> Huck Finn</li>
                <li>• <strong>The Mask:</strong> Identity</li>
                <li>• <strong>The Mirror:</strong> Truth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Irony",
        objective: "obj_008",
        text: `
          <h3>Irony in Literature</h3>
          <p><strong>Irony</strong> is the contrast between appearance and reality.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Verbal Irony</h4>
              <ul>
                <li>• Saying the opposite</li>
                <li>• Sarcasm</li>
                <li>• Example:</li>
                <li>• "What a beautiful day" during a storm</li>
                <li>• Creates humor</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Situational Irony</h4>
              <ul>
                <li>• Opposite of what is expected</li>
                <li>• Example:</li>
                <li>• Fire station burns down</li>
                <li>• Creates surprise</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Dramatic Irony</h4>
              <ul>
                <li>• Audience knows more</li>
                <li>• Example:</li>
                <li>• Romeo and Juliet</li>
                <li>• Creates tension</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Narrative Devices",
        objective: "obj_014",
        text: `
          <h3>Narrative Devices</h3>
          <p>Narrative devices are techniques used to tell a story.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Foreshadowing</h4>
              <ul>
                <li>• Hint of future events</li>
                <li>• Creates suspense</li>
                <li>• Example:</li>
                <li>• "She had a bad feeling"</li>
                <li>• "Little did he know"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Flashback</h4>
              <ul>
                <li>• Return to the past</li>
                <li>• Provides background</li>
                <li>• Example:</li>
                <li>• Memories</li>
                <li>• Historical context</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Allusion</h4>
              <ul>
                <li>• Reference to something else</li>
                <li>• Biblical, mythological</li>
                <li>• Historical</li>
                <li>• Adds depth</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Motif</h4>
              <ul>
                <li>• Recurring element</li>
                <li>• Idea, image, symbol</li>
                <li>• Reinforces theme</li>
                <li>• Creates unity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Analyzing Literary Devices",
        objective: "obj_018",
        text: `
          <h3>Analyzing Literary Devices</h3>
          <p>Analyzing literary devices helps us understand how meaning is created.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps for Analysis</h4>
              <ul>
                <li>1. <strong>Identify devices:</strong> What is used?</li>
                <li>2. <strong>Analyze function:</strong> Why is it used?</li>
                <li>3. <strong>Examine effect:</strong> What is the impact?</li>
                <li>4. <strong>Connect to theme:</strong> How does it relate?</li>
                <li>5. <strong>Evaluate effectiveness:</strong> Is it successful?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example Analysis</h4>
              <p><strong>"All the world's a stage"</strong></p>
              <ul>
                <li>• <strong>Device:</strong> Metaphor</li>
                <li>• <strong>Function:</strong> Compare life to theatre</li>
                <li>• <strong>Effect:</strong> Creates understanding</li>
                <li>• <strong>Theme:</strong> Life as performance</li>
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
          <h4>📝 Literary Devices</h4>
          <ul>
            <li>• Figurative language: metaphor, simile, personification</li>
            <li>• Sound devices: alliteration, assonance, onomatopoeia</li>
            <li>• Imagery: sensory language</li>
            <li>• Symbolism: representing ideas</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Devices</h4>
          <ul>
            <li>• Irony: verbal, situational, dramatic</li>
            <li>• Foreshadowing and flashback</li>
            <li>• Allusion and motif</li>
            <li>• Hyperbole, oxymoron, paradox</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Literary devices are the tools that make literature powerful, engaging, and meaningful.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Literary devices are only used in poetry",
        correction: "Literary devices are used in all forms of literature",
        explanation: "Prose, drama, and all literary forms use literary devices."
      },
      {
        id: "mis_002",
        misconception: "Metaphors and similes are the same",
        correction: "Metaphors are direct comparisons; similes use 'like' or 'as'",
        explanation: "The difference is the presence or absence of 'like' or 'as'."
      },
      {
        id: "mis_003",
        misconception: "Imagery is only visual",
        correction: "Imagery appeals to all five senses",
        explanation: "Imagery can be visual, auditory, olfactory, gustatory, and tactile."
      },
      {
        id: "mis_004",
        misconception: "Irony is just sarcasm",
        correction: "Irony has three main types: verbal, situational, and dramatic",
        explanation: "Sarcasm is just one form of verbal irony."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Literary Analysis",
        description: "Devices are used in literary analysis.",
        example: "Analyzing poetry and prose"
      },
      {
        id: "app_002",
        title: "Creative Writing",
        description: "Devices enhance creative writing.",
        example: "Writing stories and poems"
      },
      {
        id: "app_003",
        title: "Communication",
        description: "Devices improve everyday communication.",
        example: "Metaphors in speech"
      },
      {
        id: "app_004",
        title: "Advertising",
        description: "Devices are used in advertising.",
        example: "Slogans and catchphrases"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Literary Device", definition: "A technique used by writers to create meaning and effect." },
    { term: "Metaphor", definition: "A direct comparison without using 'like' or 'as'." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Hyperbole", definition: "Exaggeration for effect." },
    { term: "Oxymoron", definition: "A combination of contradictory terms." },
    { term: "Paradox", definition: "A statement that seems contradictory but reveals truth." },
    { term: "Alliteration", definition: "Repetition of initial consonant sounds." },
    { term: "Assonance", definition: "Repetition of vowel sounds." },
    { term: "Consonance", definition: "Repetition of consonant sounds." },
    { term: "Onomatopoeia", definition: "Words that imitate sounds." },
    { term: "Imagery", definition: "Sensory language that creates pictures." },
    { term: "Symbolism", definition: "Using symbols to represent ideas." },
    { term: "Irony", definition: "A contrast between appearance and reality." },
    { term: "Foreshadowing", definition: "Hints of future events." },
    { term: "Flashback", definition: "A return to the past." },
    { term: "Allusion", definition: "A reference to something else." },
    { term: "Motif", definition: "A recurring element." },
    { term: "Tone", definition: "The author's attitude." },
    { term: "Mood", definition: "The atmosphere of a work." }
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
      question: "What are literary devices?",
      type: "multiple_choice",
      options: [
        "Techniques used by writers",
        "Types of literature",
        "Books about literature",
        "Authors"
      ],
      answer: "Techniques used by writers",
      explanation: "Literary devices are techniques used by writers."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a metaphor?",
      type: "multiple_choice",
      options: [
        "A direct comparison",
        "A comparison using 'like' or 'as'",
        "A type of poem",
        "A type of story"
      ],
      answer: "A direct comparison",
      explanation: "A metaphor is a direct comparison."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is alliteration?",
      type: "multiple_choice",
      options: [
        "Repetition of vowel sounds",
        "Repetition of initial consonant sounds",
        "Words that imitate sounds",
        "A type of rhyme"
      ],
      answer: "Repetition of initial consonant sounds",
      explanation: "Alliteration repeats initial consonant sounds."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the purpose of a metaphor?",
      type: "multiple_choice",
      options: [
        "To create comparison and meaning",
        "To list facts",
        "To confuse the reader",
        "To add detail"
      ],
      answer: "To create comparison and meaning",
      explanation: "Metaphors create comparison and meaning."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a simile?",
      type: "multiple_choice",
      options: [
        "A direct comparison",
        "A comparison using 'like' or 'as'",
        "A type of irony",
        "A sound device"
      ],
      answer: "A comparison using 'like' or 'as'",
      explanation: "A simile uses 'like' or 'as'."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is personification?",
      type: "multiple_choice",
      options: [
        "Giving human qualities to non-human things",
        "A type of comparison",
        "A sound device",
        "A type of irony"
      ],
      answer: "Giving human qualities to non-human things",
      explanation: "Personification gives human qualities to non-human things."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is symbolism?",
      type: "multiple_choice",
      options: [
        "Using symbols to represent ideas",
        "A type of comparison",
        "A sound device",
        "A narrative technique"
      ],
      answer: "Using symbols to represent ideas",
      explanation: "Symbolism uses symbols to represent ideas."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is dramatic irony?",
      type: "multiple_choice",
      options: [
        "When characters know more than the audience",
        "When the audience knows more than the characters",
        "When words mean the opposite",
        "When the opposite happens"
      ],
      answer: "When the audience knows more than the characters",
      explanation: "Dramatic irony occurs when the audience knows more."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What type of imagery appeals to smell?",
      type: "multiple_choice",
      options: ["Visual", "Auditory", "Olfactory", "Tactile"],
      answer: "Olfactory",
      explanation: "Olfactory imagery appeals to smell."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is hyperbole?",
      type: "multiple_choice",
      options: [
        "Exaggeration",
        "A direct comparison",
        "A sound device",
        "A type of irony"
      ],
      answer: "Exaggeration",
      explanation: "Hyperbole is exaggeration for effect."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an oxymoron?",
      type: "multiple_choice",
      options: [
        "Contradictory terms",
        "A type of comparison",
        "A sound device",
        "A type of irony"
      ],
      answer: "Contradictory terms",
      explanation: "An oxymoron combines contradictory terms."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a paradox?",
      type: "multiple_choice",
      options: [
        "A seeming contradiction",
        "A type of comparison",
        "A sound device",
        "A type of irony"
      ],
      answer: "A seeming contradiction",
      explanation: "A paradox is a seeming contradiction that reveals truth."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is an allusion?",
      type: "multiple_choice",
      options: [
        "A reference to something else",
        "A type of comparison",
        "A sound device",
        "A narrative technique"
      ],
      answer: "A reference to something else",
      explanation: "An allusion is a reference to something else."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is foreshadowing?",
      type: "multiple_choice",
      options: [
        "Hints of future events",
        "Return to the past",
        "A type of comparison",
        "A sound device"
      ],
      answer: "Hints of future events",
      explanation: "Foreshadowing hints at future events."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a flashback?",
      type: "multiple_choice",
      options: [
        "Return to the past",
        "Hints of future events",
        "A type of comparison",
        "A sound device"
      ],
      answer: "Return to the past",
      explanation: "A flashback returns to the past."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_literary_devices",
    title: "Literary Devices Quiz",
    description: "Test your understanding of literary devices",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are literary devices?",
        type: "short_answer",
        answer_key: "Techniques used by writers",
        explanation: "Literary devices are techniques used by writers."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a metaphor?",
        type: "short_answer",
        answer_key: "A direct comparison",
        explanation: "A metaphor is a direct comparison."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is alliteration?",
        type: "short_answer",
        answer_key: "Repetition of initial consonant sounds",
        explanation: "Alliteration repeats initial consonant sounds."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the purpose of a metaphor?",
        type: "short_answer",
        answer_key: "To create comparison and meaning",
        explanation: "Metaphors create comparison and meaning."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a simile?",
        type: "short_answer",
        answer_key: "A comparison using 'like' or 'as'",
        explanation: "A simile uses 'like' or 'as'."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is personification?",
        type: "short_answer",
        answer_key: "Giving human qualities to non-human things",
        explanation: "Personification gives human qualities to non-human things."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is symbolism?",
        type: "short_answer",
        answer_key: "Using symbols to represent ideas",
        explanation: "Symbolism uses symbols to represent ideas."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is dramatic irony?",
        type: "short_answer",
        answer_key: "When the audience knows more than the characters",
        explanation: "Dramatic irony occurs when the audience knows more."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What type of imagery appeals to smell?",
        type: "short_answer",
        answer_key: "Olfactory",
        explanation: "Olfactory imagery appeals to smell."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is hyperbole?",
        type: "short_answer",
        answer_key: "Exaggeration",
        explanation: "Hyperbole is exaggeration for effect."
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
        "Understand literary devices",
        "Identify figurative language",
        "Analyze sound devices",
        "Explain symbolism and irony"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are literary devices?" },
        { time: "5-10 min", activity: "Direct Instruction - Figurative Language" },
        { time: "10-15 min", activity: "Direct Instruction - Sound Devices" },
        { time: "15-20 min", activity: "Direct Instruction - Imagery" },
        { time: "20-25 min", activity: "Direct Instruction - Symbolism" },
        { time: "25-30 min", activity: "Direct Instruction - Irony" },
        { time: "30-35 min", activity: "Direct Instruction - Narrative Devices" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Techniques used by writers",
        prac_002: "A direct comparison",
        prac_003: "Repetition of initial consonant sounds",
        prac_004: "To create comparison and meaning",
        prac_005: "A comparison using 'like' or 'as'",
        prac_006: "Giving human qualities to non-human things",
        prac_007: "Using symbols to represent ideas",
        prac_008: "When the audience knows more than the characters",
        prac_009: "Olfactory",
        prac_010: "Exaggeration",
        prac_011: "Contradictory terms",
        prac_012: "A seeming contradiction",
        prac_013: "A reference to something else",
        prac_014: "Hints of future events",
        prac_015: "Return to the past"
      },
      assessment: {
        ass_001: "Techniques used by writers",
        ass_002: "A direct comparison",
        ass_003: "Repetition of initial consonant sounds",
        ass_004: "To create comparison and meaning",
        ass_005: "A comparison using 'like' or 'as'",
        ass_006: "Giving human qualities to non-human things",
        ass_007: "Using symbols to represent ideas",
        ass_008: "When the audience knows more than the characters",
        ass_009: "Olfactory",
        ass_010: "Exaggeration"
      }
    },
    extensionActivities: [
      "Analyze a poem for literary devices",
      "Write a story using devices",
      "Create a poster of devices",
      "Identify devices in songs"
    ],
    differentiation: {
      struggling: [
        "Focus on basic devices",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Analyze complex devices",
        "Write a literary analysis",
        "Create original metaphors",
        "Study rhetorical devices"
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
      title: "Figurative Language",
      description: "Diagram showing types of figurative language",
      url: "/diagrams/figurative-language.png",
      alt: "Figurative language diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Sound Devices",
      description: "Diagram showing sound devices",
      url: "/diagrams/sound-devices.png",
      alt: "Sound devices diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Types of Irony",
      description: "Diagram showing types of irony",
      url: "/diagrams/types-of-irony.png",
      alt: "Types of irony diagram"
    }
  ]
};