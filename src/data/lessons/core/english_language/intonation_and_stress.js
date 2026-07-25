// Location: src/data/lessons/core/english_language/intonation_and_stress.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_intonation_stress",
  subject: "English Language",
  topic: "Intonation and Stress",
  name: "Intonation and Stress",
  icon: "🎵",
  grade_level: "JSS1 - SS3",
  estimated_duration: "40 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 10,
    totalPracticeQuestions: 16,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 12,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Basic pronunciation skills",
    "Knowledge of English sounds",
    "Understanding of syllables",
    "Listening skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_cloze_passage",
      name: "Cloze Passage",
      file: "core/english_language/cloze_passage.js"
    },
    {
      id: "eng_lesson_synonyms_antonyms",
      name: "Synonyms and Antonyms",
      file: "core/english_language/synonyms_and_antonyms.js"
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
      description: "Define intonation and stress",
      indicator: "Student can explain what intonation and stress are"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify stressed syllables in words",
      indicator: "Student can find the stressed syllable in common words"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between stressed and unstressed words in sentences",
      indicator: "Student can identify content and function words"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply stress patterns in sentences",
      indicator: "Student can stress the correct words in sentences"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use rising and falling intonation correctly",
      indicator: "Student can use appropriate intonation in questions and statements"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use intonation to convey meaning and attitude",
      indicator: "Student can use intonation to show emotions and emphasis"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Recognize intonation patterns in listening",
      indicator: "Student can identify intonation patterns in spoken English"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use intonation in complex sentences",
      indicator: "Student can apply intonation patterns in longer sentences"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply stress and intonation naturally in speech",
      indicator: "Student can speak with natural rhythm and melody"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze stress and intonation patterns in authentic speech",
      indicator: "Student can identify patterns in native speaker recordings"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Intonation and Stress",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn how to sound natural with correct stress and intonation patterns."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Intonation and Stress?</h2>
      <p><strong>Stress</strong> is the emphasis placed on certain syllables or words in speech. <strong>Intonation</strong> is the rise and fall of the voice when speaking. Together, they create the "music" of spoken English.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔊 Stress</h3>
          <p>Emphasis on syllables or words</p>
          <ul>
            <li>✓ Louder</li>
            <li>✓ Longer</li>
            <li>✓ Higher pitch</li>
          </ul>
          <p><em>"PHO-to-graph"</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🎵 Intonation</h3>
          <p>Rise and fall of voice</p>
          <ul>
            <li>✓ Rising (↗)</li>
            <li>✓ Falling (↘)</li>
            <li>✓ Flat</li>
          </ul>
          <p><em>"Are you coming↗?"</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why It Matters</h4>
        <ul>
          <li>✓ Sound more natural and fluent</li>
          <li>✓ Convey meaning more effectively</li>
          <li>✓ Be better understood by listeners</li>
          <li>✓ Show emotions and attitudes</li>
          <li>✓ Improve listening comprehension</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Word Stress",
        objective: "obj_002",
        text: `
          <h3>Word Stress Rules</h3>
          <p><strong>Word stress</strong> is the emphasis given to a particular syllable in a word. Every word with more than one syllable has one stressed syllable.</p>
          
          <div class="example-box">
            <strong>📌 How to Identify Stress:</strong>
            <ul>
              <li><strong>Stressed syllable:</strong> Louder, longer, and higher in pitch</li>
              <li><strong>Unstressed syllable:</strong> Quieter, shorter, and lower in pitch</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Rules for Word Stress:</h4>
              <ul>
                <li><strong>Two-syllable nouns:</strong> Stress on first syllable</li>
                <li><strong>TA-ble</strong>, <strong>MO-ther</strong>, <strong>SIS-ter</strong></li>
                <li><strong>Two-syllable verbs:</strong> Stress on second syllable</li>
                <li><strong>be-GIN</strong>, <strong>pre-SENT</strong>, <strong>a-RRIVE</strong></li>
                <li><strong>Words ending in -tion:</strong> Stress before -tion</li>
                <li><strong>in-for-MA-tion</strong>, <strong>e-du-CA-tion</strong></li>
                <li><strong>Words ending in -ic:</strong> Stress before -ic</li>
                <li><strong>a-TOM-ic</strong>, <strong>sci-EN-ti-fic</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Stress Changes:</h4>
              <ul>
                <li><strong>Record</strong> (RE-cord = noun)</li>
                <li><strong>Record</strong> (re-CORD = verb)</li>
                <li><strong>Present</strong> (PRE-sent = noun)</li>
                <li><strong>Present</strong> (pre-SENT = verb)</li>
                <li><strong>Progress</strong> (PRO-gress = noun)</li>
                <li><strong>Progress</strong> (pro-GRESS = verb)</li>
                <li><strong>Object</strong> (OB-ject = noun)</li>
                <li><strong>Object</strong> (ob-JECT = verb)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Sentence Stress",
        objective: "obj_003",
        text: `
          <h3>Sentence Stress</h3>
          <p><strong>Sentence stress</strong> is the emphasis placed on certain words in a sentence. <strong>Content words</strong> are stressed; <strong>function words</strong> are unstressed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stressed Words:</h4>
              <ul>
                <li><strong>Nouns:</strong> <em>"The <strong>dog</strong> is barking."</em></li>
                <li><strong>Verbs:</strong> <em>"She <strong>ran</strong> home."</em></li>
                <li><strong>Adjectives:</strong> <em>"It's a <strong>beautiful</strong> day."</em></li>
                <li><strong>Adverbs:</strong> <em>"He spoke <strong>quickly</strong>."</em></li>
                <li><strong>Question words:</strong> <em>"<strong>Where</strong> are you going?"</em></li>
                <li><strong>Negative words:</strong> <em>"I <strong>don't</strong> know."</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Unstressed Words:</h4>
              <ul>
                <li><strong>Articles:</strong> <em>"<strong>The</strong> dog is barking."</em></li>
                <li><strong>Prepositions:</strong> <em>"She ran <strong>to</strong> home."</em></li>
                <li><strong>Conjunctions:</strong> <em>"It's beautiful <strong>and</strong> sunny."</em></li>
                <li><strong>Auxiliary verbs:</strong> <em>"He <strong>has</strong> spoken."</em></li>
                <li><strong>Pronouns:</strong> <em>"<strong>She</strong> ran home."</em></li>
                <li><strong>Possessive adjectives:</strong> <em>"<strong>My</strong> book."</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Neutral:</strong> "I <strong>saw</strong> her <strong>yesterday</strong>."</li>
              <li><strong>Emphasizing subject:</strong> "<strong>I</strong> saw her yesterday." (Not someone else)</li>
              <li><strong>Emphasizing object:</strong> "I saw <strong>her</strong> yesterday." (Not someone else)</li>
              <li><strong>Emphasizing time:</strong> "I saw her <strong>yesterday</strong>." (Not today)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Rising Intonation",
        objective: "obj_005",
        text: `
          <h3>Rising Intonation (↗)</h3>
          <p><strong>Rising intonation</strong> is when the voice goes up at the end of a sentence or phrase.</p>
          
          <div class="example-box">
            <strong>📌 When to Use Rising Intonation:</strong>
            <ul>
              <li><strong>Yes/No Questions:</strong></li>
              <li><em>"Are you coming↗?"</em></li>
              <li><em>"Did you see him↗?"</em></li>
              <li><strong>List Items (except last):</strong></li>
              <li><em>"I need apples↗, oranges↗, and bananas."</em></li>
              <li><strong>Incomplete Statements:</strong></li>
              <li><em>"When I arrived↗..."</em></li>
              <li><strong>Clarification Questions:</strong></li>
              <li><em>"You said what↗?"</em></li>
              <li><strong>Showing Surprise:</strong></li>
              <li><em>"Really↗?"</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li>"<strong>Are</strong> you <strong>going</strong> to the <strong>store</strong>↗?"</li>
              <li>"<strong>Is</strong> this <strong>your</strong> <strong>book</strong>↗?"</li>
              <li>"<strong>Can</strong> you <strong>help</strong> me↗?"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Falling Intonation",
        objective: "obj_005",
        text: `
          <h3>Falling Intonation (↘)</h3>
          <p><strong>Falling intonation</strong> is when the voice goes down at the end of a sentence or phrase.</p>
          
          <div class="example-box">
            <strong>📌 When to Use Falling Intonation:</strong>
            <ul>
              <li><strong>Statements:</strong></li>
              <li><em>"I am coming↘."</em></li>
              <li><em>"She lives in London↘."</em></li>
              <li><strong>Commands:</strong></li>
              <li><em>"Close the door↘."</em></li>
              <li><em>"Sit down↘."</em></li>
              <li><strong>Wh-Questions:</strong></li>
              <li><em>"Where are you going↘?"</em></li>
              <li><em>"What time is it↘?"</em></li>
              <li><strong>Last item in a list:</strong></li>
              <li><em>"... and bananas↘."</em></li>
              <li><strong>Expressing certainty:</strong></li>
              <li><em>"I know that↘."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li>"I <strong>live</strong> in <strong>New</strong> York↘."</li>
              <li>"<strong>Where</strong> are you <strong>going</strong>↘?"</li>
              <li>"<strong>Please</strong> sit <strong>down</strong>↘."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Intonation for Different Meanings",
        objective: "obj_006",
        text: `
          <h3>Intonation Changes Meaning</h3>
          <p>The same sentence can have different meanings depending on intonation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 "She's coming."</h4>
              <ul>
                <li><strong>Falling (↘):</strong> Statement of fact</li>
                <li><em>"She's coming↘."</em></li>
                <li><strong>Rising (↗):</strong> Question/Uncertainty</li>
                <li><em>"She's coming↗?"</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 "I'm fine."</h4>
              <ul>
                <li><strong>Falling (↘):</strong> Genuine, confident</li>
                <li><em>"I'm fine↘."</em></li>
                <li><strong>Rising (↗):</strong> Uncertain, questioning</li>
                <li><em>"I'm fine↗?"</em></li>
                <li><strong>Flat:</strong> Uninterested, dismissive</li>
                <li><em>"I'm fine."</em></li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice Sentences:</strong>
            <ul>
              <li>"<strong>You're</strong> <strong>going</strong>?" (Question vs statement)</li>
              <li>"<strong>This</strong> is <strong>my</strong> <strong>book</strong>?" (Question vs statement)</li>
              <li>"<strong>What</strong> did you <strong>say</strong>?" (Angry vs curious)</li>
              <li>"<strong>Really</strong>?" (Surprise vs disbelief vs excitement)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Intonation in Longer Sentences",
        objective: "obj_008",
        text: `
          <h3>Intonation in Complex Sentences</h3>
          <p>In longer sentences, intonation patterns show structure and meaning.</p>
          
          <div class="example-box">
            <strong>📌 Patterns:</strong>
            <ul>
              <li><strong>Main clause:</strong> Usually has a falling tone</li>
              <li><strong>Subordinate clause:</strong> Often has a rising tone if it comes first</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Because I was tired, I went home.</strong></li>
              <li>"<strong>Because</strong> I was <strong>tired</strong>↗, I <strong>went</strong> home↘."</li>
              <li><strong>I went home because I was tired.</strong></li>
              <li>"I <strong>went</strong> home↘ <strong>because</strong> I was <strong>tired</strong>↘."</li>
              <li><strong>If you study, you will pass.</strong></li>
              <li>"<strong>If</strong> you <strong>study</strong>↗, you will <strong>pass</strong>↘."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <ul>
              <li>"<strong>When</strong> she <strong>arrived</strong>↗, we <strong>started</strong> the <strong>meeting</strong>↘."</li>
              <li>"<strong>Although</strong> it was <strong>raining</strong>↗, we <strong>went</strong> out↘."</li>
              <li>"<strong>If</strong> I had <strong>known</strong>↗, I <strong>would</strong> have <strong>come</strong>↘."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Emotional Intonation",
        objective: "obj_006",
        text: `
          <h3>Intonation and Emotions</h3>
          <p>Intonation can express different emotions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Happiness:</h4>
              <ul>
                <li>Higher pitch, rising at end</li>
                <li><em>"I <strong>won</strong> the <strong>prize</strong>↗!"</em></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Anger:</h4>
              <ul>
                <li>Strong falling, louder</li>
                <li><em>"<strong>Don't</strong> do that↘!"</em></li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Sadness:</h4>
              <ul>
                <li>Lower pitch, falling</li>
                <li><em>"I <strong>lost</strong> my <strong>keys</strong>↘."</em></li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Surprise:</h4>
              <ul>
                <li>High rising, emphasized</li>
                <li><em>"<strong>Really</strong>↗?"</em></li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Boredom:</h4>
              <ul>
                <li>Flat, low pitch</li>
                <li><em>"That's interesting."</em></li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Excitement:</h4>
              <ul>
                <li>High rising, faster</li>
                <li><em>"I <strong>can't</strong> <strong>wait</strong>↗!"</em></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Improving Your Intonation",
        objective: "obj_009",
        text: `
          <h3>Tips for Natural Intonation</h3>
          <p>Practice these techniques to improve your intonation.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Practice Techniques:</h4>
              <ul>
                <li><strong>Shadowing:</strong> Repeat after native speakers</li>
                <li><strong>Listen and copy:</strong> Pay attention to intonation</li>
                <li><strong>Record yourself:</strong> Compare with native speakers</li>
                <li><strong>Read aloud:</strong> Practice with texts</li>
                <li><strong>Watch movies:</strong> Pay attention to actors' intonation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Useful Resources:</h4>
              <ul>
                <li>YouTube videos with subtitles</li>
                <li>English podcasts</li>
                <li>Audio books</li>
                <li>News broadcasts</li>
                <li>Language learning apps</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice Sentences:</strong>
            <ul>
              <li>"<strong>How</strong> are you <strong>doing</strong>↘?" (Statement)</li>
              <li>"<strong>How</strong> are you <strong>doing</strong>↗?" (Question)</li>
              <li>"<strong>Good</strong> <strong>morning</strong>↘!" (Greeting)</li>
              <li>"<strong>Good</strong> <strong>morning</strong>↗?" (Questioning)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔊 Stress</h4>
          <ul>
            <li>✓ Word stress: emphasis on syllables</li>
            <li>✓ Sentence stress: emphasis on content words</li>
            <li>✓ Changes meaning</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🎵 Intonation</h4>
          <ul>
            <li>✓ Rising (↗) for questions, lists</li>
            <li>✓ Falling (↘) for statements, commands</li>
            <li>✓ Shows emotions and attitudes</li>
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
        misconception: "Word stress doesn't matter in English",
        correction: "Word stress is crucial for clear pronunciation",
        explanation: "Wrong word stress can make words unrecognizable or mean different things."
      },
      {
        id: "mis_002",
        misconception: "Intonation is the same in all sentences",
        correction: "Intonation changes based on sentence type and meaning",
        explanation: "Questions, statements, and commands use different intonation patterns."
      },
      {
        id: "mis_003",
        misconception: "Stressing every word makes you more understandable",
        correction: "Only content words should be stressed; stressing function words sounds unnatural",
        explanation: "Native English speakers stress content words and reduce function words."
      },
      {
        id: "mis_004",
        misconception: "Intonation is not important for comprehension",
        correction: "Intonation helps convey meaning and emotions",
        explanation: "The same words can have completely different meanings with different intonation."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Daily Conversation",
        description: "Correct stress and intonation make you sound more natural.",
        example: "Native speakers use stress and intonation to show meaning and emotion."
      },
      {
        id: "app_002",
        title: "Public Speaking",
        description: "Good stress and intonation make speeches more engaging.",
        example: "Varying intonation keeps the audience interested and shows enthusiasm."
      },
      {
        id: "app_003",
        title: "Listening Comprehension",
        description: "Understanding intonation helps you understand spoken English.",
        example: "Knowing when to expect a question or statement helps you follow conversations."
      },
      {
        id: "app_004",
        title: "Professional Communication",
        description: "Appropriate intonation conveys confidence and professionalism.",
        example: "Falling intonation in statements shows certainty and authority."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Stress", definition: "Emphasis placed on a syllable or word in speech." },
    { term: "Intonation", definition: "The rise and fall of the voice when speaking." },
    { term: "Syllable", definition: "A unit of sound in a word containing a vowel sound." },
    { term: "Content Word", definition: "A word that carries meaning (nouns, verbs, adjectives, adverbs)." },
    { term: "Function Word", definition: "A word that shows grammatical relationships (articles, prepositions, conjunctions)." },
    { term: "Rising Intonation", definition: "Voice going up at the end of a sentence (↗)." },
    { term: "Falling Intonation", definition: "Voice going down at the end of a sentence (↘)." },
    { term: "Pitch", definition: "The highness or lowness of the voice." },
    { term: "Rhythm", definition: "The pattern of stressed and unstressed syllables." },
    { term: "Shadowing", definition: "Repeating after a native speaker to practice pronunciation." }
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
      question: "What is stress in speech?",
      type: "multiple_choice",
      options: [
        "The speed of speaking",
        "Emphasis on a syllable or word",
        "The volume of speaking",
        "The melody of speech"
      ],
      answer: "Emphasis on a syllable or word",
      explanation: "Stress is the emphasis or prominence given to certain syllables or words in speech."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is intonation?",
      type: "multiple_choice",
      options: [
        "The loudness of speech",
        "The rise and fall of the voice",
        "The speed of speech",
        "The clarity of speech"
      ],
      answer: "The rise and fall of the voice",
      explanation: "Intonation is the pattern of pitch changes in speech."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Where is the stress in 'photograph'?",
      type: "multiple_choice",
      options: ["PHO-to-graph", "pho-TO-graph", "pho-to-GRAPH", "PHOTO-graph"],
      answer: "PHO-to-graph",
      explanation: "'Photograph' is stressed on the first syllable (PHO)."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "In 'She is a teacher,' which words are stressed?",
      type: "multiple_choice",
      options: ["She, is", "is, a", "She, teacher", "a, teacher"],
      answer: "She, teacher",
      explanation: "Content words (She, teacher) are stressed; function words (is, a) are unstressed."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What intonation pattern is used for yes/no questions?",
      type: "multiple_choice",
      options: ["Rising (↗)", "Falling (↘)", "Flat", "High"],
      answer: "Rising (↗)",
      explanation: "Yes/no questions typically use rising intonation at the end."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What intonation pattern is used for statements?",
      type: "multiple_choice",
      options: ["Rising (↗)", "Falling (↘)", "Flat", "Low"],
      answer: "Falling (↘)",
      explanation: "Statements typically use falling intonation at the end."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What intonation pattern is used for wh-questions?",
      type: "multiple_choice",
      options: ["Rising (↗)", "Falling (↘)", "Flat", "High"],
      answer: "Falling (↘)",
      explanation: "Wh-questions (what, where, when, etc.) typically use falling intonation."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "How does intonation show emotion?",
      type: "multiple_choice",
      options: [
        "By changing the words",
        "By changing the pitch pattern",
        "By speaking louder",
        "By speaking faster"
      ],
      answer: "By changing the pitch pattern",
      explanation: "Different emotions are expressed through different intonation patterns."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "If someone says 'Really?' with rising intonation, what do they mean?",
      type: "multiple_choice",
      options: [
        "They're certain",
        "They're surprised or questioning",
        "They're angry",
        "They're bored"
      ],
      answer: "They're surprised or questioning",
      explanation: "Rising intonation on 'Really?' shows surprise or disbelief."
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "hard",
      question: "In the sentence 'I love you,' which word changes meaning if stressed?",
      type: "multiple_choice",
      options: ["I", "love", "you", "All of them"],
      answer: "All of them",
      explanation: "Stressing different words changes the meaning: I (not someone else), love (not just like), you (not someone else)."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "How is 'If you study, you will pass' intonated?",
      type: "multiple_choice",
      options: [
        "Both clauses fall",
        "First clause rises, second falls",
        "First clause falls, second rises",
        "Both rise"
      ],
      answer: "First clause rises, second falls",
      explanation: "The subordinate clause ('If you study') rises, and the main clause falls ('you will pass')."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is the best way to practice intonation?",
      type: "multiple_choice",
      options: [
        "Read silently",
        "Shadow native speakers",
        "Only practice grammar",
        "Never listen to English"
      ],
      answer: "Shadow native speakers",
      explanation: "Shadowing (repeating after native speakers) helps you learn natural intonation patterns."
    },
    {
      id: "prac_013",
      objective: "obj_002",
      difficulty: "hard",
      question: "Where is the stress in 'education'?",
      type: "multiple_choice",
      options: [
        "E-du-ca-tion",
        "e-DU-ca-tion",
        "e-du-CA-tion",
        "e-du-ca-TION"
      ],
      answer: "e-du-CA-tion",
      explanation: "Words ending in -tion have stress on the syllable before -tion (CA)."
    },
    {
      id: "prac_014",
      objective: "obj_003",
      difficulty: "hard",
      question: "In the sentence 'I bought a red car,' which words are stressed?",
      type: "multiple_choice",
      options: [
        "I, bought",
        "I, car",
        "bought, red, car",
        "red, car"
      ],
      answer: "bought, red, car",
      explanation: "All content words (bought, red, car) are stressed; function words (I, a) are unstressed."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "What emotion does flat intonation suggest?",
      type: "multiple_choice",
      options: ["Excitement", "Boredom", "Surprise", "Happiness"],
      answer: "Boredom",
      explanation: "Flat intonation often suggests boredom, disinterest, or lack of emotion."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "How can you analyze your own intonation?",
      type: "multiple_choice",
      options: [
        "Only think about it",
        "Record and listen to yourself",
        "Ask a friend to describe it",
        "Just practice more"
      ],
      answer: "Record and listen to yourself",
      explanation: "Recording yourself is the best way to hear and analyze your own intonation."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_intonation_stress",
    title: "Intonation and Stress Quiz",
    description: "Test your understanding of intonation and stress patterns",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between stress and intonation?",
        type: "short_answer",
        answer_key: "Stress is emphasis on syllables/words; intonation is the rise and fall of the voice",
        explanation: "Stress is about emphasis, intonation is about pitch patterns."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Where is the stress in 'computer'?",
        type: "short_answer",
        answer_key: "com-PU-ter (second syllable)",
        explanation: "'Computer' is stressed on the second syllable."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "medium",
        question: "What types of words are usually stressed in a sentence?",
        type: "short_answer",
        answer_key: "Content words (nouns, verbs, adjectives, adverbs)",
        explanation: "Content words carry the meaning and are stressed in sentences."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "What types of words are usually unstressed in a sentence?",
        type: "short_answer",
        answer_key: "Function words (articles, prepositions, conjunctions, auxiliaries, pronouns)",
        explanation: "Function words show grammatical relationships and are unstressed."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What intonation pattern is used for yes/no questions?",
        type: "short_answer",
        answer_key: "Rising intonation (↗)",
        explanation: "Yes/no questions typically end with rising intonation."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "What intonation pattern is used for statements?",
        type: "short_answer",
        answer_key: "Falling intonation (↘)",
        explanation: "Statements typically end with falling intonation."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "hard",
        question: "What is the intonation pattern for wh-questions?",
        type: "short_answer",
        answer_key: "Falling intonation (↘)",
        explanation: "Wh-questions typically end with falling intonation."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "How does intonation affect meaning?",
        type: "short_answer",
        answer_key: "The same words can have different meanings with different intonation patterns",
        explanation: "Intonation can change a statement to a question or express different emotions."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "How would you intonate 'If you study, you will pass'?",
        type: "short_answer",
        answer_key: "Rising on 'if you study,' falling on 'you will pass'",
        explanation: "Subordinate clauses rise; main clauses fall."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Name one technique to improve your intonation.",
        type: "short_answer",
        answer_key: "Shadowing (repeating after native speakers) or recording yourself",
        explanation: "Shadowing and self-recording are effective ways to improve intonation."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "40 minutes",
      objectives: [
        "Understand stress and intonation",
        "Apply stress patterns correctly",
        "Use rising and falling intonation"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are stress and intonation?" },
        { time: "5-10 min", activity: "Direct Instruction - Word Stress" },
        { time: "10-15 min", activity: "Direct Instruction - Sentence Stress" },
        { time: "15-20 min", activity: "Direct Instruction - Intonation Patterns" },
        { time: "20-25 min", activity: "Direct Instruction - Emotions and Intonation" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Emphasis on a syllable or word",
        // ... full answer key
      },
      assessment: {
        ass_001: "Stress is emphasis on syllables/words; intonation is the rise and fall of the voice",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Record yourself reading a paragraph and analyze your intonation",
      "Shadow a native speaker for 5 minutes daily",
      "Practice different emotions with the same sentence",
      "Watch a movie scene and copy the actors' intonation"
    ],
    differentiation: {
      struggling: [
        "Start with basic stress patterns",
        "Use visual aids with arrows for intonation",
        "Practice with short sentences",
        "Provide audio examples"
      ],
      advanced: [
        "Analyze stress patterns in authentic speech",
        "Compare different dialects' intonation",
        "Practice with longer, complex sentences",
        "Create a presentation on intonation patterns"
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
      title: "Word Stress Patterns",
      description: "Chart showing word stress patterns with examples",
      url: "/diagrams/word-stress.png",
      alt: "Word stress patterns chart"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Intonation Patterns",
      description: "Diagram showing rising and falling intonation",
      url: "/diagrams/intonation-patterns.png",
      alt: "Intonation patterns diagram"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Stress and Intonation Tips",
      description: "Infographic with tips for improving stress and intonation",
      url: "/diagrams/stress-intonation-tips.png",
      alt: "Stress and intonation tips infographic"
    }
  ]
};