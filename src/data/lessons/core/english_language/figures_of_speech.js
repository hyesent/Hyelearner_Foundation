// Location: src/data/lessons/core/english_language/figures_of_speech.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_figures_of_speech",
  subject: "English Language",
  topic: "Figures of Speech",
  name: "Figures of Speech",
  icon: "🎭",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of parts of speech",
    "Basic reading comprehension",
    "Familiarity with basic literary terms",
    "Critical thinking skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
    },
    {
      id: "eng_lesson_comprehension",
      name: "Comprehension",
      file: "core/english_language/comprehension.js"
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
      description: "Define figures of speech and explain their purpose",
      indicator: "Student can explain why writers use figurative language"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and explain similes",
      indicator: "Student can recognize and create similes"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify and explain metaphors",
      indicator: "Student can recognize and create metaphors"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify and explain personification",
      indicator: "Student can recognize and create personification"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify and explain hyperbole",
      indicator: "Student can recognize and create hyperbole"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify and explain alliteration and assonance",
      indicator: "Student can recognize sound devices in texts"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify and explain onomatopoeia",
      indicator: "Student can recognize sound words in texts"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Identify and explain irony and sarcasm",
      indicator: "Student can recognize ironic statements"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Identify and explain oxymoron and paradox",
      indicator: "Student can recognize contradictory expressions"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Identify and analyze imagery in texts",
      indicator: "Student can analyze how imagery creates meaning"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the effect of figures of speech in literature",
      indicator: "Student can explain the impact of figurative language"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Create original writing using multiple figures of speech",
      indicator: "Student can compose creative texts with figurative language"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Figures of Speech",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to identify and use all major figures of speech."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Figures of Speech?</h2>
      <p><strong>Figures of speech</strong> are literary devices that use words in non-literal ways to create vivid imagery, emphasize ideas, and add depth to writing. They make language more interesting and powerful.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Without Figures of Speech</h3>
          <p><em>"The sunset was beautiful. The clouds were colorful. The sky was pretty."</em></p>
          <p class="text-sm text-gray-600">Boring, repetitive, flat</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 With Figures of Speech</h3>
          <p><em>"The sunset <strong>painted</strong> the sky in <strong>fiery</strong> hues. The clouds <strong>danced</strong> across the horizon."</em></p>
          <p class="text-sm text-gray-600">Vivid, imaginative, engaging</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Figures of Speech Matter</h4>
        <ul>
          <li>✓ Make writing more vivid and interesting</li>
          <li>✓ Help readers visualize and connect</li>
          <li>✓ Add emotional depth to writing</li>
          <li>✓ Show creativity and skill</li>
          <li>✓ Essential for literary analysis</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Similes",
        objective: "obj_002",
        text: `
          <h3>Simile</h3>
          <p>A <strong>simile</strong> is a figure of speech that compares two different things using the words <strong>"like"</strong> or <strong>"as"</strong>.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>X is like Y</strong> or <strong>X is as [adjective] as Y</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"She is <strong>as brave as a lion</strong>."</li>
              <li>"He runs <strong>like the wind</strong>."</li>
              <li>"Her smile <strong>was like sunshine</strong>."</li>
              <li>"The night <strong>was as dark as coal</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Creating Similes:</strong>
            <ul>
              <li><strong>Topic:</strong> The ocean</li>
              <li><strong>Simile:</strong> "The ocean was <strong>like a restless giant</strong>."</li>
              <li><strong>Topic:</strong> Her voice</li>
              <li><strong>Simile:</strong> "Her voice <strong>was as sweet as honey</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Metaphors",
        objective: "obj_003",
        text: `
          <h3>Metaphor</h3>
          <p>A <strong>metaphor</strong> is a figure of speech that compares two different things directly, <strong>without</strong> using "like" or "as." It says one thing <strong>is</strong> another.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>X is Y</strong> (direct comparison)</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>Time is a thief</strong>." (Time steals moments)</li>
              <li>"<strong>Her eyes were stars</strong>." (Her eyes shone brightly)</li>
              <li>"<strong>The world is a stage</strong>." (Life is like a performance)</li>
              <li>"<strong>He is a rock</strong>." (He is strong and dependable)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Simile vs Metaphor:</strong>
            <ul>
              <li><strong>Simile:</strong> "Life is <strong>like</strong> a roller coaster."</li>
              <li><strong>Metaphor:</strong> "Life <strong>is</strong> a roller coaster."</li>
              <li><strong>Simile:</strong> "Her tears were <strong>like</strong> raindrops."</li>
              <li><strong>Metaphor:</strong> "Her tears <strong>were</strong> raindrops."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Personification",
        objective: "obj_004",
        text: `
          <h3>Personification</h3>
          <p><strong>Personification</strong> gives human qualities, feelings, or actions to non-human things like objects, animals, or ideas.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"The wind <strong>whispered</strong> through the trees." (Wind doesn't whisper)</li>
              <li>"The sun <strong>smiled</strong> down on us." (Sun doesn't smile)</li>
              <li>"Time <strong>marches</strong> on." (Time doesn't march)</li>
              <li>"The flowers <strong>danced</strong> in the breeze." (Flowers don't dance)</li>
              <li>"Fear <strong>knocked</strong> on the door." (Fear doesn't knock)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li><strong>Non-human:</strong> The storm</li>
              <li><strong>Personification:</strong> "The storm <strong>raged</strong> with fury."</li>
              <li><strong>Non-human:</strong> The clock</li>
              <li><strong>Personification:</strong> "The clock <strong>stared</strong> at me impatiently."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Hyperbole",
        objective: "obj_005",
        text: `
          <h3>Hyperbole</h3>
          <p><strong>Hyperbole</strong> is an extreme exaggeration used to emphasize a point or create a strong effect.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"I'm <strong>so hungry I could eat a horse</strong>."</li>
              <li>"I've <strong>told you a million times</strong>."</li>
              <li>"She <strong>weighed a ton</strong>."</li>
              <li>"I <strong>died</strong> of embarrassment."</li>
              <li>"The bag <strong>weighed a thousand pounds</strong>."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Note:</strong> Hyperbole is not meant to be taken literally. It's used for emphasis or humorous effect.
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li><strong>Regular:</strong> "I was very tired."</li>
              <li><strong>Hyperbole:</strong> "I <strong>could sleep for a year</strong>."</li>
              <li><strong>Regular:</strong> "It was very expensive."</li>
              <li><strong>Hyperbole:</strong> "It <strong>cost an arm and a leg</strong>."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Alliteration and Assonance",
        objective: "obj_006",
        text: `
          <h3>Sound Devices</h3>
          <p><strong>Alliteration</strong> is the repetition of initial consonant sounds. <strong>Assonance</strong> is the repetition of vowel sounds.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Alliteration</h4>
              <ul>
                <li><em>"<strong>S</strong>ally <strong>s</strong>ells <strong>s</strong>ea <strong>s</strong>hells."</em></li>
                <li><em>"<strong>B</strong>ig <strong>b</strong>ad <strong>b</strong>ear."</em></li>
                <li><em>"<strong>P</strong>eter <strong>p</strong>icked a <strong>p</strong>eck of <strong>p</strong>ickled <strong>p</strong>eppers."</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Assonance</h4>
              <ul>
                <li><em>"The <strong>r ai n</strong> in Sp<strong>ai</strong>n f<strong>a</strong>lls m<strong>ai</strong>nly on the pl<strong>ai</strong>n."</em></li>
                <li><em>"H<strong>e</strong> s<strong>e</strong>lls s<strong>e</strong>a sh<strong>e</strong>lls."</em></li>
                <li><em>"The l<strong>i</strong>ght of the f<strong>i</strong>re is a s<strong>i</strong>ght."</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Why Use Them?</strong>
            <ul>
              <li>Create rhythm and musicality in writing</li>
              <li>Make phrases more memorable</li>
              <li>Emphasize certain words or ideas</li>
              <li>Create a mood or atmosphere</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Onomatopoeia",
        objective: "obj_007",
        text: `
          <h3>Onomatopoeia</h3>
          <p><strong>Onomatopoeia</strong> is a word that imitates the sound it represents.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Animal Sounds:</h4>
              <ul>
                <li><strong>Meow</strong> (cat)</li>
                <li><strong>Woof</strong> (dog)</li>
                <li><strong>Moo</strong> (cow)</li>
                <li><strong>Quack</strong> (duck)</li>
                <li><strong>Cock-a-doodle-doo</strong> (rooster)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Other Sounds:</h4>
              <ul>
                <li><strong>Bang</strong> (loud noise)</li>
                <li><strong>Splash</strong> (water)</li>
                <li><strong>Buzz</strong> (bee)</li>
                <li><strong>Crash</strong> (falling object)</li>
                <li><strong>Whisper</strong> (soft speech)</li>
                <li><strong>Hiss</strong> (snake/steam)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 In Sentences:</strong>
            <ul>
              <li>"The bee <strong>buzzed</strong> around the garden."</li>
              <li>"The water <strong>splashed</strong> onto the rocks."</li>
              <li>"The door <strong>slammed</strong> shut."</li>
              <li>"The rain <strong>pattered</strong> on the roof."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Irony and Sarcasm",
        objective: "obj_008",
        text: `
          <h3>Irony and Sarcasm</h3>
          <p><strong>Irony</strong> is saying the opposite of what you mean. <strong>Sarcasm</strong> is a form of irony used to mock or ridicule.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Situational Irony:</h4>
              <ul>
                <li>"A fire station burns down."</li>
                <li>"A pilot has a fear of heights."</li>
                <li>"A lifeguard can't swim."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Verbal Irony (Sarcasm):</h4>
              <ul>
                <li>It's raining: "<em>What a beautiful day!</em>"</li>
                <li>Someone is late: "<em>You're so punctual.</em>"</li>
                <li>Bad exam result: "<em>Well, that went well.</em>"</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Dramatic Irony:</strong>
            <ul>
              <li>When the audience knows something the characters don't</li>
              <li>"In a horror movie, the audience knows the killer is behind the door."</li>
              <li>"Romeo thinks Juliet is dead, but the audience knows she's alive."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Oxymoron and Paradox",
        objective: "obj_009",
        text: `
          <h3>Oxymoron and Paradox</h3>
          <p>Both involve contradictions, but in different ways.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oxymoron</h4>
              <p><strong>Two opposite words placed together</strong></p>
              <ul>
                <li><strong>Jumbo shrimp</strong></li>
                <li><strong>Deafening silence</strong></li>
                <li><strong>Living dead</strong></li>
                <li><strong>Bittersweet</strong></li>
                <li><strong>Civil war</strong></li>
                <li><strong>Alone together</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Paradox</h4>
              <p><strong>A statement that seems contradictory but reveals a truth</strong></p>
              <ul>
                <li><em>"The more you give, the more you receive."</em></li>
                <li><em>"Less is more."</em></li>
                <li><em>"To be free, one must be disciplined."</em></li>
                <li><em>"This sentence is false."</em></li>
                <li><em>"Youth is wasted on the young."</em></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Imagery",
        objective: "obj_010",
        text: `
          <h3>Imagery</h3>
          <p><strong>Imagery</strong> uses descriptive language to create mental pictures and appeal to the senses.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Imagery:</h4>
              <ul>
                <li><strong>Visual:</strong> Sight</li>
                <li><strong>Auditory:</strong> Hearing</li>
                <li><strong>Tactile:</strong> Touch</li>
                <li><strong>Olfactory:</strong> Smell</li>
                <li><strong>Gustatory:</strong> Taste</li>
                <li><strong>Kinesthetic:</strong> Movement</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>Visual:</strong> "The golden sun set over the blue ocean."</li>
                <li><strong>Auditory:</strong> "The birds chirped and sang."</li>
                <li><strong>Tactile:</strong> "The sand was warm between her toes."</li>
                <li><strong>Olfactory:</strong> "The smell of fresh bread filled the air."</li>
                <li><strong>Gustatory:</strong> "The chocolate was rich and sweet."</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Combined Imagery:</strong>
            <p><em>"The <strong>crisp</strong> autumn air (touch) carried the <strong>sweet scent</strong> of fallen leaves (smell). The <strong>golden</strong> sun (sight) filtered through the trees, casting dancing <strong>shadows</strong> (sight) on the ground."</em></p>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🎭 Figures of Speech</h4>
          <ul>
            <li>✓ Simile: compares with "like" or "as"</li>
            <li>✓ Metaphor: direct comparison without "like" or "as"</li>
            <li>✓ Personification: giving human qualities to non-humans</li>
            <li>✓ Hyperbole: extreme exaggeration</li>
            <li>✓ Onomatopoeia: words that sound like their meaning</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🎭 More Figures</h4>
          <ul>
            <li>✓ Alliteration: repetition of initial consonant sounds</li>
            <li>✓ Assonance: repetition of vowel sounds</li>
            <li>✓ Irony: saying the opposite of what you mean</li>
            <li>✓ Oxymoron: two opposite words together</li>
            <li>✓ Paradox: a contradictory truth</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Similes and metaphors are the same",
        correction: "Similes use 'like' or 'as'; metaphors don't",
        explanation: "A simile says X is like Y. A metaphor says X is Y."
      },
      {
        id: "mis_002",
        misconception: "Personification is only for animals",
        correction: "Personification can be used for any non-human thing",
        explanation: "You can personify objects, ideas, nature, and abstract concepts."
      },
      {
        id: "mis_003",
        misconception: "Hyperbole is lying",
        correction: "Hyperbole is exaggeration for effect, not deception",
        explanation: "Readers understand hyperbole is not meant to be taken literally."
      },
      {
        id: "mis_004",
        misconception: "Irony and sarcasm are the same",
        correction: "Sarcasm is a type of irony used to mock or ridicule",
        explanation: "All sarcasm is ironic, but not all irony is sarcastic."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Literature Analysis",
        description: "Understanding figures of speech is essential for literary analysis.",
        example: "Analyzing poems, novels, and plays for figurative language."
      },
      {
        id: "app_002",
        title: "Creative Writing",
        description: "Figures of speech make creative writing more vivid and engaging.",
        example: "Using metaphors and imagery in stories and poems."
      },
      {
        id: "app_003",
        title: "Advertising",
        description: "Advertisers use figures of speech to make their message memorable.",
        example: "Slogans and catchphrases often use alliteration and metaphors."
      },
      {
        id: "app_004",
        title: "Public Speaking",
        description: "Figures of speech make speeches more powerful and memorable.",
        example: "Using metaphors and hyperbole to emphasize points."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Metaphor", definition: "A direct comparison without 'like' or 'as'." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Hyperbole", definition: "Extreme exaggeration for effect." },
    { term: "Alliteration", definition: "Repetition of initial consonant sounds." },
    { term: "Assonance", definition: "Repetition of vowel sounds." },
    { term: "Onomatopoeia", definition: "Words that imitate sounds." },
    { term: "Irony", definition: "Saying the opposite of what is meant." },
    { term: "Sarcasm", definition: "Mocking or ridiculing irony." },
    { term: "Oxymoron", definition: "Two opposite words placed together." },
    { term: "Paradox", definition: "A contradictory statement that reveals truth." },
    { term: "Imagery", definition: "Descriptive language that appeals to the senses." }
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
      question: "What is a figure of speech?",
      type: "multiple_choice",
      options: [
        "A literal statement",
        "A non-literal expression used for effect",
        "A type of grammar rule",
        "A punctuation mark"
      ],
      answer: "A non-literal expression used for effect",
      explanation: "Figures of speech use words in non-literal ways to create effect."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a simile?",
      type: "multiple_choice",
      options: [
        "She is a rose.",
        "She is like a rose.",
        "She is as a rose.",
        "She is rose."
      ],
      answer: "She is like a rose.",
      explanation: "Similes use 'like' or 'as' to compare."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a metaphor?",
      type: "multiple_choice",
      options: [
        "He is like a rock.",
        "He is as solid as a rock.",
        "He is a rock.",
        "He is rocky."
      ],
      answer: "He is a rock.",
      explanation: "Metaphors make a direct comparison without 'like' or 'as'."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which sentence uses personification?",
      type: "multiple_choice",
      options: [
        "The wind blew strongly.",
        "The wind whispered secrets.",
        "The wind was strong.",
        "The wind blew the leaves."
      ],
      answer: "The wind whispered secrets.",
      explanation: "Whispering is a human action given to the wind."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which sentence uses hyperbole?",
      type: "multiple_choice",
      options: [
        "I am very tired.",
        "I am exhausted.",
        "I could sleep for a year.",
        "I need some rest."
      ],
      answer: "I could sleep for a year.",
      explanation: "This is an extreme exaggeration for effect."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is an example of alliteration?",
      type: "multiple_choice",
      options: [
        "Big black bug",
        "The rain in Spain",
        "Crash, bang, wallop",
        "Deafening silence"
      ],
      answer: "Big black bug",
      explanation: "Alliteration repeats the initial consonant sound 'b'."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is an example of onomatopoeia?",
      type: "multiple_choice",
      options: [
        "The bee buzzed.",
        "The bee was loud.",
        "The bee flew.",
        "The bee stung."
      ],
      answer: "The bee buzzed.",
      explanation: "Buzz imitates the sound a bee makes."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "Which sentence uses irony?",
      type: "multiple_choice",
      options: [
        "The fire station burned down.",
        "The fire station had a fire drill.",
        "The fire station was modern.",
        "The fire station closed."
      ],
      answer: "The fire station burned down.",
      explanation: "It's ironic that a place meant to fight fires burns down."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is an oxymoron?",
      type: "multiple_choice",
      options: [
        "Open secret",
        "Open door",
        "Open book",
        "Open window"
      ],
      answer: "Open secret",
      explanation: "An 'open secret' contradicts itself - something that's secret but everyone knows."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which is imagery?",
      type: "multiple_choice",
      options: [
        "The sun set.",
        "The golden sun slowly sank below the horizon.",
        "The sun went down.",
        "The sun disappeared."
      ],
      answer: "The golden sun slowly sank below the horizon.",
      explanation: "This creates a vivid visual image for the reader."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which is the most effective use of figurative language?",
      type: "multiple_choice",
      options: [
        "It was a very hot day.",
        "The day was as hot as the sun.",
        "The sun blazed like a fiery furnace.",
        "The day was warm."
      ],
      answer: "The sun blazed like a fiery furnace.",
      explanation: "This creates a vivid and powerful image."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "What effect does the metaphor 'Life is a journey' have?",
      type: "multiple_choice",
      options: [
        "It suggests life is short.",
        "It suggests life has a path and purpose.",
        "It suggests life is difficult.",
        "It suggests life is happy."
      ],
      answer: "It suggests life has a path and purpose.",
      explanation: "The journey metaphor implies direction, progress, and meaning."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which sentence uses multiple figures of speech?",
      type: "multiple_choice",
      options: [
        "The sun was bright.",
        "The angry sun roared and blazed like a dragon.",
        "The sun is a star.",
        "The sun was hot."
      ],
      answer: "The angry sun roared and blazed like a dragon.",
      explanation: "This uses personification (angry), onomatopoeia (roared), simile (like a dragon)."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which is an example of dramatic irony?",
      type: "multiple_choice",
      options: [
        "The audience knows the killer is in the house, but the character doesn't.",
        "The character says something funny.",
        "The character is surprised.",
        "The character is angry."
      ],
      answer: "The audience knows the killer is in the house, but the character doesn't.",
      explanation: "Dramatic irony occurs when the audience knows something the characters don't."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which sentence uses imagery effectively?",
      type: "multiple_choice",
      options: [
        "The pizza was good.",
        "The pizza had cheese and pepperoni.",
        "The warm, gooey cheese stretched as I bit into the spicy pepperoni pizza.",
        "The pizza was hot."
      ],
      answer: "The warm, gooey cheese stretched as I bit into the spicy pepperoni pizza.",
      explanation: "This appeals to multiple senses - touch, taste, and sight."
    },
    {
      id: "prac_016",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is a paradox?",
      type: "multiple_choice",
      options: [
        "Deafening silence",
        "Less is more",
        "Jumbo shrimp",
        "Living dead"
      ],
      answer: "Less is more",
      explanation: "A paradox seems contradictory but reveals a truth."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_figures_of_speech",
    title: "Figures of Speech Quiz",
    description: "Test your understanding of figures of speech",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a figure of speech?",
        type: "short_answer",
        answer_key: "A non-literal expression used for effect",
        explanation: "Figures of speech use words in creative, non-literal ways."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give an example of a simile.",
        type: "short_answer",
        answer_key: "She is as brave as a lion. (or similar)",
        explanation: "Similes use 'like' or 'as' to compare two things."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give an example of a metaphor.",
        type: "short_answer",
        answer_key: "Life is a journey. (or similar)",
        explanation: "Metaphors make direct comparisons without 'like' or 'as'."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Give an example of personification.",
        type: "short_answer",
        answer_key: "The wind whispered. (or similar)",
        explanation: "Personification gives human qualities to non-human things."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Give an example of hyperbole.",
        type: "short_answer",
        answer_key: "I could sleep for a year. (or similar)",
        explanation: "Hyperbole is extreme exaggeration for effect."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between alliteration and assonance?",
        type: "short_answer",
        answer_key: "Alliteration repeats initial consonant sounds; assonance repeats vowel sounds",
        explanation: "Alliteration: Peter Piper picked. Assonance: The rain in Spain."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Give an example of onomatopoeia.",
        type: "short_answer",
        answer_key: "buzz, splash, bang (any one)",
        explanation: "Onomatopoeia is a word that imitates its sound."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the difference between irony and sarcasm?",
        type: "short_answer",
        answer_key: "Sarcasm is a type of irony used to mock or ridicule",
        explanation: "All sarcasm is ironic, but not all irony is sarcastic."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between an oxymoron and a paradox?",
        type: "short_answer",
        answer_key: "Oxymoron has two opposite words together; paradox is a contradictory statement that reveals truth",
        explanation: "Oxymoron: jumbo shrimp. Paradox: less is more."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is imagery and why is it used?",
        type: "short_answer",
        answer_key: "Imagery uses descriptive language to create mental pictures and appeal to the senses",
        explanation: "Imagery makes writing vivid and helps readers visualize and connect."
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
        "Identify common figures of speech",
        "Explain the effect of figures of speech",
        "Use figures of speech in writing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are figures of speech?" },
        { time: "5-10 min", activity: "Direct Instruction - Similes and Metaphors" },
        { time: "10-15 min", activity: "Direct Instruction - Personification and Hyperbole" },
        { time: "15-20 min", activity: "Direct Instruction - Sound Devices" },
        { time: "20-25 min", activity: "Direct Instruction - Irony, Oxymoron, Paradox" },
        { time: "25-30 min", activity: "Direct Instruction - Imagery" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A non-literal expression used for effect",
        // ... full answer key
      },
      assessment: {
        ass_001: "A non-literal expression used for effect",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Find examples of figures of speech in song lyrics",
      "Write a poem using at least 5 different figures of speech",
      "Analyze a famous speech for figurative language",
      "Create an illustrated poster of figures of speech"
    ],
    differentiation: {
      struggling: [
        "Start with the most common figures (simile, metaphor, personification)",
        "Use visual aids and examples",
        "Practice with simple sentences",
        "Provide a reference chart"
      ],
      advanced: [
        "Analyze complex literary texts",
        "Write a critical analysis of figurative language",
        "Create original poetry",
        "Compare figures of speech across different cultures"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "chart",
      title: "Figures of Speech Overview",
      description: "Chart showing all figures of speech with examples",
      url: "/diagrams/figures-of-speech.png",
      alt: "Figures of speech overview chart"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Simile vs Metaphor",
      description: "Diagram comparing similes and metaphors",
      url: "/diagrams/simile-vs-metaphor.png",
      alt: "Simile vs metaphor comparison"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Imagery Types",
      description: "Infographic showing different types of imagery",
      url: "/diagrams/imagery-types.png",
      alt: "Types of imagery infographic"
    }
  ]
};