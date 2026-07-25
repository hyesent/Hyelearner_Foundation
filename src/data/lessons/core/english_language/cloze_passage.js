// Location: src/data/lessons/core/english_language/cloze_passage.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_cloze_passage",
  subject: "English Language",
  topic: "Cloze Passage",
  name: "Cloze Passage",
  icon: "📝",
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
    "Basic reading comprehension skills",
    "Understanding of grammar rules",
    "Vocabulary knowledge",
    "Understanding of context clues"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
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
      description: "Define cloze passage and explain its purpose",
      indicator: "Student can explain what a cloze passage is and why it is used"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify missing words in a cloze passage",
      indicator: "Student can recognize where words are missing in a text"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use context clues to fill in simple cloze passages",
      indicator: "Student can complete basic cloze exercises"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply grammar knowledge to fill cloze gaps",
      indicator: "Student can use grammar rules to choose correct answers"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use vocabulary knowledge to fill cloze gaps",
      indicator: "Student can select appropriate vocabulary for gaps"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use cohesive devices to fill cloze gaps",
      indicator: "Student can identify and use linking words and phrases"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Complete cloze passages with multiple-choice options",
      indicator: "Student can choose the best option from given choices"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Complete cloze passages without word options",
      indicator: "Student can fill gaps independently using context"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze and explain choices in cloze passages",
      indicator: "Student can justify why a particular word fits"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Create cloze passages for others to complete",
      indicator: "Student can design their own cloze exercises"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Cloze Passages",
    duration: "15:00 - 20:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn strategies to complete cloze passages effectively."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Cloze Passage?</h2>
      <p>A <strong>cloze passage</strong> is a text with certain words removed. The reader must use context clues, grammar knowledge, and vocabulary to fill in the missing words. Cloze exercises test reading comprehension and language skills.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Example Cloze Passage</h3>
          <p><em>"The ____ was barking loudly. It wanted to go ____ for a walk. The owner ____ the leash and they ____ out the door."</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Completed Passage</h3>
          <p><em>"The <strong>dog</strong> was barking loudly. It wanted to go <strong>outside</strong> for a walk. The owner <strong>grabbed</strong> the leash and they <strong>went</strong> out the door."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Use Cloze Passages?</h4>
        <ul>
          <li>✓ Test reading comprehension</li>
          <li>✓ Assess vocabulary knowledge</li>
          <li>✓ Check grammar understanding</li>
          <li>✓ Develop context clue skills</li>
          <li>✓ Improve overall language proficiency</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Using Context Clues",
        objective: "obj_003",
        text: `
          <h3>Context Clues</h3>
          <p><strong>Context clues</strong> are hints in the surrounding text that help you determine the missing word.</p>
          
          <div class="example-box">
            <strong>📌 Types of Context Clues:</strong>
            <ul>
              <li><strong>Definition:</strong> The word is defined in the text</li>
              <li><em>"A ____ is a person who studies weather."</em> → <strong>meteorologist</strong></li>
              <li><strong>Synonym:</strong> A similar word is used nearby</li>
              <li><em>"She was ____, or extremely happy, about the news."</em> → <strong>elated</strong></li>
              <li><strong>Example:</strong> Examples are given</li>
              <li><em>"He enjoyed ____ like wheat, oats, and corn."</em> → <strong>cereals</strong></li>
              <li><strong>Inference:</strong> You infer the meaning</li>
              <li><em>"The ____ climb left us exhausted."</em> → <strong>arduous</strong> (difficult)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"The ____ moonlit night made the garden look magical."</em></p>
            <ul>
              <li>Clue: "made the garden look magical"</li>
              <li>Answer: <strong>luminous</strong> (glowing/bright)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Using Grammar Knowledge",
        objective: "obj_004",
        text: `
          <h3>Grammar Clues</h3>
          <p>Grammar rules help you determine what type of word (noun, verb, adjective, etc.) is needed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of Speech:</h4>
              <ul>
                <li><strong>Noun:</strong> A person, place, thing, or idea</li>
                <li><em>"The ____ was beautiful."</em> → <strong>flower</strong></li>
                <li><strong>Verb:</strong> An action or state of being</li>
                <li><em>"She ____ to school."</em> → <strong>walked</strong></li>
                <li><strong>Adjective:</strong> Describes a noun</li>
                <li><em>"The ____ car is fast."</em> → <strong>red</strong></li>
                <li><strong>Adverb:</strong> Describes a verb</li>
                <li><em>"She ran ____."</em> → <strong>quickly</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Grammatical Patterns:</h4>
              <ul>
                <li><strong>Subject-Verb Agreement:</strong></li>
                <li><em>"The dog ____ barking."</em> → <strong>is/was</strong> (singular)</li>
                <li><em>"The dogs ____ barking."</em> → <strong>are/were</strong> (plural)</li>
                <li><strong>Articles:</strong> a, an, the</li>
                <li><em>"She bought ____ apple."</em> → <strong>an</strong></li>
                <li><strong>Prepositions:</strong> in, on, at, etc.</li>
                <li><em>"The book is ____ the table."</em> → <strong>on</strong></li>
                <li><strong>Conjunctions:</strong> and, but, because, etc.</li>
                <li><em>"I was tired, ____ I went home."</em> → <strong>so</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Using Vocabulary Knowledge",
        objective: "obj_005",
        text: `
          <h3>Vocabulary Clues</h3>
          <p>Knowing word meanings and how words are used helps you choose the correct answer.</p>
          
          <div class="example-box">
            <strong>📌 Word Families:</strong>
            <ul>
              <li><strong>Create:</strong> creation, creative, creator, creativity</li>
              <li><strong>Decide:</strong> decision, decisive, decisively</li>
              <li><strong>Nature:</strong> natural, naturally, naturalist</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Collocations (words that go together):</strong>
            <ul>
              <li><strong>Make</strong> a decision (not "do a decision")</li>
              <li><strong>Heavy</strong> rain (not "strong rain")</li>
              <li><strong>Fast</strong> food (not "quick food")</li>
              <li><strong>Deep</strong> sleep (not "strong sleep")</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"She had to ____ a difficult decision about her future."</em></p>
            <ul>
              <li>Clue: "decision" collocates with "make"</li>
              <li>Answer: <strong>make</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Cohesion and Coherence",
        objective: "obj_006",
        text: `
          <h3>Cohesive Devices</h3>
          <p><strong>Cohesive devices</strong> are words that connect ideas and show relationships between sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Cohesive Devices:</h4>
              <ul>
                <li><strong>Addition:</strong> and, also, furthermore</li>
                <li><strong>Contrast:</strong> but, however, although</li>
                <li><strong>Cause/Effect:</strong> because, therefore, so</li>
                <li><strong>Sequence:</strong> first, next, finally</li>
                <li><strong>Example:</strong> for example, such as</li>
                <li><strong>Summary:</strong> in conclusion, overall</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><em>"She was tired, ____ she kept working."</em></li>
                <li>→ <strong>but</strong> (contrast)</li>
                <li><em>"He studied hard, ____ he passed the exam."</em></li>
                <li>→ <strong>so</strong> (result)</li>
                <li><em>"____, I would like to thank everyone."</em></li>
                <li>→ <strong>Finally</strong> (sequence)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Multiple-Choice Cloze",
        objective: "obj_007",
        text: `
          <h3>Multiple-Choice Questions</h3>
          <p>In multiple-choice cloze passages, you choose the best option from four choices.</p>
          
          <div class="example-box">
            <strong>📌 Strategy:</strong>
            <ul>
              <li><strong>Step 1:</strong> Read the entire passage first</li>
              <li><strong>Step 2:</strong> Look at each gap and the options</li>
              <li><strong>Step 3:</strong> Use context clues to eliminate wrong answers</li>
              <li><strong>Step 4:</strong> Check grammar and meaning</li>
              <li><strong>Step 5:</strong> Read the completed passage to check</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <p><em>"The ____ of the city was growing rapidly. More people were moving ____ for work. The government needed to ____ more housing. They ____ a new plan to build apartment buildings."</em></p>
            <ul>
              <li>1. A) size B) population C) height D) wealth → <strong>B) population</strong></li>
              <li>2. A) there B) here C) where D) when → <strong>A) there</strong></li>
              <li>3. A) destroy B) remove C) provide D) reduce → <strong>C) provide</strong></li>
              <li>4. A) ignored B) cancelled C) announced D) forgot → <strong>C) announced</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Open-Ended Cloze",
        objective: "obj_008",
        text: `
          <h3>Open-Ended Cloze</h3>
          <p>In open-ended cloze passages, you must provide the missing words without options.</p>
          
          <div class="example-box">
            <strong>📌 Strategy:</strong>
            <ul>
              <li><strong>Step 1:</strong> Read the entire passage</li>
              <li><strong>Step 2:</strong> Identify the context of each gap</li>
              <li><strong>Step 3:</strong> Determine what type of word is needed</li>
              <li><strong>Step 4:</strong> Think of possible words that fit</li>
              <li><strong>Step 5:</strong> Choose the best word for each gap</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <p><em>"The ____ was shining brightly. The children were playing ____ the park. They were having ____ wonderful time. Their parents were sitting ____ a bench, watching them."</em></p>
            <ul>
              <li>1. <strong>sun</strong> (noun - subject of "was shining")</li>
              <li>2. <strong>in</strong> (preposition - location)</li>
              <li>3. <strong>a</strong> (article - "a wonderful time")</li>
              <li>4. <strong>on</strong> (preposition - sitting on a bench)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Common Mistakes in Cloze",
        objective: "obj_009",
        text: `
          <h3>Avoiding Common Mistakes</h3>
          <p>Watch out for these common errors when completing cloze passages.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Common Mistakes:</h4>
              <ul>
                <li><strong>Rushing:</strong> Not reading the whole passage first</li>
                <li><strong>Ignoring grammar:</strong> Not checking subject-verb agreement</li>
                <li><strong>Wrong word type:</strong> Using a noun when a verb is needed</li>
                <li><strong>Ignoring context:</strong> Not using surrounding clues</li>
                <li><strong>Not checking:</strong> Failing to read the completed passage</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ How to Avoid Them:</h4>
              <ul>
                <li><strong>Read first:</strong> Always read the entire passage</li>
                <li><strong>Check grammar:</strong> Ensure agreement and tense</li>
                <li><strong>Identify type:</strong> Determine what part of speech is needed</li>
                <li><strong>Use clues:</strong> Look at surrounding words and sentences</li>
                <li><strong>Review:</strong> Read the completed passage aloud</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Creating Cloze Passages",
        objective: "obj_010",
        text: `
          <h3>Designing Your Own Cloze Passages</h3>
          <p>Creating cloze passages helps you understand how they work.</p>
          
          <div class="example-box">
            <strong>📌 Steps to Create a Cloze Passage:</strong>
            <ul>
              <li><strong>Step 1:</strong> Choose a suitable passage (100-150 words)</li>
              <li><strong>Step 2:</strong> Identify words to remove</li>
              <li><strong>Step 3:</strong> Remove content words (nouns, verbs, adjectives)</li>
              <li><strong>Step 4:</strong> Remove function words (prepositions, conjunctions)</li>
              <li><strong>Step 5:</strong> Decide on the gap pattern (e.g., every 5th word)</li>
              <li><strong>Step 6:</strong> Test your cloze on someone else</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"Create a cloze passage from this text:</em></p>
            <p><em>"The cat was sleeping peacefully on the windowsill. Suddenly, a loud noise woke it up. The cat jumped down and ran to the door to investigate."</em></p>
            <ul>
              <li>Remove: sleeping, loud, jumped, ran, investigate</li>
              <li><em>"The cat was ____ peacefully on the windowsill. Suddenly, a ____ noise woke it up. The cat ____ down and ____ to the door to ____."</em></li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📝 Cloze Passage Skills</h4>
          <ul>
            <li>✓ Use context clues</li>
            <li>✓ Apply grammar rules</li>
            <li>✓ Use vocabulary knowledge</li>
            <li>✓ Look for cohesive devices</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Read the entire passage first</li>
            <li>✓ Determine the word type needed</li>
            <li>✓ Check subject-verb agreement</li>
            <li>✓ Read the completed passage</li>
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
        misconception: "Only one word can fill each gap",
        correction: "Multiple words can sometimes fit correctly",
        explanation: "Some gaps can have more than one possible answer, but one is usually the best."
      },
      {
        id: "mis_002",
        misconception: "You should fill gaps as you read for the first time",
        correction: "Read the whole passage first to understand the context",
        explanation: "Reading the entire passage gives you a complete picture before filling gaps."
      },
      {
        id: "mis_003",
        misconception: "Grammar doesn't matter in cloze passages",
        correction: "Grammar is essential for choosing the correct answer",
        explanation: "You must consider subject-verb agreement, tense, and word order."
      },
      {
        id: "mis_004",
        misconception: "Cloze passages only test vocabulary",
        correction: "They test vocabulary, grammar, and comprehension",
        explanation: "Cloze passages assess multiple language skills simultaneously."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Language Assessment",
        description: "Cloze passages are used in tests to measure language proficiency.",
        example: "Many standardized tests include cloze exercises."
      },
      {
        id: "app_002",
        title: "Learning New Languages",
        description: "Cloze exercises help language learners improve skills.",
        example: "Teachers use cloze passages to check comprehension."
      },
      {
        id: "app_003",
        title: "Reading Comprehension",
        description: "Cloze passages improve reading comprehension skills.",
        example: "Students learn to use context clues effectively."
      },
      {
        id: "app_004",
        title: "Self-Study",
        description: "Cloze passages are useful for independent learning.",
        example: "Learners can practice and test themselves."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Cloze Passage", definition: "A text with missing words that must be filled in." },
    { term: "Context Clue", definition: "Hints in the text that help determine the missing word." },
    { term: "Cohesive Device", definition: "Words that connect ideas in a text." },
    { term: "Content Word", definition: "Words that carry meaning (nouns, verbs, adjectives)." },
    { term: "Function Word", definition: "Words that show grammatical relationships (articles, prepositions)." },
    { term: "Collocation", definition: "Words that naturally go together." },
    { term: "Subject-Verb Agreement", definition: "The rule that subjects and verbs must match in number." },
    { term: "Part of Speech", definition: "The category a word belongs to (noun, verb, etc.)." }
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
      question: "What is a cloze passage?",
      type: "multiple_choice",
      options: [
        "A passage with all words missing",
        "A passage with some words missing",
        "A passage with no punctuation",
        "A passage with pictures"
      ],
      answer: "A passage with some words missing",
      explanation: "A cloze passage has some words removed that must be filled in."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "Fill the blank: 'The ____ was shining in the sky.'",
      type: "multiple_choice",
      options: ["moon", "star", "sun", "cloud"],
      answer: "sun",
      explanation: "The sun shines in the sky. 'Cloud' could also be possible but 'sun' is the most logical."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Fill the blank: 'She ____ to school every day.'",
      type: "multiple_choice",
      options: ["walks", "walk", "walked", "walking"],
      answer: "walks",
      explanation: "'She' is third person singular, so the verb should be 'walks'."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Fill the blank: 'The students ____ studying for the exam.'",
      type: "multiple_choice",
      options: ["is", "am", "are", "was"],
      answer: "are",
      explanation: "'Students' is plural, so the verb must be 'are'."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Fill the blank: 'She ____ to the store yesterday.'",
      type: "multiple_choice",
      options: ["go", "goes", "went", "going"],
      answer: "went",
      explanation: "'Yesterday' indicates past tense, so 'went' is correct."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Fill the blank: 'The ____ of the book was very interesting.'",
      type: "multiple_choice",
      options: ["cover", "page", "plot", "price"],
      answer: "plot",
      explanation: "The 'plot' is the story of a book and is what can be interesting."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "Fill the blank: 'I was tired, ____ I went to bed.'",
      type: "multiple_choice",
      options: ["but", "so", "because", "although"],
      answer: "so",
      explanation: "'So' shows the result of being tired."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Fill the blank: 'She studied hard, ____ she still failed.'",
      type: "multiple_choice",
      options: ["so", "because", "but", "and"],
      answer: "but",
      explanation: "'But' shows contrast between studying hard and failing."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Choose the correct word: 'The ____ weather prevented us from going out.'",
      type: "multiple_choice",
      options: ["nice", "beautiful", "terrible", "warm"],
      answer: "terrible",
      explanation: "'Terrible' weather would prevent going out. Nice/beautiful/warm weather would encourage going out."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Choose the correct word: 'The children were playing ____ the garden.'",
      type: "multiple_choice",
      options: ["on", "at", "in", "by"],
      answer: "in",
      explanation: "We use 'in' for being inside an enclosed area like a garden."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Fill the blank with the best word: 'The ____ was very loud and woke everyone up.'",
      type: "multiple_choice",
      options: ["noise", "sound", "voice", "music"],
      answer: "noise",
      explanation: "'Noise' suggests an unpleasant or disruptive sound that would wake people up."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Fill the blank: '____ you like coffee or tea?'",
      type: "multiple_choice",
      options: ["Do", "Are", "Does", "Is"],
      answer: "Do",
      explanation: "'You' takes the auxiliary verb 'do' in questions."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why does 'on' fit in: 'The book is ____ the table.'?",
      type: "multiple_choice",
      options: [
        "Because it shows location",
        "Because it shows time",
        "Because it shows direction",
        "Because it shows possession"
      ],
      answer: "Because it shows location",
      explanation: "'On' is a preposition of place showing where the book is located."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "Fill the blank: 'The ____ of the company made the final decision.'",
      type: "multiple_choice",
      options: ["CEO", "clerk", "intern", "driver"],
      answer: "CEO",
      explanation: "The CEO (Chief Executive Officer) is typically the one who makes final decisions in a company."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which word would you remove to create a cloze gap in: 'The dog ran quickly.'?",
      type: "multiple_choice",
      options: ["The", "dog", "ran", "quickly"],
      answer: "quickly",
      explanation: "'Quickly' is a content word that can be removed to test vocabulary knowledge."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Fill the blank: '____ the rain, we went to the park.'",
      type: "multiple_choice",
      options: ["Despite", "Because", "Since", "Although"],
      answer: "Despite",
      explanation: "'Despite' shows that we went to the park even though it was raining."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_cloze",
    title: "Cloze Passage Quiz",
    description: "Test your understanding of cloze passages and strategies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a cloze passage?",
        type: "short_answer",
        answer_key: "A text with some words missing that must be filled in",
        explanation: "A cloze passage is a text with gaps that the reader must complete."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "Fill the blank: 'The ____ is barking.'",
        type: "short_answer",
        answer_key: "dog",
        explanation: "A dog is commonly associated with barking."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Fill the blank: 'She ____ a letter to her friend.'",
        type: "short_answer",
        answer_key: "wrote",
        explanation: "'Wrote' is the past tense of 'write,' which collocates with 'letter.'"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Fill the blank: 'They ____ playing football when I arrived.'",
        type: "short_answer",
        answer_key: "were",
        explanation: "'They' is plural and the action was ongoing in the past, so 'were' is correct."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Fill the blank: 'She ____ not want to go to the party.'",
        type: "short_answer",
        answer_key: "does",
        explanation: "'She' is third person singular, so the auxiliary verb is 'does'."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Fill the blank: 'The ____ of the story was very surprising.'",
        type: "short_answer",
        answer_key: "ending",
        explanation: "The 'ending' of a story can be surprising."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Fill the blank: 'He was hungry, ____ he ate a sandwich.'",
        type: "short_answer",
        answer_key: "so",
        explanation: "'So' shows the result of being hungry."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Fill the blank: '____ the weather was bad, we enjoyed our trip.'",
        type: "short_answer",
        answer_key: "Although",
        explanation: "'Although' shows contrast between the bad weather and enjoying the trip."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Explain why 'in' fits: 'The keys are ____ my pocket.'",
        type: "short_answer",
        answer_key: "Because 'in' indicates something is inside a container or enclosed space",
        explanation: "'In' is used for being inside an enclosed space like a pocket."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Create a cloze gap in: 'The students are studying for their exams.'",
        type: "short_answer",
        answer_key: "The students are ____ for their exams. (removing 'studying')",
        explanation: "Any content word (students, studying, exams) can be removed to create a cloze gap."
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
        "Understand cloze passages",
        "Use context and grammar clues",
        "Complete cloze passages effectively"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a cloze passage?" },
        { time: "5-10 min", activity: "Direct Instruction - Context Clues" },
        { time: "10-15 min", activity: "Direct Instruction - Grammar and Vocabulary" },
        { time: "15-20 min", activity: "Direct Instruction - Cohesion" },
        { time: "20-25 min", activity: "Direct Instruction - Strategies" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A passage with some words missing",
        // ... full answer key
      },
      assessment: {
        ass_001: "A text with some words missing that must be filled in",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create your own cloze passage for a partner",
      "Find a cloze passage online and complete it",
      "Explain your choices for each answer",
      "Create a multiple-choice cloze passage"
    ],
    differentiation: {
      struggling: [
        "Start with simple passages with few gaps",
        "Provide word banks for support",
        "Use shorter passages",
        "Practice with multiple-choice options"
      ],
      advanced: [
        "Create open-ended cloze passages",
        "Analyze why certain words fit better than others",
        "Design cloze passages for different levels",
        "Complete passages without any options"
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
      title: "Cloze Passage Structure",
      description: "Diagram showing how cloze passages work",
      url: "/diagrams/cloze-structure.png",
      alt: "Cloze passage structure"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Context Clues Types",
      description: "Chart showing different types of context clues",
      url: "/diagrams/context-clues-types.png",
      alt: "Context clues types chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Cloze Passage Strategies",
      description: "Infographic with strategies for completing cloze passages",
      url: "/diagrams/cloze-strategies.png",
      alt: "Cloze passage strategies infographic"
    }
  ]
};